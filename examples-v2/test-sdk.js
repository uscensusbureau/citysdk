const $ = require('jquery');
const Terraformer = require('terraformer');
Terraformer.ArcGIS = require('terraformer-arcgis-parser');

const CitySdk = require('./lib/citysdk');

CitySdk
    .request({
      "level": "county",
      "state": "MD",
      "sublevel": true,
      "variables": ["income", "population"],
      "apikey": "88c69cd2d93fae30723c3ec3546d66521f339255"
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });