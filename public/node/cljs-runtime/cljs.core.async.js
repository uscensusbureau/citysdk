goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13566 = arguments.length;
switch (G__13566) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13567 = (function (f,blockable,meta13568){
this.f = f;
this.blockable = blockable;
this.meta13568 = meta13568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13569,meta13568__$1){
var self__ = this;
var _13569__$1 = this;
return (new cljs.core.async.t_cljs$core$async13567(self__.f,self__.blockable,meta13568__$1));
});

cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13569){
var self__ = this;
var _13569__$1 = this;
return self__.meta13568;
});

cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13568","meta13568",1731541302,null)], null);
});

cljs.core.async.t_cljs$core$async13567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13567";

cljs.core.async.t_cljs$core$async13567.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13567");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13567.
 */
cljs.core.async.__GT_t_cljs$core$async13567 = (function cljs$core$async$__GT_t_cljs$core$async13567(f__$1,blockable__$1,meta13568){
return (new cljs.core.async.t_cljs$core$async13567(f__$1,blockable__$1,meta13568));
});

}

return (new cljs.core.async.t_cljs$core$async13567(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13582 = arguments.length;
switch (G__13582) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13589 = arguments.length;
switch (G__13589) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13592 = arguments.length;
switch (G__13592) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13599 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13599) : fn1.call(null,val_13599));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13599,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13599) : fn1.call(null,val_13599));
});})(val_13599,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13613 = arguments.length;
switch (G__13613) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___13649 = n;
var x_13650 = (0);
while(true){
if((x_13650 < n__4408__auto___13649)){
(a[x_13650] = (0));

var G__13651 = (x_13650 + (1));
x_13650 = G__13651;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13653 = (i + (1));
i = G__13653;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13654 = (function (flag,meta13655){
this.flag = flag;
this.meta13655 = meta13655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13656,meta13655__$1){
var self__ = this;
var _13656__$1 = this;
return (new cljs.core.async.t_cljs$core$async13654(self__.flag,meta13655__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13656){
var self__ = this;
var _13656__$1 = this;
return self__.meta13655;
});})(flag))
;

cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13654.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13655","meta13655",-696307088,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13654";

cljs.core.async.t_cljs$core$async13654.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13654");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13654.
 */
cljs.core.async.__GT_t_cljs$core$async13654 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13654(flag__$1,meta13655){
return (new cljs.core.async.t_cljs$core$async13654(flag__$1,meta13655));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13654(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13693 = (function (flag,cb,meta13694){
this.flag = flag;
this.cb = cb;
this.meta13694 = meta13694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13695,meta13694__$1){
var self__ = this;
var _13695__$1 = this;
return (new cljs.core.async.t_cljs$core$async13693(self__.flag,self__.cb,meta13694__$1));
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13695){
var self__ = this;
var _13695__$1 = this;
return self__.meta13694;
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13694","meta13694",197047879,null)], null);
});

cljs.core.async.t_cljs$core$async13693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13693";

cljs.core.async.t_cljs$core$async13693.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13693");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13693.
 */
cljs.core.async.__GT_t_cljs$core$async13693 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13693(flag__$1,cb__$1,meta13694){
return (new cljs.core.async.t_cljs$core$async13693(flag__$1,cb__$1,meta13694));
});

}

return (new cljs.core.async.t_cljs$core$async13693(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13736_SHARP_){
var G__13745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13736_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13745) : fret.call(null,G__13745));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13738_SHARP_){
var G__13747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13738_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13747) : fret.call(null,G__13747));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13754 = (i + (1));
i = G__13754;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13766 = arguments.length;
var i__4532__auto___13767 = (0);
while(true){
if((i__4532__auto___13767 < len__4531__auto___13766)){
args__4534__auto__.push((arguments[i__4532__auto___13767]));

var G__13768 = (i__4532__auto___13767 + (1));
i__4532__auto___13767 = G__13768;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13763){
var map__13764 = p__13763;
var map__13764__$1 = ((((!((map__13764 == null)))?(((((map__13764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13764):map__13764);
var opts = map__13764__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13755){
var G__13756 = cljs.core.first(seq13755);
var seq13755__$1 = cljs.core.next(seq13755);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13756,seq13755__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13774 = arguments.length;
switch (G__13774) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13500__auto___13833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___13833){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___13833){
return (function (state_13809){
var state_val_13810 = (state_13809[(1)]);
if((state_val_13810 === (7))){
var inst_13804 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13811_13837 = state_13809__$1;
(statearr_13811_13837[(2)] = inst_13804);

(statearr_13811_13837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (1))){
var state_13809__$1 = state_13809;
var statearr_13812_13838 = state_13809__$1;
(statearr_13812_13838[(2)] = null);

(statearr_13812_13838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (4))){
var inst_13784 = (state_13809[(7)]);
var inst_13784__$1 = (state_13809[(2)]);
var inst_13785 = (inst_13784__$1 == null);
var state_13809__$1 = (function (){var statearr_13813 = state_13809;
(statearr_13813[(7)] = inst_13784__$1);

return statearr_13813;
})();
if(cljs.core.truth_(inst_13785)){
var statearr_13814_13839 = state_13809__$1;
(statearr_13814_13839[(1)] = (5));

} else {
var statearr_13815_13840 = state_13809__$1;
(statearr_13815_13840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (13))){
var state_13809__$1 = state_13809;
var statearr_13816_13841 = state_13809__$1;
(statearr_13816_13841[(2)] = null);

(statearr_13816_13841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (6))){
var inst_13784 = (state_13809[(7)]);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13809__$1,(11),to,inst_13784);
} else {
if((state_val_13810 === (3))){
var inst_13806 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13809__$1,inst_13806);
} else {
if((state_val_13810 === (12))){
var state_13809__$1 = state_13809;
var statearr_13818_13842 = state_13809__$1;
(statearr_13818_13842[(2)] = null);

(statearr_13818_13842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (2))){
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13809__$1,(4),from);
} else {
if((state_val_13810 === (11))){
var inst_13797 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
if(cljs.core.truth_(inst_13797)){
var statearr_13819_13843 = state_13809__$1;
(statearr_13819_13843[(1)] = (12));

} else {
var statearr_13820_13844 = state_13809__$1;
(statearr_13820_13844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (9))){
var state_13809__$1 = state_13809;
var statearr_13821_13845 = state_13809__$1;
(statearr_13821_13845[(2)] = null);

(statearr_13821_13845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (5))){
var state_13809__$1 = state_13809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13822_13846 = state_13809__$1;
(statearr_13822_13846[(1)] = (8));

} else {
var statearr_13823_13847 = state_13809__$1;
(statearr_13823_13847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (14))){
var inst_13802 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13825_13851 = state_13809__$1;
(statearr_13825_13851[(2)] = inst_13802);

(statearr_13825_13851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (10))){
var inst_13794 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13826_13855 = state_13809__$1;
(statearr_13826_13855[(2)] = inst_13794);

(statearr_13826_13855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (8))){
var inst_13791 = cljs.core.async.close_BANG_(to);
var state_13809__$1 = state_13809;
var statearr_13827_13856 = state_13809__$1;
(statearr_13827_13856[(2)] = inst_13791);

(statearr_13827_13856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___13833))
;
return ((function (switch__13299__auto__,c__13500__auto___13833){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_13828 = [null,null,null,null,null,null,null,null];
(statearr_13828[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_13828[(1)] = (1));

return statearr_13828;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_13809){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_13809);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e13829){if((e13829 instanceof Object)){
var ex__13303__auto__ = e13829;
var statearr_13830_13857 = state_13809;
(statearr_13830_13857[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13858 = state_13809;
state_13809 = G__13858;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_13809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_13809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___13833))
})();
var state__13502__auto__ = (function (){var statearr_13831 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_13831[(6)] = c__13500__auto___13833);

return statearr_13831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___13833))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13865){
var vec__13866 = p__13865;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(1),null);
var job = vec__13866;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13500__auto___14065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___14065,res,vec__13866,v,p,job,jobs,results){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___14065,res,vec__13866,v,p,job,jobs,results){
return (function (state_13873){
var state_val_13874 = (state_13873[(1)]);
if((state_val_13874 === (1))){
var state_13873__$1 = state_13873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13873__$1,(2),res,v);
} else {
if((state_val_13874 === (2))){
var inst_13870 = (state_13873[(2)]);
var inst_13871 = cljs.core.async.close_BANG_(res);
var state_13873__$1 = (function (){var statearr_13875 = state_13873;
(statearr_13875[(7)] = inst_13870);

return statearr_13875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13873__$1,inst_13871);
} else {
return null;
}
}
});})(c__13500__auto___14065,res,vec__13866,v,p,job,jobs,results))
;
return ((function (switch__13299__auto__,c__13500__auto___14065,res,vec__13866,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0 = (function (){
var statearr_13876 = [null,null,null,null,null,null,null,null];
(statearr_13876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__);

(statearr_13876[(1)] = (1));

return statearr_13876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1 = (function (state_13873){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_13873);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e13877){if((e13877 instanceof Object)){
var ex__13303__auto__ = e13877;
var statearr_13878_14066 = state_13873;
(statearr_13878_14066[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14067 = state_13873;
state_13873 = G__14067;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = function(state_13873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1.call(this,state_13873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___14065,res,vec__13866,v,p,job,jobs,results))
})();
var state__13502__auto__ = (function (){var statearr_13879 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_13879[(6)] = c__13500__auto___14065);

return statearr_13879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___14065,res,vec__13866,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13883){
var vec__13884 = p__13883;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13884,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13884,(1),null);
var job = vec__13884;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___14068 = n;
var __14069 = (0);
while(true){
if((__14069 < n__4408__auto___14068)){
var G__13887_14070 = type;
var G__13887_14071__$1 = (((G__13887_14070 instanceof cljs.core.Keyword))?G__13887_14070.fqn:null);
switch (G__13887_14071__$1) {
case "compute":
var c__13500__auto___14073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14069,c__13500__auto___14073,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (__14069,c__13500__auto___14073,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async){
return (function (state_13900){
var state_val_13901 = (state_13900[(1)]);
if((state_val_13901 === (1))){
var state_13900__$1 = state_13900;
var statearr_13902_14074 = state_13900__$1;
(statearr_13902_14074[(2)] = null);

(statearr_13902_14074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (2))){
var state_13900__$1 = state_13900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13900__$1,(4),jobs);
} else {
if((state_val_13901 === (3))){
var inst_13898 = (state_13900[(2)]);
var state_13900__$1 = state_13900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13900__$1,inst_13898);
} else {
if((state_val_13901 === (4))){
var inst_13890 = (state_13900[(2)]);
var inst_13891 = process(inst_13890);
var state_13900__$1 = state_13900;
if(cljs.core.truth_(inst_13891)){
var statearr_13903_14075 = state_13900__$1;
(statearr_13903_14075[(1)] = (5));

} else {
var statearr_13904_14076 = state_13900__$1;
(statearr_13904_14076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (5))){
var state_13900__$1 = state_13900;
var statearr_13905_14077 = state_13900__$1;
(statearr_13905_14077[(2)] = null);

(statearr_13905_14077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (6))){
var state_13900__$1 = state_13900;
var statearr_13906_14078 = state_13900__$1;
(statearr_13906_14078[(2)] = null);

(statearr_13906_14078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (7))){
var inst_13896 = (state_13900[(2)]);
var state_13900__$1 = state_13900;
var statearr_13907_14080 = state_13900__$1;
(statearr_13907_14080[(2)] = inst_13896);

(statearr_13907_14080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14069,c__13500__auto___14073,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async))
;
return ((function (__14069,switch__13299__auto__,c__13500__auto___14073,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0 = (function (){
var statearr_13908 = [null,null,null,null,null,null,null];
(statearr_13908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__);

(statearr_13908[(1)] = (1));

return statearr_13908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1 = (function (state_13900){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_13900);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e13909){if((e13909 instanceof Object)){
var ex__13303__auto__ = e13909;
var statearr_13910_14081 = state_13900;
(statearr_13910_14081[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14082 = state_13900;
state_13900 = G__14082;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = function(state_13900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1.call(this,state_13900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__;
})()
;})(__14069,switch__13299__auto__,c__13500__auto___14073,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async))
})();
var state__13502__auto__ = (function (){var statearr_13914 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_13914[(6)] = c__13500__auto___14073);

return statearr_13914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(__14069,c__13500__auto___14073,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async))
);


break;
case "async":
var c__13500__auto___14083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14069,c__13500__auto___14083,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (__14069,c__13500__auto___14083,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async){
return (function (state_13930){
var state_val_13931 = (state_13930[(1)]);
if((state_val_13931 === (1))){
var state_13930__$1 = state_13930;
var statearr_13932_14084 = state_13930__$1;
(statearr_13932_14084[(2)] = null);

(statearr_13932_14084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (2))){
var state_13930__$1 = state_13930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13930__$1,(4),jobs);
} else {
if((state_val_13931 === (3))){
var inst_13928 = (state_13930[(2)]);
var state_13930__$1 = state_13930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13930__$1,inst_13928);
} else {
if((state_val_13931 === (4))){
var inst_13920 = (state_13930[(2)]);
var inst_13921 = async(inst_13920);
var state_13930__$1 = state_13930;
if(cljs.core.truth_(inst_13921)){
var statearr_13939_14085 = state_13930__$1;
(statearr_13939_14085[(1)] = (5));

} else {
var statearr_13940_14086 = state_13930__$1;
(statearr_13940_14086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (5))){
var state_13930__$1 = state_13930;
var statearr_13941_14087 = state_13930__$1;
(statearr_13941_14087[(2)] = null);

(statearr_13941_14087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (6))){
var state_13930__$1 = state_13930;
var statearr_13942_14088 = state_13930__$1;
(statearr_13942_14088[(2)] = null);

(statearr_13942_14088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (7))){
var inst_13926 = (state_13930[(2)]);
var state_13930__$1 = state_13930;
var statearr_13943_14089 = state_13930__$1;
(statearr_13943_14089[(2)] = inst_13926);

(statearr_13943_14089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14069,c__13500__auto___14083,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async))
;
return ((function (__14069,switch__13299__auto__,c__13500__auto___14083,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0 = (function (){
var statearr_13944 = [null,null,null,null,null,null,null];
(statearr_13944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__);

(statearr_13944[(1)] = (1));

return statearr_13944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1 = (function (state_13930){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_13930);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e13945){if((e13945 instanceof Object)){
var ex__13303__auto__ = e13945;
var statearr_13946_14090 = state_13930;
(statearr_13946_14090[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14091 = state_13930;
state_13930 = G__14091;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = function(state_13930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1.call(this,state_13930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__;
})()
;})(__14069,switch__13299__auto__,c__13500__auto___14083,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async))
})();
var state__13502__auto__ = (function (){var statearr_13947 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_13947[(6)] = c__13500__auto___14083);

return statearr_13947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(__14069,c__13500__auto___14083,G__13887_14070,G__13887_14071__$1,n__4408__auto___14068,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13887_14071__$1)].join('')));

}

var G__14092 = (__14069 + (1));
__14069 = G__14092;
continue;
} else {
}
break;
}

var c__13500__auto___14093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___14093,jobs,results,process,async){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___14093,jobs,results,process,async){
return (function (state_13969){
var state_val_13970 = (state_13969[(1)]);
if((state_val_13970 === (1))){
var state_13969__$1 = state_13969;
var statearr_13971_14094 = state_13969__$1;
(statearr_13971_14094[(2)] = null);

(statearr_13971_14094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (2))){
var state_13969__$1 = state_13969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13969__$1,(4),from);
} else {
if((state_val_13970 === (3))){
var inst_13967 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13969__$1,inst_13967);
} else {
if((state_val_13970 === (4))){
var inst_13950 = (state_13969[(7)]);
var inst_13950__$1 = (state_13969[(2)]);
var inst_13951 = (inst_13950__$1 == null);
var state_13969__$1 = (function (){var statearr_13973 = state_13969;
(statearr_13973[(7)] = inst_13950__$1);

return statearr_13973;
})();
if(cljs.core.truth_(inst_13951)){
var statearr_13974_14097 = state_13969__$1;
(statearr_13974_14097[(1)] = (5));

} else {
var statearr_13976_14098 = state_13969__$1;
(statearr_13976_14098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (5))){
var inst_13953 = cljs.core.async.close_BANG_(jobs);
var state_13969__$1 = state_13969;
var statearr_13977_14099 = state_13969__$1;
(statearr_13977_14099[(2)] = inst_13953);

(statearr_13977_14099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (6))){
var inst_13955 = (state_13969[(8)]);
var inst_13950 = (state_13969[(7)]);
var inst_13955__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13957 = [inst_13950,inst_13955__$1];
var inst_13958 = (new cljs.core.PersistentVector(null,2,(5),inst_13956,inst_13957,null));
var state_13969__$1 = (function (){var statearr_13978 = state_13969;
(statearr_13978[(8)] = inst_13955__$1);

return statearr_13978;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13969__$1,(8),jobs,inst_13958);
} else {
if((state_val_13970 === (7))){
var inst_13965 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
var statearr_13980_14101 = state_13969__$1;
(statearr_13980_14101[(2)] = inst_13965);

(statearr_13980_14101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (8))){
var inst_13955 = (state_13969[(8)]);
var inst_13960 = (state_13969[(2)]);
var state_13969__$1 = (function (){var statearr_13981 = state_13969;
(statearr_13981[(9)] = inst_13960);

return statearr_13981;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13969__$1,(9),results,inst_13955);
} else {
if((state_val_13970 === (9))){
var inst_13962 = (state_13969[(2)]);
var state_13969__$1 = (function (){var statearr_13982 = state_13969;
(statearr_13982[(10)] = inst_13962);

return statearr_13982;
})();
var statearr_13983_14102 = state_13969__$1;
(statearr_13983_14102[(2)] = null);

(statearr_13983_14102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___14093,jobs,results,process,async))
;
return ((function (switch__13299__auto__,c__13500__auto___14093,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0 = (function (){
var statearr_13984 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__);

(statearr_13984[(1)] = (1));

return statearr_13984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1 = (function (state_13969){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_13969);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e13985){if((e13985 instanceof Object)){
var ex__13303__auto__ = e13985;
var statearr_13986_14103 = state_13969;
(statearr_13986_14103[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14104 = state_13969;
state_13969 = G__14104;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = function(state_13969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1.call(this,state_13969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___14093,jobs,results,process,async))
})();
var state__13502__auto__ = (function (){var statearr_13988 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_13988[(6)] = c__13500__auto___14093);

return statearr_13988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___14093,jobs,results,process,async))
);


var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__,jobs,results,process,async){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__,jobs,results,process,async){
return (function (state_14027){
var state_val_14028 = (state_14027[(1)]);
if((state_val_14028 === (7))){
var inst_14022 = (state_14027[(2)]);
var state_14027__$1 = state_14027;
var statearr_14031_14105 = state_14027__$1;
(statearr_14031_14105[(2)] = inst_14022);

(statearr_14031_14105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (20))){
var state_14027__$1 = state_14027;
var statearr_14032_14106 = state_14027__$1;
(statearr_14032_14106[(2)] = null);

(statearr_14032_14106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (1))){
var state_14027__$1 = state_14027;
var statearr_14033_14107 = state_14027__$1;
(statearr_14033_14107[(2)] = null);

(statearr_14033_14107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (4))){
var inst_13991 = (state_14027[(7)]);
var inst_13991__$1 = (state_14027[(2)]);
var inst_13992 = (inst_13991__$1 == null);
var state_14027__$1 = (function (){var statearr_14034 = state_14027;
(statearr_14034[(7)] = inst_13991__$1);

return statearr_14034;
})();
if(cljs.core.truth_(inst_13992)){
var statearr_14035_14108 = state_14027__$1;
(statearr_14035_14108[(1)] = (5));

} else {
var statearr_14036_14109 = state_14027__$1;
(statearr_14036_14109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (15))){
var inst_14004 = (state_14027[(8)]);
var state_14027__$1 = state_14027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14027__$1,(18),to,inst_14004);
} else {
if((state_val_14028 === (21))){
var inst_14017 = (state_14027[(2)]);
var state_14027__$1 = state_14027;
var statearr_14037_14110 = state_14027__$1;
(statearr_14037_14110[(2)] = inst_14017);

(statearr_14037_14110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (13))){
var inst_14019 = (state_14027[(2)]);
var state_14027__$1 = (function (){var statearr_14041 = state_14027;
(statearr_14041[(9)] = inst_14019);

return statearr_14041;
})();
var statearr_14042_14111 = state_14027__$1;
(statearr_14042_14111[(2)] = null);

(statearr_14042_14111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (6))){
var inst_13991 = (state_14027[(7)]);
var state_14027__$1 = state_14027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14027__$1,(11),inst_13991);
} else {
if((state_val_14028 === (17))){
var inst_14012 = (state_14027[(2)]);
var state_14027__$1 = state_14027;
if(cljs.core.truth_(inst_14012)){
var statearr_14043_14112 = state_14027__$1;
(statearr_14043_14112[(1)] = (19));

} else {
var statearr_14044_14113 = state_14027__$1;
(statearr_14044_14113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (3))){
var inst_14024 = (state_14027[(2)]);
var state_14027__$1 = state_14027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14027__$1,inst_14024);
} else {
if((state_val_14028 === (12))){
var inst_14001 = (state_14027[(10)]);
var state_14027__$1 = state_14027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14027__$1,(14),inst_14001);
} else {
if((state_val_14028 === (2))){
var state_14027__$1 = state_14027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14027__$1,(4),results);
} else {
if((state_val_14028 === (19))){
var state_14027__$1 = state_14027;
var statearr_14045_14114 = state_14027__$1;
(statearr_14045_14114[(2)] = null);

(statearr_14045_14114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (11))){
var inst_14001 = (state_14027[(2)]);
var state_14027__$1 = (function (){var statearr_14046 = state_14027;
(statearr_14046[(10)] = inst_14001);

return statearr_14046;
})();
var statearr_14047_14115 = state_14027__$1;
(statearr_14047_14115[(2)] = null);

(statearr_14047_14115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (9))){
var state_14027__$1 = state_14027;
var statearr_14048_14120 = state_14027__$1;
(statearr_14048_14120[(2)] = null);

(statearr_14048_14120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (5))){
var state_14027__$1 = state_14027;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14049_14122 = state_14027__$1;
(statearr_14049_14122[(1)] = (8));

} else {
var statearr_14050_14123 = state_14027__$1;
(statearr_14050_14123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (14))){
var inst_14004 = (state_14027[(8)]);
var inst_14006 = (state_14027[(11)]);
var inst_14004__$1 = (state_14027[(2)]);
var inst_14005 = (inst_14004__$1 == null);
var inst_14006__$1 = cljs.core.not(inst_14005);
var state_14027__$1 = (function (){var statearr_14051 = state_14027;
(statearr_14051[(8)] = inst_14004__$1);

(statearr_14051[(11)] = inst_14006__$1);

return statearr_14051;
})();
if(inst_14006__$1){
var statearr_14052_14124 = state_14027__$1;
(statearr_14052_14124[(1)] = (15));

} else {
var statearr_14053_14125 = state_14027__$1;
(statearr_14053_14125[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (16))){
var inst_14006 = (state_14027[(11)]);
var state_14027__$1 = state_14027;
var statearr_14054_14126 = state_14027__$1;
(statearr_14054_14126[(2)] = inst_14006);

(statearr_14054_14126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (10))){
var inst_13998 = (state_14027[(2)]);
var state_14027__$1 = state_14027;
var statearr_14055_14127 = state_14027__$1;
(statearr_14055_14127[(2)] = inst_13998);

(statearr_14055_14127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (18))){
var inst_14009 = (state_14027[(2)]);
var state_14027__$1 = state_14027;
var statearr_14056_14129 = state_14027__$1;
(statearr_14056_14129[(2)] = inst_14009);

(statearr_14056_14129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14028 === (8))){
var inst_13995 = cljs.core.async.close_BANG_(to);
var state_14027__$1 = state_14027;
var statearr_14057_14130 = state_14027__$1;
(statearr_14057_14130[(2)] = inst_13995);

(statearr_14057_14130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto__,jobs,results,process,async))
;
return ((function (switch__13299__auto__,c__13500__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0 = (function (){
var statearr_14058 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__);

(statearr_14058[(1)] = (1));

return statearr_14058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1 = (function (state_14027){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_14027);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e14062){if((e14062 instanceof Object)){
var ex__13303__auto__ = e14062;
var statearr_14063_14131 = state_14027;
(statearr_14063_14131[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14132 = state_14027;
state_14027 = G__14132;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__ = function(state_14027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1.call(this,state_14027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__,jobs,results,process,async))
})();
var state__13502__auto__ = (function (){var statearr_14064 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_14064[(6)] = c__13500__auto__);

return statearr_14064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__,jobs,results,process,async))
);

return c__13500__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14134 = arguments.length;
switch (G__14134) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14145 = arguments.length;
switch (G__14145) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14150 = arguments.length;
switch (G__14150) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13500__auto___14206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___14206,tc,fc){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___14206,tc,fc){
return (function (state_14176){
var state_val_14177 = (state_14176[(1)]);
if((state_val_14177 === (7))){
var inst_14172 = (state_14176[(2)]);
var state_14176__$1 = state_14176;
var statearr_14178_14207 = state_14176__$1;
(statearr_14178_14207[(2)] = inst_14172);

(statearr_14178_14207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (1))){
var state_14176__$1 = state_14176;
var statearr_14179_14208 = state_14176__$1;
(statearr_14179_14208[(2)] = null);

(statearr_14179_14208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (4))){
var inst_14153 = (state_14176[(7)]);
var inst_14153__$1 = (state_14176[(2)]);
var inst_14154 = (inst_14153__$1 == null);
var state_14176__$1 = (function (){var statearr_14180 = state_14176;
(statearr_14180[(7)] = inst_14153__$1);

return statearr_14180;
})();
if(cljs.core.truth_(inst_14154)){
var statearr_14181_14209 = state_14176__$1;
(statearr_14181_14209[(1)] = (5));

} else {
var statearr_14182_14210 = state_14176__$1;
(statearr_14182_14210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (13))){
var state_14176__$1 = state_14176;
var statearr_14183_14211 = state_14176__$1;
(statearr_14183_14211[(2)] = null);

(statearr_14183_14211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (6))){
var inst_14153 = (state_14176[(7)]);
var inst_14159 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14153) : p.call(null,inst_14153));
var state_14176__$1 = state_14176;
if(cljs.core.truth_(inst_14159)){
var statearr_14184_14212 = state_14176__$1;
(statearr_14184_14212[(1)] = (9));

} else {
var statearr_14185_14213 = state_14176__$1;
(statearr_14185_14213[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (3))){
var inst_14174 = (state_14176[(2)]);
var state_14176__$1 = state_14176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14176__$1,inst_14174);
} else {
if((state_val_14177 === (12))){
var state_14176__$1 = state_14176;
var statearr_14186_14219 = state_14176__$1;
(statearr_14186_14219[(2)] = null);

(statearr_14186_14219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (2))){
var state_14176__$1 = state_14176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14176__$1,(4),ch);
} else {
if((state_val_14177 === (11))){
var inst_14153 = (state_14176[(7)]);
var inst_14163 = (state_14176[(2)]);
var state_14176__$1 = state_14176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14176__$1,(8),inst_14163,inst_14153);
} else {
if((state_val_14177 === (9))){
var state_14176__$1 = state_14176;
var statearr_14192_14224 = state_14176__$1;
(statearr_14192_14224[(2)] = tc);

(statearr_14192_14224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (5))){
var inst_14156 = cljs.core.async.close_BANG_(tc);
var inst_14157 = cljs.core.async.close_BANG_(fc);
var state_14176__$1 = (function (){var statearr_14193 = state_14176;
(statearr_14193[(8)] = inst_14156);

return statearr_14193;
})();
var statearr_14194_14225 = state_14176__$1;
(statearr_14194_14225[(2)] = inst_14157);

(statearr_14194_14225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (14))){
var inst_14170 = (state_14176[(2)]);
var state_14176__$1 = state_14176;
var statearr_14195_14226 = state_14176__$1;
(statearr_14195_14226[(2)] = inst_14170);

(statearr_14195_14226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (10))){
var state_14176__$1 = state_14176;
var statearr_14197_14227 = state_14176__$1;
(statearr_14197_14227[(2)] = fc);

(statearr_14197_14227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (8))){
var inst_14165 = (state_14176[(2)]);
var state_14176__$1 = state_14176;
if(cljs.core.truth_(inst_14165)){
var statearr_14198_14228 = state_14176__$1;
(statearr_14198_14228[(1)] = (12));

} else {
var statearr_14199_14229 = state_14176__$1;
(statearr_14199_14229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___14206,tc,fc))
;
return ((function (switch__13299__auto__,c__13500__auto___14206,tc,fc){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_14200 = [null,null,null,null,null,null,null,null,null];
(statearr_14200[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_14200[(1)] = (1));

return statearr_14200;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_14176){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_14176);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e14201){if((e14201 instanceof Object)){
var ex__13303__auto__ = e14201;
var statearr_14202_14230 = state_14176;
(statearr_14202_14230[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14231 = state_14176;
state_14176 = G__14231;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_14176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_14176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___14206,tc,fc))
})();
var state__13502__auto__ = (function (){var statearr_14203 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_14203[(6)] = c__13500__auto___14206);

return statearr_14203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___14206,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_14254){
var state_val_14255 = (state_14254[(1)]);
if((state_val_14255 === (7))){
var inst_14249 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
var statearr_14256_14274 = state_14254__$1;
(statearr_14256_14274[(2)] = inst_14249);

(statearr_14256_14274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (1))){
var inst_14233 = init;
var state_14254__$1 = (function (){var statearr_14257 = state_14254;
(statearr_14257[(7)] = inst_14233);

return statearr_14257;
})();
var statearr_14258_14275 = state_14254__$1;
(statearr_14258_14275[(2)] = null);

(statearr_14258_14275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (4))){
var inst_14236 = (state_14254[(8)]);
var inst_14236__$1 = (state_14254[(2)]);
var inst_14237 = (inst_14236__$1 == null);
var state_14254__$1 = (function (){var statearr_14259 = state_14254;
(statearr_14259[(8)] = inst_14236__$1);

return statearr_14259;
})();
if(cljs.core.truth_(inst_14237)){
var statearr_14260_14276 = state_14254__$1;
(statearr_14260_14276[(1)] = (5));

} else {
var statearr_14261_14277 = state_14254__$1;
(statearr_14261_14277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (6))){
var inst_14240 = (state_14254[(9)]);
var inst_14233 = (state_14254[(7)]);
var inst_14236 = (state_14254[(8)]);
var inst_14240__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14233,inst_14236) : f.call(null,inst_14233,inst_14236));
var inst_14241 = cljs.core.reduced_QMARK_(inst_14240__$1);
var state_14254__$1 = (function (){var statearr_14262 = state_14254;
(statearr_14262[(9)] = inst_14240__$1);

return statearr_14262;
})();
if(inst_14241){
var statearr_14263_14278 = state_14254__$1;
(statearr_14263_14278[(1)] = (8));

} else {
var statearr_14264_14279 = state_14254__$1;
(statearr_14264_14279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (3))){
var inst_14251 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14254__$1,inst_14251);
} else {
if((state_val_14255 === (2))){
var state_14254__$1 = state_14254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14254__$1,(4),ch);
} else {
if((state_val_14255 === (9))){
var inst_14240 = (state_14254[(9)]);
var inst_14233 = inst_14240;
var state_14254__$1 = (function (){var statearr_14265 = state_14254;
(statearr_14265[(7)] = inst_14233);

return statearr_14265;
})();
var statearr_14266_14284 = state_14254__$1;
(statearr_14266_14284[(2)] = null);

(statearr_14266_14284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (5))){
var inst_14233 = (state_14254[(7)]);
var state_14254__$1 = state_14254;
var statearr_14267_14286 = state_14254__$1;
(statearr_14267_14286[(2)] = inst_14233);

(statearr_14267_14286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (10))){
var inst_14247 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
var statearr_14268_14287 = state_14254__$1;
(statearr_14268_14287[(2)] = inst_14247);

(statearr_14268_14287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (8))){
var inst_14240 = (state_14254[(9)]);
var inst_14243 = cljs.core.deref(inst_14240);
var state_14254__$1 = state_14254;
var statearr_14269_14288 = state_14254__$1;
(statearr_14269_14288[(2)] = inst_14243);

(statearr_14269_14288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13300__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13300__auto____0 = (function (){
var statearr_14270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14270[(0)] = cljs$core$async$reduce_$_state_machine__13300__auto__);

(statearr_14270[(1)] = (1));

return statearr_14270;
});
var cljs$core$async$reduce_$_state_machine__13300__auto____1 = (function (state_14254){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_14254);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e14271){if((e14271 instanceof Object)){
var ex__13303__auto__ = e14271;
var statearr_14272_14290 = state_14254;
(statearr_14272_14290[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14291 = state_14254;
state_14254 = G__14291;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13300__auto__ = function(state_14254){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13300__auto____1.call(this,state_14254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13300__auto____0;
cljs$core$async$reduce_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13300__auto____1;
return cljs$core$async$reduce_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_14273 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_14273[(6)] = c__13500__auto__);

return statearr_14273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__,f__$1){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__,f__$1){
return (function (state_14297){
var state_val_14298 = (state_14297[(1)]);
if((state_val_14298 === (1))){
var inst_14292 = cljs.core.async.reduce(f__$1,init,ch);
var state_14297__$1 = state_14297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14297__$1,(2),inst_14292);
} else {
if((state_val_14298 === (2))){
var inst_14294 = (state_14297[(2)]);
var inst_14295 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14294) : f__$1.call(null,inst_14294));
var state_14297__$1 = state_14297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14297__$1,inst_14295);
} else {
return null;
}
}
});})(c__13500__auto__,f__$1))
;
return ((function (switch__13299__auto__,c__13500__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13300__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13300__auto____0 = (function (){
var statearr_14300 = [null,null,null,null,null,null,null];
(statearr_14300[(0)] = cljs$core$async$transduce_$_state_machine__13300__auto__);

(statearr_14300[(1)] = (1));

return statearr_14300;
});
var cljs$core$async$transduce_$_state_machine__13300__auto____1 = (function (state_14297){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_14297);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e14301){if((e14301 instanceof Object)){
var ex__13303__auto__ = e14301;
var statearr_14302_14311 = state_14297;
(statearr_14302_14311[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14312 = state_14297;
state_14297 = G__14312;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13300__auto__ = function(state_14297){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13300__auto____1.call(this,state_14297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13300__auto____0;
cljs$core$async$transduce_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13300__auto____1;
return cljs$core$async$transduce_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__,f__$1))
})();
var state__13502__auto__ = (function (){var statearr_14303 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_14303[(6)] = c__13500__auto__);

return statearr_14303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__,f__$1))
);

return c__13500__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14314 = arguments.length;
switch (G__14314) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_14341){
var state_val_14342 = (state_14341[(1)]);
if((state_val_14342 === (7))){
var inst_14323 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14343_14368 = state_14341__$1;
(statearr_14343_14368[(2)] = inst_14323);

(statearr_14343_14368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (1))){
var inst_14316 = cljs.core.seq(coll);
var inst_14317 = inst_14316;
var state_14341__$1 = (function (){var statearr_14344 = state_14341;
(statearr_14344[(7)] = inst_14317);

return statearr_14344;
})();
var statearr_14345_14370 = state_14341__$1;
(statearr_14345_14370[(2)] = null);

(statearr_14345_14370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (4))){
var inst_14317 = (state_14341[(7)]);
var inst_14321 = cljs.core.first(inst_14317);
var state_14341__$1 = state_14341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14341__$1,(7),ch,inst_14321);
} else {
if((state_val_14342 === (13))){
var inst_14335 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14346_14371 = state_14341__$1;
(statearr_14346_14371[(2)] = inst_14335);

(statearr_14346_14371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (6))){
var inst_14326 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
if(cljs.core.truth_(inst_14326)){
var statearr_14347_14372 = state_14341__$1;
(statearr_14347_14372[(1)] = (8));

} else {
var statearr_14348_14373 = state_14341__$1;
(statearr_14348_14373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (3))){
var inst_14339 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14341__$1,inst_14339);
} else {
if((state_val_14342 === (12))){
var state_14341__$1 = state_14341;
var statearr_14349_14375 = state_14341__$1;
(statearr_14349_14375[(2)] = null);

(statearr_14349_14375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (2))){
var inst_14317 = (state_14341[(7)]);
var state_14341__$1 = state_14341;
if(cljs.core.truth_(inst_14317)){
var statearr_14350_14376 = state_14341__$1;
(statearr_14350_14376[(1)] = (4));

} else {
var statearr_14351_14377 = state_14341__$1;
(statearr_14351_14377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (11))){
var inst_14332 = cljs.core.async.close_BANG_(ch);
var state_14341__$1 = state_14341;
var statearr_14352_14378 = state_14341__$1;
(statearr_14352_14378[(2)] = inst_14332);

(statearr_14352_14378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (9))){
var state_14341__$1 = state_14341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14353_14379 = state_14341__$1;
(statearr_14353_14379[(1)] = (11));

} else {
var statearr_14354_14380 = state_14341__$1;
(statearr_14354_14380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (5))){
var inst_14317 = (state_14341[(7)]);
var state_14341__$1 = state_14341;
var statearr_14355_14381 = state_14341__$1;
(statearr_14355_14381[(2)] = inst_14317);

(statearr_14355_14381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (10))){
var inst_14337 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14356_14382 = state_14341__$1;
(statearr_14356_14382[(2)] = inst_14337);

(statearr_14356_14382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (8))){
var inst_14317 = (state_14341[(7)]);
var inst_14328 = cljs.core.next(inst_14317);
var inst_14317__$1 = inst_14328;
var state_14341__$1 = (function (){var statearr_14357 = state_14341;
(statearr_14357[(7)] = inst_14317__$1);

return statearr_14357;
})();
var statearr_14358_14383 = state_14341__$1;
(statearr_14358_14383[(2)] = null);

(statearr_14358_14383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_14359 = [null,null,null,null,null,null,null,null];
(statearr_14359[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_14359[(1)] = (1));

return statearr_14359;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_14341){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_14341);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e14360){if((e14360 instanceof Object)){
var ex__13303__auto__ = e14360;
var statearr_14361_14385 = state_14341;
(statearr_14361_14385[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14386 = state_14341;
state_14341 = G__14386;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_14341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_14341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_14362 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_14362[(6)] = c__13500__auto__);

return statearr_14362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14398 = (function (ch,cs,meta14399){
this.ch = ch;
this.cs = cs;
this.meta14399 = meta14399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14400,meta14399__$1){
var self__ = this;
var _14400__$1 = this;
return (new cljs.core.async.t_cljs$core$async14398(self__.ch,self__.cs,meta14399__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14400){
var self__ = this;
var _14400__$1 = this;
return self__.meta14399;
});})(cs))
;

cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14398.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14399","meta14399",-1457418335,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14398";

cljs.core.async.t_cljs$core$async14398.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14398");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14398.
 */
cljs.core.async.__GT_t_cljs$core$async14398 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14398(ch__$1,cs__$1,meta14399){
return (new cljs.core.async.t_cljs$core$async14398(ch__$1,cs__$1,meta14399));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14398(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13500__auto___14652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___14652,cs,m,dchan,dctr,done){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___14652,cs,m,dchan,dctr,done){
return (function (state_14547){
var state_val_14548 = (state_14547[(1)]);
if((state_val_14548 === (7))){
var inst_14541 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14549_14653 = state_14547__$1;
(statearr_14549_14653[(2)] = inst_14541);

(statearr_14549_14653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (20))){
var inst_14440 = (state_14547[(7)]);
var inst_14452 = cljs.core.first(inst_14440);
var inst_14453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14452,(0),null);
var inst_14454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14452,(1),null);
var state_14547__$1 = (function (){var statearr_14550 = state_14547;
(statearr_14550[(8)] = inst_14453);

return statearr_14550;
})();
if(cljs.core.truth_(inst_14454)){
var statearr_14551_14655 = state_14547__$1;
(statearr_14551_14655[(1)] = (22));

} else {
var statearr_14552_14656 = state_14547__$1;
(statearr_14552_14656[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (27))){
var inst_14490 = (state_14547[(9)]);
var inst_14409 = (state_14547[(10)]);
var inst_14485 = (state_14547[(11)]);
var inst_14483 = (state_14547[(12)]);
var inst_14490__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14483,inst_14485);
var inst_14491 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14490__$1,inst_14409,done);
var state_14547__$1 = (function (){var statearr_14553 = state_14547;
(statearr_14553[(9)] = inst_14490__$1);

return statearr_14553;
})();
if(cljs.core.truth_(inst_14491)){
var statearr_14554_14658 = state_14547__$1;
(statearr_14554_14658[(1)] = (30));

} else {
var statearr_14555_14659 = state_14547__$1;
(statearr_14555_14659[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (1))){
var state_14547__$1 = state_14547;
var statearr_14556_14660 = state_14547__$1;
(statearr_14556_14660[(2)] = null);

(statearr_14556_14660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (24))){
var inst_14440 = (state_14547[(7)]);
var inst_14460 = (state_14547[(2)]);
var inst_14461 = cljs.core.next(inst_14440);
var inst_14418 = inst_14461;
var inst_14419 = null;
var inst_14420 = (0);
var inst_14421 = (0);
var state_14547__$1 = (function (){var statearr_14557 = state_14547;
(statearr_14557[(13)] = inst_14420);

(statearr_14557[(14)] = inst_14460);

(statearr_14557[(15)] = inst_14421);

(statearr_14557[(16)] = inst_14419);

(statearr_14557[(17)] = inst_14418);

return statearr_14557;
})();
var statearr_14558_14661 = state_14547__$1;
(statearr_14558_14661[(2)] = null);

(statearr_14558_14661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (39))){
var state_14547__$1 = state_14547;
var statearr_14563_14662 = state_14547__$1;
(statearr_14563_14662[(2)] = null);

(statearr_14563_14662[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (4))){
var inst_14409 = (state_14547[(10)]);
var inst_14409__$1 = (state_14547[(2)]);
var inst_14410 = (inst_14409__$1 == null);
var state_14547__$1 = (function (){var statearr_14564 = state_14547;
(statearr_14564[(10)] = inst_14409__$1);

return statearr_14564;
})();
if(cljs.core.truth_(inst_14410)){
var statearr_14565_14663 = state_14547__$1;
(statearr_14565_14663[(1)] = (5));

} else {
var statearr_14567_14664 = state_14547__$1;
(statearr_14567_14664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (15))){
var inst_14420 = (state_14547[(13)]);
var inst_14421 = (state_14547[(15)]);
var inst_14419 = (state_14547[(16)]);
var inst_14418 = (state_14547[(17)]);
var inst_14436 = (state_14547[(2)]);
var inst_14437 = (inst_14421 + (1));
var tmp14560 = inst_14420;
var tmp14561 = inst_14419;
var tmp14562 = inst_14418;
var inst_14418__$1 = tmp14562;
var inst_14419__$1 = tmp14561;
var inst_14420__$1 = tmp14560;
var inst_14421__$1 = inst_14437;
var state_14547__$1 = (function (){var statearr_14568 = state_14547;
(statearr_14568[(18)] = inst_14436);

(statearr_14568[(13)] = inst_14420__$1);

(statearr_14568[(15)] = inst_14421__$1);

(statearr_14568[(16)] = inst_14419__$1);

(statearr_14568[(17)] = inst_14418__$1);

return statearr_14568;
})();
var statearr_14569_14665 = state_14547__$1;
(statearr_14569_14665[(2)] = null);

(statearr_14569_14665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (21))){
var inst_14464 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14573_14666 = state_14547__$1;
(statearr_14573_14666[(2)] = inst_14464);

(statearr_14573_14666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (31))){
var inst_14490 = (state_14547[(9)]);
var inst_14494 = done(null);
var inst_14495 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14490);
var state_14547__$1 = (function (){var statearr_14574 = state_14547;
(statearr_14574[(19)] = inst_14494);

return statearr_14574;
})();
var statearr_14575_14668 = state_14547__$1;
(statearr_14575_14668[(2)] = inst_14495);

(statearr_14575_14668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (32))){
var inst_14482 = (state_14547[(20)]);
var inst_14484 = (state_14547[(21)]);
var inst_14485 = (state_14547[(11)]);
var inst_14483 = (state_14547[(12)]);
var inst_14497 = (state_14547[(2)]);
var inst_14498 = (inst_14485 + (1));
var tmp14570 = inst_14482;
var tmp14571 = inst_14484;
var tmp14572 = inst_14483;
var inst_14482__$1 = tmp14570;
var inst_14483__$1 = tmp14572;
var inst_14484__$1 = tmp14571;
var inst_14485__$1 = inst_14498;
var state_14547__$1 = (function (){var statearr_14576 = state_14547;
(statearr_14576[(20)] = inst_14482__$1);

(statearr_14576[(21)] = inst_14484__$1);

(statearr_14576[(22)] = inst_14497);

(statearr_14576[(11)] = inst_14485__$1);

(statearr_14576[(12)] = inst_14483__$1);

return statearr_14576;
})();
var statearr_14577_14669 = state_14547__$1;
(statearr_14577_14669[(2)] = null);

(statearr_14577_14669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (40))){
var inst_14510 = (state_14547[(23)]);
var inst_14514 = done(null);
var inst_14515 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14510);
var state_14547__$1 = (function (){var statearr_14578 = state_14547;
(statearr_14578[(24)] = inst_14514);

return statearr_14578;
})();
var statearr_14579_14670 = state_14547__$1;
(statearr_14579_14670[(2)] = inst_14515);

(statearr_14579_14670[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (33))){
var inst_14501 = (state_14547[(25)]);
var inst_14503 = cljs.core.chunked_seq_QMARK_(inst_14501);
var state_14547__$1 = state_14547;
if(inst_14503){
var statearr_14580_14674 = state_14547__$1;
(statearr_14580_14674[(1)] = (36));

} else {
var statearr_14581_14677 = state_14547__$1;
(statearr_14581_14677[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (13))){
var inst_14430 = (state_14547[(26)]);
var inst_14433 = cljs.core.async.close_BANG_(inst_14430);
var state_14547__$1 = state_14547;
var statearr_14582_14682 = state_14547__$1;
(statearr_14582_14682[(2)] = inst_14433);

(statearr_14582_14682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (22))){
var inst_14453 = (state_14547[(8)]);
var inst_14457 = cljs.core.async.close_BANG_(inst_14453);
var state_14547__$1 = state_14547;
var statearr_14583_14683 = state_14547__$1;
(statearr_14583_14683[(2)] = inst_14457);

(statearr_14583_14683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (36))){
var inst_14501 = (state_14547[(25)]);
var inst_14505 = cljs.core.chunk_first(inst_14501);
var inst_14506 = cljs.core.chunk_rest(inst_14501);
var inst_14507 = cljs.core.count(inst_14505);
var inst_14482 = inst_14506;
var inst_14483 = inst_14505;
var inst_14484 = inst_14507;
var inst_14485 = (0);
var state_14547__$1 = (function (){var statearr_14584 = state_14547;
(statearr_14584[(20)] = inst_14482);

(statearr_14584[(21)] = inst_14484);

(statearr_14584[(11)] = inst_14485);

(statearr_14584[(12)] = inst_14483);

return statearr_14584;
})();
var statearr_14585_14684 = state_14547__$1;
(statearr_14585_14684[(2)] = null);

(statearr_14585_14684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (41))){
var inst_14501 = (state_14547[(25)]);
var inst_14517 = (state_14547[(2)]);
var inst_14518 = cljs.core.next(inst_14501);
var inst_14482 = inst_14518;
var inst_14483 = null;
var inst_14484 = (0);
var inst_14485 = (0);
var state_14547__$1 = (function (){var statearr_14586 = state_14547;
(statearr_14586[(20)] = inst_14482);

(statearr_14586[(21)] = inst_14484);

(statearr_14586[(11)] = inst_14485);

(statearr_14586[(12)] = inst_14483);

(statearr_14586[(27)] = inst_14517);

return statearr_14586;
})();
var statearr_14587_14685 = state_14547__$1;
(statearr_14587_14685[(2)] = null);

(statearr_14587_14685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (43))){
var state_14547__$1 = state_14547;
var statearr_14588_14686 = state_14547__$1;
(statearr_14588_14686[(2)] = null);

(statearr_14588_14686[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (29))){
var inst_14529 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14593_14687 = state_14547__$1;
(statearr_14593_14687[(2)] = inst_14529);

(statearr_14593_14687[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (44))){
var inst_14538 = (state_14547[(2)]);
var state_14547__$1 = (function (){var statearr_14595 = state_14547;
(statearr_14595[(28)] = inst_14538);

return statearr_14595;
})();
var statearr_14596_14689 = state_14547__$1;
(statearr_14596_14689[(2)] = null);

(statearr_14596_14689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (6))){
var inst_14474 = (state_14547[(29)]);
var inst_14473 = cljs.core.deref(cs);
var inst_14474__$1 = cljs.core.keys(inst_14473);
var inst_14475 = cljs.core.count(inst_14474__$1);
var inst_14476 = cljs.core.reset_BANG_(dctr,inst_14475);
var inst_14481 = cljs.core.seq(inst_14474__$1);
var inst_14482 = inst_14481;
var inst_14483 = null;
var inst_14484 = (0);
var inst_14485 = (0);
var state_14547__$1 = (function (){var statearr_14597 = state_14547;
(statearr_14597[(20)] = inst_14482);

(statearr_14597[(21)] = inst_14484);

(statearr_14597[(30)] = inst_14476);

(statearr_14597[(11)] = inst_14485);

(statearr_14597[(12)] = inst_14483);

(statearr_14597[(29)] = inst_14474__$1);

return statearr_14597;
})();
var statearr_14599_14690 = state_14547__$1;
(statearr_14599_14690[(2)] = null);

(statearr_14599_14690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (28))){
var inst_14482 = (state_14547[(20)]);
var inst_14501 = (state_14547[(25)]);
var inst_14501__$1 = cljs.core.seq(inst_14482);
var state_14547__$1 = (function (){var statearr_14600 = state_14547;
(statearr_14600[(25)] = inst_14501__$1);

return statearr_14600;
})();
if(inst_14501__$1){
var statearr_14601_14692 = state_14547__$1;
(statearr_14601_14692[(1)] = (33));

} else {
var statearr_14602_14693 = state_14547__$1;
(statearr_14602_14693[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (25))){
var inst_14484 = (state_14547[(21)]);
var inst_14485 = (state_14547[(11)]);
var inst_14487 = (inst_14485 < inst_14484);
var inst_14488 = inst_14487;
var state_14547__$1 = state_14547;
if(cljs.core.truth_(inst_14488)){
var statearr_14603_14694 = state_14547__$1;
(statearr_14603_14694[(1)] = (27));

} else {
var statearr_14604_14695 = state_14547__$1;
(statearr_14604_14695[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (34))){
var state_14547__$1 = state_14547;
var statearr_14605_14696 = state_14547__$1;
(statearr_14605_14696[(2)] = null);

(statearr_14605_14696[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (17))){
var state_14547__$1 = state_14547;
var statearr_14606_14697 = state_14547__$1;
(statearr_14606_14697[(2)] = null);

(statearr_14606_14697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (3))){
var inst_14543 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14547__$1,inst_14543);
} else {
if((state_val_14548 === (12))){
var inst_14469 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14607_14698 = state_14547__$1;
(statearr_14607_14698[(2)] = inst_14469);

(statearr_14607_14698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (2))){
var state_14547__$1 = state_14547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14547__$1,(4),ch);
} else {
if((state_val_14548 === (23))){
var state_14547__$1 = state_14547;
var statearr_14608_14699 = state_14547__$1;
(statearr_14608_14699[(2)] = null);

(statearr_14608_14699[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (35))){
var inst_14527 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14609_14700 = state_14547__$1;
(statearr_14609_14700[(2)] = inst_14527);

(statearr_14609_14700[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (19))){
var inst_14440 = (state_14547[(7)]);
var inst_14444 = cljs.core.chunk_first(inst_14440);
var inst_14445 = cljs.core.chunk_rest(inst_14440);
var inst_14446 = cljs.core.count(inst_14444);
var inst_14418 = inst_14445;
var inst_14419 = inst_14444;
var inst_14420 = inst_14446;
var inst_14421 = (0);
var state_14547__$1 = (function (){var statearr_14611 = state_14547;
(statearr_14611[(13)] = inst_14420);

(statearr_14611[(15)] = inst_14421);

(statearr_14611[(16)] = inst_14419);

(statearr_14611[(17)] = inst_14418);

return statearr_14611;
})();
var statearr_14612_14701 = state_14547__$1;
(statearr_14612_14701[(2)] = null);

(statearr_14612_14701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (11))){
var inst_14440 = (state_14547[(7)]);
var inst_14418 = (state_14547[(17)]);
var inst_14440__$1 = cljs.core.seq(inst_14418);
var state_14547__$1 = (function (){var statearr_14613 = state_14547;
(statearr_14613[(7)] = inst_14440__$1);

return statearr_14613;
})();
if(inst_14440__$1){
var statearr_14614_14702 = state_14547__$1;
(statearr_14614_14702[(1)] = (16));

} else {
var statearr_14615_14703 = state_14547__$1;
(statearr_14615_14703[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (9))){
var inst_14471 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14616_14704 = state_14547__$1;
(statearr_14616_14704[(2)] = inst_14471);

(statearr_14616_14704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (5))){
var inst_14416 = cljs.core.deref(cs);
var inst_14417 = cljs.core.seq(inst_14416);
var inst_14418 = inst_14417;
var inst_14419 = null;
var inst_14420 = (0);
var inst_14421 = (0);
var state_14547__$1 = (function (){var statearr_14617 = state_14547;
(statearr_14617[(13)] = inst_14420);

(statearr_14617[(15)] = inst_14421);

(statearr_14617[(16)] = inst_14419);

(statearr_14617[(17)] = inst_14418);

return statearr_14617;
})();
var statearr_14623_14705 = state_14547__$1;
(statearr_14623_14705[(2)] = null);

(statearr_14623_14705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (14))){
var state_14547__$1 = state_14547;
var statearr_14624_14706 = state_14547__$1;
(statearr_14624_14706[(2)] = null);

(statearr_14624_14706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (45))){
var inst_14535 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14625_14707 = state_14547__$1;
(statearr_14625_14707[(2)] = inst_14535);

(statearr_14625_14707[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (26))){
var inst_14474 = (state_14547[(29)]);
var inst_14531 = (state_14547[(2)]);
var inst_14532 = cljs.core.seq(inst_14474);
var state_14547__$1 = (function (){var statearr_14626 = state_14547;
(statearr_14626[(31)] = inst_14531);

return statearr_14626;
})();
if(inst_14532){
var statearr_14627_14708 = state_14547__$1;
(statearr_14627_14708[(1)] = (42));

} else {
var statearr_14628_14709 = state_14547__$1;
(statearr_14628_14709[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (16))){
var inst_14440 = (state_14547[(7)]);
var inst_14442 = cljs.core.chunked_seq_QMARK_(inst_14440);
var state_14547__$1 = state_14547;
if(inst_14442){
var statearr_14629_14710 = state_14547__$1;
(statearr_14629_14710[(1)] = (19));

} else {
var statearr_14630_14711 = state_14547__$1;
(statearr_14630_14711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (38))){
var inst_14524 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14631_14712 = state_14547__$1;
(statearr_14631_14712[(2)] = inst_14524);

(statearr_14631_14712[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (30))){
var state_14547__$1 = state_14547;
var statearr_14632_14713 = state_14547__$1;
(statearr_14632_14713[(2)] = null);

(statearr_14632_14713[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (10))){
var inst_14421 = (state_14547[(15)]);
var inst_14419 = (state_14547[(16)]);
var inst_14429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14419,inst_14421);
var inst_14430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14429,(0),null);
var inst_14431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14429,(1),null);
var state_14547__$1 = (function (){var statearr_14634 = state_14547;
(statearr_14634[(26)] = inst_14430);

return statearr_14634;
})();
if(cljs.core.truth_(inst_14431)){
var statearr_14635_14714 = state_14547__$1;
(statearr_14635_14714[(1)] = (13));

} else {
var statearr_14636_14715 = state_14547__$1;
(statearr_14636_14715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (18))){
var inst_14467 = (state_14547[(2)]);
var state_14547__$1 = state_14547;
var statearr_14637_14716 = state_14547__$1;
(statearr_14637_14716[(2)] = inst_14467);

(statearr_14637_14716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (42))){
var state_14547__$1 = state_14547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14547__$1,(45),dchan);
} else {
if((state_val_14548 === (37))){
var inst_14510 = (state_14547[(23)]);
var inst_14409 = (state_14547[(10)]);
var inst_14501 = (state_14547[(25)]);
var inst_14510__$1 = cljs.core.first(inst_14501);
var inst_14511 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14510__$1,inst_14409,done);
var state_14547__$1 = (function (){var statearr_14639 = state_14547;
(statearr_14639[(23)] = inst_14510__$1);

return statearr_14639;
})();
if(cljs.core.truth_(inst_14511)){
var statearr_14640_14717 = state_14547__$1;
(statearr_14640_14717[(1)] = (39));

} else {
var statearr_14641_14718 = state_14547__$1;
(statearr_14641_14718[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14548 === (8))){
var inst_14420 = (state_14547[(13)]);
var inst_14421 = (state_14547[(15)]);
var inst_14423 = (inst_14421 < inst_14420);
var inst_14424 = inst_14423;
var state_14547__$1 = state_14547;
if(cljs.core.truth_(inst_14424)){
var statearr_14642_14719 = state_14547__$1;
(statearr_14642_14719[(1)] = (10));

} else {
var statearr_14643_14720 = state_14547__$1;
(statearr_14643_14720[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___14652,cs,m,dchan,dctr,done))
;
return ((function (switch__13299__auto__,c__13500__auto___14652,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13300__auto__ = null;
var cljs$core$async$mult_$_state_machine__13300__auto____0 = (function (){
var statearr_14644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14644[(0)] = cljs$core$async$mult_$_state_machine__13300__auto__);

(statearr_14644[(1)] = (1));

return statearr_14644;
});
var cljs$core$async$mult_$_state_machine__13300__auto____1 = (function (state_14547){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_14547);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e14645){if((e14645 instanceof Object)){
var ex__13303__auto__ = e14645;
var statearr_14646_14726 = state_14547;
(statearr_14646_14726[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14645;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14727 = state_14547;
state_14547 = G__14727;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13300__auto__ = function(state_14547){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13300__auto____1.call(this,state_14547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13300__auto____0;
cljs$core$async$mult_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13300__auto____1;
return cljs$core$async$mult_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___14652,cs,m,dchan,dctr,done))
})();
var state__13502__auto__ = (function (){var statearr_14647 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_14647[(6)] = c__13500__auto___14652);

return statearr_14647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___14652,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14730 = arguments.length;
switch (G__14730) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14752 = arguments.length;
var i__4532__auto___14753 = (0);
while(true){
if((i__4532__auto___14753 < len__4531__auto___14752)){
args__4534__auto__.push((arguments[i__4532__auto___14753]));

var G__14754 = (i__4532__auto___14753 + (1));
i__4532__auto___14753 = G__14754;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14746){
var map__14747 = p__14746;
var map__14747__$1 = ((((!((map__14747 == null)))?(((((map__14747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14747):map__14747);
var opts = map__14747__$1;
var statearr_14749_14758 = state;
(statearr_14749_14758[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__14747,map__14747__$1,opts){
return (function (val){
var statearr_14750_14759 = state;
(statearr_14750_14759[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14747,map__14747__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_14751_14760 = state;
(statearr_14751_14760[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14742){
var G__14743 = cljs.core.first(seq14742);
var seq14742__$1 = cljs.core.next(seq14742);
var G__14744 = cljs.core.first(seq14742__$1);
var seq14742__$2 = cljs.core.next(seq14742__$1);
var G__14745 = cljs.core.first(seq14742__$2);
var seq14742__$3 = cljs.core.next(seq14742__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14743,G__14744,G__14745,seq14742__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14761 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14762){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14762 = meta14762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14763,meta14762__$1){
var self__ = this;
var _14763__$1 = this;
return (new cljs.core.async.t_cljs$core$async14761(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14762__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14763){
var self__ = this;
var _14763__$1 = this;
return self__.meta14762;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14762","meta14762",-1807043072,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14761";

cljs.core.async.t_cljs$core$async14761.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14761");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14761.
 */
cljs.core.async.__GT_t_cljs$core$async14761 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14761(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14762){
return (new cljs.core.async.t_cljs$core$async14761(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14762));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14761(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13500__auto___15159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___15159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___15159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14871){
var state_val_14872 = (state_14871[(1)]);
if((state_val_14872 === (7))){
var inst_14783 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14873_15161 = state_14871__$1;
(statearr_14873_15161[(2)] = inst_14783);

(statearr_14873_15161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (20))){
var inst_14795 = (state_14871[(7)]);
var state_14871__$1 = state_14871;
var statearr_14874_15162 = state_14871__$1;
(statearr_14874_15162[(2)] = inst_14795);

(statearr_14874_15162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (27))){
var state_14871__$1 = state_14871;
var statearr_14875_15163 = state_14871__$1;
(statearr_14875_15163[(2)] = null);

(statearr_14875_15163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (1))){
var inst_14770 = (state_14871[(8)]);
var inst_14770__$1 = calc_state();
var inst_14772 = (inst_14770__$1 == null);
var inst_14773 = cljs.core.not(inst_14772);
var state_14871__$1 = (function (){var statearr_14876 = state_14871;
(statearr_14876[(8)] = inst_14770__$1);

return statearr_14876;
})();
if(inst_14773){
var statearr_14877_15164 = state_14871__$1;
(statearr_14877_15164[(1)] = (2));

} else {
var statearr_14878_15165 = state_14871__$1;
(statearr_14878_15165[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (24))){
var inst_14819 = (state_14871[(9)]);
var inst_14845 = (state_14871[(10)]);
var inst_14828 = (state_14871[(11)]);
var inst_14845__$1 = (inst_14819.cljs$core$IFn$_invoke$arity$1 ? inst_14819.cljs$core$IFn$_invoke$arity$1(inst_14828) : inst_14819.call(null,inst_14828));
var state_14871__$1 = (function (){var statearr_14879 = state_14871;
(statearr_14879[(10)] = inst_14845__$1);

return statearr_14879;
})();
if(cljs.core.truth_(inst_14845__$1)){
var statearr_14880_15166 = state_14871__$1;
(statearr_14880_15166[(1)] = (29));

} else {
var statearr_14881_15167 = state_14871__$1;
(statearr_14881_15167[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (4))){
var inst_14786 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14786)){
var statearr_14882_15168 = state_14871__$1;
(statearr_14882_15168[(1)] = (8));

} else {
var statearr_14883_15169 = state_14871__$1;
(statearr_14883_15169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (15))){
var inst_14813 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14813)){
var statearr_14884_15170 = state_14871__$1;
(statearr_14884_15170[(1)] = (19));

} else {
var statearr_14885_15171 = state_14871__$1;
(statearr_14885_15171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (21))){
var inst_14818 = (state_14871[(12)]);
var inst_14818__$1 = (state_14871[(2)]);
var inst_14819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14818__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14818__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14818__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14871__$1 = (function (){var statearr_14886 = state_14871;
(statearr_14886[(13)] = inst_14820);

(statearr_14886[(9)] = inst_14819);

(statearr_14886[(12)] = inst_14818__$1);

return statearr_14886;
})();
return cljs.core.async.ioc_alts_BANG_(state_14871__$1,(22),inst_14821);
} else {
if((state_val_14872 === (31))){
var inst_14853 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14853)){
var statearr_14887_15172 = state_14871__$1;
(statearr_14887_15172[(1)] = (32));

} else {
var statearr_14888_15173 = state_14871__$1;
(statearr_14888_15173[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (32))){
var inst_14827 = (state_14871[(14)]);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14871__$1,(35),out,inst_14827);
} else {
if((state_val_14872 === (33))){
var inst_14818 = (state_14871[(12)]);
var inst_14795 = inst_14818;
var state_14871__$1 = (function (){var statearr_14889 = state_14871;
(statearr_14889[(7)] = inst_14795);

return statearr_14889;
})();
var statearr_14890_15174 = state_14871__$1;
(statearr_14890_15174[(2)] = null);

(statearr_14890_15174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (13))){
var inst_14795 = (state_14871[(7)]);
var inst_14802 = inst_14795.cljs$lang$protocol_mask$partition0$;
var inst_14803 = (inst_14802 & (64));
var inst_14804 = inst_14795.cljs$core$ISeq$;
var inst_14805 = (cljs.core.PROTOCOL_SENTINEL === inst_14804);
var inst_14806 = ((inst_14803) || (inst_14805));
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14806)){
var statearr_14891_15175 = state_14871__$1;
(statearr_14891_15175[(1)] = (16));

} else {
var statearr_14892_15176 = state_14871__$1;
(statearr_14892_15176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (22))){
var inst_14827 = (state_14871[(14)]);
var inst_14828 = (state_14871[(11)]);
var inst_14826 = (state_14871[(2)]);
var inst_14827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14826,(0),null);
var inst_14828__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14826,(1),null);
var inst_14829 = (inst_14827__$1 == null);
var inst_14830 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14828__$1,change);
var inst_14831 = ((inst_14829) || (inst_14830));
var state_14871__$1 = (function (){var statearr_14893 = state_14871;
(statearr_14893[(14)] = inst_14827__$1);

(statearr_14893[(11)] = inst_14828__$1);

return statearr_14893;
})();
if(cljs.core.truth_(inst_14831)){
var statearr_14894_15180 = state_14871__$1;
(statearr_14894_15180[(1)] = (23));

} else {
var statearr_14895_15181 = state_14871__$1;
(statearr_14895_15181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (36))){
var inst_14818 = (state_14871[(12)]);
var inst_14795 = inst_14818;
var state_14871__$1 = (function (){var statearr_14896 = state_14871;
(statearr_14896[(7)] = inst_14795);

return statearr_14896;
})();
var statearr_14897_15182 = state_14871__$1;
(statearr_14897_15182[(2)] = null);

(statearr_14897_15182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (29))){
var inst_14845 = (state_14871[(10)]);
var state_14871__$1 = state_14871;
var statearr_14898_15183 = state_14871__$1;
(statearr_14898_15183[(2)] = inst_14845);

(statearr_14898_15183[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (6))){
var state_14871__$1 = state_14871;
var statearr_14899_15184 = state_14871__$1;
(statearr_14899_15184[(2)] = false);

(statearr_14899_15184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (28))){
var inst_14841 = (state_14871[(2)]);
var inst_14842 = calc_state();
var inst_14795 = inst_14842;
var state_14871__$1 = (function (){var statearr_14900 = state_14871;
(statearr_14900[(7)] = inst_14795);

(statearr_14900[(15)] = inst_14841);

return statearr_14900;
})();
var statearr_14920_15185 = state_14871__$1;
(statearr_14920_15185[(2)] = null);

(statearr_14920_15185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (25))){
var inst_14867 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_15023_15186 = state_14871__$1;
(statearr_15023_15186[(2)] = inst_14867);

(statearr_15023_15186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (34))){
var inst_14865 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_15109_15187 = state_14871__$1;
(statearr_15109_15187[(2)] = inst_14865);

(statearr_15109_15187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (17))){
var state_14871__$1 = state_14871;
var statearr_15110_15188 = state_14871__$1;
(statearr_15110_15188[(2)] = false);

(statearr_15110_15188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (3))){
var state_14871__$1 = state_14871;
var statearr_15111_15189 = state_14871__$1;
(statearr_15111_15189[(2)] = false);

(statearr_15111_15189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (12))){
var inst_14869 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14871__$1,inst_14869);
} else {
if((state_val_14872 === (2))){
var inst_14770 = (state_14871[(8)]);
var inst_14775 = inst_14770.cljs$lang$protocol_mask$partition0$;
var inst_14776 = (inst_14775 & (64));
var inst_14777 = inst_14770.cljs$core$ISeq$;
var inst_14778 = (cljs.core.PROTOCOL_SENTINEL === inst_14777);
var inst_14779 = ((inst_14776) || (inst_14778));
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14779)){
var statearr_15112_15190 = state_14871__$1;
(statearr_15112_15190[(1)] = (5));

} else {
var statearr_15113_15191 = state_14871__$1;
(statearr_15113_15191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (23))){
var inst_14827 = (state_14871[(14)]);
var inst_14836 = (inst_14827 == null);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14836)){
var statearr_15114_15192 = state_14871__$1;
(statearr_15114_15192[(1)] = (26));

} else {
var statearr_15115_15193 = state_14871__$1;
(statearr_15115_15193[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (35))){
var inst_14856 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14856)){
var statearr_15116_15194 = state_14871__$1;
(statearr_15116_15194[(1)] = (36));

} else {
var statearr_15117_15195 = state_14871__$1;
(statearr_15117_15195[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (19))){
var inst_14795 = (state_14871[(7)]);
var inst_14815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14795);
var state_14871__$1 = state_14871;
var statearr_15118_15196 = state_14871__$1;
(statearr_15118_15196[(2)] = inst_14815);

(statearr_15118_15196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (11))){
var inst_14795 = (state_14871[(7)]);
var inst_14799 = (inst_14795 == null);
var inst_14800 = cljs.core.not(inst_14799);
var state_14871__$1 = state_14871;
if(inst_14800){
var statearr_15119_15197 = state_14871__$1;
(statearr_15119_15197[(1)] = (13));

} else {
var statearr_15120_15198 = state_14871__$1;
(statearr_15120_15198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (9))){
var inst_14770 = (state_14871[(8)]);
var state_14871__$1 = state_14871;
var statearr_15121_15199 = state_14871__$1;
(statearr_15121_15199[(2)] = inst_14770);

(statearr_15121_15199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (5))){
var state_14871__$1 = state_14871;
var statearr_15126_15200 = state_14871__$1;
(statearr_15126_15200[(2)] = true);

(statearr_15126_15200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (14))){
var state_14871__$1 = state_14871;
var statearr_15144_15201 = state_14871__$1;
(statearr_15144_15201[(2)] = false);

(statearr_15144_15201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (26))){
var inst_14828 = (state_14871[(11)]);
var inst_14838 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14828);
var state_14871__$1 = state_14871;
var statearr_15146_15202 = state_14871__$1;
(statearr_15146_15202[(2)] = inst_14838);

(statearr_15146_15202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (16))){
var state_14871__$1 = state_14871;
var statearr_15147_15203 = state_14871__$1;
(statearr_15147_15203[(2)] = true);

(statearr_15147_15203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (38))){
var inst_14861 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_15148_15204 = state_14871__$1;
(statearr_15148_15204[(2)] = inst_14861);

(statearr_15148_15204[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (30))){
var inst_14820 = (state_14871[(13)]);
var inst_14819 = (state_14871[(9)]);
var inst_14828 = (state_14871[(11)]);
var inst_14848 = cljs.core.empty_QMARK_(inst_14819);
var inst_14849 = (inst_14820.cljs$core$IFn$_invoke$arity$1 ? inst_14820.cljs$core$IFn$_invoke$arity$1(inst_14828) : inst_14820.call(null,inst_14828));
var inst_14850 = cljs.core.not(inst_14849);
var inst_14851 = ((inst_14848) && (inst_14850));
var state_14871__$1 = state_14871;
var statearr_15149_15205 = state_14871__$1;
(statearr_15149_15205[(2)] = inst_14851);

(statearr_15149_15205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (10))){
var inst_14770 = (state_14871[(8)]);
var inst_14791 = (state_14871[(2)]);
var inst_14792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14791,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14791,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14791,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14795 = inst_14770;
var state_14871__$1 = (function (){var statearr_15150 = state_14871;
(statearr_15150[(16)] = inst_14792);

(statearr_15150[(17)] = inst_14793);

(statearr_15150[(7)] = inst_14795);

(statearr_15150[(18)] = inst_14794);

return statearr_15150;
})();
var statearr_15151_15206 = state_14871__$1;
(statearr_15151_15206[(2)] = null);

(statearr_15151_15206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (18))){
var inst_14810 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_15152_15207 = state_14871__$1;
(statearr_15152_15207[(2)] = inst_14810);

(statearr_15152_15207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (37))){
var state_14871__$1 = state_14871;
var statearr_15153_15208 = state_14871__$1;
(statearr_15153_15208[(2)] = null);

(statearr_15153_15208[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (8))){
var inst_14770 = (state_14871[(8)]);
var inst_14788 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14770);
var state_14871__$1 = state_14871;
var statearr_15154_15209 = state_14871__$1;
(statearr_15154_15209[(2)] = inst_14788);

(statearr_15154_15209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___15159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13299__auto__,c__13500__auto___15159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13300__auto__ = null;
var cljs$core$async$mix_$_state_machine__13300__auto____0 = (function (){
var statearr_15155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15155[(0)] = cljs$core$async$mix_$_state_machine__13300__auto__);

(statearr_15155[(1)] = (1));

return statearr_15155;
});
var cljs$core$async$mix_$_state_machine__13300__auto____1 = (function (state_14871){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_14871);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e15156){if((e15156 instanceof Object)){
var ex__13303__auto__ = e15156;
var statearr_15157_15210 = state_14871;
(statearr_15157_15210[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15211 = state_14871;
state_14871 = G__15211;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13300__auto__ = function(state_14871){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13300__auto____1.call(this,state_14871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13300__auto____0;
cljs$core$async$mix_$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13300__auto____1;
return cljs$core$async$mix_$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___15159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13502__auto__ = (function (){var statearr_15158 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_15158[(6)] = c__13500__auto___15159);

return statearr_15158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___15159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15219 = arguments.length;
switch (G__15219) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15227 = arguments.length;
switch (G__15227) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__15225_SHARP_){
if(cljs.core.truth_((p1__15225_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15225_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15225_SHARP_.call(null,topic)))){
return p1__15225_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15225_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15234 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15235){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15235 = meta15235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15236,meta15235__$1){
var self__ = this;
var _15236__$1 = this;
return (new cljs.core.async.t_cljs$core$async15234(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15235__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15236){
var self__ = this;
var _15236__$1 = this;
return self__.meta15235;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15235","meta15235",-1624585746,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15234";

cljs.core.async.t_cljs$core$async15234.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15234");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15234.
 */
cljs.core.async.__GT_t_cljs$core$async15234 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15235){
return (new cljs.core.async.t_cljs$core$async15234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15235));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15234(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13500__auto___15372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___15372,mults,ensure_mult,p){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___15372,mults,ensure_mult,p){
return (function (state_15309){
var state_val_15310 = (state_15309[(1)]);
if((state_val_15310 === (7))){
var inst_15305 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15312_15374 = state_15309__$1;
(statearr_15312_15374[(2)] = inst_15305);

(statearr_15312_15374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (20))){
var state_15309__$1 = state_15309;
var statearr_15313_15375 = state_15309__$1;
(statearr_15313_15375[(2)] = null);

(statearr_15313_15375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (1))){
var state_15309__$1 = state_15309;
var statearr_15314_15376 = state_15309__$1;
(statearr_15314_15376[(2)] = null);

(statearr_15314_15376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (24))){
var inst_15288 = (state_15309[(7)]);
var inst_15297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15288);
var state_15309__$1 = state_15309;
var statearr_15315_15377 = state_15309__$1;
(statearr_15315_15377[(2)] = inst_15297);

(statearr_15315_15377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (4))){
var inst_15240 = (state_15309[(8)]);
var inst_15240__$1 = (state_15309[(2)]);
var inst_15241 = (inst_15240__$1 == null);
var state_15309__$1 = (function (){var statearr_15316 = state_15309;
(statearr_15316[(8)] = inst_15240__$1);

return statearr_15316;
})();
if(cljs.core.truth_(inst_15241)){
var statearr_15318_15378 = state_15309__$1;
(statearr_15318_15378[(1)] = (5));

} else {
var statearr_15319_15379 = state_15309__$1;
(statearr_15319_15379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (15))){
var inst_15282 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15322_15380 = state_15309__$1;
(statearr_15322_15380[(2)] = inst_15282);

(statearr_15322_15380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (21))){
var inst_15302 = (state_15309[(2)]);
var state_15309__$1 = (function (){var statearr_15323 = state_15309;
(statearr_15323[(9)] = inst_15302);

return statearr_15323;
})();
var statearr_15324_15386 = state_15309__$1;
(statearr_15324_15386[(2)] = null);

(statearr_15324_15386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (13))){
var inst_15264 = (state_15309[(10)]);
var inst_15266 = cljs.core.chunked_seq_QMARK_(inst_15264);
var state_15309__$1 = state_15309;
if(inst_15266){
var statearr_15325_15387 = state_15309__$1;
(statearr_15325_15387[(1)] = (16));

} else {
var statearr_15326_15388 = state_15309__$1;
(statearr_15326_15388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (22))){
var inst_15294 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
if(cljs.core.truth_(inst_15294)){
var statearr_15327_15389 = state_15309__$1;
(statearr_15327_15389[(1)] = (23));

} else {
var statearr_15328_15390 = state_15309__$1;
(statearr_15328_15390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (6))){
var inst_15288 = (state_15309[(7)]);
var inst_15290 = (state_15309[(11)]);
var inst_15240 = (state_15309[(8)]);
var inst_15288__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15240) : topic_fn.call(null,inst_15240));
var inst_15289 = cljs.core.deref(mults);
var inst_15290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15289,inst_15288__$1);
var state_15309__$1 = (function (){var statearr_15329 = state_15309;
(statearr_15329[(7)] = inst_15288__$1);

(statearr_15329[(11)] = inst_15290__$1);

return statearr_15329;
})();
if(cljs.core.truth_(inst_15290__$1)){
var statearr_15330_15391 = state_15309__$1;
(statearr_15330_15391[(1)] = (19));

} else {
var statearr_15331_15392 = state_15309__$1;
(statearr_15331_15392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (25))){
var inst_15299 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15332_15393 = state_15309__$1;
(statearr_15332_15393[(2)] = inst_15299);

(statearr_15332_15393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (17))){
var inst_15264 = (state_15309[(10)]);
var inst_15273 = cljs.core.first(inst_15264);
var inst_15274 = cljs.core.async.muxch_STAR_(inst_15273);
var inst_15275 = cljs.core.async.close_BANG_(inst_15274);
var inst_15276 = cljs.core.next(inst_15264);
var inst_15250 = inst_15276;
var inst_15251 = null;
var inst_15252 = (0);
var inst_15253 = (0);
var state_15309__$1 = (function (){var statearr_15334 = state_15309;
(statearr_15334[(12)] = inst_15250);

(statearr_15334[(13)] = inst_15275);

(statearr_15334[(14)] = inst_15252);

(statearr_15334[(15)] = inst_15253);

(statearr_15334[(16)] = inst_15251);

return statearr_15334;
})();
var statearr_15336_15400 = state_15309__$1;
(statearr_15336_15400[(2)] = null);

(statearr_15336_15400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (3))){
var inst_15307 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15309__$1,inst_15307);
} else {
if((state_val_15310 === (12))){
var inst_15284 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15337_15402 = state_15309__$1;
(statearr_15337_15402[(2)] = inst_15284);

(statearr_15337_15402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (2))){
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15309__$1,(4),ch);
} else {
if((state_val_15310 === (23))){
var state_15309__$1 = state_15309;
var statearr_15338_15403 = state_15309__$1;
(statearr_15338_15403[(2)] = null);

(statearr_15338_15403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (19))){
var inst_15290 = (state_15309[(11)]);
var inst_15240 = (state_15309[(8)]);
var inst_15292 = cljs.core.async.muxch_STAR_(inst_15290);
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15309__$1,(22),inst_15292,inst_15240);
} else {
if((state_val_15310 === (11))){
var inst_15250 = (state_15309[(12)]);
var inst_15264 = (state_15309[(10)]);
var inst_15264__$1 = cljs.core.seq(inst_15250);
var state_15309__$1 = (function (){var statearr_15339 = state_15309;
(statearr_15339[(10)] = inst_15264__$1);

return statearr_15339;
})();
if(inst_15264__$1){
var statearr_15340_15404 = state_15309__$1;
(statearr_15340_15404[(1)] = (13));

} else {
var statearr_15341_15405 = state_15309__$1;
(statearr_15341_15405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (9))){
var inst_15286 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15343_15406 = state_15309__$1;
(statearr_15343_15406[(2)] = inst_15286);

(statearr_15343_15406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (5))){
var inst_15247 = cljs.core.deref(mults);
var inst_15248 = cljs.core.vals(inst_15247);
var inst_15249 = cljs.core.seq(inst_15248);
var inst_15250 = inst_15249;
var inst_15251 = null;
var inst_15252 = (0);
var inst_15253 = (0);
var state_15309__$1 = (function (){var statearr_15347 = state_15309;
(statearr_15347[(12)] = inst_15250);

(statearr_15347[(14)] = inst_15252);

(statearr_15347[(15)] = inst_15253);

(statearr_15347[(16)] = inst_15251);

return statearr_15347;
})();
var statearr_15348_15407 = state_15309__$1;
(statearr_15348_15407[(2)] = null);

(statearr_15348_15407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (14))){
var state_15309__$1 = state_15309;
var statearr_15352_15409 = state_15309__$1;
(statearr_15352_15409[(2)] = null);

(statearr_15352_15409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (16))){
var inst_15264 = (state_15309[(10)]);
var inst_15268 = cljs.core.chunk_first(inst_15264);
var inst_15269 = cljs.core.chunk_rest(inst_15264);
var inst_15270 = cljs.core.count(inst_15268);
var inst_15250 = inst_15269;
var inst_15251 = inst_15268;
var inst_15252 = inst_15270;
var inst_15253 = (0);
var state_15309__$1 = (function (){var statearr_15353 = state_15309;
(statearr_15353[(12)] = inst_15250);

(statearr_15353[(14)] = inst_15252);

(statearr_15353[(15)] = inst_15253);

(statearr_15353[(16)] = inst_15251);

return statearr_15353;
})();
var statearr_15354_15410 = state_15309__$1;
(statearr_15354_15410[(2)] = null);

(statearr_15354_15410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (10))){
var inst_15250 = (state_15309[(12)]);
var inst_15252 = (state_15309[(14)]);
var inst_15253 = (state_15309[(15)]);
var inst_15251 = (state_15309[(16)]);
var inst_15258 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15251,inst_15253);
var inst_15259 = cljs.core.async.muxch_STAR_(inst_15258);
var inst_15260 = cljs.core.async.close_BANG_(inst_15259);
var inst_15261 = (inst_15253 + (1));
var tmp15349 = inst_15250;
var tmp15350 = inst_15252;
var tmp15351 = inst_15251;
var inst_15250__$1 = tmp15349;
var inst_15251__$1 = tmp15351;
var inst_15252__$1 = tmp15350;
var inst_15253__$1 = inst_15261;
var state_15309__$1 = (function (){var statearr_15356 = state_15309;
(statearr_15356[(12)] = inst_15250__$1);

(statearr_15356[(14)] = inst_15252__$1);

(statearr_15356[(15)] = inst_15253__$1);

(statearr_15356[(16)] = inst_15251__$1);

(statearr_15356[(17)] = inst_15260);

return statearr_15356;
})();
var statearr_15357_15411 = state_15309__$1;
(statearr_15357_15411[(2)] = null);

(statearr_15357_15411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (18))){
var inst_15279 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15358_15412 = state_15309__$1;
(statearr_15358_15412[(2)] = inst_15279);

(statearr_15358_15412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (8))){
var inst_15252 = (state_15309[(14)]);
var inst_15253 = (state_15309[(15)]);
var inst_15255 = (inst_15253 < inst_15252);
var inst_15256 = inst_15255;
var state_15309__$1 = state_15309;
if(cljs.core.truth_(inst_15256)){
var statearr_15359_15418 = state_15309__$1;
(statearr_15359_15418[(1)] = (10));

} else {
var statearr_15360_15419 = state_15309__$1;
(statearr_15360_15419[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___15372,mults,ensure_mult,p))
;
return ((function (switch__13299__auto__,c__13500__auto___15372,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_15361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15361[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_15361[(1)] = (1));

return statearr_15361;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_15309){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_15309);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e15362){if((e15362 instanceof Object)){
var ex__13303__auto__ = e15362;
var statearr_15363_15420 = state_15309;
(statearr_15363_15420[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15421 = state_15309;
state_15309 = G__15421;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_15309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_15309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___15372,mults,ensure_mult,p))
})();
var state__13502__auto__ = (function (){var statearr_15364 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_15364[(6)] = c__13500__auto___15372);

return statearr_15364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___15372,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15423 = arguments.length;
switch (G__15423) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15453 = arguments.length;
switch (G__15453) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15457 = arguments.length;
switch (G__15457) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13500__auto___15558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___15558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___15558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15508){
var state_val_15509 = (state_15508[(1)]);
if((state_val_15509 === (7))){
var state_15508__$1 = state_15508;
var statearr_15513_15559 = state_15508__$1;
(statearr_15513_15559[(2)] = null);

(statearr_15513_15559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (1))){
var state_15508__$1 = state_15508;
var statearr_15514_15560 = state_15508__$1;
(statearr_15514_15560[(2)] = null);

(statearr_15514_15560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (4))){
var inst_15466 = (state_15508[(7)]);
var inst_15468 = (inst_15466 < cnt);
var state_15508__$1 = state_15508;
if(cljs.core.truth_(inst_15468)){
var statearr_15515_15561 = state_15508__$1;
(statearr_15515_15561[(1)] = (6));

} else {
var statearr_15516_15562 = state_15508__$1;
(statearr_15516_15562[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (15))){
var inst_15498 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15517_15563 = state_15508__$1;
(statearr_15517_15563[(2)] = inst_15498);

(statearr_15517_15563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (13))){
var inst_15491 = cljs.core.async.close_BANG_(out);
var state_15508__$1 = state_15508;
var statearr_15518_15564 = state_15508__$1;
(statearr_15518_15564[(2)] = inst_15491);

(statearr_15518_15564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (6))){
var state_15508__$1 = state_15508;
var statearr_15519_15565 = state_15508__$1;
(statearr_15519_15565[(2)] = null);

(statearr_15519_15565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (3))){
var inst_15500 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15508__$1,inst_15500);
} else {
if((state_val_15509 === (12))){
var inst_15488 = (state_15508[(8)]);
var inst_15488__$1 = (state_15508[(2)]);
var inst_15489 = cljs.core.some(cljs.core.nil_QMARK_,inst_15488__$1);
var state_15508__$1 = (function (){var statearr_15526 = state_15508;
(statearr_15526[(8)] = inst_15488__$1);

return statearr_15526;
})();
if(cljs.core.truth_(inst_15489)){
var statearr_15529_15566 = state_15508__$1;
(statearr_15529_15566[(1)] = (13));

} else {
var statearr_15530_15567 = state_15508__$1;
(statearr_15530_15567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (2))){
var inst_15460 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15466 = (0);
var state_15508__$1 = (function (){var statearr_15531 = state_15508;
(statearr_15531[(7)] = inst_15466);

(statearr_15531[(9)] = inst_15460);

return statearr_15531;
})();
var statearr_15532_15568 = state_15508__$1;
(statearr_15532_15568[(2)] = null);

(statearr_15532_15568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (11))){
var inst_15466 = (state_15508[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15508,(10),Object,null,(9));
var inst_15475 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15466) : chs__$1.call(null,inst_15466));
var inst_15476 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15466) : done.call(null,inst_15466));
var inst_15477 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15475,inst_15476);
var state_15508__$1 = state_15508;
var statearr_15533_15569 = state_15508__$1;
(statearr_15533_15569[(2)] = inst_15477);


cljs.core.async.impl.ioc_helpers.process_exception(state_15508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (9))){
var inst_15466 = (state_15508[(7)]);
var inst_15479 = (state_15508[(2)]);
var inst_15480 = (inst_15466 + (1));
var inst_15466__$1 = inst_15480;
var state_15508__$1 = (function (){var statearr_15535 = state_15508;
(statearr_15535[(7)] = inst_15466__$1);

(statearr_15535[(10)] = inst_15479);

return statearr_15535;
})();
var statearr_15536_15577 = state_15508__$1;
(statearr_15536_15577[(2)] = null);

(statearr_15536_15577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (5))){
var inst_15486 = (state_15508[(2)]);
var state_15508__$1 = (function (){var statearr_15541 = state_15508;
(statearr_15541[(11)] = inst_15486);

return statearr_15541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15508__$1,(12),dchan);
} else {
if((state_val_15509 === (14))){
var inst_15488 = (state_15508[(8)]);
var inst_15493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15488);
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15508__$1,(16),out,inst_15493);
} else {
if((state_val_15509 === (16))){
var inst_15495 = (state_15508[(2)]);
var state_15508__$1 = (function (){var statearr_15543 = state_15508;
(statearr_15543[(12)] = inst_15495);

return statearr_15543;
})();
var statearr_15544_15580 = state_15508__$1;
(statearr_15544_15580[(2)] = null);

(statearr_15544_15580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (10))){
var inst_15470 = (state_15508[(2)]);
var inst_15471 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15508__$1 = (function (){var statearr_15545 = state_15508;
(statearr_15545[(13)] = inst_15470);

return statearr_15545;
})();
var statearr_15546_15581 = state_15508__$1;
(statearr_15546_15581[(2)] = inst_15471);


cljs.core.async.impl.ioc_helpers.process_exception(state_15508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (8))){
var inst_15484 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15548_15582 = state_15508__$1;
(statearr_15548_15582[(2)] = inst_15484);

(statearr_15548_15582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___15558,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13299__auto__,c__13500__auto___15558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_15549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15549[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_15549[(1)] = (1));

return statearr_15549;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_15508){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_15508);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e15553){if((e15553 instanceof Object)){
var ex__13303__auto__ = e15553;
var statearr_15554_15584 = state_15508;
(statearr_15554_15584[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15585 = state_15508;
state_15508 = G__15585;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_15508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_15508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___15558,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13502__auto__ = (function (){var statearr_15555 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_15555[(6)] = c__13500__auto___15558);

return statearr_15555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___15558,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15593 = arguments.length;
switch (G__15593) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13500__auto___15670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___15670,out){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___15670,out){
return (function (state_15630){
var state_val_15631 = (state_15630[(1)]);
if((state_val_15631 === (7))){
var inst_15610 = (state_15630[(7)]);
var inst_15609 = (state_15630[(8)]);
var inst_15609__$1 = (state_15630[(2)]);
var inst_15610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15609__$1,(0),null);
var inst_15611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15609__$1,(1),null);
var inst_15612 = (inst_15610__$1 == null);
var state_15630__$1 = (function (){var statearr_15632 = state_15630;
(statearr_15632[(7)] = inst_15610__$1);

(statearr_15632[(8)] = inst_15609__$1);

(statearr_15632[(9)] = inst_15611);

return statearr_15632;
})();
if(cljs.core.truth_(inst_15612)){
var statearr_15634_15672 = state_15630__$1;
(statearr_15634_15672[(1)] = (8));

} else {
var statearr_15635_15673 = state_15630__$1;
(statearr_15635_15673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (1))){
var inst_15595 = cljs.core.vec(chs);
var inst_15596 = inst_15595;
var state_15630__$1 = (function (){var statearr_15636 = state_15630;
(statearr_15636[(10)] = inst_15596);

return statearr_15636;
})();
var statearr_15637_15674 = state_15630__$1;
(statearr_15637_15674[(2)] = null);

(statearr_15637_15674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (4))){
var inst_15596 = (state_15630[(10)]);
var state_15630__$1 = state_15630;
return cljs.core.async.ioc_alts_BANG_(state_15630__$1,(7),inst_15596);
} else {
if((state_val_15631 === (6))){
var inst_15626 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15638_15680 = state_15630__$1;
(statearr_15638_15680[(2)] = inst_15626);

(statearr_15638_15680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (3))){
var inst_15628 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15630__$1,inst_15628);
} else {
if((state_val_15631 === (2))){
var inst_15596 = (state_15630[(10)]);
var inst_15602 = cljs.core.count(inst_15596);
var inst_15603 = (inst_15602 > (0));
var state_15630__$1 = state_15630;
if(cljs.core.truth_(inst_15603)){
var statearr_15640_15681 = state_15630__$1;
(statearr_15640_15681[(1)] = (4));

} else {
var statearr_15641_15682 = state_15630__$1;
(statearr_15641_15682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (11))){
var inst_15596 = (state_15630[(10)]);
var inst_15619 = (state_15630[(2)]);
var tmp15639 = inst_15596;
var inst_15596__$1 = tmp15639;
var state_15630__$1 = (function (){var statearr_15647 = state_15630;
(statearr_15647[(10)] = inst_15596__$1);

(statearr_15647[(11)] = inst_15619);

return statearr_15647;
})();
var statearr_15650_15683 = state_15630__$1;
(statearr_15650_15683[(2)] = null);

(statearr_15650_15683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (9))){
var inst_15610 = (state_15630[(7)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15630__$1,(11),out,inst_15610);
} else {
if((state_val_15631 === (5))){
var inst_15624 = cljs.core.async.close_BANG_(out);
var state_15630__$1 = state_15630;
var statearr_15655_15684 = state_15630__$1;
(statearr_15655_15684[(2)] = inst_15624);

(statearr_15655_15684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (10))){
var inst_15622 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15656_15685 = state_15630__$1;
(statearr_15656_15685[(2)] = inst_15622);

(statearr_15656_15685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (8))){
var inst_15610 = (state_15630[(7)]);
var inst_15596 = (state_15630[(10)]);
var inst_15609 = (state_15630[(8)]);
var inst_15611 = (state_15630[(9)]);
var inst_15614 = (function (){var cs = inst_15596;
var vec__15605 = inst_15609;
var v = inst_15610;
var c = inst_15611;
return ((function (cs,vec__15605,v,c,inst_15610,inst_15596,inst_15609,inst_15611,state_val_15631,c__13500__auto___15670,out){
return (function (p1__15591_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15591_SHARP_);
});
;})(cs,vec__15605,v,c,inst_15610,inst_15596,inst_15609,inst_15611,state_val_15631,c__13500__auto___15670,out))
})();
var inst_15615 = cljs.core.filterv(inst_15614,inst_15596);
var inst_15596__$1 = inst_15615;
var state_15630__$1 = (function (){var statearr_15657 = state_15630;
(statearr_15657[(10)] = inst_15596__$1);

return statearr_15657;
})();
var statearr_15658_15687 = state_15630__$1;
(statearr_15658_15687[(2)] = null);

(statearr_15658_15687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___15670,out))
;
return ((function (switch__13299__auto__,c__13500__auto___15670,out){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_15659 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15659[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_15659[(1)] = (1));

return statearr_15659;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_15630){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_15630);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e15660){if((e15660 instanceof Object)){
var ex__13303__auto__ = e15660;
var statearr_15662_15688 = state_15630;
(statearr_15662_15688[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15689 = state_15630;
state_15630 = G__15689;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_15630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_15630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___15670,out))
})();
var state__13502__auto__ = (function (){var statearr_15663 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_15663[(6)] = c__13500__auto___15670);

return statearr_15663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___15670,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15704 = arguments.length;
switch (G__15704) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13500__auto___15763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___15763,out){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___15763,out){
return (function (state_15728){
var state_val_15729 = (state_15728[(1)]);
if((state_val_15729 === (7))){
var inst_15710 = (state_15728[(7)]);
var inst_15710__$1 = (state_15728[(2)]);
var inst_15711 = (inst_15710__$1 == null);
var inst_15712 = cljs.core.not(inst_15711);
var state_15728__$1 = (function (){var statearr_15730 = state_15728;
(statearr_15730[(7)] = inst_15710__$1);

return statearr_15730;
})();
if(inst_15712){
var statearr_15732_15764 = state_15728__$1;
(statearr_15732_15764[(1)] = (8));

} else {
var statearr_15733_15765 = state_15728__$1;
(statearr_15733_15765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (1))){
var inst_15705 = (0);
var state_15728__$1 = (function (){var statearr_15734 = state_15728;
(statearr_15734[(8)] = inst_15705);

return statearr_15734;
})();
var statearr_15735_15766 = state_15728__$1;
(statearr_15735_15766[(2)] = null);

(statearr_15735_15766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (4))){
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15728__$1,(7),ch);
} else {
if((state_val_15729 === (6))){
var inst_15723 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15741_15767 = state_15728__$1;
(statearr_15741_15767[(2)] = inst_15723);

(statearr_15741_15767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (3))){
var inst_15725 = (state_15728[(2)]);
var inst_15726 = cljs.core.async.close_BANG_(out);
var state_15728__$1 = (function (){var statearr_15742 = state_15728;
(statearr_15742[(9)] = inst_15725);

return statearr_15742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15728__$1,inst_15726);
} else {
if((state_val_15729 === (2))){
var inst_15705 = (state_15728[(8)]);
var inst_15707 = (inst_15705 < n);
var state_15728__$1 = state_15728;
if(cljs.core.truth_(inst_15707)){
var statearr_15743_15771 = state_15728__$1;
(statearr_15743_15771[(1)] = (4));

} else {
var statearr_15745_15772 = state_15728__$1;
(statearr_15745_15772[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (11))){
var inst_15705 = (state_15728[(8)]);
var inst_15715 = (state_15728[(2)]);
var inst_15716 = (inst_15705 + (1));
var inst_15705__$1 = inst_15716;
var state_15728__$1 = (function (){var statearr_15746 = state_15728;
(statearr_15746[(10)] = inst_15715);

(statearr_15746[(8)] = inst_15705__$1);

return statearr_15746;
})();
var statearr_15747_15779 = state_15728__$1;
(statearr_15747_15779[(2)] = null);

(statearr_15747_15779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (9))){
var state_15728__$1 = state_15728;
var statearr_15754_15784 = state_15728__$1;
(statearr_15754_15784[(2)] = null);

(statearr_15754_15784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (5))){
var state_15728__$1 = state_15728;
var statearr_15755_15787 = state_15728__$1;
(statearr_15755_15787[(2)] = null);

(statearr_15755_15787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (10))){
var inst_15720 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15756_15788 = state_15728__$1;
(statearr_15756_15788[(2)] = inst_15720);

(statearr_15756_15788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (8))){
var inst_15710 = (state_15728[(7)]);
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15728__$1,(11),out,inst_15710);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___15763,out))
;
return ((function (switch__13299__auto__,c__13500__auto___15763,out){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_15757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15757[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_15757[(1)] = (1));

return statearr_15757;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_15728){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_15728);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e15758){if((e15758 instanceof Object)){
var ex__13303__auto__ = e15758;
var statearr_15759_15789 = state_15728;
(statearr_15759_15789[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15790 = state_15728;
state_15728 = G__15790;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_15728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_15728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___15763,out))
})();
var state__13502__auto__ = (function (){var statearr_15760 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_15760[(6)] = c__13500__auto___15763);

return statearr_15760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___15763,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15792 = (function (f,ch,meta15793){
this.f = f;
this.ch = ch;
this.meta15793 = meta15793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15794,meta15793__$1){
var self__ = this;
var _15794__$1 = this;
return (new cljs.core.async.t_cljs$core$async15792(self__.f,self__.ch,meta15793__$1));
});

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15794){
var self__ = this;
var _15794__$1 = this;
return self__.meta15793;
});

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15801 = (function (f,ch,meta15793,_,fn1,meta15802){
this.f = f;
this.ch = ch;
this.meta15793 = meta15793;
this._ = _;
this.fn1 = fn1;
this.meta15802 = meta15802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15803,meta15802__$1){
var self__ = this;
var _15803__$1 = this;
return (new cljs.core.async.t_cljs$core$async15801(self__.f,self__.ch,self__.meta15793,self__._,self__.fn1,meta15802__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15803){
var self__ = this;
var _15803__$1 = this;
return self__.meta15802;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15801.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15801.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15791_SHARP_){
var G__15812 = (((p1__15791_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15791_SHARP_) : self__.f.call(null,p1__15791_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15812) : f1.call(null,G__15812));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15801.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15793","meta15793",1884241342,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15792","cljs.core.async/t_cljs$core$async15792",-1651209227,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15802","meta15802",-1318708037,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15801";

cljs.core.async.t_cljs$core$async15801.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15801");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15801.
 */
cljs.core.async.__GT_t_cljs$core$async15801 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15801(f__$1,ch__$1,meta15793__$1,___$2,fn1__$1,meta15802){
return (new cljs.core.async.t_cljs$core$async15801(f__$1,ch__$1,meta15793__$1,___$2,fn1__$1,meta15802));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15801(self__.f,self__.ch,self__.meta15793,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15813 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15813) : self__.f.call(null,G__15813));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15793","meta15793",1884241342,null)], null);
});

cljs.core.async.t_cljs$core$async15792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15792";

cljs.core.async.t_cljs$core$async15792.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15792");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15792.
 */
cljs.core.async.__GT_t_cljs$core$async15792 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15792(f__$1,ch__$1,meta15793){
return (new cljs.core.async.t_cljs$core$async15792(f__$1,ch__$1,meta15793));
});

}

return (new cljs.core.async.t_cljs$core$async15792(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15832 = (function (f,ch,meta15833){
this.f = f;
this.ch = ch;
this.meta15833 = meta15833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15834,meta15833__$1){
var self__ = this;
var _15834__$1 = this;
return (new cljs.core.async.t_cljs$core$async15832(self__.f,self__.ch,meta15833__$1));
});

cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15834){
var self__ = this;
var _15834__$1 = this;
return self__.meta15833;
});

cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15833","meta15833",-1248252655,null)], null);
});

cljs.core.async.t_cljs$core$async15832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15832";

cljs.core.async.t_cljs$core$async15832.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15832");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15832.
 */
cljs.core.async.__GT_t_cljs$core$async15832 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15832(f__$1,ch__$1,meta15833){
return (new cljs.core.async.t_cljs$core$async15832(f__$1,ch__$1,meta15833));
});

}

return (new cljs.core.async.t_cljs$core$async15832(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15850 = (function (p,ch,meta15851){
this.p = p;
this.ch = ch;
this.meta15851 = meta15851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15852,meta15851__$1){
var self__ = this;
var _15852__$1 = this;
return (new cljs.core.async.t_cljs$core$async15850(self__.p,self__.ch,meta15851__$1));
});

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15852){
var self__ = this;
var _15852__$1 = this;
return self__.meta15851;
});

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15851","meta15851",1829883237,null)], null);
});

cljs.core.async.t_cljs$core$async15850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15850";

cljs.core.async.t_cljs$core$async15850.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15850");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15850.
 */
cljs.core.async.__GT_t_cljs$core$async15850 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15850(p__$1,ch__$1,meta15851){
return (new cljs.core.async.t_cljs$core$async15850(p__$1,ch__$1,meta15851));
});

}

return (new cljs.core.async.t_cljs$core$async15850(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15875 = arguments.length;
switch (G__15875) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13500__auto___15930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___15930,out){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___15930,out){
return (function (state_15902){
var state_val_15903 = (state_15902[(1)]);
if((state_val_15903 === (7))){
var inst_15898 = (state_15902[(2)]);
var state_15902__$1 = state_15902;
var statearr_15904_15931 = state_15902__$1;
(statearr_15904_15931[(2)] = inst_15898);

(statearr_15904_15931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (1))){
var state_15902__$1 = state_15902;
var statearr_15905_15932 = state_15902__$1;
(statearr_15905_15932[(2)] = null);

(statearr_15905_15932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (4))){
var inst_15884 = (state_15902[(7)]);
var inst_15884__$1 = (state_15902[(2)]);
var inst_15885 = (inst_15884__$1 == null);
var state_15902__$1 = (function (){var statearr_15906 = state_15902;
(statearr_15906[(7)] = inst_15884__$1);

return statearr_15906;
})();
if(cljs.core.truth_(inst_15885)){
var statearr_15907_15933 = state_15902__$1;
(statearr_15907_15933[(1)] = (5));

} else {
var statearr_15908_15935 = state_15902__$1;
(statearr_15908_15935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (6))){
var inst_15884 = (state_15902[(7)]);
var inst_15889 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15884) : p.call(null,inst_15884));
var state_15902__$1 = state_15902;
if(cljs.core.truth_(inst_15889)){
var statearr_15909_15936 = state_15902__$1;
(statearr_15909_15936[(1)] = (8));

} else {
var statearr_15910_15937 = state_15902__$1;
(statearr_15910_15937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (3))){
var inst_15900 = (state_15902[(2)]);
var state_15902__$1 = state_15902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15902__$1,inst_15900);
} else {
if((state_val_15903 === (2))){
var state_15902__$1 = state_15902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15902__$1,(4),ch);
} else {
if((state_val_15903 === (11))){
var inst_15892 = (state_15902[(2)]);
var state_15902__$1 = state_15902;
var statearr_15920_15938 = state_15902__$1;
(statearr_15920_15938[(2)] = inst_15892);

(statearr_15920_15938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (9))){
var state_15902__$1 = state_15902;
var statearr_15921_15939 = state_15902__$1;
(statearr_15921_15939[(2)] = null);

(statearr_15921_15939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (5))){
var inst_15887 = cljs.core.async.close_BANG_(out);
var state_15902__$1 = state_15902;
var statearr_15922_15940 = state_15902__$1;
(statearr_15922_15940[(2)] = inst_15887);

(statearr_15922_15940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (10))){
var inst_15895 = (state_15902[(2)]);
var state_15902__$1 = (function (){var statearr_15923 = state_15902;
(statearr_15923[(8)] = inst_15895);

return statearr_15923;
})();
var statearr_15924_15941 = state_15902__$1;
(statearr_15924_15941[(2)] = null);

(statearr_15924_15941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (8))){
var inst_15884 = (state_15902[(7)]);
var state_15902__$1 = state_15902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15902__$1,(11),out,inst_15884);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___15930,out))
;
return ((function (switch__13299__auto__,c__13500__auto___15930,out){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_15925 = [null,null,null,null,null,null,null,null,null];
(statearr_15925[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_15925[(1)] = (1));

return statearr_15925;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_15902){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_15902);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e15926){if((e15926 instanceof Object)){
var ex__13303__auto__ = e15926;
var statearr_15927_15949 = state_15902;
(statearr_15927_15949[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15954 = state_15902;
state_15902 = G__15954;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_15902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_15902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___15930,out))
})();
var state__13502__auto__ = (function (){var statearr_15928 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_15928[(6)] = c__13500__auto___15930);

return statearr_15928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___15930,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15966 = arguments.length;
switch (G__15966) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto__){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto__){
return (function (state_16034){
var state_val_16035 = (state_16034[(1)]);
if((state_val_16035 === (7))){
var inst_16030 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16037_16104 = state_16034__$1;
(statearr_16037_16104[(2)] = inst_16030);

(statearr_16037_16104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (20))){
var inst_16000 = (state_16034[(7)]);
var inst_16011 = (state_16034[(2)]);
var inst_16012 = cljs.core.next(inst_16000);
var inst_15986 = inst_16012;
var inst_15987 = null;
var inst_15988 = (0);
var inst_15989 = (0);
var state_16034__$1 = (function (){var statearr_16038 = state_16034;
(statearr_16038[(8)] = inst_15989);

(statearr_16038[(9)] = inst_16011);

(statearr_16038[(10)] = inst_15987);

(statearr_16038[(11)] = inst_15988);

(statearr_16038[(12)] = inst_15986);

return statearr_16038;
})();
var statearr_16039_16111 = state_16034__$1;
(statearr_16039_16111[(2)] = null);

(statearr_16039_16111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (1))){
var state_16034__$1 = state_16034;
var statearr_16040_16112 = state_16034__$1;
(statearr_16040_16112[(2)] = null);

(statearr_16040_16112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (4))){
var inst_15971 = (state_16034[(13)]);
var inst_15971__$1 = (state_16034[(2)]);
var inst_15972 = (inst_15971__$1 == null);
var state_16034__$1 = (function (){var statearr_16042 = state_16034;
(statearr_16042[(13)] = inst_15971__$1);

return statearr_16042;
})();
if(cljs.core.truth_(inst_15972)){
var statearr_16043_16113 = state_16034__$1;
(statearr_16043_16113[(1)] = (5));

} else {
var statearr_16044_16114 = state_16034__$1;
(statearr_16044_16114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (15))){
var state_16034__$1 = state_16034;
var statearr_16058_16115 = state_16034__$1;
(statearr_16058_16115[(2)] = null);

(statearr_16058_16115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (21))){
var state_16034__$1 = state_16034;
var statearr_16059_16116 = state_16034__$1;
(statearr_16059_16116[(2)] = null);

(statearr_16059_16116[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (13))){
var inst_15989 = (state_16034[(8)]);
var inst_15987 = (state_16034[(10)]);
var inst_15988 = (state_16034[(11)]);
var inst_15986 = (state_16034[(12)]);
var inst_15996 = (state_16034[(2)]);
var inst_15997 = (inst_15989 + (1));
var tmp16045 = inst_15987;
var tmp16046 = inst_15988;
var tmp16047 = inst_15986;
var inst_15986__$1 = tmp16047;
var inst_15987__$1 = tmp16045;
var inst_15988__$1 = tmp16046;
var inst_15989__$1 = inst_15997;
var state_16034__$1 = (function (){var statearr_16060 = state_16034;
(statearr_16060[(8)] = inst_15989__$1);

(statearr_16060[(10)] = inst_15987__$1);

(statearr_16060[(14)] = inst_15996);

(statearr_16060[(11)] = inst_15988__$1);

(statearr_16060[(12)] = inst_15986__$1);

return statearr_16060;
})();
var statearr_16061_16117 = state_16034__$1;
(statearr_16061_16117[(2)] = null);

(statearr_16061_16117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (22))){
var state_16034__$1 = state_16034;
var statearr_16062_16118 = state_16034__$1;
(statearr_16062_16118[(2)] = null);

(statearr_16062_16118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (6))){
var inst_15971 = (state_16034[(13)]);
var inst_15984 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15971) : f.call(null,inst_15971));
var inst_15985 = cljs.core.seq(inst_15984);
var inst_15986 = inst_15985;
var inst_15987 = null;
var inst_15988 = (0);
var inst_15989 = (0);
var state_16034__$1 = (function (){var statearr_16063 = state_16034;
(statearr_16063[(8)] = inst_15989);

(statearr_16063[(10)] = inst_15987);

(statearr_16063[(11)] = inst_15988);

(statearr_16063[(12)] = inst_15986);

return statearr_16063;
})();
var statearr_16064_16120 = state_16034__$1;
(statearr_16064_16120[(2)] = null);

(statearr_16064_16120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (17))){
var inst_16000 = (state_16034[(7)]);
var inst_16004 = cljs.core.chunk_first(inst_16000);
var inst_16005 = cljs.core.chunk_rest(inst_16000);
var inst_16006 = cljs.core.count(inst_16004);
var inst_15986 = inst_16005;
var inst_15987 = inst_16004;
var inst_15988 = inst_16006;
var inst_15989 = (0);
var state_16034__$1 = (function (){var statearr_16065 = state_16034;
(statearr_16065[(8)] = inst_15989);

(statearr_16065[(10)] = inst_15987);

(statearr_16065[(11)] = inst_15988);

(statearr_16065[(12)] = inst_15986);

return statearr_16065;
})();
var statearr_16066_16125 = state_16034__$1;
(statearr_16066_16125[(2)] = null);

(statearr_16066_16125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (3))){
var inst_16032 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16034__$1,inst_16032);
} else {
if((state_val_16035 === (12))){
var inst_16020 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16067_16127 = state_16034__$1;
(statearr_16067_16127[(2)] = inst_16020);

(statearr_16067_16127[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (2))){
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16034__$1,(4),in$);
} else {
if((state_val_16035 === (23))){
var inst_16028 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16068_16128 = state_16034__$1;
(statearr_16068_16128[(2)] = inst_16028);

(statearr_16068_16128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (19))){
var inst_16015 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16069_16129 = state_16034__$1;
(statearr_16069_16129[(2)] = inst_16015);

(statearr_16069_16129[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (11))){
var inst_16000 = (state_16034[(7)]);
var inst_15986 = (state_16034[(12)]);
var inst_16000__$1 = cljs.core.seq(inst_15986);
var state_16034__$1 = (function (){var statearr_16070 = state_16034;
(statearr_16070[(7)] = inst_16000__$1);

return statearr_16070;
})();
if(inst_16000__$1){
var statearr_16071_16131 = state_16034__$1;
(statearr_16071_16131[(1)] = (14));

} else {
var statearr_16072_16132 = state_16034__$1;
(statearr_16072_16132[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (9))){
var inst_16022 = (state_16034[(2)]);
var inst_16023 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16034__$1 = (function (){var statearr_16074 = state_16034;
(statearr_16074[(15)] = inst_16022);

return statearr_16074;
})();
if(cljs.core.truth_(inst_16023)){
var statearr_16075_16144 = state_16034__$1;
(statearr_16075_16144[(1)] = (21));

} else {
var statearr_16076_16145 = state_16034__$1;
(statearr_16076_16145[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (5))){
var inst_15974 = cljs.core.async.close_BANG_(out);
var state_16034__$1 = state_16034;
var statearr_16077_16146 = state_16034__$1;
(statearr_16077_16146[(2)] = inst_15974);

(statearr_16077_16146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (14))){
var inst_16000 = (state_16034[(7)]);
var inst_16002 = cljs.core.chunked_seq_QMARK_(inst_16000);
var state_16034__$1 = state_16034;
if(inst_16002){
var statearr_16078_16147 = state_16034__$1;
(statearr_16078_16147[(1)] = (17));

} else {
var statearr_16079_16148 = state_16034__$1;
(statearr_16079_16148[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (16))){
var inst_16018 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16080_16149 = state_16034__$1;
(statearr_16080_16149[(2)] = inst_16018);

(statearr_16080_16149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (10))){
var inst_15989 = (state_16034[(8)]);
var inst_15987 = (state_16034[(10)]);
var inst_15994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15987,inst_15989);
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16034__$1,(13),out,inst_15994);
} else {
if((state_val_16035 === (18))){
var inst_16000 = (state_16034[(7)]);
var inst_16009 = cljs.core.first(inst_16000);
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16034__$1,(20),out,inst_16009);
} else {
if((state_val_16035 === (8))){
var inst_15989 = (state_16034[(8)]);
var inst_15988 = (state_16034[(11)]);
var inst_15991 = (inst_15989 < inst_15988);
var inst_15992 = inst_15991;
var state_16034__$1 = state_16034;
if(cljs.core.truth_(inst_15992)){
var statearr_16081_16150 = state_16034__$1;
(statearr_16081_16150[(1)] = (10));

} else {
var statearr_16082_16151 = state_16034__$1;
(statearr_16082_16151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto__))
;
return ((function (switch__13299__auto__,c__13500__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13300__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13300__auto____0 = (function (){
var statearr_16083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16083[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13300__auto__);

(statearr_16083[(1)] = (1));

return statearr_16083;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13300__auto____1 = (function (state_16034){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_16034);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e16084){if((e16084 instanceof Object)){
var ex__13303__auto__ = e16084;
var statearr_16085_16152 = state_16034;
(statearr_16085_16152[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16153 = state_16034;
state_16034 = G__16153;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13300__auto__ = function(state_16034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13300__auto____1.call(this,state_16034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13300__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13300__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto__))
})();
var state__13502__auto__ = (function (){var statearr_16093 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_16093[(6)] = c__13500__auto__);

return statearr_16093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto__))
);

return c__13500__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16156 = arguments.length;
switch (G__16156) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16170 = arguments.length;
switch (G__16170) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16187 = arguments.length;
switch (G__16187) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13500__auto___16253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___16253,out){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___16253,out){
return (function (state_16211){
var state_val_16212 = (state_16211[(1)]);
if((state_val_16212 === (7))){
var inst_16206 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
var statearr_16214_16254 = state_16211__$1;
(statearr_16214_16254[(2)] = inst_16206);

(statearr_16214_16254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (1))){
var inst_16188 = null;
var state_16211__$1 = (function (){var statearr_16215 = state_16211;
(statearr_16215[(7)] = inst_16188);

return statearr_16215;
})();
var statearr_16220_16255 = state_16211__$1;
(statearr_16220_16255[(2)] = null);

(statearr_16220_16255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (4))){
var inst_16191 = (state_16211[(8)]);
var inst_16191__$1 = (state_16211[(2)]);
var inst_16192 = (inst_16191__$1 == null);
var inst_16193 = cljs.core.not(inst_16192);
var state_16211__$1 = (function (){var statearr_16221 = state_16211;
(statearr_16221[(8)] = inst_16191__$1);

return statearr_16221;
})();
if(inst_16193){
var statearr_16222_16256 = state_16211__$1;
(statearr_16222_16256[(1)] = (5));

} else {
var statearr_16223_16258 = state_16211__$1;
(statearr_16223_16258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (6))){
var state_16211__$1 = state_16211;
var statearr_16225_16259 = state_16211__$1;
(statearr_16225_16259[(2)] = null);

(statearr_16225_16259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (3))){
var inst_16208 = (state_16211[(2)]);
var inst_16209 = cljs.core.async.close_BANG_(out);
var state_16211__$1 = (function (){var statearr_16226 = state_16211;
(statearr_16226[(9)] = inst_16208);

return statearr_16226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16211__$1,inst_16209);
} else {
if((state_val_16212 === (2))){
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16211__$1,(4),ch);
} else {
if((state_val_16212 === (11))){
var inst_16191 = (state_16211[(8)]);
var inst_16200 = (state_16211[(2)]);
var inst_16188 = inst_16191;
var state_16211__$1 = (function (){var statearr_16227 = state_16211;
(statearr_16227[(10)] = inst_16200);

(statearr_16227[(7)] = inst_16188);

return statearr_16227;
})();
var statearr_16228_16260 = state_16211__$1;
(statearr_16228_16260[(2)] = null);

(statearr_16228_16260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (9))){
var inst_16191 = (state_16211[(8)]);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16211__$1,(11),out,inst_16191);
} else {
if((state_val_16212 === (5))){
var inst_16188 = (state_16211[(7)]);
var inst_16191 = (state_16211[(8)]);
var inst_16195 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16191,inst_16188);
var state_16211__$1 = state_16211;
if(inst_16195){
var statearr_16231_16261 = state_16211__$1;
(statearr_16231_16261[(1)] = (8));

} else {
var statearr_16232_16262 = state_16211__$1;
(statearr_16232_16262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (10))){
var inst_16203 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
var statearr_16245_16263 = state_16211__$1;
(statearr_16245_16263[(2)] = inst_16203);

(statearr_16245_16263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (8))){
var inst_16188 = (state_16211[(7)]);
var tmp16230 = inst_16188;
var inst_16188__$1 = tmp16230;
var state_16211__$1 = (function (){var statearr_16246 = state_16211;
(statearr_16246[(7)] = inst_16188__$1);

return statearr_16246;
})();
var statearr_16247_16264 = state_16211__$1;
(statearr_16247_16264[(2)] = null);

(statearr_16247_16264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___16253,out))
;
return ((function (switch__13299__auto__,c__13500__auto___16253,out){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_16248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16248[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_16248[(1)] = (1));

return statearr_16248;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_16211){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_16211);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e16249){if((e16249 instanceof Object)){
var ex__13303__auto__ = e16249;
var statearr_16250_16268 = state_16211;
(statearr_16250_16268[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16273 = state_16211;
state_16211 = G__16273;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_16211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_16211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___16253,out))
})();
var state__13502__auto__ = (function (){var statearr_16251 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_16251[(6)] = c__13500__auto___16253);

return statearr_16251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___16253,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16289 = arguments.length;
switch (G__16289) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13500__auto___16381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___16381,out){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___16381,out){
return (function (state_16333){
var state_val_16334 = (state_16333[(1)]);
if((state_val_16334 === (7))){
var inst_16329 = (state_16333[(2)]);
var state_16333__$1 = state_16333;
var statearr_16336_16383 = state_16333__$1;
(statearr_16336_16383[(2)] = inst_16329);

(statearr_16336_16383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (1))){
var inst_16296 = (new Array(n));
var inst_16297 = inst_16296;
var inst_16298 = (0);
var state_16333__$1 = (function (){var statearr_16337 = state_16333;
(statearr_16337[(7)] = inst_16297);

(statearr_16337[(8)] = inst_16298);

return statearr_16337;
})();
var statearr_16338_16384 = state_16333__$1;
(statearr_16338_16384[(2)] = null);

(statearr_16338_16384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (4))){
var inst_16301 = (state_16333[(9)]);
var inst_16301__$1 = (state_16333[(2)]);
var inst_16302 = (inst_16301__$1 == null);
var inst_16303 = cljs.core.not(inst_16302);
var state_16333__$1 = (function (){var statearr_16339 = state_16333;
(statearr_16339[(9)] = inst_16301__$1);

return statearr_16339;
})();
if(inst_16303){
var statearr_16340_16385 = state_16333__$1;
(statearr_16340_16385[(1)] = (5));

} else {
var statearr_16341_16386 = state_16333__$1;
(statearr_16341_16386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (15))){
var inst_16323 = (state_16333[(2)]);
var state_16333__$1 = state_16333;
var statearr_16344_16387 = state_16333__$1;
(statearr_16344_16387[(2)] = inst_16323);

(statearr_16344_16387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (13))){
var state_16333__$1 = state_16333;
var statearr_16347_16388 = state_16333__$1;
(statearr_16347_16388[(2)] = null);

(statearr_16347_16388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (6))){
var inst_16298 = (state_16333[(8)]);
var inst_16319 = (inst_16298 > (0));
var state_16333__$1 = state_16333;
if(cljs.core.truth_(inst_16319)){
var statearr_16348_16389 = state_16333__$1;
(statearr_16348_16389[(1)] = (12));

} else {
var statearr_16349_16390 = state_16333__$1;
(statearr_16349_16390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (3))){
var inst_16331 = (state_16333[(2)]);
var state_16333__$1 = state_16333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16333__$1,inst_16331);
} else {
if((state_val_16334 === (12))){
var inst_16297 = (state_16333[(7)]);
var inst_16321 = cljs.core.vec(inst_16297);
var state_16333__$1 = state_16333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16333__$1,(15),out,inst_16321);
} else {
if((state_val_16334 === (2))){
var state_16333__$1 = state_16333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16333__$1,(4),ch);
} else {
if((state_val_16334 === (11))){
var inst_16313 = (state_16333[(2)]);
var inst_16314 = (new Array(n));
var inst_16297 = inst_16314;
var inst_16298 = (0);
var state_16333__$1 = (function (){var statearr_16351 = state_16333;
(statearr_16351[(7)] = inst_16297);

(statearr_16351[(8)] = inst_16298);

(statearr_16351[(10)] = inst_16313);

return statearr_16351;
})();
var statearr_16352_16391 = state_16333__$1;
(statearr_16352_16391[(2)] = null);

(statearr_16352_16391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (9))){
var inst_16297 = (state_16333[(7)]);
var inst_16311 = cljs.core.vec(inst_16297);
var state_16333__$1 = state_16333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16333__$1,(11),out,inst_16311);
} else {
if((state_val_16334 === (5))){
var inst_16301 = (state_16333[(9)]);
var inst_16297 = (state_16333[(7)]);
var inst_16306 = (state_16333[(11)]);
var inst_16298 = (state_16333[(8)]);
var inst_16305 = (inst_16297[inst_16298] = inst_16301);
var inst_16306__$1 = (inst_16298 + (1));
var inst_16307 = (inst_16306__$1 < n);
var state_16333__$1 = (function (){var statearr_16354 = state_16333;
(statearr_16354[(12)] = inst_16305);

(statearr_16354[(11)] = inst_16306__$1);

return statearr_16354;
})();
if(cljs.core.truth_(inst_16307)){
var statearr_16355_16401 = state_16333__$1;
(statearr_16355_16401[(1)] = (8));

} else {
var statearr_16369_16404 = state_16333__$1;
(statearr_16369_16404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (14))){
var inst_16326 = (state_16333[(2)]);
var inst_16327 = cljs.core.async.close_BANG_(out);
var state_16333__$1 = (function (){var statearr_16371 = state_16333;
(statearr_16371[(13)] = inst_16326);

return statearr_16371;
})();
var statearr_16372_16409 = state_16333__$1;
(statearr_16372_16409[(2)] = inst_16327);

(statearr_16372_16409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (10))){
var inst_16317 = (state_16333[(2)]);
var state_16333__$1 = state_16333;
var statearr_16373_16414 = state_16333__$1;
(statearr_16373_16414[(2)] = inst_16317);

(statearr_16373_16414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16334 === (8))){
var inst_16297 = (state_16333[(7)]);
var inst_16306 = (state_16333[(11)]);
var tmp16370 = inst_16297;
var inst_16297__$1 = tmp16370;
var inst_16298 = inst_16306;
var state_16333__$1 = (function (){var statearr_16374 = state_16333;
(statearr_16374[(7)] = inst_16297__$1);

(statearr_16374[(8)] = inst_16298);

return statearr_16374;
})();
var statearr_16375_16419 = state_16333__$1;
(statearr_16375_16419[(2)] = null);

(statearr_16375_16419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___16381,out))
;
return ((function (switch__13299__auto__,c__13500__auto___16381,out){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_16376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16376[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_16376[(1)] = (1));

return statearr_16376;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_16333){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_16333);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e16377){if((e16377 instanceof Object)){
var ex__13303__auto__ = e16377;
var statearr_16378_16426 = state_16333;
(statearr_16378_16426[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16427 = state_16333;
state_16333 = G__16427;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_16333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_16333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___16381,out))
})();
var state__13502__auto__ = (function (){var statearr_16379 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_16379[(6)] = c__13500__auto___16381);

return statearr_16379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___16381,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16429 = arguments.length;
switch (G__16429) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13500__auto___16521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13500__auto___16521,out){
return (function (){
var f__13501__auto__ = (function (){var switch__13299__auto__ = ((function (c__13500__auto___16521,out){
return (function (state_16477){
var state_val_16478 = (state_16477[(1)]);
if((state_val_16478 === (7))){
var inst_16468 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
var statearr_16480_16522 = state_16477__$1;
(statearr_16480_16522[(2)] = inst_16468);

(statearr_16480_16522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (1))){
var inst_16430 = [];
var inst_16431 = inst_16430;
var inst_16432 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16477__$1 = (function (){var statearr_16481 = state_16477;
(statearr_16481[(7)] = inst_16431);

(statearr_16481[(8)] = inst_16432);

return statearr_16481;
})();
var statearr_16482_16526 = state_16477__$1;
(statearr_16482_16526[(2)] = null);

(statearr_16482_16526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (4))){
var inst_16435 = (state_16477[(9)]);
var inst_16435__$1 = (state_16477[(2)]);
var inst_16436 = (inst_16435__$1 == null);
var inst_16437 = cljs.core.not(inst_16436);
var state_16477__$1 = (function (){var statearr_16483 = state_16477;
(statearr_16483[(9)] = inst_16435__$1);

return statearr_16483;
})();
if(inst_16437){
var statearr_16484_16529 = state_16477__$1;
(statearr_16484_16529[(1)] = (5));

} else {
var statearr_16485_16530 = state_16477__$1;
(statearr_16485_16530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (15))){
var inst_16462 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
var statearr_16486_16535 = state_16477__$1;
(statearr_16486_16535[(2)] = inst_16462);

(statearr_16486_16535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (13))){
var state_16477__$1 = state_16477;
var statearr_16501_16538 = state_16477__$1;
(statearr_16501_16538[(2)] = null);

(statearr_16501_16538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (6))){
var inst_16431 = (state_16477[(7)]);
var inst_16457 = inst_16431.length;
var inst_16458 = (inst_16457 > (0));
var state_16477__$1 = state_16477;
if(cljs.core.truth_(inst_16458)){
var statearr_16502_16543 = state_16477__$1;
(statearr_16502_16543[(1)] = (12));

} else {
var statearr_16503_16546 = state_16477__$1;
(statearr_16503_16546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (3))){
var inst_16470 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16477__$1,inst_16470);
} else {
if((state_val_16478 === (12))){
var inst_16431 = (state_16477[(7)]);
var inst_16460 = cljs.core.vec(inst_16431);
var state_16477__$1 = state_16477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16477__$1,(15),out,inst_16460);
} else {
if((state_val_16478 === (2))){
var state_16477__$1 = state_16477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16477__$1,(4),ch);
} else {
if((state_val_16478 === (11))){
var inst_16435 = (state_16477[(9)]);
var inst_16439 = (state_16477[(10)]);
var inst_16449 = (state_16477[(2)]);
var inst_16451 = [];
var inst_16452 = inst_16451.push(inst_16435);
var inst_16431 = inst_16451;
var inst_16432 = inst_16439;
var state_16477__$1 = (function (){var statearr_16504 = state_16477;
(statearr_16504[(7)] = inst_16431);

(statearr_16504[(11)] = inst_16452);

(statearr_16504[(12)] = inst_16449);

(statearr_16504[(8)] = inst_16432);

return statearr_16504;
})();
var statearr_16505_16559 = state_16477__$1;
(statearr_16505_16559[(2)] = null);

(statearr_16505_16559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (9))){
var inst_16431 = (state_16477[(7)]);
var inst_16447 = cljs.core.vec(inst_16431);
var state_16477__$1 = state_16477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16477__$1,(11),out,inst_16447);
} else {
if((state_val_16478 === (5))){
var inst_16435 = (state_16477[(9)]);
var inst_16439 = (state_16477[(10)]);
var inst_16432 = (state_16477[(8)]);
var inst_16439__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16435) : f.call(null,inst_16435));
var inst_16440 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16439__$1,inst_16432);
var inst_16441 = cljs.core.keyword_identical_QMARK_(inst_16432,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16442 = ((inst_16440) || (inst_16441));
var state_16477__$1 = (function (){var statearr_16506 = state_16477;
(statearr_16506[(10)] = inst_16439__$1);

return statearr_16506;
})();
if(cljs.core.truth_(inst_16442)){
var statearr_16507_16562 = state_16477__$1;
(statearr_16507_16562[(1)] = (8));

} else {
var statearr_16508_16563 = state_16477__$1;
(statearr_16508_16563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (14))){
var inst_16465 = (state_16477[(2)]);
var inst_16466 = cljs.core.async.close_BANG_(out);
var state_16477__$1 = (function (){var statearr_16510 = state_16477;
(statearr_16510[(13)] = inst_16465);

return statearr_16510;
})();
var statearr_16511_16564 = state_16477__$1;
(statearr_16511_16564[(2)] = inst_16466);

(statearr_16511_16564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (10))){
var inst_16455 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
var statearr_16512_16565 = state_16477__$1;
(statearr_16512_16565[(2)] = inst_16455);

(statearr_16512_16565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (8))){
var inst_16431 = (state_16477[(7)]);
var inst_16435 = (state_16477[(9)]);
var inst_16439 = (state_16477[(10)]);
var inst_16444 = inst_16431.push(inst_16435);
var tmp16509 = inst_16431;
var inst_16431__$1 = tmp16509;
var inst_16432 = inst_16439;
var state_16477__$1 = (function (){var statearr_16513 = state_16477;
(statearr_16513[(7)] = inst_16431__$1);

(statearr_16513[(8)] = inst_16432);

(statearr_16513[(14)] = inst_16444);

return statearr_16513;
})();
var statearr_16515_16566 = state_16477__$1;
(statearr_16515_16566[(2)] = null);

(statearr_16515_16566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13500__auto___16521,out))
;
return ((function (switch__13299__auto__,c__13500__auto___16521,out){
return (function() {
var cljs$core$async$state_machine__13300__auto__ = null;
var cljs$core$async$state_machine__13300__auto____0 = (function (){
var statearr_16516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16516[(0)] = cljs$core$async$state_machine__13300__auto__);

(statearr_16516[(1)] = (1));

return statearr_16516;
});
var cljs$core$async$state_machine__13300__auto____1 = (function (state_16477){
while(true){
var ret_value__13301__auto__ = (function (){try{while(true){
var result__13302__auto__ = switch__13299__auto__(state_16477);
if(cljs.core.keyword_identical_QMARK_(result__13302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13302__auto__;
}
break;
}
}catch (e16517){if((e16517 instanceof Object)){
var ex__13303__auto__ = e16517;
var statearr_16518_16567 = state_16477;
(statearr_16518_16567[(5)] = ex__13303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16568 = state_16477;
state_16477 = G__16568;
continue;
} else {
return ret_value__13301__auto__;
}
break;
}
});
cljs$core$async$state_machine__13300__auto__ = function(state_16477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13300__auto____1.call(this,state_16477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13300__auto____0;
cljs$core$async$state_machine__13300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13300__auto____1;
return cljs$core$async$state_machine__13300__auto__;
})()
;})(switch__13299__auto__,c__13500__auto___16521,out))
})();
var state__13502__auto__ = (function (){var statearr_16519 = (f__13501__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13501__auto__.cljs$core$IFn$_invoke$arity$0() : f__13501__auto__.call(null));
(statearr_16519[(6)] = c__13500__auto___16521);

return statearr_16519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13502__auto__);
});})(c__13500__auto___16521,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
