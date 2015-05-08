# Global





* * *

### search(request, callback) 

Searches near a specified lat/lng or zipcoderequest = { lat: 34, lng: 77 }Orrequest = { zip: 20002 }Response:{     results: [         {             id: 11011             marketname: "Farmers Market A"         },         {             id: 4203             marketname: "Farmers Market B"         }     ]}

**Parameters**

**request**: , Searches near a specified lat/lng or zipcoderequest = { lat: 34, lng: 77 }Orrequest = { zip: 20002 }Response:{     results: [         {             id: 11011             marketname: "Farmers Market A"         },         {             id: 4203             marketname: "Farmers Market B"         }     ]}

**callback**: , Searches near a specified lat/lng or zipcoderequest = { lat: 34, lng: 77 }Orrequest = { zip: 20002 }Response:{     results: [         {             id: 11011             marketname: "Farmers Market A"         },         {             id: 4203             marketname: "Farmers Market B"         }     ]}



### detail(request, callback) 

Requests details about the farmer's market with specified idExample request: {                     id: 2201                 }Response:{     "marketdetails": {                     "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",                     "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",                     "Products":"",                     "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "                     }}

**Parameters**

**request**: , Requests details about the farmer's market with specified idExample request: {                     id: 2201                 }Response:{     "marketdetails": {                     "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",                     "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",                     "Products":"",                     "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "                     }}

**callback**: , Requests details about the farmer's market with specified idExample request: {                     id: 2201                 }Response:{     "marketdetails": {                     "Address":"12011 Government Center Pkwy , Fairfax, Virginia, 22035",                     "GoogleLink":"http://maps.google.com/?q=38.853770%2C%20-77.356961%20(%22Government+Center++Farmers+Market%22)",                     "Products":"",                     "Schedule":"05/01/2014 to 10/30/2014 Thu: 3:00 PM-7:00 PM;<br> <br> <br> "                     }}




* * *










