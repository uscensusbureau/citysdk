describe('validateApi', function() {
  var request = {};
  CitySdkRequestValidator.validateApi(request);

  it('should modify request to have a default api', function() {
    expect(request.api).toBe('acs5');
  });
});

describe('validateApiYear', function() {
  var request = {};

  it('should only validate if the api field exists', function() {
    CitySdkRequestValidator.validateApiYear(request);
    expect(request.hasOwnProperty('year')).toBe(false);
  });

  it('should modify request to have a valid year for acst', function() {
    request.api = 'acs5';
    CitySdkRequestValidator.validateApiYear(request);

    expect(request.hasOwnProperty('year')).toBe(true);
    expect(request.year).toBeDefined();
  });
});

describe('validateLevel', function() {
  it('should change the level field to have a valid value', function() {
    var request = {level: 'invalid level'};
    CitySdkRequestValidator.validateLevel(request);

    expect(request.level).toBe('blockGroup');
  });

  it('should add the level field if it is missing', function() {
    var request = {};
    CitySdkRequestValidator.validateLevel(request);

    expect(request.level).toBe('blockGroup');
  })
});

describe('validateSublevel', function() {
  it('should add the default sublevel value of false', function() {
    var request = {};
    CitySdkRequestValidator.validateSublevel(request);

    expect(request.sublevel).toBe(false);
  });
});

describe('validateGeoVariables with invalid level', function() {
  var request = {
    level: 'invalid level*(5',
    state: '01',
    county: '001',
    api: 'acs5',
    year: 2014
  };

  var result;

  beforeEach(function(done) {
    CitySdkRequestValidator.validateGeoVariables(request)
        .then(function(response) {
          // Should not get here.
          result = response;
          done();
        })
        .catch(function(error) {
          result = error;
          done();
        });
  });

  it('should fail to find the level and return an error', function() {
    expect(result.message).toBe('Invalid level "invalid level*(5" for this request.');
  });
});

describe('validateGeoVariables with valid level', function() {
  var request = {
    level: 'state',
    state: '01',
    api: 'acs5',
    year: 2014
  };

  var result;

  beforeEach(function(done) {
    CitySdkRequestValidator.validateGeoVariables(request).then(function(response) {
      result = response;
      done();
    });
  });

  it('should find a match for the level', function() {
    expect(result.geographyValidForAPI).toBe(true);
  });
});