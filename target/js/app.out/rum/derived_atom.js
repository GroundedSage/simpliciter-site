// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args12952 = [];
var len__7982__auto___12983 = arguments.length;
var i__7983__auto___12984 = (0);
while(true){
if((i__7983__auto___12984 < len__7982__auto___12983)){
args12952.push((arguments[i__7983__auto___12984]));

var G__12985 = (i__7983__auto___12984 + (1));
i__7983__auto___12984 = G__12985;
continue;
} else {
}
break;
}

var G__12954 = args12952.length;
switch (G__12954) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12952.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__12955 = opts;
var map__12955__$1 = ((((!((map__12955 == null)))?((((map__12955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12955):map__12955);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12955__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12955__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__12957 = cljs.core.count(refs);
switch (G__12957) {
case (1):
var vec__12958 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12958,(0),null);
return ((function (vec__12958,a,G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_){
return (function (){
var G__12961 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12961) : f.call(null,G__12961));
});
;})(vec__12958,a,G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__12962 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12962,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12962,(1),null);
return ((function (vec__12962,a,b,G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_){
return (function (){
var G__12965 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12966 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12965,G__12966) : f.call(null,G__12965,G__12966));
});
;})(vec__12962,a,b,G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__12967 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12967,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12967,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12967,(2),null);
return ((function (vec__12967,a,b,c,G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_){
return (function (){
var G__12970 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12971 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__12972 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12970,G__12971,G__12972) : f.call(null,G__12970,G__12971,G__12972));
});
;})(vec__12967,a,b,c,G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__12957,map__12955,map__12955__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12973 = ref;
var G__12974_12988 = G__12973;
var G__12975_12989 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12974_12988,G__12975_12989) : cljs.core.reset_BANG_.call(null,G__12974_12988,G__12975_12989));

return G__12973;
})():(function (){var G__12976 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12976) : cljs.core.atom.call(null,G__12976));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__12955,map__12955__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__12955,map__12955__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__12955,map__12955__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__12977 = sink;
var G__12978 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12977,G__12978) : cljs.core.reset_BANG_.call(null,G__12977,G__12978));
});})(map__12955,map__12955__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__12979_12990 = cljs.core.seq(refs);
var chunk__12980_12991 = null;
var count__12981_12992 = (0);
var i__12982_12993 = (0);
while(true){
if((i__12982_12993 < count__12981_12992)){
var ref_12994__$1 = chunk__12980_12991.cljs$core$IIndexed$_nth$arity$2(null,i__12982_12993);
cljs.core.add_watch(ref_12994__$1,key,watch);

var G__12995 = seq__12979_12990;
var G__12996 = chunk__12980_12991;
var G__12997 = count__12981_12992;
var G__12998 = (i__12982_12993 + (1));
seq__12979_12990 = G__12995;
chunk__12980_12991 = G__12996;
count__12981_12992 = G__12997;
i__12982_12993 = G__12998;
continue;
} else {
var temp__4657__auto___12999 = cljs.core.seq(seq__12979_12990);
if(temp__4657__auto___12999){
var seq__12979_13000__$1 = temp__4657__auto___12999;
if(cljs.core.chunked_seq_QMARK_(seq__12979_13000__$1)){
var c__7688__auto___13001 = cljs.core.chunk_first(seq__12979_13000__$1);
var G__13002 = cljs.core.chunk_rest(seq__12979_13000__$1);
var G__13003 = c__7688__auto___13001;
var G__13004 = cljs.core.count(c__7688__auto___13001);
var G__13005 = (0);
seq__12979_12990 = G__13002;
chunk__12980_12991 = G__13003;
count__12981_12992 = G__13004;
i__12982_12993 = G__13005;
continue;
} else {
var ref_13006__$1 = cljs.core.first(seq__12979_13000__$1);
cljs.core.add_watch(ref_13006__$1,key,watch);

var G__13007 = cljs.core.next(seq__12979_13000__$1);
var G__13008 = null;
var G__13009 = (0);
var G__13010 = (0);
seq__12979_12990 = G__13007;
chunk__12980_12991 = G__13008;
count__12981_12992 = G__13009;
i__12982_12993 = G__13010;
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

