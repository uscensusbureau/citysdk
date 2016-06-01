var express = require('express');
var keyauth = require('./auth.service');
var CensusModule = require('../../build/modules/census/citysdk.census');

var router = express.Router();

var moduleInstantiated = false;
var census;

function getModuleInstance(req) {
  if (!moduleInstantiated) {
    var authHeader = req.header("Authorization").split(" ");
    var apikey = authHeader[1];

    census = new CensusModule.default(apikey);
    return census;
  }

  return census;
}

router.post('/geo', keyauth, function(req, res) {
  getModuleInstance(req).geoRequest(req.body, function(response) {
    res.json(response);
  });
});

router.post('/api', keyauth, function(req, res) {
  getModuleInstance(req).apiRequest(req.body, function(response) {
    res.json(response);
  });
});

module.exports = router;