const express = require('express');

const CensusRequest = require('../../sdk/core/census-request');
const validateApiKey = require('./auth.service').validateApiKey;
const decodeAuthHeader = require('./auth.service').decodeAuthHeader;

let router = express.Router();

router.post('/', validateApiKey, (req, res) => {
  req.body.apikey = decodeAuthHeader(req);
  CensusRequest.request(req.body).then((response) => {
    res.json(response)
  });
});

router.get('/variable-to-alias', (req, res) => {
  function sendError(message) {
    res.sendStatus(400).send(message);
  }

  if (req.query && req.query.variables) {
    var variables = req.query.variables.split(',');

    try {
      var response = CensusRequest.variableToAlias(variables);
      res.json(response);
    } catch (e) {
      sendError(e);
    }
    
  } else {
    sendError('Missing query parameter: variables');
  }
});

router.get('/alias-to-variable', (req, res) => {
  function sendError(message) {
    res.sendStatus(400).send(message);
  }
  
  if (req.query && req.query.aliases) {
    var aliases = req.query.aliases.split(',');
    
    try {
      var response = CensusRequest.aliasToVariable(aliases);
      res.json(response);
    } catch (e) {
      sendError(e);
    }
  } else {
    sendError('Missing query parameter: aliases');
  }
});

module.exports = router;