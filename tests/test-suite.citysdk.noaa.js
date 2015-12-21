var noaa = sdk.modules.noaa;


function testNoaaModule() {
    var moduleName = "noaa";
    var request = {};
    testResultStatus[moduleName] = true;


    noaa.enable();





    updateStatusDisplay();

}// testCensusModule