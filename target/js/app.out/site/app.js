// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('site.app');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('bidi.bidi');
goog.require('site.index');
goog.require('site.components');
goog.require('goog.style');
goog.require('site.navigation');
site.app.svg = rum.core.build_defc((function (){
var G__16168 = "svg";
var G__16169 = ({"style": ({"minWidth": "15rem", "maxWidth": "20rem"}), "height": "25vmin", "width": "40vw", "viewBox": "0 0 245 67", "id": "logo", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sf","SA"], null))});
var G__16170 = (function (){var G__16171 = "use";
var G__16172 = ({"xlinkHref": [cljs.core.str("/svg/logo.svg#logo")].join('')});
return React.createElement(G__16171,G__16172);
})();
return React.createElement(G__16168,G__16169,G__16170);
}),null,"svg");
site.app.main = rum.core.build_defc((function (content){

var attrs16173 = content;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"main",((cljs.core.map_QMARK_(attrs16173))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"main"], null),attrs16173], 0))):({"id": "main"})),((cljs.core.map_QMARK_(attrs16173))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16173)], null)));
}),null,"main");
site.app.hidden = rum.core.build_defc((function (){
var G__16176 = "span";
var G__16177 = ({"hidden": true});
var G__16178 = "This is hidden text";
return React.createElement(G__16176,G__16177,G__16178);
}),null,"hidden");
site.app.get_route = (function site$app$get_route(url){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(bidi.bidi.match_route(site.components.my_routes,url));
});
site.app.navigation = rum.core.build_defc((function (){
var G__16179 = "nav";
var G__16180 = null;
var G__16181 = (function (){var G__16187 = "ul";
var G__16188 = null;
var G__16189 = (function (){var attrs16182 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$index),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_hidden,true], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$home,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alt,"site Logo Home",cljs.core.cst$kw$viewBox,"0 0 160 150"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xlink_DASH_href,"/logo.svg#logo"], null)], null)], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16182))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-middle"], null)], null),attrs16182], 0))):({"className": "order-middle"})),((cljs.core.map_QMARK_(attrs16182))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16182)], null)));
})();
var G__16190 = (function (){var attrs16183 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$veganism),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Veganism"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16183))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-front"], null)], null),attrs16183], 0))):({"className": "order-front"})),((cljs.core.map_QMARK_(attrs16183))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16183)], null)));
})();
var G__16191 = (function (){var attrs16184 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$consulting),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Consulting"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16184))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-front"], null)], null),attrs16184], 0))):({"className": "order-front"})),((cljs.core.map_QMARK_(attrs16184))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16184)], null)));
})();
var G__16192 = (function (){var attrs16185 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$community),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Community"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16185))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-end"], null)], null),attrs16185], 0))):({"className": "order-end"})),((cljs.core.map_QMARK_(attrs16185))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16185)], null)));
})();
var G__16193 = (function (){var attrs16186 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$about_DASH_us),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"About Us"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16186))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-end"], null)], null),attrs16186], 0))):({"className": "order-end"})),((cljs.core.map_QMARK_(attrs16186))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16186)], null)));
})();
return React.createElement(G__16187,G__16188,G__16189,G__16190,G__16191,G__16192,G__16193);
})();
return React.createElement(G__16179,G__16180,G__16181);
}),null,"navigation");
site.app.page_wrapper = rum.core.build_defc((function (content){
var G__16194 = "div";
var G__16195 = ({"style": ({"backgroundImage": "url(\"/photos/bg.png\")", "backgroundRepeat": "repeat", "height": "100%"})});
var G__16196 = (function (){var G__16198 = "div";
var G__16199 = ({"style": ({"backgroundImage": "url(\"/photos/bg.jpg\")", "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "height": "100%", "maxHeight": "80vh", "backgroundPosition": "center", "width": "100%", "position": "absolute"})});
var G__16200 = sablono.interpreter.interpret((site.app.svg.cljs$core$IFn$_invoke$arity$0 ? site.app.svg.cljs$core$IFn$_invoke$arity$0() : site.app.svg.call(null)));
return React.createElement(G__16198,G__16199,G__16200);
})();
var G__16197 = sablono.interpreter.interpret((site.app.main.cljs$core$IFn$_invoke$arity$1 ? site.app.main.cljs$core$IFn$_invoke$arity$1(content) : site.app.main.call(null,content)));
return React.createElement(G__16194,G__16195,G__16196,G__16197);
}),null,"page-wrapper");
site.app.home = rum.core.build_defc((function (){
return sablono.interpreter.interpret((function (){var G__16201 = (site.index.content.cljs$core$IFn$_invoke$arity$0 ? site.index.content.cljs$core$IFn$_invoke$arity$0() : site.index.content.call(null));
return (site.app.page_wrapper.cljs$core$IFn$_invoke$arity$1 ? site.app.page_wrapper.cljs$core$IFn$_invoke$arity$1(G__16201) : site.app.page_wrapper.call(null,G__16201));
})());
}),null,"home");
site.app.page = rum.core.build_defc((function (){
var token = rum.core.react(site.navigation.current_token);
return sablono.interpreter.interpret((function (){var G__16202 = (((site.app.get_route(token) instanceof cljs.core.Keyword))?site.app.get_route(token).fqn:null);
switch (G__16202) {
case "index":
return (site.app.home.cljs$core$IFn$_invoke$arity$0 ? site.app.home.cljs$core$IFn$_invoke$arity$0() : site.app.home.call(null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(site.app.get_route(token))].join('')));

}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"page");
if(typeof site.app.prev !== 'undefined'){
} else {
site.app.prev = cljs.core.volatile_BANG_(null);
}

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(site.app.prev) : cljs.core.deref.call(null,site.app.prev)))){
var G__16204_16206 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(site.app.prev) : cljs.core.deref.call(null,site.app.prev));
goog.style.uninstallStyles(G__16204_16206);
} else {
}

cljs.core.vreset_BANG_(site.app.prev,(function (){var G__16205 = ".Sr{font-size:1.125em}.Sv{width:100%}@media(max-width:30rem){.Sn{margin-bottom:1.5rem}}.Ss{padding-top:3rem}.Sg{margin:0}.Sc{border:solid #c8c8c8 2px}.Si{padding:0}@media(min-width:100rem){.SA{transform:translateX(-30vw)}}@media(min-width:78.125){.Se{max-width:25em}}.Sw{max-width:28em}@media(min-width:88.75rem){.Sj{flex-direction:row}.Sk{justify-content:space-between}}.Sb{background-color:rgba(255,255,255,0.5)}@media(max-width:55rem){.So{margin-left:2rem}.Sx{padding-left:2rem}.Sp{margin-right:2rem}.Sy{padding-right:2rem}}@media(max-width:88.75em){.St{padding-left:2.5em}.Su{padding-right:2.5em}}.Sf{align-self:center}.Sd{border-radius:.5rem}.Sh{list-style:none}@media(min-width:30rem){.Sm{align-items:baseline}.Sl{flex-direction:row}.Sq{align-self:center}}";
return goog.style.installStyles(G__16205);
})());
site.app.init = (function site$app$init(){
return rum.core.mount((site.app.page.cljs$core$IFn$_invoke$arity$0 ? site.app.page.cljs$core$IFn$_invoke$arity$0() : site.app.page.call(null)),document.getElementById("container"));
});
