// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__14313_SHARP_,p2__14312_SHARP_){
return (p2__14312_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14312_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14313_SHARP_) : p2__14312_SHARP_.call(null,p1__14313_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var G__14327 = cljs.core.clj__GT_js(rum.util.filter_vals(cljs.core.some_QMARK_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__14328 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14328) : cljs.core.deref.call(null,G__14328));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,(next_props[":rum/initial-state"])], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14315_SHARP_,p2__14314_SHARP_){
return (p2__14314_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14314_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14315_SHARP_) : p2__14314_SHARP_.call(null,old_state,p1__14315_SHARP_));
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__14329 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14329) : cljs.core.deref.call(null,G__14329));
})();
var new_state = (function (){var G__14330 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14330) : cljs.core.deref.call(null,G__14330));
})();
var or__6874__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14316_SHARP_){
return (p1__14316_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14316_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14316_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__14331 = (function (){var G__14334 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14334) : wrapped_render.call(null,G__14334));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14331,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14331,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = (function (){var G__14335 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14335) : cljs.core.deref.call(null,G__14335));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14317_SHARP_){
return (p1__14317_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14317_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14317_SHARP_.call(null,state));
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((props[":rum/initial-state"]),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.array_seq([props], 0));
return ({":rum/state": cljs.core.volatile_BANG_(state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props], 0))));
return React.createClass(G__14327);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((cljs.core.some_QMARK_(key_fn))?((function (class$,key_fn){
return (function() { 
var G__14336__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__14336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14337__i = 0, G__14337__a = new Array(arguments.length -  0);
while (G__14337__i < G__14337__a.length) {G__14337__a[G__14337__i] = arguments[G__14337__i + 0]; ++G__14337__i;}
  args = new cljs.core.IndexedSeq(G__14337__a,0);
} 
return G__14336__delegate.call(this,args);};
G__14336.cljs$lang$maxFixedArity = 0;
G__14336.cljs$lang$applyTo = (function (arglist__14338){
var args = cljs.core.seq(arglist__14338);
return G__14336__delegate(args);
});
G__14336.cljs$core$IFn$_invoke$arity$variadic = G__14336__delegate;
return G__14336;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__14339__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__14339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14340__i = 0, G__14340__a = new Array(arguments.length -  0);
while (G__14340__i < G__14340__a.length) {G__14340__a[G__14340__i] = arguments[G__14340__i + 0]; ++G__14340__i;}
  args = new cljs.core.IndexedSeq(G__14340__a,0);
} 
return G__14339__delegate.call(this,args);};
G__14339.cljs$lang$maxFixedArity = 0;
G__14339.cljs$lang$applyTo = (function (arglist__14341){
var args = cljs.core.seq(arglist__14341);
return G__14339__delegate(args);
});
G__14339.cljs$core$IFn$_invoke$arity$variadic = G__14339__delegate;
return G__14339;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__14346__delegate = function (args){
var G__14344 = class$;
var G__14345 = ({":rum/args": args});
return React.createElement(G__14344,G__14345);
};
var G__14346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14347__i = 0, G__14347__a = new Array(arguments.length -  0);
while (G__14347__i < G__14347__a.length) {G__14347__a[G__14347__i] = arguments[G__14347__i + 0]; ++G__14347__i;}
  args = new cljs.core.IndexedSeq(G__14347__a,0);
} 
return G__14346__delegate.call(this,args);};
G__14346.cljs$lang$maxFixedArity = 0;
G__14346.cljs$lang$applyTo = (function (arglist__14348){
var args = cljs.core.seq(arglist__14348);
return G__14346__delegate(args);
});
G__14346.cljs$core$IFn$_invoke$arity$variadic = G__14346__delegate;
return G__14346;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__6874__auto__ = (function (){var and__6862__auto__ = typeof window !== 'undefined';
if(and__6862__auto__){
var or__6874__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
var or__6874__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6874__auto____$1)){
return or__6874__auto____$1;
} else {
var or__6874__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6874__auto____$2)){
return or__6874__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6862__auto__;
}
})();
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
return ((function (or__6874__auto__){
return (function (p1__14349_SHARP_){
return setTimeout(p1__14349_SHARP_,(16));
});
;})(or__6874__auto__))
}
})();
rum.core.batch = (function (){var or__6874__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6874__auto__)){
return or__6874__auto__;
} else {
var or__6874__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6874__auto____$1)){
return or__6874__auto____$1;
} else {
return ((function (or__6874__auto____$1,or__6874__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__6874__auto____$1,or__6874__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__14356 = cljs.core.seq(queue);
var chunk__14358 = null;
var count__14359 = (0);
var i__14360 = (0);
while(true){
if((i__14360 < count__14359)){
var comp = chunk__14358.cljs$core$IIndexed$_nth$arity$2(null,i__14360);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14362 = seq__14356;
var G__14363 = chunk__14358;
var G__14364 = count__14359;
var G__14365 = (i__14360 + (1));
seq__14356 = G__14362;
chunk__14358 = G__14363;
count__14359 = G__14364;
i__14360 = G__14365;
continue;
} else {
var G__14366 = seq__14356;
var G__14367 = chunk__14358;
var G__14368 = count__14359;
var G__14369 = (i__14360 + (1));
seq__14356 = G__14366;
chunk__14358 = G__14367;
count__14359 = G__14368;
i__14360 = G__14369;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14356);
if(temp__4657__auto__){
var seq__14356__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14356__$1)){
var c__7688__auto__ = cljs.core.chunk_first(seq__14356__$1);
var G__14370 = cljs.core.chunk_rest(seq__14356__$1);
var G__14371 = c__7688__auto__;
var G__14372 = cljs.core.count(c__7688__auto__);
var G__14373 = (0);
seq__14356 = G__14370;
chunk__14358 = G__14371;
count__14359 = G__14372;
i__14360 = G__14373;
continue;
} else {
var comp = cljs.core.first(seq__14356__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14374 = cljs.core.next(seq__14356__$1);
var G__14375 = null;
var G__14376 = (0);
var G__14377 = (0);
seq__14356 = G__14374;
chunk__14358 = G__14375;
count__14359 = G__14376;
i__14360 = G__14377;
continue;
} else {
var G__14378 = cljs.core.next(seq__14356__$1);
var G__14379 = null;
var G__14380 = (0);
var G__14381 = (0);
seq__14356 = G__14378;
chunk__14358 = G__14379;
count__14359 = G__14380;
i__14360 = G__14381;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
var G__14385 = component;
var G__14386 = ({"key": key});
var G__14387 = null;
return React.cloneElement(G__14385,G__14386,G__14387);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__14391 = component;
var G__14392 = ({"ref": ref});
var G__14393 = null;
return React.cloneElement(G__14391,G__14392,G__14393);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__14395 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__14395);
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
var G__14397 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__14397);
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args14398 = [];
var len__7982__auto___14401 = arguments.length;
var i__7983__auto___14402 = (0);
while(true){
if((i__7983__auto___14402 < len__7982__auto___14401)){
args14398.push((arguments[i__7983__auto___14402]));

var G__14403 = (i__7983__auto___14402 + (1));
i__7983__auto___14402 = G__14403;
continue;
} else {
}
break;
}

var G__14400 = args14398.length;
switch (G__14400) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14398.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_14405 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14406 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14406,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14406,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14409_14421 = cljs.core.seq(old_reactions);
var chunk__14410_14422 = null;
var count__14411_14423 = (0);
var i__14412_14424 = (0);
while(true){
if((i__14412_14424 < count__14411_14423)){
var ref_14425 = chunk__14410_14422.cljs$core$IIndexed$_nth$arity$2(null,i__14412_14424);
if(cljs.core.contains_QMARK_(new_reactions,ref_14425)){
} else {
cljs.core.remove_watch(ref_14425,key);
}

var G__14426 = seq__14409_14421;
var G__14427 = chunk__14410_14422;
var G__14428 = count__14411_14423;
var G__14429 = (i__14412_14424 + (1));
seq__14409_14421 = G__14426;
chunk__14410_14422 = G__14427;
count__14411_14423 = G__14428;
i__14412_14424 = G__14429;
continue;
} else {
var temp__4657__auto___14430 = cljs.core.seq(seq__14409_14421);
if(temp__4657__auto___14430){
var seq__14409_14431__$1 = temp__4657__auto___14430;
if(cljs.core.chunked_seq_QMARK_(seq__14409_14431__$1)){
var c__7688__auto___14432 = cljs.core.chunk_first(seq__14409_14431__$1);
var G__14433 = cljs.core.chunk_rest(seq__14409_14431__$1);
var G__14434 = c__7688__auto___14432;
var G__14435 = cljs.core.count(c__7688__auto___14432);
var G__14436 = (0);
seq__14409_14421 = G__14433;
chunk__14410_14422 = G__14434;
count__14411_14423 = G__14435;
i__14412_14424 = G__14436;
continue;
} else {
var ref_14437 = cljs.core.first(seq__14409_14431__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14437)){
} else {
cljs.core.remove_watch(ref_14437,key);
}

var G__14438 = cljs.core.next(seq__14409_14431__$1);
var G__14439 = null;
var G__14440 = (0);
var G__14441 = (0);
seq__14409_14421 = G__14438;
chunk__14410_14422 = G__14439;
count__14411_14423 = G__14440;
i__14412_14424 = G__14441;
continue;
}
} else {
}
}
break;
}

var seq__14413_14442 = cljs.core.seq(new_reactions);
var chunk__14414_14443 = null;
var count__14415_14444 = (0);
var i__14416_14445 = (0);
while(true){
if((i__14416_14445 < count__14415_14444)){
var ref_14446 = chunk__14414_14443.cljs$core$IIndexed$_nth$arity$2(null,i__14416_14445);
if(cljs.core.contains_QMARK_(old_reactions,ref_14446)){
} else {
cljs.core.add_watch(ref_14446,key,((function (seq__14413_14442,chunk__14414_14443,count__14415_14444,i__14416_14445,ref_14446,comp,old_reactions,vec__14406,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14405){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14413_14442,chunk__14414_14443,count__14415_14444,i__14416_14445,ref_14446,comp,old_reactions,vec__14406,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14405))
);
}

var G__14447 = seq__14413_14442;
var G__14448 = chunk__14414_14443;
var G__14449 = count__14415_14444;
var G__14450 = (i__14416_14445 + (1));
seq__14413_14442 = G__14447;
chunk__14414_14443 = G__14448;
count__14415_14444 = G__14449;
i__14416_14445 = G__14450;
continue;
} else {
var temp__4657__auto___14451 = cljs.core.seq(seq__14413_14442);
if(temp__4657__auto___14451){
var seq__14413_14452__$1 = temp__4657__auto___14451;
if(cljs.core.chunked_seq_QMARK_(seq__14413_14452__$1)){
var c__7688__auto___14453 = cljs.core.chunk_first(seq__14413_14452__$1);
var G__14454 = cljs.core.chunk_rest(seq__14413_14452__$1);
var G__14455 = c__7688__auto___14453;
var G__14456 = cljs.core.count(c__7688__auto___14453);
var G__14457 = (0);
seq__14413_14442 = G__14454;
chunk__14414_14443 = G__14455;
count__14415_14444 = G__14456;
i__14416_14445 = G__14457;
continue;
} else {
var ref_14458 = cljs.core.first(seq__14413_14452__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14458)){
} else {
cljs.core.add_watch(ref_14458,key,((function (seq__14413_14442,chunk__14414_14443,count__14415_14444,i__14416_14445,ref_14458,seq__14413_14452__$1,temp__4657__auto___14451,comp,old_reactions,vec__14406,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14405){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14413_14442,chunk__14414_14443,count__14415_14444,i__14416_14445,ref_14458,seq__14413_14452__$1,temp__4657__auto___14451,comp,old_reactions,vec__14406,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14405))
);
}

var G__14459 = cljs.core.next(seq__14413_14452__$1);
var G__14460 = null;
var G__14461 = (0);
var G__14462 = (0);
seq__14413_14442 = G__14459;
chunk__14414_14443 = G__14460;
count__14415_14444 = G__14461;
i__14416_14445 = G__14462;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14405;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14463 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14417_14464 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14418_14465 = null;
var count__14419_14466 = (0);
var i__14420_14467 = (0);
while(true){
if((i__14420_14467 < count__14419_14466)){
var ref_14468 = chunk__14418_14465.cljs$core$IIndexed$_nth$arity$2(null,i__14420_14467);
cljs.core.remove_watch(ref_14468,key_14463);

var G__14469 = seq__14417_14464;
var G__14470 = chunk__14418_14465;
var G__14471 = count__14419_14466;
var G__14472 = (i__14420_14467 + (1));
seq__14417_14464 = G__14469;
chunk__14418_14465 = G__14470;
count__14419_14466 = G__14471;
i__14420_14467 = G__14472;
continue;
} else {
var temp__4657__auto___14473 = cljs.core.seq(seq__14417_14464);
if(temp__4657__auto___14473){
var seq__14417_14474__$1 = temp__4657__auto___14473;
if(cljs.core.chunked_seq_QMARK_(seq__14417_14474__$1)){
var c__7688__auto___14475 = cljs.core.chunk_first(seq__14417_14474__$1);
var G__14476 = cljs.core.chunk_rest(seq__14417_14474__$1);
var G__14477 = c__7688__auto___14475;
var G__14478 = cljs.core.count(c__7688__auto___14475);
var G__14479 = (0);
seq__14417_14464 = G__14476;
chunk__14418_14465 = G__14477;
count__14419_14466 = G__14478;
i__14420_14467 = G__14479;
continue;
} else {
var ref_14480 = cljs.core.first(seq__14417_14474__$1);
cljs.core.remove_watch(ref_14480,key_14463);

var G__14481 = cljs.core.next(seq__14417_14474__$1);
var G__14482 = null;
var G__14483 = (0);
var G__14484 = (0);
seq__14417_14464 = G__14481;
chunk__14418_14465 = G__14482;
count__14419_14466 = G__14483;
i__14420_14467 = G__14484;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.array_seq([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
});
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__7989__auto__ = [];
var len__7982__auto___14491 = arguments.length;
var i__7983__auto___14492 = (0);
while(true){
if((i__7983__auto___14492 < len__7982__auto___14491)){
args__7989__auto__.push((arguments[i__7983__auto___14492]));

var G__14493 = (i__7983__auto___14492 + (1));
i__7983__auto___14492 = G__14493;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((2) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7990__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14488){
var map__14489 = p__14488;
var map__14489__$1 = ((((!((map__14489 == null)))?((((map__14489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14489):map__14489);
var options = map__14489__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq14485){
var G__14486 = cljs.core.first(seq14485);
var seq14485__$1 = cljs.core.next(seq14485);
var G__14487 = cljs.core.first(seq14485__$1);
var seq14485__$2 = cljs.core.next(seq14485__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__14486,G__14487,seq14485__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7989__auto__ = [];
var len__7982__auto___14497 = arguments.length;
var i__7983__auto___14498 = (0);
while(true){
if((i__7983__auto___14498 < len__7982__auto___14497)){
args__7989__auto__.push((arguments[i__7983__auto___14498]));

var G__14499 = (i__7983__auto___14498 + (1));
i__7983__auto___14498 = G__14499;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((2) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7990__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq14494){
var G__14495 = cljs.core.first(seq14494);
var seq14494__$1 = cljs.core.next(seq14494);
var G__14496 = cljs.core.first(seq14494__$1);
var seq14494__$2 = cljs.core.next(seq14494__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__14495,G__14496,seq14494__$2);
});

