
(function($) {
    'use strict';
    $.QueryString = (function(a) {
        if (a === "") {
            return {};
        }
        var b = {};

        for (var i = 0; i < a.length; ++i)

        {
            var p = a[i].split('=');
            if (p.length !== 2) {
                continue;
            }
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }

        return b;

    })(window.location.search.substr(1).split('&'));
})(jQuery);


(function($, URI, moment, global) {
    'use strict';

    var $doc = $(global.document);

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    var defaults = {
        api: 'http://localhost:8080/api/v1.0/',
        days: 3,
        maxupdates: 24,
        interval: 5 * 1000 * 60 // 5 minutes
    },
    config = {
        updateFromNow: true
    },
    colours = {
        unknown: '#aaaaaa',
        Fossil: '#666666',
        Hydro: '#87BAED',
        Wind: '#B5ED87',
        Solar: '#F5EC6E',
        Renewable: '#7BF56E',
        "Renewable/ Biomass/ Waste": 'lightgreen'
    },
    valid_params = ['minutes', 'days', 'weeks', 'hours', 'months', 'start_time', 'end_time', 'time_start', 'time_end', 'tech', 'fuel', 'type', 'tech_desc', 'fuel_desc'],
            generators = [],
            states = [],
            eventQueue = {
                actions: [],
                step: function() {
                    if (this.actions.length) {
                        this.actions.shift()();
                    }
                }
            },
    getObjectSize = function(obj) {
        var len = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                len++;
            }
        }
        return len;
    };

    var time_params = ['minutes', 'hours', 'days', 'weeks', 'months'];

    function getGenerators() {
        var deferred = $.Deferred();

        if (getObjectSize(generators) > 0) {
            console.log('generators are cached ...');
            deferred.resolve(generators);
        } else {
            $.ajax({
                url: defaults.api + 'generators',
                dataType: 'json'
            }).success(function(data) {
                // store generators by fuel type
                _.each(data, function(gen) {
                    if (!(gen.fuel_type)) {
                        gen.fuel_type = 'unknown';
                    }
                    if (!generators[gen.fuel_type]) {
                        generators[gen.fuel_type] = [];
                    }
                    generators[gen.fuel_type][gen.generator_id] = gen;
                });

                deferred.resolve(generators);
            }).fail(function() {
                deferred.reject();
            });
        }

        return deferred.promise();
    }

//
//    function initGenerators(data, i, times, fuel_types) {
//        _.forIn(data, function(values, generatorID) {
//            if (!generators[generatorID]) {
//                console.log('Generator not found -', generatorID);
//                return true;
//            }
//
//            //  store this generator by its ID for future reference
//            states[i].generators[generatorID] = values;
//
//            // create fuel type series if not exist
//            if (!times[generator.fuel_type]) {
//
//                times[generator.fuel_type] = [];
//
//                if (!_.find(fuel_types, generator.fuel_type)) {
//                    fuel_types.push(generator.fuel_type);
//                }
//            }
//
//        });
//    }

//    function addValuesToFuelType(data, i, times) {
//        _.each(data.values, function(values) {
//            var gen = states[i].generators[values.g],
//                t = values.t * 1000; // convert unix timestamp to milliseconds @todo - this in the DB script
//
//            if (gen) {
//                // store this value for this fuel_time
//
//                if (!times[gen.fuel_type]) {
//                    times[gen.fuel_type] = [];
//                }
//
//                if (!times[gen.fuel_type][t]) {
//                    times[gen.fuel_type][t] = values.v;
//                } else {
//                    times[gen.fuel_type][t] += values.v;
//                }
//            } else {
////                console.warn('Generator not found', values.g);
//            }
//        });
//    }

    function addToSeries(fuel_types, series, times, i) {
        _.forIn(fuel_types, function(fuel_type, index) {
            if (!series[index]) {
                series[index] = {
                    name: fuel_type,
                    data: [],
                    state_index: i,
                    color: colours[fuel_type] ? colours[fuel_type] : ''
                };
            }

            _.forIn(times[fuel_type], function(value, time) {
                series[index].data.push([+time, value]);
            });
        });
    }

    function buildStateData(response, i) {

        var build_start_time = new Date().getTime(),
                series = [];

        if (!response) {
            console.error('No response data');
            return;
        }

        _.forIn(generators, function(fuel_type_gens, fuel_type) {
            var times = [];

            series = {
                name: fuel_type,
                data: [],
                state_index: i,
                color: colours[fuel_type] ? colours[fuel_type] : ''
            };
            // foreach fuel_type generator
            _.forIn(fuel_type_gens, function(gen, id) {
                _.forIn(response.values[id], function(results) {
                    var time = results[0],
                            value = results[1];

                    times[time] = times[time] ? times[time] + value : value;

                });
            });

            _.forIn(times, function(value, time) {
                series.data.push([+time * 1000, value]);
            });

            if (series.data.length) {
                states[i].series.push(series);
            }
        });

        console.log(states[i].name, response.duration, new Date().getTime() - build_start_time);

    }

    function xhr(i) {
        var def = $.Deferred();

        // request new data
        $.ajax({
            url: states[i].uri.href(),
            dataType: 'json'
        }).success(function(response) {
            //console.log(response);
            def.resolve(response);
        }).fail(function(err) {
            // ruhroh
            //console.error(err);
            def.reject(err);
            //return err;
        });

        return def.promise();
    }

    $doc.on('nem.get_chart_data', function(e, options, i) {

        // used for displaying total request time
        states[i].time = new Date().getTime();

        // store the uri for use in updates
        states[i].uri = new URI(defaults.api + 'values');

        // add relevant query string options
        states[i].uri.setQuery(options);

        // perform request
        $.when(xhr(i), getGenerators()).then(function(response, generators) {
            console.log(i, 'init', response, generators);

            // success handler
            buildStateData(response, i);

            $doc.ready(function() {
                $doc.trigger('nem.init_state_chart', [i, response]);
            });
        }, function(e) {
            // error handler
            console.error('Fetch failed', e);
        });
    });

    $doc.on('nem.fetch_new_chart_data', function(e, i) {

        var interval_minutes = defaults.interval / 1000 / 60;

        // remove all time parameters from this state URI
        states[i].uri = removeTimeParamsExcept(false, states[i].uri);

        if (config.updateFromNow) {
            // time ending now
            states[i].uri.setQuery('end_time', moment().unix());

            // set interval to 5 minutes
            states[i].uri.addQuery('minutes', interval_minutes);
        } else {

            // set interval to 5 minutes
            states[i].uri.addQuery('minutes', interval_minutes);

            // add interval to uri query string
            states[i].uri.setQuery(addOrSubtractTime(URI.parseQuery(states[i].uri.query()), 'minutes', true));
        }

        // request new data
       
        $doc.trigger('nem.update_chart_data_' + i, [xhr(1)]);
        

        if (--states[i].updates < 1) {
            clearInterval(states[i].interval);
        }

    });

    $doc.on('nem.init_state_chart', function(e, i) {
        eventQueue.step();

        states[i].chart = new Highcharts.Chart({
            title: {
                text: "Aggregate Power Generation by Fuel Type in " + states[i].name
            },
            chart: {
                defaultSeriesType: 'areaspline',
                zoomType: 'x',
                renderTo: states[i].ident,
                events: {
                    load: function() {
                        if ($.QueryString['live']) {

                            states[i].interval = setInterval(function() {
                                $doc.trigger('nem.fetch_new_chart_data', [i]);
                            }, defaults.interval);
                        }
                    }
                }
            },
            subtitle: {
                text: 'Last updated ' + moment().calendar() + '<br/>Source: <a href="http://www.nemweb.com.au/Reports">National Energy Market</a>'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {// don't display the dummy year
                    day: '%e %b %Y',
                    month: '%e %b %Y',
                    year: '%b'
                },
                title: {
                    enabled: false
                }
            },
            yAxis: [
                {// left y axis
                    title: {
                        text: 'megaWatts (MW)'
                    },
                    labels: {
                        align: 'right',
                        x: 3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                }
            ],
            tooltip: {
                shared: true,
                crosshairs: true,
                valueSuffix: ' MW',
                valueDecimals: 1
            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    marker: {
                        enabled: false
                    },
                    fillOpacity: 0.3
                }
            },
            series: states[i].series
        });

        $doc.on('nem.update_chart_data_' + i, function(e, response) {

            if (!response.values.length) {
                return;
            }

            var times = [],
                    fuel_types = [],
                    data = [],
                    time = moment().calendar();


//            initGenerators(response, i, times, fuel_types);

//            addValuesToFuelType(response, i, times);

            addToSeries(fuel_types, data, times, i);

            states[i].chart.series.forEach(function(series) {
                data.forEach(function(fuel) {
                    if (fuel.name === series.name) {
                        fuel.data.forEach(function(val) {
                            series.addPoint(val, false, false);
                        });
                    }
                });
            });

            states[i].chart.setTitle("Aggregate Power Generation by Fuel Type in " + states[i].name, 'Last updated: ' + time + '<br/>Source: <a href="http://www.nemweb.com.au/Reports">National Energy Market</a>');
            states[i].chart.redraw();

        }.bind(this));


        $('#na_debug').append('<p>' + states[i].name + ': ' + (new Date().getTime() - states[i].time) + 'ms');
    });


    $doc.on('nem.error_init_chart', function(e, i, err) {
        if (err) {
            $('#' + states[i].ident).html('<p class="error">Error fetching data:' + err.status + ' ' + e.statusText + '</p>');
        }
//        console.log(i);
//        eventQueue.step();
    });

    /**
     *
     * @param {string} interval
     * @param {Object} uri
     * @returns {URI}
     */
    function removeTimeParamsExcept(interval, uri) {

        if (!uri) {
            uri = new URI();
        }

        if (typeof uri === 'string') {
            uri = new URI(uri);
        }

        _.each(time_params, function(p) {
            if (!interval || p !== interval) {
                uri.removeQuery(p);
            }
        });

        return uri;
    }

    /**
     *
     * @param {type} s
     * @returns {mixed}
     */
    function getTimeObject(s) {
        if (!s || s === undefined) {
            return false;
        }

        if (moment(s).isValid()) {
            return moment(s);
        } else if (moment.unix(s).isValid()) {
            return moment.unix(s);
        } else {
            return false;
        }
    }

    /**
     * Parse query string for valid time parameters
     *
     * @param {type} uri
     * @param {type} next
     * @returns {undefined}
     */
    function parseTimeParams(uri, next) {
        var found_interval = false,
                query = URI.parseQuery(uri.query());

        _.each(time_params, function(interval) {

            if (query[interval]) {
                // found one
                found_interval = true;

                // remove anything except this interval
                removeTimeParamsExcept(interval, uri);

                // add or subtract the found interval
                addOrSubtractTime(query, interval, next);

                // update the uri
                uri.setQuery(query);

                // and exit the foreach loop
                return false;
            }
        });

        if (!found_interval) {
            // No interval found in the uri, so use default: n 'days'
            query.days = defaults.days;

            addOrSubtractTime(query, 'days', next);

            uri.setQuery(query);
        }

    }

    /**
     * @param {Object} query
     * @param {String} interval
     * @param {Boolean} next
     * @returns {undefined}
     */
    function addOrSubtractTime(query, interval, next) {

        var start = getTimeObject(query.start_time),
                end = getTimeObject(query.end_time),
                operation = next ? 'add' : 'subtract';

        if (start) {
            // move forwards in time from a fixed start time
            query.start_time = start[operation](interval, query[interval]).unix();
        } else {

            // if no start_time then we're working from an end time, or from now ...
            if (!end) {
                end = moment();
            }

            // and moving backwards in time
            query.end_time = end[operation](interval, query[interval]).unix();
        }

        return query;

    }


    $(global.document).ready(function() {
        // Enqueue the building of each start chart
        $('#states .chart').each(function(i) {
            var $this = $(this),
                    options = {},
                    state = {
                        name: $this.attr('data-name'),
                        ident: $this.attr('id'),
                        series: [],
                        updates: defaults.maxupdates
                    };

            // Check for valid query parameters
            $.each(valid_params, function(i, k) {
                var val = $.QueryString[k];
                if (val) {
                    options[k] = val;
                }
            });
            // If no interval specified, use the default
            if (!options['days'] && !options['hours'] && !options['weeks'] && !options['months']) {
                options['days'] = defaults.days;
            }

            // Specify which state to enqueue
            options.state = state.ident;

            states[i] = state;

            // And queue it to be fetched and processed
            eventQueue.actions.push(function() {
                $doc.trigger('nem.get_chart_data', [options, i]);
            });

        });



        // Initiate the queue
        eventQueue.step();

        if ($.QueryString['live']) {
            $('nav .live').addClass('active');
            $('#dashboard section p').first().text('Updating every ' + defaults.interval / 60 / 1000 + ' minutes');

            if ($.QueryString['start_time'] || $.QueryString['time_start'] || $.QueryString['end_time'] || $.QueryString['time_end']) {
                config.updatefromnow = false;
            }
        }

        $('#sticky').sticky();

        $('.pagination a').on('click', function(e) {

            e.preventDefault();

            var uri = new URI(),
                    hash = this.hash.substring(1).split('-');

            uri.normalize();

            $(this).toggleClass('active');

            switch (hash[0]) {
                case 'page':

                    parseTimeParams(uri, hash[1] === 'next' ? true : false);

                    break;

                case 'days':

                    _.map(time_params, function(p) {
                        uri.removeQuery(p);
                    });

                    uri.addQuery(hash[0], hash[1]);

                    break;

                case 'live':

                    if ($.QueryString['live']) {
                        uri.removeQuery('live');
                    } else {
                        uri.addQuery(hash[0], 'true');
                    }


                    break;

                default:
                    uri.removeQuery(['start_time', 'time_start', 'end_time', 'time_end']);
            }

            window.location.href = uri.href();

        });
    });
}(jQuery, URI, moment, this)
        );