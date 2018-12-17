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
var G__34155 = arguments.length;
switch (G__34155) {
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

census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3 = (function ($g$,p__34156,server_index){
var map__34157 = p__34156;
var map__34157__$1 = (((((!((map__34157 == null))))?(((((map__34157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34157):map__34157);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34157__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var vec__34159 = cljs.core.vec(geoHierarchy);
var vec__34162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34159,(0),null);
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(0),null);
var map__34165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(1),null);
var map__34165__$1 = (((((!((map__34165 == null))))?(((((map__34165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34165):map__34165);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34165__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34165__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
var sub_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34159,(1),null);
var map__34166 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scope,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)),new cljs.core.Keyword(null,"wms","wms",663469516)], null));
var map__34166__$1 = (((((!((map__34166 == null))))?(((((map__34166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34166):map__34166);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"lookup","lookup",1225356838));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
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
census.wmsAPI.core.lookup_id__GT_match_QMARK_ = (function census$wmsAPI$core$lookup_id__GT_match_QMARK_(GEO,p__34171){
var vec__34173 = p__34171;
var geo_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34173,(0),null);
var geo_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34173,(1),null);
var vins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__34173,geo_val,geo_key){
return (function (p__34179){
var vec__34180 = p__34179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34180,(0),null);
var map__34183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34180,(1),null);
var map__34183__$1 = (((((!((map__34183 == null))))?(((((map__34183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34183):map__34183);
var map__34184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34183__$1,new cljs.core.Keyword(null,"wms","wms",663469516));
var map__34184__$1 = (((((!((map__34184 == null))))?(((((map__34184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34184):map__34184);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34184__$1,new cljs.core.Keyword(null,"lookup","lookup",1225356838));
var id_LT__json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34183__$1,new cljs.core.Keyword(null,"id<-json","id<-json",-1249818926));
if((lookup instanceof census.utils.core.vec_type)){
return cljs.core.last(lookup);
} else {
return cljs.core.last(id_LT__json);
}
});})(vec__34173,geo_val,geo_key))
,cljs.core.vec(geo_val));
if(cljs.core.truth_(cljs.core.some(((function (vins,vec__34173,geo_val,geo_key){
return (function (p1__34169_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(GEO,p1__34169_SHARP_);
});})(vins,vec__34173,geo_val,geo_key))
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
return (function (p1__34189_SHARP_){
return census.wmsAPI.core.lookup_id__GT_match_QMARK_(GEO,p1__34189_SHARP_);
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
var G__34196 = arguments.length;
switch (G__34196) {
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
var map__34199 = census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3($g$,args,server_index);
var map__34199__$1 = (((((!((map__34199 == null))))?(((((map__34199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34199):map__34199);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var cur_layer_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"cur-layer-idx","cur-layer-idx",1604904097));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
var geo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34199__$1,new cljs.core.Keyword(null,"geo","geo",-2054400503));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.utils.core.URL_WMS),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2010",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)))?"TIGERweb/tigerWMS_Census2010":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2000",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)))?"Census2010/tigerWMS_Census2000":["TIGERweb/tigerWMS_ACS",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)].join('')
))),"/Mapserver/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(layers,cur_layer_idx)),"/query?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__34199,map__34199__$1,vintage,layers,cur_layer_idx,lat,lng,geo){
return (function (p1__34192_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("=",p1__34192_SHARP_);
});})(map__34199,map__34199__$1,vintage,layers,cur_layer_idx,lat,lng,geo))
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
var wms_keys = com.rpl.specter.impl.compiled_select_STAR_((function (){var info__28398__auto__ = census.wmsAPI.core.pathcache34206;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info34207 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"com/rpl/specter.cljc",11,1,712,715,cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null))], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null)], null));
census.wmsAPI.core.pathcache34206 = info34207;

return info34207;
})():info__28398__auto__);
var precompiled34208 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__34211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null);
return (precompiled34208.cljs$core$IFn$_invoke$arity$1 ? precompiled34208.cljs$core$IFn$_invoke$arity$1(G__34211) : precompiled34208.call(null,G__34211));
} else {
return precompiled34208;
}
})(),attrs);
var wms_vals = com.rpl.specter.impl.compiled_select_STAR_((function (){var info__28398__auto__ = census.wmsAPI.core.pathcache34212;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info34213 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null))], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null));
census.wmsAPI.core.pathcache34212 = info34213;

return info34213;
})():info__28398__auto__);
var precompiled34214 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__34215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled34214.cljs$core$IFn$_invoke$arity$1 ? precompiled34214.cljs$core$IFn$_invoke$arity$1(G__34215) : precompiled34214.call(null,G__34215));
} else {
return precompiled34214;
}
})(),attrs);
var geo_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (wms_keys,wms_vals){
return (function (p1__34204_SHARP_){
return census.wmsAPI.core.search_id__GT_match_QMARK_($g$,p1__34204_SHARP_);
});})(wms_keys,wms_vals))
,wms_keys);
var idx = (0);
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_keys,idx))){
return result;
} else {
var G__34659 = (idx + (1));
var G__34660 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_keys,idx),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.compiled_select_STAR_((function (){var info__28398__auto__ = census.wmsAPI.core.pathcache34216;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info34217 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
census.wmsAPI.core.pathcache34216 = info34217;

return info34217;
})():info__28398__auto__);
var precompiled34218 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__34224 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.ALL], null),com.rpl.specter.ALL,com.rpl.specter.ALL], null);
return (precompiled34218.cljs$core$IFn$_invoke$arity$1 ? precompiled34218.cljs$core$IFn$_invoke$arity$1(G__34224) : precompiled34218.call(null,G__34224));
} else {
return precompiled34218;
}
})(),geo_keys),idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_vals,idx)]));
idx = G__34659;
result = G__34660;
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
var _EQ_args_EQ__GT_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__34230_SHARP_){
return census.wmsAPI.core.configed_map($g$,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__34230_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),(0),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null)));
})));
var url = census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$3($g$,args,server_idx);
var G__34233_34662 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var G__34234_34663 = _EQ_args_EQ__GT_;
var G__34235_34664 = _EQ_args_EQ__GT_;
(census.wmsAPI.core.$GET$_wms.cljs$core$IFn$_invoke$arity$3 ? census.wmsAPI.core.$GET$_wms.cljs$core$IFn$_invoke$arity$3(G__34233_34662,G__34234_34663,G__34235_34664) : census.wmsAPI.core.$GET$_wms.call(null,G__34233_34662,G__34234_34663,G__34235_34664));

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
census.wmsAPI.core.wms_engage_QMARK_ = (function census$wmsAPI$core$wms_engage_QMARK_(p__34240){
var map__34242 = p__34240;
var map__34242__$1 = (((((!((map__34242 == null))))?(((((map__34242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34242):map__34242);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34242__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vec__34245 = cljs.core.first(geoHierarchy);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34245,(0),null);
var geo_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34245,(1),null);
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
return (function (state_34467){
var state_val_34468 = (state_34467[(1)]);
if((state_val_34468 === (7))){
var inst_34294 = (state_34467[(7)]);
var inst_34289 = (state_34467[(8)]);
var inst_34288 = (state_34467[(9)]);
var inst_34279 = (state_34467[(10)]);
var inst_34291 = census.wmsAPI.core.try_census_wms($g$,inst_34288,inst_34289,inst_34279);
var inst_34294__$1 = census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$2($g$,inst_34288);
var inst_34297 = (inst_34294__$1 == null);
var inst_34298 = cljs.core.not(inst_34297);
var state_34467__$1 = (function (){var statearr_34484 = state_34467;
(statearr_34484[(7)] = inst_34294__$1);

(statearr_34484[(11)] = inst_34291);

return statearr_34484;
})();
if(inst_34298){
var statearr_34485_34665 = state_34467__$1;
(statearr_34485_34665[(1)] = (9));

} else {
var statearr_34486_34666 = state_34467__$1;
(statearr_34486_34666[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (20))){
var inst_34317 = (state_34467[(12)]);
var inst_34320 = (state_34467[(13)]);
var inst_34289 = (state_34467[(8)]);
var inst_34431 = cljs.core.empty_QMARK_(inst_34320);
var inst_34432 = (inst_34289 + (1));
var inst_34433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34317,inst_34432);
var inst_34434 = (inst_34433 == null);
var inst_34435 = cljs.core.not(inst_34434);
var inst_34436 = ((inst_34431) && (inst_34435));
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34436)){
var statearr_34489_34667 = state_34467__$1;
(statearr_34489_34667[(1)] = (41));

} else {
var statearr_34494_34668 = state_34467__$1;
(statearr_34494_34668[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (27))){
var inst_34345 = (state_34467[(14)]);
var state_34467__$1 = state_34467;
var statearr_34495_34669 = state_34467__$1;
(statearr_34495_34669[(2)] = inst_34345);

(statearr_34495_34669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (1))){
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(2),_EQ__GT_args_EQ_);
} else {
if((state_val_34468 === (24))){
var state_34467__$1 = state_34467;
var statearr_34500_34670 = state_34467__$1;
(statearr_34500_34670[(2)] = census.wmsAPI.core.pathcache34327);

(statearr_34500_34670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (39))){
var inst_34402 = (state_34467[(15)]);
var state_34467__$1 = state_34467;
var statearr_34503_34671 = state_34467__$1;
(statearr_34503_34671[(2)] = inst_34402);

(statearr_34503_34671[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (46))){
var inst_34448 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34506_34672 = state_34467__$1;
(statearr_34506_34672[(2)] = inst_34448);

(statearr_34506_34672[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (4))){
var inst_34278 = (state_34467[(16)]);
var inst_34288 = inst_34278;
var inst_34289 = (0);
var state_34467__$1 = (function (){var statearr_34508 = state_34467;
(statearr_34508[(8)] = inst_34289);

(statearr_34508[(9)] = inst_34288);

return statearr_34508;
})();
var statearr_34509_34673 = state_34467__$1;
(statearr_34509_34673[(2)] = null);

(statearr_34509_34673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (15))){
var inst_34294 = (state_34467[(7)]);
var inst_34313 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34294);
var state_34467__$1 = state_34467;
var statearr_34512_34675 = state_34467__$1;
(statearr_34512_34675[(2)] = inst_34313);

(statearr_34512_34675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (21))){
var inst_34457 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34518_34676 = state_34467__$1;
(statearr_34518_34676[(2)] = inst_34457);

(statearr_34518_34676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (31))){
var inst_34368 = (state_34467[(2)]);
var inst_34369 = com.rpl.specter.impl.cached_path_info_precompiled(inst_34368);
var inst_34370 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_34368);
var state_34467__$1 = (function (){var statearr_34519 = state_34467;
(statearr_34519[(17)] = inst_34369);

return statearr_34519;
})();
if(cljs.core.truth_(inst_34370)){
var statearr_34522_34677 = state_34467__$1;
(statearr_34522_34677[(1)] = (32));

} else {
var statearr_34523_34678 = state_34467__$1;
(statearr_34523_34678[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (32))){
var inst_34369 = (state_34467[(17)]);
var inst_34372 = cljs.core.PersistentVector.EMPTY;
var inst_34373 = (inst_34369.cljs$core$IFn$_invoke$arity$1 ? inst_34369.cljs$core$IFn$_invoke$arity$1(inst_34372) : inst_34369.call(null,inst_34372));
var state_34467__$1 = state_34467;
var statearr_34528_34679 = state_34467__$1;
(statearr_34528_34679[(2)] = inst_34373);

(statearr_34528_34679[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (40))){
var inst_34377 = (state_34467[(18)]);
var inst_34376 = (state_34467[(19)]);
var inst_34318 = (state_34467[(20)]);
var inst_34353 = (state_34467[(21)]);
var inst_34320 = (state_34467[(13)]);
var inst_34378 = (state_34467[(22)]);
var inst_34352 = (state_34467[(23)]);
var inst_34288 = (state_34467[(9)]);
var inst_34411 = (state_34467[(2)]);
var inst_34412 = com.rpl.specter.impl.do_compiled_traverse(inst_34411,inst_34320);
var inst_34413 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_34378,inst_34412);
var inst_34414 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_34418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34419 = [inst_34318];
var inst_34421 = (new cljs.core.PersistentVector(null,1,(5),inst_34418,inst_34419,null));
var inst_34422 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_34414,inst_34421);
var inst_34423 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(inst_34377,inst_34413,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34422], 0));
var inst_34424 = com.rpl.specter.impl.compiled_setval_STAR_(inst_34376,inst_34423,inst_34288);
var inst_34425 = com.rpl.specter.impl.compiled_transform_STAR_(inst_34352,inst_34353,inst_34424);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34467__$1,(22),_EQ_args_EQ__GT_,inst_34425);
} else {
if((state_val_34468 === (33))){
var inst_34369 = (state_34467[(17)]);
var state_34467__$1 = state_34467;
var statearr_34531_34680 = state_34467__$1;
(statearr_34531_34680[(2)] = inst_34369);

(statearr_34531_34680[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (13))){
var state_34467__$1 = state_34467;
var statearr_34536_34681 = state_34467__$1;
(statearr_34536_34681[(2)] = false);

(statearr_34536_34681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (22))){
var inst_34279 = (state_34467[(10)]);
var inst_34427 = (state_34467[(2)]);
var inst_34428 = cljs.core.async.close_BANG_(inst_34279);
var state_34467__$1 = (function (){var statearr_34540 = state_34467;
(statearr_34540[(24)] = inst_34427);

return statearr_34540;
})();
var statearr_34542_34682 = state_34467__$1;
(statearr_34542_34682[(2)] = inst_34428);

(statearr_34542_34682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (36))){
var state_34467__$1 = state_34467;
var statearr_34547_34683 = state_34467__$1;
(statearr_34547_34683[(2)] = census.wmsAPI.core.pathcache34379);

(statearr_34547_34683[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (41))){
var inst_34278 = (state_34467[(16)]);
var inst_34289 = (state_34467[(8)]);
var inst_34438 = (inst_34289 + (1));
var inst_34288 = inst_34278;
var inst_34289__$1 = inst_34438;
var state_34467__$1 = (function (){var statearr_34554 = state_34467;
(statearr_34554[(8)] = inst_34289__$1);

(statearr_34554[(9)] = inst_34288);

return statearr_34554;
})();
var statearr_34559_34684 = state_34467__$1;
(statearr_34559_34684[(2)] = null);

(statearr_34559_34684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (43))){
var inst_34450 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34560_34685 = state_34467__$1;
(statearr_34560_34685[(2)] = inst_34450);

(statearr_34560_34685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (29))){
var inst_34359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34360 = [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)];
var inst_34361 = (new cljs.core.PersistentVector(null,1,(5),inst_34359,inst_34360,null));
var inst_34362 = cljs.core.PersistentVector.EMPTY;
var inst_34363 = cljs.core.PersistentVector.EMPTY;
var inst_34364 = com.rpl.specter.impl.magic_precompilation(inst_34361,"census.wmsAPI.core",inst_34362,inst_34363);
var inst_34365 = census.wmsAPI.core.pathcache34354 = inst_34364;
var state_34467__$1 = (function (){var statearr_34569 = state_34467;
(statearr_34569[(25)] = inst_34365);

return statearr_34569;
})();
var statearr_34570_34686 = state_34467__$1;
(statearr_34570_34686[(2)] = inst_34364);

(statearr_34570_34686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (44))){
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34467__$1,(47),_EQ_args_EQ__GT_,"No FIPS (Census geocodes) found for given arguments");
} else {
if((state_val_34468 === (6))){
var inst_34279 = (state_34467[(10)]);
var inst_34284 = (state_34467[(2)]);
var inst_34285 = cljs.core.async.close_BANG_(inst_34279);
var state_34467__$1 = (function (){var statearr_34571 = state_34467;
(statearr_34571[(26)] = inst_34284);

return statearr_34571;
})();
var statearr_34572_34687 = state_34467__$1;
(statearr_34572_34687[(2)] = inst_34285);

(statearr_34572_34687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (28))){
var inst_34317 = (state_34467[(12)]);
var inst_34318 = (state_34467[(20)]);
var inst_34278 = (state_34467[(16)]);
var inst_34320 = (state_34467[(13)]);
var inst_34316 = (state_34467[(27)]);
var inst_34289 = (state_34467[(8)]);
var inst_34288 = (state_34467[(9)]);
var inst_34279 = (state_34467[(10)]);
var inst_34352 = (state_34467[(2)]);
var inst_34353 = (function (){var args_in = inst_34278;
var _EQ_res_EQ_ = inst_34279;
var args = inst_34288;
var idx = inst_34289;
var map__34292 = inst_34316;
var layers = inst_34317;
var sub_level = inst_34318;
var res = inst_34320;
return ((function (args_in,_EQ_res_EQ_,args,idx,map__34292,layers,sub_level,res,inst_34317,inst_34318,inst_34278,inst_34320,inst_34316,inst_34289,inst_34288,inst_34279,inst_34352,state_val_34468,c__16663__auto__){
return (function (p1__34250_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__34250_SHARP_);
});
;})(args_in,_EQ_res_EQ_,args,idx,map__34292,layers,sub_level,res,inst_34317,inst_34318,inst_34278,inst_34320,inst_34316,inst_34289,inst_34288,inst_34279,inst_34352,state_val_34468,c__16663__auto__))
})();
var inst_34357 = (census.wmsAPI.core.pathcache34354 == null);
var state_34467__$1 = (function (){var statearr_34576 = state_34467;
(statearr_34576[(21)] = inst_34353);

(statearr_34576[(23)] = inst_34352);

return statearr_34576;
})();
if(cljs.core.truth_(inst_34357)){
var statearr_34577_34688 = state_34467__$1;
(statearr_34577_34688[(1)] = (29));

} else {
var statearr_34582_34689 = state_34467__$1;
(statearr_34582_34689[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (25))){
var inst_34344 = (state_34467[(2)]);
var inst_34345 = com.rpl.specter.impl.cached_path_info_precompiled(inst_34344);
var inst_34346 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_34344);
var state_34467__$1 = (function (){var statearr_34585 = state_34467;
(statearr_34585[(14)] = inst_34345);

return statearr_34585;
})();
if(cljs.core.truth_(inst_34346)){
var statearr_34586_34690 = state_34467__$1;
(statearr_34586_34690[(1)] = (26));

} else {
var statearr_34587_34691 = state_34467__$1;
(statearr_34587_34691[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (34))){
var inst_34376 = (state_34467[(2)]);
var inst_34377 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_34378 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_34386 = (census.wmsAPI.core.pathcache34379 == null);
var state_34467__$1 = (function (){var statearr_34590 = state_34467;
(statearr_34590[(18)] = inst_34377);

(statearr_34590[(19)] = inst_34376);

(statearr_34590[(22)] = inst_34378);

return statearr_34590;
})();
if(cljs.core.truth_(inst_34386)){
var statearr_34591_34692 = state_34467__$1;
(statearr_34591_34692[(1)] = (35));

} else {
var statearr_34592_34693 = state_34467__$1;
(statearr_34592_34693[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (17))){
var inst_34316 = (state_34467[(27)]);
var inst_34279 = (state_34467[(10)]);
var inst_34316__$1 = (state_34467[(2)]);
var inst_34317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34316__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var inst_34318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34316__$1,new cljs.core.Keyword(null,"sub-level","sub-level",368751408));
var state_34467__$1 = (function (){var statearr_34593 = state_34467;
(statearr_34593[(12)] = inst_34317);

(statearr_34593[(20)] = inst_34318);

(statearr_34593[(27)] = inst_34316__$1);

return statearr_34593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(18),inst_34279);
} else {
if((state_val_34468 === (3))){
var inst_34278 = (state_34467[(16)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34467__$1,(6),_EQ_args_EQ__GT_,inst_34278);
} else {
if((state_val_34468 === (12))){
var state_34467__$1 = state_34467;
var statearr_34595_34694 = state_34467__$1;
(statearr_34595_34694[(2)] = true);

(statearr_34595_34694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (2))){
var inst_34278 = (state_34467[(16)]);
var inst_34278__$1 = (state_34467[(2)]);
var inst_34279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34280 = census.wmsAPI.core.wms_engage_QMARK_(inst_34278__$1);
var inst_34281 = (!(inst_34280));
var state_34467__$1 = (function (){var statearr_34596 = state_34467;
(statearr_34596[(16)] = inst_34278__$1);

(statearr_34596[(10)] = inst_34279);

return statearr_34596;
})();
if(inst_34281){
var statearr_34597_34695 = state_34467__$1;
(statearr_34597_34695[(1)] = (3));

} else {
var statearr_34598_34696 = state_34467__$1;
(statearr_34598_34696[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (23))){
var inst_34335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34336 = [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)];
var inst_34337 = (new cljs.core.PersistentVector(null,1,(5),inst_34335,inst_34336,null));
var inst_34338 = cljs.core.PersistentVector.EMPTY;
var inst_34339 = cljs.core.PersistentVector.EMPTY;
var inst_34340 = com.rpl.specter.impl.magic_precompilation(inst_34337,"census.wmsAPI.core",inst_34338,inst_34339);
var inst_34341 = census.wmsAPI.core.pathcache34327 = inst_34340;
var state_34467__$1 = (function (){var statearr_34599 = state_34467;
(statearr_34599[(28)] = inst_34341);

return statearr_34599;
})();
var statearr_34600_34697 = state_34467__$1;
(statearr_34600_34697[(2)] = inst_34340);

(statearr_34600_34697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (47))){
var inst_34279 = (state_34467[(10)]);
var inst_34444 = (state_34467[(2)]);
var inst_34445 = cljs.core.async.close_BANG_(inst_34279);
var state_34467__$1 = (function (){var statearr_34601 = state_34467;
(statearr_34601[(29)] = inst_34444);

return statearr_34601;
})();
var statearr_34602_34698 = state_34467__$1;
(statearr_34602_34698[(2)] = inst_34445);

(statearr_34602_34698[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (35))){
var inst_34388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34390 = new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)]));
var inst_34391 = new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null);
var inst_34392 = com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,inst_34390,inst_34391);
var inst_34393 = [inst_34392];
var inst_34394 = (new cljs.core.PersistentVector(null,1,(5),inst_34388,inst_34393,null));
var inst_34395 = cljs.core.PersistentVector.EMPTY;
var inst_34396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null);
var inst_34397 = com.rpl.specter.impl.magic_precompilation(inst_34394,"census.wmsAPI.core",inst_34395,inst_34396);
var inst_34398 = census.wmsAPI.core.pathcache34379 = inst_34397;
var state_34467__$1 = (function (){var statearr_34603 = state_34467;
(statearr_34603[(30)] = inst_34398);

return statearr_34603;
})();
var statearr_34604_34699 = state_34467__$1;
(statearr_34604_34699[(2)] = inst_34397);

(statearr_34604_34699[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (19))){
var inst_34332 = (census.wmsAPI.core.pathcache34327 == null);
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34332)){
var statearr_34605_34700 = state_34467__$1;
(statearr_34605_34700[(1)] = (23));

} else {
var statearr_34606_34701 = state_34467__$1;
(statearr_34606_34701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (11))){
var inst_34311 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34311)){
var statearr_34607_34702 = state_34467__$1;
(statearr_34607_34702[(1)] = (15));

} else {
var statearr_34608_34703 = state_34467__$1;
(statearr_34608_34703[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (9))){
var inst_34294 = (state_34467[(7)]);
var inst_34300 = inst_34294.cljs$lang$protocol_mask$partition0$;
var inst_34301 = (inst_34300 & (64));
var inst_34302 = inst_34294.cljs$core$ISeq$;
var inst_34303 = (cljs.core.PROTOCOL_SENTINEL === inst_34302);
var inst_34304 = ((inst_34301) || (inst_34303));
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34304)){
var statearr_34609_34704 = state_34467__$1;
(statearr_34609_34704[(1)] = (12));

} else {
var statearr_34610_34705 = state_34467__$1;
(statearr_34610_34705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (5))){
var inst_34462 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34467__$1,inst_34462);
} else {
if((state_val_34468 === (14))){
var inst_34308 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34612_34706 = state_34467__$1;
(statearr_34612_34706[(2)] = inst_34308);

(statearr_34612_34706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (45))){
var state_34467__$1 = state_34467;
var statearr_34613_34707 = state_34467__$1;
(statearr_34613_34707[(2)] = null);

(statearr_34613_34707[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (26))){
var inst_34345 = (state_34467[(14)]);
var inst_34348 = cljs.core.PersistentVector.EMPTY;
var inst_34349 = (inst_34345.cljs$core$IFn$_invoke$arity$1 ? inst_34345.cljs$core$IFn$_invoke$arity$1(inst_34348) : inst_34345.call(null,inst_34348));
var state_34467__$1 = state_34467;
var statearr_34614_34708 = state_34467__$1;
(statearr_34614_34708[(2)] = inst_34349);

(statearr_34614_34708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (16))){
var inst_34294 = (state_34467[(7)]);
var state_34467__$1 = state_34467;
var statearr_34615_34709 = state_34467__$1;
(statearr_34615_34709[(2)] = inst_34294);

(statearr_34615_34709[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (38))){
var inst_34402 = (state_34467[(15)]);
var inst_34405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34406 = [com.rpl.specter.MAP_VALS];
var inst_34407 = (new cljs.core.PersistentVector(null,1,(5),inst_34405,inst_34406,null));
var inst_34408 = (inst_34402.cljs$core$IFn$_invoke$arity$1 ? inst_34402.cljs$core$IFn$_invoke$arity$1(inst_34407) : inst_34402.call(null,inst_34407));
var state_34467__$1 = state_34467;
var statearr_34616_34710 = state_34467__$1;
(statearr_34616_34710[(2)] = inst_34408);

(statearr_34616_34710[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (30))){
var state_34467__$1 = state_34467;
var statearr_34623_34712 = state_34467__$1;
(statearr_34623_34712[(2)] = census.wmsAPI.core.pathcache34354);

(statearr_34623_34712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (10))){
var state_34467__$1 = state_34467;
var statearr_34628_34714 = state_34467__$1;
(statearr_34628_34714[(2)] = false);

(statearr_34628_34714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (18))){
var inst_34320 = (state_34467[(13)]);
var inst_34320__$1 = (state_34467[(2)]);
var inst_34322 = cljs.core.empty_QMARK_(inst_34320__$1);
var inst_34323 = (!(inst_34322));
var state_34467__$1 = (function (){var statearr_34633 = state_34467;
(statearr_34633[(13)] = inst_34320__$1);

return statearr_34633;
})();
if(inst_34323){
var statearr_34634_34716 = state_34467__$1;
(statearr_34634_34716[(1)] = (19));

} else {
var statearr_34635_34717 = state_34467__$1;
(statearr_34635_34717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (42))){
var state_34467__$1 = state_34467;
var statearr_34636_34718 = state_34467__$1;
(statearr_34636_34718[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (37))){
var inst_34401 = (state_34467[(2)]);
var inst_34402 = com.rpl.specter.impl.cached_path_info_precompiled(inst_34401);
var inst_34403 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_34401);
var state_34467__$1 = (function (){var statearr_34638 = state_34467;
(statearr_34638[(15)] = inst_34402);

return statearr_34638;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34639_34719 = state_34467__$1;
(statearr_34639_34719[(1)] = (38));

} else {
var statearr_34641_34720 = state_34467__$1;
(statearr_34641_34720[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (8))){
var inst_34459 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34643_34721 = state_34467__$1;
(statearr_34643_34721[(2)] = inst_34459);

(statearr_34643_34721[(1)] = (5));


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
var statearr_34645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34645[(0)] = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__);

(statearr_34645[(1)] = (1));

return statearr_34645;
});
var census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____1 = (function (state_34467){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_34467);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e34646){if((e34646 instanceof Object)){
var ex__16492__auto__ = e34646;
var statearr_34647_34728 = state_34467;
(statearr_34647_34728[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34731 = state_34467;
state_34467 = G__34731;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__ = function(state_34467){
switch(arguments.length){
case 0:
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____0.call(this);
case 1:
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____1.call(this,state_34467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____0;
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto____1;
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__))
})();
var state__16665__auto__ = (function (){var statearr_34648 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_34648[(6)] = c__16663__auto__);

return statearr_34648;
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
var G__34650 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.__GT_args(I)], null));
var G__34651 = _EQ_args_EQ__GT_;
var fexpr__34649 = census.wmsAPI.core._EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_($g$);
return (fexpr__34649.cljs$core$IFn$_invoke$arity$2 ? fexpr__34649.cljs$core$IFn$_invoke$arity$2(G__34650,G__34651) : fexpr__34649.call(null,G__34650,G__34651));
});
});

//# sourceMappingURL=census.wmsAPI.core.js.map
