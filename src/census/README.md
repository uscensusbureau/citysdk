# CitySDK v2.0 (Beta)

## The `census` Function

CitySDK v2.0 ships a single function, which takes two arguments:
- The first is an argument object with a set of key/value pairs parameters (See "Full Parameter Set" below)
- The second is a callback function, which will be called upon completion of the `census` function and applied to the response

## Full Parameter Set

Brief overview of each argument that can be passed into CitySDK v2.0

| Parameter       | Description   | [Geocodes](#census-geocoding) | [Stats](#getting-statistics) | [GeoJSON](#cartographic-geojson)  | [GeoJSON with Stats](#geojson-with-stats) 
| ---             | ---                                                                                 | :---:    | :---: | :---:    | :---:           
| `vintage`       | Refers to the reference year (typically release year) of the data requested         | ✔        | ✔    | ✔        | ✔              
| `geoHierarchy`  | The geographic scope and hierarchical path to the data requested                    | ✔        | ✔    | ✔        | ✔              
| `sourcePath`    | Refers to the Census survey and/or product from which your request should be filled |          | ✔    |           | ✔              
| `values`        | For Census statistics, `values` request counts/estimates by their unique identifier |          | ✔    |           | ✔              
| `predicates`    | Used as a filter available on some values with ranges denoted using `:`             |          | ✔`*`  |          | ✔`*`           
| `statsKey`      | You may request a key for Census' statistics API [here]()                           |          | ✔`**` |          | ✔`**`          
| `geoResolution` | One of three available resolutions of GeoJSON (`"20m"`, `"5m"`, and `"500k"`)       |          |       | ✔        | ✔              

Notes:

`*`  : `predicates` are optional 

`**` : `statsKey` is optional for > 500 requests daily

## Census Geocoding

This functionality can be used either stand-alone or as a part of other parameter sets. Use latitude and longitudinal coordinates as the geographic reference for calling into Census's APIs. Under the hood, this calls the [TigerWeb Web Mapping Service]() with the `lat` + `lng` provided and returns a JSON object with according [FIPS codes] included as the hierarchical components within the `geoHiearchy`. 

With the exception of "microdata" statistics (not yet available via Census' API), all Census data is aggregated to geographic areas of different sizes. As such, all of Census' API's require a geographic scope to return any data. The standard used to identify these geographic areas is the [FIPS code standard](). Given that these codes are not common knowledge, the CitySDK provides a way for the user to identify their geographic scope of interest using a geographic coordinate (latitude + longitude).

There are two ways to scope your request using this functionality:

#### 1) Request a single geographic area
 
You may pass a `{"lat" : <float>, "lng" : <float>}` object as the first and _only_ subargument to a geography within the `geoHierarchy` parameter:

```js
import census from 'citySDK'

census(
  {
    "vintage" : "2015",
    "geoHierarchy" : {
      "county" : {
        "lat" : 28.2639, 
        "lng" : -80.7214
      }
    }
  }, 
  (r) => console.log(r)
)

// -> {"vintage":"2015","geoHierarchy":{"state":"12","county":"009"}}

``` 

Notice how the function prepends an additional geographic component (`"state" : "12"`) to the response object. This is the correct behavior. In this example, we requested a specific county using a coordinate. However, in order to fully qualify the geographic area associated with the county, the state is needed. this is handled by the function for you.

#### 2) Request all of a decendent geography of a specified geographic area

Example:
```js
import census from 'citySDK'

census(
  {
    "vintage" : "2015",
    "geoHierarchy" : {
      "state" : {
        "lat" : 28.2639, 
        "lng" : -80.7214
      },
      "county" : "*"
    }
  }, 
  (r) => console.log(r)
)

// -> {"vintage":"2015","geoHierarchy":{"state":"12","county":"*"}}

```

Internally, the CitySDK converts the `geoHierarchy` object to an ordered set, so this part of your request object must be in decending hierarchical order from parent -> child/decendant. E.g. - in the above - an object that contained `{"county" : "*", "state" : {"lat" <lat> "lng" <lng>}}` will not work.

In this example, we added a second geographic level to our `geoHierarchy` object (`"county" : "*"`). It is important to use the `"*"` expression signifying that you want _all_ of the specified level of decendents within the geography for which you supply a coordinate. No other expression will work.

## Getting Statistics


Example 1 - get `"values"` by ID:

```diff
import census from 'citySDK'

census(
  {
    "vintage" : "2015",
    "geoHierarchy" : {
-     "state" : {
-       "lat" : 28.2639, 
-       "lng" : -80.7214
-     },
-     "county" : "*"
+     "county" : {
+       "lat" : 28.2639, 
+       "lng" : -80.7214
+     }
    },
+   "sourcePath" : ["cbp"],
+   "values" : ["ESTAB"]
  }, 
  (r) => console.log(r)
)

// -> [{"ESTAB":13648,"state":"12","county":"009"}]

```

Here, we added the parameters for `sourcePath` (the path to the survey and/or source of the statistics) and `values` (the identifiers of the statistics we're interested in). 



## Cartographic GeoJSON

## GeoJSON with Stats

### Census Statistics Only

| parameters      | example                                                          | type                          | required/optional  
| ---             | ---                                                              | :---:                         | :---:             
| `vintage`       | `"vintage" : "2015"`                                             | String or Integer             | required     
| `geoHierarchy`  | `"geoHierarchy" : {"state" : "01", "county" : "001"}`            | Object of k/v pairs (Strings) | required
| `values`        | `"values" : ["B00001_001E"]`                                     | Array of Strings              | at least one value required
| `statsKey`      | `"statsKey" : "ABC123"`                                          | String                        | optional for < 500 calls (daily)
| `predicates`    | `"predicates" : {"B00001_001E" : "0:1000"}`                      | Object of k/v pairs (Strings) | optional

This parameter set will call the Census Statistics API and reformat the results with a few helpful features:
- Census statistics are returned as a standard JSON object with properly typed numbers (Integers and Floats instead of strings), whereas all values are returned as strings via the "naked" API
- 

### Census GeoJSON Only

| parameters      | example                                                          | type                          | required/optional  
| ---             | ---                                                              | :---:                         | :---:             
| `vintage`       | `"vintage" : "2015"`                                             | String or Integer             | required     
| `geoHierarchy`  | `"geoHierarchy" : {"state" : "01", "county" : "001"}`            | Object of k/v pairs (Strings) | required
| `geoResolution` | `"500k"`                                                         | String                        | required


### Census Statistics within GeoJSON (Merged)

| parameters      | example                                                          | type                          | required/optional  
| ---             | ---                                                              | :---:                         | :---:             
| `vintage`       | `"vintage" : "2015"`                                             | String or Integer             | required     
| `geoHierarchy`  | `"geoHierarchy" : {"state" : "01", "county" : "001"}`            | Object of k/v pairs (Strings) | required
| `geoResolution` | `"500k"`                                                         | String                        | required
| `values`        | `"values" : ["B00001_001E"]`                                     | Array of Strings              | at least one value required
| `statsKey`      | `"statsKey" : "ABC123"`                                          | String                        | optional for < 500 calls (daily)
| `predicates`    | `"predicates" : {"B00001_001E" : "0:1000"}`                      | Object of k/v pairs (Strings) | optional





