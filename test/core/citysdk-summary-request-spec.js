jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('censusSummaryRequest', function() {
  var request = {
    lat: 38.9786,
    lng: -76.4911,
    api: 'acs5',
    year: 2014,
    variables: ['population'],
    level: 'state',
    state: '24',
    apikey: '88c69cd2d93fae30723c3ec3546d66521f339255'
  };
  
  var result;
  
  beforeEach(function(done) {
    CitySdkSummaryRequest.request(request).then(function(response) {
      result = response;
      done();
    });
  });
  
  it('should return a valid response', function() {
    expect(result).toBeDefined();
  });
});