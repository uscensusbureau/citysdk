goog.provide('census.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('defun.core');
goog.require('census.utils.core');
goog.require('census.wmsAPI.core');
goog.require('census.geoAPI.core');
goog.require('census.statsAPI.core');
goog.require('census.merger.core');
census.core.err_no_vals = "When using `predicates`, you must also supply at least one value to `values`";
/**
 * 
 *   takes a pattern of args and deploys one of the various underlying functions
 *   of this library.
 *   
 * @param {...*} var_args
 */
census.core.core_pattern = (function() { 
var census$core$core_pattern__delegate = function (args__21996__auto__){
var ocr_31876 = cljs.core.vec(args__21996__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_31876)) && ((cljs.core.count(ocr_31876) === 1)))){
try{var ocr_31876_0__31912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_31876,(0));
if((((!((ocr_31876_0__31912 == null))))?(((((ocr_31876_0__31912.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_31876_0__31912.cljs$core$ILookup$))))?true:(((!ocr_31876_0__31912.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_31876_0__31912):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_31876_0__31912))){
try{var ocr_31876_0__31912_geoResolution__31920 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_geoResolution__31920,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_sourcePath__31921 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_sourcePath__31921,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_geoHierarchy__31922 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_geoHierarchy__31922,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_values__31923 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_values__31923,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_predicates__31924 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_predicates__31924,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats+geos","stats+geos",-1652005478);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31991){if((e31991 instanceof Error)){
var e__21043__auto__ = e31991;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e31991;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31986){if((e31986 instanceof Error)){
var e__21043__auto__ = e31986;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats+geos","stats+geos",-1652005478);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31988){if((e31988 instanceof Error)){
var e__21043__auto____$1 = e31988;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e31988;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e31986;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31984){if((e31984 instanceof Error)){
var e__21043__auto__ = e31984;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e31984;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31982){if((e31982 instanceof Error)){
var e__21043__auto__ = e31982;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e31982;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31981){if((e31981 instanceof Error)){
var e__21043__auto__ = e31981;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e31981;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31941){if((e31941 instanceof Error)){
var e__21043__auto__ = e31941;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_31876_0__31912_sourcePath__31921 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_sourcePath__31921,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_geoHierarchy__31922 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_geoHierarchy__31922,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_values__31923 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_values__31923,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_predicates__31924 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_predicates__31924,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats-only","stats-only",-1854147429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31980){if((e31980 instanceof Error)){
var e__21043__auto____$1 = e31980;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e31980;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31977){if((e31977 instanceof Error)){
var e__21043__auto____$1 = e31977;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats-only","stats-only",-1854147429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31978){if((e31978 instanceof Error)){
var e__21043__auto____$2 = e31978;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e31978;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e31977;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31970){if((e31970 instanceof Error)){
var e__21043__auto____$1 = e31970;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_31876_0__31912_geoResolution__31920 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_geoResolution__31920,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_predicates__31924 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_predicates__31924,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"no-values","no-values",711523891);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31976){if((e31976 instanceof Error)){
var e__21043__auto____$2 = e31976;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e31976;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31975){if((e31975 instanceof Error)){
var e__21043__auto____$2 = e31975;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e31975;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31971){if((e31971 instanceof Error)){
var e__21043__auto____$2 = e31971;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_31876_0__31912_predicates__31924 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_predicates__31924,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"no-values","no-values",711523891);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31973){if((e31973 instanceof Error)){
var e__21043__auto____$3 = e31973;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e31973;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31972){if((e31972 instanceof Error)){
var e__21043__auto____$3 = e31972;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e31972;

}
}} else {
throw e__21043__auto____$2;
}
} else {
throw e31971;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e31970;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31969){if((e31969 instanceof Error)){
var e__21043__auto____$1 = e31969;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e31969;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31942){if((e31942 instanceof Error)){
var e__21043__auto____$1 = e31942;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_31876_0__31912_geoResolution__31920 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_geoResolution__31920,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_geoHierarchy__31922 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_geoHierarchy__31922,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"geos-only","geos-only",-735736590);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31959){if((e31959 instanceof Error)){
var e__21043__auto____$2 = e31959;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e31959;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31958){if((e31958 instanceof Error)){
var e__21043__auto____$2 = e31958;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e31958;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31943){if((e31943 instanceof Error)){
var e__21043__auto____$2 = e31943;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_31876_0__31912_geoHierarchy__31922 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_geoHierarchy__31922,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_31876_0__31912_vintage__31925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_31876_0__31912,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_31876_0__31912_vintage__31925,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"geocodes","geocodes",-857805648);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31955){if((e31955 instanceof Error)){
var e__21043__auto____$3 = e31955;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e31955;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31944){if((e31944 instanceof Error)){
var e__21043__auto____$3 = e31944;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e31944;

}
}} else {
throw e__21043__auto____$2;
}
} else {
throw e31943;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e31942;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e31941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31939){if((e31939 instanceof Error)){
var e__21043__auto__ = e31939;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e31939;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31933){if((e31933 instanceof Error)){
var e__21043__auto__ = e31933;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_31876)) && ((cljs.core.count(ocr_31876) >= (0))))){
try{var ocr_31876_left__31931 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_31876,(0),(0));
if(((cljs.core.vector_QMARK_(ocr_31876_left__31931)) && ((cljs.core.count(ocr_31876_left__31931) === (0))))){
var anything_else = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_31876,(0));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e31936){if((e31936 instanceof Error)){
var e__21043__auto____$1 = e31936;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e31936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31935){if((e31935 instanceof Error)){
var e__21043__auto____$1 = e31935;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_31876)].join('')));
} else {
throw e__21043__auto____$1;
}
} else {
throw e31935;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e31933;

}
}};
var census$core$core_pattern = function (var_args){
var args__21996__auto__ = null;
if (arguments.length > 0) {
var G__32028__i = 0, G__32028__a = new Array(arguments.length -  0);
while (G__32028__i < G__32028__a.length) {G__32028__a[G__32028__i] = arguments[G__32028__i + 0]; ++G__32028__i;}
  args__21996__auto__ = new cljs.core.IndexedSeq(G__32028__a,0,null);
} 
return census$core$core_pattern__delegate.call(this,args__21996__auto__);};
census$core$core_pattern.cljs$lang$maxFixedArity = 0;
census$core$core_pattern.cljs$lang$applyTo = (function (arglist__32029){
var args__21996__auto__ = cljs.core.seq(arglist__32029);
return census$core$core_pattern__delegate(args__21996__auto__);
});
census$core$core_pattern.cljs$core$IFn$_invoke$arity$variadic = census$core$core_pattern__delegate;
return census$core$core_pattern;
})()
;
census.core.IOE_Census = (function census$core$IOE_Census($g$){
return (function (_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_I_EQ_,(function (args){
var deploy = census.core.core_pattern.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deploy], 0));

var G__31999 = deploy;
var G__31999__$1 = (((G__31999 instanceof cljs.core.Keyword))?G__31999.fqn:null);
switch (G__31999__$1) {
case "stats+geos":
var fexpr__32000 = census.merger.core.I_EQ_OE_M_spooler($g$,cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.statsAPI.core.cfg_GT_cfg_EQ_C_Stats,census.geoAPI.core.cfg_GT_cfg_EQ_C_GeoCLJ], null));
return (fexpr__32000.cljs$core$IFn$_invoke$arity$2 ? fexpr__32000.cljs$core$IFn$_invoke$arity$2(_EQ_O_EQ_,_EQ_E_EQ_) : fexpr__32000.call(null,_EQ_O_EQ_,_EQ_E_EQ_));

break;
case "stats-only":
return census.statsAPI.core.IOE_C_S__GT_JSON(cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null)),_EQ_O_EQ_,_EQ_E_EQ_);

break;
case "geos-only":
var G__32002 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
var G__32003 = _EQ_O_EQ_;
var G__32004 = _EQ_E_EQ_;
var fexpr__32001 = census.geoAPI.core.IOE_C_GeoJSON($g$);
return (fexpr__32001.cljs$core$IFn$_invoke$arity$3 ? fexpr__32001.cljs$core$IFn$_invoke$arity$3(G__32002,G__32003,G__32004) : fexpr__32001.call(null,G__32002,G__32003,G__32004));

break;
case "geocodes":
var G__32006 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
var G__32007 = _EQ_O_EQ_;
var G__32008 = _EQ_E_EQ_;
var fexpr__32005 = census.wmsAPI.core._EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_($g$);
return (fexpr__32005.cljs$core$IFn$_invoke$arity$3 ? fexpr__32005.cljs$core$IFn$_invoke$arity$3(G__32006,G__32007,G__32008) : fexpr__32005.call(null,G__32006,G__32007,G__32008));

break;
case "no-values":
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_E_EQ_,census.core.err_no_vals);

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No matching clause for the arguments provided. Please check arguments against requirements"], 0));

}
}));
});
});
census.core.$GET$_GeoKeyMap = census.utils.core.$GET$(new cljs.core.Keyword(null,"edn","edn",1317840885),"Unsuccessful fetch for configuration.");
census.core._EQ_GKM_EQ_ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var G__32011_32031 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.URL_GEOKEYMAP], null));
var G__32012_32032 = census.core._EQ_GKM_EQ_;
var G__32013_32033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err));
var G__32014_32034 = new cljs.core.Keyword(null,"silent","silent",-1142977785);
(census.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4 ? census.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4(G__32011_32031,G__32012_32032,G__32013_32033,G__32014_32034) : census.core.$GET$_GeoKeyMap.call(null,G__32011_32031,G__32012_32032,G__32013_32033,G__32014_32034));
census.core.census = (function census$core$census(I,cb){
var _EQ_args_EQ__GT_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _EQ_O_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _EQ_E_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(census.core._EQ_GKM_EQ_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function ($g$){
var fexpr__32016_32035 = census.wmsAPI.core.I__LT_wms_EQ_I_EQ_($g$);
(fexpr__32016_32035.cljs$core$IFn$_invoke$arity$2 ? fexpr__32016_32035.cljs$core$IFn$_invoke$arity$2(I,_EQ_args_EQ__GT_) : fexpr__32016_32035.call(null,I,_EQ_args_EQ__GT_));

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ__GT_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function (_QMARK_args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(_QMARK_args),census.utils.core.amap_type)){
var G__32018_32036 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_args], null));
var G__32019_32037 = _EQ_O_EQ_;
var G__32020_32038 = _EQ_E_EQ_;
var fexpr__32017_32039 = census.core.IOE_Census($g$);
(fexpr__32017_32039.cljs$core$IFn$_invoke$arity$3 ? fexpr__32017_32039.cljs$core$IFn$_invoke$arity$3(G__32018_32036,G__32019_32037,G__32020_32038) : fexpr__32017_32039.call(null,G__32018_32036,G__32019_32037,G__32020_32038));

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_O_EQ_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function (r){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(null,r) : cb.call(null,null,r));
});})(_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_))
);

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_E_EQ_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function (e){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(e,null) : cb.call(null,e,null));
});})(_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(_QMARK_args,null) : cb.call(null,_QMARK_args,null));
}
});})(_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_))
);
});})(_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_))
);
});

//# sourceMappingURL=census.core.js.map
