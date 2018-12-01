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
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__28398__auto__ = census.utils.core.pathcache29874;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29875 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),"com/rpl/specter.cljc",23,1,1348,1348,cljs.core.List.EMPTY,"Like cond-path, but with if semantics.",(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"if-path","if-path",314968895,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",20,1,2137,2137,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",((cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),"com/rpl/specter.cljc",34,1,1438,1438,cljs.core.List.EMPTY,"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)])),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))], null),"census.utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
census.utils.core.pathcache29874 = info29875;

return info29875;
})():info__28398__auto__);
var precompiled29876 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29880 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.map_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.MAP_VALS,p], null);
return (precompiled29876.cljs$core$IFn$_invoke$arity$1 ? precompiled29876.cljs$core$IFn$_invoke$arity$1(G__29880) : precompiled29876.call(null,G__29880));
} else {
return precompiled29876;
}
})());

return p;
})();
/**
 * Recursively reverses the order of the key/value _pairs_ inside a map
 */
census.utils.core.deep_reverse_MAP_NODES = (function census$utils$core$deep_reverse_MAP_NODES(m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache29882;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29883 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(census.utils.core.MAP_NODES,new cljs.core.Var(function(){return census.utils.core.MAP_NODES;},new cljs.core.Symbol("census.utils.core","MAP-NODES","census.utils.core/MAP-NODES",-52667527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"census.utils.core","census.utils.core",-577425186,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"census/utils/core.cljs",15,1,34,34,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(census.utils.core.MAP_NODES)?census.utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
census.utils.core.pathcache29882 = info29883;

return info29883;
})():info__28398__auto__);
var precompiled29884 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.MAP_NODES], null);
return (precompiled29884.cljs$core$IFn$_invoke$arity$1 ? precompiled29884.cljs$core$IFn$_invoke$arity$1(G__29887) : precompiled29884.call(null,G__29887));
} else {
return precompiled29884;
}
})(),(function (p1__29881_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(p1__29881_SHARP_));
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
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache29890;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29891 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(census.utils.core.MAP_NODES,new cljs.core.Var(function(){return census.utils.core.MAP_NODES;},new cljs.core.Symbol("census.utils.core","MAP-NODES","census.utils.core/MAP-NODES",-52667527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"census.utils.core","census.utils.core",-577425186,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"census/utils/core.cljs",15,1,34,34,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(census.utils.core.MAP_NODES)?census.utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
census.utils.core.pathcache29890 = info29891;

return info29891;
})():info__28398__auto__);
var precompiled29892 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.MAP_NODES], null);
return (precompiled29892.cljs$core$IFn$_invoke$arity$1 ? precompiled29892.cljs$core$IFn$_invoke$arity$1(G__29893) : precompiled29892.call(null,G__29893));
} else {
return precompiled29892;
}
})(),(function (p1__29889_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.core.map.cljs$core$IFn$_invoke$arity$0(),cljs.core.vec(p1__29889_SHARP_));
}),m);
});
/**
 * 
 *   Applies a function over the keys in a provided map
 *   
 */
census.utils.core.map_rename_keys = (function census$utils$core$map_rename_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache29894;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29895 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"com/rpl/specter.cljc",11,1,712,715,cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null)], null));
census.utils.core.pathcache29894 = info29895;

return info29895;
})():info__28398__auto__);
var precompiled29896 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null);
return (precompiled29896.cljs$core$IFn$_invoke$arity$1 ? precompiled29896.cljs$core$IFn$_invoke$arity$1(G__29897) : precompiled29896.call(null,G__29897));
} else {
return precompiled29896;
}
})(),f,m);
});
/**
 * 
 *   Applies a function to all values of a provided map
 *   
 */
census.utils.core.map_over_keys = (function census$utils$core$map_over_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache29898;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29899 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null));
census.utils.core.pathcache29898 = info29899;

return info29899;
})():info__28398__auto__);
var precompiled29900 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled29900.cljs$core$IFn$_invoke$arity$1 ? precompiled29900.cljs$core$IFn$_invoke$arity$1(G__29901) : precompiled29900.call(null,G__29901));
} else {
return precompiled29900;
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
var G__30067 = null;
var G__30067__3 = (function (_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_){
var fexpr__29902 = (census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2 ? census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2(format,err_log_msg) : census.utils.core.$GET$.call(null,format,err_log_msg));
return (fexpr__29902.cljs$core$IFn$_invoke$arity$4 ? fexpr__29902.cljs$core$IFn$_invoke$arity$4(_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,null) : fexpr__29902.call(null,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,null));
});
var G__30067__4 = (function (_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_url_EQ_,((function ($url$,$res$,$err$){
return (function (url){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,cljs.core.deref($url$))) && ((!(cljs.core.empty_QMARK_(cljs.core.deref($err$))))))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_log_msg], 0));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_err_EQ_,cljs.core.deref($err$));

return cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,cljs.core.deref($url$))) && (cljs.core.empty_QMARK_(cljs.core.deref($err$))))){
if((silent_QMARK_ == null)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Getting data from cache:"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.deref($res$));
} else {
if((silent_QMARK_ == null)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Getting data from source:"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
}

var cfg = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function ($url$,$res$,$err$){
return (function (p__29903){
var map__29904 = p__29903;
var map__29904__$1 = (((((!((map__29904 == null))))?(((((map__29904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29904):map__29904);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29904__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_log_msg], 0));

cljs.core.vreset_BANG_($url$,url);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_err_EQ_,cljs.core.vreset_BANG_($err$,["ERROR status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)," for URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
});})($url$,$res$,$err$))
], null);
var G__29906 = format;
var G__29906__$1 = (((G__29906 instanceof cljs.core.Keyword))?G__29906.fqn:null);
switch (G__29906__$1) {
case "json":
var json = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__29906,G__29906__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,res));
});})(G__29906,G__29906__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));

break;
case "edn":
var edn = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__29906,G__29906__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(res)));
});})(G__29906,G__29906__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0));

break;
case "raw":
var raw = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__29906,G__29906__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,res));
});})(G__29906,G__29906__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29906__$1)].join('')));

}

}
}
});})($url$,$res$,$err$))
);
});
G__30067 = function(_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_){
switch(arguments.length){
case 3:
return G__30067__3.call(this,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_);
case 4:
return G__30067__4.call(this,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30067.cljs$core$IFn$_invoke$arity$3 = G__30067__3;
G__30067.cljs$core$IFn$_invoke$arity$4 = G__30067__4;
return G__30067;
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
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__){
return (function (state_29948){
var state_val_29949 = (state_29948[(1)]);
if((state_val_29949 === (7))){
var inst_29921 = (state_29948[(7)]);
var inst_29938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29921,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_29948__$1 = state_29948;
if(inst_29938){
var statearr_29950_30095 = state_29948__$1;
(statearr_29950_30095[(1)] = (9));

} else {
var statearr_29951_30096 = state_29948__$1;
(statearr_29951_30096[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (1))){
var inst_29907 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_) : f.call(null,_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_));
var inst_29915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29916 = [_EQ_O_EQ_,_EQ_E_EQ_];
var inst_29917 = (new cljs.core.PersistentVector(null,2,(5),inst_29915,inst_29916,null));
var state_29948__$1 = (function (){var statearr_29952 = state_29948;
(statearr_29952[(8)] = inst_29907);

return statearr_29952;
})();
return cljs.core.async.ioc_alts_BANG_(state_29948__$1,(2),inst_29917);
} else {
if((state_val_29949 === (4))){
var inst_29921 = (state_29948[(7)]);
var inst_29930 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29921,_EQ_E_EQ_);
var state_29948__$1 = state_29948;
if(inst_29930){
var statearr_29953_30098 = state_29948__$1;
(statearr_29953_30098[(1)] = (6));

} else {
var statearr_29954_30099 = state_29948__$1;
(statearr_29954_30099[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (6))){
var inst_29919 = (state_29948[(9)]);
var inst_29935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29919,(0),null);
var inst_29936 = (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(inst_29935,null) : cb.call(null,inst_29935,null));
var state_29948__$1 = state_29948;
var statearr_29955_30102 = state_29948__$1;
(statearr_29955_30102[(2)] = inst_29936);

(statearr_29955_30102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (3))){
var inst_29919 = (state_29948[(9)]);
var inst_29927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29919,(0),null);
var inst_29928 = (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(null,inst_29927) : cb.call(null,null,inst_29927));
var state_29948__$1 = state_29948;
var statearr_29956_30104 = state_29948__$1;
(statearr_29956_30104[(2)] = inst_29928);

(statearr_29956_30104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (2))){
var inst_29919 = (state_29948[(9)]);
var inst_29921 = (state_29948[(7)]);
var inst_29919__$1 = (state_29948[(2)]);
var inst_29920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29919__$1,(0),null);
var inst_29921__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29919__$1,(1),null);
var inst_29922 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29921__$1,_EQ_O_EQ_);
var state_29948__$1 = (function (){var statearr_29957 = state_29948;
(statearr_29957[(10)] = inst_29920);

(statearr_29957[(9)] = inst_29919__$1);

(statearr_29957[(7)] = inst_29921__$1);

return statearr_29957;
})();
if(inst_29922){
var statearr_29958_30106 = state_29948__$1;
(statearr_29958_30106[(1)] = (3));

} else {
var statearr_29959_30108 = state_29948__$1;
(statearr_29959_30108[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (11))){
var inst_29942 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29960_30109 = state_29948__$1;
(statearr_29960_30109[(2)] = inst_29942);

(statearr_29960_30109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (9))){
var inst_29920 = (state_29948[(10)]);
var state_29948__$1 = state_29948;
var statearr_29961_30110 = state_29948__$1;
(statearr_29961_30110[(2)] = inst_29920);

(statearr_29961_30110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (5))){
var inst_29946 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29948__$1,inst_29946);
} else {
if((state_val_29949 === (10))){
var state_29948__$1 = state_29948;
var statearr_29962_30111 = state_29948__$1;
(statearr_29962_30111[(2)] = null);

(statearr_29962_30111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (8))){
var inst_29944 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29963_30112 = state_29948__$1;
(statearr_29963_30112[(2)] = inst_29944);

(statearr_29963_30112[(1)] = (5));


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
});})(c__16663__auto__))
;
return ((function (switch__16488__auto__,c__16663__auto__){
return (function() {
var census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__ = null;
var census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____0 = (function (){
var statearr_29964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29964[(0)] = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__);

(statearr_29964[(1)] = (1));

return statearr_29964;
});
var census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____1 = (function (state_29948){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_29948);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e29965){if((e29965 instanceof Object)){
var ex__16492__auto__ = e29965;
var statearr_29966_30114 = state_29948;
(statearr_29966_30114[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30118 = state_29948;
state_29948 = G__30118;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__ = function(state_29948){
switch(arguments.length){
case 0:
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____0.call(this);
case 1:
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____1.call(this,state_29948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____0;
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____1;
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__))
})();
var state__16665__auto__ = (function (){var statearr_29967 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_29967[(6)] = c__16663__auto__);

return statearr_29967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__))
);

return c__16663__auto__;
});
census.utils.core.__GT_args = (function census$utils$core$__GT_args(args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(args),census.utils.core.amap_type)){
var map__29968 = args;
var map__29968__$1 = (((((!((map__29968 == null))))?(((((map__29968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29968):map__29968);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29968__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache29970;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29971 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vintage","vintage",818195578)], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
census.utils.core.pathcache29970 = info29971;

return info29971;
})():info__28398__auto__);
var precompiled29972 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29973 = cljs.core.PersistentVector.EMPTY;
return (precompiled29972.cljs$core$IFn$_invoke$arity$1 ? precompiled29972.cljs$core$IFn$_invoke$arity$1(G__29973) : precompiled29972.call(null,G__29973));
} else {
return precompiled29972;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage),args);
} else {
var geoCljs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_29974 = args;
var _STAR_runtime_state_STAR__orig_val__29976 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__29977 = oops.state.prepare_state(target_obj_29974,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__29977;

try{var next_obj_29975 = ((oops.core.validate_object_access_dynamically(target_obj_29974,(0),"geoHierarchy",true,true,false))?(target_obj_29974["geoHierarchy"]):null);
return next_obj_29975;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__29976;
}})());
var vintage = (function (){var target_obj_29978 = args;
var _STAR_runtime_state_STAR__orig_val__29980 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__29981 = oops.state.prepare_state(target_obj_29978,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__29981;

try{var next_obj_29979 = ((oops.core.validate_object_access_dynamically(target_obj_29978,(0),"vintage",true,true,false))?(target_obj_29978["vintage"]):null);
return next_obj_29979;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__29980;
}})();
var geoKeys = census.utils.core.map_rename_keys(census.utils.core.strs__GT_keys,geoCljs);
var target_obj_29982_30119 = args;
var _STAR_runtime_state_STAR__orig_val__29984_30120 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__29985_30121 = oops.state.prepare_state(target_obj_29982_30119,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__29985_30121;

try{var parent_obj_29983_30122 = target_obj_29982_30119;
if(oops.core.validate_object_access_dynamically(parent_obj_29983_30122,(0),"vintage",true,true,true)){
(parent_obj_29983_30122["vintage"] = cljs.core.clj__GT_js(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__29984_30120;
}
var target_obj_29986_30123 = args;
var _STAR_runtime_state_STAR__orig_val__29988_30124 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__29989_30125 = oops.state.prepare_state(target_obj_29986_30123,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__29989_30125;

try{var parent_obj_29987_30126 = target_obj_29986_30123;
if(oops.core.validate_object_access_dynamically(parent_obj_29987_30126,(0),"geoHierarchy",true,true,true)){
(parent_obj_29987_30126["geoHierarchy"] = cljs.core.clj__GT_js(geoKeys));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__29988_30124;
}
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
census.utils.core.args__GT_js = (function census$utils$core$args__GT_js(p__29991){
var map__29992 = p__29991;
var map__29992__$1 = (((((!((map__29992 == null))))?(((((map__29992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29992):map__29992);
var args = map__29992__$1;
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29992__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var geoKeys = census.utils.core.map_rename_keys(((function (map__29992,map__29992__$1,args,geoHierarchy){
return (function (p1__29990_SHARP_){
return census.utils.core.keys__GT_strs(cljs.core.name(p1__29990_SHARP_));
});})(map__29992,map__29992__$1,args,geoHierarchy))
,geoHierarchy);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js(geoKeys)], 0));

return cljs.core.clj__GT_js(com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache29994;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29995 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
census.utils.core.pathcache29994 = info29995;

return info29995;
})():info__28398__auto__);
var precompiled29996 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29997 = cljs.core.PersistentVector.EMPTY;
return (precompiled29996.cljs$core$IFn$_invoke$arity$1 ? precompiled29996.cljs$core$IFn$_invoke$arity$1(G__29997) : precompiled29996.call(null,G__29997));
} else {
return precompiled29996;
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
var G__30127 = null;
var G__30127__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30127__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__30127__2 = (function (acc,this$){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(rf,acc,this$) : f.call(null,rf,acc,this$));
});
G__30127 = function(acc,this$){
switch(arguments.length){
case 0:
return G__30127__0.call(this);
case 1:
return G__30127__1.call(this,acc);
case 2:
return G__30127__2.call(this,acc,this$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30127.cljs$core$IFn$_invoke$arity$0 = G__30127__0;
G__30127.cljs$core$IFn$_invoke$arity$1 = G__30127__1;
G__30127.cljs$core$IFn$_invoke$arity$2 = G__30127__2;
return G__30127;
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
var G__30128 = null;
var G__30128__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30128__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__30128__2 = (function (acc,this$){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(state,rf,acc,this$) : f.call(null,state,rf,acc,this$));
});
G__30128 = function(acc,this$){
switch(arguments.length){
case 0:
return G__30128__0.call(this);
case 1:
return G__30128__1.call(this,acc);
case 2:
return G__30128__2.call(this,acc,this$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30128.cljs$core$IFn$_invoke$arity$0 = G__30128__0;
G__30128.cljs$core$IFn$_invoke$arity$1 = G__30128__1;
G__30128.cljs$core$IFn$_invoke$arity$2 = G__30128__2;
return G__30128;
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
var G__30233 = null;
var G__30233__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30233__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__30233__2 = (function (acc,coll){
var G__29998 = acc;
var G__29999 = cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xfn,coll], 0));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29998,G__29999) : rf.call(null,G__29998,G__29999));
});
G__30233 = function(acc,coll){
switch(arguments.length){
case 0:
return G__30233__0.call(this);
case 1:
return G__30233__1.call(this,acc);
case 2:
return G__30233__2.call(this,acc,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30233.cljs$core$IFn$_invoke$arity$0 = G__30233__0;
G__30233.cljs$core$IFn$_invoke$arity$1 = G__30233__1;
G__30233.cljs$core$IFn$_invoke$arity$2 = G__30233__2;
return G__30233;
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
var G__30238 = null;
var G__30238__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30238__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__30238__2 = (function (acc,coll){
var G__30000 = acc;
var G__30001 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xfn,cljs.core.conj,coll);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__30000,G__30001) : rf.call(null,G__30000,G__30001));
});
G__30238 = function(acc,coll){
switch(arguments.length){
case 0:
return G__30238__0.call(this);
case 1:
return G__30238__1.call(this,acc);
case 2:
return G__30238__2.call(this,acc,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30238.cljs$core$IFn$_invoke$arity$0 = G__30238__0;
G__30238.cljs$core$IFn$_invoke$arity$1 = G__30238__1;
G__30238.cljs$core$IFn$_invoke$arity$2 = G__30238__2;
return G__30238;
})()
});
});
/**
 * 
 *   Maps a provided function to a specific index + 1 of a provided collection.
 *   
 */
census.utils.core.map_target = (function census$utils$core$map_target(f,target,coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__30002_SHARP_,p2__30003_SHARP_){
if((cljs.core.mod((p1__30002_SHARP_ + (1)),target) === (0))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__30003_SHARP_) : f.call(null,p2__30003_SHARP_));
} else {
return p2__30003_SHARP_;
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
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache30004;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info30005 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1057,1059,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1102,1102,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"selected?","selected?",898028739,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",10,1,9319,9319,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(targets,new cljs.core.Symbol(null,"targets","targets",-639472363,null))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,728,731,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null))], null)], null),"census.utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"targets","targets",-639472363,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null))),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null));
census.utils.core.pathcache30004 = info30005;

return info30005;
})():info__28398__auto__);
var precompiled30006 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__30007 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__30008 = com.rpl.specter.FIRST;
var G__30009 = cljs.core.set(targets);
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__30008,G__30009) : com.rpl.specter.selected_QMARK_.call(null,G__30008,G__30009));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,targets,com.rpl.specter.LAST], null);
return (precompiled30006.cljs$core$IFn$_invoke$arity$1 ? precompiled30006.cljs$core$IFn$_invoke$arity$1(G__30007) : precompiled30006.call(null,G__30007));
} else {
return precompiled30006;
}
})(),f,coll);
});
/**
 * 
 *   Maps a provided function over a given range of indeces (vector of beginning
 *   to end) of a provided collection.
 *   
 */
census.utils.core.map_idcs_range = (function census$utils$core$map_idcs_range(f,p__30010,coll){
var vec__30011 = p__30010;
var r_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30011,(0),null);
var r_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30011,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache30014;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info30015 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1057,1059,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1102,1102,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"selected?","selected?",898028739,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",10,1,9319,9319,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.range,new cljs.core.Var(function(){return cljs.core.range;},new cljs.core.Symbol("cljs.core","range","cljs.core/range",-1421369894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),"cljs/core.cljs",12,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),1,9651,9651,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),"Returns a lazy seq of nums from start (inclusive) to end\n   (exclusive), by step, where start defaults to 0, step to 1,\n   and end to infinity.",(cljs.core.truth_(cljs.core.range)?cljs.core.range.cljs$lang$test:null)])),new cljs.core.Symbol(null,"range","range",-1014743483,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(r_start,new cljs.core.Symbol(null,"r-start","r-start",1011309134,null)),com.rpl.specter.impl.__GT_LocalSym(r_end,new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,728,731,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null))], null)], null),"census.utils.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null));
census.utils.core.pathcache30014 = info30015;

return info30015;
})():info__28398__auto__);
var precompiled30016 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__30018 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__30019 = com.rpl.specter.FIRST;
var G__30020 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(r_start,r_end));
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__30019,G__30020) : com.rpl.specter.selected_QMARK_.call(null,G__30019,G__30020));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,cljs.core.range,r_start,r_end,com.rpl.specter.LAST], null);
return (precompiled30016.cljs$core$IFn$_invoke$arity$1 ? precompiled30016.cljs$core$IFn$_invoke$arity$1(G__30018) : precompiled30016.call(null,G__30018));
} else {
return precompiled30016;
}
})(),f,coll);
});

//# sourceMappingURL=census.utils.core.js.map
