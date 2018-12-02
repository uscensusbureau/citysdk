goog.provide('linked.map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
linked.map.Node = (function (value,left,right,__meta,__extmap,__hash){
this.value = value;
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
linked.map.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

linked.map.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k24341,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__24345 = k24341;
var G__24345__$1 = (((G__24345 instanceof cljs.core.Keyword))?G__24345.fqn:null);
switch (G__24345__$1) {
case "value":
return self__.value;

break;
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24341,else__4304__auto__);

}
});

linked.map.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__24347){
var vec__24348 = p__24347;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24348,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24348,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

linked.map.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#linked.map.Node{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24340){
var self__ = this;
var G__24340__$1 = this;
return (new cljs.core.RecordIter((0),G__24340__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

linked.map.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

linked.map.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
});

linked.map.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__24351 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1739253980 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__24351(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

linked.map.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24342,other24343){
var self__ = this;
var this24342__$1 = this;
return (((!((other24343 == null)))) && ((this24342__$1.constructor === other24343.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24342__$1.value,other24343.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24342__$1.left,other24343.left)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24342__$1.right,other24343.right)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24342__$1.__extmap,other24343.__extmap)));
});

linked.map.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

linked.map.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__24340){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__24352 = cljs.core.keyword_identical_QMARK_;
var expr__24353 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__24355 = new cljs.core.Keyword(null,"value","value",305978217);
var G__24356 = expr__24353;
return (pred__24352.cljs$core$IFn$_invoke$arity$2 ? pred__24352.cljs$core$IFn$_invoke$arity$2(G__24355,G__24356) : pred__24352.call(null,G__24355,G__24356));
})())){
return (new linked.map.Node(G__24340,self__.left,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24357 = new cljs.core.Keyword(null,"left","left",-399115937);
var G__24358 = expr__24353;
return (pred__24352.cljs$core$IFn$_invoke$arity$2 ? pred__24352.cljs$core$IFn$_invoke$arity$2(G__24357,G__24358) : pred__24352.call(null,G__24357,G__24358));
})())){
return (new linked.map.Node(self__.value,G__24340,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24359 = new cljs.core.Keyword(null,"right","right",-452581833);
var G__24360 = expr__24353;
return (pred__24352.cljs$core$IFn$_invoke$arity$2 ? pred__24352.cljs$core$IFn$_invoke$arity$2(G__24359,G__24360) : pred__24352.call(null,G__24359,G__24360));
})())){
return (new linked.map.Node(self__.value,self__.left,G__24340,self__.__meta,self__.__extmap,null));
} else {
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__24340),null));
}
}
}
});

linked.map.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null))], null),self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__24340){
var self__ = this;
var this__4300__auto____$1 = this;
return (new linked.map.Node(self__.value,self__.left,self__.right,G__24340,self__.__extmap,self__.__hash));
});

linked.map.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

linked.map.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

linked.map.Node.cljs$lang$type = true;

linked.map.Node.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"linked.map/Node",null,(1),null));
});

linked.map.Node.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"linked.map/Node");
});

/**
 * Positional factory function for linked.map/Node.
 */
linked.map.__GT_Node = (function linked$map$__GT_Node(value,left,right){
return (new linked.map.Node(value,left,right,null,null,null));
});

/**
 * Factory function for linked.map/Node, taking a map of keywords to field values.
 */
linked.map.map__GT_Node = (function linked$map$map__GT_Node(G__24344){
var extmap__4340__auto__ = (function (){var G__24365 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24344,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], 0));
if(cljs.core.record_QMARK_(G__24344)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24365);
} else {
return G__24365;
}
})();
return (new linked.map.Node(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24344),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__24344),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__24344),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
linked.map.LinkedMap = (function (head,delegate_map){
this.head = head;
this.delegate_map = delegate_map;
this.cljs$lang$protocol_mask$partition0$ = 2314602255;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
linked.map.LinkedMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",(function (){var iter__4434__auto__ = ((function (coll){
return (function linked$map$iter__24374(s__24375){
return (new cljs.core.LazySeq(null,((function (coll){
return (function (){
var s__24375__$1 = s__24375;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24375__$1);
if(temp__5457__auto__){
var s__24375__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24375__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__24375__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__24377 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__24376 = (0);
while(true){
if((i__24376 < size__4433__auto__)){
var vec__24380 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__24376);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(1),null);
cljs.core.chunk_append(b__24377,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__24420 = (i__24376 + (1));
i__24376 = G__24420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24377),linked$map$iter__24374(cljs.core.chunk_rest(s__24375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24377),null);
}
} else {
var vec__24383 = cljs.core.first(s__24375__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24383,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),linked$map$iter__24374(cljs.core.rest(s__24375__$2)));
}
} else {
return null;
}
break;
}
});})(coll))
,null,null));
});})(coll))
;
return iter__4434__auto__(coll);
})())),"}"].join('');
});

linked.map.LinkedMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

linked.map.LinkedMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
});

linked.map.LinkedMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var temp__5455__auto__ = cljs.core.find(self__.delegate_map,k);
if(cljs.core.truth_(temp__5455__auto__)){
var entry = temp__5455__auto__;
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.val(entry));
} else {
return not_found;
}
});

linked.map.LinkedMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (coll__$1){
return (function (p1__24369_SHARP_,p2__24370_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,p1__24369_SHARP_),p2__24370_SHARP_);
});})(coll__$1))
,init,cljs.core.seq(coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write(writer,["#linked/map ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coll__$1))].join(''));
});

linked.map.LinkedMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.meta(self__.delegate_map);
});

linked.map.LinkedMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new linked.map.LinkedMap(self__.head,self__.delegate_map));
});

linked.map.LinkedMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.delegate_map);
});

linked.map.LinkedMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (linked.map.rseq_STAR_.cljs$core$IFn$_invoke$arity$1 ? linked.map.rseq_STAR_.cljs$core$IFn$_invoke$arity$1(coll__$1) : linked.map.rseq_STAR_.call(null,coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

linked.map.LinkedMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(linked.map.empty_linked_map,cljs.core.meta(self__.delegate_map));
});

linked.map.LinkedMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return (linked.map.dissoc_STAR_.cljs$core$IFn$_invoke$arity$2 ? linked.map.dissoc_STAR_.cljs$core$IFn$_invoke$arity$2(coll__$1,k) : linked.map.dissoc_STAR_.call(null,coll__$1,k));
});

linked.map.LinkedMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return (linked.map.assoc_STAR_.cljs$core$IFn$_invoke$arity$3 ? linked.map.assoc_STAR_.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v) : linked.map.assoc_STAR_.call(null,coll__$1,k,v));
});

linked.map.LinkedMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core.contains_QMARK_(self__.delegate_map,k);
});

linked.map.LinkedMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (linked.map.seq_STAR_.cljs$core$IFn$_invoke$arity$1 ? linked.map.seq_STAR_.cljs$core$IFn$_invoke$arity$1(coll__$1) : linked.map.seq_STAR_.call(null,coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var self__ = this;
var coll__$1 = this;
return (new linked.map.LinkedMap(self__.head,cljs.core.with_meta(self__.delegate_map,meta)));
});

linked.map.LinkedMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return coll__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__24426 = ret.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__24427 = cljs.core.next(es);
ret = G__24426;
es = G__24427;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

linked.map.LinkedMap.prototype.call = (function() {
var G__24428 = null;
var G__24428__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24428__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24428 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24428__2.call(this,self__,k);
case 3:
return G__24428__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24428.cljs$core$IFn$_invoke$arity$2 = G__24428__2;
G__24428.cljs$core$IFn$_invoke$arity$3 = G__24428__3;
return G__24428;
})()
;

linked.map.LinkedMap.prototype.apply = (function (self__,args24372){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24372)));
});

linked.map.LinkedMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

linked.map.LinkedMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

linked.map.LinkedMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"delegate-map","delegate-map",-1583449162,null)], null);
});

linked.map.LinkedMap.cljs$lang$type = true;

linked.map.LinkedMap.cljs$lang$ctorStr = "linked.map/LinkedMap";

linked.map.LinkedMap.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"linked.map/LinkedMap");
});

/**
 * Positional factory function for linked.map/LinkedMap.
 */
linked.map.__GT_LinkedMap = (function linked$map$__GT_LinkedMap(head,delegate_map){
return (new linked.map.LinkedMap(head,delegate_map));
});

linked.map.assoc_STAR_ = (function linked$map$assoc_STAR_(this$,k,v){
var head = this$.head;
var delegate_map = this$.delegate_map;
var temp__5455__auto__ = cljs.core.find(delegate_map,k);
if(cljs.core.truth_(temp__5455__auto__)){
var entry = temp__5455__auto__;
return (new linked.map.LinkedMap(head,cljs.core.assoc_in(delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217)], null),v)));
} else {
if(cljs.core.empty_QMARK_(delegate_map)){
return (new linked.map.LinkedMap(k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(delegate_map,k,(new linked.map.Node(v,k,k,null,null,null)))));
} else {
var tail = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
return (new linked.map.LinkedMap(head,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(delegate_map,k,(new linked.map.Node(v,tail,head,null,null,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null),k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail,new cljs.core.Keyword(null,"right","right",-452581833)], null),k)));
}
}
});
linked.map.dissoc_STAR_ = (function linked$map$dissoc_STAR_(this$,k){
var head = this$.head;
var delegate_map = this$.delegate_map;
var temp__5455__auto__ = cljs.core.find(delegate_map,k);
if(cljs.core.truth_(temp__5455__auto__)){
var entry = temp__5455__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(delegate_map))){
return cljs.core.empty(this$);
} else {
var rk = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(cljs.core.val(entry));
var lk = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.val(entry));
var head__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,head))?rk:head);
return (new linked.map.LinkedMap(head__$1,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(delegate_map,k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Keyword(null,"left","left",-399115937)], null),lk),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lk,new cljs.core.Keyword(null,"right","right",-452581833)], null),rk)));
}
} else {
return this$;
}
});
linked.map.map_entry = (function linked$map$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
linked.map.visit_node = (function linked$map$visit_node(delegate_map,current,last,direction){
var vec__24402 = cljs.core.find(delegate_map,current);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24402,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24402,(1),null);
var entry = linked.map.map_entry(k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node));
var next = (direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(node) : direction.call(null,node));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,last)){
return (new cljs.core.List(null,entry,null,(1),null));
} else {
return cljs.core.cons(entry,(new cljs.core.LazySeq(null,((function (vec__24402,k,node,entry,next){
return (function (){
return (linked.map.visit_node.cljs$core$IFn$_invoke$arity$4 ? linked.map.visit_node.cljs$core$IFn$_invoke$arity$4(delegate_map,next,last,direction) : linked.map.visit_node.call(null,delegate_map,next,last,direction));
});})(vec__24402,k,node,entry,next))
,null,null)));
}
});
linked.map.seq_STAR_ = (function linked$map$seq_STAR_(this$){
var delegate_map = this$.delegate_map;
var head = this$.head;
var tail = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
if(cljs.core.seq(delegate_map)){
return linked.map.visit_node(delegate_map,head,tail,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return null;
}
});
linked.map.rseq_STAR_ = (function linked$map$rseq_STAR_(this$){
var delegate_map = this$.delegate_map;
var head = this$.head;
var tail = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
if(cljs.core.seq(delegate_map)){
return linked.map.visit_node(delegate_map,tail,head,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return null;
}
});
linked.map.empty_linked_map = (new linked.map.LinkedMap(null,cljs.core.PersistentHashMap.EMPTY));
linked.map.__GT_linked_map = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,linked.map.empty_linked_map);
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("linked","map","linked/map",-195852787,null),linked.map.__GT_linked_map);

//# sourceMappingURL=linked.map.js.map
