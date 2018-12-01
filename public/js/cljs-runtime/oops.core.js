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

var G__24707 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24707)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__24707)){
var G__24709 = (console["error"]);
var G__24710 = msg;
var G__24711 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__24708 = oops.state.get_console_reporter();
return (fexpr__24708.cljs$core$IFn$_invoke$arity$3 ? fexpr__24708.cljs$core$IFn$_invoke$arity$3(G__24709,G__24710,G__24711) : fexpr__24708.call(null,G__24709,G__24710,G__24711));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24707)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24707)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__24712 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24712)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__24712)){
var G__24714 = (console["warn"]);
var G__24715 = msg;
var G__24716 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__24713 = oops.state.get_console_reporter();
return (fexpr__24713.cljs$core$IFn$_invoke$arity$3 ? fexpr__24713.cljs$core$IFn$_invoke$arity$3(G__24714,G__24715,G__24716) : fexpr__24713.call(null,G__24714,G__24715,G__24716));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24712)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24712)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4647__auto__ = [];
var len__4641__auto___24803 = arguments.length;
var i__4642__auto___24804 = (0);
while(true){
if((i__4642__auto___24804 < len__4641__auto___24803)){
args__4647__auto__.push((arguments[i__4642__auto___24804]));

var G__24805 = (i__4642__auto___24804 + (1));
i__4642__auto___24804 = G__24805;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__24719){
var vec__24720 = p__24719;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24720,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__24723_24806 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__24723_24806)){
(oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_warning_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__24723_24806)){
(oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_error_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24723_24806)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24723_24806)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24723_24806)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq24717){
var G__24718 = cljs.core.first(seq24717);
var seq24717__$1 = cljs.core.next(seq24717);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24718,seq24717__$1);
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
var descriptor_24724 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_24724);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_24725 = temp__5459__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_24725,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_24725,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
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
var child_factory_24736 = oops.config.get_child_factory();
var child_factory_24736__$1 = (function (){var G__24738 = child_factory_24736;
var G__24738__$1 = (((G__24738 instanceof cljs.core.Keyword))?G__24738.fqn:null);
switch (G__24738__$1) {
case "js-obj":
return ((function (G__24738,G__24738__$1,child_factory_24736){
return (function (){
return {};
});
;})(G__24738,G__24738__$1,child_factory_24736))

break;
case "js-array":
return ((function (G__24738,G__24738__$1,child_factory_24736){
return (function (){
return [];
});
;})(G__24738,G__24738__$1,child_factory_24736))

break;
default:
return child_factory_24736;

}
})();

var child_obj_24735 = (child_factory_24736__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_24736__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_24736__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_24735);
} else {
}

return child_obj_24735;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_24745 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_24745);

return selector_path_24745;
} else {
var selector_path_24746 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_24746);

return selector_path_24746;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_24747 = temp__5461__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_24747);
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
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_24756 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24756,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24756,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_24749 = (function (){var path_24748 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_24748,(0));

return path_24748;
})();
var len_24750 = path_24749.length;
var i_24751 = (0);
var obj_24752 = obj;
while(true){
if((i_24751 < len_24750)){
var mode_24753 = (path_24749[i_24751]);
var key_24754 = (path_24749[(i_24751 + (1))]);
var next_obj_24755 = oops.core.get_key_dynamically(obj_24752,key_24754,mode_24753);
var G__24757 = mode_24753;
switch (G__24757) {
case (0):
var G__24815 = (i_24751 + (2));
var G__24816 = next_obj_24755;
i_24751 = G__24815;
obj_24752 = G__24816;
continue;

break;
case (1):
if((!((next_obj_24755 == null)))){
var G__24817 = (i_24751 + (2));
var G__24818 = next_obj_24755;
i_24751 = G__24817;
obj_24752 = G__24818;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24755 == null)))){
var G__24819 = (i_24751 + (2));
var G__24820 = next_obj_24755;
i_24751 = G__24819;
obj_24752 = G__24820;
continue;
} else {
var G__24821 = (i_24751 + (2));
var G__24822 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24752,key_24754) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24752,key_24754));
i_24751 = G__24821;
obj_24752 = G__24822;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24757)].join('')));

}
} else {
return obj_24752;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_24783 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24783,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24783,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_24759 = (function (){var path_24758 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_24758,(0));

return path_24758;
})();
var len_24760 = path_24759.length;
if((len_24760 < (4))){
return [obj,(function (){var path_24762 = path_24759;
var len_24763 = path_24762.length;
var i_24764 = (0);
var obj_24765 = obj;
while(true){
if((i_24764 < len_24763)){
var mode_24766 = (path_24762[i_24764]);
var key_24767 = (path_24762[(i_24764 + (1))]);
var next_obj_24768 = oops.core.get_key_dynamically(obj_24765,key_24767,mode_24766);
var G__24784 = mode_24766;
switch (G__24784) {
case (0):
var G__24828 = (i_24764 + (2));
var G__24829 = next_obj_24768;
i_24764 = G__24828;
obj_24765 = G__24829;
continue;

break;
case (1):
if((!((next_obj_24768 == null)))){
var G__24832 = (i_24764 + (2));
var G__24833 = next_obj_24768;
i_24764 = G__24832;
obj_24765 = G__24833;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24768 == null)))){
var G__24834 = (i_24764 + (2));
var G__24835 = next_obj_24768;
i_24764 = G__24834;
obj_24765 = G__24835;
continue;
} else {
var G__24836 = (i_24764 + (2));
var G__24837 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24765,key_24767) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24765,key_24767));
i_24764 = G__24836;
obj_24765 = G__24837;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24784)].join('')));

}
} else {
return obj_24765;
}
break;
}
})()];
} else {
var target_obj_24761 = (function (){var path_24769 = path_24759.slice((0),(len_24760 - (2)));
var len_24770 = path_24769.length;
var i_24771 = (0);
var obj_24772 = obj;
while(true){
if((i_24771 < len_24770)){
var mode_24773 = (path_24769[i_24771]);
var key_24774 = (path_24769[(i_24771 + (1))]);
var next_obj_24775 = oops.core.get_key_dynamically(obj_24772,key_24774,mode_24773);
var G__24785 = mode_24773;
switch (G__24785) {
case (0):
var G__24844 = (i_24771 + (2));
var G__24845 = next_obj_24775;
i_24771 = G__24844;
obj_24772 = G__24845;
continue;

break;
case (1):
if((!((next_obj_24775 == null)))){
var G__24846 = (i_24771 + (2));
var G__24847 = next_obj_24775;
i_24771 = G__24846;
obj_24772 = G__24847;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24775 == null)))){
var G__24848 = (i_24771 + (2));
var G__24849 = next_obj_24775;
i_24771 = G__24848;
obj_24772 = G__24849;
continue;
} else {
var G__24850 = (i_24771 + (2));
var G__24851 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24772,key_24774) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24772,key_24774));
i_24771 = G__24850;
obj_24772 = G__24851;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24785)].join('')));

}
} else {
return obj_24772;
}
break;
}
})();
return [target_obj_24761,(function (){var path_24776 = [(path_24759[(len_24760 - (2))]),(path_24759[(len_24760 - (1))])];
var len_24777 = path_24776.length;
var i_24778 = (0);
var obj_24779 = target_obj_24761;
while(true){
if((i_24778 < len_24777)){
var mode_24780 = (path_24776[i_24778]);
var key_24781 = (path_24776[(i_24778 + (1))]);
var next_obj_24782 = oops.core.get_key_dynamically(obj_24779,key_24781,mode_24780);
var G__24786 = mode_24780;
switch (G__24786) {
case (0):
var G__24857 = (i_24778 + (2));
var G__24858 = next_obj_24782;
i_24778 = G__24857;
obj_24779 = G__24858;
continue;

break;
case (1):
if((!((next_obj_24782 == null)))){
var G__24859 = (i_24778 + (2));
var G__24860 = next_obj_24782;
i_24778 = G__24859;
obj_24779 = G__24860;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24782 == null)))){
var G__24862 = (i_24778 + (2));
var G__24863 = next_obj_24782;
i_24778 = G__24862;
obj_24779 = G__24863;
continue;
} else {
var G__24864 = (i_24778 + (2));
var G__24865 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24779,key_24781) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24779,key_24781));
i_24778 = G__24864;
obj_24779 = G__24865;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24786)].join('')));

}
} else {
return obj_24779;
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
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_24801 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24801,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24801,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_24788 = (function (){var path_24787 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_24787,(1));

return path_24787;
})();
var len_24791 = path_24788.length;
var parent_obj_path_24792 = path_24788.slice((0),(len_24791 - (2)));
var key_24789 = (path_24788[(len_24791 - (1))]);
var mode_24790 = (path_24788[(len_24791 - (2))]);
var parent_obj_24793 = (function (){var path_24794 = parent_obj_path_24792;
var len_24795 = path_24794.length;
var i_24796 = (0);
var obj_24797 = obj;
while(true){
if((i_24796 < len_24795)){
var mode_24798 = (path_24794[i_24796]);
var key_24799 = (path_24794[(i_24796 + (1))]);
var next_obj_24800 = oops.core.get_key_dynamically(obj_24797,key_24799,mode_24798);
var G__24802 = mode_24798;
switch (G__24802) {
case (0):
var G__24881 = (i_24796 + (2));
var G__24882 = next_obj_24800;
i_24796 = G__24881;
obj_24797 = G__24882;
continue;

break;
case (1):
if((!((next_obj_24800 == null)))){
var G__24883 = (i_24796 + (2));
var G__24884 = next_obj_24800;
i_24796 = G__24883;
obj_24797 = G__24884;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24800 == null)))){
var G__24885 = (i_24796 + (2));
var G__24886 = next_obj_24800;
i_24796 = G__24885;
obj_24797 = G__24886;
continue;
} else {
var G__24887 = (i_24796 + (2));
var G__24888 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24797,key_24799) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24797,key_24799));
i_24796 = G__24887;
obj_24797 = G__24888;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24802)].join('')));

}
} else {
return obj_24797;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_24793,key_24789,val,mode_24790);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
