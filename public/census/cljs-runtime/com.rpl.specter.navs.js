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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__12273__auto__,e){
var ret__12274__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(e) : next_fn.call(null,e));
if((ret__12274__auto__ === com.rpl.specter.impl.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
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
var newkv = (function (){var G__16717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__16717) : next_fn.call(null,G__16717));
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

var G__16718_16856 = com.rpl.specter.navs.all_transform;
var G__16719_16857 = "null";
var G__16720_16858 = ((function (G__16718_16856,G__16719_16857){
return (function (structure,next_fn){
return null;
});})(G__16718_16856,G__16719_16857))
;
goog.object.set(G__16718_16856,G__16719_16857,G__16720_16858);

cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
var newk = (function (){var G__16721 = cljs.core.key(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__16721) : next_fn.call(null,G__16721));
})();
var newv = (function (){var G__16722 = cljs.core.val(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__16722) : next_fn.call(null,G__16722));
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
var newkv = (function (){var G__16723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__16723) : next_fn.call(null,G__16723));
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

var G__16724_16866 = com.rpl.specter.navs.all_transform;
var G__16725_16867 = "_";
var G__16726_16868 = ((function (G__16724_16866,G__16725_16867){
return (function (structure,next_fn){
if(cljs.core.record_QMARK_(structure)){
return com.rpl.specter.navs.all_transform_record(structure,next_fn);
} else {
var empty_structure = cljs.core.empty(structure);
if(((cljs.core.list_QMARK_(empty_structure)) && ((!(com.rpl.specter.navs.queue_QMARK_(empty_structure)))))){
return com.rpl.specter.navs.all_transform_list(structure,next_fn);
} else {
if(cljs.core.map_QMARK_(structure)){
return cljs.core.reduce_kv(((function (empty_structure,G__16724_16866,G__16725_16867){
return (function (m,k,v){
var newkv = (function (){var G__16727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__16727) : next_fn.call(null,G__16727));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(empty_structure,G__16724_16866,G__16725_16867))
,empty_structure,structure);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_structure,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
});})(G__16724_16866,G__16725_16867))
;
goog.object.set(G__16724_16866,G__16725_16867,G__16726_16868);

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

var G__16728_16878 = com.rpl.specter.navs.map_vals_transform;
var G__16729_16879 = "null";
var G__16730_16880 = ((function (G__16728_16878,G__16729_16879){
return (function (structure,next_fn){
return null;
});})(G__16728_16878,G__16729_16879))
;
goog.object.set(G__16728_16878,G__16729_16879,G__16730_16880);

var G__16731_16881 = com.rpl.specter.navs.map_keys_transform;
var G__16732_16882 = "null";
var G__16733_16883 = ((function (G__16731_16881,G__16732_16882){
return (function (structure,next_fn){
return null;
});})(G__16731_16881,G__16732_16882))
;
goog.object.set(G__16731_16881,G__16732_16882,G__16733_16883);

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

var G__16734_16890 = com.rpl.specter.navs.map_vals_transform;
var G__16735_16891 = "_";
var G__16736_16892 = ((function (G__16734_16890,G__16735_16891){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__16734_16890,G__16735_16891){
return (function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
});})(G__16734_16890,G__16735_16891))
,cljs.core.empty(structure),structure);
});})(G__16734_16890,G__16735_16891))
;
goog.object.set(G__16734_16890,G__16735_16891,G__16736_16892);

var G__16737_16895 = com.rpl.specter.navs.map_keys_transform;
var G__16738_16896 = "_";
var G__16739_16897 = ((function (G__16737_16895,G__16738_16896){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__16737_16895,G__16738_16896){
return (function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
});})(G__16737_16895,G__16738_16896))
,cljs.core.empty(structure),structure);
});})(G__16737_16895,G__16738_16896))
;
goog.object.set(G__16737_16895,G__16738_16896,G__16739_16897);
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
var G__16740 = ((typeof structure === 'string')?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(structure),start,end));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__16740) : next_fn.call(null,G__16740));
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

var G__16743_16913 = com.rpl.specter.navs.append_all;
var G__16744_16914 = "null";
var G__16745_16915 = ((function (G__16743_16913,G__16744_16914){
return (function (_,elements){
return elements;
});})(G__16743_16913,G__16744_16914))
;
goog.object.set(G__16743_16913,G__16744_16914,G__16745_16915);

var G__16746_16916 = com.rpl.specter.navs.prepend_all;
var G__16747_16917 = "null";
var G__16748_16918 = ((function (G__16746_16916,G__16747_16917){
return (function (_,elements){
return elements;
});})(G__16746_16916,G__16747_16917))
;
goog.object.set(G__16746_16916,G__16747_16917,G__16748_16918);

var G__16749_16923 = com.rpl.specter.navs.append_one;
var G__16750_16924 = "null";
var G__16751_16925 = ((function (G__16749_16923,G__16750_16924){
return (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
});})(G__16749_16923,G__16750_16924))
;
goog.object.set(G__16749_16923,G__16750_16924,G__16751_16925);

var G__16752_16926 = com.rpl.specter.navs.prepend_one;
var G__16753_16927 = "null";
var G__16754_16928 = ((function (G__16752_16926,G__16753_16927){
return (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
});})(G__16752_16926,G__16753_16927))
;
goog.object.set(G__16752_16926,G__16753_16927,G__16754_16928);

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

var G__16755_16937 = com.rpl.specter.navs.append_all;
var G__16756_16938 = "_";
var G__16757_16939 = ((function (G__16755_16937,G__16756_16938){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,elements);
});})(G__16755_16937,G__16756_16938))
;
goog.object.set(G__16755_16937,G__16756_16938,G__16757_16939);

var G__16758_16940 = com.rpl.specter.navs.prepend_all;
var G__16759_16941 = "_";
var G__16760_16942 = ((function (G__16758_16940,G__16759_16941){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(elements,structure);
});})(G__16758_16940,G__16759_16941))
;
goog.object.set(G__16758_16940,G__16759_16941,G__16760_16942);

var G__16761_16943 = com.rpl.specter.navs.append_one;
var G__16762_16944 = "_";
var G__16763_16945 = ((function (G__16761_16943,G__16762_16944){
return (function (structure,elem){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
});})(G__16761_16943,G__16762_16944))
;
goog.object.set(G__16761_16943,G__16762_16944,G__16763_16945);

var G__16764_16946 = com.rpl.specter.navs.prepend_one;
var G__16765_16947 = "_";
var G__16766_16948 = ((function (G__16764_16946,G__16765_16947){
return (function (structure,elem){
return cljs.core.cons(elem,structure);
});})(G__16764_16946,G__16765_16947))
;
goog.object.set(G__16764_16946,G__16765_16947,G__16766_16948);

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
var G__16767 = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(structure) : getter.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__16767) : next_fn.call(null,G__16767));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs16768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs16768 = (function (getter,updater,meta16769){
this.getter = getter;
this.updater = updater;
this.meta16769 = meta16769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs16768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16770,meta16769__$1){
var self__ = this;
var _16770__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16768(self__.getter,self__.updater,meta16769__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs16768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16770){
var self__ = this;
var _16770__$1 = this;
return self__.meta16769;
});

com.rpl.specter.navs.t_com$rpl$specter$navs16768.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs16768.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return next_fn((self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(structure) : self__.getter.call(null,structure)));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs16768.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (self__.updater.cljs$core$IFn$_invoke$arity$2 ? self__.updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : self__.updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs16768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta16769","meta16769",-1198915986,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs16768.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs16768.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs16768";

com.rpl.specter.navs.t_com$rpl$specter$navs16768.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs16768");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs16768.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs16768 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs16768(getter__$1,updater__$1,meta16769){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16768(getter__$1,updater__$1,meta16769));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs16768(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = (function (){var G__16771 = cljs.core.first(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__16771) : afn.call(null,G__16771));
})();
var restl = cljs.core.rest(l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons(newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = (function (){var G__16772 = cljs.core.last(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__16772) : afn.call(null,G__16772));
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
var G__16773 = c;
switch (G__16773) {
case (1):
var vec__16774 = v__$1;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16774,(0),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e) : afn.call(null,e));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__16777 = v__$1;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(1),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e2) : afn.call(null,e2));
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = (function (){var G__16780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__16780) : afn.call(null,G__16780));
})();
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop(v__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,newe);
}

}
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"string",true);

var G__16781_16959 = com.rpl.specter.navs.update_first;
var G__16782_16960 = "string";
var G__16783_16961 = ((function (G__16781_16959,G__16782_16960){
return (function (s,afn){
var rests = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s));
var newb = (function (){var G__16784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__16784) : afn.call(null,G__16784));
})();
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rests)].join('');
}
});})(G__16781_16959,G__16782_16960))
;
goog.object.set(G__16781_16959,G__16782_16960,G__16783_16961);

var G__16785_16962 = com.rpl.specter.navs.update_last;
var G__16786_16963 = "string";
var G__16787_16964 = ((function (G__16785_16962,G__16786_16963){
return (function (s,afn){
var last_idx = (cljs.core.count(s) - (1));
var newl = (function (){var G__16788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,last_idx);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__16788) : afn.call(null,G__16788));
})();
var begins = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(begins),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
});})(G__16785_16962,G__16786_16963))
;
goog.object.set(G__16785_16962,G__16786_16963,G__16787_16964);

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry((function (){var G__16789 = cljs.core.key(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__16789) : afn.call(null,G__16789));
})(),cljs.core.val(e__$1),null);
});

cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry(cljs.core.key(e__$1),(function (){var G__16790 = cljs.core.val(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__16790) : afn.call(null,G__16790));
})(),null);
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"_",true);

var G__16791_16966 = com.rpl.specter.navs.update_first;
var G__16792_16967 = "_";
var G__16793_16968 = ((function (G__16791_16966,G__16792_16967){
return (function (l,val){
return com.rpl.specter.navs.update_first_list(l,val);
});})(G__16791_16966,G__16792_16967))
;
goog.object.set(G__16791_16966,G__16792_16967,G__16793_16968);

var G__16794_16969 = com.rpl.specter.navs.update_last;
var G__16795_16970 = "_";
var G__16796_16971 = ((function (G__16794_16969,G__16795_16970){
return (function (l,val){
return com.rpl.specter.navs.update_last_list(l,val);
});})(G__16794_16969,G__16795_16970))
;
goog.object.set(G__16794_16969,G__16795_16970,G__16796_16971);
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

var G__16797_16972 = com.rpl.specter.navs.get_first;
var G__16798_16973 = "_";
var G__16799_16974 = ((function (G__16797_16972,G__16798_16973){
return (function (s){
return cljs.core.first(s);
});})(G__16797_16972,G__16798_16973))
;
goog.object.set(G__16797_16972,G__16798_16973,G__16799_16974);

var G__16800_16978 = com.rpl.specter.navs.get_last;
var G__16801_16979 = "_";
var G__16802_16980 = ((function (G__16800_16978,G__16801_16979){
return (function (s){
return cljs.core.last(s);
});})(G__16800_16978,G__16801_16979))
;
goog.object.set(G__16800_16978,G__16801_16979,G__16802_16980);

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

var G__16803_16981 = com.rpl.specter.navs.get_first;
var G__16804_16982 = "string";
var G__16805_16983 = ((function (G__16803_16981,G__16804_16982){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
});})(G__16803_16981,G__16804_16982))
;
goog.object.set(G__16803_16981,G__16804_16982,G__16805_16983);

var G__16806_16984 = com.rpl.specter.navs.get_last;
var G__16807_16985 = "string";
var G__16808_16986 = ((function (G__16806_16984,G__16807_16985){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
});})(G__16806_16984,G__16807_16985))
;
goog.object.set(G__16806_16984,G__16807_16985,G__16808_16986);
goog.object.set(com.rpl.specter.navs.FastEmpty,"null",true);

var G__16809_16987 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__16810_16988 = "null";
var G__16811_16989 = ((function (G__16809_16987,G__16810_16988){
return (function (_){
return true;
});})(G__16809_16987,G__16810_16988))
;
goog.object.set(G__16809_16987,G__16810_16988,G__16811_16989);

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

var G__16812_16990 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__16813_16991 = "_";
var G__16814_16992 = ((function (G__16812_16990,G__16813_16991){
return (function (s){
return cljs.core.empty_QMARK_(s);
});})(G__16812_16990,G__16813_16991))
;
goog.object.set(G__16812_16990,G__16813_16991,G__16814_16992);
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = (function (){var G__16815 = vals;
var G__16816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__16815,G__16816) : next_fn.call(null,G__16815,G__16816));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs16817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs16817 = (function (key,meta16818){
this.key = key;
this.meta16818 = meta16818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs16817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16819,meta16818__$1){
var self__ = this;
var _16819__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16817(self__.key,meta16818__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs16817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16819){
var self__ = this;
var _16819__$1 = this;
return self__.meta16818;
});

com.rpl.specter.navs.t_com$rpl$specter$navs16817.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs16817.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__16820 = vals;
var G__16821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__16820,G__16821) : next_fn.call(null,G__16820,G__16821));
});

com.rpl.specter.navs.t_com$rpl$specter$navs16817.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.key,next_fn);
});

com.rpl.specter.navs.t_com$rpl$specter$navs16817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta16818","meta16818",1423799394,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs16817.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs16817.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs16817";

com.rpl.specter.navs.t_com$rpl$specter$navs16817.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs16817");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs16817.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs16817 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs16817(key__$1,meta16818){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16817(key__$1,meta16818));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs16817(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (k){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs16822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs16822 = (function (k,meta16823){
this.k = k;
this.meta16823 = meta16823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs16822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16824,meta16823__$1){
var self__ = this;
var _16824__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16822(self__.k,meta16823__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs16822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16824){
var self__ = this;
var _16824__$1 = this;
return self__.meta16823;
});

com.rpl.specter.navs.t_com$rpl$specter$navs16822.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs16822.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
var G__16825 = vals;
var G__16826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.k);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__16825,G__16826) : next_fn.call(null,G__16825,G__16826));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs16822.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.k,next_fn);
} else {
return structure;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs16822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta16823","meta16823",-805982157,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs16822.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs16822.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs16822";

com.rpl.specter.navs.t_com$rpl$specter$navs16822.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs16822");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs16822.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs16822 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs16822(k__$1,meta16823){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16822(k__$1,meta16823));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs16822(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs16827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs16827 = (function (i,meta16828){
this.i = i;
this.meta16828 = meta16828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs16827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16829,meta16828__$1){
var self__ = this;
var _16829__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16827(self__.i,meta16828__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs16827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16829){
var self__ = this;
var _16829__$1 = this;
return self__.meta16828;
});

com.rpl.specter.navs.t_com$rpl$specter$navs16827.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs16827.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__16830 = vals;
var G__16831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__16830,G__16831) : next_fn.call(null,G__16830,G__16831));
});

com.rpl.specter.navs.t_com$rpl$specter$navs16827.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(structure)){
var newv = (function (){var G__16832 = vals;
var G__16833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__16832,G__16833) : next_fn.call(null,G__16832,G__16833));
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
return (function (p__16834){
var vec__16835 = p__16834;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16835,(0),null);
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

com.rpl.specter.navs.t_com$rpl$specter$navs16827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta16828","meta16828",1845338344,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs16827.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs16827.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs16827";

com.rpl.specter.navs.t_com$rpl$specter$navs16827.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs16827");
});

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs16827.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs16827 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs16827(i__$1,meta16828){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs16827(i__$1,meta16828));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs16827(i,null));
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

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k16839,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__16843 = k16839;
var G__16843__$1 = (((G__16843 instanceof cljs.core.Keyword))?G__16843.fqn:null);
switch (G__16843__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16839,else__4304__auto__);

}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__16844){
var vec__16845 = p__16844;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16845,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16845,(1),null);
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

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16838){
var self__ = this;
var G__16838__$1 = this;
return (new cljs.core.RecordIter((0),G__16838__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__16848 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__16848(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16840,other16841){
var self__ = this;
var this16840__$1 = this;
return (((!((other16841 == null)))) && ((this16840__$1.constructor === other16841.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16840__$1.end_fn,other16841.end_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16840__$1.__extmap,other16841.__extmap)));
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

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__16838){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__16849 = cljs.core.keyword_identical_QMARK_;
var expr__16850 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__16852 = new cljs.core.Keyword(null,"end-fn","end-fn",54055684);
var G__16853 = expr__16850;
return (pred__16849.cljs$core$IFn$_invoke$arity$2 ? pred__16849.cljs$core$IFn$_invoke$arity$2(G__16852,G__16853) : pred__16849.call(null,G__16852,G__16853));
})())){
return (new com.rpl.specter.navs.SrangeEndFunction(G__16838,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__16838),null));
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn,null))], null),self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__16838){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__16838,self__.__extmap,self__.__hash));
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
com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__16842){
var extmap__4340__auto__ = (function (){var G__16854 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16842,new cljs.core.Keyword(null,"end-fn","end-fn",54055684));
if(cljs.core.record_QMARK_(G__16842)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16854);
} else {
return G__16854;
}
})();
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__16842),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
var fexpr__16855 = new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(end_fn);
return (fexpr__16855.cljs$core$IFn$_invoke$arity$2 ? fexpr__16855.cljs$core$IFn$_invoke$arity$2(structure,start) : fexpr__16855.call(null,structure,start));
} else {
return (end_fn.cljs$core$IFn$_invoke$arity$1 ? end_fn.cljs$core$IFn$_invoke$arity$1(structure) : end_fn.call(null,structure));
}
});

//# sourceMappingURL=com.rpl.specter.navs.js.map
