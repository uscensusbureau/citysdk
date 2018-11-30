goog.provide('oops.state');
goog.require('cljs.core');
goog.require('oops.helpers');
goog.require('oops.config');
oops.state.make_empty_key_path = (function oops$state$make_empty_key_path(){
return [];
});
oops.state.prepare_state = (function oops$state$prepare_state(target_object,call_site_error,console_reporter){
return [target_object,call_site_error,console_reporter,false,oops.state.make_empty_key_path(),(0)];
});
oops.state.get_target_object = (function oops$state$get_target_object(){

var current_target_object = (oops.state._STAR_runtime_state_STAR_[(0)]);
return current_target_object;
});
oops.state.get_console_reporter = (function oops$state$get_console_reporter(){

var console_reporter = (oops.state._STAR_runtime_state_STAR_[(2)]);

return console_reporter;
});
oops.state.get_call_site_error = (function oops$state$get_call_site_error(){

var call_site_error = (oops.state._STAR_runtime_state_STAR_[(1)]);

return call_site_error;
});
oops.state.add_key_to_current_path_BANG_ = (function oops$state$add_key_to_current_path_BANG_(key){


var current_key_path = (oops.state._STAR_runtime_state_STAR_[(4)]);

current_key_path.push(key);

return current_key_path;
});
oops.state.get_key_path = (function oops$state$get_key_path(){

var current_key_path = (oops.state._STAR_runtime_state_STAR_[(4)]);

return current_key_path;
});
oops.state.get_key_path_str = (function oops$state$get_key_path_str(){

return oops.state.get_key_path().join(".");
});
oops.state.get_last_access_modifier = (function oops$state$get_last_access_modifier(){

return (oops.state._STAR_runtime_state_STAR_[(5)]);
});
oops.state.set_last_access_modifier_BANG_ = (function oops$state$set_last_access_modifier_BANG_(mode){

return (oops.state._STAR_runtime_state_STAR_[(5)] = mode);
});
oops.state.was_error_reported_QMARK_ = (function oops$state$was_error_reported_QMARK_(){

var error_reported_QMARK_ = (oops.state._STAR_runtime_state_STAR_[(3)]);

return error_reported_QMARK_;
});
oops.state.mark_error_reported_BANG_ = (function oops$state$mark_error_reported_BANG_(){

return (oops.state._STAR_runtime_state_STAR_[(3)] = true);
});
oops.state.prepare_error_from_call_site = (function oops$state$prepare_error_from_call_site(msg,data){
if(oops.config.throw_errors_from_macro_call_sites_QMARK_()){
return oops.helpers.repurpose_error(oops.state.get_call_site_error(),msg,data);
} else {
return (new Error(msg));
}
});

//# sourceMappingURL=oops.state.js.map
