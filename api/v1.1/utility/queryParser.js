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

(function (module) {
    'use strict';

    var _ = require('lodash'),
        moment = require('moment'),
        db = require('../db.js'),
        info = require('chalk').cyan,
        log = function () {
            console.log(' > ', info(Array.prototype.slice.call(arguments, 0).join(' ')));
        };

    module.exports = {
        getQueryOperator: function (val, key) {
            // time_start / time_end are special cases
            if (key === '$time_start') {
                return ' >= ';
            }
            if (key === '$time_end') {
                return ' <= ';
            }
            if (key === '$time_between') {
                return ' BETWEEN ';
            }

            if (isNaN(val) && val.match(/,+/g)) {
                return ' IN ';
            }

            return (isNaN(val) && val.match(/[%*]/g)) ? ' LIKE ' : ' = ';
        },
        addWhereClause: function (where, vars, generators) {

            _.forIn(vars, function (val, key) {

                if (key === '$limit' || key === '$offset' || key === '$inner_join') {
                    // Do not add limits to where clause
                    return;
                }

                if (key) {

                    var field,
                        operator = this.getQueryOperator(val, key);

                    if (key.indexOf('time_') === 1) {
                        // parameters 'time_start' and 'time_end' both relate to the
                        // database field 'time'
                        field = 's.scrape_time';
                    } else {
                        // remove
                        field = key.substring(1);
                    }

                    if (operator === ' IN ') {
                        // Don't send to variables
                        delete(vars[key]);
                        // wrap each item in quotations and
                        key = '(' + val.replace(/([^,]+)/g, "'$&'") + ')';
                    }

                    if (operator === ' BETWEEN ') {
                        delete(vars[key]);
                        var times = val.split('_');
                        key = times[0] + ' AND ' + times[1];
                    }
//
                    if (operator === ' LIKE ') {
                        vars[key] = val.replace(/\*/g, '%');
                    }

                    where += where.length ? ' AND ' : ' WHERE ';
                    where += field + operator + key;
                }
            }.bind(this));

            if (generators && generators.result && generators.result.length) {
                // Here we have some generators, extract the IDs for filtering
                where = this.addGeneratorIDs(where, generators.result);
            } else if (generators && generators.length) {
                // Strange format, but okay...
                console.log('the second one');
                where = this.addGeneratorIDs(where, generators);
            }

            return where;
        },
        addLimitClause: function (req, vars) {

            vars.$limit = (!isNaN(req.query.limit) && req.query.limit <= db.limits.num_results) ? this.getNearestMultiple(req.query.limit, db.limits.multiple) : this.getNearestMultiple(db.limits.num_results, db.limits.multiple);

            vars.$offset = +req.query.offset || vars.$offset || 0;

            return ' LIMIT $limit OFFSET $offset';
        },
        addOrderByClause: function (req) {
            var sort;

            if (req.query.sort) {
                sort = req.query.sort.split(',');
                return ' ORDER BY ' + sort[0] + (sort[1] ? ' ' + sort[1] : '');
            }

            if (req.query.order) {
                sort = req.query.order.split(',');
                return ' ORDER BY ' + sort[0] + (sort[1] ? ' ' + sort[1] : '');
            }

            return ' ORDER BY s.scrape_time';
        },
        getNearestMultiple: function (n, multiple) {
            if (n > 0) {
                return Math.ceil(n / multiple) * multiple;
            } else if (n < 0) {
                return Math.floor(n / multiple) * multiple;
            } else {
                return multiple;
            }
        },
        getGenerators: function (req) {

            var vars = {},
                select = 'SELECT * FROM flat_generators';

            this.parseGeneratorParameters(req, vars);

            return {
                type: 'text',
                result: false,
                sql: select + this.addWhereClause('', vars),
                vars: vars
            };

        },
        addGeneratorIDs: function (where, generators) {

            var generator_ids = _.pluck(generators, 'generator_id').join(',');

            if (generator_ids.length) {
                where += " AND g IN ( " + generator_ids + ")";
            }

            return where;

        },
        parseGeneratorParameters: function (req, vars) {
            _.each(['fuel', 'state', 'technology'], function (key) {
                this[key](req, vars);
            }.bind(this));
        },
        explain: function (req, select) {
            if (req.query.explain) {
                select = 'EXPLAIN QUERY PLAN ' + select;
            }
            return select;
        },
        fuel: function (req, vars) {
            if (req.query.fuel) {
                vars.$fuel_type = req.query.fuel;
            } else {
                if (req.query.fuel_type) {
                    vars.$fuel_type = req.query.fuel_type;
                }
            }
            if (req.query.fuel_desc) {
                vars.$fuel_description = req.query.fuel_desc;
            } else if (req.query.fuel_description) {
                vars.$fuel_description = req.query.fuel_description;
            }
//        log('Fuel', vars);
        },
        state: function (req, vars) {
            if (req.query.state) {
                vars.$state = req.query.state;
            }
//        log('State', vars);
        },
        technology: function (req, vars) {

            if (req.query.type) {
                vars.$technology_type = req.query.type;
            }

            if (req.query.tech) {
                vars.$technology_type = req.query.tech;
            }

            if (req.query.tech_type) {
                vars.$technology_type = req.query.tech_type;
            }

            if (req.query.tech_desc) {
                vars.$technology_description = req.query.tech_desc;
            }

            if (req.query.tech_description) {
                vars.$technology_description = req.query.tech_description;
            }
        },
        time: function (req, vars) {
            var getTimeObject = function (s) {
                    if (!s) {
                        return false;
                    }

                    if (moment(s).isValid()) {
                        return moment(s);
                    } else if (moment.unix(s).isValid()) {
                        return moment.unix(s);
                    } else {
                        return false;
                    }
                },
                time = getTimeObject(req.query.time),
                time_start = getTimeObject(req.query.time_start || req.query.start_time || req.query.start),
                time_end = getTimeObject(req.query.time_end || req.query.end_time || req.query.end),
                now = moment();

            if (time) {
                req.query.time = time;
            }

            // attempt to parse standard date strings to unix timestamps
            if (time_start) {
//                log('time_start is a valid time string: ', time_start.format());
                req.query.time_start = time_start;
            }

            if (time_end) {
//                log('time_end is a valid time string: ', time_end.format());
                req.query.time_end = time_end;
            }

            if (req.query.minutes) {

                if (!time_start && !time_end) {

                    // No time_start and no time_end means start from now and
                    // count back X minutes
                    vars.$time_start = now.subtract('minutes', req.query.minutes).unix();

                    log('time_start', moment.unix(vars.$time_start).fromNow(), 'to now');

                } else {

                    if (time_start) {
                        // start from time_start, move forward X minutes
                        vars.$time_start = time_start.unix();
                        vars.$time_end = time_start.add('minutes', req.query.minutes).unix();

                    } else {
                        // ending at time_end, move backward X minutes
                        vars.$time_end = time_end.unix();
                        vars.$time_start = time_end.subtract('minutes', req.query.minutes).unix();
                    }

                    log('Showing results over', req.query.minutes, 'minutes from', moment.unix(vars.$time_start).fromNow(), 'to', moment.unix(vars.$time_end).fromNow());
                }
            } else if (req.query.hours) {

                if (!time_start && !time_end) {

                    // No time_start and no time_end means start from now and
                    // count back X hours
                    vars.$time_start = now.subtract('hours', req.query.hours).unix();

                    log('time_start', moment.unix(vars.$time_start).fromNow(), 'to now');

                } else {

                    if (time_start) {
                        // start from time_start, move forward X hours
                        vars.$time_start = time_start.unix();
                        vars.$time_end = time_start.add('hours', req.query.hours).unix();

                    } else {
                        // ending at time_end, move backward X hours
                        vars.$time_end = time_end.unix();
                        vars.$time_start = time_end.subtract('hours', req.query.hours).unix();
                    }

                    log('Showing results over', req.query.hours, 'hours from', moment.unix(vars.$time_start).fromNow(), 'to', moment.unix(vars.$time_end).fromNow());
                }
            } else if (req.query.days) {

                if (!time_start && !time_end) {

                    // No time_start and no time_end means start from now and
                    // count back X days
                    vars.$time_start = now.subtract('days', req.query.days).unix();

                    log('time_start', moment.unix(vars.$time_start).fromNow(), 'to now');

                } else {

                    if (time_start) {
                        // start from time_start, move forward X days
                        vars.$time_start = time_start.unix();
                        vars.$time_end = time_start.add('days', req.query.days).unix();

                    } else {
                        // ending at time_end, move backward X days
                        vars.$time_end = time_end.unix();
                        vars.$time_start = time_end.subtract('days', req.query.days).unix();
                    }

                    log('Showing results over', req.query.days, 'days from', moment.unix(vars.$time_start).fromNow(), 'to', moment.unix(vars.$time_end).fromNow());
                }

            } else if (req.query.weeks) {

                if (!time_start && !time_end) {
                    // No time_start and no time_end means start from now and
                    // count back X weeks
                    vars.$time_start = now.subtract('weeks', req.query.weeks).unix();

                    log('time_start', moment.unix(vars.$time_start).fromNow(), 'to now');

                } else {

                    if (time_start) {
                        // start from time_start, move forward X weeks
                        vars.$time_start = time_start.unix();
                        vars.$time_end = time_start.add('weeks', req.query.weeks).unix();

                    } else {
                        // ending at time_end, move backward X weeks
                        vars.$time_end = time_end.unix();
                        vars.$time_start = time_end.subtract('weeks', req.query.weeks).unix();
                    }

                    log('Showing results over', req.query.weeks, 'weeks from', moment.unix(vars.$time_start).fromNow(), 'to', moment.unix(vars.$time_end).fromNow());
                }


            } else if (req.query.months) {

                if (!time_start && !time_end) {

                    // No time_start and no time_end means start from now and
                    // count back X months
                    vars.$time_start = now.subtract('months', req.query.months).unix();
                    log('time_start', moment.unix(vars.$time_start).fromNow(), 'to now');

                } else {

                    if (time_start) {
                        // start from time_start, move forward X months
                        vars.$time_start = time_start.unix();
                        vars.$time_end = time_start.add('months', req.query.months).unix();

                    } else {
                        // ending at time_end, move backward X months
                        vars.$time_end = time_end.unix();
                        vars.$time_start = time_end.subtract('months', req.query.months).unix();
                    }

                    log('Showing results over', req.query.months, 'months from', moment.unix(vars.$time_start).fromNow(), 'to', moment.unix(vars.$time_end).fromNow());
                }

            } else {
                // not using days, weeks or months

                if (time) {
                    // return only results from exactly this moment
                    vars.$time = time.unix();
                    log('Results from precisely', moment.unix(vars.$time).format());
                }

                if (time_start) {
                    // return all results since this time
                    vars.$time_start = time_start.unix();
                    log('Results from', moment.unix(vars.$time_start).fromNow());
                }

                if (time_end) {
                    // return all results up to this time
                    vars.$time_end = time_end.unix();
                    log('Results up until', moment.unix(vars.$time_end).fromNow());
                }
            }

            if (vars.$time_start && vars.$time_end) {
                vars.$time_between = vars.$time_start + '_' + vars.$time_end;
                delete(vars.$time_start);
                delete(vars.$time_end);
            }

        }
    };

}(module));
