(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('promise'), require('terraformer'), require('terraformer-arcgis-parser'), require('jquery')) :
	typeof define === 'function' && define.amd ? define(['promise', 'terraformer', 'terraformer-arcgis-parser', 'jquery'], factory) :
	(global.CensusTigerwebRequest = factory(global.Promise,global.Terraformer,global.Terraformer.ArcGIS,global.$));
}(this, function (Promise$1,Terraformer,ArcGIS,$) { 'use strict';

	Promise$1 = 'default' in Promise$1 ? Promise$1['default'] : Promise$1;
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
	   * @function getStateCapitalCoords
	   * @static
	   *
	   * @description Gets the coordinates of a state's capital
	   * from it's name or 2-letter code.
	   *
	   * @param {string} state Name or 2-letter code of the state
	   * (case insensitive)
	   *
	   * @return {Array} Returns 2-position array of Lat & Long
	   * for the capital of the state. Returns false if no state is found.
	   */


	  createClass(CitySdk, null, [{
	    key: 'getStateCapitalCoords',
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
	     * @description Converts ESRI JSON to GeoJSON
	     *
	     * @param {string} esriJson
	     *
	     * @returns {{type: string, features: Array}}
	     */

	  }, {
	    key: 'esriToGeo',
	    value: function esriToGeo(esriJson) {
	      if (!('features' in esriJson)) {
	        // data is missing
	        return null;
	      }

	      var features = esriJson.features;

	      var geojson = {
	        'type': 'FeatureCollection',
	        'features': []
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
	     */

	  }, {
	    key: 'geoToEsri',
	    value: function geoToEsri(geoJson) {
	      return Terraformer.ArcGIS.convert(geoJson);
	    }
	  }]);
	  return CitySdk;
	}();

	var nodeEnv = typeof window === 'undefined' && typeof module !== 'undefined' && module.exports;
	var request = nodeEnv ? require('request') : {};

	var CitySdkHttp = function () {
	  function CitySdkHttp() {
	    classCallCheck(this, CitySdkHttp);
	  }

	  createClass(CitySdkHttp, null, [{
	    key: 'get',
	    value: function get(url, jsonp) {
	      if (!nodeEnv) {
	        return CitySdkHttp.ajaxGet(url, jsonp);
	      }

	      return new Promise$1(function (resolve, reject) {
	        request.get({ url: url, rejectUnauthorized: false }, function (error, response) {
	          if (!error) {
	            try {
	              resolve(JSON.parse(response.body));
	            } catch (e) {
	              throw new Error(e);
	            }
	          } else {
	            reject(error);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'post',
	    value: function post(url, data) {
	      if (!nodeEnv) {
	        return CitySdkHttp.ajaxPost(url, data);
	      }

	      return new Promise$1(function (resolve, reject) {
	        request.post({ url: url, form: data, rejectUnauthorized: false }, function (error, response) {
	          if (!error) {
	            try {
	              resolve(JSON.parse(response.body));
	            } catch (e) {
	              throw new Error(e);
	            }
	          } else {
	            reject(error);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'ajaxGet',
	    value: function ajaxGet(url, jsonp) {
	      return new Promise$1(function (resolve, reject) {
	        if (jsonp) {
	          $.ajax({ url: url, method: 'GET', dataType: 'jsonp' }).done(function (response) {
	            return resolve(response);
	          }).fail(function (reason) {
	            return reject(reason);
	          });
	        } else {
	          $.getJSON(url).done(function (response) {
	            return resolve(response);
	          }).fail(function (reason) {
	            return reject(reason);
	          });
	        }
	      });
	    }
	  }, {
	    key: 'ajaxPost',
	    value: function ajaxPost(url, data) {
	      return new Promise$1(function (resolve, reject) {
	        $.ajax({ type: 'POST', url: url, data: data, dataType: 'json' }).done(function (response) {
	          return resolve(response);
	        }).fail(function (reason) {
	          return reject(reason);
	        });
	      });
	    }
	  }]);
	  return CitySdkHttp;
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
	      var mapServer = request.tigerwebApiInfo.mapServers[request.container];
	      var tigerwebUrl = request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
	      var tigerwebRequest = request.tigerwebRequest;

	      tigerwebRequest.geometry = request.lng + "," + request.lat;
	      tigerwebRequest.geometryType = "esriGeometryPoint";
	      tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        CitySdkHttp.post(tigerwebUrl, tigerwebRequest).then(function (response) {
	          var features = response.features;

	          // Grab our container ESRI geography, attach it to our request,
	          // and call this function again.
	          if (request.container.toLowerCase() === "us") {
	            request.containerGeometry = CitySdk.geoToEsri(usBoundingBox)[0].geometry;
	          } else {
	            request.containerGeometry = features[0].geometry;
	          }

	          resolve(request);
	        }).catch(function (reason) {
	          return reject(reason);
	        });
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }, {
	    key: 'getGeoData',
	    value: function getGeoData(request) {
	      // We have a sublevel request with a container,
	      // AND we've already grabbed the container's ESRI json
	      var mapServer = request.tigerwebApiInfo.mapServers[request.level];
	      var tigerwebUrl = request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
	      var tigerwebRequest = request.tigerwebRequest;

	      tigerwebRequest.geometry = JSON.stringify(request.containerGeometry);
	      tigerwebRequest.geometryType = "esriGeometryPolygon";

	      tigerwebRequest.spatialRel = request.container === "place" || request.container === "geometry" ? "esriSpatialRelIntersects" : "esriSpatialRelContains";

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        CitySdkHttp.post(tigerwebUrl, tigerwebRequest).then(function (response) {
	          resolve(response);
	        }).catch(function (reason) {
	          return reject(reason);
	        });
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }, {
	    key: 'request',
	    value: function request(_request) {
	      var _this = this;

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

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        if (_request.container && sublevelRequested && !_request.containerGeometry) {
	          CensusTigerwebRequest.getContainerGeometry(_request).then(CensusTigerwebRequest.getGeoData).then(function (response) {
	            return resolve({ response: CitySdk.esriToGeo(response), request: _request });
	          }).catch(function (reason) {
	            return reject(reason);
	          });
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

	          _this.getContainerGeometry(_request).then(CensusTigerwebRequest.getGeoData).then(function (response) {
	            return resolve({ response: CitySdk.esriToGeo(response), request: _request });
	          }).catch(function (reason) {
	            return reject(reason);
	          });
	        } else {
	          var mapServer = _request.tigerwebApiInfo.mapServers[_request.level];
	          var tigerwebUrl = _request.tigerwebApiInfo.url.replace('{mapserver}', mapServer);
	          var tigerwebRequest = _request.tigerwebRequest;

	          tigerwebRequest.geometry = _request.lng + "," + _request.lat;
	          tigerwebRequest.geometryType = "esriGeometryPoint";
	          tigerwebRequest.spatialRel = "esriSpatialRelIntersects";

	          CitySdkHttp.post(tigerwebUrl, tigerwebRequest).then(function (response) {
	            return resolve({ response: CitySdk.esriToGeo(response), request: _request });
	          }).catch(function (reason) {
	            return reject(reason);
	          });
	        }
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }]);
	  return CensusTigerwebRequest;
	}();

	return CensusTigerwebRequest;

}));
//# sourceMappingURL=census-tigerweb-request.js.map