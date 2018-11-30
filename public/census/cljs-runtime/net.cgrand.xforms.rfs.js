goog.provide('net.cgrand.xforms.rfs');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
net.cgrand.xforms.rfs.cmp = (function net$cgrand$xforms$rfs$cmp(f,a,b){
var r = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b));
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(b,a) : f.call(null,b,a)))){
return (1);
} else {
return (0);

}
}
}
});

net.cgrand.xforms.rfs.minimum = (function net$cgrand$xforms$rfs$minimum(var_args){
var G__18241 = arguments.length;
switch (G__18241) {
case 1:
return net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return (function() {
var G__18260 = null;
var G__18260__0 = (function (){
return null;
});
var G__18260__1 = (function (x){
return x;
});
var G__18260__2 = (function (a,b){
if((a == null)){
return b;
} else {
if((b == null)){
return a;
} else {
if((net.cgrand.xforms.rfs.cmp(comparator,a,b) > (0))){
return b;
} else {
return a;

}
}
}
});
G__18260 = function(a,b){
switch(arguments.length){
case 0:
return G__18260__0.call(this);
case 1:
return G__18260__1.call(this,a);
case 2:
return G__18260__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18260.cljs$core$IFn$_invoke$arity$0 = G__18260__0;
G__18260.cljs$core$IFn$_invoke$arity$1 = G__18260__1;
G__18260.cljs$core$IFn$_invoke$arity$2 = G__18260__2;
return G__18260;
})()
});

net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_maximum){
return (function() {
var G__18261 = null;
var G__18261__0 = (function (){
return new cljs.core.Keyword("net.cgrand.xforms.rfs","+\u221E","net.cgrand.xforms.rfs/+\u221E",-1802605567);
});
var G__18261__1 = (function (x){
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","+\u221E","net.cgrand.xforms.rfs/+\u221E",-1802605567),x)){
return absolute_maximum;
} else {
return x;
}
});
var G__18261__2 = (function (a,b){
if(((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","+\u221E","net.cgrand.xforms.rfs/+\u221E",-1802605567),a)) || ((net.cgrand.xforms.rfs.cmp(comparator,a,b) > (0))))){
return b;
} else {
return a;
}
});
G__18261 = function(a,b){
switch(arguments.length){
case 0:
return G__18261__0.call(this);
case 1:
return G__18261__1.call(this,a);
case 2:
return G__18261__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18261.cljs$core$IFn$_invoke$arity$0 = G__18261__0;
G__18261.cljs$core$IFn$_invoke$arity$1 = G__18261__1;
G__18261.cljs$core$IFn$_invoke$arity$2 = G__18261__2;
return G__18261;
})()
});

net.cgrand.xforms.rfs.minimum.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.rfs.maximum = (function net$cgrand$xforms$rfs$maximum(var_args){
var G__18243 = arguments.length;
switch (G__18243) {
case 1:
return net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return (function() {
var G__18263 = null;
var G__18263__0 = (function (){
return null;
});
var G__18263__1 = (function (x){
return x;
});
var G__18263__2 = (function (a,b){
if((a == null)){
return b;
} else {
if((b == null)){
return a;
} else {
if((net.cgrand.xforms.rfs.cmp(comparator,a,b) < (0))){
return b;
} else {
return a;

}
}
}
});
G__18263 = function(a,b){
switch(arguments.length){
case 0:
return G__18263__0.call(this);
case 1:
return G__18263__1.call(this,a);
case 2:
return G__18263__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18263.cljs$core$IFn$_invoke$arity$0 = G__18263__0;
G__18263.cljs$core$IFn$_invoke$arity$1 = G__18263__1;
G__18263.cljs$core$IFn$_invoke$arity$2 = G__18263__2;
return G__18263;
})()
});

net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_minimum){
return (function() {
var G__18264 = null;
var G__18264__0 = (function (){
return new cljs.core.Keyword("net.cgrand.xforms.rfs","-\u221E","net.cgrand.xforms.rfs/-\u221E",730866277);
});
var G__18264__1 = (function (x){
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","-\u221E","net.cgrand.xforms.rfs/-\u221E",730866277),x)){
return absolute_minimum;
} else {
return x;
}
});
var G__18264__2 = (function (a,b){
if(((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("net.cgrand.xforms.rfs","-\u221E","net.cgrand.xforms.rfs/-\u221E",730866277),a)) || ((net.cgrand.xforms.rfs.cmp(comparator,a,b) < (0))))){
return b;
} else {
return a;
}
});
G__18264 = function(a,b){
switch(arguments.length){
case 0:
return G__18264__0.call(this);
case 1:
return G__18264__1.call(this,a);
case 2:
return G__18264__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18264.cljs$core$IFn$_invoke$arity$0 = G__18264__0;
G__18264.cljs$core$IFn$_invoke$arity$1 = G__18264__1;
G__18264.cljs$core$IFn$_invoke$arity$2 = G__18264__2;
return G__18264;
})()
});

net.cgrand.xforms.rfs.maximum.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.rfs.min = net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);

net.cgrand.xforms.rfs.max = net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);

/**
 * Reducing fn to compute the arithmetic mean.
 */
net.cgrand.xforms.rfs.avg = (function net$cgrand$xforms$rfs$avg(var_args){
var G__18245 = arguments.length;
switch (G__18245) {
case 0:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$1 = (function (acc){
if(cljs.core.truth_(acc)){
return ((acc[(1)]) / (acc[(0)]));
} else {
return null;
}
});

net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
return net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$3(acc,x,(1));
});

net.cgrand.xforms.rfs.avg.cljs$core$IFn$_invoke$arity$3 = (function (acc,x,w){
var acc__$1 = (function (){var or__4047__auto__ = acc;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [0.0,0.0];
}
})();
var G__18246 = acc__$1;
(G__18246[(0)] = ((acc__$1[(0)]) + w));

(G__18246[(1)] = ((acc__$1[(1)]) + (w * x)));

return G__18246;
});

net.cgrand.xforms.rfs.avg.cljs$lang$maxFixedArity = 3;


/**
 * Reducing fn to compute the standard deviation. Returns 0 if no or only one item.
 */
net.cgrand.xforms.rfs.sd = (function net$cgrand$xforms$rfs$sd(var_args){
var G__18248 = arguments.length;
switch (G__18248) {
case 0:
return net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$0 = (function (){
return [0.0,0.0,0.0];
});

net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$1 = (function (a){
var s = (a[(0)]);
var n = (a[(2)]);
if(((1) < n)){
var G__18249 = (s / (n - (1)));
return Math.sqrt(G__18249);
} else {
return 0.0;
}
});

net.cgrand.xforms.rfs.sd.cljs$core$IFn$_invoke$arity$2 = (function (a,x){
var s = (a[(0)]);
var m = (a[(1)]);
var n = (a[(2)]);
var d = (x - m);
var n__$1 = (n + (1));
var m_SINGLEQUOTE_ = (m + (d / n__$1));
var G__18250 = a;
(G__18250[(0)] = (s + (d * (x - m_SINGLEQUOTE_))));

(G__18250[(1)] = m_SINGLEQUOTE_);

(G__18250[(2)] = n__$1);

return G__18250;
});

net.cgrand.xforms.rfs.sd.cljs$lang$maxFixedArity = 2;


/**
 * Reducing function that returns the last value.
 */
net.cgrand.xforms.rfs.last = (function net$cgrand$xforms$rfs$last(var_args){
var G__18252 = arguments.length;
switch (G__18252) {
case 0:
return net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

net.cgrand.xforms.rfs.last.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
return x;
});

net.cgrand.xforms.rfs.last.cljs$lang$maxFixedArity = 2;


/**
 * Reducing function that returns the first logical true value.
 */
net.cgrand.xforms.rfs.some = (function net$cgrand$xforms$rfs$some(var_args){
var G__18254 = arguments.length;
switch (G__18254) {
case 0:
return net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

net.cgrand.xforms.rfs.some.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if(cljs.core.truth_(x)){
return cljs.core.reduced(x);
} else {
return null;
}
});

net.cgrand.xforms.rfs.some.cljs$lang$maxFixedArity = 2;


/**
 * Like xforms/str but returns a StringBuilder.
 */
net.cgrand.xforms.rfs.str_BANG_ = (function net$cgrand$xforms$rfs$str_BANG_(var_args){
var G__18256 = arguments.length;
switch (G__18256) {
case 0:
return net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.string.StringBuffer());
});

net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (sb){
var x_18257 = sb;
if((x_18257 instanceof goog.string.StringBuffer)){
return x_18257;
} else {
return (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)));
}
});

net.cgrand.xforms.rfs.str_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sb,x){
return (function (){var x_18258 = sb;
if((x_18258 instanceof goog.string.StringBuffer)){
return x_18258;
} else {
return (new goog.string.StringBuffer(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)));
}
})().append(x);
});

net.cgrand.xforms.rfs.str_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Reducing function to build strings in linear time. Acts as replacement for clojure.core/str in a reduce/transduce call.
 */
net.cgrand.xforms.rfs.str = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.rfs.str_BANG_,cljs.core.str);

//# sourceMappingURL=net.cgrand.xforms.rfs.js.map
