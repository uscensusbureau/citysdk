goog.provide('cljs_promises.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs_promises.core');
/**
 * If you want, you can globally extend Promise to act as a one-way channel which
 *   can only be taken from, and which starts producing a never-ending stream of constants
 *   once the promise resolves. `value-transform` and `error-transform` are functions
 *   which are applied to the value or error when the Promise resolves or rejects.
 *   Both `value-transform` and `error-transform` default to identity. Takes an optional
 *   `promise-constructor` to extend, defaulting to `js/Promise`.
 */
cljs_promises.async.extend_promises_as_channels_BANG_ = (function cljs_promises$async$extend_promises_as_channels_BANG_(var_args){
var G__16593 = arguments.length;
switch (G__16593) {
case 0:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value_transform){
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$2(value_transform,cljs.core.identity);
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value_transform,error_transform){
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$3(value_transform,error_transform,Promise);
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (value_transform,error_transform,promise_constructor){
promise_constructor.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

promise_constructor.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (promise,handler){
var promise__$1 = this;
promise__$1.then(((function (promise__$1){
return (function (val){
return cljs.core.async.impl.dispatch.run(((function (promise__$1){
return (function (){
var G__16600 = (value_transform.cljs$core$IFn$_invoke$arity$1 ? value_transform.cljs$core$IFn$_invoke$arity$1(val) : value_transform.call(null,val));
var fexpr__16599 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16599.cljs$core$IFn$_invoke$arity$1 ? fexpr__16599.cljs$core$IFn$_invoke$arity$1(G__16600) : fexpr__16599.call(null,G__16600));
});})(promise__$1))
);
});})(promise__$1))
,((function (promise__$1){
return (function (err){
return cljs.core.async.impl.dispatch.run(((function (promise__$1){
return (function (){
var G__16602 = (error_transform.cljs$core$IFn$_invoke$arity$1 ? error_transform.cljs$core$IFn$_invoke$arity$1(err) : error_transform.call(null,err));
var fexpr__16601 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16601.cljs$core$IFn$_invoke$arity$1 ? fexpr__16601.cljs$core$IFn$_invoke$arity$1(G__16602) : fexpr__16601.call(null,G__16602));
});})(promise__$1))
);
});})(promise__$1))
);

return null;
});

promise_constructor.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

return promise_constructor.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var ___$1 = this;
return null;
});
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Globally extends Promises with `extend-promises-as-channels!` such that the
 *   values taken from them are vector pairs of [value nil] in the case of fulfillment,
 *   or [nil error] in the case of rejection. Takes an optional `promise-constructor`
 *   to extend, defaulting to `js/Promise`.
 */
cljs_promises.async.extend_promises_as_pair_channels_BANG_ = (function cljs_promises$async$extend_promises_as_pair_channels_BANG_(var_args){
var G__16609 = arguments.length;
switch (G__16609) {
case 0:
return cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$1(Promise);
});

cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (promise_constructor){
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$3((function (val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,null], null);
}),(function (err){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,err], null);
}),promise_constructor);
});

cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * When passed a [value nil] pair, returns value. When passed a [nil error] pair,
 *   throws error. See also `cljs-promises.async/<?`.
 */
cljs_promises.async.consume_pair = (function cljs_promises$async$consume_pair(p__16611){
var vec__16612 = p__16611;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(1),null);
if(cljs.core.truth_(err)){
throw err;
} else {
return val;
}
});
/**
 * Wraps a promise and returns a ReadPort (a read-only channel-like). When the
 *   promise fulfills with a value, that value is sent constantly on the channel
 *   (the value might be nil). When the promise rejects with an error, nil is sent
 *   constantly.
 */
cljs_promises.async.value_port = (function cljs_promises$async$value_port(promise){
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async16632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async16632 = (function (promise,meta16633){
this.promise = promise;
this.meta16633 = meta16633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async16632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16634,meta16633__$1){
var self__ = this;
var _16634__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async16632(self__.promise,meta16633__$1));
});

cljs_promises.async.t_cljs_promises$async16632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16634){
var self__ = this;
var _16634__$1 = this;
return self__.meta16633;
});

cljs_promises.async.t_cljs_promises$async16632.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async16632.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then(((function (___$1){
return (function (val){
return cljs.core.async.impl.dispatch.run(((function (___$1){
return (function (){
var fexpr__16640 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16640.cljs$core$IFn$_invoke$arity$1 ? fexpr__16640.cljs$core$IFn$_invoke$arity$1(val) : fexpr__16640.call(null,val));
});})(___$1))
);
});})(___$1))
,((function (___$1){
return (function (___$2){
return cljs.core.async.impl.dispatch.run(((function (___$1){
return (function (){
var fexpr__16641 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16641.cljs$core$IFn$_invoke$arity$1 ? fexpr__16641.cljs$core$IFn$_invoke$arity$1(null) : fexpr__16641.call(null,null));
});})(___$1))
);
});})(___$1))
);

return null;
});

cljs_promises.async.t_cljs_promises$async16632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta16633","meta16633",-426952115,null)], null);
});

cljs_promises.async.t_cljs_promises$async16632.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async16632.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async16632";

cljs_promises.async.t_cljs_promises$async16632.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs-promises.async/t_cljs_promises$async16632");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async16632.
 */
cljs_promises.async.__GT_t_cljs_promises$async16632 = (function cljs_promises$async$value_port_$___GT_t_cljs_promises$async16632(promise__$1,meta16633){
return (new cljs_promises.async.t_cljs_promises$async16632(promise__$1,meta16633));
});

}

return (new cljs_promises.async.t_cljs_promises$async16632(promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * The reverse of `value-port`, passing along errors when `promise` rejects and sending
 *   nils when `promise` fulfills with a value.
 */
cljs_promises.async.error_port = (function cljs_promises$async$error_port(promise){
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async16675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async16675 = (function (promise,meta16676){
this.promise = promise;
this.meta16676 = meta16676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async16675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16677,meta16676__$1){
var self__ = this;
var _16677__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async16675(self__.promise,meta16676__$1));
});

cljs_promises.async.t_cljs_promises$async16675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16677){
var self__ = this;
var _16677__$1 = this;
return self__.meta16676;
});

cljs_promises.async.t_cljs_promises$async16675.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async16675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then(((function (___$1){
return (function (___$2){
return cljs.core.async.impl.dispatch.run(((function (___$1){
return (function (){
var fexpr__16678 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16678.cljs$core$IFn$_invoke$arity$1 ? fexpr__16678.cljs$core$IFn$_invoke$arity$1(null) : fexpr__16678.call(null,null));
});})(___$1))
);
});})(___$1))
,((function (___$1){
return (function (err){
return cljs.core.async.impl.dispatch.run(((function (___$1){
return (function (){
var fexpr__16679 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16679.cljs$core$IFn$_invoke$arity$1 ? fexpr__16679.cljs$core$IFn$_invoke$arity$1(err) : fexpr__16679.call(null,err));
});})(___$1))
);
});})(___$1))
);

return null;
});

cljs_promises.async.t_cljs_promises$async16675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta16676","meta16676",1487022687,null)], null);
});

cljs_promises.async.t_cljs_promises$async16675.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async16675.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async16675";

cljs_promises.async.t_cljs_promises$async16675.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs-promises.async/t_cljs_promises$async16675");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async16675.
 */
cljs_promises.async.__GT_t_cljs_promises$async16675 = (function cljs_promises$async$error_port_$___GT_t_cljs_promises$async16675(promise__$1,meta16676){
return (new cljs_promises.async.t_cljs_promises$async16675(promise__$1,meta16676));
});

}

return (new cljs_promises.async.t_cljs_promises$async16675(promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a ReadPort which sends [value nil] when `promise` fulfills, and [nil error]
 *   when `promise` rejects.
 */
cljs_promises.async.pair_port = (function cljs_promises$async$pair_port(promise){
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async16686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async16686 = (function (promise,meta16687){
this.promise = promise;
this.meta16687 = meta16687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async16686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16688,meta16687__$1){
var self__ = this;
var _16688__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async16686(self__.promise,meta16687__$1));
});

cljs_promises.async.t_cljs_promises$async16686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16688){
var self__ = this;
var _16688__$1 = this;
return self__.meta16687;
});

cljs_promises.async.t_cljs_promises$async16686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async16686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then(((function (___$1){
return (function (val){
return cljs.core.async.impl.dispatch.run(((function (___$1){
return (function (){
var G__16691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,null], null);
var fexpr__16690 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16690.cljs$core$IFn$_invoke$arity$1 ? fexpr__16690.cljs$core$IFn$_invoke$arity$1(G__16691) : fexpr__16690.call(null,G__16691));
});})(___$1))
);
});})(___$1))
,((function (___$1){
return (function (err){
return cljs.core.async.impl.dispatch.run(((function (___$1){
return (function (){
var G__16709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,err], null);
var fexpr__16708 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__16708.cljs$core$IFn$_invoke$arity$1 ? fexpr__16708.cljs$core$IFn$_invoke$arity$1(G__16709) : fexpr__16708.call(null,G__16709));
});})(___$1))
);
});})(___$1))
);

return null;
});

cljs_promises.async.t_cljs_promises$async16686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta16687","meta16687",-1836861800,null)], null);
});

cljs_promises.async.t_cljs_promises$async16686.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async16686.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async16686";

cljs_promises.async.t_cljs_promises$async16686.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs-promises.async/t_cljs_promises$async16686");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async16686.
 */
cljs_promises.async.__GT_t_cljs_promises$async16686 = (function cljs_promises$async$pair_port_$___GT_t_cljs_promises$async16686(promise__$1,meta16687){
return (new cljs_promises.async.t_cljs_promises$async16686(promise__$1,meta16687));
});

}

return (new cljs_promises.async.t_cljs_promises$async16686(promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Waits for the next value from `ch` and returns a promise of that value.
 */
cljs_promises.async.take_as_promise_BANG_ = (function cljs_promises$async$take_as_promise_BANG_(ch){
return cljs_promises.core.promise((function (resolve,_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(ch,resolve);
}));
});

//# sourceMappingURL=cljs_promises.async.js.map
