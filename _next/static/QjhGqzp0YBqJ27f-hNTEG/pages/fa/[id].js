(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}},"76ZC":function(e,t,n){var r=n("GkXj"),a=n("QIE6"),i={decodeEntities:!0,lowerCaseAttributeNames:!1};function o(e,t){if("string"!==typeof e)throw new TypeError("First argument must be a string");return r(a(e,i),t)}o.domToReact=r,o.htmlToDOM=a,e.exports=o,e.exports.default=o},"7MhH":function(e,t,n){var r,a,i,o=n("wJvl"),s="html",l="head",u="body",c=/<([a-zA-Z]+[0-9]?)/,p=/<head.*>/i,f=/<body.*>/i,d=/<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,g=o.isIE(9),h=g||o.isIE();if("function"===typeof window.DOMParser){var m=new window.DOMParser,y=g?"text/xml":"text/html";r=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),g&&(e=e.replace(d,"<$1$2$3/>")),m.parseFromString(e,y)}}if("object"===typeof document.implementation){var v=document.implementation.createHTMLDocument(h?"HTML_DOM_PARSER_TITLE":void 0);a=function(e,t){if(t)return v.documentElement.getElementsByTagName(t)[0].innerHTML=e,v;try{return v.documentElement.innerHTML=e,v}catch(n){if(r)return r(e)}}}var b=document.createElement("template");b.content&&(i=function(e){return b.innerHTML=e,b.content.childNodes});var x=a||r;e.exports=function(e){var t,n,a,o,d=e.match(c);switch(d&&d[1]&&(t=d[1].toLowerCase()),t){case s:if(r)return n=r(e),p.test(e)||(a=n.getElementsByTagName(l)[0])&&a.parentNode.removeChild(a),f.test(e)||(a=n.getElementsByTagName(u)[0])&&a.parentNode.removeChild(a),n.getElementsByTagName(s);break;case l:case u:if(x)return o=x(e).getElementsByTagName(t),f.test(e)&&p.test(e)?o[0].parentNode.childNodes:o;break;default:if(i)return i(e);if(x)return x(e,u).getElementsByTagName(u)[0].childNodes}return[]}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=l(n("q1tI")),a=l(n("Xuae")),i=n("lwAK"),o=n("FYa8"),s=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(c,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,l=p.length;s<l;s++){var u=p[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var c=a.props[u],f=r[u]||new Set;f.has(c)?i=!1:(f.add(c),r[u]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,a.default)();function g(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(o.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}g.rewind=d.rewind;var h=g;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CC3I:function(e,t,n){var r=n("Lc7W");e.exports=function(e,t){var n,a=null;if(!e||"string"!==typeof e)return a;for(var i,o,s=r(e),l="function"===typeof t,u=0,c=s.length;u<c;u++)i=(n=s[u]).property,o=n.value,l?t(i,o,n):o&&(a||(a={}),a[i]=o);return a}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},F3Dj:function(e,t){e.exports={CASE_SENSITIVE_TAG_NAMES:["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"]}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},GkXj:function(e,t,n){var r=n("qpZ2"),a=n("MHQ9");function i(e){return a.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&a.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,a){for(var o,s,l,u,c=(a=a||{}).library||n("q1tI"),p=c.cloneElement,f=c.createElement,d=c.isValidElement,g=[],h="function"===typeof a.replace,m=0,y=t.length;m<y;m++)if(o=t[m],h&&d(s=a.replace(o)))y>1&&(s=p(s,{key:s.key||m})),g.push(s);else if("text"!==o.type){if(l=o.attribs,i(o)||(l=r(o.attribs)),u=null,"script"===o.type||"style"===o.type)o.children[0]&&(l.dangerouslySetInnerHTML={__html:o.children[0].data});else{if("tag"!==o.type)continue;"textarea"===o.name&&o.children[0]?l.defaultValue=o.children[0].data:o.children&&o.children.length&&(u=e(o.children,a))}y>1&&(l.key=m),g.push(f(o.name,l,u))}else g.push(o.data);return 1===g.length?g[0]:g}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JjeS:function(e,t,n){e.exports=n("/0+H")},Lc7W:function(e,t){var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,a=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,u=/^\s+|\s+$/g,c="\n",p="/",f="*",d="",g="comment",h="declaration";function m(e){return e?e.replace(u,d):d}e.exports=function(e,t){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var u=1,y=1;function v(e){var t=e.match(r);t&&(u+=t.length);var n=e.lastIndexOf(c);y=~n?e.length-n:y+e.length}function b(){var e={line:u,column:y};return function(t){return t.position=new x(e),S(),t}}function x(e){this.start=e,this.end={line:u,column:y},this.source=t.source}x.prototype.content=e;var k=[];function w(n){var r=new Error(t.source+":"+u+":"+y+": "+n);if(r.reason=n,r.filename=t.source,r.line=u,r.column=y,r.source=e,!t.silent)throw r;k.push(r)}function A(t){var n=t.exec(e);if(n){var r=n[0];return v(r),e=e.slice(r.length),n}}function S(){A(a)}function F(e){var t;for(e=e||[];t=E();)!1!==t&&e.push(t);return e}function E(){var t=b();if(p==e.charAt(0)&&f==e.charAt(1)){for(var n=2;d!=e.charAt(n)&&(f!=e.charAt(n)||p!=e.charAt(n+1));)++n;if(n+=2,d===e.charAt(n-1))return w("End of comment missing");var r=e.slice(2,n-2);return y+=2,v(r),e=e.slice(n),y+=2,t({type:g,comment:r})}}function C(){var e=b(),t=A(i);if(t){if(E(),!A(o))return w("property missing ':'");var r=A(s),a=e({type:h,property:m(t[0].replace(n,d)),value:r?m(r[0].replace(n,d)):d});return A(l),a}}return S(),function(){var e,t=[];for(F(t);e=C();)!1!==e&&(t.push(e),F(t));return t}()}},MHQ9:function(e,t,n){var r=n("q1tI"),a=/-([a-z])/g,i=/^--[a-zA-Z0-9-]+$|^[^-]+$/;var o=r.version.split(".")[0]>=16;e.exports={PRESERVE_CUSTOM_ATTRIBUTES:o,camelCase:function(e){if("string"!==typeof e)throw new TypeError("First argument must be a string");return i.test(e)?e:e.toLowerCase().replace(a,(function(e,t){return t.toUpperCase()}))},invertObject:function(e,t){if(!e||"object"!==typeof e)throw new TypeError("First argument must be an object");var n,r,a="function"===typeof t,i={},o={};for(n in e)r=e[n],a&&(i=t(n,r))&&2===i.length?o[i[0]]=i[1]:"string"===typeof r&&(o[r]=n);return o},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}}},"N3/Y":function(e,t){e.exports={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QIE6:function(e,t,n){var r=n("7MhH"),a=n("wJvl"),i=a.formatDOM,o=a.isIE(9),s=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];var t,n=e.match(s);return n&&n[1]&&(t=n[1],o&&(e=e.replace(n[0],""))),i(r(e),null,t)}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),i=n("W8MJ"),o=n("7W2i"),s=n("a1gu"),l=n("Nsbk"),u=n("RIqP");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){o(u,s);var l=c(u);function u(e){var i;return r(this,u),i=l.call(this,e),f&&(t.add(a(i)),n(a(i))),i}return i(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},"eKC+":function(e,t,n){var r=n("nYr6"),a=n("xp0l"),i=n("N3/Y"),o=i.MUST_USE_PROPERTY,s=i.HAS_BOOLEAN_VALUE,l=i.HAS_NUMERIC_VALUE,u=i.HAS_POSITIVE_NUMERIC_VALUE,c=i.HAS_OVERLOADED_BOOLEAN_VALUE;function p(e,t){return(e&t)===t}function f(e,t,n){var r,a,i,f=e.Properties,d=e.DOMAttributeNames;for(a in f)r=d[a]||(n?a:a.toLowerCase()),i=f[a],t[r]={attributeName:r,propertyName:a,mustUseProperty:p(i,o),hasBooleanValue:p(i,s),hasNumericValue:p(i,l),hasPositiveNumericValue:p(i,u),hasOverloadedBooleanValue:p(i,c)}}var d={};f(r,d);var g={};f(a,g,!0);var h={};f(r,h),f(a,h,!0);e.exports={html:d,svg:g,properties:h,isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},nYr6:function(e,t){e.exports={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"}}},qpZ2:function(e,t,n){var r=n("eKC+"),a=n("CC3I"),i=n("MHQ9"),o=i.camelCase,s=r.html,l=r.svg,u=r.isCustomAttribute,c=Object.prototype.hasOwnProperty;e.exports=function(e){var t,n,r,p;e=e||{};var f={};for(t in e)r=e[t],u(t)?f[t]=r:(n=t.toLowerCase(),c.call(s,n)?f[(p=s[n]).propertyName]=!!(p.hasBooleanValue||p.hasOverloadedBooleanValue&&!r)||r:c.call(l,t)?f[(p=l[t]).propertyName]=r:i.PRESERVE_CUSTOM_ATTRIBUTES&&(f[t]=r));return null!=e.style&&(f.style=function(e){var t={};e&&a(e,(function(e,n){e&&n&&(t[o(e)]=n)}));return t}(e.style)),f}},wJvl:function(e,t,n){for(var r,a=n("F3Dj").CASE_SENSITIVE_TAG_NAMES,i={},o=0,s=a.length;o<s;o++)r=a[o],i[r.toLowerCase()]=r;function l(e){for(var t,n={},r=0,a=e.length;r<a;r++)n[(t=e[r]).name]=t.value;return n}function u(e){var t=function(e){return i[e]}(e=e.toLowerCase());return t||e}e.exports={formatAttributes:l,formatDOM:function e(t,n,r){n=n||null;for(var a,i,o,s=[],c=0,p=t.length;c<p;c++){switch(a=t[c],o={next:null,prev:s[c-1]||null,parent:n},(i=s[c-1])&&(i.next=o),"#"!==a.nodeName[0]&&(o.name=u(a.nodeName),o.attribs={},a.attributes&&a.attributes.length&&(o.attribs=l(a.attributes))),a.nodeType){case 1:"script"===o.name||"style"===o.name?o.type=o.name:o.type="tag",o.children=e(a.childNodes,o);break;case 3:o.type="text",o.data=a.nodeValue;break;case 8:o.type="comment",o.data=a.nodeValue}s.push(o)}return r&&(s.unshift({name:r.substring(0,r.indexOf(" ")).toLowerCase(),data:r,type:"directive",next:s[0]?s[0]:null,prev:null,parent:n}),s[1]&&(s[1].prev=s[0])),s},isIE:function(e){return e?document.documentMode===e:/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},wX3T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fa/[id]",function(){return n("ybtE")}])},wZee:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i,o=r.util.type(t);switch(n=n||{},o){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var s in a={},n[i]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var u=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(t,n){n===u&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,a,i){i=i||{};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var l=t[s],u=r.util.type(l);"Object"!==u||i[o(l)]?"Array"!==u||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,o=0;i=a.elements[o++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(n,a,i){var o=r.util.getLanguage(n),s=r.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var u={element:n,language:o,grammar:s,code:n.textContent};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),i&&i.call(u.element)}if(r.hooks.run("before-sanity-check",u),!u.code)return r.hooks.run("complete",u),void(i&&i.call(u.element));if(r.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var p=new Worker(r.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language));else c(r.util.encode(u.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var l in n)t[l]=n[l];delete t.rest}var u=new i;return o(u,u.head,e),function e(t,n,i,l,u,c,p){for(var f in i)if(i.hasOwnProperty(f)&&i[f]){var d=i[f];d=Array.isArray(d)?d:[d];for(var g=0;g<d.length;++g){if(p&&p==f+","+g)return;var h=d[g],m=h.inside,y=!!h.lookbehind,v=!!h.greedy,b=0,x=h.alias;if(v&&!h.pattern.global){var k=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,k+"g")}h=h.pattern||h;for(var w=l.next,A=u;w!==n.tail;A+=w.value.length,w=w.next){var S=w.value;if(n.length>t.length)return;if(!(S instanceof a)){var F=1;if(v&&w!=n.tail.prev){if(h.lastIndex=A,!(T=h.exec(t)))break;var E=T.index+(y&&T[1]?T[1].length:0),C=T.index+T[0].length,_=A;for(_+=w.value.length;E>=_;)w=w.next,_+=w.value.length;if(_-=w.value.length,A=_,w.value instanceof a)continue;for(var O=w;O!==n.tail&&(_<C||"string"===typeof O.value&&!O.prev.value.greedy);O=O.next)F++,_+=O.value.length;F--,S=t.slice(A,_),T.index-=A}else{h.lastIndex=0;var T=h.exec(S)}if(T){y&&(b=T[1]?T[1].length:0);E=T.index+b,T=T[0].slice(b),C=E+T.length;var M=S.slice(0,E),P=S.slice(C),N=w.prev;M&&(N=o(n,N,M),A+=M.length),s(n,N,F);var I=new a(f,m?r.tokenize(T,m):T,x,T,v);if(w=o(n,N,I),P&&o(n,w,P),F>1&&e(t,n,i,w.prev,A,!0,f+","+g),c)break}else if(c)break}}}}}(e,u,t,u.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(u)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:a};function a(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function s(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=r,a.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),r.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,o=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),o&&e.close()}),!1),r):r;var l=r.util.currentScript();function u(){r.manual||r.highlightAll()}if(l&&(r.filename=l.src,l.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var c=document.readyState;"loading"===c||"interactive"===c&&l&&l.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return r}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var r,a=e.getAttribute("data-src"),i=e,o=/\blang(?:uage)?-([\w-]+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(r=(e.className.match(o)||[,""])[1]),!r){var s=(a.match(/\.(\w+)$/)||[,""])[1];r=t[s]||s}var l=document.createElement("code");l.className="language-"+r,e.textContent="",l.textContent="Loading\u2026",e.appendChild(l);var u=new XMLHttpRequest;u.open("GET",a,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):u.status>=400?l.textContent="\u2716 Error "+u.status+" while fetching file: "+u.statusText:l.textContent="\u2716 Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,n("yLpj"))},xp0l:function(e,t){e.exports={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space"}}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ybtE:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d})),n.d(t,"config",(function(){return g})),n.d(t,"default",(function(){return h}));var r=n("8Kt/"),a=n.n(r),i=n("wZee"),o=n.n(i),s=n("q1tI"),l=n.n(s),u=n("76ZC"),c=n.n(u),p=n("JjeS"),f=l.a.createElement,d=!0,g={amp:"hybrid"};function h(e){var t=e.postData,n=Object(p.useAmp)();return Object(s.useEffect)((function(){setTimeout((function(){o.a.highlightAll()}),0)}),[]),f("main",{className:"farsi"},f(a.a,null,f("style",null,"\nbody {\nfont-family:Tahoma;\nfont-size:12px;\ndirection:rtl;\nline-height: 27px;\n}\n.text-wrap {\n    margin: 0 5%;\n}\nmain {\n    border-top: 5px solid #000;\n    padding-top: 10px;\n}\nheader,footer,.dark-mode-toggle{\ndisplay:none}\n.post-title {\n    margin: 30px 0;\n    font-size: 16px;\n    }\n    pre {\n    background: rgba(0, 0, 0, 0.05);\n    padding: 4px 10px;\n    font-family: monospace;\n    text-align: left;\n    border-radius: 2px;\n    }\n    .non-amp-btn {\n       background: #0070f3;\n    box-shadow: none;\n    border: none;\n    outline: none;\n    color: #fff;\n    width: 100%;\n    padding: 12px;\n    margin-top: 30px;\n    font-family: Tahoma;\n    font-size: 12px;\n    box-shadow: -1px -1px 14px 0 rgba(0,118,255,.39);\n    display: block;\n    text-align: center;\n    text-decoration: none;\n    }\n"),f("title",null,t.title)),f("div",{className:"container"},f("article",{className:"post-content"},t.img&&n?f("amp-img",{src:t.img,alt:t.title,height:"373",width:"954",layout:"responsive"}):t.img&&f("img",{className:"post-img",src:t.img,alt:t.title}),f("div",{className:"text-wrap"},t.title&&f("h1",{className:"post-title"},t.title),t.date&&f("time",{className:"post-time farsi-num"},t.date),t.contentHtml&&c()(t.contentHtml)))),n&&f("a",{href:"https://anorouzi.ir",className:"non-amp-btn"},"\u0646\u0633\u062e\u0647 \u0645\u0639\u0645\u0648\u0644\u06cc \u0633\u0627\u06cc\u062a"))}}},[["wX3T",0,1]]]);