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

    var Q = require('q'),
        chalk = require('chalk'),
        moment = require('moment');

    module.exports = {
        db: false,
        limits: {
            num_results: 300000,
            multiple: 288 // 5 minutes * 12 * 24 = 288 updates per day
        },
        times: {
            good: 50,
            warn: 200
        },
        fields: {
            time: 't',
            generatorID: 'g',
            value: 'v'
        },
        init: function(db) {
            var deferred = Q.defer();

            this.db = db;

            this.db.exec('PRAGMA busy_timeout = 10000; PRAGMA synchronous = 0; PRAGMA temp_store = MEMORY; PRAGMA cache_size=-1000000; PRAGMA page_size=65536;', function() {

                deferred.resolve();

                this.all('PRAGMA busy_timeout', function(results) {
                    console.log(results);
                });
                this.all('PRAGMA synchronous', function(results) {
                    console.log(results);
                });
                this.all('PRAGMA temp_store', function(results) {
                    console.log(results);
                });
                this.all('PRAGMA cache_size', function(results) {
                    console.log(results);
                });
                this.all('PRAGMA page_size', function(results) {
                    console.log(results);
                });
                this.all('PRAGMA journal_mode;', function (results) {
                    console.log(results);
                });
                this.all('PRAGMA user_version;', function (results) {
                    console.log(results);
                });
                this.all('PRAGMA integrity_check', function(results) {
                    console.log(results);
                });
                //
                //this.all('PRAGMA stats',function(results) {
                //    console.log(results);
                //});




            }.bind(this));

            return deferred.promise;

        },
        get: function(sql, variables, next) {
            if (!this.db) {
                throw 'Database is not initialised';
            }

            if (typeof variables === 'function') {
                next = variables;
            }

            return this.db.get(sql, variables, function(err, data) {
                if (err) {
                    console.error(chalk.red('ERROR'), moment().unix(), chalk.yellow(sql), err);
                    return next(err);
                }

                return next(data);
            });
        },
        all: function(sql, variables, next) {

            if (!this.db) {
                throw 'Database is not initialised';
            }

            if (typeof variables === 'function') {
                next = variables;
            }

            return this.db.all(sql, variables, function(err, rows) {
                if (err) {
                    console.error(chalk.red('ERROR'), moment().unix(), chalk.yellow(sql), err);
                    return next(err);
                }

                return next(rows);
            });
        }
    };
}());