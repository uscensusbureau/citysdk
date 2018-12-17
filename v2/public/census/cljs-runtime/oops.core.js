goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__12113 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__12113)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__12113)){
var G__12115 = (console["error"]);
var G__12116 = msg;
var G__12117 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__12114 = oops.state.get_console_reporter();
return (fexpr__12114.cljs$core$IFn$_invoke$arity$3 ? fexpr__12114.cljs$core$IFn$_invoke$arity$3(G__12115,G__12116,G__12117) : fexpr__12114.call(null,G__12115,G__12116,G__12117));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__12113)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12113)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__12118 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__12118)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__12118)){
var G__12120 = (console["warn"]);
var G__12121 = msg;
var G__12122 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__12119 = oops.state.get_console_reporter();
return (fexpr__12119.cljs$core$IFn$_invoke$arity$3 ? fexpr__12119.cljs$core$IFn$_invoke$arity$3(G__12120,G__12121,G__12122) : fexpr__12119.call(null,G__12120,G__12121,G__12122));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__12118)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12118)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4647__auto__ = [];
var len__4641__auto___12199 = arguments.length;
var i__4642__auto___12200 = (0);
while(true){
if((i__4642__auto___12200 < len__4641__auto___12199)){
args__4647__auto__.push((arguments[i__4642__auto___12200]));

var G__12201 = (i__4642__auto___12200 + (1));
i__4642__auto___12200 = G__12201;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__12125){
var vec__12126 = p__12125;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12126,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__12129_12202 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__12129_12202)){
(oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_warning_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__12129_12202)){
(oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_error_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__12129_12202)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__12129_12202)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12129_12202)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq12123){
var G__12124 = cljs.core.first(seq12123);
var seq12123__$1 = cljs.core.next(seq12123);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12124,seq12123__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4036__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__4036__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5459__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5459__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_12130 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_12130);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_12131 = temp__5459__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_12131,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_12131,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__4036__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_12136 = oops.config.get_child_factory();
var child_factory_12136__$1 = (function (){var G__12137 = child_factory_12136;
var G__12137__$1 = (((G__12137 instanceof cljs.core.Keyword))?G__12137.fqn:null);
switch (G__12137__$1) {
case "js-obj":
return ((function (G__12137,G__12137__$1,child_factory_12136){
return (function (){
return {};
});
;})(G__12137,G__12137__$1,child_factory_12136))

break;
case "js-array":
return ((function (G__12137,G__12137__$1,child_factory_12136){
return (function (){
return [];
});
;})(G__12137,G__12137__$1,child_factory_12136))

break;
default:
return child_factory_12136;

}
})();

var child_obj_12135 = (child_factory_12136__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_12136__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_12136__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_12135);
} else {
}

return child_obj_12135;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_12140 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_12140);

return selector_path_12140;
} else {
var selector_path_12141 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_12141);

return selector_path_12141;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_12142 = temp__5461__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_12142);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12151 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12151,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12151,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_12144 = (function (){var path_12143 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_12143,(0));

return path_12143;
})();
var len_12145 = path_12144.length;
var i_12146 = (0);
var obj_12147 = obj;
while(true){
if((i_12146 < len_12145)){
var mode_12148 = (path_12144[i_12146]);
var key_12149 = (path_12144[(i_12146 + (1))]);
var next_obj_12150 = oops.core.get_key_dynamically(obj_12147,key_12149,mode_12148);
var G__12152 = mode_12148;
switch (G__12152) {
case (0):
var G__12219 = (i_12146 + (2));
var G__12220 = next_obj_12150;
i_12146 = G__12219;
obj_12147 = G__12220;
continue;

break;
case (1):
if((!((next_obj_12150 == null)))){
var G__12221 = (i_12146 + (2));
var G__12222 = next_obj_12150;
i_12146 = G__12221;
obj_12147 = G__12222;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12150 == null)))){
var G__12223 = (i_12146 + (2));
var G__12224 = next_obj_12150;
i_12146 = G__12223;
obj_12147 = G__12224;
continue;
} else {
var G__12225 = (i_12146 + (2));
var G__12226 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_12147,key_12149) : oops.core.punch_key_dynamically_BANG_.call(null,obj_12147,key_12149));
i_12146 = G__12225;
obj_12147 = G__12226;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12152)].join('')));

}
} else {
return obj_12147;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12178 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12178,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12178,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_12154 = (function (){var path_12153 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_12153,(0));

return path_12153;
})();
var len_12155 = path_12154.length;
if((len_12155 < (4))){
return [obj,(function (){var path_12157 = path_12154;
var len_12158 = path_12157.length;
var i_12159 = (0);
var obj_12160 = obj;
while(true){
if((i_12159 < len_12158)){
var mode_12161 = (path_12157[i_12159]);
var key_12162 = (path_12157[(i_12159 + (1))]);
var next_obj_12163 = oops.core.get_key_dynamically(obj_12160,key_12162,mode_12161);
var G__12179 = mode_12161;
switch (G__12179) {
case (0):
var G__12228 = (i_12159 + (2));
var G__12229 = next_obj_12163;
i_12159 = G__12228;
obj_12160 = G__12229;
continue;

break;
case (1):
if((!((next_obj_12163 == null)))){
var G__12230 = (i_12159 + (2));
var G__12231 = next_obj_12163;
i_12159 = G__12230;
obj_12160 = G__12231;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12163 == null)))){
var G__12232 = (i_12159 + (2));
var G__12233 = next_obj_12163;
i_12159 = G__12232;
obj_12160 = G__12233;
continue;
} else {
var G__12234 = (i_12159 + (2));
var G__12235 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_12160,key_12162) : oops.core.punch_key_dynamically_BANG_.call(null,obj_12160,key_12162));
i_12159 = G__12234;
obj_12160 = G__12235;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12179)].join('')));

}
} else {
return obj_12160;
}
break;
}
})()];
} else {
var target_obj_12156 = (function (){var path_12164 = path_12154.slice((0),(len_12155 - (2)));
var len_12165 = path_12164.length;
var i_12166 = (0);
var obj_12167 = obj;
while(true){
if((i_12166 < len_12165)){
var mode_12168 = (path_12164[i_12166]);
var key_12169 = (path_12164[(i_12166 + (1))]);
var next_obj_12170 = oops.core.get_key_dynamically(obj_12167,key_12169,mode_12168);
var G__12180 = mode_12168;
switch (G__12180) {
case (0):
var G__12237 = (i_12166 + (2));
var G__12238 = next_obj_12170;
i_12166 = G__12237;
obj_12167 = G__12238;
continue;

break;
case (1):
if((!((next_obj_12170 == null)))){
var G__12239 = (i_12166 + (2));
var G__12240 = next_obj_12170;
i_12166 = G__12239;
obj_12167 = G__12240;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12170 == null)))){
var G__12241 = (i_12166 + (2));
var G__12242 = next_obj_12170;
i_12166 = G__12241;
obj_12167 = G__12242;
continue;
} else {
var G__12243 = (i_12166 + (2));
var G__12244 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_12167,key_12169) : oops.core.punch_key_dynamically_BANG_.call(null,obj_12167,key_12169));
i_12166 = G__12243;
obj_12167 = G__12244;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12180)].join('')));

}
} else {
return obj_12167;
}
break;
}
})();
return [target_obj_12156,(function (){var path_12171 = [(path_12154[(len_12155 - (2))]),(path_12154[(len_12155 - (1))])];
var len_12172 = path_12171.length;
var i_12173 = (0);
var obj_12174 = target_obj_12156;
while(true){
if((i_12173 < len_12172)){
var mode_12175 = (path_12171[i_12173]);
var key_12176 = (path_12171[(i_12173 + (1))]);
var next_obj_12177 = oops.core.get_key_dynamically(obj_12174,key_12176,mode_12175);
var G__12181 = mode_12175;
switch (G__12181) {
case (0):
var G__12246 = (i_12173 + (2));
var G__12247 = next_obj_12177;
i_12173 = G__12246;
obj_12174 = G__12247;
continue;

break;
case (1):
if((!((next_obj_12177 == null)))){
var G__12248 = (i_12173 + (2));
var G__12249 = next_obj_12177;
i_12173 = G__12248;
obj_12174 = G__12249;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12177 == null)))){
var G__12250 = (i_12173 + (2));
var G__12251 = next_obj_12177;
i_12173 = G__12250;
obj_12174 = G__12251;
continue;
} else {
var G__12252 = (i_12173 + (2));
var G__12253 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_12174,key_12176) : oops.core.punch_key_dynamically_BANG_.call(null,obj_12174,key_12176));
i_12173 = G__12252;
obj_12174 = G__12253;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12181)].join('')));

}
} else {
return obj_12174;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12197 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12197,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12197,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_12184 = (function (){var path_12183 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_12183,(1));

return path_12183;
})();
var len_12187 = path_12184.length;
var parent_obj_path_12188 = path_12184.slice((0),(len_12187 - (2)));
var key_12185 = (path_12184[(len_12187 - (1))]);
var mode_12186 = (path_12184[(len_12187 - (2))]);
var parent_obj_12189 = (function (){var path_12190 = parent_obj_path_12188;
var len_12191 = path_12190.length;
var i_12192 = (0);
var obj_12193 = obj;
while(true){
if((i_12192 < len_12191)){
var mode_12194 = (path_12190[i_12192]);
var key_12195 = (path_12190[(i_12192 + (1))]);
var next_obj_12196 = oops.core.get_key_dynamically(obj_12193,key_12195,mode_12194);
var G__12198 = mode_12194;
switch (G__12198) {
case (0):
var G__12255 = (i_12192 + (2));
var G__12256 = next_obj_12196;
i_12192 = G__12255;
obj_12193 = G__12256;
continue;

break;
case (1):
if((!((next_obj_12196 == null)))){
var G__12257 = (i_12192 + (2));
var G__12258 = next_obj_12196;
i_12192 = G__12257;
obj_12193 = G__12258;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12196 == null)))){
var G__12259 = (i_12192 + (2));
var G__12260 = next_obj_12196;
i_12192 = G__12259;
obj_12193 = G__12260;
continue;
} else {
var G__12261 = (i_12192 + (2));
var G__12262 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_12193,key_12195) : oops.core.punch_key_dynamically_BANG_.call(null,obj_12193,key_12195));
i_12192 = G__12261;
obj_12193 = G__12262;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12198)].join('')));

}
} else {
return obj_12193;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_12189,key_12185,val,mode_12186);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
