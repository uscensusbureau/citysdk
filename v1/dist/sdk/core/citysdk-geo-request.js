(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('promise'), require('terraformer'), require('terraformer-arcgis-parser'), require('jquery')) :
	typeof define === 'function' && define.amd ? define(['promise', 'terraformer', 'terraformer-arcgis-parser', 'jquery'], factory) :
	(global.CitySdkGeoRequest = factory(global.Promise,global.Terraformer,global.Terraformer.ArcGIS,global.$));
}(this, function (Promise$1,Terraformer,ArcGIS,$) { 'use strict';

	Promise$1 = 'default' in Promise$1 ? Promise$1['default'] : Promise$1;
	Terraformer = 'default' in Terraformer ? Terraformer['default'] : Terraformer;
	ArcGIS = 'default' in ArcGIS ? ArcGIS['default'] : ArcGIS;
	$ = 'default' in $ ? $['default'] : $;

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

	var population_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0010001","description":"Total population in 1990"};var population_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P001001","description":"Total population in 2000"};var population_2010={"api":{"sf1":[2010]},"variable":"PCT0120001","description":"Total population in 2010"};var population_families_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0020001","description":"The number of families in 1990"};var population_families_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P031001","description":"The number of families in 2000"};var population_families_2010={"api":{"sf1":[2010]},"variable":"PCT0160002","description":"The number of families in 2010"};var population_male_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0050001","description":"The number of males in 1990"};var population_female_1990={"api":{"sf1":[1990,2010]},"variable":"P0050002","description":"The number of females in 1990"};var population_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012002","description":"The number of males in 2000"};var population_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012026","description":"The number of females in 2000"};var population_male_2010={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0120002","description":"The number of males in 2010"};var population_female_2010={"api":{"sf1":[1990,2010]},"variable":"P0120026","description":"The number of females in 2010"};var age_under_1_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110001","description":"The number of persons under 1 year old in 1990"};var age_1_to_2_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110002","description":"The number of persons ages 1 to 2 years old in 1990"};var age_3_to_4_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110003","description":"The number of persons ages 3 to 4 years old in 1990"};var age_5_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110004","description":"The number of persons age 5 years old in 1990"};var age_6_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110005","description":"The number of persons ages 6 years old in 1990"};var age_7_to_9_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110006","description":"The number of persons ages 7 to 9 years old in 1990"};var age_10_to_11_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110007","description":"The number of persons ages 10 to 11 years old in 1990"};var age_12_to_13_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110008","description":"The number of persons ages 12 to 13 years old in 1990"};var age_14_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110009","description":"The number of persons age 14 years old in 1990"};var age_15_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110010","description":"The number of persons age 15 years old in 1990"};var age_16_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110011","description":"The number of persons age 16 years old in 1990"};var age_17_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110012","description":"The number of persons age 17 years old in 1990"};var age_18_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110013","description":"The number of persons age 18 years old in 1990"};var age_19_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110014","description":"The number of persons age 19 years old in 1990"};var age_20_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110015","description":"The number of persons age 20 years old in 1990"};var age_21_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0110016","description":"The number of persons age 21 years old in 1990"};var age_22_to_24_1990={"api":{"sf1":[1990,2010]},"variable":"P0110017","description":"The number of persons ages 22 to 24 years old in 1990"};var age_25_to_29_1990={"api":{"sf1":[1990,2010]},"variable":"P0110018","description":"The number of persons ages 25 to 29 years old in 1990"};var age_30_to_34_1990={"api":{"sf1":[1990,2010]},"variable":"P0110019","description":"The number of persons ages 30 to 34 years old in 1990"};var age_35_to_39_1990={"api":{"sf1":[1990,2010]},"variable":"P0110020","description":"The number of persons ages 35 to 39 years old in 1990"};var age_40_to_44_1990={"api":{"sf1":[1990,2010]},"variable":"P0110021","description":"The number of persons ages 40 to 44 years old in 1990"};var age_45_to_49_1990={"api":{"sf1":[1990,2010]},"variable":"P0110022","description":"The number of persons ages 45 to 49 years old in 1990"};var age_50_to_54_1990={"api":{"sf1":[1990,2010]},"variable":"P0110023","description":"The number of persons ages 50 to 54 years old in 1990"};var age_55_to_59_1990={"api":{"sf1":[1990,2010]},"variable":"P0110024","description":"The number of persons ages 55 to 59 years old in 1990"};var age_60_to_61_1990={"api":{"sf1":[1990,2010]},"variable":"P0110025","description":"The number of persons ages 60 to 61 years old in 1990"};var age_62_to_64_1990={"api":{"sf1":[1990,2010]},"variable":"P0110026","description":"The number of persons ages 62 to 64 years old in 1990"};var age_65_to_69_1990={"api":{"sf1":[1990,2010]},"variable":"P0110027","description":"The number of persons ages 65 to 69 years old in 1990"};var age_70_to_74_1990={"api":{"sf1":[1990,2010]},"variable":"P0110028","description":"The number of persons ages 70 to 74 years old in 1990"};var age_75_to_79_1990={"api":{"sf1":[1990,2010]},"variable":"P0110029","description":"The number of persons ages 75 to 79 years old in 1990"};var age_80_to_84_1990={"api":{"sf1":[1990,2010]},"variable":"P0110030","description":"The number of persons ages 80 to 84 years old in 1990"};var age_under_5_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012003","description":"The number of male persons ages under 5 years old in 2000"};var age_5_to_9_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012004","description":"The number of male persons ages 5 to 9 years old in 2000"};var age_10_to_14_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012005","description":"The number of male persons ages 10 to 14 years old in 2000"};var age_15_to_17_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012006","description":"The number of male persons ages 15 to 17 years old in 2000"};var age_18_to_19_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012007","description":"The number of male persons ages 18 to 19 years old in 2000"};var age_20_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012008","description":"The number of male persons age 20 years old in 2000"};var age_21_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012009","description":"The number of male persons age 21 years old in 2000"};var age_22_to_24_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012010","description":"The number of male persons ages 22 to 24 years old in 2000"};var age_25_to_29_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012011","description":"The number of male persons ages 25 to 29 years old in 2000"};var age_30_to_34_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012012","description":"The number of male persons ages 30 to 34 years old in 2000"};var age_35_to_39_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012013","description":"The number of male persons ages 35 to 39 years old in 2000"};var age_40_to_44_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012014","description":"The number of male persons ages 40 to 44 years old in 2000"};var age_45_to_49_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012015","description":"The number of male persons ages 45 to 49 years old in 2000"};var age_50_to_54_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012016","description":"The number of male persons ages 50 to 54 years old in 2000"};var age_55_to_59_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012017","description":"The number of male persons ages 55 to 59 years old in 2000"};var age_60_to_61_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012018","description":"The number of male persons ages 60 to 61 years old in 2000"};var age_62_to_64_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012019","description":"The number of male persons ages 62 to 64 years old in 2000"};var age_65_to_66_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012020","description":"The number of male persons ages 65 to 66 years old in 2000"};var age_67_to_69_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012021","description":"The number of male persons ages 67 to 69 years old in 2000"};var age_70_to_74_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012022","description":"The number of male persons ages 70 to 74 years old in 2000"};var age_75_to_79_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012023","description":"The number of male persons ages 75 to 79 years old in 2000"};var age_80_to_84_male_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012024","description":"The number of male persons ages 80 to 84 years old in 2000"};var age_under_5_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012027","description":"The number of female persons ages under 5 years old in 2000"};var age_5_to_9_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012028","description":"The number of female persons ages 5 to 9 years old in 2000"};var age_10_to_14_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012029","description":"The number of female persons ages 10 to 14 years old in 2000"};var age_15_to_17_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012030","description":"The number of female persons ages 15 to 17 years old in 2000"};var age_18_to_19_female_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012031","description":"The number of female persons ages 18 to 19 years old in 2000"};var age_20_female_2000={"api":{"sf1":[2000]},"variable":"P012032","description":"The number of female persons age 20 years old in 2000"};var age_21_female_2000={"api":{"sf1":[2000]},"variable":"P012033","description":"The number of female persons age 21 years old in 2000"};var age_22_to_24_female_2000={"api":{"sf1":[2000]},"variable":"P012034","description":"The number of female persons ages 22 to 24 years old in 2000"};var age_25_to_29_female_2000={"api":{"sf1":[2000]},"variable":"P012035","description":"The number of female persons ages 25 to 29 years old in 2000"};var age_30_to_34_female_2000={"api":{"sf1":[2000]},"variable":"P012036","description":"The number of female persons ages 30 to 34 years old in 2000"};var age_35_to_39_female_2000={"api":{"sf1":[2000]},"variable":"P012037","description":"The number of female persons ages 35 to 39 years old in 2000"};var age_40_to_44_female_2000={"api":{"sf1":[2000]},"variable":"P012038","description":"The number of female persons ages 40 to 44 years old in 2000"};var age_45_to_49_female_2000={"api":{"sf1":[2000]},"variable":"P012039","description":"The number of female persons ages 45 to 49 years old in 2000"};var age_50_to_54_female_2000={"api":{"sf1":[2000]},"variable":"P012040","description":"The number of female persons ages 50 to 54 years old in 2000"};var age_55_to_59_female_2000={"api":{"sf1":[2000]},"variable":"P012041","description":"The number of female persons ages 55 to 59 years old in 2000"};var age_60_to_61_female_2000={"api":{"sf1":[2000]},"variable":"P012042","description":"The number of female persons ages 60 to 61 years old in 2000"};var age_62_to_64_female_2000={"api":{"sf1":[2000]},"variable":"P012043","description":"The number of female persons ages 62 to 64 years old in 2000"};var age_65_to_66_female_2000={"api":{"sf1":[2000]},"variable":"P012044","description":"The number of female persons ages 65 to 66 years old in 2000"};var age_67_to_69_female_2000={"api":{"sf1":[2000]},"variable":"P012045","description":"The number of female persons ages 67 to 69 years old in 2000"};var age_70_to_74_female_2000={"api":{"sf1":[2000]},"variable":"P012046","description":"The number of female persons ages 70 to 74 years old in 2000"};var age_75_to_79_female_2000={"api":{"sf1":[2000]},"variable":"P012047","description":"The number of female persons ages 75 to 79 years old in 2000"};var age_80_to_84_female_2000={"api":{"sf1":[2000]},"variable":"P012048","description":"The number of female persons ages 80 to 84 years old in 2000"};var age_under_5_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A003","description":"The number of male persons ages under 5 years old in 2010"};var age_5_to_9_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A004","description":"The number of male persons ages 5 to 9 years old in 2010"};var age_10_to_14_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A005","description":"The number of male persons ages 10 to 14 years old in 2010"};var age_15_to_17_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A006","description":"The number of male persons ages 15 to 17 years old in 2010"};var age_18_to_19_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A007","description":"The number of male persons ages 18 to 19 years old in 2010"};var age_20_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A008","description":"The number of male persons age 20 years old in 2010"};var age_21_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A009","description":"The number of male persons age 21 years old in 2010"};var age_22_to_24_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A010","description":"The number of male persons ages 22 to 24 years old in 2010"};var age_25_to_29_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A011","description":"The number of male persons ages 25 to 29 years old in 2010"};var age_30_to_34_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A012","description":"The number of male persons ages 30 to 34 years old in 2010"};var age_35_to_39_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A013","description":"The number of male persons ages 35 to 39 years old in 2010"};var age_40_to_44_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A014","description":"The number of male persons ages 40 to 44 years old in 2010"};var age_45_to_49_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A015","description":"The number of male persons ages 45 to 49 years old in 2010"};var age_50_to_54_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A016","description":"The number of male persons ages 50 to 54 years old in 2010"};var age_55_to_59_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A017","description":"The number of male persons ages 55 to 59 years old in 2010"};var age_60_to_61_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A018","description":"The number of male persons ages 60 to 61 years old in 2010"};var age_62_to_64_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A019","description":"The number of male persons ages 62 to 64 years old in 2010"};var age_65_to_66_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A020","description":"The number of male persons ages 65 to 66 years old in 2010"};var age_67_to_69_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A021","description":"The number of male persons ages 67 to 69 years old in 2010"};var age_70_to_74_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A022","description":"The number of male persons ages 70 to 74 years old in 2010"};var age_75_to_79_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A023","description":"The number of male persons ages 75 to 79 years old in 2010"};var age_80_to_84_male_2010={"api":{"sf1":[2010,2000]},"variable":"P012A024","description":"The number of male persons ages 80 to 84 years old in 2010"};var age_under_5_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A027","description":"The number of female persons ages under 5 years old in 2010"};var age_5_to_9_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A028","description":"The number of female persons ages 5 to 9 years old in 2010"};var age_10_to_14_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A029","description":"The number of female persons ages 10 to 14 years old in 2010"};var age_15_to_17_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A030","description":"The number of female persons ages 15 to 17 years old in 2010"};var age_18_to_19_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A031","description":"The number of female persons ages 18 to 19 years old in 2010"};var age_20_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A032","description":"The number of female persons age 20 years old in 2010"};var age_21_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A033","description":"The number of female persons age 21 years old in 2010"};var age_22_to_24_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A034","description":"The number of female persons ages 22 to 24 years old in 2010"};var age_25_to_29_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A035","description":"The number of female persons ages 25 to 29 years old in 2010"};var age_30_to_34_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A036","description":"The number of female persons ages 30 to 34 years old in 2010"};var age_35_to_39_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A037","description":"The number of female persons ages 35 to 39 years old in 2010"};var age_40_to_44_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A038","description":"The number of female persons ages 40 to 44 years old in 2010"};var age_45_to_49_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A039","description":"The number of female persons ages 45 to 49 years old in 2010"};var age_50_to_54_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A040","description":"The number of female persons ages 50 to 54 years old in 2010"};var age_55_to_59_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A041","description":"The number of female persons ages 55 to 59 years old in 2010"};var age_60_to_61_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A042","description":"The number of female persons ages 60 to 61 years old in 2010"};var age_62_to_64_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A043","description":"The number of female persons ages 62 to 64 years old in 2010"};var age_65_to_66_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A044","description":"The number of female persons ages 65 to 66 years old in 2010"};var age_67_to_69_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A045","description":"The number of female persons ages 67 to 69 years old in 2010"};var age_70_to_74_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A046","description":"The number of female persons ages 70 to 74 years old in 2010"};var age_75_to_79_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A047","description":"The number of female persons ages 75 to 79 years old in 2010"};var age_80_to_84_female_2010={"api":{"sf1":[2010,2000]},"variable":"P012A048","description":"The number of female persons ages 80 to 84 years old in 2010"};var race_hispanic_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0080001","description":"Population (Hispanic) in 1990"};var race_asian_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0060004","description":"Population (Asian) in 1990"};var race_other_1990={"api":{"sf1":[1990,2010]},"variable":"P0060005","description":"Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 1990"};var race_hispanic_no_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090001","description":"Population (Hispanic No) in 1990"};var race_hispanic_mexican_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090002","description":"Population (Hispanic Mexican) in 1990"};var race_hispanic_puerto_rican_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090003","description":"Population (Hispanic Puerto Rican) in 1990"};var race_hispanic_cuban_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090004","description":"Population (Hispanic Cuban) in 1990"};var race_hispanic_other_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0090005","description":"Population (Hispanic Other) in 1990"};var race_white_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0070001","description":"Population (White) in 1990"};var race_black_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0070002","description":"Population (Black) in 1990"};var race_american_indian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070003","description":"Population (American Indian) in 1990"};var race_eskimo_1990={"api":{"sf1":[1990,2010]},"variable":"P0070004","description":"Population (Eskimo) in 1990"};var race_aleutian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070005","description":"Population (Aleutian) in 1990"};var race_chinese_1990={"api":{"sf1":[1990,2010]},"variable":"P0070006","description":"Population (Chinese) in 1990"};var race_filipino_1990={"api":{"sf1":[1990,2010]},"variable":"P0070007","description":"Population (Filipino) in 1990"};var race_japanese_1990={"api":{"sf1":[1990,2010]},"variable":"P0070008","description":"Population (Japanese) in 1990"};var race_asian_indian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070009","description":"Population (Asian Indian) in 1990"};var race_korean_1990={"api":{"sf1":[1990,2010]},"variable":"P0070010","description":"Population (Korean) in 1990"};var race_vietnamese_1990={"api":{"sf1":[1990,2010]},"variable":"P0070011","description":"Population (Vietnamese) in 1990"};var race_cambodian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070012","description":"Population (Cambodian) in 1990"};var race_hmong_1990={"api":{"sf1":[1990,2010]},"variable":"P0070013","description":"Population (Hmong) in 1990"};var race_laotian_1990={"api":{"sf1":[1990,2010]},"variable":"P0070014","description":"Population (Laotian) in 1990"};var race_thai_1990={"api":{"sf1":[1990,2010]},"variable":"P0070015","description":"Population (Thai) in 1990"};var race_other_asian_1990={"api":{"sf1":[1990]},"variable":"P0070016","description":"Population (Other Asian) in 1990"};var race_hawaiian_1990={"api":{"sf1":[1990]},"variable":"P0070017","description":"Population (Hawaiian) in 1990"};var race_samoan_1990={"api":{"sf1":[1990]},"variable":"P0070018","description":"Population (Samoan) in 1990"};var race_tongan_1990={"api":{"sf1":[1990]},"variable":"P0070019","description":"Population (Tongan) in 1990"};var race_other_polynesian_1990={"api":{"sf1":[1990]},"variable":"P0070020","description":"Population (Tongan) in 1990"};var race_guamanian_1990={"api":{"sf1":[1990]},"variable":"P0070021","description":"Population (Guamanian) in 1990"};var race_other_micronesian_1990={"api":{"sf1":[1990]},"variable":"P0070022","description":"Population (Micronesian) in 1990"};var race_melanesian_1990={"api":{"sf1":[1990]},"variable":"P0070023","description":"Population (Melanesian) in 1990"};var race_pacific_islander_1990={"api":{"sf1":[1990]},"variable":"P0070024","description":"Population (Pacific Islander) in 1990"};var race_other_race_1990={"api":{"sf1":[1990]},"variable":"P0070025","description":"Population (Other Race) in 1990"};var race_white_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012A001","description":"Population (White) in 2000"};var race_black_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012B001","description":"Population (Black) in 2000"};var race_hispanic_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012H001","description":"Population (Hispanic) in 2000"};var race_asian_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012D001","description":"Population (Asian) in 2000"};var race_other_2000={"api":{"sf1":[2000]},"variable":"P003008","description":"Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2000"};var race_hispanic_no_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011002","description":"Population (Hispanic No) in 2000"};var race_hispanic_latino_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011003","description":"Population (Hispanic Latino) in 2000"};var race_hispanic_mexican_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011004","description":"Population (Hispanic Mexican) in 2000"};var race_hispanic_puerto_rican_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011005","description":"Population (Hispanic Puerto Rican) in 2000"};var race_hispanic_cuban_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011006","description":"Population (Hispanic Cuban) in 2000"};var race_hispanic_dominican_republic_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011007","description":"Population (Hispanic Dominican Republic) in 2000"};var race_hispanic_central_american_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT011008","description":"Population (Hispanic Central American) in 2000"};var race_hispanic_costa_rican_2000={"api":{"sf1":[2000]},"variable":"PCT011009","description":"Population (Hispanic Costa Rican) in 2000"};var race_hispanic_guatemalan_2000={"api":{"sf1":[2000]},"variable":"PCT011010","description":"Population (Hispanic Guatemalan) in 2000"};var race_hispanic_honduran_2000={"api":{"sf1":[2000]},"variable":"PCT011011","description":"Population (Hispanic Honduran) in 2000"};var race_hispanic_nicaraguan_2000={"api":{"sf1":[2000]},"variable":"PCT011012","description":"Population (Hispanic Nicaraguan) in 2000"};var race_hispanic_panamanian_2000={"api":{"sf1":[2000]},"variable":"PCT011013","description":"Population (Hispanic Panamanian) in 2000"};var race_hispanic_salvadoran_2000={"api":{"sf1":[2000]},"variable":"PCT011014","description":"Population (Hispanic Salvadoran) in 2000"};var race_hispanic_other_central_american_2000={"api":{"sf1":[2000]},"variable":"PCT011015","description":"Population (Hispanic other Central American) in 2000"};var race_south_american_2000={"api":{"sf1":[2000]},"variable":"PCT011016","description":"Population (South American) in 2000"};var rac_south_americane_argentinean_2000={"api":{"sf1":[2000]},"variable":"PCT011017","description":"Population (Agentinean) in 2000"};var race_south_american_bolivian_2000={"api":{"sf1":[2000]},"variable":"PCT011018","description":"Population (Bolivian) in 2000"};var race_south_american_chilean_2000={"api":{"sf1":[2000]},"variable":"PCT011019","description":"Population (Chilean) in 2000"};var race_colombian_2000={"api":{"sf1":[2000]},"variable":"PCT011020","description":"Population (Colombian) in 2000"};var race_south_american_ecuadorian_2000={"api":{"sf1":[2000]},"variable":"PCT011021","description":"Population (Ecuadorian) in 2000"};var race_south_american_paraguayan_2000={"api":{"sf1":[2000]},"variable":"PCT011022","description":"Population (Paraguayan) in 2000"};var race_south_american_peruvian_2000={"api":{"sf1":[2000]},"variable":"PCT011023","description":"Population (Peruvian) in 2000"};var race_south_american_uruguayan_2000={"api":{"sf1":[2000]},"variable":"PCT011024","description":"Population (Uruguayan) in 2000"};var race_south_american_venezuelan_2000={"api":{"sf1":[2000]},"variable":"PCT011025","description":"Population (Venezuelan) in 2000"};var race_other_south_american_2000={"api":{"sf1":[2000]},"variable":"PCT011026","description":"Population (other South American) in 2000"};var race_hispanic_other_latinos_2000={"api":{"sf1":[2000]},"variable":"PCT011027","description":"Population (Hispanic other Latinos) in 2000"};var race_spaniard_2000={"api":{"sf1":[2000]},"variable":"PCT011028","description":"Population (Spaniard) in 2000"};var race_spanish_2000={"api":{"sf1":[2000]},"variable":"PCT011029","description":"Population (Spanish) in 2000"};var race_spanish_american_2000={"api":{"sf1":[2000]},"variable":"PCT011030","description":"Population (Spanish American) in 2000"};var race_hispanic_other_2000={"api":{"sf1":[2000]},"variable":"PCT011031","description":"Population (Hispanic Other) in 2000"};var race_american_indian_2000={"api":{"sf1":[2010,2000]},"variable":"PCT012C001","description":"Population (American Indian) in 2000"};var race_eskimo_2000={"api":{"sf1":[2000]},"variable":"PCT001042","description":"Population (Eskimo) in 2000"};var race_aleutian_2000={"api":{"sf1":[2000]},"variable":"PCT001043","description":"Population (Aleutian) in 2000"};var race_asian_indian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005002","description":"Population (Asian Indian) in 2000"};var race_asian_bengladeshi_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005003","description":"Population (Bengladeshi) in 2000"};var race_asian_cambodian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005004","description":"Population (Cambodian) in 2000"};var race_asian_chinese_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005005","description":"Population (Chinese except Taiwanese) in 2000"};var race_asian_filipino_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005006","description":"Population (Filipino) in 2000"};var race_asian_hmong_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005007","description":"Population (Hmong) in 2000"};var race_asian_indonesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005008","description":"Population (Indonesian) in 2000"};var race_asian_japanese_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005009","description":"Population (Japanese) in 2000"};var race_asian_korean_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005010","description":"Population (Korean) in 2000"};var race_asian_laotian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT005011","description":"Population (Laotian) in 2000"};var race_asian_malaysian_2000={"api":{"sf1":[2000]},"variable":"PCT005012","description":"Population (Malaysian) in 2000"};var race_asian_pakistani_2000={"api":{"sf1":[2000]},"variable":"PCT005013","description":"Population (Pakastani) in 2000"};var race_asian_sri_lankan_2000={"api":{"sf1":[2000]},"variable":"PCT005014","description":"Population (Sri Lankan) in 2000"};var race_asian_taiwanese_2000={"api":{"sf1":[2000]},"variable":"PCT005015","description":"Population (Taiwanese) in 2000"};var race_asian_thai_2000={"api":{"sf1":[2000]},"variable":"PCT005016","description":"Population (Thai) in 2000"};var race_asian_vietnamese_2000={"api":{"sf1":[2000]},"variable":"PCT005017","description":"Population (Vietnamese) in 2000"};var race_other_asian_2000={"api":{"sf1":[2000]},"variable":"PCT005018","description":"Population (Other Asian) in 2000"};var race_other_asian_not_specified_2000={"api":{"sf1":[2000]},"variable":"PCT005019","description":"Population (Other Asian, not specified) in 2000"};var race_pacific_islander_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008001","description":"Population (Pacific Islander) in 2000"};var race_pacific_islander_polynesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008002","description":"Population (Other Asian not specified) in 2000"};var race_pacific_islander_polynesian_hawaiian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008003","description":"Population (Native Hawaiian) in 2000"};var race_pacific_islander_polynesian_samoan_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008004","description":"Population (Samoan) in 2000"};var race_pacific_islander_polynesian_tongan_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008005","description":"Population (Tongan) in 2000"};var race_pacific_islander_polynesian_other_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008006","description":"Population (other Polynesian) in 2000"};var race_pacific_islander_micronesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008007","description":"Population (Micronesian) in 2000"};var race_pacific_islander_micronesian_guam__chamorro_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008008","description":"Population (Micronesian - Guam or Chamorro) in 2000"};var race_pacific_islander_micronesian_other_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008009","description":"Population (other Micronesian) in 2000"};var race_pacific_islander_melanesian_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT008010","description":"Population (Melanesian) in 2000"};var race_pacific_islander_melanesian_fijian_2000={"api":{"sf1":[2000]},"variable":"PCT008011","description":"Population (Melanesian - Fijian) in 2000"};var race_pacific_islander_melanesian_other_2000={"api":{"sf1":[2000]},"variable":"PCT008012","description":"Population (other Melanesian) in 2000"};var race_pacific_islander_pacific_islander_other_2000={"api":{"sf1":[2000]},"variable":"PCT008013","description":"Population (other Pacific Islander) in 2000"};var race_pacific_islander_pacific_islander_not_specified_2000={"api":{"sf1":[2000]},"variable":"PCT008014","description":"Population (Pacific Islander, not specified) in 2000"};var race_white_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012A001","description":"Population (White) in 2010"};var race_black_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012B001","description":"Population (Black) in 2010"};var race_hispanic_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012H001","description":"Population (Hispanic) in 2010"};var race_asian_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012D001","description":"Population (Asian) in 2010"};var race_other_2010={"api":{"sf1":[2010]},"variable":"P0030007","description":"Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2010"};var race_hispanic_no_2010={"api":{"sf1":[2010]},"variable":"PCT0110002","description":"Population (Hispanic No) in 2010"};var race_hispanic_latino_2010={"api":{"sf1":[2010]},"variable":"PCT0110003","description":"Population (Hispanic Latino) in 2010"};var race_hispanic_mexican_2010={"api":{"sf1":[2010]},"variable":"PCT0110004","description":"Population (Hispanic Mexican) in 2010"};var race_hispanic_puerto_rican_2010={"api":{"sf1":[2010]},"variable":"PCT0110005","description":"Population (Hispanic Puerto Rican) in 2010"};var race_hispanic_cuban_2010={"api":{"sf1":[2010]},"variable":"PCT0110006","description":"Population (Hispanic Cuban) in 2010"};var race_hispanic_dominican_republic_2010={"api":{"sf1":[2010]},"variable":"PCT0110007","description":"Population (Hispanic Dominican Republic) in 2010"};var race_hispanic_central_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110008","description":"Population (Hispanic Central American) in 2010"};var race_hispanic_costa_rican_2010={"api":{"sf1":[2010]},"variable":"PCT0110009","description":"Population (Hispanic Costa Rican) in 2010"};var race_hispanic_guatemalan_2010={"api":{"sf1":[2010]},"variable":"PCT0110010","description":"Population (Hispanic Guatemalan) in 2010"};var race_hispanic_honduran_2010={"api":{"sf1":[2010]},"variable":"PCT0110011","description":"Population (Hispanic Honduran) in 2010"};var race_hispanic_nicaraguan_2010={"api":{"sf1":[2010]},"variable":"PCT0110012","description":"Population (Hispanic Nicaraguan) in 2010"};var race_hispanic_panamanian_2010={"api":{"sf1":[2010]},"variable":"PCT0110013","description":"Population (Hispanic Panamanian) in 2010"};var race_hispanic_salvadoran_2010={"api":{"sf1":[2010]},"variable":"PCT0110014","description":"Population (Hispanic Salvadoran) in 2010"};var race_hispanic_other_central_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110015","description":"Population (Hispanic other Central American) in 2010"};var race_south_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110016","description":"Population (South American) in 2010"};var race_south_american_argentinean_2010={"api":{"sf1":[2010]},"variable":"PCT0110017","description":"Population (Agentinean) in 2010"};var race_south_american_bolivian_2010={"api":{"sf1":[2010]},"variable":"PCT0110018","description":"Population (Bolivian) in 2010"};var race_south_american_chilean_2010={"api":{"sf1":[2010]},"variable":"PCT0110019","description":"Population (Chilean) in 2010"};var race_south_american_colombian_2010={"api":{"sf1":[2010]},"variable":"PCT0110020","description":"Population (Colombian) in 2010"};var race_south_american_ecuadorian_2010={"api":{"sf1":[2010]},"variable":"PCT0110021","description":"Population (Ecuadorian) in 2010"};var race_south_american_paraguayan_2010={"api":{"sf1":[2010]},"variable":"PCT0110022","description":"Population (Paraguayan) in 2010"};var race_south_american_peruvian_2010={"api":{"sf1":[2010]},"variable":"PCT0110023","description":"Population (Peruvian) in 2010"};var race_south_american_uruguayan_2010={"api":{"sf1":[2010]},"variable":"PCT0110024","description":"Population (Uruguayan) in 2010"};var race_south_american_venezuelan_2010={"api":{"sf1":[2010]},"variable":"PCT0110025","description":"Population (Venezuelan) in 2010"};var race_other_south_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110026","description":"Population (other South American) in 2010"};var race_hispanic_other_latinos_2010={"api":{"sf1":[2010]},"variable":"PCT0110027","description":"Population (Hispanic other Latinos) in 2010"};var race_spaniard_2010={"api":{"sf1":[2010]},"variable":"PCT0110028","description":"Population (Spaniard) in 2010"};var race_spanish_2010={"api":{"sf1":[2010]},"variable":"PCT0110029","description":"Population (Spanish) in 2010"};var race_spanish_american_2010={"api":{"sf1":[2010]},"variable":"PCT0110030","description":"Population (Spanish American) in 2010"};var race_hispanic_other_2010={"api":{"sf1":[2010]},"variable":"PCT0110031","description":"Population (Hispanic Other) in 2010"};var race_american_indian_2010={"api":{"sf1":[2010,2000]},"variable":"PCT012C001","description":"Population (American Indian) in 2010"};var race_eskimo_2010={"api":{"sf1":[2010]},"variable":"PCT0040003","description":"Population (Alaska Native) in 2010"};var race_aleutian_2010={"api":{"sf1":[2010]},"variable":"PCT0010048","description":"Population (Aleutian) in 2010"};var race_asian_indian_2010={"api":{"sf1":[2010]},"variable":"PCT0050002","description":"Population (Asian Indian) in 2010"};var race_asian_bengladeshi_2010={"api":{"sf1":[2010]},"variable":"PCT0050003","description":"Population (Bengladeshi) in 2010"};var race_asian_cambodian_2010={"api":{"sf1":[2010]},"variable":"PCT0050004","description":"Population (Cambodian) in 2010"};var race_asian_chinese_2010={"api":{"sf1":[2010]},"variable":"PCT0050005","description":"Population (Chinese except Taiwanese) in 2010"};var race_asian_filipino_2010={"api":{"sf1":[2010]},"variable":"PCT0050006","description":"Population (Filipino) in 2010"};var race_asian_hmong_2010={"api":{"sf1":[2010]},"variable":"PCT0050007","description":"Population (Hmong) in 2010"};var race_asian_indonesian_2010={"api":{"sf1":[2010]},"variable":"PCT0050008","description":"Population (Indonesian) in 2010"};var race_asian_japanese_2010={"api":{"sf1":[2010]},"variable":"PCT0050009","description":"Population (Japanese) in 2010"};var race_asian_korean_2010={"api":{"sf1":[2010]},"variable":"PCT0050010","description":"Population (Korean) in 2010"};var race_asian_laotian_2010={"api":{"sf1":[2010]},"variable":"PCT0050011","description":"Population (Laotian) in 2010"};var race_asian_malaysian_2010={"api":{"sf1":[2010]},"variable":"PCT0050012","description":"Population (Malaysian) in 2010"};var race_asian_pakistani_2010={"api":{"sf1":[2010]},"variable":"PCT0050013","description":"Population (Pakastani) in 2010"};var race_asian_sri_lankan_2010={"api":{"sf1":[2010]},"variable":"PCT0050014","description":"Population (Sri Lankan) in 2010"};var race_asian_taiwanese_2010={"api":{"sf1":[2010]},"variable":"PCT0050015","description":"Population (Taiwanese) in 2010"};var race_asian_thai_2010={"api":{"sf1":[2010]},"variable":"PCT0050016","description":"Population (Thai) in 2010"};var race_asian_vietnamese_2010={"api":{"sf1":[2010]},"variable":"PCT0050017","description":"Population (Vietnamese) in 2010"};var race_other_asian_2010={"api":{"sf1":[2010]},"variable":"PCT0050018","description":"Population (Other Asian) in 2010"};var race_other_asian_not_specified_2010={"api":{"sf1":[2000]},"variable":"PCT005019","description":"Population (Other Asian, not specified) in 2010"};var race_pacific_islander_2010={"api":{"sf1":[2010]},"variable":"PCT0080001","description":"Population (Pacific Islander) in 2010"};var race_pacific_islander_polynesian_2010={"api":{"sf1":[2010]},"variable":"PCT0080002","description":"Population (Other Asian not specified) in 2010"};var race_pacific_islander_polynesian_hawaiian_2010={"api":{"sf1":[2010]},"variable":"PCT0080003","description":"Population (Native Hawaiian) in 2010"};var race_pacific_islander_polynesian_samoan_2010={"api":{"sf1":[2010]},"variable":"PCT0080004","description":"Population (Samoan) in 2010"};var race_pacific_islander_polynesian_tongan_2010={"api":{"sf1":[2010]},"variable":"PCT0080005","description":"Population (Tongan) in 2010"};var race_pacific_islander_polynesian_other_2010={"api":{"sf1":[2010]},"variable":"PCT0080006","description":"Population (other Polynesian) in 2010"};var race_pacific_islander_micronesian_2010={"api":{"sf1":[2010]},"variable":"PCT0080007","description":"Population (Micronesian) in 2010"};var race_pacific_islander_micronesian_guam_chamorro_2010={"api":{"sf1":[2010]},"variable":"PCT0080008","description":"Population (Micronesian - Guam or Chamorro) in 2010"};var race_pacific_islander_micronesian_marshallese_2010={"api":{"sf1":[2010]},"variable":"PCT0080009","description":"Population (Micronesian - Marshallese) in 2010"};var race_pacific_islander_micronesian_other_2010={"api":{"sf1":[2010]},"variable":"PCT0080010","description":"Population (Micronesian - other) in 2010"};var race_pacific_islander_melanesian_2010={"api":{"sf1":[2010]},"variable":"PCT0080011","description":"Population (Melanesian) in 2010"};var race_pacific_islander_melanesian_fijian_2010={"api":{"sf1":[2010]},"variable":"PCT0080012","description":"Population (Melanesian - Fijian) in 2010"};var race_pacific_islander_melanesian_other_2010={"api":{"sf1":[2010]},"variable":"PCT0080013","description":"Population (other Melanesian) in 2010"};var race_pacific_islander_pacific_islander_not_specified_2010={"api":{"sf1":[2010]},"variable":"PCT0080014","description":"Population (Pacific Islander, not specified) in 2010"};var males_never_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140001","description":"Population of males who never married in 1990"};var males_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140002","description":"Population of males who are married, but not separated in 1990"};var males_separated_1990={"api":{"sf1":[1990,2010]},"variable":"P0140003","description":"Population of males who are separated in 1990"};var males_widowed_1990={"api":{"sf1":[1990,2010]},"variable":"P0140004","description":"Population of males who are widowed in 1990"};var males_divorced_1990={"api":{"sf1":[1990,2010]},"variable":"P0140005","description":"Population of males who are divorced in 1990"};var females_never_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140006","description":"Population of females who never married in 1990"};var females_married_1990={"api":{"sf1":[1990,2010]},"variable":"P0140007","description":"Population of females who are married, but not separated in 1990"};var females_separated_1990={"api":{"sf1":[1990,2010]},"variable":"P0140008","description":"Population of females who are separated in 1990"};var females_widowed_1990={"api":{"sf1":[1990,2010]},"variable":"P0140009","description":"Population of females who are widowed in 1990"};var females_divorced_1990={"api":{"sf1":[1990,2010]},"variable":"P0140010","description":"Population of females who are divorced in 1990"};var college_dorms_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280006","description":"Population living in college dorms in 1990"};var military_quarters_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280007","description":"Population of living in military quarters in 1990"};var college_dorms_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037007","description":"Population living in college dorms in 2000"};var military_quarters_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037007","description":"Population of living in military quarters in 2000"};var college_dorms_2010={"api":{"sf1":[2010]},"variable":"PCO0080001","description":"Population living in college dorms in 2010"};var military_quarters_2010={"api":{"sf1":[2010]},"variable":"PCO0090001","description":"Population of living in military quarters in 2010"};var correctional_facilities_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280001","description":"Population living in correctional facilities in 1990"};var nursing_homes_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280002","description":"Population living in nursing homes in 1990"};var mental_health_facilities_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280003","description":"Population living in mental health facilities in 1990"};var juvenile_detention_facilities_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0280004","description":"Population living in juvenile detention facilities in 1990"};var correctional_facilities_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037003","description":"Population living in correctional facilities in 2000"};var nursing_homes_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"P037004","description":"Population living in nursing homes in 2000"};var mental_health_facilities_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT016041","description":"Population living in mental health facilities in 2000"};var juvenile_detention_facilities_2000={"api":{"sf1":[2000],"sf3":[2000]},"variable":"PCT016025","description":"Population living in juvenile detention facilities in 2000"};var correctional_facilities_2010={"api":{"sf1":[2010],"sf3":[1990]},"variable":"P0420003","description":"Population living in correctional facilities in 2010"};var nursing_homes_2010={"api":{"sf1":[2010],"sf3":[1990]},"variable":"P0420005","description":"Population living in nursing homes in 2010"};var mental_health_facilities_2010={"api":{"sf1":[2010]},"variable":"PCT0200016","description":"Population living in mental health facilities in 2010"};var juvenile_detention_facilities_2010={"api":{"sf1":[2010],"sf3":[1990]},"variable":"P0420004","description":"Population living in juvenile detention facilities in 2010"};var households_family_2_person_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0270001","description":"2 person family households in 1990"};var households_family_3_person_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0270002","description":"3 person family households in 1990"};var households_family_4_person_1990={"api":{"sf1":[1990,2010],"sf3":[1990]},"variable":"P0270003","description":"4 person family households in 1990"};var households_family_5_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270004","description":"5 person family households in 1990"};var households_6_family_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270005","description":"6 person family households in 1990"};var households_1_nonfamily_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270007","description":"1 person non-family households in 1990"};var households_nonfamily_2_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270008","description":"1 person non-family households in 1990"};var households_nonfamily_3_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270009","description":"1 person non-family households in 1990"};var households_nonfamily_4_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270010","description":"4 person non-family households in 1990"};var households_nonfamily_5_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270011","description":"5 person non-family households in 1990"};var households_nonfamily_6_person_1990={"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270012","description":"6 person non-family households in 1990"};var income={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B19013_001E","description":"Median household income in the past 12 months (in 2013 inflation-adjusted dollars)"};var income_per_capita={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B19301_001E","description":"Per capita income in the past 12 months (in 2013 inflation-adjusted dollars)"};var employment_labor_force={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_002E","description":"Number of persons, age 16 or older, in the labor force"};var employment_not_labor_force={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_007E","description":"Number of persons, age 16 or older, not in the labor force"};var employment_civilian_labor_force={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_003E","description":"Number of persons, age 16 or older, in the civilian labor force"};var employment_employed={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_004E","description":"Number of employed, age 16 or older, in the civilian labor force"};var employment_unemployed={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_005E","description":"Number of unemployed, age 16 or older, in the civilian labor force"};var employment_armed_forces={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B23025_006E","description":"Number of persons, age 16 or older, in the Armed Forces"};var employment_male_management_business_science_and_arts_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_003E","description":"Number of employed male 'Management, business, science, and arts occupations:' for the civilian population age 16 and over"};var employment_male_management_business_and_financial_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_004E","description":"Number of employed male 'Management, business, and financial occupations:' for the civilian population age 16 and over"};var employment_male_management_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_005E","description":"Number of employed male 'Management occupations' for the civilian population age 16 and over"};var employment_male_business_and_financial_operations_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_006E","description":"Number of employed male 'Business and financial operations occupations' for the civilian population age 16 and over"};var employment_male_computer_engineering_and_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_007E","description":"Number of employed male 'Computer, engineering, and science occupations:' for the civilian population age 16 and over"};var employment_male_computer_and_mathematical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_008E","description":"Number of employed male 'Computer and mathematical occupations' for the civilian population age 16 and over"};var employment_male_architecture_and_engineering_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_009E","description":"Number of employed male 'Architecture and engineering occupations' for the civilian population age 16 and over"};var employment_male_life_physical_and_social_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_010E","description":"Number of employed male 'Life, physical, and social science occupations' for the civilian population age 16 and over"};var employment_male_education_legal_community_service_arts_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_011E","description":"Number of employed male 'Education, legal, community service, arts, and media occupations:' for the civilian population age 16 and over"};var employment_male_community_and_social_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_012E","description":"Number of employed male 'Community and social service occupations' for the civilian population age 16 and over"};var employment_male_legal_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_013E","description":"Number of employed male 'Legal occupations' for the civilian population age 16 and over"};var employment_male_education_training_and_library_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_014E","description":"Number of employed male 'Education, training, and library occupations' for the civilian population age 16 and over"};var employment_male_arts_design_entertainment_sports_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_015E","description":"Number of employed male 'Arts, design, entertainment, sports, and media occupations' for the civilian population age 16 and over"};var employment_male_healthcare_practitioners_and_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_016E","description":"Number of employed male 'Healthcare practitioners and technical occupations:' for the civilian population age 16 and over"};var employment_male_health_diagnosing_and_treating_practitioners_and_other_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_017E","description":"Number of employed male 'Health diagnosing and treating practitioners and other technical occupations' for the civilian population age 16 and over"};var employment_male_health_technologists_and_technicians={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_018E","description":"Number of employed male 'Health technologists and technicians' for the civilian population age 16 and over"};var employment_male_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_019E","description":"Number of employed male 'Service occupations:' for the civilian population age 16 and over"};var employment_male_healthcare_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_020E","description":"Number of employed male 'Healthcare support occupations' for the civilian population age 16 and over"};var employment_male_protective_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_021E","description":"Number of employed male 'Protective service occupations:' for the civilian population age 16 and over"};var employment_male_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_022E","description":"Number of employed male 'Fire fighting and prevention, and other protective service workers including supervisors' for the civilian population age 16 and over"};var employment_male_law_enforcement_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_023E","description":"Number of employed male 'Law enforcement workers including supervisors' for the civilian population age 16 and over"};var employment_male_food_preparation_and_serving_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_024E","description":"Number of employed male 'Food preparation and serving related occupations' for the civilian population age 16 and over"};var employment_male_building_and_grounds_cleaning_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_025E","description":"Number of employed male 'Building and grounds cleaning and maintenance occupations' for the civilian population age 16 and over"};var employment_male_personal_care_and_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_026E","description":"Number of employed male 'Personal care and service occupations' for the civilian population age 16 and over"};var employment_male_sales_and_office_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_027E","description":"Number of employed male 'Sales and office occupations:' for the civilian population age 16 and over"};var employment_male_sales_and_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_028E","description":"Number of employed male 'Sales and related occupations' for the civilian population age 16 and over"};var employment_male_office_and_administrative_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_029E","description":"Number of employed male 'Office and administrative support occupations' for the civilian population age 16 and over"};var employment_male_natural_resources_construction_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_030E","description":"Number of employed male 'Natural resources, construction, and maintenance occupations:' for the civilian population age 16 and over"};var employment_male_farming_fishing_and_forestry_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_031E","description":"Number of employed male 'Farming, fishing, and forestry occupations' for the civilian population age 16 and over"};var employment_male_construction_and_extraction_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_032E","description":"Number of employed male 'Construction and extraction occupations' for the civilian population age 16 and over"};var employment_male_installation_maintenance_and_repair_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_033E","description":"Number of employed male 'Installation, maintenance, and repair occupations' for the civilian population age 16 and over"};var employment_male_production_transportation_and_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_034E","description":"Number of employed male 'Production, transportation, and material moving occupations:' for the civilian population age 16 and over"};var employment_male_production_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_035E","description":"Number of employed male 'Production occupations' for the civilian population age 16 and over"};var employment_male_transportation_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_036E","description":"Number of employed male 'Transportation occupations' for the civilian population age 16 and over"};var employment_male_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_037E","description":"Number of employed male 'Material moving occupations' for the civilian population age 16 and over"};var employment_female_management_business_science_and_arts_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_039E","description":"Number of employed female 'Management, business, science, and arts occupations:' for the civilian population age 16 and over"};var employment_female_management_business_and_financial_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_040E","description":"Number of employed female 'Management, business, and financial occupations:' for the civilian population age 16 and over"};var employment_female_management_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_041E","description":"Number of employed female 'Management occupations' for the civilian population age 16 and over"};var employment_female_business_and_financial_operations_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_042E","description":"Number of employed female 'Business and financial operations occupations' for the civilian population age 16 and over"};var employment_female_computer_engineering_and_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_043E","description":"Number of employed female 'Computer, engineering, and science occupations:' for the civilian population age 16 and over"};var employment_female_computer_and_mathematical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_044E","description":"Number of employed female 'Computer and mathematical occupations' for the civilian population age 16 and over"};var employment_female_architecture_and_engineering_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_045E","description":"Number of employed female 'Architecture and engineering occupations' for the civilian population age 16 and over"};var employment_female_life_physical_and_social_science_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_046E","description":"Number of employed female 'Life, physical, and social science occupations' for the civilian population age 16 and over"};var employment_female_education_legal_community_service_arts_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_047E","description":"Number of employed female 'Education, legal, community service, arts, and media occupations:' for the civilian population age 16 and over"};var employment_female_community_and_social_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_048E","description":"Number of employed female 'Community and social service occupations' for the civilian population age 16 and over"};var employment_female_legal_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_049E","description":"Number of employed female 'Legal occupations' for the civilian population age 16 and over"};var employment_female_education_training_and_library_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_050E","description":"Number of employed female 'Education, training, and library occupations' for the civilian population age 16 and over"};var employment_female_arts_design_entertainment_sports_and_media_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_051E","description":"Number of employed female 'Arts, design, entertainment, sports, and media occupations' for the civilian population age 16 and over"};var employment_female_healthcare_practitioners_and_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_052E","description":"Number of employed female 'Healthcare practitioners and technical occupations:' for the civilian population age 16 and over"};var employment_female_health_diagnosing_and_treating_practitioners_and_other_technical_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_053E","description":"Number of employed female 'Health diagnosing and treating practitioners and other technical occupations' for the civilian population age 16 and over"};var employment_female_health_technologists_and_technicians={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_054E","description":"Number of employed female 'Health technologists and technicians' for the civilian population age 16 and over"};var employment_female_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_055E","description":"Number of employed female 'Service occupations:' for the civilian population age 16 and over"};var employment_female_healthcare_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_056E","description":"Number of employed female 'Healthcare support occupations' for the civilian population age 16 and over"};var employment_female_protective_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_057E","description":"Number of employed female 'Protective service occupations:' for the civilian population age 16 and over"};var employment_female_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_058E","description":"Number of employed female 'Fire fighting and prevention, and other protective service workers including supervisors' for the civilian population age 16 and over"};var employment_female_law_enforcement_workers_including_supervisors={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_059E","description":"Number of employed female 'Law enforcement workers including supervisors' for the civilian population age 16 and over"};var employment_female_food_preparation_and_serving_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_060E","description":"Number of employed female 'Food preparation and serving related occupations' for the civilian population age 16 and over"};var employment_female_building_and_grounds_cleaning_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_061E","description":"Number of employed female 'Building and grounds cleaning and maintenance occupations' for the civilian population age 16 and over"};var employment_female_personal_care_and_service_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_062E","description":"Number of employed female 'Personal care and service occupations' for the civilian population age 16 and over"};var employment_female_sales_and_office_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_063E","description":"Number of employed female 'Sales and office occupations:' for the civilian population age 16 and over"};var employment_female_sales_and_related_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_064E","description":"Number of employed female 'Sales and related occupations' for the civilian population age 16 and over"};var employment_female_office_and_administrative_support_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_065E","description":"Number of employed female 'Office and administrative support occupations' for the civilian population age 16 and over"};var employment_female_natural_resources_construction_and_maintenance_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_066E","description":"Number of employed female 'Natural resources, construction, and maintenance occupations:' for the civilian population age 16 and over"};var employment_female_farming_fishing_and_forestry_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_067E","description":"Number of employed female 'Farming, fishing, and forestry occupations' for the civilian population age 16 and over"};var employment_female_construction_and_extraction_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_068E","description":"Number of employed female 'Construction and extraction occupations' for the civilian population age 16 and over"};var employment_female_installation_maintenance_and_repair_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_069E","description":"Number of employed female 'Installation, maintenance, and repair occupations' for the civilian population age 16 and over"};var employment_female_production_transportation_and_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_070E","description":"Number of employed female 'Production, transportation, and material moving occupations:' for the civilian population age 16 and over"};var employment_female_production_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_071E","description":"Number of employed female 'Production occupations' for the civilian population age 16 and over"};var employment_female_transportation_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_072E","description":"Number of employed female 'Transportation occupations' for the civilian population age 16 and over"};var employment_female_material_moving_occupations={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"C24010_073E","description":"Number of employed female 'Material moving occupations' for the civilian population age 16 and over"};var poverty={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001_002E","description":"Number of persons whose income in the past 12 months is below the poverty level"};var poverty_male={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001_003E","description":"Number of male persons whose income in the past 12 months is below the poverty level"};var poverty_female={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001_017E","description":"Number of female persons whose income in the past 12 months is below the poverty level"};var poverty_white_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001A_002E","description":"Number of persons whose income in the past 12 months is below the poverty level (White Alone)"};var poverty_black_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001B_002E","description":"Number of persons whose income in the past 12 months is below the poverty level (Black or African American Alone)"};var population_american_indian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_004E","description":"Population (American Indian or Alaskan Native Alone)"};var poverty_asian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001D_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Asian Alone)"};var poverty_native_hawaiian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001E_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Native Hawaiian and Other Pacific Islander Alone)"};var poverty_other_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001F_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Some Other Race Alone)"};var poverty_two_or_more_races={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001G_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Two or more races)"};var poverty_hispanic_origin={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17001I_002E","description":"Number of persons whose income in the past 12 months is below the poverty level  (Hispanic Origin)"};var poverty_family={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_002E","description":"Number of families below the poverty level in the past 12 months"};var poverty_family_married={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_003E","description":"Number of married couples whose income is below the poverty level in the past 12 months"};var poverty_family_single_male={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_009E","description":"Number of families with a male householder and no wife present whose income is below the poverty level in the past 12 months"};var poverty_family_single_female={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B17012_014E","description":"Number of families with a female householder and no husband present whose income is below the poverty level in the past 12 months"};var age={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01002_001E","description":"Median age"};var median_male_age={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01002_002E","description":"Median age by sex (male)"};var median_female_age={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01002_003E","description":"Median age by sex (female)"};var population={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B01003_001E","description":"Total population"};var population_white_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_002E","description":"Population (White Alone)"};var population_black_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_003E","description":"Population (Black or African American Alone)"};var population_asian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_005E","description":"Population (Asian Alone)"};var population_native_hawaiian_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_006E","description":"Population (Native Hawaiian and Other Pacific Islander Alone)"};var population_other_alone={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_007E","description":"Population (Some Other Race Alone)"};var population_two_or_more_races={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B02001_008E","description":"Population (Two or more races)"};var population_hispanic_origin={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B03001_003E","description":"Population (Hispanic Origin)"};var median_house_construction_year={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25035_001E","description":"Median year housing units were built"};var median_contract_rent={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25058_001E","description":"Median contract rent"};var median_gross_rent={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25064_001E","description":"Median gross rent (contract rent plus the cost of utilities)"};var median_home_value={"api":{"acs5":[2010,2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B25077_001E","description":"Median value (dollars) for Owner-Occupied housing units"};var commute_time={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_001E","description":"Total time spent commuting (in minutes)","normalizable":true};var commute_time_solo_automobile={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_003E","description":"Time spent commuting (in minutes): Car, truck, or van - alone","normalizable":true};var commute_time_carpool={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_004E","description":"Time spent commuting (in minutes): Car, truck, or van - carpool","normalizable":true};var commute_time_public_transport={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_007E","description":"Time spent commuting (in minutes): public transport (excluding taxis)","normalizable":true};var commute_time_walked={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_011E","description":"Time spent commuting (in minutes): walking","normalizable":true};var commute_time_other={"api":{"acs5":[2013,2011,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B08136_012E","description":"Time spent commuting (in minutes): Taxicab, motorcycle, bicycle, or other means","normalizable":true};var education_none={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_002E","description":"The number of persons age 25 and over who completed no schooling"};var education_high_school={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_017E","description":"The number of persons age 25 and over who have a regular high school diploma"};var education_ged={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_018E","description":"The number of persons age 25 and over who have a GED or alternative credential"};var education_associates={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_021E","description":"The number of persons age 25 and over who hold an Associate's degree"};var education_bachelors={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_022E","description":"The number of persons age 25 and over who hold a Bachelor's degree"};var education_masters={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_023E","description":"The number of persons age 25 and over who hold a Master's degree"};var education_professional={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_024E","description":"The number of persons age 25 and over who hold a Professional degree"};var education_doctorate={"api":{"acs5":[2013,2012,2014],"acs3":[2013,2012],"acs1":[2014,2013,2012]},"variable":"B15003_025E","description":"The number of persons age 25 and over who hold a Doctoral degree"};var aliases = {population_1990:population_1990,population_2000:population_2000,population_2010:population_2010,population_families_1990:population_families_1990,population_families_2000:population_families_2000,population_families_2010:population_families_2010,population_male_1990:population_male_1990,population_female_1990:population_female_1990,population_male_2000:population_male_2000,population_female_2000:population_female_2000,population_male_2010:population_male_2010,population_female_2010:population_female_2010,age_under_1_1990:age_under_1_1990,age_1_to_2_1990:age_1_to_2_1990,age_3_to_4_1990:age_3_to_4_1990,age_5_1990:age_5_1990,age_6_1990:age_6_1990,age_7_to_9_1990:age_7_to_9_1990,age_10_to_11_1990:age_10_to_11_1990,age_12_to_13_1990:age_12_to_13_1990,age_14_1990:age_14_1990,age_15_1990:age_15_1990,age_16_1990:age_16_1990,age_17_1990:age_17_1990,age_18_1990:age_18_1990,age_19_1990:age_19_1990,age_20_1990:age_20_1990,age_21_1990:age_21_1990,age_22_to_24_1990:age_22_to_24_1990,age_25_to_29_1990:age_25_to_29_1990,age_30_to_34_1990:age_30_to_34_1990,age_35_to_39_1990:age_35_to_39_1990,age_40_to_44_1990:age_40_to_44_1990,age_45_to_49_1990:age_45_to_49_1990,age_50_to_54_1990:age_50_to_54_1990,age_55_to_59_1990:age_55_to_59_1990,age_60_to_61_1990:age_60_to_61_1990,age_62_to_64_1990:age_62_to_64_1990,age_65_to_69_1990:age_65_to_69_1990,age_70_to_74_1990:age_70_to_74_1990,age_75_to_79_1990:age_75_to_79_1990,age_80_to_84_1990:age_80_to_84_1990,age_under_5_male_2000:age_under_5_male_2000,age_5_to_9_male_2000:age_5_to_9_male_2000,age_10_to_14_male_2000:age_10_to_14_male_2000,age_15_to_17_male_2000:age_15_to_17_male_2000,age_18_to_19_male_2000:age_18_to_19_male_2000,age_20_male_2000:age_20_male_2000,age_21_male_2000:age_21_male_2000,age_22_to_24_male_2000:age_22_to_24_male_2000,age_25_to_29_male_2000:age_25_to_29_male_2000,age_30_to_34_male_2000:age_30_to_34_male_2000,age_35_to_39_male_2000:age_35_to_39_male_2000,age_40_to_44_male_2000:age_40_to_44_male_2000,age_45_to_49_male_2000:age_45_to_49_male_2000,age_50_to_54_male_2000:age_50_to_54_male_2000,age_55_to_59_male_2000:age_55_to_59_male_2000,age_60_to_61_male_2000:age_60_to_61_male_2000,age_62_to_64_male_2000:age_62_to_64_male_2000,age_65_to_66_male_2000:age_65_to_66_male_2000,age_67_to_69_male_2000:age_67_to_69_male_2000,age_70_to_74_male_2000:age_70_to_74_male_2000,age_75_to_79_male_2000:age_75_to_79_male_2000,age_80_to_84_male_2000:age_80_to_84_male_2000,age_under_5_female_2000:age_under_5_female_2000,age_5_to_9_female_2000:age_5_to_9_female_2000,age_10_to_14_female_2000:age_10_to_14_female_2000,age_15_to_17_female_2000:age_15_to_17_female_2000,age_18_to_19_female_2000:age_18_to_19_female_2000,age_20_female_2000:age_20_female_2000,age_21_female_2000:age_21_female_2000,age_22_to_24_female_2000:age_22_to_24_female_2000,age_25_to_29_female_2000:age_25_to_29_female_2000,age_30_to_34_female_2000:age_30_to_34_female_2000,age_35_to_39_female_2000:age_35_to_39_female_2000,age_40_to_44_female_2000:age_40_to_44_female_2000,age_45_to_49_female_2000:age_45_to_49_female_2000,age_50_to_54_female_2000:age_50_to_54_female_2000,age_55_to_59_female_2000:age_55_to_59_female_2000,age_60_to_61_female_2000:age_60_to_61_female_2000,age_62_to_64_female_2000:age_62_to_64_female_2000,age_65_to_66_female_2000:age_65_to_66_female_2000,age_67_to_69_female_2000:age_67_to_69_female_2000,age_70_to_74_female_2000:age_70_to_74_female_2000,age_75_to_79_female_2000:age_75_to_79_female_2000,age_80_to_84_female_2000:age_80_to_84_female_2000,age_under_5_male_2010:age_under_5_male_2010,age_5_to_9_male_2010:age_5_to_9_male_2010,age_10_to_14_male_2010:age_10_to_14_male_2010,age_15_to_17_male_2010:age_15_to_17_male_2010,age_18_to_19_male_2010:age_18_to_19_male_2010,age_20_male_2010:age_20_male_2010,age_21_male_2010:age_21_male_2010,age_22_to_24_male_2010:age_22_to_24_male_2010,age_25_to_29_male_2010:age_25_to_29_male_2010,age_30_to_34_male_2010:age_30_to_34_male_2010,age_35_to_39_male_2010:age_35_to_39_male_2010,age_40_to_44_male_2010:age_40_to_44_male_2010,age_45_to_49_male_2010:age_45_to_49_male_2010,age_50_to_54_male_2010:age_50_to_54_male_2010,age_55_to_59_male_2010:age_55_to_59_male_2010,age_60_to_61_male_2010:age_60_to_61_male_2010,age_62_to_64_male_2010:age_62_to_64_male_2010,age_65_to_66_male_2010:age_65_to_66_male_2010,age_67_to_69_male_2010:age_67_to_69_male_2010,age_70_to_74_male_2010:age_70_to_74_male_2010,age_75_to_79_male_2010:age_75_to_79_male_2010,age_80_to_84_male_2010:age_80_to_84_male_2010,age_under_5_female_2010:age_under_5_female_2010,age_5_to_9_female_2010:age_5_to_9_female_2010,age_10_to_14_female_2010:age_10_to_14_female_2010,age_15_to_17_female_2010:age_15_to_17_female_2010,age_18_to_19_female_2010:age_18_to_19_female_2010,age_20_female_2010:age_20_female_2010,age_21_female_2010:age_21_female_2010,age_22_to_24_female_2010:age_22_to_24_female_2010,age_25_to_29_female_2010:age_25_to_29_female_2010,age_30_to_34_female_2010:age_30_to_34_female_2010,age_35_to_39_female_2010:age_35_to_39_female_2010,age_40_to_44_female_2010:age_40_to_44_female_2010,age_45_to_49_female_2010:age_45_to_49_female_2010,age_50_to_54_female_2010:age_50_to_54_female_2010,age_55_to_59_female_2010:age_55_to_59_female_2010,age_60_to_61_female_2010:age_60_to_61_female_2010,age_62_to_64_female_2010:age_62_to_64_female_2010,age_65_to_66_female_2010:age_65_to_66_female_2010,age_67_to_69_female_2010:age_67_to_69_female_2010,age_70_to_74_female_2010:age_70_to_74_female_2010,age_75_to_79_female_2010:age_75_to_79_female_2010,age_80_to_84_female_2010:age_80_to_84_female_2010,race_hispanic_1990:race_hispanic_1990,race_asian_1990:race_asian_1990,race_other_1990:race_other_1990,race_hispanic_no_1990:race_hispanic_no_1990,race_hispanic_mexican_1990:race_hispanic_mexican_1990,race_hispanic_puerto_rican_1990:race_hispanic_puerto_rican_1990,race_hispanic_cuban_1990:race_hispanic_cuban_1990,race_hispanic_other_1990:race_hispanic_other_1990,race_white_1990:race_white_1990,race_black_1990:race_black_1990,race_american_indian_1990:race_american_indian_1990,race_eskimo_1990:race_eskimo_1990,race_aleutian_1990:race_aleutian_1990,race_chinese_1990:race_chinese_1990,race_filipino_1990:race_filipino_1990,race_japanese_1990:race_japanese_1990,race_asian_indian_1990:race_asian_indian_1990,race_korean_1990:race_korean_1990,race_vietnamese_1990:race_vietnamese_1990,race_cambodian_1990:race_cambodian_1990,race_hmong_1990:race_hmong_1990,race_laotian_1990:race_laotian_1990,race_thai_1990:race_thai_1990,race_other_asian_1990:race_other_asian_1990,race_hawaiian_1990:race_hawaiian_1990,race_samoan_1990:race_samoan_1990,race_tongan_1990:race_tongan_1990,race_other_polynesian_1990:race_other_polynesian_1990,race_guamanian_1990:race_guamanian_1990,race_other_micronesian_1990:race_other_micronesian_1990,race_melanesian_1990:race_melanesian_1990,race_pacific_islander_1990:race_pacific_islander_1990,race_other_race_1990:race_other_race_1990,race_white_2000:race_white_2000,race_black_2000:race_black_2000,race_hispanic_2000:race_hispanic_2000,race_asian_2000:race_asian_2000,race_other_2000:race_other_2000,race_hispanic_no_2000:race_hispanic_no_2000,race_hispanic_latino_2000:race_hispanic_latino_2000,race_hispanic_mexican_2000:race_hispanic_mexican_2000,race_hispanic_puerto_rican_2000:race_hispanic_puerto_rican_2000,race_hispanic_cuban_2000:race_hispanic_cuban_2000,race_hispanic_dominican_republic_2000:race_hispanic_dominican_republic_2000,race_hispanic_central_american_2000:race_hispanic_central_american_2000,race_hispanic_costa_rican_2000:race_hispanic_costa_rican_2000,race_hispanic_guatemalan_2000:race_hispanic_guatemalan_2000,race_hispanic_honduran_2000:race_hispanic_honduran_2000,race_hispanic_nicaraguan_2000:race_hispanic_nicaraguan_2000,race_hispanic_panamanian_2000:race_hispanic_panamanian_2000,race_hispanic_salvadoran_2000:race_hispanic_salvadoran_2000,race_hispanic_other_central_american_2000:race_hispanic_other_central_american_2000,race_south_american_2000:race_south_american_2000,rac_south_americane_argentinean_2000:rac_south_americane_argentinean_2000,race_south_american_bolivian_2000:race_south_american_bolivian_2000,race_south_american_chilean_2000:race_south_american_chilean_2000,race_colombian_2000:race_colombian_2000,race_south_american_ecuadorian_2000:race_south_american_ecuadorian_2000,race_south_american_paraguayan_2000:race_south_american_paraguayan_2000,race_south_american_peruvian_2000:race_south_american_peruvian_2000,race_south_american_uruguayan_2000:race_south_american_uruguayan_2000,race_south_american_venezuelan_2000:race_south_american_venezuelan_2000,race_other_south_american_2000:race_other_south_american_2000,race_hispanic_other_latinos_2000:race_hispanic_other_latinos_2000,race_spaniard_2000:race_spaniard_2000,race_spanish_2000:race_spanish_2000,race_spanish_american_2000:race_spanish_american_2000,race_hispanic_other_2000:race_hispanic_other_2000,race_american_indian_2000:race_american_indian_2000,race_eskimo_2000:race_eskimo_2000,race_aleutian_2000:race_aleutian_2000,race_asian_indian_2000:race_asian_indian_2000,race_asian_bengladeshi_2000:race_asian_bengladeshi_2000,race_asian_cambodian_2000:race_asian_cambodian_2000,race_asian_chinese_2000:race_asian_chinese_2000,race_asian_filipino_2000:race_asian_filipino_2000,race_asian_hmong_2000:race_asian_hmong_2000,race_asian_indonesian_2000:race_asian_indonesian_2000,race_asian_japanese_2000:race_asian_japanese_2000,race_asian_korean_2000:race_asian_korean_2000,race_asian_laotian_2000:race_asian_laotian_2000,race_asian_malaysian_2000:race_asian_malaysian_2000,race_asian_pakistani_2000:race_asian_pakistani_2000,race_asian_sri_lankan_2000:race_asian_sri_lankan_2000,race_asian_taiwanese_2000:race_asian_taiwanese_2000,race_asian_thai_2000:race_asian_thai_2000,race_asian_vietnamese_2000:race_asian_vietnamese_2000,race_other_asian_2000:race_other_asian_2000,race_other_asian_not_specified_2000:race_other_asian_not_specified_2000,race_pacific_islander_2000:race_pacific_islander_2000,race_pacific_islander_polynesian_2000:race_pacific_islander_polynesian_2000,race_pacific_islander_polynesian_hawaiian_2000:race_pacific_islander_polynesian_hawaiian_2000,race_pacific_islander_polynesian_samoan_2000:race_pacific_islander_polynesian_samoan_2000,race_pacific_islander_polynesian_tongan_2000:race_pacific_islander_polynesian_tongan_2000,race_pacific_islander_polynesian_other_2000:race_pacific_islander_polynesian_other_2000,race_pacific_islander_micronesian_2000:race_pacific_islander_micronesian_2000,race_pacific_islander_micronesian_guam__chamorro_2000:race_pacific_islander_micronesian_guam__chamorro_2000,race_pacific_islander_micronesian_other_2000:race_pacific_islander_micronesian_other_2000,race_pacific_islander_melanesian_2000:race_pacific_islander_melanesian_2000,race_pacific_islander_melanesian_fijian_2000:race_pacific_islander_melanesian_fijian_2000,race_pacific_islander_melanesian_other_2000:race_pacific_islander_melanesian_other_2000,race_pacific_islander_pacific_islander_other_2000:race_pacific_islander_pacific_islander_other_2000,race_pacific_islander_pacific_islander_not_specified_2000:race_pacific_islander_pacific_islander_not_specified_2000,race_white_2010:race_white_2010,race_black_2010:race_black_2010,race_hispanic_2010:race_hispanic_2010,race_asian_2010:race_asian_2010,race_other_2010:race_other_2010,race_hispanic_no_2010:race_hispanic_no_2010,race_hispanic_latino_2010:race_hispanic_latino_2010,race_hispanic_mexican_2010:race_hispanic_mexican_2010,race_hispanic_puerto_rican_2010:race_hispanic_puerto_rican_2010,race_hispanic_cuban_2010:race_hispanic_cuban_2010,race_hispanic_dominican_republic_2010:race_hispanic_dominican_republic_2010,race_hispanic_central_american_2010:race_hispanic_central_american_2010,race_hispanic_costa_rican_2010:race_hispanic_costa_rican_2010,race_hispanic_guatemalan_2010:race_hispanic_guatemalan_2010,race_hispanic_honduran_2010:race_hispanic_honduran_2010,race_hispanic_nicaraguan_2010:race_hispanic_nicaraguan_2010,race_hispanic_panamanian_2010:race_hispanic_panamanian_2010,race_hispanic_salvadoran_2010:race_hispanic_salvadoran_2010,race_hispanic_other_central_american_2010:race_hispanic_other_central_american_2010,race_south_american_2010:race_south_american_2010,race_south_american_argentinean_2010:race_south_american_argentinean_2010,race_south_american_bolivian_2010:race_south_american_bolivian_2010,race_south_american_chilean_2010:race_south_american_chilean_2010,race_south_american_colombian_2010:race_south_american_colombian_2010,race_south_american_ecuadorian_2010:race_south_american_ecuadorian_2010,race_south_american_paraguayan_2010:race_south_american_paraguayan_2010,race_south_american_peruvian_2010:race_south_american_peruvian_2010,race_south_american_uruguayan_2010:race_south_american_uruguayan_2010,race_south_american_venezuelan_2010:race_south_american_venezuelan_2010,race_other_south_american_2010:race_other_south_american_2010,race_hispanic_other_latinos_2010:race_hispanic_other_latinos_2010,race_spaniard_2010:race_spaniard_2010,race_spanish_2010:race_spanish_2010,race_spanish_american_2010:race_spanish_american_2010,race_hispanic_other_2010:race_hispanic_other_2010,race_american_indian_2010:race_american_indian_2010,race_eskimo_2010:race_eskimo_2010,race_aleutian_2010:race_aleutian_2010,race_asian_indian_2010:race_asian_indian_2010,race_asian_bengladeshi_2010:race_asian_bengladeshi_2010,race_asian_cambodian_2010:race_asian_cambodian_2010,race_asian_chinese_2010:race_asian_chinese_2010,race_asian_filipino_2010:race_asian_filipino_2010,race_asian_hmong_2010:race_asian_hmong_2010,race_asian_indonesian_2010:race_asian_indonesian_2010,race_asian_japanese_2010:race_asian_japanese_2010,race_asian_korean_2010:race_asian_korean_2010,race_asian_laotian_2010:race_asian_laotian_2010,race_asian_malaysian_2010:race_asian_malaysian_2010,race_asian_pakistani_2010:race_asian_pakistani_2010,race_asian_sri_lankan_2010:race_asian_sri_lankan_2010,race_asian_taiwanese_2010:race_asian_taiwanese_2010,race_asian_thai_2010:race_asian_thai_2010,race_asian_vietnamese_2010:race_asian_vietnamese_2010,race_other_asian_2010:race_other_asian_2010,race_other_asian_not_specified_2010:race_other_asian_not_specified_2010,race_pacific_islander_2010:race_pacific_islander_2010,race_pacific_islander_polynesian_2010:race_pacific_islander_polynesian_2010,race_pacific_islander_polynesian_hawaiian_2010:race_pacific_islander_polynesian_hawaiian_2010,race_pacific_islander_polynesian_samoan_2010:race_pacific_islander_polynesian_samoan_2010,race_pacific_islander_polynesian_tongan_2010:race_pacific_islander_polynesian_tongan_2010,race_pacific_islander_polynesian_other_2010:race_pacific_islander_polynesian_other_2010,race_pacific_islander_micronesian_2010:race_pacific_islander_micronesian_2010,race_pacific_islander_micronesian_guam_chamorro_2010:race_pacific_islander_micronesian_guam_chamorro_2010,race_pacific_islander_micronesian_marshallese_2010:race_pacific_islander_micronesian_marshallese_2010,race_pacific_islander_micronesian_other_2010:race_pacific_islander_micronesian_other_2010,race_pacific_islander_melanesian_2010:race_pacific_islander_melanesian_2010,race_pacific_islander_melanesian_fijian_2010:race_pacific_islander_melanesian_fijian_2010,race_pacific_islander_melanesian_other_2010:race_pacific_islander_melanesian_other_2010,race_pacific_islander_pacific_islander_not_specified_2010:race_pacific_islander_pacific_islander_not_specified_2010,males_never_married_1990:males_never_married_1990,males_married_1990:males_married_1990,males_separated_1990:males_separated_1990,males_widowed_1990:males_widowed_1990,males_divorced_1990:males_divorced_1990,females_never_married_1990:females_never_married_1990,females_married_1990:females_married_1990,females_separated_1990:females_separated_1990,females_widowed_1990:females_widowed_1990,females_divorced_1990:females_divorced_1990,college_dorms_1990:college_dorms_1990,military_quarters_1990:military_quarters_1990,college_dorms_2000:college_dorms_2000,military_quarters_2000:military_quarters_2000,college_dorms_2010:college_dorms_2010,military_quarters_2010:military_quarters_2010,correctional_facilities_1990:correctional_facilities_1990,nursing_homes_1990:nursing_homes_1990,mental_health_facilities_1990:mental_health_facilities_1990,juvenile_detention_facilities_1990:juvenile_detention_facilities_1990,correctional_facilities_2000:correctional_facilities_2000,nursing_homes_2000:nursing_homes_2000,mental_health_facilities_2000:mental_health_facilities_2000,juvenile_detention_facilities_2000:juvenile_detention_facilities_2000,correctional_facilities_2010:correctional_facilities_2010,nursing_homes_2010:nursing_homes_2010,mental_health_facilities_2010:mental_health_facilities_2010,juvenile_detention_facilities_2010:juvenile_detention_facilities_2010,households_family_2_person_1990:households_family_2_person_1990,households_family_3_person_1990:households_family_3_person_1990,households_family_4_person_1990:households_family_4_person_1990,households_family_5_person_1990:households_family_5_person_1990,households_6_family_person_1990:households_6_family_person_1990,households_1_nonfamily_person_1990:households_1_nonfamily_person_1990,households_nonfamily_2_person_1990:households_nonfamily_2_person_1990,households_nonfamily_3_person_1990:households_nonfamily_3_person_1990,households_nonfamily_4_person_1990:households_nonfamily_4_person_1990,households_nonfamily_5_person_1990:households_nonfamily_5_person_1990,households_nonfamily_6_person_1990:households_nonfamily_6_person_1990,income:income,income_per_capita:income_per_capita,employment_labor_force:employment_labor_force,employment_not_labor_force:employment_not_labor_force,employment_civilian_labor_force:employment_civilian_labor_force,employment_employed:employment_employed,employment_unemployed:employment_unemployed,employment_armed_forces:employment_armed_forces,employment_male_management_business_science_and_arts_occupations:employment_male_management_business_science_and_arts_occupations,employment_male_management_business_and_financial_occupations:employment_male_management_business_and_financial_occupations,employment_male_management_occupations:employment_male_management_occupations,employment_male_business_and_financial_operations_occupations:employment_male_business_and_financial_operations_occupations,employment_male_computer_engineering_and_science_occupations:employment_male_computer_engineering_and_science_occupations,employment_male_computer_and_mathematical_occupations:employment_male_computer_and_mathematical_occupations,employment_male_architecture_and_engineering_occupations:employment_male_architecture_and_engineering_occupations,employment_male_life_physical_and_social_science_occupations:employment_male_life_physical_and_social_science_occupations,employment_male_education_legal_community_service_arts_and_media_occupations:employment_male_education_legal_community_service_arts_and_media_occupations,employment_male_community_and_social_service_occupations:employment_male_community_and_social_service_occupations,employment_male_legal_occupations:employment_male_legal_occupations,employment_male_education_training_and_library_occupations:employment_male_education_training_and_library_occupations,employment_male_arts_design_entertainment_sports_and_media_occupations:employment_male_arts_design_entertainment_sports_and_media_occupations,employment_male_healthcare_practitioners_and_technical_occupations:employment_male_healthcare_practitioners_and_technical_occupations,employment_male_health_diagnosing_and_treating_practitioners_and_other_technical_occupations:employment_male_health_diagnosing_and_treating_practitioners_and_other_technical_occupations,employment_male_health_technologists_and_technicians:employment_male_health_technologists_and_technicians,employment_male_service_occupations:employment_male_service_occupations,employment_male_healthcare_support_occupations:employment_male_healthcare_support_occupations,employment_male_protective_service_occupations:employment_male_protective_service_occupations,employment_male_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors:employment_male_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors,employment_male_law_enforcement_workers_including_supervisors:employment_male_law_enforcement_workers_including_supervisors,employment_male_food_preparation_and_serving_related_occupations:employment_male_food_preparation_and_serving_related_occupations,employment_male_building_and_grounds_cleaning_and_maintenance_occupations:employment_male_building_and_grounds_cleaning_and_maintenance_occupations,employment_male_personal_care_and_service_occupations:employment_male_personal_care_and_service_occupations,employment_male_sales_and_office_occupations:employment_male_sales_and_office_occupations,employment_male_sales_and_related_occupations:employment_male_sales_and_related_occupations,employment_male_office_and_administrative_support_occupations:employment_male_office_and_administrative_support_occupations,employment_male_natural_resources_construction_and_maintenance_occupations:employment_male_natural_resources_construction_and_maintenance_occupations,employment_male_farming_fishing_and_forestry_occupations:employment_male_farming_fishing_and_forestry_occupations,employment_male_construction_and_extraction_occupations:employment_male_construction_and_extraction_occupations,employment_male_installation_maintenance_and_repair_occupations:employment_male_installation_maintenance_and_repair_occupations,employment_male_production_transportation_and_material_moving_occupations:employment_male_production_transportation_and_material_moving_occupations,employment_male_production_occupations:employment_male_production_occupations,employment_male_transportation_occupations:employment_male_transportation_occupations,employment_male_material_moving_occupations:employment_male_material_moving_occupations,employment_female_management_business_science_and_arts_occupations:employment_female_management_business_science_and_arts_occupations,employment_female_management_business_and_financial_occupations:employment_female_management_business_and_financial_occupations,employment_female_management_occupations:employment_female_management_occupations,employment_female_business_and_financial_operations_occupations:employment_female_business_and_financial_operations_occupations,employment_female_computer_engineering_and_science_occupations:employment_female_computer_engineering_and_science_occupations,employment_female_computer_and_mathematical_occupations:employment_female_computer_and_mathematical_occupations,employment_female_architecture_and_engineering_occupations:employment_female_architecture_and_engineering_occupations,employment_female_life_physical_and_social_science_occupations:employment_female_life_physical_and_social_science_occupations,employment_female_education_legal_community_service_arts_and_media_occupations:employment_female_education_legal_community_service_arts_and_media_occupations,employment_female_community_and_social_service_occupations:employment_female_community_and_social_service_occupations,employment_female_legal_occupations:employment_female_legal_occupations,employment_female_education_training_and_library_occupations:employment_female_education_training_and_library_occupations,employment_female_arts_design_entertainment_sports_and_media_occupations:employment_female_arts_design_entertainment_sports_and_media_occupations,employment_female_healthcare_practitioners_and_technical_occupations:employment_female_healthcare_practitioners_and_technical_occupations,employment_female_health_diagnosing_and_treating_practitioners_and_other_technical_occupations:employment_female_health_diagnosing_and_treating_practitioners_and_other_technical_occupations,employment_female_health_technologists_and_technicians:employment_female_health_technologists_and_technicians,employment_female_service_occupations:employment_female_service_occupations,employment_female_healthcare_support_occupations:employment_female_healthcare_support_occupations,employment_female_protective_service_occupations:employment_female_protective_service_occupations,employment_female_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors:employment_female_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors,employment_female_law_enforcement_workers_including_supervisors:employment_female_law_enforcement_workers_including_supervisors,employment_female_food_preparation_and_serving_related_occupations:employment_female_food_preparation_and_serving_related_occupations,employment_female_building_and_grounds_cleaning_and_maintenance_occupations:employment_female_building_and_grounds_cleaning_and_maintenance_occupations,employment_female_personal_care_and_service_occupations:employment_female_personal_care_and_service_occupations,employment_female_sales_and_office_occupations:employment_female_sales_and_office_occupations,employment_female_sales_and_related_occupations:employment_female_sales_and_related_occupations,employment_female_office_and_administrative_support_occupations:employment_female_office_and_administrative_support_occupations,employment_female_natural_resources_construction_and_maintenance_occupations:employment_female_natural_resources_construction_and_maintenance_occupations,employment_female_farming_fishing_and_forestry_occupations:employment_female_farming_fishing_and_forestry_occupations,employment_female_construction_and_extraction_occupations:employment_female_construction_and_extraction_occupations,employment_female_installation_maintenance_and_repair_occupations:employment_female_installation_maintenance_and_repair_occupations,employment_female_production_transportation_and_material_moving_occupations:employment_female_production_transportation_and_material_moving_occupations,employment_female_production_occupations:employment_female_production_occupations,employment_female_transportation_occupations:employment_female_transportation_occupations,employment_female_material_moving_occupations:employment_female_material_moving_occupations,poverty:poverty,poverty_male:poverty_male,poverty_female:poverty_female,poverty_white_alone:poverty_white_alone,poverty_black_alone:poverty_black_alone,population_american_indian_alone:population_american_indian_alone,poverty_asian_alone:poverty_asian_alone,poverty_native_hawaiian_alone:poverty_native_hawaiian_alone,poverty_other_alone:poverty_other_alone,poverty_two_or_more_races:poverty_two_or_more_races,poverty_hispanic_origin:poverty_hispanic_origin,poverty_family:poverty_family,poverty_family_married:poverty_family_married,poverty_family_single_male:poverty_family_single_male,poverty_family_single_female:poverty_family_single_female,age:age,median_male_age:median_male_age,median_female_age:median_female_age,population:population,population_white_alone:population_white_alone,population_black_alone:population_black_alone,population_asian_alone:population_asian_alone,population_native_hawaiian_alone:population_native_hawaiian_alone,population_other_alone:population_other_alone,population_two_or_more_races:population_two_or_more_races,population_hispanic_origin:population_hispanic_origin,median_house_construction_year:median_house_construction_year,median_contract_rent:median_contract_rent,median_gross_rent:median_gross_rent,median_home_value:median_home_value,commute_time:commute_time,commute_time_solo_automobile:commute_time_solo_automobile,commute_time_carpool:commute_time_carpool,commute_time_public_transport:commute_time_public_transport,commute_time_walked:commute_time_walked,commute_time_other:commute_time_other,education_none:education_none,education_high_school:education_high_school,education_ged:education_ged,education_associates:education_associates,education_bachelors:education_bachelors,education_masters:education_masters,education_professional:education_professional,education_doctorate:education_doctorate,"age_85+_1990":{"api":{"sf1":[1990,2010]},"variable":"P0110030","description":"The number of persons ages 85 and older in 1990"},"age_85+_male_2000":{"api":{"sf1":[2000],"sf3":[2000]},"variable":"P012025","description":"The number of male persons ages 85 years old and older in 2000"},"age_85+_female_2000":{"api":{"sf1":[2000]},"variable":"P012049","description":"The number of female persons ages 85 years old and older in 2000"},"age_85+_male_2010":{"api":{"sf1":[2010,2000]},"variable":"P012A025","description":"The number of male persons ages 85 years old and older in 2010"},"age_85+_female_2010":{"api":{"sf1":[2010,2000]},"variable":"P012A049","description":"The number of female persons ages 85 years old and older in 2010"},"households_7+_family_person_1990":{"api":{"sf1":[1990],"sf3":[1990]},"variable":"P0270006","description":"7 person family households in 1990"},"households_nonfamily_7+_person_1990":{"api":{"sf1":[1990]},"variable":"P0270013","description":"7+ person non-family households in 1990"}};

	var AL = [32.3617, -86.2792];
	var AK = [58.3, -134.4167];
	var AZ = [33.45, -112.0667];
	var AR = [34.6361, -92.3311];
	var CA = [38.5766, -121.4934];
	var CO = [39.7391, -104.9849];
	var CT = [41.7641, -72.6828];
	var DE = [39.1619, -75.5267];
	var DC = [38.9047, -77.0164];
	var FL = [30.4381, -84.2816];
	var GA = [33.7493, -84.3883];
	var HI = [21.3073, -157.8573];
	var ID = [43.6177, -116.1996];
	var IL = [39.7983, -89.6544];
	var IN = [39.7686, -86.1625];
	var IA = [41.5912, -93.6039];
	var KS = [39.0481, -95.6781];
	var KY = [38.1867, -84.8753];
	var LA = [30.4571, -91.1874];
	var ME = [44.3235, -69.7653];
	var MD = [38.9786, -76.4911];
	var MA = [42.3582, -71.0637];
	var MI = [42.7337, -84.5556];
	var MN = [44.9553, -93.1022];
	var MS = [32.2992, -90.18];
	var MO = [38.5791, -92.173];
	var MT = [46.5958, -112.027];
	var NE = [40.8106, -96.6803];
	var NV = [39.1608, -119.7539];
	var NH = [43.2067, -71.5381];
	var NJ = [40.2237, -74.764];
	var NM = [35.6672, -105.9644];
	var NY = [42.6525, -73.7572];
	var NC = [35.7806, -78.6389];
	var ND = [46.8133, -100.779];
	var OH = [39.9833, -82.9833];
	var OK = [35.4822, -97.535];
	var OR = [44.9308, -123.0289];
	var PA = [40.2697, -76.8756];
	var PR = [18.4655, -66.1057];
	var RI = [41.8236, -71.4222];
	var SC = [34.0298, -80.8966];
	var SD = [44.368, -100.3364];
	var TN = [36.1667, -86.7833];
	var TX = [30.25, -97.75];
	var UT = [40.75, -111.8833];
	var VT = [44.25, -72.5667];
	var VA = [37.5333, -77.4667];
	var WA = [47.0425, -122.8931];
	var WV = [38.3472, -81.6333];
	var WI = [43.0667, -89.4];
	var WY = [41.1456, -104.8019];
	var stateCapitalsLatLng = {
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

	var defaultEndpoints = {
	  acsVariableDictionaryURL: 'https://api.census.gov/data/',
	  geoCoderUrl: 'https://geocoding.geo.census.gov/geocoder/geographies/',
	  tigerwebUrl: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/',
	  censusUrl: 'https://api.census.gov/data/'
	};

	var zctaJsonUrl = 'https://s3.amazonaws.com/citysdk/zipcode-to-coordinates.json';
	var fipsGeocoderUrl = 'https://geocoding.geo.census.gov/geocoder/geographies/coordinates?';
	var addressGeocoderUrl = 'https://geocoding.geo.census.gov/geocoder/locations/address?benchmark=4&format=jsonp';

	var CitySdkRequestUtils = function () {
	  function CitySdkRequestUtils() {
	    classCallCheck(this, CitySdkRequestUtils);
	  }

	  createClass(CitySdkRequestUtils, null, [{
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
	        latlng = stateCapitalsLatLng[stateCode];
	      }

	      return latlng;
	    }
	  }, {
	    key: 'getLatLngFromZipcode',
	    value: function getLatLngFromZipcode(zip) {
	      return new Promise$1(function (resolve, reject) {
	        CitySdkHttp.get(zctaJsonUrl, false).then(function (coordinates) {
	          return resolve(coordinates[zip]);
	        }).catch(function (reason) {
	          return reject(reason);
	        });
	      });
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

	      return CitySdkHttp.get(url, true);
	    }
	  }, {
	    key: 'getLatLng',
	    value: function getLatLng(request) {
	      var promiseHandler = function promiseHandler(resolve, reject) {
	        if (request.address) {
	          CitySdkRequestUtils.getLatLngFromAddress(request.address).then(function (response) {
	            var coordinates = response.result.addressMatches[0].coordinates;
	            request.lat = coordinates.y;
	            request.lng = coordinates.x;
	            resolve(request);
	          }).catch(function (reason) {
	            return reject(reason);
	          });
	        } else if (request.zip) {
	          CitySdkRequestUtils.getLatLngFromZipcode(request.zip).then(function (coordinates) {
	            request.lat = coordinates[1];
	            request.lng = coordinates[0];
	            resolve(request);
	          }).catch(function (reason) {
	            return reject(reason);
	          });
	        } else if (request.state) {
	          // Since this function returns a promise we want this to be an asynchronous
	          // call. Therefore, we wrap in a setTimout() since it allows the function to
	          // return before the code inside the setTimeout is excecuted.
	          setTimeout(function () {
	            var coordinates = CitySdkRequestUtils.getLatLngFromStateCode(request.state);
	            request.lat = coordinates[0];
	            request.lng = coordinates[1];

	            resolve(request);
	          }, 0);
	        } else {
	          reject(new Error("One of 'address', 'state' or 'zip' must be provided."));
	        }
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }, {
	    key: 'getFipsFromLatLng',
	    value: function getFipsFromLatLng(request) {
	      var lat = request.lat;
	      var lng = request.lng;
	      var url = fipsGeocoderUrl;

	      // Benchmark id: 4 = Public_AR_Current
	      // Vintage id: 4 = Current_Current
	      url += 'x=' + lng + '&y=' + lat + '&benchmark=4&vintage=4&layers=8,12,28,84,86&format=jsonp';

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        CitySdkHttp.get(url, true).then(function (response) {
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
	          resolve(request);
	        }).catch(function (reason) {
	          return reject(reason);
	        });
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }, {
	    key: 'getGeographyVariables',
	    value: function getGeographyVariables(request) {
	      if (!request.api || !request.year) {
	        throw new Error('Invalid request! "year" and "api" fields must be provided.');
	      }

	      var url = '' + defaultEndpoints.censusUrl + request.year + '/' + request.api + '/geography.json';
	      return CitySdkHttp.get(url, false);
	    }
	  }]);
	  return CitySdkRequestUtils;
	}();

	var acs5 = { "2010": ["NAME"], "2011": ["NAME"], "2012": ["NAME"], "2013": ["NAME"], "2014": ["NAME"] };
	var ewks = { "2002": ["NAICS2002", "OPTAX"], "2007": ["NAICS2007"], "2012": ["NAICS2012", "OPTAX"] };
	var acs3 = { "2012": ["NAME"], "2013": ["NAME"] };
	var nonemp_old = { "2012": ["NAICS2012"] };
	var sf1 = { "1990": ["ANPSADPI"], "2000": ["NAME"], "2010": ["NAME"] };
	var sf3 = { "1990": ["ANPSADPI"], "2000": ["NAME"] };
	var acs1 = { "2012": ["NAME"], "2013": ["NAME"], "2014": ["NAME"] };
	var pubschlfin = { "2012": ["NAME"] };
	var language = { "2013": ["NAME"] };
	var cbp = { "2012": ["NAICS2012"], "2013": ["NAICS2012"] };
	var requiredVariables = {
		acs5: acs5,
		ewks: ewks,
		acs3: acs3,
		nonemp_old: nonemp_old,
		sf1: sf1,
		sf3: sf3,
		acs1: acs1,
		pubschlfin: pubschlfin,
		language: language,
		cbp: cbp,
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

	var CitySdkSummaryRequest = function () {
	  function CitySdkSummaryRequest() {
	    classCallCheck(this, CitySdkSummaryRequest);
	  }

	  createClass(CitySdkSummaryRequest, null, [{
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

	            var validVariable = CitySdkRequestUtils.parseToValidVariable(currentVariable, request.api, request.year);
	            var index = response[0].indexOf(validVariable);
	            var intermediateVar = currentResponseItem[index];

	            if (intermediateVar) {
	              currentDataObject[currentVariable] = intermediateVar;
	            }

	            // Variable is Normalizeable
	            if (intermediateVar && CitySdkRequestUtils.isNormalizable(currentVariable) && CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year)) {

	              var _validVariable = CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year);
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

	          if (CitySdkRequestUtils.parseToValidVariable(_currentVariable, request.api, request.year)) {
	            var _validVariable2 = CitySdkRequestUtils.parseToValidVariable(_currentVariable, request.api, request.year);
	            var _index2 = response[0].indexOf(_validVariable2);

	            _currentDataObject[_currentVariable] = response[1][_index2];
	          }

	          if (_currentDataObject[_currentVariable] && CitySdkRequestUtils.isNormalizable(_currentVariable) && CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year)) {

	            var _validVariable3 = CitySdkRequestUtils.parseToValidVariable('population', request.api, request.year);
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

	          if (CitySdkRequestUtils.isNormalizable(variable)) {
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
	        if (CitySdkRequestUtils.isNormalizable(variables[_i2]) && !hasPopulation) {
	          // add acs population variable
	          if (_request.variables.indexOf('population') < 0) {
	            //We have a variable that is normalizable, but no population in the request.
	            //Grab the population
	            _request.variables.push('population');
	          }

	          hasPopulation = true;
	        }

	        // Convert the aliased variables
	        var variableIntermediate = CitySdkRequestUtils.parseToValidVariable(_request.variables[_i2], _request.api, _request.year);

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

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        CitySdkHttp.get(url, false).then(function (response) {
	          _request = CitySdkSummaryRequest.parseSummaryResponse(_request, response);
	          resolve(_request);
	        }).catch(function (reason) {
	          return reject(reason);
	        });
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }]);
	  return CitySdkSummaryRequest;
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

	var CitySdkTigerwebRequest = function () {
	  function CitySdkTigerwebRequest() {
	    classCallCheck(this, CitySdkTigerwebRequest);
	  }

	  createClass(CitySdkTigerwebRequest, null, [{
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
	          CitySdkTigerwebRequest.getContainerGeometry(_request).then(CitySdkTigerwebRequest.getGeoData).then(function (response) {
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

	          CitySdkTigerwebRequest.getContainerGeometry(_request).then(CitySdkTigerwebRequest.getGeoData).then(function (response) {
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
	  return CitySdkTigerwebRequest;
	}();

	var acs5$1 = ["2010", "2013", "2011", "2012", "2014"];
	var ewks$1 = ["2007", "2012", "2002"];
	var acs3$1 = ["2013", "2012"];
	var nonemp_old$1 = ["2012"];
	var nonemp = ["2011", "2012", "2013", "2008", "2010", "2009"];
	var sf1$1 = ["1990", "2010", "2000"];
	var cbp$1 = ["2008", "2010", "2009", "2013", "2012", "2011"];
	var sf3$1 = ["1990", "2000"];
	var acs1$1 = ["2014", "2013", "2012"];
	var pubschlfin$1 = ["2012"];
	var language$1 = ["2013"];
	var availableDatasets = {
		acs5: acs5$1,
		ewks: ewks$1,
		acs3: acs3$1,
		nonemp_old: nonemp_old$1,
		nonemp: nonemp,
		sf1: sf1$1,
		cbp: cbp$1,
		sf3: sf3$1,
		acs1: acs1$1,
		pubschlfin: pubschlfin$1,
		language: language$1,
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

	var CitySdkRequestValidator = function () {
	  function CitySdkRequestValidator() {
	    classCallCheck(this, CitySdkRequestValidator);
	  }

	  createClass(CitySdkRequestValidator, null, [{
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
	      var promiseHandler = function promiseHandler(resolve, reject) {
	        CitySdkRequestUtils.getGeographyVariables(request).then(function (response) {
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
	            resolve(request);
	          } else {
	            if (requiredFields) {
	              reject(new Error('Request is missing required fields: ' + requiredFields + '.'));
	            } else {
	              reject(new Error('Invalid level "' + level + '" for this request.'));
	            }
	          }
	        }).catch(function (reason) {
	          return reject(reason);
	        });
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }]);
	  return CitySdkRequestValidator;
	}();

	var AL$1 = "alabama";
	var AK$1 = "alaska";
	var AZ$1 = "arizona";
	var AR$1 = "arkansas";
	var CA$1 = "california";
	var CO$1 = "colorado";
	var CT$1 = "connecticut";
	var DE$1 = "delaware";
	var DC$1 = "district of columbia";
	var FL$1 = "florida";
	var GA$1 = "georgia";
	var HI$1 = "hawaii";
	var ID$1 = "idaho";
	var IL$1 = "illinois";
	var IN$1 = "indiana";
	var IA$1 = "iowa";
	var KS$1 = "kansas";
	var KY$1 = "kentucky";
	var LA$1 = "louisiana";
	var ME$1 = "maine";
	var MD$1 = "maryland";
	var MA$1 = "massachusetts";
	var MI$1 = "michigan";
	var MN$1 = "minnesota";
	var MS$1 = "mississippi";
	var MO$1 = "missouri";
	var MT$1 = "montana";
	var NE$1 = "nebraska";
	var NV$1 = "nevada";
	var NH$1 = "new hampshire";
	var NJ$1 = "new jersey";
	var NM$1 = "new mexico";
	var NY$1 = "new york";
	var NC$1 = "north carolina";
	var ND$1 = "north dakota";
	var OH$1 = "ohio";
	var OK$1 = "oklahoma";
	var OR$1 = "oregon";
	var PA$1 = "pennsylvania";
	var PR$1 = "puerto rico";
	var RI$1 = "rhode island";
	var SC$1 = "south carolina";
	var SD$1 = "south dakota";
	var TN$1 = "tennessee";
	var TX$1 = "texas";
	var UT$1 = "utah";
	var VT$1 = "vermont";
	var VA$1 = "virginia";
	var WA$1 = "washington";
	var WV$1 = "west virginia";
	var WI$1 = "wisconsin";
	var WY$1 = "wyoming";
	var stateNames = {
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

	var P0010001 = { "alias": "population_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Total population in 1990" };
	var P001001 = { "alias": "population_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Total population in 2000" };
	var PCT0120001 = { "alias": "population_2010", "api": { "sf1": [2010] }, "description": "Total population in 2010" };
	var P0020001 = { "alias": "population_families_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of families in 1990" };
	var P031001 = { "alias": "population_families_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of families in 2000" };
	var PCT0160002 = { "alias": "population_families_2010", "api": { "sf1": [2010] }, "description": "The number of families in 2010" };
	var P0050001 = { "alias": "population_male_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of males in 1990" };
	var P0050002 = { "alias": "population_female_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of females in 1990" };
	var P012002 = { "alias": "population_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of males in 2000" };
	var P012026 = { "alias": "population_female_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of females in 2000" };
	var P0120002 = { "alias": "population_male_2010", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of males in 2010" };
	var P0120026 = { "alias": "population_female_2010", "api": { "sf1": [1990, 2010] }, "description": "The number of females in 2010" };
	var P0110001 = { "alias": "age_under_1_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons under 1 year old in 1990" };
	var P0110002 = { "alias": "age_1_to_2_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons ages 1 to 2 years old in 1990" };
	var P0110003 = { "alias": "age_3_to_4_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons ages 3 to 4 years old in 1990" };
	var P0110004 = { "alias": "age_5_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 5 years old in 1990" };
	var P0110005 = { "alias": "age_6_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons ages 6 years old in 1990" };
	var P0110006 = { "alias": "age_7_to_9_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons ages 7 to 9 years old in 1990" };
	var P0110007 = { "alias": "age_10_to_11_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons ages 10 to 11 years old in 1990" };
	var P0110008 = { "alias": "age_12_to_13_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons ages 12 to 13 years old in 1990" };
	var P0110009 = { "alias": "age_14_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 14 years old in 1990" };
	var P0110010 = { "alias": "age_15_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 15 years old in 1990" };
	var P0110011 = { "alias": "age_16_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 16 years old in 1990" };
	var P0110012 = { "alias": "age_17_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 17 years old in 1990" };
	var P0110013 = { "alias": "age_18_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 18 years old in 1990" };
	var P0110014 = { "alias": "age_19_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 19 years old in 1990" };
	var P0110015 = { "alias": "age_20_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 20 years old in 1990" };
	var P0110016 = { "alias": "age_21_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "The number of persons age 21 years old in 1990" };
	var P0110017 = { "alias": "age_22_to_24_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 22 to 24 years old in 1990" };
	var P0110018 = { "alias": "age_25_to_29_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 25 to 29 years old in 1990" };
	var P0110019 = { "alias": "age_30_to_34_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 30 to 34 years old in 1990" };
	var P0110020 = { "alias": "age_35_to_39_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 35 to 39 years old in 1990" };
	var P0110021 = { "alias": "age_40_to_44_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 40 to 44 years old in 1990" };
	var P0110022 = { "alias": "age_45_to_49_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 45 to 49 years old in 1990" };
	var P0110023 = { "alias": "age_50_to_54_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 50 to 54 years old in 1990" };
	var P0110024 = { "alias": "age_55_to_59_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 55 to 59 years old in 1990" };
	var P0110025 = { "alias": "age_60_to_61_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 60 to 61 years old in 1990" };
	var P0110026 = { "alias": "age_62_to_64_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 62 to 64 years old in 1990" };
	var P0110027 = { "alias": "age_65_to_69_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 65 to 69 years old in 1990" };
	var P0110028 = { "alias": "age_70_to_74_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 70 to 74 years old in 1990" };
	var P0110029 = { "alias": "age_75_to_79_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 75 to 79 years old in 1990" };
	var P0110030 = { "alias": "age_85+_1990", "api": { "sf1": [1990, 2010] }, "description": "The number of persons ages 85 and older in 1990" };
	var P012003 = { "alias": "age_under_5_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages under 5 years old in 2000" };
	var P012004 = { "alias": "age_5_to_9_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 5 to 9 years old in 2000" };
	var P012005 = { "alias": "age_10_to_14_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 10 to 14 years old in 2000" };
	var P012006 = { "alias": "age_15_to_17_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 15 to 17 years old in 2000" };
	var P012007 = { "alias": "age_18_to_19_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 18 to 19 years old in 2000" };
	var P012008 = { "alias": "age_20_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons age 20 years old in 2000" };
	var P012009 = { "alias": "age_21_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons age 21 years old in 2000" };
	var P012010 = { "alias": "age_22_to_24_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 22 to 24 years old in 2000" };
	var P012011 = { "alias": "age_25_to_29_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 25 to 29 years old in 2000" };
	var P012012 = { "alias": "age_30_to_34_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 30 to 34 years old in 2000" };
	var P012013 = { "alias": "age_35_to_39_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 35 to 39 years old in 2000" };
	var P012014 = { "alias": "age_40_to_44_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 40 to 44 years old in 2000" };
	var P012015 = { "alias": "age_45_to_49_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 45 to 49 years old in 2000" };
	var P012016 = { "alias": "age_50_to_54_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 50 to 54 years old in 2000" };
	var P012017 = { "alias": "age_55_to_59_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 55 to 59 years old in 2000" };
	var P012018 = { "alias": "age_60_to_61_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 60 to 61 years old in 2000" };
	var P012019 = { "alias": "age_62_to_64_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 62 to 64 years old in 2000" };
	var P012020 = { "alias": "age_65_to_66_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 65 to 66 years old in 2000" };
	var P012021 = { "alias": "age_67_to_69_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 67 to 69 years old in 2000" };
	var P012022 = { "alias": "age_70_to_74_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 70 to 74 years old in 2000" };
	var P012023 = { "alias": "age_75_to_79_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 75 to 79 years old in 2000" };
	var P012024 = { "alias": "age_80_to_84_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 80 to 84 years old in 2000" };
	var P012025 = { "alias": "age_85+_male_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of male persons ages 85 years old and older in 2000" };
	var P012027 = { "alias": "age_under_5_female_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of female persons ages under 5 years old in 2000" };
	var P012028 = { "alias": "age_5_to_9_female_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of female persons ages 5 to 9 years old in 2000" };
	var P012029 = { "alias": "age_10_to_14_female_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of female persons ages 10 to 14 years old in 2000" };
	var P012030 = { "alias": "age_15_to_17_female_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of female persons ages 15 to 17 years old in 2000" };
	var P012031 = { "alias": "age_18_to_19_female_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "The number of female persons ages 18 to 19 years old in 2000" };
	var P012032 = { "alias": "age_20_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons age 20 years old in 2000" };
	var P012033 = { "alias": "age_21_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons age 21 years old in 2000" };
	var P012034 = { "alias": "age_22_to_24_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 22 to 24 years old in 2000" };
	var P012035 = { "alias": "age_25_to_29_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 25 to 29 years old in 2000" };
	var P012036 = { "alias": "age_30_to_34_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 30 to 34 years old in 2000" };
	var P012037 = { "alias": "age_35_to_39_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 35 to 39 years old in 2000" };
	var P012038 = { "alias": "age_40_to_44_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 40 to 44 years old in 2000" };
	var P012039 = { "alias": "age_45_to_49_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 45 to 49 years old in 2000" };
	var P012040 = { "alias": "age_50_to_54_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 50 to 54 years old in 2000" };
	var P012041 = { "alias": "age_55_to_59_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 55 to 59 years old in 2000" };
	var P012042 = { "alias": "age_60_to_61_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 60 to 61 years old in 2000" };
	var P012043 = { "alias": "age_62_to_64_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 62 to 64 years old in 2000" };
	var P012044 = { "alias": "age_65_to_66_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 65 to 66 years old in 2000" };
	var P012045 = { "alias": "age_67_to_69_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 67 to 69 years old in 2000" };
	var P012046 = { "alias": "age_70_to_74_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 70 to 74 years old in 2000" };
	var P012047 = { "alias": "age_75_to_79_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 75 to 79 years old in 2000" };
	var P012048 = { "alias": "age_80_to_84_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 80 to 84 years old in 2000" };
	var P012049 = { "alias": "age_85+_female_2000", "api": { "sf1": [2000] }, "description": "The number of female persons ages 85 years old and older in 2000" };
	var P012A003 = { "alias": "age_under_5_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages under 5 years old in 2010" };
	var P012A004 = { "alias": "age_5_to_9_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 5 to 9 years old in 2010" };
	var P012A005 = { "alias": "age_10_to_14_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 10 to 14 years old in 2010" };
	var P012A006 = { "alias": "age_15_to_17_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 15 to 17 years old in 2010" };
	var P012A007 = { "alias": "age_18_to_19_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 18 to 19 years old in 2010" };
	var P012A008 = { "alias": "age_20_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons age 20 years old in 2010" };
	var P012A009 = { "alias": "age_21_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons age 21 years old in 2010" };
	var P012A010 = { "alias": "age_22_to_24_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 22 to 24 years old in 2010" };
	var P012A011 = { "alias": "age_25_to_29_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 25 to 29 years old in 2010" };
	var P012A012 = { "alias": "age_30_to_34_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 30 to 34 years old in 2010" };
	var P012A013 = { "alias": "age_35_to_39_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 35 to 39 years old in 2010" };
	var P012A014 = { "alias": "age_40_to_44_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 40 to 44 years old in 2010" };
	var P012A015 = { "alias": "age_45_to_49_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 45 to 49 years old in 2010" };
	var P012A016 = { "alias": "age_50_to_54_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 50 to 54 years old in 2010" };
	var P012A017 = { "alias": "age_55_to_59_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 55 to 59 years old in 2010" };
	var P012A018 = { "alias": "age_60_to_61_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 60 to 61 years old in 2010" };
	var P012A019 = { "alias": "age_62_to_64_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 62 to 64 years old in 2010" };
	var P012A020 = { "alias": "age_65_to_66_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 65 to 66 years old in 2010" };
	var P012A021 = { "alias": "age_67_to_69_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 67 to 69 years old in 2010" };
	var P012A022 = { "alias": "age_70_to_74_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 70 to 74 years old in 2010" };
	var P012A023 = { "alias": "age_75_to_79_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 75 to 79 years old in 2010" };
	var P012A024 = { "alias": "age_80_to_84_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 80 to 84 years old in 2010" };
	var P012A025 = { "alias": "age_85+_male_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of male persons ages 85 years old and older in 2010" };
	var P012A027 = { "alias": "age_under_5_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages under 5 years old in 2010" };
	var P012A028 = { "alias": "age_5_to_9_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 5 to 9 years old in 2010" };
	var P012A029 = { "alias": "age_10_to_14_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 10 to 14 years old in 2010" };
	var P012A030 = { "alias": "age_15_to_17_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 15 to 17 years old in 2010" };
	var P012A031 = { "alias": "age_18_to_19_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 18 to 19 years old in 2010" };
	var P012A032 = { "alias": "age_20_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons age 20 years old in 2010" };
	var P012A033 = { "alias": "age_21_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons age 21 years old in 2010" };
	var P012A034 = { "alias": "age_22_to_24_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 22 to 24 years old in 2010" };
	var P012A035 = { "alias": "age_25_to_29_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 25 to 29 years old in 2010" };
	var P012A036 = { "alias": "age_30_to_34_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 30 to 34 years old in 2010" };
	var P012A037 = { "alias": "age_35_to_39_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 35 to 39 years old in 2010" };
	var P012A038 = { "alias": "age_40_to_44_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 40 to 44 years old in 2010" };
	var P012A039 = { "alias": "age_45_to_49_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 45 to 49 years old in 2010" };
	var P012A040 = { "alias": "age_50_to_54_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 50 to 54 years old in 2010" };
	var P012A041 = { "alias": "age_55_to_59_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 55 to 59 years old in 2010" };
	var P012A042 = { "alias": "age_60_to_61_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 60 to 61 years old in 2010" };
	var P012A043 = { "alias": "age_62_to_64_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 62 to 64 years old in 2010" };
	var P012A044 = { "alias": "age_65_to_66_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 65 to 66 years old in 2010" };
	var P012A045 = { "alias": "age_67_to_69_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 67 to 69 years old in 2010" };
	var P012A046 = { "alias": "age_70_to_74_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 70 to 74 years old in 2010" };
	var P012A047 = { "alias": "age_75_to_79_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 75 to 79 years old in 2010" };
	var P012A048 = { "alias": "age_80_to_84_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 80 to 84 years old in 2010" };
	var P012A049 = { "alias": "age_85+_female_2010", "api": { "sf1": [2010, 2000] }, "description": "The number of female persons ages 85 years old and older in 2010" };
	var P0080001 = { "alias": "race_hispanic_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Hispanic) in 1990" };
	var P0060004 = { "alias": "race_asian_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Asian) in 1990" };
	var P0060005 = { "alias": "race_other_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 1990" };
	var P0090001 = { "alias": "race_hispanic_no_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Hispanic No) in 1990" };
	var P0090002 = { "alias": "race_hispanic_mexican_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Hispanic Mexican) in 1990" };
	var P0090003 = { "alias": "race_hispanic_puerto_rican_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Hispanic Puerto Rican) in 1990" };
	var P0090004 = { "alias": "race_hispanic_cuban_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Hispanic Cuban) in 1990" };
	var P0090005 = { "alias": "race_hispanic_other_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Hispanic Other) in 1990" };
	var P0070001 = { "alias": "race_white_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (White) in 1990" };
	var P0070002 = { "alias": "race_black_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population (Black) in 1990" };
	var P0070003 = { "alias": "race_american_indian_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (American Indian) in 1990" };
	var P0070004 = { "alias": "race_eskimo_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Eskimo) in 1990" };
	var P0070005 = { "alias": "race_aleutian_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Aleutian) in 1990" };
	var P0070006 = { "alias": "race_chinese_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Chinese) in 1990" };
	var P0070007 = { "alias": "race_filipino_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Filipino) in 1990" };
	var P0070008 = { "alias": "race_japanese_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Japanese) in 1990" };
	var P0070009 = { "alias": "race_asian_indian_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Asian Indian) in 1990" };
	var P0070010 = { "alias": "race_korean_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Korean) in 1990" };
	var P0070011 = { "alias": "race_vietnamese_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Vietnamese) in 1990" };
	var P0070012 = { "alias": "race_cambodian_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Cambodian) in 1990" };
	var P0070013 = { "alias": "race_hmong_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Hmong) in 1990" };
	var P0070014 = { "alias": "race_laotian_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Laotian) in 1990" };
	var P0070015 = { "alias": "race_thai_1990", "api": { "sf1": [1990, 2010] }, "description": "Population (Thai) in 1990" };
	var P0070016 = { "alias": "race_other_asian_1990", "api": { "sf1": [1990] }, "description": "Population (Other Asian) in 1990" };
	var P0070017 = { "alias": "race_hawaiian_1990", "api": { "sf1": [1990] }, "description": "Population (Hawaiian) in 1990" };
	var P0070018 = { "alias": "race_samoan_1990", "api": { "sf1": [1990] }, "description": "Population (Samoan) in 1990" };
	var P0070019 = { "alias": "race_tongan_1990", "api": { "sf1": [1990] }, "description": "Population (Tongan) in 1990" };
	var P0070020 = { "alias": "race_other_polynesian_1990", "api": { "sf1": [1990] }, "description": "Population (Tongan) in 1990" };
	var P0070021 = { "alias": "race_guamanian_1990", "api": { "sf1": [1990] }, "description": "Population (Guamanian) in 1990" };
	var P0070022 = { "alias": "race_other_micronesian_1990", "api": { "sf1": [1990] }, "description": "Population (Micronesian) in 1990" };
	var P0070023 = { "alias": "race_melanesian_1990", "api": { "sf1": [1990] }, "description": "Population (Melanesian) in 1990" };
	var P0070024 = { "alias": "race_pacific_islander_1990", "api": { "sf1": [1990] }, "description": "Population (Pacific Islander) in 1990" };
	var P0070025 = { "alias": "race_other_race_1990", "api": { "sf1": [1990] }, "description": "Population (Other Race) in 1990" };
	var PCT012A001 = { "alias": "race_white_2010", "api": { "sf1": [2010, 2000] }, "description": "Population (White) in 2010" };
	var PCT012B001 = { "alias": "race_black_2010", "api": { "sf1": [2010, 2000] }, "description": "Population (Black) in 2010" };
	var PCT012H001 = { "alias": "race_hispanic_2010", "api": { "sf1": [2010, 2000] }, "description": "Population (Hispanic) in 2010" };
	var PCT012D001 = { "alias": "race_asian_2010", "api": { "sf1": [2010, 2000] }, "description": "Population (Asian) in 2010" };
	var P003008 = { "alias": "race_other_2000", "api": { "sf1": [2000] }, "description": "Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2000" };
	var PCT011002 = { "alias": "race_hispanic_no_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hispanic No) in 2000" };
	var PCT011003 = { "alias": "race_hispanic_latino_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hispanic Latino) in 2000" };
	var PCT011004 = { "alias": "race_hispanic_mexican_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hispanic Mexican) in 2000" };
	var PCT011005 = { "alias": "race_hispanic_puerto_rican_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hispanic Puerto Rican) in 2000" };
	var PCT011006 = { "alias": "race_hispanic_cuban_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hispanic Cuban) in 2000" };
	var PCT011007 = { "alias": "race_hispanic_dominican_republic_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hispanic Dominican Republic) in 2000" };
	var PCT011008 = { "alias": "race_hispanic_central_american_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hispanic Central American) in 2000" };
	var PCT011009 = { "alias": "race_hispanic_costa_rican_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic Costa Rican) in 2000" };
	var PCT011010 = { "alias": "race_hispanic_guatemalan_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic Guatemalan) in 2000" };
	var PCT011011 = { "alias": "race_hispanic_honduran_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic Honduran) in 2000" };
	var PCT011012 = { "alias": "race_hispanic_nicaraguan_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic Nicaraguan) in 2000" };
	var PCT011013 = { "alias": "race_hispanic_panamanian_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic Panamanian) in 2000" };
	var PCT011014 = { "alias": "race_hispanic_salvadoran_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic Salvadoran) in 2000" };
	var PCT011015 = { "alias": "race_hispanic_other_central_american_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic other Central American) in 2000" };
	var PCT011016 = { "alias": "race_south_american_2000", "api": { "sf1": [2000] }, "description": "Population (South American) in 2000" };
	var PCT011017 = { "alias": "rac_south_americane_argentinean_2000", "api": { "sf1": [2000] }, "description": "Population (Agentinean) in 2000" };
	var PCT011018 = { "alias": "race_south_american_bolivian_2000", "api": { "sf1": [2000] }, "description": "Population (Bolivian) in 2000" };
	var PCT011019 = { "alias": "race_south_american_chilean_2000", "api": { "sf1": [2000] }, "description": "Population (Chilean) in 2000" };
	var PCT011020 = { "alias": "race_colombian_2000", "api": { "sf1": [2000] }, "description": "Population (Colombian) in 2000" };
	var PCT011021 = { "alias": "race_south_american_ecuadorian_2000", "api": { "sf1": [2000] }, "description": "Population (Ecuadorian) in 2000" };
	var PCT011022 = { "alias": "race_south_american_paraguayan_2000", "api": { "sf1": [2000] }, "description": "Population (Paraguayan) in 2000" };
	var PCT011023 = { "alias": "race_south_american_peruvian_2000", "api": { "sf1": [2000] }, "description": "Population (Peruvian) in 2000" };
	var PCT011024 = { "alias": "race_south_american_uruguayan_2000", "api": { "sf1": [2000] }, "description": "Population (Uruguayan) in 2000" };
	var PCT011025 = { "alias": "race_south_american_venezuelan_2000", "api": { "sf1": [2000] }, "description": "Population (Venezuelan) in 2000" };
	var PCT011026 = { "alias": "race_other_south_american_2000", "api": { "sf1": [2000] }, "description": "Population (other South American) in 2000" };
	var PCT011027 = { "alias": "race_hispanic_other_latinos_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic other Latinos) in 2000" };
	var PCT011028 = { "alias": "race_spaniard_2000", "api": { "sf1": [2000] }, "description": "Population (Spaniard) in 2000" };
	var PCT011029 = { "alias": "race_spanish_2000", "api": { "sf1": [2000] }, "description": "Population (Spanish) in 2000" };
	var PCT011030 = { "alias": "race_spanish_american_2000", "api": { "sf1": [2000] }, "description": "Population (Spanish American) in 2000" };
	var PCT011031 = { "alias": "race_hispanic_other_2000", "api": { "sf1": [2000] }, "description": "Population (Hispanic Other) in 2000" };
	var PCT012C001 = { "alias": "race_american_indian_2010", "api": { "sf1": [2010, 2000] }, "description": "Population (American Indian) in 2010" };
	var PCT001042 = { "alias": "race_eskimo_2000", "api": { "sf1": [2000] }, "description": "Population (Eskimo) in 2000" };
	var PCT001043 = { "alias": "race_aleutian_2000", "api": { "sf1": [2000] }, "description": "Population (Aleutian) in 2000" };
	var PCT005002 = { "alias": "race_asian_indian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Asian Indian) in 2000" };
	var PCT005003 = { "alias": "race_asian_bengladeshi_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Bengladeshi) in 2000" };
	var PCT005004 = { "alias": "race_asian_cambodian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Cambodian) in 2000" };
	var PCT005005 = { "alias": "race_asian_chinese_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Chinese except Taiwanese) in 2000" };
	var PCT005006 = { "alias": "race_asian_filipino_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Filipino) in 2000" };
	var PCT005007 = { "alias": "race_asian_hmong_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Hmong) in 2000" };
	var PCT005008 = { "alias": "race_asian_indonesian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Indonesian) in 2000" };
	var PCT005009 = { "alias": "race_asian_japanese_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Japanese) in 2000" };
	var PCT005010 = { "alias": "race_asian_korean_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Korean) in 2000" };
	var PCT005011 = { "alias": "race_asian_laotian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Laotian) in 2000" };
	var PCT005012 = { "alias": "race_asian_malaysian_2000", "api": { "sf1": [2000] }, "description": "Population (Malaysian) in 2000" };
	var PCT005013 = { "alias": "race_asian_pakistani_2000", "api": { "sf1": [2000] }, "description": "Population (Pakastani) in 2000" };
	var PCT005014 = { "alias": "race_asian_sri_lankan_2000", "api": { "sf1": [2000] }, "description": "Population (Sri Lankan) in 2000" };
	var PCT005015 = { "alias": "race_asian_taiwanese_2000", "api": { "sf1": [2000] }, "description": "Population (Taiwanese) in 2000" };
	var PCT005016 = { "alias": "race_asian_thai_2000", "api": { "sf1": [2000] }, "description": "Population (Thai) in 2000" };
	var PCT005017 = { "alias": "race_asian_vietnamese_2000", "api": { "sf1": [2000] }, "description": "Population (Vietnamese) in 2000" };
	var PCT005018 = { "alias": "race_other_asian_2000", "api": { "sf1": [2000] }, "description": "Population (Other Asian) in 2000" };
	var PCT005019 = { "alias": "race_other_asian_not_specified_2010", "api": { "sf1": [2000] }, "description": "Population (Other Asian, not specified) in 2010" };
	var PCT008001 = { "alias": "race_pacific_islander_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Pacific Islander) in 2000" };
	var PCT008002 = { "alias": "race_pacific_islander_polynesian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Other Asian not specified) in 2000" };
	var PCT008003 = { "alias": "race_pacific_islander_polynesian_hawaiian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Native Hawaiian) in 2000" };
	var PCT008004 = { "alias": "race_pacific_islander_polynesian_samoan_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Samoan) in 2000" };
	var PCT008005 = { "alias": "race_pacific_islander_polynesian_tongan_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Tongan) in 2000" };
	var PCT008006 = { "alias": "race_pacific_islander_polynesian_other_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (other Polynesian) in 2000" };
	var PCT008007 = { "alias": "race_pacific_islander_micronesian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Micronesian) in 2000" };
	var PCT008008 = { "alias": "race_pacific_islander_micronesian_guam__chamorro_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Micronesian - Guam or Chamorro) in 2000" };
	var PCT008009 = { "alias": "race_pacific_islander_micronesian_other_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (other Micronesian) in 2000" };
	var PCT008010 = { "alias": "race_pacific_islander_melanesian_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population (Melanesian) in 2000" };
	var PCT008011 = { "alias": "race_pacific_islander_melanesian_fijian_2000", "api": { "sf1": [2000] }, "description": "Population (Melanesian - Fijian) in 2000" };
	var PCT008012 = { "alias": "race_pacific_islander_melanesian_other_2000", "api": { "sf1": [2000] }, "description": "Population (other Melanesian) in 2000" };
	var PCT008013 = { "alias": "race_pacific_islander_pacific_islander_other_2000", "api": { "sf1": [2000] }, "description": "Population (other Pacific Islander) in 2000" };
	var PCT008014 = { "alias": "race_pacific_islander_pacific_islander_not_specified_2000", "api": { "sf1": [2000] }, "description": "Population (Pacific Islander, not specified) in 2000" };
	var P0030007 = { "alias": "race_other_2010", "api": { "sf1": [2010] }, "description": "Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2010" };
	var PCT0110002 = { "alias": "race_hispanic_no_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic No) in 2010" };
	var PCT0110003 = { "alias": "race_hispanic_latino_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Latino) in 2010" };
	var PCT0110004 = { "alias": "race_hispanic_mexican_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Mexican) in 2010" };
	var PCT0110005 = { "alias": "race_hispanic_puerto_rican_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Puerto Rican) in 2010" };
	var PCT0110006 = { "alias": "race_hispanic_cuban_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Cuban) in 2010" };
	var PCT0110007 = { "alias": "race_hispanic_dominican_republic_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Dominican Republic) in 2010" };
	var PCT0110008 = { "alias": "race_hispanic_central_american_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Central American) in 2010" };
	var PCT0110009 = { "alias": "race_hispanic_costa_rican_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Costa Rican) in 2010" };
	var PCT0110010 = { "alias": "race_hispanic_guatemalan_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Guatemalan) in 2010" };
	var PCT0110011 = { "alias": "race_hispanic_honduran_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Honduran) in 2010" };
	var PCT0110012 = { "alias": "race_hispanic_nicaraguan_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Nicaraguan) in 2010" };
	var PCT0110013 = { "alias": "race_hispanic_panamanian_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Panamanian) in 2010" };
	var PCT0110014 = { "alias": "race_hispanic_salvadoran_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Salvadoran) in 2010" };
	var PCT0110015 = { "alias": "race_hispanic_other_central_american_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic other Central American) in 2010" };
	var PCT0110016 = { "alias": "race_south_american_2010", "api": { "sf1": [2010] }, "description": "Population (South American) in 2010" };
	var PCT0110017 = { "alias": "race_south_american_argentinean_2010", "api": { "sf1": [2010] }, "description": "Population (Agentinean) in 2010" };
	var PCT0110018 = { "alias": "race_south_american_bolivian_2010", "api": { "sf1": [2010] }, "description": "Population (Bolivian) in 2010" };
	var PCT0110019 = { "alias": "race_south_american_chilean_2010", "api": { "sf1": [2010] }, "description": "Population (Chilean) in 2010" };
	var PCT0110020 = { "alias": "race_south_american_colombian_2010", "api": { "sf1": [2010] }, "description": "Population (Colombian) in 2010" };
	var PCT0110021 = { "alias": "race_south_american_ecuadorian_2010", "api": { "sf1": [2010] }, "description": "Population (Ecuadorian) in 2010" };
	var PCT0110022 = { "alias": "race_south_american_paraguayan_2010", "api": { "sf1": [2010] }, "description": "Population (Paraguayan) in 2010" };
	var PCT0110023 = { "alias": "race_south_american_peruvian_2010", "api": { "sf1": [2010] }, "description": "Population (Peruvian) in 2010" };
	var PCT0110024 = { "alias": "race_south_american_uruguayan_2010", "api": { "sf1": [2010] }, "description": "Population (Uruguayan) in 2010" };
	var PCT0110025 = { "alias": "race_south_american_venezuelan_2010", "api": { "sf1": [2010] }, "description": "Population (Venezuelan) in 2010" };
	var PCT0110026 = { "alias": "race_other_south_american_2010", "api": { "sf1": [2010] }, "description": "Population (other South American) in 2010" };
	var PCT0110027 = { "alias": "race_hispanic_other_latinos_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic other Latinos) in 2010" };
	var PCT0110028 = { "alias": "race_spaniard_2010", "api": { "sf1": [2010] }, "description": "Population (Spaniard) in 2010" };
	var PCT0110029 = { "alias": "race_spanish_2010", "api": { "sf1": [2010] }, "description": "Population (Spanish) in 2010" };
	var PCT0110030 = { "alias": "race_spanish_american_2010", "api": { "sf1": [2010] }, "description": "Population (Spanish American) in 2010" };
	var PCT0110031 = { "alias": "race_hispanic_other_2010", "api": { "sf1": [2010] }, "description": "Population (Hispanic Other) in 2010" };
	var PCT0040003 = { "alias": "race_eskimo_2010", "api": { "sf1": [2010] }, "description": "Population (Alaska Native) in 2010" };
	var PCT0010048 = { "alias": "race_aleutian_2010", "api": { "sf1": [2010] }, "description": "Population (Aleutian) in 2010" };
	var PCT0050002 = { "alias": "race_asian_indian_2010", "api": { "sf1": [2010] }, "description": "Population (Asian Indian) in 2010" };
	var PCT0050003 = { "alias": "race_asian_bengladeshi_2010", "api": { "sf1": [2010] }, "description": "Population (Bengladeshi) in 2010" };
	var PCT0050004 = { "alias": "race_asian_cambodian_2010", "api": { "sf1": [2010] }, "description": "Population (Cambodian) in 2010" };
	var PCT0050005 = { "alias": "race_asian_chinese_2010", "api": { "sf1": [2010] }, "description": "Population (Chinese except Taiwanese) in 2010" };
	var PCT0050006 = { "alias": "race_asian_filipino_2010", "api": { "sf1": [2010] }, "description": "Population (Filipino) in 2010" };
	var PCT0050007 = { "alias": "race_asian_hmong_2010", "api": { "sf1": [2010] }, "description": "Population (Hmong) in 2010" };
	var PCT0050008 = { "alias": "race_asian_indonesian_2010", "api": { "sf1": [2010] }, "description": "Population (Indonesian) in 2010" };
	var PCT0050009 = { "alias": "race_asian_japanese_2010", "api": { "sf1": [2010] }, "description": "Population (Japanese) in 2010" };
	var PCT0050010 = { "alias": "race_asian_korean_2010", "api": { "sf1": [2010] }, "description": "Population (Korean) in 2010" };
	var PCT0050011 = { "alias": "race_asian_laotian_2010", "api": { "sf1": [2010] }, "description": "Population (Laotian) in 2010" };
	var PCT0050012 = { "alias": "race_asian_malaysian_2010", "api": { "sf1": [2010] }, "description": "Population (Malaysian) in 2010" };
	var PCT0050013 = { "alias": "race_asian_pakistani_2010", "api": { "sf1": [2010] }, "description": "Population (Pakastani) in 2010" };
	var PCT0050014 = { "alias": "race_asian_sri_lankan_2010", "api": { "sf1": [2010] }, "description": "Population (Sri Lankan) in 2010" };
	var PCT0050015 = { "alias": "race_asian_taiwanese_2010", "api": { "sf1": [2010] }, "description": "Population (Taiwanese) in 2010" };
	var PCT0050016 = { "alias": "race_asian_thai_2010", "api": { "sf1": [2010] }, "description": "Population (Thai) in 2010" };
	var PCT0050017 = { "alias": "race_asian_vietnamese_2010", "api": { "sf1": [2010] }, "description": "Population (Vietnamese) in 2010" };
	var PCT0050018 = { "alias": "race_other_asian_2010", "api": { "sf1": [2010] }, "description": "Population (Other Asian) in 2010" };
	var PCT0080001 = { "alias": "race_pacific_islander_2010", "api": { "sf1": [2010] }, "description": "Population (Pacific Islander) in 2010" };
	var PCT0080002 = { "alias": "race_pacific_islander_polynesian_2010", "api": { "sf1": [2010] }, "description": "Population (Other Asian not specified) in 2010" };
	var PCT0080003 = { "alias": "race_pacific_islander_polynesian_hawaiian_2010", "api": { "sf1": [2010] }, "description": "Population (Native Hawaiian) in 2010" };
	var PCT0080004 = { "alias": "race_pacific_islander_polynesian_samoan_2010", "api": { "sf1": [2010] }, "description": "Population (Samoan) in 2010" };
	var PCT0080005 = { "alias": "race_pacific_islander_polynesian_tongan_2010", "api": { "sf1": [2010] }, "description": "Population (Tongan) in 2010" };
	var PCT0080006 = { "alias": "race_pacific_islander_polynesian_other_2010", "api": { "sf1": [2010] }, "description": "Population (other Polynesian) in 2010" };
	var PCT0080007 = { "alias": "race_pacific_islander_micronesian_2010", "api": { "sf1": [2010] }, "description": "Population (Micronesian) in 2010" };
	var PCT0080008 = { "alias": "race_pacific_islander_micronesian_guam_chamorro_2010", "api": { "sf1": [2010] }, "description": "Population (Micronesian - Guam or Chamorro) in 2010" };
	var PCT0080009 = { "alias": "race_pacific_islander_micronesian_marshallese_2010", "api": { "sf1": [2010] }, "description": "Population (Micronesian - Marshallese) in 2010" };
	var PCT0080010 = { "alias": "race_pacific_islander_micronesian_other_2010", "api": { "sf1": [2010] }, "description": "Population (Micronesian - other) in 2010" };
	var PCT0080011 = { "alias": "race_pacific_islander_melanesian_2010", "api": { "sf1": [2010] }, "description": "Population (Melanesian) in 2010" };
	var PCT0080012 = { "alias": "race_pacific_islander_melanesian_fijian_2010", "api": { "sf1": [2010] }, "description": "Population (Melanesian - Fijian) in 2010" };
	var PCT0080013 = { "alias": "race_pacific_islander_melanesian_other_2010", "api": { "sf1": [2010] }, "description": "Population (other Melanesian) in 2010" };
	var PCT0080014 = { "alias": "race_pacific_islander_pacific_islander_not_specified_2010", "api": { "sf1": [2010] }, "description": "Population (Pacific Islander, not specified) in 2010" };
	var P0140001 = { "alias": "males_never_married_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of males who never married in 1990" };
	var P0140002 = { "alias": "males_married_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of males who are married, but not separated in 1990" };
	var P0140003 = { "alias": "males_separated_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of males who are separated in 1990" };
	var P0140004 = { "alias": "males_widowed_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of males who are widowed in 1990" };
	var P0140005 = { "alias": "males_divorced_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of males who are divorced in 1990" };
	var P0140006 = { "alias": "females_never_married_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of females who never married in 1990" };
	var P0140007 = { "alias": "females_married_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of females who are married, but not separated in 1990" };
	var P0140008 = { "alias": "females_separated_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of females who are separated in 1990" };
	var P0140009 = { "alias": "females_widowed_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of females who are widowed in 1990" };
	var P0140010 = { "alias": "females_divorced_1990", "api": { "sf1": [1990, 2010] }, "description": "Population of females who are divorced in 1990" };
	var P0280006 = { "alias": "college_dorms_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population living in college dorms in 1990" };
	var P0280007 = { "alias": "military_quarters_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population of living in military quarters in 1990" };
	var P037007 = { "alias": "military_quarters_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population of living in military quarters in 2000" };
	var PCO0080001 = { "alias": "college_dorms_2010", "api": { "sf1": [2010] }, "description": "Population living in college dorms in 2010" };
	var PCO0090001 = { "alias": "military_quarters_2010", "api": { "sf1": [2010] }, "description": "Population of living in military quarters in 2010" };
	var P0280001 = { "alias": "correctional_facilities_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population living in correctional facilities in 1990" };
	var P0280002 = { "alias": "nursing_homes_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population living in nursing homes in 1990" };
	var P0280003 = { "alias": "mental_health_facilities_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population living in mental health facilities in 1990" };
	var P0280004 = { "alias": "juvenile_detention_facilities_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "Population living in juvenile detention facilities in 1990" };
	var P037003 = { "alias": "correctional_facilities_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population living in correctional facilities in 2000" };
	var P037004 = { "alias": "nursing_homes_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population living in nursing homes in 2000" };
	var PCT016041 = { "alias": "mental_health_facilities_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population living in mental health facilities in 2000" };
	var PCT016025 = { "alias": "juvenile_detention_facilities_2000", "api": { "sf1": [2000], "sf3": [2000] }, "description": "Population living in juvenile detention facilities in 2000" };
	var P0420003 = { "alias": "correctional_facilities_2010", "api": { "sf1": [2010], "sf3": [1990] }, "description": "Population living in correctional facilities in 2010" };
	var P0420005 = { "alias": "nursing_homes_2010", "api": { "sf1": [2010], "sf3": [1990] }, "description": "Population living in nursing homes in 2010" };
	var PCT0200016 = { "alias": "mental_health_facilities_2010", "api": { "sf1": [2010] }, "description": "Population living in mental health facilities in 2010" };
	var P0420004 = { "alias": "juvenile_detention_facilities_2010", "api": { "sf1": [2010], "sf3": [1990] }, "description": "Population living in juvenile detention facilities in 2010" };
	var P0270001 = { "alias": "households_family_2_person_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "2 person family households in 1990" };
	var P0270002 = { "alias": "households_family_3_person_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "3 person family households in 1990" };
	var P0270003 = { "alias": "households_family_4_person_1990", "api": { "sf1": [1990, 2010], "sf3": [1990] }, "description": "4 person family households in 1990" };
	var P0270004 = { "alias": "households_family_5_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "5 person family households in 1990" };
	var P0270005 = { "alias": "households_6_family_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "6 person family households in 1990" };
	var P0270006 = { "alias": "households_7+_family_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "7 person family households in 1990" };
	var P0270007 = { "alias": "households_1_nonfamily_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "1 person non-family households in 1990" };
	var P0270008 = { "alias": "households_nonfamily_2_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "1 person non-family households in 1990" };
	var P0270009 = { "alias": "households_nonfamily_3_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "1 person non-family households in 1990" };
	var P0270010 = { "alias": "households_nonfamily_4_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "4 person non-family households in 1990" };
	var P0270011 = { "alias": "households_nonfamily_5_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "5 person non-family households in 1990" };
	var P0270012 = { "alias": "households_nonfamily_6_person_1990", "api": { "sf1": [1990], "sf3": [1990] }, "description": "6 person non-family households in 1990" };
	var P0270013 = { "alias": "households_nonfamily_7+_person_1990", "api": { "sf1": [1990] }, "description": "7+ person non-family households in 1990" };
	var B19013_001E = { "alias": "income", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median household income in the past 12 months (in 2013 inflation-adjusted dollars)" };
	var B19301_001E = { "alias": "income_per_capita", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Per capita income in the past 12 months (in 2013 inflation-adjusted dollars)" };
	var B23025_002E = { "alias": "employment_labor_force", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons, age 16 or older, in the labor force" };
	var B23025_007E = { "alias": "employment_not_labor_force", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons, age 16 or older, not in the labor force" };
	var B23025_003E = { "alias": "employment_civilian_labor_force", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons, age 16 or older, in the civilian labor force" };
	var B23025_004E = { "alias": "employment_employed", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed, age 16 or older, in the civilian labor force" };
	var B23025_005E = { "alias": "employment_unemployed", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of unemployed, age 16 or older, in the civilian labor force" };
	var B23025_006E = { "alias": "employment_armed_forces", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons, age 16 or older, in the Armed Forces" };
	var C24010_003E = { "alias": "employment_male_management_business_science_and_arts_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Management, business, science, and arts occupations:' for the civilian population age 16 and over" };
	var C24010_004E = { "alias": "employment_male_management_business_and_financial_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Management, business, and financial occupations:' for the civilian population age 16 and over" };
	var C24010_005E = { "alias": "employment_male_management_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Management occupations' for the civilian population age 16 and over" };
	var C24010_006E = { "alias": "employment_male_business_and_financial_operations_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Business and financial operations occupations' for the civilian population age 16 and over" };
	var C24010_007E = { "alias": "employment_male_computer_engineering_and_science_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Computer, engineering, and science occupations:' for the civilian population age 16 and over" };
	var C24010_008E = { "alias": "employment_male_computer_and_mathematical_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Computer and mathematical occupations' for the civilian population age 16 and over" };
	var C24010_009E = { "alias": "employment_male_architecture_and_engineering_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Architecture and engineering occupations' for the civilian population age 16 and over" };
	var C24010_010E = { "alias": "employment_male_life_physical_and_social_science_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Life, physical, and social science occupations' for the civilian population age 16 and over" };
	var C24010_011E = { "alias": "employment_male_education_legal_community_service_arts_and_media_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Education, legal, community service, arts, and media occupations:' for the civilian population age 16 and over" };
	var C24010_012E = { "alias": "employment_male_community_and_social_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Community and social service occupations' for the civilian population age 16 and over" };
	var C24010_013E = { "alias": "employment_male_legal_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Legal occupations' for the civilian population age 16 and over" };
	var C24010_014E = { "alias": "employment_male_education_training_and_library_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Education, training, and library occupations' for the civilian population age 16 and over" };
	var C24010_015E = { "alias": "employment_male_arts_design_entertainment_sports_and_media_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Arts, design, entertainment, sports, and media occupations' for the civilian population age 16 and over" };
	var C24010_016E = { "alias": "employment_male_healthcare_practitioners_and_technical_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Healthcare practitioners and technical occupations:' for the civilian population age 16 and over" };
	var C24010_017E = { "alias": "employment_male_health_diagnosing_and_treating_practitioners_and_other_technical_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Health diagnosing and treating practitioners and other technical occupations' for the civilian population age 16 and over" };
	var C24010_018E = { "alias": "employment_male_health_technologists_and_technicians", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Health technologists and technicians' for the civilian population age 16 and over" };
	var C24010_019E = { "alias": "employment_male_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Service occupations:' for the civilian population age 16 and over" };
	var C24010_020E = { "alias": "employment_male_healthcare_support_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Healthcare support occupations' for the civilian population age 16 and over" };
	var C24010_021E = { "alias": "employment_male_protective_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Protective service occupations:' for the civilian population age 16 and over" };
	var C24010_022E = { "alias": "employment_male_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Fire fighting and prevention, and other protective service workers including supervisors' for the civilian population age 16 and over" };
	var C24010_023E = { "alias": "employment_male_law_enforcement_workers_including_supervisors", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Law enforcement workers including supervisors' for the civilian population age 16 and over" };
	var C24010_024E = { "alias": "employment_male_food_preparation_and_serving_related_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Food preparation and serving related occupations' for the civilian population age 16 and over" };
	var C24010_025E = { "alias": "employment_male_building_and_grounds_cleaning_and_maintenance_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Building and grounds cleaning and maintenance occupations' for the civilian population age 16 and over" };
	var C24010_026E = { "alias": "employment_male_personal_care_and_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Personal care and service occupations' for the civilian population age 16 and over" };
	var C24010_027E = { "alias": "employment_male_sales_and_office_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Sales and office occupations:' for the civilian population age 16 and over" };
	var C24010_028E = { "alias": "employment_male_sales_and_related_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Sales and related occupations' for the civilian population age 16 and over" };
	var C24010_029E = { "alias": "employment_male_office_and_administrative_support_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Office and administrative support occupations' for the civilian population age 16 and over" };
	var C24010_030E = { "alias": "employment_male_natural_resources_construction_and_maintenance_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Natural resources, construction, and maintenance occupations:' for the civilian population age 16 and over" };
	var C24010_031E = { "alias": "employment_male_farming_fishing_and_forestry_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Farming, fishing, and forestry occupations' for the civilian population age 16 and over" };
	var C24010_032E = { "alias": "employment_male_construction_and_extraction_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Construction and extraction occupations' for the civilian population age 16 and over" };
	var C24010_033E = { "alias": "employment_male_installation_maintenance_and_repair_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Installation, maintenance, and repair occupations' for the civilian population age 16 and over" };
	var C24010_034E = { "alias": "employment_male_production_transportation_and_material_moving_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Production, transportation, and material moving occupations:' for the civilian population age 16 and over" };
	var C24010_035E = { "alias": "employment_male_production_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Production occupations' for the civilian population age 16 and over" };
	var C24010_036E = { "alias": "employment_male_transportation_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Transportation occupations' for the civilian population age 16 and over" };
	var C24010_037E = { "alias": "employment_male_material_moving_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed male 'Material moving occupations' for the civilian population age 16 and over" };
	var C24010_039E = { "alias": "employment_female_management_business_science_and_arts_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Management, business, science, and arts occupations:' for the civilian population age 16 and over" };
	var C24010_040E = { "alias": "employment_female_management_business_and_financial_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Management, business, and financial occupations:' for the civilian population age 16 and over" };
	var C24010_041E = { "alias": "employment_female_management_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Management occupations' for the civilian population age 16 and over" };
	var C24010_042E = { "alias": "employment_female_business_and_financial_operations_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Business and financial operations occupations' for the civilian population age 16 and over" };
	var C24010_043E = { "alias": "employment_female_computer_engineering_and_science_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Computer, engineering, and science occupations:' for the civilian population age 16 and over" };
	var C24010_044E = { "alias": "employment_female_computer_and_mathematical_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Computer and mathematical occupations' for the civilian population age 16 and over" };
	var C24010_045E = { "alias": "employment_female_architecture_and_engineering_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Architecture and engineering occupations' for the civilian population age 16 and over" };
	var C24010_046E = { "alias": "employment_female_life_physical_and_social_science_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Life, physical, and social science occupations' for the civilian population age 16 and over" };
	var C24010_047E = { "alias": "employment_female_education_legal_community_service_arts_and_media_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Education, legal, community service, arts, and media occupations:' for the civilian population age 16 and over" };
	var C24010_048E = { "alias": "employment_female_community_and_social_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Community and social service occupations' for the civilian population age 16 and over" };
	var C24010_049E = { "alias": "employment_female_legal_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Legal occupations' for the civilian population age 16 and over" };
	var C24010_050E = { "alias": "employment_female_education_training_and_library_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Education, training, and library occupations' for the civilian population age 16 and over" };
	var C24010_051E = { "alias": "employment_female_arts_design_entertainment_sports_and_media_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Arts, design, entertainment, sports, and media occupations' for the civilian population age 16 and over" };
	var C24010_052E = { "alias": "employment_female_healthcare_practitioners_and_technical_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Healthcare practitioners and technical occupations:' for the civilian population age 16 and over" };
	var C24010_053E = { "alias": "employment_female_health_diagnosing_and_treating_practitioners_and_other_technical_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Health diagnosing and treating practitioners and other technical occupations' for the civilian population age 16 and over" };
	var C24010_054E = { "alias": "employment_female_health_technologists_and_technicians", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Health technologists and technicians' for the civilian population age 16 and over" };
	var C24010_055E = { "alias": "employment_female_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Service occupations:' for the civilian population age 16 and over" };
	var C24010_056E = { "alias": "employment_female_healthcare_support_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Healthcare support occupations' for the civilian population age 16 and over" };
	var C24010_057E = { "alias": "employment_female_protective_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Protective service occupations:' for the civilian population age 16 and over" };
	var C24010_058E = { "alias": "employment_female_fire_fighting_and_prevention_and_other_protective_service_workers_including_supervisors", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Fire fighting and prevention, and other protective service workers including supervisors' for the civilian population age 16 and over" };
	var C24010_059E = { "alias": "employment_female_law_enforcement_workers_including_supervisors", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Law enforcement workers including supervisors' for the civilian population age 16 and over" };
	var C24010_060E = { "alias": "employment_female_food_preparation_and_serving_related_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Food preparation and serving related occupations' for the civilian population age 16 and over" };
	var C24010_061E = { "alias": "employment_female_building_and_grounds_cleaning_and_maintenance_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Building and grounds cleaning and maintenance occupations' for the civilian population age 16 and over" };
	var C24010_062E = { "alias": "employment_female_personal_care_and_service_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Personal care and service occupations' for the civilian population age 16 and over" };
	var C24010_063E = { "alias": "employment_female_sales_and_office_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Sales and office occupations:' for the civilian population age 16 and over" };
	var C24010_064E = { "alias": "employment_female_sales_and_related_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Sales and related occupations' for the civilian population age 16 and over" };
	var C24010_065E = { "alias": "employment_female_office_and_administrative_support_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Office and administrative support occupations' for the civilian population age 16 and over" };
	var C24010_066E = { "alias": "employment_female_natural_resources_construction_and_maintenance_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Natural resources, construction, and maintenance occupations:' for the civilian population age 16 and over" };
	var C24010_067E = { "alias": "employment_female_farming_fishing_and_forestry_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Farming, fishing, and forestry occupations' for the civilian population age 16 and over" };
	var C24010_068E = { "alias": "employment_female_construction_and_extraction_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Construction and extraction occupations' for the civilian population age 16 and over" };
	var C24010_069E = { "alias": "employment_female_installation_maintenance_and_repair_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Installation, maintenance, and repair occupations' for the civilian population age 16 and over" };
	var C24010_070E = { "alias": "employment_female_production_transportation_and_material_moving_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Production, transportation, and material moving occupations:' for the civilian population age 16 and over" };
	var C24010_071E = { "alias": "employment_female_production_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Production occupations' for the civilian population age 16 and over" };
	var C24010_072E = { "alias": "employment_female_transportation_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Transportation occupations' for the civilian population age 16 and over" };
	var C24010_073E = { "alias": "employment_female_material_moving_occupations", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of employed female 'Material moving occupations' for the civilian population age 16 and over" };
	var B17001_002E = { "alias": "poverty", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level" };
	var B17001_003E = { "alias": "poverty_male", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of male persons whose income in the past 12 months is below the poverty level" };
	var B17001_017E = { "alias": "poverty_female", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of female persons whose income in the past 12 months is below the poverty level" };
	var B17001A_002E = { "alias": "poverty_white_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level (White Alone)" };
	var B17001B_002E = { "alias": "poverty_black_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level (Black or African American Alone)" };
	var B02001_004E = { "alias": "population_american_indian_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (American Indian or Alaskan Native Alone)" };
	var B17001D_002E = { "alias": "poverty_asian_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level  (Asian Alone)" };
	var B17001E_002E = { "alias": "poverty_native_hawaiian_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level  (Native Hawaiian and Other Pacific Islander Alone)" };
	var B17001F_002E = { "alias": "poverty_other_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level  (Some Other Race Alone)" };
	var B17001G_002E = { "alias": "poverty_two_or_more_races", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level  (Two or more races)" };
	var B17001I_002E = { "alias": "poverty_hispanic_origin", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of persons whose income in the past 12 months is below the poverty level  (Hispanic Origin)" };
	var B17012_002E = { "alias": "poverty_family", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of families below the poverty level in the past 12 months" };
	var B17012_003E = { "alias": "poverty_family_married", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of married couples whose income is below the poverty level in the past 12 months" };
	var B17012_009E = { "alias": "poverty_family_single_male", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of families with a male householder and no wife present whose income is below the poverty level in the past 12 months" };
	var B17012_014E = { "alias": "poverty_family_single_female", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Number of families with a female householder and no husband present whose income is below the poverty level in the past 12 months" };
	var B01002_001E = { "alias": "age", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median age" };
	var B01002_002E = { "alias": "median_male_age", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median age by sex (male)" };
	var B01002_003E = { "alias": "median_female_age", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median age by sex (female)" };
	var B01003_001E = { "alias": "population", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Total population" };
	var B02001_002E = { "alias": "population_white_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (White Alone)" };
	var B02001_003E = { "alias": "population_black_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (Black or African American Alone)" };
	var B02001_005E = { "alias": "population_asian_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (Asian Alone)" };
	var B02001_006E = { "alias": "population_native_hawaiian_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (Native Hawaiian and Other Pacific Islander Alone)" };
	var B02001_007E = { "alias": "population_other_alone", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (Some Other Race Alone)" };
	var B02001_008E = { "alias": "population_two_or_more_races", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (Two or more races)" };
	var B03001_003E = { "alias": "population_hispanic_origin", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Population (Hispanic Origin)" };
	var B25035_001E = { "alias": "median_house_construction_year", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median year housing units were built" };
	var B25058_001E = { "alias": "median_contract_rent", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median contract rent" };
	var B25064_001E = { "alias": "median_gross_rent", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median gross rent (contract rent plus the cost of utilities)" };
	var B25077_001E = { "alias": "median_home_value", "api": { "acs5": [2010, 2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Median value (dollars) for Owner-Occupied housing units" };
	var B08136_001E = { "alias": "commute_time", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Total time spent commuting (in minutes)" };
	var B08136_003E = { "alias": "commute_time_solo_automobile", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Time spent commuting (in minutes): Car, truck, or van - alone" };
	var B08136_004E = { "alias": "commute_time_carpool", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Time spent commuting (in minutes): Car, truck, or van - carpool" };
	var B08136_007E = { "alias": "commute_time_public_transport", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Time spent commuting (in minutes): public transport (excluding taxis)" };
	var B08136_011E = { "alias": "commute_time_walked", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Time spent commuting (in minutes): walking" };
	var B08136_012E = { "alias": "commute_time_other", "api": { "acs5": [2013, 2011, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "Time spent commuting (in minutes): Taxicab, motorcycle, bicycle, or other means" };
	var B15003_002E = { "alias": "education_none", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who completed no schooling" };
	var B15003_017E = { "alias": "education_high_school", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who have a regular high school diploma" };
	var B15003_018E = { "alias": "education_ged", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who have a GED or alternative credential" };
	var B15003_021E = { "alias": "education_associates", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who hold an Associate's degree" };
	var B15003_022E = { "alias": "education_bachelors", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who hold a Bachelor's degree" };
	var B15003_023E = { "alias": "education_masters", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who hold a Master's degree" };
	var B15003_024E = { "alias": "education_professional", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who hold a Professional degree" };
	var B15003_025E = { "alias": "education_doctorate", "api": { "acs5": [2013, 2012, 2014], "acs3": [2013, 2012], "acs1": [2014, 2013, 2012] }, "description": "The number of persons age 25 and over who hold a Doctoral degree" };
	var variableToAliasMap = {
		P0010001: P0010001,
		P001001: P001001,
		PCT0120001: PCT0120001,
		P0020001: P0020001,
		P031001: P031001,
		PCT0160002: PCT0160002,
		P0050001: P0050001,
		P0050002: P0050002,
		P012002: P012002,
		P012026: P012026,
		P0120002: P0120002,
		P0120026: P0120026,
		P0110001: P0110001,
		P0110002: P0110002,
		P0110003: P0110003,
		P0110004: P0110004,
		P0110005: P0110005,
		P0110006: P0110006,
		P0110007: P0110007,
		P0110008: P0110008,
		P0110009: P0110009,
		P0110010: P0110010,
		P0110011: P0110011,
		P0110012: P0110012,
		P0110013: P0110013,
		P0110014: P0110014,
		P0110015: P0110015,
		P0110016: P0110016,
		P0110017: P0110017,
		P0110018: P0110018,
		P0110019: P0110019,
		P0110020: P0110020,
		P0110021: P0110021,
		P0110022: P0110022,
		P0110023: P0110023,
		P0110024: P0110024,
		P0110025: P0110025,
		P0110026: P0110026,
		P0110027: P0110027,
		P0110028: P0110028,
		P0110029: P0110029,
		P0110030: P0110030,
		P012003: P012003,
		P012004: P012004,
		P012005: P012005,
		P012006: P012006,
		P012007: P012007,
		P012008: P012008,
		P012009: P012009,
		P012010: P012010,
		P012011: P012011,
		P012012: P012012,
		P012013: P012013,
		P012014: P012014,
		P012015: P012015,
		P012016: P012016,
		P012017: P012017,
		P012018: P012018,
		P012019: P012019,
		P012020: P012020,
		P012021: P012021,
		P012022: P012022,
		P012023: P012023,
		P012024: P012024,
		P012025: P012025,
		P012027: P012027,
		P012028: P012028,
		P012029: P012029,
		P012030: P012030,
		P012031: P012031,
		P012032: P012032,
		P012033: P012033,
		P012034: P012034,
		P012035: P012035,
		P012036: P012036,
		P012037: P012037,
		P012038: P012038,
		P012039: P012039,
		P012040: P012040,
		P012041: P012041,
		P012042: P012042,
		P012043: P012043,
		P012044: P012044,
		P012045: P012045,
		P012046: P012046,
		P012047: P012047,
		P012048: P012048,
		P012049: P012049,
		P012A003: P012A003,
		P012A004: P012A004,
		P012A005: P012A005,
		P012A006: P012A006,
		P012A007: P012A007,
		P012A008: P012A008,
		P012A009: P012A009,
		P012A010: P012A010,
		P012A011: P012A011,
		P012A012: P012A012,
		P012A013: P012A013,
		P012A014: P012A014,
		P012A015: P012A015,
		P012A016: P012A016,
		P012A017: P012A017,
		P012A018: P012A018,
		P012A019: P012A019,
		P012A020: P012A020,
		P012A021: P012A021,
		P012A022: P012A022,
		P012A023: P012A023,
		P012A024: P012A024,
		P012A025: P012A025,
		P012A027: P012A027,
		P012A028: P012A028,
		P012A029: P012A029,
		P012A030: P012A030,
		P012A031: P012A031,
		P012A032: P012A032,
		P012A033: P012A033,
		P012A034: P012A034,
		P012A035: P012A035,
		P012A036: P012A036,
		P012A037: P012A037,
		P012A038: P012A038,
		P012A039: P012A039,
		P012A040: P012A040,
		P012A041: P012A041,
		P012A042: P012A042,
		P012A043: P012A043,
		P012A044: P012A044,
		P012A045: P012A045,
		P012A046: P012A046,
		P012A047: P012A047,
		P012A048: P012A048,
		P012A049: P012A049,
		P0080001: P0080001,
		P0060004: P0060004,
		P0060005: P0060005,
		P0090001: P0090001,
		P0090002: P0090002,
		P0090003: P0090003,
		P0090004: P0090004,
		P0090005: P0090005,
		P0070001: P0070001,
		P0070002: P0070002,
		P0070003: P0070003,
		P0070004: P0070004,
		P0070005: P0070005,
		P0070006: P0070006,
		P0070007: P0070007,
		P0070008: P0070008,
		P0070009: P0070009,
		P0070010: P0070010,
		P0070011: P0070011,
		P0070012: P0070012,
		P0070013: P0070013,
		P0070014: P0070014,
		P0070015: P0070015,
		P0070016: P0070016,
		P0070017: P0070017,
		P0070018: P0070018,
		P0070019: P0070019,
		P0070020: P0070020,
		P0070021: P0070021,
		P0070022: P0070022,
		P0070023: P0070023,
		P0070024: P0070024,
		P0070025: P0070025,
		PCT012A001: PCT012A001,
		PCT012B001: PCT012B001,
		PCT012H001: PCT012H001,
		PCT012D001: PCT012D001,
		P003008: P003008,
		PCT011002: PCT011002,
		PCT011003: PCT011003,
		PCT011004: PCT011004,
		PCT011005: PCT011005,
		PCT011006: PCT011006,
		PCT011007: PCT011007,
		PCT011008: PCT011008,
		PCT011009: PCT011009,
		PCT011010: PCT011010,
		PCT011011: PCT011011,
		PCT011012: PCT011012,
		PCT011013: PCT011013,
		PCT011014: PCT011014,
		PCT011015: PCT011015,
		PCT011016: PCT011016,
		PCT011017: PCT011017,
		PCT011018: PCT011018,
		PCT011019: PCT011019,
		PCT011020: PCT011020,
		PCT011021: PCT011021,
		PCT011022: PCT011022,
		PCT011023: PCT011023,
		PCT011024: PCT011024,
		PCT011025: PCT011025,
		PCT011026: PCT011026,
		PCT011027: PCT011027,
		PCT011028: PCT011028,
		PCT011029: PCT011029,
		PCT011030: PCT011030,
		PCT011031: PCT011031,
		PCT012C001: PCT012C001,
		PCT001042: PCT001042,
		PCT001043: PCT001043,
		PCT005002: PCT005002,
		PCT005003: PCT005003,
		PCT005004: PCT005004,
		PCT005005: PCT005005,
		PCT005006: PCT005006,
		PCT005007: PCT005007,
		PCT005008: PCT005008,
		PCT005009: PCT005009,
		PCT005010: PCT005010,
		PCT005011: PCT005011,
		PCT005012: PCT005012,
		PCT005013: PCT005013,
		PCT005014: PCT005014,
		PCT005015: PCT005015,
		PCT005016: PCT005016,
		PCT005017: PCT005017,
		PCT005018: PCT005018,
		PCT005019: PCT005019,
		PCT008001: PCT008001,
		PCT008002: PCT008002,
		PCT008003: PCT008003,
		PCT008004: PCT008004,
		PCT008005: PCT008005,
		PCT008006: PCT008006,
		PCT008007: PCT008007,
		PCT008008: PCT008008,
		PCT008009: PCT008009,
		PCT008010: PCT008010,
		PCT008011: PCT008011,
		PCT008012: PCT008012,
		PCT008013: PCT008013,
		PCT008014: PCT008014,
		P0030007: P0030007,
		PCT0110002: PCT0110002,
		PCT0110003: PCT0110003,
		PCT0110004: PCT0110004,
		PCT0110005: PCT0110005,
		PCT0110006: PCT0110006,
		PCT0110007: PCT0110007,
		PCT0110008: PCT0110008,
		PCT0110009: PCT0110009,
		PCT0110010: PCT0110010,
		PCT0110011: PCT0110011,
		PCT0110012: PCT0110012,
		PCT0110013: PCT0110013,
		PCT0110014: PCT0110014,
		PCT0110015: PCT0110015,
		PCT0110016: PCT0110016,
		PCT0110017: PCT0110017,
		PCT0110018: PCT0110018,
		PCT0110019: PCT0110019,
		PCT0110020: PCT0110020,
		PCT0110021: PCT0110021,
		PCT0110022: PCT0110022,
		PCT0110023: PCT0110023,
		PCT0110024: PCT0110024,
		PCT0110025: PCT0110025,
		PCT0110026: PCT0110026,
		PCT0110027: PCT0110027,
		PCT0110028: PCT0110028,
		PCT0110029: PCT0110029,
		PCT0110030: PCT0110030,
		PCT0110031: PCT0110031,
		PCT0040003: PCT0040003,
		PCT0010048: PCT0010048,
		PCT0050002: PCT0050002,
		PCT0050003: PCT0050003,
		PCT0050004: PCT0050004,
		PCT0050005: PCT0050005,
		PCT0050006: PCT0050006,
		PCT0050007: PCT0050007,
		PCT0050008: PCT0050008,
		PCT0050009: PCT0050009,
		PCT0050010: PCT0050010,
		PCT0050011: PCT0050011,
		PCT0050012: PCT0050012,
		PCT0050013: PCT0050013,
		PCT0050014: PCT0050014,
		PCT0050015: PCT0050015,
		PCT0050016: PCT0050016,
		PCT0050017: PCT0050017,
		PCT0050018: PCT0050018,
		PCT0080001: PCT0080001,
		PCT0080002: PCT0080002,
		PCT0080003: PCT0080003,
		PCT0080004: PCT0080004,
		PCT0080005: PCT0080005,
		PCT0080006: PCT0080006,
		PCT0080007: PCT0080007,
		PCT0080008: PCT0080008,
		PCT0080009: PCT0080009,
		PCT0080010: PCT0080010,
		PCT0080011: PCT0080011,
		PCT0080012: PCT0080012,
		PCT0080013: PCT0080013,
		PCT0080014: PCT0080014,
		P0140001: P0140001,
		P0140002: P0140002,
		P0140003: P0140003,
		P0140004: P0140004,
		P0140005: P0140005,
		P0140006: P0140006,
		P0140007: P0140007,
		P0140008: P0140008,
		P0140009: P0140009,
		P0140010: P0140010,
		P0280006: P0280006,
		P0280007: P0280007,
		P037007: P037007,
		PCO0080001: PCO0080001,
		PCO0090001: PCO0090001,
		P0280001: P0280001,
		P0280002: P0280002,
		P0280003: P0280003,
		P0280004: P0280004,
		P037003: P037003,
		P037004: P037004,
		PCT016041: PCT016041,
		PCT016025: PCT016025,
		P0420003: P0420003,
		P0420005: P0420005,
		PCT0200016: PCT0200016,
		P0420004: P0420004,
		P0270001: P0270001,
		P0270002: P0270002,
		P0270003: P0270003,
		P0270004: P0270004,
		P0270005: P0270005,
		P0270006: P0270006,
		P0270007: P0270007,
		P0270008: P0270008,
		P0270009: P0270009,
		P0270010: P0270010,
		P0270011: P0270011,
		P0270012: P0270012,
		P0270013: P0270013,
		B19013_001E: B19013_001E,
		B19301_001E: B19301_001E,
		B23025_002E: B23025_002E,
		B23025_007E: B23025_007E,
		B23025_003E: B23025_003E,
		B23025_004E: B23025_004E,
		B23025_005E: B23025_005E,
		B23025_006E: B23025_006E,
		C24010_003E: C24010_003E,
		C24010_004E: C24010_004E,
		C24010_005E: C24010_005E,
		C24010_006E: C24010_006E,
		C24010_007E: C24010_007E,
		C24010_008E: C24010_008E,
		C24010_009E: C24010_009E,
		C24010_010E: C24010_010E,
		C24010_011E: C24010_011E,
		C24010_012E: C24010_012E,
		C24010_013E: C24010_013E,
		C24010_014E: C24010_014E,
		C24010_015E: C24010_015E,
		C24010_016E: C24010_016E,
		C24010_017E: C24010_017E,
		C24010_018E: C24010_018E,
		C24010_019E: C24010_019E,
		C24010_020E: C24010_020E,
		C24010_021E: C24010_021E,
		C24010_022E: C24010_022E,
		C24010_023E: C24010_023E,
		C24010_024E: C24010_024E,
		C24010_025E: C24010_025E,
		C24010_026E: C24010_026E,
		C24010_027E: C24010_027E,
		C24010_028E: C24010_028E,
		C24010_029E: C24010_029E,
		C24010_030E: C24010_030E,
		C24010_031E: C24010_031E,
		C24010_032E: C24010_032E,
		C24010_033E: C24010_033E,
		C24010_034E: C24010_034E,
		C24010_035E: C24010_035E,
		C24010_036E: C24010_036E,
		C24010_037E: C24010_037E,
		C24010_039E: C24010_039E,
		C24010_040E: C24010_040E,
		C24010_041E: C24010_041E,
		C24010_042E: C24010_042E,
		C24010_043E: C24010_043E,
		C24010_044E: C24010_044E,
		C24010_045E: C24010_045E,
		C24010_046E: C24010_046E,
		C24010_047E: C24010_047E,
		C24010_048E: C24010_048E,
		C24010_049E: C24010_049E,
		C24010_050E: C24010_050E,
		C24010_051E: C24010_051E,
		C24010_052E: C24010_052E,
		C24010_053E: C24010_053E,
		C24010_054E: C24010_054E,
		C24010_055E: C24010_055E,
		C24010_056E: C24010_056E,
		C24010_057E: C24010_057E,
		C24010_058E: C24010_058E,
		C24010_059E: C24010_059E,
		C24010_060E: C24010_060E,
		C24010_061E: C24010_061E,
		C24010_062E: C24010_062E,
		C24010_063E: C24010_063E,
		C24010_064E: C24010_064E,
		C24010_065E: C24010_065E,
		C24010_066E: C24010_066E,
		C24010_067E: C24010_067E,
		C24010_068E: C24010_068E,
		C24010_069E: C24010_069E,
		C24010_070E: C24010_070E,
		C24010_071E: C24010_071E,
		C24010_072E: C24010_072E,
		C24010_073E: C24010_073E,
		B17001_002E: B17001_002E,
		B17001_003E: B17001_003E,
		B17001_017E: B17001_017E,
		B17001A_002E: B17001A_002E,
		B17001B_002E: B17001B_002E,
		B02001_004E: B02001_004E,
		B17001D_002E: B17001D_002E,
		B17001E_002E: B17001E_002E,
		B17001F_002E: B17001F_002E,
		B17001G_002E: B17001G_002E,
		B17001I_002E: B17001I_002E,
		B17012_002E: B17012_002E,
		B17012_003E: B17012_003E,
		B17012_009E: B17012_009E,
		B17012_014E: B17012_014E,
		B01002_001E: B01002_001E,
		B01002_002E: B01002_002E,
		B01002_003E: B01002_003E,
		B01003_001E: B01003_001E,
		B02001_002E: B02001_002E,
		B02001_003E: B02001_003E,
		B02001_005E: B02001_005E,
		B02001_006E: B02001_006E,
		B02001_007E: B02001_007E,
		B02001_008E: B02001_008E,
		B03001_003E: B03001_003E,
		B25035_001E: B25035_001E,
		B25058_001E: B25058_001E,
		B25064_001E: B25064_001E,
		B25077_001E: B25077_001E,
		B08136_001E: B08136_001E,
		B08136_003E: B08136_003E,
		B08136_004E: B08136_004E,
		B08136_007E: B08136_007E,
		B08136_011E: B08136_011E,
		B08136_012E: B08136_012E,
		B15003_002E: B15003_002E,
		B15003_017E: B15003_017E,
		B15003_018E: B15003_018E,
		B15003_021E: B15003_021E,
		B15003_022E: B15003_022E,
		B15003_023E: B15003_023E,
		B15003_024E: B15003_024E,
		B15003_025E: B15003_025E
	};

	Terraformer.ArcGIS = ArcGIS;

	var CitySdk = function () {
	  function CitySdk() {
	    classCallCheck(this, CitySdk);
	  }

	  createClass(CitySdk, null, [{
	    key: 'getAliases',


	    /**
	     * Returns a map of the most popular aliases.
	     */
	    value: function getAliases() {
	      return aliases;
	    }

	    /**
	     * @description Converts a Census variable, or a list of variables, to
	     * its corresponding alias.
	     * For example: for the variable B0009_00130 this function
	     * would return "population" as the alias.
	     *
	     * @param variables
	     * @returns {{}}
	     */

	  }, {
	    key: 'variableToAlias',
	    value: function variableToAlias(variables) {
	      if (Object.prototype.toString.call(variables) !== '[object Array]') {
	        variables = [variables];
	      }

	      var result = {};

	      if (variables && variables.length) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = variables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var variable = _step.value;

	            result[variable] = variableToAliasMap[variable];
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

	        return result;
	      } else {
	        throw new Error('Invalid list of variables. Make sure multiple variables are comma separated.');
	      }
	    }

	    /**
	     * @description Converts an alias, or a list of aliases, to its corresponding
	     * variable.
	     * For example: the alias population would be converted to the
	     * variable B0009_00130
	     *
	     * @param _aliases
	     * @returns {{}}
	     */

	  }, {
	    key: 'aliasToVariable',
	    value: function aliasToVariable(_aliases) {
	      if (Object.prototype.toString.call(_aliases) !== '[object Array]') {
	        _aliases = [_aliases];
	      }

	      var result = {};

	      if (_aliases && _aliases.length) {
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	          for (var _iterator2 = _aliases[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var alias = _step2.value;

	            result[alias] = aliases[alias];
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
	      } else {
	        throw new Error('Invalid list of aliases. Make sure multiple aliases are comma separated.');
	      }

	      return result;
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

	  }, {
	    key: 'getStateCapitalCoords',
	    value: function getStateCapitalCoords(state) {
	      // No string supplied
	      if (!state) {
	        return null;
	      }

	      state = state.toUpperCase().trim();

	      if (state in stateCapitalsLatLng) {
	        // state is a 2-letter state code and is valid
	        return stateCapitalsLatLng[state];
	      }

	      // Look in US_STATE_NAMES
	      state = state.toLowerCase();

	      for (var statecode in stateNames) {
	        if (state === stateNames[statecode]) {
	          return stateCapitalsLatLng[statecode];
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

	    /**
	     * @description Runs the given request through the Census
	     * API pipeline and returns a response consisting of GeoJson
	     * and Census data.
	     *
	     * @param request
	     * @returns {*}
	     */

	  }, {
	    key: 'request',
	    value: function request(_request) {
	      _request = CitySdkRequestValidator.validate(_request);

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        var onRequestHasLatLng = function onRequestHasLatLng(request) {
	          CitySdkRequestUtils.getFipsFromLatLng(request).then(CitySdkRequestValidator.validateGeoVariables).then(CitySdkSummaryRequest.request).then(CitySdkTigerwebRequest.request).then(CitySdkGeoRequest.handleTigerwebResponse).then(function (response) {
	            return resolve(response);
	          }).catch(function (reason) {
	            return reject(reason);
	          });
	        };

	        if (!_request.lat && !_request.lng) {
	          // Get the coordinates, then using the coordinates, get
	          // the FIPS codes for state, tract, county and blockGroup.
	          CitySdkRequestUtils.getLatLng(_request).then(onRequestHasLatLng).catch(function (reason) {
	            return reject(reason);
	          });
	        } else {
	          onRequestHasLatLng(_request);
	        }
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }]);
	  return CitySdk;
	}();

	var CitySdkGeoRequest = function () {
	  function CitySdkGeoRequest() {
	    classCallCheck(this, CitySdkGeoRequest);
	  }

	  createClass(CitySdkGeoRequest, null, [{
	    key: 'supplementalRequest',
	    value: function supplementalRequest(req, res, featureIndex) {
	      var i = featureIndex;
	      var features = res.features;
	      var variables = req.variables;

	      // Sometimes cities span multiple counties. In this case,
	      // we sometimes miss data due to the limited nature of
	      // the Census API's geography hierarchy. This will issue
	      // supplemental requests to ensure we have data for all of
	      // our geojson entities
	      var suppRequest = {
	        state: features[i].properties['STATE'],
	        tract: features[i].properties['TRACT'],
	        county: features[i].properties['COUNTY'],
	        blockGroup: features[i].properties['BLKGRP'],
	        place: features[i].properties['PLACE'],
	        lat: parseFloat(features[i].properties.CENTLAT),
	        lng: parseFloat(features[i].properties.CENTLON),
	        level: req.level,
	        year: req.year,
	        api: req.api,
	        variables: variables,
	        featuresIndex: i,
	        apikey: req.apikey
	      };

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        var censusSummaryRequest = CitySdkSummaryRequest.request(suppRequest);

	        censusSummaryRequest.then(function (response) {
	          for (var property in response.data[0]) {
	            if (response.data[0].hasOwnProperty(property)) {
	              features[response.featuresIndex].properties[property] = response.data[0][property];

	              if (variables.indexOf(property) !== -1) {
	                res.totals[property] = Number(res.totals[property]) >= 0 ? Number(response.data[0][property]) : 0;
	              }
	            }
	          }

	          resolve(response);
	        });

	        censusSummaryRequest.catch(function (reason) {
	          reject(reason);
	        });
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }, {
	    key: 'handleTigerwebResponse',
	    value: function handleTigerwebResponse(tigerwebResponse) {
	      var request = tigerwebResponse.request;
	      var response = tigerwebResponse.response;
	      var supplementalRequests = [];

	      // Reference dictionary of levels -> geocoder response variables
	      var comparisonVariables = {
	        'tract': 'TRACT',
	        'place': 'PLACE',
	        'county': 'COUNTY',
	        'blockGroup': 'BLKGRP'
	      };

	      if (!response.totals) {
	        response.totals = {};
	      }

	      if (request.data) {
	        (function () {
	          var data = request.data;
	          var variables = request.variables;

	          var totals = response.totals;
	          var features = response.features;

	          var matchedFeature = void 0;

	          features.forEach(function (f, i) {
	            matchedFeature = data.filter(function (d) {
	              // Ensure we have a direct match for low level items by comparing the higher level items
	              if (request.level === 'blockGroup' || request.level === 'tract') {
	                var levelMatch = d[request.level] === f.properties[comparisonVariables[request.level]];
	                var tractMatch = d['tract'] === f.properties.TRACT;
	                var countyMatch = d['county'] === f.properties.COUNTY;

	                return levelMatch && tractMatch && countyMatch;
	              } else {
	                return d[request.level] === f.properties[comparisonVariables[request.level]];
	              }
	            });

	            if (matchedFeature.length === 0) {
	              supplementalRequests.push(CitySdkGeoRequest.supplementalRequest(request, response, i));
	            } else if (matchedFeature.length === 1) {
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
	            } else {
	              // This usually occurs when a low-level geography entity isn't uniquely identified
	              // by the grep. We'll need to add more comparisons to the grep to clear this issue up.
	              console.log('Multiple matched features: ');
	              console.log(f);
	              console.log(matchedFeature);
	            }
	          });
	        })();
	      }

	      var promiseHandler = function promiseHandler(resolve, reject) {
	        // If supplemental requests were needed, wait for all
	        // to finish.
	        if (supplementalRequests.length) {
	          Promise$1.all(supplementalRequests).then(function () {
	            return resolve(response);
	          }).catch(function (reason) {
	            return reject(reason);
	          });
	        } else {
	          setTimeout(function () {
	            return resolve(response);
	          }, 0);
	        }
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }, {
	    key: 'request',
	    value: function request(_request) {
	      var promiseHandler = function promiseHandler(resolve, reject) {
	        CitySdk.request(_request).then(CitySdkTigerwebRequest.request).then(CitySdkGeoRequest.handleTigerwebResponse).then(function (response) {
	          return resolve(response);
	        }).catch(function (reason) {
	          return reject(reason);
	        });
	      };

	      return new Promise$1(promiseHandler);
	    }
	  }]);
	  return CitySdkGeoRequest;
	}();

	return CitySdkGeoRequest;

}));
//# sourceMappingURL=citysdk-geo-request.js.map