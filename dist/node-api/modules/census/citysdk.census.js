"use strict";
var citysdk_1 = require("../../core/citysdk");
var aliases = require("../../resources/aliases.json");
var servers = require("../../resources/servers.json");
var usBoundingBox = require("../../resources/us-bounds.json");
var availableDatasets = require("../../resources/available-datasets.json");
var requiredVariables = require("../../resources/required-variables.json");
/**
 * @class
 */
var CensusModule = (function () {
    /**
     * @constructs {@link CensusModule}
     *
     * @param apikey
     */
    function CensusModule(apikey) {
        this.stateCapitals = citysdk_1.default.stateCapitalCoordinates;
        this.supplementalRequestsInFlight = 0;
        this.aliases = aliases;
        this.servers = servers;
        this.usBoundingBox = usBoundingBox;
        this.availableDatasets = availableDatasets;
        this.requiredVariables = requiredVariables;
        this.apikey = apikey;
        this.citysdk = new citysdk_1.default();
        this.sfSummaryRequest = this.summaryRequest;
        this.acsSummaryRequest = this.summaryRequest;
        this.getACSVariableDictionary = this.getVariableDictionary;
    }
    CensusModule.prototype.parseToVariable = function (aliasOrVariable) {
        //If the requested string is an alias, return the appropriate variable from the dictionary
        if (aliasOrVariable in aliases) {
            return aliases[aliasOrVariable].variable;
        }
        //Otherwise, this is either already a variable name or is unsupported
        return aliasOrVariable;
    };
    CensusModule.prototype.parseToValidVariable = function (aliasOrVariable, api, year) {
        //If the requested string is an alias, return the appropriate variable from the dictionary
        if (aliasOrVariable in aliases) {
            if (api in aliases[aliasOrVariable]['api']
                && aliases[aliasOrVariable]['api'][api].indexOf(parseInt(year)) != -1) {
                // Alias found and is valid for selected API & year combination
                return aliases[aliasOrVariable].variable;
            }
            else {
                // Alias found but is NOT valid for selected API and year combination
                throw new Error("Invalid alias for selected API and year combination.");
            }
        }
        //Otherwise, this is either already a variable name or is unsupported
        return aliasOrVariable;
    };
    CensusModule.prototype.isNormalizable = function (alias) {
        return alias in aliases && "normalizable" in aliases[alias] && aliases[alias].normalizable;
    };
    CensusModule.prototype.parseRequestStateCode = function (request) {
        //This supports 2 letter state codes in a request
        if ("state" in request && isNaN(request.state)) {
            if (!("lat" in request) && !("lng" in request)) {
                request.lat = this.stateCapitals[request.state][0];
                request.lng = this.stateCapitals[request.state][1];
            }
            else {
                delete request.state;
            }
        }
        return request;
    };
    CensusModule.prototype.parseRequestLatLng = function (request) {
        return this.citysdk.parseRequestLatLng(request);
    };
    CensusModule.prototype.esriToGeo = function (esriJson) {
        return this.citysdk.esriToGeo(esriJson);
    };
    CensusModule.prototype.geoToEsri = function (geoJson) {
        return this.citysdk.geoToEsri(geoJson);
    };
    CensusModule.prototype.getVariableDictionary = function (api, year) {
        var url = "" + CensusModule.defaultEndpoints.acsVariableDictionaryURL + year + "/" + api + "/variables.json";
        return this.citysdk.get(url);
    };
    CensusModule.prototype.latLngToFips = function (lat, lng) {
        var url = CensusModule.defaultEndpoints.geoCoderUrl + "coordinates";
        url += "?x=" + lng + "&y=" + lat + "&benchmark=4&vintage=4&layers=8,12,28,86,84&format=json";
        return this.citysdk.get(url);
    };
    CensusModule.prototype.addressToFips = function (street, city, state) {
        var url = CensusModule.defaultEndpoints.geoCoderUrl + "address";
        url += "?street=" + street + "&city=" + city + "&state=" + state + "&benchmark=4&vintage=4&layers=8,12,28,86,84&format=json";
        return this.citysdk.get(url);
    };
    CensusModule.prototype.zipToLatLng = function (zip) {
        var url = CensusModule.defaultEndpoints.tigerwebUrl + "tigerWMS_Current/MapServer/2/";
        url += ("query?where=ZCTA5%3D" + zip + "&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR")
            + "=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=CENTLAT%2CCENTLON&returnGeometry=false"
            + "&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields="
            + "&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion="
            + "&returnDistinctValues=false&f=json";
        return this.citysdk.get(url);
    };
    CensusModule.prototype.summaryRequest = function (req) {
        var qualifiers = "for=";
        var cascade = false;
        if (req.sublevel) {
            var level = (req.level === "blockGroup") ? "block+group" : req.level;
            switch (req.container) {
                case "us":
                    qualifiers += level + ":*";
                    break;
                case "place":
                case "state":
                    qualifiers += level + (":*&in=state:" + req.state);
                    if (req.level == "blockGroup") {
                        qualifiers += "+county:" + req.county;
                    }
                    break;
                case "county":
                    qualifiers += level + (":*&in=county:" + req.county + "+state:" + req.state);
                    break;
                case "tract":
                    qualifiers += level + (":*&in=tract:" + req.tract + "+county:" + req.county + "+state:" + req.state);
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
                    }
                    else {
                        qualifiers += "us:1";
                    }
                    break;
                case "blockGroup":
                    if (req.sublevel) {
                        // Can't do this. No levels beneath. We'll set the sublevel to false here
                        req.sublevel = false;
                    }
                    qualifiers += "block+Group:" + req.blockGroup;
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
                    qualifiers += "tract:" + req.tract;
                    if (!cascade) {
                        qualifiers += "&in=";
                        cascade = true;
                    }
                    else {
                        qualifiers += "+";
                    }
                case "county":
                    // If sublevel, add the appropriate for and attach the in
                    // We also check the cascade tag so we don't do this twice.
                    if (req.sublevel && !cascade) {
                        qualifiers += "tract:*&in=";
                        cascade = true;
                    }
                    qualifiers += "county:" + req.county;
                    if (!cascade) {
                        qualifiers += "&in=";
                        cascade = true;
                    }
                    else {
                        qualifiers += "+";
                    }
                case "place":
                    // If sublevel, add the appropriate for and attach the in
                    // Check for cascade so we don't do this twice
                    if (req.sublevel && !cascade) {
                        qualifiers += "place:*&in=";
                        cascade = true;
                    }
                    else if (!cascade) {
                        //We only use place in the for, for the moment
                        qualifiers += "place:" + req.place + "&in=";
                        cascade = true;
                    }
                case "state":
                    // If sublevel, add the appropriate for and attach the in
                    // We also check the cascade tag so we don't do this twice.
                    if (req.sublevel && !cascade) {
                        qualifiers += "county:*&in=";
                        cascade = true;
                    }
                    qualifiers += "state:" + req.state;
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
        var variableString = req.variables.join(",");
        // URL for ACS5 request (summary file)
        var url = CensusModule.defaultEndpoints.censusUrl;
        url += req.year + "/" + req.api + "?get=" + variableString + "&" + qualifiers + "&key=" + this.apikey;
        return this.citysdk.get(url);
    };
    CensusModule.prototype.validateRequestGeographyVariables = function (request, callback) {
        // Get geography definition
        var module = this;
        var url = CensusModule.defaultEndpoints.censusUrl + request.year + "/" + request.api + "/geography.json";
        this.citysdk.get(url).then(function (response) {
            request.geographyValidForAPI = module.validateRequestGeographyVariablesProcess(request, response);
            callback(request);
            return;
        });
    };
    CensusModule.prototype.validateRequestGeographyVariablesProcess = function (request, geoDefinition) {
        var found = false;
        for (var _i = 0, _a = geoDefinition.fips; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.name === request.level) {
                // Possible level match found, check to see if there are requirements
                if ("requires" in value) {
                    // If there are requirements check for each
                    var potentialfound = true;
                    for (var _b = 0, _c = value.requires; _b < _c.length; _b++) {
                        var required = _c[_b];
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
                }
                else {
                    // No requirements needed
                    found = true;
                }
                break;
            }
        }
        return found;
    };
    CensusModule.prototype.geoRequest = function (request, callback) {
        var module = this;
        // Reference dictionary of levels -> geocoder response variables
        var comparisonVariables = {
            "tract": "TRACT",
            "place": "PLACE",
            "county": "COUNTY",
            "blockGroup": "BLKGRP"
        };
        if ("data" in request || !("variables" in request)) {
            // We have a data object for the request (or there isn't any requested),
            // now we can get the geoJSON for the area
            module.tigerWebRequest(request, function (response) {
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
                    var totals_1 = response.totals;
                    var features_1 = response.features;
                    var data = request.data;
                    var variables_1 = request.variables;
                    var matchedFeature = void 0;
                    var _loop_1 = function(i) {
                        //TODO: We need to tidy this grep up a bit.
                        matchedFeature = data.filter(function (e) {
                            // Ensure we have a direct match for low level items by comparing the higher level items
                            if (request.level == "blockGroup" || request.level == "tract") {
                                return e[request.level] == features_1[i].properties[comparisonVariables[request.level]] &&
                                    e["tract"] == features_1[i].properties[comparisonVariables["tract"]] &&
                                    e["county"] == features_1[i].properties[comparisonVariables["county"]];
                            }
                            else {
                                return e[request.level] == features_1[i].properties[comparisonVariables[request.level]];
                            }
                        });
                        if (matchedFeature.length == 0) {
                            //Sometimes cities span multiple counties. In this case, we sometimes miss data due to the
                            //limited nature of the Census API's geography hierarchy. This will issue supplemental requests
                            //to ensure we have data for all of our geojson entities
                            var suppRequest = {
                                "state": features_1[i].properties["STATE"],
                                "tract": features_1[i].properties["TRACT"],
                                "county": features_1[i].properties["COUNTY"],
                                "blockGroup": features_1[i].properties["BLKGRP"],
                                "place": features_1[i].properties["PLACE"],
                                "level": request.level,
                                "year": request.year,
                                "api": request.api,
                                "variables": variables_1,
                                "featuresIndex": i
                            };
                            module.supplementalRequestsInFlight++;
                            module.apiRequest(suppRequest, function (resp) {
                                console.log(resp);
                                module.supplementalRequestsInFlight--;
                                for (var property in resp.data[0]) {
                                    if (resp.data[0].hasOwnProperty(property)) {
                                        features_1[resp.featuresIndex].properties[property] = resp.data[0][property];
                                        if (variables_1.indexOf(property) !== -1) {
                                            totals_1[property] = Number(totals_1[property]) >= 0 ? Number(resp.data[0][property]) : 0;
                                        }
                                    }
                                }
                            });
                        }
                        else if (matchedFeature.length == 1) {
                            //We have matched the feature's tract to a data tract, move the data over
                            matchedFeature = matchedFeature[0];
                            for (var property in matchedFeature) {
                                if (matchedFeature.hasOwnProperty(property)) {
                                    features_1[i].properties[property] = matchedFeature[property];
                                    if (variables_1.indexOf(property) !== -1) {
                                        totals_1[property] = Number(totals_1[property]) >= 0 ? Number(matchedFeature[property]) : 0;
                                    }
                                }
                            }
                        }
                        else {
                            // This usually occurs when a low-level geography entity isn't uniquely identified
                            // by the grep. We'll need to add more comparisons to the grep to clear this issue up.
                            console.log("Multiple matched features: ");
                            console.log(features_1[i]);
                            console.log(matchedFeature);
                        }
                    };
                    for (var i = 0; i < features_1.length; i++) {
                        _loop_1(i);
                    }
                }
                callback(response);
            });
        }
        else {
            //We do not have the requested variables - let's get them
            module.apiRequest(request, function (response) {
                module.geoRequest(response, callback);
            });
        }
    };
    CensusModule.prototype.apiRequest = function (request, callback) {
        var _this = this;
        var module = this;
        if (!("api" in request)) {
            request.api = CensusModule.defaultApi;
        }
        // Check year against possible years per API type and set default if invalid year is requested.
        if (request.api in availableDatasets) {
            var possibleYears = availableDatasets[request.api].sort().reverse();
            // ACS type query
            if (!("year" in request)) {
                request.year = possibleYears[0];
            }
            else if (availableDatasets[request.api].indexOf(request.year.toString()) === -1) {
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
        }
        else {
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
                module.zipToLatLng(request.zip).then(function (response) {
                    response = _this.citysdk.parseResponseLatLng(response);
                    request.lat = response.lat;
                    request.lng = response.lng;
                    _this.apiRequest(request, callback);
                    return;
                });
            }
        }
        //Check for an address object
        if ("address" in request) {
            //We have address - but do we have lat/lng?
            if (!("lat" in request) || !("lng" in request)) {
                var street = request.address.street;
                var city = request.address.city;
                var state = request.address.state;
                // We have the address but no lat/lng - parse it and re-call
                module.addressToFips(street, city, state).then(function (response) {
                    // Take the first matched address
                    request.lat = response.result.addressMatches[0].coordinates.y;
                    request.lng = response.result.addressMatches[0].coordinates.x;
                    // Attach this "matched address" to the request address object
                    // so the user knows what we're using
                    request.address.addressMatch = response.result.addressMatches[0];
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
            this.latLngToFips(request.lat, request.lng).then(function (response) {
                //TODO: Expand this to support multiple blocks
                var geographies = response.result.geographies;
                var fipsData = geographies["2010 Census Blocks"][0];
                if (fipsData) {
                    request["state"] = fipsData["STATE"];
                    request["county"] = fipsData["COUNTY"];
                    request["tract"] = fipsData["TRACT"];
                    request["blockGroup"] = fipsData["BLKGRP"];
                    if ("Incorporated Places" in geographies && geographies["Incorporated Places"].length) {
                        request["place"] = geographies["Incorporated Places"][0]["PLACE"];
                        request["place_name"] = geographies["Incorporated Places"][0]["NAME"];
                    }
                    else {
                        request["place"] = null;
                        request["place_name"] = null;
                    }
                    request.geocoded = true;
                    module.apiRequest(request, callback);
                }
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
            }
            else if ("variables" in request) {
                //If we don't have a data object in the request, create one
                if (!("data" in request))
                    request.data = [];
                // TODO: We need to create an algorithm to determine which API
                // to call for which non-aliased variable.
                // Right now everything is in acs5 summary so it doesn't matter.
                this.summaryRequest(request).then(function (response) {
                    if (request.sublevel) {
                        // If sublevel is set to true, our "data" property
                        // will be an array of objects for each sublevel item.
                        request.data = [];
                        var currentVariable = void 0;
                        var currentResponseItem = void 0;
                        var currentDataObject = void 0;
                        for (var i = 1; i < response.length; i++) {
                            currentDataObject = {};
                            currentResponseItem = response[i];
                            if (['sf1', 'sf3'].indexOf(request.api) && request.year.toString() == "1990") {
                                // Hardcoded rule for decennial survey of 1990
                                currentDataObject["name"] = currentResponseItem[response[0].indexOf("ANPSADPI")];
                            }
                            else {
                                // ACS survey & SF survey not 1990
                                currentDataObject["name"] = currentResponseItem[response[0].indexOf("NAME")];
                            }
                            var stateIndex = response[0].indexOf("state");
                            var countyIndex = response[0].indexOf("county");
                            var tractIndex = response[0].indexOf("tract");
                            var blockGroupIndex = response[0].indexOf("block group");
                            var placeIndex = response[0].indexOf("place");
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
                                var validVariable = module.parseToValidVariable(currentVariable, request.api, request.year);
                                var index = response[0].indexOf(validVariable);
                                var intermediateVar = currentResponseItem[index];
                                if (intermediateVar) {
                                    currentDataObject[currentVariable] = intermediateVar;
                                }
                                // Variable is Normalizeable
                                if (intermediateVar && module.isNormalizable(currentVariable)
                                    && module.parseToValidVariable("population", request.api, request.year)) {
                                    var validVariable_1 = module.parseToValidVariable("population", request.api, request.year);
                                    var index_1 = response[0].indexOf(validVariable_1);
                                    var property = currentVariable + "_normalized";
                                    currentDataObject[property] = currentDataObject[currentVariable] / currentResponseItem[index_1];
                                }
                            }
                            request.data.push(currentDataObject);
                        }
                    }
                    else {
                        // We don't have sublevel, so we just grab the single response
                        var currentVariable = void 0;
                        var currentDataObject = {};
                        for (var i = 0; i < request.variables.length; i++) {
                            currentVariable = request.variables[i];
                            if (module.parseToValidVariable(currentVariable, request.api, request.year)) {
                                var validVariable = module.parseToValidVariable(currentVariable, request.api, request.year);
                                var index = response[0].indexOf(validVariable);
                                currentDataObject[currentVariable] = response[1][index];
                            }
                            if (currentDataObject[currentVariable] && module.isNormalizable(currentVariable)
                                && module.parseToValidVariable("population", request.api, request.year)) {
                                var validVariable = module.parseToValidVariable("population", request.api, request.year);
                                var index = response[1].indexOf(validVariable);
                                var property = currentVariable + "_normalized";
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
            }
            else {
                // We have no variables remaining - use the callback on the request object
                callback(request);
                return;
            }
        }
        else {
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
            }
            else {
                module.validateRequestGeographyVariables(request, function (response) {
                    module.apiRequest(response, callback);
                });
            }
        }
    };
    CensusModule.prototype.tigerWebRequest = function (request, callback) {
        var _this = this;
        // This will ensure our coordinates come out properly
        var spatialReferenceCode = 4326;
        var server = "current";
        if ("mapServer" in request) {
            server = request.mapServer;
        }
        else {
            request.mapServer = "current";
        }
        //Dictionary of map server codes
        var mapServers = servers[server].mapServers;
        this.parseRequestStateCode(request);
        //Check for zip code
        if ("zip" in request) {
            //We have zip code - but do we have lat/lng?
            if (!("lat" in request) || !("lng" in request)) {
                //We have the zip but no lat/lng - parse it and re-call
                this.zipToLatLng(request.zip).then(function (response) {
                    response = _this.citysdk.parseResponseLatLng(response);
                    request.lat = response.lat;
                    request.lng = response.lng;
                    _this.tigerWebRequest(request, callback);
                    return;
                });
            }
        }
        // Check for an address object
        if ("address" in request) {
            //We have address - but do we have lat/lng?
            if (!("lat" in request) || !("lng" in request)) {
                var street = request.address.street;
                var city = request.address.city;
                var state = request.address.state;
                //We have the address but no lat/lng - parse it and re-call
                this.addressToFips(street, city, state).then(function (response) {
                    //Take the first matched address
                    request.lat = response[0].coordinates.y;
                    request.lng = response[0].coordinates.x;
                    // Attach this "matched address" to the request address
                    // object so the user knows what we're using
                    request.address.addressMatch = response[0];
                    _this.tigerWebRequest(request, callback);
                    return;
                });
            }
        }
        this.parseRequestLatLng(request);
        var mapserverPattern = "{mapserver}";
        var tigerRequest = {
            f: "json",
            where: "",
            outFields: "*",
            outSR: spatialReferenceCode,
            inSR: spatialReferenceCode
        };
        var tigerURL = servers[server].url;
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
                this.citysdk.post(tigerURL, tigerRequest).then(function (json) {
                    var features = json.features;
                    // Grab our container ESRI geography, attach it to our request,
                    // and call this function again.
                    if (request.container == "us") {
                        request.containerGeometry = _this.geoToEsri(usBoundingBox)[0].geometry;
                    }
                    else {
                        request.containerGeometry = features[0].geometry;
                    }
                    _this.tigerWebRequest(request, callback);
                });
                return;
            }
            else {
                // We have a sublevel request with a container,
                // AND we've already grabbed the container's ESRI json
                tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
                tigerRequest.geometry = JSON.stringify(request.containerGeometry);
                tigerRequest.geometryType = "esriGeometryPolygon";
                tigerRequest.spatialRel = (request.container == "place" || request.container == "geometry")
                    ? "esriSpatialRelIntersects"
                    : "esriSpatialRelContains";
                delete request.containerGeometry;
                this.citysdk.post(tigerURL, tigerRequest).then(function (response) {
                    callback(_this.esriToGeo(response));
                });
            }
        }
        else if ("sublevel" in request) {
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
        }
        else {
            // We have a sublevel request with a container.
            // We need to grab the container's geography and return it
            tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
            tigerRequest.geometry = request.lng + "," + request.lat;
            tigerRequest.geometryType = "esriGeometryPoint";
            tigerRequest.spatialRel = "esriSpatialRelIntersects";
            this.citysdk.post(tigerURL, tigerRequest).then(function (response) {
                callback(_this.esriToGeo(response));
            });
        }
    };
    CensusModule.version = "0.0.1";
    CensusModule.defaultLevel = "blockGroup";
    CensusModule.defaultApi = "acs5";
    CensusModule.defaultEndpoints = {
        acsVariableDictionaryURL: "http://api.census.gov/data/",
        geoCoderUrl: "http://geocoding.geo.census.gov/geocoder/geographies/",
        tigerwebUrl: "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/",
        censusUrl: "http://api.census.gov/data/"
    };
    return CensusModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CensusModule;
