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
/*jslint node:true */

(function(require) {
    'use strict';

    var delete_tables = false,
//        simulate = false,
        debug = false,
        pragma = 'PRAGMA busy_timeout = 600; PRAGMA foreign_keys = ON; PRAGMA temp_store = MEMORY; PRAGMA synchronous = FULL; PRAGMA journal_mode = WAL; PRAGMA cache_size = -512000;';

    var registration_file = false,
        database = false,
        schema_file = false,
        config = false;

    var fs = require('fs'),
        path = require('path');

    (function(args) {

        while (args.length > 0) {

            var argument = args.shift();

            switch (argument) {
                case 'node':
                    break;
                case __filename:
                    break;
                case '-h':
                    console.log('Usage: ' + __filename + ' [options] [registration_file] [path/to/sqlite/database.db]\n');
                    process.exit(1);
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

                case '-d':
                    var database = args.shift();

                    if (config_file) {
                        console.log('Using database', database);
                    } else {
                        console.log('Option -d specified but database is not defined');
                        process.exit(1);
                    }
                    break;

                case '--verbose':
                    /* fall through */
                case '--debug':
                    debug = true;
                    console.log(' > Debug enabled');
                    break;

                case '--delete-tables':
                    /* fall through */
                case '--nuke':
                    delete_tables = true;
                    break;

//                case '--simulate':
//                    simulate = true;
//                    console.log('NOT IMPLEMENTED -- !! Simulating work, no changes will be written to the db');
//                    break;

                case '-s':
                    var schema_file = args.shift();

                    if (schema_file) {
                        console.log('Using schema', schema_file);
                    } else {
                        console.log('Option -s specified but schema is not defined');
                        process.exit(1);
                    }
                    break;

                default:
                    if (!registration_file) {
                        console.log('Using registration file from command line:', argument);
                        registration_file = argument;
                    } else if (!database) {
                        console.log('Using database from command line:', argument);
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

    // Drop privileges, run as configured user
    try {
        if (!config.user || !config.group) {
            throw new Error('No user or group specified, not assuming anything');
        }

        if (config.user === 'root' || config.group === 'root') {
            throw new Error('Cowardly refusing to run as superuser');
        }
        process.setgid(config.user);
        process.setuid(config.group);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    // If no registration file was passed in command line parameters
    if (!registration_file) {
        // Use configured registration file
        registration_file = config.db.registration_file;

        if (!registration_file) {
            console.error('Registration file is not defined, exiting');
            process.exit(1);
        }
    }
    // If no database file was passed in command line parameters
    if (!database) {
        // Use configured database file
        database = config.db.sqlite;

        if (!database) {
            console.error('Database is not defined, exiting');
            process.exit(1);
        }
    }

    // If no schema file was passed in command line parameters
    if (!schema_file) {
        // Use configured database file
        schema_file = config.db.schema;

        if (!schema_file) {
            console.error('Schema is not defined, exiting');
            process.exit(1);
        }
    }

    // And now we begin

    var csv = require('csv'),
        sqlite3 = require('sqlite3').verbose(),
        db = new sqlite3.Database(database),
        _ = require('lodash'),
        Q = require('q'),
        _s = require('underscore.string'),
        trim = _s.trim,
        start_time = false;

    if (debug) {

        db.on('trace', function(sql) {
            var now = new Date().getTime();

            console.log(_s.lpad(now - start_time, 10, ' '), sql);

        });
    }

    /**
     *
     * @param {type} data
     * @returns {Q@call;defer.promise}
     */
    function phase1(data) {

        var deferred = Q.defer(),
            technologies = [{type: 'unknown', description: 'unknown'}],
            participants = [{name: 'unknown'}];
        /*
         * Participant,     0
         * Station Name,    1
         * Region,          2
         * Dispatch Type,   3
         * Category,        4
         * Classification   5
         * Fuel Source - Primary            6
         * Fuel Source - Descriptor         7
         * Technology Type - Primary        8
         * Technology Type - Descriptor     9
         * Physical Unit No.                10
         * Unit Size (MW)   11
         * Aggregation      12
         * DUID             13
         * Reg Cap (MW)     14
         * Max Cap (MW)     15
         * Max ROC/Min      16
         */

        csv.parse(data, function(err, csv_obj) {

            if (err) {
                console.error(err);
                process.exit(1);
            }

            var i = 0;

            _.each(csv_obj, function(row) {
                // Firstly populate the technology and participant databases
                // As generator and fuels are dependent on these ids
                if (i++ === 0) {
                    return true;
                }

                var name = trim(row[0]);

                if (!_.find(participants, {name: name})) {
                    participants.push({
                        name: name
                    });
                }

                var type = trim(row[8]),
                    desc = trim(row[9]);

                if (!_.find(technologies, {type: type, description: desc})) {
                    technologies.push({type: type, description: desc});
                }

            });

//            participants = _.uniq(participants);

//        console.log('Participants: ', participant.length);
//        console.log('Technologies: ', technology.length);

// ===========================================================================

//          Add first data to DB

// ===========================================================================


            db.serialize(function() {

                if (delete_tables) {
                    var schema = fs.readFileSync(schema_file, 'utf-8'),
                        chalk = require('chalk');

                    console.warn(chalk.yellow(' !!!! DELETING TABLES !!!!\n'));

                    db.exec(schema);

                }

                db.exec('BEGIN IMMEDIATE TRANSACTION');


                var st = db.prepare("INSERT INTO participant (name) VALUES (?)");

                _.each(participants, function(p) {
                    return st.run([p.name]);
                });

                st = db.prepare("INSERT INTO technology (type, description) VALUES (?,?)");

                _.each(technologies, function(t) {
                    return st.run([t.type, t.description]);
                });

                st.finalize();

                db.exec('COMMIT');

// ===========================================================================

//          Check it's all good

// ===========================================================================

                return db.all('SELECT * FROM participant ORDER BY id', function(err, rows) {
                    var db_participants = rows;

                    return db.all('SELECT * FROM technology ORDER By id', function(err, rows) {
                        var db_technologies = rows;

                        if (!db_technologies.length) {
                            deferred.reject();
                        } else {
                            deferred.resolve([csv_obj, db_technologies, db_participants]);
                        }
                    });
                });

            }); // end db serialize



        });

        return deferred.promise;
    }

// ===========================================================================

//          Finished first pass, now add fuel and generators

// ===========================================================================

    function phase2(csv_obj, technologies, participants) {

        console.log("Technologies:\t", technologies.length);
        console.log("Participants:\t", participants.length);

        var i = 0,
            fuels = [{
                    type: 'unknown',
                    description: 'unknown',
                    technology_id: 1
                }],
            generators = [{
                    name: 'unknown',
                    duid: 'unknown',
                    reg_cap: 0,
                    max_cap: 0,
                    participant: participants[0],
                    technology: technologies[0],
                    state: 'unknown',
                    fuel: {
                        type: 'unknown',
                        description: 'unknown'
                    }
                }],
            deferred = Q.defer();

        try {

            _.each(csv_obj, function(row) {

                if (i++ === 0) {
                    // Skip header row
                    return true;
                }

//            if (trim(row[13]) === '-') {
//                console.log(row);
//            }

                /*
                 * Participant,     0
                 * Station Name,    1
                 * Region,          2
                 * Dispatch Type,   3
                 * Category,        4
                 * Classification   5
                 * Fuel Source - Primary            6
                 * Fuel Source - Descriptor         7
                 * Technology Type - Primary        8
                 * Technology Type - Descriptor     9
                 * Physical Unit No.                10
                 * Unit Size (MW)   11
                 * Aggregation      12
                 * DUID             13
                 * Reg Cap (MW)     14
                 * Max Cap (MW)     15
                 * Max ROC/Min      16
                 */

// ===========================================================================

//              Add fuel if not exist

// ===========================================================================
                var tech, techID, participant;
                try {
                    tech = _.find(technologies, {type: trim(row[8]), description: trim(row[9])});
                    techID = tech.id;

                    if (!tech) {
                        console.log('Tech not found');
                        throw 'Technology not found ' + row[9];
                    }
                } catch (err) {
                    console.error(err);
                    process.exit(1);
                }

                var fueldesc = trim(row[7]),
                    fueltype = trim(row[6]);

                // if this fuel type and description is new
                if (!_.find(fuels, {type: fueltype, description: fueldesc})) {

                    fuels.push({
                        type: fueltype,
                        description: fueldesc,
                        technology_id: techID
                    });
                }

// ===========================================================================

//              Add generator if not exist

// ===========================================================================
                try {
                    participant = _.find(participants, {name: trim(row[0])});

                    if (!participant) {
                        throw 'Participant not found: ' + row[0];
                    }
                } catch (err) {
                    console.error(err);
                    console.log(participants);
                    process.exit(1);
                }

                var genname = trim(row[1]),
                    genstate = trim(row[2]),
                    duid = trim(row[13]),
                    reg_cap = +row[14],
                    max_cap = +row[15],
                    gen = _.find(generators, {name: genname, duid: duid});

//        console.log(i, techID, duid, gen);

                if (!gen) {
                    // Haven't added this duid yet
                    gen = {
                        name: genname,
                        state: genstate,
                        duid: duid,
                        participant: participant,
                        technology: tech,
                        fuel: {
                            type: fueltype,
                            description: fueldesc
                        },
                        max_cap: isNaN(reg_cap) ? 0 : reg_cap,
                        reg_cap: isNaN(max_cap) ? 0 : max_cap
                    };
                    generators.push(gen);
                } else {

                    // Added this generator before, but
                    // DUIDs can be duplicated so
                    // sum the total capacity for each DUID
                    gen.max_cap = isNaN(max_cap) ? gen.max_cap : gen.max_cap + max_cap;
                    gen.reg_cap = isNaN(reg_cap) ? gen.reg_cap : gen.reg_cap + reg_cap;
                }

            }); // end _.each

            console.log('Fuel types:\t', fuels.length);
            console.log('Generators:\t', generators.length);

        } catch (err) {

            console.error(err);
            process.exit(1);

        }


// ===========================================================================

//          Add fuel and generators to the db

// ===========================================================================
        db.serialize(function() {

            db.exec('BEGIN IMMEDIATE TRANSACTION');

//            db.exec('DELETE FROM fuel; DELETE FROM generator');

            var st = db.prepare("INSERT INTO fuel (type, description, technology_id) VALUES (?,?,?)");

            _.each(fuels, function(f) {
                return st.run([f.type, f.description, f.technology_id]);
            });

//        console.log(generator[Math.round(Math.random() * generator.length - 1)]);

            st = db.prepare("INSERT INTO generator (name, state, duid, participant_id, technology_id, reg_cap, max_cap) VALUES (?,?,?,?,?,?,?)");

            _.each(generators, function(g) {
                return st.run([g.name, g.state, g.duid, g.participant.id, g.technology.id, g.reg_cap, g.max_cap]);
            });

            st.finalize();

            return db.exec('COMMIT', function() {
                deferred.resolve(generators);
            });
        });

        return deferred.promise;
// ===========================================================================

//          End of task
// ===========================================================================

    }

    /**
     * Read registration file and enters NEM registered generator into database
     *
     * @returns {undefined}
     */
    function init(next) {
        start_time = new Date().getTime();

        console.log('Database\t', database);
        console.log('Registration\t', registration_file, '\n');

        return fs.readFile(registration_file, "utf8", function(error, data) {

            if (error) {
                console.error(error);
                process.exit(1);
            }

            _.forIn(config.pragma, function(val, key) {
                console.log(key, val);
                pragma += ' PRAGMA ' + key + ' = ' + val + ';';
            });

            return db.exec(pragma, function() {

                return phase1(data).then(function(response) {
                    //
                    return phase2(response[0], response[1], response[2]).then(function(generators) {

                        /*
                         "generator_id" INTEGER PRIMARY KEY,
                         "name" TEXT NOT NULL,
                         "duid" TEXT NOT NULL,
                         "state" TEXT NOT NULL,
                         "participant_name" TEXT NOT NULL,
                         "technology_type" TEXT NOT NULL,
                         "technology_description" TEXT,
                         "fuel_type" TEXT NOT NULL,
                         "fuel_description" TEXT,
                         "reg_cap" REAL,
                         "max_cap" REAL
                         */
                        return db.all('SELECT * FROM generator ORDER BY id', function(err, rows) {

                            console.log('Refreshing flat_generators table ...');

                            return db.serialize(function() {
                                var i = 0;

                                db.exec('BEGIN IMMEDIATE TRANSACTION');

                                var st = db.prepare('INSERT INTO flat_generators (generator_id,name,duid,state,participant_name,technology_type,technology_description,fuel_type,fuel_description,reg_cap,max_cap) VALUES (?,?,?,?,?,?,?,?,?,?,?)', function() {
                                    console.log('Prepared');
                                });

                                _.each(rows, function(db_gen) {
                                    var gen = generators[i++];
                                    try {
                                        return st.run([db_gen.id, gen.name, gen.duid, gen.state, gen.participant.name, gen.technology.type, gen.technology.description, gen.fuel.type, gen.fuel.description, gen.reg_cap, gen.max_cap]);
                                    } catch (err) {
                                        console.error(err);
                                        process.exit(1);
                                    }
                                });

                                st.finalize();

                                return db.exec('COMMIT', function() {
                                    return next();
                                });

                                // end update flat_generators
                            });
                            // end select generator
                        });
                        // end phase2
                    });
                    // end phase1
                });
                // end exec pragma
            });
            // end readfile
        });
    }

    function onComplete() {
        db.close();
        console.log('Done');
        return true;
    }

    if (delete_tables) {

        var readline = require('readline'),
            rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

        rl.question("\nAre you sure you want to delete ALL tables in '" + path.basename(database) + "' ? [N,y] ", function(answer) {
            if (answer === 'y' || answer === 'Y') {
                init(onComplete);
            } else {
                console.log('Exiting...');
                process.exit(0);
            }
        });
    } else {
        return init(onComplete);
    }

}(require));
