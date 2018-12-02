goog.provide('census.wmsAPI.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('cuerdas.core');
goog.require('linked.core');
goog.require('com.rpl.specter');
goog.require('census.utils.core');
/**
 * 
 *   Creates a configuration map for the WMS url-builder from the geoHierarchy map.
 *   
 */
census.wmsAPI.core.$g$__GT_wms_cfg = (function census$wmsAPI$core$$g$__GT_wms_cfg(var_args){
var G__30024 = arguments.length;
switch (G__30024) {
case 2:
return census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$2 = (function ($g$,args){
return census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3($g$,args,(0));
});

census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3 = (function ($g$,p__30068,server_index){
var map__30069 = p__30068;
var map__30069__$1 = (((((!((map__30069 == null))))?(((((map__30069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30069):map__30069);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30069__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30069__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var vec__30071 = cljs.core.vec(geoHierarchy);
var vec__30074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30071,(0),null);
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30074,(0),null);
var map__30077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30074,(1),null);
var map__30077__$1 = (((((!((map__30077 == null))))?(((((map__30077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30077):map__30077);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30077__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30077__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
var sub_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30071,(1),null);
var map__30078 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scope,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)),new cljs.core.Keyword(null,"wms","wms",663469516)], null));
var map__30078__$1 = (((((!((map__30078 == null))))?(((((map__30078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30078):map__30078);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30078__$1,new cljs.core.Keyword(null,"lookup","lookup",1225356838));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30078__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vintage","vintage",818195578),vintage,new cljs.core.Keyword(null,"layers","layers",1944875032),layers,new cljs.core.Keyword(null,"cur-layer-idx","cur-layer-idx",1604904097),server_index,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"sub-level","sub-level",368751408),sub_level], null);
if((lookup instanceof census.utils.core.vec_type)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geo","geo",-2054400503),lookup,new cljs.core.Keyword(null,"looked-up-in","looked-up-in",258688908),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(vintage)], null)], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geo","geo",-2054400503),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scope,lookup,new cljs.core.Keyword(null,"id<-json","id<-json",-1249818926)], null)),new cljs.core.Keyword(null,"lookup-up-in","lookup-up-in",576418132),lookup], null)], 0));
}
});

census.wmsAPI.core.$g$__GT_wms_cfg.cljs$lang$maxFixedArity = 3;

/**
 * 
 *   Looks in a single entry from the inverted geoKeyMap for a matching geoKey via
 *   `some`ing through each of its vintages for a match with a provided WMS
 *   geographic identifier.
 *   
 */
census.wmsAPI.core.lookup_id__GT_match_QMARK_ = (function census$wmsAPI$core$lookup_id__GT_match_QMARK_(GEO,p__30083){
var vec__30084 = p__30083;
var geo_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30084,(0),null);
var geo_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30084,(1),null);
var vins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__30084,geo_val,geo_key){
return (function (p__30087){
var vec__30088 = p__30087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30088,(0),null);
var map__30091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30088,(1),null);
var map__30091__$1 = (((((!((map__30091 == null))))?(((((map__30091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30091):map__30091);
var map__30092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30091__$1,new cljs.core.Keyword(null,"wms","wms",663469516));
var map__30092__$1 = (((((!((map__30092 == null))))?(((((map__30092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30092):map__30092);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30092__$1,new cljs.core.Keyword(null,"lookup","lookup",1225356838));
var id_LT__json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30091__$1,new cljs.core.Keyword(null,"id<-json","id<-json",-1249818926));
if((lookup instanceof census.utils.core.vec_type)){
return cljs.core.last(lookup);
} else {
return cljs.core.last(id_LT__json);
}
});})(vec__30084,geo_val,geo_key))
,cljs.core.vec(geo_val));
if(cljs.core.truth_(cljs.core.some(((function (vins,vec__30084,geo_val,geo_key){
return (function (p1__30082_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(GEO,p1__30082_SHARP_);
});})(vins,vec__30084,geo_val,geo_key))
,vins))){
return geo_key;
} else {
return null;
}
});
/**
 * 
 *   Searches the entire geoKeyMap (inverted) for a geo key match provided a given
 *   WMS geographic identifier.
 *   
 */
census.wmsAPI.core.search_id__GT_match_QMARK_ = (function census$wmsAPI$core$search_id__GT_match_QMARK_($g$,GEO){
var inverted_geoKeyMap = cljs.core.seq(clojure.set.map_invert($g$));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (inverted_geoKeyMap){
return (function (p1__30097_SHARP_){
return census.wmsAPI.core.lookup_id__GT_match_QMARK_(GEO,p1__30097_SHARP_);
});})(inverted_geoKeyMap))
,inverted_geoKeyMap));
});
/**
 * 
 *   Constructs a URL for the TigerWeb Web Mapping Service (WMS) using a lookup
 *   from the geoKeyMap configuration file cross-referenced against the users args.
 *   
 */
census.wmsAPI.core.C__GT_GIS_url = (function census$wmsAPI$core$C__GT_GIS_url(var_args){
var G__30103 = arguments.length;
switch (G__30103) {
case 2:
return census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$2 = (function ($g$,args){
return census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$3($g$,args,(0));
});

census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$3 = (function ($g$,args,server_index){
var map__30105 = census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3($g$,args,server_index);
var map__30105__$1 = (((((!((map__30105 == null))))?(((((map__30105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30105):map__30105);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var cur_layer_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"cur-layer-idx","cur-layer-idx",1604904097));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
var geo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30105__$1,new cljs.core.Keyword(null,"geo","geo",-2054400503));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.utils.core.URL_WMS),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2010",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)))?"TIGERweb/tigerWMS_Census2010":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2000",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)))?"Census2010/tigerWMS_Census2000":["TIGERweb/tigerWMS_ACS",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)].join('')
))),"/Mapserver/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(layers,cur_layer_idx)),"/query?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__30105,map__30105__$1,vintage,layers,cur_layer_idx,lat,lng,geo){
return (function (p1__30100_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("=",p1__30100_SHARP_);
});})(map__30105,map__30105__$1,vintage,layers,cur_layer_idx,lat,lng,geo))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometryType","esriGeometryPoint"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inSR","4269"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spatialRel","esriSpatialRelIntersects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["returnGeometry","false"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f","pjson"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["outFields",cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,geo))], null)], null))))].join('');
});

census.wmsAPI.core.C__GT_GIS_url.cljs$lang$maxFixedArity = 3;

/**
 * 
 *   Takes the geoKeyMap configuration and the attributes from the WMS service
 *   API (js->cljs response) and returns a config map (:key = attribute ; value =
 *   corresponding configured map with (:geography 'value') needed to call Census'
 *   data API).
 *   
 */
census.wmsAPI.core.configed_map = (function census$wmsAPI$core$configed_map($g$,attrs){
var wms_keys = com.rpl.specter.impl.compiled_select_STAR_((function (){var info__28398__auto__ = census.wmsAPI.core.pathcache30115;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info30116 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"com/rpl/specter.cljc",11,1,712,715,cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null))], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null)], null));
census.wmsAPI.core.pathcache30115 = info30116;

return info30116;
})():info__28398__auto__);
var precompiled30117 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__30129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null);
return (precompiled30117.cljs$core$IFn$_invoke$arity$1 ? precompiled30117.cljs$core$IFn$_invoke$arity$1(G__30129) : precompiled30117.call(null,G__30129));
} else {
return precompiled30117;
}
})(),attrs);
var wms_vals = com.rpl.specter.impl.compiled_select_STAR_((function (){var info__28398__auto__ = census.wmsAPI.core.pathcache30130;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info30131 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null))], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null));
census.wmsAPI.core.pathcache30130 = info30131;

return info30131;
})():info__28398__auto__);
var precompiled30132 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__30133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled30132.cljs$core$IFn$_invoke$arity$1 ? precompiled30132.cljs$core$IFn$_invoke$arity$1(G__30133) : precompiled30132.call(null,G__30133));
} else {
return precompiled30132;
}
})(),attrs);
var geo_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (wms_keys,wms_vals){
return (function (p1__30113_SHARP_){
return census.wmsAPI.core.search_id__GT_match_QMARK_($g$,p1__30113_SHARP_);
});})(wms_keys,wms_vals))
,wms_keys);
var idx = (0);
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_keys,idx))){
return result;
} else {
var G__30478 = (idx + (1));
var G__30479 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_keys,idx),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.compiled_select_STAR_((function (){var info__28398__auto__ = census.wmsAPI.core.pathcache30134;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info30135 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
census.wmsAPI.core.pathcache30134 = info30135;

return info30135;
})():info__28398__auto__);
var precompiled30136 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__30137 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.ALL], null),com.rpl.specter.ALL,com.rpl.specter.ALL], null);
return (precompiled30136.cljs$core$IFn$_invoke$arity$1 ? precompiled30136.cljs$core$IFn$_invoke$arity$1(G__30137) : precompiled30136.call(null,G__30137));
} else {
return precompiled30136;
}
})(),geo_keys),idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_vals,idx)]));
idx = G__30478;
result = G__30479;
continue;
}
break;
}
});
census.wmsAPI.core.$GET$_wms = census.utils.core.$GET$(new cljs.core.Keyword(null,"json","json",1279968570),"Unsuccessful Census WMS request... ");
/**
 * 
 *   Takes the geoKeyMap with the users' arguments, a current WMS server index (used
 *   for retrying if more than one exists for a given geography in WMS) and a
 *   channel that will convey the result. Tries to cal the WMS and puts the
 *   `configed-map` into the channel if successful.
 *   
 */
census.wmsAPI.core.try_census_wms = (function census$wmsAPI$core$try_census_wms($g$,args,server_idx,_EQ_res_EQ_){
var _EQ_args_EQ__GT_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__30138_SHARP_){
return census.wmsAPI.core.configed_map($g$,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__30138_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),(0),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null)));
})));
var url = census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$3($g$,args,server_idx);
var G__30139_30495 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var G__30140_30496 = _EQ_args_EQ__GT_;
var G__30141_30497 = _EQ_args_EQ__GT_;
(census.wmsAPI.core.$GET$_wms.cljs$core$IFn$_invoke$arity$3 ? census.wmsAPI.core.$GET$_wms.cljs$core$IFn$_invoke$arity$3(G__30139_30495,G__30140_30496,G__30141_30497) : census.wmsAPI.core.$GET$_wms.call(null,G__30139_30495,G__30140_30496,G__30141_30497));

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ__GT_,((function (_EQ_args_EQ__GT_,url){
return (function (args__GT_){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,args__GT_);

return cljs.core.async.close_BANG_(_EQ_args_EQ__GT_);
});})(_EQ_args_EQ__GT_,url))
);
});
/**
 * 
 *   Engages the wms-service workflow if the first element in the geoHierarchy
 *   contains a map argument, which implies that the user doesn't have a GEOID handy.
 *   
 */
census.wmsAPI.core.wms_engage_QMARK_ = (function census$wmsAPI$core$wms_engage_QMARK_(p__30142){
var map__30143 = p__30142;
var map__30143__$1 = (((((!((map__30143 == null))))?(((((map__30143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30143):map__30143);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30143__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vec__30145 = cljs.core.first(geoHierarchy);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30145,(0),null);
var geo_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30145,(1),null);
if((geo_val instanceof census.utils.core.amap_type)){
return true;
} else {
return false;
}
});
/**
 * 
 *   Fetches a remote geoKeyMap resource and caches it to local atom ($geoKeyMap$)
 *   then tries to find the appropriate geographic identifiers for a provided
 *   geoHierarchy argument, which contains a {:lat <float> :lng <float>} coordinate
 *   instead of an actual FIPS code set. If FIPS are already provided, this step is
 *   skipped.
 *   
 */
census.wmsAPI.core._EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_ = (function census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_($g$){
return (function (_EQ__GT_args_EQ_,_EQ_args_EQ__GT_){
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__){
return (function (state_30329){
var state_val_30330 = (state_30329[(1)]);
if((state_val_30330 === (7))){
var inst_30164 = (state_30329[(7)]);
var inst_30159 = (state_30329[(8)]);
var inst_30151 = (state_30329[(9)]);
var inst_30160 = (state_30329[(10)]);
var inst_30162 = census.wmsAPI.core.try_census_wms($g$,inst_30159,inst_30160,inst_30151);
var inst_30164__$1 = census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$2($g$,inst_30159);
var inst_30166 = (inst_30164__$1 == null);
var inst_30167 = cljs.core.not(inst_30166);
var state_30329__$1 = (function (){var statearr_30331 = state_30329;
(statearr_30331[(7)] = inst_30164__$1);

(statearr_30331[(11)] = inst_30162);

return statearr_30331;
})();
if(inst_30167){
var statearr_30332_30498 = state_30329__$1;
(statearr_30332_30498[(1)] = (9));

} else {
var statearr_30333_30499 = state_30329__$1;
(statearr_30333_30499[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (20))){
var inst_30186 = (state_30329[(12)]);
var inst_30189 = (state_30329[(13)]);
var inst_30160 = (state_30329[(10)]);
var inst_30303 = cljs.core.empty_QMARK_(inst_30189);
var inst_30304 = (inst_30160 + (1));
var inst_30305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30186,inst_30304);
var inst_30306 = (inst_30305 == null);
var inst_30307 = cljs.core.not(inst_30306);
var inst_30308 = ((inst_30303) && (inst_30307));
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30308)){
var statearr_30335_30500 = state_30329__$1;
(statearr_30335_30500[(1)] = (41));

} else {
var statearr_30337_30501 = state_30329__$1;
(statearr_30337_30501[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (27))){
var inst_30208 = (state_30329[(14)]);
var state_30329__$1 = state_30329;
var statearr_30338_30502 = state_30329__$1;
(statearr_30338_30502[(2)] = inst_30208);

(statearr_30338_30502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (1))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30329__$1,(2),_EQ__GT_args_EQ_);
} else {
if((state_val_30330 === (24))){
var state_30329__$1 = state_30329;
var statearr_30339_30503 = state_30329__$1;
(statearr_30339_30503[(2)] = census.wmsAPI.core.pathcache30193);

(statearr_30339_30503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (39))){
var inst_30279 = (state_30329[(15)]);
var state_30329__$1 = state_30329;
var statearr_30340_30504 = state_30329__$1;
(statearr_30340_30504[(2)] = inst_30279);

(statearr_30340_30504[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (46))){
var inst_30319 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30341_30505 = state_30329__$1;
(statearr_30341_30505[(2)] = inst_30319);

(statearr_30341_30505[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (4))){
var inst_30150 = (state_30329[(16)]);
var inst_30159 = inst_30150;
var inst_30160 = (0);
var state_30329__$1 = (function (){var statearr_30347 = state_30329;
(statearr_30347[(8)] = inst_30159);

(statearr_30347[(10)] = inst_30160);

return statearr_30347;
})();
var statearr_30348_30506 = state_30329__$1;
(statearr_30348_30506[(2)] = null);

(statearr_30348_30506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (15))){
var inst_30164 = (state_30329[(7)]);
var inst_30182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30164);
var state_30329__$1 = state_30329;
var statearr_30349_30507 = state_30329__$1;
(statearr_30349_30507[(2)] = inst_30182);

(statearr_30349_30507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (21))){
var inst_30323 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30350_30508 = state_30329__$1;
(statearr_30350_30508[(2)] = inst_30323);

(statearr_30350_30508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (31))){
var inst_30250 = (state_30329[(2)]);
var inst_30251 = com.rpl.specter.impl.cached_path_info_precompiled(inst_30250);
var inst_30252 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_30250);
var state_30329__$1 = (function (){var statearr_30351 = state_30329;
(statearr_30351[(17)] = inst_30251);

return statearr_30351;
})();
if(cljs.core.truth_(inst_30252)){
var statearr_30352_30509 = state_30329__$1;
(statearr_30352_30509[(1)] = (32));

} else {
var statearr_30353_30510 = state_30329__$1;
(statearr_30353_30510[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (32))){
var inst_30251 = (state_30329[(17)]);
var inst_30254 = cljs.core.PersistentVector.EMPTY;
var inst_30255 = (inst_30251.cljs$core$IFn$_invoke$arity$1 ? inst_30251.cljs$core$IFn$_invoke$arity$1(inst_30254) : inst_30251.call(null,inst_30254));
var state_30329__$1 = state_30329;
var statearr_30354_30511 = state_30329__$1;
(statearr_30354_30511[(2)] = inst_30255);

(statearr_30354_30511[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (40))){
var inst_30159 = (state_30329[(8)]);
var inst_30215 = (state_30329[(18)]);
var inst_30187 = (state_30329[(19)]);
var inst_30259 = (state_30329[(20)]);
var inst_30260 = (state_30329[(21)]);
var inst_30258 = (state_30329[(22)]);
var inst_30234 = (state_30329[(23)]);
var inst_30189 = (state_30329[(13)]);
var inst_30288 = (state_30329[(2)]);
var inst_30289 = com.rpl.specter.impl.do_compiled_traverse(inst_30288,inst_30189);
var inst_30290 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_30260,inst_30289);
var inst_30291 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_30292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30293 = [inst_30187];
var inst_30294 = (new cljs.core.PersistentVector(null,1,(5),inst_30292,inst_30293,null));
var inst_30295 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_30291,inst_30294);
var inst_30296 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(inst_30259,inst_30290,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30295], 0));
var inst_30297 = com.rpl.specter.impl.compiled_setval_STAR_(inst_30258,inst_30296,inst_30159);
var inst_30298 = com.rpl.specter.impl.compiled_transform_STAR_(inst_30215,inst_30234,inst_30297);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30329__$1,(22),_EQ_args_EQ__GT_,inst_30298);
} else {
if((state_val_30330 === (33))){
var inst_30251 = (state_30329[(17)]);
var state_30329__$1 = state_30329;
var statearr_30355_30512 = state_30329__$1;
(statearr_30355_30512[(2)] = inst_30251);

(statearr_30355_30512[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (13))){
var state_30329__$1 = state_30329;
var statearr_30356_30513 = state_30329__$1;
(statearr_30356_30513[(2)] = false);

(statearr_30356_30513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (22))){
var inst_30151 = (state_30329[(9)]);
var inst_30300 = (state_30329[(2)]);
var inst_30301 = cljs.core.async.close_BANG_(inst_30151);
var state_30329__$1 = (function (){var statearr_30357 = state_30329;
(statearr_30357[(24)] = inst_30300);

return statearr_30357;
})();
var statearr_30358_30514 = state_30329__$1;
(statearr_30358_30514[(2)] = inst_30301);

(statearr_30358_30514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (36))){
var state_30329__$1 = state_30329;
var statearr_30361_30515 = state_30329__$1;
(statearr_30361_30515[(2)] = census.wmsAPI.core.pathcache30261);

(statearr_30361_30515[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (41))){
var inst_30150 = (state_30329[(16)]);
var inst_30160 = (state_30329[(10)]);
var inst_30310 = (inst_30160 + (1));
var inst_30159 = inst_30150;
var inst_30160__$1 = inst_30310;
var state_30329__$1 = (function (){var statearr_30362 = state_30329;
(statearr_30362[(8)] = inst_30159);

(statearr_30362[(10)] = inst_30160__$1);

return statearr_30362;
})();
var statearr_30363_30516 = state_30329__$1;
(statearr_30363_30516[(2)] = null);

(statearr_30363_30516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (43))){
var inst_30321 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30364_30517 = state_30329__$1;
(statearr_30364_30517[(2)] = inst_30321);

(statearr_30364_30517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (29))){
var inst_30241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30242 = [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)];
var inst_30243 = (new cljs.core.PersistentVector(null,1,(5),inst_30241,inst_30242,null));
var inst_30244 = cljs.core.PersistentVector.EMPTY;
var inst_30245 = cljs.core.PersistentVector.EMPTY;
var inst_30246 = com.rpl.specter.impl.magic_precompilation(inst_30243,"census.wmsAPI.core",inst_30244,inst_30245);
var inst_30247 = census.wmsAPI.core.pathcache30235 = inst_30246;
var state_30329__$1 = (function (){var statearr_30365 = state_30329;
(statearr_30365[(25)] = inst_30247);

return statearr_30365;
})();
var statearr_30369_30518 = state_30329__$1;
(statearr_30369_30518[(2)] = inst_30246);

(statearr_30369_30518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (44))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30329__$1,(47),_EQ_args_EQ__GT_,"No FIPS (Census geocodes) found for given arguments");
} else {
if((state_val_30330 === (6))){
var inst_30151 = (state_30329[(9)]);
var inst_30156 = (state_30329[(2)]);
var inst_30157 = cljs.core.async.close_BANG_(inst_30151);
var state_30329__$1 = (function (){var statearr_30372 = state_30329;
(statearr_30372[(26)] = inst_30156);

return statearr_30372;
})();
var statearr_30373_30519 = state_30329__$1;
(statearr_30373_30519[(2)] = inst_30157);

(statearr_30373_30519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (28))){
var inst_30186 = (state_30329[(12)]);
var inst_30150 = (state_30329[(16)]);
var inst_30159 = (state_30329[(8)]);
var inst_30187 = (state_30329[(19)]);
var inst_30151 = (state_30329[(9)]);
var inst_30189 = (state_30329[(13)]);
var inst_30160 = (state_30329[(10)]);
var inst_30185 = (state_30329[(27)]);
var inst_30215 = (state_30329[(2)]);
var inst_30234 = (function (){var args_in = inst_30150;
var _EQ_res_EQ_ = inst_30151;
var args = inst_30159;
var idx = inst_30160;
var map__30163 = inst_30185;
var layers = inst_30186;
var sub_level = inst_30187;
var res = inst_30189;
return ((function (args_in,_EQ_res_EQ_,args,idx,map__30163,layers,sub_level,res,inst_30186,inst_30150,inst_30159,inst_30187,inst_30151,inst_30189,inst_30160,inst_30185,inst_30215,state_val_30330,c__16663__auto__){
return (function (p1__30148_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__30148_SHARP_);
});
;})(args_in,_EQ_res_EQ_,args,idx,map__30163,layers,sub_level,res,inst_30186,inst_30150,inst_30159,inst_30187,inst_30151,inst_30189,inst_30160,inst_30185,inst_30215,state_val_30330,c__16663__auto__))
})();
var inst_30239 = (census.wmsAPI.core.pathcache30235 == null);
var state_30329__$1 = (function (){var statearr_30374 = state_30329;
(statearr_30374[(18)] = inst_30215);

(statearr_30374[(23)] = inst_30234);

return statearr_30374;
})();
if(cljs.core.truth_(inst_30239)){
var statearr_30375_30520 = state_30329__$1;
(statearr_30375_30520[(1)] = (29));

} else {
var statearr_30376_30521 = state_30329__$1;
(statearr_30376_30521[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (25))){
var inst_30207 = (state_30329[(2)]);
var inst_30208 = com.rpl.specter.impl.cached_path_info_precompiled(inst_30207);
var inst_30209 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_30207);
var state_30329__$1 = (function (){var statearr_30377 = state_30329;
(statearr_30377[(14)] = inst_30208);

return statearr_30377;
})();
if(cljs.core.truth_(inst_30209)){
var statearr_30378_30522 = state_30329__$1;
(statearr_30378_30522[(1)] = (26));

} else {
var statearr_30379_30523 = state_30329__$1;
(statearr_30379_30523[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (34))){
var inst_30258 = (state_30329[(2)]);
var inst_30259 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_30260 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_30264 = (census.wmsAPI.core.pathcache30261 == null);
var state_30329__$1 = (function (){var statearr_30380 = state_30329;
(statearr_30380[(20)] = inst_30259);

(statearr_30380[(21)] = inst_30260);

(statearr_30380[(22)] = inst_30258);

return statearr_30380;
})();
if(cljs.core.truth_(inst_30264)){
var statearr_30381_30525 = state_30329__$1;
(statearr_30381_30525[(1)] = (35));

} else {
var statearr_30382_30526 = state_30329__$1;
(statearr_30382_30526[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (17))){
var inst_30151 = (state_30329[(9)]);
var inst_30185 = (state_30329[(27)]);
var inst_30185__$1 = (state_30329[(2)]);
var inst_30186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30185__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var inst_30187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30185__$1,new cljs.core.Keyword(null,"sub-level","sub-level",368751408));
var state_30329__$1 = (function (){var statearr_30383 = state_30329;
(statearr_30383[(12)] = inst_30186);

(statearr_30383[(19)] = inst_30187);

(statearr_30383[(27)] = inst_30185__$1);

return statearr_30383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30329__$1,(18),inst_30151);
} else {
if((state_val_30330 === (3))){
var inst_30150 = (state_30329[(16)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30329__$1,(6),_EQ_args_EQ__GT_,inst_30150);
} else {
if((state_val_30330 === (12))){
var state_30329__$1 = state_30329;
var statearr_30384_30528 = state_30329__$1;
(statearr_30384_30528[(2)] = true);

(statearr_30384_30528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (2))){
var inst_30150 = (state_30329[(16)]);
var inst_30150__$1 = (state_30329[(2)]);
var inst_30151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30152 = census.wmsAPI.core.wms_engage_QMARK_(inst_30150__$1);
var inst_30153 = (!(inst_30152));
var state_30329__$1 = (function (){var statearr_30390 = state_30329;
(statearr_30390[(16)] = inst_30150__$1);

(statearr_30390[(9)] = inst_30151);

return statearr_30390;
})();
if(inst_30153){
var statearr_30391_30529 = state_30329__$1;
(statearr_30391_30529[(1)] = (3));

} else {
var statearr_30392_30530 = state_30329__$1;
(statearr_30392_30530[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (23))){
var inst_30198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30199 = [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)];
var inst_30200 = (new cljs.core.PersistentVector(null,1,(5),inst_30198,inst_30199,null));
var inst_30201 = cljs.core.PersistentVector.EMPTY;
var inst_30202 = cljs.core.PersistentVector.EMPTY;
var inst_30203 = com.rpl.specter.impl.magic_precompilation(inst_30200,"census.wmsAPI.core",inst_30201,inst_30202);
var inst_30204 = census.wmsAPI.core.pathcache30193 = inst_30203;
var state_30329__$1 = (function (){var statearr_30393 = state_30329;
(statearr_30393[(28)] = inst_30204);

return statearr_30393;
})();
var statearr_30394_30534 = state_30329__$1;
(statearr_30394_30534[(2)] = inst_30203);

(statearr_30394_30534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (47))){
var inst_30151 = (state_30329[(9)]);
var inst_30315 = (state_30329[(2)]);
var inst_30316 = cljs.core.async.close_BANG_(inst_30151);
var state_30329__$1 = (function (){var statearr_30398 = state_30329;
(statearr_30398[(29)] = inst_30315);

return statearr_30398;
})();
var statearr_30400_30535 = state_30329__$1;
(statearr_30400_30535[(2)] = inst_30316);

(statearr_30400_30535[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (35))){
var inst_30266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30267 = new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)]));
var inst_30268 = new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null);
var inst_30269 = com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,inst_30267,inst_30268);
var inst_30270 = [inst_30269];
var inst_30271 = (new cljs.core.PersistentVector(null,1,(5),inst_30266,inst_30270,null));
var inst_30272 = cljs.core.PersistentVector.EMPTY;
var inst_30273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null);
var inst_30274 = com.rpl.specter.impl.magic_precompilation(inst_30271,"census.wmsAPI.core",inst_30272,inst_30273);
var inst_30275 = census.wmsAPI.core.pathcache30261 = inst_30274;
var state_30329__$1 = (function (){var statearr_30401 = state_30329;
(statearr_30401[(30)] = inst_30275);

return statearr_30401;
})();
var statearr_30402_30667 = state_30329__$1;
(statearr_30402_30667[(2)] = inst_30274);

(statearr_30402_30667[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (19))){
var inst_30196 = (census.wmsAPI.core.pathcache30193 == null);
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30196)){
var statearr_30403_30668 = state_30329__$1;
(statearr_30403_30668[(1)] = (23));

} else {
var statearr_30404_30670 = state_30329__$1;
(statearr_30404_30670[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (11))){
var inst_30180 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30180)){
var statearr_30405_30671 = state_30329__$1;
(statearr_30405_30671[(1)] = (15));

} else {
var statearr_30406_30672 = state_30329__$1;
(statearr_30406_30672[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (9))){
var inst_30164 = (state_30329[(7)]);
var inst_30169 = inst_30164.cljs$lang$protocol_mask$partition0$;
var inst_30170 = (inst_30169 & (64));
var inst_30171 = inst_30164.cljs$core$ISeq$;
var inst_30172 = (cljs.core.PROTOCOL_SENTINEL === inst_30171);
var inst_30173 = ((inst_30170) || (inst_30172));
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30173)){
var statearr_30407_30674 = state_30329__$1;
(statearr_30407_30674[(1)] = (12));

} else {
var statearr_30408_30675 = state_30329__$1;
(statearr_30408_30675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (5))){
var inst_30327 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30329__$1,inst_30327);
} else {
if((state_val_30330 === (14))){
var inst_30177 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30409_30676 = state_30329__$1;
(statearr_30409_30676[(2)] = inst_30177);

(statearr_30409_30676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (45))){
var state_30329__$1 = state_30329;
var statearr_30412_30677 = state_30329__$1;
(statearr_30412_30677[(2)] = null);

(statearr_30412_30677[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (26))){
var inst_30208 = (state_30329[(14)]);
var inst_30211 = cljs.core.PersistentVector.EMPTY;
var inst_30212 = (inst_30208.cljs$core$IFn$_invoke$arity$1 ? inst_30208.cljs$core$IFn$_invoke$arity$1(inst_30211) : inst_30208.call(null,inst_30211));
var state_30329__$1 = state_30329;
var statearr_30416_30678 = state_30329__$1;
(statearr_30416_30678[(2)] = inst_30212);

(statearr_30416_30678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (16))){
var inst_30164 = (state_30329[(7)]);
var state_30329__$1 = state_30329;
var statearr_30417_30679 = state_30329__$1;
(statearr_30417_30679[(2)] = inst_30164);

(statearr_30417_30679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (38))){
var inst_30279 = (state_30329[(15)]);
var inst_30282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30283 = [com.rpl.specter.MAP_VALS];
var inst_30284 = (new cljs.core.PersistentVector(null,1,(5),inst_30282,inst_30283,null));
var inst_30285 = (inst_30279.cljs$core$IFn$_invoke$arity$1 ? inst_30279.cljs$core$IFn$_invoke$arity$1(inst_30284) : inst_30279.call(null,inst_30284));
var state_30329__$1 = state_30329;
var statearr_30418_30680 = state_30329__$1;
(statearr_30418_30680[(2)] = inst_30285);

(statearr_30418_30680[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (30))){
var state_30329__$1 = state_30329;
var statearr_30419_30681 = state_30329__$1;
(statearr_30419_30681[(2)] = census.wmsAPI.core.pathcache30235);

(statearr_30419_30681[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (10))){
var state_30329__$1 = state_30329;
var statearr_30420_30682 = state_30329__$1;
(statearr_30420_30682[(2)] = false);

(statearr_30420_30682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (18))){
var inst_30189 = (state_30329[(13)]);
var inst_30189__$1 = (state_30329[(2)]);
var inst_30190 = cljs.core.empty_QMARK_(inst_30189__$1);
var inst_30191 = (!(inst_30190));
var state_30329__$1 = (function (){var statearr_30421 = state_30329;
(statearr_30421[(13)] = inst_30189__$1);

return statearr_30421;
})();
if(inst_30191){
var statearr_30422_30684 = state_30329__$1;
(statearr_30422_30684[(1)] = (19));

} else {
var statearr_30423_30685 = state_30329__$1;
(statearr_30423_30685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (42))){
var state_30329__$1 = state_30329;
var statearr_30424_30686 = state_30329__$1;
(statearr_30424_30686[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (37))){
var inst_30278 = (state_30329[(2)]);
var inst_30279 = com.rpl.specter.impl.cached_path_info_precompiled(inst_30278);
var inst_30280 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_30278);
var state_30329__$1 = (function (){var statearr_30426 = state_30329;
(statearr_30426[(15)] = inst_30279);

return statearr_30426;
})();
if(cljs.core.truth_(inst_30280)){
var statearr_30427_30687 = state_30329__$1;
(statearr_30427_30687[(1)] = (38));

} else {
var statearr_30428_30688 = state_30329__$1;
(statearr_30428_30688[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (8))){
var inst_30325 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30429_30689 = state_30329__$1;
(statearr_30429_30689[(2)] = inst_30325);

(statearr_30429_30689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16663__auto__))
;
return ((function (switch__16488__auto__,c__16663__auto__){
return (function() {
var census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__ = null;
var census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____0 = (function (){
var statearr_30430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30430[(0)] = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__);

(statearr_30430[(1)] = (1));

return statearr_30430;
});
var census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____1 = (function (state_30329){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_30329);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e30431){if((e30431 instanceof Object)){
var ex__16492__auto__ = e30431;
var statearr_30432_30692 = state_30329;
(statearr_30432_30692[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30693 = state_30329;
state_30329 = G__30693;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__ = function(state_30329){
switch(arguments.length){
case 0:
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____0.call(this);
case 1:
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____1.call(this,state_30329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____0;
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____1;
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__))
})();
var state__16665__auto__ = (function (){var statearr_30433 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_30433[(6)] = c__16663__auto__);

return statearr_30433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__))
);

return c__16663__auto__;
});
});
/**
 * Provides a syncronous input to a function that accepts a channel for args
 *   and calls the Census WMS for geocoding; providing the results to the channel
 */
census.wmsAPI.core.I__LT_wms_EQ_I_EQ_ = (function census$wmsAPI$core$I__LT_wms_EQ_I_EQ_($g$){
return (function (I,_EQ_args_EQ__GT_){
var G__30435 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.__GT_args(I)], null));
var G__30436 = _EQ_args_EQ__GT_;
var fexpr__30434 = census.wmsAPI.core._EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_($g$);
return (fexpr__30434.cljs$core$IFn$_invoke$arity$2 ? fexpr__30434.cljs$core$IFn$_invoke$arity$2(G__30435,G__30436) : fexpr__30434.call(null,G__30435,G__30436));
});
});

//# sourceMappingURL=census.wmsAPI.core.js.map
