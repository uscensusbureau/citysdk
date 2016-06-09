jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('CensusModule', function() {
  var censusAPIkey = "21ca50e1a3e22cf2b18083748c278199395408ec";
  var census = new CensusModule(censusAPIkey);

  it('should parse a valid variable to an alias', function() {
    var variable = census.parseToVariable('employment_labor_force');
    expect(variable).toBe('B23025_002E');
  });

  it('should determine if an alias is normalizable', function() {
    expect(census.isNormalizable('commute_time_other')).toBe(true);
    expect(census.isNormalizable('education_none')).toBe(false);
  });

  it('should find the coordinates of a state capital for the given state code', function() {
    var request = {
      "level": "state",
      "state": "VA",
      "variables": ["education_masters"]
    };

    request = census.parseRequestStateCode(request);
    expect(request.lat).toBe(37.5333);
    expect(request.lng).toBe(-77.4667);
  });

  describe('Async call to external api for retreiveing acs5 2013 variables', function() {
    var result;

    beforeEach(function(done) {
      census.getACSVariableDictionary('acs5', 2013).then(function(response) {
        result = response;
        done();
      });
    });

    it('should return a list of variables for the ACS5 2013 api', function() {
      expect(result.variables).not.toBe(undefined);
    });

    it('should have the property for variable B23025_006E', function(done) {
      expect(result.variables.B23025_006E).not.toBe(undefined);
      done();
    });

    afterEach(function(done) {
      done();
    });
  });

  describe('Async call to external API for retrieving ACS1 2014 variables', function() {
    var result;

    beforeEach(function(done) {
      census.getACSVariableDictionary("acs1", 2014).then(function(response) {
        result = response;
        done();
      });
    });

    it('should retrieve a list of variables for the acs1 2014 API', function() {
      expect(result.variables).not.toBe(undefined);
    });

    it('should have the variable B24126_438E', function() {
      expect(result.variables.B24126_438E).not.toBe(undefined);
    });

    afterEach(function(done) {
      done();
    });
  });

  describe('Async call to external API for converting lat/lng to FIPS', function() {
    var result;

    beforeEach(function(done) {
      census.latLngToFips(25.7753, -80.2089).then(function(response) {
        result = response;
        done();
      });
    });

    it('should have the "geographies" property', function() {
      expect(result.result.geographies['2010 Census Blocks']).not.toBe(undefined);
    });

    it('should have the "States" properties nested in "geopgraphies"', function() {
      expect(result.result.geographies.States).not.toBe(undefined);
    });

    it('should have the state name for the given coordinates', function() {
      expect(result.result.geographies.States[0].BASENAME.toLowerCase()).toBe('florida');
    });

    afterEach(function(done) {
      done();
    });
  });

  describe('Async call to external API for retreiving FIPS data from an address', function() {
    var result;

    beforeEach(function(done) {
      census.addressToFips("777 Lynn Street", "Herndon", "VA").then(function(response) {
        result = response;
        done();
      });
    });

    it('should match the address and return valid data', function() {
      expect(result.result.addressMatches[0].geographies.States).not.toBe(null);
      expect(result.result.addressMatches[0].geographies.States[0].BASENAME.toLowerCase()).toBe("virginia");
    });

    afterEach(function(done) {
      done();
    });
  });

  describe('Async call to external API for converting zip code to Lat/Lng', function() {
    var result;

    beforeEach(function(done) {
      census.zipToLatLng("20190").then(function(response) {
        result = CitySdk.parseResponseLatLng(response);
        done();
      });
    });

    it('should return the correct lat/lng for the given zipcode', function() {
      expect(result.lat).toBe(38.9597752);
      expect(result.lng).toBe(-77.3368607);
    });

    afterEach(function(done) {
      done();
    });
  });

  describe('Async calls to external API that require valid FIPS data', function() {
    var request = {
      "level": "state",
      "lat": 25.7753,
      "lng": -80.2089,
      "year": 2013,
      "api": "acs1",
      "sublevel": true,
      "variables": [
        "commute_time",
        "commute_time_carpool",
        "commute_time_other"
      ]
    };

    var geographies;
    var fipsData;

    beforeEach(function(done) {
      census.latLngToFips(25.7753, -80.2089).then(function(response) {
        geographies = response.result.geographies;
        fipsData = geographies['2010 Census Blocks'][0];

        request["state"] = fipsData["STATE"];
        request["county"] = fipsData["COUNTY"];
        request["tract"] = fipsData["TRACT"];
        request["blockGroup"] = fipsData["BLKGRP"];

        if ("Incorporated Places" in geographies && geographies["Incorporated Places"].length) {
          request.place = geographies["Incorporated Places"][0]["PLACE"];
        }

        if (geographies['Incorporated Places'] && geographies["Incorporated Places"].length) {
          request.place_name = geographies["Incorporated Places"][0]["NAME"];
        }

        request.geocoded = true;
        done();
      });
    });

    describe('ACS summary request for 2013', function() {
      var r1;

      beforeEach(function(done) {
        census.acsSummaryRequest(request).then(function(response) {
          r1 = response;
          done();
        });
      });

      it('should return valid data', function(done) {
        expect(r1[1][2]).toBe('189255');
        done();
      });

      describe('ACS summary request for 2014', function() {
        var r2;

        beforeEach(function(done) {
          request.level = "county";
          request.sublevel = false;
          request.year = 2014;
          request.api = "acs5";
          request.variables = [
            "commute_time",
            "commute_time_carpool",
            "commute_time_other"
          ];

          census.acsSummaryRequest(request).then(function(response) {
            r2 = response;
            done();
          });
        });

        it('should have the population value 2600861', function(done) {
          expect(r2[1][4]).toBe('2600861');
          done();
        });

        describe('Geo request with FIPS data', function() {
          var r3;

          beforeEach(function(done) {
            census.geoRequest(request, function(response) {
              r3 = response;
              done();
            });
          });

          it('should have the correct county code 086', function() {
            expect(r3.features[0].properties.COUNTY).toBe('086');
          });

          it('should have the correct coordinates', function(done) {
            expect(r3.features[0].geometry.coordinates[0][0][0]).toEqual(-80.44092800001452);
            done();
          });

          describe('2010 SF1 county level request', function() {
            var r4;

            beforeEach(function(done) {
              request.level = "county";
              request.sublevel = false;
              request.year = 2010;
              request.api = "sf1";
              request.variables = [
                "population_1990",
                "age_75_to_79_1990",
                "race_south_american_uruguayan_2010"
              ];

              census.summaryRequest(request).then(function(response) {
                r4 = response;
                done();
              });
            });

            it('should have the correct population value for 2010 SF1', function(done) {
              expect(r4[1][1]).toBe('2496435');
              done();
            });

            describe('1990 SF1 State Level Request', function() {
              var r5;

              beforeEach(function(done) {
                request.level = "state";
                request.sublevel = false;
                request.year = 1990;
                request.api = "sf3";
                request.variables = [
                  "age_under_1_1990",
                  "age_3_to_4_1990"
                ];

                census.summaryRequest(request).then(function(response) {
                  r5 = response;
                  done();
                });
              });

              it('should have the correct population value', function(done) {
                expect(r5[1][1]).toBe('11382895');
                done();
              });

              describe('2007 Economic Census Request', function() {
                var r6;

                beforeEach(function(done) {
                  request.level = "state";
                  request.sublevel = false;
                  request.year = 2007;
                  request.api = "ewks";
                  request.variables = [
                    "EMP",
                    "ESTAB"
                  ];

                  census.summaryRequest(request).then(function(response) {
                    r6 = response;
                    done();
                  });
                });

                it('should include the population variable and the value', function(done) {
                  expect(r6[1][0]).toBe('4238403');
                  expect(r6[1][2]).toBe('55');
                  done();
                });

                describe('apiRequest 2007 Economic Census Request', function() {
                  var r7;

                  beforeEach(function(done) {
                    request.level = "state";
                    request.sublevel = false;
                    request.year = 2007;
                    request.api = "ewks";
                    request.variables = [
                      "EMP",
                      "ESTAB"
                    ];

                    census.apiRequest(request, function(response) {
                      r7 = response;
                      done();
                    });
                  });

                  it('it should have the ESTAB property and value', function(done) {
                    expect(r7.data[0].EMP).toBe('0');
                    expect(r7.data[0].ESTAB).toBe('55');
                    done();
                  });

                  describe('Invalid Geo request', function() {
                    var r8;

                    beforeEach(function(done) {
                      request.level = "tract";
                      request.sublevel = false;
                      request.year = 2007;
                      request.api = "ewks";
                      request.variables = [
                        "EMP",
                        "ESTAB"
                      ];
                      
                      delete request.data;
                      delete request.geographyValidForAPI;

                      census.geoRequest(request, function(response) {
                        r8 = response;
                        done();
                      });
                    });

                    it('should not return the correct data since the request is invalid', function(done) {
                      expect(r8).toBe(false);
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


