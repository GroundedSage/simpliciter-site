// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 *   
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 *   
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args12877 = [];
var len__7982__auto___12908 = arguments.length;
var i__7983__auto___12909 = (0);
while(true){
if((i__7983__auto___12909 < len__7982__auto___12908)){
args12877.push((arguments[i__7983__auto___12909]));

var G__12910 = (i__7983__auto___12909 + (1));
i__7983__auto___12909 = G__12910;
continue;
} else {
}
break;
}

var G__12879 = args12877.length;
switch (G__12879) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12877.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__12880 = opts;
var map__12880__$1 = ((((!((map__12880 == null)))?((((map__12880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12880):map__12880);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12880__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12880__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__12882 = cljs.core.count(refs);
switch (G__12882) {
case (1):
var vec__12883 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12883,(0),null);
return ((function (vec__12883,a,G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_){
return (function (){
var G__12886 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12886) : f.call(null,G__12886));
});
;})(vec__12883,a,G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__12887 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12887,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12887,(1),null);
return ((function (vec__12887,a,b,G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_){
return (function (){
var G__12890 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12891 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12890,G__12891) : f.call(null,G__12890,G__12891));
});
;})(vec__12887,a,b,G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__12892 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,(2),null);
return ((function (vec__12892,a,b,c,G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_){
return (function (){
var G__12895 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12896 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__12897 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12895,G__12896,G__12897) : f.call(null,G__12895,G__12896,G__12897));
});
;})(vec__12892,a,b,c,G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__12882,map__12880,map__12880__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12898 = ref;
var G__12899_12913 = G__12898;
var G__12900_12914 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12899_12913,G__12900_12914) : cljs.core.reset_BANG_.call(null,G__12899_12913,G__12900_12914));

return G__12898;
})():(function (){var G__12901 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12901) : cljs.core.atom.call(null,G__12901));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__12880,map__12880__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__12880,map__12880__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__12880,map__12880__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__12902 = sink;
var G__12903 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12902,G__12903) : cljs.core.reset_BANG_.call(null,G__12902,G__12903));
});})(map__12880,map__12880__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__12904_12915 = cljs.core.seq(refs);
var chunk__12905_12916 = null;
var count__12906_12917 = (0);
var i__12907_12918 = (0);
while(true){
if((i__12907_12918 < count__12906_12917)){
var ref_12919__$1 = chunk__12905_12916.cljs$core$IIndexed$_nth$arity$2(null,i__12907_12918);
cljs.core.add_watch(ref_12919__$1,key,watch);

var G__12920 = seq__12904_12915;
var G__12921 = chunk__12905_12916;
var G__12922 = count__12906_12917;
var G__12923 = (i__12907_12918 + (1));
seq__12904_12915 = G__12920;
chunk__12905_12916 = G__12921;
count__12906_12917 = G__12922;
i__12907_12918 = G__12923;
continue;
} else {
var temp__4657__auto___12924 = cljs.core.seq(seq__12904_12915);
if(temp__4657__auto___12924){
var seq__12904_12925__$1 = temp__4657__auto___12924;
if(cljs.core.chunked_seq_QMARK_(seq__12904_12925__$1)){
var c__7688__auto___12926 = cljs.core.chunk_first(seq__12904_12925__$1);
var G__12927 = cljs.core.chunk_rest(seq__12904_12925__$1);
var G__12928 = c__7688__auto___12926;
var G__12929 = cljs.core.count(c__7688__auto___12926);
var G__12930 = (0);
seq__12904_12915 = G__12927;
chunk__12905_12916 = G__12928;
count__12906_12917 = G__12929;
i__12907_12918 = G__12930;
continue;
} else {
var ref_12931__$1 = cljs.core.first(seq__12904_12925__$1);
cljs.core.add_watch(ref_12931__$1,key,watch);

var G__12932 = cljs.core.next(seq__12904_12925__$1);
var G__12933 = null;
var G__12934 = (0);
var G__12935 = (0);
seq__12904_12915 = G__12932;
chunk__12905_12916 = G__12933;
count__12906_12917 = G__12934;
i__12907_12918 = G__12935;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

