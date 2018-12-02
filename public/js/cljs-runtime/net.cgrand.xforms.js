goog.provide('net.cgrand.xforms');
goog.require('cljs.core');
goog.require('net.cgrand.xforms.rfs');
goog.require('goog.structs.Queue');




/**
 * Protocol for reducing fns that accept key and val as separate arguments.
 * @interface
 */
net.cgrand.xforms.KvRfable = function(){};

/**
 * Returns a kvrf or nil
 */
net.cgrand.xforms.some_kvrf = (function net$cgrand$xforms$some_kvrf(f){
if((((!((f == null)))) && ((!((f.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 == null)))))){
return f.net$cgrand$xforms$KvRfable$some_kvrf$arity$1(f);
} else {
var x__4347__auto__ = (((f == null))?null:f);
var m__4348__auto__ = (net.cgrand.xforms.some_kvrf[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__4348__auto__.call(null,f));
} else {
var m__4348__auto____$1 = (net.cgrand.xforms.some_kvrf["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(f) : m__4348__auto____$1.call(null,f));
} else {
throw cljs.core.missing_protocol("KvRfable.some-kvrf",f);
}
}
}
});

net.cgrand.xforms.kvreducible_QMARK_ = (function net$cgrand$xforms$kvreducible_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition0$ & (1048576))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IKVReduce$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,coll);
}
});

goog.object.set(net.cgrand.xforms.KvRfable,"_",true);

var G__31330_31742 = net.cgrand.xforms.some_kvrf;
var G__31331_31743 = "_";
var G__31332_31744 = ((function (G__31330_31742,G__31331_31743){
return (function (_){
return null;
});})(G__31330_31742,G__31331_31743))
;
goog.object.set(G__31330_31742,G__31331_31743,G__31332_31744);

net.cgrand.xforms.ensure_kvrf = (function net$cgrand$xforms$ensure_kvrf(rf){
var or__4047__auto__ = net.cgrand.xforms.some_kvrf(rf);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31334 = (function (rf,or__4047__auto__,meta31335){
this.rf = rf;
this.or__4047__auto__ = or__4047__auto__;
this.meta31335 = meta31335;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (or__4047__auto__){
return (function (_31336,meta31335__$1){
var self__ = this;
var _31336__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31334(self__.rf,self__.or__4047__auto__,meta31335__$1));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (or__4047__auto__){
return (function (_31336){
var self__ = this;
var _31336__$1 = this;
return self__.meta31335;
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (or__4047__auto__){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.call = ((function (or__4047__auto__){
return (function() {
var G__31745 = null;
var G__31745__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31333 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__31745__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31333 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__31745__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _31333 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});
var G__31745__4 = (function (self__,acc,k__30877__auto__,v__30878__auto__){
var self__ = this;
var self____$1 = this;
var _31333 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});
G__31745 = function(self__,acc,k__30877__auto__,v__30878__auto__){
switch(arguments.length){
case 1:
return G__31745__1.call(this,self__);
case 2:
return G__31745__2.call(this,self__,acc);
case 3:
return G__31745__3.call(this,self__,acc,k__30877__auto__);
case 4:
return G__31745__4.call(this,self__,acc,k__30877__auto__,v__30878__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31745.cljs$core$IFn$_invoke$arity$1 = G__31745__1;
G__31745.cljs$core$IFn$_invoke$arity$2 = G__31745__2;
G__31745.cljs$core$IFn$_invoke$arity$3 = G__31745__3;
G__31745.cljs$core$IFn$_invoke$arity$4 = G__31745__4;
return G__31745;
})()
;})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.apply = ((function (or__4047__auto__){
return (function (self__,args31337){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31337)));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (or__4047__auto__){
return (function (acc,k__30877__auto__,v__30878__auto__){
var self__ = this;
var _31333 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (or__4047__auto__){
return (function (){
var self__ = this;
var _31333 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (or__4047__auto__){
return (function (acc){
var self__ = this;
var _31333 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (or__4047__auto__){
return (function (acc,x){
var self__ = this;
var _31333 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.getBasis = ((function (or__4047__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"or__4047__auto__","or__4047__auto__",-609205617,null),new cljs.core.Symbol(null,"meta31335","meta31335",-1939777384,null)], null);
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms31334.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31334.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31334";

net.cgrand.xforms.t_net$cgrand$xforms31334.cljs$lang$ctorPrWriter = ((function (or__4047__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31334");
});})(or__4047__auto__))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31334.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31334 = ((function (or__4047__auto__){
return (function net$cgrand$xforms$ensure_kvrf_$___GT_t_net$cgrand$xforms31334(rf__$1,or__4047__auto____$1,meta31335){
return (new net.cgrand.xforms.t_net$cgrand$xforms31334(rf__$1,or__4047__auto____$1,meta31335));
});})(or__4047__auto__))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31334(rf,or__4047__auto__,null));
}
});

/**
 * A transducer that reduces a collection to a 1-item collection consisting of only the reduced result.
 * Unlike reduce but like transduce it does call the completing arity (1) of the reducing fn.
 */
net.cgrand.xforms.reduce = (function net$cgrand$xforms$reduce(var_args){
var G__31339 = arguments.length;
switch (G__31339) {
case 1:
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var vacc = cljs.core.volatile_BANG_((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
var f__$1 = net.cgrand.xforms.ensure_kvrf(f);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31341 = (function (f,rf,vacc,meta31342){
this.f = f;
this.rf = rf;
this.vacc = vacc;
this.meta31342 = meta31342;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (f__$1,vacc){
return (function (_31343,meta31342__$1){
var self__ = this;
var _31343__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31341(self__.f,self__.rf,self__.vacc,meta31342__$1));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (f__$1,vacc){
return (function (_31343){
var self__ = this;
var _31343__$1 = this;
return self__.meta31342;
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (f__$1,vacc){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.call = ((function (f__$1,vacc){
return (function() {
var G__31809 = null;
var G__31809__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31340 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__31809__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31340 = self____$1;
var v__30880__auto__ = cljs.core.deref(self__.vacc);
if((v__30880__auto__ === self__.vacc)){
return null;
} else {
cljs.core.vreset_BANG_(self__.vacc,self__.vacc);

var f_acc = v__30880__auto__;
var G__31345 = cljs.core.unreduced((function (){var G__31346 = acc;
var G__31347 = (function (){var G__31348 = cljs.core.unreduced(f_acc);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31348) : self__.f.call(null,G__31348));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(G__31346,G__31347) : self__.rf.call(null,G__31346,G__31347));
})());
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31345) : self__.rf.call(null,G__31345));
}
});
var G__31809__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _31340 = self____$1;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__31349 = cljs.core._deref(self__.vacc);
var G__31350 = x;
return (self__.f.cljs$core$IFn$_invoke$arity$2 ? self__.f.cljs$core$IFn$_invoke$arity$2(G__31349,G__31350) : self__.f.call(null,G__31349,G__31350));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});
var G__31809__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _31340 = self____$1;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__31351 = cljs.core._deref(self__.vacc);
var G__31352 = k;
var G__31353 = v;
return (self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(G__31351,G__31352,G__31353) : self__.f.call(null,G__31351,G__31352,G__31353));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});
G__31809 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__31809__1.call(this,self__);
case 2:
return G__31809__2.call(this,self__,acc);
case 3:
return G__31809__3.call(this,self__,acc,k);
case 4:
return G__31809__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31809.cljs$core$IFn$_invoke$arity$1 = G__31809__1;
G__31809.cljs$core$IFn$_invoke$arity$2 = G__31809__2;
G__31809.cljs$core$IFn$_invoke$arity$3 = G__31809__3;
G__31809.cljs$core$IFn$_invoke$arity$4 = G__31809__4;
return G__31809;
})()
;})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.apply = ((function (f__$1,vacc){
return (function (self__,args31344){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31344)));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (f__$1,vacc){
return (function (){
var self__ = this;
var _31340 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (f__$1,vacc){
return (function (acc){
var self__ = this;
var _31340 = this;
var v__30880__auto__ = cljs.core.deref(self__.vacc);
if((v__30880__auto__ === self__.vacc)){
return null;
} else {
cljs.core.vreset_BANG_(self__.vacc,self__.vacc);

var f_acc = v__30880__auto__;
var G__31354 = cljs.core.unreduced((function (){var G__31355 = acc;
var G__31356 = (function (){var G__31357 = cljs.core.unreduced(f_acc);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31357) : self__.f.call(null,G__31357));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(G__31355,G__31356) : self__.rf.call(null,G__31355,G__31356));
})());
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31354) : self__.rf.call(null,G__31354));
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (f__$1,vacc){
return (function (acc,x){
var self__ = this;
var _31340 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__31358 = cljs.core._deref(self__.vacc);
var G__31359 = x;
return (self__.f.cljs$core$IFn$_invoke$arity$2 ? self__.f.cljs$core$IFn$_invoke$arity$2(G__31358,G__31359) : self__.f.call(null,G__31358,G__31359));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (f__$1,vacc){
return (function (acc,k,v){
var self__ = this;
var _31340 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__31360 = cljs.core._deref(self__.vacc);
var G__31361 = k;
var G__31362 = v;
return (self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(G__31360,G__31361,G__31362) : self__.f.call(null,G__31360,G__31361,G__31362));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.getBasis = ((function (f__$1,vacc){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"vacc","vacc",-1937917185,null),new cljs.core.Symbol(null,"meta31342","meta31342",2062753375,null)], null);
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms31341.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31341.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31341";

net.cgrand.xforms.t_net$cgrand$xforms31341.cljs$lang$ctorPrWriter = ((function (f__$1,vacc){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31341");
});})(f__$1,vacc))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31341.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31341 = ((function (f__$1,vacc){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms31341(f__$2,rf__$1,vacc__$1,meta31342){
return (new net.cgrand.xforms.t_net$cgrand$xforms31341(f__$2,rf__$1,vacc__$1,meta31342));
});})(f__$1,vacc))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31341(f__$1,rf,vacc,null));
});
});

net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((function() {
var G__31850 = null;
var G__31850__0 = (function (){
return init;
});
var G__31850__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__31850__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__31850 = function(acc,x){
switch(arguments.length){
case 0:
return G__31850__0.call(this);
case 1:
return G__31850__1.call(this,acc);
case 2:
return G__31850__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31850.cljs$core$IFn$_invoke$arity$0 = G__31850__0;
G__31850.cljs$core$IFn$_invoke$arity$1 = G__31850__1;
G__31850.cljs$core$IFn$_invoke$arity$2 = G__31850__2;
return G__31850;
})()
);
});

net.cgrand.xforms.reduce.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.into_rf = (function net$cgrand$xforms$into_rf(to){
if((((!((to == null))))?(((((to.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === to.cljs$core$IEditableCollection$))))?true:(((!to.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to))){
if(cljs.core.map_QMARK_(to)){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31365 = (function (to,meta31366){
this.to = to;
this.meta31366 = meta31366;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31367,meta31366__$1){
var self__ = this;
var _31367__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31365(self__.to,meta31366__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31367){
var self__ = this;
var _31367__$1 = this;
return self__.meta31366;
});

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.call = (function() {
var G__31851 = null;
var G__31851__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31364 = self____$1;
return cljs.core.transient$(self__.to);
});
var G__31851__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31364 = self____$1;
return cljs.core.persistent_BANG_(acc);
});
var G__31851__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _31364 = self____$1;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
var G__31851__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _31364 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});
G__31851 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__31851__1.call(this,self__);
case 2:
return G__31851__2.call(this,self__,acc);
case 3:
return G__31851__3.call(this,self__,acc,k);
case 4:
return G__31851__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31851.cljs$core$IFn$_invoke$arity$1 = G__31851__1;
G__31851.cljs$core$IFn$_invoke$arity$2 = G__31851__2;
G__31851.cljs$core$IFn$_invoke$arity$3 = G__31851__3;
G__31851.cljs$core$IFn$_invoke$arity$4 = G__31851__4;
return G__31851;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.apply = (function (self__,args31368){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31368)));
});

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _31364 = this;
return cljs.core.transient$(self__.to);
});

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _31364 = this;
return cljs.core.persistent_BANG_(acc);
});

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _31364 = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});

net.cgrand.xforms.t_net$cgrand$xforms31365.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _31364 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});

net.cgrand.xforms.t_net$cgrand$xforms31365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta31366","meta31366",-407906692,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms31365.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31365.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31365";

net.cgrand.xforms.t_net$cgrand$xforms31365.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31365");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31365.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31365 = (function net$cgrand$xforms$into_rf_$___GT_t_net$cgrand$xforms31365(to__$1,meta31366){
return (new net.cgrand.xforms.t_net$cgrand$xforms31365(to__$1,meta31366));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31365(to,null));
} else {
return (function() {
var G__31852 = null;
var G__31852__0 = (function (){
return cljs.core.transient$(to);
});
var G__31852__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__31852__2 = (function (acc,x){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__31852 = function(acc,x){
switch(arguments.length){
case 0:
return G__31852__0.call(this);
case 1:
return G__31852__1.call(this,acc);
case 2:
return G__31852__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31852.cljs$core$IFn$_invoke$arity$0 = G__31852__0;
G__31852.cljs$core$IFn$_invoke$arity$1 = G__31852__1;
G__31852.cljs$core$IFn$_invoke$arity$2 = G__31852__2;
return G__31852;
})()
}
} else {
if(cljs.core.map_QMARK_(to)){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31370 = (function (to,meta31371){
this.to = to;
this.meta31371 = meta31371;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31372,meta31371__$1){
var self__ = this;
var _31372__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31370(self__.to,meta31371__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31372){
var self__ = this;
var _31372__$1 = this;
return self__.meta31371;
});

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.call = (function() {
var G__31853 = null;
var G__31853__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31369 = self____$1;
return self__.to;
});
var G__31853__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31369 = self____$1;
return acc;
});
var G__31853__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _31369 = self____$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
var G__31853__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _31369 = self____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});
G__31853 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__31853__1.call(this,self__);
case 2:
return G__31853__2.call(this,self__,acc);
case 3:
return G__31853__3.call(this,self__,acc,k);
case 4:
return G__31853__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31853.cljs$core$IFn$_invoke$arity$1 = G__31853__1;
G__31853.cljs$core$IFn$_invoke$arity$2 = G__31853__2;
G__31853.cljs$core$IFn$_invoke$arity$3 = G__31853__3;
G__31853.cljs$core$IFn$_invoke$arity$4 = G__31853__4;
return G__31853;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.apply = (function (self__,args31373){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31373)));
});

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _31369 = this;
return self__.to;
});

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _31369 = this;
return acc;
});

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _31369 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});

net.cgrand.xforms.t_net$cgrand$xforms31370.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _31369 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});

net.cgrand.xforms.t_net$cgrand$xforms31370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta31371","meta31371",2107928915,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms31370.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31370.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31370";

net.cgrand.xforms.t_net$cgrand$xforms31370.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31370");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31370.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31370 = (function net$cgrand$xforms$into_rf_$___GT_t_net$cgrand$xforms31370(to__$1,meta31371){
return (new net.cgrand.xforms.t_net$cgrand$xforms31370(to__$1,meta31371));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31370(to,null));
} else {
return (function() {
var G__31857 = null;
var G__31857__0 = (function (){
return to;
});
var G__31857__1 = (function (acc){
return acc;
});
var G__31857__2 = (function (acc,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__31857 = function(acc,x){
switch(arguments.length){
case 0:
return G__31857__0.call(this);
case 1:
return G__31857__1.call(this,acc);
case 2:
return G__31857__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31857.cljs$core$IFn$_invoke$arity$0 = G__31857__0;
G__31857.cljs$core$IFn$_invoke$arity$1 = G__31857__1;
G__31857.cljs$core$IFn$_invoke$arity$2 = G__31857__2;
return G__31857;
})()

}
}
});

/**
 * Like clojure.core/into but with a 1-arg arity returning a transducer which accumulate every input in a collection and outputs only the accumulated collection.
 */
net.cgrand.xforms.into = (function net$cgrand$xforms$into(var_args){
var G__31375 = arguments.length;
switch (G__31375) {
case 1:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1 = (function (to){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.into_rf(to));
});

net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(to,cljs.core.identity,from);
});

net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
var rf = (function (){var G__31376 = net.cgrand.xforms.into_rf(to);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__31376) : xform.call(null,G__31376));
})();
var temp__5455__auto__ = (function (){var and__4036__auto__ = cljs.core.map_QMARK_(from);
if(and__4036__auto__){
var and__4036__auto____$1 = net.cgrand.xforms.kvreducible_QMARK_(from);
if(and__4036__auto____$1){
return net.cgrand.xforms.some_kvrf(rf);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var rf__$1 = temp__5455__auto__;
var G__31377 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),from);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__31377) : rf__$1.call(null,G__31377));
} else {
var G__31378 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),from);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__31378) : rf.call(null,G__31378));
}
});

net.cgrand.xforms.into.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.without_rf = (function net$cgrand$xforms$without_rf(from){
if((((!((from == null))))?(((((from.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === from.cljs$core$IEditableCollection$))))?true:(((!from.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from))){
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__31868 = null;
var G__31868__0 = (function (){
return cljs.core.transient$(from);
});
var G__31868__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__31868__2 = (function (acc,x){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__31868 = function(acc,x){
switch(arguments.length){
case 0:
return G__31868__0.call(this);
case 1:
return G__31868__1.call(this,acc);
case 2:
return G__31868__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31868.cljs$core$IFn$_invoke$arity$0 = G__31868__0;
G__31868.cljs$core$IFn$_invoke$arity$1 = G__31868__1;
G__31868.cljs$core$IFn$_invoke$arity$2 = G__31868__2;
return G__31868;
})()
} else {
return (function() {
var G__31869 = null;
var G__31869__0 = (function (){
return cljs.core.transient$(from);
});
var G__31869__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__31869__2 = (function (acc,x){
return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__31869 = function(acc,x){
switch(arguments.length){
case 0:
return G__31869__0.call(this);
case 1:
return G__31869__1.call(this,acc);
case 2:
return G__31869__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31869.cljs$core$IFn$_invoke$arity$0 = G__31869__0;
G__31869.cljs$core$IFn$_invoke$arity$1 = G__31869__1;
G__31869.cljs$core$IFn$_invoke$arity$2 = G__31869__2;
return G__31869;
})()
}
} else {
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__31872 = null;
var G__31872__0 = (function (){
return from;
});
var G__31872__1 = (function (acc){
return acc;
});
var G__31872__2 = (function (acc,x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__31872 = function(acc,x){
switch(arguments.length){
case 0:
return G__31872__0.call(this);
case 1:
return G__31872__1.call(this,acc);
case 2:
return G__31872__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31872.cljs$core$IFn$_invoke$arity$0 = G__31872__0;
G__31872.cljs$core$IFn$_invoke$arity$1 = G__31872__1;
G__31872.cljs$core$IFn$_invoke$arity$2 = G__31872__2;
return G__31872;
})()
} else {
return (function() {
var G__31874 = null;
var G__31874__0 = (function (){
return from;
});
var G__31874__1 = (function (acc){
return acc;
});
var G__31874__2 = (function (acc,x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__31874 = function(acc,x){
switch(arguments.length){
case 0:
return G__31874__0.call(this);
case 1:
return G__31874__1.call(this,acc);
case 2:
return G__31874__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31874.cljs$core$IFn$_invoke$arity$0 = G__31874__0;
G__31874.cljs$core$IFn$_invoke$arity$1 = G__31874__1;
G__31874.cljs$core$IFn$_invoke$arity$2 = G__31874__2;
return G__31874;
})()

}
}
});

/**
 * The opposite of x/into: dissociate or disjoin from the target.
 */
net.cgrand.xforms.without = (function net$cgrand$xforms$without(var_args){
var G__31381 = arguments.length;
switch (G__31381) {
case 1:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$1 = (function (target){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.without_rf(target));
});

net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$2 = (function (target,keys){
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3(target,cljs.core.identity,keys);
});

net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3 = (function (target,xform,keys){
var rf = (function (){var G__31382 = net.cgrand.xforms.without_rf(target);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__31382) : xform.call(null,G__31382));
})();
var temp__5455__auto__ = (function (){var and__4036__auto__ = cljs.core.map_QMARK_(keys);
if(and__4036__auto__){
var and__4036__auto____$1 = net.cgrand.xforms.kvreducible_QMARK_(keys);
if(and__4036__auto____$1){
return net.cgrand.xforms.some_kvrf(rf);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var rf__$1 = temp__5455__auto__;
var G__31383 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),keys);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__31383) : rf__$1.call(null,G__31383));
} else {
var G__31384 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),keys);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__31384) : rf.call(null,G__31384));
}
});

net.cgrand.xforms.without.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.minimum = (function net$cgrand$xforms$minimum(var_args){
var G__31386 = arguments.length;
switch (G__31386) {
case 1:
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2(comparator,null);
});

net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_maximum){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$2(comparator,absolute_maximum));
});

net.cgrand.xforms.minimum.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.maximum = (function net$cgrand$xforms$maximum(var_args){
var G__31388 = arguments.length;
switch (G__31388) {
case 1:
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2(comparator,null);
});

net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_minimum){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$2(comparator,absolute_minimum));
});

net.cgrand.xforms.maximum.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.min = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.min);

net.cgrand.xforms.max = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.max);

/**
 * When used as a value, it's an aggregating transducer that concatenates input values
 * into a single output value. 
 * When used as a function of two args (xform and coll) it's a transducing context that
 * concatenates all values in a string.
 */
net.cgrand.xforms.str = (function net$cgrand$xforms$str(var_args){
var G__31390 = arguments.length;
switch (G__31390) {
case 1:
return net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$1 = (function (rf){
var fexpr__31391 = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.str);
return (fexpr__31391.cljs$core$IFn$_invoke$arity$1 ? fexpr__31391.cljs$core$IFn$_invoke$arity$1(rf) : fexpr__31391.call(null,rf));
});

net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,net.cgrand.xforms.rfs.str,coll);
});

net.cgrand.xforms.str.cljs$lang$maxFixedArity = 2;


/**
 * Transducer. Adds open as the first item, and close as the last. Optionally inserts delim between each input item.
 */
net.cgrand.xforms.wrap = (function net$cgrand$xforms$wrap(var_args){
var G__31393 = arguments.length;
switch (G__31393) {
case 2:
return net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2 = (function (open,close){
return (function (rf){
var vrf = cljs.core.volatile_BANG_(null);
cljs.core.vreset_BANG_(vrf,((function (vrf){
return (function (acc,x){
var acc__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,open) : rf.call(null,acc,open));
cljs.core.vreset_BANG_(vrf,rf);

if(cljs.core.reduced_QMARK_(acc__$1)){
return acc__$1;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc__$1,x) : rf.call(null,acc__$1,x));
}
});})(vrf))
);

return ((function (vrf){
return (function() {
var G__31950 = null;
var G__31950__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__31950__1 = (function (acc){
var G__31394 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,close) : rf.call(null,acc,close)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__31394) : rf.call(null,G__31394));
});
var G__31950__2 = (function (acc,x){
var fexpr__31395 = cljs.core.deref(vrf);
return (fexpr__31395.cljs$core$IFn$_invoke$arity$2 ? fexpr__31395.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__31395.call(null,acc,x));
});
G__31950 = function(acc,x){
switch(arguments.length){
case 0:
return G__31950__0.call(this);
case 1:
return G__31950__1.call(this,acc);
case 2:
return G__31950__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31950.cljs$core$IFn$_invoke$arity$0 = G__31950__0;
G__31950.cljs$core$IFn$_invoke$arity$1 = G__31950__1;
G__31950.cljs$core$IFn$_invoke$arity$2 = G__31950__2;
return G__31950;
})()
;})(vrf))
});
});

net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$3 = (function (open,close,delim){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(delim),net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2(open,close));
});

net.cgrand.xforms.wrap.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.vals = (function net$cgrand$xforms$vals(rf){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31397 = (function (rf,meta31398){
this.rf = rf;
this.meta31398 = meta31398;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31399,meta31398__$1){
var self__ = this;
var _31399__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31397(self__.rf,meta31398__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31399){
var self__ = this;
var _31399__$1 = this;
return self__.meta31398;
});

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.call = (function() {
var G__31966 = null;
var G__31966__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31396 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__31966__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31396 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__31966__3 = (function (self__,acc,p__31401){
var self__ = this;
var vec__31402 = p__31401;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31402,(1),null);
var self____$1 = this;
var _31396 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});
var G__31966__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _31396 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});
G__31966 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__31966__1.call(this,self__);
case 2:
return G__31966__2.call(this,self__,acc);
case 3:
return G__31966__3.call(this,self__,acc,k);
case 4:
return G__31966__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31966.cljs$core$IFn$_invoke$arity$1 = G__31966__1;
G__31966.cljs$core$IFn$_invoke$arity$2 = G__31966__2;
G__31966.cljs$core$IFn$_invoke$arity$3 = G__31966__3;
G__31966.cljs$core$IFn$_invoke$arity$4 = G__31966__4;
return G__31966;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.apply = (function (self__,args31400){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31400)));
});

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__31405){
var self__ = this;
var vec__31406 = p__31405;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31406,(1),null);
var _31396 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _31396 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _31396 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});

net.cgrand.xforms.t_net$cgrand$xforms31397.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _31396 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});

net.cgrand.xforms.t_net$cgrand$xforms31397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta31398","meta31398",1951616065,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms31397.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31397.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31397";

net.cgrand.xforms.t_net$cgrand$xforms31397.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31397");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31397.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31397 = (function net$cgrand$xforms$vals_$___GT_t_net$cgrand$xforms31397(rf__$1,meta31398){
return (new net.cgrand.xforms.t_net$cgrand$xforms31397(rf__$1,meta31398));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31397(rf,null));
});

net.cgrand.xforms.keys = (function net$cgrand$xforms$keys(rf){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31410 = (function (rf,meta31411){
this.rf = rf;
this.meta31411 = meta31411;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31412,meta31411__$1){
var self__ = this;
var _31412__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31410(self__.rf,meta31411__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31412){
var self__ = this;
var _31412__$1 = this;
return self__.meta31411;
});

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.call = (function() {
var G__31979 = null;
var G__31979__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31409 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__31979__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31409 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__31979__3 = (function (self__,acc,p__31414){
var self__ = this;
var vec__31415 = p__31414;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31415,(1),null);
var self____$1 = this;
var _31409 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});
var G__31979__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _31409 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});
G__31979 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__31979__1.call(this,self__);
case 2:
return G__31979__2.call(this,self__,acc);
case 3:
return G__31979__3.call(this,self__,acc,k);
case 4:
return G__31979__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31979.cljs$core$IFn$_invoke$arity$1 = G__31979__1;
G__31979.cljs$core$IFn$_invoke$arity$2 = G__31979__2;
G__31979.cljs$core$IFn$_invoke$arity$3 = G__31979__3;
G__31979.cljs$core$IFn$_invoke$arity$4 = G__31979__4;
return G__31979;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.apply = (function (self__,args31413){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31413)));
});

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__31418){
var self__ = this;
var vec__31419 = p__31418;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31419,(1),null);
var _31409 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _31409 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _31409 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});

net.cgrand.xforms.t_net$cgrand$xforms31410.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _31409 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});

net.cgrand.xforms.t_net$cgrand$xforms31410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta31411","meta31411",-968247681,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms31410.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31410.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31410";

net.cgrand.xforms.t_net$cgrand$xforms31410.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31410");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31410.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31410 = (function net$cgrand$xforms$keys_$___GT_t_net$cgrand$xforms31410(rf__$1,meta31411){
return (new net.cgrand.xforms.t_net$cgrand$xforms31410(rf__$1,meta31411));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31410(rf,null));
});

net.cgrand.xforms.key_SINGLEQUOTE_ = (function net$cgrand$xforms$key_SINGLEQUOTE_(kv){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kv,(0));
});

net.cgrand.xforms.val_SINGLEQUOTE_ = (function net$cgrand$xforms$val_SINGLEQUOTE_(kv){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kv,(1));
});

/**
 * The noop reducing function
 */
net.cgrand.xforms.nop_rf = (function net$cgrand$xforms$nop_rf(var_args){
var G__31423 = arguments.length;
switch (G__31423) {
case 1:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
});

net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$2 = (function (acc,_){
return acc;
});

net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$3 = (function (acc,_,___$1){
return acc;
});

net.cgrand.xforms.nop_rf.cljs$lang$maxFixedArity = 3;


/**
 * Returns a multiplexable reducing function (doesn't init or complete the uderlying rf, wraps reduced -- like preserving-reduced)
 */
net.cgrand.xforms.multiplexable = (function net$cgrand$xforms$multiplexable(rf){
var rf__$1 = net.cgrand.xforms.ensure_kvrf(rf);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31425 = (function (rf,meta31426){
this.rf = rf;
this.meta31426 = meta31426;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf__$1){
return (function (_31427,meta31426__$1){
var self__ = this;
var _31427__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31425(self__.rf,meta31426__$1));
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf__$1){
return (function (_31427){
var self__ = this;
var _31427__$1 = this;
return self__.meta31426;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf__$1){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.call = ((function (rf__$1){
return (function() {
var G__31994 = null;
var G__31994__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31424 = self____$1;
return null;
});
var G__31994__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31424 = self____$1;
return acc;
});
var G__31994__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _31424 = self____$1;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});
var G__31994__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _31424 = self____$1;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$3 ? self__.rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : self__.rf.call(null,acc,k,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});
G__31994 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__31994__1.call(this,self__);
case 2:
return G__31994__2.call(this,self__,acc);
case 3:
return G__31994__3.call(this,self__,acc,k);
case 4:
return G__31994__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31994.cljs$core$IFn$_invoke$arity$1 = G__31994__1;
G__31994.cljs$core$IFn$_invoke$arity$2 = G__31994__2;
G__31994.cljs$core$IFn$_invoke$arity$3 = G__31994__3;
G__31994.cljs$core$IFn$_invoke$arity$4 = G__31994__4;
return G__31994;
})()
;})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.apply = ((function (rf__$1){
return (function (self__,args31428){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31428)));
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf__$1){
return (function (){
var self__ = this;
var _31424 = this;
return null;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf__$1){
return (function (acc){
var self__ = this;
var _31424 = this;
return acc;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf__$1){
return (function (acc,x){
var self__ = this;
var _31424 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf__$1){
return (function (acc,k,v){
var self__ = this;
var _31424 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$3 ? self__.rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : self__.rf.call(null,acc,k,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.getBasis = ((function (rf__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta31426","meta31426",2094766588,null)], null);
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31425.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31425.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31425";

net.cgrand.xforms.t_net$cgrand$xforms31425.cljs$lang$ctorPrWriter = ((function (rf__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31425");
});})(rf__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31425.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31425 = ((function (rf__$1){
return (function net$cgrand$xforms$multiplexable_$___GT_t_net$cgrand$xforms31425(rf__$2,meta31426){
return (new net.cgrand.xforms.t_net$cgrand$xforms31425(rf__$2,meta31426));
});})(rf__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31425(rf__$1,null));
});

/**
 * Returns a transducer which partitions items according to kfn.
 * It applies the transform specified by xform to each partition.
 * Partitions contain the "value part" (as returned by vfn) of each item.
 * The resulting transformed items are wrapped back into a "pair" using the pair function.
 * Default values for kfn, vfn and pair are first, second (or identity if kfn is specified) and vector.
 */
net.cgrand.xforms.by_key = (function net$cgrand$xforms$by_key(var_args){
var G__31430 = arguments.length;
switch (G__31430) {
case 1:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(null,null,cljs.core.vector,xform);
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2 = (function (kfn,xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(kfn,cljs.core.identity,cljs.core.vector,xform);
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$3 = (function (kfn,vfn,xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(kfn,vfn,cljs.core.vector,xform);
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4 = (function (kfn,vfn,pair,xform){
var pair__$1 = (((cljs.core.vector === pair))?new cljs.core.Keyword("net.cgrand.xforms","default","net.cgrand.xforms/default",-729285165):pair);
return ((function (pair__$1){
return (function (rf){
var mrf = net.cgrand.xforms.multiplexable(rf);
var make_rf = (((pair__$1 == null))?cljs.core.constantly(mrf):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("net.cgrand.xforms","default","net.cgrand.xforms/default",-729285165),pair__$1))?((function (mrf,pair__$1){
return (function (k){
return ((function (mrf,pair__$1){
return (function() {
var G__32023 = null;
var G__32023__1 = (function (acc){
return acc;
});
var G__32023__2 = (function (acc,v){
return (mrf.cljs$core$IFn$_invoke$arity$3 ? mrf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : mrf.call(null,acc,k,v));
});
G__32023 = function(acc,v){
switch(arguments.length){
case 1:
return G__32023__1.call(this,acc);
case 2:
return G__32023__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32023.cljs$core$IFn$_invoke$arity$1 = G__32023__1;
G__32023.cljs$core$IFn$_invoke$arity$2 = G__32023__2;
return G__32023;
})()
;})(mrf,pair__$1))
});})(mrf,pair__$1))
:((function (mrf,pair__$1){
return (function (k){
return ((function (mrf,pair__$1){
return (function() {
var G__32024 = null;
var G__32024__1 = (function (acc){
return acc;
});
var G__32024__2 = (function (acc,v){
var G__31431 = acc;
var G__31432 = (pair__$1.cljs$core$IFn$_invoke$arity$2 ? pair__$1.cljs$core$IFn$_invoke$arity$2(k,v) : pair__$1.call(null,k,v));
return (mrf.cljs$core$IFn$_invoke$arity$2 ? mrf.cljs$core$IFn$_invoke$arity$2(G__31431,G__31432) : mrf.call(null,G__31431,G__31432));
});
G__32024 = function(acc,v){
switch(arguments.length){
case 1:
return G__32024__1.call(this,acc);
case 2:
return G__32024__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32024.cljs$core$IFn$_invoke$arity$1 = G__32024__1;
G__32024.cljs$core$IFn$_invoke$arity$2 = G__32024__2;
return G__32024;
})()
;})(mrf,pair__$1))
});})(mrf,pair__$1))

));
var m = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
if((((kfn == null)) && ((vfn == null)))){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31433 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta31434){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta31434 = meta31434;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mrf,make_rf,m,pair__$1){
return (function (_31435,meta31434__$1){
var self__ = this;
var _31435__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31433(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta31434__$1));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (_31435){
var self__ = this;
var _31435__$1 = this;
return self__.meta31434;
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.call = ((function (mrf,make_rf,m,pair__$1){
return (function() {
var G__32027 = null;
var G__32027__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__32027__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var v__30880__auto__ = cljs.core.deref(self__.m);
if((v__30880__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__30880__auto__;
var G__31444 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__30880__auto__,self,self____$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__30880__auto__,self,self____$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31444) : self__.rf.call(null,G__31444));
}
});
var G__32027__3 = (function (self__,acc,p__31437){
var self__ = this;
var vec__31438 = p__31437;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31438,(1),null);
var self____$1 = this;
var self = self____$1;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31441 = (function (){var G__31442 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31442) : self__.xform.call(null,G__31442));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31441));

return G__31441;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31443 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31443) : krf.call(null,G__31443));
}
} else {
return acc__$1;
}
});
var G__32027__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31445 = (function (){var G__31446 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31446) : self__.xform.call(null,G__31446));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31445));

return G__31445;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31447 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31447) : krf.call(null,G__31447));
}
} else {
return acc__$1;
}
});
G__32027 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__32027__1.call(this,self__);
case 2:
return G__32027__2.call(this,self__,acc);
case 3:
return G__32027__3.call(this,self__,acc,k);
case 4:
return G__32027__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32027.cljs$core$IFn$_invoke$arity$1 = G__32027__1;
G__32027.cljs$core$IFn$_invoke$arity$2 = G__32027__2;
G__32027.cljs$core$IFn$_invoke$arity$3 = G__32027__3;
G__32027.cljs$core$IFn$_invoke$arity$4 = G__32027__4;
return G__32027;
})()
;})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.apply = ((function (mrf,make_rf,m,pair__$1){
return (function (self__,args31436){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31436)));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc,p__31448){
var self__ = this;
var vec__31449 = p__31448;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(1),null);
var self = this;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31452 = (function (){var G__31453 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31453) : self__.xform.call(null,G__31453));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31452));

return G__31452;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31454 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31454) : krf.call(null,G__31454));
}
} else {
return acc__$1;
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (mrf,make_rf,m,pair__$1){
return (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc){
var self__ = this;
var self = this;
var v__30880__auto__ = cljs.core.deref(self__.m);
if((v__30880__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__30880__auto__;
var G__31455 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__30880__auto__,self,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__30880__auto__,self,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31455) : self__.rf.call(null,G__31455));
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc,k,v){
var self__ = this;
var self = this;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31456 = (function (){var G__31457 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31457) : self__.xform.call(null,G__31457));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31456));

return G__31456;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31458 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31458) : krf.call(null,G__31458));
}
} else {
return acc__$1;
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.getBasis = ((function (mrf,make_rf,m,pair__$1){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta31434","meta31434",423844165,null)], null);
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31433.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31433.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31433";

net.cgrand.xforms.t_net$cgrand$xforms31433.cljs$lang$ctorPrWriter = ((function (mrf,make_rf,m,pair__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31433");
});})(mrf,make_rf,m,pair__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31433.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31433 = ((function (mrf,make_rf,m,pair__$1){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms31433(kfn__$1,vfn__$1,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta31434){
return (new net.cgrand.xforms.t_net$cgrand$xforms31433(kfn__$1,vfn__$1,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta31434));
});})(mrf,make_rf,m,pair__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31433(kfn,vfn,pair__$1,xform,rf,mrf,make_rf,m,null));
} else {
var kfn__$1 = (function (){var or__4047__auto__ = kfn;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return net.cgrand.xforms.key_SINGLEQUOTE_;
}
})();
var vfn__$1 = (function (){var or__4047__auto__ = vfn;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return net.cgrand.xforms.val_SINGLEQUOTE_;
}
})();
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31459 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta31460){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta31460 = meta31460;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (_31461,meta31460__$1){
var self__ = this;
var _31461__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31459(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta31460__$1));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (_31461){
var self__ = this;
var _31461__$1 = this;
return self__.meta31460;
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.call = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function() {
var G__32040 = null;
var G__32040__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__32040__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var v__30880__auto__ = cljs.core.deref(self__.m);
if((v__30880__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__30880__auto__;
var G__31468 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__30880__auto__,self,self____$1,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__30880__auto__,self,self____$1,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31468) : self__.rf.call(null,G__31468));
}
});
var G__32040__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31469 = (function (){var G__31470 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31470) : self__.xform.call(null,G__31470));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31469));

return G__31469;
}
})();
var acc__$1 = (function (){var G__31471 = acc;
var G__31472 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__31471,G__31472) : krf.call(null,G__31471,G__31472));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31473 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31473) : krf.call(null,G__31473));
}
} else {
return acc__$1;
}
});
var G__32040__4 = (function (self__,acc,k__30877__auto__,v__30878__auto__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31463 = (function (){var G__31464 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31464) : self__.xform.call(null,G__31464));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31463));

return G__31463;
}
})();
var acc__$1 = (function (){var G__31465 = acc;
var G__31466 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__31465,G__31466) : krf.call(null,G__31465,G__31466));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31467 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31467) : krf.call(null,G__31467));
}
} else {
return acc__$1;
}
});
G__32040 = function(self__,acc,k__30877__auto__,v__30878__auto__){
switch(arguments.length){
case 1:
return G__32040__1.call(this,self__);
case 2:
return G__32040__2.call(this,self__,acc);
case 3:
return G__32040__3.call(this,self__,acc,k__30877__auto__);
case 4:
return G__32040__4.call(this,self__,acc,k__30877__auto__,v__30878__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32040.cljs$core$IFn$_invoke$arity$1 = G__32040__1;
G__32040.cljs$core$IFn$_invoke$arity$2 = G__32040__2;
G__32040.cljs$core$IFn$_invoke$arity$3 = G__32040__3;
G__32040.cljs$core$IFn$_invoke$arity$4 = G__32040__4;
return G__32040;
})()
;})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.apply = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (self__,args31462){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31462)));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc,k__30877__auto__,v__30878__auto__){
var self__ = this;
var self = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31474 = (function (){var G__31475 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31475) : self__.xform.call(null,G__31475));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31474));

return G__31474;
}
})();
var acc__$1 = (function (){var G__31476 = acc;
var G__31477 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__31476,G__31477) : krf.call(null,G__31476,G__31477));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31478 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31478) : krf.call(null,G__31478));
}
} else {
return acc__$1;
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc){
var self__ = this;
var self = this;
var v__30880__auto__ = cljs.core.deref(self__.m);
if((v__30880__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__30880__auto__;
var G__31479 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__30880__auto__,self,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__30880__auto__,self,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31479) : self__.rf.call(null,G__31479));
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc,x){
var self__ = this;
var self = this;
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__31480 = (function (){var G__31481 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__31481) : self__.xform.call(null,G__31481));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__31480));

return G__31480;
}
})();
var acc__$1 = (function (){var G__31482 = acc;
var G__31483 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__31482,G__31483) : krf.call(null,G__31482,G__31483));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__31484 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__31484) : krf.call(null,G__31484));
}
} else {
return acc__$1;
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.getBasis = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta31460","meta31460",175631367,null)], null);
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms31459.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31459.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31459";

net.cgrand.xforms.t_net$cgrand$xforms31459.cljs$lang$ctorPrWriter = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31459");
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31459.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31459 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms31459(kfn__$2,vfn__$2,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta31460){
return (new net.cgrand.xforms.t_net$cgrand$xforms31459(kfn__$2,vfn__$2,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta31460));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31459(kfn__$1,vfn__$1,pair__$1,xform,rf,mrf,make_rf,m,null));
}
});
;})(pair__$1))
});

net.cgrand.xforms.by_key.cljs$lang$maxFixedArity = 4;


/**
 * A shorthand for the common case (comp (x/by-key ...) (x/into coll)).
 */
net.cgrand.xforms.into_by_key = (function net$cgrand$xforms$into_by_key(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32041 = arguments.length;
var i__4642__auto___32042 = (0);
while(true){
if((i__4642__auto___32042 < len__4641__auto___32041)){
args__4647__auto__.push((arguments[i__4642__auto___32042]));

var G__32043 = (i__4642__auto___32042 + (1));
i__4642__auto___32042 = G__32043;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return net.cgrand.xforms.into_by_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

net.cgrand.xforms.into_by_key.cljs$core$IFn$_invoke$arity$variadic = (function (coll,by_key_args){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.by_key,by_key_args),net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(coll));
});

net.cgrand.xforms.into_by_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
net.cgrand.xforms.into_by_key.cljs$lang$applyTo = (function (seq31485){
var G__31486 = cljs.core.first(seq31485);
var seq31485__$1 = cljs.core.next(seq31485);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31486,seq31485__$1);
});


/**
 * Returns a partitioning transducer. Each partition is independently transformed using the xform transducer.
 */
net.cgrand.xforms.partition = (function net$cgrand$xforms$partition(var_args){
var G__31488 = arguments.length;
switch (G__31488) {
case 1:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$1 = (function (n){
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,n,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,step_or_xform){
if(cljs.core.fn_QMARK_(step_or_xform)){
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,n,step_or_xform);
} else {
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,step_or_xform,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,step,pad_or_xform){
if(cljs.core.fn_QMARK_(pad_or_xform)){
var xform = pad_or_xform;
return ((function (xform){
return (function (rf){
var mxrf = net.cgrand.xforms.multiplexable(rf);
var dq = (new goog.structs.Queue());
var barrier = cljs.core.volatile_BANG_(n);
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (mxrf,dq,barrier,xform){
return (function (p1__31317_SHARP_){
if((dq === p1__31317_SHARP_)){
return null;
} else {
return p1__31317_SHARP_;
}
});})(mxrf,dq,barrier,xform))
),xform);
return ((function (mxrf,dq,barrier,xform__$1,xform){
return (function() {
var G__32045 = null;
var G__32045__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32045__1 = (function (acc){
dq.clear();

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__32045__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__4518__auto___32046 = (function (){var x__4138__auto__ = n;
var y__4139__auto__ = step;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
var __32047 = (0);
while(true){
if((__32047 < n__4518__auto___32046)){
dq.dequeue();

var G__32048 = (__32047 + (1));
__32047 = G__32048;
continue;
} else {
}
break;
}

barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) + step));

return acc__$1;
} else {
return acc;
}
});
G__32045 = function(acc,x){
switch(arguments.length){
case 0:
return G__32045__0.call(this);
case 1:
return G__32045__1.call(this,acc);
case 2:
return G__32045__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32045.cljs$core$IFn$_invoke$arity$0 = G__32045__0;
G__32045.cljs$core$IFn$_invoke$arity$1 = G__32045__1;
G__32045.cljs$core$IFn$_invoke$arity$2 = G__32045__2;
return G__32045;
})()
;})(mxrf,dq,barrier,xform__$1,xform))
});
;})(xform))
} else {
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4(n,step,pad_or_xform,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4 = (function (n,step,pad,xform){
return (function (rf){
var mxrf = net.cgrand.xforms.multiplexable(rf);
var dq = (new goog.structs.Queue());
var barrier = cljs.core.volatile_BANG_(n);
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (mxrf,dq,barrier){
return (function (p1__31318_SHARP_){
if((dq === p1__31318_SHARP_)){
return null;
} else {
return p1__31318_SHARP_;
}
});})(mxrf,dq,barrier))
),xform);
return ((function (mxrf,dq,barrier,xform__$1){
return (function() {
var G__32049 = null;
var G__32049__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32049__1 = (function (acc){
if((cljs.core.deref(barrier) < n)){
var xform__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.cat,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),xform__$1);
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$2,rf,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dq.getValues(),pad], null));
cljs.core.vreset_BANG_(barrier,n);

dq.clear();

return acc__$1;
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}
});
var G__32049__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__4518__auto___32050 = (function (){var x__4138__auto__ = n;
var y__4139__auto__ = step;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
var __32051 = (0);
while(true){
if((__32051 < n__4518__auto___32050)){
dq.dequeue();

var G__32052 = (__32051 + (1));
__32051 = G__32052;
continue;
} else {
}
break;
}

barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) + step));

return acc__$1;
} else {
return acc;
}
});
G__32049 = function(acc,x){
switch(arguments.length){
case 0:
return G__32049__0.call(this);
case 1:
return G__32049__1.call(this,acc);
case 2:
return G__32049__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32049.cljs$core$IFn$_invoke$arity$0 = G__32049__0;
G__32049.cljs$core$IFn$_invoke$arity$1 = G__32049__1;
G__32049.cljs$core$IFn$_invoke$arity$2 = G__32049__2;
return G__32049;
})()
;})(mxrf,dq,barrier,xform__$1))
});
});

net.cgrand.xforms.partition.cljs$lang$maxFixedArity = 4;


net.cgrand.xforms.take_last = (function net$cgrand$xforms$take_last(n){
return (function (rf){
var dq = (new goog.structs.Queue());
return ((function (dq){
return (function() {
var G__32053 = null;
var G__32053__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32053__1 = (function (acc){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (dq){
return (function (p1__31319_SHARP_){
if((dq === p1__31319_SHARP_)){
return null;
} else {
return p1__31319_SHARP_;
}
});})(dq))
),rf,acc,dq.getValues());
});
var G__32053__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
dq.dequeue();
} else {
}

return acc;
});
G__32053 = function(acc,x){
switch(arguments.length){
case 0:
return G__32053__0.call(this);
case 1:
return G__32053__1.call(this,acc);
case 2:
return G__32053__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32053.cljs$core$IFn$_invoke$arity$0 = G__32053__0;
G__32053.cljs$core$IFn$_invoke$arity$1 = G__32053__1;
G__32053.cljs$core$IFn$_invoke$arity$2 = G__32053__2;
return G__32053;
})()
;})(dq))
});
});

net.cgrand.xforms.drop_last = (function net$cgrand$xforms$drop_last(var_args){
var G__31490 = arguments.length;
switch (G__31490) {
case 0:
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$0 = (function (){
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1((1));
});

net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (rf){
var dq = (new goog.structs.Queue());
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (dq){
return (function (p1__31320_SHARP_){
if((dq === p1__31320_SHARP_)){
return null;
} else {
return p1__31320_SHARP_;
}
});})(dq))
);
var rf__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf));
return ((function (dq,xform,rf__$1){
return (function() {
var G__32055 = null;
var G__32055__0 = (function (){
return (rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null));
});
var G__32055__1 = (function (acc){
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(acc) : rf__$1.call(null,acc));
});
var G__32055__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
var G__31491 = acc;
var G__31492 = dq.dequeue();
return (rf__$1.cljs$core$IFn$_invoke$arity$2 ? rf__$1.cljs$core$IFn$_invoke$arity$2(G__31491,G__31492) : rf__$1.call(null,G__31491,G__31492));
} else {
return acc;
}
});
G__32055 = function(acc,x){
switch(arguments.length){
case 0:
return G__32055__0.call(this);
case 1:
return G__32055__1.call(this,acc);
case 2:
return G__32055__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32055.cljs$core$IFn$_invoke$arity$0 = G__32055__0;
G__32055.cljs$core$IFn$_invoke$arity$1 = G__32055__1;
G__32055.cljs$core$IFn$_invoke$arity$2 = G__32055__2;
return G__32055;
})()
;})(dq,xform,rf__$1))
});
});

net.cgrand.xforms.drop_last.cljs$lang$maxFixedArity = 1;


net.cgrand.xforms.sort = (function net$cgrand$xforms$sort(var_args){
var G__31494 = arguments.length;
switch (G__31494) {
case 0:
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$0 = (function (){
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
});

net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (function (rf){
var buf = [];
return ((function (buf){
return (function() {
var G__32057 = null;
var G__32057__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32057__1 = (function (acc){
var G__31495 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,acc,(function (){var G__31496 = buf;
G__31496.sort(cmp);

return G__31496;
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__31495) : rf.call(null,G__31495));
});
var G__32057__2 = (function (acc,x){
buf.push(x);

return acc;
});
G__32057 = function(acc,x){
switch(arguments.length){
case 0:
return G__32057__0.call(this);
case 1:
return G__32057__1.call(this,acc);
case 2:
return G__32057__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32057.cljs$core$IFn$_invoke$arity$0 = G__32057__0;
G__32057.cljs$core$IFn$_invoke$arity$1 = G__32057__1;
G__32057.cljs$core$IFn$_invoke$arity$2 = G__32057__2;
return G__32057;
})()
;})(buf))
});
});

net.cgrand.xforms.sort.cljs$lang$maxFixedArity = 1;


net.cgrand.xforms.sort_by = (function net$cgrand$xforms$sort_by(var_args){
var G__31498 = arguments.length;
switch (G__31498) {
case 1:
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$1 = (function (kfn){
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2(kfn,cljs.core.compare);
});

net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2 = (function (kfn,cmp){
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1((function (a,b){
var G__31499 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(a) : kfn.call(null,a));
var G__31500 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(b) : kfn.call(null,b));
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__31499,G__31500) : cmp.call(null,G__31499,G__31500));
}));
});

net.cgrand.xforms.sort_by.cljs$lang$maxFixedArity = 2;


/**
 * Transducer version of reductions. There's a difference in behavior when init is not provided: (f) is used.
 * So x/reductions works like x/reduce or transduce, not like reduce and reductions when no init and 1-item input.
 */
net.cgrand.xforms.reductions = (function net$cgrand$xforms$reductions(var_args){
var G__31502 = arguments.length;
switch (G__31502) {
case 1:
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$1 = (function (f){
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2(f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});

net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return (function (rf){
var prev = cljs.core.volatile_BANG_(null);
cljs.core.vreset_BANG_(prev,prev);

return ((function (prev){
return (function() {
var G__32060 = null;
var G__32060__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32060__1 = (function (acc){
if((cljs.core.deref(prev) === prev)){
var G__31503 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,init) : rf.call(null,acc,init)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__31503) : rf.call(null,G__31503));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}
});
var G__32060__2 = (function (acc,x){
while(true){
if((cljs.core.deref(prev) === prev)){
var acc__$1 = (function (){var G__31504 = acc;
var G__31505 = cljs.core.vreset_BANG_(prev,init);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__31504,G__31505) : rf.call(null,G__31504,G__31505));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return acc__$1;
} else {
var G__32061 = acc__$1;
var G__32062 = x;
acc = G__32061;
x = G__32062;
continue;
}
} else {
var curr = prev.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__31506 = prev.cljs$core$IDeref$_deref$arity$1(null);
var G__31507 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31506,G__31507) : f.call(null,G__31506,G__31507));
})());
if(cljs.core.reduced_QMARK_(curr)){
return cljs.core.ensure_reduced((function (){var G__31508 = acc;
var G__31509 = cljs.core.deref(curr);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__31508,G__31509) : rf.call(null,G__31508,G__31509));
})());
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,curr) : rf.call(null,acc,curr));
}
}
break;
}
});
G__32060 = function(acc,x){
switch(arguments.length){
case 0:
return G__32060__0.call(this);
case 1:
return G__32060__1.call(this,acc);
case 2:
return G__32060__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32060.cljs$core$IFn$_invoke$arity$0 = G__32060__0;
G__32060.cljs$core$IFn$_invoke$arity$1 = G__32060__1;
G__32060.cljs$core$IFn$_invoke$arity$2 = G__32060__2;
return G__32060;
})()
;})(prev))
});
});

net.cgrand.xforms.reductions.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.avg = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.avg);

net.cgrand.xforms.sd = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.sd);

/**
 * Returns a transducer which computes an accumulator over the last n items
 * using two functions: f and its inverse invf.
 * 
 * The accumulator is initialized with (f).
 * It is updated to (f (invf acc out) in) where "acc" is the current value,
 * "in" the new item entering the window, "out" the item exiting the window.
 * The value passed to the dowstream reducing function is (f acc) enabling acc to be
 * mutable and 1-arity f to project its state to a value.
 * 
 * If you don't want to see the accumulator until the window is full then you need to
 * use (drop (dec n)) to remove them.
 * 
 * If you don't have an inverse function, consider using partition and reduce: 
 * (x/partition 4 (x/reduce rf))
 */
net.cgrand.xforms.window = (function net$cgrand$xforms$window(n,f,invf){
return (function (rf){
var ring = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n);
var vi = cljs.core.volatile_BANG_((- n));
var vwacc = cljs.core.volatile_BANG_((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
return ((function (ring,vi,vwacc){
return (function() {
var G__32063 = null;
var G__32063__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32063__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__32063__2 = (function (acc,x){
var i = cljs.core.deref(vi);
var wacc = cljs.core.deref(vwacc);
if((i < (0))){
(ring[(n + i)] = x);

cljs.core.vreset_BANG_(vi,(i + (1)));

var G__31510 = acc;
var G__31511 = (function (){var G__31512 = cljs.core.vreset_BANG_(vwacc,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(wacc,x) : f.call(null,wacc,x)));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31512) : f.call(null,G__31512));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__31510,G__31511) : rf.call(null,G__31510,G__31511));
} else {
var x_SINGLEQUOTE_ = (ring[i]);
(ring[i] = x);

cljs.core.vreset_BANG_(vi,(function (){var i__$1 = (i + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1)){
return (0);
} else {
return i__$1;
}
})());

var G__31513 = acc;
var G__31514 = (function (){var G__31515 = cljs.core.vreset_BANG_(vwacc,(function (){var G__31516 = (invf.cljs$core$IFn$_invoke$arity$2 ? invf.cljs$core$IFn$_invoke$arity$2(wacc,x_SINGLEQUOTE_) : invf.call(null,wacc,x_SINGLEQUOTE_));
var G__31517 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31516,G__31517) : f.call(null,G__31516,G__31517));
})());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31515) : f.call(null,G__31515));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__31513,G__31514) : rf.call(null,G__31513,G__31514));
}
});
G__32063 = function(acc,x){
switch(arguments.length){
case 0:
return G__32063__0.call(this);
case 1:
return G__32063__1.call(this,acc);
case 2:
return G__32063__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32063.cljs$core$IFn$_invoke$arity$0 = G__32063__0;
G__32063.cljs$core$IFn$_invoke$arity$1 = G__32063__1;
G__32063.cljs$core$IFn$_invoke$arity$2 = G__32063__2;
return G__32063;
})()
;})(ring,vi,vwacc))
});
});

/**
 * Count the number of items. Either used directly as a transducer or invoked with two args
 * as a transducing context.
 */
net.cgrand.xforms.count = (function net$cgrand$xforms$count(var_args){
var G__31519 = arguments.length;
switch (G__31519) {
case 1:
return net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$1 = (function (rf){
var n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (n){
return (function() {
var G__32065 = null;
var G__32065__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32065__1 = (function (acc){
var G__31520 = cljs.core.unreduced((function (){var G__31521 = acc;
var G__31522 = cljs.core.deref(n);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__31521,G__31522) : rf.call(null,G__31521,G__31522));
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__31520) : rf.call(null,G__31520));
});
var G__32065__2 = (function (acc,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc);

return acc;
});
G__32065 = function(acc,_){
switch(arguments.length){
case 0:
return G__32065__0.call(this);
case 1:
return G__32065__1.call(this,acc);
case 2:
return G__32065__2.call(this,acc,_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32065.cljs$core$IFn$_invoke$arity$0 = G__32065__0;
G__32065.cljs$core$IFn$_invoke$arity$1 = G__32065__1;
G__32065.cljs$core$IFn$_invoke$arity$2 = G__32065__2;
return G__32065;
})()
;})(n))
});

net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,net.cgrand.xforms.count),net.cgrand.xforms.rfs.last,coll);
});

net.cgrand.xforms.count.cljs$lang$maxFixedArity = 2;


/**
 * Returns a transducer that runs several transducers (sepcified by xforms) in parallel.
 * If xforms is a map, values of the map are transducers and keys are used to tag each
 * transducer output:
 * => (into [] (x/multiplex [(map inc) (map dec)]) (range 3))
 * [1 -1 2 0 3 1] ; no map, no tag
 * => (into [] (x/multiplex {:up (map inc) :down (map dec)}) (range 3))
 * [[:up 1] [:down -1] [:up 2] [:down 0] [:up 3] [:down 1]]
 */
net.cgrand.xforms.multiplex = (function net$cgrand$xforms$multiplex(xforms){
return (function (rf){
var mrf = net.cgrand.xforms.multiplexable(net.cgrand.xforms.ensure_kvrf(rf));
var rfs = cljs.core.volatile_BANG_(((cljs.core.map_QMARK_(xforms))?net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,((function (mrf){
return (function (rf31523){
var rf31523__$1 = net.cgrand.xforms.ensure_kvrf(rf31523);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31526 = (function (xforms,rf,mrf,rf31523,meta31527){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rf31523 = rf31523;
this.meta31527 = meta31527;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf31523__$1,mrf){
return (function (_31528,meta31527__$1){
var self__ = this;
var _31528__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31526(self__.xforms,self__.rf,self__.mrf,self__.rf31523,meta31527__$1));
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf31523__$1,mrf){
return (function (_31528){
var self__ = this;
var _31528__$1 = this;
return self__.meta31527;
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf31523__$1,mrf){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.call = ((function (rf31523__$1,mrf){
return (function() {
var G__32066 = null;
var G__32066__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31525 = self____$1;
return (self__.rf31523.cljs$core$IFn$_invoke$arity$0 ? self__.rf31523.cljs$core$IFn$_invoke$arity$0() : self__.rf31523.call(null));
});
var G__32066__2 = (function (self__,acc31524){
var self__ = this;
var self____$1 = this;
var _31525 = self____$1;
return (self__.rf31523.cljs$core$IFn$_invoke$arity$1 ? self__.rf31523.cljs$core$IFn$_invoke$arity$1(acc31524) : self__.rf31523.call(null,acc31524));
});
var G__32066__3 = (function (self__,acc31524,p__31530){
var self__ = this;
var vec__31541 = p__31530;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31541,(0),null);
var xform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31541,(1),null);
var self____$1 = this;
var _31525 = self____$1;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (rf31544){
var rf31544__$1 = net.cgrand.xforms.ensure_kvrf(rf31544);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31547 = (function (self__,vec__31541,meta31527,mrf,xform,_31525,rf,p__31530,rf31523,k,rf31544,xforms,acc31524,meta31548){
this.self__ = self__;
this.vec__31541 = vec__31541;
this.meta31527 = meta31527;
this.mrf = mrf;
this.xform = xform;
this._31525 = _31525;
this.rf = rf;
this.p__31530 = p__31530;
this.rf31523 = rf31523;
this.k = k;
this.rf31544 = rf31544;
this.xforms = xforms;
this.acc31524 = acc31524;
this.meta31548 = meta31548;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (_31549,meta31548__$1){
var self__ = this;
var _31549__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31547(self__.self__,self__.vec__31541,self__.meta31527,self__.mrf,self__.xform,self__._31525,self__.rf,self__.p__31530,self__.rf31523,self__.k,self__.rf31544,self__.xforms,self__.acc31524,meta31548__$1));
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (_31549){
var self__ = this;
var _31549__$1 = this;
return self__.meta31548;
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.call = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function() {
var G__32067 = null;
var G__32067__1 = (function (self____$1){
var self__ = this;
var self____$2 = this;
var _31546 = self____$2;
return (self__.rf31544.cljs$core$IFn$_invoke$arity$0 ? self__.rf31544.cljs$core$IFn$_invoke$arity$0() : self__.rf31544.call(null));
});
var G__32067__2 = (function (self____$1,acc31545){
var self__ = this;
var self____$2 = this;
var _31546 = self____$2;
return (self__.rf31544.cljs$core$IFn$_invoke$arity$1 ? self__.rf31544.cljs$core$IFn$_invoke$arity$1(acc31545) : self__.rf31544.call(null,acc31545));
});
var G__32067__3 = (function (self____$1,acc31545,x){
var self__ = this;
var self____$2 = this;
var _31546 = self____$2;
var acc__30876__auto__ = (self__.rf31544.cljs$core$IFn$_invoke$arity$3 ? self__.rf31544.cljs$core$IFn$_invoke$arity$3(acc31545,self__.k,x) : self__.rf31544.call(null,acc31545,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
var G__32067__4 = (function (self____$1,acc31545,k__30877__auto__,v__30878__auto__){
var self__ = this;
var self____$2 = this;
var _31546 = self____$2;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31544.cljs$core$IFn$_invoke$arity$3 ? self__.rf31544.cljs$core$IFn$_invoke$arity$3(acc31545,self__.k,x) : self__.rf31544.call(null,acc31545,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
G__32067 = function(self____$1,acc31545,k__30877__auto__,v__30878__auto__){
switch(arguments.length){
case 1:
return G__32067__1.call(this,self____$1);
case 2:
return G__32067__2.call(this,self____$1,acc31545);
case 3:
return G__32067__3.call(this,self____$1,acc31545,k__30877__auto__);
case 4:
return G__32067__4.call(this,self____$1,acc31545,k__30877__auto__,v__30878__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32067.cljs$core$IFn$_invoke$arity$1 = G__32067__1;
G__32067.cljs$core$IFn$_invoke$arity$2 = G__32067__2;
G__32067.cljs$core$IFn$_invoke$arity$3 = G__32067__3;
G__32067.cljs$core$IFn$_invoke$arity$4 = G__32067__4;
return G__32067;
})()
;})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.apply = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (self____$1,args31550){
var self__ = this;
var self____$2 = this;
return self____$2.call.apply(self____$2,[self____$2].concat(cljs.core.aclone(args31550)));
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (acc31545,k__30877__auto__,v__30878__auto__){
var self__ = this;
var _31546 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31544.cljs$core$IFn$_invoke$arity$3 ? self__.rf31544.cljs$core$IFn$_invoke$arity$3(acc31545,self__.k,x) : self__.rf31544.call(null,acc31545,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (){
var self__ = this;
var _31546 = this;
return (self__.rf31544.cljs$core$IFn$_invoke$arity$0 ? self__.rf31544.cljs$core$IFn$_invoke$arity$0() : self__.rf31544.call(null));
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (acc31545){
var self__ = this;
var _31546 = this;
return (self__.rf31544.cljs$core$IFn$_invoke$arity$1 ? self__.rf31544.cljs$core$IFn$_invoke$arity$1(acc31545) : self__.rf31544.call(null,acc31545));
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (acc31545,x){
var self__ = this;
var _31546 = this;
var acc__30876__auto__ = (self__.rf31544.cljs$core$IFn$_invoke$arity$3 ? self__.rf31544.cljs$core$IFn$_invoke$arity$3(acc31545,self__.k,x) : self__.rf31544.call(null,acc31545,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.getBasis = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms31526","net.cgrand.xforms/t_net$cgrand$xforms31526",225624862,null)], null)),new cljs.core.Symbol(null,"vec__31541","vec__31541",-2013863423,null),new cljs.core.Symbol(null,"meta31527","meta31527",154095749,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"_31525","_31525",-1458403353,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"p__31530","p__31530",-901170322,null),new cljs.core.Symbol(null,"rf31523","rf31523",-316041168,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"rf31544","rf31544",-754029446,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"acc31524","acc31524",-1801115522,null),new cljs.core.Symbol(null,"meta31548","meta31548",-785129629,null)], null);
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31547.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31547.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31547";

net.cgrand.xforms.t_net$cgrand$xforms31547.cljs$lang$ctorPrWriter = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31547");
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31547.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31547 = ((function (rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms31547(self____$2,vec__31541__$1,meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf__$1,p__31530__$1,rf31523__$1,k__$1,rf31544__$2,xforms__$1,acc31524__$1,meta31548){
return (new net.cgrand.xforms.t_net$cgrand$xforms31547(self____$2,vec__31541__$1,meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf__$1,p__31530__$1,rf31523__$1,k__$1,rf31544__$2,xforms__$1,acc31524__$1,meta31548));
});})(rf31544__$1,_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31547(self____$1,vec__31541,self__.meta31527,self__.mrf,xform,_31525,self__.rf,p__31530,self__.rf31523,k,rf31544__$1,self__.xforms,acc31524,null));
});})(_31525,self____$1,vec__31541,k,xform,rf31523__$1,mrf))
);
var acc__30876__auto__ = (function (){var G__31551 = acc31524;
var G__31552 = k;
var G__31553 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf31523.cljs$core$IFn$_invoke$arity$3 ? self__.rf31523.cljs$core$IFn$_invoke$arity$3(G__31551,G__31552,G__31553) : self__.rf31523.call(null,G__31551,G__31552,G__31553));
})();
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
var G__32066__4 = (function (self__,acc31524,k,xform){
var self__ = this;
var self____$1 = this;
var _31525 = self____$1;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_31525,self____$1,rf31523__$1,mrf){
return (function (rf31531){
var rf31531__$1 = net.cgrand.xforms.ensure_kvrf(rf31531);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31534 = (function (self__,meta31527,mrf,xform,_31525,rf,rf31523,k,xforms,rf31531,acc31524,meta31535){
this.self__ = self__;
this.meta31527 = meta31527;
this.mrf = mrf;
this.xform = xform;
this._31525 = _31525;
this.rf = rf;
this.rf31523 = rf31523;
this.k = k;
this.xforms = xforms;
this.rf31531 = rf31531;
this.acc31524 = acc31524;
this.meta31535 = meta31535;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (_31536,meta31535__$1){
var self__ = this;
var _31536__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31534(self__.self__,self__.meta31527,self__.mrf,self__.xform,self__._31525,self__.rf,self__.rf31523,self__.k,self__.xforms,self__.rf31531,self__.acc31524,meta31535__$1));
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (_31536){
var self__ = this;
var _31536__$1 = this;
return self__.meta31535;
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.call = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function() {
var G__32068 = null;
var G__32068__1 = (function (self____$1){
var self__ = this;
var self____$2 = this;
var _31533 = self____$2;
return (self__.rf31531.cljs$core$IFn$_invoke$arity$0 ? self__.rf31531.cljs$core$IFn$_invoke$arity$0() : self__.rf31531.call(null));
});
var G__32068__2 = (function (self____$1,acc31532){
var self__ = this;
var self____$2 = this;
var _31533 = self____$2;
return (self__.rf31531.cljs$core$IFn$_invoke$arity$1 ? self__.rf31531.cljs$core$IFn$_invoke$arity$1(acc31532) : self__.rf31531.call(null,acc31532));
});
var G__32068__3 = (function (self____$1,acc31532,x){
var self__ = this;
var self____$2 = this;
var _31533 = self____$2;
var acc__30876__auto__ = (self__.rf31531.cljs$core$IFn$_invoke$arity$3 ? self__.rf31531.cljs$core$IFn$_invoke$arity$3(acc31532,self__.k,x) : self__.rf31531.call(null,acc31532,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
var G__32068__4 = (function (self____$1,acc31532,k__30877__auto__,v__30878__auto__){
var self__ = this;
var self____$2 = this;
var _31533 = self____$2;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31531.cljs$core$IFn$_invoke$arity$3 ? self__.rf31531.cljs$core$IFn$_invoke$arity$3(acc31532,self__.k,x) : self__.rf31531.call(null,acc31532,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
G__32068 = function(self____$1,acc31532,k__30877__auto__,v__30878__auto__){
switch(arguments.length){
case 1:
return G__32068__1.call(this,self____$1);
case 2:
return G__32068__2.call(this,self____$1,acc31532);
case 3:
return G__32068__3.call(this,self____$1,acc31532,k__30877__auto__);
case 4:
return G__32068__4.call(this,self____$1,acc31532,k__30877__auto__,v__30878__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32068.cljs$core$IFn$_invoke$arity$1 = G__32068__1;
G__32068.cljs$core$IFn$_invoke$arity$2 = G__32068__2;
G__32068.cljs$core$IFn$_invoke$arity$3 = G__32068__3;
G__32068.cljs$core$IFn$_invoke$arity$4 = G__32068__4;
return G__32068;
})()
;})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.apply = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (self____$1,args31537){
var self__ = this;
var self____$2 = this;
return self____$2.call.apply(self____$2,[self____$2].concat(cljs.core.aclone(args31537)));
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (acc31532,k__30877__auto__,v__30878__auto__){
var self__ = this;
var _31533 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31531.cljs$core$IFn$_invoke$arity$3 ? self__.rf31531.cljs$core$IFn$_invoke$arity$3(acc31532,self__.k,x) : self__.rf31531.call(null,acc31532,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (){
var self__ = this;
var _31533 = this;
return (self__.rf31531.cljs$core$IFn$_invoke$arity$0 ? self__.rf31531.cljs$core$IFn$_invoke$arity$0() : self__.rf31531.call(null));
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (acc31532){
var self__ = this;
var _31533 = this;
return (self__.rf31531.cljs$core$IFn$_invoke$arity$1 ? self__.rf31531.cljs$core$IFn$_invoke$arity$1(acc31532) : self__.rf31531.call(null,acc31532));
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (acc31532,x){
var self__ = this;
var _31533 = this;
var acc__30876__auto__ = (self__.rf31531.cljs$core$IFn$_invoke$arity$3 ? self__.rf31531.cljs$core$IFn$_invoke$arity$3(acc31532,self__.k,x) : self__.rf31531.call(null,acc31532,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.getBasis = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms31526","net.cgrand.xforms/t_net$cgrand$xforms31526",225624862,null)], null)),new cljs.core.Symbol(null,"meta31527","meta31527",154095749,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"_31525","_31525",-1458403353,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"rf31523","rf31523",-316041168,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf31531","rf31531",170230204,null),new cljs.core.Symbol(null,"acc31524","acc31524",-1801115522,null),new cljs.core.Symbol(null,"meta31535","meta31535",-189813839,null)], null);
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31534.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31534.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31534";

net.cgrand.xforms.t_net$cgrand$xforms31534.cljs$lang$ctorPrWriter = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31534");
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31534.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31534 = ((function (rf31531__$1,_31525,self____$1,rf31523__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms31534(self____$2,meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf__$1,rf31523__$1,k__$1,xforms__$1,rf31531__$2,acc31524__$1,meta31535){
return (new net.cgrand.xforms.t_net$cgrand$xforms31534(self____$2,meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf__$1,rf31523__$1,k__$1,xforms__$1,rf31531__$2,acc31524__$1,meta31535));
});})(rf31531__$1,_31525,self____$1,rf31523__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31534(self____$1,self__.meta31527,self__.mrf,xform,_31525,self__.rf,self__.rf31523,k,self__.xforms,rf31531__$1,acc31524,null));
});})(_31525,self____$1,rf31523__$1,mrf))
);
var acc__30876__auto__ = (function (){var G__31538 = acc31524;
var G__31539 = k;
var G__31540 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf31523.cljs$core$IFn$_invoke$arity$3 ? self__.rf31523.cljs$core$IFn$_invoke$arity$3(G__31538,G__31539,G__31540) : self__.rf31523.call(null,G__31538,G__31539,G__31540));
})();
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
G__32066 = function(self__,acc31524,k,xform){
switch(arguments.length){
case 1:
return G__32066__1.call(this,self__);
case 2:
return G__32066__2.call(this,self__,acc31524);
case 3:
return G__32066__3.call(this,self__,acc31524,k);
case 4:
return G__32066__4.call(this,self__,acc31524,k,xform);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32066.cljs$core$IFn$_invoke$arity$1 = G__32066__1;
G__32066.cljs$core$IFn$_invoke$arity$2 = G__32066__2;
G__32066.cljs$core$IFn$_invoke$arity$3 = G__32066__3;
G__32066.cljs$core$IFn$_invoke$arity$4 = G__32066__4;
return G__32066;
})()
;})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.apply = ((function (rf31523__$1,mrf){
return (function (self__,args31529){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31529)));
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf31523__$1,mrf){
return (function (acc31524,k,xform){
var self__ = this;
var _31525 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_31525,rf31523__$1,mrf){
return (function (rf31554){
var rf31554__$1 = net.cgrand.xforms.ensure_kvrf(rf31554);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31557 = (function (meta31527,mrf,xform,_31525,rf31554,rf,rf31523,k,xforms,acc31524,meta31558){
this.meta31527 = meta31527;
this.mrf = mrf;
this.xform = xform;
this._31525 = _31525;
this.rf31554 = rf31554;
this.rf = rf;
this.rf31523 = rf31523;
this.k = k;
this.xforms = xforms;
this.acc31524 = acc31524;
this.meta31558 = meta31558;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (_31559,meta31558__$1){
var self__ = this;
var _31559__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31557(self__.meta31527,self__.mrf,self__.xform,self__._31525,self__.rf31554,self__.rf,self__.rf31523,self__.k,self__.xforms,self__.acc31524,meta31558__$1));
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (_31559){
var self__ = this;
var _31559__$1 = this;
return self__.meta31558;
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.call = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function() {
var G__32069 = null;
var G__32069__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31556 = self____$1;
return (self__.rf31554.cljs$core$IFn$_invoke$arity$0 ? self__.rf31554.cljs$core$IFn$_invoke$arity$0() : self__.rf31554.call(null));
});
var G__32069__2 = (function (self__,acc31555){
var self__ = this;
var self____$1 = this;
var _31556 = self____$1;
return (self__.rf31554.cljs$core$IFn$_invoke$arity$1 ? self__.rf31554.cljs$core$IFn$_invoke$arity$1(acc31555) : self__.rf31554.call(null,acc31555));
});
var G__32069__3 = (function (self__,acc31555,x){
var self__ = this;
var self____$1 = this;
var _31556 = self____$1;
var acc__30876__auto__ = (self__.rf31554.cljs$core$IFn$_invoke$arity$3 ? self__.rf31554.cljs$core$IFn$_invoke$arity$3(acc31555,self__.k,x) : self__.rf31554.call(null,acc31555,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
var G__32069__4 = (function (self__,acc31555,k__30877__auto__,v__30878__auto__){
var self__ = this;
var self____$1 = this;
var _31556 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31554.cljs$core$IFn$_invoke$arity$3 ? self__.rf31554.cljs$core$IFn$_invoke$arity$3(acc31555,self__.k,x) : self__.rf31554.call(null,acc31555,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
G__32069 = function(self__,acc31555,k__30877__auto__,v__30878__auto__){
switch(arguments.length){
case 1:
return G__32069__1.call(this,self__);
case 2:
return G__32069__2.call(this,self__,acc31555);
case 3:
return G__32069__3.call(this,self__,acc31555,k__30877__auto__);
case 4:
return G__32069__4.call(this,self__,acc31555,k__30877__auto__,v__30878__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32069.cljs$core$IFn$_invoke$arity$1 = G__32069__1;
G__32069.cljs$core$IFn$_invoke$arity$2 = G__32069__2;
G__32069.cljs$core$IFn$_invoke$arity$3 = G__32069__3;
G__32069.cljs$core$IFn$_invoke$arity$4 = G__32069__4;
return G__32069;
})()
;})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.apply = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (self__,args31560){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31560)));
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (acc31555,k__30877__auto__,v__30878__auto__){
var self__ = this;
var _31556 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31554.cljs$core$IFn$_invoke$arity$3 ? self__.rf31554.cljs$core$IFn$_invoke$arity$3(acc31555,self__.k,x) : self__.rf31554.call(null,acc31555,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (){
var self__ = this;
var _31556 = this;
return (self__.rf31554.cljs$core$IFn$_invoke$arity$0 ? self__.rf31554.cljs$core$IFn$_invoke$arity$0() : self__.rf31554.call(null));
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (acc31555){
var self__ = this;
var _31556 = this;
return (self__.rf31554.cljs$core$IFn$_invoke$arity$1 ? self__.rf31554.cljs$core$IFn$_invoke$arity$1(acc31555) : self__.rf31554.call(null,acc31555));
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (acc31555,x){
var self__ = this;
var _31556 = this;
var acc__30876__auto__ = (self__.rf31554.cljs$core$IFn$_invoke$arity$3 ? self__.rf31554.cljs$core$IFn$_invoke$arity$3(acc31555,self__.k,x) : self__.rf31554.call(null,acc31555,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.getBasis = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31527","meta31527",154095749,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_31525","_31525",-1458403353,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms31526","net.cgrand.xforms/t_net$cgrand$xforms31526",225624862,null)], null)),new cljs.core.Symbol(null,"rf31554","rf31554",529105832,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"rf31523","rf31523",-316041168,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"acc31524","acc31524",-1801115522,null),new cljs.core.Symbol(null,"meta31558","meta31558",-84006344,null)], null);
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31557.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31557.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31557";

net.cgrand.xforms.t_net$cgrand$xforms31557.cljs$lang$ctorPrWriter = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31557");
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31557.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31557 = ((function (rf31554__$1,_31525,rf31523__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms31557(meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf31554__$2,rf__$1,rf31523__$1,k__$1,xforms__$1,acc31524__$1,meta31558){
return (new net.cgrand.xforms.t_net$cgrand$xforms31557(meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf31554__$2,rf__$1,rf31523__$1,k__$1,xforms__$1,acc31524__$1,meta31558));
});})(rf31554__$1,_31525,rf31523__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31557(self__.meta31527,self__.mrf,xform,_31525,rf31554__$1,self__.rf,self__.rf31523,k,self__.xforms,acc31524,null));
});})(_31525,rf31523__$1,mrf))
);
var acc__30876__auto__ = (function (){var G__31561 = acc31524;
var G__31562 = k;
var G__31563 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf31523.cljs$core$IFn$_invoke$arity$3 ? self__.rf31523.cljs$core$IFn$_invoke$arity$3(G__31561,G__31562,G__31563) : self__.rf31523.call(null,G__31561,G__31562,G__31563));
})();
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf31523__$1,mrf){
return (function (){
var self__ = this;
var _31525 = this;
return (self__.rf31523.cljs$core$IFn$_invoke$arity$0 ? self__.rf31523.cljs$core$IFn$_invoke$arity$0() : self__.rf31523.call(null));
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf31523__$1,mrf){
return (function (acc31524){
var self__ = this;
var _31525 = this;
return (self__.rf31523.cljs$core$IFn$_invoke$arity$1 ? self__.rf31523.cljs$core$IFn$_invoke$arity$1(acc31524) : self__.rf31523.call(null,acc31524));
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf31523__$1,mrf){
return (function (acc31524,p__31564){
var self__ = this;
var vec__31565 = p__31564;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31565,(0),null);
var xform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31565,(1),null);
var _31525 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (rf31568){
var rf31568__$1 = net.cgrand.xforms.ensure_kvrf(rf31568);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31571 = (function (vec__31565,meta31527,mrf,xform,_31525,rf,p__31564,rf31523,k,rf31568,xforms,acc31524,meta31572){
this.vec__31565 = vec__31565;
this.meta31527 = meta31527;
this.mrf = mrf;
this.xform = xform;
this._31525 = _31525;
this.rf = rf;
this.p__31564 = p__31564;
this.rf31523 = rf31523;
this.k = k;
this.rf31568 = rf31568;
this.xforms = xforms;
this.acc31524 = acc31524;
this.meta31572 = meta31572;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (_31573,meta31572__$1){
var self__ = this;
var _31573__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31571(self__.vec__31565,self__.meta31527,self__.mrf,self__.xform,self__._31525,self__.rf,self__.p__31564,self__.rf31523,self__.k,self__.rf31568,self__.xforms,self__.acc31524,meta31572__$1));
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (_31573){
var self__ = this;
var _31573__$1 = this;
return self__.meta31572;
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.call = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function() {
var G__32070 = null;
var G__32070__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31570 = self____$1;
return (self__.rf31568.cljs$core$IFn$_invoke$arity$0 ? self__.rf31568.cljs$core$IFn$_invoke$arity$0() : self__.rf31568.call(null));
});
var G__32070__2 = (function (self__,acc31569){
var self__ = this;
var self____$1 = this;
var _31570 = self____$1;
return (self__.rf31568.cljs$core$IFn$_invoke$arity$1 ? self__.rf31568.cljs$core$IFn$_invoke$arity$1(acc31569) : self__.rf31568.call(null,acc31569));
});
var G__32070__3 = (function (self__,acc31569,x){
var self__ = this;
var self____$1 = this;
var _31570 = self____$1;
var acc__30876__auto__ = (self__.rf31568.cljs$core$IFn$_invoke$arity$3 ? self__.rf31568.cljs$core$IFn$_invoke$arity$3(acc31569,self__.k,x) : self__.rf31568.call(null,acc31569,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
var G__32070__4 = (function (self__,acc31569,k__30877__auto__,v__30878__auto__){
var self__ = this;
var self____$1 = this;
var _31570 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31568.cljs$core$IFn$_invoke$arity$3 ? self__.rf31568.cljs$core$IFn$_invoke$arity$3(acc31569,self__.k,x) : self__.rf31568.call(null,acc31569,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});
G__32070 = function(self__,acc31569,k__30877__auto__,v__30878__auto__){
switch(arguments.length){
case 1:
return G__32070__1.call(this,self__);
case 2:
return G__32070__2.call(this,self__,acc31569);
case 3:
return G__32070__3.call(this,self__,acc31569,k__30877__auto__);
case 4:
return G__32070__4.call(this,self__,acc31569,k__30877__auto__,v__30878__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32070.cljs$core$IFn$_invoke$arity$1 = G__32070__1;
G__32070.cljs$core$IFn$_invoke$arity$2 = G__32070__2;
G__32070.cljs$core$IFn$_invoke$arity$3 = G__32070__3;
G__32070.cljs$core$IFn$_invoke$arity$4 = G__32070__4;
return G__32070;
})()
;})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.apply = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (self__,args31574){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31574)));
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (acc31569,k__30877__auto__,v__30878__auto__){
var self__ = this;
var _31570 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__30877__auto__,v__30878__auto__], null);
var acc__30876__auto__ = (self__.rf31568.cljs$core$IFn$_invoke$arity$3 ? self__.rf31568.cljs$core$IFn$_invoke$arity$3(acc31569,self__.k,x) : self__.rf31568.call(null,acc31569,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (){
var self__ = this;
var _31570 = this;
return (self__.rf31568.cljs$core$IFn$_invoke$arity$0 ? self__.rf31568.cljs$core$IFn$_invoke$arity$0() : self__.rf31568.call(null));
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (acc31569){
var self__ = this;
var _31570 = this;
return (self__.rf31568.cljs$core$IFn$_invoke$arity$1 ? self__.rf31568.cljs$core$IFn$_invoke$arity$1(acc31569) : self__.rf31568.call(null,acc31569));
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (acc31569,x){
var self__ = this;
var _31570 = this;
var acc__30876__auto__ = (self__.rf31568.cljs$core$IFn$_invoke$arity$3 ? self__.rf31568.cljs$core$IFn$_invoke$arity$3(acc31569,self__.k,x) : self__.rf31568.call(null,acc31569,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.getBasis = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__31565","vec__31565",-2029468990,null),new cljs.core.Symbol(null,"meta31527","meta31527",154095749,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_31525","_31525",-1458403353,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms31526","net.cgrand.xforms/t_net$cgrand$xforms31526",225624862,null)], null)),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"p__31564","p__31564",-1585448657,null),new cljs.core.Symbol(null,"rf31523","rf31523",-316041168,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"rf31568","rf31568",1664496662,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"acc31524","acc31524",-1801115522,null),new cljs.core.Symbol(null,"meta31572","meta31572",150642392,null)], null);
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31571.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31571.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31571";

net.cgrand.xforms.t_net$cgrand$xforms31571.cljs$lang$ctorPrWriter = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31571");
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31571.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31571 = ((function (rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms31571(vec__31565__$1,meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf__$1,p__31564__$1,rf31523__$1,k__$1,rf31568__$2,xforms__$1,acc31524__$1,meta31572){
return (new net.cgrand.xforms.t_net$cgrand$xforms31571(vec__31565__$1,meta31527__$1,mrf__$1,xform__$1,_31525__$1,rf__$1,p__31564__$1,rf31523__$1,k__$1,rf31568__$2,xforms__$1,acc31524__$1,meta31572));
});})(rf31568__$1,_31525,vec__31565,k,xform,rf31523__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31571(vec__31565,self__.meta31527,self__.mrf,xform,_31525,self__.rf,p__31564,self__.rf31523,k,rf31568__$1,self__.xforms,acc31524,null));
});})(_31525,vec__31565,k,xform,rf31523__$1,mrf))
);
var acc__30876__auto__ = (function (){var G__31575 = acc31524;
var G__31576 = k;
var G__31577 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf31523.cljs$core$IFn$_invoke$arity$3 ? self__.rf31523.cljs$core$IFn$_invoke$arity$3(G__31575,G__31576,G__31577) : self__.rf31523.call(null,G__31575,G__31576,G__31577));
})();
if(cljs.core.reduced_QMARK_(acc__30876__auto__)){
return acc__30876__auto__;
} else {
return acc__30876__auto__;
}
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.getBasis = ((function (rf31523__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rf31523","rf31523",-316041168,null),new cljs.core.Symbol(null,"meta31527","meta31527",154095749,null)], null);
});})(rf31523__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms31526.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31526.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31526";

net.cgrand.xforms.t_net$cgrand$xforms31526.cljs$lang$ctorPrWriter = ((function (rf31523__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31526");
});})(rf31523__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31526.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31526 = ((function (rf31523__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms31526(xforms__$1,rf__$1,mrf__$1,rf31523__$2,meta31527){
return (new net.cgrand.xforms.t_net$cgrand$xforms31526(xforms__$1,rf__$1,mrf__$1,rf31523__$2,meta31527));
});})(rf31523__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31526(xforms,rf,mrf,rf31523__$1,null));
});})(mrf))
,xforms):net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (mrf){
return (function (p1__31321_SHARP_){
return (p1__31321_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31321_SHARP_.cljs$core$IFn$_invoke$arity$1(mrf) : p1__31321_SHARP_.call(null,mrf));
});})(mrf))
),xforms)));
var invoke_rfs = ((cljs.core.map_QMARK_(xforms))?((function (mrf,rfs){
return (function (acc,invoke){
return cljs.core.reduce_kv(((function (mrf,rfs){
return (function (acc__$1,tag,rf__$1){
var acc__$2 = (invoke.cljs$core$IFn$_invoke$arity$2 ? invoke.cljs$core$IFn$_invoke$arity$2(rf__$1,acc__$1) : invoke.call(null,rf__$1,acc__$1));
if(cljs.core.reduced_QMARK_(acc__$2)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$2))){
cljs.core.vreset_BANG_(rfs,null);

return acc__$2;
} else {
rfs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rfs.cljs$core$IDeref$_deref$arity$1(null),tag));

var G__31578 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__31578) : rf__$1.call(null,G__31578));
}
} else {
return acc__$2;
}
});})(mrf,rfs))
,acc,cljs.core.deref(rfs));
});})(mrf,rfs))
:((function (mrf,rfs){
return (function (acc,invoke){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (mrf,rfs){
return (function (acc__$1,rf__$1){
var acc__$2 = (invoke.cljs$core$IFn$_invoke$arity$2 ? invoke.cljs$core$IFn$_invoke$arity$2(rf__$1,acc__$1) : invoke.call(null,rf__$1,acc__$1));
if(cljs.core.reduced_QMARK_(acc__$2)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$2))){
cljs.core.vreset_BANG_(rfs,null);

return acc__$2;
} else {
rfs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(rfs.cljs$core$IDeref$_deref$arity$1(null),rf__$1));

var G__31579 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__31579) : rf__$1.call(null,G__31579));
}
} else {
return acc__$2;
}
});})(mrf,rfs))
,acc,cljs.core.deref(rfs));
});})(mrf,rfs))
);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31581 = (function (xforms,rf,mrf,rfs,invoke_rfs,meta31582){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rfs = rfs;
this.invoke_rfs = invoke_rfs;
this.meta31582 = meta31582;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mrf,rfs,invoke_rfs){
return (function (_31583,meta31582__$1){
var self__ = this;
var _31583__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31581(self__.xforms,self__.rf,self__.mrf,self__.rfs,self__.invoke_rfs,meta31582__$1));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (_31583){
var self__ = this;
var _31583__$1 = this;
return self__.meta31582;
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.call = ((function (mrf,rfs,invoke_rfs){
return (function() {
var G__32071 = null;
var G__32071__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31580 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__32071__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _31580 = self____$1;
var G__31585 = (function (){var G__31586 = acc;
var G__31587 = ((function (G__31586,_31580,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__31322_SHARP_,p2__31323_SHARP_){
return (p1__31322_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31322_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__31323_SHARP_) : p1__31322_SHARP_.call(null,p2__31323_SHARP_));
});})(G__31586,_31580,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__31586,G__31587) : self__.invoke_rfs.call(null,G__31586,G__31587));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31585) : self__.rf.call(null,G__31585));
});
var G__32071__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _31580 = self____$1;
var acc__$1 = (function (){var G__31588 = acc;
var G__31589 = ((function (G__31588,_31580,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__31324_SHARP_,p2__31325_SHARP_){
return (p1__31324_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__31324_SHARP_.cljs$core$IFn$_invoke$arity$2(p2__31325_SHARP_,x) : p1__31324_SHARP_.call(null,p2__31325_SHARP_,x));
});})(G__31588,_31580,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__31588,G__31589) : self__.invoke_rfs.call(null,G__31588,G__31589));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});
var G__32071__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _31580 = self____$1;
var acc__$1 = (function (){var G__31590 = acc;
var G__31591 = ((function (G__31590,_31580,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__31326_SHARP_,p2__31327_SHARP_){
return (p1__31326_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__31326_SHARP_.cljs$core$IFn$_invoke$arity$3(p2__31327_SHARP_,k,v) : p1__31326_SHARP_.call(null,p2__31327_SHARP_,k,v));
});})(G__31590,_31580,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__31590,G__31591) : self__.invoke_rfs.call(null,G__31590,G__31591));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});
G__32071 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__32071__1.call(this,self__);
case 2:
return G__32071__2.call(this,self__,acc);
case 3:
return G__32071__3.call(this,self__,acc,k);
case 4:
return G__32071__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32071.cljs$core$IFn$_invoke$arity$1 = G__32071__1;
G__32071.cljs$core$IFn$_invoke$arity$2 = G__32071__2;
G__32071.cljs$core$IFn$_invoke$arity$3 = G__32071__3;
G__32071.cljs$core$IFn$_invoke$arity$4 = G__32071__4;
return G__32071;
})()
;})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.apply = ((function (mrf,rfs,invoke_rfs){
return (function (self__,args31584){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31584)));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (mrf,rfs,invoke_rfs){
return (function (){
var self__ = this;
var _31580 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (acc){
var self__ = this;
var _31580 = this;
var G__31592 = (function (){var G__31593 = acc;
var G__31594 = ((function (G__31593,_31580,mrf,rfs,invoke_rfs){
return (function (p1__31322_SHARP_,p2__31323_SHARP_){
return (p1__31322_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31322_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__31323_SHARP_) : p1__31322_SHARP_.call(null,p2__31323_SHARP_));
});})(G__31593,_31580,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__31593,G__31594) : self__.invoke_rfs.call(null,G__31593,G__31594));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__31592) : self__.rf.call(null,G__31592));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (mrf,rfs,invoke_rfs){
return (function (acc,x){
var self__ = this;
var _31580 = this;
var acc__$1 = (function (){var G__31595 = acc;
var G__31596 = ((function (G__31595,_31580,mrf,rfs,invoke_rfs){
return (function (p1__31324_SHARP_,p2__31325_SHARP_){
return (p1__31324_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__31324_SHARP_.cljs$core$IFn$_invoke$arity$2(p2__31325_SHARP_,x) : p1__31324_SHARP_.call(null,p2__31325_SHARP_,x));
});})(G__31595,_31580,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__31595,G__31596) : self__.invoke_rfs.call(null,G__31595,G__31596));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (mrf,rfs,invoke_rfs){
return (function (acc,k,v){
var self__ = this;
var _31580 = this;
var acc__$1 = (function (){var G__31597 = acc;
var G__31598 = ((function (G__31597,_31580,mrf,rfs,invoke_rfs){
return (function (p1__31326_SHARP_,p2__31327_SHARP_){
return (p1__31326_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__31326_SHARP_.cljs$core$IFn$_invoke$arity$3(p2__31327_SHARP_,k,v) : p1__31326_SHARP_.call(null,p2__31327_SHARP_,k,v));
});})(G__31597,_31580,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__31597,G__31598) : self__.invoke_rfs.call(null,G__31597,G__31598));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.getBasis = ((function (mrf,rfs,invoke_rfs){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rfs","rfs",-70956169,null),new cljs.core.Symbol(null,"invoke-rfs","invoke-rfs",1691366545,null),new cljs.core.Symbol(null,"meta31582","meta31582",-1174191442,null)], null);
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms31581.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31581.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31581";

net.cgrand.xforms.t_net$cgrand$xforms31581.cljs$lang$ctorPrWriter = ((function (mrf,rfs,invoke_rfs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31581");
});})(mrf,rfs,invoke_rfs))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31581.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31581 = ((function (mrf,rfs,invoke_rfs){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms31581(xforms__$1,rf__$1,mrf__$1,rfs__$1,invoke_rfs__$1,meta31582){
return (new net.cgrand.xforms.t_net$cgrand$xforms31581(xforms__$1,rf__$1,mrf__$1,rfs__$1,invoke_rfs__$1,meta31582));
});})(mrf,rfs,invoke_rfs))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31581(xforms,rf,mrf,rfs,invoke_rfs,null));
});
});

net.cgrand.xforms.last = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.last);

/**
 * Process coll through the specified xform and returns the first local true value.
 */
net.cgrand.xforms.some = (function net$cgrand$xforms$some(xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,net.cgrand.xforms.rfs.some,null,coll);
});

/**
 * Performs several transductions over coll at once. xforms-map can be a map or a sequential collection.
 * When xforms-map is a map, returns a map with the same keyset as xforms-map.
 * When xforms-map is a sequential collection returns a vector of same length as xforms-map.
 * Returns a transducer when coll is omitted.
 */
net.cgrand.xforms.transjuxt = (function net$cgrand$xforms$transjuxt(var_args){
var G__31600 = arguments.length;
switch (G__31600) {
case 1:
return net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1 = (function (xforms_map){
var collect_xform = ((cljs.core.map_QMARK_(xforms_map))?net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY):net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((function (){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms31602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms31602 = (function (xforms_map,meta31603){
this.xforms_map = xforms_map;
this.meta31603 = meta31603;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31604,meta31603__$1){
var self__ = this;
var _31604__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms31602(self__.xforms_map,meta31603__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31604){
var self__ = this;
var _31604__$1 = this;
return self__.meta31603;
});

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return this__30879__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.call = (function() {
var G__32073 = null;
var G__32073__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _31601 = self____$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_31601,self____$1){
return (function (v,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,null);
});})(_31601,self____$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.xforms_map)));
});
var G__32073__2 = (function (self__,v){
var self__ = this;
var self____$1 = this;
var _31601 = self____$1;
return cljs.core.persistent_BANG_(v);
});
var G__32073__3 = (function (self__,v,p__31606){
var self__ = this;
var vec__31607 = p__31606;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31607,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31607,(1),null);
var self____$1 = this;
var _31601 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});
var G__32073__4 = (function (self__,v,i,x){
var self__ = this;
var self____$1 = this;
var _31601 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});
G__32073 = function(self__,v,i,x){
switch(arguments.length){
case 1:
return G__32073__1.call(this,self__);
case 2:
return G__32073__2.call(this,self__,v);
case 3:
return G__32073__3.call(this,self__,v,i);
case 4:
return G__32073__4.call(this,self__,v,i,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32073.cljs$core$IFn$_invoke$arity$1 = G__32073__1;
G__32073.cljs$core$IFn$_invoke$arity$2 = G__32073__2;
G__32073.cljs$core$IFn$_invoke$arity$3 = G__32073__3;
G__32073.cljs$core$IFn$_invoke$arity$4 = G__32073__4;
return G__32073;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.apply = (function (self__,args31605){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31605)));
});

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.cljs$core$IFn$_invoke$arity$2 = (function (v,p__31610){
var self__ = this;
var vec__31611 = p__31610;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31611,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31611,(1),null);
var _31601 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _31601 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_31601){
return (function (v,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,null);
});})(_31601))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.xforms_map)));
});

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.cljs$core$IFn$_invoke$arity$1 = (function (v){
var self__ = this;
var _31601 = this;
return cljs.core.persistent_BANG_(v);
});

net.cgrand.xforms.t_net$cgrand$xforms31602.prototype.cljs$core$IFn$_invoke$arity$3 = (function (v,i,x){
var self__ = this;
var _31601 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});

net.cgrand.xforms.t_net$cgrand$xforms31602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms-map","xforms-map",-1836515838,null),new cljs.core.Symbol(null,"meta31603","meta31603",1638412549,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms31602.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms31602.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms31602";

net.cgrand.xforms.t_net$cgrand$xforms31602.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms31602");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms31602.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms31602 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms31602(xforms_map__$1,meta31603){
return (new net.cgrand.xforms.t_net$cgrand$xforms31602(xforms_map__$1,meta31603));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms31602(xforms_map,null));
})()
));
var xforms_map__$1 = ((cljs.core.map_QMARK_(xforms_map))?xforms_map:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),xforms_map));
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.multiplex(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (collect_xform,xforms_map__$1){
return (function (p1__31328_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(p1__31328_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$1((1)));
});})(collect_xform,xforms_map__$1))
)),xforms_map__$1)),collect_xform);
});

net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$2 = (function (xforms_map,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1(xforms_map),net.cgrand.xforms.rfs.last,coll);
});

net.cgrand.xforms.transjuxt.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=net.cgrand.xforms.js.map
