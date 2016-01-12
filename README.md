# CitySDK #

This readme is a work in progress. For an overview of the project, please visit [https://uscensusbureau.github.io/citysdk](https://uscensusbureau.github.io/citysdk)

Instructions on using the CitySDK and the current modules can be found in the Examples directory.

Generated jsDocs can be found in the docs directory.

Source code can be found in the js directory.

## Intro

Through our City SDK, we are aiming to provide a user-friendly "toolbox" for civic hackers to connect local and national public data. The creation of the SDK came out of the desire to make it easier to use the Census API for common tasks that our developer community asked for. We have been engaging developers around the country for the past two years and have observed how they use the API and have built the most commonly needed functionalities built on top of our API right into the SDK, saving the developer from having to do it herself. 

## Features
- Never have to figure out what your FIPS code is again! Just pass in lat/longs, we handle the translation. Only have ZIP codes? No problem, we translate those too. 
- Get values and Census geographic boundaries (currently GeoJSON only: down to ‘block-group’ level) with a SINGLE CALL (whoohoo)!
- A [modular architecture](http://uscensusbureau.github.io/citysdk/guides.html) which makes mashing Census data up with [third-party data](http://uscensusbureau.github.io/citysdk/gallery.html) a snap.
- Pull down Census Bureau geographic boundaries by sending your own custom geography in the request (currently GeoJSON support only, [Terraformer.io](http://terraformer.io/))
- A [showcase of examples](http://uscensusbureau.github.io/citysdk/gettingstarted.html) to help you get started.
- We’ve provided a starting list of aliases for some of our most popular variables (most aliases are in the American Community Survey [ACS5]) 
- More coming soon! (you may also add to our issues using the [#user stories](https://github.com/uscensusbureau/citysdk/issues?q=is%3Aopen+is%3Aissue+label%3A%22user+stories%22) label to make feature requests)








