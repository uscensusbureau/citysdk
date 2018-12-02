goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16741 = arguments.length;
switch (G__16741) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16746 = (function (f,blockable,meta16747){
this.f = f;
this.blockable = blockable;
this.meta16747 = meta16747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16748,meta16747__$1){
var self__ = this;
var _16748__$1 = this;
return (new cljs.core.async.t_cljs$core$async16746(self__.f,self__.blockable,meta16747__$1));
});

cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16748){
var self__ = this;
var _16748__$1 = this;
return self__.meta16747;
});

cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16747","meta16747",-1416344946,null)], null);
});

cljs.core.async.t_cljs$core$async16746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16746";

cljs.core.async.t_cljs$core$async16746.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16746");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16746.
 */
cljs.core.async.__GT_t_cljs$core$async16746 = (function cljs$core$async$__GT_t_cljs$core$async16746(f__$1,blockable__$1,meta16747){
return (new cljs.core.async.t_cljs$core$async16746(f__$1,blockable__$1,meta16747));
});

}

return (new cljs.core.async.t_cljs$core$async16746(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
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
var G__16769 = arguments.length;
switch (G__16769) {
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
var G__16777 = arguments.length;
switch (G__16777) {
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
var G__16799 = arguments.length;
switch (G__16799) {
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
var val_18553 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18553) : fn1.call(null,val_18553));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18553,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18553) : fn1.call(null,val_18553));
});})(val_18553,ret))
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
var G__16805 = arguments.length;
switch (G__16805) {
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
var n__4518__auto___18555 = n;
var x_18556 = (0);
while(true){
if((x_18556 < n__4518__auto___18555)){
(a[x_18556] = (0));

var G__18557 = (x_18556 + (1));
x_18556 = G__18557;
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

var G__18565 = (i + (1));
i = G__18565;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16818 = (function (flag,meta16819){
this.flag = flag;
this.meta16819 = meta16819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16820,meta16819__$1){
var self__ = this;
var _16820__$1 = this;
return (new cljs.core.async.t_cljs$core$async16818(self__.flag,meta16819__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16820){
var self__ = this;
var _16820__$1 = this;
return self__.meta16819;
});})(flag))
;

cljs.core.async.t_cljs$core$async16818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16818.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16819","meta16819",782014449,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16818";

cljs.core.async.t_cljs$core$async16818.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16818");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16818.
 */
cljs.core.async.__GT_t_cljs$core$async16818 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16818(flag__$1,meta16819){
return (new cljs.core.async.t_cljs$core$async16818(flag__$1,meta16819));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16818(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16839 = (function (flag,cb,meta16840){
this.flag = flag;
this.cb = cb;
this.meta16840 = meta16840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16841,meta16840__$1){
var self__ = this;
var _16841__$1 = this;
return (new cljs.core.async.t_cljs$core$async16839(self__.flag,self__.cb,meta16840__$1));
});

cljs.core.async.t_cljs$core$async16839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16841){
var self__ = this;
var _16841__$1 = this;
return self__.meta16840;
});

cljs.core.async.t_cljs$core$async16839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16840","meta16840",1924599581,null)], null);
});

cljs.core.async.t_cljs$core$async16839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16839";

cljs.core.async.t_cljs$core$async16839.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16839");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16839.
 */
cljs.core.async.__GT_t_cljs$core$async16839 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16839(flag__$1,cb__$1,meta16840){
return (new cljs.core.async.t_cljs$core$async16839(flag__$1,cb__$1,meta16840));
});

}

return (new cljs.core.async.t_cljs$core$async16839(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16861_SHARP_){
var G__16867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16861_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16867) : fret.call(null,G__16867));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16862_SHARP_){
var G__16869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16862_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16869) : fret.call(null,G__16869));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18568 = (i + (1));
i = G__18568;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___18569 = arguments.length;
var i__4642__auto___18570 = (0);
while(true){
if((i__4642__auto___18570 < len__4641__auto___18569)){
args__4647__auto__.push((arguments[i__4642__auto___18570]));

var G__18573 = (i__4642__auto___18570 + (1));
i__4642__auto___18570 = G__18573;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16880){
var map__16881 = p__16880;
var map__16881__$1 = (((((!((map__16881 == null))))?(((((map__16881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16881):map__16881);
var opts = map__16881__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16874){
var G__16875 = cljs.core.first(seq16874);
var seq16874__$1 = cljs.core.next(seq16874);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16875,seq16874__$1);
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
var G__16896 = arguments.length;
switch (G__16896) {
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
var c__16663__auto___18581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___18581){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___18581){
return (function (state_16957){
var state_val_16962 = (state_16957[(1)]);
if((state_val_16962 === (7))){
var inst_16951 = (state_16957[(2)]);
var state_16957__$1 = state_16957;
var statearr_17008_18582 = state_16957__$1;
(statearr_17008_18582[(2)] = inst_16951);

(statearr_17008_18582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (1))){
var state_16957__$1 = state_16957;
var statearr_17009_18584 = state_16957__$1;
(statearr_17009_18584[(2)] = null);

(statearr_17009_18584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (4))){
var inst_16921 = (state_16957[(7)]);
var inst_16921__$1 = (state_16957[(2)]);
var inst_16924 = (inst_16921__$1 == null);
var state_16957__$1 = (function (){var statearr_17010 = state_16957;
(statearr_17010[(7)] = inst_16921__$1);

return statearr_17010;
})();
if(cljs.core.truth_(inst_16924)){
var statearr_17011_18588 = state_16957__$1;
(statearr_17011_18588[(1)] = (5));

} else {
var statearr_17012_18589 = state_16957__$1;
(statearr_17012_18589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (13))){
var state_16957__$1 = state_16957;
var statearr_17017_18606 = state_16957__$1;
(statearr_17017_18606[(2)] = null);

(statearr_17017_18606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (6))){
var inst_16921 = (state_16957[(7)]);
var state_16957__$1 = state_16957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16957__$1,(11),to,inst_16921);
} else {
if((state_val_16962 === (3))){
var inst_16953 = (state_16957[(2)]);
var state_16957__$1 = state_16957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16957__$1,inst_16953);
} else {
if((state_val_16962 === (12))){
var state_16957__$1 = state_16957;
var statearr_17024_18613 = state_16957__$1;
(statearr_17024_18613[(2)] = null);

(statearr_17024_18613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (2))){
var state_16957__$1 = state_16957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16957__$1,(4),from);
} else {
if((state_val_16962 === (11))){
var inst_16938 = (state_16957[(2)]);
var state_16957__$1 = state_16957;
if(cljs.core.truth_(inst_16938)){
var statearr_17025_18615 = state_16957__$1;
(statearr_17025_18615[(1)] = (12));

} else {
var statearr_17026_18616 = state_16957__$1;
(statearr_17026_18616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (9))){
var state_16957__$1 = state_16957;
var statearr_17030_18617 = state_16957__$1;
(statearr_17030_18617[(2)] = null);

(statearr_17030_18617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (5))){
var state_16957__$1 = state_16957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17031_18618 = state_16957__$1;
(statearr_17031_18618[(1)] = (8));

} else {
var statearr_17033_18621 = state_16957__$1;
(statearr_17033_18621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (14))){
var inst_16949 = (state_16957[(2)]);
var state_16957__$1 = state_16957;
var statearr_17034_18661 = state_16957__$1;
(statearr_17034_18661[(2)] = inst_16949);

(statearr_17034_18661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (10))){
var inst_16935 = (state_16957[(2)]);
var state_16957__$1 = state_16957;
var statearr_17035_18671 = state_16957__$1;
(statearr_17035_18671[(2)] = inst_16935);

(statearr_17035_18671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (8))){
var inst_16932 = cljs.core.async.close_BANG_(to);
var state_16957__$1 = state_16957;
var statearr_17039_18674 = state_16957__$1;
(statearr_17039_18674[(2)] = inst_16932);

(statearr_17039_18674[(1)] = (10));


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
});})(c__16663__auto___18581))
;
return ((function (switch__16488__auto__,c__16663__auto___18581){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_17041 = [null,null,null,null,null,null,null,null];
(statearr_17041[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_17041[(1)] = (1));

return statearr_17041;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_16957){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_16957);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17042){if((e17042 instanceof Object)){
var ex__16492__auto__ = e17042;
var statearr_17044_18677 = state_16957;
(statearr_17044_18677[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17042;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18678 = state_16957;
state_16957 = G__18678;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_16957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_16957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___18581))
})();
var state__16665__auto__ = (function (){var statearr_17045 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17045[(6)] = c__16663__auto___18581);

return statearr_17045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___18581))
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
return (function (p__17047){
var vec__17048 = p__17047;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17048,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17048,(1),null);
var job = vec__17048;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16663__auto___18681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___18681,res,vec__17048,v,p,job,jobs,results){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___18681,res,vec__17048,v,p,job,jobs,results){
return (function (state_17055){
var state_val_17056 = (state_17055[(1)]);
if((state_val_17056 === (1))){
var state_17055__$1 = state_17055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17055__$1,(2),res,v);
} else {
if((state_val_17056 === (2))){
var inst_17052 = (state_17055[(2)]);
var inst_17053 = cljs.core.async.close_BANG_(res);
var state_17055__$1 = (function (){var statearr_17058 = state_17055;
(statearr_17058[(7)] = inst_17052);

return statearr_17058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17055__$1,inst_17053);
} else {
return null;
}
}
});})(c__16663__auto___18681,res,vec__17048,v,p,job,jobs,results))
;
return ((function (switch__16488__auto__,c__16663__auto___18681,res,vec__17048,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0 = (function (){
var statearr_17059 = [null,null,null,null,null,null,null,null];
(statearr_17059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__);

(statearr_17059[(1)] = (1));

return statearr_17059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1 = (function (state_17055){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17055);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17060){if((e17060 instanceof Object)){
var ex__16492__auto__ = e17060;
var statearr_17061_18683 = state_17055;
(statearr_17061_18683[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18684 = state_17055;
state_17055 = G__18684;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = function(state_17055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1.call(this,state_17055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___18681,res,vec__17048,v,p,job,jobs,results))
})();
var state__16665__auto__ = (function (){var statearr_17066 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17066[(6)] = c__16663__auto___18681);

return statearr_17066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___18681,res,vec__17048,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17071){
var vec__17076 = p__17071;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17076,(1),null);
var job = vec__17076;
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
var n__4518__auto___18692 = n;
var __18693 = (0);
while(true){
if((__18693 < n__4518__auto___18692)){
var G__17079_18694 = type;
var G__17079_18695__$1 = (((G__17079_18694 instanceof cljs.core.Keyword))?G__17079_18694.fqn:null);
switch (G__17079_18695__$1) {
case "compute":
var c__16663__auto___18697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18693,c__16663__auto___18697,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (__18693,c__16663__auto___18697,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async){
return (function (state_17092){
var state_val_17093 = (state_17092[(1)]);
if((state_val_17093 === (1))){
var state_17092__$1 = state_17092;
var statearr_17094_18701 = state_17092__$1;
(statearr_17094_18701[(2)] = null);

(statearr_17094_18701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (2))){
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17092__$1,(4),jobs);
} else {
if((state_val_17093 === (3))){
var inst_17090 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17092__$1,inst_17090);
} else {
if((state_val_17093 === (4))){
var inst_17082 = (state_17092[(2)]);
var inst_17083 = process(inst_17082);
var state_17092__$1 = state_17092;
if(cljs.core.truth_(inst_17083)){
var statearr_17095_18702 = state_17092__$1;
(statearr_17095_18702[(1)] = (5));

} else {
var statearr_17096_18703 = state_17092__$1;
(statearr_17096_18703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (5))){
var state_17092__$1 = state_17092;
var statearr_17097_18704 = state_17092__$1;
(statearr_17097_18704[(2)] = null);

(statearr_17097_18704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (6))){
var state_17092__$1 = state_17092;
var statearr_17098_18705 = state_17092__$1;
(statearr_17098_18705[(2)] = null);

(statearr_17098_18705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (7))){
var inst_17088 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
var statearr_17099_18706 = state_17092__$1;
(statearr_17099_18706[(2)] = inst_17088);

(statearr_17099_18706[(1)] = (3));


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
});})(__18693,c__16663__auto___18697,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async))
;
return ((function (__18693,switch__16488__auto__,c__16663__auto___18697,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0 = (function (){
var statearr_17100 = [null,null,null,null,null,null,null];
(statearr_17100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__);

(statearr_17100[(1)] = (1));

return statearr_17100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1 = (function (state_17092){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17092);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17101){if((e17101 instanceof Object)){
var ex__16492__auto__ = e17101;
var statearr_17102_18707 = state_17092;
(statearr_17102_18707[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18708 = state_17092;
state_17092 = G__18708;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = function(state_17092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1.call(this,state_17092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__;
})()
;})(__18693,switch__16488__auto__,c__16663__auto___18697,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async))
})();
var state__16665__auto__ = (function (){var statearr_17103 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17103[(6)] = c__16663__auto___18697);

return statearr_17103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(__18693,c__16663__auto___18697,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async))
);


break;
case "async":
var c__16663__auto___18709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18693,c__16663__auto___18709,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (__18693,c__16663__auto___18709,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async){
return (function (state_17116){
var state_val_17117 = (state_17116[(1)]);
if((state_val_17117 === (1))){
var state_17116__$1 = state_17116;
var statearr_17118_18710 = state_17116__$1;
(statearr_17118_18710[(2)] = null);

(statearr_17118_18710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (2))){
var state_17116__$1 = state_17116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17116__$1,(4),jobs);
} else {
if((state_val_17117 === (3))){
var inst_17114 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17116__$1,inst_17114);
} else {
if((state_val_17117 === (4))){
var inst_17106 = (state_17116[(2)]);
var inst_17107 = async(inst_17106);
var state_17116__$1 = state_17116;
if(cljs.core.truth_(inst_17107)){
var statearr_17119_18711 = state_17116__$1;
(statearr_17119_18711[(1)] = (5));

} else {
var statearr_17120_18712 = state_17116__$1;
(statearr_17120_18712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (5))){
var state_17116__$1 = state_17116;
var statearr_17121_18713 = state_17116__$1;
(statearr_17121_18713[(2)] = null);

(statearr_17121_18713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (6))){
var state_17116__$1 = state_17116;
var statearr_17138_18714 = state_17116__$1;
(statearr_17138_18714[(2)] = null);

(statearr_17138_18714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (7))){
var inst_17112 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17139_18715 = state_17116__$1;
(statearr_17139_18715[(2)] = inst_17112);

(statearr_17139_18715[(1)] = (3));


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
});})(__18693,c__16663__auto___18709,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async))
;
return ((function (__18693,switch__16488__auto__,c__16663__auto___18709,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0 = (function (){
var statearr_17140 = [null,null,null,null,null,null,null];
(statearr_17140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__);

(statearr_17140[(1)] = (1));

return statearr_17140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1 = (function (state_17116){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17116);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17141){if((e17141 instanceof Object)){
var ex__16492__auto__ = e17141;
var statearr_17142_18716 = state_17116;
(statearr_17142_18716[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18717 = state_17116;
state_17116 = G__18717;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = function(state_17116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1.call(this,state_17116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__;
})()
;})(__18693,switch__16488__auto__,c__16663__auto___18709,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async))
})();
var state__16665__auto__ = (function (){var statearr_17143 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17143[(6)] = c__16663__auto___18709);

return statearr_17143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(__18693,c__16663__auto___18709,G__17079_18694,G__17079_18695__$1,n__4518__auto___18692,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17079_18695__$1)].join('')));

}

var G__18722 = (__18693 + (1));
__18693 = G__18722;
continue;
} else {
}
break;
}

var c__16663__auto___18723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___18723,jobs,results,process,async){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___18723,jobs,results,process,async){
return (function (state_17165){
var state_val_17166 = (state_17165[(1)]);
if((state_val_17166 === (1))){
var state_17165__$1 = state_17165;
var statearr_17167_18725 = state_17165__$1;
(statearr_17167_18725[(2)] = null);

(statearr_17167_18725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (2))){
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17165__$1,(4),from);
} else {
if((state_val_17166 === (3))){
var inst_17163 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17165__$1,inst_17163);
} else {
if((state_val_17166 === (4))){
var inst_17146 = (state_17165[(7)]);
var inst_17146__$1 = (state_17165[(2)]);
var inst_17147 = (inst_17146__$1 == null);
var state_17165__$1 = (function (){var statearr_17168 = state_17165;
(statearr_17168[(7)] = inst_17146__$1);

return statearr_17168;
})();
if(cljs.core.truth_(inst_17147)){
var statearr_17169_18727 = state_17165__$1;
(statearr_17169_18727[(1)] = (5));

} else {
var statearr_17170_18729 = state_17165__$1;
(statearr_17170_18729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (5))){
var inst_17149 = cljs.core.async.close_BANG_(jobs);
var state_17165__$1 = state_17165;
var statearr_17171_18730 = state_17165__$1;
(statearr_17171_18730[(2)] = inst_17149);

(statearr_17171_18730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (6))){
var inst_17151 = (state_17165[(8)]);
var inst_17146 = (state_17165[(7)]);
var inst_17151__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17153 = [inst_17146,inst_17151__$1];
var inst_17154 = (new cljs.core.PersistentVector(null,2,(5),inst_17152,inst_17153,null));
var state_17165__$1 = (function (){var statearr_17172 = state_17165;
(statearr_17172[(8)] = inst_17151__$1);

return statearr_17172;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17165__$1,(8),jobs,inst_17154);
} else {
if((state_val_17166 === (7))){
var inst_17161 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17173_18731 = state_17165__$1;
(statearr_17173_18731[(2)] = inst_17161);

(statearr_17173_18731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (8))){
var inst_17151 = (state_17165[(8)]);
var inst_17156 = (state_17165[(2)]);
var state_17165__$1 = (function (){var statearr_17174 = state_17165;
(statearr_17174[(9)] = inst_17156);

return statearr_17174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17165__$1,(9),results,inst_17151);
} else {
if((state_val_17166 === (9))){
var inst_17158 = (state_17165[(2)]);
var state_17165__$1 = (function (){var statearr_17175 = state_17165;
(statearr_17175[(10)] = inst_17158);

return statearr_17175;
})();
var statearr_17176_18734 = state_17165__$1;
(statearr_17176_18734[(2)] = null);

(statearr_17176_18734[(1)] = (2));


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
});})(c__16663__auto___18723,jobs,results,process,async))
;
return ((function (switch__16488__auto__,c__16663__auto___18723,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0 = (function (){
var statearr_17177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__);

(statearr_17177[(1)] = (1));

return statearr_17177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1 = (function (state_17165){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17165);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17178){if((e17178 instanceof Object)){
var ex__16492__auto__ = e17178;
var statearr_17179_18780 = state_17165;
(statearr_17179_18780[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18784 = state_17165;
state_17165 = G__18784;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = function(state_17165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1.call(this,state_17165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___18723,jobs,results,process,async))
})();
var state__16665__auto__ = (function (){var statearr_17180 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17180[(6)] = c__16663__auto___18723);

return statearr_17180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___18723,jobs,results,process,async))
);


var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__,jobs,results,process,async){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__,jobs,results,process,async){
return (function (state_17218){
var state_val_17219 = (state_17218[(1)]);
if((state_val_17219 === (7))){
var inst_17214 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
var statearr_17220_18788 = state_17218__$1;
(statearr_17220_18788[(2)] = inst_17214);

(statearr_17220_18788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (20))){
var state_17218__$1 = state_17218;
var statearr_17221_18789 = state_17218__$1;
(statearr_17221_18789[(2)] = null);

(statearr_17221_18789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (1))){
var state_17218__$1 = state_17218;
var statearr_17222_18790 = state_17218__$1;
(statearr_17222_18790[(2)] = null);

(statearr_17222_18790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (4))){
var inst_17183 = (state_17218[(7)]);
var inst_17183__$1 = (state_17218[(2)]);
var inst_17184 = (inst_17183__$1 == null);
var state_17218__$1 = (function (){var statearr_17223 = state_17218;
(statearr_17223[(7)] = inst_17183__$1);

return statearr_17223;
})();
if(cljs.core.truth_(inst_17184)){
var statearr_17224_18791 = state_17218__$1;
(statearr_17224_18791[(1)] = (5));

} else {
var statearr_17225_18792 = state_17218__$1;
(statearr_17225_18792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (15))){
var inst_17196 = (state_17218[(8)]);
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17218__$1,(18),to,inst_17196);
} else {
if((state_val_17219 === (21))){
var inst_17209 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
var statearr_17226_18794 = state_17218__$1;
(statearr_17226_18794[(2)] = inst_17209);

(statearr_17226_18794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (13))){
var inst_17211 = (state_17218[(2)]);
var state_17218__$1 = (function (){var statearr_17227 = state_17218;
(statearr_17227[(9)] = inst_17211);

return statearr_17227;
})();
var statearr_17228_18798 = state_17218__$1;
(statearr_17228_18798[(2)] = null);

(statearr_17228_18798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (6))){
var inst_17183 = (state_17218[(7)]);
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17218__$1,(11),inst_17183);
} else {
if((state_val_17219 === (17))){
var inst_17204 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
if(cljs.core.truth_(inst_17204)){
var statearr_17229_18801 = state_17218__$1;
(statearr_17229_18801[(1)] = (19));

} else {
var statearr_17230_18802 = state_17218__$1;
(statearr_17230_18802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (3))){
var inst_17216 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17218__$1,inst_17216);
} else {
if((state_val_17219 === (12))){
var inst_17193 = (state_17218[(10)]);
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17218__$1,(14),inst_17193);
} else {
if((state_val_17219 === (2))){
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17218__$1,(4),results);
} else {
if((state_val_17219 === (19))){
var state_17218__$1 = state_17218;
var statearr_17231_18805 = state_17218__$1;
(statearr_17231_18805[(2)] = null);

(statearr_17231_18805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (11))){
var inst_17193 = (state_17218[(2)]);
var state_17218__$1 = (function (){var statearr_17232 = state_17218;
(statearr_17232[(10)] = inst_17193);

return statearr_17232;
})();
var statearr_17233_18809 = state_17218__$1;
(statearr_17233_18809[(2)] = null);

(statearr_17233_18809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (9))){
var state_17218__$1 = state_17218;
var statearr_17234_18810 = state_17218__$1;
(statearr_17234_18810[(2)] = null);

(statearr_17234_18810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (5))){
var state_17218__$1 = state_17218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17235_18811 = state_17218__$1;
(statearr_17235_18811[(1)] = (8));

} else {
var statearr_17236_18812 = state_17218__$1;
(statearr_17236_18812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (14))){
var inst_17196 = (state_17218[(8)]);
var inst_17198 = (state_17218[(11)]);
var inst_17196__$1 = (state_17218[(2)]);
var inst_17197 = (inst_17196__$1 == null);
var inst_17198__$1 = cljs.core.not(inst_17197);
var state_17218__$1 = (function (){var statearr_17237 = state_17218;
(statearr_17237[(8)] = inst_17196__$1);

(statearr_17237[(11)] = inst_17198__$1);

return statearr_17237;
})();
if(inst_17198__$1){
var statearr_17238_18813 = state_17218__$1;
(statearr_17238_18813[(1)] = (15));

} else {
var statearr_17239_18814 = state_17218__$1;
(statearr_17239_18814[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (16))){
var inst_17198 = (state_17218[(11)]);
var state_17218__$1 = state_17218;
var statearr_17240_18815 = state_17218__$1;
(statearr_17240_18815[(2)] = inst_17198);

(statearr_17240_18815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (10))){
var inst_17190 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
var statearr_17241_18816 = state_17218__$1;
(statearr_17241_18816[(2)] = inst_17190);

(statearr_17241_18816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (18))){
var inst_17201 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
var statearr_17242_18817 = state_17218__$1;
(statearr_17242_18817[(2)] = inst_17201);

(statearr_17242_18817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17219 === (8))){
var inst_17187 = cljs.core.async.close_BANG_(to);
var state_17218__$1 = state_17218;
var statearr_17243_18818 = state_17218__$1;
(statearr_17243_18818[(2)] = inst_17187);

(statearr_17243_18818[(1)] = (10));


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
});})(c__16663__auto__,jobs,results,process,async))
;
return ((function (switch__16488__auto__,c__16663__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0 = (function (){
var statearr_17244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__);

(statearr_17244[(1)] = (1));

return statearr_17244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1 = (function (state_17218){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17218);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17245){if((e17245 instanceof Object)){
var ex__16492__auto__ = e17245;
var statearr_17246_18823 = state_17218;
(statearr_17246_18823[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18830 = state_17218;
state_17218 = G__18830;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__ = function(state_17218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1.call(this,state_17218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__,jobs,results,process,async))
})();
var state__16665__auto__ = (function (){var statearr_17247 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17247[(6)] = c__16663__auto__);

return statearr_17247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__,jobs,results,process,async))
);

return c__16663__auto__;
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
var G__17249 = arguments.length;
switch (G__17249) {
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
var G__17251 = arguments.length;
switch (G__17251) {
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
var G__17253 = arguments.length;
switch (G__17253) {
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
var c__16663__auto___18840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___18840,tc,fc){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___18840,tc,fc){
return (function (state_17279){
var state_val_17280 = (state_17279[(1)]);
if((state_val_17280 === (7))){
var inst_17275 = (state_17279[(2)]);
var state_17279__$1 = state_17279;
var statearr_17281_18841 = state_17279__$1;
(statearr_17281_18841[(2)] = inst_17275);

(statearr_17281_18841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (1))){
var state_17279__$1 = state_17279;
var statearr_17282_18842 = state_17279__$1;
(statearr_17282_18842[(2)] = null);

(statearr_17282_18842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (4))){
var inst_17256 = (state_17279[(7)]);
var inst_17256__$1 = (state_17279[(2)]);
var inst_17257 = (inst_17256__$1 == null);
var state_17279__$1 = (function (){var statearr_17283 = state_17279;
(statearr_17283[(7)] = inst_17256__$1);

return statearr_17283;
})();
if(cljs.core.truth_(inst_17257)){
var statearr_17284_18843 = state_17279__$1;
(statearr_17284_18843[(1)] = (5));

} else {
var statearr_17285_18844 = state_17279__$1;
(statearr_17285_18844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (13))){
var state_17279__$1 = state_17279;
var statearr_17286_18845 = state_17279__$1;
(statearr_17286_18845[(2)] = null);

(statearr_17286_18845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (6))){
var inst_17256 = (state_17279[(7)]);
var inst_17262 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17256) : p.call(null,inst_17256));
var state_17279__$1 = state_17279;
if(cljs.core.truth_(inst_17262)){
var statearr_17287_18847 = state_17279__$1;
(statearr_17287_18847[(1)] = (9));

} else {
var statearr_17288_18848 = state_17279__$1;
(statearr_17288_18848[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (3))){
var inst_17277 = (state_17279[(2)]);
var state_17279__$1 = state_17279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17279__$1,inst_17277);
} else {
if((state_val_17280 === (12))){
var state_17279__$1 = state_17279;
var statearr_17289_18850 = state_17279__$1;
(statearr_17289_18850[(2)] = null);

(statearr_17289_18850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (2))){
var state_17279__$1 = state_17279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17279__$1,(4),ch);
} else {
if((state_val_17280 === (11))){
var inst_17256 = (state_17279[(7)]);
var inst_17266 = (state_17279[(2)]);
var state_17279__$1 = state_17279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17279__$1,(8),inst_17266,inst_17256);
} else {
if((state_val_17280 === (9))){
var state_17279__$1 = state_17279;
var statearr_17290_18855 = state_17279__$1;
(statearr_17290_18855[(2)] = tc);

(statearr_17290_18855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (5))){
var inst_17259 = cljs.core.async.close_BANG_(tc);
var inst_17260 = cljs.core.async.close_BANG_(fc);
var state_17279__$1 = (function (){var statearr_17291 = state_17279;
(statearr_17291[(8)] = inst_17259);

return statearr_17291;
})();
var statearr_17292_18856 = state_17279__$1;
(statearr_17292_18856[(2)] = inst_17260);

(statearr_17292_18856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (14))){
var inst_17273 = (state_17279[(2)]);
var state_17279__$1 = state_17279;
var statearr_17293_18857 = state_17279__$1;
(statearr_17293_18857[(2)] = inst_17273);

(statearr_17293_18857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (10))){
var state_17279__$1 = state_17279;
var statearr_17294_18858 = state_17279__$1;
(statearr_17294_18858[(2)] = fc);

(statearr_17294_18858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (8))){
var inst_17268 = (state_17279[(2)]);
var state_17279__$1 = state_17279;
if(cljs.core.truth_(inst_17268)){
var statearr_17295_18859 = state_17279__$1;
(statearr_17295_18859[(1)] = (12));

} else {
var statearr_17296_18860 = state_17279__$1;
(statearr_17296_18860[(1)] = (13));

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
});})(c__16663__auto___18840,tc,fc))
;
return ((function (switch__16488__auto__,c__16663__auto___18840,tc,fc){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_17297 = [null,null,null,null,null,null,null,null,null];
(statearr_17297[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_17297[(1)] = (1));

return statearr_17297;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_17279){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17279);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17298){if((e17298 instanceof Object)){
var ex__16492__auto__ = e17298;
var statearr_17299_18864 = state_17279;
(statearr_17299_18864[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18866 = state_17279;
state_17279 = G__18866;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_17279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_17279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___18840,tc,fc))
})();
var state__16665__auto__ = (function (){var statearr_17300 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17300[(6)] = c__16663__auto___18840);

return statearr_17300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___18840,tc,fc))
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
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__){
return (function (state_17321){
var state_val_17322 = (state_17321[(1)]);
if((state_val_17322 === (7))){
var inst_17317 = (state_17321[(2)]);
var state_17321__$1 = state_17321;
var statearr_17323_18868 = state_17321__$1;
(statearr_17323_18868[(2)] = inst_17317);

(statearr_17323_18868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (1))){
var inst_17301 = init;
var state_17321__$1 = (function (){var statearr_17324 = state_17321;
(statearr_17324[(7)] = inst_17301);

return statearr_17324;
})();
var statearr_17325_18870 = state_17321__$1;
(statearr_17325_18870[(2)] = null);

(statearr_17325_18870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (4))){
var inst_17304 = (state_17321[(8)]);
var inst_17304__$1 = (state_17321[(2)]);
var inst_17305 = (inst_17304__$1 == null);
var state_17321__$1 = (function (){var statearr_17326 = state_17321;
(statearr_17326[(8)] = inst_17304__$1);

return statearr_17326;
})();
if(cljs.core.truth_(inst_17305)){
var statearr_17327_18871 = state_17321__$1;
(statearr_17327_18871[(1)] = (5));

} else {
var statearr_17328_18872 = state_17321__$1;
(statearr_17328_18872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (6))){
var inst_17308 = (state_17321[(9)]);
var inst_17304 = (state_17321[(8)]);
var inst_17301 = (state_17321[(7)]);
var inst_17308__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17301,inst_17304) : f.call(null,inst_17301,inst_17304));
var inst_17309 = cljs.core.reduced_QMARK_(inst_17308__$1);
var state_17321__$1 = (function (){var statearr_17329 = state_17321;
(statearr_17329[(9)] = inst_17308__$1);

return statearr_17329;
})();
if(inst_17309){
var statearr_17330_18873 = state_17321__$1;
(statearr_17330_18873[(1)] = (8));

} else {
var statearr_17331_18874 = state_17321__$1;
(statearr_17331_18874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (3))){
var inst_17319 = (state_17321[(2)]);
var state_17321__$1 = state_17321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17321__$1,inst_17319);
} else {
if((state_val_17322 === (2))){
var state_17321__$1 = state_17321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17321__$1,(4),ch);
} else {
if((state_val_17322 === (9))){
var inst_17308 = (state_17321[(9)]);
var inst_17301 = inst_17308;
var state_17321__$1 = (function (){var statearr_17332 = state_17321;
(statearr_17332[(7)] = inst_17301);

return statearr_17332;
})();
var statearr_17333_18875 = state_17321__$1;
(statearr_17333_18875[(2)] = null);

(statearr_17333_18875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (5))){
var inst_17301 = (state_17321[(7)]);
var state_17321__$1 = state_17321;
var statearr_17334_18876 = state_17321__$1;
(statearr_17334_18876[(2)] = inst_17301);

(statearr_17334_18876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (10))){
var inst_17315 = (state_17321[(2)]);
var state_17321__$1 = state_17321;
var statearr_17335_18877 = state_17321__$1;
(statearr_17335_18877[(2)] = inst_17315);

(statearr_17335_18877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (8))){
var inst_17308 = (state_17321[(9)]);
var inst_17311 = cljs.core.deref(inst_17308);
var state_17321__$1 = state_17321;
var statearr_17336_18879 = state_17321__$1;
(statearr_17336_18879[(2)] = inst_17311);

(statearr_17336_18879[(1)] = (10));


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
});})(c__16663__auto__))
;
return ((function (switch__16488__auto__,c__16663__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16489__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16489__auto____0 = (function (){
var statearr_17337 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17337[(0)] = cljs$core$async$reduce_$_state_machine__16489__auto__);

(statearr_17337[(1)] = (1));

return statearr_17337;
});
var cljs$core$async$reduce_$_state_machine__16489__auto____1 = (function (state_17321){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17321);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17338){if((e17338 instanceof Object)){
var ex__16492__auto__ = e17338;
var statearr_17339_18881 = state_17321;
(statearr_17339_18881[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18882 = state_17321;
state_17321 = G__18882;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16489__auto__ = function(state_17321){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16489__auto____1.call(this,state_17321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16489__auto____0;
cljs$core$async$reduce_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16489__auto____1;
return cljs$core$async$reduce_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__))
})();
var state__16665__auto__ = (function (){var statearr_17340 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17340[(6)] = c__16663__auto__);

return statearr_17340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__))
);

return c__16663__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__,f__$1){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__,f__$1){
return (function (state_17346){
var state_val_17347 = (state_17346[(1)]);
if((state_val_17347 === (1))){
var inst_17341 = cljs.core.async.reduce(f__$1,init,ch);
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17346__$1,(2),inst_17341);
} else {
if((state_val_17347 === (2))){
var inst_17343 = (state_17346[(2)]);
var inst_17344 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17343) : f__$1.call(null,inst_17343));
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17346__$1,inst_17344);
} else {
return null;
}
}
});})(c__16663__auto__,f__$1))
;
return ((function (switch__16488__auto__,c__16663__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16489__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16489__auto____0 = (function (){
var statearr_17348 = [null,null,null,null,null,null,null];
(statearr_17348[(0)] = cljs$core$async$transduce_$_state_machine__16489__auto__);

(statearr_17348[(1)] = (1));

return statearr_17348;
});
var cljs$core$async$transduce_$_state_machine__16489__auto____1 = (function (state_17346){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17346);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17349){if((e17349 instanceof Object)){
var ex__16492__auto__ = e17349;
var statearr_17350_18883 = state_17346;
(statearr_17350_18883[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18884 = state_17346;
state_17346 = G__18884;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16489__auto__ = function(state_17346){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16489__auto____1.call(this,state_17346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16489__auto____0;
cljs$core$async$transduce_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16489__auto____1;
return cljs$core$async$transduce_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__,f__$1))
})();
var state__16665__auto__ = (function (){var statearr_17351 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17351[(6)] = c__16663__auto__);

return statearr_17351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__,f__$1))
);

return c__16663__auto__;
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
var G__17353 = arguments.length;
switch (G__17353) {
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
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__){
return (function (state_17378){
var state_val_17379 = (state_17378[(1)]);
if((state_val_17379 === (7))){
var inst_17360 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17380_18887 = state_17378__$1;
(statearr_17380_18887[(2)] = inst_17360);

(statearr_17380_18887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (1))){
var inst_17354 = cljs.core.seq(coll);
var inst_17355 = inst_17354;
var state_17378__$1 = (function (){var statearr_17381 = state_17378;
(statearr_17381[(7)] = inst_17355);

return statearr_17381;
})();
var statearr_17382_18888 = state_17378__$1;
(statearr_17382_18888[(2)] = null);

(statearr_17382_18888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (4))){
var inst_17355 = (state_17378[(7)]);
var inst_17358 = cljs.core.first(inst_17355);
var state_17378__$1 = state_17378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17378__$1,(7),ch,inst_17358);
} else {
if((state_val_17379 === (13))){
var inst_17372 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17383_18893 = state_17378__$1;
(statearr_17383_18893[(2)] = inst_17372);

(statearr_17383_18893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (6))){
var inst_17363 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
if(cljs.core.truth_(inst_17363)){
var statearr_17384_18894 = state_17378__$1;
(statearr_17384_18894[(1)] = (8));

} else {
var statearr_17385_18895 = state_17378__$1;
(statearr_17385_18895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (3))){
var inst_17376 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17378__$1,inst_17376);
} else {
if((state_val_17379 === (12))){
var state_17378__$1 = state_17378;
var statearr_17386_18896 = state_17378__$1;
(statearr_17386_18896[(2)] = null);

(statearr_17386_18896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (2))){
var inst_17355 = (state_17378[(7)]);
var state_17378__$1 = state_17378;
if(cljs.core.truth_(inst_17355)){
var statearr_17387_18897 = state_17378__$1;
(statearr_17387_18897[(1)] = (4));

} else {
var statearr_17388_18898 = state_17378__$1;
(statearr_17388_18898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (11))){
var inst_17369 = cljs.core.async.close_BANG_(ch);
var state_17378__$1 = state_17378;
var statearr_17389_18899 = state_17378__$1;
(statearr_17389_18899[(2)] = inst_17369);

(statearr_17389_18899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (9))){
var state_17378__$1 = state_17378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17390_18900 = state_17378__$1;
(statearr_17390_18900[(1)] = (11));

} else {
var statearr_17391_18901 = state_17378__$1;
(statearr_17391_18901[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (5))){
var inst_17355 = (state_17378[(7)]);
var state_17378__$1 = state_17378;
var statearr_17392_18902 = state_17378__$1;
(statearr_17392_18902[(2)] = inst_17355);

(statearr_17392_18902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (10))){
var inst_17374 = (state_17378[(2)]);
var state_17378__$1 = state_17378;
var statearr_17393_18907 = state_17378__$1;
(statearr_17393_18907[(2)] = inst_17374);

(statearr_17393_18907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17379 === (8))){
var inst_17355 = (state_17378[(7)]);
var inst_17365 = cljs.core.next(inst_17355);
var inst_17355__$1 = inst_17365;
var state_17378__$1 = (function (){var statearr_17394 = state_17378;
(statearr_17394[(7)] = inst_17355__$1);

return statearr_17394;
})();
var statearr_17395_18911 = state_17378__$1;
(statearr_17395_18911[(2)] = null);

(statearr_17395_18911[(1)] = (2));


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
});})(c__16663__auto__))
;
return ((function (switch__16488__auto__,c__16663__auto__){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_17396 = [null,null,null,null,null,null,null,null];
(statearr_17396[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_17396[(1)] = (1));

return statearr_17396;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_17378){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17378);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17397){if((e17397 instanceof Object)){
var ex__16492__auto__ = e17397;
var statearr_17398_18916 = state_17378;
(statearr_17398_18916[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18920 = state_17378;
state_17378 = G__18920;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_17378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_17378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__))
})();
var state__16665__auto__ = (function (){var statearr_17399 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17399[(6)] = c__16663__auto__);

return statearr_17399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__))
);

return c__16663__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17400 = (function (ch,cs,meta17401){
this.ch = ch;
this.cs = cs;
this.meta17401 = meta17401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17402,meta17401__$1){
var self__ = this;
var _17402__$1 = this;
return (new cljs.core.async.t_cljs$core$async17400(self__.ch,self__.cs,meta17401__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17402){
var self__ = this;
var _17402__$1 = this;
return self__.meta17401;
});})(cs))
;

cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17400.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17400.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17401","meta17401",116556999,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17400.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17400";

cljs.core.async.t_cljs$core$async17400.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17400");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17400.
 */
cljs.core.async.__GT_t_cljs$core$async17400 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17400(ch__$1,cs__$1,meta17401){
return (new cljs.core.async.t_cljs$core$async17400(ch__$1,cs__$1,meta17401));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17400(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16663__auto___18933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___18933,cs,m,dchan,dctr,done){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___18933,cs,m,dchan,dctr,done){
return (function (state_17537){
var state_val_17538 = (state_17537[(1)]);
if((state_val_17538 === (7))){
var inst_17533 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17539_18934 = state_17537__$1;
(statearr_17539_18934[(2)] = inst_17533);

(statearr_17539_18934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (20))){
var inst_17436 = (state_17537[(7)]);
var inst_17448 = cljs.core.first(inst_17436);
var inst_17449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17448,(0),null);
var inst_17450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17448,(1),null);
var state_17537__$1 = (function (){var statearr_17540 = state_17537;
(statearr_17540[(8)] = inst_17449);

return statearr_17540;
})();
if(cljs.core.truth_(inst_17450)){
var statearr_17541_18939 = state_17537__$1;
(statearr_17541_18939[(1)] = (22));

} else {
var statearr_17542_18940 = state_17537__$1;
(statearr_17542_18940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (27))){
var inst_17478 = (state_17537[(9)]);
var inst_17480 = (state_17537[(10)]);
var inst_17405 = (state_17537[(11)]);
var inst_17485 = (state_17537[(12)]);
var inst_17485__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17478,inst_17480);
var inst_17486 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17485__$1,inst_17405,done);
var state_17537__$1 = (function (){var statearr_17543 = state_17537;
(statearr_17543[(12)] = inst_17485__$1);

return statearr_17543;
})();
if(cljs.core.truth_(inst_17486)){
var statearr_17544_18941 = state_17537__$1;
(statearr_17544_18941[(1)] = (30));

} else {
var statearr_17545_18946 = state_17537__$1;
(statearr_17545_18946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (1))){
var state_17537__$1 = state_17537;
var statearr_17546_18947 = state_17537__$1;
(statearr_17546_18947[(2)] = null);

(statearr_17546_18947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (24))){
var inst_17436 = (state_17537[(7)]);
var inst_17455 = (state_17537[(2)]);
var inst_17456 = cljs.core.next(inst_17436);
var inst_17414 = inst_17456;
var inst_17415 = null;
var inst_17416 = (0);
var inst_17417 = (0);
var state_17537__$1 = (function (){var statearr_17548 = state_17537;
(statearr_17548[(13)] = inst_17415);

(statearr_17548[(14)] = inst_17417);

(statearr_17548[(15)] = inst_17414);

(statearr_17548[(16)] = inst_17455);

(statearr_17548[(17)] = inst_17416);

return statearr_17548;
})();
var statearr_17552_18949 = state_17537__$1;
(statearr_17552_18949[(2)] = null);

(statearr_17552_18949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (39))){
var state_17537__$1 = state_17537;
var statearr_17556_18951 = state_17537__$1;
(statearr_17556_18951[(2)] = null);

(statearr_17556_18951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (4))){
var inst_17405 = (state_17537[(11)]);
var inst_17405__$1 = (state_17537[(2)]);
var inst_17406 = (inst_17405__$1 == null);
var state_17537__$1 = (function (){var statearr_17560 = state_17537;
(statearr_17560[(11)] = inst_17405__$1);

return statearr_17560;
})();
if(cljs.core.truth_(inst_17406)){
var statearr_17561_18952 = state_17537__$1;
(statearr_17561_18952[(1)] = (5));

} else {
var statearr_17562_18953 = state_17537__$1;
(statearr_17562_18953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (15))){
var inst_17415 = (state_17537[(13)]);
var inst_17417 = (state_17537[(14)]);
var inst_17414 = (state_17537[(15)]);
var inst_17416 = (state_17537[(17)]);
var inst_17432 = (state_17537[(2)]);
var inst_17433 = (inst_17417 + (1));
var tmp17553 = inst_17415;
var tmp17554 = inst_17414;
var tmp17555 = inst_17416;
var inst_17414__$1 = tmp17554;
var inst_17415__$1 = tmp17553;
var inst_17416__$1 = tmp17555;
var inst_17417__$1 = inst_17433;
var state_17537__$1 = (function (){var statearr_17563 = state_17537;
(statearr_17563[(18)] = inst_17432);

(statearr_17563[(13)] = inst_17415__$1);

(statearr_17563[(14)] = inst_17417__$1);

(statearr_17563[(15)] = inst_17414__$1);

(statearr_17563[(17)] = inst_17416__$1);

return statearr_17563;
})();
var statearr_17564_18958 = state_17537__$1;
(statearr_17564_18958[(2)] = null);

(statearr_17564_18958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (21))){
var inst_17459 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17568_18959 = state_17537__$1;
(statearr_17568_18959[(2)] = inst_17459);

(statearr_17568_18959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (31))){
var inst_17485 = (state_17537[(12)]);
var inst_17489 = done(null);
var inst_17490 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17485);
var state_17537__$1 = (function (){var statearr_17569 = state_17537;
(statearr_17569[(19)] = inst_17489);

return statearr_17569;
})();
var statearr_17570_18960 = state_17537__$1;
(statearr_17570_18960[(2)] = inst_17490);

(statearr_17570_18960[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (32))){
var inst_17478 = (state_17537[(9)]);
var inst_17480 = (state_17537[(10)]);
var inst_17477 = (state_17537[(20)]);
var inst_17479 = (state_17537[(21)]);
var inst_17492 = (state_17537[(2)]);
var inst_17493 = (inst_17480 + (1));
var tmp17565 = inst_17478;
var tmp17566 = inst_17477;
var tmp17567 = inst_17479;
var inst_17477__$1 = tmp17566;
var inst_17478__$1 = tmp17565;
var inst_17479__$1 = tmp17567;
var inst_17480__$1 = inst_17493;
var state_17537__$1 = (function (){var statearr_17573 = state_17537;
(statearr_17573[(9)] = inst_17478__$1);

(statearr_17573[(22)] = inst_17492);

(statearr_17573[(10)] = inst_17480__$1);

(statearr_17573[(20)] = inst_17477__$1);

(statearr_17573[(21)] = inst_17479__$1);

return statearr_17573;
})();
var statearr_17574_18961 = state_17537__$1;
(statearr_17574_18961[(2)] = null);

(statearr_17574_18961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (40))){
var inst_17505 = (state_17537[(23)]);
var inst_17509 = done(null);
var inst_17510 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17505);
var state_17537__$1 = (function (){var statearr_17575 = state_17537;
(statearr_17575[(24)] = inst_17509);

return statearr_17575;
})();
var statearr_17576_18962 = state_17537__$1;
(statearr_17576_18962[(2)] = inst_17510);

(statearr_17576_18962[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (33))){
var inst_17496 = (state_17537[(25)]);
var inst_17498 = cljs.core.chunked_seq_QMARK_(inst_17496);
var state_17537__$1 = state_17537;
if(inst_17498){
var statearr_17577_18963 = state_17537__$1;
(statearr_17577_18963[(1)] = (36));

} else {
var statearr_17578_18964 = state_17537__$1;
(statearr_17578_18964[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (13))){
var inst_17426 = (state_17537[(26)]);
var inst_17429 = cljs.core.async.close_BANG_(inst_17426);
var state_17537__$1 = state_17537;
var statearr_17579_18966 = state_17537__$1;
(statearr_17579_18966[(2)] = inst_17429);

(statearr_17579_18966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (22))){
var inst_17449 = (state_17537[(8)]);
var inst_17452 = cljs.core.async.close_BANG_(inst_17449);
var state_17537__$1 = state_17537;
var statearr_17580_18967 = state_17537__$1;
(statearr_17580_18967[(2)] = inst_17452);

(statearr_17580_18967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (36))){
var inst_17496 = (state_17537[(25)]);
var inst_17500 = cljs.core.chunk_first(inst_17496);
var inst_17501 = cljs.core.chunk_rest(inst_17496);
var inst_17502 = cljs.core.count(inst_17500);
var inst_17477 = inst_17501;
var inst_17478 = inst_17500;
var inst_17479 = inst_17502;
var inst_17480 = (0);
var state_17537__$1 = (function (){var statearr_17581 = state_17537;
(statearr_17581[(9)] = inst_17478);

(statearr_17581[(10)] = inst_17480);

(statearr_17581[(20)] = inst_17477);

(statearr_17581[(21)] = inst_17479);

return statearr_17581;
})();
var statearr_17582_18968 = state_17537__$1;
(statearr_17582_18968[(2)] = null);

(statearr_17582_18968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (41))){
var inst_17496 = (state_17537[(25)]);
var inst_17512 = (state_17537[(2)]);
var inst_17513 = cljs.core.next(inst_17496);
var inst_17477 = inst_17513;
var inst_17478 = null;
var inst_17479 = (0);
var inst_17480 = (0);
var state_17537__$1 = (function (){var statearr_17583 = state_17537;
(statearr_17583[(9)] = inst_17478);

(statearr_17583[(10)] = inst_17480);

(statearr_17583[(27)] = inst_17512);

(statearr_17583[(20)] = inst_17477);

(statearr_17583[(21)] = inst_17479);

return statearr_17583;
})();
var statearr_17584_18969 = state_17537__$1;
(statearr_17584_18969[(2)] = null);

(statearr_17584_18969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (43))){
var state_17537__$1 = state_17537;
var statearr_17585_18970 = state_17537__$1;
(statearr_17585_18970[(2)] = null);

(statearr_17585_18970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (29))){
var inst_17521 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17586_18974 = state_17537__$1;
(statearr_17586_18974[(2)] = inst_17521);

(statearr_17586_18974[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (44))){
var inst_17530 = (state_17537[(2)]);
var state_17537__$1 = (function (){var statearr_17587 = state_17537;
(statearr_17587[(28)] = inst_17530);

return statearr_17587;
})();
var statearr_17588_18979 = state_17537__$1;
(statearr_17588_18979[(2)] = null);

(statearr_17588_18979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (6))){
var inst_17469 = (state_17537[(29)]);
var inst_17468 = cljs.core.deref(cs);
var inst_17469__$1 = cljs.core.keys(inst_17468);
var inst_17470 = cljs.core.count(inst_17469__$1);
var inst_17471 = cljs.core.reset_BANG_(dctr,inst_17470);
var inst_17476 = cljs.core.seq(inst_17469__$1);
var inst_17477 = inst_17476;
var inst_17478 = null;
var inst_17479 = (0);
var inst_17480 = (0);
var state_17537__$1 = (function (){var statearr_17589 = state_17537;
(statearr_17589[(29)] = inst_17469__$1);

(statearr_17589[(9)] = inst_17478);

(statearr_17589[(10)] = inst_17480);

(statearr_17589[(30)] = inst_17471);

(statearr_17589[(20)] = inst_17477);

(statearr_17589[(21)] = inst_17479);

return statearr_17589;
})();
var statearr_17590_18980 = state_17537__$1;
(statearr_17590_18980[(2)] = null);

(statearr_17590_18980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (28))){
var inst_17477 = (state_17537[(20)]);
var inst_17496 = (state_17537[(25)]);
var inst_17496__$1 = cljs.core.seq(inst_17477);
var state_17537__$1 = (function (){var statearr_17591 = state_17537;
(statearr_17591[(25)] = inst_17496__$1);

return statearr_17591;
})();
if(inst_17496__$1){
var statearr_17592_18981 = state_17537__$1;
(statearr_17592_18981[(1)] = (33));

} else {
var statearr_17593_18982 = state_17537__$1;
(statearr_17593_18982[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (25))){
var inst_17480 = (state_17537[(10)]);
var inst_17479 = (state_17537[(21)]);
var inst_17482 = (inst_17480 < inst_17479);
var inst_17483 = inst_17482;
var state_17537__$1 = state_17537;
if(cljs.core.truth_(inst_17483)){
var statearr_17594_18983 = state_17537__$1;
(statearr_17594_18983[(1)] = (27));

} else {
var statearr_17595_18984 = state_17537__$1;
(statearr_17595_18984[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (34))){
var state_17537__$1 = state_17537;
var statearr_17596_18985 = state_17537__$1;
(statearr_17596_18985[(2)] = null);

(statearr_17596_18985[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (17))){
var state_17537__$1 = state_17537;
var statearr_17597_18986 = state_17537__$1;
(statearr_17597_18986[(2)] = null);

(statearr_17597_18986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (3))){
var inst_17535 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17537__$1,inst_17535);
} else {
if((state_val_17538 === (12))){
var inst_17464 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17646_18987 = state_17537__$1;
(statearr_17646_18987[(2)] = inst_17464);

(statearr_17646_18987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (2))){
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17537__$1,(4),ch);
} else {
if((state_val_17538 === (23))){
var state_17537__$1 = state_17537;
var statearr_17647_18988 = state_17537__$1;
(statearr_17647_18988[(2)] = null);

(statearr_17647_18988[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (35))){
var inst_17519 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17648_18989 = state_17537__$1;
(statearr_17648_18989[(2)] = inst_17519);

(statearr_17648_18989[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (19))){
var inst_17436 = (state_17537[(7)]);
var inst_17440 = cljs.core.chunk_first(inst_17436);
var inst_17441 = cljs.core.chunk_rest(inst_17436);
var inst_17442 = cljs.core.count(inst_17440);
var inst_17414 = inst_17441;
var inst_17415 = inst_17440;
var inst_17416 = inst_17442;
var inst_17417 = (0);
var state_17537__$1 = (function (){var statearr_17649 = state_17537;
(statearr_17649[(13)] = inst_17415);

(statearr_17649[(14)] = inst_17417);

(statearr_17649[(15)] = inst_17414);

(statearr_17649[(17)] = inst_17416);

return statearr_17649;
})();
var statearr_17650_18990 = state_17537__$1;
(statearr_17650_18990[(2)] = null);

(statearr_17650_18990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (11))){
var inst_17414 = (state_17537[(15)]);
var inst_17436 = (state_17537[(7)]);
var inst_17436__$1 = cljs.core.seq(inst_17414);
var state_17537__$1 = (function (){var statearr_17651 = state_17537;
(statearr_17651[(7)] = inst_17436__$1);

return statearr_17651;
})();
if(inst_17436__$1){
var statearr_17652_18991 = state_17537__$1;
(statearr_17652_18991[(1)] = (16));

} else {
var statearr_17653_18992 = state_17537__$1;
(statearr_17653_18992[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (9))){
var inst_17466 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17654_18993 = state_17537__$1;
(statearr_17654_18993[(2)] = inst_17466);

(statearr_17654_18993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (5))){
var inst_17412 = cljs.core.deref(cs);
var inst_17413 = cljs.core.seq(inst_17412);
var inst_17414 = inst_17413;
var inst_17415 = null;
var inst_17416 = (0);
var inst_17417 = (0);
var state_17537__$1 = (function (){var statearr_17655 = state_17537;
(statearr_17655[(13)] = inst_17415);

(statearr_17655[(14)] = inst_17417);

(statearr_17655[(15)] = inst_17414);

(statearr_17655[(17)] = inst_17416);

return statearr_17655;
})();
var statearr_17656_18994 = state_17537__$1;
(statearr_17656_18994[(2)] = null);

(statearr_17656_18994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (14))){
var state_17537__$1 = state_17537;
var statearr_17657_18995 = state_17537__$1;
(statearr_17657_18995[(2)] = null);

(statearr_17657_18995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (45))){
var inst_17527 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17658_18997 = state_17537__$1;
(statearr_17658_18997[(2)] = inst_17527);

(statearr_17658_18997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (26))){
var inst_17469 = (state_17537[(29)]);
var inst_17523 = (state_17537[(2)]);
var inst_17524 = cljs.core.seq(inst_17469);
var state_17537__$1 = (function (){var statearr_17659 = state_17537;
(statearr_17659[(31)] = inst_17523);

return statearr_17659;
})();
if(inst_17524){
var statearr_17660_18998 = state_17537__$1;
(statearr_17660_18998[(1)] = (42));

} else {
var statearr_17661_18999 = state_17537__$1;
(statearr_17661_18999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (16))){
var inst_17436 = (state_17537[(7)]);
var inst_17438 = cljs.core.chunked_seq_QMARK_(inst_17436);
var state_17537__$1 = state_17537;
if(inst_17438){
var statearr_17662_19001 = state_17537__$1;
(statearr_17662_19001[(1)] = (19));

} else {
var statearr_17663_19002 = state_17537__$1;
(statearr_17663_19002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (38))){
var inst_17516 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17664_19003 = state_17537__$1;
(statearr_17664_19003[(2)] = inst_17516);

(statearr_17664_19003[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (30))){
var state_17537__$1 = state_17537;
var statearr_17665_19005 = state_17537__$1;
(statearr_17665_19005[(2)] = null);

(statearr_17665_19005[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (10))){
var inst_17415 = (state_17537[(13)]);
var inst_17417 = (state_17537[(14)]);
var inst_17425 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17415,inst_17417);
var inst_17426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17425,(0),null);
var inst_17427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17425,(1),null);
var state_17537__$1 = (function (){var statearr_17666 = state_17537;
(statearr_17666[(26)] = inst_17426);

return statearr_17666;
})();
if(cljs.core.truth_(inst_17427)){
var statearr_17667_19007 = state_17537__$1;
(statearr_17667_19007[(1)] = (13));

} else {
var statearr_17668_19008 = state_17537__$1;
(statearr_17668_19008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (18))){
var inst_17462 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17669_19011 = state_17537__$1;
(statearr_17669_19011[(2)] = inst_17462);

(statearr_17669_19011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (42))){
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17537__$1,(45),dchan);
} else {
if((state_val_17538 === (37))){
var inst_17505 = (state_17537[(23)]);
var inst_17405 = (state_17537[(11)]);
var inst_17496 = (state_17537[(25)]);
var inst_17505__$1 = cljs.core.first(inst_17496);
var inst_17506 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17505__$1,inst_17405,done);
var state_17537__$1 = (function (){var statearr_17670 = state_17537;
(statearr_17670[(23)] = inst_17505__$1);

return statearr_17670;
})();
if(cljs.core.truth_(inst_17506)){
var statearr_17671_19015 = state_17537__$1;
(statearr_17671_19015[(1)] = (39));

} else {
var statearr_17672_19016 = state_17537__$1;
(statearr_17672_19016[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (8))){
var inst_17417 = (state_17537[(14)]);
var inst_17416 = (state_17537[(17)]);
var inst_17419 = (inst_17417 < inst_17416);
var inst_17420 = inst_17419;
var state_17537__$1 = state_17537;
if(cljs.core.truth_(inst_17420)){
var statearr_17673_19017 = state_17537__$1;
(statearr_17673_19017[(1)] = (10));

} else {
var statearr_17674_19018 = state_17537__$1;
(statearr_17674_19018[(1)] = (11));

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
});})(c__16663__auto___18933,cs,m,dchan,dctr,done))
;
return ((function (switch__16488__auto__,c__16663__auto___18933,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16489__auto__ = null;
var cljs$core$async$mult_$_state_machine__16489__auto____0 = (function (){
var statearr_17675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17675[(0)] = cljs$core$async$mult_$_state_machine__16489__auto__);

(statearr_17675[(1)] = (1));

return statearr_17675;
});
var cljs$core$async$mult_$_state_machine__16489__auto____1 = (function (state_17537){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17537);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17676){if((e17676 instanceof Object)){
var ex__16492__auto__ = e17676;
var statearr_17678_19020 = state_17537;
(statearr_17678_19020[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19025 = state_17537;
state_17537 = G__19025;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16489__auto__ = function(state_17537){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16489__auto____1.call(this,state_17537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16489__auto____0;
cljs$core$async$mult_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16489__auto____1;
return cljs$core$async$mult_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___18933,cs,m,dchan,dctr,done))
})();
var state__16665__auto__ = (function (){var statearr_17679 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17679[(6)] = c__16663__auto___18933);

return statearr_17679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___18933,cs,m,dchan,dctr,done))
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
var G__17681 = arguments.length;
switch (G__17681) {
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19037 = arguments.length;
var i__4642__auto___19038 = (0);
while(true){
if((i__4642__auto___19038 < len__4641__auto___19037)){
args__4647__auto__.push((arguments[i__4642__auto___19038]));

var G__19039 = (i__4642__auto___19038 + (1));
i__4642__auto___19038 = G__19039;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17729){
var map__17730 = p__17729;
var map__17730__$1 = (((((!((map__17730 == null))))?(((((map__17730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17730):map__17730);
var opts = map__17730__$1;
var statearr_17732_19044 = state;
(statearr_17732_19044[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__17730,map__17730__$1,opts){
return (function (val){
var statearr_17733_19045 = state;
(statearr_17733_19045[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17730,map__17730__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17734_19047 = state;
(statearr_17734_19047[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17725){
var G__17726 = cljs.core.first(seq17725);
var seq17725__$1 = cljs.core.next(seq17725);
var G__17727 = cljs.core.first(seq17725__$1);
var seq17725__$2 = cljs.core.next(seq17725__$1);
var G__17728 = cljs.core.first(seq17725__$2);
var seq17725__$3 = cljs.core.next(seq17725__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17726,G__17727,G__17728,seq17725__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17735 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17736){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17736 = meta17736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17737,meta17736__$1){
var self__ = this;
var _17737__$1 = this;
return (new cljs.core.async.t_cljs$core$async17735(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17736__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17737){
var self__ = this;
var _17737__$1 = this;
return self__.meta17736;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17735.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17736","meta17736",-12917485,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17735";

cljs.core.async.t_cljs$core$async17735.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17735");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17735.
 */
cljs.core.async.__GT_t_cljs$core$async17735 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17735(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17736){
return (new cljs.core.async.t_cljs$core$async17735(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17736));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17735(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16663__auto___19091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17839){
var state_val_17840 = (state_17839[(1)]);
if((state_val_17840 === (7))){
var inst_17754 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
var statearr_17841_19095 = state_17839__$1;
(statearr_17841_19095[(2)] = inst_17754);

(statearr_17841_19095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (20))){
var inst_17766 = (state_17839[(7)]);
var state_17839__$1 = state_17839;
var statearr_17842_19096 = state_17839__$1;
(statearr_17842_19096[(2)] = inst_17766);

(statearr_17842_19096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (27))){
var state_17839__$1 = state_17839;
var statearr_17843_19097 = state_17839__$1;
(statearr_17843_19097[(2)] = null);

(statearr_17843_19097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (1))){
var inst_17741 = (state_17839[(8)]);
var inst_17741__$1 = calc_state();
var inst_17743 = (inst_17741__$1 == null);
var inst_17744 = cljs.core.not(inst_17743);
var state_17839__$1 = (function (){var statearr_17844 = state_17839;
(statearr_17844[(8)] = inst_17741__$1);

return statearr_17844;
})();
if(inst_17744){
var statearr_17845_19098 = state_17839__$1;
(statearr_17845_19098[(1)] = (2));

} else {
var statearr_17846_19099 = state_17839__$1;
(statearr_17846_19099[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (24))){
var inst_17799 = (state_17839[(9)]);
var inst_17790 = (state_17839[(10)]);
var inst_17813 = (state_17839[(11)]);
var inst_17813__$1 = (inst_17790.cljs$core$IFn$_invoke$arity$1 ? inst_17790.cljs$core$IFn$_invoke$arity$1(inst_17799) : inst_17790.call(null,inst_17799));
var state_17839__$1 = (function (){var statearr_17847 = state_17839;
(statearr_17847[(11)] = inst_17813__$1);

return statearr_17847;
})();
if(cljs.core.truth_(inst_17813__$1)){
var statearr_17848_19100 = state_17839__$1;
(statearr_17848_19100[(1)] = (29));

} else {
var statearr_17849_19101 = state_17839__$1;
(statearr_17849_19101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (4))){
var inst_17757 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
if(cljs.core.truth_(inst_17757)){
var statearr_17850_19102 = state_17839__$1;
(statearr_17850_19102[(1)] = (8));

} else {
var statearr_17851_19103 = state_17839__$1;
(statearr_17851_19103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (15))){
var inst_17784 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
if(cljs.core.truth_(inst_17784)){
var statearr_17852_19104 = state_17839__$1;
(statearr_17852_19104[(1)] = (19));

} else {
var statearr_17853_19105 = state_17839__$1;
(statearr_17853_19105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (21))){
var inst_17789 = (state_17839[(12)]);
var inst_17789__$1 = (state_17839[(2)]);
var inst_17790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17789__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17789__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17789__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17839__$1 = (function (){var statearr_17854 = state_17839;
(statearr_17854[(10)] = inst_17790);

(statearr_17854[(12)] = inst_17789__$1);

(statearr_17854[(13)] = inst_17791);

return statearr_17854;
})();
return cljs.core.async.ioc_alts_BANG_(state_17839__$1,(22),inst_17792);
} else {
if((state_val_17840 === (31))){
var inst_17821 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
if(cljs.core.truth_(inst_17821)){
var statearr_17855_19106 = state_17839__$1;
(statearr_17855_19106[(1)] = (32));

} else {
var statearr_17856_19110 = state_17839__$1;
(statearr_17856_19110[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (32))){
var inst_17798 = (state_17839[(14)]);
var state_17839__$1 = state_17839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17839__$1,(35),out,inst_17798);
} else {
if((state_val_17840 === (33))){
var inst_17789 = (state_17839[(12)]);
var inst_17766 = inst_17789;
var state_17839__$1 = (function (){var statearr_17857 = state_17839;
(statearr_17857[(7)] = inst_17766);

return statearr_17857;
})();
var statearr_17858_19111 = state_17839__$1;
(statearr_17858_19111[(2)] = null);

(statearr_17858_19111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (13))){
var inst_17766 = (state_17839[(7)]);
var inst_17773 = inst_17766.cljs$lang$protocol_mask$partition0$;
var inst_17774 = (inst_17773 & (64));
var inst_17775 = inst_17766.cljs$core$ISeq$;
var inst_17776 = (cljs.core.PROTOCOL_SENTINEL === inst_17775);
var inst_17777 = ((inst_17774) || (inst_17776));
var state_17839__$1 = state_17839;
if(cljs.core.truth_(inst_17777)){
var statearr_17859_19114 = state_17839__$1;
(statearr_17859_19114[(1)] = (16));

} else {
var statearr_17860_19115 = state_17839__$1;
(statearr_17860_19115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (22))){
var inst_17799 = (state_17839[(9)]);
var inst_17798 = (state_17839[(14)]);
var inst_17797 = (state_17839[(2)]);
var inst_17798__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17797,(0),null);
var inst_17799__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17797,(1),null);
var inst_17800 = (inst_17798__$1 == null);
var inst_17801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17799__$1,change);
var inst_17802 = ((inst_17800) || (inst_17801));
var state_17839__$1 = (function (){var statearr_17861 = state_17839;
(statearr_17861[(9)] = inst_17799__$1);

(statearr_17861[(14)] = inst_17798__$1);

return statearr_17861;
})();
if(cljs.core.truth_(inst_17802)){
var statearr_17862_19116 = state_17839__$1;
(statearr_17862_19116[(1)] = (23));

} else {
var statearr_17863_19117 = state_17839__$1;
(statearr_17863_19117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (36))){
var inst_17789 = (state_17839[(12)]);
var inst_17766 = inst_17789;
var state_17839__$1 = (function (){var statearr_17864 = state_17839;
(statearr_17864[(7)] = inst_17766);

return statearr_17864;
})();
var statearr_17865_19136 = state_17839__$1;
(statearr_17865_19136[(2)] = null);

(statearr_17865_19136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (29))){
var inst_17813 = (state_17839[(11)]);
var state_17839__$1 = state_17839;
var statearr_17866_19137 = state_17839__$1;
(statearr_17866_19137[(2)] = inst_17813);

(statearr_17866_19137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (6))){
var state_17839__$1 = state_17839;
var statearr_17867_19138 = state_17839__$1;
(statearr_17867_19138[(2)] = false);

(statearr_17867_19138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (28))){
var inst_17809 = (state_17839[(2)]);
var inst_17810 = calc_state();
var inst_17766 = inst_17810;
var state_17839__$1 = (function (){var statearr_17868 = state_17839;
(statearr_17868[(7)] = inst_17766);

(statearr_17868[(15)] = inst_17809);

return statearr_17868;
})();
var statearr_17869_19139 = state_17839__$1;
(statearr_17869_19139[(2)] = null);

(statearr_17869_19139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (25))){
var inst_17835 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
var statearr_17870_19140 = state_17839__$1;
(statearr_17870_19140[(2)] = inst_17835);

(statearr_17870_19140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (34))){
var inst_17833 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
var statearr_17871_19141 = state_17839__$1;
(statearr_17871_19141[(2)] = inst_17833);

(statearr_17871_19141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (17))){
var state_17839__$1 = state_17839;
var statearr_17872_19142 = state_17839__$1;
(statearr_17872_19142[(2)] = false);

(statearr_17872_19142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (3))){
var state_17839__$1 = state_17839;
var statearr_17873_19143 = state_17839__$1;
(statearr_17873_19143[(2)] = false);

(statearr_17873_19143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (12))){
var inst_17837 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17839__$1,inst_17837);
} else {
if((state_val_17840 === (2))){
var inst_17741 = (state_17839[(8)]);
var inst_17746 = inst_17741.cljs$lang$protocol_mask$partition0$;
var inst_17747 = (inst_17746 & (64));
var inst_17748 = inst_17741.cljs$core$ISeq$;
var inst_17749 = (cljs.core.PROTOCOL_SENTINEL === inst_17748);
var inst_17750 = ((inst_17747) || (inst_17749));
var state_17839__$1 = state_17839;
if(cljs.core.truth_(inst_17750)){
var statearr_17874_19144 = state_17839__$1;
(statearr_17874_19144[(1)] = (5));

} else {
var statearr_17875_19145 = state_17839__$1;
(statearr_17875_19145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (23))){
var inst_17798 = (state_17839[(14)]);
var inst_17804 = (inst_17798 == null);
var state_17839__$1 = state_17839;
if(cljs.core.truth_(inst_17804)){
var statearr_17876_19146 = state_17839__$1;
(statearr_17876_19146[(1)] = (26));

} else {
var statearr_17877_19147 = state_17839__$1;
(statearr_17877_19147[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (35))){
var inst_17824 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
if(cljs.core.truth_(inst_17824)){
var statearr_17878_19149 = state_17839__$1;
(statearr_17878_19149[(1)] = (36));

} else {
var statearr_17879_19150 = state_17839__$1;
(statearr_17879_19150[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (19))){
var inst_17766 = (state_17839[(7)]);
var inst_17786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17766);
var state_17839__$1 = state_17839;
var statearr_17880_19151 = state_17839__$1;
(statearr_17880_19151[(2)] = inst_17786);

(statearr_17880_19151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (11))){
var inst_17766 = (state_17839[(7)]);
var inst_17770 = (inst_17766 == null);
var inst_17771 = cljs.core.not(inst_17770);
var state_17839__$1 = state_17839;
if(inst_17771){
var statearr_17881_19153 = state_17839__$1;
(statearr_17881_19153[(1)] = (13));

} else {
var statearr_17882_19154 = state_17839__$1;
(statearr_17882_19154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (9))){
var inst_17741 = (state_17839[(8)]);
var state_17839__$1 = state_17839;
var statearr_17883_19155 = state_17839__$1;
(statearr_17883_19155[(2)] = inst_17741);

(statearr_17883_19155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (5))){
var state_17839__$1 = state_17839;
var statearr_17884_19156 = state_17839__$1;
(statearr_17884_19156[(2)] = true);

(statearr_17884_19156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (14))){
var state_17839__$1 = state_17839;
var statearr_17885_19158 = state_17839__$1;
(statearr_17885_19158[(2)] = false);

(statearr_17885_19158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (26))){
var inst_17799 = (state_17839[(9)]);
var inst_17806 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17799);
var state_17839__$1 = state_17839;
var statearr_17886_19159 = state_17839__$1;
(statearr_17886_19159[(2)] = inst_17806);

(statearr_17886_19159[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (16))){
var state_17839__$1 = state_17839;
var statearr_17887_19160 = state_17839__$1;
(statearr_17887_19160[(2)] = true);

(statearr_17887_19160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (38))){
var inst_17829 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
var statearr_17888_19162 = state_17839__$1;
(statearr_17888_19162[(2)] = inst_17829);

(statearr_17888_19162[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (30))){
var inst_17799 = (state_17839[(9)]);
var inst_17790 = (state_17839[(10)]);
var inst_17791 = (state_17839[(13)]);
var inst_17816 = cljs.core.empty_QMARK_(inst_17790);
var inst_17817 = (inst_17791.cljs$core$IFn$_invoke$arity$1 ? inst_17791.cljs$core$IFn$_invoke$arity$1(inst_17799) : inst_17791.call(null,inst_17799));
var inst_17818 = cljs.core.not(inst_17817);
var inst_17819 = ((inst_17816) && (inst_17818));
var state_17839__$1 = state_17839;
var statearr_17889_19163 = state_17839__$1;
(statearr_17889_19163[(2)] = inst_17819);

(statearr_17889_19163[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (10))){
var inst_17741 = (state_17839[(8)]);
var inst_17762 = (state_17839[(2)]);
var inst_17763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17762,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17762,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17762,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17766 = inst_17741;
var state_17839__$1 = (function (){var statearr_17890 = state_17839;
(statearr_17890[(7)] = inst_17766);

(statearr_17890[(16)] = inst_17763);

(statearr_17890[(17)] = inst_17764);

(statearr_17890[(18)] = inst_17765);

return statearr_17890;
})();
var statearr_17891_19165 = state_17839__$1;
(statearr_17891_19165[(2)] = null);

(statearr_17891_19165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (18))){
var inst_17781 = (state_17839[(2)]);
var state_17839__$1 = state_17839;
var statearr_17892_19166 = state_17839__$1;
(statearr_17892_19166[(2)] = inst_17781);

(statearr_17892_19166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (37))){
var state_17839__$1 = state_17839;
var statearr_17893_19167 = state_17839__$1;
(statearr_17893_19167[(2)] = null);

(statearr_17893_19167[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17840 === (8))){
var inst_17741 = (state_17839[(8)]);
var inst_17759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17741);
var state_17839__$1 = state_17839;
var statearr_17894_19168 = state_17839__$1;
(statearr_17894_19168[(2)] = inst_17759);

(statearr_17894_19168[(1)] = (10));


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
});})(c__16663__auto___19091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16488__auto__,c__16663__auto___19091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16489__auto__ = null;
var cljs$core$async$mix_$_state_machine__16489__auto____0 = (function (){
var statearr_17895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17895[(0)] = cljs$core$async$mix_$_state_machine__16489__auto__);

(statearr_17895[(1)] = (1));

return statearr_17895;
});
var cljs$core$async$mix_$_state_machine__16489__auto____1 = (function (state_17839){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17839);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e17896){if((e17896 instanceof Object)){
var ex__16492__auto__ = e17896;
var statearr_17897_19170 = state_17839;
(statearr_17897_19170[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19171 = state_17839;
state_17839 = G__19171;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16489__auto__ = function(state_17839){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16489__auto____1.call(this,state_17839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16489__auto____0;
cljs$core$async$mix_$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16489__auto____1;
return cljs$core$async$mix_$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16665__auto__ = (function (){var statearr_17898 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_17898[(6)] = c__16663__auto___19091);

return statearr_17898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17900 = arguments.length;
switch (G__17900) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
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
var G__17903 = arguments.length;
switch (G__17903) {
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
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__17901_SHARP_){
if(cljs.core.truth_((p1__17901_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17901_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17901_SHARP_.call(null,topic)))){
return p1__17901_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17901_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17904 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17905){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17905 = meta17905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17906,meta17905__$1){
var self__ = this;
var _17906__$1 = this;
return (new cljs.core.async.t_cljs$core$async17904(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17905__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17906){
var self__ = this;
var _17906__$1 = this;
return self__.meta17905;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17904.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17904.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17905","meta17905",1580425967,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17904";

cljs.core.async.t_cljs$core$async17904.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17904");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17904.
 */
cljs.core.async.__GT_t_cljs$core$async17904 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17904(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17905){
return (new cljs.core.async.t_cljs$core$async17904(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17905));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17904(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16663__auto___19180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19180,mults,ensure_mult,p){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19180,mults,ensure_mult,p){
return (function (state_17978){
var state_val_17979 = (state_17978[(1)]);
if((state_val_17979 === (7))){
var inst_17974 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_17980_19181 = state_17978__$1;
(statearr_17980_19181[(2)] = inst_17974);

(statearr_17980_19181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (20))){
var state_17978__$1 = state_17978;
var statearr_17981_19182 = state_17978__$1;
(statearr_17981_19182[(2)] = null);

(statearr_17981_19182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (1))){
var state_17978__$1 = state_17978;
var statearr_17982_19183 = state_17978__$1;
(statearr_17982_19183[(2)] = null);

(statearr_17982_19183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (24))){
var inst_17957 = (state_17978[(7)]);
var inst_17966 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17957);
var state_17978__$1 = state_17978;
var statearr_17983_19184 = state_17978__$1;
(statearr_17983_19184[(2)] = inst_17966);

(statearr_17983_19184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (4))){
var inst_17909 = (state_17978[(8)]);
var inst_17909__$1 = (state_17978[(2)]);
var inst_17910 = (inst_17909__$1 == null);
var state_17978__$1 = (function (){var statearr_17984 = state_17978;
(statearr_17984[(8)] = inst_17909__$1);

return statearr_17984;
})();
if(cljs.core.truth_(inst_17910)){
var statearr_17985_19274 = state_17978__$1;
(statearr_17985_19274[(1)] = (5));

} else {
var statearr_17986_19275 = state_17978__$1;
(statearr_17986_19275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (15))){
var inst_17951 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_17987_19284 = state_17978__$1;
(statearr_17987_19284[(2)] = inst_17951);

(statearr_17987_19284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (21))){
var inst_17971 = (state_17978[(2)]);
var state_17978__$1 = (function (){var statearr_17988 = state_17978;
(statearr_17988[(9)] = inst_17971);

return statearr_17988;
})();
var statearr_17989_19292 = state_17978__$1;
(statearr_17989_19292[(2)] = null);

(statearr_17989_19292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (13))){
var inst_17933 = (state_17978[(10)]);
var inst_17935 = cljs.core.chunked_seq_QMARK_(inst_17933);
var state_17978__$1 = state_17978;
if(inst_17935){
var statearr_17990_19302 = state_17978__$1;
(statearr_17990_19302[(1)] = (16));

} else {
var statearr_17991_19303 = state_17978__$1;
(statearr_17991_19303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (22))){
var inst_17963 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
if(cljs.core.truth_(inst_17963)){
var statearr_17992_19308 = state_17978__$1;
(statearr_17992_19308[(1)] = (23));

} else {
var statearr_17993_19310 = state_17978__$1;
(statearr_17993_19310[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (6))){
var inst_17959 = (state_17978[(11)]);
var inst_17957 = (state_17978[(7)]);
var inst_17909 = (state_17978[(8)]);
var inst_17957__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17909) : topic_fn.call(null,inst_17909));
var inst_17958 = cljs.core.deref(mults);
var inst_17959__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17958,inst_17957__$1);
var state_17978__$1 = (function (){var statearr_17994 = state_17978;
(statearr_17994[(11)] = inst_17959__$1);

(statearr_17994[(7)] = inst_17957__$1);

return statearr_17994;
})();
if(cljs.core.truth_(inst_17959__$1)){
var statearr_17995_19323 = state_17978__$1;
(statearr_17995_19323[(1)] = (19));

} else {
var statearr_17996_19324 = state_17978__$1;
(statearr_17996_19324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (25))){
var inst_17968 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_17997_19325 = state_17978__$1;
(statearr_17997_19325[(2)] = inst_17968);

(statearr_17997_19325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (17))){
var inst_17933 = (state_17978[(10)]);
var inst_17942 = cljs.core.first(inst_17933);
var inst_17943 = cljs.core.async.muxch_STAR_(inst_17942);
var inst_17944 = cljs.core.async.close_BANG_(inst_17943);
var inst_17945 = cljs.core.next(inst_17933);
var inst_17919 = inst_17945;
var inst_17920 = null;
var inst_17921 = (0);
var inst_17922 = (0);
var state_17978__$1 = (function (){var statearr_17998 = state_17978;
(statearr_17998[(12)] = inst_17921);

(statearr_17998[(13)] = inst_17920);

(statearr_17998[(14)] = inst_17919);

(statearr_17998[(15)] = inst_17944);

(statearr_17998[(16)] = inst_17922);

return statearr_17998;
})();
var statearr_17999_19326 = state_17978__$1;
(statearr_17999_19326[(2)] = null);

(statearr_17999_19326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (3))){
var inst_17976 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17978__$1,inst_17976);
} else {
if((state_val_17979 === (12))){
var inst_17953 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_18000_19327 = state_17978__$1;
(statearr_18000_19327[(2)] = inst_17953);

(statearr_18000_19327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (2))){
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17978__$1,(4),ch);
} else {
if((state_val_17979 === (23))){
var state_17978__$1 = state_17978;
var statearr_18001_19328 = state_17978__$1;
(statearr_18001_19328[(2)] = null);

(statearr_18001_19328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (19))){
var inst_17959 = (state_17978[(11)]);
var inst_17909 = (state_17978[(8)]);
var inst_17961 = cljs.core.async.muxch_STAR_(inst_17959);
var state_17978__$1 = state_17978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17978__$1,(22),inst_17961,inst_17909);
} else {
if((state_val_17979 === (11))){
var inst_17933 = (state_17978[(10)]);
var inst_17919 = (state_17978[(14)]);
var inst_17933__$1 = cljs.core.seq(inst_17919);
var state_17978__$1 = (function (){var statearr_18002 = state_17978;
(statearr_18002[(10)] = inst_17933__$1);

return statearr_18002;
})();
if(inst_17933__$1){
var statearr_18003_19331 = state_17978__$1;
(statearr_18003_19331[(1)] = (13));

} else {
var statearr_18004_19335 = state_17978__$1;
(statearr_18004_19335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (9))){
var inst_17955 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_18005_19341 = state_17978__$1;
(statearr_18005_19341[(2)] = inst_17955);

(statearr_18005_19341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (5))){
var inst_17916 = cljs.core.deref(mults);
var inst_17917 = cljs.core.vals(inst_17916);
var inst_17918 = cljs.core.seq(inst_17917);
var inst_17919 = inst_17918;
var inst_17920 = null;
var inst_17921 = (0);
var inst_17922 = (0);
var state_17978__$1 = (function (){var statearr_18006 = state_17978;
(statearr_18006[(12)] = inst_17921);

(statearr_18006[(13)] = inst_17920);

(statearr_18006[(14)] = inst_17919);

(statearr_18006[(16)] = inst_17922);

return statearr_18006;
})();
var statearr_18007_19353 = state_17978__$1;
(statearr_18007_19353[(2)] = null);

(statearr_18007_19353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (14))){
var state_17978__$1 = state_17978;
var statearr_18011_19354 = state_17978__$1;
(statearr_18011_19354[(2)] = null);

(statearr_18011_19354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (16))){
var inst_17933 = (state_17978[(10)]);
var inst_17937 = cljs.core.chunk_first(inst_17933);
var inst_17938 = cljs.core.chunk_rest(inst_17933);
var inst_17939 = cljs.core.count(inst_17937);
var inst_17919 = inst_17938;
var inst_17920 = inst_17937;
var inst_17921 = inst_17939;
var inst_17922 = (0);
var state_17978__$1 = (function (){var statearr_18012 = state_17978;
(statearr_18012[(12)] = inst_17921);

(statearr_18012[(13)] = inst_17920);

(statearr_18012[(14)] = inst_17919);

(statearr_18012[(16)] = inst_17922);

return statearr_18012;
})();
var statearr_18013_19355 = state_17978__$1;
(statearr_18013_19355[(2)] = null);

(statearr_18013_19355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (10))){
var inst_17921 = (state_17978[(12)]);
var inst_17920 = (state_17978[(13)]);
var inst_17919 = (state_17978[(14)]);
var inst_17922 = (state_17978[(16)]);
var inst_17927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17920,inst_17922);
var inst_17928 = cljs.core.async.muxch_STAR_(inst_17927);
var inst_17929 = cljs.core.async.close_BANG_(inst_17928);
var inst_17930 = (inst_17922 + (1));
var tmp18008 = inst_17921;
var tmp18009 = inst_17920;
var tmp18010 = inst_17919;
var inst_17919__$1 = tmp18010;
var inst_17920__$1 = tmp18009;
var inst_17921__$1 = tmp18008;
var inst_17922__$1 = inst_17930;
var state_17978__$1 = (function (){var statearr_18014 = state_17978;
(statearr_18014[(12)] = inst_17921__$1);

(statearr_18014[(13)] = inst_17920__$1);

(statearr_18014[(14)] = inst_17919__$1);

(statearr_18014[(16)] = inst_17922__$1);

(statearr_18014[(17)] = inst_17929);

return statearr_18014;
})();
var statearr_18015_19356 = state_17978__$1;
(statearr_18015_19356[(2)] = null);

(statearr_18015_19356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (18))){
var inst_17948 = (state_17978[(2)]);
var state_17978__$1 = state_17978;
var statearr_18016_19357 = state_17978__$1;
(statearr_18016_19357[(2)] = inst_17948);

(statearr_18016_19357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17979 === (8))){
var inst_17921 = (state_17978[(12)]);
var inst_17922 = (state_17978[(16)]);
var inst_17924 = (inst_17922 < inst_17921);
var inst_17925 = inst_17924;
var state_17978__$1 = state_17978;
if(cljs.core.truth_(inst_17925)){
var statearr_18017_19361 = state_17978__$1;
(statearr_18017_19361[(1)] = (10));

} else {
var statearr_18018_19362 = state_17978__$1;
(statearr_18018_19362[(1)] = (11));

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
});})(c__16663__auto___19180,mults,ensure_mult,p))
;
return ((function (switch__16488__auto__,c__16663__auto___19180,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18019[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18019[(1)] = (1));

return statearr_18019;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_17978){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_17978);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18020){if((e18020 instanceof Object)){
var ex__16492__auto__ = e18020;
var statearr_18021_19363 = state_17978;
(statearr_18021_19363[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19364 = state_17978;
state_17978 = G__19364;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_17978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_17978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19180,mults,ensure_mult,p))
})();
var state__16665__auto__ = (function (){var statearr_18022 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18022[(6)] = c__16663__auto___19180);

return statearr_18022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19180,mults,ensure_mult,p))
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
var G__18024 = arguments.length;
switch (G__18024) {
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
var G__18026 = arguments.length;
switch (G__18026) {
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
var G__18028 = arguments.length;
switch (G__18028) {
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
var c__16663__auto___19375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18067){
var state_val_18068 = (state_18067[(1)]);
if((state_val_18068 === (7))){
var state_18067__$1 = state_18067;
var statearr_18069_19376 = state_18067__$1;
(statearr_18069_19376[(2)] = null);

(statearr_18069_19376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (1))){
var state_18067__$1 = state_18067;
var statearr_18070_19377 = state_18067__$1;
(statearr_18070_19377[(2)] = null);

(statearr_18070_19377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (4))){
var inst_18031 = (state_18067[(7)]);
var inst_18033 = (inst_18031 < cnt);
var state_18067__$1 = state_18067;
if(cljs.core.truth_(inst_18033)){
var statearr_18071_19378 = state_18067__$1;
(statearr_18071_19378[(1)] = (6));

} else {
var statearr_18072_19379 = state_18067__$1;
(statearr_18072_19379[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (15))){
var inst_18063 = (state_18067[(2)]);
var state_18067__$1 = state_18067;
var statearr_18073_19384 = state_18067__$1;
(statearr_18073_19384[(2)] = inst_18063);

(statearr_18073_19384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (13))){
var inst_18056 = cljs.core.async.close_BANG_(out);
var state_18067__$1 = state_18067;
var statearr_18074_19388 = state_18067__$1;
(statearr_18074_19388[(2)] = inst_18056);

(statearr_18074_19388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (6))){
var state_18067__$1 = state_18067;
var statearr_18075_19389 = state_18067__$1;
(statearr_18075_19389[(2)] = null);

(statearr_18075_19389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (3))){
var inst_18065 = (state_18067[(2)]);
var state_18067__$1 = state_18067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18067__$1,inst_18065);
} else {
if((state_val_18068 === (12))){
var inst_18053 = (state_18067[(8)]);
var inst_18053__$1 = (state_18067[(2)]);
var inst_18054 = cljs.core.some(cljs.core.nil_QMARK_,inst_18053__$1);
var state_18067__$1 = (function (){var statearr_18076 = state_18067;
(statearr_18076[(8)] = inst_18053__$1);

return statearr_18076;
})();
if(cljs.core.truth_(inst_18054)){
var statearr_18077_19390 = state_18067__$1;
(statearr_18077_19390[(1)] = (13));

} else {
var statearr_18078_19391 = state_18067__$1;
(statearr_18078_19391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (2))){
var inst_18030 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18031 = (0);
var state_18067__$1 = (function (){var statearr_18079 = state_18067;
(statearr_18079[(7)] = inst_18031);

(statearr_18079[(9)] = inst_18030);

return statearr_18079;
})();
var statearr_18080_19392 = state_18067__$1;
(statearr_18080_19392[(2)] = null);

(statearr_18080_19392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (11))){
var inst_18031 = (state_18067[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18067,(10),Object,null,(9));
var inst_18040 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18031) : chs__$1.call(null,inst_18031));
var inst_18041 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18031) : done.call(null,inst_18031));
var inst_18042 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18040,inst_18041);
var state_18067__$1 = state_18067;
var statearr_18081_19393 = state_18067__$1;
(statearr_18081_19393[(2)] = inst_18042);


cljs.core.async.impl.ioc_helpers.process_exception(state_18067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (9))){
var inst_18031 = (state_18067[(7)]);
var inst_18044 = (state_18067[(2)]);
var inst_18045 = (inst_18031 + (1));
var inst_18031__$1 = inst_18045;
var state_18067__$1 = (function (){var statearr_18082 = state_18067;
(statearr_18082[(7)] = inst_18031__$1);

(statearr_18082[(10)] = inst_18044);

return statearr_18082;
})();
var statearr_18083_19394 = state_18067__$1;
(statearr_18083_19394[(2)] = null);

(statearr_18083_19394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (5))){
var inst_18051 = (state_18067[(2)]);
var state_18067__$1 = (function (){var statearr_18084 = state_18067;
(statearr_18084[(11)] = inst_18051);

return statearr_18084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18067__$1,(12),dchan);
} else {
if((state_val_18068 === (14))){
var inst_18053 = (state_18067[(8)]);
var inst_18058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18053);
var state_18067__$1 = state_18067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18067__$1,(16),out,inst_18058);
} else {
if((state_val_18068 === (16))){
var inst_18060 = (state_18067[(2)]);
var state_18067__$1 = (function (){var statearr_18085 = state_18067;
(statearr_18085[(12)] = inst_18060);

return statearr_18085;
})();
var statearr_18086_19395 = state_18067__$1;
(statearr_18086_19395[(2)] = null);

(statearr_18086_19395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (10))){
var inst_18035 = (state_18067[(2)]);
var inst_18036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18067__$1 = (function (){var statearr_18087 = state_18067;
(statearr_18087[(13)] = inst_18035);

return statearr_18087;
})();
var statearr_18088_19396 = state_18067__$1;
(statearr_18088_19396[(2)] = inst_18036);


cljs.core.async.impl.ioc_helpers.process_exception(state_18067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18068 === (8))){
var inst_18049 = (state_18067[(2)]);
var state_18067__$1 = state_18067;
var statearr_18089_19400 = state_18067__$1;
(statearr_18089_19400[(2)] = inst_18049);

(statearr_18089_19400[(1)] = (5));


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
});})(c__16663__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16488__auto__,c__16663__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18090[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18090[(1)] = (1));

return statearr_18090;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_18067){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18067);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18091){if((e18091 instanceof Object)){
var ex__16492__auto__ = e18091;
var statearr_18092_19432 = state_18067;
(statearr_18092_19432[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19434 = state_18067;
state_18067 = G__19434;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_18067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_18067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16665__auto__ = (function (){var statearr_18093 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18093[(6)] = c__16663__auto___19375);

return statearr_18093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18096 = arguments.length;
switch (G__18096) {
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
var c__16663__auto___19457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19457,out){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19457,out){
return (function (state_18128){
var state_val_18129 = (state_18128[(1)]);
if((state_val_18129 === (7))){
var inst_18108 = (state_18128[(7)]);
var inst_18107 = (state_18128[(8)]);
var inst_18107__$1 = (state_18128[(2)]);
var inst_18108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18107__$1,(0),null);
var inst_18109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18107__$1,(1),null);
var inst_18110 = (inst_18108__$1 == null);
var state_18128__$1 = (function (){var statearr_18130 = state_18128;
(statearr_18130[(7)] = inst_18108__$1);

(statearr_18130[(8)] = inst_18107__$1);

(statearr_18130[(9)] = inst_18109);

return statearr_18130;
})();
if(cljs.core.truth_(inst_18110)){
var statearr_18131_19469 = state_18128__$1;
(statearr_18131_19469[(1)] = (8));

} else {
var statearr_18132_19471 = state_18128__$1;
(statearr_18132_19471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (1))){
var inst_18097 = cljs.core.vec(chs);
var inst_18098 = inst_18097;
var state_18128__$1 = (function (){var statearr_18133 = state_18128;
(statearr_18133[(10)] = inst_18098);

return statearr_18133;
})();
var statearr_18134_19481 = state_18128__$1;
(statearr_18134_19481[(2)] = null);

(statearr_18134_19481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (4))){
var inst_18098 = (state_18128[(10)]);
var state_18128__$1 = state_18128;
return cljs.core.async.ioc_alts_BANG_(state_18128__$1,(7),inst_18098);
} else {
if((state_val_18129 === (6))){
var inst_18124 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18135_19486 = state_18128__$1;
(statearr_18135_19486[(2)] = inst_18124);

(statearr_18135_19486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (3))){
var inst_18126 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18128__$1,inst_18126);
} else {
if((state_val_18129 === (2))){
var inst_18098 = (state_18128[(10)]);
var inst_18100 = cljs.core.count(inst_18098);
var inst_18101 = (inst_18100 > (0));
var state_18128__$1 = state_18128;
if(cljs.core.truth_(inst_18101)){
var statearr_18137_19488 = state_18128__$1;
(statearr_18137_19488[(1)] = (4));

} else {
var statearr_18138_19489 = state_18128__$1;
(statearr_18138_19489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (11))){
var inst_18098 = (state_18128[(10)]);
var inst_18117 = (state_18128[(2)]);
var tmp18136 = inst_18098;
var inst_18098__$1 = tmp18136;
var state_18128__$1 = (function (){var statearr_18139 = state_18128;
(statearr_18139[(10)] = inst_18098__$1);

(statearr_18139[(11)] = inst_18117);

return statearr_18139;
})();
var statearr_18140_19490 = state_18128__$1;
(statearr_18140_19490[(2)] = null);

(statearr_18140_19490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (9))){
var inst_18108 = (state_18128[(7)]);
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18128__$1,(11),out,inst_18108);
} else {
if((state_val_18129 === (5))){
var inst_18122 = cljs.core.async.close_BANG_(out);
var state_18128__$1 = state_18128;
var statearr_18141_19491 = state_18128__$1;
(statearr_18141_19491[(2)] = inst_18122);

(statearr_18141_19491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (10))){
var inst_18120 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18142_19496 = state_18128__$1;
(statearr_18142_19496[(2)] = inst_18120);

(statearr_18142_19496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18129 === (8))){
var inst_18108 = (state_18128[(7)]);
var inst_18098 = (state_18128[(10)]);
var inst_18107 = (state_18128[(8)]);
var inst_18109 = (state_18128[(9)]);
var inst_18112 = (function (){var cs = inst_18098;
var vec__18103 = inst_18107;
var v = inst_18108;
var c = inst_18109;
return ((function (cs,vec__18103,v,c,inst_18108,inst_18098,inst_18107,inst_18109,state_val_18129,c__16663__auto___19457,out){
return (function (p1__18094_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18094_SHARP_);
});
;})(cs,vec__18103,v,c,inst_18108,inst_18098,inst_18107,inst_18109,state_val_18129,c__16663__auto___19457,out))
})();
var inst_18113 = cljs.core.filterv(inst_18112,inst_18098);
var inst_18098__$1 = inst_18113;
var state_18128__$1 = (function (){var statearr_18143 = state_18128;
(statearr_18143[(10)] = inst_18098__$1);

return statearr_18143;
})();
var statearr_18144_19505 = state_18128__$1;
(statearr_18144_19505[(2)] = null);

(statearr_18144_19505[(1)] = (2));


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
});})(c__16663__auto___19457,out))
;
return ((function (switch__16488__auto__,c__16663__auto___19457,out){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18145[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18145[(1)] = (1));

return statearr_18145;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_18128){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18128);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18146){if((e18146 instanceof Object)){
var ex__16492__auto__ = e18146;
var statearr_18147_19507 = state_18128;
(statearr_18147_19507[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19508 = state_18128;
state_18128 = G__19508;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_18128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_18128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19457,out))
})();
var state__16665__auto__ = (function (){var statearr_18148 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18148[(6)] = c__16663__auto___19457);

return statearr_18148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19457,out))
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
var G__18150 = arguments.length;
switch (G__18150) {
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
var c__16663__auto___19510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19510,out){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19510,out){
return (function (state_18174){
var state_val_18175 = (state_18174[(1)]);
if((state_val_18175 === (7))){
var inst_18156 = (state_18174[(7)]);
var inst_18156__$1 = (state_18174[(2)]);
var inst_18157 = (inst_18156__$1 == null);
var inst_18158 = cljs.core.not(inst_18157);
var state_18174__$1 = (function (){var statearr_18176 = state_18174;
(statearr_18176[(7)] = inst_18156__$1);

return statearr_18176;
})();
if(inst_18158){
var statearr_18177_19511 = state_18174__$1;
(statearr_18177_19511[(1)] = (8));

} else {
var statearr_18178_19512 = state_18174__$1;
(statearr_18178_19512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (1))){
var inst_18151 = (0);
var state_18174__$1 = (function (){var statearr_18179 = state_18174;
(statearr_18179[(8)] = inst_18151);

return statearr_18179;
})();
var statearr_18180_19513 = state_18174__$1;
(statearr_18180_19513[(2)] = null);

(statearr_18180_19513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (4))){
var state_18174__$1 = state_18174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18174__$1,(7),ch);
} else {
if((state_val_18175 === (6))){
var inst_18169 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18181_19514 = state_18174__$1;
(statearr_18181_19514[(2)] = inst_18169);

(statearr_18181_19514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (3))){
var inst_18171 = (state_18174[(2)]);
var inst_18172 = cljs.core.async.close_BANG_(out);
var state_18174__$1 = (function (){var statearr_18182 = state_18174;
(statearr_18182[(9)] = inst_18171);

return statearr_18182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18174__$1,inst_18172);
} else {
if((state_val_18175 === (2))){
var inst_18151 = (state_18174[(8)]);
var inst_18153 = (inst_18151 < n);
var state_18174__$1 = state_18174;
if(cljs.core.truth_(inst_18153)){
var statearr_18183_19516 = state_18174__$1;
(statearr_18183_19516[(1)] = (4));

} else {
var statearr_18184_19517 = state_18174__$1;
(statearr_18184_19517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (11))){
var inst_18151 = (state_18174[(8)]);
var inst_18161 = (state_18174[(2)]);
var inst_18162 = (inst_18151 + (1));
var inst_18151__$1 = inst_18162;
var state_18174__$1 = (function (){var statearr_18185 = state_18174;
(statearr_18185[(8)] = inst_18151__$1);

(statearr_18185[(10)] = inst_18161);

return statearr_18185;
})();
var statearr_18186_19518 = state_18174__$1;
(statearr_18186_19518[(2)] = null);

(statearr_18186_19518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (9))){
var state_18174__$1 = state_18174;
var statearr_18187_19519 = state_18174__$1;
(statearr_18187_19519[(2)] = null);

(statearr_18187_19519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (5))){
var state_18174__$1 = state_18174;
var statearr_18188_19521 = state_18174__$1;
(statearr_18188_19521[(2)] = null);

(statearr_18188_19521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (10))){
var inst_18166 = (state_18174[(2)]);
var state_18174__$1 = state_18174;
var statearr_18189_19523 = state_18174__$1;
(statearr_18189_19523[(2)] = inst_18166);

(statearr_18189_19523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18175 === (8))){
var inst_18156 = (state_18174[(7)]);
var state_18174__$1 = state_18174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18174__$1,(11),out,inst_18156);
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
});})(c__16663__auto___19510,out))
;
return ((function (switch__16488__auto__,c__16663__auto___19510,out){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18190[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18190[(1)] = (1));

return statearr_18190;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_18174){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18174);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18191){if((e18191 instanceof Object)){
var ex__16492__auto__ = e18191;
var statearr_18192_19524 = state_18174;
(statearr_18192_19524[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19526 = state_18174;
state_18174 = G__19526;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_18174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_18174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19510,out))
})();
var state__16665__auto__ = (function (){var statearr_18193 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18193[(6)] = c__16663__auto___19510);

return statearr_18193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19510,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18195 = (function (f,ch,meta18196){
this.f = f;
this.ch = ch;
this.meta18196 = meta18196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18197,meta18196__$1){
var self__ = this;
var _18197__$1 = this;
return (new cljs.core.async.t_cljs$core$async18195(self__.f,self__.ch,meta18196__$1));
});

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18197){
var self__ = this;
var _18197__$1 = this;
return self__.meta18196;
});

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18198 = (function (f,ch,meta18196,_,fn1,meta18199){
this.f = f;
this.ch = ch;
this.meta18196 = meta18196;
this._ = _;
this.fn1 = fn1;
this.meta18199 = meta18199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18200,meta18199__$1){
var self__ = this;
var _18200__$1 = this;
return (new cljs.core.async.t_cljs$core$async18198(self__.f,self__.ch,self__.meta18196,self__._,self__.fn1,meta18199__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18200){
var self__ = this;
var _18200__$1 = this;
return self__.meta18199;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18198.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18194_SHARP_){
var G__18201 = (((p1__18194_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18194_SHARP_) : self__.f.call(null,p1__18194_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18201) : f1.call(null,G__18201));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18198.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18196","meta18196",1118025744,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18195","cljs.core.async/t_cljs$core$async18195",-1430706406,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18199","meta18199",-557972390,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18198";

cljs.core.async.t_cljs$core$async18198.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18198");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18198.
 */
cljs.core.async.__GT_t_cljs$core$async18198 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18198(f__$1,ch__$1,meta18196__$1,___$2,fn1__$1,meta18199){
return (new cljs.core.async.t_cljs$core$async18198(f__$1,ch__$1,meta18196__$1,___$2,fn1__$1,meta18199));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18198(self__.f,self__.ch,self__.meta18196,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18202 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18202) : self__.f.call(null,G__18202));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18196","meta18196",1118025744,null)], null);
});

cljs.core.async.t_cljs$core$async18195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18195";

cljs.core.async.t_cljs$core$async18195.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18195");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18195.
 */
cljs.core.async.__GT_t_cljs$core$async18195 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18195(f__$1,ch__$1,meta18196){
return (new cljs.core.async.t_cljs$core$async18195(f__$1,ch__$1,meta18196));
});

}

return (new cljs.core.async.t_cljs$core$async18195(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18203 = (function (f,ch,meta18204){
this.f = f;
this.ch = ch;
this.meta18204 = meta18204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18205,meta18204__$1){
var self__ = this;
var _18205__$1 = this;
return (new cljs.core.async.t_cljs$core$async18203(self__.f,self__.ch,meta18204__$1));
});

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18205){
var self__ = this;
var _18205__$1 = this;
return self__.meta18204;
});

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18204","meta18204",-2137294410,null)], null);
});

cljs.core.async.t_cljs$core$async18203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18203";

cljs.core.async.t_cljs$core$async18203.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18203");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18203.
 */
cljs.core.async.__GT_t_cljs$core$async18203 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18203(f__$1,ch__$1,meta18204){
return (new cljs.core.async.t_cljs$core$async18203(f__$1,ch__$1,meta18204));
});

}

return (new cljs.core.async.t_cljs$core$async18203(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18206 = (function (p,ch,meta18207){
this.p = p;
this.ch = ch;
this.meta18207 = meta18207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18208,meta18207__$1){
var self__ = this;
var _18208__$1 = this;
return (new cljs.core.async.t_cljs$core$async18206(self__.p,self__.ch,meta18207__$1));
});

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18208){
var self__ = this;
var _18208__$1 = this;
return self__.meta18207;
});

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18207","meta18207",1541761273,null)], null);
});

cljs.core.async.t_cljs$core$async18206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18206";

cljs.core.async.t_cljs$core$async18206.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18206");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18206.
 */
cljs.core.async.__GT_t_cljs$core$async18206 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18206(p__$1,ch__$1,meta18207){
return (new cljs.core.async.t_cljs$core$async18206(p__$1,ch__$1,meta18207));
});

}

return (new cljs.core.async.t_cljs$core$async18206(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18210 = arguments.length;
switch (G__18210) {
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
var c__16663__auto___19549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19549,out){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19549,out){
return (function (state_18231){
var state_val_18232 = (state_18231[(1)]);
if((state_val_18232 === (7))){
var inst_18227 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18233_19550 = state_18231__$1;
(statearr_18233_19550[(2)] = inst_18227);

(statearr_18233_19550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (1))){
var state_18231__$1 = state_18231;
var statearr_18234_19551 = state_18231__$1;
(statearr_18234_19551[(2)] = null);

(statearr_18234_19551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (4))){
var inst_18213 = (state_18231[(7)]);
var inst_18213__$1 = (state_18231[(2)]);
var inst_18214 = (inst_18213__$1 == null);
var state_18231__$1 = (function (){var statearr_18235 = state_18231;
(statearr_18235[(7)] = inst_18213__$1);

return statearr_18235;
})();
if(cljs.core.truth_(inst_18214)){
var statearr_18236_19554 = state_18231__$1;
(statearr_18236_19554[(1)] = (5));

} else {
var statearr_18237_19555 = state_18231__$1;
(statearr_18237_19555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (6))){
var inst_18213 = (state_18231[(7)]);
var inst_18218 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18213) : p.call(null,inst_18213));
var state_18231__$1 = state_18231;
if(cljs.core.truth_(inst_18218)){
var statearr_18238_19556 = state_18231__$1;
(statearr_18238_19556[(1)] = (8));

} else {
var statearr_18239_19557 = state_18231__$1;
(statearr_18239_19557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (3))){
var inst_18229 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18231__$1,inst_18229);
} else {
if((state_val_18232 === (2))){
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18231__$1,(4),ch);
} else {
if((state_val_18232 === (11))){
var inst_18221 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18240_19559 = state_18231__$1;
(statearr_18240_19559[(2)] = inst_18221);

(statearr_18240_19559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (9))){
var state_18231__$1 = state_18231;
var statearr_18241_19560 = state_18231__$1;
(statearr_18241_19560[(2)] = null);

(statearr_18241_19560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (5))){
var inst_18216 = cljs.core.async.close_BANG_(out);
var state_18231__$1 = state_18231;
var statearr_18242_19561 = state_18231__$1;
(statearr_18242_19561[(2)] = inst_18216);

(statearr_18242_19561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (10))){
var inst_18224 = (state_18231[(2)]);
var state_18231__$1 = (function (){var statearr_18243 = state_18231;
(statearr_18243[(8)] = inst_18224);

return statearr_18243;
})();
var statearr_18244_19564 = state_18231__$1;
(statearr_18244_19564[(2)] = null);

(statearr_18244_19564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (8))){
var inst_18213 = (state_18231[(7)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18231__$1,(11),out,inst_18213);
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
});})(c__16663__auto___19549,out))
;
return ((function (switch__16488__auto__,c__16663__auto___19549,out){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18245 = [null,null,null,null,null,null,null,null,null];
(statearr_18245[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18245[(1)] = (1));

return statearr_18245;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_18231){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18231);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18246){if((e18246 instanceof Object)){
var ex__16492__auto__ = e18246;
var statearr_18247_19569 = state_18231;
(statearr_18247_19569[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19570 = state_18231;
state_18231 = G__19570;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19549,out))
})();
var state__16665__auto__ = (function (){var statearr_18248 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18248[(6)] = c__16663__auto___19549);

return statearr_18248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19549,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18250 = arguments.length;
switch (G__18250) {
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
var c__16663__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto__){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto__){
return (function (state_18312){
var state_val_18313 = (state_18312[(1)]);
if((state_val_18313 === (7))){
var inst_18308 = (state_18312[(2)]);
var state_18312__$1 = state_18312;
var statearr_18314_19572 = state_18312__$1;
(statearr_18314_19572[(2)] = inst_18308);

(statearr_18314_19572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (20))){
var inst_18278 = (state_18312[(7)]);
var inst_18289 = (state_18312[(2)]);
var inst_18290 = cljs.core.next(inst_18278);
var inst_18264 = inst_18290;
var inst_18265 = null;
var inst_18266 = (0);
var inst_18267 = (0);
var state_18312__$1 = (function (){var statearr_18315 = state_18312;
(statearr_18315[(8)] = inst_18264);

(statearr_18315[(9)] = inst_18289);

(statearr_18315[(10)] = inst_18266);

(statearr_18315[(11)] = inst_18265);

(statearr_18315[(12)] = inst_18267);

return statearr_18315;
})();
var statearr_18316_19577 = state_18312__$1;
(statearr_18316_19577[(2)] = null);

(statearr_18316_19577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (1))){
var state_18312__$1 = state_18312;
var statearr_18317_19581 = state_18312__$1;
(statearr_18317_19581[(2)] = null);

(statearr_18317_19581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (4))){
var inst_18253 = (state_18312[(13)]);
var inst_18253__$1 = (state_18312[(2)]);
var inst_18254 = (inst_18253__$1 == null);
var state_18312__$1 = (function (){var statearr_18318 = state_18312;
(statearr_18318[(13)] = inst_18253__$1);

return statearr_18318;
})();
if(cljs.core.truth_(inst_18254)){
var statearr_18319_19582 = state_18312__$1;
(statearr_18319_19582[(1)] = (5));

} else {
var statearr_18320_19583 = state_18312__$1;
(statearr_18320_19583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (15))){
var state_18312__$1 = state_18312;
var statearr_18324_19584 = state_18312__$1;
(statearr_18324_19584[(2)] = null);

(statearr_18324_19584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (21))){
var state_18312__$1 = state_18312;
var statearr_18325_19585 = state_18312__$1;
(statearr_18325_19585[(2)] = null);

(statearr_18325_19585[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (13))){
var inst_18264 = (state_18312[(8)]);
var inst_18266 = (state_18312[(10)]);
var inst_18265 = (state_18312[(11)]);
var inst_18267 = (state_18312[(12)]);
var inst_18274 = (state_18312[(2)]);
var inst_18275 = (inst_18267 + (1));
var tmp18321 = inst_18264;
var tmp18322 = inst_18266;
var tmp18323 = inst_18265;
var inst_18264__$1 = tmp18321;
var inst_18265__$1 = tmp18323;
var inst_18266__$1 = tmp18322;
var inst_18267__$1 = inst_18275;
var state_18312__$1 = (function (){var statearr_18326 = state_18312;
(statearr_18326[(8)] = inst_18264__$1);

(statearr_18326[(10)] = inst_18266__$1);

(statearr_18326[(14)] = inst_18274);

(statearr_18326[(11)] = inst_18265__$1);

(statearr_18326[(12)] = inst_18267__$1);

return statearr_18326;
})();
var statearr_18327_19600 = state_18312__$1;
(statearr_18327_19600[(2)] = null);

(statearr_18327_19600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (22))){
var state_18312__$1 = state_18312;
var statearr_18328_19601 = state_18312__$1;
(statearr_18328_19601[(2)] = null);

(statearr_18328_19601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (6))){
var inst_18253 = (state_18312[(13)]);
var inst_18262 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18253) : f.call(null,inst_18253));
var inst_18263 = cljs.core.seq(inst_18262);
var inst_18264 = inst_18263;
var inst_18265 = null;
var inst_18266 = (0);
var inst_18267 = (0);
var state_18312__$1 = (function (){var statearr_18329 = state_18312;
(statearr_18329[(8)] = inst_18264);

(statearr_18329[(10)] = inst_18266);

(statearr_18329[(11)] = inst_18265);

(statearr_18329[(12)] = inst_18267);

return statearr_18329;
})();
var statearr_18330_19606 = state_18312__$1;
(statearr_18330_19606[(2)] = null);

(statearr_18330_19606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (17))){
var inst_18278 = (state_18312[(7)]);
var inst_18282 = cljs.core.chunk_first(inst_18278);
var inst_18283 = cljs.core.chunk_rest(inst_18278);
var inst_18284 = cljs.core.count(inst_18282);
var inst_18264 = inst_18283;
var inst_18265 = inst_18282;
var inst_18266 = inst_18284;
var inst_18267 = (0);
var state_18312__$1 = (function (){var statearr_18331 = state_18312;
(statearr_18331[(8)] = inst_18264);

(statearr_18331[(10)] = inst_18266);

(statearr_18331[(11)] = inst_18265);

(statearr_18331[(12)] = inst_18267);

return statearr_18331;
})();
var statearr_18332_19607 = state_18312__$1;
(statearr_18332_19607[(2)] = null);

(statearr_18332_19607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (3))){
var inst_18310 = (state_18312[(2)]);
var state_18312__$1 = state_18312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18312__$1,inst_18310);
} else {
if((state_val_18313 === (12))){
var inst_18298 = (state_18312[(2)]);
var state_18312__$1 = state_18312;
var statearr_18333_19608 = state_18312__$1;
(statearr_18333_19608[(2)] = inst_18298);

(statearr_18333_19608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (2))){
var state_18312__$1 = state_18312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18312__$1,(4),in$);
} else {
if((state_val_18313 === (23))){
var inst_18306 = (state_18312[(2)]);
var state_18312__$1 = state_18312;
var statearr_18334_19609 = state_18312__$1;
(statearr_18334_19609[(2)] = inst_18306);

(statearr_18334_19609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (19))){
var inst_18293 = (state_18312[(2)]);
var state_18312__$1 = state_18312;
var statearr_18335_19610 = state_18312__$1;
(statearr_18335_19610[(2)] = inst_18293);

(statearr_18335_19610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (11))){
var inst_18264 = (state_18312[(8)]);
var inst_18278 = (state_18312[(7)]);
var inst_18278__$1 = cljs.core.seq(inst_18264);
var state_18312__$1 = (function (){var statearr_18336 = state_18312;
(statearr_18336[(7)] = inst_18278__$1);

return statearr_18336;
})();
if(inst_18278__$1){
var statearr_18337_19611 = state_18312__$1;
(statearr_18337_19611[(1)] = (14));

} else {
var statearr_18338_19612 = state_18312__$1;
(statearr_18338_19612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (9))){
var inst_18300 = (state_18312[(2)]);
var inst_18301 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18312__$1 = (function (){var statearr_18339 = state_18312;
(statearr_18339[(15)] = inst_18300);

return statearr_18339;
})();
if(cljs.core.truth_(inst_18301)){
var statearr_18340_19613 = state_18312__$1;
(statearr_18340_19613[(1)] = (21));

} else {
var statearr_18341_19614 = state_18312__$1;
(statearr_18341_19614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (5))){
var inst_18256 = cljs.core.async.close_BANG_(out);
var state_18312__$1 = state_18312;
var statearr_18342_19615 = state_18312__$1;
(statearr_18342_19615[(2)] = inst_18256);

(statearr_18342_19615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (14))){
var inst_18278 = (state_18312[(7)]);
var inst_18280 = cljs.core.chunked_seq_QMARK_(inst_18278);
var state_18312__$1 = state_18312;
if(inst_18280){
var statearr_18343_19616 = state_18312__$1;
(statearr_18343_19616[(1)] = (17));

} else {
var statearr_18344_19617 = state_18312__$1;
(statearr_18344_19617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (16))){
var inst_18296 = (state_18312[(2)]);
var state_18312__$1 = state_18312;
var statearr_18345_19618 = state_18312__$1;
(statearr_18345_19618[(2)] = inst_18296);

(statearr_18345_19618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18313 === (10))){
var inst_18265 = (state_18312[(11)]);
var inst_18267 = (state_18312[(12)]);
var inst_18272 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18265,inst_18267);
var state_18312__$1 = state_18312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18312__$1,(13),out,inst_18272);
} else {
if((state_val_18313 === (18))){
var inst_18278 = (state_18312[(7)]);
var inst_18287 = cljs.core.first(inst_18278);
var state_18312__$1 = state_18312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18312__$1,(20),out,inst_18287);
} else {
if((state_val_18313 === (8))){
var inst_18266 = (state_18312[(10)]);
var inst_18267 = (state_18312[(12)]);
var inst_18269 = (inst_18267 < inst_18266);
var inst_18270 = inst_18269;
var state_18312__$1 = state_18312;
if(cljs.core.truth_(inst_18270)){
var statearr_18346_19619 = state_18312__$1;
(statearr_18346_19619[(1)] = (10));

} else {
var statearr_18347_19620 = state_18312__$1;
(statearr_18347_19620[(1)] = (11));

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
});})(c__16663__auto__))
;
return ((function (switch__16488__auto__,c__16663__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16489__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16489__auto____0 = (function (){
var statearr_18348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18348[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16489__auto__);

(statearr_18348[(1)] = (1));

return statearr_18348;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16489__auto____1 = (function (state_18312){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18312);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18349){if((e18349 instanceof Object)){
var ex__16492__auto__ = e18349;
var statearr_18350_19759 = state_18312;
(statearr_18350_19759[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19760 = state_18312;
state_18312 = G__19760;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16489__auto__ = function(state_18312){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16489__auto____1.call(this,state_18312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16489__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16489__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto__))
})();
var state__16665__auto__ = (function (){var statearr_18351 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18351[(6)] = c__16663__auto__);

return statearr_18351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto__))
);

return c__16663__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18353 = arguments.length;
switch (G__18353) {
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
var G__18355 = arguments.length;
switch (G__18355) {
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
var G__18357 = arguments.length;
switch (G__18357) {
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
var c__16663__auto___19764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19764,out){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19764,out){
return (function (state_18381){
var state_val_18382 = (state_18381[(1)]);
if((state_val_18382 === (7))){
var inst_18376 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18383_19765 = state_18381__$1;
(statearr_18383_19765[(2)] = inst_18376);

(statearr_18383_19765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (1))){
var inst_18358 = null;
var state_18381__$1 = (function (){var statearr_18384 = state_18381;
(statearr_18384[(7)] = inst_18358);

return statearr_18384;
})();
var statearr_18385_19767 = state_18381__$1;
(statearr_18385_19767[(2)] = null);

(statearr_18385_19767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (4))){
var inst_18361 = (state_18381[(8)]);
var inst_18361__$1 = (state_18381[(2)]);
var inst_18362 = (inst_18361__$1 == null);
var inst_18363 = cljs.core.not(inst_18362);
var state_18381__$1 = (function (){var statearr_18386 = state_18381;
(statearr_18386[(8)] = inst_18361__$1);

return statearr_18386;
})();
if(inst_18363){
var statearr_18387_19769 = state_18381__$1;
(statearr_18387_19769[(1)] = (5));

} else {
var statearr_18388_19771 = state_18381__$1;
(statearr_18388_19771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (6))){
var state_18381__$1 = state_18381;
var statearr_18389_19772 = state_18381__$1;
(statearr_18389_19772[(2)] = null);

(statearr_18389_19772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (3))){
var inst_18378 = (state_18381[(2)]);
var inst_18379 = cljs.core.async.close_BANG_(out);
var state_18381__$1 = (function (){var statearr_18390 = state_18381;
(statearr_18390[(9)] = inst_18378);

return statearr_18390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18381__$1,inst_18379);
} else {
if((state_val_18382 === (2))){
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18381__$1,(4),ch);
} else {
if((state_val_18382 === (11))){
var inst_18361 = (state_18381[(8)]);
var inst_18370 = (state_18381[(2)]);
var inst_18358 = inst_18361;
var state_18381__$1 = (function (){var statearr_18391 = state_18381;
(statearr_18391[(10)] = inst_18370);

(statearr_18391[(7)] = inst_18358);

return statearr_18391;
})();
var statearr_18392_19774 = state_18381__$1;
(statearr_18392_19774[(2)] = null);

(statearr_18392_19774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (9))){
var inst_18361 = (state_18381[(8)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18381__$1,(11),out,inst_18361);
} else {
if((state_val_18382 === (5))){
var inst_18361 = (state_18381[(8)]);
var inst_18358 = (state_18381[(7)]);
var inst_18365 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18361,inst_18358);
var state_18381__$1 = state_18381;
if(inst_18365){
var statearr_18394_19775 = state_18381__$1;
(statearr_18394_19775[(1)] = (8));

} else {
var statearr_18395_19776 = state_18381__$1;
(statearr_18395_19776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (10))){
var inst_18373 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18396_19777 = state_18381__$1;
(statearr_18396_19777[(2)] = inst_18373);

(statearr_18396_19777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (8))){
var inst_18358 = (state_18381[(7)]);
var tmp18393 = inst_18358;
var inst_18358__$1 = tmp18393;
var state_18381__$1 = (function (){var statearr_18397 = state_18381;
(statearr_18397[(7)] = inst_18358__$1);

return statearr_18397;
})();
var statearr_18398_19778 = state_18381__$1;
(statearr_18398_19778[(2)] = null);

(statearr_18398_19778[(1)] = (2));


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
});})(c__16663__auto___19764,out))
;
return ((function (switch__16488__auto__,c__16663__auto___19764,out){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18399[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18399[(1)] = (1));

return statearr_18399;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_18381){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18381);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18400){if((e18400 instanceof Object)){
var ex__16492__auto__ = e18400;
var statearr_18401_19779 = state_18381;
(statearr_18401_19779[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19782 = state_18381;
state_18381 = G__19782;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_18381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_18381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19764,out))
})();
var state__16665__auto__ = (function (){var statearr_18402 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18402[(6)] = c__16663__auto___19764);

return statearr_18402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19764,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18404 = arguments.length;
switch (G__18404) {
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
var c__16663__auto___19788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19788,out){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19788,out){
return (function (state_18442){
var state_val_18443 = (state_18442[(1)]);
if((state_val_18443 === (7))){
var inst_18438 = (state_18442[(2)]);
var state_18442__$1 = state_18442;
var statearr_18444_19789 = state_18442__$1;
(statearr_18444_19789[(2)] = inst_18438);

(statearr_18444_19789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (1))){
var inst_18405 = (new Array(n));
var inst_18406 = inst_18405;
var inst_18407 = (0);
var state_18442__$1 = (function (){var statearr_18445 = state_18442;
(statearr_18445[(7)] = inst_18406);

(statearr_18445[(8)] = inst_18407);

return statearr_18445;
})();
var statearr_18446_19791 = state_18442__$1;
(statearr_18446_19791[(2)] = null);

(statearr_18446_19791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (4))){
var inst_18410 = (state_18442[(9)]);
var inst_18410__$1 = (state_18442[(2)]);
var inst_18411 = (inst_18410__$1 == null);
var inst_18412 = cljs.core.not(inst_18411);
var state_18442__$1 = (function (){var statearr_18447 = state_18442;
(statearr_18447[(9)] = inst_18410__$1);

return statearr_18447;
})();
if(inst_18412){
var statearr_18448_19792 = state_18442__$1;
(statearr_18448_19792[(1)] = (5));

} else {
var statearr_18449_19793 = state_18442__$1;
(statearr_18449_19793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (15))){
var inst_18432 = (state_18442[(2)]);
var state_18442__$1 = state_18442;
var statearr_18450_19794 = state_18442__$1;
(statearr_18450_19794[(2)] = inst_18432);

(statearr_18450_19794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (13))){
var state_18442__$1 = state_18442;
var statearr_18451_19796 = state_18442__$1;
(statearr_18451_19796[(2)] = null);

(statearr_18451_19796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (6))){
var inst_18407 = (state_18442[(8)]);
var inst_18428 = (inst_18407 > (0));
var state_18442__$1 = state_18442;
if(cljs.core.truth_(inst_18428)){
var statearr_18452_19798 = state_18442__$1;
(statearr_18452_19798[(1)] = (12));

} else {
var statearr_18453_19799 = state_18442__$1;
(statearr_18453_19799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (3))){
var inst_18440 = (state_18442[(2)]);
var state_18442__$1 = state_18442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18442__$1,inst_18440);
} else {
if((state_val_18443 === (12))){
var inst_18406 = (state_18442[(7)]);
var inst_18430 = cljs.core.vec(inst_18406);
var state_18442__$1 = state_18442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18442__$1,(15),out,inst_18430);
} else {
if((state_val_18443 === (2))){
var state_18442__$1 = state_18442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18442__$1,(4),ch);
} else {
if((state_val_18443 === (11))){
var inst_18422 = (state_18442[(2)]);
var inst_18423 = (new Array(n));
var inst_18406 = inst_18423;
var inst_18407 = (0);
var state_18442__$1 = (function (){var statearr_18454 = state_18442;
(statearr_18454[(7)] = inst_18406);

(statearr_18454[(10)] = inst_18422);

(statearr_18454[(8)] = inst_18407);

return statearr_18454;
})();
var statearr_18455_19800 = state_18442__$1;
(statearr_18455_19800[(2)] = null);

(statearr_18455_19800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (9))){
var inst_18406 = (state_18442[(7)]);
var inst_18420 = cljs.core.vec(inst_18406);
var state_18442__$1 = state_18442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18442__$1,(11),out,inst_18420);
} else {
if((state_val_18443 === (5))){
var inst_18410 = (state_18442[(9)]);
var inst_18406 = (state_18442[(7)]);
var inst_18415 = (state_18442[(11)]);
var inst_18407 = (state_18442[(8)]);
var inst_18414 = (inst_18406[inst_18407] = inst_18410);
var inst_18415__$1 = (inst_18407 + (1));
var inst_18416 = (inst_18415__$1 < n);
var state_18442__$1 = (function (){var statearr_18456 = state_18442;
(statearr_18456[(12)] = inst_18414);

(statearr_18456[(11)] = inst_18415__$1);

return statearr_18456;
})();
if(cljs.core.truth_(inst_18416)){
var statearr_18457_19801 = state_18442__$1;
(statearr_18457_19801[(1)] = (8));

} else {
var statearr_18458_19802 = state_18442__$1;
(statearr_18458_19802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (14))){
var inst_18435 = (state_18442[(2)]);
var inst_18436 = cljs.core.async.close_BANG_(out);
var state_18442__$1 = (function (){var statearr_18460 = state_18442;
(statearr_18460[(13)] = inst_18435);

return statearr_18460;
})();
var statearr_18461_19803 = state_18442__$1;
(statearr_18461_19803[(2)] = inst_18436);

(statearr_18461_19803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (10))){
var inst_18426 = (state_18442[(2)]);
var state_18442__$1 = state_18442;
var statearr_18462_19804 = state_18442__$1;
(statearr_18462_19804[(2)] = inst_18426);

(statearr_18462_19804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18443 === (8))){
var inst_18406 = (state_18442[(7)]);
var inst_18415 = (state_18442[(11)]);
var tmp18459 = inst_18406;
var inst_18406__$1 = tmp18459;
var inst_18407 = inst_18415;
var state_18442__$1 = (function (){var statearr_18463 = state_18442;
(statearr_18463[(7)] = inst_18406__$1);

(statearr_18463[(8)] = inst_18407);

return statearr_18463;
})();
var statearr_18464_19805 = state_18442__$1;
(statearr_18464_19805[(2)] = null);

(statearr_18464_19805[(1)] = (2));


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
});})(c__16663__auto___19788,out))
;
return ((function (switch__16488__auto__,c__16663__auto___19788,out){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18465[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18465[(1)] = (1));

return statearr_18465;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_18442){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18442);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18466){if((e18466 instanceof Object)){
var ex__16492__auto__ = e18466;
var statearr_18467_19806 = state_18442;
(statearr_18467_19806[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19807 = state_18442;
state_18442 = G__19807;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_18442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_18442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19788,out))
})();
var state__16665__auto__ = (function (){var statearr_18468 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18468[(6)] = c__16663__auto___19788);

return statearr_18468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19788,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18470 = arguments.length;
switch (G__18470) {
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
var c__16663__auto___19809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19809,out){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19809,out){
return (function (state_18512){
var state_val_18513 = (state_18512[(1)]);
if((state_val_18513 === (7))){
var inst_18508 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18514_19810 = state_18512__$1;
(statearr_18514_19810[(2)] = inst_18508);

(statearr_18514_19810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (1))){
var inst_18471 = [];
var inst_18472 = inst_18471;
var inst_18473 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18512__$1 = (function (){var statearr_18515 = state_18512;
(statearr_18515[(7)] = inst_18473);

(statearr_18515[(8)] = inst_18472);

return statearr_18515;
})();
var statearr_18516_19811 = state_18512__$1;
(statearr_18516_19811[(2)] = null);

(statearr_18516_19811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (4))){
var inst_18476 = (state_18512[(9)]);
var inst_18476__$1 = (state_18512[(2)]);
var inst_18477 = (inst_18476__$1 == null);
var inst_18478 = cljs.core.not(inst_18477);
var state_18512__$1 = (function (){var statearr_18517 = state_18512;
(statearr_18517[(9)] = inst_18476__$1);

return statearr_18517;
})();
if(inst_18478){
var statearr_18518_19816 = state_18512__$1;
(statearr_18518_19816[(1)] = (5));

} else {
var statearr_18519_19817 = state_18512__$1;
(statearr_18519_19817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (15))){
var inst_18502 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18520_19818 = state_18512__$1;
(statearr_18520_19818[(2)] = inst_18502);

(statearr_18520_19818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (13))){
var state_18512__$1 = state_18512;
var statearr_18521_19819 = state_18512__$1;
(statearr_18521_19819[(2)] = null);

(statearr_18521_19819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (6))){
var inst_18472 = (state_18512[(8)]);
var inst_18497 = inst_18472.length;
var inst_18498 = (inst_18497 > (0));
var state_18512__$1 = state_18512;
if(cljs.core.truth_(inst_18498)){
var statearr_18522_19825 = state_18512__$1;
(statearr_18522_19825[(1)] = (12));

} else {
var statearr_18523_19826 = state_18512__$1;
(statearr_18523_19826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (3))){
var inst_18510 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18512__$1,inst_18510);
} else {
if((state_val_18513 === (12))){
var inst_18472 = (state_18512[(8)]);
var inst_18500 = cljs.core.vec(inst_18472);
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18512__$1,(15),out,inst_18500);
} else {
if((state_val_18513 === (2))){
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18512__$1,(4),ch);
} else {
if((state_val_18513 === (11))){
var inst_18476 = (state_18512[(9)]);
var inst_18480 = (state_18512[(10)]);
var inst_18490 = (state_18512[(2)]);
var inst_18491 = [];
var inst_18492 = inst_18491.push(inst_18476);
var inst_18472 = inst_18491;
var inst_18473 = inst_18480;
var state_18512__$1 = (function (){var statearr_18524 = state_18512;
(statearr_18524[(11)] = inst_18492);

(statearr_18524[(7)] = inst_18473);

(statearr_18524[(12)] = inst_18490);

(statearr_18524[(8)] = inst_18472);

return statearr_18524;
})();
var statearr_18525_19857 = state_18512__$1;
(statearr_18525_19857[(2)] = null);

(statearr_18525_19857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (9))){
var inst_18472 = (state_18512[(8)]);
var inst_18488 = cljs.core.vec(inst_18472);
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18512__$1,(11),out,inst_18488);
} else {
if((state_val_18513 === (5))){
var inst_18473 = (state_18512[(7)]);
var inst_18476 = (state_18512[(9)]);
var inst_18480 = (state_18512[(10)]);
var inst_18480__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18476) : f.call(null,inst_18476));
var inst_18481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18480__$1,inst_18473);
var inst_18482 = cljs.core.keyword_identical_QMARK_(inst_18473,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18483 = ((inst_18481) || (inst_18482));
var state_18512__$1 = (function (){var statearr_18526 = state_18512;
(statearr_18526[(10)] = inst_18480__$1);

return statearr_18526;
})();
if(cljs.core.truth_(inst_18483)){
var statearr_18527_19858 = state_18512__$1;
(statearr_18527_19858[(1)] = (8));

} else {
var statearr_18528_19859 = state_18512__$1;
(statearr_18528_19859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (14))){
var inst_18505 = (state_18512[(2)]);
var inst_18506 = cljs.core.async.close_BANG_(out);
var state_18512__$1 = (function (){var statearr_18530 = state_18512;
(statearr_18530[(13)] = inst_18505);

return statearr_18530;
})();
var statearr_18531_19866 = state_18512__$1;
(statearr_18531_19866[(2)] = inst_18506);

(statearr_18531_19866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (10))){
var inst_18495 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18532_19870 = state_18512__$1;
(statearr_18532_19870[(2)] = inst_18495);

(statearr_18532_19870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (8))){
var inst_18472 = (state_18512[(8)]);
var inst_18476 = (state_18512[(9)]);
var inst_18480 = (state_18512[(10)]);
var inst_18485 = inst_18472.push(inst_18476);
var tmp18529 = inst_18472;
var inst_18472__$1 = tmp18529;
var inst_18473 = inst_18480;
var state_18512__$1 = (function (){var statearr_18533 = state_18512;
(statearr_18533[(7)] = inst_18473);

(statearr_18533[(8)] = inst_18472__$1);

(statearr_18533[(14)] = inst_18485);

return statearr_18533;
})();
var statearr_18534_19874 = state_18512__$1;
(statearr_18534_19874[(2)] = null);

(statearr_18534_19874[(1)] = (2));


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
});})(c__16663__auto___19809,out))
;
return ((function (switch__16488__auto__,c__16663__auto___19809,out){
return (function() {
var cljs$core$async$state_machine__16489__auto__ = null;
var cljs$core$async$state_machine__16489__auto____0 = (function (){
var statearr_18535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18535[(0)] = cljs$core$async$state_machine__16489__auto__);

(statearr_18535[(1)] = (1));

return statearr_18535;
});
var cljs$core$async$state_machine__16489__auto____1 = (function (state_18512){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_18512);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e18536){if((e18536 instanceof Object)){
var ex__16492__auto__ = e18536;
var statearr_18537_19875 = state_18512;
(statearr_18537_19875[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19876 = state_18512;
state_18512 = G__19876;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
cljs$core$async$state_machine__16489__auto__ = function(state_18512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16489__auto____1.call(this,state_18512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16489__auto____0;
cljs$core$async$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16489__auto____1;
return cljs$core$async$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19809,out))
})();
var state__16665__auto__ = (function (){var statearr_18538 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_18538[(6)] = c__16663__auto___19809);

return statearr_18538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19809,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
