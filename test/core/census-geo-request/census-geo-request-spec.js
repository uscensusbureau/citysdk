jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('CensusGeoRequest', function() {
  var request = {
    zip: "10001",
    level: "blockGroup",
    sublevel: true,
    container: "place",
    variables: ["income"],
    apikey: '88c69cd2d93fae30723c3ec3546d66521f339255'
  };
  
  it('should be non-null when instantiated', function() {
    var geoRequest = new CensusGeoRequest();
    expect(geoRequest).not.toBe(undefined);
  });
  
  describe('CensusGeoRequest Async Request', function() {
    var result;
    
    beforeEach(function(done) {
      CensusGeoRequest.request(request).then(function(response) {
        result = response;
        done();
      }, function(error) {
        result = error;
        done();
      });
    });
    
    it('should have a valid result', function() {
      expect(result).not.toBe(undefined);
      expect(result.hasOwnProperty('features')).toBe(true);
    });
  });
});