# CitySDK Node API
------------------

This project is a port of the CitySDK Javascript version which could only be used in the client side (borwsers).

Users can now use the language of their preference or use cURL to retreive data using CitySDK.

## API key required
All requests require an API key. If you do not have an API key, you may request one. [Request API Key](http://api.census.gov/data/key_signup.html)

Once you have acquired an API key, it needs to be inlcuded in the basic auth header of every request.

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
| `/citysdk/census/geo` | `POST` | `JSON Object` (see the Request Object in Detail section of the CensusModule guide) | Request for retreiving GeoJSON |
| `/citysdk/census/api` | `POST` | `JSON Object` (see the Request Object in Detail section of the CensusModule guide) | Request for retreicing GeoJSON with Census data|

### Examples

**Requesting GeoJSON**

```
curl --user yourApiKey: -X POST -d '{"state": "MD", "level": "state"}' http://api.census.gov/citysdk/census/geo
```

**Requesting GeoJSON with data**

```
curl --user yourApiKey: -X POST -d '{"state": "MD", "level": "state"}' http://api.census.gov/citysdk/census/api
```