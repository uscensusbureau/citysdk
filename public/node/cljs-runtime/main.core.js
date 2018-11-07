goog.provide('main.core');
goog.require('cljs.core');
main.core.node = (function main$core$node(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25484 = arguments.length;
var i__4532__auto___25485 = (0);
while(true){
if((i__4532__auto___25485 < len__4531__auto___25484)){
args__4534__auto__.push((arguments[i__4532__auto___25485]));

var G__25486 = (i__4532__auto___25485 + (1));
i__4532__auto___25485 = G__25486;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return main.core.node.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

main.core.node.cljs$core$IFn$_invoke$arity$variadic = (function (cli_args){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello world"], 0));
});

main.core.node.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
main.core.node.cljs$lang$applyTo = (function (seq25483){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25483));
});

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hey from node!"], 0));

//# sourceMappingURL=main.core.js.map
