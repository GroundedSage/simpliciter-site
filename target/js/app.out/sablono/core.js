// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__13615__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__13613 = cljs.core.seq(vec__13612);
var first__13614 = cljs.core.first(seq__13613);
var seq__13613__$1 = cljs.core.next(seq__13613);
var tag = first__13614;
var body = seq__13613__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13616__i = 0, G__13616__a = new Array(arguments.length -  0);
while (G__13616__i < G__13616__a.length) {G__13616__a[G__13616__i] = arguments[G__13616__i + 0]; ++G__13616__i;}
  args = new cljs.core.IndexedSeq(G__13616__a,0);
} 
return G__13615__delegate.call(this,args);};
G__13615.cljs$lang$maxFixedArity = 0;
G__13615.cljs$lang$applyTo = (function (arglist__13617){
var args = cljs.core.seq(arglist__13617);
return G__13615__delegate(args);
});
G__13615.cljs$core$IFn$_invoke$arity$variadic = G__13615__delegate;
return G__13615;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7657__auto__ = (function sablono$core$update_arglists_$_iter__13624(s__13625){
return (new cljs.core.LazySeq(null,(function (){
var s__13625__$1 = s__13625;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13625__$1);
if(temp__4657__auto__){
var s__13625__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13625__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13625__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13627 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13626 = (0);
while(true){
if((i__13626 < size__7656__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13626);
cljs.core.chunk_append(b__13627,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__13630 = (i__13626 + (1));
i__13626 = G__13630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13627),sablono$core$update_arglists_$_iter__13624(cljs.core.chunk_rest(s__13625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13627),null);
}
} else {
var args = cljs.core.first(s__13625__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__13624(cljs.core.rest(s__13625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7657__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7989__auto__ = [];
var len__7982__auto___13638 = arguments.length;
var i__7983__auto___13639 = (0);
while(true){
if((i__7983__auto___13639 < len__7982__auto___13638)){
args__7989__auto__.push((arguments[i__7983__auto___13639]));

var G__13640 = (i__7983__auto___13639 + (1));
i__7983__auto___13639 = G__13640;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((0) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7990__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7657__auto__ = (function sablono$core$iter__13632(s__13633){
return (new cljs.core.LazySeq(null,(function (){
var s__13633__$1 = s__13633;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13633__$1);
if(temp__4657__auto__){
var s__13633__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13633__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13633__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13635 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13634 = (0);
while(true){
if((i__13634 < size__7656__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13634);
cljs.core.chunk_append(b__13635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__13641 = (i__13634 + (1));
i__13634 = G__13641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13635),sablono$core$iter__13632(cljs.core.chunk_rest(s__13633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13635),null);
}
} else {
var style = cljs.core.first(s__13633__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__13632(cljs.core.rest(s__13633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7657__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq13631){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13631));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13646 = goog.dom.getDocument().body;
var G__13647 = (function (){var G__13648 = "script";
var G__13649 = ({"src": src});
return goog.dom.createDom(G__13648,G__13649);
})();
return goog.dom.appendChild(G__13646,G__13647);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to13650 = (function sablono$core$link_to13650(var_args){
var args__7989__auto__ = [];
var len__7982__auto___13653 = arguments.length;
var i__7983__auto___13654 = (0);
while(true){
if((i__7983__auto___13654 < len__7982__auto___13653)){
args__7989__auto__.push((arguments[i__7983__auto___13654]));

var G__13655 = (i__7983__auto___13654 + (1));
i__7983__auto___13654 = G__13655;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((1) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13650.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7990__auto__);
});

sablono.core.link_to13650.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to13650.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13650.cljs$lang$applyTo = (function (seq13651){
var G__13652 = cljs.core.first(seq13651);
var seq13651__$1 = cljs.core.next(seq13651);
return sablono.core.link_to13650.cljs$core$IFn$_invoke$arity$variadic(G__13652,seq13651__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13650);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13656 = (function sablono$core$mail_to13656(var_args){
var args__7989__auto__ = [];
var len__7982__auto___13663 = arguments.length;
var i__7983__auto___13664 = (0);
while(true){
if((i__7983__auto___13664 < len__7982__auto___13663)){
args__7989__auto__.push((arguments[i__7983__auto___13664]));

var G__13665 = (i__7983__auto___13664 + (1));
i__7983__auto___13664 = G__13665;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((1) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13656.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7990__auto__);
});

sablono.core.mail_to13656.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13659){
var vec__13660 = p__13659;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13660,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6874__auto__ = content;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13656.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13656.cljs$lang$applyTo = (function (seq13657){
var G__13658 = cljs.core.first(seq13657);
var seq13657__$1 = cljs.core.next(seq13657);
return sablono.core.mail_to13656.cljs$core$IFn$_invoke$arity$variadic(G__13658,seq13657__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13656);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13666 = (function sablono$core$unordered_list13666(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7657__auto__ = (function sablono$core$unordered_list13666_$_iter__13673(s__13674){
return (new cljs.core.LazySeq(null,(function (){
var s__13674__$1 = s__13674;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13674__$1);
if(temp__4657__auto__){
var s__13674__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13674__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13674__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13676 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13675 = (0);
while(true){
if((i__13675 < size__7656__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13675);
cljs.core.chunk_append(b__13676,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13679 = (i__13675 + (1));
i__13675 = G__13679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13676),sablono$core$unordered_list13666_$_iter__13673(cljs.core.chunk_rest(s__13674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13676),null);
}
} else {
var x = cljs.core.first(s__13674__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13666_$_iter__13673(cljs.core.rest(s__13674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7657__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13666);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13680 = (function sablono$core$ordered_list13680(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7657__auto__ = (function sablono$core$ordered_list13680_$_iter__13687(s__13688){
return (new cljs.core.LazySeq(null,(function (){
var s__13688__$1 = s__13688;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13688__$1);
if(temp__4657__auto__){
var s__13688__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13688__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13688__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13690 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13689 = (0);
while(true){
if((i__13689 < size__7656__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13689);
cljs.core.chunk_append(b__13690,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13693 = (i__13689 + (1));
i__13689 = G__13693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13690),sablono$core$ordered_list13680_$_iter__13687(cljs.core.chunk_rest(s__13688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13690),null);
}
} else {
var x = cljs.core.first(s__13688__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13680_$_iter__13687(cljs.core.rest(s__13688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7657__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13680);
/**
 * Create an image element.
 */
sablono.core.image13694 = (function sablono$core$image13694(var_args){
var args13695 = [];
var len__7982__auto___13698 = arguments.length;
var i__7983__auto___13699 = (0);
while(true){
if((i__7983__auto___13699 < len__7982__auto___13698)){
args13695.push((arguments[i__7983__auto___13699]));

var G__13700 = (i__7983__auto___13699 + (1));
i__7983__auto___13699 = G__13700;
continue;
} else {
}
break;
}

var G__13697 = args13695.length;
switch (G__13697) {
case 1:
return sablono.core.image13694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13695.length)].join('')));

}
});

sablono.core.image13694.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13694.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13694.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13694);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13702_SHARP_,p2__13703_SHARP_){
return [cljs.core.str(p1__13702_SHARP_),cljs.core.str("["),cljs.core.str(p2__13703_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13704_SHARP_,p2__13705_SHARP_){
return [cljs.core.str(p1__13704_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13705_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6874__auto__ = value;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field13706 = (function sablono$core$color_field13706(var_args){
var args13707 = [];
var len__7982__auto___13774 = arguments.length;
var i__7983__auto___13775 = (0);
while(true){
if((i__7983__auto___13775 < len__7982__auto___13774)){
args13707.push((arguments[i__7983__auto___13775]));

var G__13776 = (i__7983__auto___13775 + (1));
i__7983__auto___13775 = G__13776;
continue;
} else {
}
break;
}

var G__13709 = args13707.length;
switch (G__13709) {
case 1:
return sablono.core.color_field13706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13707.length)].join('')));

}
});

sablono.core.color_field13706.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.color_field13706.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.color_field13706.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.color_field13706.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13706);

/**
 * Creates a date input field.
 */
sablono.core.date_field13710 = (function sablono$core$date_field13710(var_args){
var args13711 = [];
var len__7982__auto___13778 = arguments.length;
var i__7983__auto___13779 = (0);
while(true){
if((i__7983__auto___13779 < len__7982__auto___13778)){
args13711.push((arguments[i__7983__auto___13779]));

var G__13780 = (i__7983__auto___13779 + (1));
i__7983__auto___13779 = G__13780;
continue;
} else {
}
break;
}

var G__13713 = args13711.length;
switch (G__13713) {
case 1:
return sablono.core.date_field13710.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13710.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13711.length)].join('')));

}
});

sablono.core.date_field13710.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.date_field13710.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.date_field13710.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.date_field13710.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13710);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13714 = (function sablono$core$datetime_field13714(var_args){
var args13715 = [];
var len__7982__auto___13782 = arguments.length;
var i__7983__auto___13783 = (0);
while(true){
if((i__7983__auto___13783 < len__7982__auto___13782)){
args13715.push((arguments[i__7983__auto___13783]));

var G__13784 = (i__7983__auto___13783 + (1));
i__7983__auto___13783 = G__13784;
continue;
} else {
}
break;
}

var G__13717 = args13715.length;
switch (G__13717) {
case 1:
return sablono.core.datetime_field13714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13715.length)].join('')));

}
});

sablono.core.datetime_field13714.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.datetime_field13714.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.datetime_field13714.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.datetime_field13714.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13714);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13718 = (function sablono$core$datetime_local_field13718(var_args){
var args13719 = [];
var len__7982__auto___13786 = arguments.length;
var i__7983__auto___13787 = (0);
while(true){
if((i__7983__auto___13787 < len__7982__auto___13786)){
args13719.push((arguments[i__7983__auto___13787]));

var G__13788 = (i__7983__auto___13787 + (1));
i__7983__auto___13787 = G__13788;
continue;
} else {
}
break;
}

var G__13721 = args13719.length;
switch (G__13721) {
case 1:
return sablono.core.datetime_local_field13718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13719.length)].join('')));

}
});

sablono.core.datetime_local_field13718.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.datetime_local_field13718.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.datetime_local_field13718.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.datetime_local_field13718.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13718);

/**
 * Creates a email input field.
 */
sablono.core.email_field13722 = (function sablono$core$email_field13722(var_args){
var args13723 = [];
var len__7982__auto___13790 = arguments.length;
var i__7983__auto___13791 = (0);
while(true){
if((i__7983__auto___13791 < len__7982__auto___13790)){
args13723.push((arguments[i__7983__auto___13791]));

var G__13792 = (i__7983__auto___13791 + (1));
i__7983__auto___13791 = G__13792;
continue;
} else {
}
break;
}

var G__13725 = args13723.length;
switch (G__13725) {
case 1:
return sablono.core.email_field13722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13723.length)].join('')));

}
});

sablono.core.email_field13722.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.email_field13722.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.email_field13722.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.email_field13722.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13722);

/**
 * Creates a file input field.
 */
sablono.core.file_field13726 = (function sablono$core$file_field13726(var_args){
var args13727 = [];
var len__7982__auto___13794 = arguments.length;
var i__7983__auto___13795 = (0);
while(true){
if((i__7983__auto___13795 < len__7982__auto___13794)){
args13727.push((arguments[i__7983__auto___13795]));

var G__13796 = (i__7983__auto___13795 + (1));
i__7983__auto___13795 = G__13796;
continue;
} else {
}
break;
}

var G__13729 = args13727.length;
switch (G__13729) {
case 1:
return sablono.core.file_field13726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13727.length)].join('')));

}
});

sablono.core.file_field13726.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.file_field13726.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.file_field13726.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.file_field13726.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13726);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13730 = (function sablono$core$hidden_field13730(var_args){
var args13731 = [];
var len__7982__auto___13798 = arguments.length;
var i__7983__auto___13799 = (0);
while(true){
if((i__7983__auto___13799 < len__7982__auto___13798)){
args13731.push((arguments[i__7983__auto___13799]));

var G__13800 = (i__7983__auto___13799 + (1));
i__7983__auto___13799 = G__13800;
continue;
} else {
}
break;
}

var G__13733 = args13731.length;
switch (G__13733) {
case 1:
return sablono.core.hidden_field13730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13731.length)].join('')));

}
});

sablono.core.hidden_field13730.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.hidden_field13730.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.hidden_field13730.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.hidden_field13730.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13730);

/**
 * Creates a month input field.
 */
sablono.core.month_field13734 = (function sablono$core$month_field13734(var_args){
var args13735 = [];
var len__7982__auto___13802 = arguments.length;
var i__7983__auto___13803 = (0);
while(true){
if((i__7983__auto___13803 < len__7982__auto___13802)){
args13735.push((arguments[i__7983__auto___13803]));

var G__13804 = (i__7983__auto___13803 + (1));
i__7983__auto___13803 = G__13804;
continue;
} else {
}
break;
}

var G__13737 = args13735.length;
switch (G__13737) {
case 1:
return sablono.core.month_field13734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13735.length)].join('')));

}
});

sablono.core.month_field13734.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.month_field13734.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.month_field13734.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.month_field13734.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13734);

/**
 * Creates a number input field.
 */
sablono.core.number_field13738 = (function sablono$core$number_field13738(var_args){
var args13739 = [];
var len__7982__auto___13806 = arguments.length;
var i__7983__auto___13807 = (0);
while(true){
if((i__7983__auto___13807 < len__7982__auto___13806)){
args13739.push((arguments[i__7983__auto___13807]));

var G__13808 = (i__7983__auto___13807 + (1));
i__7983__auto___13807 = G__13808;
continue;
} else {
}
break;
}

var G__13741 = args13739.length;
switch (G__13741) {
case 1:
return sablono.core.number_field13738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13739.length)].join('')));

}
});

sablono.core.number_field13738.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.number_field13738.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.number_field13738.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.number_field13738.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13738);

/**
 * Creates a password input field.
 */
sablono.core.password_field13742 = (function sablono$core$password_field13742(var_args){
var args13743 = [];
var len__7982__auto___13810 = arguments.length;
var i__7983__auto___13811 = (0);
while(true){
if((i__7983__auto___13811 < len__7982__auto___13810)){
args13743.push((arguments[i__7983__auto___13811]));

var G__13812 = (i__7983__auto___13811 + (1));
i__7983__auto___13811 = G__13812;
continue;
} else {
}
break;
}

var G__13745 = args13743.length;
switch (G__13745) {
case 1:
return sablono.core.password_field13742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13743.length)].join('')));

}
});

sablono.core.password_field13742.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.password_field13742.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.password_field13742.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.password_field13742.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13742);

/**
 * Creates a range input field.
 */
sablono.core.range_field13746 = (function sablono$core$range_field13746(var_args){
var args13747 = [];
var len__7982__auto___13814 = arguments.length;
var i__7983__auto___13815 = (0);
while(true){
if((i__7983__auto___13815 < len__7982__auto___13814)){
args13747.push((arguments[i__7983__auto___13815]));

var G__13816 = (i__7983__auto___13815 + (1));
i__7983__auto___13815 = G__13816;
continue;
} else {
}
break;
}

var G__13749 = args13747.length;
switch (G__13749) {
case 1:
return sablono.core.range_field13746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13747.length)].join('')));

}
});

sablono.core.range_field13746.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.range_field13746.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.range_field13746.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.range_field13746.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13746);

/**
 * Creates a search input field.
 */
sablono.core.search_field13750 = (function sablono$core$search_field13750(var_args){
var args13751 = [];
var len__7982__auto___13818 = arguments.length;
var i__7983__auto___13819 = (0);
while(true){
if((i__7983__auto___13819 < len__7982__auto___13818)){
args13751.push((arguments[i__7983__auto___13819]));

var G__13820 = (i__7983__auto___13819 + (1));
i__7983__auto___13819 = G__13820;
continue;
} else {
}
break;
}

var G__13753 = args13751.length;
switch (G__13753) {
case 1:
return sablono.core.search_field13750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13751.length)].join('')));

}
});

sablono.core.search_field13750.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.search_field13750.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.search_field13750.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.search_field13750.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13750);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13754 = (function sablono$core$tel_field13754(var_args){
var args13755 = [];
var len__7982__auto___13822 = arguments.length;
var i__7983__auto___13823 = (0);
while(true){
if((i__7983__auto___13823 < len__7982__auto___13822)){
args13755.push((arguments[i__7983__auto___13823]));

var G__13824 = (i__7983__auto___13823 + (1));
i__7983__auto___13823 = G__13824;
continue;
} else {
}
break;
}

var G__13757 = args13755.length;
switch (G__13757) {
case 1:
return sablono.core.tel_field13754.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13754.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13755.length)].join('')));

}
});

sablono.core.tel_field13754.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.tel_field13754.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.tel_field13754.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.tel_field13754.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13754);

/**
 * Creates a text input field.
 */
sablono.core.text_field13758 = (function sablono$core$text_field13758(var_args){
var args13759 = [];
var len__7982__auto___13826 = arguments.length;
var i__7983__auto___13827 = (0);
while(true){
if((i__7983__auto___13827 < len__7982__auto___13826)){
args13759.push((arguments[i__7983__auto___13827]));

var G__13828 = (i__7983__auto___13827 + (1));
i__7983__auto___13827 = G__13828;
continue;
} else {
}
break;
}

var G__13761 = args13759.length;
switch (G__13761) {
case 1:
return sablono.core.text_field13758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13759.length)].join('')));

}
});

sablono.core.text_field13758.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.text_field13758.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.text_field13758.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.text_field13758.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13758);

/**
 * Creates a time input field.
 */
sablono.core.time_field13762 = (function sablono$core$time_field13762(var_args){
var args13763 = [];
var len__7982__auto___13830 = arguments.length;
var i__7983__auto___13831 = (0);
while(true){
if((i__7983__auto___13831 < len__7982__auto___13830)){
args13763.push((arguments[i__7983__auto___13831]));

var G__13832 = (i__7983__auto___13831 + (1));
i__7983__auto___13831 = G__13832;
continue;
} else {
}
break;
}

var G__13765 = args13763.length;
switch (G__13765) {
case 1:
return sablono.core.time_field13762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13763.length)].join('')));

}
});

sablono.core.time_field13762.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.time_field13762.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.time_field13762.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.time_field13762.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13762);

/**
 * Creates a url input field.
 */
sablono.core.url_field13766 = (function sablono$core$url_field13766(var_args){
var args13767 = [];
var len__7982__auto___13834 = arguments.length;
var i__7983__auto___13835 = (0);
while(true){
if((i__7983__auto___13835 < len__7982__auto___13834)){
args13767.push((arguments[i__7983__auto___13835]));

var G__13836 = (i__7983__auto___13835 + (1));
i__7983__auto___13835 = G__13836;
continue;
} else {
}
break;
}

var G__13769 = args13767.length;
switch (G__13769) {
case 1:
return sablono.core.url_field13766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13767.length)].join('')));

}
});

sablono.core.url_field13766.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.url_field13766.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.url_field13766.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.url_field13766.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13766);

/**
 * Creates a week input field.
 */
sablono.core.week_field13770 = (function sablono$core$week_field13770(var_args){
var args13771 = [];
var len__7982__auto___13838 = arguments.length;
var i__7983__auto___13839 = (0);
while(true){
if((i__7983__auto___13839 < len__7982__auto___13838)){
args13771.push((arguments[i__7983__auto___13839]));

var G__13840 = (i__7983__auto___13839 + (1));
i__7983__auto___13839 = G__13840;
continue;
} else {
}
break;
}

var G__13773 = args13771.length;
switch (G__13773) {
case 1:
return sablono.core.week_field13770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13771.length)].join('')));

}
});

sablono.core.week_field13770.cljs$core$IFn$_invoke$arity$1 = (function (name__13599__auto__){
return sablono.core.week_field13770.cljs$core$IFn$_invoke$arity$2(name__13599__auto__,null);
});

sablono.core.week_field13770.cljs$core$IFn$_invoke$arity$2 = (function (name__13599__auto__,value__13600__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__13599__auto__,value__13600__auto__);
});

sablono.core.week_field13770.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13770);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13842 = (function sablono$core$check_box13842(var_args){
var args13843 = [];
var len__7982__auto___13846 = arguments.length;
var i__7983__auto___13847 = (0);
while(true){
if((i__7983__auto___13847 < len__7982__auto___13846)){
args13843.push((arguments[i__7983__auto___13847]));

var G__13848 = (i__7983__auto___13847 + (1));
i__7983__auto___13847 = G__13848;
continue;
} else {
}
break;
}

var G__13845 = args13843.length;
switch (G__13845) {
case 1:
return sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13843.length)].join('')));

}
});

sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13842.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6874__auto__ = value;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13842.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13842);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13850 = (function sablono$core$radio_button13850(var_args){
var args13851 = [];
var len__7982__auto___13854 = arguments.length;
var i__7983__auto___13855 = (0);
while(true){
if((i__7983__auto___13855 < len__7982__auto___13854)){
args13851.push((arguments[i__7983__auto___13855]));

var G__13856 = (i__7983__auto___13855 + (1));
i__7983__auto___13855 = G__13856;
continue;
} else {
}
break;
}

var G__13853 = args13851.length;
switch (G__13853) {
case 1:
return sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13851.length)].join('')));

}
});

sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13850.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6874__auto__ = value;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13850.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13850);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13859 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13859);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13860 = (function sablono$core$select_options13860(coll){
var iter__7657__auto__ = (function sablono$core$select_options13860_$_iter__13879(s__13880){
return (new cljs.core.LazySeq(null,(function (){
var s__13880__$1 = s__13880;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13880__$1);
if(temp__4657__auto__){
var s__13880__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13880__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13880__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13882 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13881 = (0);
while(true){
if((i__13881 < size__7656__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13881);
cljs.core.chunk_append(b__13882,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13891 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13891,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13891,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13891,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options13860.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options13860.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options13860.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13897 = (i__13881 + (1));
i__13881 = G__13897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13882),sablono$core$select_options13860_$_iter__13879(cljs.core.chunk_rest(s__13880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13882),null);
}
} else {
var x = cljs.core.first(s__13880__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13894 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13894,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13894,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13894,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options13860.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options13860.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options13860.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13860_$_iter__13879(cljs.core.rest(s__13880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7657__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13860);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13898 = (function sablono$core$drop_down13898(var_args){
var args13899 = [];
var len__7982__auto___13902 = arguments.length;
var i__7983__auto___13903 = (0);
while(true){
if((i__7983__auto___13903 < len__7982__auto___13902)){
args13899.push((arguments[i__7983__auto___13903]));

var G__13904 = (i__7983__auto___13903 + (1));
i__7983__auto___13903 = G__13904;
continue;
} else {
}
break;
}

var G__13901 = args13899.length;
switch (G__13901) {
case 2:
return sablono.core.drop_down13898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13898.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13899.length)].join('')));

}
});

sablono.core.drop_down13898.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13898.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13898.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13898.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13898);
/**
 * Creates a text area element.
 */
sablono.core.text_area13906 = (function sablono$core$text_area13906(var_args){
var args13907 = [];
var len__7982__auto___13910 = arguments.length;
var i__7983__auto___13911 = (0);
while(true){
if((i__7983__auto___13911 < len__7982__auto___13910)){
args13907.push((arguments[i__7983__auto___13911]));

var G__13912 = (i__7983__auto___13911 + (1));
i__7983__auto___13911 = G__13912;
continue;
} else {
}
break;
}

var G__13909 = args13907.length;
switch (G__13909) {
case 1:
return sablono.core.text_area13906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13907.length)].join('')));

}
});

sablono.core.text_area13906.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13906.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13906.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6874__auto__ = value;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area13906.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13906);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13914 = (function sablono$core$label13914(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13914);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13915 = (function sablono$core$submit_button13915(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13915);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13916 = (function sablono$core$reset_button13916(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13916);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13917 = (function sablono$core$form_to13917(var_args){
var args__7989__auto__ = [];
var len__7982__auto___13927 = arguments.length;
var i__7983__auto___13928 = (0);
while(true){
if((i__7983__auto___13928 < len__7982__auto___13927)){
args__7989__auto__.push((arguments[i__7983__auto___13928]));

var G__13929 = (i__7983__auto___13928 + (1));
i__7983__auto___13928 = G__13929;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((1) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to13917.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7990__auto__);
});

sablono.core.form_to13917.cljs$core$IFn$_invoke$arity$variadic = (function (p__13920,body){
var vec__13921 = p__13920;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13924 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13925 = "_method";
var G__13926 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13924,G__13925,G__13926) : sablono.core.hidden_field.call(null,G__13924,G__13925,G__13926));
})()], null)),body));
});

sablono.core.form_to13917.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13917.cljs$lang$applyTo = (function (seq13918){
var G__13919 = cljs.core.first(seq13918);
var seq13918__$1 = cljs.core.next(seq13918);
return sablono.core.form_to13917.cljs$core$IFn$_invoke$arity$variadic(G__13919,seq13918__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13917);
