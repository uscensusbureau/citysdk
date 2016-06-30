# CitySDK Node API

This project is a port of the CitySDK Javascript version which could only be used in the client side (browsers).

Now, users can use the language of their choice or use cURL to retreive data using [CitySDK](http://uscensusbureau.github.io/citysdk/).

## API key required
All requests require an API key. If you do not have an API key, you may request one. [Request API Key](http://api.census.gov/data/key_signup.html)

Once you have acquired an API key, it needs to be included in the [basic auth header](https://en.wikipedia.org/wiki/Basic_access_authentication) of every request.

```
Authorization: Basic <your_api_key>
```

**Example with cURL**

```
curl --user yourApiKey: http://citysdk.commerce.gov
```

**Note:** leave the `password` field empty.

## Endpoints

**Base URL:** http://citysdk.commerce.gov

| Path | Method | Request Data | Description |
| :--- | :--- | :--- | :--- |
| `/census/geo` | `POST` | `JSON` [Request object](http://uscensusbureau.github.io/citysdk/guides/censusModule.html#theRequestObjectInDetail) | Returns GeoJSON data
| `/census/api` | `POST` | `JSON` [Request object](http://uscensusbureau.github.io/citysdk/guides/censusModule.html#theRequestObjectInDetail) | Returns GeoJSON with Census data |
| `/census/aliases` | `GET` |  | Returns a map of alias -> variable |
| `/census/alias-to-variable` | `GET` | Comma separated aliases. Example: `?aliases=income,population` | Returns a map of alias -> variable for the given parameter values |
| `/census/variable-to-alias` | `GET` | Comma separated variables. Example: `?variables=P0010001,P0110022` | Returns a map of variable -> alias for the given parameter values |

## The Request Object

The request object you send using the POST method is just JSON.

| Property | Type | Supported Values | Description |
| :--- | :--- | :--- | :--- |
| `lat` | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) | Example: `34.8994` | The latitude of the requested location (North). Also supported: `latitude`, `y` |
| `lng` | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) | Example: `62.8995` | The longitude of the requested location (East). Also supported: `longitude`, `x` |
| `zip` | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | Example: `"20902"` | The 5-digit zip code of the location. Note that USPS zip code areas do not align precisely with Census geographies, so when high accuracy is required it is recommended to use latitude and longitude. Specified as a string because certain zip codes begin with zeroes. |
| `state` | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | Example: "MD" | The 2-letter USPS state code. It will be converted into the latitude and longitude of that state's capital. |
| `level` | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | `"blockGroup"`, `"tract"`, `"county"`, `"state"`, `"us"`, `"place"` | At what level to request the data. These are based on census geographies. |
| `sublevel` | [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) | `true` or `false` | See [sublevel requests](http://uscensusbureau.github.io/citysdk/guides/censusModule.html#sublevelRequests) for more information. Defaults to `false`. |
| `container` | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | `"tract"`, `"county"`, `"state"`, `"place"`, `"geometry"`, `"geometry_within"` | Specifies a level which serves as a boundary for a GeoJSON request. For instance, if your level is "tract" and your container is set as "place" with sublevel enabled, it the SDK will return all tracts which fall within or touch that place's geographical boundaries. Note that for the "geometry" and "geometry" within tags you must specify the containerGeometry. "geometry" will return any entities that intersect the given geometry (including if they intersect but extend beyond the perimeter) whereas "geometry_within" will only return entities that are entirely contained within the containerGeometry specified. |
| `containerGeometry` | [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects) | `{}` | Specifies the bounding geometry for a GeoJSON request. The format of this data should be ArcGIS ESRI JSON. You can convert GeoJSON into ESRI using the Census module's GEOtoESRI() method. The boundary can be any arbitrary closed region or regions. |
| `api` | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | Example: `"acs5"` | Specifies the API to use. |
| `year` | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) | Example: `2010` | Specifies the year of the API to use. Defaults to the most recent year. |
| `variables` | [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | `[]` | An array of strings specifying which variables to query. One can specify an aliased variable (see variable aliases) or a specific ACS variable code (e.g. "B01003_001E"). If this array is not specified, the SDK will simply geocode the location into Census FIPS codes. A list of all ACS variables is available on the Census's developer portal or via the SDK's getACSVariableDictionary method. |

## Examples

**Requesting GeoJSON and Census data using Python**

```python
import requests
from requests.auth import HTTPBasicAuth

apikey = "your_api_key"
request_url = "http://citysdk.commerce.gov"

request_obj = {
  'zip': '21401',
  'state': 'MD',
  'level': 'state',
  'sublevel': False,
  'api': 'acs5',
  'year': 2010,
  'variables': ['income', 'population']
}

response = requests.post(request_url, auth=HTTPBasicAuth(apikey, None), json=request_obj)

print response.json()

```

**Result data**

```json
{
  "blockGroup": "2", 
  "zip": "21401", 
  "level": "state", 
  "sublevel": false, 
  "variables": [
    "NAME", 
    "B19013_001E", 
    "B01003_001E"
  ], 
  "tract": "706101", 
  "county": "003", 
  "state": "24", 
  "api": "acs5", 
  "place": "01600", 
  "year": 2010, 
  "lat": 38.9898034, 
  "lng": -76.5501227, 
  "data": [
    {
      "B01003_001E": "5696423", 
      "NAME": "Maryland", 
      "B19013_001E": "70647"
    }
  ], 
  "geographyValidForAPI": true, 
  "place_name": "Annapolis city"
}
```


**Requesting GeoJSON and Census data using cURL**

```
curl --user yourApiKey: -X POST \
-H "Content-Type: application/json" \
-d '{"lat": 38.9047, "lng": -77.0164, "level": "state", "variables": ["income", "population"]}' \
http://citysdk.commerce.gov/citysdk
```

**Result data**

```json
{
  "lat": 38.9047,
  "lng": -77.0164,
  "level": "state",
  "variables": [
    "NAME",
    "B19013_001E",
    "B01003_001E"
  ],
  "api": "acs5",
  "year": "2014",
  "sublevel": false,
  "state": "11",
  "county": "001",
  "tract": "004701",
  "blockGroup": "2",
  "place": "50000",
  "place_name": "Washington city",
  "geographyValidForAPI": true,
  "data": [
    {
      "NAME": "District of Columbia",
      "B19013_001E": "69235",
      "B01003_001E": "633736"
    }
  ]
}
```
