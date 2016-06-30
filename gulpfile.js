var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rollup = require('rollup');
var replace = require('gulp-replace');
var rollupJson = require('rollup-plugin-json');
var rollupBabel = require('rollup-plugin-babel');


/************************************************************************
 *                            Common tasks                              *
/************************************************************************/

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

gulp.task('copy:citysdk', ['build:sdk'], function() {
  return gulp.src('dist/sdk/core/citysdk.js')
      .pipe(gulp.dest('.'));
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
gulp.task('default', ['clean', 'build:sdk', 'build:services', 'copy:citysdk']);


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
 *                            JS SDK tasks                             *
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
// Task: Compile: CensusGeoRequest
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CitySdkGeoRequest', function() {
  return rollItUp('citysdk-geo-request.js', 'CitySdkGeoRequest');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusTigerwebRequest
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CitySdkTigerwebRequest', function() {
  return rollItUp('citysdk-tigerweb-request.js', 'CitySdkTigerwebRequest');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusRequestValidator
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CitySdkRequestValidator', function() {
  return rollItUp('citysdk-request-validator.js', 'CitySdkRequestValidator');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusRequestUtils
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CitySdkRequestUtils', function() {
  return rollItUp('citysdk-request-utils.js', 'CitySdkRequestUtils');
});

// ----------------------------------------------------------------------
// Task: Compile: CensusSummaryRequest
//
// Uses the rollup to compile the ES6 census module into browser
// compatible javascript
// ----------------------------------------------------------------------
gulp.task('compile:CitySdkSummaryRequest', function() {
  return rollItUp('citysdk-summary-request.js', 'CitySdkSummaryRequest');
});

// ----------------------------------------------------------------------
// Task: Build: SDK
//
// Compiles all core modules using rollup.
// ----------------------------------------------------------------------
gulp.task('build:sdk', [
  'compile:CitySdk',
  'compile:CitySdkGeoRequest',
  'compile:CitySdkTigerwebRequest',
  'compile:CitySdkRequestValidator',
  'compile:CitySdkRequestUtils',
  'compile:CitySdkSummaryRequest',
  'copy:resources'
]);
