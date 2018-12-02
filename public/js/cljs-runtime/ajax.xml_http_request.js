goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__23003 = e.target.readyState;
var fexpr__23002 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__23002.cljs$core$IFn$_invoke$arity$1 ? fexpr__23002.cljs$core$IFn$_invoke$arity$1(G__23003) : fexpr__23002.call(null,G__23003));
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23005,handler){
var map__23006 = p__23005;
var map__23006__$1 = (((((!((map__23006 == null))))?(((((map__23006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23006):map__23006);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23006__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23006__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23006,map__23006__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23004_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__23004_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__23006,map__23006__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___23023 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___23023)){
var response_type_23024 = temp__5457__auto___23023;
this$__$1.responseType = cljs.core.name(response_type_23024);
} else {
}

var seq__23008_23025 = cljs.core.seq(headers);
var chunk__23009_23026 = null;
var count__23010_23027 = (0);
var i__23011_23028 = (0);
while(true){
if((i__23011_23028 < count__23010_23027)){
var vec__23012_23029 = chunk__23009_23026.cljs$core$IIndexed$_nth$arity$2(null,i__23011_23028);
var k_23030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012_23029,(0),null);
var v_23031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012_23029,(1),null);
this$__$1.setRequestHeader(k_23030,v_23031);


var G__23034 = seq__23008_23025;
var G__23035 = chunk__23009_23026;
var G__23036 = count__23010_23027;
var G__23037 = (i__23011_23028 + (1));
seq__23008_23025 = G__23034;
chunk__23009_23026 = G__23035;
count__23010_23027 = G__23036;
i__23011_23028 = G__23037;
continue;
} else {
var temp__5457__auto___23038 = cljs.core.seq(seq__23008_23025);
if(temp__5457__auto___23038){
var seq__23008_23039__$1 = temp__5457__auto___23038;
if(cljs.core.chunked_seq_QMARK_(seq__23008_23039__$1)){
var c__4461__auto___23040 = cljs.core.chunk_first(seq__23008_23039__$1);
var G__23041 = cljs.core.chunk_rest(seq__23008_23039__$1);
var G__23042 = c__4461__auto___23040;
var G__23043 = cljs.core.count(c__4461__auto___23040);
var G__23044 = (0);
seq__23008_23025 = G__23041;
chunk__23009_23026 = G__23042;
count__23010_23027 = G__23043;
i__23011_23028 = G__23044;
continue;
} else {
var vec__23015_23045 = cljs.core.first(seq__23008_23039__$1);
var k_23046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23015_23045,(0),null);
var v_23047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23015_23045,(1),null);
this$__$1.setRequestHeader(k_23046,v_23047);


var G__23048 = cljs.core.next(seq__23008_23039__$1);
var G__23049 = null;
var G__23050 = (0);
var G__23051 = (0);
seq__23008_23025 = G__23048;
chunk__23009_23026 = G__23049;
count__23010_23027 = G__23050;
i__23011_23028 = G__23051;
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
