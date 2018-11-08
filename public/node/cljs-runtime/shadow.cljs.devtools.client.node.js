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
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__14764){
var map__14765 = p__14764;
var map__14765__$1 = (((((!((map__14765 == null))))?(((((map__14765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14765):map__14765);
var msg = map__14765__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14765__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14765__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__14780){
var map__14781 = p__14780;
var map__14781__$1 = (((((!((map__14781 == null))))?(((((map__14781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14781):map__14781);
var msg = map__14781__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__14783 = repl_state;
var map__14783__$1 = (((((!((map__14783 == null))))?(((((map__14783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14783):map__14783);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14783__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__14785_14845 = cljs.core.seq(repl_sources);
var chunk__14787_14846 = null;
var count__14788_14847 = (0);
var i__14789_14848 = (0);
while(true){
if((i__14789_14848 < count__14788_14847)){
var map__14791_14849 = chunk__14787_14846.cljs$core$IIndexed$_nth$arity$2(null,i__14789_14848);
var map__14791_14850__$1 = (((((!((map__14791_14849 == null))))?(((((map__14791_14849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14791_14849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14791_14849):map__14791_14849);
var src_14851 = map__14791_14850__$1;
var output_name_14852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14791_14850__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_14852)))){
shadow.cljs.devtools.client.node.closure_import(output_name_14852);


var G__14853 = seq__14785_14845;
var G__14854 = chunk__14787_14846;
var G__14855 = count__14788_14847;
var G__14856 = (i__14789_14848 + (1));
seq__14785_14845 = G__14853;
chunk__14787_14846 = G__14854;
count__14788_14847 = G__14855;
i__14789_14848 = G__14856;
continue;
} else {
var G__14857 = seq__14785_14845;
var G__14858 = chunk__14787_14846;
var G__14859 = count__14788_14847;
var G__14860 = (i__14789_14848 + (1));
seq__14785_14845 = G__14857;
chunk__14787_14846 = G__14858;
count__14788_14847 = G__14859;
i__14789_14848 = G__14860;
continue;
}
} else {
var temp__5457__auto___14861 = cljs.core.seq(seq__14785_14845);
if(temp__5457__auto___14861){
var seq__14785_14862__$1 = temp__5457__auto___14861;
if(cljs.core.chunked_seq_QMARK_(seq__14785_14862__$1)){
var c__4461__auto___14863 = cljs.core.chunk_first(seq__14785_14862__$1);
var G__14864 = cljs.core.chunk_rest(seq__14785_14862__$1);
var G__14865 = c__4461__auto___14863;
var G__14866 = cljs.core.count(c__4461__auto___14863);
var G__14867 = (0);
seq__14785_14845 = G__14864;
chunk__14787_14846 = G__14865;
count__14788_14847 = G__14866;
i__14789_14848 = G__14867;
continue;
} else {
var map__14793_14868 = cljs.core.first(seq__14785_14862__$1);
var map__14793_14869__$1 = (((((!((map__14793_14868 == null))))?(((((map__14793_14868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14793_14868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14793_14868):map__14793_14868);
var src_14870 = map__14793_14869__$1;
var output_name_14871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14793_14869__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_14871)))){
shadow.cljs.devtools.client.node.closure_import(output_name_14871);


var G__14872 = cljs.core.next(seq__14785_14862__$1);
var G__14873 = null;
var G__14874 = (0);
var G__14875 = (0);
seq__14785_14845 = G__14872;
chunk__14787_14846 = G__14873;
count__14788_14847 = G__14874;
i__14789_14848 = G__14875;
continue;
} else {
var G__14876 = cljs.core.next(seq__14785_14862__$1);
var G__14877 = null;
var G__14878 = (0);
var G__14879 = (0);
seq__14785_14845 = G__14876;
chunk__14787_14846 = G__14877;
count__14788_14847 = G__14878;
i__14789_14848 = G__14879;
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
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__14795){
var map__14796 = p__14795;
var map__14796__$1 = (((((!((map__14796 == null))))?(((((map__14796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14796):map__14796);
var msg = map__14796__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14796__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__14796,map__14796__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__14796,map__14796__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__14799){
var map__14800 = p__14799;
var map__14800__$1 = (((((!((map__14800 == null))))?(((((map__14800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14800):map__14800);
var msg = map__14800__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14800__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__14802){
var map__14803 = p__14802;
var map__14803__$1 = (((((!((map__14803 == null))))?(((((map__14803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14803):map__14803);
var msg = map__14803__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14803__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14803__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__14806_14880 = cljs.core.seq(sources);
var chunk__14807_14881 = null;
var count__14808_14882 = (0);
var i__14809_14883 = (0);
while(true){
if((i__14809_14883 < count__14808_14882)){
var map__14810_14885 = chunk__14807_14881.cljs$core$IIndexed$_nth$arity$2(null,i__14809_14883);
var map__14810_14886__$1 = (((((!((map__14810_14885 == null))))?(((((map__14810_14885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14810_14885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14810_14885):map__14810_14885);
var src_14887 = map__14810_14886__$1;
var provides_14888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14810_14886__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_14889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14810_14886__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4047__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_14889)));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_14888);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_14889);
} else {
}


var G__14890 = seq__14806_14880;
var G__14891 = chunk__14807_14881;
var G__14892 = count__14808_14882;
var G__14893 = (i__14809_14883 + (1));
seq__14806_14880 = G__14890;
chunk__14807_14881 = G__14891;
count__14808_14882 = G__14892;
i__14809_14883 = G__14893;
continue;
} else {
var temp__5457__auto___14894 = cljs.core.seq(seq__14806_14880);
if(temp__5457__auto___14894){
var seq__14806_14895__$1 = temp__5457__auto___14894;
if(cljs.core.chunked_seq_QMARK_(seq__14806_14895__$1)){
var c__4461__auto___14896 = cljs.core.chunk_first(seq__14806_14895__$1);
var G__14897 = cljs.core.chunk_rest(seq__14806_14895__$1);
var G__14898 = c__4461__auto___14896;
var G__14899 = cljs.core.count(c__4461__auto___14896);
var G__14900 = (0);
seq__14806_14880 = G__14897;
chunk__14807_14881 = G__14898;
count__14808_14882 = G__14899;
i__14809_14883 = G__14900;
continue;
} else {
var map__14812_14901 = cljs.core.first(seq__14806_14895__$1);
var map__14812_14902__$1 = (((((!((map__14812_14901 == null))))?(((((map__14812_14901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14812_14901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14812_14901):map__14812_14901);
var src_14903 = map__14812_14902__$1;
var provides_14904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14812_14902__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_14905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14812_14902__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4047__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_14905)));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_14904);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_14905);
} else {
}


var G__14907 = cljs.core.next(seq__14806_14895__$1);
var G__14908 = null;
var G__14909 = (0);
var G__14910 = (0);
seq__14806_14880 = G__14907;
chunk__14807_14881 = G__14908;
count__14808_14882 = G__14909;
i__14809_14883 = G__14910;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e14805){var e = e14805;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__14814){
var map__14815 = p__14814;
var map__14815__$1 = (((((!((map__14815 == null))))?(((((map__14815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14815):map__14815);
var msg = map__14815__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__14817 = info;
var map__14817__$1 = (((((!((map__14817 == null))))?(((((map__14817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14817):map__14817);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14817__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14817__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__14819(s__14820){
return (new cljs.core.LazySeq(null,((function (map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info){
return (function (){
var s__14820__$1 = s__14820;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14820__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__14825 = cljs.core.first(xs__6012__auto__);
var map__14825__$1 = (((((!((map__14825 == null))))?(((((map__14825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14825):map__14825);
var src = map__14825__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14825__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14825__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__14820__$1,map__14825,map__14825__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__14819_$_iter__14821(s__14822){
return (new cljs.core.LazySeq(null,((function (s__14820__$1,map__14825,map__14825__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info){
return (function (){
var s__14822__$1 = s__14822;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__14822__$1);
if(temp__5457__auto____$1){
var s__14822__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14822__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__14822__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__14824 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__14823 = (0);
while(true){
if((i__14823 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__14823);
cljs.core.chunk_append(b__14824,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__14913 = (i__14823 + (1));
i__14823 = G__14913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14824),shadow$cljs$devtools$client$node$build_complete_$_iter__14819_$_iter__14821(cljs.core.chunk_rest(s__14822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14824),null);
}
} else {
var warning = cljs.core.first(s__14822__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__14819_$_iter__14821(cljs.core.rest(s__14822__$2)));
}
} else {
return null;
}
break;
}
});})(s__14820__$1,map__14825,map__14825__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info))
,null,null));
});})(s__14820__$1,map__14825,map__14825__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__14819(cljs.core.rest(s__14820__$1)));
} else {
var G__14914 = cljs.core.rest(s__14820__$1);
s__14820__$1 = G__14914;
continue;
}
} else {
var G__14915 = cljs.core.rest(s__14820__$1);
s__14820__$1 = G__14915;
continue;
}
} else {
return null;
}
break;
}
});})(map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info))
,null,null));
});})(map__14817,map__14817__$1,sources,compiled,map__14815,map__14815__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__14827 = info;
var map__14827__$1 = (((((!((map__14827 == null))))?(((((map__14827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14827):map__14827);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__14827,map__14827__$1,sources__$1,compiled__$1,map__14817,map__14817__$1,sources,compiled,warnings,map__14815,map__14815__$1,msg,info,reload_info){
return (function (p__14829){
var map__14830 = p__14829;
var map__14830__$1 = (((((!((map__14830 == null))))?(((((map__14830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14830):map__14830);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14830__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14830__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__14827,map__14827__$1,sources__$1,compiled__$1,map__14817,map__14817__$1,sources,compiled,warnings,map__14815,map__14815__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__14827,map__14827__$1,sources__$1,compiled__$1,map__14817,map__14817__$1,sources,compiled,warnings,map__14815,map__14815__$1,msg,info,reload_info){
return (function (p__14832){
var map__14833 = p__14832;
var map__14833__$1 = (((((!((map__14833 == null))))?(((((map__14833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14833):map__14833);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14833__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__14827,map__14827__$1,sources__$1,compiled__$1,map__14817,map__14817__$1,sources,compiled,warnings,map__14815,map__14815__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__14827,map__14827__$1,sources__$1,compiled__$1,files_to_require,map__14817,map__14817__$1,sources,compiled,warnings,map__14815,map__14815__$1,msg,info,reload_info){
return (function (){
var seq__14835 = cljs.core.seq(files_to_require);
var chunk__14836 = null;
var count__14837 = (0);
var i__14838 = (0);
while(true){
if((i__14838 < count__14837)){
var src = chunk__14836.cljs$core$IIndexed$_nth$arity$2(null,i__14838);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__14916 = seq__14835;
var G__14917 = chunk__14836;
var G__14918 = count__14837;
var G__14919 = (i__14838 + (1));
seq__14835 = G__14916;
chunk__14836 = G__14917;
count__14837 = G__14918;
i__14838 = G__14919;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14835);
if(temp__5457__auto__){
var seq__14835__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14835__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__14835__$1);
var G__14920 = cljs.core.chunk_rest(seq__14835__$1);
var G__14921 = c__4461__auto__;
var G__14922 = cljs.core.count(c__4461__auto__);
var G__14923 = (0);
seq__14835 = G__14920;
chunk__14836 = G__14921;
count__14837 = G__14922;
i__14838 = G__14923;
continue;
} else {
var src = cljs.core.first(seq__14835__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__14924 = cljs.core.next(seq__14835__$1);
var G__14925 = null;
var G__14926 = (0);
var G__14927 = (0);
seq__14835 = G__14924;
chunk__14836 = G__14925;
count__14837 = G__14926;
i__14838 = G__14927;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__14827,map__14827__$1,sources__$1,compiled__$1,files_to_require,map__14817,map__14817__$1,sources,compiled,warnings,map__14815,map__14815__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__14840){
var map__14841 = p__14840;
var map__14841__$1 = (((((!((map__14841 == null))))?(((((map__14841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14841):map__14841);
var msg = map__14841__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14841__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__14843 = type;
var G__14843__$1 = (((G__14843 instanceof cljs.core.Keyword))?G__14843.fqn:null);
switch (G__14843__$1) {
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
}catch (e14929){var e = e14929;
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
