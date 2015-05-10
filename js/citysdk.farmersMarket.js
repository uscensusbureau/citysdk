/**
 * This is the CitySDK USDA Farmer's Market API Module
 * This module requires no key.
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.farmersMarket = new FarmersMarketModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function FarmersMarketModule() {
    this.enabled = false;
};

//Enable function. Stores the API key for this module and sets it as enabled
FarmersMarketModule.prototype.enable = function() {
    this.enabled = true;
};

/**
 * Searches near a specified lat/lng or zipcode
 *
 * request = { lat: 34, lng: 77 }
 * Or
 * request = { zip: 20002 }
 *
 * Response:
 *
 * {
 *      results: [
 *          {
 *              id: 11011
 *              marketname: "Farmers Market A"
 *          },
 *          {
 *              id: 4203
 *              marketname: "Farmers Market B"
 *          }
 *      ]
 * }
 *
 * @param request
 * @param callback
 */
FarmersMarketModule.prototype.search = function(request, callback) {
    var latPattern = /({lat})/;
    var lngPattern = /({lng})/;
    var zipPattern = /({zip})/;

    var fragmentPattern = /({fragment})/;

    //Check for geographical data
    //Allow the users to use either x,y; lat,lng; latitude,longitude to sepecify co-ordinates
    if(!("lat" in request)) {
        if("latitude" in request) {
            request.lat = request.latitude;
            delete request.latitude;
        } else if ("y" in request) {
            request.lat = request.y;
            delete request.y;
        }
    }

    if(!("lng" in request)) {
        if("longitude" in request) {
            request.lng = request.longitude;
            delete request.longitude;
        } else if("x" in request) {
            request.lng = request.x;
            delete request.x;
        }
    }

    var zipFragment = "zipSearch?zip={zip}";
    var locFragment = "locSearch?lat={lat}&lng={lng}";

    var farmersMarketURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/{fragment}";
    if("lat" in request && "lng" in request) {
        farmersMarketURL = farmersMarketURL.replace(fragmentPattern, locFragment);
    } else {
        farmersMarketURL = farmersMarketURL.replace(fragmentPattern, zipFragment);
    }

    farmersMarketURL = farmersMarketURL.replace(zipPattern, request.zip);
    farmersMarketURL = farmersMarketURL.replace(latPattern, request.lat);
    farmersMarketURL = farmersMarketURL.replace(lngPattern, request.lng);

    CitySDK.prototype.sdkInstance.jsonpRequest(farmersMarketURL).done(
        function(response) {
            callback(response);
        }
    );
};

/**
 * Requests details about the farmer's market with specified id
 *
 * Example request: {
 *                      id: 2201
 *                  }
 *
 * Response:
 * {
 *      "marketdetails": {
 *                      "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",
 *                      "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",
 *                      "Products":"",
 *                      "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "
 *                      }
 * }
 * @param request
 * @param callback
 */
FarmersMarketModule.prototype.detail = function(request, callback) {
    var idPattern = /({id})/;

    var detailURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id={id}";

    detailURL = detailURL.replace(idPattern, request.id);

    CitySDK.prototype.sdkInstance.jsonpRequest(detailURL).done(
        function(response) {
            callback(response);
        }
    );
};

//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.farmersMarket;
//when 'this' is ambiguous