/*! For license information please see main.83e0c09237815a79d695.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n={712:(t,e,r)=>{var n=r(745),o=(r(9753),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7658),r(7042),r(8309),r(1038),r(4916),r(7601),r(1703),r(6647),r(9655)),i=r(9250),a=(r(1249),r(7294)),c=r(8721),u=r(4098),s=r(5893),l={header:{logo:{src:"",text:"Jueguitos",title:"Home",ruta:"/home"},nav:{icon:(0,s.jsx)(u.wkt,{}),menu:[{id:(0,c.Z)(),text:"Home",ruta:"/home"},{id:(0,c.Z)(),text:"Versus",ruta:"/Versus"},{id:(0,c.Z)(),text:"Quizes",ruta:"/Quizes"},{id:(0,c.Z)(),text:"FAQs",ruta:"/faqs"}]}},home:{game:{view:{download:{icon:(0,s.jsx)(u.uKn,{}),title:"Descargar Imagen"}},btns:[{id:(0,c.Z)(),text:"Pass"},{id:(0,c.Z)(),text:"Smash"}]}}},f=(0,a.createContext)(),h=function(t){var e=t.children;return(0,s.jsx)(f.Provider,{value:l,children:e})};function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p=function(t){var e,r,n=t.cosa,i=(0,a.useContext)(f).header,c=i.logo,u=i.nav,l=u.menu,h=(e=(0,a.useState)("closed"),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=h[0],v=h[1];(0,a.useEffect)((function(){document.addEventListener("click",m,!0)}),[]);var y=(0,a.useRef)(),m=function(t){y.current.contains(t.target)?v("open"):v("closed")};return(0,s.jsxs)("header",{className:"Header Header--".concat(n),children:[(0,s.jsx)(o.rU,{to:c.ruta,children:(0,s.jsx)("h1",{className:"Header-h1",children:c.text})}),(0,s.jsx)("nav",{className:"Header-nav",children:(0,s.jsx)("ul",{ref:y,className:"Header-menu ".concat("open"===p?"Header-menu--open":""),onMouseOver:function(){return v("open")},onMouseLeave:function(){return v("closed")},children:"closed"===p?(0,s.jsx)("li",{className:"Header-icon",children:u.icon}):l.map((function(t){return(0,s.jsx)(o.rU,{to:t.ruta,onClick:function(){return v("closed")},children:(0,s.jsx)("li",{className:"Header-item",children:(0,s.jsx)("span",{className:"Header-link",children:t.text})})},t.id)}))})})]})};r(8674),r(9070),r(2443),r(9341),r(3706),r(2703),r(8011),r(489),r(9554),r(4747),r(8304),r(7987),r(5069);const v=function(t){var e=t.passCount,r=t.smashCount;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"Counter",children:[(0,s.jsx)("div",{className:"Counter-wrapper",children:(0,s.jsx)("span",{className:"Counter-number",children:e})}),(0,s.jsx)("div",{className:"Counter-wrapper",children:(0,s.jsx)("span",{className:"Counter-number",children:r})})]})})};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new N(o||[]);return n(a,"_invoke",{value:O(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(A([])));x&&x!==e&&r.call(x,i)&&(v=x);var b=p.prototype=h.prototype=Object.create(v);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==y(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},j(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function g(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const j=function(t){var e=t.divRef,r=(0,a.useContext)(f).home.game.view.download,n="".concat("https://api.waifu.im","/search"),o=x((0,a.useState)([]),2),i=o[0],c=o[1],u=x((0,a.useState)(0),2),l=u[0],h=u[1],d=x((0,a.useState)(0),2),p=d[0],y=d[1],b=function(){var t,e=(t=m().mark((function t(){var e,r,o;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n);case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,o=r.images[0].url,c(o),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){b()}),[l,p]),(0,s.jsx)("section",{className:"Game",style:{background:"url(".concat(i,") center no-repeat")},children:(0,s.jsxs)("div",{className:"Game-wrapper",children:[(0,s.jsxs)("div",{className:"Game-picture",ref:e,children:[(0,s.jsx)("img",{src:i,alt:"",className:"Game-img",loading:"lazy"}),(0,s.jsx)("div",{className:"Game-view",children:(0,s.jsx)("a",{href:i,download:"waifu-image",title:r.title,target:"_blank",rel:"noopener noreferrer",className:"Game-download",children:r.icon})})]}),(0,s.jsxs)("div",{className:"Game-options",children:[(0,s.jsx)("button",{onClick:function(){h(l+1)},className:"Game-btn",children:"Pass"}),(0,s.jsx)("button",{onClick:function(){y(p+1)},className:"Game-btn",children:"Smash"})]}),(0,s.jsx)(v,{passCount:l,smashCount:p})]})})},w=function(t){var e=t.divRef;return(0,s.jsx)("main",{className:"main",children:(0,s.jsx)(j,{divRef:e})})},O=function(){return(0,s.jsx)("div",{children:"Versus"})},S=function(){return(0,s.jsx)("div",{children:"Quizes"})},E=function(){return(0,s.jsx)("div",{children:"Faqs"})};function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var N=function(){var t,e,r=(t=(0,a.useState)(0),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],c=r[1];(0,a.useEffect)((function(){var t=function(){var t=u.current.getBoundingClientRect().y;c(t>=0?"":"down")};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]);var u=(0,a.useRef)();return(0,s.jsxs)(o.UT,{children:[(0,s.jsx)(p,{cosa:n}),(0,s.jsxs)(i.Z5,{children:[(0,s.jsx)(i.AW,{exact:!0,path:"/",element:(0,s.jsx)(w,{divRef:u})}),(0,s.jsx)(i.AW,{path:"/home",element:(0,s.jsx)(i.Fg,{to:"/"})}),(0,s.jsx)(i.AW,{path:"/versus",element:(0,s.jsx)(O,{})}),(0,s.jsx)(i.AW,{path:"/quizes",element:(0,s.jsx)(S,{})}),(0,s.jsx)(i.AW,{path:"/faqs",element:(0,s.jsx)(E,{})})]})]})};n.s(document.getElementById("root")).render((0,s.jsx)(h,{children:(0,s.jsx)(N,{})}))}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return n[t](r,r.exports,i),r.exports}i.m=n,t=[],i.O=(e,r,n,o)=>{if(!r){var a=1/0;for(l=0;l<t.length;l++){for(var[r,n,o]=t[l],c=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(i.O).every((t=>i.O[t](r[u])))?r.splice(u--,1):(c=!1,o<a&&(a=o));if(c){t.splice(l--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,n,o]},r=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);i.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var c=2&n&&t;"object"==typeof c&&!~e.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,i.d(o,a),o},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0};i.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[a,c,u]=r,s=0;if(a.some((e=>0!==t[e]))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(u)var l=u(i)}for(e&&e(r);s<a.length;s++)o=a[s],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(l)},r=self.webpackChunksmash_pass=self.webpackChunksmash_pass||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var a=i.O(void 0,[653],(()=>i(712)));a=i.O(a)})();
//# sourceMappingURL=main.83e0c09237815a79d695.js.map