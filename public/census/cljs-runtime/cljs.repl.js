goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32157){
var map__32158 = p__32157;
var map__32158__$1 = (((((!((map__32158 == null))))?(((((map__32158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32158):map__32158);
var m = map__32158__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32158__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32160_32182 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32161_32183 = null;
var count__32162_32184 = (0);
var i__32163_32185 = (0);
while(true){
if((i__32163_32185 < count__32162_32184)){
var f_32186 = chunk__32161_32183.cljs$core$IIndexed$_nth$arity$2(null,i__32163_32185);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32186], 0));


var G__32187 = seq__32160_32182;
var G__32188 = chunk__32161_32183;
var G__32189 = count__32162_32184;
var G__32190 = (i__32163_32185 + (1));
seq__32160_32182 = G__32187;
chunk__32161_32183 = G__32188;
count__32162_32184 = G__32189;
i__32163_32185 = G__32190;
continue;
} else {
var temp__5457__auto___32191 = cljs.core.seq(seq__32160_32182);
if(temp__5457__auto___32191){
var seq__32160_32192__$1 = temp__5457__auto___32191;
if(cljs.core.chunked_seq_QMARK_(seq__32160_32192__$1)){
var c__4461__auto___32193 = cljs.core.chunk_first(seq__32160_32192__$1);
var G__32194 = cljs.core.chunk_rest(seq__32160_32192__$1);
var G__32195 = c__4461__auto___32193;
var G__32196 = cljs.core.count(c__4461__auto___32193);
var G__32197 = (0);
seq__32160_32182 = G__32194;
chunk__32161_32183 = G__32195;
count__32162_32184 = G__32196;
i__32163_32185 = G__32197;
continue;
} else {
var f_32198 = cljs.core.first(seq__32160_32192__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32198], 0));


var G__32199 = cljs.core.next(seq__32160_32192__$1);
var G__32200 = null;
var G__32201 = (0);
var G__32202 = (0);
seq__32160_32182 = G__32199;
chunk__32161_32183 = G__32200;
count__32162_32184 = G__32201;
i__32163_32185 = G__32202;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32203 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32203], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32203)))?cljs.core.second(arglists_32203):arglists_32203)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32164_32204 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32165_32205 = null;
var count__32166_32206 = (0);
var i__32167_32207 = (0);
while(true){
if((i__32167_32207 < count__32166_32206)){
var vec__32168_32208 = chunk__32165_32205.cljs$core$IIndexed$_nth$arity$2(null,i__32167_32207);
var name_32209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32168_32208,(0),null);
var map__32171_32210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32168_32208,(1),null);
var map__32171_32211__$1 = (((((!((map__32171_32210 == null))))?(((((map__32171_32210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32171_32210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32171_32210):map__32171_32210);
var doc_32212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171_32211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171_32211__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32209], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32213], 0));

if(cljs.core.truth_(doc_32212)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32212], 0));
} else {
}


var G__32214 = seq__32164_32204;
var G__32215 = chunk__32165_32205;
var G__32216 = count__32166_32206;
var G__32217 = (i__32167_32207 + (1));
seq__32164_32204 = G__32214;
chunk__32165_32205 = G__32215;
count__32166_32206 = G__32216;
i__32167_32207 = G__32217;
continue;
} else {
var temp__5457__auto___32218 = cljs.core.seq(seq__32164_32204);
if(temp__5457__auto___32218){
var seq__32164_32219__$1 = temp__5457__auto___32218;
if(cljs.core.chunked_seq_QMARK_(seq__32164_32219__$1)){
var c__4461__auto___32220 = cljs.core.chunk_first(seq__32164_32219__$1);
var G__32221 = cljs.core.chunk_rest(seq__32164_32219__$1);
var G__32222 = c__4461__auto___32220;
var G__32223 = cljs.core.count(c__4461__auto___32220);
var G__32224 = (0);
seq__32164_32204 = G__32221;
chunk__32165_32205 = G__32222;
count__32166_32206 = G__32223;
i__32167_32207 = G__32224;
continue;
} else {
var vec__32173_32225 = cljs.core.first(seq__32164_32219__$1);
var name_32226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32173_32225,(0),null);
var map__32176_32227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32173_32225,(1),null);
var map__32176_32228__$1 = (((((!((map__32176_32227 == null))))?(((((map__32176_32227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32176_32227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32176_32227):map__32176_32227);
var doc_32229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32176_32228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32176_32228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32226], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32230], 0));

if(cljs.core.truth_(doc_32229)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32229], 0));
} else {
}


var G__32231 = cljs.core.next(seq__32164_32219__$1);
var G__32232 = null;
var G__32233 = (0);
var G__32234 = (0);
seq__32164_32204 = G__32231;
chunk__32165_32205 = G__32232;
count__32166_32206 = G__32233;
i__32167_32207 = G__32234;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__32178 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32179 = null;
var count__32180 = (0);
var i__32181 = (0);
while(true){
if((i__32181 < count__32180)){
var role = chunk__32179.cljs$core$IIndexed$_nth$arity$2(null,i__32181);
var temp__5457__auto___32235__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32235__$1)){
var spec_32236 = temp__5457__auto___32235__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_32236)], 0));
} else {
}


var G__32237 = seq__32178;
var G__32238 = chunk__32179;
var G__32239 = count__32180;
var G__32240 = (i__32181 + (1));
seq__32178 = G__32237;
chunk__32179 = G__32238;
count__32180 = G__32239;
i__32181 = G__32240;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__32178);
if(temp__5457__auto____$1){
var seq__32178__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32178__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__32178__$1);
var G__32241 = cljs.core.chunk_rest(seq__32178__$1);
var G__32242 = c__4461__auto__;
var G__32243 = cljs.core.count(c__4461__auto__);
var G__32244 = (0);
seq__32178 = G__32241;
chunk__32179 = G__32242;
count__32180 = G__32243;
i__32181 = G__32244;
continue;
} else {
var role = cljs.core.first(seq__32178__$1);
var temp__5457__auto___32245__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32245__$2)){
var spec_32246 = temp__5457__auto___32245__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_32246)], 0));
} else {
}


var G__32248 = cljs.core.next(seq__32178__$1);
var G__32249 = null;
var G__32250 = (0);
var G__32251 = (0);
seq__32178 = G__32248;
chunk__32179 = G__32249;
count__32180 = G__32250;
i__32181 = G__32251;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
