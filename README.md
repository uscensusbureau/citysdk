# CitySDK #

This readme is a work in progress. For an overview of the project, please visit [https://uscensusbureau.github.io/citysdk](https://uscensusbureau.github.io/citysdk)

Instructions on using the CitySDK and the current modules can be found in the Examples directory.

Generated jsDocs can be found in the docs directory.

Source code can be found in the js directory.

## Intro

Through our City SDK, we are aiming to provide a user-friendly “toolbox” for civic hackers to connect local and national public data. The creation of the SDK came out of the desire to make it easier to use the Census API for common tasks that our developer community asked for. We have been engaging developers around the country for the past two years and have observed how they use the API and have built the most commonly needed functionalities built ‘on top’ of our API right into the SDK, saving the developer from having to do it herself. 

## Features

- A translation which leverages GEO’s latitude / longitude to FIPS-code conversion service
- The ability to request GeoJSON (locations currently limited to partner events for the [National Day of Civic Hacking](http://hackforchange.org/)) - an open source geographic shapefile / boundary format - right along with a location's data
- A modular architecture which makes mashing Census data up with third-party data a snap
- Pull nested Census geographies using your own / custom boundaries (C/O: [Terraformer.io](http://terraformer.io/))
- More [coming soon](https://waffle.io/uscensusbureau/citysdk)! (you may also add to our issues using the #user stories label to make feature requests)
