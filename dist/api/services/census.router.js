'use strict';

var express = require('express');

var CensusRequest = require('../../sdk/core/census-request');
var validateApiKey = require('./auth.service').validateApiKey;
var decodeAuthHeader = require('./auth.service').decodeAuthHeader;

var router = express.Router();

router.post('/', validateApiKey, function (req, res) {
  req.body.apikey = decodeAuthHeader(req);
  CensusRequest.request(req.body).then(function (response) {
    res.json(response);
  });
});

router.get('/variable-to-alias', function (req, res) {
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

router.get('/alias-to-variable', function (req, res) {
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