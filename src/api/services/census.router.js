import {decodeAuthHeader, validateApiKey} from './auth.service';

var express = require('express');
var CitySdk = require('../../../dist/api/core/citysdk');
var CensusModule = require('../../../dist/api/modules/census/census.citysdk');

var citysdk = new CitySdk.default();
var router = express.Router();

var moduleInstantiated = false;
var census;

function getModuleInstance(req) {
  if (!moduleInstantiated) {
    var apikey = decodeAuthHeader(req);

    census = new CensusModule.default(apikey);
    return census;
  }

  return census;
}

router.post('/', validateApiKey, function(req, res) {
  getModuleInstance(req).geoRequest(req.body, function(response) {
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