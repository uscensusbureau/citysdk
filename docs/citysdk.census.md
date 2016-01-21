# Global





* * *

## Class: CensusModule
Instantiates an instance of the CitySDK Census module.

**availableDataSets**: `object` , Available years and the apis available with those years
**requiredVariables**: `object` , Required Variables for each API that MUST be in each request
**usBoundingBox**:  , Bounding box {object} to allow users to request all geographies within the US, as there is no US boundary map server
**stateCapitals**: `object` , Dictionary of state codes to state capital coordinates. i.e. "AL" -> 32.3617, -86.2792
**aliases**: `object` , Dictionary of aliases, string alias -> object with variable and description
### CensusModule.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false if not enabled.

### CensusModule.parseToVariable(aliasOrVariable) 

Checks to see if a string is in the aliases dictionary and returns the appropriate variable if so.This function is depreciated and not recommended as it does not check to see if a particular alias is valid for a particular api.e.g. "income" will return "DP03_0064PE"If the string is not in the alias dictionary, it will return the same string back. This is useful for parsinguser input. (Either a user requests a variable in the alias dictionary OR a specific variable)

**Parameters**

**aliasOrVariable**: `string`, A string to parse into a variable string.

**Returns**: `string`, Variable string

### CensusModule.parseToValidVariable(aliasOrVariable, api, year) 

Checks to see if a string is in the aliases dictionary and returns the appropriate VALID variable if so.e.g. "income" will return "DP03_0064PE"If the string is not in the alias dictionary, it will return the same string back. This is useful for parsinguser input. (Either a user requests a variable in the alias dictionary OR a specific variable)

**Parameters**

**aliasOrVariable**: `string`, A string to parse into a variable string.

**api**: `string`, The api key being called (acs5, sf1, etc)

**year**: `string`, The year of the desired dataset

**Returns**: `string`, Variable string

### CensusModule.isNormalizable(alias) 

Determines if the alias is normalizable.  This is generally limited to aliases of ACS variables (American Community Survey)

**Parameters**

**alias**: `string`, Determines if the alias is normalizable.  This is generally limited to aliases of ACS variables (American Community Survey)

**Returns**: `boolean`, Returns TRUE if the alias is normalizable (as marked in the alias dictionary), otherwise, false.

### CensusModule.parseRequestStateCode(request) 

Parses the state code in a request object, converting two letter state codes to lat/lng

**Parameters**

**request**: `object`, Object representing an api request


### CensusModule.parseRequestLatLng(request) 

Checks the request object for lat/lng latitude/longitude and x/y fields and moves them to the appropriate locationsfor processing by the module

**Parameters**

**request**: `object`, Object representing an api request


### CensusModule.ESRItoGEO(esriJSON) 

Converts ESRI JSON to GeoJSON

**Parameters**

**esriJSON**: `string`, Converts ESRI JSON to GeoJSON

**Returns**: `Object`

### CensusModule.GEOtoESRI(geoJSON) 

Converts geoJSON to ESRI JSONThis is functionally an alias of Terraformer.ArcGIS.convert (see https://github.com/Esri/Terraformer for details)

**Parameters**

**geoJSON**: `string`, Converts geoJSON to ESRI JSONThis is functionally an alias of Terraformer.ArcGIS.convert (see https://github.com/Esri/Terraformer for details)

**Returns**: `object`

### CensusModule.getVariableDictionary(api, year, callback) 

Downloads an ACS API's entire dictionary of variables from the Census

**Parameters**

**api**: `string`, Downloads an ACS API's entire dictionary of variables from the Census

**year**: `string`, Downloads an ACS API's entire dictionary of variables from the Census

**callback**: `function`, Downloads an ACS API's entire dictionary of variables from the Census


### CensusModule.latLngToFIPS(lat, lng, callback) 

Converts co-ordinates to Census FIPS via the Geocoder API

**Parameters**

**lat**: `float`, Latitude

**lng**: `float`, Longitude

**callback**: `function`, Callback function


### CensusModule.addressToFIPS(street, city, state, atfCallback) 

Converts a street address to Census FIPS via the Geocoder APIReturns an array of matched addresses.

**Parameters**

**street**: `string`, Street Address

**city**: `string`, City

**state**: `string`, State (2-Letter USPS Code)

**atfCallback**: `function`, Callback function


### CensusModule.ZIPtoLatLng(zip, callback) 

Converts a ZIP code to Lat/Lng and calls the callback on it.

**Parameters**

**zip**: `Number`, 5 digit Zip code

**callback**: `function`, Converts a ZIP code to Lat/Lng and calls the callback on it.


### CensusModule.summaryRequest(request, callback) 

Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically

**Parameters**

**request**: `object`, JSON request (see APIRequest)

**callback**: `function`, Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically


### CensusModule.tigerwebRequest(request, callback) 

Makes a call to the Census TigerWeb API for Geometry.Our spatial reference is 4326

**Parameters**

**request**: `object`, Makes a call to the Census TigerWeb API for Geometry.Our spatial reference is 4326

**callback**: `function`, Makes a call to the Census TigerWeb API for Geometry.Our spatial reference is 4326


### CensusModule.APIRequest(request, callback) 

Processes a data request by looking at a JSON requestJSON Requests should include:"year" - Year of the request. See acs5years object for available years. Defaults to 2013 if not specified."lat" - Latitude of the requested location (either specified as x, lat, or latitude) NORTH"lng" - Longitude of the requested location (either specified as y, lng, or longitude) EAST"sublevel" - Defaults to "false". If set to "true", it will return the group of sublevels from the specified level."level" - Level of the request. Options are: blockGroup, tract, county, state, us. Will default to blockGroup."variables" - Array of variables either by alias or specific nameexampleRequest = {      "year": "2013",      "lat": 38.9047,      "lng": -77.0164,      "level": "blockGroup"      "variables": [          "income"      ]  };  exampleResponse = {      "year": "2013",      "lat": 38.9047,      "lng": -77.0164,      "level": "blockGroup",      "state": "11",      "county": "001",      "tract": "004701",      "blockGroup": "2",      "data": {          "income": 33210      }  };  A response where you set sublevel to "true" will have an array in the data field instead of an object.  Another example request:  {     "state": "NY",     "level": "state",     "variables": [         "income",         "population"     ]  }  You could also send an address object to specify location  {     "address": {         "street": "18 F Street NW"         "city": "Washington",         "state": "DC"      }      "level": "blockGroup",      "variables": [         "population"      ]  }

**Parameters**

**request**: `object`, The JSON object of the request

**callback**: `function`, A callback, which accepts a response parameter


### CensusModule.validateRequestGeographyVariables(requestIn, callback) 

Checks the geo-related parts of the request against the geography definition of the API being requested

**Parameters**

**requestIn**: `object`, Checks the geo-related parts of the request against the geography definition of the API being requested

**callback**: `function`, Checks the geo-related parts of the request against the geography definition of the API being requested


### CensusModule.validateRequestGeographyVariablesProcess(requestIn, callback) 

Compares the geoDefinition against the request.  Returns false if location variables required by the api are missing.

**Parameters**

**requestIn**: `object`, Compares the geoDefinition against the request.  Returns false if location variables required by the api are missing.

**callback**: `function`, Compares the geoDefinition against the request.  Returns false if location variables required by the api are missing.


### CensusModule.GEORequest(request, callback) 

Retrieves data and geographic shapes encoded as geoJSON.Example request.{     "lat": latitude,     "lng": longitude,     "sublevel": <optional> true/false,     "container": <optional> place/county/state/tract     "level": place/county/state/blockGroup/tract     "variables": []     "containerGeometry": <optional> Must have sublevel true and container flags, this value should be ESRI json and                         marks the boundaries of the query region. You can convery geojson to ESRI via                         CensusModule.prototype.GEOtoESRI}

**Parameters**

**request**: `object`, The JSON request

**callback**: `function`, The callback to take the response, which is geoJSON




* * *







**Overview:** The Census Module provides access to the various data sets provided by the Census Bureau. This includes several surveys (ACS, Decennial, etc), the geocoder service (convert locations to FIPS locations, and TigerWeb (map shape data).


