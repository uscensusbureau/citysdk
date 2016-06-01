var express = require('express');
var keyauth = require('./auth.service');
var CensusModule = require('../../build/modules/census/citysdk.census');

var router = express.Router();
var census = new CensusModule.default('88c69cd2d93fae30723c3ec3546d66521f339255');

router.post('/geo', keyauth, function(req, res) {
  census.geoRequest(req.body, handleResponse);

  function handleResponse(response) {
    res.json(response);
  }
});

router.post('/api', keyauth, function(req, res) {
  census.apiRequest(req.body, handler);

  function handler(response) {
    res.json(response);
  }
});

module.exports = router;