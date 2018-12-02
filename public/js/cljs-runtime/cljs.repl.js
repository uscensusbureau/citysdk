goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12798){
var map__12799 = p__12798;
var map__12799__$1 = (((((!((map__12799 == null))))?(((((map__12799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12799):map__12799);
var m = map__12799__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12799__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12801_12828 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12802_12829 = null;
var count__12803_12830 = (0);
var i__12804_12831 = (0);
while(true){
if((i__12804_12831 < count__12803_12830)){
var f_12832 = chunk__12802_12829.cljs$core$IIndexed$_nth$arity$2(null,i__12804_12831);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12832], 0));


var G__12833 = seq__12801_12828;
var G__12834 = chunk__12802_12829;
var G__12835 = count__12803_12830;
var G__12836 = (i__12804_12831 + (1));
seq__12801_12828 = G__12833;
chunk__12802_12829 = G__12834;
count__12803_12830 = G__12835;
i__12804_12831 = G__12836;
continue;
} else {
var temp__5457__auto___12837 = cljs.core.seq(seq__12801_12828);
if(temp__5457__auto___12837){
var seq__12801_12838__$1 = temp__5457__auto___12837;
if(cljs.core.chunked_seq_QMARK_(seq__12801_12838__$1)){
var c__4461__auto___12839 = cljs.core.chunk_first(seq__12801_12838__$1);
var G__12840 = cljs.core.chunk_rest(seq__12801_12838__$1);
var G__12841 = c__4461__auto___12839;
var G__12842 = cljs.core.count(c__4461__auto___12839);
var G__12843 = (0);
seq__12801_12828 = G__12840;
chunk__12802_12829 = G__12841;
count__12803_12830 = G__12842;
i__12804_12831 = G__12843;
continue;
} else {
var f_12844 = cljs.core.first(seq__12801_12838__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12844], 0));


var G__12845 = cljs.core.next(seq__12801_12838__$1);
var G__12846 = null;
var G__12847 = (0);
var G__12848 = (0);
seq__12801_12828 = G__12845;
chunk__12802_12829 = G__12846;
count__12803_12830 = G__12847;
i__12804_12831 = G__12848;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12849 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_12849], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_12849)))?cljs.core.second(arglists_12849):arglists_12849)], 0));
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
var seq__12808_12850 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12809_12851 = null;
var count__12810_12852 = (0);
var i__12811_12853 = (0);
while(true){
if((i__12811_12853 < count__12810_12852)){
var vec__12813_12854 = chunk__12809_12851.cljs$core$IIndexed$_nth$arity$2(null,i__12811_12853);
var name_12855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12813_12854,(0),null);
var map__12816_12856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12813_12854,(1),null);
var map__12816_12857__$1 = (((((!((map__12816_12856 == null))))?(((((map__12816_12856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12816_12856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12816_12856):map__12816_12856);
var doc_12858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816_12857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816_12857__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12855], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12859], 0));

if(cljs.core.truth_(doc_12858)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12858], 0));
} else {
}


var G__12860 = seq__12808_12850;
var G__12861 = chunk__12809_12851;
var G__12862 = count__12810_12852;
var G__12863 = (i__12811_12853 + (1));
seq__12808_12850 = G__12860;
chunk__12809_12851 = G__12861;
count__12810_12852 = G__12862;
i__12811_12853 = G__12863;
continue;
} else {
var temp__5457__auto___12864 = cljs.core.seq(seq__12808_12850);
if(temp__5457__auto___12864){
var seq__12808_12865__$1 = temp__5457__auto___12864;
if(cljs.core.chunked_seq_QMARK_(seq__12808_12865__$1)){
var c__4461__auto___12866 = cljs.core.chunk_first(seq__12808_12865__$1);
var G__12867 = cljs.core.chunk_rest(seq__12808_12865__$1);
var G__12868 = c__4461__auto___12866;
var G__12869 = cljs.core.count(c__4461__auto___12866);
var G__12870 = (0);
seq__12808_12850 = G__12867;
chunk__12809_12851 = G__12868;
count__12810_12852 = G__12869;
i__12811_12853 = G__12870;
continue;
} else {
var vec__12818_12871 = cljs.core.first(seq__12808_12865__$1);
var name_12872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818_12871,(0),null);
var map__12821_12873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818_12871,(1),null);
var map__12821_12874__$1 = (((((!((map__12821_12873 == null))))?(((((map__12821_12873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12821_12873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12821_12873):map__12821_12873);
var doc_12875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12821_12874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12821_12874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12872], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12876], 0));

if(cljs.core.truth_(doc_12875)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12875], 0));
} else {
}


var G__12888 = cljs.core.next(seq__12808_12865__$1);
var G__12889 = null;
var G__12890 = (0);
var G__12891 = (0);
seq__12808_12850 = G__12888;
chunk__12809_12851 = G__12889;
count__12810_12852 = G__12890;
i__12811_12853 = G__12891;
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

var seq__12824 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12825 = null;
var count__12826 = (0);
var i__12827 = (0);
while(true){
if((i__12827 < count__12826)){
var role = chunk__12825.cljs$core$IIndexed$_nth$arity$2(null,i__12827);
var temp__5457__auto___12914__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12914__$1)){
var spec_12915 = temp__5457__auto___12914__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12915)], 0));
} else {
}


var G__12916 = seq__12824;
var G__12917 = chunk__12825;
var G__12918 = count__12826;
var G__12919 = (i__12827 + (1));
seq__12824 = G__12916;
chunk__12825 = G__12917;
count__12826 = G__12918;
i__12827 = G__12919;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__12824);
if(temp__5457__auto____$1){
var seq__12824__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__12824__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__12824__$1);
var G__12920 = cljs.core.chunk_rest(seq__12824__$1);
var G__12921 = c__4461__auto__;
var G__12922 = cljs.core.count(c__4461__auto__);
var G__12923 = (0);
seq__12824 = G__12920;
chunk__12825 = G__12921;
count__12826 = G__12922;
i__12827 = G__12923;
continue;
} else {
var role = cljs.core.first(seq__12824__$1);
var temp__5457__auto___12924__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12924__$2)){
var spec_12925 = temp__5457__auto___12924__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12925)], 0));
} else {
}


var G__12926 = cljs.core.next(seq__12824__$1);
var G__12927 = null;
var G__12928 = (0);
var G__12929 = (0);
seq__12824 = G__12926;
chunk__12825 = G__12927;
count__12826 = G__12928;
i__12827 = G__12929;
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
