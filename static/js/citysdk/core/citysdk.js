(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('terraformer'), require('terraformer-arcgis-parser'), require('jquery')) :
      typeof define === 'function' && define.amd ? define(['terraformer', 'terraformer-arcgis-parser', 'jquery'], factory) :
          (global.CitySdk = factory(global.Terraformer, global.Terraformer.ArcGIS, global.$));
}(this, function(Terraformer, ArcGIS, $) {
  'use strict';

  Terraformer = 'default' in Terraformer ? Terraformer['default'] : Terraformer;
  ArcGIS = 'default' in ArcGIS ? ArcGIS['default'] : ArcGIS;
  $ = 'default' in $ ? $['default'] : $;

  var AL = "alabama";
  var AK = "alaska";
  var AZ = "arizona";
  var AR = "arkansas";
  var CA = "california";
  var CO = "colorado";
  var CT = "connecticut";
  var DE = "delaware";
  var DC = "district of columbia";
  var FL = "florida";
  var GA = "georgia";
  var HI = "hawaii";
  var ID = "idaho";
  var IL = "illinois";
  var IN = "indiana";
  var IA = "iowa";
  var KS = "kansas";
  var KY = "kentucky";
  var LA = "louisiana";
  var ME = "maine";
  var MD = "maryland";
  var MA = "massachusetts";
  var MI = "michigan";
  var MN = "minnesota";
  var MS = "mississippi";
  var MO = "missouri";
  var MT = "montana";
  var NE = "nebraska";
  var NV = "nevada";
  var NH = "new hampshire";
  var NJ = "new jersey";
  var NM = "new mexico";
  var NY = "new york";
  var NC = "north carolina";
  var ND = "north dakota";
  var OH = "ohio";
  var OK = "oklahoma";
  var OR = "oregon";
  var PA = "pennsylvania";
  var PR = "puerto rico"
  var RI = "rhode island";
  var SC = "south carolina";
  var SD = "south dakota";
  var TN = "tennessee";
  var TX = "texas";
  var UT = "utah";
  var VT = "vermont";
  var VA = "virginia";
  var WA = "washington";
  var WV = "west virginia";
  var WI = "wisconsin";
  var WY = "wyoming";
  var stateNames = {
    AL: AL,
    AK: AK,
    AZ: AZ,
    AR: AR,
    CA: CA,
    CO: CO,
    CT: CT,
    DE: DE,
    DC: DC,
    FL: FL,
    GA: GA,
    HI: HI,
    ID: ID,
    IL: IL,
    IN: IN,
    IA: IA,
    KS: KS,
    KY: KY,
    LA: LA,
    ME: ME,
    MD: MD,
    MA: MA,
    MI: MI,
    MN: MN,
    MS: MS,
    MO: MO,
    MT: MT,
    NE: NE,
    NV: NV,
    NH: NH,
    NJ: NJ,
    NM: NM,
    NY: NY,
    NC: NC,
    ND: ND,
    OH: OH,
    OK: OK,
    OR: OR,
    PA: PA,
    PR: PR,
    RI: RI,
    SC: SC,
    SD: SD,
    TN: TN,
    TX: TX,
    UT: UT,
    VT: VT,
    VA: VA,
    WA: WA,
    WV: WV,
    WI: WI,
    WY: WY
  };

  var AL$1 = [32.3617, -86.2792];
  var AK$1 = [58.3, -134.4167];
  var AZ$1 = [33.45, -112.0667];
  var AR$1 = [34.6361, -92.3311];
  var CA$1 = [38.5766, -121.4934];
  var CO$1 = [39.7391, -104.9849];
  var CT$1 = [41.7641, -72.6828];
  var DE$1 = [39.1619, -75.5267];
  var DC$1 = [38.9047, -77.0164];
  var FL$1 = [30.4381, -84.2816];
  var GA$1 = [33.7493, -84.3883];
  var HI$1 = [21.3073, -157.8573];
  var ID$1 = [43.6177, -116.1996];
  var IL$1 = [39.7983, -89.6544];
  var IN$1 = [39.7686, -86.1625];
  var IA$1 = [41.5912, -93.6039];
  var KS$1 = [39.0481, -95.6781];
  var KY$1 = [38.1867, -84.8753];
  var LA$1 = [30.4571, -91.1874];
  var ME$1 = [44.3235, -69.7653];
  var MD$1 = [38.9786, -76.4911];
  var MA$1 = [42.3582, -71.0637];
  var MI$1 = [42.7337, -84.5556];
  var MN$1 = [44.9553, -93.1022];
  var MS$1 = [32.2992, -90.18];
  var MO$1 = [38.5791, -92.173];
  var MT$1 = [46.5958, -112.027];
  var NE$1 = [40.8106, -96.6803];
  var NV$1 = [39.1608, -119.7539];
  var NH$1 = [43.2067, -71.5381];
  var NJ$1 = [40.2237, -74.764];
  var NM$1 = [35.6672, -105.9644];
  var NY$1 = [42.6525, -73.7572];
  var NC$1 = [35.7806, -78.6389];
  var ND$1 = [46.8133, -100.779];
  var OH$1 = [39.9833, -82.9833];
  var OK$1 = [35.4822, -97.535];
  var OR$1 = [44.9308, -123.0289];
  var PA$1 = [40.2697, -76.8756];
  var PR$1 = [18.4655, -66.1057];
  var RI$1 = [41.8236, -71.4222];
  var SC$1 = [34.0298, -80.8966];
  var SD$1 = [44.368, -100.3364];
  var TN$1 = [36.1667, -86.7833];
  var TX$1 = [30.25, -97.75];
  var UT$1 = [40.75, -111.8833];
  var VT$1 = [44.25, -72.5667];
  var VA$1 = [37.5333, -77.4667];
  var WA$1 = [47.0425, -122.8931];
  var WV$1 = [38.3472, -81.6333];
  var WI$1 = [43.0667, -89.4];
  var WY$1 = [41.1456, -104.8019];
  var stateCapitalCoordinates = {
    AL: AL$1,
    AK: AK$1,
    AZ: AZ$1,
    AR: AR$1,
    CA: CA$1,
    CO: CO$1,
    CT: CT$1,
    DE: DE$1,
    DC: DC$1,
    FL: FL$1,
    GA: GA$1,
    HI: HI$1,
    ID: ID$1,
    IL: IL$1,
    IN: IN$1,
    IA: IA$1,
    KS: KS$1,
    KY: KY$1,
    LA: LA$1,
    ME: ME$1,
    MD: MD$1,
    MA: MA$1,
    MI: MI$1,
    MN: MN$1,
    MS: MS$1,
    MO: MO$1,
    MT: MT$1,
    NE: NE$1,
    NV: NV$1,
    NH: NH$1,
    NJ: NJ$1,
    NM: NM$1,
    NY: NY$1,
    NC: NC$1,
    ND: ND$1,
    OH: OH$1,
    OK: OK$1,
    OR: OR$1,
    PA: PA$1,
    PR: PR$1,
    RI: RI$1,
    SC: SC$1,
    SD: SD$1,
    TN: TN$1,
    TX: TX$1,
    UT: UT$1,
    VT: VT$1,
    VA: VA$1,
    WA: WA$1,
    WV: WV$1,
    WI: WI$1,
    WY: WY$1
  };

  Terraformer.ArcGIS = ArcGIS;

  /**
   * @class
   */
  class CitySdk {

    /**
     * @constructs {@link CitySdk}
     */
    constructor() {
      this.modules = {};
    }

    /**
     * @function ajaxRequest
     * @static
     *
     * @description Makes an AJAX call
     *
     * @param {string} url URL to request
     *
     * @param {boolean} jsonp
     *
     * @return {promise} Returns a standard ajax promise
     */
    static ajaxRequest(url, jsonp) {
      if (jsonp) {
        var deferred = $.Deferred();

        $.ajax({
          url: url,
          method: "GET",
          dataType: "jsonp",

          success: function(response) {
            deferred.resolve(response);
          }
        });

        return deferred.promise();
      }

      return $.getJSON(url);
    }

    /**
     * @function postRequest
     * @static
     *
     * @description Make an AJAX call using the POST method
     *
     * @param {string} url
     * @param {object} data
     *
     * @returns {*}
     */
    static postRequest(url, data) {
      return $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "json"
      });
    }

    /**
     * @function getStateCapitalCoords
     * @static
     *
     * @description Gets the coordinates of a state"s capital
     * from it"s name or 2-letter code.
     *
     * @param {string} state Name or 2-letter code of the state
     * (case insensitive)
     *
     * @return {Array} Returns 2-position array of Lat & Long
     * for the capital of the state. Returns false if no state is found.
     */
    static getStateCapitalCoords(state) {
      // No string supplied
      if (!state) {
        return null;
      }

      state = state.toUpperCase().trim();

      if (state in stateCapitalCoordinates) {
        // state is a 2-letter state code and is valid
        return stateCapitalCoordinates[state];
      }

      // Look in US_STATE_NAMES
      state = state.toLowerCase();

      for (var statecode in stateNames) {
        if (state === stateNames[statecode]) {
          return stateCapitalCoordinates[statecode];
        }
      }

      // Nothing was found
      return null;
    }

    /**
     * @function parseRequestLatLng
     * @static
     *
     * @description Scans the request for alternative ways
     * to specify latitude & longiture and migrates those
     * variables to lat & lng positions.
     *
     * @param {object} request the request being made to the module
     *
     * @return {object} the updated request
     */
    static parseRequestLatLng(request) {
      // Allow the users to use either x,y; lat,lng;
      // latitude,longitude to specify co-ordinates
      if (!("lat" in request)) {
        if ("latitude" in request) {
          request.lat = request.latitude;
          delete request.latitude;

        } else if ("y" in request) {
          request.lat = request.y;
          delete request.y;
        }
      }

      if (!("lng" in request)) {
        if ("longitude" in request) {
          request.lng = request.longitude;
          delete request.longitude;

        } else if ("x" in request) {
          request.lng = request.x;
          delete request.x;
        }
      }

      return request;
    }

    static parseResponseLatLng(response) {
      response.lat = parseFloat(response.features[0].attributes.CENTLAT);
      response.lng = parseFloat(response.features[0].attributes.CENTLON);

      return response;
    }

    /**
     * @description Converts ESRI JSON to GeoJSON
     *
     * @param {string} esriJson
     *
     * @returns {{type: string, features: Array}}
     *
     * @todo Use lower camelCase for function name
     */
    static esriToGeo(esriJson) {
      if (!("features" in esriJson)) {
        // data is missing
        return null;
      }

      let features = esriJson.features;

      let geojson = {
        "type": "FeatureCollection",
        "features": []
      };

      for (var i = 0; i < features.length; i++) {
        features[i].spatialReference = esriJson.spatialReference;
        geojson.features.push(Terraformer.ArcGIS.parse(features[i]));
      }

      return geojson;
    }

    /**
     * @description Converts geoJSON to ESRI JSON.
     * This is functionally an alias of Terraformer.ArcGIS.convert
     * (see https://github.com/Esri/Terraformer for details)
     *
     * @param {string} geoJson
     *
     * @returns {object}
     *
     * @todo Use lower camelCase for function name
     */
    static geoToEsri(geoJson) {
      return Terraformer.ArcGIS.convert(geoJson);
    }
  }

  CitySdk.version = "0.0.1";
  CitySdk.stateNames = stateNames;
  CitySdk.stateCapitalCoordinates = stateCapitalCoordinates;

  return CitySdk;

}));
