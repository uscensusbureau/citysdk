goog.provide('cljs_promises.core');
goog.require('cljs.core');
cljs_promises.core.cast_as_array = (function cljs_promises$core$cast_as_array(coll){
if(((cljs.core.array_QMARK_(coll)) || ((!(cljs.core.reduceable_QMARK_(coll)))))){
return coll;
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(coll);
}
});
cljs_promises.core.promise = (function cljs_promises$core$promise(resolver){
return (new Promise(resolver));
});
cljs_promises.core.resolve = (function cljs_promises$core$resolve(x){
return Promise.resolve(x);
});
cljs_promises.core.reject = (function cljs_promises$core$reject(x){
return Promise.reject(x);
});
cljs_promises.core.all = (function cljs_promises$core$all(coll){
return Promise.all(cljs_promises.core.cast_as_array(coll));
});
cljs_promises.core.race = (function cljs_promises$core$race(coll){
return Promise.race(cljs_promises.core.cast_as_array(coll));
});
cljs_promises.core.then = (function cljs_promises$core$then(var_args){
var G__23019 = arguments.length;
switch (G__23019) {
case 2:
return cljs_promises.core.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_promises.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_promises.core.then.cljs$core$IFn$_invoke$arity$2 = (function (promise,on_fulfilled){
return promise.then(on_fulfilled);
});

cljs_promises.core.then.cljs$core$IFn$_invoke$arity$3 = (function (promise,on_fulfilled,on_rejected){
return promise.then(on_fulfilled,on_rejected);
});

cljs_promises.core.then.cljs$lang$maxFixedArity = 3;

cljs_promises.core.catch$ = (function cljs_promises$core$catch(promise,on_rejected){
return promise.catch(on_rejected);
});
cljs_promises.core.timeout = (function cljs_promises$core$timeout(ms){
return cljs_promises.core.promise((function (resolve,_){
return setTimeout(resolve,ms);
}));
});

//# sourceMappingURL=cljs_promises.core.js.map
