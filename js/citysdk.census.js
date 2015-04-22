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
CensusModule.prototype.DEFAULT_API = "acs5";
CensusModule.prototype.GEOJSON_FILE_ROOT = "geojson/";

//Global variables for supplemental georequests
CensusModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT = 0;


/**
 * ACS5 available years and the apis available with those years
 * @type {object} Properties of years with arrays of available APIs
 */
CensusModule.prototype.acsyears = {
    "2010": ["acs5"],
    "2011": ["acs5"],
    "2012": ["acs5", "acs3", "acs1"],
    "2013": ["acs5", "acs3", "acs1"]
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
 * Dictionary of available geoRequest locations and their lat/lng
 * @type {object} Object with properties of city/location names and values of lat/lng coordinates
 */
CensusModule.prototype.geoCities = {
    "Asheville_NC": [35.5800, -82.5558],
    "Austin_TX": [30.2500, -97.7500],
    "Boston_MA": [42.3601, -71.0589],
    "Chicago_IL": [41.8369, -87.6847],
    "Fargo_ND": [46.8772, -96.7894],
    "Montgomery_County_MD": [39.1319, -77.2264],
    "NYC_NY": [40.7127, -74.0059],
    "Portland_OR": [45.5200, -122.6819],
    "San_Francisco_CA": [37.7833, -122.4167],
    "Seattle_WA": [47.6097, -122.3331],
    "Washington_DC": [38.9047, -77.0164]
};


/**
 * Dictionary of aliases, string alias -> object with variable and description
 * @type {object} Object with properties of aliased variable, each having an object specifying the api, true variable, and description
 */
CensusModule.prototype.aliases = {
    "income": {
        "api": "acs",
        "variable": "B19113_001E",
        "description": "Median family income in the past 12 months (in 2013 inflation-adjusted dollars)"
    },
    "income_per_capita": {
        "api": "acs",
        "variable": "B19301_001E",
        "description": "Per capita income in the past 12 months (in 2013 inflation-adjusted dollars)"
    },

    "poverty": {
        "api": "acs",
        "variable": "B05010_001E",
        "description": "Ratio of Income to Poverty Level in the Past 12 Months"
    },
    "poverty_married": {
        "api": "acs",
        "variable": "B17021_005E",
        "description": "Number of married couples whose income is below the poverty level in the past 12 months."
    },
    "poverty_married_with_children": {
        "api": "acs",
        "variable": "B17021_004E",
        "description": "Income in the past 12 months below poverty level:!!In family households:!!In married couple families:"
    },
    "poverty_single_father": {
        "api": "acs",
        "variable": "B17021_009E",
        "description": "Income in the past 12 months below poverty level:!!In family households:!!In other families:!!Male householder, no wife present:!!All relatives"
    },
    "poverty_single_mother": {
        "api": "acs",
        "variable": "B17021_029E",
        "description": "Income in the past 12 months at or above poverty level:!!In family households:!!In other families:!!Female householder, no husband present:!!All relatives"
    },

    "age": {
        "api": "acs",
        "variable": "B01001_001E",
        "description": "AGE & SEX"
    },
    "median_male_age": {
        "api": "acs",
        "variable": "B01002_002E",
        "description": "Median age by sex (male)"
    },
    "median_female_age": {
        "api": "acs",
        "variable": "B01002_003E",
        "description": "Median age by sex (female)"
    },

    "population": {
        "api": "acs",
        "variable": "B01003_001E",
        "description": "Total population"
    },

    "commute_time": {
        "api": "acs",
        "variable": "B08136_001E",
        "description": "Total time spent commuting (in minutes)"
    },
    "commute_time_solo_automobile": {
        "api": "acs",
        "variable": "B08136_003E",
        "description": "Time spent commuting (in minutes): Car, truck, or van - alone"
    },
    "commute_time_carpool": {
        "api": "acs",
        "variable": "B08136_004E",
        "description": "Time spent commuting (in minutes): Car, truck, or van - carpool"
    },
    "commute_time_public_transport": {
        "api": "acs",
        "variable": "B08136_007E",
        "description": "Time spent commuting (in minutes): public transport (excluding taxis)"
    },
    "commute_time_walked": {
        "api": "acs",
        "variable": "B08136_011E",
        "description": "Time spent commuting (in minutes): walking"
    },
    "commute_time_other": {
        "api": "acs",
        "variable": "B08136_012E",
        "description": "Time spent commuting (in minutes): Taxicab, motorcycle, bicycle, or other means"
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
    var geocoderURL = "http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x={lng}&y={lat}&benchmark=4&vintage=4&layers=8,12,28,86,84&format=jsonp&callback=?";

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
CensusModule.prototype.acsSummaryRequest = function(request, callback) {
    var yearPattern = /({year})/;
    var apiPattern = /({api})/;
    var variablePattern = /({var})/;
    var blockGroupPattern = /({blockGroup})/;
    var statePattern = /({state})/;
    var countyPattern = /({county})/;
    var tractPattern = /({tract})/;
    var placePattern = /({place})/;
    var keyPattern = /({key})/;
    var qualifiersPattern = /({qualifiers})/;

    var qualifiers = "for=";
    var cascade = false;

    if(request.sublevel) {
        var level = (request.level == "blockGroup") ? "block+group" : request.level;
        switch(request.container) {
            case "us":
                qualifiers += level + ":*";
                break;
            case "state":
                qualifiers += level + ":*&in=state:{state}";
                break;
            case "county":
                qualifiers += level + ":*&in=county:{county}+state:{state}";
                break;
            case "place":
                qualifiers += level + ":*&in=place:{place}+state:{state}";
                break;
            case "tract":
                qualifiers += level + ":*&in=tract:{tract}+county:{county}+state:{state}";
                break;
        }
    }

    //Only do this if the pervious switch had no effect (i.e. no contianer)
    //TODO: Clean this up, unify with the above
    if(qualifiers == "for=") {
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
            case "place":
                //If sublevel, add the appropriate for and attach the in
                //Check for cascade so we don't do this twice
                if(request.sublevel & !cascade) {
                    qualifiers += "place:*&in=";
                    cascade = true;
                } else if(!cascade) {
                    //We only use place in the for, for the moment
                    qualifiers += "place:{place}&in=";
                    cascade = true;
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
    }

    //Construct the list of variables
    var variableString = "";

    for(var i = 0; i < request.variables.length; i++) {
        if(i != 0) variableString += ",";
        variableString += this.parseToVariable(request.variables[i]);
    }

    //The URL for ACS5 request (summary file)
    var acsURL = "http://api.census.gov/data/{year}/{api}?get=NAME,{var}&{qualifiers}&key={key}";

    //Regex our URL to insert appropriate variables
    acsURL = acsURL.replace(qualifiersPattern, qualifiers);
    acsURL = acsURL.replace(apiPattern, request.api);
    acsURL = acsURL.replace(yearPattern, request.year);
    acsURL = acsURL.replace(variablePattern, variableString);
    acsURL = acsURL.replace(blockGroupPattern, request.blockGroup);
    acsURL = acsURL.replace(statePattern, request.state);
    acsURL = acsURL.replace(countyPattern, request.county);
    acsURL = acsURL.replace(tractPattern, request.tract);
    acsURL = acsURL.replace(placePattern, request.place);
    acsURL = acsURL.replace(keyPattern, this.apiKey);


    var request = CitySDK.prototype.sdkInstance.ajaxRequest(acsURL);

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

    if(!("api" in request)) {
        request.api = this.DEFAULT_API;
    } else {
        if(window.jQuery.inArray(request.api, this.acsyears[request.year]) < 0) {
            console.log("Warning: API " + request.api + " does not appear to support " + request.year);
        }
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
            request["place"] = geographies["Incorporated Places"][0]["PLACE"];
            request["place_name"] = geographies["Incorporated Places"][0]["NAME"];
            //TODO: Make a null if null thingie

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
            this.acsSummaryRequest(
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

                            var stateIndex = window.jQuery.inArray("state", response[0]);
                            var countyIndex = window.jQuery.inArray("county", response[0]);
                            var tractIndex = window.jQuery.inArray("tract", response[0]);
                            var blockGroupIndex = window.jQuery.inArray("block group", response[0]);
                            var placeIndex = window.jQuery.inArray("place", response[0]);

                            if(stateIndex >= 0) {
                                currentDataObject["state"] = currentResponseItem[stateIndex];
                            }

                            if(countyIndex >= 0) {
                                currentDataObject["county"] = currentResponseItem[countyIndex];
                            }

                            if(tractIndex >= 0) {
                                currentDataObject["tract"] = currentResponseItem[tractIndex];
                            }

                            if(blockGroupIndex >= 0) {
                                currentDataObject["blockGroup"] = currentResponseItem[blockGroupIndex];
                            }

                            if(placeIndex >= 0) {
                                currentDataObject["place"] = currentResponseItem[placeIndex];
                            }

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
 * Get a city's geography by name, as well as requested variables. Currently supported locations:
 * Asheville, NC
 * Austin, TX
 * Boston, MA
 * Chicago, IL
 * Fargo, ND
 * Montgomery County, MD (Using the co-ordinates for Gaithersburg, MD)
 * NYC, NY
 * Portland, OR
 * San Francisco, CA
 * Seattle, WA
 * Washington, DC
 *
 *
 * Example request:
 * {
 *      "level": "place",
 *      "lat": 30.2500,
 *      "lng": -97.7500,
 *      "variables": [
 *          "income",
 *          "population"
 *      ]
 * }
 *
 * level - The level data should be request for from the ACS5 (if any variables specified)
 * geolevel - The level geographies should be split. Options are: blockGroup, place, tract. *For Montgomery County, MD, there is no "place" tag but instead "county"
 * lat/lng - Coordinates
 * variables - Optional variables to acquire from the ACS5 based upon
 *
 * The response will be geoJSON of the requested city, with variable results attached as properties.
 *
 * @param {object} request The JSON request
 * @param {function} callback The callback to take the response, which is geoJSON
 */
CensusModule.prototype.GEORequest = function(request, callback) {
    if(!("data" in request)) {
        //Some basic verification for year/level
        if(!("level" in request)) {
            request.level = this.DEFAULT_LEVEL;
        }

        if(!("year" in request)) {
            request.year = this.DEFAULT_YEAR;
        }

        //Determine the appropriate file name for the geojson
        switch(request.level) {
            case "blockGroup":
                request.geolevel = "blkgrp";
                request.container = "county";
                break;
            case "place":
                request.geolevel = "city";
                request.container = "state";
                break;
            case "county":
                request.geolevel = "county";
                request.container = "state";
                break;
            case "tract":
                request.geolevel = "tract";
                request.container = "state";
                break;
        }

        //Here we enable sublevel and make a copy reference to the variables
        request.sublevel = true;
        request.geovars = request.variables;

        //Get all the data
        CitySDK.prototype.modules.census.APIRequest(request, function(response1) {
            //Load the geoJSON
            CitySDK.prototype.sdkInstance.ajaxRequest(CitySDK.prototype.modules.census.GEOJSON_FILE_ROOT + request.state + request.place + "_" + request.geolevel + ".json").done(
                function(response2) {
                    var response = $.parseJSON(response2);
                    response.data = response1.data;
                    response.variables = request.geovars;
                    response.level = response1.level;
                    response.year = response1.year;
                    response.sublevel = true;
                    delete response.geolevel;

                    //We now have our geoJSON and also the Data. We call GeoRequest again which will then
                    //attach the data to the geoJSON properly.
                    CitySDK.prototype.sdkInstance.modules.census.GEORequest(response, callback);
                }
            );
        });
    } else {
        //We have the geoJSON and the data - mesh them together
        var data = request.data;
        var variables = request.variables;
        var features = request.features;

        var matchedFeature;

        //Reference dictionary of levels -> geocoder response variables
        var comparisonVariables = {
            "tract": "TRACTCE",
            "place": "PLACEFP",
            "county": "COUNTYFP",
            "blockGroup": "BLKGRPCE"
        };

        for(var i = 0; i < features.length; i++) {
            matchedFeature = null;
            //TODO: We need to tidy this grep up a bit.
            matchedFeature = window.jQuery.grep(data, function(e){
                //Ensure we have a direct match for low level items by comparing the higher level items
                if(request.level == "blockGroup" || request.level == "tract") {
                    return e[request.level] == features[i].properties[comparisonVariables[request.level]] &&
                           e["tract"] == features[i].properties[comparisonVariables["tract"]] &&
                           e["county"] == features[i].properties[comparisonVariables["county"]];
                } else {
                    return e[request.level] == features[i].properties[comparisonVariables[request.level]];
                }
            });

            if(matchedFeature.length == 0) {
                //Sometimes cities span multiple counties. In this case, we sometimes miss data due to the
                //limited nature of the Census API's geography hierarchy. This will issue supplemental requests
                //to ensure we have data for all of our geojson entities
                console.log("Found no match for " + request.level + ", issuing a supplemental request...");
                var suppRequest = {
                    "state": features[i].properties["STATEFP"],
                    "tract": features[i].properties["TRACTCE"],
                    "county": features[i].properties["COUNTYFP"],
                    "blockGroup": features[i].properties["BLKGRPCE"],
                    "level": request.level,
                    "variables": variables,
                    "featuresIndex": i
                };

                CensusModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT++;
                CitySDK.prototype.sdkInstance.modules.census.APIRequest(suppRequest, function(resp) {
                    console.log("Got a supplemental response, attaching data.");
                    CensusModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT--;
                    for(var j = 0; j < variables.length; j++) {
                        features[resp.featuresIndex].properties[variables[j]] = resp.data[variables[j]];
                    }
                });
            } else if(matchedFeature.length == 1) {
                //We have matched the feature's tract to a data tract, move the data over
                matchedFeature = matchedFeature[0];
                for(var j = 0; j < variables.length; j++) {
                    features[i].properties[variables[j]] = matchedFeature[variables[j]];
                }
            } else {
                //This usually occurs when a low-level geography entity isn't uniquely identified
                //by the grep. We'll need to add more comparisons to the grep to clear this issue up.
                console.log("Multiple matched featues: " );
                console.log(features[i]);
                console.log(matchedFeature);
            }
        }

        //Clean up our mess a bit
        delete request.level;
        delete request.year;
        delete request.variables;
        delete request.data;
        delete request.sublevel;

        callback(request);
    }
};
