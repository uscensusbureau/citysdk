var gulp = require('gulp');
var rollup = require('rollup');
var json = require('rollup-plugin-json');

var distCorePath = 'dist/core/';
var distModulePath = 'dist/modules/';

var corePath = 'js/core/';
var modulePath = 'js/modules/';

var rollupOpts = {
  plugins: [json()]
};

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
    rollupWriteOpts.moduleName = 'CitySDK';
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

gulp.task('default', ['rollup']);