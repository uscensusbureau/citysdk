goog.provide('census.merger.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cuerdas.core');
goog.require('net.cgrand.xforms');
goog.require('census.utils.core');
census.merger.core.deep_merge_a_coll = (function census$merger$core$deep_merge_a_coll(maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function() { 
var G__31870__delegate = function (args){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,args)){
return (census.merger.core.deep_merge_a_coll.cljs$core$IFn$_invoke$arity$1 ? census.merger.core.deep_merge_a_coll.cljs$core$IFn$_invoke$arity$1(args) : census.merger.core.deep_merge_a_coll.call(null,args));
} else {
return cljs.core.last(args);
}
};
var G__31870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31871__i = 0, G__31871__a = new Array(arguments.length -  0);
while (G__31871__i < G__31871__a.length) {G__31871__a[G__31871__i] = arguments[G__31871__i + 0]; ++G__31871__i;}
  args = new cljs.core.IndexedSeq(G__31871__a,0,null);
} 
return G__31870__delegate.call(this,args);};
G__31870.cljs$lang$maxFixedArity = 0;
G__31870.cljs$lang$applyTo = (function (arglist__31873){
var args = cljs.core.seq(arglist__31873);
return G__31870__delegate(args);
});
G__31870.cljs$core$IFn$_invoke$arity$variadic = G__31870__delegate;
return G__31870;
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
var vec__31618 = net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,m);
var vec__31621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31618,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31621,(1),null);
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
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,census.merger.core.xf_LT__Grands__GT_JS(IDS)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__31631){
var vec__31632 = p__31631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632,(1),null);
return (v == null);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__31629_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__31629_SHARP_,(1));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(JSON.stringify)], 0));
});
census.merger.core.I_EQ_OE_M_spooler = (function census$merger$core$I_EQ_OE_M_spooler($g$,_EQ_arg_EQ_,cfgs){
return (function (_EQ_O_EQ_,_EQ_E_EQ_){
var _EQ_args_EQ_ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__,_EQ_args_EQ_){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__,_EQ_args_EQ_){
return (function (state_31800){
var state_val_31801 = (state_31800[(1)]);
if((state_val_31801 === (7))){
var inst_31665 = (state_31800[(7)]);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31665)){
var statearr_31802_31926 = state_31800__$1;
(statearr_31802_31926[(1)] = (10));

} else {
var statearr_31803_31927 = state_31800__$1;
(statearr_31803_31927[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (20))){
var inst_31694 = (state_31800[(8)]);
var inst_31715 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31694);
var state_31800__$1 = state_31800;
var statearr_31804_31928 = state_31800__$1;
(statearr_31804_31928[(2)] = inst_31715);

(statearr_31804_31928[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (27))){
var inst_31657 = (state_31800[(9)]);
var inst_31659 = (state_31800[(10)]);
var inst_31724 = (state_31800[(11)]);
var inst_31750 = (state_31800[(12)]);
var inst_31726 = (state_31800[(13)]);
var inst_31758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31750,(0),null);
var inst_31759 = cljs.core.async.close_BANG_(inst_31724);
var inst_31760 = cljs.core.async.close_BANG_(inst_31726);
var inst_31761 = cljs.core.rest(inst_31657);
var inst_31762 = cljs.core.second(inst_31657);
var inst_31763 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31659,inst_31758);
var inst_31657__$1 = inst_31761;
var inst_31658 = inst_31762;
var inst_31659__$1 = inst_31763;
var state_31800__$1 = (function (){var statearr_31806 = state_31800;
(statearr_31806[(9)] = inst_31657__$1);

(statearr_31806[(14)] = inst_31760);

(statearr_31806[(10)] = inst_31659__$1);

(statearr_31806[(15)] = inst_31658);

(statearr_31806[(16)] = inst_31759);

return statearr_31806;
})();
var statearr_31807_31937 = state_31800__$1;
(statearr_31807_31937[(2)] = null);

(statearr_31807_31937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (1))){
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31800__$1,(3),_EQ_arg_EQ_);
} else {
if((state_val_31801 === (24))){
var state_31800__$1 = state_31800;
var statearr_31808_31938 = state_31800__$1;
(statearr_31808_31938[(2)] = null);

(statearr_31808_31938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (4))){
var inst_31657 = (state_31800[(9)]);
var inst_31658 = (state_31800[(15)]);
var inst_31664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31658,(0),null);
var inst_31665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31658,(1),null);
var inst_31666 = cljs.core.first(inst_31657);
var inst_31667 = (inst_31666 == null);
var state_31800__$1 = (function (){var statearr_31810 = state_31800;
(statearr_31810[(17)] = inst_31664);

(statearr_31810[(7)] = inst_31665);

return statearr_31810;
})();
if(cljs.core.truth_(inst_31667)){
var statearr_31811_31946 = state_31800__$1;
(statearr_31811_31946[(1)] = (6));

} else {
var statearr_31812_31947 = state_31800__$1;
(statearr_31812_31947[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (15))){
var state_31800__$1 = state_31800;
var statearr_31813_31948 = state_31800__$1;
(statearr_31813_31948[(2)] = false);

(statearr_31813_31948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (21))){
var inst_31694 = (state_31800[(8)]);
var state_31800__$1 = state_31800;
var statearr_31814_31949 = state_31800__$1;
(statearr_31814_31949[(2)] = inst_31694);

(statearr_31814_31949[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (31))){
var inst_31752 = (state_31800[(18)]);
var inst_31777 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31752,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_31800__$1 = state_31800;
if(inst_31777){
var statearr_31815_31951 = state_31800__$1;
(statearr_31815_31951[(1)] = (34));

} else {
var statearr_31816_31952 = state_31800__$1;
(statearr_31816_31952[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (32))){
var inst_31783 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31817_31953 = state_31800__$1;
(statearr_31817_31953[(2)] = inst_31783);

(statearr_31817_31953[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (33))){
var inst_31775 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31818_31954 = state_31800__$1;
(statearr_31818_31954[(2)] = inst_31775);

(statearr_31818_31954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (13))){
var inst_31694 = (state_31800[(8)]);
var inst_31694__$1 = (state_31800[(2)]);
var inst_31696 = (inst_31694__$1 == null);
var inst_31697 = cljs.core.not(inst_31696);
var state_31800__$1 = (function (){var statearr_31819 = state_31800;
(statearr_31819[(8)] = inst_31694__$1);

return statearr_31819;
})();
if(inst_31697){
var statearr_31820_31956 = state_31800__$1;
(statearr_31820_31956[(1)] = (14));

} else {
var statearr_31821_31957 = state_31800__$1;
(statearr_31821_31957[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (22))){
var inst_31719 = (state_31800[(19)]);
var inst_31718 = (state_31800[(2)]);
var inst_31719__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31718,new cljs.core.Keyword(null,"getter","getter",84844855));
var inst_31720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31718,new cljs.core.Keyword(null,"url","url",276297046));
var inst_31721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31718,new cljs.core.Keyword(null,"xform","xform",-1725711008));
var inst_31722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31718,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var state_31800__$1 = (function (){var statearr_31822 = state_31800;
(statearr_31822[(20)] = inst_31720);

(statearr_31822[(21)] = inst_31722);

(statearr_31822[(22)] = inst_31721);

(statearr_31822[(19)] = inst_31719__$1);

return statearr_31822;
})();
if(cljs.core.truth_(inst_31719__$1)){
var statearr_31823_31960 = state_31800__$1;
(statearr_31823_31960[(1)] = (23));

} else {
var statearr_31824_31961 = state_31800__$1;
(statearr_31824_31961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (36))){
var inst_31781 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31825_31962 = state_31800__$1;
(statearr_31825_31962[(2)] = inst_31781);

(statearr_31825_31962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (29))){
var inst_31785 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31826_31963 = state_31800__$1;
(statearr_31826_31963[(2)] = inst_31785);

(statearr_31826_31963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (6))){
var inst_31659 = (state_31800[(10)]);
var inst_31641 = (state_31800[(23)]);
var inst_31669 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Working on it ..."], 0));
var inst_31670 = cljs.core.persistent_BANG_(inst_31659);
var inst_31671 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_31670);
var inst_31672 = cljs.core.deref(inst_31641);
var inst_31673 = census.merger.core.xf_Grands_M__GT_JSON(inst_31672);
var inst_31674 = cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31673,inst_31671], 0));
var inst_31675 = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",inst_31674);
var inst_31679 = ["{\"type\":\"FeatureCollection\",\"features\":[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31675),"]}"].join('');
var state_31800__$1 = (function (){var statearr_31827 = state_31800;
(statearr_31827[(24)] = inst_31669);

return statearr_31827;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31800__$1,(9),_EQ_O_EQ_,inst_31679);
} else {
if((state_val_31801 === (28))){
var inst_31752 = (state_31800[(18)]);
var inst_31726 = (state_31800[(13)]);
var inst_31766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31752,inst_31726);
var state_31800__$1 = state_31800;
if(inst_31766){
var statearr_31828_31964 = state_31800__$1;
(statearr_31828_31964[(1)] = (30));

} else {
var statearr_31829_31965 = state_31800__$1;
(statearr_31829_31965[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (25))){
var inst_31664 = (state_31800[(17)]);
var inst_31788 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31830 = state_31800;
(statearr_31830[(25)] = inst_31788);

return statearr_31830;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31800__$1,(37),_EQ_E_EQ_,inst_31664);
} else {
if((state_val_31801 === (34))){
var inst_31751 = (state_31800[(26)]);
var state_31800__$1 = state_31800;
var statearr_31831_31967 = state_31800__$1;
(statearr_31831_31967[(2)] = inst_31751);

(statearr_31831_31967[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (17))){
var state_31800__$1 = state_31800;
var statearr_31832_31968 = state_31800__$1;
(statearr_31832_31968[(2)] = true);

(statearr_31832_31968[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (3))){
var inst_31636 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31800__$1,(2),_EQ_args_EQ_,inst_31636);
} else {
if((state_val_31801 === (12))){
var inst_31639 = (state_31800[(27)]);
var inst_31691 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31836 = state_31800;
(statearr_31836[(28)] = inst_31691);

return statearr_31836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31800__$1,(13),inst_31639);
} else {
if((state_val_31801 === (2))){
var inst_31638 = (state_31800[(2)]);
var inst_31639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31640 = cljs.core.PersistentVector.EMPTY;
var inst_31641 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_31640);
var inst_31650 = cljs.core.first(cfgs);
var inst_31652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31650,(0),null);
var inst_31653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31650,(1),null);
var inst_31655 = cljs.core.PersistentVector.EMPTY;
var inst_31656 = cljs.core.transient$(inst_31655);
var inst_31657 = cfgs;
var inst_31658 = inst_31650;
var inst_31659 = inst_31656;
var state_31800__$1 = (function (){var statearr_31837 = state_31800;
(statearr_31837[(9)] = inst_31657);

(statearr_31837[(29)] = inst_31652);

(statearr_31837[(10)] = inst_31659);

(statearr_31837[(30)] = inst_31638);

(statearr_31837[(15)] = inst_31658);

(statearr_31837[(23)] = inst_31641);

(statearr_31837[(27)] = inst_31639);

(statearr_31837[(31)] = inst_31653);

return statearr_31837;
})();
var statearr_31838_31974 = state_31800__$1;
(statearr_31838_31974[(2)] = null);

(statearr_31838_31974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (23))){
var inst_31720 = (state_31800[(20)]);
var inst_31722 = (state_31800[(21)]);
var inst_31721 = (state_31800[(22)]);
var inst_31641 = (state_31800[(23)]);
var inst_31724 = (state_31800[(11)]);
var inst_31719 = (state_31800[(19)]);
var inst_31726 = (state_31800[(13)]);
var inst_31724__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_31721);
var inst_31725 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err);
var inst_31726__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),inst_31725);
var inst_31727 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31641,cljs.core.conj,inst_31722);
var inst_31728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31729 = [inst_31720];
var inst_31730 = (new cljs.core.PersistentVector(null,1,(5),inst_31728,inst_31729,null));
var inst_31731 = cljs.core.async.to_chan(inst_31730);
var inst_31732 = (inst_31719.cljs$core$IFn$_invoke$arity$3 ? inst_31719.cljs$core$IFn$_invoke$arity$3(inst_31731,inst_31724__$1,inst_31726__$1) : inst_31719.call(null,inst_31731,inst_31724__$1,inst_31726__$1));
var inst_31746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31747 = [inst_31724__$1,inst_31726__$1];
var inst_31748 = (new cljs.core.PersistentVector(null,2,(5),inst_31746,inst_31747,null));
var state_31800__$1 = (function (){var statearr_31839 = state_31800;
(statearr_31839[(32)] = inst_31732);

(statearr_31839[(11)] = inst_31724__$1);

(statearr_31839[(33)] = inst_31727);

(statearr_31839[(13)] = inst_31726__$1);

return statearr_31839;
})();
return cljs.core.async.ioc_alts_BANG_(state_31800__$1,(26),inst_31748);
} else {
if((state_val_31801 === (35))){
var state_31800__$1 = state_31800;
var statearr_31840_31983 = state_31800__$1;
(statearr_31840_31983[(2)] = null);

(statearr_31840_31983[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (19))){
var inst_31710 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31841_31985 = state_31800__$1;
(statearr_31841_31985[(2)] = inst_31710);

(statearr_31841_31985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (11))){
var inst_31664 = (state_31800[(17)]);
var inst_31639 = (state_31800[(27)]);
var inst_31689 = (inst_31664.cljs$core$IFn$_invoke$arity$2 ? inst_31664.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,inst_31639) : inst_31664.call(null,_EQ_args_EQ_,inst_31639));
var state_31800__$1 = state_31800;
var statearr_31842_31987 = state_31800__$1;
(statearr_31842_31987[(2)] = inst_31689);

(statearr_31842_31987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (9))){
var inst_31639 = (state_31800[(27)]);
var inst_31681 = (state_31800[(2)]);
var inst_31682 = cljs.core.async.close_BANG_(inst_31639);
var inst_31683 = cljs.core.async.close_BANG_(_EQ_args_EQ_);
var state_31800__$1 = (function (){var statearr_31843 = state_31800;
(statearr_31843[(34)] = inst_31682);

(statearr_31843[(35)] = inst_31681);

return statearr_31843;
})();
var statearr_31844_31989 = state_31800__$1;
(statearr_31844_31989[(2)] = inst_31683);

(statearr_31844_31989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (5))){
var inst_31798 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31800__$1,inst_31798);
} else {
if((state_val_31801 === (14))){
var inst_31694 = (state_31800[(8)]);
var inst_31702 = inst_31694.cljs$lang$protocol_mask$partition0$;
var inst_31703 = (inst_31702 & (64));
var inst_31704 = inst_31694.cljs$core$ISeq$;
var inst_31705 = (cljs.core.PROTOCOL_SENTINEL === inst_31704);
var inst_31706 = ((inst_31703) || (inst_31705));
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31706)){
var statearr_31845_31992 = state_31800__$1;
(statearr_31845_31992[(1)] = (17));

} else {
var statearr_31846_31993 = state_31800__$1;
(statearr_31846_31993[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (26))){
var inst_31752 = (state_31800[(18)]);
var inst_31724 = (state_31800[(11)]);
var inst_31750 = (state_31800[(12)]);
var inst_31750__$1 = (state_31800[(2)]);
var inst_31751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31750__$1,(0),null);
var inst_31752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31750__$1,(1),null);
var inst_31753 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31752__$1,inst_31724);
var state_31800__$1 = (function (){var statearr_31847 = state_31800;
(statearr_31847[(18)] = inst_31752__$1);

(statearr_31847[(26)] = inst_31751);

(statearr_31847[(12)] = inst_31750__$1);

return statearr_31847;
})();
if(inst_31753){
var statearr_31848_31995 = state_31800__$1;
(statearr_31848_31995[(1)] = (27));

} else {
var statearr_31849_31996 = state_31800__$1;
(statearr_31849_31996[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (16))){
var inst_31713 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31713)){
var statearr_31854_31997 = state_31800__$1;
(statearr_31854_31997[(1)] = (20));

} else {
var statearr_31855_31998 = state_31800__$1;
(statearr_31855_31998[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (30))){
var inst_31724 = (state_31800[(11)]);
var inst_31750 = (state_31800[(12)]);
var inst_31726 = (state_31800[(13)]);
var inst_31771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31750,(0),null);
var inst_31772 = cljs.core.async.close_BANG_(inst_31724);
var inst_31773 = cljs.core.async.close_BANG_(inst_31726);
var state_31800__$1 = (function (){var statearr_31856 = state_31800;
(statearr_31856[(36)] = inst_31773);

(statearr_31856[(37)] = inst_31772);

return statearr_31856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31800__$1,(33),_EQ_E_EQ_,inst_31771);
} else {
if((state_val_31801 === (10))){
var inst_31664 = (state_31800[(17)]);
var inst_31639 = (state_31800[(27)]);
var inst_31686 = (inst_31664.cljs$core$IFn$_invoke$arity$1 ? inst_31664.cljs$core$IFn$_invoke$arity$1($g$) : inst_31664.call(null,$g$));
var inst_31687 = (inst_31686.cljs$core$IFn$_invoke$arity$2 ? inst_31686.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,inst_31639) : inst_31686.call(null,_EQ_args_EQ_,inst_31639));
var state_31800__$1 = state_31800;
var statearr_31858_32009 = state_31800__$1;
(statearr_31858_32009[(2)] = inst_31687);

(statearr_31858_32009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (18))){
var state_31800__$1 = state_31800;
var statearr_31859_32010 = state_31800__$1;
(statearr_31859_32010[(2)] = false);

(statearr_31859_32010[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (37))){
var inst_31639 = (state_31800[(27)]);
var inst_31790 = (state_31800[(2)]);
var inst_31791 = cljs.core.async.close_BANG_(inst_31639);
var inst_31792 = cljs.core.async.close_BANG_(_EQ_O_EQ_);
var inst_31793 = cljs.core.async.close_BANG_(_EQ_args_EQ_);
var inst_31794 = cljs.core.async.close_BANG_(_EQ_E_EQ_);
var state_31800__$1 = (function (){var statearr_31861 = state_31800;
(statearr_31861[(38)] = inst_31791);

(statearr_31861[(39)] = inst_31792);

(statearr_31861[(40)] = inst_31790);

(statearr_31861[(41)] = inst_31793);

return statearr_31861;
})();
var statearr_31862_32021 = state_31800__$1;
(statearr_31862_32021[(2)] = inst_31794);

(statearr_31862_32021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (8))){
var inst_31796 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31863_32022 = state_31800__$1;
(statearr_31863_32022[(2)] = inst_31796);

(statearr_31863_32022[(1)] = (5));


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
var statearr_31864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31864[(0)] = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__);

(statearr_31864[(1)] = (1));

return statearr_31864;
});
var census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____1 = (function (state_31800){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_31800);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e31865){if((e31865 instanceof Object)){
var ex__16492__auto__ = e31865;
var statearr_31866_32025 = state_31800;
(statearr_31866_32025[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32026 = state_31800;
state_31800 = G__32026;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__ = function(state_31800){
switch(arguments.length){
case 0:
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____0.call(this);
case 1:
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____1.call(this,state_31800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____0;
census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto____1;
return census$merger$core$I_EQ_OE_M_spooler_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__,_EQ_args_EQ_))
})();
var state__16665__auto__ = (function (){var statearr_31867 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_31867[(6)] = c__16663__auto__);

return statearr_31867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__,_EQ_args_EQ_))
);

return c__16663__auto__;
});
});

//# sourceMappingURL=census.merger.core.js.map
