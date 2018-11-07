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

var G__22661 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__22661)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__22661)){
var G__22663 = (console["error"]);
var G__22664 = msg;
var G__22665 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__22662 = oops.state.get_console_reporter();
return (fexpr__22662.cljs$core$IFn$_invoke$arity$3 ? fexpr__22662.cljs$core$IFn$_invoke$arity$3(G__22663,G__22664,G__22665) : fexpr__22662.call(null,G__22663,G__22664,G__22665));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22661)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22661)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__22666 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__22666)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__22666)){
var G__22668 = (console["warn"]);
var G__22669 = msg;
var G__22670 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__22667 = oops.state.get_console_reporter();
return (fexpr__22667.cljs$core$IFn$_invoke$arity$3 ? fexpr__22667.cljs$core$IFn$_invoke$arity$3(G__22668,G__22669,G__22670) : fexpr__22667.call(null,G__22668,G__22669,G__22670));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22666)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22666)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22681 = arguments.length;
var i__4532__auto___22682 = (0);
while(true){
if((i__4532__auto___22682 < len__4531__auto___22681)){
args__4534__auto__.push((arguments[i__4532__auto___22682]));

var G__22683 = (i__4532__auto___22682 + (1));
i__4532__auto___22682 = G__22683;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__22676){
var vec__22677 = p__22676;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__22680_22684 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__22680_22684)){
(oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_warning_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__22680_22684)){
(oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_error_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22680_22684)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22680_22684)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22680_22684)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq22674){
var G__22675 = cljs.core.first(seq22674);
var seq22674__$1 = cljs.core.next(seq22674);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22675,seq22674__$1);
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

var and__3938__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__3938__auto__)){
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
var descriptor_22687 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_22687);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_22688 = temp__5459__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_22688,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_22688,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__3938__auto__;
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
var child_factory_22756 = oops.config.get_child_factory();
var child_factory_22756__$1 = (function (){var G__22757 = child_factory_22756;
var G__22757__$1 = (((G__22757 instanceof cljs.core.Keyword))?G__22757.fqn:null);
switch (G__22757__$1) {
case "js-obj":
return ((function (G__22757,G__22757__$1,child_factory_22756){
return (function (){
return {};
});
;})(G__22757,G__22757__$1,child_factory_22756))

break;
case "js-array":
return ((function (G__22757,G__22757__$1,child_factory_22756){
return (function (){
return [];
});
;})(G__22757,G__22757__$1,child_factory_22756))

break;
default:
return child_factory_22756;

}
})();

var child_obj_22755 = (child_factory_22756__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_22756__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_22756__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_22755);
} else {
}

return child_obj_22755;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_22762 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_22762);

return selector_path_22762;
} else {
var selector_path_22763 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_22763);

return selector_path_22763;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_22764 = temp__5461__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_22764);
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
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_22780 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22780,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22780,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_22773 = (function (){var path_22772 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_22772,(0));

return path_22772;
})();
var len_22774 = path_22773.length;
var i_22775 = (0);
var obj_22776 = obj;
while(true){
if((i_22775 < len_22774)){
var mode_22777 = (path_22773[i_22775]);
var key_22778 = (path_22773[(i_22775 + (1))]);
var next_obj_22779 = oops.core.get_key_dynamically(obj_22776,key_22778,mode_22777);
var G__22785 = mode_22777;
switch (G__22785) {
case (0):
var G__22787 = (i_22775 + (2));
var G__22788 = next_obj_22779;
i_22775 = G__22787;
obj_22776 = G__22788;
continue;

break;
case (1):
if(!((next_obj_22779 == null))){
var G__22789 = (i_22775 + (2));
var G__22790 = next_obj_22779;
i_22775 = G__22789;
obj_22776 = G__22790;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22779 == null))){
var G__22791 = (i_22775 + (2));
var G__22792 = next_obj_22779;
i_22775 = G__22791;
obj_22776 = G__22792;
continue;
} else {
var G__22793 = (i_22775 + (2));
var G__22794 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22776,key_22778) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22776,key_22778));
i_22775 = G__22793;
obj_22776 = G__22794;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22785)].join('')));

}
} else {
return obj_22776;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_22823 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22823,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22823,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_22796 = (function (){var path_22795 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_22795,(0));

return path_22795;
})();
var len_22797 = path_22796.length;
if((len_22797 < (4))){
return [obj,(function (){var path_22802 = path_22796;
var len_22803 = path_22802.length;
var i_22804 = (0);
var obj_22805 = obj;
while(true){
if((i_22804 < len_22803)){
var mode_22806 = (path_22802[i_22804]);
var key_22807 = (path_22802[(i_22804 + (1))]);
var next_obj_22808 = oops.core.get_key_dynamically(obj_22805,key_22807,mode_22806);
var G__22824 = mode_22806;
switch (G__22824) {
case (0):
var G__22829 = (i_22804 + (2));
var G__22830 = next_obj_22808;
i_22804 = G__22829;
obj_22805 = G__22830;
continue;

break;
case (1):
if(!((next_obj_22808 == null))){
var G__22831 = (i_22804 + (2));
var G__22832 = next_obj_22808;
i_22804 = G__22831;
obj_22805 = G__22832;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22808 == null))){
var G__22833 = (i_22804 + (2));
var G__22834 = next_obj_22808;
i_22804 = G__22833;
obj_22805 = G__22834;
continue;
} else {
var G__22835 = (i_22804 + (2));
var G__22836 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22805,key_22807) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22805,key_22807));
i_22804 = G__22835;
obj_22805 = G__22836;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22824)].join('')));

}
} else {
return obj_22805;
}
break;
}
})()];
} else {
var target_obj_22798 = (function (){var path_22809 = path_22796.slice((0),(len_22797 - (2)));
var len_22810 = path_22809.length;
var i_22811 = (0);
var obj_22812 = obj;
while(true){
if((i_22811 < len_22810)){
var mode_22813 = (path_22809[i_22811]);
var key_22814 = (path_22809[(i_22811 + (1))]);
var next_obj_22815 = oops.core.get_key_dynamically(obj_22812,key_22814,mode_22813);
var G__22825 = mode_22813;
switch (G__22825) {
case (0):
var G__22840 = (i_22811 + (2));
var G__22841 = next_obj_22815;
i_22811 = G__22840;
obj_22812 = G__22841;
continue;

break;
case (1):
if(!((next_obj_22815 == null))){
var G__22842 = (i_22811 + (2));
var G__22843 = next_obj_22815;
i_22811 = G__22842;
obj_22812 = G__22843;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22815 == null))){
var G__22844 = (i_22811 + (2));
var G__22845 = next_obj_22815;
i_22811 = G__22844;
obj_22812 = G__22845;
continue;
} else {
var G__22846 = (i_22811 + (2));
var G__22847 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22812,key_22814) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22812,key_22814));
i_22811 = G__22846;
obj_22812 = G__22847;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22825)].join('')));

}
} else {
return obj_22812;
}
break;
}
})();
return [target_obj_22798,(function (){var path_22816 = [(path_22796[(len_22797 - (2))]),(path_22796[(len_22797 - (1))])];
var len_22817 = path_22816.length;
var i_22818 = (0);
var obj_22819 = target_obj_22798;
while(true){
if((i_22818 < len_22817)){
var mode_22820 = (path_22816[i_22818]);
var key_22821 = (path_22816[(i_22818 + (1))]);
var next_obj_22822 = oops.core.get_key_dynamically(obj_22819,key_22821,mode_22820);
var G__22826 = mode_22820;
switch (G__22826) {
case (0):
var G__22850 = (i_22818 + (2));
var G__22851 = next_obj_22822;
i_22818 = G__22850;
obj_22819 = G__22851;
continue;

break;
case (1):
if(!((next_obj_22822 == null))){
var G__22852 = (i_22818 + (2));
var G__22853 = next_obj_22822;
i_22818 = G__22852;
obj_22819 = G__22853;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22822 == null))){
var G__22854 = (i_22818 + (2));
var G__22855 = next_obj_22822;
i_22818 = G__22854;
obj_22819 = G__22855;
continue;
} else {
var G__22856 = (i_22818 + (2));
var G__22857 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22819,key_22821) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22819,key_22821));
i_22818 = G__22856;
obj_22819 = G__22857;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22826)].join('')));

}
} else {
return obj_22819;
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
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_22872 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22872,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22872,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_22859 = (function (){var path_22858 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_22858,(1));

return path_22858;
})();
var len_22862 = path_22859.length;
var parent_obj_path_22863 = path_22859.slice((0),(len_22862 - (2)));
var key_22860 = (path_22859[(len_22862 - (1))]);
var mode_22861 = (path_22859[(len_22862 - (2))]);
var parent_obj_22864 = (function (){var path_22865 = parent_obj_path_22863;
var len_22866 = path_22865.length;
var i_22867 = (0);
var obj_22868 = obj;
while(true){
if((i_22867 < len_22866)){
var mode_22869 = (path_22865[i_22867]);
var key_22870 = (path_22865[(i_22867 + (1))]);
var next_obj_22871 = oops.core.get_key_dynamically(obj_22868,key_22870,mode_22869);
var G__22874 = mode_22869;
switch (G__22874) {
case (0):
var G__22876 = (i_22867 + (2));
var G__22877 = next_obj_22871;
i_22867 = G__22876;
obj_22868 = G__22877;
continue;

break;
case (1):
if(!((next_obj_22871 == null))){
var G__22878 = (i_22867 + (2));
var G__22879 = next_obj_22871;
i_22867 = G__22878;
obj_22868 = G__22879;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22871 == null))){
var G__22880 = (i_22867 + (2));
var G__22881 = next_obj_22871;
i_22867 = G__22880;
obj_22868 = G__22881;
continue;
} else {
var G__22882 = (i_22867 + (2));
var G__22883 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22868,key_22870) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22868,key_22870));
i_22867 = G__22882;
obj_22868 = G__22883;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22874)].join('')));

}
} else {
return obj_22868;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_22864,key_22860,val,mode_22861);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
