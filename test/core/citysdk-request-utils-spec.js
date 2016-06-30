jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('parseToVariable', function() {
  it('should return the census code "income"', function() {
    var variable = CitySdkRequestUtils.parseToVariable('income');
    expect(typeof variable).toBe('string');
  });

  it('should return the input if it doesnt find a matching alias', function() {
    var alias = 'B00094_3944922111';
    var variable = CitySdkRequestUtils.parseToVariable(alias);
    expect(variable).toBe(alias);
  });
});

describe('parseToValidVariable', function() {
  var api = 'acs5';
  var year = 2014;
  var alias = 'population';

  var variable = CitySdkRequestUtils.parseToValidVariable(alias, api, year);

  it('should return variable if the input api and year have a match', function() {
    expect(variable).toBe('B01003_001E');
  });
});

describe('getLatLngFromStateCode', function() {
  var state = 'MD';

  it ('should return the correct coordinates for the state capital', function() {
    var coordinates = CitySdkRequestUtils.getLatLngFromStateCode(state);

    expect(coordinates.length).toEqual(2);
    expect(coordinates[0]).toEqual(38.9786);
    expect(coordinates[1]).toEqual(-76.4911);
  });
});

describe('getLatLngFromZipcode', function() {
  var zip = '20876';
  var result;

  beforeEach(function(done) {
    CitySdkRequestUtils.getLatLngFromZipcode(zip).then(function(response) {
      result = response;
      done();
    });
  });

  it ('should return the correct coordinates for the state capital', function() {
    expect(result.length).toEqual(2);
  });
});

describe('getLatLngFromAddress without zip, city and state', function() {
  var address = {
    street: '100 1st Street'
  };

  it ('should throw an error asking for zip or city and state', function() {
    expect(function() {CitySdkRequestUtils.getLatLngFromAddress(address)})
        .toThrow(new Error('Invalid address! "city" and "state" or "zip" must be provided.'));
  });
});

describe('getLatLngFromAddress using street and city only', function() {
  var address = {
    street: '100 1st Street',
    city: 'Rockville'
  };

  it ('should throw an error because both city AND state are required', function() {
    expect(function() {CitySdkRequestUtils.getLatLngFromAddress(address)})
        .toThrow(new Error('Invalid address! "city" and "state" or "zip" must be provided.'));
  });
});

describe('getLatLngFromAddress using zip, city and state', function() {
  var address = {
    street: '100 1st Street',
    city: 'Rockville',
    state: 'MD',
    zip: '20851'
  };

  var result;

  beforeEach(function(done) {
    CitySdkRequestUtils.getLatLngFromAddress(address).then(function(response) {
      result = response;
      done();
    });
  });

  it('should use the street and zip to find the coordinates', function() {
    expect(result.hasOwnProperty('result')).toBe(true);
    expect(result.result.hasOwnProperty('addressMatches')).toBe(true);
    expect(result.result.addressMatches.length).toEqual(1);
    expect(result.result.addressMatches[0].hasOwnProperty('coordinates')).toBe(true);
  });
});

describe('getLatLngFromAddress using city and state', function() {
  var address = {
    street: '100 1st Street',
    city: 'Rockville',
    state: 'MD'
  };

  var result;

  beforeEach(function(done) {
    CitySdkRequestUtils.getLatLngFromAddress(address).then(function(response) {
      result = response;
      done();
    });
  });

  it('should use the city and state maka a successful request', function() {
    expect(result.hasOwnProperty('result')).toBe(true);
    expect(result.result.hasOwnProperty('addressMatches')).toBe(true);
    expect(result.result.addressMatches.length).toEqual(1);
    expect(result.result.addressMatches[0].hasOwnProperty('coordinates')).toBe(true);
  });
});

describe('getLatLng using request with address', function() {
  var request = {
    address: {
      street: '100 1st Street',
      zip: '20851'
    }
  };

  var result;

  beforeEach(function(done) {
    CitySdkRequestUtils.getLatLng(request).then(function(response) {
      result = response;
      done();
    });
  });

  it('should successfully retrieve the coordinates using the address', function() {
    expect(request.hasOwnProperty('lat') && request.hasOwnProperty('lng')).toBe(true);
    expect(typeof request.lat).toBe('number');
  });
});

describe('getLatLng using request with zip', function() {
  var request = {
    zip: '20851'
  };

  var result;

  beforeEach(function(done) {
    CitySdkRequestUtils.getLatLng(request).then(function(response) {
      result = response;
      done();
    });
  });

  it('should successfully retrieve the coordinates using the zipcode', function() {
    expect(request.hasOwnProperty('lat') && request.hasOwnProperty('lng')).toBe(true);
    expect(typeof request.lat).toBe('number');
  });
});

describe('getLatLng using request with state', function() {
  var request = {
    state: 'MD'
  };

  var result;

  beforeEach(function(done) {
    CitySdkRequestUtils.getLatLng(request).then(function(response) {
      result = response;
      done();
    });
  });

  it('should successfully retrieve the coordinates using the state code', function() {
    expect(request.hasOwnProperty('lat') && request.hasOwnProperty('lng')).toBe(true);
    expect(typeof request.lat).toBe('number');
  });
});

describe('getFipsFromLatLng', function() {
  var request = {state: 'MD'};

  beforeEach(function(done) {
    CitySdkRequestUtils.getLatLng(request).then(function(response) {
      request = response;
      done();
    });
  });

  describe('get fips codes', function() {
    var result;

    beforeEach(function(done) {
      CitySdkRequestUtils.getFipsFromLatLng(request).then(function(response) {
        result = response;
        done();
      });
    });

    it('should return a modified request object with fips codes', function() {
      expect(request.hasOwnProperty('state')).toBe(true);
      expect(request.hasOwnProperty('county')).toBe(true);
      expect(request.hasOwnProperty('blockGroup')).toBe(true);
      expect(request.hasOwnProperty('tract')).toBe(true);
    });
  });
});

describe('getGeographyVariables without api and year', function() {
  it('should throw and error asking for api and year', function() {
    expect(function() {CitySdkRequestUtils.getGeographyVariables({})})
        .toThrow(new Error('Invalid request! "year" and "api" fields must be provided.'));
  });
});

describe('getGeographyVariables without api and year', function() {
  var request = {api: 'acs5', year: 2014};
  var result;
  
  beforeEach(function(done) {
    CitySdkRequestUtils.getGeographyVariables(request).then(function(response) {
      result = response;
      done();
    });
  });
  
  it('should successfully get the geography file for the give api and year', function() {
    expect(result).toBeDefined();
  });
});