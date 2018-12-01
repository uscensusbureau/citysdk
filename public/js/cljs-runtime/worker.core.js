goog.provide('worker.core');
goog.require('cljs.core');
goog.require('census.core');
self.addEventListener("message",(function (e){
var args = e.data;
return census.core.census(args,((function (args){
return (function (err,json){
if(cljs.core.truth_(err)){
return postMessage(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
} else {
return postMessage(json);
}
});})(args))
);
}));

//# sourceMappingURL=worker.core.js.map
