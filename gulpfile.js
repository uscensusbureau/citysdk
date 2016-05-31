var ts = require('gulp-typescript');
var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

/*****************************************************************
 *                      Node API tasks                           *
 *****************************************************************/

/**
 * Compile typescript files (core and modules) and
 * copy them to the build directory.
 */
gulp.task('typescript:node', function() {
  var tsProject = ts.createProject('tsconfig.json');

  var tsResult = tsProject.src('./node-api/**/*.ts')
      .pipe(ts(tsProject));

  return tsResult.js
      .pipe(gulp.dest('./dist/'));
});

/**
 * Minify and copy all api files (*.service.js files)
 * into the build directory.
 */
gulp.task('api', function() {
  return gulp.src('./node-api/src/api/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/node-api/api/'));
});

/**
 * Copy the compiled typescript files up one level under node-api/
 */
gulp.task('copy:js', ['typescript:node'], function() {
  return gulp.src('./dist/node-api/src/**/*.js')
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
  return gulp.src('./node-api/resources/*.json')
      .pipe(gulp.dest('./dist/resources'));
});

/**
 * Tasks for building the Node API
 */
gulp.task('node_api', ['typescript:node', 'api', 'copy:json:node', 'move:js']);

/**
 * Watch task for development.
 */
gulp.task('watch', ['node_api'], function() {
  gulp.watch('./node-api/src/**/*.ts', ['typescript:node']);
  gulp.watch('./node-api/src/**/*.json', ['copy:json:node']);
});


/*****************************************************************
 *                      JS SDK Tasks                             *
 *****************************************************************/

gulp.task('typescript:js', function() {
  var tsProject = ts.createProject('./tsconfig.json');

  var tsResult = tsProject.src('./js/**/*.ts')
      .pipe(ts(tsProject));

  return tsResult.js
      .pipe(gulp.dest('./dist'));
});

gulp.task('copy:json:js', function() {
  return gulp.src('./js/resources/*.json')
      .pipe(gulp.dest('./dist/resources'));
});

gulp.task('js_sdk', ['typescript:js', 'copy:json:js']);


/**
 * Build both Node API and the JS SDK.
 */
gulp.task('default', ['node_api', 'js_sdk']);