goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.client_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var tcp = temp__5461__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var ws = temp__5461__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5461__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5461__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__30063){
var map__30064 = p__30063;
var map__30064__$1 = ((((!((map__30064 == null)))?(((((map__30064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30064):map__30064);
var msg = map__30064__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30064__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30064__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__30066){
var map__30067 = p__30066;
var map__30067__$1 = ((((!((map__30067 == null)))?(((((map__30067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30067):map__30067);
var msg = map__30067__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30067__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30067__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__30069 = repl_state;
var map__30069__$1 = ((((!((map__30069 == null)))?(((((map__30069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30069):map__30069);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30069__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__30071_30081 = cljs.core.seq(repl_sources);
var chunk__30073_30082 = null;
var count__30074_30083 = (0);
var i__30075_30084 = (0);
while(true){
if((i__30075_30084 < count__30074_30083)){
var map__30077_30085 = chunk__30073_30082.cljs$core$IIndexed$_nth$arity$2(null,i__30075_30084);
var map__30077_30086__$1 = ((((!((map__30077_30085 == null)))?(((((map__30077_30085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30077_30085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30077_30085):map__30077_30085);
var src_30087 = map__30077_30086__$1;
var output_name_30088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30077_30086__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30088))){
shadow.cljs.devtools.client.node.closure_import(output_name_30088);


var G__30089 = seq__30071_30081;
var G__30090 = chunk__30073_30082;
var G__30091 = count__30074_30083;
var G__30092 = (i__30075_30084 + (1));
seq__30071_30081 = G__30089;
chunk__30073_30082 = G__30090;
count__30074_30083 = G__30091;
i__30075_30084 = G__30092;
continue;
} else {
var G__30093 = seq__30071_30081;
var G__30094 = chunk__30073_30082;
var G__30095 = count__30074_30083;
var G__30096 = (i__30075_30084 + (1));
seq__30071_30081 = G__30093;
chunk__30073_30082 = G__30094;
count__30074_30083 = G__30095;
i__30075_30084 = G__30096;
continue;
}
} else {
var temp__5457__auto___30097 = cljs.core.seq(seq__30071_30081);
if(temp__5457__auto___30097){
var seq__30071_30098__$1 = temp__5457__auto___30097;
if(cljs.core.chunked_seq_QMARK_(seq__30071_30098__$1)){
var c__4351__auto___30099 = cljs.core.chunk_first(seq__30071_30098__$1);
var G__30100 = cljs.core.chunk_rest(seq__30071_30098__$1);
var G__30101 = c__4351__auto___30099;
var G__30102 = cljs.core.count(c__4351__auto___30099);
var G__30103 = (0);
seq__30071_30081 = G__30100;
chunk__30073_30082 = G__30101;
count__30074_30083 = G__30102;
i__30075_30084 = G__30103;
continue;
} else {
var map__30079_30104 = cljs.core.first(seq__30071_30098__$1);
var map__30079_30105__$1 = ((((!((map__30079_30104 == null)))?(((((map__30079_30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30079_30104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30079_30104):map__30079_30104);
var src_30106 = map__30079_30105__$1;
var output_name_30107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30079_30105__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30107))){
shadow.cljs.devtools.client.node.closure_import(output_name_30107);


var G__30108 = cljs.core.next(seq__30071_30098__$1);
var G__30109 = null;
var G__30110 = (0);
var G__30111 = (0);
seq__30071_30081 = G__30108;
chunk__30073_30082 = G__30109;
count__30074_30083 = G__30110;
i__30075_30084 = G__30111;
continue;
} else {
var G__30112 = cljs.core.next(seq__30071_30098__$1);
var G__30113 = null;
var G__30114 = (0);
var G__30115 = (0);
seq__30071_30081 = G__30112;
chunk__30073_30082 = G__30113;
count__30074_30083 = G__30114;
i__30075_30084 = G__30115;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__30116){
var map__30117 = p__30116;
var map__30117__$1 = ((((!((map__30117 == null)))?(((((map__30117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30117):map__30117);
var msg = map__30117__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__30117,map__30117__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__30117,map__30117__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__30119){
var map__30120 = p__30119;
var map__30120__$1 = ((((!((map__30120 == null)))?(((((map__30120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30120):map__30120);
var msg = map__30120__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30120__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__30122){
var map__30123 = p__30122;
var map__30123__$1 = ((((!((map__30123 == null)))?(((((map__30123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30123):map__30123);
var msg = map__30123__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30123__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30123__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30123__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__30126_30134 = cljs.core.seq(sources);
var chunk__30127_30135 = null;
var count__30128_30136 = (0);
var i__30129_30137 = (0);
while(true){
if((i__30129_30137 < count__30128_30136)){
var map__30130_30138 = chunk__30127_30135.cljs$core$IIndexed$_nth$arity$2(null,i__30129_30137);
var map__30130_30139__$1 = ((((!((map__30130_30138 == null)))?(((((map__30130_30138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30130_30138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30130_30138):map__30130_30138);
var src_30140 = map__30130_30139__$1;
var provides_30141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30130_30139__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_30142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30130_30139__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30142));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_30141);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_30142);
} else {
}


var G__30143 = seq__30126_30134;
var G__30144 = chunk__30127_30135;
var G__30145 = count__30128_30136;
var G__30146 = (i__30129_30137 + (1));
seq__30126_30134 = G__30143;
chunk__30127_30135 = G__30144;
count__30128_30136 = G__30145;
i__30129_30137 = G__30146;
continue;
} else {
var temp__5457__auto___30147 = cljs.core.seq(seq__30126_30134);
if(temp__5457__auto___30147){
var seq__30126_30148__$1 = temp__5457__auto___30147;
if(cljs.core.chunked_seq_QMARK_(seq__30126_30148__$1)){
var c__4351__auto___30149 = cljs.core.chunk_first(seq__30126_30148__$1);
var G__30150 = cljs.core.chunk_rest(seq__30126_30148__$1);
var G__30151 = c__4351__auto___30149;
var G__30152 = cljs.core.count(c__4351__auto___30149);
var G__30153 = (0);
seq__30126_30134 = G__30150;
chunk__30127_30135 = G__30151;
count__30128_30136 = G__30152;
i__30129_30137 = G__30153;
continue;
} else {
var map__30132_30154 = cljs.core.first(seq__30126_30148__$1);
var map__30132_30155__$1 = ((((!((map__30132_30154 == null)))?(((((map__30132_30154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30132_30154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30132_30154):map__30132_30154);
var src_30156 = map__30132_30155__$1;
var provides_30157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30132_30155__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_30158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30132_30155__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30158));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_30157);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_30158);
} else {
}


var G__30159 = cljs.core.next(seq__30126_30148__$1);
var G__30160 = null;
var G__30161 = (0);
var G__30162 = (0);
seq__30126_30134 = G__30159;
chunk__30127_30135 = G__30160;
count__30128_30136 = G__30161;
i__30129_30137 = G__30162;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e30125){var e = e30125;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__30163){
var map__30164 = p__30163;
var map__30164__$1 = ((((!((map__30164 == null)))?(((((map__30164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30164):map__30164);
var msg = map__30164__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30164__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30164__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__30166 = info;
var map__30166__$1 = ((((!((map__30166 == null)))?(((((map__30166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30166):map__30166);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30166__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30166__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__30168(s__30169){
return (new cljs.core.LazySeq(null,((function (map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info){
return (function (){
var s__30169__$1 = s__30169;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__30169__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__30174 = cljs.core.first(xs__6012__auto__);
var map__30174__$1 = ((((!((map__30174 == null)))?(((((map__30174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30174):map__30174);
var src = map__30174__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__30169__$1,map__30174,map__30174__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__30168_$_iter__30170(s__30171){
return (new cljs.core.LazySeq(null,((function (s__30169__$1,map__30174,map__30174__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info){
return (function (){
var s__30171__$1 = s__30171;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__30171__$1);
if(temp__5457__auto____$1){
var s__30171__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30171__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__30171__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__30173 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__30172 = (0);
while(true){
if((i__30172 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__30172);
cljs.core.chunk_append(b__30173,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__30188 = (i__30172 + (1));
i__30172 = G__30188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30173),shadow$cljs$devtools$client$node$build_complete_$_iter__30168_$_iter__30170(cljs.core.chunk_rest(s__30171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30173),null);
}
} else {
var warning = cljs.core.first(s__30171__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__30168_$_iter__30170(cljs.core.rest(s__30171__$2)));
}
} else {
return null;
}
break;
}
});})(s__30169__$1,map__30174,map__30174__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info))
,null,null));
});})(s__30169__$1,map__30174,map__30174__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__30168(cljs.core.rest(s__30169__$1)));
} else {
var G__30189 = cljs.core.rest(s__30169__$1);
s__30169__$1 = G__30189;
continue;
}
} else {
var G__30190 = cljs.core.rest(s__30169__$1);
s__30169__$1 = G__30190;
continue;
}
} else {
return null;
}
break;
}
});})(map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info))
,null,null));
});})(map__30166,map__30166__$1,sources,compiled,map__30164,map__30164__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__30176 = info;
var map__30176__$1 = ((((!((map__30176 == null)))?(((((map__30176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30176):map__30176);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30176__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30176__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__30176,map__30176__$1,sources__$1,compiled__$1,map__30166,map__30166__$1,sources,compiled,warnings,map__30164,map__30164__$1,msg,info,reload_info){
return (function (p__30178){
var map__30179 = p__30178;
var map__30179__$1 = ((((!((map__30179 == null)))?(((((map__30179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30179):map__30179);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30179__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30179__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__30176,map__30176__$1,sources__$1,compiled__$1,map__30166,map__30166__$1,sources,compiled,warnings,map__30164,map__30164__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__30176,map__30176__$1,sources__$1,compiled__$1,map__30166,map__30166__$1,sources,compiled,warnings,map__30164,map__30164__$1,msg,info,reload_info){
return (function (p__30181){
var map__30182 = p__30181;
var map__30182__$1 = ((((!((map__30182 == null)))?(((((map__30182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30182):map__30182);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30182__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__30176,map__30176__$1,sources__$1,compiled__$1,map__30166,map__30166__$1,sources,compiled,warnings,map__30164,map__30164__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__30176,map__30176__$1,sources__$1,compiled__$1,files_to_require,map__30166,map__30166__$1,sources,compiled,warnings,map__30164,map__30164__$1,msg,info,reload_info){
return (function (){
var seq__30184 = cljs.core.seq(files_to_require);
var chunk__30185 = null;
var count__30186 = (0);
var i__30187 = (0);
while(true){
if((i__30187 < count__30186)){
var src = chunk__30185.cljs$core$IIndexed$_nth$arity$2(null,i__30187);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__30191 = seq__30184;
var G__30192 = chunk__30185;
var G__30193 = count__30186;
var G__30194 = (i__30187 + (1));
seq__30184 = G__30191;
chunk__30185 = G__30192;
count__30186 = G__30193;
i__30187 = G__30194;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30184);
if(temp__5457__auto__){
var seq__30184__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30184__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__30184__$1);
var G__30195 = cljs.core.chunk_rest(seq__30184__$1);
var G__30196 = c__4351__auto__;
var G__30197 = cljs.core.count(c__4351__auto__);
var G__30198 = (0);
seq__30184 = G__30195;
chunk__30185 = G__30196;
count__30186 = G__30197;
i__30187 = G__30198;
continue;
} else {
var src = cljs.core.first(seq__30184__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__30199 = cljs.core.next(seq__30184__$1);
var G__30200 = null;
var G__30201 = (0);
var G__30202 = (0);
seq__30184 = G__30199;
chunk__30185 = G__30200;
count__30186 = G__30201;
i__30187 = G__30202;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__30176,map__30176__$1,sources__$1,compiled__$1,files_to_require,map__30166,map__30166__$1,sources,compiled,warnings,map__30164,map__30164__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__30203){
var map__30204 = p__30203;
var map__30204__$1 = ((((!((map__30204 == null)))?(((((map__30204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30204):map__30204);
var msg = map__30204__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30204__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__30206 = type;
var G__30206__$1 = (((G__30206 instanceof cljs.core.Keyword))?G__30206.fqn:null);
switch (G__30206__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e30208){var e = e30208;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
