/**
 * @title CitySDK ExampleTemplate Module
 * @module CitySDK ExampleTemplate Module
 * @overview This is a template that module builders can use to make new modules.
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.moduleTemplate = new ModuleTemplateModule();

/**
 * Instantiates an instance of the CitySDK FEMA object.
 * @constructor
 */
function ModuleTemplateModule() {
    this.enabled = false; //Every module should have an "enabled" property and an "enable"  function.
};

// Endpoint URLS
ModuleTemplateModule.prototype.DEFAULT_ENDPOINTS = {};
ModuleTemplateModule.prototype.DEFAULT_ENDPOINTS.apiURL = "https://urloftheapi.com/";
// DO NOT hardcode endpoint URLS into function.

// Version Numbers
ModuleTemplateModule.prototype.version = 1.0;
ModuleTemplateModule.prototype.minCoreVersionRequired = 1.5;



/**
 * Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.
 *
 * @param {string} apiKey The census API key.
 * @returns {boolean} True if enabled, false if not enabled.
 */
ModuleTemplateModule.prototype.enable = function(apiKey) {
    this.apiKey = apiKey;
    if (CitySDK.prototype.sdkInstance.version >= this.minCoreVersionRequired) {
        this.enabled = true;
        return true;
    } else {
        this.enabled = false;
        return false;
    }
};


/**
 * Call which returns disaster listings from the DisasterDeclarationsSumamries Dataset
 *
 * Request can be filted by the following fields.  If no values, the API will return the first values
 * The API return paged results.  Use skip and take to control which page is returned
 *
 * @param {object} request
 * <pre><code>{
 *      "sampleField":"a value",
 *      "sampleField2":47
 * }</code></pre>
 * @param {function} callback
 * @returns {object}
 * <pre><code>{
 *     "sampleResult":"a value"
 * }</code></pre>
 **/
ModuleTemplateModule.prototype.APIRequest = function(request, callback) {
    var cacheKey = "unique key to determine how to cache the returned data";

    CitySDK.prototype.sdkInstance.getCachedData("moduleTemplate", "APIRequest", cacheKey, function (cachedData) {
        if (cachedData != null) {
            // Caching is enabled AND cached data is found
            /*
            You may need to use more complex logic to determine whether the cached data is valid.
            This example assumes that the source data never changes. If you are loading data from
            an api that may return different results from the same request (such as a request that
            retrieves the current weather report), add logic as needed that tests the data for
            validity beyond simple existence.
             */
            callback(cachedData);
            return;
        } else {
            // Caching is disabled OR no cache data is found.

            // Build the request URL as needed.
            var URL = CitySDK.prototype.modules.moduleTemplate.DEFAULT_ENDPOINTS.apiURL;  // DO NOT HARDCODE A URL INTO THE FUNCTION

            // Submit the request.
            // Note there are several different request functions that can be used here.  See the CitySDK Core for details.
            CitySDK.prototype.sdkInstance.ajaxRequest(URL).done(
                function (response) {
                    response = jQuery.parseJSON(response);
                    CitySDK.prototype.sdkInstance.setCachedData("moduleTemplate", "APIRequest", cacheKey, response);
                    callback(response);
                }
            );
        }
    });
};



//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.moduleTemplate;
//when 'this' is ambiguous