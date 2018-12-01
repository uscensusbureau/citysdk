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
var ocr_35292 = cljs.core.vec(args__21996__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_35292)) && ((cljs.core.count(ocr_35292) === 1)))){
try{var ocr_35292_0__35328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_35292,(0));
if((((!((ocr_35292_0__35328 == null))))?(((((ocr_35292_0__35328.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_35292_0__35328.cljs$core$ILookup$))))?true:(((!ocr_35292_0__35328.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_35292_0__35328):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_35292_0__35328))){
try{var ocr_35292_0__35328_geoResolution__35336 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_geoResolution__35336,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_sourcePath__35337 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_sourcePath__35337,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_geoHierarchy__35338 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_geoHierarchy__35338,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_values__35339 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_values__35339,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_predicates__35340 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_predicates__35340,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats+geos","stats+geos",-1652005478);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35371){if((e35371 instanceof Error)){
var e__21043__auto__ = e35371;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e35371;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35369){if((e35369 instanceof Error)){
var e__21043__auto__ = e35369;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats+geos","stats+geos",-1652005478);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35370){if((e35370 instanceof Error)){
var e__21043__auto____$1 = e35370;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e35370;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e35369;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35368){if((e35368 instanceof Error)){
var e__21043__auto__ = e35368;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e35368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35367){if((e35367 instanceof Error)){
var e__21043__auto__ = e35367;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e35367;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35366){if((e35366 instanceof Error)){
var e__21043__auto__ = e35366;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e35366;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35349){if((e35349 instanceof Error)){
var e__21043__auto__ = e35349;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_35292_0__35328_sourcePath__35337 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_sourcePath__35337,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_geoHierarchy__35338 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_geoHierarchy__35338,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_values__35339 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_values__35339,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_predicates__35340 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_predicates__35340,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats-only","stats-only",-1854147429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35365){if((e35365 instanceof Error)){
var e__21043__auto____$1 = e35365;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e35365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35363){if((e35363 instanceof Error)){
var e__21043__auto____$1 = e35363;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"stats-only","stats-only",-1854147429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35364){if((e35364 instanceof Error)){
var e__21043__auto____$2 = e35364;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e35364;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e35363;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35357){if((e35357 instanceof Error)){
var e__21043__auto____$1 = e35357;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35292_0__35328_geoResolution__35336 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_geoResolution__35336,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_predicates__35340 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_predicates__35340,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"no-values","no-values",711523891);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35362){if((e35362 instanceof Error)){
var e__21043__auto____$2 = e35362;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e35362;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35361){if((e35361 instanceof Error)){
var e__21043__auto____$2 = e35361;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e35361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35358){if((e35358 instanceof Error)){
var e__21043__auto____$2 = e35358;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_35292_0__35328_predicates__35340 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"predicates","predicates",620402712),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_predicates__35340,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"no-values","no-values",711523891);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35360){if((e35360 instanceof Error)){
var e__21043__auto____$3 = e35360;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e35360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35359){if((e35359 instanceof Error)){
var e__21043__auto____$3 = e35359;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e35359;

}
}} else {
throw e__21043__auto____$2;
}
} else {
throw e35358;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e35357;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35356){if((e35356 instanceof Error)){
var e__21043__auto____$1 = e35356;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e35356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35350){if((e35350 instanceof Error)){
var e__21043__auto____$1 = e35350;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_35292_0__35328_geoResolution__35336 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_geoResolution__35336,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_geoHierarchy__35338 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_geoHierarchy__35338,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"geos-only","geos-only",-735736590);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35355){if((e35355 instanceof Error)){
var e__21043__auto____$2 = e35355;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e35355;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35354){if((e35354 instanceof Error)){
var e__21043__auto____$2 = e35354;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e35354;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35351){if((e35351 instanceof Error)){
var e__21043__auto____$2 = e35351;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_35292_0__35328_geoHierarchy__35338 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_geoHierarchy__35338,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_35292_0__35328_vintage__35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_35292_0__35328,new cljs.core.Keyword(null,"vintage","vintage",818195578),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_35292_0__35328_vintage__35341,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return new cljs.core.Keyword(null,"geocodes","geocodes",-857805648);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35353){if((e35353 instanceof Error)){
var e__21043__auto____$3 = e35353;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e35353;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35352){if((e35352 instanceof Error)){
var e__21043__auto____$3 = e35352;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e35352;

}
}} else {
throw e__21043__auto____$2;
}
} else {
throw e35351;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e35350;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e35349;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35347){if((e35347 instanceof Error)){
var e__21043__auto__ = e35347;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e35347;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35344){if((e35344 instanceof Error)){
var e__21043__auto__ = e35344;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_35292)) && ((cljs.core.count(ocr_35292) >= (0))))){
try{var ocr_35292_left__35342 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_35292,(0),(0));
if(((cljs.core.vector_QMARK_(ocr_35292_left__35342)) && ((cljs.core.count(ocr_35292_left__35342) === (0))))){
var anything_else = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_35292,(0));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e35346){if((e35346 instanceof Error)){
var e__21043__auto____$1 = e35346;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e35346;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35345){if((e35345 instanceof Error)){
var e__21043__auto____$1 = e35345;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_35292)].join('')));
} else {
throw e__21043__auto____$1;
}
} else {
throw e35345;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e35344;

}
}};
var census$core$core_pattern = function (var_args){
var args__21996__auto__ = null;
if (arguments.length > 0) {
var G__35391__i = 0, G__35391__a = new Array(arguments.length -  0);
while (G__35391__i < G__35391__a.length) {G__35391__a[G__35391__i] = arguments[G__35391__i + 0]; ++G__35391__i;}
  args__21996__auto__ = new cljs.core.IndexedSeq(G__35391__a,0,null);
} 
return census$core$core_pattern__delegate.call(this,args__21996__auto__);};
census$core$core_pattern.cljs$lang$maxFixedArity = 0;
census$core$core_pattern.cljs$lang$applyTo = (function (arglist__35392){
var args__21996__auto__ = cljs.core.seq(arglist__35392);
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

var G__35372 = deploy;
var G__35372__$1 = (((G__35372 instanceof cljs.core.Keyword))?G__35372.fqn:null);
switch (G__35372__$1) {
case "stats+geos":
var fexpr__35373 = census.merger.core.I_EQ_OE_M_spooler($g$,cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.statsAPI.core.cfg_GT_cfg_EQ_C_Stats,census.geoAPI.core.cfg_GT_cfg_EQ_C_GeoCLJ], null));
return (fexpr__35373.cljs$core$IFn$_invoke$arity$2 ? fexpr__35373.cljs$core$IFn$_invoke$arity$2(_EQ_O_EQ_,_EQ_E_EQ_) : fexpr__35373.call(null,_EQ_O_EQ_,_EQ_E_EQ_));

break;
case "stats-only":
return census.statsAPI.core.IOE_C_S__GT_JSON(cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null)),_EQ_O_EQ_,_EQ_E_EQ_);

break;
case "geos-only":
var G__35375 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
var G__35376 = _EQ_O_EQ_;
var G__35377 = _EQ_E_EQ_;
var fexpr__35374 = census.geoAPI.core.IOE_C_GeoJSON($g$);
return (fexpr__35374.cljs$core$IFn$_invoke$arity$3 ? fexpr__35374.cljs$core$IFn$_invoke$arity$3(G__35375,G__35376,G__35377) : fexpr__35374.call(null,G__35375,G__35376,G__35377));

break;
case "geocodes":
var G__35379 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
var G__35380 = _EQ_O_EQ_;
var G__35381 = _EQ_E_EQ_;
var fexpr__35378 = census.wmsAPI.core._EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_($g$);
return (fexpr__35378.cljs$core$IFn$_invoke$arity$3 ? fexpr__35378.cljs$core$IFn$_invoke$arity$3(G__35379,G__35380,G__35381) : fexpr__35378.call(null,G__35379,G__35380,G__35381));

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
var G__35382_35394 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.URL_GEOKEYMAP], null));
var G__35383_35395 = census.core._EQ_GKM_EQ_;
var G__35384_35396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err));
var G__35385_35397 = new cljs.core.Keyword(null,"silent","silent",-1142977785);
(census.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4 ? census.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4(G__35382_35394,G__35383_35395,G__35384_35396,G__35385_35397) : census.core.$GET$_GeoKeyMap.call(null,G__35382_35394,G__35383_35395,G__35384_35396,G__35385_35397));
census.core.census = (function census$core$census(I,cb){
var _EQ_args_EQ__GT_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _EQ_O_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _EQ_E_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(census.core._EQ_GKM_EQ_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function ($g$){
var fexpr__35386_35398 = census.wmsAPI.core.I__LT_wms_EQ_I_EQ_($g$);
(fexpr__35386_35398.cljs$core$IFn$_invoke$arity$2 ? fexpr__35386_35398.cljs$core$IFn$_invoke$arity$2(I,_EQ_args_EQ__GT_) : fexpr__35386_35398.call(null,I,_EQ_args_EQ__GT_));

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ__GT_,((function (_EQ_args_EQ__GT_,_EQ_O_EQ_,_EQ_E_EQ_){
return (function (_QMARK_args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(_QMARK_args),census.utils.core.amap_type)){
var G__35388_35399 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_args], null));
var G__35389_35400 = _EQ_O_EQ_;
var G__35390_35401 = _EQ_E_EQ_;
var fexpr__35387_35402 = census.core.IOE_Census($g$);
(fexpr__35387_35402.cljs$core$IFn$_invoke$arity$3 ? fexpr__35387_35402.cljs$core$IFn$_invoke$arity$3(G__35388_35399,G__35389_35400,G__35390_35401) : fexpr__35387_35402.call(null,G__35388_35399,G__35389_35400,G__35390_35401));

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
