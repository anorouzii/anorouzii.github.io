(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=u(n("q1tI")),o=u(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function u(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=s.length;c<u;c++){var l=s[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?a=!1:(p.add(f),r[l]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function y(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}y.rewind=d.rewind;var g=y;t.default=g},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ge}));var r={};n.r(r),n.d(r,"initialize",(function(){return V})),n.d(r,"ga",(function(){return Q})),n.d(r,"set",(function(){return ee})),n.d(r,"send",(function(){return te})),n.d(r,"pageview",(function(){return ne})),n.d(r,"modalview",(function(){return re})),n.d(r,"timing",(function(){return oe})),n.d(r,"event",(function(){return ae})),n.d(r,"exception",(function(){return ie})),n.d(r,"plugin",(function(){return ce})),n.d(r,"outboundLink",(function(){return ue})),n.d(r,"testModeAPI",(function(){return le})),n.d(r,"default",(function(){return fe}));var o=n("q1tI"),a=n.n(o),i=n("8Kt/"),c=n.n(i),u=n("YFqc"),l=n.n(u),f=n("Fb0A"),s=n("TtQW"),p=a.a.createElement,d=function(){return p("div",{className:"container"},p("div",{className:"intro"},p(s.a,{position:"intro-logo"}),p("div",{className:"content"},p("h1",null,"Ali Norouzi"),p("p",null,"Front-end Web Developer & Wordpress Developer"),p(f.a,null),p(l.a,{href:"/contact-me"},p("a",{className:"btn btn-blue"},"Contact Me")),p(l.a,{href:"blog/fa"},p("a",{style:{marginLeft:"15px"},className:"btn btn-outline"},"Blog ",p("span",{style:{fontSize:"12px",marginLeft:"4px"}},"( FARSI )"))))))},y=n("8lYe"),g=n("b0oO"),b=n("17x9"),v=n.n(b);function m(e){console.warn("[react-ga]",e)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E="_blank",x=1,C=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=k(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==h(o)&&"function"!==typeof o?A(r):o,P(A(n),"handleClick",(function(e){var r=n.props,o=r.target,a=r.eventLabel,i=r.to,c=r.onClick,u=r.trackerNames,l={label:a},f=o!==E,s=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===x);f&&s?(e.preventDefault(),t.trackLink(l,(function(){window.location.href=i}),u)):t.trackLink(l,(function(){}),u),c&&c(e)})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},O(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===E&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,a.a.createElement("a",n)}}])&&j(n.prototype,r),o&&j(n,o),t}(o.Component);function D(e){return e.replace(/^\s+|\s+$/g,"")}P(C,"trackLink",(function(){m("ga tracking not enabled")})),P(C,"propTypes",{eventLabel:v.a.string.isRequired,target:v.a.string,to:v.a.string,onClick:v.a.func,trackerNames:v.a.arrayOf(v.a.string)}),P(C,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var _=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var N="REDACTED (Potential Email Address)";function q(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(m("This arg looks like an email address, redacting."),N):t?D(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(_)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}var I=function(e){var t,n,r,o,a,i,c,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=o,c.parentNode.insertBefore(i,c)};function T(e){console.info("[react-ga]",e)}var M=[],L={calls:M,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];M.push([].concat(t))},resetCalls:function(){M.length=0}};function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){return(z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var K="undefined"===typeof window||"undefined"===typeof document,H=!1,B=!0,Y=!1,G=!0,U=function(){var e;return Y?L.ga.apply(L,arguments):!K&&(window.ga?(e=window).ga.apply(e,arguments):m("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function X(e){return q(e,B)}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof U){if("string"!==typeof o)return void m("ga command must be a string");!G&&Array.isArray(e)||U.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){U.apply(void 0,W(["".concat(e,".").concat(o)].concat(n.slice(1))))}))}}function $(e,t){e?t&&(t.debug&&!0===t.debug&&(H=!0),!1===t.titleCase&&(B=!1),t.useExistingGa)||(t&&t.gaOptions?U("create",e,t.gaOptions):U("create",e,"auto")):m("gaTrackingID is required in initialize()")}function V(e,t){if(t&&!0===t.testMode)Y=!0;else{if(K)return!1;t&&!0===t.standardImplementation||I(t)}return G=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===z(e)?$(e.trackingId,e):m("All configs must be an object")})):$(e,t),!0}function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(U.apply(void 0,t),H&&(T("called ga('arguments');"),T("with arguments: ".concat(JSON.stringify(t))))),window.ga}function ee(e,t){e?"object"===z(e)?(0===Object.keys(e).length&&m("empty `fieldsObject` given to .set()"),Z(t,"set",e),H&&(T("called ga('set', fieldsObject);"),T("with fieldsObject: ".concat(JSON.stringify(e))))):m("Expected `fieldsObject` arg to be an Object"):m("`fieldsObject` is required in .set()")}function te(e,t){Z(t,"send",e),H&&(T("called ga('send', fieldObject);"),T("with fieldObject: ".concat(JSON.stringify(e))),T("with trackers: ".concat(JSON.stringify(t))))}function ne(e,t,n){if(e){var r=D(e);if(""!==r){var o={};if(n&&(o.title=n),Z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),H){T("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),T("with path: ".concat(r).concat(a))}}else m("path cannot be an empty string in .pageview()")}else m("path is required in .pageview()")}function re(e,t){if(e){var n,r="/"===(n=D(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);Z(t,"send","pageview",o),H&&(T("called ga('send', 'pageview', path);"),T("with path: ".concat(o)))}else m("modalName cannot be an empty string or a single / in .modalview()")}else m("modalName is required in .modalview(modalName)")}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var i={hitType:"timing",timingCategory:X(t),timingVar:X(n),timingValue:r};o&&(i.timingLabel=X(o)),te(i,a)}else m("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=R(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:X(t),eventAction:X(n)};r&&(l.eventLabel=X(r)),"undefined"!==typeof o&&("number"!==typeof o?m("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?m("`args.nonInteraction` must be a boolean."):l.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?m("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&m("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=c[e]})),te(l,u)}else m("args.category AND args.action are required in event()")}function ie(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=X(n)),"undefined"!==typeof r&&("boolean"!==typeof r?m("`args.fatal` must be a boolean."):o.exFatal=r),te(o,t)}var ce={require:function(e,t,n){if(e){var r=D(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==z(t))return void m("Expected `options` arg to be an Object");0===Object.keys(t).length&&m("Empty `options` given to .require()"),Q(o,r,t),H&&T("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Q(o,r),H&&T("called ga('require', '".concat(r,"');"))}else m("`name` cannot be an empty string in .require()")}else m("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)m("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)m("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(Q(o,r,n),H&&(T("called ga('".concat(o,"');")),T('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Q(o,n),H&&(T("called ga('".concat(o,"');")),T("with payload: ".concat(JSON.stringify(n))))):(Q(o),H&&T("called ga('".concat(o,"');")))}}};function ue(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:X(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},te(r,n)}else m("args.label is required in outboundLink()");else m("hitCallback function is required")}var le=L,fe={initialize:V,ga:Q,set:ee,send:te,pageview:ne,modalview:re,timing:oe,event:ae,exception:ie,plugin:ce,outboundLink:ue,testModeAPI:L};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}C.origTrackLink=C.trackLink,C.trackLink=ue;var de=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:C}),ye=a.a.createElement;function ge(){return Object(o.useEffect)((function(){de.initialize("UA-168010439-1"),de.pageview(window.location.pathname+window.location.search)}),[]),ye("div",null,ye(c.a,null,ye("title",null,"Ali Norouzi | Front-end Web Developer"),ye("meta",{name:"description",content:"I'm a front-end web developer and also an experienced Wordpress developer .this is my personal website where you can see some of my works."}),ye("link",{rel:"icon",href:"/favicon.ico"})),ye(g.a,null),ye("main",null,ye(d,null)),ye(y.a,null))}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),l=n("RIqP");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(l,c);var u=f(l);function l(e){var a;return r(this,l),a=u.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);