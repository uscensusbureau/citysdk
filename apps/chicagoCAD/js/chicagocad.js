var sdk, census, socrata, map, infowindow;
var boundaries = [];
var variables = [];
var crimeMarkers = [];
var loadingCount = 0;

$(document).ready(function() {
    //Initialize the SDK and create references to our Socrata and Census modules
    sdk = new CitySDK();
    census = new CensusModule(citySDKdemoConfiguration.apikey);
    socrata = sdk.modules.socrata;

    //Enable the modules - Socrata doesn't require an API key
    socrata.enable();
    // census.enable(censusKey);

    //Enable tooltips - these pop up when a user hover's over a
    //variables "?" - it gets the descriptions from the Census moudule's aliases
    //object
    var checkboxes = $("input:checkbox");
    var questionLinks = $(".questionLink");
    checkboxes.each(function(i) {
        questionLinks[i].title = census.aliases[checkboxes[i].value].description;
    });

    $('[data-toggle="tooltip"]').tooltip();

    //Enable the date picker for start and end dates
    $('#startdate input').datepicker({
        todayBtn: true,
        todayHighlight: true,
        defaultViewDate: { year: 2015, month: 00, day: 01 }
    });

    $('#enddate input').datepicker({
        todayBtn: true,
        todayHighlight: true
    });

    //When users change dates we should update the crime types to only display
    //crimes which were committed in that date range
    $('#startdate input').change(updateCrimeTypes);
    $('#enddate input').change(updateCrimeTypes);
    $('input:checkbox').change(updateChoroplethOptions);

    //Map options for our google map
    var mapOptions = {
        center: {
            lat: 41.8369,
            lng: -87.6847
        },
        zoom: 11
    };

    //Initialize the google map
    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

    //Set the default geoJSON style
    map.data.setStyle({
        fillColor: 'blue',
        fillOpacity: 0.15,
    });

    //Info window used for popups
    infowindow = new google.maps.InfoWindow();

    //We're all set, update our crime types and draw the default boundaries
    updateCrimeTypes();
    updateBoundaries();
});

//Displays the loading image
function loadingOn() {
    $('#loading').css('display', 'block');
}

//Hides the loading image
function loadingOff() {
    $('#loading').css('display', 'none');
}

//Removes all the GeoJSON from the map
function clearBoundaries() {
    for (var i = 0; i < boundaries.length; i++) {
      map.data.remove(boundaries[i]);
    }
}

//Creates the request to the Census module for GeoJSON and variable data
function updateBoundaries() {
    //Turn on the loading screen and increment our loading counter (incase we also request crimes at the same time)
    loadingOn();
    loadingCount++;

    //Construct our request object - lat/lng for Chicago, default to place level with no variables
    var request = {
        lat: 41.8369,
        lng: -87.6847,
        level: "place",
        variables: []
    }

    //Grab the user's boundary selection
    var boundary_selection = $('#boundary').find(":selected").val();

    //If we don't want city boundaries, we need to set a container and sublevel tag
    if(boundary_selection != 'place') {
        request.level = boundary_selection;
        request.container = "place";
        request.sublevel = true;
    }

    //Let's check for our variables
    var checkboxes = $("input[type=checkbox]:checked");

    //For each checkbox, add it's "value" to the variable array. These are all aliases
    //from the CitySDK census module
    //Check http://uscensusbureau.github.io/citysdk/guides/censusModule/aliases.html for more info
    checkboxes.each(function(i) {
        request.variables.push(checkboxes[i].value);
    });

    //Store a copy of the variables the user requested - we use this to iterate
    //over them when we display the pop-up
    variables = request.variables;

    //We now have a complete request, let's get the boundaries and data
    census.geoRequest(request, function(geojson) {
        //Remove previous json
        clearBoundaries();

        //Check to see if we have choropleth enabled
        var choropleth_variable = $('#choropleth_variable').find(":selected").val();

        //If we don't want city boundaries, we need to set a container and sublevel tag
        if(choropleth_variable != 'none') {
            var variableName = census.aliases[choropleth_variable].variable;
            var maxValue = Number.MIN_VALUE;
            var minValue = Number.MAX_VALUE;

            //Parse and find the maximum value and the lowest value
            geojson.features.forEach(function(feature) {
                if(feature.properties[variableName] != null && feature.properties.AREALAND > 0 && (feature.properties.AREAWATER/feature.properties.AREALAND) < 0.98) {
                    maxValue = Math.max(maxValue, Number(feature.properties[variableName]));
                    minValue = Math.min(minValue, Number(feature.properties[variableName]));
                }
            });

            //Now we have the max and minimum values. If they're different, we
            //can calibrate the opacity - the lowest value corresponds to 0, and the
            //highest value corresponds to 1. We will gradient between them.
            if(maxValue != minValue && maxValue != Number.MIN_VALUE && minValue != Number.MAX_VALUE) {
                var range = maxValue - minValue;

                //Our opacity formula is:
                //              feature.variable - minValue
                //  opacity = _______________________________
                //                         range
                //
                geojson.features.forEach(function(feature) {
                    feature.properties.choroplethOpacity = (Number(feature.properties[variableName]) - minValue)/range;
                });
            } else {
                //For some reason the max value and the min value are the same
                //can't build a choropleth off of that, so we disable it
                choropleth_variable = 'none';
            }
        }

        //Add new geojson
        boundaries = map.data.addGeoJson(geojson);

        //If we have choropleth enabled
        if(choropleth_variable != 'none') {
            showChoroplethLegend();
            map.data.setStyle(
                function(feature) {
                    var opacity = feature.getProperty('choroplethOpacity');

                    if($("input[type=radio]:checked").val() == 'color') {
                        if(isNaN(opacity) || opacity < 0) {
                                return {
                                    fillColor: "black",
                                    fillOpacity: 1,
                                    strokeWeight: 0.1
                                };
                        }

                        return {
                            fillColor: getChoroplethColor(opacity),
                            fillOpacity: 1.0,
                            strokeWeight: 0.1
                        };
                    } else {
                        if(isNaN(opacity) || opacity < 0) {
                                return {
                                    fillColor: "blue",
                                    fillOpacity: 0,
                                    strokeWeight: 0.1
                                };
                        }

                        return {
                            fillColor: "blue",
                            fillOpacity: opacity,
                            strokeWeight: 0.1
                        };
                    }


                }
            );
        } else {
            //Set the default geoJSON style
            hideChoroplethLegend();
            map.data.setStyle({
                fillColor: 'blue',
                fillOpacity: 0.15
            });
        }

        //Decrement the load counter, and if it is 0, turn off the loading screen
        loadingCount--;
        if(loadingCount == 0) loadingOff();
    });

    //Add a listener so when a user clicks within a boundary we show them the
    //requested information
    map.data.addListener('click', function(event) {
        var content = "<h3>" + event.feature.getProperty("NAME") + "</h3><div>";
        for(var i = 0; i < variables.length; i++) {
            content += "<br/><b>" + $(':input[value="' + variables[i] + '"]').attr("label") + "</b>: " + event.feature.getProperty(variables[i]);
        }
        content += "</div>"

        infowindow.setContent(content);
        infowindow.setPosition(event.latLng);
        infowindow.open(map);
    });
};

function getChoroplethColor(input) {
    var percentage = input * 100;
    if(percentage < 10) {
        return "#ffffff";
    } else if(percentage < 20) {
        return "#e2ebfb";
    } else if(percentage < 30) {
        return "#c2d4f6";
    } else if(percentage < 40) {
        return "#b0cbff";
    } else if(percentage < 50) {
        return "#96baff";
    } else if(percentage < 60) {
        return "#78a6ff";
    } else if(percentage < 70) {
        return "#5f94fc";
    } else if(percentage < 80) {
        return "#4483fc";
    } else if(percentage < 90) {
        return "#2a72ff";
    } else {
        return "#0057ff";
    }
};

//Updates the crime type selector using the date range we're interested in
function updateCrimeTypes() {
    //Make the socrata request object
    var socrataRequest = {
        url: socrataURL,
        dataset: crimeDataset,
        select: "primary_type",
        group: "primary_type",
        where: "date>'" + getTime("start") + "' and date<'" + getTime("end") + "'"
    };

    //Send the socrata request, and make a new list of options
    socrata.request(socrataRequest, function(x) {
        var typeSelector = $('#primary_type');
        typeSelector.empty();
        typeSelector.append('<option value="all">All</option>');
        var newOption;
        x.forEach(function(typeObject) {
            newOption = $('<option>' + typeObject.primary_type + '</option>').val(typeObject.primary_type);
            typeSelector.append(newOption);
        });
    });
};

//Updates the options for the choropleth based upon selected variables
function updateChoroplethOptions() {
    //Select dom
    var select = $('#choropleth_variable');

    select.empty();
    select.append($('<option value="none">None</option>'));

    //Let's check for our variables
    var checkboxes = $("input[type=checkbox]:checked");

    //For each checkbox, add it's "value" to the variable array. These are all aliases
    //from the CitySDK census module
    //Check http://uscensusbureau.github.io/citysdk/guides/censusModule/aliases.html for more info
    checkboxes.each(function(i) {
        select.append($('<option value="' + checkboxes[i].value + '">' + $(':input[value="' + checkboxes[i].value + '"]').attr("label")  + '</option>'));
    });
};

function showChoroplethLegend() {
    var legend = $('#legend');

    legend.css('display', 'block');

    var legendDivs = $('#legend').children('div');
    var mode = $("input[type=radio]:checked").val();

    legendDivs.each(function(i) {
        if(mode == 'color') {
            console.log(legendDivs[i].id);
            $('#' + legendDivs[i].id).css('background-color', getChoroplethColor(legendDivs[i].id/100));
        } else {
            $('#' + legendDivs[i].id).css('background-color', 'rgba(0,0,255,' + legendDivs[i].id/100 + ')');
        }
    });
};

function hideChoroplethLegend() {
    var legend = $('#legend');
    legend.css('display', 'none');
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

//Removes all crimes from the map
function clearCrimes() {
    crimeMarkers.forEach(function (crime) {
        crime.setMap(null);
    });

    crimeMarkers = [];
};

//Plots all crimes on the map
function plotCrimes() {
    //Throw up the loading screen and increment the counter
    loadingCount++;
    loadingOn();

    clearCrimes();
    //We start with only our date range in our where request
    var whereStatement = "date>'" + getTime("start") + "' and date<'" + getTime("end") + "'";

    //Grab the type of crime the user is interested in
    var type_selection = $('#primary_type').find(":selected").val();

    //Let's customize our where statement
    if(type_selection != 'all') {
        whereStatement += " and primary_type='" + type_selection + "'"
    }

    //Grab the arrest result the user is interested in
    var arrest_selection = $('#arrest').find(":selected").val();

    if(arrest_selection != 'all') {
        whereStatement += " and arrest='" + arrest_selection + "'";
    }

    //Construct our request object
    var socrataRequest = {
        url: socrataURL,
        dataset: crimeDataset,
        select: "case_number,date,primary_type,description,arrest,location_description,latitude,longitude",
        where: whereStatement
    };

    //Send the request
    socrata.request(socrataRequest, function(response) {
        response.forEach(function(crime) {
            //Create a new marker and put it on the map
            var crimeLatLng = new google.maps.LatLng(crime.latitude,crime.longitude);

            //Set the content for the pop up window when clicked
            var content_string = "<strong>Case Number</strong>: " + crime.case_number + "<br/>" +
                                 "<strong>Date</strong>: " + formatTime(crime.date) + "<br/>" +
                                 "<strong>Primary Type</strong>: " + crime.primary_type + "<br/>"+
                                 "<strong>Location</strong>: " + crime.location_description + "<br/>" +
                                 "<strong>Description</strong>: " + crime.description + "<br/>"+
                                 "<strong>Arrest</strong>: " + crime.arrest + "<br/>";

            //Create the marker
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


        //Decrement the counter and turn off the loading screen if we're done
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
