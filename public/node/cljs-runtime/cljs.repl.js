goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12335){
var map__12336 = p__12335;
var map__12336__$1 = (((((!((map__12336 == null))))?(((((map__12336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12336):map__12336);
var m = map__12336__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12336__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12338_12375 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12339_12376 = null;
var count__12340_12377 = (0);
var i__12341_12378 = (0);
while(true){
if((i__12341_12378 < count__12340_12377)){
var f_12379 = chunk__12339_12376.cljs$core$IIndexed$_nth$arity$2(null,i__12341_12378);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12379], 0));


var G__12382 = seq__12338_12375;
var G__12383 = chunk__12339_12376;
var G__12384 = count__12340_12377;
var G__12385 = (i__12341_12378 + (1));
seq__12338_12375 = G__12382;
chunk__12339_12376 = G__12383;
count__12340_12377 = G__12384;
i__12341_12378 = G__12385;
continue;
} else {
var temp__5457__auto___12386 = cljs.core.seq(seq__12338_12375);
if(temp__5457__auto___12386){
var seq__12338_12387__$1 = temp__5457__auto___12386;
if(cljs.core.chunked_seq_QMARK_(seq__12338_12387__$1)){
var c__4461__auto___12388 = cljs.core.chunk_first(seq__12338_12387__$1);
var G__12389 = cljs.core.chunk_rest(seq__12338_12387__$1);
var G__12390 = c__4461__auto___12388;
var G__12391 = cljs.core.count(c__4461__auto___12388);
var G__12392 = (0);
seq__12338_12375 = G__12389;
chunk__12339_12376 = G__12390;
count__12340_12377 = G__12391;
i__12341_12378 = G__12392;
continue;
} else {
var f_12393 = cljs.core.first(seq__12338_12387__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12393], 0));


var G__12394 = cljs.core.next(seq__12338_12387__$1);
var G__12395 = null;
var G__12396 = (0);
var G__12397 = (0);
seq__12338_12375 = G__12394;
chunk__12339_12376 = G__12395;
count__12340_12377 = G__12396;
i__12341_12378 = G__12397;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12398 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_12398], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_12398)))?cljs.core.second(arglists_12398):arglists_12398)], 0));
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
var seq__12344_12399 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12345_12400 = null;
var count__12346_12401 = (0);
var i__12347_12402 = (0);
while(true){
if((i__12347_12402 < count__12346_12401)){
var vec__12348_12403 = chunk__12345_12400.cljs$core$IIndexed$_nth$arity$2(null,i__12347_12402);
var name_12404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12348_12403,(0),null);
var map__12351_12405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12348_12403,(1),null);
var map__12351_12406__$1 = (((((!((map__12351_12405 == null))))?(((((map__12351_12405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12351_12405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12351_12405):map__12351_12405);
var doc_12407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12351_12406__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12351_12406__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12404], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12408], 0));

if(cljs.core.truth_(doc_12407)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12407], 0));
} else {
}


var G__12409 = seq__12344_12399;
var G__12410 = chunk__12345_12400;
var G__12411 = count__12346_12401;
var G__12412 = (i__12347_12402 + (1));
seq__12344_12399 = G__12409;
chunk__12345_12400 = G__12410;
count__12346_12401 = G__12411;
i__12347_12402 = G__12412;
continue;
} else {
var temp__5457__auto___12431 = cljs.core.seq(seq__12344_12399);
if(temp__5457__auto___12431){
var seq__12344_12432__$1 = temp__5457__auto___12431;
if(cljs.core.chunked_seq_QMARK_(seq__12344_12432__$1)){
var c__4461__auto___12433 = cljs.core.chunk_first(seq__12344_12432__$1);
var G__12434 = cljs.core.chunk_rest(seq__12344_12432__$1);
var G__12435 = c__4461__auto___12433;
var G__12436 = cljs.core.count(c__4461__auto___12433);
var G__12437 = (0);
seq__12344_12399 = G__12434;
chunk__12345_12400 = G__12435;
count__12346_12401 = G__12436;
i__12347_12402 = G__12437;
continue;
} else {
var vec__12362_12438 = cljs.core.first(seq__12344_12432__$1);
var name_12439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362_12438,(0),null);
var map__12365_12440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362_12438,(1),null);
var map__12365_12441__$1 = (((((!((map__12365_12440 == null))))?(((((map__12365_12440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12365_12440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12365_12440):map__12365_12440);
var doc_12442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12365_12441__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12365_12441__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12439], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12443], 0));

if(cljs.core.truth_(doc_12442)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12442], 0));
} else {
}


var G__12444 = cljs.core.next(seq__12344_12432__$1);
var G__12445 = null;
var G__12446 = (0);
var G__12447 = (0);
seq__12344_12399 = G__12444;
chunk__12345_12400 = G__12445;
count__12346_12401 = G__12446;
i__12347_12402 = G__12447;
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

var seq__12367 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12368 = null;
var count__12369 = (0);
var i__12370 = (0);
while(true){
if((i__12370 < count__12369)){
var role = chunk__12368.cljs$core$IIndexed$_nth$arity$2(null,i__12370);
var temp__5457__auto___12448__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12448__$1)){
var spec_12449 = temp__5457__auto___12448__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12449)], 0));
} else {
}


var G__12450 = seq__12367;
var G__12451 = chunk__12368;
var G__12452 = count__12369;
var G__12453 = (i__12370 + (1));
seq__12367 = G__12450;
chunk__12368 = G__12451;
count__12369 = G__12452;
i__12370 = G__12453;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__12367);
if(temp__5457__auto____$1){
var seq__12367__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__12367__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__12367__$1);
var G__12454 = cljs.core.chunk_rest(seq__12367__$1);
var G__12455 = c__4461__auto__;
var G__12456 = cljs.core.count(c__4461__auto__);
var G__12457 = (0);
seq__12367 = G__12454;
chunk__12368 = G__12455;
count__12369 = G__12456;
i__12370 = G__12457;
continue;
} else {
var role = cljs.core.first(seq__12367__$1);
var temp__5457__auto___12458__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12458__$2)){
var spec_12459 = temp__5457__auto___12458__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12459)], 0));
} else {
}


var G__12469 = cljs.core.next(seq__12367__$1);
var G__12470 = null;
var G__12471 = (0);
var G__12472 = (0);
seq__12367 = G__12469;
chunk__12368 = G__12470;
count__12369 = G__12471;
i__12370 = G__12472;
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
