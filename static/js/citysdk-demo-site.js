function saveToCSVfile(csvString) {

    var filename = "citySDK_output.csv";
    var fileData;

    var blob = new Blob([csvString], {type: "application/csv;charset=utf-8"});
    saveAs(blob, filename);
}// end saveToCSVfile
