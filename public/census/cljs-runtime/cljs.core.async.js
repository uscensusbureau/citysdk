goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3938 = arguments.length;
switch (G__3938) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3939 = (function (f,blockable,meta3940){
this.f = f;
this.blockable = blockable;
this.meta3940 = meta3940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3941,meta3940__$1){
var self__ = this;
var _3941__$1 = this;
return (new cljs.core.async.t_cljs$core$async3939(self__.f,self__.blockable,meta3940__$1));
});

cljs.core.async.t_cljs$core$async3939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3941){
var self__ = this;
var _3941__$1 = this;
return self__.meta3940;
});

cljs.core.async.t_cljs$core$async3939.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3939.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3940","meta3940",-1342147161,null)], null);
});

cljs.core.async.t_cljs$core$async3939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3939";

cljs.core.async.t_cljs$core$async3939.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async3939");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3939.
 */
cljs.core.async.__GT_t_cljs$core$async3939 = (function cljs$core$async$__GT_t_cljs$core$async3939(f__$1,blockable__$1,meta3940){
return (new cljs.core.async.t_cljs$core$async3939(f__$1,blockable__$1,meta3940));
});

}

return (new cljs.core.async.t_cljs$core$async3939(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__3954 = arguments.length;
switch (G__3954) {
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
var G__3959 = arguments.length;
switch (G__3959) {
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
var G__3967 = arguments.length;
switch (G__3967) {
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
var val_6689 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_6689) : fn1.call(null,val_6689));
} else {
cljs.core.async.impl.dispatch.run(((function (val_6689,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_6689) : fn1.call(null,val_6689));
});})(val_6689,ret))
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
var G__3974 = arguments.length;
switch (G__3974) {
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
var n__4518__auto___6711 = n;
var x_6712 = (0);
while(true){
if((x_6712 < n__4518__auto___6711)){
(a[x_6712] = (0));

var G__6713 = (x_6712 + (1));
x_6712 = G__6713;
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

var G__6714 = (i + (1));
i = G__6714;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3980 = (function (flag,meta3981){
this.flag = flag;
this.meta3981 = meta3981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3982,meta3981__$1){
var self__ = this;
var _3982__$1 = this;
return (new cljs.core.async.t_cljs$core$async3980(self__.flag,meta3981__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3982){
var self__ = this;
var _3982__$1 = this;
return self__.meta3981;
});})(flag))
;

cljs.core.async.t_cljs$core$async3980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3980.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3981","meta3981",2141865464,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3980";

cljs.core.async.t_cljs$core$async3980.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async3980");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3980.
 */
cljs.core.async.__GT_t_cljs$core$async3980 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3980(flag__$1,meta3981){
return (new cljs.core.async.t_cljs$core$async3980(flag__$1,meta3981));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3980(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3983 = (function (flag,cb,meta3984){
this.flag = flag;
this.cb = cb;
this.meta3984 = meta3984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3985,meta3984__$1){
var self__ = this;
var _3985__$1 = this;
return (new cljs.core.async.t_cljs$core$async3983(self__.flag,self__.cb,meta3984__$1));
});

cljs.core.async.t_cljs$core$async3983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3985){
var self__ = this;
var _3985__$1 = this;
return self__.meta3984;
});

cljs.core.async.t_cljs$core$async3983.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async3983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3984","meta3984",800969665,null)], null);
});

cljs.core.async.t_cljs$core$async3983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3983";

cljs.core.async.t_cljs$core$async3983.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async3983");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3983.
 */
cljs.core.async.__GT_t_cljs$core$async3983 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3983(flag__$1,cb__$1,meta3984){
return (new cljs.core.async.t_cljs$core$async3983(flag__$1,cb__$1,meta3984));
});

}

return (new cljs.core.async.t_cljs$core$async3983(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__3993_SHARP_){
var G__3996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3993_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__3996) : fret.call(null,G__3996));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3995_SHARP_){
var G__3997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3995_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__3997) : fret.call(null,G__3997));
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
var G__6726 = (i + (1));
i = G__6726;
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
var len__4641__auto___6729 = arguments.length;
var i__4642__auto___6730 = (0);
while(true){
if((i__4642__auto___6730 < len__4641__auto___6729)){
args__4647__auto__.push((arguments[i__4642__auto___6730]));

var G__6731 = (i__4642__auto___6730 + (1));
i__4642__auto___6730 = G__6731;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4021){
var map__4022 = p__4021;
var map__4022__$1 = (((((!((map__4022 == null))))?(((((map__4022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4022):map__4022);
var opts = map__4022__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4019){
var G__4020 = cljs.core.first(seq4019);
var seq4019__$1 = cljs.core.next(seq4019);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4020,seq4019__$1);
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
var G__4028 = arguments.length;
switch (G__4028) {
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
var c__3820__auto___6740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___6740){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___6740){
return (function (state_4062){
var state_val_4063 = (state_4062[(1)]);
if((state_val_4063 === (7))){
var inst_4058 = (state_4062[(2)]);
var state_4062__$1 = state_4062;
var statearr_4068_6742 = state_4062__$1;
(statearr_4068_6742[(2)] = inst_4058);

(statearr_4068_6742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (1))){
var state_4062__$1 = state_4062;
var statearr_4069_6745 = state_4062__$1;
(statearr_4069_6745[(2)] = null);

(statearr_4069_6745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (4))){
var inst_4036 = (state_4062[(7)]);
var inst_4036__$1 = (state_4062[(2)]);
var inst_4037 = (inst_4036__$1 == null);
var state_4062__$1 = (function (){var statearr_4071 = state_4062;
(statearr_4071[(7)] = inst_4036__$1);

return statearr_4071;
})();
if(cljs.core.truth_(inst_4037)){
var statearr_4072_6747 = state_4062__$1;
(statearr_4072_6747[(1)] = (5));

} else {
var statearr_4073_6748 = state_4062__$1;
(statearr_4073_6748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (13))){
var state_4062__$1 = state_4062;
var statearr_4077_6749 = state_4062__$1;
(statearr_4077_6749[(2)] = null);

(statearr_4077_6749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (6))){
var inst_4036 = (state_4062[(7)]);
var state_4062__$1 = state_4062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4062__$1,(11),to,inst_4036);
} else {
if((state_val_4063 === (3))){
var inst_4060 = (state_4062[(2)]);
var state_4062__$1 = state_4062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4062__$1,inst_4060);
} else {
if((state_val_4063 === (12))){
var state_4062__$1 = state_4062;
var statearr_4080_6751 = state_4062__$1;
(statearr_4080_6751[(2)] = null);

(statearr_4080_6751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (2))){
var state_4062__$1 = state_4062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4062__$1,(4),from);
} else {
if((state_val_4063 === (11))){
var inst_4051 = (state_4062[(2)]);
var state_4062__$1 = state_4062;
if(cljs.core.truth_(inst_4051)){
var statearr_4081_6754 = state_4062__$1;
(statearr_4081_6754[(1)] = (12));

} else {
var statearr_4084_6755 = state_4062__$1;
(statearr_4084_6755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (9))){
var state_4062__$1 = state_4062;
var statearr_4085_6757 = state_4062__$1;
(statearr_4085_6757[(2)] = null);

(statearr_4085_6757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (5))){
var state_4062__$1 = state_4062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4086_6758 = state_4062__$1;
(statearr_4086_6758[(1)] = (8));

} else {
var statearr_4087_6759 = state_4062__$1;
(statearr_4087_6759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (14))){
var inst_4056 = (state_4062[(2)]);
var state_4062__$1 = state_4062;
var statearr_4089_6760 = state_4062__$1;
(statearr_4089_6760[(2)] = inst_4056);

(statearr_4089_6760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (10))){
var inst_4047 = (state_4062[(2)]);
var state_4062__$1 = state_4062;
var statearr_4091_6761 = state_4062__$1;
(statearr_4091_6761[(2)] = inst_4047);

(statearr_4091_6761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4063 === (8))){
var inst_4044 = cljs.core.async.close_BANG_(to);
var state_4062__$1 = state_4062;
var statearr_4097_6762 = state_4062__$1;
(statearr_4097_6762[(2)] = inst_4044);

(statearr_4097_6762[(1)] = (10));


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
});})(c__3820__auto___6740))
;
return ((function (switch__3728__auto__,c__3820__auto___6740){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_4104 = [null,null,null,null,null,null,null,null];
(statearr_4104[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_4104[(1)] = (1));

return statearr_4104;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_4062){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4062);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4105){if((e4105 instanceof Object)){
var ex__3732__auto__ = e4105;
var statearr_4106_6766 = state_4062;
(statearr_4106_6766[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6767 = state_4062;
state_4062 = G__6767;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_4062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_4062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___6740))
})();
var state__3822__auto__ = (function (){var statearr_4109 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4109[(6)] = c__3820__auto___6740);

return statearr_4109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___6740))
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
return (function (p__4120){
var vec__4121 = p__4120;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4121,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4121,(1),null);
var job = vec__4121;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__3820__auto___6768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___6768,res,vec__4121,v,p,job,jobs,results){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___6768,res,vec__4121,v,p,job,jobs,results){
return (function (state_4131){
var state_val_4132 = (state_4131[(1)]);
if((state_val_4132 === (1))){
var state_4131__$1 = state_4131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4131__$1,(2),res,v);
} else {
if((state_val_4132 === (2))){
var inst_4128 = (state_4131[(2)]);
var inst_4129 = cljs.core.async.close_BANG_(res);
var state_4131__$1 = (function (){var statearr_4133 = state_4131;
(statearr_4133[(7)] = inst_4128);

return statearr_4133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_4131__$1,inst_4129);
} else {
return null;
}
}
});})(c__3820__auto___6768,res,vec__4121,v,p,job,jobs,results))
;
return ((function (switch__3728__auto__,c__3820__auto___6768,res,vec__4121,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0 = (function (){
var statearr_4134 = [null,null,null,null,null,null,null,null];
(statearr_4134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__);

(statearr_4134[(1)] = (1));

return statearr_4134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1 = (function (state_4131){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4131);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4135){if((e4135 instanceof Object)){
var ex__3732__auto__ = e4135;
var statearr_4136_6780 = state_4131;
(statearr_4136_6780[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6785 = state_4131;
state_4131 = G__6785;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = function(state_4131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1.call(this,state_4131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___6768,res,vec__4121,v,p,job,jobs,results))
})();
var state__3822__auto__ = (function (){var statearr_4139 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4139[(6)] = c__3820__auto___6768);

return statearr_4139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___6768,res,vec__4121,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4142){
var vec__4143 = p__4142;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4143,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4143,(1),null);
var job = vec__4143;
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
var n__4518__auto___6794 = n;
var __6796 = (0);
while(true){
if((__6796 < n__4518__auto___6794)){
var G__4151_6797 = type;
var G__4151_6798__$1 = (((G__4151_6797 instanceof cljs.core.Keyword))?G__4151_6797.fqn:null);
switch (G__4151_6798__$1) {
case "compute":
var c__3820__auto___6800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__6796,c__3820__auto___6800,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (__6796,c__3820__auto___6800,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async){
return (function (state_4166){
var state_val_4167 = (state_4166[(1)]);
if((state_val_4167 === (1))){
var state_4166__$1 = state_4166;
var statearr_4171_6803 = state_4166__$1;
(statearr_4171_6803[(2)] = null);

(statearr_4171_6803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4167 === (2))){
var state_4166__$1 = state_4166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4166__$1,(4),jobs);
} else {
if((state_val_4167 === (3))){
var inst_4164 = (state_4166[(2)]);
var state_4166__$1 = state_4166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4166__$1,inst_4164);
} else {
if((state_val_4167 === (4))){
var inst_4154 = (state_4166[(2)]);
var inst_4155 = process(inst_4154);
var state_4166__$1 = state_4166;
if(cljs.core.truth_(inst_4155)){
var statearr_4181_6807 = state_4166__$1;
(statearr_4181_6807[(1)] = (5));

} else {
var statearr_4183_6808 = state_4166__$1;
(statearr_4183_6808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4167 === (5))){
var state_4166__$1 = state_4166;
var statearr_4187_6809 = state_4166__$1;
(statearr_4187_6809[(2)] = null);

(statearr_4187_6809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4167 === (6))){
var state_4166__$1 = state_4166;
var statearr_4189_6815 = state_4166__$1;
(statearr_4189_6815[(2)] = null);

(statearr_4189_6815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4167 === (7))){
var inst_4161 = (state_4166[(2)]);
var state_4166__$1 = state_4166;
var statearr_4190_6874 = state_4166__$1;
(statearr_4190_6874[(2)] = inst_4161);

(statearr_4190_6874[(1)] = (3));


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
});})(__6796,c__3820__auto___6800,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async))
;
return ((function (__6796,switch__3728__auto__,c__3820__auto___6800,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0 = (function (){
var statearr_4193 = [null,null,null,null,null,null,null];
(statearr_4193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__);

(statearr_4193[(1)] = (1));

return statearr_4193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1 = (function (state_4166){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4166);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4194){if((e4194 instanceof Object)){
var ex__3732__auto__ = e4194;
var statearr_4195_6875 = state_4166;
(statearr_4195_6875[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6877 = state_4166;
state_4166 = G__6877;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = function(state_4166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1.call(this,state_4166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__;
})()
;})(__6796,switch__3728__auto__,c__3820__auto___6800,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async))
})();
var state__3822__auto__ = (function (){var statearr_4196 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4196[(6)] = c__3820__auto___6800);

return statearr_4196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(__6796,c__3820__auto___6800,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async))
);


break;
case "async":
var c__3820__auto___6879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__6796,c__3820__auto___6879,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (__6796,c__3820__auto___6879,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async){
return (function (state_4211){
var state_val_4212 = (state_4211[(1)]);
if((state_val_4212 === (1))){
var state_4211__$1 = state_4211;
var statearr_4217_6882 = state_4211__$1;
(statearr_4217_6882[(2)] = null);

(statearr_4217_6882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4212 === (2))){
var state_4211__$1 = state_4211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4211__$1,(4),jobs);
} else {
if((state_val_4212 === (3))){
var inst_4209 = (state_4211[(2)]);
var state_4211__$1 = state_4211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4211__$1,inst_4209);
} else {
if((state_val_4212 === (4))){
var inst_4201 = (state_4211[(2)]);
var inst_4202 = async(inst_4201);
var state_4211__$1 = state_4211;
if(cljs.core.truth_(inst_4202)){
var statearr_4223_6884 = state_4211__$1;
(statearr_4223_6884[(1)] = (5));

} else {
var statearr_4224_6885 = state_4211__$1;
(statearr_4224_6885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4212 === (5))){
var state_4211__$1 = state_4211;
var statearr_4226_6887 = state_4211__$1;
(statearr_4226_6887[(2)] = null);

(statearr_4226_6887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4212 === (6))){
var state_4211__$1 = state_4211;
var statearr_4228_6890 = state_4211__$1;
(statearr_4228_6890[(2)] = null);

(statearr_4228_6890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4212 === (7))){
var inst_4207 = (state_4211[(2)]);
var state_4211__$1 = state_4211;
var statearr_4230_6893 = state_4211__$1;
(statearr_4230_6893[(2)] = inst_4207);

(statearr_4230_6893[(1)] = (3));


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
});})(__6796,c__3820__auto___6879,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async))
;
return ((function (__6796,switch__3728__auto__,c__3820__auto___6879,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0 = (function (){
var statearr_4235 = [null,null,null,null,null,null,null];
(statearr_4235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__);

(statearr_4235[(1)] = (1));

return statearr_4235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1 = (function (state_4211){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4211);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4238){if((e4238 instanceof Object)){
var ex__3732__auto__ = e4238;
var statearr_4239_6900 = state_4211;
(statearr_4239_6900[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6902 = state_4211;
state_4211 = G__6902;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = function(state_4211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1.call(this,state_4211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__;
})()
;})(__6796,switch__3728__auto__,c__3820__auto___6879,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async))
})();
var state__3822__auto__ = (function (){var statearr_4246 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4246[(6)] = c__3820__auto___6879);

return statearr_4246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(__6796,c__3820__auto___6879,G__4151_6797,G__4151_6798__$1,n__4518__auto___6794,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4151_6798__$1)].join('')));

}

var G__6911 = (__6796 + (1));
__6796 = G__6911;
continue;
} else {
}
break;
}

var c__3820__auto___6912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___6912,jobs,results,process,async){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___6912,jobs,results,process,async){
return (function (state_4312){
var state_val_4313 = (state_4312[(1)]);
if((state_val_4313 === (1))){
var state_4312__$1 = state_4312;
var statearr_4316_6915 = state_4312__$1;
(statearr_4316_6915[(2)] = null);

(statearr_4316_6915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (2))){
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4312__$1,(4),from);
} else {
if((state_val_4313 === (3))){
var inst_4310 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4312__$1,inst_4310);
} else {
if((state_val_4313 === (4))){
var inst_4249 = (state_4312[(7)]);
var inst_4249__$1 = (state_4312[(2)]);
var inst_4252 = (inst_4249__$1 == null);
var state_4312__$1 = (function (){var statearr_4325 = state_4312;
(statearr_4325[(7)] = inst_4249__$1);

return statearr_4325;
})();
if(cljs.core.truth_(inst_4252)){
var statearr_4326_6938 = state_4312__$1;
(statearr_4326_6938[(1)] = (5));

} else {
var statearr_4327_6940 = state_4312__$1;
(statearr_4327_6940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (5))){
var inst_4254 = cljs.core.async.close_BANG_(jobs);
var state_4312__$1 = state_4312;
var statearr_4328_6942 = state_4312__$1;
(statearr_4328_6942[(2)] = inst_4254);

(statearr_4328_6942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (6))){
var inst_4256 = (state_4312[(8)]);
var inst_4249 = (state_4312[(7)]);
var inst_4256__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_4259 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4300 = [inst_4249,inst_4256__$1];
var inst_4301 = (new cljs.core.PersistentVector(null,2,(5),inst_4259,inst_4300,null));
var state_4312__$1 = (function (){var statearr_4330 = state_4312;
(statearr_4330[(8)] = inst_4256__$1);

return statearr_4330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4312__$1,(8),jobs,inst_4301);
} else {
if((state_val_4313 === (7))){
var inst_4308 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
var statearr_4334_6947 = state_4312__$1;
(statearr_4334_6947[(2)] = inst_4308);

(statearr_4334_6947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (8))){
var inst_4256 = (state_4312[(8)]);
var inst_4303 = (state_4312[(2)]);
var state_4312__$1 = (function (){var statearr_4336 = state_4312;
(statearr_4336[(9)] = inst_4303);

return statearr_4336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4312__$1,(9),results,inst_4256);
} else {
if((state_val_4313 === (9))){
var inst_4305 = (state_4312[(2)]);
var state_4312__$1 = (function (){var statearr_4337 = state_4312;
(statearr_4337[(10)] = inst_4305);

return statearr_4337;
})();
var statearr_4339_6949 = state_4312__$1;
(statearr_4339_6949[(2)] = null);

(statearr_4339_6949[(1)] = (2));


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
});})(c__3820__auto___6912,jobs,results,process,async))
;
return ((function (switch__3728__auto__,c__3820__auto___6912,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0 = (function (){
var statearr_4342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__);

(statearr_4342[(1)] = (1));

return statearr_4342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1 = (function (state_4312){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4312);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4345){if((e4345 instanceof Object)){
var ex__3732__auto__ = e4345;
var statearr_4346_6954 = state_4312;
(statearr_4346_6954[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6955 = state_4312;
state_4312 = G__6955;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = function(state_4312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1.call(this,state_4312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___6912,jobs,results,process,async))
})();
var state__3822__auto__ = (function (){var statearr_4348 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4348[(6)] = c__3820__auto___6912);

return statearr_4348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___6912,jobs,results,process,async))
);


var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__,jobs,results,process,async){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__,jobs,results,process,async){
return (function (state_4395){
var state_val_4396 = (state_4395[(1)]);
if((state_val_4396 === (7))){
var inst_4391 = (state_4395[(2)]);
var state_4395__$1 = state_4395;
var statearr_4402_6959 = state_4395__$1;
(statearr_4402_6959[(2)] = inst_4391);

(statearr_4402_6959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (20))){
var state_4395__$1 = state_4395;
var statearr_4403_6961 = state_4395__$1;
(statearr_4403_6961[(2)] = null);

(statearr_4403_6961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (1))){
var state_4395__$1 = state_4395;
var statearr_4404_6962 = state_4395__$1;
(statearr_4404_6962[(2)] = null);

(statearr_4404_6962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (4))){
var inst_4352 = (state_4395[(7)]);
var inst_4352__$1 = (state_4395[(2)]);
var inst_4354 = (inst_4352__$1 == null);
var state_4395__$1 = (function (){var statearr_4406 = state_4395;
(statearr_4406[(7)] = inst_4352__$1);

return statearr_4406;
})();
if(cljs.core.truth_(inst_4354)){
var statearr_4407_6966 = state_4395__$1;
(statearr_4407_6966[(1)] = (5));

} else {
var statearr_4408_6969 = state_4395__$1;
(statearr_4408_6969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (15))){
var inst_4370 = (state_4395[(8)]);
var state_4395__$1 = state_4395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4395__$1,(18),to,inst_4370);
} else {
if((state_val_4396 === (21))){
var inst_4385 = (state_4395[(2)]);
var state_4395__$1 = state_4395;
var statearr_4410_6970 = state_4395__$1;
(statearr_4410_6970[(2)] = inst_4385);

(statearr_4410_6970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (13))){
var inst_4388 = (state_4395[(2)]);
var state_4395__$1 = (function (){var statearr_4412 = state_4395;
(statearr_4412[(9)] = inst_4388);

return statearr_4412;
})();
var statearr_4413_6972 = state_4395__$1;
(statearr_4413_6972[(2)] = null);

(statearr_4413_6972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (6))){
var inst_4352 = (state_4395[(7)]);
var state_4395__$1 = state_4395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4395__$1,(11),inst_4352);
} else {
if((state_val_4396 === (17))){
var inst_4380 = (state_4395[(2)]);
var state_4395__$1 = state_4395;
if(cljs.core.truth_(inst_4380)){
var statearr_4418_6975 = state_4395__$1;
(statearr_4418_6975[(1)] = (19));

} else {
var statearr_4419_6976 = state_4395__$1;
(statearr_4419_6976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (3))){
var inst_4393 = (state_4395[(2)]);
var state_4395__$1 = state_4395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4395__$1,inst_4393);
} else {
if((state_val_4396 === (12))){
var inst_4366 = (state_4395[(10)]);
var state_4395__$1 = state_4395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4395__$1,(14),inst_4366);
} else {
if((state_val_4396 === (2))){
var state_4395__$1 = state_4395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4395__$1,(4),results);
} else {
if((state_val_4396 === (19))){
var state_4395__$1 = state_4395;
var statearr_4421_6980 = state_4395__$1;
(statearr_4421_6980[(2)] = null);

(statearr_4421_6980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (11))){
var inst_4366 = (state_4395[(2)]);
var state_4395__$1 = (function (){var statearr_4424 = state_4395;
(statearr_4424[(10)] = inst_4366);

return statearr_4424;
})();
var statearr_4425_6981 = state_4395__$1;
(statearr_4425_6981[(2)] = null);

(statearr_4425_6981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (9))){
var state_4395__$1 = state_4395;
var statearr_4433_6982 = state_4395__$1;
(statearr_4433_6982[(2)] = null);

(statearr_4433_6982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (5))){
var state_4395__$1 = state_4395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4436_6983 = state_4395__$1;
(statearr_4436_6983[(1)] = (8));

} else {
var statearr_4437_6984 = state_4395__$1;
(statearr_4437_6984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (14))){
var inst_4373 = (state_4395[(11)]);
var inst_4370 = (state_4395[(8)]);
var inst_4370__$1 = (state_4395[(2)]);
var inst_4372 = (inst_4370__$1 == null);
var inst_4373__$1 = cljs.core.not(inst_4372);
var state_4395__$1 = (function (){var statearr_4440 = state_4395;
(statearr_4440[(11)] = inst_4373__$1);

(statearr_4440[(8)] = inst_4370__$1);

return statearr_4440;
})();
if(inst_4373__$1){
var statearr_4441_6985 = state_4395__$1;
(statearr_4441_6985[(1)] = (15));

} else {
var statearr_4443_6986 = state_4395__$1;
(statearr_4443_6986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (16))){
var inst_4373 = (state_4395[(11)]);
var state_4395__$1 = state_4395;
var statearr_4445_6987 = state_4395__$1;
(statearr_4445_6987[(2)] = inst_4373);

(statearr_4445_6987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (10))){
var inst_4363 = (state_4395[(2)]);
var state_4395__$1 = state_4395;
var statearr_4446_6990 = state_4395__$1;
(statearr_4446_6990[(2)] = inst_4363);

(statearr_4446_6990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (18))){
var inst_4377 = (state_4395[(2)]);
var state_4395__$1 = state_4395;
var statearr_4448_6993 = state_4395__$1;
(statearr_4448_6993[(2)] = inst_4377);

(statearr_4448_6993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4396 === (8))){
var inst_4358 = cljs.core.async.close_BANG_(to);
var state_4395__$1 = state_4395;
var statearr_4454_6994 = state_4395__$1;
(statearr_4454_6994[(2)] = inst_4358);

(statearr_4454_6994[(1)] = (10));


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
});})(c__3820__auto__,jobs,results,process,async))
;
return ((function (switch__3728__auto__,c__3820__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0 = (function (){
var statearr_4461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__);

(statearr_4461[(1)] = (1));

return statearr_4461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1 = (function (state_4395){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4395);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4464){if((e4464 instanceof Object)){
var ex__3732__auto__ = e4464;
var statearr_4468_6997 = state_4395;
(statearr_4468_6997[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6998 = state_4395;
state_4395 = G__6998;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__ = function(state_4395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1.call(this,state_4395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__,jobs,results,process,async))
})();
var state__3822__auto__ = (function (){var statearr_4474 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4474[(6)] = c__3820__auto__);

return statearr_4474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__,jobs,results,process,async))
);

return c__3820__auto__;
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
var G__4509 = arguments.length;
switch (G__4509) {
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
var G__4535 = arguments.length;
switch (G__4535) {
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
var G__4550 = arguments.length;
switch (G__4550) {
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
var c__3820__auto___7047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7047,tc,fc){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7047,tc,fc){
return (function (state_4584){
var state_val_4585 = (state_4584[(1)]);
if((state_val_4585 === (7))){
var inst_4580 = (state_4584[(2)]);
var state_4584__$1 = state_4584;
var statearr_4588_7049 = state_4584__$1;
(statearr_4588_7049[(2)] = inst_4580);

(statearr_4588_7049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (1))){
var state_4584__$1 = state_4584;
var statearr_4590_7051 = state_4584__$1;
(statearr_4590_7051[(2)] = null);

(statearr_4590_7051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (4))){
var inst_4559 = (state_4584[(7)]);
var inst_4559__$1 = (state_4584[(2)]);
var inst_4560 = (inst_4559__$1 == null);
var state_4584__$1 = (function (){var statearr_4592 = state_4584;
(statearr_4592[(7)] = inst_4559__$1);

return statearr_4592;
})();
if(cljs.core.truth_(inst_4560)){
var statearr_4594_7054 = state_4584__$1;
(statearr_4594_7054[(1)] = (5));

} else {
var statearr_4596_7055 = state_4584__$1;
(statearr_4596_7055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (13))){
var state_4584__$1 = state_4584;
var statearr_4597_7057 = state_4584__$1;
(statearr_4597_7057[(2)] = null);

(statearr_4597_7057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (6))){
var inst_4559 = (state_4584[(7)]);
var inst_4567 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_4559) : p.call(null,inst_4559));
var state_4584__$1 = state_4584;
if(cljs.core.truth_(inst_4567)){
var statearr_4600_7059 = state_4584__$1;
(statearr_4600_7059[(1)] = (9));

} else {
var statearr_4601_7060 = state_4584__$1;
(statearr_4601_7060[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (3))){
var inst_4582 = (state_4584[(2)]);
var state_4584__$1 = state_4584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4584__$1,inst_4582);
} else {
if((state_val_4585 === (12))){
var state_4584__$1 = state_4584;
var statearr_4602_7063 = state_4584__$1;
(statearr_4602_7063[(2)] = null);

(statearr_4602_7063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (2))){
var state_4584__$1 = state_4584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4584__$1,(4),ch);
} else {
if((state_val_4585 === (11))){
var inst_4559 = (state_4584[(7)]);
var inst_4571 = (state_4584[(2)]);
var state_4584__$1 = state_4584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4584__$1,(8),inst_4571,inst_4559);
} else {
if((state_val_4585 === (9))){
var state_4584__$1 = state_4584;
var statearr_4607_7066 = state_4584__$1;
(statearr_4607_7066[(2)] = tc);

(statearr_4607_7066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (5))){
var inst_4563 = cljs.core.async.close_BANG_(tc);
var inst_4564 = cljs.core.async.close_BANG_(fc);
var state_4584__$1 = (function (){var statearr_4608 = state_4584;
(statearr_4608[(8)] = inst_4563);

return statearr_4608;
})();
var statearr_4610_7068 = state_4584__$1;
(statearr_4610_7068[(2)] = inst_4564);

(statearr_4610_7068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (14))){
var inst_4578 = (state_4584[(2)]);
var state_4584__$1 = state_4584;
var statearr_4612_7069 = state_4584__$1;
(statearr_4612_7069[(2)] = inst_4578);

(statearr_4612_7069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (10))){
var state_4584__$1 = state_4584;
var statearr_4613_7074 = state_4584__$1;
(statearr_4613_7074[(2)] = fc);

(statearr_4613_7074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4585 === (8))){
var inst_4573 = (state_4584[(2)]);
var state_4584__$1 = state_4584;
if(cljs.core.truth_(inst_4573)){
var statearr_4614_7076 = state_4584__$1;
(statearr_4614_7076[(1)] = (12));

} else {
var statearr_4616_7077 = state_4584__$1;
(statearr_4616_7077[(1)] = (13));

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
});})(c__3820__auto___7047,tc,fc))
;
return ((function (switch__3728__auto__,c__3820__auto___7047,tc,fc){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_4619 = [null,null,null,null,null,null,null,null,null];
(statearr_4619[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_4619[(1)] = (1));

return statearr_4619;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_4584){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4584);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4622){if((e4622 instanceof Object)){
var ex__3732__auto__ = e4622;
var statearr_4623_7078 = state_4584;
(statearr_4623_7078[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7079 = state_4584;
state_4584 = G__7079;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_4584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_4584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7047,tc,fc))
})();
var state__3822__auto__ = (function (){var statearr_4625 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4625[(6)] = c__3820__auto___7047);

return statearr_4625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7047,tc,fc))
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
var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__){
return (function (state_4657){
var state_val_4658 = (state_4657[(1)]);
if((state_val_4658 === (7))){
var inst_4653 = (state_4657[(2)]);
var state_4657__$1 = state_4657;
var statearr_4662_7080 = state_4657__$1;
(statearr_4662_7080[(2)] = inst_4653);

(statearr_4662_7080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4658 === (1))){
var inst_4627 = init;
var state_4657__$1 = (function (){var statearr_4664 = state_4657;
(statearr_4664[(7)] = inst_4627);

return statearr_4664;
})();
var statearr_4665_7081 = state_4657__$1;
(statearr_4665_7081[(2)] = null);

(statearr_4665_7081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4658 === (4))){
var inst_4630 = (state_4657[(8)]);
var inst_4630__$1 = (state_4657[(2)]);
var inst_4631 = (inst_4630__$1 == null);
var state_4657__$1 = (function (){var statearr_4666 = state_4657;
(statearr_4666[(8)] = inst_4630__$1);

return statearr_4666;
})();
if(cljs.core.truth_(inst_4631)){
var statearr_4667_7082 = state_4657__$1;
(statearr_4667_7082[(1)] = (5));

} else {
var statearr_4668_7083 = state_4657__$1;
(statearr_4668_7083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4658 === (6))){
var inst_4627 = (state_4657[(7)]);
var inst_4630 = (state_4657[(8)]);
var inst_4634 = (state_4657[(9)]);
var inst_4634__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_4627,inst_4630) : f.call(null,inst_4627,inst_4630));
var inst_4635 = cljs.core.reduced_QMARK_(inst_4634__$1);
var state_4657__$1 = (function (){var statearr_4669 = state_4657;
(statearr_4669[(9)] = inst_4634__$1);

return statearr_4669;
})();
if(inst_4635){
var statearr_4670_7085 = state_4657__$1;
(statearr_4670_7085[(1)] = (8));

} else {
var statearr_4671_7086 = state_4657__$1;
(statearr_4671_7086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4658 === (3))){
var inst_4655 = (state_4657[(2)]);
var state_4657__$1 = state_4657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4657__$1,inst_4655);
} else {
if((state_val_4658 === (2))){
var state_4657__$1 = state_4657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4657__$1,(4),ch);
} else {
if((state_val_4658 === (9))){
var inst_4634 = (state_4657[(9)]);
var inst_4627 = inst_4634;
var state_4657__$1 = (function (){var statearr_4720 = state_4657;
(statearr_4720[(7)] = inst_4627);

return statearr_4720;
})();
var statearr_4725_7093 = state_4657__$1;
(statearr_4725_7093[(2)] = null);

(statearr_4725_7093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4658 === (5))){
var inst_4627 = (state_4657[(7)]);
var state_4657__$1 = state_4657;
var statearr_4726_7097 = state_4657__$1;
(statearr_4726_7097[(2)] = inst_4627);

(statearr_4726_7097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4658 === (10))){
var inst_4651 = (state_4657[(2)]);
var state_4657__$1 = state_4657;
var statearr_4729_7098 = state_4657__$1;
(statearr_4729_7098[(2)] = inst_4651);

(statearr_4729_7098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4658 === (8))){
var inst_4634 = (state_4657[(9)]);
var inst_4647 = cljs.core.deref(inst_4634);
var state_4657__$1 = state_4657;
var statearr_4732_7100 = state_4657__$1;
(statearr_4732_7100[(2)] = inst_4647);

(statearr_4732_7100[(1)] = (10));


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
});})(c__3820__auto__))
;
return ((function (switch__3728__auto__,c__3820__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3729__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3729__auto____0 = (function (){
var statearr_4735 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4735[(0)] = cljs$core$async$reduce_$_state_machine__3729__auto__);

(statearr_4735[(1)] = (1));

return statearr_4735;
});
var cljs$core$async$reduce_$_state_machine__3729__auto____1 = (function (state_4657){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4657);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4738){if((e4738 instanceof Object)){
var ex__3732__auto__ = e4738;
var statearr_4739_7104 = state_4657;
(statearr_4739_7104[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7106 = state_4657;
state_4657 = G__7106;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3729__auto__ = function(state_4657){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3729__auto____1.call(this,state_4657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3729__auto____0;
cljs$core$async$reduce_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3729__auto____1;
return cljs$core$async$reduce_$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__))
})();
var state__3822__auto__ = (function (){var statearr_4744 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4744[(6)] = c__3820__auto__);

return statearr_4744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__))
);

return c__3820__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__,f__$1){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__,f__$1){
return (function (state_4758){
var state_val_4759 = (state_4758[(1)]);
if((state_val_4759 === (1))){
var inst_4753 = cljs.core.async.reduce(f__$1,init,ch);
var state_4758__$1 = state_4758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_4758__$1,(2),inst_4753);
} else {
if((state_val_4759 === (2))){
var inst_4755 = (state_4758[(2)]);
var inst_4756 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_4755) : f__$1.call(null,inst_4755));
var state_4758__$1 = state_4758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4758__$1,inst_4756);
} else {
return null;
}
}
});})(c__3820__auto__,f__$1))
;
return ((function (switch__3728__auto__,c__3820__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3729__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3729__auto____0 = (function (){
var statearr_4760 = [null,null,null,null,null,null,null];
(statearr_4760[(0)] = cljs$core$async$transduce_$_state_machine__3729__auto__);

(statearr_4760[(1)] = (1));

return statearr_4760;
});
var cljs$core$async$transduce_$_state_machine__3729__auto____1 = (function (state_4758){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4758);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4761){if((e4761 instanceof Object)){
var ex__3732__auto__ = e4761;
var statearr_4762_7115 = state_4758;
(statearr_4762_7115[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7118 = state_4758;
state_4758 = G__7118;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3729__auto__ = function(state_4758){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3729__auto____1.call(this,state_4758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3729__auto____0;
cljs$core$async$transduce_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3729__auto____1;
return cljs$core$async$transduce_$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__,f__$1))
})();
var state__3822__auto__ = (function (){var statearr_4764 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4764[(6)] = c__3820__auto__);

return statearr_4764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__,f__$1))
);

return c__3820__auto__;
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
var G__4769 = arguments.length;
switch (G__4769) {
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
var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__){
return (function (state_4794){
var state_val_4795 = (state_4794[(1)]);
if((state_val_4795 === (7))){
var inst_4776 = (state_4794[(2)]);
var state_4794__$1 = state_4794;
var statearr_4796_7127 = state_4794__$1;
(statearr_4796_7127[(2)] = inst_4776);

(statearr_4796_7127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (1))){
var inst_4770 = cljs.core.seq(coll);
var inst_4771 = inst_4770;
var state_4794__$1 = (function (){var statearr_4797 = state_4794;
(statearr_4797[(7)] = inst_4771);

return statearr_4797;
})();
var statearr_4798_7128 = state_4794__$1;
(statearr_4798_7128[(2)] = null);

(statearr_4798_7128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (4))){
var inst_4771 = (state_4794[(7)]);
var inst_4774 = cljs.core.first(inst_4771);
var state_4794__$1 = state_4794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_4794__$1,(7),ch,inst_4774);
} else {
if((state_val_4795 === (13))){
var inst_4788 = (state_4794[(2)]);
var state_4794__$1 = state_4794;
var statearr_4799_7129 = state_4794__$1;
(statearr_4799_7129[(2)] = inst_4788);

(statearr_4799_7129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (6))){
var inst_4779 = (state_4794[(2)]);
var state_4794__$1 = state_4794;
if(cljs.core.truth_(inst_4779)){
var statearr_4800_7130 = state_4794__$1;
(statearr_4800_7130[(1)] = (8));

} else {
var statearr_4801_7131 = state_4794__$1;
(statearr_4801_7131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (3))){
var inst_4792 = (state_4794[(2)]);
var state_4794__$1 = state_4794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_4794__$1,inst_4792);
} else {
if((state_val_4795 === (12))){
var state_4794__$1 = state_4794;
var statearr_4802_7135 = state_4794__$1;
(statearr_4802_7135[(2)] = null);

(statearr_4802_7135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (2))){
var inst_4771 = (state_4794[(7)]);
var state_4794__$1 = state_4794;
if(cljs.core.truth_(inst_4771)){
var statearr_4803_7139 = state_4794__$1;
(statearr_4803_7139[(1)] = (4));

} else {
var statearr_4804_7140 = state_4794__$1;
(statearr_4804_7140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (11))){
var inst_4785 = cljs.core.async.close_BANG_(ch);
var state_4794__$1 = state_4794;
var statearr_4805_7141 = state_4794__$1;
(statearr_4805_7141[(2)] = inst_4785);

(statearr_4805_7141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (9))){
var state_4794__$1 = state_4794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4807_7142 = state_4794__$1;
(statearr_4807_7142[(1)] = (11));

} else {
var statearr_4808_7143 = state_4794__$1;
(statearr_4808_7143[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (5))){
var inst_4771 = (state_4794[(7)]);
var state_4794__$1 = state_4794;
var statearr_4810_7144 = state_4794__$1;
(statearr_4810_7144[(2)] = inst_4771);

(statearr_4810_7144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (10))){
var inst_4790 = (state_4794[(2)]);
var state_4794__$1 = state_4794;
var statearr_4811_7145 = state_4794__$1;
(statearr_4811_7145[(2)] = inst_4790);

(statearr_4811_7145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4795 === (8))){
var inst_4771 = (state_4794[(7)]);
var inst_4781 = cljs.core.next(inst_4771);
var inst_4771__$1 = inst_4781;
var state_4794__$1 = (function (){var statearr_4812 = state_4794;
(statearr_4812[(7)] = inst_4771__$1);

return statearr_4812;
})();
var statearr_4813_7146 = state_4794__$1;
(statearr_4813_7146[(2)] = null);

(statearr_4813_7146[(1)] = (2));


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
});})(c__3820__auto__))
;
return ((function (switch__3728__auto__,c__3820__auto__){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_4816 = [null,null,null,null,null,null,null,null];
(statearr_4816[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_4816[(1)] = (1));

return statearr_4816;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_4794){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_4794);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e4818){if((e4818 instanceof Object)){
var ex__3732__auto__ = e4818;
var statearr_4819_7147 = state_4794;
(statearr_4819_7147[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_4794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7148 = state_4794;
state_4794 = G__7148;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_4794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_4794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__))
})();
var state__3822__auto__ = (function (){var statearr_4821 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_4821[(6)] = c__3820__auto__);

return statearr_4821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__))
);

return c__3820__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4878 = (function (ch,cs,meta4879){
this.ch = ch;
this.cs = cs;
this.meta4879 = meta4879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4880,meta4879__$1){
var self__ = this;
var _4880__$1 = this;
return (new cljs.core.async.t_cljs$core$async4878(self__.ch,self__.cs,meta4879__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4880){
var self__ = this;
var _4880__$1 = this;
return self__.meta4879;
});})(cs))
;

cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4878.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4878.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4879","meta4879",363185935,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4878";

cljs.core.async.t_cljs$core$async4878.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async4878");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4878.
 */
cljs.core.async.__GT_t_cljs$core$async4878 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4878(ch__$1,cs__$1,meta4879){
return (new cljs.core.async.t_cljs$core$async4878(ch__$1,cs__$1,meta4879));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4878(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__3820__auto___7253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7253,cs,m,dchan,dctr,done){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7253,cs,m,dchan,dctr,done){
return (function (state_5040){
var state_val_5041 = (state_5040[(1)]);
if((state_val_5041 === (7))){
var inst_5036 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5042_7254 = state_5040__$1;
(statearr_5042_7254[(2)] = inst_5036);

(statearr_5042_7254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (20))){
var inst_4934 = (state_5040[(7)]);
var inst_4950 = cljs.core.first(inst_4934);
var inst_4951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_4950,(0),null);
var inst_4952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_4950,(1),null);
var state_5040__$1 = (function (){var statearr_5043 = state_5040;
(statearr_5043[(8)] = inst_4951);

return statearr_5043;
})();
if(cljs.core.truth_(inst_4952)){
var statearr_5045_7255 = state_5040__$1;
(statearr_5045_7255[(1)] = (22));

} else {
var statearr_5046_7256 = state_5040__$1;
(statearr_5046_7256[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (27))){
var inst_4988 = (state_5040[(9)]);
var inst_4982 = (state_5040[(10)]);
var inst_4898 = (state_5040[(11)]);
var inst_4980 = (state_5040[(12)]);
var inst_4988__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_4980,inst_4982);
var inst_4989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_4988__$1,inst_4898,done);
var state_5040__$1 = (function (){var statearr_5047 = state_5040;
(statearr_5047[(9)] = inst_4988__$1);

return statearr_5047;
})();
if(cljs.core.truth_(inst_4989)){
var statearr_5048_7257 = state_5040__$1;
(statearr_5048_7257[(1)] = (30));

} else {
var statearr_5049_7258 = state_5040__$1;
(statearr_5049_7258[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (1))){
var state_5040__$1 = state_5040;
var statearr_5050_7259 = state_5040__$1;
(statearr_5050_7259[(2)] = null);

(statearr_5050_7259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (24))){
var inst_4934 = (state_5040[(7)]);
var inst_4957 = (state_5040[(2)]);
var inst_4958 = cljs.core.next(inst_4934);
var inst_4909 = inst_4958;
var inst_4910 = null;
var inst_4911 = (0);
var inst_4912 = (0);
var state_5040__$1 = (function (){var statearr_5053 = state_5040;
(statearr_5053[(13)] = inst_4909);

(statearr_5053[(14)] = inst_4912);

(statearr_5053[(15)] = inst_4910);

(statearr_5053[(16)] = inst_4957);

(statearr_5053[(17)] = inst_4911);

return statearr_5053;
})();
var statearr_5056_7260 = state_5040__$1;
(statearr_5056_7260[(2)] = null);

(statearr_5056_7260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (39))){
var state_5040__$1 = state_5040;
var statearr_5060_7261 = state_5040__$1;
(statearr_5060_7261[(2)] = null);

(statearr_5060_7261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (4))){
var inst_4898 = (state_5040[(11)]);
var inst_4898__$1 = (state_5040[(2)]);
var inst_4899 = (inst_4898__$1 == null);
var state_5040__$1 = (function (){var statearr_5061 = state_5040;
(statearr_5061[(11)] = inst_4898__$1);

return statearr_5061;
})();
if(cljs.core.truth_(inst_4899)){
var statearr_5062_7262 = state_5040__$1;
(statearr_5062_7262[(1)] = (5));

} else {
var statearr_5063_7263 = state_5040__$1;
(statearr_5063_7263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (15))){
var inst_4909 = (state_5040[(13)]);
var inst_4912 = (state_5040[(14)]);
var inst_4910 = (state_5040[(15)]);
var inst_4911 = (state_5040[(17)]);
var inst_4930 = (state_5040[(2)]);
var inst_4931 = (inst_4912 + (1));
var tmp5057 = inst_4909;
var tmp5058 = inst_4910;
var tmp5059 = inst_4911;
var inst_4909__$1 = tmp5057;
var inst_4910__$1 = tmp5058;
var inst_4911__$1 = tmp5059;
var inst_4912__$1 = inst_4931;
var state_5040__$1 = (function (){var statearr_5065 = state_5040;
(statearr_5065[(13)] = inst_4909__$1);

(statearr_5065[(18)] = inst_4930);

(statearr_5065[(14)] = inst_4912__$1);

(statearr_5065[(15)] = inst_4910__$1);

(statearr_5065[(17)] = inst_4911__$1);

return statearr_5065;
})();
var statearr_5068_7264 = state_5040__$1;
(statearr_5068_7264[(2)] = null);

(statearr_5068_7264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (21))){
var inst_4961 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5074_7268 = state_5040__$1;
(statearr_5074_7268[(2)] = inst_4961);

(statearr_5074_7268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (31))){
var inst_4988 = (state_5040[(9)]);
var inst_4992 = done(null);
var inst_4993 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_4988);
var state_5040__$1 = (function (){var statearr_5075 = state_5040;
(statearr_5075[(19)] = inst_4992);

return statearr_5075;
})();
var statearr_5077_7270 = state_5040__$1;
(statearr_5077_7270[(2)] = inst_4993);

(statearr_5077_7270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (32))){
var inst_4981 = (state_5040[(20)]);
var inst_4982 = (state_5040[(10)]);
var inst_4979 = (state_5040[(21)]);
var inst_4980 = (state_5040[(12)]);
var inst_4995 = (state_5040[(2)]);
var inst_4996 = (inst_4982 + (1));
var tmp5071 = inst_4981;
var tmp5072 = inst_4979;
var tmp5073 = inst_4980;
var inst_4979__$1 = tmp5072;
var inst_4980__$1 = tmp5073;
var inst_4981__$1 = tmp5071;
var inst_4982__$1 = inst_4996;
var state_5040__$1 = (function (){var statearr_5123 = state_5040;
(statearr_5123[(20)] = inst_4981__$1);

(statearr_5123[(10)] = inst_4982__$1);

(statearr_5123[(21)] = inst_4979__$1);

(statearr_5123[(12)] = inst_4980__$1);

(statearr_5123[(22)] = inst_4995);

return statearr_5123;
})();
var statearr_5125_7271 = state_5040__$1;
(statearr_5125_7271[(2)] = null);

(statearr_5125_7271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (40))){
var inst_5008 = (state_5040[(23)]);
var inst_5012 = done(null);
var inst_5013 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_5008);
var state_5040__$1 = (function (){var statearr_5127 = state_5040;
(statearr_5127[(24)] = inst_5012);

return statearr_5127;
})();
var statearr_5128_7272 = state_5040__$1;
(statearr_5128_7272[(2)] = inst_5013);

(statearr_5128_7272[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (33))){
var inst_4999 = (state_5040[(25)]);
var inst_5001 = cljs.core.chunked_seq_QMARK_(inst_4999);
var state_5040__$1 = state_5040;
if(inst_5001){
var statearr_5129_7273 = state_5040__$1;
(statearr_5129_7273[(1)] = (36));

} else {
var statearr_5132_7274 = state_5040__$1;
(statearr_5132_7274[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (13))){
var inst_4924 = (state_5040[(26)]);
var inst_4927 = cljs.core.async.close_BANG_(inst_4924);
var state_5040__$1 = state_5040;
var statearr_5137_7275 = state_5040__$1;
(statearr_5137_7275[(2)] = inst_4927);

(statearr_5137_7275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (22))){
var inst_4951 = (state_5040[(8)]);
var inst_4954 = cljs.core.async.close_BANG_(inst_4951);
var state_5040__$1 = state_5040;
var statearr_5143_7276 = state_5040__$1;
(statearr_5143_7276[(2)] = inst_4954);

(statearr_5143_7276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (36))){
var inst_4999 = (state_5040[(25)]);
var inst_5003 = cljs.core.chunk_first(inst_4999);
var inst_5004 = cljs.core.chunk_rest(inst_4999);
var inst_5005 = cljs.core.count(inst_5003);
var inst_4979 = inst_5004;
var inst_4980 = inst_5003;
var inst_4981 = inst_5005;
var inst_4982 = (0);
var state_5040__$1 = (function (){var statearr_5148 = state_5040;
(statearr_5148[(20)] = inst_4981);

(statearr_5148[(10)] = inst_4982);

(statearr_5148[(21)] = inst_4979);

(statearr_5148[(12)] = inst_4980);

return statearr_5148;
})();
var statearr_5149_7279 = state_5040__$1;
(statearr_5149_7279[(2)] = null);

(statearr_5149_7279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (41))){
var inst_4999 = (state_5040[(25)]);
var inst_5015 = (state_5040[(2)]);
var inst_5016 = cljs.core.next(inst_4999);
var inst_4979 = inst_5016;
var inst_4980 = null;
var inst_4981 = (0);
var inst_4982 = (0);
var state_5040__$1 = (function (){var statearr_5151 = state_5040;
(statearr_5151[(20)] = inst_4981);

(statearr_5151[(10)] = inst_4982);

(statearr_5151[(21)] = inst_4979);

(statearr_5151[(27)] = inst_5015);

(statearr_5151[(12)] = inst_4980);

return statearr_5151;
})();
var statearr_5152_7282 = state_5040__$1;
(statearr_5152_7282[(2)] = null);

(statearr_5152_7282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (43))){
var state_5040__$1 = state_5040;
var statearr_5154_7283 = state_5040__$1;
(statearr_5154_7283[(2)] = null);

(statearr_5154_7283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (29))){
var inst_5024 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5156_7284 = state_5040__$1;
(statearr_5156_7284[(2)] = inst_5024);

(statearr_5156_7284[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (44))){
var inst_5033 = (state_5040[(2)]);
var state_5040__$1 = (function (){var statearr_5159 = state_5040;
(statearr_5159[(28)] = inst_5033);

return statearr_5159;
})();
var statearr_5160_7285 = state_5040__$1;
(statearr_5160_7285[(2)] = null);

(statearr_5160_7285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (6))){
var inst_4971 = (state_5040[(29)]);
var inst_4970 = cljs.core.deref(cs);
var inst_4971__$1 = cljs.core.keys(inst_4970);
var inst_4972 = cljs.core.count(inst_4971__$1);
var inst_4973 = cljs.core.reset_BANG_(dctr,inst_4972);
var inst_4978 = cljs.core.seq(inst_4971__$1);
var inst_4979 = inst_4978;
var inst_4980 = null;
var inst_4981 = (0);
var inst_4982 = (0);
var state_5040__$1 = (function (){var statearr_5161 = state_5040;
(statearr_5161[(30)] = inst_4973);

(statearr_5161[(20)] = inst_4981);

(statearr_5161[(10)] = inst_4982);

(statearr_5161[(29)] = inst_4971__$1);

(statearr_5161[(21)] = inst_4979);

(statearr_5161[(12)] = inst_4980);

return statearr_5161;
})();
var statearr_5163_7286 = state_5040__$1;
(statearr_5163_7286[(2)] = null);

(statearr_5163_7286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (28))){
var inst_4999 = (state_5040[(25)]);
var inst_4979 = (state_5040[(21)]);
var inst_4999__$1 = cljs.core.seq(inst_4979);
var state_5040__$1 = (function (){var statearr_5164 = state_5040;
(statearr_5164[(25)] = inst_4999__$1);

return statearr_5164;
})();
if(inst_4999__$1){
var statearr_5165_7287 = state_5040__$1;
(statearr_5165_7287[(1)] = (33));

} else {
var statearr_5166_7288 = state_5040__$1;
(statearr_5166_7288[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (25))){
var inst_4981 = (state_5040[(20)]);
var inst_4982 = (state_5040[(10)]);
var inst_4985 = (inst_4982 < inst_4981);
var inst_4986 = inst_4985;
var state_5040__$1 = state_5040;
if(cljs.core.truth_(inst_4986)){
var statearr_5167_7289 = state_5040__$1;
(statearr_5167_7289[(1)] = (27));

} else {
var statearr_5169_7290 = state_5040__$1;
(statearr_5169_7290[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (34))){
var state_5040__$1 = state_5040;
var statearr_5173_7291 = state_5040__$1;
(statearr_5173_7291[(2)] = null);

(statearr_5173_7291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (17))){
var state_5040__$1 = state_5040;
var statearr_5175_7292 = state_5040__$1;
(statearr_5175_7292[(2)] = null);

(statearr_5175_7292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (3))){
var inst_5038 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5040__$1,inst_5038);
} else {
if((state_val_5041 === (12))){
var inst_4966 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5177_7296 = state_5040__$1;
(statearr_5177_7296[(2)] = inst_4966);

(statearr_5177_7296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (2))){
var state_5040__$1 = state_5040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5040__$1,(4),ch);
} else {
if((state_val_5041 === (23))){
var state_5040__$1 = state_5040;
var statearr_5182_7298 = state_5040__$1;
(statearr_5182_7298[(2)] = null);

(statearr_5182_7298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (35))){
var inst_5022 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5183_7299 = state_5040__$1;
(statearr_5183_7299[(2)] = inst_5022);

(statearr_5183_7299[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (19))){
var inst_4934 = (state_5040[(7)]);
var inst_4942 = cljs.core.chunk_first(inst_4934);
var inst_4943 = cljs.core.chunk_rest(inst_4934);
var inst_4944 = cljs.core.count(inst_4942);
var inst_4909 = inst_4943;
var inst_4910 = inst_4942;
var inst_4911 = inst_4944;
var inst_4912 = (0);
var state_5040__$1 = (function (){var statearr_5187 = state_5040;
(statearr_5187[(13)] = inst_4909);

(statearr_5187[(14)] = inst_4912);

(statearr_5187[(15)] = inst_4910);

(statearr_5187[(17)] = inst_4911);

return statearr_5187;
})();
var statearr_5188_7300 = state_5040__$1;
(statearr_5188_7300[(2)] = null);

(statearr_5188_7300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (11))){
var inst_4909 = (state_5040[(13)]);
var inst_4934 = (state_5040[(7)]);
var inst_4934__$1 = cljs.core.seq(inst_4909);
var state_5040__$1 = (function (){var statearr_5189 = state_5040;
(statearr_5189[(7)] = inst_4934__$1);

return statearr_5189;
})();
if(inst_4934__$1){
var statearr_5190_7303 = state_5040__$1;
(statearr_5190_7303[(1)] = (16));

} else {
var statearr_5191_7304 = state_5040__$1;
(statearr_5191_7304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (9))){
var inst_4968 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5192_7305 = state_5040__$1;
(statearr_5192_7305[(2)] = inst_4968);

(statearr_5192_7305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (5))){
var inst_4907 = cljs.core.deref(cs);
var inst_4908 = cljs.core.seq(inst_4907);
var inst_4909 = inst_4908;
var inst_4910 = null;
var inst_4911 = (0);
var inst_4912 = (0);
var state_5040__$1 = (function (){var statearr_5193 = state_5040;
(statearr_5193[(13)] = inst_4909);

(statearr_5193[(14)] = inst_4912);

(statearr_5193[(15)] = inst_4910);

(statearr_5193[(17)] = inst_4911);

return statearr_5193;
})();
var statearr_5194_7306 = state_5040__$1;
(statearr_5194_7306[(2)] = null);

(statearr_5194_7306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (14))){
var state_5040__$1 = state_5040;
var statearr_5195_7307 = state_5040__$1;
(statearr_5195_7307[(2)] = null);

(statearr_5195_7307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (45))){
var inst_5030 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5196_7308 = state_5040__$1;
(statearr_5196_7308[(2)] = inst_5030);

(statearr_5196_7308[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (26))){
var inst_4971 = (state_5040[(29)]);
var inst_5026 = (state_5040[(2)]);
var inst_5027 = cljs.core.seq(inst_4971);
var state_5040__$1 = (function (){var statearr_5197 = state_5040;
(statearr_5197[(31)] = inst_5026);

return statearr_5197;
})();
if(inst_5027){
var statearr_5198_7309 = state_5040__$1;
(statearr_5198_7309[(1)] = (42));

} else {
var statearr_5199_7310 = state_5040__$1;
(statearr_5199_7310[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (16))){
var inst_4934 = (state_5040[(7)]);
var inst_4939 = cljs.core.chunked_seq_QMARK_(inst_4934);
var state_5040__$1 = state_5040;
if(inst_4939){
var statearr_5200_7311 = state_5040__$1;
(statearr_5200_7311[(1)] = (19));

} else {
var statearr_5201_7312 = state_5040__$1;
(statearr_5201_7312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (38))){
var inst_5019 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5203_7313 = state_5040__$1;
(statearr_5203_7313[(2)] = inst_5019);

(statearr_5203_7313[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (30))){
var state_5040__$1 = state_5040;
var statearr_5204_7314 = state_5040__$1;
(statearr_5204_7314[(2)] = null);

(statearr_5204_7314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (10))){
var inst_4912 = (state_5040[(14)]);
var inst_4910 = (state_5040[(15)]);
var inst_4923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_4910,inst_4912);
var inst_4924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_4923,(0),null);
var inst_4925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_4923,(1),null);
var state_5040__$1 = (function (){var statearr_5206 = state_5040;
(statearr_5206[(26)] = inst_4924);

return statearr_5206;
})();
if(cljs.core.truth_(inst_4925)){
var statearr_5207_7315 = state_5040__$1;
(statearr_5207_7315[(1)] = (13));

} else {
var statearr_5208_7320 = state_5040__$1;
(statearr_5208_7320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (18))){
var inst_4964 = (state_5040[(2)]);
var state_5040__$1 = state_5040;
var statearr_5209_7321 = state_5040__$1;
(statearr_5209_7321[(2)] = inst_4964);

(statearr_5209_7321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (42))){
var state_5040__$1 = state_5040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5040__$1,(45),dchan);
} else {
if((state_val_5041 === (37))){
var inst_4898 = (state_5040[(11)]);
var inst_5008 = (state_5040[(23)]);
var inst_4999 = (state_5040[(25)]);
var inst_5008__$1 = cljs.core.first(inst_4999);
var inst_5009 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_5008__$1,inst_4898,done);
var state_5040__$1 = (function (){var statearr_5210 = state_5040;
(statearr_5210[(23)] = inst_5008__$1);

return statearr_5210;
})();
if(cljs.core.truth_(inst_5009)){
var statearr_5211_7322 = state_5040__$1;
(statearr_5211_7322[(1)] = (39));

} else {
var statearr_5212_7323 = state_5040__$1;
(statearr_5212_7323[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5041 === (8))){
var inst_4912 = (state_5040[(14)]);
var inst_4911 = (state_5040[(17)]);
var inst_4917 = (inst_4912 < inst_4911);
var inst_4918 = inst_4917;
var state_5040__$1 = state_5040;
if(cljs.core.truth_(inst_4918)){
var statearr_5214_7347 = state_5040__$1;
(statearr_5214_7347[(1)] = (10));

} else {
var statearr_5215_7348 = state_5040__$1;
(statearr_5215_7348[(1)] = (11));

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
});})(c__3820__auto___7253,cs,m,dchan,dctr,done))
;
return ((function (switch__3728__auto__,c__3820__auto___7253,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3729__auto__ = null;
var cljs$core$async$mult_$_state_machine__3729__auto____0 = (function (){
var statearr_5217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5217[(0)] = cljs$core$async$mult_$_state_machine__3729__auto__);

(statearr_5217[(1)] = (1));

return statearr_5217;
});
var cljs$core$async$mult_$_state_machine__3729__auto____1 = (function (state_5040){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_5040);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e5218){if((e5218 instanceof Object)){
var ex__3732__auto__ = e5218;
var statearr_5219_7349 = state_5040;
(statearr_5219_7349[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7350 = state_5040;
state_5040 = G__7350;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3729__auto__ = function(state_5040){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3729__auto____1.call(this,state_5040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3729__auto____0;
cljs$core$async$mult_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3729__auto____1;
return cljs$core$async$mult_$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7253,cs,m,dchan,dctr,done))
})();
var state__3822__auto__ = (function (){var statearr_5220 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_5220[(6)] = c__3820__auto___7253);

return statearr_5220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7253,cs,m,dchan,dctr,done))
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
var G__5225 = arguments.length;
switch (G__5225) {
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
var len__4641__auto___7370 = arguments.length;
var i__4642__auto___7371 = (0);
while(true){
if((i__4642__auto___7371 < len__4641__auto___7370)){
args__4647__auto__.push((arguments[i__4642__auto___7371]));

var G__7373 = (i__4642__auto___7371 + (1));
i__4642__auto___7371 = G__7373;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5270){
var map__5271 = p__5270;
var map__5271__$1 = (((((!((map__5271 == null))))?(((((map__5271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5271):map__5271);
var opts = map__5271__$1;
var statearr_5273_7378 = state;
(statearr_5273_7378[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__5271,map__5271__$1,opts){
return (function (val){
var statearr_5275_7379 = state;
(statearr_5275_7379[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__5271,map__5271__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_5280_7380 = state;
(statearr_5280_7380[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5264){
var G__5265 = cljs.core.first(seq5264);
var seq5264__$1 = cljs.core.next(seq5264);
var G__5266 = cljs.core.first(seq5264__$1);
var seq5264__$2 = cljs.core.next(seq5264__$1);
var G__5267 = cljs.core.first(seq5264__$2);
var seq5264__$3 = cljs.core.next(seq5264__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5265,G__5266,G__5267,seq5264__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5288 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta5289){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta5289 = meta5289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5290,meta5289__$1){
var self__ = this;
var _5290__$1 = this;
return (new cljs.core.async.t_cljs$core$async5288(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta5289__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5290){
var self__ = this;
var _5290__$1 = this;
return self__.meta5289;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async5288.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta5289","meta5289",661573129,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5288";

cljs.core.async.t_cljs$core$async5288.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async5288");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5288.
 */
cljs.core.async.__GT_t_cljs$core$async5288 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async5288(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5289){
return (new cljs.core.async.t_cljs$core$async5288(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5289));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async5288(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3820__auto___7414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5438){
var state_val_5439 = (state_5438[(1)]);
if((state_val_5439 === (7))){
var inst_5329 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
var statearr_5441_7416 = state_5438__$1;
(statearr_5441_7416[(2)] = inst_5329);

(statearr_5441_7416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (20))){
var inst_5341 = (state_5438[(7)]);
var state_5438__$1 = state_5438;
var statearr_5442_7417 = state_5438__$1;
(statearr_5442_7417[(2)] = inst_5341);

(statearr_5442_7417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (27))){
var state_5438__$1 = state_5438;
var statearr_5443_7418 = state_5438__$1;
(statearr_5443_7418[(2)] = null);

(statearr_5443_7418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (1))){
var inst_5316 = (state_5438[(8)]);
var inst_5316__$1 = calc_state();
var inst_5318 = (inst_5316__$1 == null);
var inst_5319 = cljs.core.not(inst_5318);
var state_5438__$1 = (function (){var statearr_5444 = state_5438;
(statearr_5444[(8)] = inst_5316__$1);

return statearr_5444;
})();
if(inst_5319){
var statearr_5445_7419 = state_5438__$1;
(statearr_5445_7419[(1)] = (2));

} else {
var statearr_5446_7420 = state_5438__$1;
(statearr_5446_7420[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (24))){
var inst_5390 = (state_5438[(9)]);
var inst_5376 = (state_5438[(10)]);
var inst_5366 = (state_5438[(11)]);
var inst_5390__$1 = (inst_5366.cljs$core$IFn$_invoke$arity$1 ? inst_5366.cljs$core$IFn$_invoke$arity$1(inst_5376) : inst_5366.call(null,inst_5376));
var state_5438__$1 = (function (){var statearr_5447 = state_5438;
(statearr_5447[(9)] = inst_5390__$1);

return statearr_5447;
})();
if(cljs.core.truth_(inst_5390__$1)){
var statearr_5448_7421 = state_5438__$1;
(statearr_5448_7421[(1)] = (29));

} else {
var statearr_5449_7422 = state_5438__$1;
(statearr_5449_7422[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (4))){
var inst_5332 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
if(cljs.core.truth_(inst_5332)){
var statearr_5450_7423 = state_5438__$1;
(statearr_5450_7423[(1)] = (8));

} else {
var statearr_5451_7424 = state_5438__$1;
(statearr_5451_7424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (15))){
var inst_5360 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
if(cljs.core.truth_(inst_5360)){
var statearr_5453_7427 = state_5438__$1;
(statearr_5453_7427[(1)] = (19));

} else {
var statearr_5454_7428 = state_5438__$1;
(statearr_5454_7428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (21))){
var inst_5365 = (state_5438[(12)]);
var inst_5365__$1 = (state_5438[(2)]);
var inst_5366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_5365__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_5365__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_5365__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5438__$1 = (function (){var statearr_5456 = state_5438;
(statearr_5456[(12)] = inst_5365__$1);

(statearr_5456[(11)] = inst_5366);

(statearr_5456[(13)] = inst_5368);

return statearr_5456;
})();
return cljs.core.async.ioc_alts_BANG_(state_5438__$1,(22),inst_5369);
} else {
if((state_val_5439 === (31))){
var inst_5399 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
if(cljs.core.truth_(inst_5399)){
var statearr_5457_7432 = state_5438__$1;
(statearr_5457_7432[(1)] = (32));

} else {
var statearr_5458_7433 = state_5438__$1;
(statearr_5458_7433[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (32))){
var inst_5375 = (state_5438[(14)]);
var state_5438__$1 = state_5438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5438__$1,(35),out,inst_5375);
} else {
if((state_val_5439 === (33))){
var inst_5365 = (state_5438[(12)]);
var inst_5341 = inst_5365;
var state_5438__$1 = (function (){var statearr_5460 = state_5438;
(statearr_5460[(7)] = inst_5341);

return statearr_5460;
})();
var statearr_5462_7438 = state_5438__$1;
(statearr_5462_7438[(2)] = null);

(statearr_5462_7438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (13))){
var inst_5341 = (state_5438[(7)]);
var inst_5349 = inst_5341.cljs$lang$protocol_mask$partition0$;
var inst_5350 = (inst_5349 & (64));
var inst_5351 = inst_5341.cljs$core$ISeq$;
var inst_5352 = (cljs.core.PROTOCOL_SENTINEL === inst_5351);
var inst_5353 = ((inst_5350) || (inst_5352));
var state_5438__$1 = state_5438;
if(cljs.core.truth_(inst_5353)){
var statearr_5463_7439 = state_5438__$1;
(statearr_5463_7439[(1)] = (16));

} else {
var statearr_5464_7493 = state_5438__$1;
(statearr_5464_7493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (22))){
var inst_5376 = (state_5438[(10)]);
var inst_5375 = (state_5438[(14)]);
var inst_5374 = (state_5438[(2)]);
var inst_5375__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_5374,(0),null);
var inst_5376__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_5374,(1),null);
var inst_5377 = (inst_5375__$1 == null);
var inst_5378 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_5376__$1,change);
var inst_5379 = ((inst_5377) || (inst_5378));
var state_5438__$1 = (function (){var statearr_5465 = state_5438;
(statearr_5465[(10)] = inst_5376__$1);

(statearr_5465[(14)] = inst_5375__$1);

return statearr_5465;
})();
if(cljs.core.truth_(inst_5379)){
var statearr_5468_7496 = state_5438__$1;
(statearr_5468_7496[(1)] = (23));

} else {
var statearr_5469_7497 = state_5438__$1;
(statearr_5469_7497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (36))){
var inst_5365 = (state_5438[(12)]);
var inst_5341 = inst_5365;
var state_5438__$1 = (function (){var statearr_5470 = state_5438;
(statearr_5470[(7)] = inst_5341);

return statearr_5470;
})();
var statearr_5471_7499 = state_5438__$1;
(statearr_5471_7499[(2)] = null);

(statearr_5471_7499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (29))){
var inst_5390 = (state_5438[(9)]);
var state_5438__$1 = state_5438;
var statearr_5472_7500 = state_5438__$1;
(statearr_5472_7500[(2)] = inst_5390);

(statearr_5472_7500[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (6))){
var state_5438__$1 = state_5438;
var statearr_5473_7501 = state_5438__$1;
(statearr_5473_7501[(2)] = false);

(statearr_5473_7501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (28))){
var inst_5386 = (state_5438[(2)]);
var inst_5387 = calc_state();
var inst_5341 = inst_5387;
var state_5438__$1 = (function (){var statearr_5474 = state_5438;
(statearr_5474[(15)] = inst_5386);

(statearr_5474[(7)] = inst_5341);

return statearr_5474;
})();
var statearr_5476_7503 = state_5438__$1;
(statearr_5476_7503[(2)] = null);

(statearr_5476_7503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (25))){
var inst_5418 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
var statearr_5477_7504 = state_5438__$1;
(statearr_5477_7504[(2)] = inst_5418);

(statearr_5477_7504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (34))){
var inst_5416 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
var statearr_5478_7505 = state_5438__$1;
(statearr_5478_7505[(2)] = inst_5416);

(statearr_5478_7505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (17))){
var state_5438__$1 = state_5438;
var statearr_5479_7506 = state_5438__$1;
(statearr_5479_7506[(2)] = false);

(statearr_5479_7506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (3))){
var state_5438__$1 = state_5438;
var statearr_5481_7507 = state_5438__$1;
(statearr_5481_7507[(2)] = false);

(statearr_5481_7507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (12))){
var inst_5420 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5438__$1,inst_5420);
} else {
if((state_val_5439 === (2))){
var inst_5316 = (state_5438[(8)]);
var inst_5321 = inst_5316.cljs$lang$protocol_mask$partition0$;
var inst_5322 = (inst_5321 & (64));
var inst_5323 = inst_5316.cljs$core$ISeq$;
var inst_5324 = (cljs.core.PROTOCOL_SENTINEL === inst_5323);
var inst_5325 = ((inst_5322) || (inst_5324));
var state_5438__$1 = state_5438;
if(cljs.core.truth_(inst_5325)){
var statearr_5488_7511 = state_5438__$1;
(statearr_5488_7511[(1)] = (5));

} else {
var statearr_5489_7512 = state_5438__$1;
(statearr_5489_7512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (23))){
var inst_5375 = (state_5438[(14)]);
var inst_5381 = (inst_5375 == null);
var state_5438__$1 = state_5438;
if(cljs.core.truth_(inst_5381)){
var statearr_5490_7513 = state_5438__$1;
(statearr_5490_7513[(1)] = (26));

} else {
var statearr_5491_7514 = state_5438__$1;
(statearr_5491_7514[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (35))){
var inst_5402 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
if(cljs.core.truth_(inst_5402)){
var statearr_5492_7515 = state_5438__$1;
(statearr_5492_7515[(1)] = (36));

} else {
var statearr_5493_7516 = state_5438__$1;
(statearr_5493_7516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (19))){
var inst_5341 = (state_5438[(7)]);
var inst_5362 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_5341);
var state_5438__$1 = state_5438;
var statearr_5495_7517 = state_5438__$1;
(statearr_5495_7517[(2)] = inst_5362);

(statearr_5495_7517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (11))){
var inst_5341 = (state_5438[(7)]);
var inst_5346 = (inst_5341 == null);
var inst_5347 = cljs.core.not(inst_5346);
var state_5438__$1 = state_5438;
if(inst_5347){
var statearr_5500_7518 = state_5438__$1;
(statearr_5500_7518[(1)] = (13));

} else {
var statearr_5501_7519 = state_5438__$1;
(statearr_5501_7519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (9))){
var inst_5316 = (state_5438[(8)]);
var state_5438__$1 = state_5438;
var statearr_5507_7520 = state_5438__$1;
(statearr_5507_7520[(2)] = inst_5316);

(statearr_5507_7520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (5))){
var state_5438__$1 = state_5438;
var statearr_5508_7521 = state_5438__$1;
(statearr_5508_7521[(2)] = true);

(statearr_5508_7521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (14))){
var state_5438__$1 = state_5438;
var statearr_5509_7522 = state_5438__$1;
(statearr_5509_7522[(2)] = false);

(statearr_5509_7522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (26))){
var inst_5376 = (state_5438[(10)]);
var inst_5383 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_5376);
var state_5438__$1 = state_5438;
var statearr_5510_7523 = state_5438__$1;
(statearr_5510_7523[(2)] = inst_5383);

(statearr_5510_7523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (16))){
var state_5438__$1 = state_5438;
var statearr_5512_7524 = state_5438__$1;
(statearr_5512_7524[(2)] = true);

(statearr_5512_7524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (38))){
var inst_5410 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
var statearr_5513_7525 = state_5438__$1;
(statearr_5513_7525[(2)] = inst_5410);

(statearr_5513_7525[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (30))){
var inst_5376 = (state_5438[(10)]);
var inst_5366 = (state_5438[(11)]);
var inst_5368 = (state_5438[(13)]);
var inst_5394 = cljs.core.empty_QMARK_(inst_5366);
var inst_5395 = (inst_5368.cljs$core$IFn$_invoke$arity$1 ? inst_5368.cljs$core$IFn$_invoke$arity$1(inst_5376) : inst_5368.call(null,inst_5376));
var inst_5396 = cljs.core.not(inst_5395);
var inst_5397 = ((inst_5394) && (inst_5396));
var state_5438__$1 = state_5438;
var statearr_5535_7526 = state_5438__$1;
(statearr_5535_7526[(2)] = inst_5397);

(statearr_5535_7526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (10))){
var inst_5316 = (state_5438[(8)]);
var inst_5337 = (state_5438[(2)]);
var inst_5338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_5337,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_5337,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_5337,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5341 = inst_5316;
var state_5438__$1 = (function (){var statearr_5538 = state_5438;
(statearr_5538[(16)] = inst_5340);

(statearr_5538[(17)] = inst_5339);

(statearr_5538[(7)] = inst_5341);

(statearr_5538[(18)] = inst_5338);

return statearr_5538;
})();
var statearr_5540_7529 = state_5438__$1;
(statearr_5540_7529[(2)] = null);

(statearr_5540_7529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (18))){
var inst_5357 = (state_5438[(2)]);
var state_5438__$1 = state_5438;
var statearr_5541_7530 = state_5438__$1;
(statearr_5541_7530[(2)] = inst_5357);

(statearr_5541_7530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (37))){
var state_5438__$1 = state_5438;
var statearr_5542_7532 = state_5438__$1;
(statearr_5542_7532[(2)] = null);

(statearr_5542_7532[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5439 === (8))){
var inst_5316 = (state_5438[(8)]);
var inst_5334 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_5316);
var state_5438__$1 = state_5438;
var statearr_5543_7533 = state_5438__$1;
(statearr_5543_7533[(2)] = inst_5334);

(statearr_5543_7533[(1)] = (10));


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
});})(c__3820__auto___7414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3728__auto__,c__3820__auto___7414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3729__auto__ = null;
var cljs$core$async$mix_$_state_machine__3729__auto____0 = (function (){
var statearr_5544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5544[(0)] = cljs$core$async$mix_$_state_machine__3729__auto__);

(statearr_5544[(1)] = (1));

return statearr_5544;
});
var cljs$core$async$mix_$_state_machine__3729__auto____1 = (function (state_5438){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_5438);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e5545){if((e5545 instanceof Object)){
var ex__3732__auto__ = e5545;
var statearr_5546_7534 = state_5438;
(statearr_5546_7534[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7535 = state_5438;
state_5438 = G__7535;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3729__auto__ = function(state_5438){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3729__auto____1.call(this,state_5438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3729__auto____0;
cljs$core$async$mix_$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3729__auto____1;
return cljs$core$async$mix_$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3822__auto__ = (function (){var statearr_5547 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_5547[(6)] = c__3820__auto___7414);

return statearr_5547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__5556 = arguments.length;
switch (G__5556) {
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
var G__5567 = arguments.length;
switch (G__5567) {
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
return (function (p1__5563_SHARP_){
if(cljs.core.truth_((p1__5563_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5563_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__5563_SHARP_.call(null,topic)))){
return p1__5563_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__5563_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5576 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5577){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5577 = meta5577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5578,meta5577__$1){
var self__ = this;
var _5578__$1 = this;
return (new cljs.core.async.t_cljs$core$async5576(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5577__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5578){
var self__ = this;
var _5578__$1 = this;
return self__.meta5577;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5576.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5577","meta5577",-1365685486,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5576";

cljs.core.async.t_cljs$core$async5576.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async5576");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5576.
 */
cljs.core.async.__GT_t_cljs$core$async5576 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5576(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5577){
return (new cljs.core.async.t_cljs$core$async5576(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5577));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5576(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3820__auto___7545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7545,mults,ensure_mult,p){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7545,mults,ensure_mult,p){
return (function (state_5729){
var state_val_5730 = (state_5729[(1)]);
if((state_val_5730 === (7))){
var inst_5725 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
var statearr_5731_7546 = state_5729__$1;
(statearr_5731_7546[(2)] = inst_5725);

(statearr_5731_7546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (20))){
var state_5729__$1 = state_5729;
var statearr_5732_7547 = state_5729__$1;
(statearr_5732_7547[(2)] = null);

(statearr_5732_7547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (1))){
var state_5729__$1 = state_5729;
var statearr_5733_7548 = state_5729__$1;
(statearr_5733_7548[(2)] = null);

(statearr_5733_7548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (24))){
var inst_5708 = (state_5729[(7)]);
var inst_5717 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_5708);
var state_5729__$1 = state_5729;
var statearr_5734_7565 = state_5729__$1;
(statearr_5734_7565[(2)] = inst_5717);

(statearr_5734_7565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (4))){
var inst_5660 = (state_5729[(8)]);
var inst_5660__$1 = (state_5729[(2)]);
var inst_5661 = (inst_5660__$1 == null);
var state_5729__$1 = (function (){var statearr_5735 = state_5729;
(statearr_5735[(8)] = inst_5660__$1);

return statearr_5735;
})();
if(cljs.core.truth_(inst_5661)){
var statearr_5736_7570 = state_5729__$1;
(statearr_5736_7570[(1)] = (5));

} else {
var statearr_5737_7577 = state_5729__$1;
(statearr_5737_7577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (15))){
var inst_5702 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
var statearr_5738_7579 = state_5729__$1;
(statearr_5738_7579[(2)] = inst_5702);

(statearr_5738_7579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (21))){
var inst_5722 = (state_5729[(2)]);
var state_5729__$1 = (function (){var statearr_5739 = state_5729;
(statearr_5739[(9)] = inst_5722);

return statearr_5739;
})();
var statearr_5740_7581 = state_5729__$1;
(statearr_5740_7581[(2)] = null);

(statearr_5740_7581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (13))){
var inst_5684 = (state_5729[(10)]);
var inst_5686 = cljs.core.chunked_seq_QMARK_(inst_5684);
var state_5729__$1 = state_5729;
if(inst_5686){
var statearr_5742_7582 = state_5729__$1;
(statearr_5742_7582[(1)] = (16));

} else {
var statearr_5743_7583 = state_5729__$1;
(statearr_5743_7583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (22))){
var inst_5714 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
if(cljs.core.truth_(inst_5714)){
var statearr_5744_7588 = state_5729__$1;
(statearr_5744_7588[(1)] = (23));

} else {
var statearr_5745_7590 = state_5729__$1;
(statearr_5745_7590[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (6))){
var inst_5660 = (state_5729[(8)]);
var inst_5710 = (state_5729[(11)]);
var inst_5708 = (state_5729[(7)]);
var inst_5708__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_5660) : topic_fn.call(null,inst_5660));
var inst_5709 = cljs.core.deref(mults);
var inst_5710__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_5709,inst_5708__$1);
var state_5729__$1 = (function (){var statearr_5746 = state_5729;
(statearr_5746[(11)] = inst_5710__$1);

(statearr_5746[(7)] = inst_5708__$1);

return statearr_5746;
})();
if(cljs.core.truth_(inst_5710__$1)){
var statearr_5747_7597 = state_5729__$1;
(statearr_5747_7597[(1)] = (19));

} else {
var statearr_5748_7598 = state_5729__$1;
(statearr_5748_7598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (25))){
var inst_5719 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
var statearr_5750_7599 = state_5729__$1;
(statearr_5750_7599[(2)] = inst_5719);

(statearr_5750_7599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (17))){
var inst_5684 = (state_5729[(10)]);
var inst_5693 = cljs.core.first(inst_5684);
var inst_5694 = cljs.core.async.muxch_STAR_(inst_5693);
var inst_5695 = cljs.core.async.close_BANG_(inst_5694);
var inst_5696 = cljs.core.next(inst_5684);
var inst_5670 = inst_5696;
var inst_5671 = null;
var inst_5672 = (0);
var inst_5673 = (0);
var state_5729__$1 = (function (){var statearr_5751 = state_5729;
(statearr_5751[(12)] = inst_5695);

(statearr_5751[(13)] = inst_5672);

(statearr_5751[(14)] = inst_5670);

(statearr_5751[(15)] = inst_5671);

(statearr_5751[(16)] = inst_5673);

return statearr_5751;
})();
var statearr_5753_7601 = state_5729__$1;
(statearr_5753_7601[(2)] = null);

(statearr_5753_7601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (3))){
var inst_5727 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5729__$1,inst_5727);
} else {
if((state_val_5730 === (12))){
var inst_5704 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
var statearr_5755_7603 = state_5729__$1;
(statearr_5755_7603[(2)] = inst_5704);

(statearr_5755_7603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (2))){
var state_5729__$1 = state_5729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5729__$1,(4),ch);
} else {
if((state_val_5730 === (23))){
var state_5729__$1 = state_5729;
var statearr_5757_7604 = state_5729__$1;
(statearr_5757_7604[(2)] = null);

(statearr_5757_7604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (19))){
var inst_5660 = (state_5729[(8)]);
var inst_5710 = (state_5729[(11)]);
var inst_5712 = cljs.core.async.muxch_STAR_(inst_5710);
var state_5729__$1 = state_5729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5729__$1,(22),inst_5712,inst_5660);
} else {
if((state_val_5730 === (11))){
var inst_5684 = (state_5729[(10)]);
var inst_5670 = (state_5729[(14)]);
var inst_5684__$1 = cljs.core.seq(inst_5670);
var state_5729__$1 = (function (){var statearr_5764 = state_5729;
(statearr_5764[(10)] = inst_5684__$1);

return statearr_5764;
})();
if(inst_5684__$1){
var statearr_5765_7606 = state_5729__$1;
(statearr_5765_7606[(1)] = (13));

} else {
var statearr_5766_7607 = state_5729__$1;
(statearr_5766_7607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (9))){
var inst_5706 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
var statearr_5767_7608 = state_5729__$1;
(statearr_5767_7608[(2)] = inst_5706);

(statearr_5767_7608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (5))){
var inst_5667 = cljs.core.deref(mults);
var inst_5668 = cljs.core.vals(inst_5667);
var inst_5669 = cljs.core.seq(inst_5668);
var inst_5670 = inst_5669;
var inst_5671 = null;
var inst_5672 = (0);
var inst_5673 = (0);
var state_5729__$1 = (function (){var statearr_5768 = state_5729;
(statearr_5768[(13)] = inst_5672);

(statearr_5768[(14)] = inst_5670);

(statearr_5768[(15)] = inst_5671);

(statearr_5768[(16)] = inst_5673);

return statearr_5768;
})();
var statearr_5769_7616 = state_5729__$1;
(statearr_5769_7616[(2)] = null);

(statearr_5769_7616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (14))){
var state_5729__$1 = state_5729;
var statearr_5773_7617 = state_5729__$1;
(statearr_5773_7617[(2)] = null);

(statearr_5773_7617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (16))){
var inst_5684 = (state_5729[(10)]);
var inst_5688 = cljs.core.chunk_first(inst_5684);
var inst_5689 = cljs.core.chunk_rest(inst_5684);
var inst_5690 = cljs.core.count(inst_5688);
var inst_5670 = inst_5689;
var inst_5671 = inst_5688;
var inst_5672 = inst_5690;
var inst_5673 = (0);
var state_5729__$1 = (function (){var statearr_5774 = state_5729;
(statearr_5774[(13)] = inst_5672);

(statearr_5774[(14)] = inst_5670);

(statearr_5774[(15)] = inst_5671);

(statearr_5774[(16)] = inst_5673);

return statearr_5774;
})();
var statearr_5775_7621 = state_5729__$1;
(statearr_5775_7621[(2)] = null);

(statearr_5775_7621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (10))){
var inst_5672 = (state_5729[(13)]);
var inst_5670 = (state_5729[(14)]);
var inst_5671 = (state_5729[(15)]);
var inst_5673 = (state_5729[(16)]);
var inst_5678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_5671,inst_5673);
var inst_5679 = cljs.core.async.muxch_STAR_(inst_5678);
var inst_5680 = cljs.core.async.close_BANG_(inst_5679);
var inst_5681 = (inst_5673 + (1));
var tmp5770 = inst_5672;
var tmp5771 = inst_5670;
var tmp5772 = inst_5671;
var inst_5670__$1 = tmp5771;
var inst_5671__$1 = tmp5772;
var inst_5672__$1 = tmp5770;
var inst_5673__$1 = inst_5681;
var state_5729__$1 = (function (){var statearr_5776 = state_5729;
(statearr_5776[(13)] = inst_5672__$1);

(statearr_5776[(14)] = inst_5670__$1);

(statearr_5776[(15)] = inst_5671__$1);

(statearr_5776[(17)] = inst_5680);

(statearr_5776[(16)] = inst_5673__$1);

return statearr_5776;
})();
var statearr_5779_7624 = state_5729__$1;
(statearr_5779_7624[(2)] = null);

(statearr_5779_7624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (18))){
var inst_5699 = (state_5729[(2)]);
var state_5729__$1 = state_5729;
var statearr_5780_7627 = state_5729__$1;
(statearr_5780_7627[(2)] = inst_5699);

(statearr_5780_7627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5730 === (8))){
var inst_5672 = (state_5729[(13)]);
var inst_5673 = (state_5729[(16)]);
var inst_5675 = (inst_5673 < inst_5672);
var inst_5676 = inst_5675;
var state_5729__$1 = state_5729;
if(cljs.core.truth_(inst_5676)){
var statearr_5781_7630 = state_5729__$1;
(statearr_5781_7630[(1)] = (10));

} else {
var statearr_5782_7631 = state_5729__$1;
(statearr_5782_7631[(1)] = (11));

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
});})(c__3820__auto___7545,mults,ensure_mult,p))
;
return ((function (switch__3728__auto__,c__3820__auto___7545,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_5784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5784[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_5784[(1)] = (1));

return statearr_5784;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_5729){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_5729);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e5785){if((e5785 instanceof Object)){
var ex__3732__auto__ = e5785;
var statearr_5786_7637 = state_5729;
(statearr_5786_7637[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7639 = state_5729;
state_5729 = G__7639;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_5729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_5729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7545,mults,ensure_mult,p))
})();
var state__3822__auto__ = (function (){var statearr_5791 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_5791[(6)] = c__3820__auto___7545);

return statearr_5791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7545,mults,ensure_mult,p))
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
var G__5795 = arguments.length;
switch (G__5795) {
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
var G__5851 = arguments.length;
switch (G__5851) {
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
var G__5854 = arguments.length;
switch (G__5854) {
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
var c__3820__auto___7661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5903){
var state_val_5904 = (state_5903[(1)]);
if((state_val_5904 === (7))){
var state_5903__$1 = state_5903;
var statearr_5905_7666 = state_5903__$1;
(statearr_5905_7666[(2)] = null);

(statearr_5905_7666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (1))){
var state_5903__$1 = state_5903;
var statearr_5906_7667 = state_5903__$1;
(statearr_5906_7667[(2)] = null);

(statearr_5906_7667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (4))){
var inst_5862 = (state_5903[(7)]);
var inst_5864 = (inst_5862 < cnt);
var state_5903__$1 = state_5903;
if(cljs.core.truth_(inst_5864)){
var statearr_5907_7668 = state_5903__$1;
(statearr_5907_7668[(1)] = (6));

} else {
var statearr_5908_7669 = state_5903__$1;
(statearr_5908_7669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (15))){
var inst_5898 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_5909_7673 = state_5903__$1;
(statearr_5909_7673[(2)] = inst_5898);

(statearr_5909_7673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (13))){
var inst_5891 = cljs.core.async.close_BANG_(out);
var state_5903__$1 = state_5903;
var statearr_5910_7675 = state_5903__$1;
(statearr_5910_7675[(2)] = inst_5891);

(statearr_5910_7675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (6))){
var state_5903__$1 = state_5903;
var statearr_5911_7676 = state_5903__$1;
(statearr_5911_7676[(2)] = null);

(statearr_5911_7676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (3))){
var inst_5900 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5903__$1,inst_5900);
} else {
if((state_val_5904 === (12))){
var inst_5887 = (state_5903[(8)]);
var inst_5887__$1 = (state_5903[(2)]);
var inst_5888 = cljs.core.some(cljs.core.nil_QMARK_,inst_5887__$1);
var state_5903__$1 = (function (){var statearr_5918 = state_5903;
(statearr_5918[(8)] = inst_5887__$1);

return statearr_5918;
})();
if(cljs.core.truth_(inst_5888)){
var statearr_5919_7677 = state_5903__$1;
(statearr_5919_7677[(1)] = (13));

} else {
var statearr_5920_7678 = state_5903__$1;
(statearr_5920_7678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (2))){
var inst_5861 = cljs.core.reset_BANG_(dctr,cnt);
var inst_5862 = (0);
var state_5903__$1 = (function (){var statearr_5966 = state_5903;
(statearr_5966[(7)] = inst_5862);

(statearr_5966[(9)] = inst_5861);

return statearr_5966;
})();
var statearr_5967_7679 = state_5903__$1;
(statearr_5967_7679[(2)] = null);

(statearr_5967_7679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (11))){
var inst_5862 = (state_5903[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_5903,(10),Object,null,(9));
var inst_5874 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_5862) : chs__$1.call(null,inst_5862));
var inst_5875 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_5862) : done.call(null,inst_5862));
var inst_5876 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_5874,inst_5875);
var state_5903__$1 = state_5903;
var statearr_5970_7680 = state_5903__$1;
(statearr_5970_7680[(2)] = inst_5876);


cljs.core.async.impl.ioc_helpers.process_exception(state_5903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (9))){
var inst_5862 = (state_5903[(7)]);
var inst_5878 = (state_5903[(2)]);
var inst_5879 = (inst_5862 + (1));
var inst_5862__$1 = inst_5879;
var state_5903__$1 = (function (){var statearr_5972 = state_5903;
(statearr_5972[(7)] = inst_5862__$1);

(statearr_5972[(10)] = inst_5878);

return statearr_5972;
})();
var statearr_5973_7684 = state_5903__$1;
(statearr_5973_7684[(2)] = null);

(statearr_5973_7684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (5))){
var inst_5885 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_5976 = state_5903;
(statearr_5976[(11)] = inst_5885);

return statearr_5976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5903__$1,(12),dchan);
} else {
if((state_val_5904 === (14))){
var inst_5887 = (state_5903[(8)]);
var inst_5893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_5887);
var state_5903__$1 = state_5903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5903__$1,(16),out,inst_5893);
} else {
if((state_val_5904 === (16))){
var inst_5895 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_5978 = state_5903;
(statearr_5978[(12)] = inst_5895);

return statearr_5978;
})();
var statearr_5979_7685 = state_5903__$1;
(statearr_5979_7685[(2)] = null);

(statearr_5979_7685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (10))){
var inst_5869 = (state_5903[(2)]);
var inst_5870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_5903__$1 = (function (){var statearr_5980 = state_5903;
(statearr_5980[(13)] = inst_5869);

return statearr_5980;
})();
var statearr_5981_7686 = state_5903__$1;
(statearr_5981_7686[(2)] = inst_5870);


cljs.core.async.impl.ioc_helpers.process_exception(state_5903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5904 === (8))){
var inst_5883 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_5982_7687 = state_5903__$1;
(statearr_5982_7687[(2)] = inst_5883);

(statearr_5982_7687[(1)] = (5));


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
});})(c__3820__auto___7661,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3728__auto__,c__3820__auto___7661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_5983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5983[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_5983[(1)] = (1));

return statearr_5983;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_5903){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_5903);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e5984){if((e5984 instanceof Object)){
var ex__3732__auto__ = e5984;
var statearr_5985_7688 = state_5903;
(statearr_5985_7688[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_5903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7689 = state_5903;
state_5903 = G__7689;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_5903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_5903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7661,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3822__auto__ = (function (){var statearr_5989 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_5989[(6)] = c__3820__auto___7661);

return statearr_5989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7661,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__5992 = arguments.length;
switch (G__5992) {
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
var c__3820__auto___7774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7774,out){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7774,out){
return (function (state_6045){
var state_val_6046 = (state_6045[(1)]);
if((state_val_6046 === (7))){
var inst_6003 = (state_6045[(7)]);
var inst_6004 = (state_6045[(8)]);
var inst_6003__$1 = (state_6045[(2)]);
var inst_6004__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6003__$1,(0),null);
var inst_6005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6003__$1,(1),null);
var inst_6018 = (inst_6004__$1 == null);
var state_6045__$1 = (function (){var statearr_6052 = state_6045;
(statearr_6052[(7)] = inst_6003__$1);

(statearr_6052[(8)] = inst_6004__$1);

(statearr_6052[(9)] = inst_6005);

return statearr_6052;
})();
if(cljs.core.truth_(inst_6018)){
var statearr_6053_7779 = state_6045__$1;
(statearr_6053_7779[(1)] = (8));

} else {
var statearr_6054_7780 = state_6045__$1;
(statearr_6054_7780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6046 === (1))){
var inst_5993 = cljs.core.vec(chs);
var inst_5994 = inst_5993;
var state_6045__$1 = (function (){var statearr_6057 = state_6045;
(statearr_6057[(10)] = inst_5994);

return statearr_6057;
})();
var statearr_6059_7781 = state_6045__$1;
(statearr_6059_7781[(2)] = null);

(statearr_6059_7781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6046 === (4))){
var inst_5994 = (state_6045[(10)]);
var state_6045__$1 = state_6045;
return cljs.core.async.ioc_alts_BANG_(state_6045__$1,(7),inst_5994);
} else {
if((state_val_6046 === (6))){
var inst_6040 = (state_6045[(2)]);
var state_6045__$1 = state_6045;
var statearr_6060_7782 = state_6045__$1;
(statearr_6060_7782[(2)] = inst_6040);

(statearr_6060_7782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6046 === (3))){
var inst_6043 = (state_6045[(2)]);
var state_6045__$1 = state_6045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6045__$1,inst_6043);
} else {
if((state_val_6046 === (2))){
var inst_5994 = (state_6045[(10)]);
var inst_5996 = cljs.core.count(inst_5994);
var inst_5997 = (inst_5996 > (0));
var state_6045__$1 = state_6045;
if(cljs.core.truth_(inst_5997)){
var statearr_6063_7783 = state_6045__$1;
(statearr_6063_7783[(1)] = (4));

} else {
var statearr_6064_7784 = state_6045__$1;
(statearr_6064_7784[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6046 === (11))){
var inst_5994 = (state_6045[(10)]);
var inst_6033 = (state_6045[(2)]);
var tmp6062 = inst_5994;
var inst_5994__$1 = tmp6062;
var state_6045__$1 = (function (){var statearr_6066 = state_6045;
(statearr_6066[(10)] = inst_5994__$1);

(statearr_6066[(11)] = inst_6033);

return statearr_6066;
})();
var statearr_6067_7786 = state_6045__$1;
(statearr_6067_7786[(2)] = null);

(statearr_6067_7786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6046 === (9))){
var inst_6004 = (state_6045[(8)]);
var state_6045__$1 = state_6045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6045__$1,(11),out,inst_6004);
} else {
if((state_val_6046 === (5))){
var inst_6038 = cljs.core.async.close_BANG_(out);
var state_6045__$1 = state_6045;
var statearr_6076_7787 = state_6045__$1;
(statearr_6076_7787[(2)] = inst_6038);

(statearr_6076_7787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6046 === (10))){
var inst_6036 = (state_6045[(2)]);
var state_6045__$1 = state_6045;
var statearr_6077_7790 = state_6045__$1;
(statearr_6077_7790[(2)] = inst_6036);

(statearr_6077_7790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6046 === (8))){
var inst_6003 = (state_6045[(7)]);
var inst_5994 = (state_6045[(10)]);
var inst_6004 = (state_6045[(8)]);
var inst_6005 = (state_6045[(9)]);
var inst_6028 = (function (){var cs = inst_5994;
var vec__5999 = inst_6003;
var v = inst_6004;
var c = inst_6005;
return ((function (cs,vec__5999,v,c,inst_6003,inst_5994,inst_6004,inst_6005,state_val_6046,c__3820__auto___7774,out){
return (function (p1__5990_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__5990_SHARP_);
});
;})(cs,vec__5999,v,c,inst_6003,inst_5994,inst_6004,inst_6005,state_val_6046,c__3820__auto___7774,out))
})();
var inst_6029 = cljs.core.filterv(inst_6028,inst_5994);
var inst_5994__$1 = inst_6029;
var state_6045__$1 = (function (){var statearr_6079 = state_6045;
(statearr_6079[(10)] = inst_5994__$1);

return statearr_6079;
})();
var statearr_6080_7796 = state_6045__$1;
(statearr_6080_7796[(2)] = null);

(statearr_6080_7796[(1)] = (2));


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
});})(c__3820__auto___7774,out))
;
return ((function (switch__3728__auto__,c__3820__auto___7774,out){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_6082 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6082[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_6082[(1)] = (1));

return statearr_6082;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_6045){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_6045);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e6084){if((e6084 instanceof Object)){
var ex__3732__auto__ = e6084;
var statearr_6085_7804 = state_6045;
(statearr_6085_7804[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7807 = state_6045;
state_6045 = G__7807;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_6045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_6045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7774,out))
})();
var state__3822__auto__ = (function (){var statearr_6086 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_6086[(6)] = c__3820__auto___7774);

return statearr_6086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7774,out))
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
var G__6103 = arguments.length;
switch (G__6103) {
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
var c__3820__auto___7814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7814,out){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7814,out){
return (function (state_6127){
var state_val_6128 = (state_6127[(1)]);
if((state_val_6128 === (7))){
var inst_6109 = (state_6127[(7)]);
var inst_6109__$1 = (state_6127[(2)]);
var inst_6110 = (inst_6109__$1 == null);
var inst_6111 = cljs.core.not(inst_6110);
var state_6127__$1 = (function (){var statearr_6129 = state_6127;
(statearr_6129[(7)] = inst_6109__$1);

return statearr_6129;
})();
if(inst_6111){
var statearr_6130_7817 = state_6127__$1;
(statearr_6130_7817[(1)] = (8));

} else {
var statearr_6131_7818 = state_6127__$1;
(statearr_6131_7818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (1))){
var inst_6104 = (0);
var state_6127__$1 = (function (){var statearr_6132 = state_6127;
(statearr_6132[(8)] = inst_6104);

return statearr_6132;
})();
var statearr_6133_7821 = state_6127__$1;
(statearr_6133_7821[(2)] = null);

(statearr_6133_7821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (4))){
var state_6127__$1 = state_6127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6127__$1,(7),ch);
} else {
if((state_val_6128 === (6))){
var inst_6122 = (state_6127[(2)]);
var state_6127__$1 = state_6127;
var statearr_6134_7823 = state_6127__$1;
(statearr_6134_7823[(2)] = inst_6122);

(statearr_6134_7823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (3))){
var inst_6124 = (state_6127[(2)]);
var inst_6125 = cljs.core.async.close_BANG_(out);
var state_6127__$1 = (function (){var statearr_6135 = state_6127;
(statearr_6135[(9)] = inst_6124);

return statearr_6135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_6127__$1,inst_6125);
} else {
if((state_val_6128 === (2))){
var inst_6104 = (state_6127[(8)]);
var inst_6106 = (inst_6104 < n);
var state_6127__$1 = state_6127;
if(cljs.core.truth_(inst_6106)){
var statearr_6136_7826 = state_6127__$1;
(statearr_6136_7826[(1)] = (4));

} else {
var statearr_6137_7827 = state_6127__$1;
(statearr_6137_7827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (11))){
var inst_6104 = (state_6127[(8)]);
var inst_6114 = (state_6127[(2)]);
var inst_6115 = (inst_6104 + (1));
var inst_6104__$1 = inst_6115;
var state_6127__$1 = (function (){var statearr_6138 = state_6127;
(statearr_6138[(8)] = inst_6104__$1);

(statearr_6138[(10)] = inst_6114);

return statearr_6138;
})();
var statearr_6139_7830 = state_6127__$1;
(statearr_6139_7830[(2)] = null);

(statearr_6139_7830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (9))){
var state_6127__$1 = state_6127;
var statearr_6141_7832 = state_6127__$1;
(statearr_6141_7832[(2)] = null);

(statearr_6141_7832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (5))){
var state_6127__$1 = state_6127;
var statearr_6142_7833 = state_6127__$1;
(statearr_6142_7833[(2)] = null);

(statearr_6142_7833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (10))){
var inst_6119 = (state_6127[(2)]);
var state_6127__$1 = state_6127;
var statearr_6143_7834 = state_6127__$1;
(statearr_6143_7834[(2)] = inst_6119);

(statearr_6143_7834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6128 === (8))){
var inst_6109 = (state_6127[(7)]);
var state_6127__$1 = state_6127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6127__$1,(11),out,inst_6109);
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
});})(c__3820__auto___7814,out))
;
return ((function (switch__3728__auto__,c__3820__auto___7814,out){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_6144 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6144[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_6144[(1)] = (1));

return statearr_6144;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_6127){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_6127);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e6145){if((e6145 instanceof Object)){
var ex__3732__auto__ = e6145;
var statearr_6146_7838 = state_6127;
(statearr_6146_7838[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7839 = state_6127;
state_6127 = G__7839;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_6127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_6127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7814,out))
})();
var state__3822__auto__ = (function (){var statearr_6147 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_6147[(6)] = c__3820__auto___7814);

return statearr_6147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7814,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6149 = (function (f,ch,meta6150){
this.f = f;
this.ch = ch;
this.meta6150 = meta6150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6151,meta6150__$1){
var self__ = this;
var _6151__$1 = this;
return (new cljs.core.async.t_cljs$core$async6149(self__.f,self__.ch,meta6150__$1));
});

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6151){
var self__ = this;
var _6151__$1 = this;
return self__.meta6150;
});

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6163 = (function (f,ch,meta6150,_,fn1,meta6164){
this.f = f;
this.ch = ch;
this.meta6150 = meta6150;
this._ = _;
this.fn1 = fn1;
this.meta6164 = meta6164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_6165,meta6164__$1){
var self__ = this;
var _6165__$1 = this;
return (new cljs.core.async.t_cljs$core$async6163(self__.f,self__.ch,self__.meta6150,self__._,self__.fn1,meta6164__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async6163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_6165){
var self__ = this;
var _6165__$1 = this;
return self__.meta6164;
});})(___$1))
;

cljs.core.async.t_cljs$core$async6163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async6163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async6163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__6148_SHARP_){
var G__6183 = (((p1__6148_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__6148_SHARP_) : self__.f.call(null,p1__6148_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__6183) : f1.call(null,G__6183));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async6163.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6150","meta6150",1568848749,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async6149","cljs.core.async/t_cljs$core$async6149",-1657149176,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6164","meta6164",-928491713,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async6163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6163";

cljs.core.async.t_cljs$core$async6163.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async6163");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6163.
 */
cljs.core.async.__GT_t_cljs$core$async6163 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6163(f__$1,ch__$1,meta6150__$1,___$2,fn1__$1,meta6164){
return (new cljs.core.async.t_cljs$core$async6163(f__$1,ch__$1,meta6150__$1,___$2,fn1__$1,meta6164));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async6163(self__.f,self__.ch,self__.meta6150,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__6186 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__6186) : self__.f.call(null,G__6186));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async6149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6150","meta6150",1568848749,null)], null);
});

cljs.core.async.t_cljs$core$async6149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6149";

cljs.core.async.t_cljs$core$async6149.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async6149");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6149.
 */
cljs.core.async.__GT_t_cljs$core$async6149 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6149(f__$1,ch__$1,meta6150){
return (new cljs.core.async.t_cljs$core$async6149(f__$1,ch__$1,meta6150));
});

}

return (new cljs.core.async.t_cljs$core$async6149(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6190 = (function (f,ch,meta6191){
this.f = f;
this.ch = ch;
this.meta6191 = meta6191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6192,meta6191__$1){
var self__ = this;
var _6192__$1 = this;
return (new cljs.core.async.t_cljs$core$async6190(self__.f,self__.ch,meta6191__$1));
});

cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6192){
var self__ = this;
var _6192__$1 = this;
return self__.meta6191;
});

cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async6190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6191","meta6191",-1566784459,null)], null);
});

cljs.core.async.t_cljs$core$async6190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6190";

cljs.core.async.t_cljs$core$async6190.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async6190");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6190.
 */
cljs.core.async.__GT_t_cljs$core$async6190 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async6190(f__$1,ch__$1,meta6191){
return (new cljs.core.async.t_cljs$core$async6190(f__$1,ch__$1,meta6191));
});

}

return (new cljs.core.async.t_cljs$core$async6190(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6200 = (function (p,ch,meta6201){
this.p = p;
this.ch = ch;
this.meta6201 = meta6201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6202,meta6201__$1){
var self__ = this;
var _6202__$1 = this;
return (new cljs.core.async.t_cljs$core$async6200(self__.p,self__.ch,meta6201__$1));
});

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6202){
var self__ = this;
var _6202__$1 = this;
return self__.meta6201;
});

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async6200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6201","meta6201",50627792,null)], null);
});

cljs.core.async.t_cljs$core$async6200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6200";

cljs.core.async.t_cljs$core$async6200.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async6200");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6200.
 */
cljs.core.async.__GT_t_cljs$core$async6200 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async6200(p__$1,ch__$1,meta6201){
return (new cljs.core.async.t_cljs$core$async6200(p__$1,ch__$1,meta6201));
});

}

return (new cljs.core.async.t_cljs$core$async6200(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__6206 = arguments.length;
switch (G__6206) {
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
var c__3820__auto___7862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7862,out){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7862,out){
return (function (state_6227){
var state_val_6228 = (state_6227[(1)]);
if((state_val_6228 === (7))){
var inst_6223 = (state_6227[(2)]);
var state_6227__$1 = state_6227;
var statearr_6263_7863 = state_6227__$1;
(statearr_6263_7863[(2)] = inst_6223);

(statearr_6263_7863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (1))){
var state_6227__$1 = state_6227;
var statearr_6264_7864 = state_6227__$1;
(statearr_6264_7864[(2)] = null);

(statearr_6264_7864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (4))){
var inst_6209 = (state_6227[(7)]);
var inst_6209__$1 = (state_6227[(2)]);
var inst_6210 = (inst_6209__$1 == null);
var state_6227__$1 = (function (){var statearr_6265 = state_6227;
(statearr_6265[(7)] = inst_6209__$1);

return statearr_6265;
})();
if(cljs.core.truth_(inst_6210)){
var statearr_6266_7865 = state_6227__$1;
(statearr_6266_7865[(1)] = (5));

} else {
var statearr_6267_7866 = state_6227__$1;
(statearr_6267_7866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (6))){
var inst_6209 = (state_6227[(7)]);
var inst_6214 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_6209) : p.call(null,inst_6209));
var state_6227__$1 = state_6227;
if(cljs.core.truth_(inst_6214)){
var statearr_6268_7867 = state_6227__$1;
(statearr_6268_7867[(1)] = (8));

} else {
var statearr_6269_7868 = state_6227__$1;
(statearr_6269_7868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (3))){
var inst_6225 = (state_6227[(2)]);
var state_6227__$1 = state_6227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6227__$1,inst_6225);
} else {
if((state_val_6228 === (2))){
var state_6227__$1 = state_6227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6227__$1,(4),ch);
} else {
if((state_val_6228 === (11))){
var inst_6217 = (state_6227[(2)]);
var state_6227__$1 = state_6227;
var statearr_6270_7872 = state_6227__$1;
(statearr_6270_7872[(2)] = inst_6217);

(statearr_6270_7872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (9))){
var state_6227__$1 = state_6227;
var statearr_6272_7873 = state_6227__$1;
(statearr_6272_7873[(2)] = null);

(statearr_6272_7873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (5))){
var inst_6212 = cljs.core.async.close_BANG_(out);
var state_6227__$1 = state_6227;
var statearr_6281_7874 = state_6227__$1;
(statearr_6281_7874[(2)] = inst_6212);

(statearr_6281_7874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (10))){
var inst_6220 = (state_6227[(2)]);
var state_6227__$1 = (function (){var statearr_6282 = state_6227;
(statearr_6282[(8)] = inst_6220);

return statearr_6282;
})();
var statearr_6283_7878 = state_6227__$1;
(statearr_6283_7878[(2)] = null);

(statearr_6283_7878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6228 === (8))){
var inst_6209 = (state_6227[(7)]);
var state_6227__$1 = state_6227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6227__$1,(11),out,inst_6209);
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
});})(c__3820__auto___7862,out))
;
return ((function (switch__3728__auto__,c__3820__auto___7862,out){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_6284 = [null,null,null,null,null,null,null,null,null];
(statearr_6284[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_6284[(1)] = (1));

return statearr_6284;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_6227){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_6227);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e6287){if((e6287 instanceof Object)){
var ex__3732__auto__ = e6287;
var statearr_6288_7882 = state_6227;
(statearr_6288_7882[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7883 = state_6227;
state_6227 = G__7883;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_6227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_6227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7862,out))
})();
var state__3822__auto__ = (function (){var statearr_6289 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_6289[(6)] = c__3820__auto___7862);

return statearr_6289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7862,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__6291 = arguments.length;
switch (G__6291) {
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
var c__3820__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto__){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto__){
return (function (state_6353){
var state_val_6354 = (state_6353[(1)]);
if((state_val_6354 === (7))){
var inst_6349 = (state_6353[(2)]);
var state_6353__$1 = state_6353;
var statearr_6356_7887 = state_6353__$1;
(statearr_6356_7887[(2)] = inst_6349);

(statearr_6356_7887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (20))){
var inst_6319 = (state_6353[(7)]);
var inst_6330 = (state_6353[(2)]);
var inst_6331 = cljs.core.next(inst_6319);
var inst_6305 = inst_6331;
var inst_6306 = null;
var inst_6307 = (0);
var inst_6308 = (0);
var state_6353__$1 = (function (){var statearr_6357 = state_6353;
(statearr_6357[(8)] = inst_6305);

(statearr_6357[(9)] = inst_6330);

(statearr_6357[(10)] = inst_6307);

(statearr_6357[(11)] = inst_6306);

(statearr_6357[(12)] = inst_6308);

return statearr_6357;
})();
var statearr_6358_7888 = state_6353__$1;
(statearr_6358_7888[(2)] = null);

(statearr_6358_7888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (1))){
var state_6353__$1 = state_6353;
var statearr_6359_7889 = state_6353__$1;
(statearr_6359_7889[(2)] = null);

(statearr_6359_7889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (4))){
var inst_6294 = (state_6353[(13)]);
var inst_6294__$1 = (state_6353[(2)]);
var inst_6295 = (inst_6294__$1 == null);
var state_6353__$1 = (function (){var statearr_6360 = state_6353;
(statearr_6360[(13)] = inst_6294__$1);

return statearr_6360;
})();
if(cljs.core.truth_(inst_6295)){
var statearr_6361_7890 = state_6353__$1;
(statearr_6361_7890[(1)] = (5));

} else {
var statearr_6362_7891 = state_6353__$1;
(statearr_6362_7891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (15))){
var state_6353__$1 = state_6353;
var statearr_6366_7892 = state_6353__$1;
(statearr_6366_7892[(2)] = null);

(statearr_6366_7892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (21))){
var state_6353__$1 = state_6353;
var statearr_6367_7893 = state_6353__$1;
(statearr_6367_7893[(2)] = null);

(statearr_6367_7893[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (13))){
var inst_6305 = (state_6353[(8)]);
var inst_6307 = (state_6353[(10)]);
var inst_6306 = (state_6353[(11)]);
var inst_6308 = (state_6353[(12)]);
var inst_6315 = (state_6353[(2)]);
var inst_6316 = (inst_6308 + (1));
var tmp6363 = inst_6305;
var tmp6364 = inst_6307;
var tmp6365 = inst_6306;
var inst_6305__$1 = tmp6363;
var inst_6306__$1 = tmp6365;
var inst_6307__$1 = tmp6364;
var inst_6308__$1 = inst_6316;
var state_6353__$1 = (function (){var statearr_6368 = state_6353;
(statearr_6368[(8)] = inst_6305__$1);

(statearr_6368[(10)] = inst_6307__$1);

(statearr_6368[(11)] = inst_6306__$1);

(statearr_6368[(14)] = inst_6315);

(statearr_6368[(12)] = inst_6308__$1);

return statearr_6368;
})();
var statearr_6369_7894 = state_6353__$1;
(statearr_6369_7894[(2)] = null);

(statearr_6369_7894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (22))){
var state_6353__$1 = state_6353;
var statearr_6370_7899 = state_6353__$1;
(statearr_6370_7899[(2)] = null);

(statearr_6370_7899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (6))){
var inst_6294 = (state_6353[(13)]);
var inst_6303 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_6294) : f.call(null,inst_6294));
var inst_6304 = cljs.core.seq(inst_6303);
var inst_6305 = inst_6304;
var inst_6306 = null;
var inst_6307 = (0);
var inst_6308 = (0);
var state_6353__$1 = (function (){var statearr_6371 = state_6353;
(statearr_6371[(8)] = inst_6305);

(statearr_6371[(10)] = inst_6307);

(statearr_6371[(11)] = inst_6306);

(statearr_6371[(12)] = inst_6308);

return statearr_6371;
})();
var statearr_6372_7908 = state_6353__$1;
(statearr_6372_7908[(2)] = null);

(statearr_6372_7908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (17))){
var inst_6319 = (state_6353[(7)]);
var inst_6323 = cljs.core.chunk_first(inst_6319);
var inst_6324 = cljs.core.chunk_rest(inst_6319);
var inst_6325 = cljs.core.count(inst_6323);
var inst_6305 = inst_6324;
var inst_6306 = inst_6323;
var inst_6307 = inst_6325;
var inst_6308 = (0);
var state_6353__$1 = (function (){var statearr_6373 = state_6353;
(statearr_6373[(8)] = inst_6305);

(statearr_6373[(10)] = inst_6307);

(statearr_6373[(11)] = inst_6306);

(statearr_6373[(12)] = inst_6308);

return statearr_6373;
})();
var statearr_6374_7909 = state_6353__$1;
(statearr_6374_7909[(2)] = null);

(statearr_6374_7909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (3))){
var inst_6351 = (state_6353[(2)]);
var state_6353__$1 = state_6353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6353__$1,inst_6351);
} else {
if((state_val_6354 === (12))){
var inst_6339 = (state_6353[(2)]);
var state_6353__$1 = state_6353;
var statearr_6376_7910 = state_6353__$1;
(statearr_6376_7910[(2)] = inst_6339);

(statearr_6376_7910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (2))){
var state_6353__$1 = state_6353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6353__$1,(4),in$);
} else {
if((state_val_6354 === (23))){
var inst_6347 = (state_6353[(2)]);
var state_6353__$1 = state_6353;
var statearr_6378_7911 = state_6353__$1;
(statearr_6378_7911[(2)] = inst_6347);

(statearr_6378_7911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (19))){
var inst_6334 = (state_6353[(2)]);
var state_6353__$1 = state_6353;
var statearr_6380_7912 = state_6353__$1;
(statearr_6380_7912[(2)] = inst_6334);

(statearr_6380_7912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (11))){
var inst_6305 = (state_6353[(8)]);
var inst_6319 = (state_6353[(7)]);
var inst_6319__$1 = cljs.core.seq(inst_6305);
var state_6353__$1 = (function (){var statearr_6382 = state_6353;
(statearr_6382[(7)] = inst_6319__$1);

return statearr_6382;
})();
if(inst_6319__$1){
var statearr_6383_7913 = state_6353__$1;
(statearr_6383_7913[(1)] = (14));

} else {
var statearr_6384_7914 = state_6353__$1;
(statearr_6384_7914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (9))){
var inst_6341 = (state_6353[(2)]);
var inst_6342 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_6353__$1 = (function (){var statearr_6386 = state_6353;
(statearr_6386[(15)] = inst_6341);

return statearr_6386;
})();
if(cljs.core.truth_(inst_6342)){
var statearr_6387_7915 = state_6353__$1;
(statearr_6387_7915[(1)] = (21));

} else {
var statearr_6388_7916 = state_6353__$1;
(statearr_6388_7916[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (5))){
var inst_6297 = cljs.core.async.close_BANG_(out);
var state_6353__$1 = state_6353;
var statearr_6389_7917 = state_6353__$1;
(statearr_6389_7917[(2)] = inst_6297);

(statearr_6389_7917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (14))){
var inst_6319 = (state_6353[(7)]);
var inst_6321 = cljs.core.chunked_seq_QMARK_(inst_6319);
var state_6353__$1 = state_6353;
if(inst_6321){
var statearr_6392_7918 = state_6353__$1;
(statearr_6392_7918[(1)] = (17));

} else {
var statearr_6393_7919 = state_6353__$1;
(statearr_6393_7919[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (16))){
var inst_6337 = (state_6353[(2)]);
var state_6353__$1 = state_6353;
var statearr_6394_7920 = state_6353__$1;
(statearr_6394_7920[(2)] = inst_6337);

(statearr_6394_7920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6354 === (10))){
var inst_6306 = (state_6353[(11)]);
var inst_6308 = (state_6353[(12)]);
var inst_6313 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_6306,inst_6308);
var state_6353__$1 = state_6353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6353__$1,(13),out,inst_6313);
} else {
if((state_val_6354 === (18))){
var inst_6319 = (state_6353[(7)]);
var inst_6328 = cljs.core.first(inst_6319);
var state_6353__$1 = state_6353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6353__$1,(20),out,inst_6328);
} else {
if((state_val_6354 === (8))){
var inst_6307 = (state_6353[(10)]);
var inst_6308 = (state_6353[(12)]);
var inst_6310 = (inst_6308 < inst_6307);
var inst_6311 = inst_6310;
var state_6353__$1 = state_6353;
if(cljs.core.truth_(inst_6311)){
var statearr_6398_7922 = state_6353__$1;
(statearr_6398_7922[(1)] = (10));

} else {
var statearr_6399_7923 = state_6353__$1;
(statearr_6399_7923[(1)] = (11));

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
});})(c__3820__auto__))
;
return ((function (switch__3728__auto__,c__3820__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3729__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3729__auto____0 = (function (){
var statearr_6400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6400[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3729__auto__);

(statearr_6400[(1)] = (1));

return statearr_6400;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3729__auto____1 = (function (state_6353){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_6353);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e6401){if((e6401 instanceof Object)){
var ex__3732__auto__ = e6401;
var statearr_6402_7924 = state_6353;
(statearr_6402_7924[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7925 = state_6353;
state_6353 = G__7925;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3729__auto__ = function(state_6353){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3729__auto____1.call(this,state_6353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3729__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3729__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto__))
})();
var state__3822__auto__ = (function (){var statearr_6403 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_6403[(6)] = c__3820__auto__);

return statearr_6403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto__))
);

return c__3820__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__6409 = arguments.length;
switch (G__6409) {
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
var G__6414 = arguments.length;
switch (G__6414) {
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
var G__6425 = arguments.length;
switch (G__6425) {
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
var c__3820__auto___7950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7950,out){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7950,out){
return (function (state_6454){
var state_val_6455 = (state_6454[(1)]);
if((state_val_6455 === (7))){
var inst_6449 = (state_6454[(2)]);
var state_6454__$1 = state_6454;
var statearr_6456_7951 = state_6454__$1;
(statearr_6456_7951[(2)] = inst_6449);

(statearr_6456_7951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (1))){
var inst_6429 = null;
var state_6454__$1 = (function (){var statearr_6459 = state_6454;
(statearr_6459[(7)] = inst_6429);

return statearr_6459;
})();
var statearr_6460_7952 = state_6454__$1;
(statearr_6460_7952[(2)] = null);

(statearr_6460_7952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (4))){
var inst_6433 = (state_6454[(8)]);
var inst_6433__$1 = (state_6454[(2)]);
var inst_6434 = (inst_6433__$1 == null);
var inst_6435 = cljs.core.not(inst_6434);
var state_6454__$1 = (function (){var statearr_6461 = state_6454;
(statearr_6461[(8)] = inst_6433__$1);

return statearr_6461;
})();
if(inst_6435){
var statearr_6462_7953 = state_6454__$1;
(statearr_6462_7953[(1)] = (5));

} else {
var statearr_6464_7954 = state_6454__$1;
(statearr_6464_7954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (6))){
var state_6454__$1 = state_6454;
var statearr_6465_7955 = state_6454__$1;
(statearr_6465_7955[(2)] = null);

(statearr_6465_7955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (3))){
var inst_6451 = (state_6454[(2)]);
var inst_6452 = cljs.core.async.close_BANG_(out);
var state_6454__$1 = (function (){var statearr_6466 = state_6454;
(statearr_6466[(9)] = inst_6451);

return statearr_6466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_6454__$1,inst_6452);
} else {
if((state_val_6455 === (2))){
var state_6454__$1 = state_6454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6454__$1,(4),ch);
} else {
if((state_val_6455 === (11))){
var inst_6433 = (state_6454[(8)]);
var inst_6442 = (state_6454[(2)]);
var inst_6429 = inst_6433;
var state_6454__$1 = (function (){var statearr_6468 = state_6454;
(statearr_6468[(7)] = inst_6429);

(statearr_6468[(10)] = inst_6442);

return statearr_6468;
})();
var statearr_6469_7956 = state_6454__$1;
(statearr_6469_7956[(2)] = null);

(statearr_6469_7956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (9))){
var inst_6433 = (state_6454[(8)]);
var state_6454__$1 = state_6454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6454__$1,(11),out,inst_6433);
} else {
if((state_val_6455 === (5))){
var inst_6429 = (state_6454[(7)]);
var inst_6433 = (state_6454[(8)]);
var inst_6437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_6433,inst_6429);
var state_6454__$1 = state_6454;
if(inst_6437){
var statearr_6476_7957 = state_6454__$1;
(statearr_6476_7957[(1)] = (8));

} else {
var statearr_6477_7958 = state_6454__$1;
(statearr_6477_7958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (10))){
var inst_6445 = (state_6454[(2)]);
var state_6454__$1 = state_6454;
var statearr_6479_7959 = state_6454__$1;
(statearr_6479_7959[(2)] = inst_6445);

(statearr_6479_7959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (8))){
var inst_6429 = (state_6454[(7)]);
var tmp6473 = inst_6429;
var inst_6429__$1 = tmp6473;
var state_6454__$1 = (function (){var statearr_6480 = state_6454;
(statearr_6480[(7)] = inst_6429__$1);

return statearr_6480;
})();
var statearr_6482_7960 = state_6454__$1;
(statearr_6482_7960[(2)] = null);

(statearr_6482_7960[(1)] = (2));


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
});})(c__3820__auto___7950,out))
;
return ((function (switch__3728__auto__,c__3820__auto___7950,out){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_6485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6485[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_6485[(1)] = (1));

return statearr_6485;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_6454){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_6454);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e6486){if((e6486 instanceof Object)){
var ex__3732__auto__ = e6486;
var statearr_6487_7964 = state_6454;
(statearr_6487_7964[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7965 = state_6454;
state_6454 = G__7965;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_6454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_6454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7950,out))
})();
var state__3822__auto__ = (function (){var statearr_6490 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_6490[(6)] = c__3820__auto___7950);

return statearr_6490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7950,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__6493 = arguments.length;
switch (G__6493) {
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
var c__3820__auto___7969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7969,out){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7969,out){
return (function (state_6539){
var state_val_6540 = (state_6539[(1)]);
if((state_val_6540 === (7))){
var inst_6534 = (state_6539[(2)]);
var state_6539__$1 = state_6539;
var statearr_6541_7970 = state_6539__$1;
(statearr_6541_7970[(2)] = inst_6534);

(statearr_6541_7970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (1))){
var inst_6499 = (new Array(n));
var inst_6500 = inst_6499;
var inst_6501 = (0);
var state_6539__$1 = (function (){var statearr_6543 = state_6539;
(statearr_6543[(7)] = inst_6501);

(statearr_6543[(8)] = inst_6500);

return statearr_6543;
})();
var statearr_6544_7971 = state_6539__$1;
(statearr_6544_7971[(2)] = null);

(statearr_6544_7971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (4))){
var inst_6505 = (state_6539[(9)]);
var inst_6505__$1 = (state_6539[(2)]);
var inst_6506 = (inst_6505__$1 == null);
var inst_6507 = cljs.core.not(inst_6506);
var state_6539__$1 = (function (){var statearr_6545 = state_6539;
(statearr_6545[(9)] = inst_6505__$1);

return statearr_6545;
})();
if(inst_6507){
var statearr_6546_7972 = state_6539__$1;
(statearr_6546_7972[(1)] = (5));

} else {
var statearr_6548_7973 = state_6539__$1;
(statearr_6548_7973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (15))){
var inst_6528 = (state_6539[(2)]);
var state_6539__$1 = state_6539;
var statearr_6550_7974 = state_6539__$1;
(statearr_6550_7974[(2)] = inst_6528);

(statearr_6550_7974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (13))){
var state_6539__$1 = state_6539;
var statearr_6551_7975 = state_6539__$1;
(statearr_6551_7975[(2)] = null);

(statearr_6551_7975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (6))){
var inst_6501 = (state_6539[(7)]);
var inst_6524 = (inst_6501 > (0));
var state_6539__$1 = state_6539;
if(cljs.core.truth_(inst_6524)){
var statearr_6555_7976 = state_6539__$1;
(statearr_6555_7976[(1)] = (12));

} else {
var statearr_6556_7977 = state_6539__$1;
(statearr_6556_7977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (3))){
var inst_6536 = (state_6539[(2)]);
var state_6539__$1 = state_6539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6539__$1,inst_6536);
} else {
if((state_val_6540 === (12))){
var inst_6500 = (state_6539[(8)]);
var inst_6526 = cljs.core.vec(inst_6500);
var state_6539__$1 = state_6539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6539__$1,(15),out,inst_6526);
} else {
if((state_val_6540 === (2))){
var state_6539__$1 = state_6539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6539__$1,(4),ch);
} else {
if((state_val_6540 === (11))){
var inst_6518 = (state_6539[(2)]);
var inst_6519 = (new Array(n));
var inst_6500 = inst_6519;
var inst_6501 = (0);
var state_6539__$1 = (function (){var statearr_6560 = state_6539;
(statearr_6560[(7)] = inst_6501);

(statearr_6560[(8)] = inst_6500);

(statearr_6560[(10)] = inst_6518);

return statearr_6560;
})();
var statearr_6567_7978 = state_6539__$1;
(statearr_6567_7978[(2)] = null);

(statearr_6567_7978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (9))){
var inst_6500 = (state_6539[(8)]);
var inst_6516 = cljs.core.vec(inst_6500);
var state_6539__$1 = state_6539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6539__$1,(11),out,inst_6516);
} else {
if((state_val_6540 === (5))){
var inst_6505 = (state_6539[(9)]);
var inst_6501 = (state_6539[(7)]);
var inst_6500 = (state_6539[(8)]);
var inst_6510 = (state_6539[(11)]);
var inst_6509 = (inst_6500[inst_6501] = inst_6505);
var inst_6510__$1 = (inst_6501 + (1));
var inst_6511 = (inst_6510__$1 < n);
var state_6539__$1 = (function (){var statearr_6571 = state_6539;
(statearr_6571[(11)] = inst_6510__$1);

(statearr_6571[(12)] = inst_6509);

return statearr_6571;
})();
if(cljs.core.truth_(inst_6511)){
var statearr_6572_7979 = state_6539__$1;
(statearr_6572_7979[(1)] = (8));

} else {
var statearr_6573_7980 = state_6539__$1;
(statearr_6573_7980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (14))){
var inst_6531 = (state_6539[(2)]);
var inst_6532 = cljs.core.async.close_BANG_(out);
var state_6539__$1 = (function (){var statearr_6577 = state_6539;
(statearr_6577[(13)] = inst_6531);

return statearr_6577;
})();
var statearr_6578_7981 = state_6539__$1;
(statearr_6578_7981[(2)] = inst_6532);

(statearr_6578_7981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (10))){
var inst_6522 = (state_6539[(2)]);
var state_6539__$1 = state_6539;
var statearr_6580_7982 = state_6539__$1;
(statearr_6580_7982[(2)] = inst_6522);

(statearr_6580_7982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6540 === (8))){
var inst_6500 = (state_6539[(8)]);
var inst_6510 = (state_6539[(11)]);
var tmp6574 = inst_6500;
var inst_6500__$1 = tmp6574;
var inst_6501 = inst_6510;
var state_6539__$1 = (function (){var statearr_6581 = state_6539;
(statearr_6581[(7)] = inst_6501);

(statearr_6581[(8)] = inst_6500__$1);

return statearr_6581;
})();
var statearr_6582_7983 = state_6539__$1;
(statearr_6582_7983[(2)] = null);

(statearr_6582_7983[(1)] = (2));


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
});})(c__3820__auto___7969,out))
;
return ((function (switch__3728__auto__,c__3820__auto___7969,out){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_6583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6583[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_6583[(1)] = (1));

return statearr_6583;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_6539){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_6539);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e6584){if((e6584 instanceof Object)){
var ex__3732__auto__ = e6584;
var statearr_6585_7984 = state_6539;
(statearr_6585_7984[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7986 = state_6539;
state_6539 = G__7986;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_6539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_6539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7969,out))
})();
var state__3822__auto__ = (function (){var statearr_6586 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_6586[(6)] = c__3820__auto___7969);

return statearr_6586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7969,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__6588 = arguments.length;
switch (G__6588) {
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
var c__3820__auto___7989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__3820__auto___7989,out){
return (function (){
var f__3821__auto__ = (function (){var switch__3728__auto__ = ((function (c__3820__auto___7989,out){
return (function (state_6631){
var state_val_6632 = (state_6631[(1)]);
if((state_val_6632 === (7))){
var inst_6627 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6633_7991 = state_6631__$1;
(statearr_6633_7991[(2)] = inst_6627);

(statearr_6633_7991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (1))){
var inst_6590 = [];
var inst_6591 = inst_6590;
var inst_6592 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6631__$1 = (function (){var statearr_6635 = state_6631;
(statearr_6635[(7)] = inst_6592);

(statearr_6635[(8)] = inst_6591);

return statearr_6635;
})();
var statearr_6636_7993 = state_6631__$1;
(statearr_6636_7993[(2)] = null);

(statearr_6636_7993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (4))){
var inst_6595 = (state_6631[(9)]);
var inst_6595__$1 = (state_6631[(2)]);
var inst_6596 = (inst_6595__$1 == null);
var inst_6597 = cljs.core.not(inst_6596);
var state_6631__$1 = (function (){var statearr_6638 = state_6631;
(statearr_6638[(9)] = inst_6595__$1);

return statearr_6638;
})();
if(inst_6597){
var statearr_6639_7998 = state_6631__$1;
(statearr_6639_7998[(1)] = (5));

} else {
var statearr_6640_7999 = state_6631__$1;
(statearr_6640_7999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (15))){
var inst_6621 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6641_8000 = state_6631__$1;
(statearr_6641_8000[(2)] = inst_6621);

(statearr_6641_8000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (13))){
var state_6631__$1 = state_6631;
var statearr_6642_8001 = state_6631__$1;
(statearr_6642_8001[(2)] = null);

(statearr_6642_8001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (6))){
var inst_6591 = (state_6631[(8)]);
var inst_6616 = inst_6591.length;
var inst_6617 = (inst_6616 > (0));
var state_6631__$1 = state_6631;
if(cljs.core.truth_(inst_6617)){
var statearr_6643_8002 = state_6631__$1;
(statearr_6643_8002[(1)] = (12));

} else {
var statearr_6644_8003 = state_6631__$1;
(statearr_6644_8003[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (3))){
var inst_6629 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6631__$1,inst_6629);
} else {
if((state_val_6632 === (12))){
var inst_6591 = (state_6631[(8)]);
var inst_6619 = cljs.core.vec(inst_6591);
var state_6631__$1 = state_6631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6631__$1,(15),out,inst_6619);
} else {
if((state_val_6632 === (2))){
var state_6631__$1 = state_6631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6631__$1,(4),ch);
} else {
if((state_val_6632 === (11))){
var inst_6599 = (state_6631[(10)]);
var inst_6595 = (state_6631[(9)]);
var inst_6609 = (state_6631[(2)]);
var inst_6610 = [];
var inst_6611 = inst_6610.push(inst_6595);
var inst_6591 = inst_6610;
var inst_6592 = inst_6599;
var state_6631__$1 = (function (){var statearr_6645 = state_6631;
(statearr_6645[(7)] = inst_6592);

(statearr_6645[(8)] = inst_6591);

(statearr_6645[(11)] = inst_6611);

(statearr_6645[(12)] = inst_6609);

return statearr_6645;
})();
var statearr_6646_8055 = state_6631__$1;
(statearr_6646_8055[(2)] = null);

(statearr_6646_8055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (9))){
var inst_6591 = (state_6631[(8)]);
var inst_6607 = cljs.core.vec(inst_6591);
var state_6631__$1 = state_6631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6631__$1,(11),out,inst_6607);
} else {
if((state_val_6632 === (5))){
var inst_6592 = (state_6631[(7)]);
var inst_6599 = (state_6631[(10)]);
var inst_6595 = (state_6631[(9)]);
var inst_6599__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_6595) : f.call(null,inst_6595));
var inst_6600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_6599__$1,inst_6592);
var inst_6601 = cljs.core.keyword_identical_QMARK_(inst_6592,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6602 = ((inst_6600) || (inst_6601));
var state_6631__$1 = (function (){var statearr_6650 = state_6631;
(statearr_6650[(10)] = inst_6599__$1);

return statearr_6650;
})();
if(cljs.core.truth_(inst_6602)){
var statearr_6651_8056 = state_6631__$1;
(statearr_6651_8056[(1)] = (8));

} else {
var statearr_6652_8057 = state_6631__$1;
(statearr_6652_8057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (14))){
var inst_6624 = (state_6631[(2)]);
var inst_6625 = cljs.core.async.close_BANG_(out);
var state_6631__$1 = (function (){var statearr_6654 = state_6631;
(statearr_6654[(13)] = inst_6624);

return statearr_6654;
})();
var statearr_6655_8058 = state_6631__$1;
(statearr_6655_8058[(2)] = inst_6625);

(statearr_6655_8058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (10))){
var inst_6614 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6656_8059 = state_6631__$1;
(statearr_6656_8059[(2)] = inst_6614);

(statearr_6656_8059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (8))){
var inst_6591 = (state_6631[(8)]);
var inst_6599 = (state_6631[(10)]);
var inst_6595 = (state_6631[(9)]);
var inst_6604 = inst_6591.push(inst_6595);
var tmp6653 = inst_6591;
var inst_6591__$1 = tmp6653;
var inst_6592 = inst_6599;
var state_6631__$1 = (function (){var statearr_6657 = state_6631;
(statearr_6657[(7)] = inst_6592);

(statearr_6657[(8)] = inst_6591__$1);

(statearr_6657[(14)] = inst_6604);

return statearr_6657;
})();
var statearr_6658_8060 = state_6631__$1;
(statearr_6658_8060[(2)] = null);

(statearr_6658_8060[(1)] = (2));


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
});})(c__3820__auto___7989,out))
;
return ((function (switch__3728__auto__,c__3820__auto___7989,out){
return (function() {
var cljs$core$async$state_machine__3729__auto__ = null;
var cljs$core$async$state_machine__3729__auto____0 = (function (){
var statearr_6659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6659[(0)] = cljs$core$async$state_machine__3729__auto__);

(statearr_6659[(1)] = (1));

return statearr_6659;
});
var cljs$core$async$state_machine__3729__auto____1 = (function (state_6631){
while(true){
var ret_value__3730__auto__ = (function (){try{while(true){
var result__3731__auto__ = switch__3728__auto__(state_6631);
if(cljs.core.keyword_identical_QMARK_(result__3731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3731__auto__;
}
break;
}
}catch (e6660){if((e6660 instanceof Object)){
var ex__3732__auto__ = e6660;
var statearr_6661_8061 = state_6631;
(statearr_6661_8061[(5)] = ex__3732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__3730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8064 = state_6631;
state_6631 = G__8064;
continue;
} else {
return ret_value__3730__auto__;
}
break;
}
});
cljs$core$async$state_machine__3729__auto__ = function(state_6631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3729__auto____1.call(this,state_6631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3729__auto____0;
cljs$core$async$state_machine__3729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3729__auto____1;
return cljs$core$async$state_machine__3729__auto__;
})()
;})(switch__3728__auto__,c__3820__auto___7989,out))
})();
var state__3822__auto__ = (function (){var statearr_6662 = (f__3821__auto__.cljs$core$IFn$_invoke$arity$0 ? f__3821__auto__.cljs$core$IFn$_invoke$arity$0() : f__3821__auto__.call(null));
(statearr_6662[(6)] = c__3820__auto___7989);

return statearr_6662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__3822__auto__);
});})(c__3820__auto___7989,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
