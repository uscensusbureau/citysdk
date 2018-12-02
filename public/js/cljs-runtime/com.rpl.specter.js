goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__29868__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__29868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29869__i = 0, G__29869__a = new Array(arguments.length -  0);
while (G__29869__i < G__29869__a.length) {G__29869__a[G__29869__i] = arguments[G__29869__i + 0]; ++G__29869__i;}
  args = new cljs.core.IndexedSeq(G__29869__a,0,null);
} 
return G__29868__delegate.call(this,args);};
G__29868.cljs$lang$maxFixedArity = 0;
G__29868.cljs$lang$applyTo = (function (arglist__29870){
var args = cljs.core.seq(arglist__29870);
return G__29868__delegate(args);
});
G__29868.cljs$core$IFn$_invoke$arity$variadic = G__29868__delegate;
return G__29868;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29871 = arguments.length;
var i__4642__auto___29872 = (0);
while(true){
if((i__4642__auto___29872 < len__4641__auto___29871)){
args__4647__auto__.push((arguments[i__4642__auto___29872]));

var G__29873 = (i__4642__auto___29872 + (1));
i__4642__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq29464){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29464));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__29465 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29466 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__29465,G__29466) : com.rpl.specter.compiled_select.call(null,G__29465,G__29466));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__29470 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29471 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__29470,G__29471) : com.rpl.specter.compiled_select_one.call(null,G__29470,G__29471));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__29472 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29473 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__29472,G__29473) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__29472,G__29473));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__29474 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29475 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__29474,G__29475) : com.rpl.specter.compiled_select_first.call(null,G__29474,G__29475));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__29476 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29477 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__29476,G__29477) : com.rpl.specter.compiled_select_any.call(null,G__29476,G__29477));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__29478 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29479 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__29478,G__29479) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__29478,G__29479));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__29480 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__29481 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__29480,G__29481) : com.rpl.specter.compiled_traverse.call(null,G__29480,G__29481));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__29482 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__29482) : com.rpl.specter.compiled_traverse_all.call(null,G__29482));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__29483 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29484 = transform_fn;
var G__29485 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__29483,G__29484,G__29485) : com.rpl.specter.compiled_transform.call(null,G__29483,G__29484,G__29485));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__29486 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29487 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__29486,G__29487) : com.rpl.specter.compiled_multi_transform.call(null,G__29486,G__29487));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__29494 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29495 = val;
var G__29496 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__29494,G__29495,G__29496) : com.rpl.specter.compiled_setval.call(null,G__29494,G__29495,G__29496));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29877 = arguments.length;
var i__4642__auto___29878 = (0);
while(true){
if((i__4642__auto___29878 < len__4641__auto___29877)){
args__4647__auto__.push((arguments[i__4642__auto___29878]));

var G__29879 = (i__4642__auto___29878 + (1));
i__4642__auto___29878 = G__29879;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__29501){
var map__29502 = p__29501;
var map__29502__$1 = (((((!((map__29502 == null))))?(((((map__29502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29502):map__29502);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29502__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__29507 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29508 = transform_fn;
var G__29509 = structure;
var G__29510 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__29511 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__29507,G__29508,G__29509,G__29510,G__29511) : com.rpl.specter.compiled_replace_in.call(null,G__29507,G__29508,G__29509,G__29510,G__29511));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq29497){
var G__29498 = cljs.core.first(seq29497);
var seq29497__$1 = cljs.core.next(seq29497);
var G__29499 = cljs.core.first(seq29497__$1);
var seq29497__$2 = cljs.core.next(seq29497__$1);
var G__29500 = cljs.core.first(seq29497__$2);
var seq29497__$3 = cljs.core.next(seq29497__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29498,G__29499,G__29500,seq29497__$3);
});

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (latenavfn){
return (function() { 
var G__29885__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__29885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29886__i = 0, G__29886__a = new Array(arguments.length -  0);
while (G__29886__i < G__29886__a.length) {G__29886__a[G__29886__i] = arguments[G__29886__i + 0]; ++G__29886__i;}
  args = new cljs.core.IndexedSeq(G__29886__a,0,null);
} 
return G__29885__delegate.call(this,args);};
G__29885.cljs$lang$maxFixedArity = 0;
G__29885.cljs$lang$applyTo = (function (arglist__29888){
var args = cljs.core.seq(arglist__29888);
return G__29885__delegate(args);
});
G__29885.cljs$core$IFn$_invoke$arity$variadic = G__29885__delegate;
return G__29885;
})()
;})(latenavfn))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29515 = (function (meta29516){
this.meta29516 = meta29516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29517,meta29516__$1){
var self__ = this;
var _29517__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29515(meta29516__$1));
});

com.rpl.specter.t_com$rpl$specter29515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29517){
var self__ = this;
var _29517__$1 = this;
return self__.meta29516;
});

com.rpl.specter.t_com$rpl$specter29515.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29515.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter29515.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter29515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29516","meta29516",-84229480,null)], null);
});

com.rpl.specter.t_com$rpl$specter29515.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29515.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29515";

com.rpl.specter.t_com$rpl$specter29515.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29515");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29515.
 */
com.rpl.specter.__GT_t_com$rpl$specter29515 = (function com$rpl$specter$__GT_t_com$rpl$specter29515(meta29516){
return (new com.rpl.specter.t_com$rpl$specter29515(meta29516));
});

}

return (new com.rpl.specter.t_com$rpl$specter29515(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29530 = (function (afn,meta29531){
this.afn = afn;
this.meta29531 = meta29531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29532,meta29531__$1){
var self__ = this;
var _29532__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29530(self__.afn,meta29531__$1));
});

com.rpl.specter.t_com$rpl$specter29530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29532){
var self__ = this;
var _29532__$1 = this;
return self__.meta29531;
});

com.rpl.specter.t_com$rpl$specter29530.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29530.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter29530.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter29530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29531","meta29531",645449630,null)], null);
});

com.rpl.specter.t_com$rpl$specter29530.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29530.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29530";

com.rpl.specter.t_com$rpl$specter29530.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29530");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29530.
 */
com.rpl.specter.__GT_t_com$rpl$specter29530 = (function com$rpl$specter$__GT_t_com$rpl$specter29530(afn__$1,meta29531){
return (new com.rpl.specter.t_com$rpl$specter29530(afn__$1,meta29531));
});

}

return (new com.rpl.specter.t_com$rpl$specter29530(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29545 = (function (afn,meta29546){
this.afn = afn;
this.meta29546 = meta29546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29547,meta29546__$1){
var self__ = this;
var _29547__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29545(self__.afn,meta29546__$1));
});

com.rpl.specter.t_com$rpl$specter29545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29547){
var self__ = this;
var _29547__$1 = this;
return self__.meta29546;
});

com.rpl.specter.t_com$rpl$specter29545.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29545.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter29545.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
});

com.rpl.specter.t_com$rpl$specter29545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29546","meta29546",1727645276,null)], null);
});

com.rpl.specter.t_com$rpl$specter29545.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29545.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29545";

com.rpl.specter.t_com$rpl$specter29545.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29545");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29545.
 */
com.rpl.specter.__GT_t_com$rpl$specter29545 = (function com$rpl$specter$__GT_t_com$rpl$specter29545(afn__$1,meta29546){
return (new com.rpl.specter.t_com$rpl$specter29545(afn__$1,meta29546));
});

}

return (new com.rpl.specter.t_com$rpl$specter29545(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__29548 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__29548) : com.rpl.specter.terminal.call(null,G__29548));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29549 = (function (meta29550){
this.meta29550 = meta29550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29551,meta29550__$1){
var self__ = this;
var _29551__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29549(meta29550__$1));
});

com.rpl.specter.t_com$rpl$specter29549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29551){
var self__ = this;
var _29551__$1 = this;
return self__.meta29550;
});

com.rpl.specter.t_com$rpl$specter29549.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29549.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29549.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29550","meta29550",821529584,null)], null);
});

com.rpl.specter.t_com$rpl$specter29549.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29549.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29549";

com.rpl.specter.t_com$rpl$specter29549.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29549");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29549.
 */
com.rpl.specter.__GT_t_com$rpl$specter29549 = (function com$rpl$specter$__GT_t_com$rpl$specter29549(meta29550){
return (new com.rpl.specter.t_com$rpl$specter29549(meta29550));
});

}

return (new com.rpl.specter.t_com$rpl$specter29549(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29559 = (function (meta29560){
this.meta29560 = meta29560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29561,meta29560__$1){
var self__ = this;
var _29561__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29559(meta29560__$1));
});

com.rpl.specter.t_com$rpl$specter29559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29561){
var self__ = this;
var _29561__$1 = this;
return self__.meta29560;
});

com.rpl.specter.t_com$rpl$specter29559.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29559.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29559.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter29559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29560","meta29560",1996789784,null)], null);
});

com.rpl.specter.t_com$rpl$specter29559.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29559.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29559";

com.rpl.specter.t_com$rpl$specter29559.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29559");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29559.
 */
com.rpl.specter.__GT_t_com$rpl$specter29559 = (function com$rpl$specter$__GT_t_com$rpl$specter29559(meta29560){
return (new com.rpl.specter.t_com$rpl$specter29559(meta29560));
});

}

return (new com.rpl.specter.t_com$rpl$specter29559(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__24830__auto__,v){
var ret__24831__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29586 = (function (meta29587){
this.meta29587 = meta29587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29588,meta29587__$1){
var self__ = this;
var _29588__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29586(meta29587__$1));
});

com.rpl.specter.t_com$rpl$specter29586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29588){
var self__ = this;
var _29588__$1 = this;
return self__.meta29587;
});

com.rpl.specter.t_com$rpl$specter29586.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29586.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27586__auto____$1){
return (function (curr__24830__auto__,v){
var ret__24831__auto__ = next_fn(v);
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
});})(next_fn,this__27586__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.t_com$rpl$specter29586.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29587","meta29587",147792870,null)], null);
});

com.rpl.specter.t_com$rpl$specter29586.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29586.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29586";

com.rpl.specter.t_com$rpl$specter29586.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29586");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29586.
 */
com.rpl.specter.__GT_t_com$rpl$specter29586 = (function com$rpl$specter$__GT_t_com$rpl$specter29586(meta29587){
return (new com.rpl.specter.t_com$rpl$specter29586(meta29587));
});

}

return (new com.rpl.specter.t_com$rpl$specter29586(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__24830__auto__,k){
var ret__24831__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29589 = (function (meta29590){
this.meta29590 = meta29590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29591,meta29590__$1){
var self__ = this;
var _29591__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29589(meta29590__$1));
});

com.rpl.specter.t_com$rpl$specter29589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29591){
var self__ = this;
var _29591__$1 = this;
return self__.meta29590;
});

com.rpl.specter.t_com$rpl$specter29589.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29589.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27586__auto____$1){
return (function (curr__24830__auto__,k){
var ret__24831__auto__ = next_fn(k);
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
});})(next_fn,this__27586__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.t_com$rpl$specter29589.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29590","meta29590",-948167360,null)], null);
});

com.rpl.specter.t_com$rpl$specter29589.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29589.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29589";

com.rpl.specter.t_com$rpl$specter29589.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29589");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29589.
 */
com.rpl.specter.__GT_t_com$rpl$specter29589 = (function com$rpl$specter$__GT_t_com$rpl$specter29589(meta29590){
return (new com.rpl.specter.t_com$rpl$specter29589(meta29590));
});

}

return (new com.rpl.specter.t_com$rpl$specter29589(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29593 = (function (meta29594){
this.meta29594 = meta29594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29595,meta29594__$1){
var self__ = this;
var _29595__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29593(meta29594__$1));
});

com.rpl.specter.t_com$rpl$specter29593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29595){
var self__ = this;
var _29595__$1 = this;
return self__.meta29594;
});

com.rpl.specter.t_com$rpl$specter29593.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29593.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,structure);
var G__29597 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29596,G__29597) : next_fn__28390__auto__.call(null,G__29596,G__29597));
});

com.rpl.specter.t_com$rpl$specter29593.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29598 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,structure);
var G__29599 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29598,G__29599) : next_fn__28390__auto__.call(null,G__29598,G__29599));
});

com.rpl.specter.t_com$rpl$specter29593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29594","meta29594",-1616196899,null)], null);
});

com.rpl.specter.t_com$rpl$specter29593.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29593.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29593";

com.rpl.specter.t_com$rpl$specter29593.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29593");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29593.
 */
com.rpl.specter.__GT_t_com$rpl$specter29593 = (function com$rpl$specter$__GT_t_com$rpl$specter29593(meta29594){
return (new com.rpl.specter.t_com$rpl$specter29593(meta29594));
});

}

return (new com.rpl.specter.t_com$rpl$specter29593(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__29600 = structure;
var G__29601 = s;
var G__29602 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__29603 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__29600,G__29601,G__29602,G__29603) : com.rpl.specter.navs.srange_transform.call(null,G__29600,G__29601,G__29602,G__29603));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29604 = (function (start_index_fn,end_index_fn,meta29605){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta29605 = meta29605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29606,meta29605__$1){
var self__ = this;
var _29606__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29604(self__.start_index_fn,self__.end_index_fn,meta29605__$1));
});

com.rpl.specter.t_com$rpl$specter29604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29606){
var self__ = this;
var _29606__$1 = this;
return self__.meta29605;
});

com.rpl.specter.t_com$rpl$specter29604.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29604.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
});

com.rpl.specter.t_com$rpl$specter29604.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__29607 = structure;
var G__29608 = s;
var G__29609 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__29610 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__29607,G__29608,G__29609,G__29610) : com.rpl.specter.navs.srange_transform.call(null,G__29607,G__29608,G__29609,G__29610));
});

com.rpl.specter.t_com$rpl$specter29604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta29605","meta29605",1780449105,null)], null);
});

com.rpl.specter.t_com$rpl$specter29604.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29604.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29604";

com.rpl.specter.t_com$rpl$specter29604.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29604");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29604.
 */
com.rpl.specter.__GT_t_com$rpl$specter29604 = (function com$rpl$specter$__GT_t_com$rpl$specter29604(start_index_fn__$1,end_index_fn__$1,meta29605){
return (new com.rpl.specter.t_com$rpl$specter29604(start_index_fn__$1,end_index_fn__$1,meta29605));
});

}

return (new com.rpl.specter.t_com$rpl$specter29604(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29611 = (function (start,end,meta29612){
this.start = start;
this.end = end;
this.meta29612 = meta29612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29613,meta29612__$1){
var self__ = this;
var _29613__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29611(self__.start,self__.end,meta29612__$1));
});

com.rpl.specter.t_com$rpl$specter29611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29613){
var self__ = this;
var _29613__$1 = this;
return self__.meta29612;
});

com.rpl.specter.t_com$rpl$specter29611.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29611.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter29611.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter29611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta29612","meta29612",1660653370,null)], null);
});

com.rpl.specter.t_com$rpl$specter29611.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29611.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29611";

com.rpl.specter.t_com$rpl$specter29611.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29611");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29611.
 */
com.rpl.specter.__GT_t_com$rpl$specter29611 = (function com$rpl$specter$__GT_t_com$rpl$specter29611(start__$1,end__$1,meta29612){
return (new com.rpl.specter.t_com$rpl$specter29611(start__$1,end__$1,meta29612));
});

}

return (new com.rpl.specter.t_com$rpl$specter29611(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__24830__auto__,p__29614){
var vec__29615 = p__29614;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29615,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29615,(1),null);
var ret__24831__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29618 = (function (pred,meta29619){
this.pred = pred;
this.meta29619 = meta29619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29620,meta29619__$1){
var self__ = this;
var _29620__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29618(self__.pred,meta29619__$1));
});

com.rpl.specter.t_com$rpl$specter29618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29620){
var self__ = this;
var _29620__$1 = this;
return self__.meta29619;
});

com.rpl.specter.t_com$rpl$specter29618.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29618.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27586__auto____$1){
return (function (curr__24830__auto__,p__29621){
var vec__29622 = p__29621;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29622,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29622,(1),null);
var ret__24831__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
});})(next_fn,this__27586__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter29618.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta29619","meta29619",344761028,null)], null);
});

com.rpl.specter.t_com$rpl$specter29618.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29618.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29618";

com.rpl.specter.t_com$rpl$specter29618.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29618");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29618.
 */
com.rpl.specter.__GT_t_com$rpl$specter29618 = (function com$rpl$specter$__GT_t_com$rpl$specter29618(pred__$1,meta29619){
return (new com.rpl.specter.t_com$rpl$specter29618(pred__$1,meta29619));
});

}

return (new com.rpl.specter.t_com$rpl$specter29618(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__29625 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29625) : next_fn.call(null,G__29625));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = (function (){var G__29626 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29626) : next_fn.call(null,G__29626));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29627 = (function (meta29628){
this.meta29628 = meta29628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29629,meta29628__$1){
var self__ = this;
var _29629__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29627(meta29628__$1));
});

com.rpl.specter.t_com$rpl$specter29627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29629){
var self__ = this;
var _29629__$1 = this;
return self__.meta29628;
});

com.rpl.specter.t_com$rpl$specter29627.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29627.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter29627.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter29627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29628","meta29628",-250704225,null)], null);
});

com.rpl.specter.t_com$rpl$specter29627.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29627.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29627";

com.rpl.specter.t_com$rpl$specter29627.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29627");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29627.
 */
com.rpl.specter.__GT_t_com$rpl$specter29627 = (function com$rpl$specter$__GT_t_com$rpl$specter29627(meta29628){
return (new com.rpl.specter.t_com$rpl$specter29627(meta29628));
});

}

return (new com.rpl.specter.t_com$rpl$specter29627(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__29630 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29630) : next_fn.call(null,G__29630));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__29631 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29631) : next_fn.call(null,G__29631));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29632 = (function (meta29633){
this.meta29633 = meta29633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29634,meta29633__$1){
var self__ = this;
var _29634__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29632(meta29633__$1));
});

com.rpl.specter.t_com$rpl$specter29632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29634){
var self__ = this;
var _29634__$1 = this;
return self__.meta29633;
});

com.rpl.specter.t_com$rpl$specter29632.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29632.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter29632.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter29632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29633","meta29633",822782131,null)], null);
});

com.rpl.specter.t_com$rpl$specter29632.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29632.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29632";

com.rpl.specter.t_com$rpl$specter29632.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29632");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29632.
 */
com.rpl.specter.__GT_t_com$rpl$specter29632 = (function com$rpl$specter$__GT_t_com$rpl$specter29632(meta29633){
return (new com.rpl.specter.t_com$rpl$specter29632(meta29633));
});

}

return (new com.rpl.specter.t_com$rpl$specter29632(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29635 = (function (meta29636){
this.meta29636 = meta29636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29637,meta29636__$1){
var self__ = this;
var _29637__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29635(meta29636__$1));
});

com.rpl.specter.t_com$rpl$specter29635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29637){
var self__ = this;
var _29637__$1 = this;
return self__.meta29636;
});

com.rpl.specter.t_com$rpl$specter29635.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29635.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter29635.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

com.rpl.specter.t_com$rpl$specter29635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29636","meta29636",-845848960,null)], null);
});

com.rpl.specter.t_com$rpl$specter29635.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29635.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29635";

com.rpl.specter.t_com$rpl$specter29635.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29635");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29635.
 */
com.rpl.specter.__GT_t_com$rpl$specter29635 = (function com$rpl$specter$__GT_t_com$rpl$specter29635(meta29636){
return (new com.rpl.specter.t_com$rpl$specter29635(meta29636));
});

}

return (new com.rpl.specter.t_com$rpl$specter29635(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29638 = (function (meta29639){
this.meta29639 = meta29639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29640,meta29639__$1){
var self__ = this;
var _29640__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29638(meta29639__$1));
});

com.rpl.specter.t_com$rpl$specter29638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29640){
var self__ = this;
var _29640__$1 = this;
return self__.meta29639;
});

com.rpl.specter.t_com$rpl$specter29638.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29638.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter29638.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter29638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29639","meta29639",-188783173,null)], null);
});

com.rpl.specter.t_com$rpl$specter29638.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29638.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29638";

com.rpl.specter.t_com$rpl$specter29638.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29638");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29638.
 */
com.rpl.specter.__GT_t_com$rpl$specter29638 = (function com$rpl$specter$__GT_t_com$rpl$specter29638(meta29639){
return (new com.rpl.specter.t_com$rpl$specter29638(meta29639));
});

}

return (new com.rpl.specter.t_com$rpl$specter29638(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29641 = (function (meta29642){
this.meta29642 = meta29642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29643,meta29642__$1){
var self__ = this;
var _29643__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29641(meta29642__$1));
});

com.rpl.specter.t_com$rpl$specter29641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29643){
var self__ = this;
var _29643__$1 = this;
return self__.meta29642;
});

com.rpl.specter.t_com$rpl$specter29641.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29641.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter29641.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter29641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29642","meta29642",851221117,null)], null);
});

com.rpl.specter.t_com$rpl$specter29641.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29641.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29641";

com.rpl.specter.t_com$rpl$specter29641.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29641");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29641.
 */
com.rpl.specter.__GT_t_com$rpl$specter29641 = (function com$rpl$specter$__GT_t_com$rpl$specter29641(meta29642){
return (new com.rpl.specter.t_com$rpl$specter29641(meta29642));
});

}

return (new com.rpl.specter.t_com$rpl$specter29641(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__29644 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29644) : next_fn.call(null,G__29644));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29645 = (function (aset,meta29646){
this.aset = aset;
this.meta29646 = meta29646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29647,meta29646__$1){
var self__ = this;
var _29647__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29645(self__.aset,meta29646__$1));
});

com.rpl.specter.t_com$rpl$specter29645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29647){
var self__ = this;
var _29647__$1 = this;
return self__.meta29646;
});

com.rpl.specter.t_com$rpl$specter29645.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29645.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter29645.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter29645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta29646","meta29646",-870913127,null)], null);
});

com.rpl.specter.t_com$rpl$specter29645.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29645.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29645";

com.rpl.specter.t_com$rpl$specter29645.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29645");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29645.
 */
com.rpl.specter.__GT_t_com$rpl$specter29645 = (function com$rpl$specter$__GT_t_com$rpl$specter29645(aset__$1,meta29646){
return (new com.rpl.specter.t_com$rpl$specter29645(aset__$1,meta29646));
});

}

return (new com.rpl.specter.t_com$rpl$specter29645(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__29648 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29648) : next_fn.call(null,G__29648));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29649 = (function (m_keys,meta29650){
this.m_keys = m_keys;
this.meta29650 = meta29650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29651,meta29650__$1){
var self__ = this;
var _29651__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29649(self__.m_keys,meta29650__$1));
});

com.rpl.specter.t_com$rpl$specter29649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29651){
var self__ = this;
var _29651__$1 = this;
return self__.meta29650;
});

com.rpl.specter.t_com$rpl$specter29649.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29649.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter29649.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
});

com.rpl.specter.t_com$rpl$specter29649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta29650","meta29650",459812419,null)], null);
});

com.rpl.specter.t_com$rpl$specter29649.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29649.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29649";

com.rpl.specter.t_com$rpl$specter29649.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29649");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29649.
 */
com.rpl.specter.__GT_t_com$rpl$specter29649 = (function com$rpl$specter$__GT_t_com$rpl$specter29649(m_keys__$1,meta29650){
return (new com.rpl.specter.t_com$rpl$specter29649(m_keys__$1,meta29650));
});

}

return (new com.rpl.specter.t_com$rpl$specter29649(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30017__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29652 = (function (path,late,meta29653){
this.path = path;
this.late = late;
this.meta29653 = meta29653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29654,meta29653__$1){
var self__ = this;
var _29654__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29652(self__.path,self__.late,meta29653__$1));
});

com.rpl.specter.t_com$rpl$specter29652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29654){
var self__ = this;
var _29654__$1 = this;
return self__.meta29653;
});

com.rpl.specter.t_com$rpl$specter29652.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29652.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter29652.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__29655 = self__.late;
var G__29656 = ((function (G__29655,select_result,transformed,values_to_insert,next_fn,this__27586__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__29655,select_result,transformed,values_to_insert,next_fn,this__27586__auto____$1))
;
var G__29657 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__29655,G__29656,G__29657) : com.rpl.specter.compiled_transform.call(null,G__29655,G__29656,G__29657));
});

com.rpl.specter.t_com$rpl$specter29652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29653","meta29653",-662683593,null)], null);
});

com.rpl.specter.t_com$rpl$specter29652.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29652.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29652";

com.rpl.specter.t_com$rpl$specter29652.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29652");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29652.
 */
com.rpl.specter.__GT_t_com$rpl$specter29652 = (function com$rpl$specter$__GT_t_com$rpl$specter29652(path__$1,late__$1,meta29653){
return (new com.rpl.specter.t_com$rpl$specter29652(path__$1,late__$1,meta29653));
});

}

return (new com.rpl.specter.t_com$rpl$specter29652(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__30017 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30021__i = 0, G__30021__a = new Array(arguments.length -  0);
while (G__30021__i < G__30021__a.length) {G__30021__a[G__30021__i] = arguments[G__30021__i + 0]; ++G__30021__i;}
  path = new cljs.core.IndexedSeq(G__30021__a,0,null);
} 
return G__30017__delegate.call(this,path);};
G__30017.cljs$lang$maxFixedArity = 0;
G__30017.cljs$lang$applyTo = (function (arglist__30022){
var path = cljs.core.seq(arglist__30022);
return G__30017__delegate(path);
});
G__30017.cljs$core$IFn$_invoke$arity$variadic = G__30017__delegate;
return G__30017;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29658 = (function (key,meta29659){
this.key = key;
this.meta29659 = meta29659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29660,meta29659__$1){
var self__ = this;
var _29660__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29658(self__.key,meta29659__$1));
});

com.rpl.specter.t_com$rpl$specter29658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29660){
var self__ = this;
var _29660__$1 = this;
return self__.meta29659;
});

com.rpl.specter.t_com$rpl$specter29658.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29658.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter29658.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter29658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta29659","meta29659",-221235276,null)], null);
});

com.rpl.specter.t_com$rpl$specter29658.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29658.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29658";

com.rpl.specter.t_com$rpl$specter29658.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29658");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29658.
 */
com.rpl.specter.__GT_t_com$rpl$specter29658 = (function com$rpl$specter$__GT_t_com$rpl$specter29658(key__$1,meta29659){
return (new com.rpl.specter.t_com$rpl$specter29658(key__$1,meta29659));
});

}

return (new com.rpl.specter.t_com$rpl$specter29658(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29661 = (function (elem,meta29662){
this.elem = elem;
this.meta29662 = meta29662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29663,meta29662__$1){
var self__ = this;
var _29663__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29661(self__.elem,meta29662__$1));
});

com.rpl.specter.t_com$rpl$specter29661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29663){
var self__ = this;
var _29663__$1 = this;
return self__.meta29662;
});

com.rpl.specter.t_com$rpl$specter29661.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29661.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter29661.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter29661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta29662","meta29662",876966946,null)], null);
});

com.rpl.specter.t_com$rpl$specter29661.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29661.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29661";

com.rpl.specter.t_com$rpl$specter29661.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29661");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29661.
 */
com.rpl.specter.__GT_t_com$rpl$specter29661 = (function com$rpl$specter$__GT_t_com$rpl$specter29661(elem__$1,meta29662){
return (new com.rpl.specter.t_com$rpl$specter29661(elem__$1,meta29662));
});

}

return (new com.rpl.specter.t_com$rpl$specter29661(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29664 = (function (index,meta29665){
this.index = index;
this.meta29665 = meta29665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29666,meta29665__$1){
var self__ = this;
var _29666__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29664(self__.index,meta29665__$1));
});

com.rpl.specter.t_com$rpl$specter29664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29666){
var self__ = this;
var _29666__$1 = this;
return self__.meta29665;
});

com.rpl.specter.t_com$rpl$specter29664.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29664.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter29664.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29667;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29668 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,754,757,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache29667 = info29668;

return info29668;
})():info__28398__auto__);
var precompiled29669 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled29669.cljs$core$IFn$_invoke$arity$1 ? precompiled29669.cljs$core$IFn$_invoke$arity$1(G__29670) : precompiled29669.call(null,G__29670));
} else {
return precompiled29669;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter29664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta29665","meta29665",364159191,null)], null);
});

com.rpl.specter.t_com$rpl$specter29664.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29664.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29664";

com.rpl.specter.t_com$rpl$specter29664.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29664");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29664.
 */
com.rpl.specter.__GT_t_com$rpl$specter29664 = (function com$rpl$specter$__GT_t_com$rpl$specter29664(index__$1,meta29665){
return (new com.rpl.specter.t_com$rpl$specter29664(index__$1,meta29665));
});

}

return (new com.rpl.specter.t_com$rpl$specter29664(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29671 = (function (i,meta29672){
this.i = i;
this.meta29672 = meta29672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29673,meta29672__$1){
var self__ = this;
var _29673__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29671(self__.i,meta29672__$1));
});

com.rpl.specter.t_com$rpl$specter29671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29673){
var self__ = this;
var _29673__$1 = this;
return self__.meta29672;
});

com.rpl.specter.t_com$rpl$specter29671.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29671.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter29671.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__30039 = (j - (1));
var G__30040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__30039;
s = G__30040;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__30041 = (j + (1));
var G__30042 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__30041;
s = G__30042;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29674;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29675 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,967,970,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache29674 = info29675;

return info29675;
})():info__28398__auto__);
var precompiled29676 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled29676.cljs$core$IFn$_invoke$arity$1 ? precompiled29676.cljs$core$IFn$_invoke$arity$1(G__29677) : precompiled29676.call(null,G__29677));
} else {
return precompiled29676;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29678;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29679 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache29678 = info29679;

return info29679;
})():info__28398__auto__);
var precompiled29680 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled29680.cljs$core$IFn$_invoke$arity$1 ? precompiled29680.cljs$core$IFn$_invoke$arity$1(G__29681) : precompiled29680.call(null,G__29681));
} else {
return precompiled29680;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter29671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta29672","meta29672",-1231665960,null)], null);
});

com.rpl.specter.t_com$rpl$specter29671.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29671.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29671";

com.rpl.specter.t_com$rpl$specter29671.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29671");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29671.
 */
com.rpl.specter.__GT_t_com$rpl$specter29671 = (function com$rpl$specter$__GT_t_com$rpl$specter29671(i__$1,meta29672){
return (new com.rpl.specter.t_com$rpl$specter29671(i__$1,meta29672));
});

}

return (new com.rpl.specter.t_com$rpl$specter29671(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i){
return (function (curr__24830__auto__,e){
var ret__24831__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__29684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29684) : next_fn.call(null,G__29684));
})()
;
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
});})(i))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices){
return (function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__29685 = (function (){var G__29688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29688) : next_fn.call(null,G__29688));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29685,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29685,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__29685,newi_STAR_,newe,newi,indices){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29689;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29690 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices){
return (function (p1__29682_SHARP_){
return (p1__29682_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices){
return (function (p1__29683_SHARP_){
return (p1__29683_SHARP_ <= newi);
});})(info__28398__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache29689 = info29690;

return info29690;
})():info__28398__auto__);
var precompiled29691 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29692 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices){
return (function (p1__29682_SHARP_){
return (p1__29682_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices){
return (function (p1__29683_SHARP_){
return (p1__29683_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices))
], null),com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices){
return (function (p1__29682_SHARP_){
return (p1__29682_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices){
return (function (p1__29683_SHARP_){
return (p1__29683_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled29691,dynamic_QMARK___28399__auto__,ii2,curri,vec__29685,newi_STAR_,newe,newi,indices))
], null);
return (precompiled29691.cljs$core$IFn$_invoke$arity$1 ? precompiled29691.cljs$core$IFn$_invoke$arity$1(G__29692) : precompiled29691.call(null,G__29692));
} else {
return precompiled29691;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__29685,newi_STAR_,newe,newi,indices))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29693;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29694 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29693 = info29694;

return info29694;
})():info__28398__auto__);
var precompiled29695 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled29695.cljs$core$IFn$_invoke$arity$1 ? precompiled29695.cljs$core$IFn$_invoke$arity$1(G__29696) : precompiled29695.call(null,G__29696));
} else {
return precompiled29695;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29697;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29698 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29697 = info29698;

return info29698;
})():info__28398__auto__);
var precompiled29699 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled29699.cljs$core$IFn$_invoke$arity$1 ? precompiled29699.cljs$core$IFn$_invoke$arity$1(G__29700) : precompiled29699.call(null,G__29700));
} else {
return precompiled29699;
}
})(),newe,s));
});})(indices))
,structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29701 = (function (start,meta29702){
this.start = start;
this.meta29702 = meta29702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29703,meta29702__$1){
var self__ = this;
var _29703__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29701(self__.start,meta29702__$1));
});

com.rpl.specter.t_com$rpl$specter29701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29703){
var self__ = this;
var _29703__$1 = this;
return self__.meta29702;
});

com.rpl.specter.t_com$rpl$specter29701.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29701.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,next_fn,this__27586__auto____$1){
return (function (curr__24830__auto__,e){
var ret__24831__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
});})(i,next_fn,this__27586__auto____$1))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.t_com$rpl$specter29701.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,next_fn,this__27586__auto____$1){
return (function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__29704 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29704,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29704,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29707;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29708 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__29682_SHARP_){
return (p1__29682_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__29683_SHARP_){
return (p1__29683_SHARP_ <= newi);
});})(info__28398__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29682#","p1__29682#",1049308840,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29683#","p1__29683#",-756407081,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache29707 = info29708;

return info29708;
})():info__28398__auto__);
var precompiled29709 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29710 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__29682_SHARP_){
return (p1__29682_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__29683_SHARP_){
return (p1__29683_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
], null),com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__29682_SHARP_){
return (p1__29682_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__29683_SHARP_){
return (p1__29683_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled29709,dynamic_QMARK___28399__auto__,ii2,curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
], null);
return (precompiled29709.cljs$core$IFn$_invoke$arity$1 ? precompiled29709.cljs$core$IFn$_invoke$arity$1(G__29710) : precompiled29709.call(null,G__29710));
} else {
return precompiled29709;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__29704,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29711;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29712 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29711 = info29712;

return info29712;
})():info__28398__auto__);
var precompiled29713 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled29713.cljs$core$IFn$_invoke$arity$1 ? precompiled29713.cljs$core$IFn$_invoke$arity$1(G__29714) : precompiled29713.call(null,G__29714));
} else {
return precompiled29713;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache29715;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29716 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29715 = info29716;

return info29716;
})():info__28398__auto__);
var precompiled29717 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled29717.cljs$core$IFn$_invoke$arity$1 ? precompiled29717.cljs$core$IFn$_invoke$arity$1(G__29718) : precompiled29717.call(null,G__29718));
} else {
return precompiled29717;
}
})(),newe,s));
});})(indices,next_fn,this__27586__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter29701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta29702","meta29702",-133518323,null)], null);
});

com.rpl.specter.t_com$rpl$specter29701.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29701.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29701";

com.rpl.specter.t_com$rpl$specter29701.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29701");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29701.
 */
com.rpl.specter.__GT_t_com$rpl$specter29701 = (function com$rpl$specter$__GT_t_com$rpl$specter29701(start__$1,meta29702){
return (new com.rpl.specter.t_com$rpl$specter29701(start__$1,meta29702));
});

}

return (new com.rpl.specter.t_com$rpl$specter29701(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29719 = (function (afn,meta29720){
this.afn = afn;
this.meta29720 = meta29720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29721,meta29720__$1){
var self__ = this;
var _29721__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29719(self__.afn,meta29720__$1));
});

com.rpl.specter.t_com$rpl$specter29719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29721){
var self__ = this;
var _29721__$1 = this;
return self__.meta29720;
});

com.rpl.specter.t_com$rpl$specter29719.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29719.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29722 = vals;
var G__29723 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29722,G__29723) : next_fn.call(null,G__29722,G__29723));
});

com.rpl.specter.t_com$rpl$specter29719.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29724 = vals;
var G__29725 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29724,G__29725) : next_fn.call(null,G__29724,G__29725));
});

com.rpl.specter.t_com$rpl$specter29719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29720","meta29720",-380821866,null)], null);
});

com.rpl.specter.t_com$rpl$specter29719.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29719.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29719";

com.rpl.specter.t_com$rpl$specter29719.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29719");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29719.
 */
com.rpl.specter.__GT_t_com$rpl$specter29719 = (function com$rpl$specter$__GT_t_com$rpl$specter29719(afn__$1,meta29720){
return (new com.rpl.specter.t_com$rpl$specter29719(afn__$1,meta29720));
});

}

return (new com.rpl.specter.t_com$rpl$specter29719(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__29726 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29726) : next_fn.call(null,G__29726));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__29727 = (function (){var G__29728 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29728) : next_fn.call(null,G__29728));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__29727) : unparse_fn.call(null,G__29727));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29729 = (function (parse_fn,unparse_fn,meta29730){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta29730 = meta29730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29731,meta29730__$1){
var self__ = this;
var _29731__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29729(self__.parse_fn,self__.unparse_fn,meta29730__$1));
});

com.rpl.specter.t_com$rpl$specter29729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29731){
var self__ = this;
var _29731__$1 = this;
return self__.meta29730;
});

com.rpl.specter.t_com$rpl$specter29729.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29729.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter29729.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var G__29732 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__29732) : self__.unparse_fn.call(null,G__29732));
});

com.rpl.specter.t_com$rpl$specter29729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta29730","meta29730",1247031810,null)], null);
});

com.rpl.specter.t_com$rpl$specter29729.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29729.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29729";

com.rpl.specter.t_com$rpl$specter29729.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29729");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29729.
 */
com.rpl.specter.__GT_t_com$rpl$specter29729 = (function com$rpl$specter$__GT_t_com$rpl$specter29729(parse_fn__$1,unparse_fn__$1,meta29730){
return (new com.rpl.specter.t_com$rpl$specter29729(parse_fn__$1,unparse_fn__$1,meta29730));
});

}

return (new com.rpl.specter.t_com$rpl$specter29729(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__29733 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29733) : next_fn.call(null,G__29733));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29734 = (function (meta29735){
this.meta29735 = meta29735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29736,meta29735__$1){
var self__ = this;
var _29736__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29734(meta29735__$1));
});

com.rpl.specter.t_com$rpl$specter29734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29736){
var self__ = this;
var _29736__$1 = this;
return self__.meta29735;
});

com.rpl.specter.t_com$rpl$specter29734.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29734.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});

com.rpl.specter.t_com$rpl$specter29734.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter29734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29735","meta29735",39758980,null)], null);
});

com.rpl.specter.t_com$rpl$specter29734.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29734.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29734";

com.rpl.specter.t_com$rpl$specter29734.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29734");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29734.
 */
com.rpl.specter.__GT_t_com$rpl$specter29734 = (function com$rpl$specter$__GT_t_com$rpl$specter29734(meta29735){
return (new com.rpl.specter.t_com$rpl$specter29734(meta29735));
});

}

return (new com.rpl.specter.t_com$rpl$specter29734(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__24830__auto__,s){
var ret__24831__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29737 = (function (re,meta29738){
this.re = re;
this.meta29738 = meta29738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29739,meta29738__$1){
var self__ = this;
var _29739__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29737(self__.re,meta29738__$1));
});

com.rpl.specter.t_com$rpl$specter29737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29739){
var self__ = this;
var _29739__$1 = this;
return self__.meta29738;
});

com.rpl.specter.t_com$rpl$specter29737.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29737.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27586__auto____$1){
return (function (curr__24830__auto__,s){
var ret__24831__auto__ = next_fn(s);
if((ret__24831__auto__ === com.rpl.specter.NONE)){
return curr__24830__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__24831__auto__)){
return cljs.core.reduced(ret__24831__auto__);
} else {
return ret__24831__auto__;
}
}
});})(next_fn,this__27586__auto____$1))
,com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
});

com.rpl.specter.t_com$rpl$specter29737.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return clojure.string.replace(structure,self__.re,next_fn);
});

com.rpl.specter.t_com$rpl$specter29737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta29738","meta29738",1099078600,null)], null);
});

com.rpl.specter.t_com$rpl$specter29737.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29737.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29737";

com.rpl.specter.t_com$rpl$specter29737.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29737");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29737.
 */
com.rpl.specter.__GT_t_com$rpl$specter29737 = (function com$rpl$specter$__GT_t_com$rpl$specter29737(re__$1,meta29738){
return (new com.rpl.specter.t_com$rpl$specter29737(re__$1,meta29738));
});

}

return (new com.rpl.specter.t_com$rpl$specter29737(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30395__delegate = function (path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
return afn;
} else {
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29742 = (function (path,temp__5455__auto__,late,meta29743){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta29743 = meta29743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_29744,meta29743__$1){
var self__ = this;
var _29744__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29742(self__.path,self__.temp__5455__auto__,self__.late,meta29743__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_29744){
var self__ = this;
var _29744__$1 = this;
return self__.meta29743;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29742.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29742.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__29740_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__29740_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29742.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__29741_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__29741_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29742.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29743","meta29743",235587354,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29742.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29742.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29742";

com.rpl.specter.t_com$rpl$specter29742.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29742");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29742.
 */
com.rpl.specter.__GT_t_com$rpl$specter29742 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29742(path__$1,temp__5455__auto____$1,late__$1,meta29743){
return (new com.rpl.specter.t_com$rpl$specter29742(path__$1,temp__5455__auto____$1,late__$1,meta29743));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29742(path,temp__5455__auto__,late,null));
});})(temp__5455__auto__))
);
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
}
};
var G__30395 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30396__i = 0, G__30396__a = new Array(arguments.length -  0);
while (G__30396__i < G__30396__a.length) {G__30396__a[G__30396__i] = arguments[G__30396__i + 0]; ++G__30396__i;}
  path = new cljs.core.IndexedSeq(G__30396__a,0,null);
} 
return G__30395__delegate.call(this,path);};
G__30395.cljs$lang$maxFixedArity = 0;
G__30395.cljs$lang$applyTo = (function (arglist__30397){
var path = cljs.core.seq(arglist__30397);
return G__30395__delegate(path);
});
G__30395.cljs$core$IFn$_invoke$arity$variadic = G__30395__delegate;
return G__30395;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30399__delegate = function (path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
return ((function (afn,temp__5455__auto__){
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
;})(afn,temp__5455__auto__))
} else {
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29747 = (function (path,temp__5455__auto__,late,meta29748){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta29748 = meta29748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_29749,meta29748__$1){
var self__ = this;
var _29749__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29747(self__.path,self__.temp__5455__auto__,self__.late,meta29748__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_29749){
var self__ = this;
var _29749__$1 = this;
return self__.meta29748;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29747.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29747.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__29745_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__29745_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29747.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__29746_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__29746_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29747.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29748","meta29748",746590916,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29747.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29747.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29747";

com.rpl.specter.t_com$rpl$specter29747.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29747");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29747.
 */
com.rpl.specter.__GT_t_com$rpl$specter29747 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29747(path__$1,temp__5455__auto____$1,late__$1,meta29748){
return (new com.rpl.specter.t_com$rpl$specter29747(path__$1,temp__5455__auto____$1,late__$1,meta29748));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29747(path,temp__5455__auto__,late,null));
});})(temp__5455__auto__))
);
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
}
};
var G__30399 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30410__i = 0, G__30410__a = new Array(arguments.length -  0);
while (G__30410__i < G__30410__a.length) {G__30410__a[G__30410__i] = arguments[G__30410__i + 0]; ++G__30410__i;}
  path = new cljs.core.IndexedSeq(G__30410__a,0,null);
} 
return G__30399__delegate.call(this,path);};
G__30399.cljs$lang$maxFixedArity = 0;
G__30399.cljs$lang$applyTo = (function (arglist__30411){
var path = cljs.core.seq(arglist__30411);
return G__30399__delegate(path);
});
G__30399.cljs$core$IFn$_invoke$arity$variadic = G__30399__delegate;
return G__30399;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30413__delegate = function (path){
var G__29750 = com.rpl.specter.ALL;
var G__29751 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__29750,G__29751) : com.rpl.specter.subselect.call(null,G__29750,G__29751));
};
var G__30413 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30414__i = 0, G__30414__a = new Array(arguments.length -  0);
while (G__30414__i < G__30414__a.length) {G__30414__a[G__30414__i] = arguments[G__30414__i + 0]; ++G__30414__i;}
  path = new cljs.core.IndexedSeq(G__30414__a,0,null);
} 
return G__30413__delegate.call(this,path);};
G__30413.cljs$lang$maxFixedArity = 0;
G__30413.cljs$lang$applyTo = (function (arglist__30415){
var path = cljs.core.seq(arglist__30415);
return G__30413__delegate(path);
});
G__30413.cljs$core$IFn$_invoke$arity$variadic = G__30413__delegate;
return G__30413;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29752 = (function (path,update_fn,late,late_fn,meta29753){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta29753 = meta29753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29754,meta29753__$1){
var self__ = this;
var _29754__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29752(self__.path,self__.update_fn,self__.late,self__.late_fn,meta29753__$1));
});

com.rpl.specter.t_com$rpl$specter29752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29754){
var self__ = this;
var _29754__$1 = this;
return self__.meta29753;
});

com.rpl.specter.t_com$rpl$specter29752.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29752.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter29752.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter29752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta29753","meta29753",1487308617,null)], null);
});

com.rpl.specter.t_com$rpl$specter29752.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29752.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29752";

com.rpl.specter.t_com$rpl$specter29752.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29752");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29752.
 */
com.rpl.specter.__GT_t_com$rpl$specter29752 = (function com$rpl$specter$__GT_t_com$rpl$specter29752(path__$1,update_fn__$1,late__$1,late_fn__$1,meta29753){
return (new com.rpl.specter.t_com$rpl$specter29752(path__$1,update_fn__$1,late__$1,late_fn__$1,meta29753));
});

}

return (new com.rpl.specter.t_com$rpl$specter29752(path,update_fn,late,late_fn,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29755 = (function (path,reduce_fn,late,late_fn,meta29756){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta29756 = meta29756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29757,meta29756__$1){
var self__ = this;
var _29757__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29755(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta29756__$1));
});

com.rpl.specter.t_com$rpl$specter29755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29757){
var self__ = this;
var _29757__$1 = this;
return self__.meta29756;
});

com.rpl.specter.t_com$rpl$specter29755.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29755.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter29755.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter29755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta29756","meta29756",-153537296,null)], null);
});

com.rpl.specter.t_com$rpl$specter29755.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29755.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29755";

com.rpl.specter.t_com$rpl$specter29755.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29755");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29755.
 */
com.rpl.specter.__GT_t_com$rpl$specter29755 = (function com$rpl$specter$__GT_t_com$rpl$specter29755(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta29756){
return (new com.rpl.specter.t_com$rpl$specter29755(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta29756));
});

}

return (new com.rpl.specter.t_com$rpl$specter29755(path,reduce_fn,late,late_fn,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__29759 = (function (p1__29758_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29758_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__29759) : com.rpl.specter.pred.call(null,G__29759));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__29761 = (function (p1__29760_SHARP_){
return (p1__29760_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__29761) : com.rpl.specter.pred.call(null,G__29761));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__29763 = (function (p1__29762_SHARP_){
return (p1__29762_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__29763) : com.rpl.specter.pred.call(null,G__29763));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__29765 = (function (p1__29764_SHARP_){
return (p1__29764_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__29765) : com.rpl.specter.pred.call(null,G__29765));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__29767 = (function (p1__29766_SHARP_){
return (p1__29766_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__29767) : com.rpl.specter.pred.call(null,G__29767));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__29768_30480 = com.rpl.specter.protocols.implicit_nav;
var G__29769_30481 = "null";
var G__29770_30482 = ((function (G__29768_30480,G__29769_30481){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__29768_30480,G__29769_30481))
;
goog.object.set(G__29768_30480,G__29769_30481,G__29770_30482);
cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

var G__29771_30483 = com.rpl.specter.protocols.implicit_nav;
var G__29772_30484 = "string";
var G__29773_30485 = ((function (G__29771_30483,G__29772_30484){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__29771_30483,G__29772_30484))
;
goog.object.set(G__29771_30483,G__29772_30484,G__29773_30485);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

var G__29774_30486 = com.rpl.specter.protocols.implicit_nav;
var G__29775_30487 = "number";
var G__29776_30488 = ((function (G__29774_30486,G__29775_30487){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__29774_30486,G__29775_30487))
;
goog.object.set(G__29774_30486,G__29775_30487,G__29776_30488);
cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

var G__29777_30489 = com.rpl.specter.protocols.implicit_nav;
var G__29778_30490 = "boolean";
var G__29779_30491 = ((function (G__29777_30489,G__29778_30490){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__29777_30489,G__29778_30490))
;
goog.object.set(G__29777_30489,G__29778_30490,G__29779_30491);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__29780_30492 = com.rpl.specter.protocols.implicit_nav;
var G__29781_30493 = "function";
var G__29782_30494 = ((function (G__29780_30492,G__29781_30493){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__29780_30492,G__29781_30493))
;
goog.object.set(G__29780_30492,G__29781_30493,G__29782_30494);
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
});
RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__29783 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29783) : next_fn.call(null,G__29783));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__29784 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29784) : next_fn.call(null,G__29784));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29785 = (function (v,meta29786){
this.v = v;
this.meta29786 = meta29786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29787,meta29786__$1){
var self__ = this;
var _29787__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29785(self__.v,meta29786__$1));
});

com.rpl.specter.t_com$rpl$specter29785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29787){
var self__ = this;
var _29787__$1 = this;
return self__.meta29786;
});

com.rpl.specter.t_com$rpl$specter29785.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29785.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter29785.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter29785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta29786","meta29786",-130348152,null)], null);
});

com.rpl.specter.t_com$rpl$specter29785.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29785.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29785";

com.rpl.specter.t_com$rpl$specter29785.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29785");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29785.
 */
com.rpl.specter.__GT_t_com$rpl$specter29785 = (function com$rpl$specter$__GT_t_com$rpl$specter29785(v__$1,meta29786){
return (new com.rpl.specter.t_com$rpl$specter29785(v__$1,meta29786));
});

}

return (new com.rpl.specter.t_com$rpl$specter29785(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__29788 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__29788) : com.rpl.specter.nil__GT_val.call(null,G__29788));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__29789 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__29789) : com.rpl.specter.nil__GT_val.call(null,G__29789));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__29790 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__29790) : com.rpl.specter.nil__GT_val.call(null,G__29790));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__29791 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29791) : next_fn.call(null,G__29791));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__29792 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29792) : next_fn.call(null,G__29792));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29793 = (function (meta29794){
this.meta29794 = meta29794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29795,meta29794__$1){
var self__ = this;
var _29795__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29793(meta29794__$1));
});

com.rpl.specter.t_com$rpl$specter29793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29795){
var self__ = this;
var _29795__$1 = this;
return self__.meta29794;
});

com.rpl.specter.t_com$rpl$specter29793.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29793.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});

com.rpl.specter.t_com$rpl$specter29793.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter29793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29794","meta29794",-1558328607,null)], null);
});

com.rpl.specter.t_com$rpl$specter29793.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29793.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29793";

com.rpl.specter.t_com$rpl$specter29793.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29793");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29793.
 */
com.rpl.specter.__GT_t_com$rpl$specter29793 = (function com$rpl$specter$__GT_t_com$rpl$specter29793(meta29794){
return (new com.rpl.specter.t_com$rpl$specter29793(meta29794));
});

}

return (new com.rpl.specter.t_com$rpl$specter29793(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__29796 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29796) : next_fn.call(null,G__29796));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__29797 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29797) : next_fn.call(null,G__29797));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0))));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29798 = (function (meta29799){
this.meta29799 = meta29799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29800,meta29799__$1){
var self__ = this;
var _29800__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29798(meta29799__$1));
});

com.rpl.specter.t_com$rpl$specter29798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29800){
var self__ = this;
var _29800__$1 = this;
return self__.meta29799;
});

com.rpl.specter.t_com$rpl$specter29798.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29798.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.name(structure));
});

com.rpl.specter.t_com$rpl$specter29798.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0))));

}
}
});

com.rpl.specter.t_com$rpl$specter29798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29799","meta29799",-832385796,null)], null);
});

com.rpl.specter.t_com$rpl$specter29798.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29798.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29798";

com.rpl.specter.t_com$rpl$specter29798.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29798");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29798.
 */
com.rpl.specter.__GT_t_com$rpl$specter29798 = (function com$rpl$specter$__GT_t_com$rpl$specter29798(meta29799){
return (new com.rpl.specter.t_com$rpl$specter29798(meta29799));
});

}

return (new com.rpl.specter.t_com$rpl$specter29798(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__29801 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29801) : next_fn.call(null,G__29801));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__29802 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29802) : next_fn.call(null,G__29802));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0))));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29803 = (function (meta29804){
this.meta29804 = meta29804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29805,meta29804__$1){
var self__ = this;
var _29805__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29803(meta29804__$1));
});

com.rpl.specter.t_com$rpl$specter29803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29805){
var self__ = this;
var _29805__$1 = this;
return self__.meta29804;
});

com.rpl.specter.t_com$rpl$specter29803.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29803.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});

com.rpl.specter.t_com$rpl$specter29803.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0))));

}
}
});

com.rpl.specter.t_com$rpl$specter29803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29804","meta29804",464996029,null)], null);
});

com.rpl.specter.t_com$rpl$specter29803.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29803.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29803";

com.rpl.specter.t_com$rpl$specter29803.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29803");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29803.
 */
com.rpl.specter.__GT_t_com$rpl$specter29803 = (function com$rpl$specter$__GT_t_com$rpl$specter29803(meta29804){
return (new com.rpl.specter.t_com$rpl$specter29803(meta29804));
});

}

return (new com.rpl.specter.t_com$rpl$specter29803(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30527__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29806 = (function (path,late,meta29807){
this.path = path;
this.late = late;
this.meta29807 = meta29807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29808,meta29807__$1){
var self__ = this;
var _29808__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29806(self__.path,self__.late,meta29807__$1));
});

com.rpl.specter.t_com$rpl$specter29806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29808){
var self__ = this;
var _29808__$1 = this;
return self__.meta29807;
});

com.rpl.specter.t_com$rpl$specter29806.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29806.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__29810 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29809,G__29810) : next_fn__28390__auto__.call(null,G__29809,G__29810));
});

com.rpl.specter.t_com$rpl$specter29806.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29811 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__29812 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29811,G__29812) : next_fn__28390__auto__.call(null,G__29811,G__29812));
});

com.rpl.specter.t_com$rpl$specter29806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29807","meta29807",2068052358,null)], null);
});

com.rpl.specter.t_com$rpl$specter29806.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29806.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29806";

com.rpl.specter.t_com$rpl$specter29806.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29806");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29806.
 */
com.rpl.specter.__GT_t_com$rpl$specter29806 = (function com$rpl$specter$__GT_t_com$rpl$specter29806(path__$1,late__$1,meta29807){
return (new com.rpl.specter.t_com$rpl$specter29806(path__$1,late__$1,meta29807));
});

}

return (new com.rpl.specter.t_com$rpl$specter29806(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__30527 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30545__i = 0, G__30545__a = new Array(arguments.length -  0);
while (G__30545__i < G__30545__a.length) {G__30545__a[G__30545__i] = arguments[G__30545__i + 0]; ++G__30545__i;}
  path = new cljs.core.IndexedSeq(G__30545__a,0,null);
} 
return G__30527__delegate.call(this,path);};
G__30527.cljs$lang$maxFixedArity = 0;
G__30527.cljs$lang$applyTo = (function (arglist__30546){
var path = cljs.core.seq(arglist__30546);
return G__30527__delegate(path);
});
G__30527.cljs$core$IFn$_invoke$arity$variadic = G__30527__delegate;
return G__30527;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30550__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29813 = (function (path,late,meta29814){
this.path = path;
this.late = late;
this.meta29814 = meta29814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29815,meta29814__$1){
var self__ = this;
var _29815__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29813(self__.path,self__.late,meta29814__$1));
});

com.rpl.specter.t_com$rpl$specter29813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29815){
var self__ = this;
var _29815__$1 = this;
return self__.meta29814;
});

com.rpl.specter.t_com$rpl$specter29813.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29813.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29816 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__29817 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29816,G__29817) : next_fn__28390__auto__.call(null,G__29816,G__29817));
});

com.rpl.specter.t_com$rpl$specter29813.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29818 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__29819 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29818,G__29819) : next_fn__28390__auto__.call(null,G__29818,G__29819));
});

com.rpl.specter.t_com$rpl$specter29813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29814","meta29814",-1155157021,null)], null);
});

com.rpl.specter.t_com$rpl$specter29813.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29813.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29813";

com.rpl.specter.t_com$rpl$specter29813.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29813");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29813.
 */
com.rpl.specter.__GT_t_com$rpl$specter29813 = (function com$rpl$specter$__GT_t_com$rpl$specter29813(path__$1,late__$1,meta29814){
return (new com.rpl.specter.t_com$rpl$specter29813(path__$1,late__$1,meta29814));
});

}

return (new com.rpl.specter.t_com$rpl$specter29813(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__30550 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30592__i = 0, G__30592__a = new Array(arguments.length -  0);
while (G__30592__i < G__30592__a.length) {G__30592__a[G__30592__i] = arguments[G__30592__i + 0]; ++G__30592__i;}
  path = new cljs.core.IndexedSeq(G__30592__a,0,null);
} 
return G__30550__delegate.call(this,path);};
G__30550.cljs$lang$maxFixedArity = 0;
G__30550.cljs$lang$applyTo = (function (arglist__30597){
var path = cljs.core.seq(arglist__30597);
return G__30550__delegate(path);
});
G__30550.cljs$core$IFn$_invoke$arity$variadic = G__30550__delegate;
return G__30550;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29820 = (function (val,meta29821){
this.val = val;
this.meta29821 = meta29821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29822,meta29821__$1){
var self__ = this;
var _29822__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29820(self__.val,meta29821__$1));
});

com.rpl.specter.t_com$rpl$specter29820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29822){
var self__ = this;
var _29822__$1 = this;
return self__.meta29821;
});

com.rpl.specter.t_com$rpl$specter29820.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29820.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29823 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,self__.val);
var G__29824 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29823,G__29824) : next_fn__28390__auto__.call(null,G__29823,G__29824));
});

com.rpl.specter.t_com$rpl$specter29820.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__29825 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,self__.val);
var G__29826 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__29825,G__29826) : next_fn__28390__auto__.call(null,G__29825,G__29826));
});

com.rpl.specter.t_com$rpl$specter29820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta29821","meta29821",1045878427,null)], null);
});

com.rpl.specter.t_com$rpl$specter29820.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29820.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29820";

com.rpl.specter.t_com$rpl$specter29820.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29820");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29820.
 */
com.rpl.specter.__GT_t_com$rpl$specter29820 = (function com$rpl$specter$__GT_t_com$rpl$specter29820(val__$1,meta29821){
return (new com.rpl.specter.t_com$rpl$specter29820(val__$1,meta29821));
});

}

return (new com.rpl.specter.t_com$rpl$specter29820(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30635__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29827 = (function (path,late,meta29828){
this.path = path;
this.late = late;
this.meta29828 = meta29828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29829,meta29828__$1){
var self__ = this;
var _29829__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29827(self__.path,self__.late,meta29828__$1));
});

com.rpl.specter.t_com$rpl$specter29827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29829){
var self__ = this;
var _29829__$1 = this;
return self__.meta29828;
});

com.rpl.specter.t_com$rpl$specter29827.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29827.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter29827.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter29827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29828","meta29828",-748763199,null)], null);
});

com.rpl.specter.t_com$rpl$specter29827.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29827.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29827";

com.rpl.specter.t_com$rpl$specter29827.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29827");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29827.
 */
com.rpl.specter.__GT_t_com$rpl$specter29827 = (function com$rpl$specter$__GT_t_com$rpl$specter29827(path__$1,late__$1,meta29828){
return (new com.rpl.specter.t_com$rpl$specter29827(path__$1,late__$1,meta29828));
});

}

return (new com.rpl.specter.t_com$rpl$specter29827(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__30635 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30663__i = 0, G__30663__a = new Array(arguments.length -  0);
while (G__30663__i < G__30663__a.length) {G__30663__a[G__30663__i] = arguments[G__30663__i + 0]; ++G__30663__i;}
  path = new cljs.core.IndexedSeq(G__30663__a,0,null);
} 
return G__30635__delegate.call(this,path);};
G__30635.cljs$lang$maxFixedArity = 0;
G__30635.cljs$lang$applyTo = (function (arglist__30664){
var path = cljs.core.seq(arglist__30664);
return G__30635__delegate(path);
});
G__30635.cljs$core$IFn$_invoke$arity$variadic = G__30635__delegate;
return G__30635;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29832 = (function (meta29833){
this.meta29833 = meta29833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29834,meta29833__$1){
var self__ = this;
var _29834__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29832(meta29833__$1));
});

com.rpl.specter.t_com$rpl$specter29832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29834){
var self__ = this;
var _29834__$1 = this;
return self__.meta29833;
});

com.rpl.specter.t_com$rpl$specter29832.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29832.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29835 = cljs.core.PersistentVector.EMPTY;
var G__29836 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29835,G__29836) : next_fn.call(null,G__29835,G__29836));
});

com.rpl.specter.t_com$rpl$specter29832.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29837 = cljs.core.PersistentVector.EMPTY;
var G__29838 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29837,G__29838) : next_fn.call(null,G__29837,G__29838));
});

com.rpl.specter.t_com$rpl$specter29832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29833","meta29833",1809899696,null)], null);
});

com.rpl.specter.t_com$rpl$specter29832.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29832.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29832";

com.rpl.specter.t_com$rpl$specter29832.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29832");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29832.
 */
com.rpl.specter.__GT_t_com$rpl$specter29832 = (function com$rpl$specter$__GT_t_com$rpl$specter29832(meta29833){
return (new com.rpl.specter.t_com$rpl$specter29832(meta29833));
});

}

return (new com.rpl.specter.t_com$rpl$specter29832(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__30666 = null;
var G__30666__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__30666__3 = (function (cond_p,then_path,else_path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5455__auto__){
return (function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29841 = (function (cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,meta29842){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta29842 = meta29842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5455__auto__){
return (function (_29843,meta29842__$1){
var self__ = this;
var _29843__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29841(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.afn,self__.late_then,self__.late_else,meta29842__$1));
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5455__auto__){
return (function (_29843){
var self__ = this;
var _29843__$1 = this;
return self__.meta29842;
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29841.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29841.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29841.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29841.getBasis = ((function (afn,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta29842","meta29842",-1930955109,null)], null);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29841.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29841.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29841";

com.rpl.specter.t_com$rpl$specter29841.cljs$lang$ctorPrWriter = ((function (afn,temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29841");
});})(afn,temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29841.
 */
com.rpl.specter.__GT_t_com$rpl$specter29841 = ((function (afn,temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29841(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta29842){
return (new com.rpl.specter.t_com$rpl$specter29841(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta29842));
});})(afn,temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29841(cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,null));
});})(afn,temp__5455__auto__))
);
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
} else {
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29844 = (function (cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,meta29845){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta29845 = meta29845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_29846,meta29845__$1){
var self__ = this;
var _29846__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29844(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.late_cond,self__.late_then,self__.late_else,meta29845__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_29846){
var self__ = this;
var _29846__$1 = this;
return self__.meta29845;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29844.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29844.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__29839_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__29839_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29844.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__29840_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__29840_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29844.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta29845","meta29845",-1933693246,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter29844.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29844.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29844";

com.rpl.specter.t_com$rpl$specter29844.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29844");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29844.
 */
com.rpl.specter.__GT_t_com$rpl$specter29844 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter29844(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta29845){
return (new com.rpl.specter.t_com$rpl$specter29844(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta29845));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter29844(cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,null));
});})(temp__5455__auto__))
);
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
}
});
G__30666 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__30666__2.call(this,cond_p,then_path);
case 3:
return G__30666__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30666.cljs$core$IFn$_invoke$arity$2 = G__30666__2;
G__30666.cljs$core$IFn$_invoke$arity$3 = G__30666__3;
return G__30666;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30669__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__29847){
var vec__29848 = p__29847;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29848,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29848,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__30669 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__30673__i = 0, G__30673__a = new Array(arguments.length -  0);
while (G__30673__i < G__30673__a.length) {G__30673__a[G__30673__i] = arguments[G__30673__i + 0]; ++G__30673__i;}
  conds = new cljs.core.IndexedSeq(G__30673__a,0,null);
} 
return G__30669__delegate.call(this,conds);};
G__30669.cljs$lang$maxFixedArity = 0;
G__30669.cljs$lang$applyTo = (function (arglist__30690){
var conds = cljs.core.seq(arglist__30690);
return G__30669__delegate(conds);
});
G__30669.cljs$core$IFn$_invoke$arity$variadic = G__30669__delegate;
return G__30669;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__30691 = null;
var G__30691__0 = (function (){
return com.rpl.specter.STAY;
});
var G__30691__1 = (function (path){
return path;
});
var G__30691__2 = (function (path1,path2){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29851 = (function (path1,path2,late1,late2,meta29852){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta29852 = meta29852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter29851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29853,meta29852__$1){
var self__ = this;
var _29853__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29851(self__.path1,self__.path2,self__.late1,self__.late2,meta29852__$1));
});

com.rpl.specter.t_com$rpl$specter29851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29853){
var self__ = this;
var _29853__$1 = this;
return self__.meta29852;
});

com.rpl.specter.t_com$rpl$specter29851.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter29851.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
});

com.rpl.specter.t_com$rpl$specter29851.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter29851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta29852","meta29852",-675686191,null)], null);
});

com.rpl.specter.t_com$rpl$specter29851.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29851.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29851";

com.rpl.specter.t_com$rpl$specter29851.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter29851");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29851.
 */
com.rpl.specter.__GT_t_com$rpl$specter29851 = (function com$rpl$specter$__GT_t_com$rpl$specter29851(path1__$1,path2__$1,late1__$1,late2__$1,meta29852){
return (new com.rpl.specter.t_com$rpl$specter29851(path1__$1,path2__$1,late1__$1,late2__$1,meta29852));
});

}

return (new com.rpl.specter.t_com$rpl$specter29851(path1,path2,late1,late2,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
});
var G__30691__3 = (function() { 
var G__30694__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__30694 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__30695__i = 0, G__30695__a = new Array(arguments.length -  2);
while (G__30695__i < G__30695__a.length) {G__30695__a[G__30695__i] = arguments[G__30695__i + 2]; ++G__30695__i;}
  paths = new cljs.core.IndexedSeq(G__30695__a,0,null);
} 
return G__30694__delegate.call(this,path1,path2,paths);};
G__30694.cljs$lang$maxFixedArity = 2;
G__30694.cljs$lang$applyTo = (function (arglist__30696){
var path1 = cljs.core.first(arglist__30696);
arglist__30696 = cljs.core.next(arglist__30696);
var path2 = cljs.core.first(arglist__30696);
var paths = cljs.core.rest(arglist__30696);
return G__30694__delegate(path1,path2,paths);
});
G__30694.cljs$core$IFn$_invoke$arity$variadic = G__30694__delegate;
return G__30694;
})()
;
G__30691 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__30691__0.call(this);
case 1:
return G__30691__1.call(this,path1);
case 2:
return G__30691__2.call(this,path1,path2);
default:
var G__30697 = null;
if (arguments.length > 2) {
var G__30698__i = 0, G__30698__a = new Array(arguments.length -  2);
while (G__30698__i < G__30698__a.length) {G__30698__a[G__30698__i] = arguments[G__30698__i + 2]; ++G__30698__i;}
G__30697 = new cljs.core.IndexedSeq(G__30698__a,0,null);
}
return G__30691__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__30697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30691.cljs$lang$maxFixedArity = 2;
G__30691.cljs$lang$applyTo = G__30691__3.cljs$lang$applyTo;
G__30691.cljs$core$IFn$_invoke$arity$0 = G__30691__0;
G__30691.cljs$core$IFn$_invoke$arity$1 = G__30691__1;
G__30691.cljs$core$IFn$_invoke$arity$2 = G__30691__2;
G__30691.cljs$core$IFn$_invoke$arity$variadic = G__30691__3.cljs$core$IFn$_invoke$arity$variadic;
return G__30691;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30699__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__30699 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30700__i = 0, G__30700__a = new Array(arguments.length -  0);
while (G__30700__i < G__30700__a.length) {G__30700__a[G__30700__i] = arguments[G__30700__i + 0]; ++G__30700__i;}
  path = new cljs.core.IndexedSeq(G__30700__a,0,null);
} 
return G__30699__delegate.call(this,path);};
G__30699.cljs$lang$maxFixedArity = 0;
G__30699.cljs$lang$applyTo = (function (arglist__30701){
var path = cljs.core.seq(arglist__30701);
return G__30699__delegate(path);
});
G__30699.cljs$core$IFn$_invoke$arity$variadic = G__30699__delegate;
return G__30699;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30702__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__30702 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30703__i = 0, G__30703__a = new Array(arguments.length -  0);
while (G__30703__i < G__30703__a.length) {G__30703__a[G__30703__i] = arguments[G__30703__i + 0]; ++G__30703__i;}
  path = new cljs.core.IndexedSeq(G__30703__a,0,null);
} 
return G__30702__delegate.call(this,path);};
G__30702.cljs$lang$maxFixedArity = 0;
G__30702.cljs$lang$applyTo = (function (arglist__30704){
var path = cljs.core.seq(arglist__30704);
return G__30702__delegate(path);
});
G__30702.cljs$core$IFn$_invoke$arity$variadic = G__30702__delegate;
return G__30702;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__28398__auto__ = com.rpl.specter.pathcache29858;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29859 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2103,2103,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache29858 = info29859;

return info29859;
})():info__28398__auto__);
var precompiled29860 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29861 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled29860.cljs$core$IFn$_invoke$arity$1 ? precompiled29860.cljs$core$IFn$_invoke$arity$1(G__29861) : precompiled29860.call(null,G__29861));
} else {
return precompiled29860;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__28398__auto__ = com.rpl.specter.pathcache29862;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info29863 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2103,2103,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,688,690,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache29862 = info29863;

return info29863;
})():info__28398__auto__);
var precompiled29864 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__29865 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled29864.cljs$core$IFn$_invoke$arity$1 ? precompiled29864.cljs$core$IFn$_invoke$arity$1(G__29865) : precompiled29864.call(null,G__29865));
} else {
return precompiled29864;
}
})());

return p;
}));
var empty__GT_NONE_30705 = (function (){var G__29866 = cljs.core.empty_QMARK_;
var G__29867 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__29866,G__29867) : com.rpl.specter.if_path.call(null,G__29866,G__29867));
})();
var compact_STAR__30706 = ((function (empty__GT_NONE_30705){
return (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_30705) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_30705));
});})(empty__GT_NONE_30705))
;
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (empty__GT_NONE_30705,compact_STAR__30706){
return (function() { 
var G__30707__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__30706,path);
};
var G__30707 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30708__i = 0, G__30708__a = new Array(arguments.length -  0);
while (G__30708__i < G__30708__a.length) {G__30708__a[G__30708__i] = arguments[G__30708__i + 0]; ++G__30708__i;}
  path = new cljs.core.IndexedSeq(G__30708__a,0,null);
} 
return G__30707__delegate.call(this,path);};
G__30707.cljs$lang$maxFixedArity = 0;
G__30707.cljs$lang$applyTo = (function (arglist__30709){
var path = cljs.core.seq(arglist__30709);
return G__30707__delegate(path);
});
G__30707.cljs$core$IFn$_invoke$arity$variadic = G__30707__delegate;
return G__30707;
})()
;})(empty__GT_NONE_30705,compact_STAR__30706))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
