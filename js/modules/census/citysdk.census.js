/**
 * @title  CitySDK Census Module
 *
 * @overview The Census Module provides access to the various data sets provided by the Census Bureau.
 * This includes several surveys (ACS, Decennial, etc), the geocoder service (convert locations to FIPS
 * locations, and TigerWeb (map shape data).
 */

// CitySdk core
import CitySdk from '../../core/citysdk.new';
import CensusUtils from './census-utils';

// JSON files
import availableDatasets from './json/available-datasets.json';
import properties from './json/census.properties.json';
import requiredVariables from './json/required-variables.json';

import $ from 'jquery';

export default class CensusModule {

  constructor() {
    this.version = properties.version;
    this.minCoreVersionRequired = properties.minCoreVersionRequired;
    this.supplementalRequestsInFlight = 0;

    this.stateCapitals = CitySdk.getStatecapitals();
    this.stateNames = CitySdk.getStateNames();

    // Assign deprecated functions for backwards compatibility;
    this.acsSummaryRequest = this.summaryRequest;
    this.sfSummaryRequest = this.summaryRequest;

    this.citysdk = new CitySDK();
    this.citysdk.modules.census = this;
  }

  /**
   * Enable function. Stores the API key for this module and sets it as enabled.
   * It will also compare the CitySDK core's version number to the minimum number
   * required as specified for this module.
   *
   * @param {string} apiKey The census API key.
   *
   * @returns {boolean} True if enabled, false if not enabled.
   */
  enable(apiKey) {
    this.apiKey = apiKey;

    if (this.citysdk.version >= properties.minCoreVersionRequired) {
      this.enabled = true;
      return true;
    } else {
      this.enabled = false;
      return false;
    }
  }

  /**
   * Converts co-ordinates to Census FIPS via the Geocoder API
   *
   * @param {float} inlat Latitude
   * @param {float} inlng Longitude
   *
   * @param {function} callback Callback function
   */
  latLngToFIPS(inlat, inlng, callback) {
    let intermediate = JSON.parse(JSON.stringify([inlat, inlng]));
    let lat = intermediate[0];
    let lng = intermediate[1];

    let cacheKey = lat.toString() + lng.toString();
    let citysdk = this.citysdk;

    // Check to see if this question is cached
    this.citysdk.getCachedData("census", "latLngToFIPS", cacheKey, function(cachedData) {
      if (cachedData != null) {
        callback(cachedData);

      } else {
        // //Insert our requested coordinates into the geocoder url
        let geocoderURL = `${properties.defaultEndpoints.geocoderURL}coordinates?x=${lng}&y=${lat}&benchmark=4&vintage=4&layers=8,12,28,86,84&format=jsonp&callback=?`;

        //Make our AJAX request
        let request = CitySdk.jsonpRequest(geocoderURL);

        //Attach a completion event to the promise
        request.done(function(response) {
          //Call the callback
          if (citysdk.allowCache) {
            citysdk.setCachedData("census", "latLngToFIPS", cacheKey, response.result.geographies);
          }

          callback(response.result.geographies);
        });
      }
    });
  }

  /**
   * Converts a street address to Census FIPS via the Geocoder API
   *
   * Returns an array of matched addresses.
   *
   * @param {string} instreet Street Address
   * @param {string} incity City
   * @param {string} instate State (2-Letter USPS Code)
   * @param {function} atfCallback Callback function
   */
  addressToFIPS(instreet, incity, instate, atfCallback) {
    let intermediate = JSON.parse(JSON.stringify([instreet, incity, instate]));
    let city = intermediate[1];
    let street = intermediate[0];
    let state = intermediate[2];

    let cacheKey = street.replace(/\W/g, '') + city.replace(/\W/g, '') + state.replace(/\W/g, '');
    let citysdk = this.citysdk;

    // Check to see if this question is cached
    citysdk.getCachedData("census", "addressToFIPS", cacheKey, function(cachedData) {
      if (cachedData != null) {
        atfCallback(cachedData);

      } else {
        //Geocoder URL for addresses
        let geocoderURL = `${properties.defaultEndpoints.geocoderURL}address?street=${street}&city=${city}&state=${state}&benchmark=4&vintage=4&layers=8,12,28,86,84&format=jsonp&callback=?`;

        //This converts the spaces/weird characters into proper encoding so we don't break things
        geocoderURL = encodeURI(geocoderURL);

        //Make the call
        let request = CitySdk.jsonpRequest(geocoderURL);

        //Send to the callback
        request.done(function(response) {
          if (citysdk.allowCache == true) {
            citysdk.setCachedData("census", "addressToFIPS", cacheKey, response.result.addressMatches);
          }

          atfCallback(response.result.addressMatches);
        });
      }
    });
  }

  /**
   * Converts a ZIP code to Lat/Lng and calls the callback on it.
   *
   * @param {Number} inzip 5 digit Zip code
   * @param {function} callback
   */
  ZIPtoLatLng(inzip, callback) {
    let zip = JSON.parse(JSON.stringify(inzip));
    let cacheKey = zip.toString();
    let citysdk = this.citysdk;

    // Check to see if this question is cached
    citysdk.getCachedData("census", "ZIPtoLatLng", cacheKey, function(cachedData) {
      if (cachedData != null) {
        callback(cachedData);

      } else {
        let base = `${properties.defaultEndpoints.tigerwebURL}tigerWMS_Current/MapServer/2/query?where=ZCTA5%3D${zip}`;

        let fullUrl = base + '&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR='
            + '&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=CENTLAT%2CCENTLON&returnGeometry='
            + 'false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly='
            + 'false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion='
            + '&returnDistinctValues=false&f=pjson';

        let request = CitySdk.ajaxRequest(fullUrl);

        request.done(function(response) {
          response = $.parseJSON(response);
          let returnValue = {"lat": null, "lng": null};

          if ("features" in response) {
            if (response.features.length > 0) {
              returnValue.lat = response.features[0].attributes.CENTLAT;
              returnValue.lng = response.features[0].attributes.CENTLON;
            }
          }

          if (citysdk.allowCache == true) {
            citysdk.setCachedData("census", "ZIPtoLatLng", cacheKey, returnValue);
          }

          callback(returnValue);
        })
      }
    });
  }

  /**
   * Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically.
   *
   * @param {object} request JSON request (see APIRequest)
   * @param {function} callback
   */
  summaryRequest(request, callback) {
    let cows = JSON.parse(JSON.stringify(request));
    let cacheKey = JSON.stringify(cows).replace(/\W/g, '');
    let apiKey = this.apiKey;
    let citysdk = this.citysdk;

    // Check to see if this question is cached
    citysdk.getCachedData("census", "summaryRequest", cacheKey, function(cachedData) {
      if (cachedData != null) {
        callback(cachedData);

      } else {
        let yearPattern = /({year})/;
        let apiPattern = /({api})/;
        let variablePattern = /({let})/;
        let blockGroupPattern = /({blockGroup})/;
        let statePattern = /({state})/;
        let countyPattern = /({county})/;
        let tractPattern = /({tract})/;
        let placePattern = /({place})/;
        let keyPattern = /({key})/;
        let qualifiersPattern = /({qualifiers})/;

        let qualifiers = "for=";
        let cascade = false;

        if (cows.sublevel) {
          let level = (cows.level == "blockGroup") ? "block+group" : cows.level;
          switch (cows.container) {
            case "us":
              qualifiers += level + ":*";
              break;
            case "place":
            case "state":
              qualifiers += level + ":*&in=state:{state}";
              if (cows.level == "blockGroup") qualifiers += "+county:{county}";
              break;
            case "county":
              qualifiers += level + ":*&in=county:{county}+state:{state}";
              break;
            case "tract":
              qualifiers += level + ":*&in=tract:{tract}+county:{county}+state:{state}";
              break;
          }
        }

        //Only do this if the previous switch had no effect (i.e. no contianer)
        //TODO: Clean this up, unify with the above
        if (qualifiers == "for=") {
          switch (cows.level) {
            case "us":
              //If sublevel, add the appropriate for and attach the in
              if (cows.sublevel) {
                qualifiers += "state:*";
                cascade = true;
              } else {
                qualifiers += "us:1";
              }
              break;
            case "blockGroup":
              if (cows.sublevel) {
                //Can't do this. No levels beneath. We'll set the sublevel to false here
                cows.sublevel = false;
              }
              qualifiers += "block+Group:{blockGroup}";
              if (!cascade) {
                qualifiers += "&in=";
                cascade = true;
              }
            case "tract":
              //If sublevel, add the appropriate for and attach the in
              //We also check the cascade tag so we don't do this twice.
              if (cows.sublevel & !cascade) {
                qualifiers += "block+Group:*&in=";
                cascade = true;
              }

              qualifiers += "tract:{tract}";
              if (!cascade) {
                qualifiers += "&in=";
                cascade = true;
              } else {
                qualifiers += "+";
              }
            case "county":
              //If sublevel, add the appropriate for and attach the in
              //We also check the cascade tag so we don't do this twice.
              if (cows.sublevel && !cascade) {
                qualifiers += "tract:*&in=";
                cascade = true;
              }

              qualifiers += "county:{county}";
              if (!cascade) {
                qualifiers += "&in=";
                cascade = true;
              } else {
                qualifiers += "+";
              }
            case "place":
              //If sublevel, add the appropriate for and attach the in
              //Check for cascade so we don't do this twice
              if (cows.sublevel && !cascade) {
                qualifiers += "place:*&in=";
                cascade = true;
              } else if (!cascade) {
                //We only use place in the for, for the moment
                qualifiers += "place:{place}&in=";
                cascade = true;
              }
            case "state":
              //If sublevel, add the appropriate for and attach the in
              //We also check the cascade tag so we don't do this twice.
              if (cows.sublevel && !cascade) {
                qualifiers += "county:*&in=";
                cascade = true;
              }

              qualifiers += "state:{state}";
              break;
          }
        }

        //Construct the list of variables
        let variableString = "";

        for (var i = 0; i < cows.variables.length; i++) {

          if (CensusUtils.isNormalizable(cows.variables[i])) {
            // add acs population variable
            if (cows.variables.indexOf("population") < 0) {
              //We have a variable that is normalizable, but no population in the request.
              //Grab the population

              cows.variables.push("population");
            }
            //We have normalizable variables AND a request for population, we can break the for loop now
            break;
          }
        }

        // Convert the aliased variables
        for (var i = 0; i < cows.variables.length; i++) {
          let variableIntermediate = CensusUtils.parseToValidVariable(cows.variables[i], cows.api, cows.year);
          if (variableIntermediate) {
            cows.variables[i] = variableIntermediate;
          }
        }

        // Add the Required variables
        if ($.inArray(cows.api, requiredVariables)) {
          if ($.inArray(cows.year, requiredVariables[cows.api])) {
            for (var i = 0; i < requiredVariables[cows.api][cows.year].length; i++) {
              if (cows.variables.indexOf(requiredVariables[cows.api][cows.year][i]) == -1) {
                cows.variables.unshift(requiredVariables[cows.api][cows.year][i]);
              }
            }
          }
        }

        // Add the variables to request string
        for (var i = 0; i < cows.variables.length; i++) {
          if (i != 0) variableString += ",";
          variableString += cows.variables[i];

        }

        //The URL for ACS5 request (summary file)
        let censusURL = properties.defaultEndpoints.censusURL + "{year}/{api}?get={let}&{qualifiers}&key={key}";

        //Regex our URL to insert appropriate variables
        censusURL = censusURL.replace(qualifiersPattern, qualifiers);
        censusURL = censusURL.replace(apiPattern, cows.api);
        censusURL = censusURL.replace(yearPattern, cows.year);
        censusURL = censusURL.replace(variablePattern, variableString);
        censusURL = censusURL.replace(blockGroupPattern, cows.blockGroup);
        censusURL = censusURL.replace(statePattern, cows.state);
        censusURL = censusURL.replace(countyPattern, cows.county);
        censusURL = censusURL.replace(tractPattern, cows.tract);
        censusURL = censusURL.replace(placePattern, cows.place);
        censusURL = censusURL.replace(keyPattern, apiKey);

        let request = CitySdk.ajaxRequest(censusURL);

        //Attach a completion event to the promise
        request.done(function(response) {
          //Turn it into json
          let jsonObject = $.parseJSON(response);
          citysdk.setCachedData("census", "summaryRequest", cacheKey, jsonObject);

          //Call the callback
          callback(jsonObject);
        });
      }
    });
  }

  /**
   * Makes a call to the Census TigerWeb API for Geometry.
   * Our spatial reference is 4326
   *
   * @param {object} request
   * @param {function} callback
   */
  tigerwebRequest(request, callback) {
    let module = this;
    let citysdk = this.citysdk;

    //This will ensure our coordinates come out properly
    let spatialReferenceCode = 4326;

    let servers = {
      current: {
        url: properties.defaultEndpoints.tigerwebURL + "tigerWMS_Current/MapServer/{mapserver}/query",
        mapServers: {
          "state": 84,
          "county": 86,
          "tract": 8,
          "blockGroup": 10,
          "blocks": 12,
          "place": 28
        }
      },
      acs2014: {
        url: properties.defaultEndpoints.tigerwebURL + "/tigerWMS_ACS2014/MapServer/{mapserver}/query",
        mapServers: {
          "state": 82,
          "county": 84,
          "tract": 8,
          "blockGroup": 10,
          "place": 26
        }
      },
      acs2013: {
        url: properties.defaultEndpoints.tigerwebURL + "tigerWMS_ACS2013/MapServer/{mapserver}/query",
        mapServers: {
          "state": 82,
          "county": 84,
          "tract": 8,
          "blockGroup": 10,
          "place": 26
        }
      },
      census2010: {
        url: properties.defaultEndpoints.tigerwebURL + "tigerWMS_Census2010/MapServer/{mapserver}/query",
        mapServers: {
          "state": 98,
          "county": 100,
          "tract": 14,
          "blockGroup": 16,
          "blocks": 18,
          "place": 34
        }
      }
    };

    let server = "current";
    if ("mapServer" in request) {
      server = request.mapServer;
    } else {
      request.mapServer = "current";
    }

    //Dictionary of map server codes
    let mapServers = servers[server].mapServers;

    module.parseRequestStateCode(request);

    //Check for zip code
    if ("zip" in request) {
      //We have zip code - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {
        //We have the zip but no lat/lng - parse it and re-call
        module.ZIPtoLatLng(request.zip, function(response) {
          request.lat = response.lat;
          request.lng = response.lng;
          module.tigerwebRequest(request, callback);
          return;
        });
      }
    }

    //Check for an address object
    if ("address" in request) {
      //We have address - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {
        //We have the address but no lat/lng - parse it and re-call
        module.addressToFIPS(request.address.street, request.address.city, request.address.state, function(response) {
          //Take the first matched address
          request.lat = response[0].coordinates.y;
          request.lng = response[0].coordinates.x;

          //Attach this "matched address" to the request address object so the user knows what we're using
          request.address.addressMatch = response[0];

          module.tigerwebRequest(request, callback);
          return;
        })
      }
    }

    module.parseRequestLatLng(request);

    let mapserverPattern = /({mapserver})/;

    let tigerRequest = {
      f: "json",
      where: "",
      outFields: "*",
      outSR: spatialReferenceCode,
      inSR: spatialReferenceCode
    };

    var tigerURL = servers[server].url;

    if ("container" in request && "sublevel" in request) {
      if (!request.sublevel) {
        //They submitted a sublevel flag but it's false... remove the unnecessary flags and re-request
        delete request.sublevel;
        delete request.container;
        module.tigerwebRequest(request, callback);
        return;
      }

      if (!("containerGeometry" in request)) {
        //We have a sublevel request with a container. We need to grab the container's geography and return it
        tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.container]);
        tigerRequest.geometry = request.lng + "," + request.lat;
        tigerRequest.geometryType = "esriGeometryPoint";
        tigerRequest.spatialRel = "esriSpatialRelIntersects";

        // caching here
        let cacheKey = tigerURL.toString().replace(/\W/g, '') + JSON.stringify(tigerRequest).replace(/\W/g, '');
        let tigerURLReq = JSON.parse(JSON.stringify(tigerURL));
        let tigerRequestSubmitted = JSON.parse(JSON.stringify(tigerRequest));

        citysdk.getCachedData("census", "tigerwebRequest", cacheKey, function(cachedData) {
          if (cachedData != null) {
            module.tigerwebRequest(cachedData, callback);
            return;

          } else {
            CitySdk.postRequest(tigerURLReq, tigerRequestSubmitted).done(
                function(response) {
                  let json = $.parseJSON(response);
                  let features = json.features;

                  //Grab our container ESRI geography, attach it to our request, and call this function again.
                  if (request.container == "us") {
                    request.containerGeometry = module.GEOtoESRI(usBoundingBox)[0].geometry;
                  } else {
                    request.containerGeometry = features[0].geometry;
                  }

                  citysdk.setCachedData("census", "tigerwebRequest", cacheKey, request);
                  module.tigerwebRequest(request, callback);
                }
            );
          }
        });

        return;

      } else {
        //We have a sublevel request with a container, AND we've already grabbed the container's ESRI json
        tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
        tigerRequest.geometry = JSON.stringify(request.containerGeometry);
        tigerRequest.geometryType = "esriGeometryPolygon";
        tigerRequest.spatialRel = (request.container == "place" || request.container == "geometry") ? "esriSpatialRelIntersects" : "esriSpatialRelContains";

        delete request.containerGeometry;

        let cacheKey = tigerURL.toString().replace(/\W/g, '') + JSON.stringify(tigerRequest).replace(/\W/g, '');
        let tigerURLReq = JSON.parse(JSON.stringify(tigerURL));
        let tigerRequestSubmitted = JSON.parse(JSON.stringify(tigerRequest));

        citysdk.getCachedData("census", "tigerwebRequest", cacheKey, function(cachedData) {
          if (cachedData != null) {
            callback(module.ESRItoGEO(cachedData));
            return;

          } else {
            CitySdk.postRequest(tigerURLReq, tigerRequestSubmitted).done(function(response) {
              citysdk.setCachedData("census", "tigerwebRequest", cacheKey, response);
              callback(module.ESRItoGEO(response));
            });
          }
        });
      }

    } else if ("sublevel" in request) {
      if (!request.sublevel) {
        //They submitted a sublevel flag but it's false... remove the unnecessary flags and re-request
        delete request.sublevel;
        delete request.container;
        module.tigerwebRequest(request, callback);

        return;
      }

      //Sublevel, no container
      //Make the container equal to the level, and the sublevel
      request.container = request.level;
      switch (request.level) {
        case "us":
          request.level = "state";
          break;
        case "state":
          request.level = "county";
          break;
        case "county":
          request.level = "tract";
          break;
        case "place":
          request.level = "tract";
          break;
        case "tract":
          request.level = "blockGroup";
          break;
      }

      module.tigerwebRequest(request, callback);
      return;

    } else {
      //We have a sublevel request with a container. We need to grab the container's geography and return it
      tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
      tigerRequest.geometry = request.lng + "," + request.lat;
      tigerRequest.geometryType = "esriGeometryPoint";
      tigerRequest.spatialRel = "esriSpatialRelIntersects";

      // caching here
      let cacheKey = tigerURL.toString().replace(/\W/g, '') + JSON.stringify(tigerRequest).replace(/\W/g, '');
      let tigerURLReq = JSON.parse(JSON.stringify(tigerURL));
      let tigerRequestSubmitted = JSON.parse(JSON.stringify(tigerRequest));

      citysdk.getCachedData("census", "tigerwebRequest", cacheKey, function(cachedData) {
        if (cachedData != null) {
          callback(module.ESRItoGEO(cachedData));
          return;

        } else {
          CitySdk.postRequest(tigerURLReq, tigerRequestSubmitted).done(function(response) {
            citysdk.setCachedData("census", "tigerwebRequest", cacheKey, response);
            callback(module.ESRItoGEO(response));
          });
        }
      });
    }
  }

  /**
   * Processes a data request by looking at a JSON request
   *
   * JSON Requests should include:
   * "year" - Year of the request. See acs5years object for available years. Defaults to 2013 if not specified.
   * "lat" - Latitude of the requested location (either specified as x, lat, or latitude) NORTH
   * "lng" - Longitude of the requested location (either specified as y, lng, or longitude) EAST
   * "sublevel" - Defaults to "false". If set to "true", it will return the group of sublevels from the specified level.
   * "level" - Level of the request. Options are: blockGroup, tract, county, state, us. Will default to blockGroup.
   * "variables" - Array of variables either by alias or specific name
   *
   * exampleRequest = {
   *       "year": "2013",
   *       "lat": 38.9047,
   *       "lng": -77.0164,
   *       "level": "blockGroup"
   *       "variables": [
   *           "income"
   *       ]
   *   };
   *
   *   exampleResponse = {
   *       "year": "2013",
   *       "lat": 38.9047,
   *       "lng": -77.0164,
   *       "level": "blockGroup",
   *       "state": "11",
   *       "county": "001",
   *       "tract": "004701",
   *       "blockGroup": "2",
   *       "data": {
   *           "income": 33210
   *       }
   *   };
   *
   *   A response where you set sublevel to "true" will have an array in the data field instead of an object.
   *
   *
   *   Another example request:
   *
   *   {
   *      "state": "NY",
   *      "level": "state",
   *      "variables": [
   *          "income",
   *          "population"
   *      ]
   *   }
   *
   *   You could also send an address object to specify location
   *   {
   *      "address": {
   *          "street": "18 F Street NW"
   *          "city": "Washington",
   *          "state": "DC"
   *       }
   *
   *       "level": "blockGroup",
   *       "variables": [
   *          "population"
   *       ]
   *   }
   *
   * @param {object} requestIn The JSON object of the request
   * @param {function} callback A callback, which accepts a response parameter
   */
  APIRequest(requestIn, callback) {
    let module = this;
    let request = JSON.parse(JSON.stringify(requestIn));

    if (!("api" in request)) {
      request.api = properties.defaultApi;
    }

    // Validate the year
    //Check for a year

    // Check year against possible years per API type and set default if invalid year is requested.
    if (request.api in availableDatasets) {
      let possibleYears = availableDatasets[request.api].sort().reverse();

      // ACS type query
      if (!("year" in request)) {
        request.year = possibleYears[0];
      } else if (availableDatasets[request.api].indexOf(request.year.toString()) == -1) {
        console.log("Warning: API " + request.api + " does not appear to support " + request.year);
        request.year = possibleYears[0];
      }
    }

    //Check for a level
    if (!("level" in request)) {
      request.level = properties.defaultApi;
    }

    //Check for sublevel flag
    if (!("sublevel" in request)) {
      request.sublevel = false;
    } else {
      //If we weren't given a boolean, convert the string to a boolean
      if (typeof request.sublevel !== typeof true) {
        if (request.sublevel == "true") {
          request.sublevel = true;
        } else {
          request.sublevel = false;
        }
      }
    }

    //Check for zip code
    if ("zip" in request) {
      //We have zip code - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {
        //We have the zip but no lat/lng - parse it and re-call
        this.ZIPtoLatLng(request.zip, function(response) {
          request.lat = response.lat;
          request.lng = response.lng;
          module.APIRequest(request, callback);
          return;
        });
      }
    }

    //Check for an address object
    if ("address" in request) {
      //We have address - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {
        //We have the address but no lat/lng - parse it and re-call
        module.addressToFIPS(request.address.street, request.address.city, request.address.state, function(response) {
          //Take the first matched address
          request.lat = response[0].coordinates.y;
          request.lng = response[0].coordinates.x;

          //Attach this "matched address" to the request address object so the user knows what we're using
          request.address.addressMatch = response[0];
          module.APIRequest(request, callback);
          return;
        });
      }
    }

    module.parseRequestStateCode(request);
    module.parseRequestLatLng(request);

    //Check if we have latitude/longitude values. If we do, call the geocoder and get the appropriate FIPS
    if ("lat" in request && "lng" in request && !("geocoded" in request)) {
      module.latLngToFIPS(request.lat, request.lng, function(geographies) {
        //TODO: Expand this to support multiple blocks
        let fipsData = geographies["2010 Census Blocks"][0];
        request["state"] = fipsData["STATE"];
        request["county"] = fipsData["COUNTY"];
        request["tract"] = fipsData["TRACT"];
        request["blockGroup"] = fipsData["BLKGRP"];
        request["place"] = ("Incorporated Places" in geographies) ? (geographies["Incorporated Places"].length > 0) ? geographies["Incorporated Places"][0]["PLACE"] : null : null;
        request["place_name"] = ("Incorporated Places" in geographies) ? (geographies["Incorporated Places"].length > 0) ? geographies["Incorporated Places"][0]["NAME"] : null : null;

        request.geocoded = true;
        module.APIRequest(request, callback);
      });

      //We return because the callback will fix our request into FIPs
      // and then call the request again
      return;
    }

    // Check to see if geography is complete as required by api
    if ("geographyValidForAPI" in request) {
      if (request.geographyValidForAPI == false) {
        callback({});

      } else if ("variables" in request) {
        //If we don't have a data object in the request, create one
        if (!("data" in request)) request.data = [];

        //TODO: We need to create an algorithm to determine which API to call for which non-aliased variable
        //      right now everything is in acs5 summary so it doesn't matter.
        this.summaryRequest(
            request,
            function(response) {
              if (request.sublevel) {
                //If sublevel is set to true, our "data" property will be an array of objects for each sublevel item.
                request.data = [];
                let currentVariable;
                let currentResponseItem;
                let currentDataObject;

                for (var i = 1; i < response.length; i++) {
                  currentDataObject = {};
                  currentResponseItem = response[i];
                  if (['sf1', 'sf3'].indexOf(request.api) && request.year.toString() == "1990") {
                    // Hardcoded rule for decennial survey of 1990
                    currentDataObject["name"] = currentResponseItem[$.inArray("ANPSADPI", response[0])];
                  } else {
                    // ACS survey & SF survey not 1990
                    currentDataObject["name"] = currentResponseItem[$.inArray("NAME", response[0])];
                  }

                  let stateIndex = $.inArray("state", response[0]);
                  let countyIndex = $.inArray("county", response[0]);
                  let tractIndex = $.inArray("tract", response[0]);
                  let blockGroupIndex = $.inArray("block group", response[0]);
                  let placeIndex = $.inArray("place", response[0]);

                  if (stateIndex >= 0) {
                    currentDataObject["state"] = currentResponseItem[stateIndex];
                  }

                  if (countyIndex >= 0) {
                    currentDataObject["county"] = currentResponseItem[countyIndex];
                  }

                  if (tractIndex >= 0) {
                    currentDataObject["tract"] = currentResponseItem[tractIndex];
                  }

                  if (blockGroupIndex >= 0) {
                    currentDataObject["blockGroup"] = currentResponseItem[blockGroupIndex];
                  }

                  if (placeIndex >= 0) {
                    currentDataObject["place"] = currentResponseItem[placeIndex];
                  }

                  for (var j = 0; j < request.variables.length; j++) {

                    currentVariable = request.variables[j];
                    let intermediatelet = currentResponseItem[$.inArray(CensusUtils.parseToValidVariable(currentVariable, request.api, request.year), response[0])];
                    if (intermediatelet) {
                      currentDataObject[currentVariable] = intermediatelet;
                    }

                    //variable is Normalizeable
                    if (intermediatelet && CensusUtils.isNormalizable(currentVariable) && CensusUtils.parseToValidVariable("population", request.api, request.year) !== false) {
                      currentDataObject[currentVariable + "_normalized"] = currentDataObject[currentVariable] / currentResponseItem[$.inArray(CensusUtils.parseToValidVariable("population", request.api, request.year), response[0])];
                    }

                  }

                  request.data.push(currentDataObject);
                }
              } else {
                //We don't have sublevel, so we just grab the single response
                let currentVariable;
                let currentDataObject = {};

                for (var i = 0; i < request.variables.length; i++) {
                  currentVariable = request.variables[i];
                  if (CensusUtils.parseToValidVariable(currentVariable, request.api, request.year) !== false) {
                    currentDataObject[currentVariable] = response[1][$.inArray(CensusUtils.parseToValidVariable(currentVariable, request.api, request.year), response[0])];
                  }

                  if (currentDataObject[currentVariable] && CensusUtils.isNormalizable(currentVariable) && CensusUtils.parseToValidVariable("population", request.api, request.year) !== false) {
                    currentDataObject[currentVariable + "_normalized"] = currentDataObject[currentVariable] / response[1][$.inArray(CensusUtils.parseToValidVariable("population", request.api, request.year), response[1])];
                  }

                  //Move it into an array for consistency
                  request.data = [];
                  request.data.push(currentDataObject);

                }
              }

              delete request.geocoded;
              callback(request);
            }
        );
      } else {
        //We have no variables remaining - use the callback on the request object
        callback(request);
      }
    } else {

      if ((request.level == "us" && !("geographyValidForAPI" in request) && !("state" in request)) || "containerGeometry" in request) {

        //Is the level the US?
        if (request.level == "us") {
          //Ok, let's just resubmit it with D.C. as the "state"
          request.state = "DC";
          module.APIRequest(request, callback);
        }

        //We have some container geometry but no specific location, let the supplemental requests handle the variables
        if ("containerGeometry" in request) {
          request.geographyValidForAPI = true;
          request.data = [];
          callback(request);
        }

      } else {
        module.validateRequestGeographyVariables(request, function(response) {
          module.APIRequest(response, callback);
        });
      }
    }
  }

  /**
   * Checks the geo-related parts of the request against the geography definition of the API being requested
   *
   * @param {object} requestIn
   * @param {function} callback
   */
  validateRequestGeographyVariables(requestIn, callback) {
    let module = this;
    let citysdk = this.citysdk;
    let request = JSON.parse(JSON.stringify(requestIn));
    let cacheKey = "apiGeography" + request.year.toString() + request.api.toString();

    // Check to see if this question is cached
    citysdk.getCachedData("census", "validateRequestGeographyvariables", cacheKey, function(cachedData) {
      if (cachedData != null) {
        // Use cached geography definition
        request.geographyValidForAPI = module.validateRequestGeographyVariablesProcess(request, cachedData);
        callback(request);

      } else {
        // Get geography definition
        let geographyURL = properties.defaultEndpoints.censusURL + request.year + "/" + request.api + "/geography.json";
        let geographyrequest = CitySdk.ajaxRequest(geographyURL);

        geographyrequest.done(function(response) {
          let geoDefinition = $.parseJSON(response);

          if (citysdk.allowCache == true) {
            citysdk.setCachedData("census", "validateRequestGeographyvariables", cacheKey, geoDefinition);
          }
          request.geographyValidForAPI = module.validateRequestGeographyVariablesProcess(request, geoDefinition);
          callback(request);
        });
      }
    });
  }

  /**
   * Compares the geoDefinition against the request.
   * Returns false if location variables required by the api are missing.
   *
   * @param {object} request
   * @param {function} geoDefinition
   */
  validateRequestGeographyVariablesProcess(request, geoDefinition) {
    let found = false;

    $.each(geoDefinition['fips'], function(index, value) {
      if (value.name === request.level) {
        // Possible level match found, check to see if there are requirements

        if ("requires" in value) {
          // If there are requirements check for each
          let potentialfound = true;

          $.each(value.requires, function(index, value) {
            if (!(value in request)) {
              // Requirement is missing, request does not match to a valid geo combination
              potentialfound = false;
            }
          });

          // If no requirements are missing, this is a match.
          if (potentialfound === true) {
            // level has required geographic inputs
            found = true;
          }

        } else {
          // No requirements needed
          found = true;
        }
      }
    });

    return found;
  }

  /**
   * Retrieves data and geographic shapes encoded as geoJSON.
   *
   * Example request.
   *
   * {
   *      "lat": latitude,
   *      "lng": longitude,
   *      "sublevel": <optional> true/false,
   *      "container": <optional> place/county/state/tract
   *      "level": place/county/state/blockGroup/tract
   *      "variables": []
   *      "containerGeometry": <optional> Must have sublevel true and container flags, this value should be ESRI json and
   *                          marks the boundaries of the query region. You can convery geojson to ESRI via
   *                          CensusModule.prototype.GEOtoESRI
   *
   * }
   *
   * @param {object} requestIn The JSON request
   * @param {function} callback The callback to take the response, which is geoJSON
   */
  GEORequest(requestIn, callback) {
    let module = this;

    //Reference dictionary of levels -> geocoder response variables
    let comparisonVariables = {
      "tract": "TRACT",
      "place": "PLACE",
      "county": "COUNTY",
      "blockGroup": "BLKGRP"
    };

    let request = JSON.parse(JSON.stringify(requestIn));
    //First - check if we have a data object in the request OR if we aren't requesting variables
    if ("data" in request || !("variables" in request)) {
      //We have a data object for the request (or there isn't any requested), now we can get the geoJSON for the area
      module.tigerwebRequest(request, function(response) {
        if (response === false) {
          // No data returned
          callback(false);
          return;
        }

        if (!("totals" in response)) {
          response.totals = {};
        }

        //If we have data, let's attach it to the geoJSON
        let matchedFeature;

        if ("data" in request) {
          let totals = response.totals;
          let features = response.features;
          let data = request.data;
          let variables = request.variables;

          for (var i = 0; i < features.length; i++) {
            matchedFeature = null;

            //TODO: We need to tidy this grep up a bit.
            matchedFeature = $.grep(data, function(e) {
              //Ensure we have a direct match for low level items by comparing the higher level items
              if (request.level === "blockGroup" || request.level == "tract") {
                return e[request.level] === features[i].properties[comparisonVariables[request.level]] &&
                    e["tract"] === features[i].properties[comparisonVariables["tract"]] &&
                    e["county"] === features[i].properties[comparisonVariables["county"]];

              } else {
                return e[request.level] === features[i].properties[comparisonVariables[request.level]];
              }
            });

            if (matchedFeature.length === 0) {
              //Sometimes cities span multiple counties. In this case, we sometimes miss data due to the
              //limited nature of the Census API's geography hierarchy. This will issue supplemental requests
              //to ensure we have data for all of our geojson entities
              let suppRequest = {
                "state": features[i].properties["STATE"],
                "tract": features[i].properties["TRACT"],
                "county": features[i].properties["COUNTY"],
                "blockGroup": features[i].properties["BLKGRP"],
                "place": features[i].properties["PLACE"],
                "level": request.level,
                "year": request.year,
                "api": request.api,
                "variables": variables,
                "featuresIndex": i
              };

              module.supplementalRequestsInFlight++;

              module.APIRequest(suppRequest, function(resp) {
                console.log(resp);
                module.supplementalRequestsInFlight--;

                for (var property in resp.data[0]) {
                  if (resp.data[0].hasOwnProperty(property)) {
                    features[resp.featuresIndex].properties[property] = resp.data[0][property];
                    if ($.inArray(property, variables) >= 0) totals[property] = Number(totals[property]) + (!isNaN(resp.data[0][property])) ? Number(resp.data[0][property]) : 0;
                  }
                }
              });

            } else if (matchedFeature.length === 1) {
              //We have matched the feature's tract to a data tract, move the data over
              matchedFeature = matchedFeature[0];

              for (var property in matchedFeature) {
                if (matchedFeature.hasOwnProperty(property)) {
                  features[i].properties[property] = matchedFeature[property];
                  if ($.inArray(property, variables) >= 0) totals[property] = Number(totals[property]) + (!isNaN(matchedFeature[property])) ? Number(matchedFeature[property]) : 0;
                }
              }

            } else {
              //This usually occurs when a low-level geography entity isn't uniquely identified
              //by the grep. We'll need to add more comparisons to the grep to clear this issue up.
              console.log("Multiple matched featues: ");
              console.log(features[i]);
              console.log(matchedFeature);
            }
          }
        }
        callback(response);
      });

    } else {
      //We do not have the requested variables - let's get them
      module.APIRequest(request, function(response) {
        module.GEORequest(response, callback);
      });
    }
  }

  /**
   * @deprecated Use {@link CensusUtils.isNormalizable} instead.
   *
   * @param alias
   * @returns {boolean}
   */
  isNormalizable(alias) {
    return CensusUtils.isNormalizable(alias);
  }

  /**
   * Checks to see if a string is in the aliases dictionary and returns the appropriate variable if so.
   * This function is depreciated and not recommended as it does not check to see if a particular alias
   * is valid for a particular api.
   * e.g. "income" will return "DP03_0064PE"
   *
   * If the string is not in the alias dictionary, it will return the same string back. This is useful for
   * parsing user input. (Either a user requests a variable in the alias dictionary OR a specific variable)
   *
   * @param {string} aliasOrVariable A string to parse into a variable string.
   *
   * @returns {string} Variable string
   */
  parseToVariable(aliasOrVariable) {
    return CensusUtils.parseToVariable(aliasOrVariable);
  }

  parseToValidVariable(aliasOrVariable, api, year) {
    return CensusUtils.parseToValidVariable(aliasOrVariable, api, year);
  }

  /**
   * Parses the state code in a request object, converting two letter state codes to lat/lng
   *
   * @param {object} request Object representing an api request
   *
   * @returns {object} returns the request Object with lat and lng populated
   */
  parseRequestStateCode(request) {
    return CensusUtils.parseRequestStateCode(request);
  }

  /**
   * Checks the request object for lat/lng latitude/longitude and x/y fields and moves them to
   * the appropriate locations for processing by the module
   *
   * @param {object} request Object representing an api request
   */
  parseRequestLatLng(request) {
    return CitySdk.parseRequestLatLng(request);
  }

  /**
   * Converts ESRI JSON to GeoJSON
   * This function has been moved to the CitySDK core. An alias remains here for legacy support.
   *
   * @param {string} esriJSON
   *
   * @returns {{type: string, features: Array}}
   */
  ESRItoGEO(esriJSON) {
    return CitySdk.ESRItoGEO(esriJSON);
  }

  /**
   * Converts geoJSON to ESRI JSON
   * This function has been moved to the CitySDK core. An alias remains here for legacy support.
   * @param {string} geoJSON
   * @returns {object}
   */
  GEOtoESRI(geoJSON) {
    return CitySdk.GEOtoESRI(geoJSON);
  }

  /**
   * Downloads an API's entire dictionary of variables from the Census
   * @param {string} inapi
   * @param {string} inyear
   * @param {function} callback
   *
   * @return {object}
   */
  getVariableDictionary(inapi, inyear, callback) {
    return CensusUtils.getVariableDictionary(inapi, inyear, callback, this.citysdk);
  }

  /**
   * @alias for legacy reasons
   */
  getACSVariableDictionary(inapi, inyear, callback) {
    return CensusUtils.getVariableDictionary(inapi, inyear, callback, this.citysdk);
  }
}