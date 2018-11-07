goog.provide('workers.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs_promises.core');
goog.require('cljs_promises.async');
goog.require('test.core');
goog.require('utils.core');
goog.require('shadow.js.shim.module$workerpool');
goog.require('oops.core');
workers.core.w_pool = (function (){var target_obj_14979 = shadow.js.shim.module$workerpool;
var _STAR_runtime_state_STAR_14983 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_14979,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_14981 = [target_obj_14979,(function (){var next_obj_14982 = ((oops.core.validate_object_access_dynamically(target_obj_14979,(0),"pool",true,true,false))?(target_obj_14979["pool"]):null);
return next_obj_14982;
})()];
var fn_14980 = (call_info_14981[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_14980,oops.state.get_last_access_modifier())){
if(!((fn_14980 == null))){
return fn_14980.call((call_info_14981[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_14983;
}})();
workers.core.w_exec = (function workers$core$w_exec(js_fn,args){
var target_obj_14984 = workers.core.w_pool;
var _STAR_runtime_state_STAR_14988 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_14984,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_14986 = [target_obj_14984,(function (){var next_obj_14987 = ((oops.core.validate_object_access_dynamically(target_obj_14984,(0),"exec",true,true,false))?(target_obj_14984["exec"]):null);
return next_obj_14987;
})()];
var fn_14985 = (call_info_14986[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_14985,oops.state.get_last_access_modifier())){
if(!((fn_14985 == null))){
return fn_14985.call((call_info_14986[(0)]),js_fn,args);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_14988;
}});
workers.core.terminate = (function (){var target_obj_14989 = workers.core.w_pool;
var _STAR_runtime_state_STAR_14993 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_14989,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_14991 = [target_obj_14989,(function (){var next_obj_14992 = ((oops.core.validate_object_access_dynamically(target_obj_14989,(0),"terminate",true,true,false))?(target_obj_14989["terminate"]):null);
return next_obj_14992;
})()];
var fn_14990 = (call_info_14991[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_14990,oops.state.get_last_access_modifier())){
if(!((fn_14990 == null))){
return fn_14990.call((call_info_14991[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_14993;
}})();
workers.core.supercalifragilistic = (function workers$core$supercalifragilistic(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14995 = arguments.length;
var i__4532__auto___14996 = (0);
while(true){
if((i__4532__auto___14996 < len__4531__auto___14995)){
args__4534__auto__.push((arguments[i__4532__auto___14996]));

var G__14997 = (i__4532__auto___14996 + (1));
i__4532__auto___14996 = G__14997;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return workers.core.supercalifragilistic.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});
goog.exportSymbol('workers.core.supercalifragilistic', workers.core.supercalifragilistic);

workers.core.supercalifragilistic.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,args);
});

workers.core.supercalifragilistic.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
workers.core.supercalifragilistic.cljs$lang$applyTo = (function (seq14994){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14994));
});

workers.core.exec = (function workers$core$exec(js_fn,args){
var target_obj_14998 = workers.core.w_pool;
var _STAR_runtime_state_STAR_15002 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_14998,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_15000 = [target_obj_14998,(function (){var next_obj_15001 = ((oops.core.validate_object_access_dynamically(target_obj_14998,(0),"exec",true,true,false))?(target_obj_14998["exec"]):null);
return next_obj_15001;
})()];
var fn_14999 = (call_info_15000[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_14999,oops.state.get_last_access_modifier())){
if(!((fn_14999 == null))){
return fn_14999.call((call_info_15000[(0)]),js_fn,args);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_15002;
}});

//# sourceMappingURL=workers.core.js.map
