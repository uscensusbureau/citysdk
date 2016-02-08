/**
 * @title CitySDK EIA API Module
 * @module CitySDK EIA API Module
 * This module requires a key from http://www.eia.gov/
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.eia = new EIAModule();

/**
 * Instantiates an instance of the CitySDK EIA object.
 * @constructor
 */
function EIAModule() {
    this.enabled = false;
};

/**
 * Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.
 *
 * @param {string} apiKey The census API key.
 * @returns {boolean} True if enabled, false if not enabled.
 */
EIAModule.prototype.enable = function(apiKey) {
    this.apiKey = apiKey;
    if(CitySDK.prototype.sdkInstance.version >= EIAModule.prototype.minCoreVersionRequired){
        this.enabled = true;
        return true;
    }else{
        this.enabled = false;
        return false;
    }
};

// Version Numbers
EIAModule.prototype.version = 1.0;
EIAModule.prototype.minCoreVersionRequired = 1.5;

// Endpoint URLS
EIAModule.prototype.DEFAULT_ENDPOINTS = {};
EIAModule.prototype.DEFAULT_ENDPOINTS.apiURL =  "//api.eia.gov/";



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
EIAModule.prototype.categoryRequest = function(request, callback) {
    var apiKeyPattern = /({apiKey})/;
    var categoryPattern = /({category})/;

    var categoryURL = EIAModule.prototype.DEFAULT_ENDPOINTS.apiURL + "category/?api_key={apiKey}&category_id={category}";

    if(!("category" in request)) {
        request.category = 371; //Default - root list of all datasets
    }

    categoryURL = categoryURL.replace(apiKeyPattern, this.apiKey);
    categoryURL = categoryURL.replace(categoryPattern, request.category);

    CitySDK.prototype.sdkInstance.ajaxRequest(categoryURL).done(function(response) {
        response = jQuery.parseJSON(response);
        callback(response);
    });

};

/**
 * Call which returns data from the specified series
 *
 *
 * @param {object} request
 * Request should specify a series, if not, nothing will happen
 * <pre><code>{
 *      series: "ELEC.GEN.ALL-AL-99.A"
 * }</code></pre>
 * @param {function} callback
 */
EIAModule.prototype.seriesRequest = function(request, callback) {
    var apiKeyPattern = /({apiKey})/;
    var seriesPattern = /({series})/;

    var seriesURL =  EIAModule.prototype.DEFAULT_ENDPOINTS.apiURL + "series/?api_key={apiKey}&series_id={series}"

    if(!("series" in request)) return;

    seriesURL = seriesURL.replace(apiKeyPattern, this.apiKey);
    seriesURL = seriesURL.replace(seriesPattern, request.series);

    CitySDK.prototype.sdkInstance.ajaxRequest(seriesURL).done(function(response) {
        response = jQuery.parseJSON(response);
        callback(response);
    });
};

//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.eia;
//when 'this' is ambiguous