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

## Requesting GeoJSON

**PATH:** /citysdk/census/geo

**METHOD:** POST

**REQUEST DATA:** please see the [Request Object in Detail](http://uscensusbureau.github.io/citysdk/guides/censusModule.html#theRequestObjectInDetail) section of the CensusModule guide.

**Example**

```
curl --user yourApiKey: -X POST -d '{"state": "MD", "level": "state"}' http://api.census.gov/citysdk/census/geo
```

## Requesting GeoJSON with data

**PATH:** /citysdk/censsus/api

**METHOD:** POST

**REQUEST DATA:** please see the [Request Object in Detail](http://uscensusbureau.github.io/citysdk/guides/censusModule.html#theRequestObjectInDetail) section of the CensusModule guide.

**Example**

```
curl --user yourApiKey: -X POST -d '{"state": "MD", "level": "state"}' http://api.census.gov/citysdk/census/api
```