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

/**
 * Stores each module
 * @type {object}
 */
CitySDK.prototype.modules = {};

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
 * Make an AJAX call (using POST)
 * @param url
 * @param data
 * @returns {*}
 */
CitySDK.prototype.postRequest = function(url, data) {
    return $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "text"
    });
};