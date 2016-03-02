var ckan = sdk.modules.ckan;


function testCKANModule() {
    var moduleName = "ckan";
    var request = {};
    testResultStatus[moduleName] = true;

    var group_list = {};
    var tag_list = {};
    var package_list = {};


    ckan.enable();

    ckan.DEFAULT_ENDPOINTS.apiURL = "http://www.civicdata.com/api/3/action/";

    asyncTestsRunning++;
    ckan.package_list(function(response){
        asyncTestsRunning++;
        package_list = response.result;
        if(!("help" in response) && !("result" in response) && response.success == true){
            // Generic package list request failed
            failTest(moduleName,"package_list","Failed to get valid package_list");
        }else{
            // Generic package list request passed, test for specific package
            var request = {'package':package_list[85]};

            asyncTestsRunning++;
            ckan.seriesRequest(request,function(response){
                asyncTestsRunning--;

                if(!('result' in response)){
                    // Failed to get a result
                    failTest(moduleName,"seriesRequest","Failed to get valid package description");
                    updateStatusDisplay();

                }else if(!('id' in response.result)){
                    // Failed to get data in the result
                    failTest(moduleName,"seriesRequest","Failed to get valid package description details");
                    updateStatusDisplay();

                }else{
                    // Success in getting a result, proceed to test data queries


                    request = {
                        'from':response.result.resources[0].id,
                    };
                    asyncTestsRunning++;
                    ckan.APIRequest(request,function(response){
                        asyncTestsRunning--;
                        if('result' in response){
                            // success at getting records.  Use the response to build a targeted sql type query

                                // Get some specific field names to query
                                var fieldnames = Object.getOwnPropertyNames(response.result.records[0]);
                                var i =0;
                                var fieldnamesSubset = [];
                                while (i<3){
                                    fieldnamesSubset.push(fieldnames[i]);
                                    i++;
                                }

                            request.select = fieldnamesSubset.join(",");
                            request.limit = 5;
                            request.offset = 5;

                            asyncTestsRunning++;
                            ckan.APIRequest(request,function(response){
                                asyncTestsRunning--;

                                var pass = false;
                                if('result' in response){
                                    if(response.result.records.length == 5){
                                        if(Object.keys(response.result.records[0]).length == 3){
                                            pass = true;
                                        }
                                    }
                                }

                                if(pass == false){
                                    failTest(moduleName,"APIRequest","Failed to get records and specified fields using explicit field requests");
                                }
                                updateStatusDisplay();

                            });
                        }else{
                            failTest(moduleName,"APIRequest","Failed to get records using simple request");
                        }
                        updateStatusDisplay();



                    });
                }

            });


        }


    });

    asyncTestsRunning++;
    ckan.tag_list(function(response){
        asyncTestsRunning--;
        tag_list = response.result;
        if(!("help" in response) && !("result" in response) && response.success == true){
            failTest(moduleName,"package_list","Failed to get valid tag_list");
        }
        updateStatusDisplay();
    });

    asyncTestsRunning++;
    ckan.group_list(function(response){
        asyncTestsRunning--;
        group_list = response.result;
        if(!("help" in response) && !("result" in response) && response.success == true){
            failTest(moduleName,"package_list","Failed to get valid group_list");
        }
        updateStatusDisplay();
    });


    updateStatusDisplay();

}// testCensusModule


