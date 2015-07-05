(function ($) {


    $.fn.powerChart = function () {

        var defaults = {
                api: 'http://localhost:8080/api/v1.0/',
                days: 3,
                maxupdates: 24,
                interval: 5 * 1000 * 60, // 5 minutes,
                colours: {
                    unknown: '#aaaaaa',
                    Fossil: '#666666',
                    Hydro: '#87BAED',
                    Wind: '#B5ED87',
                    Solar: '#F5EC6E',
                    Renewable: '#7BF56E',
                    "Renewable/ Biomass/ Waste": 'lightgreen'
                }
            },

            config = {
                updateFromNow: true
            },
            validQueryParams = ['minutes', 'days', 'weeks', 'hours', 'months', 'start_time', 'end_time', 'time_start', 'time_end', 'tech', 'fuel', 'type', 'tech_desc', 'fuel_desc'],
            validTimeParams = ['minutes', 'hours', 'days', 'weeks', 'months'],
            // Stores the cached generator data
            generators = [],
            // Stores the state data
            states = [],
            eventQueue = {
                actions: [],
                step: function () {
                    if (this.actions.length) {
                        this.actions.shift()();
                    }
                }
            },
            getObjectSize = function (obj) {
                var len = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        len++;
                    }
                }
                return len;
            };

        return this.each(function (options) {
            var config = $.extend({}, defaults, options),
                $this = $(this),
                state = {
                    name: $this.attr('data-name'),
                    ident: $this.attr('id'),
                    series: [],
                    updates: config.maxupdates
                };

            // Check for valid query parameters
            $.each(validQueryParams, function (i, k) {
                var val = $.QueryString[k];
                if (val) {
                    options[k] = val;
                }
            });

            // If no interval specified, use the default
            if (!options['days'] && !options['hours'] && !options['weeks'] && !options['months']) {
                options['days'] = config.days;
            }

            // Specify which state to enqueue
            options.state = state.ident;

            states[i] = state;

            // And queue it to be fetched and processed
            eventQueue.actions.push(function () {
                $doc.trigger('nem.get_chart_data', [options, i]);
            });
        });
    };


}(jQuery));