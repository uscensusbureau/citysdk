# CitySDK EIA API ModuleThis module requires a key from http:&#x2F;&#x2F;www.eia.gov&#x2F;





* * *

## Class: EIAModule
Instantiates an instance of the CitySDK EIA object.

### CitySDK EIA API ModuleThis module requires a key from http:&#x2F;&#x2F;www.eia.gov&#x2F;.EIAModule.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false if not enabled.

### CitySDK EIA API ModuleThis module requires a key from http:&#x2F;&#x2F;www.eia.gov&#x2F;.EIAModule.categoryRequest(request, callback) 

Call which returns category listings from the dataset explorer

**Parameters**

**request**: `object`, Request should specify category. If no category specified, will default to the root list of datasets<pre><code>{     category: 05}</code></pre>

**callback**: `function`, Call which returns category listings from the dataset explorer


### CitySDK EIA API ModuleThis module requires a key from http:&#x2F;&#x2F;www.eia.gov&#x2F;.EIAModule.seriesRequest(request, callback) 

Call which returns data from the specified series

**Parameters**

**request**: `object`, Request should specify a series, if not, nothing will happen<pre><code>{     series: "ELEC.GEN.ALL-AL-99.A"}</code></pre>

**callback**: `function`, Call which returns data from the specified series




* * *










