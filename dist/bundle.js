var IdentifiersWidget=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(2)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".IdentifiersWidget{font-family:roboto,sans-serif;width:500px;height:100%;min-height:300px;margin:20px auto;border:solid 1px #ccc;border-radius:3px;padding:1em;box-shadow:1px 1px 1px rgba(0,0,0,.2);display:flex;flex-direction:column}.IdentifiersWidget h1{background-color:#00BCD4;margin:-.5em -.5em .5em -.5em;padding:.4em .4em .2em;color:#fff;text-shadow:1px 1px 1px rgba(0,0,0,.2)}.IdentifiersWidget ul{list-style-type:none;list-style-position:outside;flex-grow:1}.IdentifiersWidget ul li{padding:.3em}.IdentifiersWidget .footer{color:#333;text-align:right}.IdentifiersWidget .loader{display:flex;align-items:center;justify-content:center;flex-grow:1}.IdentifiersWidget .lds-ripple{display:inline-block;position:relative;width:80px;height:80px}.IdentifiersWidget .lds-ripple div{position:absolute;border:4px solid #00BCD4;opacity:1;border-radius:50%;animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}.IdentifiersWidget .lds-ripple div:nth-child(2){animation-delay:-.5s}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0;left:0;width:72px;height:72px;opacity:0}}",""])},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?p:s,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",s="suspendedYield",d="executing",p="completed",h={};function y(){}function v(){}function g(){}var m={};m[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(T([])));w&&w!==n&&r.call(w,i)&&(m=w);var x=g.prototype=y.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var c=f(t[n],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},S(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,o){var i=new E(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"set",(function(){return Ot})),n.d(r,"resolve",(function(){return Tt}));var o=n(0),i=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=new Map;function u(t){var e=c.get(t);return void 0===e&&(e=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),c.set(t,e)),e}function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.dispatchEvent(new CustomEvent(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({bubbles:!1},n)))}function l(t,e){var n=window.ShadyCSS;return n&&!n.nativeShadow?t(n):e}function s(t){var e=String(t.tagName).toLowerCase();return"<".concat(e,">")}var d="ActiveXObject"in window,p=Promise.resolve();function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y=function(t){return t},g=function(t){if("object"!==h(t))throw TypeError("Assigned value must be an object: ".concat("undefined"==typeof v?"undefined":h(v)));return t&&Object.freeze(t)};function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var w=new WeakMap,x=new WeakMap,S=[],E=0,j=0,N=1e3/60;function O(){try{var t=1;j=performance.now();for(var e=function(){var e=S[E];if(w.has(e)){var n=w.get(e),r=x.get(e),o=e[n];if(o!==r&&(x.set(e,o),o(),l(r?function(t){return t.styleSubtree(e)}:function(t){return t.styleElement(e)})),E%t==0){if(E+1<S.length&&performance.now()-j>N)throw S;t*=2}}};E<S.length;E+=1)e();S=[],E=0,p.then((function(){j=0}))}catch(t){if(E+=1,requestAnimationFrame(O),p.then((function(){j=0})),t!==S)throw t}}function k(t){if(t.target===t.currentTarget&&w.has(t.target)){if(j)S.length||(performance.now()-j>N?requestAnimationFrame(O):p.then(O));else{if(S.length)return void S.splice(E,0,t.target);requestAnimationFrame(O)}S.push(t.target)}}function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof t)throw TypeError("The first argument must be a function: ".concat(b(t)));var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){m(t,e,n[e])}))}return t}({shadowRoot:!0},e);return{get:function(e){var r=t(e);return function(){return r(e,n.shadowRoot?e.shadowRoot:e)}},connect:function(t,e){if(w.has(t))throw Error("Render factory already used in '".concat(w.get(t),"' key"));if(n.shadowRoot&&!t.shadowRoot){var r={mode:"open"};"object"===b(n.shadowRoot)&&Object.assign(r,n.shadowRoot),t.attachShadow(r)}return t.addEventListener("@invalidate",k),w.set(t,e),function(){t.removeEventListener("@invalidate",k),w.delete(t)}}}}var L=new WeakMap;function M(t,e){var n=L.get(t);n||(n=new Map,L.set(t,n));var r=n.get(e);return r||(r={target:t,key:e,value:void 0,deps:new Set,state:1,checksum:0},n.set(e,r)),r}function A(t){var e=t.state,n=t.deps,r=e;return n.forEach((function(t){t.target[t.key],r+=t.state})),r}var C=null;function _(t,e,n){if(C)throw C=null,Error("Try to invalidate '".concat(e,"' in '").concat(s(t),"' get call"));var r=M(t,e);r.checksum=0,n&&(r.value=void 0)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){var e="function"==typeof Map?new Map:void 0;return(R=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return I(t,arguments,D(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),F(r,t)})(t)}function I(t,e,n){return(I=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&F(o,n.prototype),o}).apply(null,arguments)}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var H=new Set;function G(t){H.size||p.then((function(){H.forEach((function(t){return f(t,"@invalidate",{bubbles:!0})})),H.clear()})),H.add(t)}var q=function(t,e){return e};function z(t,e){t.hybrids=e,t.connects=[],Object.keys(e).forEach((function(n){var r,o=e[n],i=B(o);r="function"===i?"render"===n?T(o):{get:o}:null!==o&&"object"===i&&("object"!==i||o.get||o.set||o.connect)?{get:o.get||q,set:o.set||!o.get&&q||void 0,connect:o.connect}:function(t,e){var n=h(t),r=y;switch(n){case"string":r=String;break;case"number":r=Number;break;case"boolean":r=Boolean;break;case"function":t=(r=t)();break;case"object":t&&Object.freeze(t),r=g}return{get:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return n},set:function(t,e,n){return r(e,n)},connect:"object"!==n&&"undefined"!==n?function(n,r,o){if(n[r]===t){var i=u(r);if(n.hasAttribute(i)){var a=n.getAttribute(i);n[r]=""===a||a}}return e&&e(n,r,o)}:e}}(o),Object.defineProperty(t.prototype,n,{get:function(){return function(t,e,n){var r=M(t,e);if(C===r)throw C=null,Error("Circular '".concat(e,"' get invocation in '").concat(s(t),"'"));C&&C.deps.add(r);var o=C;if(C=r,r.checksum&&r.checksum===A(r))return C=o,r.value;r.deps.size&&r.deps.clear();try{var i=n(t,r.value);i!==r.value&&(r.state+=1,r.value=i),r.checksum=A(r),C=o}catch(t){throw C=null,t}return r.value}(this,n,r.get)},set:r.set&&function(t){var e=this;!function(t,e,n,r,o){if(C)throw C=null,Error("Try to set '".concat(e,"' of '").concat(s(t),"' in get call"));var i=M(t,e),a=n(t,r,i.value);a!==i.value&&(i.state+=1,i.value=a,o())}(this,n,r.set,t,(function(){return G(e)}))},enumerable:!0,configurable:!1}),r.connect&&t.connects.push((function(t){return r.connect(t,n,(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&_(t,n),G(t)}))}))}))}var U=new WeakMap;function X(t,e){var n=B(e);if("object"!==n&&"function"!==n)throw TypeError("Second argument must be an object or a function: ".concat(n));var r=window.customElements.get(t);if("function"===n)return r!==e?window.customElements.define(t,e):r;if(r){if(r.hybrids===e)return r;throw Error("Element '".concat(t,"' already defined"))}var o=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),W(this,D(n).apply(this,arguments))}var r,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(n,e),r=n,i=[{key:"name",get:function(){return t}}],(o=[{key:"connectedCallback",value:function(){var t=this,e=this.constructor.connects.reduce((function(e,n){var r=n(t);return r&&e.add(r),e}),new Set);U.set(this,e),G(this)}},{key:"disconnectedCallback",value:function(){U.get(this).forEach((function(t){return t()}))}}])&&P(r.prototype,o),i&&P(r,i),n}(R(HTMLElement));return z(o,e),customElements.define(t,o),o}function $(t){return Object.keys(t).reduce((function(e,n){var r=u(n.replace(/((?!([A-Z]{2}|^))[A-Z])/g,"-$1"));return e[n]=X(r,t[n]),e}),{})}function Z(){return"object"===B(arguments.length<=0?void 0:arguments[0])?$(arguments.length<=0?void 0:arguments[0]):X.apply(void 0,arguments)}var Y=new WeakMap,J={get:function(t,e){return Y.has(t)?Y.get(t):(void 0!==e&&Y.set(t,e),e)},set:function(t,e){return Y.set(t,e),e}};function V(t){for(var e;t&&(e=J.get(t))&&e.endNode;)t=e.endNode;return t}function K(t){var e=J.get(t),n=e.startNode;if(n)for(var r=n,o=V(e.endNode).nextSibling;r;){var i=r.nextSibling;r.parentNode.removeChild(r),r=i!==o&&i}}var Q=new WeakMap;function tt(t,e,n){var r=Q.get(e),o=n.map((function(t,e){return{id:Object.prototype.hasOwnProperty.call(t,"id")?t.id:e,value:t,placeholder:null,available:!0}}));if(Q.set(e,o),r){var i=new Set;o.forEach((function(t){return i.add(t.id)})),r=r.filter((function(t){return!!i.has(t.id)||(K(t.placeholder),t.placeholder.parentNode.removeChild(t.placeholder),!1)}))}var a=e,c=n.length-1,u=J.get(e);o.forEach((function(e,n){var o,i;if(r)for(var f=0;f<r.length;f+=1)if(r[f].available&&r[f].id===e.id){o=r[f];break}o?(o.available=!1,(i=o.placeholder).previousSibling!==a&&function(t,e){var n=J.get(t),r=n.startNode,o=V(n.endNode);e.parentNode.insertBefore(t,e.nextSibling);for(var i=t,a=r;a;){var c=a.nextSibling;i.parentNode.insertBefore(a,i.nextSibling),i=a,a=c!==o.nextSibling&&c}}(i,a),o.value!==e.value&&nt(t,i,e.value)):(i=document.createTextNode(""),a.parentNode.insertBefore(i,a.nextSibling),nt(t,i,e.value)),a=V(J.get(i).endNode||i),0===n&&(u.startNode=i),n===c&&(u.endNode=a),e.placeholder=i})),r&&r.forEach((function(t){t.available&&(K(t.placeholder),t.placeholder.parentNode.removeChild(t.placeholder))}))}function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e,n){var r=Array.isArray(n)?"array":et(n),o=J.get(e,{});switch(o.type!==r&&(K(e),"array"===r&&Q.delete(e),o=J.set(e,{type:r}),""!==e.textContent&&(e.textContent="")),r){case"function":n(t,e);break;case"array":tt(t,e,n);break;default:e.textContent="number"===r||n?n:""}}function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var ot=new WeakMap;function it(t){return(it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var at=new WeakMap;function ct(t,e,n){var r=at.get(e)||new Set,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;return Array.isArray(t)?t.forEach((function(t){return e.add(t)})):null!==t&&"object"===it(t)?Object.keys(t).forEach((function(n){return t[n]&&e.add(n)})):e.add(t),e}(n);at.set(e,o),o.forEach((function(t){e.classList.add(t),r.delete(t)})),r.forEach((function(t){e.classList.remove(t)}))}function ut(t){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var ft=new WeakMap;function lt(t,e,n){if(null===n||"object"!==ut(n))throw TypeError("Style value must be an object in ".concat(s(e),":"),n);var r=ft.get(e)||new Map,o=Object.keys(n).reduce((function(t,o){var i=u(o),a=n[o];return a||0===a?e.style.setProperty(i,a):e.style.removeProperty(i),t.set(i,a),r.delete(i),t}),new Map);r.forEach((function(t,n){e.style[n]=""})),ft.set(e,o)}function st(t,e,n){if("on"===e.substr(0,2))return function(t){return function(e,n,r,o){if(o&&n.removeEventListener(t,ot.get(o),void 0!==o.options&&o.options),r){if("function"!=typeof r)throw Error("Event listener must be a function: ".concat(rt(r)));ot.set(r,r.bind(null,e)),n.addEventListener(t,ot.get(r),void 0!==r.options&&r.options)}}}(e.substr(2));switch(t){case"class":return ct;case"style":return lt;default:return function(r,o,i){if(n||o instanceof SVGElement||!(e in o))if(!1===i||null==i)o.removeAttribute(t);else{var a=!0===i?"":String(i);o.setAttribute(t,a)}else o[e]!==i&&(o[e]=i)}}}function dt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function pt(t){return(pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var ht=Date.now(),yt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"{{h-".concat(ht,"-").concat(t,"}}")},vt=yt("(\\d+)"),gt=new RegExp("^".concat(vt,"$")),mt=new RegExp(vt,"g"),bt="--".concat(ht,"--"),wt=new RegExp(bt,"g"),xt=new WeakMap;var St="object"===pt(window.ShadyDOM)&&window.ShadyDOM.inUse?function(t){var e;return{get currentNode(){return e},nextNode:function(){return!!(e=void 0===e?t.childNodes[0]:e.childNodes.length?e.childNodes[0]:e.nextSibling?e.nextSibling:e.parentNode.nextSibling)}}}:function(t){return document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)},Et=document.createElement("div");function jt(t,e,n){var r=document.createElement("template"),o=[],i=function(t,e){var n=t.reduce((function(e,n,r){return 0===r?n:t.slice(r).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?"".concat(e,"\x3c!--").concat(yt(r-1),"--\x3e").concat(n):e+yt(r-1)+n}),"");return e&&(n+="<style>\n".concat(e.join("\n/*------*/\n"),"\n</style>")),d?n.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g,(function(t){return"".concat(bt).concat(t)})):n}(t,n);if(e&&(i="<svg>".concat(i,"</svg>")),d?r.innerHTML=i:(Et.innerHTML="<template>".concat(i,"</template>"),r.content.appendChild(Et.children[0].content)),e){var a=r.content.firstChild;r.content.removeChild(a),Array.from(a.childNodes).forEach((function(t){return r.content.appendChild(t)}))}!function(t){for(var e,n=document.createNodeIterator(t,NodeFilter.SHOW_COMMENT,null,!1);e=n.nextNode();)gt.test(e.textContent)&&(e.parentNode.insertBefore(document.createTextNode(e.textContent),e),e.parentNode.removeChild(e))}(r.content);for(var c=St(r.content),u=0,f=function(){var n=c.currentNode;if(n.nodeType===Node.TEXT_NODE){var r=n.textContent;if(!r.match(gt)){var i=r.match(mt);if(i){var a=n;i.reduce((function(t,e){var n=dt(t.pop().split(e),2),r=n[0],o=n[1];return r&&t.push(r),t.push(e),o&&t.push(o),t}),[r]).forEach((function(t,e){0===e?a.textContent=t:a=a.parentNode.insertBefore(document.createTextNode(t),a.nextSibling)}))}}var f=n.textContent.match(gt);f&&(d||(n.textContent=""),o[f[1]]=[u,nt])}else n.nodeType===Node.ELEMENT_NODE&&Array.from(n.attributes).forEach((function(r){var i=r.value.trim(),a=d?r.name.replace(bt,""):r.name,c=i.match(gt);if(c){var f=t[c[1]].replace(/\s*=\s*['"]*$/g,"").split(" ").pop();o[c[1]]=[u,st(a,f,e)],n.removeAttribute(r.name)}else{var l=i.match(mt);if(l){var s="attr__".concat(a);l.forEach((function(t,e){var n=dt(t.match(gt),2)[1];o[n]=[u,function(n,r,o){var c=J.get(r,{});c[s]=(c[s]||i).replace(t,null==o?"":o),1!==l.length&&e+1!==l.length||(r.setAttribute(a,c[s]),c[s]=void 0)}]})),r.value="",d&&a!==r.name&&(n.removeAttribute(r.name),n.setAttribute(a,""))}}}));u+=1};c.nextNode();)f();return function(t,e,n){var i=J.get(e,{type:"function"});if(r!==i.template){i.template&&K(e);var a=document.importNode(function(t,e){return e?l((function(n){var r=xt.get(t);r||(r=new Map,xt.set(t,r));var o=r.get(e);if(!o){(o=document.createElement("template")).content.appendChild(t.content.cloneNode(!0)),r.set(e,o);var i=o.content.querySelectorAll("style");Array.from(i).forEach((function(t){for(var e=t.childNodes.length+1,n=0;n<e;n+=1)t.parentNode.insertBefore(document.createTextNode(yt()),t)})),n.prepareTemplate(o,e.toLowerCase())}return o}),t):t}(r,t.tagName).content,!0),c=St(a),u=o.slice(0),f=0,s=u.shift(),p=[];for(Object.assign(i,{template:r,markers:p});c.nextNode();){var h=c.currentNode;for(h.nodeType===Node.TEXT_NODE&&(gt.test(h.textContent)?h.textContent="":d&&(h.textContent=h.textContent.replace(wt,"")));s&&s[0]===f;)p.push([h,s[1]]),s=u.shift();f+=1}if(i.startNode=a.childNodes[0],i.endNode=a.childNodes[a.childNodes.length-1],e.nodeType===Node.TEXT_NODE)for(var y=e,v=a.childNodes[0];v;)e.parentNode.insertBefore(v,y.nextSibling),y=v,v=a.childNodes[0];else e.appendChild(a)}i.markers.forEach((function(e,r){var o=dt(e,2),a=o[0],c=o[1];i.lastArgs&&i.lastArgs[r]===n[r]||c(t,a,n[r],i.lastArgs?i.lastArgs[r]:void 0)})),i.lastArgs=n}}var Nt=new Map;function Ot(t,e){if(!t)throw Error("Target property name missing: ".concat(t));if(2===arguments.length)return function(n){n[t]=e};var n=Nt.get(t);return n||(n=function(e,n){var r=n.target;e[t]=r.value},Nt.set(t,n)),n}var kt=new WeakMap;function Tt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;return function(r,o){var i;e&&(i=setTimeout((function(){i=void 0,requestAnimationFrame((function(){e(r,o)}))}),n)),kt.set(o,t),t.then((function(e){i&&clearTimeout(i),kt.get(o)===t&&(e(r,o),kt.set(o,null))}))}}var Lt=yt(),Mt=new Map,At=new WeakMap,Ct={define:function(t){return Z(t),this},key:function(t){return this.id=t,this},style:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return At.set(this,e),this}};function _t(t,e,n){return Object.assign((function r(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,a=At.get(r),c=t.join(Lt);a&&(c+=a.join(Lt)),n&&(c+=yt("svg"));var u=Mt.get(c);u||(u=jt(t,n,a),Mt.set(c,u)),u(o,i,e)}),Ct)}Object.assign((function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return _t(t,n)}),r),Object.assign((function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return _t(t,n,!0)}),r);var Pt=n(1),Wt=n.n(Pt);function Rt(){var t;document.getElementById("IdentifiersWidgetStyle")||document.head.appendChild(((t=document.createElement("style")).setAttribute("id","IdentifiersWidgetStyle"),t.setAttribute("type","text/css"),t.innerHTML=Wt.a.toString(),t))}n.d(e,"IdentifiersWidget",(function(){return Bt}));var It='\n  <div class="footer">\n    Data provided by <a href="http://identifiers.org/">Identifiers.org</a>\n  </div>\n';function Ft(t,e){console.error("😭 problem loading data:",t),console.log(e),e.querySelector(".loader").innerHTML="Error loading data: "+t}function Dt(t){var e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(fetch("https://resolver.api.identifiers.org/"+t));case 2:return e=n.sent,n.next=5,i.a.awrap(e.json());case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}))}var Bt={init:{get:function(t,e){return e},set:function(){},connect:function(t,e){var n,r,o,a,c,u;return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return Rt(),n=t.getAttribute("identifier"),r="\n      <h1>".concat(n,"</h1>\n      <h2>Loading results...</h2>\n      "),t.innerHTML=r+"\n      <div class='loader'>\n        <div class='lds-ripple'><div></div><div></div></div>\n      </div>"+It,e.next=6,i.a.awrap(Dt(n));case 6:o=e.sent,console.log(o),o.errorMessage?Ft(o.errorMessage,t):(a=o.payload.resolvedResources,c=o.payload.parsedCompactIdentifier.localId,r="<h1>".concat(c,"</h1>"),u=r+'<ul class="identifier-list">',a.map((function(t){var e="secondary";t.official&&(e="primary"),u+='\n          <li class="'.concat(e,'">\n            <a href="').concat(t.compactIdentifierResolvedUrl,'">\n              ').concat(t.description,"\n            </a>\n          </li>")})),u+="</ul>",t.innerHTML=u+It);case 9:case"end":return e.stop()}}))}}};Z("identifiers-widget",Bt)}]);