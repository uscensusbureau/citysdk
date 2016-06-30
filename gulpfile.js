var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rollup = require('rollup');
var replace = require('gulp-replace');
var rollupJson = require('rollup-plugin-json');
var rollupBabel = require('rollup-plugin-babel');

/***********************************************************************
 *                            Shared tasks                              *
 /***********************************************************************/

// ----------------------------------------------------------------------
// Task: Clean: All
//
// Fresh start, delete dist folder.
// ----------------------------------------------------------------------
gulp.task('clean', function() {
  del.sync(['dist']);
});

// ----------------------------------------------------------------------
// Task: Copy: Resources
//
// Copy all static json files to their corresponding directories inside
// dist directory.
// ----------------------------------------------------------------------
gulp.task('copy:resources', function() {
  return gulp.src('src/resources/*.json')
      .pipe(gulp.dest('dist/resources'));
});

// ----------------------------------------------------------------------
// Task: Watch
//
// Watches the typescript and json files in src/api and excutes the build
// task if a change is detected.
// ----------------------------------------------------------------------
gulp.task('watch', ['build:services', 'build:sdk'], function() {
  gulp.watch('./src/sdk/core/*.js', ['compile:core']);
  gulp.watch('./src/resources/*.json', ['copy:resources']);
});

// ----------------------------------------------------------------------
// Task: Default
//
// Cleans the dist directory and builds both the Node API and JS SDK
// ----------------------------------------------------------------------
gulp.task('default', ['clean', 'build:sdk', 'build:services']);

/***********************************************************************
 *                           Node API tasks                            *
 /***********************************************************************/
// ----------------------------------------------------------------------
// Task: Build: Services
//
// Cleans the dist directory and builds both the Node API and JS SDK
// ----------------------------------------------------------------------
gulp.task('build:services', function() {
  return gulp.src('src/api/services/*.js')
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest('dist/api/services'));
});

/***********************************************************************
 *                            JS SDK tasks                              *
 /***********************************************************************/


var corePath = 'src/sdk/core/';
var distCorePath = 'dist/sdk/core/';

var rollupOpts = {
  plugins: [
    rollupJson(),
    rollupBabel({exclude: 'node_modules/**'})
  ]
};

var rollupWriteOpts = {
  format: 'umd',
  globals: {
    'jquery': '$',
    'promise': 'Promise',
    'terraformer': 'Terraformer',
    'terraformer-arcgis-parser': 'Terraformer.ArcGIS'
  },
  sourceMap: true
};

var rollItUp = function(filename, moduleName) {
  rollupOpts.entry = corePath + filename;

  return rollup.rollup(rollupOpts).then(function(bundle) {
    rollupWriteOpts.moduleName = moduleName;
    rollupWriteOpts.dest = distCorePath + filename;
    bundle.write(rollupWriteOpts);
  });
};

// ----------------------------------------------------------------------
// Task: Compile: CitySdk
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CitySdk', function() {
  return rollItUp('citysdk.js', 'CitySdk');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusRequest
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CensusRequest', function() {
  return rollItUp('census-request.js', 'CensusRequest');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusGeoRequest
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CensusGeoRequest', function() {
  return rollItUp('census-geo-request.js', 'CensusGeoRequest');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusTigerwebRequest
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CensusTigerwebRequest', function() {
  return rollItUp('census-tigerweb-request.js', 'CensusTigerwebRequest');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusRequestValidator
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CensusRequestValidator', function() {
  return rollItUp('census-request-validator.js', 'CensusRequestValidator');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusRequestUtils
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CensusRequestUtils', function() {
  return rollItUp('census-request-utils.js', 'CensusRequestUtils');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusSummaryRequest
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CensusSummaryRequest', function() {
  return rollItUp('census-summary-request.js', 'CensusSummaryRequest');
});

// ----------------------------------------------------------------------
// Task: Build: SDK
//
// Compiles all core modules using rollup.
// ----------------------------------------------------------------------
gulp.task('build:sdk', [
  'compile:CitySdk',
  'compile:CensusRequest',
  'compile:CensusGeoRequest',
  'compile:CensusTigerwebRequest',
  'compile:CensusRequestValidator',
  'compile:CensusRequestUtils',
  'compile:CensusSummaryRequest',
  'copy:resources'
]);
