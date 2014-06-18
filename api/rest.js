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

(function() {
    'use strict';



    var fs = require('fs'),
        path = require('path'),
        user = require(path.resolve(__dirname,'user.js')),
        config;

    // Load configuration
    try {
        config = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'config.json'), 'utf-8'));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    user.privileges(config.user, config.group);

    var sqlite3 = require('sqlite3');

    // If no database file was passed in command line parameters
    // Use configured database file
    var database_file = config.db.sqlite;

    if (!database_file) {
        console.error('Database is not defined, exiting');
        process.exit(1);
    }

    if (database_file.indexOf('/') !== 0 && database_file.indexOf('..') !== 0) {
        // not an absolute path, assume it's relative to the config file
        database_file = path.resolve(__dirname, database_file);
    }
    
    var name = config.name,
        restify = require('restify'),
        server = config.ssl.enabled ? restify.createServer({
            certificate: config.ssl.certificate,
            key: config.ssl.key
        }) : restify.createServer({name: name}),
        database = new sqlite3.cached.Database(database_file),
        db = require('./v1.0/db.js'),
        chalk = require('chalk'),
        good = chalk.green,
        warn = chalk.yellow,
        bad = chalk.red,
        _s = require('underscore.string');

    database.on('profile', function(sql, time) {
        console.log((function(time) {
            if (time < db.times.good) {
                return good(_s.lpad(time, 5));
            }
            if (time < db.times.warn) {
                return warn(_s.lpad(time, 5));
            }
            return bad(_s.lpad(time, 5));
        }(time)), sql);
    });

    db.init(database, config).then(function() {
        var default_api = require(path.resolve(__dirname, 'v' + config.defaults.version, 'api.js'));

        server.use(restify.queryParser());

        server.use(restify.jsonp());

//        server.use(restify.gzipResponse());

        server.get(/^\/(?:api\/)?([v0-9\.]+)\/([\w]+)\/?([\w]+)?\/?([\w]+)?\/?([\w]+)?/, function(req, res, next) {
            var api;

            console.log(chalk.bold(req.connection.remoteAddress), ' ', chalk.underline(req.url));

            try {
                if (req.params[0] !== config.defaults.version) {
                    api = require(path.resolve(__dirname, req.params[0], 'api.js'));
                } else {
                    api = default_api;
                }
            } catch (err) {
                res.send(404, {error: 'Version not found - ' + req.params[0]});
                return next();
            }

            switch (req.params[1]) {
                case 'values':
                    return api.values(db, req, res, next);

                    // aggregate is a whole different kettle of fish
                case 'aggregate':
                    return api.aggregate(req.params[1], res, next);

                case 'generators':
                    return api.generators(db, req, res, next);

                default:
                    res.send(404, {error: "Please specify a valid route"});
                    next();
            }
        });

        server.get(/^\/(?:api)?\/?([v0-9\.]+\/?)?/, function(req, res, next) {
            var api;

            if (!req.params[0]) {
                res.send({
                    error: "Please specify an API version, eg /api/v" + config.defaults.version + '/'
                });

                return next();
            }

            try {
                if (req.params[0] && req.params[0] !== config.defaults.version) {
                    api = require(path.resolve(__dirname, req.params[0], 'api.js'));
                }
            } catch (err) {
                res.send(404, {error: 'Version not found - ' + req.params[0]});
                return next();
            }

            res.send({
                hello: "You're now talking to the " + config.name,
                version: req.params[0].replace('/','')
            });

            next();
        });


        server.listen(config.listen.port, config.listen.host, function() {
            console.log('\n%s listening at %s', server.name, server.url, '\n');
        });
    });


}());