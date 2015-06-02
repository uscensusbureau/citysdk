/**
 * This is the CitySDK CKAN Module Template
 */

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.ckan = new CkanModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function CkanModule() {
    this.enabled = false;
    this.applicationToken = null;
};

//Enable function. No API key required
CkanModule.prototype.enable = function() {
    this.enabled = true;
};

CkanModule.prototype.request = function(request, callback) {
    var urlPattern = /({url})/;
    var resourcePattern = /({resource})/;
    var selectPattern = /({select})/;

    var ckanURL = "https://{url}/api/action/datastore_search_sql?sql=SELECT%20{select}%20FROM%20\"{resource}\"";

    ckanURL = ckanURL.replace(urlPattern, request.url);
    ckanURL = ckanURL.replace(resourcePattern, request.resource);

    if (request.select != null) {
        ckanURL = ckanURL.replace(selectPattern, encodeURIComponent(request.select));
    }
    else {
        ckanURL = ckanURL.replace(selectPattern, "*");
    }

    if (request.where != null) {
        ckanURL = ckanURL + "%20WHERE%20" + encodeURIComponent(request.where);
    }

    if (request.orderBy != null) {
        ckanURL = ckanURL + "%20ORDER%20BY%20" + encodeURIComponent(request.orderBy);
    }

    if (request.limit != null) {
        ckanURL = ckanURL + "%20LIMIT%20" + encodeURIComponent(request.limit);
    }
    else {
        ckanURL = ckanURL + "%20LIMIT%201000";
    }

    CitySDK.prototype.sdkInstance.ajaxRequest(ckanURL).done(
        function(response) {
            response = $.parseJSON(response);
            callback(response);
        }
    );
};

//After this point the module is all up to you
//References to an instance of the SDK should be called as:
CitySDK.prototype.sdkInstance;
//And references to this module should be called as
CitySDK.prototype.modules.ckan;
//when 'this' is ambiguous
