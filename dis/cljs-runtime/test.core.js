goog.provide('test.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('oops.core');
goog.require('shadow.js.shim.module$dotenv');
test.core.stats_key = (function (){var target_obj_14959 = shadow.js.shim.module$dotenv.load();
var _STAR_runtime_state_STAR_14962 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_14959,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_14960 = ((oops.core.validate_object_access_dynamically(target_obj_14959,(0),"parsed",true,true,false))?(target_obj_14959["parsed"]):null);
var next_obj_14961 = ((oops.core.validate_object_access_dynamically(next_obj_14960,(0),"Census_Key_Pro",true,true,false))?(next_obj_14960["Census_Key_Pro"]):null);
return next_obj_14961;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_14962;
}})();
test.core.test_args_1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vintage","vintage",818195578),"2000",new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),28.2639,new cljs.core.Keyword(null,"lng","lng",1667213918),-80.7214], null),new cljs.core.Keyword(null,"state-legislative-district-_upper-chamber_","state-legislative-district-_upper-chamber_",-1881525900),"*"], null),new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs5"], null),new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),"500k",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B01001_001E"], null),new cljs.core.Keyword(null,"statsKey","statsKey",452548050),test.core.stats_key], null);
test.core.test_args_2 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vintage","vintage",818195578),(2016),new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"place","place",-819689466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),28.2639,new cljs.core.Keyword(null,"lng","lng",1667213918),-80.7214], null)], null),new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs5"], null),new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),"500k",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B01001_001E"], null),new cljs.core.Keyword(null,"statsKey","statsKey",452548050),test.core.stats_key], null);
test.core.test_args_3 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vintage","vintage",818195578),"2016",new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"county","county",-1347113013),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),28.2639,new cljs.core.Keyword(null,"lng","lng",1667213918),-80.7214], null),new cljs.core.Keyword(null,"tract","tract",1286775780),"*"], null),new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs5"], null),new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),"500k",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B01001_001E"], null),new cljs.core.Keyword(null,"statsKey","statsKey",452548050),test.core.stats_key], null);
test.core.test_args_4 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vintage","vintage",818195578),(2010),new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),"01",new cljs.core.Keyword(null,"county","county",-1347113013),"001",new cljs.core.Keyword(null,"someting-non-existant","someting-non-existant",-1007107074),"*"], null),new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs5"], null),new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),"500k",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B01001_001E"], null),new cljs.core.Keyword(null,"statsKey","statsKey",452548050),test.core.stats_key], null);
test.core.test_args_5 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vintage","vintage",818195578),(2016),new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),"*",new cljs.core.Keyword(null,"tract","tract",1286775780),"*"], null),new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs5"], null),new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),"500k",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B01001_001E"], null),new cljs.core.Keyword(null,"statsKey","statsKey",452548050),test.core.stats_key], null);
test.core.test_args_6 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vintage","vintage",818195578),"2016",new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),"01",new cljs.core.Keyword(null,"county","county",-1347113013),"001",new cljs.core.Keyword(null,"tract","tract",1286775780),"*"], null),new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs5"], null),new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),"500k",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B01001_001E"], null),new cljs.core.Keyword(null,"statsKey","statsKey",452548050),test.core.stats_key], null);
test.core.test_js_args_1 = ({"vintage": "2016", "geoHierarchy": ({"state": "12", "state legislative district (upper chamber)": "*"}), "sourcePath": ["acs","acs5"], "values": ["B01001_001E","NAME"], "predicates": ({"B00001_001E": "0:30000"}), "geoResolution": "500k", "statsKey": test.core.stats_key});
test.core.test_js_args_2 = ({"vintage": (2016), "geoHierarchy": ({"state": ({"lat": 28.2639, "lng": -80.7214}), "state legislative district (upper chamber)": "*"}), "sourcePath": ["acs","acs5"], "values": ["B01001_001E","NAME"], "predicates": ({"B00001_001E": "0:30000"}), "geoResolution": "500k", "statsKey": test.core.stats_key});
test.core.test_arg_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"srcP","srcP",-756584511),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"vals","vals",768058733),new cljs.core.Keyword(null,"vins","vins",-383580592),new cljs.core.Keyword(null,"geo1","geo1",326158261),new cljs.core.Keyword(null,"geo2","geo2",569040151),new cljs.core.Keyword(null,"crds","crds",1420300055),new cljs.core.Keyword(null,"geoR","geoR",-723506373),new cljs.core.Keyword(null,"sKey","sKey",-940166724)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"2000","2000",-1692316449),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nonemp"], null),new cljs.core.Keyword(null,"2010","2010",164508593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dec","sf1"], null),new cljs.core.Keyword(null,"2015","2015",1786031105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cbp"], null),new cljs.core.Keyword(null,"2016","2016",337220293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs5"], null),new cljs.core.Keyword(null,"2017","2017",202544450),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acs","acs1"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"2000","2000",-1692316449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NAICS1997","NAICS1997",187234192),"72"], null),new cljs.core.Keyword(null,"2010","2010",164508593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"H016001","H016001",-784409322),"0:500"], null),new cljs.core.Keyword(null,"2015","2015",1786031105),null,new cljs.core.Keyword(null,"2016","2016",337220293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B00001_001E","B00001_001E",-2102832043),"0:1000000"], null),new cljs.core.Keyword(null,"2017","2017",202544450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B00001_001E","B00001_001E",-2102832043),"0:1000000"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"2000","2000",-1692316449),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NAME","NESTAB"], null),new cljs.core.Keyword(null,"2010","2010",164508593),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["P001001"], null),new cljs.core.Keyword(null,"2015","2015",1786031105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ESTAB"], null),new cljs.core.Keyword(null,"2016","2016",337220293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B01001_001E"], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),"2000",(2010),"2010",(2015),"2015",(2016),"2016",(2017),(2014)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invalid","invalid",412869516),"*"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),"01"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"coords","coords",-599429112)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"county","county",-1347113013),new cljs.core.Keyword(null,"coords","coords",-599429112)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),"01"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"county","county",-1347113013),"001"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"county","county",-1347113013),"*"], null),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557),"*"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),28.2639,new cljs.core.Keyword(null,"lng","lng",1667213918),-80.7214], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["20m","5m","500k"], null),test.core.stats_key]);
test.core.get_path = (function test$core$get_path(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14964 = arguments.length;
var i__4532__auto___14965 = (0);
while(true){
if((i__4532__auto___14965 < len__4531__auto___14964)){
args__4534__auto__.push((arguments[i__4532__auto___14965]));

var G__14966 = (i__4532__auto___14965 + (1));
i__4532__auto___14965 = G__14966;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

test.core.get_path.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(test.core.test_arg_map,path);
});

test.core.get_path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
test.core.get_path.cljs$lang$applyTo = (function (seq14963){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14963));
});

test.core.test_args = (function test$core$test_args(vin,geo,res,s_key){
var vkey = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vins","vins",-383580592),vin], 0)))].join(''));
var vins = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vintage","vintage",818195578),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vins","vins",-383580592),vin], 0))], null);
var srcs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sourcePath","sourcePath",-986600405),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"srcP","srcP",-756584511),vkey], 0))], null);
var prds = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicates","predicates",620402712),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pred","pred",1927423397),vkey], 0))], null);
var vals = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),vkey], 0))], null);
var ge1s = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coords","coords",-599429112)], null),com.rpl.specter.impl.compiled_select_STAR_((function (){var info__13096__auto__ = test.core.pathcache14967;
var info__13096__auto____$1 = (((info__13096__auto__ == null))?(function (){var info14968 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",(11),(1),(698),(701),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null))], null),"test.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null)], null));
test.core.pathcache14967 = info14968;

return info14968;
})():info__13096__auto__);
var precompiled14969 = com.rpl.specter.impl.cached_path_info_precompiled(info__13096__auto____$1);
var dynamic_QMARK___13097__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__13096__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___13097__auto__)){
var G__14970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled14969.cljs$core$IFn$_invoke$arity$1 ? precompiled14969.cljs$core$IFn$_invoke$arity$1(G__14970) : precompiled14969.call(null,G__14970));
} else {
return precompiled14969;
}
})(),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"geo1","geo1",326158261),geo], 0)))))?com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__13096__auto__ = test.core.pathcache14971;
var info__13096__auto____$1 = (((info__13096__auto__ == null))?(function (){var info14972 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",(11),(1),(698),(701),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null))], null),"test.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null)], null));
test.core.pathcache14971 = info14972;

return info14972;
})():info__13096__auto__);
var precompiled14973 = com.rpl.specter.impl.cached_path_info_precompiled(info__13096__auto____$1);
var dynamic_QMARK___13097__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__13096__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___13097__auto__)){
var G__14974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled14973.cljs$core$IFn$_invoke$arity$1 ? precompiled14973.cljs$core$IFn$_invoke$arity$1(G__14974) : precompiled14973.call(null,G__14974));
} else {
return precompiled14973;
}
})(),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"crds","crds",1420300055),(0)], 0)),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"geo1","geo1",326158261),geo], 0))):test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"geo1","geo1",326158261),geo], 0)));
var ge2s = test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"geo2","geo2",569040151),geo], 0));
var geoH = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,ge1s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ge2s], 0))], null);
var ress = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050),test.core.get_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"geoR","geoR",-723506373),res], 0))], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vkey,vins,srcs,prds,vals,ge1s,ge2s,geoH,ress){
return (function (val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),com.rpl.specter.impl.compiled_select_STAR_((function (){var info__13096__auto__ = test.core.pathcache14975;
var info__13096__auto____$1 = (((info__13096__auto__ == null))?(function (){var info14976 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",(11),(1),(698),(701),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null))], null),"test.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sp","MAP-VALS","sp/MAP-VALS",-471139658,null)], null));
test.core.pathcache14975 = info14976;

return info14976;
})():info__13096__auto__);
var precompiled14977 = com.rpl.specter.impl.cached_path_info_precompiled(info__13096__auto____$1);
var dynamic_QMARK___13097__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__13096__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___13097__auto__)){
var G__14978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null);
return (precompiled14977.cljs$core$IFn$_invoke$arity$1 ? precompiled14977.cljs$core$IFn$_invoke$arity$1(G__14978) : precompiled14977.call(null,G__14978));
} else {
return precompiled14977;
}
})(),val))){
return null;
} else {
return val;
}
});})(vkey,vins,srcs,prds,vals,ge1s,ge2s,geoH,ress))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [vins,geoH,srcs,ress,prds,vals,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),s_key))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"statsKey","statsKey",452548050),test.core.stats_key], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"statsKey","statsKey",452548050),null], null))], null)));
});
test.core.args_ok_wms_only = test.core.test_args((9),(2),(4),(0));
test.core.args_na_wms_only = test.core.test_args((9),(0),(4),(0));
test.core.args_ok_s_PLUS_g_v_PLUS_ps = test.core.test_args((6),(1),(2),(1));
test.core.args_na_sts_pred = test.core.test_args((8),(1),(3),(1));
test.core.args_ok_geo_only = test.core.test_args((9),(2),(2),(0));
test.core.args_na_geo_only = test.core.test_args((9),(4),(1),(0));
test.core.args_ok_s_PLUS_g_vals = test.core.test_args((5),(3),(0),(1));
test.core.args_ok_sts_vals = test.core.test_args((5),(3),(3),(1));
test.core.args_ok_s_PLUS_g_v_PLUS_ps = test.core.test_args((6),(3),(1),(1));
test.core.args_ok_sts_v_PLUS_ps = test.core.test_args((6),(3),(3),(1));
test.core.args_na_s_PLUS_g_vals = test.core.test_args((5),(0),(0),(1));
test.core.args_na_sts_vals = test.core.test_args((5),(0),(3),(1));

//# sourceMappingURL=test.core.js.map
