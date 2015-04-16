/**
 * This is the Census module
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.census = new CensusModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function CensusModule() {
    this.enabled = false;
};

//Enable function. Stores the API key for this module and sets it as enabled
CensusModule.prototype.enable = function(apiKey) {
    this.apiKey = apiKey;
    this.enabled = true;
};

//After this point the module is all up to you

//Defaults
CensusModule.prototype.DEFAULT_YEAR = 2013;
CensusModule.prototype.DEFAULT_LEVEL = "blockGroup";


/**
 * ACS5 available years and the apis available with those years
 * @type {object} Properties of years with arrays of available APIs
 */
CensusModule.prototype.acs5years = {
    "2010": ["acs5summary"],
    "2011": ["acs5summary"],
    "2012": ["acs5summary"],
    "2013": ["acs5summary"]
};


/**
 * Dictionary of state codes to state capital coordinates. i.e. "AL" -> 32.3617, -86.2792
 * @type {object} Object with properties of state codes and values of arrays of coordinates
 */
CensusModule.prototype.stateCapitals = {
    "AL": [32.3617, -86.2792],
    "AK": [58.3, -134.4167],
    "AZ": [33.45, -112.0667],
    "AR": [34.6361, -92.3311],
    "CA": [38.5766, -121.4934],
    "CO": [39.7391, -104.9849],
    "CT": [41.7641, -72.6828],
    "DE": [39.1619, -75.5267],
    "DC": [38.9047, -77.0164],
    "FL": [30.4381, -84.2816],
    "GA": [33.7493, -84.3883],
    "HI": [21.3073, -157.8573],
    "ID": [43.6177, -116.1996],
    "IL": [39.7983, -89.6544],
    "IN": [39.7686, -86.1625],
    "IA": [41.5912, -93.6039],
    "KS": [39.0481, -95.6781],
    "KY": [38.1867, -84.8753],
    "LA": [30.4571, -91.1874],
    "ME": [44.3235, -69.7653],
    "MD": [38.9786, -76.4911],
    "MA": [42.3582, -71.0637],
    "MI": [42.7337, -84.5556],
    "MN": [44.9553, -93.1022],
    "MS": [32.2992, -90.1800],
    "MO": [38.5791, -92.1730],
    "MT": [46.5958, -112.0270],
    "NE": [40.8106, -96.6803],
    "NV": [39.1608, -119.7539],
    "NH": [43.2067, -71.5381],
    "NJ": [40.2237, -74.7640],
    "NM": [35.6672, -105.9644],
    "NY": [42.6525, -73.7572],
    "NC": [35.7806, -78.6389],
    "ND": [46.8133, -100.7790],
    "OH": [39.9833, -82.9833],
    "OK": [35.4822, -97.5350],
    "OR": [44.9308, -123.0289],
    "PA": [40.2697, -76.8756],
    "RI": [41.8236, -71.4222],
    "SC": [34.0298, -80.8966],
    "SD": [44.3680, -100.3364],
    "TN": [36.1667, -86.7833],
    "TX": [30.2500, -97.7500],
    "UT": [40.7500, -111.8833],
    "VT": [44.2500, -72.5667],
    "VA": [37.5333, -77.4667],
    "WA": [47.0425, -122.8931],
    "WV": [38.3472, -81.6333],
    "WI": [43.0667, -89.4000],
    "WY": [41.1456, -104.8019]
};


/**
 * Dictionary of aliases, string alias -> object with variable and description
 * @type {object} Object with properties of aliased variable, each having an object specifying the api, true variable, and description
 */
CensusModule.prototype.aliases = {
    "income": {
        "api": "acs5summary",
        "variable": "B06011_001E",
        "description": "MEDIAN INCOME IN LAST 12 MONTH"
    },
    "poverty": {
        "api": "acs5summary",
        "variable": "B05010_001E",
        "description": "Ratio of Income to Poverty Level in the Past 12 Months"
    },
    "age": {
        "api": "acs5summary",
        "variable": "B01001_001E",
        "description": "AGE & SEX"
    },
    "population": {
        "api": "acs5summary",
        "variable": "B01003_001E",
        "description": "Total population"
    }
};

/**
 * Checks to see if a string is in the aliases dictionary and returns the appropriate variable if so.
 * e.g. "income" will return "DP03_0064PE"
 * If the string is not in the alias dictionary, it will return the same string back. This is useful for parsing
 * user input. (Either a user requests a variable in the alias dictionary OR a specific variable)
 *
 * @param {string} aliasOrVariable A string to parse into a variable string.
 * @returns {string} Variable string
 */
CensusModule.prototype.parseToVariable = function(aliasOrVariable) {
    //If the requested string is an alias, return the appropriate variable from the dictionary
    if(aliasOrVariable in this.aliases) {
        return this.aliases[aliasOrVariable].variable;
    }

    //Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
};

/**
 * Converts co-ordinates to Census FIPS via the Geocoder API
 *
 * @param {float} lat Latitude
 * @param {float} lng Longitude
 * @param {function} callback Callback function
 */
CensusModule.prototype.latLngToFIPS = function(lat, lng, callback) {
    var latPattern = /({lat})/;
    var lngPattern = /({lng})/;

    //The question mark at the end of this url tells JQuery to handle setting up and calling the JSONP callback
    var geocoderURL = "http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x={lng}&y={lat}&benchmark=4&vintage=4&format=jsonp&callback=?";

    //Insert our requested coordinates into the geocoder url
    geocoderURL = geocoderURL.replace(latPattern, lat);
    geocoderURL = geocoderURL.replace(lngPattern, lng);

    //Make our AJAX request
    var request = CitySDK.prototype.sdkInstance.jsonpRequest(geocoderURL);

    //Attach a completion event to the promise
    request.done(function(response) {
        //Call the callback
        callback(response.result.geographies);
    });
};


/**
 * Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically
 * @param {object} request JSON request (see APIRequest)
 * @param {function} callback
 */
CensusModule.prototype.acs5SummaryRequest = function(request, callback) {
    var yearPattern = /({year})/;
    var variablePattern = /({var})/;
    var blockGroupPattern = /({blockGroup})/;
    var statePattern = /({state})/;
    var countyPattern = /({county})/;
    var tractPattern = /({tract})/;
    var keyPattern = /({key})/;
    var qualifiersPattern = /({qualifiers})/;

    var qualifiers = "for=";
    var cascade = false;
    switch(request.level) {
        case "us":
            //If sublevel, add the appropriate for and attach the in
            if(request.sublevel) {
                qualifiers += "state:*";
                cascade = true;
            } else {
                qualifiers += "us:1";
            }
            break;
        case "blockGroup":
            if(request.sublevel) {
                //Can't do this. No levels beneath. We'll set the sublevel to false here
                request.sublevel = false;
            }
            qualifiers += "block+Group:{blockGroup}";
            if(!cascade) {
                qualifiers += "&in=";
                cascade = true;
            }
        case "tract":
            //If sublevel, add the appropriate for and attach the in
            //We also check the cascade tag so we don't do this twice.
            if(request.sublevel & !cascade) {
                qualifiers += "block+Group:*&in=";
                cascade = true;
            }

            qualifiers += "tract:{tract}";
            if(!cascade) {
                qualifiers += "&in=";
                cascade = true;
            } else {
                qualifiers += "+";
            }
        case "county":
            //If sublevel, add the appropriate for and attach the in
            //We also check the cascade tag so we don't do this twice.
            if(request.sublevel & !cascade) {
                qualifiers += "tract:*&in=";
                cascade = true;
            }

            qualifiers += "county:{county}";
            if(!cascade) {
                qualifiers += "&in=";
                cascade = true;
            } else {
                qualifiers += "+";
            }
        case "state":
            //If sublevel, add the appropriate for and attach the in
            //We also check the cascade tag so we don't do this twice.
            if(request.sublevel & !cascade) {
                qualifiers += "county:*&in=";
                cascade = true;
            }

            qualifiers += "state:{state}";
            break;
    }

    //Construct the list of variables
    var variableString = "";

    for(var i = 0; i < request.variables.length; i++) {
        if(i != 0) variableString += ",";
        variableString += this.parseToVariable(request.variables[i]);
    }

    //The URL for ACS5 request (summary file)
    var acs5URL = "http://api.census.gov/data/{year}/acs5?get=NAME,{var}&{qualifiers}&key={key}";

    //Regex our URL to insert appropriate variables
    acs5URL = acs5URL.replace(qualifiersPattern, qualifiers);
    acs5URL = acs5URL.replace(yearPattern, request.year);
    acs5URL = acs5URL.replace(variablePattern, variableString);
    acs5URL = acs5URL.replace(blockGroupPattern, request.blockGroup);
    acs5URL = acs5URL.replace(statePattern, request.state);
    acs5URL = acs5URL.replace(countyPattern, request.county);
    acs5URL = acs5URL.replace(tractPattern, request.tract);
    acs5URL = acs5URL.replace(keyPattern, this.apiKey);

    //Need to use the CORS workaround for this
    var request = CitySDK.prototype.sdkInstance.ajaxRequest(acs5URL);

    //Attach a completion event to the promise
    request.done(function(response) {
        //Turn it into json
        var jsonObject = $.parseJSON(response);
        //Call the callback
        callback(jsonObject);
    });
};


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
 * @param {object} request The JSON object of the request
 * @param {function} callback A callback, which accepts a response parameter
 */
CensusModule.prototype.APIRequest = function(request, callback) {
    //Check for a year
    if(!("year" in request)) {
        request.year = this.DEFAULT_YEAR;
    }

    //Check for a level
    if(!("level" in request)) {
        request.level = this.DEFAULT_LEVEL;
    }

    //Check for sublevel flag
    if(!("sublevel" in request)) {
        request.sublevel = false;
    } else {
        //If we weren't given a boolean, convert the string to a boolean
        if(typeof request.sublevel !== typeof true) {
            if(request.sublevel == "true") {
                request.sublevel = true;
            } else {
                request.sublevel = false;
            }
        }
    }

    //This supports 2 letter state codes in a request
    if("state" in request) {
        if(isNaN(request.state)) {
            if(!("lat" in request) && !("lng" in request)) {
                request.lat = this.stateCapitals[request.state][0];
                request.lng = this.stateCapitals[request.state][1];
                delete request.state;
            } else {
                delete request.state;
            }
        }
    }

    //Check for geographical data
    //Allow the users to use either x,y; lat,lng; latitude,longitude to sepecify co-ordinates
    if(!("lat" in request)) {
        if("latitude" in request) {
            request.lat = request.latitude;
            delete request.latitude;
        } else if ("y" in request) {
            request.lat = request.y;
            delete request.y;
        }
    }

    if(!("lng" in request)) {
        if("longitude" in request) {
            request.lng = request.longitude;
            delete request.longitude;
        } else if("x" in request) {
            request.lng = request.x;
            delete request.x;
        }
    }

    //Check if we have latitude/longitude values. If we do, call the geocoder and get the appropriate FIPS
    if("lat" in request && "lng" in request) {
        this.latLngToFIPS(request.lat, request.lng, function(geographies) {
            //TODO: Expand this to support multiple blocks
            var fipsData = geographies["2010 Census Blocks"][0];
            request["state"] = fipsData["STATE"];
            request["county"] = fipsData["COUNTY"];
            request["tract"] = fipsData["TRACT"];
            request["blockGroup"] = fipsData["BLKGRP"];

            delete request.lat;
            delete request.lng;

            CitySDK.prototype.sdkInstance.modules.census.APIRequest(request, callback);
        });
        return; //We return because the callback will fix our request into FIPs, and then call the request again
    }

    if("state" in request && "county" in request && "tract" in request && "blockGroup" in request) {
        if("variables" in request) {
            //If we don't have a data object in the request, create one
            if(!("data" in request)) request.data = {};

            //TODO: We need to create an algorithm to determine which API to call for which non-aliased variable
            //      right now everything is in acs5 summary so it doesn't matter.
            this.acs5SummaryRequest(
                request,
                function(response) {
                    if(request.sublevel) {
                        //If sublevel is set to true, our "data" property will be an array of objects for each sublevel item.
                        request.data = [];
                        var currentVariable;
                        var currentResponseItem;
                        var currentDataObject;
                        for(var i = 1; i < response.length; i++) {
                            currentDataObject = {};
                            currentResponseItem = response[i];
                            currentDataObject["name"] = currentResponseItem[window.jQuery.inArray("NAME", response[0])];
                            for(var j = 0; j < request.variables.length; j++) {
                                currentVariable = request.variables[j];
                                currentDataObject[currentVariable] = currentResponseItem[window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.census.parseToVariable(currentVariable), response[0])];
                            }

                            request.data.push(currentDataObject);
                        }
                    } else {
                        //We don't have sublevel, so we just grab the single response
                        var currentVariable;
                        for(var i = 0; i < request.variables.length; i++) {
                            currentVariable = request.variables[i];
                            request.data[currentVariable] = response[1][window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.census.parseToVariable(currentVariable), response[0])];
                        }
                    }

                    delete request.variables;
                    callback(request);
                }
            );
        } else {
            //We have no variables remaining - use the callback on the request object
            callback(request);
            return;
        }
    } else {
        //We have no geography!
        //Is the level the US?
        if(request.level == "us") {
            //Ok, let's just resubmit it with D.C. as the "state"
            request.state = "DC";
            CitySDK.prototype.sdkInstance.modules.census.APIRequest(request, callback);
        }
        return;
    }
};


/**
 * Get a city's geography by name, as well as requested variables
 *
 * Lat/Lng support to come in the future
 *
 * Example request:
 * {
 *      "name": "New York City",
 *      "fips": 1150000,
 *      "level": "tract",
 *      "variables": [
 *          "income",
 *          "population"
 *      ]
 * }
 *
 * The response will be geoJSON of the requested city, with variable results attached as properties.
 *
 * @param {object} request The JSON request
 * @param {function} callback The callback to take the response, which is geoJSON
 */
CensusModule.prototype.GEORequest = function(request, callback) {
    if(!("features" in request)) {
        //Some basic verification for year/level
        if(!("level" in request)) {
            request.level = this.DEFAULT_LEVEL;
        }

        if(!("year" in request)) {
            request.year = this.DEFAULT_YEAR;
        }


        //We don't have the geoJSON yet. Let's grab it
        //TODO we're just returning DC tracts all the time because we don't have the other cities yet.
        console.log("Getting city: " + request.fips);
        console.log("Variables: " + request.variables);
        CitySDK.prototype.sdkInstance.ajaxRequest("geojson/" + request.fips + "_tracts.json").done(
            function(response) {
                response = $.parseJSON(response);
                response.variables = request.variables;
                response.level = request.level;
                response.year = request.year;
                CitySDK.prototype.sdkInstance.modules.census.GEORequest(response, callback);
            }
        );
    } else {
        //For each feature, we get the variables and add them to the properties of that feature.
        if("remainingFeatures" in request) {
            if(request.remainingFeatures == 0) {
                //We're done, clean up.
                delete request.remainingFeatures;
                delete request.variables;
                delete request.level;

                //Callback
                callback(request);
            } else if(request.remainingFeatures == request.features.length) {
                //We only want to fire this once, but we don't know which of the ajax calls will return last,
                //thus they must all call this again in their callback. That is why we need this if statement.

                //More features to do
                console.log("Total features:" + request.remainingFeatures);

                for(var i = 0; i < request.features.length; i++) {
                    var feature = request.features[i];

                    //We add the index of this feature in the geoJSON so that we can make all the ajax calls
                    //simultaneously, reducing the time to load all of the data.
                    var acs5request = {
                        "index": i,
                        "x": feature.geometry.coordinates[0][0][0],
                        "y": feature.geometry.coordinates[0][0][1],
                        "level": request.level,
                        "year": request.year,
                        "variables": request.variables.slice()
                    };

                    CitySDK.prototype.sdkInstance.modules.census.APIRequest(acs5request, function(acs5response) {
                        $.extend(request.features[acs5response.index].properties, acs5response.data);
                        request.remainingFeatures -= 1;
                        console.log("Features remaining: " + request.remainingFeatures);
                        CitySDK.prototype.sdkInstance.modules.census.GEORequest(request, callback);
                    });
                }
            }
        } else {
            request.remainingFeatures = request.features.length;
            CitySDK.prototype.sdkInstance.modules.census.GEORequest(request, callback);
        }
    }
};
