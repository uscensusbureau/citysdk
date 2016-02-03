/**
 * @title CitySDK Socrata Module
 * @module CitySDK Socrata Module
 */


//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.socrata = new SocrataModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function SocrataModule() {
    this.enabled = false;
    this.applicationToken = null;
};

/**
 * Enable function. Stores the API key for this module and sets it as enabled.  The API Key is optional for the socrata module but if supplied it will be used as an application Token.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.
 *
 * @param {string} apiKey The census API key.
 * @returns {boolean} True if enabled, false if not enabled.
 */
//Enable function. No API key required but is OPTIONAL and can be used as the application token.
SocrataModule.prototype.enable = function(apiKey) {
    if(typeof apiKey !== 'undefined'){
        this.setApplicationToken(apiKey);
    }

    if(CitySDK.prototype.sdkInstance.version >= SocrataModule.prototype.minCoreVersionRequired){
        this.enabled = true;
        return true;
    }else{
        this.enabled = false;
        return false;
    }


};


// Version Numbers
SocrataModule.prototype.version = 1.0;
SocrataModule.prototype.minCoreVersionRequired = 1.5;

/**
 * Makes a request to the specified Socrata server and resource. You will need the "SODA API" export URL for the resource
 * you wish to use. For example,
 *
 *              https://data.cityofchicago.org/resource/ydr8-5enu.json
 *
 * Breaks down into a request object of:
 * {
 *      "url": "data.cityofchicago.org",
 *      "dataset": "ydr8-5enu"
 * }
 *
 * You may then include any standard SoQL queries, for instance:
 *
 * {
 *      "url": "data.cityofchicago.org",
 *      "dataset": "ydr8-5enu",
 *      "where": "_amount_paid>100"
 * }
 *
 * See http://dev.socrata.com/docs/queries.html for more help on SoQL queries
 *
 * More Examples:
 *
 * Chicago payments summed by permit type
 * {
 *      "url": "data.cityofchicago.org",
 *      "dataset": "ydr8-5enu",
 *       "group": "_permit_type",
 *       "select": "_permit_type,sum(_amount_paid)"
 *  }
 *
 *
 *  2014 White House Staff - Analysts
 *  {
 *      "url": "open.whitehouse.gov",
 *      "dataset": "9j92-xfdk",
 *      "q": "analyst"
 *  }
 * @param request
 * @param callback
 */
SocrataModule.prototype.request = function(request, callback) {
    var urlPattern = /({url})/;
    var datasetPattern = /({dataset})/;

    var socrataURL = "https://{url}/resource/{dataset}.json";

    socrataURL = socrataURL.replace(urlPattern, request.url);
    socrataURL = socrataURL.replace(datasetPattern, request.dataset);

    for (var key in request) {
        if (request.hasOwnProperty(key)) {
            if(key != "url" && key != "dataset") {
                if(socrataURL.indexOf("?") < 0) socrataURL+="?";
                socrataURL += "$" + key + "=" + encodeURIComponent(request[key]) + "&";
            }
        }
    }

    if(this.applicationToken) {
        socrataURL += "$$app_token=" + this.applicationToken;
    }

    CitySDK.prototype.sdkInstance.ajaxRequest(socrataURL).done(
        function(response) {
            response = jQuery.parseJSON(response);
            callback(response);
        }
    );
};
SocrataModule.prototype.APIRequest = SocrataModule.prototype.request;
/**
 * This function accepts a Socrata Application token, and will then append it to every future request
 * Note that an application token is not required, but can help avoid throttling. You can acquire one
 * from: http://dev.socrata.com/register
 * @param token
 */
SocrataModule.prototype.setApplicationToken = function(token) {
    this.applicationToken = token;
};

//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.socrata;
//when 'this' is ambiguous