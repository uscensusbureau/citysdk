

var sdk = new CitySDK();
sdk.allowCache = true;
//localStorage.clear();


var testResultStatus = {};

var asyncTestsRunning = 0;

function runAllTests(){
    // Run all the tests
    testResultStatus['all']=true;
    runCoreTest();
    testCensusModule();
    testCKANModule();
    testFEMAModule();
    testfarmersMarketModule();
    testArcGISModule();
    //testNoaaModule();
}//runAllTests

function runCoreTest(){
    var moduleName = "core";
    testResultStatus[moduleName]=true;

    // getStateCapitalCoords
    if(sdk.getStateCapitalCoords("VirGinia").join() != [37.5333, -77.4667].join()){
        failTest(moduleName,"getStateCapitalCoords","Failed to retrieve state coordinates for Virginia");
    }

    if(sdk.getStateCapitalCoords("VA").join() != [37.5333, -77.4667].join()){
        failTest(moduleName,"getStateCapitalCoords","Failed to retrieve state coordinates for VA");
    }

    if(sdk.getStateCapitalCoords() != false){
        failTest(moduleName,"getStateCapitalCoords","Failed to return fall on empty input");
    }



    //parseRequestLatLng
    var request = {"latitude":100,"longitude":20};
    var returnedRequest = sdk.parseRequestLatLng(request);
    if(returnedRequest.lng != 20 && returnedRequest.lat != 100){
        failTest(moduleName,"parseRequestLatLng","Failed to return latitude & longiture");
    }


    updateStatusDisplay();

}//runCoreTest



function failTest(moduleName,functionName,errorMessage){
    testResultStatus[moduleName] = false;
    testResultStatus['all']=false;
    jQuery(".statusOutput").append("<p>"+moduleName+" : " +functionName+ " : "+errorMessage+"</p>");
}//failTest


function updateStatusDisplay(moduleName){
    if(asyncTestsRunning == 0){
        jQuery.each(testResultStatus,function(index,value){
            jQuery("tr[dataModuleName="+index+"] .testStatus").removeClass("bg-warning");
            if(testResultStatus[index] === false){
                jQuery("tr[dataModuleName="+index+"] .testStatus").addClass("bg-danger");
                jQuery("tr[dataModuleName="+index+"] .testStatus > span").text(" Failed");
            }else if(testResultStatus[index] === true){
                jQuery("tr[dataModuleName="+index+"] .testStatus").addClass("bg-success");
                jQuery("tr[dataModuleName="+index+"] .testStatus > span").text(" Pass");
            }
        });
    }
}//updateStatusDisplay



jQuery(document).ready(function(){

    jQuery("tr[dataModuleName='all'] .runTestButton").click(runAllTests);
    jQuery("tr[dataModuleName='core'] .runTestButton").click(runCoreTest);
    jQuery("tr[dataModuleName='census'] .runTestButton").click(testCensusModule);
    jQuery("tr[dataModuleName='ckan'] .runTestButton").click(testCKANModule);
    jQuery("tr[dataModuleName='fema'] .runTestButton").click(testFEMAModule);
    jQuery("tr[dataModuleName='farmersMarket'] .runTestButton").click(testfarmersMarketModule);
    jQuery("tr[dataModuleName='arcgis'] .runTestButton").click(testArcGISModule);

    //jQuery("tr[dataModuleName='noaa'] .runTestButton").click(testNoaaModule);
});