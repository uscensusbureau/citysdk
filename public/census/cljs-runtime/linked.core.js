goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(var_args){
var G__12205 = arguments.length;
switch (G__12205) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___12210 = arguments.length;
var i__4642__auto___12211 = (0);
while(true){
if((i__4642__auto___12211 < len__4641__auto___12210)){
args_arr__4662__auto__.push((arguments[i__4642__auto___12211]));

var G__12212 = (i__4642__auto___12211 + (1));
i__4642__auto___12211 = G__12212;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((0)),(0),null));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4663__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

/** @this {Function} */
linked.core.map.cljs$lang$applyTo = (function (seq12204){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12204));
});

linked.core.map.cljs$lang$maxFixedArity = (0);

linked.core.set = (function linked$core$set(var_args){
var G__12208 = arguments.length;
switch (G__12208) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___12214 = arguments.length;
var i__4642__auto___12215 = (0);
while(true){
if((i__4642__auto___12215 < len__4641__auto___12214)){
args_arr__4662__auto__.push((arguments[i__4642__auto___12215]));

var G__12216 = (i__4642__auto___12215 + (1));
i__4642__auto___12215 = G__12216;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((0)),(0),null));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4663__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,linked.set.empty_linked_set,keys);
});

/** @this {Function} */
linked.core.set.cljs$lang$applyTo = (function (seq12207){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12207));
});

linked.core.set.cljs$lang$maxFixedArity = (0);


//# sourceMappingURL=linked.core.js.map
