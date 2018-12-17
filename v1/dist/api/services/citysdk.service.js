'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var citysdkRouter = require('./citysdk.router');

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', citysdkRouter);
app.listen('3000');