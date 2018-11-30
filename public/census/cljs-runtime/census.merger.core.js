goog.provide('census.merger.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cuerdas.core');
goog.require('net.cgrand.xforms');
goog.require('census.utils.core');
census.merger.core.deep_merge_a_coll = (function census$merger$core$deep_merge_a_coll(maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function() { 
var G__19284__delegate = function (args){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,args)){
return (census.merger.core.deep_merge_a_coll.cljs$core$IFn$_invoke$arity$1 ? census.merger.core.deep_merge_a_coll.cljs$core$IFn$_invoke$arity$1(args) : census.merger.core.deep_merge_a_coll.call(null,args));
} else {
return cljs.core.last(args);
}
};
var G__19284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19286__i = 0, G__19286__a = new Array(arguments.length -  0);
while (G__19286__i < G__19286__a.length) {G__19286__a[G__19286__i] = arguments[G__19286__i + 0]; ++G__19286__i;}
  args = new cljs.core.IndexedSeq(G__19286__a,0,null);
} 
return G__19284__delegate.call(this,args);};
G__19284.cljs$lang$maxFixedArity = 0;
G__19284.cljs$lang$applyTo = (function (arglist__19287){
var args = cljs.core.seq(arglist__19287);
return G__19284__delegate(args);
});
G__19284.cljs$core$IFn$_invoke$arity$variadic = G__19284__delegate;
return G__19284;
})()
,maps);
});
/**
 * 
 *   Transducer, which takes 2->3 keys that serve to filter a merged list of two
 *   maps to return a function, which returns a list of only those maps which have
 *   a key from both maps. The presence of both keys within the map signifies that
 *   the maps have merged. This ensures the returned list contains only the overlap
 *   between the two, i.e., excluding non-merged maps.
 *   
 */
census.merger.core.remove_unmerged = (function census$merger$core$remove_unmerged(IDS){
return (function (m){
var vec__19033 = net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,m);
var vec__19036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19033,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036,(1),null);
if(cljs.core.not_any_QMARK_(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"properties","properties",685819552)),IDS))){
return v;
} else {
return null;
}
});
});
census.merger.core.xf_LT__Grands__GT_JS = (function census$merger$core$xf_LT__Grands__GT_JS(IDS){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.merger.core.deep_merge_a_coll),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.merger.core.remove_unmerged(IDS)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js)], 0));
});
/**
 * 
 *   Implementation of `group-by` (produces a map) via @cgrand's `xforms`
 *   See 'Usage': https://github.com/cgrand/xforms#usage
 *   
 */
census.merger.core.xf_Grands_M__GT_JSON = (function census$merger$core$xf_Grands_M__GT_JSON(IDS){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,census.merger.core.xf_LT__Grands__GT_JS(IDS)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__19043){
var vec__19044 = p__19043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(1),null);
return (v == null);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__19042_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__19042_SHARP_,(1));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(JSON.stringify)], 0));
});
census.merger.core.I_EQ_OE_M_spooler = (function census$merger$core$I_EQ_OE_M_spooler($g$,_EQ_arg_EQ_,cfgs){
return (function (_EQ_O_EQ_,_EQ_E_EQ_){
var _EQ_args_EQ_ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__,_EQ_args_EQ_){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__,_EQ_args_EQ_){
return (function (state_19210){
var state_val_19211 = (state_19210[(1)]);
if((state_val_19211 === (7))){
var inst_19082 = (state_19210[(7)]);
var state_19210__$1 = state_19210;
if(cljs.core.truth_(inst_19082)){
var statearr_19212_19289 = state_19210__$1;
(statearr_19212_19289[(1)] = (10));

} else {
var statearr_19213_19291 = state_19210__$1;
(statearr_19213_19291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (20))){
var inst_19113 = (state_19210[(8)]);
var inst_19131 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19113);
var state_19210__$1 = state_19210;
var statearr_19214_19292 = state_19210__$1;
(statearr_19214_19292[(2)] = inst_19131);

(statearr_19214_19292[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (27))){
var inst_19074 = (state_19210[(9)]);
var inst_19140 = (state_19210[(10)]);
var inst_19076 = (state_19210[(11)]);
var inst_19160 = (state_19210[(12)]);
var inst_19142 = (state_19210[(13)]);
var inst_19168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19160,(0),null);
var inst_19169 = cljs.core.async.close_BANG_(inst_19140);
var inst_19170 = cljs.core.async.close_BANG_(inst_19142);
var inst_19171 = cljs.core.rest(inst_19074);
var inst_19172 = cljs.core.second(inst_19074);
var inst_19173 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19076,inst_19168);
var inst_19074__$1 = inst_19171;
var inst_19075 = inst_19172;
var inst_19076__$1 = inst_19173;
var state_19210__$1 = (function (){var statearr_19215 = state_19210;
(statearr_19215[(14)] = inst_19170);

(statearr_19215[(15)] = inst_19075);

(statearr_19215[(16)] = inst_19169);

(statearr_19215[(9)] = inst_19074__$1);

(statearr_19215[(11)] = inst_19076__$1);

return statearr_19215;
})();
var statearr_19216_19293 = state_19210__$1;
(statearr_19216_19293[(2)] = null);

(statearr_19216_19293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (1))){
var state_19210__$1 = state_19210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19210__$1,(3),_EQ_arg_EQ_);
} else {
if((state_val_19211 === (24))){
var state_19210__$1 = state_19210;
var statearr_19217_19294 = state_19210__$1;
(statearr_19217_19294[(2)] = null);

(statearr_19217_19294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (4))){
var inst_19075 = (state_19210[(15)]);
var inst_19074 = (state_19210[(9)]);
var inst_19081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19075,(0),null);
var inst_19082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19075,(1),null);
var inst_19083 = cljs.core.first(inst_19074);
var inst_19084 = (inst_19083 == null);
var state_19210__$1 = (function (){var statearr_19218 = state_19210;
(statearr_19218[(7)] = inst_19082);

(statearr_19218[(17)] = inst_19081);

return statearr_19218;
})();
if(cljs.core.truth_(inst_19084)){
var statearr_19219_19295 = state_19210__$1;
(statearr_19219_19295[(1)] = (6));

} else {
var statearr_19220_19296 = state_19210__$1;
(statearr_19220_19296[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (15))){
var state_19210__$1 = state_19210;
var statearr_19225_19297 = state_19210__$1;
(statearr_19225_19297[(2)] = false);

(statearr_19225_19297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (21))){
var inst_19113 = (state_19210[(8)]);
var state_19210__$1 = state_19210;
var statearr_19226_19298 = state_19210__$1;
(statearr_19226_19298[(2)] = inst_19113);

(statearr_19226_19298[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (31))){
var inst_19162 = (state_19210[(18)]);
var inst_19187 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19162,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_19210__$1 = state_19210;
if(inst_19187){
var statearr_19227_19299 = state_19210__$1;
(statearr_19227_19299[(1)] = (34));

} else {
var statearr_19228_19300 = state_19210__$1;
(statearr_19228_19300[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (32))){
var inst_19193 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
var statearr_19229_19301 = state_19210__$1;
(statearr_19229_19301[(2)] = inst_19193);

(statearr_19229_19301[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (33))){
var inst_19185 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
var statearr_19231_19302 = state_19210__$1;
(statearr_19231_19302[(2)] = inst_19185);

(statearr_19231_19302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (13))){
var inst_19113 = (state_19210[(8)]);
var inst_19113__$1 = (state_19210[(2)]);
var inst_19115 = (inst_19113__$1 == null);
var inst_19116 = cljs.core.not(inst_19115);
var state_19210__$1 = (function (){var statearr_19232 = state_19210;
(statearr_19232[(8)] = inst_19113__$1);

return statearr_19232;
})();
if(inst_19116){
var statearr_19233_19304 = state_19210__$1;
(statearr_19233_19304[(1)] = (14));

} else {
var statearr_19234_19305 = state_19210__$1;
(statearr_19234_19305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (22))){
var inst_19135 = (state_19210[(19)]);
var inst_19134 = (state_19210[(2)]);
var inst_19135__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19134,new cljs.core.Keyword(null,"getter","getter",84844855));
var inst_19136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19134,new cljs.core.Keyword(null,"url","url",276297046));
var inst_19137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19134,new cljs.core.Keyword(null,"xform","xform",-1725711008));
var inst_19138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19134,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var state_19210__$1 = (function (){var statearr_19235 = state_19210;
(statearr_19235[(20)] = inst_19138);

(statearr_19235[(21)] = inst_19137);

(statearr_19235[(19)] = inst_19135__$1);

(statearr_19235[(22)] = inst_19136);

return statearr_19235;
})();
if(cljs.core.truth_(inst_19135__$1)){
var statearr_19236_19342 = state_19210__$1;
(statearr_19236_19342[(1)] = (23));

} else {
var statearr_19237_19343 = state_19210__$1;
(statearr_19237_19343[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (36))){
var inst_19191 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
var statearr_19238_19344 = state_19210__$1;
(statearr_19238_19344[(2)] = inst_19191);

(statearr_19238_19344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (29))){
var inst_19195 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
var statearr_19239_19345 = state_19210__$1;
(statearr_19239_19345[(2)] = inst_19195);

(statearr_19239_19345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (6))){
var inst_19059 = (state_19210[(23)]);
var inst_19076 = (state_19210[(11)]);
var inst_19086 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Working on it ..."], 0));
var inst_19087 = cljs.core.persistent_BANG_(inst_19076);
var inst_19088 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_19087);
var inst_19089 = cljs.core.deref(inst_19059);
var inst_19090 = census.merger.core.xf_Grands_M__GT_JSON(inst_19089);
var inst_19091 = cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19090,inst_19088], 0));
var inst_19092 = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",inst_19091);
var inst_19096 = ["{\"type\":\"FeatureCollection\",\"features\":[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19092),"]}"].join('');
var state_19210__$1 = (function (){var statearr_19241 = state_19210;
(statearr_19241[(24)] = inst_19086);

return statearr_19241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19210__$1,(9),_EQ_O_EQ_,inst_19096);
} else {
if((state_val_19211 === (28))){
var inst_19162 = (state_19210[(18)]);
var inst_19142 = (state_19210[(13)]);
var inst_19176 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19162,inst_19142);
var state_19210__$1 = state_19210;
if(inst_19176){
var statearr_19242_19360 = state_19210__$1;
(statearr_19242_19360[(1)] = (30));

} else {
var statearr_19243_19361 = state_19210__$1;
(statearr_19243_19361[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (25))){
var inst_19081 = (state_19210[(17)]);
var inst_19198 = (state_19210[(2)]);
var state_19210__$1 = (function (){var statearr_19245 = state_19210;
(statearr_19245[(25)] = inst_19198);

return statearr_19245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19210__$1,(37),_EQ_E_EQ_,inst_19081);
} else {
if((state_val_19211 === (34))){
var inst_19161 = (state_19210[(26)]);
var state_19210__$1 = state_19210;
var statearr_19246_19363 = state_19210__$1;
(statearr_19246_19363[(2)] = inst_19161);

(statearr_19246_19363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (17))){
var state_19210__$1 = state_19210;
var statearr_19247_19364 = state_19210__$1;
(statearr_19247_19364[(2)] = true);

(statearr_19247_19364[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (3))){
var inst_19054 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19210__$1,(2),_EQ_args_EQ_,inst_19054);
} else {
if((state_val_19211 === (12))){
var inst_19057 = (state_19210[(27)]);
var inst_19110 = (state_19210[(2)]);
var state_19210__$1 = (function (){var statearr_19248 = state_19210;
(statearr_19248[(28)] = inst_19110);

return statearr_19248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19210__$1,(13),inst_19057);
} else {
if((state_val_19211 === (2))){
var inst_19056 = (state_19210[(2)]);
var inst_19057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19058 = cljs.core.PersistentVector.EMPTY;
var inst_19059 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_19058);
var inst_19068 = cljs.core.first(cfgs);
var inst_19069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19068,(0),null);
var inst_19070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19068,(1),null);
var inst_19072 = cljs.core.PersistentVector.EMPTY;
var inst_19073 = cljs.core.transient$(inst_19072);
var inst_19074 = cfgs;
var inst_19075 = inst_19068;
var inst_19076 = inst_19073;
var state_19210__$1 = (function (){var statearr_19249 = state_19210;
(statearr_19249[(27)] = inst_19057);

(statearr_19249[(29)] = inst_19056);

(statearr_19249[(15)] = inst_19075);

(statearr_19249[(30)] = inst_19069);

(statearr_19249[(31)] = inst_19070);

(statearr_19249[(23)] = inst_19059);

(statearr_19249[(9)] = inst_19074);

(statearr_19249[(11)] = inst_19076);

return statearr_19249;
})();
var statearr_19251_19365 = state_19210__$1;
(statearr_19251_19365[(2)] = null);

(statearr_19251_19365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (23))){
var inst_19138 = (state_19210[(20)]);
var inst_19137 = (state_19210[(21)]);
var inst_19135 = (state_19210[(19)]);
var inst_19136 = (state_19210[(22)]);
var inst_19059 = (state_19210[(23)]);
var inst_19140 = (state_19210[(10)]);
var inst_19142 = (state_19210[(13)]);
var inst_19140__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_19137);
var inst_19141 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err);
var inst_19142__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_19141);
var inst_19143 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19059,cljs.core.conj,inst_19138);
var inst_19144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19145 = [inst_19136];
var inst_19146 = (new cljs.core.PersistentVector(null,1,(5),inst_19144,inst_19145,null));
var inst_19147 = cljs.core.async.to_chan(inst_19146);
var inst_19148 = (inst_19135.cljs$core$IFn$_invoke$arity$3 ? inst_19135.cljs$core$IFn$_invoke$arity$3(inst_19147,inst_19140__$1,inst_19142__$1) : inst_19135.call(null,inst_19147,inst_19140__$1,inst_19142__$1));
var inst_19156 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19157 = [inst_19140__$1,inst_19142__$1];
var inst_19158 = (new cljs.core.PersistentVector(null,2,(5),inst_19156,inst_19157,null));
var state_19210__$1 = (function (){var statearr_19253 = state_19210;
(statearr_19253[(32)] = inst_19143);

(statearr_19253[(33)] = inst_19148);

(statearr_19253[(10)] = inst_19140__$1);

(statearr_19253[(13)] = inst_19142__$1);

return statearr_19253;
})();
return cljs.core.async.ioc_alts_BANG_(state_19210__$1,(26),inst_19158);
} else {
if((state_val_19211 === (35))){
var state_19210__$1 = state_19210;
var statearr_19254_19367 = state_19210__$1;
(statearr_19254_19367[(2)] = null);

(statearr_19254_19367[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (19))){
var inst_19126 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
var statearr_19255_19368 = state_19210__$1;
(statearr_19255_19368[(2)] = inst_19126);

(statearr_19255_19368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (11))){
var inst_19057 = (state_19210[(27)]);
var inst_19081 = (state_19210[(17)]);
var inst_19108 = (inst_19081.cljs$core$IFn$_invoke$arity$2 ? inst_19081.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,inst_19057) : inst_19081.call(null,_EQ_args_EQ_,inst_19057));
var state_19210__$1 = state_19210;
var statearr_19256_19369 = state_19210__$1;
(statearr_19256_19369[(2)] = inst_19108);

(statearr_19256_19369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (9))){
var inst_19057 = (state_19210[(27)]);
var inst_19098 = (state_19210[(2)]);
var inst_19099 = cljs.core.async.close_BANG_(inst_19057);
var inst_19102 = cljs.core.async.close_BANG_(_EQ_args_EQ_);
var state_19210__$1 = (function (){var statearr_19257 = state_19210;
(statearr_19257[(34)] = inst_19098);

(statearr_19257[(35)] = inst_19099);

return statearr_19257;
})();
var statearr_19258_19370 = state_19210__$1;
(statearr_19258_19370[(2)] = inst_19102);

(statearr_19258_19370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (5))){
var inst_19208 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19210__$1,inst_19208);
} else {
if((state_val_19211 === (14))){
var inst_19113 = (state_19210[(8)]);
var inst_19118 = inst_19113.cljs$lang$protocol_mask$partition0$;
var inst_19119 = (inst_19118 & (64));
var inst_19120 = inst_19113.cljs$core$ISeq$;
var inst_19121 = (cljs.core.PROTOCOL_SENTINEL === inst_19120);
var inst_19122 = ((inst_19119) || (inst_19121));
var state_19210__$1 = state_19210;
if(cljs.core.truth_(inst_19122)){
var statearr_19260_19372 = state_19210__$1;
(statearr_19260_19372[(1)] = (17));

} else {
var statearr_19262_19373 = state_19210__$1;
(statearr_19262_19373[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (26))){
var inst_19162 = (state_19210[(18)]);
var inst_19140 = (state_19210[(10)]);
var inst_19160 = (state_19210[(12)]);
var inst_19160__$1 = (state_19210[(2)]);
var inst_19161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19160__$1,(0),null);
var inst_19162__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19160__$1,(1),null);
var inst_19163 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19162__$1,inst_19140);
var state_19210__$1 = (function (){var statearr_19265 = state_19210;
(statearr_19265[(18)] = inst_19162__$1);

(statearr_19265[(12)] = inst_19160__$1);

(statearr_19265[(26)] = inst_19161);

return statearr_19265;
})();
if(inst_19163){
var statearr_19266_19398 = state_19210__$1;
(statearr_19266_19398[(1)] = (27));

} else {
var statearr_19268_19399 = state_19210__$1;
(statearr_19268_19399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (16))){
var inst_19129 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
if(cljs.core.truth_(inst_19129)){
var statearr_19269_19401 = state_19210__$1;
(statearr_19269_19401[(1)] = (20));

} else {
var statearr_19270_19403 = state_19210__$1;
(statearr_19270_19403[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (30))){
var inst_19140 = (state_19210[(10)]);
var inst_19160 = (state_19210[(12)]);
var inst_19142 = (state_19210[(13)]);
var inst_19181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19160,(0),null);
var inst_19182 = cljs.core.async.close_BANG_(inst_19140);
var inst_19183 = cljs.core.async.close_BANG_(inst_19142);
var state_19210__$1 = (function (){var statearr_19271 = state_19210;
(statearr_19271[(36)] = inst_19182);

(statearr_19271[(37)] = inst_19183);

return statearr_19271;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19210__$1,(33),_EQ_E_EQ_,inst_19181);
} else {
if((state_val_19211 === (10))){
var inst_19057 = (state_19210[(27)]);
var inst_19081 = (state_19210[(17)]);
var inst_19105 = (inst_19081.cljs$core$IFn$_invoke$arity$1 ? inst_19081.cljs$core$IFn$_invoke$arity$1($g$) : inst_19081.call(null,$g$));
var inst_19106 = (inst_19105.cljs$core$IFn$_invoke$arity$2 ? inst_19105.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,inst_19057) : inst_19105.call(null,_EQ_args_EQ_,inst_19057));
var state_19210__$1 = state_19210;
var statearr_19272_19405 = state_19210__$1;
(statearr_19272_19405[(2)] = inst_19106);

(statearr_19272_19405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (18))){
var state_19210__$1 = state_19210;
var statearr_19273_19407 = state_19210__$1;
(statearr_19273_19407[(2)] = false);

(statearr_19273_19407[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (37))){
var inst_19057 = (state_19210[(27)]);
var inst_19200 = (state_19210[(2)]);
var inst_19201 = cljs.core.async.close_BANG_(inst_19057);
var inst_19202 = cljs.core.async.close_BANG_(_EQ_O_EQ_);
var inst_19203 = cljs.core.async.close_BANG_(_EQ_args_EQ_);
var inst_19204 = cljs.core.async.close_BANG_(_EQ_E_EQ_);
var state_19210__$1 = (function (){var statearr_19275 = state_19210;
(statearr_19275[(38)] = inst_19203);

(statearr_19275[(39)] = inst_19201);

(statearr_19275[(40)] = inst_19202);

(statearr_19275[(41)] = inst_19200);

return statearr_19275;
})();
var statearr_19276_19410 = state_19210__$1;
(statearr_19276_19410[(2)] = inst_19204);

(statearr_19276_19410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19211 === (8))){
var inst_19206 = (state_19210[(2)]);
var state_19210__$1 = state_19210;
var statearr_19277_19411 = state_19210__$1;
(statearr_19277_19411[(2)] = inst_19206);

(statearr_19277_19411[(1)] = (5));


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
});})(c__3820__auto__,_EQ_args_EQ_))
;
return ((function (switch__3728__auto__,c__3820__auto__,_EQ_args_EQ_){
return (function() {
var census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto__ = null;
var census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto____0 = (function (){
var statearr_19278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19278[(0)] = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto__);

(statearr_19278[(1)] = (1));

return statearr_19278;
});
var census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto____1 = (function (state_19210){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_19210);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e19280){if((e19280 instanceof Object)){
var ex__3732__auto__ = e19280;
var statearr_19281_19415 = state_19210;
(statearr_19281_19415[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19416 = state_19210;
state_19210 = G__19416;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto__ = function(state_19210){
switch(arguments.length){
case 0:
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto____0.call(this);
case 1:
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto____1.call(this,state_19210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto____0;
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto____1;
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__,_EQ_args_EQ_))
})();
var state__3822__auto__ = (function (){var statearr_19283 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_19283[(6)] = c__3820__auto__);

return statearr_19283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__,_EQ_args_EQ_))
);

return c__3820__auto__;
});
});

//# sourceMappingURL=census.merger.core.js.map
