const express = require('express');

const CitySdk = require('../../sdk/core/citysdk');
const validateApiKey = require('./auth.service').validateApiKey;
const decodeAuthHeader = require('./auth.service').decodeAuthHeader;

let router = express.Router();

router.post('/', validateApiKey, (req, res) => {
  req.body.apikey = decodeAuthHeader(req);
  CitySdk.request(req.body).then((response) => {
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
      var response = CitySdk.variableToAlias(variables);
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
      var response = CitySdk.aliasToVariable(aliases);
      res.json(response);
    } catch (e) {
      sendError(e);
    }
  } else {
    sendError('Missing query parameter: aliases');
  }
});

module.exports = router;