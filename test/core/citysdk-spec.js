describe('getStateCapitalCoords', function() {
  it('should return the coordinates for the state capital', function() {
    var latlng = CitySdk.getStateCapitalCoords('MD');
    expect(latlng.length).toEqual(2);
  });
});
