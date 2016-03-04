sdk.allowCache = false;
var arcgis = sdk.modules.arcgis;


function testArcGISModule() {
    var moduleName = "arcgis";
    var request = {};
    var response;
    testResultStatus[moduleName] = true;


    arcgis.enable();

    arcgis.DEFAULT_ENDPOINTS.apiURL = "http://services.arcgis.com/VTyQ9soqVukalItT/";
    asyncTestsRunning++;
    arcgis.seriesRequest(request,function(response){
        asyncTestsRunning--;
        if(!('services' in response)){
            failTest(moduleName, "seriesRequest", "Failed to retrieve service list from " + arcgis.DEFAULT_ENDPOINTS.apiURL);
        }
        updateStatusDisplay();
    });

    var request = {
        'api' : "Jobs_Proximity_Index",
        'level' : 0
    };
    asyncTestsRunning++;
    arcgis.getVariableDictionary(request,function(response){
        asyncTestsRunning--;
        if(!('fields' in response)){
            failTest(moduleName, "getVariableDictionary", "Failed to retrieve variable list and layer description from " + arcgis.DEFAULT_ENDPOINTS.apiURL + " :: " + request.api);
        }
        console.log(response);
        updateStatusDisplay();

    });

    asyncTestsRunning++;
    arcgis.getLevelDictionary(request,function(response){
        asyncTestsRunning--;
        if(!('layers' in response)){
            failTest(moduleName, "getLevelDictionary", "Failed to retrieve variable list and layer description from " + arcgis.DEFAULT_ENDPOINTS.apiURL + " :: " + request.api);
        }
        //console.log(response);
        updateStatusDisplay();

    });


    request = {
        "api": "Jobs_Proximity_Index",
        "level": "0",
        "where": "JOBS_IDX > 50 AND JOBS_IDX < 52",
        "variables": [
            "BLOCKGROUPID",
            "JOBS_IDX",
            "AVariableThatDoesNotExist"
        ],
        'limit': 50
    };
    asyncTestsRunning++;
    arcgis.APIRequest(request,function(response){
        asyncTestsRunning--;
        if(!('features' in response)){
            failTest(moduleName, "APIRequest", "Failed to retrieve features from " + arcgis.DEFAULT_ENDPOINTS.apiURL + " :: " + request.api);
        }
        updateStatusDisplay();

        console.log(response);
    });


    updateStatusDisplay();

}// testCensusModule


