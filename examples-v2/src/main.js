require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

require('./common/index');
require('./home/home');
require('./income-and-population/index');

let citysdk = angular.module('citysdk', [
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.tabs',

  'citysdk.common',
  'citysdk.home',
  'citysdk.incomeAndPopulation'
]);

citysdk.config(($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
});

angular.bootstrap(document, ['citysdk']);