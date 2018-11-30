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
var G__9037 = arguments.length;
switch (G__9037) {
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
var G__9057 = (value_transform.cljs$core$IFn$_invoke$arity$1 ? value_transform.cljs$core$IFn$_invoke$arity$1(val) : value_transform.call(null,val));
var fexpr__9056 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9056.cljs$core$IFn$_invoke$arity$1 ? fexpr__9056.cljs$core$IFn$_invoke$arity$1(G__9057) : fexpr__9056.call(null,G__9057));
}));
}),(function (err){
return cljs.core.async.impl.dispatch.run((function (){
var G__9059 = (error_transform.cljs$core$IFn$_invoke$arity$1 ? error_transform.cljs$core$IFn$_invoke$arity$1(err) : error_transform.call(null,err));
var fexpr__9058 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9058.cljs$core$IFn$_invoke$arity$1 ? fexpr__9058.cljs$core$IFn$_invoke$arity$1(G__9059) : fexpr__9058.call(null,G__9059));
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
var G__9039 = arguments.length;
switch (G__9039) {
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
cljs_promises.async.consume_pair = (function cljs_promises$async$consume_pair(p__9040){
var vec__9041 = p__9040;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9041,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9041,(1),null);
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
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async9044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async9044 = (function (promise,meta9045){
this.promise = promise;
this.meta9045 = meta9045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async9044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9046,meta9045__$1){
var self__ = this;
var _9046__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async9044(self__.promise,meta9045__$1));
});

cljs_promises.async.t_cljs_promises$async9044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9046){
var self__ = this;
var _9046__$1 = this;
return self__.meta9045;
});

cljs_promises.async.t_cljs_promises$async9044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async9044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then((function (val){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__9061 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9061.cljs$core$IFn$_invoke$arity$1 ? fexpr__9061.cljs$core$IFn$_invoke$arity$1(val) : fexpr__9061.call(null,val));
}));
}),(function (___$2){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__9064 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9064.cljs$core$IFn$_invoke$arity$1 ? fexpr__9064.cljs$core$IFn$_invoke$arity$1(null) : fexpr__9064.call(null,null));
}));
}));

return null;
});

cljs_promises.async.t_cljs_promises$async9044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta9045","meta9045",194068135,null)], null);
});

cljs_promises.async.t_cljs_promises$async9044.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async9044.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async9044";

cljs_promises.async.t_cljs_promises$async9044.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs-promises.async/t_cljs_promises$async9044");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async9044.
 */
cljs_promises.async.__GT_t_cljs_promises$async9044 = (function cljs_promises$async$value_port_$___GT_t_cljs_promises$async9044(promise__$1,meta9045){
return (new cljs_promises.async.t_cljs_promises$async9044(promise__$1,meta9045));
});

}

return (new cljs_promises.async.t_cljs_promises$async9044(promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * The reverse of `value-port`, passing along errors when `promise` rejects and sending
 *   nils when `promise` fulfills with a value.
 */
cljs_promises.async.error_port = (function cljs_promises$async$error_port(promise){
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async9047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async9047 = (function (promise,meta9048){
this.promise = promise;
this.meta9048 = meta9048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async9047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9049,meta9048__$1){
var self__ = this;
var _9049__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async9047(self__.promise,meta9048__$1));
});

cljs_promises.async.t_cljs_promises$async9047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9049){
var self__ = this;
var _9049__$1 = this;
return self__.meta9048;
});

cljs_promises.async.t_cljs_promises$async9047.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async9047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then((function (___$2){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__9072 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9072.cljs$core$IFn$_invoke$arity$1 ? fexpr__9072.cljs$core$IFn$_invoke$arity$1(null) : fexpr__9072.call(null,null));
}));
}),(function (err){
return cljs.core.async.impl.dispatch.run((function (){
var fexpr__9076 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9076.cljs$core$IFn$_invoke$arity$1 ? fexpr__9076.cljs$core$IFn$_invoke$arity$1(err) : fexpr__9076.call(null,err));
}));
}));

return null;
});

cljs_promises.async.t_cljs_promises$async9047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta9048","meta9048",140987042,null)], null);
});

cljs_promises.async.t_cljs_promises$async9047.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async9047.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async9047";

cljs_promises.async.t_cljs_promises$async9047.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs-promises.async/t_cljs_promises$async9047");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async9047.
 */
cljs_promises.async.__GT_t_cljs_promises$async9047 = (function cljs_promises$async$error_port_$___GT_t_cljs_promises$async9047(promise__$1,meta9048){
return (new cljs_promises.async.t_cljs_promises$async9047(promise__$1,meta9048));
});

}

return (new cljs_promises.async.t_cljs_promises$async9047(promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a ReadPort which sends [value nil] when `promise` fulfills, and [nil error]
 *   when `promise` rejects.
 */
cljs_promises.async.pair_port = (function cljs_promises$async$pair_port(promise){
if((typeof cljs_promises !== 'undefined') && (typeof cljs_promises.async !== 'undefined') && (typeof cljs_promises.async.t_cljs_promises$async9050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs_promises.async.t_cljs_promises$async9050 = (function (promise,meta9051){
this.promise = promise;
this.meta9051 = meta9051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_promises.async.t_cljs_promises$async9050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9052,meta9051__$1){
var self__ = this;
var _9052__$1 = this;
return (new cljs_promises.async.t_cljs_promises$async9050(self__.promise,meta9051__$1));
});

cljs_promises.async.t_cljs_promises$async9050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9052){
var self__ = this;
var _9052__$1 = this;
return self__.meta9051;
});

cljs_promises.async.t_cljs_promises$async9050.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_promises.async.t_cljs_promises$async9050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then((function (val){
return cljs.core.async.impl.dispatch.run((function (){
var G__9081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,null], null);
var fexpr__9080 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9080.cljs$core$IFn$_invoke$arity$1 ? fexpr__9080.cljs$core$IFn$_invoke$arity$1(G__9081) : fexpr__9080.call(null,G__9081));
}));
}),(function (err){
return cljs.core.async.impl.dispatch.run((function (){
var G__9086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,err], null);
var fexpr__9085 = cljs.core.async.impl.protocols.commit(handler);
return (fexpr__9085.cljs$core$IFn$_invoke$arity$1 ? fexpr__9085.cljs$core$IFn$_invoke$arity$1(G__9086) : fexpr__9085.call(null,G__9086));
}));
}));

return null;
});

cljs_promises.async.t_cljs_promises$async9050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta9051","meta9051",-164363719,null)], null);
});

cljs_promises.async.t_cljs_promises$async9050.cljs$lang$type = true;

cljs_promises.async.t_cljs_promises$async9050.cljs$lang$ctorStr = "cljs-promises.async/t_cljs_promises$async9050";

cljs_promises.async.t_cljs_promises$async9050.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs-promises.async/t_cljs_promises$async9050");
});

/**
 * Positional factory function for cljs-promises.async/t_cljs_promises$async9050.
 */
cljs_promises.async.__GT_t_cljs_promises$async9050 = (function cljs_promises$async$pair_port_$___GT_t_cljs_promises$async9050(promise__$1,meta9051){
return (new cljs_promises.async.t_cljs_promises$async9050(promise__$1,meta9051));
});

}

return (new cljs_promises.async.t_cljs_promises$async9050(promise,cljs.core.PersistentArrayMap.EMPTY));
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
