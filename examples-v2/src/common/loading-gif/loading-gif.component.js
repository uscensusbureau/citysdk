require('../common');

const fs = require('fs');
const loadingGifTpl = fs.readFileSync(__dirname + '/loading-gif.html');

angular.module('citysdk.common').component('loadingGif', {
  template: loadingGifTpl,
  bindings: {
    message: '<',
    visible: '<'
  },
  controller: function() {}
});