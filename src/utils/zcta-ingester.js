/**
 Downloads the ZIP Code Tabulation Area file from
 https://www.census.gov/geo/maps-data/data/gazetteer2010.html
 */

var fs = require('fs');
var http = require('http');
var exec = require('child_process').exec;

var AdmZip = require('adm-zip');
var Promise = require('promise');

var zipfile = fs.createWriteStream('zcta.zip');
var zctaUrl = 'http://www2.census.gov/geo/docs/maps-data/data/gazetteer/Gaz_zcta_national.zip';

function download() {
  return new Promise(function(resolve, reject) {
    http.get(zctaUrl, function(response) {
      response.pipe(zipfile);
      resolve();
    }, function() {
      reject();
    });
  });
}

function unzip() {
  exec('unzip zcta.zip');
}

download().done(unzip);
