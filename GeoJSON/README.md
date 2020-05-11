
# Census Cartography Files in GeoJSON Format

The Census Bureau publishes both high and low accuracy geographic area files to accommodate the
widest possible variety of user needs (within feasibility). Cartography Files are simplified
representations of selected geographic areas from the Census Bureau’s Master Address
File/Topologically Integrated Geographic Encoding and Referencing (MAF/TIGER) system. _These
boundary files are specifically designed for small scale thematic mapping (i.e., for
visualizations)_.

For a while now, we have published our cartography files in the [`.shp`] format. More recently, we
expanded our portfolio of available formats to [`.kml`]. It is with this release that we follow suit
with the community at large to release these boundaries in `.json` (GeoJSON) format.

[`.shp`]: https://www.census.gov/geo/maps-data/data/tiger-cart-boundary.html
[`.kml`]: https://www.census.gov/geo/maps-data/data/tiger-kml.html

### Geographies Available by Vintage

The most comprehensive set of geographies and vintages can be found within the [500k set]. Some
vintages - [`103` through `110`] - are references to sessions of Congress and only contain a single
geographic summary level: `"congressional district"` The following tables represent the availability
of various geographic summary levels through the remaining vintages:

[500k set]: https://github.com/uscensusbureau/citysdk/tree/master/v2/GeoJSON/500k
[`103` through `110`]: https://github.com/uscensusbureau/citysdk/tree/master/v2/GeoJSON/500k

| Geographic Area Type                                            | 1990 | 2000 | 2010 | 2012 | 2013 - 2015 | 2016 - 2018 |
| --------------------------------------------------------------- | :--: | :--: | :--: | :--: | :---------: | :---------: |
| `"alaska native regional corporation"`                          |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"american indian-area/alaska native area/hawaiian home land"`  |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"block group"`                                                 |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"combined new england city and town area"`                     |      |      |  ✔   |      |             |      ✔      |
| `"combined statistical area"`                                   |      |      |  ✔   |      |      ✔      |      ✔      |
| `"congressional district"`                                      |      |      |  ✔   |  ✔   |      ✔      |      ✔      |
| `"consolidated cities"`                                         |      |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"county"`                                                      |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"county subdivision"`                                          |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"division"`                                                    |      |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"metropolitan statistical area/micropolitan statistical area"` |      |      |  ✔   |      |      ✔      |      ✔      |
| `"new england city and town area"`                              |      |      |  ✔   |      |      ✔      |      ✔      |
| `"place"`                                                       |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"public use microdata area"`                                   |      |      |      |      |      ✔      |      ✔      |
| `"region"`                                                      |      |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"school district (elementary)"`                                |      |  ✔   |  ✔   |      |             |      ✔      |
| `"school district (secondary)"`                                 |      |  ✔   |  ✔   |      |             |      ✔      |
| `"school district (unified")`                                   |      |  ✔   |  ✔   |      |             |      ✔      |
| `"state"`                                                       |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"state legislative district (lower chamber)"`                  |      |  ✔   |  ✔   |  ✔   |      ✔      |      ✔      |
| `"state legislative district (upper chamber)"`                  |      |  ✔   |  ✔   |  ✔   |      ✔      |      ✔      |
| `"tract"`                                                       |  ✔   |  ✔   |  ✔   |      |      ✔      |      ✔      |
| `"urban area"`                                                  |  ✔   |  ✔   |      |  ✔   |      ✔      |      ✔      |
| `"us"`                                                          |      |      |  ✔   |      |      ✔      |      ✔      |
| `"zip code tabulation area"`                                    |      |  ✔   |      |      |      ✔      |      ✔      |

## More Information about Cartography Files

- For more information about the files translated herein please visit the Census Bureau's
  [Cartographic Boundary File Description Page](https://www.census.gov/geo/maps-data/data/cbf/cbf_description.html)
- For a comparison of the available formats of geographic area files, please visit the Census
  Bureau's [TIGER Products page ](https://www.census.gov/geo/maps-data/data/tiger.html)

# Community

- Join us on [Gitter](https://gitter.im/uscensusbureau/citysdk)
- Join us on
  [Slack](https://join.slack.com/t/uscensusbureau/shared_invite/enQtMjQ3NzUyNTM3NDU3LTZmNGI1MmQzY2Y2ZTU1ODJhNDQwMmY2YmZiNmFkNzg4YmJkYmQzZjQyNDhkNDYxN2JhYjkxZDEwMGI2OGU5NzQ)
- Send us an email: [cnmp.developers.list@census.gov](mailto:cnmp.developers.list@census.gov)

# Dedicated Data Experts

If you're new to Census data and need some help figuring out which of the many products Census
curates for public use, don't hesitate to reach out to these contacts for help:

- Ryan Dolan: ryan.s.dolan@census.gov
- Gerson Vasquez: gerson.d.vasquez@census.gov
- Alexandra Barker: alexandra.s.barker@census.gov
