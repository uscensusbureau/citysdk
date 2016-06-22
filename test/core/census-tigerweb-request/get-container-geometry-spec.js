jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

var servers = {
  "current": {
    "url": "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/{mapserver}/query",
    "mapServers": {
      "state": 84,
      "county": 86,
      "tract": 8,
      "blockGroup": 10,
      "blocks": 12,
      "place": 28
    }
  }
};

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