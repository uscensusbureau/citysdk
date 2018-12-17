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
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),(function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
}));
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__33254){
var map__33255 = p__33254;
var map__33255__$1 = (((((!((map__33255 == null))))?(((((map__33255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33255):map__33255);
var msg = map__33255__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33255__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33255__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__33260){
var map__33261 = p__33260;
var map__33261__$1 = (((((!((map__33261 == null))))?(((((map__33261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33261):map__33261);
var msg = map__33261__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33261__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33261__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__33267 = repl_state;
var map__33267__$1 = (((((!((map__33267 == null))))?(((((map__33267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33267):map__33267);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__33269_33373 = cljs.core.seq(repl_sources);
var chunk__33271_33374 = null;
var count__33272_33375 = (0);
var i__33273_33376 = (0);
while(true){
if((i__33273_33376 < count__33272_33375)){
var map__33275_33377 = chunk__33271_33374.cljs$core$IIndexed$_nth$arity$2(null,i__33273_33376);
var map__33275_33378__$1 = (((((!((map__33275_33377 == null))))?(((((map__33275_33377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33275_33377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33275_33377):map__33275_33377);
var src_33379 = map__33275_33378__$1;
var output_name_33380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33275_33378__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33380)))){
shadow.cljs.devtools.client.node.closure_import(output_name_33380);


var G__33381 = seq__33269_33373;
var G__33382 = chunk__33271_33374;
var G__33383 = count__33272_33375;
var G__33384 = (i__33273_33376 + (1));
seq__33269_33373 = G__33381;
chunk__33271_33374 = G__33382;
count__33272_33375 = G__33383;
i__33273_33376 = G__33384;
continue;
} else {
var G__33385 = seq__33269_33373;
var G__33386 = chunk__33271_33374;
var G__33387 = count__33272_33375;
var G__33388 = (i__33273_33376 + (1));
seq__33269_33373 = G__33385;
chunk__33271_33374 = G__33386;
count__33272_33375 = G__33387;
i__33273_33376 = G__33388;
continue;
}
} else {
var temp__5457__auto___33389 = cljs.core.seq(seq__33269_33373);
if(temp__5457__auto___33389){
var seq__33269_33390__$1 = temp__5457__auto___33389;
if(cljs.core.chunked_seq_QMARK_(seq__33269_33390__$1)){
var c__4461__auto___33391 = cljs.core.chunk_first(seq__33269_33390__$1);
var G__33392 = cljs.core.chunk_rest(seq__33269_33390__$1);
var G__33393 = c__4461__auto___33391;
var G__33394 = cljs.core.count(c__4461__auto___33391);
var G__33395 = (0);
seq__33269_33373 = G__33392;
chunk__33271_33374 = G__33393;
count__33272_33375 = G__33394;
i__33273_33376 = G__33395;
continue;
} else {
var map__33277_33396 = cljs.core.first(seq__33269_33390__$1);
var map__33277_33397__$1 = (((((!((map__33277_33396 == null))))?(((((map__33277_33396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33277_33396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33277_33396):map__33277_33396);
var src_33398 = map__33277_33397__$1;
var output_name_33399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33277_33397__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33399)))){
shadow.cljs.devtools.client.node.closure_import(output_name_33399);


var G__33400 = cljs.core.next(seq__33269_33390__$1);
var G__33401 = null;
var G__33402 = (0);
var G__33403 = (0);
seq__33269_33373 = G__33400;
chunk__33271_33374 = G__33401;
count__33272_33375 = G__33402;
i__33273_33376 = G__33403;
continue;
} else {
var G__33404 = cljs.core.next(seq__33269_33390__$1);
var G__33405 = null;
var G__33406 = (0);
var G__33407 = (0);
seq__33269_33373 = G__33404;
chunk__33271_33374 = G__33405;
count__33272_33375 = G__33406;
i__33273_33376 = G__33407;
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
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__33286){
var map__33287 = p__33286;
var map__33287__$1 = (((((!((map__33287 == null))))?(((((map__33287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33287):map__33287);
var msg = map__33287__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33287__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__33287,map__33287__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__33287,map__33287__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__33289){
var map__33290 = p__33289;
var map__33290__$1 = (((((!((map__33290 == null))))?(((((map__33290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33290):map__33290);
var msg = map__33290__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33290__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__33296){
var map__33297 = p__33296;
var map__33297__$1 = (((((!((map__33297 == null))))?(((((map__33297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33297):map__33297);
var msg = map__33297__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33297__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33297__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33297__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__33300_33408 = cljs.core.seq(sources);
var chunk__33301_33409 = null;
var count__33302_33410 = (0);
var i__33303_33411 = (0);
while(true){
if((i__33303_33411 < count__33302_33410)){
var map__33304_33412 = chunk__33301_33409.cljs$core$IIndexed$_nth$arity$2(null,i__33303_33411);
var map__33304_33413__$1 = (((((!((map__33304_33412 == null))))?(((((map__33304_33412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33304_33412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33304_33412):map__33304_33412);
var src_33414 = map__33304_33413__$1;
var provides_33415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304_33413__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_33416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304_33413__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4047__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33416)));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_33415);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_33416);
} else {
}


var G__33417 = seq__33300_33408;
var G__33418 = chunk__33301_33409;
var G__33419 = count__33302_33410;
var G__33420 = (i__33303_33411 + (1));
seq__33300_33408 = G__33417;
chunk__33301_33409 = G__33418;
count__33302_33410 = G__33419;
i__33303_33411 = G__33420;
continue;
} else {
var temp__5457__auto___33421 = cljs.core.seq(seq__33300_33408);
if(temp__5457__auto___33421){
var seq__33300_33422__$1 = temp__5457__auto___33421;
if(cljs.core.chunked_seq_QMARK_(seq__33300_33422__$1)){
var c__4461__auto___33424 = cljs.core.chunk_first(seq__33300_33422__$1);
var G__33425 = cljs.core.chunk_rest(seq__33300_33422__$1);
var G__33426 = c__4461__auto___33424;
var G__33427 = cljs.core.count(c__4461__auto___33424);
var G__33428 = (0);
seq__33300_33408 = G__33425;
chunk__33301_33409 = G__33426;
count__33302_33410 = G__33427;
i__33303_33411 = G__33428;
continue;
} else {
var map__33306_33429 = cljs.core.first(seq__33300_33422__$1);
var map__33306_33430__$1 = (((((!((map__33306_33429 == null))))?(((((map__33306_33429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33306_33429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33306_33429):map__33306_33429);
var src_33431 = map__33306_33430__$1;
var provides_33432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33306_33430__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_33433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33306_33430__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4047__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33433)));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_33432);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_33433);
} else {
}


var G__33434 = cljs.core.next(seq__33300_33422__$1);
var G__33435 = null;
var G__33436 = (0);
var G__33437 = (0);
seq__33300_33408 = G__33434;
chunk__33301_33409 = G__33435;
count__33302_33410 = G__33436;
i__33303_33411 = G__33437;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e33299){var e = e33299;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__33308){
var map__33309 = p__33308;
var map__33309__$1 = (((((!((map__33309 == null))))?(((((map__33309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33309):map__33309);
var msg = map__33309__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33309__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33309__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__33311 = info;
var map__33311__$1 = (((((!((map__33311 == null))))?(((((map__33311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33311):map__33311);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33311__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33311__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__33313(s__33314){
return (new cljs.core.LazySeq(null,((function (map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info){
return (function (){
var s__33314__$1 = s__33314;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__33314__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__33319 = cljs.core.first(xs__6012__auto__);
var map__33319__$1 = (((((!((map__33319 == null))))?(((((map__33319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33319):map__33319);
var src = map__33319__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33319__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33319__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__33314__$1,map__33319,map__33319__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__33313_$_iter__33315(s__33316){
return (new cljs.core.LazySeq(null,((function (s__33314__$1,map__33319,map__33319__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info){
return (function (){
var s__33316__$1 = s__33316;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__33316__$1);
if(temp__5457__auto____$1){
var s__33316__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33316__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__33316__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__33318 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__33317 = (0);
while(true){
if((i__33317 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__33317);
cljs.core.chunk_append(b__33318,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__33439 = (i__33317 + (1));
i__33317 = G__33439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33318),shadow$cljs$devtools$client$node$build_complete_$_iter__33313_$_iter__33315(cljs.core.chunk_rest(s__33316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33318),null);
}
} else {
var warning = cljs.core.first(s__33316__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__33313_$_iter__33315(cljs.core.rest(s__33316__$2)));
}
} else {
return null;
}
break;
}
});})(s__33314__$1,map__33319,map__33319__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info))
,null,null));
});})(s__33314__$1,map__33319,map__33319__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__33313(cljs.core.rest(s__33314__$1)));
} else {
var G__33444 = cljs.core.rest(s__33314__$1);
s__33314__$1 = G__33444;
continue;
}
} else {
var G__33445 = cljs.core.rest(s__33314__$1);
s__33314__$1 = G__33445;
continue;
}
} else {
return null;
}
break;
}
});})(map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info))
,null,null));
});})(map__33311,map__33311__$1,sources,compiled,map__33309,map__33309__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__33321 = info;
var map__33321__$1 = (((((!((map__33321 == null))))?(((((map__33321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33321):map__33321);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__33321,map__33321__$1,sources__$1,compiled__$1,map__33311,map__33311__$1,sources,compiled,warnings,map__33309,map__33309__$1,msg,info,reload_info){
return (function (p__33323){
var map__33324 = p__33323;
var map__33324__$1 = (((((!((map__33324 == null))))?(((((map__33324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33324):map__33324);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33324__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33324__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__33321,map__33321__$1,sources__$1,compiled__$1,map__33311,map__33311__$1,sources,compiled,warnings,map__33309,map__33309__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__33321,map__33321__$1,sources__$1,compiled__$1,map__33311,map__33311__$1,sources,compiled,warnings,map__33309,map__33309__$1,msg,info,reload_info){
return (function (p__33326){
var map__33327 = p__33326;
var map__33327__$1 = (((((!((map__33327 == null))))?(((((map__33327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33327):map__33327);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33327__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__33321,map__33321__$1,sources__$1,compiled__$1,map__33311,map__33311__$1,sources,compiled,warnings,map__33309,map__33309__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__33321,map__33321__$1,sources__$1,compiled__$1,files_to_require,map__33311,map__33311__$1,sources,compiled,warnings,map__33309,map__33309__$1,msg,info,reload_info){
return (function (){
var seq__33329 = cljs.core.seq(files_to_require);
var chunk__33330 = null;
var count__33331 = (0);
var i__33332 = (0);
while(true){
if((i__33332 < count__33331)){
var src = chunk__33330.cljs$core$IIndexed$_nth$arity$2(null,i__33332);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__33451 = seq__33329;
var G__33452 = chunk__33330;
var G__33453 = count__33331;
var G__33454 = (i__33332 + (1));
seq__33329 = G__33451;
chunk__33330 = G__33452;
count__33331 = G__33453;
i__33332 = G__33454;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33329);
if(temp__5457__auto__){
var seq__33329__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33329__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__33329__$1);
var G__33456 = cljs.core.chunk_rest(seq__33329__$1);
var G__33457 = c__4461__auto__;
var G__33458 = cljs.core.count(c__4461__auto__);
var G__33459 = (0);
seq__33329 = G__33456;
chunk__33330 = G__33457;
count__33331 = G__33458;
i__33332 = G__33459;
continue;
} else {
var src = cljs.core.first(seq__33329__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__33460 = cljs.core.next(seq__33329__$1);
var G__33461 = null;
var G__33462 = (0);
var G__33463 = (0);
seq__33329 = G__33460;
chunk__33330 = G__33461;
count__33331 = G__33462;
i__33332 = G__33463;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__33321,map__33321__$1,sources__$1,compiled__$1,files_to_require,map__33311,map__33311__$1,sources,compiled,warnings,map__33309,map__33309__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__33333){
var map__33335 = p__33333;
var map__33335__$1 = (((((!((map__33335 == null))))?(((((map__33335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33335):map__33335);
var msg = map__33335__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33335__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__33367 = type;
var G__33367__$1 = (((G__33367 instanceof cljs.core.Keyword))?G__33367.fqn:null);
switch (G__33367__$1) {
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
case "build-configure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "build-failure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

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
client.on("open",(function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
}));

client.on("unexpected-response",(function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
}));

client.on("message",(function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e33465){var e = e33465;
return console.error("failed to process message",data,e);
}}));

client.on("close",(function (){
return console.log("REPL client disconnected");
}));

return client.on("error",(function (err){
return console.log("REPL client error",err);
}));
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
