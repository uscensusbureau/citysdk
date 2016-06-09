import CitySdk from "../../core/citysdk.new";

import aliases from "../../resources/aliases.json";
import servers from "../../resources/servers.json";
import usBoundingBox from "../../resources/us-bounds.json";
import availableDatasets from "../../resources/available-datasets.json";
import requiredVariables from "../../resources/required-variables.json";

/**
 * @class
 */
export default class CensusModule {
  /**
   * @constructs {@link CensusModule}
   *
   * @param apikey
   */
  constructor(apikey) {
    this.aliases = aliases;
    this.servers = servers;
    this.usBoundingBox = usBoundingBox;
    this.availableDatasets = availableDatasets;
    this.requiredVariables = requiredVariables;
    
    this.stateCapitals = CitySdk.stateCapitalCoordinates;
    this.supplementalRequestsInFlight = 0;

    this.apikey = apikey;
    this.citysdk = new CitySdk();

    this.sfSummaryRequest = this.summaryRequest;
    this.acsSummaryRequest = this.summaryRequest;
    this.getACSVariableDictionary = this.getVariableDictionary;
  }

  parseToVariable(aliasOrVariable) {
    //If the requested string is an alias, return the appropriate variable from the dictionary
    if (aliasOrVariable in aliases) {
      return aliases[aliasOrVariable].variable;
    }

    //Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
  }

  parseToValidVariable(aliasOrVariable, api, year) {
    //If the requested string is an alias, return the appropriate variable from the dictionary
    if (aliasOrVariable in aliases) {
      if (api in aliases[aliasOrVariable]['api']
          && aliases[aliasOrVariable]['api'][api].indexOf(parseInt(year)) != -1) {

        // Alias found and is valid for selected API & year combination
        return aliases[aliasOrVariable].variable;

      } else {
        // Alias found but is NOT valid for selected API and year combination
        throw new Error("Invalid alias for selected API and year combination.");
      }
    }

    //Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
  }

  isNormalizable(alias) {
    return alias in aliases && "normalizable" in aliases[alias] && aliases[alias].normalizable;
  }

  parseRequestStateCode(request) {
    //This supports 2 letter state codes in a request
    if ("state" in request && isNaN(request.state)) {
      if (!("lat" in request) && !("lng" in request)) {
        request.lat = this.stateCapitals[request.state][0];
        request.lng = this.stateCapitals[request.state][1];

      } else {
        delete request.state;
      }
    }

    return request;
  }

  parseRequestLatLng(request) {
    return CitySdk.parseRequestLatLng(request);
  }

  esriToGeo(esriJson) {
    return CitySdk.esriToGeo(esriJson);
  }

  geoToEsri(geoJson) {
    return CitySdk.geoToEsri(geoJson);
  }

  getVariableDictionary(api, year) {
    let url = `${CensusModule.defaultEndpoints.acsVariableDictionaryURL}${year}/${api}/variables.json`;
    return CitySdk.ajaxRequest(url, false);
  }

  latLngToFips(lat, lng) {
    let url = `${CensusModule.defaultEndpoints.geoCoderUrl}coordinates`;
    url += `?x=${lng}&y=${lat}&benchmark=4&vintage=4&layers=8,12,28,86,84&format=jsonp`;

    return CitySdk.ajaxRequest(url, true);
  }

  addressToFips(street, city, state) {
    let url = `${CensusModule.defaultEndpoints.geoCoderUrl}address`;
    url += `?street=${street}&city=${city}&state=${state}&benchmark=4&vintage=4&layers=8,12,28,86,84&format=jsonp`;

    return CitySdk.ajaxRequest(url, true);
  }

  zipToLatLng(zip) {
    let url = `${CensusModule.defaultEndpoints.tigerwebUrl}tigerWMS_Current/MapServer/2/`;

    url += `query?where=ZCTA5%3D${zip}&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR`
        + "=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=CENTLAT%2CCENTLON&returnGeometry=false"
        + "&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields="
        + "&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion="
        + "&returnDistinctValues=false&f=json";

    return CitySdk.ajaxRequest(url, false);
  }

  summaryRequest(req) {
    let qualifiers = "for=";
    let cascade = false;

    if (req.sublevel) {
      let level = (req.level === "blockGroup") ? "block+group" : req.level;

      switch (req.container) {
        case "us":
          qualifiers += level + ":*";
          break;
        case "place":
        case "state":
          qualifiers += level + `:*&in=state:${req.state}`;
          if (req.level == "blockGroup") {
            qualifiers += `+county:${req.county}`;
          }
          break;
        case "county":
          qualifiers += level + `:*&in=county:${req.county}+state:${req.state}`;
          break;
        case "tract":
          qualifiers += level + `:*&in=tract:${req.tract}+county:${req.county}+state:${req.state}`;
          break;
      }
    }

    // Only do this if the previous switch had no effect
    // (i.e. no contianer)
    if (qualifiers == "for=") {
      switch (req.level) {
        case "us":
          // If sublevel, add the appropriate for and attach the in
          if (req.sublevel) {
            qualifiers += "state:*";
            cascade = true;
          } else {
            qualifiers += "us:1";
          }

          break;
        case "blockGroup":
          if (req.sublevel) {
            // Can't do this. No levels beneath. We'll set the sublevel to false here
            req.sublevel = false;
          }

          qualifiers += `block+Group:${req.blockGroup}`;

          if (!cascade) {
            qualifiers += "&in=";
            cascade = true;
          }

        case "tract":
          // If sublevel, add the appropriate for and attach the in
          // We also check the cascade tag so we don't do this twice.
          if (req.sublevel && !cascade) {
            qualifiers += "block+Group:*&in=";
            cascade = true;
          }

          qualifiers += `tract:${req.tract}`;

          if (!cascade) {
            qualifiers += "&in=";
            cascade = true;
          } else {
            qualifiers += "+";
          }

        case "county":
          // If sublevel, add the appropriate for and attach the in
          // We also check the cascade tag so we don't do this twice.
          if (req.sublevel && !cascade) {
            qualifiers += "tract:*&in=";
            cascade = true;
          }

          qualifiers += `county:${req.county}`;
          if (!cascade) {
            qualifiers += "&in=";
            cascade = true;
          } else {
            qualifiers += "+";
          }

        case "place":
          // If sublevel, add the appropriate for and attach the in
          // Check for cascade so we don't do this twice
          if (req.sublevel && !cascade) {
            qualifiers += "place:*&in=";
            cascade = true;

          } else if (!cascade) {
            //We only use place in the for, for the moment
            qualifiers += `place:${req.place}&in=`;
            cascade = true;
          }

        case "state":
          // If sublevel, add the appropriate for and attach the in
          // We also check the cascade tag so we don't do this twice.
          if (req.sublevel && !cascade) {
            qualifiers += "county:*&in=";
            cascade = true;
          }

          qualifiers += `state:${req.state}`;
          break;
      }
    }

    for (var i = 0; i < req.variables.length; i++) {
      if (this.isNormalizable(req.variables[i])) {
        // add acs population variable
        if (req.variables.indexOf("population") < 0) {
          //We have a variable that is normalizable, but no population in the request.
          //Grab the population
          req.variables.push("population");
        }

        //We have normalizable variables AND a request for population, we can break the for loop now
        break;
      }
    }

    // Convert the aliased variables
    for (var i = 0; i < req.variables.length; i++) {
      var variableIntermediate = this.parseToValidVariable(req.variables[i], req.api, req.year);
      if (variableIntermediate) {
        req.variables[i] = variableIntermediate;
      }
    }
    
    // Add the Required Variables
    if (requiredVariables.hasOwnProperty(req.api) && requiredVariables[req.api].hasOwnProperty(req.year)) {
      for (var i = 0; i < requiredVariables[req.api][req.year].length; i++) {
        if (req.variables.indexOf(requiredVariables[req.api][req.year][i]) == -1) {
          req.variables.unshift(requiredVariables[req.api][req.year][i]);
        }
      }
    }

    // Add the variables to request string
    let variableString = req.variables.join(",");

    // URL for ACS5 request (summary file)
    var url = CensusModule.defaultEndpoints.censusUrl;
    url += `${req.year}/${req.api}?get=${variableString}&${qualifiers}&key=${this.apikey}`;

    return CitySdk.ajaxRequest(url, false);
  }

  validateRequestGeographyVariables(request, callback) {
    // Get geography definition
    let module = this;
    let url = CensusModule.defaultEndpoints.censusUrl + request.year + "/" + request.api + "/geography.json";

    CitySdk.ajaxRequest(url).then((response) => {
      request.geographyValidForAPI = module.validateRequestGeographyVariablesProcess(request, response);
      callback(request);
      return;
    });
  }

  validateRequestGeographyVariablesProcess(request, geoDefinition) {
    let found = false;

    for (var value of geoDefinition.fips) {
      if (value.name === request.level) {
        // Possible level match found, check to see if there are requirements
        if ("requires" in value) {
          // If there are requirements check for each
          var potentialfound = true;

          for (var required of value.requires) {
            if (!(required in request)) {
              // Requirement is missing, request does not match to a valid geo combination
              potentialfound = false;
            }
          }

          // If no requirements are missing, this is a match.
          if (potentialfound === true) {
            // level has required geographic inputs
            found = true;
          }
        } else {
          // No requirements needed
          found = true;
        }

        break;
      }
    }

    return found;
  }

  geoRequest(request, callback) {
    let module = this;

    // Reference dictionary of levels -> geocoder response variables
    let comparisonVariables = {
      "tract": "TRACT",
      "place": "PLACE",
      "county": "COUNTY",
      "blockGroup": "BLKGRP"
    };

    if ("data" in request || !("variables" in request)) {
      // We have a data object for the request (or there isn't any requested),
      // now we can get the geoJSON for the area
      module.tigerWebRequest(request, function(response) {
        if (!response) {
          // No data returned
          callback(false);
          return;
        }

        if (!("totals" in response)) {
          response.totals = {};
        }

        //If we have data, let's attach it to the geoJSON
        if ("data" in request) {
          let totals = response.totals;
          let features = response.features;
          let data = request.data;
          let variables = request.variables;
          let matchedFeature;

          for (let i = 0; i < features.length; i++) {
            //TODO: We need to tidy this grep up a bit.
            matchedFeature = data.filter((e) => {
              // Ensure we have a direct match for low level items by comparing the higher level items
              if (request.level == "blockGroup" || request.level == "tract") {
                return e[request.level] == features[i].properties[comparisonVariables[request.level]] &&
                    e["tract"] == features[i].properties[comparisonVariables["tract"]] &&
                    e["county"] == features[i].properties[comparisonVariables["county"]];

              } else {
                return e[request.level] == features[i].properties[comparisonVariables[request.level]];
              }
            });

            if (matchedFeature.length == 0) {
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

              module.apiRequest(suppRequest, function(resp) {
                console.log(resp);
                module.supplementalRequestsInFlight--;

                for (let property in resp.data[0]) {
                  if (resp.data[0].hasOwnProperty(property)) {
                    features[resp.featuresIndex].properties[property] = resp.data[0][property];

                    if (variables.indexOf(property) !== -1) {
                      totals[property] = Number(totals[property]) >= 0 ? Number(resp.data[0][property]) : 0;
                    }
                  }
                }
              });

            } else if (matchedFeature.length == 1) {
              //We have matched the feature's tract to a data tract, move the data over
              matchedFeature = matchedFeature[0];

              for (let property in matchedFeature) {
                if (matchedFeature.hasOwnProperty(property)) {
                  features[i].properties[property] = matchedFeature[property];

                  if (variables.indexOf(property) !== -1) {
                    totals[property] = Number(totals[property]) >= 0 ? Number(matchedFeature[property]) : 0;
                  }
                }
              }
            } else {
              // This usually occurs when a low-level geography entity isn't uniquely identified
              // by the grep. We'll need to add more comparisons to the grep to clear this issue up.
              console.log("Multiple matched features: ");
              console.log(features[i]);
              console.log(matchedFeature);
            }
          }
        }
        callback(response);
      });
    } else {
      //We do not have the requested variables - let's get them
      module.apiRequest(request, function(response) {
        module.geoRequest(response, callback);
      });
    }
  }

  apiRequest(request, callback) {
    let module = this;

    if (!("api" in request)) {
      request.api = CensusModule.defaultApi
    }

    // Check year against possible years per API type and set default if invalid year is requested.
    if (request.api in availableDatasets) {
      var possibleYears = availableDatasets[request.api].sort().reverse();

      // ACS type query
      if (!("year" in request)) {
        request.year = possibleYears[0];

      } else if (availableDatasets[request.api].indexOf(request.year.toString()) === -1) {
        console.log("Warning: API " + request.api + " does not appear to support " + request.year);
        request.year = possibleYears[0];
      }
    }

    //Check for a level
    if (!("level" in request)) {
      request.level = CensusModule.defaultLevel;
    }

    // Check for sublevel flag
    if (!("sublevel" in request)) {
      request.sublevel = false;
    } else {
      // If we weren't given a boolean, convert the string to a boolean
      if (typeof request.sublevel !== typeof true) {
        request.sublevel = request.sublevel === "true";
      }
    }

    //Check for zip code
    if ("zip" in request) {

      //We have zip code - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {

        //We have the zip but no lat/lng - parse it and re-call
        module.zipToLatLng(request.zip).then((response) => {
          response = CitySdk.parseResponseLatLng(response);

          request.lat = response.lat;
          request.lng = response.lng;

          this.apiRequest(request, callback);
          return;
        });
      }
    }

    //Check for an address object
    if ("address" in request) {

      //We have address - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {
        let street = request.address.street;
        let city = request.address.city;
        let state = request.address.state;

        // We have the address but no lat/lng - parse it and re-call
        module.addressToFips(street, city, state).then((response) => {
          var matchedAddress = response.result.addressMatches[0];

          // Take the first matched address
          request.lat = matchedAddress.coordinates.y;
          request.lng = matchedAddress.coordinates.x;

          // Attach this "matched address" to the request address object
          // so the user knows what we're using
          request.address.addressMatch = response[0];

          module.apiRequest(request, callback);
          return;
        });
      }
    }

    this.parseRequestStateCode(request);
    this.parseRequestLatLng(request);

    // Check if we have latitude/longitude values.
    // If we do, call the geocoder and get the appropriate FIPS
    if ("lat" in request && "lng" in request && !("geocoded" in request)) {
      this.latLngToFips(request.lat, request.lng).then((response) => {
        //TODO: Expand this to support multiple blocks
        let geographies = response.result.geographies;
        let fipsData = geographies["2010 Census Blocks"][0];

        request["state"] = fipsData["STATE"];
        request["county"] = fipsData["COUNTY"];
        request["tract"] = fipsData["TRACT"];
        request["blockGroup"] = fipsData["BLKGRP"];
        
        if ("Incorporated Places" in geographies && geographies["Incorporated Places"].length) {
          request["place"] = geographies["Incorporated Places"][0]["PLACE"];
          request["place_name"] = geographies["Incorporated Places"][0]["NAME"];
        } else {
          request["place"] = null;
          request["place_name"] = null;
        }

        request.geocoded = true;
        module.apiRequest(request, callback);
      });

      // We return because the callback will fix our request into FIPs,
      // and then call the request again
      return;
    }

    // Check to see if geography is complete as required by api
    if ("geographyValidForAPI" in request) {
      if (request.geographyValidForAPI == false) {
        callback({});
        return;

      } else if ("variables" in request) {
        //If we don't have a data object in the request, create one
        if (!("data" in request)) request.data = [];

        // TODO: We need to create an algorithm to determine which API
        // to call for which non-aliased variable.
        // Right now everything is in acs5 summary so it doesn't matter.
        this.summaryRequest(request).then((response) => {
          if (request.sublevel) {
            // If sublevel is set to true, our "data" property
            // will be an array of objects for each sublevel item.
            request.data = [];

            let currentVariable;
            let currentResponseItem;
            let currentDataObject;

            for (let i = 1; i < response.length; i++) {
              currentDataObject = {};
              currentResponseItem = response[i];

              if (['sf1', 'sf3'].indexOf(request.api) && request.year.toString() == "1990") {
                // Hardcoded rule for decennial survey of 1990
                currentDataObject["name"] = currentResponseItem[response[0].indexOf("ANPSADPI")];
              } else {
                // ACS survey & SF survey not 1990
                currentDataObject["name"] = currentResponseItem[response[0].indexOf("NAME")];
              }

              let stateIndex = response[0].indexOf("state");
              let countyIndex = response[0].indexOf("county");
              let tractIndex = response[0].indexOf("tract");
              let blockGroupIndex = response[0].indexOf("block group");
              let placeIndex = response[0].indexOf("place");

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

              for (let j = 0; j < request.variables.length; j++) {
                currentVariable = request.variables[j];

                let validVariable = module.parseToValidVariable(currentVariable, request.api, request.year);
                let index = response[0].indexOf(validVariable);
                let intermediateVar = currentResponseItem[index];

                if (intermediateVar) {
                  currentDataObject[currentVariable] = intermediateVar;
                }

                // Variable is Normalizeable
                if (intermediateVar && module.isNormalizable(currentVariable)
                    && module.parseToValidVariable("population", request.api, request.year)) {

                  let validVariable = module.parseToValidVariable("population", request.api, request.year);
                  let index = response[0].indexOf(validVariable);
                  let property = currentVariable + "_normalized";

                  currentDataObject[property] = currentDataObject[currentVariable] / currentResponseItem[index];
                }
              }

              request.data.push(currentDataObject);
            }
          } else {
            // We don't have sublevel, so we just grab the single response
            let currentVariable;
            let currentDataObject = {};

            for (let i = 0; i < request.variables.length; i++) {
              currentVariable = request.variables[i];

              if (module.parseToValidVariable(currentVariable, request.api, request.year)) {
                let validVariable = module.parseToValidVariable(currentVariable, request.api, request.year);
                let index = response[0].indexOf(validVariable);

                currentDataObject[currentVariable] = response[1][index];
              }

              if (currentDataObject[currentVariable] && module.isNormalizable(currentVariable)
                  && module.parseToValidVariable("population", request.api, request.year)) {

                let validVariable = module.parseToValidVariable("population", request.api, request.year);
                let index = response[1].indexOf(validVariable);
                let property = currentVariable + "_normalized";

                currentDataObject[property] = currentDataObject[currentVariable] / response[1][index];
              }

              // Move it into an array for consistency
              request.data = [];
              request.data.push(currentDataObject);
            }
          }

          delete request.geocoded;
          callback(request);
        });

      } else {
        // We have no variables remaining - use the callback on the request object
        callback(request);
        return;
      }
    } else {
      if ((request.level == "us" && !("geographyValidForAPI" in request) && !("state" in request))
          || "containerGeometry" in request) {

        //Is the level the US?
        if (request.level == "us") {
          //Ok, let's just resubmit it with D.C. as the "state"
          request.state = "DC";
          module.apiRequest(request, callback);
        }

        // We have some container geometry but no specific location,
        // let the supplemental requests handle the variables
        if ("containerGeometry" in request) {
          request.geographyValidForAPI = true;

          request.data = [];
          callback(request);
        }

        return;

      } else {
        module.validateRequestGeographyVariables(request, function(response) {
          module.apiRequest(response, callback);
        });
      }
    }
  }

  tigerWebRequest(request, callback) {
    // This will ensure our coordinates come out properly
    let spatialReferenceCode = 4326;
    let server = "current";

    if ("mapServer" in request) {
      server = request.mapServer;
    } else {
      request.mapServer = "current";
    }

    //Dictionary of map server codes
    let mapServers = servers[server].mapServers;

    this.parseRequestStateCode(request);

    //Check for zip code
    if ("zip" in request) {
      //We have zip code - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {
        //We have the zip but no lat/lng - parse it and re-call
        this.zipToLatLng(request.zip).then((response) => {
          response = CitySdk.parseResponseLatLng(response);

          request.lat = response.lat;
          request.lng = response.lng;

          this.tigerWebRequest(request, callback);
          return;
        });
      }
    }

    // Check for an address object
    if ("address" in request) {

      //We have address - but do we have lat/lng?
      if (!("lat" in request) || !("lng" in request)) {
        let street = request.address.street;
        let city = request.address.city;
        let state = request.address.state;

        //We have the address but no lat/lng - parse it and re-call
        this.addressToFips(street, city, state).then((response) => {
          //Take the first matched address
          request.lat = response[0].coordinates.y;
          request.lng = response[0].coordinates.x;

          // Attach this "matched address" to the request address
          // object so the user knows what we're using
          request.address.addressMatch = response[0];

          this.tigerWebRequest(request, callback);
          return;
        });
      }
    }

    this.parseRequestLatLng(request);

    let mapserverPattern = "{mapserver}";
    let tigerRequest = {
      f: "json",
      where: "",
      outFields: "*",
      outSR: spatialReferenceCode,
      inSR: spatialReferenceCode
    };

    let tigerURL = servers[server].url;

    if ("container" in request && "sublevel" in request) {
      if (!request.sublevel) {
        // They submitted a sublevel flag but it's false...
        // remove the unnecessary flags and re-request
        delete request.sublevel;
        delete request.container;

        this.tigerWebRequest(request, callback);
        return;
      }

      if (!("containerGeometry" in request)) {
        // We have a sublevel request with a container.
        // We need to grab the container's geography and return it
        tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.container]);
        tigerRequest.geometry = request.lng + "," + request.lat;
        tigerRequest.geometryType = "esriGeometryPoint";
        tigerRequest.spatialRel = "esriSpatialRelIntersects";

        CitySdk.postRequest(tigerURL, tigerRequest).then((json) => {
          let features = json.features;

          // Grab our container ESRI geography, attach it to our request,
          // and call this function again.
          if (request.container == "us") {
            request.containerGeometry = this.geoToEsri(usBoundingBox)[0].geometry;
          } else {
            request.containerGeometry = features[0].geometry;
          }

          this.tigerWebRequest(request, callback);
        });

        return;

      } else {
        // We have a sublevel request with a container,
        // AND we've already grabbed the container's ESRI json
        tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
        tigerRequest.geometry = JSON.stringify(request.containerGeometry);
        tigerRequest.geometryType = "esriGeometryPolygon";

        tigerRequest.spatialRel = (request.container == "place" || request.container == "geometry")
            ? "esriSpatialRelIntersects"
            : "esriSpatialRelContains";

        delete request.containerGeometry;

        CitySdk.postRequest(tigerURL, tigerRequest).then((response) => {
          callback(this.esriToGeo(response));
        });
      }

    } else if ("sublevel" in request) {
      if (!request.sublevel) {
        // They submitted a sublevel flag but it's false...
        // remove the unnecessary flags and re-request
        delete request.sublevel;
        delete request.container;

        this.tigerWebRequest(request, callback);
        return;
      }

      // Sublevel, no container
      // Make the container equal to the level, and the sublevel
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

      this.tigerWebRequest(request, callback);
      return;

    } else {
      // We have a sublevel request with a container.
      // We need to grab the container's geography and return it
      tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
      tigerRequest.geometry = request.lng + "," + request.lat;
      tigerRequest.geometryType = "esriGeometryPoint";
      tigerRequest.spatialRel = "esriSpatialRelIntersects";

      CitySdk.postRequest(tigerURL, tigerRequest).then((response) => {
        callback(this.esriToGeo(response));
      });
    }
  }
}

CensusModule.version = "0.0.1";
CensusModule.defaultApi = "acs5";
CensusModule.defaultLevel = "blockGroup";

CensusModule.defaultEndpoints = {
  acsVariableDictionaryURL: "https://api.census.gov/data/",
  geoCoderUrl: "https://geocoding.geo.census.gov/geocoder/geographies/",
  tigerwebUrl: "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/",
  censusUrl: "https://api.census.gov/data/"
};