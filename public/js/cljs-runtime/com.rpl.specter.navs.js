goog.provide('com.rpl.specter.navs');
goog.require('cljs.core');
goog.require('com.rpl.specter.impl');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return (!(com.rpl.specter.navs.not_selected_QMARK__STAR_(compiled_path,vals,structure)));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__24830__auto__,e){
var ret__24831__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(e) : next_fn.call(null,e));
if((ret__24831__auto__ === com.rpl.specter.impl.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
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
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
var x__4347__auto__ = (((structure == null))?null:structure);
var m__4348__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4348__auto__.call(null,structure,next_fn));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.all_transform["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4348__auto____$1.call(null,structure,next_fn));
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
var newkv = (function (){var G__29307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29307) : next_fn.call(null,G__29307));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return (!((v === com.rpl.specter.impl.NONE)));
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

var G__29308_29446 = com.rpl.specter.navs.all_transform;
var G__29309_29447 = "null";
var G__29310_29448 = ((function (G__29308_29446,G__29309_29447){
return (function (structure,next_fn){
return null;
});})(G__29308_29446,G__29309_29447))
;
goog.object.set(G__29308_29446,G__29309_29447,G__29310_29448);

cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
var newk = (function (){var G__29311 = cljs.core.key(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29311) : next_fn.call(null,G__29311));
})();
var newv = (function (){var G__29312 = cljs.core.val(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29312) : next_fn.call(null,G__29312));
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
var newkv = (function (){var G__29313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29313) : next_fn.call(null,G__29313));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(structure__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"_",true);

var G__29314_29467 = com.rpl.specter.navs.all_transform;
var G__29315_29468 = "_";
var G__29316_29469 = ((function (G__29314_29467,G__29315_29468){
return (function (structure,next_fn){
if(cljs.core.record_QMARK_(structure)){
return com.rpl.specter.navs.all_transform_record(structure,next_fn);
} else {
var empty_structure = cljs.core.empty(structure);
if(((cljs.core.list_QMARK_(empty_structure)) && ((!(com.rpl.specter.navs.queue_QMARK_(empty_structure)))))){
return com.rpl.specter.navs.all_transform_list(structure,next_fn);
} else {
if(cljs.core.map_QMARK_(structure)){
return cljs.core.reduce_kv(((function (empty_structure,G__29314_29467,G__29315_29468){
return (function (m,k,v){
var newkv = (function (){var G__29317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29317) : next_fn.call(null,G__29317));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(empty_structure,G__29314_29467,G__29315_29468))
,empty_structure,structure);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_structure,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
});})(G__29314_29467,G__29315_29468))
;
goog.object.set(G__29314_29467,G__29315_29468,G__29316_29469);

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
var x__4347__auto__ = (((structure == null))?null:structure);
var m__4348__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4348__auto__.call(null,structure,next_fn));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.map_vals_transform["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4348__auto____$1.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-vals-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
var x__4347__auto__ = (((structure == null))?null:structure);
var m__4348__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4348__auto__.call(null,structure,next_fn));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.map_keys_transform["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4348__auto____$1.call(null,structure,next_fn));
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

var G__29318_29488 = com.rpl.specter.navs.map_vals_transform;
var G__29319_29489 = "null";
var G__29320_29490 = ((function (G__29318_29488,G__29319_29489){
return (function (structure,next_fn){
return null;
});})(G__29318_29488,G__29319_29489))
;
goog.object.set(G__29318_29488,G__29319_29489,G__29320_29490);

var G__29321_29491 = com.rpl.specter.navs.map_keys_transform;
var G__29322_29492 = "null";
var G__29323_29493 = ((function (G__29321_29491,G__29322_29492){
return (function (structure,next_fn){
return null;
});})(G__29321_29491,G__29322_29492))
;
goog.object.set(G__29321_29491,G__29322_29492,G__29323_29493);

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

var G__29324_29504 = com.rpl.specter.navs.map_vals_transform;
var G__29325_29505 = "_";
var G__29326_29506 = ((function (G__29324_29504,G__29325_29505){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__29324_29504,G__29325_29505){
return (function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
});})(G__29324_29504,G__29325_29505))
,cljs.core.empty(structure),structure);
});})(G__29324_29504,G__29325_29505))
;
goog.object.set(G__29324_29504,G__29325_29505,G__29326_29506);

var G__29327_29512 = com.rpl.specter.navs.map_keys_transform;
var G__29328_29513 = "_";
var G__29329_29514 = ((function (G__29327_29512,G__29328_29513){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__29327_29512,G__29328_29513){
return (function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
});})(G__29327_29512,G__29328_29513))
,cljs.core.empty(structure),structure);
});})(G__29327_29512,G__29328_29513))
;
goog.object.set(G__29327_29512,G__29328_29513,G__29329_29514);
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
var G__29330 = ((typeof structure === 'string')?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(structure),start,end));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29330) : next_fn.call(null,G__29330));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_(path)){
return path;
} else {
if(((cljs.core.coll_QMARK_(path)) && (cljs.core.every_QMARK_(cljs.core.fn_QMARK_,path)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (combined,afn){
return (function (structure){
var and__4036__auto__ = (combined.cljs$core$IFn$_invoke$arity$1 ? combined.cljs$core$IFn$_invoke$arity$1(structure) : combined.call(null,structure));
if(cljs.core.truth_(and__4036__auto__)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return and__4036__auto__;
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
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
var x__4347__auto__ = (((structure == null))?null:structure);
var m__4348__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4348__auto__.call(null,structure,elements));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.append_all["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4348__auto____$1.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-all",structure);
}
}
}
});

com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
var x__4347__auto__ = (((structure == null))?null:structure);
var m__4348__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4348__auto__.call(null,structure,elements));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.prepend_all["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4348__auto____$1.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-all",structure);
}
}
}
});

com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
var x__4347__auto__ = (((structure == null))?null:structure);
var m__4348__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4348__auto__.call(null,structure,elem));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.append_one["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4348__auto____$1.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-one",structure);
}
}
}
});

com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
var x__4347__auto__ = (((structure == null))?null:structure);
var m__4348__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4348__auto__.call(null,structure,elem));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.prepend_one["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4348__auto____$1.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-one",structure);
}
}
}
});

goog.object.set(com.rpl.specter.navs.AddExtremes,"null",true);

var G__29333_29518 = com.rpl.specter.navs.append_all;
var G__29334_29519 = "null";
var G__29335_29520 = ((function (G__29333_29518,G__29334_29519){
return (function (_,elements){
return elements;
});})(G__29333_29518,G__29334_29519))
;
goog.object.set(G__29333_29518,G__29334_29519,G__29335_29520);

var G__29336_29521 = com.rpl.specter.navs.prepend_all;
var G__29337_29522 = "null";
var G__29338_29523 = ((function (G__29336_29521,G__29337_29522){
return (function (_,elements){
return elements;
});})(G__29336_29521,G__29337_29522))
;
goog.object.set(G__29336_29521,G__29337_29522,G__29338_29523);

var G__29339_29524 = com.rpl.specter.navs.append_one;
var G__29340_29525 = "null";
var G__29341_29526 = ((function (G__29339_29524,G__29340_29525){
return (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
});})(G__29339_29524,G__29340_29525))
;
goog.object.set(G__29339_29524,G__29340_29525,G__29341_29526);

var G__29342_29527 = com.rpl.specter.navs.prepend_one;
var G__29343_29528 = "null";
var G__29344_29529 = ((function (G__29342_29527,G__29343_29528){
return (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
});})(G__29342_29527,G__29343_29528))
;
goog.object.set(G__29342_29527,G__29343_29528,G__29344_29529);

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

var G__29345_29533 = com.rpl.specter.navs.append_all;
var G__29346_29534 = "_";
var G__29347_29535 = ((function (G__29345_29533,G__29346_29534){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,elements);
});})(G__29345_29533,G__29346_29534))
;
goog.object.set(G__29345_29533,G__29346_29534,G__29347_29535);

var G__29348_29536 = com.rpl.specter.navs.prepend_all;
var G__29349_29537 = "_";
var G__29350_29538 = ((function (G__29348_29536,G__29349_29537){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(elements,structure);
});})(G__29348_29536,G__29349_29537))
;
goog.object.set(G__29348_29536,G__29349_29537,G__29350_29538);

var G__29351_29539 = com.rpl.specter.navs.append_one;
var G__29352_29540 = "_";
var G__29353_29541 = ((function (G__29351_29539,G__29352_29540){
return (function (structure,elem){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
});})(G__29351_29539,G__29352_29540))
;
goog.object.set(G__29351_29539,G__29352_29540,G__29353_29541);

var G__29354_29542 = com.rpl.specter.navs.prepend_one;
var G__29355_29543 = "_";
var G__29356_29544 = ((function (G__29354_29542,G__29355_29543){
return (function (structure,elem){
return cljs.core.cons(elem,structure);
});})(G__29354_29542,G__29355_29543))
;
goog.object.set(G__29354_29542,G__29355_29543,G__29356_29544);

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
var x__4347__auto__ = (((s == null))?null:s);
var m__4348__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4348__auto__.call(null,s,afn));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.update_first["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4348__auto____$1.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-first",s);
}
}
}
});

com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
var x__4347__auto__ = (((s == null))?null:s);
var m__4348__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4348__auto__.call(null,s,afn));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.update_last["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4348__auto____$1.call(null,s,afn));
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
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
var x__4347__auto__ = (((s == null))?null:s);
var m__4348__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4348__auto__.call(null,s));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.get_first["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__4348__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-first",s);
}
}
}
});

com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
var x__4347__auto__ = (((s == null))?null:s);
var m__4348__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4348__auto__.call(null,s));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.get_last["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__4348__auto____$1.call(null,s));
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
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
var x__4347__auto__ = (((s == null))?null:s);
var m__4348__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4348__auto__.call(null,s));
} else {
var m__4348__auto____$1 = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__4348__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("FastEmpty.fast-empty?",s);
}
}
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
var G__29357 = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(structure) : getter.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29357) : next_fn.call(null,G__29357));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs29358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29358 = (function (getter,updater,meta29359){
this.getter = getter;
this.updater = updater;
this.meta29359 = meta29359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs29358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29360,meta29359__$1){
var self__ = this;
var _29360__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29358(self__.getter,self__.updater,meta29359__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs29358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29360){
var self__ = this;
var _29360__$1 = this;
return self__.meta29359;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29358.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs29358.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return next_fn((self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(structure) : self__.getter.call(null,structure)));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs29358.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (self__.updater.cljs$core$IFn$_invoke$arity$2 ? self__.updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : self__.updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs29358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta29359","meta29359",-1751921140,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29358.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29358.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29358";

com.rpl.specter.navs.t_com$rpl$specter$navs29358.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29358");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs29358.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29358 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29358(getter__$1,updater__$1,meta29359){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29358(getter__$1,updater__$1,meta29359));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29358(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = (function (){var G__29361 = cljs.core.first(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29361) : afn.call(null,G__29361));
})();
var restl = cljs.core.rest(l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons(newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = (function (){var G__29362 = cljs.core.last(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29362) : afn.call(null,G__29362));
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
var G__29363 = c;
switch (G__29363) {
case (1):
var vec__29364 = v__$1;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29364,(0),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e) : afn.call(null,e));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__29367 = v__$1;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29367,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29367,(1),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e2) : afn.call(null,e2));
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = (function (){var G__29370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29370) : afn.call(null,G__29370));
})();
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop(v__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,newe);
}

}
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"string",true);

var G__29371_29553 = com.rpl.specter.navs.update_first;
var G__29372_29554 = "string";
var G__29373_29555 = ((function (G__29371_29553,G__29372_29554){
return (function (s,afn){
var rests = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s));
var newb = (function (){var G__29374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29374) : afn.call(null,G__29374));
})();
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rests)].join('');
}
});})(G__29371_29553,G__29372_29554))
;
goog.object.set(G__29371_29553,G__29372_29554,G__29373_29555);

var G__29375_29556 = com.rpl.specter.navs.update_last;
var G__29376_29557 = "string";
var G__29377_29558 = ((function (G__29375_29556,G__29376_29557){
return (function (s,afn){
var last_idx = (cljs.core.count(s) - (1));
var newl = (function (){var G__29378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,last_idx);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29378) : afn.call(null,G__29378));
})();
var begins = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(begins),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
});})(G__29375_29556,G__29376_29557))
;
goog.object.set(G__29375_29556,G__29376_29557,G__29377_29558);

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry((function (){var G__29379 = cljs.core.key(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29379) : afn.call(null,G__29379));
})(),cljs.core.val(e__$1),null);
});

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry(cljs.core.key(e__$1),(function (){var G__29380 = cljs.core.val(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29380) : afn.call(null,G__29380));
})(),null);
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"_",true);

var G__29381_29562 = com.rpl.specter.navs.update_first;
var G__29382_29563 = "_";
var G__29383_29564 = ((function (G__29381_29562,G__29382_29563){
return (function (l,val){
return com.rpl.specter.navs.update_first_list(l,val);
});})(G__29381_29562,G__29382_29563))
;
goog.object.set(G__29381_29562,G__29382_29563,G__29383_29564);

var G__29384_29565 = com.rpl.specter.navs.update_last;
var G__29385_29566 = "_";
var G__29386_29567 = ((function (G__29384_29565,G__29385_29566){
return (function (l,val){
return com.rpl.specter.navs.update_last_list(l,val);
});})(G__29384_29565,G__29385_29566))
;
goog.object.set(G__29384_29565,G__29385_29566,G__29386_29567);
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

var G__29387_29568 = com.rpl.specter.navs.get_first;
var G__29388_29569 = "_";
var G__29389_29570 = ((function (G__29387_29568,G__29388_29569){
return (function (s){
return cljs.core.first(s);
});})(G__29387_29568,G__29388_29569))
;
goog.object.set(G__29387_29568,G__29388_29569,G__29389_29570);

var G__29390_29571 = com.rpl.specter.navs.get_last;
var G__29391_29572 = "_";
var G__29392_29573 = ((function (G__29390_29571,G__29391_29572){
return (function (s){
return cljs.core.last(s);
});})(G__29390_29571,G__29391_29572))
;
goog.object.set(G__29390_29571,G__29391_29572,G__29392_29573);

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

var G__29393_29574 = com.rpl.specter.navs.get_first;
var G__29394_29575 = "string";
var G__29395_29576 = ((function (G__29393_29574,G__29394_29575){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
});})(G__29393_29574,G__29394_29575))
;
goog.object.set(G__29393_29574,G__29394_29575,G__29395_29576);

var G__29396_29577 = com.rpl.specter.navs.get_last;
var G__29397_29578 = "string";
var G__29398_29579 = ((function (G__29396_29577,G__29397_29578){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
});})(G__29396_29577,G__29397_29578))
;
goog.object.set(G__29396_29577,G__29397_29578,G__29398_29579);
goog.object.set(com.rpl.specter.navs.FastEmpty,"null",true);

var G__29399_29580 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__29400_29581 = "null";
var G__29401_29582 = ((function (G__29399_29580,G__29400_29581){
return (function (_){
return true;
});})(G__29399_29580,G__29400_29581))
;
goog.object.set(G__29399_29580,G__29400_29581,G__29401_29582);

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

var G__29402_29583 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__29403_29584 = "_";
var G__29404_29585 = ((function (G__29402_29583,G__29403_29584){
return (function (s){
return cljs.core.empty_QMARK_(s);
});})(G__29402_29583,G__29403_29584))
;
goog.object.set(G__29402_29583,G__29403_29584,G__29404_29585);
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = (function (){var G__29405 = vals;
var G__29406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29405,G__29406) : next_fn.call(null,G__29405,G__29406));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs29407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29407 = (function (key,meta29408){
this.key = key;
this.meta29408 = meta29408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs29407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29409,meta29408__$1){
var self__ = this;
var _29409__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29407(self__.key,meta29408__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs29407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29409){
var self__ = this;
var _29409__$1 = this;
return self__.meta29408;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29407.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs29407.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29410 = vals;
var G__29411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29410,G__29411) : next_fn.call(null,G__29410,G__29411));
});

com.rpl.specter.navs.t_com$rpl$specter$navs29407.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.key,next_fn);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta29408","meta29408",-213066702,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29407.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29407.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29407";

com.rpl.specter.navs.t_com$rpl$specter$navs29407.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29407");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs29407.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29407 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29407(key__$1,meta29408){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29407(key__$1,meta29408));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29407(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (k){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs29412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29412 = (function (k,meta29413){
this.k = k;
this.meta29413 = meta29413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs29412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29414,meta29413__$1){
var self__ = this;
var _29414__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29412(self__.k,meta29413__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs29412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29414){
var self__ = this;
var _29414__$1 = this;
return self__.meta29413;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29412.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs29412.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
var G__29415 = vals;
var G__29416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.k);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29415,G__29416) : next_fn.call(null,G__29415,G__29416));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs29412.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.k,next_fn);
} else {
return structure;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs29412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta29413","meta29413",872370276,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29412.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29412.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29412";

com.rpl.specter.navs.t_com$rpl$specter$navs29412.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29412");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs29412.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29412 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29412(k__$1,meta29413){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29412(k__$1,meta29413));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29412(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs29417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29417 = (function (i,meta29418){
this.i = i;
this.meta29418 = meta29418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs29417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29419,meta29418__$1){
var self__ = this;
var _29419__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29417(self__.i,meta29418__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs29417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29419){
var self__ = this;
var _29419__$1 = this;
return self__.meta29418;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29417.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs29417.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29420 = vals;
var G__29421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29420,G__29421) : next_fn.call(null,G__29420,G__29421));
});

com.rpl.specter.navs.t_com$rpl$specter$navs29417.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(structure)){
var newv = (function (){var G__29422 = vals;
var G__29423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29422,G__29423) : next_fn.call(null,G__29422,G__29423));
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
return (function (p__29424){
var vec__29425 = p__29424;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29425,(0),null);
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

com.rpl.specter.navs.t_com$rpl$specter$navs29417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta29418","meta29418",1724864198,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29417.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29417.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29417";

com.rpl.specter.navs.t_com$rpl$specter$navs29417.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29417");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs29417.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29417 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29417(i__$1,meta29418){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29417(i__$1,meta29418));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29417(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k29429,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__29433 = k29429;
var G__29433__$1 = (((G__29433 instanceof cljs.core.Keyword))?G__29433.fqn:null);
switch (G__29433__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29429,else__4304__auto__);

}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__29434){
var vec__29435 = p__29434;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29428){
var self__ = this;
var G__29428__$1 = this;
return (new cljs.core.RecordIter((0),G__29428__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__29438 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__29438(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29430,other29431){
var self__ = this;
var this29430__$1 = this;
return (((!((other29431 == null)))) && ((this29430__$1.constructor === other29431.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29430__$1.end_fn,other29431.end_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29430__$1.__extmap,other29431.__extmap)));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__29428){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__29439 = cljs.core.keyword_identical_QMARK_;
var expr__29440 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__29442 = new cljs.core.Keyword(null,"end-fn","end-fn",54055684);
var G__29443 = expr__29440;
return (pred__29439.cljs$core$IFn$_invoke$arity$2 ? pred__29439.cljs$core$IFn$_invoke$arity$2(G__29442,G__29443) : pred__29439.call(null,G__29442,G__29443));
})())){
return (new com.rpl.specter.navs.SrangeEndFunction(G__29428,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__29428),null));
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn,null))], null),self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__29428){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__29428,self__.__extmap,self__.__hash));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null)], null);
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true;

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.navs/SrangeEndFunction",null,(1),null));
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.navs/SrangeEndFunction");
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
com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__29432){
var extmap__4340__auto__ = (function (){var G__29444 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29432,new cljs.core.Keyword(null,"end-fn","end-fn",54055684));
if(cljs.core.record_QMARK_(G__29432)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29444);
} else {
return G__29444;
}
})();
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__29432),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
var fexpr__29445 = new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(end_fn);
return (fexpr__29445.cljs$core$IFn$_invoke$arity$2 ? fexpr__29445.cljs$core$IFn$_invoke$arity$2(structure,start) : fexpr__29445.call(null,structure,start));
} else {
return (end_fn.cljs$core$IFn$_invoke$arity$1 ? end_fn.cljs$core$IFn$_invoke$arity$1(structure) : end_fn.call(null,structure));
}
});

//# sourceMappingURL=com.rpl.specter.navs.js.map
