/**
 * @title CitySDK Core
 * @module CitySDK Core
 * @overview This is the core library for the CitySDK.  It houses the ajax mechanics, the caching system, and global data sets (such as state capitals and their coordinate points)
 */


//SDK instance for the callback functions
CitySDK.prototype.sdkInstance = null;


/**
 * Instantiates an instance of the CitySDK object.
 * @constructor
 */
function CitySDK() {
    CitySDK.prototype.sdkInstance = this;

    var idbSupported = false;


    // Initialize Cache System
    if ("indexedDB" in window) {
        // browser support of indexedDB is present
        idbSupported = true;
    } else {
        // Disable cache due to lack of browser support
        this.allowCache = false;
    }

    if (idbSupported && this.allowCache == true) {
        var openRequest = indexedDB.open("CitySDKdb", 1);

        openRequest.onupgradeneeded = function (e) {
            CitySDK.prototype.CitySDKdb = e.target.result;

            if (!CitySDK.prototype.CitySDKdb.objectStoreNames.contains("citySDKCache")) {
                var objectStore = CitySDK.prototype.CitySDKdb.createObjectStore("citySDKCache", {autoIncrement: true});
                objectStore.createIndex("cacheKeys", ["module", "functionName", "hashKey"], {unique: false});
            }

        }

        openRequest.onsuccess = function (e) {
            CitySDK.prototype.CitySDKdb = e.target.result;
        }

        openRequest.onerror = function (e) {
            console.log("Error");
            console.dir(e);
        }

    }

}


//Settings
/**
 * Version number of the CitySDK Core
 */
CitySDK.prototype.version = 1.5;

/**
 * Toggles whether CitySDK will attempt to cache data to reduce the API call requirements
 */
CitySDK.prototype.allowCache = true;
CitySDK.prototype.CitySDKdb;




/**
 * Stores each module
 * @type {object}
 */
CitySDK.prototype.modules = {};


// Polyfills
if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}


/**
 * Makes an AJAX call
 * @param {string} url URL to request
 * @return {promise} Returns a standard ajax promise
 */
CitySDK.prototype.ajaxRequest = function (url) {
    return jQuery.ajax({
        type: 'GET',
        dataType: 'text',
        contentType: 'text/plain',
        url: url
    });
};

/**
 * Makes an AJAX call (using jsonp)
 * @param {string} url URL to request
 * @return {object} Returns a standard ajax promise
 */
CitySDK.prototype.jsonpRequest = function (url) {
    return jQuery.ajax({
        type: 'GET',
        dataType: "jsonp",
        contentType: 'text/plain',
        url: url
    });
};

/**
 * Make an AJAX call (using POST)
 * @param {string} url
 * @param {object} data
 * @returns {*}
 */
CitySDK.prototype.postRequest = function (url, data) {
    return jQuery.ajax({
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
 * @param {string} stateString Name or 2-letter code of the state (case insensitive)
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
 * @param {object} request the request being made to the module
 * @return {object} the updated request
 */
CitySDK.prototype.parseRequestLatLng = function (request) {
    //Allow the users to use either x,y; lat,lng; latitude,longitude to specify co-ordinates
    if (!("lat" in request)) {
        if ("latitude" in request) {
            request.lat = request.latitude;
            delete request.latitude;
        } else if ("y" in request) {
            request.lat = request.y;
            delete request.y;
        }
    }

    if (!("lng" in request)) {
        if ("longitude" in request) {
            request.lng = request.longitude;
            delete request.longitude;
        } else if ("x" in request) {
            request.lng = request.x;
            delete request.x;
        }
    }

    return request;
};


// Caching Systems

/**
 * Retrieves a value from the cache
 * @param {string} module name of the CitySDK module
 * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
 * @return {object} the value of the cached data.  Returns false if nothing found
 */
CitySDK.prototype.getCachedData = function (module, functionName, hashKey, callback) {
    if (typeof module == "undefined" || typeof hashKey == "undefined" || module == "" || hashKey == "" || CitySDK.prototype.sdkInstance.allowCache == false) {
        return false;
    }


    var openRequest = indexedDB.open("CitySDKdb", 1);

    openRequest.onsuccess = function (e) {
        CitySDK.prototype.CitySDKdb = e.target.result;



        // In your query section
        var transaction = CitySDK.prototype.CitySDKdb.transaction(["citySDKCache"], 'readonly');
        var store = transaction.objectStore('citySDKCache');
        var index = store.index('cacheKeys');
        // Select the first matching record
        var request = index.get(IDBKeyRange.only([module, functionName, hashKey]));

        request.onerror = function (event) {
            return null;
        };
        request.onsuccess = function (e) {

            var result = e.target.result;
            if (result) {
                //console.log(result.data[0]);
                if (typeof callback != 'undefined' && typeof callback == 'function') {
                    callback(result.data);
                }
                return result.data;
            } else {
                if (typeof callback != 'undefined' && typeof callback == 'function') {
                    callback(null);
                }
                return null;
            }
        }


    }




}//getCachedDate

/**
 * Creates and/or Updates a value from the cache
 * @param {string} module name of the CitySDK module
 * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
 * @param {object} dataValue this is the data being stored.  It should be an object that contains both the specific data and any meta information needed to invalidate it.
 * @return {object} the value of the cached data.  Returns false if nothing found
 */
CitySDK.prototype.setCachedData = function (module, functionName, hashKey, dataValue) {
    if (typeof module == "undefined" || typeof hashKey == "undefined" || typeof functionName == "undefined" || typeof dataValue == "undefined" || dataValue == "" || module == "" || hashKey == "" || CitySDK.prototype.sdkInstance.allowCache == false) {
        return false;
    }

    // CitySDKdb CitySDKdb citySDKCache
    var storeData = {"module": module, "functionName": functionName, "hashKey": hashKey, "data": dataValue}
    var openRequest = indexedDB.open("CitySDKdb", 1);

    openRequest.onsuccess = function (e) {
        CitySDK.prototype.CitySDKdb = e.target.result;
        var transaction = CitySDK.prototype.CitySDKdb.transaction(["citySDKCache"], "readwrite");
        var store = transaction.objectStore("citySDKCache");
        var request = store.add(storeData);
    }



    return true;
}//setCachedData


/**
 * Deletes a value from the cache
 * @param {string} module name of the CitySDK module
 * @param {string} hashKey this is a key that identifies the data. Each module has its own hashing scheme.
 * @return {object} the value of the cached data.  Returns false if nothing found
 */
CitySDK.prototype.deleteCachedData = function (module, functionName, hashKey) {
    if (typeof module == "undefined" || typeof hashKey == "undefined" || module == "" || hashKey == "" || CitySDK.prototype.sdkInstance.allowCache == false) {
        return false;
    }

    return true;
}//deleteCachedData


/**
 * Checks to see whether local storage is available
 * @param {string} type the tyoe fo storage being tested. Generally 'localstorage' is used.
 * @return {boolean} true if storage type is available
 */
CitySDK.prototype.storageAvailable = function (type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return false;
    }
}