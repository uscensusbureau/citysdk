//https://api.uptimerobot.com/getMonitors?apiKey=m777381762-b68a961a63bbe4929d4415f5&format=json&logs=1&responseTimes=1


jQuery(document).ready(function(){


    jQuery(".upr-show-details-button").bind("click",function(){
        jQuery(this).closest("article").find(".upr-status-log-details").toggle();
    });


    function processMonitor(index){
        var monitorKey = processList[index];

        var currentDate = new Date();
        var endDateInput = currentDate.toISOString().slice(0,10).replace(/-/g,"-");
        currentDate.setDate(currentDate.getDate()-7);
        var startDateInput = currentDate.toISOString().slice(0,10).replace(/-/g,"-");
        var url = "https://api.uptimerobot.com/getMonitors?apiKey="+monitorKey+"&format=json&logs=1&responseTimes=1&responseTimesLimit=20&responseTimesAverage=120&responseTimesStartDate="+startDateInput+"&responseTimesEndDate="+endDateInput;

        jQuery.ajax({
            type: 'GET',
            dataType: "jsonp",
            contentType: 'text/plain',
            jsonpCallback: 'jsonUptimeRobotApi',
            url: url
        }).done(function(data){
            var thisMonitor = data.monitors.monitor[0];
            var editMe = jQuery("[data-monitorapikey='"+ monitorKey +"']");

            // Populate the Title and Basic Status
            editMe.find(".panel-title").text(thisMonitor['friendlyname']);
            editMe.find(".upr-status-icon .glyphicon").removeClass("glyphicon-refresh");
            editMe.find(".upr-status-icon .glyphicon").removeClass("bg-info");

            if(thisMonitor['status']=="2"){
                editMe.find(".upr-status-icon .glyphicon").addClass("glyphicon-ok");
                editMe.find(".upr-status-icon .glyphicon").addClass("bg-success");
                editMe.find(".upr-status-icon .status-text").text("Up");
            }else{
                editMe.find(".upr-status-icon .glyphicon").addClass("glyphicon-warning-sign");
                editMe.find(".upr-status-icon .glyphicon").addClass("bg-warning");
                editMe.find(".upr-status-icon .status-text").text("Error");
            }


            // Populate the Uptime Bar
            editMe.find(".progress-bar").attr("aria-valuenow",thisMonitor['alltimeuptimeratio']);
            editMe.find(".progress-bar").css('width',thisMonitor['alltimeuptimeratio']+"%");
            editMe.find(".progress-bar").text(thisMonitor['alltimeuptimeratio']+"%");

            // Populate the Status Log Table
            var tableLog = "";
            jQuery(thisMonitor['log']).each(function(index,value){
                if(value['type']=="2"){
                    tableLog = tableLog + "<tr class=\"success\"><td>Up</td>";
                }else if(value['type']=="1"){
                    tableLog = tableLog + "<tr class=\"warning\"><td>Down</td>";
                }else{
                    tableLog = tableLog + "<tr class=\"active\"><td>Unknown</td>";
                }
                tableLog = tableLog + "<td>" +value['datetime']+ "</td>";

                tableLog = tableLog + "</tr>";
            });
            editMe.find(".upr-event-log-table").append(tableLog);


            // Draw the Uptime Chart
            var dataPoints = [];
            var axisLabels = [];
            jQuery(thisMonitor.responsetime).each(function(index,value){
                dataPoints.push(value['value']);
                axisLabels.push(value['datetime']);
            });
            dataPoints.unshift("Response Time");
            var chart = c3.generate({
                bindto: "#response-"+monitorKey+"-chart",
                data:{
                    columns: [
                        dataPoints
                    ],
                    type:'bar'
                },
                axis: {
                    x:{
                        type:'category',
                        categories: axisLabels
                    }
                },

            });

            if(index<processList.length-1){
                processMonitor(index+1);
            }
        });
    }//processMonitor

    // Populate Data
    var processList = [];

    jQuery("#uptimeRobotMonitors article").each(function(index,value){
        var monitorKey = jQuery(this).data("monitorapikey");
        processList.push(monitorKey);


    });

    if(processMonitor.length>0){
        processMonitor(0);
    }

if(document.location.protocol !== "https:"){
    var errorMsg = "<div class=\"alert alert-danger\" role=\"alert\">Warning: Parts of the CitySDK test suite REQUIRE non-SSL communication. View this page with http not https.</div>";
    jQuery("#citysdk-test-suite h2").after(errorMsg);
}

});