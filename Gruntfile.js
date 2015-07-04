/*global module:false*/
module.exports = function(grunt) {

    var config = {
        api: 'api',
        test: 'test',
        css: 'src/css',
        scss: 'src/scss',
        js: 'src/js',
        bower: 'bower_components'
    };

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        cfg: config,
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output
            }
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            vendor: {
                src: [
                    '<%= cfg.bower %>/lodash/dist/lodash.min.js',
                    '<%= cfg.bower %>/uri.js/src/URI.js',
                    '<%= cfg.bower %>/uri.js/src/jquery.URI.js',
                    '<%= cfg.bower %>/moment/min/moment.min.js',
                    '<%= cfg.js %>/vendor/jquery.sticky.js',
                    '<%= cfg.js %>/vendor/highcharts-custom.js',
                    //                    '<%= cfg.js %>/vendor/themes/gray.js',
                    //                    '<%= cfg.js %>/vendor/moment.min.js'
                ],
                dest: '<%= cfg.js %>/plugins.js'
            }
        },
        copy: {
            js_pages: {
                files: [{
                    '<%= cfg.js %>/index.js': '<%= cfg.js %>/page/_index.js'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['css/**/*', 'img/**/*', 'js/vendor/modernizr.min.js'],
                    dest: 'dist/'
                }]
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'dist/css/main.css': ['src/css/main.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            plugins: {
                src: '<%= cfg.js %>/plugins.js',
                dest: 'dist/js/plugins.js'
            },
            pages: {
                src: '<%= cfg.js %>/index.js',
                dest: 'dist/js/index.js'
            }

        },
        jshint: {
            options: {
                jshintrc: "./jshintrc.json"
            },
            api: {
                src: ['<%= cfg.api %>/**/*.js', '!<%= cfg.api %>/scada.js']
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            js: {
                src: ['<%= cfg.js %>/page/*.js']
            },
        },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'dist/index.html': 'src/index.html' // 'destination': 'source'
                }
            }
        },
        modernizr: {
            dist: {
                // [REQUIRED] Path to the build you're using for development.
                "devFile": "<%= cfg.js %>/vendor/modernizr-dev.js",

                // [REQUIRED] Path to save out the built file.
                "outputFile": "<%= cfg.js %>/vendor/modernizr.min.js",

                // Based on default settings on http://modernizr.com/download/
                "extra": {
                    "shiv": true,
                    "printshiv": false,
                    "load": true,
                    "mq": false,
                    "cssclasses": true
                },

                // Based on default settings on http://modernizr.com/download/
                "extensibility": {
                    "addtest": false,
                    "prefixed": false,
                    "teststyles": false,
                    "testprops": false,
                    "testallprops": false,
                    "hasevents": false,
                    "prefixes": false,
                    "domprefixes": false
                },

                // By default, source is uglified before saving
                "uglify": true,

                // Define any tests you want to implicitly include.
                "tests": [],

                // By default, this task will crawl your project for references to Modernizr tests.
                // Set to false to disable.
                "parseFiles": true,

                // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
                // You can override this by defining a "files" array below.
                "files": {
                    "src": ['src/**/*']
                },

                // When parseFiles = true, matchCommunityTests = true will attempt to
                // match user-contributed tests.
                "matchCommunityTests": false,

                // Have custom Modernizr tests? Add paths to their location here.
                "customTests": []
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        sass: {
            app: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    '<%= cfg.css %>/main.css': '<%= cfg.scss %>/main.scss', // 'destination': 'source'
                }
            }
        },

        watch: {
            options: {
              livereload: true
            },
            api: {
                files: '<%= cfg.api %>/**/*.js',
                tasks: ['jshint:api']
            },
            scss: {
                files: '<%= cfg.scss %>/**/*.scss',
                tasks: ['css']
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            js: {
                files: ['<%= cfg.js %>/**/*.js', '!<%= cfg.js %>/*.js'],
                tasks: ['js'],
            }
        }
    });


    // Default task.
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);

    grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('js', ['jshint:js', 'copy:js_pages']);

    grunt.registerTask('css', ['sass']);

    grunt.registerTask('dist', ['jshint', 'sass', 'modernizr', 'concat', 'copy', 'cssmin', 'htmlmin', 'uglify']);

};
