/**
 * @title CitySDK CKAN Module
 * @module CitySDK CKAN Module
 *
 *
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.ckan = new CkanModule();

/**
 * Instantiates an instance of the CitySDK CKAN object.
 * @constructor
 */
function CkanModule() {
    this.enabled = false;
};


// Cache Lifespan
CkanModule.prototype.cacheLife = 360000; // One Hour


// Endpoint URLS
CkanModule.prototype.DEFAULT_ENDPOINTS = {};
CkanModule.prototype.DEFAULT_ENDPOINTS.apiURL =  "https://{url}/api/action/";



// Version Numbers
CkanModule.prototype.version = 1.1;
CkanModule.prototype.minCoreVersionRequired = 1.5;


/**
 * Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.
 *
 * @param {string} apiKey The census API key.
 * @returns {boolean} True if enabled, false if not enabled.
 */
CkanModule.prototype.enable = function() {
    if(CitySDK.prototype.sdkInstance.version >= CkanModule.prototype.minCoreVersionRequired){
        this.enabled = true;
        return true;
    }else{
        this.enabled = false;
        return false;
    }
};






/**
 * Sends a SQL query to a CKAN server.
 * The DataStore extension must be installed to utilise this.

 *
 * @param {object} request JSON Object
 * Note: You can only request ONE of the below (package/group/tag).
 * If you make a request, select a facet, and leave the value blank, then a full list of that facet's possible values will be returned.
 *  <pre><code>var request = {
 *     "group": '',
 *     "tag": '',
 *     "package": '',
 * }</code></pre>
 * @param {function} callback
 * @return {object} JSON Object
 * <pre><code></code></pre>
 */
CkanModule.prototype.seriesRequest = function(request,callback){
    var intermediate = JSON.parse(JSON.stringify(request));
    var request = intermediate;

    var targetURL = this.DEFAULT_ENDPOINTS.apiURL;
    if('url' in request){
        targetURL = request.url;
    }
    var ckanURL = targetURL;

    var cacheKey = JSON.stringify(request) + ckanURL.toString();
    CitySDK.prototype.sdkInstance.getCachedData("ckan", "seriesRequest", cacheKey, function (cachedData) {
        var useCache = false;

        if (cachedData != null) {
            useCache = true;


            if('cachedTimestamp' in cachedData){
                // Check for lifespan of data
                var d = new Date();
                var n = d.getTime();

                if(Number(cachedData.cachedTimestamp) + Number(CitySDK.prototype.modules.ckan.cacheLife) < n){
                    // cache is too old
                    useCache = false;

                    // delete the cache
                    CitySDK.prototype.sdkInstance.deleteCachedData("ckan", "seriesRequest", cacheKey);
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

            if('group' in request){
                if(request.group == ""){
                    ckanURL = ckanURL + "group_list";
                }else{
                    ckanURL = ckanURL + "group_show?id=" + request.group;
                }
            }else if('package' in request){
                if(request.package == ""){
                    ckanURL = ckanURL + "package_list";
                }else{
                    ckanURL = ckanURL + "package_show?id=" + request.package;
                }
            }else if('tag' in request){
                if(request.tag == ""){
                    ckanURL = ckanURL + "tag_list";
                }else{
                    ckanURL = ckanURL + "tag_show?id=" + request.tag;
                }
            }else{
                ckanURL = ckanURL + "package_list";
            }

            CitySDK.prototype.sdkInstance.jsonpRequest(ckanURL).done(
                function (response) {
                    var d2 = new Date();
                    var n2 = d2.getTime();
                    response.cachedTimestamp = n2;
                    CitySDK.prototype.sdkInstance.setCachedData("ckan", "seriesRequest", cacheKey, response);
                    callback(response);
                }
            );
        }
    });
}// end getList


// Special Use Case Aliases of seriesRequest that mirrors the CKAN list API
CkanModule.prototype.package_list = function(callback){
    var request = {"package":""};
    this.seriesRequest(request,callback);
}
CkanModule.prototype.group_list = function(callback){
    var request = {"group":""};
    this.seriesRequest(request,callback);
}
CkanModule.prototype.tag_list = function(callback){
    var request = {"tag":""};
    this.seriesRequest(request,callback);
}

/**
 * Sends a query to a CKAN server.
 * The DataStore extension must be installed to utilise this.

 *
 * @param {object} request JSON Object
 *  <pre><code>var request = {
 *     "url": 'catalog.opendata.city',
 *     "fields": '"name","streetAddress","postalCode"',
 *     "resource_id": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',
 *     "limit": '2'
 * }</code></pre>
 *
 * Note: previous versions of this library used "select" and "from" for "fields" and "resource_id" respectively. These inputs will still work as the code looks for them for legacy installations.
 *
 * This function matches up to CKAN Datastore's search API.  See http://docs.ckan.org/en/ckan-2.0/datastore-api.html#ckanext.datastore.logic.action.datastore_search
 * @param {function} callback
 * @return {object} JSON Object
 * <pre><code>{
 *     "success": true,
 *     "result": {
 *         "records": [
 *             {
 *                 "postalCode": "10001",
 *                 "streetAddress": "441 WEST 26 STREET",
 *                 "name": "Hudson Guild Ccc"
 *             },
 *             {
 *                 "postalCode": "10001",
 *                 "streetAddress": "459 WEST 26 STREET",
 *                 "name": "Hudson Guild Children's Center"
 *             }
 *         ],
 *         "fields": [
 *             {
 *                 "type": "text",
 *                 "id": "name"
 *             },
 *             {
 *                 "type": "text",
 *                 "id": "streetAddress"
 *             },
 *             {
 *                 "type": "numeric",
 *                 "id": "postalCode"
 *             }
 *         ],
 *     }
 * }</code></pre>
 */
CkanModule.prototype.APIRequest = function(request, callback) {


    var intermediate = JSON.parse(JSON.stringify(request));
    var request = intermediate;
    var targetURL = this.DEFAULT_ENDPOINTS.apiURL;
    if('url' in request){
        targetURL = request.url;
    }
    var ckanURL = targetURL;

    var cacheKey = JSON.stringify(request) + ckanURL.toString();
    CitySDK.prototype.sdkInstance.getCachedData("ckan", "APIRequest", cacheKey, function (cachedData) {
        var useCache = false;


        if (cachedData != null) {
            useCache = true;


            if('cachedTimestamp' in cachedData){
              // Check for lifespan of data
                var d = new Date();
                var n = d.getTime();
                if(Number(cachedData.cachedTimestamp) + Number(CitySDK.prototype.modules.ckan.cacheLife) < n){
                    // cache is too old
                    useCache = false;

                    // delete the cache
                    CitySDK.prototype.sdkInstance.deleteCachedData("ckan", "APIRequest", cacheKey);
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


            // Start building the API URL
            if ("from" in request) {
                request.resource_id = request.from;
                delete request.from;
            }
            var ckanURL = targetURL + "datastore_search?resource_id=" + request.resource_id;


            if ('limit' in request) {
                //Limit results to 1000 records by default
                ckanURL += '&limit=' + Number(request.limit);
            }
            if ('offset' in request) {
                //Limit results to 1000 records by default
                ckanURL += '&offset=' + Number(request.offset);
            }


            if ('fields' in request || 'select' in request || 'variables' in request) {
                if ('variables' in request) {
                    request.fields = request.variables;
                    delete request.variables;
                }

                if (!('fields' in request) && 'select' in request) {
                    request.fields = request.select;
                    delete request.select;
                }

                if (Array.isArray(request.fields)) {
                    ckanURL += "&fields=" + request.fields.join(",");
                } else if (typeof request.fields == "string") {
                    ckanURL += "&fields=" + request.fields;
                }
            }

            if ('sort' in request) {
                if (Array.isArray(request.sort)) {
                    ckanURL += "&sort=" + request.sort.join(",");
                } else if (typeof request.fields == "string") {
                    ckanURL += "&sort=" + request.sort;
                }

            }


            CitySDK.prototype.sdkInstance.jsonpRequest(ckanURL).done(
                function (response) {
                    var d2 = new Date();
                    var n2 = d2.getTime();
                    response.cachedTimestamp = n2;
                    CitySDK.prototype.sdkInstance.setCachedData("ckan", "APIRequest", cacheKey, response);
                    callback(response);
                }
            );
        }

    });
};
CkanModule.prototype.search = CkanModule.prototype.APIRequest;
//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.ckan;
//when 'this' is ambiguous
