/**
 * @title CitySDK ArcGIS API Module
 * @module CitySDK ArcGIS API Module
 * This module requires a key from http://www.arcgis.gov/
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.arcgis = new arcgisModule();

/**
 * Instantiates an instance of the CitySDK ArcGIS object.
 * @constructor
 */
function arcgisModule() {
    this.enabled = false;
};

/**
 * Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.
 *
 * @param {string} apiKey The census API key.
 * @returns {boolean} True if enabled, false if not enabled.
 */
arcgisModule.prototype.enable = function(apiKey) {
    this.apiKey = apiKey;
    if(CitySDK.prototype.sdkInstance.version >= arcgisModule.prototype.minCoreVersionRequired){
        this.enabled = true;
        return true;
    }else{
        this.enabled = false;
        return false;
    }
};

// Version Numbers
arcgisModule.prototype.version = 1.0;
arcgisModule.prototype.minCoreVersionRequired = 1.5;

// Cache Lifespan
arcgisModule.prototype.cacheLife = 300000; // Twenty Minutes.  Note - unlike other modules, this only triggers WHETHER to check the last-edit date for a series.

// Endpoint URLS
arcgisModule.prototype.DEFAULT_ENDPOINTS = {};
arcgisModule.prototype.DEFAULT_ENDPOINTS.apiURL =  "//tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/";



/**
 * Call which returns category listings from the dataset explorer
 *
 * @param {object} request
 * Request should specify category. If no category specified, will default to the root list of datasets
 * <pre><code>{
 *      category: 05
 * }</code></pre>
 * @param {function} callback
 */
arcgisModule.prototype.seriesRequest = function(request, callback) {
    var intermediate = JSON.parse(JSON.stringify(request));
    var request = intermediate;

    var targetURL = this.DEFAULT_ENDPOINTS.apiURL;
    if('url' in request){
        targetURL = request.url;
    }
    var arcURL = targetURL+ "ArcGIS/rest/services?f=pjson";

    var cacheKey = JSON.stringify(request) + arcURL.toString();

    CitySDK.prototype.sdkInstance.getCachedData("arcgis", "seriesRequest", cacheKey, function (cachedData) {
        var useCache = false;

        if (cachedData != null) {
            useCache = true;



            if ('cachedTimestamp' in cachedData) {
                // Check for lifespan of data
                var d = new Date();
                var n = d.getTime();

                if (Number(cachedData.cachedTimestamp) + Number(CitySDK.prototype.modules.arcgis.cacheLife) < n) {
                    // cache is too old
                    useCache = false;

                    // delete the cache
                    CitySDK.prototype.sdkInstance.deleteCachedData("arcgis", "seriesRequest", cacheKey);
                } else {
                    // cache is new enough
                    useCache = true;
                }
            }
            if (useCache == true) {
                callback(cachedData);
                return;
            }

        }

        if(useCache == false){

            CitySDK.prototype.sdkInstance.jsonpRequest(arcURL).done(
                function (response) {
                    var d2 = new Date();
                    var n2 = d2.getTime();
                    response.cachedTimestamp = n2;
                    CitySDK.prototype.sdkInstance.setCachedData("arcgis", "seriesRequest", cacheKey, response);
                    callback(response);
                }
            );
        }
    });

};


/**
 * Downloads an API's entire dictionary of levels from the ArcGIS server
 * Example request.
 *
 * {
 *      "url": <optional> optional base url of the ArcGIS server. It will default to the API URL defined in the module.
 *      "api":  <required> This is the name of the API
 * }
 *
 * @param {object} request The JSON request
 * @param {function} callback
 */
arcgisModule.prototype.getLevelDictionary = function(request,callback){
    var intermediate = JSON.parse(JSON.stringify(request));
    if('url' in intermediate){
        var arcURL = intermediate.url;
    }else{
        var arcURL = this.DEFAULT_ENDPOINTS.apiURL;
    }

    if(!('api' in intermediate)){
        console.log("Error, no API specified in request");
        callback(null);
        return false;
    }else{
        var api = intermediate.api;
    }

    var apiPattern = /({api})/;


    var arcURL = arcURL + "arcgis/rest/services/{api}/FeatureServer/?f=pjson";
    arcURL = arcURL.replace(apiPattern, api);

    var cacheKey = arcURL.toString();

    CitySDK.prototype.sdkInstance.getCachedData("arcgis", "getLevelDictionary", cacheKey, function (cachedData) {
        var useCache = false;

        if (cachedData != null) {
            useCache = true;

            if ('cachedTimestamp' in cachedData) {
                // Check for lifespan of data
                var d = new Date();
                var n = d.getTime();

                if (Number(cachedData.cachedTimestamp) + Number(CitySDK.prototype.modules.arcgis.cacheLife) < n) {
                    // cache is too old
                    useCache = false;

                    // delete the cache
                    CitySDK.prototype.sdkInstance.deleteCachedData("arcgis", "getLevelDictionary", cacheKey);
                } else {
                    // cache is new enough
                    useCache = true;
                }
            }
            if (useCache == true) {
                callback(cachedData);
                return;
            }

        }

        if(useCache == false){
            CitySDK.prototype.sdkInstance.ajaxRequest(arcURL).done(
                function (response) {
                    response = jQuery.parseJSON(response);
                    CitySDK.prototype.sdkInstance.setCachedData("census", "getLevelDictionary", cacheKey, response);
                    callback(response);
                }
            );
        }
    });
};


/**
 * Downloads an API's entire dictionary of variables from the ArcGIS server.
 * This function is also used to check the last edit date of the the data itself.
 * Example request.
 *
 * {
 *      "url": <optional> optional base url of the ArcGIS server. It will default to the API URL defined in the module.
 *      "level": <optional> The data level requested. Defaults to 0 if not specified.
 *      "api":  <required> This is the name of the API
 * }
 *
 * @param {object} request The JSON request
 * @param {function} callback
 */
arcgisModule.prototype.getVariableDictionary = function (request, callback) {
    var intermediate = JSON.parse(JSON.stringify(request));
    if('url' in intermediate){
        var arcURL = intermediate.url;
    }else{
        var arcURL = this.DEFAULT_ENDPOINTS.apiURL;
    }

    if(!('api' in intermediate)){
        console.log("Error, no API specified in request");
        callback(null);
        return false;
    }else{
        var api = intermediate.api;
    }

    if('level' in intermediate){
        var level = intermediate.level;
    }else{
        var level = 0;
    }

    var apiPattern = /({api})/;
    var levelPattern = /({level})/;


    var arcURL = arcURL + "arcgis/rest/services/{api}/FeatureServer/{level}?f=pjson";
    arcURL = arcURL.replace(apiPattern, api);
    arcURL = arcURL.replace(levelPattern, level);


    var cacheKey = arcURL.toString();

    CitySDK.prototype.sdkInstance.getCachedData("arcgis", "getVariableDictionary", cacheKey, function (cachedData) {
        var useCache = false;

        if (cachedData != null) {
            useCache = true;

            if ('cachedTimestamp' in cachedData) {
                // Check for lifespan of data
                var d = new Date();
                var n = d.getTime();

                if (Number(cachedData.cachedTimestamp) + Number(CitySDK.prototype.modules.arcgis.cacheLife) < n) {
                    // cache is too old
                    useCache = false;

                    // delete the cache
                    CitySDK.prototype.sdkInstance.deleteCachedData("arcgis", "getVariableDictionary", cacheKey);
                } else {
                    // cache is new enough
                    useCache = true;
                }
            }
            if (useCache == true) {
                callback(cachedData);
                return;
            }

        }

        if(useCache == false){
            CitySDK.prototype.sdkInstance.ajaxRequest(arcURL).done(
                function (response) {
                    response = jQuery.parseJSON(response);
                    CitySDK.prototype.sdkInstance.setCachedData("census", "getVariableDictionary", cacheKey, response);
                    callback(response);
                }
            );
        }
    });
}; // end getVariableDictionary


arcgisModule.prototype.validateVariableList = function (variableArray,dataDescription){
    var vset = [];
    jQuery.each(dataDescription.fields,function(index,value){
        vset.push(value.name);
    });
    var replacementVariableSet = []
    jQuery.each(variableArray,function(index,value){
        if(vset.indexOf(value) != -1){
            replacementVariableSet.push(value);
        }
    });

    return replacementVariableSet;
} // validateVariableList


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
 *      "where":
 *      "containerGeometry": <optional> Must have sublevel true and container flags, this value should be ESRI json and
  *                          marks the boundaries of the query region. You can convery geojson to ESRI via
  *                          CensusModule.prototype.GEOtoESRI
 *
 * }
 *
 * @param {object} request The JSON request
 * @param {function} callback The callback to take the response, which is geoJSON
 */
arcgisModule.prototype.GEORequest = function (requestIn, callback) {}// end GEORequest





/**
 * Processes a data request by looking at a JSON request
 *
 * JSON Requests should include:
 * "api" -
 * "level" -
 * "variables" - Array of variables either by specific name
 * "where" - This is a single string that contains all where clause information
 * "url" -
 * "order" - Array of variables either by specific name to use in an order by clause
 *
 *
 * request = {
 *        "api": "Jobs_Proximity_Index",
 *        "level": "0",
 *        "where": "JOBS_IDX > 50 AND JOBS_IDX < 60",
 *        },
 *        "variables": [
 *            "BLOCKGROUPID",
 *            "JOBS_IDX",
 *        ],
 *
 *    };
 *
 * @param {object} request The JSON object of the request
 * @param {function} callback A callback, which accepts a response parameter
 */
arcgisModule.prototype.APIRequest = function(request, callback) {


    var intermediate = JSON.parse(JSON.stringify(request));
    var request = intermediate;
    var targetURL = this.DEFAULT_ENDPOINTS.apiURL;
    if('url' in request){
        targetURL = request.url;
    }
    var arcURL = targetURL;

    if(!('api' in request)){
        console.log("Error, no API specified in request");
        callback(null);
        return false;
    }

    // Check for Level, if none is defined then attempt to get a default
    if(!('level' in request)){
        if('layer' in request){
            request.level = request.layer;
        }else{
            var pCallback = callback;
            CitySDK.prototype.modules.arcgis.getLevelDictionary(request,function(levelDictionary){
                if('layers' in levelDictionary){
                    if(Array.isArray(levelDictionary.layers)){
                        request.level = levelDictionary.layers[0];
                    }
                }
                if(!('level' in request)){
                    // Failed to get any useful level information from level dictionary. Assume a default.
                    request.level = 0;
                }

                this.APIRequest(request,pCallback);
            });
            return false;
        }
    }


    //
    var cacheKey = JSON.stringify(request) + arcURL.toString();
    request.cacheKey = cacheKey;

    CitySDK.prototype.sdkInstance.getCachedData("arcgis", "APIRequest", cacheKey, function (cachedData) {

        var useCache = false;


        CitySDK.prototype.modules.arcgis.getVariableDictionary(request,function(dataDescription){
            if (cachedData != null) {
                useCache = true;


                if('cachedTimestamp' in cachedData){
                    // Check for lifespan of data
                    var d = new Date();
                    var n = d.getTime();
                    if('editingInfo' in cachedData){
                        console.log([Number(dataDescription.editingInfo.lastEditDate)],Number(cachedData.cachedTimestamp));
                        // Looks for last edited date from ArcGIS source. If the cached copy is more recent, use that.
                        if(Number(cachedData.cachedTimestamp) > Number(dataDescription.editingInfo.lastEditDate)){
                            useCache = true;
                        }else{
                            // cache is too old
                            useCache = false;

                            // delete the cache
                            CitySDK.prototype.sdkInstance.deleteCachedData("arcgis", "APIRequest", cacheKey);
                        }
                    }else if(Number(cachedData.cachedTimestamp) + Number(CitySDK.prototype.modules.arcgis.cacheLife) < n){
                        // cache is too old
                        useCache = false;

                        // delete the cache
                        CitySDK.prototype.sdkInstance.deleteCachedData("arcgis", "APIRequest", cacheKey);
                    }else{
                        // cache is new enough
                        useCache = true;
                    }
                }
                if(useCache == true){
                    callback(cachedData);
                    return;
                }

            }

            if(useCache == false){
                // Cached data cannot be used or does not exist. Request data from remote source

                // Validate selected variables against variable dictionary.  Remove any invalid variables
                if(!('variables' in request) && 'fields' in request){
                    request.variables = request.fields;
                    delete request.fields;
                }
                if('variables' in request){
                    request.variables = CitySDK.prototype.modules.arcgis.validateVariableList(request.variables,dataDescription);
                }

                if('order' in request){
                    request.variables = CitySDK.prototype.modules.arcgis.validateVariableList(request.order,dataDescription);
                }

                // Add extent to query
                /*if(!('geometryType' in request)){
                    request.geometryType = dataDescription.geometryType;
                    request.geometry = dataDescription.extent;
                    delete request.geometry.spatialReference;
                }*/


                // Set return geometry to false as this is an APIRequest
                request.returnGeometry = "false";

                // Trigger the request processor
                CitySDK.prototype.modules.arcgis.APIRequestProcessor(request,arcURL,{},callback);
            }

        });



    });
}; // end APIRequest
arcgisModule.prototype.search = arcgisModule.prototype.APIRequest;

// This is a function that is used as a processor for APIRequest. It should NEVER be called outside of APIRequest
arcgisModule.prototype.APIRequestProcessor = function(request,url,response,callback){
    // Prepare the request url
    var arcURL = url;
    // Add the service base if it does not already exist
    if(arcURL.indexOf("arcgis/rest/services/") <0){
        arcURL += "arcgis/rest/services/" + request.api;
        if(arcURL.substr(arcURL.length -1) != "/"){
            arcURL += "/";
        }
        arcURL += "FeatureServer/" + request.level + "/query" + "?&f=pjson";
    }

    // Set some defaults
    if(!('returnGeometry' in request)){
        // Defaults to NOT returning shapes
        request.returnGeometry = "false";
    }


    // Populate the variables
    if('variables' in request){
        arcURL += "&outFields=" + encodeURIComponent(request.variables.join(", "));
    }else{
        arcURL += "&outFields=*";
    }

    if('order' in request){
        arcURL += "&outFields=" + encodeURIComponent(request.order.join(", "));
    }
    // Populate geometry returns
    arcURL += "&returnGeometry=" + request.returnGeometry + "&returnCentroid=false";

    if ('limit' in request) {
        //Limit results to 1000 records by default
        arcURL += '&resultRecordCount=' + Number(request.limit);
    }else if('resultRecordCount' in request){
        arcURL += '&resultRecordCount=' + Number(request.resultRecordCount);
    }
    if ('offset' in request) {
        //Limit results to 1000 records by default
        arcURL += '&resultOffset=' + Number(request.offset);
    }else if('resultOffset' in request){
        arcURL += '&resultOffset=' + Number(request.resultOffset);
    }

    // Process the Where Filters
    if('where' in request && request.where != ""){
        // A single-string where clause detected
        arcURL+="&where="+encodeURIComponent(request.where);
    }else{
        arcURL+="&where="+encodeURIComponent('1=1');
    }


    // Process Geometry
    request = CitySDK.prototype.parseRequestLatLng(request);

    if('lat' in request && 'lng' in request){
        if(!('geometryType' in request)){
            request.geometryType = "esriGeometryPoint";
        }

        if(request.geometryType == "esriGeometryPoint"){
            arcURL+="&geometryType=esriGeometryPoint&geometry="+request.lat+","+request.lng;
        }
    }else if('geometryType' in request){
        arcURL+="&geometryType="+request.geometryType;
        if('geometry' in request){
            arcURL+="&geometry="+JSON.stringify(request.geometry);
        }
    }


    CitySDK.prototype.sdkInstance.jsonpRequest(arcURL).done(
        function (response) {
            if('status' in response || 'features' in response) {
                var storeMe = true;
                if('status' in response){
                    // Valid response received
                    if (response.status.toLowerCase() == "processing") {
                        // The server is still processing the answer
                        var processorTimeout = window.setTimeout(APIRequestProcessor, 500, request, url, response, callback);
                        storeMe = false;
                    }
                }
                if(storeMe == true){
                    // The data is ready
                    var d2 = new Date();
                    var n2 = d2.getTime();
                    response.cachedTimestamp = n2;
                    if('cacheKey' in request){
                        CitySDK.prototype.sdkInstance.setCachedData("arcgis", "APIRequest", request.cacheKey, response);
                    }
                    callback(response);
                }


            }else{
                // Invalid response received
                callback(null);
                return false;
            }

        }
    );

};//end APIRequestProcessor


// Polyfill to allow setTimeout to pass arguements to functions on older browsers
/*@cc_on
 // conditional IE < 9 only fix
 @if (@_jscript_version <= 9)
 (function(f){
 window.setTimeout=f(window.setTimeout);
 window.setInterval=f(window.setInterval);
 })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}});
 @end
 @*/


//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.arcgis;
//when 'this' is ambiguous