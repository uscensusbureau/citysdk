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
var G__23033 = arguments.length;
switch (G__23033) {
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
promise__$1.then((function (val){
return cljs.core.async.impl.dispatch.run((function (){
var G__23075 = (value_transform.cljs$core$IFn$_invoke$arity$1 ? value_transform.cljs$core$IFn$_invoke$arity$1(val) : value_transform.call(null,val));
var fexpr__23074 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23074.cljs$core$IFn$_invoke$arity$1 ? fexpr__23074.cljs$core$IFn$_invoke$arity$1(G__23075) : fexpr__23074.call(null,G__23075));
}));
}),(function (err){
return cljs.core.async.impl.dispatch.run((function (){
var G__23079 = (error_transform.cljs$core$IFn$_invoke$arity$1 ? error_transform.cljs$core$IFn$_invoke$arity$1(err) : error_transform.call(null,err));
var fexpr__23078 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23078.cljs$core$IFn$_invoke$arity$1 ? fexpr__23078.cljs$core$IFn$_invoke$arity$1(G__23079) : fexpr__23078.call(null,G__23079));
}));
}));

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
var G__23053 = arguments.length;
switch (G__23053) {
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
cljs_promises.async.consume_pair = (function cljs_promises$async$consume_pair(p__23054){
var vec__23055 = p__23054;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23055,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23055,(1),null);
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
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async23058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async23058 = (function (promise,meta23059){
this.promise = promise;
this.meta23059 = meta23059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async23058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23060,meta23059__$1){
var self__ = this;
var _23060__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async23058(self__.promise,meta23059__$1));
});

cljs_promises.async.t_cljs_promises$async23058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23060){
var self__ = this;
var _23060__$1 = this;
return self__.meta23059;
});

cljs_promises.async.t_cljs_promises$async23058.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async23058.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then((function (val){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__23083 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23083.cljs$core$IFn$_invoke$arity$1 ? fexpr__23083.cljs$core$IFn$_invoke$arity$1(val) : fexpr__23083.call(null,val));
}));
}),(function (___$2){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__23086 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23086.cljs$core$IFn$_invoke$arity$1 ? fexpr__23086.cljs$core$IFn$_invoke$arity$1(null) : fexpr__23086.call(null,null));
}));
}));

return null;
});

cljs_promises.async.t_cljs_promises$async23058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta23059","meta23059",-503575839,null)], null);
});

cljs_promises.async.t_cljs_promises$async23058.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async23058.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async23058";

cljs_promises.async.t_cljs_promises$async23058.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs-promises.async/t_cljs_promises$async23058");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async23058.
 */
cljs_promises.async.__GT_t_cljs_promises$async23058 = (function cljs_promises$async$value_port_$___GT_t_cljs_promises$async23058(promise__$1,meta23059){
return (new cljs_promises.async.t_cljs_promises$async23058(promise__$1,meta23059));
});

}

return (new cljs_promises.async.t_cljs_promises$async23058(promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * The reverse of `value-port`, passing along errors when `promise` rejects and sending
 *   nils when `promise` fulfills with a value.
 */
cljs_promises.async.error_port = (function cljs_promises$async$error_port(promise){
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async23061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async23061 = (function (promise,meta23062){
this.promise = promise;
this.meta23062 = meta23062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async23061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23063,meta23062__$1){
var self__ = this;
var _23063__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async23061(self__.promise,meta23062__$1));
});

cljs_promises.async.t_cljs_promises$async23061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23063){
var self__ = this;
var _23063__$1 = this;
return self__.meta23062;
});

cljs_promises.async.t_cljs_promises$async23061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async23061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then((function (___$2){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__23088 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23088.cljs$core$IFn$_invoke$arity$1 ? fexpr__23088.cljs$core$IFn$_invoke$arity$1(null) : fexpr__23088.call(null,null));
}));
}),(function (err){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__23090 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23090.cljs$core$IFn$_invoke$arity$1 ? fexpr__23090.cljs$core$IFn$_invoke$arity$1(err) : fexpr__23090.call(null,err));
}));
}));

return null;
});

cljs_promises.async.t_cljs_promises$async23061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta23062","meta23062",-1373341993,null)], null);
});

cljs_promises.async.t_cljs_promises$async23061.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async23061.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async23061";

cljs_promises.async.t_cljs_promises$async23061.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs-promises.async/t_cljs_promises$async23061");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async23061.
 */
cljs_promises.async.__GT_t_cljs_promises$async23061 = (function cljs_promises$async$error_port_$___GT_t_cljs_promises$async23061(promise__$1,meta23062){
return (new cljs_promises.async.t_cljs_promises$async23061(promise__$1,meta23062));
});

}

return (new cljs_promises.async.t_cljs_promises$async23061(promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a ReadPort which sends [value nil] when `promise` fulfills, and [nil error]
 *   when `promise` rejects.
 */
cljs_promises.async.pair_port = (function cljs_promises$async$pair_port(promise){
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async23066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async23066 = (function (promise,meta23067){
this.promise = promise;
this.meta23067 = meta23067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async23066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23068,meta23067__$1){
var self__ = this;
var _23068__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async23066(self__.promise,meta23067__$1));
});

cljs_promises.async.t_cljs_promises$async23066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23068){
var self__ = this;
var _23068__$1 = this;
return self__.meta23067;
});

cljs_promises.async.t_cljs_promises$async23066.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async23066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then((function (val){
return cljs.core.async.impl.dispatch.run((function (){
var G__23094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,null], null);
var fexpr__23093 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23093.cljs$core$IFn$_invoke$arity$1 ? fexpr__23093.cljs$core$IFn$_invoke$arity$1(G__23094) : fexpr__23093.call(null,G__23094));
}));
}),(function (err){
return cljs.core.async.impl.dispatch.run((function (){
var G__23096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,err], null);
var fexpr__23095 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__23095.cljs$core$IFn$_invoke$arity$1 ? fexpr__23095.cljs$core$IFn$_invoke$arity$1(G__23096) : fexpr__23095.call(null,G__23096));
}));
}));

return null;
});

cljs_promises.async.t_cljs_promises$async23066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta23067","meta23067",-1852785051,null)], null);
});

cljs_promises.async.t_cljs_promises$async23066.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async23066.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async23066";

cljs_promises.async.t_cljs_promises$async23066.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs-promises.async/t_cljs_promises$async23066");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async23066.
 */
cljs_promises.async.__GT_t_cljs_promises$async23066 = (function cljs_promises$async$pair_port_$___GT_t_cljs_promises$async23066(promise__$1,meta23067){
return (new cljs_promises.async.t_cljs_promises$async23066(promise__$1,meta23067));
});

}

return (new cljs_promises.async.t_cljs_promises$async23066(promise,cljs.core.PersistentArrayMap.EMPTY));
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
