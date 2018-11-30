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
var census$core$core_pattern__delegate = function (args__7638__auto__){
var ocr_19306 = cljs.core.vec(args__7638__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_19306)) && ((cljs.core.count(ocr_19306) === 1)))){
try{var ocr_19306_0__19346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_19306,(0));
if((((!((ocr_19306_0__19346 == null))))?(((((ocr_19306_0__19346.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_19306_0__19346.cljs$core$ILookup$))))?true:(((!ocr_19306_0__19346.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_19306_0__19346):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_19306_0__19346))){
try{var ocr_19306_0__19346_geoResolution__19354 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_geoResolution__19354,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_sourcePath__19355 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_sourcePath__19355,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_geoHierarchy__19356 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_geoHierarchy__19356,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_values__19357 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_values__19357,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_predicates__19358 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_predicates__19358,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats+geos","stats+geos",-1652005478);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19414){if((e19414 instanceof Error)){
var e__5452__auto__ = e19414;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e19414;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19412){if((e19412 instanceof Error)){
var e__5452__auto__ = e19412;
if((e__5452__auto__ === cljs.core.match.backtrack)){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats+geos","stats+geos",-1652005478);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19413){if((e19413 instanceof Error)){
var e__5452__auto____$1 = e19413;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$1;
}
} else {
throw e19413;

}
}} else {
throw e__5452__auto__;
}
} else {
throw e19412;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19409){if((e19409 instanceof Error)){
var e__5452__auto__ = e19409;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e19409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19408){if((e19408 instanceof Error)){
var e__5452__auto__ = e19408;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e19408;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19406){if((e19406 instanceof Error)){
var e__5452__auto__ = e19406;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e19406;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19381){if((e19381 instanceof Error)){
var e__5452__auto__ = e19381;
if((e__5452__auto__ === cljs.core.match.backtrack)){
try{var ocr_19306_0__19346_sourcePath__19355 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_sourcePath__19355,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_geoHierarchy__19356 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_geoHierarchy__19356,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_values__19357 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_values__19357,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_predicates__19358 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_predicates__19358,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats-only","stats-only",-1854147429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19404){if((e19404 instanceof Error)){
var e__5452__auto____$1 = e19404;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$1;
}
} else {
throw e19404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19400){if((e19400 instanceof Error)){
var e__5452__auto____$1 = e19400;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats-only","stats-only",-1854147429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19402){if((e19402 instanceof Error)){
var e__5452__auto____$2 = e19402;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e19402;

}
}} else {
throw e__5452__auto____$1;
}
} else {
throw e19400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19391){if((e19391 instanceof Error)){
var e__5452__auto____$1 = e19391;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_19306_0__19346_geoResolution__19354 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_geoResolution__19354,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_predicates__19358 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_predicates__19358,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"no-values","no-values",711523891);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19397){if((e19397 instanceof Error)){
var e__5452__auto____$2 = e19397;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e19397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19396){if((e19396 instanceof Error)){
var e__5452__auto____$2 = e19396;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e19396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19392){if((e19392 instanceof Error)){
var e__5452__auto____$2 = e19392;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_19306_0__19346_predicates__19358 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_predicates__19358,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"no-values","no-values",711523891);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19394){if((e19394 instanceof Error)){
var e__5452__auto____$3 = e19394;
if((e__5452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$3;
}
} else {
throw e19394;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19393){if((e19393 instanceof Error)){
var e__5452__auto____$3 = e19393;
if((e__5452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$3;
}
} else {
throw e19393;

}
}} else {
throw e__5452__auto____$2;
}
} else {
throw e19392;

}
}} else {
throw e__5452__auto____$1;
}
} else {
throw e19391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19390){if((e19390 instanceof Error)){
var e__5452__auto____$1 = e19390;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$1;
}
} else {
throw e19390;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19382){if((e19382 instanceof Error)){
var e__5452__auto____$1 = e19382;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_19306_0__19346_geoResolution__19354 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_geoResolution__19354,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_geoHierarchy__19356 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_geoHierarchy__19356,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"geos-only","geos-only",-735736590);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19387){if((e19387 instanceof Error)){
var e__5452__auto____$2 = e19387;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e19387;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19386){if((e19386 instanceof Error)){
var e__5452__auto____$2 = e19386;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e19386;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19383){if((e19383 instanceof Error)){
var e__5452__auto____$2 = e19383;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_19306_0__19346_geoHierarchy__19356 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_geoHierarchy__19356,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_19306_0__19346_vintage__19359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_19306_0__19346,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_19306_0__19346_vintage__19359,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"geocodes","geocodes",-857805648);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19385){if((e19385 instanceof Error)){
var e__5452__auto____$3 = e19385;
if((e__5452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$3;
}
} else {
throw e19385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19384){if((e19384 instanceof Error)){
var e__5452__auto____$3 = e19384;
if((e__5452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$3;
}
} else {
throw e19384;

}
}} else {
throw e__5452__auto____$2;
}
} else {
throw e19383;

}
}} else {
throw e__5452__auto____$1;
}
} else {
throw e19382;

}
}} else {
throw e__5452__auto__;
}
} else {
throw e19381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19379){if((e19379 instanceof Error)){
var e__5452__auto__ = e19379;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e19379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19376){if((e19376 instanceof Error)){
var e__5452__auto__ = e19376;
if((e__5452__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_19306)) && ((cljs.core.count(ocr_19306) >= (0))))){
try{var ocr_19306_left__19374 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_19306,(0),(0));
if(((cljs.core.vector_QMARK_(ocr_19306_left__19374)) && ((cljs.core.count(ocr_19306_left__19374) === (0))))){
var anything_else = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_19306,(0));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19378){if((e19378 instanceof Error)){
var e__5452__auto____$1 = e19378;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$1;
}
} else {
throw e19378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19377){if((e19377 instanceof Error)){
var e__5452__auto____$1 = e19377;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_19306)].join('')));
} else {
throw e__5452__auto____$1;
}
} else {
throw e19377;

}
}} else {
throw e__5452__auto__;
}
} else {
throw e19376;

}
}};
var census$core$core_pattern = function (var_args){
var args__7638__auto__ = null;
if (arguments.length > 0) {
var G__19435__i = 0, G__19435__a = new Array(arguments.length -  0);
while (G__19435__i < G__19435__a.length) {G__19435__a[G__19435__i] = arguments[G__19435__i + 0]; ++G__19435__i;}
  args__7638__auto__ = new cljs.core.IndexedSeq(G__19435__a,0,null);
} 
return census$core$core_pattern__delegate.call(this,args__7638__auto__);};
census$core$core_pattern.cljs$lang$maxFixedArity = 0;
census$core$core_pattern.cljs$lang$applyTo = (function (arglist__19436){
var args__7638__auto__ = cljs.core.seq(arglist__19436);
return census$core$core_pattern__delegate(args__7638__auto__);
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

var G__19417 = deploy;
var G__19417__$1 = (((G__19417 instanceof cljs.core.Keyword))?G__19417.fqn:null);
switch (G__19417__$1) {
case "stats+geos":
var fexpr__19418 = census.merger.core.I_EQ_OE_M_spooler($g$,cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.statsAPI.core.cfg_GT_cfg_EQ_C_Stats,census.geoAPI.core.cfg_GT_cfg_EQ_C_GeoCLJ], null));
return (fexpr__19418.cljs$core$IFn$_invoke$arity$2 ? fexpr__19418.cljs$core$IFn$_invoke$arity$2(_EQ_O_EQ_,_EQ_E_EQ_) : fexpr__19418.call(null,_EQ_O_EQ_,_EQ_E_EQ_));

break;
case "stats-only":
return census.statsAPI.core.IOE_C_S__GT_JSON(cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null)),_EQ_O_EQ_,_EQ_E_EQ_);

break;
case "geos-only":
var G__19420 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
var G__19421 = _EQ_O_EQ_;
var G__19422 = _EQ_E_EQ_;
var fexpr__19419 = census.geoAPI.core.IOE_C_GeoJSON($g$);
return (fexpr__19419.cljs$core$IFn$_invoke$arity$3 ? fexpr__19419.cljs$core$IFn$_invoke$arity$3(G__19420,G__19421,G__19422) : fexpr__19419.call(null,G__19420,G__19421,G__19422));

break;
case "geocodes":
var G__19424 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
var G__19425 = _EQ_O_EQ_;
var G__19426 = _EQ_E_EQ_;
var fexpr__19423 = census.wmsAPI.core._EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_($g$);
return (fexpr__19423.cljs$core$IFn$_invoke$arity$3 ? fexpr__19423.cljs$core$IFn$_invoke$arity$3(G__19424,G__19425,G__19426) : fexpr__19423.call(null,G__19424,G__19425,G__19426));

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
var G__19427_19438 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.URL_GEOKEYMAP], null));
var G__19428_19439 = census.core._EQ_GKM_EQ_;
(census.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$2 ? census.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$2(G__19427_19438,G__19428_19439) : census.core.$GET$_GeoKeyMap.call(null,G__19427_19438,G__19428_19439));
census.core.census = (function census$core$census(I,cb){
var _EQ_args_EQ__GT_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _EQ_O_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _EQ_E_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(census.core._EQ_GKM_EQ_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function ($g$){
var fexpr__19429_19440 = census.wmsAPI.core.I__LT_wms_EQ_I_EQ_($g$);
(fexpr__19429_19440.cljs$core$IFn$_invoke$arity$2 ? fexpr__19429_19440.cljs$core$IFn$_invoke$arity$2(I,_EQ_args_EQ__GT_) : fexpr__19429_19440.call(null,I,_EQ_args_EQ__GT_));

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ__GT_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function (_QMARK_args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(_QMARK_args),census.utils.core.amap_type)){
var G__19431_19441 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_args], null));
var G__19432_19442 = _EQ_O_EQ_;
var G__19433_19443 = _EQ_E_EQ_;
var fexpr__19430_19444 = census.core.IOE_Census($g$);
(fexpr__19430_19444.cljs$core$IFn$_invoke$arity$3 ? fexpr__19430_19444.cljs$core$IFn$_invoke$arity$3(G__19431_19441,G__19432_19442,G__19433_19443) : fexpr__19430_19444.call(null,G__19431_19441,G__19432_19442,G__19433_19443));

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
