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
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__28398__auto__ = census.utils.core.pathcache33915;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33916 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),"com/rpl/specter.cljc",23,1,1348,1348,cljs.core.List.EMPTY,"Like cond-path, but with if semantics.",(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"if-path","if-path",314968895,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",(20),(1),(2137),(2137),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",((cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),"com/rpl/specter.cljc",34,1,1438,1438,cljs.core.List.EMPTY,"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)])),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))], null),"census.utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
census.utils.core.pathcache33915 = info33916;

return info33916;
})():info__28398__auto__);
var precompiled33917 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33918 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.map_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.MAP_VALS,p], null);
return (precompiled33917.cljs$core$IFn$_invoke$arity$1 ? precompiled33917.cljs$core$IFn$_invoke$arity$1(G__33918) : precompiled33917.call(null,G__33918));
} else {
return precompiled33917;
}
})());

return p;
})();
/**
 * Recursively reverses the order of the key/value _pairs_ inside a map
 */
census.utils.core.deep_reverse_MAP_NODES = (function census$utils$core$deep_reverse_MAP_NODES(m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache33920;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33921 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(census.utils.core.MAP_NODES,new cljs.core.Var(function(){return census.utils.core.MAP_NODES;},new cljs.core.Symbol("census.utils.core","MAP-NODES","census.utils.core/MAP-NODES",-52667527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"census.utils.core","census.utils.core",-577425186,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"census/utils/core.cljs",15,1,34,34,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(census.utils.core.MAP_NODES)?census.utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
census.utils.core.pathcache33920 = info33921;

return info33921;
})():info__28398__auto__);
var precompiled33922 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.MAP_NODES], null);
return (precompiled33922.cljs$core$IFn$_invoke$arity$1 ? precompiled33922.cljs$core$IFn$_invoke$arity$1(G__33923) : precompiled33922.call(null,G__33923));
} else {
return precompiled33922;
}
})(),(function (p1__33919_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(p1__33919_SHARP_));
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
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache33925;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33926 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(census.utils.core.MAP_NODES,new cljs.core.Var(function(){return census.utils.core.MAP_NODES;},new cljs.core.Symbol("census.utils.core","MAP-NODES","census.utils.core/MAP-NODES",-52667527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"census.utils.core","census.utils.core",-577425186,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"census/utils/core.cljs",15,1,34,34,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(census.utils.core.MAP_NODES)?census.utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
census.utils.core.pathcache33925 = info33926;

return info33926;
})():info__28398__auto__);
var precompiled33927 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.MAP_NODES], null);
return (precompiled33927.cljs$core$IFn$_invoke$arity$1 ? precompiled33927.cljs$core$IFn$_invoke$arity$1(G__33928) : precompiled33927.call(null,G__33928));
} else {
return precompiled33927;
}
})(),(function (p1__33924_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.core.map.cljs$core$IFn$_invoke$arity$0(),cljs.core.vec(p1__33924_SHARP_));
}),m);
});
/**
 * 
 *   Applies a function over the keys in a provided map
 *   
 */
census.utils.core.map_rename_keys = (function census$utils$core$map_rename_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache33932;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33933 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"com/rpl/specter.cljc",11,1,712,715,cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null)], null));
census.utils.core.pathcache33932 = info33933;

return info33933;
})():info__28398__auto__);
var precompiled33934 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null);
return (precompiled33934.cljs$core$IFn$_invoke$arity$1 ? precompiled33934.cljs$core$IFn$_invoke$arity$1(G__33939) : precompiled33934.call(null,G__33939));
} else {
return precompiled33934;
}
})(),f,m);
});
/**
 * 
 *   Applies a function to all values of a provided map
 *   
 */
census.utils.core.map_over_keys = (function census$utils$core$map_over_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache33943;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33944 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,701,704,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null))], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null)], null));
census.utils.core.pathcache33943 = info33944;

return info33944;
})():info__28398__auto__);
var precompiled33945 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled33945.cljs$core$IFn$_invoke$arity$1 ? precompiled33945.cljs$core$IFn$_invoke$arity$1(G__33946) : precompiled33945.call(null,G__33946));
} else {
return precompiled33945;
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
var G__34133 = null;
var G__34133__3 = (function (_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_){
var fexpr__33947 = (census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2 ? census.utils.core.$GET$.cljs$core$IFn$_invoke$arity$2(format,err_log_msg) : census.utils.core.$GET$.call(null,format,err_log_msg));
return (fexpr__33947.cljs$core$IFn$_invoke$arity$4 ? fexpr__33947.cljs$core$IFn$_invoke$arity$4(_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,null) : fexpr__33947.call(null,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,null));
});
var G__34133__4 = (function (_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_){
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
return (function (p__33948){
var map__33949 = p__33948;
var map__33949__$1 = (((((!((map__33949 == null))))?(((((map__33949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33949):map__33949);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33949__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33949__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_log_msg], 0));

cljs.core.vreset_BANG_($url$,url);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_err_EQ_,cljs.core.vreset_BANG_($err$,["ERROR status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)," for URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
});})($url$,$res$,$err$))
], null);
var G__33951 = format;
var G__33951__$1 = (((G__33951 instanceof cljs.core.Keyword))?G__33951.fqn:null);
switch (G__33951__$1) {
case "json":
var json = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__33951,G__33951__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,res));
});})(G__33951,G__33951__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));

break;
case "edn":
var edn = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__33951,G__33951__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(res)));
});})(G__33951,G__33951__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0));

break;
case "raw":
var raw = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cfg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (G__33951,G__33951__$1,cfg,$url$,$res$,$err$){
return (function (res){
cljs.core.vreset_BANG_($err$,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.vreset_BANG_($url$,url);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_res_EQ_,cljs.core.vreset_BANG_($res$,res));
});})(G__33951,G__33951__$1,cfg,$url$,$res$,$err$))
], null)], 0));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33951__$1)].join('')));

}

}
}
});})($url$,$res$,$err$))
);
});
G__34133 = function(_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_){
switch(arguments.length){
case 3:
return G__34133__3.call(this,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_);
case 4:
return G__34133__4.call(this,_EQ_url_EQ_,_EQ_res_EQ_,_EQ_err_EQ_,silent_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34133.cljs$core$IFn$_invoke$arity$3 = G__34133__3;
G__34133.cljs$core$IFn$_invoke$arity$4 = G__34133__4;
return G__34133;
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
return (function (state_33993){
var state_val_33994 = (state_33993[(1)]);
if((state_val_33994 === (7))){
var inst_33966 = (state_33993[(7)]);
var inst_33983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33966,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_33993__$1 = state_33993;
if(inst_33983){
var statearr_33995_34187 = state_33993__$1;
(statearr_33995_34187[(1)] = (9));

} else {
var statearr_33996_34188 = state_33993__$1;
(statearr_33996_34188[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (1))){
var inst_33952 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_) : f.call(null,_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_));
var inst_33960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33961 = [_EQ_O_EQ_,_EQ_E_EQ_];
var inst_33962 = (new cljs.core.PersistentVector(null,2,(5),inst_33960,inst_33961,null));
var state_33993__$1 = (function (){var statearr_33997 = state_33993;
(statearr_33997[(8)] = inst_33952);

return statearr_33997;
})();
return cljs.core.async.ioc_alts_BANG_(state_33993__$1,(2),inst_33962);
} else {
if((state_val_33994 === (4))){
var inst_33966 = (state_33993[(7)]);
var inst_33975 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33966,_EQ_E_EQ_);
var state_33993__$1 = state_33993;
if(inst_33975){
var statearr_33998_34190 = state_33993__$1;
(statearr_33998_34190[(1)] = (6));

} else {
var statearr_33999_34191 = state_33993__$1;
(statearr_33999_34191[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (6))){
var inst_33964 = (state_33993[(9)]);
var inst_33980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33964,(0),null);
var inst_33981 = (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(inst_33980,null) : cb.call(null,inst_33980,null));
var state_33993__$1 = state_33993;
var statearr_34000_34193 = state_33993__$1;
(statearr_34000_34193[(2)] = inst_33981);

(statearr_34000_34193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (3))){
var inst_33964 = (state_33993[(9)]);
var inst_33972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33964,(0),null);
var inst_33973 = (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(null,inst_33972) : cb.call(null,null,inst_33972));
var state_33993__$1 = state_33993;
var statearr_34001_34195 = state_33993__$1;
(statearr_34001_34195[(2)] = inst_33973);

(statearr_34001_34195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (2))){
var inst_33964 = (state_33993[(9)]);
var inst_33966 = (state_33993[(7)]);
var inst_33964__$1 = (state_33993[(2)]);
var inst_33965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33964__$1,(0),null);
var inst_33966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33964__$1,(1),null);
var inst_33967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33966__$1,_EQ_O_EQ_);
var state_33993__$1 = (function (){var statearr_34002 = state_33993;
(statearr_34002[(10)] = inst_33965);

(statearr_34002[(9)] = inst_33964__$1);

(statearr_34002[(7)] = inst_33966__$1);

return statearr_34002;
})();
if(inst_33967){
var statearr_34003_34197 = state_33993__$1;
(statearr_34003_34197[(1)] = (3));

} else {
var statearr_34004_34198 = state_33993__$1;
(statearr_34004_34198[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (11))){
var inst_33987 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
var statearr_34005_34201 = state_33993__$1;
(statearr_34005_34201[(2)] = inst_33987);

(statearr_34005_34201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (9))){
var inst_33965 = (state_33993[(10)]);
var state_33993__$1 = state_33993;
var statearr_34006_34202 = state_33993__$1;
(statearr_34006_34202[(2)] = inst_33965);

(statearr_34006_34202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (5))){
var inst_33991 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33993__$1,inst_33991);
} else {
if((state_val_33994 === (10))){
var state_33993__$1 = state_33993;
var statearr_34007_34203 = state_33993__$1;
(statearr_34007_34203[(2)] = null);

(statearr_34007_34203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (8))){
var inst_33989 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
var statearr_34008_34205 = state_33993__$1;
(statearr_34008_34205[(2)] = inst_33989);

(statearr_34008_34205[(1)] = (5));


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
var statearr_34009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34009[(0)] = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__);

(statearr_34009[(1)] = (1));

return statearr_34009;
});
var census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____1 = (function (state_33993){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_33993);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e34010){if((e34010 instanceof Object)){
var ex__16492__auto__ = e34010;
var statearr_34011_34209 = state_33993;
(statearr_34011_34209[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34210 = state_33993;
state_33993 = G__34210;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__ = function(state_33993){
switch(arguments.length){
case 0:
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____0.call(this);
case 1:
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____1.call(this,state_33993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____0;
census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto____1;
return census$utils$core$_EQ_O_QMARK__GT__cb_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__))
})();
var state__16665__auto__ = (function (){var statearr_34012 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_34012[(6)] = c__16663__auto__);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__))
);

return c__16663__auto__;
});
census.utils.core.__GT_args = (function census$utils$core$__GT_args(args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(args),census.utils.core.amap_type)){
var map__34013 = args;
var map__34013__$1 = (((((!((map__34013 == null))))?(((((map__34013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34013):map__34013);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34013__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache34015;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info34016 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vintage","vintage",818195578)], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
census.utils.core.pathcache34015 = info34016;

return info34016;
})():info__28398__auto__);
var precompiled34017 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__34018 = cljs.core.PersistentVector.EMPTY;
return (precompiled34017.cljs$core$IFn$_invoke$arity$1 ? precompiled34017.cljs$core$IFn$_invoke$arity$1(G__34018) : precompiled34017.call(null,G__34018));
} else {
return precompiled34017;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage),args);
} else {
var geoCljs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_34019 = args;
var _STAR_runtime_state_STAR__orig_val__34021 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34022 = oops.state.prepare_state(target_obj_34019,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34022;

try{var next_obj_34020 = ((oops.core.validate_object_access_dynamically(target_obj_34019,(0),"geoHierarchy",true,true,false))?(target_obj_34019["geoHierarchy"]):null);
return next_obj_34020;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34021;
}})());
var vintage = (function (){var target_obj_34023 = args;
var _STAR_runtime_state_STAR__orig_val__34025 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34026 = oops.state.prepare_state(target_obj_34023,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34026;

try{var next_obj_34024 = ((oops.core.validate_object_access_dynamically(target_obj_34023,(0),"vintage",true,true,false))?(target_obj_34023["vintage"]):null);
return next_obj_34024;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34025;
}})();
var geoKeys = census.utils.core.map_rename_keys(census.utils.core.strs__GT_keys,geoCljs);
var target_obj_34027_34219 = args;
var _STAR_runtime_state_STAR__orig_val__34029_34220 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34030_34221 = oops.state.prepare_state(target_obj_34027_34219,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34030_34221;

try{var parent_obj_34028_34222 = target_obj_34027_34219;
if(oops.core.validate_object_access_dynamically(parent_obj_34028_34222,(0),"vintage",true,true,true)){
(parent_obj_34028_34222["vintage"] = cljs.core.clj__GT_js(cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34029_34220;
}
var target_obj_34031_34223 = args;
var _STAR_runtime_state_STAR__orig_val__34033_34225 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34034_34226 = oops.state.prepare_state(target_obj_34031_34223,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34034_34226;

try{var parent_obj_34032_34227 = target_obj_34031_34223;
if(oops.core.validate_object_access_dynamically(parent_obj_34032_34227,(0),"geoHierarchy",true,true,true)){
(parent_obj_34032_34227["geoHierarchy"] = cljs.core.clj__GT_js(geoKeys));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34033_34225;
}
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
census.utils.core.args__GT_js = (function census$utils$core$args__GT_js(p__34037){
var map__34038 = p__34037;
var map__34038__$1 = (((((!((map__34038 == null))))?(((((map__34038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34038):map__34038);
var args = map__34038__$1;
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34038__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var geoKeys = census.utils.core.map_rename_keys(((function (map__34038,map__34038__$1,args,geoHierarchy){
return (function (p1__34036_SHARP_){
return census.utils.core.keys__GT_strs(cljs.core.name(p1__34036_SHARP_));
});})(map__34038,map__34038__$1,args,geoHierarchy))
,geoHierarchy);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js(geoKeys)], 0));

return cljs.core.clj__GT_js(com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache34040;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info34041 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)], null),"census.utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
census.utils.core.pathcache34040 = info34041;

return info34041;
})():info__28398__auto__);
var precompiled34042 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__34043 = cljs.core.PersistentVector.EMPTY;
return (precompiled34042.cljs$core$IFn$_invoke$arity$1 ? precompiled34042.cljs$core$IFn$_invoke$arity$1(G__34043) : precompiled34042.call(null,G__34043));
} else {
return precompiled34042;
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
var G__34420 = null;
var G__34420__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__34420__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__34420__2 = (function (acc,this$){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(rf,acc,this$) : f.call(null,rf,acc,this$));
});
G__34420 = function(acc,this$){
switch(arguments.length){
case 0:
return G__34420__0.call(this);
case 1:
return G__34420__1.call(this,acc);
case 2:
return G__34420__2.call(this,acc,this$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34420.cljs$core$IFn$_invoke$arity$0 = G__34420__0;
G__34420.cljs$core$IFn$_invoke$arity$1 = G__34420__1;
G__34420.cljs$core$IFn$_invoke$arity$2 = G__34420__2;
return G__34420;
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
var G__34452 = null;
var G__34452__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__34452__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__34452__2 = (function (acc,this$){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(state,rf,acc,this$) : f.call(null,state,rf,acc,this$));
});
G__34452 = function(acc,this$){
switch(arguments.length){
case 0:
return G__34452__0.call(this);
case 1:
return G__34452__1.call(this,acc);
case 2:
return G__34452__2.call(this,acc,this$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34452.cljs$core$IFn$_invoke$arity$0 = G__34452__0;
G__34452.cljs$core$IFn$_invoke$arity$1 = G__34452__1;
G__34452.cljs$core$IFn$_invoke$arity$2 = G__34452__2;
return G__34452;
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
var G__34456 = null;
var G__34456__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__34456__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__34456__2 = (function (acc,coll){
var G__34045 = acc;
var G__34046 = cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xfn,coll], 0));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__34045,G__34046) : rf.call(null,G__34045,G__34046));
});
G__34456 = function(acc,coll){
switch(arguments.length){
case 0:
return G__34456__0.call(this);
case 1:
return G__34456__1.call(this,acc);
case 2:
return G__34456__2.call(this,acc,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34456.cljs$core$IFn$_invoke$arity$0 = G__34456__0;
G__34456.cljs$core$IFn$_invoke$arity$1 = G__34456__1;
G__34456.cljs$core$IFn$_invoke$arity$2 = G__34456__2;
return G__34456;
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
var G__34466 = null;
var G__34466__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__34466__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__34466__2 = (function (acc,coll){
var G__34049 = acc;
var G__34050 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xfn,cljs.core.conj,coll);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__34049,G__34050) : rf.call(null,G__34049,G__34050));
});
G__34466 = function(acc,coll){
switch(arguments.length){
case 0:
return G__34466__0.call(this);
case 1:
return G__34466__1.call(this,acc);
case 2:
return G__34466__2.call(this,acc,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34466.cljs$core$IFn$_invoke$arity$0 = G__34466__0;
G__34466.cljs$core$IFn$_invoke$arity$1 = G__34466__1;
G__34466.cljs$core$IFn$_invoke$arity$2 = G__34466__2;
return G__34466;
})()
});
});
/**
 * 
 *   Maps a provided function to a specific index + 1 of a provided collection.
 *   
 */
census.utils.core.map_target = (function census$utils$core$map_target(f,target,coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__34051_SHARP_,p2__34052_SHARP_){
if((cljs.core.mod((p1__34051_SHARP_ + (1)),target) === (0))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__34052_SHARP_) : f.call(null,p2__34052_SHARP_));
} else {
return p2__34052_SHARP_;
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
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache34053;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info34054 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1057,1059,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1102,1102,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"selected?","selected?",898028739,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",(10),(1),(9319),(9319),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(targets,new cljs.core.Symbol(null,"targets","targets",-639472363,null))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,728,731,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null))], null)], null),"census.utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"targets","targets",-639472363,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null))),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null));
census.utils.core.pathcache34053 = info34054;

return info34054;
})():info__28398__auto__);
var precompiled34055 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__34057 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__34059 = com.rpl.specter.FIRST;
var G__34060 = cljs.core.set(targets);
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__34059,G__34060) : com.rpl.specter.selected_QMARK_.call(null,G__34059,G__34060));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,targets,com.rpl.specter.LAST], null);
return (precompiled34055.cljs$core$IFn$_invoke$arity$1 ? precompiled34055.cljs$core$IFn$_invoke$arity$1(G__34057) : precompiled34055.call(null,G__34057));
} else {
return precompiled34055;
}
})(),f,coll);
});
/**
 * 
 *   Maps a provided function over a given range of indeces (vector of beginning
 *   to end) of a provided collection.
 *   
 */
census.utils.core.map_idcs_range = (function census$utils$core$map_idcs_range(f,p__34061,coll){
var vec__34062 = p__34061;
var r_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(0),null);
var r_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = census.utils.core.pathcache34065;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info34066 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1057,1059,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1102,1102,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"selected?","selected?",898028739,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,734,737,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",(10),(1),(9319),(9319),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.range,new cljs.core.Var(function(){return cljs.core.range;},new cljs.core.Symbol("cljs.core","range","cljs.core/range",-1421369894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),"cljs/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),(1),(9651),(9651),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),"Returns a lazy seq of nums from start (inclusive) to end\n   (exclusive), by step, where start defaults to 0, step to 1,\n   and end to infinity.",(cljs.core.truth_(cljs.core.range)?cljs.core.range.cljs$lang$test:null)])),new cljs.core.Symbol(null,"range","range",-1014743483,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(r_start,new cljs.core.Symbol(null,"r-start","r-start",1011309134,null)),com.rpl.specter.impl.__GT_LocalSym(r_end,new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,728,731,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null))], null)], null),"census.utils.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),cljs.core.list(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null)], null));
census.utils.core.pathcache34065 = info34066;

return info34066;
})():info__28398__auto__);
var precompiled34067 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__34076 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__34077 = com.rpl.specter.FIRST;
var G__34078 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(r_start,r_end));
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__34077,G__34078) : com.rpl.specter.selected_QMARK_.call(null,G__34077,G__34078));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,cljs.core.range,r_start,r_end,com.rpl.specter.LAST], null);
return (precompiled34067.cljs$core$IFn$_invoke$arity$1 ? precompiled34067.cljs$core$IFn$_invoke$arity$1(G__34076) : precompiled34067.call(null,G__34076));
} else {
return precompiled34067;
}
})(),f,coll);
});

//# sourceMappingURL=census.utils.core.js.map
