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
        callback(null);
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

// CitySDKdb CitySDKdb citySDKCache
    var storeData = {"module": module, "functionName": functionName, "hashKey": hashKey}
    var openRequest = indexedDB.open("CitySDKdb", 1);

    openRequest.onsuccess = function (e) {
        CitySDK.prototype.CitySDKdb = e.target.result;
        var transaction = CitySDK.prototype.CitySDKdb.transaction(["citySDKCache"], "readwrite");
        var store = transaction.objectStore("citySDKCache");
        var request = store.delete(IDBKeyRange.only([module, functionName, hashKey]));
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

/**
 * Converts ESRI JSON to GeoJSON
 * @param {string} esriJSON
 * @returns {{type: string, features: Array}}
 */
CitySDK.prototype.ESRItoGEO = function (esriJSON) {
    var json = jQuery.parseJSON(esriJSON);
    if (!("features" in json)) {
        // data is missing
        return false;
    }
    var features = json.features;

    var geojson = {
        "type": "FeatureCollection",
        "features": []
    };

    for (var i = 0; i < features.length; i++) {
        features[i].spatialReference = json.spatialReference;
        geojson.features.push(Terraformer.ArcGIS.parse(features[i]));
    }

    return geojson;
};

/**
 * Converts geoJSON to ESRI JSON
 * This is functionally an alias of Terraformer.ArcGIS.convert (see https://github.com/Esri/Terraformer for details)
 * @param {string} geoJSON
 * @returns {object}
 */
CitySDK.prototype.GEOtoESRI = function (geoJSON) {
    return Terraformer.ArcGIS.convert(geoJSON);
};


/**
 * ESRI Modules
 * These modules come from https://github.com/Esri/Terraformer and serve to convert ArcGIS JSON to GeoJSON for the
 * Census GeoRequest
 */

/*! Terraformer JS - 1.0.5 - 2015-01-29
 *   https://github.com/esri/Terraformer
 *   Copyright (c) 2015 Environmental Systems Research Institute, Inc.
 *   Licensed MIT */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports && (exports = module.exports = b()), "object" == typeof window && (a.Terraformer = b())
}(this, function () {
    function a(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function b() {
        var a = Array.prototype.slice.apply(arguments);
        void 0 !== typeof console && console.warn && console.warn.apply(console, a)
    }

    function c(a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }

    function d(a) {
        if (a.type)switch (a.type) {
            case"Point":
                return [a.coordinates[0], a.coordinates[1], a.coordinates[0], a.coordinates[1]];
            case"MultiPoint":
                return g(a.coordinates);
            case"LineString":
                return g(a.coordinates);
            case"MultiLineString":
                return e(a.coordinates);
            case"Polygon":
                return e(a.coordinates);
            case"MultiPolygon":
                return f(a.coordinates);
            case"Feature":
                return a.geometry ? d(a.geometry) : null;
            case"FeatureCollection":
                return h(a);
            case"GeometryCollection":
                return i(a);
            default:
                throw new Error("Unknown type: " + a.type)
        }
        return null
    }

    function e(a) {
        for (var b = null, c = null, d = null, e = null, f = 0; f < a.length; f++)for (var g = a[f], h = 0; h < g.length; h++) {
            var i = g[h], j = i[0], k = i[1];
            null === b ? b = j : b > j && (b = j), null === c ? c = j : j > c && (c = j), null === d ? d = k : d > k && (d = k), null === e ? e = k : k > e && (e = k)
        }
        return [b, d, c, e]
    }

    function f(a) {
        for (var b = null, c = null, d = null, e = null, f = 0; f < a.length; f++)for (var g = a[f], h = 0; h < g.length; h++)for (var i = g[h], j = 0; j < i.length; j++) {
            var k = i[j], l = k[0], m = k[1];
            null === b ? b = l : b > l && (b = l), null === c ? c = l : l > c && (c = l), null === d ? d = m : d > m && (d = m), null === e ? e = m : m > e && (e = m)
        }
        return [b, d, c, e]
    }

    function g(a) {
        for (var b = null, c = null, d = null, e = null, f = 0; f < a.length; f++) {
            var g = a[f], h = g[0], i = g[1];
            null === b ? b = h : b > h && (b = h), null === c ? c = h : h > c && (c = h), null === d ? d = i : d > i && (d = i), null === e ? e = i : i > e && (e = i)
        }
        return [b, d, c, e]
    }

    function h(a) {
        for (var b, c = [], e = a.features.length - 1; e >= 0; e--)b = d(a.features[e].geometry), c.push([b[0], b[1]]), c.push([b[2], b[3]]);
        return g(c)
    }

    function i(a) {
        for (var b, c = [], e = a.geometries.length - 1; e >= 0; e--)b = d(a.geometries[e]), c.push([b[0], b[1]]), c.push([b[2], b[3]]);
        return g(c)
    }

    function k(a) {
        var b = d(a);
        return {x: b[0], y: b[1], w: Math.abs(b[0] - b[2]), h: Math.abs(b[1] - b[3])}
    }

    function l(a) {
        return a * W
    }

    function m(a) {
        return a * X
    }

    function n(a, b) {
        for (var c = 0; c < a.length; c++)"number" == typeof a[c][0] && (a[c] = b(a[c])), "object" == typeof a[c] && (a[c] = n(a[c], b));
        return a
    }

    function o(a) {
        var b = a[0], c = a[1];
        return [l(b / V) - 360 * Math.floor((l(b / V) + 180) / 360), l(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * c / V)))]
    }

    function p(a) {
        var b = a[0], c = Math.max(Math.min(a[1], 89.99999), -89.99999);
        return [m(b) * V, V / 2 * Math.log((1 + Math.sin(m(c))) / (1 - Math.sin(m(c))))]
    }

    function q(a, b, c) {
        if ("Point" === a.type)a.coordinates = b(a.coordinates); else if ("Feature" === a.type)a.geometry = q(a.geometry, b, !0); else if ("FeatureCollection" === a.type)for (var d = 0; d < a.features.length; d++)a.features[d] = q(a.features[d], b, !0); else if ("GeometryCollection" === a.type)for (var e = 0; e < a.geometries.length; e++)a.geometries[e] = q(a.geometries[e], b, !0); else a.coordinates = n(a.coordinates, b);
        return c || b === p && (a.crs = Y), b === o && delete a.crs, a
    }

    function r(a) {
        return q(a, p)
    }

    function s(a) {
        return q(a, o)
    }

    function t(a, b) {
        return b > a ? -1 : a > b ? 1 : 0
    }

    function u(a, b) {
        return a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0
    }

    function v(a, b, c) {
        return t((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]), 0)
    }

    function w(a, b) {
        var c = b[0] - a[0], d = b[1] - a[1];
        return c * c + d * d
    }

    function x(a, b) {
        var c = b;
        for (var d in a) {
            var e = v(b, c, a[d]);
            (-1 === e || 0 === e && w(b, a[d]) > w(b, c)) && (c = a[d])
        }
        return c
    }

    function y(a) {
        if (0 === a.length)return [];
        if (1 === a.length)return a;
        for (var b = [a.sort(u)[0]], c = 0; c < b.length; c++) {
            var d = x(a, b[c]);
            d !== b[0] && b.push(d)
        }
        return b
    }

    function z(a) {
        for (var b, c = 0; c < a.length - 3; c++) {
            var d = a[c], e = a[c + 1], f = a[c + 2], g = [e[0] - d[0], e[1] - d[1]], h = f[0] * g[1] - f[1] * g[0] + g[0] * d[1] - g[1] * d[0];
            if (0 === c)b = 0 > h ? !0 : !1; else if (b && h > 0 || !b && 0 > h)return !1
        }
        return !0
    }

    function A(a, b) {
        for (var c = !1, d = -1, e = a.length, f = e - 1; ++d < e; f = d)(a[d][1] <= b[1] && b[1] < a[f][1] || a[f][1] <= b[1] && b[1] < a[d][1]) && b[0] < (a[f][0] - a[d][0]) * (b[1] - a[d][1]) / (a[f][1] - a[d][1]) + a[d][0] && (c = !c);
        return c
    }

    function B(a, b) {
        if (a && a.length) {
            if (1 === a.length)return A(a[0], b);
            if (A(a[0], b)) {
                for (var c = 1; c < a.length; c++)if (A(a[c], b))return !1;
                return !0
            }
            return !1
        }
        return !1
    }

    function C(a, b, c, d) {
        var e = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]), f = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]), g = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
        if (0 !== g) {
            var h = e / g, i = f / g;
            if (h >= 0 && 1 >= h && i >= 0 && 1 >= i)return !0
        }
        return !1
    }

    function D(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }

    function E(a, b) {
        if (D(a[0][0])) {
            if (D(b[0][0])) {
                for (var c = 0; c < a.length - 1; c++)for (var d = 0; d < b.length - 1; d++)if (C(a[c], a[c + 1], b[d], b[d + 1]))return !0
            } else for (var e = 0; e < b.length; e++)if (E(a, b[e]))return !0
        } else for (var f = 0; f < a.length; f++)if (E(a[f], b))return !0;
        return !1
    }

    function F(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c].slice();
            G(d[0], d[d.length - 1]) === !1 && d.push(d[0]), b.push(d)
        }
        return b
    }

    function G(a, b) {
        for (var c = 0; c < a.length; c++)if (a[c] !== b[c])return !1;
        return !0
    }

    function H(a, b) {
        if (a.length !== b.length)return !1;
        for (var c = a.slice().sort(u), d = b.slice().sort(u), e = 0; e < c.length; e++) {
            if (c[e].length !== d[e].length)return !1;
            for (var f = 0; f < c.length; f++)if (c[e][f] !== d[e][f])return !1
        }
        return !0
    }

    function I(a) {
        if (a)switch (a.type) {
            case"Point":
                return new J(a);
            case"MultiPoint":
                return new K(a);
            case"LineString":
                return new L(a);
            case"MultiLineString":
                return new M(a);
            case"Polygon":
                return new N(a);
            case"MultiPolygon":
                return new O(a);
            case"Feature":
                return new P(a);
            case"FeatureCollection":
                return new Q(a);
            case"GeometryCollection":
                return new R(a);
            default:
                throw new Error("Unknown type: " + a.type)
        }
    }

    function J(b) {
        var d = Array.prototype.slice.call(arguments);
        if (b && "Point" === b.type && b.coordinates)c(this, b); else if (b && a(b))this.coordinates = b; else {
            if (!(d.length >= 2))throw"Terraformer: invalid input for Terraformer.Point";
            this.coordinates = d
        }
        this.type = "Point"
    }

    function K(b) {
        if (b && "MultiPoint" === b.type && b.coordinates)c(this, b); else {
            if (!a(b))throw"Terraformer: invalid input for Terraformer.MultiPoint";
            this.coordinates = b
        }
        this.type = "MultiPoint"
    }

    function L(b) {
        if (b && "LineString" === b.type && b.coordinates)c(this, b); else {
            if (!a(b))throw"Terraformer: invalid input for Terraformer.LineString";
            this.coordinates = b
        }
        this.type = "LineString"
    }

    function M(b) {
        if (b && "MultiLineString" === b.type && b.coordinates)c(this, b); else {
            if (!a(b))throw"Terraformer: invalid input for Terraformer.MultiLineString";
            this.coordinates = b
        }
        this.type = "MultiLineString"
    }

    function N(b) {
        if (b && "Polygon" === b.type && b.coordinates)c(this, b); else {
            if (!a(b))throw"Terraformer: invalid input for Terraformer.Polygon";
            this.coordinates = b
        }
        this.type = "Polygon"
    }

    function O(b) {
        if (b && "MultiPolygon" === b.type && b.coordinates)c(this, b); else {
            if (!a(b))throw"Terraformer: invalid input for Terraformer.MultiPolygon";
            this.coordinates = b
        }
        this.type = "MultiPolygon"
    }

    function P(a) {
        if (a && "Feature" === a.type)c(this, a); else {
            if (!(a && a.type && a.coordinates))throw"Terraformer: invalid input for Terraformer.Feature";
            this.geometry = a
        }
        this.type = "Feature"
    }

    function Q(b) {
        if (b && "FeatureCollection" === b.type && b.features)c(this, b); else {
            if (!a(b))throw"Terraformer: invalid input for Terraformer.FeatureCollection";
            this.features = b
        }
        this.type = "FeatureCollection"
    }

    function R(b) {
        if (b && "GeometryCollection" === b.type && b.geometries)c(this, b); else if (a(b))this.geometries = b; else {
            if (!b.coordinates || !b.type)throw"Terraformer: invalid input for Terraformer.GeometryCollection";
            this.type = "GeometryCollection", this.geometries = [b]
        }
        this.type = "GeometryCollection"
    }

    function S(a, b, c) {
        for (var d = p(a), e = c || 64, f = {type: "Polygon", coordinates: [[]]}, g = 1; e >= g; g++) {
            var h = g * (360 / e) * Math.PI / 180;
            f.coordinates[0].push([d[0] + b * Math.cos(h), d[1] + b * Math.sin(h)])
        }
        return f.coordinates = F(f.coordinates), s(f)
    }

    function T(a, b, d) {
        var e = d || 64, f = b || 250;
        if (!a || a.length < 2 || !f || !e)throw new Error("Terraformer: missing parameter for Terraformer.Circle");
        c(this, new P({type: "Feature", geometry: S(a, f, e), properties: {radius: f, center: a, steps: e}}))
    }

    var U = {}, V = 6378137, W = 57.29577951308232, X = .017453292519943, Y = {
        type: "link",
        properties: {href: "http://spatialreference.org/ref/sr-org/6928/ogcwkt/", type: "ogcwkt"}
    }, Z = {
        type: "link",
        properties: {href: "http://spatialreference.org/ref/epsg/4326/ogcwkt/", type: "ogcwkt"}
    }, $ = ["length"];
    return I.prototype.toMercator = function () {
        return r(this)
    }, I.prototype.toGeographic = function () {
        return s(this)
    }, I.prototype.envelope = function () {
        return k(this)
    }, I.prototype.bbox = function () {
        return d(this)
    }, I.prototype.convexHull = function () {
        var a, b, c = [];
        if ("Point" === this.type)return null;
        if ("LineString" === this.type || "MultiPoint" === this.type) {
            if (!(this.coordinates && this.coordinates.length >= 3))return null;
            c = this.coordinates
        } else if ("Polygon" === this.type || "MultiLineString" === this.type) {
            if (!(this.coordinates && this.coordinates.length > 0))return null;
            for (a = 0; a < this.coordinates.length; a++)c = c.concat(this.coordinates[a]);
            if (c.length < 3)return null
        } else if ("MultiPolygon" === this.type) {
            if (!(this.coordinates && this.coordinates.length > 0))return null;
            for (a = 0; a < this.coordinates.length; a++)for (b = 0; b < this.coordinates[a].length; b++)c = c.concat(this.coordinates[a][b]);
            if (c.length < 3)return null
        } else if ("Feature" === this.type) {
            var d = new I(this.geometry);
            return d.convexHull()
        }
        return new N({type: "Polygon", coordinates: F([y(c)])})
    }, I.prototype.toJSON = function () {
        var a = {};
        for (var b in this)this.hasOwnProperty(b) && -1 === $.indexOf(b) && (a[b] = this[b]);
        return a.bbox = d(this), a
    }, I.prototype.contains = function (a) {
        return new I(a).within(this)
    }, I.prototype.within = function (a) {
        var b, c, d;
        if ("Point" === a.type && "Point" === this.type)return G(this.coordinates, a.coordinates);
        if ("MultiLineString" === a.type && "Point" === this.type)for (c = 0; c < a.coordinates.length; c++) {
            var e = {type: "LineString", coordinates: a.coordinates[c]};
            if (this.within(e))return !0
        }
        if (("LineString" === a.type || "MultiPoint" === a.type) && "Point" === this.type)for (c = 0; c < a.coordinates.length; c++) {
            if (this.coordinates.length !== a.coordinates[c].length)return !1;
            if (G(this.coordinates, a.coordinates[c]))return !0
        }
        if ("Polygon" === a.type) {
            if ("Polygon" === this.type) {
                if (a.coordinates.length === this.coordinates.length)for (c = 0; c < this.coordinates.length; c++)if (H(this.coordinates[c], a.coordinates[c]))return !0;
                return this.coordinates.length && B(a.coordinates, this.coordinates[0][0]) ? !E(F(this.coordinates), F(a.coordinates)) : !1
            }
            if ("Point" === this.type)return B(a.coordinates, this.coordinates);
            if ("LineString" === this.type || "MultiPoint" === this.type) {
                if (!this.coordinates || 0 === this.coordinates.length)return !1;
                for (c = 0; c < this.coordinates.length; c++)if (B(a.coordinates, this.coordinates[c]) === !1)return !1;
                return !0
            }
            if ("MultiLineString" === this.type) {
                for (c = 0; c < this.coordinates.length; c++) {
                    var f = new L(this.coordinates[c]);
                    if (f.within(a) === !1)return d++, !1
                }
                return !0
            }
            if ("MultiPolygon" === this.type) {
                for (c = 0; c < this.coordinates.length; c++) {
                    var g = new I({type: "Polygon", coordinates: this.coordinates[c]});
                    if (g.within(a) === !1)return !1
                }
                return !0
            }
        }
        if ("MultiPolygon" === a.type) {
            if ("Point" === this.type) {
                if (a.coordinates.length)for (c = 0; c < a.coordinates.length; c++)if (b = a.coordinates[c], B(b, this.coordinates) && E([this.coordinates], a.coordinates) === !1)return !0;
                return !1
            }
            if ("Polygon" === this.type) {
                for (c = 0; c < this.coordinates.length; c++)if (a.coordinates[c].length === this.coordinates.length)for (j = 0; j < this.coordinates.length; j++)if (H(this.coordinates[j], a.coordinates[c][j]))return !0;
                if (E(this.coordinates, a.coordinates) === !1 && a.coordinates.length) {
                    for (c = 0; c < a.coordinates.length; c++)b = a.coordinates[c], d = B(b, this.coordinates[0][0]) === !1 ? !1 : !0;
                    return d
                }
            } else if ("LineString" === this.type || "MultiPoint" === this.type)for (c = 0; c < a.coordinates.length; c++) {
                var h = {type: "Polygon", coordinates: a.coordinates[c]};
                return this.within(h) ? !0 : !1
            } else {
                if ("MultiLineString" === this.type) {
                    for (c = 0; c < this.coordinates.length; c++) {
                        var i = new L(this.coordinates[c]);
                        if (i.within(a) === !1)return !1
                    }
                    return !0
                }
                if ("MultiPolygon" === this.type) {
                    for (c = 0; c < a.coordinates.length; c++) {
                        var k = {type: "Polygon", coordinates: a.coordinates[c]};
                        if (this.within(k) === !1)return !1
                    }
                    return !0
                }
            }
        }
        return !1
    }, I.prototype.intersects = function (a) {
        "Feature" === a.type && (a = a.geometry);
        var c = new I(a);
        if (this.within(a) || c.within(this))return !0;
        if ("Point" !== this.type && "MultiPoint" !== this.type && "Point" !== a.type && "MultiPoint" !== a.type)return E(this.coordinates, a.coordinates);
        if ("Feature" === this.type) {
            var d = new I(this.geometry);
            return d.intersects(a)
        }
        return b("Type " + this.type + " to " + a.type + " intersection is not supported by intersects"), !1
    }, J.prototype = new I, J.prototype.constructor = J, K.prototype = new I, K.prototype.constructor = K, K.prototype.forEach = function (a) {
        for (var b = 0; b < this.coordinates.length; b++)a.apply(this, [this.coordinates[b], b, this.coordinates]);
        return this
    }, K.prototype.addPoint = function (a) {
        return this.coordinates.push(a), this
    }, K.prototype.insertPoint = function (a, b) {
        return this.coordinates.splice(b, 0, a), this
    }, K.prototype.removePoint = function (a) {
        return "number" == typeof a ? this.coordinates.splice(a, 1) : this.coordinates.splice(this.coordinates.indexOf(a), 1), this
    }, K.prototype.get = function (a) {
        return new J(this.coordinates[a])
    }, L.prototype = new I, L.prototype.constructor = L, L.prototype.addVertex = function (a) {
        return this.coordinates.push(a), this
    }, L.prototype.insertVertex = function (a, b) {
        return this.coordinates.splice(b, 0, a), this
    }, L.prototype.removeVertex = function (a) {
        return this.coordinates.splice(a, 1), this
    }, M.prototype = new I, M.prototype.constructor = M, M.prototype.forEach = function (a) {
        for (var b = 0; b < this.coordinates.length; b++)a.apply(this, [this.coordinates[b], b, this.coordinates])
    }, M.prototype.get = function (a) {
        return new L(this.coordinates[a])
    }, N.prototype = new I, N.prototype.constructor = N, N.prototype.addVertex = function (a) {
        return this.insertVertex(a, this.coordinates[0].length - 1), this
    }, N.prototype.insertVertex = function (a, b) {
        return this.coordinates[0].splice(b, 0, a), this
    }, N.prototype.removeVertex = function (a) {
        return this.coordinates[0].splice(a, 1), this
    }, N.prototype.close = function () {
        this.coordinates = F(this.coordinates)
    }, N.prototype.hasHoles = function () {
        return this.coordinates.length > 1
    }, N.prototype.holes = function () {
        if (holes = [], this.hasHoles())for (var a = 1; a < this.coordinates.length; a++)holes.push(new N([this.coordinates[a]]));
        return holes
    }, O.prototype = new I, O.prototype.constructor = O, O.prototype.forEach = function (a) {
        for (var b = 0; b < this.coordinates.length; b++)a.apply(this, [this.coordinates[b], b, this.coordinates])
    }, O.prototype.get = function (a) {
        return new N(this.coordinates[a])
    }, O.prototype.close = function () {
        var a = [];
        return this.forEach(function (b) {
            a.push(F(b))
        }), this.coordinates = a, this
    }, P.prototype = new I, P.prototype.constructor = P, Q.prototype = new I, Q.prototype.constructor = Q, Q.prototype.forEach = function (a) {
        for (var b = 0; b < this.features.length; b++)a.apply(this, [this.features[b], b, this.features])
    }, Q.prototype.get = function (a) {
        var b;
        return this.forEach(function (c) {
            c.id === a && (b = c)
        }), new P(b)
    }, R.prototype = new I, R.prototype.constructor = R, R.prototype.forEach = function (a) {
        for (var b = 0; b < this.geometries.length; b++)a.apply(this, [this.geometries[b], b, this.geometries])
    }, R.prototype.get = function (a) {
        return new I(this.geometries[a])
    }, T.prototype = new I, T.prototype.constructor = T, T.prototype.recalculate = function () {
        return this.geometry = S(this.properties.center, this.properties.radius, this.properties.steps), this
    }, T.prototype.center = function (a) {
        return a && (this.properties.center = a, this.recalculate()), this.properties.center
    }, T.prototype.radius = function (a) {
        return a && (this.properties.radius = a, this.recalculate()), this.properties.radius
    }, T.prototype.steps = function (a) {
        return a && (this.properties.steps = a, this.recalculate()), this.properties.steps
    }, T.prototype.toJSON = function () {
        var a = I.prototype.toJSON.call(this);
        return a
    }, U.Primitive = I, U.Point = J, U.MultiPoint = K, U.LineString = L, U.MultiLineString = M, U.Polygon = N, U.MultiPolygon = O, U.Feature = P, U.FeatureCollection = Q, U.GeometryCollection = R, U.Circle = T, U.toMercator = r, U.toGeographic = s, U.Tools = {}, U.Tools.positionToMercator = p, U.Tools.positionToGeographic = o, U.Tools.applyConverter = q, U.Tools.toMercator = r, U.Tools.toGeographic = s, U.Tools.createCircle = S, U.Tools.calculateBounds = d, U.Tools.calculateEnvelope = k, U.Tools.coordinatesContainPoint = A, U.Tools.polygonContainsPoint = B, U.Tools.arraysIntersectArrays = E, U.Tools.coordinatesContainPoint = A, U.Tools.coordinatesEqual = H, U.Tools.convexHull = y, U.Tools.isConvex = z, U.MercatorCRS = Y, U.GeographicCRS = Z, U
});
/*! Terraformer ArcGIS Parser - 1.0.4 - 2014-06-17
 *   https://github.com/esri/terraformer-arcgis-parser
 *   Copyright (c) 2014 Esri, Inc.
 *   Licensed MIT */
!function (a, b) {
    if ("object" == typeof module && "object" == typeof module.exports && (exports = module.exports = b(require("terraformer"))), "object" == typeof a.navigator) {
        if (!a.Terraformer)throw new Error("Terraformer.ArcGIS requires the core Terraformer library. https://github.com/esri/Terraformer");
        a.Terraformer.ArcGIS = b(a.Terraformer)
    }
}(this, function (a) {
    function b(a) {
        var b, c, d, e, f = 0, g = 0, h = [];
        d = a.match(/((\+|\-)[^\+\-]+)/g), e = parseInt(d[0], 32);
        for (var i = 1; i < d.length; i += 2)b = parseInt(d[i], 32) + f, f = b, c = parseInt(d[i + 1], 32) + g, g = c, h.push([b / e, c / e]);
        return h
    }

    function c(a) {
        return d(a[0], a[a.length - 1]) || a.push(a[0]), a
    }

    function d(a, b) {
        for (var c = 0; c < a.length; c++)if (a[c] !== b[c])return !1;
        return !0
    }

    function e(a) {
        var b = {};
        for (var c in a)a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }

    function f(a) {
        var b, c = 0, d = 0, e = a.length, f = a[d];
        for (d; e - 1 > d; d++)b = a[d + 1], c += (b[0] - f[0]) * (b[1] + f[1]), f = b;
        return c >= 0
    }

    function g(a) {
        var b = [], d = a.slice(0), e = c(d.shift().slice(0));
        if (e.length >= 4) {
            f(e) || e.reverse(), b.push(e);
            for (var g = 0; g < d.length; g++) {
                var h = c(d[g].slice(0));
                h.length >= 4 && (f(h) && h.reverse(), b.push(h))
            }
        }
        return b
    }

    function h(a) {
        for (var b = [], c = 0; c < a.length; c++)for (var d = g(a[c]), e = d.length - 1; e >= 0; e--) {
            var f = d[e].slice(0);
            b.push(f)
        }
        return b
    }

    function i(b, c) {
        var d = a.Tools.arraysIntersectArrays(b, c), e = a.Tools.coordinatesContainPoint(b, c[0]);
        return !d && e ? !0 : !1
    }

    function j(a) {
        for (var b = [], d = [], e = 0; e < a.length; e++) {
            var g = c(a[e].slice(0));
            if (!(g.length < 4))if (f(g)) {
                var h = [g];
                b.push(h)
            } else d.push(g)
        }
        for (; d.length;) {
            for (var j = d.pop(), k = !1, l = b.length - 1; l >= 0; l--) {
                var m = b[l][0];
                if (i(m, j)) {
                    b[l].push(j), k = !0;
                    break
                }
            }
            k || b.push([j.reverse()])
        }
        return 1 === b.length ? {type: "Polygon", coordinates: b[0]} : {type: "MultiPolygon", coordinates: b}
    }

    function k(c, d) {
        var f = {};
        d = d || {}, d.idAttribute = d.idAttribute || void 0, "number" == typeof c.x && "number" == typeof c.y && (f.type = "Point", f.coordinates = [c.x, c.y], (c.z || c.m) && f.coordinates.push(c.z), c.m && f.coordinates.push(c.m)), c.points && (f.type = "MultiPoint", f.coordinates = c.points.slice(0)), c.paths && (1 === c.paths.length ? (f.type = "LineString", f.coordinates = c.paths[0].slice(0)) : (f.type = "MultiLineString", f.coordinates = c.paths.slice(0))), c.rings && (f = j(c.rings.slice(0))), (c.compressedGeometry || c.geometry || c.attributes) && (f.type = "Feature", c.compressedGeometry && (c.geometry = {paths: [b(c.compressedGeometry)]}), f.geometry = c.geometry ? k(c.geometry) : null, f.properties = c.attributes ? e(c.attributes) : null, c.attributes && (f.id = c.attributes[d.idAttribute] || c.attributes.OBJECTID || c.attributes.FID));
        var g = c.geometry ? c.geometry.spatialReference : c.spatialReference;
        return g && 102100 === g.wkid && (f = a.toGeographic(f)), new a.Primitive(f)
    }

    function l(b, c) {
        var d;
        c = c || {};
        var f = c.idAttribute || "OBJECTID";
        d = c.sr ? {wkid: c.sr} : b && b.crs === a.MercatorCRS ? {wkid: 102100} : {wkid: 4326};
        var i, j = {};
        switch (b.type) {
            case"Point":
                j.x = b.coordinates[0], j.y = b.coordinates[1], b.coordinates[2] && (j.z = b.coordinates[2]), b.coordinates[3] && (j.m = b.coordinates[3]), j.spatialReference = d;
                break;
            case"MultiPoint":
                j.points = b.coordinates.slice(0), j.spatialReference = d;
                break;
            case"LineString":
                j.paths = [b.coordinates.slice(0)], j.spatialReference = d;
                break;
            case"MultiLineString":
                j.paths = b.coordinates.slice(0), j.spatialReference = d;
                break;
            case"Polygon":
                j.rings = g(b.coordinates.slice(0)), j.spatialReference = d;
                break;
            case"MultiPolygon":
                j.rings = h(b.coordinates.slice(0)), j.spatialReference = d;
                break;
            case"Feature":
                b.geometry && (j.geometry = l(b.geometry, c)), j.attributes = b.properties ? e(b.properties) : {}, j.attributes[f] = b.id;
                break;
            case"FeatureCollection":
                for (j = [], i = 0; i < b.features.length; i++)j.push(l(b.features[i], c));
                break;
            case"GeometryCollection":
                for (j = [], i = 0; i < b.geometries.length; i++)j.push(l(b.geometries[i], c))
        }
        return j
    }

    function m(c) {
        return new a.LineString(b(c))
    }

    var n = {};
    return n.parse = k, n.convert = l, n.toGeoJSON = k, n.fromGeoJSON = l, n.parseCompressedGeometry = m, n
});