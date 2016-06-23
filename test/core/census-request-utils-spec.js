jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('parseToVariable', function() {
  it('should return the census code "income"', function() {
    var variable = CensusRequestUtils.parseToVariable('income');
    expect(typeof variable).toBe('string');
  });

  it('should return the input if it doesnt find a matching alias', function() {
    var alias = 'B00094_3944922111';
    var variable = CensusRequestUtils.parseToVariable(alias);
    expect(variable).toBe(alias);
  });
});

describe('parseToValidVariable', function() {
  var api = 'acs5';
  var year = 2014;
  var alias = 'population';

  var variable = CensusRequestUtils.parseToValidVariable(alias, api, year);

  it('should return variable if the input api and year have a match', function() {
    expect(variable).toBe('B01003_001E');
  });
});

describe('getLatLngFromStateCode', function() {
  var state = 'MD';

  it ('should return the correct coordinates for the state capital', function() {
    var coordinates = CensusRequestUtils.getLatLngFromStateCode(state);

    expect(coordinates.length).toEqual(2);
    expect(coordinates[0]).toEqual(38.9786);
    expect(coordinates[1]).toEqual(-76.4911);
  });
});

describe('getLatLngFromZipcode', function() {
  var zip = '20876';
  var result;

  beforeEach(function(done) {
    CensusRequestUtils.getLatLngFromZipcode(zip).then(function(response) {
      result = response;
      done();
    });
  });

  it ('should return the correct coordinates for the state capital', function() {
    expect(result.length).toEqual(2);
  });
});

describe('getLatLngFromAddress', function() {
  
});

describe('getLatLng', function() {
  
});

describe('getFipsFromLatLng', function() {
  
});

describe('getGeographyVariables', function() {
  
});