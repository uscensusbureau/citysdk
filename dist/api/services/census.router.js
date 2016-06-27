var express = require('express');
var keyauth = require('./auth.service.js');
var CitySdk = require('../core/citysdk');
var CensusModule = require('../modules/census/census.citysdk');

var citysdk = new CitySdk.default();
var router = express.Router();

var moduleInstantiated = false;
var census;

function decodeAuthHeader(req) {
  // The value is in the format 'Basic <base64_api_key:>'
  // Just want the <base64_api_key> part
  var authHeader = req.header('Authorization').split(' ');
  var base64ApiKey = authHeader[1];

  // Decode base64 services key
  var stringBuffer = new Buffer(base64ApiKey, 'base64');

  // The auth format is in the format username:password but we don't
  // use password and the services key is used as the username.
  // Here we're just extracting the username (services key) part.
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

router.post('/services', keyauth, function(req, res) {
  getModuleInstance(req).apiRequest(req.body, function(response) {
    res.json(response);
  });
});

router.get('/states', function(req, res) {
  res.json(citysdk.getStates());
});

router.get('/state-capitals', function(req, res) {
  res.json(citysdk.getStateCapitals());
});

router.get('/aliases', function(req, res) {
  res.json(getModuleInstance(req).getAliases());
});

router.get('/variable-to-alias', function(req, res) {
  function sendError(message) {
    res.status(400).send(message);
  }

  if (req.query && req.query.variables) {
    var variables = req.query.variables.split(',');

    try {
      var response = getModuleInstance(req).variableToAlias(variables);
      res.json(response);
    } catch (e) {
      sendError(e);
    }
    
  } else {
    sendError('Missing query parameter: variables');
  }
});

router.get('/alias-to-variable', function(req, res) {
  function sendError(message) {
    res.status(400).send(message);
  }
  
  if (req.query && req.query.aliases) {
    var aliases = req.query.aliases.split(',');
    
    try {
      var response = getModuleInstance(req).aliasToVariable(aliases);
      res.json(response);
    } catch (e) {
      sendError(e);
    }
  } else {
    sendError('Missing query parameter: aliases');
  }
});

module.exports = router;