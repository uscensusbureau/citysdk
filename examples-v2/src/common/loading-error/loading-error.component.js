require('../common');

const fs = require('fs');
const loadingErrorTpl = fs.readFileSync(__dirname + '/loading-error.html');

angular.module('citysdk.common').component('loadingError', {
  template: loadingErrorTpl,
  bindings: {
    message: '<',
    visible: '<'
  },
  controller: function() {}
});