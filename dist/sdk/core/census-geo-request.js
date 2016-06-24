(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('terraformer'), require('terraformer-arcgis-parser')) :
	typeof define === 'function' && define.amd ? define(['jquery', 'terraformer', 'terraformer-arcgis-parser'], factory) :
	(global.CensusGeoRequest = factory(global.$,global.Terraformer,global.Terraformer.ArcGIS));
}(this, function ($,Terraformer,ArcGIS) { 'use strict';

	$ = 'default' in $ ? $['default'] : $;
	Terraformer = 'default' in Terraformer ? Terraformer['default'] : Terraformer;
	ArcGIS = 'default' in ArcGIS ? ArcGIS['default'] : ArcGIS;

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

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	Terraformer.ArcGIS = ArcGIS;

	/**
	 * @class
	 */

	var CitySdk = function () {

	  /**
	   * @constructs {@link CitySdk}
	   */

	  function CitySdk() {
	    classCallCheck(this, CitySdk);

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


	  createClass(CitySdk, null, [{
	    key: "ajaxRequest",
	    value: function ajaxRequest(url, jsonp) {
	      if (jsonp) {
	        var dfr = $.Deferred();

	        $.ajax({
	          url: url,
	          method: "GET",
	          dataType: "jsonp",

	          success: function success(response) {
	            dfr.resolve(response);
	          },

	          error: function error(reason) {
	            dfr.reject(reason);
	          }
	        });

	        return dfr.promise();
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

	  }, {
	    key: "postRequest",
	    value: function postRequest(url, data) {
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

	  }, {
	    key: "getStateCapitalCoords",
	    value: function getStateCapitalCoords(state) {
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

	  }, {
	    key: "parseRequestLatLng",
	    value: function parseRequestLatLng(request) {
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
	  }, {
	    key: "parseResponseLatLng",
	    value: function parseResponseLatLng(response) {
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

	  }, {
	    key: "esriToGeo",
	    value: function esriToGeo(esriJson) {
	      if (!("features" in esriJson)) {
	        // data is missing
	        return null;
	      }

	      var features = esriJson.features;

	      var geojson = {
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

	  }, {
	    key: "geoToEsri",
	    value: function geoToEsri(geoJson) {
	      return Terraformer.ArcGIS.convert(geoJson);
	    }
	  }]);
	  return CitySdk;
	}();

	CitySdk.version = "0.0.1";
	CitySdk.stateNames = stateNames;
	CitySdk.stateCapitalCoordinates = stateCapitalCoordinates;

	var population_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0010001","description":"Total population in 1990"};var population_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P001001","description":"Total population in 2000"};var population_2010={"api":{"sf1":[2010]},"variable":"PCT0120001","description":"Total population in 2010"};var population_families_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0020001","description":"The number of families in 1990"};var population_families_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P031001","description":"The number of families in 2000"};var population_families_2010={"api":{"sf1":[2010]},"variable":"PCT0160002","description":"The number of families in 2010"};var population_male_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0050001","description":"The number of males in 1990"};var population_female_1990={"api":{"sf1":[1990,2010]},"variable":"P0050002","description":"The number of females in 1990"};var population_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012002","description":"The number of males in 2000"};var population_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012026","description":"The number of females in 2000"};var population_male_2010={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0120002","description":"The number of males in 2010"};var population_female_2010={"api":{"sf1":[1990,2010]},"variable":"P0120026","description":"The number of females in 2010"};var age_under_1_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110001","description":"The number of persons under 1 year old in 1990"};var age_1_to_2_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110002","description":"The number of persons ages 1 to 2 years old in 1990"};var age_3_to_4_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110003","description":"The number of persons ages 3 to 4 years old in 1990"};var age_5_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110004","description":"The number of persons age 5 years old in 1990"};var age_6_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110005","description":"The number of persons ages 6 years old in 1990"};var age_7_to_9_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110006","description":"The number of persons ages 7 to 9 years old in 1990"};var age_10_to_11_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110007","description":"The number of persons ages 10 to 11 years old in 1990"};var age_12_to_13_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110008","description":"The number of persons ages 12 to 13 years old in 1990"};var age_14_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110009","description":"The number of persons age 14 years old in 1990"};var age_15_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110010","description":"The number of persons age 15 years old in 1990"};var age_16_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110011","description":"The number of persons age 16 years old in 1990"};var age_17_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110012","description":"The number of persons age 17 years old in 1990"};var age_18_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110013","description":"The number of persons age 18 years old in 1990"};var age_19_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110014","description":"The number of persons age 19 years old in 1990"};var age_20_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110015","description":"The number of persons age 20 years old in 1990"};var age_21_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110016","description":"The number of persons age 21 years old in 1990"};var age_22_to_24_1990={"api":{"sf1":[1990,2010]},"variable":"P0110017","description":"The number of persons ages 22 to 24 years old in 1990"};var age_25_to_29_1990={"api":{"sf1":[1990,2010]},"variable":"P0110018","description":"The number of persons ages 25 to 29 years old in 1990"};var age_30_to_34_1990={"api":{"sf1":[1990,2010]},"variable":"P0110019","description":"The number of persons ages 30 to 34 years old in 1990"};var age_35_to_39_1990={"api":{"sf1":[1990,2010]},"variable":"P0110020","description":"The number of persons ages 35 to 39 years old in 1990"};var age_40_to_44_1990={"api":{"sf1":[1990,2010]},"variable":"P0110021","description":"The number of persons ages 40 to 44 years old in 1990"};var age_45_to_49_1990={"api":{"sf1":[1990,2010]},"variable":"P0110022","description":"The number of persons ages 45 to 49 years old in 1990"};var age_50_to_54_1990={"api":{"sf1":[1990,2010]},"variable":"P0110023","description":"The number of persons ages 50 to 54 years old in 1990"};var age_55_to_59_1990={"api":{"sf1":[1990,2010]},"variable":"P0110024","description":"The number of persons ages 55 to 59 years old in 1990"};var age_60_to_61_1990={"api":{"sf1":[1990,2010]},"variable":"P0110025","description":"The number of persons ages 60 to 61 years old in 1990"};var age_62_to_64_1990={"api":{"sf1":[1990,2010]},"variable":"P0110026","description":"The number of persons ages 62 to 64 years old in 1990"};var age_65_to_69_1990={"api":{"sf1":[1990,2010]},"variable":"P0110027","description":"The number of persons ages 65 to 69 years old in 1990"};var age_70_to_74_1990={"api":{"sf1":[1990,2010]},"variable":"P0110028","description":"The number of persons ages 70 to 74 years old in 1990"};var age_75_to_79_1990={"api":{"sf1":[1990,2010]},"variable":"P0110029","description":"The number of persons ages 75 to 79 years old in 1990"};var age_80_to_84_1990={"api":{"sf1":[1990,2010]},"variable":"P0110030","description":"The number of persons ages 80 to 84 years old in 1990"};var age_under_5_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012003","description":"The number of male persons ages under 5 years old in 2000"};var age_5_to_9_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012004","description":"The number of male persons ages 5 to 9 years old in 2000"};var age_10_to_14_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012005","description":"The number of male persons ages 10 to 14 years old in 2000"};var age_15_to_17_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012006","description":"The number of male persons ages 15 to 17 years old in 2000"};var age_18_to_19_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012007","description":"The number of male persons ages 18 to 19 years old in 2000"};var age_20_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012008","description":"The number of male persons age 20 years old in 2000"};var age_21_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012009","description":"The number of male persons age 21 years old in 2000"};var age_22_to_24_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012010","description":"The number of male persons ages 22 to 24 years old in 2000"};var age_25_to_29_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012011","description":"The number of male persons ages 25 to 29 years old in 2000"};var age_30_to_34_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012012","description":"The number of male persons ages 30 to 34 years old in 2000"};var age_35_to_39_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012013","description":"The number of male persons ages 35 to 39 years old in 2000"};var age_40_to_44_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012014","description":"The number of male persons ages 40 to 44 years old in 2000"};var age_45_to_49_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012015","description":"The number of male persons ages 45 to 49 years old in 2000"};var age_50_to_54_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012016","description":"The number of male persons ages 50 to 54 years old in 2000"};var age_55_to_59_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012017","description":"The number of male persons ages 55 to 59 years old in 2000"};var age_60_to_61_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012018","description":"The number of male persons ages 60 to 61 years old in 2000"};var age_62_to_64_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012019","description":"The number of male persons ages 62 to 64 years old in 2000"};var age_65_to_66_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012020","description":"The number of male persons ages 65 to 66 years old in 2000"};var age_67_to_69_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012021","description":"The number of male persons ages 67 to 69 years old in 2000"};var age_70_to_74_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012022","description":"The number of male persons ages 70 to 74 years old in 2000"};var age_75_to_79_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012023","description":"The number of male persons ages 75 to 79 years old in 2000"};var age_80_to_84_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012024","description":"The number of male persons ages 80 to 84 years old in 2000"};var age_under_5_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012027","description":"The number of female persons ages under 5 years old in 2000"};var age_5_to_9_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012028","description":"The number of female persons ages 5 to 9 years old in 2000"};var age_10_to_14_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012029","description":"The number of female persons ages 10 to 14 years old in 2000"};var age_15_to_17_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012030","description":"The number of female persons ages 15 to 17 years old in 2000"};var age_18_to_19_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012031","description":"The number of female persons ages 18 to 19 years old in 2000"};var age_20_female_2000={"api":{"sf1":[2000]},"variable":"P012032","description":"The number of female persons age 20 years old in 2000"};var age_21_female_2000={"api":{"sf1":[2000]},"variable":"P012033","description":"The number of female persons age 21 years old in 2000"};var age_22_to_24_female_2000={"api":{"sf1":[2000]},"variable":"P012034","description":"The number of female persons ages 22 to 24 years old in 2000"};var age_25_to_29_female_2000={"api":{"sf1":[2000]},"variable":"P012035","description":"The number of female persons ages 25 to 29 years old in 2000"};var age_30_to_34_female_2000={"api":{"sf1":[2000]},"variable":"P012036","description":"The number of female persons ages 30 to 34 years old in 2000"};var age_35_to_39_female_2000={"api":{"sf1":[2000]},"variable":"P012037","description":"The number of female persons ages 35 to 39 years old in 2000"};var age_40_to_44_female_2000={"api":{"sf1":[2000]},"variable":"P012038","description":"The number of female persons ages 40 to 44 years old in 2000"};var age_45_to_49_female_2000={"api":{"sf1":[2000]},"variable":"P012039","description":"The number of female persons ages 45 to 49 years old in 2000"};var age_50_to_54_female_2000={"api":{"sf1":[2000]},"variable":"P012040","description":"The number of female persons ages 50 to 54 years old in 2000"};var age_55_to_59_female_2000={"api":{"sf1":[2000]},"variable":"P012041","description":"The number of female persons ages 55 to 59 years old in 2000"};var age_60_to_61_female_2000={"api":{"sf1":[2000]},"variable":"P012042","description":"The number of female persons ages 60 to 61 years old in 2000"};var age_62_to_64_female_2000={"api":{"sf1":[2000]},"variable":"P012043","description":"The number of female persons ages 62 to 64 years old in 2000"};var age_65_to_66_female_2000={"api":{"sf1":[2000]},"variable":"P012044","description":"The number of female persons ages 65 to 66 years old in 2000"};var age_67_to_69_female_2000={"api":{"sf1":[2000]},"variable":"P012045","description":"The number of female persons ages 67 to 69 years old in 2000"};var age_70_to_74_female_2000={"api":{"sf1":[2000]},"variable":"P012046","description":"The number of female persons ages 70 to 74 years old in 2000"};var age_75_to_79_female_2000={"api":{"sf1":[2000]},"variable":"P012047","description":"The number of female persons ages 75 to 79 years old in 2000"};var age_80_to_84_female_2000={"api":{"sf1":[2000]},"variable":"P012048","description":"The number of female persons ages 80 to 84 years old in 2000"};var age_under_5_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A003","description":"The number of male persons ages under 5 years old in 2010"};var age_5_to_9_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A004","description":"The number of male persons ages 5 to 9 years old in 2010"};var age_10_to_14_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A005","description":"The number of male persons ages 10 to 14 years old in 2010"};var age_15_to_17_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A006","description":"The number of male persons ages 15 to 17 years old in 2010"};var age_18_to_19_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A007","description":"The number of male persons ages 18 to 19 years old in 2010"};var age_20_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A008","description":"The number of male persons age 20 years old in 2010"};var age_21_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A009","description":"The number of male persons age 21 years old in 2010"};var age_22_to_24_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A010","description":"The number of male persons ages 22 to 24 years old in 2010"};var age_25_to_29_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A011","description":"The number of male persons ages 25 to 29 years old in 2010"};var age_30_to_34_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A012","description":"The number of male persons ages 30 to 34 years old in 2010"};var age_35_to_39_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A013","description":"The number of male persons ages 35 to 39 years old in 2010"};var age_40_to_44_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A014","description":"The number of male persons ages 40 to 44 years old in 2010"};var age_45_to_49_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A015","description":"The number of male persons ages 45 to 49 years old in 2010"};var age_50_to_54_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A016","description":"The number of male persons ages 50 to 54 years old in 2010"};var age_55_to_59_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A017","description":"The number of male persons ages 55 to 59 years old in 2010"};var age_60_to_61_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A018","description":"The number of male persons ages 60 to 61 years old in 2010"};var age_62_to_64_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A019","description":"The number of male persons ages 62 to 64 years old in 2010"};var age_65_to_66_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A020","description":"The number of male persons ages 65 to 66 years old in 2010"};var age_67_to_69_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A021","description":"The number of male persons ages 67 to 69 years old in 2010"};var age_70_to_74_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A022","description":"The number of male persons ages 70 to 74 years old in 2010"};var age_75_to_79_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A023","description":"The number of male persons ages 75 to 79 years old in 2010"};var age_80_to_84_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A024","description":"The number of male persons ages 80 to 84 years old in 2010"};var age_under_5_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A027","description":"The number of female persons ages under 5 years old in 2010"};var age_5_to_9_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A028","description":"The number of female persons ages 5 to 9 years old in 2010"};var age_10_to_14_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A029","description":"The number of female persons ages 10 to 14 years old in 2010"};var age_15_to_17_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A030","description":"The number of female persons ages 15 to 17 years old in 2010"};var age_18_to_19_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A031","description":"The number of female persons ages 18 to 19 years old in 2010"};var age_20_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A032","description":"The number of female persons age 20 years old in 2010"};var age_21_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A033","description":"The number of female persons age 21 years old in 2010"};var age_22_to_24_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A034","description":"The number of female persons ages 22 to 24 years old in 2010"};var age_25_to_29_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A035","description":"The number of female persons ages 25 to 29 years old in 2010"};var age_30_to_34_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A036","description":"The number of female persons ages 30 to 34 years old in 2010"};var age_35_to_39_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A037","description":"The number of female persons ages 35 to 39 years old in 2010"};var age_40_to_44_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A038","description":"The number of female persons ages 40 to 44 years old in 2010"};var age_45_to_49_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A039","description":"The number of female persons ages 45 to 49 years old in 2010"};var age_50_to_54_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A040","description":"The number of female persons ages 50 to 54 years old in 2010"};var age_55_to_59_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A041","description":"The number of female persons ages 55 to 59 years old in 2010"};var age_60_to_61_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A042","description":"The number of female persons ages 60 to 61 years old in 2010"};var age_62_to_64_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A043","description":"The number of female persons ages 62 to 64 years old in 2010"};var age_65_to_66_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A044","description":"The number of female persons ages 65 to 66 years old in 2010"};var age_67_to_69_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A045","description":"The number of female persons ages 67 to 69 years old in 2010"};var age_70_to_74_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A046","description":"The number of female persons ages 70 to 74 years old in 2010"};var age_75_to_79_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A047","description":"The number of female persons ages 75 to 79 years old in 2010"};var age_80_to_84_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A048","description":"The number of female persons ages 80 to 84 years old in 2010"};var race_hispanic_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0080001","description":"Population (Hispanic) in 1990"};var race_asian_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0060004","description":"Population (Asian) in 1990"};var race_other_1990={"api":{"sf1":[1990,2010]},"variable":"P0060005","description":"Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 1990"};var race_hispanic_no_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090001","description":"Population (Hispanic No) in 1990"};var race_hispanic_mexican_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090002","description":"Population (Hispanic Mexican) in 1990"};var race_hispanic_puerto_rican_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090003","description":"Population (Hispanic Puerto Rican) in 1990"};var race_hispanic_cuban_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090004","description":"Population (Hispanic Cuban) in 1990"};var race_hispanic_other_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090005","description":"Population (Hispanic Other) in 1990"};var race_white_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0070001","description":"Population (White) in 1990"};var race_black_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0070002","description":"Population (Black) in 1990"};var race_american_indian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070003","description":"Population (American Indian) in 1990"};var race_eskimo_1990={"api":{"sf1":[1990,2010]},"variable":"P0070004","description":"Population (Eskimo) in 1990"};var race_aleutian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070005","description":"Population (Aleutian) in 1990"};var race_chinese_1990={"api":{"sf1":[1990,2010]},"variable":"P0070006","description":"Population (Chinese) in 1990"};var race_filipino_1990={"api":{"sf1":[1990,2010]},"variable":"P0070007","description":"Population (Filipino) in 1990"};var race_japanese_1990={"api":{"sf1":[1990,2010]},"variable":"P0070008","description":"Population (Japanese) in 1990"};var race_asian_indian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070009","description":"Population (Asian Indian) in 1990"};var race_korean_1990={"api":{"sf1":[1990,2010]},"variable":"P0070010","description":"Population (Korean) in 1990"};var race_vietnamese_1990={"api":{"sf1":[1990,2010]},"variable":"P0070011","description":"Population (Vietnamese) in 1990"};var race_cambodian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070012","description":"Population (Cambodian) in 1990"};var race_hmong_1990={"api":{"sf1":[1990,2010]},"variable":"P0070013","description":"Population (Hmong) in 1990"};var race_laotian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070014","description":"Population (Laotian) in 1990"};var race_thai_1990={"api":{"sf1":[1990,2010]},"variable":"P0070015","description":"Population (Thai) in 1990"};var race_other_asian_1990={"api":{"sf1":[1990]},"variable":"P0070016","description":"Population (Other Asian) in 1990"};var race_hawaiian_1990={"api":{"sf1":[1990]},"variable":"P0070017","description":"Population (Hawaiian) in 1990"};var race_samoan_1990={"api":{"sf1":[1990]},"variable":"P0070018","description":"Population (Samoan) in 1990"};var race_tongan_1990={"api":{"sf1":[1990]},"variable":"P0070019","description":"Population (Tongan) in 1990"};var race_other_polynesian_1990={"api":{"sf1":[1990]},"variable":"P0070020","description":"Population (Tongan) in 1990"};var race_guamanian_1990={"api":{"sf1":[1990]},"variable":"P0070021","description":"Population (Guamanian) in 1990"};var race_other_micronesian_1990={"api":{"sf1":[1990]},"variable":"P0070022","description":"Population (Micronesian) in 1990"};var race_melanesian_1990={"api":{"sf1":[1990]},"variable":"P0070023","description":"Population (Melanesian) in 1990"};var race_pacific_islander_1990={"api":{"sf1":[1990]},"variable":"P0070024","description":"Population (Pacific Islander) in 1990"};var race_other_race_1990={"api":{"sf1":[1990]},"variable":"P0070025","description":"Population (Other Race) in 1990"};var race_white_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012A001","description":"Population (White) in 2000"};var race_black_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012B001","description":"Population (Black) in 2000"};var race_hispanic_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012H001","description":"Population (Hispanic) in 2000"};var race_asian_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012D001","description":"Population (Asian) in 2000"};var race_other_2000={"api":{"sf1":[2000]},"variable":"P003008","description":"Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2000"};var race_hispanic_no_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011002","description":"Population (Hispanic No) in 2000"};var race_hispanic_latino_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011003","description":"Population (Hispanic Latino) in 2000"};var race_hispanic_mexican_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011004","description":"Population (Hispanic Mexican) in 2000"};var race_hispanic_puerto_rican_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011005","description":"Population (Hispanic Puerto Rican) in 2000"};var race_hispanic_cuban_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011006","description":"Population (Hispanic Cuban) in 2000"};var race_hispanic_dominican_republic_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011007","description":"Population (Hispanic Dominican Republic) in 2000"};var race_hispanic_central_american_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011008","description":"Population (Hispanic Central American) in 2000"};var race_hispanic_costa_rican_2000={"api":{"sf1":[2000]},"variable":"PCT011009","description":"Population (Hispanic Costa Rican) in 2000"};var race_hispanic_guatemalan_2000={"api":{"sf1":[2000]},"variable":"PCT011010","description":"Population (Hispanic Guatemalan) in 2000"};var race_hispanic_honduran_2000={"api":{"sf1":[2000]},"variable":"PCT011011","description":"Population (Hispanic Honduran) in 2000"};var race_hispanic_nicaraguan_2000={"api":{"sf1":[2000]},"variable":"PCT011012","description":"Population (Hispanic Nicaraguan) in 2000"};var race_hispanic_panamanian_2000={"api":{"sf1":[2000]},"variable":"PCT011013","description":"Population (Hispanic Panamanian) in 2000"};var race_hispanic_salvadoran_2000={"api":{"sf1":[2000]},"variable":"PCT011014","description":"Population (Hispanic Salvadoran) in 2000"};var race_hispanic_other_central_american_2000={"api":{"sf1":[2000]},"variable":"PCT011015","description":"Population (Hispanic other Central American) in 2000"};var race_south_american_2000={"api":{"sf1":[2000]},"variable":"PCT011016","description":"Population (South American) in 2000"};var rac_south_americane_argentinean_2000={"api":{"sf1":[2000]},"variable":"PCT011017","description":"Population (Agentinean) in 2000"};var race_south_american_bolivian_2000={"api":{"sf1":[2000]},"variable":"PCT011018","description":"Population (Bolivian) in 2000"};var race_south_american_chilean_2000={"api":{"sf1":[2000]},"variable":"PCT011019","description":"Population (Chilean) in 2000"};var race_colombian_2000={"api":{"sf1":[2000]},"variable":"PCT011020","description":"Population (Colombian) in 2000"};var race_south_american_ecuadorian_2000={"api":{"sf1":[2000]},"variable":"PCT011021","description":"Population (Ecuadorian) in 2000"};var race_south_american_paraguayan_2000={"api":{"sf1":[2000]},"variable":"PCT011022","description":"Population (Paraguayan) in 2000"};var race_south_american_peruvian_2000={"api":{"sf1":[2000]},"variable":"PCT011023","description":"Population (Peruvian) in 2000"};var race_south_american_uruguayan_2000={"api":{"sf1":[2000]},"variable":"PCT011024","description":"Population (Uruguayan) in 2000"};var race_south_american_venezuelan_2000={"api":{"sf1":[2000]},"variable":"PCT011025","description":"Population (Venezuelan) in 2000"};var race_other_south_american_2000={"api":{"sf1":[2000]},"variable":"PCT011026","description":"Population (other South American) in 2000"};var race_hispanic_other_latinos_2000={"api":{"sf1":[2000]},"variable":"PCT011027","description":"Population (Hispanic other Latinos) in 2000"};var race_spaniard_2000={"api":{"sf1":[2000]},"variable":"PCT011028","description":"Population (Spaniard) in 2000"};var race_spanish_2000={"api":{"sf1":[2000]},"variable":"PCT011029","description":"Population (Spanish) in 2000"};var race_spanish_american_2000={"api":{"sf1":[2000]},"variable":"PCT011030","description":"Population (Spanish American) in 2000"};var race_hispanic_other_2000={"api":{"sf1":[2000]},"variable":"PCT011031","description":"Population (Hispanic Other) in 2000"};var race_american_indian_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012C001","description":"Population (American Indian) in 2000"};var race_eskimo_2000={"api":{"sf1":[2000]},"variable":"PCT001042","description":"Population (Eskimo) in 2000"};var race_aleutian_2000={"api":{"sf1":[2000]},"variable":"PCT001043","description":"Population (Aleutian) in 2000"};var race_asian_indian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005002","description":"Population (Asian Indian) in 2000"};var race_asian_bengladeshi_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005003","description":"Population (Bengladeshi) in 2000"};var race_asian_cambodian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005004","description":"Population (Cambodian) in 2000"};var race_asian_chinese_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005005","description":"Population (Chinese except Taiwanese) in 2000"};var race_asian_filipino_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005006","description":"Population (Filipino) in 2000"};var race_asian_hmong_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005007","description":"Population (Hmong) in 2000"};var race_asian_indonesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005008","description":"Population (Indonesian) in 2000"};var race_asian_japanese_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005009","description":"Population (Japanese) in 2000"};var race_asian_korean_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005010","description":"Population (Korean) in 2000"};var race_asian_laotian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005011","description":"Population (Laotian) in 2000"};var race_asian_malaysian_2000={"api":{"sf1":[2000]},"variable":"PCT005012","description":"Population (Malaysian) in 2000"};var race_asian_pakistani_2000={"api":{"sf1":[2000]},"variable":"PCT005013","description":"Population (Pakastani) in 2000"};var race_asian_sri_lankan_2000={"api":{"sf1":[2000]},"variable":"PCT005014","description":"Population (Sri Lankan) in 2000"};var race_asian_taiwanese_2000={"api":{"sf1":[2000]},"variable":"PCT005015","description":"Population (Taiwanese) in 2000"};var race_asian_thai_2000={"api":{"sf1":[2000]},"variable":"PCT005016","description":"Population (Thai) in 2000"};var race_asian_vietnamese_2000={"api":{"sf1":[2000]},"variable":"PCT005017","description":"Population (Vietnamese) in 2000"};var race_other_asian_2000={"api":{"sf1":[2000]},"variable":"PCT005018","description":"Population (Other Asian) in 2000"};var race_other_asian_not_specified_2000={"api":{"sf1":[2000]},"variable":"PCT005019","description":"Population (Other Asian, not specified) in 2000"};var race_pacific_islander_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008001","description":"Population (Pacific Islander) in 2000"};var race_pacific_islander_polynesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008002","description":"Population (Other Asian not specified) in 2000"};var race_pacific_islander_polynesian_hawaiian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008003","description":"Population (Native Hawaiian) in 2000"};var race_pacific_islander_polynesian_samoan_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008004","description":"Population (Samoan) in 2000"};var race_pacific_islander_polynesian_tongan_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008005","description":"Population (Tongan) in 2000"};var race_pacific_islander_polynesian_other_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008006","description":"Population (other Polynesian) in 2000"};var race_pacific_islander_micronesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008007","description":"Population (Micronesian) in 2000"};var race_pacific_islander_micronesian_guam__chamorro_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008008","description":"Population (Micronesian - Guam or Chamorro) in 2000"};var race_pacific_islander_micronesian_other_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008009","description":"Population (other Micronesian) in 2000"};var race_pacific_islander_melanesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008010","description":"Population (Melanesian) in 2000"};var race_pacific_islander_melanesian_fijian_2000={"api":{"sf1":[2000]},"variable":"PCT008011","description":"Population (Melanesian - Fijian) in 2000"};var race_pacific_islander_melanesian_other_2000={"api":{"sf1":[2000]},"variable":"PCT008012","description":"Population (other Melanesian) in 2000"};var race_pacific_islander_pacific_islander_other_2000={"api":{"sf1":[2000]},"variable":"PCT008013","description":"Population (other Pacific Islander) in 2000"};var race_pacific_islander_pacific_islander_not_specified_2000={"api":{"sf1":[2000]},"variable":"PCT008014","description":"Population (Pacific Islander, not specified) in 2000"};var race_white_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012A001","description":"Population (White) in 2010"};var race_black_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012B001","description":"Population (Black) in 2010"};var race_hispanic_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012H001","description":"Population (Hispanic) in 2010"};var race_asian_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012D001","description":"Population (Asian) in 2010"};var race_other_2010={"api":{"sf1":[2010]},"variable":"P0030007","description":"Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2010"};var race_hispanic_no_2010={"api":{"sf1":[2010]},"variable":"PCT0110002","description":"Population (Hispanic No) in 2010"};var race_hispanic_latino_2010={"api":{"sf1":[2010]},"variable":"PCT0110003","description":"Population (Hispanic Latino) in 2010"};var race_hispanic_mexican_2010={"api":{"sf1":[2010]},"variable":"PCT0110004","description":"Population (Hispanic Mexican) in 2010"};var race_hispanic_puerto_rican_2010={"api":{"sf1":[2010]},"variable":"PCT0110005","description":"Population (Hispanic Puerto Rican) in 2010"};var race_hispanic_cuban_2010={"api":{"sf1":[2010]},"variable":"PCT0110006","description":"Population (Hispanic Cuban) in 2010"};var race_hispanic_dominican_republic_2010={"api":{"sf1":[2010]},"variable":"PCT0110007","description":"Population (Hispanic Dominican Republic) in 2010"};var race_hispanic_central_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110008","description":"Population (Hispanic Central American) in 2010"};var race_hispanic_costa_rican_2010={"api":{"sf1":[2010]},"variable":"PCT0110009","description":"Population (Hispanic Costa Rican) in 2010"};var race_hispanic_guatemalan_2010={"api":{"sf1":[2010]},"variable":"PCT0110010","description":"Population (Hispanic Guatemalan) in 2010"};var race_hispanic_honduran_2010={"api":{"sf1":[2010]},"variable":"PCT0110011","description":"Population (Hispanic Honduran) in 2010"};var race_hispanic_nicaraguan_2010={"api":{"sf1":[2010]},"variable":"PCT0110012","description":"Population (Hispanic Nicaraguan) in 2010"};var race_hispanic_panamanian_2010={"api":{"sf1":[2010]},"variable":"PCT0110013","description":"Population (Hispanic Panamanian) in 2010"};var race_hispanic_salvadoran_2010={"api":{"sf1":[2010]},"variable":"PCT0110014","description":"Population (Hispanic Salvadoran) in 2010"};var race_hispanic_other_central_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110015","description":"Population (Hispanic other Central American) in 2010"};var race_south_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110016","description":"Population (South American) in 2010"};var race_south_american_argentinean_2010={"api":{"sf1":[2010]},"variable":"PCT0110017","description":"Population (Agentinean) in 2010"};var race_south_american_bolivian_2010={"api":{"sf1":[2010]},"variable":"PCT0110018","description":"Population (Bolivian) in 2010"};var race_south_american_chilean_2010={"api":{"sf1":[2010]},"variable":"PCT0110019","description":"Population (Chilean) in 2010"};var race_south_american_colombian_2010={"api":{"sf1":[2010]},"variable":"PCT0110020","description":"Population (Colombian) in 2010"};var race_south_american_ecuadorian_2010={"api":{"sf1":[2010]},"variable":"PCT0110021","description":"Population (Ecuadorian) in 2010"};var race_south_american_paraguayan_2010={"api":{"sf1":[2010]},"variable":"PCT0110022","description":"Population (Paraguayan) in 2010"};var race_south_american_peruvian_2010={"api":{"sf1":[2010]},"variable":"PCT0110023","description":"Population (Peruvian) in 2010"};var race_south_american_uruguayan_2010={"api":{"sf1":[2010]},"variable":"PCT0110024","description":"Population (Uruguayan) in 2010"};var race_south_american_venezuelan_2010={"api":{"sf1":[2010]},"variable":"PCT0110025","description":"Population (Venezuelan) in 2010"};var race_other_south_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110026","description":"Population (other South American) in 2010"};var race_hispanic_other_latinos_2010={"api":{"sf1":[2010]},"variable":"PCT0110027","description":"Population (Hispanic other Latinos) in 2010"};var race_spaniard_2010={"api":{"sf1":[2010]},"variable":"PCT0110028","description":"Population (Spaniard) in 2010"};var race_spanish_2010={"api":{"sf1":[2010]},"variable":"PCT0110029","description":"Population (Spanish) in 2010"};var race_spanish_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110030","description":"Population (Spanish American) in 2010"};var race_hispanic_other_2010={"api":{"sf1":[2010]},"variable":"PCT0110031","description":"Population (Hispanic Other) in 2010"};var race_american_indian_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012C001","description":"Population (American Indian) in 2010"};var race_eskimo_2010={"api":{"sf1":[2010]},"variable":"PCT0040003","description":"Population (Alaska Native) in 2010"};var race_aleutian_2010={"api":{"sf1":[2010]},"variable":"PCT0010048","description":"Population (Aleutian) in 2010"};var race_asian_indian_2010={"api":{"sf1":[2010]},"variable":"PCT0050002","description":"Population (Asian Indian) in 2010"};var race_asian_bengladeshi_2010={"api":{"sf1":[2010]},"variable":"PCT0050003","description":"Population (Bengladeshi) in 2010"};var race_asian_cambodian_2010={"api":{"sf1":[2010]},"variable":"PCT0050004","description":"Population (Cambodian) in 2010"};var race_asian_chinese_2010={"api":{"sf1":[2010]},"variable":"PCT0050005","description":"Population (Chinese except Taiwanese) in 2010"};var race_asian_filipino_2010={"api":{"sf1":[2010]},"variable":"PCT0050006","description":"Population (Filipino) in 2010"};var race_asian_hmong_2010={"api":{"sf1":[2010]},"variable":"PCT0050007","description":"Population (Hmong) in 2010"};var race_asian_indonesian_2010={"api":{"sf1":[2010]},"variable":"PCT0050008","description":"Population (Indonesian) in 2010"};var race_asian_japanese_2010={"api":{"sf1":[2010]},"variable":"PCT0050009","description":"Population (Japanese) in 2010"};var race_asian_korean_2010={"api":{"sf1":[2010]},"variable":"PCT0050010","description":"Population (Korean) in 2010"};var race_asian_laotian_2010={"api":{"sf1":[2010]},"variable":"PCT0050011","description":"Population (Laotian) in 2010"};var race_asian_malaysian_2010={"api":{"sf1":[2010]},"variable":"PCT0050012","description":"Population (Malaysian) in 2010"};var race_asian_pakistani_2010={"api":{"sf1":[2010]},"variable":"PCT0050013","description":"Population (Pakastani) in 2010"};var race_asian_sri_lankan_2010={"api":{"sf1":[2010]},"variable":"PCT0050014","description":"Population (Sri Lankan) in 2010"};var race_asian_taiwanese_2010={"api":{"sf1":[2010]},"variable":"PCT0050015","description":"Population (Taiwanese) in 2010"};var race_asian_thai_2010={"api":{"sf1":[2010]},"variable":"PCT0050016","description":"Population (Thai) in 2010"};var race_asian_vietnamese_2010={"api":{"sf1":[2010]},"variable":"PCT0050017","description":"Population (Vietnamese) in 2010"};var race_other_asian_2010={"api":{"sf1":[2010]},"variable":"PCT0050018","description":"Population (Other Asian) in 2010"};var race_other_asian_not_specified_2010={"api":{"sf1":[2000]},"variable":"PCT005019","description":"Population (Other Asian, not specified) in 2010"};var race_pacific_islander_2010={"api":{"sf1":[2010]},"variable":"PCT0080001","description":"Population (Pacific Islander) in 2010"};var race_pacific_islander_polynesian_2010={"api":{"sf1":[2010]},"variable":"PCT0080002","description":"Population (Other Asian not specified) in 2010"};var race_pacific_islander_polynesian_hawaiian_2010={"api":{"sf1":[2010]},"variable":"PCT0080003","description":"Population (Native Hawaiian) in 2010"};var race_pacific_islander_polynesian_samoan_2010={"api":{"sf1":[2010]},"variable":"PCT0080004","description":"Population (Samoan) in 2010"};var race_pacific_islander_polynesian_tongan_2010={"api":{"sf1":[2010]},"variable":"PCT0080005","description":"Population (Tongan) in 2010"};var race_pacific_islander_polynesian_other_2010={"api":{"sf1":[2010]},"variable":"PCT0080006","description":"Population (other Polynesian) in 2010"};var race_pacific_islander_micronesian_2010={"api":{"sf1":[2010]},"variable":"PCT0080007","description":"Population (Micronesian) in 2010"};var race_pacific_islander_micronesian_guam_chamorro_2010={"api":{"sf1":[2010]},"variable":"PCT0080008","description":"Population (Micronesian - Guam or Chamorro) in 2010"};var race_pacific_islander_micronesian_marshallese_2010={"api":{"sf1":[2010]},"variable":"PCT0080009","description":"Population (Micronesian - Marshallese) in 2010"};var race_pacific_islander_micronesian_other_2010={"api":{"sf1":[2010]},"variable":"PCT0080010","description":"Population (Micronesian - other) in 2010"};var race_pacific_islander_melanesian_2010={"api":{"sf1":[2010]},"variable":"PCT0080011","description":"Population (Melanesian) in 2010"};var race_pacific_islander_melanesian_fijian_2010={"api":{"sf1":[2010]},"variable":"PCT0080012","description":"Population (Melanesian - Fijian) in 2010"};var race_pacific_islander_melanesian_other_2010={"api":{"sf1":[2010]},"variable":"PCT0080013","description":"Population (other Melanesian) in 2010"};var race_pacific_islander_pacific_islander_not_specified_2010={"api":{"sf1":[2010]},"variable":"PCT0080014","description":"Population (Pacific Islander, not specified) in 2010"};var males_never_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140001","description":"Population of males who never married in 1990"};var males_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140002","description":"Population of males who are married, but not separated in 1990"};var males_separated_1990={"api":{"sf1":[1990,2010]},"variable":"P0140003","description":"Population of males who are separated in 1990"};var males_widowed_1990={"api":{"sf1":[1990,2010]},"variable":"P0140004","description":"Population of males who are widowed in 1990"};var males_divorced_1990={"api":{"sf1":[1990,2010]},"variable":"P0140005","description":"Population of males who are divorced in 1990"};var females_never_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140006","description":"Population of females who never married in 1990"};var females_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140007","description":"Population of females who are married, but not separated in 1990"};var females_separated_1990={"api":{"sf1":[1990,2010]},"variable":"P0140008","description":"Population of females who are separated in 1990"};var females_widowed_1990={"api":{"sf1":[1990,2010]},"variable":"P0140009","description":"Population of females who are widowed in 1990"};var females_divorced_1990={"api":{"sf1":[1990,2010]},"variable":"P0140010","description":"Population of females who are divorced in 1990"};var college_dorms_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280006","description":"Population living in college dorms in 1990"};var military_quarters_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280007","description":"Population of living in military quarters in 1990"};var college_dorms_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037007","description":"Population living in college dorms in 2000"};var military_quarters_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037007","description":"Population of living in military quarters in 2000"};var college_dorms_2010={"api":{"sf1":[2010]},"variable":"PCO0080001","description":"Population living in college dorms in 2010"};var military_quarters_2010={"api":{"sf1":[2010]},"variable":"PCO0090001","description":"Population of living in military quarters in 2010"};var correctional_facilities_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280001","description":"Population living in correctional facilities in 1990"};var nursing_homes_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280002","description":"Population living in nursing homes in 1990"};var mental_health_facilities_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280003","description":"Population living in mental health facilities in 1990"};var juvenile_detention_facilities_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280004","description":"Population living in juvenile detention facilities in 1990"};var correctional_facilities_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037003","description":"Population living in correctional facilities in 2000"};var nursing_homes_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037004","description":"Population living in nursing homes in 2000"};var mental_health_facilities_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT016041","description":"Population living in mental health facilities in 2000"};var juvenile_detention_facilities_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT016025","description":"Population living in juvenile detention facilities in 2000"};var correctional_facilities_2010={"api":{"sf1":[2010],"sf3":[1990]},"variable":"P0420003","description":"Population living in correctional facilities in 2010"};var nursing_homes_2010={"api":{"sf1":[2010],"sf3":[1990]},"variable":"P0420005","description":"Population living in nursing homes in 2010"};var mental_health_facilities_2010={"api":{"sf1":[2010]},"variable":"PCT0200016","description":"Population living in mental health facilities in 2010"};var juvenile_detention_facilities_2010={"api":{"sf1":[2010],"sf3":[1990]},"variable":"P0420004","description":"Population living in juvenile detention facilities in 2010"};var households_family_2_person_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0270001","description":"2 person family households in 1990"};var households_family_3_person_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0270002","description":"3 person family households in 1990"};var households_family_4_person_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0270003","description":"4 person family households in 1990"};var households_family_5_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270004","description":"5 person family households in 1990"};var households_6_family_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270005","description":"6 person family households in 1990"};var households_1_nonfamily_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270007","description":"1 person non-family households in 1990"};var households_nonfamily_2_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270008","description":"1 person non-family households in 1990"};var households_nonfamily_3_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270009","description":"1 person non-family households in 1990"};var households_nonfamily_4_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270010","description":"4 person non-family households in 1990"};var households_nonfamily_5_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270011","description":"5 person non-family households in 1990"};var households_nonfamily_6_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270012","description":"6 person non-family households in 1990"};var income={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B19013_001E","description":"Median household income in the past 12 months (in 2013 inflation-adjusted dollars)"};var income_per_capita={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B19301_001E","description":"Per capita income in the past 12 months (in 2013 inflation-adjusted dollars)"};var employment_labor_force={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_002E","description":"Number of persons, age 16 or older, in the labor force"};var employment_not_labor_force={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_007E","description":"Number of persons, age 16 or older, not in the labor force"};var employment_civilian_labor_force={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_003E","description":"Number of persons, age 16 or older, in the civilian labor force"};var employment_employed={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_004E","description":"Number of employed, age 16 or older, in the civilian labor force"};var employment_unemployed={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_005E","description":"Number of unemployed, age 16 or older, in the civilian labor force"};var employment_armed_forces={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_006E","description":"Number of persons, age 16 or older, in the Armed Forces"};var employment_male_management_business_science_and_arts_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_003E","description":"Number of employed male 'Management, business, science, and arts occupations:' for the civilian population age 16 and over"};var employment_male_management_business_and_financial_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_004E","description":"Number of employed male 'Management, business, and financial occupations:' for the civilian population age 16 and over"};var employment_male_management_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_005E","description":"Number of employed male 'Management occupations' for the civilian population age 16 and over"};var employment_male_business_and_financial_operations_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_006E","description":"Number of employed male 'Business and financial operations occupations' for the civilian population age 16 and over"};var employment_male_computer_engineering_and_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_007E","description":"Number of employed male 'Computer, engineering, and science occupations:' for the civilian population age 16 and over"};var employment_male_computer_and_mathematical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_008E","description":"Number of employed male 'Computer and mathematical occupations' for the civilian population age 16 and over"};var employment_male_architecture_and_engineering_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_009E","description":"Number of employed male 'Architecture and engineering occupations' for the civilian population age 16 and over"};var employment_male_life_physical_and_social_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_010E","description":"Number of employed male 'Life, physical, and social science occupations' for the civilian population age 16 and over"};var employment_male_education_legal_community_service_arts_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_011E","description":"Number of employed male 'Education, legal, community service, arts, and media occupations:' for the civilian population age 16 and over"};var employment_male_community_and_social_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_012E","description":"Number of employed male 'Community and social service occupations' for the civilian population age 16 and over"};var employment_male_legal_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_013E","description":"Number of employed male 'Legal occupations' for the civilian population age 16 and over"};var employment_male_education_training_and_library_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_014E","description":"Number of employed male 'Education, training, and library occupations' for the civilian population age 16 and over"};var employment_male_arts_design_entertainment_sports_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_015E","description":"Number of employed male 'Arts, design, entertainment, sports, and media occupations' for the civilian population age 16 and over"};var employment_male_healthcare_practitioners_and_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_016E","description":"Number of employed male 'Healthcare practitioners and technical occupations:' for the civilian population age 16 and over"};var employment_male_health_diagnosing_and_treating_practitioners_and_other_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_017E","description":"Number of employed male 'Health diagnosing and treating practitioners and other technical occupations' for the civilian population age 16 and over"};var employment_male_health_technologists_and_technicians={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_018E","description":"Number of employed male 'Health technologists and technicians' for the civilian population age 16 and over"};var employment_male_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_019E","description":"Number of employed male 'Service occupations:' for the civilian population age 16 and over"};var employment_male_healthcare_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_020E","description":"Number of employed male 'Healthcare support occupations' for the civilian population age 16 and over"};var employment_male_protective_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_021E","description":"Number of employed male 'Protective service occupations:' for the civilian population age 16 and over"};var employment_male_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_022E","description":"Number of employed male 'Fire fighting and prevention, and other protective service workers including supervisors' for the civilian population age 16 and over"};var employment_male_law_enforcement_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_023E","description":"Number of employed male 'Law enforcement workers including supervisors' for the civilian population age 16 and over"};var employment_male_food_preparation_and_serving_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_024E","description":"Number of employed male 'Food preparation and serving related occupations' for the civilian population age 16 and over"};var employment_male_building_and_grounds_cleaning_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_025E","description":"Number of employed male 'Building and grounds cleaning and maintenance occupations' for the civilian population age 16 and over"};var employment_male_personal_care_and_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_026E","description":"Number of employed male 'Personal care and service occupations' for the civilian population age 16 and over"};var employment_male_sales_and_office_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_027E","description":"Number of employed male 'Sales and office occupations:' for the civilian population age 16 and over"};var employment_male_sales_and_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_028E","description":"Number of employed male 'Sales and related occupations' for the civilian population age 16 and over"};var employment_male_office_and_administrative_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_029E","description":"Number of employed male 'Office and administrative support occupations' for the civilian population age 16 and over"};var employment_male_natural_resources_construction_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_030E","description":"Number of employed male 'Natural resources, construction, and maintenance occupations:' for the civilian population age 16 and over"};var employment_male_farming_fishing_and_forestry_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_031E","description":"Number of employed male 'Farming, fishing, and forestry occupations' for the civilian population age 16 and over"};var employment_male_construction_and_extraction_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_032E","description":"Number of employed male 'Construction and extraction occupations' for the civilian population age 16 and over"};var employment_male_installation_maintenance_and_repair_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_033E","description":"Number of employed male 'Installation, maintenance, and repair occupations' for the civilian population age 16 and over"};var employment_male_production_transportation_and_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_034E","description":"Number of employed male 'Production, transportation, and material moving occupations:' for the civilian population age 16 and over"};var employment_male_production_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_035E","description":"Number of employed male 'Production occupations' for the civilian population age 16 and over"};var employment_male_transportation_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_036E","description":"Number of employed male 'Transportation occupations' for the civilian population age 16 and over"};var employment_male_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_037E","description":"Number of employed male 'Material moving occupations' for the civilian population age 16 and over"};var employment_female_management_business_science_and_arts_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_039E","description":"Number of employed female 'Management, business, science, and arts occupations:' for the civilian population age 16 and over"};var employment_female_management_business_and_financial_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_040E","description":"Number of employed female 'Management, business, and financial occupations:' for the civilian population age 16 and over"};var employment_female_management_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_041E","description":"Number of employed female 'Management occupations' for the civilian population age 16 and over"};var employment_female_business_and_financial_operations_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_042E","description":"Number of employed female 'Business and financial operations occupations' for the civilian population age 16 and over"};var employment_female_computer_engineering_and_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_043E","description":"Number of employed female 'Computer, engineering, and science occupations:' for the civilian population age 16 and over"};var employment_female_computer_and_mathematical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_044E","description":"Number of employed female 'Computer and mathematical occupations' for the civilian population age 16 and over"};var employment_female_architecture_and_engineering_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_045E","description":"Number of employed female 'Architecture and engineering occupations' for the civilian population age 16 and over"};var employment_female_life_physical_and_social_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_046E","description":"Number of employed female 'Life, physical, and social science occupations' for the civilian population age 16 and over"};var employment_female_education_legal_community_service_arts_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_047E","description":"Number of employed female 'Education, legal, community service, arts, and media occupations:' for the civilian population age 16 and over"};var employment_female_community_and_social_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_048E","description":"Number of employed female 'Community and social service occupations' for the civilian population age 16 and over"};var employment_female_legal_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_049E","description":"Number of employed female 'Legal occupations' for the civilian population age 16 and over"};var employment_female_education_training_and_library_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_050E","description":"Number of employed female 'Education, training, and library occupations' for the civilian population age 16 and over"};var employment_female_arts_design_entertainment_sports_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_051E","description":"Number of employed female 'Arts, design, entertainment, sports, and media occupations' for the civilian population age 16 and over"};var employment_female_healthcare_practitioners_and_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_052E","description":"Number of employed female 'Healthcare practitioners and technical occupations:' for the civilian population age 16 and over"};var employment_female_health_diagnosing_and_treating_practitioners_and_other_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_053E","description":"Number of employed female 'Health diagnosing and treating practitioners and other technical occupations' for the civilian population age 16 and over"};var employment_female_health_technologists_and_technicians={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_054E","description":"Number of employed female 'Health technologists and technicians' for the civilian population age 16 and over"};var employment_female_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_055E","description":"Number of employed female 'Service occupations:' for the civilian population age 16 and over"};var employment_female_healthcare_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_056E","description":"Number of employed female 'Healthcare support occupations' for the civilian population age 16 and over"};var employment_female_protective_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_057E","description":"Number of employed female 'Protective service occupations:' for the civilian population age 16 and over"};var employment_female_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_058E","description":"Number of employed female 'Fire fighting and prevention, and other protective service workers including supervisors' for the civilian population age 16 and over"};var employment_female_law_enforcement_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_059E","description":"Number of employed female 'Law enforcement workers including supervisors' for the civilian population age 16 and over"};var employment_female_food_preparation_and_serving_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_060E","description":"Number of employed female 'Food preparation and serving related occupations' for the civilian population age 16 and over"};var employment_female_building_and_grounds_cleaning_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_061E","description":"Number of employed female 'Building and grounds cleaning and maintenance occupations' for the civilian population age 16 and over"};var employment_female_personal_care_and_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_062E","description":"Number of employed female 'Personal care and service occupations' for the civilian population age 16 and over"};var employment_female_sales_and_office_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_063E","description":"Number of employed female 'Sales and office occupations:' for the civilian population age 16 and over"};var employment_female_sales_and_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_064E","description":"Number of employed female 'Sales and related occupations' for the civilian population age 16 and over"};var employment_female_office_and_administrative_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_065E","description":"Number of employed female 'Office and administrative support occupations' for the civilian population age 16 and over"};var employment_female_natural_resources_construction_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_066E","description":"Number of employed female 'Natural resources, construction, and maintenance occupations:' for the civilian population age 16 and over"};var employment_female_farming_fishing_and_forestry_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_067E","description":"Number of employed female 'Farming, fishing, and forestry occupations' for the civilian population age 16 and over"};var employment_female_construction_and_extraction_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_068E","description":"Number of employed female 'Construction and extraction occupations' for the civilian population age 16 and over"};var employment_female_installation_maintenance_and_repair_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_069E","description":"Number of employed female 'Installation, maintenance, and repair occupations' for the civilian population age 16 and over"};var employment_female_production_transportation_and_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_070E","description":"Number of employed female 'Production, transportation, and material moving occupations:' for the civilian population age 16 and over"};var employment_female_production_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_071E","description":"Number of employed female 'Production occupations' for the civilian population age 16 and over"};var employment_female_transportation_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_072E","description":"Number of employed female 'Transportation occupations' for the civilian population age 16 and over"};var employment_female_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_073E","description":"Number of employed female 'Material moving occupations' for the civilian population age 16 and over"};var poverty={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001_002E","description":"Number of persons whose income in the past 12 months is below the poverty level"};var poverty_male={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001_003E","description":"Number of male persons whose income in the past 12 months is below the poverty level"};var poverty_female={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001_017E","description":"Number of female persons whose income in the past 12 months is below the poverty level"};var poverty_white_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001A_002E","description":"Number of persons whose income in the past 12 months is below the poverty level (White Alone)"};var poverty_black_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001B_002E","description":"Number of persons whose income in the past 12 months is below the poverty level (Black or African American Alone)"};var population_american_indian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_004E","description":"Population (American Indian or Alaskan Native Alone)"};var poverty_asian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001D_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Asian Alone)"};var poverty_native_hawaiian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001E_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Native Hawaiian and Other Pacific Islander Alone)"};var poverty_other_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001F_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Some Other Race Alone)"};var poverty_two_or_more_races={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001G_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Two or more races)"};var poverty_hispanic_origin={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001I_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Hispanic Origin)"};var poverty_family={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_002E","description":"Number of families below the poverty level in the past 12 months"};var poverty_family_married={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_003E","description":"Number of married couples whose income is below the poverty level in the past 12 months"};var poverty_family_single_male={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_009E","description":"Number of families with a male householder and no wife present whose income is below the poverty level in the past 12 months"};var poverty_family_single_female={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_014E","description":"Number of families with a female householder and no husband present whose income is below the poverty level in the past 12 months"};var age={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01002_001E","description":"Median age"};var median_male_age={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01002_002E","description":"Median age by sex (male)"};var median_female_age={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01002_003E","description":"Median age by sex (female)"};var population={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01003_001E","description":"Total population"};var population_white_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_002E","description":"Population (White Alone)"};var population_black_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_003E","description":"Population (Black or African American Alone)"};var population_asian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_005E","description":"Population (Asian Alone)"};var population_native_hawaiian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_006E","description":"Population (Native Hawaiian and Other Pacific Islander Alone)"};var population_other_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_007E","description":"Population (Some Other Race Alone)"};var population_two_or_more_races={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_008E","description":"Population (Two or more races)"};var population_hispanic_origin={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B03001_003E","description":"Population (Hispanic Origin)"};var median_house_construction_year={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25035_001E","description":"Median year housing units were built"};var median_contract_rent={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25058_001E","description":"Median contract rent"};var median_gross_rent={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25064_001E","description":"Median gross rent (contract rent plus the cost of utilities)"};var median_home_value={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25077_001E","description":"Median value (dollars) for Owner-Occupied housing units"};var commute_time={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_001E","description":"Total time spent commuting (in minutes)","normalizable":true};var commute_time_solo_automobile={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_003E","description":"Time spent commuting (in minutes): Car, truck, or van - alone","normalizable":true};var commute_time_carpool={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_004E","description":"Time spent commuting (in minutes): Car, truck, or van - carpool","normalizable":true};var commute_time_public_transport={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_007E","description":"Time spent commuting (in minutes): public transport (excluding taxis)","normalizable":true};var commute_time_walked={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_011E","description":"Time spent commuting (in minutes): walking","normalizable":true};var commute_time_other={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_012E","description":"Time spent commuting (in minutes): Taxicab, motorcycle, bicycle, or other means","normalizable":true};var education_none={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_002E","description":"The number of persons age 25 and over who completed no schooling"};var education_high_school={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_017E","description":"The number of persons age 25 and over who have a regular high school diploma"};var education_ged={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_018E","description":"The number of persons age 25 and over who have a GED or alternative credential"};var education_associates={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_021E","description":"The number of persons age 25 and over who hold an Associate's degree"};var education_bachelors={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_022E","description":"The number of persons age 25 and over who hold a Bachelor's degree"};var education_masters={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_023E","description":"The number of persons age 25 and over who hold a Master's degree"};var education_professional={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_024E","description":"The number of persons age 25 and over who hold a Professional degree"};var education_doctorate={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_025E","description":"The number of persons age 25 and over who hold a Doctoral degree"};var aliases = {population_1990:population_1990,population_2000:population_2000,population_2010:population_2010,population_families_1990:population_families_1990,population_families_2000:population_families_2000,population_families_2010:population_families_2010,population_male_1990:population_male_1990,population_female_1990:population_female_1990,population_male_2000:population_male_2000,population_female_2000:population_female_2000,population_male_2010:population_male_2010,population_female_2010:population_female_2010,age_under_1_1990:age_under_1_1990,age_1_to_2_1990:age_1_to_2_1990,age_3_to_4_1990:age_3_to_4_1990,age_5_1990:age_5_1990,age_6_1990:age_6_1990,age_7_to_9_1990:age_7_to_9_1990,age_10_to_11_1990:age_10_to_11_1990,age_12_to_13_1990:age_12_to_13_1990,age_14_1990:age_14_1990,age_15_1990:age_15_1990,age_16_1990:age_16_1990,age_17_1990:age_17_1990,age_18_1990:age_18_1990,age_19_1990:age_19_1990,age_20_1990:age_20_1990,age_21_1990:age_21_1990,age_22_to_24_1990:age_22_to_24_1990,age_25_to_29_1990:age_25_to_29_1990,age_30_to_34_1990:age_30_to_34_1990,age_35_to_39_1990:age_35_to_39_1990,age_40_to_44_1990:age_40_to_44_1990,age_45_to_49_1990:age_45_to_49_1990,age_50_to_54_1990:age_50_to_54_1990,age_55_to_59_1990:age_55_to_59_1990,age_60_to_61_1990:age_60_to_61_1990,age_62_to_64_1990:age_62_to_64_1990,age_65_to_69_1990:age_65_to_69_1990,age_70_to_74_1990:age_70_to_74_1990,age_75_to_79_1990:age_75_to_79_1990,age_80_to_84_1990:age_80_to_84_1990,age_under_5_male_2000:age_under_5_male_2000,age_5_to_9_male_2000:age_5_to_9_male_2000,age_10_to_14_male_2000:age_10_to_14_male_2000,age_15_to_17_male_2000:age_15_to_17_male_2000,age_18_to_19_male_2000:age_18_to_19_male_2000,age_20_male_2000:age_20_male_2000,age_21_male_2000:age_21_male_2000,age_22_to_24_male_2000:age_22_to_24_male_2000,age_25_to_29_male_2000:age_25_to_29_male_2000,age_30_to_34_male_2000:age_30_to_34_male_2000,age_35_to_39_male_2000:age_35_to_39_male_2000,age_40_to_44_male_2000:age_40_to_44_male_2000,age_45_to_49_male_2000:age_45_to_49_male_2000,age_50_to_54_male_2000:age_50_to_54_male_2000,age_55_to_59_male_2000:age_55_to_59_male_2000,age_60_to_61_male_2000:age_60_to_61_male_2000,age_62_to_64_male_2000:age_62_to_64_male_2000,age_65_to_66_male_2000:age_65_to_66_male_2000,age_67_to_69_male_2000:age_67_to_69_male_2000,age_70_to_74_male_2000:age_70_to_74_male_2000,age_75_to_79_male_2000:age_75_to_79_male_2000,age_80_to_84_male_2000:age_80_to_84_male_2000,age_under_5_female_2000:age_under_5_female_2000,age_5_to_9_female_2000:age_5_to_9_female_2000,age_10_to_14_female_2000:age_10_to_14_female_2000,age_15_to_17_female_2000:age_15_to_17_female_2000,age_18_to_19_female_2000:age_18_to_19_female_2000,age_20_female_2000:age_20_female_2000,age_21_female_2000:age_21_female_2000,age_22_to_24_female_2000:age_22_to_24_female_2000,age_25_to_29_female_2000:age_25_to_29_female_2000,age_30_to_34_female_2000:age_30_to_34_female_2000,age_35_to_39_female_2000:age_35_to_39_female_2000,age_40_to_44_female_2000:age_40_to_44_female_2000,age_45_to_49_female_2000:age_45_to_49_female_2000,age_50_to_54_female_2000:age_50_to_54_female_2000,age_55_to_59_female_2000:age_55_to_59_female_2000,age_60_to_61_female_2000:age_60_to_61_female_2000,age_62_to_64_female_2000:age_62_to_64_female_2000,age_65_to_66_female_2000:age_65_to_66_female_2000,age_67_to_69_female_2000:age_67_to_69_female_2000,age_70_to_74_female_2000:age_70_to_74_female_2000,age_75_to_79_female_2000:age_75_to_79_female_2000,age_80_to_84_female_2000:age_80_to_84_female_2000,age_under_5_male_2010:age_under_5_male_2010,age_5_to_9_male_2010:age_5_to_9_male_2010,age_10_to_14_male_2010:age_10_to_14_male_2010,age_15_to_17_male_2010:age_15_to_17_male_2010,age_18_to_19_male_2010:age_18_to_19_male_2010,age_20_male_2010:age_20_male_2010,age_21_male_2010:age_21_male_2010,age_22_to_24_male_2010:age_22_to_24_male_2010,age_25_to_29_male_2010:age_25_to_29_male_2010,age_30_to_34_male_2010:age_30_to_34_male_2010,age_35_to_39_male_2010:age_35_to_39_male_2010,age_40_to_44_male_2010:age_40_to_44_male_2010,age_45_to_49_male_2010:age_45_to_49_male_2010,age_50_to_54_male_2010:age_50_to_54_male_2010,age_55_to_59_male_2010:age_55_to_59_male_2010,age_60_to_61_male_2010:age_60_to_61_male_2010,age_62_to_64_male_2010:age_62_to_64_male_2010,age_65_to_66_male_2010:age_65_to_66_male_2010,age_67_to_69_male_2010:age_67_to_69_male_2010,age_70_to_74_male_2010:age_70_to_74_male_2010,age_75_to_79_male_2010:age_75_to_79_male_2010,age_80_to_84_male_2010:age_80_to_84_male_2010,age_under_5_female_2010:age_under_5_female_2010,age_5_to_9_female_2010:age_5_to_9_female_2010,age_10_to_14_female_2010:age_10_to_14_female_2010,age_15_to_17_female_2010:age_15_to_17_female_2010,age_18_to_19_female_2010:age_18_to_19_female_2010,age_20_female_2010:age_20_female_2010,age_21_female_2010:age_21_female_2010,age_22_to_24_female_2010:age_22_to_24_female_2010,age_25_to_29_female_2010:age_25_to_29_female_2010,age_30_to_34_female_2010:age_30_to_34_female_2010,age_35_to_39_female_2010:age_35_to_39_female_2010,age_40_to_44_female_2010:age_40_to_44_female_2010,age_45_to_49_female_2010:age_45_to_49_female_2010,age_50_to_54_female_2010:age_50_to_54_female_2010,age_55_to_59_female_2010:age_55_to_59_female_2010,age_60_to_61_female_2010:age_60_to_61_female_2010,age_62_to_64_female_2010:age_62_to_64_female_2010,age_65_to_66_female_2010:age_65_to_66_female_2010,age_67_to_69_female_2010:age_67_to_69_female_2010,age_70_to_74_female_2010:age_70_to_74_female_2010,age_75_to_79_female_2010:age_75_to_79_female_2010,age_80_to_84_female_2010:age_80_to_84_female_2010,race_hispanic_1990:race_hispanic_1990,race_asian_1990:race_asian_1990,race_other_1990:race_other_1990,race_hispanic_no_1990:race_hispanic_no_1990,race_hispanic_mexican_1990:race_hispanic_mexican_1990,race_hispanic_puerto_rican_1990:race_hispanic_puerto_rican_1990,race_hispanic_cuban_1990:race_hispanic_cuban_1990,race_hispanic_other_1990:race_hispanic_other_1990,race_white_1990:race_white_1990,race_black_1990:race_black_1990,race_american_indian_1990:race_american_indian_1990,race_eskimo_1990:race_eskimo_1990,race_aleutian_1990:race_aleutian_1990,race_chinese_1990:race_chinese_1990,race_filipino_1990:race_filipino_1990,race_japanese_1990:race_japanese_1990,race_asian_indian_1990:race_asian_indian_1990,race_korean_1990:race_korean_1990,race_vietnamese_1990:race_vietnamese_1990,race_cambodian_1990:race_cambodian_1990,race_hmong_1990:race_hmong_1990,race_laotian_1990:race_laotian_1990,race_thai_1990:race_thai_1990,race_other_asian_1990:race_other_asian_1990,race_hawaiian_1990:race_hawaiian_1990,race_samoan_1990:race_samoan_1990,race_tongan_1990:race_tongan_1990,race_other_polynesian_1990:race_other_polynesian_1990,race_guamanian_1990:race_guamanian_1990,race_other_micronesian_1990:race_other_micronesian_1990,race_melanesian_1990:race_melanesian_1990,race_pacific_islander_1990:race_pacific_islander_1990,race_other_race_1990:race_other_race_1990,race_white_2000:race_white_2000,race_black_2000:race_black_2000,race_hispanic_2000:race_hispanic_2000,race_asian_2000:race_asian_2000,race_other_2000:race_other_2000,race_hispanic_no_2000:race_hispanic_no_2000,race_hispanic_latino_2000:race_hispanic_latino_2000,race_hispanic_mexican_2000:race_hispanic_mexican_2000,race_hispanic_puerto_rican_2000:race_hispanic_puerto_rican_2000,race_hispanic_cuban_2000:race_hispanic_cuban_2000,race_hispanic_dominican_republic_2000:race_hispanic_dominican_republic_2000,race_hispanic_central_american_2000:race_hispanic_central_american_2000,race_hispanic_costa_rican_2000:race_hispanic_costa_rican_2000,race_hispanic_guatemalan_2000:race_hispanic_guatemalan_2000,race_hispanic_honduran_2000:race_hispanic_honduran_2000,race_hispanic_nicaraguan_2000:race_hispanic_nicaraguan_2000,race_hispanic_panamanian_2000:race_hispanic_panamanian_2000,race_hispanic_salvadoran_2000:race_hispanic_salvadoran_2000,race_hispanic_other_central_american_2000:race_hispanic_other_central_american_2000,race_south_american_2000:race_south_american_2000,rac_south_americane_argentinean_2000:rac_south_americane_argentinean_2000,race_south_american_bolivian_2000:race_south_american_bolivian_2000,race_south_american_chilean_2000:race_south_american_chilean_2000,race_colombian_2000:race_colombian_2000,race_south_american_ecuadorian_2000:race_south_american_ecuadorian_2000,race_south_american_paraguayan_2000:race_south_american_paraguayan_2000,race_south_american_peruvian_2000:race_south_american_peruvian_2000,race_south_american_uruguayan_2000:race_south_american_uruguayan_2000,race_south_american_venezuelan_2000:race_south_american_venezuelan_2000,race_other_south_american_2000:race_other_south_american_2000,race_hispanic_other_latinos_2000:race_hispanic_other_latinos_2000,race_spaniard_2000:race_spaniard_2000,race_spanish_2000:race_spanish_2000,race_spanish_american_2000:race_spanish_american_2000,race_hispanic_other_2000:race_hispanic_other_2000,race_american_indian_2000:race_american_indian_2000,race_eskimo_2000:race_eskimo_2000,race_aleutian_2000:race_aleutian_2000,race_asian_indian_2000:race_asian_indian_2000,race_asian_bengladeshi_2000:race_asian_bengladeshi_2000,race_asian_cambodian_2000:race_asian_cambodian_2000,race_asian_chinese_2000:race_asian_chinese_2000,race_asian_filipino_2000:race_asian_filipino_2000,race_asian_hmong_2000:race_asian_hmong_2000,race_asian_indonesian_2000:race_asian_indonesian_2000,race_asian_japanese_2000:race_asian_japanese_2000,race_asian_korean_2000:race_asian_korean_2000,race_asian_laotian_2000:race_asian_laotian_2000,race_asian_malaysian_2000:race_asian_malaysian_2000,race_asian_pakistani_2000:race_asian_pakistani_2000,race_asian_sri_lankan_2000:race_asian_sri_lankan_2000,race_asian_taiwanese_2000:race_asian_taiwanese_2000,race_asian_thai_2000:race_asian_thai_2000,race_asian_vietnamese_2000:race_asian_vietnamese_2000,race_other_asian_2000:race_other_asian_2000,race_other_asian_not_specified_2000:race_other_asian_not_specified_2000,race_pacific_islander_2000:race_pacific_islander_2000,race_pacific_islander_polynesian_2000:race_pacific_islander_polynesian_2000,race_pacific_islander_polynesian_hawaiian_2000:race_pacific_islander_polynesian_hawaiian_2000,race_pacific_islander_polynesian_samoan_2000:race_pacific_islander_polynesian_samoan_2000,race_pacific_islander_polynesian_tongan_2000:race_pacific_islander_polynesian_tongan_2000,race_pacific_islander_polynesian_other_2000:race_pacific_islander_polynesian_other_2000,race_pacific_islander_micronesian_2000:race_pacific_islander_micronesian_2000,race_pacific_islander_micronesian_guam__chamorro_2000:race_pacific_islander_micronesian_guam__chamorro_2000,race_pacific_islander_micronesian_other_2000:race_pacific_islander_micronesian_other_2000,race_pacific_islander_melanesian_2000:race_pacific_islander_melanesian_2000,race_pacific_islander_melanesian_fijian_2000:race_pacific_islander_melanesian_fijian_2000,race_pacific_islander_melanesian_other_2000:race_pacific_islander_melanesian_other_2000,race_pacific_islander_pacific_islander_other_2000:race_pacific_islander_pacific_islander_other_2000,race_pacific_islander_pacific_islander_not_specified_2000:race_pacific_islander_pacific_islander_not_specified_2000,race_white_2010:race_white_2010,race_black_2010:race_black_2010,race_hispanic_2010:race_hispanic_2010,race_asian_2010:race_asian_2010,race_other_2010:race_other_2010,race_hispanic_no_2010:race_hispanic_no_2010,race_hispanic_latino_2010:race_hispanic_latino_2010,race_hispanic_mexican_2010:race_hispanic_mexican_2010,race_hispanic_puerto_rican_2010:race_hispanic_puerto_rican_2010,race_hispanic_cuban_2010:race_hispanic_cuban_2010,race_hispanic_dominican_republic_2010:race_hispanic_dominican_republic_2010,race_hispanic_central_american_2010:race_hispanic_central_american_2010,race_hispanic_costa_rican_2010:race_hispanic_costa_rican_2010,race_hispanic_guatemalan_2010:race_hispanic_guatemalan_2010,race_hispanic_honduran_2010:race_hispanic_honduran_2010,race_hispanic_nicaraguan_2010:race_hispanic_nicaraguan_2010,race_hispanic_panamanian_2010:race_hispanic_panamanian_2010,race_hispanic_salvadoran_2010:race_hispanic_salvadoran_2010,race_hispanic_other_central_american_2010:race_hispanic_other_central_american_2010,race_south_american_2010:race_south_american_2010,race_south_american_argentinean_2010:race_south_american_argentinean_2010,race_south_american_bolivian_2010:race_south_american_bolivian_2010,race_south_american_chilean_2010:race_south_american_chilean_2010,race_south_american_colombian_2010:race_south_american_colombian_2010,race_south_american_ecuadorian_2010:race_south_american_ecuadorian_2010,race_south_american_paraguayan_2010:race_south_american_paraguayan_2010,race_south_american_peruvian_2010:race_south_american_peruvian_2010,race_south_american_uruguayan_2010:race_south_american_uruguayan_2010,race_south_american_venezuelan_2010:race_south_american_venezuelan_2010,race_other_south_american_2010:race_other_south_american_2010,race_hispanic_other_latinos_2010:race_hispanic_other_latinos_2010,race_spaniard_2010:race_spaniard_2010,race_spanish_2010:race_spanish_2010,race_spanish_american_2010:race_spanish_american_2010,race_hispanic_other_2010:race_hispanic_other_2010,race_american_indian_2010:race_american_indian_2010,race_eskimo_2010:race_eskimo_2010,race_aleutian_2010:race_aleutian_2010,race_asian_indian_2010:race_asian_indian_2010,race_asian_bengladeshi_2010:race_asian_bengladeshi_2010,race_asian_cambodian_2010:race_asian_cambodian_2010,race_asian_chinese_2010:race_asian_chinese_2010,race_asian_filipino_2010:race_asian_filipino_2010,race_asian_hmong_2010:race_asian_hmong_2010,race_asian_indonesian_2010:race_asian_indonesian_2010,race_asian_japanese_2010:race_asian_japanese_2010,race_asian_korean_2010:race_asian_korean_2010,race_asian_laotian_2010:race_asian_laotian_2010,race_asian_malaysian_2010:race_asian_malaysian_2010,race_asian_pakistani_2010:race_asian_pakistani_2010,race_asian_sri_lankan_2010:race_asian_sri_lankan_2010,race_asian_taiwanese_2010:race_asian_taiwanese_2010,race_asian_thai_2010:race_asian_thai_2010,race_asian_vietnamese_2010:race_asian_vietnamese_2010,race_other_asian_2010:race_other_asian_2010,race_other_asian_not_specified_2010:race_other_asian_not_specified_2010,race_pacific_islander_2010:race_pacific_islander_2010,race_pacific_islander_polynesian_2010:race_pacific_islander_polynesian_2010,race_pacific_islander_polynesian_hawaiian_2010:race_pacific_islander_polynesian_hawaiian_2010,race_pacific_islander_polynesian_samoan_2010:race_pacific_islander_polynesian_samoan_2010,race_pacific_islander_polynesian_tongan_2010:race_pacific_islander_polynesian_tongan_2010,race_pacific_islander_polynesian_other_2010:race_pacific_islander_polynesian_other_2010,race_pacific_islander_micronesian_2010:race_pacific_islander_micronesian_2010,race_pacific_islander_micronesian_guam_chamorro_2010:race_pacific_islander_micronesian_guam_chamorro_2010,race_pacific_islander_micronesian_marshallese_2010:race_pacific_islander_micronesian_marshallese_2010,race_pacific_islander_micronesian_other_2010:race_pacific_islander_micronesian_other_2010,race_pacific_islander_melanesian_2010:race_pacific_islander_melanesian_2010,race_pacific_islander_melanesian_fijian_2010:race_pacific_islander_melanesian_fijian_2010,race_pacific_islander_melanesian_other_2010:race_pacific_islander_melanesian_other_2010,race_pacific_islander_pacific_islander_not_specified_2010:race_pacific_islander_pacific_islander_not_specified_2010,males_never_married_1990:males_never_married_1990,males_married_1990:males_married_1990,males_separated_1990:males_separated_1990,males_widowed_1990:males_widowed_1990,males_divorced_1990:males_divorced_1990,females_never_married_1990:females_never_married_1990,females_married_1990:females_married_1990,females_separated_1990:females_separated_1990,females_widowed_1990:females_widowed_1990,females_divorced_1990:females_divorced_1990,college_dorms_1990:college_dorms_1990,military_quarters_1990:military_quarters_1990,college_dorms_2000:college_dorms_2000,military_quarters_2000:military_quarters_2000,college_dorms_2010:college_dorms_2010,military_quarters_2010:military_quarters_2010,correctional_facilities_1990:correctional_facilities_1990,nursing_homes_1990:nursing_homes_1990,mental_health_facilities_1990:mental_health_facilities_1990,juvenile_detention_facilities_1990:juvenile_detention_facilities_1990,correctional_facilities_2000:correctional_facilities_2000,nursing_homes_2000:nursing_homes_2000,mental_health_facilities_2000:mental_health_facilities_2000,juvenile_detention_facilities_2000:juvenile_detention_facilities_2000,correctional_facilities_2010:correctional_facilities_2010,nursing_homes_2010:nursing_homes_2010,mental_health_facilities_2010:mental_health_facilities_2010,juvenile_detention_facilities_2010:juvenile_detention_facilities_2010,households_family_2_person_1990:households_family_2_person_1990,households_family_3_person_1990:households_family_3_person_1990,households_family_4_person_1990:households_family_4_person_1990,households_family_5_person_1990:households_family_5_person_1990,households_6_family_person_1990:households_6_family_person_1990,households_1_nonfamily_person_1990:households_1_nonfamily_person_1990,households_nonfamily_2_person_1990:households_nonfamily_2_person_1990,households_nonfamily_3_person_1990:households_nonfamily_3_person_1990,households_nonfamily_4_person_1990:households_nonfamily_4_person_1990,households_nonfamily_5_person_1990:households_nonfamily_5_person_1990,households_nonfamily_6_person_1990:households_nonfamily_6_person_1990,income:income,income_per_capita:income_per_capita,employment_labor_force:employment_labor_force,employment_not_labor_force:employment_not_labor_force,employment_civilian_labor_force:employment_civilian_labor_force,employment_employed:employment_employed,employment_unemployed:employment_unemployed,employment_armed_forces:employment_armed_forces,employment_male_management_business_science_and_arts_occupations:employment_male_management_business_science_and_arts_occupations,employment_male_management_business_and_financial_occupations:employment_male_management_business_and_financial_occupations,employment_male_management_occupations:employment_male_management_occupations,employment_male_business_and_financial_operations_occupations:employment_male_business_and_financial_operations_occupations,employment_male_computer_engineering_and_science_occupations:employment_male_computer_engineering_and_science_occupations,employment_male_computer_and_mathematical_occupations:employment_male_computer_and_mathematical_occupations,employment_male_architecture_and_engineering_occupations:employment_male_architecture_and_engineering_occupations,employment_male_life_physical_and_social_science_occupations:employment_male_life_physical_and_social_science_occupations,employment_male_education_legal_community_service_arts_and_media_occupations:employment_male_education_legal_community_service_arts_and_media_occupations,employment_male_community_and_social_service_occupations:employment_male_community_and_social_service_occupations,employment_male_legal_occupations:employment_male_legal_occupations,employment_male_education_training_and_library_occupations:employment_male_education_training_and_library_occupations,employment_male_arts_design_entertainment_sports_and_media_occupations:employment_male_arts_design_entertainment_sports_and_media_occupations,employment_male_healthcare_practitioners_and_technical_occupations:employment_male_healthcare_practitioners_and_technical_occupations,employment_male_health_diagnosing_and_treating_practitioners_and_other_technical_occupations:employment_male_health_diagnosing_and_treating_practitioners_and_other_technical_occupations,employment_male_health_technologists_and_technicians:employment_male_health_technologists_and_technicians,employment_male_service_occupations:employment_male_service_occupations,employment_male_healthcare_support_occupations:employment_male_healthcare_support_occupations,employment_male_protective_service_occupations:employment_male_protective_service_occupations,employment_male_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors:employment_male_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors,employment_male_law_enforcement_workers_including_supervisors:employment_male_law_enforcement_workers_including_supervisors,employment_male_food_preparation_and_serving_related_occupations:employment_male_food_preparation_and_serving_related_occupations,employment_male_building_and_grounds_cleaning_and_maintenance_occupations:employment_male_building_and_grounds_cleaning_and_maintenance_occupations,employment_male_personal_care_and_service_occupations:employment_male_personal_care_and_service_occupations,employment_male_sales_and_office_occupations:employment_male_sales_and_office_occupations,employment_male_sales_and_related_occupations:employment_male_sales_and_related_occupations,employment_male_office_and_administrative_support_occupations:employment_male_office_and_administrative_support_occupations,employment_male_natural_resources_construction_and_maintenance_occupations:employment_male_natural_resources_construction_and_maintenance_occupations,employment_male_farming_fishing_and_forestry_occupations:employment_male_farming_fishing_and_forestry_occupations,employment_male_construction_and_extraction_occupations:employment_male_construction_and_extraction_occupations,employment_male_installation_maintenance_and_repair_occupations:employment_male_installation_maintenance_and_repair_occupations,employment_male_production_transportation_and_material_moving_occupations:employment_male_production_transportation_and_material_moving_occupations,employment_male_production_occupations:employment_male_production_occupations,employment_male_transportation_occupations:employment_male_transportation_occupations,employment_male_material_moving_occupations:employment_male_material_moving_occupations,employment_female_management_business_science_and_arts_occupations:employment_female_management_business_science_and_arts_occupations,employment_female_management_business_and_financial_occupations:employment_female_management_business_and_financial_occupations,employment_female_management_occupations:employment_female_management_occupations,employment_female_business_and_financial_operations_occupations:employment_female_business_and_financial_operations_occupations,employment_female_computer_engineering_and_science_occupations:employment_female_computer_engineering_and_science_occupations,employment_female_computer_and_mathematical_occupations:employment_female_computer_and_mathematical_occupations,employment_female_architecture_and_engineering_occupations:employment_female_architecture_and_engineering_occupations,employment_female_life_physical_and_social_science_occupations:employment_female_life_physical_and_social_science_occupations,employment_female_education_legal_community_service_arts_and_media_occupations:employment_female_education_legal_community_service_arts_and_media_occupations,employment_female_community_and_social_service_occupations:employment_female_community_and_social_service_occupations,employment_female_legal_occupations:employment_female_legal_occupations,employment_female_education_training_and_library_occupations:employment_female_education_training_and_library_occupations,employment_female_arts_design_entertainment_sports_and_media_occupations:employment_female_arts_design_entertainment_sports_and_media_occupations,employment_female_healthcare_practitioners_and_technical_occupations:employment_female_healthcare_practitioners_and_technical_occupations,employment_female_health_diagnosing_and_treating_practitioners_and_other_technical_occupations:employment_female_health_diagnosing_and_treating_practitioners_and_other_technical_occupations,employment_female_health_technologists_and_technicians:employment_female_health_technologists_and_technicians,employment_female_service_occupations:employment_female_service_occupations,employment_female_healthcare_support_occupations:employment_female_healthcare_support_occupations,employment_female_protective_service_occupations:employment_female_protective_service_occupations,employment_female_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors:employment_female_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors,employment_female_law_enforcement_workers_including_supervisors:employment_female_law_enforcement_workers_including_supervisors,employment_female_food_preparation_and_serving_related_occupations:employment_female_food_preparation_and_serving_related_occupations,employment_female_building_and_grounds_cleaning_and_maintenance_occupations:employment_female_building_and_grounds_cleaning_and_maintenance_occupations,employment_female_personal_care_and_service_occupations:employment_female_personal_care_and_service_occupations,employment_female_sales_and_office_occupations:employment_female_sales_and_office_occupations,employment_female_sales_and_related_occupations:employment_female_sales_and_related_occupations,employment_female_office_and_administrative_support_occupations:employment_female_office_and_administrative_support_occupations,employment_female_natural_resources_construction_and_maintenance_occupations:employment_female_natural_resources_construction_and_maintenance_occupations,employment_female_farming_fishing_and_forestry_occupations:employment_female_farming_fishing_and_forestry_occupations,employment_female_construction_and_extraction_occupations:employment_female_construction_and_extraction_occupations,employment_female_installation_maintenance_and_repair_occupations:employment_female_installation_maintenance_and_repair_occupations,employment_female_production_transportation_and_material_moving_occupations:employment_female_production_transportation_and_material_moving_occupations,employment_female_production_occupations:employment_female_production_occupations,employment_female_transportation_occupations:employment_female_transportation_occupations,employment_female_material_moving_occupations:employment_female_material_moving_occupations,poverty:poverty,poverty_male:poverty_male,poverty_female:poverty_female,poverty_white_alone:poverty_white_alone,poverty_black_alone:poverty_black_alone,population_american_indian_alone:population_american_indian_alone,poverty_asian_alone:poverty_asian_alone,poverty_native_hawaiian_alone:poverty_native_hawaiian_alone,poverty_other_alone:poverty_other_alone,poverty_two_or_more_races:poverty_two_or_more_races,poverty_hispanic_origin:poverty_hispanic_origin,poverty_family:poverty_family,poverty_family_married:poverty_family_married,poverty_family_single_male:poverty_family_single_male,poverty_family_single_female:poverty_family_single_female,age:age,median_male_age:median_male_age,median_female_age:median_female_age,population:population,population_white_alone:population_white_alone,population_black_alone:population_black_alone,population_asian_alone:population_asian_alone,population_native_hawaiian_alone:population_native_hawaiian_alone,population_other_alone:population_other_alone,population_two_or_more_races:population_two_or_more_races,population_hispanic_origin:population_hispanic_origin,median_house_construction_year:median_house_construction_year,median_contract_rent:median_contract_rent,median_gross_rent:median_gross_rent,median_home_value:median_home_value,commute_time:commute_time,commute_time_solo_automobile:commute_time_solo_automobile,commute_time_carpool:commute_time_carpool,commute_time_public_transport:commute_time_public_transport,commute_time_walked:commute_time_walked,commute_time_other:commute_time_other,education_none:education_none,education_high_school:education_high_school,education_ged:education_ged,education_associates:education_associates,education_bachelors:education_bachelors,education_masters:education_masters,education_professional:education_professional,education_doctorate:education_doctorate,"age_85+_1990":{"api":{"sf1":[1990,2010]},"variable":"P0110030","description":"The number of persons ages 85 and older in 1990"},"age_85+_male_2000":{"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012025","description":"The number of male persons ages 85 years old and older in 2000"},"age_85+_female_2000":{"api":{"sf1":[2000]},"variable":"P012049","description":"The number of female persons ages 85 years old and older in 2000"},"age_85+_male_2010":{"api":{"sf1":[2010,2000]},"variable":"P012A025","description":"The number of male persons ages 85 years old and older in 2010"},"age_85+_female_2010":{"api":{"sf1":[2010,2000]},"variable":"P012A049","description":"The number of female persons ages 85 years old and older in 2010"},"households_7+_family_person_1990":{"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270006","description":"7 person family households in 1990"},"households_nonfamily_7+_person_1990":{"api":{"sf1":[1990]},"variable":"P0270013","description":"7+ person non-family households in 1990"}};

	var defaultEndpoints = {
	  acsVariableDictionaryURL: 'https://api.census.gov/data/',
	  geoCoderUrl: 'https://geocoding.geo.census.gov/geocoder/geographies/',
	  tigerwebUrl: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/',
	  censusUrl: 'https://api.census.gov/data/'
	};

	// TODO:
	// Need to update this URL once the branch is merged into master.
	// Instead of pointing to a branch it should probably point to a
	// release tag.
	var zctaJsonUrl = 'https://raw.githubusercontent.com/tshrestha/citysdk/tech-debt/277-modularize-request-functions/src/resources/zipcode-to-coordinates.json';

	var fipsGeocoderUrl = 'https://geocoding.geo.census.gov/geocoder/geographies/coordinates?';
	var addressGeocoderUrl = 'https://geocoding.geo.census.gov/geocoder/locations/address?benchmark=4&format=jsonp';

	var CensusRequestUtils = function () {
	  function CensusRequestUtils() {
	    classCallCheck(this, CensusRequestUtils);
	  }

	  createClass(CensusRequestUtils, null, [{
	    key: 'parseToVariable',
	    value: function parseToVariable(aliasOrVariable) {
	      // If the requested string is an alias, return the appropriate variable from the dictionary
	      if (aliasOrVariable in aliases) {
	        return aliases[aliasOrVariable].variable;
	      }

	      // Otherwise, this is either already a variable name or is unsupported
	      return aliasOrVariable;
	    }
	  }, {
	    key: 'parseToValidVariable',
	    value: function parseToValidVariable(aliasOrVariable, api, year) {
	      // If the requested string is an alias, return the appropriate variable from the dictionary
	      if (aliasOrVariable in aliases) {
	        if (api in aliases[aliasOrVariable]['api'] && aliases[aliasOrVariable]['api'][api].indexOf(parseInt(year)) !== -1) {

	          // Alias found and is valid for selected API & year combination
	          return aliases[aliasOrVariable].variable;
	        } else {
	          // Alias found but is NOT valid for selected API and year combination
	          throw new Error('Invalid alias for selected API and year combination.');
	        }
	      }

	      // Otherwise, this is either already a variable name or is unsupported
	      return aliasOrVariable;
	    }
	  }, {
	    key: 'isNormalizable',
	    value: function isNormalizable(alias) {
	      return alias in aliases && 'normalizable' in aliases[alias] && aliases[alias].normalizable;
	    }
	  }, {
	    key: 'esriToGeo',
	    value: function esriToGeo(esriJson) {
	      return CitySdk.esriToGeo(esriJson);
	    }
	  }, {
	    key: 'geoToEsri',
	    value: function geoToEsri(geoJson) {
	      return CitySdk.geoToEsri(geoJson);
	    }
	  }, {
	    key: 'getLatLngFromStateCode',
	    value: function getLatLngFromStateCode(stateCode) {
	      var latlng = void 0;

	      if (stateCode) {
	        stateCode = stateCode.toUpperCase();
	        latlng = stateCapitalCoordinates[stateCode];
	      }

	      return latlng;
	    }
	  }, {
	    key: 'getLatLngFromZipcode',
	    value: function getLatLngFromZipcode(zip) {
	      var dfr = $.Deferred();

	      $.getJSON(zctaJsonUrl).then(function (coordinates) {
	        dfr.resolve(coordinates[zip]);
	      });

	      return dfr.promise();
	    }

	    /**
	     * Takes an address object with the fields "street", "city", "state", and "zip".
	     * Either city and state or zip must be provided with the street.
	     *
	     * @param address
	     *
	     * @returns {promise}
	     */

	  }, {
	    key: 'getLatLngFromAddress',
	    value: function getLatLngFromAddress(address) {
	      var url = addressGeocoderUrl;

	      // Address is required. If address is not present,
	      // then the request will fail.
	      if (!address.street) {
	        throw new Error('Invalid address! The required field "street" is missing.');
	      }

	      if (!address.city && !address.state && !address.zip) {
	        throw new Error('Invalid address! "city" and "state" or "zip" must be provided.');
	      }

	      url += '&street=' + address.street;

	      if (address.zip) {
	        url += '&zip=' + address.zip;
	      } else if (address.city && address.state) {
	        url += '&city=' + address.city + '&state=' + address.state;
	      } else {
	        throw new Error('Invalid address! "city" and "state" or "zip" must be provided.');
	      }

	      return CitySdk.ajaxRequest(url, true);
	    }
	  }, {
	    key: 'getLatLng',
	    value: function getLatLng(request) {
	      var dfr = $.Deferred();

	      function onRequestError(reason) {
	        dfr.reject(reason);
	      }

	      if (request.address) {
	        CensusRequestUtils.getLatLngFromAddress(request.address).then(function (response) {
	          var coordinates = response.result.addressMatches[0].coordinates;
	          request.lat = coordinates.y;
	          request.lng = coordinates.x;

	          dfr.resolve(request);
	        }, onRequestError);
	      } else if (request.zip) {
	        CensusRequestUtils.getLatLngFromZipcode(request.zip).then(function (coordinates) {
	          request.lat = coordinates[1];
	          request.lng = coordinates[0];

	          dfr.resolve(request);
	        }, onRequestError);
	      } else if (request.state) {
	        // Since this function returns a promise we want this to be an asynchronous
	        // call. Therefore, we wrap in a setTimout() since it allows the function to
	        // return before the code inside the setTimeout is excecuted.
	        setTimeout(function () {
	          var coordinates = CensusRequestUtils.getLatLngFromStateCode(request.state);
	          request.lat = coordinates[0];
	          request.lng = coordinates[1];

	          dfr.resolve(request);
	        }, 0);
	      } else {
	        dfr.reject(new Error("One of 'address', 'state' or 'zip' must be provided."));
	      }

	      return dfr.promise();
	    }
	  }, {
	    key: 'getFipsFromLatLng',
	    value: function getFipsFromLatLng(request) {
	      var lat = request.lat;
	      var lng = request.lng;
	      var dfr = $.Deferred();
	      var url = fipsGeocoderUrl;

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      // Benchmark id: 4 = Public_AR_Current
	      // Vintage id: 4 = Current_Current
	      url += 'x=' + lng + '&y=' + lat + '&benchmark=4&vintage=4&layers=8,12,28,84,86&format=jsonp';

	      CitySdk.ajaxRequest(url, true).then(function (response) {
	        var geographies = response.result.geographies;

	        // The 2010 Census Blocks object seems to have
	        // the FIPS codes for all the level we need.
	        var fips = geographies['2010 Census Blocks'][0];

	        // FIPS codes
	        request.state = fips.STATE;
	        request.tract = fips.TRACT;
	        request.county = fips.COUNTY;
	        request.blockGroup = fips.BLKGRP;

	        // Check if this location is Incorporated. If so, then get the FIPS code.
	        if (geographies['Incorporated Places'] && geographies['Incorporated Places'].length) {
	          request.place = geographies['Incorporated Places'][0].PLACE;
	          request.place_name = geographies['Incorporated Places'][0].NAME;
	        }

	        request.geocoded = true;

	        dfr.resolve(request);
	      }, onRequestError);

	      return dfr.promise();
	    }
	  }, {
	    key: 'getGeographyVariables',
	    value: function getGeographyVariables(request) {
	      if (!request.api || !request.year) {
	        throw new Error('Invalid request! "year" and "api" fields must be provided.');
	      }

	      var url = '' + defaultEndpoints.censusUrl + request.year + '/' + request.api + '/geography.json';
	      return CitySdk.ajaxRequest(url, false);
	    }
	  }]);
	  return CensusRequestUtils;
	}();

	var acs5 = ["2010", "2013", "2011", "2012", "2014"];
	var ewks = ["2007", "2012", "2002"];
	var acs3 = ["2013", "2012"];
	var nonemp_old = ["2012"];
	var nonemp = ["2011", "2012", "2013", "2008", "2010", "2009"];
	var sf1 = ["1990", "2010", "2000"];
	var cbp = ["2008", "2010", "2009", "2013", "2012", "2011"];
	var sf3 = ["1990", "2000"];
	var acs1 = ["2014", "2013", "2012"];
	var pubschlfin = ["2012"];
	var language = ["2013"];
	var availableDatasets = {
		acs5: acs5,
		ewks: ewks,
		acs3: acs3,
		nonemp_old: nonemp_old,
		nonemp: nonemp,
		sf1: sf1,
		cbp: cbp,
		sf3: sf3,
		acs1: acs1,
		pubschlfin: pubschlfin,
		language: language,
		"pep/agesex": ["2014"],
		"pep/natmonthly": ["2015"],
		"pep/cochar6": ["2014", "2013"],
		"pep/stchar6": ["2014", "2013"],
		"pep/prcagesex": ["2014", "2013"],
		"intltrade/istnaics": ["2014"],
		"pep/agespecial6": ["2014"],
		"pep/housing": ["2013", "2014"],
		"pep/monthlynatchar5": ["2013", "2014"],
		"pdb/blockgroup": ["2015"],
		"acs5/profile": ["2014", "2012", "2013"],
		"pep/prmagesex": ["2014", "2013"],
		"pep/prm": ["2014", "2013"],
		"pep/natstprc18": ["2014", "2013"],
		"acs3/profile": ["2013", "2012"],
		"pep/cochar5": ["2014", "2013"],
		"pep/stchar5": ["2013", "2014"],
		"popproj/deaths": ["2012"],
		"pep/monthlynatchar6": ["2013", "2014"],
		"pep/population": ["2015"],
		"acs1/profile": ["2013", "2014", "2012"],
		"popproj/births": ["2012"],
		"intltrade/stnaics": ["2014"],
		"pep/agespecialpr": ["2014"],
		"pep/subcty": ["2014", "2013"],
		"pep/cty": ["2013", "2014"],
		"popproj/nim": ["2012"],
		"pep/agespecial5": ["2014"],
		"pep/charagegroups": ["2015"],
		"acs1/cd113": ["2011"],
		"pep/natstprc": ["2013", "2014"],
		"pep/components": ["2015"],
		"pdb/tract": ["2015"],
		"popproj/pop": ["2012"],
		"intltrade/imp_exp": ["2014"]
	};

	// Defaults
	var defaultApi = 'acs5';
	var defaultLevel = 'blockGroup';
	var defaultSublevel = false;

	// Valid levels
	var levels = new Set(['blockGroup', 'tract', 'county', 'state', 'us', 'place']);

	var CensusRequestValidator = function () {
	  function CensusRequestValidator() {
	    classCallCheck(this, CensusRequestValidator);
	  }

	  createClass(CensusRequestValidator, null, [{
	    key: 'validateApi',
	    value: function validateApi(request) {
	      if (!request.api) {
	        request.api = defaultApi;
	      }

	      return this;
	    }
	  }, {
	    key: 'validateApiYear',
	    value: function validateApiYear(request) {
	      // Check if api is valid.
	      if (availableDatasets[request.api]) {
	        // Get available years for this api and sort the them in
	        // ascending order.
	        var availableApiYears = availableDatasets[request.api].sort();

	        // If the request year was not provided or if it is invalid, set it to
	        // the most recent year that is available for the requested api.
	        if (!request.year || isNaN(+request.year) || availableApiYears.indexOf(request.year) === -1) {
	          request.year = availableApiYears[availableApiYears.length - 1];
	        }
	      }

	      return this;
	    }
	  }, {
	    key: 'validateLevel',
	    value: function validateLevel(request) {
	      if (!request.level || !levels.has(request.level)) {
	        request.level = defaultLevel;
	      }

	      return this;
	    }
	  }, {
	    key: 'validateSublevel',
	    value: function validateSublevel(request) {
	      if (request.hasOwnProperty('sublevel')) {
	        if (typeof request.sublevel !== 'boolean') {
	          request.sublevel = request.sublevel === 'true';
	        }
	      } else {
	        request.sublevel = defaultSublevel;
	      }

	      return this;
	    }
	  }, {
	    key: 'validate',
	    value: function validate(request) {
	      this.validateApi(request).validateApiYear(request).validateLevel(request).validateSublevel(request);

	      return request;
	    }
	  }, {
	    key: 'validateGeoVariables',
	    value: function validateGeoVariables(request) {
	      var dfr = $.Deferred();

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      CensusRequestUtils.getGeographyVariables(request).then(function (response) {
	        var fips = response.fips;
	        var level = request.level;
	        var valid = false;
	        var requiredFields = void 0;

	        if (level === 'blockGroup') {
	          level = 'block group';
	        }

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = fips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var value = _step.value;

	            if (value.name === level) {
	              valid = true;
	              var requires = value.requires;

	              if (requires && requires.length) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                  for (var _iterator2 = requires[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var required = _step2.value;

	                    if (!request.hasOwnProperty(required)) {
	                      valid = false;
	                      break;
	                    }
	                  }
	                } catch (err) {
	                  _didIteratorError2 = true;
	                  _iteratorError2 = err;
	                } finally {
	                  try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                      _iterator2.return();
	                    }
	                  } finally {
	                    if (_didIteratorError2) {
	                      throw _iteratorError2;
	                    }
	                  }
	                }
	              }

	              // Required fields are missing in the request.
	              // Save them so that we can inform the user by
	              // adding them to the error.
	              if (!valid) {
	                requiredFields = requires.join(', ');
	              }

	              break;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        request.geographyValidForAPI = valid;

	        if (valid) {
	          dfr.resolve(request);
	        } else {
	          if (requiredFields) {
	            dfr.reject(new Error('Request is missing required fields: ' + requiredFields + '.'));
	          } else {
	            dfr.reject(new Error('Invalid level "' + level + '" for this request.'));
	          }
	        }
	      }, onRequestError);

	      return dfr.promise();
	    }
	  }]);
	  return CensusRequestValidator;
	}();

	var acs5$1 = { "2010": ["NAME"], "2011": ["NAME"], "2012": ["NAME"], "2013": ["NAME"], "2014": ["NAME"] };
	var ewks$1 = { "2002": ["NAICS2002", "OPTAX"], "2007": ["NAICS2007"], "2012": ["NAICS2012", "OPTAX"] };
	var acs3$1 = { "2012": ["NAME"], "2013": ["NAME"] };
	var nonemp_old$1 = { "2012": ["NAICS2012"] };
	var sf1$1 = { "1990": ["ANPSADPI"], "2000": ["NAME"], "2010": ["NAME"] };
	var sf3$1 = { "1990": ["ANPSADPI"], "2000": ["NAME"] };
	var acs1$1 = { "2012": ["NAME"], "2013": ["NAME"], "2014": ["NAME"] };
	var pubschlfin$1 = { "2012": ["NAME"] };
	var language$1 = { "2013": ["NAME"] };
	var cbp$1 = { "2012": ["NAICS2012"], "2013": ["NAICS2012"] };
	var requiredVariables = {
		acs5: acs5$1,
		ewks: ewks$1,
		acs3: acs3$1,
		nonemp_old: nonemp_old$1,
		sf1: sf1$1,
		sf3: sf3$1,
		acs1: acs1$1,
		pubschlfin: pubschlfin$1,
		language: language$1,
		cbp: cbp$1,
		"pep/agesex": { "2014": ["AGE", "DATE"] },
		"pep/natmonthly": { "2015": ["MONTHLY"] },
		"pep/cochar6": { "2013": ["AGEGRP", "SEX", "DATE", "HISP", "RACE6"], "2014": ["AGEGRP", "SEX", "DATE", "HISP", "RACE6"] },
		"pep/stchar6": { "2013": ["AGE", "SEX", "DATE", "HISP", "RACE6"], "2014": ["AGE", "SEX", "DATE", "HISP", "RACE6"] },
		"pep/prcagesex": { "2013": ["AGE", "SEX", "DATE"], "2014": ["AGE", "SEX", "DATE"] },
		"pep/agespecial6": { "2014": ["DATE", "RACE6"] },
		"pep/housing": { "2013": ["DATE"], "2014": ["DATE"] },
		"pep/monthlynatchar5": { "2013": ["AGE", "SEX", "DATE", "RACE5", "HISP"], "2014": ["AGE", "SEX", "DATE", "RACE5", "HISP"] },
		"acs5/profile": { "2013": ["NAME"], "2014": ["NAME"] },
		"pep/prmagesex": { "2013": ["AGEGRP", "SEX", "DATE"], "2014": ["AGEGRP", "SEX", "DATE"] },
		"pep/prm": { "2013": ["DATE", "POP"], "2014": ["DATE", "POP"] },
		"acs3/profile": { "2012": ["NAME"], "2013": ["NAME"] },
		"pep/cochar5": { "2013": ["AGEGRP", "SEX", "DATE", "RACE5", "HISP"], "2014": ["AGEGRP", "SEX", "DATE", "RACE5", "HISP"] },
		"pep/stchar5": { "2013": ["AGE", "SEX", "DATE", "RACE5", "HISP"], "2014": ["AGE", "SEX", "DATE", "RACE5", "HISP"] },
		"popproj/deaths": { "2012": ["YEAR", "TOTAL_DEATHS", "RACE_HISP", "SEX"] },
		"pep/monthlynatchar6": { "2013": ["AGE", "SEX", "DATE", "RACE6", "HISP"], "2014": ["AGE", "SEX", "DATE", "HISP", "RACE6"] },
		"acs1/profile": { "2012": ["NAME"], "2013": ["NAME"], "2014": ["NAME"] },
		"popproj/births": { "2012": ["YEAR", "RACE_HISP", "BIRTHS", "SEX"] },
		"pep/agespecialpr": { "2014": ["DATE"] },
		"pep/subcty": { "2013": ["DATE", "NAME"], "2014": ["DATE", "NAME"] },
		"pep/cty": { "2013": ["DATE"], "2014": ["DATE"] },
		"popproj/nim": { "2012": ["YEAR", "TOTAL_NIM", "RACE_HISP", "SEX"] },
		"pep/agespecial5": { "2014": ["DATE", "RACE5"] },
		"acs1/cd113": { "2011": ["NAME"] },
		"pep/natstprc": { "2013": ["DATE"], "2014": ["DATE"] },
		"popproj/pop": { "2012": ["YEAR", "RACE", "SEX", "TOTAL_POP"] }
	};

	var defaultEndpoints$1 = {
	  acsVariableDictionaryURL: 'https://api.census.gov/data/',
	  geoCoderUrl: 'https://geocoding.geo.census.gov/geocoder/geographies/',
	  tigerwebUrl: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/',
	  censusUrl: 'https://api.census.gov/data/'
	};

	var CensusSummaryRequest = function () {
	  function CensusSummaryRequest() {
	    classCallCheck(this, CensusSummaryRequest);
	  }

	  createClass(CensusSummaryRequest, null, [{
	    key: 'parseSummaryResponse',
	    value: function parseSummaryResponse(request, response) {
	      request.data = [];

	      if (request.sublevel) {
	        // If sublevel is set to true, our 'data' property
	        // will be an array of objects for each sublevel item.
	        var currentVariable = void 0;
	        var currentResponseItem = void 0;
	        var currentDataObject = void 0;

	        for (var i = 1; i < response.length; i++) {
	          currentDataObject = {};
	          currentResponseItem = response[i];

	          if (['sf1', 'sf3'].indexOf(request.api) && request.year.toString() == '1990') {
	            // Hardcoded rule for decennial survey of 1990
	            currentDataObject['name'] = currentResponseItem[response[0].indexOf('ANPSADPI')];
	          } else {
	            // ACS survey & SF survey not 1990
	            currentDataObject['name'] = currentResponseItem[response[0].indexOf('NAME')];
	          }

	          var stateIndex = response[0].indexOf('state');
	          var countyIndex = response[0].indexOf('county');
	          var tractIndex = response[0].indexOf('tract');
	          var blockGroupIndex = response[0].indexOf('block group');
	          var placeIndex = response[0].indexOf('place');

	          if (stateIndex >= 0) {
	            currentDataObject['state'] = currentResponseItem[stateIndex];
	          }

	          if (countyIndex >= 0) {
	            currentDataObject['county'] = currentResponseItem[countyIndex];
	          }

	          if (tractIndex >= 0) {
	            currentDataObject['tract'] = currentResponseItem[tractIndex];
	          }

	          if (blockGroupIndex >= 0) {
	            currentDataObject['blockGroup'] = currentResponseItem[blockGroupIndex];
	          }

	          if (placeIndex >= 0) {
	            currentDataObject['place'] = currentResponseItem[placeIndex];
	          }

	          for (var j = 0; j < request.variables.length; j++) {
	            currentVariable = request.variables[j];

	            var validVariable = CensusRequestUtils.parseToValidVariable(currentVariable, request.api, request.year);
	            var index = response[0].indexOf(validVariable);
	            var intermediateVar = currentResponseItem[index];

	            if (intermediateVar) {
	              currentDataObject[currentVariable] = intermediateVar;
	            }

	            // Variable is Normalizeable
	            if (intermediateVar && CensusRequestUtils.isNormalizable(currentVariable) && CensusRequestUtils.parseToValidVariable('population', request.api, request.year)) {

	              var _validVariable = CensusRequestUtils.parseToValidVariable('population', request.api, request.year);
	              var _index = response[0].indexOf(_validVariable);
	              var property = currentVariable + '_normalized';

	              currentDataObject[property] = currentDataObject[currentVariable] / currentResponseItem[_index];
	            }
	          }

	          request.data.push(currentDataObject);
	        }
	      } else {
	        // We don't have sublevel, so we just grab the single response
	        var _currentVariable = void 0;
	        var _currentDataObject = {};

	        for (var _i = 0; _i < request.variables.length; _i++) {
	          _currentVariable = request.variables[_i];

	          if (CensusRequestUtils.parseToValidVariable(_currentVariable, request.api, request.year)) {
	            var _validVariable2 = CensusRequestUtils.parseToValidVariable(_currentVariable, request.api, request.year);
	            var _index2 = response[0].indexOf(_validVariable2);

	            _currentDataObject[_currentVariable] = response[1][_index2];
	          }

	          if (_currentDataObject[_currentVariable] && CensusRequestUtils.isNormalizable(_currentVariable) && CensusRequestUtils.parseToValidVariable('population', request.api, request.year)) {

	            var _validVariable3 = CensusRequestUtils.parseToValidVariable('population', request.api, request.year);
	            var _index3 = response[1].indexOf(_validVariable3);
	            var _property = _currentVariable + '_normalized';

	            _currentDataObject[_property] = _currentDataObject[_currentVariable] / response[1][_index3];
	          }

	          request.data.push(_currentDataObject);
	        }
	      }

	      delete request.geocoded;

	      return request;
	    }
	  }, {
	    key: 'request',
	    value: function request(_request) {
	      var dfr = $.Deferred();

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      var cascade = false;
	      var qualifiers = 'for=';

	      if (_request.sublevel) {
	        var level = _request.level === 'blockGroup' ? 'block+group' : _request.level;

	        switch (_request.container) {
	          case 'us':
	            qualifiers += level + ':*';
	            break;
	          case 'place':
	          case 'state':
	            qualifiers += level + (':*&in=state:' + _request.state);
	            if (_request.level == 'blockGroup') {
	              qualifiers += '+county:' + _request.county;
	            }
	            break;
	          case 'county':
	            qualifiers += level + (':*&in=county:' + _request.county + '+state:' + _request.state);
	            break;
	          case 'tract':
	            qualifiers += level + (':*&in=tract:' + _request.tract + '+county:' + _request.county + '+state:' + _request.state);
	            break;
	        }
	      }

	      // Only do this if the previous switch had no effect
	      // (i.e. no contianer)
	      if (qualifiers == 'for=') {
	        switch (_request.level) {
	          case 'us':
	            // If sublevel, add the appropriate for and attach the in
	            if (_request.sublevel) {
	              qualifiers += 'state:*';
	              cascade = true;
	            } else {
	              qualifiers += 'us:1';
	            }

	            break;
	          case 'blockGroup':
	            if (_request.sublevel) {
	              // Can't do this. No levels beneath. We'll set the sublevel to false here
	              _request.sublevel = false;
	            }

	            qualifiers += 'block+Group:' + _request.blockGroup;

	            if (!cascade) {
	              qualifiers += '&in=';
	              cascade = true;
	            }

	          case 'tract':
	            // If sublevel, add the appropriate for and attach the in
	            // We also check the cascade tag so we don't do this twice.
	            if (_request.sublevel && !cascade) {
	              qualifiers += 'block+Group:*&in=';
	              cascade = true;
	            }

	            qualifiers += 'tract:' + _request.tract;

	            if (!cascade) {
	              qualifiers += '&in=';
	              cascade = true;
	            } else {
	              qualifiers += '+';
	            }

	          case 'county':
	            // If sublevel, add the appropriate for and attach the in
	            // We also check the cascade tag so we don't do this twice.
	            if (_request.sublevel && !cascade) {
	              qualifiers += 'tract:*&in=';
	              cascade = true;
	            }

	            qualifiers += 'county:' + _request.county;
	            if (!cascade) {
	              qualifiers += '&in=';
	              cascade = true;
	            } else {
	              qualifiers += '+';
	            }

	          case 'place':
	            // If sublevel, add the appropriate for and attach the in
	            // Check for cascade so we don't do this twice
	            if (_request.sublevel && !cascade) {
	              qualifiers += 'place:*&in=';
	              cascade = true;
	            } else if (!cascade) {
	              //We only use place in the for, for the moment
	              qualifiers += 'place:' + _request.place + '&in=';
	              cascade = true;
	            }

	          case 'state':
	            // If sublevel, add the appropriate for and attach the in
	            // We also check the cascade tag so we don't do this twice.
	            if (_request.sublevel && !cascade) {
	              qualifiers += 'county:*&in=';
	              cascade = true;
	            }

	            qualifiers += 'state:' + _request.state;
	            break;
	        }
	      }

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = _request.variables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var variable = _step.value;

	          if (CensusRequestUtils.isNormalizable(variable)) {
	            // add acs population variable
	            if (_request.variables.indexOf('population') < 0) {
	              //We have a variable that is normalizable, but no population in the request.
	              //Grab the population
	              _request.variables.push('population');
	            }

	            //We have normalizable variables AND a request for population, we can break the for loop now
	            break;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      var variables = _request.variables;
	      var hasPopulation = false;

	      for (var _i2 = 0; _i2 < variables.length; _i2++) {
	        if (CensusRequestUtils.isNormalizable(variables[_i2]) && !hasPopulation) {
	          // add acs population variable
	          if (_request.variables.indexOf('population') < 0) {
	            //We have a variable that is normalizable, but no population in the request.
	            //Grab the population
	            _request.variables.push('population');
	          }

	          hasPopulation = true;
	        }

	        // Convert the aliased variables
	        var variableIntermediate = CensusRequestUtils.parseToValidVariable(_request.variables[_i2], _request.api, _request.year);

	        if (variableIntermediate) {
	          _request.variables[_i2] = variableIntermediate;
	        }
	      }

	      // Add the Required Variables
	      if (requiredVariables[_request.api] && requiredVariables[_request.api][_request.year]) {
	        for (var i = 0; i < requiredVariables[_request.api][_request.year].length; i++) {
	          if (_request.variables.indexOf(requiredVariables[_request.api][_request.year][i]) === -1) {
	            _request.variables.unshift(requiredVariables[_request.api][_request.year][i]);
	          }
	        }
	      }

	      // Add the variables to request string
	      var variableString = _request.variables.join(',');

	      // URL for ACS5 request (summary file)
	      var url = defaultEndpoints$1.censusUrl;
	      url += _request.year + '/' + _request.api + '?get=' + variableString + '&' + qualifiers + '&key=' + _request.apikey;

	      CitySdk.ajaxRequest(url, false).then(function (response) {
	        _request = CensusSummaryRequest.parseSummaryResponse(_request, response);
	        dfr.resolve(_request);
	      }, onRequestError);

	      return dfr.promise();
	    }
	  }]);
	  return CensusSummaryRequest;
	}();

	var current = { "url": "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/{mapserver}/query", "mapServers": { "state": 84, "county": 86, "tract": 8, "blockGroup": 10, "blocks": 12, "place": 28 } };
	var acs2014 = { "url": "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2014/MapServer/{mapserver}/query", "mapServers": { "state": 82, "county": 84, "tract": 8, "blockGroup": 10, "place": 26 } };
	var acs2013 = { "url": "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2013/MapServer/{mapserver}/query", "mapServers": { "state": 82, "county": 84, "tract": 8, "blockGroup": 10, "place": 26 } };
	var census2010 = { "url": "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2010/MapServer/{mapserver}/query", "mapServers": { "state": 98, "county": 100, "tract": 14, "blockGroup": 16, "blocks": 18, "place": 34 } };
	var servers = {
		current: current,
		acs2014: acs2014,
		acs2013: acs2013,
		census2010: census2010
	};

	var type = "FeatureCollection";
	var features = [{ "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[-49.5703125, 41.77131167976407], [-152.2265625, 77.23507365492472], [-221.1328125, 19.973348786110602], [-135.703125, -16.97274101999901], [-49.5703125, 41.77131167976407]]] } }];
	var usBoundingBox = {
		type: type,
		features: features
	};

	var defaultTigerwebApi = 'current';
	var spatialReferenceCode = 4326;

	var CensusTigerwebRequest = function () {
	  function CensusTigerwebRequest() {
	    classCallCheck(this, CensusTigerwebRequest);
	  }

	  createClass(CensusTigerwebRequest, null, [{
	    key: 'getContainerGeometry',
	    value: function getContainerGeometry(request) {
	      var dfr = $.Deferred();
	      var mapServer = request.tigerwebApiInfo.mapServers[request.container];
	      var tigerwebUrl = request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
	      var tigerwebRequest = request.tigerwebRequest;

	      tigerwebRequest.geometry = request.lng + "," + request.lat;
	      tigerwebRequest.geometryType = "esriGeometryPoint";
	      tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      CitySdk.postRequest(tigerwebUrl, tigerwebRequest).then(function (response) {
	        var features = response.features;

	        // Grab our container ESRI geography, attach it to our request,
	        // and call this function again.
	        if (request.container.toLowerCase() === "us") {
	          request.containerGeometry = CitySdk.geoToEsri(usBoundingBox)[0].geometry;
	        } else {
	          request.containerGeometry = features[0].geometry;
	        }

	        dfr.resolve(request);
	      }, onRequestError);

	      return dfr.promise();
	    }
	  }, {
	    key: 'getGeoData',
	    value: function getGeoData(request) {
	      // We have a sublevel request with a container,
	      // AND we've already grabbed the container's ESRI json
	      var dfr = $.Deferred();
	      var mapServer = request.tigerwebApiInfo.mapServers[request.level];
	      var tigerwebUrl = request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
	      var tigerwebRequest = request.tigerwebRequest;

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      tigerwebRequest.geometry = JSON.stringify(request.containerGeometry);
	      tigerwebRequest.geometryType = "esriGeometryPolygon";

	      tigerwebRequest.spatialRel = request.container === "place" || request.container === "geometry" ? "esriSpatialRelIntersects" : "esriSpatialRelContains";

	      CitySdk.postRequest(tigerwebUrl, tigerwebRequest).then(function (response) {
	        dfr.resolve(response);
	      }, onRequestError);

	      return dfr.promise();
	    }
	  }, {
	    key: 'request',
	    value: function request(_request) {
	      if (!_request.tigerwebApi) {
	        _request.tigerwebApi = defaultTigerwebApi;
	      }

	      _request.tigerwebApiInfo = servers[_request.tigerwebApi];
	      _request.tigerwebRequest = {
	        f: "json",
	        where: "",
	        outFields: "*",
	        outSR: spatialReferenceCode,
	        inSR: spatialReferenceCode
	      };

	      var sublevelRequested = _request.hasOwnProperty('sublevel') && _request.sublevel;

	      var dfr = $.Deferred();

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      var onRequestSuccess = function onRequestSuccess(response) {
	        dfr.resolve(CitySdk.esriToGeo(response));
	      };

	      if (_request.container && sublevelRequested && !_request.containerGeometry) {
	        CensusTigerwebRequest.getContainerGeometry(_request).then(CensusTigerwebRequest.getGeoData, onRequestError).then(onRequestSuccess, onRequestError);
	      } else if (sublevelRequested) {
	        _request.container = _request.level;

	        switch (_request.level) {
	          case 'us':
	            _request.level = 'state';
	            break;
	          case 'state':
	            _request.level = 'county';
	            break;
	          case 'county':
	          case 'place':
	            _request.level = 'tract';
	            break;
	          default:
	            _request.level = 'blockGroup';
	        }

	        this.getContainerGeometry(_request).then(CensusTigerwebRequest.getGeoData, onRequestError).then(onRequestSuccess, onRequestError);
	      } else {
	        var mapServer = _request.tigerwebApiInfo.mapServers[_request.level];
	        var tigerwebUrl = _request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
	        var tigerwebRequest = _request.tigerwebRequest;

	        tigerwebRequest.geometry = _request.lng + "," + _request.lat;
	        tigerwebRequest.geometryType = "esriGeometryPoint";
	        tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

	        CitySdk.postRequest(tigerwebUrl, tigerwebRequest).then(onRequestSuccess, onRequestError);
	      }

	      return dfr.promise();
	    }
	  }]);
	  return CensusTigerwebRequest;
	}();

	var CensusRequest = function () {
	  function CensusRequest(apikey) {
	    classCallCheck(this, CensusRequest);

	    this.apikey = apikey;
	  }

	  createClass(CensusRequest, null, [{
	    key: 'request',
	    value: function request(_request) {
	      var dfr = $.Deferred();

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      var onRequestSuccess = function onRequestSuccess(response) {
	        dfr.resolve(response);
	      };

	      var onRequestHasLatLng = function onRequestHasLatLng(request) {
	        CensusRequestUtils.getFipsFromLatLng(request).then(CensusRequestValidator.validateGeoVariables, onRequestError).then(CensusSummaryRequest.request, onRequestError).then(CensusTigerwebRequest.request, onRequestError).then(CensusGeoRequest.handleTigerwebResponse, onRequestError).then(onRequestSuccess, onRequestError);
	      };

	      _request = CensusRequestValidator.validate(_request);

	      if (!_request.lat && !_request.lng) {
	        // Get the coordinates, then using the coordinates, get
	        // the FIPS codes for state, tract, county and blockGroup.
	        CensusRequestUtils.getLatLng(_request).then(onRequestHasLatLng, onRequestError);
	      } else {
	        onRequestHasLatLng(_request);
	      }

	      return dfr.promise();
	    }
	  }]);
	  return CensusRequest;
	}();

	var CensusGeoRequest = function () {
	  function CensusGeoRequest() {
	    classCallCheck(this, CensusGeoRequest);
	  }

	  createClass(CensusGeoRequest, null, [{
	    key: 'supplementalRequest',
	    value: function supplementalRequest(req, res, featureIndex) {
	      var i = featureIndex;
	      var dfr = $.Deferred();

	      var features = res.features;
	      var variables = req.variables;

	      //Sometimes cities span multiple counties. In this case, we sometimes miss data due to the
	      //limited nature of the Census API's geography hierarchy. This will issue supplemental requests
	      //to ensure we have data for all of our geojson entities
	      var suppRequest = {
	        "state": features[i].properties["STATE"],
	        "tract": features[i].properties["TRACT"],
	        "county": features[i].properties["COUNTY"],
	        "blockGroup": features[i].properties["BLKGRP"],
	        "place": features[i].properties["PLACE"],
	        "lat": parseFloat(features[i].properties.CENTLAT),
	        "lng": parseFloat(features[i].properties.CENTLON),
	        "level": req.level,
	        "year": req.year,
	        "api": req.api,
	        "variables": variables,
	        "featuresIndex": i
	      };

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      CensusRequest.request(suppRequest).then(function (response) {
	        for (var property in response.data[0]) {
	          if (response.data[0].hasOwnProperty(property)) {
	            features[response.featuresIndex].properties[property] = response.data[0][property];

	            if (variables.indexOf(property) !== -1) {
	              res.totals[property] = Number(res.totals[property]) >= 0 ? Number(response.data[0][property]) : 0;
	            }
	          }
	        }

	        dfr.resolve(response);
	      }, onRequestError);

	      return dfr.promise();
	    }
	  }, {
	    key: 'handleTigerwebResponse',
	    value: function handleTigerwebResponse(response) {
	      var dfr = $.Deferred();
	      var resp = response.response;
	      var request = response.request;

	      // Reference dictionary of levels -> geocoder response variables
	      var comparisonVariables = {
	        "tract": "TRACT",
	        "place": "PLACE",
	        "county": "COUNTY",
	        "blockGroup": "BLKGRP"
	      };

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      var onRequestSuccess = function onRequestSuccess(response) {
	        dfr.resolve(response);
	      };

	      if (!resp.totals) {
	        resp.totals = {};
	      }

	      if (request.data) {
	        (function () {
	          var data = request.data;
	          var variables = request.variables;

	          var totals = resp.totals;
	          var features = resp.features;

	          var matchedFeature = void 0;

	          features.forEach(function (f, i) {
	            matchedFeature = data.filter(function (d) {
	              // Ensure we have a direct match for low level items by comparing the higher level items
	              if (request.level === "blockGroup" || request.level === "tract") {
	                var levelMatch = d[request.level] === f.properties[comparisonVariables[request.level]];
	                var tractMatch = d["tract"] === f.properties.TRACT;
	                var countyMatch = d["county"] === f.properties.COUNTY;

	                return levelMatch && tractMatch && countyMatch;
	              } else {
	                return d[request.level] === f.properties[comparisonVariables[request.level]];
	              }
	            });

	            if (matchedFeature.length === 0) {
	              CensusGeoRequest.supplementalRequest(request, resp, i).then(onRequestSuccess, onRequestError);
	            } else if (matchedFeature.length === 1) {
	              setTimeout(function () {
	                // We have matched the feature's tract to a data tract, move the data over
	                matchedFeature = matchedFeature[0];

	                for (var property in matchedFeature) {
	                  if (matchedFeature.hasOwnProperty(property)) {
	                    f.properties[property] = matchedFeature[property];

	                    if (variables.indexOf(property) !== -1) {
	                      totals[property] = Number(totals[property]) >= 0 ? Number(matchedFeature[property]) : 0;
	                    }
	                  }
	                }

	                onRequestSuccess(resp);
	              }, 0);
	            } else {
	              setTimeout(function () {
	                // This usually occurs when a low-level geography entity isn't uniquely identified
	                // by the grep. We'll need to add more comparisons to the grep to clear this issue up.
	                console.log("Multiple matched features: ");
	                console.log(f);
	                console.log(matchedFeature);

	                onRequestSuccess(resp);
	              }, 0);
	            }
	          });
	        })();
	      }

	      return dfr.promise();
	    }
	  }, {
	    key: 'request',
	    value: function request(_request) {
	      var dfr = $.Deferred();

	      var onRequestError = function onRequestError(reason) {
	        dfr.reject(reason);
	      };

	      var onRequestSuccess = function onRequestSuccess(response) {
	        dfr.resolve(response);
	      };

	      CensusRequest.request(_request).then(CensusTigerwebRequest.request, onRequestError).then(CensusGeoRequest.handleTigerwebResponse, onRequestError).then(onRequestSuccess, onRequestError);

	      return dfr.promise();
	    }
	  }]);
	  return CensusGeoRequest;
	}();

	return CensusGeoRequest;

}));
//# sourceMappingURL=census-geo-request.js.map