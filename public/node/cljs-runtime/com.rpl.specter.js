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
return cljs.core.not(com.rpl.specter.impl.dynamic_param_QMARK_(path));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__21770__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.sequential_QMARK_(ret);
if(and__3938__auto__){
return com.rpl.specter.static_path_QMARK_(ret);
} else {
return and__3938__auto__;
}
})())){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__21770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21771__i = 0, G__21771__a = new Array(arguments.length -  0);
while (G__21771__i < G__21771__a.length) {G__21771__a[G__21771__i] = arguments[G__21771__i + 0]; ++G__21771__i;}
  args = new cljs.core.IndexedSeq(G__21771__a,0,null);
} 
return G__21770__delegate.call(this,args);};
G__21770.cljs$lang$maxFixedArity = 0;
G__21770.cljs$lang$applyTo = (function (arglist__21772){
var args = cljs.core.seq(arglist__21772);
return G__21770__delegate(args);
});
G__21770.cljs$core$IFn$_invoke$arity$variadic = G__21770__delegate;
return G__21770;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21792 = arguments.length;
var i__4532__auto___21793 = (0);
while(true){
if((i__4532__auto___21793 < len__4531__auto___21792)){
args__4534__auto__.push((arguments[i__4532__auto___21793]));

var G__21794 = (i__4532__auto___21793 + (1));
i__4532__auto___21793 = G__21794;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq21790){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21790));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__21795 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21796 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__21795,G__21796) : com.rpl.specter.compiled_select.call(null,G__21795,G__21796));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__21797 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21798 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__21797,G__21798) : com.rpl.specter.compiled_select_one.call(null,G__21797,G__21798));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__21799 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21800 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__21799,G__21800) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__21799,G__21800));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__21801 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21802 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__21801,G__21802) : com.rpl.specter.compiled_select_first.call(null,G__21801,G__21802));
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
var G__21803 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21804 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__21803,G__21804) : com.rpl.specter.compiled_select_any.call(null,G__21803,G__21804));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__21805 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21806 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21805,G__21806) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__21805,G__21806));
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
var G__21809 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__21810 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__21809,G__21810) : com.rpl.specter.compiled_traverse.call(null,G__21809,G__21810));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__21812 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__21812) : com.rpl.specter.compiled_traverse_all.call(null,G__21812));
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
var G__21889 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21890 = transform_fn;
var G__21891 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__21889,G__21890,G__21891) : com.rpl.specter.compiled_transform.call(null,G__21889,G__21890,G__21891));
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
var G__21898 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21899 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__21898,G__21899) : com.rpl.specter.compiled_multi_transform.call(null,G__21898,G__21899));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__21902 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21903 = val;
var G__21904 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__21902,G__21903,G__21904) : com.rpl.specter.compiled_setval.call(null,G__21902,G__21903,G__21904));
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
var args__4534__auto__ = [];
var len__4531__auto___21926 = arguments.length;
var i__4532__auto___21927 = (0);
while(true){
if((i__4532__auto___21927 < len__4531__auto___21926)){
args__4534__auto__.push((arguments[i__4532__auto___21927]));

var G__21928 = (i__4532__auto___21927 + (1));
i__4532__auto___21927 = G__21928;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__21917){
var map__21918 = p__21917;
var map__21918__$1 = ((((!((map__21918 == null)))?(((((map__21918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21918):map__21918);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21918__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__21920 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__21921 = transform_fn;
var G__21922 = structure;
var G__21923 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__21924 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__21920,G__21921,G__21922,G__21923,G__21924) : com.rpl.specter.compiled_replace_in.call(null,G__21920,G__21921,G__21922,G__21923,G__21924));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq21910){
var G__21911 = cljs.core.first(seq21910);
var seq21910__$1 = cljs.core.next(seq21910);
var G__21912 = cljs.core.first(seq21910__$1);
var seq21910__$2 = cljs.core.next(seq21910__$1);
var G__21913 = cljs.core.first(seq21910__$2);
var seq21910__$3 = cljs.core.next(seq21910__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21911,G__21912,G__21913,seq21910__$3);
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
var G__21937__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__21937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21938__i = 0, G__21938__a = new Array(arguments.length -  0);
while (G__21938__i < G__21938__a.length) {G__21938__a[G__21938__i] = arguments[G__21938__i + 0]; ++G__21938__i;}
  args = new cljs.core.IndexedSeq(G__21938__a,0,null);
} 
return G__21937__delegate.call(this,args);};
G__21937.cljs$lang$maxFixedArity = 0;
G__21937.cljs$lang$applyTo = (function (arglist__21940){
var args = cljs.core.seq(arglist__21940);
return G__21937__delegate(args);
});
G__21937.cljs$core$IFn$_invoke$arity$variadic = G__21937__delegate;
return G__21937;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21947 = (function (meta21948){
this.meta21948 = meta21948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21949,meta21948__$1){
var self__ = this;
var _21949__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21947(meta21948__$1));
});

com.rpl.specter.t_com$rpl$specter21947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21949){
var self__ = this;
var _21949__$1 = this;
return self__.meta21948;
});

com.rpl.specter.t_com$rpl$specter21947.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21947.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter21947.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter21947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21948","meta21948",2068285556,null)], null);
});

com.rpl.specter.t_com$rpl$specter21947.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21947.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21947";

com.rpl.specter.t_com$rpl$specter21947.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter21947");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21947.
 */
com.rpl.specter.__GT_t_com$rpl$specter21947 = (function com$rpl$specter$__GT_t_com$rpl$specter21947(meta21948){
return (new com.rpl.specter.t_com$rpl$specter21947(meta21948));
});

}

return (new com.rpl.specter.t_com$rpl$specter21947(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21969 = (function (afn,meta21970){
this.afn = afn;
this.meta21970 = meta21970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21971,meta21970__$1){
var self__ = this;
var _21971__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21969(self__.afn,meta21970__$1));
});

com.rpl.specter.t_com$rpl$specter21969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21971){
var self__ = this;
var _21971__$1 = this;
return self__.meta21970;
});

com.rpl.specter.t_com$rpl$specter21969.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21969.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter21969.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter21969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta21970","meta21970",-1946492516,null)], null);
});

com.rpl.specter.t_com$rpl$specter21969.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21969.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21969";

com.rpl.specter.t_com$rpl$specter21969.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter21969");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21969.
 */
com.rpl.specter.__GT_t_com$rpl$specter21969 = (function com$rpl$specter$__GT_t_com$rpl$specter21969(afn__$1,meta21970){
return (new com.rpl.specter.t_com$rpl$specter21969(afn__$1,meta21970));
});

}

return (new com.rpl.specter.t_com$rpl$specter21969(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21974 = (function (afn,meta21975){
this.afn = afn;
this.meta21975 = meta21975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21976,meta21975__$1){
var self__ = this;
var _21976__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21974(self__.afn,meta21975__$1));
});

com.rpl.specter.t_com$rpl$specter21974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21976){
var self__ = this;
var _21976__$1 = this;
return self__.meta21975;
});

com.rpl.specter.t_com$rpl$specter21974.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21974.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter21974.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
});

com.rpl.specter.t_com$rpl$specter21974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta21975","meta21975",1830192038,null)], null);
});

com.rpl.specter.t_com$rpl$specter21974.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21974.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21974";

com.rpl.specter.t_com$rpl$specter21974.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter21974");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21974.
 */
com.rpl.specter.__GT_t_com$rpl$specter21974 = (function com$rpl$specter$__GT_t_com$rpl$specter21974(afn__$1,meta21975){
return (new com.rpl.specter.t_com$rpl$specter21974(afn__$1,meta21975));
});

}

return (new com.rpl.specter.t_com$rpl$specter21974(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__21979 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__21979) : com.rpl.specter.terminal.call(null,G__21979));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21980 = (function (meta21981){
this.meta21981 = meta21981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21982,meta21981__$1){
var self__ = this;
var _21982__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21980(meta21981__$1));
});

com.rpl.specter.t_com$rpl$specter21980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21982){
var self__ = this;
var _21982__$1 = this;
return self__.meta21981;
});

com.rpl.specter.t_com$rpl$specter21980.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21980.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21980.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21981","meta21981",191697595,null)], null);
});

com.rpl.specter.t_com$rpl$specter21980.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21980.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21980";

com.rpl.specter.t_com$rpl$specter21980.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter21980");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21980.
 */
com.rpl.specter.__GT_t_com$rpl$specter21980 = (function com$rpl$specter$__GT_t_com$rpl$specter21980(meta21981){
return (new com.rpl.specter.t_com$rpl$specter21980(meta21981));
});

}

return (new com.rpl.specter.t_com$rpl$specter21980(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if(!((res == null))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21986 = (function (meta21987){
this.meta21987 = meta21987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter21986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21988,meta21987__$1){
var self__ = this;
var _21988__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21986(meta21987__$1));
});

com.rpl.specter.t_com$rpl$specter21986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21988){
var self__ = this;
var _21988__$1 = this;
return self__.meta21987;
});

com.rpl.specter.t_com$rpl$specter21986.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter21986.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter21986.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if(!((res == null))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter21986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21987","meta21987",657094041,null)], null);
});

com.rpl.specter.t_com$rpl$specter21986.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter21986.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21986";

com.rpl.specter.t_com$rpl$specter21986.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter21986");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21986.
 */
com.rpl.specter.__GT_t_com$rpl$specter21986 = (function com$rpl$specter$__GT_t_com$rpl$specter21986(meta21987){
return (new com.rpl.specter.t_com$rpl$specter21986(meta21987));
});

}

return (new com.rpl.specter.t_com$rpl$specter21986(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__13605__auto__,v){
var ret__13606__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22009 = (function (meta22010){
this.meta22010 = meta22010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22011,meta22010__$1){
var self__ = this;
var _22011__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22009(meta22010__$1));
});

com.rpl.specter.t_com$rpl$specter22009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22011){
var self__ = this;
var _22011__$1 = this;
return self__.meta22010;
});

com.rpl.specter.t_com$rpl$specter22009.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22009.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19040__auto____$1){
return (function (curr__13605__auto__,v){
var ret__13606__auto__ = next_fn(v);
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
}
}
});})(next_fn,this__19040__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.t_com$rpl$specter22009.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter22009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22010","meta22010",983061978,null)], null);
});

com.rpl.specter.t_com$rpl$specter22009.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22009.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22009";

com.rpl.specter.t_com$rpl$specter22009.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22009");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22009.
 */
com.rpl.specter.__GT_t_com$rpl$specter22009 = (function com$rpl$specter$__GT_t_com$rpl$specter22009(meta22010){
return (new com.rpl.specter.t_com$rpl$specter22009(meta22010));
});

}

return (new com.rpl.specter.t_com$rpl$specter22009(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__13605__auto__,k){
var ret__13606__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22042 = (function (meta22043){
this.meta22043 = meta22043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22044,meta22043__$1){
var self__ = this;
var _22044__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22042(meta22043__$1));
});

com.rpl.specter.t_com$rpl$specter22042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22044){
var self__ = this;
var _22044__$1 = this;
return self__.meta22043;
});

com.rpl.specter.t_com$rpl$specter22042.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22042.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19040__auto____$1){
return (function (curr__13605__auto__,k){
var ret__13606__auto__ = next_fn(k);
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
}
}
});})(next_fn,this__19040__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.t_com$rpl$specter22042.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter22042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22043","meta22043",-557522766,null)], null);
});

com.rpl.specter.t_com$rpl$specter22042.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22042.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22042";

com.rpl.specter.t_com$rpl$specter22042.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22042");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22042.
 */
com.rpl.specter.__GT_t_com$rpl$specter22042 = (function com$rpl$specter$__GT_t_com$rpl$specter22042(meta22043){
return (new com.rpl.specter.t_com$rpl$specter22042(meta22043));
});

}

return (new com.rpl.specter.t_com$rpl$specter22042(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22066 = (function (meta22067){
this.meta22067 = meta22067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22068,meta22067__$1){
var self__ = this;
var _22068__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22066(meta22067__$1));
});

com.rpl.specter.t_com$rpl$specter22066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22068){
var self__ = this;
var _22068__$1 = this;
return self__.meta22067;
});

com.rpl.specter.t_com$rpl$specter22066.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22066.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__22077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,structure);
var G__22078 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__22077,G__22078) : next_fn__19835__auto__.call(null,G__22077,G__22078));
});

com.rpl.specter.t_com$rpl$specter22066.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__22080 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,structure);
var G__22081 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__22080,G__22081) : next_fn__19835__auto__.call(null,G__22080,G__22081));
});

com.rpl.specter.t_com$rpl$specter22066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22067","meta22067",-1270496073,null)], null);
});

com.rpl.specter.t_com$rpl$specter22066.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22066.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22066";

com.rpl.specter.t_com$rpl$specter22066.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22066");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22066.
 */
com.rpl.specter.__GT_t_com$rpl$specter22066 = (function com$rpl$specter$__GT_t_com$rpl$specter22066(meta22067){
return (new com.rpl.specter.t_com$rpl$specter22066(meta22067));
});

}

return (new com.rpl.specter.t_com$rpl$specter22066(null));
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
var G__22098 = structure;
var G__22100 = s;
var G__22101 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__22102 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__22098,G__22100,G__22101,G__22102) : com.rpl.specter.navs.srange_transform.call(null,G__22098,G__22100,G__22101,G__22102));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22107 = (function (start_index_fn,end_index_fn,meta22108){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta22108 = meta22108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22109,meta22108__$1){
var self__ = this;
var _22109__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22107(self__.start_index_fn,self__.end_index_fn,meta22108__$1));
});

com.rpl.specter.t_com$rpl$specter22107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22109){
var self__ = this;
var _22109__$1 = this;
return self__.meta22108;
});

com.rpl.specter.t_com$rpl$specter22107.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22107.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
});

com.rpl.specter.t_com$rpl$specter22107.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__22119 = structure;
var G__22120 = s;
var G__22121 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__22122 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__22119,G__22120,G__22121,G__22122) : com.rpl.specter.navs.srange_transform.call(null,G__22119,G__22120,G__22121,G__22122));
});

com.rpl.specter.t_com$rpl$specter22107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta22108","meta22108",1552213266,null)], null);
});

com.rpl.specter.t_com$rpl$specter22107.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22107.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22107";

com.rpl.specter.t_com$rpl$specter22107.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22107");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22107.
 */
com.rpl.specter.__GT_t_com$rpl$specter22107 = (function com$rpl$specter$__GT_t_com$rpl$specter22107(start_index_fn__$1,end_index_fn__$1,meta22108){
return (new com.rpl.specter.t_com$rpl$specter22107(start_index_fn__$1,end_index_fn__$1,meta22108));
});

}

return (new com.rpl.specter.t_com$rpl$specter22107(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22135 = (function (start,end,meta22136){
this.start = start;
this.end = end;
this.meta22136 = meta22136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22137,meta22136__$1){
var self__ = this;
var _22137__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22135(self__.start,self__.end,meta22136__$1));
});

com.rpl.specter.t_com$rpl$specter22135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22137){
var self__ = this;
var _22137__$1 = this;
return self__.meta22136;
});

com.rpl.specter.t_com$rpl$specter22135.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22135.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter22135.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter22135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta22136","meta22136",-1610764535,null)], null);
});

com.rpl.specter.t_com$rpl$specter22135.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22135.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22135";

com.rpl.specter.t_com$rpl$specter22135.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22135");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22135.
 */
com.rpl.specter.__GT_t_com$rpl$specter22135 = (function com$rpl$specter$__GT_t_com$rpl$specter22135(start__$1,end__$1,meta22136){
return (new com.rpl.specter.t_com$rpl$specter22135(start__$1,end__$1,meta22136));
});

}

return (new com.rpl.specter.t_com$rpl$specter22135(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__13605__auto__,p__22159){
var vec__22160 = p__22159;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22160,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22160,(1),null);
var ret__13606__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22165 = (function (pred,meta22166){
this.pred = pred;
this.meta22166 = meta22166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22167,meta22166__$1){
var self__ = this;
var _22167__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22165(self__.pred,meta22166__$1));
});

com.rpl.specter.t_com$rpl$specter22165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22167){
var self__ = this;
var _22167__$1 = this;
return self__.meta22166;
});

com.rpl.specter.t_com$rpl$specter22165.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22165.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19040__auto____$1){
return (function (curr__13605__auto__,p__22169){
var vec__22170 = p__22169;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22170,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22170,(1),null);
var ret__13606__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
}
}
});})(next_fn,this__19040__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter22165.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter22165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta22166","meta22166",698156784,null)], null);
});

com.rpl.specter.t_com$rpl$specter22165.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22165.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22165";

com.rpl.specter.t_com$rpl$specter22165.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22165");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22165.
 */
com.rpl.specter.__GT_t_com$rpl$specter22165 = (function com$rpl$specter$__GT_t_com$rpl$specter22165(pred__$1,meta22166){
return (new com.rpl.specter.t_com$rpl$specter22165(pred__$1,meta22166));
});

}

return (new com.rpl.specter.t_com$rpl$specter22165(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__22184 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22184) : next_fn.call(null,G__22184));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = (function (){var G__22185 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22185) : next_fn.call(null,G__22185));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22186 = (function (meta22187){
this.meta22187 = meta22187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22188,meta22187__$1){
var self__ = this;
var _22188__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22186(meta22187__$1));
});

com.rpl.specter.t_com$rpl$specter22186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22188){
var self__ = this;
var _22188__$1 = this;
return self__.meta22187;
});

com.rpl.specter.t_com$rpl$specter22186.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22186.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter22186.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter22186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22187","meta22187",-1131515686,null)], null);
});

com.rpl.specter.t_com$rpl$specter22186.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22186.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22186";

com.rpl.specter.t_com$rpl$specter22186.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22186");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22186.
 */
com.rpl.specter.__GT_t_com$rpl$specter22186 = (function com$rpl$specter$__GT_t_com$rpl$specter22186(meta22187){
return (new com.rpl.specter.t_com$rpl$specter22186(meta22187));
});

}

return (new com.rpl.specter.t_com$rpl$specter22186(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__22198 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22198) : next_fn.call(null,G__22198));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__22199 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22199) : next_fn.call(null,G__22199));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22200 = (function (meta22201){
this.meta22201 = meta22201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22202,meta22201__$1){
var self__ = this;
var _22202__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22200(meta22201__$1));
});

com.rpl.specter.t_com$rpl$specter22200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22202){
var self__ = this;
var _22202__$1 = this;
return self__.meta22201;
});

com.rpl.specter.t_com$rpl$specter22200.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22200.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter22200.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter22200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22201","meta22201",-1772022083,null)], null);
});

com.rpl.specter.t_com$rpl$specter22200.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22200.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22200";

com.rpl.specter.t_com$rpl$specter22200.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22200");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22200.
 */
com.rpl.specter.__GT_t_com$rpl$specter22200 = (function com$rpl$specter$__GT_t_com$rpl$specter22200(meta22201){
return (new com.rpl.specter.t_com$rpl$specter22200(meta22201));
});

}

return (new com.rpl.specter.t_com$rpl$specter22200(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22214 = (function (meta22215){
this.meta22215 = meta22215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22216,meta22215__$1){
var self__ = this;
var _22216__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22214(meta22215__$1));
});

com.rpl.specter.t_com$rpl$specter22214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22216){
var self__ = this;
var _22216__$1 = this;
return self__.meta22215;
});

com.rpl.specter.t_com$rpl$specter22214.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22214.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter22214.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
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

com.rpl.specter.t_com$rpl$specter22214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22215","meta22215",939221642,null)], null);
});

com.rpl.specter.t_com$rpl$specter22214.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22214.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22214";

com.rpl.specter.t_com$rpl$specter22214.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22214");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22214.
 */
com.rpl.specter.__GT_t_com$rpl$specter22214 = (function com$rpl$specter$__GT_t_com$rpl$specter22214(meta22215){
return (new com.rpl.specter.t_com$rpl$specter22214(meta22215));
});

}

return (new com.rpl.specter.t_com$rpl$specter22214(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22237 = (function (meta22238){
this.meta22238 = meta22238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22239,meta22238__$1){
var self__ = this;
var _22239__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22237(meta22238__$1));
});

com.rpl.specter.t_com$rpl$specter22237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22239){
var self__ = this;
var _22239__$1 = this;
return self__.meta22238;
});

com.rpl.specter.t_com$rpl$specter22237.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22237.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter22237.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter22237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22238","meta22238",2093670795,null)], null);
});

com.rpl.specter.t_com$rpl$specter22237.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22237.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22237";

com.rpl.specter.t_com$rpl$specter22237.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22237");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22237.
 */
com.rpl.specter.__GT_t_com$rpl$specter22237 = (function com$rpl$specter$__GT_t_com$rpl$specter22237(meta22238){
return (new com.rpl.specter.t_com$rpl$specter22237(meta22238));
});

}

return (new com.rpl.specter.t_com$rpl$specter22237(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22251 = (function (meta22252){
this.meta22252 = meta22252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22253,meta22252__$1){
var self__ = this;
var _22253__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22251(meta22252__$1));
});

com.rpl.specter.t_com$rpl$specter22251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22253){
var self__ = this;
var _22253__$1 = this;
return self__.meta22252;
});

com.rpl.specter.t_com$rpl$specter22251.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22251.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter22251.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter22251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22252","meta22252",-828970934,null)], null);
});

com.rpl.specter.t_com$rpl$specter22251.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22251.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22251";

com.rpl.specter.t_com$rpl$specter22251.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22251");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22251.
 */
com.rpl.specter.__GT_t_com$rpl$specter22251 = (function com$rpl$specter$__GT_t_com$rpl$specter22251(meta22252){
return (new com.rpl.specter.t_com$rpl$specter22251(meta22252));
});

}

return (new com.rpl.specter.t_com$rpl$specter22251(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__22258 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22258) : next_fn.call(null,G__22258));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22260 = (function (aset,meta22261){
this.aset = aset;
this.meta22261 = meta22261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22262,meta22261__$1){
var self__ = this;
var _22262__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22260(self__.aset,meta22261__$1));
});

com.rpl.specter.t_com$rpl$specter22260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22262){
var self__ = this;
var _22262__$1 = this;
return self__.meta22261;
});

com.rpl.specter.t_com$rpl$specter22260.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22260.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter22260.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter22260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta22261","meta22261",1522382159,null)], null);
});

com.rpl.specter.t_com$rpl$specter22260.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22260.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22260";

com.rpl.specter.t_com$rpl$specter22260.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22260");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22260.
 */
com.rpl.specter.__GT_t_com$rpl$specter22260 = (function com$rpl$specter$__GT_t_com$rpl$specter22260(aset__$1,meta22261){
return (new com.rpl.specter.t_com$rpl$specter22260(aset__$1,meta22261));
});

}

return (new com.rpl.specter.t_com$rpl$specter22260(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__22274 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22274) : next_fn.call(null,G__22274));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22277 = (function (m_keys,meta22278){
this.m_keys = m_keys;
this.meta22278 = meta22278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22279,meta22278__$1){
var self__ = this;
var _22279__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22277(self__.m_keys,meta22278__$1));
});

com.rpl.specter.t_com$rpl$specter22277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22279){
var self__ = this;
var _22279__$1 = this;
return self__.meta22278;
});

com.rpl.specter.t_com$rpl$specter22277.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22277.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter22277.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
});

com.rpl.specter.t_com$rpl$specter22277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta22278","meta22278",797072405,null)], null);
});

com.rpl.specter.t_com$rpl$specter22277.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22277.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22277";

com.rpl.specter.t_com$rpl$specter22277.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22277");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22277.
 */
com.rpl.specter.__GT_t_com$rpl$specter22277 = (function com$rpl$specter$__GT_t_com$rpl$specter22277(m_keys__$1,meta22278){
return (new com.rpl.specter.t_com$rpl$specter22277(m_keys__$1,meta22278));
});

}

return (new com.rpl.specter.t_com$rpl$specter22277(m_keys,null));
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
var G__22309__delegate = function (path){
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22301 = (function (path,late,meta22302){
this.path = path;
this.late = late;
this.meta22302 = meta22302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22303,meta22302__$1){
var self__ = this;
var _22303__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22301(self__.path,self__.late,meta22302__$1));
});

com.rpl.specter.t_com$rpl$specter22301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22303){
var self__ = this;
var _22303__$1 = this;
return self__.meta22302;
});

com.rpl.specter.t_com$rpl$specter22301.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22301.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter22301.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__22304 = self__.late;
var G__22305 = ((function (G__22304,select_result,transformed,values_to_insert,next_fn,this__19040__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__22304,select_result,transformed,values_to_insert,next_fn,this__19040__auto____$1))
;
var G__22306 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__22304,G__22305,G__22306) : com.rpl.specter.compiled_transform.call(null,G__22304,G__22305,G__22306));
});

com.rpl.specter.t_com$rpl$specter22301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta22302","meta22302",-1720204903,null)], null);
});

com.rpl.specter.t_com$rpl$specter22301.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22301.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22301";

com.rpl.specter.t_com$rpl$specter22301.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22301");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22301.
 */
com.rpl.specter.__GT_t_com$rpl$specter22301 = (function com$rpl$specter$__GT_t_com$rpl$specter22301(path__$1,late__$1,meta22302){
return (new com.rpl.specter.t_com$rpl$specter22301(path__$1,late__$1,meta22302));
});

}

return (new com.rpl.specter.t_com$rpl$specter22301(path,late,null));
}));
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
};
var G__22309 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__22314__i = 0, G__22314__a = new Array(arguments.length -  0);
while (G__22314__i < G__22314__a.length) {G__22314__a[G__22314__i] = arguments[G__22314__i + 0]; ++G__22314__i;}
  path = new cljs.core.IndexedSeq(G__22314__a,0,null);
} 
return G__22309__delegate.call(this,path);};
G__22309.cljs$lang$maxFixedArity = 0;
G__22309.cljs$lang$applyTo = (function (arglist__22315){
var path = cljs.core.seq(arglist__22315);
return G__22309__delegate(path);
});
G__22309.cljs$core$IFn$_invoke$arity$variadic = G__22309__delegate;
return G__22309;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22319 = (function (key,meta22320){
this.key = key;
this.meta22320 = meta22320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22321,meta22320__$1){
var self__ = this;
var _22321__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22319(self__.key,meta22320__$1));
});

com.rpl.specter.t_com$rpl$specter22319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22321){
var self__ = this;
var _22321__$1 = this;
return self__.meta22320;
});

com.rpl.specter.t_com$rpl$specter22319.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22319.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter22319.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter22319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta22320","meta22320",2141314122,null)], null);
});

com.rpl.specter.t_com$rpl$specter22319.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22319.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22319";

com.rpl.specter.t_com$rpl$specter22319.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22319");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22319.
 */
com.rpl.specter.__GT_t_com$rpl$specter22319 = (function com$rpl$specter$__GT_t_com$rpl$specter22319(key__$1,meta22320){
return (new com.rpl.specter.t_com$rpl$specter22319(key__$1,meta22320));
});

}

return (new com.rpl.specter.t_com$rpl$specter22319(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22336 = (function (elem,meta22337){
this.elem = elem;
this.meta22337 = meta22337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22338,meta22337__$1){
var self__ = this;
var _22338__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22336(self__.elem,meta22337__$1));
});

com.rpl.specter.t_com$rpl$specter22336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22338){
var self__ = this;
var _22338__$1 = this;
return self__.meta22337;
});

com.rpl.specter.t_com$rpl$specter22336.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22336.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter22336.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter22336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta22337","meta22337",1510105594,null)], null);
});

com.rpl.specter.t_com$rpl$specter22336.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22336.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22336";

com.rpl.specter.t_com$rpl$specter22336.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22336");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22336.
 */
com.rpl.specter.__GT_t_com$rpl$specter22336 = (function com$rpl$specter$__GT_t_com$rpl$specter22336(elem__$1,meta22337){
return (new com.rpl.specter.t_com$rpl$specter22336(elem__$1,meta22337));
});

}

return (new com.rpl.specter.t_com$rpl$specter22336(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22359 = (function (index,meta22360){
this.index = index;
this.meta22360 = meta22360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22361,meta22360__$1){
var self__ = this;
var _22361__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22359(self__.index,meta22360__$1));
});

com.rpl.specter.t_com$rpl$specter22359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22361){
var self__ = this;
var _22361__$1 = this;
return self__.meta22360;
});

com.rpl.specter.t_com$rpl$specter22359.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22359.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter22359.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22368;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22369 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,751,754,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache22368 = info22369;

return info22369;
})():info__19843__auto__);
var precompiled22370 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22378 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled22370.cljs$core$IFn$_invoke$arity$1 ? precompiled22370.cljs$core$IFn$_invoke$arity$1(G__22378) : precompiled22370.call(null,G__22378));
} else {
return precompiled22370;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter22359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta22360","meta22360",-1326986685,null)], null);
});

com.rpl.specter.t_com$rpl$specter22359.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22359.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22359";

com.rpl.specter.t_com$rpl$specter22359.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22359");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22359.
 */
com.rpl.specter.__GT_t_com$rpl$specter22359 = (function com$rpl$specter$__GT_t_com$rpl$specter22359(index__$1,meta22360){
return (new com.rpl.specter.t_com$rpl$specter22359(index__$1,meta22360));
});

}

return (new com.rpl.specter.t_com$rpl$specter22359(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22394 = (function (i,meta22395){
this.i = i;
this.meta22395 = meta22395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22396,meta22395__$1){
var self__ = this;
var _22396__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22394(self__.i,meta22395__$1));
});

com.rpl.specter.t_com$rpl$specter22394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22396){
var self__ = this;
var _22396__$1 = this;
return self__.meta22395;
});

com.rpl.specter.t_com$rpl$specter22394.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22394.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter22394.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__22437 = (j - (1));
var G__22438 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__22437;
s = G__22438;
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
var G__22441 = (j + (1));
var G__22442 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__22441;
s = G__22442;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22409;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22410 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,964,967,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache22409 = info22410;

return info22410;
})():info__19843__auto__);
var precompiled22411 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled22411.cljs$core$IFn$_invoke$arity$1 ? precompiled22411.cljs$core$IFn$_invoke$arity$1(G__22415) : precompiled22411.call(null,G__22415));
} else {
return precompiled22411;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22416;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22417 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,959,961,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache22416 = info22417;

return info22417;
})():info__19843__auto__);
var precompiled22418 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled22418.cljs$core$IFn$_invoke$arity$1 ? precompiled22418.cljs$core$IFn$_invoke$arity$1(G__22424) : precompiled22418.call(null,G__22424));
} else {
return precompiled22418;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter22394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta22395","meta22395",984856266,null)], null);
});

com.rpl.specter.t_com$rpl$specter22394.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22394.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22394";

com.rpl.specter.t_com$rpl$specter22394.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22394");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22394.
 */
com.rpl.specter.__GT_t_com$rpl$specter22394 = (function com$rpl$specter$__GT_t_com$rpl$specter22394(i__$1,meta22395){
return (new com.rpl.specter.t_com$rpl$specter22394(i__$1,meta22395));
});

}

return (new com.rpl.specter.t_com$rpl$specter22394(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i){
return (function (curr__13605__auto__,e){
var ret__13606__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__22463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22463) : next_fn.call(null,G__22463));
})()
;
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
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
var vec__22467 = (function (){var G__22472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22472) : next_fn.call(null,G__22472));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__22467,newi_STAR_,newe,newi,indices){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22475;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22476 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,675,678,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__19843__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices){
return (function (p1__22458_SHARP_){
return (p1__22458_SHARP_ >= (curri + (1)));
});})(info__19843__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__19843__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices){
return (function (p1__22459_SHARP_){
return (p1__22459_SHARP_ <= newi);
});})(info__19843__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache22475 = info22476;

return info22476;
})():info__19843__auto__);
var precompiled22477 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22483 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices){
return (function (p1__22458_SHARP_){
return (p1__22458_SHARP_ >= (curri + (1)));
});})(info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices))
,((function (info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices){
return (function (p1__22459_SHARP_){
return (p1__22459_SHARP_ <= newi);
});})(info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices))
], null),com.rpl.specter.ALL,((function (info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices){
return (function (p1__22458_SHARP_){
return (p1__22458_SHARP_ >= (curri + (1)));
});})(info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices))
,((function (info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices){
return (function (p1__22459_SHARP_){
return (p1__22459_SHARP_ <= newi);
});})(info__19843__auto__,info__19843__auto____$1,precompiled22477,dynamic_QMARK___19844__auto__,ii2,curri,vec__22467,newi_STAR_,newe,newi,indices))
], null);
return (precompiled22477.cljs$core$IFn$_invoke$arity$1 ? precompiled22477.cljs$core$IFn$_invoke$arity$1(G__22483) : precompiled22477.call(null,G__22483));
} else {
return precompiled22477;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__22467,newi_STAR_,newe,newi,indices))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22485;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22486 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,979,982,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache22485 = info22486;

return info22486;
})():info__19843__auto__);
var precompiled22487 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled22487.cljs$core$IFn$_invoke$arity$1 ? precompiled22487.cljs$core$IFn$_invoke$arity$1(G__22489) : precompiled22487.call(null,G__22489));
} else {
return precompiled22487;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22492;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22493 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,959,961,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache22492 = info22493;

return info22493;
})():info__19843__auto__);
var precompiled22494 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled22494.cljs$core$IFn$_invoke$arity$1 ? precompiled22494.cljs$core$IFn$_invoke$arity$1(G__22498) : precompiled22494.call(null,G__22498));
} else {
return precompiled22494;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22501 = (function (start,meta22502){
this.start = start;
this.meta22502 = meta22502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22503,meta22502__$1){
var self__ = this;
var _22503__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22501(self__.start,meta22502__$1));
});

com.rpl.specter.t_com$rpl$specter22501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22503){
var self__ = this;
var _22503__$1 = this;
return self__.meta22502;
});

com.rpl.specter.t_com$rpl$specter22501.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22501.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,next_fn,this__19040__auto____$1){
return (function (curr__13605__auto__,e){
var ret__13606__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
}
}
});})(i,next_fn,this__19040__auto____$1))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.t_com$rpl$specter22501.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,next_fn,this__19040__auto____$1){
return (function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__22511 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22514;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22515 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,675,678,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__19843__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1){
return (function (p1__22458_SHARP_){
return (p1__22458_SHARP_ >= (curri + (1)));
});})(info__19843__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__19843__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1){
return (function (p1__22459_SHARP_){
return (p1__22459_SHARP_ <= newi);
});})(info__19843__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__22458#","p1__22458#",-261661938,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__22459#","p1__22459#",1830548923,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache22514 = info22515;

return info22515;
})():info__19843__auto__);
var precompiled22516 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22517 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1){
return (function (p1__22458_SHARP_){
return (p1__22458_SHARP_ >= (curri + (1)));
});})(info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1))
,((function (info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1){
return (function (p1__22459_SHARP_){
return (p1__22459_SHARP_ <= newi);
});})(info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1))
], null),com.rpl.specter.ALL,((function (info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1){
return (function (p1__22458_SHARP_){
return (p1__22458_SHARP_ >= (curri + (1)));
});})(info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1))
,((function (info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1){
return (function (p1__22459_SHARP_){
return (p1__22459_SHARP_ <= newi);
});})(info__19843__auto__,info__19843__auto____$1,precompiled22516,dynamic_QMARK___19844__auto__,ii2,curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1))
], null);
return (precompiled22516.cljs$core$IFn$_invoke$arity$1 ? precompiled22516.cljs$core$IFn$_invoke$arity$1(G__22517) : precompiled22516.call(null,G__22517));
} else {
return precompiled22516;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__22511,newi_STAR_,newe,newi,indices,next_fn,this__19040__auto____$1))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22518;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22519 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,979,982,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache22518 = info22519;

return info22519;
})():info__19843__auto__);
var precompiled22520 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled22520.cljs$core$IFn$_invoke$arity$1 ? precompiled22520.cljs$core$IFn$_invoke$arity$1(G__22522) : precompiled22520.call(null,G__22522));
} else {
return precompiled22520;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__19843__auto__ = com.rpl.specter.pathcache22524;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info22525 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,959,961,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache22524 = info22525;

return info22525;
})():info__19843__auto__);
var precompiled22526 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__22529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled22526.cljs$core$IFn$_invoke$arity$1 ? precompiled22526.cljs$core$IFn$_invoke$arity$1(G__22529) : precompiled22526.call(null,G__22529));
} else {
return precompiled22526;
}
})(),newe,s));
});})(indices,next_fn,this__19040__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter22501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta22502","meta22502",1842581124,null)], null);
});

com.rpl.specter.t_com$rpl$specter22501.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22501.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22501";

com.rpl.specter.t_com$rpl$specter22501.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22501");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22501.
 */
com.rpl.specter.__GT_t_com$rpl$specter22501 = (function com$rpl$specter$__GT_t_com$rpl$specter22501(start__$1,meta22502){
return (new com.rpl.specter.t_com$rpl$specter22501(start__$1,meta22502));
});

}

return (new com.rpl.specter.t_com$rpl$specter22501(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22590 = (function (afn,meta22591){
this.afn = afn;
this.meta22591 = meta22591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22592,meta22591__$1){
var self__ = this;
var _22592__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22590(self__.afn,meta22591__$1));
});

com.rpl.specter.t_com$rpl$specter22590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22592){
var self__ = this;
var _22592__$1 = this;
return self__.meta22591;
});

com.rpl.specter.t_com$rpl$specter22590.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22590.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__22597 = vals;
var G__22598 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__22597,G__22598) : next_fn.call(null,G__22597,G__22598));
});

com.rpl.specter.t_com$rpl$specter22590.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__22601 = vals;
var G__22602 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__22601,G__22602) : next_fn.call(null,G__22601,G__22602));
});

com.rpl.specter.t_com$rpl$specter22590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta22591","meta22591",-79509865,null)], null);
});

com.rpl.specter.t_com$rpl$specter22590.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22590.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22590";

com.rpl.specter.t_com$rpl$specter22590.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22590");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22590.
 */
com.rpl.specter.__GT_t_com$rpl$specter22590 = (function com$rpl$specter$__GT_t_com$rpl$specter22590(afn__$1,meta22591){
return (new com.rpl.specter.t_com$rpl$specter22590(afn__$1,meta22591));
});

}

return (new com.rpl.specter.t_com$rpl$specter22590(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__22612 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22612) : next_fn.call(null,G__22612));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__22613 = (function (){var G__22614 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22614) : next_fn.call(null,G__22614));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__22613) : unparse_fn.call(null,G__22613));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22618 = (function (parse_fn,unparse_fn,meta22619){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta22619 = meta22619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22620,meta22619__$1){
var self__ = this;
var _22620__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22618(self__.parse_fn,self__.unparse_fn,meta22619__$1));
});

com.rpl.specter.t_com$rpl$specter22618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22620){
var self__ = this;
var _22620__$1 = this;
return self__.meta22619;
});

com.rpl.specter.t_com$rpl$specter22618.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22618.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter22618.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
var G__22622 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__22622) : self__.unparse_fn.call(null,G__22622));
});

com.rpl.specter.t_com$rpl$specter22618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta22619","meta22619",810990429,null)], null);
});

com.rpl.specter.t_com$rpl$specter22618.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22618.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22618";

com.rpl.specter.t_com$rpl$specter22618.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22618");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22618.
 */
com.rpl.specter.__GT_t_com$rpl$specter22618 = (function com$rpl$specter$__GT_t_com$rpl$specter22618(parse_fn__$1,unparse_fn__$1,meta22619){
return (new com.rpl.specter.t_com$rpl$specter22618(parse_fn__$1,unparse_fn__$1,meta22619));
});

}

return (new com.rpl.specter.t_com$rpl$specter22618(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__22648 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22648) : next_fn.call(null,G__22648));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22649 = (function (meta22650){
this.meta22650 = meta22650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22651,meta22650__$1){
var self__ = this;
var _22651__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22649(meta22650__$1));
});

com.rpl.specter.t_com$rpl$specter22649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22651){
var self__ = this;
var _22651__$1 = this;
return self__.meta22650;
});

com.rpl.specter.t_com$rpl$specter22649.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22649.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});

com.rpl.specter.t_com$rpl$specter22649.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter22649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22650","meta22650",-997283352,null)], null);
});

com.rpl.specter.t_com$rpl$specter22649.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22649.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22649";

com.rpl.specter.t_com$rpl$specter22649.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22649");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22649.
 */
com.rpl.specter.__GT_t_com$rpl$specter22649 = (function com$rpl$specter$__GT_t_com$rpl$specter22649(meta22650){
return (new com.rpl.specter.t_com$rpl$specter22649(meta22650));
});

}

return (new com.rpl.specter.t_com$rpl$specter22649(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__13605__auto__,s){
var ret__13606__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22671 = (function (re,meta22672){
this.re = re;
this.meta22672 = meta22672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22673,meta22672__$1){
var self__ = this;
var _22673__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22671(self__.re,meta22672__$1));
});

com.rpl.specter.t_com$rpl$specter22671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22673){
var self__ = this;
var _22673__$1 = this;
return self__.meta22672;
});

com.rpl.specter.t_com$rpl$specter22671.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22671.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__19040__auto____$1){
return (function (curr__13605__auto__,s){
var ret__13606__auto__ = next_fn(s);
if((ret__13606__auto__ === com.rpl.specter.NONE)){
return curr__13605__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__13606__auto__)){
return cljs.core.reduced(ret__13606__auto__);
} else {
return ret__13606__auto__;
}
}
});})(next_fn,this__19040__auto____$1))
,com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
});

com.rpl.specter.t_com$rpl$specter22671.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return clojure.string.replace(structure,self__.re,next_fn);
});

com.rpl.specter.t_com$rpl$specter22671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta22672","meta22672",-1470354383,null)], null);
});

com.rpl.specter.t_com$rpl$specter22671.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22671.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22671";

com.rpl.specter.t_com$rpl$specter22671.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22671");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22671.
 */
com.rpl.specter.__GT_t_com$rpl$specter22671 = (function com$rpl$specter$__GT_t_com$rpl$specter22671(re__$1,meta22672){
return (new com.rpl.specter.t_com$rpl$specter22671(re__$1,meta22672));
});

}

return (new com.rpl.specter.t_com$rpl$specter22671(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__22695__delegate = function (path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
return afn;
} else {
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22689 = (function (path,temp__5455__auto__,late,meta22690){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta22690 = meta22690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_22691,meta22690__$1){
var self__ = this;
var _22691__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22689(self__.path,self__.temp__5455__auto__,self__.late,meta22690__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_22691){
var self__ = this;
var _22691__$1 = this;
return self__.meta22690;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22689.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22689.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__22685_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__22685_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22689.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__22686_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__22686_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22689.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta22690","meta22690",2141803684,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22689.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22689.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22689";

com.rpl.specter.t_com$rpl$specter22689.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22689");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22689.
 */
com.rpl.specter.__GT_t_com$rpl$specter22689 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter22689(path__$1,temp__5455__auto____$1,late__$1,meta22690){
return (new com.rpl.specter.t_com$rpl$specter22689(path__$1,temp__5455__auto____$1,late__$1,meta22690));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter22689(path,temp__5455__auto__,late,null));
});})(temp__5455__auto__))
);
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
}
};
var G__22695 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__22703__i = 0, G__22703__a = new Array(arguments.length -  0);
while (G__22703__i < G__22703__a.length) {G__22703__a[G__22703__i] = arguments[G__22703__i + 0]; ++G__22703__i;}
  path = new cljs.core.IndexedSeq(G__22703__a,0,null);
} 
return G__22695__delegate.call(this,path);};
G__22695.cljs$lang$maxFixedArity = 0;
G__22695.cljs$lang$applyTo = (function (arglist__22704){
var path = cljs.core.seq(arglist__22704);
return G__22695__delegate(path);
});
G__22695.cljs$core$IFn$_invoke$arity$variadic = G__22695__delegate;
return G__22695;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__22761__delegate = function (path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
return ((function (afn,temp__5455__auto__){
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
;})(afn,temp__5455__auto__))
} else {
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22717 = (function (path,temp__5455__auto__,late,meta22718){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta22718 = meta22718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_22719,meta22718__$1){
var self__ = this;
var _22719__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22717(self__.path,self__.temp__5455__auto__,self__.late,meta22718__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_22719){
var self__ = this;
var _22719__$1 = this;
return self__.meta22718;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22717.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22717.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__22709_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__22709_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22717.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__22710_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__22710_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22717.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta22718","meta22718",1181263232,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter22717.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22717.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22717";

com.rpl.specter.t_com$rpl$specter22717.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22717");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22717.
 */
com.rpl.specter.__GT_t_com$rpl$specter22717 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter22717(path__$1,temp__5455__auto____$1,late__$1,meta22718){
return (new com.rpl.specter.t_com$rpl$specter22717(path__$1,temp__5455__auto____$1,late__$1,meta22718));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter22717(path,temp__5455__auto__,late,null));
});})(temp__5455__auto__))
);
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
}
};
var G__22761 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__22765__i = 0, G__22765__a = new Array(arguments.length -  0);
while (G__22765__i < G__22765__a.length) {G__22765__a[G__22765__i] = arguments[G__22765__i + 0]; ++G__22765__i;}
  path = new cljs.core.IndexedSeq(G__22765__a,0,null);
} 
return G__22761__delegate.call(this,path);};
G__22761.cljs$lang$maxFixedArity = 0;
G__22761.cljs$lang$applyTo = (function (arglist__22766){
var path = cljs.core.seq(arglist__22766);
return G__22761__delegate(path);
});
G__22761.cljs$core$IFn$_invoke$arity$variadic = G__22761__delegate;
return G__22761;
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
var G__22769__delegate = function (path){
var G__22767 = com.rpl.specter.ALL;
var G__22768 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__22767,G__22768) : com.rpl.specter.subselect.call(null,G__22767,G__22768));
};
var G__22769 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__22770__i = 0, G__22770__a = new Array(arguments.length -  0);
while (G__22770__i < G__22770__a.length) {G__22770__a[G__22770__i] = arguments[G__22770__i + 0]; ++G__22770__i;}
  path = new cljs.core.IndexedSeq(G__22770__a,0,null);
} 
return G__22769__delegate.call(this,path);};
G__22769.cljs$lang$maxFixedArity = 0;
G__22769.cljs$lang$applyTo = (function (arglist__22771){
var path = cljs.core.seq(arglist__22771);
return G__22769__delegate(path);
});
G__22769.cljs$core$IFn$_invoke$arity$variadic = G__22769__delegate;
return G__22769;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22781 = (function (path,update_fn,late,late_fn,meta22782){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta22782 = meta22782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22783,meta22782__$1){
var self__ = this;
var _22783__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22781(self__.path,self__.update_fn,self__.late,self__.late_fn,meta22782__$1));
});

com.rpl.specter.t_com$rpl$specter22781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22783){
var self__ = this;
var _22783__$1 = this;
return self__.meta22782;
});

com.rpl.specter.t_com$rpl$specter22781.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22781.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter22781.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter22781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta22782","meta22782",35640028,null)], null);
});

com.rpl.specter.t_com$rpl$specter22781.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22781.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22781";

com.rpl.specter.t_com$rpl$specter22781.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22781");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22781.
 */
com.rpl.specter.__GT_t_com$rpl$specter22781 = (function com$rpl$specter$__GT_t_com$rpl$specter22781(path__$1,update_fn__$1,late__$1,late_fn__$1,meta22782){
return (new com.rpl.specter.t_com$rpl$specter22781(path__$1,update_fn__$1,late__$1,late_fn__$1,meta22782));
});

}

return (new com.rpl.specter.t_com$rpl$specter22781(path,update_fn,late,late_fn,null));
}));
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22799 = (function (path,reduce_fn,late,late_fn,meta22800){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta22800 = meta22800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22801,meta22800__$1){
var self__ = this;
var _22801__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22799(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta22800__$1));
});

com.rpl.specter.t_com$rpl$specter22799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22801){
var self__ = this;
var _22801__$1 = this;
return self__.meta22800;
});

com.rpl.specter.t_com$rpl$specter22799.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22799.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter22799.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter22799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta22800","meta22800",1771830452,null)], null);
});

com.rpl.specter.t_com$rpl$specter22799.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22799.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22799";

com.rpl.specter.t_com$rpl$specter22799.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22799");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22799.
 */
com.rpl.specter.__GT_t_com$rpl$specter22799 = (function com$rpl$specter$__GT_t_com$rpl$specter22799(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta22800){
return (new com.rpl.specter.t_com$rpl$specter22799(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta22800));
});

}

return (new com.rpl.specter.t_com$rpl$specter22799(path,reduce_fn,late,late_fn,null));
}));
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__22891 = (function (p1__22890_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22890_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__22891) : com.rpl.specter.pred.call(null,G__22891));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__22896 = (function (p1__22895_SHARP_){
return (p1__22895_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__22896) : com.rpl.specter.pred.call(null,G__22896));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__22898 = (function (p1__22897_SHARP_){
return (p1__22897_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__22898) : com.rpl.specter.pred.call(null,G__22898));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__22900 = (function (p1__22899_SHARP_){
return (p1__22899_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__22900) : com.rpl.specter.pred.call(null,G__22900));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__22902 = (function (p1__22901_SHARP_){
return (p1__22901_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__22902) : com.rpl.specter.pred.call(null,G__22902));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__22903_22906 = com.rpl.specter.protocols.implicit_nav;
var G__22904_22907 = "null";
var G__22905_22908 = ((function (G__22903_22906,G__22904_22907){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__22903_22906,G__22904_22907))
;
goog.object.set(G__22903_22906,G__22904_22907,G__22905_22908);
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

var G__22909_22912 = com.rpl.specter.protocols.implicit_nav;
var G__22910_22913 = "string";
var G__22911_22914 = ((function (G__22909_22912,G__22910_22913){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__22909_22912,G__22910_22913))
;
goog.object.set(G__22909_22912,G__22910_22913,G__22911_22914);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

var G__22916_22919 = com.rpl.specter.protocols.implicit_nav;
var G__22917_22920 = "number";
var G__22918_22921 = ((function (G__22916_22919,G__22917_22920){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__22916_22919,G__22917_22920))
;
goog.object.set(G__22916_22919,G__22917_22920,G__22918_22921);
cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

var G__22922_22925 = com.rpl.specter.protocols.implicit_nav;
var G__22923_22926 = "boolean";
var G__22924_22927 = ((function (G__22922_22925,G__22923_22926){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__22922_22925,G__22923_22926))
;
goog.object.set(G__22922_22925,G__22923_22926,G__22924_22927);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__22928_22931 = com.rpl.specter.protocols.implicit_nav;
var G__22929_22932 = "function";
var G__22930_22933 = ((function (G__22928_22931,G__22929_22932){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__22928_22931,G__22929_22932))
;
goog.object.set(G__22928_22931,G__22929_22932,G__22930_22933);
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
var G__22948 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22948) : next_fn.call(null,G__22948));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__22953 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22953) : next_fn.call(null,G__22953));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22956 = (function (v,meta22957){
this.v = v;
this.meta22957 = meta22957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22958,meta22957__$1){
var self__ = this;
var _22958__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22956(self__.v,meta22957__$1));
});

com.rpl.specter.t_com$rpl$specter22956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22958){
var self__ = this;
var _22958__$1 = this;
return self__.meta22957;
});

com.rpl.specter.t_com$rpl$specter22956.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22956.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter22956.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter22956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta22957","meta22957",-2012787994,null)], null);
});

com.rpl.specter.t_com$rpl$specter22956.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22956.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22956";

com.rpl.specter.t_com$rpl$specter22956.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22956");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22956.
 */
com.rpl.specter.__GT_t_com$rpl$specter22956 = (function com$rpl$specter$__GT_t_com$rpl$specter22956(v__$1,meta22957){
return (new com.rpl.specter.t_com$rpl$specter22956(v__$1,meta22957));
});

}

return (new com.rpl.specter.t_com$rpl$specter22956(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__22971 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__22971) : com.rpl.specter.nil__GT_val.call(null,G__22971));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__22972 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__22972) : com.rpl.specter.nil__GT_val.call(null,G__22972));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__22973 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__22973) : com.rpl.specter.nil__GT_val.call(null,G__22973));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__22974 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22974) : next_fn.call(null,G__22974));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__22975 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22975) : next_fn.call(null,G__22975));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22976 = (function (meta22977){
this.meta22977 = meta22977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22978,meta22977__$1){
var self__ = this;
var _22978__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22976(meta22977__$1));
});

com.rpl.specter.t_com$rpl$specter22976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22978){
var self__ = this;
var _22978__$1 = this;
return self__.meta22977;
});

com.rpl.specter.t_com$rpl$specter22976.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22976.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});

com.rpl.specter.t_com$rpl$specter22976.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter22976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22977","meta22977",90221118,null)], null);
});

com.rpl.specter.t_com$rpl$specter22976.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22976.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22976";

com.rpl.specter.t_com$rpl$specter22976.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22976");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22976.
 */
com.rpl.specter.__GT_t_com$rpl$specter22976 = (function com$rpl$specter$__GT_t_com$rpl$specter22976(meta22977){
return (new com.rpl.specter.t_com$rpl$specter22976(meta22977));
});

}

return (new com.rpl.specter.t_com$rpl$specter22976(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__22979 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22979) : next_fn.call(null,G__22979));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__22980 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22980) : next_fn.call(null,G__22980));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22981 = (function (meta22982){
this.meta22982 = meta22982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22983,meta22982__$1){
var self__ = this;
var _22983__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22981(meta22982__$1));
});

com.rpl.specter.t_com$rpl$specter22981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22983){
var self__ = this;
var _22983__$1 = this;
return self__.meta22982;
});

com.rpl.specter.t_com$rpl$specter22981.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22981.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(cljs.core.name(structure));
});

com.rpl.specter.t_com$rpl$specter22981.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
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

com.rpl.specter.t_com$rpl$specter22981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22982","meta22982",-1191047900,null)], null);
});

com.rpl.specter.t_com$rpl$specter22981.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22981.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22981";

com.rpl.specter.t_com$rpl$specter22981.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22981");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22981.
 */
com.rpl.specter.__GT_t_com$rpl$specter22981 = (function com$rpl$specter$__GT_t_com$rpl$specter22981(meta22982){
return (new com.rpl.specter.t_com$rpl$specter22981(meta22982));
});

}

return (new com.rpl.specter.t_com$rpl$specter22981(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__22989 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22989) : next_fn.call(null,G__22989));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__22991 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__22991) : next_fn.call(null,G__22991));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter22992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter22992 = (function (meta22993){
this.meta22993 = meta22993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter22992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22994,meta22993__$1){
var self__ = this;
var _22994__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter22992(meta22993__$1));
});

com.rpl.specter.t_com$rpl$specter22992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22994){
var self__ = this;
var _22994__$1 = this;
return self__.meta22993;
});

com.rpl.specter.t_com$rpl$specter22992.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter22992.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});

com.rpl.specter.t_com$rpl$specter22992.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19040__auto__,vals__19041__auto__,structure,next_fn__19042__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
var next_fn = ((function (this__19040__auto____$1){
return (function (s__19043__auto__){
return (next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19042__auto__.cljs$core$IFn$_invoke$arity$2(vals__19041__auto__,s__19043__auto__) : next_fn__19042__auto__.call(null,vals__19041__auto__,s__19043__auto__));
});})(this__19040__auto____$1))
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

com.rpl.specter.t_com$rpl$specter22992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22993","meta22993",163171648,null)], null);
});

com.rpl.specter.t_com$rpl$specter22992.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter22992.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter22992";

com.rpl.specter.t_com$rpl$specter22992.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter22992");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter22992.
 */
com.rpl.specter.__GT_t_com$rpl$specter22992 = (function com$rpl$specter$__GT_t_com$rpl$specter22992(meta22993){
return (new com.rpl.specter.t_com$rpl$specter22992(meta22993));
});

}

return (new com.rpl.specter.t_com$rpl$specter22992(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__23018__delegate = function (path){
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23010 = (function (path,late,meta23011){
this.path = path;
this.late = late;
this.meta23011 = meta23011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23012,meta23011__$1){
var self__ = this;
var _23012__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23010(self__.path,self__.late,meta23011__$1));
});

com.rpl.specter.t_com$rpl$specter23010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23012){
var self__ = this;
var _23012__$1 = this;
return self__.meta23011;
});

com.rpl.specter.t_com$rpl$specter23010.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23010.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__23014 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__23015 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__23014,G__23015) : next_fn__19835__auto__.call(null,G__23014,G__23015));
});

com.rpl.specter.t_com$rpl$specter23010.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__23016 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__23017 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__23016,G__23017) : next_fn__19835__auto__.call(null,G__23016,G__23017));
});

com.rpl.specter.t_com$rpl$specter23010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23011","meta23011",-1427575298,null)], null);
});

com.rpl.specter.t_com$rpl$specter23010.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23010.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23010";

com.rpl.specter.t_com$rpl$specter23010.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23010");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23010.
 */
com.rpl.specter.__GT_t_com$rpl$specter23010 = (function com$rpl$specter$__GT_t_com$rpl$specter23010(path__$1,late__$1,meta23011){
return (new com.rpl.specter.t_com$rpl$specter23010(path__$1,late__$1,meta23011));
});

}

return (new com.rpl.specter.t_com$rpl$specter23010(path,late,null));
}));
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
};
var G__23018 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__23020__i = 0, G__23020__a = new Array(arguments.length -  0);
while (G__23020__i < G__23020__a.length) {G__23020__a[G__23020__i] = arguments[G__23020__i + 0]; ++G__23020__i;}
  path = new cljs.core.IndexedSeq(G__23020__a,0,null);
} 
return G__23018__delegate.call(this,path);};
G__23018.cljs$lang$maxFixedArity = 0;
G__23018.cljs$lang$applyTo = (function (arglist__23021){
var path = cljs.core.seq(arglist__23021);
return G__23018__delegate(path);
});
G__23018.cljs$core$IFn$_invoke$arity$variadic = G__23018__delegate;
return G__23018;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__23029__delegate = function (path){
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23022 = (function (path,late,meta23023){
this.path = path;
this.late = late;
this.meta23023 = meta23023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23024,meta23023__$1){
var self__ = this;
var _23024__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23022(self__.path,self__.late,meta23023__$1));
});

com.rpl.specter.t_com$rpl$specter23022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23024){
var self__ = this;
var _23024__$1 = this;
return self__.meta23023;
});

com.rpl.specter.t_com$rpl$specter23022.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23022.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__23025 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__23026 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__23025,G__23026) : next_fn__19835__auto__.call(null,G__23025,G__23026));
});

com.rpl.specter.t_com$rpl$specter23022.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__23027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__23028 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__23027,G__23028) : next_fn__19835__auto__.call(null,G__23027,G__23028));
});

com.rpl.specter.t_com$rpl$specter23022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23023","meta23023",-1326768367,null)], null);
});

com.rpl.specter.t_com$rpl$specter23022.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23022.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23022";

com.rpl.specter.t_com$rpl$specter23022.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23022");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23022.
 */
com.rpl.specter.__GT_t_com$rpl$specter23022 = (function com$rpl$specter$__GT_t_com$rpl$specter23022(path__$1,late__$1,meta23023){
return (new com.rpl.specter.t_com$rpl$specter23022(path__$1,late__$1,meta23023));
});

}

return (new com.rpl.specter.t_com$rpl$specter23022(path,late,null));
}));
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
};
var G__23029 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__23030__i = 0, G__23030__a = new Array(arguments.length -  0);
while (G__23030__i < G__23030__a.length) {G__23030__a[G__23030__i] = arguments[G__23030__i + 0]; ++G__23030__i;}
  path = new cljs.core.IndexedSeq(G__23030__a,0,null);
} 
return G__23029__delegate.call(this,path);};
G__23029.cljs$lang$maxFixedArity = 0;
G__23029.cljs$lang$applyTo = (function (arglist__23031){
var path = cljs.core.seq(arglist__23031);
return G__23029__delegate(path);
});
G__23029.cljs$core$IFn$_invoke$arity$variadic = G__23029__delegate;
return G__23029;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23032 = (function (val,meta23033){
this.val = val;
this.meta23033 = meta23033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23034,meta23033__$1){
var self__ = this;
var _23034__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23032(self__.val,meta23033__$1));
});

com.rpl.specter.t_com$rpl$specter23032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23034){
var self__ = this;
var _23034__$1 = this;
return self__.meta23033;
});

com.rpl.specter.t_com$rpl$specter23032.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23032.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__23040 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,self__.val);
var G__23041 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__23040,G__23041) : next_fn__19835__auto__.call(null,G__23040,G__23041));
});

com.rpl.specter.t_com$rpl$specter23032.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19833__auto__,vals__19834__auto__,structure,next_fn__19835__auto__){
var self__ = this;
var this__19833__auto____$1 = this;
var G__23042 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__19834__auto__,self__.val);
var G__23043 = structure;
return (next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__19835__auto__.cljs$core$IFn$_invoke$arity$2(G__23042,G__23043) : next_fn__19835__auto__.call(null,G__23042,G__23043));
});

com.rpl.specter.t_com$rpl$specter23032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta23033","meta23033",-686552332,null)], null);
});

com.rpl.specter.t_com$rpl$specter23032.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23032.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23032";

com.rpl.specter.t_com$rpl$specter23032.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23032");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23032.
 */
com.rpl.specter.__GT_t_com$rpl$specter23032 = (function com$rpl$specter$__GT_t_com$rpl$specter23032(val__$1,meta23033){
return (new com.rpl.specter.t_com$rpl$specter23032(val__$1,meta23033));
});

}

return (new com.rpl.specter.t_com$rpl$specter23032(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__23064__delegate = function (path){
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23046 = (function (path,late,meta23047){
this.path = path;
this.late = late;
this.meta23047 = meta23047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23048,meta23047__$1){
var self__ = this;
var _23048__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23046(self__.path,self__.late,meta23047__$1));
});

com.rpl.specter.t_com$rpl$specter23046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23048){
var self__ = this;
var _23048__$1 = this;
return self__.meta23047;
});

com.rpl.specter.t_com$rpl$specter23046.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23046.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter23046.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter23046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta23047","meta23047",907200946,null)], null);
});

com.rpl.specter.t_com$rpl$specter23046.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23046.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23046";

com.rpl.specter.t_com$rpl$specter23046.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23046");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23046.
 */
com.rpl.specter.__GT_t_com$rpl$specter23046 = (function com$rpl$specter$__GT_t_com$rpl$specter23046(path__$1,late__$1,meta23047){
return (new com.rpl.specter.t_com$rpl$specter23046(path__$1,late__$1,meta23047));
});

}

return (new com.rpl.specter.t_com$rpl$specter23046(path,late,null));
}));
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
};
var G__23064 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__23066__i = 0, G__23066__a = new Array(arguments.length -  0);
while (G__23066__i < G__23066__a.length) {G__23066__a[G__23066__i] = arguments[G__23066__i + 0]; ++G__23066__i;}
  path = new cljs.core.IndexedSeq(G__23066__a,0,null);
} 
return G__23064__delegate.call(this,path);};
G__23064.cljs$lang$maxFixedArity = 0;
G__23064.cljs$lang$applyTo = (function (arglist__23067){
var path = cljs.core.seq(arglist__23067);
return G__23064__delegate(path);
});
G__23064.cljs$core$IFn$_invoke$arity$variadic = G__23064__delegate;
return G__23064;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23068 = (function (meta23069){
this.meta23069 = meta23069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23070,meta23069__$1){
var self__ = this;
var _23070__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23068(meta23069__$1));
});

com.rpl.specter.t_com$rpl$specter23068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23070){
var self__ = this;
var _23070__$1 = this;
return self__.meta23069;
});

com.rpl.specter.t_com$rpl$specter23068.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23068.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23072 = cljs.core.PersistentVector.EMPTY;
var G__23073 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23072,G__23073) : next_fn.call(null,G__23072,G__23073));
});

com.rpl.specter.t_com$rpl$specter23068.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__23074 = cljs.core.PersistentVector.EMPTY;
var G__23075 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__23074,G__23075) : next_fn.call(null,G__23074,G__23075));
});

com.rpl.specter.t_com$rpl$specter23068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23069","meta23069",-391535503,null)], null);
});

com.rpl.specter.t_com$rpl$specter23068.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23068.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23068";

com.rpl.specter.t_com$rpl$specter23068.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23068");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23068.
 */
com.rpl.specter.__GT_t_com$rpl$specter23068 = (function com$rpl$specter$__GT_t_com$rpl$specter23068(meta23069){
return (new com.rpl.specter.t_com$rpl$specter23068(meta23069));
});

}

return (new com.rpl.specter.t_com$rpl$specter23068(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__23090 = null;
var G__23090__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__23090__3 = (function (cond_p,then_path,else_path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5455__auto__){
return (function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23078 = (function (cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,meta23079){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta23079 = meta23079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5455__auto__){
return (function (_23080,meta23079__$1){
var self__ = this;
var _23080__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23078(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.afn,self__.late_then,self__.late_else,meta23079__$1));
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5455__auto__){
return (function (_23080){
var self__ = this;
var _23080__$1 = this;
return self__.meta23079;
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23078.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23078.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23078.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23078.getBasis = ((function (afn,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta23079","meta23079",1874690336,null)], null);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23078.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23078.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23078";

com.rpl.specter.t_com$rpl$specter23078.cljs$lang$ctorPrWriter = ((function (afn,temp__5455__auto__){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23078");
});})(afn,temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23078.
 */
com.rpl.specter.__GT_t_com$rpl$specter23078 = ((function (afn,temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23078(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta23079){
return (new com.rpl.specter.t_com$rpl$specter23078(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta23079));
});})(afn,temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23078(cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,null));
});})(afn,temp__5455__auto__))
);
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
} else {
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23081 = (function (cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,meta23082){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta23082 = meta23082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_23083,meta23082__$1){
var self__ = this;
var _23083__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23081(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.late_cond,self__.late_then,self__.late_else,meta23082__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_23083){
var self__ = this;
var _23083__$1 = this;
return self__.meta23082;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23081.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23081.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__23076_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__23076_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23081.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__23077_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__23077_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23081.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta23082","meta23082",-1844492015,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter23081.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23081.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23081";

com.rpl.specter.t_com$rpl$specter23081.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23081");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23081.
 */
com.rpl.specter.__GT_t_com$rpl$specter23081 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter23081(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta23082){
return (new com.rpl.specter.t_com$rpl$specter23081(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta23082));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter23081(cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,null));
});})(temp__5455__auto__))
);
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
}
});
G__23090 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__23090__2.call(this,cond_p,then_path);
case 3:
return G__23090__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23090.cljs$core$IFn$_invoke$arity$2 = G__23090__2;
G__23090.cljs$core$IFn$_invoke$arity$3 = G__23090__3;
return G__23090;
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
var G__23108__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__23104){
var vec__23105 = p__23104;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23105,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23105,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__23108 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__23109__i = 0, G__23109__a = new Array(arguments.length -  0);
while (G__23109__i < G__23109__a.length) {G__23109__a[G__23109__i] = arguments[G__23109__i + 0]; ++G__23109__i;}
  conds = new cljs.core.IndexedSeq(G__23109__a,0,null);
} 
return G__23108__delegate.call(this,conds);};
G__23108.cljs$lang$maxFixedArity = 0;
G__23108.cljs$lang$applyTo = (function (arglist__23110){
var conds = cljs.core.seq(arglist__23110);
return G__23108__delegate(conds);
});
G__23108.cljs$core$IFn$_invoke$arity$variadic = G__23108__delegate;
return G__23108;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__23119 = null;
var G__23119__0 = (function (){
return com.rpl.specter.STAY;
});
var G__23119__1 = (function (path){
return path;
});
var G__23119__2 = (function (path1,path2){
var builder__19836__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter23112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter23112 = (function (path1,path2,late1,late2,meta23113){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta23113 = meta23113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter23112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23114,meta23113__$1){
var self__ = this;
var _23114__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter23112(self__.path1,self__.path2,self__.late1,self__.late2,meta23113__$1));
});

com.rpl.specter.t_com$rpl$specter23112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23114){
var self__ = this;
var _23114__$1 = this;
return self__.meta23113;
});

com.rpl.specter.t_com$rpl$specter23112.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter23112.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter23112.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter23112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta23113","meta23113",-264184829,null)], null);
});

com.rpl.specter.t_com$rpl$specter23112.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter23112.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter23112";

com.rpl.specter.t_com$rpl$specter23112.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"com.rpl.specter/t_com$rpl$specter23112");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter23112.
 */
com.rpl.specter.__GT_t_com$rpl$specter23112 = (function com$rpl$specter$__GT_t_com$rpl$specter23112(path1__$1,path2__$1,late1__$1,late2__$1,meta23113){
return (new com.rpl.specter.t_com$rpl$specter23112(path1__$1,path2__$1,late1__$1,late2__$1,meta23113));
});

}

return (new com.rpl.specter.t_com$rpl$specter23112(path1,path2,late1,late2,null));
}));
var curr_params__19837__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19837__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__19836__auto__,curr_params__19837__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__19836__auto__,curr_params__19837__auto__,null);
}
});
var G__23119__3 = (function() { 
var G__23120__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__23120 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__23121__i = 0, G__23121__a = new Array(arguments.length -  2);
while (G__23121__i < G__23121__a.length) {G__23121__a[G__23121__i] = arguments[G__23121__i + 2]; ++G__23121__i;}
  paths = new cljs.core.IndexedSeq(G__23121__a,0,null);
} 
return G__23120__delegate.call(this,path1,path2,paths);};
G__23120.cljs$lang$maxFixedArity = 2;
G__23120.cljs$lang$applyTo = (function (arglist__23122){
var path1 = cljs.core.first(arglist__23122);
arglist__23122 = cljs.core.next(arglist__23122);
var path2 = cljs.core.first(arglist__23122);
var paths = cljs.core.rest(arglist__23122);
return G__23120__delegate(path1,path2,paths);
});
G__23120.cljs$core$IFn$_invoke$arity$variadic = G__23120__delegate;
return G__23120;
})()
;
G__23119 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__23119__0.call(this);
case 1:
return G__23119__1.call(this,path1);
case 2:
return G__23119__2.call(this,path1,path2);
default:
var G__23123 = null;
if (arguments.length > 2) {
var G__23124__i = 0, G__23124__a = new Array(arguments.length -  2);
while (G__23124__i < G__23124__a.length) {G__23124__a[G__23124__i] = arguments[G__23124__i + 2]; ++G__23124__i;}
G__23123 = new cljs.core.IndexedSeq(G__23124__a,0,null);
}
return G__23119__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__23123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23119.cljs$lang$maxFixedArity = 2;
G__23119.cljs$lang$applyTo = G__23119__3.cljs$lang$applyTo;
G__23119.cljs$core$IFn$_invoke$arity$0 = G__23119__0;
G__23119.cljs$core$IFn$_invoke$arity$1 = G__23119__1;
G__23119.cljs$core$IFn$_invoke$arity$2 = G__23119__2;
G__23119.cljs$core$IFn$_invoke$arity$variadic = G__23119__3.cljs$core$IFn$_invoke$arity$variadic;
return G__23119;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__23130__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__23130 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__23131__i = 0, G__23131__a = new Array(arguments.length -  0);
while (G__23131__i < G__23131__a.length) {G__23131__a[G__23131__i] = arguments[G__23131__i + 0]; ++G__23131__i;}
  path = new cljs.core.IndexedSeq(G__23131__a,0,null);
} 
return G__23130__delegate.call(this,path);};
G__23130.cljs$lang$maxFixedArity = 0;
G__23130.cljs$lang$applyTo = (function (arglist__23132){
var path = cljs.core.seq(arglist__23132);
return G__23130__delegate(path);
});
G__23130.cljs$core$IFn$_invoke$arity$variadic = G__23130__delegate;
return G__23130;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__23134__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__23134 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__23135__i = 0, G__23135__a = new Array(arguments.length -  0);
while (G__23135__i < G__23135__a.length) {G__23135__a[G__23135__i] = arguments[G__23135__i + 0]; ++G__23135__i;}
  path = new cljs.core.IndexedSeq(G__23135__a,0,null);
} 
return G__23134__delegate.call(this,path);};
G__23134.cljs$lang$maxFixedArity = 0;
G__23134.cljs$lang$applyTo = (function (arglist__23136){
var path = cljs.core.seq(arglist__23136);
return G__23134__delegate(path);
});
G__23134.cljs$core$IFn$_invoke$arity$variadic = G__23134__delegate;
return G__23134;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19843__auto__ = com.rpl.specter.pathcache23137;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info23138 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1390,1390,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1171,1175,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,640,642,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2099,2099,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,675,678,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache23137 = info23138;

return info23138;
})():info__19843__auto__);
var precompiled23139 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__23141 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled23139.cljs$core$IFn$_invoke$arity$1 ? precompiled23139.cljs$core$IFn$_invoke$arity$1(G__23141) : precompiled23139.call(null,G__23141));
} else {
return precompiled23139;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__19843__auto__ = com.rpl.specter.pathcache23155;
var info__19843__auto____$1 = (((info__19843__auto__ == null))?(function (){var info23156 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1390,1390,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1171,1175,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,640,642,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2099,2099,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,685,687,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache23155 = info23156;

return info23156;
})():info__19843__auto__);
var precompiled23157 = com.rpl.specter.impl.cached_path_info_precompiled(info__19843__auto____$1);
var dynamic_QMARK___19844__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__19843__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19844__auto__)){
var G__23158 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled23157.cljs$core$IFn$_invoke$arity$1 ? precompiled23157.cljs$core$IFn$_invoke$arity$1(G__23158) : precompiled23157.call(null,G__23158));
} else {
return precompiled23157;
}
})());

return p;
}));
var empty__GT_NONE_23166 = (function (){var G__23164 = cljs.core.empty_QMARK_;
var G__23165 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__23164,G__23165) : com.rpl.specter.if_path.call(null,G__23164,G__23165));
})();
var compact_STAR__23167 = ((function (empty__GT_NONE_23166){
return (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_23166) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_23166));
});})(empty__GT_NONE_23166))
;
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (empty__GT_NONE_23166,compact_STAR__23167){
return (function() { 
var G__23169__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__23167,path);
};
var G__23169 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__23170__i = 0, G__23170__a = new Array(arguments.length -  0);
while (G__23170__i < G__23170__a.length) {G__23170__a[G__23170__i] = arguments[G__23170__i + 0]; ++G__23170__i;}
  path = new cljs.core.IndexedSeq(G__23170__a,0,null);
} 
return G__23169__delegate.call(this,path);};
G__23169.cljs$lang$maxFixedArity = 0;
G__23169.cljs$lang$applyTo = (function (arglist__23171){
var path = cljs.core.seq(arglist__23171);
return G__23169__delegate(path);
});
G__23169.cljs$core$IFn$_invoke$arity$variadic = G__23169__delegate;
return G__23169;
})()
;})(empty__GT_NONE_23166,compact_STAR__23167))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
