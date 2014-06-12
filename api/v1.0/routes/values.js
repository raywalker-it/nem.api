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


/**
 * send scada values
 *
 * @param {type} req
 * @param {type} res
 * @param {type} next
 * @returns {undefined}
 */
module.exports = function(db, req, res, next) {

    var parser = require('../utility/queryParser.js'),
        _ = require('lodash');

    if (req.params[2]) {
        switch (req.params[2]) {
            case 'aggregate':
                return require('./scada/aggregate.js')(db, req, res, next);

            default:
                return res.send(404);
        }
    } else {

        var val_vars = {
            $limit: 10000,
            $offset: 0
        },
        generators = parser.getGenerators(req),
            sql = '',
            select = parser.explain(req, "SELECT sv.generator_id as " + db.fields.generatorID + ", sv.value as " + db.fields.value + ", s.scrape_time as " + db.fields.time),
            from = " FROM scada_values sv, scrape s",
            join = ' INNER JOIN ( ' + generators.sql + ') gens ON gens.generator_id = sv.generator_id',
            where = " WHERE s.scrape_time = sv.scrape_time",
            limit = '';

        val_vars = _.merge(generators.vars, val_vars);

        // Filter by time
        parser.time(req, val_vars);

        where = parser.addWhereClause(where, val_vars);
        limit = parser.addLimitClause(req, val_vars);

        try {
            sql = select + from + join + where + parser.addOrderByClause(req) + limit;
        } catch (err) {
            console.error(err);
            return res.send({
                message: 'Failed building sql',
                error: err
            });
        }
        var count_vars = JSON.parse(JSON.stringify(val_vars)),
            count_sql = sql.replace(/(SELECT.*?)\sFROM/, 'SELECT COUNT(*) AS total FROM').replace(/(LIMIT.*$)/, '');

        delete(count_vars.$limit);
        delete(count_vars.$offset);

        return db.get(count_sql, count_vars, function(count) {
            console.log(count_sql);
            console.log(val_vars);
            return db.all(sql, val_vars, function(data) {
                var results = {};

                _.each(data, function(row) {
                    if (!row.g) {
                        console.log('eh', data);

                    }
                    if (!results[row.g]) {
                        results[row.g] = [];
                    }

                    results[row.g].push([row.t, row.v]);
                });

                var result = {
                    time: req.time(),
                    duration: new Date().getTime() - req.time(),
                    error: false,
                    num_results: data.length,
                    total: count.total,
                    sql: sql,
                    vars: val_vars,
                    values: results
                };

                res.send(result);

                return next();

            });
        });


    }

};

