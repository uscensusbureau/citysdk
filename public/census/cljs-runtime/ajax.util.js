goog.provide('ajax.util');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.util.throw_error = (function ajax$util$throw_error(args){

throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)));
});
ajax.util.get_content_type = (function ajax$util$get_content_type(response){
var or__4047__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
});
ajax.util.to_utf8_writer = (function ajax$util$to_utf8_writer(to_str){

return to_str;
});
ajax.util.success_QMARK_ = (function ajax$util$success_QMARK_(status){

return ((((200) <= status)) && ((status <= (299))));
});

//# sourceMappingURL=ajax.util.js.map
