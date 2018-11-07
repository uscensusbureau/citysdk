goog.provide('utils.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('ajax.core');
goog.require('cljs_promises.async');
goog.require('cuerdas.core');
goog.require('com.rpl.specter');
goog.require('cljs.pprint');
goog.require('linked.core');
goog.require('oops.core');
goog.require('cljs.reader');
goog.require('test.core');
goog.require('shadow.js.shim.module$fs');
utils.core.$geoKeyMap$ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
utils.core.base_url_stats = "https://api.census.gov/data/";
utils.core.base_url_wms = "https://tigerweb.geo.census.gov/arcgis/rest/services/";
utils.core.base_url_geojson = "https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON";
utils.core.base_url_geoKeyMap = "https://raw.githubusercontent.com/loganpowell/census-geojson/master/src/geojson/index.edn";
utils.core.base_url_database = "...";
utils.core.read_edn = (function utils$core$read_edn(path){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.js.shim.module$fs.readFileSync(path))].join(''));
});
utils.core.vec_type = cljs.core.PersistentVector;
utils.core.amap_type = cljs.core.PersistentArrayMap;
utils.core.err_type = Error;
utils.core.error = (function utils$core$error(e){
return (new Error(e));
});
/**
 * From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)
 */
utils.core.MAP_NODES = (function (){var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19843__auto__ = utils.core.pathcache25555;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25556 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),"com/rpl/specter.cljc",23,1,1345,1345,cljs.core.List.EMPTY,"Like cond-path, but with if semantics.",(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)])),new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",20,1,2133,2133,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",((cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),"com/rpl/specter.cljc",34,1,1435,1435,cljs.core.List.EMPTY,"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)])),new cljs.core.Symbol("sp","continue-then-stay","sp/continue-then-stay",493751558,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,698,701,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("sp","continue-then-stay","sp/continue-then-stay",493751558,null),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),cljs.core.list(new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol("sp","continue-then-stay","sp/continue-then-stay",493751558,null),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null),new cljs.core.Symbol(null,"p","p",1791580836,null))))], null),"utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","if-path","sp/if-path",314981016,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("sp","continue-then-stay","sp/continue-then-stay",493751558,null),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
utils.core.pathcache25555 = info25556;

return info25556;
})():info__19843__auto__);
var precompiled25557 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25558 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.map_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.MAP_VALS,p], null);
return (precompiled25557.cljs$core$IFn$_invoke$arity$1 ? precompiled25557.cljs$core$IFn$_invoke$arity$1(G__25558) : precompiled25557.call(null,G__25558));
} else {
return precompiled25557;
}
})());

return p;
})();
/**
 * Recursively reverses the order of the key/value _pairs_ inside a map
 */
utils.core.deep_reverse_map = (function utils$core$deep_reverse_map(m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25560;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25561 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(utils.core.MAP_NODES,new cljs.core.Var(function(){return utils.core.MAP_NODES;},new cljs.core.Symbol("utils.core","MAP-NODES","utils.core/MAP-NODES",2077119602,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utils.core","utils.core",1900405822,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"utils/core.cljs",15,1,40,40,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(utils.core.MAP_NODES)?utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
utils.core.pathcache25560 = info25561;

return info25561;
})():info__19843__auto__);
var precompiled25562 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [utils.core.MAP_NODES], null);
return (precompiled25562.cljs$core$IFn$_invoke$arity$1 ? precompiled25562.cljs$core$IFn$_invoke$arity$1(G__25563) : precompiled25562.call(null,G__25563));
} else {
return precompiled25562;
}
})(),(function (p1__25559_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(p1__25559_SHARP_));
}),m);
});
utils.core.deep_reverse_map.cljs$lang$test = (function (){
try{var values__9572__auto__ = (new cljs.core.List(null,utils.core.deep_reverse_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),(7),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h","h",1109658740),(6),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"f","f",-1597136552),(4)], null),new cljs.core.Keyword(null,"d","d",1972142424),(3)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),(3),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",-1597136552),(4),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"h","h",1109658740),(6)], null)], null),new cljs.core.Keyword(null,"i","i",-1386841315),(7)], null),null,(1),null)),(2),null));
var result__9573__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9572__auto__);
if(cljs.core.truth_(result__9573__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"deep-reverse-map","deep-reverse-map",1535327724,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),(7),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h","h",1109658740),(6),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"f","f",-1597136552),(4)], null),new cljs.core.Keyword(null,"d","d",1972142424),(3)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),(3),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",-1597136552),(4),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"h","h",1109658740),(6)], null)], null),new cljs.core.Keyword(null,"i","i",-1386841315),(7)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__9572__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"deep-reverse-map","deep-reverse-map",1535327724,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),(7),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h","h",1109658740),(6),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"f","f",-1597136552),(4)], null),new cljs.core.Keyword(null,"d","d",1972142424),(3)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),(3),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",-1597136552),(4),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"h","h",1109658740),(6)], null)], null),new cljs.core.Keyword(null,"i","i",-1386841315),(7)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9572__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9573__auto__;
}catch (e25564){var t__9603__auto__ = e25564;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"deep-reverse-map","deep-reverse-map",1535327724,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),(7),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h","h",1109658740),(6),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"f","f",-1597136552),(4)], null),new cljs.core.Keyword(null,"d","d",1972142424),(3)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),(3),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",-1597136552),(4),new cljs.core.Keyword(null,"g","g",1738089905),(5),new cljs.core.Keyword(null,"h","h",1109658740),(6)], null)], null),new cljs.core.Keyword(null,"i","i",-1386841315),(7)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9603__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
/**
 * 
 *   Recursively converts any map into a `linked` map (preserves insertion order)
 *   TODO - Testing:
 *   [core.async](https://github.com/clojure/core.async/blob/master/src/test/cljs/cljs/core/async/tests.cljs)
 *   
 */
utils.core.deep_linked_map = (function utils$core$deep_linked_map(m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25566;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25567 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(utils.core.MAP_NODES,new cljs.core.Var(function(){return utils.core.MAP_NODES;},new cljs.core.Symbol("utils.core","MAP-NODES","utils.core/MAP-NODES",2077119602,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utils.core","utils.core",1900405822,null),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null),"utils/core.cljs",15,1,40,40,cljs.core.List.EMPTY,"From [specter's help page](https://github.com/nathanmarz/specter/wiki/Using-Specter-Recursively#recursively-navigate-to-every-map-in-a-map-of-maps)",(cljs.core.truth_(utils.core.MAP_NODES)?utils.core.MAP_NODES.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null))], null),"utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MAP-NODES","MAP-NODES",-473811530,null)], null));
utils.core.pathcache25566 = info25567;

return info25567;
})():info__19843__auto__);
var precompiled25568 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [utils.core.MAP_NODES], null);
return (precompiled25568.cljs$core$IFn$_invoke$arity$1 ? precompiled25568.cljs$core$IFn$_invoke$arity$1(G__25569) : precompiled25568.call(null,G__25569));
} else {
return precompiled25568;
}
})(),(function (p1__25565_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.core.map.cljs$core$IFn$_invoke$arity$0(),cljs.core.vec(p1__25565_SHARP_));
}),m);
});
/**
 * 
 *   Applies a function over the keys in a provided map
 *   
 */
utils.core.map_rename_keys = (function utils$core$map_rename_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25570;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25571 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"com/rpl/specter.cljc",11,1,709,712,cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","MAP-KEYS","sp/MAP-KEYS",419588586,null))], null),"utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","MAP-KEYS","sp/MAP-KEYS",419588586,null)], null));
utils.core.pathcache25570 = info25571;

return info25571;
})():info__19843__auto__);
var precompiled25572 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null);
return (precompiled25572.cljs$core$IFn$_invoke$arity$1 ? precompiled25572.cljs$core$IFn$_invoke$arity$1(G__25573) : precompiled25572.call(null,G__25573));
} else {
return precompiled25572;
}
})(),f,m);
});
/**
 * 
 *   Applies a function to all values of a provided map
 *   
 */
utils.core.map_over_keys = (function utils$core$map_over_keys(f,m){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25574;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25575 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,698,701,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null))], null),"utils.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null)], null));
utils.core.pathcache25574 = info25575;

return info25575;
})():info__19843__auto__);
var precompiled25576 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled25576.cljs$core$IFn$_invoke$arity$1 ? precompiled25576.cljs$core$IFn$_invoke$arity$1(G__25577) : precompiled25576.call(null,G__25577));
} else {
return precompiled25576;
}
})(),f,m);
});
utils.core.keys__GT_strs = (function utils$core$keys__GT_strs(s){
return cuerdas.core.replace(s,/-_|_|!|-/,new cljs.core.PersistentArrayMap(null, 4, ["-_"," (","_",")","!","/","-"," "], null));
});
utils.core.keys__GT_strs.cljs$lang$test = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(utils.core.keys__GT_strs(cljs.core.name(new cljs.core.Keyword(null,"american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_","american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_",-1875535646))),"american indian area/alaska native area (reservation or statistical entity only) (or part)")){
return null;
} else {
throw (new Error("Assert failed: (= (keys->strs (name :american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_)) \"american indian area/alaska native area (reservation or statistical entity only) (or part)\")"));
}
});
utils.core.strs__GT_keys = (function utils$core$strs__GT_keys(s){
return cuerdas.core.replace(s,/ \(|\)|\/| /,new cljs.core.PersistentArrayMap(null, 4, [" (","-_",")","_","/","!"," ","-"], null));
});
utils.core.strs__GT_keys.cljs$lang$test = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(utils.core.strs__GT_keys("american indian area/alaska native area (reservation or statistical entity only) (or part)")),new cljs.core.Keyword(null,"american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_","american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_",-1875535646))){
return null;
} else {
throw (new Error("Assert failed: (= (keyword (strs->keys \"american indian area/alaska native area (reservation or statistical entity only) (or part)\")) :american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_)"));
}
});
/**
 * 
 *   I/O (chans) API which takes a URL from an input port (=I=), makes a `cljs-ajax`
 *   GET request to the provided URL and puts the response in the output (=O=) port.
 *   
 */
utils.core.IO_ajax_GET_json = (function utils$core$IO_ajax_GET_json(_EQ_URL_EQ_,_EQ_RES_EQ_){
var args = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_25582){
var state_val_25583 = (state_25582[(1)]);
if((state_val_25583 === (1))){
var state_25582__$1 = state_25582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25582__$1,(2),_EQ_RES_EQ_,r);
} else {
if((state_val_25583 === (2))){
var inst_25579 = (state_25582[(2)]);
var inst_25580 = cljs.core.async.close_BANG_(_EQ_RES_EQ_);
var state_25582__$1 = (function (){var statearr_25584 = state_25582;
(statearr_25584[(7)] = inst_25579);

return statearr_25584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25582__$1,inst_25580);
} else {
return null;
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__ = null;
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0 = (function (){
var statearr_25585 = [null,null,null,null,null,null,null,null];
(statearr_25585[(0)] = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__);

(statearr_25585[(1)] = (1));

return statearr_25585;
});
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1 = (function (state_25582){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25582);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25586){if((e25586 instanceof Object)){
var ex__13303__auto__ = e25586;
var statearr_25587_25615 = state_25582;
(statearr_25587_25615[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25616 = state_25582;
state_25582 = G__25616;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__ = function(state_25582){
switch(arguments.length){
case 0:
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1.call(this,state_25582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0;
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1;
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_25588 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25588[(6)] = c__13500__auto__);

return statearr_25588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (e){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_25598){
var state_val_25599 = (state_25598[(1)]);
if((state_val_25599 === (1))){
var inst_25589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25590 = [new cljs.core.Keyword(null,"parse-error","parse-error",255902478),new cljs.core.Keyword(null,"original-text","original-text",744448452)];
var inst_25591 = (new cljs.core.PersistentVector(null,2,(5),inst_25589,inst_25590,null));
var inst_25592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,inst_25591);
var inst_25593 = utils.core.error(inst_25592);
var state_25598__$1 = state_25598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25598__$1,(2),_EQ_RES_EQ_,inst_25593);
} else {
if((state_val_25599 === (2))){
var inst_25595 = (state_25598[(2)]);
var inst_25596 = cljs.core.async.close_BANG_(_EQ_RES_EQ_);
var state_25598__$1 = (function (){var statearr_25600 = state_25598;
(statearr_25600[(7)] = inst_25595);

return statearr_25600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25598__$1,inst_25596);
} else {
return null;
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__ = null;
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0 = (function (){
var statearr_25601 = [null,null,null,null,null,null,null,null];
(statearr_25601[(0)] = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__);

(statearr_25601[(1)] = (1));

return statearr_25601;
});
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1 = (function (state_25598){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25598);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25602){if((e25602 instanceof Object)){
var ex__13303__auto__ = e25602;
var statearr_25603_25617 = state_25598;
(statearr_25603_25617[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25618 = state_25598;
state_25598 = G__25618;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__ = function(state_25598){
switch(arguments.length){
case 0:
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1.call(this,state_25598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0;
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1;
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_25604 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25604[(6)] = c__13500__auto__);

return statearr_25604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
}),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"api","api",-899839580),(new XMLHttpRequest())], null);
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__,args){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__,args){
return (function (state_25609){
var state_val_25610 = (state_25609[(1)]);
if((state_val_25610 === (1))){
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25609__$1,(2),_EQ_URL_EQ_);
} else {
if((state_val_25610 === (2))){
var inst_25606 = (state_25609[(2)]);
var inst_25607 = ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(inst_25606,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25609__$1,inst_25607);
} else {
return null;
}
}
});})(c__13500__auto__,args))
;
return ((function (switch__13299__auto__,c__13500__auto__,args){
return (function() {
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__ = null;
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0 = (function (){
var statearr_25611 = [null,null,null,null,null,null,null];
(statearr_25611[(0)] = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__);

(statearr_25611[(1)] = (1));

return statearr_25611;
});
var utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1 = (function (state_25609){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25609);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25612){if((e25612 instanceof Object)){
var ex__13303__auto__ = e25612;
var statearr_25613_25619 = state_25609;
(statearr_25613_25619[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25620 = state_25609;
state_25609 = G__25620;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__ = function(state_25609){
switch(arguments.length){
case 0:
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1.call(this,state_25609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____0;
utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$IO_ajax_GET_json_$_state_machine__13300__auto____1;
return utils$core$IO_ajax_GET_json_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__,args))
})();
var state__13502__auto__ = (function (){var statearr_25614 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25614[(6)] = c__13500__auto__);

return statearr_25614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__,args))
);

return c__13500__auto__;
});
/**
 * 
 *   I/O (chans) API which takes a URL from an input port (=I=), makes a `cljs-ajax`
 *   GET request to the provided URL and puts the response in the output (=O=) port.
 *   
 */
utils.core.IO_cache_GET_edn = (function utils$core$IO_cache_GET_edn(_EQ_URL_EQ_,_EQ_RES_EQ_,cache){
if(cljs.core.empty_QMARK_(cljs.core.deref(cache))){
var args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_25628){
var state_val_25629 = (state_25628[(1)]);
if((state_val_25629 === (1))){
var inst_25621 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(r);
var state_25628__$1 = state_25628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25628__$1,(2),_EQ_RES_EQ_,inst_25621);
} else {
if((state_val_25629 === (2))){
var inst_25623 = (state_25628[(2)]);
var inst_25624 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(r);
var inst_25625 = cljs.core.reset_BANG_(cache,inst_25624);
var inst_25626 = cljs.core.async.close_BANG_(_EQ_RES_EQ_);
var state_25628__$1 = (function (){var statearr_25630 = state_25628;
(statearr_25630[(7)] = inst_25623);

(statearr_25630[(8)] = inst_25625);

return statearr_25630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25628__$1,inst_25626);
} else {
return null;
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = null;
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0 = (function (){
var statearr_25631 = [null,null,null,null,null,null,null,null,null];
(statearr_25631[(0)] = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__);

(statearr_25631[(1)] = (1));

return statearr_25631;
});
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1 = (function (state_25628){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25628);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25632){if((e25632 instanceof Object)){
var ex__13303__auto__ = e25632;
var statearr_25633_25673 = state_25628;
(statearr_25633_25673[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25674 = state_25628;
state_25628 = G__25674;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = function(state_25628){
switch(arguments.length){
case 0:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1.call(this,state_25628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0;
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1;
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_25634 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25634[(6)] = c__13500__auto__);

return statearr_25634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (e){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_25644){
var state_val_25645 = (state_25644[(1)]);
if((state_val_25645 === (1))){
var inst_25635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25636 = [new cljs.core.Keyword(null,"parse-error","parse-error",255902478),new cljs.core.Keyword(null,"original-text","original-text",744448452)];
var inst_25637 = (new cljs.core.PersistentVector(null,2,(5),inst_25635,inst_25636,null));
var inst_25638 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,inst_25637);
var inst_25639 = utils.core.error(inst_25638);
var state_25644__$1 = state_25644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25644__$1,(2),_EQ_RES_EQ_,inst_25639);
} else {
if((state_val_25645 === (2))){
var inst_25641 = (state_25644[(2)]);
var inst_25642 = cljs.core.async.close_BANG_(_EQ_RES_EQ_);
var state_25644__$1 = (function (){var statearr_25646 = state_25644;
(statearr_25646[(7)] = inst_25641);

return statearr_25646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25644__$1,inst_25642);
} else {
return null;
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = null;
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0 = (function (){
var statearr_25647 = [null,null,null,null,null,null,null,null];
(statearr_25647[(0)] = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__);

(statearr_25647[(1)] = (1));

return statearr_25647;
});
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1 = (function (state_25644){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25644);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25648){if((e25648 instanceof Object)){
var ex__13303__auto__ = e25648;
var statearr_25649_25675 = state_25644;
(statearr_25649_25675[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25676 = state_25644;
state_25644 = G__25676;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = function(state_25644){
switch(arguments.length){
case 0:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1.call(this,state_25644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0;
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1;
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_25650 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25650[(6)] = c__13500__auto__);

return statearr_25650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
})], null);
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__,args){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__,args){
return (function (state_25655){
var state_val_25656 = (state_25655[(1)]);
if((state_val_25656 === (1))){
var state_25655__$1 = state_25655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25655__$1,(2),_EQ_URL_EQ_);
} else {
if((state_val_25656 === (2))){
var inst_25652 = (state_25655[(2)]);
var inst_25653 = ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(inst_25652,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
var state_25655__$1 = state_25655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25655__$1,inst_25653);
} else {
return null;
}
}
});})(c__13500__auto__,args))
;
return ((function (switch__13299__auto__,c__13500__auto__,args){
return (function() {
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = null;
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0 = (function (){
var statearr_25657 = [null,null,null,null,null,null,null];
(statearr_25657[(0)] = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__);

(statearr_25657[(1)] = (1));

return statearr_25657;
});
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1 = (function (state_25655){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25655);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25658){if((e25658 instanceof Object)){
var ex__13303__auto__ = e25658;
var statearr_25659_25677 = state_25655;
(statearr_25659_25677[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25678 = state_25655;
state_25655 = G__25678;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = function(state_25655){
switch(arguments.length){
case 0:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1.call(this,state_25655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0;
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1;
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__,args))
})();
var state__13502__auto__ = (function (){var statearr_25660 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25660[(6)] = c__13500__auto__);

return statearr_25660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__,args))
);

return c__13500__auto__;
} else {
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_25666){
var state_val_25667 = (state_25666[(1)]);
if((state_val_25667 === (1))){
var inst_25661 = cljs.core.deref(cache);
var state_25666__$1 = state_25666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25666__$1,(2),_EQ_RES_EQ_,inst_25661);
} else {
if((state_val_25667 === (2))){
var inst_25663 = (state_25666[(2)]);
var inst_25664 = cljs.core.async.close_BANG_(_EQ_RES_EQ_);
var state_25666__$1 = (function (){var statearr_25668 = state_25666;
(statearr_25668[(7)] = inst_25663);

return statearr_25668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25666__$1,inst_25664);
} else {
return null;
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = null;
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0 = (function (){
var statearr_25669 = [null,null,null,null,null,null,null,null];
(statearr_25669[(0)] = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__);

(statearr_25669[(1)] = (1));

return statearr_25669;
});
var utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1 = (function (state_25666){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25666);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25670){if((e25670 instanceof Object)){
var ex__13303__auto__ = e25670;
var statearr_25671_25679 = state_25666;
(statearr_25671_25679[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25680 = state_25666;
state_25666 = G__25680;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__ = function(state_25666){
switch(arguments.length){
case 0:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1.call(this,state_25666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____0;
utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$IO_cache_GET_edn_$_state_machine__13300__auto____1;
return utils$core$IO_cache_GET_edn_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_25672 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25672[(6)] = c__13500__auto__);

return statearr_25672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
}
});
utils.core.js__GT_args = (function utils$core$js__GT_args(args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(args),utils.core.amap_type)){
var map__25681 = args;
var map__25681__$1 = ((((!((map__25681 == null)))?(((((map__25681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25681):map__25681);
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25681__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25683;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25684 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vintage","vintage",818195578)], null),"utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
utils.core.pathcache25683 = info25684;

return info25684;
})():info__19843__auto__);
var precompiled25685 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25686 = cljs.core.PersistentVector.EMPTY;
return (precompiled25685.cljs$core$IFn$_invoke$arity$1 ? precompiled25685.cljs$core$IFn$_invoke$arity$1(G__25686) : precompiled25685.call(null,G__25686));
} else {
return precompiled25685;
}
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)].join(''),args);
} else {
var geoCljs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_25687 = args;
var _STAR_runtime_state_STAR_25689 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25687,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_25688 = ((oops.core.validate_object_access_dynamically(target_obj_25687,(0),"geoHierarchy",true,true,false))?(target_obj_25687["geoHierarchy"]):null);
return next_obj_25688;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25689;
}})());
var vintage = (function (){var target_obj_25690 = args;
var _STAR_runtime_state_STAR_25692 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25690,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_25691 = ((oops.core.validate_object_access_dynamically(target_obj_25690,(0),"vintage",true,true,false))?(target_obj_25690["vintage"]):null);
return next_obj_25691;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25692;
}})();
var geoKeys = utils.core.map_rename_keys(utils.core.strs__GT_keys,geoCljs);
var target_obj_25693_25699 = args;
var _STAR_runtime_state_STAR_25695_25700 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25693_25699,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_25694_25701 = target_obj_25693_25699;
if(oops.core.validate_object_access_dynamically(parent_obj_25694_25701,(0),"vintage",true,true,true)){
(parent_obj_25694_25701["vintage"] = cljs.core.clj__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(vintage)].join('')));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25695_25700;
}
var target_obj_25696_25702 = args;
var _STAR_runtime_state_STAR_25698_25703 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25696_25702,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_25697_25704 = target_obj_25696_25702;
if(oops.core.validate_object_access_dynamically(parent_obj_25697_25704,(0),"geoHierarchy",true,true,true)){
(parent_obj_25697_25704["geoHierarchy"] = cljs.core.clj__GT_js(geoKeys));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25698_25703;
}
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
utils.core.args__GT_js = (function utils$core$args__GT_js(p__25706){
var map__25707 = p__25706;
var map__25707__$1 = ((((!((map__25707 == null)))?(((((map__25707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25707):map__25707);
var args = map__25707__$1;
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25707__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var geoKeys = utils.core.map_rename_keys(((function (map__25707,map__25707__$1,args,geoHierarchy){
return (function (p1__25705_SHARP_){
return utils.core.keys__GT_strs(cljs.core.name(p1__25705_SHARP_));
});})(map__25707,map__25707__$1,args,geoHierarchy))
,geoHierarchy);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js(geoKeys)], 0));

return cljs.core.clj__GT_js(com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25709;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25710 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740)], null),"utils.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
utils.core.pathcache25709 = info25710;

return info25710;
})():info__19843__auto__);
var precompiled25711 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25712 = cljs.core.PersistentVector.EMPTY;
return (precompiled25711.cljs$core$IFn$_invoke$arity$1 ? precompiled25711.cljs$core$IFn$_invoke$arity$1(G__25712) : precompiled25711.call(null,G__25712));
} else {
return precompiled25711;
}
})(),geoKeys,args));
});
/**
 * 
 *   Throws an error... meant to be used in transducer `comp`osed with another
 *   transducer or as `(map u/throw-error)`.
 *   
 */
utils.core.throw_err = (function utils$core$throw_err(x){
if((x instanceof utils.core.err_type)){
throw x;
} else {
return x;
}
});
/**
 * 
 *   Adapter, which wraps asynchronous I/O ports input to provide a synchronous
 *   input.
 * 
 *   This is good for kicking off async functions, but also is the required
 *   signature/contract for `pipeline-async`.
 *   
 */
utils.core.I_EQ_O_LT__LT__EQ_IO_EQ_ = (function utils$core$I_EQ_O_LT__LT__EQ_IO_EQ_(f){
return (function (I,_EQ_O_EQ_,_QMARK_state){
var _EQ_I_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__,_EQ_I_EQ_){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__,_EQ_I_EQ_){
return (function (state_25718){
var state_val_25719 = (state_25718[(1)]);
if((state_val_25719 === (1))){
var state_25718__$1 = state_25718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25718__$1,(2),_EQ_I_EQ_,I);
} else {
if((state_val_25719 === (2))){
var inst_25714 = (state_25718[(2)]);
var inst_25715 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(_EQ_I_EQ_,_EQ_O_EQ_,_QMARK_state) : f.call(null,_EQ_I_EQ_,_EQ_O_EQ_,_QMARK_state));
var inst_25716 = cljs.core.async.close_BANG_(_EQ_I_EQ_);
var state_25718__$1 = (function (){var statearr_25720 = state_25718;
(statearr_25720[(7)] = inst_25714);

(statearr_25720[(8)] = inst_25715);

return statearr_25720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25718__$1,inst_25716);
} else {
return null;
}
}
});})(c__13500__auto__,_EQ_I_EQ_))
;
return ((function (switch__13299__auto__,c__13500__auto__,_EQ_I_EQ_){
return (function() {
var utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__ = null;
var utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0 = (function (){
var statearr_25721 = [null,null,null,null,null,null,null,null,null];
(statearr_25721[(0)] = utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__);

(statearr_25721[(1)] = (1));

return statearr_25721;
});
var utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1 = (function (state_25718){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25718);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25722){if((e25722 instanceof Object)){
var ex__13303__auto__ = e25722;
var statearr_25723_25725 = state_25718;
(statearr_25723_25725[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25726 = state_25718;
state_25718 = G__25726;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__ = function(state_25718){
switch(arguments.length){
case 0:
return utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1.call(this,state_25718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0;
utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1;
return utils$core$I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__,_EQ_I_EQ_))
})();
var state__13502__auto__ = (function (){var statearr_25724 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25724[(6)] = c__13500__auto__);

return statearr_25724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__,_EQ_I_EQ_))
);

return c__13500__auto__;
});
});
/**
 * 
 *   Adapter, which wraps asynchronous I/O ports input to provide a synchronous
 *   input and expose the output to a callback and converts any #js args to proper
 *   cljs syntax (with keyword translation)
 * 
 *   This is good for touch & go asynchronous functions, which do not require
 *   'enduring relationships' or concerted application between other async
 *   functions (e.g., exposing asynchronous functions as a library).
 *   
 */
utils.core.args_PLUS_cb_LT__LT__EQ_IO_EQ_ = (function utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ_(f){
return (function (I,cb,_QMARK_state){
var _EQ_I_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _EQ_O_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(utils.core.throw_err));
var args = utils.core.js__GT_args(I);
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args){
return (function (state_25734){
var state_val_25735 = (state_25734[(1)]);
if((state_val_25735 === (1))){
var state_25734__$1 = state_25734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25734__$1,(2),_EQ_I_EQ_,args);
} else {
if((state_val_25735 === (2))){
var inst_25729 = (state_25734[(2)]);
var inst_25730 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(_EQ_I_EQ_,_EQ_O_EQ_,_QMARK_state) : f.call(null,_EQ_I_EQ_,_EQ_O_EQ_,_QMARK_state));
var inst_25731 = (function (){return ((function (inst_25729,inst_25730,state_val_25735,c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args){
return (function (p1__25727_SHARP_){
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__25727_SHARP_) : cb.call(null,p1__25727_SHARP_));

cljs.core.async.close_BANG_(_EQ_I_EQ_);

return cljs.core.async.close_BANG_(_EQ_O_EQ_);
});
;})(inst_25729,inst_25730,state_val_25735,c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args))
})();
var inst_25732 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_O_EQ_,inst_25731);
var state_25734__$1 = (function (){var statearr_25736 = state_25734;
(statearr_25736[(7)] = inst_25730);

(statearr_25736[(8)] = inst_25729);

return statearr_25736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25734__$1,inst_25732);
} else {
return null;
}
}
});})(c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args))
;
return ((function (switch__13299__auto__,c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args){
return (function() {
var utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__ = null;
var utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0 = (function (){
var statearr_25737 = [null,null,null,null,null,null,null,null,null];
(statearr_25737[(0)] = utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__);

(statearr_25737[(1)] = (1));

return statearr_25737;
});
var utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1 = (function (state_25734){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25734);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25738){if((e25738 instanceof Object)){
var ex__13303__auto__ = e25738;
var statearr_25739_25741 = state_25734;
(statearr_25739_25741[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25742 = state_25734;
state_25734 = G__25742;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__ = function(state_25734){
switch(arguments.length){
case 0:
return utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1.call(this,state_25734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0;
utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1;
return utils$core$args_PLUS_cb_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args))
})();
var state__13502__auto__ = (function (){var statearr_25740 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25740[(6)] = c__13500__auto__);

return statearr_25740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__,_EQ_I_EQ_,_EQ_O_EQ_,args))
);

return c__13500__auto__;
});
});
/**
 * 
 *   Adapter, which wraps asynchronous I/O ports input to provide a synchronous
 *   input, which converts values from =I= channel to js arguments. Created
 *   initially for async js library (e.g., `workerpool`) interop.
 *   
 */
utils.core.js_I_EQ_O_LT__LT__EQ_IO_EQ_ = (function utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ_(f){
return (function (I,_EQ_O_EQ_,_QMARK_state){
var _EQ_I_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var js_args = cljs.core.clj__GT_js(I);
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__,_EQ_I_EQ_,js_args){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__,_EQ_I_EQ_,js_args){
return (function (state_25748){
var state_val_25749 = (state_25748[(1)]);
if((state_val_25749 === (1))){
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25748__$1,(2),_EQ_I_EQ_,js_args);
} else {
if((state_val_25749 === (2))){
var inst_25744 = (state_25748[(2)]);
var inst_25745 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(_EQ_I_EQ_,_EQ_O_EQ_,_QMARK_state) : f.call(null,_EQ_I_EQ_,_EQ_O_EQ_,_QMARK_state));
var inst_25746 = cljs.core.async.close_BANG_(_EQ_I_EQ_);
var state_25748__$1 = (function (){var statearr_25750 = state_25748;
(statearr_25750[(7)] = inst_25744);

(statearr_25750[(8)] = inst_25745);

return statearr_25750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25748__$1,inst_25746);
} else {
return null;
}
}
});})(c__13500__auto__,_EQ_I_EQ_,js_args))
;
return ((function (switch__13299__auto__,c__13500__auto__,_EQ_I_EQ_,js_args){
return (function() {
var utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__ = null;
var utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0 = (function (){
var statearr_25751 = [null,null,null,null,null,null,null,null,null];
(statearr_25751[(0)] = utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__);

(statearr_25751[(1)] = (1));

return statearr_25751;
});
var utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1 = (function (state_25748){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25748);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25752){if((e25752 instanceof Object)){
var ex__13303__auto__ = e25752;
var statearr_25753_25755 = state_25748;
(statearr_25753_25755[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25756 = state_25748;
state_25748 = G__25756;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__ = function(state_25748){
switch(arguments.length){
case 0:
return utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1.call(this,state_25748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____0;
utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto____1;
return utils$core$js_I_EQ_O_LT__LT__EQ_IO_EQ__$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__,_EQ_I_EQ_,js_args))
})();
var state__13502__auto__ = (function (){var statearr_25754 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25754[(6)] = c__13500__auto__);

return statearr_25754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__,_EQ_I_EQ_,js_args))
);

return c__13500__auto__;
});
});
utils.core._EQ_IO_LT__js__LT_3_fn = (function utils$core$_EQ_IO_LT__js__LT_3_fn(_LT_3_fn){
return (function (_EQ_I_EQ_,_EQ_O_EQ_){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_25779){
var state_val_25780 = (state_25779[(1)]);
if((state_val_25780 === (1))){
var state_25779__$1 = state_25779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25779__$1,(3),_EQ_I_EQ_);
} else {
if((state_val_25780 === (2))){
var inst_25766 = (state_25779[(7)]);
var inst_25765 = (state_25779[(2)]);
var inst_25766__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25765,(0),null);
var inst_25767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25765,(1),null);
var inst_25768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25766__$1,null);
var state_25779__$1 = (function (){var statearr_25781 = state_25779;
(statearr_25781[(7)] = inst_25766__$1);

(statearr_25781[(8)] = inst_25767);

return statearr_25781;
})();
if(inst_25768){
var statearr_25782_25790 = state_25779__$1;
(statearr_25782_25790[(1)] = (4));

} else {
var statearr_25783_25791 = state_25779__$1;
(statearr_25783_25791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25780 === (3))){
var inst_25761 = (state_25779[(2)]);
var inst_25762 = (_LT_3_fn.cljs$core$IFn$_invoke$arity$1 ? _LT_3_fn.cljs$core$IFn$_invoke$arity$1(inst_25761) : _LT_3_fn.call(null,inst_25761));
var inst_25763 = cljs_promises.async.pair_port(inst_25762);
var state_25779__$1 = state_25779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25779__$1,(2),inst_25763);
} else {
if((state_val_25780 === (4))){
var inst_25767 = (state_25779[(8)]);
var state_25779__$1 = state_25779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25779__$1,(7),_EQ_O_EQ_,inst_25767);
} else {
if((state_val_25780 === (5))){
var inst_25766 = (state_25779[(7)]);
var inst_25773 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_25766);
var state_25779__$1 = state_25779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25779__$1,(8),_EQ_O_EQ_,inst_25773);
} else {
if((state_val_25780 === (6))){
var inst_25777 = (state_25779[(2)]);
var state_25779__$1 = state_25779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25779__$1,inst_25777);
} else {
if((state_val_25780 === (7))){
var inst_25771 = (state_25779[(2)]);
var state_25779__$1 = state_25779;
var statearr_25784_25792 = state_25779__$1;
(statearr_25784_25792[(2)] = inst_25771);

(statearr_25784_25792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25780 === (8))){
var inst_25775 = (state_25779[(2)]);
var state_25779__$1 = state_25779;
var statearr_25785_25793 = state_25779__$1;
(statearr_25785_25793[(2)] = inst_25775);

(statearr_25785_25793[(1)] = (6));


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
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto__ = null;
var utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto____0 = (function (){
var statearr_25786 = [null,null,null,null,null,null,null,null,null];
(statearr_25786[(0)] = utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto__);

(statearr_25786[(1)] = (1));

return statearr_25786;
});
var utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto____1 = (function (state_25779){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_25779);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e25787){if((e25787 instanceof Object)){
var ex__13303__auto__ = e25787;
var statearr_25788_25794 = state_25779;
(statearr_25788_25794[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25795 = state_25779;
state_25779 = G__25795;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto__ = function(state_25779){
switch(arguments.length){
case 0:
return utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto____0.call(this);
case 1:
return utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto____1.call(this,state_25779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto____0;
utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto____1;
return utils$core$_EQ_IO_LT__js__LT_3_fn_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_25789 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_25789[(6)] = c__13500__auto__);

return statearr_25789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
});
});
/**
 * 
 *   Transducifier wrapper, which takes the seed of a transducer (essential
 *   operation) with a standardized `xf result input` contract and wraps it in the
 *   necessary boilerplate to correctly function as a stateless transducer.
 * 
 *   Example of tranducer seed with contract required for this wrapper:
 * 
 *   (defn xf-seed-form
 *  [xf result input]
 *  (xf result {(keyword (get-in input [:properties :GEOID])) input}))
 *   
 */
utils.core.xf_LT__LT_ = (function utils$core$xf_LT__LT_(f){
return (function (rf){
return (function() {
var G__25796 = null;
var G__25796__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__25796__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__25796__2 = (function (result,input){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(rf,result,input) : f.call(null,rf,result,input));
});
G__25796 = function(result,input){
switch(arguments.length){
case 0:
return G__25796__0.call(this);
case 1:
return G__25796__1.call(this,result);
case 2:
return G__25796__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25796.cljs$core$IFn$_invoke$arity$0 = G__25796__0;
G__25796.cljs$core$IFn$_invoke$arity$1 = G__25796__1;
G__25796.cljs$core$IFn$_invoke$arity$2 = G__25796__2;
return G__25796;
})()
});
});
/**
 * 
 *   Stateful transducifier wrapper, which takes the seed of a transducer (essential
 *   operation) with a standardized `xf result input` contract and wraps it in the
 *   necessary boilerplate to correctly function as a _stateful_ transducer.
 * 
 *   Only avails a single state container: `state`
 * 
 *   Example of tranducer seed with contract required for this wrapper:
 * 
 *   (defn xf!-seed-form
 *  [state xf result input]
 *    (let [prev @state]
 *      (if (nil? prev)
 *          (do (vreset! state (vec (map keyword item)))
 *            nil)
 *          (xf result (zipmap prev (vec item))))))
 *   
 */
utils.core.xf_BANG__LT__LT_ = (function utils$core$xf_BANG__LT__LT_(f){
return (function (rf){
var state = cljs.core.volatile_BANG_(null);
return ((function (state){
return (function() {
var G__25797 = null;
var G__25797__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__25797__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__25797__2 = (function (result,input){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(state,rf,result,input) : f.call(null,state,rf,result,input));
});
G__25797 = function(result,input){
switch(arguments.length){
case 0:
return G__25797__0.call(this);
case 1:
return G__25797__1.call(this,result);
case 2:
return G__25797__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25797.cljs$core$IFn$_invoke$arity$0 = G__25797__0;
G__25797.cljs$core$IFn$_invoke$arity$1 = G__25797__1;
G__25797.cljs$core$IFn$_invoke$arity$2 = G__25797__2;
return G__25797;
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
 */
utils.core.xfxf_LT__LT_ = (function utils$core$xfxf_LT__LT_(xfn,rf_){
return (function (rf){
return (function() {
var G__25800 = null;
var G__25800__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__25800__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__25800__2 = (function (result,item){
var G__25798 = result;
var G__25799 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xfn,rf_,item);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__25798,G__25799) : rf.call(null,G__25798,G__25799));
});
G__25800 = function(result,item){
switch(arguments.length){
case 0:
return G__25800__0.call(this);
case 1:
return G__25800__1.call(this,result);
case 2:
return G__25800__2.call(this,result,item);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25800.cljs$core$IFn$_invoke$arity$0 = G__25800__0;
G__25800.cljs$core$IFn$_invoke$arity$1 = G__25800__1;
G__25800.cljs$core$IFn$_invoke$arity$2 = G__25800__2;
return G__25800;
})()
});
});
/**
 * 
 *   Maps a provided function to a specific index + 1 of a provided collection.
 *   
 */
utils.core.map_target = (function utils$core$map_target(f,target,coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25801_SHARP_,p2__25802_SHARP_){
if((cljs.core.mod((p1__25801_SHARP_ + (1)),target) === (0))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__25802_SHARP_) : f.call(null,p2__25802_SHARP_));
} else {
return p2__25802_SHARP_;
}
}),coll);
});
/**
 * 
 *   Maps a provided function over a given vector of indeces of a provided
 *   collection.
 *   
 */
utils.core.map_target_idcs = (function utils$core$map_target_idcs(f,targets,coll){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25803;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25804 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1054,1056,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1099,1099,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,731,734,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",10,1,9304,9304,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(targets,new cljs.core.Symbol(null,"targets","targets",-639472363,null))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))], null),cljs.core.list(new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null)))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,725,728,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null))], null)], null),"utils.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"targets","targets",-639472363,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),cljs.core.list(new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null))),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)], null),new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"targets","targets",-639472363,null),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)], null));
utils.core.pathcache25803 = info25804;

return info25804;
})():info__19843__auto__);
var precompiled25805 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25806 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__25807 = com.rpl.specter.FIRST;
var G__25808 = cljs.core.set(targets);
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25807,G__25808) : com.rpl.specter.selected_QMARK_.call(null,G__25807,G__25808));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,targets,com.rpl.specter.LAST], null);
return (precompiled25805.cljs$core$IFn$_invoke$arity$1 ? precompiled25805.cljs$core$IFn$_invoke$arity$1(G__25806) : precompiled25805.call(null,G__25806));
} else {
return precompiled25805;
}
})(),f,coll);
});
/**
 * 
 *   Maps a provided function over a given range of indeces (vector of beginning
 *   to end) of a provided collection.
 *   
 */
utils.core.map_idcs_range = (function utils$core$map_idcs_range(f,p__25809,coll){
var vec__25810 = p__25809;
var r_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25810,(0),null);
var r_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25810,(1),null);
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = utils.core.pathcache25813;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info25814 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.INDEXED_VALS,new cljs.core.Var(function(){return com.rpl.specter.INDEXED_VALS;},new cljs.core.Symbol("com.rpl.specter","INDEXED-VALS","com.rpl.specter/INDEXED-VALS",-689218882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"INDEXED-VALS","INDEXED-VALS",1518727237,null),"com/rpl/specter.cljc",15,1,1054,1056,cljs.core.List.EMPTY,"`indexed-vals` with a starting index of 0.",(cljs.core.truth_(com.rpl.specter.INDEXED_VALS)?com.rpl.specter.INDEXED_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.selected_QMARK_,new cljs.core.Var(function(){return com.rpl.specter.selected_QMARK_;},new cljs.core.Symbol("com.rpl.specter","selected?","com.rpl.specter/selected?",-1579847062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),"com/rpl/specter.cljc",25,1,1099,1099,cljs.core.List.EMPTY,"Filters the current value based on whether a path finds anything.\n  e.g. (selected? :vals ALL even?) keeps the current element only if an\n  even number exists for the :vals key.",(cljs.core.truth_(com.rpl.specter.selected_QMARK_)?com.rpl.specter.selected_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"com/rpl/specter.cljc",8,1,731,734,cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.set,new cljs.core.Var(function(){return cljs.core.set;},new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"set","set",1945134081,null),"cljs/core.cljs",10,1,9304,9304,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"Returns a set of the distinct elements of coll.",(cljs.core.truth_(cljs.core.set)?cljs.core.set.cljs$lang$test:null)])),new cljs.core.Symbol(null,"set","set",1945134081,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(cljs.core.range,new cljs.core.Var(function(){return cljs.core.range;},new cljs.core.Symbol("cljs.core","range","cljs.core/range",-1421369894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),"cljs/core.cljs",12,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),1,9634,9634,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"step","step",-1365547645,null)], null)),"Returns a lazy seq of nums from start (inclusive) to end\n   (exclusive), by step, where start defaults to 0, step to 1,\n   and end to infinity.",(cljs.core.truth_(cljs.core.range)?cljs.core.range.cljs$lang$test:null)])),new cljs.core.Symbol(null,"range","range",-1014743483,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(r_start,new cljs.core.Symbol(null,"r-start","r-start",1011309134,null)),com.rpl.specter.impl.__GT_LocalSym(r_end,new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))], null),cljs.core.list(new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null))))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"com/rpl/specter.cljc",7,1,725,728,cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null))], null)], null),"utils.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),cljs.core.list(new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null)))),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)], null),new cljs.core.Symbol("sp","INDEXED-VALS","sp/INDEXED-VALS",1522139618,null),new cljs.core.Symbol("sp","selected?","sp/selected?",897985190,null),new cljs.core.Symbol("sp","FIRST","sp/FIRST",1484627862,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"r-start","r-start",1011309134,null),new cljs.core.Symbol(null,"r-end","r-end",1007283372,null),new cljs.core.Symbol("sp","LAST","sp/LAST",-1146340282,null)], null));
utils.core.pathcache25813 = info25814;

return info25814;
})():info__19843__auto__);
var precompiled25815 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__25816 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.INDEXED_VALS,(function (){var G__25817 = com.rpl.specter.FIRST;
var G__25818 = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(r_start,r_end));
return (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25817,G__25818) : com.rpl.specter.selected_QMARK_.call(null,G__25817,G__25818));
})(),com.rpl.specter.LAST], null),com.rpl.specter.INDEXED_VALS,com.rpl.specter.selected_QMARK_,com.rpl.specter.FIRST,cljs.core.set,cljs.core.range,r_start,r_end,com.rpl.specter.LAST], null);
return (precompiled25815.cljs$core$IFn$_invoke$arity$1 ? precompiled25815.cljs$core$IFn$_invoke$arity$1(G__25816) : precompiled25815.call(null,G__25816));
} else {
return precompiled25815;
}
})(),f,coll);
});

//# sourceMappingURL=utils.core.js.map
