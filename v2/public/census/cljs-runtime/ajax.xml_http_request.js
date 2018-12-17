goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__8975 = e.target.readyState;
var fexpr__8974 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__8974.cljs$core$IFn$_invoke$arity$1 ? fexpr__8974.cljs$core$IFn$_invoke$arity$1(G__8975) : fexpr__8974.call(null,G__8975));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8977,handler){
var map__8978 = p__8977;
var map__8978__$1 = (((((!((map__8978 == null))))?(((((map__8978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8978):map__8978);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8978__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8978__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8978__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8978__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8978__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8978__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8978__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8978,map__8978__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8976_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__8976_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__8978,map__8978__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___8993 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___8993)){
var response_type_8994 = temp__5457__auto___8993;
this$__$1.responseType = cljs.core.name(response_type_8994);
} else {
}

var seq__8980_8995 = cljs.core.seq(headers);
var chunk__8981_8996 = null;
var count__8982_8997 = (0);
var i__8983_8998 = (0);
while(true){
if((i__8983_8998 < count__8982_8997)){
var vec__8984_8999 = chunk__8981_8996.cljs$core$IIndexed$_nth$arity$2(null,i__8983_8998);
var k_9000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8984_8999,(0),null);
var v_9001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8984_8999,(1),null);
this$__$1.setRequestHeader(k_9000,v_9001);


var G__9002 = seq__8980_8995;
var G__9003 = chunk__8981_8996;
var G__9004 = count__8982_8997;
var G__9005 = (i__8983_8998 + (1));
seq__8980_8995 = G__9002;
chunk__8981_8996 = G__9003;
count__8982_8997 = G__9004;
i__8983_8998 = G__9005;
continue;
} else {
var temp__5457__auto___9006 = cljs.core.seq(seq__8980_8995);
if(temp__5457__auto___9006){
var seq__8980_9007__$1 = temp__5457__auto___9006;
if(cljs.core.chunked_seq_QMARK_(seq__8980_9007__$1)){
var c__4461__auto___9008 = cljs.core.chunk_first(seq__8980_9007__$1);
var G__9009 = cljs.core.chunk_rest(seq__8980_9007__$1);
var G__9010 = c__4461__auto___9008;
var G__9011 = cljs.core.count(c__4461__auto___9008);
var G__9012 = (0);
seq__8980_8995 = G__9009;
chunk__8981_8996 = G__9010;
count__8982_8997 = G__9011;
i__8983_8998 = G__9012;
continue;
} else {
var vec__8987_9013 = cljs.core.first(seq__8980_9007__$1);
var k_9014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8987_9013,(0),null);
var v_9015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8987_9013,(1),null);
this$__$1.setRequestHeader(k_9014,v_9015);


var G__9016 = cljs.core.next(seq__8980_9007__$1);
var G__9017 = null;
var G__9018 = (0);
var G__9019 = (0);
seq__8980_8995 = G__9016;
chunk__8981_8996 = G__9017;
count__8982_8997 = G__9018;
i__8983_8998 = G__9019;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4047__auto__ = body;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
