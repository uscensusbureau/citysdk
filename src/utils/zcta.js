var fs = require('fs');
var readline = require('readline');
var metadata = require('./zcta-2015.metadata.json');

var reader = readline.createInterface({
  input: fs.createReadStream('zcta-2015.txt')
});

var i = 1;
var result = {};
reader.on('line', function(line) {
  if (i > 1) {
    var entry = {};
    var values = line.split('\t');

    metadata.fields.forEach(function(field) {
      entry[field.outputName] = values[field.offset].trim();
    });
    
    result[entry.zip] = [parseFloat(entry.lng), parseFloat(entry.lat)];
  }

  i++;
});

reader.on('close', function() {
  fs.writeFileSync('zipcode-to-coordinates.json', JSON.stringify(result), 'UTF-8');
});

