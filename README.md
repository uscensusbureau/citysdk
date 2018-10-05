# Census Cartography Files in GeoJSON Format

## Utility

The Census Bureau publishes both high and low accuracy geographic area files to accommodate the widest possible variety of user needs (within feasibility). Cartography Files are simplified representations of selected geographic areas from the Census Bureau’s Master Address File/Topologically Integrated Geographic Encoding and Referencing (MAF/TIGER) system. _These boundary files are specifically designed for small scale thematic mapping (i.e., for visualizations)_.

For a while now, we have published our cartography files in the [`.shp`](https://www.census.gov/geo/maps-data/data/tiger-cart-boundary.html) format. More recently, we expanded our portfolio of available formats to [`.kml`](https://www.census.gov/geo/maps-data/data/tiger-kml.html). It is with this release that we follow suit with the community at large to release these boundaries in `.json` (GeoJSON) format.

### Cartography Files Included in this Repo

There are three available resolutions available [herein](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON). Their usefulness will depend on your specific needs. The following table summarizes the pros and cons of choosing one. It is important to note, that the [`500k` set](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/500k) contains the largest file sizes, but also represents the _most comprehensive_ coverage of [available geographic summary levels](https://www.census.gov/geo/maps-data/data/summary_level.html).

### Resolutions

There are three available resolutions contained herein: 500k (smallest resolution = smallest "detectable areas"), 5m, and 20m (largest resolution = largest "detectable areas")

Resolution                                                                    | Map Scale    | Benefits                                               | Costs
----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------ | -------------------
[500k](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/500k)| 1:500,000    | **Greatest variety of summary levels** & Most detailed | largest file sizes
[5m](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/5m)    | 1:5,000,000  | Balance between size and detectable area size          | lowest variety of available area types              
[20m](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/20m)  | 1:20,000,000 | Smallest file sizes                                    | lowest level of detail

### Geographic Area Types Availability by Vintage

The most comprehensive set of geographies and vintages can be found within the [500k set](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/500k).
Vintages [`103` through `110`](https://github.com/loganpowell/census-geojson/tree/master/GeoJSON/500k) are references to sessions of Congress and - as such - only contain a single geographic summary level: `congressional-district`
The following tables represent the availability of various geographic summary levels through the remaining vintages:

Geographic Area Type                                          | 1990  | 2000  | 2010 |  2012 | 2013 - 2015 | 2016 - 2017                             
------------------------------------------------------------- | :---: | :---: |:---: | :---: | :---------: | :---------:    
`us`                                                          |       |       | ✔    |       | ✔           | ✔         
`region`                                                      |       | ✔     | ✔   |        | ✔          | ✔         
`division`                                                    |       | ✔     | ✔   |        | ✔          | ✔         
`state`                                                       | ✔     | ✔    | ✔    |       | ✔           | ✔         
`county`                                                      | ✔     | ✔    | ✔    |       | ✔           | ✔         
`consolidated-cities`                                         |       | ✔     | ✔   |        | ✔          | ✔         
`county-subdivision`                                          | ✔     | ✔    | ✔    |       | ✔           | ✔         
`tract`                                                       | ✔     | ✔    | ✔    |       | ✔           | ✔         
`place`                                                       | ✔     | ✔    | ✔    |       | ✔           | ✔         
`alaska-native-regional-corporation`                          | ✔     | ✔    | ✔    |       | ✔           | ✔         
`american-indian-area!alaska-native-area!hawaiian-home-land`  | ✔     | ✔    | ✔    |       | ✔           | ✔         
`metropolitan-statistical-area!micropolitan-statistical-area` |       |       | ✔    |       | ✔           | ✔         
`combined-statistical-area`                                   |       |       | ✔    |       | ✔           | ✔         
`new-england-city-and-town-area`                              |       |       | ✔    |       | ✔           | ✔         
`combined-new-england-city-and-town-area`                     |       |       | ✔    |       |             | ✔         
`urban-area`                                                  | ✔     | ✔    |      | ✔     | ✔           | ✔         
`congressional-district`                                      |       |       | ✔    | ✔     | ✔          | ✔         
`school-district-_elementary_`                                |       | ✔     | ✔   |        |             | ✔         
`school-district-_secondary_`                                 |       | ✔     | ✔   |        |             | ✔         
`school-district-_unified_`                                   |       | ✔     | ✔   |        |             | ✔         
`block-group`                                                 | ✔     | ✔    |  ✔   |       |  ✔          | ✔         
`public-use-microdata-area`                                   |       |       |      |        |  ✔         | ✔         
`zip-code-tabulation-area`                                    |       | ✔     |     |        |  ✔          | ✔         
`state-legislative-district-_upper-chamber_`                  |       | ✔     |  ✔  | ✔     |  ✔          | ✔         
`state-legislative-district-_lower-chamber_`                  |       | ✔     |  ✔  | ✔     |  ✔          | ✔         



# More Information
- For more information about the files translated herein please visit the Census Bureau's [Cartographic Boundary File Description
 Page](https://www.census.gov/geo/maps-data/data/cbf/cbf_description.html)
- For a comparison of the available formats of geographic area files, please visit the Census Bureau's [TIGER Products page
](https://www.census.gov/geo/maps-data/data/tiger.html)

## Community
- Join us on [Gitter](https://gitter.im/uscensusbureau/general)
- Join us on [Slack](https://join.slack.com/t/uscensusbureau/shared_invite/enQtMjQ3NzUyNTM3NDU3LTZmNGI1MmQzY2Y2ZTU1ODJhNDQwMmY2YmZiNmFkNzg4YmJkYmQzZjQyNDhkNDYxN2JhYjkxZDEwMGI2OGU5NzQ) @ the `#cartography` channel.
- Send us an email: [cnmp.developers.list@census.gov](mailto:cnmp.developers.list@census.gov)
