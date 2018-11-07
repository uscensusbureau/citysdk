goog.provide('main.core');
goog.require('cljs.core');
main.core.node = (function main$core$node(var_args){
var args__4647__auto__ = [];
var len__4641__auto___14930 = arguments.length;
var i__4642__auto___14931 = (0);
while(true){
if((i__4642__auto___14931 < len__4641__auto___14930)){
args__4647__auto__.push((arguments[i__4642__auto___14931]));

var G__14932 = (i__4642__auto___14931 + (1));
i__4642__auto___14931 = G__14932;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return main.core.node.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

main.core.node.cljs$core$IFn$_invoke$arity$variadic = (function (cli_args){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello world"], 0));
});

main.core.node.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
main.core.node.cljs$lang$applyTo = (function (seq14912){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14912));
});

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hey from node!"], 0));

//# sourceMappingURL=main.core.js.map
