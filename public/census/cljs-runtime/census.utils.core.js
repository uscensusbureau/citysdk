goog.provide('census.utils.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('cljs_promises.async');
goog.require('cuerdas.core');
goog.require('oops.core');
goog.require('cljs.reader');
goog.require('linked.core');
goog.require('com.rpl.specter');
census.utils.core.$geoKeyMap$ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
census.utils.core.URL_STATS = "https://api.census.gov/data/";
census.utils.core.URL_WMS = "https://tigerweb.geo.census.gov/arcgis/rest/services/";
census.utils.core.URL_GEOJSON = "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON";
census.utils.core.URL_GEOKEYMAP = "https://raw.githubusercontent.com/loganpowell/census-geojson/master/src/configs/geojson/index.edn";
census.utils.core.base_url_database = "TODO?";
census.utils.core.vec_type = cljs.core.PersistentVector;
census.utils.core.amap_type = cljs.core.PersistentArrayMap;
census.utils.core.err_type = Error;
census.utils.core.error = (function census$utils$core$error(e){
return (new Error(e));
});
/**
 * From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)
 */
census.utils.core.MAP_NODES = (function (){var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__15808__auto__ = census.utils.core.pathcache17284;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17285 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),"com/rpl/specter.cljc",23,1,1348,1348,cljs.core.List.EMPTY,"Like cond-path, but with if semantics.",(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"if-path","if-path",314968895,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",20,1,2137,2137,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",((cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),"com/rpl/specter.cljc",34,1,1438,1438,cljs.core.List.EMPTY,"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)])),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))], null),"census.utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
census.utils.core.pathcache17284 = info17285;

return info17285;
})():info__15808__auto__);
var precompiled17286 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17287 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.map_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.MAP_VALS,p], null);
return (precompiled17286.cljs$core$IFn$_invoke$arity$1 ? precompiled17286.cljs$core$IFn$_invoke$arity$1(G__17287) : precompiled17286.call(null,G__17287));
} else {
return precompiled17286;
}
})());

return p;
})();
/**
 * Recursively reverses the order of the key/value _pairs_ inside a map
 */
census.utils.core.deep_reverse_MAP_NODES = (function census$utils$core$deep_reverse_MAP_NODES(m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17289;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17290 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(census.utils.core.MAP_NODES,new cljs.core.Var(function(){return census.utils.core.MAP_NODES;},new cljs.core.Symbol("census.utils.core","MAP-NODES","census.utils.core/MAP-NODES",-52667527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"census.utils.core","census.utils.core",-577425186,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"census/utils/core.cljs",15,1,34,34,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(census.utils.core.MAP_NODES)?census.utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
census.utils.core.pathcache17289 = info17290;

return info17290;
})():info__15808__auto__);
var precompiled17291 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.MAP_NODES], null);
return (precompiled17291.cljs$core$IFn$_invoke$arity$1 ? precompiled17291.cljs$core$IFn$_invoke$arity$1(G__17292) : precompiled17291.call(null,G__17292));
} else {
return precompiled17291;
}
})(),(function (p1__17288_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(p1__17288_SHARP_));
}),m);
});
/**
 * 
 *   Recursively converts any map into a `linked` map (preserves insertion order)
 *   TODO - Testing:
 *   [core.async](https://github.com/clojure/core.async/blob/master/src/test/cljs/cljs/core/async/tests.cljs)
 *   
 */
census.utils.core.deep_linked_map = (function census$utils$core$deep_linked_map(m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17297;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17298 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(census.utils.core.MAP_NODES,new cljs.core.Var(function(){return census.utils.core.MAP_NODES;},new cljs.core.Symbol("census.utils.core","MAP-NODES","census.utils.core/MAP-NODES",-52667527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"census.utils.core","census.utils.core",-577425186,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"census/utils/core.cljs",15,1,34,34,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(census.utils.core.MAP_NODES)?census.utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
census.utils.core.pathcache17297 = info17298;

return info17298;
})():info__15808__auto__);
var precompiled17299 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.MAP_NODES], null);
return (precompiled17299.cljs$core$IFn$_invoke$arity$1 ? precompiled17299.cljs$core$IFn$_invoke$arity$1(G__17300) : precompiled17299.call(null,G__17300));
} else {
return precompiled17299;
}
})(),(function (p1__17293_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.core.map.cljs$core$IFn$_invoke$arity$0(),cljs.core.vec(p1__17293_SHARP_));
}),m);
});
/**
 * 
 *   Applies a function over the keys in a provided map
 *   
 */
census.utils.core.map_rename_keys = (function census$utils$core$map_rename_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17301;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17302 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"com/rpl/specter.cljc",11,1,712,715,cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null)], null));
census.utils.core.pathcache17301 = info17302;

return info17302;
})():info__15808__auto__);
var precompiled17303 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null);
return (precompiled17303.cljs$core$IFn$_invoke$arity$1 ? precompiled17303.cljs$core$IFn$_invoke$arity$1(G__17305) : precompiled17303.call(null,G__17305));
} else {
return precompiled17303;
}
})(),f,m);
});
/**
 * 
 *   Applies a function to all values of a provided map
 *   
 */
census.utils.core.map_over_keys = (function census$utils$core$map_over_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17308;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17309 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null));
census.utils.core.pathcache17308 = info17309;

return info17309;
})():info__15808__auto__);
var precompiled17310 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled17310.cljs$core$IFn$_invoke$arity$1 ? precompiled17310.cljs$core$IFn$_invoke$arity$1(G__17311) : precompiled17310.call(null,G__17311));
} else {
return precompiled17310;
}
})(),f,m);
});
/**
 * 
 *   Translates Clojure (edn) key-forms of geographic identifyers into strings,
 *   which are valid as parameters of a Census Data API URL construction.
 *   
 */
census.utils.core.keys__GT_strs = (function census$utils$core$keys__GT_strs(s){
return cuerdas.core.replace(s,/-_|_|!|-/,new cljs.core.PersistentArrayMap(null, 4, ["-_"," (","_",")","!","/","-"," "], null));
});
/**
 * 
 *   Translates strings valid as parameters of a Census Data API URL construction
 *   to Clojure (edn) key-forms of geographic identifyers. Also valid URL components
 *   of the raw.github directory structure.
 *   
 */
census.utils.core.strs__GT_keys = (function census$utils$core$strs__GT_keys(s){
return cuerdas.core.replace(s,/ \(|\)|\/| /,new cljs.core.PersistentArrayMap(null, 4, [" (","-_",")","_","/","!"," ","-"], null));
});
/**
 * 
 *   Throws an error... meant to be used in transducer `comp`osed with another
 *   transducer or as `(map u/throw-error)`.
 *   
 */
census.utils.core.throw_err = (function census$utils$core$throw_err(x){
if((x instanceof census.utils.core.err_type)){
throw x;
} else {
return x;
}
});
/**
 * 
 *   Takes two initial inputs: the response format desired and an error message,
 *   which is logged in console for debugging. Takes three channel inputs
 *   1: takes a =url= channel
 *   2: takes a =response= channel.
 *   3: takes an =err= channel (for propogation/coordination)
 *   Once first created (with format and err-log-msg) the following channel fns
 *   are wrapped with some local state that stores the last url sent in, the last
 *   response put out and any prior errors.
 *   If url passed in === the last url (cached in an `atom`), the
 *   function pumps a cached response (`atom`) instead of - in the case the
 *   url argument =/= last url - calling a cljs-ajax `GET` request.
 *   Any new payloads received by `GET` will replace the last response `atom` via
 *   `reset!` *and* be put into the out-bound =response= chan.
 *   
 */
census.utils.core.$GET$ = (function census$utils$core$$GET$(format,err_log_msg){
var $url$ = cljs.core.volatile_BANG_("");
var $res$ = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var $err$ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return ((function ($url$,$res$,$err$){
return (function() {
var G__17527 = null;
var G__17527__2 = (function (_EQ_url_EQ_,_EQ_res_EQ_){
var G__17313 = _EQ_url_EQ_;
var G__17314 = _EQ_res_EQ_;
var G__17315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err));
var fexpr__17312 = (census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2 ? census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2(format,err_log_msg) : census.utils.core.$GET$.call(null,format,err_log_msg));
return (fexpr__17312.cljs$core$IFn$_invoke$arity$3 ? fexpr__17312.cljs$core$IFn$_invoke$arity$3(G__17313,G__17314,G__17315) : fexpr__17312.call(null,G__17313,G__17314,G__17315));
});
var G__17527__3 = (function (_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_){
var fexpr__17316 = (census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2 ? census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2(format,err_log_msg) : census.utils.core.$GET$.call(null,format,err_log_msg));
return (fexpr__17316.cljs$core$IFn$_invoke$arity$4 ? fexpr__17316.cljs$core$IFn$_invoke$arity$4(_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,false) : fexpr__17316.call(null,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,false));
});
var G__17527__4 = (function (_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_url_EQ_,((function ($url$,$res$,$err$){
return (function (url){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,cljs.core.deref($url$))) && ((!(cljs.core.empty_QMARK_(cljs.core.deref($err$))))))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_log_msg], 0));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_err_EQ_,cljs.core.deref($err$));

return cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,cljs.core.deref($url$))) && (cljs.core.empty_QMARK_(cljs.core.deref($err$))))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Getting data from cache:"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.deref($res$));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Getting data from source:"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));

var cfg = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function ($url$,$res$,$err$){
return (function (p__17317){
var map__17318 = p__17317;
var map__17318__$1 = (((((!((map__17318 == null))))?(((((map__17318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17318):map__17318);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17318__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17318__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_log_msg], 0));

cljs.core.vreset_BANG_($url$,url);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_err_EQ_,cljs.core.vreset_BANG_($err$,["ERROR status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)," for URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
});})($url$,$res$,$err$))
], null);
var G__17320 = format;
var G__17320__$1 = (((G__17320 instanceof cljs.core.Keyword))?G__17320.fqn:null);
switch (G__17320__$1) {
case "json":
var json = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__17320,G__17320__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,res));
});})(G__17320,G__17320__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));

break;
case "edn":
var edn = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__17320,G__17320__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(res)));
});})(G__17320,G__17320__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0));

break;
case "raw":
var raw = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__17320,G__17320__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,res));
});})(G__17320,G__17320__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17320__$1)].join('')));

}

}
}
});})($url$,$res$,$err$))
);
});
G__17527 = function(_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_){
switch(arguments.length){
case 2:
return G__17527__2.call(this,_EQ_url_EQ_,_EQ_res_EQ_);
case 3:
return G__17527__3.call(this,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_);
case 4:
return G__17527__4.call(this,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17527.cljs$core$IFn$_invoke$arity$2 = G__17527__2;
G__17527.cljs$core$IFn$_invoke$arity$3 = G__17527__3;
G__17527.cljs$core$IFn$_invoke$arity$4 = G__17527__4;
return G__17527;
})()
;})($url$,$res$,$err$))
});
census.utils.core.$GET$_json = census.utils.core.$GET$(new cljs.core.Keyword(null,"json","json",1279968570),"Invalid JSON request...");
census.utils.core.$GET$_edn = census.utils.core.$GET$(new cljs.core.Keyword(null,"edn","edn",1317840885),"Invalid EDN request...");
/**
 * 
 *   Can only be used as the last wrapper as the callback. Function can't be
 *   be coordinated with any other channel (go blocks don't interpret nested
 *   anonymous functions (the callback)).
 * 
 *   Takes a function (f =O=) that pumps output into a channel and converts it to a
 *   fn with a callback API (f cb). If buffer provided, passes that to the internal
 *   `chan`. If buffer and transducer provided, passes those in accordingly.
 * 
 *   Closes =O= and =E= chans on completion
 *   
 */
census.utils.core._EQ_O_QMARK__GT__cb = (function census$utils$core$_EQ_O_QMARK__GT__cb(f,cb,_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_){
var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__){
return (function (state_17362){
var state_val_17363 = (state_17362[(1)]);
if((state_val_17363 === (7))){
var inst_17335 = (state_17362[(7)]);
var inst_17352 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17335,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_17362__$1 = state_17362;
if(inst_17352){
var statearr_17364_17532 = state_17362__$1;
(statearr_17364_17532[(1)] = (9));

} else {
var statearr_17365_17533 = state_17362__$1;
(statearr_17365_17533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (1))){
var inst_17321 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_) : f.call(null,_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_));
var inst_17329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17330 = [_EQ_O_EQ_,_EQ_E_EQ_];
var inst_17331 = (new cljs.core.PersistentVector(null,2,(5),inst_17329,inst_17330,null));
var state_17362__$1 = (function (){var statearr_17366 = state_17362;
(statearr_17366[(8)] = inst_17321);

return statearr_17366;
})();
return cljs.core.async.ioc_alts_BANG_(state_17362__$1,(2),inst_17331);
} else {
if((state_val_17363 === (4))){
var inst_17335 = (state_17362[(7)]);
var inst_17344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17335,_EQ_E_EQ_);
var state_17362__$1 = state_17362;
if(inst_17344){
var statearr_17367_17751 = state_17362__$1;
(statearr_17367_17751[(1)] = (6));

} else {
var statearr_17368_17757 = state_17362__$1;
(statearr_17368_17757[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (6))){
var inst_17333 = (state_17362[(9)]);
var inst_17349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333,(0),null);
var inst_17350 = (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(inst_17349,null) : cb.call(null,inst_17349,null));
var state_17362__$1 = state_17362;
var statearr_17369_17765 = state_17362__$1;
(statearr_17369_17765[(2)] = inst_17350);

(statearr_17369_17765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (3))){
var inst_17333 = (state_17362[(9)]);
var inst_17341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333,(0),null);
var inst_17342 = (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(null,inst_17341) : cb.call(null,null,inst_17341));
var state_17362__$1 = state_17362;
var statearr_17370_17766 = state_17362__$1;
(statearr_17370_17766[(2)] = inst_17342);

(statearr_17370_17766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (2))){
var inst_17335 = (state_17362[(7)]);
var inst_17333 = (state_17362[(9)]);
var inst_17333__$1 = (state_17362[(2)]);
var inst_17334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333__$1,(0),null);
var inst_17335__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17333__$1,(1),null);
var inst_17336 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17335__$1,_EQ_O_EQ_);
var state_17362__$1 = (function (){var statearr_17371 = state_17362;
(statearr_17371[(7)] = inst_17335__$1);

(statearr_17371[(9)] = inst_17333__$1);

(statearr_17371[(10)] = inst_17334);

return statearr_17371;
})();
if(inst_17336){
var statearr_17372_17767 = state_17362__$1;
(statearr_17372_17767[(1)] = (3));

} else {
var statearr_17373_17768 = state_17362__$1;
(statearr_17373_17768[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (11))){
var inst_17356 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17374_17774 = state_17362__$1;
(statearr_17374_17774[(2)] = inst_17356);

(statearr_17374_17774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (9))){
var inst_17334 = (state_17362[(10)]);
var state_17362__$1 = state_17362;
var statearr_17375_17775 = state_17362__$1;
(statearr_17375_17775[(2)] = inst_17334);

(statearr_17375_17775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (5))){
var inst_17360 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17362__$1,inst_17360);
} else {
if((state_val_17363 === (10))){
var state_17362__$1 = state_17362;
var statearr_17376_17776 = state_17362__$1;
(statearr_17376_17776[(2)] = null);

(statearr_17376_17776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (8))){
var inst_17358 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17377_17777 = state_17362__$1;
(statearr_17377_17777[(2)] = inst_17358);

(statearr_17377_17777[(1)] = (5));


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
});})(c__3820__auto__))
;
return ((function (switch__3728__auto__,c__3820__auto__){
return (function() {
var census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto__ = null;
var census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto____0 = (function (){
var statearr_17378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17378[(0)] = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto__);

(statearr_17378[(1)] = (1));

return statearr_17378;
});
var census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto____1 = (function (state_17362){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_17362);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e17379){if((e17379 instanceof Object)){
var ex__3732__auto__ = e17379;
var statearr_17380_17778 = state_17362;
(statearr_17380_17778[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17779 = state_17362;
state_17362 = G__17779;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto__ = function(state_17362){
switch(arguments.length){
case 0:
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto____0.call(this);
case 1:
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto____1.call(this,state_17362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto____0;
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto____1;
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__))
})();
var state__3822__auto__ = (function (){var statearr_17381 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_17381[(6)] = c__3820__auto__);

return statearr_17381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__))
);

return c__3820__auto__;
});
census.utils.core.__GT_args = (function census$utils$core$__GT_args(args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(args),census.utils.core.amap_type)){
var map__17382 = args;
var map__17382__$1 = (((((!((map__17382 == null))))?(((((map__17382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17382):map__17382);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17382__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17384;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17385 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vintage","vintage",818195578)], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
census.utils.core.pathcache17384 = info17385;

return info17385;
})():info__15808__auto__);
var precompiled17386 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17387 = cljs.core.PersistentVector.EMPTY;
return (precompiled17386.cljs$core$IFn$_invoke$arity$1 ? precompiled17386.cljs$core$IFn$_invoke$arity$1(G__17387) : precompiled17386.call(null,G__17387));
} else {
return precompiled17386;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage),args);
} else {
var geoCljs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_17388 = args;
var _STAR_runtime_state_STAR__orig_val__17390 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17391 = oops.state.prepare_state(target_obj_17388,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17391;

try{var next_obj_17389 = ((oops.core.validate_object_access_dynamically(target_obj_17388,(0),"geoHierarchy",true,true,false))?(target_obj_17388["geoHierarchy"]):null);
return next_obj_17389;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17390;
}})());
var vintage = (function (){var target_obj_17392 = args;
var _STAR_runtime_state_STAR__orig_val__17394 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17395 = oops.state.prepare_state(target_obj_17392,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17395;

try{var next_obj_17393 = ((oops.core.validate_object_access_dynamically(target_obj_17392,(0),"vintage",true,true,false))?(target_obj_17392["vintage"]):null);
return next_obj_17393;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17394;
}})();
var geoKeys = census.utils.core.map_rename_keys(census.utils.core.strs__GT_keys,geoCljs);
var target_obj_17396_17780 = args;
var _STAR_runtime_state_STAR__orig_val__17398_17781 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17399_17782 = oops.state.prepare_state(target_obj_17396_17780,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17399_17782;

try{var parent_obj_17397_17783 = target_obj_17396_17780;
if(oops.core.validate_object_access_dynamically(parent_obj_17397_17783,(0),"vintage",true,true,true)){
(parent_obj_17397_17783["vintage"] = cljs.core.clj__GT_js(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17398_17781;
}
var target_obj_17400_17786 = args;
var _STAR_runtime_state_STAR__orig_val__17402_17787 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17403_17788 = oops.state.prepare_state(target_obj_17400_17786,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17403_17788;

try{var parent_obj_17401_17789 = target_obj_17400_17786;
if(oops.core.validate_object_access_dynamically(parent_obj_17401_17789,(0),"geoHierarchy",true,true,true)){
(parent_obj_17401_17789["geoHierarchy"] = cljs.core.clj__GT_js(geoKeys));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17402_17787;
}
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
census.utils.core.args__GT_js = (function census$utils$core$args__GT_js(p__17405){
var map__17406 = p__17405;
var map__17406__$1 = (((((!((map__17406 == null))))?(((((map__17406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17406):map__17406);
var args = map__17406__$1;
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17406__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var geoKeys = census.utils.core.map_rename_keys(((function (map__17406,map__17406__$1,args,geoHierarchy){
return (function (p1__17404_SHARP_){
return census.utils.core.keys__GT_strs(cljs.core.name(p1__17404_SHARP_));
});})(map__17406,map__17406__$1,args,geoHierarchy))
,geoHierarchy);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js(geoKeys)], 0));

return cljs.core.clj__GT_js(com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17408;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17409 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
census.utils.core.pathcache17408 = info17409;

return info17409;
})():info__15808__auto__);
var precompiled17410 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17411 = cljs.core.PersistentVector.EMPTY;
return (precompiled17410.cljs$core$IFn$_invoke$arity$1 ? precompiled17410.cljs$core$IFn$_invoke$arity$1(G__17411) : precompiled17410.call(null,G__17411));
} else {
return precompiled17410;
}
})(),geoKeys,args));
});
/**
 * 
 *   Transducifier wrapper, which takes the seed of a transducer (essential
 *   operation) with a standardized `xf acc this` contract and wraps it in the
 *   necessary boilerplate to correctly function as a stateless transducer.
 * 
 *   Example of tranducer seed with contract required for this wrapper:
 * 
 *   (defn xf-seed-form
 *  [rf acc this]
 *   
 */
census.utils.core.xf_LT__LT_ = (function census$utils$core$xf_LT__LT_(f){
return (function (rf){
return (function() {
var G__17792 = null;
var G__17792__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__17792__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__17792__2 = (function (acc,this$){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(rf,acc,this$) : f.call(null,rf,acc,this$));
});
G__17792 = function(acc,this$){
switch(arguments.length){
case 0:
return G__17792__0.call(this);
case 1:
return G__17792__1.call(this,acc);
case 2:
return G__17792__2.call(this,acc,this$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17792.cljs$core$IFn$_invoke$arity$0 = G__17792__0;
G__17792.cljs$core$IFn$_invoke$arity$1 = G__17792__1;
G__17792.cljs$core$IFn$_invoke$arity$2 = G__17792__2;
return G__17792;
})()
});
});
/**
 * 
 *   Stateful transducifier wrapper, which takes the seed of a transducer (essential
 *   operation) with a standardized `xf acc this` contract and wraps it in the
 *   necessary boilerplate to correctly function as a _stateful_ transducer.
 * 
 *   Only avails a single state container: `state`
 * 
 *   Example of tranducer seed with contract required for this wrapper:
 * 
 *   (defn xf!-seed-form
 *  [state xf acc this]
 *    (let [prev @state]
 *      (if (nil? prev)
 *          (do (vreset! state (vec (map keyword item)))
 *            nil)
 *          (xf acc (zipmap prev (vec item))))))
 *   
 */
census.utils.core.xf_BANG__LT__LT_ = (function census$utils$core$xf_BANG__LT__LT_(f){
return (function (rf){
var state = cljs.core.volatile_BANG_(null);
return ((function (state){
return (function() {
var G__17793 = null;
var G__17793__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__17793__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__17793__2 = (function (acc,this$){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(state,rf,acc,this$) : f.call(null,state,rf,acc,this$));
});
G__17793 = function(acc,this$){
switch(arguments.length){
case 0:
return G__17793__0.call(this);
case 1:
return G__17793__1.call(this,acc);
case 2:
return G__17793__2.call(this,acc,this$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17793.cljs$core$IFn$_invoke$arity$0 = G__17793__0;
G__17793.cljs$core$IFn$_invoke$arity$1 = G__17793__1;
G__17793.cljs$core$IFn$_invoke$arity$2 = G__17793__2;
return G__17793;
})()
;})(state))
});
});
/**
 * 
 *   Transducer, which wraps a transducer to provide the right level of contract
 *   for a core.async chan through which data is not an item, but a collection.
 *   I.e., treating the collection as a single transducible item.
 * 
 *   Uses eduction.
 *   
 */
census.utils.core.educt_LT__LT_ = (function census$utils$core$educt_LT__LT_(xfn){
return (function (rf){
return (function() {
var G__17794 = null;
var G__17794__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__17794__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__17794__2 = (function (acc,coll){
var G__17412 = acc;
var G__17413 = cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xfn,coll], 0));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__17412,G__17413) : rf.call(null,G__17412,G__17413));
});
G__17794 = function(acc,coll){
switch(arguments.length){
case 0:
return G__17794__0.call(this);
case 1:
return G__17794__1.call(this,acc);
case 2:
return G__17794__2.call(this,acc,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17794.cljs$core$IFn$_invoke$arity$0 = G__17794__0;
G__17794.cljs$core$IFn$_invoke$arity$1 = G__17794__1;
G__17794.cljs$core$IFn$_invoke$arity$2 = G__17794__2;
return G__17794;
})()
});
});
/**
 * 
 *   Transducer, which wraps a transducer to provide the right level of contract
 *   for a core.async chan through which data is not an item, but a collection.
 *   I.e., treating the collection as a single transducible item.
 * 
 *   Uses eduction.
 *   
 */
census.utils.core.transduct_LT__LT_ = (function census$utils$core$transduct_LT__LT_(xfn){
return (function (rf){
return (function() {
var G__17795 = null;
var G__17795__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__17795__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__17795__2 = (function (acc,coll){
var G__17414 = acc;
var G__17415 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xfn,cljs.core.conj,coll);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__17414,G__17415) : rf.call(null,G__17414,G__17415));
});
G__17795 = function(acc,coll){
switch(arguments.length){
case 0:
return G__17795__0.call(this);
case 1:
return G__17795__1.call(this,acc);
case 2:
return G__17795__2.call(this,acc,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17795.cljs$core$IFn$_invoke$arity$0 = G__17795__0;
G__17795.cljs$core$IFn$_invoke$arity$1 = G__17795__1;
G__17795.cljs$core$IFn$_invoke$arity$2 = G__17795__2;
return G__17795;
})()
});
});
/**
 * 
 *   Maps a provided function to a specific index + 1 of a provided collection.
 *   
 */
census.utils.core.map_target = (function census$utils$core$map_target(f,target,coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__17416_SHARP_,p2__17417_SHARP_){
if((cljs.core.mod((p1__17416_SHARP_ + (1)),target) === (0))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__17417_SHARP_) : f.call(null,p2__17417_SHARP_));
} else {
return p2__17417_SHARP_;
}
}),coll);
});
/**
 * 
 *   Maps a provided function over a given vector of indeces of a provided
 *   collection.
 *   
 */
census.utils.core.map_target_idcs = (function census$utils$core$map_target_idcs(f,targets,coll){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17418;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17419 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1057,1059,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1102,1102,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"selected?","selected?",898028739,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",10,1,9319,9319,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(targets,new cljs.core.Symbol(null,"targets","targets",-639472363,null))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,728,731,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null))], null)], null),"census.utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"targets","targets",-639472363,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null))),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null));
census.utils.core.pathcache17418 = info17419;

return info17419;
})():info__15808__auto__);
var precompiled17420 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17421 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__17422 = com.rpl.specter.FIRST;
var G__17423 = cljs.core.set(targets);
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17422,G__17423) : com.rpl.specter.selected_QMARK_.call(null,G__17422,G__17423));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,targets,com.rpl.specter.LAST], null);
return (precompiled17420.cljs$core$IFn$_invoke$arity$1 ? precompiled17420.cljs$core$IFn$_invoke$arity$1(G__17421) : precompiled17420.call(null,G__17421));
} else {
return precompiled17420;
}
})(),f,coll);
});
/**
 * 
 *   Maps a provided function over a given range of indeces (vector of beginning
 *   to end) of a provided collection.
 *   
 */
census.utils.core.map_idcs_range = (function census$utils$core$map_idcs_range(f,p__17424,coll){
var vec__17425 = p__17424;
var r_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17425,(0),null);
var r_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17425,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = census.utils.core.pathcache17428;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17429 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1057,1059,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1102,1102,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"selected?","selected?",898028739,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",10,1,9319,9319,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.range,new cljs.core.Var(function(){return cljs.core.range;},new cljs.core.Symbol("cljs.core","range","cljs.core/range",-1421369894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),"cljs/core.cljs",12,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),1,9651,9651,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),"Returns a lazy seq of nums from start (inclusive) to end\n   (exclusive), by step, where start defaults to 0, step to 1,\n   and end to infinity.",(cljs.core.truth_(cljs.core.range)?cljs.core.range.cljs$lang$test:null)])),new cljs.core.Symbol(null,"range","range",-1014743483,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(r_start,new cljs.core.Symbol(null,"r-start","r-start",1011309134,null)),com.rpl.specter.impl.__GT_LocalSym(r_end,new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,728,731,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null))], null)], null),"census.utils.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null));
census.utils.core.pathcache17428 = info17429;

return info17429;
})():info__15808__auto__);
var precompiled17430 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17431 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__17432 = com.rpl.specter.FIRST;
var G__17433 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(r_start,r_end));
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17432,G__17433) : com.rpl.specter.selected_QMARK_.call(null,G__17432,G__17433));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,cljs.core.range,r_start,r_end,com.rpl.specter.LAST], null);
return (precompiled17430.cljs$core$IFn$_invoke$arity$1 ? precompiled17430.cljs$core$IFn$_invoke$arity$1(G__17431) : precompiled17430.call(null,G__17431));
} else {
return precompiled17430;
}
})(),f,coll);
});

//# sourceMappingURL=census.utils.core.js.map
