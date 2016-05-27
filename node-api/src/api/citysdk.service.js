var express = require('express');
var bodyParser = require('body-parser');
var censusRouter = require('./census.router');

var app = express();

app.use(bodyParser.json());
app.use('/citysdk/census', censusRouter);

app.listen('8080');



