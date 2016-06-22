// Karma configuration
// Generated on Wed Jun 08 2016 16:54:11 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // External dependencies
      {pattern: 'lib/jquery.min.js', watched: false},
      {pattern: 'lib/terraformer.min.js', watched: false},
      {pattern: 'lib/terraformer-arcgis-parser.min.js', watched: false},

      // Core modules
      'dist/sdk/core/census-geo-request.js',
      'dist/sdk/core/census-tigerweb-request.js',

      // Tests
      // 'test/core/census-geo-request/census-geo-request-spec.js',
      'test/core/census-tigerweb-request-spec.js',

      // Source maps
      {pattern: 'dist/**/*.js.map', included: false, served: true, watched: false, nocache: true}
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.js': ['sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [],

    // web server port
    port: 9876,
    browserNoActivityTimeout: 100000,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing test whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the test and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-sourcemap-loader'
    ]
  });
};
