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
workers.core.w_pool = (function (){var target_obj_25846 = shadow.js.shim.module$workerpool;
var _STAR_runtime_state_STAR_25850 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25846,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_25848 = [target_obj_25846,(function (){var next_obj_25849 = ((oops.core.validate_object_access_dynamically(target_obj_25846,(0),"pool",true,true,false))?(target_obj_25846["pool"]):null);
return next_obj_25849;
})()];
var fn_25847 = (call_info_25848[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_25847,oops.state.get_last_access_modifier())){
if(!((fn_25847 == null))){
return fn_25847.call((call_info_25848[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25850;
}})();
workers.core.w_exec = (function workers$core$w_exec(js_fn,args){
var target_obj_25851 = workers.core.w_pool;
var _STAR_runtime_state_STAR_25855 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25851,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_25853 = [target_obj_25851,(function (){var next_obj_25854 = ((oops.core.validate_object_access_dynamically(target_obj_25851,(0),"exec",true,true,false))?(target_obj_25851["exec"]):null);
return next_obj_25854;
})()];
var fn_25852 = (call_info_25853[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_25852,oops.state.get_last_access_modifier())){
if(!((fn_25852 == null))){
return fn_25852.call((call_info_25853[(0)]),js_fn,args);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25855;
}});
workers.core.terminate = (function (){var target_obj_25856 = workers.core.w_pool;
var _STAR_runtime_state_STAR_25860 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25856,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_25858 = [target_obj_25856,(function (){var next_obj_25859 = ((oops.core.validate_object_access_dynamically(target_obj_25856,(0),"terminate",true,true,false))?(target_obj_25856["terminate"]):null);
return next_obj_25859;
})()];
var fn_25857 = (call_info_25858[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_25857,oops.state.get_last_access_modifier())){
if(!((fn_25857 == null))){
return fn_25857.call((call_info_25858[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25860;
}})();
workers.core.add = (function workers$core$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25862 = arguments.length;
var i__4532__auto___25863 = (0);
while(true){
if((i__4532__auto___25863 < len__4531__auto___25862)){
args__4534__auto__.push((arguments[i__4532__auto___25863]));

var G__25864 = (i__4532__auto___25863 + (1));
i__4532__auto___25863 = G__25864;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return workers.core.add.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

workers.core.add.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,args);
});

workers.core.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
workers.core.add.cljs$lang$applyTo = (function (seq25861){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25861));
});

workers.core.exec = (function workers$core$exec(js_fn,args){
var target_obj_25865 = workers.core.w_pool;
var _STAR_runtime_state_STAR_25869 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state(target_obj_25865,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_25867 = [target_obj_25865,(function (){var next_obj_25868 = ((oops.core.validate_object_access_dynamically(target_obj_25865,(0),"exec",true,true,false))?(target_obj_25865["exec"]):null);
return next_obj_25868;
})()];
var fn_25866 = (call_info_25867[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_25866,oops.state.get_last_access_modifier())){
if(!((fn_25866 == null))){
return fn_25866.call((call_info_25867[(0)]),js_fn,args);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_25869;
}});

//# sourceMappingURL=workers.core.js.map
