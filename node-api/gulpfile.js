var ts = require('gulp-typescript');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

/**
 * Compile typescript files (core and modules) and
 * copy them to the build directory.
 */
gulp.task('typescript', function() {
  var tsProject = ts.createProject('tsconfig.json');

  var tsResult = tsProject.src('src/modules/**/*.ts')
      .pipe(ts(tsProject));

  return tsResult.js
      .pipe(gulp.dest('build'));
});

/**
 * Copy all static json files to their corresponding
 * directories inside build.
 */
gulp.task('copy:json', function() {
  return gulp.src('src/**/*.json')
      .pipe(gulp.dest('build'));
});

/**
 * Minify and copy all api files (*.service.js files)
 * into the build directory.
 */
gulp.task('api', function() {
  return gulp.src('src/api/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/api'));
});

gulp.task('default', ['typescript', 'copy:json', 'api']);

gulp.task('watch', ['default'], function() {
  gulp.watch('src/**/*.ts', ['typescript']);
  gulp.watch('src/**/*.json', ['copy:json']);
});
