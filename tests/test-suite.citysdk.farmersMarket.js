var farmersMarket = sdk.modules.farmersMarket;


function testfarmersMarketModule() {
    var moduleName = "farmersMarket";
    var request = {};
    var response;
    testResultStatus[moduleName] = true;


    farmersMarket.enable();


    request = {
        /* disasterNumber: 3849, */
        lat: 38.9047,
        lng: -77.0164
    };

    asyncTestsRunning++;

    farmersMarket.APIRequest(request,function(response){
        asyncTestsRunning--;
        if(response['results'][1]['id']!="1002446"){
            failTest(moduleName, "APIRequest", "Farmer's Market listing has not been found.");
        }
        updateStatusDisplay();

    });

    request = {
        /* disasterNumber: 3849, */
        id: 1002446
    };
    farmersMarket.detail(request,function(response){
        asyncTestsRunning--;
        if(!("Address" in response['marketdetails'])){
            failTest(moduleName, "APIRequest", "Unable to retrieve details of market 1002446");
        }
        updateStatusDisplay();

    });


    updateStatusDisplay();

}// testCensusModule


