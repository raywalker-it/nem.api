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


module.exports = function(req) {

    var moment = require('moment');

    var params = req.params,
        select = 'select time, id as scrapeID from scrape ',
        sort = 'ORDER BY time ASC';

    function getTimeSQL() {
        var sql = 'where time > ';


        switch (params.shift()) {

            case 'all':
                process.exit(1);
                return;

            case 'latest':
                // latest
                var period = params.shift();

                if (!period || isNaN(period)) {
                    switch(period) {
                        case 'hour':
                            return sql + moment().hour(-1).unix();

                        case 'day':
                            // send data from last 1 day
                            return sql + moment().day(-1).unix();

                        case 'month':
                            // send data from last 31 days
                            return sql + moment().day(-31).unix();

                        case 'week':
                            // send data from last 7 days
                            /* falls through */
                        default:
                            return sql + moment().day(-7).unix();
                    }

                } else {

                    if (period > 31) {
                        period = 31;
                    }

                    if (period < 1) {
                        period = 1;
                    }
                    // send data from `period` days
                    return sql + moment().day(-period).unix();
                }
                break;

            default:
                // get last 7 days of data
                return sql + moment().day(-7).unix();
        }
    }

    function getJoinSQL() {
        return ' ';
    }

    return {
        sql: select + getTimeSQL() + getJoinSQL() + ' ' + sort
    };
};
