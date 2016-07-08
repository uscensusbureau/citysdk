const fs = require('fs');
const angular = require('angular');
const incomePopulationTpl = fs.readFileSync(__dirname + '/templates/income-and-population.html', 'utf-8');

let incomeAndPopulation = angular.module('citysdk.incomeAndPopulation', []);

incomeAndPopulation.config(($stateProvider) => {
  $stateProvider.state({
    url: '/income-and-population',
    name: 'incomeAndPopulation',
    template: incomePopulationTpl,
    controller: 'IncomeAndPopulationCtrl',
    controllerAs: 'incomePopCtrl'
  });
});

module.exports = incomeAndPopulation;