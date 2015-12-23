/**
 * CitySDK
 **/

//SDK instance for the callback functions
CitySDK.prototype.sdkInstance = null;



/**
 * Instantiates an instance of the CitySDK object.
 * @constructor
 */
function CitySDK() {
    CitySDK.prototype.sdkInstance = this;
}


//Settings
/**
 * Toggles whether CitySDK will attempt to cache data to reduce the API call requirements
 * @type {object}
 */
CitySDK.prototype.allowCache = true;
CitySDK.prototype.localCache = {};


/**
 * Stores each module
 * @type {object}
 */
CitySDK.prototype.modules = {};



// Polyfills
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}









/**
 * Makes an AJAX call
 * @param url {string} URL to request
 * @return {promise} Returns a standard ajax promise
 */
CitySDK.prototype.ajaxRequest = function (url) {
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
CitySDK.prototype.jsonpRequest = function (url) {
    return $.ajax({
        type: 'GET',
        dataType: "jsonp",
        contentType: 'text/plain',
        url: url
    });
};

/**
 * Make an AJAX call (using POST)
 * @param url
 * @param data
 * @returns {*}
 */
CitySDK.prototype.postRequest = function (url, data) {
    return $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "text"
    });
};




// General cross-module utility functions



/**
 * Returns a list of state names keyed by 2-leter code
 * @return {object} state names keyed by 2-leter code
 */
CitySDK.prototype.stateNames = function () {
    var theStates = {
        "AL": "alabama",
        "AK": "alaska",
        "AZ": "arizona",
        "AR": "arkansas",
        "CA": "california",
        "CO": "colorado",
        "CT": "connecticut",
        "DE": "delaware",
        "DC": "district of columbia",
        "FL": "florida",
        "GA": "georgia",
        "HI": "hawaii",
        "ID": "idaho",
        "IL": "illinois",
        "IN": "indiana",
        "IA": "iowa",
        "KS": "kansas",
        "KY": "kentucky",
        "LA": "louisiana",
        "ME": "maine",
        "MD": "maryland",
        "MA": "massachusetts",
        "MI": "michigan",
        "MN": "minnesota",
        "MS": "mississippi",
        "MO": "missouri",
        "MT": "montana",
        "NE": "nebraska",
        "NV": "nevada",
        "NH": "new hampshire",
        "NJ": "new jersey",
        "NM": "new mexico",
        "NY": "new york",
        "NC": "north carolina",
        "ND": "north dakota",
        "OH": "ohio",
        "OK": "oklahoma",
        "OR": "oregon",
        "PA": "pennsylvania",
        "RI": "rhode island",
        "SC": "south carolina",
        "SD": "south dakota",
        "TN": "tennessee",
        "TX": "texas",
        "UT": "utah",
        "VT": "vermont",
        "VA": "virginia",
        "WA": "washington",
        "WV": "west virginia",
        "WI": "wisconsin",
        "WY": "wyoming"
    };
    return theStates;

};

/**
 * Returns a Lat & Long of each state's capital
 * @return {object} arrays of Lat & Long of each state's capital keyed by 2-leter code
 */
CitySDK.prototype.stateCapitals = function () {

    var theCapitals = {
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
    return theCapitals;
};

/**
 * Gets the coordinates of a state's capital from it's name or 2-letter code.
 * @param stateString {string} Name or 2-letter code of the state (case insensitive)
 * @return {array} Returns 2-position array of Lat & Long for the capital of the state. Returns false if no state is found.
 */
CitySDK.prototype.getStateCapitalCoords = function (stateString) {
    // No string supplied
    if (typeof stateString == undefined) {
        return false;
    }
    if (stateString == "" || stateString == null) {
        return false;
    }

    stateString = stateString.toUpperCase().trim();
    var stateCapitals = this.stateCapitals();
    if (stateString in stateCapitals) {
        // stateString is a 2-letter state code and is valid
        return stateCapitals[stateString];
    }
    // Look in state names
    stateString = stateString.toLowerCase();

    var stateNames = this.stateNames();
    for (var i in stateNames) {
        if (stateString == stateNames[i]) {
            return stateCapitals[i];
        }
    }

    //Nothing was found
    return false;
};// end getStateCapitalCoords()


//Check if we have latitude and longitude in the request
/**
 * Scans the request for alternative ways to specify latitude & longiture and migrates those variables to lat & lng positions.
 * @param request {object} the request being made to the module
 * @return {object} the updated request
 */
CitySDK.prototype.parseRequestLatLng = function(request) {
    //Allow the users to use either x,y; lat,lng; latitude,longitude to specify co-ordinates
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

    return request;
};




// Caching Systems

/**
 * Retrieves a value from the cache
 * @param module {string} name of the CitySDK module
 * @param hashKey {string} this is a key that identifies the data. Each module has its own hashing scheme.
 * @return {object} the value of the cached data.  Returns false if nothing found
 */
CitySDK.prototype.getCachedData = function(module,hashKey){
    if(typeof module == "undefined" || typeof hashKey =="undefined" || module == "" || hashKey == ""){
        return false;
    }
    var returnThis = null;
    if (this.storageAvailable('localStorage')) {
        returnThis = JSON.parse(localStorage.getItem(module+"-"+hashKey));
    }
    else {
        if(typeof this.localCache[module+"-"+hashKey] != 'undefined'){
            returnThis = typeof this.localCache[module+"-"+hashKey];
        }
    }
    return returnThis;
}//getCachedDate

/**
 * Creates and/or Updates a value from the cache
 * @param module {string} name of the CitySDK module
 * @param hashKey {string} this is a key that identifies the data. Each module has its own hashing scheme.
 * @param dataValue {object} this is the data being stored.  It should be an object that contains both the specific data and any meta information needed to invalidate it.
 * @return {object} the value of the cached data.  Returns false if nothing found
 */
CitySDK.prototype.setCachedData = function(module,hashKey,dataValue){
    if(typeof module == "undefined" || typeof hashKey =="undefined" || typeof dataValue == "undefined" || dataValue =="" || module == "" || hashKey == ""){
        return false;
    }
    if (this.storageAvailable('localStorage')) {
        localStorage.setItem(module+"-"+hashKey, JSON.stringify(dataValue));
    }
    else {
        this.localCache[module+"-"+hashKey]=dataValue;
    }
    return true;
}//setCachedData


/**
 * Deletes a value from the cache
 * @param module {string} name of the CitySDK module
 * @param hashKey {string} this is a key that identifies the data. Each module has its own hashing scheme.
 * @return {object} the value of the cached data.  Returns false if nothing found
 */
CitySDK.prototype.deleteCachedData = function(module,hashKey){
    if(typeof module == "undefined" || typeof hashKey =="undefined" || module == "" || hashKey == ""){
        return false;
    }
    if (this.storageAvailable('localStorage')) {
        localStorage.removeItem(module+"-"+hashKey);
    }
    else {
        delete this.localCache[module+"-"+hashKey];
    }
    return true;
}//deleteCachedData



/**
 * Checks to see whether local storage is available
 * @param type {string} the tyoe fo storage being tested. Generally 'localstorage' is used.
 * @return {boolean} true if storage type is available
 */
 CitySDK.prototype.storageAvailable =function(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false;
    }
}