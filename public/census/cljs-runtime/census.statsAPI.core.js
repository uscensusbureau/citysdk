goog.provide('census.statsAPI.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cuerdas.core');
goog.require('net.cgrand.xforms');
goog.require('census.utils.core');
census.statsAPI.core.kv_pair__GT_str = (function census$statsAPI$core$kv_pair__GT_str(p__19025,separator){
var vec__19027 = p__19025;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(1),null);
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(separator,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null));
});
/**
 * Composes a URL to call Census' statistics API
 */
census.statsAPI.core.C_S_args__GT_url = (function census$statsAPI$core$C_S_args__GT_url(p__19039){
var map__19040 = p__19039;
var map__19040__$1 = (((((!((map__19040 == null))))?(((((map__19040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19040):map__19040);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19040__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var sourcePath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19040__$1,new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405));
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19040__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19040__$1,new cljs.core.Keyword(null,"values","values",372645556));
var predicates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19040__$1,new cljs.core.Keyword(null,"predicates","predicates",620402712));
var statsKey = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19040__$1,new cljs.core.Keyword(null,"statsKey","statsKey",452548050));
if(cljs.core.not_any_QMARK_(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vintage,sourcePath,geoHierarchy,values], null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.utils.core.URL_STATS),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19040,map__19040__$1,vintage,sourcePath,geoHierarchy,values,predicates,statsKey){
return (function (p1__19030_SHARP_){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19030_SHARP_)].join('');
});})(map__19040,map__19040__$1,vintage,sourcePath,geoHierarchy,values,predicates,statsKey))
,sourcePath))),"?get=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!((values == null))))?cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",values):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!((predicates == null))))?["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19040,map__19040__$1,vintage,sourcePath,geoHierarchy,values,predicates,statsKey){
return (function (p1__19031_SHARP_){
return census.statsAPI.core.kv_pair__GT_str(p1__19031_SHARP_,"=");
});})(map__19040,map__19040__$1,vintage,sourcePath,geoHierarchy,values,predicates,statsKey))
,predicates))))].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.utils.core.keys__GT_strs(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(geoHierarchy)))?["&for=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.statsAPI.core.kv_pair__GT_str(cljs.core.first(geoHierarchy),":"))].join(''):["&in=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("%20",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19040,map__19040__$1,vintage,sourcePath,geoHierarchy,values,predicates,statsKey){
return (function (p1__19032_SHARP_){
return census.statsAPI.core.kv_pair__GT_str(p1__19032_SHARP_,":");
});})(map__19040,map__19040__$1,vintage,sourcePath,geoHierarchy,values,predicates,statsKey))
,cljs.core.butlast(geoHierarchy)))),"&for=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.statsAPI.core.kv_pair__GT_str(cljs.core.last(geoHierarchy),":"))].join('')))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!((statsKey == null))))?["&key=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(statsKey)].join(''):null))].join('');
} else {
return "";
}
});
/**
 * 
 *   Conditionally translates a string into an integer or float if so coercible.
 *   If not, returns the original string.
 *   
 */
census.statsAPI.core.__GT_num_QMARK___GT__SHARP_ = (function census$statsAPI$core$__GT_num_QMARK___GT__SHARP_(s){
if(cljs.core.truth_(cuerdas.core.numeric_QMARK_(s))){
return cuerdas.core.parse_number(s);
} else {
return s;
}
});
/**
 * 
 *   Stateful transducer, which stores the first item as a list of a keys to apply
 *   (via `zipmap`) to the rest of the items in a collection. Serves to turn the
 *   Census API response into a more conventional JSON format.
 *   If provided `:keywords` as an argument, will return a map with Clojure keys.
 *   Otherwise, will return map keys as strings.
 *   
 */
census.statsAPI.core.xf_BANG__CSV__GT_CLJ = (function census$statsAPI$core$xf_BANG__CSV__GT_CLJ(p__19048){
var map__19049 = p__19048;
var map__19049__$1 = (((((!((map__19049 == null))))?(((((map__19049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19049):map__19049);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19049__$1,new cljs.core.Keyword(null,"values","values",372645556));
var predicates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19049__$1,new cljs.core.Keyword(null,"predicates","predicates",620402712));
var parse_range = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(cljs.core.count(values) + cljs.core.count(predicates))], null);
return census.utils.core.xf_BANG__LT__LT_(((function (parse_range,map__19049,map__19049__$1,values,predicates){
return (function (state,rf,acc,this$){
var prev = cljs.core.deref(state);
if((prev == null)){
cljs.core.vreset_BANG_(state,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(census.utils.core.strs__GT_keys,this$));

return null;
} else {
var G__19051 = acc;
var G__19052 = cljs.core.zipmap(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.deref(state)),census.utils.core.map_idcs_range(census.statsAPI.core.__GT_num_QMARK___GT__SHARP_,parse_range,this$));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19051,G__19052) : rf.call(null,G__19051,G__19052));
}
});})(parse_range,map__19049,map__19049__$1,values,predicates))
);
});
census.statsAPI.core.xf_stats__GT_js = (function census$statsAPI$core$xf_stats__GT_js(args){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(census.statsAPI.core.xf_BANG__CSV__GT_CLJ(args),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__19064_SHARP_){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(p1__19064_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
})));
});
census.statsAPI.core.$GET$_C_stats = census.utils.core.$GET$(new cljs.core.Keyword(null,"json","json",1279968570),"Unsuccessful Census stats request... ");
/**
 * 
 *   Internal function for calling the Census API using a Clojure Map. Returns stats
 *   from Census API unaltered.
 *   
 */
census.statsAPI.core.IOE_C_S__GT_JSON = (function census$statsAPI$core$IOE_C_S__GT_JSON(_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_I_EQ_,(function (args){
var url = census.statsAPI.core.C_S_args__GT_url(args);
var _EQ_JSON_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__19093_19221 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var G__19094_19223 = _EQ_JSON_EQ_;
var G__19095_19224 = _EQ_E_EQ_;
(census.statsAPI.core.$GET$_C_stats.cljs$core$IFn$_invoke$arity$3 ? census.statsAPI.core.$GET$_C_stats.cljs$core$IFn$_invoke$arity$3(G__19093_19221,G__19094_19223,G__19095_19224) : census.statsAPI.core.$GET$_C_stats.call(null,G__19093_19221,G__19094_19223,G__19095_19224));

return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((1),_EQ_O_EQ_,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(census.utils.core.educt_LT__LT_(census.statsAPI.core.xf_stats__GT_js(args)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.to_array),cljs.core.map.cljs$core$IFn$_invoke$arity$1(JSON.stringify)),_EQ_JSON_EQ_);
}));
});
/**
 * 
 *   Takes an integer argument denoting the number of stat vars the user requested.
 *   Returns a function of one item (from the Census API response
 *   collection) to a new map with a hierarchy that will enable deep-merging of
 *   the stats with a GeoJSON `feature`s `:properties` map.
 *   
 */
census.statsAPI.core.xf__SINGLEQUOTE_key_SINGLEQUOTE__LT_w_stat = (function census$statsAPI$core$xf__SINGLEQUOTE_key_SINGLEQUOTE__LT_w_stat(vars_SHARP_){
return census.utils.core.xf_LT__LT_((function (rf,acc,this$){
var G__19100 = acc;
var G__19101 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vals(cljs.core.take_last((cljs.core.count(this$) - vars_SHARP_),this$))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),this$], null)]);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19100,G__19101) : rf.call(null,G__19100,G__19101));
}));
});
census.statsAPI.core.xf_mergeable_LT__stats = (function census$statsAPI$core$xf_mergeable_LT__stats(args,vars_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(census.statsAPI.core.xf_BANG__CSV__GT_CLJ(args),census.statsAPI.core.xf__SINGLEQUOTE_key_SINGLEQUOTE__LT_w_stat(vars_SHARP_));
});
/**
 * 
 *   Internal function for calling Github cartography 'API' for GeoJSON
 *   
 */
census.statsAPI.core._EQ_cfg_EQ_C_Stats = (function census$statsAPI$core$_EQ_cfg_EQ_C_Stats(_EQ_args_EQ_,_EQ_cfg_EQ_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,(function (args){
var vars_SHARP_ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.Keyword(null,"values","values",372645556))) + cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.Keyword(null,"predicates","predicates",620402712))));
var url = census.statsAPI.core.C_S_args__GT_url(args);
var xform = census.utils.core.educt_LT__LT_(census.statsAPI.core.xf_mergeable_LT__stats(args,vars_SHARP_));
var s_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.Keyword(null,"values","values",372645556))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",url)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_cfg_EQ_,"Invalid Census Statistics request. Please check arguments against requirements.");
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_cfg_EQ_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"xform","xform",-1725711008),xform,new cljs.core.Keyword(null,"getter","getter",84844855),census.statsAPI.core.$GET$_C_stats,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199),s_key], null));
}
}));
});
census.statsAPI.core.cfg_GT_cfg_EQ_C_Stats = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.statsAPI.core._EQ_cfg_EQ_C_Stats,false], null);

//# sourceMappingURL=census.statsAPI.core.js.map
