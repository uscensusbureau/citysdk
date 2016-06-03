var ts = require('gulp-typescript');
var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rollup = require('rollup');
var replace = require('gulp-replace');
var rollupJson = require('rollup-plugin-json');

/**
 * Fresh start, delete dist folder.
 */
gulp.task('clean', function() {
  del.sync(['dist']);
});


/*
 *******************************************************************
 *                      Node API tasks                             *
 *******************************************************************
 */

/**
 * Compile typescript files (core and modules) and
 * copy them to the build directory.
 */
gulp.task('typescript', function() {
  return gulp.src(["./node-api/src/**/*.ts"])
      .pipe(ts({
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
      }))
      .pipe(gulp.dest("./dist/node-api/"));
});

/**
 * Minify and copy all api files (*.service.js files)
 * into the build directory.
 */
gulp.task('api', function() {
  return gulp.src('./node-api/src/api/*.js')
      .pipe(replace('../../../dist/modules/census/citysdk.census', '../modules/census/citysdk.census'))
      .pipe(replace('../../../dist/core/citysdk', '../core/citysdk'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/node-api/api/'));
});

/**
 * Copy the compiled typescript files up one level under node-api/
 */
gulp.task('copy:js', ['typescript'], function() {
  return gulp.src(['./dist/**/*.js', './dist/**/*.js'])
      .pipe(gulp.dest('./dist/node-api/'));
});

/**
 * Delete the src directory
 */
gulp.task('move:js', ['copy:js'], function() {
  return del.sync(['./dist/node-api/src']);
});

/**
 * Copy all static json files to their corresponding
 * directories inside build.
 */
gulp.task('copy:json:node', function() {
  return gulp.src('./node-api/src/resources/*.json')
      .pipe(gulp.dest('./dist/node-api/resources'));
});

/**
 * Tasks for building the Node API
 */
gulp.task('node_api', ['typescript', 'api', 'copy:json:node']);

/**
 * Watch task for development.
 */
gulp.task('watch', ['node_api'], function() {
  gulp.watch('./node-api/src/**/*.ts', ['typescript']);
  gulp.watch('./node-api/src/**/*.json', ['copy:json:node']);
});


/*
 *******************************************************************
 *                      JS SDK Tasks                               *
 *******************************************************************
 */

var distCorePath = 'dist/js/core/';
var distModulePath = 'dist/js/modules/';

var corePath = 'js/core/';
var modulePath = 'js/modules/';

var rollupOpts = {plugins: [rollupJson()]};

var rollupWriteOpts = {
  format: 'umd',
  globals: {
    'jquery': '$',
    'terraformer': 'Terraformer',
    'terraformer-arcgis-parser': 'Terraformer.ArcGIS'
  }
};

gulp.task('rollup:core', function() {
  rollupOpts.entry = corePath + 'citysdk.new.js';

  return rollup.rollup(rollupOpts).then(function(bundle) {
    rollupWriteOpts.moduleName = 'CitySdk';
    rollupWriteOpts.dest = distCorePath + 'citysdk.js';

    bundle.write(rollupWriteOpts);
  });
});

gulp.task('rollup:census', function() {
  rollupOpts.entry = modulePath + 'census/citysdk.census.js';

  return rollup.rollup(rollupOpts).then(function(bundle) {
    rollupWriteOpts.moduleName = 'CensusModule';
    rollupWriteOpts.dest = distModulePath + 'citysdk.census.js';

    bundle.write(rollupWriteOpts);
  });
});

gulp.task('rollup', ['rollup:core', 'rollup:census']);

/**
 * Build both Node API and the JS SDK.
 */
gulp.task('default', ['clean', 'node_api', 'rollup']);