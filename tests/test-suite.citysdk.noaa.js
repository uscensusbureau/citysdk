var noaa = sdk.modules.noaa;


function testNoaaModule() {
    var moduleName = "noaa";
    var request = {};
    var response;
    testResultStatus[moduleName] = true;


    noaa.enable();

    request = {
        "lat": "39.0000",
        "lon": "-77",
    };
    asyncTestsRunning++;

    noaa.request(request,function(response){
        asyncTestsRunning--;

        console.log("I am responded");
        console.log(response);
        updateStatusDisplay();

    });

    updateStatusDisplay();

}// testCensusModule