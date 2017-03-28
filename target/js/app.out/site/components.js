// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('site.components');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('bidi.bidi');
goog.require('site.navigation');
site.components.svg_icon = rum.core.build_defc((function (meta){
var map__16138 = meta;
var map__16138__$1 = ((((!((map__16138 == null)))?((((map__16138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16138):map__16138);
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,cljs.core.cst$kw$alt);
var viewbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,cljs.core.cst$kw$viewbox);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,cljs.core.cst$kw$href);
var G__16140 = "svg";
var G__16141 = ({"alt": alt, "viewbox": viewbox});
var G__16142 = (function (){var G__16143 = "use";
var G__16144 = ({"xlinkHref": href});
return React.createElement(G__16143,G__16144);
})();
return React.createElement(G__16140,G__16141,G__16142);
}),null,"svg-icon");
site.components.skip_to_main = rum.core.build_defc((function (){
var G__16147 = "a";
var G__16148 = ({"href": "#main", "className": "skip-to-main"});
var G__16149 = React.createElement("span",null,"Skip to main content");
return React.createElement(G__16147,G__16148,G__16149);
}),null,"skip-to-main");
site.components.main = rum.core.build_defc((function (content){

var attrs16150 = content;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"main",((cljs.core.map_QMARK_(attrs16150))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"main"], null),attrs16150], 0))):({"id": "main"})),((cljs.core.map_QMARK_(attrs16150))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16150)], null)));
}),null,"main");
site.components.my_routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"index",null], null), null),cljs.core.cst$kw$index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["veganism",cljs.core.cst$kw$veganism], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about-us",cljs.core.cst$kw$about_DASH_us], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consulting/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"index",null], null), null),cljs.core.cst$kw$consulting], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["web",cljs.core.cst$kw$web], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["community",cljs.core.cst$kw$community], null)], null)], null);
site.components.navigation = rum.core.build_defc((function (){
var G__16151 = "nav";
var G__16152 = null;
var G__16153 = (function (){var G__16159 = "ul";
var G__16160 = null;
var G__16161 = (function (){var attrs16154 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$index),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_hidden,true], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$home,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alt,"site Logo Home",cljs.core.cst$kw$viewBox,"0 0 160 150"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xlink_DASH_href,"logo.svg#logo"], null)], null)], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16154))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-middle"], null)], null),attrs16154], 0))):({"className": "order-middle"})),((cljs.core.map_QMARK_(attrs16154))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16154)], null)));
})();
var G__16162 = (function (){var attrs16155 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$about_DASH_us),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"About Us"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16155))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-front"], null)], null),attrs16155], 0))):({"className": "order-front"})),((cljs.core.map_QMARK_(attrs16155))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16155)], null)));
})();
var G__16163 = (function (){var attrs16156 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$veganism),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Veganism"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16156))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-front"], null)], null),attrs16156], 0))):({"className": "order-front"})),((cljs.core.map_QMARK_(attrs16156))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16156)], null)));
})();
var G__16164 = (function (){var attrs16157 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$consulting),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Consulting"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16157))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-end"], null)], null),attrs16157], 0))):({"className": "order-end"})),((cljs.core.map_QMARK_(attrs16157))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16157)], null)));
})();
var G__16165 = (function (){var attrs16158 = site.navigation.link.cljs$core$IFn$_invoke$arity$variadic(bidi.bidi.path_for(site.components.my_routes,cljs.core.cst$kw$community),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Community"], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16158))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["order-end"], null)], null),attrs16158], 0))):({"className": "order-end"})),((cljs.core.map_QMARK_(attrs16158))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16158)], null)));
})();
return React.createElement(G__16159,G__16160,G__16161,G__16162,G__16163,G__16164,G__16165);
})();
return React.createElement(G__16151,G__16152,G__16153);
}),null,"navigation");
