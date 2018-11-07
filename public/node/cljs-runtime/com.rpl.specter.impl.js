goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.string');
goog.require('clojure.walk');
com.rpl.specter.impl.NONE = new cljs.core.Keyword("com.rpl.specter.impl","NONE","com.rpl.specter.impl/NONE",1085349969);
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SPY:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], 0));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('');
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13770 = arguments.length;
var i__4532__auto___13771 = (0);
while(true){
if((i__4532__auto___13771 < len__4531__auto___13770)){
args__4534__auto__.push((arguments[i__4532__auto___13771]));

var G__13772 = (i__4532__auto___13771 + (1));
i__4532__auto___13771 = G__13772;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq13769){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13769));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__13775 = null;
var G__13775__0 = (function (){
return v;
});
var G__13775__1 = (function (a1){
return v;
});
var G__13775__2 = (function (a1,a2){
return v;
});
var G__13775__3 = (function (a1,a2,a3){
return v;
});
var G__13775__4 = (function (a1,a2,a3,a4){
return v;
});
var G__13775__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__13775__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__13775__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__13775__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__13775__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__13775__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__13775__11 = (function() { 
var G__13776__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__13776 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__13777__i = 0, G__13777__a = new Array(arguments.length -  10);
while (G__13777__i < G__13777__a.length) {G__13777__a[G__13777__i] = arguments[G__13777__i + 10]; ++G__13777__i;}
  r = new cljs.core.IndexedSeq(G__13777__a,0,null);
} 
return G__13776__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__13776.cljs$lang$maxFixedArity = 10;
G__13776.cljs$lang$applyTo = (function (arglist__13778){
var a1 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a2 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a3 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a4 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a5 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a6 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a7 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a8 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a9 = cljs.core.first(arglist__13778);
arglist__13778 = cljs.core.next(arglist__13778);
var a10 = cljs.core.first(arglist__13778);
var r = cljs.core.rest(arglist__13778);
return G__13776__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__13776.cljs$core$IFn$_invoke$arity$variadic = G__13776__delegate;
return G__13776;
})()
;
G__13775 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__13775__0.call(this);
case 1:
return G__13775__1.call(this,a1);
case 2:
return G__13775__2.call(this,a1,a2);
case 3:
return G__13775__3.call(this,a1,a2,a3);
case 4:
return G__13775__4.call(this,a1,a2,a3,a4);
case 5:
return G__13775__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__13775__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__13775__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__13775__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__13775__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__13775__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__13779 = null;
if (arguments.length > 10) {
var G__13780__i = 0, G__13780__a = new Array(arguments.length -  10);
while (G__13780__i < G__13780__a.length) {G__13780__a[G__13780__i] = arguments[G__13780__i + 10]; ++G__13780__i;}
G__13779 = new cljs.core.IndexedSeq(G__13780__a,0,null);
}
return G__13775__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__13779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13775.cljs$lang$maxFixedArity = 10;
G__13775.cljs$lang$applyTo = G__13775__11.cljs$lang$applyTo;
G__13775.cljs$core$IFn$_invoke$arity$0 = G__13775__0;
G__13775.cljs$core$IFn$_invoke$arity$1 = G__13775__1;
G__13775.cljs$core$IFn$_invoke$arity$2 = G__13775__2;
G__13775.cljs$core$IFn$_invoke$arity$3 = G__13775__3;
G__13775.cljs$core$IFn$_invoke$arity$4 = G__13775__4;
G__13775.cljs$core$IFn$_invoke$arity$5 = G__13775__5;
G__13775.cljs$core$IFn$_invoke$arity$6 = G__13775__6;
G__13775.cljs$core$IFn$_invoke$arity$7 = G__13775__7;
G__13775.cljs$core$IFn$_invoke$arity$8 = G__13775__8;
G__13775.cljs$core$IFn$_invoke$arity$9 = G__13775__9;
G__13775.cljs$core$IFn$_invoke$arity$10 = G__13775__10;
G__13775.cljs$core$IFn$_invoke$arity$variadic = G__13775__11.cljs$core$IFn$_invoke$arity$variadic;
return G__13775;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13786 = arguments.length;
var i__4532__auto___13787 = (0);
while(true){
if((i__4532__auto___13787 < len__4531__auto___13786)){
args__4534__auto__.push((arguments[i__4532__auto___13787]));

var G__13789 = (i__4532__auto___13787 + (1));
i__4532__auto___13787 = G__13789;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq13782){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13782));
});

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["not implemented"], 0));
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["intern not supported in ClojureScript"], 0));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__4421__auto__ = cljs.core.system_time();
var ret__4422__auto__ = (function (){var n__4408__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__4408__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__13808 = (_ + (1));
_ = G__13808;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4421__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__4422__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(null,vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(null,vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if(((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
var x__4243__auto__ = (((paths == null))?null:paths);
var m__4244__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4244__auto__.call(null,paths));
} else {
var m__4244__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(paths) : m__4244__auto____$1.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if(!((n == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === n.com$rpl$specter$protocols$RichNavigator$)))){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_(p))){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_(this$))){
return this$;
} else {
if(((!((this$ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav(this$);
} else {
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not a navigator: ",this$," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(this$)], 0))], 0));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if(((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
}
});

goog.object.set(com.rpl.specter.impl.CoercePath,"null",true);

var G__13834_13852 = com.rpl.specter.impl.coerce_path;
var G__13835_13853 = "null";
var G__13836_13854 = ((function (G__13834_13852,G__13835_13853){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__13834_13852,G__13835_13853))
;
goog.object.set(G__13834_13852,G__13835_13853,G__13836_13854);

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths(this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

goog.object.set(com.rpl.specter.impl.CoercePath,"_",true);

var G__13848_13859 = com.rpl.specter.impl.coerce_path;
var G__13849_13860 = "_";
var G__13850_13861 = ((function (G__13848_13859,G__13849_13860){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__13848_13859,G__13849_13860))
;
goog.object.set(G__13848_13859,G__13849_13860,G__13850_13861);
com.rpl.specter.impl.STAY_STAR_ = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl13862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl13862 = (function (meta13863){
this.meta13863 = meta13863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl13862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13864,meta13863__$1){
var self__ = this;
var _13864__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl13862(meta13863__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl13862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13864){
var self__ = this;
var _13864__$1 = this;
return self__.meta13863;
});

com.rpl.specter.impl.t_com$rpl$specter$impl13862.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl13862.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl13862.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl13862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13863","meta13863",933819918,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl13862.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl13862.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl13862";

com.rpl.specter.impl.t_com$rpl$specter$impl13862.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl13862");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl13862.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl13862 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl13862(meta13863){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl13862(meta13863));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl13862(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl13880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl13880 = (function (nav1,nav2,meta13881){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta13881 = meta13881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl13880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13882,meta13881__$1){
var self__ = this;
var _13882__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl13880(self__.nav1,self__.nav2,meta13881__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl13880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13882){
var self__ = this;
var _13882__$1 = this;
return self__.meta13881;
});

com.rpl.specter.impl.t_com$rpl$specter$impl13880.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl13880.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl13880.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl13880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta13881","meta13881",134569445,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl13880.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl13880.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl13880";

com.rpl.specter.impl.t_com$rpl$specter$impl13880.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl13880");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl13880.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl13880 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl13880(nav1__$1,nav2__$1,meta13881){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl13880(nav1__$1,nav2__$1,meta13881));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl13880(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

var G__13911_13933 = com.rpl.specter.impl.do_comp_paths;
var G__13912_13934 = "null";
var G__13913_13935 = ((function (G__13911_13933,G__13912_13934){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__13911_13933,G__13912_13934))
;
goog.object.set(G__13911_13933,G__13912_13934,G__13913_13935);

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

var G__13915_13936 = com.rpl.specter.impl.do_comp_paths;
var G__13916_13937 = "_";
var G__13917_13938 = ((function (G__13915_13936,G__13916_13937){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__13915_13936,G__13916_13937))
;
goog.object.set(G__13915_13936,G__13916_13937,G__13917_13938);

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_(coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coerced))){
return cljs.core.first(coerced);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.combine_two_navs,coerced);

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if(((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__4243__auto__ = (((cell == null))?null:cell);
var m__4244__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4244__auto__.call(null,cell,x));
} else {
var m__4244__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4244__auto____$1.call(null,cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
});
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/MutableCell");
});

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__13975 = arguments.length;
switch (G__13975) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell(cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = (function (){var G__13987 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__13987) : afn.call(null,G__13987));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__14030 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__14030) : result_fn.call(null,G__14030));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl14038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl14038 = (function (apath,structure,meta14039){
this.apath = apath;
this.structure = structure;
this.meta14039 = meta14039;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl14038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14040,meta14039__$1){
var self__ = this;
var _14040__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14038(self__.apath,self__.structure,meta14039__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl14038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14040){
var self__ = this;
var _14040__$1 = this;
return self__.meta14039;
});

com.rpl.specter.impl.t_com$rpl$specter$impl14038.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});

com.rpl.specter.impl.t_com$rpl$specter$impl14038.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(start);
com.rpl.specter.impl.compiled_traverse_STAR_(self__.apath,((function (cell,this$__$1){
return (function (elem){
var curr = com.rpl.specter.impl.get_cell(cell);
var newv = (afn.cljs$core$IFn$_invoke$arity$2 ? afn.cljs$core$IFn$_invoke$arity$2(curr,elem) : afn.call(null,curr,elem));
com.rpl.specter.impl.set_cell_BANG_(cell,newv);

return newv;
});})(cell,this$__$1))
,self__.structure);

return com.rpl.specter.impl.get_cell(cell);
});

com.rpl.specter.impl.t_com$rpl$specter$impl14038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta14039","meta14039",-699971841,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl14038.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl14038.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl14038";

com.rpl.specter.impl.t_com$rpl$specter$impl14038.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl14038");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl14038.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl14038 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl14038(apath__$1,structure__$1,meta14039){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14038(apath__$1,structure__$1,meta14039));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl14038(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl14059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl14059 = (function (apath,structure,traverser,meta14060){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta14060 = meta14060;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl14059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (traverser){
return (function (_14061,meta14060__$1){
var self__ = this;
var _14061__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14059(self__.apath,self__.structure,self__.traverser,meta14060__$1));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl14059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (traverser){
return (function (_14061){
var self__ = this;
var _14061__$1 = this;
return self__.meta14060;
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl14059.prototype.cljs$core$IReduce$_reduce$arity$2 = ((function (traverser){
return (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl14059.prototype.cljs$core$IReduce$_reduce$arity$3 = ((function (traverser){
return (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.traverser,afn,start);
return cljs.core.unreduced(res);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl14059.getBasis = ((function (traverser){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"traverser","traverser",1631431381,null),new cljs.core.Symbol(null,"meta14060","meta14060",-361036924,null)], null);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl14059.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl14059.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl14059";

com.rpl.specter.impl.t_com$rpl$specter$impl14059.cljs$lang$ctorPrWriter = ((function (traverser){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl14059");
});})(traverser))
;

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl14059.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl14059 = ((function (traverser){
return (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl14059(apath__$1,structure__$1,traverser__$1,meta14060){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14059(apath__$1,structure__$1,traverser__$1,meta14060));
});})(traverser))
;

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl14059(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__14079 = null;
var G__14079__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__14079__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__14079__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__14079 = function(result,input){
switch(arguments.length){
case 0:
return G__14079__0.call(this);
case 1:
return G__14079__1.call(this,result);
case 2:
return G__14079__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14079.cljs$core$IFn$_invoke$arity$0 = G__14079__0;
G__14079.cljs$core$IFn$_invoke$arity$1 = G__14079__1;
G__14079.cljs$core$IFn$_invoke$arity$2 = G__14079__2;
return G__14079;
})()
});
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
return com.rpl.specter.impl.set_cell_BANG_(res,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(curr,structure__$1));
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

return cljs.core.persistent_BANG_(com.rpl.specter.impl.get_cell(res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Found no elements for select-one! on ",structure], 0));
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(var_args){
var G__14096 = arguments.length;
switch (G__14096) {
case 2:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (path,structure){
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(path,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,vals,structure){
return cljs.core.unreduced(com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,cljs.core.reduced,vals,structure));
});

com.rpl.specter.impl.compiled_select_any_STAR_.cljs$lang$maxFixedArity = 3;

com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var ret = com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return !((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure)));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_(transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.compiled_vtransform_STAR_ = (function com$rpl$specter$impl$compiled_vtransform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,transform_fn);
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return (((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_(f)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14117,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14128 = k14117;
var G__14128__$1 = (((G__14128 instanceof cljs.core.Keyword))?G__14128.fqn:null);
switch (G__14128__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14117,else__4206__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14116){
var self__ = this;
var G__14116__$1 = this;
return (new cljs.core.RecordIter((0),G__14116__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14135 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14135(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14118,other14119){
var self__ = this;
var this14118__$1 = this;
return ((!((other14119 == null))) && ((this14118__$1.constructor === other14119.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14118__$1.val,other14119.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14118__$1.sym,other14119.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14118__$1.__extmap,other14119.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14116){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14137 = cljs.core.keyword_identical_QMARK_;
var expr__14138 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14140 = new cljs.core.Keyword(null,"val","val",128701612);
var G__14141 = expr__14138;
return (pred__14137.cljs$core$IFn$_invoke$arity$2 ? pred__14137.cljs$core$IFn$_invoke$arity$2(G__14140,G__14141) : pred__14137.call(null,G__14140,G__14141));
})())){
return (new com.rpl.specter.impl.LocalSym(G__14116,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14142 = new cljs.core.Keyword(null,"sym","sym",-1444860305);
var G__14143 = expr__14138;
return (pred__14137.cljs$core$IFn$_invoke$arity$2 ? pred__14137.cljs$core$IFn$_invoke$arity$2(G__14142,G__14143) : pred__14137.call(null,G__14142,G__14143));
})())){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__14116,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14116),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14116){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__14116,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LocalSym");
});

/**
 * Positional factory function for com.rpl.specter.impl/LocalSym.
 */
com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalSym, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__14121){
var extmap__4236__auto__ = (function (){var G__14147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14121,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__14121)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14147);
} else {
return G__14147;
}
})();
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__14121),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__14121),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.VarUse = (function (val,avar,sym,__meta,__extmap,__hash){
this.val = val;
this.avar = avar;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14188,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14196 = k14188;
var G__14196__$1 = (((G__14196 instanceof cljs.core.Keyword))?G__14196.fqn:null);
switch (G__14196__$1) {
case "val":
return self__.val;

break;
case "avar":
return self__.avar;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14188,else__4206__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14187){
var self__ = this;
var G__14187__$1 = this;
return (new cljs.core.RecordIter((0),G__14187__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14205 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14205(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14189,other14190){
var self__ = this;
var this14189__$1 = this;
return ((!((other14190 == null))) && ((this14189__$1.constructor === other14190.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14189__$1.val,other14190.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14189__$1.avar,other14190.avar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14189__$1.sym,other14190.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14189__$1.__extmap,other14190.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avar","avar",1316861611),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14187){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14214 = cljs.core.keyword_identical_QMARK_;
var expr__14215 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14217 = new cljs.core.Keyword(null,"val","val",128701612);
var G__14218 = expr__14215;
return (pred__14214.cljs$core$IFn$_invoke$arity$2 ? pred__14214.cljs$core$IFn$_invoke$arity$2(G__14217,G__14218) : pred__14214.call(null,G__14217,G__14218));
})())){
return (new com.rpl.specter.impl.VarUse(G__14187,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14220 = new cljs.core.Keyword(null,"avar","avar",1316861611);
var G__14221 = expr__14215;
return (pred__14214.cljs$core$IFn$_invoke$arity$2 ? pred__14214.cljs$core$IFn$_invoke$arity$2(G__14220,G__14221) : pred__14214.call(null,G__14220,G__14221));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,G__14187,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14222 = new cljs.core.Keyword(null,"sym","sym",-1444860305);
var G__14223 = expr__14215;
return (pred__14214.cljs$core$IFn$_invoke$arity$2 ? pred__14214.cljs$core$IFn$_invoke$arity$2(G__14222,G__14223) : pred__14214.call(null,G__14222,G__14223));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__14187,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14187),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14187){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__14187,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"avar","avar",-1337574158,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/VarUse");
});

/**
 * Positional factory function for com.rpl.specter.impl/VarUse.
 */
com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,avar,sym){
return (new com.rpl.specter.impl.VarUse(val,avar,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/VarUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__14191){
var extmap__4236__auto__ = (function (){var G__14232 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14191,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__14191)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14232);
} else {
return G__14232;
}
})();
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__14191),new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(G__14191),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__14191),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14281,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14289 = k14281;
var G__14289__$1 = (((G__14289 instanceof cljs.core.Keyword))?G__14289.fqn:null);
switch (G__14289__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14281,else__4206__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14280){
var self__ = this;
var G__14280__$1 = this;
return (new cljs.core.RecordIter((0),G__14280__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14299 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14299(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14282,other14283){
var self__ = this;
var this14282__$1 = this;
return ((!((other14283 == null))) && ((this14282__$1.constructor === other14283.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14282__$1.val,other14283.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14282__$1.code,other14283.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14282__$1.__extmap,other14283.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14280){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14304 = cljs.core.keyword_identical_QMARK_;
var expr__14305 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14307 = new cljs.core.Keyword(null,"val","val",128701612);
var G__14308 = expr__14305;
return (pred__14304.cljs$core$IFn$_invoke$arity$2 ? pred__14304.cljs$core$IFn$_invoke$arity$2(G__14307,G__14308) : pred__14304.call(null,G__14307,G__14308));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(G__14280,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14309 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__14310 = expr__14305;
return (pred__14304.cljs$core$IFn$_invoke$arity$2 ? pred__14304.cljs$core$IFn$_invoke$arity$2(G__14309,G__14310) : pred__14304.call(null,G__14309,G__14310));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__14280,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14280),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14280){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__14280,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

/**
 * Positional factory function for com.rpl.specter.impl/SpecialFormUse.
 */
com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/SpecialFormUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__14285){
var extmap__4236__auto__ = (function (){var G__14315 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14285,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__14285)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14315);
} else {
return G__14315;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__14285),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__14285),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14365,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14374 = k14365;
var G__14374__$1 = (((G__14374 instanceof cljs.core.Keyword))?G__14374.fqn:null);
switch (G__14374__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14365,else__4206__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14364){
var self__ = this;
var G__14364__$1 = this;
return (new cljs.core.RecordIter((0),G__14364__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14384 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14384(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14366,other14367){
var self__ = this;
var this14366__$1 = this;
return ((!((other14367 == null))) && ((this14366__$1.constructor === other14367.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14366__$1.op,other14367.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14366__$1.params,other14367.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14366__$1.code,other14367.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14366__$1.__extmap,other14367.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14364){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14387 = cljs.core.keyword_identical_QMARK_;
var expr__14388 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14390 = new cljs.core.Keyword(null,"op","op",-1882987955);
var G__14391 = expr__14388;
return (pred__14387.cljs$core$IFn$_invoke$arity$2 ? pred__14387.cljs$core$IFn$_invoke$arity$2(G__14390,G__14391) : pred__14387.call(null,G__14390,G__14391));
})())){
return (new com.rpl.specter.impl.FnInvocation(G__14364,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14392 = new cljs.core.Keyword(null,"params","params",710516235);
var G__14393 = expr__14388;
return (pred__14387.cljs$core$IFn$_invoke$arity$2 ? pred__14387.cljs$core$IFn$_invoke$arity$2(G__14392,G__14393) : pred__14387.call(null,G__14392,G__14393));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__14364,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14394 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__14395 = expr__14388;
return (pred__14387.cljs$core$IFn$_invoke$arity$2 ? pred__14387.cljs$core$IFn$_invoke$arity$2(G__14394,G__14395) : pred__14387.call(null,G__14394,G__14395));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__14364,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14364),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14364){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__14364,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/FnInvocation");
});

/**
 * Positional factory function for com.rpl.specter.impl/FnInvocation.
 */
com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/FnInvocation, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__14369){
var extmap__4236__auto__ = (function (){var G__14396 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14369,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__14369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14396);
} else {
return G__14396;
}
})();
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__14369),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__14369),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__14369),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14402,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14406 = k14402;
var G__14406__$1 = (((G__14406 instanceof cljs.core.Keyword))?G__14406.fqn:null);
switch (G__14406__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14402,else__4206__auto__);

}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14401){
var self__ = this;
var G__14401__$1 = this;
return (new cljs.core.RecordIter((0),G__14401__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14455 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14455(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14403,other14404){
var self__ = this;
var this14403__$1 = this;
return ((!((other14404 == null))) && ((this14403__$1.constructor === other14404.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14403__$1.code,other14404.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14403__$1.__extmap,other14404.__extmap)));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14401){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14521 = cljs.core.keyword_identical_QMARK_;
var expr__14522 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14545 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__14546 = expr__14522;
return (pred__14521.cljs$core$IFn$_invoke$arity$2 ? pred__14521.cljs$core$IFn$_invoke$arity$2(G__14545,G__14546) : pred__14521.call(null,G__14545,G__14546));
})())){
return (new com.rpl.specter.impl.DynamicVal(G__14401,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14401),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14401){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__14401,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.DynamicVal.cljs$lang$type = true;

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
});

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/DynamicVal");
});

/**
 * Positional factory function for com.rpl.specter.impl/DynamicVal.
 */
com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicVal, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__14405){
var extmap__4236__auto__ = (function (){var G__14559 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14405,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.record_QMARK_(G__14405)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14559);
} else {
return G__14559;
}
})();
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__14405),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14590,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14598 = k14590;
var G__14598__$1 = (((G__14598 instanceof cljs.core.Keyword))?G__14598.fqn:null);
switch (G__14598__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14590,else__4206__auto__);

}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14589){
var self__ = this;
var G__14589__$1 = this;
return (new cljs.core.RecordIter((0),G__14589__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14610 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14610(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14591,other14592){
var self__ = this;
var this14591__$1 = this;
return ((!((other14592 == null))) && ((this14591__$1.constructor === other14592.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14591__$1.path,other14592.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14591__$1.__extmap,other14592.__extmap)));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14589){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14618 = cljs.core.keyword_identical_QMARK_;
var expr__14619 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14621 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__14622 = expr__14619;
return (pred__14618.cljs$core$IFn$_invoke$arity$2 ? pred__14618.cljs$core$IFn$_invoke$arity$2(G__14621,G__14622) : pred__14618.call(null,G__14621,G__14622));
})())){
return (new com.rpl.specter.impl.DynamicPath(G__14589,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14589),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14589){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__14589,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

com.rpl.specter.impl.DynamicPath.cljs$lang$type = true;

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
});

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/DynamicPath");
});

/**
 * Positional factory function for com.rpl.specter.impl/DynamicPath.
 */
com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicPath, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__14594){
var extmap__4236__auto__ = (function (){var G__14633 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14594,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_(G__14594)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14633);
} else {
return G__14633;
}
})();
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__14594),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14649,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14657 = k14649;
var G__14657__$1 = (((G__14657 instanceof cljs.core.Keyword))?G__14657.fqn:null);
switch (G__14657__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14649,else__4206__auto__);

}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14648){
var self__ = this;
var G__14648__$1 = this;
return (new cljs.core.RecordIter((0),G__14648__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14667 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14667(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14650,other14651){
var self__ = this;
var this14650__$1 = this;
return ((!((other14651 == null))) && ((this14650__$1.constructor === other14651.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14650__$1.op,other14651.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14650__$1.params,other14651.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14650__$1.code,other14651.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14650__$1.__extmap,other14651.__extmap)));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14648){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14671 = cljs.core.keyword_identical_QMARK_;
var expr__14672 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14675 = new cljs.core.Keyword(null,"op","op",-1882987955);
var G__14676 = expr__14672;
return (pred__14671.cljs$core$IFn$_invoke$arity$2 ? pred__14671.cljs$core$IFn$_invoke$arity$2(G__14675,G__14676) : pred__14671.call(null,G__14675,G__14676));
})())){
return (new com.rpl.specter.impl.DynamicFunction(G__14648,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14678 = new cljs.core.Keyword(null,"params","params",710516235);
var G__14679 = expr__14672;
return (pred__14671.cljs$core$IFn$_invoke$arity$2 ? pred__14671.cljs$core$IFn$_invoke$arity$2(G__14678,G__14679) : pred__14671.call(null,G__14678,G__14679));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__14648,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14680 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__14681 = expr__14672;
return (pred__14671.cljs$core$IFn$_invoke$arity$2 ? pred__14671.cljs$core$IFn$_invoke$arity$2(G__14680,G__14681) : pred__14671.call(null,G__14680,G__14681));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__14648,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14648),null));
}
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14648){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__14648,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true;

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/DynamicFunction");
});

/**
 * Positional factory function for com.rpl.specter.impl/DynamicFunction.
 */
com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params,code){
return (new com.rpl.specter.impl.DynamicFunction(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicFunction, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__14654){
var extmap__4236__auto__ = (function (){var G__14688 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14654,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__14654)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14688);
} else {
return G__14688;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__14654),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__14654),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__14654),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return cljs.core.not(com.rpl.specter.impl.dynamic_param_QMARK_(path));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(cljs.core.truth_(com.rpl.specter.impl.static_path_QMARK_(path))){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14722,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14728 = k14722;
var G__14728__$1 = (((G__14728 instanceof cljs.core.Keyword))?G__14728.fqn:null);
switch (G__14728__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14722,else__4206__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14721){
var self__ = this;
var G__14721__$1 = this;
return (new cljs.core.RecordIter((0),G__14721__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14732 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14732(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14723,other14724){
var self__ = this;
var this14723__$1 = this;
return ((!((other14724 == null))) && ((this14723__$1.constructor === other14724.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14723__$1.dynamic_QMARK_,other14724.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14723__$1.precompiled,other14724.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14723__$1.__extmap,other14724.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14721){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14733 = cljs.core.keyword_identical_QMARK_;
var expr__14734 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14736 = new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423);
var G__14737 = expr__14734;
return (pred__14733.cljs$core$IFn$_invoke$arity$2 ? pred__14733.cljs$core$IFn$_invoke$arity$2(G__14736,G__14737) : pred__14733.call(null,G__14736,G__14737));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(G__14721,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14738 = new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609);
var G__14739 = expr__14734;
return (pred__14733.cljs$core$IFn$_invoke$arity$2 ? pred__14733.cljs$core$IFn$_invoke$arity$2(G__14738,G__14739) : pred__14733.call(null,G__14738,G__14739));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__14721,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14721),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled,null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14721){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__14721,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

/**
 * Positional factory function for com.rpl.specter.impl/CachedPathInfo.
 */
com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/CachedPathInfo, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__14725){
var extmap__4236__auto__ = (function (){var G__14740 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14725,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], 0));
if(cljs.core.record_QMARK_(G__14725)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14740);
} else {
return G__14740;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__14725),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__14725),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

com.rpl.specter.impl.cached_path_info_precompiled = (function com$rpl$specter$impl$cached_path_info_precompiled(c){
return c.precompiled;
});
com.rpl.specter.impl.cached_path_info_dynamic_QMARK_ = (function com$rpl$specter$impl$cached_path_info_dynamic_QMARK_(c){
return c.dynamic_QMARK_;
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});
com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl14755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl14755 = (function (afn,meta14756){
this.afn = afn;
this.meta14756 = meta14756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl14755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14757,meta14756__$1){
var self__ = this;
var _14757__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14755(self__.afn,meta14756__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl14755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14757){
var self__ = this;
var _14757__$1 = this;
return self__.meta14756;
});

com.rpl.specter.impl.t_com$rpl$specter$impl14755.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl14755.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl14755.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl14755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta14756","meta14756",-2091392071,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl14755.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl14755.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl14755";

com.rpl.specter.impl.t_com$rpl$specter$impl14755.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl14755");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl14755.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl14755 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl14755(afn__$1,meta14756){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14755(afn__$1,meta14756));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl14755(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl14764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl14764 = (function (afn,meta14765){
this.afn = afn;
this.meta14765 = meta14765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl14764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14766,meta14765__$1){
var self__ = this;
var _14766__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14764(self__.afn,meta14765__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl14764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14766){
var self__ = this;
var _14766__$1 = this;
return self__.meta14765;
});

com.rpl.specter.impl.t_com$rpl$specter$impl14764.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl14764.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl14764.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl14764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta14765","meta14765",-1510383792,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl14764.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl14764.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl14764";

com.rpl.specter.impl.t_com$rpl$specter$impl14764.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl14764");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl14764.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl14764 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl14764(afn__$1,meta14765){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14764(afn__$1,meta14765));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl14764(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl14833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl14833 = (function (cell,meta14834){
this.cell = cell;
this.meta14834 = meta14834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl14833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14835,meta14834__$1){
var self__ = this;
var _14835__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14833(self__.cell,meta14834__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl14833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14835){
var self__ = this;
var _14835__$1 = this;
return self__.meta14834;
});

com.rpl.specter.impl.t_com$rpl$specter$impl14833.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl14833.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl14833.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl14833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta14834","meta14834",619545371,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl14833.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl14833.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl14833";

com.rpl.specter.impl.t_com$rpl$specter$impl14833.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl14833");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl14833.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl14833 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl14833(cell__$1,meta14834){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl14833(cell__$1,meta14834));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl14833(cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.impl.cell_nav(cell),cljs.core.assoc,new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671),cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declared));
return com.rpl.specter.impl.set_cell_BANG_(cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var G__15145 = arguments.length;
switch (G__15145) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___15177 = arguments.length;
var i__4532__auto___15178 = (0);
while(true){
if((i__4532__auto___15178 < len__4531__auto___15177)){
args_arr__4546__auto__.push((arguments[i__4532__auto___15178]));

var G__15179 = (i__4532__auto___15178 + (1));
i__4532__auto___15178 = G__15179;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__4547__auto__);

}
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__13619__auto__){
return nav1__13619__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__13619__auto__,nav2__13620__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__13619__auto__,nav2__13620__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__14921,G__14922,G__14923){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14921,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14922,G__14923));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__14924,G__14925,G__14926,G__14927){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14924,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__14925,G__14926,G__14927));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__14928,G__14929,G__14930,G__14931,G__14932){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14928,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__14929,G__14930,G__14931,G__14932));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__14933,G__14934,G__14935,G__14936,G__14937,G__14938){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14933,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__14934,G__14935,G__14936,G__14937,G__14938));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__14939,G__14940,G__14941,G__14942,G__14943,G__14944,G__14945){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14939,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__14940,G__14941,G__14942,G__14943,G__14944,G__14945));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__14946,G__14947,G__14948,G__14949,G__14950,G__14951,G__14952,G__14953){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14946,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__14947,G__14948,G__14949,G__14950,G__14951,G__14952,G__14953));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__14954,G__14955,G__14956,G__14957,G__14958,G__14959,G__14960,G__14961,G__14962){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14954,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__14955,G__14956,G__14957,G__14958,G__14959,G__14960,G__14961,G__14962));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__14963,G__14964,G__14965,G__14966,G__14967,G__14968,G__14969,G__14970,G__14971,G__14972){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14963,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__14964,G__14965,G__14966,G__14967,G__14968,G__14969,G__14970,G__14971,G__14972));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__14973,G__14974,G__14975,G__14976,G__14977,G__14978,G__14979,G__14980,G__14981,G__14982,G__14983){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14973,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__14974,G__14975,G__14976,G__14977,G__14978,G__14979,G__14980,G__14981,G__14982,G__14983));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__14984,G__14985,G__14986,G__14987,G__14988,G__14989,G__14990,G__14991,G__14992,G__14993,G__14994,G__14995){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14984,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__14985,G__14986,G__14987,G__14988,G__14989,G__14990,G__14991,G__14992,G__14993,G__14994,G__14995));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__14996,G__14997,G__14998,G__14999,G__15000,G__15001,G__15002,G__15003,G__15004,G__15005,G__15006,G__15007,G__15008){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__14996,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__14997,G__14998,G__14999,G__15000,G__15001,G__15002,G__15003,G__15004,G__15005,G__15006,G__15007,G__15008));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__15009,G__15010,G__15011,G__15012,G__15013,G__15014,G__15015,G__15016,G__15017,G__15018,G__15019,G__15020,G__15021,G__15022){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15009,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__15010,G__15011,G__15012,G__15013,G__15014,G__15015,G__15016,G__15017,G__15018,G__15019,G__15020,G__15021,G__15022));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__15024,G__15025,G__15026,G__15027,G__15028,G__15029,G__15030,G__15031,G__15032,G__15033,G__15034,G__15035,G__15036,G__15037,G__15038){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15024,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__15025,G__15026,G__15027,G__15028,G__15029,G__15030,G__15031,G__15032,G__15033,G__15034,G__15035,G__15036,G__15037,G__15038));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__15039,G__15040,G__15041,G__15042,G__15043,G__15044,G__15045,G__15046,G__15047,G__15048,G__15049,G__15050,G__15051,G__15052,G__15053,G__15054){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15039,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__15040,G__15041,G__15042,G__15043,G__15044,G__15045,G__15046,G__15047,G__15048,G__15049,G__15050,G__15051,G__15052,G__15053,G__15054));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__15055,G__15056,G__15057,G__15058,G__15059,G__15060,G__15061,G__15062,G__15063,G__15064,G__15065,G__15066,G__15067,G__15068,G__15069,G__15070,G__15071){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15055,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__15056,G__15057,G__15058,G__15059,G__15060,G__15061,G__15062,G__15063,G__15064,G__15065,G__15066,G__15067,G__15068,G__15069,G__15070,G__15071));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__15072,G__15073,G__15074,G__15075,G__15076,G__15077,G__15078,G__15079,G__15080,G__15081,G__15082,G__15083,G__15084,G__15085,G__15086,G__15087,G__15088,G__15089){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15072,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__15073,G__15074,G__15075,G__15076,G__15077,G__15078,G__15079,G__15080,G__15081,G__15082,G__15083,G__15084,G__15085,G__15086,G__15087,G__15088,G__15089));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__15090,G__15091,G__15092,G__15093,G__15094,G__15095,G__15096,G__15097,G__15098,G__15099,G__15100,G__15101,G__15102,G__15103,G__15104,G__15105,G__15106,G__15107,G__15108){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15090,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__15091,G__15092,G__15093,G__15094,G__15095,G__15096,G__15097,G__15098,G__15099,G__15100,G__15101,G__15102,G__15103,G__15104,G__15105,G__15106,G__15107,G__15108));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__14901,G__14902,G__14903,G__14904,G__14905,G__14906,G__14907,G__14908,G__14909,G__14910,G__14911,G__14912,G__14913,G__14914,G__14915,G__14916,G__14917,G__14918,G__14919,rest__13621__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__14901,G__14902,G__14903,G__14904,G__14905,G__14906,G__14907,G__14908,G__14909,G__14910,G__14911,G__14912,G__14913,G__14914,G__14915,G__14916,G__14917,G__14918,G__14919),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__13621__auto__));
});

/** @this {Function} */
com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq15123){
var G__15124 = cljs.core.first(seq15123);
var seq15123__$1 = cljs.core.next(seq15123);
var G__15125 = cljs.core.first(seq15123__$1);
var seq15123__$2 = cljs.core.next(seq15123__$1);
var G__15127 = cljs.core.first(seq15123__$2);
var seq15123__$3 = cljs.core.next(seq15123__$2);
var G__15128 = cljs.core.first(seq15123__$3);
var seq15123__$4 = cljs.core.next(seq15123__$3);
var G__15129 = cljs.core.first(seq15123__$4);
var seq15123__$5 = cljs.core.next(seq15123__$4);
var G__15130 = cljs.core.first(seq15123__$5);
var seq15123__$6 = cljs.core.next(seq15123__$5);
var G__15131 = cljs.core.first(seq15123__$6);
var seq15123__$7 = cljs.core.next(seq15123__$6);
var G__15132 = cljs.core.first(seq15123__$7);
var seq15123__$8 = cljs.core.next(seq15123__$7);
var G__15133 = cljs.core.first(seq15123__$8);
var seq15123__$9 = cljs.core.next(seq15123__$8);
var G__15134 = cljs.core.first(seq15123__$9);
var seq15123__$10 = cljs.core.next(seq15123__$9);
var G__15135 = cljs.core.first(seq15123__$10);
var seq15123__$11 = cljs.core.next(seq15123__$10);
var G__15136 = cljs.core.first(seq15123__$11);
var seq15123__$12 = cljs.core.next(seq15123__$11);
var G__15137 = cljs.core.first(seq15123__$12);
var seq15123__$13 = cljs.core.next(seq15123__$12);
var G__15138 = cljs.core.first(seq15123__$13);
var seq15123__$14 = cljs.core.next(seq15123__$13);
var G__15139 = cljs.core.first(seq15123__$14);
var seq15123__$15 = cljs.core.next(seq15123__$14);
var G__15140 = cljs.core.first(seq15123__$15);
var seq15123__$16 = cljs.core.next(seq15123__$15);
var G__15141 = cljs.core.first(seq15123__$16);
var seq15123__$17 = cljs.core.next(seq15123__$16);
var G__15142 = cljs.core.first(seq15123__$17);
var seq15123__$18 = cljs.core.next(seq15123__$17);
var G__15143 = cljs.core.first(seq15123__$18);
var seq15123__$19 = cljs.core.next(seq15123__$18);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15124,G__15125,G__15127,G__15128,G__15129,G__15130,G__15131,G__15132,G__15133,G__15134,G__15135,G__15136,G__15137,G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,seq15123__$19);
});

com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19);

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__15212 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15212) : next_fn.call(null,G__15212));
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,cljs.core.count(structure)))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__15213 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15213) : next_fn.call(null,G__15213));
})();
var res = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,(0),start),newpart,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,end,cljs.core.count(structure))], 0));
if(cljs.core.vector_QMARK_(structure)){
return cljs.core.vec(res);
} else {
return res;
}
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(e) : p.call(null,e)))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__15214,i){
var vec__15215 = p__15214;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15215,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15215,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15215,(2),null);
var curr = vec__15215;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.matching_indices(aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__15220){
var vec__15221 = p__15220;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15221,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15221,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__3938__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_(structure);
if(cljs.core.truth_(and__3938__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_(ret);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.with_meta(ret,cljs.core.meta(structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure__$1) : pred.call(null,structure__$1)))){
var r = (continue_fn.cljs$core$IFn$_invoke$arity$1 ? continue_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : continue_fn.call(null,structure__$1));
if(!((r === com.rpl.specter.impl.NONE))){
com.rpl.specter.impl.set_cell_BANG_(ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk(com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker(structure);

return com.rpl.specter.impl.get_cell(ret);
});
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if(((!((o == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$))))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.comp_paths_STAR_(o);
} else {
return com.rpl.specter.protocols.implicit_nav(o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620),o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj(obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(orig)){
var G__15311 = orig;
o = G__15311;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,params));
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__15317__delegate = function (args){
if(cljs.core.truth_(com.rpl.specter.impl.all_static_QMARK_(args))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__15317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15320__i = 0, G__15320__a = new Array(arguments.length -  0);
while (G__15320__i < G__15320__a.length) {G__15320__a[G__15320__i] = arguments[G__15320__i + 0]; ++G__15320__i;}
  args = new cljs.core.IndexedSeq(G__15320__a,0,null);
} 
return G__15317__delegate.call(this,args);};
G__15317.cljs$lang$maxFixedArity = 0;
G__15317.cljs$lang$applyTo = (function (arglist__15321){
var args = cljs.core.seq(arglist__15321);
return G__15317__delegate(args);
});
G__15317.cljs$core$IFn$_invoke$arity$variadic = G__15317__delegate;
return G__15317;
})()
;
});
com.rpl.specter.impl.preserve_map = (function com$rpl$specter$impl$preserve_map(afn,o){
if(((cljs.core.list_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(o),cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o));
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.preserve_map(com.rpl.specter.impl.magic_precompilation_STAR_,o);
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
if(cljs.core.truth_(com.rpl.specter.impl.dynamic_var_QMARK_(new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(o)))){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__3949__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__3949__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(o));
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = (function (){var G__15333 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__15333) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__15333));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(o)));
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__15335 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__15335) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__15335));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(op,params,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o));
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var G__15346 = arguments.length;
switch (G__15346) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o,true);
});

com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_(o)){
if(cljs.core.truth_(nav_pos_QMARK_)){
var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_(com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.static_combine,cljs.core.flatten(o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_(s)], null);
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(res))){
return cljs.core.first(res);
} else {
return res;
}
} else {
return com.rpl.specter.impl.preserve_map((function (p1__15342_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__15342_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15344_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__15344_SHARP_,false);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(o))),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(o)));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav(o);
} else {
return o;
}

}
}
}
}
});

com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if(((!((this$ == null))) && (!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4244__auto__.call(null,this$,dynamic_params));
} else {
var m__4244__auto____$1 = (com.rpl.specter.impl.late_resolve["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4244__auto____$1.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
}
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15367,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15371 = k15367;
var G__15371__$1 = (((G__15371 instanceof cljs.core.Keyword))?G__15371.fqn:null);
switch (G__15371__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15367,else__4206__auto__);

}
});

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15366){
var self__ = this;
var G__15366__$1 = this;
return (new cljs.core.RecordIter((0),G__15366__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15373 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15373(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15368,other15369){
var self__ = this;
var this15368__$1 = this;
return ((!((other15369 == null))) && ((this15368__$1.constructor === other15369.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15368__$1.idx,other15369.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15368__$1.__extmap,other15369.__extmap)));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15366){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15381 = cljs.core.keyword_identical_QMARK_;
var expr__15382 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15384 = new cljs.core.Keyword(null,"idx","idx",1053688473);
var G__15385 = expr__15382;
return (pred__15381.cljs$core$IFn$_invoke$arity$2 ? pred__15381.cljs$core$IFn$_invoke$arity$2(G__15384,G__15385) : pred__15381.call(null,G__15384,G__15385));
})())){
return (new com.rpl.specter.impl.LocalParam(G__15366,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15366),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15366){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__15366,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

com.rpl.specter.impl.LocalParam.cljs$lang$type = true;

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
});

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LocalParam");
});

/**
 * Positional factory function for com.rpl.specter.impl/LocalParam.
 */
com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__15370){
var extmap__4236__auto__ = (function (){var G__15394 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15370,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__15370)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15394);
} else {
return G__15394;
}
})();
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__15370),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15396,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15401 = k15396;
var G__15401__$1 = (((G__15401 instanceof cljs.core.Keyword))?G__15401.fqn:null);
switch (G__15401__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15396,else__4206__auto__);

}
});

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15395){
var self__ = this;
var G__15395__$1 = this;
return (new cljs.core.RecordIter((0),G__15395__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15408 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15408(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15397,other15398){
var self__ = this;
var this15397__$1 = this;
return ((!((other15398 == null))) && ((this15397__$1.constructor === other15398.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15397__$1.val,other15398.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15397__$1.__extmap,other15398.__extmap)));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15395){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15413 = cljs.core.keyword_identical_QMARK_;
var expr__15414 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15416 = new cljs.core.Keyword(null,"val","val",128701612);
var G__15417 = expr__15414;
return (pred__15413.cljs$core$IFn$_invoke$arity$2 ? pred__15413.cljs$core$IFn$_invoke$arity$2(G__15416,G__15417) : pred__15413.call(null,G__15416,G__15417));
})())){
return (new com.rpl.specter.impl.StaticParam(G__15395,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15395),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15395){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__15395,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

com.rpl.specter.impl.StaticParam.cljs$lang$type = true;

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
});

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/StaticParam");
});

/**
 * Positional factory function for com.rpl.specter.impl/StaticParam.
 */
com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/StaticParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__15399){
var extmap__4236__auto__ = (function (){var G__15424 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15399,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core.record_QMARK_(G__15399)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15424);
} else {
return G__15424;
}
})();
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__15399),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15446,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15451 = k15446;
var G__15451__$1 = (((G__15451 instanceof cljs.core.Keyword))?G__15451.fqn:null);
switch (G__15451__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15446,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15425){
var self__ = this;
var this__13657__auto____$1 = this;
var fexpr__15454 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15425);
return (fexpr__15454.cljs$core$IFn$_invoke$arity$0 ? fexpr__15454.cljs$core$IFn$_invoke$arity$0() : fexpr__15454.call(null));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15445){
var self__ = this;
var G__15445__$1 = this;
return (new cljs.core.RecordIter((0),G__15445__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15458 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15458(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15447,other15448){
var self__ = this;
var this15447__$1 = this;
return ((!((other15448 == null))) && ((this15447__$1.constructor === other15448.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15447__$1.fn,other15448.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15447__$1.__extmap,other15448.__extmap)));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15445){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15461 = cljs.core.keyword_identical_QMARK_;
var expr__15462 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15464 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15465 = expr__15462;
return (pred__15461.cljs$core$IFn$_invoke$arity$2 ? pred__15461.cljs$core$IFn$_invoke$arity$2(G__15464,G__15465) : pred__15461.call(null,G__15464,G__15465));
})())){
return (new com.rpl.specter.impl.LateFn0(G__15445,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15445),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15445){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__15445,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
});

com.rpl.specter.impl.LateFn0.cljs$lang$type = true;

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
});

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn0");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn0.
 */
com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn0, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__15450){
var extmap__4236__auto__ = (function (){var G__15502 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15450,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.record_QMARK_(G__15450)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15502);
} else {
return G__15502;
}
})();
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15450),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15504,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15510 = k15504;
var G__15510__$1 = (((G__15510 instanceof cljs.core.Keyword))?G__15510.fqn:null);
switch (G__15510__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15504,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15426){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15512 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15426);
var fexpr__15511 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15426);
return (fexpr__15511.cljs$core$IFn$_invoke$arity$1 ? fexpr__15511.cljs$core$IFn$_invoke$arity$1(G__15512) : fexpr__15511.call(null,G__15512));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15503){
var self__ = this;
var G__15503__$1 = this;
return (new cljs.core.RecordIter((0),G__15503__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15520 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15520(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15505,other15506){
var self__ = this;
var this15505__$1 = this;
return ((!((other15506 == null))) && ((this15505__$1.constructor === other15506.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15505__$1.fn,other15506.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15505__$1.arg0,other15506.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15505__$1.__extmap,other15506.__extmap)));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15503){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15521 = cljs.core.keyword_identical_QMARK_;
var expr__15522 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15524 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15525 = expr__15522;
return (pred__15521.cljs$core$IFn$_invoke$arity$2 ? pred__15521.cljs$core$IFn$_invoke$arity$2(G__15524,G__15525) : pred__15521.call(null,G__15524,G__15525));
})())){
return (new com.rpl.specter.impl.LateFn1(G__15503,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15527 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15528 = expr__15522;
return (pred__15521.cljs$core$IFn$_invoke$arity$2 ? pred__15521.cljs$core$IFn$_invoke$arity$2(G__15527,G__15528) : pred__15521.call(null,G__15527,G__15528));
})())){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__15503,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15503),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15503){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__15503,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
});

com.rpl.specter.impl.LateFn1.cljs$lang$type = true;

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
});

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn1");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn1.
 */
com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn1, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__15507){
var extmap__4236__auto__ = (function (){var G__15534 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15507,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355)], 0));
if(cljs.core.record_QMARK_(G__15507)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15534);
} else {
return G__15534;
}
})();
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15507),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15507),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15538,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15547 = k15538;
var G__15547__$1 = (((G__15547 instanceof cljs.core.Keyword))?G__15547.fqn:null);
switch (G__15547__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15538,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15427){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15551 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15427);
var G__15552 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15427);
var fexpr__15550 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15427);
return (fexpr__15550.cljs$core$IFn$_invoke$arity$2 ? fexpr__15550.cljs$core$IFn$_invoke$arity$2(G__15551,G__15552) : fexpr__15550.call(null,G__15551,G__15552));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15537){
var self__ = this;
var G__15537__$1 = this;
return (new cljs.core.RecordIter((0),G__15537__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15557 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15557(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15539,other15540){
var self__ = this;
var this15539__$1 = this;
return ((!((other15540 == null))) && ((this15539__$1.constructor === other15540.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15539__$1.fn,other15540.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15539__$1.arg0,other15540.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15539__$1.arg1,other15540.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15539__$1.__extmap,other15540.__extmap)));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15537){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15570 = cljs.core.keyword_identical_QMARK_;
var expr__15571 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15573 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15574 = expr__15571;
return (pred__15570.cljs$core$IFn$_invoke$arity$2 ? pred__15570.cljs$core$IFn$_invoke$arity$2(G__15573,G__15574) : pred__15570.call(null,G__15573,G__15574));
})())){
return (new com.rpl.specter.impl.LateFn2(G__15537,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15575 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15576 = expr__15571;
return (pred__15570.cljs$core$IFn$_invoke$arity$2 ? pred__15570.cljs$core$IFn$_invoke$arity$2(G__15575,G__15576) : pred__15570.call(null,G__15575,G__15576));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__15537,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15578 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__15579 = expr__15571;
return (pred__15570.cljs$core$IFn$_invoke$arity$2 ? pred__15570.cljs$core$IFn$_invoke$arity$2(G__15578,G__15579) : pred__15570.call(null,G__15578,G__15579));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__15537,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15537),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15537){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__15537,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
});

com.rpl.specter.impl.LateFn2.cljs$lang$type = true;

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
});

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn2");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn2.
 */
com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn2, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__15542){
var extmap__4236__auto__ = (function (){var G__15583 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15542,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], 0));
if(cljs.core.record_QMARK_(G__15542)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15583);
} else {
return G__15583;
}
})();
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15542),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15542),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__15542),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15587,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15594 = k15587;
var G__15594__$1 = (((G__15594 instanceof cljs.core.Keyword))?G__15594.fqn:null);
switch (G__15594__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15587,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15428){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15599 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15428);
var G__15600 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15428);
var G__15601 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15428);
var fexpr__15598 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15428);
return (fexpr__15598.cljs$core$IFn$_invoke$arity$3 ? fexpr__15598.cljs$core$IFn$_invoke$arity$3(G__15599,G__15600,G__15601) : fexpr__15598.call(null,G__15599,G__15600,G__15601));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15586){
var self__ = this;
var G__15586__$1 = this;
return (new cljs.core.RecordIter((0),G__15586__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15633 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15633(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15588,other15589){
var self__ = this;
var this15588__$1 = this;
return ((!((other15589 == null))) && ((this15588__$1.constructor === other15589.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15588__$1.fn,other15589.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15588__$1.arg0,other15589.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15588__$1.arg1,other15589.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15588__$1.arg2,other15589.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15588__$1.__extmap,other15589.__extmap)));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15586){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15642 = cljs.core.keyword_identical_QMARK_;
var expr__15643 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15645 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15646 = expr__15643;
return (pred__15642.cljs$core$IFn$_invoke$arity$2 ? pred__15642.cljs$core$IFn$_invoke$arity$2(G__15645,G__15646) : pred__15642.call(null,G__15645,G__15646));
})())){
return (new com.rpl.specter.impl.LateFn3(G__15586,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15648 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15649 = expr__15643;
return (pred__15642.cljs$core$IFn$_invoke$arity$2 ? pred__15642.cljs$core$IFn$_invoke$arity$2(G__15648,G__15649) : pred__15642.call(null,G__15648,G__15649));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__15586,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15651 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__15652 = expr__15643;
return (pred__15642.cljs$core$IFn$_invoke$arity$2 ? pred__15642.cljs$core$IFn$_invoke$arity$2(G__15651,G__15652) : pred__15642.call(null,G__15651,G__15652));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__15586,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15653 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__15654 = expr__15643;
return (pred__15642.cljs$core$IFn$_invoke$arity$2 ? pred__15642.cljs$core$IFn$_invoke$arity$2(G__15653,G__15654) : pred__15642.call(null,G__15653,G__15654));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__15586,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15586),null));
}
}
}
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15586){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15586,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
});

com.rpl.specter.impl.LateFn3.cljs$lang$type = true;

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
});

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn3");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn3.
 */
com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn3, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__15590){
var extmap__4236__auto__ = (function (){var G__15661 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15590,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], 0));
if(cljs.core.record_QMARK_(G__15590)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15661);
} else {
return G__15661;
}
})();
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15590),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15590),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__15590),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__15590),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15665,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15671 = k15665;
var G__15671__$1 = (((G__15671 instanceof cljs.core.Keyword))?G__15671.fqn:null);
switch (G__15671__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15665,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15429){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15676 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15429);
var G__15677 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15429);
var G__15678 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15429);
var G__15679 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15429);
var fexpr__15675 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15429);
return (fexpr__15675.cljs$core$IFn$_invoke$arity$4 ? fexpr__15675.cljs$core$IFn$_invoke$arity$4(G__15676,G__15677,G__15678,G__15679) : fexpr__15675.call(null,G__15676,G__15677,G__15678,G__15679));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15664){
var self__ = this;
var G__15664__$1 = this;
return (new cljs.core.RecordIter((0),G__15664__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15686 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15686(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15666,other15667){
var self__ = this;
var this15666__$1 = this;
return ((!((other15667 == null))) && ((this15666__$1.constructor === other15667.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15666__$1.fn,other15667.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15666__$1.arg0,other15667.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15666__$1.arg1,other15667.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15666__$1.arg2,other15667.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15666__$1.arg3,other15667.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15666__$1.__extmap,other15667.__extmap)));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15664){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15690 = cljs.core.keyword_identical_QMARK_;
var expr__15691 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15693 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15694 = expr__15691;
return (pred__15690.cljs$core$IFn$_invoke$arity$2 ? pred__15690.cljs$core$IFn$_invoke$arity$2(G__15693,G__15694) : pred__15690.call(null,G__15693,G__15694));
})())){
return (new com.rpl.specter.impl.LateFn4(G__15664,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15695 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15696 = expr__15691;
return (pred__15690.cljs$core$IFn$_invoke$arity$2 ? pred__15690.cljs$core$IFn$_invoke$arity$2(G__15695,G__15696) : pred__15690.call(null,G__15695,G__15696));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__15664,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15697 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__15698 = expr__15691;
return (pred__15690.cljs$core$IFn$_invoke$arity$2 ? pred__15690.cljs$core$IFn$_invoke$arity$2(G__15697,G__15698) : pred__15690.call(null,G__15697,G__15698));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__15664,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15699 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__15700 = expr__15691;
return (pred__15690.cljs$core$IFn$_invoke$arity$2 ? pred__15690.cljs$core$IFn$_invoke$arity$2(G__15699,G__15700) : pred__15690.call(null,G__15699,G__15700));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__15664,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15701 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__15702 = expr__15691;
return (pred__15690.cljs$core$IFn$_invoke$arity$2 ? pred__15690.cljs$core$IFn$_invoke$arity$2(G__15701,G__15702) : pred__15690.call(null,G__15701,G__15702));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15664,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15664),null));
}
}
}
}
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15664){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15664,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
});

com.rpl.specter.impl.LateFn4.cljs$lang$type = true;

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
});

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn4");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn4.
 */
com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn4, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__15669){
var extmap__4236__auto__ = (function (){var G__15731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15669,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], 0));
if(cljs.core.record_QMARK_(G__15669)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15731);
} else {
return G__15731;
}
})();
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15669),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15669),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__15669),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__15669),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__15669),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15737,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15744 = k15737;
var G__15744__$1 = (((G__15744 instanceof cljs.core.Keyword))?G__15744.fqn:null);
switch (G__15744__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15737,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15430){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15749 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15430);
var G__15750 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15430);
var G__15751 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15430);
var G__15752 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15430);
var G__15753 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15430);
var fexpr__15748 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15430);
return (fexpr__15748.cljs$core$IFn$_invoke$arity$5 ? fexpr__15748.cljs$core$IFn$_invoke$arity$5(G__15749,G__15750,G__15751,G__15752,G__15753) : fexpr__15748.call(null,G__15749,G__15750,G__15751,G__15752,G__15753));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15736){
var self__ = this;
var G__15736__$1 = this;
return (new cljs.core.RecordIter((0),G__15736__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15762 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15762(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15738,other15739){
var self__ = this;
var this15738__$1 = this;
return ((!((other15739 == null))) && ((this15738__$1.constructor === other15739.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15738__$1.fn,other15739.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15738__$1.arg0,other15739.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15738__$1.arg1,other15739.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15738__$1.arg2,other15739.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15738__$1.arg3,other15739.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15738__$1.arg4,other15739.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15738__$1.__extmap,other15739.__extmap)));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15736){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15768 = cljs.core.keyword_identical_QMARK_;
var expr__15769 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15773 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15774 = expr__15769;
return (pred__15768.cljs$core$IFn$_invoke$arity$2 ? pred__15768.cljs$core$IFn$_invoke$arity$2(G__15773,G__15774) : pred__15768.call(null,G__15773,G__15774));
})())){
return (new com.rpl.specter.impl.LateFn5(G__15736,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15775 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15776 = expr__15769;
return (pred__15768.cljs$core$IFn$_invoke$arity$2 ? pred__15768.cljs$core$IFn$_invoke$arity$2(G__15775,G__15776) : pred__15768.call(null,G__15775,G__15776));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__15736,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15777 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__15778 = expr__15769;
return (pred__15768.cljs$core$IFn$_invoke$arity$2 ? pred__15768.cljs$core$IFn$_invoke$arity$2(G__15777,G__15778) : pred__15768.call(null,G__15777,G__15778));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__15736,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15780 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__15781 = expr__15769;
return (pred__15768.cljs$core$IFn$_invoke$arity$2 ? pred__15768.cljs$core$IFn$_invoke$arity$2(G__15780,G__15781) : pred__15768.call(null,G__15780,G__15781));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__15736,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15782 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__15783 = expr__15769;
return (pred__15768.cljs$core$IFn$_invoke$arity$2 ? pred__15768.cljs$core$IFn$_invoke$arity$2(G__15782,G__15783) : pred__15768.call(null,G__15782,G__15783));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15736,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15785 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__15786 = expr__15769;
return (pred__15768.cljs$core$IFn$_invoke$arity$2 ? pred__15768.cljs$core$IFn$_invoke$arity$2(G__15785,G__15786) : pred__15768.call(null,G__15785,G__15786));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15736,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15736),null));
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15736){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__15736,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
});

com.rpl.specter.impl.LateFn5.cljs$lang$type = true;

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
});

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn5");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn5.
 */
com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn5, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__15740){
var extmap__4236__auto__ = (function (){var G__15795 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15740,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], 0));
if(cljs.core.record_QMARK_(G__15740)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15795);
} else {
return G__15795;
}
})();
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15740),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15740),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__15740),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__15740),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__15740),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__15740),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15797,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15804 = k15797;
var G__15804__$1 = (((G__15804 instanceof cljs.core.Keyword))?G__15804.fqn:null);
switch (G__15804__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15797,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15431){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15806 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15431);
var G__15807 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15431);
var G__15808 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15431);
var G__15809 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15431);
var G__15810 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15431);
var G__15811 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15431);
var fexpr__15805 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15431);
return (fexpr__15805.cljs$core$IFn$_invoke$arity$6 ? fexpr__15805.cljs$core$IFn$_invoke$arity$6(G__15806,G__15807,G__15808,G__15809,G__15810,G__15811) : fexpr__15805.call(null,G__15806,G__15807,G__15808,G__15809,G__15810,G__15811));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15796){
var self__ = this;
var G__15796__$1 = this;
return (new cljs.core.RecordIter((0),G__15796__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15814 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15814(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15798,other15799){
var self__ = this;
var this15798__$1 = this;
return ((!((other15799 == null))) && ((this15798__$1.constructor === other15799.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.fn,other15799.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.arg0,other15799.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.arg1,other15799.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.arg2,other15799.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.arg3,other15799.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.arg4,other15799.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.arg5,other15799.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15798__$1.__extmap,other15799.__extmap)));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15796){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15815 = cljs.core.keyword_identical_QMARK_;
var expr__15816 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15818 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15819 = expr__15816;
return (pred__15815.cljs$core$IFn$_invoke$arity$2 ? pred__15815.cljs$core$IFn$_invoke$arity$2(G__15818,G__15819) : pred__15815.call(null,G__15818,G__15819));
})())){
return (new com.rpl.specter.impl.LateFn6(G__15796,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15820 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15821 = expr__15816;
return (pred__15815.cljs$core$IFn$_invoke$arity$2 ? pred__15815.cljs$core$IFn$_invoke$arity$2(G__15820,G__15821) : pred__15815.call(null,G__15820,G__15821));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__15796,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15822 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__15823 = expr__15816;
return (pred__15815.cljs$core$IFn$_invoke$arity$2 ? pred__15815.cljs$core$IFn$_invoke$arity$2(G__15822,G__15823) : pred__15815.call(null,G__15822,G__15823));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__15796,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15824 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__15825 = expr__15816;
return (pred__15815.cljs$core$IFn$_invoke$arity$2 ? pred__15815.cljs$core$IFn$_invoke$arity$2(G__15824,G__15825) : pred__15815.call(null,G__15824,G__15825));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__15796,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15826 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__15827 = expr__15816;
return (pred__15815.cljs$core$IFn$_invoke$arity$2 ? pred__15815.cljs$core$IFn$_invoke$arity$2(G__15826,G__15827) : pred__15815.call(null,G__15826,G__15827));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15796,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15828 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__15829 = expr__15816;
return (pred__15815.cljs$core$IFn$_invoke$arity$2 ? pred__15815.cljs$core$IFn$_invoke$arity$2(G__15828,G__15829) : pred__15815.call(null,G__15828,G__15829));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15796,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15830 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__15831 = expr__15816;
return (pred__15815.cljs$core$IFn$_invoke$arity$2 ? pred__15815.cljs$core$IFn$_invoke$arity$2(G__15830,G__15831) : pred__15815.call(null,G__15830,G__15831));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__15796,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15796),null));
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15796){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__15796,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
});

com.rpl.specter.impl.LateFn6.cljs$lang$type = true;

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
});

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn6");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn6.
 */
com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn6, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__15800){
var extmap__4236__auto__ = (function (){var G__15835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15800,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], 0));
if(cljs.core.record_QMARK_(G__15800)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15835);
} else {
return G__15835;
}
})();
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15800),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15800),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__15800),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__15800),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__15800),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__15800),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__15800),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15837,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15841 = k15837;
var G__15841__$1 = (((G__15841 instanceof cljs.core.Keyword))?G__15841.fqn:null);
switch (G__15841__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15837,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15432){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15843 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15432);
var G__15844 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15432);
var G__15845 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15432);
var G__15846 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15432);
var G__15847 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15432);
var G__15848 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15432);
var G__15849 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15432);
var fexpr__15842 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15432);
return (fexpr__15842.cljs$core$IFn$_invoke$arity$7 ? fexpr__15842.cljs$core$IFn$_invoke$arity$7(G__15843,G__15844,G__15845,G__15846,G__15847,G__15848,G__15849) : fexpr__15842.call(null,G__15843,G__15844,G__15845,G__15846,G__15847,G__15848,G__15849));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15836){
var self__ = this;
var G__15836__$1 = this;
return (new cljs.core.RecordIter((0),G__15836__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15853 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15853(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15838,other15839){
var self__ = this;
var this15838__$1 = this;
return ((!((other15839 == null))) && ((this15838__$1.constructor === other15839.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.fn,other15839.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.arg0,other15839.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.arg1,other15839.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.arg2,other15839.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.arg3,other15839.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.arg4,other15839.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.arg5,other15839.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.arg6,other15839.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15838__$1.__extmap,other15839.__extmap)));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15836){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15854 = cljs.core.keyword_identical_QMARK_;
var expr__15855 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15857 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15858 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15857,G__15858) : pred__15854.call(null,G__15857,G__15858));
})())){
return (new com.rpl.specter.impl.LateFn7(G__15836,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15859 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15860 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15859,G__15860) : pred__15854.call(null,G__15859,G__15860));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__15836,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15861 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__15862 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15861,G__15862) : pred__15854.call(null,G__15861,G__15862));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__15836,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15863 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__15864 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15863,G__15864) : pred__15854.call(null,G__15863,G__15864));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__15836,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15865 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__15866 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15865,G__15866) : pred__15854.call(null,G__15865,G__15866));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15836,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15867 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__15868 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15867,G__15868) : pred__15854.call(null,G__15867,G__15868));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15836,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15869 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__15870 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15869,G__15870) : pred__15854.call(null,G__15869,G__15870));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__15836,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15871 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__15872 = expr__15855;
return (pred__15854.cljs$core$IFn$_invoke$arity$2 ? pred__15854.cljs$core$IFn$_invoke$arity$2(G__15871,G__15872) : pred__15854.call(null,G__15871,G__15872));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__15836,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15836),null));
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15836){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__15836,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
});

com.rpl.specter.impl.LateFn7.cljs$lang$type = true;

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
});

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn7");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn7.
 */
com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn7, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__15840){
var extmap__4236__auto__ = (function (){var G__15873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15840,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], 0));
if(cljs.core.record_QMARK_(G__15840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15873);
} else {
return G__15873;
}
})();
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15840),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15840),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__15840),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__15840),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__15840),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__15840),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__15840),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__15840),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15877,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15881 = k15877;
var G__15881__$1 = (((G__15881 instanceof cljs.core.Keyword))?G__15881.fqn:null);
switch (G__15881__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15877,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15433){
var self__ = this;
var this__13657__auto____$1 = this;
var G__15912 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15433);
var G__15913 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15433);
var G__15914 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15433);
var G__15915 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15433);
var G__15916 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15433);
var G__15917 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15433);
var G__15918 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15433);
var G__15919 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15433);
var fexpr__15911 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15433);
return (fexpr__15911.cljs$core$IFn$_invoke$arity$8 ? fexpr__15911.cljs$core$IFn$_invoke$arity$8(G__15912,G__15913,G__15914,G__15915,G__15916,G__15917,G__15918,G__15919) : fexpr__15911.call(null,G__15912,G__15913,G__15914,G__15915,G__15916,G__15917,G__15918,G__15919));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15876){
var self__ = this;
var G__15876__$1 = this;
return (new cljs.core.RecordIter((0),G__15876__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15934 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15934(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15878,other15879){
var self__ = this;
var this15878__$1 = this;
return ((!((other15879 == null))) && ((this15878__$1.constructor === other15879.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.fn,other15879.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg0,other15879.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg1,other15879.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg2,other15879.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg3,other15879.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg4,other15879.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg5,other15879.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg6,other15879.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.arg7,other15879.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15878__$1.__extmap,other15879.__extmap)));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15876){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15942 = cljs.core.keyword_identical_QMARK_;
var expr__15943 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15945 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__15946 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15945,G__15946) : pred__15942.call(null,G__15945,G__15946));
})())){
return (new com.rpl.specter.impl.LateFn8(G__15876,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15947 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__15948 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15947,G__15948) : pred__15942.call(null,G__15947,G__15948));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__15876,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15950 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__15951 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15950,G__15951) : pred__15942.call(null,G__15950,G__15951));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__15876,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15952 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__15953 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15952,G__15953) : pred__15942.call(null,G__15952,G__15953));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__15876,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15955 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__15956 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15955,G__15956) : pred__15942.call(null,G__15955,G__15956));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15876,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15957 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__15958 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15957,G__15958) : pred__15942.call(null,G__15957,G__15958));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15876,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15959 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__15960 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15959,G__15960) : pred__15942.call(null,G__15959,G__15960));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__15876,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15961 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__15962 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15961,G__15962) : pred__15942.call(null,G__15961,G__15962));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__15876,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15963 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__15964 = expr__15943;
return (pred__15942.cljs$core$IFn$_invoke$arity$2 ? pred__15942.cljs$core$IFn$_invoke$arity$2(G__15963,G__15964) : pred__15942.call(null,G__15963,G__15964));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__15876,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15876),null));
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15876){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__15876,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
});

com.rpl.specter.impl.LateFn8.cljs$lang$type = true;

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
});

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn8");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn8.
 */
com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn8, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__15880){
var extmap__4236__auto__ = (function (){var G__15968 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15880,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], 0));
if(cljs.core.record_QMARK_(G__15880)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15968);
} else {
return G__15968;
}
})();
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__15880),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__15880),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15981,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16041 = k15981;
var G__16041__$1 = (((G__16041 instanceof cljs.core.Keyword))?G__16041.fqn:null);
switch (G__16041__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15981,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15434){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16049 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15434);
var G__16050 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15434);
var G__16051 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15434);
var G__16052 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15434);
var G__16053 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15434);
var G__16054 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15434);
var G__16055 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15434);
var G__16056 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15434);
var G__16057 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15434);
var fexpr__16048 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15434);
return (fexpr__16048.cljs$core$IFn$_invoke$arity$9 ? fexpr__16048.cljs$core$IFn$_invoke$arity$9(G__16049,G__16050,G__16051,G__16052,G__16053,G__16054,G__16055,G__16056,G__16057) : fexpr__16048.call(null,G__16049,G__16050,G__16051,G__16052,G__16053,G__16054,G__16055,G__16056,G__16057));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15980){
var self__ = this;
var G__15980__$1 = this;
return (new cljs.core.RecordIter((0),G__15980__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16073 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16073(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15982,other15983){
var self__ = this;
var this15982__$1 = this;
return ((!((other15983 == null))) && ((this15982__$1.constructor === other15983.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.fn,other15983.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg0,other15983.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg1,other15983.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg2,other15983.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg3,other15983.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg4,other15983.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg5,other15983.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg6,other15983.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg7,other15983.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.arg8,other15983.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.__extmap,other15983.__extmap)));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15980){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16086 = cljs.core.keyword_identical_QMARK_;
var expr__16087 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16089 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16090 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16089,G__16090) : pred__16086.call(null,G__16089,G__16090));
})())){
return (new com.rpl.specter.impl.LateFn9(G__15980,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16091 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16092 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16091,G__16092) : pred__16086.call(null,G__16091,G__16092));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__15980,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16094 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16095 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16094,G__16095) : pred__16086.call(null,G__16094,G__16095));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__15980,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16096 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16097 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16096,G__16097) : pred__16086.call(null,G__16096,G__16097));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__15980,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16098 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16099 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16098,G__16099) : pred__16086.call(null,G__16098,G__16099));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15980,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16100 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16101 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16100,G__16101) : pred__16086.call(null,G__16100,G__16101));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15980,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16102 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16103 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16102,G__16103) : pred__16086.call(null,G__16102,G__16103));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__15980,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16105 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16106 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16105,G__16106) : pred__16086.call(null,G__16105,G__16106));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__15980,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16107 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16108 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16107,G__16108) : pred__16086.call(null,G__16107,G__16108));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__15980,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16109 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16110 = expr__16087;
return (pred__16086.cljs$core$IFn$_invoke$arity$2 ? pred__16086.cljs$core$IFn$_invoke$arity$2(G__16109,G__16110) : pred__16086.call(null,G__16109,G__16110));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__15980,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15980),null));
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15980){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__15980,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
});

com.rpl.specter.impl.LateFn9.cljs$lang$type = true;

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
});

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn9");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn9.
 */
com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn9, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__16036){
var extmap__4236__auto__ = (function (){var G__16119 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16036,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], 0));
if(cljs.core.record_QMARK_(G__16036)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16119);
} else {
return G__16119;
}
})();
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16036),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16036),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16122,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16130 = k16122;
var G__16130__$1 = (((G__16130 instanceof cljs.core.Keyword))?G__16130.fqn:null);
switch (G__16130__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16122,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15435){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16134 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15435);
var G__16135 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15435);
var G__16136 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15435);
var G__16137 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15435);
var G__16138 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15435);
var G__16139 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15435);
var G__16140 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15435);
var G__16141 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15435);
var G__16142 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15435);
var G__16143 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15435);
var fexpr__16133 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15435);
return (fexpr__16133.cljs$core$IFn$_invoke$arity$10 ? fexpr__16133.cljs$core$IFn$_invoke$arity$10(G__16134,G__16135,G__16136,G__16137,G__16138,G__16139,G__16140,G__16141,G__16142,G__16143) : fexpr__16133.call(null,G__16134,G__16135,G__16136,G__16137,G__16138,G__16139,G__16140,G__16141,G__16142,G__16143));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16121){
var self__ = this;
var G__16121__$1 = this;
return (new cljs.core.RecordIter((0),G__16121__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16154 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16154(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16123,other16124){
var self__ = this;
var this16123__$1 = this;
return ((!((other16124 == null))) && ((this16123__$1.constructor === other16124.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.fn,other16124.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg0,other16124.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg1,other16124.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg2,other16124.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg3,other16124.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg4,other16124.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg5,other16124.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg6,other16124.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg7,other16124.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg8,other16124.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.arg9,other16124.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16123__$1.__extmap,other16124.__extmap)));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16121){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16158 = cljs.core.keyword_identical_QMARK_;
var expr__16159 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16161 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16162 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16161,G__16162) : pred__16158.call(null,G__16161,G__16162));
})())){
return (new com.rpl.specter.impl.LateFn10(G__16121,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16163 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16164 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16163,G__16164) : pred__16158.call(null,G__16163,G__16164));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__16121,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16165 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16166 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16165,G__16166) : pred__16158.call(null,G__16165,G__16166));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__16121,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16168 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16169 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16168,G__16169) : pred__16158.call(null,G__16168,G__16169));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__16121,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16171 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16172 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16171,G__16172) : pred__16158.call(null,G__16171,G__16172));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16121,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16173 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16174 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16173,G__16174) : pred__16158.call(null,G__16173,G__16174));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16121,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16175 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16176 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16175,G__16176) : pred__16158.call(null,G__16175,G__16176));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16121,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16177 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16178 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16177,G__16178) : pred__16158.call(null,G__16177,G__16178));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16121,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16179 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16180 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16179,G__16180) : pred__16158.call(null,G__16179,G__16180));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16121,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16181 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16182 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16181,G__16182) : pred__16158.call(null,G__16181,G__16182));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16121,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16183 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16184 = expr__16159;
return (pred__16158.cljs$core$IFn$_invoke$arity$2 ? pred__16158.cljs$core$IFn$_invoke$arity$2(G__16183,G__16184) : pred__16158.call(null,G__16183,G__16184));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16121,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16121),null));
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16121){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16121,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
});

com.rpl.specter.impl.LateFn10.cljs$lang$type = true;

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
});

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn10");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn10.
 */
com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn10, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__16126){
var extmap__4236__auto__ = (function (){var G__16213 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16126,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], 0));
if(cljs.core.record_QMARK_(G__16126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16213);
} else {
return G__16213;
}
})();
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16126),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16126),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16217,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16229 = k16217;
var G__16229__$1 = (((G__16229 instanceof cljs.core.Keyword))?G__16229.fqn:null);
switch (G__16229__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16217,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15436){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16234 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15436);
var G__16235 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15436);
var G__16236 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15436);
var G__16237 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15436);
var G__16238 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15436);
var G__16239 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15436);
var G__16240 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15436);
var G__16241 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15436);
var G__16242 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15436);
var G__16243 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15436);
var G__16244 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15436);
var fexpr__16233 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15436);
return (fexpr__16233.cljs$core$IFn$_invoke$arity$11 ? fexpr__16233.cljs$core$IFn$_invoke$arity$11(G__16234,G__16235,G__16236,G__16237,G__16238,G__16239,G__16240,G__16241,G__16242,G__16243,G__16244) : fexpr__16233.call(null,G__16234,G__16235,G__16236,G__16237,G__16238,G__16239,G__16240,G__16241,G__16242,G__16243,G__16244));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16216){
var self__ = this;
var G__16216__$1 = this;
return (new cljs.core.RecordIter((0),G__16216__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16257 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16257(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16218,other16219){
var self__ = this;
var this16218__$1 = this;
return ((!((other16219 == null))) && ((this16218__$1.constructor === other16219.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.fn,other16219.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg0,other16219.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg1,other16219.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg2,other16219.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg3,other16219.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg4,other16219.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg5,other16219.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg6,other16219.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg7,other16219.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg8,other16219.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg9,other16219.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.arg10,other16219.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16218__$1.__extmap,other16219.__extmap)));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16216){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16265 = cljs.core.keyword_identical_QMARK_;
var expr__16266 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16269 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16270 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16269,G__16270) : pred__16265.call(null,G__16269,G__16270));
})())){
return (new com.rpl.specter.impl.LateFn11(G__16216,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16271 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16272 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16271,G__16272) : pred__16265.call(null,G__16271,G__16272));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__16216,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16274 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16275 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16274,G__16275) : pred__16265.call(null,G__16274,G__16275));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__16216,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16276 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16277 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16276,G__16277) : pred__16265.call(null,G__16276,G__16277));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__16216,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16278 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16279 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16278,G__16279) : pred__16265.call(null,G__16278,G__16279));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16216,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16280 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16281 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16280,G__16281) : pred__16265.call(null,G__16280,G__16281));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16216,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16282 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16283 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16282,G__16283) : pred__16265.call(null,G__16282,G__16283));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16216,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16285 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16286 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16285,G__16286) : pred__16265.call(null,G__16285,G__16286));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16216,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16287 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16288 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16287,G__16288) : pred__16265.call(null,G__16287,G__16288));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16216,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16290 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16291 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16290,G__16291) : pred__16265.call(null,G__16290,G__16291));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16216,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16292 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16293 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16292,G__16293) : pred__16265.call(null,G__16292,G__16293));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16216,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16294 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16295 = expr__16266;
return (pred__16265.cljs$core$IFn$_invoke$arity$2 ? pred__16265.cljs$core$IFn$_invoke$arity$2(G__16294,G__16295) : pred__16265.call(null,G__16294,G__16295));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16216,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16216),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16216){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16216,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
});

com.rpl.specter.impl.LateFn11.cljs$lang$type = true;

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
});

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn11");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn11.
 */
com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn11, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__16224){
var extmap__4236__auto__ = (function (){var G__16335 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16224,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], 0));
if(cljs.core.record_QMARK_(G__16224)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16335);
} else {
return G__16335;
}
})();
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16224),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16224),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16343,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16353 = k16343;
var G__16353__$1 = (((G__16353 instanceof cljs.core.Keyword))?G__16353.fqn:null);
switch (G__16353__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16343,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15437){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16357 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15437);
var G__16358 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15437);
var G__16359 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15437);
var G__16360 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15437);
var G__16361 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15437);
var G__16362 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15437);
var G__16363 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15437);
var G__16364 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15437);
var G__16365 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15437);
var G__16366 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15437);
var G__16367 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15437);
var G__16368 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15437);
var fexpr__16356 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15437);
return (fexpr__16356.cljs$core$IFn$_invoke$arity$12 ? fexpr__16356.cljs$core$IFn$_invoke$arity$12(G__16357,G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365,G__16366,G__16367,G__16368) : fexpr__16356.call(null,G__16357,G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365,G__16366,G__16367,G__16368));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16342){
var self__ = this;
var G__16342__$1 = this;
return (new cljs.core.RecordIter((0),G__16342__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16382 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16382(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16345,other16346){
var self__ = this;
var this16345__$1 = this;
return ((!((other16346 == null))) && ((this16345__$1.constructor === other16346.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.fn,other16346.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg0,other16346.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg1,other16346.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg2,other16346.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg3,other16346.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg4,other16346.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg5,other16346.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg6,other16346.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg7,other16346.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg8,other16346.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg9,other16346.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg10,other16346.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.arg11,other16346.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16345__$1.__extmap,other16346.__extmap)));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16342){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16392 = cljs.core.keyword_identical_QMARK_;
var expr__16393 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16395 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16396 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16395,G__16396) : pred__16392.call(null,G__16395,G__16396));
})())){
return (new com.rpl.specter.impl.LateFn12(G__16342,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16397 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16398 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16397,G__16398) : pred__16392.call(null,G__16397,G__16398));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__16342,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16399 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16400 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16399,G__16400) : pred__16392.call(null,G__16399,G__16400));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__16342,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16402 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16403 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16402,G__16403) : pred__16392.call(null,G__16402,G__16403));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__16342,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16405 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16406 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16405,G__16406) : pred__16392.call(null,G__16405,G__16406));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16342,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16407 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16408 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16407,G__16408) : pred__16392.call(null,G__16407,G__16408));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16342,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16410 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16411 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16410,G__16411) : pred__16392.call(null,G__16410,G__16411));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16342,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16412 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16413 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16412,G__16413) : pred__16392.call(null,G__16412,G__16413));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16342,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16415 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16416 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16415,G__16416) : pred__16392.call(null,G__16415,G__16416));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16342,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16417 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16418 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16417,G__16418) : pred__16392.call(null,G__16417,G__16418));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16342,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16420 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16421 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16420,G__16421) : pred__16392.call(null,G__16420,G__16421));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16342,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16422 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16423 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16422,G__16423) : pred__16392.call(null,G__16422,G__16423));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16342,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16424 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__16425 = expr__16393;
return (pred__16392.cljs$core$IFn$_invoke$arity$2 ? pred__16392.cljs$core$IFn$_invoke$arity$2(G__16424,G__16425) : pred__16392.call(null,G__16424,G__16425));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16342,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16342),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16342){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16342,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
});

com.rpl.specter.impl.LateFn12.cljs$lang$type = true;

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
});

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn12");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn12.
 */
com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn12, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__16350){
var extmap__4236__auto__ = (function (){var G__16450 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16350,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], 0));
if(cljs.core.record_QMARK_(G__16350)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16450);
} else {
return G__16450;
}
})();
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16350),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16350),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16473,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16479 = k16473;
var G__16479__$1 = (((G__16479 instanceof cljs.core.Keyword))?G__16479.fqn:null);
switch (G__16479__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16473,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15438){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16488 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15438);
var G__16489 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15438);
var G__16490 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15438);
var G__16491 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15438);
var G__16492 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15438);
var G__16493 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15438);
var G__16494 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15438);
var G__16495 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15438);
var G__16496 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15438);
var G__16497 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15438);
var G__16498 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15438);
var G__16499 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15438);
var G__16500 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15438);
var fexpr__16487 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15438);
return (fexpr__16487.cljs$core$IFn$_invoke$arity$13 ? fexpr__16487.cljs$core$IFn$_invoke$arity$13(G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497,G__16498,G__16499,G__16500) : fexpr__16487.call(null,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497,G__16498,G__16499,G__16500));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16472){
var self__ = this;
var G__16472__$1 = this;
return (new cljs.core.RecordIter((0),G__16472__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16514 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16514(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16474,other16475){
var self__ = this;
var this16474__$1 = this;
return ((!((other16475 == null))) && ((this16474__$1.constructor === other16475.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.fn,other16475.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg0,other16475.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg1,other16475.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg2,other16475.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg3,other16475.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg4,other16475.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg5,other16475.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg6,other16475.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg7,other16475.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg8,other16475.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg9,other16475.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg10,other16475.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg11,other16475.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.arg12,other16475.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16474__$1.__extmap,other16475.__extmap)));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16472){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16523 = cljs.core.keyword_identical_QMARK_;
var expr__16524 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16527 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16528 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16527,G__16528) : pred__16523.call(null,G__16527,G__16528));
})())){
return (new com.rpl.specter.impl.LateFn13(G__16472,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16531 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16532 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16531,G__16532) : pred__16523.call(null,G__16531,G__16532));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__16472,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16533 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16534 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16533,G__16534) : pred__16523.call(null,G__16533,G__16534));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__16472,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16536 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16537 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16536,G__16537) : pred__16523.call(null,G__16536,G__16537));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__16472,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16539 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16540 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16539,G__16540) : pred__16523.call(null,G__16539,G__16540));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16472,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16541 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16542 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16541,G__16542) : pred__16523.call(null,G__16541,G__16542));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16472,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16544 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16545 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16544,G__16545) : pred__16523.call(null,G__16544,G__16545));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16472,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16547 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16548 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16547,G__16548) : pred__16523.call(null,G__16547,G__16548));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16472,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16549 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16550 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16549,G__16550) : pred__16523.call(null,G__16549,G__16550));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16472,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16551 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16552 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16551,G__16552) : pred__16523.call(null,G__16551,G__16552));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16472,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16553 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16554 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16553,G__16554) : pred__16523.call(null,G__16553,G__16554));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16472,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16555 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16556 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16555,G__16556) : pred__16523.call(null,G__16555,G__16556));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16472,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16557 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__16558 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16557,G__16558) : pred__16523.call(null,G__16557,G__16558));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16472,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16560 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__16561 = expr__16524;
return (pred__16523.cljs$core$IFn$_invoke$arity$2 ? pred__16523.cljs$core$IFn$_invoke$arity$2(G__16560,G__16561) : pred__16523.call(null,G__16560,G__16561));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16472,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16472),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16472){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16472,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
});

com.rpl.specter.impl.LateFn13.cljs$lang$type = true;

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
});

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn13");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn13.
 */
com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn13, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__16476){
var extmap__4236__auto__ = (function (){var G__16569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16476,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], 0));
if(cljs.core.record_QMARK_(G__16476)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16569);
} else {
return G__16569;
}
})();
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16476),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__16476),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16571,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16575 = k16571;
var G__16575__$1 = (((G__16575 instanceof cljs.core.Keyword))?G__16575.fqn:null);
switch (G__16575__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16571,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15439){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16578 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15439);
var G__16579 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15439);
var G__16580 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15439);
var G__16581 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15439);
var G__16582 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15439);
var G__16583 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15439);
var G__16584 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15439);
var G__16585 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15439);
var G__16586 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15439);
var G__16587 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15439);
var G__16588 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15439);
var G__16589 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15439);
var G__16590 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15439);
var G__16591 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15439);
var fexpr__16577 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15439);
return (fexpr__16577.cljs$core$IFn$_invoke$arity$14 ? fexpr__16577.cljs$core$IFn$_invoke$arity$14(G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585,G__16586,G__16587,G__16588,G__16589,G__16590,G__16591) : fexpr__16577.call(null,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585,G__16586,G__16587,G__16588,G__16589,G__16590,G__16591));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16570){
var self__ = this;
var G__16570__$1 = this;
return (new cljs.core.RecordIter((0),G__16570__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16635 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16635(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16572,other16573){
var self__ = this;
var this16572__$1 = this;
return ((!((other16573 == null))) && ((this16572__$1.constructor === other16573.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.fn,other16573.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg0,other16573.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg1,other16573.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg2,other16573.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg3,other16573.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg4,other16573.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg5,other16573.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg6,other16573.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg7,other16573.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg8,other16573.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg9,other16573.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg10,other16573.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg11,other16573.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg12,other16573.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.arg13,other16573.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16572__$1.__extmap,other16573.__extmap)));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16570){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16642 = cljs.core.keyword_identical_QMARK_;
var expr__16643 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16645 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16646 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16645,G__16646) : pred__16642.call(null,G__16645,G__16646));
})())){
return (new com.rpl.specter.impl.LateFn14(G__16570,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16647 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16648 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16647,G__16648) : pred__16642.call(null,G__16647,G__16648));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__16570,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16649 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16650 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16649,G__16650) : pred__16642.call(null,G__16649,G__16650));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__16570,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16651 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16652 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16651,G__16652) : pred__16642.call(null,G__16651,G__16652));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__16570,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16653 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16654 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16653,G__16654) : pred__16642.call(null,G__16653,G__16654));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16570,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16655 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16656 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16655,G__16656) : pred__16642.call(null,G__16655,G__16656));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16570,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16657 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16658 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16657,G__16658) : pred__16642.call(null,G__16657,G__16658));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16570,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16659 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16660 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16659,G__16660) : pred__16642.call(null,G__16659,G__16660));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16570,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16661 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16662 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16661,G__16662) : pred__16642.call(null,G__16661,G__16662));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16570,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16663 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16664 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16663,G__16664) : pred__16642.call(null,G__16663,G__16664));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16570,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16665 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16666 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16665,G__16666) : pred__16642.call(null,G__16665,G__16666));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16570,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16667 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16668 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16667,G__16668) : pred__16642.call(null,G__16667,G__16668));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16570,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16669 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__16670 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16669,G__16670) : pred__16642.call(null,G__16669,G__16670));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16570,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16671 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__16672 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16671,G__16672) : pred__16642.call(null,G__16671,G__16672));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16570,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16673 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__16674 = expr__16643;
return (pred__16642.cljs$core$IFn$_invoke$arity$2 ? pred__16642.cljs$core$IFn$_invoke$arity$2(G__16673,G__16674) : pred__16642.call(null,G__16673,G__16674));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16570,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16570),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16570){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16570,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
});

com.rpl.specter.impl.LateFn14.cljs$lang$type = true;

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
});

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn14");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn14.
 */
com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn14, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__16574){
var extmap__4236__auto__ = (function (){var G__16680 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16574,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], 0));
if(cljs.core.record_QMARK_(G__16574)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16680);
} else {
return G__16680;
}
})();
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__16574),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__16574),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16682,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16689 = k16682;
var G__16689__$1 = (((G__16689 instanceof cljs.core.Keyword))?G__16689.fqn:null);
switch (G__16689__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16682,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15440){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16693 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15440);
var G__16694 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15440);
var G__16695 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15440);
var G__16696 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15440);
var G__16697 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15440);
var G__16698 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15440);
var G__16699 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15440);
var G__16700 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15440);
var G__16701 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15440);
var G__16702 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15440);
var G__16703 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15440);
var G__16704 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15440);
var G__16705 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15440);
var G__16706 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15440);
var G__16707 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15440);
var fexpr__16692 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15440);
return (fexpr__16692.cljs$core$IFn$_invoke$arity$15 ? fexpr__16692.cljs$core$IFn$_invoke$arity$15(G__16693,G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707) : fexpr__16692.call(null,G__16693,G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16681){
var self__ = this;
var G__16681__$1 = this;
return (new cljs.core.RecordIter((0),G__16681__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16716 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16716(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16683,other16684){
var self__ = this;
var this16683__$1 = this;
return ((!((other16684 == null))) && ((this16683__$1.constructor === other16684.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.fn,other16684.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg0,other16684.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg1,other16684.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg2,other16684.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg3,other16684.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg4,other16684.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg5,other16684.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg6,other16684.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg7,other16684.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg8,other16684.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg9,other16684.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg10,other16684.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg11,other16684.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg12,other16684.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg13,other16684.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.arg14,other16684.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16683__$1.__extmap,other16684.__extmap)));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16681){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16727 = cljs.core.keyword_identical_QMARK_;
var expr__16728 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16730 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16731 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16730,G__16731) : pred__16727.call(null,G__16730,G__16731));
})())){
return (new com.rpl.specter.impl.LateFn15(G__16681,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16732 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16733 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16732,G__16733) : pred__16727.call(null,G__16732,G__16733));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__16681,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16734 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16735 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16734,G__16735) : pred__16727.call(null,G__16734,G__16735));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__16681,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16736 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16737 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16736,G__16737) : pred__16727.call(null,G__16736,G__16737));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__16681,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16738 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16739 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16738,G__16739) : pred__16727.call(null,G__16738,G__16739));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16681,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16740 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16741 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16740,G__16741) : pred__16727.call(null,G__16740,G__16741));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16681,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16742 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16743 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16742,G__16743) : pred__16727.call(null,G__16742,G__16743));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16681,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16744 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16745 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16744,G__16745) : pred__16727.call(null,G__16744,G__16745));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16681,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16749 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16750 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16749,G__16750) : pred__16727.call(null,G__16749,G__16750));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16681,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16751 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16752 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16751,G__16752) : pred__16727.call(null,G__16751,G__16752));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16681,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16753 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16754 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16753,G__16754) : pred__16727.call(null,G__16753,G__16754));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16681,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16756 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16757 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16756,G__16757) : pred__16727.call(null,G__16756,G__16757));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16681,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16758 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__16759 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16758,G__16759) : pred__16727.call(null,G__16758,G__16759));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16681,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16760 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__16761 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16760,G__16761) : pred__16727.call(null,G__16760,G__16761));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16681,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16765 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__16766 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16765,G__16766) : pred__16727.call(null,G__16765,G__16766));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16681,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16767 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__16768 = expr__16728;
return (pred__16727.cljs$core$IFn$_invoke$arity$2 ? pred__16727.cljs$core$IFn$_invoke$arity$2(G__16767,G__16768) : pred__16727.call(null,G__16767,G__16768));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16681,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16681),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16681){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16681,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
});

com.rpl.specter.impl.LateFn15.cljs$lang$type = true;

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
});

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn15");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn15.
 */
com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn15, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__16685){
var extmap__4236__auto__ = (function (){var G__16771 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16685,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], 0));
if(cljs.core.record_QMARK_(G__16685)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16771);
} else {
return G__16771;
}
})();
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__16685),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__16685),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16773,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16777 = k16773;
var G__16777__$1 = (((G__16777 instanceof cljs.core.Keyword))?G__16777.fqn:null);
switch (G__16777__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16773,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15441){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16780 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15441);
var G__16781 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15441);
var G__16782 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15441);
var G__16783 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15441);
var G__16784 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15441);
var G__16785 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15441);
var G__16786 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15441);
var G__16787 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15441);
var G__16788 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15441);
var G__16789 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15441);
var G__16790 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15441);
var G__16791 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15441);
var G__16792 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15441);
var G__16793 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15441);
var G__16794 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15441);
var G__16795 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15441);
var fexpr__16779 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15441);
return (fexpr__16779.cljs$core$IFn$_invoke$arity$16 ? fexpr__16779.cljs$core$IFn$_invoke$arity$16(G__16780,G__16781,G__16782,G__16783,G__16784,G__16785,G__16786,G__16787,G__16788,G__16789,G__16790,G__16791,G__16792,G__16793,G__16794,G__16795) : fexpr__16779.call(null,G__16780,G__16781,G__16782,G__16783,G__16784,G__16785,G__16786,G__16787,G__16788,G__16789,G__16790,G__16791,G__16792,G__16793,G__16794,G__16795));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16772){
var self__ = this;
var G__16772__$1 = this;
return (new cljs.core.RecordIter((0),G__16772__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16797 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16797(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16774,other16775){
var self__ = this;
var this16774__$1 = this;
return ((!((other16775 == null))) && ((this16774__$1.constructor === other16775.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.fn,other16775.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg0,other16775.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg1,other16775.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg2,other16775.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg3,other16775.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg4,other16775.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg5,other16775.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg6,other16775.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg7,other16775.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg8,other16775.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg9,other16775.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg10,other16775.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg11,other16775.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg12,other16775.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg13,other16775.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg14,other16775.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.arg15,other16775.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16774__$1.__extmap,other16775.__extmap)));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16772){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16798 = cljs.core.keyword_identical_QMARK_;
var expr__16799 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16801 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16802 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16801,G__16802) : pred__16798.call(null,G__16801,G__16802));
})())){
return (new com.rpl.specter.impl.LateFn16(G__16772,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16803 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16804 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16803,G__16804) : pred__16798.call(null,G__16803,G__16804));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__16772,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16805 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16806 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16805,G__16806) : pred__16798.call(null,G__16805,G__16806));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__16772,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16807 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16808 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16807,G__16808) : pred__16798.call(null,G__16807,G__16808));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__16772,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16809 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16810 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16809,G__16810) : pred__16798.call(null,G__16809,G__16810));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16772,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16811 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16812 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16811,G__16812) : pred__16798.call(null,G__16811,G__16812));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16772,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16813 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16814 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16813,G__16814) : pred__16798.call(null,G__16813,G__16814));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16772,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16815 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16816 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16815,G__16816) : pred__16798.call(null,G__16815,G__16816));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16772,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16817 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16818 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16817,G__16818) : pred__16798.call(null,G__16817,G__16818));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16772,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16819 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16820 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16819,G__16820) : pred__16798.call(null,G__16819,G__16820));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16772,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16821 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16822 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16821,G__16822) : pred__16798.call(null,G__16821,G__16822));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16772,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16823 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16824 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16823,G__16824) : pred__16798.call(null,G__16823,G__16824));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16772,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16825 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__16826 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16825,G__16826) : pred__16798.call(null,G__16825,G__16826));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16772,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16827 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__16828 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16827,G__16828) : pred__16798.call(null,G__16827,G__16828));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16772,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16829 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__16830 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16829,G__16830) : pred__16798.call(null,G__16829,G__16830));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16772,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16831 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__16832 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16831,G__16832) : pred__16798.call(null,G__16831,G__16832));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16772,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16833 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__16834 = expr__16799;
return (pred__16798.cljs$core$IFn$_invoke$arity$2 ? pred__16798.cljs$core$IFn$_invoke$arity$2(G__16833,G__16834) : pred__16798.call(null,G__16833,G__16834));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16772,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16772),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16772){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16772,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
});

com.rpl.specter.impl.LateFn16.cljs$lang$type = true;

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
});

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn16");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn16.
 */
com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn16, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__16776){
var extmap__4236__auto__ = (function (){var G__16835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16776,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], 0));
if(cljs.core.record_QMARK_(G__16776)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16835);
} else {
return G__16835;
}
})();
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__16776),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__16776),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16837,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16841 = k16837;
var G__16841__$1 = (((G__16841 instanceof cljs.core.Keyword))?G__16841.fqn:null);
switch (G__16841__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16837,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15442){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16843 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15442);
var G__16844 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15442);
var G__16845 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15442);
var G__16846 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15442);
var G__16847 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15442);
var G__16848 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15442);
var G__16849 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15442);
var G__16850 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15442);
var G__16851 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15442);
var G__16852 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15442);
var G__16853 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15442);
var G__16854 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15442);
var G__16855 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15442);
var G__16856 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15442);
var G__16857 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15442);
var G__16858 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15442);
var G__16859 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params15442);
var fexpr__16842 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15442);
return (fexpr__16842.cljs$core$IFn$_invoke$arity$17 ? fexpr__16842.cljs$core$IFn$_invoke$arity$17(G__16843,G__16844,G__16845,G__16846,G__16847,G__16848,G__16849,G__16850,G__16851,G__16852,G__16853,G__16854,G__16855,G__16856,G__16857,G__16858,G__16859) : fexpr__16842.call(null,G__16843,G__16844,G__16845,G__16846,G__16847,G__16848,G__16849,G__16850,G__16851,G__16852,G__16853,G__16854,G__16855,G__16856,G__16857,G__16858,G__16859));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16836){
var self__ = this;
var G__16836__$1 = this;
return (new cljs.core.RecordIter((0),G__16836__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16868 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16868(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16838,other16839){
var self__ = this;
var this16838__$1 = this;
return ((!((other16839 == null))) && ((this16838__$1.constructor === other16839.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.fn,other16839.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg0,other16839.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg1,other16839.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg2,other16839.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg3,other16839.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg4,other16839.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg5,other16839.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg6,other16839.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg7,other16839.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg8,other16839.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg9,other16839.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg10,other16839.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg11,other16839.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg12,other16839.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg13,other16839.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg14,other16839.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg15,other16839.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.arg16,other16839.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16838__$1.__extmap,other16839.__extmap)));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16836){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16870 = cljs.core.keyword_identical_QMARK_;
var expr__16871 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16873 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16874 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16873,G__16874) : pred__16870.call(null,G__16873,G__16874));
})())){
return (new com.rpl.specter.impl.LateFn17(G__16836,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16876 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16877 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16876,G__16877) : pred__16870.call(null,G__16876,G__16877));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__16836,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16878 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16879 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16878,G__16879) : pred__16870.call(null,G__16878,G__16879));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__16836,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16881 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16882 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16881,G__16882) : pred__16870.call(null,G__16881,G__16882));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__16836,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16886 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16887 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16886,G__16887) : pred__16870.call(null,G__16886,G__16887));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16836,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16888 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16889 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16888,G__16889) : pred__16870.call(null,G__16888,G__16889));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16836,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16890 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16891 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16890,G__16891) : pred__16870.call(null,G__16890,G__16891));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16836,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16892 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16893 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16892,G__16893) : pred__16870.call(null,G__16892,G__16893));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16836,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16894 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16895 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16894,G__16895) : pred__16870.call(null,G__16894,G__16895));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16836,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16896 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16897 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16896,G__16897) : pred__16870.call(null,G__16896,G__16897));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16836,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16898 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16899 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16898,G__16899) : pred__16870.call(null,G__16898,G__16899));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16836,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16900 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16901 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16900,G__16901) : pred__16870.call(null,G__16900,G__16901));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16836,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16902 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__16903 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16902,G__16903) : pred__16870.call(null,G__16902,G__16903));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16836,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16904 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__16905 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16904,G__16905) : pred__16870.call(null,G__16904,G__16905));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16836,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16906 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__16907 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16906,G__16907) : pred__16870.call(null,G__16906,G__16907));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16836,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16908 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__16909 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16908,G__16909) : pred__16870.call(null,G__16908,G__16909));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16836,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16910 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__16911 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16910,G__16911) : pred__16870.call(null,G__16910,G__16911));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16836,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16912 = new cljs.core.Keyword(null,"arg16","arg16",-445557546);
var G__16913 = expr__16871;
return (pred__16870.cljs$core$IFn$_invoke$arity$2 ? pred__16870.cljs$core$IFn$_invoke$arity$2(G__16912,G__16913) : pred__16870.call(null,G__16912,G__16913));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16836,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16836),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16836){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__16836,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
});

com.rpl.specter.impl.LateFn17.cljs$lang$type = true;

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
});

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn17");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn17.
 */
com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn17, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__16840){
var extmap__4236__auto__ = (function (){var G__16916 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16840,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], 0));
if(cljs.core.record_QMARK_(G__16840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16916);
} else {
return G__16916;
}
})();
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__16840),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__16840),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16918,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16923 = k16918;
var G__16923__$1 = (((G__16923 instanceof cljs.core.Keyword))?G__16923.fqn:null);
switch (G__16923__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16918,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15443){
var self__ = this;
var this__13657__auto____$1 = this;
var G__16926 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15443);
var G__16927 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15443);
var G__16928 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15443);
var G__16929 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15443);
var G__16930 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15443);
var G__16931 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15443);
var G__16932 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15443);
var G__16933 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15443);
var G__16934 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15443);
var G__16935 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15443);
var G__16936 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15443);
var G__16937 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15443);
var G__16938 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15443);
var G__16939 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15443);
var G__16940 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15443);
var G__16941 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15443);
var G__16942 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params15443);
var G__16943 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params15443);
var fexpr__16925 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15443);
return (fexpr__16925.cljs$core$IFn$_invoke$arity$18 ? fexpr__16925.cljs$core$IFn$_invoke$arity$18(G__16926,G__16927,G__16928,G__16929,G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936,G__16937,G__16938,G__16939,G__16940,G__16941,G__16942,G__16943) : fexpr__16925.call(null,G__16926,G__16927,G__16928,G__16929,G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936,G__16937,G__16938,G__16939,G__16940,G__16941,G__16942,G__16943));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16917){
var self__ = this;
var G__16917__$1 = this;
return (new cljs.core.RecordIter((0),G__16917__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16946 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16946(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16919,other16920){
var self__ = this;
var this16919__$1 = this;
return ((!((other16920 == null))) && ((this16919__$1.constructor === other16920.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.fn,other16920.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg0,other16920.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg1,other16920.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg2,other16920.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg3,other16920.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg4,other16920.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg5,other16920.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg6,other16920.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg7,other16920.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg8,other16920.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg9,other16920.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg10,other16920.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg11,other16920.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg12,other16920.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg13,other16920.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg14,other16920.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg15,other16920.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg16,other16920.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.arg17,other16920.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16919__$1.__extmap,other16920.__extmap)));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16917){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16948 = cljs.core.keyword_identical_QMARK_;
var expr__16949 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16951 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__16952 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16951,G__16952) : pred__16948.call(null,G__16951,G__16952));
})())){
return (new com.rpl.specter.impl.LateFn18(G__16917,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16953 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__16954 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16953,G__16954) : pred__16948.call(null,G__16953,G__16954));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__16917,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16955 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__16956 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16955,G__16956) : pred__16948.call(null,G__16955,G__16956));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__16917,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16958 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__16959 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16958,G__16959) : pred__16948.call(null,G__16958,G__16959));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__16917,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16960 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__16961 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16960,G__16961) : pred__16948.call(null,G__16960,G__16961));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16917,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16962 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__16963 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16962,G__16963) : pred__16948.call(null,G__16962,G__16963));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16917,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16964 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__16965 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16964,G__16965) : pred__16948.call(null,G__16964,G__16965));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16917,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16966 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__16967 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16966,G__16967) : pred__16948.call(null,G__16966,G__16967));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16917,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16968 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__16969 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16968,G__16969) : pred__16948.call(null,G__16968,G__16969));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16917,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16970 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__16971 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16970,G__16971) : pred__16948.call(null,G__16970,G__16971));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16917,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16972 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__16973 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16972,G__16973) : pred__16948.call(null,G__16972,G__16973));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16917,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16974 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__16975 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16974,G__16975) : pred__16948.call(null,G__16974,G__16975));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16917,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16976 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__16977 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16976,G__16977) : pred__16948.call(null,G__16976,G__16977));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16917,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16978 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__16979 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16978,G__16979) : pred__16948.call(null,G__16978,G__16979));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16917,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16980 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__16981 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16980,G__16981) : pred__16948.call(null,G__16980,G__16981));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16917,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16983 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__16984 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16983,G__16984) : pred__16948.call(null,G__16983,G__16984));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16917,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16985 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__16986 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16985,G__16986) : pred__16948.call(null,G__16985,G__16986));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16917,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16987 = new cljs.core.Keyword(null,"arg16","arg16",-445557546);
var G__16988 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16987,G__16988) : pred__16948.call(null,G__16987,G__16988));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16917,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16989 = new cljs.core.Keyword(null,"arg17","arg17",-1072183482);
var G__16990 = expr__16949;
return (pred__16948.cljs$core$IFn$_invoke$arity$2 ? pred__16948.cljs$core$IFn$_invoke$arity$2(G__16989,G__16990) : pred__16948.call(null,G__16989,G__16990));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__16917,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16917),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16917){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__16917,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
});

com.rpl.specter.impl.LateFn18.cljs$lang$type = true;

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
});

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn18");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn18.
 */
com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn18, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__16922){
var extmap__4236__auto__ = (function (){var G__16992 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16922,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], 0));
if(cljs.core.record_QMARK_(G__16922)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16992);
} else {
return G__16992;
}
})();
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__16922),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__16922),null,cljs.core.not_empty(extmap__4236__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16995,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__17000 = k16995;
var G__17000__$1 = (((G__17000 instanceof cljs.core.Keyword))?G__17000.fqn:null);
switch (G__17000__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
case "arg18":
return self__.arg18;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16995,else__4206__auto__);

}
});

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__13657__auto__,dynamic_params15444){
var self__ = this;
var this__13657__auto____$1 = this;
var G__17002 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15444);
var G__17003 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15444);
var G__17004 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15444);
var G__17005 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15444);
var G__17006 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15444);
var G__17007 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15444);
var G__17008 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15444);
var G__17009 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15444);
var G__17010 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15444);
var G__17011 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15444);
var G__17012 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15444);
var G__17013 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15444);
var G__17014 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15444);
var G__17015 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15444);
var G__17016 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15444);
var G__17017 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15444);
var G__17018 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params15444);
var G__17019 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params15444);
var G__17020 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params15444);
var fexpr__17001 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15444);
return (fexpr__17001.cljs$core$IFn$_invoke$arity$19 ? fexpr__17001.cljs$core$IFn$_invoke$arity$19(G__17002,G__17003,G__17004,G__17005,G__17006,G__17007,G__17008,G__17009,G__17010,G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018,G__17019,G__17020) : fexpr__17001.call(null,G__17002,G__17003,G__17004,G__17005,G__17006,G__17007,G__17008,G__17009,G__17010,G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018,G__17019,G__17020));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16994){
var self__ = this;
var G__16994__$1 = this;
return (new cljs.core.RecordIter((0),G__16994__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__17023 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__17023(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16996,other16997){
var self__ = this;
var this16996__$1 = this;
return ((!((other16997 == null))) && ((this16996__$1.constructor === other16997.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.fn,other16997.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg0,other16997.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg1,other16997.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg2,other16997.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg3,other16997.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg4,other16997.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg5,other16997.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg6,other16997.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg7,other16997.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg8,other16997.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg9,other16997.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg10,other16997.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg11,other16997.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg12,other16997.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg13,other16997.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg14,other16997.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg15,other16997.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg16,other16997.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg17,other16997.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.arg18,other16997.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16996__$1.__extmap,other16997.__extmap)));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16994){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__17025 = cljs.core.keyword_identical_QMARK_;
var expr__17026 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__17028 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__17029 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17028,G__17029) : pred__17025.call(null,G__17028,G__17029));
})())){
return (new com.rpl.specter.impl.LateFn19(G__16994,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17030 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__17031 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17030,G__17031) : pred__17025.call(null,G__17030,G__17031));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__16994,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17032 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__17033 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17032,G__17033) : pred__17025.call(null,G__17032,G__17033));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__16994,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17034 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__17035 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17034,G__17035) : pred__17025.call(null,G__17034,G__17035));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__16994,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17036 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__17037 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17036,G__17037) : pred__17025.call(null,G__17036,G__17037));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16994,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17038 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__17039 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17038,G__17039) : pred__17025.call(null,G__17038,G__17039));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16994,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17041 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__17042 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17041,G__17042) : pred__17025.call(null,G__17041,G__17042));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16994,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17043 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__17044 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17043,G__17044) : pred__17025.call(null,G__17043,G__17044));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16994,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17045 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__17046 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17045,G__17046) : pred__17025.call(null,G__17045,G__17046));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16994,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17047 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__17048 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17047,G__17048) : pred__17025.call(null,G__17047,G__17048));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16994,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17049 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__17050 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17049,G__17050) : pred__17025.call(null,G__17049,G__17050));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16994,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17051 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__17052 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17051,G__17052) : pred__17025.call(null,G__17051,G__17052));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16994,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17053 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__17054 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17053,G__17054) : pred__17025.call(null,G__17053,G__17054));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16994,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17055 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__17056 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17055,G__17056) : pred__17025.call(null,G__17055,G__17056));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16994,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17057 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__17058 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17057,G__17058) : pred__17025.call(null,G__17057,G__17058));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16994,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17059 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__17060 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17059,G__17060) : pred__17025.call(null,G__17059,G__17060));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16994,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17061 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__17062 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17061,G__17062) : pred__17025.call(null,G__17061,G__17062));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16994,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17063 = new cljs.core.Keyword(null,"arg16","arg16",-445557546);
var G__17064 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17063,G__17064) : pred__17025.call(null,G__17063,G__17064));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16994,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17065 = new cljs.core.Keyword(null,"arg17","arg17",-1072183482);
var G__17066 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17065,G__17066) : pred__17025.call(null,G__17065,G__17066));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__16994,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17067 = new cljs.core.Keyword(null,"arg18","arg18",1450507352);
var G__17068 = expr__17026;
return (pred__17025.cljs$core$IFn$_invoke$arity$2 ? pred__17025.cljs$core$IFn$_invoke$arity$2(G__17067,G__17068) : pred__17025.call(null,G__17067,G__17068));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__16994,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16994),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16994){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__16994,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
});

com.rpl.specter.impl.LateFn19.cljs$lang$type = true;

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
});

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"com.rpl.specter.impl/LateFn19");
});

/**
 * Positional factory function for com.rpl.specter.impl/LateFn19.
 */
com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn19, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__16998){
var extmap__4236__auto__ = (function (){var G__17072 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16998,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], 0));
if(cljs.core.record_QMARK_(G__16998)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17072);
} else {
return G__17072;
}
})();
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__16998),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__16998),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn17073,args17074){
var G__17075 = cljs.core.count(args17074);
switch (G__17075) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn17073);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn17073,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args17074,(17)));

break;
default:
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot have late function with more than 18 args"], 0));

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(com.rpl.specter.impl.__GT_StaticParam(afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__17643 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17643,(0),null);
if((i == null)){
com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not find ",code," in possible params ",possible_params], 0));
} else {
}

return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_LocalParam(i),com.rpl.specter.impl.direct_nav_QMARK_(code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_StaticParam(o),com.rpl.specter.impl.direct_nav_QMARK_(o));
});
com.rpl.specter.impl.dynamic__GT_code = (function com$rpl$specter$impl$dynamic__GT_code(o){
return com.rpl.specter.impl.walk_until(com.rpl.specter.impl.dynamic_param_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),o);
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = (function (){var G__17650 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o);
var G__17651 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__17650,G__17651) : com.rpl.specter.impl.resolve_arg_code.call(null,G__17650,G__17651));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (op){
return (function (p1__17647_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__17647_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__17647_SHARP_,possible_params));
});})(op))
,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(o));
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.dynamic_fn_code(com.rpl.specter.impl.original_obj(op),params),com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o)));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o),possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(o,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,o,possible_params));
} else {
if((com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,o))){
return com.rpl.specter.impl.static_val_code(o);
} else {
var G__17652 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__17653 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__17652,G__17653) : com.rpl.specter.impl.resolve_arg_code.call(null,G__17652,G__17653));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path){
return (function (p1__17654_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__17654_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__17654_SHARP_,possible_params));
});})(path))
,path));
if(cljs.core.empty_QMARK_(resolved)){
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(resolved))){
return cljs.core.first(resolved);
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(path,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,path,possible_params));
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(o);
var d = com.rpl.specter.impl.dynamic_val_code(code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(code))){
return d;
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.set_QMARK_(code);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_(code);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first(code));
} else {
return and__3938__auto__;
}
}
})())){
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code(o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.coerce_nav(o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk(((function (used_locals_cell){
return (function (e){
if(cljs.core.contains_QMARK_(locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,((function (used_locals_cell){
return (function (p1__17655_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17655_SHARP_,e);
});})(used_locals_cell))
);
} else {
return e;
}
});})(used_locals_cell))
,form);

return com.rpl.specter.impl.get_cell(used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk((function (e){
if(cljs.core.fn_QMARK_(e)){
return cljs.core.re_find(/ .*/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Possible params:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([possible_params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nProduced dynamic object:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.rpl.specter.impl.mk_fn_name_strs(resolved_code)], 0));

cljs.core.println();
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve(resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.magic_precompilation_STAR_(path));
if(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inline caching debug information"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Input path:",path,"\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processed path:",magic_path,"\n"], 0));
} else {
}

if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_(magic_path))){
if(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Static result:",magic_path], 0));
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo(false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker(com.rpl.specter.impl.resolve_nav_code(com.rpl.specter.impl.__GT_DynamicPath(magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo(true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.fast_constantly(val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17679 = arguments.length;
var i__4532__auto___17680 = (0);
while(true){
if((i__4532__auto___17680 < len__4531__auto___17679)){
args__4534__auto__.push((arguments[i__4532__auto___17680]));

var G__17681 = (i__4532__auto___17680 + (1));
i__4532__auto___17680 = G__17681;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__17671){
var map__17672 = p__17671;
var map__17672__$1 = ((((!((map__17672 == null)))?(((((map__17672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17672):map__17672);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17672__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,((function (state,map__17672,map__17672__$1,merge_fn){
return (function() { 
var G__17682__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__17674 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17674,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17674,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__17677 = com.rpl.specter.impl.get_cell(state);
var G__17678 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__17677,G__17678) : merge_fn.call(null,G__17677,G__17678));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__17682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17683__i = 0, G__17683__a = new Array(arguments.length -  0);
while (G__17683__i < G__17683__a.length) {G__17683__a[G__17683__i] = arguments[G__17683__i + 0]; ++G__17683__i;}
  args = new cljs.core.IndexedSeq(G__17683__a,0,null);
} 
return G__17682__delegate.call(this,args);};
G__17682.cljs$lang$maxFixedArity = 0;
G__17682.cljs$lang$applyTo = (function (arglist__17684){
var args = cljs.core.seq(arglist__17684);
return G__17682__delegate(args);
});
G__17682.cljs$core$IFn$_invoke$arity$variadic = G__17682__delegate;
return G__17682;
})()
;})(state,map__17672,map__17672__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell(state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq17667){
var G__17668 = cljs.core.first(seq17667);
var seq17667__$1 = cljs.core.next(seq17667);
var G__17669 = cljs.core.first(seq17667__$1);
var seq17667__$2 = cljs.core.next(seq17667__$1);
var G__17670 = cljs.core.first(seq17667__$2);
var seq17667__$3 = cljs.core.next(seq17667__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17668,G__17669,G__17670,seq17667__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17693 = arguments.length;
var i__4532__auto___17694 = (0);
while(true){
if((i__4532__auto___17694 < len__4531__auto___17693)){
args__4534__auto__.push((arguments[i__4532__auto___17694]));

var G__17697 = (i__4532__auto___17694 + (1));
i__4532__auto___17694 = G__17697;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq17689){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17689));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=com.rpl.specter.impl.js.map
