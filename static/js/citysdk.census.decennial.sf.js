/**
 * This is the Census module for the Decennial Summary File
 */

// Visit http://api.census.gov/data.html for a complete list of Census APIs, variables, and examples

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.censusDecennial = new CensusModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function CensusModule() {
    this.enabled = false;
};

//Enable function. Stores the API key for this module and sets it as enabled
CensusModule.prototype.enable = function(apiKey) {
    this.apiKey = apiKey;
    this.enabled = true;
};

//After this point the module is all up to you

//Defaults
CensusModule.prototype.DEFAULT_YEAR = 2010;
CensusModule.prototype.DEFAULT_LEVEL = "blockGroup";
CensusModule.prototype.DEFAULT_API = "sf1";

//Global variables for supplemental georequests
CensusModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT = 0;


/**
 * ACS5 available years and the apis available with those years
 * @type {object} Properties of years with arrays of available APIs
 */
CensusModule.prototype.sfyears = {
    "2010": ["sf1"],
    "2000": ["sf1", "sf3"],
    "1990": ["sf1", "sf3"]
};


/**
 * Dictionary of state codes to state capital coordinates. i.e. "AL" -> 32.3617, -86.2792
 * @type {object} Object with properties of state codes and values of arrays of coordinates
 */

CensusModule.prototype.stateCapitals = {
    "AL": [32.3617, -86.2792],
    "AK": [58.3, -134.4167],
    "AZ": [33.45, -112.0667],
    "AR": [34.6361, -92.3311],
    "CA": [38.5766, -121.4934],
    "CO": [39.7391, -104.9849],
    "CT": [41.7641, -72.6828],
    "DE": [39.1619, -75.5267],
    "DC": [38.9047, -77.0164],
    "FL": [30.4381, -84.2816],
    "GA": [33.7493, -84.3883],
    "HI": [21.3073, -157.8573],
    "ID": [43.6177, -116.1996],
    "IL": [39.7983, -89.6544],
    "IN": [39.7686, -86.1625],
    "IA": [41.5912, -93.6039],
    "KS": [39.0481, -95.6781],
    "KY": [38.1867, -84.8753],
    "LA": [30.4571, -91.1874],
    "ME": [44.3235, -69.7653],
    "MD": [38.9786, -76.4911],
    "MA": [42.3582, -71.0637],
    "MI": [42.7337, -84.5556],
    "MN": [44.9553, -93.1022],
    "MS": [32.2992, -90.1800],
    "MO": [38.5791, -92.1730],
    "MT": [46.5958, -112.0270],
    "NE": [40.8106, -96.6803],
    "NV": [39.1608, -119.7539],
    "NH": [43.2067, -71.5381],
    "NJ": [40.2237, -74.7640],
    "NM": [35.6672, -105.9644],
    "NY": [42.6525, -73.7572],
    "NC": [35.7806, -78.6389],
    "ND": [46.8133, -100.7790],
    "OH": [39.9833, -82.9833],
    "OK": [35.4822, -97.5350],
    "OR": [44.9308, -123.0289],
    "PA": [40.2697, -76.8756],
    "RI": [41.8236, -71.4222],
    "SC": [34.0298, -80.8966],
    "SD": [44.3680, -100.3364],
    "TN": [36.1667, -86.7833],
    "TX": [30.2500, -97.7500],
    "UT": [40.7500, -111.8833],
    "VT": [44.2500, -72.5667],
    "VA": [37.5333, -77.4667],
    "WA": [47.0425, -122.8931],
    "WV": [38.3472, -81.6333],
    "WI": [43.0667, -89.4000],
    "WY": [41.1456, -104.8019]
};

/**
 * Bounding box to allow users to request all geographies within the US, as there is no US boundary map server
**/
var usBoundingBox = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -49.5703125,
                            41.77131167976407
                        ],
                        [
                            -152.2265625,
                            77.23507365492472
                        ],
                        [
                            -221.1328125,
                            19.973348786110602
                        ],
                        [
                            -135.703125,
                            -16.97274101999901
                        ],
                        [
                            -49.5703125,
                            41.77131167976407
                        ]
                    ]
                ]
            }
        }
    ]
};

/**
 * Dictionary of aliases, string alias -> object with variable and description
 * @type {object} Object with properties of aliased variable, each having an object specifying the api, true variable, and description
 */

CensusModule.prototype.aliases = {
    // Totals
    "population_1990": {
        "api": "sf1",
        "variable": "P0010001",
        "description": "Total population in 1990"
    },
    "population_2000": {
        "api": "sf1",
        "variable": "P001001",
        "description": "Total population in 2000"
    },
    "population_2010": {
        "api": "sf1",
        "variable": "PCT0120001",
        "description": "Total population in 2010"
    },
    "population_families_1990": {
        "api": "sf1",
        "variable": "P0020001",
        "description": "The number of families in 1990"
    },
    "population_families_2000": {
        "api": "sf1",
        "variable": "P031001",
        "description": "The number of families in 2000"
    },
    "population_families_2010": {
        "api": "sf1",
        "variable": "PCT0160002",
        "description": "The number of families in 2010"
    },
    // Gender
    "population_male_1990": {
        "api": "sf1",
        "variable": "P0050001",
        "description": "The number of males in 1990"
    },
    "population_female_1990": {
        "api": "sf1",
        "variable": "P0050002",
        "description": "The number of females in 1990"
    },
    "population_male_2000": {
        "api": "sf1",
        "variable": "P012002",
        "description": "The number of males in 2000"
    },
    "population_female_2000": {
        "api": "sf1",
        "variable": "P012026",
        "description": "The number of females in 2000"
    },
    "population_male_2010": {
        "api": "sf1",
        "variable": "P0120002",
        "description": "The number of males in 2010"
    },
    "population_female_2010": {
        "api": "sf1",
        "variable": "P0120026",
        "description": "The number of females in 2010"
    },
    // Age
    "age_under_1_1990": {
        "api": "sf1",
        "variable": "P0110001",
        "description": "The number of persons under 1 year old in 1990"
    },
    "age_1_to_2_1990": {
        "api": "sf1",
        "variable": "P0110002",
        "description": "The number of persons ages 1 to 2 years old in 1990"
    },
    "age_3_to_4_1990": {
        "api": "sf1",
        "variable": "P0110003",
        "description": "The number of persons ages 3 to 4 years old in 1990"
    },
    "age_5_1990": {
        "api": "sf1",
        "variable": "P0110004",
        "description": "The number of persons age 5 years old in 1990"
    },
    "age_6_1990": {
        "api": "sf1",
        "variable": "P0110005",
        "description": "The number of persons ages 6 years old in 1990"
    },
    "age_7_to_9_1990": {
        "api": "sf1",
        "variable": "P0110006",
        "description": "The number of persons ages 7 to 9 years old in 1990"
    },
    "age_10_to_11_1990": {
        "api": "sf1",
        "variable": "P0110007",
        "description": "The number of persons ages 10 to 11 years old in 1990"
    },
    "age_12_to_13_1990": {
        "api": "sf1",
        "variable": "P0110008",
        "description": "The number of persons ages 12 to 13 years old in 1990"
    },
    "age_14_1990": {
        "api": "sf1",
        "variable": "P0110009",
        "description": "The number of persons age 14 years old in 1990"
    },
    "age_15_1990": {
        "api": "sf1",
        "variable": "P0110010",
        "description": "The number of persons age 15 years old in 1990"
    },
    "age_16_1990": {
        "api": "sf1",
        "variable": "P0110011",
        "description": "The number of persons age 16 years old in 1990"
    },
    "age_17_1990": {
        "api": "sf1",
        "variable": "P0110012",
        "description": "The number of persons age 17 years old in 1990"
    },
    "age_18_1990": {
        "api": "sf1",
        "variable": "P0110013",
        "description": "The number of persons age 18 years old in 1990"
    },
    "age_19_1990": {
        "api": "sf1",
        "variable": "P0110014",
        "description": "The number of persons age 19 years old in 1990"
    },
    "age_20_1990": {
        "api": "sf1",
        "variable": "P0110015",
        "description": "The number of persons age 20 years old in 1990"
    },
    "age_21_1990": {
        "api": "sf1",
        "variable": "P0110016",
        "description": "The number of persons age 21 years old in 1990"
    },
    "age_22_to_24_1990": {
        "api": "sf1",
        "variable": "P0110017",
        "description": "The number of persons ages 22 to 24 years old in 1990"
    },
    "age_25_to_29_1990": {
        "api": "sf1",
        "variable": "P0110018",
        "description": "The number of persons ages 25 to 29 years old in 1990"
    },
    "age_30_to_34_1990": {
        "api": "sf1",
        "variable": "P0110019",
        "description": "The number of persons ages 30 to 34 years old in 1990"
    },
    "age_35_to_39_1990": {
        "api": "sf1",
        "variable": "P0110020",
        "description": "The number of persons ages 35 to 39 years old in 1990"
    },
    "age_40_to_44_1990": {
        "api": "sf1",
        "variable": "P0110021",
        "description": "The number of persons ages 40 to 44 years old in 1990"
    },
    "age_45_to_49_1990": {
        "api": "sf1",
        "variable": "P0110022",
        "description": "The number of persons ages 45 to 49 years old in 1990"
    },
    "age_50_to_54_1990": {
        "api": "sf1",
        "variable": "P0110023",
        "description": "The number of persons ages 50 to 54 years old in 1990"
    },
    "age_55_to_59_1990": {
        "api": "sf1",
        "variable": "P0110024",
        "description": "The number of persons ages 55 to 59 years old in 1990"
    },
    "age_60_to_61_1990": {
        "api": "sf1",
        "variable": "P0110025",
        "description": "The number of persons ages 60 to 61 years old in 1990"
    },
    "age_62_to_64_1990": {
        "api": "sf1",
        "variable": "P0110026",
        "description": "The number of persons ages 62 to 64 years old in 1990"
    },
    "age_65_to_69_1990": {
        "api": "sf1",
        "variable": "P0110027",
        "description": "The number of persons ages 65 to 69 years old in 1990"
    },
    "age_70_to_74_1990": {
        "api": "sf1",
        "variable": "P0110028",
        "description": "The number of persons ages 70 to 74 years old in 1990"
    },
    "age_75_to_79_1990": {
        "api": "sf1",
        "variable": "P0110029",
        "description": "The number of persons ages 75 to 79 years old in 1990"
    },
    "age_80_to_84_1990": {
        "api": "sf1",
        "variable": "P0110030",
        "description": "The number of persons ages 80 to 84 years old in 1990"
    },
    "age_85+_1990": {
        "api": "sf1",
        "variable": "P0110030",
        "description": "The number of persons ages 85 and older in 1990"
    },
    "age_under_5_male_2000": {
        "api": "sf1",
        "variable": "P012003",
        "description": "The number of male persons ages under 5 years old in 2000"
    },
    "age_5_to_9_male_2000": {
        "api": "sf1",
        "variable": "P012004",
        "description": "The number of male persons ages 5 to 9 years old in 2000"
    },
    "age_10_to_14_male_2000": {
        "api": "sf1",
        "variable": "P012005",
        "description": "The number of male persons ages 10 to 14 years old in 2000"
    },
    "age_15_to_17_male_2000": {
        "api": "sf1",
        "variable": "P012006",
        "description": "The number of male persons ages 15 to 17 years old in 2000"
    },
    "age_18_to_19_male_2000": {
        "api": "sf1",
        "variable": "P012007",
        "description": "The number of male persons ages 18 to 19 years old in 2000"
    },
    "age_20_male_2000": {
        "api": "sf1",
        "variable": "P012008",
        "description": "The number of male persons age 20 years old in 2000"
    },
    "age_21_male_2000": {
        "api": "sf1",
        "variable": "P012009",
        "description": "The number of male persons age 21 years old in 2000"
    },
    "age_22_to_24_male_2000": {
        "api": "sf1",
        "variable": "P012010",
        "description": "The number of male persons ages 22 to 24 years old in 2000"
    },
    "age_25_to_29_male_2000": {
        "api": "sf1",
        "variable": "P012011",
        "description": "The number of male persons ages 25 to 29 years old in 2000"
    },
    "age_30_to_34_male_2000": {
        "api": "sf1",
        "variable": "P012012",
        "description": "The number of male persons ages 30 to 34 years old in 2000"
    },
    "age_35_to_39_male_2000": {
        "api": "sf1",
        "variable": "P012013",
        "description": "The number of male persons ages 35 to 39 years old in 2000"
    },
    "age_40_to_44_male_2000": {
        "api": "sf1",
        "variable": "P012014",
        "description": "The number of male persons ages 40 to 44 years old in 2000"
    },
    "age_45_to_49_male_2000": {
        "api": "sf1",
        "variable": "P012015",
        "description": "The number of male persons ages 45 to 49 years old in 2000"
    },
    "age_50_to_54_male_2000": {
        "api": "sf1",
        "variable": "P012016",
        "description": "The number of male persons ages 50 to 54 years old in 2000"
    },
    "age_55_to_59_male_2000": {
        "api": "sf1",
        "variable": "P012017",
        "description": "The number of male persons ages 55 to 59 years old in 2000"
    },
    "age_60_to_61_male_2000": {
        "api": "sf1",
        "variable": "P012018",
        "description": "The number of male persons ages 60 to 61 years old in 2000"
    },
    "age_62_to_64_male_2000": {
        "api": "sf1",
        "variable": "P012019",
        "description": "The number of male persons ages 62 to 64 years old in 2000"
    },
    "age_65_to_66_male_2000": {
        "api": "sf1",
        "variable": "P012020",
        "description": "The number of male persons ages 65 to 66 years old in 2000"
    },
    "age_67_to_69_male_2000": {
        "api": "sf1",
        "variable": "P012021",
        "description": "The number of male persons ages 67 to 69 years old in 2000"
    },
    "age_70_to_74_male_2000": {
        "api": "sf1",
        "variable": "P012022",
        "description": "The number of male persons ages 70 to 74 years old in 2000"
    },
    "age_75_to_79_male_2000": {
        "api": "sf1",
        "variable": "P012023",
        "description": "The number of male persons ages 75 to 79 years old in 2000"
    },
    "age_80_to_84_male_2000": {
        "api": "sf1",
        "variable": "P012024",
        "description": "The number of male persons ages 80 to 84 years old in 2000"
    },
    "age_85+_male_2000": {
        "api": "sf1",
        "variable": "P012025",
        "description": "The number of male persons ages 85 years old and older in 2000"
    },
    "age_under_5_female_2000": {
        "api": "sf1",
        "variable": "P012027",
        "description": "The number of female persons ages under 5 years old in 2000"
    },
    "age_5_to_9_female_2000": {
        "api": "sf1",
        "variable": "P012028",
        "description": "The number of female persons ages 5 to 9 years old in 2000"
    },
    "age_10_to_14_female_2000": {
        "api": "sf1",
        "variable": "P012029",
        "description": "The number of female persons ages 10 to 14 years old in 2000"
    },
    "age_15_to_17_female_2000": {
        "api": "sf1",
        "variable": "P012030",
        "description": "The number of female persons ages 15 to 17 years old in 2000"
    },
    "age_18_to_19_female_2000": {
        "api": "sf1",
        "variable": "P012031",
        "description": "The number of female persons ages 18 to 19 years old in 2000"
    },
    "age_20_female_2000": {
        "api": "sf1",
        "variable": "P012032",
        "description": "The number of female persons age 20 years old in 2000"
    },
    "age_21_female_2000": {
        "api": "sf1",
        "variable": "P012033",
        "description": "The number of female persons age 21 years old in 2000"
    },
    "age_22_to_24_female_2000": {
        "api": "sf1",
        "variable": "P012034",
        "description": "The number of female persons ages 22 to 24 years old in 2000"
    },
    "age_25_to_29_female_2000": {
        "api": "sf1",
        "variable": "P012035",
        "description": "The number of female persons ages 25 to 29 years old in 2000"
    },
    "age_30_to_34_female_2000": {
        "api": "sf1",
        "variable": "P012036",
        "description": "The number of female persons ages 30 to 34 years old in 2000"
    },
    "age_35_to_39_female_2000": {
        "api": "sf1",
        "variable": "P012037",
        "description": "The number of female persons ages 35 to 39 years old in 2000"
    },
    "age_40_to_44_female_2000": {
        "api": "sf1",
        "variable": "P012038",
        "description": "The number of female persons ages 40 to 44 years old in 2000"
    },
    "age_45_to_49_female_2000": {
        "api": "sf1",
        "variable": "P012039",
        "description": "The number of female persons ages 45 to 49 years old in 2000"
    },
    "age_50_to_54_female_2000": {
        "api": "sf1",
        "variable": "P012040",
        "description": "The number of female persons ages 50 to 54 years old in 2000"
    },
    "age_55_to_59_female_2000": {
        "api": "sf1",
        "variable": "P012041",
        "description": "The number of female persons ages 55 to 59 years old in 2000"
    },
    "age_60_to_61_female_2000": {
        "api": "sf1",
        "variable": "P012042",
        "description": "The number of female persons ages 60 to 61 years old in 2000"
    },
    "age_62_to_64_female_2000": {
        "api": "sf1",
        "variable": "P012043",
        "description": "The number of female persons ages 62 to 64 years old in 2000"
    },
    "age_65_to_66_female_2000": {
        "api": "sf1",
        "variable": "P012044",
        "description": "The number of female persons ages 65 to 66 years old in 2000"
    },
    "age_67_to_69_female_2000": {
        "api": "sf1",
        "variable": "P012045",
        "description": "The number of female persons ages 67 to 69 years old in 2000"
    },
    "age_70_to_74_female_2000": {
        "api": "sf1",
        "variable": "P012046",
        "description": "The number of female persons ages 70 to 74 years old in 2000"
    },
    "age_75_to_79_female_2000": {
        "api": "sf1",
        "variable": "P012047",
        "description": "The number of female persons ages 75 to 79 years old in 2000"
    },
    "age_80_to_84_female_2000": {
        "api": "sf1",
        "variable": "P012048",
        "description": "The number of female persons ages 80 to 84 years old in 2000"
    },
    "age_85+_female_2000": {
        "api": "sf1",
        "variable": "P012049",
        "description": "The number of female persons ages 85 years old and older in 2000"
    },
    "age_under_5_male_2010": {
        "api": "sf1",
        "variable": "P012A003",
        "description": "The number of male persons ages under 5 years old in 2010"
    },
    "age_5_to_9_male_2010": {
        "api": "sf1",
        "variable": "P012A004",
        "description": "The number of male persons ages 5 to 9 years old in 2010"
    },
    "age_10_to_14_male_2010": {
        "api": "sf1",
        "variable": "P012A005",
        "description": "The number of male persons ages 10 to 14 years old in 2010"
    },
    "age_15_to_17_male_2010": {
        "api": "sf1",
        "variable": "P012A006",
        "description": "The number of male persons ages 15 to 17 years old in 2010"
    },
    "age_18_to_19_male_2010": {
        "api": "sf1",
        "variable": "P012A007",
        "description": "The number of male persons ages 18 to 19 years old in 2010"
    },
    "age_20_male_2010": {
        "api": "sf1",
        "variable": "P012A008",
        "description": "The number of male persons age 20 years old in 2010"
    },
    "age_21_male_2010": {
        "api": "sf1",
        "variable": "P012A009",
        "description": "The number of male persons age 21 years old in 2010"
    },
    "age_22_to_24_male_2010": {
        "api": "sf1",
        "variable": "P012A010",
        "description": "The number of male persons ages 22 to 24 years old in 2010"
    },
    "age_25_to_29_male_2010": {
        "api": "sf1",
        "variable": "P012A011",
        "description": "The number of male persons ages 25 to 29 years old in 2010"
    },
    "age_30_to_34_male_2010": {
        "api": "sf1",
        "variable": "P012A012",
        "description": "The number of male persons ages 30 to 34 years old in 2010"
    },
    "age_35_to_39_male_2010": {
        "api": "sf1",
        "variable": "P012A013",
        "description": "The number of male persons ages 35 to 39 years old in 2010"
    },
    "age_40_to_44_male_2010": {
        "api": "sf1",
        "variable": "P012A014",
        "description": "The number of male persons ages 40 to 44 years old in 2010"
    },
    "age_45_to_49_male_2010": {
        "api": "sf1",
        "variable": "P012A015",
        "description": "The number of male persons ages 45 to 49 years old in 2010"
    },
    "age_50_to_54_male_2010": {
        "api": "sf1",
        "variable": "P012A016",
        "description": "The number of male persons ages 50 to 54 years old in 2010"
    },
    "age_55_to_59_male_2010": {
        "api": "sf1",
        "variable": "P012A017",
        "description": "The number of male persons ages 55 to 59 years old in 2010"
    },
    "age_60_to_61_male_2010": {
        "api": "sf1",
        "variable": "P012A018",
        "description": "The number of male persons ages 60 to 61 years old in 2010"
    },
    "age_62_to_64_male_2010": {
        "api": "sf1",
        "variable": "P012A019",
        "description": "The number of male persons ages 62 to 64 years old in 2010"
    },
    "age_65_to_66_male_2010": {
        "api": "sf1",
        "variable": "P012A020",
        "description": "The number of male persons ages 65 to 66 years old in 2010"
    },
    "age_67_to_69_male_2010": {
        "api": "sf1",
        "variable": "P012A021",
        "description": "The number of male persons ages 67 to 69 years old in 2010"
    },
    "age_70_to_74_male_2010": {
        "api": "sf1",
        "variable": "P012A022",
        "description": "The number of male persons ages 70 to 74 years old in 2010"
    },
    "age_75_to_79_male_2010": {
        "api": "sf1",
        "variable": "P012A023",
        "description": "The number of male persons ages 75 to 79 years old in 2010"
    },
    "age_80_to_84_male_2010": {
        "api": "sf1",
        "variable": "P012A024",
        "description": "The number of male persons ages 80 to 84 years old in 2010"
    },
    "age_85+_male_2010": {
        "api": "sf1",
        "variable": "P012A025",
        "description": "The number of male persons ages 85 years old and older in 2010"
    },
    "age_under_5_female_2010": {
        "api": "sf1",
        "variable": "P012A027",
        "description": "The number of female persons ages under 5 years old in 2010"
    },
    "age_5_to_9_female_2010": {
        "api": "sf1",
        "variable": "P012A028",
        "description": "The number of female persons ages 5 to 9 years old in 2010"
    },
    "age_10_to_14_female_2010": {
        "api": "sf1",
        "variable": "P012A029",
        "description": "The number of female persons ages 10 to 14 years old in 2010"
    },
    "age_15_to_17_female_2010": {
        "api": "sf1",
        "variable": "P012A030",
        "description": "The number of female persons ages 15 to 17 years old in 2010"
    },
    "age_18_to_19_female_2010": {
        "api": "sf1",
        "variable": "P012A031",
        "description": "The number of female persons ages 18 to 19 years old in 2010"
    },
    "age_20_female_2010": {
        "api": "sf1",
        "variable": "P012A032",
        "description": "The number of female persons age 20 years old in 2010"
    },
    "age_21_female_2010": {
        "api": "sf1",
        "variable": "P012A033",
        "description": "The number of female persons age 21 years old in 2010"
    },
    "age_22_to_24_female_2010": {
        "api": "sf1",
        "variable": "P012A034",
        "description": "The number of female persons ages 22 to 24 years old in 2010"
    },
    "age_25_to_29_female_2010": {
        "api": "sf1",
        "variable": "P012A035",
        "description": "The number of female persons ages 25 to 29 years old in 2010"
    },
    "age_30_to_34_female_2010": {
        "api": "sf1",
        "variable": "P012A036",
        "description": "The number of female persons ages 30 to 34 years old in 2010"
    },
    "age_35_to_39_female_2010": {
        "api": "sf1",
        "variable": "P012A037",
        "description": "The number of female persons ages 35 to 39 years old in 2010"
    },
    "age_40_to_44_female_2010": {
        "api": "sf1",
        "variable": "P012A038",
        "description": "The number of female persons ages 40 to 44 years old in 2010"
    },
    "age_45_to_49_female_2010": {
        "api": "sf1",
        "variable": "P012A039",
        "description": "The number of female persons ages 45 to 49 years old in 2010"
    },
    "age_50_to_54_female_2010": {
        "api": "sf1",
        "variable": "P012A040",
        "description": "The number of female persons ages 50 to 54 years old in 2010"
    },
    "age_55_to_59_female_2010": {
        "api": "sf1",
        "variable": "P012A041",
        "description": "The number of female persons ages 55 to 59 years old in 2010"
    },
    "age_60_to_61_female_2010": {
        "api": "sf1",
        "variable": "P012A042",
        "description": "The number of female persons ages 60 to 61 years old in 2010"
    },
    "age_62_to_64_female_2010": {
        "api": "sf1",
        "variable": "P012A043",
        "description": "The number of female persons ages 62 to 64 years old in 2010"
    },
    "age_65_to_66_female_2010": {
        "api": "sf1",
        "variable": "P012A044",
        "description": "The number of female persons ages 65 to 66 years old in 2010"
    },
    "age_67_to_69_female_2010": {
        "api": "sf1",
        "variable": "P012A045",
        "description": "The number of female persons ages 67 to 69 years old in 2010"
    },
    "age_70_to_74_female_2010": {
        "api": "sf1",
        "variable": "P012A046",
        "description": "The number of female persons ages 70 to 74 years old in 2010"
    },
    "age_75_to_79_female_2010": {
        "api": "sf1",
        "variable": "P012A047",
        "description": "The number of female persons ages 75 to 79 years old in 2010"
    },
    "age_80_to_84_female_2010": {
        "api": "sf1",
        "variable": "P012A048",
        "description": "The number of female persons ages 80 to 84 years old in 2010"
    },
    "age_85+_female_2010": {
        "api": "sf1",
        "variable": "P012A049",
        "description": "The number of female persons ages 85 years old and older in 2010"
    },

    // Race
    "hispanic_1990": {
        "api": "sf1",
        "variable": "P0080001",
        "description": "Population (Hispanic) in 1990"
    },
    "asian_1990": {
        "api": "sf1",
        "variable": "P0060004",
        "description": "Population (Asian) in 1990"
    },
    "other_1990": {
        "api": "sf1",
        "variable": "P0060005",
        "description": "Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 1990"
    },
    "race_hispanic_no_1990": {
        "api": "sf1",
        "variable": "P0090001",
        "description": "Population (Hispanic No) in 1990"
    },
    "race_hispanic_mexican_1990": {
        "api": "sf1",
        "variable": "P0090002",
        "description": "Population (Hispanic Mexican) in 1990"
    },
    "race_hispanic_puerto_rican_1990": {
        "api": "sf1",
        "variable": "P0090003",
        "description": "Population (Hispanic Puerto Rican) in 1990"
    },
    "race_hispanic_cuban_1990": {
        "api": "sf1",
        "variable": "P0090004",
        "description": "Population (Hispanic Cuban) in 1990"
    },
    "race_hispanic_other_1990": {
        "api": "sf1",
        "variable": "P0090005",
        "description": "Population (Hispanic Other) in 1990"
    },
    "race_white_1990": {
        "api": "sf1",
        "variable": "P0070001",
        "description": "Population (White) in 1990"
    },
    "race_black_1990": {
        "api": "sf1",
        "variable": "P0070002",
        "description": "Population (Black) in 1990"
    },
    "race_american_indian_1990": {
        "api": "sf1",
        "variable": "P0070003",
        "description": "Population (American Indian) in 1990"
    },
    "race_eskimo_1990": {
        "api": "sf1",
        "variable": "P0070004",
        "description": "Population (Eskimo) in 1990"
    },
    "race_aleutian_1990": {
        "api": "sf1",
        "variable": "P0070005",
        "description": "Population (Aleutian) in 1990"
    },
    "race_chinese_1990": {
        "api": "sf1",
        "variable": "P0070006",
        "description": "Population (Chinese) in 1990"
    },
    "race_filipino_1990": {
        "api": "sf1",
        "variable": "P0070007",
        "description": "Population (Filipino) in 1990"
    },
    "race_japanese_1990": {
        "api": "sf1",
        "variable": "P0070008",
        "description": "Population (Japanese) in 1990"
    },
    "race_asian_indian_1990": {
        "api": "sf1",
        "variable": "P0070009",
        "description": "Population (Asian Indian) in 1990"
    },
    "race_korean_1990": {
        "api": "sf1",
        "variable": "P0070010",
        "description": "Population (Korean) in 1990"
    },
    "race_vietnamese_1990": {
        "api": "sf1",
        "variable": "P0070011",
        "description": "Population (Vietnamese) in 1990"
    },
    "race_cambodian_1990": {
        "api": "sf1",
        "variable": "P0070012",
        "description": "Population (Cambodian) in 1990"
    },
    "race_hmong_1990": {
        "api": "sf1",
        "variable": "P0070013",
        "description": "Population (Hmong) in 1990"
    },
    "race_laotian_1990": {
        "api": "sf1",
        "variable": "P0070014",
        "description": "Population (Laotian) in 1990"
    },
    "race_thai_1990": {
        "api": "sf1",
        "variable": "P0070015",
        "description": "Population (Thai) in 1990"
    },
    "race_other_asian_1990": {
        "api": "sf1",
        "variable": "P0070016",
        "description": "Population (Other Asian) in 1990"
    },
    "race_hawaiian_1990": {
        "api": "sf1",
        "variable": "P0070017",
        "description": "Population (Hawaiian) in 1990"
    },
    "race_samoan_1990": {
        "api": "sf1",
        "variable": "P0070018",
        "description": "Population (Samoan) in 1990"
    },
    "race_tongan_1990": {
        "api": "sf1",
        "variable": "P0070019",
        "description": "Population (Tongan) in 1990"
    },
    "race_other_polynesian_1990": {
        "api": "sf1",
        "variable": "P0070020",
        "description": "Population (Tongan) in 1990"
    },
    "race_guamanian_1990": {
        "api": "sf1",
        "variable": "P0070021",
        "description": "Population (Guamanian) in 1990"
    },
    "race_other_micronesian_1990": {
        "api": "sf1",
        "variable": "P0070022",
        "description": "Population (Micronesian) in 1990"
    },
    "race_melanesian_1990": {
        "api": "sf1",
        "variable": "P0070023",
        "description": "Population (Melanesian) in 1990"
    },
    "race_pacific_islander_1990": {
        "api": "sf1",
        "variable": "P0070024",
        "description": "Population (Pacific Islander) in 1990"
    },
    "race_other_race_1990": {
        "api": "sf1",
        "variable": "P0070025",
        "description": "Population (Other Race) in 1990"
    },
    "race_white_2000": {
        "api": "sf1",
        "variable": "PCT012A001",
        "description": "Population (White) in 2000"
    },
    "race_black_2000": {
        "api": "sf1",
        "variable": "PCT012B001",
        "description": "Population (Black) in 2000"
    },
    "race_hispanic_2000": {
        "api": "sf1",
        "variable": "PCT012H001",
        "description": "Population (Hispanic) in 2000"
    },
    "race_asian_2000": {
        "api": "sf1",
        "variable": "PCT012D001",
        "description": "Population (Asian) in 2000"
    },
    "race_other_2000": {
        "api": "sf1",
        "variable": "P003008",
        "description": "Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2000"
    },
    "race_hispanic_no_2000": {
        "api": "sf1",
        "variable": "PCT011002",
        "description": "Population (Hispanic No) in 2000"
    },
    "race_hispanic_latino_2000": {
        "api": "sf1",
        "variable": "PCT011003",
        "description": "Population (Hispanic Latino) in 2000"
    },
    "race_hispanic_mexican_2000": {
        "api": "sf1",
        "variable": "PCT011004",
        "description": "Population (Hispanic Mexican) in 2000"
    },
    "race_hispanic_puerto_rican_2000": {
        "api": "sf1",
        "variable": "PCT011005",
        "description": "Population (Hispanic Puerto Rican) in 2000"
    },
    "race_hispanic_cuban_2000": {
        "api": "sf1",
        "variable": "PCT011006",
        "description": "Population (Hispanic Cuban) in 2000"
    },
    "race_hispanic_dominican_republic_2000": {
        "api": "sf1",
        "variable": "PCT011007",
        "description": "Population (Hispanic Dominican Republic) in 2000"
    },
    "race_hispanic_central_american_2000": {
        "api": "sf1",
        "variable": "PCT011008",
        "description": "Population (Hispanic Central American) in 2000"
    },
    "race_hispanic_costa_rican_2000": {
        "api": "sf1",
        "variable": "PCT011009",
        "description": "Population (Hispanic Costa Rican) in 2000"
    },
    "race_hispanic_guatemalan_2000": {
        "api": "sf1",
        "variable": "PCT011010",
        "description": "Population (Hispanic Guatemalan) in 2000"
    },
    "race_hispanic_honduran_2000": {
        "api": "sf1",
        "variable": "PCT011011",
        "description": "Population (Hispanic Honduran) in 2000"
    },
    "race_hispanic_nicaraguan_2000": {
        "api": "sf1",
        "variable": "PCT011012",
        "description": "Population (Hispanic Nicaraguan) in 2000"
    },
    "race_hispanic_panamanian_2000": {
        "api": "sf1",
        "variable": "PCT011013",
        "description": "Population (Hispanic Panamanian) in 2000"
    },
    "race_hispanic_salvadoran_2000": {
        "api": "sf1",
        "variable": "PCT011014",
        "description": "Population (Hispanic Salvadoran) in 2000"
    },
    "race_hispanic_other_central_american_2000": {
        "api": "sf1",
        "variable": "PCT011015",
        "description": "Population (Hispanic other Central American) in 2000"
    },
    "race_south_american_2000": {
        "api": "sf1",
        "variable": "PCT011016",
        "description": "Population (South American) in 2000"
    },
    "rac_south_americane_argentinean_2000": {
        "api": "sf1",
        "variable": "PCT011017",
        "description": "Population (Agentinean) in 2000"
    },
    "race_south_american_bolivian_2000": {
        "api": "sf1",
        "variable": "PCT011018",
        "description": "Population (Bolivian) in 2000"
    },
    "race_south_american_chilean_2000": {
        "api": "sf1",
        "variable": "PCT011019",
        "description": "Population (Chilean) in 2000"
    },
    "race_colombian_2000": {
        "api": "sf1",
        "variable": "PCT011020",
        "description": "Population (Colombian) in 2000"
    },
    "race_south_american_ecuadorian_2000": {
        "api": "sf1",
        "variable": "PCT011021",
        "description": "Population (Ecuadorian) in 2000"
    },
    "race_south_american_paraguayan_2000": {
        "api": "sf1",
        "variable": "PCT011022",
        "description": "Population (Paraguayan) in 2000"
    },
    "race_south_american_peruvian_2000": {
        "api": "sf1",
        "variable": "PCT011023",
        "description": "Population (Peruvian) in 2000"
    },
    "race_south_american_uruguayan_2000": {
        "api": "sf1",
        "variable": "PCT011024",
        "description": "Population (Uruguayan) in 2000"
    },
    "race_south_american_venezuelan_2000": {
        "api": "sf1",
        "variable": "PCT011025",
        "description": "Population (Venezuelan) in 2000"
    },
    "race_other_south_american_2000": {
        "api": "sf1",
        "variable": "PCT011026",
        "description": "Population (other South American) in 2000"
    },
    "race_hispanic_other_latinos_2000": {
        "api": "sf1",
        "variable": "PCT011027",
        "description": "Population (Hispanic other Latinos) in 2000"
    },
    "race_spaniard_2000": {
        "api": "sf1",
        "variable": "PCT011028",
        "description": "Population (Spaniard) in 2000"
    },
    "race_spanish_2000": {
        "api": "sf1",
        "variable": "PCT011029",
        "description": "Population (Spanish) in 2000"
    },
    "race_spanish_american_2000": {
        "api": "sf1",
        "variable": "PCT011030",
        "description": "Population (Spanish American) in 2000"
    },
    "race_hispanic_other_2000": {
        "api": "sf1",
        "variable": "PCT011031",
        "description": "Population (Hispanic Other) in 2000"
    },
    "race_american_indian_2000": {
        "api": "sf1",
        "variable": "PCT012C001",
        "description": "Population (American Indian) in 2000"
    },
    "race_eskimo_2000": {
        "api": "sf1",
        "variable": "PCT001042",
        "description": "Population (Eskimo) in 2000"
    },
    "race_aleutian_2000": {
        "api": "sf1",
        "variable": "PCT001043",
        "description": "Population (Aleutian) in 2000"
    },
    "race_asian_indian_2000": {
        "api": "sf1",
        "variable": "PCT005002",
        "description": "Population (Asian Indian) in 2000"
    },
    "race_asian_bengladeshi_2000": {
        "api": "sf1",
        "variable": "PCT005003",
        "description": "Population (Bengladeshi) in 2000"
    },
    "race_asian_cambodian_2000": {
        "api": "sf1",
        "variable": "PCT005004",
        "description": "Population (Cambodian) in 2000"
    },
    "race_asian_chinese_2000": {
        "api": "sf1",
        "variable": "PCT005005",
        "description": "Population (Chinese except Taiwanese) in 2000"
    },
    "race_asian_filipino_2000": {
        "api": "sf1",
        "variable": "PCT005006",
        "description": "Population (Filipino) in 2000"
    },
    "race_asian_hmong_2000": {
        "api": "sf1",
        "variable": "PCT005007",
        "description": "Population (Hmong) in 2000"
    },
    "race_asian_indonesian_2000": {
        "api": "sf1",
        "variable": "PCT005008",
        "description": "Population (Indonesian) in 2000"
    },
    "race_asian_japanese_2000": {
        "api": "sf1",
        "variable": "PCT005009",
        "description": "Population (Japanese) in 2000"
    },
    "race_asian_korean_2000": {
        "api": "sf1",
        "variable": "PCT005010",
        "description": "Population (Korean) in 2000"
    },
    "race_asian_laotian_2000": {
        "api": "sf1",
        "variable": "PCT005011",
        "description": "Population (Laotian) in 2000"
    },
    "race_asian_malaysian_2000": {
        "api": "sf1",
        "variable": "PCT005012",
        "description": "Population (Malaysian) in 2000"
    },
    "race_asian_pakistani_2000": {
        "api": "sf1",
        "variable": "PCT005013",
        "description": "Population (Pakastani) in 2000"
    },
    "race_asian_sri_lankan_2000": {
        "api": "sf1",
        "variable": "PCT005014",
        "description": "Population (Sri Lankan) in 2000"
    },
    "race_asian_taiwanese_2000": {
        "api": "sf1",
        "variable": "PCT005015",
        "description": "Population (Taiwanese) in 2000"
    },
    "race_asian_thai_2000": {
        "api": "sf1",
        "variable": "PCT005016",
        "description": "Population (Thai) in 2000"
    },
    "race_asian_vietnamese_2000": {
        "api": "sf1",
        "variable": "PCT005017",
        "description": "Population (Vietnamese) in 2000"
    },
    "race_other_asian_2000": {
        "api": "sf1",
        "variable": "PCT005018",
        "description": "Population (Other Asian) in 2000"
    },
    "race_other_asian_not_specified_2000": {
        "api": "sf1",
        "variable": "PCT005019",
        "description": "Population (Other Asian, not specified) in 2000"
    },
    "race_pacific_islander_2000": {
        "api": "sf1",
        "variable": "PCT008001",
        "description": "Population (Pacific Islander) in 2000"
    },
    "race_pacific_islander_polynesian_2000": {
        "api": "sf1",
        "variable": "PCT008002",
        "description": "Population (Other Asian not specified) in 2000"
    },
    "race_pacific_islander_polynesian_hawaiian_2000": {
        "api": "sf1",
        "variable": "PCT008003",
        "description": "Population (Native Hawaiian) in 2000"
    },
    "race_pacific_islander_polynesian_samoan_2000": {
        "api": "sf1",
        "variable": "PCT008004",
        "description": "Population (Samoan) in 2000"
    },
    "race_pacific_islander_polynesian_tongan_2000": {
        "api": "sf1",
        "variable": "PCT008005",
        "description": "Population (Tongan) in 2000"
    },
    "race_pacific_islander_polynesian_other_2000": {
        "api": "sf1",
        "variable": "PCT008006",
        "description": "Population (other Polynesian) in 2000"
    },
    "race_pacific_islander_micronesian_2000": {
        "api": "sf1",
        "variable": "PCT008007",
        "description": "Population (Micronesian) in 2000"
    },
    "race_pacific_islander_micronesian_guam__chamorro_2000": {
        "api": "sf1",
        "variable": "PCT008008",
        "description": "Population (Micronesian - Guam or Chamorro) in 2000"
    },
    "race_pacific_islander_micronesian_other_2000": {
        "api": "sf1",
        "variable": "PCT008009",
        "description": "Population (other Micronesian) in 2000"
    },
    "race_pacific_islander_melanesian_2000": {
        "api": "sf1",
        "variable": "PCT008010",
        "description": "Population (Melanesian) in 2000"
    },
    "race_pacific_islander_melanesian_fijian_2000": {
        "api": "sf1",
        "variable": "PCT008011",
        "description": "Population (Melanesian - Fijian) in 2000"
    },
    "race_pacific_islander_melanesian_other_2000": {
        "api": "sf1",
        "variable": "PCT008012",
        "description": "Population (other Melanesian) in 2000"
    },
    "race_pacific_islander_pacific_islander_other_2000": {
        "api": "sf1",
        "variable": "PCT008013",
        "description": "Population (other Pacific Islander) in 2000"
    },
    "race_pacific_islander_pacific_islander_not_specified_2000": {
        "api": "sf1",
        "variable": "PCT008014",
        "description": "Population (Pacific Islander, not specified) in 2000"
    },
    "race_white_2010": {
        "api": "sf1",
        "variable": "PCT012A001",
        "description": "Population (White) in 2010"
    },
    "race_black_2010": {
        "api": "sf1",
        "variable": "PCT012B001",
        "description": "Population (Black) in 2010"
    },
    "race_hispanic_2010": {
        "api": "sf1",
        "variable": "PCT012H001",
        "description": "Population (Hispanic) in 2010"
    },
    "race_asian_2010": {
        "api": "sf1",
        "variable": "PCT012D001",
        "description": "Population (Asian) in 2010"
    },
    "race_other_2010": {
        "api": "sf1",
        "variable": "P0030007",
        "description": "Population (other - Non-white, black, asian, hispanic, native american, eskimo, aluveian) in 2010"
    },
    "race_hispanic_no_2010": {
        "api": "sf1",
        "variable": "PCT0110002",
        "description": "Population (Hispanic No) in 2010"
    },
    "race_hispanic_latino_2010": {
        "api": "sf1",
        "variable": "PCT0110003",
        "description": "Population (Hispanic Latino) in 2010"
    },
    "race_hispanic_mexican_2010": {
        "api": "sf1",
        "variable": "PCT0110004",
        "description": "Population (Hispanic Mexican) in 2010"
    },
    "race_hispanic_puerto_rican_2010": {
        "api": "sf1",
        "variable": "PCT0110005",
        "description": "Population (Hispanic Puerto Rican) in 2010"
    },
    "race_hispanic_cuban_2010": {
        "api": "sf1",
        "variable": "PCT0110006",
        "description": "Population (Hispanic Cuban) in 2010"
    },
    "race_hispanic_dominican_republic_2010": {
        "api": "sf1",
        "variable": "PCT0110007",
        "description": "Population (Hispanic Dominican Republic) in 2010"
    },
    "race_hispanic_central_american_2010": {
        "api": "sf1",
        "variable": "PCT0110008",
        "description": "Population (Hispanic Central American) in 2010"
    },
    "race_hispanic_costa_rican_2010": {
        "api": "sf1",
        "variable": "PCT0110009",
        "description": "Population (Hispanic Costa Rican) in 2010"
    },
    "race_hispanic_guatemalan_2010": {
        "api": "sf1",
        "variable": "PCT0110010",
        "description": "Population (Hispanic Guatemalan) in 2010"
    },
    "race_hispanic_honduran_2010": {
        "api": "sf1",
        "variable": "PCT0110011",
        "description": "Population (Hispanic Honduran) in 2010"
    },
    "race_hispanic_nicaraguan_2010": {
        "api": "sf1",
        "variable": "PCT0110012",
        "description": "Population (Hispanic Nicaraguan) in 2010"
    },
    "race_hispanic_panamanian_2010": {
        "api": "sf1",
        "variable": "PCT0110013",
        "description": "Population (Hispanic Panamanian) in 2010"
    },
    "race_hispanic_salvadoran_2010": {
        "api": "sf1",
        "variable": "PCT0110014",
        "description": "Population (Hispanic Salvadoran) in 2010"
    },
    "race_hispanic_other_central_american_2010": {
        "api": "sf1",
        "variable": "PCT0110015",
        "description": "Population (Hispanic other Central American) in 2010"
    },
    "race_south_american_2010": {
        "api": "sf1",
        "variable": "PCT0110016",
        "description": "Population (South American) in 2010"
    },
    "race_south_american_argentinean_2010": {
        "api": "sf1",
        "variable": "PCT0110017",
        "description": "Population (Agentinean) in 2010"
    },
    "race_south_american_bolivian_2010": {
        "api": "sf1",
        "variable": "PCT0110018",
        "description": "Population (Bolivian) in 2010"
    },
    "race_south_american_chilean_2010": {
        "api": "sf1",
        "variable": "PCT0110019",
        "description": "Population (Chilean) in 2010"
    },
    "race_south_american_colombian_2010": {
        "api": "sf1",
        "variable": "PCT0110020",
        "description": "Population (Colombian) in 2010"
    },
    "race_south_american_ecuadorian_2010": {
        "api": "sf1",
        "variable": "PCT0110021",
        "description": "Population (Ecuadorian) in 2010"
    },
    "race_south_american_paraguayan_2010": {
        "api": "sf1",
        "variable": "PCT0110022",
        "description": "Population (Paraguayan) in 2010"
    },
    "race_south_american_peruvian_2010": {
        "api": "sf1",
        "variable": "PCT0110023",
        "description": "Population (Peruvian) in 2010"
    },
    "race_south_american_uruguayan_2010": {
        "api": "sf1",
        "variable": "PCT0110024",
        "description": "Population (Uruguayan) in 2010"
    },
    "race_south_american_venezuelan_2010": {
        "api": "sf1",
        "variable": "PCT0110025",
        "description": "Population (Venezuelan) in 2010"
    },
    "race_other_south_american_2010": {
        "api": "sf1",
        "variable": "PCT0110026",
        "description": "Population (other South American) in 2010"
    },
    "race_hispanic_other_latinos_2010": {
        "api": "sf1",
        "variable": "PCT0110027",
        "description": "Population (Hispanic other Latinos) in 2010"
    },
    "race_spaniard_2010": {
        "api": "sf1",
        "variable": "PCT0110028",
        "description": "Population (Spaniard) in 2010"
    },
    "race_spanish_2010": {
        "api": "sf1",
        "variable": "PCT0110029",
        "description": "Population (Spanish) in 2010"
    },
    "race_spanish_american_2010": {
        "api": "sf1",
        "variable": "PCT0110030",
        "description": "Population (Spanish American) in 2010"
    },
    "race_hispanic_other_2010": {
        "api": "sf1",
        "variable": "PCT0110031",
        "description": "Population (Hispanic Other) in 2010"
    },
    "race_american_indian_2010": {
        "api": "sf1",
        "variable": "PCT012C001",
        "description": "Population (American Indian) in 2010"
    },
    "race_eskimo_2010": {
        "api": "sf1",
        "variable": "PCT0040003",
        "description": "Population (Alaska Native) in 2010"
    },
    "race_aleutian_2010": {
        "api": "sf1",
        "variable": "PCT0010048",
        "description": "Population (Aleutian) in 2010"
    },
    "race_asian_indian_2010": {
        "api": "sf1",
        "variable": "PCT0050002",
        "description": "Population (Asian Indian) in 2010"
    },
    "race_asian_bengladeshi_2010": {
        "api": "sf1",
        "variable": "PCT0050003",
        "description": "Population (Bengladeshi) in 2010"
    },
    "race_asian_cambodian_2010": {
        "api": "sf1",
        "variable": "PCT0050004",
        "description": "Population (Cambodian) in 2010"
    },
    "race_asian_chinese_2010": {
        "api": "sf1",
        "variable": "PCT0050005",
        "description": "Population (Chinese except Taiwanese) in 2010"
    },
    "race_asian_filipino_2010": {
        "api": "sf1",
        "variable": "PCT0050006",
        "description": "Population (Filipino) in 2010"
    },
    "race_asian_hmong_2010": {
        "api": "sf1",
        "variable": "PCT0050007",
        "description": "Population (Hmong) in 2010"
    },
    "race_asian_indonesian_2010": {
        "api": "sf1",
        "variable": "PCT0050008",
        "description": "Population (Indonesian) in 2010"
    },
    "race_asian_japanese_2010": {
        "api": "sf1",
        "variable": "PCT0050009",
        "description": "Population (Japanese) in 2010"
    },
    "race_asian_korean_2010": {
        "api": "sf1",
        "variable": "PCT0050010",
        "description": "Population (Korean) in 2010"
    },
    "race_asian_laotian_2010": {
        "api": "sf1",
        "variable": "PCT0050011",
        "description": "Population (Laotian) in 2010"
    },
    "race_asian_malaysian_2010": {
        "api": "sf1",
        "variable": "PCT0050012",
        "description": "Population (Malaysian) in 2010"
    },
    "race_asian_pakistani_2010": {
        "api": "sf1",
        "variable": "PCT0050013",
        "description": "Population (Pakastani) in 2010"
    },
    "race_asian_sri_lankan_2010": {
        "api": "sf1",
        "variable": "PCT0050014",
        "description": "Population (Sri Lankan) in 2010"
    },
    "race_asian_taiwanese_2010": {
        "api": "sf1",
        "variable": "PCT0050015",
        "description": "Population (Taiwanese) in 2010"
    },
    "race_asian_thai_2010": {
        "api": "sf1",
        "variable": "PCT0050016",
        "description": "Population (Thai) in 2010"
    },
    "race_asian_vietnamese_2010": {
        "api": "sf1",
        "variable": "PCT0050017",
        "description": "Population (Vietnamese) in 2010"
    },
    "race_other_asian_2010": {
        "api": "sf1",
        "variable": "PCT0050018",
        "description": "Population (Other Asian) in 2010"
    },
    "race_other_asian_not_specified_2010": {
        "api": "sf1",
        "variable": "PCT005019",
        "description": "Population (Other Asian, not specified) in 2010"
    },
    "race_pacific_islander_2010": {
        "api": "sf1",
        "variable": "PCT0080001",
        "description": "Population (Pacific Islander) in 2010"
    },
    "race_pacific_islander_polynesian_2010": {
        "api": "sf1",
        "variable": "PCT0080002",
        "description": "Population (Other Asian not specified) in 2010"
    },
    "race_pacific_islander_polynesian_hawaiian_2010": {
        "api": "sf1",
        "variable": "PCT0080003",
        "description": "Population (Native Hawaiian) in 2010"
    },
    "race_pacific_islander_polynesian_samoan_2010": {
        "api": "sf1",
        "variable": "PCT0080004",
        "description": "Population (Samoan) in 2010"
    },
    "race_pacific_islander_polynesian_tongan_2010": {
        "api": "sf1",
        "variable": "PCT0080005",
        "description": "Population (Tongan) in 2010"
    },
    "race_pacific_islander_polynesian_other_2010": {
        "api": "sf1",
        "variable": "PCT0080006",
        "description": "Population (other Polynesian) in 2010"
    },
    "race_pacific_islander_micronesian_2010": {
        "api": "sf1",
        "variable": "PCT0080007",
        "description": "Population (Micronesian) in 2010"
    },
    "race_pacific_islander_micronesian_guam_chamorro_2010": {
        "api": "sf1",
        "variable": "PCT0080008",
        "description": "Population (Micronesian - Guam or Chamorro) in 2010"
    },
    "race_pacific_islander_micronesian_marshallese_2010": {
        "api": "sf1",
        "variable": "PCT0080009",
        "description": "Population (Micronesian - Marshallese) in 2010"
    },
    "race_pacific_islander_micronesian_other_2010": {
        "api": "sf1",
        "variable": "PCT0080010",
        "description": "Population (Micronesian - other) in 2010"
    },
    "race_pacific_islander_melanesian_2010": {
        "api": "sf1",
        "variable": "PCT0080011",
        "description": "Population (Melanesian) in 2010"
    },
    "race_pacific_islander_melanesian_fijian_2010": {
        "api": "sf1",
        "variable": "PCT0080012",
        "description": "Population (Melanesian - Fijian) in 2010"
    },
    "race_pacific_islander_melanesian_other_2010": {
        "api": "sf1",
        "variable": "PCT0080013",
        "description": "Population (other Melanesian) in 2010"
    },
    "race_pacific_islander_pacific_islander_not_specified_2010": {
        "api": "sf1",
        "variable": "PCT0080014",
        "description": "Population (Pacific Islander, not specified) in 2010"
    },
    // Marriage
    "males_never_married_1990": {
        "api": "sf1",
        "variable": "P0140001",
        "description": "Population of males who never married in 1990"
    },
    "males_married_1990": {
        "api": "sf1",
        "variable": "P0140002",
        "description": "Population of males who are married, but not separated in 1990"
    },
    "males_separated_1990": {
        "api": "sf1",
        "variable": "P0140003",
        "description": "Population of males who are separated in 1990"
    },
    "males_widowed_1990": {
        "api": "sf1",
        "variable": "P0140004",
        "description": "Population of males who are widowed in 1990"
    },
    "males_divorced_1990": {
        "api": "sf1",
        "variable": "P0140005",
        "description": "Population of males who are divorced in 1990"
    },
    "females_never_married_1990": {
        "api": "sf1",
        "variable": "P0140006",
        "description": "Population of females who never married in 1990"
    },
    "females_married_1990": {
        "api": "sf1",
        "variable": "P0140007",
        "description": "Population of females who are married, but not separated in 1990"
    },
    "females_separated_1990": {
        "api": "sf1",
        "variable": "P0140008",
        "description": "Population of females who are separated in 1990"
    },
    "females_widowed_1990": {
        "api": "sf1",
        "variable": "P0140009",
        "description": "Population of females who are widowed in 1990"
    },
    "females_divorced_1990": {
        "api": "sf1",
        "variable": "P0140010",
        "description": "Population of females who are divorced in 1990"
    },
    // Living Quarters
    "college_dorms_1990": {
        "api": "sf1",
        "variable": "P0280006",
        "description": "Population living in college dorms in 1990"
    },
    "military_quarters_1990": {
        "api": "sf1",
        "variable": "P0280007",
        "description": "Population of living in military quarters in 1990"
    },
    "college_dorms_2000": {
        "api": "sf1",
        "variable": "P037007",
        "description": "Population living in college dorms in 2000"
    },
    "military_quarters_2000": {
        "api": "sf1",
        "variable": "P037007",
        "description": "Population of living in military quarters in 2000"
    },
    "college_dorms_2010": {
        "api": "sf1",
        "variable": "PCO0080001",
        "description": "Population living in college dorms in 2010"
    },
    "military_quarters_2010": {
        "api": "sf1",
        "variable": "PCO0090001",
        "description": "Population of living in military quarters in 2010"
    },
    // Institutionalized
    "correctional_facilities_1990": {
        "api": "sf1",
        "variable": "P0280001",
        "description": "Population living in correctional facilities in 1990"
    },
    "nursing_homes_1990": {
        "api": "sf1",
        "variable": "P0280002",
        "description": "Population living in nursing homes in 1990"
    },
    "mental_health_facilities_1990": {
        "api": "sf1",
        "variable": "P0280003",
        "description": "Population living in mental health facilities in 1990"
    },
    "juvenile_detention_facilities_1990": {
        "api": "sf1",
        "variable": "P0280004",
        "description": "Population living in juvenile detention facilities in 1990"
    },
    "correctional_facilities_2000": {
        "api": "sf1",
        "variable": "P037003",
        "description": "Population living in correctional facilities in 2000"
    },
    "nursing_homes_2000": {
        "api": "sf1",
        "variable": "P037004",
        "description": "Population living in nursing homes in 2000"
    },
    "mental_health_facilities_2000": {
        "api": "sf1",
        "variable": "PCT016041",
        "description": "Population living in mental health facilities in 2000"
    },
    "juvenile_detention_facilities_2000": {
        "api": "sf1",
        "variable": "PCT016025",
        "description": "Population living in juvenile detention facilities in 2000"
    },
    "correctional_facilities_2010": {
        "api": "sf1",
        "variable": "P0420003",
        "description": "Population living in correctional facilities in 2010"
    },
    "nursing_homes_2010": {
        "api": "sf1",
        "variable": "P0420005",
        "description": "Population living in nursing homes in 2010"
    },
    "mental_health_facilities_2010": {
        "api": "sf1",
        "variable": "PCT0200016",
        "description": "Population living in mental health facilities in 2010"
    },
    "juvenile_detention_facilities_2010": {
        "api": "sf1",
        "variable": "P0420004",
        "description": "Population living in juvenile detention facilities in 2010"
    },
    // Households
    "households_family_2_person_1990": {
        "api": "sf1",
        "variable": "P0270001",
        "description": "2 person family households in 1990"
    },
    "households_family_3_person_1990": {
        "api": "sf1",
        "variable": "P0270002",
        "description": "3 person family households in 1990"
    },
    "households_family_4_person_1990": {
        "api": "sf1",
        "variable": "P0270003",
        "description": "4 person family households in 1990"
    },
    "households_family_5_person_1990": {
        "api": "sf1",
        "variable": "P0270004",
        "description": "5 person family households in 1990"
    },
    "households_6_family_person_1990": {
        "api": "sf1",
        "variable": "P0270005",
        "description": "6 person family households in 1990"
    },
    "households_7+_family_person_1990": {
        "api": "sf1",
        "variable": "P0270006",
        "description": "7 person family households in 1990"
    },
    "households_1_nonfamily_person_1990": {
        "api": "sf1",
        "variable": "P0270007",
        "description": "1 person non-family households in 1990"
    },
    "households_nonfamily_2_person_1990": {
        "api": "sf1",
        "variable": "P0270008",
        "description": "1 person non-family households in 1990"
    },
    "households_nonfamily_3_person_1990": {
        "api": "sf1",
        "variable": "P0270009",
        "description": "1 person non-family households in 1990"
    },
    "households_nonfamily_4_person_1990": {
        "api": "sf1",
        "variable": "P0270010",
        "description": "4 person non-family households in 1990"
    },
    "households_nonfamily_5_person_1990": {
        "api": "sf1",
        "variable": "P0270011",
        "description": "5 person non-family households in 1990"
    },
    "households_nonfamily_6_person_1990": {
        "api": "sf1",
        "variable": "P0270012",
        "description": "6 person non-family households in 1990"
    },
    "households_nonfamily_7+_person_1990": {
        "api": "sf1",
        "variable": "P0270013",
        "description": "7+ person non-family households in 1990"
    }
};

/**
 * Begin utility functions
 */

/**
 * Checks to see if a string is in the aliases dictionary and returns the appropriate variable if so.
 * e.g. "income" will return "DP03_0064PE"
 * If the string is not in the alias dictionary, it will return the same string back. This is useful for parsing
 * user input. (Either a user requests a variable in the alias dictionary OR a specific variable)
 *
 * @param {string} aliasOrVariable A string to parse into a variable string.
 * @returns {string} Variable string
 */
CensusModule.prototype.parseToVariable = function(aliasOrVariable) {
    //If the requested string is an alias, return the appropriate variable from the dictionary
    if(aliasOrVariable in this.aliases) {
        return this.aliases[aliasOrVariable].variable;
    }

    //Otherwise, this is either already a variable name or is unsupported
    return aliasOrVariable;
};

CensusModule.prototype.parseToAlias = function(variable, request) {
    //If the requested string is an has an alias, return it
    for (key in this.aliases) {
        if (this.aliases[key].variable == variable) {
            if (window.jQuery.inArray(key, request.variables)) {
                return key;
            }
        }
    }

    //Otherwise, this is not an alias
    return variable;
};

/**
 * Returns TRUE if the alias is normalizable (as marked in the alias dictionary), otherwise, false.
 * @param alias
 * @returns {boolean}
 */
CensusModule.prototype.isNormalizable = function(alias) {
    if(alias in this.aliases) {
        if("normalizable" in this.aliases[alias]) {
            if(this.aliases[alias].normalizable == true) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Parses the state code in a request object, converting two letter state codes to lat/lng
 * @param request Object representing an api request
 */
CensusModule.prototype.parseRequestStateCode = function(request) {
    //This supports 2 letter state codes in a request
    if("state" in request) {
        if(isNaN(request.state)) {
            if(!("lat" in request) && !("lng" in request)) {
                request.lat = this.stateCapitals[request.state][0];
                request.lng = this.stateCapitals[request.state][1];
                delete request.state;
            } else {
                delete request.state;
            }
        }
    }
};

/**
 * Checks the request object for lat/lng latitude/longitude and x/y fields and moves them to the appropriate locations
 * for processing by the module
 * @param request Object representing an api request
 */
CensusModule.prototype.parseRequestLatLng = function(request) {
    //Check if we have latitude and longitude in the request
    //Allow the users to use either x,y; lat,lng; latitude,longitude to sepecify co-ordinates
    if(!("lat" in request)) {
        if("latitude" in request) {
            request.lat = request.latitude;
            delete request.latitude;
        } else if ("y" in request) {
            request.lat = request.y;
            delete request.y;
        }
    }

    if(!("lng" in request)) {
        if("longitude" in request) {
            request.lng = request.longitude;
            delete request.longitude;
        } else if("x" in request) {
            request.lng = request.x;
            delete request.x;
        }
    }
};

/**
 * Converts ESRI JSON to GeoJSON
 * @param esriJSON
 * @returns {{type: string, features: Array}}
 * @constructor
 */
CensusModule.prototype.ESRItoGEO = function(esriJSON) {
    var json = $.parseJSON(esriJSON);
    var features = json.features;

    var geojson = {
        "type": "FeatureCollection",
        "features": []
    };

    for(var i = 0; i < features.length; i++) {
        features[i].spatialReference = json.spatialReference;
        geojson.features.push(Terraformer.ArcGIS.parse(features[i]));
    }

    return geojson;
};

/**
 * Converts geoJSON to ESRI Json
 * @param geoJSON
 * @returns {*}
 * @constructor
 */
CensusModule.prototype.GEOtoESRI = function(geoJSON) {
    return Terraformer.ArcGIS.convert(geoJSON);
};

/**
 * Downloads an ACS API's entire dictionary of variables from the Census
 * @param api
 * @param year
 * @param callback
 */
CensusModule.prototype.getACSVariableDictionary = function(api, year, callback) {
    var apiPattern = /({api})/;
    var yearPattern = /({year})/;

    var URL = "http://api.census.gov/data/{year}/{api}/variables.json";
    URL = URL.replace(apiPattern, api);
    URL = URL.replace(yearPattern, year);

    CitySDK.prototype.sdkInstance.ajaxRequest(URL).done(
        function(response) {
            response = $.parseJSON(response);
            callback(response);
        }
    );
};

/**
 * End utility functions
 */

/**
 * Converts co-ordinates to Census FIPS via the Geocoder API
 *
 * @param {float} lat Latitude
 * @param {float} lng Longitude
 * @param {function} callback Callback function
 */
CensusModule.prototype.latLngToFIPS = function(lat, lng, callback) {
    var latPattern = /({lat})/;
    var lngPattern = /({lng})/;

    //The question mark at the end of this url tells JQuery to handle setting up and calling the JSONP callback
    var geocoderURL = "http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x={lng}&y={lat}&benchmark=4&vintage=4&layers=8,12,28,86,84&format=jsonp&callback=?";

    //Insert our requested coordinates into the geocoder url
    geocoderURL = geocoderURL.replace(latPattern, lat);
    geocoderURL = geocoderURL.replace(lngPattern, lng);
    //Make our AJAX request
    var request = CitySDK.prototype.sdkInstance.jsonpRequest(geocoderURL);

    //Attach a completion event to the promise
    request.done(function(response) {
        //Call the callback
        callback(response.result.geographies);
    });
};

/**
 * Converts a street address to Census FIPS via the Geocoder API
 *
 * Returns an array of matched addresses.
 *
 * @param street Street Address
 * @param city City
 * @param state State (2-Letter USPS Code)
 * @param callback Callback function
 */
CensusModule.prototype.addressToFIPS = function(street, city, state, callback) {
    var streetPattern = /({street})/;
    var cityPattern = /({city})/;
    var statePattern = /({state})/;

    //Geocoder URL for addresses
    var geocoderURL = "http://geocoding.geo.census.gov/geocoder/geographies/address?street={street}&city={city}&state={state}&benchmark=4&vintage=4&layers=8,12,28,86,84&format=jsonp&callback=?";

    //Replace with our data
    geocoderURL = geocoderURL.replace(streetPattern, street);
    geocoderURL = geocoderURL.replace(cityPattern, city);
    geocoderURL = geocoderURL.replace(statePattern, state);

    //This converts the spaces/weird characters into proper encoding so we don't break things
    geocoderURL = encodeURI(geocoderURL);

    //Make the call
    var request = CitySDK.prototype.sdkInstance.jsonpRequest(geocoderURL);

    //Send to the callback
    request.done(function(response) {
        callback(response.result.addressMatches);
    });
};

/**
 * Converts a ZIP code to Lat/Lng and calls the callback on it.
 * @param zip {Number} 5 digit Zip code
 * @param callback
 */
CensusModule.prototype.ZIPtoLatLng = function(zip, callback) {
    var zipPattern = /({zip})/;

    var tigerURL = "http://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/2/query?where=ZCTA5%3D{zip}&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=CENTLAT%2CCENTLON&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson";

    tigerURL = tigerURL.replace(zipPattern, zip);

    var request = CitySDK.prototype.sdkInstance.ajaxRequest(tigerURL);

    request.done(function(response) {
        response = $.parseJSON(response);
        var returnValue = {
            "lat": null,
            "lng": null
        };

        if("features" in response) {
            if(response.features.length > 0) {
                returnValue.lat = response.features[0].attributes.CENTLAT;
                returnValue.lng = response.features[0].attributes.CENTLON;
            }
        }

        callback(returnValue);
    })
};


/**
 * Makes a request to the Decennial Summary File API. Should be used via APIRequest and not on its own, typically
 * @param {object} request JSON request (see APIRequest)
 * @param {function} callback
 */
CensusModule.prototype.sfSummaryRequest = function(request, callback) {
    var yearPattern = /({year})/;
    var apiPattern = /({api})/;
    var variablePattern = /({var})/;
    var blockGroupPattern = /({blockGroup})/;
    var statePattern = /({state})/;
    var countyPattern = /({county})/;
    var tractPattern = /({tract})/;
    var placePattern = /({place})/;
    var keyPattern = /({key})/;
    var qualifiersPattern = /({qualifiers})/;

    var qualifiers = "for=";
    var cascade = false;

    if(request.sublevel) {
        var level = (request.level == "blockGroup") ? "block+group" : request.level;
        switch(request.container) {
            case "us":
                qualifiers += level + ":*";
                break;
            case "place":
            case "state":
                qualifiers += level + ":*&in=state:{state}";
                if(request.level == "blockGroup") qualifiers += "+county:{county}";
                break;
            case "county":
                qualifiers += level + ":*&in=county:{county}+state:{state}";
                break;
            case "tract":
                qualifiers += level + ":*&in=tract:{tract}+county:{county}+state:{state}";
                break;
        }
    }

    //Only do this if the previous switch had no effect (i.e. no contianer)
    //TODO: Clean this up, unify with the above
    if(qualifiers == "for=") {
        switch(request.level) {
            case "us":
                //If sublevel, add the appropriate for and attach the in
                if(request.sublevel) {
                    qualifiers += "state:*";
                    cascade = true;
                } else {
                    qualifiers += "us:1";
                }
                break;
            case "blockGroup":
                if(request.sublevel) {
                    //Can't do this. No levels beneath. We'll set the sublevel to false here
                    request.sublevel = false;
                }
                qualifiers += "block+Group:{blockGroup}";
                if(!cascade) {
                    qualifiers += "&in=";
                    cascade = true;
                }
            case "tract":
                //If sublevel, add the appropriate for and attach the in
                //We also check the cascade tag so we don't do this twice.
                if(request.sublevel & !cascade) {
                    qualifiers += "block+Group:*&in=";
                    cascade = true;
                }

                qualifiers += "tract:{tract}";
                if(!cascade) {
                    qualifiers += "&in=";
                    cascade = true;
                } else {
                    qualifiers += "+";
                }
            case "county":
                //If sublevel, add the appropriate for and attach the in
                //We also check the cascade tag so we don't do this twice.
                if(request.sublevel & !cascade) {
                    qualifiers += "tract:*&in=";
                    cascade = true;
                }

                qualifiers += "county:{county}";
                if(!cascade) {
                    qualifiers += "&in=";
                    cascade = true;
                } else {
                    qualifiers += "+";
                }
            case "place":
                //If sublevel, add the appropriate for and attach the in
                //Check for cascade so we don't do this twice
                if(request.sublevel & !cascade) {
                    qualifiers += "place:*&in=";
                    cascade = true;
                } else if(!cascade) {
                    //We only use place in the for, for the moment
                    qualifiers += "place:{place}&in=";
                    cascade = true;
                }
            case "state":
                //If sublevel, add the appropriate for and attach the in
                //We also check the cascade tag so we don't do this twice.
                if(request.sublevel & !cascade) {
                    qualifiers += "county:*&in=";
                    cascade = true;
                }

                qualifiers += "state:{state}";
                break;
        }
    }

    //Construct the list of variables
    var variableString = "";

    for(var i = 0; i < request.variables.length; i++) {
        if(this.isNormalizable(request.variables[i])) {
            if(window.jQuery.inArray("population", request.variables) < 0) {
                //We have a variable that is normalizable, but no population in the request.
                //Grab the population
                request.variables.push("population");
            }
            //We have normalizable variables AND a request for population, we can break the for loop now
            break;
        }
    }

    for(var i = 0; i < request.variables.length; i++) {
        if(i != 0) variableString += ",";
        variableString += this.parseToVariable(request.variables[i]);
    }

    //The URL for ACS5 request (summary file)
    var sfURL;
    if (request.year.toString() == "1990") {
        sfURL = "http://api.census.gov/data/{year}/{api}?get=ANPSADPI,{var}&{qualifiers}&key={key}";
    } else {
        sfURL = "http://api.census.gov/data/{year}/{api}?get=NAME,{var}&{qualifiers}&key={key}";
    }


    //Regex our URL to insert appropriate variables
    sfURL = sfURL.replace(qualifiersPattern, qualifiers);
    sfURL = sfURL.replace(apiPattern, request.api);
    sfURL = sfURL.replace(yearPattern, request.year);
    sfURL = sfURL.replace(variablePattern, variableString);
    sfURL = sfURL.replace(blockGroupPattern, request.blockGroup);
    sfURL = sfURL.replace(statePattern, request.state);
    sfURL = sfURL.replace(countyPattern, request.county);
    sfURL = sfURL.replace(tractPattern, request.tract);
    sfURL = sfURL.replace(placePattern, request.place);
    sfURL = sfURL.replace(keyPattern, this.apiKey);

    console.log("URL called: " + sfURL);

    var request = CitySDK.prototype.sdkInstance.ajaxRequest(sfURL);

    //Attach a completion event to the promise
    request.done(function(response) {
        //Turn it into json
        var jsonObject = $.parseJSON(response);
        //Call the callback
        callback(jsonObject);
    });
};

/**
 * Makes a call to the Census TigerWeb API for Geometry.
 * Our spatial reference is 4326
 * @param request
 * @param callback
 */
CensusModule.prototype.tigerwebRequest = function(request, callback) {
    //This will ensure our coordinates come out properly
    var spatialReferenceCode = 4326;

    var servers = {
        current: {
            url: "http://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/{mapserver}/query",
            mapServers: {
                "state": 84,
                "county": 86,
                "tract": 8,
                "blockGroup": 10,
                "blocks": 12,
                "place": 28
            }
        },
        acs2014: {
            url: "http://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2014/MapServer/{mapserver}/query",
            mapServers: {
                "state": 82,
                "county": 84,
                "tract": 8,
                "blockGroup": 10,
                "place": 26
            }
        },
        acs2013: {
            url: "http://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2013/MapServer/{mapserver}/query",
            mapServers: {
                "state": 82,
                "county": 84,
                "tract": 8,
                "blockGroup": 10,
                "place": 26
            }
        },
        census2010: {
            url: "http://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2010/MapServer/{mapserver}/query",
            mapServers: {
                "state": 98,
                "county": 100,
                "tract": 14,
                "blockGroup": 16,
                "blocks": 18,
                "place": 34
            }
        }
    };

    var server = "current";
    if("mapServer" in request) {
        server = request.mapServer;
    } else {
        request.mapServer = "current";
    }

    //Dictionary of map server codes
    var mapServers = servers[server].mapServers;

    this.parseRequestStateCode(request);

    //Check for zip code
    if("zip" in request) {
        //We have zip code - but do we have lat/lng?
        if(!("lat" in request) || !("lng" in request)) {
            //We have the zip but no lat/lng - parse it and re-call
            this.ZIPtoLatLng(request.zip, function(response) {
                request.lat = response.lat;
                request.lng = response.lng;
                CitySDK.prototype.sdkInstance.modules.censusDecennial.tigerwebRequest(request, callback);
                return;
            });
        }
    }

    //Check for an address object
    if("address" in request) {
        //We have address - but do we have lat/lng?
        if(!("lat" in request) || !("lng" in request)) {
            //We have the address but no lat/lng - parse it and re-call
            this.addressToFIPS(request.address.street, request.address.city, request.address.state, function(response) {
                //Take the first matched address
                request.lat = response[0].coordinates.y;
                request.lng = response[0].coordinates.x;

                //Attach this "matched address" to the request address object so the user knows what we're using
                request.address.addressMatch = response[0];

                CitySDK.prototype.sdkInstance.modules.censusDecennial.tigerwebRequest(request, callback);
                return;
            })
        }
    }

    this.parseRequestLatLng(request);

    var mapserverPattern = /({mapserver})/;

    var tigerRequest = {
        f: "json",
        where: "",
        outFields: "*",
        outSR: spatialReferenceCode,
        inSR: spatialReferenceCode
    };

    tigerURL = servers[server].url;

    if("container" in request && "sublevel" in request) {
        if(!request.sublevel) {
            //They submitted a sublevel flag but it's false... remove the unnecessary flags and re-request
            delete request.sublevel;
            delete request.container;
            CitySDK.prototype.sdkInstance.modules.censusDecennial.tigerwebRequest(request, callback);
            return;
        }

        if(!("containerGeometry" in request)) {
            //We have a sublevel request with a container. We need to grab the container's geography and return it
            tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.container]);
            tigerRequest.geometry = request.lng + "," + request.lat;
            tigerRequest.geometryType = "esriGeometryPoint";
            tigerRequest.spatialRel = "esriSpatialRelIntersects";

            CitySDK.prototype.sdkInstance.postRequest(tigerURL, tigerRequest).done(
                function(response) {
                    var json = $.parseJSON(response);
                    var features = json.features;
                    //Grab our container ESRI geography, attach it to our request, and call this function again.
                    if(request.container == "us") {
                        request.containerGeometry = CitySDK.prototype.sdkInstance.modules.censusDecennial.GEOtoESRI(usBoundingBox)[0].geometry;
                    } else {
                        request.containerGeometry = features[0].geometry;
                    }
                    CitySDK.prototype.sdkInstance.modules.censusDecennial.tigerwebRequest(request, callback);
                }
            );
            return;
        } else {
            //We have a sublevel request with a container, AND we've already grabbed the container's ESRI json
            tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
            tigerRequest.geometry = JSON.stringify(request.containerGeometry);
            tigerRequest.geometryType = "esriGeometryPolygon";
            tigerRequest.spatialRel = (request.container == "place" || request.container == "geometry") ? "esriSpatialRelIntersects" : "esriSpatialRelContains";

            delete request.containerGeometry;

            CitySDK.prototype.sdkInstance.postRequest(tigerURL, tigerRequest).done(
                function(response) {
                    callback(CitySDK.prototype.sdkInstance.modules.censusDecennial.ESRItoGEO(response));
                }
            );
        }
    } else if ("sublevel" in request) {
        if(!request.sublevel) {
            //They submitted a sublevel flag but it's false... remove the unnecessary flags and re-request
            delete request.sublevel;
            delete request.container;
            CitySDK.prototype.sdkInstance.modules.censusDecennial.tigerwebRequest(request, callback);
            return;
        }
        //Sublevel, no container
        //Make the container equal to the level, and the sublevel
        request.container = request.level;
        switch(request.level) {
            case "us":
                request.level = "state";
                break;
            case "state":
                request.level = "county";
                break;
            case "county":
                request.level = "tract";
                break;
            case "place":
                request.level = "tract";
                break;
            case "tract":
                request.level = "blockGroup";
                break;
        };

        CitySDK.prototype.sdkInstance.modules.censusDecennial.tigerwebRequest(request, callback);
        return;
    } else {
        //We have a sublevel request with a container. We need to grab the container's geography and return it
        tigerURL = tigerURL.replace(mapserverPattern, mapServers[request.level]);
        tigerRequest.geometry = request.lng + "," + request.lat;
        tigerRequest.geometryType = "esriGeometryPoint";
        tigerRequest.spatialRel = "esriSpatialRelIntersects";

        CitySDK.prototype.sdkInstance.postRequest(tigerURL, tigerRequest).done(
            function(response) {
                callback(CitySDK.prototype.sdkInstance.modules.censusDecennial.ESRItoGEO(response));
            }
        );
    }
};

/**
 * Processes a data request by looking at a JSON request
 *
 * JSON Requests should include:
 * "year" - Year of the request. See acs5years object for available years. Defaults to 2013 if not specified.
 * "lat" - Latitude of the requested location (either specified as x, lat, or latitude) NORTH
 * "lng" - Longitude of the requested location (either specified as y, lng, or longitude) EAST
 * "sublevel" - Defaults to "false". If set to "true", it will return the group of sublevels from the specified level.
 * "level" - Level of the request. Options are: blockGroup, tract, county, state, us. Will default to blockGroup.
 * "variables" - Array of variables either by alias or specific name
 *
 * exampleRequest = {
 *       "year": "2013",
 *       "lat": 38.9047,
 *       "lng": -77.0164,
 *       "level": "blockGroup"
 *       "variables": [
 *           "income"
 *       ]
 *   };
 *
 *   exampleResponse = {
 *       "year": "2013",
 *       "lat": 38.9047,
 *       "lng": -77.0164,
 *       "level": "blockGroup",
 *       "state": "11",
 *       "county": "001",
 *       "tract": "004701",
 *       "blockGroup": "2",
 *       "data": {
 *           "income": 33210
 *       }
 *   };
 *
 *   A response where you set sublevel to "true" will have an array in the data field instead of an object.
 *
 *
 *   Another example request:
 *
 *   {
 *      "state": "NY",
 *      "level": "state",
 *      "variables": [
 *          "income",
 *          "population"
 *      ]
 *   }
 *
 *   You could also send an address object to specify location
 *   {
 *      "address": {
 *          "street": "18 F Street NW"
 *          "city": "Washington",
 *          "state": "DC"
 *       }
 *
 *       "level": "blockGroup",
 *       "variables": [
 *          "population"
 *       ]
 *   }
 * @param {object} request The JSON object of the request
 * @param {function} callback A callback, which accepts a response parameter
 */
CensusModule.prototype.APIRequest = function(request, callback) {
    //Check for a year
    if(!("year" in request)) {
        request.year = this.DEFAULT_YEAR;
    }

    if(!("api" in request)) {
        request.api = this.DEFAULT_API;
    } else {
        if(window.jQuery.inArray(request.api, this.sfyears[request.year]) < 0) {
            console.log("Warning: API " + request.api + " does not appear to support " + request.year);
        }
    }

    //Check for a level
    if(!("level" in request)) {
        request.level = this.DEFAULT_LEVEL;
    }

    //Check for sublevel flag
    if(!("sublevel" in request)) {
        request.sublevel = false;
    } else {
        //If we weren't given a boolean, convert the string to a boolean
        if(typeof request.sublevel !== typeof true) {
            if(request.sublevel == "true") {
                request.sublevel = true;
            } else {
                request.sublevel = false;
            }
        }
    }

    //Check for zip code
    if("zip" in request) {
        //We have zip code - but do we have lat/lng?
        if(!("lat" in request) || !("lng" in request)) {
            //We have the zip but no lat/lng - parse it and re-call
            this.ZIPtoLatLng(request.zip, function(response) {
                request.lat = response.lat;
                request.lng = response.lng;
                CitySDK.prototype.sdkInstance.modules.censusDecennial.APIRequest(request, callback);
                return;
            });
        }
    }

    //Check for an address object
    if("address" in request) {
        //We have address - but do we have lat/lng?
        if(!("lat" in request) || !("lng" in request)) {
            //We have the address but no lat/lng - parse it and re-call
            this.addressToFIPS(request.address.street, request.address.city, request.address.state, function(response) {
                //Take the first matched address
                request.lat = response[0].coordinates.y;
                request.lng = response[0].coordinates.x;

                //Attach this "matched address" to the request address object so the user knows what we're using
                request.address.addressMatch = response[0];

                CitySDK.prototype.sdkInstance.modules.censusDecennial.APIRequest(request, callback);
                return;
            })
        }
    }

    this.parseRequestStateCode(request);

    this.parseRequestLatLng(request);

    //Check if we have latitude/longitude values. If we do, call the geocoder and get the appropriate FIPS
    if("lat" in request && "lng" in request && !("geocoded" in request)) {
        this.latLngToFIPS(request.lat, request.lng, function(geographies) {
            //TODO: Expand this to support multiple blocks
            var fipsData = geographies["2010 Census Blocks"][0];
            request["state"] = fipsData["STATE"];
            request["county"] = fipsData["COUNTY"];
            request["tract"] = fipsData["TRACT"];
            request["blockGroup"] = fipsData["BLKGRP"];
            request["place"] = ("Incorporated Places" in geographies) ? (geographies["Incorporated Places"].length > 0) ? geographies["Incorporated Places"][0]["PLACE"] : null : null;
            request["place_name"] = ("Incorporated Places" in geographies) ? (geographies["Incorporated Places"].length > 0) ? geographies["Incorporated Places"][0]["NAME"] : null : null;

            request.geocoded = true;

            CitySDK.prototype.sdkInstance.modules.censusDecennial.APIRequest(request, callback);
        });
        return; //We return because the callback will fix our request into FIPs, and then call the request again
    }
    console.log("location prepared...");
    //if("state" in request && "county" in request && "tract" in request && "blockGroup" in request) {
        //if("variables" in request) {
            //If we don't have a data object in the request, create one
            if(!("data" in request)) request.data = [];
            console.log("creating API call...");
            //TODO: We need to create an algorithm to determine which API to call for which non-aliased variable
            //      right now everything is in acs5 summary so it doesn't matter.
            this.sfSummaryRequest(
                request,
                function(response) {
                    console.log(response)
                    if(request.sublevel) {
                        //If sublevel is set to true, our "data" property will be an array of objects for each sublevel item.
                        request.data = [];
                        var currentVariable;
                        var currentResponseItem;
                        var currentDataObject;
                        for(var i = 1; i < response.length; i++) {
                            currentDataObject = {};
                            currentResponseItem = response[i];
                            if (request.year.toString() == "1990") {
                                currentDataObject["name"] = currentResponseItem[window.jQuery.inArray("ANPSADPI", response[0])];
                            } else {
                                currentDataObject["name"] = currentResponseItem[window.jQuery.inArray("NAME", response[0])];
                            }
                            console.log(currentResponseItem);
                            var stateIndex = window.jQuery.inArray("state", response[0]);
                            var countyIndex = window.jQuery.inArray("county", response[0]);
                            var tractIndex = window.jQuery.inArray("tract", response[0]);
                            var blockGroupIndex = window.jQuery.inArray("block group", response[0]);
                            var placeIndex = window.jQuery.inArray("place", response[0]);

                            if(stateIndex >= 0) {
                                currentDataObject["state"] = currentResponseItem[stateIndex];
                            }

                            if(countyIndex >= 0) {
                                currentDataObject["county"] = currentResponseItem[countyIndex];
                            }

                            if(tractIndex >= 0) {
                                currentDataObject["tract"] = currentResponseItem[tractIndex];
                            }

                            if(blockGroupIndex >= 0) {
                                currentDataObject["blockGroup"] = currentResponseItem[blockGroupIndex];
                            }

                            if(placeIndex >= 0) {
                                currentDataObject["place"] = currentResponseItem[placeIndex];
                            }
                            /*
                            for(var j = 0; j < request.variables.length; j++) {
                                currentVariable = request.variables[j];
                                currentDataObject[currentVariable] = currentResponseItem[window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.census.parseToVariable(currentVariable), response[0])];

                                if(CitySDK.prototype.sdkInstance.modules.census.isNormalizable(currentVariable)) {
                                    currentDataObject[currentVariable + "_normalized"] = currentDataObject[currentVariable]/ currentResponseItem[window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.census.parseToVariable("population"), response[0])]
                                }

                            }
                            */

                            for(var j = 0; j < currentResponseItem.length; j++) {

                                if (response[0][j] == "ANPSADPI") continue;
                                currentVariable = CitySDK.prototype.sdkInstance.modules.censusDecennial.parseToAlias(response[0][j], request);
                                currentDataObject[currentVariable] = currentResponseItem[j];
                                //    currentDataObject[currentVariable] = currentResponseItem[window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.censusDecennial.parseToVariable(currentVariable), response[0])];


                                //if(CitySDK.prototype.sdkInstance.modules.censusDecennial.isNormalizable(currentVariable)) {
                                //    currentDataObject[currentVariable + "_normalized"] = currentDataObject[currentVariable]/ currentResponseItem[window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.census.parseToVariable("population"), response[0])]
                                //}

                            }


                            request.data.push(currentDataObject);
                        }
                    } else {
                        //We don't have sublevel, so we just grab the single response
                        var currentVariable;
                        var currentDataObject = {};
                        for(var i = 0; i < request.variables.length; i++) {
                            currentVariable = request.variables[i];
                            currentDataObject[currentVariable] = response[1][window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.censusDecennial.parseToVariable(currentVariable), response[0])];

                            if(CitySDK.prototype.sdkInstance.modules.censusDecennial.isNormalizable(currentVariable)) {
                                currentDataObject[currentVariable + "_normalized"] = currentDataObject[currentVariable]/ response[1][window.jQuery.inArray(CitySDK.prototype.sdkInstance.modules.censusDecennial.parseToVariable("population"), response[0])]
                            }

                            //Move it into an array for consistency
                            request.data = [];
                            request.data.push(currentDataObject);

                        }
                    }

                    delete request.geocoded;
                    callback(request);
                }
            );
        //} else {
            //We have no variables remaining - use the callback on the request object
            //callback(request);
            //return;
        //}
    //} else {
        //Is the level the US?
        //if(request.level == "us") {
            //Ok, let's just resubmit it with D.C. as the "state"
            //request.state = "DC";
            //CitySDK.prototype.sdkInstance.modules.censusDecennial.APIRequest(request, callback);
        //}

        //We have some container geometry but no specific location, let the supplemental requests handle the variables
        //if("containerGeometry" in request) {
            //request.data = [];
            //callback(request);
        //}

        return;
    //}
};


/**
 * Example request.
 *
 * {
 *      "lat": latitude,
 *      "lng": longitude,
 *      "sublevel": <optional> true/false,
 *      "container": <optional> place/county/state/tract
 *      "level": place/county/state/blockGroup/tract
 *      "variables": []
 *      "containerGeometry": <optional> Must have sublevel true and container flags, this value should be ESRI json and
  *                          marks the boundaries of the query region. You can convery geojson to ESRI via
  *                          CensusModule.prototype.GEOtoESRI
 *
 * }
 *
 * @param {object} request The JSON request
 * @param {function} callback The callback to take the response, which is geoJSON
 */
CensusModule.prototype.GEORequest = function(request, callback) {
    //Reference dictionary of levels -> geocoder response variables
    var comparisonVariables = {
        "tract": "TRACT",
        "place": "PLACE",
        "county": "COUNTY",
        "blockGroup": "BLKGRP"
    };

    //First - check if we have a data object in the request OR if we aren't requesting variables
    if("data" in request || !("variables" in request)) {
        //We have a data object for the request (or there isn't any requested), now we can get the geoJSON for the area
        CitySDK.prototype.sdkInstance.modules.censusDecennial.tigerwebRequest(request, function(response) {
            if(!("totals" in response)) {
                response.totals = {};
            }
            //If we have data, let's attach it to the geoJSON
            if("data" in request) {
                var totals = response.totals;
                var features = response.features;
                var data = request.data;
                var variables = request.variables;

                for(var i = 0; i < features.length; i++) {
                    matchedFeature = null;
                    //TODO: We need to tidy this grep up a bit.
                    matchedFeature = window.jQuery.grep(data, function(e){
                        //Ensure we have a direct match for low level items by comparing the higher level items
                        if(request.level == "blockGroup" || request.level == "tract") {
                            return e[request.level] == features[i].properties[comparisonVariables[request.level]] &&
                                e["tract"] == features[i].properties[comparisonVariables["tract"]] &&
                                e["county"] == features[i].properties[comparisonVariables["county"]];
                        } else {
                            return e[request.level] == features[i].properties[comparisonVariables[request.level]];
                        }
                    });

                    if(matchedFeature.length == 0) {
                        //Sometimes cities span multiple counties. In this case, we sometimes miss data due to the
                        //limited nature of the Census API's geography hierarchy. This will issue supplemental requests
                        //to ensure we have data for all of our geojson entities
                        var suppRequest = {
                            "state": features[i].properties["STATE"],
                            "tract": features[i].properties["TRACT"],
                            "county": features[i].properties["COUNTY"],
                            "blockGroup": features[i].properties["BLKGRP"],
                            "place": features[i].properties["PLACE"],
                            "level": request.level,
                            "variables": variables,
                            "featuresIndex": i
                        };

                        CensusModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT++;
                        CitySDK.prototype.sdkInstance.modules.censusDecennial.APIRequest(suppRequest, function(resp) {
                            CensusModule.prototype.SUPPLEMENTAL_REQUESTS_IN_FLIGHT--;
                            for (var property in resp.data[0]) {
                                if (resp.data[0].hasOwnProperty(property)) {
                                    features[resp.featuresIndex].properties[property] = resp.data[0][property];
                                    if(jQuery.inArray(property, variables) >= 0) totals[property] = Number(totals[property]) + (!isNaN(resp.data[0][property])) ? Number(resp.data[0][property]) : 0;
                                }
                            }
                        });
                    } else if(matchedFeature.length == 1) {
                        //We have matched the feature's tract to a data tract, move the data over
                        matchedFeature = matchedFeature[0];
                        for (var property in matchedFeature) {
                            if (matchedFeature.hasOwnProperty(property)) {
                                features[i].properties[property] = matchedFeature[property];
                                if(jQuery.inArray(property, variables) >= 0) totals[property] = Number(totals[property]) + (!isNaN(matchedFeature[property])) ? Number(matchedFeature[property]) : 0;
                            }
                        }
                    } else {
                        //This usually occurs when a low-level geography entity isn't uniquely identified
                        //by the grep. We'll need to add more comparisons to the grep to clear this issue up.
                        console.log("Multiple matched features: " );
                        console.log(features[i]);
                        console.log(matchedFeature);
                    }
                }
            }
            callback(response);
        });
    } else {
        //We do not have the requested variables - let's get them
        CitySDK.prototype.sdkInstance.modules.censusDecennial.APIRequest(request, function(response) {
                CitySDK.prototype.sdkInstance.modules.censusDecennial.GEORequest(response, callback);
        });
    }
};

/**
 * ESRI Modules
 * These modules come from https://github.com/Esri/Terraformer and serve to convert ArcGIS JSON to GeoJSON for the
 * Census GeoRequest
 */

/*! Terraformer JS - 1.0.5 - 2015-01-29
 *   https://github.com/esri/Terraformer
 *   Copyright (c) 2015 Environmental Systems Research Institute, Inc.
 *   Licensed MIT */!function(a,b){"object"==typeof module&&"object"==typeof module.exports&&(exports=module.exports=b()),"object"==typeof window&&(a.Terraformer=b())}(this,function(){function a(a){return"[object Array]"===Object.prototype.toString.call(a)}function b(){var a=Array.prototype.slice.apply(arguments);void 0!==typeof console&&console.warn&&console.warn.apply(console,a)}function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a){if(a.type)switch(a.type){case"Point":return[a.coordinates[0],a.coordinates[1],a.coordinates[0],a.coordinates[1]];case"MultiPoint":return g(a.coordinates);case"LineString":return g(a.coordinates);case"MultiLineString":return e(a.coordinates);case"Polygon":return e(a.coordinates);case"MultiPolygon":return f(a.coordinates);case"Feature":return a.geometry?d(a.geometry):null;case"FeatureCollection":return h(a);case"GeometryCollection":return i(a);default:throw new Error("Unknown type: "+a.type)}return null}function e(a){for(var b=null,c=null,d=null,e=null,f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.length;h++){var i=g[h],j=i[0],k=i[1];null===b?b=j:b>j&&(b=j),null===c?c=j:j>c&&(c=j),null===d?d=k:d>k&&(d=k),null===e?e=k:k>e&&(e=k)}return[b,d,c,e]}function f(a){for(var b=null,c=null,d=null,e=null,f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.length;h++)for(var i=g[h],j=0;j<i.length;j++){var k=i[j],l=k[0],m=k[1];null===b?b=l:b>l&&(b=l),null===c?c=l:l>c&&(c=l),null===d?d=m:d>m&&(d=m),null===e?e=m:m>e&&(e=m)}return[b,d,c,e]}function g(a){for(var b=null,c=null,d=null,e=null,f=0;f<a.length;f++){var g=a[f],h=g[0],i=g[1];null===b?b=h:b>h&&(b=h),null===c?c=h:h>c&&(c=h),null===d?d=i:d>i&&(d=i),null===e?e=i:i>e&&(e=i)}return[b,d,c,e]}function h(a){for(var b,c=[],e=a.features.length-1;e>=0;e--)b=d(a.features[e].geometry),c.push([b[0],b[1]]),c.push([b[2],b[3]]);return g(c)}function i(a){for(var b,c=[],e=a.geometries.length-1;e>=0;e--)b=d(a.geometries[e]),c.push([b[0],b[1]]),c.push([b[2],b[3]]);return g(c)}function k(a){var b=d(a);return{x:b[0],y:b[1],w:Math.abs(b[0]-b[2]),h:Math.abs(b[1]-b[3])}}function l(a){return a*W}function m(a){return a*X}function n(a,b){for(var c=0;c<a.length;c++)"number"==typeof a[c][0]&&(a[c]=b(a[c])),"object"==typeof a[c]&&(a[c]=n(a[c],b));return a}function o(a){var b=a[0],c=a[1];return[l(b/V)-360*Math.floor((l(b/V)+180)/360),l(Math.PI/2-2*Math.atan(Math.exp(-1*c/V)))]}function p(a){var b=a[0],c=Math.max(Math.min(a[1],89.99999),-89.99999);return[m(b)*V,V/2*Math.log((1+Math.sin(m(c)))/(1-Math.sin(m(c))))]}function q(a,b,c){if("Point"===a.type)a.coordinates=b(a.coordinates);else if("Feature"===a.type)a.geometry=q(a.geometry,b,!0);else if("FeatureCollection"===a.type)for(var d=0;d<a.features.length;d++)a.features[d]=q(a.features[d],b,!0);else if("GeometryCollection"===a.type)for(var e=0;e<a.geometries.length;e++)a.geometries[e]=q(a.geometries[e],b,!0);else a.coordinates=n(a.coordinates,b);return c||b===p&&(a.crs=Y),b===o&&delete a.crs,a}function r(a){return q(a,p)}function s(a){return q(a,o)}function t(a,b){return b>a?-1:a>b?1:0}function u(a,b){return a[0]>b[0]?-1:a[0]<b[0]?1:a[1]>b[1]?-1:a[1]<b[1]?1:0}function v(a,b,c){return t((b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1]),0)}function w(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d}function x(a,b){var c=b;for(var d in a){var e=v(b,c,a[d]);(-1===e||0===e&&w(b,a[d])>w(b,c))&&(c=a[d])}return c}function y(a){if(0===a.length)return[];if(1===a.length)return a;for(var b=[a.sort(u)[0]],c=0;c<b.length;c++){var d=x(a,b[c]);d!==b[0]&&b.push(d)}return b}function z(a){for(var b,c=0;c<a.length-3;c++){var d=a[c],e=a[c+1],f=a[c+2],g=[e[0]-d[0],e[1]-d[1]],h=f[0]*g[1]-f[1]*g[0]+g[0]*d[1]-g[1]*d[0];if(0===c)b=0>h?!0:!1;else if(b&&h>0||!b&&0>h)return!1}return!0}function A(a,b){for(var c=!1,d=-1,e=a.length,f=e-1;++d<e;f=d)(a[d][1]<=b[1]&&b[1]<a[f][1]||a[f][1]<=b[1]&&b[1]<a[d][1])&&b[0]<(a[f][0]-a[d][0])*(b[1]-a[d][1])/(a[f][1]-a[d][1])+a[d][0]&&(c=!c);return c}function B(a,b){if(a&&a.length){if(1===a.length)return A(a[0],b);if(A(a[0],b)){for(var c=1;c<a.length;c++)if(A(a[c],b))return!1;return!0}return!1}return!1}function C(a,b,c,d){var e=(d[0]-c[0])*(a[1]-c[1])-(d[1]-c[1])*(a[0]-c[0]),f=(b[0]-a[0])*(a[1]-c[1])-(b[1]-a[1])*(a[0]-c[0]),g=(d[1]-c[1])*(b[0]-a[0])-(d[0]-c[0])*(b[1]-a[1]);if(0!==g){var h=e/g,i=f/g;if(h>=0&&1>=h&&i>=0&&1>=i)return!0}return!1}function D(a){return!isNaN(parseFloat(a))&&isFinite(a)}function E(a,b){if(D(a[0][0])){if(D(b[0][0])){for(var c=0;c<a.length-1;c++)for(var d=0;d<b.length-1;d++)if(C(a[c],a[c+1],b[d],b[d+1]))return!0}else for(var e=0;e<b.length;e++)if(E(a,b[e]))return!0}else for(var f=0;f<a.length;f++)if(E(a[f],b))return!0;return!1}function F(a){for(var b=[],c=0;c<a.length;c++){var d=a[c].slice();G(d[0],d[d.length-1])===!1&&d.push(d[0]),b.push(d)}return b}function G(a,b){for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}function H(a,b){if(a.length!==b.length)return!1;for(var c=a.slice().sort(u),d=b.slice().sort(u),e=0;e<c.length;e++){if(c[e].length!==d[e].length)return!1;for(var f=0;f<c.length;f++)if(c[e][f]!==d[e][f])return!1}return!0}function I(a){if(a)switch(a.type){case"Point":return new J(a);case"MultiPoint":return new K(a);case"LineString":return new L(a);case"MultiLineString":return new M(a);case"Polygon":return new N(a);case"MultiPolygon":return new O(a);case"Feature":return new P(a);case"FeatureCollection":return new Q(a);case"GeometryCollection":return new R(a);default:throw new Error("Unknown type: "+a.type)}}function J(b){var d=Array.prototype.slice.call(arguments);if(b&&"Point"===b.type&&b.coordinates)c(this,b);else if(b&&a(b))this.coordinates=b;else{if(!(d.length>=2))throw"Terraformer: invalid input for Terraformer.Point";this.coordinates=d}this.type="Point"}function K(b){if(b&&"MultiPoint"===b.type&&b.coordinates)c(this,b);else{if(!a(b))throw"Terraformer: invalid input for Terraformer.MultiPoint";this.coordinates=b}this.type="MultiPoint"}function L(b){if(b&&"LineString"===b.type&&b.coordinates)c(this,b);else{if(!a(b))throw"Terraformer: invalid input for Terraformer.LineString";this.coordinates=b}this.type="LineString"}function M(b){if(b&&"MultiLineString"===b.type&&b.coordinates)c(this,b);else{if(!a(b))throw"Terraformer: invalid input for Terraformer.MultiLineString";this.coordinates=b}this.type="MultiLineString"}function N(b){if(b&&"Polygon"===b.type&&b.coordinates)c(this,b);else{if(!a(b))throw"Terraformer: invalid input for Terraformer.Polygon";this.coordinates=b}this.type="Polygon"}function O(b){if(b&&"MultiPolygon"===b.type&&b.coordinates)c(this,b);else{if(!a(b))throw"Terraformer: invalid input for Terraformer.MultiPolygon";this.coordinates=b}this.type="MultiPolygon"}function P(a){if(a&&"Feature"===a.type)c(this,a);else{if(!(a&&a.type&&a.coordinates))throw"Terraformer: invalid input for Terraformer.Feature";this.geometry=a}this.type="Feature"}function Q(b){if(b&&"FeatureCollection"===b.type&&b.features)c(this,b);else{if(!a(b))throw"Terraformer: invalid input for Terraformer.FeatureCollection";this.features=b}this.type="FeatureCollection"}function R(b){if(b&&"GeometryCollection"===b.type&&b.geometries)c(this,b);else if(a(b))this.geometries=b;else{if(!b.coordinates||!b.type)throw"Terraformer: invalid input for Terraformer.GeometryCollection";this.type="GeometryCollection",this.geometries=[b]}this.type="GeometryCollection"}function S(a,b,c){for(var d=p(a),e=c||64,f={type:"Polygon",coordinates:[[]]},g=1;e>=g;g++){var h=g*(360/e)*Math.PI/180;f.coordinates[0].push([d[0]+b*Math.cos(h),d[1]+b*Math.sin(h)])}return f.coordinates=F(f.coordinates),s(f)}function T(a,b,d){var e=d||64,f=b||250;if(!a||a.length<2||!f||!e)throw new Error("Terraformer: missing parameter for Terraformer.Circle");c(this,new P({type:"Feature",geometry:S(a,f,e),properties:{radius:f,center:a,steps:e}}))}var U={},V=6378137,W=57.29577951308232,X=.017453292519943,Y={type:"link",properties:{href:"http://spatialreference.org/ref/sr-org/6928/ogcwkt/",type:"ogcwkt"}},Z={type:"link",properties:{href:"http://spatialreference.org/ref/epsg/4326/ogcwkt/",type:"ogcwkt"}},$=["length"];return I.prototype.toMercator=function(){return r(this)},I.prototype.toGeographic=function(){return s(this)},I.prototype.envelope=function(){return k(this)},I.prototype.bbox=function(){return d(this)},I.prototype.convexHull=function(){var a,b,c=[];if("Point"===this.type)return null;if("LineString"===this.type||"MultiPoint"===this.type){if(!(this.coordinates&&this.coordinates.length>=3))return null;c=this.coordinates}else if("Polygon"===this.type||"MultiLineString"===this.type){if(!(this.coordinates&&this.coordinates.length>0))return null;for(a=0;a<this.coordinates.length;a++)c=c.concat(this.coordinates[a]);if(c.length<3)return null}else if("MultiPolygon"===this.type){if(!(this.coordinates&&this.coordinates.length>0))return null;for(a=0;a<this.coordinates.length;a++)for(b=0;b<this.coordinates[a].length;b++)c=c.concat(this.coordinates[a][b]);if(c.length<3)return null}else if("Feature"===this.type){var d=new I(this.geometry);return d.convexHull()}return new N({type:"Polygon",coordinates:F([y(c)])})},I.prototype.toJSON=function(){var a={};for(var b in this)this.hasOwnProperty(b)&&-1===$.indexOf(b)&&(a[b]=this[b]);return a.bbox=d(this),a},I.prototype.contains=function(a){return new I(a).within(this)},I.prototype.within=function(a){var b,c,d;if("Point"===a.type&&"Point"===this.type)return G(this.coordinates,a.coordinates);if("MultiLineString"===a.type&&"Point"===this.type)for(c=0;c<a.coordinates.length;c++){var e={type:"LineString",coordinates:a.coordinates[c]};if(this.within(e))return!0}if(("LineString"===a.type||"MultiPoint"===a.type)&&"Point"===this.type)for(c=0;c<a.coordinates.length;c++){if(this.coordinates.length!==a.coordinates[c].length)return!1;if(G(this.coordinates,a.coordinates[c]))return!0}if("Polygon"===a.type){if("Polygon"===this.type){if(a.coordinates.length===this.coordinates.length)for(c=0;c<this.coordinates.length;c++)if(H(this.coordinates[c],a.coordinates[c]))return!0;return this.coordinates.length&&B(a.coordinates,this.coordinates[0][0])?!E(F(this.coordinates),F(a.coordinates)):!1}if("Point"===this.type)return B(a.coordinates,this.coordinates);if("LineString"===this.type||"MultiPoint"===this.type){if(!this.coordinates||0===this.coordinates.length)return!1;for(c=0;c<this.coordinates.length;c++)if(B(a.coordinates,this.coordinates[c])===!1)return!1;return!0}if("MultiLineString"===this.type){for(c=0;c<this.coordinates.length;c++){var f=new L(this.coordinates[c]);if(f.within(a)===!1)return d++,!1}return!0}if("MultiPolygon"===this.type){for(c=0;c<this.coordinates.length;c++){var g=new I({type:"Polygon",coordinates:this.coordinates[c]});if(g.within(a)===!1)return!1}return!0}}if("MultiPolygon"===a.type){if("Point"===this.type){if(a.coordinates.length)for(c=0;c<a.coordinates.length;c++)if(b=a.coordinates[c],B(b,this.coordinates)&&E([this.coordinates],a.coordinates)===!1)return!0;return!1}if("Polygon"===this.type){for(c=0;c<this.coordinates.length;c++)if(a.coordinates[c].length===this.coordinates.length)for(j=0;j<this.coordinates.length;j++)if(H(this.coordinates[j],a.coordinates[c][j]))return!0;if(E(this.coordinates,a.coordinates)===!1&&a.coordinates.length){for(c=0;c<a.coordinates.length;c++)b=a.coordinates[c],d=B(b,this.coordinates[0][0])===!1?!1:!0;return d}}else if("LineString"===this.type||"MultiPoint"===this.type)for(c=0;c<a.coordinates.length;c++){var h={type:"Polygon",coordinates:a.coordinates[c]};return this.within(h)?!0:!1}else{if("MultiLineString"===this.type){for(c=0;c<this.coordinates.length;c++){var i=new L(this.coordinates[c]);if(i.within(a)===!1)return!1}return!0}if("MultiPolygon"===this.type){for(c=0;c<a.coordinates.length;c++){var k={type:"Polygon",coordinates:a.coordinates[c]};if(this.within(k)===!1)return!1}return!0}}}return!1},I.prototype.intersects=function(a){"Feature"===a.type&&(a=a.geometry);var c=new I(a);if(this.within(a)||c.within(this))return!0;if("Point"!==this.type&&"MultiPoint"!==this.type&&"Point"!==a.type&&"MultiPoint"!==a.type)return E(this.coordinates,a.coordinates);if("Feature"===this.type){var d=new I(this.geometry);return d.intersects(a)}return b("Type "+this.type+" to "+a.type+" intersection is not supported by intersects"),!1},J.prototype=new I,J.prototype.constructor=J,K.prototype=new I,K.prototype.constructor=K,K.prototype.forEach=function(a){for(var b=0;b<this.coordinates.length;b++)a.apply(this,[this.coordinates[b],b,this.coordinates]);return this},K.prototype.addPoint=function(a){return this.coordinates.push(a),this},K.prototype.insertPoint=function(a,b){return this.coordinates.splice(b,0,a),this},K.prototype.removePoint=function(a){return"number"==typeof a?this.coordinates.splice(a,1):this.coordinates.splice(this.coordinates.indexOf(a),1),this},K.prototype.get=function(a){return new J(this.coordinates[a])},L.prototype=new I,L.prototype.constructor=L,L.prototype.addVertex=function(a){return this.coordinates.push(a),this},L.prototype.insertVertex=function(a,b){return this.coordinates.splice(b,0,a),this},L.prototype.removeVertex=function(a){return this.coordinates.splice(a,1),this},M.prototype=new I,M.prototype.constructor=M,M.prototype.forEach=function(a){for(var b=0;b<this.coordinates.length;b++)a.apply(this,[this.coordinates[b],b,this.coordinates])},M.prototype.get=function(a){return new L(this.coordinates[a])},N.prototype=new I,N.prototype.constructor=N,N.prototype.addVertex=function(a){return this.insertVertex(a,this.coordinates[0].length-1),this},N.prototype.insertVertex=function(a,b){return this.coordinates[0].splice(b,0,a),this},N.prototype.removeVertex=function(a){return this.coordinates[0].splice(a,1),this},N.prototype.close=function(){this.coordinates=F(this.coordinates)},N.prototype.hasHoles=function(){return this.coordinates.length>1},N.prototype.holes=function(){if(holes=[],this.hasHoles())for(var a=1;a<this.coordinates.length;a++)holes.push(new N([this.coordinates[a]]));return holes},O.prototype=new I,O.prototype.constructor=O,O.prototype.forEach=function(a){for(var b=0;b<this.coordinates.length;b++)a.apply(this,[this.coordinates[b],b,this.coordinates])},O.prototype.get=function(a){return new N(this.coordinates[a])},O.prototype.close=function(){var a=[];return this.forEach(function(b){a.push(F(b))}),this.coordinates=a,this},P.prototype=new I,P.prototype.constructor=P,Q.prototype=new I,Q.prototype.constructor=Q,Q.prototype.forEach=function(a){for(var b=0;b<this.features.length;b++)a.apply(this,[this.features[b],b,this.features])},Q.prototype.get=function(a){var b;return this.forEach(function(c){c.id===a&&(b=c)}),new P(b)},R.prototype=new I,R.prototype.constructor=R,R.prototype.forEach=function(a){for(var b=0;b<this.geometries.length;b++)a.apply(this,[this.geometries[b],b,this.geometries])},R.prototype.get=function(a){return new I(this.geometries[a])},T.prototype=new I,T.prototype.constructor=T,T.prototype.recalculate=function(){return this.geometry=S(this.properties.center,this.properties.radius,this.properties.steps),this},T.prototype.center=function(a){return a&&(this.properties.center=a,this.recalculate()),this.properties.center},T.prototype.radius=function(a){return a&&(this.properties.radius=a,this.recalculate()),this.properties.radius},T.prototype.steps=function(a){return a&&(this.properties.steps=a,this.recalculate()),this.properties.steps},T.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);return a},U.Primitive=I,U.Point=J,U.MultiPoint=K,U.LineString=L,U.MultiLineString=M,U.Polygon=N,U.MultiPolygon=O,U.Feature=P,U.FeatureCollection=Q,U.GeometryCollection=R,U.Circle=T,U.toMercator=r,U.toGeographic=s,U.Tools={},U.Tools.positionToMercator=p,U.Tools.positionToGeographic=o,U.Tools.applyConverter=q,U.Tools.toMercator=r,U.Tools.toGeographic=s,U.Tools.createCircle=S,U.Tools.calculateBounds=d,U.Tools.calculateEnvelope=k,U.Tools.coordinatesContainPoint=A,U.Tools.polygonContainsPoint=B,U.Tools.arraysIntersectArrays=E,U.Tools.coordinatesContainPoint=A,U.Tools.coordinatesEqual=H,U.Tools.convexHull=y,U.Tools.isConvex=z,U.MercatorCRS=Y,U.GeographicCRS=Z,U});

/*! Terraformer ArcGIS Parser - 1.0.4 - 2014-06-17
 *   https://github.com/esri/terraformer-arcgis-parser
 *   Copyright (c) 2014 Esri, Inc.
 *   Licensed MIT */!function(a,b){if("object"==typeof module&&"object"==typeof module.exports&&(exports=module.exports=b(require("terraformer"))),"object"==typeof a.navigator){if(!a.Terraformer)throw new Error("Terraformer.ArcGIS requires the core Terraformer library. https://github.com/esri/Terraformer");a.Terraformer.ArcGIS=b(a.Terraformer)}}(this,function(a){function b(a){var b,c,d,e,f=0,g=0,h=[];d=a.match(/((\+|\-)[^\+\-]+)/g),e=parseInt(d[0],32);for(var i=1;i<d.length;i+=2)b=parseInt(d[i],32)+f,f=b,c=parseInt(d[i+1],32)+g,g=c,h.push([b/e,c/e]);return h}function c(a){return d(a[0],a[a.length-1])||a.push(a[0]),a}function d(a,b){for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function f(a){var b,c=0,d=0,e=a.length,f=a[d];for(d;e-1>d;d++)b=a[d+1],c+=(b[0]-f[0])*(b[1]+f[1]),f=b;return c>=0}function g(a){var b=[],d=a.slice(0),e=c(d.shift().slice(0));if(e.length>=4){f(e)||e.reverse(),b.push(e);for(var g=0;g<d.length;g++){var h=c(d[g].slice(0));h.length>=4&&(f(h)&&h.reverse(),b.push(h))}}return b}function h(a){for(var b=[],c=0;c<a.length;c++)for(var d=g(a[c]),e=d.length-1;e>=0;e--){var f=d[e].slice(0);b.push(f)}return b}function i(b,c){var d=a.Tools.arraysIntersectArrays(b,c),e=a.Tools.coordinatesContainPoint(b,c[0]);return!d&&e?!0:!1}function j(a){for(var b=[],d=[],e=0;e<a.length;e++){var g=c(a[e].slice(0));if(!(g.length<4))if(f(g)){var h=[g];b.push(h)}else d.push(g)}for(;d.length;){for(var j=d.pop(),k=!1,l=b.length-1;l>=0;l--){var m=b[l][0];if(i(m,j)){b[l].push(j),k=!0;break}}k||b.push([j.reverse()])}return 1===b.length?{type:"Polygon",coordinates:b[0]}:{type:"MultiPolygon",coordinates:b}}function k(c,d){var f={};d=d||{},d.idAttribute=d.idAttribute||void 0,"number"==typeof c.x&&"number"==typeof c.y&&(f.type="Point",f.coordinates=[c.x,c.y],(c.z||c.m)&&f.coordinates.push(c.z),c.m&&f.coordinates.push(c.m)),c.points&&(f.type="MultiPoint",f.coordinates=c.points.slice(0)),c.paths&&(1===c.paths.length?(f.type="LineString",f.coordinates=c.paths[0].slice(0)):(f.type="MultiLineString",f.coordinates=c.paths.slice(0))),c.rings&&(f=j(c.rings.slice(0))),(c.compressedGeometry||c.geometry||c.attributes)&&(f.type="Feature",c.compressedGeometry&&(c.geometry={paths:[b(c.compressedGeometry)]}),f.geometry=c.geometry?k(c.geometry):null,f.properties=c.attributes?e(c.attributes):null,c.attributes&&(f.id=c.attributes[d.idAttribute]||c.attributes.OBJECTID||c.attributes.FID));var g=c.geometry?c.geometry.spatialReference:c.spatialReference;return g&&102100===g.wkid&&(f=a.toGeographic(f)),new a.Primitive(f)}function l(b,c){var d;c=c||{};var f=c.idAttribute||"OBJECTID";d=c.sr?{wkid:c.sr}:b&&b.crs===a.MercatorCRS?{wkid:102100}:{wkid:4326};var i,j={};switch(b.type){case"Point":j.x=b.coordinates[0],j.y=b.coordinates[1],b.coordinates[2]&&(j.z=b.coordinates[2]),b.coordinates[3]&&(j.m=b.coordinates[3]),j.spatialReference=d;break;case"MultiPoint":j.points=b.coordinates.slice(0),j.spatialReference=d;break;case"LineString":j.paths=[b.coordinates.slice(0)],j.spatialReference=d;break;case"MultiLineString":j.paths=b.coordinates.slice(0),j.spatialReference=d;break;case"Polygon":j.rings=g(b.coordinates.slice(0)),j.spatialReference=d;break;case"MultiPolygon":j.rings=h(b.coordinates.slice(0)),j.spatialReference=d;break;case"Feature":b.geometry&&(j.geometry=l(b.geometry,c)),j.attributes=b.properties?e(b.properties):{},j.attributes[f]=b.id;break;case"FeatureCollection":for(j=[],i=0;i<b.features.length;i++)j.push(l(b.features[i],c));break;case"GeometryCollection":for(j=[],i=0;i<b.geometries.length;i++)j.push(l(b.geometries[i],c))}return j}function m(c){return new a.LineString(b(c))}var n={};return n.parse=k,n.convert=l,n.toGeoJSON=k,n.fromGeoJSON=l,n.parseCompressedGeometry=m,n});
