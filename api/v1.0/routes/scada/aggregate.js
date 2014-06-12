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
 *
 * @param {type} db
 * @param {type} req
 * @param {type} res
 * @param {type} next
 * @returns {unresolved}
 */
module.exports = function(db, req, res, next) {
    var getGenerators = require('../../utility/getGenerators.js'),
        parser = require('../../utility/queryParser.js'),
        Q = require('q'),
        _ = require('lodash');

    Q.longStackSupport = true;

    function getFuelTypes(db) {
        var def = Q.defer();
        db.all('SELECT DISTINCT type, description FROM fuel GROUP BY type', function (results) {
            return def.resolve(results);
        });
        return def.promise;
    }

    function getSumValuesByFuel(generators, fuel, next) {
        var select = parser.explain(req, 'SELECT sv.value'),
            from = ' FROM scada_values as sv, scrape as s, flat_generators as g',
            where = ' WHERE sv.generator_id = g.generator_id AND s.id = sv.scrape_id AND s.time > 1402151077',
//            limit = '',
            vars = {
                "$fuel_type": fuel
            },
            sql;

//        console.log(fuel);

        // Add time limits
        parser.time(req, vars);

//        console.log(generators);

//        where = _.pluck

        try {
            // Build sql from vars
            sql = select + from + parser.addWhereClause(where, vars);

            console.log(sql, vars);

            // Find sum of all fuels, matching generators, bounded by time
            return db.all(sql, function (results) {
                console.log(results);
                return next(results);
            });
        } catch(err) {
            return err;
        }

    }

    function fuel() {
        return Q.all([getGenerators(db, req), getFuelTypes(db,req)]).then(function(a) {
            var sums = [];

//            res.send(a);
            _.each(a[1], function(fuel) {

                sums.push((function () {
                    var def = Q.defer();

                    try {
                        getSumValuesByFuel( _.find(a[0].result, { fuel_type: fuel.type }), fuel.type, function(result) {
                            return def.resolve(result);
                        });
                    } catch (err) {
                        res.send(err);
                        def.reject();
                    }


                    return def.promise;
                }()));

            });

            return Q.all(sums).then(function(results) {
                res.send(results);
                next();
            });
        });


//        return getGenerators(db, req).then(function(generators) {
//            return getFuelTypes(db, req).then(function (fuels) {
//
//            })
//            // foreach fuel type
//
//
//            db.all('SELECT ')
//            // get generators matching this fuel type
//
//            // sum the values of these generators
//
//            // return array of sums
//
//        });

    }

    function fuel_desc() {
        res.send(500);
        next();
    }

    function state() {
        res.send(500);
        next();
    }

    switch(req.params[3]) {
        case 'fuel':
            return fuel();

        case 'fuel_desc':
            return fuel_desc();

        case 'state':
            return state();

        default:
            res.send({
                error: 'Please specify which data type to aggregate: fuel, fuel_desc, state, technology ... etc'
            });
    }



};
