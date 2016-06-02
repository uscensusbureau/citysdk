var express = require('express');
var keyauth = require('./auth.service');
var CensusModule = require('../../build/modules/census/citysdk.census');

var router = express.Router();

var moduleInstantiated = false;
var census;

function decodeAuthHeader(req) {
  // The value is in the format 'Basic <base64_api_key:>'
  // Just want the <base64_api_key> part
  var authHeader = req.header('Authorization').split(' ');
  var base64ApiKey = authHeader[1];

  // Decode base64 api key
  var stringBuffer = new Buffer(base64ApiKey, 'base64');

  // The auth format is in the format username:password but we don't
  // use password and the api key is used as the username.
  // Here we're just extracting the username (api key) part.
  return stringBuffer.toString().split(':')[0];
}

function getModuleInstance(req) {
  if (!moduleInstantiated) {
    var apikey = decodeAuthHeader(req);

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