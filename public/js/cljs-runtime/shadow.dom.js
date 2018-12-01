goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18571 = coll;
var G__18572 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18571,G__18572) : shadow.dom.lazy_native_coll_seq.call(null,G__18571,G__18572));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18640 = arguments.length;
switch (G__18640) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18646 = arguments.length;
switch (G__18646) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18650 = arguments.length;
switch (G__18650) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18662 = arguments.length;
switch (G__18662) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18664 = arguments.length;
switch (G__18664) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__18665 = document;
var G__18666 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18665,G__18666);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18667 = shadow.dom.dom_node(parent);
var G__18668 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18667,G__18668);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18669 = shadow.dom.dom_node(el);
var G__18670 = cls;
return goog.dom.classlist.add(G__18669,G__18670);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18672 = shadow.dom.dom_node(el);
var G__18673 = cls;
return goog.dom.classlist.remove(G__18672,G__18673);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18676 = arguments.length;
switch (G__18676) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__18679 = shadow.dom.dom_node(el);
var G__18680 = cls;
return goog.dom.classlist.toggle(G__18679,G__18680);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18682){if((e18682 instanceof Object)){
var e = e18682;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18682;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18685 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18686 = null;
var count__18687 = (0);
var i__18688 = (0);
while(true){
if((i__18688 < count__18687)){
var el = chunk__18686.cljs$core$IIndexed$_nth$arity$2(null,i__18688);
var handler_19172__$1 = ((function (seq__18685,chunk__18686,count__18687,i__18688,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18685,chunk__18686,count__18687,i__18688,el))
;
var G__18689_19173 = el;
var G__18690_19174 = cljs.core.name(ev);
var G__18691_19175 = handler_19172__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18689_19173,G__18690_19174,G__18691_19175) : shadow.dom.dom_listen.call(null,G__18689_19173,G__18690_19174,G__18691_19175));


var G__19186 = seq__18685;
var G__19187 = chunk__18686;
var G__19188 = count__18687;
var G__19189 = (i__18688 + (1));
seq__18685 = G__19186;
chunk__18686 = G__19187;
count__18687 = G__19188;
i__18688 = G__19189;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18685);
if(temp__5457__auto__){
var seq__18685__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18685__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18685__$1);
var G__19191 = cljs.core.chunk_rest(seq__18685__$1);
var G__19192 = c__4461__auto__;
var G__19193 = cljs.core.count(c__4461__auto__);
var G__19194 = (0);
seq__18685 = G__19191;
chunk__18686 = G__19192;
count__18687 = G__19193;
i__18688 = G__19194;
continue;
} else {
var el = cljs.core.first(seq__18685__$1);
var handler_19195__$1 = ((function (seq__18685,chunk__18686,count__18687,i__18688,el,seq__18685__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18685,chunk__18686,count__18687,i__18688,el,seq__18685__$1,temp__5457__auto__))
;
var G__18698_19196 = el;
var G__18699_19197 = cljs.core.name(ev);
var G__18700_19198 = handler_19195__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18698_19196,G__18699_19197,G__18700_19198) : shadow.dom.dom_listen.call(null,G__18698_19196,G__18699_19197,G__18700_19198));


var G__19199 = cljs.core.next(seq__18685__$1);
var G__19200 = null;
var G__19201 = (0);
var G__19202 = (0);
seq__18685 = G__19199;
chunk__18686 = G__19200;
count__18687 = G__19201;
i__18688 = G__19202;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18738 = arguments.length;
switch (G__18738) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__18742 = shadow.dom.dom_node(el);
var G__18743 = cljs.core.name(ev);
var G__18744 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18742,G__18743,G__18744) : shadow.dom.dom_listen.call(null,G__18742,G__18743,G__18744));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18745 = shadow.dom.dom_node(el);
var G__18746 = cljs.core.name(ev);
var G__18747 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18745,G__18746,G__18747) : shadow.dom.dom_listen_remove.call(null,G__18745,G__18746,G__18747));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18748 = cljs.core.seq(events);
var chunk__18749 = null;
var count__18750 = (0);
var i__18751 = (0);
while(true){
if((i__18751 < count__18750)){
var vec__18752 = chunk__18749.cljs$core$IIndexed$_nth$arity$2(null,i__18751);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18752,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19207 = seq__18748;
var G__19208 = chunk__18749;
var G__19209 = count__18750;
var G__19210 = (i__18751 + (1));
seq__18748 = G__19207;
chunk__18749 = G__19208;
count__18750 = G__19209;
i__18751 = G__19210;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18748);
if(temp__5457__auto__){
var seq__18748__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18748__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18748__$1);
var G__19211 = cljs.core.chunk_rest(seq__18748__$1);
var G__19212 = c__4461__auto__;
var G__19213 = cljs.core.count(c__4461__auto__);
var G__19214 = (0);
seq__18748 = G__19211;
chunk__18749 = G__19212;
count__18750 = G__19213;
i__18751 = G__19214;
continue;
} else {
var vec__18755 = cljs.core.first(seq__18748__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18755,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19215 = cljs.core.next(seq__18748__$1);
var G__19216 = null;
var G__19217 = (0);
var G__19218 = (0);
seq__18748 = G__19215;
chunk__18749 = G__19216;
count__18750 = G__19217;
i__18751 = G__19218;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18758 = cljs.core.seq(styles);
var chunk__18759 = null;
var count__18760 = (0);
var i__18761 = (0);
while(true){
if((i__18761 < count__18760)){
var vec__18762 = chunk__18759.cljs$core$IIndexed$_nth$arity$2(null,i__18761);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(1),null);
var G__18765_19219 = dom;
var G__18766_19220 = cljs.core.name(k);
var G__18767_19221 = (((v == null))?"":v);
goog.style.setStyle(G__18765_19219,G__18766_19220,G__18767_19221);


var G__19222 = seq__18758;
var G__19223 = chunk__18759;
var G__19224 = count__18760;
var G__19225 = (i__18761 + (1));
seq__18758 = G__19222;
chunk__18759 = G__19223;
count__18760 = G__19224;
i__18761 = G__19225;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18758);
if(temp__5457__auto__){
var seq__18758__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18758__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18758__$1);
var G__19226 = cljs.core.chunk_rest(seq__18758__$1);
var G__19227 = c__4461__auto__;
var G__19228 = cljs.core.count(c__4461__auto__);
var G__19229 = (0);
seq__18758 = G__19226;
chunk__18759 = G__19227;
count__18760 = G__19228;
i__18761 = G__19229;
continue;
} else {
var vec__18768 = cljs.core.first(seq__18758__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18768,(1),null);
var G__18771_19230 = dom;
var G__18772_19231 = cljs.core.name(k);
var G__18773_19232 = (((v == null))?"":v);
goog.style.setStyle(G__18771_19230,G__18772_19231,G__18773_19232);


var G__19233 = cljs.core.next(seq__18758__$1);
var G__19234 = null;
var G__19235 = (0);
var G__19236 = (0);
seq__18758 = G__19233;
chunk__18759 = G__19234;
count__18760 = G__19235;
i__18761 = G__19236;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18774_19237 = key;
var G__18774_19238__$1 = (((G__18774_19237 instanceof cljs.core.Keyword))?G__18774_19237.fqn:null);
switch (G__18774_19238__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19241 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_19241,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_19241,"aria-");
}
})())){
el.setAttribute(ks_19241,value);
} else {
(el[ks_19241] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__18775 = shadow.dom.dom_node(el);
var G__18776 = cls;
return goog.dom.classlist.contains(G__18775,G__18776);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18777){
var map__18778 = p__18777;
var map__18778__$1 = (((((!((map__18778 == null))))?(((((map__18778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18778):map__18778);
var props = map__18778__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18778__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18781 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18781,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18781,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18781,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18785 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18785,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18785;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18787 = arguments.length;
switch (G__18787) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18793){
var vec__18795 = p__18793;
var seq__18796 = cljs.core.seq(vec__18795);
var first__18797 = cljs.core.first(seq__18796);
var seq__18796__$1 = cljs.core.next(seq__18796);
var nn = first__18797;
var first__18797__$1 = cljs.core.first(seq__18796__$1);
var seq__18796__$2 = cljs.core.next(seq__18796__$1);
var np = first__18797__$1;
var nc = seq__18796__$2;
var node = vec__18795;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18799 = nn;
var G__18800 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18799,G__18800) : create_fn.call(null,G__18799,G__18800));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18803 = nn;
var G__18804 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18803,G__18804) : create_fn.call(null,G__18803,G__18804));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18806 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(1),null);
var seq__18819_19263 = cljs.core.seq(node_children);
var chunk__18820_19264 = null;
var count__18821_19265 = (0);
var i__18822_19266 = (0);
while(true){
if((i__18822_19266 < count__18821_19265)){
var child_struct_19267 = chunk__18820_19264.cljs$core$IIndexed$_nth$arity$2(null,i__18822_19266);
var children_19268 = shadow.dom.dom_node(child_struct_19267);
if(cljs.core.seq_QMARK_(children_19268)){
var seq__18824_19269 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19268));
var chunk__18826_19270 = null;
var count__18827_19271 = (0);
var i__18828_19272 = (0);
while(true){
if((i__18828_19272 < count__18827_19271)){
var child_19273 = chunk__18826_19270.cljs$core$IIndexed$_nth$arity$2(null,i__18828_19272);
if(cljs.core.truth_(child_19273)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19273);


var G__19276 = seq__18824_19269;
var G__19277 = chunk__18826_19270;
var G__19278 = count__18827_19271;
var G__19279 = (i__18828_19272 + (1));
seq__18824_19269 = G__19276;
chunk__18826_19270 = G__19277;
count__18827_19271 = G__19278;
i__18828_19272 = G__19279;
continue;
} else {
var G__19280 = seq__18824_19269;
var G__19281 = chunk__18826_19270;
var G__19282 = count__18827_19271;
var G__19283 = (i__18828_19272 + (1));
seq__18824_19269 = G__19280;
chunk__18826_19270 = G__19281;
count__18827_19271 = G__19282;
i__18828_19272 = G__19283;
continue;
}
} else {
var temp__5457__auto___19285 = cljs.core.seq(seq__18824_19269);
if(temp__5457__auto___19285){
var seq__18824_19286__$1 = temp__5457__auto___19285;
if(cljs.core.chunked_seq_QMARK_(seq__18824_19286__$1)){
var c__4461__auto___19287 = cljs.core.chunk_first(seq__18824_19286__$1);
var G__19288 = cljs.core.chunk_rest(seq__18824_19286__$1);
var G__19289 = c__4461__auto___19287;
var G__19290 = cljs.core.count(c__4461__auto___19287);
var G__19291 = (0);
seq__18824_19269 = G__19288;
chunk__18826_19270 = G__19289;
count__18827_19271 = G__19290;
i__18828_19272 = G__19291;
continue;
} else {
var child_19293 = cljs.core.first(seq__18824_19286__$1);
if(cljs.core.truth_(child_19293)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19293);


var G__19294 = cljs.core.next(seq__18824_19286__$1);
var G__19295 = null;
var G__19296 = (0);
var G__19297 = (0);
seq__18824_19269 = G__19294;
chunk__18826_19270 = G__19295;
count__18827_19271 = G__19296;
i__18828_19272 = G__19297;
continue;
} else {
var G__19298 = cljs.core.next(seq__18824_19286__$1);
var G__19299 = null;
var G__19300 = (0);
var G__19301 = (0);
seq__18824_19269 = G__19298;
chunk__18826_19270 = G__19299;
count__18827_19271 = G__19300;
i__18828_19272 = G__19301;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19268);
}


var G__19304 = seq__18819_19263;
var G__19305 = chunk__18820_19264;
var G__19306 = count__18821_19265;
var G__19307 = (i__18822_19266 + (1));
seq__18819_19263 = G__19304;
chunk__18820_19264 = G__19305;
count__18821_19265 = G__19306;
i__18822_19266 = G__19307;
continue;
} else {
var temp__5457__auto___19309 = cljs.core.seq(seq__18819_19263);
if(temp__5457__auto___19309){
var seq__18819_19311__$1 = temp__5457__auto___19309;
if(cljs.core.chunked_seq_QMARK_(seq__18819_19311__$1)){
var c__4461__auto___19312 = cljs.core.chunk_first(seq__18819_19311__$1);
var G__19313 = cljs.core.chunk_rest(seq__18819_19311__$1);
var G__19314 = c__4461__auto___19312;
var G__19315 = cljs.core.count(c__4461__auto___19312);
var G__19316 = (0);
seq__18819_19263 = G__19313;
chunk__18820_19264 = G__19314;
count__18821_19265 = G__19315;
i__18822_19266 = G__19316;
continue;
} else {
var child_struct_19317 = cljs.core.first(seq__18819_19311__$1);
var children_19318 = shadow.dom.dom_node(child_struct_19317);
if(cljs.core.seq_QMARK_(children_19318)){
var seq__18832_19319 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19318));
var chunk__18834_19320 = null;
var count__18835_19321 = (0);
var i__18836_19322 = (0);
while(true){
if((i__18836_19322 < count__18835_19321)){
var child_19329 = chunk__18834_19320.cljs$core$IIndexed$_nth$arity$2(null,i__18836_19322);
if(cljs.core.truth_(child_19329)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19329);


var G__19330 = seq__18832_19319;
var G__19332 = chunk__18834_19320;
var G__19333 = count__18835_19321;
var G__19334 = (i__18836_19322 + (1));
seq__18832_19319 = G__19330;
chunk__18834_19320 = G__19332;
count__18835_19321 = G__19333;
i__18836_19322 = G__19334;
continue;
} else {
var G__19336 = seq__18832_19319;
var G__19337 = chunk__18834_19320;
var G__19338 = count__18835_19321;
var G__19339 = (i__18836_19322 + (1));
seq__18832_19319 = G__19336;
chunk__18834_19320 = G__19337;
count__18835_19321 = G__19338;
i__18836_19322 = G__19339;
continue;
}
} else {
var temp__5457__auto___19340__$1 = cljs.core.seq(seq__18832_19319);
if(temp__5457__auto___19340__$1){
var seq__18832_19342__$1 = temp__5457__auto___19340__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18832_19342__$1)){
var c__4461__auto___19343 = cljs.core.chunk_first(seq__18832_19342__$1);
var G__19344 = cljs.core.chunk_rest(seq__18832_19342__$1);
var G__19345 = c__4461__auto___19343;
var G__19346 = cljs.core.count(c__4461__auto___19343);
var G__19347 = (0);
seq__18832_19319 = G__19344;
chunk__18834_19320 = G__19345;
count__18835_19321 = G__19346;
i__18836_19322 = G__19347;
continue;
} else {
var child_19348 = cljs.core.first(seq__18832_19342__$1);
if(cljs.core.truth_(child_19348)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19348);


var G__19349 = cljs.core.next(seq__18832_19342__$1);
var G__19350 = null;
var G__19351 = (0);
var G__19352 = (0);
seq__18832_19319 = G__19349;
chunk__18834_19320 = G__19350;
count__18835_19321 = G__19351;
i__18836_19322 = G__19352;
continue;
} else {
var G__19401 = cljs.core.next(seq__18832_19342__$1);
var G__19402 = null;
var G__19403 = (0);
var G__19404 = (0);
seq__18832_19319 = G__19401;
chunk__18834_19320 = G__19402;
count__18835_19321 = G__19403;
i__18836_19322 = G__19404;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19318);
}


var G__19405 = cljs.core.next(seq__18819_19311__$1);
var G__19406 = null;
var G__19407 = (0);
var G__19408 = (0);
seq__18819_19263 = G__19405;
chunk__18820_19264 = G__19406;
count__18821_19265 = G__19407;
i__18822_19266 = G__19408;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__18846 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18846);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18851 = cljs.core.seq(node);
var chunk__18852 = null;
var count__18853 = (0);
var i__18854 = (0);
while(true){
if((i__18854 < count__18853)){
var n = chunk__18852.cljs$core$IIndexed$_nth$arity$2(null,i__18854);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19413 = seq__18851;
var G__19414 = chunk__18852;
var G__19415 = count__18853;
var G__19416 = (i__18854 + (1));
seq__18851 = G__19413;
chunk__18852 = G__19414;
count__18853 = G__19415;
i__18854 = G__19416;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18851);
if(temp__5457__auto__){
var seq__18851__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18851__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18851__$1);
var G__19417 = cljs.core.chunk_rest(seq__18851__$1);
var G__19418 = c__4461__auto__;
var G__19419 = cljs.core.count(c__4461__auto__);
var G__19420 = (0);
seq__18851 = G__19417;
chunk__18852 = G__19418;
count__18853 = G__19419;
i__18854 = G__19420;
continue;
} else {
var n = cljs.core.first(seq__18851__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19421 = cljs.core.next(seq__18851__$1);
var G__19422 = null;
var G__19423 = (0);
var G__19424 = (0);
seq__18851 = G__19421;
chunk__18852 = G__19422;
count__18853 = G__19423;
i__18854 = G__19424;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__18861 = shadow.dom.dom_node(new$);
var G__18862 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18861,G__18862);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18865 = arguments.length;
switch (G__18865) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18869 = arguments.length;
switch (G__18869) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18880 = arguments.length;
switch (G__18880) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19430 = arguments.length;
var i__4642__auto___19431 = (0);
while(true){
if((i__4642__auto___19431 < len__4641__auto___19430)){
args__4647__auto__.push((arguments[i__4642__auto___19431]));

var G__19433 = (i__4642__auto___19431 + (1));
i__4642__auto___19431 = G__19433;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18889_19435 = cljs.core.seq(nodes);
var chunk__18890_19436 = null;
var count__18891_19437 = (0);
var i__18892_19438 = (0);
while(true){
if((i__18892_19438 < count__18891_19437)){
var node_19439 = chunk__18890_19436.cljs$core$IIndexed$_nth$arity$2(null,i__18892_19438);
fragment.appendChild(shadow.dom._to_dom(node_19439));


var G__19440 = seq__18889_19435;
var G__19441 = chunk__18890_19436;
var G__19442 = count__18891_19437;
var G__19443 = (i__18892_19438 + (1));
seq__18889_19435 = G__19440;
chunk__18890_19436 = G__19441;
count__18891_19437 = G__19442;
i__18892_19438 = G__19443;
continue;
} else {
var temp__5457__auto___19444 = cljs.core.seq(seq__18889_19435);
if(temp__5457__auto___19444){
var seq__18889_19445__$1 = temp__5457__auto___19444;
if(cljs.core.chunked_seq_QMARK_(seq__18889_19445__$1)){
var c__4461__auto___19446 = cljs.core.chunk_first(seq__18889_19445__$1);
var G__19448 = cljs.core.chunk_rest(seq__18889_19445__$1);
var G__19449 = c__4461__auto___19446;
var G__19450 = cljs.core.count(c__4461__auto___19446);
var G__19451 = (0);
seq__18889_19435 = G__19448;
chunk__18890_19436 = G__19449;
count__18891_19437 = G__19450;
i__18892_19438 = G__19451;
continue;
} else {
var node_19452 = cljs.core.first(seq__18889_19445__$1);
fragment.appendChild(shadow.dom._to_dom(node_19452));


var G__19453 = cljs.core.next(seq__18889_19445__$1);
var G__19454 = null;
var G__19455 = (0);
var G__19456 = (0);
seq__18889_19435 = G__19453;
chunk__18890_19436 = G__19454;
count__18891_19437 = G__19455;
i__18892_19438 = G__19456;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18886){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18886));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18903_19458 = cljs.core.seq(scripts);
var chunk__18904_19459 = null;
var count__18905_19460 = (0);
var i__18906_19461 = (0);
while(true){
if((i__18906_19461 < count__18905_19460)){
var vec__18908_19462 = chunk__18904_19459.cljs$core$IIndexed$_nth$arity$2(null,i__18906_19461);
var script_tag_19463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908_19462,(0),null);
var script_body_19464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908_19462,(1),null);
eval(script_body_19464);


var G__19465 = seq__18903_19458;
var G__19466 = chunk__18904_19459;
var G__19467 = count__18905_19460;
var G__19468 = (i__18906_19461 + (1));
seq__18903_19458 = G__19465;
chunk__18904_19459 = G__19466;
count__18905_19460 = G__19467;
i__18906_19461 = G__19468;
continue;
} else {
var temp__5457__auto___19470 = cljs.core.seq(seq__18903_19458);
if(temp__5457__auto___19470){
var seq__18903_19472__$1 = temp__5457__auto___19470;
if(cljs.core.chunked_seq_QMARK_(seq__18903_19472__$1)){
var c__4461__auto___19473 = cljs.core.chunk_first(seq__18903_19472__$1);
var G__19474 = cljs.core.chunk_rest(seq__18903_19472__$1);
var G__19475 = c__4461__auto___19473;
var G__19476 = cljs.core.count(c__4461__auto___19473);
var G__19477 = (0);
seq__18903_19458 = G__19474;
chunk__18904_19459 = G__19475;
count__18905_19460 = G__19476;
i__18906_19461 = G__19477;
continue;
} else {
var vec__18912_19478 = cljs.core.first(seq__18903_19472__$1);
var script_tag_19479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912_19478,(0),null);
var script_body_19480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912_19478,(1),null);
eval(script_body_19480);


var G__19482 = cljs.core.next(seq__18903_19472__$1);
var G__19483 = null;
var G__19484 = (0);
var G__19485 = (0);
seq__18903_19458 = G__19482;
chunk__18904_19459 = G__19483;
count__18905_19460 = G__19484;
i__18906_19461 = G__19485;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__18915){
var vec__18917 = p__18915;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18917,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18917,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__18921 = shadow.dom.dom_node(el);
var G__18922 = cls;
return goog.dom.getAncestorByClass(G__18921,G__18922);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18924 = arguments.length;
switch (G__18924) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__18925 = shadow.dom.dom_node(el);
var G__18926 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__18925,G__18926);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__18927 = shadow.dom.dom_node(el);
var G__18928 = cljs.core.name(tag);
var G__18929 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__18927,G__18928,G__18929);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__18930 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__18930);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__18931 = shadow.dom.dom_node(dom);
var G__18932 = value;
return goog.dom.forms.setValue(G__18931,G__18932);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18935 = cljs.core.seq(style_keys);
var chunk__18936 = null;
var count__18937 = (0);
var i__18938 = (0);
while(true){
if((i__18938 < count__18937)){
var it = chunk__18936.cljs$core$IIndexed$_nth$arity$2(null,i__18938);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19492 = seq__18935;
var G__19493 = chunk__18936;
var G__19494 = count__18937;
var G__19495 = (i__18938 + (1));
seq__18935 = G__19492;
chunk__18936 = G__19493;
count__18937 = G__19494;
i__18938 = G__19495;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18935);
if(temp__5457__auto__){
var seq__18935__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18935__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18935__$1);
var G__19497 = cljs.core.chunk_rest(seq__18935__$1);
var G__19498 = c__4461__auto__;
var G__19499 = cljs.core.count(c__4461__auto__);
var G__19500 = (0);
seq__18935 = G__19497;
chunk__18936 = G__19498;
count__18937 = G__19499;
i__18938 = G__19500;
continue;
} else {
var it = cljs.core.first(seq__18935__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19501 = cljs.core.next(seq__18935__$1);
var G__19502 = null;
var G__19503 = (0);
var G__19504 = (0);
seq__18935 = G__19501;
chunk__18936 = G__19502;
count__18937 = G__19503;
i__18938 = G__19504;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k18943,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__18950 = k18943;
var G__18950__$1 = (((G__18950 instanceof cljs.core.Keyword))?G__18950.fqn:null);
switch (G__18950__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18943,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__18954){
var vec__18955 = p__18954;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18942){
var self__ = this;
var G__18942__$1 = this;
return (new cljs.core.RecordIter((0),G__18942__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__18965 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__18965(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18944,other18945){
var self__ = this;
var this18944__$1 = this;
return (((!((other18945 == null)))) && ((this18944__$1.constructor === other18945.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18944__$1.x,other18945.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18944__$1.y,other18945.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18944__$1.__extmap,other18945.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__18942){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__18971 = cljs.core.keyword_identical_QMARK_;
var expr__18972 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__18975 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__18976 = expr__18972;
return (pred__18971.cljs$core$IFn$_invoke$arity$2 ? pred__18971.cljs$core$IFn$_invoke$arity$2(G__18975,G__18976) : pred__18971.call(null,G__18975,G__18976));
})())){
return (new shadow.dom.Coordinate(G__18942,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18977 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__18978 = expr__18972;
return (pred__18971.cljs$core$IFn$_invoke$arity$2 ? pred__18971.cljs$core$IFn$_invoke$arity$2(G__18977,G__18978) : pred__18971.call(null,G__18977,G__18978));
})())){
return (new shadow.dom.Coordinate(self__.x,G__18942,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__18942),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__18942){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18942,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18948){
var extmap__4340__auto__ = (function (){var G__18996 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18948,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18948)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18996);
} else {
return G__18996;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18948),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18948),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__19000 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__19000);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__19004 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__19004);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__19006 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__19006);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k19010,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__19019 = k19010;
var G__19019__$1 = (((G__19019 instanceof cljs.core.Keyword))?G__19019.fqn:null);
switch (G__19019__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19010,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__19021){
var vec__19022 = p__19021;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19022,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19022,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19009){
var self__ = this;
var G__19009__$1 = this;
return (new cljs.core.RecordIter((0),G__19009__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__19027 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__19027(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19012,other19013){
var self__ = this;
var this19012__$1 = this;
return (((!((other19013 == null)))) && ((this19012__$1.constructor === other19013.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19012__$1.w,other19013.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19012__$1.h,other19013.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19012__$1.__extmap,other19013.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__19009){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__19028 = cljs.core.keyword_identical_QMARK_;
var expr__19029 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__19031 = new cljs.core.Keyword(null,"w","w",354169001);
var G__19032 = expr__19029;
return (pred__19028.cljs$core$IFn$_invoke$arity$2 ? pred__19028.cljs$core$IFn$_invoke$arity$2(G__19031,G__19032) : pred__19028.call(null,G__19031,G__19032));
})())){
return (new shadow.dom.Size(G__19009,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19033 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__19034 = expr__19029;
return (pred__19028.cljs$core$IFn$_invoke$arity$2 ? pred__19028.cljs$core$IFn$_invoke$arity$2(G__19033,G__19034) : pred__19028.call(null,G__19033,G__19034));
})())){
return (new shadow.dom.Size(self__.w,G__19009,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__19009),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__19009){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19009,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19014){
var extmap__4340__auto__ = (function (){var G__19035 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19014,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19014)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19035);
} else {
return G__19035;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19014),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19014),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__19036 = shadow.dom.dom_node(el);
return goog.style.getSize(G__19036);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__19552 = (i + (1));
var G__19553 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19552;
ret = G__19553;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19040){
var vec__19041 = p__19040;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19048 = arguments.length;
switch (G__19048) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19049_19562 = new_node;
var G__19050_19563 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__19049_19562,G__19050_19563);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19051_19565 = new_node;
var G__19052_19566 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__19051_19565,G__19052_19566);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19567 = ps;
var G__19568 = (i + (1));
el__$1 = G__19567;
i = G__19568;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__19053 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__19053);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__19054 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__19054);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__19055 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__19055);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19056 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19056,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19056,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19056,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19059_19573 = cljs.core.seq(props);
var chunk__19060_19574 = null;
var count__19061_19575 = (0);
var i__19062_19576 = (0);
while(true){
if((i__19062_19576 < count__19061_19575)){
var vec__19063_19578 = chunk__19060_19574.cljs$core$IIndexed$_nth$arity$2(null,i__19062_19576);
var k_19579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19063_19578,(0),null);
var v_19580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19063_19578,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19579);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19579),v_19580);


var G__19586 = seq__19059_19573;
var G__19587 = chunk__19060_19574;
var G__19588 = count__19061_19575;
var G__19589 = (i__19062_19576 + (1));
seq__19059_19573 = G__19586;
chunk__19060_19574 = G__19587;
count__19061_19575 = G__19588;
i__19062_19576 = G__19589;
continue;
} else {
var temp__5457__auto___19590 = cljs.core.seq(seq__19059_19573);
if(temp__5457__auto___19590){
var seq__19059_19591__$1 = temp__5457__auto___19590;
if(cljs.core.chunked_seq_QMARK_(seq__19059_19591__$1)){
var c__4461__auto___19592 = cljs.core.chunk_first(seq__19059_19591__$1);
var G__19593 = cljs.core.chunk_rest(seq__19059_19591__$1);
var G__19594 = c__4461__auto___19592;
var G__19595 = cljs.core.count(c__4461__auto___19592);
var G__19596 = (0);
seq__19059_19573 = G__19593;
chunk__19060_19574 = G__19594;
count__19061_19575 = G__19595;
i__19062_19576 = G__19596;
continue;
} else {
var vec__19066_19597 = cljs.core.first(seq__19059_19591__$1);
var k_19598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19066_19597,(0),null);
var v_19599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19066_19597,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19598);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19598),v_19599);


var G__19602 = cljs.core.next(seq__19059_19591__$1);
var G__19603 = null;
var G__19604 = (0);
var G__19605 = (0);
seq__19059_19573 = G__19602;
chunk__19060_19574 = G__19603;
count__19061_19575 = G__19604;
i__19062_19576 = G__19605;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19070 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19070,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19070,(1),null);
var seq__19073_19621 = cljs.core.seq(node_children);
var chunk__19075_19622 = null;
var count__19076_19623 = (0);
var i__19077_19624 = (0);
while(true){
if((i__19077_19624 < count__19076_19623)){
var child_struct_19625 = chunk__19075_19622.cljs$core$IIndexed$_nth$arity$2(null,i__19077_19624);
if((!((child_struct_19625 == null)))){
if(typeof child_struct_19625 === 'string'){
var text_19626 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19626),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19625)].join(''));
} else {
var children_19627 = shadow.dom.svg_node(child_struct_19625);
if(cljs.core.seq_QMARK_(children_19627)){
var seq__19079_19628 = cljs.core.seq(children_19627);
var chunk__19081_19629 = null;
var count__19082_19630 = (0);
var i__19083_19631 = (0);
while(true){
if((i__19083_19631 < count__19082_19630)){
var child_19632 = chunk__19081_19629.cljs$core$IIndexed$_nth$arity$2(null,i__19083_19631);
if(cljs.core.truth_(child_19632)){
node.appendChild(child_19632);


var G__19633 = seq__19079_19628;
var G__19634 = chunk__19081_19629;
var G__19635 = count__19082_19630;
var G__19636 = (i__19083_19631 + (1));
seq__19079_19628 = G__19633;
chunk__19081_19629 = G__19634;
count__19082_19630 = G__19635;
i__19083_19631 = G__19636;
continue;
} else {
var G__19637 = seq__19079_19628;
var G__19638 = chunk__19081_19629;
var G__19639 = count__19082_19630;
var G__19640 = (i__19083_19631 + (1));
seq__19079_19628 = G__19637;
chunk__19081_19629 = G__19638;
count__19082_19630 = G__19639;
i__19083_19631 = G__19640;
continue;
}
} else {
var temp__5457__auto___19641 = cljs.core.seq(seq__19079_19628);
if(temp__5457__auto___19641){
var seq__19079_19642__$1 = temp__5457__auto___19641;
if(cljs.core.chunked_seq_QMARK_(seq__19079_19642__$1)){
var c__4461__auto___19647 = cljs.core.chunk_first(seq__19079_19642__$1);
var G__19648 = cljs.core.chunk_rest(seq__19079_19642__$1);
var G__19649 = c__4461__auto___19647;
var G__19650 = cljs.core.count(c__4461__auto___19647);
var G__19651 = (0);
seq__19079_19628 = G__19648;
chunk__19081_19629 = G__19649;
count__19082_19630 = G__19650;
i__19083_19631 = G__19651;
continue;
} else {
var child_19652 = cljs.core.first(seq__19079_19642__$1);
if(cljs.core.truth_(child_19652)){
node.appendChild(child_19652);


var G__19653 = cljs.core.next(seq__19079_19642__$1);
var G__19654 = null;
var G__19655 = (0);
var G__19656 = (0);
seq__19079_19628 = G__19653;
chunk__19081_19629 = G__19654;
count__19082_19630 = G__19655;
i__19083_19631 = G__19656;
continue;
} else {
var G__19658 = cljs.core.next(seq__19079_19642__$1);
var G__19659 = null;
var G__19660 = (0);
var G__19661 = (0);
seq__19079_19628 = G__19658;
chunk__19081_19629 = G__19659;
count__19082_19630 = G__19660;
i__19083_19631 = G__19661;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19627);
}
}


var G__19663 = seq__19073_19621;
var G__19664 = chunk__19075_19622;
var G__19665 = count__19076_19623;
var G__19666 = (i__19077_19624 + (1));
seq__19073_19621 = G__19663;
chunk__19075_19622 = G__19664;
count__19076_19623 = G__19665;
i__19077_19624 = G__19666;
continue;
} else {
var G__19667 = seq__19073_19621;
var G__19668 = chunk__19075_19622;
var G__19669 = count__19076_19623;
var G__19670 = (i__19077_19624 + (1));
seq__19073_19621 = G__19667;
chunk__19075_19622 = G__19668;
count__19076_19623 = G__19669;
i__19077_19624 = G__19670;
continue;
}
} else {
var temp__5457__auto___19671 = cljs.core.seq(seq__19073_19621);
if(temp__5457__auto___19671){
var seq__19073_19672__$1 = temp__5457__auto___19671;
if(cljs.core.chunked_seq_QMARK_(seq__19073_19672__$1)){
var c__4461__auto___19673 = cljs.core.chunk_first(seq__19073_19672__$1);
var G__19674 = cljs.core.chunk_rest(seq__19073_19672__$1);
var G__19675 = c__4461__auto___19673;
var G__19676 = cljs.core.count(c__4461__auto___19673);
var G__19677 = (0);
seq__19073_19621 = G__19674;
chunk__19075_19622 = G__19675;
count__19076_19623 = G__19676;
i__19077_19624 = G__19677;
continue;
} else {
var child_struct_19678 = cljs.core.first(seq__19073_19672__$1);
if((!((child_struct_19678 == null)))){
if(typeof child_struct_19678 === 'string'){
var text_19679 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19679),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19678)].join(''));
} else {
var children_19680 = shadow.dom.svg_node(child_struct_19678);
if(cljs.core.seq_QMARK_(children_19680)){
var seq__19085_19682 = cljs.core.seq(children_19680);
var chunk__19087_19683 = null;
var count__19088_19684 = (0);
var i__19089_19685 = (0);
while(true){
if((i__19089_19685 < count__19088_19684)){
var child_19687 = chunk__19087_19683.cljs$core$IIndexed$_nth$arity$2(null,i__19089_19685);
if(cljs.core.truth_(child_19687)){
node.appendChild(child_19687);


var G__19688 = seq__19085_19682;
var G__19689 = chunk__19087_19683;
var G__19690 = count__19088_19684;
var G__19691 = (i__19089_19685 + (1));
seq__19085_19682 = G__19688;
chunk__19087_19683 = G__19689;
count__19088_19684 = G__19690;
i__19089_19685 = G__19691;
continue;
} else {
var G__19692 = seq__19085_19682;
var G__19693 = chunk__19087_19683;
var G__19694 = count__19088_19684;
var G__19695 = (i__19089_19685 + (1));
seq__19085_19682 = G__19692;
chunk__19087_19683 = G__19693;
count__19088_19684 = G__19694;
i__19089_19685 = G__19695;
continue;
}
} else {
var temp__5457__auto___19696__$1 = cljs.core.seq(seq__19085_19682);
if(temp__5457__auto___19696__$1){
var seq__19085_19697__$1 = temp__5457__auto___19696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19085_19697__$1)){
var c__4461__auto___19698 = cljs.core.chunk_first(seq__19085_19697__$1);
var G__19699 = cljs.core.chunk_rest(seq__19085_19697__$1);
var G__19700 = c__4461__auto___19698;
var G__19701 = cljs.core.count(c__4461__auto___19698);
var G__19702 = (0);
seq__19085_19682 = G__19699;
chunk__19087_19683 = G__19700;
count__19088_19684 = G__19701;
i__19089_19685 = G__19702;
continue;
} else {
var child_19707 = cljs.core.first(seq__19085_19697__$1);
if(cljs.core.truth_(child_19707)){
node.appendChild(child_19707);


var G__19708 = cljs.core.next(seq__19085_19697__$1);
var G__19709 = null;
var G__19710 = (0);
var G__19711 = (0);
seq__19085_19682 = G__19708;
chunk__19087_19683 = G__19709;
count__19088_19684 = G__19710;
i__19089_19685 = G__19711;
continue;
} else {
var G__19712 = cljs.core.next(seq__19085_19697__$1);
var G__19713 = null;
var G__19714 = (0);
var G__19715 = (0);
seq__19085_19682 = G__19712;
chunk__19087_19683 = G__19713;
count__19088_19684 = G__19714;
i__19089_19685 = G__19715;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19680);
}
}


var G__19716 = cljs.core.next(seq__19073_19672__$1);
var G__19717 = null;
var G__19718 = (0);
var G__19719 = (0);
seq__19073_19621 = G__19716;
chunk__19075_19622 = G__19717;
count__19076_19623 = G__19718;
i__19077_19624 = G__19719;
continue;
} else {
var G__19720 = cljs.core.next(seq__19073_19672__$1);
var G__19721 = null;
var G__19722 = (0);
var G__19723 = (0);
seq__19073_19621 = G__19720;
chunk__19075_19622 = G__19721;
count__19076_19623 = G__19722;
i__19077_19624 = G__19723;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__19092_19724 = shadow.dom._to_svg;
var G__19093_19725 = "string";
var G__19094_19726 = ((function (G__19092_19724,G__19093_19725){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__19092_19724,G__19093_19725))
;
goog.object.set(G__19092_19724,G__19093_19725,G__19094_19726);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__19107_19727 = shadow.dom._to_svg;
var G__19108_19728 = "null";
var G__19109_19729 = ((function (G__19107_19727,G__19108_19728){
return (function (_){
return null;
});})(G__19107_19727,G__19108_19728))
;
goog.object.set(G__19107_19727,G__19108_19728,G__19109_19729);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19730 = arguments.length;
var i__4642__auto___19731 = (0);
while(true){
if((i__4642__auto___19731 < len__4641__auto___19730)){
args__4647__auto__.push((arguments[i__4642__auto___19731]));

var G__19732 = (i__4642__auto___19731 + (1));
i__4642__auto___19731 = G__19732;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq19112){
var G__19113 = cljs.core.first(seq19112);
var seq19112__$1 = cljs.core.next(seq19112);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19113,seq19112__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19119 = arguments.length;
switch (G__19119) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__19120_19738 = shadow.dom.dom_node(el);
var G__19121_19739 = cljs.core.name(event);
var G__19122_19740 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__19120_19738,G__19121_19739,G__19122_19740) : shadow.dom.dom_listen.call(null,G__19120_19738,G__19121_19739,G__19122_19740));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__16663__auto___19741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16663__auto___19741,buf,chan,event_fn){
return (function (){
var f__16664__auto__ = (function (){var switch__16488__auto__ = ((function (c__16663__auto___19741,buf,chan,event_fn){
return (function (state_19127){
var state_val_19128 = (state_19127[(1)]);
if((state_val_19128 === (1))){
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19127__$1,(2),once_or_cleanup);
} else {
if((state_val_19128 === (2))){
var inst_19124 = (state_19127[(2)]);
var inst_19125 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19127__$1 = (function (){var statearr_19129 = state_19127;
(statearr_19129[(7)] = inst_19124);

return statearr_19129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19127__$1,inst_19125);
} else {
return null;
}
}
});})(c__16663__auto___19741,buf,chan,event_fn))
;
return ((function (switch__16488__auto__,c__16663__auto___19741,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__16489__auto__ = null;
var shadow$dom$state_machine__16489__auto____0 = (function (){
var statearr_19130 = [null,null,null,null,null,null,null,null];
(statearr_19130[(0)] = shadow$dom$state_machine__16489__auto__);

(statearr_19130[(1)] = (1));

return statearr_19130;
});
var shadow$dom$state_machine__16489__auto____1 = (function (state_19127){
while(true){
var ret_value__16490__auto__ = (function (){try{while(true){
var result__16491__auto__ = switch__16488__auto__(state_19127);
if(cljs.core.keyword_identical_QMARK_(result__16491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16491__auto__;
}
break;
}
}catch (e19131){if((e19131 instanceof Object)){
var ex__16492__auto__ = e19131;
var statearr_19132_19743 = state_19127;
(statearr_19132_19743[(5)] = ex__16492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19744 = state_19127;
state_19127 = G__19744;
continue;
} else {
return ret_value__16490__auto__;
}
break;
}
});
shadow$dom$state_machine__16489__auto__ = function(state_19127){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16489__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16489__auto____1.call(this,state_19127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16489__auto____0;
shadow$dom$state_machine__16489__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16489__auto____1;
return shadow$dom$state_machine__16489__auto__;
})()
;})(switch__16488__auto__,c__16663__auto___19741,buf,chan,event_fn))
})();
var state__16665__auto__ = (function (){var statearr_19133 = (f__16664__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16664__auto__.cljs$core$IFn$_invoke$arity$0() : f__16664__auto__.call(null));
(statearr_19133[(6)] = c__16663__auto___19741);

return statearr_19133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16665__auto__);
});})(c__16663__auto___19741,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
