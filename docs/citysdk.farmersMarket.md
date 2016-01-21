# CitySDK USDA Farmer&#39;s Market Module





* * *

## Class: FarmersMarketModule
Instantiates an instance of the CitySDK Farmer's Market object.

### CitySDK USDA Farmer&#39;s Market Module.FarmersMarketModule.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false if not enabled.

### CitySDK USDA Farmer&#39;s Market Module.FarmersMarketModule.APIRequest(request, callback) 

Searches near a specified lat/lng or zipcode

**Parameters**

**request**: `object`, JSON request<pre><code>request = { lat: 34, lng: 77 }</code></pre>Or<pre><code>request = { zip: 20002 }</code></pre>

**callback**: `function`, Searches near a specified lat/lng or zipcode

**Returns**: `object`, <pre><code>{     results: [         {             id: 11011             marketname: "Farmers Market A"         },         {             id: 4203             marketname: "Farmers Market B"         }     ]}</code></pre>

### CitySDK USDA Farmer&#39;s Market Module.FarmersMarketModule.detail(request, callback) 

Requests details about the farmer's market with specified id

**Parameters**

**request**: `object`, JSON request<pre><code>{                     id: 2201                 }</code></pre>

**callback**: `function`, Requests details about the farmer's market with specified id

**Returns**: `object`, <pre><code>{     "marketdetails": {                     "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",                     "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",                     "Products":"",                     "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "                     }}</code></pre>



* * *










