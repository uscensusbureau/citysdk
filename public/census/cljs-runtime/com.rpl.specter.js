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
var G__17278__delegate = function (args){
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
var G__17278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17279__i = 0, G__17279__a = new Array(arguments.length -  0);
while (G__17279__i < G__17279__a.length) {G__17279__a[G__17279__i] = arguments[G__17279__i + 0]; ++G__17279__i;}
  args = new cljs.core.IndexedSeq(G__17279__a,0,null);
} 
return G__17278__delegate.call(this,args);};
G__17278.cljs$lang$maxFixedArity = 0;
G__17278.cljs$lang$applyTo = (function (arglist__17280){
var args = cljs.core.seq(arglist__17280);
return G__17278__delegate(args);
});
G__17278.cljs$core$IFn$_invoke$arity$variadic = G__17278__delegate;
return G__17278;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4647__auto__ = [];
var len__4641__auto___17281 = arguments.length;
var i__4642__auto___17282 = (0);
while(true){
if((i__4642__auto___17282 < len__4641__auto___17281)){
args__4647__auto__.push((arguments[i__4642__auto___17282]));

var G__17283 = (i__4642__auto___17282 + (1));
i__4642__auto___17282 = G__17283;
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
com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq16877){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16877));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__16884 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16885 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__16884,G__16885) : com.rpl.specter.compiled_select.call(null,G__16884,G__16885));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__16886 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16887 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__16886,G__16887) : com.rpl.specter.compiled_select_one.call(null,G__16886,G__16887));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__16888 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16889 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__16888,G__16889) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__16888,G__16889));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__16893 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16894 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__16893,G__16894) : com.rpl.specter.compiled_select_first.call(null,G__16893,G__16894));
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
var G__16898 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16899 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__16898,G__16899) : com.rpl.specter.compiled_select_any.call(null,G__16898,G__16899));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__16900 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16901 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__16900,G__16901) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__16900,G__16901));
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
var G__16902 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__16903 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__16902,G__16903) : com.rpl.specter.compiled_traverse.call(null,G__16902,G__16903));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__16904 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__16904) : com.rpl.specter.compiled_traverse_all.call(null,G__16904));
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
var G__16905 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16906 = transform_fn;
var G__16907 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__16905,G__16906,G__16907) : com.rpl.specter.compiled_transform.call(null,G__16905,G__16906,G__16907));
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
var G__16908 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16909 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__16908,G__16909) : com.rpl.specter.compiled_multi_transform.call(null,G__16908,G__16909));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__16910 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16911 = val;
var G__16912 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__16910,G__16911,G__16912) : com.rpl.specter.compiled_setval.call(null,G__16910,G__16911,G__16912));
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
var len__4641__auto___17294 = arguments.length;
var i__4642__auto___17295 = (0);
while(true){
if((i__4642__auto___17295 < len__4641__auto___17294)){
args__4647__auto__.push((arguments[i__4642__auto___17295]));

var G__17296 = (i__4642__auto___17295 + (1));
i__4642__auto___17295 = G__17296;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__16929){
var map__16930 = p__16929;
var map__16930__$1 = (((((!((map__16930 == null))))?(((((map__16930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16930):map__16930);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16930__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__16932 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__16933 = transform_fn;
var G__16934 = structure;
var G__16935 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__16936 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__16932,G__16933,G__16934,G__16935,G__16936) : com.rpl.specter.compiled_replace_in.call(null,G__16932,G__16933,G__16934,G__16935,G__16936));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq16919){
var G__16920 = cljs.core.first(seq16919);
var seq16919__$1 = cljs.core.next(seq16919);
var G__16921 = cljs.core.first(seq16919__$1);
var seq16919__$2 = cljs.core.next(seq16919__$1);
var G__16922 = cljs.core.first(seq16919__$2);
var seq16919__$3 = cljs.core.next(seq16919__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16920,G__16921,G__16922,seq16919__$3);
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
var G__17304__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__17304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17306__i = 0, G__17306__a = new Array(arguments.length -  0);
while (G__17306__i < G__17306__a.length) {G__17306__a[G__17306__i] = arguments[G__17306__i + 0]; ++G__17306__i;}
  args = new cljs.core.IndexedSeq(G__17306__a,0,null);
} 
return G__17304__delegate.call(this,args);};
G__17304.cljs$lang$maxFixedArity = 0;
G__17304.cljs$lang$applyTo = (function (arglist__17307){
var args = cljs.core.seq(arglist__17307);
return G__17304__delegate(args);
});
G__17304.cljs$core$IFn$_invoke$arity$variadic = G__17304__delegate;
return G__17304;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter16949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter16949 = (function (meta16950){
this.meta16950 = meta16950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter16949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16951,meta16950__$1){
var self__ = this;
var _16951__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter16949(meta16950__$1));
});

com.rpl.specter.t_com$rpl$specter16949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16951){
var self__ = this;
var _16951__$1 = this;
return self__.meta16950;
});

com.rpl.specter.t_com$rpl$specter16949.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter16949.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter16949.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter16949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16950","meta16950",1665798647,null)], null);
});

com.rpl.specter.t_com$rpl$specter16949.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter16949.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter16949";

com.rpl.specter.t_com$rpl$specter16949.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter16949");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter16949.
 */
com.rpl.specter.__GT_t_com$rpl$specter16949 = (function com$rpl$specter$__GT_t_com$rpl$specter16949(meta16950){
return (new com.rpl.specter.t_com$rpl$specter16949(meta16950));
});

}

return (new com.rpl.specter.t_com$rpl$specter16949(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter16952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter16952 = (function (afn,meta16953){
this.afn = afn;
this.meta16953 = meta16953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter16952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16954,meta16953__$1){
var self__ = this;
var _16954__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter16952(self__.afn,meta16953__$1));
});

com.rpl.specter.t_com$rpl$specter16952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16954){
var self__ = this;
var _16954__$1 = this;
return self__.meta16953;
});

com.rpl.specter.t_com$rpl$specter16952.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter16952.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter16952.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter16952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta16953","meta16953",-192277845,null)], null);
});

com.rpl.specter.t_com$rpl$specter16952.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter16952.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter16952";

com.rpl.specter.t_com$rpl$specter16952.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter16952");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter16952.
 */
com.rpl.specter.__GT_t_com$rpl$specter16952 = (function com$rpl$specter$__GT_t_com$rpl$specter16952(afn__$1,meta16953){
return (new com.rpl.specter.t_com$rpl$specter16952(afn__$1,meta16953));
});

}

return (new com.rpl.specter.t_com$rpl$specter16952(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter16956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter16956 = (function (afn,meta16957){
this.afn = afn;
this.meta16957 = meta16957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter16956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16958,meta16957__$1){
var self__ = this;
var _16958__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter16956(self__.afn,meta16957__$1));
});

com.rpl.specter.t_com$rpl$specter16956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16958){
var self__ = this;
var _16958__$1 = this;
return self__.meta16957;
});

com.rpl.specter.t_com$rpl$specter16956.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter16956.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter16956.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
});

com.rpl.specter.t_com$rpl$specter16956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta16957","meta16957",-222906959,null)], null);
});

com.rpl.specter.t_com$rpl$specter16956.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter16956.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter16956";

com.rpl.specter.t_com$rpl$specter16956.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter16956");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter16956.
 */
com.rpl.specter.__GT_t_com$rpl$specter16956 = (function com$rpl$specter$__GT_t_com$rpl$specter16956(afn__$1,meta16957){
return (new com.rpl.specter.t_com$rpl$specter16956(afn__$1,meta16957));
});

}

return (new com.rpl.specter.t_com$rpl$specter16956(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__16965 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__16965) : com.rpl.specter.terminal.call(null,G__16965));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter16975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter16975 = (function (meta16976){
this.meta16976 = meta16976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter16975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16977,meta16976__$1){
var self__ = this;
var _16977__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter16975(meta16976__$1));
});

com.rpl.specter.t_com$rpl$specter16975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16977){
var self__ = this;
var _16977__$1 = this;
return self__.meta16976;
});

com.rpl.specter.t_com$rpl$specter16975.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter16975.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter16975.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter16975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16976","meta16976",163212366,null)], null);
});

com.rpl.specter.t_com$rpl$specter16975.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter16975.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter16975";

com.rpl.specter.t_com$rpl$specter16975.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter16975");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter16975.
 */
com.rpl.specter.__GT_t_com$rpl$specter16975 = (function com$rpl$specter$__GT_t_com$rpl$specter16975(meta16976){
return (new com.rpl.specter.t_com$rpl$specter16975(meta16976));
});

}

return (new com.rpl.specter.t_com$rpl$specter16975(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter16993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter16993 = (function (meta16994){
this.meta16994 = meta16994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter16993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16995,meta16994__$1){
var self__ = this;
var _16995__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter16993(meta16994__$1));
});

com.rpl.specter.t_com$rpl$specter16993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16995){
var self__ = this;
var _16995__$1 = this;
return self__.meta16994;
});

com.rpl.specter.t_com$rpl$specter16993.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter16993.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter16993.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter16993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16994","meta16994",-1938814879,null)], null);
});

com.rpl.specter.t_com$rpl$specter16993.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter16993.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter16993";

com.rpl.specter.t_com$rpl$specter16993.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter16993");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter16993.
 */
com.rpl.specter.__GT_t_com$rpl$specter16993 = (function com$rpl$specter$__GT_t_com$rpl$specter16993(meta16994){
return (new com.rpl.specter.t_com$rpl$specter16993(meta16994));
});

}

return (new com.rpl.specter.t_com$rpl$specter16993(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__12273__auto__,v){
var ret__12274__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter16997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter16997 = (function (meta16998){
this.meta16998 = meta16998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter16997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16999,meta16998__$1){
var self__ = this;
var _16999__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter16997(meta16998__$1));
});

com.rpl.specter.t_com$rpl$specter16997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16999){
var self__ = this;
var _16999__$1 = this;
return self__.meta16998;
});

com.rpl.specter.t_com$rpl$specter16997.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter16997.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__14996__auto____$1){
return (function (curr__12273__auto__,v){
var ret__12274__auto__ = next_fn(v);
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
}
}
});})(next_fn,this__14996__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.t_com$rpl$specter16997.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter16997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta16998","meta16998",4768082,null)], null);
});

com.rpl.specter.t_com$rpl$specter16997.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter16997.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter16997";

com.rpl.specter.t_com$rpl$specter16997.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter16997");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter16997.
 */
com.rpl.specter.__GT_t_com$rpl$specter16997 = (function com$rpl$specter$__GT_t_com$rpl$specter16997(meta16998){
return (new com.rpl.specter.t_com$rpl$specter16997(meta16998));
});

}

return (new com.rpl.specter.t_com$rpl$specter16997(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__12273__auto__,k){
var ret__12274__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17000 = (function (meta17001){
this.meta17001 = meta17001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17002,meta17001__$1){
var self__ = this;
var _17002__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17000(meta17001__$1));
});

com.rpl.specter.t_com$rpl$specter17000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17002){
var self__ = this;
var _17002__$1 = this;
return self__.meta17001;
});

com.rpl.specter.t_com$rpl$specter17000.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17000.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__14996__auto____$1){
return (function (curr__12273__auto__,k){
var ret__12274__auto__ = next_fn(k);
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
}
}
});})(next_fn,this__14996__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.t_com$rpl$specter17000.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter17000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17001","meta17001",-2075649397,null)], null);
});

com.rpl.specter.t_com$rpl$specter17000.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17000.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17000";

com.rpl.specter.t_com$rpl$specter17000.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17000");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17000.
 */
com.rpl.specter.__GT_t_com$rpl$specter17000 = (function com$rpl$specter$__GT_t_com$rpl$specter17000(meta17001){
return (new com.rpl.specter.t_com$rpl$specter17000(meta17001));
});

}

return (new com.rpl.specter.t_com$rpl$specter17000(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17003 = (function (meta17004){
this.meta17004 = meta17004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17005,meta17004__$1){
var self__ = this;
var _17005__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17003(meta17004__$1));
});

com.rpl.specter.t_com$rpl$specter17003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17005){
var self__ = this;
var _17005__$1 = this;
return self__.meta17004;
});

com.rpl.specter.t_com$rpl$specter17003.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17003.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17006 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,structure);
var G__17007 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17006,G__17007) : next_fn__15800__auto__.call(null,G__17006,G__17007));
});

com.rpl.specter.t_com$rpl$specter17003.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,structure);
var G__17009 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17008,G__17009) : next_fn__15800__auto__.call(null,G__17008,G__17009));
});

com.rpl.specter.t_com$rpl$specter17003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17004","meta17004",1032209201,null)], null);
});

com.rpl.specter.t_com$rpl$specter17003.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17003.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17003";

com.rpl.specter.t_com$rpl$specter17003.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17003");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17003.
 */
com.rpl.specter.__GT_t_com$rpl$specter17003 = (function com$rpl$specter$__GT_t_com$rpl$specter17003(meta17004){
return (new com.rpl.specter.t_com$rpl$specter17003(meta17004));
});

}

return (new com.rpl.specter.t_com$rpl$specter17003(null));
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
var G__17010 = structure;
var G__17011 = s;
var G__17012 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__17013 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__17010,G__17011,G__17012,G__17013) : com.rpl.specter.navs.srange_transform.call(null,G__17010,G__17011,G__17012,G__17013));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17014 = (function (start_index_fn,end_index_fn,meta17015){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta17015 = meta17015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17016,meta17015__$1){
var self__ = this;
var _17016__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17014(self__.start_index_fn,self__.end_index_fn,meta17015__$1));
});

com.rpl.specter.t_com$rpl$specter17014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17016){
var self__ = this;
var _17016__$1 = this;
return self__.meta17015;
});

com.rpl.specter.t_com$rpl$specter17014.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17014.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
});

com.rpl.specter.t_com$rpl$specter17014.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__17017 = structure;
var G__17018 = s;
var G__17019 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__17020 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__17017,G__17018,G__17019,G__17020) : com.rpl.specter.navs.srange_transform.call(null,G__17017,G__17018,G__17019,G__17020));
});

com.rpl.specter.t_com$rpl$specter17014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta17015","meta17015",-1848081939,null)], null);
});

com.rpl.specter.t_com$rpl$specter17014.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17014.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17014";

com.rpl.specter.t_com$rpl$specter17014.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17014");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17014.
 */
com.rpl.specter.__GT_t_com$rpl$specter17014 = (function com$rpl$specter$__GT_t_com$rpl$specter17014(start_index_fn__$1,end_index_fn__$1,meta17015){
return (new com.rpl.specter.t_com$rpl$specter17014(start_index_fn__$1,end_index_fn__$1,meta17015));
});

}

return (new com.rpl.specter.t_com$rpl$specter17014(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17021 = (function (start,end,meta17022){
this.start = start;
this.end = end;
this.meta17022 = meta17022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17023,meta17022__$1){
var self__ = this;
var _17023__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17021(self__.start,self__.end,meta17022__$1));
});

com.rpl.specter.t_com$rpl$specter17021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17023){
var self__ = this;
var _17023__$1 = this;
return self__.meta17022;
});

com.rpl.specter.t_com$rpl$specter17021.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17021.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter17021.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter17021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta17022","meta17022",576960168,null)], null);
});

com.rpl.specter.t_com$rpl$specter17021.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17021.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17021";

com.rpl.specter.t_com$rpl$specter17021.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17021");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17021.
 */
com.rpl.specter.__GT_t_com$rpl$specter17021 = (function com$rpl$specter$__GT_t_com$rpl$specter17021(start__$1,end__$1,meta17022){
return (new com.rpl.specter.t_com$rpl$specter17021(start__$1,end__$1,meta17022));
});

}

return (new com.rpl.specter.t_com$rpl$specter17021(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__12273__auto__,p__17024){
var vec__17025 = p__17024;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17025,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17025,(1),null);
var ret__12274__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17028 = (function (pred,meta17029){
this.pred = pred;
this.meta17029 = meta17029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17030,meta17029__$1){
var self__ = this;
var _17030__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17028(self__.pred,meta17029__$1));
});

com.rpl.specter.t_com$rpl$specter17028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17030){
var self__ = this;
var _17030__$1 = this;
return self__.meta17029;
});

com.rpl.specter.t_com$rpl$specter17028.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17028.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__14996__auto____$1){
return (function (curr__12273__auto__,p__17031){
var vec__17032 = p__17031;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17032,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17032,(1),null);
var ret__12274__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
}
}
});})(next_fn,this__14996__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter17028.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter17028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta17029","meta17029",-79188392,null)], null);
});

com.rpl.specter.t_com$rpl$specter17028.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17028.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17028";

com.rpl.specter.t_com$rpl$specter17028.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17028");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17028.
 */
com.rpl.specter.__GT_t_com$rpl$specter17028 = (function com$rpl$specter$__GT_t_com$rpl$specter17028(pred__$1,meta17029){
return (new com.rpl.specter.t_com$rpl$specter17028(pred__$1,meta17029));
});

}

return (new com.rpl.specter.t_com$rpl$specter17028(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__17035 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17035) : next_fn.call(null,G__17035));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = (function (){var G__17036 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17036) : next_fn.call(null,G__17036));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17037 = (function (meta17038){
this.meta17038 = meta17038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17039,meta17038__$1){
var self__ = this;
var _17039__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17037(meta17038__$1));
});

com.rpl.specter.t_com$rpl$specter17037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17039){
var self__ = this;
var _17039__$1 = this;
return self__.meta17038;
});

com.rpl.specter.t_com$rpl$specter17037.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17037.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter17037.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter17037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17038","meta17038",7645003,null)], null);
});

com.rpl.specter.t_com$rpl$specter17037.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17037.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17037";

com.rpl.specter.t_com$rpl$specter17037.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17037");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17037.
 */
com.rpl.specter.__GT_t_com$rpl$specter17037 = (function com$rpl$specter$__GT_t_com$rpl$specter17037(meta17038){
return (new com.rpl.specter.t_com$rpl$specter17037(meta17038));
});

}

return (new com.rpl.specter.t_com$rpl$specter17037(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__17040 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17040) : next_fn.call(null,G__17040));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__17041 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17041) : next_fn.call(null,G__17041));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17042 = (function (meta17043){
this.meta17043 = meta17043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17044,meta17043__$1){
var self__ = this;
var _17044__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17042(meta17043__$1));
});

com.rpl.specter.t_com$rpl$specter17042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17044){
var self__ = this;
var _17044__$1 = this;
return self__.meta17043;
});

com.rpl.specter.t_com$rpl$specter17042.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17042.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter17042.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter17042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17043","meta17043",578539598,null)], null);
});

com.rpl.specter.t_com$rpl$specter17042.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17042.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17042";

com.rpl.specter.t_com$rpl$specter17042.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17042");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17042.
 */
com.rpl.specter.__GT_t_com$rpl$specter17042 = (function com$rpl$specter$__GT_t_com$rpl$specter17042(meta17043){
return (new com.rpl.specter.t_com$rpl$specter17042(meta17043));
});

}

return (new com.rpl.specter.t_com$rpl$specter17042(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17045 = (function (meta17046){
this.meta17046 = meta17046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17047,meta17046__$1){
var self__ = this;
var _17047__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17045(meta17046__$1));
});

com.rpl.specter.t_com$rpl$specter17045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17047){
var self__ = this;
var _17047__$1 = this;
return self__.meta17046;
});

com.rpl.specter.t_com$rpl$specter17045.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17045.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter17045.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
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

com.rpl.specter.t_com$rpl$specter17045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17046","meta17046",1945605678,null)], null);
});

com.rpl.specter.t_com$rpl$specter17045.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17045.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17045";

com.rpl.specter.t_com$rpl$specter17045.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17045");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17045.
 */
com.rpl.specter.__GT_t_com$rpl$specter17045 = (function com$rpl$specter$__GT_t_com$rpl$specter17045(meta17046){
return (new com.rpl.specter.t_com$rpl$specter17045(meta17046));
});

}

return (new com.rpl.specter.t_com$rpl$specter17045(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17048 = (function (meta17049){
this.meta17049 = meta17049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17050,meta17049__$1){
var self__ = this;
var _17050__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17048(meta17049__$1));
});

com.rpl.specter.t_com$rpl$specter17048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17050){
var self__ = this;
var _17050__$1 = this;
return self__.meta17049;
});

com.rpl.specter.t_com$rpl$specter17048.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17048.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter17048.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter17048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17049","meta17049",602690547,null)], null);
});

com.rpl.specter.t_com$rpl$specter17048.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17048.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17048";

com.rpl.specter.t_com$rpl$specter17048.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17048");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17048.
 */
com.rpl.specter.__GT_t_com$rpl$specter17048 = (function com$rpl$specter$__GT_t_com$rpl$specter17048(meta17049){
return (new com.rpl.specter.t_com$rpl$specter17048(meta17049));
});

}

return (new com.rpl.specter.t_com$rpl$specter17048(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17051 = (function (meta17052){
this.meta17052 = meta17052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17053,meta17052__$1){
var self__ = this;
var _17053__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17051(meta17052__$1));
});

com.rpl.specter.t_com$rpl$specter17051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17053){
var self__ = this;
var _17053__$1 = this;
return self__.meta17052;
});

com.rpl.specter.t_com$rpl$specter17051.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17051.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter17051.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter17051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17052","meta17052",-1083951495,null)], null);
});

com.rpl.specter.t_com$rpl$specter17051.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17051.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17051";

com.rpl.specter.t_com$rpl$specter17051.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17051");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17051.
 */
com.rpl.specter.__GT_t_com$rpl$specter17051 = (function com$rpl$specter$__GT_t_com$rpl$specter17051(meta17052){
return (new com.rpl.specter.t_com$rpl$specter17051(meta17052));
});

}

return (new com.rpl.specter.t_com$rpl$specter17051(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__17054 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17054) : next_fn.call(null,G__17054));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17055 = (function (aset,meta17056){
this.aset = aset;
this.meta17056 = meta17056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17057,meta17056__$1){
var self__ = this;
var _17057__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17055(self__.aset,meta17056__$1));
});

com.rpl.specter.t_com$rpl$specter17055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17057){
var self__ = this;
var _17057__$1 = this;
return self__.meta17056;
});

com.rpl.specter.t_com$rpl$specter17055.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17055.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter17055.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter17055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta17056","meta17056",77139230,null)], null);
});

com.rpl.specter.t_com$rpl$specter17055.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17055.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17055";

com.rpl.specter.t_com$rpl$specter17055.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17055");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17055.
 */
com.rpl.specter.__GT_t_com$rpl$specter17055 = (function com$rpl$specter$__GT_t_com$rpl$specter17055(aset__$1,meta17056){
return (new com.rpl.specter.t_com$rpl$specter17055(aset__$1,meta17056));
});

}

return (new com.rpl.specter.t_com$rpl$specter17055(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__17058 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17058) : next_fn.call(null,G__17058));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17059 = (function (m_keys,meta17060){
this.m_keys = m_keys;
this.meta17060 = meta17060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17061,meta17060__$1){
var self__ = this;
var _17061__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17059(self__.m_keys,meta17060__$1));
});

com.rpl.specter.t_com$rpl$specter17059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17061){
var self__ = this;
var _17061__$1 = this;
return self__.meta17060;
});

com.rpl.specter.t_com$rpl$specter17059.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17059.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter17059.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
});

com.rpl.specter.t_com$rpl$specter17059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta17060","meta17060",137534862,null)], null);
});

com.rpl.specter.t_com$rpl$specter17059.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17059.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17059";

com.rpl.specter.t_com$rpl$specter17059.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17059");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17059.
 */
com.rpl.specter.__GT_t_com$rpl$specter17059 = (function com$rpl$specter$__GT_t_com$rpl$specter17059(m_keys__$1,meta17060){
return (new com.rpl.specter.t_com$rpl$specter17059(m_keys__$1,meta17060));
});

}

return (new com.rpl.specter.t_com$rpl$specter17059(m_keys,null));
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
var G__17528__delegate = function (path){
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17062 = (function (path,late,meta17063){
this.path = path;
this.late = late;
this.meta17063 = meta17063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17064,meta17063__$1){
var self__ = this;
var _17064__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17062(self__.path,self__.late,meta17063__$1));
});

com.rpl.specter.t_com$rpl$specter17062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17064){
var self__ = this;
var _17064__$1 = this;
return self__.meta17063;
});

com.rpl.specter.t_com$rpl$specter17062.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17062.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter17062.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__17065 = self__.late;
var G__17066 = ((function (G__17065,select_result,transformed,values_to_insert,next_fn,this__14996__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__17065,select_result,transformed,values_to_insert,next_fn,this__14996__auto____$1))
;
var G__17067 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__17065,G__17066,G__17067) : com.rpl.specter.compiled_transform.call(null,G__17065,G__17066,G__17067));
});

com.rpl.specter.t_com$rpl$specter17062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17063","meta17063",-636996691,null)], null);
});

com.rpl.specter.t_com$rpl$specter17062.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17062.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17062";

com.rpl.specter.t_com$rpl$specter17062.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17062");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17062.
 */
com.rpl.specter.__GT_t_com$rpl$specter17062 = (function com$rpl$specter$__GT_t_com$rpl$specter17062(path__$1,late__$1,meta17063){
return (new com.rpl.specter.t_com$rpl$specter17062(path__$1,late__$1,meta17063));
});

}

return (new com.rpl.specter.t_com$rpl$specter17062(path,late,null));
}));
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
};
var G__17528 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17530__i = 0, G__17530__a = new Array(arguments.length -  0);
while (G__17530__i < G__17530__a.length) {G__17530__a[G__17530__i] = arguments[G__17530__i + 0]; ++G__17530__i;}
  path = new cljs.core.IndexedSeq(G__17530__a,0,null);
} 
return G__17528__delegate.call(this,path);};
G__17528.cljs$lang$maxFixedArity = 0;
G__17528.cljs$lang$applyTo = (function (arglist__17531){
var path = cljs.core.seq(arglist__17531);
return G__17528__delegate(path);
});
G__17528.cljs$core$IFn$_invoke$arity$variadic = G__17528__delegate;
return G__17528;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17068 = (function (key,meta17069){
this.key = key;
this.meta17069 = meta17069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17070,meta17069__$1){
var self__ = this;
var _17070__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17068(self__.key,meta17069__$1));
});

com.rpl.specter.t_com$rpl$specter17068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17070){
var self__ = this;
var _17070__$1 = this;
return self__.meta17069;
});

com.rpl.specter.t_com$rpl$specter17068.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17068.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter17068.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter17068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta17069","meta17069",733652864,null)], null);
});

com.rpl.specter.t_com$rpl$specter17068.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17068.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17068";

com.rpl.specter.t_com$rpl$specter17068.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17068");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17068.
 */
com.rpl.specter.__GT_t_com$rpl$specter17068 = (function com$rpl$specter$__GT_t_com$rpl$specter17068(key__$1,meta17069){
return (new com.rpl.specter.t_com$rpl$specter17068(key__$1,meta17069));
});

}

return (new com.rpl.specter.t_com$rpl$specter17068(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17071 = (function (elem,meta17072){
this.elem = elem;
this.meta17072 = meta17072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17073,meta17072__$1){
var self__ = this;
var _17073__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17071(self__.elem,meta17072__$1));
});

com.rpl.specter.t_com$rpl$specter17071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17073){
var self__ = this;
var _17073__$1 = this;
return self__.meta17072;
});

com.rpl.specter.t_com$rpl$specter17071.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17071.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter17071.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter17071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta17072","meta17072",97110597,null)], null);
});

com.rpl.specter.t_com$rpl$specter17071.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17071.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17071";

com.rpl.specter.t_com$rpl$specter17071.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17071");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17071.
 */
com.rpl.specter.__GT_t_com$rpl$specter17071 = (function com$rpl$specter$__GT_t_com$rpl$specter17071(elem__$1,meta17072){
return (new com.rpl.specter.t_com$rpl$specter17071(elem__$1,meta17072));
});

}

return (new com.rpl.specter.t_com$rpl$specter17071(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17074 = (function (index,meta17075){
this.index = index;
this.meta17075 = meta17075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17076,meta17075__$1){
var self__ = this;
var _17076__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17074(self__.index,meta17075__$1));
});

com.rpl.specter.t_com$rpl$specter17074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17076){
var self__ = this;
var _17076__$1 = this;
return self__.meta17075;
});

com.rpl.specter.t_com$rpl$specter17074.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17074.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter17074.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17077;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17078 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,754,757,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache17077 = info17078;

return info17078;
})():info__15808__auto__);
var precompiled17079 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled17079.cljs$core$IFn$_invoke$arity$1 ? precompiled17079.cljs$core$IFn$_invoke$arity$1(G__17080) : precompiled17079.call(null,G__17080));
} else {
return precompiled17079;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter17074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta17075","meta17075",1020087478,null)], null);
});

com.rpl.specter.t_com$rpl$specter17074.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17074.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17074";

com.rpl.specter.t_com$rpl$specter17074.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17074");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17074.
 */
com.rpl.specter.__GT_t_com$rpl$specter17074 = (function com$rpl$specter$__GT_t_com$rpl$specter17074(index__$1,meta17075){
return (new com.rpl.specter.t_com$rpl$specter17074(index__$1,meta17075));
});

}

return (new com.rpl.specter.t_com$rpl$specter17074(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17081 = (function (i,meta17082){
this.i = i;
this.meta17082 = meta17082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17083,meta17082__$1){
var self__ = this;
var _17083__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17081(self__.i,meta17082__$1));
});

com.rpl.specter.t_com$rpl$specter17081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17083){
var self__ = this;
var _17083__$1 = this;
return self__.meta17082;
});

com.rpl.specter.t_com$rpl$specter17081.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17081.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter17081.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__17784 = (j - (1));
var G__17785 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__17784;
s = G__17785;
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
var G__17790 = (j + (1));
var G__17791 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__17790;
s = G__17791;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17084;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17085 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,967,970,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache17084 = info17085;

return info17085;
})():info__15808__auto__);
var precompiled17086 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled17086.cljs$core$IFn$_invoke$arity$1 ? precompiled17086.cljs$core$IFn$_invoke$arity$1(G__17087) : precompiled17086.call(null,G__17087));
} else {
return precompiled17086;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17088;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17089 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache17088 = info17089;

return info17089;
})():info__15808__auto__);
var precompiled17090 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17091 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled17090.cljs$core$IFn$_invoke$arity$1 ? precompiled17090.cljs$core$IFn$_invoke$arity$1(G__17091) : precompiled17090.call(null,G__17091));
} else {
return precompiled17090;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter17081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta17082","meta17082",-374476178,null)], null);
});

com.rpl.specter.t_com$rpl$specter17081.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17081.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17081";

com.rpl.specter.t_com$rpl$specter17081.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17081");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17081.
 */
com.rpl.specter.__GT_t_com$rpl$specter17081 = (function com$rpl$specter$__GT_t_com$rpl$specter17081(i__$1,meta17082){
return (new com.rpl.specter.t_com$rpl$specter17081(i__$1,meta17082));
});

}

return (new com.rpl.specter.t_com$rpl$specter17081(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i){
return (function (curr__12273__auto__,e){
var ret__12274__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__17094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17094) : next_fn.call(null,G__17094));
})()
;
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
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
var vec__17095 = (function (){var G__17098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17098) : next_fn.call(null,G__17098));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17095,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17095,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__17095,newi_STAR_,newe,newi,indices){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17099;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17100 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__15808__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices){
return (function (p1__17092_SHARP_){
return (p1__17092_SHARP_ >= (curri + (1)));
});})(info__15808__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__15808__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices){
return (function (p1__17093_SHARP_){
return (p1__17093_SHARP_ <= newi);
});})(info__15808__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache17099 = info17100;

return info17100;
})():info__15808__auto__);
var precompiled17101 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17102 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices){
return (function (p1__17092_SHARP_){
return (p1__17092_SHARP_ >= (curri + (1)));
});})(info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices))
,((function (info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices){
return (function (p1__17093_SHARP_){
return (p1__17093_SHARP_ <= newi);
});})(info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices))
], null),com.rpl.specter.ALL,((function (info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices){
return (function (p1__17092_SHARP_){
return (p1__17092_SHARP_ >= (curri + (1)));
});})(info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices))
,((function (info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices){
return (function (p1__17093_SHARP_){
return (p1__17093_SHARP_ <= newi);
});})(info__15808__auto__,info__15808__auto____$1,precompiled17101,dynamic_QMARK___15809__auto__,ii2,curri,vec__17095,newi_STAR_,newe,newi,indices))
], null);
return (precompiled17101.cljs$core$IFn$_invoke$arity$1 ? precompiled17101.cljs$core$IFn$_invoke$arity$1(G__17102) : precompiled17101.call(null,G__17102));
} else {
return precompiled17101;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__17095,newi_STAR_,newe,newi,indices))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17103;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17104 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache17103 = info17104;

return info17104;
})():info__15808__auto__);
var precompiled17105 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled17105.cljs$core$IFn$_invoke$arity$1 ? precompiled17105.cljs$core$IFn$_invoke$arity$1(G__17106) : precompiled17105.call(null,G__17106));
} else {
return precompiled17105;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17107;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17108 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache17107 = info17108;

return info17108;
})():info__15808__auto__);
var precompiled17109 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled17109.cljs$core$IFn$_invoke$arity$1 ? precompiled17109.cljs$core$IFn$_invoke$arity$1(G__17110) : precompiled17109.call(null,G__17110));
} else {
return precompiled17109;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17111 = (function (start,meta17112){
this.start = start;
this.meta17112 = meta17112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17113,meta17112__$1){
var self__ = this;
var _17113__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17111(self__.start,meta17112__$1));
});

com.rpl.specter.t_com$rpl$specter17111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17113){
var self__ = this;
var _17113__$1 = this;
return self__.meta17112;
});

com.rpl.specter.t_com$rpl$specter17111.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17111.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,next_fn,this__14996__auto____$1){
return (function (curr__12273__auto__,e){
var ret__12274__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
}
}
});})(i,next_fn,this__14996__auto____$1))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.t_com$rpl$specter17111.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,next_fn,this__14996__auto____$1){
return (function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__17114 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17117;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17118 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__15808__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1){
return (function (p1__17092_SHARP_){
return (p1__17092_SHARP_ >= (curri + (1)));
});})(info__15808__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__15808__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1){
return (function (p1__17093_SHARP_){
return (p1__17093_SHARP_ <= newi);
});})(info__15808__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__17092#","p1__17092#",-648637052,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__17093#","p1__17093#",-1177689061,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache17117 = info17118;

return info17118;
})():info__15808__auto__);
var precompiled17119 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17120 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1){
return (function (p1__17092_SHARP_){
return (p1__17092_SHARP_ >= (curri + (1)));
});})(info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1))
,((function (info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1){
return (function (p1__17093_SHARP_){
return (p1__17093_SHARP_ <= newi);
});})(info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1))
], null),com.rpl.specter.ALL,((function (info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1){
return (function (p1__17092_SHARP_){
return (p1__17092_SHARP_ >= (curri + (1)));
});})(info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1))
,((function (info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1){
return (function (p1__17093_SHARP_){
return (p1__17093_SHARP_ <= newi);
});})(info__15808__auto__,info__15808__auto____$1,precompiled17119,dynamic_QMARK___15809__auto__,ii2,curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1))
], null);
return (precompiled17119.cljs$core$IFn$_invoke$arity$1 ? precompiled17119.cljs$core$IFn$_invoke$arity$1(G__17120) : precompiled17119.call(null,G__17120));
} else {
return precompiled17119;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__17114,newi_STAR_,newe,newi,indices,next_fn,this__14996__auto____$1))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17121;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17122 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache17121 = info17122;

return info17122;
})():info__15808__auto__);
var precompiled17123 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled17123.cljs$core$IFn$_invoke$arity$1 ? precompiled17123.cljs$core$IFn$_invoke$arity$1(G__17124) : precompiled17123.call(null,G__17124));
} else {
return precompiled17123;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__15808__auto__ = com.rpl.specter.pathcache17125;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17126 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache17125 = info17126;

return info17126;
})():info__15808__auto__);
var precompiled17127 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled17127.cljs$core$IFn$_invoke$arity$1 ? precompiled17127.cljs$core$IFn$_invoke$arity$1(G__17128) : precompiled17127.call(null,G__17128));
} else {
return precompiled17127;
}
})(),newe,s));
});})(indices,next_fn,this__14996__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter17111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta17112","meta17112",600860972,null)], null);
});

com.rpl.specter.t_com$rpl$specter17111.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17111.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17111";

com.rpl.specter.t_com$rpl$specter17111.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17111");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17111.
 */
com.rpl.specter.__GT_t_com$rpl$specter17111 = (function com$rpl$specter$__GT_t_com$rpl$specter17111(start__$1,meta17112){
return (new com.rpl.specter.t_com$rpl$specter17111(start__$1,meta17112));
});

}

return (new com.rpl.specter.t_com$rpl$specter17111(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17129 = (function (afn,meta17130){
this.afn = afn;
this.meta17130 = meta17130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17131,meta17130__$1){
var self__ = this;
var _17131__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17129(self__.afn,meta17130__$1));
});

com.rpl.specter.t_com$rpl$specter17129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17131){
var self__ = this;
var _17131__$1 = this;
return self__.meta17130;
});

com.rpl.specter.t_com$rpl$specter17129.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17129.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__17132 = vals;
var G__17133 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__17132,G__17133) : next_fn.call(null,G__17132,G__17133));
});

com.rpl.specter.t_com$rpl$specter17129.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__17134 = vals;
var G__17135 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__17134,G__17135) : next_fn.call(null,G__17134,G__17135));
});

com.rpl.specter.t_com$rpl$specter17129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta17130","meta17130",1796893147,null)], null);
});

com.rpl.specter.t_com$rpl$specter17129.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17129.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17129";

com.rpl.specter.t_com$rpl$specter17129.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17129");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17129.
 */
com.rpl.specter.__GT_t_com$rpl$specter17129 = (function com$rpl$specter$__GT_t_com$rpl$specter17129(afn__$1,meta17130){
return (new com.rpl.specter.t_com$rpl$specter17129(afn__$1,meta17130));
});

}

return (new com.rpl.specter.t_com$rpl$specter17129(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__17136 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17136) : next_fn.call(null,G__17136));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__17137 = (function (){var G__17138 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17138) : next_fn.call(null,G__17138));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__17137) : unparse_fn.call(null,G__17137));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17139 = (function (parse_fn,unparse_fn,meta17140){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta17140 = meta17140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17141,meta17140__$1){
var self__ = this;
var _17141__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17139(self__.parse_fn,self__.unparse_fn,meta17140__$1));
});

com.rpl.specter.t_com$rpl$specter17139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17141){
var self__ = this;
var _17141__$1 = this;
return self__.meta17140;
});

com.rpl.specter.t_com$rpl$specter17139.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17139.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter17139.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
var G__17142 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__17142) : self__.unparse_fn.call(null,G__17142));
});

com.rpl.specter.t_com$rpl$specter17139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta17140","meta17140",449171609,null)], null);
});

com.rpl.specter.t_com$rpl$specter17139.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17139.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17139";

com.rpl.specter.t_com$rpl$specter17139.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17139");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17139.
 */
com.rpl.specter.__GT_t_com$rpl$specter17139 = (function com$rpl$specter$__GT_t_com$rpl$specter17139(parse_fn__$1,unparse_fn__$1,meta17140){
return (new com.rpl.specter.t_com$rpl$specter17139(parse_fn__$1,unparse_fn__$1,meta17140));
});

}

return (new com.rpl.specter.t_com$rpl$specter17139(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__17143 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17143) : next_fn.call(null,G__17143));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17144 = (function (meta17145){
this.meta17145 = meta17145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17146,meta17145__$1){
var self__ = this;
var _17146__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17144(meta17145__$1));
});

com.rpl.specter.t_com$rpl$specter17144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17146){
var self__ = this;
var _17146__$1 = this;
return self__.meta17145;
});

com.rpl.specter.t_com$rpl$specter17144.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17144.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});

com.rpl.specter.t_com$rpl$specter17144.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter17144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17145","meta17145",-874665406,null)], null);
});

com.rpl.specter.t_com$rpl$specter17144.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17144.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17144";

com.rpl.specter.t_com$rpl$specter17144.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17144");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17144.
 */
com.rpl.specter.__GT_t_com$rpl$specter17144 = (function com$rpl$specter$__GT_t_com$rpl$specter17144(meta17145){
return (new com.rpl.specter.t_com$rpl$specter17144(meta17145));
});

}

return (new com.rpl.specter.t_com$rpl$specter17144(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__12273__auto__,s){
var ret__12274__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17147 = (function (re,meta17148){
this.re = re;
this.meta17148 = meta17148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17149,meta17148__$1){
var self__ = this;
var _17149__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17147(self__.re,meta17148__$1));
});

com.rpl.specter.t_com$rpl$specter17147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17149){
var self__ = this;
var _17149__$1 = this;
return self__.meta17148;
});

com.rpl.specter.t_com$rpl$specter17147.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17147.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__14996__auto____$1){
return (function (curr__12273__auto__,s){
var ret__12274__auto__ = next_fn(s);
if((ret__12274__auto__ === com.rpl.specter.NONE)){
return curr__12273__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__12274__auto__)){
return cljs.core.reduced(ret__12274__auto__);
} else {
return ret__12274__auto__;
}
}
});})(next_fn,this__14996__auto____$1))
,com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
});

com.rpl.specter.t_com$rpl$specter17147.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return clojure.string.replace(structure,self__.re,next_fn);
});

com.rpl.specter.t_com$rpl$specter17147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta17148","meta17148",-314748931,null)], null);
});

com.rpl.specter.t_com$rpl$specter17147.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17147.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17147";

com.rpl.specter.t_com$rpl$specter17147.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17147");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17147.
 */
com.rpl.specter.__GT_t_com$rpl$specter17147 = (function com$rpl$specter$__GT_t_com$rpl$specter17147(re__$1,meta17148){
return (new com.rpl.specter.t_com$rpl$specter17147(re__$1,meta17148));
});

}

return (new com.rpl.specter.t_com$rpl$specter17147(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__17881__delegate = function (path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
return afn;
} else {
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17152 = (function (path,temp__5455__auto__,late,meta17153){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta17153 = meta17153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_17154,meta17153__$1){
var self__ = this;
var _17154__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17152(self__.path,self__.temp__5455__auto__,self__.late,meta17153__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_17154){
var self__ = this;
var _17154__$1 = this;
return self__.meta17153;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17152.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17152.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__17150_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__17150_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17152.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__17151_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__17151_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17152.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17153","meta17153",1692550855,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17152.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17152.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17152";

com.rpl.specter.t_com$rpl$specter17152.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17152");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17152.
 */
com.rpl.specter.__GT_t_com$rpl$specter17152 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17152(path__$1,temp__5455__auto____$1,late__$1,meta17153){
return (new com.rpl.specter.t_com$rpl$specter17152(path__$1,temp__5455__auto____$1,late__$1,meta17153));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17152(path,temp__5455__auto__,late,null));
});})(temp__5455__auto__))
);
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
}
};
var G__17881 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17885__i = 0, G__17885__a = new Array(arguments.length -  0);
while (G__17885__i < G__17885__a.length) {G__17885__a[G__17885__i] = arguments[G__17885__i + 0]; ++G__17885__i;}
  path = new cljs.core.IndexedSeq(G__17885__a,0,null);
} 
return G__17881__delegate.call(this,path);};
G__17881.cljs$lang$maxFixedArity = 0;
G__17881.cljs$lang$applyTo = (function (arglist__17886){
var path = cljs.core.seq(arglist__17886);
return G__17881__delegate(path);
});
G__17881.cljs$core$IFn$_invoke$arity$variadic = G__17881__delegate;
return G__17881;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__17887__delegate = function (path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
return ((function (afn,temp__5455__auto__){
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
;})(afn,temp__5455__auto__))
} else {
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17157 = (function (path,temp__5455__auto__,late,meta17158){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta17158 = meta17158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_17159,meta17158__$1){
var self__ = this;
var _17159__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17157(self__.path,self__.temp__5455__auto__,self__.late,meta17158__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_17159){
var self__ = this;
var _17159__$1 = this;
return self__.meta17158;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17157.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17157.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__17155_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__17155_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17157.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__17156_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__17156_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17157.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17158","meta17158",-133442780,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17157.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17157.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17157";

com.rpl.specter.t_com$rpl$specter17157.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17157");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17157.
 */
com.rpl.specter.__GT_t_com$rpl$specter17157 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17157(path__$1,temp__5455__auto____$1,late__$1,meta17158){
return (new com.rpl.specter.t_com$rpl$specter17157(path__$1,temp__5455__auto____$1,late__$1,meta17158));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17157(path,temp__5455__auto__,late,null));
});})(temp__5455__auto__))
);
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
}
};
var G__17887 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17896__i = 0, G__17896__a = new Array(arguments.length -  0);
while (G__17896__i < G__17896__a.length) {G__17896__a[G__17896__i] = arguments[G__17896__i + 0]; ++G__17896__i;}
  path = new cljs.core.IndexedSeq(G__17896__a,0,null);
} 
return G__17887__delegate.call(this,path);};
G__17887.cljs$lang$maxFixedArity = 0;
G__17887.cljs$lang$applyTo = (function (arglist__17897){
var path = cljs.core.seq(arglist__17897);
return G__17887__delegate(path);
});
G__17887.cljs$core$IFn$_invoke$arity$variadic = G__17887__delegate;
return G__17887;
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
var G__17899__delegate = function (path){
var G__17160 = com.rpl.specter.ALL;
var G__17161 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__17160,G__17161) : com.rpl.specter.subselect.call(null,G__17160,G__17161));
};
var G__17899 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17901__i = 0, G__17901__a = new Array(arguments.length -  0);
while (G__17901__i < G__17901__a.length) {G__17901__a[G__17901__i] = arguments[G__17901__i + 0]; ++G__17901__i;}
  path = new cljs.core.IndexedSeq(G__17901__a,0,null);
} 
return G__17899__delegate.call(this,path);};
G__17899.cljs$lang$maxFixedArity = 0;
G__17899.cljs$lang$applyTo = (function (arglist__17903){
var path = cljs.core.seq(arglist__17903);
return G__17899__delegate(path);
});
G__17899.cljs$core$IFn$_invoke$arity$variadic = G__17899__delegate;
return G__17899;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17162 = (function (path,update_fn,late,late_fn,meta17163){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta17163 = meta17163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17164,meta17163__$1){
var self__ = this;
var _17164__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17162(self__.path,self__.update_fn,self__.late,self__.late_fn,meta17163__$1));
});

com.rpl.specter.t_com$rpl$specter17162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17164){
var self__ = this;
var _17164__$1 = this;
return self__.meta17163;
});

com.rpl.specter.t_com$rpl$specter17162.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17162.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter17162.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter17162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta17163","meta17163",1485429538,null)], null);
});

com.rpl.specter.t_com$rpl$specter17162.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17162.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17162";

com.rpl.specter.t_com$rpl$specter17162.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17162");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17162.
 */
com.rpl.specter.__GT_t_com$rpl$specter17162 = (function com$rpl$specter$__GT_t_com$rpl$specter17162(path__$1,update_fn__$1,late__$1,late_fn__$1,meta17163){
return (new com.rpl.specter.t_com$rpl$specter17162(path__$1,update_fn__$1,late__$1,late_fn__$1,meta17163));
});

}

return (new com.rpl.specter.t_com$rpl$specter17162(path,update_fn,late,late_fn,null));
}));
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17165 = (function (path,reduce_fn,late,late_fn,meta17166){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta17166 = meta17166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17167,meta17166__$1){
var self__ = this;
var _17167__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17165(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta17166__$1));
});

com.rpl.specter.t_com$rpl$specter17165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17167){
var self__ = this;
var _17167__$1 = this;
return self__.meta17166;
});

com.rpl.specter.t_com$rpl$specter17165.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17165.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter17165.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter17165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta17166","meta17166",-260293775,null)], null);
});

com.rpl.specter.t_com$rpl$specter17165.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17165.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17165";

com.rpl.specter.t_com$rpl$specter17165.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17165");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17165.
 */
com.rpl.specter.__GT_t_com$rpl$specter17165 = (function com$rpl$specter$__GT_t_com$rpl$specter17165(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta17166){
return (new com.rpl.specter.t_com$rpl$specter17165(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta17166));
});

}

return (new com.rpl.specter.t_com$rpl$specter17165(path,reduce_fn,late,late_fn,null));
}));
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__17169 = (function (p1__17168_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17168_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__17169) : com.rpl.specter.pred.call(null,G__17169));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__17171 = (function (p1__17170_SHARP_){
return (p1__17170_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__17171) : com.rpl.specter.pred.call(null,G__17171));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__17173 = (function (p1__17172_SHARP_){
return (p1__17172_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__17173) : com.rpl.specter.pred.call(null,G__17173));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__17175 = (function (p1__17174_SHARP_){
return (p1__17174_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__17175) : com.rpl.specter.pred.call(null,G__17175));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__17177 = (function (p1__17176_SHARP_){
return (p1__17176_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__17177) : com.rpl.specter.pred.call(null,G__17177));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__17178_17912 = com.rpl.specter.protocols.implicit_nav;
var G__17179_17913 = "null";
var G__17180_17914 = ((function (G__17178_17912,G__17179_17913){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__17178_17912,G__17179_17913))
;
goog.object.set(G__17178_17912,G__17179_17913,G__17180_17914);
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

var G__17181_17917 = com.rpl.specter.protocols.implicit_nav;
var G__17182_17918 = "string";
var G__17183_17919 = ((function (G__17181_17917,G__17182_17918){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__17181_17917,G__17182_17918))
;
goog.object.set(G__17181_17917,G__17182_17918,G__17183_17919);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

var G__17184_17920 = com.rpl.specter.protocols.implicit_nav;
var G__17185_17921 = "number";
var G__17186_17922 = ((function (G__17184_17920,G__17185_17921){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__17184_17920,G__17185_17921))
;
goog.object.set(G__17184_17920,G__17185_17921,G__17186_17922);
cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

var G__17187_17923 = com.rpl.specter.protocols.implicit_nav;
var G__17188_17924 = "boolean";
var G__17189_17925 = ((function (G__17187_17923,G__17188_17924){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__17187_17923,G__17188_17924))
;
goog.object.set(G__17187_17923,G__17188_17924,G__17189_17925);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__17190_17927 = com.rpl.specter.protocols.implicit_nav;
var G__17191_17928 = "function";
var G__17192_17929 = ((function (G__17190_17927,G__17191_17928){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__17190_17927,G__17191_17928))
;
goog.object.set(G__17190_17927,G__17191_17928,G__17192_17929);
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
var G__17193 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17193) : next_fn.call(null,G__17193));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__17194 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17194) : next_fn.call(null,G__17194));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17195 = (function (v,meta17196){
this.v = v;
this.meta17196 = meta17196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17197,meta17196__$1){
var self__ = this;
var _17197__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17195(self__.v,meta17196__$1));
});

com.rpl.specter.t_com$rpl$specter17195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17197){
var self__ = this;
var _17197__$1 = this;
return self__.meta17196;
});

com.rpl.specter.t_com$rpl$specter17195.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17195.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter17195.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter17195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta17196","meta17196",-1168708495,null)], null);
});

com.rpl.specter.t_com$rpl$specter17195.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17195.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17195";

com.rpl.specter.t_com$rpl$specter17195.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17195");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17195.
 */
com.rpl.specter.__GT_t_com$rpl$specter17195 = (function com$rpl$specter$__GT_t_com$rpl$specter17195(v__$1,meta17196){
return (new com.rpl.specter.t_com$rpl$specter17195(v__$1,meta17196));
});

}

return (new com.rpl.specter.t_com$rpl$specter17195(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__17198 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__17198) : com.rpl.specter.nil__GT_val.call(null,G__17198));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__17199 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__17199) : com.rpl.specter.nil__GT_val.call(null,G__17199));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__17200 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__17200) : com.rpl.specter.nil__GT_val.call(null,G__17200));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__17201 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17201) : next_fn.call(null,G__17201));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__17202 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17202) : next_fn.call(null,G__17202));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17203 = (function (meta17204){
this.meta17204 = meta17204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17205,meta17204__$1){
var self__ = this;
var _17205__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17203(meta17204__$1));
});

com.rpl.specter.t_com$rpl$specter17203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17205){
var self__ = this;
var _17205__$1 = this;
return self__.meta17204;
});

com.rpl.specter.t_com$rpl$specter17203.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17203.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});

com.rpl.specter.t_com$rpl$specter17203.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter17203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17204","meta17204",2007362306,null)], null);
});

com.rpl.specter.t_com$rpl$specter17203.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17203.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17203";

com.rpl.specter.t_com$rpl$specter17203.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17203");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17203.
 */
com.rpl.specter.__GT_t_com$rpl$specter17203 = (function com$rpl$specter$__GT_t_com$rpl$specter17203(meta17204){
return (new com.rpl.specter.t_com$rpl$specter17203(meta17204));
});

}

return (new com.rpl.specter.t_com$rpl$specter17203(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__17206 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17206) : next_fn.call(null,G__17206));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__17207 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17207) : next_fn.call(null,G__17207));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17208 = (function (meta17209){
this.meta17209 = meta17209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17210,meta17209__$1){
var self__ = this;
var _17210__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17208(meta17209__$1));
});

com.rpl.specter.t_com$rpl$specter17208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17210){
var self__ = this;
var _17210__$1 = this;
return self__.meta17209;
});

com.rpl.specter.t_com$rpl$specter17208.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17208.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(cljs.core.name(structure));
});

com.rpl.specter.t_com$rpl$specter17208.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
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

com.rpl.specter.t_com$rpl$specter17208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17209","meta17209",-931914346,null)], null);
});

com.rpl.specter.t_com$rpl$specter17208.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17208.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17208";

com.rpl.specter.t_com$rpl$specter17208.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17208");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17208.
 */
com.rpl.specter.__GT_t_com$rpl$specter17208 = (function com$rpl$specter$__GT_t_com$rpl$specter17208(meta17209){
return (new com.rpl.specter.t_com$rpl$specter17208(meta17209));
});

}

return (new com.rpl.specter.t_com$rpl$specter17208(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__17211 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17211) : next_fn.call(null,G__17211));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__17212 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__17212) : next_fn.call(null,G__17212));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17213 = (function (meta17214){
this.meta17214 = meta17214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17215,meta17214__$1){
var self__ = this;
var _17215__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17213(meta17214__$1));
});

com.rpl.specter.t_com$rpl$specter17213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17215){
var self__ = this;
var _17215__$1 = this;
return self__.meta17214;
});

com.rpl.specter.t_com$rpl$specter17213.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17213.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});

com.rpl.specter.t_com$rpl$specter17213.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14996__auto__,vals__14997__auto__,structure,next_fn__14998__auto__){
var self__ = this;
var this__14996__auto____$1 = this;
var next_fn = ((function (this__14996__auto____$1){
return (function (s__14999__auto__){
return (next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14998__auto__.cljs$core$IFn$_invoke$arity$2(vals__14997__auto__,s__14999__auto__) : next_fn__14998__auto__.call(null,vals__14997__auto__,s__14999__auto__));
});})(this__14996__auto____$1))
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

com.rpl.specter.t_com$rpl$specter17213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17214","meta17214",-474656309,null)], null);
});

com.rpl.specter.t_com$rpl$specter17213.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17213.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17213";

com.rpl.specter.t_com$rpl$specter17213.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17213");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17213.
 */
com.rpl.specter.__GT_t_com$rpl$specter17213 = (function com$rpl$specter$__GT_t_com$rpl$specter17213(meta17214){
return (new com.rpl.specter.t_com$rpl$specter17213(meta17214));
});

}

return (new com.rpl.specter.t_com$rpl$specter17213(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18021__delegate = function (path){
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17216 = (function (path,late,meta17217){
this.path = path;
this.late = late;
this.meta17217 = meta17217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17218,meta17217__$1){
var self__ = this;
var _17218__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17216(self__.path,self__.late,meta17217__$1));
});

com.rpl.specter.t_com$rpl$specter17216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17218){
var self__ = this;
var _17218__$1 = this;
return self__.meta17217;
});

com.rpl.specter.t_com$rpl$specter17216.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17216.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__17220 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17219,G__17220) : next_fn__15800__auto__.call(null,G__17219,G__17220));
});

com.rpl.specter.t_com$rpl$specter17216.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17221 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__17222 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17221,G__17222) : next_fn__15800__auto__.call(null,G__17221,G__17222));
});

com.rpl.specter.t_com$rpl$specter17216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17217","meta17217",759024982,null)], null);
});

com.rpl.specter.t_com$rpl$specter17216.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17216.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17216";

com.rpl.specter.t_com$rpl$specter17216.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17216");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17216.
 */
com.rpl.specter.__GT_t_com$rpl$specter17216 = (function com$rpl$specter$__GT_t_com$rpl$specter17216(path__$1,late__$1,meta17217){
return (new com.rpl.specter.t_com$rpl$specter17216(path__$1,late__$1,meta17217));
});

}

return (new com.rpl.specter.t_com$rpl$specter17216(path,late,null));
}));
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
};
var G__18021 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18093__i = 0, G__18093__a = new Array(arguments.length -  0);
while (G__18093__i < G__18093__a.length) {G__18093__a[G__18093__i] = arguments[G__18093__i + 0]; ++G__18093__i;}
  path = new cljs.core.IndexedSeq(G__18093__a,0,null);
} 
return G__18021__delegate.call(this,path);};
G__18021.cljs$lang$maxFixedArity = 0;
G__18021.cljs$lang$applyTo = (function (arglist__18094){
var path = cljs.core.seq(arglist__18094);
return G__18021__delegate(path);
});
G__18021.cljs$core$IFn$_invoke$arity$variadic = G__18021__delegate;
return G__18021;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18095__delegate = function (path){
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17223 = (function (path,late,meta17224){
this.path = path;
this.late = late;
this.meta17224 = meta17224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17225,meta17224__$1){
var self__ = this;
var _17225__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17223(self__.path,self__.late,meta17224__$1));
});

com.rpl.specter.t_com$rpl$specter17223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17225){
var self__ = this;
var _17225__$1 = this;
return self__.meta17224;
});

com.rpl.specter.t_com$rpl$specter17223.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17223.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__17227 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17226,G__17227) : next_fn__15800__auto__.call(null,G__17226,G__17227));
});

com.rpl.specter.t_com$rpl$specter17223.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17228 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__17229 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17228,G__17229) : next_fn__15800__auto__.call(null,G__17228,G__17229));
});

com.rpl.specter.t_com$rpl$specter17223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17224","meta17224",-1602456049,null)], null);
});

com.rpl.specter.t_com$rpl$specter17223.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17223.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17223";

com.rpl.specter.t_com$rpl$specter17223.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17223");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17223.
 */
com.rpl.specter.__GT_t_com$rpl$specter17223 = (function com$rpl$specter$__GT_t_com$rpl$specter17223(path__$1,late__$1,meta17224){
return (new com.rpl.specter.t_com$rpl$specter17223(path__$1,late__$1,meta17224));
});

}

return (new com.rpl.specter.t_com$rpl$specter17223(path,late,null));
}));
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
};
var G__18095 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18096__i = 0, G__18096__a = new Array(arguments.length -  0);
while (G__18096__i < G__18096__a.length) {G__18096__a[G__18096__i] = arguments[G__18096__i + 0]; ++G__18096__i;}
  path = new cljs.core.IndexedSeq(G__18096__a,0,null);
} 
return G__18095__delegate.call(this,path);};
G__18095.cljs$lang$maxFixedArity = 0;
G__18095.cljs$lang$applyTo = (function (arglist__18097){
var path = cljs.core.seq(arglist__18097);
return G__18095__delegate(path);
});
G__18095.cljs$core$IFn$_invoke$arity$variadic = G__18095__delegate;
return G__18095;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17230 = (function (val,meta17231){
this.val = val;
this.meta17231 = meta17231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17232,meta17231__$1){
var self__ = this;
var _17232__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17230(self__.val,meta17231__$1));
});

com.rpl.specter.t_com$rpl$specter17230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17232){
var self__ = this;
var _17232__$1 = this;
return self__.meta17231;
});

com.rpl.specter.t_com$rpl$specter17230.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17230.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17233 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,self__.val);
var G__17234 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17233,G__17234) : next_fn__15800__auto__.call(null,G__17233,G__17234));
});

com.rpl.specter.t_com$rpl$specter17230.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__15798__auto__,vals__15799__auto__,structure,next_fn__15800__auto__){
var self__ = this;
var this__15798__auto____$1 = this;
var G__17235 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__15799__auto__,self__.val);
var G__17236 = structure;
return (next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__15800__auto__.cljs$core$IFn$_invoke$arity$2(G__17235,G__17236) : next_fn__15800__auto__.call(null,G__17235,G__17236));
});

com.rpl.specter.t_com$rpl$specter17230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta17231","meta17231",-315349988,null)], null);
});

com.rpl.specter.t_com$rpl$specter17230.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17230.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17230";

com.rpl.specter.t_com$rpl$specter17230.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17230");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17230.
 */
com.rpl.specter.__GT_t_com$rpl$specter17230 = (function com$rpl$specter$__GT_t_com$rpl$specter17230(val__$1,meta17231){
return (new com.rpl.specter.t_com$rpl$specter17230(val__$1,meta17231));
});

}

return (new com.rpl.specter.t_com$rpl$specter17230(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18098__delegate = function (path){
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17237 = (function (path,late,meta17238){
this.path = path;
this.late = late;
this.meta17238 = meta17238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17239,meta17238__$1){
var self__ = this;
var _17239__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17237(self__.path,self__.late,meta17238__$1));
});

com.rpl.specter.t_com$rpl$specter17237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17239){
var self__ = this;
var _17239__$1 = this;
return self__.meta17238;
});

com.rpl.specter.t_com$rpl$specter17237.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17237.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter17237.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter17237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17238","meta17238",-889864255,null)], null);
});

com.rpl.specter.t_com$rpl$specter17237.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17237.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17237";

com.rpl.specter.t_com$rpl$specter17237.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17237");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17237.
 */
com.rpl.specter.__GT_t_com$rpl$specter17237 = (function com$rpl$specter$__GT_t_com$rpl$specter17237(path__$1,late__$1,meta17238){
return (new com.rpl.specter.t_com$rpl$specter17237(path__$1,late__$1,meta17238));
});

}

return (new com.rpl.specter.t_com$rpl$specter17237(path,late,null));
}));
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
};
var G__18098 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18099__i = 0, G__18099__a = new Array(arguments.length -  0);
while (G__18099__i < G__18099__a.length) {G__18099__a[G__18099__i] = arguments[G__18099__i + 0]; ++G__18099__i;}
  path = new cljs.core.IndexedSeq(G__18099__a,0,null);
} 
return G__18098__delegate.call(this,path);};
G__18098.cljs$lang$maxFixedArity = 0;
G__18098.cljs$lang$applyTo = (function (arglist__18100){
var path = cljs.core.seq(arglist__18100);
return G__18098__delegate(path);
});
G__18098.cljs$core$IFn$_invoke$arity$variadic = G__18098__delegate;
return G__18098;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17242 = (function (meta17243){
this.meta17243 = meta17243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17244,meta17243__$1){
var self__ = this;
var _17244__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17242(meta17243__$1));
});

com.rpl.specter.t_com$rpl$specter17242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17244){
var self__ = this;
var _17244__$1 = this;
return self__.meta17243;
});

com.rpl.specter.t_com$rpl$specter17242.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17242.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__17245 = cljs.core.PersistentVector.EMPTY;
var G__17246 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__17245,G__17246) : next_fn.call(null,G__17245,G__17246));
});

com.rpl.specter.t_com$rpl$specter17242.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__17247 = cljs.core.PersistentVector.EMPTY;
var G__17248 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__17247,G__17248) : next_fn.call(null,G__17247,G__17248));
});

com.rpl.specter.t_com$rpl$specter17242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17243","meta17243",-616874617,null)], null);
});

com.rpl.specter.t_com$rpl$specter17242.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17242.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17242";

com.rpl.specter.t_com$rpl$specter17242.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17242");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17242.
 */
com.rpl.specter.__GT_t_com$rpl$specter17242 = (function com$rpl$specter$__GT_t_com$rpl$specter17242(meta17243){
return (new com.rpl.specter.t_com$rpl$specter17242(meta17243));
});

}

return (new com.rpl.specter.t_com$rpl$specter17242(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__18122 = null;
var G__18122__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__18122__3 = (function (cond_p,then_path,else_path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5455__auto__){
return (function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17251 = (function (cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,meta17252){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta17252 = meta17252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5455__auto__){
return (function (_17253,meta17252__$1){
var self__ = this;
var _17253__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17251(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.afn,self__.late_then,self__.late_else,meta17252__$1));
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5455__auto__){
return (function (_17253){
var self__ = this;
var _17253__$1 = this;
return self__.meta17252;
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17251.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17251.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17251.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17251.getBasis = ((function (afn,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta17252","meta17252",928139108,null)], null);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17251.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17251.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17251";

com.rpl.specter.t_com$rpl$specter17251.cljs$lang$ctorPrWriter = ((function (afn,temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17251");
});})(afn,temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17251.
 */
com.rpl.specter.__GT_t_com$rpl$specter17251 = ((function (afn,temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17251(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta17252){
return (new com.rpl.specter.t_com$rpl$specter17251(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta17252));
});})(afn,temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17251(cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,null));
});})(afn,temp__5455__auto__))
);
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
} else {
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17254 = (function (cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,meta17255){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta17255 = meta17255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_17256,meta17255__$1){
var self__ = this;
var _17256__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17254(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.late_cond,self__.late_then,self__.late_else,meta17255__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_17256){
var self__ = this;
var _17256__$1 = this;
return self__.meta17255;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17254.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17254.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__17249_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__17249_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17254.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__17250_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__17250_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17254.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta17255","meta17255",-621533731,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter17254.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17254.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17254";

com.rpl.specter.t_com$rpl$specter17254.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17254");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17254.
 */
com.rpl.specter.__GT_t_com$rpl$specter17254 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17254(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta17255){
return (new com.rpl.specter.t_com$rpl$specter17254(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta17255));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17254(cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,null));
});})(temp__5455__auto__))
);
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
}
});
G__18122 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__18122__2.call(this,cond_p,then_path);
case 3:
return G__18122__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18122.cljs$core$IFn$_invoke$arity$2 = G__18122__2;
G__18122.cljs$core$IFn$_invoke$arity$3 = G__18122__3;
return G__18122;
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
var G__18123__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__17257){
var vec__17258 = p__17257;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__18123 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__18124__i = 0, G__18124__a = new Array(arguments.length -  0);
while (G__18124__i < G__18124__a.length) {G__18124__a[G__18124__i] = arguments[G__18124__i + 0]; ++G__18124__i;}
  conds = new cljs.core.IndexedSeq(G__18124__a,0,null);
} 
return G__18123__delegate.call(this,conds);};
G__18123.cljs$lang$maxFixedArity = 0;
G__18123.cljs$lang$applyTo = (function (arglist__18125){
var conds = cljs.core.seq(arglist__18125);
return G__18123__delegate(conds);
});
G__18123.cljs$core$IFn$_invoke$arity$variadic = G__18123__delegate;
return G__18123;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__18126 = null;
var G__18126__0 = (function (){
return com.rpl.specter.STAY;
});
var G__18126__1 = (function (path){
return path;
});
var G__18126__2 = (function (path1,path2){
var builder__15801__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter17261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17261 = (function (path1,path2,late1,late2,meta17262){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta17262 = meta17262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter17261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17263,meta17262__$1){
var self__ = this;
var _17263__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17261(self__.path1,self__.path2,self__.late1,self__.late2,meta17262__$1));
});

com.rpl.specter.t_com$rpl$specter17261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17263){
var self__ = this;
var _17263__$1 = this;
return self__.meta17262;
});

com.rpl.specter.t_com$rpl$specter17261.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17261.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter17261.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter17261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta17262","meta17262",-220435947,null)], null);
});

com.rpl.specter.t_com$rpl$specter17261.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17261.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17261";

com.rpl.specter.t_com$rpl$specter17261.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter17261");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter17261.
 */
com.rpl.specter.__GT_t_com$rpl$specter17261 = (function com$rpl$specter$__GT_t_com$rpl$specter17261(path1__$1,path2__$1,late1__$1,late2__$1,meta17262){
return (new com.rpl.specter.t_com$rpl$specter17261(path1__$1,path2__$1,late1__$1,late2__$1,meta17262));
});

}

return (new com.rpl.specter.t_com$rpl$specter17261(path1,path2,late1,late2,null));
}));
var curr_params__15802__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__15802__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__15801__auto__,curr_params__15802__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__15801__auto__,curr_params__15802__auto__,null);
}
});
var G__18126__3 = (function() { 
var G__18127__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__18127 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__18128__i = 0, G__18128__a = new Array(arguments.length -  2);
while (G__18128__i < G__18128__a.length) {G__18128__a[G__18128__i] = arguments[G__18128__i + 2]; ++G__18128__i;}
  paths = new cljs.core.IndexedSeq(G__18128__a,0,null);
} 
return G__18127__delegate.call(this,path1,path2,paths);};
G__18127.cljs$lang$maxFixedArity = 2;
G__18127.cljs$lang$applyTo = (function (arglist__18129){
var path1 = cljs.core.first(arglist__18129);
arglist__18129 = cljs.core.next(arglist__18129);
var path2 = cljs.core.first(arglist__18129);
var paths = cljs.core.rest(arglist__18129);
return G__18127__delegate(path1,path2,paths);
});
G__18127.cljs$core$IFn$_invoke$arity$variadic = G__18127__delegate;
return G__18127;
})()
;
G__18126 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__18126__0.call(this);
case 1:
return G__18126__1.call(this,path1);
case 2:
return G__18126__2.call(this,path1,path2);
default:
var G__18130 = null;
if (arguments.length > 2) {
var G__18131__i = 0, G__18131__a = new Array(arguments.length -  2);
while (G__18131__i < G__18131__a.length) {G__18131__a[G__18131__i] = arguments[G__18131__i + 2]; ++G__18131__i;}
G__18130 = new cljs.core.IndexedSeq(G__18131__a,0,null);
}
return G__18126__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__18130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18126.cljs$lang$maxFixedArity = 2;
G__18126.cljs$lang$applyTo = G__18126__3.cljs$lang$applyTo;
G__18126.cljs$core$IFn$_invoke$arity$0 = G__18126__0;
G__18126.cljs$core$IFn$_invoke$arity$1 = G__18126__1;
G__18126.cljs$core$IFn$_invoke$arity$2 = G__18126__2;
G__18126.cljs$core$IFn$_invoke$arity$variadic = G__18126__3.cljs$core$IFn$_invoke$arity$variadic;
return G__18126;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18132__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__18132 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18133__i = 0, G__18133__a = new Array(arguments.length -  0);
while (G__18133__i < G__18133__a.length) {G__18133__a[G__18133__i] = arguments[G__18133__i + 0]; ++G__18133__i;}
  path = new cljs.core.IndexedSeq(G__18133__a,0,null);
} 
return G__18132__delegate.call(this,path);};
G__18132.cljs$lang$maxFixedArity = 0;
G__18132.cljs$lang$applyTo = (function (arglist__18134){
var path = cljs.core.seq(arglist__18134);
return G__18132__delegate(path);
});
G__18132.cljs$core$IFn$_invoke$arity$variadic = G__18132__delegate;
return G__18132;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18135__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__18135 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18136__i = 0, G__18136__a = new Array(arguments.length -  0);
while (G__18136__i < G__18136__a.length) {G__18136__a[G__18136__i] = arguments[G__18136__i + 0]; ++G__18136__i;}
  path = new cljs.core.IndexedSeq(G__18136__a,0,null);
} 
return G__18135__delegate.call(this,path);};
G__18135.cljs$lang$maxFixedArity = 0;
G__18135.cljs$lang$applyTo = (function (arglist__18137){
var path = cljs.core.seq(arglist__18137);
return G__18135__delegate(path);
});
G__18135.cljs$core$IFn$_invoke$arity$variadic = G__18135__delegate;
return G__18135;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__15808__auto__ = com.rpl.specter.pathcache17268;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17269 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2103,2103,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache17268 = info17269;

return info17269;
})():info__15808__auto__);
var precompiled17270 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17271 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled17270.cljs$core$IFn$_invoke$arity$1 ? precompiled17270.cljs$core$IFn$_invoke$arity$1(G__17271) : precompiled17270.call(null,G__17271));
} else {
return precompiled17270;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__15808__auto__ = com.rpl.specter.pathcache17272;
var info__15808__auto____$1 = (((info__15808__auto__ == null))?(function (){var info17273 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2103,2103,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,688,690,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache17272 = info17273;

return info17273;
})():info__15808__auto__);
var precompiled17274 = com.rpl.specter.impl.cached_path_info_precompiled(info__15808__auto____$1);
var dynamic_QMARK___15809__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__15808__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___15809__auto__)){
var G__17275 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled17274.cljs$core$IFn$_invoke$arity$1 ? precompiled17274.cljs$core$IFn$_invoke$arity$1(G__17275) : precompiled17274.call(null,G__17275));
} else {
return precompiled17274;
}
})());

return p;
}));
var empty__GT_NONE_18194 = (function (){var G__17276 = cljs.core.empty_QMARK_;
var G__17277 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__17276,G__17277) : com.rpl.specter.if_path.call(null,G__17276,G__17277));
})();
var compact_STAR__18195 = ((function (empty__GT_NONE_18194){
return (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_18194) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_18194));
});})(empty__GT_NONE_18194))
;
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (empty__GT_NONE_18194,compact_STAR__18195){
return (function() { 
var G__18204__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__18195,path);
};
var G__18204 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18205__i = 0, G__18205__a = new Array(arguments.length -  0);
while (G__18205__i < G__18205__a.length) {G__18205__a[G__18205__i] = arguments[G__18205__i + 0]; ++G__18205__i;}
  path = new cljs.core.IndexedSeq(G__18205__a,0,null);
} 
return G__18204__delegate.call(this,path);};
G__18204.cljs$lang$maxFixedArity = 0;
G__18204.cljs$lang$applyTo = (function (arglist__18206){
var path = cljs.core.seq(arglist__18206);
return G__18204__delegate(path);
});
G__18204.cljs$core$IFn$_invoke$arity$variadic = G__18204__delegate;
return G__18204;
})()
;})(empty__GT_NONE_18194,compact_STAR__18195))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
