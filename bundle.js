!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=87)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(32)("wks"),o=r(31),i=r(0).Symbol,a="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=n},function(t,e){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(37)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(8),o=r(36);t.exports=r(4)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(3),o=r(80),i=r(79),a=Object.defineProperty;e.f=r(4)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(0),o=r(2),i=r(13),a=r(5),c=r(11),s=function(t,e,r){var u,l,f,p=t&s.F,d=t&s.G,h=t&s.S,v=t&s.P,m=t&s.B,y=t&s.W,_=d?o:o[e]||(o[e]={}),g=_.prototype,k=d?n:h?n[e]:(n[e]||{}).prototype;for(u in d&&(r=e),r)(l=!p&&k&&void 0!==k[u])&&c(_,u)||(f=l?k[u]:r[u],_[u]=d&&"function"!=typeof k[u]?r[u]:m&&l?i(f,n):y&&k[u]==f?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((_.virtual||(_.virtual={}))[u]=f,t&s.R&&g&&!g[u]&&a(g,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(12);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";var n=r(12);t.exports.f=function(t){return new function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}(t)}},function(t,e,r){var n=r(8).f,o=r(11),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(32)("keys"),o=r(31);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){var n=r(60),o=r(19);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(7),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(83));e.default=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,n.default)(t,o.key,o)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()},function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){var n=r(3),o=r(7),i=r(14);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){var n,o,i,a=r(13),c=r(45),s=r(29),u=r(21),l=r(0),f=l.process,p=l.setImmediate,d=l.clearImmediate,h=l.MessageChannel,v=l.Dispatch,m=0,y={},_=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},g=function(t){_.call(t.data)};p&&d||(p=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return y[++m]=function(){c("function"==typeof t?t:Function(t),e)},n(m),m},d=function(t){delete y[t]},"process"==r(10)(f)?n=function(t){f.nextTick(a(_,t,1))}:v&&v.now?n=function(t){v.now(a(_,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=g,n=a(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(t){l.postMessage(t+"","*")},l.addEventListener("message",g,!1)):n="onreadystatechange"in u("script")?function(t){s.appendChild(u("script")).onreadystatechange=function(){s.removeChild(this),_.call(t)}}:function(t){setTimeout(a(_,t,1),0)}),t.exports={set:p,clear:d}},function(t,e,r){var n=r(3),o=r(12),i=r(1)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||void 0==(r=n(a)[i])?e:o(r)}},function(t,e,r){var n=r(10),o=r(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,r){var n=r(0).document;t.exports=n&&n.documentElement},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=r(2),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){var n=r(20),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(18),o=r(9),i=r(66),a=r(5),c=r(6),s=r(65),u=r(15),l=r(57),f=r(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,r,h,v,m,y){s(r,e,h);var _,g,k,b=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},x=e+" Iterator",w="values"==v,L=!1,S=t.prototype,E=S[f]||S["@@iterator"]||v&&S[v],O=E||b(v),j=v?w?b("entries"):O:void 0,M="Array"==e&&S.entries||E;if(M&&(k=l(M.call(new t)))!==Object.prototype&&k.next&&(u(k,x,!0),n||"function"==typeof k[f]||a(k,f,d)),w&&E&&"values"!==E.name&&(L=!0,O=function(){return E.call(this)}),n&&!y||!p&&!L&&S[f]||a(S,f,O),c[e]=O,c[x]=d,v)if(_={values:w?O:b("values"),keys:m?O:b("keys"),entries:j},y)for(g in _)g in S||i(S,g,_[g]);else o(o.P+o.F*(p||L),e,_);return _}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.storageList=e.storage=void 0;var n=a(r(78)),o=a(r(23)),i=a(r(22));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(e){(0,o.default)(this,t),this.name=e}return(0,i.default)(t,[{key:"saveIntoStorage",value:function(t){var e=this.getFromStorage();e.push(t),localStorage.setItem("'"+this.name+"'",(0,n.default)(e))}},{key:"removeFromStorage",value:function(t){var e=this.getFromStorage();e.forEach(function(r,n){t!==r.link&&t!==r||e.splice(n,1)}),localStorage.setItem("'"+this.name+"'",(0,n.default)(e))}},{key:"getFromStorage",value:function(){return null===localStorage.getItem("'"+this.name+"'")?[]:JSON.parse(localStorage.getItem("'"+this.name+"'"))}}]),t}();e.storage=new c("recipe"),e.storageList=new c("list")},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";var n=r(9),o=r(14),i=r(25);n(n.S,"Promise",{try:function(t){var e=o.f(this),r=i(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},function(t,e,r){"use strict";var n=r(9),o=r(2),i=r(0),a=r(27),c=r(24);n(n.P+n.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),r="function"==typeof t;return this.then(r?function(r){return c(e,t()).then(function(){return r})}:t,r?function(r){return c(e,t()).then(function(){throw r})}:t)}})},function(t,e,r){var n=r(1)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],a=i[n]();a.next=function(){return{done:r=!0}},i[n]=function(){return a},t(i)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(8),a=r(4),c=r(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];a&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,r){var n=r(5);t.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},function(t,e,r){var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){var n=r(0),o=r(26).set,i=n.MutationObserver||n.WebKitMutationObserver,a=n.process,c=n.Promise,s="process"==r(10)(a);t.exports=function(){var t,e,r,u=function(){var n,o;for(s&&(n=a.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(s)r=function(){a.nextTick(u)};else if(!i||n.navigator&&n.navigator.standalone)if(c&&c.resolve){var l=c.resolve(void 0);r=function(){l.then(u)}}else r=function(){o.call(n,u)};else{var f=!0,p=document.createTextNode("");new i(u).observe(p,{characterData:!0}),r=function(){p.data=f=!f}}return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},function(t,e){t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){var n=r(28),o=r(1)("iterator"),i=r(6);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){var n=r(6),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,e,r){var n=r(3);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){var n=r(13),o=r(48),i=r(47),a=r(3),c=r(33),s=r(46),u={},l={};(e=t.exports=function(t,e,r,f,p){var d,h,v,m,y=p?function(){return t}:s(t),_=n(r,f,e?2:1),g=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(d=c(t.length);d>g;g++)if((m=e?_(a(h=t[g])[0],h[1]):_(t[g]))===u||m===l)return m}else for(v=y.call(t);!(h=v.next()).done;)if((m=o(v,_,h.value,e))===u||m===l)return m}).BREAK=u,e.RETURN=l},function(t,e){t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){"use strict";var n,o,i,a,c=r(18),s=r(0),u=r(13),l=r(28),f=r(9),p=r(7),d=r(12),h=r(50),v=r(49),m=r(27),y=r(26).set,_=r(44)(),g=r(14),k=r(25),b=r(43),x=r(24),w=s.TypeError,L=s.process,S=L&&L.versions,E=S&&S.v8||"",O=s.Promise,j="process"==l(L),M=function(){},P=o=g.f,T=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(M,M)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof e&&0!==E.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var r=t._c;_(function(){for(var n=t._v,o=1==t._s,i=0,a=function(e){var r,i,a,c=o?e.ok:e.fail,s=e.resolve,u=e.reject,l=e.domain;try{c?(o||(2==t._h&&R(t),t._h=1),!0===c?r=n:(l&&l.enter(),r=c(n),l&&(l.exit(),a=!0)),r===e.promise?u(w("Promise-chain cycle")):(i=C(r))?i.call(r,s,u):s(r)):u(n)}catch(t){l&&!a&&l.exit(),u(t)}};r.length>i;)a(r[i++]);t._c=[],t._n=!1,e&&!t._h&&q(t)})}},q=function(t){y.call(s,function(){var e,r,n,o=t._v,i=F(t);if(i&&(e=k(function(){j?L.emit("unhandledRejection",o,t):(r=s.onunhandledrejection)?r({promise:t,reason:o}):(n=s.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=j||F(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){y.call(s,function(){var e;j?L.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},N=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},I=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw w("Promise can't be resolved itself");(e=C(t))?_(function(){var n={_w:r,_d:!1};try{e.call(t,u(I,n,1),u(N,n,1))}catch(t){N.call(n,t)}}):(r._v=t,r._s=1,A(r,!1))}catch(t){N.call({_w:r,_d:!1},t)}}};T||(O=function(t){h(this,O,"Promise","_h"),d(t),n.call(this);try{t(u(I,this,1),u(N,this,1))}catch(t){N.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(42)(O.prototype,{then:function(t,e){var r=P(m(this,O));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=j?L.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&A(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=u(I,t,1),this.reject=u(N,t,1)},g.f=P=function(t){return t===O||t===a?new i(t):o(t)}),f(f.G+f.W+f.F*!T,{Promise:O}),r(15)(O,"Promise"),r(41)("Promise"),a=r(2).Promise,f(f.S+f.F*!T,"Promise",{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(c||!T),"Promise",{resolve:function(t){return x(c&&this===a?O:this,t)}}),f(f.S+f.F*!(T&&r(40)(function(t){O.all(t).catch(M)})),"Promise",{all:function(t){var e=this,r=P(e),n=r.resolve,o=r.reject,i=k(function(){var r=[],i=0,a=1;v(t,!1,function(t){var c=i++,s=!1;r.push(void 0),a++,e.resolve(t).then(function(t){s||(s=!0,r[c]=t,--a||n(r))},o)}),--a||n(r)});return i.e&&o(i.v),r.promise},race:function(t){var e=this,r=P(e),n=r.reject,o=k(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}})},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,r){"use strict";var n=r(53),o=r(52),i=r(6),a=r(17);t.exports=r(34)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e,r){r(54);for(var n=r(0),o=r(5),i=r(6),a=r(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var u=c[s],l=n[u],f=l&&l.prototype;f&&!f[a]&&o(f,a,u),i[u]=i.Array}},function(t,e,r){var n=r(19);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(11),o=r(56),i=r(16)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,r){var n=r(20),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){var n=r(17),o=r(33),i=r(58);t.exports=function(t){return function(e,r,a){var c,s=n(e),u=o(s.length),l=i(a,u);if(t&&r!=r){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===r)return t||l||0;return!t&&-1}}},function(t,e,r){var n=r(10);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(11),o=r(17),i=r(59)(!1),a=r(16)("IE_PROTO");t.exports=function(t,e){var r,c=o(t),s=0,u=[];for(r in c)r!=a&&n(c,r)&&u.push(r);for(;e.length>s;)n(c,r=e[s++])&&(~i(u,r)||u.push(r));return u}},function(t,e,r){var n=r(61),o=r(30);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(8),o=r(3),i=r(62);t.exports=r(4)?Object.defineProperties:function(t,e){o(t);for(var r,a=i(e),c=a.length,s=0;c>s;)n.f(t,r=a[s++],e[r]);return t}},function(t,e,r){var n=r(3),o=r(63),i=r(30),a=r(16)("IE_PROTO"),c=function(){},s=function(){var t,e=r(21)("iframe"),n=i.length;for(e.style.display="none",r(29).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;n--;)delete s.prototype[i[n]];return s()};t.exports=Object.create||function(t,e){var r;return null!==t?(c.prototype=n(t),r=new c,c.prototype=null,r[a]=t):r=s(),void 0===e?r:o(r,e)}},function(t,e,r){"use strict";var n=r(64),o=r(36),i=r(15),a={};r(5)(a,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(a,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){t.exports=r(5)},function(t,e,r){var n=r(20),o=r(19);t.exports=function(t){return function(e,r){var i,a,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},function(t,e,r){"use strict";var n=r(67)(!0);r(34)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e){},function(t,e,r){r(69),r(68),r(55),r(51),r(39),r(38),t.exports=r(2).Promise},function(t,e,r){t.exports={default:r(70),__esModule:!0}},function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(71));e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,r){return function o(i,a){try{var c=e[i](a),s=c.value}catch(t){return void r(t)}if(!c.done)return n.default.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}("next")})}}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=k;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},m={};m[a]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(T([])));_&&_!==n&&o.call(_,a)&&(m=_);var g=L.prototype=x.prototype=Object.create(m);w.prototype=g.constructor=L,L.constructor=w,L[s]=w.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},S(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var o=new E(k(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(g),g[s]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function k(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=b(t,e,r);if("normal"===s.type){if(n=r.done?h:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function w(){}function L(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=b(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},a)}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(73),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){t.exports=r(74)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.recipe=void 0;var n=c(r(75)),o=c(r(72)),i=c(r(23)),a=c(r(22));function c(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(){(0,i.default)(this,t),this.appId="0731805c",this.appKey="f2ef4634d5d6b8129fe38f2aa3a946d5"}return(0,a.default)(t,[{key:"getRecipeByName",value:function(){var t=(0,o.default)(n.default.mark(function t(e,r){var o,i;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.edamam.com/search?q="+e+"&app_id="+this.appId+"&app_key="+this.appKey+"&from=0&to=100&"+r);case 2:return o=t.sent,t.next=5,o.json();case 5:return i=t.sent,t.abrupt("return",{responseData:i});case 7:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()}]),t}();e.recipe=new s},function(t,e,r){var n=r(2),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,r){t.exports={default:r(77),__esModule:!0}},function(t,e,r){var n=r(7);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){t.exports=!r(4)&&!r(37)(function(){return 7!=Object.defineProperty(r(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(9);n(n.S+n.F*!r(4),"Object",{defineProperty:r(8).f})},function(t,e,r){r(81);var n=r(2).Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},function(t,e,r){t.exports={default:r(82),__esModule:!0}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ui=void 0;var n=a(r(23)),o=a(r(22)),i=r(35);function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(){(0,n.default)(this,t),this.recipeContainer=document.querySelector(".recipe"),this.modal=document.querySelector(".modal"),this.modalBox=document.querySelector(".modal__box"),this.modalContent=document.querySelector(".modal__content"),this.listContainer=document.querySelector(".list__container"),this.alertBox=document.querySelector(".header__alert-box"),this.listAlert=document.querySelector(".list__alert")}return(0,o.default)(t,[{key:"showAlert",value:function(t,e,r){var n=this;this.clearAlert(e);var o=document.createElement("p");o.className=e,o.appendChild(document.createTextNode(t)),r.appendChild(o),setTimeout(function(){n.clearAlert(e)},3e3)}},{key:"clearAlert",value:function(t){var e=document.querySelector("."+t);e&&e.remove()}},{key:"showRecipes",value:function(t){var e=this;this.closeLoader(),this.recipeContainer.style.visibility="visible",t.forEach(function(t){e.recipeContainer.innerHTML+=' \n            <div class="recipe__card">\n                <button class="recipe__bookmarks">Add to bookmarks</button>\n                <ul class="recipe__list">\n                    <li class="recipe__photo"><img class="recipe__img" src="'+t.recipe.image+'" alt="'+t.recipe.label+'"></li>\n                    <li class="recipe__title">'+t.recipe.label+'</li> \n                    <li class="recipe__modal"><a class="recipe__modal-link" href="#">get nutritional value</a></li>\n                    <li class="recipe__calories">calories / portion: '+Math.round(t.recipe.calories/t.recipe.yield)+'</li>\n                    <li class="recipe__portions">portions: '+t.recipe.yield+'</li>\n                    <li class="recipe__source">recipe source: '+t.recipe.source+'</li>   \n                    <li class="recipe__url"><a target="_blank" class="recipe__link" href="'+t.recipe.url+'">See the full recipe</a></li>\n                </ul>\n                <ul class="recipe__ingr-list">\n                    <li class ="recipe__ingr-title">Ingredients:</li>\n                    '+e.displayIngredients(t.recipe.ingredients)+"\n                </ul>\n            </div>\n            "}),this.isBookmarked(),this.addToModal(t)}},{key:"displayIngredients",value:function(t){var e="";for(var r in t)e+='\n          <li class="recipe__ingr-item">'+t[r].text+"</li>\n           ";return e}},{key:"clearRecipes",value:function(){this.recipeContainer.innerHTML=""}},{key:"showLoader",value:function(){document.querySelector(".loader").classList.add("loader--is-visible")}},{key:"closeLoader",value:function(){document.querySelector(".loader").classList.remove("loader--is-visible")}},{key:"addToModal",value:function(t){var e=this;document.querySelectorAll(".recipe__modal-link").forEach(function(r,n){r.addEventListener("click",function(r){t.forEach(function(t,r){t.recipe.totalNutrients,r===n&&e.displayModal(t.recipe.totalNutrients,t.recipe.yield)}),r.preventDefault(),e.modalBox.classList.add("modal__box--is-opened"),e.modal.classList.add("modal--is-opened")})})}},{key:"displayModal",value:function(t,e){for(var r in this.modalContent.innerHTML="",t){var n=t[r];this.modalContent.innerHTML+='\n                <ul class="modal__list">\n                    <li class="modal__label">'+n.label+'</li>\n                    <li class="modal__quantity">'+Math.round(n.quantity/e)+'</li>\n                    <li class="modal__unit">'+n.unit+"</li>\n                </ul>\n            "}this.closeModal()}},{key:"closeModal",value:function(){this.modal.addEventListener("click",function(t){t.preventDefault(),t.target.classList.contains("modal__button")?(t.target.parentElement.classList.remove("modal__box--is-opened"),t.target.parentElement.parentElement.classList.remove("modal--is-opened")):t.target.classList.contains("modal")&&(t.target.classList.remove("modal--is-opened"),t.target.firstElementChild.classList.remove("modal__box--is-opened"))})}},{key:"addToList",value:function(){var t=this,e=document.querySelector(".list__form");e&&e.addEventListener("submit",function(e){e.preventDefault();var r=document.querySelector(".list__input"),n=r.value;if(""===n)t.showAlert("The field is empty","list__alert-text",t.listAlert);else{var o=document.createElement("p");o.className="list__item",o.appendChild(document.createTextNode(n));var a=document.createElement("button");a.innerHTML="x",a.className="list__remove",a.setAttribute("aria-label","remove"),o.appendChild(a),t.listContainer.appendChild(o),r.value="",i.storageList.saveIntoStorage(n),t.removeFromList()}})}},{key:"displayList",value:function(t){var e=this;t.forEach(function(t){e.listContainer.innerHTML+='\n                <p class="list__item">'+t+'<button class="list__remove">x</button></p>\n            '}),this.removeFromList()}},{key:"showHideList",value:function(){var t=this,e=document.querySelector(".list__arrow-button");e&&e.addEventListener("click",function(){t.listContainer.classList.contains("list__container--is-open")?(e.classList.remove("list__arrow-button--is-up"),e.setAttribute("aria-expanded","false"),t.listContainer.classList.remove("list__container--is-open")):(e.classList.add("list__arrow-button--is-up"),e.setAttribute("aria-expanded","true"),t.listContainer.classList.add("list__container--is-open"))})}},{key:"removeFromList",value:function(){this.listContainer.addEventListener("click",function(t){t.target.classList.contains("list__remove")&&t.target.parentElement.remove();var e=t.target.parentElement.textContent.slice(0,-1);i.storageList.removeFromStorage(e)})}},{key:"displayBookmarks",value:function(t){var e=document.querySelector(".bookmarks__content");t.forEach(function(t){e.innerHTML+=' \n            <div class="bookmarks__card">\n                <img class="bookmarks__photo" src="'+t.image+'" alt="'+t.name+'"> \n                <ul class="bookmarks__list">\n                    <li class="bookmarks__name">'+t.name+'</li>\n                    <li class="bookmarks__calories">'+t.calories+'</li>\n                    <li class="bookmarks__portions">'+t.portions+'</li>\n                    <li class="bookmarks__source">'+t.source+'</li>  \n                </ul>\n                <div class="bookmarks__links">\n                    <a target="_blank" class="bookmarks__recipe" href="'+t.link+'">Get the recipe</a>\n                    <button class="bookmarks__button">Remove from bookmarks</button> \n                </div>    \n            </div>\n            '}),document.querySelector(".bookmarks__empty").classList.add("bookmarks__empty--is-hidden")}},{key:"removeBookmarks",value:function(t){t.remove()}},{key:"isBookmarked",value:function(){i.storage.getFromStorage().forEach(function(t){var e=t.link,r=document.querySelector("[href='"+e+"']");if(r){var n=r.parentElement.parentElement.parentElement.firstElementChild;n.classList.add("recipe__bookmarks--is-added"),n.textContent="Added to bookmarks"}})}}]),t}();e.ui=new c},function(t,e){t.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">\r\n    <link rel="stylesheet" href="dist/main.css">\r\n    <title>Recipe App - Bookmarks</title>\r\n</head>\r\n<body>\r\n    <div class="bookmarks"> \r\n        <header class="bookmarks__header">\r\n            <a class="bookmarks__home-link" href="index.html">&larr;Home</a>\r\n            <h1 class="bookmarks__title">Bookmarks</h1>\r\n        </header>\r\n        <main class="bookmarks__content">\r\n            <p class="bookmarks__empty">You have no bookmarks</p>\r\n        </main>\r\n    </div>\r\n   <script src="dist/bundle.js"><\/script>\r\n</body>\r\n</html>\r\n'},function(t,e,r){"use strict";r(89),r(85);var n=r(84),o=r(76),i=r(35);function a(t){t.preventDefault(),n.ui.clearRecipes();var e=document.querySelector(".header__select"),r=e.value;""!==r&&(r="health="+e.value);var i=document.querySelector(".header__input").value,a=document.querySelector(".header__alert-box");""===i?n.ui.showAlert("Please add ingredients","header__alert-text",a):(n.ui.showLoader(),o.recipe.getRecipeByName(i,r).then(function(t){0===t.responseData.hits.length?(n.ui.closeLoader(),n.ui.showAlert("Recipe not found","header__alert-text",a)):(n.ui.showRecipes(t.responseData.hits),n.ui.displayModal())}))}function c(t){if(t.target.classList.contains("recipe__bookmarks"))if(t.preventDefault(),t.target.classList.contains("recipe__bookmarks--is-added"))t.target.classList.remove("recipe__bookmarks--is-added"),t.target.textContent="Add to bookmarks",i.storage.removeFromStorage(t.target.nextElementSibling.lastElementChild.firstElementChild.href);else{t.target.classList.add("recipe__bookmarks--is-added"),t.target.textContent="Added to bookmarks";var e=t.target.parentElement,r={name:e.querySelector(".recipe__title").textContent,image:e.querySelector(".recipe__img").src,calories:e.querySelector(".recipe__calories").textContent,portions:e.querySelector(".recipe__portions").textContent,source:e.querySelector(".recipe__source").textContent,link:e.querySelector(".recipe__link").href};i.storage.saveIntoStorage(r)}}function s(){n.ui.isBookmarked(),n.ui.showHideList();var t=document.querySelector(".bookmarks__empty"),e=document.querySelector(".bookmarks__content");if(e){var r=i.storage.getFromStorage();n.ui.displayBookmarks(r),null===document.querySelector(".bookmarks__card")&&t.classList.remove("bookmarks__empty--is-hidden"),e.addEventListener("click",function(t){t.target.classList.contains("bookmarks__button")&&(t.preventDefault(),n.ui.removeBookmarks(t.target.parentElement.parentElement),i.storage.removeFromStorage(t.target.previousElementSibling.href))})}if(document.querySelector(".list__container")){var o=i.storageList.getFromStorage();n.ui.displayList(o)}}!function(){document.addEventListener("DOMContentLoaded",s);var t=document.querySelector(".header__form");t&&t.addEventListener("submit",a);var e=document.querySelector(".recipe");e&&e.addEventListener("click",c)}(),n.ui.addToList()},function(t,e,r){t.exports=r(86)},,function(t,e){}]);
//# sourceMappingURL=bundle.js.map