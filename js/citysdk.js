/**
 * CitySDK
**/

//SDK instance for the callback functions
//TODO find a way to encapsulate this better
var sdkInstance = null;

/**
 * Instantiates an instance of the CitySDK object.
 * @param {string} apiKey Your census API key
 * @constructor
 */
function CitySDK(apiKey) {
    this.apiKey = apiKey;

    sdkInstance = this;
}

CitySDK.prototype.DEFAULT_YEAR = 2013;
CitySDK.prototype.DEFAULT_LEVEL = "blockGroup";

CitySDK.prototype.stateCapitals = {
    "AL": [32.3617, -86.2792],
    "AK": [58.3, -134.4167],
    "AZ": [33.45, -112.0667],
    "AR": [34.6361, -92.3311],
    "CA": [38.5766, -121.4934],
    "CO": [39.7391, -104.9849],
    "CT": [41.7641, -72.6828],
    "DE": [39.1619, -75.5267],
    "DC": [38.9047, -77.1064],
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
}

/**
 * Available apis and their related functions
 */
CitySDK.prototype.apis = {
    "geocoder":     "latLngToFIPS",
    "acs5summary":  "acs5SummaryRequest",
    "acs5profile":  "acs5ProfileRequest"
}

/**
 * Dictionary of aliases, string alias -> object with variable and description
 */
CitySDK.prototype.aliases = {
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
 * ACS5 available years and the apis available with those years
 * @type {{2010: string[], 2011: string[], 2012: string[], 2013: string[]}}
 */
CitySDK.prototype.acs5years = {
    "2010": ["acs5summary"],
    "2011": ["acs5summary"],
    "2012": ["acs5summary", "acs5profile"],
    "2013": ["acs5summary", "acs5profile"]
};


/**
 * Makes an AJAX call
 * @param url {string} URL to request
 * @return {promise} Returns a standard ajax promise
 */
CitySDK.prototype.ajaxRequest = function(url) {
    return $.ajax({
        type: 'GET',
        dataType: 'text',
        contentType: 'text/plain',
        url: url
    });
};

/**
 * Makes an AJAX call (using jsonp)
 * @param url {string} URL to request
 * @return {object} Returns a standard ajax promise
 */
CitySDK.prototype.jsonpRequest = function(url) {
    return $.ajax({
        type: 'GET',
        dataType: "jsonp",
        contentType: 'text/plain',
        url: url
    });
};

/**
 * Converts co-ordinates to Census FIPS via the Geocoder API
 *
 * @param {float} lat Latitude
 * @param {float} lng Longitude
 * @param {function} callback Callback function
 */
CitySDK.prototype.latLngToFIPS = function(lat, lng, callback) {
    var latPattern = /({lat})/;
    var lngPattern = /({lng})/;

    //The question mark at the end of this url tells JQuery to handle setting up and calling the JSONP callback
    var geocoderURL = "http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x={lng}&y={lat}&benchmark=4&vintage=4&format=jsonp&callback=?";

    //Insert our requested coordinates into the geocoder url
    geocoderURL = geocoderURL.replace(latPattern, lat);
    geocoderURL = geocoderURL.replace(lngPattern, lng);

    //Make our AJAX request
    var request = this.jsonpRequest(geocoderURL);

    //Attach a completion event to the promise
    request.done(function(response) {
        //Call the callback
        callback(response.result.geographies);
    });
};

/**
 * Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically
 * @param request JSON request (see APIRequest)
 * @param callback
 */
CitySDK.prototype.acs5SummaryRequest = function(request, callback) {
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
            qualifiers += "us:1";
            break;
        case "blockGroup":
            qualifiers += "block+Group:{blockGroup}";
            if(!cascade) {
                qualifiers += "&in=";
                cascade = true;
            }
        case "tract":
            qualifiers += "tract:{tract}";
            if(!cascade) {
                qualifiers += "&in=";
                cascade = true;
            } else {
                qualifiers += "+";
            }
        case "county":
            qualifiers += "county:{county}";
            if(!cascade) {
                qualifiers += "&in=";
                cascade = true;
            } else {
                qualifiers += "+";
            }
        case "state":
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
    var request = this.ajaxRequest(acs5URL);

    //Attach a completion event to the promise
    request.done(function(response) {
        //Turn it into json
        var jsonObject = $.parseJSON(response);
        //Call the callback
        callback(jsonObject);
    });
};

CitySDK.prototype.acs5ProfileRequest = function(variable) {
    //TODO
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
CitySDK.prototype.parseToVariable = function(aliasOrVariable) {
    //If the requested string is an alias, return the appropriate variable from the dictionary
    if(aliasOrVariable in this.aliases) {
        return this.aliases[aliasOrVariable].variable;
    }

    //Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
};

/**
 * Processes a data request by looking at a JSON request
 *
 * JSON Requests should include:
 * "year" - Year of the request. See acs5years object for available years. Defaults to 2013 if not specified.
 * "lat" - Latitude of the requested location (either specified as x, lat, or latitude) NORTH
 * "lng" - Longitude of the requested location (either specified as y, lng, or longitude) EAST
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
 *           "income": jsonObject
 *       }
 *   };
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
 * @param request The JSON object of the request
 * @param callback A callback, which accepts a response parameter
 */
CitySDK.prototype.APIRequest = function(request, callback) {
    //Check for a year
    if(!("year" in request)) {
        request.year = this.DEFAULT_YEAR;
    }

    //Check for a level
    if(!("level" in request)) {
        request.level = this.DEFAULT_LEVEL;
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

            sdkInstance.APIRequest(request, callback);
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
                    var currentVariable;
                    for(var i = 0; i < request.variables.length; i++) {
                        currentVariable = request.variables[i];
                        request.data[currentVariable] = response[1][window.jQuery.inArray(sdkInstance.parseToVariable(currentVariable), response[0])];
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
        //TODO: Perhaps handle the case for the entire US?
        return;
    }
};

/**
 * Get a city's geography by name, as well as requested variables
 *
 * Example request:
 * {
 *      "name": "New York City",
 *      "level": "tract",
 *      "variables": [
 *          "income",
 *          "population"
 *      ]
 * }
 *
 * The response will be geoJSON of the requested city, with variable results attached as properties.
 *
 * @param request The JSON request
 * @param callback The callback to take the response, which is geoJSON
 * @constructor
 */
CitySDK.prototype.GEORequest = function(request, callback) {
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
        var city = "dc";
        console.log("Getting city: " + city);
        console.log("Variables: " + request.variables);
        this.ajaxRequest("geojson/" + city + ".json").done(
            function(response) {
                response = $.parseJSON(response);
                response.variables = request.variables;
                response.level = request.level;
                response.year = request.year;
                sdkInstance.GEORequest(response, callback);
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

                    sdkInstance.APIRequest(acs5request, function(acs5response) {
                        $.extend(request.features[acs5response.index].properties, acs5response.data);
                        request.remainingFeatures -= 1;
                        console.log("Features remaining: " + request.remainingFeatures);
                        sdkInstance.GEORequest(request, callback);
                    });
                }
            }
        } else {
            request.remainingFeatures = request.features.length;
            sdkInstance.GEORequest(request, callback);
        }
    }
};
