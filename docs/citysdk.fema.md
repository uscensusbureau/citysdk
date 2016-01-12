# Global





* * *

### DisasterDeclarationsSummariesRequest(request, callback) 

Call which returns disaster listings from the DisasterDeclarationsSumamries Dataset

Request can be filted by the following fields.  If no values, the API will return the first values
The API return paged results.  Use skip and take to control which page is returned
{
     disasterNumber: 3849,
     state: "VA",
     county: "Loudoun",
     declarationRangeStart: "1997-07-16",
     declarationRangeEnd: "1997-07-16T19:20:30+01:00",
     skip: 0,
     take: 1000
}

Response object
{
     "metadata": {
         "skip": 0,
         "top": 1000,
         "count": 0,
         "filter": "disasterNumber eq 4100",
         "format": "json",
         "orderby": {},
         "select": null,
         "entityname": "DisasterDeclarationsSummaries",
         "url": "/api/open/v1/DisasterDeclarationsSummaries?$filter=disasterNumber%20eq%204100"
     },
     "DisasterDeclarationsSummaries": [{
             "disasterNumber": 4100,
             "ihProgramDeclared": false,
             "iaProgramDeclared": false,
             "paProgramDeclared": true,
             "hmProgramDeclared": true,
             "state": "AR",
             "declarationDate": "2013-01-29T16:00:00.000Z",
             "disasterType": "DR",
             "incidentType": "Severe Ice Storm",
             "title": "SEVERE WINTER STORM",
             "incidentBeginDate": "2012-12-25T00:00:00.000Z",
             "incidentEndDate": "2012-12-26T00:00:00.000Z",
             "declaredCountyArea": "Clark (County)",
             "hash": "50be244703e242e088bc5a6d674973ce",
             "lastRefresh": "2015-10-27T20:06:30.618Z",
             "placeCode": 99019,
             "id": "54f4fbc8df7009de482145b1"
         },
         {
             "disasterNumber": 4100,
             "ihProgramDeclared": false,
             "iaProgramDeclared": false,
             "paProgramDeclared": true,
             "hmProgramDeclared": true,
             "state": "AR",
             "declarationDate": "2013-01-29T16:00:00.000Z",
             "disasterType": "DR",
             "incidentType": "Severe Ice Storm",
             "title": "SEVERE WINTER STORM",
             "incidentBeginDate": "2012-12-25T00:00:00.000Z",
             "incidentEndDate": "2012-12-26T00:00:00.000Z",
             "declaredCountyArea": "Saline (County)",
             "hash": "840aac66b8560d81b008a4e7efad4295",
             "lastRefresh": "2015-10-27T20:06:30.193Z",
             "placeCode": 99125,
             "id": "54f4fbc7df7009de48213e9a"
         }]
     }
}

**Parameters**

**request**: , Call which returns disaster listings from the DisasterDeclarationsSumamries Dataset

Request can be filted by the following fields.  If no values, the API will return the first values
The API return paged results.  Use skip and take to control which page is returned
{
     disasterNumber: 3849,
     state: "VA",
     county: "Loudoun",
     declarationRangeStart: "1997-07-16",
     declarationRangeEnd: "1997-07-16T19:20:30+01:00",
     skip: 0,
     take: 1000
}

Response object
{
     "metadata": {
         "skip": 0,
         "top": 1000,
         "count": 0,
         "filter": "disasterNumber eq 4100",
         "format": "json",
         "orderby": {},
         "select": null,
         "entityname": "DisasterDeclarationsSummaries",
         "url": "/api/open/v1/DisasterDeclarationsSummaries?$filter=disasterNumber%20eq%204100"
     },
     "DisasterDeclarationsSummaries": [{
             "disasterNumber": 4100,
             "ihProgramDeclared": false,
             "iaProgramDeclared": false,
             "paProgramDeclared": true,
             "hmProgramDeclared": true,
             "state": "AR",
             "declarationDate": "2013-01-29T16:00:00.000Z",
             "disasterType": "DR",
             "incidentType": "Severe Ice Storm",
             "title": "SEVERE WINTER STORM",
             "incidentBeginDate": "2012-12-25T00:00:00.000Z",
             "incidentEndDate": "2012-12-26T00:00:00.000Z",
             "declaredCountyArea": "Clark (County)",
             "hash": "50be244703e242e088bc5a6d674973ce",
             "lastRefresh": "2015-10-27T20:06:30.618Z",
             "placeCode": 99019,
             "id": "54f4fbc8df7009de482145b1"
         },
         {
             "disasterNumber": 4100,
             "ihProgramDeclared": false,
             "iaProgramDeclared": false,
             "paProgramDeclared": true,
             "hmProgramDeclared": true,
             "state": "AR",
             "declarationDate": "2013-01-29T16:00:00.000Z",
             "disasterType": "DR",
             "incidentType": "Severe Ice Storm",
             "title": "SEVERE WINTER STORM",
             "incidentBeginDate": "2012-12-25T00:00:00.000Z",
             "incidentEndDate": "2012-12-26T00:00:00.000Z",
             "declaredCountyArea": "Saline (County)",
             "hash": "840aac66b8560d81b008a4e7efad4295",
             "lastRefresh": "2015-10-27T20:06:30.193Z",
             "placeCode": 99125,
             "id": "54f4fbc7df7009de48213e9a"
         }]
     }
}

**callback**: , Call which returns disaster listings from the DisasterDeclarationsSumamries Dataset

Request can be filted by the following fields.  If no values, the API will return the first values
The API return paged results.  Use skip and take to control which page is returned
{
     disasterNumber: 3849,
     state: "VA",
     county: "Loudoun",
     declarationRangeStart: "1997-07-16",
     declarationRangeEnd: "1997-07-16T19:20:30+01:00",
     skip: 0,
     take: 1000
}

Response object
{
     "metadata": {
         "skip": 0,
         "top": 1000,
         "count": 0,
         "filter": "disasterNumber eq 4100",
         "format": "json",
         "orderby": {},
         "select": null,
         "entityname": "DisasterDeclarationsSummaries",
         "url": "/api/open/v1/DisasterDeclarationsSummaries?$filter=disasterNumber%20eq%204100"
     },
     "DisasterDeclarationsSummaries": [{
             "disasterNumber": 4100,
             "ihProgramDeclared": false,
             "iaProgramDeclared": false,
             "paProgramDeclared": true,
             "hmProgramDeclared": true,
             "state": "AR",
             "declarationDate": "2013-01-29T16:00:00.000Z",
             "disasterType": "DR",
             "incidentType": "Severe Ice Storm",
             "title": "SEVERE WINTER STORM",
             "incidentBeginDate": "2012-12-25T00:00:00.000Z",
             "incidentEndDate": "2012-12-26T00:00:00.000Z",
             "declaredCountyArea": "Clark (County)",
             "hash": "50be244703e242e088bc5a6d674973ce",
             "lastRefresh": "2015-10-27T20:06:30.618Z",
             "placeCode": 99019,
             "id": "54f4fbc8df7009de482145b1"
         },
         {
             "disasterNumber": 4100,
             "ihProgramDeclared": false,
             "iaProgramDeclared": false,
             "paProgramDeclared": true,
             "hmProgramDeclared": true,
             "state": "AR",
             "declarationDate": "2013-01-29T16:00:00.000Z",
             "disasterType": "DR",
             "incidentType": "Severe Ice Storm",
             "title": "SEVERE WINTER STORM",
             "incidentBeginDate": "2012-12-25T00:00:00.000Z",
             "incidentEndDate": "2012-12-26T00:00:00.000Z",
             "declaredCountyArea": "Saline (County)",
             "hash": "840aac66b8560d81b008a4e7efad4295",
             "lastRefresh": "2015-10-27T20:06:30.193Z",
             "placeCode": 99125,
             "id": "54f4fbc7df7009de48213e9a"
         }]
     }
}




* * *










