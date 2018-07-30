goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28718){
var map__28719 = p__28718;
var map__28719__$1 = ((((!((map__28719 == null)))?(((((map__28719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28719):map__28719);
var m = map__28719__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28721_28745 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28722_28746 = null;
var count__28723_28747 = (0);
var i__28724_28748 = (0);
while(true){
if((i__28724_28748 < count__28723_28747)){
var f_28749 = chunk__28722_28746.cljs$core$IIndexed$_nth$arity$2(null,i__28724_28748);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28749], 0));


var G__28750 = seq__28721_28745;
var G__28751 = chunk__28722_28746;
var G__28752 = count__28723_28747;
var G__28753 = (i__28724_28748 + (1));
seq__28721_28745 = G__28750;
chunk__28722_28746 = G__28751;
count__28723_28747 = G__28752;
i__28724_28748 = G__28753;
continue;
} else {
var temp__5457__auto___28754 = cljs.core.seq(seq__28721_28745);
if(temp__5457__auto___28754){
var seq__28721_28755__$1 = temp__5457__auto___28754;
if(cljs.core.chunked_seq_QMARK_(seq__28721_28755__$1)){
var c__4351__auto___28756 = cljs.core.chunk_first(seq__28721_28755__$1);
var G__28757 = cljs.core.chunk_rest(seq__28721_28755__$1);
var G__28758 = c__4351__auto___28756;
var G__28759 = cljs.core.count(c__4351__auto___28756);
var G__28760 = (0);
seq__28721_28745 = G__28757;
chunk__28722_28746 = G__28758;
count__28723_28747 = G__28759;
i__28724_28748 = G__28760;
continue;
} else {
var f_28761 = cljs.core.first(seq__28721_28755__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28761], 0));


var G__28762 = cljs.core.next(seq__28721_28755__$1);
var G__28763 = null;
var G__28764 = (0);
var G__28765 = (0);
seq__28721_28745 = G__28762;
chunk__28722_28746 = G__28763;
count__28723_28747 = G__28764;
i__28724_28748 = G__28765;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28766 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28766], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28766)))?cljs.core.second(arglists_28766):arglists_28766)], 0));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28726_28767 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28727_28768 = null;
var count__28728_28769 = (0);
var i__28729_28770 = (0);
while(true){
if((i__28729_28770 < count__28728_28769)){
var vec__28730_28771 = chunk__28727_28768.cljs$core$IIndexed$_nth$arity$2(null,i__28729_28770);
var name_28772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730_28771,(0),null);
var map__28733_28773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730_28771,(1),null);
var map__28733_28774__$1 = ((((!((map__28733_28773 == null)))?(((((map__28733_28773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28733_28773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28733_28773):map__28733_28773);
var doc_28775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28733_28774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28733_28774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28772], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28776], 0));

if(cljs.core.truth_(doc_28775)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28775], 0));
} else {
}


var G__28782 = seq__28726_28767;
var G__28783 = chunk__28727_28768;
var G__28784 = count__28728_28769;
var G__28785 = (i__28729_28770 + (1));
seq__28726_28767 = G__28782;
chunk__28727_28768 = G__28783;
count__28728_28769 = G__28784;
i__28729_28770 = G__28785;
continue;
} else {
var temp__5457__auto___28786 = cljs.core.seq(seq__28726_28767);
if(temp__5457__auto___28786){
var seq__28726_28787__$1 = temp__5457__auto___28786;
if(cljs.core.chunked_seq_QMARK_(seq__28726_28787__$1)){
var c__4351__auto___28788 = cljs.core.chunk_first(seq__28726_28787__$1);
var G__28789 = cljs.core.chunk_rest(seq__28726_28787__$1);
var G__28790 = c__4351__auto___28788;
var G__28791 = cljs.core.count(c__4351__auto___28788);
var G__28792 = (0);
seq__28726_28767 = G__28789;
chunk__28727_28768 = G__28790;
count__28728_28769 = G__28791;
i__28729_28770 = G__28792;
continue;
} else {
var vec__28736_28793 = cljs.core.first(seq__28726_28787__$1);
var name_28794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736_28793,(0),null);
var map__28739_28795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736_28793,(1),null);
var map__28739_28796__$1 = ((((!((map__28739_28795 == null)))?(((((map__28739_28795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28739_28795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28739_28795):map__28739_28795);
var doc_28797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28739_28796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28739_28796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28794], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28798], 0));

if(cljs.core.truth_(doc_28797)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28797], 0));
} else {
}


var G__28801 = cljs.core.next(seq__28726_28787__$1);
var G__28802 = null;
var G__28803 = (0);
var G__28804 = (0);
seq__28726_28767 = G__28801;
chunk__28727_28768 = G__28802;
count__28728_28769 = G__28803;
i__28729_28770 = G__28804;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__28741 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28742 = null;
var count__28743 = (0);
var i__28744 = (0);
while(true){
if((i__28744 < count__28743)){
var role = chunk__28742.cljs$core$IIndexed$_nth$arity$2(null,i__28744);
var temp__5457__auto___28805__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28805__$1)){
var spec_28806 = temp__5457__auto___28805__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_28806)], 0));
} else {
}


var G__28807 = seq__28741;
var G__28808 = chunk__28742;
var G__28809 = count__28743;
var G__28810 = (i__28744 + (1));
seq__28741 = G__28807;
chunk__28742 = G__28808;
count__28743 = G__28809;
i__28744 = G__28810;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__28741);
if(temp__5457__auto____$1){
var seq__28741__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28741__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__28741__$1);
var G__28811 = cljs.core.chunk_rest(seq__28741__$1);
var G__28812 = c__4351__auto__;
var G__28813 = cljs.core.count(c__4351__auto__);
var G__28814 = (0);
seq__28741 = G__28811;
chunk__28742 = G__28812;
count__28743 = G__28813;
i__28744 = G__28814;
continue;
} else {
var role = cljs.core.first(seq__28741__$1);
var temp__5457__auto___28815__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28815__$2)){
var spec_28816 = temp__5457__auto___28815__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_28816)], 0));
} else {
}


var G__28822 = cljs.core.next(seq__28741__$1);
var G__28823 = null;
var G__28824 = (0);
var G__28825 = (0);
seq__28741 = G__28822;
chunk__28742 = G__28823;
count__28743 = G__28824;
i__28744 = G__28825;
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
