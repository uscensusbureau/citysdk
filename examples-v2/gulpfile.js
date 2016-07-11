const fs = require('fs');
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const liveserver = require('live-server');

gulp.task('bundle', function() {
  return browserify({entries: ['src/main.js'], debug: true})
      .transform(babelify)
      .transform('brfs')
      .bundle()
      .pipe(fs.createWriteStream('build/main.js'));
});

gulp.task('watch', ['bundle'], function() {
  gulp.watch('src/**/*.js', ['bundle']);
  gulp.watch('src/**/*.html', ['bundle']);

  liveserver.start({
    port: 8080,
    open: false,
    logLevel: 0,
    wait: 700
  });
});

gulp.task('default', ['watch']);