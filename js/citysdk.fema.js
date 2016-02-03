/**
 * @title CitySDK FEMA Module
 * @module CitySDK FEMA Module
 * @overview The FEMA Module provides access to FEMA's list of disasters.
 */


//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.fema = new FEMAModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
/**
 * Instantiates an instance of the CitySDK FEMA object.
 * @constructor
 */
function FEMAModule() {
    this.enabled = false;
    this.iso8601reg = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
}
// Endpoint URLS
FEMAModule.prototype.DEFAULT_ENDPOINTS = {};
FEMAModule.prototype.DEFAULT_ENDPOINTS.apiURL = "https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?";


// Version Numbers
FEMAModule.prototype.version = 1.0;
FEMAModule.prototype.minCoreVersionRequired = 1.5;


/**
 * Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.
 *
 * @param {string} apiKey The census API key.
 * @returns {boolean} True if enabled, false if not enabled.
 */
FEMAModule.prototype.enable = function () {
    if (CitySDK.prototype.sdkInstance.version >= FEMAModule.prototype.minCoreVersionRequired) {
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
 *      disasterNumber: 3849,
 *      state: "VA",
 *      county: "Loudoun",
 *      declarationRangeStart: "1997-07-16",
 *      declarationRangeEnd: "1997-07-16T19:20:30+01:00",
 *      skip: 0,
 *      take: 1000
 * }</code></pre>
 * @param {function} callback
 * @returns {object}
 * <pre><code>{
 *      "metadata": {
 *          "skip": 0,
 *          "top": 1000,
 *          "count": 0,
 *          "filter": "disasterNumber eq 4100",
 *          "format": "json",
 *          "orderby": {},
 *          "select": null,
 *          "entityname": "DisasterDeclarationsSummaries",
 *          "url": "/api/open/v1/DisasterDeclarationsSummaries?$filter=disasterNumber%20eq%204100"
 *      },
 *      "DisasterDeclarationsSummaries": [{
 *              "disasterNumber": 4100,
 *              "ihProgramDeclared": false,
 *              "iaProgramDeclared": false,
 *              "paProgramDeclared": true,
 *              "hmProgramDeclared": true,
 *              "state": "AR",
 *              "declarationDate": "2013-01-29T16:00:00.000Z",
 *              "disasterType": "DR",
 *              "incidentType": "Severe Ice Storm",
 *              "title": "SEVERE WINTER STORM",
 *              "incidentBeginDate": "2012-12-25T00:00:00.000Z",
 *              "incidentEndDate": "2012-12-26T00:00:00.000Z",
 *              "declaredCountyArea": "Clark (County)",
 *              "hash": "50be244703e242e088bc5a6d674973ce",
 *              "lastRefresh": "2015-10-27T20:06:30.618Z",
 *              "placeCode": 99019,
 *              "id": "54f4fbc8df7009de482145b1"
 *          },
 *          {
 *              "disasterNumber": 4100,
 *              "ihProgramDeclared": false,
 *              "iaProgramDeclared": false,
 *              "paProgramDeclared": true,
 *              "hmProgramDeclared": true,
 *              "state": "AR",
 *              "declarationDate": "2013-01-29T16:00:00.000Z",
 *              "disasterType": "DR",
 *              "incidentType": "Severe Ice Storm",
 *              "title": "SEVERE WINTER STORM",
 *              "incidentBeginDate": "2012-12-25T00:00:00.000Z",
 *              "incidentEndDate": "2012-12-26T00:00:00.000Z",
 *              "declaredCountyArea": "Saline (County)",
 *              "hash": "840aac66b8560d81b008a4e7efad4295",
 *              "lastRefresh": "2015-10-27T20:06:30.193Z",
 *              "placeCode": 99125,
 *              "id": "54f4fbc7df7009de48213e9a"
 *          }]
 *      }
 * }</code></pre>
 **/
FEMAModule.prototype.APIRequest = function (request, callback) {

    var addedFilter = false;
    var addedSkip = false;
    var disasterURL = CitySDK.prototype.modules.fema.DEFAULT_ENDPOINTS.apiURL;

    if ("disasterNumber" in request && Number(request.disasterNumber)) {
        if (!addedFilter) {
            disasterURL += "$filter=";
            disasterURL += "disasterNumber eq " + Number(request.disasterNumber);
            addedFilter = true;
        } else {
            disasterURL += " and disasterNumber eq " + Number(request.disasterNumber);
        }
    }

    if ("state" in request) {
        if (!addedFilter) {
            disasterURL += "$filter=";
            disasterURL += "state eq '" + request.state + "'";
            addedFilter = true;
        } else {
            disasterURL += " and state eq '" + request.state + "'";
        }
    }

    if ("county" in request) {
        if (!addedFilter) {
            disasterURL += "$filter=";
            disasterURL += "startswith(declaredCountyArea, '" + request.county + "')";
            addedFilter = true;
        } else {
            disasterURL += " and startswith(declaredCountyArea,'" + request.county + "')";
        }
    }

    if ("declarationRangeStart" in request && CitySDK.prototype.sdkInstance.modules.fema.isIso8601Date(request.declarationRangeStart)) {
        var dateObjectdeclarationRangeStart = new Date(request.declarationRangeStart);
        if (!addedFilter) {
            disasterURL += "$filter=";
            disasterURL += "declarationDate ge '" + dateObjectdeclarationRangeStart.toISOString() + "'";
            addedFilter = true;
        } else {
            disasterURL += " and declarationDate ge '" + dateObjectdeclarationRangeStart.toISOString() + "'";
        }
    }
    if ("declarationRangeStart" in request && CitySDK.prototype.sdkInstance.modules.fema.isIso8601Date(request.declarationRangeEnd)) {
        var dateObjectdeclarationRangeEnd = new Date(request.declarationRangeEnd);

        if (!addedFilter) {
            disasterURL += "$filter=";
            disasterURL += "declarationDate le '" + dateObjectdeclarationRangeEnd.toISOString() + "'";
            addedFilter = true;
        } else {
            disasterURL += " and declarationDate le '" + dateObjectdeclarationRangeEnd.toISOString() + "'";
        }
    }

    if ("skip" in request && Number(request.skip)) {
        if (addedFilter) {
            disasterURL += "&";
        }
        disasterURL += "$skip=" + Number(request.skip); //Default - root list of all datasets
        addedSkip = true;
    }

    if ("take" in request && Number(request.take)) {
        if (addedFilter || addedSkip) {
            disasterURL += "&";
        }
        disasterURL += "$top=" + Number(request.take); //Default - root list of all datasets
    }

    CitySDK.prototype.sdkInstance.ajaxRequest(disasterURL).done(function (response) {
        response = jQuery.parseJSON(response);
        callback(response);
    });

};
FEMAModule.prototype.DisasterDeclarationsSummariesRequest = FEMAModule.prototype.APIRequest;
/**
 * Tests string to see if it is a valid ISO8601 date.
 *
 * @param {string} dateString The string of the date to be tested
 * @returns {boolean} True if valid ISO 8601 date.
 */
FEMAModule.prototype.isIso8601Date = function (dateString) {
    return CitySDK.prototype.sdkInstance.modules.fema.iso8601reg.test(dateString);
};


// Polyfill
if (!Date.prototype.toISOString) {
    (function () {

        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        Date.prototype.toISOString = function () {
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                'T' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes()) +
                ':' + pad(this.getUTCSeconds()) +
                '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                'Z';
        };

    }());
}


//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.fema;
//when 'this' is ambiguous