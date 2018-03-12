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
return (function (p1__14359_SHARP_,p2__14358_SHARP_){
return (p2__14358_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14358_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14359_SHARP_) : p2__14358_SHARP_.call(null,p1__14359_SHARP_));
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
var G__14373 = cljs.core.clj__GT_js(rum.util.filter_vals(cljs.core.some_QMARK_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
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
var old_state = (function (){var G__14374 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14374) : cljs.core.deref.call(null,G__14374));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,(next_props[":rum/initial-state"])], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14361_SHARP_,p2__14360_SHARP_){
return (p2__14360_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14360_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14361_SHARP_) : p2__14360_SHARP_.call(null,old_state,p1__14361_SHARP_));
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__14375 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14375) : cljs.core.deref.call(null,G__14375));
})();
var new_state = (function (){var G__14376 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14376) : cljs.core.deref.call(null,G__14376));
})();
var or__6874__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14362_SHARP_){
return (p1__14362_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14362_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14362_SHARP_.call(null,old_state,new_state));
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
var vec__14377 = (function (){var G__14380 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14380) : wrapped_render.call(null,G__14380));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14377,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14377,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = (function (){var G__14381 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14381) : cljs.core.deref.call(null,G__14381));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14363_SHARP_){
return (p1__14363_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14363_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14363_SHARP_.call(null,state));
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
return React.createClass(G__14373);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((cljs.core.some_QMARK_(key_fn))?((function (class$,key_fn){
return (function() { 
var G__14382__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__14382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14383__i = 0, G__14383__a = new Array(arguments.length -  0);
while (G__14383__i < G__14383__a.length) {G__14383__a[G__14383__i] = arguments[G__14383__i + 0]; ++G__14383__i;}
  args = new cljs.core.IndexedSeq(G__14383__a,0);
} 
return G__14382__delegate.call(this,args);};
G__14382.cljs$lang$maxFixedArity = 0;
G__14382.cljs$lang$applyTo = (function (arglist__14384){
var args = cljs.core.seq(arglist__14384);
return G__14382__delegate(args);
});
G__14382.cljs$core$IFn$_invoke$arity$variadic = G__14382__delegate;
return G__14382;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__14385__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__14385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14386__i = 0, G__14386__a = new Array(arguments.length -  0);
while (G__14386__i < G__14386__a.length) {G__14386__a[G__14386__i] = arguments[G__14386__i + 0]; ++G__14386__i;}
  args = new cljs.core.IndexedSeq(G__14386__a,0);
} 
return G__14385__delegate.call(this,args);};
G__14385.cljs$lang$maxFixedArity = 0;
G__14385.cljs$lang$applyTo = (function (arglist__14387){
var args = cljs.core.seq(arglist__14387);
return G__14385__delegate(args);
});
G__14385.cljs$core$IFn$_invoke$arity$variadic = G__14385__delegate;
return G__14385;
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
var G__14392__delegate = function (args){
var G__14390 = class$;
var G__14391 = ({":rum/args": args});
return React.createElement(G__14390,G__14391);
};
var G__14392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14393__i = 0, G__14393__a = new Array(arguments.length -  0);
while (G__14393__i < G__14393__a.length) {G__14393__a[G__14393__i] = arguments[G__14393__i + 0]; ++G__14393__i;}
  args = new cljs.core.IndexedSeq(G__14393__a,0);
} 
return G__14392__delegate.call(this,args);};
G__14392.cljs$lang$maxFixedArity = 0;
G__14392.cljs$lang$applyTo = (function (arglist__14394){
var args = cljs.core.seq(arglist__14394);
return G__14392__delegate(args);
});
G__14392.cljs$core$IFn$_invoke$arity$variadic = G__14392__delegate;
return G__14392;
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
return (function (p1__14395_SHARP_){
return setTimeout(p1__14395_SHARP_,(16));
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
var seq__14402 = cljs.core.seq(queue);
var chunk__14404 = null;
var count__14405 = (0);
var i__14406 = (0);
while(true){
if((i__14406 < count__14405)){
var comp = chunk__14404.cljs$core$IIndexed$_nth$arity$2(null,i__14406);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14408 = seq__14402;
var G__14409 = chunk__14404;
var G__14410 = count__14405;
var G__14411 = (i__14406 + (1));
seq__14402 = G__14408;
chunk__14404 = G__14409;
count__14405 = G__14410;
i__14406 = G__14411;
continue;
} else {
var G__14412 = seq__14402;
var G__14413 = chunk__14404;
var G__14414 = count__14405;
var G__14415 = (i__14406 + (1));
seq__14402 = G__14412;
chunk__14404 = G__14413;
count__14405 = G__14414;
i__14406 = G__14415;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14402);
if(temp__4657__auto__){
var seq__14402__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14402__$1)){
var c__7688__auto__ = cljs.core.chunk_first(seq__14402__$1);
var G__14416 = cljs.core.chunk_rest(seq__14402__$1);
var G__14417 = c__7688__auto__;
var G__14418 = cljs.core.count(c__7688__auto__);
var G__14419 = (0);
seq__14402 = G__14416;
chunk__14404 = G__14417;
count__14405 = G__14418;
i__14406 = G__14419;
continue;
} else {
var comp = cljs.core.first(seq__14402__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14420 = cljs.core.next(seq__14402__$1);
var G__14421 = null;
var G__14422 = (0);
var G__14423 = (0);
seq__14402 = G__14420;
chunk__14404 = G__14421;
count__14405 = G__14422;
i__14406 = G__14423;
continue;
} else {
var G__14424 = cljs.core.next(seq__14402__$1);
var G__14425 = null;
var G__14426 = (0);
var G__14427 = (0);
seq__14402 = G__14424;
chunk__14404 = G__14425;
count__14405 = G__14426;
i__14406 = G__14427;
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
var G__14431 = component;
var G__14432 = ({"key": key});
var G__14433 = null;
return React.cloneElement(G__14431,G__14432,G__14433);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__14437 = component;
var G__14438 = ({"ref": ref});
var G__14439 = null;
return React.cloneElement(G__14437,G__14438,G__14439);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__14441 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__14441);
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
var G__14443 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__14443);
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
var args14444 = [];
var len__7982__auto___14447 = arguments.length;
var i__7983__auto___14448 = (0);
while(true){
if((i__7983__auto___14448 < len__7982__auto___14447)){
args14444.push((arguments[i__7983__auto___14448]));

var G__14449 = (i__7983__auto___14448 + (1));
i__7983__auto___14448 = G__14449;
continue;
} else {
}
break;
}

var G__14446 = args14444.length;
switch (G__14446) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14444.length)].join('')));

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
var _STAR_reactions_STAR_14451 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14452 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14452,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14452,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14455_14467 = cljs.core.seq(old_reactions);
var chunk__14456_14468 = null;
var count__14457_14469 = (0);
var i__14458_14470 = (0);
while(true){
if((i__14458_14470 < count__14457_14469)){
var ref_14471 = chunk__14456_14468.cljs$core$IIndexed$_nth$arity$2(null,i__14458_14470);
if(cljs.core.contains_QMARK_(new_reactions,ref_14471)){
} else {
cljs.core.remove_watch(ref_14471,key);
}

var G__14472 = seq__14455_14467;
var G__14473 = chunk__14456_14468;
var G__14474 = count__14457_14469;
var G__14475 = (i__14458_14470 + (1));
seq__14455_14467 = G__14472;
chunk__14456_14468 = G__14473;
count__14457_14469 = G__14474;
i__14458_14470 = G__14475;
continue;
} else {
var temp__4657__auto___14476 = cljs.core.seq(seq__14455_14467);
if(temp__4657__auto___14476){
var seq__14455_14477__$1 = temp__4657__auto___14476;
if(cljs.core.chunked_seq_QMARK_(seq__14455_14477__$1)){
var c__7688__auto___14478 = cljs.core.chunk_first(seq__14455_14477__$1);
var G__14479 = cljs.core.chunk_rest(seq__14455_14477__$1);
var G__14480 = c__7688__auto___14478;
var G__14481 = cljs.core.count(c__7688__auto___14478);
var G__14482 = (0);
seq__14455_14467 = G__14479;
chunk__14456_14468 = G__14480;
count__14457_14469 = G__14481;
i__14458_14470 = G__14482;
continue;
} else {
var ref_14483 = cljs.core.first(seq__14455_14477__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14483)){
} else {
cljs.core.remove_watch(ref_14483,key);
}

var G__14484 = cljs.core.next(seq__14455_14477__$1);
var G__14485 = null;
var G__14486 = (0);
var G__14487 = (0);
seq__14455_14467 = G__14484;
chunk__14456_14468 = G__14485;
count__14457_14469 = G__14486;
i__14458_14470 = G__14487;
continue;
}
} else {
}
}
break;
}

var seq__14459_14488 = cljs.core.seq(new_reactions);
var chunk__14460_14489 = null;
var count__14461_14490 = (0);
var i__14462_14491 = (0);
while(true){
if((i__14462_14491 < count__14461_14490)){
var ref_14492 = chunk__14460_14489.cljs$core$IIndexed$_nth$arity$2(null,i__14462_14491);
if(cljs.core.contains_QMARK_(old_reactions,ref_14492)){
} else {
cljs.core.add_watch(ref_14492,key,((function (seq__14459_14488,chunk__14460_14489,count__14461_14490,i__14462_14491,ref_14492,comp,old_reactions,vec__14452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14451){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14459_14488,chunk__14460_14489,count__14461_14490,i__14462_14491,ref_14492,comp,old_reactions,vec__14452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14451))
);
}

var G__14493 = seq__14459_14488;
var G__14494 = chunk__14460_14489;
var G__14495 = count__14461_14490;
var G__14496 = (i__14462_14491 + (1));
seq__14459_14488 = G__14493;
chunk__14460_14489 = G__14494;
count__14461_14490 = G__14495;
i__14462_14491 = G__14496;
continue;
} else {
var temp__4657__auto___14497 = cljs.core.seq(seq__14459_14488);
if(temp__4657__auto___14497){
var seq__14459_14498__$1 = temp__4657__auto___14497;
if(cljs.core.chunked_seq_QMARK_(seq__14459_14498__$1)){
var c__7688__auto___14499 = cljs.core.chunk_first(seq__14459_14498__$1);
var G__14500 = cljs.core.chunk_rest(seq__14459_14498__$1);
var G__14501 = c__7688__auto___14499;
var G__14502 = cljs.core.count(c__7688__auto___14499);
var G__14503 = (0);
seq__14459_14488 = G__14500;
chunk__14460_14489 = G__14501;
count__14461_14490 = G__14502;
i__14462_14491 = G__14503;
continue;
} else {
var ref_14504 = cljs.core.first(seq__14459_14498__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14504)){
} else {
cljs.core.add_watch(ref_14504,key,((function (seq__14459_14488,chunk__14460_14489,count__14461_14490,i__14462_14491,ref_14504,seq__14459_14498__$1,temp__4657__auto___14497,comp,old_reactions,vec__14452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14451){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14459_14488,chunk__14460_14489,count__14461_14490,i__14462_14491,ref_14504,seq__14459_14498__$1,temp__4657__auto___14497,comp,old_reactions,vec__14452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14451))
);
}

var G__14505 = cljs.core.next(seq__14459_14498__$1);
var G__14506 = null;
var G__14507 = (0);
var G__14508 = (0);
seq__14459_14488 = G__14505;
chunk__14460_14489 = G__14506;
count__14461_14490 = G__14507;
i__14462_14491 = G__14508;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14451;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14509 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14463_14510 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14464_14511 = null;
var count__14465_14512 = (0);
var i__14466_14513 = (0);
while(true){
if((i__14466_14513 < count__14465_14512)){
var ref_14514 = chunk__14464_14511.cljs$core$IIndexed$_nth$arity$2(null,i__14466_14513);
cljs.core.remove_watch(ref_14514,key_14509);

var G__14515 = seq__14463_14510;
var G__14516 = chunk__14464_14511;
var G__14517 = count__14465_14512;
var G__14518 = (i__14466_14513 + (1));
seq__14463_14510 = G__14515;
chunk__14464_14511 = G__14516;
count__14465_14512 = G__14517;
i__14466_14513 = G__14518;
continue;
} else {
var temp__4657__auto___14519 = cljs.core.seq(seq__14463_14510);
if(temp__4657__auto___14519){
var seq__14463_14520__$1 = temp__4657__auto___14519;
if(cljs.core.chunked_seq_QMARK_(seq__14463_14520__$1)){
var c__7688__auto___14521 = cljs.core.chunk_first(seq__14463_14520__$1);
var G__14522 = cljs.core.chunk_rest(seq__14463_14520__$1);
var G__14523 = c__7688__auto___14521;
var G__14524 = cljs.core.count(c__7688__auto___14521);
var G__14525 = (0);
seq__14463_14510 = G__14522;
chunk__14464_14511 = G__14523;
count__14465_14512 = G__14524;
i__14466_14513 = G__14525;
continue;
} else {
var ref_14526 = cljs.core.first(seq__14463_14520__$1);
cljs.core.remove_watch(ref_14526,key_14509);

var G__14527 = cljs.core.next(seq__14463_14520__$1);
var G__14528 = null;
var G__14529 = (0);
var G__14530 = (0);
seq__14463_14510 = G__14527;
chunk__14464_14511 = G__14528;
count__14465_14512 = G__14529;
i__14466_14513 = G__14530;
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
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
});
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
var len__7982__auto___14537 = arguments.length;
var i__7983__auto___14538 = (0);
while(true){
if((i__7983__auto___14538 < len__7982__auto___14537)){
args__7989__auto__.push((arguments[i__7983__auto___14538]));

var G__14539 = (i__7983__auto___14538 + (1));
i__7983__auto___14538 = G__14539;
continue;
} else {
}
break;
}

var argseq__7990__auto__ = ((((2) < args__7989__auto__.length))?(new cljs.core.IndexedSeq(args__7989__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7990__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14534){
var map__14535 = p__14534;
var map__14535__$1 = ((((!((map__14535 == null)))?((((map__14535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14535):map__14535);
var options = map__14535__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq14531){
var G__14532 = cljs.core.first(seq14531);
var seq14531__$1 = cljs.core.next(seq14531);
var G__14533 = cljs.core.first(seq14531__$1);
var seq14531__$2 = cljs.core.next(seq14531__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__14532,G__14533,seq14531__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7989__auto__ = [];
var len__7982__auto___14543 = arguments.length;
var i__7983__auto___14544 = (0);
while(true){
if((i__7983__auto___14544 < len__7982__auto___14543)){
args__7989__auto__.push((arguments[i__7983__auto___14544]));

var G__14545 = (i__7983__auto___14544 + (1));
i__7983__auto___14544 = G__14545;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq14540){
var G__14541 = cljs.core.first(seq14540);
var seq14540__$1 = cljs.core.next(seq14540);
var G__14542 = cljs.core.first(seq14540__$1);
var seq14540__$2 = cljs.core.next(seq14540__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__14541,G__14542,seq14540__$2);
});

