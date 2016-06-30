jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('getStateCapitalCoords', function() {
  it('should return the coordinates for the state capital', function() {
    var latlng = CitySdk.getStateCapitalCoords('MD');
    expect(latlng.length).toEqual(2);
  });
});

describe('getAliases', function() {
  it('should return the alias to variable map', function() {
    var aliases = CitySdk.getAliases();
    expect(aliases).toBeDefined();
    expect(aliases.hasOwnProperty('population')).toBe(true);
  });
});

describe('variableToAlias', function() {
  it('should take a census variable and convert it to an alias name', function() {
    var variable = 'P0010001';
    var alias = CitySdk.variableToAlias(variable);
    expect(alias.hasOwnProperty(variable)).toBe(true);
  });
});

describe('variableToAlias with multiple variables', function() {
  it('should get aliases for all the given variables', function() {
    var variables = ['P0010001', 'B01003_001E', 'B19013_001E'];
    var aliases = CitySdk.variableToAlias(variables);

    expect(aliases.hasOwnProperty(variables[0])).toBe(true);
    expect(aliases.hasOwnProperty(variables[1])).toBe(true);
    expect(aliases.hasOwnProperty(variables[2])).toBe(true);
  });
});

describe('aliasToVariable', function() {
  it('should take an alias and return a census variable', function() {
    var alias = 'population_1990';
    var variables = CitySdk.aliasToVariable(alias);

    expect(variables.hasOwnProperty(alias)).toBe(true);
  });
});

describe('aliasToVariable with multiple aliases', function() {
  it('should take an alias and return a census variable', function() {
    var aliases = ['population_1990', 'populaion', 'income'];
    var variables = CitySdk.aliasToVariable(aliases);

    expect(variables.hasOwnProperty(aliases[0])).toBe(true);
    expect(variables.hasOwnProperty(aliases[1])).toBe(true);
    expect(variables.hasOwnProperty(aliases[2])).toBe(true);
  });
});

describe('request', function() {
  var request = {
    level: 'state',
    zip: 21701,
    variables: ['income', 'population'],
    apikey: '88c69cd2d93fae30723c3ec3546d66521f339255'
  };

  var result;

  beforeEach(function(done) {
    CitySdk.request(request).then(function(response) {
      result = response;
      done();
    });
  });

  it('should return a valid response with geoJson', function() {
    expect(result).toBeDefined();
    expect(result.hasOwnProperty('features')).toBe(true);
    expect(result.hasOwnProperty('totals')).toBe(true);
  });
});