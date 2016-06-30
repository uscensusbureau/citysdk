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
    container: 'state',
    variables: ['income'],
    tigerwebApi: 'current',
    tigerwebApiInfo: servers.current,
    tigerwebRequest: {
      f: "json",
      where: "",
      outFields: "*",
      outSR: 4326,
      inSR: 4326
    }
  };
  
  var result;
  
  beforeEach(function(done) {
    CitySdkTigerwebRequest.getContainerGeometry(request).then(function(response) {
      result = response;
      done();
    });
  });
  
  it('should return a modified request object', function() {
    expect(result).not.toBe(undefined);
    expect(result.lat).toEqual(32.3617);
  });

  it ('should have a containerGeometry field', function() {
    expect(result.hasOwnProperty('containerGeometry')).toBe(true);
  });
});

describe('getGeoData', function() {
  var request = {
    lat: 32.3617,
    lng: -86.2792,
    level: 'state',
    container: 'state',
    variables: ['income'],
    tigerwebApi: 'current',
    tigerwebApiInfo: servers.current,
    tigerwebRequest: {
      f: "json",
      where: "",
      outFields: "*",
      outSR: 4326,
      inSR: 4326
    }
  };
  
  var result;
  
  beforeEach(function(done) {
    CitySdkTigerwebRequest.getContainerGeometry(request).then(function(response) {
      result = response;
      done();
    });
  });
  
  it('should return a modified request object', function() {
    expect(result).toBeDefined();
    expect(result.lat).toBe(32.3617);
  });

  it('should return a result with the containerGeometry field', function() {
    expect(result.hasOwnProperty('containerGeometry')).toBe(true);
  });
});

describe('request', function() {
  var request = {
    lat: 32.3617,
    lng: -86.2792,
    level: 'state',
    container: 'state'
  };

  var result;

  beforeEach(function(done) {
    CitySdkTigerwebRequest.request(request).then(function(response) {
      result = response;
      done();
    });
  });

  it('should return a result with the features field', function() {
    expect(result.hasOwnProperty('response')).toBe(true);
    expect(result.hasOwnProperty('request')).toBe(true);
    expect(result.response.hasOwnProperty('features')).toBe(true);
  });
});