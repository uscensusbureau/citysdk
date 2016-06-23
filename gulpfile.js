var ts = require('gulp-typescript');
var del = require('del');
var gulp = require('gulp');
var babel = require('rollup-plugin-babel');
var uglify = require('gulp-uglify');
var rollup = require('rollup');
var replace = require('gulp-replace');
var rollupJson = require('rollup-plugin-json');

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
gulp.task('watch', ['build:api', 'build:sdk'], function() {
  gulp.watch('./src/api/**/*.ts', ['compile:typescript']);
  gulp.watch('./src/sdk/core/*.js', ['compile:core']);
  gulp.watch('./src/sdk/modules/census/*.js', ['compile:census']);
  gulp.watch('./src/resources/*.json', ['copy:resources']);
});

// ----------------------------------------------------------------------
// Task: Default
//
// Cleans the dist directory and builds both the Node API and JS SDK
// ----------------------------------------------------------------------
gulp.task('default', ['clean', 'build:api', 'build:sdk']);

/***********************************************************************
 *                           Node API tasks                            *
 /***********************************************************************/

// ----------------------------------------------------------------------
// Task: Compile: Typescript
//
// Compile typescript files (core and modules) and
// copy them to the build directory.
// ----------------------------------------------------------------------
gulp.task('compile:typescript', function() {
  return gulp.src('./src/api/**/*.ts')
      .pipe(ts({'target': 'es5', 'module': 'commonjs', 'sourceMap': true}))
      .pipe(gulp.dest('dist/api'));
});

// ----------------------------------------------------------------------
// Task: Replace: Filepath
//
// Rename the filepath in the services modules to point to the census
// modules in the dist directory.
// ----------------------------------------------------------------------
gulp.task('rename:filepaths', function() {
  var oldCensusModule = '../../../dist/api/modules/census/census.citysdk';
  var newCensusModule = '../modules/census/census.citysdk';

  var oldCoreModule = '../../../dist/api/core/citysdk';
  var newCoreModule = '../core/citysdk';

  return gulp.src('./src/api/services/*.js')
      .pipe(replace(oldCensusModule, newCensusModule))
      .pipe(replace(oldCoreModule, newCoreModule))
      .pipe(gulp.dest('./dist/api/services/'));
});

// ----------------------------------------------------------------------
// Task: Build: API
//
// Executes all tasks required to buld the Node API.
// ----------------------------------------------------------------------
gulp.task('build:api', [
  'compile:typescript',
  'rename:filepaths',
  'copy:resources'
]);

/***********************************************************************
 *                            JS SDK tasks                              *
 /***********************************************************************/


var corePath = 'src/sdk/core/';
var distCorePath = 'dist/sdk/core/';

var rollupOpts = {
  plugins: [
    rollupJson(),
    babel({exclude: 'node_modules/**'})
  ]
};

var rollupWriteOpts = {
  format: 'umd',
  globals: {
    'jquery': '$',
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
// Task: Build: SDK
//
// Compiles all core modules using rollup.
// ----------------------------------------------------------------------
gulp.task('build:sdk', [
  'compile:CensusGeoRequest',
  'compile:CensusTigerwebRequest',
  'compile:CensusRequestValidator',
  'compile:CensusRequestUtils',
  'copy:resources'
]);
