# CitySDK Socrata Module





* * *

### CitySDK Socrata Module.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  The API Key is optional for the socrata module but if supplied it will be used as an application Token.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false if not enabled.


### CitySDK Socrata Module.request(request, callback) 

Makes a request to the specified Socrata server and resource. You will need the "SODA API" export URL for the resourceyou wish to use. For example,             https://data.cityofchicago.org/resource/ydr8-5enu.jsonBreaks down into a request object of:{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu"}You may then include any standard SoQL queries, for instance:{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu",     "where": "_amount_paid>100"}See http://dev.socrata.com/docs/queries.html for more help on SoQL queriesMore Examples:Chicago payments summed by permit type{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu",      "group": "_permit_type",      "select": "_permit_type,sum(_amount_paid)" } 2014 White House Staff - Analysts {     "url": "open.whitehouse.gov",     "dataset": "9j92-xfdk",     "q": "analyst" }

**Parameters**

**request**: , Makes a request to the specified Socrata server and resource. You will need the "SODA API" export URL for the resourceyou wish to use. For example,             https://data.cityofchicago.org/resource/ydr8-5enu.jsonBreaks down into a request object of:{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu"}You may then include any standard SoQL queries, for instance:{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu",     "where": "_amount_paid>100"}See http://dev.socrata.com/docs/queries.html for more help on SoQL queriesMore Examples:Chicago payments summed by permit type{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu",      "group": "_permit_type",      "select": "_permit_type,sum(_amount_paid)" } 2014 White House Staff - Analysts {     "url": "open.whitehouse.gov",     "dataset": "9j92-xfdk",     "q": "analyst" }

**callback**: , Makes a request to the specified Socrata server and resource. You will need the "SODA API" export URL for the resourceyou wish to use. For example,             https://data.cityofchicago.org/resource/ydr8-5enu.jsonBreaks down into a request object of:{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu"}You may then include any standard SoQL queries, for instance:{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu",     "where": "_amount_paid>100"}See http://dev.socrata.com/docs/queries.html for more help on SoQL queriesMore Examples:Chicago payments summed by permit type{     "url": "data.cityofchicago.org",     "dataset": "ydr8-5enu",      "group": "_permit_type",      "select": "_permit_type,sum(_amount_paid)" } 2014 White House Staff - Analysts {     "url": "open.whitehouse.gov",     "dataset": "9j92-xfdk",     "q": "analyst" }



### CitySDK Socrata Module.setApplicationToken(token) 

This function accepts a Socrata Application token, and will then append it to every future requestNote that an application token is not required, but can help avoid throttling. You can acquire onefrom: http://dev.socrata.com/register

**Parameters**

**token**: , This function accepts a Socrata Application token, and will then append it to every future requestNote that an application token is not required, but can help avoid throttling. You can acquire onefrom: http://dev.socrata.com/register




* * *










