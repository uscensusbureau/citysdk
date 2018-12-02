goog.provide('census.geoAPI.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cuerdas.core');
goog.require('defun.core');
goog.require('census.utils.core');
census.geoAPI.core.G_err = (function census$geoAPI$core$G_err($g$,res,vin,lev){
var e_gen = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["No GeoJSON found for: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.utils.core.keys__GT_strs(cljs.core.name(lev))),"'"].join(''),["at this scope in vintage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vin)].join(''),["at resolution: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)].join('')], null);
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lev], null));
if(cljs.core.truth_(temp__5455__auto__)){
var vins = temp__5455__auto__;
var e_try = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["For '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(census.utils.core.keys__GT_strs(cljs.core.name(lev))),"' try of of the following:"].join(''),["=== :us = nation-level '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(lev)),"' geoResolutions ==="].join(''),["=== :st = state-levels '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(lev)),"' geoResolutions ==="].join('')], null);
var seq__34742_34872 = cljs.core.seq(e_gen);
var chunk__34743_34873 = null;
var count__34744_34874 = (0);
var i__34745_34875 = (0);
while(true){
if((i__34745_34875 < count__34744_34874)){
var e_34876 = chunk__34743_34873.cljs$core$IIndexed$_nth$arity$2(null,i__34745_34875);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_34876], 0));


var G__34877 = seq__34742_34872;
var G__34878 = chunk__34743_34873;
var G__34879 = count__34744_34874;
var G__34880 = (i__34745_34875 + (1));
seq__34742_34872 = G__34877;
chunk__34743_34873 = G__34878;
count__34744_34874 = G__34879;
i__34745_34875 = G__34880;
continue;
} else {
var temp__5457__auto___34881 = cljs.core.seq(seq__34742_34872);
if(temp__5457__auto___34881){
var seq__34742_34882__$1 = temp__5457__auto___34881;
if(cljs.core.chunked_seq_QMARK_(seq__34742_34882__$1)){
var c__4461__auto___34883 = cljs.core.chunk_first(seq__34742_34882__$1);
var G__34884 = cljs.core.chunk_rest(seq__34742_34882__$1);
var G__34885 = c__4461__auto___34883;
var G__34886 = cljs.core.count(c__4461__auto___34883);
var G__34887 = (0);
seq__34742_34872 = G__34884;
chunk__34743_34873 = G__34885;
count__34744_34874 = G__34886;
i__34745_34875 = G__34887;
continue;
} else {
var e_34888 = cljs.core.first(seq__34742_34882__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_34888], 0));


var G__34889 = cljs.core.next(seq__34742_34882__$1);
var G__34890 = null;
var G__34891 = (0);
var G__34892 = (0);
seq__34742_34872 = G__34889;
chunk__34743_34873 = G__34890;
count__34744_34874 = G__34891;
i__34745_34875 = G__34892;
continue;
}
} else {
}
}
break;
}

var seq__34746_34893 = cljs.core.seq(e_try);
var chunk__34747_34894 = null;
var count__34748_34895 = (0);
var i__34749_34896 = (0);
while(true){
if((i__34749_34896 < count__34748_34895)){
var t_34897 = chunk__34747_34894.cljs$core$IIndexed$_nth$arity$2(null,i__34749_34896);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_34897], 0));


var G__34898 = seq__34746_34893;
var G__34899 = chunk__34747_34894;
var G__34900 = count__34748_34895;
var G__34901 = (i__34749_34896 + (1));
seq__34746_34893 = G__34898;
chunk__34747_34894 = G__34899;
count__34748_34895 = G__34900;
i__34749_34896 = G__34901;
continue;
} else {
var temp__5457__auto___34902 = cljs.core.seq(seq__34746_34893);
if(temp__5457__auto___34902){
var seq__34746_34904__$1 = temp__5457__auto___34902;
if(cljs.core.chunked_seq_QMARK_(seq__34746_34904__$1)){
var c__4461__auto___34905 = cljs.core.chunk_first(seq__34746_34904__$1);
var G__34909 = cljs.core.chunk_rest(seq__34746_34904__$1);
var G__34910 = c__4461__auto___34905;
var G__34911 = cljs.core.count(c__4461__auto___34905);
var G__34912 = (0);
seq__34746_34893 = G__34909;
chunk__34747_34894 = G__34910;
count__34748_34895 = G__34911;
i__34749_34896 = G__34912;
continue;
} else {
var t_34913 = cljs.core.first(seq__34746_34904__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_34913], 0));


var G__34914 = cljs.core.next(seq__34746_34904__$1);
var G__34915 = null;
var G__34916 = (0);
var G__34917 = (0);
seq__34746_34893 = G__34914;
chunk__34747_34894 = G__34915;
count__34748_34895 = G__34916;
i__34749_34896 = G__34917;
continue;
}
} else {
}
}
break;
}

var seq__34750_34920 = cljs.core.seq(cljs.core.vec(census.utils.core.map_over_keys(((function (e_try,vins,temp__5455__auto__,e_gen){
return (function (p1__34740_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__34740_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scopes","scopes",-1571524352)], null));
});})(e_try,vins,temp__5455__auto__,e_gen))
,vins)));
var chunk__34751_34922 = null;
var count__34752_34923 = (0);
var i__34753_34924 = (0);
while(true){
if((i__34753_34924 < count__34752_34923)){
var s_34926 = chunk__34751_34922.cljs$core$IIndexed$_nth$arity$2(null,i__34753_34924);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_34926], 0));


var G__34929 = seq__34750_34920;
var G__34930 = chunk__34751_34922;
var G__34931 = count__34752_34923;
var G__34932 = (i__34753_34924 + (1));
seq__34750_34920 = G__34929;
chunk__34751_34922 = G__34930;
count__34752_34923 = G__34931;
i__34753_34924 = G__34932;
continue;
} else {
var temp__5457__auto___34933 = cljs.core.seq(seq__34750_34920);
if(temp__5457__auto___34933){
var seq__34750_34934__$1 = temp__5457__auto___34933;
if(cljs.core.chunked_seq_QMARK_(seq__34750_34934__$1)){
var c__4461__auto___34935 = cljs.core.chunk_first(seq__34750_34934__$1);
var G__34936 = cljs.core.chunk_rest(seq__34750_34934__$1);
var G__34937 = c__4461__auto___34935;
var G__34938 = cljs.core.count(c__4461__auto___34935);
var G__34939 = (0);
seq__34750_34920 = G__34936;
chunk__34751_34922 = G__34937;
count__34752_34923 = G__34938;
i__34753_34924 = G__34939;
continue;
} else {
var s_34940 = cljs.core.first(seq__34750_34934__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_34940], 0));


var G__34941 = cljs.core.next(seq__34750_34934__$1);
var G__34942 = null;
var G__34943 = (0);
var G__34944 = (0);
seq__34750_34920 = G__34941;
chunk__34751_34922 = G__34942;
count__34752_34923 = G__34943;
i__34753_34924 = G__34944;
continue;
}
} else {
}
}
break;
}

return "";
} else {
var e_NA = "=== available geoHierarchy levels ===";
var seq__34754_34945 = cljs.core.seq(e_gen);
var chunk__34755_34946 = null;
var count__34756_34947 = (0);
var i__34757_34948 = (0);
while(true){
if((i__34757_34948 < count__34756_34947)){
var e_34949 = chunk__34755_34946.cljs$core$IIndexed$_nth$arity$2(null,i__34757_34948);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_34949], 0));


var G__34950 = seq__34754_34945;
var G__34951 = chunk__34755_34946;
var G__34952 = count__34756_34947;
var G__34953 = (i__34757_34948 + (1));
seq__34754_34945 = G__34950;
chunk__34755_34946 = G__34951;
count__34756_34947 = G__34952;
i__34757_34948 = G__34953;
continue;
} else {
var temp__5457__auto___34954 = cljs.core.seq(seq__34754_34945);
if(temp__5457__auto___34954){
var seq__34754_34955__$1 = temp__5457__auto___34954;
if(cljs.core.chunked_seq_QMARK_(seq__34754_34955__$1)){
var c__4461__auto___34956 = cljs.core.chunk_first(seq__34754_34955__$1);
var G__34957 = cljs.core.chunk_rest(seq__34754_34955__$1);
var G__34958 = c__4461__auto___34956;
var G__34959 = cljs.core.count(c__4461__auto___34956);
var G__34960 = (0);
seq__34754_34945 = G__34957;
chunk__34755_34946 = G__34958;
count__34756_34947 = G__34959;
i__34757_34948 = G__34960;
continue;
} else {
var e_34961 = cljs.core.first(seq__34754_34955__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_34961], 0));


var G__34962 = cljs.core.next(seq__34754_34955__$1);
var G__34963 = null;
var G__34964 = (0);
var G__34965 = (0);
seq__34754_34945 = G__34962;
chunk__34755_34946 = G__34963;
count__34756_34947 = G__34964;
i__34757_34948 = G__34965;
continue;
}
} else {
}
}
break;
}

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_NA], 0));

var seq__34758_34966 = cljs.core.seq(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (e_NA,temp__5455__auto__,e_gen){
return (function (p1__34741_SHARP_){
return census.utils.core.keys__GT_strs(cljs.core.name(cljs.core.key(p1__34741_SHARP_)));
});})(e_NA,temp__5455__auto__,e_gen))
,$g$)));
var chunk__34759_34967 = null;
var count__34760_34968 = (0);
var i__34761_34969 = (0);
while(true){
if((i__34761_34969 < count__34760_34968)){
var s_34970 = chunk__34759_34967.cljs$core$IIndexed$_nth$arity$2(null,i__34761_34969);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_34970], 0));


var G__34971 = seq__34758_34966;
var G__34972 = chunk__34759_34967;
var G__34973 = count__34760_34968;
var G__34974 = (i__34761_34969 + (1));
seq__34758_34966 = G__34971;
chunk__34759_34967 = G__34972;
count__34760_34968 = G__34973;
i__34761_34969 = G__34974;
continue;
} else {
var temp__5457__auto___34975 = cljs.core.seq(seq__34758_34966);
if(temp__5457__auto___34975){
var seq__34758_34976__$1 = temp__5457__auto___34975;
if(cljs.core.chunked_seq_QMARK_(seq__34758_34976__$1)){
var c__4461__auto___34977 = cljs.core.chunk_first(seq__34758_34976__$1);
var G__34978 = cljs.core.chunk_rest(seq__34758_34976__$1);
var G__34979 = c__4461__auto___34977;
var G__34980 = cljs.core.count(c__4461__auto___34977);
var G__34981 = (0);
seq__34758_34966 = G__34978;
chunk__34759_34967 = G__34979;
count__34760_34968 = G__34980;
i__34761_34969 = G__34981;
continue;
} else {
var s_34982 = cljs.core.first(seq__34758_34976__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_34982], 0));


var G__34983 = cljs.core.next(seq__34758_34976__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__34758_34966 = G__34983;
chunk__34759_34967 = G__34984;
count__34760_34968 = G__34985;
i__34761_34969 = G__34986;
continue;
}
} else {
}
}
break;
}

return "";
}
});
/**
 * Composes a URL to call raw GeoJSON files hosted on Github
 */
census.geoAPI.core.G_pattern__GT_url = (function census$geoAPI$core$G_pattern__GT_url(var_args){
var G__34763 = arguments.length;
switch (G__34763) {
case 3:
return census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$3 = (function (res,vin,lev){
return census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$4(res,vin,lev,null);
});

census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$4 = (function (res,vin,lev,st){
if((st == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.URL_GEOJSON,res,vin,cljs.core.name(lev)], null))),".json"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.URL_GEOJSON,res,vin,st,cljs.core.name(lev)], null))),".json"].join('');
}
});

census.geoAPI.core.G_pattern__GT_url.cljs$lang$maxFixedArity = 4;

census.geoAPI.core.scope = (function census$geoAPI$core$scope(var_args){
var G__34767 = arguments.length;
switch (G__34767) {
case 5:
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5 = (function ($g$,res,vin,lev,USr){
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$6($g$,res,vin,lev,USr,null);
});

census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$6 = (function ($g$,res,vin,lev,USr,STr){
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$7($g$,res,vin,lev,USr,STr,null);
});

census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$7 = (function ($g$,res,vin,lev,USr,STr,st){
var STr_QMARK_ = (!((cljs.core.some((function (p1__34764_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,p1__34764_SHARP_);
}),STr) == null)));
var USr_QMARK_ = (!((cljs.core.some(((function (STr_QMARK_){
return (function (p1__34765_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,p1__34765_SHARP_);
});})(STr_QMARK_))
,USr) == null)));
var st_QMARK_ = (!((st == null)));
var us_QMARK_ = (st == null);
if(((st_QMARK_) && (STr_QMARK_))){
return census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$4(res,vin,lev,st);
} else {
if(((us_QMARK_) && (USr_QMARK_))){
return census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$3(res,vin,lev);
} else {
if(((((st_QMARK_) && (USr_QMARK_))) && ((!(STr_QMARK_))))){
return census.geoAPI.core.G_pattern__GT_url.cljs$core$IFn$_invoke$arity$3(res,vin,lev);
} else {
return census.geoAPI.core.G_err($g$,res,vin,lev);

}
}
}
});

census.geoAPI.core.scope.cljs$lang$maxFixedArity = 7;

census.geoAPI.core.big_G = (function census$geoAPI$core$big_G(var_args){
var G__34769 = arguments.length;
switch (G__34769) {
case 5:
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$5 = (function ($g$,res,vin,lev,USr){
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$6($g$,res,vin,lev,USr,null);
});

census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$6 = (function ($g$,res,vin,lev,USr,STr){
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$7($g$,res,vin,lev,USr,STr,null);
});

census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$7 = (function ($g$,res,vin,lev,USr,STr,st){
var strs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Warning, you are about to make a large GeoJSON request.","This may take some time -> consider local data caching.","The response may also cause VM heap capacity overflow.","Node heap may be increased via `--max-old-space-size=`","For all ZCTAs: Use `--max-old-space-size=4096"], null);
var seq__34770_34999 = cljs.core.seq(strs);
var chunk__34771_35000 = null;
var count__34772_35001 = (0);
var i__34773_35002 = (0);
while(true){
if((i__34773_35002 < count__34772_35001)){
var s_35003 = chunk__34771_35000.cljs$core$IIndexed$_nth$arity$2(null,i__34773_35002);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_35003], 0));


var G__35004 = seq__34770_34999;
var G__35005 = chunk__34771_35000;
var G__35006 = count__34772_35001;
var G__35007 = (i__34773_35002 + (1));
seq__34770_34999 = G__35004;
chunk__34771_35000 = G__35005;
count__34772_35001 = G__35006;
i__34773_35002 = G__35007;
continue;
} else {
var temp__5457__auto___35008 = cljs.core.seq(seq__34770_34999);
if(temp__5457__auto___35008){
var seq__34770_35009__$1 = temp__5457__auto___35008;
if(cljs.core.chunked_seq_QMARK_(seq__34770_35009__$1)){
var c__4461__auto___35012 = cljs.core.chunk_first(seq__34770_35009__$1);
var G__35013 = cljs.core.chunk_rest(seq__34770_35009__$1);
var G__35014 = c__4461__auto___35012;
var G__35015 = cljs.core.count(c__4461__auto___35012);
var G__35016 = (0);
seq__34770_34999 = G__35013;
chunk__34771_35000 = G__35014;
count__34772_35001 = G__35015;
i__34773_35002 = G__35016;
continue;
} else {
var s_35017 = cljs.core.first(seq__34770_35009__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_35017], 0));


var G__35018 = cljs.core.next(seq__34770_35009__$1);
var G__35019 = null;
var G__35020 = (0);
var G__35021 = (0);
seq__34770_34999 = G__35018;
chunk__34771_35000 = G__35019;
count__34772_35001 = G__35020;
i__34773_35002 = G__35021;
continue;
}
} else {
}
}
break;
}

return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$7($g$,res,vin,lev,USr,STr,st);
});

census.geoAPI.core.big_G.cljs$lang$maxFixedArity = 7;

/**
 * 
 *   Takes a pattern of maps and triggers the URL builder accordingly
 *   
 * @param {...*} var_args
 */
census.geoAPI.core.G_patterner = (function() { 
var census$geoAPI$core$G_patterner__delegate = function (args__21996__auto__){
var ocr_34775 = cljs.core.vec(args__21996__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_34775)) && ((cljs.core.count(ocr_34775) === 2)))){
try{var ocr_34775_1__34796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(1));
if(((cljs.core.vector_QMARK_(ocr_34775_1__34796)) && ((cljs.core.count(ocr_34775_1__34796) === 5)))){
try{var ocr_34775_1__34796_3__34800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(3));
if(((cljs.core.vector_QMARK_(ocr_34775_1__34796_3__34800)) && ((cljs.core.count(ocr_34775_1__34796_3__34800) === 2)))){
try{var ocr_34775_1__34796_3__34800_0__34802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_34775_1__34796_3__34800_0__34802,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557))){
try{var ocr_34775_1__34796_0__34797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
if((ocr_34775_1__34796_0__34797 === "500k")){
try{var ocr_34775_1__34796_4__34801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(4));
if((((!((ocr_34775_1__34796_4__34801 == null))))?(((((ocr_34775_1__34796_4__34801.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_34775_1__34796_4__34801.cljs$core$ILookup$))))?true:(((!ocr_34775_1__34796_4__34801.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_34775_1__34796_4__34801):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_34775_1__34796_4__34801))){
try{var ocr_34775_1__34796_4__34801_st__34808 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_34775_1__34796_4__34801_st__34808 === null)){
try{var ocr_34775_1__34796_4__34801_us__34807 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_us__34807,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$5($g$,"500k",vin,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557),USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34848){if((e34848 instanceof Error)){
var e__21043__auto__ = e34848;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e34848;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34847){if((e34847 instanceof Error)){
var e__21043__auto__ = e34847;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e34847;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34845){if((e34845 instanceof Error)){
var e__21043__auto__ = e34845;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e34845;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34842){if((e34842 instanceof Error)){
var e__21043__auto__ = e34842;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_0__34797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
if(cljs.core.truth_((function (){var fexpr__34844 = ((function (ocr_34775_1__34796_0__34797,e__21043__auto__,ocr_34775_1__34796_3__34800_0__34802,ocr_34775_1__34796_3__34800,ocr_34775_1__34796,ocr_34775){
return (function (p1__34774_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("500k",p1__34774_SHARP_)));
});})(ocr_34775_1__34796_0__34797,e__21043__auto__,ocr_34775_1__34796_3__34800_0__34802,ocr_34775_1__34796_3__34800,ocr_34775_1__34796,ocr_34775))
;
return fexpr__34844(ocr_34775_1__34796_0__34797);
})())){
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.G_err($g$,res,vin,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557));
} else {
throw cljs.core.match.backtrack;

}
}catch (e34843){if((e34843 instanceof Error)){
var e__21043__auto____$1 = e34843;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e34843;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e34842;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34822){if((e34822 instanceof Error)){
var e__21043__auto__ = e34822;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_4__34801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(4));
if((ocr_34775_1__34796_4__34801 === null)){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34823){if((e34823 instanceof Error)){
var e__21043__auto____$1 = e34823;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_4__34801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(4));
if((((!((ocr_34775_1__34796_4__34801 == null))))?(((((ocr_34775_1__34796_4__34801.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_34775_1__34796_4__34801.cljs$core$ILookup$))))?true:(((!ocr_34775_1__34796_4__34801.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_34775_1__34796_4__34801):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_34775_1__34796_4__34801))){
try{var ocr_34775_1__34796_2__34799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(2));
if((ocr_34775_1__34796_2__34799 === null)){
try{var ocr_34775_1__34796_4__34801_us__34812 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_34775_1__34796_4__34801_us__34812 === null)){
try{var ocr_34775_1__34796_4__34801_st__34813 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_st__34813,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34841){if((e34841 instanceof Error)){
var e__21043__auto____$2 = e34841;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e34841;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34840){if((e34840 instanceof Error)){
var e__21043__auto____$2 = e34840;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e34840;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34826){if((e34826 instanceof Error)){
var e__21043__auto____$2 = e34826;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_2__34799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(2));
if((ocr_34775_1__34796_2__34799 === "*")){
try{var ocr_34775_1__34796_4__34801_us__34812 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_34775_1__34796_4__34801_us__34812 === null)){
try{var ocr_34775_1__34796_4__34801_st__34813 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_st__34813,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34839){if((e34839 instanceof Error)){
var e__21043__auto____$3 = e34839;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e34839;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34838){if((e34838 instanceof Error)){
var e__21043__auto____$3 = e34838;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e34838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34827){if((e34827 instanceof Error)){
var e__21043__auto____$3 = e34827;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_2__34799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(2));
if((ocr_34775_1__34796_2__34799 === null)){
try{var ocr_34775_1__34796_4__34801_us__34812 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_us__34812,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_34775_1__34796_4__34801_st__34813 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_st__34813,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34837){if((e34837 instanceof Error)){
var e__21043__auto____$4 = e34837;
if((e__21043__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$4;
}
} else {
throw e34837;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34836){if((e34836 instanceof Error)){
var e__21043__auto____$4 = e34836;
if((e__21043__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$4;
}
} else {
throw e34836;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34828){if((e34828 instanceof Error)){
var e__21043__auto____$4 = e34828;
if((e__21043__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_2__34799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(2));
if((ocr_34775_1__34796_2__34799 === "*")){
try{var ocr_34775_1__34796_4__34801_us__34812 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_us__34812,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_34775_1__34796_4__34801_st__34813 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_st__34813,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34835){if((e34835 instanceof Error)){
var e__21043__auto____$5 = e34835;
if((e__21043__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$5;
}
} else {
throw e34835;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34834){if((e34834 instanceof Error)){
var e__21043__auto____$5 = e34834;
if((e__21043__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$5;
}
} else {
throw e34834;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34829){if((e34829 instanceof Error)){
var e__21043__auto____$5 = e34829;
if((e__21043__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_4__34801_st__34813 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_34775_1__34796_4__34801_st__34813 === null)){
try{var ocr_34775_1__34796_4__34801_us__34812 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_us__34812,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34833){if((e34833 instanceof Error)){
var e__21043__auto____$6 = e34833;
if((e__21043__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$6;
}
} else {
throw e34833;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34830){if((e34830 instanceof Error)){
var e__21043__auto____$6 = e34830;
if((e__21043__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_34775_1__34796_4__34801_st__34813 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_st__34813,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_34775_1__34796_4__34801_us__34812 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801_us__34812,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"us","us",746429226));
var STr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_4__34801,new cljs.core.Keyword(null,"st","st",1455255828));
var st = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(2));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796_3__34800,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_1__34796,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$7($g$,res,vin,lev,USr,STr,st);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34832){if((e34832 instanceof Error)){
var e__21043__auto____$7 = e34832;
if((e__21043__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$7;
}
} else {
throw e34832;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34831){if((e34831 instanceof Error)){
var e__21043__auto____$7 = e34831;
if((e__21043__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$7;
}
} else {
throw e34831;

}
}} else {
throw e__21043__auto____$6;
}
} else {
throw e34830;

}
}} else {
throw e__21043__auto____$5;
}
} else {
throw e34829;

}
}} else {
throw e__21043__auto____$4;
}
} else {
throw e34828;

}
}} else {
throw e__21043__auto____$3;
}
} else {
throw e34827;

}
}} else {
throw e__21043__auto____$2;
}
} else {
throw e34826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34824){if((e34824 instanceof Error)){
var e__21043__auto____$2 = e34824;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e34824;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e34823;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e34822;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34821){if((e34821 instanceof Error)){
var e__21043__auto__ = e34821;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e34821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34820){if((e34820 instanceof Error)){
var e__21043__auto__ = e34820;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e34820;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34817){if((e34817 instanceof Error)){
var e__21043__auto__ = e34817;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_34775)) && ((cljs.core.count(ocr_34775) >= (1))))){
try{var ocr_34775_left__34814 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_34775,(0),(1));
if(((cljs.core.vector_QMARK_(ocr_34775_left__34814)) && ((cljs.core.count(ocr_34775_left__34814) === (1))))){
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34775_left__34814,(0));
var anthing_else = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_34775,(1));
return "";
} else {
throw cljs.core.match.backtrack;

}
}catch (e34819){if((e34819 instanceof Error)){
var e__21043__auto____$1 = e34819;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e34819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34818){if((e34818 instanceof Error)){
var e__21043__auto____$1 = e34818;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_34775)].join('')));
} else {
throw e__21043__auto____$1;
}
} else {
throw e34818;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e34817;

}
}};
var census$geoAPI$core$G_patterner = function (var_args){
var args__21996__auto__ = null;
if (arguments.length > 0) {
var G__35036__i = 0, G__35036__a = new Array(arguments.length -  0);
while (G__35036__i < G__35036__a.length) {G__35036__a[G__35036__i] = arguments[G__35036__i + 0]; ++G__35036__i;}
  args__21996__auto__ = new cljs.core.IndexedSeq(G__35036__a,0,null);
} 
return census$geoAPI$core$G_patterner__delegate.call(this,args__21996__auto__);};
census$geoAPI$core$G_patterner.cljs$lang$maxFixedArity = 0;
census$geoAPI$core$G_patterner.cljs$lang$applyTo = (function (arglist__35037){
var args__21996__auto__ = cljs.core.seq(arglist__35037);
return census$geoAPI$core$G_patterner__delegate(args__21996__auto__);
});
census$geoAPI$core$G_patterner.cljs$core$IFn$_invoke$arity$variadic = census$geoAPI$core$G_patterner__delegate;
return census$geoAPI$core$G_patterner;
})()
;
census.geoAPI.core.G_pattern_cfg = (function census$geoAPI$core$G_pattern_cfg($g$,p__34849){
var map__34850 = p__34849;
var map__34850__$1 = (((((!((map__34850 == null))))?(((((map__34850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34850):map__34850);
var map__34851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34850__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var map__34851__$1 = (((((!((map__34851 == null))))?(((((map__34851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34851):map__34851);
var geoHierarchy = map__34851__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34851__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34850__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var geoResolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34850__$1,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050));
var level = cljs.core.last(geoHierarchy);
var geoScopes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key(level),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(vintage),new cljs.core.Keyword(null,"scopes","scopes",-1571524352)], null));
var pattern = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [geoResolution,vintage,state,level,geoScopes], null);
return pattern;
});
census.geoAPI.core.C_G_pattern__GT_url = (function census$geoAPI$core$C_G_pattern__GT_url($g$,args){
return census.geoAPI.core.G_patterner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$g$,census.geoAPI.core.G_pattern_cfg($g$,args)], 0));
});
census.geoAPI.core.$GET$_C_GeoJSON = census.utils.core.$GET$(new cljs.core.Keyword(null,"raw","raw",1604651272),"Unsuccessful Census GeoJSON request");
/**
 * 
 *   Internal function for calling Github cartography 'API' for GeoJSON
 *   
 */
census.geoAPI.core.IOE_C_GeoJSON = (function census$geoAPI$core$IOE_C_GeoJSON($g$){
return (function (_EQ_I_EQ_,_EQ_O_EQ_,_EQ_E_EQ_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_I_EQ_,(function (args){
var url = census.geoAPI.core.C_G_pattern__GT_url($g$,args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",url)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_E_EQ_,"Invalid GeoJSON request. Please check arguments against requirements.");
} else {
var G__34854 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var G__34855 = _EQ_O_EQ_;
var G__34856 = _EQ_E_EQ_;
return (census.geoAPI.core.$GET$_C_GeoJSON.cljs$core$IFn$_invoke$arity$3 ? census.geoAPI.core.$GET$_C_GeoJSON.cljs$core$IFn$_invoke$arity$3(G__34854,G__34855,G__34856) : census.geoAPI.core.$GET$_C_GeoJSON.call(null,G__34854,G__34855,G__34856));
}
}));
});
});
census.geoAPI.core.$GET$_GeoKeyMap = census.utils.core.$GET$(new cljs.core.Keyword(null,"edn","edn",1317840885),"Unsuccessful fetch for configuration.");
/**
 * 
 *  Library function, which takes a JSON object as input, constructs a call to get
 *  Github raw file and returns GeoJSON.
 *  
 */
census.geoAPI.core.getCensusGeoJSON = (function census$geoAPI$core$getCensusGeoJSON(I,cb){
var args = census.utils.core.__GT_args(I);
var _EQ_O_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js),cljs.core.map.cljs$core$IFn$_invoke$arity$1(JSON.stringify)));
var _EQ_E_EQ_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err));
var _EQ_GKM_EQ_ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var G__34857_35038 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.URL_GEOKEYMAP], null));
var G__34858_35039 = _EQ_GKM_EQ_;
var G__34859_35040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err));
var G__34860_35041 = new cljs.core.Keyword(null,"silent","silent",-1142977785);
(census.geoAPI.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4 ? census.geoAPI.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4(G__34857_35038,G__34858_35039,G__34859_35040,G__34860_35041) : census.geoAPI.core.$GET$_GeoKeyMap.call(null,G__34857_35038,G__34858_35039,G__34859_35040,G__34860_35041));

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_GKM_EQ_,((function (args,_EQ_O_EQ_,_EQ_E_EQ_,_EQ_GKM_EQ_){
return (function ($g$){
return census.utils.core._EQ_O_QMARK__GT__cb(census.geoAPI.core.IOE_C_GeoJSON($g$),cb,cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null)),_EQ_O_EQ_,_EQ_E_EQ_);
});})(args,_EQ_O_EQ_,_EQ_E_EQ_,_EQ_GKM_EQ_))
);
});
/**
 * 
 *   Takes the request argument and pulls out a vector of the component identifiers
 *   from the geoKeyMap, which is used to construct the UID for the GeoJSON. Used
 *   in deep-merging with statistics.
 *   
 */
census.geoAPI.core.GEOIDS_LT__$g$_PLUS_args = (function census$geoAPI$core$GEOIDS_LT__$g$_PLUS_args($g$,p__34863){
var map__34864 = p__34863;
var map__34864__$1 = (((((!((map__34864 == null))))?(((((map__34864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34864):map__34864);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34864__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34864__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var vec__34866 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key(cljs.core.last(geoHierarchy)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(vintage),new cljs.core.Keyword(null,"id<-json","id<-json",-1249818926)], null));
var seq__34867 = cljs.core.seq(vec__34866);
var GEOIDS = seq__34867;
return GEOIDS;
});
/**
 * 
 *   Takes the component GEOIDS from with the GeoJSON and a single feature to
 *   generate a :GEOID if not available within the GeoJSON.
 *   
 */
census.geoAPI.core.xf_mergeable_features = (function census$geoAPI$core$xf_mergeable_features($g$,args){
var GEOIDS = census.geoAPI.core.GEOIDS_LT__$g$_PLUS_args($g$,args);
return census.utils.core.xf_LT__LT_(((function (GEOIDS){
return (function (rf,acc,this$){
var G__34869 = acc;
var G__34870 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(this$),GEOIDS)),this$]);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__34869,G__34870) : rf.call(null,G__34869,G__34870));
});})(GEOIDS))
);
});
/**
 * 
 *   Transducer, which reshapes a GeoJSON 'FeatureCollection' into a shape that's
 *   mergable with other data. Shape = [{'GEOID' {:properties & kvs {& kvs }}}}]
 *   
 */
census.geoAPI.core.xf_mergeable_LT__GeoCLJS = (function census$geoAPI$core$xf_mergeable_LT__GeoCLJS($g$,args){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__34871_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__34871_SHARP_,new cljs.core.Keyword(null,"features","features",-1146962336));
})),census.utils.core.educt_LT__LT_(census.geoAPI.core.xf_mergeable_features($g$,args)));
});
census.geoAPI.core.$GET$_C_GeoCLJ = census.utils.core.$GET$(new cljs.core.Keyword(null,"json","json",1279968570),"Unsuccessful Census GeoJSON (for merge) request");
/**
 * 
 *   Internal function for calling Github cartography 'API' for GeoJSON
 *   
 */
census.geoAPI.core._EQ_cfg_EQ_C_GeoCLJ = (function census$geoAPI$core$_EQ_cfg_EQ_C_GeoCLJ($g$){
return (function (_EQ_args_EQ_,_EQ_cfg_EQ_){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_args_EQ_,(function (args){
var url = census.geoAPI.core.C_G_pattern__GT_url($g$,args);
var xform = census.geoAPI.core.xf_mergeable_LT__GeoCLJS($g$,args);
var g_key = cljs.core.first(census.geoAPI.core.GEOIDS_LT__$g$_PLUS_args($g$,args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",url)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_cfg_EQ_,"Invalid GeoJSON request. Please check arguments against requirements.");
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(_EQ_cfg_EQ_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"xform","xform",-1725711008),xform,new cljs.core.Keyword(null,"getter","getter",84844855),census.geoAPI.core.$GET$_C_GeoCLJ,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199),g_key], null));
}
}));
});
});
census.geoAPI.core.cfg_GT_cfg_EQ_C_GeoCLJ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.geoAPI.core._EQ_cfg_EQ_C_GeoCLJ,true], null);

//# sourceMappingURL=census.geoAPI.core.js.map
