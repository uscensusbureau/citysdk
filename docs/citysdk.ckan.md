# Global





* * *

## Class: CkanModule
Instantiates an instance of the CitySDK CKAN object.

### CkanModule.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false is not enabled.

### CkanModule.search(request, callback) 

Sends a SQL query to a CKAN server.The DataStore extension must be installed to utilise this.

**Parameters**

**request**: `object`, JSON Object var request = {    "url": 'catalog.opendata.city',    "Select": '"name","streetAddress","postalCode"',    "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',    "Limit": '2'}

**callback**: `function`, Sends a SQL query to a CKAN server.The DataStore extension must be installed to utilise this.

**Returns**: `object`, JSON Object{    "success": true,    "result": {        "records": [            {                "postalCode": "10001",                "streetAddress": "441 WEST 26 STREET",                "name": "Hudson Guild Ccc"            },            {                "postalCode": "10001",                "streetAddress": "459 WEST 26 STREET",                "name": "Hudson Guild Children's Center"            }        ],        "fields": [            {                "type": "text",                "id": "name"            },            {                "type": "text",                "id": "streetAddress"            },            {                "type": "numeric",                "id": "postalCode"            }        ],        "sql": "SELECT \"name\",\"streetAddress\",\"postalCode\" FROM \"e4491e0c-ba09-4cb2-97c1-d466e3e976a5\" LIMIT 2 "    }}



* * *










