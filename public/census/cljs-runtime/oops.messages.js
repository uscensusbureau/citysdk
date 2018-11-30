goog.provide('oops.messages');
goog.require('cljs.core');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Oops"),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if((typeof oops !== 'undefined') && (typeof oops.messages !== 'undefined') && (typeof oops.messages.runtime_message !== 'undefined')){
} else {
oops.messages.runtime_message = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__11560 = cljs.core.get_global_hierarchy;
return (fexpr__11560.cljs$core$IFn$_invoke$arity$0 ? fexpr__11560.cljs$core$IFn$_invoke$arity$0() : fexpr__11560.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("oops.messages","runtime-message"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function() { 
var G__11576__delegate = function (type,_){
return type;
};
var G__11576 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__11577__i = 0, G__11577__a = new Array(arguments.length -  1);
while (G__11577__i < G__11577__a.length) {G__11577__a[G__11577__i] = arguments[G__11577__i + 1]; ++G__11577__i;}
  _ = new cljs.core.IndexedSeq(G__11577__a,0,null);
} 
return G__11576__delegate.call(this,type,_);};
G__11576.cljs$lang$maxFixedArity = 1;
G__11576.cljs$lang$applyTo = (function (arglist__11578){
var type = cljs.core.first(arglist__11578);
var _ = cljs.core.rest(arglist__11578);
return G__11576__delegate(type,_);
});
G__11576.cljs$core$IFn$_invoke$arity$variadic = G__11576__delegate;
return G__11576;
})()
;})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),(function (_type,info){
var map__11561 = info;
var map__11561__$1 = (((((!((map__11561 == null))))?(((((map__11561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11561):map__11561);
var flavor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11561__$1,new cljs.core.Keyword(null,"flavor","flavor",-1331636636));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11561__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')) : oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),(function (_type,info){
var map__11563 = info;
var map__11563__$1 = (((((!((map__11563 == null))))?(((((map__11563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11563):map__11563);
var soft_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11563__$1,new cljs.core.Keyword(null,"soft?","soft?",-1339668477));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11563__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11563__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?" or nil":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')) : oops.messages.post_process_message.call(null,["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?" or nil":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),(function (_type,info){
var map__11565 = info;
var map__11565__$1 = (((((!((map__11565 == null))))?(((((map__11565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11565):map__11565);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11565__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11565__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')) : oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),(function (_type,info){
var map__11567 = info;
var map__11567__$1 = (((((!((map__11567 == null))))?(((((map__11567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11567):map__11567);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11567__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11567__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var frozen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11567__$1,new cljs.core.Keyword(null,"frozen?","frozen?",613726824));
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frozen_QMARK_)?" because the object is frozen":null))].join('')) : oops.messages.post_process_message.call(null,["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frozen_QMARK_)?" because the object is frozen":null))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),(function (_type,info){
var map__11569 = info;
var map__11569__$1 = (((((!((map__11569 == null))))?(((((map__11569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11569):map__11569);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11569__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11569__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is sealed"].join('')) : oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is sealed"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),(function (_type,info){
var map__11571 = info;
var map__11571__$1 = (((((!((map__11571 == null))))?(((((map__11571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11571):map__11571);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11571__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11571__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is frozen"].join('')) : oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is frozen"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Invalid selector") : oops.messages.post_process_message.call(null,"Invalid selector"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Unexpected empty selector") : oops.messages.post_process_message.call(null,"Unexpected empty selector"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Unexpected punching selector (\"!\" makes sense only with oset!)") : oops.messages.post_process_message.call(null,"Unexpected punching selector (\"!\" makes sense only with oset!)"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Unexpected soft selector (\"?\" does not make sense with oset!)") : oops.messages.post_process_message.call(null,"Unexpected soft selector (\"?\" does not make sense with oset!)"));
}));

//# sourceMappingURL=oops.messages.js.map
