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

var G__18738_19022 = net.cgrand.xforms.some_kvrf;
var G__18739_19023 = "_";
var G__18740_19024 = ((function (G__18738_19022,G__18739_19023){
return (function (_){
return null;
});})(G__18738_19022,G__18739_19023))
;
goog.object.set(G__18738_19022,G__18739_19023,G__18740_19024);

net.cgrand.xforms.ensure_kvrf = (function net$cgrand$xforms$ensure_kvrf(rf){
var or__4047__auto__ = net.cgrand.xforms.some_kvrf(rf);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18742 = (function (rf,or__4047__auto__,meta18743){
this.rf = rf;
this.or__4047__auto__ = or__4047__auto__;
this.meta18743 = meta18743;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (or__4047__auto__){
return (function (_18744,meta18743__$1){
var self__ = this;
var _18744__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18742(self__.rf,self__.or__4047__auto__,meta18743__$1));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (or__4047__auto__){
return (function (_18744){
var self__ = this;
var _18744__$1 = this;
return self__.meta18743;
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (or__4047__auto__){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.call = ((function (or__4047__auto__){
return (function() {
var G__19026 = null;
var G__19026__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18741 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__19026__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18741 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__19026__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _18741 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});
var G__19026__4 = (function (self__,acc,k__18285__auto__,v__18286__auto__){
var self__ = this;
var self____$1 = this;
var _18741 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});
G__19026 = function(self__,acc,k__18285__auto__,v__18286__auto__){
switch(arguments.length){
case 1:
return G__19026__1.call(this,self__);
case 2:
return G__19026__2.call(this,self__,acc);
case 3:
return G__19026__3.call(this,self__,acc,k__18285__auto__);
case 4:
return G__19026__4.call(this,self__,acc,k__18285__auto__,v__18286__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19026.cljs$core$IFn$_invoke$arity$1 = G__19026__1;
G__19026.cljs$core$IFn$_invoke$arity$2 = G__19026__2;
G__19026.cljs$core$IFn$_invoke$arity$3 = G__19026__3;
G__19026.cljs$core$IFn$_invoke$arity$4 = G__19026__4;
return G__19026;
})()
;})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.apply = ((function (or__4047__auto__){
return (function (self__,args18745){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18745)));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (or__4047__auto__){
return (function (acc,k__18285__auto__,v__18286__auto__){
var self__ = this;
var _18741 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (or__4047__auto__){
return (function (){
var self__ = this;
var _18741 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (or__4047__auto__){
return (function (acc){
var self__ = this;
var _18741 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (or__4047__auto__){
return (function (acc,x){
var self__ = this;
var _18741 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.getBasis = ((function (or__4047__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"or__4047__auto__","or__4047__auto__",-609205617,null),new cljs.core.Symbol(null,"meta18743","meta18743",-1408029762,null)], null);
});})(or__4047__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms18742.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18742.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18742";

net.cgrand.xforms.t_net$cgrand$xforms18742.cljs$lang$ctorPrWriter = ((function (or__4047__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18742");
});})(or__4047__auto__))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18742.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18742 = ((function (or__4047__auto__){
return (function net$cgrand$xforms$ensure_kvrf_$___GT_t_net$cgrand$xforms18742(rf__$1,or__4047__auto____$1,meta18743){
return (new net.cgrand.xforms.t_net$cgrand$xforms18742(rf__$1,or__4047__auto____$1,meta18743));
});})(or__4047__auto__))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18742(rf,or__4047__auto__,null));
}
});

/**
 * A transducer that reduces a collection to a 1-item collection consisting of only the reduced result.
 * Unlike reduce but like transduce it does call the completing arity (1) of the reducing fn.
 */
net.cgrand.xforms.reduce = (function net$cgrand$xforms$reduce(var_args){
var G__18747 = arguments.length;
switch (G__18747) {
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
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18749 = (function (f,rf,vacc,meta18750){
this.f = f;
this.rf = rf;
this.vacc = vacc;
this.meta18750 = meta18750;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (f__$1,vacc){
return (function (_18751,meta18750__$1){
var self__ = this;
var _18751__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18749(self__.f,self__.rf,self__.vacc,meta18750__$1));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (f__$1,vacc){
return (function (_18751){
var self__ = this;
var _18751__$1 = this;
return self__.meta18750;
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (f__$1,vacc){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.call = ((function (f__$1,vacc){
return (function() {
var G__19071 = null;
var G__19071__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18748 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__19071__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18748 = self____$1;
var v__18288__auto__ = cljs.core.deref(self__.vacc);
if((v__18288__auto__ === self__.vacc)){
return null;
} else {
cljs.core.vreset_BANG_(self__.vacc,self__.vacc);

var f_acc = v__18288__auto__;
var G__18753 = cljs.core.unreduced((function (){var G__18754 = acc;
var G__18755 = (function (){var G__18756 = cljs.core.unreduced(f_acc);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18756) : self__.f.call(null,G__18756));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(G__18754,G__18755) : self__.rf.call(null,G__18754,G__18755));
})());
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__18753) : self__.rf.call(null,G__18753));
}
});
var G__19071__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _18748 = self____$1;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__18757 = cljs.core._deref(self__.vacc);
var G__18758 = x;
return (self__.f.cljs$core$IFn$_invoke$arity$2 ? self__.f.cljs$core$IFn$_invoke$arity$2(G__18757,G__18758) : self__.f.call(null,G__18757,G__18758));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});
var G__19071__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _18748 = self____$1;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__18759 = cljs.core._deref(self__.vacc);
var G__18760 = k;
var G__18761 = v;
return (self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(G__18759,G__18760,G__18761) : self__.f.call(null,G__18759,G__18760,G__18761));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});
G__19071 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19071__1.call(this,self__);
case 2:
return G__19071__2.call(this,self__,acc);
case 3:
return G__19071__3.call(this,self__,acc,k);
case 4:
return G__19071__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19071.cljs$core$IFn$_invoke$arity$1 = G__19071__1;
G__19071.cljs$core$IFn$_invoke$arity$2 = G__19071__2;
G__19071.cljs$core$IFn$_invoke$arity$3 = G__19071__3;
G__19071.cljs$core$IFn$_invoke$arity$4 = G__19071__4;
return G__19071;
})()
;})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.apply = ((function (f__$1,vacc){
return (function (self__,args18752){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18752)));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (f__$1,vacc){
return (function (){
var self__ = this;
var _18748 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (f__$1,vacc){
return (function (acc){
var self__ = this;
var _18748 = this;
var v__18288__auto__ = cljs.core.deref(self__.vacc);
if((v__18288__auto__ === self__.vacc)){
return null;
} else {
cljs.core.vreset_BANG_(self__.vacc,self__.vacc);

var f_acc = v__18288__auto__;
var G__18762 = cljs.core.unreduced((function (){var G__18763 = acc;
var G__18764 = (function (){var G__18765 = cljs.core.unreduced(f_acc);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18765) : self__.f.call(null,G__18765));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(G__18763,G__18764) : self__.rf.call(null,G__18763,G__18764));
})());
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__18762) : self__.rf.call(null,G__18762));
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (f__$1,vacc){
return (function (acc,x){
var self__ = this;
var _18748 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__18766 = cljs.core._deref(self__.vacc);
var G__18767 = x;
return (self__.f.cljs$core$IFn$_invoke$arity$2 ? self__.f.cljs$core$IFn$_invoke$arity$2(G__18766,G__18767) : self__.f.call(null,G__18766,G__18767));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (f__$1,vacc){
return (function (acc,k,v){
var self__ = this;
var _18748 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__18768 = cljs.core._deref(self__.vacc);
var G__18769 = k;
var G__18770 = v;
return (self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(G__18768,G__18769,G__18770) : self__.f.call(null,G__18768,G__18769,G__18770));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.getBasis = ((function (f__$1,vacc){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"vacc","vacc",-1937917185,null),new cljs.core.Symbol(null,"meta18750","meta18750",-383414671,null)], null);
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms18749.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18749.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18749";

net.cgrand.xforms.t_net$cgrand$xforms18749.cljs$lang$ctorPrWriter = ((function (f__$1,vacc){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18749");
});})(f__$1,vacc))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18749.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18749 = ((function (f__$1,vacc){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms18749(f__$2,rf__$1,vacc__$1,meta18750){
return (new net.cgrand.xforms.t_net$cgrand$xforms18749(f__$2,rf__$1,vacc__$1,meta18750));
});})(f__$1,vacc))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18749(f__$1,rf,vacc,null));
});
});

net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((function() {
var G__19222 = null;
var G__19222__0 = (function (){
return init;
});
var G__19222__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__19222__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__19222 = function(acc,x){
switch(arguments.length){
case 0:
return G__19222__0.call(this);
case 1:
return G__19222__1.call(this,acc);
case 2:
return G__19222__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19222.cljs$core$IFn$_invoke$arity$0 = G__19222__0;
G__19222.cljs$core$IFn$_invoke$arity$1 = G__19222__1;
G__19222.cljs$core$IFn$_invoke$arity$2 = G__19222__2;
return G__19222;
})()
);
});

net.cgrand.xforms.reduce.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.into_rf = (function net$cgrand$xforms$into_rf(to){
if((((!((to == null))))?(((((to.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === to.cljs$core$IEditableCollection$))))?true:(((!to.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to))){
if(cljs.core.map_QMARK_(to)){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18773 = (function (to,meta18774){
this.to = to;
this.meta18774 = meta18774;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18775,meta18774__$1){
var self__ = this;
var _18775__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18773(self__.to,meta18774__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18775){
var self__ = this;
var _18775__$1 = this;
return self__.meta18774;
});

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.call = (function() {
var G__19230 = null;
var G__19230__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18772 = self____$1;
return cljs.core.transient$(self__.to);
});
var G__19230__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18772 = self____$1;
return cljs.core.persistent_BANG_(acc);
});
var G__19230__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _18772 = self____$1;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
var G__19230__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _18772 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});
G__19230 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19230__1.call(this,self__);
case 2:
return G__19230__2.call(this,self__,acc);
case 3:
return G__19230__3.call(this,self__,acc,k);
case 4:
return G__19230__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19230.cljs$core$IFn$_invoke$arity$1 = G__19230__1;
G__19230.cljs$core$IFn$_invoke$arity$2 = G__19230__2;
G__19230.cljs$core$IFn$_invoke$arity$3 = G__19230__3;
G__19230.cljs$core$IFn$_invoke$arity$4 = G__19230__4;
return G__19230;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.apply = (function (self__,args18776){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18776)));
});

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _18772 = this;
return cljs.core.transient$(self__.to);
});

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _18772 = this;
return cljs.core.persistent_BANG_(acc);
});

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _18772 = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});

net.cgrand.xforms.t_net$cgrand$xforms18773.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _18772 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});

net.cgrand.xforms.t_net$cgrand$xforms18773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta18774","meta18774",1880870471,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms18773.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18773.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18773";

net.cgrand.xforms.t_net$cgrand$xforms18773.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18773");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18773.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18773 = (function net$cgrand$xforms$into_rf_$___GT_t_net$cgrand$xforms18773(to__$1,meta18774){
return (new net.cgrand.xforms.t_net$cgrand$xforms18773(to__$1,meta18774));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18773(to,null));
} else {
return (function() {
var G__19240 = null;
var G__19240__0 = (function (){
return cljs.core.transient$(to);
});
var G__19240__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__19240__2 = (function (acc,x){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__19240 = function(acc,x){
switch(arguments.length){
case 0:
return G__19240__0.call(this);
case 1:
return G__19240__1.call(this,acc);
case 2:
return G__19240__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19240.cljs$core$IFn$_invoke$arity$0 = G__19240__0;
G__19240.cljs$core$IFn$_invoke$arity$1 = G__19240__1;
G__19240.cljs$core$IFn$_invoke$arity$2 = G__19240__2;
return G__19240;
})()
}
} else {
if(cljs.core.map_QMARK_(to)){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18778 = (function (to,meta18779){
this.to = to;
this.meta18779 = meta18779;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18780,meta18779__$1){
var self__ = this;
var _18780__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18778(self__.to,meta18779__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18780){
var self__ = this;
var _18780__$1 = this;
return self__.meta18779;
});

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.call = (function() {
var G__19244 = null;
var G__19244__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18777 = self____$1;
return self__.to;
});
var G__19244__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18777 = self____$1;
return acc;
});
var G__19244__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _18777 = self____$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
var G__19244__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _18777 = self____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});
G__19244 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19244__1.call(this,self__);
case 2:
return G__19244__2.call(this,self__,acc);
case 3:
return G__19244__3.call(this,self__,acc,k);
case 4:
return G__19244__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19244.cljs$core$IFn$_invoke$arity$1 = G__19244__1;
G__19244.cljs$core$IFn$_invoke$arity$2 = G__19244__2;
G__19244.cljs$core$IFn$_invoke$arity$3 = G__19244__3;
G__19244.cljs$core$IFn$_invoke$arity$4 = G__19244__4;
return G__19244;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.apply = (function (self__,args18781){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18781)));
});

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _18777 = this;
return self__.to;
});

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _18777 = this;
return acc;
});

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _18777 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});

net.cgrand.xforms.t_net$cgrand$xforms18778.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _18777 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});

net.cgrand.xforms.t_net$cgrand$xforms18778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta18779","meta18779",691131274,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms18778.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18778.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18778";

net.cgrand.xforms.t_net$cgrand$xforms18778.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18778");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18778.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18778 = (function net$cgrand$xforms$into_rf_$___GT_t_net$cgrand$xforms18778(to__$1,meta18779){
return (new net.cgrand.xforms.t_net$cgrand$xforms18778(to__$1,meta18779));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18778(to,null));
} else {
return (function() {
var G__19250 = null;
var G__19250__0 = (function (){
return to;
});
var G__19250__1 = (function (acc){
return acc;
});
var G__19250__2 = (function (acc,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__19250 = function(acc,x){
switch(arguments.length){
case 0:
return G__19250__0.call(this);
case 1:
return G__19250__1.call(this,acc);
case 2:
return G__19250__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19250.cljs$core$IFn$_invoke$arity$0 = G__19250__0;
G__19250.cljs$core$IFn$_invoke$arity$1 = G__19250__1;
G__19250.cljs$core$IFn$_invoke$arity$2 = G__19250__2;
return G__19250;
})()

}
}
});

/**
 * Like clojure.core/into but with a 1-arg arity returning a transducer which accumulate every input in a collection and outputs only the accumulated collection.
 */
net.cgrand.xforms.into = (function net$cgrand$xforms$into(var_args){
var G__18783 = arguments.length;
switch (G__18783) {
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
var rf = (function (){var G__18784 = net.cgrand.xforms.into_rf(to);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18784) : xform.call(null,G__18784));
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
var G__18785 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),from);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__18785) : rf__$1.call(null,G__18785));
} else {
var G__18786 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),from);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18786) : rf.call(null,G__18786));
}
});

net.cgrand.xforms.into.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.without_rf = (function net$cgrand$xforms$without_rf(from){
if((((!((from == null))))?(((((from.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === from.cljs$core$IEditableCollection$))))?true:(((!from.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from))){
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__19259 = null;
var G__19259__0 = (function (){
return cljs.core.transient$(from);
});
var G__19259__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__19259__2 = (function (acc,x){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__19259 = function(acc,x){
switch(arguments.length){
case 0:
return G__19259__0.call(this);
case 1:
return G__19259__1.call(this,acc);
case 2:
return G__19259__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19259.cljs$core$IFn$_invoke$arity$0 = G__19259__0;
G__19259.cljs$core$IFn$_invoke$arity$1 = G__19259__1;
G__19259.cljs$core$IFn$_invoke$arity$2 = G__19259__2;
return G__19259;
})()
} else {
return (function() {
var G__19261 = null;
var G__19261__0 = (function (){
return cljs.core.transient$(from);
});
var G__19261__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__19261__2 = (function (acc,x){
return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__19261 = function(acc,x){
switch(arguments.length){
case 0:
return G__19261__0.call(this);
case 1:
return G__19261__1.call(this,acc);
case 2:
return G__19261__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19261.cljs$core$IFn$_invoke$arity$0 = G__19261__0;
G__19261.cljs$core$IFn$_invoke$arity$1 = G__19261__1;
G__19261.cljs$core$IFn$_invoke$arity$2 = G__19261__2;
return G__19261;
})()
}
} else {
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__19263 = null;
var G__19263__0 = (function (){
return from;
});
var G__19263__1 = (function (acc){
return acc;
});
var G__19263__2 = (function (acc,x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__19263 = function(acc,x){
switch(arguments.length){
case 0:
return G__19263__0.call(this);
case 1:
return G__19263__1.call(this,acc);
case 2:
return G__19263__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19263.cljs$core$IFn$_invoke$arity$0 = G__19263__0;
G__19263.cljs$core$IFn$_invoke$arity$1 = G__19263__1;
G__19263.cljs$core$IFn$_invoke$arity$2 = G__19263__2;
return G__19263;
})()
} else {
return (function() {
var G__19264 = null;
var G__19264__0 = (function (){
return from;
});
var G__19264__1 = (function (acc){
return acc;
});
var G__19264__2 = (function (acc,x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__19264 = function(acc,x){
switch(arguments.length){
case 0:
return G__19264__0.call(this);
case 1:
return G__19264__1.call(this,acc);
case 2:
return G__19264__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19264.cljs$core$IFn$_invoke$arity$0 = G__19264__0;
G__19264.cljs$core$IFn$_invoke$arity$1 = G__19264__1;
G__19264.cljs$core$IFn$_invoke$arity$2 = G__19264__2;
return G__19264;
})()

}
}
});

/**
 * The opposite of x/into: dissociate or disjoin from the target.
 */
net.cgrand.xforms.without = (function net$cgrand$xforms$without(var_args){
var G__18789 = arguments.length;
switch (G__18789) {
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
var rf = (function (){var G__18790 = net.cgrand.xforms.without_rf(target);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18790) : xform.call(null,G__18790));
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
var G__18791 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),keys);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__18791) : rf__$1.call(null,G__18791));
} else {
var G__18792 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),keys);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18792) : rf.call(null,G__18792));
}
});

net.cgrand.xforms.without.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.minimum = (function net$cgrand$xforms$minimum(var_args){
var G__18794 = arguments.length;
switch (G__18794) {
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
var G__18796 = arguments.length;
switch (G__18796) {
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
var G__18798 = arguments.length;
switch (G__18798) {
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
var fexpr__18799 = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.str);
return (fexpr__18799.cljs$core$IFn$_invoke$arity$1 ? fexpr__18799.cljs$core$IFn$_invoke$arity$1(rf) : fexpr__18799.call(null,rf));
});

net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,net.cgrand.xforms.rfs.str,coll);
});

net.cgrand.xforms.str.cljs$lang$maxFixedArity = 2;


/**
 * Transducer. Adds open as the first item, and close as the last. Optionally inserts delim between each input item.
 */
net.cgrand.xforms.wrap = (function net$cgrand$xforms$wrap(var_args){
var G__18801 = arguments.length;
switch (G__18801) {
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
var G__19288 = null;
var G__19288__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19288__1 = (function (acc){
var G__18802 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,close) : rf.call(null,acc,close)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18802) : rf.call(null,G__18802));
});
var G__19288__2 = (function (acc,x){
var fexpr__18803 = cljs.core.deref(vrf);
return (fexpr__18803.cljs$core$IFn$_invoke$arity$2 ? fexpr__18803.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__18803.call(null,acc,x));
});
G__19288 = function(acc,x){
switch(arguments.length){
case 0:
return G__19288__0.call(this);
case 1:
return G__19288__1.call(this,acc);
case 2:
return G__19288__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19288.cljs$core$IFn$_invoke$arity$0 = G__19288__0;
G__19288.cljs$core$IFn$_invoke$arity$1 = G__19288__1;
G__19288.cljs$core$IFn$_invoke$arity$2 = G__19288__2;
return G__19288;
})()
;})(vrf))
});
});

net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$3 = (function (open,close,delim){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(delim),net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2(open,close));
});

net.cgrand.xforms.wrap.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.vals = (function net$cgrand$xforms$vals(rf){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18805 = (function (rf,meta18806){
this.rf = rf;
this.meta18806 = meta18806;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18807,meta18806__$1){
var self__ = this;
var _18807__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18805(self__.rf,meta18806__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18807){
var self__ = this;
var _18807__$1 = this;
return self__.meta18806;
});

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.call = (function() {
var G__19290 = null;
var G__19290__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18804 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__19290__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18804 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__19290__3 = (function (self__,acc,p__18809){
var self__ = this;
var vec__18810 = p__18809;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18810,(1),null);
var self____$1 = this;
var _18804 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});
var G__19290__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _18804 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});
G__19290 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19290__1.call(this,self__);
case 2:
return G__19290__2.call(this,self__,acc);
case 3:
return G__19290__3.call(this,self__,acc,k);
case 4:
return G__19290__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19290.cljs$core$IFn$_invoke$arity$1 = G__19290__1;
G__19290.cljs$core$IFn$_invoke$arity$2 = G__19290__2;
G__19290.cljs$core$IFn$_invoke$arity$3 = G__19290__3;
G__19290.cljs$core$IFn$_invoke$arity$4 = G__19290__4;
return G__19290;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.apply = (function (self__,args18808){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18808)));
});

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__18813){
var self__ = this;
var vec__18814 = p__18813;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814,(1),null);
var _18804 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _18804 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _18804 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});

net.cgrand.xforms.t_net$cgrand$xforms18805.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _18804 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});

net.cgrand.xforms.t_net$cgrand$xforms18805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta18806","meta18806",1772485326,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms18805.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18805.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18805";

net.cgrand.xforms.t_net$cgrand$xforms18805.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18805");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18805.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18805 = (function net$cgrand$xforms$vals_$___GT_t_net$cgrand$xforms18805(rf__$1,meta18806){
return (new net.cgrand.xforms.t_net$cgrand$xforms18805(rf__$1,meta18806));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18805(rf,null));
});

net.cgrand.xforms.keys = (function net$cgrand$xforms$keys(rf){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18818 = (function (rf,meta18819){
this.rf = rf;
this.meta18819 = meta18819;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18820,meta18819__$1){
var self__ = this;
var _18820__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18818(self__.rf,meta18819__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18820){
var self__ = this;
var _18820__$1 = this;
return self__.meta18819;
});

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.call = (function() {
var G__19303 = null;
var G__19303__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18817 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__19303__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18817 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__19303__3 = (function (self__,acc,p__18822){
var self__ = this;
var vec__18823 = p__18822;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(1),null);
var self____$1 = this;
var _18817 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});
var G__19303__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _18817 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});
G__19303 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19303__1.call(this,self__);
case 2:
return G__19303__2.call(this,self__,acc);
case 3:
return G__19303__3.call(this,self__,acc,k);
case 4:
return G__19303__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19303.cljs$core$IFn$_invoke$arity$1 = G__19303__1;
G__19303.cljs$core$IFn$_invoke$arity$2 = G__19303__2;
G__19303.cljs$core$IFn$_invoke$arity$3 = G__19303__3;
G__19303.cljs$core$IFn$_invoke$arity$4 = G__19303__4;
return G__19303;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.apply = (function (self__,args18821){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18821)));
});

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__18826){
var self__ = this;
var vec__18827 = p__18826;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827,(1),null);
var _18817 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _18817 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _18817 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});

net.cgrand.xforms.t_net$cgrand$xforms18818.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _18817 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});

net.cgrand.xforms.t_net$cgrand$xforms18818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta18819","meta18819",84328632,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms18818.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18818.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18818";

net.cgrand.xforms.t_net$cgrand$xforms18818.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18818");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18818.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18818 = (function net$cgrand$xforms$keys_$___GT_t_net$cgrand$xforms18818(rf__$1,meta18819){
return (new net.cgrand.xforms.t_net$cgrand$xforms18818(rf__$1,meta18819));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18818(rf,null));
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
var G__18831 = arguments.length;
switch (G__18831) {
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
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18833 = (function (rf,meta18834){
this.rf = rf;
this.meta18834 = meta18834;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf__$1){
return (function (_18835,meta18834__$1){
var self__ = this;
var _18835__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18833(self__.rf,meta18834__$1));
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf__$1){
return (function (_18835){
var self__ = this;
var _18835__$1 = this;
return self__.meta18834;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf__$1){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.call = ((function (rf__$1){
return (function() {
var G__19366 = null;
var G__19366__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18832 = self____$1;
return null;
});
var G__19366__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18832 = self____$1;
return acc;
});
var G__19366__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _18832 = self____$1;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});
var G__19366__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _18832 = self____$1;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$3 ? self__.rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : self__.rf.call(null,acc,k,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});
G__19366 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19366__1.call(this,self__);
case 2:
return G__19366__2.call(this,self__,acc);
case 3:
return G__19366__3.call(this,self__,acc,k);
case 4:
return G__19366__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19366.cljs$core$IFn$_invoke$arity$1 = G__19366__1;
G__19366.cljs$core$IFn$_invoke$arity$2 = G__19366__2;
G__19366.cljs$core$IFn$_invoke$arity$3 = G__19366__3;
G__19366.cljs$core$IFn$_invoke$arity$4 = G__19366__4;
return G__19366;
})()
;})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.apply = ((function (rf__$1){
return (function (self__,args18836){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18836)));
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf__$1){
return (function (){
var self__ = this;
var _18832 = this;
return null;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf__$1){
return (function (acc){
var self__ = this;
var _18832 = this;
return acc;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf__$1){
return (function (acc,x){
var self__ = this;
var _18832 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf__$1){
return (function (acc,k,v){
var self__ = this;
var _18832 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$3 ? self__.rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : self__.rf.call(null,acc,k,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.getBasis = ((function (rf__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta18834","meta18834",-1673663730,null)], null);
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18833.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18833.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18833";

net.cgrand.xforms.t_net$cgrand$xforms18833.cljs$lang$ctorPrWriter = ((function (rf__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18833");
});})(rf__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18833.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18833 = ((function (rf__$1){
return (function net$cgrand$xforms$multiplexable_$___GT_t_net$cgrand$xforms18833(rf__$2,meta18834){
return (new net.cgrand.xforms.t_net$cgrand$xforms18833(rf__$2,meta18834));
});})(rf__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18833(rf__$1,null));
});

/**
 * Returns a transducer which partitions items according to kfn.
 * It applies the transform specified by xform to each partition.
 * Partitions contain the "value part" (as returned by vfn) of each item.
 * The resulting transformed items are wrapped back into a "pair" using the pair function.
 * Default values for kfn, vfn and pair are first, second (or identity if kfn is specified) and vector.
 */
net.cgrand.xforms.by_key = (function net$cgrand$xforms$by_key(var_args){
var G__18838 = arguments.length;
switch (G__18838) {
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
var G__19388 = null;
var G__19388__1 = (function (acc){
return acc;
});
var G__19388__2 = (function (acc,v){
return (mrf.cljs$core$IFn$_invoke$arity$3 ? mrf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : mrf.call(null,acc,k,v));
});
G__19388 = function(acc,v){
switch(arguments.length){
case 1:
return G__19388__1.call(this,acc);
case 2:
return G__19388__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19388.cljs$core$IFn$_invoke$arity$1 = G__19388__1;
G__19388.cljs$core$IFn$_invoke$arity$2 = G__19388__2;
return G__19388;
})()
;})(mrf,pair__$1))
});})(mrf,pair__$1))
:((function (mrf,pair__$1){
return (function (k){
return ((function (mrf,pair__$1){
return (function() {
var G__19389 = null;
var G__19389__1 = (function (acc){
return acc;
});
var G__19389__2 = (function (acc,v){
var G__18839 = acc;
var G__18840 = (pair__$1.cljs$core$IFn$_invoke$arity$2 ? pair__$1.cljs$core$IFn$_invoke$arity$2(k,v) : pair__$1.call(null,k,v));
return (mrf.cljs$core$IFn$_invoke$arity$2 ? mrf.cljs$core$IFn$_invoke$arity$2(G__18839,G__18840) : mrf.call(null,G__18839,G__18840));
});
G__19389 = function(acc,v){
switch(arguments.length){
case 1:
return G__19389__1.call(this,acc);
case 2:
return G__19389__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19389.cljs$core$IFn$_invoke$arity$1 = G__19389__1;
G__19389.cljs$core$IFn$_invoke$arity$2 = G__19389__2;
return G__19389;
})()
;})(mrf,pair__$1))
});})(mrf,pair__$1))

));
var m = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
if((((kfn == null)) && ((vfn == null)))){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18841 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta18842){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta18842 = meta18842;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mrf,make_rf,m,pair__$1){
return (function (_18843,meta18842__$1){
var self__ = this;
var _18843__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18841(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta18842__$1));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (_18843){
var self__ = this;
var _18843__$1 = this;
return self__.meta18842;
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.call = ((function (mrf,make_rf,m,pair__$1){
return (function() {
var G__19395 = null;
var G__19395__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__19395__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var v__18288__auto__ = cljs.core.deref(self__.m);
if((v__18288__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__18288__auto__;
var G__18852 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__18288__auto__,self,self____$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__18288__auto__,self,self____$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__18852) : self__.rf.call(null,G__18852));
}
});
var G__19395__3 = (function (self__,acc,p__18845){
var self__ = this;
var vec__18846 = p__18845;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18846,(1),null);
var self____$1 = this;
var self = self____$1;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18849 = (function (){var G__18850 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18850) : self__.xform.call(null,G__18850));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18849));

return G__18849;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18851 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18851) : krf.call(null,G__18851));
}
} else {
return acc__$1;
}
});
var G__19395__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18853 = (function (){var G__18854 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18854) : self__.xform.call(null,G__18854));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18853));

return G__18853;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18855 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18855) : krf.call(null,G__18855));
}
} else {
return acc__$1;
}
});
G__19395 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19395__1.call(this,self__);
case 2:
return G__19395__2.call(this,self__,acc);
case 3:
return G__19395__3.call(this,self__,acc,k);
case 4:
return G__19395__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19395.cljs$core$IFn$_invoke$arity$1 = G__19395__1;
G__19395.cljs$core$IFn$_invoke$arity$2 = G__19395__2;
G__19395.cljs$core$IFn$_invoke$arity$3 = G__19395__3;
G__19395.cljs$core$IFn$_invoke$arity$4 = G__19395__4;
return G__19395;
})()
;})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.apply = ((function (mrf,make_rf,m,pair__$1){
return (function (self__,args18844){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18844)));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc,p__18856){
var self__ = this;
var vec__18857 = p__18856;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857,(1),null);
var self = this;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18860 = (function (){var G__18861 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18861) : self__.xform.call(null,G__18861));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18860));

return G__18860;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18862 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18862) : krf.call(null,G__18862));
}
} else {
return acc__$1;
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (mrf,make_rf,m,pair__$1){
return (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc){
var self__ = this;
var self = this;
var v__18288__auto__ = cljs.core.deref(self__.m);
if((v__18288__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__18288__auto__;
var G__18863 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__18288__auto__,self,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__18288__auto__,self,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__18863) : self__.rf.call(null,G__18863));
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc,k,v){
var self__ = this;
var self = this;
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18864 = (function (){var G__18865 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18865) : self__.xform.call(null,G__18865));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18864));

return G__18864;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18866 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18866) : krf.call(null,G__18866));
}
} else {
return acc__$1;
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.getBasis = ((function (mrf,make_rf,m,pair__$1){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta18842","meta18842",426521762,null)], null);
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18841.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18841.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18841";

net.cgrand.xforms.t_net$cgrand$xforms18841.cljs$lang$ctorPrWriter = ((function (mrf,make_rf,m,pair__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18841");
});})(mrf,make_rf,m,pair__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18841.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18841 = ((function (mrf,make_rf,m,pair__$1){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms18841(kfn__$1,vfn__$1,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta18842){
return (new net.cgrand.xforms.t_net$cgrand$xforms18841(kfn__$1,vfn__$1,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta18842));
});})(mrf,make_rf,m,pair__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18841(kfn,vfn,pair__$1,xform,rf,mrf,make_rf,m,null));
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
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18867 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta18868){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta18868 = meta18868;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (_18869,meta18868__$1){
var self__ = this;
var _18869__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18867(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta18868__$1));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (_18869){
var self__ = this;
var _18869__$1 = this;
return self__.meta18868;
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.call = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function() {
var G__19434 = null;
var G__19434__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__19434__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var v__18288__auto__ = cljs.core.deref(self__.m);
if((v__18288__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__18288__auto__;
var G__18876 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__18288__auto__,self,self____$1,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__18288__auto__,self,self____$1,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__18876) : self__.rf.call(null,G__18876));
}
});
var G__19434__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18877 = (function (){var G__18878 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18878) : self__.xform.call(null,G__18878));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18877));

return G__18877;
}
})();
var acc__$1 = (function (){var G__18879 = acc;
var G__18880 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__18879,G__18880) : krf.call(null,G__18879,G__18880));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18881 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18881) : krf.call(null,G__18881));
}
} else {
return acc__$1;
}
});
var G__19434__4 = (function (self__,acc,k__18285__auto__,v__18286__auto__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18871 = (function (){var G__18872 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18872) : self__.xform.call(null,G__18872));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18871));

return G__18871;
}
})();
var acc__$1 = (function (){var G__18873 = acc;
var G__18874 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__18873,G__18874) : krf.call(null,G__18873,G__18874));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18875 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18875) : krf.call(null,G__18875));
}
} else {
return acc__$1;
}
});
G__19434 = function(self__,acc,k__18285__auto__,v__18286__auto__){
switch(arguments.length){
case 1:
return G__19434__1.call(this,self__);
case 2:
return G__19434__2.call(this,self__,acc);
case 3:
return G__19434__3.call(this,self__,acc,k__18285__auto__);
case 4:
return G__19434__4.call(this,self__,acc,k__18285__auto__,v__18286__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19434.cljs$core$IFn$_invoke$arity$1 = G__19434__1;
G__19434.cljs$core$IFn$_invoke$arity$2 = G__19434__2;
G__19434.cljs$core$IFn$_invoke$arity$3 = G__19434__3;
G__19434.cljs$core$IFn$_invoke$arity$4 = G__19434__4;
return G__19434;
})()
;})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.apply = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (self__,args18870){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18870)));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc,k__18285__auto__,v__18286__auto__){
var self__ = this;
var self = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18882 = (function (){var G__18883 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18883) : self__.xform.call(null,G__18883));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18882));

return G__18882;
}
})();
var acc__$1 = (function (){var G__18884 = acc;
var G__18885 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__18884,G__18885) : krf.call(null,G__18884,G__18885));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18886 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18886) : krf.call(null,G__18886));
}
} else {
return acc__$1;
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc){
var self__ = this;
var self = this;
var v__18288__auto__ = cljs.core.deref(self__.m);
if((v__18288__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__18288__auto__;
var G__18887 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__18288__auto__,self,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__18288__auto__,self,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__18887) : self__.rf.call(null,G__18887));
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc,x){
var self__ = this;
var self = this;
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var G__18888 = (function (){var G__18889 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18889) : self__.xform.call(null,G__18889));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__18888));

return G__18888;
}
})();
var acc__$1 = (function (){var G__18890 = acc;
var G__18891 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__18890,G__18891) : krf.call(null,G__18890,G__18891));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__18892 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__18892) : krf.call(null,G__18892));
}
} else {
return acc__$1;
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.getBasis = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta18868","meta18868",-639446591,null)], null);
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms18867.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18867.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18867";

net.cgrand.xforms.t_net$cgrand$xforms18867.cljs$lang$ctorPrWriter = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18867");
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18867.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18867 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms18867(kfn__$2,vfn__$2,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta18868){
return (new net.cgrand.xforms.t_net$cgrand$xforms18867(kfn__$2,vfn__$2,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta18868));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18867(kfn__$1,vfn__$1,pair__$1,xform,rf,mrf,make_rf,m,null));
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
var len__4641__auto___19445 = arguments.length;
var i__4642__auto___19446 = (0);
while(true){
if((i__4642__auto___19446 < len__4641__auto___19445)){
args__4647__auto__.push((arguments[i__4642__auto___19446]));

var G__19447 = (i__4642__auto___19446 + (1));
i__4642__auto___19446 = G__19447;
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
net.cgrand.xforms.into_by_key.cljs$lang$applyTo = (function (seq18893){
var G__18894 = cljs.core.first(seq18893);
var seq18893__$1 = cljs.core.next(seq18893);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18894,seq18893__$1);
});


/**
 * Returns a partitioning transducer. Each partition is independently transformed using the xform transducer.
 */
net.cgrand.xforms.partition = (function net$cgrand$xforms$partition(var_args){
var G__18896 = arguments.length;
switch (G__18896) {
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
return (function (p1__18725_SHARP_){
if((dq === p1__18725_SHARP_)){
return null;
} else {
return p1__18725_SHARP_;
}
});})(mxrf,dq,barrier,xform))
),xform);
return ((function (mxrf,dq,barrier,xform__$1,xform){
return (function() {
var G__19449 = null;
var G__19449__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19449__1 = (function (acc){
dq.clear();

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__19449__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__4518__auto___19450 = (function (){var x__4138__auto__ = n;
var y__4139__auto__ = step;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
var __19451 = (0);
while(true){
if((__19451 < n__4518__auto___19450)){
dq.dequeue();

var G__19452 = (__19451 + (1));
__19451 = G__19452;
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
G__19449 = function(acc,x){
switch(arguments.length){
case 0:
return G__19449__0.call(this);
case 1:
return G__19449__1.call(this,acc);
case 2:
return G__19449__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19449.cljs$core$IFn$_invoke$arity$0 = G__19449__0;
G__19449.cljs$core$IFn$_invoke$arity$1 = G__19449__1;
G__19449.cljs$core$IFn$_invoke$arity$2 = G__19449__2;
return G__19449;
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
return (function (p1__18726_SHARP_){
if((dq === p1__18726_SHARP_)){
return null;
} else {
return p1__18726_SHARP_;
}
});})(mxrf,dq,barrier))
),xform);
return ((function (mxrf,dq,barrier,xform__$1){
return (function() {
var G__19453 = null;
var G__19453__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19453__1 = (function (acc){
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
var G__19453__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__4518__auto___19454 = (function (){var x__4138__auto__ = n;
var y__4139__auto__ = step;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
var __19455 = (0);
while(true){
if((__19455 < n__4518__auto___19454)){
dq.dequeue();

var G__19456 = (__19455 + (1));
__19455 = G__19456;
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
G__19453 = function(acc,x){
switch(arguments.length){
case 0:
return G__19453__0.call(this);
case 1:
return G__19453__1.call(this,acc);
case 2:
return G__19453__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19453.cljs$core$IFn$_invoke$arity$0 = G__19453__0;
G__19453.cljs$core$IFn$_invoke$arity$1 = G__19453__1;
G__19453.cljs$core$IFn$_invoke$arity$2 = G__19453__2;
return G__19453;
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
var G__19457 = null;
var G__19457__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19457__1 = (function (acc){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (dq){
return (function (p1__18727_SHARP_){
if((dq === p1__18727_SHARP_)){
return null;
} else {
return p1__18727_SHARP_;
}
});})(dq))
),rf,acc,dq.getValues());
});
var G__19457__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
dq.dequeue();
} else {
}

return acc;
});
G__19457 = function(acc,x){
switch(arguments.length){
case 0:
return G__19457__0.call(this);
case 1:
return G__19457__1.call(this,acc);
case 2:
return G__19457__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19457.cljs$core$IFn$_invoke$arity$0 = G__19457__0;
G__19457.cljs$core$IFn$_invoke$arity$1 = G__19457__1;
G__19457.cljs$core$IFn$_invoke$arity$2 = G__19457__2;
return G__19457;
})()
;})(dq))
});
});

net.cgrand.xforms.drop_last = (function net$cgrand$xforms$drop_last(var_args){
var G__18898 = arguments.length;
switch (G__18898) {
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
return (function (p1__18728_SHARP_){
if((dq === p1__18728_SHARP_)){
return null;
} else {
return p1__18728_SHARP_;
}
});})(dq))
);
var rf__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf));
return ((function (dq,xform,rf__$1){
return (function() {
var G__19459 = null;
var G__19459__0 = (function (){
return (rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null));
});
var G__19459__1 = (function (acc){
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(acc) : rf__$1.call(null,acc));
});
var G__19459__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
var G__18899 = acc;
var G__18900 = dq.dequeue();
return (rf__$1.cljs$core$IFn$_invoke$arity$2 ? rf__$1.cljs$core$IFn$_invoke$arity$2(G__18899,G__18900) : rf__$1.call(null,G__18899,G__18900));
} else {
return acc;
}
});
G__19459 = function(acc,x){
switch(arguments.length){
case 0:
return G__19459__0.call(this);
case 1:
return G__19459__1.call(this,acc);
case 2:
return G__19459__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19459.cljs$core$IFn$_invoke$arity$0 = G__19459__0;
G__19459.cljs$core$IFn$_invoke$arity$1 = G__19459__1;
G__19459.cljs$core$IFn$_invoke$arity$2 = G__19459__2;
return G__19459;
})()
;})(dq,xform,rf__$1))
});
});

net.cgrand.xforms.drop_last.cljs$lang$maxFixedArity = 1;


net.cgrand.xforms.sort = (function net$cgrand$xforms$sort(var_args){
var G__18902 = arguments.length;
switch (G__18902) {
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
var G__19461 = null;
var G__19461__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19461__1 = (function (acc){
var G__18903 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,acc,(function (){var G__18904 = buf;
G__18904.sort(cmp);

return G__18904;
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18903) : rf.call(null,G__18903));
});
var G__19461__2 = (function (acc,x){
buf.push(x);

return acc;
});
G__19461 = function(acc,x){
switch(arguments.length){
case 0:
return G__19461__0.call(this);
case 1:
return G__19461__1.call(this,acc);
case 2:
return G__19461__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19461.cljs$core$IFn$_invoke$arity$0 = G__19461__0;
G__19461.cljs$core$IFn$_invoke$arity$1 = G__19461__1;
G__19461.cljs$core$IFn$_invoke$arity$2 = G__19461__2;
return G__19461;
})()
;})(buf))
});
});

net.cgrand.xforms.sort.cljs$lang$maxFixedArity = 1;


net.cgrand.xforms.sort_by = (function net$cgrand$xforms$sort_by(var_args){
var G__18906 = arguments.length;
switch (G__18906) {
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
var G__18907 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(a) : kfn.call(null,a));
var G__18908 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(b) : kfn.call(null,b));
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__18907,G__18908) : cmp.call(null,G__18907,G__18908));
}));
});

net.cgrand.xforms.sort_by.cljs$lang$maxFixedArity = 2;


/**
 * Transducer version of reductions. There's a difference in behavior when init is not provided: (f) is used.
 * So x/reductions works like x/reduce or transduce, not like reduce and reductions when no init and 1-item input.
 */
net.cgrand.xforms.reductions = (function net$cgrand$xforms$reductions(var_args){
var G__18910 = arguments.length;
switch (G__18910) {
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
var G__19464 = null;
var G__19464__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19464__1 = (function (acc){
if((cljs.core.deref(prev) === prev)){
var G__18911 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,init) : rf.call(null,acc,init)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18911) : rf.call(null,G__18911));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}
});
var G__19464__2 = (function (acc,x){
while(true){
if((cljs.core.deref(prev) === prev)){
var acc__$1 = (function (){var G__18912 = acc;
var G__18913 = cljs.core.vreset_BANG_(prev,init);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__18912,G__18913) : rf.call(null,G__18912,G__18913));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return acc__$1;
} else {
var G__19465 = acc__$1;
var G__19466 = x;
acc = G__19465;
x = G__19466;
continue;
}
} else {
var curr = prev.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__18914 = prev.cljs$core$IDeref$_deref$arity$1(null);
var G__18915 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18914,G__18915) : f.call(null,G__18914,G__18915));
})());
if(cljs.core.reduced_QMARK_(curr)){
return cljs.core.ensure_reduced((function (){var G__18916 = acc;
var G__18917 = cljs.core.deref(curr);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__18916,G__18917) : rf.call(null,G__18916,G__18917));
})());
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,curr) : rf.call(null,acc,curr));
}
}
break;
}
});
G__19464 = function(acc,x){
switch(arguments.length){
case 0:
return G__19464__0.call(this);
case 1:
return G__19464__1.call(this,acc);
case 2:
return G__19464__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19464.cljs$core$IFn$_invoke$arity$0 = G__19464__0;
G__19464.cljs$core$IFn$_invoke$arity$1 = G__19464__1;
G__19464.cljs$core$IFn$_invoke$arity$2 = G__19464__2;
return G__19464;
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
var G__19467 = null;
var G__19467__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19467__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__19467__2 = (function (acc,x){
var i = cljs.core.deref(vi);
var wacc = cljs.core.deref(vwacc);
if((i < (0))){
(ring[(n + i)] = x);

cljs.core.vreset_BANG_(vi,(i + (1)));

var G__18918 = acc;
var G__18919 = (function (){var G__18920 = cljs.core.vreset_BANG_(vwacc,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(wacc,x) : f.call(null,wacc,x)));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18920) : f.call(null,G__18920));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__18918,G__18919) : rf.call(null,G__18918,G__18919));
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

var G__18921 = acc;
var G__18922 = (function (){var G__18923 = cljs.core.vreset_BANG_(vwacc,(function (){var G__18924 = (invf.cljs$core$IFn$_invoke$arity$2 ? invf.cljs$core$IFn$_invoke$arity$2(wacc,x_SINGLEQUOTE_) : invf.call(null,wacc,x_SINGLEQUOTE_));
var G__18925 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18924,G__18925) : f.call(null,G__18924,G__18925));
})());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18923) : f.call(null,G__18923));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__18921,G__18922) : rf.call(null,G__18921,G__18922));
}
});
G__19467 = function(acc,x){
switch(arguments.length){
case 0:
return G__19467__0.call(this);
case 1:
return G__19467__1.call(this,acc);
case 2:
return G__19467__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19467.cljs$core$IFn$_invoke$arity$0 = G__19467__0;
G__19467.cljs$core$IFn$_invoke$arity$1 = G__19467__1;
G__19467.cljs$core$IFn$_invoke$arity$2 = G__19467__2;
return G__19467;
})()
;})(ring,vi,vwacc))
});
});

/**
 * Count the number of items. Either used directly as a transducer or invoked with two args
 * as a transducing context.
 */
net.cgrand.xforms.count = (function net$cgrand$xforms$count(var_args){
var G__18927 = arguments.length;
switch (G__18927) {
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
var G__19469 = null;
var G__19469__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19469__1 = (function (acc){
var G__18928 = cljs.core.unreduced((function (){var G__18929 = acc;
var G__18930 = cljs.core.deref(n);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__18929,G__18930) : rf.call(null,G__18929,G__18930));
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18928) : rf.call(null,G__18928));
});
var G__19469__2 = (function (acc,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc);

return acc;
});
G__19469 = function(acc,_){
switch(arguments.length){
case 0:
return G__19469__0.call(this);
case 1:
return G__19469__1.call(this,acc);
case 2:
return G__19469__2.call(this,acc,_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19469.cljs$core$IFn$_invoke$arity$0 = G__19469__0;
G__19469.cljs$core$IFn$_invoke$arity$1 = G__19469__1;
G__19469.cljs$core$IFn$_invoke$arity$2 = G__19469__2;
return G__19469;
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
return (function (rf18931){
var rf18931__$1 = net.cgrand.xforms.ensure_kvrf(rf18931);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18934 = (function (xforms,rf,mrf,rf18931,meta18935){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rf18931 = rf18931;
this.meta18935 = meta18935;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf18931__$1,mrf){
return (function (_18936,meta18935__$1){
var self__ = this;
var _18936__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18934(self__.xforms,self__.rf,self__.mrf,self__.rf18931,meta18935__$1));
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf18931__$1,mrf){
return (function (_18936){
var self__ = this;
var _18936__$1 = this;
return self__.meta18935;
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf18931__$1,mrf){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.call = ((function (rf18931__$1,mrf){
return (function() {
var G__19470 = null;
var G__19470__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18933 = self____$1;
return (self__.rf18931.cljs$core$IFn$_invoke$arity$0 ? self__.rf18931.cljs$core$IFn$_invoke$arity$0() : self__.rf18931.call(null));
});
var G__19470__2 = (function (self__,acc18932){
var self__ = this;
var self____$1 = this;
var _18933 = self____$1;
return (self__.rf18931.cljs$core$IFn$_invoke$arity$1 ? self__.rf18931.cljs$core$IFn$_invoke$arity$1(acc18932) : self__.rf18931.call(null,acc18932));
});
var G__19470__3 = (function (self__,acc18932,p__18938){
var self__ = this;
var vec__18949 = p__18938;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18949,(0),null);
var xform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18949,(1),null);
var self____$1 = this;
var _18933 = self____$1;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (rf18952){
var rf18952__$1 = net.cgrand.xforms.ensure_kvrf(rf18952);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18955 = (function (self__,p__18938,mrf,xform,meta18935,rf,vec__18949,acc18932,rf18952,k,rf18931,xforms,_18933,meta18956){
this.self__ = self__;
this.p__18938 = p__18938;
this.mrf = mrf;
this.xform = xform;
this.meta18935 = meta18935;
this.rf = rf;
this.vec__18949 = vec__18949;
this.acc18932 = acc18932;
this.rf18952 = rf18952;
this.k = k;
this.rf18931 = rf18931;
this.xforms = xforms;
this._18933 = _18933;
this.meta18956 = meta18956;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (_18957,meta18956__$1){
var self__ = this;
var _18957__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18955(self__.self__,self__.p__18938,self__.mrf,self__.xform,self__.meta18935,self__.rf,self__.vec__18949,self__.acc18932,self__.rf18952,self__.k,self__.rf18931,self__.xforms,self__._18933,meta18956__$1));
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (_18957){
var self__ = this;
var _18957__$1 = this;
return self__.meta18956;
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.call = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function() {
var G__19471 = null;
var G__19471__1 = (function (self____$1){
var self__ = this;
var self____$2 = this;
var _18954 = self____$2;
return (self__.rf18952.cljs$core$IFn$_invoke$arity$0 ? self__.rf18952.cljs$core$IFn$_invoke$arity$0() : self__.rf18952.call(null));
});
var G__19471__2 = (function (self____$1,acc18953){
var self__ = this;
var self____$2 = this;
var _18954 = self____$2;
return (self__.rf18952.cljs$core$IFn$_invoke$arity$1 ? self__.rf18952.cljs$core$IFn$_invoke$arity$1(acc18953) : self__.rf18952.call(null,acc18953));
});
var G__19471__3 = (function (self____$1,acc18953,x){
var self__ = this;
var self____$2 = this;
var _18954 = self____$2;
var acc__18284__auto__ = (self__.rf18952.cljs$core$IFn$_invoke$arity$3 ? self__.rf18952.cljs$core$IFn$_invoke$arity$3(acc18953,self__.k,x) : self__.rf18952.call(null,acc18953,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
var G__19471__4 = (function (self____$1,acc18953,k__18285__auto__,v__18286__auto__){
var self__ = this;
var self____$2 = this;
var _18954 = self____$2;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18952.cljs$core$IFn$_invoke$arity$3 ? self__.rf18952.cljs$core$IFn$_invoke$arity$3(acc18953,self__.k,x) : self__.rf18952.call(null,acc18953,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
G__19471 = function(self____$1,acc18953,k__18285__auto__,v__18286__auto__){
switch(arguments.length){
case 1:
return G__19471__1.call(this,self____$1);
case 2:
return G__19471__2.call(this,self____$1,acc18953);
case 3:
return G__19471__3.call(this,self____$1,acc18953,k__18285__auto__);
case 4:
return G__19471__4.call(this,self____$1,acc18953,k__18285__auto__,v__18286__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19471.cljs$core$IFn$_invoke$arity$1 = G__19471__1;
G__19471.cljs$core$IFn$_invoke$arity$2 = G__19471__2;
G__19471.cljs$core$IFn$_invoke$arity$3 = G__19471__3;
G__19471.cljs$core$IFn$_invoke$arity$4 = G__19471__4;
return G__19471;
})()
;})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.apply = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (self____$1,args18958){
var self__ = this;
var self____$2 = this;
return self____$2.call.apply(self____$2,[self____$2].concat(cljs.core.aclone(args18958)));
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (acc18953,k__18285__auto__,v__18286__auto__){
var self__ = this;
var _18954 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18952.cljs$core$IFn$_invoke$arity$3 ? self__.rf18952.cljs$core$IFn$_invoke$arity$3(acc18953,self__.k,x) : self__.rf18952.call(null,acc18953,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (){
var self__ = this;
var _18954 = this;
return (self__.rf18952.cljs$core$IFn$_invoke$arity$0 ? self__.rf18952.cljs$core$IFn$_invoke$arity$0() : self__.rf18952.call(null));
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (acc18953){
var self__ = this;
var _18954 = this;
return (self__.rf18952.cljs$core$IFn$_invoke$arity$1 ? self__.rf18952.cljs$core$IFn$_invoke$arity$1(acc18953) : self__.rf18952.call(null,acc18953));
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (acc18953,x){
var self__ = this;
var _18954 = this;
var acc__18284__auto__ = (self__.rf18952.cljs$core$IFn$_invoke$arity$3 ? self__.rf18952.cljs$core$IFn$_invoke$arity$3(acc18953,self__.k,x) : self__.rf18952.call(null,acc18953,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.getBasis = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms18934","net.cgrand.xforms/t_net$cgrand$xforms18934",1134019370,null)], null)),new cljs.core.Symbol(null,"p__18938","p__18938",-194882366,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"meta18935","meta18935",1760088968,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"vec__18949","vec__18949",-370666932,null),new cljs.core.Symbol(null,"acc18932","acc18932",1708786674,null),new cljs.core.Symbol(null,"rf18952","rf18952",1125034517,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"rf18931","rf18931",-102800265,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"_18933","_18933",-814844930,null),new cljs.core.Symbol(null,"meta18956","meta18956",-1269939248,null)], null);
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18955.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18955.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18955";

net.cgrand.xforms.t_net$cgrand$xforms18955.cljs$lang$ctorPrWriter = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18955");
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18955.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18955 = ((function (rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms18955(self____$2,p__18938__$1,mrf__$1,xform__$1,meta18935__$1,rf__$1,vec__18949__$1,acc18932__$1,rf18952__$2,k__$1,rf18931__$1,xforms__$1,_18933__$1,meta18956){
return (new net.cgrand.xforms.t_net$cgrand$xforms18955(self____$2,p__18938__$1,mrf__$1,xform__$1,meta18935__$1,rf__$1,vec__18949__$1,acc18932__$1,rf18952__$2,k__$1,rf18931__$1,xforms__$1,_18933__$1,meta18956));
});})(rf18952__$1,_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18955(self____$1,p__18938,self__.mrf,xform,self__.meta18935,self__.rf,vec__18949,acc18932,rf18952__$1,k,self__.rf18931,self__.xforms,_18933,null));
});})(_18933,self____$1,vec__18949,k,xform,rf18931__$1,mrf))
);
var acc__18284__auto__ = (function (){var G__18959 = acc18932;
var G__18960 = k;
var G__18961 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf18931.cljs$core$IFn$_invoke$arity$3 ? self__.rf18931.cljs$core$IFn$_invoke$arity$3(G__18959,G__18960,G__18961) : self__.rf18931.call(null,G__18959,G__18960,G__18961));
})();
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
var G__19470__4 = (function (self__,acc18932,k,xform){
var self__ = this;
var self____$1 = this;
var _18933 = self____$1;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_18933,self____$1,rf18931__$1,mrf){
return (function (rf18939){
var rf18939__$1 = net.cgrand.xforms.ensure_kvrf(rf18939);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18942 = (function (self__,mrf,xform,meta18935,rf,rf18939,acc18932,k,rf18931,xforms,_18933,meta18943){
this.self__ = self__;
this.mrf = mrf;
this.xform = xform;
this.meta18935 = meta18935;
this.rf = rf;
this.rf18939 = rf18939;
this.acc18932 = acc18932;
this.k = k;
this.rf18931 = rf18931;
this.xforms = xforms;
this._18933 = _18933;
this.meta18943 = meta18943;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (_18944,meta18943__$1){
var self__ = this;
var _18944__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18942(self__.self__,self__.mrf,self__.xform,self__.meta18935,self__.rf,self__.rf18939,self__.acc18932,self__.k,self__.rf18931,self__.xforms,self__._18933,meta18943__$1));
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (_18944){
var self__ = this;
var _18944__$1 = this;
return self__.meta18943;
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.call = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function() {
var G__19472 = null;
var G__19472__1 = (function (self____$1){
var self__ = this;
var self____$2 = this;
var _18941 = self____$2;
return (self__.rf18939.cljs$core$IFn$_invoke$arity$0 ? self__.rf18939.cljs$core$IFn$_invoke$arity$0() : self__.rf18939.call(null));
});
var G__19472__2 = (function (self____$1,acc18940){
var self__ = this;
var self____$2 = this;
var _18941 = self____$2;
return (self__.rf18939.cljs$core$IFn$_invoke$arity$1 ? self__.rf18939.cljs$core$IFn$_invoke$arity$1(acc18940) : self__.rf18939.call(null,acc18940));
});
var G__19472__3 = (function (self____$1,acc18940,x){
var self__ = this;
var self____$2 = this;
var _18941 = self____$2;
var acc__18284__auto__ = (self__.rf18939.cljs$core$IFn$_invoke$arity$3 ? self__.rf18939.cljs$core$IFn$_invoke$arity$3(acc18940,self__.k,x) : self__.rf18939.call(null,acc18940,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
var G__19472__4 = (function (self____$1,acc18940,k__18285__auto__,v__18286__auto__){
var self__ = this;
var self____$2 = this;
var _18941 = self____$2;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18939.cljs$core$IFn$_invoke$arity$3 ? self__.rf18939.cljs$core$IFn$_invoke$arity$3(acc18940,self__.k,x) : self__.rf18939.call(null,acc18940,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
G__19472 = function(self____$1,acc18940,k__18285__auto__,v__18286__auto__){
switch(arguments.length){
case 1:
return G__19472__1.call(this,self____$1);
case 2:
return G__19472__2.call(this,self____$1,acc18940);
case 3:
return G__19472__3.call(this,self____$1,acc18940,k__18285__auto__);
case 4:
return G__19472__4.call(this,self____$1,acc18940,k__18285__auto__,v__18286__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19472.cljs$core$IFn$_invoke$arity$1 = G__19472__1;
G__19472.cljs$core$IFn$_invoke$arity$2 = G__19472__2;
G__19472.cljs$core$IFn$_invoke$arity$3 = G__19472__3;
G__19472.cljs$core$IFn$_invoke$arity$4 = G__19472__4;
return G__19472;
})()
;})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.apply = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (self____$1,args18945){
var self__ = this;
var self____$2 = this;
return self____$2.call.apply(self____$2,[self____$2].concat(cljs.core.aclone(args18945)));
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (acc18940,k__18285__auto__,v__18286__auto__){
var self__ = this;
var _18941 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18939.cljs$core$IFn$_invoke$arity$3 ? self__.rf18939.cljs$core$IFn$_invoke$arity$3(acc18940,self__.k,x) : self__.rf18939.call(null,acc18940,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (){
var self__ = this;
var _18941 = this;
return (self__.rf18939.cljs$core$IFn$_invoke$arity$0 ? self__.rf18939.cljs$core$IFn$_invoke$arity$0() : self__.rf18939.call(null));
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (acc18940){
var self__ = this;
var _18941 = this;
return (self__.rf18939.cljs$core$IFn$_invoke$arity$1 ? self__.rf18939.cljs$core$IFn$_invoke$arity$1(acc18940) : self__.rf18939.call(null,acc18940));
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (acc18940,x){
var self__ = this;
var _18941 = this;
var acc__18284__auto__ = (self__.rf18939.cljs$core$IFn$_invoke$arity$3 ? self__.rf18939.cljs$core$IFn$_invoke$arity$3(acc18940,self__.k,x) : self__.rf18939.call(null,acc18940,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.getBasis = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms18934","net.cgrand.xforms/t_net$cgrand$xforms18934",1134019370,null)], null)),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"meta18935","meta18935",1760088968,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"rf18939","rf18939",-987783411,null),new cljs.core.Symbol(null,"acc18932","acc18932",1708786674,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"rf18931","rf18931",-102800265,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"_18933","_18933",-814844930,null),new cljs.core.Symbol(null,"meta18943","meta18943",544768889,null)], null);
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18942.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18942.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18942";

net.cgrand.xforms.t_net$cgrand$xforms18942.cljs$lang$ctorPrWriter = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18942");
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18942.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18942 = ((function (rf18939__$1,_18933,self____$1,rf18931__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms18942(self____$2,mrf__$1,xform__$1,meta18935__$1,rf__$1,rf18939__$2,acc18932__$1,k__$1,rf18931__$1,xforms__$1,_18933__$1,meta18943){
return (new net.cgrand.xforms.t_net$cgrand$xforms18942(self____$2,mrf__$1,xform__$1,meta18935__$1,rf__$1,rf18939__$2,acc18932__$1,k__$1,rf18931__$1,xforms__$1,_18933__$1,meta18943));
});})(rf18939__$1,_18933,self____$1,rf18931__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18942(self____$1,self__.mrf,xform,self__.meta18935,self__.rf,rf18939__$1,acc18932,k,self__.rf18931,self__.xforms,_18933,null));
});})(_18933,self____$1,rf18931__$1,mrf))
);
var acc__18284__auto__ = (function (){var G__18946 = acc18932;
var G__18947 = k;
var G__18948 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf18931.cljs$core$IFn$_invoke$arity$3 ? self__.rf18931.cljs$core$IFn$_invoke$arity$3(G__18946,G__18947,G__18948) : self__.rf18931.call(null,G__18946,G__18947,G__18948));
})();
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
G__19470 = function(self__,acc18932,k,xform){
switch(arguments.length){
case 1:
return G__19470__1.call(this,self__);
case 2:
return G__19470__2.call(this,self__,acc18932);
case 3:
return G__19470__3.call(this,self__,acc18932,k);
case 4:
return G__19470__4.call(this,self__,acc18932,k,xform);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19470.cljs$core$IFn$_invoke$arity$1 = G__19470__1;
G__19470.cljs$core$IFn$_invoke$arity$2 = G__19470__2;
G__19470.cljs$core$IFn$_invoke$arity$3 = G__19470__3;
G__19470.cljs$core$IFn$_invoke$arity$4 = G__19470__4;
return G__19470;
})()
;})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.apply = ((function (rf18931__$1,mrf){
return (function (self__,args18937){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18937)));
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf18931__$1,mrf){
return (function (acc18932,k,xform){
var self__ = this;
var _18933 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_18933,rf18931__$1,mrf){
return (function (rf18962){
var rf18962__$1 = net.cgrand.xforms.ensure_kvrf(rf18962);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18965 = (function (mrf,xform,meta18935,rf,rf18962,acc18932,k,rf18931,xforms,_18933,meta18966){
this.mrf = mrf;
this.xform = xform;
this.meta18935 = meta18935;
this.rf = rf;
this.rf18962 = rf18962;
this.acc18932 = acc18932;
this.k = k;
this.rf18931 = rf18931;
this.xforms = xforms;
this._18933 = _18933;
this.meta18966 = meta18966;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (_18967,meta18966__$1){
var self__ = this;
var _18967__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18965(self__.mrf,self__.xform,self__.meta18935,self__.rf,self__.rf18962,self__.acc18932,self__.k,self__.rf18931,self__.xforms,self__._18933,meta18966__$1));
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (_18967){
var self__ = this;
var _18967__$1 = this;
return self__.meta18966;
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.call = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function() {
var G__19473 = null;
var G__19473__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18964 = self____$1;
return (self__.rf18962.cljs$core$IFn$_invoke$arity$0 ? self__.rf18962.cljs$core$IFn$_invoke$arity$0() : self__.rf18962.call(null));
});
var G__19473__2 = (function (self__,acc18963){
var self__ = this;
var self____$1 = this;
var _18964 = self____$1;
return (self__.rf18962.cljs$core$IFn$_invoke$arity$1 ? self__.rf18962.cljs$core$IFn$_invoke$arity$1(acc18963) : self__.rf18962.call(null,acc18963));
});
var G__19473__3 = (function (self__,acc18963,x){
var self__ = this;
var self____$1 = this;
var _18964 = self____$1;
var acc__18284__auto__ = (self__.rf18962.cljs$core$IFn$_invoke$arity$3 ? self__.rf18962.cljs$core$IFn$_invoke$arity$3(acc18963,self__.k,x) : self__.rf18962.call(null,acc18963,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
var G__19473__4 = (function (self__,acc18963,k__18285__auto__,v__18286__auto__){
var self__ = this;
var self____$1 = this;
var _18964 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18962.cljs$core$IFn$_invoke$arity$3 ? self__.rf18962.cljs$core$IFn$_invoke$arity$3(acc18963,self__.k,x) : self__.rf18962.call(null,acc18963,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
G__19473 = function(self__,acc18963,k__18285__auto__,v__18286__auto__){
switch(arguments.length){
case 1:
return G__19473__1.call(this,self__);
case 2:
return G__19473__2.call(this,self__,acc18963);
case 3:
return G__19473__3.call(this,self__,acc18963,k__18285__auto__);
case 4:
return G__19473__4.call(this,self__,acc18963,k__18285__auto__,v__18286__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19473.cljs$core$IFn$_invoke$arity$1 = G__19473__1;
G__19473.cljs$core$IFn$_invoke$arity$2 = G__19473__2;
G__19473.cljs$core$IFn$_invoke$arity$3 = G__19473__3;
G__19473.cljs$core$IFn$_invoke$arity$4 = G__19473__4;
return G__19473;
})()
;})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.apply = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (self__,args18968){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18968)));
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (acc18963,k__18285__auto__,v__18286__auto__){
var self__ = this;
var _18964 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18962.cljs$core$IFn$_invoke$arity$3 ? self__.rf18962.cljs$core$IFn$_invoke$arity$3(acc18963,self__.k,x) : self__.rf18962.call(null,acc18963,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (){
var self__ = this;
var _18964 = this;
return (self__.rf18962.cljs$core$IFn$_invoke$arity$0 ? self__.rf18962.cljs$core$IFn$_invoke$arity$0() : self__.rf18962.call(null));
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (acc18963){
var self__ = this;
var _18964 = this;
return (self__.rf18962.cljs$core$IFn$_invoke$arity$1 ? self__.rf18962.cljs$core$IFn$_invoke$arity$1(acc18963) : self__.rf18962.call(null,acc18963));
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (acc18963,x){
var self__ = this;
var _18964 = this;
var acc__18284__auto__ = (self__.rf18962.cljs$core$IFn$_invoke$arity$3 ? self__.rf18962.cljs$core$IFn$_invoke$arity$3(acc18963,self__.k,x) : self__.rf18962.call(null,acc18963,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.getBasis = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"meta18935","meta18935",1760088968,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"rf18962","rf18962",-1469940118,null),new cljs.core.Symbol(null,"acc18932","acc18932",1708786674,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"rf18931","rf18931",-102800265,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_18933","_18933",-814844930,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms18934","net.cgrand.xforms/t_net$cgrand$xforms18934",1134019370,null)], null)),new cljs.core.Symbol(null,"meta18966","meta18966",-997551859,null)], null);
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18965.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18965.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18965";

net.cgrand.xforms.t_net$cgrand$xforms18965.cljs$lang$ctorPrWriter = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18965");
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18965.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18965 = ((function (rf18962__$1,_18933,rf18931__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms18965(mrf__$1,xform__$1,meta18935__$1,rf__$1,rf18962__$2,acc18932__$1,k__$1,rf18931__$1,xforms__$1,_18933__$1,meta18966){
return (new net.cgrand.xforms.t_net$cgrand$xforms18965(mrf__$1,xform__$1,meta18935__$1,rf__$1,rf18962__$2,acc18932__$1,k__$1,rf18931__$1,xforms__$1,_18933__$1,meta18966));
});})(rf18962__$1,_18933,rf18931__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18965(self__.mrf,xform,self__.meta18935,self__.rf,rf18962__$1,acc18932,k,self__.rf18931,self__.xforms,_18933,null));
});})(_18933,rf18931__$1,mrf))
);
var acc__18284__auto__ = (function (){var G__18969 = acc18932;
var G__18970 = k;
var G__18971 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf18931.cljs$core$IFn$_invoke$arity$3 ? self__.rf18931.cljs$core$IFn$_invoke$arity$3(G__18969,G__18970,G__18971) : self__.rf18931.call(null,G__18969,G__18970,G__18971));
})();
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf18931__$1,mrf){
return (function (){
var self__ = this;
var _18933 = this;
return (self__.rf18931.cljs$core$IFn$_invoke$arity$0 ? self__.rf18931.cljs$core$IFn$_invoke$arity$0() : self__.rf18931.call(null));
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf18931__$1,mrf){
return (function (acc18932){
var self__ = this;
var _18933 = this;
return (self__.rf18931.cljs$core$IFn$_invoke$arity$1 ? self__.rf18931.cljs$core$IFn$_invoke$arity$1(acc18932) : self__.rf18931.call(null,acc18932));
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf18931__$1,mrf){
return (function (acc18932,p__18972){
var self__ = this;
var vec__18973 = p__18972;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(0),null);
var xform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(1),null);
var _18933 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (rf18976){
var rf18976__$1 = net.cgrand.xforms.ensure_kvrf(rf18976);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18979 = (function (mrf,xform,meta18935,rf,vec__18973,p__18972,acc18932,k,rf18931,rf18976,xforms,_18933,meta18980){
this.mrf = mrf;
this.xform = xform;
this.meta18935 = meta18935;
this.rf = rf;
this.vec__18973 = vec__18973;
this.p__18972 = p__18972;
this.acc18932 = acc18932;
this.k = k;
this.rf18931 = rf18931;
this.rf18976 = rf18976;
this.xforms = xforms;
this._18933 = _18933;
this.meta18980 = meta18980;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (_18981,meta18980__$1){
var self__ = this;
var _18981__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18979(self__.mrf,self__.xform,self__.meta18935,self__.rf,self__.vec__18973,self__.p__18972,self__.acc18932,self__.k,self__.rf18931,self__.rf18976,self__.xforms,self__._18933,meta18980__$1));
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (_18981){
var self__ = this;
var _18981__$1 = this;
return self__.meta18980;
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.call = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function() {
var G__19474 = null;
var G__19474__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18978 = self____$1;
return (self__.rf18976.cljs$core$IFn$_invoke$arity$0 ? self__.rf18976.cljs$core$IFn$_invoke$arity$0() : self__.rf18976.call(null));
});
var G__19474__2 = (function (self__,acc18977){
var self__ = this;
var self____$1 = this;
var _18978 = self____$1;
return (self__.rf18976.cljs$core$IFn$_invoke$arity$1 ? self__.rf18976.cljs$core$IFn$_invoke$arity$1(acc18977) : self__.rf18976.call(null,acc18977));
});
var G__19474__3 = (function (self__,acc18977,x){
var self__ = this;
var self____$1 = this;
var _18978 = self____$1;
var acc__18284__auto__ = (self__.rf18976.cljs$core$IFn$_invoke$arity$3 ? self__.rf18976.cljs$core$IFn$_invoke$arity$3(acc18977,self__.k,x) : self__.rf18976.call(null,acc18977,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
var G__19474__4 = (function (self__,acc18977,k__18285__auto__,v__18286__auto__){
var self__ = this;
var self____$1 = this;
var _18978 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18976.cljs$core$IFn$_invoke$arity$3 ? self__.rf18976.cljs$core$IFn$_invoke$arity$3(acc18977,self__.k,x) : self__.rf18976.call(null,acc18977,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});
G__19474 = function(self__,acc18977,k__18285__auto__,v__18286__auto__){
switch(arguments.length){
case 1:
return G__19474__1.call(this,self__);
case 2:
return G__19474__2.call(this,self__,acc18977);
case 3:
return G__19474__3.call(this,self__,acc18977,k__18285__auto__);
case 4:
return G__19474__4.call(this,self__,acc18977,k__18285__auto__,v__18286__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19474.cljs$core$IFn$_invoke$arity$1 = G__19474__1;
G__19474.cljs$core$IFn$_invoke$arity$2 = G__19474__2;
G__19474.cljs$core$IFn$_invoke$arity$3 = G__19474__3;
G__19474.cljs$core$IFn$_invoke$arity$4 = G__19474__4;
return G__19474;
})()
;})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.apply = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (self__,args18982){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18982)));
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (acc18977,k__18285__auto__,v__18286__auto__){
var self__ = this;
var _18978 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__18285__auto__,v__18286__auto__], null);
var acc__18284__auto__ = (self__.rf18976.cljs$core$IFn$_invoke$arity$3 ? self__.rf18976.cljs$core$IFn$_invoke$arity$3(acc18977,self__.k,x) : self__.rf18976.call(null,acc18977,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (){
var self__ = this;
var _18978 = this;
return (self__.rf18976.cljs$core$IFn$_invoke$arity$0 ? self__.rf18976.cljs$core$IFn$_invoke$arity$0() : self__.rf18976.call(null));
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (acc18977){
var self__ = this;
var _18978 = this;
return (self__.rf18976.cljs$core$IFn$_invoke$arity$1 ? self__.rf18976.cljs$core$IFn$_invoke$arity$1(acc18977) : self__.rf18976.call(null,acc18977));
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (acc18977,x){
var self__ = this;
var _18978 = this;
var acc__18284__auto__ = (self__.rf18976.cljs$core$IFn$_invoke$arity$3 ? self__.rf18976.cljs$core$IFn$_invoke$arity$3(acc18977,self__.k,x) : self__.rf18976.call(null,acc18977,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.getBasis = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"meta18935","meta18935",1760088968,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"vec__18973","vec__18973",-232407316,null),new cljs.core.Symbol(null,"p__18972","p__18972",-567373330,null),new cljs.core.Symbol(null,"acc18932","acc18932",1708786674,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"rf18931","rf18931",-102800265,null),new cljs.core.Symbol(null,"rf18976","rf18976",364226711,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_18933","_18933",-814844930,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms18934","net.cgrand.xforms/t_net$cgrand$xforms18934",1134019370,null)], null)),new cljs.core.Symbol(null,"meta18980","meta18980",-1977224570,null)], null);
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18979.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18979.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18979";

net.cgrand.xforms.t_net$cgrand$xforms18979.cljs$lang$ctorPrWriter = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18979");
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18979.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18979 = ((function (rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms18979(mrf__$1,xform__$1,meta18935__$1,rf__$1,vec__18973__$1,p__18972__$1,acc18932__$1,k__$1,rf18931__$1,rf18976__$2,xforms__$1,_18933__$1,meta18980){
return (new net.cgrand.xforms.t_net$cgrand$xforms18979(mrf__$1,xform__$1,meta18935__$1,rf__$1,vec__18973__$1,p__18972__$1,acc18932__$1,k__$1,rf18931__$1,rf18976__$2,xforms__$1,_18933__$1,meta18980));
});})(rf18976__$1,_18933,vec__18973,k,xform,rf18931__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18979(self__.mrf,xform,self__.meta18935,self__.rf,vec__18973,p__18972,acc18932,k,self__.rf18931,rf18976__$1,self__.xforms,_18933,null));
});})(_18933,vec__18973,k,xform,rf18931__$1,mrf))
);
var acc__18284__auto__ = (function (){var G__18983 = acc18932;
var G__18984 = k;
var G__18985 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf18931.cljs$core$IFn$_invoke$arity$3 ? self__.rf18931.cljs$core$IFn$_invoke$arity$3(G__18983,G__18984,G__18985) : self__.rf18931.call(null,G__18983,G__18984,G__18985));
})();
if(cljs.core.reduced_QMARK_(acc__18284__auto__)){
return acc__18284__auto__;
} else {
return acc__18284__auto__;
}
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.getBasis = ((function (rf18931__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rf18931","rf18931",-102800265,null),new cljs.core.Symbol(null,"meta18935","meta18935",1760088968,null)], null);
});})(rf18931__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms18934.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18934.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18934";

net.cgrand.xforms.t_net$cgrand$xforms18934.cljs$lang$ctorPrWriter = ((function (rf18931__$1,mrf){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18934");
});})(rf18931__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18934.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18934 = ((function (rf18931__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms18934(xforms__$1,rf__$1,mrf__$1,rf18931__$2,meta18935){
return (new net.cgrand.xforms.t_net$cgrand$xforms18934(xforms__$1,rf__$1,mrf__$1,rf18931__$2,meta18935));
});})(rf18931__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18934(xforms,rf,mrf,rf18931__$1,null));
});})(mrf))
,xforms):net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (mrf){
return (function (p1__18729_SHARP_){
return (p1__18729_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18729_SHARP_.cljs$core$IFn$_invoke$arity$1(mrf) : p1__18729_SHARP_.call(null,mrf));
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

var G__18986 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__18986) : rf__$1.call(null,G__18986));
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

var G__18987 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__18987) : rf__$1.call(null,G__18987));
}
} else {
return acc__$2;
}
});})(mrf,rfs))
,acc,cljs.core.deref(rfs));
});})(mrf,rfs))
);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms18989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms18989 = (function (xforms,rf,mrf,rfs,invoke_rfs,meta18990){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rfs = rfs;
this.invoke_rfs = invoke_rfs;
this.meta18990 = meta18990;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mrf,rfs,invoke_rfs){
return (function (_18991,meta18990__$1){
var self__ = this;
var _18991__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms18989(self__.xforms,self__.rf,self__.mrf,self__.rfs,self__.invoke_rfs,meta18990__$1));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (_18991){
var self__ = this;
var _18991__$1 = this;
return self__.meta18990;
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.call = ((function (mrf,rfs,invoke_rfs){
return (function() {
var G__19475 = null;
var G__19475__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _18988 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__19475__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _18988 = self____$1;
var G__18993 = (function (){var G__18994 = acc;
var G__18995 = ((function (G__18994,_18988,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__18730_SHARP_,p2__18731_SHARP_){
return (p1__18730_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18730_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__18731_SHARP_) : p1__18730_SHARP_.call(null,p2__18731_SHARP_));
});})(G__18994,_18988,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__18994,G__18995) : self__.invoke_rfs.call(null,G__18994,G__18995));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__18993) : self__.rf.call(null,G__18993));
});
var G__19475__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _18988 = self____$1;
var acc__$1 = (function (){var G__18996 = acc;
var G__18997 = ((function (G__18996,_18988,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__18732_SHARP_,p2__18733_SHARP_){
return (p1__18732_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__18732_SHARP_.cljs$core$IFn$_invoke$arity$2(p2__18733_SHARP_,x) : p1__18732_SHARP_.call(null,p2__18733_SHARP_,x));
});})(G__18996,_18988,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__18996,G__18997) : self__.invoke_rfs.call(null,G__18996,G__18997));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});
var G__19475__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _18988 = self____$1;
var acc__$1 = (function (){var G__18998 = acc;
var G__18999 = ((function (G__18998,_18988,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__18734_SHARP_,p2__18735_SHARP_){
return (p1__18734_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__18734_SHARP_.cljs$core$IFn$_invoke$arity$3(p2__18735_SHARP_,k,v) : p1__18734_SHARP_.call(null,p2__18735_SHARP_,k,v));
});})(G__18998,_18988,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__18998,G__18999) : self__.invoke_rfs.call(null,G__18998,G__18999));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});
G__19475 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__19475__1.call(this,self__);
case 2:
return G__19475__2.call(this,self__,acc);
case 3:
return G__19475__3.call(this,self__,acc,k);
case 4:
return G__19475__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19475.cljs$core$IFn$_invoke$arity$1 = G__19475__1;
G__19475.cljs$core$IFn$_invoke$arity$2 = G__19475__2;
G__19475.cljs$core$IFn$_invoke$arity$3 = G__19475__3;
G__19475.cljs$core$IFn$_invoke$arity$4 = G__19475__4;
return G__19475;
})()
;})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.apply = ((function (mrf,rfs,invoke_rfs){
return (function (self__,args18992){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18992)));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (mrf,rfs,invoke_rfs){
return (function (){
var self__ = this;
var _18988 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (acc){
var self__ = this;
var _18988 = this;
var G__19000 = (function (){var G__19001 = acc;
var G__19002 = ((function (G__19001,_18988,mrf,rfs,invoke_rfs){
return (function (p1__18730_SHARP_,p2__18731_SHARP_){
return (p1__18730_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18730_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__18731_SHARP_) : p1__18730_SHARP_.call(null,p2__18731_SHARP_));
});})(G__19001,_18988,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__19001,G__19002) : self__.invoke_rfs.call(null,G__19001,G__19002));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__19000) : self__.rf.call(null,G__19000));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (mrf,rfs,invoke_rfs){
return (function (acc,x){
var self__ = this;
var _18988 = this;
var acc__$1 = (function (){var G__19003 = acc;
var G__19004 = ((function (G__19003,_18988,mrf,rfs,invoke_rfs){
return (function (p1__18732_SHARP_,p2__18733_SHARP_){
return (p1__18732_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__18732_SHARP_.cljs$core$IFn$_invoke$arity$2(p2__18733_SHARP_,x) : p1__18732_SHARP_.call(null,p2__18733_SHARP_,x));
});})(G__19003,_18988,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__19003,G__19004) : self__.invoke_rfs.call(null,G__19003,G__19004));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (mrf,rfs,invoke_rfs){
return (function (acc,k,v){
var self__ = this;
var _18988 = this;
var acc__$1 = (function (){var G__19005 = acc;
var G__19006 = ((function (G__19005,_18988,mrf,rfs,invoke_rfs){
return (function (p1__18734_SHARP_,p2__18735_SHARP_){
return (p1__18734_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__18734_SHARP_.cljs$core$IFn$_invoke$arity$3(p2__18735_SHARP_,k,v) : p1__18734_SHARP_.call(null,p2__18735_SHARP_,k,v));
});})(G__19005,_18988,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__19005,G__19006) : self__.invoke_rfs.call(null,G__19005,G__19006));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.getBasis = ((function (mrf,rfs,invoke_rfs){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rfs","rfs",-70956169,null),new cljs.core.Symbol(null,"invoke-rfs","invoke-rfs",1691366545,null),new cljs.core.Symbol(null,"meta18990","meta18990",2006752739,null)], null);
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms18989.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms18989.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms18989";

net.cgrand.xforms.t_net$cgrand$xforms18989.cljs$lang$ctorPrWriter = ((function (mrf,rfs,invoke_rfs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms18989");
});})(mrf,rfs,invoke_rfs))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms18989.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms18989 = ((function (mrf,rfs,invoke_rfs){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms18989(xforms__$1,rf__$1,mrf__$1,rfs__$1,invoke_rfs__$1,meta18990){
return (new net.cgrand.xforms.t_net$cgrand$xforms18989(xforms__$1,rf__$1,mrf__$1,rfs__$1,invoke_rfs__$1,meta18990));
});})(mrf,rfs,invoke_rfs))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms18989(xforms,rf,mrf,rfs,invoke_rfs,null));
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
var G__19008 = arguments.length;
switch (G__19008) {
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
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms19010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms19010 = (function (xforms_map,meta19011){
this.xforms_map = xforms_map;
this.meta19011 = meta19011;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19012,meta19011__$1){
var self__ = this;
var _19012__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms19010(self__.xforms_map,meta19011__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19012){
var self__ = this;
var _19012__$1 = this;
return self__.meta19011;
});

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__18287__auto__){
var self__ = this;
var this__18287__auto____$1 = this;
return this__18287__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.call = (function() {
var G__19477 = null;
var G__19477__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _19009 = self____$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_19009,self____$1){
return (function (v,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,null);
});})(_19009,self____$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.xforms_map)));
});
var G__19477__2 = (function (self__,v){
var self__ = this;
var self____$1 = this;
var _19009 = self____$1;
return cljs.core.persistent_BANG_(v);
});
var G__19477__3 = (function (self__,v,p__19014){
var self__ = this;
var vec__19015 = p__19014;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(1),null);
var self____$1 = this;
var _19009 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});
var G__19477__4 = (function (self__,v,i,x){
var self__ = this;
var self____$1 = this;
var _19009 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});
G__19477 = function(self__,v,i,x){
switch(arguments.length){
case 1:
return G__19477__1.call(this,self__);
case 2:
return G__19477__2.call(this,self__,v);
case 3:
return G__19477__3.call(this,self__,v,i);
case 4:
return G__19477__4.call(this,self__,v,i,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19477.cljs$core$IFn$_invoke$arity$1 = G__19477__1;
G__19477.cljs$core$IFn$_invoke$arity$2 = G__19477__2;
G__19477.cljs$core$IFn$_invoke$arity$3 = G__19477__3;
G__19477.cljs$core$IFn$_invoke$arity$4 = G__19477__4;
return G__19477;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.apply = (function (self__,args19013){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19013)));
});

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.cljs$core$IFn$_invoke$arity$2 = (function (v,p__19018){
var self__ = this;
var vec__19019 = p__19018;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19019,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19019,(1),null);
var _19009 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _19009 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_19009){
return (function (v,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,null);
});})(_19009))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.xforms_map)));
});

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.cljs$core$IFn$_invoke$arity$1 = (function (v){
var self__ = this;
var _19009 = this;
return cljs.core.persistent_BANG_(v);
});

net.cgrand.xforms.t_net$cgrand$xforms19010.prototype.cljs$core$IFn$_invoke$arity$3 = (function (v,i,x){
var self__ = this;
var _19009 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});

net.cgrand.xforms.t_net$cgrand$xforms19010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms-map","xforms-map",-1836515838,null),new cljs.core.Symbol(null,"meta19011","meta19011",-784955089,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms19010.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms19010.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms19010";

net.cgrand.xforms.t_net$cgrand$xforms19010.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"net.cgrand.xforms/t_net$cgrand$xforms19010");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms19010.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms19010 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms19010(xforms_map__$1,meta19011){
return (new net.cgrand.xforms.t_net$cgrand$xforms19010(xforms_map__$1,meta19011));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms19010(xforms_map,null));
})()
));
var xforms_map__$1 = ((cljs.core.map_QMARK_(xforms_map))?xforms_map:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),xforms_map));
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.multiplex(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (collect_xform,xforms_map__$1){
return (function (p1__18736_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(p1__18736_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$1((1)));
});})(collect_xform,xforms_map__$1))
)),xforms_map__$1)),collect_xform);
});

net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$2 = (function (xforms_map,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1(xforms_map),net.cgrand.xforms.rfs.last,coll);
});

net.cgrand.xforms.transjuxt.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=net.cgrand.xforms.js.map
