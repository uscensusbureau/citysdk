const fs = require('fs');
const common = require('../common');
const examples = require('./examples.json');
const dropdownTpl = fs.readFileSync(__dirname + '/templates/examples-dropdown.html', 'utf-8');

function ExamplesDropdownCtrl($http) {
  let ctrl = this;
  ctrl.examples = examples.examples;
}

module.exports = angular.module('citysdk.common').component('examplesDropdown', {
  template: dropdownTpl,
  controller: ExamplesDropdownCtrl
});
