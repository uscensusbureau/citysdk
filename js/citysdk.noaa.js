/**
 * This is the CitySDK NOAA Module
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.noaa = new noaaModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function noaaModule() {
    this.enabled = false;
};

// Configuration Settings
noaaModule.prototype.DEFAULT_ENDPOINTS = {};
noaaModule.prototype.DEFAULT_ENDPOINTS.apiURL = "http://graphical.weather.gov/xml/sample_products/browser_interface/ndfdXMLclient.php?";


noaaModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT = 0;




noaaModule.prototype.locationHash = {};
noaaModule.prototype.data = {};

noaaModule.prototype.locationBasedVariables = ["lat","lon","lat1","lon1","lat2","lon2","listLat1","listLon1","listLat2","listLon2","endPoint1Lat","endPoint1Lon","endPoint2Lat","endPoint2Lon","listEndPoint1Lat","listEndPoint1Lon","listEndPoint2Lat","listEndPoint2Lon","zipCodeList","listZipCodeList","centerPointLat","centerPointLon","distanceLat","distanceLon","listCenterPointLat","listCenterPointLon","listDistanceLat","listDistanceLon"];
noaaModule.prototype.ndfdVariables=["maxt","mint","temp","dew","appt","pop12","qpf","snow","sky","rh","wspd","wdir","wx","icons","waveh","incw34","incw50","incw64","cumw34","cumw50","cumw64","wgust","critfireo","dryfireo","conhazo","ptornado","phail","ptstmwinds","pxtornado","pxhail","pxtstmwinds","ptotsvrtstm","pxtotsvrtstm","tmpabv14d","tmpblw14d","tmpabv30d","tmpblw30d","tmpabv90d","tmpblw90d","prcpabv14d","prcpblw14d","prcpabv30d","prcpblw30d","prcpabv90d","prcpblw90d","precipa_r","sky_r","td_r","temp_r","wdir_r","wspd_r","wwa","iceaccum","maxrh","minrh"];
//Global variables for supplemental georequests
noaaModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT = 0;


//Enable function. Stores the API key for this module and sets it as enabled
noaaModule.prototype.enable = function(apiKey) {
    this.enabled = true;
};


noaaModule.prototype.buildRequest = function(request, callback) {

    // Base URL
    var urlToRun = this.DEFAULT_ENDPOINTS.apiURL;
    var urlsToReturn = [];
    var testPattern = "";

    // Add product
    if(typeof request.product != undefined){
        request.product = request.product.toLowerCase();
        if(request.product != "time-series" && request.product != "glance"){
            request.product = "time-series";
        }
    }else{
        request.product = "time-series";
    }

        urlToRun += "product="+request.product;


    // Begin and End.  Add if defined AND in UTC format.
    testPattern = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
    if(typeof request.begin != undefined) {
        // Test for valid begin
        if(!testPattern.text(request.begin)){
            // Begin request is invalid.  Send blank as default.
            request.begin = "";
        }
        urlToRun += "&begin="+request.begin;

    }

    if(typeof request.end != "undefined") {
        // Test for valid begin
        if(!testPattern.text(request.end)){
            // End request is invalid.  Send blank as default.
            request.end = "";
        }
        urlToRun += "&end="+request.end;

    }


    //allow for multiple capitalization approaches for the unit variable.  The official is "Unit".
    if(typeof request.unit != "undefined" && typeof request.Unit == "undefined"){
        request.Unit = request.unit;
    }
    if(typeof request.Unit != "undefined"){
        if(request.Unit != "m" && request.Unit != "e"){
            // default to english units if invalud request is made
            request.Unit = "e";
        }
        urlToRun += "&Unit="+request.Unit;
    }

    // Collapsse NDFD variables
    if(Array.isArray(request.ndfd)){
        for (var i in request.ndfd) {
            if(this.ndfdVariables.indexOf(ndfd[i])>-1){
                urlToRun += "&"+request.ndfd[i]+"="+request.ndfd[i];
            }
        }
    }


    // Final Assembly - Append location selection and break into sections as needed

    if(typeof request.lat != "undefined" && typeof request.lon != "undefined" && request.lat != "" && request.lon !=""){
        // If lat lon / Single Point Unsummarized Data
        urlsToReturn.push(urlToRun + "&lat=" + request.lat & "&lon=" + request.lon);
    }else if(typeof request.listLatLon != "undefined" && request.listLatLon != ""){
        // If List lat lon / Multiple Point Unsummarized Data
        if (!Array.isArray(request.listLatLon)){
            while(request.listLatLon.indexOf("  ")>-1){
                // ensure that all pairs are separated by a single space
                request.listLatLon = request.listLatLon.replace("  "," ");
            }
            request.listLatLon = request.listLatLon.trim();
            var intermediatePlaceholder = request.listLatLon.split(" ");
        }else{
            var intermediatePlaceholder = request.listLatLon;
        }

        var semiFinalPlaceholder = [];
        for (var i in intermediatePlaceholder) {
            if(!Array.isArray(intermediatePlaceholder[i])){
                var coordPair = intermediatePlaceholder[i].split(",");
            }else{
                var coordPair = intermediatePlaceholder[i];
            }
            // Validate coordinate pairs
            var f = Math.floor(i/200);
            if(coordPair.length() == 2 && !isNaN(parseFloat(coordPair[1])) && !isNaN(parseFloat(coordPair[0]))){
                // Divide into blocks of 200 or less
                if(!Array.isArray( semiFinalPlaceholder[f])){
                    semiFinalPlaceholder[f] = [];
                }

                // TODO Check cache to see if coords have already been retrieved


                semiFinalPlaceholder[f].push(coordPair);
            }

        }

        // Implode the blocks of coord sets
        for (var i in semiFinalPlaceholder) {
            var collapsedSet = [];
            for (q in semiFinalPlaceholder[i]){
                collapsedSet.push(semiFinalPlaceholder[i][g].join(","));
            }
            urlsToReturn.push(urlToRun+"&listLatLon="+collapsedSet.join(" "));
        }

    }else if(typeof request.lat1 != "undefined" && typeof request.lon1 != "undefined" && typeof request.lat2 != "undefined" && typeof request.lon2 != "undefined" && request.lat1 != "" && request.lat2 != "" && request.lon1 != "" && request.lon2 != ""){
        // Lat 1 2 Lon 1 2 / Unsummarized Data for a Subgrid


        // resolutionSub


    }else if(typeof request.endPoint1Lat != "undefined" && typeof request.endPoint2Lat != "undefined" && typeof request.endPoint2Lon != "undefined" && typeof request.endPoint1Lon != "undefined" && request.endPoint1Lat != "" && request.endpoint2Lat != "" && request.endpoint1Lon != "" && endpoint2Lon != "") {
        //endPoint1Lat, endPoint2Lat, Unsummarized Data for a Line

    }else if(typeof request.zipCodeList != "undefined" && request.zipCodeList != "") {
        // Unsummarized Data for One or More Zipcodes

    }else if(typeof request.citiesLevel != "undefined" && request.citiesLevel != "") {
        //Unsummarized Data for a List of Cities

    }else if(typeof request.centerPointLat != "undefined" && typeof request.centerPointLon != "undefined" && typeof request.distanceLat != "undefined" && typeof request.distanceLon != "undefined" && request.centerPointLat != "" && request.centerPointLon != "" && request.distanceLat != "" && request.distanceLon != ""){
        //Unsummarized Data for a Subgrid Defined by a Center Point


        // resolutionSquare


    }else{
        // no location has been defined
        urlsToReturn = false;
    }












        return urlsToReturn;
}//buildRequest




noaaModule.prototype.request = function(request, callback) {

    // Build the Request
    request = CitySDK.prototype.sdkInstance.parseRequestLatLng(request);

    // Move all location variables out of request into new array
    var locationControlArray = {};
    for (var i in this.locationBasedVariables) {
       if(locationBasedVariables[i] in request){
           if(request[i]!="" || request[i].length > 0){
               locationControlArray[i] = request[i];
               delete request[i];
           }
       }
    }

    // Check to see if a location was specified (location is required)
    if(locationControlArray.length < 1){
        return false;
    }

    // Determine type of location request
    var locationType = "lat";



        // If caching is enabled
        if(CitySDK.prototype.sdkInstance.allowCache){
            // Check the location hash to see if there is data < hour old

            // Remove location points from request that are already in the cache (and save them for later integration
        }else{
            // Empty the integration variable as nothing has been cached

        }




}

noaaModule.prototype.search = function(request, callback) {
    return this.request(request,callback);
}



//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.noaa;
//when 'this' is ambiguous