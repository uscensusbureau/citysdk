# Global





* * *

### search(request, callback) 

Sends a SQL query to a CKAN server.The DataStore extension must be installed to utilise this.var request = {    "url": 'catalog.opendata.city',    "Select": '"name","streetAddress","postalCode"',    "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',    "Limit": '2'}Response:{    "success": true,    "result": {        "records": [            {                "postalCode": "10001",                "streetAddress": "441 WEST 26 STREET",                "name": "Hudson Guild Ccc"            },            {                "postalCode": "10001",                "streetAddress": "459 WEST 26 STREET",                "name": "Hudson Guild Children's Center"            }        ],        "fields": [            {                "type": "text",                "id": "name"            },            {                "type": "text",                "id": "streetAddress"            },            {                "type": "numeric",                "id": "postalCode"            }        ],        "sql": "SELECT \"name\",\"streetAddress\",\"postalCode\" FROM \"e4491e0c-ba09-4cb2-97c1-d466e3e976a5\" LIMIT 2 "    }}

**Parameters**

**request**: , Sends a SQL query to a CKAN server.The DataStore extension must be installed to utilise this.var request = {    "url": 'catalog.opendata.city',    "Select": '"name","streetAddress","postalCode"',    "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',    "Limit": '2'}Response:{    "success": true,    "result": {        "records": [            {                "postalCode": "10001",                "streetAddress": "441 WEST 26 STREET",                "name": "Hudson Guild Ccc"            },            {                "postalCode": "10001",                "streetAddress": "459 WEST 26 STREET",                "name": "Hudson Guild Children's Center"            }        ],        "fields": [            {                "type": "text",                "id": "name"            },            {                "type": "text",                "id": "streetAddress"            },            {                "type": "numeric",                "id": "postalCode"            }        ],        "sql": "SELECT \"name\",\"streetAddress\",\"postalCode\" FROM \"e4491e0c-ba09-4cb2-97c1-d466e3e976a5\" LIMIT 2 "    }}

**callback**: , Sends a SQL query to a CKAN server.The DataStore extension must be installed to utilise this.var request = {    "url": 'catalog.opendata.city',    "Select": '"name","streetAddress","postalCode"',    "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',    "Limit": '2'}Response:{    "success": true,    "result": {        "records": [            {                "postalCode": "10001",                "streetAddress": "441 WEST 26 STREET",                "name": "Hudson Guild Ccc"            },            {                "postalCode": "10001",                "streetAddress": "459 WEST 26 STREET",                "name": "Hudson Guild Children's Center"            }        ],        "fields": [            {                "type": "text",                "id": "name"            },            {                "type": "text",                "id": "streetAddress"            },            {                "type": "numeric",                "id": "postalCode"            }        ],        "sql": "SELECT \"name\",\"streetAddress\",\"postalCode\" FROM \"e4491e0c-ba09-4cb2-97c1-d466e3e976a5\" LIMIT 2 "    }}




* * *










