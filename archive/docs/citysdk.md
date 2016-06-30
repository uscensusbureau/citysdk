<a name="CitySDK"></a>

## CitySDK
**Kind**: global class  

* [CitySDK](#CitySDK)
    * [new CitySDK()](#new_CitySDK_new)
    * [.version](#CitySDK+version)
    * [.allowCache](#CitySDK+allowCache)
    * [.modules](#CitySDK+modules) : <code>object</code>
    * [.ajaxRequest(url)](#CitySDK+ajaxRequest) ⇒ <code>promise</code>
    * [.jsonpRequest(url)](#CitySDK+jsonpRequest) ⇒ <code>object</code>
    * [.postRequest(url, data)](#CitySDK+postRequest) ⇒ <code>\*</code>
    * [.stateNames()](#CitySDK+stateNames) ⇒ <code>object</code>
    * [.stateCapitals()](#CitySDK+stateCapitals) ⇒ <code>object</code>
    * [.getStateCapitalCoords(stateString)](#CitySDK+getStateCapitalCoords) ⇒ <code>Array</code>
    * [.parseRequestLatLng(request)](#CitySDK+parseRequestLatLng) ⇒ <code>object</code>
    * [.getCachedData(module, hashKey)](#CitySDK+getCachedData) ⇒ <code>object</code>
    * [.setCachedData(module, hashKey, dataValue)](#CitySDK+setCachedData) ⇒ <code>object</code>
    * [.deleteCachedData(module, hashKey)](#CitySDK+deleteCachedData) ⇒ <code>object</code>
    * [.storageAvailable(type)](#CitySDK+storageAvailable) ⇒ <code>boolean</code>
    * [.ESRItoGEO(esriJSON)](#CitySDK+ESRItoGEO) ⇒ <code>Object</code>
    * [.GEOtoESRI(geoJSON)](#CitySDK+GEOtoESRI) ⇒ <code>object</code>

<a name="new_CitySDK_new"></a>

### new CitySDK()
Instantiates an instance of the CitySDK object.

<a name="CitySDK+version"></a>

### citySDK.version
Version number of the CitySDK Core

**Kind**: instance property of <code>[CitySDK](#CitySDK)</code>  
<a name="CitySDK+allowCache"></a>

### citySDK.allowCache
Toggles whether CitySDK will attempt to cache data to reduce the API call requirements

**Kind**: instance property of <code>[CitySDK](#CitySDK)</code>  
<a name="CitySDK+modules"></a>

### citySDK.modules : <code>object</code>
Stores each module

**Kind**: instance property of <code>[CitySDK](#CitySDK)</code>  
<a name="CitySDK+ajaxRequest"></a>

### citySDK.ajaxRequest(url) ⇒ <code>promise</code>
Makes an AJAX call

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>promise</code> - Returns a standard ajax promise  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to request |

<a name="CitySDK+jsonpRequest"></a>

### citySDK.jsonpRequest(url) ⇒ <code>object</code>
Makes an AJAX call (using jsonp)

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>object</code> - Returns a standard ajax promise  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to request |

<a name="CitySDK+postRequest"></a>

### citySDK.postRequest(url, data) ⇒ <code>\*</code>
Make an AJAX call (using POST)

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| data | <code>object</code> | 

<a name="CitySDK+stateNames"></a>

### citySDK.stateNames() ⇒ <code>object</code>
Returns a list of state names keyed by 2-leter code

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>object</code> - state names keyed by 2-leter code  
<a name="CitySDK+stateCapitals"></a>

### citySDK.stateCapitals() ⇒ <code>object</code>
Returns a Lat & Long of each state's capital

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>object</code> - arrays of Lat & Long of each state's capital keyed by 2-leter code  
<a name="CitySDK+getStateCapitalCoords"></a>

### citySDK.getStateCapitalCoords(stateString) ⇒ <code>Array</code>
Gets the coordinates of a state's capital from it's name or 2-letter code.

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>Array</code> - Returns 2-position array of Lat & Long for the capital of the state. Returns false if no state is found.  

| Param | Type | Description |
| --- | --- | --- |
| stateString | <code>string</code> | Name or 2-letter code of the state (case insensitive) |

<a name="CitySDK+parseRequestLatLng"></a>

### citySDK.parseRequestLatLng(request) ⇒ <code>object</code>
Scans the request for alternative ways to specify latitude & longiture and migrates those variables to lat & lng positions.

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>object</code> - the updated request  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>object</code> | the request being made to the module |

<a name="CitySDK+getCachedData"></a>

### citySDK.getCachedData(module, hashKey) ⇒ <code>object</code>
Retrieves a value from the cache

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>object</code> - the value of the cached data.  Returns false if nothing found  

| Param | Type | Description |
| --- | --- | --- |
| module | <code>string</code> | name of the CitySDK module |
| hashKey | <code>string</code> | this is a key that identifies the data. Each module has its own hashing scheme. |

<a name="CitySDK+setCachedData"></a>

### citySDK.setCachedData(module, hashKey, dataValue) ⇒ <code>object</code>
Creates and/or Updates a value from the cache

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>object</code> - the value of the cached data.  Returns false if nothing found  

| Param | Type | Description |
| --- | --- | --- |
| module | <code>string</code> | name of the CitySDK module |
| hashKey | <code>string</code> | this is a key that identifies the data. Each module has its own hashing scheme. |
| dataValue | <code>object</code> | this is the data being stored.  It should be an object that contains both the specific data and any meta information needed to invalidate it. |

<a name="CitySDK+deleteCachedData"></a>

### citySDK.deleteCachedData(module, hashKey) ⇒ <code>object</code>
Deletes a value from the cache

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>object</code> - the value of the cached data.  Returns false if nothing found  

| Param | Type | Description |
| --- | --- | --- |
| module | <code>string</code> | name of the CitySDK module |
| hashKey | <code>string</code> | this is a key that identifies the data. Each module has its own hashing scheme. |

<a name="CitySDK+storageAvailable"></a>

### citySDK.storageAvailable(type) ⇒ <code>boolean</code>
Checks to see whether local storage is available

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  
**Returns**: <code>boolean</code> - true if storage type is available  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | the tyoe fo storage being tested. Generally 'localstorage' is used. |

<a name="CitySDK+ESRItoGEO"></a>

### citySDK.ESRItoGEO(esriJSON) ⇒ <code>Object</code>
Converts ESRI JSON to GeoJSON

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  

| Param | Type |
| --- | --- |
| esriJSON | <code>string</code> | 

<a name="CitySDK+GEOtoESRI"></a>

### citySDK.GEOtoESRI(geoJSON) ⇒ <code>object</code>
Converts geoJSON to ESRI JSONThis is functionally an alias of Terraformer.ArcGIS.convert (see https://github.com/Esri/Terraformer for details)

**Kind**: instance method of <code>[CitySDK](#CitySDK)</code>  

| Param | Type |
| --- | --- |
| geoJSON | <code>string</code> | 

