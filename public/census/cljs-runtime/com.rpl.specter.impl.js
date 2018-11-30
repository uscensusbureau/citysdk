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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__4647__auto__ = [];
var len__4641__auto___13871 = arguments.length;
var i__4642__auto___13872 = (0);
while(true){
if((i__4642__auto___13872 < len__4641__auto___13871)){
args__4647__auto__.push((arguments[i__4642__auto___13872]));

var G__13873 = (i__4642__auto___13872 + (1));
i__4642__auto___13872 = G__13873;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq12411){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12411));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__13874 = null;
var G__13874__0 = (function (){
return v;
});
var G__13874__1 = (function (a1){
return v;
});
var G__13874__2 = (function (a1,a2){
return v;
});
var G__13874__3 = (function (a1,a2,a3){
return v;
});
var G__13874__4 = (function (a1,a2,a3,a4){
return v;
});
var G__13874__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__13874__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__13874__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__13874__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__13874__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__13874__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__13874__11 = (function() { 
var G__13875__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__13875 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__13876__i = 0, G__13876__a = new Array(arguments.length -  10);
while (G__13876__i < G__13876__a.length) {G__13876__a[G__13876__i] = arguments[G__13876__i + 10]; ++G__13876__i;}
  r = new cljs.core.IndexedSeq(G__13876__a,0,null);
} 
return G__13875__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__13875.cljs$lang$maxFixedArity = 10;
G__13875.cljs$lang$applyTo = (function (arglist__13877){
var a1 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a2 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a3 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a4 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a5 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a6 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a7 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a8 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a9 = cljs.core.first(arglist__13877);
arglist__13877 = cljs.core.next(arglist__13877);
var a10 = cljs.core.first(arglist__13877);
var r = cljs.core.rest(arglist__13877);
return G__13875__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__13875.cljs$core$IFn$_invoke$arity$variadic = G__13875__delegate;
return G__13875;
})()
;
G__13874 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__13874__0.call(this);
case 1:
return G__13874__1.call(this,a1);
case 2:
return G__13874__2.call(this,a1,a2);
case 3:
return G__13874__3.call(this,a1,a2,a3);
case 4:
return G__13874__4.call(this,a1,a2,a3,a4);
case 5:
return G__13874__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__13874__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__13874__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__13874__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__13874__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__13874__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__13878 = null;
if (arguments.length > 10) {
var G__13879__i = 0, G__13879__a = new Array(arguments.length -  10);
while (G__13879__i < G__13879__a.length) {G__13879__a[G__13879__i] = arguments[G__13879__i + 10]; ++G__13879__i;}
G__13878 = new cljs.core.IndexedSeq(G__13879__a,0,null);
}
return G__13874__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__13878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13874.cljs$lang$maxFixedArity = 10;
G__13874.cljs$lang$applyTo = G__13874__11.cljs$lang$applyTo;
G__13874.cljs$core$IFn$_invoke$arity$0 = G__13874__0;
G__13874.cljs$core$IFn$_invoke$arity$1 = G__13874__1;
G__13874.cljs$core$IFn$_invoke$arity$2 = G__13874__2;
G__13874.cljs$core$IFn$_invoke$arity$3 = G__13874__3;
G__13874.cljs$core$IFn$_invoke$arity$4 = G__13874__4;
G__13874.cljs$core$IFn$_invoke$arity$5 = G__13874__5;
G__13874.cljs$core$IFn$_invoke$arity$6 = G__13874__6;
G__13874.cljs$core$IFn$_invoke$arity$7 = G__13874__7;
G__13874.cljs$core$IFn$_invoke$arity$8 = G__13874__8;
G__13874.cljs$core$IFn$_invoke$arity$9 = G__13874__9;
G__13874.cljs$core$IFn$_invoke$arity$10 = G__13874__10;
G__13874.cljs$core$IFn$_invoke$arity$variadic = G__13874__11.cljs$core$IFn$_invoke$arity$variadic;
return G__13874;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__4647__auto__ = [];
var len__4641__auto___13882 = arguments.length;
var i__4642__auto___13883 = (0);
while(true){
if((i__4642__auto___13883 < len__4641__auto___13882)){
args__4647__auto__.push((arguments[i__4642__auto___13883]));

var G__13884 = (i__4642__auto___13883 + (1));
i__4642__auto___13883 = G__13884;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq12412){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12412));
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
var start__4531__auto__ = cljs.core.system_time();
var ret__4532__auto__ = (function (){var n__4518__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__4518__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__13889 = (_ + (1));
_ = G__13889;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4531__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__4532__auto__;
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
if((((!((paths == null)))) && ((!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
var x__4347__auto__ = (((paths == null))?null:paths);
var m__4348__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4348__auto__.call(null,paths));
} else {
var m__4348__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(paths) : m__4348__auto____$1.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if((!((n == null)))){
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
if(com.rpl.specter.impl.rich_nav_QMARK_(p)){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(com.rpl.specter.impl.rich_nav_QMARK_(this$)){
return this$;
} else {
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
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
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
}
});

goog.object.set(com.rpl.specter.impl.CoercePath,"null",true);

var G__12415_13900 = com.rpl.specter.impl.coerce_path;
var G__12416_13901 = "null";
var G__12417_13902 = ((function (G__12415_13900,G__12416_13901){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__12415_13900,G__12416_13901))
;
goog.object.set(G__12415_13900,G__12416_13901,G__12417_13902);

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
return com.rpl.specter.impl.coerce_path(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1));
});

goog.object.set(com.rpl.specter.impl.CoercePath,"_",true);

var G__12418_13912 = com.rpl.specter.impl.coerce_path;
var G__12419_13913 = "_";
var G__12420_13914 = ((function (G__12418_13912,G__12419_13913){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__12418_13912,G__12419_13913))
;
goog.object.set(G__12418_13912,G__12419_13913,G__12420_13914);
com.rpl.specter.impl.STAY_STAR_ = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12421 = (function (meta12422){
this.meta12422 = meta12422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl12421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12423,meta12422__$1){
var self__ = this;
var _12423__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12421(meta12422__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12423){
var self__ = this;
var _12423__$1 = this;
return self__.meta12422;
});

com.rpl.specter.impl.t_com$rpl$specter$impl12421.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl12421.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12421.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12422","meta12422",-1741990455,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12421.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl12421.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12421";

com.rpl.specter.impl.t_com$rpl$specter$impl12421.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12421");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12421.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12421 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl12421(meta12422){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12421(meta12422));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12421(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12424 = (function (nav1,nav2,meta12425){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta12425 = meta12425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl12424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12426,meta12425__$1){
var self__ = this;
var _12426__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12424(self__.nav1,self__.nav2,meta12425__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12426){
var self__ = this;
var _12426__$1 = this;
return self__.meta12425;
});

com.rpl.specter.impl.t_com$rpl$specter$impl12424.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl12424.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12424.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta12425","meta12425",1470656031,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12424.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl12424.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12424";

com.rpl.specter.impl.t_com$rpl$specter$impl12424.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12424");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12424.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12424 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl12424(nav1__$1,nav2__$1,meta12425){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12424(nav1__$1,nav2__$1,meta12425));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12424(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

var G__12427_13953 = com.rpl.specter.impl.do_comp_paths;
var G__12428_13954 = "null";
var G__12429_13955 = ((function (G__12427_13953,G__12428_13954){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__12427_13953,G__12428_13954))
;
goog.object.set(G__12427_13953,G__12428_13954,G__12429_13955);

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

var G__12430_13956 = com.rpl.specter.impl.do_comp_paths;
var G__12431_13957 = "_";
var G__12432_13958 = ((function (G__12430_13956,G__12431_13957){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__12430_13956,G__12431_13957))
;
goog.object.set(G__12430_13956,G__12431_13957,G__12432_13958);

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
if((((!((cell == null)))) && ((!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__4347__auto__ = (((cell == null))?null:cell);
var m__4348__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4348__auto__.call(null,cell,x));
} else {
var m__4348__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4348__auto____$1.call(null,cell,x));
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/MutableCell");
});

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__12434 = arguments.length;
switch (G__12434) {
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
var ret = (function (){var G__12435 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__12435) : afn.call(null,G__12435));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__12438 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__12438) : result_fn.call(null,G__12438));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12439 = (function (apath,structure,meta12440){
this.apath = apath;
this.structure = structure;
this.meta12440 = meta12440;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl12439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12441,meta12440__$1){
var self__ = this;
var _12441__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12439(self__.apath,self__.structure,meta12440__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12441){
var self__ = this;
var _12441__$1 = this;
return self__.meta12440;
});

com.rpl.specter.impl.t_com$rpl$specter$impl12439.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12439.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
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

com.rpl.specter.impl.t_com$rpl$specter$impl12439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta12440","meta12440",1990022388,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12439.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl12439.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12439";

com.rpl.specter.impl.t_com$rpl$specter$impl12439.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12439");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12439.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12439 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl12439(apath__$1,structure__$1,meta12440){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12439(apath__$1,structure__$1,meta12440));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12439(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.call_reduce_interface = (function com$rpl$specter$impl$call_reduce_interface(traverser,afn,start){
return traverser.cljs$core$IReduce$_reduce$arity$3(null,afn,start);
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12442 = (function (apath,structure,traverser,meta12443){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta12443 = meta12443;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl12442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (traverser){
return (function (_12444,meta12443__$1){
var self__ = this;
var _12444__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12442(self__.apath,self__.structure,self__.traverser,meta12443__$1));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl12442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (traverser){
return (function (_12444){
var self__ = this;
var _12444__$1 = this;
return self__.meta12443;
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl12442.prototype.cljs$core$IReduce$_reduce$arity$2 = ((function (traverser){
return (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl12442.prototype.cljs$core$IReduce$_reduce$arity$3 = ((function (traverser){
return (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = com.rpl.specter.impl.call_reduce_interface(self__.traverser,afn,start);
return cljs.core.unreduced(res);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl12442.getBasis = ((function (traverser){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"traverser","traverser",1631431381,null),new cljs.core.Symbol(null,"meta12443","meta12443",1684768880,null)], null);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl12442.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl12442.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12442";

com.rpl.specter.impl.t_com$rpl$specter$impl12442.cljs$lang$ctorPrWriter = ((function (traverser){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12442");
});})(traverser))
;

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12442.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12442 = ((function (traverser){
return (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl12442(apath__$1,structure__$1,traverser__$1,meta12443){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12442(apath__$1,structure__$1,traverser__$1,meta12443));
});})(traverser))
;

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12442(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__14014 = null;
var G__14014__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__14014__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__14014__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__14014 = function(result,input){
switch(arguments.length){
case 0:
return G__14014__0.call(this);
case 1:
return G__14014__1.call(this,result);
case 2:
return G__14014__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14014.cljs$core$IFn$_invoke$arity$0 = G__14014__0;
G__14014.cljs$core$IFn$_invoke$arity$1 = G__14014__1;
G__14014.cljs$core$IFn$_invoke$arity$2 = G__14014__2;
return G__14014;
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
var G__12446 = arguments.length;
switch (G__12446) {
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
return (!((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure))));
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
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12448,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12452 = k12448;
var G__12452__$1 = (((G__12452 instanceof cljs.core.Keyword))?G__12452.fqn:null);
switch (G__12452__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12448,else__4304__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12453){
var vec__12454 = p__12453;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12447){
var self__ = this;
var G__12447__$1 = this;
return (new cljs.core.RecordIter((0),G__12447__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12457 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12457(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12449,other12450){
var self__ = this;
var this12449__$1 = this;
return (((!((other12450 == null)))) && ((this12449__$1.constructor === other12450.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12449__$1.val,other12450.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12449__$1.sym,other12450.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12449__$1.__extmap,other12450.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12447){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12458 = cljs.core.keyword_identical_QMARK_;
var expr__12459 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12461 = new cljs.core.Keyword(null,"val","val",128701612);
var G__12462 = expr__12459;
return (pred__12458.cljs$core$IFn$_invoke$arity$2 ? pred__12458.cljs$core$IFn$_invoke$arity$2(G__12461,G__12462) : pred__12458.call(null,G__12461,G__12462));
})())){
return (new com.rpl.specter.impl.LocalSym(G__12447,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12463 = new cljs.core.Keyword(null,"sym","sym",-1444860305);
var G__12464 = expr__12459;
return (pred__12458.cljs$core$IFn$_invoke$arity$2 ? pred__12458.cljs$core$IFn$_invoke$arity$2(G__12463,G__12464) : pred__12458.call(null,G__12463,G__12464));
})())){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__12447,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12447),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12447){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__12447,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LocalSym");
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
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__12451){
var extmap__4340__auto__ = (function (){var G__12465 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12451,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__12451)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12465);
} else {
return G__12465;
}
})();
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__12451),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__12451),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
com.rpl.specter.impl.VarUse = (function (val,avar,sym,__meta,__extmap,__hash){
this.val = val;
this.avar = avar;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12467,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12471 = k12467;
var G__12471__$1 = (((G__12471 instanceof cljs.core.Keyword))?G__12471.fqn:null);
switch (G__12471__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12467,else__4304__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12472){
var vec__12473 = p__12472;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12466){
var self__ = this;
var G__12466__$1 = this;
return (new cljs.core.RecordIter((0),G__12466__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12476 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12476(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12468,other12469){
var self__ = this;
var this12468__$1 = this;
return (((!((other12469 == null)))) && ((this12468__$1.constructor === other12469.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12468__$1.val,other12469.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12468__$1.avar,other12469.avar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12468__$1.sym,other12469.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12468__$1.__extmap,other12469.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avar","avar",1316861611),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12466){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12477 = cljs.core.keyword_identical_QMARK_;
var expr__12478 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12480 = new cljs.core.Keyword(null,"val","val",128701612);
var G__12481 = expr__12478;
return (pred__12477.cljs$core$IFn$_invoke$arity$2 ? pred__12477.cljs$core$IFn$_invoke$arity$2(G__12480,G__12481) : pred__12477.call(null,G__12480,G__12481));
})())){
return (new com.rpl.specter.impl.VarUse(G__12466,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12482 = new cljs.core.Keyword(null,"avar","avar",1316861611);
var G__12483 = expr__12478;
return (pred__12477.cljs$core$IFn$_invoke$arity$2 ? pred__12477.cljs$core$IFn$_invoke$arity$2(G__12482,G__12483) : pred__12477.call(null,G__12482,G__12483));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,G__12466,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12484 = new cljs.core.Keyword(null,"sym","sym",-1444860305);
var G__12485 = expr__12478;
return (pred__12477.cljs$core$IFn$_invoke$arity$2 ? pred__12477.cljs$core$IFn$_invoke$arity$2(G__12484,G__12485) : pred__12477.call(null,G__12484,G__12485));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__12466,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12466),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12466){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__12466,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"avar","avar",-1337574158,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/VarUse");
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
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__12470){
var extmap__4340__auto__ = (function (){var G__12486 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12470,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__12470)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12486);
} else {
return G__12486;
}
})();
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__12470),new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(G__12470),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__12470),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12488,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12492 = k12488;
var G__12492__$1 = (((G__12492 instanceof cljs.core.Keyword))?G__12492.fqn:null);
switch (G__12492__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12488,else__4304__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12493){
var vec__12494 = p__12493;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12487){
var self__ = this;
var G__12487__$1 = this;
return (new cljs.core.RecordIter((0),G__12487__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12497 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12497(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12489,other12490){
var self__ = this;
var this12489__$1 = this;
return (((!((other12490 == null)))) && ((this12489__$1.constructor === other12490.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12489__$1.val,other12490.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12489__$1.code,other12490.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12489__$1.__extmap,other12490.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12487){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12498 = cljs.core.keyword_identical_QMARK_;
var expr__12499 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12501 = new cljs.core.Keyword(null,"val","val",128701612);
var G__12502 = expr__12499;
return (pred__12498.cljs$core$IFn$_invoke$arity$2 ? pred__12498.cljs$core$IFn$_invoke$arity$2(G__12501,G__12502) : pred__12498.call(null,G__12501,G__12502));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(G__12487,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12503 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__12504 = expr__12499;
return (pred__12498.cljs$core$IFn$_invoke$arity$2 ? pred__12498.cljs$core$IFn$_invoke$arity$2(G__12503,G__12504) : pred__12498.call(null,G__12503,G__12504));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__12487,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12487),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12487){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__12487,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/SpecialFormUse");
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
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__12491){
var extmap__4340__auto__ = (function (){var G__12505 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12491,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__12491)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12505);
} else {
return G__12505;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__12491),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__12491),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12507,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12511 = k12507;
var G__12511__$1 = (((G__12511 instanceof cljs.core.Keyword))?G__12511.fqn:null);
switch (G__12511__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12507,else__4304__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12512){
var vec__12513 = p__12512;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12506){
var self__ = this;
var G__12506__$1 = this;
return (new cljs.core.RecordIter((0),G__12506__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12516 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12516(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12508,other12509){
var self__ = this;
var this12508__$1 = this;
return (((!((other12509 == null)))) && ((this12508__$1.constructor === other12509.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12508__$1.op,other12509.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12508__$1.params,other12509.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12508__$1.code,other12509.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12508__$1.__extmap,other12509.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12506){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12517 = cljs.core.keyword_identical_QMARK_;
var expr__12518 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12520 = new cljs.core.Keyword(null,"op","op",-1882987955);
var G__12521 = expr__12518;
return (pred__12517.cljs$core$IFn$_invoke$arity$2 ? pred__12517.cljs$core$IFn$_invoke$arity$2(G__12520,G__12521) : pred__12517.call(null,G__12520,G__12521));
})())){
return (new com.rpl.specter.impl.FnInvocation(G__12506,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12522 = new cljs.core.Keyword(null,"params","params",710516235);
var G__12523 = expr__12518;
return (pred__12517.cljs$core$IFn$_invoke$arity$2 ? pred__12517.cljs$core$IFn$_invoke$arity$2(G__12522,G__12523) : pred__12517.call(null,G__12522,G__12523));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__12506,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12524 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__12525 = expr__12518;
return (pred__12517.cljs$core$IFn$_invoke$arity$2 ? pred__12517.cljs$core$IFn$_invoke$arity$2(G__12524,G__12525) : pred__12517.call(null,G__12524,G__12525));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__12506,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12506),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12506){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__12506,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/FnInvocation");
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
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__12510){
var extmap__4340__auto__ = (function (){var G__12526 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12510,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__12510)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12526);
} else {
return G__12526;
}
})();
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__12510),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__12510),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__12510),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12528,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12532 = k12528;
var G__12532__$1 = (((G__12532 instanceof cljs.core.Keyword))?G__12532.fqn:null);
switch (G__12532__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12528,else__4304__auto__);

}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12533){
var vec__12534 = p__12533;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12527){
var self__ = this;
var G__12527__$1 = this;
return (new cljs.core.RecordIter((0),G__12527__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12537 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12537(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12529,other12530){
var self__ = this;
var this12529__$1 = this;
return (((!((other12530 == null)))) && ((this12529__$1.constructor === other12530.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12529__$1.code,other12530.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12529__$1.__extmap,other12530.__extmap)));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12527){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12538 = cljs.core.keyword_identical_QMARK_;
var expr__12539 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12541 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__12542 = expr__12539;
return (pred__12538.cljs$core$IFn$_invoke$arity$2 ? pred__12538.cljs$core$IFn$_invoke$arity$2(G__12541,G__12542) : pred__12538.call(null,G__12541,G__12542));
})())){
return (new com.rpl.specter.impl.DynamicVal(G__12527,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12527),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12527){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__12527,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.DynamicVal.cljs$lang$type = true;

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
});

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/DynamicVal");
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
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__12531){
var extmap__4340__auto__ = (function (){var G__12543 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12531,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.record_QMARK_(G__12531)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12543);
} else {
return G__12543;
}
})();
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__12531),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12545,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12549 = k12545;
var G__12549__$1 = (((G__12549 instanceof cljs.core.Keyword))?G__12549.fqn:null);
switch (G__12549__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12545,else__4304__auto__);

}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12550){
var vec__12551 = p__12550;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12544){
var self__ = this;
var G__12544__$1 = this;
return (new cljs.core.RecordIter((0),G__12544__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12554 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12554(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12546,other12547){
var self__ = this;
var this12546__$1 = this;
return (((!((other12547 == null)))) && ((this12546__$1.constructor === other12547.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12546__$1.path,other12547.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12546__$1.__extmap,other12547.__extmap)));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12544){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12555 = cljs.core.keyword_identical_QMARK_;
var expr__12556 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12558 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__12559 = expr__12556;
return (pred__12555.cljs$core$IFn$_invoke$arity$2 ? pred__12555.cljs$core$IFn$_invoke$arity$2(G__12558,G__12559) : pred__12555.call(null,G__12558,G__12559));
})())){
return (new com.rpl.specter.impl.DynamicPath(G__12544,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12544),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12544){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__12544,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

com.rpl.specter.impl.DynamicPath.cljs$lang$type = true;

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
});

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/DynamicPath");
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
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__12548){
var extmap__4340__auto__ = (function (){var G__12560 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12548,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_(G__12548)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12560);
} else {
return G__12560;
}
})();
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__12548),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12562,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12566 = k12562;
var G__12566__$1 = (((G__12566 instanceof cljs.core.Keyword))?G__12566.fqn:null);
switch (G__12566__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12562,else__4304__auto__);

}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12567){
var vec__12568 = p__12567;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12568,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12568,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12561){
var self__ = this;
var G__12561__$1 = this;
return (new cljs.core.RecordIter((0),G__12561__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12571 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12571(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12563,other12564){
var self__ = this;
var this12563__$1 = this;
return (((!((other12564 == null)))) && ((this12563__$1.constructor === other12564.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12563__$1.op,other12564.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12563__$1.params,other12564.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12563__$1.code,other12564.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12563__$1.__extmap,other12564.__extmap)));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12561){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12572 = cljs.core.keyword_identical_QMARK_;
var expr__12573 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12575 = new cljs.core.Keyword(null,"op","op",-1882987955);
var G__12576 = expr__12573;
return (pred__12572.cljs$core$IFn$_invoke$arity$2 ? pred__12572.cljs$core$IFn$_invoke$arity$2(G__12575,G__12576) : pred__12572.call(null,G__12575,G__12576));
})())){
return (new com.rpl.specter.impl.DynamicFunction(G__12561,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12577 = new cljs.core.Keyword(null,"params","params",710516235);
var G__12578 = expr__12573;
return (pred__12572.cljs$core$IFn$_invoke$arity$2 ? pred__12572.cljs$core$IFn$_invoke$arity$2(G__12577,G__12578) : pred__12572.call(null,G__12577,G__12578));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__12561,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12579 = new cljs.core.Keyword(null,"code","code",1586293142);
var G__12580 = expr__12573;
return (pred__12572.cljs$core$IFn$_invoke$arity$2 ? pred__12572.cljs$core$IFn$_invoke$arity$2(G__12579,G__12580) : pred__12572.call(null,G__12579,G__12580));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__12561,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12561),null));
}
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12561){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__12561,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true;

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/DynamicFunction");
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
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__12565){
var extmap__4340__auto__ = (function (){var G__12581 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12565,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__12565)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12581);
} else {
return G__12581;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__12565),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__12565),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__12565),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(com.rpl.specter.impl.static_path_QMARK_(path)){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
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
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12583,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12587 = k12583;
var G__12587__$1 = (((G__12587 instanceof cljs.core.Keyword))?G__12587.fqn:null);
switch (G__12587__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12583,else__4304__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12588){
var vec__12589 = p__12588;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12582){
var self__ = this;
var G__12582__$1 = this;
return (new cljs.core.RecordIter((0),G__12582__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12592 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12592(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12584,other12585){
var self__ = this;
var this12584__$1 = this;
return (((!((other12585 == null)))) && ((this12584__$1.constructor === other12585.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12584__$1.dynamic_QMARK_,other12585.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12584__$1.precompiled,other12585.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12584__$1.__extmap,other12585.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12582){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12593 = cljs.core.keyword_identical_QMARK_;
var expr__12594 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12596 = new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423);
var G__12597 = expr__12594;
return (pred__12593.cljs$core$IFn$_invoke$arity$2 ? pred__12593.cljs$core$IFn$_invoke$arity$2(G__12596,G__12597) : pred__12593.call(null,G__12596,G__12597));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(G__12582,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12598 = new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609);
var G__12599 = expr__12594;
return (pred__12593.cljs$core$IFn$_invoke$arity$2 ? pred__12593.cljs$core$IFn$_invoke$arity$2(G__12598,G__12599) : pred__12593.call(null,G__12598,G__12599));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__12582,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12582),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled,null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12582){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__12582,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/CachedPathInfo");
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
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__12586){
var extmap__4340__auto__ = (function (){var G__12600 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12586,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], 0));
if(cljs.core.record_QMARK_(G__12586)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12600);
} else {
return G__12600;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__12586),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__12586),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12601 = (function (afn,meta12602){
this.afn = afn;
this.meta12602 = meta12602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl12601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12603,meta12602__$1){
var self__ = this;
var _12603__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12601(self__.afn,meta12602__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12603){
var self__ = this;
var _12603__$1 = this;
return self__.meta12602;
});

com.rpl.specter.impl.t_com$rpl$specter$impl12601.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl12601.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl12601.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl12601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12602","meta12602",10309286,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12601.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl12601.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12601";

com.rpl.specter.impl.t_com$rpl$specter$impl12601.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12601");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12601.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12601 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl12601(afn__$1,meta12602){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12601(afn__$1,meta12602));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12601(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12604 = (function (afn,meta12605){
this.afn = afn;
this.meta12605 = meta12605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl12604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12606,meta12605__$1){
var self__ = this;
var _12606__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12604(self__.afn,meta12605__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12606){
var self__ = this;
var _12606__$1 = this;
return self__.meta12605;
});

com.rpl.specter.impl.t_com$rpl$specter$impl12604.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl12604.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl12604.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl12604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta12605","meta12605",-1781546409,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12604.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl12604.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12604";

com.rpl.specter.impl.t_com$rpl$specter$impl12604.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12604");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12604.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12604 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl12604(afn__$1,meta12605){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12604(afn__$1,meta12605));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12604(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12607 = (function (cell,meta12608){
this.cell = cell;
this.meta12608 = meta12608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl12607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12609,meta12608__$1){
var self__ = this;
var _12609__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12607(self__.cell,meta12608__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl12607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12609){
var self__ = this;
var _12609__$1 = this;
return self__.meta12608;
});

com.rpl.specter.impl.t_com$rpl$specter$impl12607.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl12607.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12607.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta12608","meta12608",562112340,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl12607.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl12607.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12607";

com.rpl.specter.impl.t_com$rpl$specter$impl12607.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12607");
});

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12607.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12607 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl12607(cell__$1,meta12608){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12607(cell__$1,meta12608));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12607(cell,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12837 = arguments.length;
switch (G__12837) {
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
var args_arr__4662__auto__ = [];
var len__4641__auto___14372 = arguments.length;
var i__4642__auto___14373 = (0);
while(true){
if((i__4642__auto___14373 < len__4641__auto___14372)){
args_arr__4662__auto__.push((arguments[i__4642__auto___14373]));

var G__14375 = (i__4642__auto___14373 + (1));
i__4642__auto___14373 = G__14375;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__4663__auto__);

}
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__12285__auto__){
return nav1__12285__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__12285__auto__,nav2__12286__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__12285__auto__,nav2__12286__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__12629,G__12630,G__12631){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12629,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12630,G__12631));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__12632,G__12633,G__12634,G__12635){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12632,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__12633,G__12634,G__12635));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__12636,G__12637,G__12638,G__12639,G__12640){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12636,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__12637,G__12638,G__12639,G__12640));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__12641,G__12642,G__12643,G__12644,G__12645,G__12646){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12641,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__12642,G__12643,G__12644,G__12645,G__12646));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__12647,G__12648,G__12649,G__12650,G__12651,G__12652,G__12653){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12647,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__12648,G__12649,G__12650,G__12651,G__12652,G__12653));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__12654,G__12655,G__12656,G__12657,G__12658,G__12659,G__12660,G__12661){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12654,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__12655,G__12656,G__12657,G__12658,G__12659,G__12660,G__12661));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__12662,G__12663,G__12664,G__12665,G__12666,G__12667,G__12668,G__12669,G__12670){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12662,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__12663,G__12664,G__12665,G__12666,G__12667,G__12668,G__12669,G__12670));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__12671,G__12672,G__12673,G__12674,G__12675,G__12676,G__12677,G__12678,G__12679,G__12680){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12671,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__12672,G__12673,G__12674,G__12675,G__12676,G__12677,G__12678,G__12679,G__12680));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__12681,G__12682,G__12683,G__12684,G__12685,G__12686,G__12687,G__12688,G__12689,G__12690,G__12691){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12681,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__12682,G__12683,G__12684,G__12685,G__12686,G__12687,G__12688,G__12689,G__12690,G__12691));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__12692,G__12693,G__12694,G__12695,G__12696,G__12697,G__12698,G__12699,G__12700,G__12701,G__12702,G__12703){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12692,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__12693,G__12694,G__12695,G__12696,G__12697,G__12698,G__12699,G__12700,G__12701,G__12702,G__12703));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__12704,G__12705,G__12706,G__12707,G__12708,G__12709,G__12710,G__12711,G__12712,G__12713,G__12714,G__12715,G__12716){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12704,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__12705,G__12706,G__12707,G__12708,G__12709,G__12710,G__12711,G__12712,G__12713,G__12714,G__12715,G__12716));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__12717,G__12718,G__12719,G__12720,G__12721,G__12722,G__12723,G__12724,G__12725,G__12726,G__12727,G__12728,G__12729,G__12730){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12717,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__12718,G__12719,G__12720,G__12721,G__12722,G__12723,G__12724,G__12725,G__12726,G__12727,G__12728,G__12729,G__12730));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__12731,G__12732,G__12733,G__12734,G__12735,G__12736,G__12737,G__12738,G__12739,G__12740,G__12741,G__12742,G__12743,G__12744,G__12745){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12731,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__12732,G__12733,G__12734,G__12735,G__12736,G__12737,G__12738,G__12739,G__12740,G__12741,G__12742,G__12743,G__12744,G__12745));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__12746,G__12747,G__12748,G__12749,G__12750,G__12751,G__12752,G__12753,G__12754,G__12755,G__12756,G__12757,G__12758,G__12759,G__12760,G__12761){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12746,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__12747,G__12748,G__12749,G__12750,G__12751,G__12752,G__12753,G__12754,G__12755,G__12756,G__12757,G__12758,G__12759,G__12760,G__12761));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__12762,G__12763,G__12764,G__12765,G__12766,G__12767,G__12768,G__12769,G__12770,G__12771,G__12772,G__12773,G__12774,G__12775,G__12776,G__12777,G__12778){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12762,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__12763,G__12764,G__12765,G__12766,G__12767,G__12768,G__12769,G__12770,G__12771,G__12772,G__12773,G__12774,G__12775,G__12776,G__12777,G__12778));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__12779,G__12780,G__12781,G__12782,G__12783,G__12784,G__12785,G__12786,G__12787,G__12788,G__12789,G__12790,G__12791,G__12792,G__12793,G__12794,G__12795,G__12796){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12779,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__12780,G__12781,G__12782,G__12783,G__12784,G__12785,G__12786,G__12787,G__12788,G__12789,G__12790,G__12791,G__12792,G__12793,G__12794,G__12795,G__12796));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__12797,G__12798,G__12799,G__12800,G__12801,G__12802,G__12803,G__12804,G__12805,G__12806,G__12807,G__12808,G__12809,G__12810,G__12811,G__12812,G__12813,G__12814,G__12815){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12797,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__12798,G__12799,G__12800,G__12801,G__12802,G__12803,G__12804,G__12805,G__12806,G__12807,G__12808,G__12809,G__12810,G__12811,G__12812,G__12813,G__12814,G__12815));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__12610,G__12611,G__12612,G__12613,G__12614,G__12615,G__12616,G__12617,G__12618,G__12619,G__12620,G__12621,G__12622,G__12623,G__12624,G__12625,G__12626,G__12627,G__12628,rest__12287__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__12610,G__12611,G__12612,G__12613,G__12614,G__12615,G__12616,G__12617,G__12618,G__12619,G__12620,G__12621,G__12622,G__12623,G__12624,G__12625,G__12626,G__12627,G__12628),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__12287__auto__));
});

/** @this {Function} */
com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq12817){
var G__12818 = cljs.core.first(seq12817);
var seq12817__$1 = cljs.core.next(seq12817);
var G__12819 = cljs.core.first(seq12817__$1);
var seq12817__$2 = cljs.core.next(seq12817__$1);
var G__12820 = cljs.core.first(seq12817__$2);
var seq12817__$3 = cljs.core.next(seq12817__$2);
var G__12821 = cljs.core.first(seq12817__$3);
var seq12817__$4 = cljs.core.next(seq12817__$3);
var G__12822 = cljs.core.first(seq12817__$4);
var seq12817__$5 = cljs.core.next(seq12817__$4);
var G__12823 = cljs.core.first(seq12817__$5);
var seq12817__$6 = cljs.core.next(seq12817__$5);
var G__12824 = cljs.core.first(seq12817__$6);
var seq12817__$7 = cljs.core.next(seq12817__$6);
var G__12825 = cljs.core.first(seq12817__$7);
var seq12817__$8 = cljs.core.next(seq12817__$7);
var G__12826 = cljs.core.first(seq12817__$8);
var seq12817__$9 = cljs.core.next(seq12817__$8);
var G__12827 = cljs.core.first(seq12817__$9);
var seq12817__$10 = cljs.core.next(seq12817__$9);
var G__12828 = cljs.core.first(seq12817__$10);
var seq12817__$11 = cljs.core.next(seq12817__$10);
var G__12829 = cljs.core.first(seq12817__$11);
var seq12817__$12 = cljs.core.next(seq12817__$11);
var G__12830 = cljs.core.first(seq12817__$12);
var seq12817__$13 = cljs.core.next(seq12817__$12);
var G__12831 = cljs.core.first(seq12817__$13);
var seq12817__$14 = cljs.core.next(seq12817__$13);
var G__12832 = cljs.core.first(seq12817__$14);
var seq12817__$15 = cljs.core.next(seq12817__$14);
var G__12833 = cljs.core.first(seq12817__$15);
var seq12817__$16 = cljs.core.next(seq12817__$15);
var G__12834 = cljs.core.first(seq12817__$16);
var seq12817__$17 = cljs.core.next(seq12817__$16);
var G__12835 = cljs.core.first(seq12817__$17);
var seq12817__$18 = cljs.core.next(seq12817__$17);
var G__12836 = cljs.core.first(seq12817__$18);
var seq12817__$19 = cljs.core.next(seq12817__$18);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12818,G__12819,G__12820,G__12821,G__12822,G__12823,G__12824,G__12825,G__12826,G__12827,G__12828,G__12829,G__12830,G__12831,G__12832,G__12833,G__12834,G__12835,G__12836,seq12817__$19);
});

com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19);

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__12838 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__12838) : next_fn.call(null,G__12838));
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,cljs.core.count(structure)))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__12839 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__12839) : next_fn.call(null,G__12839));
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
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__12840,i){
var vec__12841 = p__12840;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12841,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12841,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12841,(2),null);
var curr = vec__12841;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__12844){
var vec__12845 = p__12844;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12845,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12845,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(((com.rpl.specter.impl.fn_invocation_QMARK_(structure)) && (com.rpl.specter.impl.fn_invocation_QMARK_(ret)))){
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
if((!((r === com.rpl.specter.impl.NONE)))){
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
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$))))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
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
var G__14422 = orig;
o = G__14422;
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
var G__14426__delegate = function (args){
if(com.rpl.specter.impl.all_static_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__14426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14428__i = 0, G__14428__a = new Array(arguments.length -  0);
while (G__14428__i < G__14428__a.length) {G__14428__a[G__14428__i] = arguments[G__14428__i + 0]; ++G__14428__i;}
  args = new cljs.core.IndexedSeq(G__14428__a,0,null);
} 
return G__14426__delegate.call(this,args);};
G__14426.cljs$lang$maxFixedArity = 0;
G__14426.cljs$lang$applyTo = (function (arglist__14429){
var args = cljs.core.seq(arglist__14429);
return G__14426__delegate(args);
});
G__14426.cljs$core$IFn$_invoke$arity$variadic = G__14426__delegate;
return G__14426;
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
var v = new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_((function (){var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return com.rpl.specter.impl.dynamic_var_QMARK_(v);
} else {
return and__4036__auto__;
}
})())){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__4047__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(v);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(o),(function (){var or__4047__auto__ = (function (){var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return com.rpl.specter.impl.direct_nav_QMARK_(v);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
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
var op = (function (){var G__12855 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__12855) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__12855));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(o)));
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__12856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__12856) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__12856));
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
var G__12860 = arguments.length;
switch (G__12860) {
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
return com.rpl.specter.impl.preserve_map((function (p1__12857_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__12857_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12858_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__12858_SHARP_,false);
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
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4348__auto__.call(null,this$,dynamic_params));
} else {
var m__4348__auto____$1 = (com.rpl.specter.impl.late_resolve["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4348__auto____$1.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12862,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12866 = k12862;
var G__12866__$1 = (((G__12866 instanceof cljs.core.Keyword))?G__12866.fqn:null);
switch (G__12866__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12862,else__4304__auto__);

}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12867){
var vec__12868 = p__12867;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12868,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12868,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12861){
var self__ = this;
var G__12861__$1 = this;
return (new cljs.core.RecordIter((0),G__12861__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12871 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12871(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12863,other12864){
var self__ = this;
var this12863__$1 = this;
return (((!((other12864 == null)))) && ((this12863__$1.constructor === other12864.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12863__$1.idx,other12864.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12863__$1.__extmap,other12864.__extmap)));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12861){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12872 = cljs.core.keyword_identical_QMARK_;
var expr__12873 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12875 = new cljs.core.Keyword(null,"idx","idx",1053688473);
var G__12876 = expr__12873;
return (pred__12872.cljs$core$IFn$_invoke$arity$2 ? pred__12872.cljs$core$IFn$_invoke$arity$2(G__12875,G__12876) : pred__12872.call(null,G__12875,G__12876));
})())){
return (new com.rpl.specter.impl.LocalParam(G__12861,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12861),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12861){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__12861,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

com.rpl.specter.impl.LocalParam.cljs$lang$type = true;

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
});

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LocalParam");
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
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__12865){
var extmap__4340__auto__ = (function (){var G__12877 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12865,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__12865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12877);
} else {
return G__12877;
}
})();
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__12865),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12879,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12883 = k12879;
var G__12883__$1 = (((G__12883 instanceof cljs.core.Keyword))?G__12883.fqn:null);
switch (G__12883__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12879,else__4304__auto__);

}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12884){
var vec__12885 = p__12884;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12885,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12885,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12878){
var self__ = this;
var G__12878__$1 = this;
return (new cljs.core.RecordIter((0),G__12878__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12888 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12888(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12880,other12881){
var self__ = this;
var this12880__$1 = this;
return (((!((other12881 == null)))) && ((this12880__$1.constructor === other12881.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12880__$1.val,other12881.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12880__$1.__extmap,other12881.__extmap)));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12878){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12889 = cljs.core.keyword_identical_QMARK_;
var expr__12890 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12892 = new cljs.core.Keyword(null,"val","val",128701612);
var G__12893 = expr__12890;
return (pred__12889.cljs$core$IFn$_invoke$arity$2 ? pred__12889.cljs$core$IFn$_invoke$arity$2(G__12892,G__12893) : pred__12889.call(null,G__12892,G__12893));
})())){
return (new com.rpl.specter.impl.StaticParam(G__12878,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12878),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12878){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__12878,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

com.rpl.specter.impl.StaticParam.cljs$lang$type = true;

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
});

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/StaticParam");
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
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__12882){
var extmap__4340__auto__ = (function (){var G__12894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12882,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core.record_QMARK_(G__12882)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12894);
} else {
return G__12894;
}
})();
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__12882),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12916,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12920 = k12916;
var G__12920__$1 = (((G__12920 instanceof cljs.core.Keyword))?G__12920.fqn:null);
switch (G__12920__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12916,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12921){
var vec__12922 = p__12921;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12922,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12922,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12895){
var self__ = this;
var this__12315__auto____$1 = this;
var fexpr__12925 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12895);
return (fexpr__12925.cljs$core$IFn$_invoke$arity$0 ? fexpr__12925.cljs$core$IFn$_invoke$arity$0() : fexpr__12925.call(null));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12915){
var self__ = this;
var G__12915__$1 = this;
return (new cljs.core.RecordIter((0),G__12915__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12926 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12926(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12917,other12918){
var self__ = this;
var this12917__$1 = this;
return (((!((other12918 == null)))) && ((this12917__$1.constructor === other12918.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12917__$1.fn,other12918.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12917__$1.__extmap,other12918.__extmap)));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12915){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12927 = cljs.core.keyword_identical_QMARK_;
var expr__12928 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12930 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__12931 = expr__12928;
return (pred__12927.cljs$core$IFn$_invoke$arity$2 ? pred__12927.cljs$core$IFn$_invoke$arity$2(G__12930,G__12931) : pred__12927.call(null,G__12930,G__12931));
})())){
return (new com.rpl.specter.impl.LateFn0(G__12915,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12915),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12915){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__12915,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
});

com.rpl.specter.impl.LateFn0.cljs$lang$type = true;

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
});

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn0");
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
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__12919){
var extmap__4340__auto__ = (function (){var G__12932 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12919,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.record_QMARK_(G__12919)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12932);
} else {
return G__12932;
}
})();
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__12919),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12934,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12938 = k12934;
var G__12938__$1 = (((G__12938 instanceof cljs.core.Keyword))?G__12938.fqn:null);
switch (G__12938__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12934,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12939){
var vec__12940 = p__12939;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12940,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12940,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12896){
var self__ = this;
var this__12315__auto____$1 = this;
var G__12944 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12896);
var fexpr__12943 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12896);
return (fexpr__12943.cljs$core$IFn$_invoke$arity$1 ? fexpr__12943.cljs$core$IFn$_invoke$arity$1(G__12944) : fexpr__12943.call(null,G__12944));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12933){
var self__ = this;
var G__12933__$1 = this;
return (new cljs.core.RecordIter((0),G__12933__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12945 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12945(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12935,other12936){
var self__ = this;
var this12935__$1 = this;
return (((!((other12936 == null)))) && ((this12935__$1.constructor === other12936.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12935__$1.fn,other12936.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12935__$1.arg0,other12936.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12935__$1.__extmap,other12936.__extmap)));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12933){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12946 = cljs.core.keyword_identical_QMARK_;
var expr__12947 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12949 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__12950 = expr__12947;
return (pred__12946.cljs$core$IFn$_invoke$arity$2 ? pred__12946.cljs$core$IFn$_invoke$arity$2(G__12949,G__12950) : pred__12946.call(null,G__12949,G__12950));
})())){
return (new com.rpl.specter.impl.LateFn1(G__12933,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12951 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__12952 = expr__12947;
return (pred__12946.cljs$core$IFn$_invoke$arity$2 ? pred__12946.cljs$core$IFn$_invoke$arity$2(G__12951,G__12952) : pred__12946.call(null,G__12951,G__12952));
})())){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__12933,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12933),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12933){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__12933,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
});

com.rpl.specter.impl.LateFn1.cljs$lang$type = true;

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
});

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn1");
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
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__12937){
var extmap__4340__auto__ = (function (){var G__12953 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12937,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355)], 0));
if(cljs.core.record_QMARK_(G__12937)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12953);
} else {
return G__12953;
}
})();
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__12937),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__12937),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12955,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12959 = k12955;
var G__12959__$1 = (((G__12959 instanceof cljs.core.Keyword))?G__12959.fqn:null);
switch (G__12959__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12955,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12960){
var vec__12961 = p__12960;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12961,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12961,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12897){
var self__ = this;
var this__12315__auto____$1 = this;
var G__12965 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12897);
var G__12966 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12897);
var fexpr__12964 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12897);
return (fexpr__12964.cljs$core$IFn$_invoke$arity$2 ? fexpr__12964.cljs$core$IFn$_invoke$arity$2(G__12965,G__12966) : fexpr__12964.call(null,G__12965,G__12966));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12954){
var self__ = this;
var G__12954__$1 = this;
return (new cljs.core.RecordIter((0),G__12954__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12967 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12967(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12956,other12957){
var self__ = this;
var this12956__$1 = this;
return (((!((other12957 == null)))) && ((this12956__$1.constructor === other12957.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12956__$1.fn,other12957.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12956__$1.arg0,other12957.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12956__$1.arg1,other12957.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12956__$1.__extmap,other12957.__extmap)));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12954){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12968 = cljs.core.keyword_identical_QMARK_;
var expr__12969 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12971 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__12972 = expr__12969;
return (pred__12968.cljs$core$IFn$_invoke$arity$2 ? pred__12968.cljs$core$IFn$_invoke$arity$2(G__12971,G__12972) : pred__12968.call(null,G__12971,G__12972));
})())){
return (new com.rpl.specter.impl.LateFn2(G__12954,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12973 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__12974 = expr__12969;
return (pred__12968.cljs$core$IFn$_invoke$arity$2 ? pred__12968.cljs$core$IFn$_invoke$arity$2(G__12973,G__12974) : pred__12968.call(null,G__12973,G__12974));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__12954,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12975 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__12976 = expr__12969;
return (pred__12968.cljs$core$IFn$_invoke$arity$2 ? pred__12968.cljs$core$IFn$_invoke$arity$2(G__12975,G__12976) : pred__12968.call(null,G__12975,G__12976));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__12954,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12954),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12954){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__12954,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
});

com.rpl.specter.impl.LateFn2.cljs$lang$type = true;

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
});

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn2");
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
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__12958){
var extmap__4340__auto__ = (function (){var G__12977 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12958,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], 0));
if(cljs.core.record_QMARK_(G__12958)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12977);
} else {
return G__12977;
}
})();
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__12958),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__12958),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__12958),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k12979,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__12983 = k12979;
var G__12983__$1 = (((G__12983 instanceof cljs.core.Keyword))?G__12983.fqn:null);
switch (G__12983__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12979,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__12984){
var vec__12985 = p__12984;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12985,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12985,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12898){
var self__ = this;
var this__12315__auto____$1 = this;
var G__12989 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12898);
var G__12990 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12898);
var G__12991 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12898);
var fexpr__12988 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12898);
return (fexpr__12988.cljs$core$IFn$_invoke$arity$3 ? fexpr__12988.cljs$core$IFn$_invoke$arity$3(G__12989,G__12990,G__12991) : fexpr__12988.call(null,G__12989,G__12990,G__12991));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12978){
var self__ = this;
var G__12978__$1 = this;
return (new cljs.core.RecordIter((0),G__12978__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__12992 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__12992(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12980,other12981){
var self__ = this;
var this12980__$1 = this;
return (((!((other12981 == null)))) && ((this12980__$1.constructor === other12981.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12980__$1.fn,other12981.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12980__$1.arg0,other12981.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12980__$1.arg1,other12981.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12980__$1.arg2,other12981.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12980__$1.__extmap,other12981.__extmap)));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__12978){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__12993 = cljs.core.keyword_identical_QMARK_;
var expr__12994 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__12996 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__12997 = expr__12994;
return (pred__12993.cljs$core$IFn$_invoke$arity$2 ? pred__12993.cljs$core$IFn$_invoke$arity$2(G__12996,G__12997) : pred__12993.call(null,G__12996,G__12997));
})())){
return (new com.rpl.specter.impl.LateFn3(G__12978,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12998 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__12999 = expr__12994;
return (pred__12993.cljs$core$IFn$_invoke$arity$2 ? pred__12993.cljs$core$IFn$_invoke$arity$2(G__12998,G__12999) : pred__12993.call(null,G__12998,G__12999));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__12978,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13000 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13001 = expr__12994;
return (pred__12993.cljs$core$IFn$_invoke$arity$2 ? pred__12993.cljs$core$IFn$_invoke$arity$2(G__13000,G__13001) : pred__12993.call(null,G__13000,G__13001));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__12978,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13002 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13003 = expr__12994;
return (pred__12993.cljs$core$IFn$_invoke$arity$2 ? pred__12993.cljs$core$IFn$_invoke$arity$2(G__13002,G__13003) : pred__12993.call(null,G__13002,G__13003));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__12978,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__12978),null));
}
}
}
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__12978){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12978,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
});

com.rpl.specter.impl.LateFn3.cljs$lang$type = true;

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
});

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn3");
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
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__12982){
var extmap__4340__auto__ = (function (){var G__13004 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12982,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], 0));
if(cljs.core.record_QMARK_(G__12982)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13004);
} else {
return G__13004;
}
})();
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__12982),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__12982),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__12982),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__12982),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13006,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13010 = k13006;
var G__13010__$1 = (((G__13010 instanceof cljs.core.Keyword))?G__13010.fqn:null);
switch (G__13010__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13006,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13011){
var vec__13012 = p__13011;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13012,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13012,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12899){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13016 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12899);
var G__13017 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12899);
var G__13018 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12899);
var G__13019 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12899);
var fexpr__13015 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12899);
return (fexpr__13015.cljs$core$IFn$_invoke$arity$4 ? fexpr__13015.cljs$core$IFn$_invoke$arity$4(G__13016,G__13017,G__13018,G__13019) : fexpr__13015.call(null,G__13016,G__13017,G__13018,G__13019));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13005){
var self__ = this;
var G__13005__$1 = this;
return (new cljs.core.RecordIter((0),G__13005__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13020 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13020(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13007,other13008){
var self__ = this;
var this13007__$1 = this;
return (((!((other13008 == null)))) && ((this13007__$1.constructor === other13008.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13007__$1.fn,other13008.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13007__$1.arg0,other13008.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13007__$1.arg1,other13008.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13007__$1.arg2,other13008.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13007__$1.arg3,other13008.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13007__$1.__extmap,other13008.__extmap)));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13005){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13021 = cljs.core.keyword_identical_QMARK_;
var expr__13022 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13024 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13025 = expr__13022;
return (pred__13021.cljs$core$IFn$_invoke$arity$2 ? pred__13021.cljs$core$IFn$_invoke$arity$2(G__13024,G__13025) : pred__13021.call(null,G__13024,G__13025));
})())){
return (new com.rpl.specter.impl.LateFn4(G__13005,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13026 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13027 = expr__13022;
return (pred__13021.cljs$core$IFn$_invoke$arity$2 ? pred__13021.cljs$core$IFn$_invoke$arity$2(G__13026,G__13027) : pred__13021.call(null,G__13026,G__13027));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__13005,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13028 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13029 = expr__13022;
return (pred__13021.cljs$core$IFn$_invoke$arity$2 ? pred__13021.cljs$core$IFn$_invoke$arity$2(G__13028,G__13029) : pred__13021.call(null,G__13028,G__13029));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__13005,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13030 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13031 = expr__13022;
return (pred__13021.cljs$core$IFn$_invoke$arity$2 ? pred__13021.cljs$core$IFn$_invoke$arity$2(G__13030,G__13031) : pred__13021.call(null,G__13030,G__13031));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__13005,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13032 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13033 = expr__13022;
return (pred__13021.cljs$core$IFn$_invoke$arity$2 ? pred__13021.cljs$core$IFn$_invoke$arity$2(G__13032,G__13033) : pred__13021.call(null,G__13032,G__13033));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13005,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13005),null));
}
}
}
}
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13005){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13005,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
});

com.rpl.specter.impl.LateFn4.cljs$lang$type = true;

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
});

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn4");
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
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__13009){
var extmap__4340__auto__ = (function (){var G__13034 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13009,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], 0));
if(cljs.core.record_QMARK_(G__13009)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13034);
} else {
return G__13034;
}
})();
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13009),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13009),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13009),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13009),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13009),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13036,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13040 = k13036;
var G__13040__$1 = (((G__13040 instanceof cljs.core.Keyword))?G__13040.fqn:null);
switch (G__13040__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13036,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13041){
var vec__13042 = p__13041;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13042,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13042,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12900){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13046 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12900);
var G__13047 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12900);
var G__13048 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12900);
var G__13049 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12900);
var G__13050 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12900);
var fexpr__13045 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12900);
return (fexpr__13045.cljs$core$IFn$_invoke$arity$5 ? fexpr__13045.cljs$core$IFn$_invoke$arity$5(G__13046,G__13047,G__13048,G__13049,G__13050) : fexpr__13045.call(null,G__13046,G__13047,G__13048,G__13049,G__13050));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13035){
var self__ = this;
var G__13035__$1 = this;
return (new cljs.core.RecordIter((0),G__13035__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13051 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13051(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13037,other13038){
var self__ = this;
var this13037__$1 = this;
return (((!((other13038 == null)))) && ((this13037__$1.constructor === other13038.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13037__$1.fn,other13038.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13037__$1.arg0,other13038.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13037__$1.arg1,other13038.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13037__$1.arg2,other13038.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13037__$1.arg3,other13038.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13037__$1.arg4,other13038.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13037__$1.__extmap,other13038.__extmap)));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13035){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13052 = cljs.core.keyword_identical_QMARK_;
var expr__13053 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13055 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13056 = expr__13053;
return (pred__13052.cljs$core$IFn$_invoke$arity$2 ? pred__13052.cljs$core$IFn$_invoke$arity$2(G__13055,G__13056) : pred__13052.call(null,G__13055,G__13056));
})())){
return (new com.rpl.specter.impl.LateFn5(G__13035,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13057 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13058 = expr__13053;
return (pred__13052.cljs$core$IFn$_invoke$arity$2 ? pred__13052.cljs$core$IFn$_invoke$arity$2(G__13057,G__13058) : pred__13052.call(null,G__13057,G__13058));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__13035,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13059 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13060 = expr__13053;
return (pred__13052.cljs$core$IFn$_invoke$arity$2 ? pred__13052.cljs$core$IFn$_invoke$arity$2(G__13059,G__13060) : pred__13052.call(null,G__13059,G__13060));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__13035,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13061 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13062 = expr__13053;
return (pred__13052.cljs$core$IFn$_invoke$arity$2 ? pred__13052.cljs$core$IFn$_invoke$arity$2(G__13061,G__13062) : pred__13052.call(null,G__13061,G__13062));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__13035,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13063 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13064 = expr__13053;
return (pred__13052.cljs$core$IFn$_invoke$arity$2 ? pred__13052.cljs$core$IFn$_invoke$arity$2(G__13063,G__13064) : pred__13052.call(null,G__13063,G__13064));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13035,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13065 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13066 = expr__13053;
return (pred__13052.cljs$core$IFn$_invoke$arity$2 ? pred__13052.cljs$core$IFn$_invoke$arity$2(G__13065,G__13066) : pred__13052.call(null,G__13065,G__13066));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13035,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13035),null));
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13035){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13035,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
});

com.rpl.specter.impl.LateFn5.cljs$lang$type = true;

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
});

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn5");
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
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__13039){
var extmap__4340__auto__ = (function (){var G__13067 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13039,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], 0));
if(cljs.core.record_QMARK_(G__13039)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13067);
} else {
return G__13067;
}
})();
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13039),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13039),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13039),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13039),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13039),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13039),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13069,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13073 = k13069;
var G__13073__$1 = (((G__13073 instanceof cljs.core.Keyword))?G__13073.fqn:null);
switch (G__13073__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13069,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13074){
var vec__13075 = p__13074;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13075,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13075,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12901){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13079 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12901);
var G__13080 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12901);
var G__13081 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12901);
var G__13082 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12901);
var G__13083 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12901);
var G__13084 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12901);
var fexpr__13078 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12901);
return (fexpr__13078.cljs$core$IFn$_invoke$arity$6 ? fexpr__13078.cljs$core$IFn$_invoke$arity$6(G__13079,G__13080,G__13081,G__13082,G__13083,G__13084) : fexpr__13078.call(null,G__13079,G__13080,G__13081,G__13082,G__13083,G__13084));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13068){
var self__ = this;
var G__13068__$1 = this;
return (new cljs.core.RecordIter((0),G__13068__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13085 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13085(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13070,other13071){
var self__ = this;
var this13070__$1 = this;
return (((!((other13071 == null)))) && ((this13070__$1.constructor === other13071.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.fn,other13071.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.arg0,other13071.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.arg1,other13071.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.arg2,other13071.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.arg3,other13071.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.arg4,other13071.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.arg5,other13071.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13070__$1.__extmap,other13071.__extmap)));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13068){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13086 = cljs.core.keyword_identical_QMARK_;
var expr__13087 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13089 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13090 = expr__13087;
return (pred__13086.cljs$core$IFn$_invoke$arity$2 ? pred__13086.cljs$core$IFn$_invoke$arity$2(G__13089,G__13090) : pred__13086.call(null,G__13089,G__13090));
})())){
return (new com.rpl.specter.impl.LateFn6(G__13068,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13091 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13092 = expr__13087;
return (pred__13086.cljs$core$IFn$_invoke$arity$2 ? pred__13086.cljs$core$IFn$_invoke$arity$2(G__13091,G__13092) : pred__13086.call(null,G__13091,G__13092));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__13068,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13093 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13094 = expr__13087;
return (pred__13086.cljs$core$IFn$_invoke$arity$2 ? pred__13086.cljs$core$IFn$_invoke$arity$2(G__13093,G__13094) : pred__13086.call(null,G__13093,G__13094));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__13068,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13095 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13096 = expr__13087;
return (pred__13086.cljs$core$IFn$_invoke$arity$2 ? pred__13086.cljs$core$IFn$_invoke$arity$2(G__13095,G__13096) : pred__13086.call(null,G__13095,G__13096));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__13068,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13097 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13098 = expr__13087;
return (pred__13086.cljs$core$IFn$_invoke$arity$2 ? pred__13086.cljs$core$IFn$_invoke$arity$2(G__13097,G__13098) : pred__13086.call(null,G__13097,G__13098));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13068,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13099 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13100 = expr__13087;
return (pred__13086.cljs$core$IFn$_invoke$arity$2 ? pred__13086.cljs$core$IFn$_invoke$arity$2(G__13099,G__13100) : pred__13086.call(null,G__13099,G__13100));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13068,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13101 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13102 = expr__13087;
return (pred__13086.cljs$core$IFn$_invoke$arity$2 ? pred__13086.cljs$core$IFn$_invoke$arity$2(G__13101,G__13102) : pred__13086.call(null,G__13101,G__13102));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13068,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13068),null));
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13068){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13068,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
});

com.rpl.specter.impl.LateFn6.cljs$lang$type = true;

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
});

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn6");
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
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__13072){
var extmap__4340__auto__ = (function (){var G__13103 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13072,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], 0));
if(cljs.core.record_QMARK_(G__13072)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13103);
} else {
return G__13103;
}
})();
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13072),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13072),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13072),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13072),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13072),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13072),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13072),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13105,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13109 = k13105;
var G__13109__$1 = (((G__13109 instanceof cljs.core.Keyword))?G__13109.fqn:null);
switch (G__13109__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13105,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13110){
var vec__13111 = p__13110;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13111,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13111,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12902){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13115 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12902);
var G__13116 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12902);
var G__13117 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12902);
var G__13118 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12902);
var G__13119 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12902);
var G__13120 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12902);
var G__13121 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12902);
var fexpr__13114 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12902);
return (fexpr__13114.cljs$core$IFn$_invoke$arity$7 ? fexpr__13114.cljs$core$IFn$_invoke$arity$7(G__13115,G__13116,G__13117,G__13118,G__13119,G__13120,G__13121) : fexpr__13114.call(null,G__13115,G__13116,G__13117,G__13118,G__13119,G__13120,G__13121));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13104){
var self__ = this;
var G__13104__$1 = this;
return (new cljs.core.RecordIter((0),G__13104__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13122 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13122(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13106,other13107){
var self__ = this;
var this13106__$1 = this;
return (((!((other13107 == null)))) && ((this13106__$1.constructor === other13107.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.fn,other13107.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.arg0,other13107.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.arg1,other13107.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.arg2,other13107.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.arg3,other13107.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.arg4,other13107.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.arg5,other13107.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.arg6,other13107.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13106__$1.__extmap,other13107.__extmap)));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13104){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13123 = cljs.core.keyword_identical_QMARK_;
var expr__13124 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13126 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13127 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13126,G__13127) : pred__13123.call(null,G__13126,G__13127));
})())){
return (new com.rpl.specter.impl.LateFn7(G__13104,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13128 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13129 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13128,G__13129) : pred__13123.call(null,G__13128,G__13129));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__13104,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13130 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13131 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13130,G__13131) : pred__13123.call(null,G__13130,G__13131));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__13104,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13132 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13133 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13132,G__13133) : pred__13123.call(null,G__13132,G__13133));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__13104,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13134 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13135 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13134,G__13135) : pred__13123.call(null,G__13134,G__13135));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13104,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13136 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13137 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13136,G__13137) : pred__13123.call(null,G__13136,G__13137));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13104,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13138 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13139 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13138,G__13139) : pred__13123.call(null,G__13138,G__13139));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13104,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13140 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13141 = expr__13124;
return (pred__13123.cljs$core$IFn$_invoke$arity$2 ? pred__13123.cljs$core$IFn$_invoke$arity$2(G__13140,G__13141) : pred__13123.call(null,G__13140,G__13141));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13104,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13104),null));
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13104){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13104,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
});

com.rpl.specter.impl.LateFn7.cljs$lang$type = true;

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
});

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn7");
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
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__13108){
var extmap__4340__auto__ = (function (){var G__13142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13108,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], 0));
if(cljs.core.record_QMARK_(G__13108)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13142);
} else {
return G__13142;
}
})();
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13108),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13108),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13108),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13108),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13108),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13108),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13108),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13108),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13144,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13148 = k13144;
var G__13148__$1 = (((G__13148 instanceof cljs.core.Keyword))?G__13148.fqn:null);
switch (G__13148__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13144,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13149){
var vec__13150 = p__13149;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13150,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13150,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12903){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13154 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12903);
var G__13155 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12903);
var G__13156 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12903);
var G__13157 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12903);
var G__13158 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12903);
var G__13159 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12903);
var G__13160 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12903);
var G__13161 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12903);
var fexpr__13153 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12903);
return (fexpr__13153.cljs$core$IFn$_invoke$arity$8 ? fexpr__13153.cljs$core$IFn$_invoke$arity$8(G__13154,G__13155,G__13156,G__13157,G__13158,G__13159,G__13160,G__13161) : fexpr__13153.call(null,G__13154,G__13155,G__13156,G__13157,G__13158,G__13159,G__13160,G__13161));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13143){
var self__ = this;
var G__13143__$1 = this;
return (new cljs.core.RecordIter((0),G__13143__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13162 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13162(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13145,other13146){
var self__ = this;
var this13145__$1 = this;
return (((!((other13146 == null)))) && ((this13145__$1.constructor === other13146.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.fn,other13146.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg0,other13146.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg1,other13146.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg2,other13146.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg3,other13146.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg4,other13146.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg5,other13146.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg6,other13146.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.arg7,other13146.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13145__$1.__extmap,other13146.__extmap)));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13143){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13163 = cljs.core.keyword_identical_QMARK_;
var expr__13164 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13166 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13167 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13166,G__13167) : pred__13163.call(null,G__13166,G__13167));
})())){
return (new com.rpl.specter.impl.LateFn8(G__13143,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13168 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13169 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13168,G__13169) : pred__13163.call(null,G__13168,G__13169));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__13143,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13170 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13171 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13170,G__13171) : pred__13163.call(null,G__13170,G__13171));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__13143,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13172 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13173 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13172,G__13173) : pred__13163.call(null,G__13172,G__13173));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__13143,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13174 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13175 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13174,G__13175) : pred__13163.call(null,G__13174,G__13175));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13143,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13176 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13177 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13176,G__13177) : pred__13163.call(null,G__13176,G__13177));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13143,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13178 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13179 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13178,G__13179) : pred__13163.call(null,G__13178,G__13179));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13143,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13180 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13181 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13180,G__13181) : pred__13163.call(null,G__13180,G__13181));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13143,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13182 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13183 = expr__13164;
return (pred__13163.cljs$core$IFn$_invoke$arity$2 ? pred__13163.cljs$core$IFn$_invoke$arity$2(G__13182,G__13183) : pred__13163.call(null,G__13182,G__13183));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13143,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13143),null));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13143){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13143,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
});

com.rpl.specter.impl.LateFn8.cljs$lang$type = true;

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
});

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn8");
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
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__13147){
var extmap__4340__auto__ = (function (){var G__13184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13147,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], 0));
if(cljs.core.record_QMARK_(G__13147)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13184);
} else {
return G__13184;
}
})();
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13147),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13147),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13186,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13190 = k13186;
var G__13190__$1 = (((G__13190 instanceof cljs.core.Keyword))?G__13190.fqn:null);
switch (G__13190__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13186,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13191){
var vec__13192 = p__13191;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13192,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13192,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12904){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13196 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12904);
var G__13197 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12904);
var G__13198 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12904);
var G__13199 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12904);
var G__13200 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12904);
var G__13201 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12904);
var G__13202 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12904);
var G__13203 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12904);
var G__13204 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12904);
var fexpr__13195 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12904);
return (fexpr__13195.cljs$core$IFn$_invoke$arity$9 ? fexpr__13195.cljs$core$IFn$_invoke$arity$9(G__13196,G__13197,G__13198,G__13199,G__13200,G__13201,G__13202,G__13203,G__13204) : fexpr__13195.call(null,G__13196,G__13197,G__13198,G__13199,G__13200,G__13201,G__13202,G__13203,G__13204));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13185){
var self__ = this;
var G__13185__$1 = this;
return (new cljs.core.RecordIter((0),G__13185__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13205 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13205(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13187,other13188){
var self__ = this;
var this13187__$1 = this;
return (((!((other13188 == null)))) && ((this13187__$1.constructor === other13188.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.fn,other13188.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg0,other13188.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg1,other13188.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg2,other13188.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg3,other13188.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg4,other13188.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg5,other13188.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg6,other13188.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg7,other13188.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.arg8,other13188.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13187__$1.__extmap,other13188.__extmap)));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13185){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13206 = cljs.core.keyword_identical_QMARK_;
var expr__13207 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13209 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13210 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13209,G__13210) : pred__13206.call(null,G__13209,G__13210));
})())){
return (new com.rpl.specter.impl.LateFn9(G__13185,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13211 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13212 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13211,G__13212) : pred__13206.call(null,G__13211,G__13212));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__13185,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13213 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13214 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13213,G__13214) : pred__13206.call(null,G__13213,G__13214));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__13185,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13215 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13216 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13215,G__13216) : pred__13206.call(null,G__13215,G__13216));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__13185,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13217 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13218 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13217,G__13218) : pred__13206.call(null,G__13217,G__13218));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13185,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13219 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13220 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13219,G__13220) : pred__13206.call(null,G__13219,G__13220));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13185,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13221 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13222 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13221,G__13222) : pred__13206.call(null,G__13221,G__13222));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13185,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13223 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13224 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13223,G__13224) : pred__13206.call(null,G__13223,G__13224));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13185,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13225 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13226 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13225,G__13226) : pred__13206.call(null,G__13225,G__13226));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13185,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13227 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13228 = expr__13207;
return (pred__13206.cljs$core$IFn$_invoke$arity$2 ? pred__13206.cljs$core$IFn$_invoke$arity$2(G__13227,G__13228) : pred__13206.call(null,G__13227,G__13228));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13185,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13185),null));
}
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13185){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13185,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
});

com.rpl.specter.impl.LateFn9.cljs$lang$type = true;

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
});

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn9");
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
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__13189){
var extmap__4340__auto__ = (function (){var G__13229 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13189,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], 0));
if(cljs.core.record_QMARK_(G__13189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13229);
} else {
return G__13229;
}
})();
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13189),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13189),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13231,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13235 = k13231;
var G__13235__$1 = (((G__13235 instanceof cljs.core.Keyword))?G__13235.fqn:null);
switch (G__13235__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13231,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13236){
var vec__13237 = p__13236;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13237,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13237,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12905){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13241 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12905);
var G__13242 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12905);
var G__13243 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12905);
var G__13244 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12905);
var G__13245 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12905);
var G__13246 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12905);
var G__13247 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12905);
var G__13248 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12905);
var G__13249 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12905);
var G__13250 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12905);
var fexpr__13240 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12905);
return (fexpr__13240.cljs$core$IFn$_invoke$arity$10 ? fexpr__13240.cljs$core$IFn$_invoke$arity$10(G__13241,G__13242,G__13243,G__13244,G__13245,G__13246,G__13247,G__13248,G__13249,G__13250) : fexpr__13240.call(null,G__13241,G__13242,G__13243,G__13244,G__13245,G__13246,G__13247,G__13248,G__13249,G__13250));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13230){
var self__ = this;
var G__13230__$1 = this;
return (new cljs.core.RecordIter((0),G__13230__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13251 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13251(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13232,other13233){
var self__ = this;
var this13232__$1 = this;
return (((!((other13233 == null)))) && ((this13232__$1.constructor === other13233.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.fn,other13233.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg0,other13233.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg1,other13233.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg2,other13233.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg3,other13233.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg4,other13233.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg5,other13233.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg6,other13233.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg7,other13233.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg8,other13233.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.arg9,other13233.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13232__$1.__extmap,other13233.__extmap)));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13230){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13252 = cljs.core.keyword_identical_QMARK_;
var expr__13253 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13255 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13256 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13255,G__13256) : pred__13252.call(null,G__13255,G__13256));
})())){
return (new com.rpl.specter.impl.LateFn10(G__13230,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13257 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13258 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13257,G__13258) : pred__13252.call(null,G__13257,G__13258));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__13230,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13259 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13260 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13259,G__13260) : pred__13252.call(null,G__13259,G__13260));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__13230,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13261 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13262 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13261,G__13262) : pred__13252.call(null,G__13261,G__13262));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__13230,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13263 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13264 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13263,G__13264) : pred__13252.call(null,G__13263,G__13264));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13230,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13265 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13266 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13265,G__13266) : pred__13252.call(null,G__13265,G__13266));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13230,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13267 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13268 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13267,G__13268) : pred__13252.call(null,G__13267,G__13268));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13230,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13269 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13270 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13269,G__13270) : pred__13252.call(null,G__13269,G__13270));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13230,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13271 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13272 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13271,G__13272) : pred__13252.call(null,G__13271,G__13272));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13230,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13273 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13274 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13273,G__13274) : pred__13252.call(null,G__13273,G__13274));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13230,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13275 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13276 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13275,G__13276) : pred__13252.call(null,G__13275,G__13276));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13230,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13230),null));
}
}
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13230){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13230,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
});

com.rpl.specter.impl.LateFn10.cljs$lang$type = true;

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
});

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn10");
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
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__13234){
var extmap__4340__auto__ = (function (){var G__13277 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13234,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], 0));
if(cljs.core.record_QMARK_(G__13234)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13277);
} else {
return G__13277;
}
})();
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13234),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13234),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13279,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13283 = k13279;
var G__13283__$1 = (((G__13283 instanceof cljs.core.Keyword))?G__13283.fqn:null);
switch (G__13283__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13279,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13284){
var vec__13285 = p__13284;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13285,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13285,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12906){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13289 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12906);
var G__13290 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12906);
var G__13291 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12906);
var G__13292 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12906);
var G__13293 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12906);
var G__13294 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12906);
var G__13295 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12906);
var G__13296 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12906);
var G__13297 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12906);
var G__13298 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12906);
var G__13299 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12906);
var fexpr__13288 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12906);
return (fexpr__13288.cljs$core$IFn$_invoke$arity$11 ? fexpr__13288.cljs$core$IFn$_invoke$arity$11(G__13289,G__13290,G__13291,G__13292,G__13293,G__13294,G__13295,G__13296,G__13297,G__13298,G__13299) : fexpr__13288.call(null,G__13289,G__13290,G__13291,G__13292,G__13293,G__13294,G__13295,G__13296,G__13297,G__13298,G__13299));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13278){
var self__ = this;
var G__13278__$1 = this;
return (new cljs.core.RecordIter((0),G__13278__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13300 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13300(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13280,other13281){
var self__ = this;
var this13280__$1 = this;
return (((!((other13281 == null)))) && ((this13280__$1.constructor === other13281.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.fn,other13281.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg0,other13281.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg1,other13281.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg2,other13281.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg3,other13281.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg4,other13281.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg5,other13281.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg6,other13281.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg7,other13281.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg8,other13281.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg9,other13281.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.arg10,other13281.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13280__$1.__extmap,other13281.__extmap)));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13278){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13301 = cljs.core.keyword_identical_QMARK_;
var expr__13302 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13304 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13305 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13304,G__13305) : pred__13301.call(null,G__13304,G__13305));
})())){
return (new com.rpl.specter.impl.LateFn11(G__13278,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13306 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13307 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13306,G__13307) : pred__13301.call(null,G__13306,G__13307));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__13278,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13308 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13309 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13308,G__13309) : pred__13301.call(null,G__13308,G__13309));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__13278,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13310 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13311 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13310,G__13311) : pred__13301.call(null,G__13310,G__13311));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__13278,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13312 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13313 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13312,G__13313) : pred__13301.call(null,G__13312,G__13313));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13278,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13314 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13315 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13314,G__13315) : pred__13301.call(null,G__13314,G__13315));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13278,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13316 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13317 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13316,G__13317) : pred__13301.call(null,G__13316,G__13317));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13278,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13318 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13319 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13318,G__13319) : pred__13301.call(null,G__13318,G__13319));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13278,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13320 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13321 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13320,G__13321) : pred__13301.call(null,G__13320,G__13321));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13278,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13322 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13323 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13322,G__13323) : pred__13301.call(null,G__13322,G__13323));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13278,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13324 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13325 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13324,G__13325) : pred__13301.call(null,G__13324,G__13325));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13278,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13326 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13327 = expr__13302;
return (pred__13301.cljs$core$IFn$_invoke$arity$2 ? pred__13301.cljs$core$IFn$_invoke$arity$2(G__13326,G__13327) : pred__13301.call(null,G__13326,G__13327));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13278,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13278),null));
}
}
}
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13278){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13278,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
});

com.rpl.specter.impl.LateFn11.cljs$lang$type = true;

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
});

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn11");
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
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__13282){
var extmap__4340__auto__ = (function (){var G__13328 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13282,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], 0));
if(cljs.core.record_QMARK_(G__13282)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13328);
} else {
return G__13328;
}
})();
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13282),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13282),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13330,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13334 = k13330;
var G__13334__$1 = (((G__13334 instanceof cljs.core.Keyword))?G__13334.fqn:null);
switch (G__13334__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13330,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13335){
var vec__13336 = p__13335;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13336,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13336,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12907){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13340 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12907);
var G__13341 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12907);
var G__13342 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12907);
var G__13343 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12907);
var G__13344 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12907);
var G__13345 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12907);
var G__13346 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12907);
var G__13347 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12907);
var G__13348 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12907);
var G__13349 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12907);
var G__13350 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12907);
var G__13351 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12907);
var fexpr__13339 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12907);
return (fexpr__13339.cljs$core$IFn$_invoke$arity$12 ? fexpr__13339.cljs$core$IFn$_invoke$arity$12(G__13340,G__13341,G__13342,G__13343,G__13344,G__13345,G__13346,G__13347,G__13348,G__13349,G__13350,G__13351) : fexpr__13339.call(null,G__13340,G__13341,G__13342,G__13343,G__13344,G__13345,G__13346,G__13347,G__13348,G__13349,G__13350,G__13351));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13329){
var self__ = this;
var G__13329__$1 = this;
return (new cljs.core.RecordIter((0),G__13329__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13352 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13352(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13331,other13332){
var self__ = this;
var this13331__$1 = this;
return (((!((other13332 == null)))) && ((this13331__$1.constructor === other13332.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.fn,other13332.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg0,other13332.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg1,other13332.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg2,other13332.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg3,other13332.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg4,other13332.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg5,other13332.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg6,other13332.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg7,other13332.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg8,other13332.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg9,other13332.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg10,other13332.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.arg11,other13332.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13331__$1.__extmap,other13332.__extmap)));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13329){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13353 = cljs.core.keyword_identical_QMARK_;
var expr__13354 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13356 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13357 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13356,G__13357) : pred__13353.call(null,G__13356,G__13357));
})())){
return (new com.rpl.specter.impl.LateFn12(G__13329,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13358 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13359 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13358,G__13359) : pred__13353.call(null,G__13358,G__13359));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__13329,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13360 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13361 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13360,G__13361) : pred__13353.call(null,G__13360,G__13361));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__13329,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13362 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13363 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13362,G__13363) : pred__13353.call(null,G__13362,G__13363));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__13329,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13364 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13365 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13364,G__13365) : pred__13353.call(null,G__13364,G__13365));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13329,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13366 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13367 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13366,G__13367) : pred__13353.call(null,G__13366,G__13367));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13329,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13368 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13369 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13368,G__13369) : pred__13353.call(null,G__13368,G__13369));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13329,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13370 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13371 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13370,G__13371) : pred__13353.call(null,G__13370,G__13371));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13329,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13372 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13373 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13372,G__13373) : pred__13353.call(null,G__13372,G__13373));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13329,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13374 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13375 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13374,G__13375) : pred__13353.call(null,G__13374,G__13375));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13329,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13376 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13377 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13376,G__13377) : pred__13353.call(null,G__13376,G__13377));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13329,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13378 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13379 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13378,G__13379) : pred__13353.call(null,G__13378,G__13379));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13329,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13380 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13381 = expr__13354;
return (pred__13353.cljs$core$IFn$_invoke$arity$2 ? pred__13353.cljs$core$IFn$_invoke$arity$2(G__13380,G__13381) : pred__13353.call(null,G__13380,G__13381));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13329,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13329),null));
}
}
}
}
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13329){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13329,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
});

com.rpl.specter.impl.LateFn12.cljs$lang$type = true;

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
});

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn12");
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
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__13333){
var extmap__4340__auto__ = (function (){var G__13382 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13333,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], 0));
if(cljs.core.record_QMARK_(G__13333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13382);
} else {
return G__13382;
}
})();
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13333),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13333),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13384,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13388 = k13384;
var G__13388__$1 = (((G__13388 instanceof cljs.core.Keyword))?G__13388.fqn:null);
switch (G__13388__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13384,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13389){
var vec__13390 = p__13389;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12908){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13394 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12908);
var G__13395 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12908);
var G__13396 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12908);
var G__13397 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12908);
var G__13398 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12908);
var G__13399 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12908);
var G__13400 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12908);
var G__13401 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12908);
var G__13402 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12908);
var G__13403 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12908);
var G__13404 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12908);
var G__13405 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12908);
var G__13406 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12908);
var fexpr__13393 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12908);
return (fexpr__13393.cljs$core$IFn$_invoke$arity$13 ? fexpr__13393.cljs$core$IFn$_invoke$arity$13(G__13394,G__13395,G__13396,G__13397,G__13398,G__13399,G__13400,G__13401,G__13402,G__13403,G__13404,G__13405,G__13406) : fexpr__13393.call(null,G__13394,G__13395,G__13396,G__13397,G__13398,G__13399,G__13400,G__13401,G__13402,G__13403,G__13404,G__13405,G__13406));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13383){
var self__ = this;
var G__13383__$1 = this;
return (new cljs.core.RecordIter((0),G__13383__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13407 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13407(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13385,other13386){
var self__ = this;
var this13385__$1 = this;
return (((!((other13386 == null)))) && ((this13385__$1.constructor === other13386.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.fn,other13386.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg0,other13386.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg1,other13386.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg2,other13386.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg3,other13386.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg4,other13386.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg5,other13386.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg6,other13386.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg7,other13386.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg8,other13386.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg9,other13386.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg10,other13386.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg11,other13386.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.arg12,other13386.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13385__$1.__extmap,other13386.__extmap)));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13383){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13408 = cljs.core.keyword_identical_QMARK_;
var expr__13409 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13411 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13412 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13411,G__13412) : pred__13408.call(null,G__13411,G__13412));
})())){
return (new com.rpl.specter.impl.LateFn13(G__13383,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13413 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13414 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13413,G__13414) : pred__13408.call(null,G__13413,G__13414));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__13383,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13415 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13416 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13415,G__13416) : pred__13408.call(null,G__13415,G__13416));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__13383,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13417 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13418 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13417,G__13418) : pred__13408.call(null,G__13417,G__13418));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__13383,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13419 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13420 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13419,G__13420) : pred__13408.call(null,G__13419,G__13420));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13383,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13421 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13422 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13421,G__13422) : pred__13408.call(null,G__13421,G__13422));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13383,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13423 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13424 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13423,G__13424) : pred__13408.call(null,G__13423,G__13424));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13383,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13425 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13426 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13425,G__13426) : pred__13408.call(null,G__13425,G__13426));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13383,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13427 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13428 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13427,G__13428) : pred__13408.call(null,G__13427,G__13428));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13383,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13429 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13430 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13429,G__13430) : pred__13408.call(null,G__13429,G__13430));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13383,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13431 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13432 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13431,G__13432) : pred__13408.call(null,G__13431,G__13432));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13383,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13433 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13434 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13433,G__13434) : pred__13408.call(null,G__13433,G__13434));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13383,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13435 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13436 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13435,G__13436) : pred__13408.call(null,G__13435,G__13436));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13383,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13437 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__13438 = expr__13409;
return (pred__13408.cljs$core$IFn$_invoke$arity$2 ? pred__13408.cljs$core$IFn$_invoke$arity$2(G__13437,G__13438) : pred__13408.call(null,G__13437,G__13438));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13383,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13383),null));
}
}
}
}
}
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13383){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13383,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
});

com.rpl.specter.impl.LateFn13.cljs$lang$type = true;

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
});

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn13");
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
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__13387){
var extmap__4340__auto__ = (function (){var G__13439 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13387,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], 0));
if(cljs.core.record_QMARK_(G__13387)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13439);
} else {
return G__13439;
}
})();
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13387),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__13387),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13441,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13445 = k13441;
var G__13445__$1 = (((G__13445 instanceof cljs.core.Keyword))?G__13445.fqn:null);
switch (G__13445__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13441,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13446){
var vec__13447 = p__13446;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13447,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13447,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12909){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13451 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12909);
var G__13452 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12909);
var G__13453 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12909);
var G__13454 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12909);
var G__13455 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12909);
var G__13456 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12909);
var G__13457 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12909);
var G__13458 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12909);
var G__13459 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12909);
var G__13460 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12909);
var G__13461 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12909);
var G__13462 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12909);
var G__13463 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12909);
var G__13464 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12909);
var fexpr__13450 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12909);
return (fexpr__13450.cljs$core$IFn$_invoke$arity$14 ? fexpr__13450.cljs$core$IFn$_invoke$arity$14(G__13451,G__13452,G__13453,G__13454,G__13455,G__13456,G__13457,G__13458,G__13459,G__13460,G__13461,G__13462,G__13463,G__13464) : fexpr__13450.call(null,G__13451,G__13452,G__13453,G__13454,G__13455,G__13456,G__13457,G__13458,G__13459,G__13460,G__13461,G__13462,G__13463,G__13464));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13440){
var self__ = this;
var G__13440__$1 = this;
return (new cljs.core.RecordIter((0),G__13440__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13465 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13465(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13442,other13443){
var self__ = this;
var this13442__$1 = this;
return (((!((other13443 == null)))) && ((this13442__$1.constructor === other13443.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.fn,other13443.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg0,other13443.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg1,other13443.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg2,other13443.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg3,other13443.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg4,other13443.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg5,other13443.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg6,other13443.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg7,other13443.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg8,other13443.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg9,other13443.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg10,other13443.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg11,other13443.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg12,other13443.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.arg13,other13443.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13442__$1.__extmap,other13443.__extmap)));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13440){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13466 = cljs.core.keyword_identical_QMARK_;
var expr__13467 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13469 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13470 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13469,G__13470) : pred__13466.call(null,G__13469,G__13470));
})())){
return (new com.rpl.specter.impl.LateFn14(G__13440,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13471 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13472 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13471,G__13472) : pred__13466.call(null,G__13471,G__13472));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__13440,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13473 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13474 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13473,G__13474) : pred__13466.call(null,G__13473,G__13474));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__13440,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13475 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13476 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13475,G__13476) : pred__13466.call(null,G__13475,G__13476));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__13440,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13477 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13478 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13477,G__13478) : pred__13466.call(null,G__13477,G__13478));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13440,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13479 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13480 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13479,G__13480) : pred__13466.call(null,G__13479,G__13480));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13440,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13481 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13482 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13481,G__13482) : pred__13466.call(null,G__13481,G__13482));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13440,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13483 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13484 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13483,G__13484) : pred__13466.call(null,G__13483,G__13484));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13440,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13485 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13486 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13485,G__13486) : pred__13466.call(null,G__13485,G__13486));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13440,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13487 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13488 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13487,G__13488) : pred__13466.call(null,G__13487,G__13488));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13440,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13489 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13490 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13489,G__13490) : pred__13466.call(null,G__13489,G__13490));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13440,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13491 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13492 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13491,G__13492) : pred__13466.call(null,G__13491,G__13492));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13440,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13493 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13494 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13493,G__13494) : pred__13466.call(null,G__13493,G__13494));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13440,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13495 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__13496 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13495,G__13496) : pred__13466.call(null,G__13495,G__13496));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13440,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13497 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__13498 = expr__13467;
return (pred__13466.cljs$core$IFn$_invoke$arity$2 ? pred__13466.cljs$core$IFn$_invoke$arity$2(G__13497,G__13498) : pred__13466.call(null,G__13497,G__13498));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13440,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13440),null));
}
}
}
}
}
}
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13440){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13440,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
});

com.rpl.specter.impl.LateFn14.cljs$lang$type = true;

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
});

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn14");
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
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__13444){
var extmap__4340__auto__ = (function (){var G__13499 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13444,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], 0));
if(cljs.core.record_QMARK_(G__13444)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13499);
} else {
return G__13499;
}
})();
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__13444),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__13444),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13501,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13505 = k13501;
var G__13505__$1 = (((G__13505 instanceof cljs.core.Keyword))?G__13505.fqn:null);
switch (G__13505__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13501,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13506){
var vec__13507 = p__13506;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12910){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13511 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12910);
var G__13512 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12910);
var G__13513 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12910);
var G__13514 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12910);
var G__13515 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12910);
var G__13516 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12910);
var G__13517 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12910);
var G__13518 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12910);
var G__13519 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12910);
var G__13520 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12910);
var G__13521 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12910);
var G__13522 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12910);
var G__13523 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12910);
var G__13524 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12910);
var G__13525 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12910);
var fexpr__13510 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12910);
return (fexpr__13510.cljs$core$IFn$_invoke$arity$15 ? fexpr__13510.cljs$core$IFn$_invoke$arity$15(G__13511,G__13512,G__13513,G__13514,G__13515,G__13516,G__13517,G__13518,G__13519,G__13520,G__13521,G__13522,G__13523,G__13524,G__13525) : fexpr__13510.call(null,G__13511,G__13512,G__13513,G__13514,G__13515,G__13516,G__13517,G__13518,G__13519,G__13520,G__13521,G__13522,G__13523,G__13524,G__13525));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13500){
var self__ = this;
var G__13500__$1 = this;
return (new cljs.core.RecordIter((0),G__13500__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13526 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13526(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13502,other13503){
var self__ = this;
var this13502__$1 = this;
return (((!((other13503 == null)))) && ((this13502__$1.constructor === other13503.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.fn,other13503.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg0,other13503.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg1,other13503.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg2,other13503.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg3,other13503.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg4,other13503.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg5,other13503.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg6,other13503.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg7,other13503.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg8,other13503.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg9,other13503.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg10,other13503.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg11,other13503.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg12,other13503.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg13,other13503.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.arg14,other13503.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13502__$1.__extmap,other13503.__extmap)));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13500){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13527 = cljs.core.keyword_identical_QMARK_;
var expr__13528 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13530 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13531 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13530,G__13531) : pred__13527.call(null,G__13530,G__13531));
})())){
return (new com.rpl.specter.impl.LateFn15(G__13500,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13532 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13533 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13532,G__13533) : pred__13527.call(null,G__13532,G__13533));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__13500,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13534 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13535 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13534,G__13535) : pred__13527.call(null,G__13534,G__13535));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__13500,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13536 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13537 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13536,G__13537) : pred__13527.call(null,G__13536,G__13537));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__13500,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13538 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13539 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13538,G__13539) : pred__13527.call(null,G__13538,G__13539));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13500,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13540 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13541 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13540,G__13541) : pred__13527.call(null,G__13540,G__13541));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13500,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13542 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13543 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13542,G__13543) : pred__13527.call(null,G__13542,G__13543));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13500,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13544 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13545 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13544,G__13545) : pred__13527.call(null,G__13544,G__13545));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13500,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13546 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13547 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13546,G__13547) : pred__13527.call(null,G__13546,G__13547));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13500,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13548 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13549 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13548,G__13549) : pred__13527.call(null,G__13548,G__13549));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13500,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13550 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13551 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13550,G__13551) : pred__13527.call(null,G__13550,G__13551));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13500,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13552 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13553 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13552,G__13553) : pred__13527.call(null,G__13552,G__13553));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13500,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13554 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13555 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13554,G__13555) : pred__13527.call(null,G__13554,G__13555));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13500,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13556 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__13557 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13556,G__13557) : pred__13527.call(null,G__13556,G__13557));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13500,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13558 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__13559 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13558,G__13559) : pred__13527.call(null,G__13558,G__13559));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13500,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13560 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__13561 = expr__13528;
return (pred__13527.cljs$core$IFn$_invoke$arity$2 ? pred__13527.cljs$core$IFn$_invoke$arity$2(G__13560,G__13561) : pred__13527.call(null,G__13560,G__13561));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13500,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13500),null));
}
}
}
}
}
}
}
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13500){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13500,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
});

com.rpl.specter.impl.LateFn15.cljs$lang$type = true;

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
});

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn15");
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
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__13504){
var extmap__4340__auto__ = (function (){var G__13562 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13504,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], 0));
if(cljs.core.record_QMARK_(G__13504)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13562);
} else {
return G__13562;
}
})();
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__13504),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__13504),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13564,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13568 = k13564;
var G__13568__$1 = (((G__13568 instanceof cljs.core.Keyword))?G__13568.fqn:null);
switch (G__13568__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13564,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13569){
var vec__13570 = p__13569;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12911){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13574 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12911);
var G__13575 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12911);
var G__13576 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12911);
var G__13577 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12911);
var G__13578 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12911);
var G__13579 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12911);
var G__13580 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12911);
var G__13581 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12911);
var G__13582 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12911);
var G__13583 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12911);
var G__13584 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12911);
var G__13585 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12911);
var G__13586 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12911);
var G__13587 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12911);
var G__13588 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12911);
var G__13589 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12911);
var fexpr__13573 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12911);
return (fexpr__13573.cljs$core$IFn$_invoke$arity$16 ? fexpr__13573.cljs$core$IFn$_invoke$arity$16(G__13574,G__13575,G__13576,G__13577,G__13578,G__13579,G__13580,G__13581,G__13582,G__13583,G__13584,G__13585,G__13586,G__13587,G__13588,G__13589) : fexpr__13573.call(null,G__13574,G__13575,G__13576,G__13577,G__13578,G__13579,G__13580,G__13581,G__13582,G__13583,G__13584,G__13585,G__13586,G__13587,G__13588,G__13589));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13563){
var self__ = this;
var G__13563__$1 = this;
return (new cljs.core.RecordIter((0),G__13563__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13590 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13590(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13565,other13566){
var self__ = this;
var this13565__$1 = this;
return (((!((other13566 == null)))) && ((this13565__$1.constructor === other13566.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.fn,other13566.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg0,other13566.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg1,other13566.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg2,other13566.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg3,other13566.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg4,other13566.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg5,other13566.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg6,other13566.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg7,other13566.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg8,other13566.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg9,other13566.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg10,other13566.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg11,other13566.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg12,other13566.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg13,other13566.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg14,other13566.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.arg15,other13566.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13565__$1.__extmap,other13566.__extmap)));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13563){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13591 = cljs.core.keyword_identical_QMARK_;
var expr__13592 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13594 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13595 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13594,G__13595) : pred__13591.call(null,G__13594,G__13595));
})())){
return (new com.rpl.specter.impl.LateFn16(G__13563,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13596 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13597 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13596,G__13597) : pred__13591.call(null,G__13596,G__13597));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__13563,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13598 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13599 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13598,G__13599) : pred__13591.call(null,G__13598,G__13599));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__13563,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13600 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13601 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13600,G__13601) : pred__13591.call(null,G__13600,G__13601));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__13563,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13602 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13603 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13602,G__13603) : pred__13591.call(null,G__13602,G__13603));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13563,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13604 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13605 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13604,G__13605) : pred__13591.call(null,G__13604,G__13605));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13563,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13606 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13607 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13606,G__13607) : pred__13591.call(null,G__13606,G__13607));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13563,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13608 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13609 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13608,G__13609) : pred__13591.call(null,G__13608,G__13609));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13563,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13610 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13611 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13610,G__13611) : pred__13591.call(null,G__13610,G__13611));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13563,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13612 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13613 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13612,G__13613) : pred__13591.call(null,G__13612,G__13613));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13563,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13614 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13615 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13614,G__13615) : pred__13591.call(null,G__13614,G__13615));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13563,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13616 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13617 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13616,G__13617) : pred__13591.call(null,G__13616,G__13617));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13563,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13618 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13619 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13618,G__13619) : pred__13591.call(null,G__13618,G__13619));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13563,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13620 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__13621 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13620,G__13621) : pred__13591.call(null,G__13620,G__13621));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13563,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13622 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__13623 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13622,G__13623) : pred__13591.call(null,G__13622,G__13623));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13563,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13624 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__13625 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13624,G__13625) : pred__13591.call(null,G__13624,G__13625));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13563,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13626 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__13627 = expr__13592;
return (pred__13591.cljs$core$IFn$_invoke$arity$2 ? pred__13591.cljs$core$IFn$_invoke$arity$2(G__13626,G__13627) : pred__13591.call(null,G__13626,G__13627));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13563,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13563),null));
}
}
}
}
}
}
}
}
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13563){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13563,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
});

com.rpl.specter.impl.LateFn16.cljs$lang$type = true;

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
});

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn16");
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
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__13567){
var extmap__4340__auto__ = (function (){var G__13628 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13567,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], 0));
if(cljs.core.record_QMARK_(G__13567)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13628);
} else {
return G__13628;
}
})();
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__13567),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__13567),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13630,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13634 = k13630;
var G__13634__$1 = (((G__13634 instanceof cljs.core.Keyword))?G__13634.fqn:null);
switch (G__13634__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13630,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13635){
var vec__13636 = p__13635;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12912){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13640 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12912);
var G__13641 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12912);
var G__13642 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12912);
var G__13643 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12912);
var G__13644 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12912);
var G__13645 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12912);
var G__13646 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12912);
var G__13647 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12912);
var G__13648 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12912);
var G__13649 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12912);
var G__13650 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12912);
var G__13651 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12912);
var G__13652 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12912);
var G__13653 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12912);
var G__13654 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12912);
var G__13655 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12912);
var G__13656 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params12912);
var fexpr__13639 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12912);
return (fexpr__13639.cljs$core$IFn$_invoke$arity$17 ? fexpr__13639.cljs$core$IFn$_invoke$arity$17(G__13640,G__13641,G__13642,G__13643,G__13644,G__13645,G__13646,G__13647,G__13648,G__13649,G__13650,G__13651,G__13652,G__13653,G__13654,G__13655,G__13656) : fexpr__13639.call(null,G__13640,G__13641,G__13642,G__13643,G__13644,G__13645,G__13646,G__13647,G__13648,G__13649,G__13650,G__13651,G__13652,G__13653,G__13654,G__13655,G__13656));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13629){
var self__ = this;
var G__13629__$1 = this;
return (new cljs.core.RecordIter((0),G__13629__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13657 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13657(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13631,other13632){
var self__ = this;
var this13631__$1 = this;
return (((!((other13632 == null)))) && ((this13631__$1.constructor === other13632.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.fn,other13632.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg0,other13632.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg1,other13632.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg2,other13632.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg3,other13632.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg4,other13632.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg5,other13632.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg6,other13632.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg7,other13632.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg8,other13632.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg9,other13632.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg10,other13632.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg11,other13632.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg12,other13632.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg13,other13632.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg14,other13632.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg15,other13632.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.arg16,other13632.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13631__$1.__extmap,other13632.__extmap)));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13629){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13658 = cljs.core.keyword_identical_QMARK_;
var expr__13659 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13661 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13662 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13661,G__13662) : pred__13658.call(null,G__13661,G__13662));
})())){
return (new com.rpl.specter.impl.LateFn17(G__13629,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13663 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13664 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13663,G__13664) : pred__13658.call(null,G__13663,G__13664));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__13629,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13665 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13666 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13665,G__13666) : pred__13658.call(null,G__13665,G__13666));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__13629,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13667 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13668 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13667,G__13668) : pred__13658.call(null,G__13667,G__13668));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__13629,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13669 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13670 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13669,G__13670) : pred__13658.call(null,G__13669,G__13670));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13629,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13671 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13672 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13671,G__13672) : pred__13658.call(null,G__13671,G__13672));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13629,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13673 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13674 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13673,G__13674) : pred__13658.call(null,G__13673,G__13674));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13629,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13675 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13676 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13675,G__13676) : pred__13658.call(null,G__13675,G__13676));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13629,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13677 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13678 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13677,G__13678) : pred__13658.call(null,G__13677,G__13678));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13629,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13679 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13680 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13679,G__13680) : pred__13658.call(null,G__13679,G__13680));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13629,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13681 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13682 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13681,G__13682) : pred__13658.call(null,G__13681,G__13682));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13629,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13683 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13684 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13683,G__13684) : pred__13658.call(null,G__13683,G__13684));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13629,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13685 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13686 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13685,G__13686) : pred__13658.call(null,G__13685,G__13686));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13629,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13687 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__13688 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13687,G__13688) : pred__13658.call(null,G__13687,G__13688));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13629,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13689 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__13690 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13689,G__13690) : pred__13658.call(null,G__13689,G__13690));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13629,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13691 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__13692 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13691,G__13692) : pred__13658.call(null,G__13691,G__13692));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13629,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13693 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__13694 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13693,G__13694) : pred__13658.call(null,G__13693,G__13694));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13629,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13695 = new cljs.core.Keyword(null,"arg16","arg16",-445557546);
var G__13696 = expr__13659;
return (pred__13658.cljs$core$IFn$_invoke$arity$2 ? pred__13658.cljs$core$IFn$_invoke$arity$2(G__13695,G__13696) : pred__13658.call(null,G__13695,G__13696));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13629,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13629),null));
}
}
}
}
}
}
}
}
}
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13629){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__13629,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
});

com.rpl.specter.impl.LateFn17.cljs$lang$type = true;

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
});

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn17");
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
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__13633){
var extmap__4340__auto__ = (function (){var G__13697 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13633,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], 0));
if(cljs.core.record_QMARK_(G__13633)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13697);
} else {
return G__13697;
}
})();
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__13633),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__13633),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13699,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13703 = k13699;
var G__13703__$1 = (((G__13703 instanceof cljs.core.Keyword))?G__13703.fqn:null);
switch (G__13703__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13699,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13704){
var vec__13705 = p__13704;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13705,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13705,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12913){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13709 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12913);
var G__13710 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12913);
var G__13711 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12913);
var G__13712 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12913);
var G__13713 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12913);
var G__13714 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12913);
var G__13715 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12913);
var G__13716 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12913);
var G__13717 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12913);
var G__13718 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12913);
var G__13719 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12913);
var G__13720 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12913);
var G__13721 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12913);
var G__13722 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12913);
var G__13723 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12913);
var G__13724 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12913);
var G__13725 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params12913);
var G__13726 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params12913);
var fexpr__13708 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12913);
return (fexpr__13708.cljs$core$IFn$_invoke$arity$18 ? fexpr__13708.cljs$core$IFn$_invoke$arity$18(G__13709,G__13710,G__13711,G__13712,G__13713,G__13714,G__13715,G__13716,G__13717,G__13718,G__13719,G__13720,G__13721,G__13722,G__13723,G__13724,G__13725,G__13726) : fexpr__13708.call(null,G__13709,G__13710,G__13711,G__13712,G__13713,G__13714,G__13715,G__13716,G__13717,G__13718,G__13719,G__13720,G__13721,G__13722,G__13723,G__13724,G__13725,G__13726));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13698){
var self__ = this;
var G__13698__$1 = this;
return (new cljs.core.RecordIter((0),G__13698__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13727 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13727(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13700,other13701){
var self__ = this;
var this13700__$1 = this;
return (((!((other13701 == null)))) && ((this13700__$1.constructor === other13701.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.fn,other13701.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg0,other13701.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg1,other13701.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg2,other13701.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg3,other13701.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg4,other13701.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg5,other13701.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg6,other13701.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg7,other13701.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg8,other13701.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg9,other13701.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg10,other13701.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg11,other13701.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg12,other13701.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg13,other13701.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg14,other13701.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg15,other13701.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg16,other13701.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.arg17,other13701.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13700__$1.__extmap,other13701.__extmap)));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13698){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13728 = cljs.core.keyword_identical_QMARK_;
var expr__13729 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13731 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13732 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13731,G__13732) : pred__13728.call(null,G__13731,G__13732));
})())){
return (new com.rpl.specter.impl.LateFn18(G__13698,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13733 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13734 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13733,G__13734) : pred__13728.call(null,G__13733,G__13734));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__13698,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13735 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13736 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13735,G__13736) : pred__13728.call(null,G__13735,G__13736));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__13698,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13737 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13738 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13737,G__13738) : pred__13728.call(null,G__13737,G__13738));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__13698,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13739 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13740 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13739,G__13740) : pred__13728.call(null,G__13739,G__13740));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13698,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13741 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13742 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13741,G__13742) : pred__13728.call(null,G__13741,G__13742));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13698,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13743 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13744 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13743,G__13744) : pred__13728.call(null,G__13743,G__13744));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13698,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13745 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13746 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13745,G__13746) : pred__13728.call(null,G__13745,G__13746));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13698,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13747 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13748 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13747,G__13748) : pred__13728.call(null,G__13747,G__13748));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13698,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13749 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13750 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13749,G__13750) : pred__13728.call(null,G__13749,G__13750));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13698,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13751 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13752 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13751,G__13752) : pred__13728.call(null,G__13751,G__13752));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13698,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13753 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13754 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13753,G__13754) : pred__13728.call(null,G__13753,G__13754));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13698,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13755 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13756 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13755,G__13756) : pred__13728.call(null,G__13755,G__13756));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13698,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13757 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__13758 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13757,G__13758) : pred__13728.call(null,G__13757,G__13758));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13698,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13759 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__13760 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13759,G__13760) : pred__13728.call(null,G__13759,G__13760));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13698,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13761 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__13762 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13761,G__13762) : pred__13728.call(null,G__13761,G__13762));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13698,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13763 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__13764 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13763,G__13764) : pred__13728.call(null,G__13763,G__13764));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13698,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13765 = new cljs.core.Keyword(null,"arg16","arg16",-445557546);
var G__13766 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13765,G__13766) : pred__13728.call(null,G__13765,G__13766));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13698,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13767 = new cljs.core.Keyword(null,"arg17","arg17",-1072183482);
var G__13768 = expr__13729;
return (pred__13728.cljs$core$IFn$_invoke$arity$2 ? pred__13728.cljs$core$IFn$_invoke$arity$2(G__13767,G__13768) : pred__13728.call(null,G__13767,G__13768));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__13698,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13698),null));
}
}
}
}
}
}
}
}
}
}
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13698){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__13698,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
});

com.rpl.specter.impl.LateFn18.cljs$lang$type = true;

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
});

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn18");
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
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__13702){
var extmap__4340__auto__ = (function (){var G__13769 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13702,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], 0));
if(cljs.core.record_QMARK_(G__13702)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13769);
} else {
return G__13769;
}
})();
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__13702),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__13702),null,cljs.core.not_empty(extmap__4340__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k13771,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__13775 = k13771;
var G__13775__$1 = (((G__13775 instanceof cljs.core.Keyword))?G__13775.fqn:null);
switch (G__13775__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13771,else__4304__auto__);

}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__13776){
var vec__13777 = p__13776;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__12315__auto__,dynamic_params12914){
var self__ = this;
var this__12315__auto____$1 = this;
var G__13781 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12914);
var G__13782 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12914);
var G__13783 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12914);
var G__13784 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12914);
var G__13785 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12914);
var G__13786 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12914);
var G__13787 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12914);
var G__13788 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12914);
var G__13789 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12914);
var G__13790 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12914);
var G__13791 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12914);
var G__13792 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12914);
var G__13793 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12914);
var G__13794 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12914);
var G__13795 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12914);
var G__13796 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12914);
var G__13797 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params12914);
var G__13798 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params12914);
var G__13799 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params12914);
var fexpr__13780 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12914);
return (fexpr__13780.cljs$core$IFn$_invoke$arity$19 ? fexpr__13780.cljs$core$IFn$_invoke$arity$19(G__13781,G__13782,G__13783,G__13784,G__13785,G__13786,G__13787,G__13788,G__13789,G__13790,G__13791,G__13792,G__13793,G__13794,G__13795,G__13796,G__13797,G__13798,G__13799) : fexpr__13780.call(null,G__13781,G__13782,G__13783,G__13784,G__13785,G__13786,G__13787,G__13788,G__13789,G__13790,G__13791,G__13792,G__13793,G__13794,G__13795,G__13796,G__13797,G__13798,G__13799));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13770){
var self__ = this;
var G__13770__$1 = this;
return (new cljs.core.RecordIter((0),G__13770__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__13800 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__13800(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13772,other13773){
var self__ = this;
var this13772__$1 = this;
return (((!((other13773 == null)))) && ((this13772__$1.constructor === other13773.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.fn,other13773.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg0,other13773.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg1,other13773.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg2,other13773.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg3,other13773.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg4,other13773.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg5,other13773.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg6,other13773.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg7,other13773.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg8,other13773.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg9,other13773.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg10,other13773.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg11,other13773.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg12,other13773.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg13,other13773.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg14,other13773.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg15,other13773.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg16,other13773.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg17,other13773.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.arg18,other13773.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13772__$1.__extmap,other13773.__extmap)));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__13770){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__13801 = cljs.core.keyword_identical_QMARK_;
var expr__13802 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__13804 = new cljs.core.Keyword(null,"fn","fn",-1175266204);
var G__13805 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13804,G__13805) : pred__13801.call(null,G__13804,G__13805));
})())){
return (new com.rpl.specter.impl.LateFn19(G__13770,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13806 = new cljs.core.Keyword(null,"arg0","arg0",1629842355);
var G__13807 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13806,G__13807) : pred__13801.call(null,G__13806,G__13807));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__13770,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13808 = new cljs.core.Keyword(null,"arg1","arg1",951899358);
var G__13809 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13808,G__13809) : pred__13801.call(null,G__13808,G__13809));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__13770,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13810 = new cljs.core.Keyword(null,"arg2","arg2",1729550917);
var G__13811 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13810,G__13811) : pred__13801.call(null,G__13810,G__13811));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__13770,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13812 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496);
var G__13813 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13812,G__13813) : pred__13801.call(null,G__13812,G__13813));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13770,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13814 = new cljs.core.Keyword(null,"arg4","arg4",-831640004);
var G__13815 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13814,G__13815) : pred__13801.call(null,G__13814,G__13815));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13770,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13816 = new cljs.core.Keyword(null,"arg5","arg5",-1648794215);
var G__13817 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13816,G__13817) : pred__13801.call(null,G__13816,G__13817));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13770,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13818 = new cljs.core.Keyword(null,"arg6","arg6",-2052656438);
var G__13819 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13818,G__13819) : pred__13801.call(null,G__13818,G__13819));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13770,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13820 = new cljs.core.Keyword(null,"arg7","arg7",932157509);
var G__13821 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13820,G__13821) : pred__13801.call(null,G__13820,G__13821));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13770,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13822 = new cljs.core.Keyword(null,"arg8","arg8",123916218);
var G__13823 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13822,G__13823) : pred__13801.call(null,G__13822,G__13823));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13770,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13824 = new cljs.core.Keyword(null,"arg9","arg9",-95117905);
var G__13825 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13824,G__13825) : pred__13801.call(null,G__13824,G__13825));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13770,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13826 = new cljs.core.Keyword(null,"arg10","arg10",-1230917517);
var G__13827 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13826,G__13827) : pred__13801.call(null,G__13826,G__13827));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13770,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13828 = new cljs.core.Keyword(null,"arg11","arg11",-379524070);
var G__13829 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13828,G__13829) : pred__13801.call(null,G__13828,G__13829));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13770,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13830 = new cljs.core.Keyword(null,"arg12","arg12",290681436);
var G__13831 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13830,G__13831) : pred__13801.call(null,G__13830,G__13831));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13770,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13832 = new cljs.core.Keyword(null,"arg13","arg13",1606275392);
var G__13833 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13832,G__13833) : pred__13801.call(null,G__13832,G__13833));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13770,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13834 = new cljs.core.Keyword(null,"arg14","arg14",-1870980778);
var G__13835 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13834,G__13835) : pred__13801.call(null,G__13834,G__13835));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13770,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13836 = new cljs.core.Keyword(null,"arg15","arg15",1451926677);
var G__13837 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13836,G__13837) : pred__13801.call(null,G__13836,G__13837));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13770,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13838 = new cljs.core.Keyword(null,"arg16","arg16",-445557546);
var G__13839 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13838,G__13839) : pred__13801.call(null,G__13838,G__13839));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13770,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13840 = new cljs.core.Keyword(null,"arg17","arg17",-1072183482);
var G__13841 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13840,G__13841) : pred__13801.call(null,G__13840,G__13841));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__13770,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13842 = new cljs.core.Keyword(null,"arg18","arg18",1450507352);
var G__13843 = expr__13802;
return (pred__13801.cljs$core$IFn$_invoke$arity$2 ? pred__13801.cljs$core$IFn$_invoke$arity$2(G__13842,G__13843) : pred__13801.call(null,G__13842,G__13843));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__13770,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__13770),null));
}
}
}
}
}
}
}
}
}
}
}
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18,null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__13770){
var self__ = this;
var this__4300__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__13770,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
});

com.rpl.specter.impl.LateFn19.cljs$lang$type = true;

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
});

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"com.rpl.specter.impl/LateFn19");
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
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__13774){
var extmap__4340__auto__ = (function (){var G__13844 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13774,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], 0));
if(cljs.core.record_QMARK_(G__13774)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13844);
} else {
return G__13844;
}
})();
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__13774),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__13774),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn13845,args13846){
var G__13847 = cljs.core.count(args13846);
switch (G__13847) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn13845);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn13845,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13846,(17)));

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
var vec__13848 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13848,(0),null);
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
var op = (function (){var G__13852 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(o);
var G__13853 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__13852,G__13853) : com.rpl.specter.impl.resolve_arg_code.call(null,G__13852,G__13853));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (op){
return (function (p1__13851_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__13851_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__13851_SHARP_,possible_params));
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
var G__13854 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__13855 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__13854,G__13855) : com.rpl.specter.impl.resolve_arg_code.call(null,G__13854,G__13855));
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
return (function (p1__13856_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__13856_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__13856_SHARP_,possible_params));
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
if(((cljs.core.set_QMARK_(code)) || (((com.rpl.specter.impl.fn_invocation_QMARK_(code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first(code))))))){
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
return (function (p1__13857_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13857_SHARP_,e);
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

if(com.rpl.specter.impl.rich_nav_QMARK_(magic_path)){
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
var args__4647__auto__ = [];
var len__4641__auto___15965 = arguments.length;
var i__4642__auto___15966 = (0);
while(true){
if((i__4642__auto___15966 < len__4641__auto___15965)){
args__4647__auto__.push((arguments[i__4642__auto___15966]));

var G__15967 = (i__4642__auto___15966 + (1));
i__4642__auto___15966 = G__15967;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__13862){
var map__13863 = p__13862;
var map__13863__$1 = (((((!((map__13863 == null))))?(((((map__13863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13863):map__13863);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13863__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,((function (state,map__13863,map__13863__$1,merge_fn){
return (function() { 
var G__15973__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__13865 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13865,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13865,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__13868 = com.rpl.specter.impl.get_cell(state);
var G__13869 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__13868,G__13869) : merge_fn.call(null,G__13868,G__13869));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__15973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15975__i = 0, G__15975__a = new Array(arguments.length -  0);
while (G__15975__i < G__15975__a.length) {G__15975__a[G__15975__i] = arguments[G__15975__i + 0]; ++G__15975__i;}
  args = new cljs.core.IndexedSeq(G__15975__a,0,null);
} 
return G__15973__delegate.call(this,args);};
G__15973.cljs$lang$maxFixedArity = 0;
G__15973.cljs$lang$applyTo = (function (arglist__15976){
var args = cljs.core.seq(arglist__15976);
return G__15973__delegate(args);
});
G__15973.cljs$core$IFn$_invoke$arity$variadic = G__15973__delegate;
return G__15973;
})()
;})(state,map__13863,map__13863__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell(state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq13858){
var G__13859 = cljs.core.first(seq13858);
var seq13858__$1 = cljs.core.next(seq13858);
var G__13860 = cljs.core.first(seq13858__$1);
var seq13858__$2 = cljs.core.next(seq13858__$1);
var G__13861 = cljs.core.first(seq13858__$2);
var seq13858__$3 = cljs.core.next(seq13858__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13859,G__13860,G__13861,seq13858__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___15981 = arguments.length;
var i__4642__auto___15982 = (0);
while(true){
if((i__4642__auto___15982 < len__4641__auto___15981)){
args__4647__auto__.push((arguments[i__4642__auto___15982]));

var G__15984 = (i__4642__auto___15982 + (1));
i__4642__auto___15982 = G__15984;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq13870){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13870));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=com.rpl.specter.impl.js.map
