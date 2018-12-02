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
var seq__30027_30554 = cljs.core.seq(e_gen);
var chunk__30028_30555 = null;
var count__30029_30556 = (0);
var i__30030_30557 = (0);
while(true){
if((i__30030_30557 < count__30029_30556)){
var e_30558 = chunk__30028_30555.cljs$core$IIndexed$_nth$arity$2(null,i__30030_30557);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_30558], 0));


var G__30559 = seq__30027_30554;
var G__30560 = chunk__30028_30555;
var G__30561 = count__30029_30556;
var G__30562 = (i__30030_30557 + (1));
seq__30027_30554 = G__30559;
chunk__30028_30555 = G__30560;
count__30029_30556 = G__30561;
i__30030_30557 = G__30562;
continue;
} else {
var temp__5457__auto___30563 = cljs.core.seq(seq__30027_30554);
if(temp__5457__auto___30563){
var seq__30027_30564__$1 = temp__5457__auto___30563;
if(cljs.core.chunked_seq_QMARK_(seq__30027_30564__$1)){
var c__4461__auto___30565 = cljs.core.chunk_first(seq__30027_30564__$1);
var G__30566 = cljs.core.chunk_rest(seq__30027_30564__$1);
var G__30567 = c__4461__auto___30565;
var G__30568 = cljs.core.count(c__4461__auto___30565);
var G__30569 = (0);
seq__30027_30554 = G__30566;
chunk__30028_30555 = G__30567;
count__30029_30556 = G__30568;
i__30030_30557 = G__30569;
continue;
} else {
var e_30570 = cljs.core.first(seq__30027_30564__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_30570], 0));


var G__30571 = cljs.core.next(seq__30027_30564__$1);
var G__30572 = null;
var G__30573 = (0);
var G__30574 = (0);
seq__30027_30554 = G__30571;
chunk__30028_30555 = G__30572;
count__30029_30556 = G__30573;
i__30030_30557 = G__30574;
continue;
}
} else {
}
}
break;
}

var seq__30031_30575 = cljs.core.seq(e_try);
var chunk__30032_30576 = null;
var count__30033_30577 = (0);
var i__30034_30578 = (0);
while(true){
if((i__30034_30578 < count__30033_30577)){
var t_30579 = chunk__30032_30576.cljs$core$IIndexed$_nth$arity$2(null,i__30034_30578);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_30579], 0));


var G__30580 = seq__30031_30575;
var G__30581 = chunk__30032_30576;
var G__30582 = count__30033_30577;
var G__30583 = (i__30034_30578 + (1));
seq__30031_30575 = G__30580;
chunk__30032_30576 = G__30581;
count__30033_30577 = G__30582;
i__30034_30578 = G__30583;
continue;
} else {
var temp__5457__auto___30584 = cljs.core.seq(seq__30031_30575);
if(temp__5457__auto___30584){
var seq__30031_30585__$1 = temp__5457__auto___30584;
if(cljs.core.chunked_seq_QMARK_(seq__30031_30585__$1)){
var c__4461__auto___30586 = cljs.core.chunk_first(seq__30031_30585__$1);
var G__30587 = cljs.core.chunk_rest(seq__30031_30585__$1);
var G__30588 = c__4461__auto___30586;
var G__30589 = cljs.core.count(c__4461__auto___30586);
var G__30590 = (0);
seq__30031_30575 = G__30587;
chunk__30032_30576 = G__30588;
count__30033_30577 = G__30589;
i__30034_30578 = G__30590;
continue;
} else {
var t_30591 = cljs.core.first(seq__30031_30585__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_30591], 0));


var G__30593 = cljs.core.next(seq__30031_30585__$1);
var G__30594 = null;
var G__30595 = (0);
var G__30596 = (0);
seq__30031_30575 = G__30593;
chunk__30032_30576 = G__30594;
count__30033_30577 = G__30595;
i__30034_30578 = G__30596;
continue;
}
} else {
}
}
break;
}

var seq__30035_30598 = cljs.core.seq(cljs.core.vec(census.utils.core.map_over_keys(((function (e_try,vins,temp__5455__auto__,e_gen){
return (function (p1__30025_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__30025_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scopes","scopes",-1571524352)], null));
});})(e_try,vins,temp__5455__auto__,e_gen))
,vins)));
var chunk__30036_30599 = null;
var count__30037_30600 = (0);
var i__30038_30601 = (0);
while(true){
if((i__30038_30601 < count__30037_30600)){
var s_30602 = chunk__30036_30599.cljs$core$IIndexed$_nth$arity$2(null,i__30038_30601);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30602], 0));


var G__30603 = seq__30035_30598;
var G__30604 = chunk__30036_30599;
var G__30605 = count__30037_30600;
var G__30606 = (i__30038_30601 + (1));
seq__30035_30598 = G__30603;
chunk__30036_30599 = G__30604;
count__30037_30600 = G__30605;
i__30038_30601 = G__30606;
continue;
} else {
var temp__5457__auto___30607 = cljs.core.seq(seq__30035_30598);
if(temp__5457__auto___30607){
var seq__30035_30608__$1 = temp__5457__auto___30607;
if(cljs.core.chunked_seq_QMARK_(seq__30035_30608__$1)){
var c__4461__auto___30609 = cljs.core.chunk_first(seq__30035_30608__$1);
var G__30610 = cljs.core.chunk_rest(seq__30035_30608__$1);
var G__30611 = c__4461__auto___30609;
var G__30612 = cljs.core.count(c__4461__auto___30609);
var G__30613 = (0);
seq__30035_30598 = G__30610;
chunk__30036_30599 = G__30611;
count__30037_30600 = G__30612;
i__30038_30601 = G__30613;
continue;
} else {
var s_30614 = cljs.core.first(seq__30035_30608__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30614], 0));


var G__30615 = cljs.core.next(seq__30035_30608__$1);
var G__30616 = null;
var G__30617 = (0);
var G__30618 = (0);
seq__30035_30598 = G__30615;
chunk__30036_30599 = G__30616;
count__30037_30600 = G__30617;
i__30038_30601 = G__30618;
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
var seq__30043_30619 = cljs.core.seq(e_gen);
var chunk__30044_30620 = null;
var count__30045_30621 = (0);
var i__30046_30622 = (0);
while(true){
if((i__30046_30622 < count__30045_30621)){
var e_30623 = chunk__30044_30620.cljs$core$IIndexed$_nth$arity$2(null,i__30046_30622);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_30623], 0));


var G__30624 = seq__30043_30619;
var G__30625 = chunk__30044_30620;
var G__30626 = count__30045_30621;
var G__30627 = (i__30046_30622 + (1));
seq__30043_30619 = G__30624;
chunk__30044_30620 = G__30625;
count__30045_30621 = G__30626;
i__30046_30622 = G__30627;
continue;
} else {
var temp__5457__auto___30628 = cljs.core.seq(seq__30043_30619);
if(temp__5457__auto___30628){
var seq__30043_30629__$1 = temp__5457__auto___30628;
if(cljs.core.chunked_seq_QMARK_(seq__30043_30629__$1)){
var c__4461__auto___30630 = cljs.core.chunk_first(seq__30043_30629__$1);
var G__30631 = cljs.core.chunk_rest(seq__30043_30629__$1);
var G__30632 = c__4461__auto___30630;
var G__30633 = cljs.core.count(c__4461__auto___30630);
var G__30634 = (0);
seq__30043_30619 = G__30631;
chunk__30044_30620 = G__30632;
count__30045_30621 = G__30633;
i__30046_30622 = G__30634;
continue;
} else {
var e_30636 = cljs.core.first(seq__30043_30629__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_30636], 0));


var G__30637 = cljs.core.next(seq__30043_30629__$1);
var G__30638 = null;
var G__30639 = (0);
var G__30640 = (0);
seq__30043_30619 = G__30637;
chunk__30044_30620 = G__30638;
count__30045_30621 = G__30639;
i__30046_30622 = G__30640;
continue;
}
} else {
}
}
break;
}

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_NA], 0));

var seq__30047_30641 = cljs.core.seq(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (e_NA,temp__5455__auto__,e_gen){
return (function (p1__30026_SHARP_){
return census.utils.core.keys__GT_strs(cljs.core.name(cljs.core.key(p1__30026_SHARP_)));
});})(e_NA,temp__5455__auto__,e_gen))
,$g$)));
var chunk__30048_30642 = null;
var count__30049_30643 = (0);
var i__30050_30644 = (0);
while(true){
if((i__30050_30644 < count__30049_30643)){
var s_30645 = chunk__30048_30642.cljs$core$IIndexed$_nth$arity$2(null,i__30050_30644);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30645], 0));


var G__30646 = seq__30047_30641;
var G__30647 = chunk__30048_30642;
var G__30648 = count__30049_30643;
var G__30649 = (i__30050_30644 + (1));
seq__30047_30641 = G__30646;
chunk__30048_30642 = G__30647;
count__30049_30643 = G__30648;
i__30050_30644 = G__30649;
continue;
} else {
var temp__5457__auto___30650 = cljs.core.seq(seq__30047_30641);
if(temp__5457__auto___30650){
var seq__30047_30651__$1 = temp__5457__auto___30650;
if(cljs.core.chunked_seq_QMARK_(seq__30047_30651__$1)){
var c__4461__auto___30652 = cljs.core.chunk_first(seq__30047_30651__$1);
var G__30653 = cljs.core.chunk_rest(seq__30047_30651__$1);
var G__30654 = c__4461__auto___30652;
var G__30655 = cljs.core.count(c__4461__auto___30652);
var G__30656 = (0);
seq__30047_30641 = G__30653;
chunk__30048_30642 = G__30654;
count__30049_30643 = G__30655;
i__30050_30644 = G__30656;
continue;
} else {
var s_30657 = cljs.core.first(seq__30047_30651__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30657], 0));


var G__30658 = cljs.core.next(seq__30047_30651__$1);
var G__30659 = null;
var G__30660 = (0);
var G__30661 = (0);
seq__30047_30641 = G__30658;
chunk__30048_30642 = G__30659;
count__30049_30643 = G__30660;
i__30050_30644 = G__30661;
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
var G__30052 = arguments.length;
switch (G__30052) {
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
var G__30056 = arguments.length;
switch (G__30056) {
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
var STr_QMARK_ = (!((cljs.core.some((function (p1__30053_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,p1__30053_SHARP_);
}),STr) == null)));
var USr_QMARK_ = (!((cljs.core.some(((function (STr_QMARK_){
return (function (p1__30054_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,p1__30054_SHARP_);
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
var G__30058 = arguments.length;
switch (G__30058) {
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
var seq__30059_30710 = cljs.core.seq(strs);
var chunk__30060_30711 = null;
var count__30061_30712 = (0);
var i__30062_30713 = (0);
while(true){
if((i__30062_30713 < count__30061_30712)){
var s_30714 = chunk__30060_30711.cljs$core$IIndexed$_nth$arity$2(null,i__30062_30713);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30714], 0));


var G__30715 = seq__30059_30710;
var G__30716 = chunk__30060_30711;
var G__30717 = count__30061_30712;
var G__30718 = (i__30062_30713 + (1));
seq__30059_30710 = G__30715;
chunk__30060_30711 = G__30716;
count__30061_30712 = G__30717;
i__30062_30713 = G__30718;
continue;
} else {
var temp__5457__auto___30719 = cljs.core.seq(seq__30059_30710);
if(temp__5457__auto___30719){
var seq__30059_30720__$1 = temp__5457__auto___30719;
if(cljs.core.chunked_seq_QMARK_(seq__30059_30720__$1)){
var c__4461__auto___30721 = cljs.core.chunk_first(seq__30059_30720__$1);
var G__30722 = cljs.core.chunk_rest(seq__30059_30720__$1);
var G__30723 = c__4461__auto___30721;
var G__30724 = cljs.core.count(c__4461__auto___30721);
var G__30725 = (0);
seq__30059_30710 = G__30722;
chunk__30060_30711 = G__30723;
count__30061_30712 = G__30724;
i__30062_30713 = G__30725;
continue;
} else {
var s_30726 = cljs.core.first(seq__30059_30720__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30726], 0));


var G__30727 = cljs.core.next(seq__30059_30720__$1);
var G__30728 = null;
var G__30729 = (0);
var G__30730 = (0);
seq__30059_30710 = G__30727;
chunk__30060_30711 = G__30728;
count__30061_30712 = G__30729;
i__30062_30713 = G__30730;
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
var ocr_30064 = cljs.core.vec(args__21996__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_30064)) && ((cljs.core.count(ocr_30064) === 2)))){
try{var ocr_30064_1__30336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(1));
if(((cljs.core.vector_QMARK_(ocr_30064_1__30336)) && ((cljs.core.count(ocr_30064_1__30336) === 5)))){
try{var ocr_30064_1__30336_3__30345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(3));
if(((cljs.core.vector_QMARK_(ocr_30064_1__30336_3__30345)) && ((cljs.core.count(ocr_30064_1__30336_3__30345) === 2)))){
try{var ocr_30064_1__30336_3__30345_0__30359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
if(cljs.core.keyword_identical_QMARK_(ocr_30064_1__30336_3__30345_0__30359,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557))){
try{var ocr_30064_1__30336_0__30342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
if((ocr_30064_1__30336_0__30342 === "500k")){
try{var ocr_30064_1__30336_4__30346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(4));
if((((!((ocr_30064_1__30336_4__30346 == null))))?(((((ocr_30064_1__30336_4__30346.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_30064_1__30336_4__30346.cljs$core$ILookup$))))?true:(((!ocr_30064_1__30336_4__30346.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_30064_1__30336_4__30346):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_30064_1__30336_4__30346))){
try{var ocr_30064_1__30336_4__30346_st__30371 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_30064_1__30336_4__30346_st__30371 === null)){
try{var ocr_30064_1__30336_4__30346_us__30370 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_us__30370,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.big_G.cljs$core$IFn$_invoke$arity$5($g$,"500k",vin,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557),USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30473){if((e30473 instanceof Error)){
var e__21043__auto__ = e30473;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e30473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30472){if((e30472 instanceof Error)){
var e__21043__auto__ = e30472;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e30472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30470){if((e30470 instanceof Error)){
var e__21043__auto__ = e30470;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e30470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30467){if((e30467 instanceof Error)){
var e__21043__auto__ = e30467;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_0__30342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
if(cljs.core.truth_((function (){var fexpr__30469 = ((function (ocr_30064_1__30336_0__30342,e__21043__auto__,ocr_30064_1__30336_3__30345_0__30359,ocr_30064_1__30336_3__30345,ocr_30064_1__30336,ocr_30064){
return (function (p1__30063_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("500k",p1__30063_SHARP_)));
});})(ocr_30064_1__30336_0__30342,e__21043__auto__,ocr_30064_1__30336_3__30345_0__30359,ocr_30064_1__30336_3__30345,ocr_30064_1__30336,ocr_30064))
;
return fexpr__30469(ocr_30064_1__30336_0__30342);
})())){
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.G_err($g$,res,vin,new cljs.core.Keyword(null,"zip-code-tabulation-area","zip-code-tabulation-area",-1640974557));
} else {
throw cljs.core.match.backtrack;

}
}catch (e30468){if((e30468 instanceof Error)){
var e__21043__auto____$1 = e30468;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e30468;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e30467;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30447){if((e30447 instanceof Error)){
var e__21043__auto__ = e30447;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_4__30346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(4));
if((ocr_30064_1__30336_4__30346 === null)){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30448){if((e30448 instanceof Error)){
var e__21043__auto____$1 = e30448;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_4__30346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(4));
if((((!((ocr_30064_1__30336_4__30346 == null))))?(((((ocr_30064_1__30336_4__30346.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_30064_1__30336_4__30346.cljs$core$ILookup$))))?true:(((!ocr_30064_1__30336_4__30346.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_30064_1__30336_4__30346):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,ocr_30064_1__30336_4__30346))){
try{var ocr_30064_1__30336_2__30344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(2));
if((ocr_30064_1__30336_2__30344 === null)){
try{var ocr_30064_1__30336_4__30346_us__30388 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_30064_1__30336_4__30346_us__30388 === null)){
try{var ocr_30064_1__30336_4__30346_st__30389 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_st__30389,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30466){if((e30466 instanceof Error)){
var e__21043__auto____$2 = e30466;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e30466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30465){if((e30465 instanceof Error)){
var e__21043__auto____$2 = e30465;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e30465;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30451){if((e30451 instanceof Error)){
var e__21043__auto____$2 = e30451;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_2__30344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(2));
if((ocr_30064_1__30336_2__30344 === "*")){
try{var ocr_30064_1__30336_4__30346_us__30388 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_30064_1__30336_4__30346_us__30388 === null)){
try{var ocr_30064_1__30336_4__30346_st__30389 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_st__30389,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.G_err($g$,res,vin,lev);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30464){if((e30464 instanceof Error)){
var e__21043__auto____$3 = e30464;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e30464;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30463){if((e30463 instanceof Error)){
var e__21043__auto____$3 = e30463;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$3;
}
} else {
throw e30463;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30452){if((e30452 instanceof Error)){
var e__21043__auto____$3 = e30452;
if((e__21043__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_2__30344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(2));
if((ocr_30064_1__30336_2__30344 === null)){
try{var ocr_30064_1__30336_4__30346_us__30388 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_us__30388,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_30064_1__30336_4__30346_st__30389 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_st__30389,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30462){if((e30462 instanceof Error)){
var e__21043__auto____$4 = e30462;
if((e__21043__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$4;
}
} else {
throw e30462;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30461){if((e30461 instanceof Error)){
var e__21043__auto____$4 = e30461;
if((e__21043__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$4;
}
} else {
throw e30461;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30453){if((e30453 instanceof Error)){
var e__21043__auto____$4 = e30453;
if((e__21043__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_2__30344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(2));
if((ocr_30064_1__30336_2__30344 === "*")){
try{var ocr_30064_1__30336_4__30346_us__30388 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_us__30388,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_30064_1__30336_4__30346_st__30389 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_st__30389,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30460){if((e30460 instanceof Error)){
var e__21043__auto____$5 = e30460;
if((e__21043__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$5;
}
} else {
throw e30460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30459){if((e30459 instanceof Error)){
var e__21043__auto____$5 = e30459;
if((e__21043__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$5;
}
} else {
throw e30459;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30454){if((e30454 instanceof Error)){
var e__21043__auto____$5 = e30454;
if((e__21043__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_4__30346_st__30389 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_30064_1__30336_4__30346_st__30389 === null)){
try{var ocr_30064_1__30336_4__30346_us__30388 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_us__30388,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$5($g$,res,vin,lev,USr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30458){if((e30458 instanceof Error)){
var e__21043__auto____$6 = e30458;
if((e__21043__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$6;
}
} else {
throw e30458;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30455){if((e30455 instanceof Error)){
var e__21043__auto____$6 = e30455;
if((e__21043__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_30064_1__30336_4__30346_st__30389 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_st__30389,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var ocr_30064_1__30336_4__30346_us__30388 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346_us__30388,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var USr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"us","us",746429226));
var STr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_4__30346,new cljs.core.Keyword(null,"st","st",1455255828));
var st = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(2));
var lev = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336_3__30345,(0));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(0));
var vin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_1__30336,(1));
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064,(0));
return census.geoAPI.core.scope.cljs$core$IFn$_invoke$arity$7($g$,res,vin,lev,USr,STr,st);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30457){if((e30457 instanceof Error)){
var e__21043__auto____$7 = e30457;
if((e__21043__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$7;
}
} else {
throw e30457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30456){if((e30456 instanceof Error)){
var e__21043__auto____$7 = e30456;
if((e__21043__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$7;
}
} else {
throw e30456;

}
}} else {
throw e__21043__auto____$6;
}
} else {
throw e30455;

}
}} else {
throw e__21043__auto____$5;
}
} else {
throw e30454;

}
}} else {
throw e__21043__auto____$4;
}
} else {
throw e30453;

}
}} else {
throw e__21043__auto____$3;
}
} else {
throw e30452;

}
}} else {
throw e__21043__auto____$2;
}
} else {
throw e30451;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30449){if((e30449 instanceof Error)){
var e__21043__auto____$2 = e30449;
if((e__21043__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$2;
}
} else {
throw e30449;

}
}} else {
throw e__21043__auto____$1;
}
} else {
throw e30448;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e30447;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30446){if((e30446 instanceof Error)){
var e__21043__auto__ = e30446;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e30446;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30445){if((e30445 instanceof Error)){
var e__21043__auto__ = e30445;
if((e__21043__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto__;
}
} else {
throw e30445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30442){if((e30442 instanceof Error)){
var e__21043__auto__ = e30442;
if((e__21043__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30064)) && ((cljs.core.count(ocr_30064) >= (1))))){
try{var ocr_30064_left__30439 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(ocr_30064,(0),(1));
if(((cljs.core.vector_QMARK_(ocr_30064_left__30439)) && ((cljs.core.count(ocr_30064_left__30439) === (1))))){
var $g$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30064_left__30439,(0));
var anthing_else = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ocr_30064,(1));
return "";
} else {
throw cljs.core.match.backtrack;

}
}catch (e30444){if((e30444 instanceof Error)){
var e__21043__auto____$1 = e30444;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21043__auto____$1;
}
} else {
throw e30444;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30443){if((e30443 instanceof Error)){
var e__21043__auto____$1 = e30443;
if((e__21043__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_30064)].join('')));
} else {
throw e__21043__auto____$1;
}
} else {
throw e30443;

}
}} else {
throw e__21043__auto__;
}
} else {
throw e30442;

}
}};
var census$geoAPI$core$G_patterner = function (var_args){
var args__21996__auto__ = null;
if (arguments.length > 0) {
var G__30731__i = 0, G__30731__a = new Array(arguments.length -  0);
while (G__30731__i < G__30731__a.length) {G__30731__a[G__30731__i] = arguments[G__30731__i + 0]; ++G__30731__i;}
  args__21996__auto__ = new cljs.core.IndexedSeq(G__30731__a,0,null);
} 
return census$geoAPI$core$G_patterner__delegate.call(this,args__21996__auto__);};
census$geoAPI$core$G_patterner.cljs$lang$maxFixedArity = 0;
census$geoAPI$core$G_patterner.cljs$lang$applyTo = (function (arglist__30732){
var args__21996__auto__ = cljs.core.seq(arglist__30732);
return census$geoAPI$core$G_patterner__delegate(args__21996__auto__);
});
census$geoAPI$core$G_patterner.cljs$core$IFn$_invoke$arity$variadic = census$geoAPI$core$G_patterner__delegate;
return census$geoAPI$core$G_patterner;
})()
;
census.geoAPI.core.G_pattern_cfg = (function census$geoAPI$core$G_pattern_cfg($g$,p__30474){
var map__30475 = p__30474;
var map__30475__$1 = (((((!((map__30475 == null))))?(((((map__30475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30475):map__30475);
var map__30476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30475__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var map__30476__$1 = (((((!((map__30476 == null))))?(((((map__30476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30476):map__30476);
var geoHierarchy = map__30476__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30476__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30475__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var geoResolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30475__$1,new cljs.core.Keyword(null,"geoResolution","geoResolution",1206666050));
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
var G__30531 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var G__30532 = _EQ_O_EQ_;
var G__30533 = _EQ_E_EQ_;
return (census.geoAPI.core.$GET$_C_GeoJSON.cljs$core$IFn$_invoke$arity$3 ? census.geoAPI.core.$GET$_C_GeoJSON.cljs$core$IFn$_invoke$arity$3(G__30531,G__30532,G__30533) : census.geoAPI.core.$GET$_C_GeoJSON.call(null,G__30531,G__30532,G__30533));
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
var G__30536_30733 = cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [census.utils.core.URL_GEOKEYMAP], null));
var G__30537_30734 = _EQ_GKM_EQ_;
var G__30538_30735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(census.utils.core.throw_err));
var G__30539_30736 = new cljs.core.Keyword(null,"silent","silent",-1142977785);
(census.geoAPI.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4 ? census.geoAPI.core.$GET$_GeoKeyMap.cljs$core$IFn$_invoke$arity$4(G__30536_30733,G__30537_30734,G__30538_30735,G__30539_30736) : census.geoAPI.core.$GET$_GeoKeyMap.call(null,G__30536_30733,G__30537_30734,G__30538_30735,G__30539_30736));

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
census.geoAPI.core.GEOIDS_LT__$g$_PLUS_args = (function census$geoAPI$core$GEOIDS_LT__$g$_PLUS_args($g$,p__30542){
var map__30543 = p__30542;
var map__30543__$1 = (((((!((map__30543 == null))))?(((((map__30543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30543):map__30543);
var geoHierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30543__$1,new cljs.core.Keyword(null,"geoHierarchy","geoHierarchy",380422740));
var vintage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30543__$1,new cljs.core.Keyword(null,"vintage","vintage",818195578));
var vec__30547 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($g$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key(cljs.core.last(geoHierarchy)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(vintage),new cljs.core.Keyword(null,"id<-json","id<-json",-1249818926)], null));
var seq__30548 = cljs.core.seq(vec__30547);
var GEOIDS = seq__30548;
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
var G__30551 = acc;
var G__30552 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(this$),GEOIDS)),this$]);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__30551,G__30552) : rf.call(null,G__30551,G__30552));
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
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__30553_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30553_SHARP_,new cljs.core.Keyword(null,"features","features",-1146962336));
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
