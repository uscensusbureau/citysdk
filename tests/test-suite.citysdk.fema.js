var fema = sdk.modules.fema;


function testFEMAModule() {
    var moduleName = "fema";
    var request = {};
    var response;
    testResultStatus[moduleName] = true;


    fema.enable();

    if (fema.isIso8601Date("1997-07-16T19:20:30+01:00") != true) {
        failTest(moduleName, "isIso8601Date", "Valid date failed test");
    }
    if (fema.isIso8601Date("1997-07-16") != true) {
        failTest(moduleName, "isIso8601Date", "Valid date failed test");
    }
    if (fema.isIso8601Date("10-12-1997") != false) {
        failTest(moduleName, "isIso8601Date", "Invalid date passed test");
    }
    if (fema.isIso8601Date("05/12/1997") != false) {
        failTest(moduleName, "isIso8601Date", "Invalid date passed test");
    }
    if (fema.isIso8601Date("1997/07/16") != false) {
        failTest(moduleName, "isIso8601Date", "Invalid date passed test");
    }


    var request = {
        /* disasterNumber: 3849, */
        state: "VA",
        county: "Loudoun",
        declarationRangeStart: "1990-07-16T19:20:30-08:00",
        declarationRangeEnd: "2015-07-16T19:20:30+01:00",
        skip: 0,
        take: 1000
    };

    asyncTestsRunning++;

    fema.DisasterDeclarationsSummariesRequest(request,function(response){
        asyncTestsRunning--;
        if(response['DisasterDeclarationsSummaries'][3]['disasterNumber']!="1491"){
            failTest(moduleName, "DisasterDeclarationsSummariesRequest", "Disaster number not found in response");
        }
        updateStatusDisplay();

    });

    updateStatusDisplay();

}// testCensusModule


