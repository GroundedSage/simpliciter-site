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
var G__13656__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13653 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__13654 = cljs.core.seq(vec__13653);
var first__13655 = cljs.core.first(seq__13654);
var seq__13654__$1 = cljs.core.next(seq__13654);
var tag = first__13655;
var body = seq__13654__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13657__i = 0, G__13657__a = new Array(arguments.length -  0);
while (G__13657__i < G__13657__a.length) {G__13657__a[G__13657__i] = arguments[G__13657__i + 0]; ++G__13657__i;}
  args = new cljs.core.IndexedSeq(G__13657__a,0);
} 
return G__13656__delegate.call(this,args);};
G__13656.cljs$lang$maxFixedArity = 0;
G__13656.cljs$lang$applyTo = (function (arglist__13658){
var args = cljs.core.seq(arglist__13658);
return G__13656__delegate(args);
});
G__13656.cljs$core$IFn$_invoke$arity$variadic = G__13656__delegate;
return G__13656;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7657__auto__ = (function sablono$core$update_arglists_$_iter__13665(s__13666){
return (new cljs.core.LazySeq(null,(function (){
var s__13666__$1 = s__13666;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13666__$1);
if(temp__4657__auto__){
var s__13666__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13666__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13666__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13668 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13667 = (0);
while(true){
if((i__13667 < size__7656__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13667);
cljs.core.chunk_append(b__13668,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__13671 = (i__13667 + (1));
i__13667 = G__13671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13668),sablono$core$update_arglists_$_iter__13665(cljs.core.chunk_rest(s__13666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13668),null);
}
} else {
var args = cljs.core.first(s__13666__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__13665(cljs.core.rest(s__13666__$2)));
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
var len__7982__auto___13679 = arguments.length;
var i__7983__auto___13680 = (0);
while(true){
if((i__7983__auto___13680 < len__7982__auto___13679)){
args__7989__auto__.push((arguments[i__7983__auto___13680]));

var G__13681 = (i__7983__auto___13680 + (1));
i__7983__auto___13680 = G__13681;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((0) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7990__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7657__auto__ = (function sablono$core$iter__13673(s__13674){
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
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13675);
cljs.core.chunk_append(b__13676,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__13682 = (i__13675 + (1));
i__13675 = G__13682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13676),sablono$core$iter__13673(cljs.core.chunk_rest(s__13674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13676),null);
}
} else {
var style = cljs.core.first(s__13674__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__13673(cljs.core.rest(s__13674__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq13672){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13672));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13687 = goog.dom.getDocument().body;
var G__13688 = (function (){var G__13689 = "script";
var G__13690 = ({"src": src});
return goog.dom.createDom(G__13689,G__13690);
})();
return goog.dom.appendChild(G__13687,G__13688);
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
sablono.core.link_to13691 = (function sablono$core$link_to13691(var_args){
var args__7989__auto__ = [];
var len__7982__auto___13694 = arguments.length;
var i__7983__auto___13695 = (0);
while(true){
if((i__7983__auto___13695 < len__7982__auto___13694)){
args__7989__auto__.push((arguments[i__7983__auto___13695]));

var G__13696 = (i__7983__auto___13695 + (1));
i__7983__auto___13695 = G__13696;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((1) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13691.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7990__auto__);
});

sablono.core.link_to13691.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to13691.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13691.cljs$lang$applyTo = (function (seq13692){
var G__13693 = cljs.core.first(seq13692);
var seq13692__$1 = cljs.core.next(seq13692);
return sablono.core.link_to13691.cljs$core$IFn$_invoke$arity$variadic(G__13693,seq13692__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13691);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13697 = (function sablono$core$mail_to13697(var_args){
var args__7989__auto__ = [];
var len__7982__auto___13704 = arguments.length;
var i__7983__auto___13705 = (0);
while(true){
if((i__7983__auto___13705 < len__7982__auto___13704)){
args__7989__auto__.push((arguments[i__7983__auto___13705]));

var G__13706 = (i__7983__auto___13705 + (1));
i__7983__auto___13705 = G__13706;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((1) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13697.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7990__auto__);
});

sablono.core.mail_to13697.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13700){
var vec__13701 = p__13700;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6874__auto__ = content;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13697.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13697.cljs$lang$applyTo = (function (seq13698){
var G__13699 = cljs.core.first(seq13698);
var seq13698__$1 = cljs.core.next(seq13698);
return sablono.core.mail_to13697.cljs$core$IFn$_invoke$arity$variadic(G__13699,seq13698__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13697);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13707 = (function sablono$core$unordered_list13707(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7657__auto__ = (function sablono$core$unordered_list13707_$_iter__13714(s__13715){
return (new cljs.core.LazySeq(null,(function (){
var s__13715__$1 = s__13715;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13715__$1);
if(temp__4657__auto__){
var s__13715__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13715__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13715__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13717 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13716 = (0);
while(true){
if((i__13716 < size__7656__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13716);
cljs.core.chunk_append(b__13717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13720 = (i__13716 + (1));
i__13716 = G__13720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13717),sablono$core$unordered_list13707_$_iter__13714(cljs.core.chunk_rest(s__13715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13717),null);
}
} else {
var x = cljs.core.first(s__13715__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13707_$_iter__13714(cljs.core.rest(s__13715__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13707);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13721 = (function sablono$core$ordered_list13721(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7657__auto__ = (function sablono$core$ordered_list13721_$_iter__13728(s__13729){
return (new cljs.core.LazySeq(null,(function (){
var s__13729__$1 = s__13729;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13729__$1);
if(temp__4657__auto__){
var s__13729__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13729__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13729__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13731 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13730 = (0);
while(true){
if((i__13730 < size__7656__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13730);
cljs.core.chunk_append(b__13731,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13734 = (i__13730 + (1));
i__13730 = G__13734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13731),sablono$core$ordered_list13721_$_iter__13728(cljs.core.chunk_rest(s__13729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13731),null);
}
} else {
var x = cljs.core.first(s__13729__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13721_$_iter__13728(cljs.core.rest(s__13729__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13721);
/**
 * Create an image element.
 */
sablono.core.image13735 = (function sablono$core$image13735(var_args){
var args13736 = [];
var len__7982__auto___13739 = arguments.length;
var i__7983__auto___13740 = (0);
while(true){
if((i__7983__auto___13740 < len__7982__auto___13739)){
args13736.push((arguments[i__7983__auto___13740]));

var G__13741 = (i__7983__auto___13740 + (1));
i__7983__auto___13740 = G__13741;
continue;
} else {
}
break;
}

var G__13738 = args13736.length;
switch (G__13738) {
case 1:
return sablono.core.image13735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13736.length)].join('')));

}
});

sablono.core.image13735.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13735.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13735.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13735);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13743_SHARP_,p2__13744_SHARP_){
return [cljs.core.str(p1__13743_SHARP_),cljs.core.str("["),cljs.core.str(p2__13744_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13745_SHARP_,p2__13746_SHARP_){
return [cljs.core.str(p1__13745_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13746_SHARP_)].join('');
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
sablono.core.color_field13747 = (function sablono$core$color_field13747(var_args){
var args13748 = [];
var len__7982__auto___13815 = arguments.length;
var i__7983__auto___13816 = (0);
while(true){
if((i__7983__auto___13816 < len__7982__auto___13815)){
args13748.push((arguments[i__7983__auto___13816]));

var G__13817 = (i__7983__auto___13816 + (1));
i__7983__auto___13816 = G__13817;
continue;
} else {
}
break;
}

var G__13750 = args13748.length;
switch (G__13750) {
case 1:
return sablono.core.color_field13747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13748.length)].join('')));

}
});

sablono.core.color_field13747.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.color_field13747.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.color_field13747.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.color_field13747.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13747);

/**
 * Creates a date input field.
 */
sablono.core.date_field13751 = (function sablono$core$date_field13751(var_args){
var args13752 = [];
var len__7982__auto___13819 = arguments.length;
var i__7983__auto___13820 = (0);
while(true){
if((i__7983__auto___13820 < len__7982__auto___13819)){
args13752.push((arguments[i__7983__auto___13820]));

var G__13821 = (i__7983__auto___13820 + (1));
i__7983__auto___13820 = G__13821;
continue;
} else {
}
break;
}

var G__13754 = args13752.length;
switch (G__13754) {
case 1:
return sablono.core.date_field13751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13752.length)].join('')));

}
});

sablono.core.date_field13751.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.date_field13751.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.date_field13751.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.date_field13751.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13751);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13755 = (function sablono$core$datetime_field13755(var_args){
var args13756 = [];
var len__7982__auto___13823 = arguments.length;
var i__7983__auto___13824 = (0);
while(true){
if((i__7983__auto___13824 < len__7982__auto___13823)){
args13756.push((arguments[i__7983__auto___13824]));

var G__13825 = (i__7983__auto___13824 + (1));
i__7983__auto___13824 = G__13825;
continue;
} else {
}
break;
}

var G__13758 = args13756.length;
switch (G__13758) {
case 1:
return sablono.core.datetime_field13755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13756.length)].join('')));

}
});

sablono.core.datetime_field13755.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.datetime_field13755.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.datetime_field13755.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.datetime_field13755.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13755);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13759 = (function sablono$core$datetime_local_field13759(var_args){
var args13760 = [];
var len__7982__auto___13827 = arguments.length;
var i__7983__auto___13828 = (0);
while(true){
if((i__7983__auto___13828 < len__7982__auto___13827)){
args13760.push((arguments[i__7983__auto___13828]));

var G__13829 = (i__7983__auto___13828 + (1));
i__7983__auto___13828 = G__13829;
continue;
} else {
}
break;
}

var G__13762 = args13760.length;
switch (G__13762) {
case 1:
return sablono.core.datetime_local_field13759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13760.length)].join('')));

}
});

sablono.core.datetime_local_field13759.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.datetime_local_field13759.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.datetime_local_field13759.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.datetime_local_field13759.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13759);

/**
 * Creates a email input field.
 */
sablono.core.email_field13763 = (function sablono$core$email_field13763(var_args){
var args13764 = [];
var len__7982__auto___13831 = arguments.length;
var i__7983__auto___13832 = (0);
while(true){
if((i__7983__auto___13832 < len__7982__auto___13831)){
args13764.push((arguments[i__7983__auto___13832]));

var G__13833 = (i__7983__auto___13832 + (1));
i__7983__auto___13832 = G__13833;
continue;
} else {
}
break;
}

var G__13766 = args13764.length;
switch (G__13766) {
case 1:
return sablono.core.email_field13763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13764.length)].join('')));

}
});

sablono.core.email_field13763.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.email_field13763.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.email_field13763.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.email_field13763.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13763);

/**
 * Creates a file input field.
 */
sablono.core.file_field13767 = (function sablono$core$file_field13767(var_args){
var args13768 = [];
var len__7982__auto___13835 = arguments.length;
var i__7983__auto___13836 = (0);
while(true){
if((i__7983__auto___13836 < len__7982__auto___13835)){
args13768.push((arguments[i__7983__auto___13836]));

var G__13837 = (i__7983__auto___13836 + (1));
i__7983__auto___13836 = G__13837;
continue;
} else {
}
break;
}

var G__13770 = args13768.length;
switch (G__13770) {
case 1:
return sablono.core.file_field13767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13768.length)].join('')));

}
});

sablono.core.file_field13767.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.file_field13767.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.file_field13767.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.file_field13767.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13767);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13771 = (function sablono$core$hidden_field13771(var_args){
var args13772 = [];
var len__7982__auto___13839 = arguments.length;
var i__7983__auto___13840 = (0);
while(true){
if((i__7983__auto___13840 < len__7982__auto___13839)){
args13772.push((arguments[i__7983__auto___13840]));

var G__13841 = (i__7983__auto___13840 + (1));
i__7983__auto___13840 = G__13841;
continue;
} else {
}
break;
}

var G__13774 = args13772.length;
switch (G__13774) {
case 1:
return sablono.core.hidden_field13771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13772.length)].join('')));

}
});

sablono.core.hidden_field13771.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.hidden_field13771.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.hidden_field13771.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.hidden_field13771.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13771);

/**
 * Creates a month input field.
 */
sablono.core.month_field13775 = (function sablono$core$month_field13775(var_args){
var args13776 = [];
var len__7982__auto___13843 = arguments.length;
var i__7983__auto___13844 = (0);
while(true){
if((i__7983__auto___13844 < len__7982__auto___13843)){
args13776.push((arguments[i__7983__auto___13844]));

var G__13845 = (i__7983__auto___13844 + (1));
i__7983__auto___13844 = G__13845;
continue;
} else {
}
break;
}

var G__13778 = args13776.length;
switch (G__13778) {
case 1:
return sablono.core.month_field13775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13776.length)].join('')));

}
});

sablono.core.month_field13775.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.month_field13775.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.month_field13775.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.month_field13775.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13775);

/**
 * Creates a number input field.
 */
sablono.core.number_field13779 = (function sablono$core$number_field13779(var_args){
var args13780 = [];
var len__7982__auto___13847 = arguments.length;
var i__7983__auto___13848 = (0);
while(true){
if((i__7983__auto___13848 < len__7982__auto___13847)){
args13780.push((arguments[i__7983__auto___13848]));

var G__13849 = (i__7983__auto___13848 + (1));
i__7983__auto___13848 = G__13849;
continue;
} else {
}
break;
}

var G__13782 = args13780.length;
switch (G__13782) {
case 1:
return sablono.core.number_field13779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13780.length)].join('')));

}
});

sablono.core.number_field13779.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.number_field13779.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.number_field13779.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.number_field13779.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13779);

/**
 * Creates a password input field.
 */
sablono.core.password_field13783 = (function sablono$core$password_field13783(var_args){
var args13784 = [];
var len__7982__auto___13851 = arguments.length;
var i__7983__auto___13852 = (0);
while(true){
if((i__7983__auto___13852 < len__7982__auto___13851)){
args13784.push((arguments[i__7983__auto___13852]));

var G__13853 = (i__7983__auto___13852 + (1));
i__7983__auto___13852 = G__13853;
continue;
} else {
}
break;
}

var G__13786 = args13784.length;
switch (G__13786) {
case 1:
return sablono.core.password_field13783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13784.length)].join('')));

}
});

sablono.core.password_field13783.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.password_field13783.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.password_field13783.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.password_field13783.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13783);

/**
 * Creates a range input field.
 */
sablono.core.range_field13787 = (function sablono$core$range_field13787(var_args){
var args13788 = [];
var len__7982__auto___13855 = arguments.length;
var i__7983__auto___13856 = (0);
while(true){
if((i__7983__auto___13856 < len__7982__auto___13855)){
args13788.push((arguments[i__7983__auto___13856]));

var G__13857 = (i__7983__auto___13856 + (1));
i__7983__auto___13856 = G__13857;
continue;
} else {
}
break;
}

var G__13790 = args13788.length;
switch (G__13790) {
case 1:
return sablono.core.range_field13787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13788.length)].join('')));

}
});

sablono.core.range_field13787.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.range_field13787.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.range_field13787.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.range_field13787.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13787);

/**
 * Creates a search input field.
 */
sablono.core.search_field13791 = (function sablono$core$search_field13791(var_args){
var args13792 = [];
var len__7982__auto___13859 = arguments.length;
var i__7983__auto___13860 = (0);
while(true){
if((i__7983__auto___13860 < len__7982__auto___13859)){
args13792.push((arguments[i__7983__auto___13860]));

var G__13861 = (i__7983__auto___13860 + (1));
i__7983__auto___13860 = G__13861;
continue;
} else {
}
break;
}

var G__13794 = args13792.length;
switch (G__13794) {
case 1:
return sablono.core.search_field13791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13792.length)].join('')));

}
});

sablono.core.search_field13791.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.search_field13791.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.search_field13791.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.search_field13791.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13791);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13795 = (function sablono$core$tel_field13795(var_args){
var args13796 = [];
var len__7982__auto___13863 = arguments.length;
var i__7983__auto___13864 = (0);
while(true){
if((i__7983__auto___13864 < len__7982__auto___13863)){
args13796.push((arguments[i__7983__auto___13864]));

var G__13865 = (i__7983__auto___13864 + (1));
i__7983__auto___13864 = G__13865;
continue;
} else {
}
break;
}

var G__13798 = args13796.length;
switch (G__13798) {
case 1:
return sablono.core.tel_field13795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13796.length)].join('')));

}
});

sablono.core.tel_field13795.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.tel_field13795.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.tel_field13795.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.tel_field13795.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13795);

/**
 * Creates a text input field.
 */
sablono.core.text_field13799 = (function sablono$core$text_field13799(var_args){
var args13800 = [];
var len__7982__auto___13867 = arguments.length;
var i__7983__auto___13868 = (0);
while(true){
if((i__7983__auto___13868 < len__7982__auto___13867)){
args13800.push((arguments[i__7983__auto___13868]));

var G__13869 = (i__7983__auto___13868 + (1));
i__7983__auto___13868 = G__13869;
continue;
} else {
}
break;
}

var G__13802 = args13800.length;
switch (G__13802) {
case 1:
return sablono.core.text_field13799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13800.length)].join('')));

}
});

sablono.core.text_field13799.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.text_field13799.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.text_field13799.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.text_field13799.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13799);

/**
 * Creates a time input field.
 */
sablono.core.time_field13803 = (function sablono$core$time_field13803(var_args){
var args13804 = [];
var len__7982__auto___13871 = arguments.length;
var i__7983__auto___13872 = (0);
while(true){
if((i__7983__auto___13872 < len__7982__auto___13871)){
args13804.push((arguments[i__7983__auto___13872]));

var G__13873 = (i__7983__auto___13872 + (1));
i__7983__auto___13872 = G__13873;
continue;
} else {
}
break;
}

var G__13806 = args13804.length;
switch (G__13806) {
case 1:
return sablono.core.time_field13803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13804.length)].join('')));

}
});

sablono.core.time_field13803.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.time_field13803.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.time_field13803.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.time_field13803.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13803);

/**
 * Creates a url input field.
 */
sablono.core.url_field13807 = (function sablono$core$url_field13807(var_args){
var args13808 = [];
var len__7982__auto___13875 = arguments.length;
var i__7983__auto___13876 = (0);
while(true){
if((i__7983__auto___13876 < len__7982__auto___13875)){
args13808.push((arguments[i__7983__auto___13876]));

var G__13877 = (i__7983__auto___13876 + (1));
i__7983__auto___13876 = G__13877;
continue;
} else {
}
break;
}

var G__13810 = args13808.length;
switch (G__13810) {
case 1:
return sablono.core.url_field13807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13808.length)].join('')));

}
});

sablono.core.url_field13807.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.url_field13807.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.url_field13807.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.url_field13807.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13807);

/**
 * Creates a week input field.
 */
sablono.core.week_field13811 = (function sablono$core$week_field13811(var_args){
var args13812 = [];
var len__7982__auto___13879 = arguments.length;
var i__7983__auto___13880 = (0);
while(true){
if((i__7983__auto___13880 < len__7982__auto___13879)){
args13812.push((arguments[i__7983__auto___13880]));

var G__13881 = (i__7983__auto___13880 + (1));
i__7983__auto___13880 = G__13881;
continue;
} else {
}
break;
}

var G__13814 = args13812.length;
switch (G__13814) {
case 1:
return sablono.core.week_field13811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13812.length)].join('')));

}
});

sablono.core.week_field13811.cljs$core$IFn$_invoke$arity$1 = (function (name__13640__auto__){
return sablono.core.week_field13811.cljs$core$IFn$_invoke$arity$2(name__13640__auto__,null);
});

sablono.core.week_field13811.cljs$core$IFn$_invoke$arity$2 = (function (name__13640__auto__,value__13641__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__13640__auto__,value__13641__auto__);
});

sablono.core.week_field13811.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13811);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13883 = (function sablono$core$check_box13883(var_args){
var args13884 = [];
var len__7982__auto___13887 = arguments.length;
var i__7983__auto___13888 = (0);
while(true){
if((i__7983__auto___13888 < len__7982__auto___13887)){
args13884.push((arguments[i__7983__auto___13888]));

var G__13889 = (i__7983__auto___13888 + (1));
i__7983__auto___13888 = G__13889;
continue;
} else {
}
break;
}

var G__13886 = args13884.length;
switch (G__13886) {
case 1:
return sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13884.length)].join('')));

}
});

sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13883.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6874__auto__ = value;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13883.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13883);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13891 = (function sablono$core$radio_button13891(var_args){
var args13892 = [];
var len__7982__auto___13895 = arguments.length;
var i__7983__auto___13896 = (0);
while(true){
if((i__7983__auto___13896 < len__7982__auto___13895)){
args13892.push((arguments[i__7983__auto___13896]));

var G__13897 = (i__7983__auto___13896 + (1));
i__7983__auto___13896 = G__13897;
continue;
} else {
}
break;
}

var G__13894 = args13892.length;
switch (G__13894) {
case 1:
return sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13892.length)].join('')));

}
});

sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13891.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6874__auto__ = value;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13891.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13891);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13900 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13900);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13901 = (function sablono$core$select_options13901(coll){
var iter__7657__auto__ = (function sablono$core$select_options13901_$_iter__13920(s__13921){
return (new cljs.core.LazySeq(null,(function (){
var s__13921__$1 = s__13921;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13921__$1);
if(temp__4657__auto__){
var s__13921__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13921__$2)){
var c__7655__auto__ = cljs.core.chunk_first(s__13921__$2);
var size__7656__auto__ = cljs.core.count(c__7655__auto__);
var b__13923 = cljs.core.chunk_buffer(size__7656__auto__);
if((function (){var i__13922 = (0);
while(true){
if((i__13922 < size__7656__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7655__auto__,i__13922);
cljs.core.chunk_append(b__13923,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13932 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13932,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13932,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13932,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options13901.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options13901.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options13901.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13938 = (i__13922 + (1));
i__13922 = G__13938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13923),sablono$core$select_options13901_$_iter__13920(cljs.core.chunk_rest(s__13921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13923),null);
}
} else {
var x = cljs.core.first(s__13921__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13935 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13935,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13935,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13935,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options13901.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options13901.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options13901.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13901_$_iter__13920(cljs.core.rest(s__13921__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13901);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13939 = (function sablono$core$drop_down13939(var_args){
var args13940 = [];
var len__7982__auto___13943 = arguments.length;
var i__7983__auto___13944 = (0);
while(true){
if((i__7983__auto___13944 < len__7982__auto___13943)){
args13940.push((arguments[i__7983__auto___13944]));

var G__13945 = (i__7983__auto___13944 + (1));
i__7983__auto___13944 = G__13945;
continue;
} else {
}
break;
}

var G__13942 = args13940.length;
switch (G__13942) {
case 2:
return sablono.core.drop_down13939.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13939.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13940.length)].join('')));

}
});

sablono.core.drop_down13939.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13939.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13939.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13939.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13939);
/**
 * Creates a text area element.
 */
sablono.core.text_area13947 = (function sablono$core$text_area13947(var_args){
var args13948 = [];
var len__7982__auto___13951 = arguments.length;
var i__7983__auto___13952 = (0);
while(true){
if((i__7983__auto___13952 < len__7982__auto___13951)){
args13948.push((arguments[i__7983__auto___13952]));

var G__13953 = (i__7983__auto___13952 + (1));
i__7983__auto___13952 = G__13953;
continue;
} else {
}
break;
}

var G__13950 = args13948.length;
switch (G__13950) {
case 1:
return sablono.core.text_area13947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13948.length)].join('')));

}
});

sablono.core.text_area13947.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13947.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13947.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6874__auto__ = value;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area13947.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13947);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13955 = (function sablono$core$label13955(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13955);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13956 = (function sablono$core$submit_button13956(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13956);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13957 = (function sablono$core$reset_button13957(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13957);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13958 = (function sablono$core$form_to13958(var_args){
var args__7989__auto__ = [];
var len__7982__auto___13968 = arguments.length;
var i__7983__auto___13969 = (0);
while(true){
if((i__7983__auto___13969 < len__7982__auto___13968)){
args__7989__auto__.push((arguments[i__7983__auto___13969]));

var G__13970 = (i__7983__auto___13969 + (1));
i__7983__auto___13969 = G__13970;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((1) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to13958.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7990__auto__);
});

sablono.core.form_to13958.cljs$core$IFn$_invoke$arity$variadic = (function (p__13961,body){
var vec__13962 = p__13961;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13962,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13962,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13965 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13966 = "_method";
var G__13967 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13965,G__13966,G__13967) : sablono.core.hidden_field.call(null,G__13965,G__13966,G__13967));
})()], null)),body));
});

sablono.core.form_to13958.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13958.cljs$lang$applyTo = (function (seq13959){
var G__13960 = cljs.core.first(seq13959);
var seq13959__$1 = cljs.core.next(seq13959);
return sablono.core.form_to13958.cljs$core$IFn$_invoke$arity$variadic(G__13960,seq13959__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13958);
