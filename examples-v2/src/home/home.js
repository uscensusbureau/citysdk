const fs = require('fs');
const angular = require('angular');
const homeTpl = fs.readFileSync(__dirname + '/home.html', 'utf-8');

let home = angular.module('citysdk.home', []).config(($stateProvider) => {
  $stateProvider.state({
    url: '/',
    name: 'home',
    template: homeTpl,
    controller: function() {}
  });
});

module.exports = home;