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
curl --user yourApiKey: http://api.census.gov/data/
```

**Note:** leave the `password` field empty.

## Endpoints

| Path | Method | Request Data | Description |
| :--- | :--- | :--- | :--- |
| `/citysdk/census/geo` | `POST` | `JSON` [Request object](http://uscensusbureau.github.io/citysdk/guides/censusModule.html#theRequestObjectInDetail) | Returns GeoJSON data
| `/citysdk/census/api` | `POST` | `JSON` [Request object](http://uscensusbureau.github.io/citysdk/guides/censusModule.html#theRequestObjectInDetail) | Returns GeoJSON with Census data |

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
request_url = "http://citysdk.commerce.gov/census/api"

request_obj = {
    "lat": 38.9047,
    "lng": -77.0164,
    "level": "state",
    "variables": ["income", "population"]
}

response = requests.post(request_url, auth=HTTPBasicAuth(apikey, None), data=request_obj)

print response.json()

```

**Requesting GeoJSON and Census data using cURL**

```
curl --user yourApiKey: -X POST -d '{"lat": 38.9047, "lng": -77.0164, "level": "state", "variables": ["income", "population"]}' http://citysdk.commerce.gov/census/api
```
