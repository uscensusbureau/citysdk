
var census = sdk.modules.census;
var censusAPIkey="21ca50e1a3e22cf2b18083748c278199395408ec";


function testCensusModule(){
    var moduleName = "census";
    var request = {};
    testResultStatus[moduleName]=true;

    census = sdk.modules.census;
    census.enable(censusAPIkey);



    // Convert Alias to Variable
    if(census.parseToVariable("employment_labor_force") !="B23025_002E"){
        failTest(moduleName,"parseToVariable","Failed to get variable from alias name");
    }

    if(census.isNormalizable("commute_time_other")!=true && census.isNormalizable("education_none")!=false){
        failTest(moduleName,"isNormalizable","Incorrect values returned by function");
    }


    request = {
        "level": "state",
        "state": "VA",
        "variables": [
            "education_masters"
        ]
    };

    request = census.parseRequestStateCode(request);
    if(request.lat != 37.5333 && request.lng != -77.4667){
        failTest(moduleName,"parseRequestStateCode","Failed to get stat capital coordinates");
    }



    // ESRItoGEO

    // GEOtoESRI



    // getACSVariableDictionary
    asyncTestsRunning++;
    census.getACSVariableDictionary("acs5",2013,function(result){
        asyncTestsRunning--;
        if(typeof result.variables != undefined){
            if(typeof result.variables.B23025_006E == undefined){
                failTest(moduleName,"getACSVariableDictionary","ACS5 2013 Variable array exists but one or more variables is missing.");
            }
        }else{
                failTest(moduleName,"getACSVariableDictionary","ACS5 2013 Variable array does not exist.");
        }
    });

    asyncTestsRunning++;
    census.getACSVariableDictionary("acs1",2014,function(result){
        asyncTestsRunning--;
        if(typeof result.variables != undefined){
            if(typeof result.variables.B24126_438E == undefined){
                failTest(moduleName,"getACSVariableDictionary","ACS5 2013 Variable array exists but one or more variables is missing.");
            }
        }else{
            failTest(moduleName,"getACSVariableDictionary","ACS5 2013 Variable array does not exist.");
        }
        updateStatusDisplay();
    });



    // latLngToFIPS
    asyncTestsRunning++;
    census.latLngToFIPS("25.7753","-80.2089",function(moo){
        asyncTestsRunning--;
        if(moo.States === null || moo["2010 Census Blocks"] === null){
            failTest(moduleName,"latLngToFIPS","Failed to get FIPS information from coordinate points. Note: it is possible that the Geocoder service may not be returning the valid data. Re-run test.");
        }else if(moo.States[0].BASENAME.toLowerCase() != "florida"){
            failTest(moduleName,"latLngToFIPS","Failed to get FIPS information from coordinate points");
        }
        updateStatusDisplay();
    });

    // addressToFIPS
    asyncTestsRunning++;
    census.addressToFIPS("3500 Pan American Drive","Miami","FL",function(response){
        asyncTestsRunning--;
        if(response[0].geographies.States === null){
            failTest(moduleName,"addressToFIPS","Failed to get FIPS information from address. Note: it is possible that the Geocoder service may not be returning the valid data. Re-run test.");
        }else if(response[0].geographies.States[0].BASENAME.toLowerCase() != "florida"){
            failTest(moduleName,"addressToFIPS","Unexpected values returned by function.. Note: it is possible that the Geocoder service may not be returning the valid data. Re-run test.");
        }
        updateStatusDisplay();
    });


    // ZIPtoLatLng
    asyncTestsRunning++;
    census.ZIPtoLatLng("20190",function(response){
        asyncTestsRunning--;
        if(parseFloat(response.lat) != 38.9597752 && parseFloat(response.lng) != -77.3368607){
            failTest(moduleName,"ZIPtoLatLng","Failed to get coordinates from zip code. Note: it is possible that the Geocoder service may not be returning the valid data. Re-run test.");
        }
        updateStatusDisplay();
    });

    asyncTestsRunning++;
    request = {
        "level": "state",
        "lat": "25.7753",
        "lng": "-80.2089",
        "year":2013,
        "api":"acs1",
        "sublevel": true,
        "variables": [
            "commute_time",
            "commute_time_carpool",
            "commute_time_other"
        ]
    };


    // Test of acsSummaryRequest
    census.latLngToFIPS("25.7753","-80.2089",function(geographies) {
        var fipsData = geographies["2010 Census Blocks"][0];
        request["state"] = fipsData["STATE"];
        request["county"] = fipsData["COUNTY"];
        request["tract"] = fipsData["TRACT"];
        request["blockGroup"] = fipsData["BLKGRP"];
        request["place"] = ("Incorporated Places" in geographies) ? (geographies["Incorporated Places"].length > 0) ? geographies["Incorporated Places"][0]["PLACE"] : null : null;
        request["place_name"] = ("Incorporated Places" in geographies) ? (geographies["Incorporated Places"].length > 0) ? geographies["Incorporated Places"][0]["NAME"] : null : null;

        request.geocoded = true;
        census.acsSummaryRequest(request, function (response) {
            asyncTestsRunning--;
            if(response[1][2]!="189255"){
                failTest(moduleName,"acsSummaryRequest","2013 ACS1 State Level with sublevel Request Failed");
                updateStatusDisplay();

            }
        });


        asyncTestsRunning++;
        request.level = "county";
        request.sublevel= false;
        request.year = 2014;
        request.api = "acs5";
        request.variables = [
            "commute_time",
            "commute_time_carpool",
            "commute_time_other"
        ]
        census.acsSummaryRequest(request, function (response) {
            asyncTestsRunning--;
            console.log(response);
            if(response[1][4]!="2600861"){
                failTest(moduleName,"acsSummaryRequest","2014 ACS5 County Level Request Failed: Population variable not included in data");
                updateStatusDisplay();

            }
        });

    });



    //tigerwebRequest










    updateStatusDisplay();

} // end testCensusModule


