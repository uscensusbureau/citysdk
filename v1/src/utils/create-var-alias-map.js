var fs = require('fs');
var aliases = require('../resources/aliases.json');

var variableToAliasMap = {};

for (var alias in aliases) {
  var variable = aliases[alias].variable;

  variableToAliasMap[variable] = {
    alias: alias,
    api: aliases[alias].api,
    description: aliases[alias].description
  };
}

fs.writeFileSync('../resources/var-alias-map.json', JSON.stringify(variableToAliasMap), 'utf-8');

