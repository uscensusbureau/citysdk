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



// Endpoint URLS
CkanModule.prototype.DEFAULT_ENDPOINTS = {};
CkanModule.prototype.DEFAULT_ENDPOINTS.apiURL =  "https://{url}/api/action/datastore_search_sql?sql=";



// Version Numbers
CkanModule.prototype.version = 1.0;
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
 *  <pre><code>var request = {
 *     "url": 'catalog.opendata.city',
 *     "Select": '"name","streetAddress","postalCode"',
 *     "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',
 *     "Limit": '2'
 * }</code></pre>
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
 *         "sql": "SELECT \"name\",\"streetAddress\",\"postalCode\" FROM \"e4491e0c-ba09-4cb2-97c1-d466e3e976a5\" LIMIT 2 "
 *     }
 * }</code></pre>
 */
CkanModule.prototype.APIRequest = function(request, callback) {
    var urlPattern = /({url})/;

    var ckanURL = CitySDK.prototype.modules.ckan.DEFAULT_ENDPOINTS.apiURL;

    ckanURL = ckanURL.replace(urlPattern, request.url);

    var limit = false;

    for (var key in request) {
        if (request.hasOwnProperty(key)) {
            if (key != "url") {
                ckanURL += encodeURIComponent(key) + '%20' + encodeURIComponent(request[key]) + '%20';
                if (key.toLowerCase() == "limit") { limit = true }
            }
        }
    }

    if (!limit) {
        ckanURL += 'Limit%201000';  //Limit results to 1000 records by default
    }

    CitySDK.prototype.sdkInstance.ajaxRequest(ckanURL).done(
        function(response) {
            response = jQuery.parseJSON(response);
            callback(response);
        }
    );
};
CkanModule.prototype.search = CkanModule.prototype.APIRequest;
//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.ckan;
//when 'this' is ambiguous
