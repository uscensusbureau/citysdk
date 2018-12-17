goog.provide('oops.helpers');
goog.require('cljs.core');
oops.helpers.is_prototype_QMARK_ = (function oops$helpers$is_prototype_QMARK_(o){
return (o.constructor.prototype === o);
});
oops.helpers.get_constructor = (function oops$helpers$get_constructor(o){
return (o["constructor"]);
});
oops.helpers.cljs_type_QMARK_ = (function oops$helpers$cljs_type_QMARK_(f){
var and__4036__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = (!(oops.helpers.is_prototype_QMARK_(f)));
if(and__4036__auto____$1){
return (f["cljs$lang$type"]);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
oops.helpers.cljs_instance_QMARK_ = (function oops$helpers$cljs_instance_QMARK_(value){
var and__4036__auto__ = goog.isObject(value);
if(cljs.core.truth_(and__4036__auto__)){
return oops.helpers.cljs_type_QMARK_(oops.helpers.get_constructor(value));
} else {
return and__4036__auto__;
}
});
oops.helpers.to_native_array = (function oops$helpers$to_native_array(coll){
if(cljs.core.array_QMARK_(coll)){
return coll;
} else {
var arr = [];
var items = cljs.core.seq(coll);
while(true){
if((!((items == null)))){
var item = cljs.core._first(items);
arr.push(item);

var G__11376 = cljs.core.next(items);
items = G__11376;
continue;
} else {
return arr;
}
break;
}
}
});
oops.helpers.repurpose_error = (function oops$helpers$repurpose_error(error,msg,info){


error.message = msg;

var x11330 = error;
x11330.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x11330.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x11330){
return (function (_obj,writer,opts){
var _obj__$1 = this;
cljs.core._write(writer,msg);

if((!((info == null)))){
cljs.core._write(writer," ");

return cljs.core.pr_writer(info,writer,opts);
} else {
return null;
}
});})(x11330))
;

return x11330;
});
oops.helpers.get_property_descriptor = (function oops$helpers$get_property_descriptor(obj,property){
var o = obj;
while(true){
if((!((o == null)))){
var temp__5459__auto__ = Object.getOwnPropertyDescriptor(o,property);
if((temp__5459__auto__ == null)){
var G__11382 = Object.getPrototypeOf(o);
o = G__11382;
continue;
} else {
var descriptor = temp__5459__auto__;
return descriptor;
}
} else {
return null;
}
break;
}
});
oops.helpers.determine_property_non_writable_reason = (function oops$helpers$determine_property_non_writable_reason(property_descriptor){
if(cljs.core.truth_(property_descriptor.hasOwnProperty("writable"))){
if(property_descriptor.writable === false){
return "data property descriptor has writable=false";
} else {
return null;
}
} else {
if((property_descriptor.set == null)){
return "accessor property descriptor has neither writable flag nor a setter function";
} else {
return null;
}
}
});
oops.helpers.is_object_sealed_QMARK_ = (function oops$helpers$is_object_sealed_QMARK_(obj){
return Object.isSealed(obj);
});
oops.helpers.is_object_frozen_QMARK_ = (function oops$helpers$is_object_frozen_QMARK_(obj){
return Object.isFrozen(obj);
});
oops.helpers.wrap_data_in_enveloper_if_possible = (function oops$helpers$wrap_data_in_enveloper_if_possible(wrap_QMARK_,data){
var or__4047__auto__ = (cljs.core.truth_(wrap_QMARK_)?(function (){var temp__5461__auto__ = (goog.global["devtools"]);
if((temp__5461__auto__ == null)){
return null;
} else {
var devtools = temp__5461__auto__;
var temp__5461__auto____$1 = (devtools["toolbox"]);
if((temp__5461__auto____$1 == null)){
return null;
} else {
var toolbox = temp__5461__auto____$1;
var temp__5461__auto____$2 = (toolbox["envelope"]);
if((temp__5461__auto____$2 == null)){
return null;
} else {
var envelope = temp__5461__auto____$2;
if(cljs.core.fn_QMARK_(envelope)){
return (envelope.cljs$core$IFn$_invoke$arity$2 ? envelope.cljs$core$IFn$_invoke$arity$2(data,"details") : envelope.call(null,data,"details"));
} else {
return null;
}
}
}
}
})():null);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return data;
}
});

//# sourceMappingURL=oops.helpers.js.map
