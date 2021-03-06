#!/usr/bin/env node

/*
 * The MIT License
 *
 * Copyright 2014 Ray Walker <hello@raywalker.it>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function (undefined) {

    var simulate = false;
    var debug = false;
    var verbose = false;
    var cron = false;

    var archive_mode = false;
    var reverse = true;
    var force_analyze = false;

    var nuke = false;

    var scrape_uri = false;

    var database = false;

    var default_pragma = 'PRAGMA automatic_index=OFF;';

    var start_time = 0;

// ===========================================================================

    var fs = require('fs'),
        path = require('path'),
        chalk = require('chalk'),
        config = require('config');

    (function (args) {

        while (args.length > 0) {

            var argument = args.shift();

            switch (argument) {
                case '-h':
                    console.log('Usage: scada.js [options] [http://scrape.url/] [path/to/sqlite/database.db]');
                    process.exit(1);
                    break;

                case '--cron':
                    cron = true;
                    break;

                case '--debug':
                    debug = true;
                    console.log(' !! Debugging is enabled');
                    break;

                case '--verbose':
                    console.log(' !! Debugging is enabled');
                    debug = true;
                    console.log(' !! Verbose logging enabled');
                    verbose = true;
                    break;

                case '-a':
                    archive_mode = true;
                    break;

                case '-c':
                    var config_file = args.shift();

                    if (config_file) {
                        console.log('Using config file', config_file);
                        try {
                            config = JSON.parse(fs.readFileSync(path.resolve(config_file)));
                        } catch (err) {
                            console.error(err);
                            process.exit(1);
                        }
                    } else {
                        console.log('Option -c specified but config file is not defined');
                        process.exit(1);
                    }
                    break;
                case '--analyze':
                    force_analyze = true;
                    break;

                case '--no-reverse':
                    reverse = false;
                    break;

                case '--simulate':
                case '-s':
                    simulate = true;
                    console.log(' !! Simulating work, no changes will be written to the db');
                    break;

                case '--nuke':
                    console.log(chalk.yellow(' !!!!  NUKING TABLES !!!!'));
                    nuke = true;
                    break;

                default:
                    if (argument.match(/^http/gi)) {
                        scrape_uri = argument;
                    }
                    if (argument.match(/\.db$/i)) {
                        database = argument;
                    }
            }
        }
    }(process.argv));

    // Load configuration
    if (!config) {
        try {
            config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'config.json'), 'utf-8'));
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }

    var user = require(path.resolve(__dirname, '..', 'user.js'));

    user.privileges(config.user, config.group);

    // If no database file was passed in command line parameters
    if (!database) {
        // Use configured database file
        database = config.db.sqlite;

        if (!database) {
            console.error('Database is not defined, exiting');
            process.exit(1);
        }

        if (database.indexOf('/') !== 0 && database.indexOf('..') !== 0) {
            // not an absolute path, assume it's relative to the config file
            database = path.resolve(__dirname, '..', database);
        }
    }


    if (!scrape_uri) {
        if (archive_mode) {
            scrape_uri = config.scrape.archive;
        } else {
            scrape_uri = config.scrape.current;
        }
    }

    console.log('Remote:\t', scrape_uri);
    console.log('DB:\t', database);

// ===========================================================================

    var moment = require('moment');
    var Q = require('q');
    var temp = require('temp');
    var _ = require('lodash');
    var _s = require('underscore.string');

    var sqlite3 = require('sqlite3');

    var db = new sqlite3.cached.Database(database);

    var generators = [],
        missing = [];

    if (verbose) {

        db.on('trace', function (sql) {
            var now = new Date().getTime();

            console.log(_s.lpad(now - start_time, 10, ' '), sql);

        });
    }

    //temp.track();

    Q.longStackSupport = true;

    //var CronJob = require('cron').CronJob;

    (function () {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FMath%2Fround

        /**
         * Decimal adjustment of a number.
         *
         * @param   {String}    type    The type of adjustment.
         * @param   {Number}    value   The number.
         * @param   {Integer}   exp     The exponent (the 10 logarithm of the adjustment base).
         * @returns {Number}            The adjusted value.
         */
        function decimalAdjust(type, value, exp) {
            // If the exp is undefined or zero...
            if (typeof exp === 'undefined' || +exp === 0) {
                return Math[type](value);
            }
            value = +value;
            exp = +exp;
            // If the value is not a number or the exp is not an integer...
            if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                return NaN;
            }
            // Shift
            value = value.toString().split('e');
            value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
            // Shift back
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
        }

        // Decimal round
        if (!Math.round10) {
            Math.round10 = function (value, exp) {
                return decimalAdjust('round', value, exp);
            };
        }
        // Decimal floor
        if (!Math.floor10) {
            Math.floor10 = function (value, exp) {
                return decimalAdjust('floor', value, exp);
            };
        }
        // Decimal ceil
        if (!Math.ceil10) {
            Math.ceil10 = function (value, exp) {
                return decimalAdjust('ceil', value, exp);
            };
        }

    })();

    function output(text) {
        process.stdout.write(text);
    }

    function dbg(text) {
        if (debug) {
            output(text);
        }
    }

    function verb(text) {
        if (verbose) {
            output(text);
        }
    }

    var shutting_down = false;

    process.on('SIGINT', function () {
        console.log('\nCaught interrupt signal ...');
        shutting_down = true;
    });

    function checkExit() {
        if (shutting_down) {
            if (force_analyze) {
                console.log('\nAnalyzing...');
                db.exec('ANALYZE;');
            }
            db.exec('PRAGMA automatic_index = ON;', function () {
                console.log('\nDone');
                process.exit();
            });
        }
    }


// ===========================================================================


// Pull the data from remote URI
    function scrape(uri) {
        var jsdom = require('jsdom');

        var deferred = Q.defer();

        jsdom.env({
            url: uri,
            scripts: [],
            done: function (err, window) {
                var $ = require('jquery')(window),
                    links = null;

                if (!err) {
                    links = $.makeArray($("pre a[href$=zip]"));
                    if (archive_mode && reverse) {
                        links.reverse();
                    }
                    deferred.resolve(links);
                } else {
                    deferred.reject(err);
                }
            }
        });

        return deferred.promise;

    }

// ===========================================================================


// Check if we've parsed this data before
    function checkNewData(href) {
        var deferred = Q.defer();

        db.get('SELECT filename FROM scrape WHERE filename=?', path.basename(href), function (err, row) {
            if (err) {
                console.log(err);
                deferred.reject();
            } else {

                // Empty row means this data has not been parsed yet
                if (row === undefined) {
                    deferred.resolve(true);
                } else {
                    deferred.resolve(false);
                }
            }
        });

        return deferred.promise;

    }


// ===========================================================================

    /**
     * Gets a zip file from local file or remote,
     *
     * @param   string    file_uri
     * @param   int       i
     * @returns promise
     */
    function fetchZipFile(file_uri, i) {

        checkExit();

        var http = require('http'),
            AdmZip = require('adm-zip'),
            BufferJoiner = require('bufferjoiner'),
            deferred = Q.defer();

        dbg('\n [' + _s.lpad(i, 5, ' ') + '] Processing: ' + file_uri + ' ... ');

        if (file_uri.indexOf('http') === 0) {

            // Read from HTTP
            http.get(file_uri, function (res) {

                var buffer = new BufferJoiner();

                res.on('data', function (chunk) {

                    buffer.add(chunk);

                }).on('end', function () {
                    // Finished downloading zip file
                    var zip = buffer.join(true),
                        admzip,
                        entries;

                    try {
                        admzip = new AdmZip(zip);
                    } catch (e) {
                        // Error parsing zip file
                        deferred.reject(e);
                        return;
                    }

                    entries = admzip.getEntries();

                    if (entries.length > 1) {
                        verb('Archive file, length ' + entries.length);
                        // Archive of zips
                        // So extract to a temporary dir
                        try {
                            // Make temporary directory, prefixed with nem_archive_
                            temp.mkdir('nem_archive_', function (err, dir) {

                                verb('\nUsing temporary directory: ' + dir);

                                try {
                                    admzip.extractAllTo(dir, true);
                                } catch (e) {
                                    // Error extracting zip file contents
                                    console.error(e);
                                    deferred.reject(e);
                                    return false;
                                }

                                // Read the contents of the extracted directory
                                fs.readdir(dir, function (err, files) {
                                    if (err) {
                                        throw err;
                                    }
                                    // All good, resolve the promise
                                    deferred.resolve([files, dir]);
                                });
                            });
                        } catch (e) {
                            console.error(e);
                            deferred.reject(e);
                        }

                    } else {
                        // Zip contains only a single file
                        if (entries[0].name.match(/csv$/i)) {
                            // it is a .csv file

                            parseCSV(entries[0].getData(), file_uri, function () {
                                deferred.resolve();
                            });

                        } else {
                            console.error('ERROR: Archive does not contain a .CSV file');
                            deferred.reject();
                        }
                    }


                });

            }).on('error', function (e) {
                console.log('ERROR fetching ', file_uri, e);
                deferred.reject(e);
            });

        } else {
            // Read from file system

            // if the file has a .zip extension
            if (file_uri.match(/zip$/i)) {

                (function (file) {

                    var processEntries = function () {
                            // quit loop if we have exit signal
                            checkExit();

                            if (entries.length > 0) {
                                parseEntry(entries.shift());
                            } else {
                                deferred.resolve();
                            }
                        },
                        parseEntry = function (entry) {
                            if (entry.name.match(/csv$/i)) {
                                // Single file
                                parseCSV(entry.getData(), file_uri, function () {
                                    processEntries();
                                });

                            } else {
                                processEntries();
                            }
                        },
                        archZip = new AdmZip(file),
                        entries = archZip.getEntries();

                    processEntries();

                }(file_uri));

            } else {
                fs.readFile(file_uri, function (err, obj) {
                    parseCSV(obj, file_uri, function () {
                        deferred.resolve();
                    });
                });
            }
        }

        return deferred.promise;

    }

// ===========================================================================

    /**
     *
     * @param buffer
     * @param uri
     * @param next
     * @returns {*}
     */
    function parseCSV(buffer, uri, next) {

        // quit now if exit signal received
        checkExit();

        var csv_text = buffer.toString('utf-8'),
            csv = require('csv');

        return csv.parse(csv_text, function (err, obj) {

            if (err) {
                console.error(err);
                return false;
            }

            /* @todo Fix forced timezone information: what timezone format is the nem data returned in? */
            var timestr = obj[0][5].replace(/\//g, '-') + 'T' + obj[0][6] + '+10:00',
                time = moment(timestr).unix(),
                added = [];

            db.get('SELECT scrape_time FROM scrape WHERE scrape_time=?', [time], function (err, result) {

                if (err) {
                    console.error(err);
                    checkExit();
                    return next();
                }

                if (simulate) {
                    // @todo this is not an accurate simulation
                    return next();
                }

                // undefined means time isn't in db yet
                if (result !== undefined) {
                    // this time already exists in the database
                    console.warn(chalk.yellow('scrape_time already exists in `scrape`', time, result));

                    // check for exit signal
                    checkExit();

                    // callback
                    return next();
                }

                // begin database transaction
                db.exec('BEGIN IMMEDIATE TRANSACTION');

                return db.run('INSERT INTO scrape(scrape_time,filename) VALUES(?,?)', [time, path.basename(uri)], function () {
                    var ok = true,
                        statement = db.prepare('INSERT INTO scada_values(scrape_time,generator_id,value) VALUES (?,?,?)');

                    _.each(obj, function (row) {

                        if (row[0] === 'D') {
                            /**
                             * 0 = I,
                             * 1 = DISPATCH,
                             * 2 = UNIT_SCADA,
                             * 3 = 1,
                             * 4 = SETTLEMENTDATE,
                             * 5 = DUID,
                             * 6 = SCADAVALUE
                             */
                            var duid = _s.trim(row[5]),
                                genID = generators[duid],
                                ident;

                            if (!genID) {
                                if (!missing[duid]) {
                                    missing[duid] = row;
                                }
                                // We don't have NEM registration information for this generator,
                                // so tell it to use the 'unknown' generator
                                if (verbose) {
                                    console.error('Generator not found', duid);
                                }
                                genID = 1;
                            }

                            ident = time + '_' + genID;

                            if (!added[ident]) {
                                // Haven't added this generator yet
                                added[ident] = +row[6];
                            } else {
                                // Already added this duid, so sum its value
                                added[ident] += +row[6];
                            }
                        }
                    });

                    _.forIn(added, function (val, ident) {
                        try {
                            var scrape_gen = ident.split('_');
                            return statement.run([scrape_gen[0], scrape_gen[1], val]);
                        } catch (err) {
                            console.error(err);
                            ok = false;
                            return false;
                        }
                    });

                    if (ok) {
                        db.exec('COMMIT');
                    } else {
                        db.exec('ROLLBACK');
                    }

                    return statement.finalize(function () {
                        checkExit();
                        return next();
                    });

                });
            });


        });

    }

// ===========================================================================

    /**
     * Convert number of seconds into time object
     *
     * @param {integer} secs Number of seconds to convert
     * @return object
     */
    function secondsToTime(secs) {
        var hours = Math.floor(secs / (60 * 60));

        var divisor_for_minutes = secs % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);

        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);

        var obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    /**
     *
     * @param {type} diffs
     * @returns {Number}
     */
    function rollingAverage(diffs) {
        var l = diffs.length,
            j = 0,
            total = 0;

        for (var i = l - 1; i > l - 11 && i > 0; i--) {
            total += diffs[i];
            j++;
        }

        return Math.round10(total / (j * 1000), -2);
    }

    /**
     *
     * @param {type} length
     * @param {type} day
     * @param {type} diffs
     * @returns {String}
     */
    function humanTime(length, day, diffs) {
        var t = (length - day) * rollingAverage(diffs),
            obj;

        if (isNaN(t)) {
            return '';
        }
        obj = secondsToTime(t);

        return obj.h + ':' + _s.lpad(obj.m, 2, '0') + ':' + _s.lpad(obj.s, 2, '0');
    }

    var progress_text = ['-', "\\", '|', '/', '-', "\\", '|', '/'],
        progress_i = 0;

    function progress() {
        output('\r' + progress_text[progress_i++] + '\r');
        if (progress_i >= progress_text.length) {
            progress_i = 0;
        }
    }

    function startArchiveParsing(done) {

        dbg('Starting archive processing ...');
        // ARCHIVE results
        return scrape(scrape_uri).then(function (response) {

            var day = 0,
                parsed = 0,
                total = 0,
                skip = 0,
                length = response.length,
                total_archives = length * 288,
                start = new Date().getTime(),
                last_t = start,
                diff = 0,
                diffs = [];

            console.log(length + ' days to process, approximately ' + total_archives + ' archives total');

            function continueProcessing() {
                var t = new Date().getTime();

                diff = t - last_t;

                diffs.push(diff);

                last_t = t;

                checkExit();

                if (response.length > 0) {

                    ++day;

                    var archive = response.shift(),
                        percent = _s.lpad(Math.round10(day / length * 100, -2), ' ', 5);

                    output('\r Day ' + day + ' ... ' + percent + '%' + ' ' + Math.round10((diff) / 1000, -1) + 's per day, finished in ~ ' + humanTime(length, day, diffs) + _s.rpad('', 30, ' ') + '\r');

                    if (verbose) {
                        output('\n Day ' + day + ' ... ' + parsed + ' / ' + total + ' (' + skip + ' skipped)');
                    }

                    return getArchive(archive.href);

                } else {
                    console.log('\nFinished processing', day, 'days, containing', total, ' total 5 minute archives, of which', skip, 'skipped.');
                    return done();
                }
            }

            function processArchive(file_path) {
                var def = Q.defer();

                checkNewData(file_path).then(function (newData) {

                    progress();

                    checkExit();

                    total++;

                    if (newData) {

                        return fetchZipFile(file_path, day).then(function () {

                            parsed++;

                            return def.resolve();

                        });
                    } else {
                        skip++;

                        return def.resolve();

                    }

                });

                return def.promise;
            }

            /**
             * Fetches archive of archives, processes each archive in turn
             * @param {string} href Address of the archive file
             * @returns {undefined}
             */
            function getArchive(href) {

                verb('Fetching ' + href);

                return fetchZipFile(href, day).then(function (data) {
                    var files = data[0],
                        file_path = data[1];

                    function continueProcessingSubArchive() {
                        if (files.length > 0) {
                            return processSubArchive(files.shift());
                        } else {
                            return continueProcessing();
                        }
                    }

                    function processSubArchive(file) {
                        return processArchive(path.resolve(file_path, file)).then(function () {
                            return continueProcessingSubArchive();
                        });
                    }

                    return continueProcessingSubArchive();

                }, function (err) {
                    console.error(err);
                });
            }

            continueProcessing();

        });
    }

    function startCurrentParsing(done) {
        // CURRENT results
        scrape(scrape_uri).then(function (response) {

            var i = 0,
                skip = 0,
                errors = 0,
                length = response.length,
                processResponse = function () {

                    checkExit();

                    if (response.length > 0) {

                        return continueProcessing(response.shift().href);

                    } else {
                        dbg('Finished processing', scrape_uri);
                        return endProcessing();
                    }

                },
                continueProcessing = function (href) {

                    return checkNewData(href)
                        .then(function (newData) {

                            if (newData) {

                                // output padded index
                                output(_s.lpad(i, 4, ' ') + '\b\b\b\b');

                                //
                                return fetchZipFile(href, i).then(function () {
                                    i++;

                                    return processResponse();
                                }, function () {
                                    errors++;
                                    dbg('REJECTED ' + href);
                                    return processResponse();
                                });

                            } else {
                                skip++;
                                return processResponse();
                            }

                        }, function (err) {
                            console.error('REJECTED checkNewData()', err);
                            return processResponse();
                        });
                },
                endProcessing = function () {
                    console.log('\nFinished processing ', i, 'of', length, 'items\n', skip, 'skipped, ', errors, 'errors.');
                    return done();
                };

            output('Scraping data from ' + scrape_uri + ' - ' + length + ' items : ');

            return processResponse();
        });
    }

    function execPragma() {
        var q = Q.defer(),
            i = 0,
            len = Object.keys(config.db.pragma).length;

        _.forIn(config.db.pragma, function (val, key) {
            var sql = 'PRAGMA ' + key + ' = ' + val + ';';

            db.exec(sql, function (err) {
                if (err) {
                    console.error(err);
                }

                if (++i === len) {
                    console.log('done');
                    db.exec(default_pragma, function (err) {
                        if (err) {
                            console.error(err);
                        }
                        return q.resolve();
                    });
                }
            });

        });

        return q.promise;
    }

    function done() {
        shutting_down = true;
        checkExit();
    }

    function start() {

        start_time = new Date().getTime();

//        _.forIn(config.db.pragma, function(val, key) {
//            console.log(key, val);
//            if (key === 'journal_mode') {
//                val = 'MEMORY';
//            }
//            pragma += 'PRAGMA ' + key + '=' + val + '; ';
//        });


        return execPragma().then(function () {

            return db.all('SELECT id, duid FROM generator', function (err, rows) {

                if (err) {
                    console.error(err);
                    process.exit(1);
                }

                if (!rows.length) {
                    console.error('No generators found in the database!');
                    process.exit(1);
                }

                _.each(rows, function (gen) {
                    generators[gen.duid] = gen.id;
                });

                if (archive_mode) {
                    return startArchiveParsing(done);
                } else {
                    return startCurrentParsing(done);
                }
            });
        });
    }

    if (nuke) {
        return db.exec('PRAGMA foreign_keys = OFF; BEGIN; DELETE FROM scada_values; DELETE FROM scrape; END; PRAGMA foreign_keys = ON; ', function () {
            console.log(chalk.yellow('TABLES scada_values and scrape CLEARED!'));
            process.exit(1);
        });
    } else {
        return start();
    }

}());
