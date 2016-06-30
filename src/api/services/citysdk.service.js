const express = require('express');
const bodyParser = require('body-parser');
const censusRouter = require('./census.router');

let app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', censusRouter);
app.listen('3000');
