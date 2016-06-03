var express = require('express');
var bodyParser = require('body-parser');
var censusRouter = require('./census.router');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/citysdk/census', censusRouter);

app.listen('3000');
