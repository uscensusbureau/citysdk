---
layout: guideslayout
published: true
title: ArcGIS Module Developer Documentation
---

* * *

## Class: arcgisModule
Instantiates an instance of the CitySDK ArcGIS object.

### CitySDK ArcGIS API Module.arcgisModule.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false if not enabled.

### CitySDK ArcGIS API Module.arcgisModule.seriesRequest(request, callback) 

This will query an ArcGIS server and return a list of all published services

**Parameters**

**request**: `object`, Request should specify category. If no category specified, will default to the root list of datasets
<pre><code>{
     "url": [optional] optional base url of the ArcGIS server. It will default to the API URL defined in the module.
}</code></pre>

**callback**: `function`, This will query an ArcGIS server and return a list of all published services


### CitySDK ArcGIS API Module.arcgisModule.getLevelDictionary(request, callback) 

Downloads an API's entire dictionary of levels/layers from the ArcGIS server
Example request.

<pre><code>{
     "url": [optional] optional base url of the ArcGIS server. It will default to the API URL defined in the module.
     "api": [required] This is the name of the API
}</code></pre>

**Parameters**

**request**: `object`, The JSON request

**callback**: `function`, Downloads an API's entire dictionary of levels/layers from the ArcGIS server
Example request.

<pre><code>{
     "url": [optional] optional base url of the ArcGIS server. It will default to the API URL defined in the module.
     "api": [required] This is the name of the API
}</code></pre>


### CitySDK ArcGIS API Module.arcgisModule.getVariableDictionary(request, callback) 

Downloads an API's entire dictionary of variables and description of the level/layer from the ArcGIS server.
This function is also used to check the last edit date of the the data itself.
Example request.

<pre><code>{
     "url": [optional] optional base url of the ArcGIS server. It will default to the API URL defined in the module.
     "level": [optional] The data level requested. Defaults to 0 if not specified.
     "api":  [required] This is the name of the API
}</code></pre>

**Parameters**

**request**: `object`, The JSON request

**callback**: `function`, Downloads an API's entire dictionary of variables and description of the level/layer from the ArcGIS server.
This function is also used to check the last edit date of the the data itself.
Example request.

<pre><code>{
     "url": [optional] optional base url of the ArcGIS server. It will default to the API URL defined in the module.
     "level": [optional] The data level requested. Defaults to 0 if not specified.
     "api":  [required] This is the name of the API
}</code></pre>


### CitySDK ArcGIS API Module.arcgisModule.validateVariableList(variableArray, dataDescription) 

Checks a list of variables to see if they are valid fields/variables in a given service layer.

**Parameters**

**variableArray**: `array`, Array of variables to check validity

**dataDescription**: `object`, The variableDictionary object from a getVariableDictionary() call

**Returns**: `array`, Array of variables that are valid (invalid variables are removed)

### CitySDK ArcGIS API Module.arcgisModule.APIRequest(request, callback) 

Processes a data request by looking at a JSON request

JSON Requests can include:
     "url": [optional] optional base url of the ArcGIS server. It will default to the API URL defined in the module.
     "level": [optional] The data level requested. Defaults to first layer defined in the service if not specified or 0.
     "api":  [required] This is the name of the API
     "variables": [optional] Array of variables either by specific name
     "where": [optional] This is a single string that contains all where clause information
     "order": [optional] Array of variables either by specific name to use in an order by clause
<pre><code>request = {
       "api": "Jobs_Proximity_Index",
       "level": "0",
       "where": "JOBS_IDX > 50 AND JOBS_IDX < 60",
       },
       "variables": [
           "BLOCKGROUPID",
           "JOBS_IDX",
       ],

   };</code></pre>

**Parameters**

**request**: `object`, The JSON object of the request

**callback**: `function`, A callback, which accepts a response parameter




* * *

