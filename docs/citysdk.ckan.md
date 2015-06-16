# Global





* * *

### search(request, callback) 

Sends a SQL query to a CKAN server.

The DataStore extension must be installed on the CKAN server to utilise this.

The underlying SQL engine is PostgreSQL, so you have full access to all the capabilities of a true, object-relational database (e.g. real joins, distinct, count, like, etc.)

To ensure that performance doesn't suffer though, a default LIMIT of 1,000 rows is set unless LIMIT is explicitly specified.

Example of CKAN DataStore API use:

        https://catalog.opendata.city/api/action/datastore_search_sql?sql=SELECT%20*%20FROM%20%22e4491e0c-ba09-4cb2-97c1-d466e3e976a5%22%20LIMIT%205




**request**

The following is an example request object:

        var request = {
            "url": 'catalog.opendata.city',
            "Select": '*',
            "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',
            "Limit": '5'
        }

A dataset's resource_id should be used in the SQL From clause

See http://docs.ckan.org/en/ckan-2.2/datastore.html for more info

More Examples:

New York City Day Care Center Locations in either postal code 10001 or 10012:

        var request = {
            "url": 'catalog.opendata.city',
            "Select": '*',
            "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',
            "Where": '"postalCode" = \'10001\' or "postalCode" = \'10012\'',
            "Order By": '"name"'
        }

Select the columns name, streetAddress and postalCode:

        var request = {
            "url": 'catalog.opendata.city',
            "Select": '"name","streetAddress","postalCode"',
            "From": '"e4491e0c-ba09-4cb2-97c1-d466e3e976a5"',
            "Order By": '"name"'
        }




**callback**

The following is an example callback object:

        var callback = function(response) {
            var output = $('#output');
            output.empty();

            if (response.success) {
                response.result.records.forEach(function(entry) {
                    for (var property in entry) {
                        if (entry.hasOwnProperty(property)) {
                            output.append("<b>" + property + "</b>: " + entry[property] + "; ");
                        }
                    }
                    output.append("<br/>");
                });
            }
        };




**response**

Returns a dictionary with the following keys:

records – list of matching results

fields – fields/columns and their extra metadata

Example response:

        {
            "success": true,
            "result": {
                "records": [
                    {
                        "postalCode": "10001",
                        "streetAddress": "441 WEST 26 STREET",
                        "name": "Hudson Guild Ccc"
                    },
                    {
                        "postalCode": "10001",
                        "streetAddress": "459 WEST 26 STREET",
                        "name": "Hudson Guild Children's Center"
                    }
                ],
                "fields": [
                    {
                        "type": "text",
                        "id": "name"
                    },
                    {
                        "type": "text",
                        "id": "streetAddress"
                    },
                    {
                        "type": "numeric",
                        "id": "postalCode"
                    }
                ],
                "sql": "SELECT \"name\",\"streetAddress\",\"postalCode\" FROM \"e4491e0c-ba09-4cb2-97c1-d466e3e976a5\" LIMIT 2 "
            }
        }
