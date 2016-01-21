# Global





* * *

## Class: CitySDK
Instantiates an instance of the CitySDK object.

**version**:  , Version number of the CitySDK Core
**allowCache**:  , Toggles whether CitySDK will attempt to cache data to reduce the API call requirements
**modules**: `object` , Stores each module
### CitySDK.ajaxRequest(url) 

Makes an AJAX call

**Parameters**

**url**: `string`, URL to request

**Returns**: `promise`, Returns a standard ajax promise

### CitySDK.jsonpRequest(url) 

Makes an AJAX call (using jsonp)

**Parameters**

**url**: `string`, URL to request

**Returns**: `object`, Returns a standard ajax promise

### CitySDK.postRequest(url, data) 

Make an AJAX call (using POST)

**Parameters**

**url**: `string`, Make an AJAX call (using POST)

**data**: `object`, Make an AJAX call (using POST)

**Returns**: `*`

### CitySDK.stateNames() 

Returns a list of state names keyed by 2-leter code

**Returns**: `object`, state names keyed by 2-leter code

### CitySDK.stateCapitals() 

Returns a Lat & Long of each state's capital

**Returns**: `object`, arrays of Lat & Long of each state's capital keyed by 2-leter code

### CitySDK.getStateCapitalCoords(stateString) 

Gets the coordinates of a state's capital from it's name or 2-letter code.

**Parameters**

**stateString**: `string`, Name or 2-letter code of the state (case insensitive)

**Returns**: `array`, Returns 2-position array of Lat & Long for the capital of the state. Returns false if no state is found.

### CitySDK.parseRequestLatLng(request) 

Scans the request for alternative ways to specify latitude & longiture and migrates those variables to lat & lng positions.

**Parameters**

**request**: `object`, the request being made to the module

**Returns**: `object`, the updated request

### CitySDK.getCachedData(module, hashKey) 

Retrieves a value from the cache

**Parameters**

**module**: `string`, name of the CitySDK module

**hashKey**: `string`, this is a key that identifies the data. Each module has its own hashing scheme.

**Returns**: `object`, the value of the cached data.  Returns false if nothing found

### CitySDK.setCachedData(module, hashKey, dataValue) 

Creates and/or Updates a value from the cache

**Parameters**

**module**: `string`, name of the CitySDK module

**hashKey**: `string`, this is a key that identifies the data. Each module has its own hashing scheme.

**dataValue**: `object`, this is the data being stored.  It should be an object that contains both the specific data and any meta information needed to invalidate it.

**Returns**: `object`, the value of the cached data.  Returns false if nothing found

### CitySDK.deleteCachedData(module, hashKey) 

Deletes a value from the cache

**Parameters**

**module**: `string`, name of the CitySDK module

**hashKey**: `string`, this is a key that identifies the data. Each module has its own hashing scheme.

**Returns**: `object`, the value of the cached data.  Returns false if nothing found

### CitySDK.storageAvailable(type) 

Checks to see whether local storage is available

**Parameters**

**type**: `string`, the tyoe fo storage being tested. Generally 'localstorage' is used.

**Returns**: `boolean`, true if storage type is available



* * *







**Overview:** This is the core library for the CitySDK.  It houses the ajax mechanics, the caching system, and global data sets (such as state capitals and their coordinate points)


