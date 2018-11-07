goog.provide('linked.core');
goog.require('cljs.core');
goog.require('linked.map');
goog.require('linked.set');
linked.core.map = (function linked$core$map(var_args){
var G__25458 = arguments.length;
switch (G__25458) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___25460 = arguments.length;
var i__4532__auto___25461 = (0);
while(true){
if((i__4532__auto___25461 < len__4531__auto___25460)){
args_arr__4546__auto__.push((arguments[i__4532__auto___25461]));

var G__25463 = (i__4532__auto___25461 + (1));
i__4532__auto___25461 = G__25463;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((0)),(0),null));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4547__auto__);

}
});

linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
});

linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,linked.map.empty_linked_map,keyvals);
});

/** @this {Function} */
linked.core.map.cljs$lang$applyTo = (function (seq25457){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25457));
});

linked.core.map.cljs$lang$maxFixedArity = (0);

linked.core.set = (function linked$core$set(var_args){
var G__25466 = arguments.length;
switch (G__25466) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___25470 = arguments.length;
var i__4532__auto___25471 = (0);
while(true){
if((i__4532__auto___25471 < len__4531__auto___25470)){
args_arr__4546__auto__.push((arguments[i__4532__auto___25471]));

var G__25472 = (i__4532__auto___25471 + (1));
i__4532__auto___25471 = G__25472;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((0)),(0),null));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4547__auto__);

}
});

linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
});

linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,linked.set.empty_linked_set,keys);
});

/** @this {Function} */
linked.core.set.cljs$lang$applyTo = (function (seq25465){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25465));
});

linked.core.set.cljs$lang$maxFixedArity = (0);


//# sourceMappingURL=linked.core.js.map
