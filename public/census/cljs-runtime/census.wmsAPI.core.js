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
var G__17445 = arguments.length;
switch (G__17445) {
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

census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3 = (function ($g$,p__17450,server_index){
var map__17451 = p__17450;
var map__17451__$1 = (((((!((map__17451 == null))))?(((((map__17451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17451):map__17451);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var vec__17453 = cljs.core.vec(geoHierarchy);
var vec__17456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17453,(0),null);
var scope = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(0),null);
var map__17459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(1),null);
var map__17459__$1 = (((((!((map__17459 == null))))?(((((map__17459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17459):map__17459);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17459__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17459__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
var sub_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17453,(1),null);
var map__17460 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scope,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)),new cljs.core.Keyword(null,"wms","wms",663469516)], null));
var map__17460__$1 = (((((!((map__17460 == null))))?(((((map__17460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17460):map__17460);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,new cljs.core.Keyword(null,"lookup","lookup",1225356838));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
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
census.wmsAPI.core.lookup_id__GT_match_QMARK_ = (function census$wmsAPI$core$lookup_id__GT_match_QMARK_(GEO,p__17472){
var vec__17473 = p__17472;
var geo_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17473,(0),null);
var geo_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17473,(1),null);
var vins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__17473,geo_val,geo_key){
return (function (p__17476){
var vec__17477 = p__17476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17477,(0),null);
var map__17480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17477,(1),null);
var map__17480__$1 = (((((!((map__17480 == null))))?(((((map__17480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17480):map__17480);
var map__17481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"wms","wms",663469516));
var map__17481__$1 = (((((!((map__17481 == null))))?(((((map__17481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17481):map__17481);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17481__$1,new cljs.core.Keyword(null,"lookup","lookup",1225356838));
var id_LT__json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"id<-json","id<-json",-1249818926));
if((lookup instanceof census.utils.core.vec_type)){
return cljs.core.last(lookup);
} else {
return cljs.core.last(id_LT__json);
}
});})(vec__17473,geo_val,geo_key))
,cljs.core.vec(geo_val));
if(cljs.core.truth_(cljs.core.some(((function (vins,vec__17473,geo_val,geo_key){
return (function (p1__17471_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(GEO,p1__17471_SHARP_);
});})(vins,vec__17473,geo_val,geo_key))
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
return (function (p1__17486_SHARP_){
return census.wmsAPI.core.lookup_id__GT_match_QMARK_(GEO,p1__17486_SHARP_);
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
var G__17493 = arguments.length;
switch (G__17493) {
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
var map__17494 = census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$3($g$,args,server_index);
var map__17494__$1 = (((((!((map__17494 == null))))?(((((map__17494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17494):map__17494);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var cur_layer_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,new cljs.core.Keyword(null,"cur-layer-idx","cur-layer-idx",1604904097));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
var geo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,new cljs.core.Keyword(null,"geo","geo",-2054400503));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.utils.core.URL_WMS),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2010",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)))?"TIGERweb/tigerWMS_Census2010":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2000",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)))?"Census2010/tigerWMS_Census2000":["TIGERweb/tigerWMS_ACS",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)].join('')
))),"/Mapserver/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(layers,cur_layer_idx)),"/query?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__17494,map__17494__$1,vintage,layers,cur_layer_idx,lat,lng,geo){
return (function (p1__17489_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("=",p1__17489_SHARP_);
});})(map__17494,map__17494__$1,vintage,layers,cur_layer_idx,lat,lng,geo))
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
var wms_keys = com.rpl.specter.impl.compiled_select_STAR_((function (){var info__15808__auto__ = census.wmsAPI.core.pathcache17498;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17499 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"com/rpl/specter.cljc",11,1,712,715,cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null))], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null)], null));
census.wmsAPI.core.pathcache17498 = info17499;

return info17499;
})():info__15808__auto__);
var precompiled17500 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null);
return (precompiled17500.cljs$core$IFn$_invoke$arity$1 ? precompiled17500.cljs$core$IFn$_invoke$arity$1(G__17502) : precompiled17500.call(null,G__17502));
} else {
return precompiled17500;
}
})(),attrs);
var wms_vals = com.rpl.specter.impl.compiled_select_STAR_((function (){var info__15808__auto__ = census.wmsAPI.core.pathcache17503;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17504 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null))], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null));
census.wmsAPI.core.pathcache17503 = info17504;

return info17504;
})():info__15808__auto__);
var precompiled17505 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17507 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled17505.cljs$core$IFn$_invoke$arity$1 ? precompiled17505.cljs$core$IFn$_invoke$arity$1(G__17507) : precompiled17505.call(null,G__17507));
} else {
return precompiled17505;
}
})(),attrs);
var geo_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (wms_keys,wms_vals){
return (function (p1__17496_SHARP_){
return census.wmsAPI.core.search_id__GT_match_QMARK_($g$,p1__17496_SHARP_);
});})(wms_keys,wms_vals))
,wms_keys);
var idx = (0);
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_keys,idx))){
return result;
} else {
var G__17879 = (idx + (1));
var G__17880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_keys,idx),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.compiled_select_STAR_((function (){var info__15808__auto__ = census.wmsAPI.core.pathcache17511;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17512 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null))], null)], null),"census.wmsAPI.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)], null));
census.wmsAPI.core.pathcache17511 = info17512;

return info17512;
})():info__15808__auto__);
var precompiled17513 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.ALL], null),com.rpl.specter.ALL,com.rpl.specter.ALL], null);
return (precompiled17513.cljs$core$IFn$_invoke$arity$1 ? precompiled17513.cljs$core$IFn$_invoke$arity$1(G__17515) : precompiled17513.call(null,G__17515));
} else {
return precompiled17513;
}
})(),geo_keys),idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(wms_vals,idx)]));
idx = G__17879;
result = G__17880;
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
var _EQ_args_EQ__GT_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__17516_SHARP_){
return census.wmsAPI.core.configed_map($g$,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__17516_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),(0),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null)));
})));
var url = census.wmsAPI.core.C__GT_GIS_url.cljs$core$IFn$_invoke$arity$3($g$,args,server_idx);
var G__17517_17882 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var G__17518_17883 = _EQ_args_EQ__GT_;
var G__17519_17884 = _EQ_args_EQ__GT_;
(census.wmsAPI.core.$GET$_wms.cljs$core$IFn$_invoke$arity$3 ? census.wmsAPI.core.$GET$_wms.cljs$core$IFn$_invoke$arity$3(G__17517_17882,G__17518_17883,G__17519_17884) : census.wmsAPI.core.$GET$_wms.call(null,G__17517_17882,G__17518_17883,G__17519_17884));

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
census.wmsAPI.core.wms_engage_QMARK_ = (function census$wmsAPI$core$wms_engage_QMARK_(p__17520){
var map__17521 = p__17520;
var map__17521__$1 = (((((!((map__17521 == null))))?(((((map__17521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17521):map__17521);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17521__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vec__17523 = cljs.core.first(geoHierarchy);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17523,(0),null);
var geo_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17523,(1),null);
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
var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__){
return (function (state_17715){
var state_val_17716 = (state_17715[(1)]);
if((state_val_17716 === (7))){
var inst_17552 = (state_17715[(7)]);
var inst_17536 = (state_17715[(8)]);
var inst_17548 = (state_17715[(9)]);
var inst_17547 = (state_17715[(10)]);
var inst_17550 = census.wmsAPI.core.try_census_wms($g$,inst_17547,inst_17548,inst_17536);
var inst_17552__$1 = census.wmsAPI.core.$g$__GT_wms_cfg.cljs$core$IFn$_invoke$arity$2($g$,inst_17547);
var inst_17554 = (inst_17552__$1 == null);
var inst_17555 = cljs.core.not(inst_17554);
var state_17715__$1 = (function (){var statearr_17717 = state_17715;
(statearr_17717[(11)] = inst_17550);

(statearr_17717[(7)] = inst_17552__$1);

return statearr_17717;
})();
if(inst_17555){
var statearr_17718_17888 = state_17715__$1;
(statearr_17718_17888[(1)] = (9));

} else {
var statearr_17719_17889 = state_17715__$1;
(statearr_17719_17889[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (20))){
var inst_17577 = (state_17715[(12)]);
var inst_17574 = (state_17715[(13)]);
var inst_17548 = (state_17715[(9)]);
var inst_17688 = cljs.core.empty_QMARK_(inst_17577);
var inst_17689 = (inst_17548 + (1));
var inst_17690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17574,inst_17689);
var inst_17691 = (inst_17690 == null);
var inst_17692 = cljs.core.not(inst_17691);
var inst_17694 = ((inst_17688) && (inst_17692));
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17694)){
var statearr_17720_17890 = state_17715__$1;
(statearr_17720_17890[(1)] = (41));

} else {
var statearr_17721_17891 = state_17715__$1;
(statearr_17721_17891[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (27))){
var inst_17612 = (state_17715[(14)]);
var state_17715__$1 = state_17715;
var statearr_17722_17892 = state_17715__$1;
(statearr_17722_17892[(2)] = inst_17612);

(statearr_17722_17892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (1))){
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(2),_EQ__GT_args_EQ_);
} else {
if((state_val_17716 === (24))){
var state_17715__$1 = state_17715;
var statearr_17723_17893 = state_17715__$1;
(statearr_17723_17893[(2)] = census.wmsAPI.core.pathcache17581);

(statearr_17723_17893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (39))){
var inst_17664 = (state_17715[(15)]);
var state_17715__$1 = state_17715;
var statearr_17724_17894 = state_17715__$1;
(statearr_17724_17894[(2)] = inst_17664);

(statearr_17724_17894[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (46))){
var inst_17705 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17725_17895 = state_17715__$1;
(statearr_17725_17895[(2)] = inst_17705);

(statearr_17725_17895[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (4))){
var inst_17535 = (state_17715[(16)]);
var inst_17547 = inst_17535;
var inst_17548 = (0);
var state_17715__$1 = (function (){var statearr_17726 = state_17715;
(statearr_17726[(9)] = inst_17548);

(statearr_17726[(10)] = inst_17547);

return statearr_17726;
})();
var statearr_17727_17898 = state_17715__$1;
(statearr_17727_17898[(2)] = null);

(statearr_17727_17898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (15))){
var inst_17552 = (state_17715[(7)]);
var inst_17570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17552);
var state_17715__$1 = state_17715;
var statearr_17729_17900 = state_17715__$1;
(statearr_17729_17900[(2)] = inst_17570);

(statearr_17729_17900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (21))){
var inst_17709 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17731_17902 = state_17715__$1;
(statearr_17731_17902[(2)] = inst_17709);

(statearr_17731_17902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (31))){
var inst_17635 = (state_17715[(2)]);
var inst_17636 = com.rpl.specter.impl.cached_path_info_precompiled(inst_17635);
var inst_17637 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_17635);
var state_17715__$1 = (function (){var statearr_17732 = state_17715;
(statearr_17732[(17)] = inst_17636);

return statearr_17732;
})();
if(cljs.core.truth_(inst_17637)){
var statearr_17733_17904 = state_17715__$1;
(statearr_17733_17904[(1)] = (32));

} else {
var statearr_17734_17905 = state_17715__$1;
(statearr_17734_17905[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (32))){
var inst_17636 = (state_17715[(17)]);
var inst_17639 = cljs.core.PersistentVector.EMPTY;
var inst_17640 = (inst_17636.cljs$core$IFn$_invoke$arity$1 ? inst_17636.cljs$core$IFn$_invoke$arity$1(inst_17639) : inst_17636.call(null,inst_17639));
var state_17715__$1 = state_17715;
var statearr_17735_17906 = state_17715__$1;
(statearr_17735_17906[(2)] = inst_17640);

(statearr_17735_17906[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (40))){
var inst_17643 = (state_17715[(18)]);
var inst_17619 = (state_17715[(19)]);
var inst_17645 = (state_17715[(20)]);
var inst_17575 = (state_17715[(21)]);
var inst_17644 = (state_17715[(22)]);
var inst_17577 = (state_17715[(12)]);
var inst_17620 = (state_17715[(23)]);
var inst_17547 = (state_17715[(10)]);
var inst_17673 = (state_17715[(2)]);
var inst_17674 = com.rpl.specter.impl.do_compiled_traverse(inst_17673,inst_17577);
var inst_17675 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_17645,inst_17674);
var inst_17676 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_17677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17678 = [inst_17575];
var inst_17679 = (new cljs.core.PersistentVector(null,1,(5),inst_17677,inst_17678,null));
var inst_17680 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_17676,inst_17679);
var inst_17681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(inst_17644,inst_17675,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_17680], 0));
var inst_17682 = com.rpl.specter.impl.compiled_setval_STAR_(inst_17643,inst_17681,inst_17547);
var inst_17683 = com.rpl.specter.impl.compiled_transform_STAR_(inst_17619,inst_17620,inst_17682);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17715__$1,(22),_EQ_args_EQ__GT_,inst_17683);
} else {
if((state_val_17716 === (33))){
var inst_17636 = (state_17715[(17)]);
var state_17715__$1 = state_17715;
var statearr_17741_17908 = state_17715__$1;
(statearr_17741_17908[(2)] = inst_17636);

(statearr_17741_17908[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (13))){
var state_17715__$1 = state_17715;
var statearr_17744_17909 = state_17715__$1;
(statearr_17744_17909[(2)] = false);

(statearr_17744_17909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (22))){
var inst_17536 = (state_17715[(8)]);
var inst_17685 = (state_17715[(2)]);
var inst_17686 = cljs.core.async.close_BANG_(inst_17536);
var state_17715__$1 = (function (){var statearr_17745 = state_17715;
(statearr_17745[(24)] = inst_17685);

return statearr_17745;
})();
var statearr_17746_17910 = state_17715__$1;
(statearr_17746_17910[(2)] = inst_17686);

(statearr_17746_17910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (36))){
var state_17715__$1 = state_17715;
var statearr_17747_17911 = state_17715__$1;
(statearr_17747_17911[(2)] = census.wmsAPI.core.pathcache17646);

(statearr_17747_17911[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (41))){
var inst_17535 = (state_17715[(16)]);
var inst_17548 = (state_17715[(9)]);
var inst_17696 = (inst_17548 + (1));
var inst_17547 = inst_17535;
var inst_17548__$1 = inst_17696;
var state_17715__$1 = (function (){var statearr_17748 = state_17715;
(statearr_17748[(9)] = inst_17548__$1);

(statearr_17748[(10)] = inst_17547);

return statearr_17748;
})();
var statearr_17749_17915 = state_17715__$1;
(statearr_17749_17915[(2)] = null);

(statearr_17749_17915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (43))){
var inst_17707 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17750_17916 = state_17715__$1;
(statearr_17750_17916[(2)] = inst_17707);

(statearr_17750_17916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (29))){
var inst_17626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17627 = [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)];
var inst_17628 = (new cljs.core.PersistentVector(null,1,(5),inst_17626,inst_17627,null));
var inst_17629 = cljs.core.PersistentVector.EMPTY;
var inst_17630 = cljs.core.PersistentVector.EMPTY;
var inst_17631 = com.rpl.specter.impl.magic_precompilation(inst_17628,"census.wmsAPI.core",inst_17629,inst_17630);
var inst_17632 = census.wmsAPI.core.pathcache17621 = inst_17631;
var state_17715__$1 = (function (){var statearr_17758 = state_17715;
(statearr_17758[(25)] = inst_17632);

return statearr_17758;
})();
var statearr_17759_17926 = state_17715__$1;
(statearr_17759_17926[(2)] = inst_17631);

(statearr_17759_17926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (44))){
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17715__$1,(47),_EQ_args_EQ__GT_,"No FIPS (Census geocodes) found for given arguments");
} else {
if((state_val_17716 === (6))){
var inst_17536 = (state_17715[(8)]);
var inst_17542 = (state_17715[(2)]);
var inst_17543 = cljs.core.async.close_BANG_(inst_17536);
var state_17715__$1 = (function (){var statearr_17760 = state_17715;
(statearr_17760[(26)] = inst_17542);

return statearr_17760;
})();
var statearr_17761_17930 = state_17715__$1;
(statearr_17761_17930[(2)] = inst_17543);

(statearr_17761_17930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (28))){
var inst_17573 = (state_17715[(27)]);
var inst_17535 = (state_17715[(16)]);
var inst_17536 = (state_17715[(8)]);
var inst_17575 = (state_17715[(21)]);
var inst_17577 = (state_17715[(12)]);
var inst_17574 = (state_17715[(13)]);
var inst_17548 = (state_17715[(9)]);
var inst_17547 = (state_17715[(10)]);
var inst_17619 = (state_17715[(2)]);
var inst_17620 = (function (){var args_in = inst_17535;
var _EQ_res_EQ_ = inst_17536;
var args = inst_17547;
var idx = inst_17548;
var map__17551 = inst_17573;
var layers = inst_17574;
var sub_level = inst_17575;
var res = inst_17577;
return ((function (args_in,_EQ_res_EQ_,args,idx,map__17551,layers,sub_level,res,inst_17573,inst_17535,inst_17536,inst_17575,inst_17577,inst_17574,inst_17548,inst_17547,inst_17619,state_val_17716,c__3820__auto__){
return (function (p1__17526_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__17526_SHARP_);
});
;})(args_in,_EQ_res_EQ_,args,idx,map__17551,layers,sub_level,res,inst_17573,inst_17535,inst_17536,inst_17575,inst_17577,inst_17574,inst_17548,inst_17547,inst_17619,state_val_17716,c__3820__auto__))
})();
var inst_17624 = (census.wmsAPI.core.pathcache17621 == null);
var state_17715__$1 = (function (){var statearr_17762 = state_17715;
(statearr_17762[(19)] = inst_17619);

(statearr_17762[(23)] = inst_17620);

return statearr_17762;
})();
if(cljs.core.truth_(inst_17624)){
var statearr_17763_17935 = state_17715__$1;
(statearr_17763_17935[(1)] = (29));

} else {
var statearr_17764_17936 = state_17715__$1;
(statearr_17764_17936[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (25))){
var inst_17611 = (state_17715[(2)]);
var inst_17612 = com.rpl.specter.impl.cached_path_info_precompiled(inst_17611);
var inst_17613 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_17611);
var state_17715__$1 = (function (){var statearr_17796 = state_17715;
(statearr_17796[(14)] = inst_17612);

return statearr_17796;
})();
if(cljs.core.truth_(inst_17613)){
var statearr_17797_17937 = state_17715__$1;
(statearr_17797_17937[(1)] = (26));

} else {
var statearr_17798_17938 = state_17715__$1;
(statearr_17798_17938[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (34))){
var inst_17643 = (state_17715[(2)]);
var inst_17644 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_17645 = linked.core.map.cljs$core$IFn$_invoke$arity$0();
var inst_17649 = (census.wmsAPI.core.pathcache17646 == null);
var state_17715__$1 = (function (){var statearr_17799 = state_17715;
(statearr_17799[(18)] = inst_17643);

(statearr_17799[(20)] = inst_17645);

(statearr_17799[(22)] = inst_17644);

return statearr_17799;
})();
if(cljs.core.truth_(inst_17649)){
var statearr_17800_17939 = state_17715__$1;
(statearr_17800_17939[(1)] = (35));

} else {
var statearr_17801_17940 = state_17715__$1;
(statearr_17801_17940[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (17))){
var inst_17573 = (state_17715[(27)]);
var inst_17536 = (state_17715[(8)]);
var inst_17573__$1 = (state_17715[(2)]);
var inst_17574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17573__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var inst_17575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17573__$1,new cljs.core.Keyword(null,"sub-level","sub-level",368751408));
var state_17715__$1 = (function (){var statearr_17802 = state_17715;
(statearr_17802[(27)] = inst_17573__$1);

(statearr_17802[(21)] = inst_17575);

(statearr_17802[(13)] = inst_17574);

return statearr_17802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(18),inst_17536);
} else {
if((state_val_17716 === (3))){
var inst_17535 = (state_17715[(16)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17715__$1,(6),_EQ_args_EQ__GT_,inst_17535);
} else {
if((state_val_17716 === (12))){
var state_17715__$1 = state_17715;
var statearr_17803_17944 = state_17715__$1;
(statearr_17803_17944[(2)] = true);

(statearr_17803_17944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (2))){
var inst_17535 = (state_17715[(16)]);
var inst_17535__$1 = (state_17715[(2)]);
var inst_17536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17537 = census.wmsAPI.core.wms_engage_QMARK_(inst_17535__$1);
var inst_17538 = (!(inst_17537));
var state_17715__$1 = (function (){var statearr_17804 = state_17715;
(statearr_17804[(16)] = inst_17535__$1);

(statearr_17804[(8)] = inst_17536);

return statearr_17804;
})();
if(inst_17538){
var statearr_17805_17949 = state_17715__$1;
(statearr_17805_17949[(1)] = (3));

} else {
var statearr_17806_17950 = state_17715__$1;
(statearr_17806_17950[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (23))){
var inst_17586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17587 = [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)];
var inst_17588 = (new cljs.core.PersistentVector(null,1,(5),inst_17586,inst_17587,null));
var inst_17605 = cljs.core.PersistentVector.EMPTY;
var inst_17606 = cljs.core.PersistentVector.EMPTY;
var inst_17607 = com.rpl.specter.impl.magic_precompilation(inst_17588,"census.wmsAPI.core",inst_17605,inst_17606);
var inst_17608 = census.wmsAPI.core.pathcache17581 = inst_17607;
var state_17715__$1 = (function (){var statearr_17807 = state_17715;
(statearr_17807[(28)] = inst_17608);

return statearr_17807;
})();
var statearr_17808_17957 = state_17715__$1;
(statearr_17808_17957[(2)] = inst_17607);

(statearr_17808_17957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (47))){
var inst_17536 = (state_17715[(8)]);
var inst_17701 = (state_17715[(2)]);
var inst_17702 = cljs.core.async.close_BANG_(inst_17536);
var state_17715__$1 = (function (){var statearr_17809 = state_17715;
(statearr_17809[(29)] = inst_17701);

return statearr_17809;
})();
var statearr_17810_17958 = state_17715__$1;
(statearr_17810_17958[(2)] = inst_17702);

(statearr_17810_17958[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (35))){
var inst_17651 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17652 = new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)]));
var inst_17653 = new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null);
var inst_17654 = com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,inst_17652,inst_17653);
var inst_17655 = [inst_17654];
var inst_17656 = (new cljs.core.PersistentVector(null,1,(5),inst_17651,inst_17655,null));
var inst_17657 = cljs.core.PersistentVector.EMPTY;
var inst_17658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null);
var inst_17659 = com.rpl.specter.impl.magic_precompilation(inst_17656,"census.wmsAPI.core",inst_17657,inst_17658);
var inst_17660 = census.wmsAPI.core.pathcache17646 = inst_17659;
var state_17715__$1 = (function (){var statearr_17811 = state_17715;
(statearr_17811[(30)] = inst_17660);

return statearr_17811;
})();
var statearr_17812_17962 = state_17715__$1;
(statearr_17812_17962[(2)] = inst_17659);

(statearr_17812_17962[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (19))){
var inst_17584 = (census.wmsAPI.core.pathcache17581 == null);
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17584)){
var statearr_17813_17963 = state_17715__$1;
(statearr_17813_17963[(1)] = (23));

} else {
var statearr_17814_17964 = state_17715__$1;
(statearr_17814_17964[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (11))){
var inst_17568 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17568)){
var statearr_17815_17965 = state_17715__$1;
(statearr_17815_17965[(1)] = (15));

} else {
var statearr_17816_17966 = state_17715__$1;
(statearr_17816_17966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (9))){
var inst_17552 = (state_17715[(7)]);
var inst_17557 = inst_17552.cljs$lang$protocol_mask$partition0$;
var inst_17558 = (inst_17557 & (64));
var inst_17559 = inst_17552.cljs$core$ISeq$;
var inst_17560 = (cljs.core.PROTOCOL_SENTINEL === inst_17559);
var inst_17561 = ((inst_17558) || (inst_17560));
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17561)){
var statearr_17817_17967 = state_17715__$1;
(statearr_17817_17967[(1)] = (12));

} else {
var statearr_17818_17968 = state_17715__$1;
(statearr_17818_17968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (5))){
var inst_17713 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17715__$1,inst_17713);
} else {
if((state_val_17716 === (14))){
var inst_17565 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17819_17994 = state_17715__$1;
(statearr_17819_17994[(2)] = inst_17565);

(statearr_17819_17994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (45))){
var state_17715__$1 = state_17715;
var statearr_17820_18000 = state_17715__$1;
(statearr_17820_18000[(2)] = null);

(statearr_17820_18000[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (26))){
var inst_17612 = (state_17715[(14)]);
var inst_17615 = cljs.core.PersistentVector.EMPTY;
var inst_17616 = (inst_17612.cljs$core$IFn$_invoke$arity$1 ? inst_17612.cljs$core$IFn$_invoke$arity$1(inst_17615) : inst_17612.call(null,inst_17615));
var state_17715__$1 = state_17715;
var statearr_17821_18008 = state_17715__$1;
(statearr_17821_18008[(2)] = inst_17616);

(statearr_17821_18008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (16))){
var inst_17552 = (state_17715[(7)]);
var state_17715__$1 = state_17715;
var statearr_17822_18014 = state_17715__$1;
(statearr_17822_18014[(2)] = inst_17552);

(statearr_17822_18014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (38))){
var inst_17664 = (state_17715[(15)]);
var inst_17667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17668 = [com.rpl.specter.MAP_VALS];
var inst_17669 = (new cljs.core.PersistentVector(null,1,(5),inst_17667,inst_17668,null));
var inst_17670 = (inst_17664.cljs$core$IFn$_invoke$arity$1 ? inst_17664.cljs$core$IFn$_invoke$arity$1(inst_17669) : inst_17664.call(null,inst_17669));
var state_17715__$1 = state_17715;
var statearr_17823_18019 = state_17715__$1;
(statearr_17823_18019[(2)] = inst_17670);

(statearr_17823_18019[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (30))){
var state_17715__$1 = state_17715;
var statearr_17824_18026 = state_17715__$1;
(statearr_17824_18026[(2)] = census.wmsAPI.core.pathcache17621);

(statearr_17824_18026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (10))){
var state_17715__$1 = state_17715;
var statearr_17825_18030 = state_17715__$1;
(statearr_17825_18030[(2)] = false);

(statearr_17825_18030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (18))){
var inst_17577 = (state_17715[(12)]);
var inst_17577__$1 = (state_17715[(2)]);
var inst_17578 = cljs.core.empty_QMARK_(inst_17577__$1);
var inst_17579 = (!(inst_17578));
var state_17715__$1 = (function (){var statearr_17826 = state_17715;
(statearr_17826[(12)] = inst_17577__$1);

return statearr_17826;
})();
if(inst_17579){
var statearr_17827_18040 = state_17715__$1;
(statearr_17827_18040[(1)] = (19));

} else {
var statearr_17828_18041 = state_17715__$1;
(statearr_17828_18041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (42))){
var state_17715__$1 = state_17715;
var statearr_17829_18046 = state_17715__$1;
(statearr_17829_18046[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (37))){
var inst_17663 = (state_17715[(2)]);
var inst_17664 = com.rpl.specter.impl.cached_path_info_precompiled(inst_17663);
var inst_17665 = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(inst_17663);
var state_17715__$1 = (function (){var statearr_17831 = state_17715;
(statearr_17831[(15)] = inst_17664);

return statearr_17831;
})();
if(cljs.core.truth_(inst_17665)){
var statearr_17832_18053 = state_17715__$1;
(statearr_17832_18053[(1)] = (38));

} else {
var statearr_17833_18055 = state_17715__$1;
(statearr_17833_18055[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (8))){
var inst_17711 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17834_18061 = state_17715__$1;
(statearr_17834_18061[(2)] = inst_17711);

(statearr_17834_18061[(1)] = (5));


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
});})(c__3820__auto__))
;
return ((function (switch__3728__auto__,c__3820__auto__){
return (function() {
var census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto__ = null;
var census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto____0 = (function (){
var statearr_17835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17835[(0)] = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto__);

(statearr_17835[(1)] = (1));

return statearr_17835;
});
var census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto____1 = (function (state_17715){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_17715);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e17836){if((e17836 instanceof Object)){
var ex__3732__auto__ = e17836;
var statearr_17837_18072 = state_17715;
(statearr_17837_18072[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18079 = state_17715;
state_17715 = G__18079;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto__ = function(state_17715){
switch(arguments.length){
case 0:
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto____0.call(this);
case 1:
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto____1.call(this,state_17715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto____0;
census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto____1;
return census$wmsAPI$core$_EQ__GT_args_EQ_GIS_EQ_args_EQ__GT__$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__))
})();
var state__3822__auto__ = (function (){var statearr_17838 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_17838[(6)] = c__3820__auto__);

return statearr_17838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__))
);

return c__3820__auto__;
});
});
/**
 * Provides a syncronous input to a function that accepts a channel for args
 *   and calls the Census WMS for geocoding; providing the results to the channel
 */
census.wmsAPI.core.I__LT_wms_EQ_I_EQ_ = (function census$wmsAPI$core$I__LT_wms_EQ_I_EQ_($g$){
return (function (I,_EQ_args_EQ__GT_){
var G__17840 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.__GT_args(I)], null));
var G__17841 = _EQ_args_EQ__GT_;
var fexpr__17839 = census.wmsAPI.core._EQ__GT_args_EQ_GIS_EQ_args_EQ__GT_($g$);
return (fexpr__17839.cljs$core$IFn$_invoke$arity$2 ? fexpr__17839.cljs$core$IFn$_invoke$arity$2(G__17840,G__17841) : fexpr__17839.call(null,G__17840,G__17841));
});
});

//# sourceMappingURL=census.wmsAPI.core.js.map
