// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('site.navigation');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.history.Html5History.prototype._getUrl = (function (token){
var this$ = this;
if(cljs.core.truth_(this$.useFragment_)){
return [cljs.core.str("#"),cljs.core.str(token)].join('');
} else {
return [cljs.core.str(this$.pathPrefix_),cljs.core.str(token)].join('');
}
});
site.navigation.get_token = (function site$navigation$get_token(){
if(cljs.core.truth_((goog.history.Html5History.isSupported.cljs$core$IFn$_invoke$arity$0 ? goog.history.Html5History.isSupported.cljs$core$IFn$_invoke$arity$0() : goog.history.Html5History.isSupported.call(null)))){
return [cljs.core.str(window.location.pathname),cljs.core.str(window.location.search)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.location.pathname,"/")){
return window.location.hash.substring((1));
} else {
return [cljs.core.str(window.location.pathname),cljs.core.str(window.location.search)].join('');
}
}
});
site.navigation.make_history = (function site$navigation$make_history(){
if(cljs.core.truth_((goog.history.Html5History.isSupported.cljs$core$IFn$_invoke$arity$0 ? goog.history.Html5History.isSupported.cljs$core$IFn$_invoke$arity$0() : goog.history.Html5History.isSupported.call(null)))){
var G__16186 = (new goog.history.Html5History());
G__16186.setPathPrefix([cljs.core.str(window.location.protocol),cljs.core.str("//"),cljs.core.str(window.location.host)].join(''));

G__16186.setUseFragment(false);

return G__16186;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",window.location.pathname)){
return window._location = [cljs.core.str("/#"),cljs.core.str(site.navigation.get_token())].join('');
} else {
return (new goog.History());
}
}
});
if(typeof site.navigation.current_token !== 'undefined'){
} else {
site.navigation.current_token = (function (){var G__16187 = site.navigation.get_token();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16187) : cljs.core.atom.call(null,G__16187));
})();
}
site.navigation.handle_url_change = (function site$navigation$handle_url_change(e){
console.log(e);

var G__16191_16194 = [cljs.core.str("Navigating: "),cljs.core.str(site.navigation.get_token())].join('');
console.log(G__16191_16194);

if(cljs.core.truth_(e.isNavigation)){
} else {
console.log("Token set programmatically");

window.scrollTo((0),(0));
}

var G__16192 = site.navigation.current_token;
var G__16193 = site.navigation.get_token();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16192,G__16193) : cljs.core.reset_BANG_.call(null,G__16192,G__16193));
});
if(typeof site.navigation.history !== 'undefined'){
} else {
site.navigation.history = (function (){var G__16196 = site.navigation.make_history();
var G__16197_16200 = G__16196;
var G__16198_16201 = goog.history.EventType.NAVIGATE;
var G__16199_16202 = ((function (G__16197_16200,G__16198_16201,G__16196){
return (function (p1__16195_SHARP_){
return site.navigation.handle_url_change(p1__16195_SHARP_);
});})(G__16197_16200,G__16198_16201,G__16196))
;
goog.events.listen(G__16197_16200,G__16198_16201,G__16199_16202);

G__16196.setEnabled(true);

return G__16196;
})();
}
site.navigation.nav_BANG_ = (function site$navigation$nav_BANG_(token){
return site.navigation.history.setToken(token);
});
site.navigation.link = (function site$navigation$link(var_args){
var args__7989__auto__ = [];
var len__7982__auto___16206 = arguments.length;
var i__7983__auto___16207 = (0);
while(true){
if((i__7983__auto___16207 < len__7982__auto___16206)){
args__7989__auto__.push((arguments[i__7983__auto___16207]));

var G__16208 = (i__7983__auto___16207 + (1));
i__7983__auto___16207 = G__16208;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((1) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((1)),(0),null)):null);
return site.navigation.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7990__auto__);
});

site.navigation.link.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$on_DASH_click,(function (p1__16203_SHARP_){
p1__16203_SHARP_.preventDefault();

return site.navigation.nav_BANG_(url);
})], null),content], null);
});

site.navigation.link.cljs$lang$maxFixedArity = (1);

site.navigation.link.cljs$lang$applyTo = (function (seq16204){
var G__16205 = cljs.core.first(seq16204);
var seq16204__$1 = cljs.core.next(seq16204);
return site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(G__16205,seq16204__$1);
});

