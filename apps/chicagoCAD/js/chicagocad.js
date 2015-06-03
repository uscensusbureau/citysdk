var sdk, census, socrata, map, infowindow;
var boundaries = [];
var variables = [];
var crimeMarkers = [];
var loadingCount = 0;

$(document).ready(function() {
    sdk = new CitySDK();
    census = sdk.modules.census;
    socrata = sdk.modules.socrata;

    socrata.enable();
    census.enable(censusKey);

    //Enable tooltips
    var checkboxes = $("input:checkbox");
    var questionLinks = $(".questionLink");
    checkboxes.each(function(i) {
        questionLinks[i].title = census.aliases[checkboxes[i].value].description;
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('#startdate input').datepicker({
        todayBtn: true,
        todayHighlight: true,
        defaultViewDate: { year: 2015, month: 00, day: 01 }
    });

    $('#enddate input').datepicker({
        todayBtn: true,
        todayHighlight: true
    });

    $('#startdate input').change(updateCrimeTypes);
    $('#enddate input').change(updateCrimeTypes);

    var mapOptions = {
        center: {
            lat: 41.8369,
            lng: -87.6847
        },
        zoom: 11
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

    map.data.setStyle({
        fillColor: 'blue',
        fillOpacity: 0.15
    });

    infowindow = new google.maps.InfoWindow();

    updateCrimeTypes();
    updateBoundaries();
});

function loadingOn() {
    $('#loading').css('display', 'block');
}

function loadingOff() {
    $('#loading').css('display', 'none');
}

function clearBoundaries() {
    for (var i = 0; i < boundaries.length; i++) {
      map.data.remove(boundaries[i]);
    }
}

function updateBoundaries() {
    loadingOn();
    loadingCount++;

    var request = {
        lat: 41.8369,
        lng: -87.6847,
        level: "place",
        variables: []
    }

    var boundary_selection = $('#boundary').find(":selected").val();

    //If we don't want city boundaries, we need to set a container and sublevel tag
    if(boundary_selection != 'place') {
        request.level = boundary_selection;
        request.container = "place";
        request.sublevel = true;
    }

    //Let's check for our variables
    var checkboxes = $("input:checked");

    checkboxes.each(function(i) {
        request.variables.push(checkboxes[i].value);
    });

    variables = request.variables;

    //We now have a complete request, let's get the boundaries and data
    census.GEORequest(request, function(geojson) {
        clearBoundaries();
        boundaries = map.data.addGeoJson(geojson);

        loadingCount--;
        if(loadingCount == 0) loadingOff();
    });

    map.data.addListener('click', function(event) {
        var content = "<h3>" + event.feature.getProperty("NAME") + "</h3><div>";
        for(var i = 0; i < variables.length; i++) {
            content += "<br/><b>" + $(':input[value="' + variables[i] + '"]').attr("label") + "</b>: " + event.feature.getProperty(variables[i]);
        }
        content += "</div>"

        infowindow.setContent(content);
        infowindow.setPosition(event.latLng);
        infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
        infowindow.open(map);
    });
};

//Updates the crime type selector using the date range we're interested in
function updateCrimeTypes() {
    var socrataRequest = {
        url: socrataURL,
        dataset: crimeDataset,
        select: "primary_type",
        group: "primary_type",
        where: "date>'" + getTime("start") + "' and date<'" + getTime("end") + "'"
    };

    socrata.request(socrataRequest, function(x) {
        var typeSelector = $('#primary_type');
        var newOption;
        x.forEach(function(typeObject) {
            newOption = $('<option>' + typeObject.primary_type + '</option>').val(typeObject.primary_type);
            typeSelector.append(newOption);
        });
    });
};

//Grabs the date and converts it to the proper formatting. We got from MM/DD/YYYY to YYYY-MM-DD
function getTime(string) {
    //string should be start or end
    var textfield = $('#' + string + "date input");

    var datepieces = textfield.val().split("/");

    var returnTimeStamp = datepieces[2] + "-" + datepieces[0] + "-" + datepieces[1];

    return returnTimeStamp;
};

//Formats the time from ISO returned by Socrata to american MM/DD/YYYY
function formatTime(string) {
    var fields = string.split("T");
    var date = fields[0];
    date = date.split("-");
    date = date[1] + "/" + date[2] + "/" + date[0] + " " + fields[1];
    return date;
};

function clearCrimes() {
    crimeMarkers.forEach(function (crime) {
        crime.setMap(null);
    });

    crimeMarkers = [];
};

function plotCrimes() {
    loadingCount++;
    loadingOn();

    clearCrimes();
    //We start with only our date range in our where request
    var whereStatement = "date>'" + getTime("start") + "' and date<'" + getTime("end") + "'";

    var type_selection = $('#primary_type').find(":selected").val();

    //Let's customize our where statement
    if(type_selection != 'all') {
        whereStatement += " and primary_type='" + type_selection + "'"
    }

    var arrest_selection = $('#arrest').find(":selected").val();

    if(arrest_selection != 'all') {
        whereStatement += " and arrest='" + arrest_selection + "'";
    }

    var socrataRequest = {
        url: socrataURL,
        dataset: crimeDataset,
        select: "case_number,date,primary_type,description,arrest,location_description,latitude,longitude",
        where: whereStatement
    };

    socrata.request(socrataRequest, function(response) {
        response.forEach(function(crime) {
            //Create a new marker and put it on the map
            var crimeLatLng = new google.maps.LatLng(crime.latitude,crime.longitude);

            var content_string = "<strong>Case Number</strong>: " + crime.case_number + "<br/>" +
                                 "<strong>Date</strong>: " + formatTime(crime.date) + "<br/>" +
                                 "<strong>Primary Type</strong>: " + crime.primary_type + "<br/>"+
                                 "<strong>Location</strong>: " + crime.location_description + "<br/>" +
                                 "<strong>Description</strong>: " + crime.description + "<br/>"+
                                 "<strong>Arrest</strong>: " + crime.arrest + "<br/>";

            var marker = new google.maps.Marker( {
                                                      position: crimeLatLng,
                                                      map: map,
                                                      title: crime.primary_type,
                                                      content: content_string
                                                  });

            //Add an event listener so we can do a pop-up
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setPosition(marker.position);
                infowindow.setContent(marker.content);
                infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
                infowindow.open(map);
            });

            crimeMarkers.push(marker);
        });

        loadingCount--;
        if(loadingCount == 0) loadingOff();
    });
};


//Census API key. This is only required for tracking, not authorization
var censusKey = "486a5ea7276908d925ac2818d01530411f902225";

//The server location for the socrata data
var socrataURL = "data.cityofchicago.org";

//Socrata datasets
var crimeDataset = "ijzp-q8t2";
