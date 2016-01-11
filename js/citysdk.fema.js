/**
 * This is the CitySDK Module Template's FEMA API module.
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.fema = new FEMAModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function FEMAModule() {
    this.enabled = false;
    this.iso8601reg = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
};

//Enable function. Stores the API key for this module and sets it as enabled
FEMAModule.prototype.enable = function() {
    if(CitySDK.prototype.sdkInstance.version >= FEMAModule.prototype.minCoreVersionRequired){
        this.enabled = true;
        return true;
    }else{
        this.enabled = false;
        return false;
    }
};


// Version Numbers
FEMAModule.prototype.version = 1.0;
FEMAModule.prototype.minCoreVersionRequired = 1.5;


/**
 * Call which returns disaster listings from the DisasterDeclarationsSumamries Dataset
 *
 * Request can be filted by the following fields.  If no values, the API will return the first values
 * The API return paged results.  Use skip and take to control which page is returned
 * {
 *      disasterNumber: 3849,
 *      state: "VA",
 *      county: "Loudoun",
 *      declarationRangeStart: "1997-07-16",
 *      declarationRangeEnd: "1997-07-16T19:20:30+01:00",
 *      skip: 0,
 *      take: 1000
 * }
 *
 * Response object
 * {
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
 * }
 *
 * @param request
 * @param callback
 */
FEMAModule.prototype.DisasterDeclarationsSummariesRequest = function(request, callback) {

    var addedFilter = false;
    var addedSkip = false;
    var disasterURL = "https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?";

    if("disasterNumber" in request && Number(request.disasterNumber)) {
        if (!addedFilter){
            disasterURL += "$filter=";
            disasterURL += "disasterNumber eq " + Number(request.disasterNumber);
            addedFilter = true;
        } else {
            disasterURL += " and disasterNumber eq " + Number(request.disasterNumber);
        }
    }

    if("state" in request) {
        if (!addedFilter){
            disasterURL += "$filter=";
            disasterURL += "state eq '" + request.state + "'";
            addedFilter = true;
        } else {
            disasterURL += " and state eq '" + request.state + "'";
        }
    }

    if("county" in request) {
        if (!addedFilter){
            disasterURL += "$filter=";
            disasterURL += "startswith(declaredCountyArea, '" + request.county + "')";
            addedFilter = true;
        } else {
            disasterURL += " and startswith(declaredCountyArea,'" + request.county + "')";
        }
    }

    if("declarationRangeStart" in request && CitySDK.prototype.sdkInstance.modules.fema.isIso8601Date(request.declarationRangeStart)) {
        if (!addedFilter){
            disasterURL += "$filter=";
            disasterURL += "declarationDate ge '" + request.declarationRangeStart + "'";
            addedFilter = true;
        } else {
            disasterURL += " and declarationDate ge '" + request.declarationRangeStart + "'";
        }
    }
    if("declarationRangeStart" in request && CitySDK.prototype.sdkInstance.modules.fema.isIso8601Date(request.declarationRangeEnd)) {
        if (!addedFilter){
            disasterURL += "$filter=";
            disasterURL += "declarationDate le '" + request.declarationRangeEnd + "'";
            addedFilter = true;
        } else {
            disasterURL += " and declarationDate le '" + request.declarationRangeEnd + "'";
        }
    }

    if("skip" in request && Number(request.skip)) {
        if (addedFilter){
            disasterURL += "&";
        }
        disasterURL += "$skip=" + Number(request.skip); //Default - root list of all datasets
        addedSkip = true;
    }

    if("take" in request && Number(request.take)) {
        if (addedFilter || addedSkip){
            disasterURL += "&";
        }disasterURL += "$top=" + Number(request.take); //Default - root list of all datasets
    }

    CitySDK.prototype.sdkInstance.ajaxRequest(disasterURL).done(function(response) {
        response = $.parseJSON(response);
        callback(response);
    });

};

FEMAModule.prototype.isIso8601Date = function(dateString) {
    return CitySDK.prototype.sdkInstance.modules.fema.iso8601reg.test(dateString);
}

//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.fema;
//when 'this' is ambiguous