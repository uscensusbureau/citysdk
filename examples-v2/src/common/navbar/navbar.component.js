const fs = require('fs');
const common = require('../common');
const navbarTpl = fs.readFileSync(__dirname + '/templates/navbar.html', 'utf-8');

module.exports = angular.module('citysdk.common')
    .component('citysdkNavbar', {template: navbarTpl});
