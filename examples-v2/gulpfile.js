const fs = require('fs');
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');

gulp.task('bundle', function() {
  return browserify({entries: ['src/main.js'], debug: true})
      .transform(babelify)
      .transform('brfs')
      .bundle()
      .pipe(fs.createWriteStream('build/main.js'));
});

gulp.task('watch', ['bundle'], function() {

});