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
      'https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.sdk',
      'http://cdn-geoweb.s3.amazonaws.com/terraformer/1.0.5/terraformer.min.sdk',
      'http://cdn-geoweb.s3.amazonaws.com/terraformer-arcgis-parser/1.0.4/terraformer-arcgis-parser.min.sdk',
      'dist/sdk/core/citysdk.js',
      'dist/sdk/modules/census.citysdk.js',
      'test/censusModuleSpec.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

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
      'karma-jasmine'
    ]
  });
};
