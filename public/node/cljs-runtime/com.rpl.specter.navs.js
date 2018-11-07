goog.provide('com.rpl.specter.navs');
goog.require('cljs.core');
goog.require('com.rpl.specter.impl');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return cljs.core.not(com.rpl.specter.navs.not_selected_QMARK__STAR_(compiled_path,vals,structure));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__13605__auto__,e){
var ret__13606__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(e) : next_fn.call(null,e));
if((ret__13606__auto__ === com.rpl.specter.impl.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
}
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(coll),cljs.core.type(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if(((!((structure == null))) && (!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null))))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
var x__4243__auto__ = (((structure == null))?null:structure);
var m__4244__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4244__auto__.call(null,structure,next_fn));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.all_transform["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4244__auto____$1.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.navs.void_transformed_kv_pair_QMARK_ = (function com$rpl$specter$navs$void_transformed_kv_pair_QMARK_(newkv){
return (((newkv === com.rpl.specter.impl.NONE)) || ((cljs.core.count(newkv) < (2))));
});
com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__20785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20785) : next_fn.call(null,G__20785));
})();
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return !((v === com.rpl.specter.impl.NONE));
});
com.rpl.specter.navs.all_transform_list = (function com$rpl$specter$navs$all_transform_list(structure,next_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure));
});
com.rpl.specter.navs.all_transform_record = (function com$rpl$specter$navs$all_transform_record(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,kv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(kv) : next_fn.call(null,kv)));
}),structure,structure);
});
goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"null",true);

var G__20819_20844 = com.rpl.specter.navs.all_transform;
var G__20820_20845 = "null";
var G__20821_20846 = ((function (G__20819_20844,G__20820_20845){
return (function (structure,next_fn){
return null;
});})(G__20819_20844,G__20820_20845))
;
goog.object.set(G__20819_20844,G__20820_20845,G__20821_20846);

cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
var newk = (function (){var G__20825 = cljs.core.key(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20825) : next_fn.call(null,G__20825));
})();
var newv = (function (){var G__20826 = cljs.core.val(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20826) : next_fn.call(null,G__20826));
})();
return cljs.core.__GT_MapEntry(newk,newv,null);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
});

cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
});

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.empty(structure__$1));
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (structure__$1){
return (function (m,k,v){
var newkv = (function (){var G__20831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20831) : next_fn.call(null,G__20831));
})();
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv))){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(structure__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"_",true);

var G__20839_20851 = com.rpl.specter.navs.all_transform;
var G__20840_20852 = "_";
var G__20841_20853 = ((function (G__20839_20851,G__20840_20852){
return (function (structure,next_fn){
if(cljs.core.record_QMARK_(structure)){
return com.rpl.specter.navs.all_transform_record(structure,next_fn);
} else {
var empty_structure = cljs.core.empty(structure);
if(((cljs.core.list_QMARK_(empty_structure)) && (cljs.core.not(com.rpl.specter.navs.queue_QMARK_(empty_structure))))){
return com.rpl.specter.navs.all_transform_list(structure,next_fn);
} else {
if(cljs.core.map_QMARK_(structure)){
return cljs.core.reduce_kv(((function (empty_structure,G__20839_20851,G__20840_20852){
return (function (m,k,v){
var newkv = (function (){var G__20842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20842) : next_fn.call(null,G__20842));
})();
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(empty_structure,G__20839_20851,G__20840_20852))
,empty_structure,structure);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_structure,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
});})(G__20839_20851,G__20840_20852))
;
goog.object.set(G__20839_20851,G__20840_20852,G__20841_20853);

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if(((!((structure == null))) && (!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
var x__4243__auto__ = (((structure == null))?null:structure);
var m__4244__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4244__auto__.call(null,structure,next_fn));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.map_vals_transform["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4244__auto____$1.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-vals-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if(((!((structure == null))) && (!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
var x__4243__auto__ = (((structure == null))?null:structure);
var m__4244__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4244__auto__.call(null,structure,next_fn));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.map_keys_transform["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4244__auto____$1.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-keys-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),empty_map,structure);
});
com.rpl.specter.navs.map_keys_non_transient_transform = (function com$rpl$specter$navs$map_keys_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),empty_map,structure);
});
goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"null",true);

var G__20868_20888 = com.rpl.specter.navs.map_vals_transform;
var G__20869_20889 = "null";
var G__20870_20890 = ((function (G__20868_20888,G__20869_20889){
return (function (structure,next_fn){
return null;
});})(G__20868_20888,G__20869_20889))
;
goog.object.set(G__20868_20888,G__20869_20889,G__20870_20890);

var G__20871_20893 = com.rpl.specter.navs.map_keys_transform;
var G__20872_20894 = "null";
var G__20873_20895 = ((function (G__20871_20893,G__20872_20894){
return (function (structure,next_fn){
return null;
});})(G__20871_20893,G__20872_20894))
;
goog.object.set(G__20871_20893,G__20872_20894,G__20873_20895);

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (structure__$1){
return (function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
});})(structure__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (structure__$1){
return (function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
});})(structure__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"_",true);

var G__20881_20897 = com.rpl.specter.navs.map_vals_transform;
var G__20882_20898 = "_";
var G__20883_20899 = ((function (G__20881_20897,G__20882_20898){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__20881_20897,G__20882_20898){
return (function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
});})(G__20881_20897,G__20882_20898))
,cljs.core.empty(structure),structure);
});})(G__20881_20897,G__20882_20898))
;
goog.object.set(G__20881_20897,G__20882_20898,G__20883_20899);

var G__20884_20900 = com.rpl.specter.navs.map_keys_transform;
var G__20885_20901 = "_";
var G__20886_20902 = ((function (G__20884_20900,G__20885_20901){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__20884_20900,G__20885_20901){
return (function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
});})(G__20884_20900,G__20885_20901))
,cljs.core.empty(structure),structure);
});})(G__20884_20900,G__20885_20901))
;
goog.object.set(G__20884_20900,G__20885_20901,G__20886_20902);
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
var G__20904 = ((typeof structure === 'string')?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(structure),start,end));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20904) : next_fn.call(null,G__20904));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_(path)){
return path;
} else {
if(((cljs.core.coll_QMARK_(path)) && (cljs.core.every_QMARK_(cljs.core.fn_QMARK_,path)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (combined,afn){
return (function (structure){
var and__3938__auto__ = (combined.cljs$core$IFn$_invoke$arity$1 ? combined.cljs$core$IFn$_invoke$arity$1(structure) : combined.call(null,structure));
if(cljs.core.truth_(and__3938__auto__)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return and__3938__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if(((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null))))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
var x__4243__auto__ = (((structure == null))?null:structure);
var m__4244__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4244__auto__.call(null,structure,elements));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.append_all["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4244__auto____$1.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-all",structure);
}
}
}
});

com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if(((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
var x__4243__auto__ = (((structure == null))?null:structure);
var m__4244__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4244__auto__.call(null,structure,elements));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.prepend_all["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4244__auto____$1.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-all",structure);
}
}
}
});

com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if(((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null))))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
var x__4243__auto__ = (((structure == null))?null:structure);
var m__4244__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4244__auto__.call(null,structure,elem));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.append_one["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4244__auto____$1.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-one",structure);
}
}
}
});

com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if(((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
var x__4243__auto__ = (((structure == null))?null:structure);
var m__4244__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4244__auto__.call(null,structure,elem));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.prepend_one["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4244__auto____$1.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-one",structure);
}
}
}
});

goog.object.set(com.rpl.specter.navs.AddExtremes,"null",true);

var G__20922_20947 = com.rpl.specter.navs.append_all;
var G__20923_20948 = "null";
var G__20924_20949 = ((function (G__20922_20947,G__20923_20948){
return (function (_,elements){
return elements;
});})(G__20922_20947,G__20923_20948))
;
goog.object.set(G__20922_20947,G__20923_20948,G__20924_20949);

var G__20925_20950 = com.rpl.specter.navs.prepend_all;
var G__20926_20951 = "null";
var G__20927_20952 = ((function (G__20925_20950,G__20926_20951){
return (function (_,elements){
return elements;
});})(G__20925_20950,G__20926_20951))
;
goog.object.set(G__20925_20950,G__20926_20951,G__20927_20952);

var G__20928_20954 = com.rpl.specter.navs.append_one;
var G__20929_20955 = "null";
var G__20930_20956 = ((function (G__20928_20954,G__20929_20955){
return (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
});})(G__20928_20954,G__20929_20955))
;
goog.object.set(G__20928_20954,G__20929_20955,G__20930_20956);

var G__20931_20957 = com.rpl.specter.navs.prepend_one;
var G__20932_20958 = "null";
var G__20933_20959 = ((function (G__20931_20957,G__20932_20958){
return (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
});})(G__20931_20957,G__20932_20958))
;
goog.object.set(G__20931_20957,G__20932_20958,G__20933_20959);

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,structure__$1,elements);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_(_LT__GT___$2);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure__$1,elem);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
});

goog.object.set(com.rpl.specter.navs.AddExtremes,"_",true);

var G__20934_20961 = com.rpl.specter.navs.append_all;
var G__20935_20962 = "_";
var G__20936_20963 = ((function (G__20934_20961,G__20935_20962){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,elements);
});})(G__20934_20961,G__20935_20962))
;
goog.object.set(G__20934_20961,G__20935_20962,G__20936_20963);

var G__20937_20965 = com.rpl.specter.navs.prepend_all;
var G__20938_20966 = "_";
var G__20939_20967 = ((function (G__20937_20965,G__20938_20966){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(elements,structure);
});})(G__20937_20965,G__20938_20966))
;
goog.object.set(G__20937_20965,G__20938_20966,G__20939_20967);

var G__20940_20969 = com.rpl.specter.navs.append_one;
var G__20941_20970 = "_";
var G__20942_20971 = ((function (G__20940_20969,G__20941_20970){
return (function (structure,elem){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
});})(G__20940_20969,G__20941_20970))
;
goog.object.set(G__20940_20969,G__20941_20970,G__20942_20971);

var G__20943_20972 = com.rpl.specter.navs.prepend_one;
var G__20944_20973 = "_";
var G__20945_20974 = ((function (G__20943_20972,G__20944_20973){
return (function (structure,elem){
return cljs.core.cons(elem,structure);
});})(G__20943_20972,G__20944_20973))
;
goog.object.set(G__20943_20972,G__20944_20973,G__20945_20974);

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if(((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4244__auto__.call(null,s,afn));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.update_first["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4244__auto____$1.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-first",s);
}
}
}
});

com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if(((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4244__auto__.call(null,s,afn));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.update_last["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4244__auto____$1.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if(((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null))))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4244__auto__.call(null,s));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.get_first["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__4244__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-first",s);
}
}
}
});

com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if(((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null))))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4244__auto__.call(null,s));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.get_last["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__4244__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if(((!((s == null))) && (!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null))))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4244__auto__.call(null,s));
} else {
var m__4244__auto____$1 = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__4244__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("FastEmpty.fast-empty?",s);
}
}
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
var G__20985 = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(structure) : getter.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20985) : next_fn.call(null,G__20985));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (updater.cljs$core$IFn$_invoke$arity$2 ? updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj((function (getter,updater){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs20987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs20987 = (function (getter,updater,meta20988){
this.getter = getter;
this.updater = updater;
this.meta20988 = meta20988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs20987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20989,meta20988__$1){
var self__ = this;
var _20989__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs20987(self__.getter,self__.updater,meta20988__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs20987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20989){
var self__ = this;
var _20989__$1 = this;
return self__.meta20988;
});

com.rpl.specter.navs.t_com$rpl$specter$navs20987.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs20987.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return next_fn((self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(structure) : self__.getter.call(null,structure)));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs20987.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (self__.updater.cljs$core$IFn$_invoke$arity$2 ? self__.updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : self__.updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs20987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta20988","meta20988",-514176849,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs20987.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs20987.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs20987";

com.rpl.specter.navs.t_com$rpl$specter$navs20987.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs20987");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs20987.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs20987 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs20987(getter__$1,updater__$1,meta20988){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs20987(getter__$1,updater__$1,meta20988));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs20987(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = (function (){var G__21004 = cljs.core.first(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__21004) : afn.call(null,G__21004));
})();
var restl = cljs.core.rest(l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons(newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = (function (){var G__21005 = cljs.core.last(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__21005) : afn.call(null,G__21005));
})();
var bl = cljs.core.butlast(l);
if((com.rpl.specter.impl.NONE === lastl)){
if((bl == null)){
return cljs.core.List.EMPTY;
} else {
return bl;
}
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lastl], null));
}
});
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count(v);
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count(v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
var newv = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(val) : afn.call(null,val));
if((com.rpl.specter.impl.NONE === newv)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v__$1,(1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,(0),newv);
}
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
var c = (com.rpl.specter.navs.vec_count(v__$1) | (0));
var G__21009 = c;
switch (G__21009) {
case (1):
var vec__21011 = v__$1;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21011,(0),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e) : afn.call(null,e));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__21014 = v__$1;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21014,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21014,(1),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e2) : afn.call(null,e2));
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = (function (){var G__21018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__21018) : afn.call(null,G__21018));
})();
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop(v__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,newe);
}

}
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"string",true);

var G__21020_21052 = com.rpl.specter.navs.update_first;
var G__21021_21053 = "string";
var G__21022_21054 = ((function (G__21020_21052,G__21021_21053){
return (function (s,afn){
var rests = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s));
var newb = (function (){var G__21023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__21023) : afn.call(null,G__21023));
})();
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rests)].join('');
}
});})(G__21020_21052,G__21021_21053))
;
goog.object.set(G__21020_21052,G__21021_21053,G__21022_21054);

var G__21024_21056 = com.rpl.specter.navs.update_last;
var G__21025_21057 = "string";
var G__21026_21058 = ((function (G__21024_21056,G__21025_21057){
return (function (s,afn){
var last_idx = (cljs.core.count(s) - (1));
var newl = (function (){var G__21027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,last_idx);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__21027) : afn.call(null,G__21027));
})();
var begins = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(begins),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
});})(G__21024_21056,G__21025_21057))
;
goog.object.set(G__21024_21056,G__21025_21057,G__21026_21058);

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry((function (){var G__21033 = cljs.core.key(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__21033) : afn.call(null,G__21033));
})(),cljs.core.val(e__$1),null);
});

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry(cljs.core.key(e__$1),(function (){var G__21035 = cljs.core.val(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__21035) : afn.call(null,G__21035));
})(),null);
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"_",true);

var G__21038_21066 = com.rpl.specter.navs.update_first;
var G__21039_21067 = "_";
var G__21040_21068 = ((function (G__21038_21066,G__21039_21067){
return (function (l,val){
return com.rpl.specter.navs.update_first_list(l,val);
});})(G__21038_21066,G__21039_21067))
;
goog.object.set(G__21038_21066,G__21039_21067,G__21040_21068);

var G__21043_21070 = com.rpl.specter.navs.update_last;
var G__21044_21071 = "_";
var G__21045_21072 = ((function (G__21043_21070,G__21044_21071){
return (function (l,val){
return com.rpl.specter.navs.update_last_list(l,val);
});})(G__21043_21070,G__21044_21071))
;
goog.object.set(G__21043_21070,G__21044_21071,G__21045_21072);
cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek(v__$1);
});

goog.object.set(com.rpl.specter.navs.GetExtremes,"_",true);

var G__21076_21091 = com.rpl.specter.navs.get_first;
var G__21077_21092 = "_";
var G__21078_21093 = ((function (G__21076_21091,G__21077_21092){
return (function (s){
return cljs.core.first(s);
});})(G__21076_21091,G__21077_21092))
;
goog.object.set(G__21076_21091,G__21077_21092,G__21078_21093);

var G__21079_21094 = com.rpl.specter.navs.get_last;
var G__21080_21095 = "_";
var G__21081_21096 = ((function (G__21079_21094,G__21080_21095){
return (function (s){
return cljs.core.last(s);
});})(G__21079_21094,G__21080_21095))
;
goog.object.set(G__21079_21094,G__21080_21095,G__21081_21096);

cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.key(e__$1);
});

cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.val(e__$1);
});

goog.object.set(com.rpl.specter.navs.GetExtremes,"string",true);

var G__21084_21098 = com.rpl.specter.navs.get_first;
var G__21085_21099 = "string";
var G__21086_21100 = ((function (G__21084_21098,G__21085_21099){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
});})(G__21084_21098,G__21085_21099))
;
goog.object.set(G__21084_21098,G__21085_21099,G__21086_21100);

var G__21087_21102 = com.rpl.specter.navs.get_last;
var G__21088_21103 = "string";
var G__21089_21104 = ((function (G__21087_21102,G__21088_21103){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
});})(G__21087_21102,G__21088_21103))
;
goog.object.set(G__21087_21102,G__21088_21103,G__21089_21104);
goog.object.set(com.rpl.specter.navs.FastEmpty,"null",true);

var G__21108_21121 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__21109_21122 = "null";
var G__21110_21123 = ((function (G__21108_21121,G__21109_21122){
return (function (_){
return true;
});})(G__21108_21121,G__21109_21122))
;
goog.object.set(G__21108_21121,G__21109_21122,G__21110_21123);

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.vec_count(v__$1));
});

cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.transient_vec_count(v__$1));
});

goog.object.set(com.rpl.specter.navs.FastEmpty,"_",true);

var G__21113_21124 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__21114_21125 = "_";
var G__21115_21126 = ((function (G__21113_21124,G__21114_21125){
return (function (s){
return cljs.core.empty_QMARK_(s);
});})(G__21113_21124,G__21114_21125))
;
goog.object.set(G__21113_21124,G__21114_21125,G__21115_21126);
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = (function (){var G__21130 = vals;
var G__21131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__21130,G__21131) : next_fn.call(null,G__21130,G__21131));
})();
if((newv === com.rpl.specter.impl.NONE)){
if(cljs.core.sequential_QMARK_(structure)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,key,(key + (1)),((function (newv){
return (function (_){
return cljs.core.PersistentVector.EMPTY;
});})(newv))
);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,key);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,key,newv);
}
});
/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 *        Setting the value to NONE will remove it from the collection.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs21135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs21135 = (function (key,meta21136){
this.key = key;
this.meta21136 = meta21136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs21135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21137,meta21136__$1){
var self__ = this;
var _21137__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs21135(self__.key,meta21136__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs21135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21137){
var self__ = this;
var _21137__$1 = this;
return self__.meta21136;
});

com.rpl.specter.navs.t_com$rpl$specter$navs21135.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs21135.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__21139 = vals;
var G__21140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__21139,G__21140) : next_fn.call(null,G__21139,G__21140));
});

com.rpl.specter.navs.t_com$rpl$specter$navs21135.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.key,next_fn);
});

com.rpl.specter.navs.t_com$rpl$specter$navs21135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta21136","meta21136",960756030,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs21135.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs21135.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs21135";

com.rpl.specter.navs.t_com$rpl$specter$navs21135.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs21135");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs21135.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs21135 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs21135(key__$1,meta21136){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs21135(key__$1,meta21136));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs21135(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (k){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs21155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs21155 = (function (k,meta21156){
this.k = k;
this.meta21156 = meta21156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs21155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21157,meta21156__$1){
var self__ = this;
var _21157__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs21155(self__.k,meta21156__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs21155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21157){
var self__ = this;
var _21157__$1 = this;
return self__.meta21156;
});

com.rpl.specter.navs.t_com$rpl$specter$navs21155.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs21155.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
var G__21164 = vals;
var G__21165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.k);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__21164,G__21165) : next_fn.call(null,G__21164,G__21165));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs21155.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.k,next_fn);
} else {
return structure;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs21155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta21156","meta21156",1900674276,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs21155.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs21155.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs21155";

com.rpl.specter.navs.t_com$rpl$specter$navs21155.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs21155");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs21155.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs21155 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs21155(k__$1,meta21156){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs21155(k__$1,meta21156));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs21155(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs21184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs21184 = (function (i,meta21185){
this.i = i;
this.meta21185 = meta21185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs21184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21186,meta21185__$1){
var self__ = this;
var _21186__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs21184(self__.i,meta21185__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs21184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21186){
var self__ = this;
var _21186__$1 = this;
return self__.meta21185;
});

com.rpl.specter.navs.t_com$rpl$specter$navs21184.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs21184.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__21190 = vals;
var G__21191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__21190,G__21191) : next_fn.call(null,G__21190,G__21191));
});

com.rpl.specter.navs.t_com$rpl$specter$navs21184.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(structure)){
var newv = (function (){var G__21194 = vals;
var G__21195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__21194,G__21195) : next_fn.call(null,G__21194,G__21195));
})();
if((newv === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),((function (newv,this$__$1){
return (function (_){
return cljs.core.PersistentVector.EMPTY;
});})(newv,this$__$1))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,self__.i,newv);
}
} else {
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),((function (this$__$1){
return (function (p__21198){
var vec__21199 = p__21198;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21199,(0),null);
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,e) : next_fn.call(null,vals,e));
if((v === com.rpl.specter.impl.NONE)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
});})(this$__$1))
);
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs21184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta21185","meta21185",306026926,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs21184.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs21184.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs21184";

com.rpl.specter.navs.t_com$rpl$specter$navs21184.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs21184");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs21184.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs21184 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs21184(i__$1,meta21185){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs21184(i__$1,meta21185));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs21184(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.navs.SrangeEndFunction = (function (end_fn,__meta,__extmap,__hash){
this.end_fn = end_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k21220,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__21229 = k21220;
var G__21229__$1 = (((G__21229 instanceof cljs.core.Keyword))?G__21229.fqn:null);
switch (G__21229__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21220,else__4206__auto__);

}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21219){
var self__ = this;
var G__21219__$1 = this;
return (new cljs.core.RecordIter((0),G__21219__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__21236 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__21236(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21221,other21222){
var self__ = this;
var this21221__$1 = this;
return ((!((other21222 == null))) && ((this21221__$1.constructor === other21222.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21221__$1.end_fn,other21222.end_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21221__$1.__extmap,other21222.__extmap)));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__21219){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__21241 = cljs.core.keyword_identical_QMARK_;
var expr__21242 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__21246 = new cljs.core.Keyword(null,"end-fn","end-fn",54055684);
var G__21247 = expr__21242;
return (pred__21241.cljs$core$IFn$_invoke$arity$2 ? pred__21241.cljs$core$IFn$_invoke$arity$2(G__21246,G__21247) : pred__21241.call(null,G__21246,G__21247));
})())){
return (new com.rpl.specter.navs.SrangeEndFunction(G__21219,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__21219),null));
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn,null))], null),self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__21219){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__21219,self__.__extmap,self__.__hash));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null)], null);
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true;

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.navs/SrangeEndFunction",null,(1),null));
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.navs/SrangeEndFunction");
});

/**
 * Positional factory function for com.rpl.specter.navs/SrangeEndFunction.
 */
com.rpl.specter.navs.__GT_SrangeEndFunction = (function com$rpl$specter$navs$__GT_SrangeEndFunction(end_fn){
return (new com.rpl.specter.navs.SrangeEndFunction(end_fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.navs/SrangeEndFunction, taking a map of keywords to field values.
 */
com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__21224){
var extmap__4236__auto__ = (function (){var G__21254 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21224,new cljs.core.Keyword(null,"end-fn","end-fn",54055684));
if(cljs.core.record_QMARK_(G__21224)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21254);
} else {
return G__21254;
}
})();
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__21224),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
var fexpr__21270 = new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(end_fn);
return (fexpr__21270.cljs$core$IFn$_invoke$arity$2 ? fexpr__21270.cljs$core$IFn$_invoke$arity$2(structure,start) : fexpr__21270.call(null,structure,start));
} else {
return (end_fn.cljs$core$IFn$_invoke$arity$1 ? end_fn.cljs$core$IFn$_invoke$arity$1(structure) : end_fn.call(null,structure));
}
});

//# sourceMappingURL=com.rpl.specter.navs.js.map
