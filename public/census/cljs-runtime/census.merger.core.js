goog.provide('census.merger.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cuerdas.core');
goog.require('net.cgrand.xforms');
goog.require('census.utils.core');
census.merger.core.deep_merge_a_coll = (function census$merger$core$deep_merge_a_coll(maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function() { 
var G__35249__delegate = function (args){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,args)){
return (census.merger.core.deep_merge_a_coll.cljs$core$IFn$_invoke$arity$1 ? census.merger.core.deep_merge_a_coll.cljs$core$IFn$_invoke$arity$1(args) : census.merger.core.deep_merge_a_coll.call(null,args));
} else {
return cljs.core.last(args);
}
};
var G__35249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35250__i = 0, G__35250__a = new Array(arguments.length -  0);
while (G__35250__i < G__35250__a.length) {G__35250__a[G__35250__i] = arguments[G__35250__i + 0]; ++G__35250__i;}
  args = new cljs.core.IndexedSeq(G__35250__a,0,null);
} 
return G__35249__delegate.call(this,args);};
G__35249.cljs$lang$maxFixedArity = 0;
G__35249.cljs$lang$applyTo = (function (arglist__35251){
var args = cljs.core.seq(arglist__35251);
return G__35249__delegate(args);
});
G__35249.cljs$core$IFn$_invoke$arity$variadic = G__35249__delegate;
return G__35249;
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
var vec__35022 = net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,m);
var vec__35025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35022,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025,(1),null);
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
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,census.merger.core.xf_LT__Grands__GT_JS(IDS)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__35029){
var vec__35030 = p__35029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35030,(1),null);
return (v == null);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__35028_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__35028_SHARP_,(1));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(JSON.stringify)], 0));
});
census.merger.core.I_EQ_OE_M_spooler = (function census$merger$core$I_EQ_OE_M_spooler($g$,_EQ_arg_EQ_,cfgs){
return (function (_EQ_O_EQ_,_EQ_E_EQ_){
var _EQ_args_EQ_ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__,_EQ_args_EQ_){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__,_EQ_args_EQ_){
return (function (state_35192){
var state_val_35193 = (state_35192[(1)]);
if((state_val_35193 === (7))){
var inst_35069 = (state_35192[(7)]);
var state_35192__$1 = state_35192;
if(cljs.core.truth_(inst_35069)){
var statearr_35194_35252 = state_35192__$1;
(statearr_35194_35252[(1)] = (10));

} else {
var statearr_35195_35253 = state_35192__$1;
(statearr_35195_35253[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (20))){
var inst_35095 = (state_35192[(8)]);
var inst_35113 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35095);
var state_35192__$1 = state_35192;
var statearr_35196_35254 = state_35192__$1;
(statearr_35196_35254[(2)] = inst_35113);

(statearr_35196_35254[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (27))){
var inst_35063 = (state_35192[(9)]);
var inst_35122 = (state_35192[(10)]);
var inst_35142 = (state_35192[(11)]);
var inst_35061 = (state_35192[(12)]);
var inst_35124 = (state_35192[(13)]);
var inst_35150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35142,(0),null);
var inst_35151 = cljs.core.async.close_BANG_(inst_35122);
var inst_35152 = cljs.core.async.close_BANG_(inst_35124);
var inst_35153 = cljs.core.rest(inst_35061);
var inst_35154 = cljs.core.second(inst_35061);
var inst_35155 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35063,inst_35150);
var inst_35061__$1 = inst_35153;
var inst_35062 = inst_35154;
var inst_35063__$1 = inst_35155;
var state_35192__$1 = (function (){var statearr_35197 = state_35192;
(statearr_35197[(9)] = inst_35063__$1);

(statearr_35197[(12)] = inst_35061__$1);

(statearr_35197[(14)] = inst_35151);

(statearr_35197[(15)] = inst_35062);

(statearr_35197[(16)] = inst_35152);

return statearr_35197;
})();
var statearr_35198_35255 = state_35192__$1;
(statearr_35198_35255[(2)] = null);

(statearr_35198_35255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (1))){
var state_35192__$1 = state_35192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35192__$1,(3),_EQ_arg_EQ_);
} else {
if((state_val_35193 === (24))){
var state_35192__$1 = state_35192;
var statearr_35199_35256 = state_35192__$1;
(statearr_35199_35256[(2)] = null);

(statearr_35199_35256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (4))){
var inst_35061 = (state_35192[(12)]);
var inst_35062 = (state_35192[(15)]);
var inst_35068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35062,(0),null);
var inst_35069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35062,(1),null);
var inst_35070 = cljs.core.first(inst_35061);
var inst_35071 = (inst_35070 == null);
var state_35192__$1 = (function (){var statearr_35200 = state_35192;
(statearr_35200[(17)] = inst_35068);

(statearr_35200[(7)] = inst_35069);

return statearr_35200;
})();
if(cljs.core.truth_(inst_35071)){
var statearr_35201_35257 = state_35192__$1;
(statearr_35201_35257[(1)] = (6));

} else {
var statearr_35202_35258 = state_35192__$1;
(statearr_35202_35258[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (15))){
var state_35192__$1 = state_35192;
var statearr_35203_35259 = state_35192__$1;
(statearr_35203_35259[(2)] = false);

(statearr_35203_35259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (21))){
var inst_35095 = (state_35192[(8)]);
var state_35192__$1 = state_35192;
var statearr_35204_35260 = state_35192__$1;
(statearr_35204_35260[(2)] = inst_35095);

(statearr_35204_35260[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (31))){
var inst_35144 = (state_35192[(18)]);
var inst_35169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35144,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_35192__$1 = state_35192;
if(inst_35169){
var statearr_35205_35261 = state_35192__$1;
(statearr_35205_35261[(1)] = (34));

} else {
var statearr_35206_35262 = state_35192__$1;
(statearr_35206_35262[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (32))){
var inst_35175 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
var statearr_35207_35263 = state_35192__$1;
(statearr_35207_35263[(2)] = inst_35175);

(statearr_35207_35263[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (33))){
var inst_35167 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
var statearr_35208_35264 = state_35192__$1;
(statearr_35208_35264[(2)] = inst_35167);

(statearr_35208_35264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (13))){
var inst_35095 = (state_35192[(8)]);
var inst_35095__$1 = (state_35192[(2)]);
var inst_35097 = (inst_35095__$1 == null);
var inst_35098 = cljs.core.not(inst_35097);
var state_35192__$1 = (function (){var statearr_35209 = state_35192;
(statearr_35209[(8)] = inst_35095__$1);

return statearr_35209;
})();
if(inst_35098){
var statearr_35210_35265 = state_35192__$1;
(statearr_35210_35265[(1)] = (14));

} else {
var statearr_35211_35266 = state_35192__$1;
(statearr_35211_35266[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (22))){
var inst_35117 = (state_35192[(19)]);
var inst_35116 = (state_35192[(2)]);
var inst_35117__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35116,new cljs.core.Keyword(null,"getter","getter",84844855));
var inst_35118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35116,new cljs.core.Keyword(null,"url","url",276297046));
var inst_35119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35116,new cljs.core.Keyword(null,"xform","xform",-1725711008));
var inst_35120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35116,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var state_35192__$1 = (function (){var statearr_35212 = state_35192;
(statearr_35212[(20)] = inst_35120);

(statearr_35212[(21)] = inst_35119);

(statearr_35212[(22)] = inst_35118);

(statearr_35212[(19)] = inst_35117__$1);

return statearr_35212;
})();
if(cljs.core.truth_(inst_35117__$1)){
var statearr_35213_35267 = state_35192__$1;
(statearr_35213_35267[(1)] = (23));

} else {
var statearr_35214_35268 = state_35192__$1;
(statearr_35214_35268[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (36))){
var inst_35173 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
var statearr_35215_35269 = state_35192__$1;
(statearr_35215_35269[(2)] = inst_35173);

(statearr_35215_35269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (29))){
var inst_35177 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
var statearr_35216_35270 = state_35192__$1;
(statearr_35216_35270[(2)] = inst_35177);

(statearr_35216_35270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (6))){
var inst_35063 = (state_35192[(9)]);
var inst_35048 = (state_35192[(23)]);
var inst_35073 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Working on it ..."], 0));
var inst_35074 = cljs.core.persistent_BANG_(inst_35063);
var inst_35075 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_35074);
var inst_35076 = cljs.core.deref(inst_35048);
var inst_35077 = census.merger.core.xf_Grands_M__GT_JSON(inst_35076);
var inst_35078 = cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35077,inst_35075], 0));
var inst_35079 = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",inst_35078);
var inst_35080 = ["{\"type\":\"FeatureCollection\",\"features\":[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35079),"]}"].join('');
var state_35192__$1 = (function (){var statearr_35217 = state_35192;
(statearr_35217[(24)] = inst_35073);

return statearr_35217;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35192__$1,(9),_EQ_O_EQ_,inst_35080);
} else {
if((state_val_35193 === (28))){
var inst_35144 = (state_35192[(18)]);
var inst_35124 = (state_35192[(13)]);
var inst_35158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35144,inst_35124);
var state_35192__$1 = state_35192;
if(inst_35158){
var statearr_35218_35271 = state_35192__$1;
(statearr_35218_35271[(1)] = (30));

} else {
var statearr_35219_35272 = state_35192__$1;
(statearr_35219_35272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (25))){
var inst_35068 = (state_35192[(17)]);
var inst_35180 = (state_35192[(2)]);
var state_35192__$1 = (function (){var statearr_35220 = state_35192;
(statearr_35220[(25)] = inst_35180);

return statearr_35220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35192__$1,(37),_EQ_E_EQ_,inst_35068);
} else {
if((state_val_35193 === (34))){
var inst_35143 = (state_35192[(26)]);
var state_35192__$1 = state_35192;
var statearr_35221_35273 = state_35192__$1;
(statearr_35221_35273[(2)] = inst_35143);

(statearr_35221_35273[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (17))){
var state_35192__$1 = state_35192;
var statearr_35222_35274 = state_35192__$1;
(statearr_35222_35274[(2)] = true);

(statearr_35222_35274[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (3))){
var inst_35043 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35192__$1,(2),_EQ_args_EQ_,inst_35043);
} else {
if((state_val_35193 === (12))){
var inst_35046 = (state_35192[(27)]);
var inst_35092 = (state_35192[(2)]);
var state_35192__$1 = (function (){var statearr_35223 = state_35192;
(statearr_35223[(28)] = inst_35092);

return statearr_35223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35192__$1,(13),inst_35046);
} else {
if((state_val_35193 === (2))){
var inst_35045 = (state_35192[(2)]);
var inst_35046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35047 = cljs.core.PersistentVector.EMPTY;
var inst_35048 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_35047);
var inst_35056 = cljs.core.first(cfgs);
var inst_35057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35056,(0),null);
var inst_35058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35056,(1),null);
var inst_35059 = cljs.core.PersistentVector.EMPTY;
var inst_35060 = cljs.core.transient$(inst_35059);
var inst_35061 = cfgs;
var inst_35062 = inst_35056;
var inst_35063 = inst_35060;
var state_35192__$1 = (function (){var statearr_35224 = state_35192;
(statearr_35224[(9)] = inst_35063);

(statearr_35224[(12)] = inst_35061);

(statearr_35224[(29)] = inst_35057);

(statearr_35224[(30)] = inst_35058);

(statearr_35224[(27)] = inst_35046);

(statearr_35224[(15)] = inst_35062);

(statearr_35224[(23)] = inst_35048);

(statearr_35224[(31)] = inst_35045);

return statearr_35224;
})();
var statearr_35225_35275 = state_35192__$1;
(statearr_35225_35275[(2)] = null);

(statearr_35225_35275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (23))){
var inst_35122 = (state_35192[(10)]);
var inst_35120 = (state_35192[(20)]);
var inst_35124 = (state_35192[(13)]);
var inst_35119 = (state_35192[(21)]);
var inst_35118 = (state_35192[(22)]);
var inst_35117 = (state_35192[(19)]);
var inst_35048 = (state_35192[(23)]);
var inst_35122__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_35119);
var inst_35123 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err);
var inst_35124__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_35123);
var inst_35125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35048,cljs.core.conj,inst_35120);
var inst_35126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35127 = [inst_35118];
var inst_35128 = (new cljs.core.PersistentVector(null,1,(5),inst_35126,inst_35127,null));
var inst_35129 = cljs.core.async.to_chan(inst_35128);
var inst_35130 = (inst_35117.cljs$core$IFn$_invoke$arity$3 ? inst_35117.cljs$core$IFn$_invoke$arity$3(inst_35129,inst_35122__$1,inst_35124__$1) : inst_35117.call(null,inst_35129,inst_35122__$1,inst_35124__$1));
var inst_35138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35139 = [inst_35122__$1,inst_35124__$1];
var inst_35140 = (new cljs.core.PersistentVector(null,2,(5),inst_35138,inst_35139,null));
var state_35192__$1 = (function (){var statearr_35226 = state_35192;
(statearr_35226[(32)] = inst_35130);

(statearr_35226[(10)] = inst_35122__$1);

(statearr_35226[(13)] = inst_35124__$1);

(statearr_35226[(33)] = inst_35125);

return statearr_35226;
})();
return cljs.core.async.ioc_alts_BANG_(state_35192__$1,(26),inst_35140);
} else {
if((state_val_35193 === (35))){
var state_35192__$1 = state_35192;
var statearr_35227_35276 = state_35192__$1;
(statearr_35227_35276[(2)] = null);

(statearr_35227_35276[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (19))){
var inst_35108 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
var statearr_35228_35277 = state_35192__$1;
(statearr_35228_35277[(2)] = inst_35108);

(statearr_35228_35277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (11))){
var inst_35068 = (state_35192[(17)]);
var inst_35046 = (state_35192[(27)]);
var inst_35090 = (inst_35068.cljs$core$IFn$_invoke$arity$2 ? inst_35068.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,inst_35046) : inst_35068.call(null,_EQ_args_EQ_,inst_35046));
var state_35192__$1 = state_35192;
var statearr_35229_35278 = state_35192__$1;
(statearr_35229_35278[(2)] = inst_35090);

(statearr_35229_35278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (9))){
var inst_35046 = (state_35192[(27)]);
var inst_35082 = (state_35192[(2)]);
var inst_35083 = cljs.core.async.close_BANG_(inst_35046);
var inst_35084 = cljs.core.async.close_BANG_(_EQ_args_EQ_);
var state_35192__$1 = (function (){var statearr_35230 = state_35192;
(statearr_35230[(34)] = inst_35083);

(statearr_35230[(35)] = inst_35082);

return statearr_35230;
})();
var statearr_35231_35279 = state_35192__$1;
(statearr_35231_35279[(2)] = inst_35084);

(statearr_35231_35279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (5))){
var inst_35190 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35192__$1,inst_35190);
} else {
if((state_val_35193 === (14))){
var inst_35095 = (state_35192[(8)]);
var inst_35100 = inst_35095.cljs$lang$protocol_mask$partition0$;
var inst_35101 = (inst_35100 & (64));
var inst_35102 = inst_35095.cljs$core$ISeq$;
var inst_35103 = (cljs.core.PROTOCOL_SENTINEL === inst_35102);
var inst_35104 = ((inst_35101) || (inst_35103));
var state_35192__$1 = state_35192;
if(cljs.core.truth_(inst_35104)){
var statearr_35232_35280 = state_35192__$1;
(statearr_35232_35280[(1)] = (17));

} else {
var statearr_35233_35281 = state_35192__$1;
(statearr_35233_35281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (26))){
var inst_35122 = (state_35192[(10)]);
var inst_35142 = (state_35192[(11)]);
var inst_35144 = (state_35192[(18)]);
var inst_35142__$1 = (state_35192[(2)]);
var inst_35143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35142__$1,(0),null);
var inst_35144__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35142__$1,(1),null);
var inst_35145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35144__$1,inst_35122);
var state_35192__$1 = (function (){var statearr_35234 = state_35192;
(statearr_35234[(11)] = inst_35142__$1);

(statearr_35234[(18)] = inst_35144__$1);

(statearr_35234[(26)] = inst_35143);

return statearr_35234;
})();
if(inst_35145){
var statearr_35235_35282 = state_35192__$1;
(statearr_35235_35282[(1)] = (27));

} else {
var statearr_35236_35283 = state_35192__$1;
(statearr_35236_35283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (16))){
var inst_35111 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
if(cljs.core.truth_(inst_35111)){
var statearr_35237_35284 = state_35192__$1;
(statearr_35237_35284[(1)] = (20));

} else {
var statearr_35238_35285 = state_35192__$1;
(statearr_35238_35285[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (30))){
var inst_35122 = (state_35192[(10)]);
var inst_35142 = (state_35192[(11)]);
var inst_35124 = (state_35192[(13)]);
var inst_35163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35142,(0),null);
var inst_35164 = cljs.core.async.close_BANG_(inst_35122);
var inst_35165 = cljs.core.async.close_BANG_(inst_35124);
var state_35192__$1 = (function (){var statearr_35239 = state_35192;
(statearr_35239[(36)] = inst_35164);

(statearr_35239[(37)] = inst_35165);

return statearr_35239;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35192__$1,(33),_EQ_E_EQ_,inst_35163);
} else {
if((state_val_35193 === (10))){
var inst_35068 = (state_35192[(17)]);
var inst_35046 = (state_35192[(27)]);
var inst_35087 = (inst_35068.cljs$core$IFn$_invoke$arity$1 ? inst_35068.cljs$core$IFn$_invoke$arity$1($g$) : inst_35068.call(null,$g$));
var inst_35088 = (inst_35087.cljs$core$IFn$_invoke$arity$2 ? inst_35087.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,inst_35046) : inst_35087.call(null,_EQ_args_EQ_,inst_35046));
var state_35192__$1 = state_35192;
var statearr_35240_35286 = state_35192__$1;
(statearr_35240_35286[(2)] = inst_35088);

(statearr_35240_35286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (18))){
var state_35192__$1 = state_35192;
var statearr_35241_35287 = state_35192__$1;
(statearr_35241_35287[(2)] = false);

(statearr_35241_35287[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (37))){
var inst_35046 = (state_35192[(27)]);
var inst_35182 = (state_35192[(2)]);
var inst_35183 = cljs.core.async.close_BANG_(inst_35046);
var inst_35184 = cljs.core.async.close_BANG_(_EQ_O_EQ_);
var inst_35185 = cljs.core.async.close_BANG_(_EQ_args_EQ_);
var inst_35186 = cljs.core.async.close_BANG_(_EQ_E_EQ_);
var state_35192__$1 = (function (){var statearr_35242 = state_35192;
(statearr_35242[(38)] = inst_35185);

(statearr_35242[(39)] = inst_35182);

(statearr_35242[(40)] = inst_35183);

(statearr_35242[(41)] = inst_35184);

return statearr_35242;
})();
var statearr_35243_35288 = state_35192__$1;
(statearr_35243_35288[(2)] = inst_35186);

(statearr_35243_35288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35193 === (8))){
var inst_35188 = (state_35192[(2)]);
var state_35192__$1 = state_35192;
var statearr_35244_35289 = state_35192__$1;
(statearr_35244_35289[(2)] = inst_35188);

(statearr_35244_35289[(1)] = (5));


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
});})(c__16663__auto__,_EQ_args_EQ_))
;
return ((function (switch__16488__auto__,c__16663__auto__,_EQ_args_EQ_){
return (function() {
var census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__ = null;
var census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____0 = (function (){
var statearr_35245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35245[(0)] = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__);

(statearr_35245[(1)] = (1));

return statearr_35245;
});
var census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____1 = (function (state_35192){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_35192);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e35246){if((e35246 instanceof Object)){
var ex__16492__auto__ = e35246;
var statearr_35247_35290 = state_35192;
(statearr_35247_35290[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35291 = state_35192;
state_35192 = G__35291;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__ = function(state_35192){
switch(arguments.length){
case 0:
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____0.call(this);
case 1:
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____1.call(this,state_35192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____0;
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____1;
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__,_EQ_args_EQ_))
})();
var state__16665__auto__ = (function (){var statearr_35248 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_35248[(6)] = c__16663__auto__);

return statearr_35248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__,_EQ_args_EQ_))
);

return c__16663__auto__;
});
});

//# sourceMappingURL=census.merger.core.js.map
