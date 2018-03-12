// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('site.components');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('bidi.bidi');
goog.require('site.navigation');
site.components.svg_icon = rum.core.build_defc((function (meta){
var map__16211 = meta;
var map__16211__$1 = ((((!((map__16211 == null)))?((((map__16211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16211):map__16211);
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16211__$1,cljs.core.cst$kw$alt);
var viewbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16211__$1,cljs.core.cst$kw$viewbox);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16211__$1,cljs.core.cst$kw$href);
var G__16213 = "svg";
var G__16214 = ({"alt": alt, "viewbox": viewbox});
var G__16215 = (function (){var G__16216 = "use";
var G__16217 = ({"xlinkHref": href});
return React.createElement(G__16216,G__16217);
})();
return React.createElement(G__16213,G__16214,G__16215);
}),null,"svg-icon");
site.components.skip_to_main = rum.core.build_defc((function (){
var G__16220 = "a";
var G__16221 = ({"href": "#main", "className": "skip-to-main"});
var G__16222 = React.createElement("span",null,"Skip to main content");
return React.createElement(G__16220,G__16221,G__16222);
}),null,"skip-to-main");
site.components.main = rum.core.build_defc((function (content){

var attrs16223 = content;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"main",((cljs.core.map_QMARK_(attrs16223))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"main"], null),attrs16223], 0))):({"id": "main"})),((cljs.core.map_QMARK_(attrs16223))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16223)], null)));
}),null,"main");
site.components.my_routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"index",null], null), null),cljs.core.cst$kw$index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["veganism",cljs.core.cst$kw$veganism], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about-us",cljs.core.cst$kw$about_DASH_us], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consulting/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"index",null], null), null),cljs.core.cst$kw$consulting], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["web",cljs.core.cst$kw$web], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["community",cljs.core.cst$kw$community], null)], null)], null);
site.components.navigation = rum.core.build_defc((function (){
var G__16224 = "nav";
var G__16225 = null;
var G__16226 = (function (){var G__16232 = "ul";
var G__16233 = null;
var G__16234 = (function (){var attrs16227 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$index),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_hidden,true], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$home,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alt,"site Logo Home",cljs.core.cst$kw$viewBox,"0 0 160 150"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xlink_DASH_href,"logo.svg#logo"], null)], null)], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16227))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-middle"], null)], null),attrs16227], 0))):({"className": "order-middle"})),((cljs.core.map_QMARK_(attrs16227))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16227)], null)));
})();
var G__16235 = (function (){var attrs16228 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$about_DASH_us),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"About Us"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16228))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-front"], null)], null),attrs16228], 0))):({"className": "order-front"})),((cljs.core.map_QMARK_(attrs16228))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16228)], null)));
})();
var G__16236 = (function (){var attrs16229 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$veganism),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Veganism"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16229))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-front"], null)], null),attrs16229], 0))):({"className": "order-front"})),((cljs.core.map_QMARK_(attrs16229))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16229)], null)));
})();
var G__16237 = (function (){var attrs16230 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$consulting),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Consulting"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16230))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-end"], null)], null),attrs16230], 0))):({"className": "order-end"})),((cljs.core.map_QMARK_(attrs16230))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16230)], null)));
})();
var G__16238 = (function (){var attrs16231 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$community),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Community"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16231))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-end"], null)], null),attrs16231], 0))):({"className": "order-end"})),((cljs.core.map_QMARK_(attrs16231))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16231)], null)));
})();
return React.createElement(G__16232,G__16233,G__16234,G__16235,G__16236,G__16237,G__16238);
})();
return React.createElement(G__16224,G__16225,G__16226);
}),null,"navigation");
