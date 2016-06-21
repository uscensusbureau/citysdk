jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('getContainerGeometry', function() {
  var request = {
    lat: 32.3617,
    lng: -86.2792,
    level: 'state',
    variables: ['income']
  };
  
  var result;
  
  beforeEach(function(done) {
    CensusTigerwebRequest.getContainerGeometry(request).then(function(response) {
      result = response;
      done();
    });
  });
  
  it('should retrieve valid geo json data', function() {
    expect(result).not.toBe(undefined);
  });
});