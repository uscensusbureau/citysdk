# Global





* * *

### parseToVariable(aliasOrVariable) 

Checks to see if a string is in the aliases dictionary and returns the appropriate variable if so.e.g. "income" will return "DP03_0064PE"If the string is not in the alias dictionary, it will return the same string back. This is useful for parsinguser input. (Either a user requests a variable in the alias dictionary OR a specific variable)

**Parameters**

**aliasOrVariable**: `string`, A string to parse into a variable string.

**Returns**: `string`, Variable string


### isNormalizable(alias) 

Returns TRUE if the alias is normalizable (as marked in the alias dictionary), otherwise, false.

**Parameters**

**alias**: , Returns TRUE if the alias is normalizable (as marked in the alias dictionary), otherwise, false.

**Returns**: `boolean`


### parseRequestStateCode(request) 

Parses the state code in a request object, converting two letter state codes to lat/lng

**Parameters**

**request**: , Object representing an api request



### parseRequestLatLng(request) 

Checks the request object for lat/lng latitude/longitude and x/y fields and moves them to the appropriate locationsfor processing by the module

**Parameters**

**request**: , Object representing an api request



## Class: ESRItoGEO
Converts ESRI JSON to GeoJSON


## Class: GEOtoESRI
Converts geoJSON to ESRI Json

### GEOtoESRI.getACSVariableDictionary(api, year, callback) 

Downloads an ACS API's entire dictionary of variables from the Census

**Parameters**

**api**: , Downloads an ACS API's entire dictionary of variables from the Census

**year**: , Downloads an ACS API's entire dictionary of variables from the Census

**callback**: , Downloads an ACS API's entire dictionary of variables from the Census


### GEOtoESRI.latLngToFIPS(lat, lng, callback) 

Converts co-ordinates to Census FIPS via the Geocoder API

**Parameters**

**lat**: `float`, Latitude

**lng**: `float`, Longitude

**callback**: `function`, Callback function


### GEOtoESRI.addressToFIPS(street, city, state, callback) 

Converts a street address to Census FIPS via the Geocoder APIReturns an array of matched addresses.

**Parameters**

**street**: , Street Address

**city**: , City

**state**: , State (2-Letter USPS Code)

**callback**: , Callback function


### GEOtoESRI.ZIPtoLatLng(zip, callback) 

Converts a ZIP code to Lat/Lng and calls the callback on it.

**Parameters**

**zip**: `Number`, 5 digit Zip code

**callback**: , Converts a ZIP code to Lat/Lng and calls the callback on it.


### GEOtoESRI.acsSummaryRequest(request, callback) 

Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically

**Parameters**

**request**: `object`, JSON request (see APIRequest)

**callback**: `function`, Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically


### GEOtoESRI.tigerwebRequest(request, callback) 

Makes a call to the Census TigerWeb API for Geometry.Our spatial reference is 4326

**Parameters**

**request**: , Makes a call to the Census TigerWeb API for Geometry.Our spatial reference is 4326

**callback**: , Makes a call to the Census TigerWeb API for Geometry.Our spatial reference is 4326


### GEOtoESRI.APIRequest(request, callback) 

Processes a data request by looking at a JSON requestJSON Requests should include:"year" - Year of the request. See acs5years object for available years. Defaults to 2013 if not specified."lat" - Latitude of the requested location (either specified as x, lat, or latitude) NORTH"lng" - Longitude of the requested location (either specified as y, lng, or longitude) EAST"sublevel" - Defaults to "false". If set to "true", it will return the group of sublevels from the specified level."level" - Level of the request. Options are: blockGroup, tract, county, state, us. Will default to blockGroup."variables" - Array of variables either by alias or specific nameexampleRequest = {      "year": "2013",      "lat": 38.9047,      "lng": -77.0164,      "level": "blockGroup"      "variables": [          "income"      ]  };  exampleResponse = {      "year": "2013",      "lat": 38.9047,      "lng": -77.0164,      "level": "blockGroup",      "state": "11",      "county": "001",      "tract": "004701",      "blockGroup": "2",      "data": {          "income": 33210      }  };  A response where you set sublevel to "true" will have an array in the data field instead of an object.  Another example request:  {     "state": "NY",     "level": "state",     "variables": [         "income",         "population"     ]  }  You could also send an address object to specify location  {     "address": {         "street": "18 F Street NW"         "city": "Washington",         "state": "DC"      }      "level": "blockGroup",      "variables": [         "population"      ]  }

**Parameters**

**request**: `object`, The JSON object of the request

**callback**: `function`, A callback, which accepts a response parameter


### GEOtoESRI.GEORequest(request, callback) 

Example request.{     "lat": latitude,     "lng": longitude,     "sublevel": <optional> true/false,     "container": <optional> place/county/state/tract     "level": place/county/state/blockGroup/tract     "variables": []     "containerGeometry": <optional> Must have sublevel true and container flags, this value should be ESRI json and                         marks the boundaries of the query region. You can convery geojson to ESRI via                         CensusModule.prototype.GEOtoESRI}

**Parameters**

**request**: `object`, The JSON request

**callback**: `function`, The callback to take the response, which is geoJSON




* * *










