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
var G__33885__delegate = function (args){
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
var G__33885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33886__i = 0, G__33886__a = new Array(arguments.length -  0);
while (G__33886__i < G__33886__a.length) {G__33886__a[G__33886__i] = arguments[G__33886__i + 0]; ++G__33886__i;}
  args = new cljs.core.IndexedSeq(G__33886__a,0,null);
} 
return G__33885__delegate.call(this,args);};
G__33885.cljs$lang$maxFixedArity = 0;
G__33885.cljs$lang$applyTo = (function (arglist__33887){
var args = cljs.core.seq(arglist__33887);
return G__33885__delegate(args);
});
G__33885.cljs$core$IFn$_invoke$arity$variadic = G__33885__delegate;
return G__33885;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33888 = arguments.length;
var i__4642__auto___33889 = (0);
while(true){
if((i__4642__auto___33889 < len__4641__auto___33888)){
args__4647__auto__.push((arguments[i__4642__auto___33889]));

var G__33890 = (i__4642__auto___33889 + (1));
i__4642__auto___33889 = G__33890;
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
com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq33087){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33087));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__33090 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33091 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__33090,G__33091) : com.rpl.specter.compiled_select.call(null,G__33090,G__33091));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__33094 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33095 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__33094,G__33095) : com.rpl.specter.compiled_select_one.call(null,G__33094,G__33095));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__33096 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33097 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__33096,G__33097) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__33096,G__33097));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__33099 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33100 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__33099,G__33100) : com.rpl.specter.compiled_select_first.call(null,G__33099,G__33100));
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
var G__33101 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33102 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__33101,G__33102) : com.rpl.specter.compiled_select_any.call(null,G__33101,G__33102));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__33108 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33109 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__33108,G__33109) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__33108,G__33109));
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
var G__33110 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__33111 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__33110,G__33111) : com.rpl.specter.compiled_traverse.call(null,G__33110,G__33111));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__33112 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__33112) : com.rpl.specter.compiled_traverse_all.call(null,G__33112));
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
var G__33117 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33118 = transform_fn;
var G__33119 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__33117,G__33118,G__33119) : com.rpl.specter.compiled_transform.call(null,G__33117,G__33118,G__33119));
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
var G__33120 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33121 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__33120,G__33121) : com.rpl.specter.compiled_multi_transform.call(null,G__33120,G__33121));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__33123 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33124 = val;
var G__33125 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__33123,G__33124,G__33125) : com.rpl.specter.compiled_setval.call(null,G__33123,G__33124,G__33125));
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
var len__4641__auto___33894 = arguments.length;
var i__4642__auto___33895 = (0);
while(true){
if((i__4642__auto___33895 < len__4641__auto___33894)){
args__4647__auto__.push((arguments[i__4642__auto___33895]));

var G__33896 = (i__4642__auto___33895 + (1));
i__4642__auto___33895 = G__33896;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__33133){
var map__33134 = p__33133;
var map__33134__$1 = (((((!((map__33134 == null))))?(((((map__33134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33134):map__33134);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33134__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__33136 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__33137 = transform_fn;
var G__33138 = structure;
var G__33139 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__33140 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__33136,G__33137,G__33138,G__33139,G__33140) : com.rpl.specter.compiled_replace_in.call(null,G__33136,G__33137,G__33138,G__33139,G__33140));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq33129){
var G__33130 = cljs.core.first(seq33129);
var seq33129__$1 = cljs.core.next(seq33129);
var G__33131 = cljs.core.first(seq33129__$1);
var seq33129__$2 = cljs.core.next(seq33129__$1);
var G__33132 = cljs.core.first(seq33129__$2);
var seq33129__$3 = cljs.core.next(seq33129__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33130,G__33131,G__33132,seq33129__$3);
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
var G__33897__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__33897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33898__i = 0, G__33898__a = new Array(arguments.length -  0);
while (G__33898__i < G__33898__a.length) {G__33898__a[G__33898__i] = arguments[G__33898__i + 0]; ++G__33898__i;}
  args = new cljs.core.IndexedSeq(G__33898__a,0,null);
} 
return G__33897__delegate.call(this,args);};
G__33897.cljs$lang$maxFixedArity = 0;
G__33897.cljs$lang$applyTo = (function (arglist__33899){
var args = cljs.core.seq(arglist__33899);
return G__33897__delegate(args);
});
G__33897.cljs$core$IFn$_invoke$arity$variadic = G__33897__delegate;
return G__33897;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33143 = (function (meta33144){
this.meta33144 = meta33144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33145,meta33144__$1){
var self__ = this;
var _33145__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33143(meta33144__$1));
});

com.rpl.specter.t_com$rpl$specter33143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33145){
var self__ = this;
var _33145__$1 = this;
return self__.meta33144;
});

com.rpl.specter.t_com$rpl$specter33143.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33143.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter33143.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter33143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33144","meta33144",1192800048,null)], null);
});

com.rpl.specter.t_com$rpl$specter33143.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33143.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33143";

com.rpl.specter.t_com$rpl$specter33143.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33143");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33143.
 */
com.rpl.specter.__GT_t_com$rpl$specter33143 = (function com$rpl$specter$__GT_t_com$rpl$specter33143(meta33144){
return (new com.rpl.specter.t_com$rpl$specter33143(meta33144));
});

}

return (new com.rpl.specter.t_com$rpl$specter33143(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33151 = (function (afn,meta33152){
this.afn = afn;
this.meta33152 = meta33152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33153,meta33152__$1){
var self__ = this;
var _33153__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33151(self__.afn,meta33152__$1));
});

com.rpl.specter.t_com$rpl$specter33151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33153){
var self__ = this;
var _33153__$1 = this;
return self__.meta33152;
});

com.rpl.specter.t_com$rpl$specter33151.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33151.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter33151.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter33151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta33152","meta33152",375422336,null)], null);
});

com.rpl.specter.t_com$rpl$specter33151.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33151.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33151";

com.rpl.specter.t_com$rpl$specter33151.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33151");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33151.
 */
com.rpl.specter.__GT_t_com$rpl$specter33151 = (function com$rpl$specter$__GT_t_com$rpl$specter33151(afn__$1,meta33152){
return (new com.rpl.specter.t_com$rpl$specter33151(afn__$1,meta33152));
});

}

return (new com.rpl.specter.t_com$rpl$specter33151(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33170 = (function (afn,meta33171){
this.afn = afn;
this.meta33171 = meta33171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33172,meta33171__$1){
var self__ = this;
var _33172__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33170(self__.afn,meta33171__$1));
});

com.rpl.specter.t_com$rpl$specter33170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33172){
var self__ = this;
var _33172__$1 = this;
return self__.meta33171;
});

com.rpl.specter.t_com$rpl$specter33170.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33170.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter33170.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
});

com.rpl.specter.t_com$rpl$specter33170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta33171","meta33171",-1974359847,null)], null);
});

com.rpl.specter.t_com$rpl$specter33170.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33170.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33170";

com.rpl.specter.t_com$rpl$specter33170.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33170");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33170.
 */
com.rpl.specter.__GT_t_com$rpl$specter33170 = (function com$rpl$specter$__GT_t_com$rpl$specter33170(afn__$1,meta33171){
return (new com.rpl.specter.t_com$rpl$specter33170(afn__$1,meta33171));
});

}

return (new com.rpl.specter.t_com$rpl$specter33170(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__33177 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__33177) : com.rpl.specter.terminal.call(null,G__33177));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33178 = (function (meta33179){
this.meta33179 = meta33179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33180,meta33179__$1){
var self__ = this;
var _33180__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33178(meta33179__$1));
});

com.rpl.specter.t_com$rpl$specter33178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33180){
var self__ = this;
var _33180__$1 = this;
return self__.meta33179;
});

com.rpl.specter.t_com$rpl$specter33178.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33178.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter33178.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter33178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33179","meta33179",1304241979,null)], null);
});

com.rpl.specter.t_com$rpl$specter33178.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33178.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33178";

com.rpl.specter.t_com$rpl$specter33178.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33178");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33178.
 */
com.rpl.specter.__GT_t_com$rpl$specter33178 = (function com$rpl$specter$__GT_t_com$rpl$specter33178(meta33179){
return (new com.rpl.specter.t_com$rpl$specter33178(meta33179));
});

}

return (new com.rpl.specter.t_com$rpl$specter33178(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33194 = (function (meta33195){
this.meta33195 = meta33195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33196,meta33195__$1){
var self__ = this;
var _33196__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33194(meta33195__$1));
});

com.rpl.specter.t_com$rpl$specter33194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33196){
var self__ = this;
var _33196__$1 = this;
return self__.meta33195;
});

com.rpl.specter.t_com$rpl$specter33194.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33194.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter33194.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33195","meta33195",-120039055,null)], null);
});

com.rpl.specter.t_com$rpl$specter33194.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33194.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33194";

com.rpl.specter.t_com$rpl$specter33194.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33194");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33194.
 */
com.rpl.specter.__GT_t_com$rpl$specter33194 = (function com$rpl$specter$__GT_t_com$rpl$specter33194(meta33195){
return (new com.rpl.specter.t_com$rpl$specter33194(meta33195));
});

}

return (new com.rpl.specter.t_com$rpl$specter33194(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33208 = (function (meta33209){
this.meta33209 = meta33209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33210,meta33209__$1){
var self__ = this;
var _33210__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33208(meta33209__$1));
});

com.rpl.specter.t_com$rpl$specter33208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33210){
var self__ = this;
var _33210__$1 = this;
return self__.meta33209;
});

com.rpl.specter.t_com$rpl$specter33208.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33208.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33208.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter33208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33209","meta33209",1500880779,null)], null);
});

com.rpl.specter.t_com$rpl$specter33208.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33208.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33208";

com.rpl.specter.t_com$rpl$specter33208.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33208");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33208.
 */
com.rpl.specter.__GT_t_com$rpl$specter33208 = (function com$rpl$specter$__GT_t_com$rpl$specter33208(meta33209){
return (new com.rpl.specter.t_com$rpl$specter33208(meta33209));
});

}

return (new com.rpl.specter.t_com$rpl$specter33208(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33251 = (function (meta33252){
this.meta33252 = meta33252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33253,meta33252__$1){
var self__ = this;
var _33253__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33251(meta33252__$1));
});

com.rpl.specter.t_com$rpl$specter33251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33253){
var self__ = this;
var _33253__$1 = this;
return self__.meta33252;
});

com.rpl.specter.t_com$rpl$specter33251.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33251.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33251.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter33251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33252","meta33252",1030132342,null)], null);
});

com.rpl.specter.t_com$rpl$specter33251.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33251.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33251";

com.rpl.specter.t_com$rpl$specter33251.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33251");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33251.
 */
com.rpl.specter.__GT_t_com$rpl$specter33251 = (function com$rpl$specter$__GT_t_com$rpl$specter33251(meta33252){
return (new com.rpl.specter.t_com$rpl$specter33251(meta33252));
});

}

return (new com.rpl.specter.t_com$rpl$specter33251(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33257 = (function (meta33258){
this.meta33258 = meta33258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33259,meta33258__$1){
var self__ = this;
var _33259__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33257(meta33258__$1));
});

com.rpl.specter.t_com$rpl$specter33257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33259){
var self__ = this;
var _33259__$1 = this;
return self__.meta33258;
});

com.rpl.specter.t_com$rpl$specter33257.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33257.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,structure);
var G__33263 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33262,G__33263) : next_fn__28390__auto__.call(null,G__33262,G__33263));
});

com.rpl.specter.t_com$rpl$specter33257.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33265 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,structure);
var G__33266 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33265,G__33266) : next_fn__28390__auto__.call(null,G__33265,G__33266));
});

com.rpl.specter.t_com$rpl$specter33257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33258","meta33258",1828318996,null)], null);
});

com.rpl.specter.t_com$rpl$specter33257.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33257.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33257";

com.rpl.specter.t_com$rpl$specter33257.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33257");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33257.
 */
com.rpl.specter.__GT_t_com$rpl$specter33257 = (function com$rpl$specter$__GT_t_com$rpl$specter33257(meta33258){
return (new com.rpl.specter.t_com$rpl$specter33257(meta33258));
});

}

return (new com.rpl.specter.t_com$rpl$specter33257(null));
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
var G__33279 = structure;
var G__33280 = s;
var G__33281 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__33282 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__33279,G__33280,G__33281,G__33282) : com.rpl.specter.navs.srange_transform.call(null,G__33279,G__33280,G__33281,G__33282));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33283 = (function (start_index_fn,end_index_fn,meta33284){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta33284 = meta33284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33285,meta33284__$1){
var self__ = this;
var _33285__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33283(self__.start_index_fn,self__.end_index_fn,meta33284__$1));
});

com.rpl.specter.t_com$rpl$specter33283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33285){
var self__ = this;
var _33285__$1 = this;
return self__.meta33284;
});

com.rpl.specter.t_com$rpl$specter33283.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33283.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33283.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__33292 = structure;
var G__33293 = s;
var G__33294 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__33295 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__33292,G__33293,G__33294,G__33295) : com.rpl.specter.navs.srange_transform.call(null,G__33292,G__33293,G__33294,G__33295));
});

com.rpl.specter.t_com$rpl$specter33283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta33284","meta33284",7898366,null)], null);
});

com.rpl.specter.t_com$rpl$specter33283.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33283.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33283";

com.rpl.specter.t_com$rpl$specter33283.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33283");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33283.
 */
com.rpl.specter.__GT_t_com$rpl$specter33283 = (function com$rpl$specter$__GT_t_com$rpl$specter33283(start_index_fn__$1,end_index_fn__$1,meta33284){
return (new com.rpl.specter.t_com$rpl$specter33283(start_index_fn__$1,end_index_fn__$1,meta33284));
});

}

return (new com.rpl.specter.t_com$rpl$specter33283(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33356 = (function (start,end,meta33357){
this.start = start;
this.end = end;
this.meta33357 = meta33357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33358,meta33357__$1){
var self__ = this;
var _33358__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33356(self__.start,self__.end,meta33357__$1));
});

com.rpl.specter.t_com$rpl$specter33356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33358){
var self__ = this;
var _33358__$1 = this;
return self__.meta33357;
});

com.rpl.specter.t_com$rpl$specter33356.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33356.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter33356.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter33356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta33357","meta33357",700947155,null)], null);
});

com.rpl.specter.t_com$rpl$specter33356.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33356.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33356";

com.rpl.specter.t_com$rpl$specter33356.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33356");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33356.
 */
com.rpl.specter.__GT_t_com$rpl$specter33356 = (function com$rpl$specter$__GT_t_com$rpl$specter33356(start__$1,end__$1,meta33357){
return (new com.rpl.specter.t_com$rpl$specter33356(start__$1,end__$1,meta33357));
});

}

return (new com.rpl.specter.t_com$rpl$specter33356(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__24830__auto__,p__33359){
var vec__33360 = p__33359;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33360,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33360,(1),null);
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33363 = (function (pred,meta33364){
this.pred = pred;
this.meta33364 = meta33364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33365,meta33364__$1){
var self__ = this;
var _33365__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33363(self__.pred,meta33364__$1));
});

com.rpl.specter.t_com$rpl$specter33363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33365){
var self__ = this;
var _33365__$1 = this;
return self__.meta33364;
});

com.rpl.specter.t_com$rpl$specter33363.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33363.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27586__auto____$1){
return (function (curr__24830__auto__,p__33368){
var vec__33369 = p__33368;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33369,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33369,(1),null);
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

com.rpl.specter.t_com$rpl$specter33363.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter33363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta33364","meta33364",-462731561,null)], null);
});

com.rpl.specter.t_com$rpl$specter33363.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33363.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33363";

com.rpl.specter.t_com$rpl$specter33363.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33363");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33363.
 */
com.rpl.specter.__GT_t_com$rpl$specter33363 = (function com$rpl$specter$__GT_t_com$rpl$specter33363(pred__$1,meta33364){
return (new com.rpl.specter.t_com$rpl$specter33363(pred__$1,meta33364));
});

}

return (new com.rpl.specter.t_com$rpl$specter33363(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__33438 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33438) : next_fn.call(null,G__33438));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = (function (){var G__33440 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33440) : next_fn.call(null,G__33440));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33441 = (function (meta33442){
this.meta33442 = meta33442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33443,meta33442__$1){
var self__ = this;
var _33443__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33441(meta33442__$1));
});

com.rpl.specter.t_com$rpl$specter33441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33443){
var self__ = this;
var _33443__$1 = this;
return self__.meta33442;
});

com.rpl.specter.t_com$rpl$specter33441.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33441.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter33441.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33442","meta33442",-688680239,null)], null);
});

com.rpl.specter.t_com$rpl$specter33441.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33441.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33441";

com.rpl.specter.t_com$rpl$specter33441.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33441");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33441.
 */
com.rpl.specter.__GT_t_com$rpl$specter33441 = (function com$rpl$specter$__GT_t_com$rpl$specter33441(meta33442){
return (new com.rpl.specter.t_com$rpl$specter33441(meta33442));
});

}

return (new com.rpl.specter.t_com$rpl$specter33441(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__33446 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33446) : next_fn.call(null,G__33446));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__33447 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33447) : next_fn.call(null,G__33447));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33448 = (function (meta33449){
this.meta33449 = meta33449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33450,meta33449__$1){
var self__ = this;
var _33450__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33448(meta33449__$1));
});

com.rpl.specter.t_com$rpl$specter33448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33450){
var self__ = this;
var _33450__$1 = this;
return self__.meta33449;
});

com.rpl.specter.t_com$rpl$specter33448.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33448.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter33448.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33449","meta33449",1141903957,null)], null);
});

com.rpl.specter.t_com$rpl$specter33448.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33448.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33448";

com.rpl.specter.t_com$rpl$specter33448.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33448");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33448.
 */
com.rpl.specter.__GT_t_com$rpl$specter33448 = (function com$rpl$specter$__GT_t_com$rpl$specter33448(meta33449){
return (new com.rpl.specter.t_com$rpl$specter33448(meta33449));
});

}

return (new com.rpl.specter.t_com$rpl$specter33448(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33466 = (function (meta33467){
this.meta33467 = meta33467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33468,meta33467__$1){
var self__ = this;
var _33468__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33466(meta33467__$1));
});

com.rpl.specter.t_com$rpl$specter33466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33468){
var self__ = this;
var _33468__$1 = this;
return self__.meta33467;
});

com.rpl.specter.t_com$rpl$specter33466.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33466.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter33466.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33467","meta33467",2139457490,null)], null);
});

com.rpl.specter.t_com$rpl$specter33466.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33466.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33466";

com.rpl.specter.t_com$rpl$specter33466.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33466");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33466.
 */
com.rpl.specter.__GT_t_com$rpl$specter33466 = (function com$rpl$specter$__GT_t_com$rpl$specter33466(meta33467){
return (new com.rpl.specter.t_com$rpl$specter33466(meta33467));
});

}

return (new com.rpl.specter.t_com$rpl$specter33466(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33469 = (function (meta33470){
this.meta33470 = meta33470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33471,meta33470__$1){
var self__ = this;
var _33471__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33469(meta33470__$1));
});

com.rpl.specter.t_com$rpl$specter33469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33471){
var self__ = this;
var _33471__$1 = this;
return self__.meta33470;
});

com.rpl.specter.t_com$rpl$specter33469.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33469.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter33469.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33470","meta33470",1496878674,null)], null);
});

com.rpl.specter.t_com$rpl$specter33469.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33469.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33469";

com.rpl.specter.t_com$rpl$specter33469.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33469");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33469.
 */
com.rpl.specter.__GT_t_com$rpl$specter33469 = (function com$rpl$specter$__GT_t_com$rpl$specter33469(meta33470){
return (new com.rpl.specter.t_com$rpl$specter33469(meta33470));
});

}

return (new com.rpl.specter.t_com$rpl$specter33469(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33473 = (function (meta33474){
this.meta33474 = meta33474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33475,meta33474__$1){
var self__ = this;
var _33475__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33473(meta33474__$1));
});

com.rpl.specter.t_com$rpl$specter33473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33475){
var self__ = this;
var _33475__$1 = this;
return self__.meta33474;
});

com.rpl.specter.t_com$rpl$specter33473.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33473.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter33473.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33474","meta33474",-861220128,null)], null);
});

com.rpl.specter.t_com$rpl$specter33473.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33473.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33473";

com.rpl.specter.t_com$rpl$specter33473.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33473");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33473.
 */
com.rpl.specter.__GT_t_com$rpl$specter33473 = (function com$rpl$specter$__GT_t_com$rpl$specter33473(meta33474){
return (new com.rpl.specter.t_com$rpl$specter33473(meta33474));
});

}

return (new com.rpl.specter.t_com$rpl$specter33473(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__33476 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33476) : next_fn.call(null,G__33476));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33478 = (function (aset,meta33479){
this.aset = aset;
this.meta33479 = meta33479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33480,meta33479__$1){
var self__ = this;
var _33480__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33478(self__.aset,meta33479__$1));
});

com.rpl.specter.t_com$rpl$specter33478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33480){
var self__ = this;
var _33480__$1 = this;
return self__.meta33479;
});

com.rpl.specter.t_com$rpl$specter33478.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33478.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter33478.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta33479","meta33479",-1040058334,null)], null);
});

com.rpl.specter.t_com$rpl$specter33478.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33478.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33478";

com.rpl.specter.t_com$rpl$specter33478.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33478");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33478.
 */
com.rpl.specter.__GT_t_com$rpl$specter33478 = (function com$rpl$specter$__GT_t_com$rpl$specter33478(aset__$1,meta33479){
return (new com.rpl.specter.t_com$rpl$specter33478(aset__$1,meta33479));
});

}

return (new com.rpl.specter.t_com$rpl$specter33478(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__33488 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33488) : next_fn.call(null,G__33488));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33491 = (function (m_keys,meta33492){
this.m_keys = m_keys;
this.meta33492 = meta33492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33493,meta33492__$1){
var self__ = this;
var _33493__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33491(self__.m_keys,meta33492__$1));
});

com.rpl.specter.t_com$rpl$specter33491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33493){
var self__ = this;
var _33493__$1 = this;
return self__.meta33492;
});

com.rpl.specter.t_com$rpl$specter33491.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33491.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter33491.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta33492","meta33492",-302871587,null)], null);
});

com.rpl.specter.t_com$rpl$specter33491.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33491.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33491";

com.rpl.specter.t_com$rpl$specter33491.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33491");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33491.
 */
com.rpl.specter.__GT_t_com$rpl$specter33491 = (function com$rpl$specter$__GT_t_com$rpl$specter33491(m_keys__$1,meta33492){
return (new com.rpl.specter.t_com$rpl$specter33491(m_keys__$1,meta33492));
});

}

return (new com.rpl.specter.t_com$rpl$specter33491(m_keys,null));
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
var G__34044__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33512 = (function (path,late,meta33513){
this.path = path;
this.late = late;
this.meta33513 = meta33513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33514,meta33513__$1){
var self__ = this;
var _33514__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33512(self__.path,self__.late,meta33513__$1));
});

com.rpl.specter.t_com$rpl$specter33512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33514){
var self__ = this;
var _33514__$1 = this;
return self__.meta33513;
});

com.rpl.specter.t_com$rpl$specter33512.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33512.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter33512.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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
var G__33515 = self__.late;
var G__33516 = ((function (G__33515,select_result,transformed,values_to_insert,next_fn,this__27586__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__33515,select_result,transformed,values_to_insert,next_fn,this__27586__auto____$1))
;
var G__33517 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__33515,G__33516,G__33517) : com.rpl.specter.compiled_transform.call(null,G__33515,G__33516,G__33517));
});

com.rpl.specter.t_com$rpl$specter33512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta33513","meta33513",258597542,null)], null);
});

com.rpl.specter.t_com$rpl$specter33512.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33512.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33512";

com.rpl.specter.t_com$rpl$specter33512.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33512");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33512.
 */
com.rpl.specter.__GT_t_com$rpl$specter33512 = (function com$rpl$specter$__GT_t_com$rpl$specter33512(path__$1,late__$1,meta33513){
return (new com.rpl.specter.t_com$rpl$specter33512(path__$1,late__$1,meta33513));
});

}

return (new com.rpl.specter.t_com$rpl$specter33512(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__34044 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34047__i = 0, G__34047__a = new Array(arguments.length -  0);
while (G__34047__i < G__34047__a.length) {G__34047__a[G__34047__i] = arguments[G__34047__i + 0]; ++G__34047__i;}
  path = new cljs.core.IndexedSeq(G__34047__a,0,null);
} 
return G__34044__delegate.call(this,path);};
G__34044.cljs$lang$maxFixedArity = 0;
G__34044.cljs$lang$applyTo = (function (arglist__34048){
var path = cljs.core.seq(arglist__34048);
return G__34044__delegate(path);
});
G__34044.cljs$core$IFn$_invoke$arity$variadic = G__34044__delegate;
return G__34044;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33518 = (function (key,meta33519){
this.key = key;
this.meta33519 = meta33519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33520,meta33519__$1){
var self__ = this;
var _33520__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33518(self__.key,meta33519__$1));
});

com.rpl.specter.t_com$rpl$specter33518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33520){
var self__ = this;
var _33520__$1 = this;
return self__.meta33519;
});

com.rpl.specter.t_com$rpl$specter33518.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33518.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter33518.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter33518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta33519","meta33519",544413985,null)], null);
});

com.rpl.specter.t_com$rpl$specter33518.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33518.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33518";

com.rpl.specter.t_com$rpl$specter33518.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33518");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33518.
 */
com.rpl.specter.__GT_t_com$rpl$specter33518 = (function com$rpl$specter$__GT_t_com$rpl$specter33518(key__$1,meta33519){
return (new com.rpl.specter.t_com$rpl$specter33518(key__$1,meta33519));
});

}

return (new com.rpl.specter.t_com$rpl$specter33518(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33523 = (function (elem,meta33524){
this.elem = elem;
this.meta33524 = meta33524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33525,meta33524__$1){
var self__ = this;
var _33525__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33523(self__.elem,meta33524__$1));
});

com.rpl.specter.t_com$rpl$specter33523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33525){
var self__ = this;
var _33525__$1 = this;
return self__.meta33524;
});

com.rpl.specter.t_com$rpl$specter33523.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33523.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter33523.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter33523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta33524","meta33524",-136975468,null)], null);
});

com.rpl.specter.t_com$rpl$specter33523.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33523.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33523";

com.rpl.specter.t_com$rpl$specter33523.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33523");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33523.
 */
com.rpl.specter.__GT_t_com$rpl$specter33523 = (function com$rpl$specter$__GT_t_com$rpl$specter33523(elem__$1,meta33524){
return (new com.rpl.specter.t_com$rpl$specter33523(elem__$1,meta33524));
});

}

return (new com.rpl.specter.t_com$rpl$specter33523(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33534 = (function (index,meta33535){
this.index = index;
this.meta33535 = meta33535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33536,meta33535__$1){
var self__ = this;
var _33536__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33534(self__.index,meta33535__$1));
});

com.rpl.specter.t_com$rpl$specter33534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33536){
var self__ = this;
var _33536__$1 = this;
return self__.meta33535;
});

com.rpl.specter.t_com$rpl$specter33534.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33534.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter33534.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33553;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33554 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,754,757,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache33553 = info33554;

return info33554;
})():info__28398__auto__);
var precompiled33555 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33556 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled33555.cljs$core$IFn$_invoke$arity$1 ? precompiled33555.cljs$core$IFn$_invoke$arity$1(G__33556) : precompiled33555.call(null,G__33556));
} else {
return precompiled33555;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter33534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta33535","meta33535",1453126585,null)], null);
});

com.rpl.specter.t_com$rpl$specter33534.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33534.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33534";

com.rpl.specter.t_com$rpl$specter33534.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33534");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33534.
 */
com.rpl.specter.__GT_t_com$rpl$specter33534 = (function com$rpl$specter$__GT_t_com$rpl$specter33534(index__$1,meta33535){
return (new com.rpl.specter.t_com$rpl$specter33534(index__$1,meta33535));
});

}

return (new com.rpl.specter.t_com$rpl$specter33534(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33557 = (function (i,meta33558){
this.i = i;
this.meta33558 = meta33558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33559,meta33558__$1){
var self__ = this;
var _33559__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33557(self__.i,meta33558__$1));
});

com.rpl.specter.t_com$rpl$specter33557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33559){
var self__ = this;
var _33559__$1 = this;
return self__.meta33558;
});

com.rpl.specter.t_com$rpl$specter33557.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33557.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter33557.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__34085 = (j - (1));
var G__34086 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__34085;
s = G__34086;
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
var G__34089 = (j + (1));
var G__34090 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__34089;
s = G__34090;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33563;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33564 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,967,970,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache33563 = info33564;

return info33564;
})():info__28398__auto__);
var precompiled33565 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled33565.cljs$core$IFn$_invoke$arity$1 ? precompiled33565.cljs$core$IFn$_invoke$arity$1(G__33567) : precompiled33565.call(null,G__33567));
} else {
return precompiled33565;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33572;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33573 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache33572 = info33573;

return info33573;
})():info__28398__auto__);
var precompiled33574 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled33574.cljs$core$IFn$_invoke$arity$1 ? precompiled33574.cljs$core$IFn$_invoke$arity$1(G__33575) : precompiled33574.call(null,G__33575));
} else {
return precompiled33574;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter33557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta33558","meta33558",-656366811,null)], null);
});

com.rpl.specter.t_com$rpl$specter33557.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33557.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33557";

com.rpl.specter.t_com$rpl$specter33557.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33557");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33557.
 */
com.rpl.specter.__GT_t_com$rpl$specter33557 = (function com$rpl$specter$__GT_t_com$rpl$specter33557(i__$1,meta33558){
return (new com.rpl.specter.t_com$rpl$specter33557(i__$1,meta33558));
});

}

return (new com.rpl.specter.t_com$rpl$specter33557(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i){
return (function (curr__24830__auto__,e){
var ret__24831__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__33578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33578) : next_fn.call(null,G__33578));
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
var vec__33579 = (function (){var G__33582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33582) : next_fn.call(null,G__33582));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33579,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33579,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__33579,newi_STAR_,newe,newi,indices){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33586;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33587 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices){
return (function (p1__33576_SHARP_){
return (p1__33576_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices){
return (function (p1__33577_SHARP_){
return (p1__33577_SHARP_ <= newi);
});})(info__28398__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache33586 = info33587;

return info33587;
})():info__28398__auto__);
var precompiled33588 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33589 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices){
return (function (p1__33576_SHARP_){
return (p1__33576_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices){
return (function (p1__33577_SHARP_){
return (p1__33577_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices))
], null),com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices){
return (function (p1__33576_SHARP_){
return (p1__33576_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices){
return (function (p1__33577_SHARP_){
return (p1__33577_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled33588,dynamic_QMARK___28399__auto__,ii2,curri,vec__33579,newi_STAR_,newe,newi,indices))
], null);
return (precompiled33588.cljs$core$IFn$_invoke$arity$1 ? precompiled33588.cljs$core$IFn$_invoke$arity$1(G__33589) : precompiled33588.call(null,G__33589));
} else {
return precompiled33588;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__33579,newi_STAR_,newe,newi,indices))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33590;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33591 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache33590 = info33591;

return info33591;
})():info__28398__auto__);
var precompiled33592 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled33592.cljs$core$IFn$_invoke$arity$1 ? precompiled33592.cljs$core$IFn$_invoke$arity$1(G__33593) : precompiled33592.call(null,G__33593));
} else {
return precompiled33592;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33594;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33595 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache33594 = info33595;

return info33595;
})():info__28398__auto__);
var precompiled33596 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled33596.cljs$core$IFn$_invoke$arity$1 ? precompiled33596.cljs$core$IFn$_invoke$arity$1(G__33601) : precompiled33596.call(null,G__33601));
} else {
return precompiled33596;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33604 = (function (start,meta33605){
this.start = start;
this.meta33605 = meta33605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33606,meta33605__$1){
var self__ = this;
var _33606__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33604(self__.start,meta33605__$1));
});

com.rpl.specter.t_com$rpl$specter33604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33606){
var self__ = this;
var _33606__$1 = this;
return self__.meta33605;
});

com.rpl.specter.t_com$rpl$specter33604.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33604.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33604.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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
var vec__33610 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,((function (curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33613;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33614 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__33576_SHARP_){
return (p1__33576_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__28398__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__33577_SHARP_){
return (p1__33577_SHARP_ <= newi);
});})(info__28398__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__33576#","p1__33576#",1268854397,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__33577#","p1__33577#",-1917756502,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache33613 = info33614;

return info33614;
})():info__28398__auto__);
var precompiled33615 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33618 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__33576_SHARP_){
return (p1__33576_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__33577_SHARP_){
return (p1__33577_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
], null),com.rpl.specter.ALL,((function (info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__33576_SHARP_){
return (p1__33576_SHARP_ >= (curri + (1)));
});})(info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
,((function (info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1){
return (function (p1__33577_SHARP_){
return (p1__33577_SHARP_ <= newi);
});})(info__28398__auto__,info__28398__auto____$1,precompiled33615,dynamic_QMARK___28399__auto__,ii2,curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
], null);
return (precompiled33615.cljs$core$IFn$_invoke$arity$1 ? precompiled33615.cljs$core$IFn$_invoke$arity$1(G__33618) : precompiled33615.call(null,G__33618));
} else {
return precompiled33615;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
});})(curri,vec__33610,newi_STAR_,newe,newi,indices,next_fn,this__27586__auto____$1))
);

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33620;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33621 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,982,985,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache33620 = info33621;

return info33621;
})():info__28398__auto__);
var precompiled33622 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled33622.cljs$core$IFn$_invoke$arity$1 ? precompiled33622.cljs$core$IFn$_invoke$arity$1(G__33623) : precompiled33622.call(null,G__33623));
} else {
return precompiled33622;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__28398__auto__ = com.rpl.specter.pathcache33624;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33625 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,962,964,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache33624 = info33625;

return info33625;
})():info__28398__auto__);
var precompiled33626 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled33626.cljs$core$IFn$_invoke$arity$1 ? precompiled33626.cljs$core$IFn$_invoke$arity$1(G__33627) : precompiled33626.call(null,G__33627));
} else {
return precompiled33626;
}
})(),newe,s));
});})(indices,next_fn,this__27586__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter33604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta33605","meta33605",-1329362264,null)], null);
});

com.rpl.specter.t_com$rpl$specter33604.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33604.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33604";

com.rpl.specter.t_com$rpl$specter33604.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33604");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33604.
 */
com.rpl.specter.__GT_t_com$rpl$specter33604 = (function com$rpl$specter$__GT_t_com$rpl$specter33604(start__$1,meta33605){
return (new com.rpl.specter.t_com$rpl$specter33604(start__$1,meta33605));
});

}

return (new com.rpl.specter.t_com$rpl$specter33604(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33628 = (function (afn,meta33629){
this.afn = afn;
this.meta33629 = meta33629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33630,meta33629__$1){
var self__ = this;
var _33630__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33628(self__.afn,meta33629__$1));
});

com.rpl.specter.t_com$rpl$specter33628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33630){
var self__ = this;
var _33630__$1 = this;
return self__.meta33629;
});

com.rpl.specter.t_com$rpl$specter33628.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33628.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__33631 = vals;
var G__33632 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__33631,G__33632) : next_fn.call(null,G__33631,G__33632));
});

com.rpl.specter.t_com$rpl$specter33628.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__33633 = vals;
var G__33634 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__33633,G__33634) : next_fn.call(null,G__33633,G__33634));
});

com.rpl.specter.t_com$rpl$specter33628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta33629","meta33629",307628065,null)], null);
});

com.rpl.specter.t_com$rpl$specter33628.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33628.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33628";

com.rpl.specter.t_com$rpl$specter33628.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33628");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33628.
 */
com.rpl.specter.__GT_t_com$rpl$specter33628 = (function com$rpl$specter$__GT_t_com$rpl$specter33628(afn__$1,meta33629){
return (new com.rpl.specter.t_com$rpl$specter33628(afn__$1,meta33629));
});

}

return (new com.rpl.specter.t_com$rpl$specter33628(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__33636 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33636) : next_fn.call(null,G__33636));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__33637 = (function (){var G__33638 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33638) : next_fn.call(null,G__33638));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__33637) : unparse_fn.call(null,G__33637));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33639 = (function (parse_fn,unparse_fn,meta33640){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta33640 = meta33640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33641,meta33640__$1){
var self__ = this;
var _33641__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33639(self__.parse_fn,self__.unparse_fn,meta33640__$1));
});

com.rpl.specter.t_com$rpl$specter33639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33641){
var self__ = this;
var _33641__$1 = this;
return self__.meta33640;
});

com.rpl.specter.t_com$rpl$specter33639.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33639.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter33639.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
var G__33642 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__33642) : self__.unparse_fn.call(null,G__33642));
});

com.rpl.specter.t_com$rpl$specter33639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta33640","meta33640",-1367641448,null)], null);
});

com.rpl.specter.t_com$rpl$specter33639.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33639.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33639";

com.rpl.specter.t_com$rpl$specter33639.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33639");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33639.
 */
com.rpl.specter.__GT_t_com$rpl$specter33639 = (function com$rpl$specter$__GT_t_com$rpl$specter33639(parse_fn__$1,unparse_fn__$1,meta33640){
return (new com.rpl.specter.t_com$rpl$specter33639(parse_fn__$1,unparse_fn__$1,meta33640));
});

}

return (new com.rpl.specter.t_com$rpl$specter33639(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__33643 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33643) : next_fn.call(null,G__33643));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33644 = (function (meta33645){
this.meta33645 = meta33645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33646,meta33645__$1){
var self__ = this;
var _33646__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33644(meta33645__$1));
});

com.rpl.specter.t_com$rpl$specter33644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33646){
var self__ = this;
var _33646__$1 = this;
return self__.meta33645;
});

com.rpl.specter.t_com$rpl$specter33644.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33644.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});

com.rpl.specter.t_com$rpl$specter33644.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33645","meta33645",-486348828,null)], null);
});

com.rpl.specter.t_com$rpl$specter33644.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33644.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33644";

com.rpl.specter.t_com$rpl$specter33644.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33644");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33644.
 */
com.rpl.specter.__GT_t_com$rpl$specter33644 = (function com$rpl$specter$__GT_t_com$rpl$specter33644(meta33645){
return (new com.rpl.specter.t_com$rpl$specter33644(meta33645));
});

}

return (new com.rpl.specter.t_com$rpl$specter33644(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33647 = (function (re,meta33648){
this.re = re;
this.meta33648 = meta33648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33649,meta33648__$1){
var self__ = this;
var _33649__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33647(self__.re,meta33648__$1));
});

com.rpl.specter.t_com$rpl$specter33647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33649){
var self__ = this;
var _33649__$1 = this;
return self__.meta33648;
});

com.rpl.specter.t_com$rpl$specter33647.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33647.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33647.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return clojure.string.replace(structure,self__.re,next_fn);
});

com.rpl.specter.t_com$rpl$specter33647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta33648","meta33648",-1952878592,null)], null);
});

com.rpl.specter.t_com$rpl$specter33647.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33647.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33647";

com.rpl.specter.t_com$rpl$specter33647.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33647");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33647.
 */
com.rpl.specter.__GT_t_com$rpl$specter33647 = (function com$rpl$specter$__GT_t_com$rpl$specter33647(re__$1,meta33648){
return (new com.rpl.specter.t_com$rpl$specter33647(re__$1,meta33648));
});

}

return (new com.rpl.specter.t_com$rpl$specter33647(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34266__delegate = function (path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
return afn;
} else {
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5455__auto__){
return (function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33653 = (function (path,temp__5455__auto__,late,meta33654){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta33654 = meta33654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_33655,meta33654__$1){
var self__ = this;
var _33655__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33653(self__.path,self__.temp__5455__auto__,self__.late,meta33654__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_33655){
var self__ = this;
var _33655__$1 = this;
return self__.meta33654;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33653.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33653.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__33651_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__33651_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33653.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__33652_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__33652_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33653.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta33654","meta33654",749697966,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33653.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33653.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33653";

com.rpl.specter.t_com$rpl$specter33653.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33653");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33653.
 */
com.rpl.specter.__GT_t_com$rpl$specter33653 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter33653(path__$1,temp__5455__auto____$1,late__$1,meta33654){
return (new com.rpl.specter.t_com$rpl$specter33653(path__$1,temp__5455__auto____$1,late__$1,meta33654));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter33653(path,temp__5455__auto__,late,null));
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
var G__34266 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34324__i = 0, G__34324__a = new Array(arguments.length -  0);
while (G__34324__i < G__34324__a.length) {G__34324__a[G__34324__i] = arguments[G__34324__i + 0]; ++G__34324__i;}
  path = new cljs.core.IndexedSeq(G__34324__a,0,null);
} 
return G__34266__delegate.call(this,path);};
G__34266.cljs$lang$maxFixedArity = 0;
G__34266.cljs$lang$applyTo = (function (arglist__34326){
var path = cljs.core.seq(arglist__34326);
return G__34266__delegate(path);
});
G__34266.cljs$core$IFn$_invoke$arity$variadic = G__34266__delegate;
return G__34266;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34334__delegate = function (path){
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33658 = (function (path,temp__5455__auto__,late,meta33659){
this.path = path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late = late;
this.meta33659 = meta33659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_33660,meta33659__$1){
var self__ = this;
var _33660__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33658(self__.path,self__.temp__5455__auto__,self__.late,meta33659__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_33660){
var self__ = this;
var _33660__$1 = this;
return self__.meta33659;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33658.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33658.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5455__auto__){
return (function (p1__33656_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__33656_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33658.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5455__auto__){
return (function (p1__33657_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__33657_SHARP_);
});})(this$__$1,temp__5455__auto__))
,vals,structure,next_fn);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33658.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta33659","meta33659",-1021915730,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33658.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33658.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33658";

com.rpl.specter.t_com$rpl$specter33658.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33658");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33658.
 */
com.rpl.specter.__GT_t_com$rpl$specter33658 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter33658(path__$1,temp__5455__auto____$1,late__$1,meta33659){
return (new com.rpl.specter.t_com$rpl$specter33658(path__$1,temp__5455__auto____$1,late__$1,meta33659));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter33658(path,temp__5455__auto__,late,null));
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
var G__34334 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34473__i = 0, G__34473__a = new Array(arguments.length -  0);
while (G__34473__i < G__34473__a.length) {G__34473__a[G__34473__i] = arguments[G__34473__i + 0]; ++G__34473__i;}
  path = new cljs.core.IndexedSeq(G__34473__a,0,null);
} 
return G__34334__delegate.call(this,path);};
G__34334.cljs$lang$maxFixedArity = 0;
G__34334.cljs$lang$applyTo = (function (arglist__34474){
var path = cljs.core.seq(arglist__34474);
return G__34334__delegate(path);
});
G__34334.cljs$core$IFn$_invoke$arity$variadic = G__34334__delegate;
return G__34334;
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
var G__34477__delegate = function (path){
var G__33661 = com.rpl.specter.ALL;
var G__33662 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__33661,G__33662) : com.rpl.specter.subselect.call(null,G__33661,G__33662));
};
var G__34477 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34482__i = 0, G__34482__a = new Array(arguments.length -  0);
while (G__34482__i < G__34482__a.length) {G__34482__a[G__34482__i] = arguments[G__34482__i + 0]; ++G__34482__i;}
  path = new cljs.core.IndexedSeq(G__34482__a,0,null);
} 
return G__34477__delegate.call(this,path);};
G__34477.cljs$lang$maxFixedArity = 0;
G__34477.cljs$lang$applyTo = (function (arglist__34483){
var path = cljs.core.seq(arglist__34483);
return G__34477__delegate(path);
});
G__34477.cljs$core$IFn$_invoke$arity$variadic = G__34477__delegate;
return G__34477;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33663 = (function (path,update_fn,late,late_fn,meta33664){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta33664 = meta33664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33665,meta33664__$1){
var self__ = this;
var _33665__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33663(self__.path,self__.update_fn,self__.late,self__.late_fn,meta33664__$1));
});

com.rpl.specter.t_com$rpl$specter33663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33665){
var self__ = this;
var _33665__$1 = this;
return self__.meta33664;
});

com.rpl.specter.t_com$rpl$specter33663.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33663.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter33663.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter33663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta33664","meta33664",1839370582,null)], null);
});

com.rpl.specter.t_com$rpl$specter33663.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33663.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33663";

com.rpl.specter.t_com$rpl$specter33663.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33663");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33663.
 */
com.rpl.specter.__GT_t_com$rpl$specter33663 = (function com$rpl$specter$__GT_t_com$rpl$specter33663(path__$1,update_fn__$1,late__$1,late_fn__$1,meta33664){
return (new com.rpl.specter.t_com$rpl$specter33663(path__$1,update_fn__$1,late__$1,late_fn__$1,meta33664));
});

}

return (new com.rpl.specter.t_com$rpl$specter33663(path,update_fn,late,late_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33672 = (function (path,reduce_fn,late,late_fn,meta33673){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta33673 = meta33673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33674,meta33673__$1){
var self__ = this;
var _33674__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33672(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta33673__$1));
});

com.rpl.specter.t_com$rpl$specter33672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33674){
var self__ = this;
var _33674__$1 = this;
return self__.meta33673;
});

com.rpl.specter.t_com$rpl$specter33672.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33672.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter33672.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter33672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta33673","meta33673",1270866256,null)], null);
});

com.rpl.specter.t_com$rpl$specter33672.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33672.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33672";

com.rpl.specter.t_com$rpl$specter33672.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33672");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33672.
 */
com.rpl.specter.__GT_t_com$rpl$specter33672 = (function com$rpl$specter$__GT_t_com$rpl$specter33672(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta33673){
return (new com.rpl.specter.t_com$rpl$specter33672(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta33673));
});

}

return (new com.rpl.specter.t_com$rpl$specter33672(path,reduce_fn,late,late_fn,null));
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
var G__33680 = (function (p1__33679_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__33679_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__33680) : com.rpl.specter.pred.call(null,G__33680));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__33684 = (function (p1__33681_SHARP_){
return (p1__33681_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__33684) : com.rpl.specter.pred.call(null,G__33684));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__33688 = (function (p1__33685_SHARP_){
return (p1__33685_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__33688) : com.rpl.specter.pred.call(null,G__33688));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__33690 = (function (p1__33689_SHARP_){
return (p1__33689_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__33690) : com.rpl.specter.pred.call(null,G__33690));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__33692 = (function (p1__33691_SHARP_){
return (p1__33691_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__33692) : com.rpl.specter.pred.call(null,G__33692));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__33693_34537 = com.rpl.specter.protocols.implicit_nav;
var G__33694_34538 = "null";
var G__33695_34539 = ((function (G__33693_34537,G__33694_34538){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__33693_34537,G__33694_34538))
;
goog.object.set(G__33693_34537,G__33694_34538,G__33695_34539);
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

var G__33701_34544 = com.rpl.specter.protocols.implicit_nav;
var G__33702_34545 = "string";
var G__33703_34546 = ((function (G__33701_34544,G__33702_34545){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__33701_34544,G__33702_34545))
;
goog.object.set(G__33701_34544,G__33702_34545,G__33703_34546);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

var G__33707_34551 = com.rpl.specter.protocols.implicit_nav;
var G__33708_34552 = "number";
var G__33709_34553 = ((function (G__33707_34551,G__33708_34552){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__33707_34551,G__33708_34552))
;
goog.object.set(G__33707_34551,G__33708_34552,G__33709_34553);
cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

var G__33710_34561 = com.rpl.specter.protocols.implicit_nav;
var G__33711_34562 = "boolean";
var G__33712_34563 = ((function (G__33710_34561,G__33711_34562){
return (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
});})(G__33710_34561,G__33711_34562))
;
goog.object.set(G__33710_34561,G__33711_34562,G__33712_34563);
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__33717_34564 = com.rpl.specter.protocols.implicit_nav;
var G__33718_34565 = "function";
var G__33719_34566 = ((function (G__33717_34564,G__33718_34565){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__33717_34564,G__33718_34565))
;
goog.object.set(G__33717_34564,G__33718_34565,G__33719_34566);
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
var G__33724 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33724) : next_fn.call(null,G__33724));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__33725 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33725) : next_fn.call(null,G__33725));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33726 = (function (v,meta33727){
this.v = v;
this.meta33727 = meta33727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33728,meta33727__$1){
var self__ = this;
var _33728__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33726(self__.v,meta33727__$1));
});

com.rpl.specter.t_com$rpl$specter33726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33728){
var self__ = this;
var _33728__$1 = this;
return self__.meta33727;
});

com.rpl.specter.t_com$rpl$specter33726.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33726.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter33726.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter33726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta33727","meta33727",-995143297,null)], null);
});

com.rpl.specter.t_com$rpl$specter33726.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33726.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33726";

com.rpl.specter.t_com$rpl$specter33726.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33726");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33726.
 */
com.rpl.specter.__GT_t_com$rpl$specter33726 = (function com$rpl$specter$__GT_t_com$rpl$specter33726(v__$1,meta33727){
return (new com.rpl.specter.t_com$rpl$specter33726(v__$1,meta33727));
});

}

return (new com.rpl.specter.t_com$rpl$specter33726(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__33731 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__33731) : com.rpl.specter.nil__GT_val.call(null,G__33731));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__33732 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__33732) : com.rpl.specter.nil__GT_val.call(null,G__33732));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__33733 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__33733) : com.rpl.specter.nil__GT_val.call(null,G__33733));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__33735 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33735) : next_fn.call(null,G__33735));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__33736 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33736) : next_fn.call(null,G__33736));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33737 = (function (meta33738){
this.meta33738 = meta33738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33739,meta33738__$1){
var self__ = this;
var _33739__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33737(meta33738__$1));
});

com.rpl.specter.t_com$rpl$specter33737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33739){
var self__ = this;
var _33739__$1 = this;
return self__.meta33738;
});

com.rpl.specter.t_com$rpl$specter33737.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33737.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});

com.rpl.specter.t_com$rpl$specter33737.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter33737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33738","meta33738",-628086672,null)], null);
});

com.rpl.specter.t_com$rpl$specter33737.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33737.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33737";

com.rpl.specter.t_com$rpl$specter33737.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33737");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33737.
 */
com.rpl.specter.__GT_t_com$rpl$specter33737 = (function com$rpl$specter$__GT_t_com$rpl$specter33737(meta33738){
return (new com.rpl.specter.t_com$rpl$specter33737(meta33738));
});

}

return (new com.rpl.specter.t_com$rpl$specter33737(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__33740 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33740) : next_fn.call(null,G__33740));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__33741 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33741) : next_fn.call(null,G__33741));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33742 = (function (meta33743){
this.meta33743 = meta33743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33744,meta33743__$1){
var self__ = this;
var _33744__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33742(meta33743__$1));
});

com.rpl.specter.t_com$rpl$specter33742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33744){
var self__ = this;
var _33744__$1 = this;
return self__.meta33743;
});

com.rpl.specter.t_com$rpl$specter33742.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33742.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.name(structure));
});

com.rpl.specter.t_com$rpl$specter33742.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33743","meta33743",-56604061,null)], null);
});

com.rpl.specter.t_com$rpl$specter33742.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33742.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33742";

com.rpl.specter.t_com$rpl$specter33742.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33742");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33742.
 */
com.rpl.specter.__GT_t_com$rpl$specter33742 = (function com$rpl$specter$__GT_t_com$rpl$specter33742(meta33743){
return (new com.rpl.specter.t_com$rpl$specter33742(meta33743));
});

}

return (new com.rpl.specter.t_com$rpl$specter33742(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__33750 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33750) : next_fn.call(null,G__33750));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__33779 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33779) : next_fn.call(null,G__33779));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33780 = (function (meta33781){
this.meta33781 = meta33781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33782,meta33781__$1){
var self__ = this;
var _33782__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33780(meta33781__$1));
});

com.rpl.specter.t_com$rpl$specter33780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33782){
var self__ = this;
var _33782__$1 = this;
return self__.meta33781;
});

com.rpl.specter.t_com$rpl$specter33780.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33780.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
var self__ = this;
var this__27586__auto____$1 = this;
var next_fn = ((function (this__27586__auto____$1){
return (function (s__27589__auto__){
return (next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27588__auto__.cljs$core$IFn$_invoke$arity$2(vals__27587__auto__,s__27589__auto__) : next_fn__27588__auto__.call(null,vals__27587__auto__,s__27589__auto__));
});})(this__27586__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});

com.rpl.specter.t_com$rpl$specter33780.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27586__auto__,vals__27587__auto__,structure,next_fn__27588__auto__){
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

com.rpl.specter.t_com$rpl$specter33780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33781","meta33781",1273606656,null)], null);
});

com.rpl.specter.t_com$rpl$specter33780.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33780.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33780";

com.rpl.specter.t_com$rpl$specter33780.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33780");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33780.
 */
com.rpl.specter.__GT_t_com$rpl$specter33780 = (function com$rpl$specter$__GT_t_com$rpl$specter33780(meta33781){
return (new com.rpl.specter.t_com$rpl$specter33780(meta33781));
});

}

return (new com.rpl.specter.t_com$rpl$specter33780(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34618__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33789 = (function (path,late,meta33790){
this.path = path;
this.late = late;
this.meta33790 = meta33790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33791,meta33790__$1){
var self__ = this;
var _33791__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33789(self__.path,self__.late,meta33790__$1));
});

com.rpl.specter.t_com$rpl$specter33789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33791){
var self__ = this;
var _33791__$1 = this;
return self__.meta33790;
});

com.rpl.specter.t_com$rpl$specter33789.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33789.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__33793 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33792,G__33793) : next_fn__28390__auto__.call(null,G__33792,G__33793));
});

com.rpl.specter.t_com$rpl$specter33789.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33794 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__33795 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33794,G__33795) : next_fn__28390__auto__.call(null,G__33794,G__33795));
});

com.rpl.specter.t_com$rpl$specter33789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta33790","meta33790",535614164,null)], null);
});

com.rpl.specter.t_com$rpl$specter33789.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33789.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33789";

com.rpl.specter.t_com$rpl$specter33789.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33789");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33789.
 */
com.rpl.specter.__GT_t_com$rpl$specter33789 = (function com$rpl$specter$__GT_t_com$rpl$specter33789(path__$1,late__$1,meta33790){
return (new com.rpl.specter.t_com$rpl$specter33789(path__$1,late__$1,meta33790));
});

}

return (new com.rpl.specter.t_com$rpl$specter33789(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__34618 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34640__i = 0, G__34640__a = new Array(arguments.length -  0);
while (G__34640__i < G__34640__a.length) {G__34640__a[G__34640__i] = arguments[G__34640__i + 0]; ++G__34640__i;}
  path = new cljs.core.IndexedSeq(G__34640__a,0,null);
} 
return G__34618__delegate.call(this,path);};
G__34618.cljs$lang$maxFixedArity = 0;
G__34618.cljs$lang$applyTo = (function (arglist__34642){
var path = cljs.core.seq(arglist__34642);
return G__34618__delegate(path);
});
G__34618.cljs$core$IFn$_invoke$arity$variadic = G__34618__delegate;
return G__34618;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34644__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33796 = (function (path,late,meta33797){
this.path = path;
this.late = late;
this.meta33797 = meta33797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33798,meta33797__$1){
var self__ = this;
var _33798__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33796(self__.path,self__.late,meta33797__$1));
});

com.rpl.specter.t_com$rpl$specter33796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33798){
var self__ = this;
var _33798__$1 = this;
return self__.meta33797;
});

com.rpl.specter.t_com$rpl$specter33796.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33796.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33799 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__33800 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33799,G__33800) : next_fn__28390__auto__.call(null,G__33799,G__33800));
});

com.rpl.specter.t_com$rpl$specter33796.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33801 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__33802 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33801,G__33802) : next_fn__28390__auto__.call(null,G__33801,G__33802));
});

com.rpl.specter.t_com$rpl$specter33796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta33797","meta33797",-1404267306,null)], null);
});

com.rpl.specter.t_com$rpl$specter33796.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33796.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33796";

com.rpl.specter.t_com$rpl$specter33796.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33796");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33796.
 */
com.rpl.specter.__GT_t_com$rpl$specter33796 = (function com$rpl$specter$__GT_t_com$rpl$specter33796(path__$1,late__$1,meta33797){
return (new com.rpl.specter.t_com$rpl$specter33796(path__$1,late__$1,meta33797));
});

}

return (new com.rpl.specter.t_com$rpl$specter33796(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__34644 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34652__i = 0, G__34652__a = new Array(arguments.length -  0);
while (G__34652__i < G__34652__a.length) {G__34652__a[G__34652__i] = arguments[G__34652__i + 0]; ++G__34652__i;}
  path = new cljs.core.IndexedSeq(G__34652__a,0,null);
} 
return G__34644__delegate.call(this,path);};
G__34644.cljs$lang$maxFixedArity = 0;
G__34644.cljs$lang$applyTo = (function (arglist__34653){
var path = cljs.core.seq(arglist__34653);
return G__34644__delegate(path);
});
G__34644.cljs$core$IFn$_invoke$arity$variadic = G__34644__delegate;
return G__34644;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33803 = (function (val,meta33804){
this.val = val;
this.meta33804 = meta33804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33805,meta33804__$1){
var self__ = this;
var _33805__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33803(self__.val,meta33804__$1));
});

com.rpl.specter.t_com$rpl$specter33803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33805){
var self__ = this;
var _33805__$1 = this;
return self__.meta33804;
});

com.rpl.specter.t_com$rpl$specter33803.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33803.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,self__.val);
var G__33810 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33809,G__33810) : next_fn__28390__auto__.call(null,G__33809,G__33810));
});

com.rpl.specter.t_com$rpl$specter33803.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28388__auto__,vals__28389__auto__,structure,next_fn__28390__auto__){
var self__ = this;
var this__28388__auto____$1 = this;
var G__33811 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__28389__auto__,self__.val);
var G__33812 = structure;
return (next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__28390__auto__.cljs$core$IFn$_invoke$arity$2(G__33811,G__33812) : next_fn__28390__auto__.call(null,G__33811,G__33812));
});

com.rpl.specter.t_com$rpl$specter33803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta33804","meta33804",-173493221,null)], null);
});

com.rpl.specter.t_com$rpl$specter33803.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33803.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33803";

com.rpl.specter.t_com$rpl$specter33803.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33803");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33803.
 */
com.rpl.specter.__GT_t_com$rpl$specter33803 = (function com$rpl$specter$__GT_t_com$rpl$specter33803(val__$1,meta33804){
return (new com.rpl.specter.t_com$rpl$specter33803(val__$1,meta33804));
});

}

return (new com.rpl.specter.t_com$rpl$specter33803(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34655__delegate = function (path){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33815 = (function (path,late,meta33816){
this.path = path;
this.late = late;
this.meta33816 = meta33816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33817,meta33816__$1){
var self__ = this;
var _33817__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33815(self__.path,self__.late,meta33816__$1));
});

com.rpl.specter.t_com$rpl$specter33815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33817){
var self__ = this;
var _33817__$1 = this;
return self__.meta33816;
});

com.rpl.specter.t_com$rpl$specter33815.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33815.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter33815.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter33815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta33816","meta33816",447592747,null)], null);
});

com.rpl.specter.t_com$rpl$specter33815.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33815.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33815";

com.rpl.specter.t_com$rpl$specter33815.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33815");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33815.
 */
com.rpl.specter.__GT_t_com$rpl$specter33815 = (function com$rpl$specter$__GT_t_com$rpl$specter33815(path__$1,late__$1,meta33816){
return (new com.rpl.specter.t_com$rpl$specter33815(path__$1,late__$1,meta33816));
});

}

return (new com.rpl.specter.t_com$rpl$specter33815(path,late,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
};
var G__34655 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34657__i = 0, G__34657__a = new Array(arguments.length -  0);
while (G__34657__i < G__34657__a.length) {G__34657__a[G__34657__i] = arguments[G__34657__i + 0]; ++G__34657__i;}
  path = new cljs.core.IndexedSeq(G__34657__a,0,null);
} 
return G__34655__delegate.call(this,path);};
G__34655.cljs$lang$maxFixedArity = 0;
G__34655.cljs$lang$applyTo = (function (arglist__34658){
var path = cljs.core.seq(arglist__34658);
return G__34655__delegate(path);
});
G__34655.cljs$core$IFn$_invoke$arity$variadic = G__34655__delegate;
return G__34655;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33828 = (function (meta33829){
this.meta33829 = meta33829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33830,meta33829__$1){
var self__ = this;
var _33830__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33828(meta33829__$1));
});

com.rpl.specter.t_com$rpl$specter33828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33830){
var self__ = this;
var _33830__$1 = this;
return self__.meta33829;
});

com.rpl.specter.t_com$rpl$specter33828.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33828.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__33831 = cljs.core.PersistentVector.EMPTY;
var G__33832 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__33831,G__33832) : next_fn.call(null,G__33831,G__33832));
});

com.rpl.specter.t_com$rpl$specter33828.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__33833 = cljs.core.PersistentVector.EMPTY;
var G__33834 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__33833,G__33834) : next_fn.call(null,G__33833,G__33834));
});

com.rpl.specter.t_com$rpl$specter33828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta33829","meta33829",-189668106,null)], null);
});

com.rpl.specter.t_com$rpl$specter33828.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33828.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33828";

com.rpl.specter.t_com$rpl$specter33828.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33828");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33828.
 */
com.rpl.specter.__GT_t_com$rpl$specter33828 = (function com$rpl$specter$__GT_t_com$rpl$specter33828(meta33829){
return (new com.rpl.specter.t_com$rpl$specter33828(meta33829));
});

}

return (new com.rpl.specter.t_com$rpl$specter33828(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__34661 = null;
var G__34661__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__34661__3 = (function (cond_p,then_path,else_path){
var temp__5455__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5455__auto__)){
var afn = temp__5455__auto__;
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5455__auto__){
return (function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33841 = (function (cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,meta33842){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta33842 = meta33842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5455__auto__){
return (function (_33843,meta33842__$1){
var self__ = this;
var _33843__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33841(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.afn,self__.late_then,self__.late_else,meta33842__$1));
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5455__auto__){
return (function (_33843){
var self__ = this;
var _33843__$1 = this;
return self__.meta33842;
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33841.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33841.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33841.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33841.getBasis = ((function (afn,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta33842","meta33842",1601525236,null)], null);
});})(afn,temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33841.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33841.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33841";

com.rpl.specter.t_com$rpl$specter33841.cljs$lang$ctorPrWriter = ((function (afn,temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33841");
});})(afn,temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33841.
 */
com.rpl.specter.__GT_t_com$rpl$specter33841 = ((function (afn,temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter33841(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta33842){
return (new com.rpl.specter.t_com$rpl$specter33841(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,afn__$1,late_then__$1,late_else__$1,meta33842));
});})(afn,temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter33841(cond_p,then_path,else_path,temp__5455__auto__,afn,late_then,late_else,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33848 = (function (cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,meta33849){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5455__auto__ = temp__5455__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta33849 = meta33849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5455__auto__){
return (function (_33850,meta33849__$1){
var self__ = this;
var _33850__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33848(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5455__auto__,self__.late_cond,self__.late_then,self__.late_else,meta33849__$1));
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5455__auto__){
return (function (_33850){
var self__ = this;
var _33850__$1 = this;
return self__.meta33849;
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33848.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33848.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__33835_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__33835_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33848.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5455__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5455__auto__){
return (function (p1__33836_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__33836_SHARP_);
});})(this$__$1,temp__5455__auto__))
,self__.late_then,self__.late_else);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33848.getBasis = ((function (temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta33849","meta33849",975871176,null)], null);
});})(temp__5455__auto__))
;

com.rpl.specter.t_com$rpl$specter33848.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33848.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33848";

com.rpl.specter.t_com$rpl$specter33848.cljs$lang$ctorPrWriter = ((function (temp__5455__auto__){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33848");
});})(temp__5455__auto__))
;

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33848.
 */
com.rpl.specter.__GT_t_com$rpl$specter33848 = ((function (temp__5455__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter33848(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta33849){
return (new com.rpl.specter.t_com$rpl$specter33848(cond_p__$1,then_path__$1,else_path__$1,temp__5455__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta33849));
});})(temp__5455__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter33848(cond_p,then_path,else_path,temp__5455__auto__,late_cond,late_then,late_else,null));
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
G__34661 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__34661__2.call(this,cond_p,then_path);
case 3:
return G__34661__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34661.cljs$core$IFn$_invoke$arity$2 = G__34661__2;
G__34661.cljs$core$IFn$_invoke$arity$3 = G__34661__3;
return G__34661;
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
var G__34674__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__33851){
var vec__33852 = p__33851;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33852,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33852,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__34674 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__34711__i = 0, G__34711__a = new Array(arguments.length -  0);
while (G__34711__i < G__34711__a.length) {G__34711__a[G__34711__i] = arguments[G__34711__i + 0]; ++G__34711__i;}
  conds = new cljs.core.IndexedSeq(G__34711__a,0,null);
} 
return G__34674__delegate.call(this,conds);};
G__34674.cljs$lang$maxFixedArity = 0;
G__34674.cljs$lang$applyTo = (function (arglist__34713){
var conds = cljs.core.seq(arglist__34713);
return G__34674__delegate(conds);
});
G__34674.cljs$core$IFn$_invoke$arity$variadic = G__34674__delegate;
return G__34674;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__34715 = null;
var G__34715__0 = (function (){
return com.rpl.specter.STAY;
});
var G__34715__1 = (function (path){
return path;
});
var G__34715__2 = (function (path1,path2){
var builder__28391__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter33855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter33855 = (function (path1,path2,late1,late2,meta33856){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta33856 = meta33856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter33855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33857,meta33856__$1){
var self__ = this;
var _33857__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter33855(self__.path1,self__.path2,self__.late1,self__.late2,meta33856__$1));
});

com.rpl.specter.t_com$rpl$specter33855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33857){
var self__ = this;
var _33857__$1 = this;
return self__.meta33856;
});

com.rpl.specter.t_com$rpl$specter33855.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter33855.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter33855.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter33855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta33856","meta33856",-337555990,null)], null);
});

com.rpl.specter.t_com$rpl$specter33855.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter33855.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter33855";

com.rpl.specter.t_com$rpl$specter33855.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"com.rpl.specter/t_com$rpl$specter33855");
});

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter33855.
 */
com.rpl.specter.__GT_t_com$rpl$specter33855 = (function com$rpl$specter$__GT_t_com$rpl$specter33855(path1__$1,path2__$1,late1__$1,late2__$1,meta33856){
return (new com.rpl.specter.t_com$rpl$specter33855(path1__$1,path2__$1,late1__$1,late2__$1,meta33856));
});

}

return (new com.rpl.specter.t_com$rpl$specter33855(path1,path2,late1,late2,null));
}));
var curr_params__28392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28392__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__28391__auto__,curr_params__28392__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__28391__auto__,curr_params__28392__auto__,null);
}
});
var G__34715__3 = (function() { 
var G__34722__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__34722 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__34723__i = 0, G__34723__a = new Array(arguments.length -  2);
while (G__34723__i < G__34723__a.length) {G__34723__a[G__34723__i] = arguments[G__34723__i + 2]; ++G__34723__i;}
  paths = new cljs.core.IndexedSeq(G__34723__a,0,null);
} 
return G__34722__delegate.call(this,path1,path2,paths);};
G__34722.cljs$lang$maxFixedArity = 2;
G__34722.cljs$lang$applyTo = (function (arglist__34724){
var path1 = cljs.core.first(arglist__34724);
arglist__34724 = cljs.core.next(arglist__34724);
var path2 = cljs.core.first(arglist__34724);
var paths = cljs.core.rest(arglist__34724);
return G__34722__delegate(path1,path2,paths);
});
G__34722.cljs$core$IFn$_invoke$arity$variadic = G__34722__delegate;
return G__34722;
})()
;
G__34715 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__34715__0.call(this);
case 1:
return G__34715__1.call(this,path1);
case 2:
return G__34715__2.call(this,path1,path2);
default:
var G__34725 = null;
if (arguments.length > 2) {
var G__34726__i = 0, G__34726__a = new Array(arguments.length -  2);
while (G__34726__i < G__34726__a.length) {G__34726__a[G__34726__i] = arguments[G__34726__i + 2]; ++G__34726__i;}
G__34725 = new cljs.core.IndexedSeq(G__34726__a,0,null);
}
return G__34715__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__34725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34715.cljs$lang$maxFixedArity = 2;
G__34715.cljs$lang$applyTo = G__34715__3.cljs$lang$applyTo;
G__34715.cljs$core$IFn$_invoke$arity$0 = G__34715__0;
G__34715.cljs$core$IFn$_invoke$arity$1 = G__34715__1;
G__34715.cljs$core$IFn$_invoke$arity$2 = G__34715__2;
G__34715.cljs$core$IFn$_invoke$arity$variadic = G__34715__3.cljs$core$IFn$_invoke$arity$variadic;
return G__34715;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34727__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__34727 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34729__i = 0, G__34729__a = new Array(arguments.length -  0);
while (G__34729__i < G__34729__a.length) {G__34729__a[G__34729__i] = arguments[G__34729__i + 0]; ++G__34729__i;}
  path = new cljs.core.IndexedSeq(G__34729__a,0,null);
} 
return G__34727__delegate.call(this,path);};
G__34727.cljs$lang$maxFixedArity = 0;
G__34727.cljs$lang$applyTo = (function (arglist__34730){
var path = cljs.core.seq(arglist__34730);
return G__34727__delegate(path);
});
G__34727.cljs$core$IFn$_invoke$arity$variadic = G__34727__delegate;
return G__34727;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34732__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__34732 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34733__i = 0, G__34733__a = new Array(arguments.length -  0);
while (G__34733__i < G__34733__a.length) {G__34733__a[G__34733__i] = arguments[G__34733__i + 0]; ++G__34733__i;}
  path = new cljs.core.IndexedSeq(G__34733__a,0,null);
} 
return G__34732__delegate.call(this,path);};
G__34732.cljs$lang$maxFixedArity = 0;
G__34732.cljs$lang$applyTo = (function (arglist__34734){
var path = cljs.core.seq(arglist__34734);
return G__34732__delegate(path);
});
G__34732.cljs$core$IFn$_invoke$arity$variadic = G__34732__delegate;
return G__34732;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__28398__auto__ = com.rpl.specter.pathcache33871;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33872 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(21),(1),(2103),(2103),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,678,681,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache33871 = info33872;

return info33872;
})():info__28398__auto__);
var precompiled33873 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33878 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled33873.cljs$core$IFn$_invoke$arity$1 ? precompiled33873.cljs$core$IFn$_invoke$arity$1(G__33878) : precompiled33873.call(null,G__33878));
} else {
return precompiled33873;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__28398__auto__ = com.rpl.specter.pathcache33879;
var info__28398__auto____$1 = (((info__28398__auto__ == null))?(function (){var info33880 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1393,1393,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1174,1178,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,643,645,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(21),(1),(2103),(2103),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,688,690,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache33879 = info33880;

return info33880;
})():info__28398__auto__);
var precompiled33881 = com.rpl.specter.impl.cached_path_info_precompiled(info__28398__auto____$1);
var dynamic_QMARK___28399__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__28398__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28399__auto__)){
var G__33882 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled33881.cljs$core$IFn$_invoke$arity$1 ? precompiled33881.cljs$core$IFn$_invoke$arity$1(G__33882) : precompiled33881.call(null,G__33882));
} else {
return precompiled33881;
}
})());

return p;
}));
var empty__GT_NONE_34735 = (function (){var G__33883 = cljs.core.empty_QMARK_;
var G__33884 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__33883,G__33884) : com.rpl.specter.if_path.call(null,G__33883,G__33884));
})();
var compact_STAR__34736 = ((function (empty__GT_NONE_34735){
return (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_34735) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_34735));
});})(empty__GT_NONE_34735))
;
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (empty__GT_NONE_34735,compact_STAR__34736){
return (function() { 
var G__34737__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__34736,path);
};
var G__34737 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34738__i = 0, G__34738__a = new Array(arguments.length -  0);
while (G__34738__i < G__34738__a.length) {G__34738__a[G__34738__i] = arguments[G__34738__i + 0]; ++G__34738__i;}
  path = new cljs.core.IndexedSeq(G__34738__a,0,null);
} 
return G__34737__delegate.call(this,path);};
G__34737.cljs$lang$maxFixedArity = 0;
G__34737.cljs$lang$applyTo = (function (arglist__34739){
var path = cljs.core.seq(arglist__34739);
return G__34737__delegate(path);
});
G__34737.cljs$core$IFn$_invoke$arity$variadic = G__34737__delegate;
return G__34737;
})()
;})(empty__GT_NONE_34735,compact_STAR__34736))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
