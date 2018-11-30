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
var seq__17436_17969 = cljs.core.seq(e_gen);
var chunk__17437_17970 = null;
var count__17438_17971 = (0);
var i__17439_17972 = (0);
while(true){
if((i__17439_17972 < count__17438_17971)){
var e_17973 = chunk__17437_17970.cljs$core$IIndexed$_nth$arity$2(null,i__17439_17972);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_17973], 0));


var G__17974 = seq__17436_17969;
var G__17975 = chunk__17437_17970;
var G__17976 = count__17438_17971;
var G__17977 = (i__17439_17972 + (1));
seq__17436_17969 = G__17974;
chunk__17437_17970 = G__17975;
count__17438_17971 = G__17976;
i__17439_17972 = G__17977;
continue;
} else {
var temp__5457__auto___17978 = cljs.core.seq(seq__17436_17969);
if(temp__5457__auto___17978){
var seq__17436_17979__$1 = temp__5457__auto___17978;
if(cljs.core.chunked_seq_QMARK_(seq__17436_17979__$1)){
var c__4461__auto___17980 = cljs.core.chunk_first(seq__17436_17979__$1);
var G__17981 = cljs.core.chunk_rest(seq__17436_17979__$1);
var G__17982 = c__4461__auto___17980;
var G__17983 = cljs.core.count(c__4461__auto___17980);
var G__17984 = (0);
seq__17436_17969 = G__17981;
chunk__17437_17970 = G__17982;
count__17438_17971 = G__17983;
i__17439_17972 = G__17984;
continue;
} else {
var e_17985 = cljs.core.first(seq__17436_17979__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_17985], 0));


var G__17986 = cljs.core.next(seq__17436_17979__$1);
var G__17987 = null;
var G__17988 = (0);
var G__17989 = (0);
seq__17436_17969 = G__17986;
chunk__17437_17970 = G__17987;
count__17438_17971 = G__17988;
i__17439_17972 = G__17989;
continue;
}
} else {
}
}
break;
}

var seq__17441_17990 = cljs.core.seq(e_try);
var chunk__17442_17991 = null;
var count__17443_17992 = (0);
var i__17444_17993 = (0);
while(true){
if((i__17444_17993 < count__17443_17992)){
var t_17995 = chunk__17442_17991.cljs$core$IIndexed$_nth$arity$2(null,i__17444_17993);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_17995], 0));


var G__17996 = seq__17441_17990;
var G__17997 = chunk__17442_17991;
var G__17998 = count__17443_17992;
var G__17999 = (i__17444_17993 + (1));
seq__17441_17990 = G__17996;
chunk__17442_17991 = G__17997;
count__17443_17992 = G__17998;
i__17444_17993 = G__17999;
continue;
} else {
var temp__5457__auto___18001 = cljs.core.seq(seq__17441_17990);
if(temp__5457__auto___18001){
var seq__17441_18002__$1 = temp__5457__auto___18001;
if(cljs.core.chunked_seq_QMARK_(seq__17441_18002__$1)){
var c__4461__auto___18003 = cljs.core.chunk_first(seq__17441_18002__$1);
var G__18004 = cljs.core.chunk_rest(seq__17441_18002__$1);
var G__18005 = c__4461__auto___18003;
var G__18006 = cljs.core.count(c__4461__auto___18003);
var G__18007 = (0);
seq__17441_17990 = G__18004;
chunk__17442_17991 = G__18005;
count__17443_17992 = G__18006;
i__17444_17993 = G__18007;
continue;
} else {
var t_18009 = cljs.core.first(seq__17441_18002__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_18009], 0));


var G__18010 = cljs.core.next(seq__17441_18002__$1);
var G__18011 = null;
var G__18012 = (0);
var G__18013 = (0);
seq__17441_17990 = G__18010;
chunk__17442_17991 = G__18011;
count__17443_17992 = G__18012;
i__17444_17993 = G__18013;
continue;
}
} else {
}
}
break;
}

var seq__17446_18015 = cljs.core.seq(cljs.core.vec(census.utils.core.map_over_keys(((function (e_try,vins,temp__5455__auto__,e_gen){
return (function (p1__17434_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__17434_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scopes","scopes",-1571524352)], null));
});})(e_try,vins,temp__5455__auto__,e_gen))
,vins)));
var chunk__17447_18016 = null;
var count__17448_18017 = (0);
var i__17449_18018 = (0);
while(true){
if((i__17449_18018 < count__17448_18017)){
var s_18020 = chunk__17447_18016.cljs$core$IIndexed$_nth$arity$2(null,i__17449_18018);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18020], 0));


var G__18022 = seq__17446_18015;
var G__18023 = chunk__17447_18016;
var G__18024 = count__17448_18017;
var G__18025 = (i__17449_18018 + (1));
seq__17446_18015 = G__18022;
chunk__17447_18016 = G__18023;
count__17448_18017 = G__18024;
i__17449_18018 = G__18025;
continue;
} else {
var temp__5457__auto___18027 = cljs.core.seq(seq__17446_18015);
if(temp__5457__auto___18027){
var seq__17446_18028__$1 = temp__5457__auto___18027;
if(cljs.core.chunked_seq_QMARK_(seq__17446_18028__$1)){
var c__4461__auto___18029 = cljs.core.chunk_first(seq__17446_18028__$1);
var G__18031 = cljs.core.chunk_rest(seq__17446_18028__$1);
var G__18032 = c__4461__auto___18029;
var G__18033 = cljs.core.count(c__4461__auto___18029);
var G__18034 = (0);
seq__17446_18015 = G__18031;
chunk__17447_18016 = G__18032;
count__17448_18017 = G__18033;
i__17449_18018 = G__18034;
continue;
} else {
var s_18035 = cljs.core.first(seq__17446_18028__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18035], 0));


var G__18036 = cljs.core.next(seq__17446_18028__$1);
var G__18037 = null;
var G__18038 = (0);
var G__18039 = (0);
seq__17446_18015 = G__18036;
chunk__17447_18016 = G__18037;
count__17448_18017 = G__18038;
i__17449_18018 = G__18039;
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
var seq__17462_18042 = cljs.core.seq(e_gen);
var chunk__17463_18043 = null;
var count__17464_18044 = (0);
var i__17465_18045 = (0);
while(true){
if((i__17465_18045 < count__17464_18044)){
var e_18047 = chunk__17463_18043.cljs$core$IIndexed$_nth$arity$2(null,i__17465_18045);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_18047], 0));


var G__18048 = seq__17462_18042;
var G__18049 = chunk__17463_18043;
var G__18050 = count__17464_18044;
var G__18051 = (i__17465_18045 + (1));
seq__17462_18042 = G__18048;
chunk__17463_18043 = G__18049;
count__17464_18044 = G__18050;
i__17465_18045 = G__18051;
continue;
} else {
var temp__5457__auto___18052 = cljs.core.seq(seq__17462_18042);
if(temp__5457__auto___18052){
var seq__17462_18054__$1 = temp__5457__auto___18052;
if(cljs.core.chunked_seq_QMARK_(seq__17462_18054__$1)){
var c__4461__auto___18056 = cljs.core.chunk_first(seq__17462_18054__$1);
var G__18057 = cljs.core.chunk_rest(seq__17462_18054__$1);
var G__18058 = c__4461__auto___18056;
var G__18059 = cljs.core.count(c__4461__auto___18056);
var G__18060 = (0);
seq__17462_18042 = G__18057;
chunk__17463_18043 = G__18058;
count__17464_18044 = G__18059;
i__17465_18045 = G__18060;
continue;
} else {
var e_18062 = cljs.core.first(seq__17462_18054__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_18062], 0));


var G__18063 = cljs.core.next(seq__17462_18054__$1);
var G__18064 = null;
var G__18065 = (0);
var G__18066 = (0);
seq__17462_18042 = G__18063;
chunk__17463_18043 = G__18064;
count__17464_18044 = G__18065;
i__17465_18045 = G__18066;
continue;
}
} else {
}
}
break;
}

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_NA], 0));

var seq__17467_18067 = cljs.core.seq(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (e_NA,temp__5455__auto__,e_gen){
return (function (p1__17435_SHARP_){
return census.utils.core.keys__GT_strs(cljs.core.name(cljs.core.key(p1__17435_SHARP_)));
});})(e_NA,temp__5455__auto__,e_gen))
,$g$)));
var chunk__17468_18068 = null;
var count__17469_18069 = (0);
var i__17470_18070 = (0);
while(true){
if((i__17470_18070 < count__17469_18069)){
var s_18071 = chunk__17468_18068.cljs$core$IIndexed$_nth$arity$2(null,i__17470_18070);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18071], 0));


var G__18073 = seq__17467_18067;
var G__18074 = chunk__17468_18068;
var G__18075 = count__17469_18069;
var G__18076 = (i__17470_18070 + (1));
seq__17467_18067 = G__18073;
chunk__17468_18068 = G__18074;
count__17469_18069 = G__18075;
i__17470_18070 = G__18076;
continue;
} else {
var temp__5457__auto___18077 = cljs.core.seq(seq__17467_18067);
if(temp__5457__auto___18077){
var seq__17467_18078__$1 = temp__5457__auto___18077;
if(cljs.core.chunked_seq_QMARK_(seq__17467_18078__$1)){
var c__4461__auto___18080 = cljs.core.chunk_first(seq__17467_18078__$1);
var G__18081 = cljs.core.chunk_rest(seq__17467_18078__$1);
var G__18082 = c__4461__auto___18080;
var G__18083 = cljs.core.count(c__4461__auto___18080);
var G__18084 = (0);
seq__17467_18067 = G__18081;
chunk__17468_18068 = G__18082;
count__17469_18069 = G__18083;
i__17470_18070 = G__18084;
continue;
} else {
var s_18085 = cljs.core.first(seq__17467_18078__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18085], 0));


var G__18086 = cljs.core.next(seq__17467_18078__$1);
var G__18087 = null;
var G__18088 = (0);
var G__18089 = (0);
seq__17467_18067 = G__18086;
chunk__17468_18068 = G__18087;
count__17469_18069 = G__18088;
i__17470_18070 = G__18089;
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
var G__17484 = arguments.length;
switch (G__17484) {
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
var G__17491 = arguments.length;
switch (G__17491) {
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
var STr_QMARK_ = (!((cljs.core.some((function (p1__17487_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,p1__17487_SHARP_);
}),STr) == null)));
var USr_QMARK_ = (!((cljs.core.some(((function (STr_QMARK_){
return (function (p1__17488_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,p1__17488_SHARP_);
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
var G__17501 = arguments.length;
switch (G__17501) {
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
var seq__17506_18101 = cljs.core.seq(strs);
var chunk__17508_18102 = null;
var count__17509_18103 = (0);
var i__17510_18104 = (0);
while(true){
if((i__17510_18104 < count__17509_18103)){
var s_18105 = chunk__17508_18102.cljs$core$IIndexed$_nth$arity$2(null,i__17510_18104);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18105], 0));


var G__18106 = seq__17506_18101;
var G__18107 = chunk__17508_18102;
var G__18108 = count__17509_18103;
var G__18109 = (i__17510_18104 + (1));
seq__17506_18101 = G__18106;
chunk__17508_18102 = G__18107;
count__17509_18103 = G__18108;
i__17510_18104 = G__18109;
continue;
} else {
var temp__5457__auto___18110 = cljs.core.seq(seq__17506_18101);
if(temp__5457__auto___18110){
var seq__17506_18111__$1 = temp__5457__auto___18110;
if(cljs.core.chunked_seq_QMARK_(seq__17506_18111__$1)){
var c__4461__auto___18112 = cljs.core.chunk_first(seq__17506_18111__$1);
var G__18113 = cljs.core.chunk_rest(seq__17506_18111__$1);
var G__18114 = c__4461__auto___18112;
var G__18115 = cljs.core.count(c__4461__auto___18112);
var G__18116 = (0);
seq__17506_18101 = G__18113;
chunk__17508_18102 = G__18114;
count__17509_18103 = G__18115;
i__17510_18104 = G__18116;
continue;
} else {
var s_18117 = cljs.core.first(seq__17506_18111__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18117], 0));


var G__18118 = cljs.core.next(seq__17506_18111__$1);
var G__18119 = null;
var G__18120 = (0);
var G__18121 = (0);
seq__17506_18101 = G__18118;
chunk__17508_18102 = G__18119;
count__17509_18103 = G__18120;
i__17510_18104 = G__18121;
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
var census$geoAPI$core$G_patterner__delegate = function (args__7638__auto__){
var ocr_17540 = cljs.core.vec(args__7638__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_17540)) && ((cljs.core.count(ocr_17540) === 2)))){
try{var ocr_17540_1__17730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(1));
if(((cljs.core.vector_QMARK_(ocr_17540_1__17730)) && ((cljs.core.count(ocr_17540_1__17730) === 5)))){
try{var ocr_17540_1__17730_3__17739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(3));
if(((cljs.core.vector_QMARK_(ocr_17540_1__17730_3__17739)) && ((cljs.core.count(ocr_17540_1__17730_3__17739) === 2)))){
try{var ocr_17540_1__17730_3__17739_0__17742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_17540_1__17730_3__17739_0__17742,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557))){
try{var ocr_17540_1__17730_0__17736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
if((ocr_17540_1__17730_0__17736 === "500k")){
try{var ocr_17540_1__17730_4__17740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(4));
if((((!((ocr_17540_1__17730_4__17740 == null))))?(((((ocr_17540_1__17730_4__17740.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_17540_1__17730_4__17740.cljs$core$ILookup$))))?true:(((!ocr_17540_1__17730_4__17740.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_17540_1__17730_4__17740):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_17540_1__17730_4__17740))){
try{var ocr_17540_1__17730_4__17740_st__17756 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_17540_1__17730_4__17740_st__17756 === null)){
try{var ocr_17540_1__17730_4__17740_us__17755 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_us__17755,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$5($g$,"500k",vin,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557),USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17878){if((e17878 instanceof Error)){
var e__5452__auto__ = e17878;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e17878;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17877){if((e17877 instanceof Error)){
var e__5452__auto__ = e17877;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e17877;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17875){if((e17875 instanceof Error)){
var e__5452__auto__ = e17875;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e17875;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17872){if((e17872 instanceof Error)){
var e__5452__auto__ = e17872;
if((e__5452__auto__ === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_0__17736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
if(cljs.core.truth_((function (){var fexpr__17874 = ((function (ocr_17540_1__17730_0__17736,e__5452__auto__,ocr_17540_1__17730_3__17739_0__17742,ocr_17540_1__17730_3__17739,ocr_17540_1__17730,ocr_17540){
return (function (p1__17514_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("500k",p1__17514_SHARP_)));
});})(ocr_17540_1__17730_0__17736,e__5452__auto__,ocr_17540_1__17730_3__17739_0__17742,ocr_17540_1__17730_3__17739,ocr_17540_1__17730,ocr_17540))
;
return fexpr__17874(ocr_17540_1__17730_0__17736);
})())){
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.G_err($g$,res,vin,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557));
} else {
throw cljs.core.match.backtrack;

}
}catch (e17873){if((e17873 instanceof Error)){
var e__5452__auto____$1 = e17873;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$1;
}
} else {
throw e17873;

}
}} else {
throw e__5452__auto__;
}
} else {
throw e17872;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17852){if((e17852 instanceof Error)){
var e__5452__auto__ = e17852;
if((e__5452__auto__ === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_4__17740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(4));
if((ocr_17540_1__17730_4__17740 === null)){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17853){if((e17853 instanceof Error)){
var e__5452__auto____$1 = e17853;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_4__17740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(4));
if((((!((ocr_17540_1__17730_4__17740 == null))))?(((((ocr_17540_1__17730_4__17740.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_17540_1__17730_4__17740.cljs$core$ILookup$))))?true:(((!ocr_17540_1__17730_4__17740.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_17540_1__17730_4__17740):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_17540_1__17730_4__17740))){
try{var ocr_17540_1__17730_2__17738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(2));
if((ocr_17540_1__17730_2__17738 === null)){
try{var ocr_17540_1__17730_4__17740_us__17772 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_17540_1__17730_4__17740_us__17772 === null)){
try{var ocr_17540_1__17730_4__17740_st__17773 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_st__17773,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17871){if((e17871 instanceof Error)){
var e__5452__auto____$2 = e17871;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e17871;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17870){if((e17870 instanceof Error)){
var e__5452__auto____$2 = e17870;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e17870;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17856){if((e17856 instanceof Error)){
var e__5452__auto____$2 = e17856;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_2__17738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(2));
if((ocr_17540_1__17730_2__17738 === "*")){
try{var ocr_17540_1__17730_4__17740_us__17772 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_17540_1__17730_4__17740_us__17772 === null)){
try{var ocr_17540_1__17730_4__17740_st__17773 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_st__17773,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17869){if((e17869 instanceof Error)){
var e__5452__auto____$3 = e17869;
if((e__5452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$3;
}
} else {
throw e17869;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17868){if((e17868 instanceof Error)){
var e__5452__auto____$3 = e17868;
if((e__5452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$3;
}
} else {
throw e17868;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17857){if((e17857 instanceof Error)){
var e__5452__auto____$3 = e17857;
if((e__5452__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_2__17738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(2));
if((ocr_17540_1__17730_2__17738 === null)){
try{var ocr_17540_1__17730_4__17740_us__17772 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_us__17772,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_17540_1__17730_4__17740_st__17773 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_st__17773,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17867){if((e17867 instanceof Error)){
var e__5452__auto____$4 = e17867;
if((e__5452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$4;
}
} else {
throw e17867;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17866){if((e17866 instanceof Error)){
var e__5452__auto____$4 = e17866;
if((e__5452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$4;
}
} else {
throw e17866;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17858){if((e17858 instanceof Error)){
var e__5452__auto____$4 = e17858;
if((e__5452__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_2__17738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(2));
if((ocr_17540_1__17730_2__17738 === "*")){
try{var ocr_17540_1__17730_4__17740_us__17772 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_us__17772,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_17540_1__17730_4__17740_st__17773 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_st__17773,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17865){if((e17865 instanceof Error)){
var e__5452__auto____$5 = e17865;
if((e__5452__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$5;
}
} else {
throw e17865;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17864){if((e17864 instanceof Error)){
var e__5452__auto____$5 = e17864;
if((e__5452__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$5;
}
} else {
throw e17864;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17859){if((e17859 instanceof Error)){
var e__5452__auto____$5 = e17859;
if((e__5452__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_4__17740_st__17773 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_17540_1__17730_4__17740_st__17773 === null)){
try{var ocr_17540_1__17730_4__17740_us__17772 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_us__17772,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17863){if((e17863 instanceof Error)){
var e__5452__auto____$6 = e17863;
if((e__5452__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$6;
}
} else {
throw e17863;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17860){if((e17860 instanceof Error)){
var e__5452__auto____$6 = e17860;
if((e__5452__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_17540_1__17730_4__17740_st__17773 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_st__17773,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_17540_1__17730_4__17740_us__17772 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740_us__17772,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"us","us",746429226));
var STr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_4__17740,new cljs.core.Keyword(null,"st","st",1455255828));
var st = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(2));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730_3__17739,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_1__17730,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$7($g$,res,vin,lev,USr,STr,st);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17862){if((e17862 instanceof Error)){
var e__5452__auto____$7 = e17862;
if((e__5452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$7;
}
} else {
throw e17862;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17861){if((e17861 instanceof Error)){
var e__5452__auto____$7 = e17861;
if((e__5452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$7;
}
} else {
throw e17861;

}
}} else {
throw e__5452__auto____$6;
}
} else {
throw e17860;

}
}} else {
throw e__5452__auto____$5;
}
} else {
throw e17859;

}
}} else {
throw e__5452__auto____$4;
}
} else {
throw e17858;

}
}} else {
throw e__5452__auto____$3;
}
} else {
throw e17857;

}
}} else {
throw e__5452__auto____$2;
}
} else {
throw e17856;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17854){if((e17854 instanceof Error)){
var e__5452__auto____$2 = e17854;
if((e__5452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$2;
}
} else {
throw e17854;

}
}} else {
throw e__5452__auto____$1;
}
} else {
throw e17853;

}
}} else {
throw e__5452__auto__;
}
} else {
throw e17852;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17851){if((e17851 instanceof Error)){
var e__5452__auto__ = e17851;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e17851;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17850){if((e17850 instanceof Error)){
var e__5452__auto__ = e17850;
if((e__5452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto__;
}
} else {
throw e17850;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17847){if((e17847 instanceof Error)){
var e__5452__auto__ = e17847;
if((e__5452__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_17540)) && ((cljs.core.count(ocr_17540) >= (1))))){
try{var ocr_17540_left__17844 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_17540,(0),(1));
if(((cljs.core.vector_QMARK_(ocr_17540_left__17844)) && ((cljs.core.count(ocr_17540_left__17844) === (1))))){
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_17540_left__17844,(0));
var anthing_else = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_17540,(1));
return "";
} else {
throw cljs.core.match.backtrack;

}
}catch (e17849){if((e17849 instanceof Error)){
var e__5452__auto____$1 = e17849;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__5452__auto____$1;
}
} else {
throw e17849;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17848){if((e17848 instanceof Error)){
var e__5452__auto____$1 = e17848;
if((e__5452__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_17540)].join('')));
} else {
throw e__5452__auto____$1;
}
} else {
throw e17848;

}
}} else {
throw e__5452__auto__;
}
} else {
throw e17847;

}
}};
var census$geoAPI$core$G_patterner = function (var_args){
var args__7638__auto__ = null;
if (arguments.length > 0) {
var G__18148__i = 0, G__18148__a = new Array(arguments.length -  0);
while (G__18148__i < G__18148__a.length) {G__18148__a[G__18148__i] = arguments[G__18148__i + 0]; ++G__18148__i;}
  args__7638__auto__ = new cljs.core.IndexedSeq(G__18148__a,0,null);
} 
return census$geoAPI$core$G_patterner__delegate.call(this,args__7638__auto__);};
census$geoAPI$core$G_patterner.cljs$lang$maxFixedArity = 0;
census$geoAPI$core$G_patterner.cljs$lang$applyTo = (function (arglist__18149){
var args__7638__auto__ = cljs.core.seq(arglist__18149);
return census$geoAPI$core$G_patterner__delegate(args__7638__auto__);
});
census$geoAPI$core$G_patterner.cljs$core$IFn$_invoke$arity$variadic = census$geoAPI$core$G_patterner__delegate;
return census$geoAPI$core$G_patterner;
})()
;
census.geoAPI.core.G_pattern_cfg = (function census$geoAPI$core$G_pattern_cfg($g$,p__17907){
var map__17931 = p__17907;
var map__17931__$1 = (((((!((map__17931 == null))))?(((((map__17931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17931):map__17931);
var map__17932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var map__17932__$1 = (((((!((map__17932 == null))))?(((((map__17932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17932):map__17932);
var geoHierarchy = map__17932__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var geoResolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050));
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
var G__17941 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var G__17942 = _EQ_O_EQ_;
var G__17943 = _EQ_E_EQ_;
return (census.geoAPI.core.$GET$_C_GeoJSON.cljs$core$IFn$_invoke$arity$3 ? census.geoAPI.core.$GET$_C_GeoJSON.cljs$core$IFn$_invoke$arity$3(G__17941,G__17942,G__17943) : census.geoAPI.core.$GET$_C_GeoJSON.call(null,G__17941,G__17942,G__17943));
}
}));
});
});
/**
 * 
 *   Takes the request argument and pulls out a vector of the component identifiers
 *   from the geoKeyMap, which is used to construct the UID for the GeoJSON. Used
 *   in deep-merging with statistics.
 *   
 */
census.geoAPI.core.GEOIDS_LT__$g$_PLUS_args = (function census$geoAPI$core$GEOIDS_LT__$g$_PLUS_args($g$,p__17951){
var map__17952 = p__17951;
var map__17952__$1 = (((((!((map__17952 == null))))?(((((map__17952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17952):map__17952);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17952__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17952__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var vec__17954 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key(cljs.core.last(geoHierarchy)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(vintage),new cljs.core.Keyword(null,"id<-json","id<-json",-1249818926)], null));
var seq__17955 = cljs.core.seq(vec__17954);
var GEOIDS = seq__17955;
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
var G__17959 = acc;
var G__17960 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(this$),GEOIDS)),this$]);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__17959,G__17960) : rf.call(null,G__17959,G__17960));
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
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__17961_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__17961_SHARP_,new cljs.core.Keyword(null,"features","features",-1146962336));
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
