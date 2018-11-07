# CitySDK v2.0 (Beta)

## The `census` Function

CitySDK v2.0 ships the `census` function, which takes two arguments:
- The first is an argument object with a set of key/value pairs parameters (See "Full Parameter Set" below)
- The second is a callback function, which will be called upon completion of the `census` function and applied to the response

## Full Parameter Set

Brief overview of each argument parameter that can be passed into CitySDK v2.0

| Parameter       | Description   | [Geocodes] | [Stats] | [GeoJSON] | [GeoJSON with Stats] 
| ---             | ---                                                                                 | :---:    | :---: | :---:    | :---:           
| `vintage`       | Refers to the reference year (typically release year) of the data requested         | ✔        | ✔    | ✔        | ✔              
| `geoHierarchy`  | The geographic scope and hierarchical path to the data requested                    | ✔        | ✔    | ✔        | ✔              
| `sourcePath`    | Refers to the Census survey and/or product from which your request should be filled |          | ✔    |           | ✔              
| `values`        | For Census statistics, `values` request counts/estimates by their unique identifier |          | ✔    |           | ✔              
| `predicates`    | Used as a filter available on some values with ranges denoted using `:`             |          | ✔`*`  |          | ✔`*`           
| `statsKey`      | You may request a key for Census' statistics API [here]                             |          | ✔`**` |          | ✔`**`          
| `geoResolution` | One of three available resolutions of GeoJSON (`"20m"`, `"5m"`, and `"500k"`)       |          |       | ✔        | ✔              

[Geocodes]: #census-geocoding
[Stats]: #getting-statistics
[GeoJSON]: #cartographic-geojson
[GeoJSON with Stats]: #geojson-with-stats
[here]: https://api.census.gov/data/key_signup.html

Notes:

`*`  : `predicates` are optional 

`**` : `statsKey` is optional for < 500 requests daily

## Census Geocoding

With the exception of "microdata" statistics (not yet available via Census' API), all Census data is aggregated to geographic areas of different sizes. As such, all of Census' API's require a set of/unique geographic identifier(s) to return any data (AKA: [GEOIDs]). Given that these identifiers are not common knowledge, the CitySDK provides a way for the user to identify their geographic scope of interest using a geographic coordinate (latitude + longitude).

This functionality can be used either stand-alone or as part of other `census` parameter sets. Under the hood, this functionality calls the [TigerWeb Web Mapping Service] with the `lat` & `lng` provided and returns a JSON object that includes the appropriate [GEOIDs] for identifying your geographic area of interest. The signature of this returned object matches that of the `geoHiearchy` parameter and thus can be used as a part of an argument to other functionality (explained in more detail below).

There are two ways to scope your request using this functionality:

#### Method 1: Request a single geographic area by coordinate
 
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

Notice how the function prepends an additional geographic component (`"state" : "12"`) to the response object. This is the correct behavior. In this example, we requested a specific county using a coordinate. However, in order to fully qualify the geographic area (GEOID) associated with the county, the state is needed. In this example the fully qualified GEOID would be `12009` with the first two digits (`12`) qualifying the state and `009` qualifying the county within that state. This appropriate geographic hierarchy creation is handled by the function for you.

#### Method 2: Request all of a descendant geography-type within a coordinate-specified geographic area

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
      "county" : "*"      // <- syntax = "<descendant>" : "*"
    }
  }, 
  (r) => console.log(r)
)

// -> {"vintage":"2015","geoHierarchy":{"state":"12","county":"*"}}

```

All Census-defined geographic areas are composed of Census "Blocks". Some of these composed areas - themselves - compose into higher-order areas. These nested relationships between certain geographic areas allows the Census data user to request all [descendants] of a particular type. 

##### Caveats
1) In this example, we added a second geographic level to our `geoHierarchy` object (`"county" : "*"`). It is important to use the `"*"` expression signifying that you want _all_ of the specified level of [descendants] within the geography for which you supply a coordinate. No other expression will work.
2) Internally, the CitySDK converts the `geoHierarchy` object to an ordered set, so this part of your request object must be in descending hierarchical order from parent -> child/descendant. E.g. - in the above - an object that contained `{"county" : "*", "state" : {"lat" <lat> "lng" <lng>}}` would not work.

[TigerWeb Web Mapping Service]: https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_wms.html
[GEOIDs]: https://www.census.gov/geo/reference/geoidentifiers.html
[descendants]: https://www2.census.gov/geo/pdfs/reference/geodiagram.pdf


## Getting Statistics

This parameter set will call the Census Statistics API and reformat the results with a couple highly requested features:
- Census statistics are returned as a standard JSON object rather than the csv-like format of the "naked" API
- Statistical values are translated into properly typed numbers (Integers and Floats instead of strings), whereas all values are returned as strings via the "naked" API

There are two ways to request Census statistics using `census`:
1) Calling for `values` of estimates and other statistical values
2) Apply a filter by using `predicates`

#### Method 1: get `"values"` by ID:

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
    },
    "sourcePath" : ["cbp"],  // required 
    "values" : ["ESTAB"]     // required 
  }, 
  (r) => console.log(r)
)

// -> [{"ESTAB":13648,"state":"12","county":"009"}]

```

Here, we added the parameters for `sourcePath` (the path to the survey and/or source of the statistics) and `values` (the identifiers of the statistics we're interested in). By including these parameters within your argument object, you trigger the `census` function to get statistics. This "deploy on parameter set" strategy is how the `census` function determines your intent.

##### Help for Discovering Census data

You're probably thinking: "How am I supposed to know what codes to use inside those parameters?" - or - "Where did that `"cbp"`/`"ESTAB"` stuff come from?" One thing you will need to get familiar with - if not already - before using this feature is the [Census Discovery Tool]. Also, there are a couple of [communities] within which you are invited to ask for help.

[communities]: TBD

---

Break out into separate section

###### Overview of the Census Discovery Tool

The [Census Discovery Tool]

- URL structure overview
  1) vintage or "timeseries"
  2) source path
  3) helpers (all endpoints available as `.html` and `.json`)
    - `/groups.html`
    - `/geography.json`
    - `/examples.html`
    - Variables
      - `/variables/<variable>`:  get details for a variable

[Census Discovery Tool]: https://api.census.gov/data.html

---


#### Method 1: get `"values"` by ID:

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
    },
    "sourcePath" : ["cbp"],        // required 
    "values" : ["ESTAB"],          // required 
    "statsKey" : "<your key here>" // required for > 500 calls per day
  }, 
  (r) => console.log(r)
)

// -> [{"ESTAB":13648,"state":"12","county":"009"}]

```

#### Method 2: Filter results by `predicates`:

##### `predicates`

Predicates are used to create a sub-selection of statistical values based on a given range or categorical qualifyer. The syntax for `predicates` is an object containing key/value pairs where the key is a "variable" identifyer (see [variables]) and the value can be one of a few different types:

1) When the [predicate type] of the variable is listed as `Int`, the value can be a numerical range separated by a `:`. For example, using the 2017 American Community Survey 1-year to get Population for all counties within Virginia with populations between 0 and 100000 people:

```js

census(
  {
    "vintage" : "2017",
    "geoHierarchy" : {
      "state" : "51"
      "county" : "*"
    },
    "sourcePath" : ["acs" "acs1"],  
    "values" : ["NAME"]             
    "predicates" : {                
        "B01001_001E" : "0:100000"  // number range separated by `:`
    },
    "statsKey" : "<your key here>"
  }, 
  (r) => console.log(r)
)

/* -> 
    [
      {
        "NAME":"Augusta County, Virginia",
        "B01001_001E" : 75144,
        "state":"51",
        "county":"015"
      },
      {
        "NAME":"Bedford County, Virginia",
        "B01001_001E" : 77974,
        "state":"51",
        "county":"019"
      },
      ... 
    ]
*/
```

For some sources (e.g., the American Community Survey), most of the `values` can also be used as `predicates`. In others, (e.g., International Trade), `predicates` are a key part of the statistical query. In either case, at least one value within `values` must be supplied, even if it's the same as the key used in `predicates`.

[variables]: #discovery-variables       ===========TBD=============
[predicate type]: #discovery-predicates ===========TBD=============

## Cartographic GeoJSON

You can also use the CitySDK to retrieve Cartographic Boundary files, which have been translated into GeoJSON. The only additional parameter you'll need to know is a simple declaration of `geoResolution` of which there are three options:

Resolution                                                                    | Map Scale    | Benefits                                               | Costs
----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------ | -------------------
[500k](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/500k)| 1:500,000    | **Greatest variety of summary levels** & Most detailed | largest file sizes
[5m](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/5m)    | 1:5,000,000  | Balance between size and detectable area size          | lowest variety of available area types              
[20m](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/20m)  | 1:20,000,000 | Smallest file sizes                                    | lowest level of detail

```js

census(
  {
    "vintage" : "2017",
    "geoHierarchy" : {
      "state" : "51"
      "county" : "*"
    },
    "geoResolution" : "500k"
  }, 
  (r) => console.log(r)
)

```

It's important to note that - when querying for these GeoJSON files - you may retrieve a larger area than your request argument specifies. The reason for this is that the files are (currently) stored at two geographic levels: National and by State. Thus, the query above will attempt to resolve, at the state level, all counties, but because counties are stored at the national level in vintage 2017, all the counties in the US will be returned by this query.

If you wish to get back _only_ those geographies you specify, you may do so by using the last and perhaps most useful feature included in the v2.0 release: Getting GeoJSON with statistics _included_ within the `"FeatureCollection"` `properties` object!

## GeoJSON with Stats

There are a number of reasons you might want to merge your statistics into their GeoJSON/geographic boundaries, all of which are relevant when seeking to map Census data:

1) Creating [choropleth] maps of statistics (e.g., using `values`)
2) Mapping only those geographies that meet a certain set of criteria (i.e., using `predicates`)
3) Showing a user their current Census geographic context (i.e., leveraging the Geocoding capabilities of CitySDK)

For this kind of request, all parameters are used (`predicates` are optional):

```js

census(
  {
    "vintage" : "2017",
    "geoHierarchy" : {
      "state" : "51"
      "county" : "*"
    },
    "sourcePath" : ["acs" "acs1"],  
    "values" : ["NAME"]             
    "predicates" : {                // optional  
        "B01001_001E" : "0:100000"  
    },
    "statsKey" : "<your key here>",
    "geoResolution" : "500k"
  }, 
  (r) => console.log(r)
)

```