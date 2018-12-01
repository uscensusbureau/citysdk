goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22247 = arguments.length;
var i__4642__auto___22248 = (0);
while(true){
if((i__4642__auto___22248 < len__4641__auto___22247)){
args__4647__auto__.push((arguments[i__4642__auto___22248]));

var G__22249 = (i__4642__auto___22248 + (1));
i__4642__auto___22248 = G__22249;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22111){
var G__22112 = cljs.core.first(seq22111);
var seq22111__$1 = cljs.core.next(seq22111);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22112,seq22111__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__22113){
var map__22114 = p__22113;
var map__22114__$1 = (((((!((map__22114 == null))))?(((((map__22114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22114):map__22114);
var src = map__22114__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22114__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22114__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22116 = cljs.core.seq(sources);
var chunk__22117 = null;
var count__22118 = (0);
var i__22119 = (0);
while(true){
if((i__22119 < count__22118)){
var map__22120 = chunk__22117.cljs$core$IIndexed$_nth$arity$2(null,i__22119);
var map__22120__$1 = (((((!((map__22120 == null))))?(((((map__22120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22120):map__22120);
var src = map__22120__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__22250 = seq__22116;
var G__22251 = chunk__22117;
var G__22252 = count__22118;
var G__22253 = (i__22119 + (1));
seq__22116 = G__22250;
chunk__22117 = G__22251;
count__22118 = G__22252;
i__22119 = G__22253;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22116);
if(temp__5457__auto__){
var seq__22116__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22116__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22116__$1);
var G__22254 = cljs.core.chunk_rest(seq__22116__$1);
var G__22255 = c__4461__auto__;
var G__22256 = cljs.core.count(c__4461__auto__);
var G__22257 = (0);
seq__22116 = G__22254;
chunk__22117 = G__22255;
count__22118 = G__22256;
i__22119 = G__22257;
continue;
} else {
var map__22122 = cljs.core.first(seq__22116__$1);
var map__22122__$1 = (((((!((map__22122 == null))))?(((((map__22122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22122):map__22122);
var src = map__22122__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22122__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22122__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22122__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22122__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__22258 = cljs.core.next(seq__22116__$1);
var G__22259 = null;
var G__22260 = (0);
var G__22261 = (0);
seq__22116 = G__22258;
chunk__22117 = G__22259;
count__22118 = G__22260;
i__22119 = G__22261;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22124 = cljs.core.seq(js_requires);
var chunk__22125 = null;
var count__22126 = (0);
var i__22127 = (0);
while(true){
if((i__22127 < count__22126)){
var js_ns = chunk__22125.cljs$core$IIndexed$_nth$arity$2(null,i__22127);
var require_str_22262 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22262);


var G__22263 = seq__22124;
var G__22264 = chunk__22125;
var G__22265 = count__22126;
var G__22266 = (i__22127 + (1));
seq__22124 = G__22263;
chunk__22125 = G__22264;
count__22126 = G__22265;
i__22127 = G__22266;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22124);
if(temp__5457__auto__){
var seq__22124__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22124__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22124__$1);
var G__22267 = cljs.core.chunk_rest(seq__22124__$1);
var G__22268 = c__4461__auto__;
var G__22269 = cljs.core.count(c__4461__auto__);
var G__22270 = (0);
seq__22124 = G__22267;
chunk__22125 = G__22268;
count__22126 = G__22269;
i__22127 = G__22270;
continue;
} else {
var js_ns = cljs.core.first(seq__22124__$1);
var require_str_22271 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22271);


var G__22272 = cljs.core.next(seq__22124__$1);
var G__22273 = null;
var G__22274 = (0);
var G__22275 = (0);
seq__22124 = G__22272;
chunk__22125 = G__22273;
count__22126 = G__22274;
i__22127 = G__22275;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__22132 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__22132) : callback.call(null,G__22132));
} else {
var G__22133 = shadow.cljs.devtools.client.env.files_url();
var G__22134 = ((function (G__22133){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__22133))
;
var G__22135 = "POST";
var G__22136 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__22137 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22133,G__22134,G__22135,G__22136,G__22137);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__22141){
var map__22142 = p__22141;
var map__22142__$1 = (((((!((map__22142 == null))))?(((((map__22142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22142):map__22142);
var msg = map__22142__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22142__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22142__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__22144 = info;
var map__22144__$1 = (((((!((map__22144 == null))))?(((((map__22144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22144):map__22144);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22144__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22144__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22150(s__22151){
return (new cljs.core.LazySeq(null,((function (map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info){
return (function (){
var s__22151__$1 = s__22151;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22151__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__22156 = cljs.core.first(xs__6012__auto__);
var map__22156__$1 = (((((!((map__22156 == null))))?(((((map__22156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22156):map__22156);
var src = map__22156__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__22151__$1,map__22156,map__22156__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22150_$_iter__22152(s__22153){
return (new cljs.core.LazySeq(null,((function (s__22151__$1,map__22156,map__22156__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info){
return (function (){
var s__22153__$1 = s__22153;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__22153__$1);
if(temp__5457__auto____$1){
var s__22153__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22153__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__22153__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__22155 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__22154 = (0);
while(true){
if((i__22154 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__22154);
cljs.core.chunk_append(b__22155,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22276 = (i__22154 + (1));
i__22154 = G__22276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22155),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22150_$_iter__22152(cljs.core.chunk_rest(s__22153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22155),null);
}
} else {
var warning = cljs.core.first(s__22153__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22150_$_iter__22152(cljs.core.rest(s__22153__$2)));
}
} else {
return null;
}
break;
}
});})(s__22151__$1,map__22156,map__22156__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info))
,null,null));
});})(s__22151__$1,map__22156,map__22156__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22150(cljs.core.rest(s__22151__$1)));
} else {
var G__22277 = cljs.core.rest(s__22151__$1);
s__22151__$1 = G__22277;
continue;
}
} else {
var G__22278 = cljs.core.rest(s__22151__$1);
s__22151__$1 = G__22278;
continue;
}
} else {
return null;
}
break;
}
});})(map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info))
,null,null));
});})(map__22144,map__22144__$1,sources,compiled,map__22142,map__22142__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__22158_22279 = cljs.core.seq(warnings);
var chunk__22160_22280 = null;
var count__22161_22281 = (0);
var i__22162_22282 = (0);
while(true){
if((i__22162_22282 < count__22161_22281)){
var map__22163_22283 = chunk__22160_22280.cljs$core$IIndexed$_nth$arity$2(null,i__22162_22282);
var map__22163_22284__$1 = (((((!((map__22163_22283 == null))))?(((((map__22163_22283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22163_22283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22163_22283):map__22163_22283);
var w_22285 = map__22163_22284__$1;
var msg_22286__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163_22284__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163_22284__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163_22284__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163_22284__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22289)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22287),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22288),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22286__$1)].join(''));


var G__22290 = seq__22158_22279;
var G__22291 = chunk__22160_22280;
var G__22292 = count__22161_22281;
var G__22293 = (i__22162_22282 + (1));
seq__22158_22279 = G__22290;
chunk__22160_22280 = G__22291;
count__22161_22281 = G__22292;
i__22162_22282 = G__22293;
continue;
} else {
var temp__5457__auto___22294 = cljs.core.seq(seq__22158_22279);
if(temp__5457__auto___22294){
var seq__22158_22295__$1 = temp__5457__auto___22294;
if(cljs.core.chunked_seq_QMARK_(seq__22158_22295__$1)){
var c__4461__auto___22296 = cljs.core.chunk_first(seq__22158_22295__$1);
var G__22297 = cljs.core.chunk_rest(seq__22158_22295__$1);
var G__22298 = c__4461__auto___22296;
var G__22299 = cljs.core.count(c__4461__auto___22296);
var G__22300 = (0);
seq__22158_22279 = G__22297;
chunk__22160_22280 = G__22298;
count__22161_22281 = G__22299;
i__22162_22282 = G__22300;
continue;
} else {
var map__22165_22301 = cljs.core.first(seq__22158_22295__$1);
var map__22165_22302__$1 = (((((!((map__22165_22301 == null))))?(((((map__22165_22301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22165_22301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22165_22301):map__22165_22301);
var w_22303 = map__22165_22302__$1;
var msg_22304__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165_22302__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165_22302__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165_22302__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165_22302__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22307)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22305),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22306),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22304__$1)].join(''));


var G__22308 = cljs.core.next(seq__22158_22295__$1);
var G__22309 = null;
var G__22310 = (0);
var G__22311 = (0);
seq__22158_22279 = G__22308;
chunk__22160_22280 = G__22309;
count__22161_22281 = G__22310;
i__22162_22282 = G__22311;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info){
return (function (p__22167){
var map__22168 = p__22167;
var map__22168__$1 = (((((!((map__22168 == null))))?(((((map__22168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22168):map__22168);
var src = map__22168__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22168__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22168__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info){
return (function (p__22170){
var map__22171 = p__22170;
var map__22171__$1 = (((((!((map__22171 == null))))?(((((map__22171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22171):map__22171);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22171__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info){
return (function (p__22175){
var map__22176 = p__22175;
var map__22176__$1 = (((((!((map__22176 == null))))?(((((map__22176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22176):map__22176);
var rc = map__22176__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22176__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info){
return (function (p1__22139_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22139_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__22144,map__22144__$1,sources,compiled,warnings,map__22142,map__22142__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4036__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4036__auto__){
return rel_new;
} else {
return and__4036__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4036__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4036__auto____$1){
return new$;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__22191){
var map__22192 = p__22191;
var map__22192__$1 = (((((!((map__22192 == null))))?(((((map__22192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22192):map__22192);
var msg = map__22192__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22192__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__22194 = cljs.core.seq(updates);
var chunk__22196 = null;
var count__22197 = (0);
var i__22198 = (0);
while(true){
if((i__22198 < count__22197)){
var path = chunk__22196.cljs$core$IIndexed$_nth$arity$2(null,i__22198);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22200_22312 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22203_22313 = null;
var count__22204_22314 = (0);
var i__22205_22315 = (0);
while(true){
if((i__22205_22315 < count__22204_22314)){
var node_22316 = chunk__22203_22313.cljs$core$IIndexed$_nth$arity$2(null,i__22205_22315);
var path_match_22317 = shadow.cljs.devtools.client.browser.match_paths(node_22316.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22317)){
var new_link_22318 = (function (){var G__22208 = node_22316.cloneNode(true);
G__22208.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22317),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22208;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22317], 0));

goog.dom.insertSiblingAfter(new_link_22318,node_22316);

goog.dom.removeNode(node_22316);


var G__22319 = seq__22200_22312;
var G__22320 = chunk__22203_22313;
var G__22321 = count__22204_22314;
var G__22322 = (i__22205_22315 + (1));
seq__22200_22312 = G__22319;
chunk__22203_22313 = G__22320;
count__22204_22314 = G__22321;
i__22205_22315 = G__22322;
continue;
} else {
var G__22323 = seq__22200_22312;
var G__22324 = chunk__22203_22313;
var G__22325 = count__22204_22314;
var G__22326 = (i__22205_22315 + (1));
seq__22200_22312 = G__22323;
chunk__22203_22313 = G__22324;
count__22204_22314 = G__22325;
i__22205_22315 = G__22326;
continue;
}
} else {
var temp__5457__auto___22327 = cljs.core.seq(seq__22200_22312);
if(temp__5457__auto___22327){
var seq__22200_22328__$1 = temp__5457__auto___22327;
if(cljs.core.chunked_seq_QMARK_(seq__22200_22328__$1)){
var c__4461__auto___22329 = cljs.core.chunk_first(seq__22200_22328__$1);
var G__22330 = cljs.core.chunk_rest(seq__22200_22328__$1);
var G__22331 = c__4461__auto___22329;
var G__22332 = cljs.core.count(c__4461__auto___22329);
var G__22333 = (0);
seq__22200_22312 = G__22330;
chunk__22203_22313 = G__22331;
count__22204_22314 = G__22332;
i__22205_22315 = G__22333;
continue;
} else {
var node_22334 = cljs.core.first(seq__22200_22328__$1);
var path_match_22335 = shadow.cljs.devtools.client.browser.match_paths(node_22334.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22335)){
var new_link_22336 = (function (){var G__22210 = node_22334.cloneNode(true);
G__22210.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22335),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22210;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22335], 0));

goog.dom.insertSiblingAfter(new_link_22336,node_22334);

goog.dom.removeNode(node_22334);


var G__22337 = cljs.core.next(seq__22200_22328__$1);
var G__22338 = null;
var G__22339 = (0);
var G__22340 = (0);
seq__22200_22312 = G__22337;
chunk__22203_22313 = G__22338;
count__22204_22314 = G__22339;
i__22205_22315 = G__22340;
continue;
} else {
var G__22341 = cljs.core.next(seq__22200_22328__$1);
var G__22342 = null;
var G__22343 = (0);
var G__22344 = (0);
seq__22200_22312 = G__22341;
chunk__22203_22313 = G__22342;
count__22204_22314 = G__22343;
i__22205_22315 = G__22344;
continue;
}
}
} else {
}
}
break;
}


var G__22345 = seq__22194;
var G__22346 = chunk__22196;
var G__22347 = count__22197;
var G__22348 = (i__22198 + (1));
seq__22194 = G__22345;
chunk__22196 = G__22346;
count__22197 = G__22347;
i__22198 = G__22348;
continue;
} else {
var G__22349 = seq__22194;
var G__22350 = chunk__22196;
var G__22351 = count__22197;
var G__22352 = (i__22198 + (1));
seq__22194 = G__22349;
chunk__22196 = G__22350;
count__22197 = G__22351;
i__22198 = G__22352;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22194);
if(temp__5457__auto__){
var seq__22194__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22194__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__22194__$1);
var G__22353 = cljs.core.chunk_rest(seq__22194__$1);
var G__22354 = c__4461__auto__;
var G__22355 = cljs.core.count(c__4461__auto__);
var G__22356 = (0);
seq__22194 = G__22353;
chunk__22196 = G__22354;
count__22197 = G__22355;
i__22198 = G__22356;
continue;
} else {
var path = cljs.core.first(seq__22194__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22211_22359 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22214_22360 = null;
var count__22215_22361 = (0);
var i__22216_22362 = (0);
while(true){
if((i__22216_22362 < count__22215_22361)){
var node_22363 = chunk__22214_22360.cljs$core$IIndexed$_nth$arity$2(null,i__22216_22362);
var path_match_22364 = shadow.cljs.devtools.client.browser.match_paths(node_22363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22364)){
var new_link_22365 = (function (){var G__22219 = node_22363.cloneNode(true);
G__22219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22364),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22219;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22364], 0));

goog.dom.insertSiblingAfter(new_link_22365,node_22363);

goog.dom.removeNode(node_22363);


var G__22368 = seq__22211_22359;
var G__22369 = chunk__22214_22360;
var G__22370 = count__22215_22361;
var G__22371 = (i__22216_22362 + (1));
seq__22211_22359 = G__22368;
chunk__22214_22360 = G__22369;
count__22215_22361 = G__22370;
i__22216_22362 = G__22371;
continue;
} else {
var G__22373 = seq__22211_22359;
var G__22374 = chunk__22214_22360;
var G__22375 = count__22215_22361;
var G__22376 = (i__22216_22362 + (1));
seq__22211_22359 = G__22373;
chunk__22214_22360 = G__22374;
count__22215_22361 = G__22375;
i__22216_22362 = G__22376;
continue;
}
} else {
var temp__5457__auto___22377__$1 = cljs.core.seq(seq__22211_22359);
if(temp__5457__auto___22377__$1){
var seq__22211_22379__$1 = temp__5457__auto___22377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22211_22379__$1)){
var c__4461__auto___22380 = cljs.core.chunk_first(seq__22211_22379__$1);
var G__22381 = cljs.core.chunk_rest(seq__22211_22379__$1);
var G__22382 = c__4461__auto___22380;
var G__22383 = cljs.core.count(c__4461__auto___22380);
var G__22384 = (0);
seq__22211_22359 = G__22381;
chunk__22214_22360 = G__22382;
count__22215_22361 = G__22383;
i__22216_22362 = G__22384;
continue;
} else {
var node_22385 = cljs.core.first(seq__22211_22379__$1);
var path_match_22386 = shadow.cljs.devtools.client.browser.match_paths(node_22385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22386)){
var new_link_22387 = (function (){var G__22220 = node_22385.cloneNode(true);
G__22220.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22220;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22386], 0));

goog.dom.insertSiblingAfter(new_link_22387,node_22385);

goog.dom.removeNode(node_22385);


var G__22388 = cljs.core.next(seq__22211_22379__$1);
var G__22389 = null;
var G__22390 = (0);
var G__22391 = (0);
seq__22211_22359 = G__22388;
chunk__22214_22360 = G__22389;
count__22215_22361 = G__22390;
i__22216_22362 = G__22391;
continue;
} else {
var G__22392 = cljs.core.next(seq__22211_22379__$1);
var G__22393 = null;
var G__22394 = (0);
var G__22395 = (0);
seq__22211_22359 = G__22392;
chunk__22214_22360 = G__22393;
count__22215_22361 = G__22394;
i__22216_22362 = G__22395;
continue;
}
}
} else {
}
}
break;
}


var G__22397 = cljs.core.next(seq__22194__$1);
var G__22398 = null;
var G__22399 = (0);
var G__22400 = (0);
seq__22194 = G__22397;
chunk__22196 = G__22398;
count__22197 = G__22399;
i__22198 = G__22400;
continue;
} else {
var G__22402 = cljs.core.next(seq__22194__$1);
var G__22403 = null;
var G__22404 = (0);
var G__22405 = (0);
seq__22194 = G__22402;
chunk__22196 = G__22403;
count__22197 = G__22404;
i__22198 = G__22405;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__22221){
var map__22222 = p__22221;
var map__22222__$1 = (((((!((map__22222 == null))))?(((((map__22222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22222):map__22222);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__22222,map__22222__$1,id,js){
return (function (){
return eval(js);
});})(map__22222,map__22222__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__22224){
var map__22225 = p__22224;
var map__22225__$1 = (((((!((map__22225 == null))))?(((((map__22225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22225):map__22225);
var msg = map__22225__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22225,map__22225__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__22227){
var map__22228 = p__22227;
var map__22228__$1 = (((((!((map__22228 == null))))?(((((map__22228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22228):map__22228);
var src = map__22228__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22228__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__22225,map__22225__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__22225,map__22225__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__22225,map__22225__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__22231){
var map__22232 = p__22231;
var map__22232__$1 = (((((!((map__22232 == null))))?(((((map__22232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22232):map__22232);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__22232,map__22232__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__22232,map__22232__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__22234){
var map__22235 = p__22234;
var map__22235__$1 = (((((!((map__22235 == null))))?(((((map__22235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22235):map__22235);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__22237){
var map__22238 = p__22237;
var map__22238__$1 = (((((!((map__22238 == null))))?(((((map__22238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22238):map__22238);
var msg = map__22238__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22238__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__22240 = type;
var G__22240__$1 = (((G__22240 instanceof cljs.core.Keyword))?G__22240.fqn:null);
switch (G__22240__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__22241 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__22242 = ((function (G__22241){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__22241))
;
var G__22243 = "POST";
var G__22244 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__22245 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22241,G__22242,G__22243,G__22244,G__22245);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4047__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e22246){var e = e22246;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___22463 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___22463)){
var s_22466 = temp__5457__auto___22463;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_22466.onclose = ((function (s_22466,temp__5457__auto___22463){
return (function (e){
return null;
});})(s_22466,temp__5457__auto___22463))
;

s_22466.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
