# Global





* * *

## Class: FarmersMarketModule
Instantiates an instance of the CitySDK Farmer's Market object.

### FarmersMarketModule.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false is not enabled.

### FarmersMarketModule.search(request, callback) 

Searches near a specified lat/lng or zipcoderequest = { lat: 34, lng: 77 }Orrequest = { zip: 20002 }Response:{     results: [         {             id: 11011             marketname: "Farmers Market A"         },         {             id: 4203             marketname: "Farmers Market B"         }     ]}

**Parameters**

**request**: `object`, JSON request

**callback**: `function`, Searches near a specified lat/lng or zipcoderequest = { lat: 34, lng: 77 }Orrequest = { zip: 20002 }Response:{     results: [         {             id: 11011             marketname: "Farmers Market A"         },         {             id: 4203             marketname: "Farmers Market B"         }     ]}


### FarmersMarketModule.detail(request, callback) 

Requests details about the farmer's market with specified idExample request: {                     id: 2201                 }Response:{     "marketdetails": {                     "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",                     "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",                     "Products":"",                     "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "                     }}

**Parameters**

**request**: `object`, JSON request

**callback**: `function`, Requests details about the farmer's market with specified idExample request: {                     id: 2201                 }Response:{     "marketdetails": {                     "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",                     "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",                     "Products":"",                     "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "                     }}

**Returns**: `object`, {     "marketdetails": {                     "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",                     "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",                     "Products":"",                     "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "                     }}



* * *










