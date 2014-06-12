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
        config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf-8'));

    try {
        //        console.log('Old User ID: ' + process.getuid() + ', Old Group ID: ' + process.getgid());
        process.setgid(config.user);
        process.setuid(config.group);
        //        console.log('New User ID: ' + process.getuid() + ', New Group ID: ' + process.getgid());
    } catch (err) {
        console.log('Can\t shed privileges, running away!');
        process.exit(1);
    }

    var name = 'NEM API',
        restify = require('restify'),
        server = config.ssl.enabled ? restify.createServer({
            certificate: config.ssl.certificate,
            key: config.ssl.key
        }) : restify.createServer({name: name}),
        path = require('path'),
        sqlite3 = require('sqlite3').verbose(),
        database = new sqlite3.cached.Database(path.resolve(__dirname, '..', '..', 'db', 'scada.db')),
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

        server.use(restify.queryParser());

        server.use(restify.jsonp());

//        server.use(restify.gzipResponse());

        server.get(/^\/(?:api\/)?([v0-9\.]+)\/([\w]+)\/?([\w]+)?\/?([\w]+)?\/?([\w]+)?/, function(req, res, next) {
            console.log(chalk.bold(req.connection.remoteAddress), ' ', chalk.underline(req.url));

            var api = require('./' + req.params[0] + '/api.js');

            //        console.log(req.params);

            switch (req.params[1]) {
                case 'values':
                    return api.values(db, req, res, next);

                    // aggregate is a whole different kettle of fish
                case 'aggregate':
                    return api.aggregate(req.params[1], res, next);

                case 'generators':
                    return api.generators(db, req, res, next);

                default:
                    res.send(500);
                    next();
            }
        });

        server.get(/^\/([v0-9\.]+)\/?/, function(req, res, next) {
            res.send({
                hello: "You're now talking to the raywalker.it's NEM API, version " + req.params[0]
            });
            next();
        });


        server.listen(config.listen.port, config.listen.host, function() {
            console.log('\n%s listening at %s', server.name, server.url, '\n');
        });
    });


}());