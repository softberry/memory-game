!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=4)}([function(t,e,n){var r=n(5);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(6);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(8);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(9);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){t.exports=n(11)},function(t,e){t.exports='<template id=\'MATRIX_DIMENSIONS_ERROR\'>\n<div class="code">\n\t<div class="pre">\n\t\t&lt;mini-memory matrix="2x2" lang="tr"></mini-memory>\n\t</div>\n\t<div class="pre">\n\t\t&lt;mini-memory matrix="16x16" lang="en"></mini-memory>\n\t</div>\n</div>\n</template>\n'},function(t,e,n){(t.exports=n(7)(!1)).push([t.i,":host * {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n:host {\n  --mini-memory-bg: #f9f9f9;\n  --mini-memory-border: #313131;\n  --mini-memory-z-loading: 10;\n  --mini-memory-z-tile: 20;\n  --mini-memory-z-menu: 30;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 12px;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: var(--mini-memory-bg);\n  position: relative;\n  display: block;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 #333333;\n}\n:host([fullscreen]) {\n  position: fixed;\n  left: 0;\n  top: 0;\n  border: 0;\n}\n@media only screen and (orientation: landscape) {\n  :host([fullscreen]) {\n    border: 0;\n  }\n}\n\n:host #loading {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n  -webkit-animation: loading 1s infinite;\n          animation: loading 1s infinite;\n  z-index: var(--mini-memory-z-loading);\n}\n\n:host #loading.done {\n  display: none;\n}\n\n:host .code {\n  background-color: #333333;\n  color: yellowgreen;\n  display: block;\n  font-family: monospace, sans-serif;\n  padding: 6px;\n}\n\n:host .pre {\n  margin: 5px;\n}\n\n\n#tiles-container {\n  position: absolute;\n  top: 24px;\n  height: calc(100% - 24px);\n}\n\n:host .tile {\n  float: left;\n  z-index: var(--mini-memory-z-tile);\n  position: relative;\n}\n\n:host .tile canvas {\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  position: relative;\n  border-radius: 2px;\n  cursor: pointer;\n  visibility: visible;\n  margin: 1px;\n}\n\n:host .tile canvas.wait {\n  visibility: hidden;\n}\n\n:host .tile canvas.open {\n  cursor: none;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes loading {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e){t.exports='<style>\n  :host #toolbar {\n    position: absolute;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    left: 0;\n    top: 0;\n    height: 18px;\n    width: 100%;\n    padding: 0 2px;\n    font-size: 14px;\n    line-height: 1.2;\n  }\n  :host #counter {\n    width: 100px;\n  }\n  :host #player {\n    text-align: center;\n    max-width: 100px;\n    font-weight: bold;\n  }\n  :host #menu {\n    width: 20px;\n    height: 20px;\n    background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAt0lEQVQ4je2UwQqCQBCGf1fXgtjCWhC0LhJ28tT7P0gdOoh2Wg8lQam7dugauysJHeqDuX38zMDMAN9hT19lxjEJnO9YS5sTANDWT4Q41DrfMwWqiVw4sl8BQD+9zQFoA60IwiQLwiT7OOiHYVHKWZRyG9e4NixKOVFNCQCK+HF9PgqdT+x6HJkhI/95z5DTM67NMt6ulexyAHC9blMVRanzjd+GPNyLpLICAOc+u9p0aYH9gx2dJ6RgKz0wt+R/AAAAAElFTkSuQmCC\');\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 20px 16px;\n    cursor: pointer;\n    position: relative;\n  }\n</style>\n<div id="toolbar">\n  <div id="counter"></div>\n  <div id="player"></div>\n  <div id="menu"></div>\n</div>\n'},function(t,e){t.exports='<style>\n  :host input,\n  :host button,\n  :host select,\n  :host option {\n    outline: 0;\n    line-height: 1.5;\n  }\n  :host input,\n  :host button,\n  :host select,\n  :host option {\n    display: block;\n    padding: 2px 4px;\n    border-radius: 5px;\n    box-shadow: 0 0 2px 0 #f1f1f1;\n    background-color: #313131;\n    color: white;\n    font-size: 18px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  :host button:active {\n    box-shadow: 0 0 4px 0 white;\n  }\n\n  :host #settings {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    left: 0;\n    top: 0;\n\n    width: 100%;\n    height: 100%;\n    background-color: rgba(51, 51, 51, 0.95);\n    transform: translateX(100%);\n    z-index: var(--mini-memory-z-menu);\n    transition: transform 300ms;\n    color: white;\n    font-size: 20px;\n  }\n\n  :host #settings.show {\n    transform: translateX(0);\n  }\n\n  :host #settings .close-x {\n    float: right;\n    color: white;\n    top: 0;\n    padding-right: 4px;\n    font-size: 24px;\n    line-height: 1;\n    cursor: pointer;\n    transition: transform 300ms;\n  }\n\n  :host #settings .close-x:active {\n    transform: rotate(45deg);\n  }\n\n  :host #form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    padding: 0 10px;\n  }\n  :host #form > div {\n    width: 100%;\n    margin: 10px 0;\n  }\n  :host label[for=\'playerName\'] {\n    display: block;\n  }\n  :host #playerName,\n  :host #matrixmin,\n  :host #matrixmax {\n    display: inline-block;\n    background: none;\n    border: 0;\n    color: white;\n  }\n</style>\n<div id="settings">\n  <div><span class="close-x">&times;</span></div>\n  <div id="form">\n    <div>\n      <label for="playerName" data-i18n="PLAYERS_NAME"></label>\n      <input type="text" id="playerName" />\n    </div>\n    <div>\n      <label for="matrixmin" data-i18n="COLUMNS"></label>\n      <input\n        type="number"\n        placeholder="2"\n        id="matrixmin"\n        size="2"\n        min="2"\n        max="16"\n      />\n      <label for="matrixmax" data-i18n="ROWS"></label>\n      <input\n        type="number"\n        placeholder="2"\n        id="matrixmax"\n        size="2"\n        min="2"\n        max="16"\n      />\n    </div>\n    <div>\n      <select name="languageSelection" id="languageSelection">\n        <option value="default" data-i18n="SELECT_LANGUAGE"></option>\n        <option value="en">English</option>\n        <option value="de">Deutsch</option>\n        <option value="tr">Türkce</option>\n      </select>\n    </div>\n  </div>\n</div>\n'},function(t,e,n){t.exports=n.p+"cardback.jpg"},function(t,e,n){"use strict";n.r(e);var r={LABEL:{message:" English"},MATRIX_DIMENSIONS_ERROR:{message:"Memory puzzle matrix must be at least 2x2 and maximum 16x16\n    matrix dimension. For example:"},LOADING:{message:"Loading..."},ENTER_YOUR_NAME:{message:"Enter your name"},PLAYERS_NAME:{message:"Players name"},COLUMNS:{message:"Columns"},ROWS:{message:"Rows"},SELECT_LANGUAGE:{message:"Select your langauge"},APPLY:{message:"Apply"}},o={LABEL:{message:" English"},MATRIX_DIMENSIONS_ERROR:{message:"Memory puzzle matrix en az 2x2,\n    en fazla 16x16 boyutlarinda olmalidir. Örnegin: "},LOADING:{message:"Yükleniyor..."},ENTER_YOUR_NAME:{message:"Isminizi girin"},PLAYERS_NAME:{message:"Oyuncu adi"},COLUMNS:{message:"Kolon"},ROWS:{message:"Sira"},SELECT_LANGUAGE:{message:"Dil secimi"},APPLY:{message:"Uygula"}},i={LABEL:{message:" English"},MATRIX_DIMENSIONS_ERROR:{message:"Memory puzzle matrix mindestens 2x2,\n      oder maximal 16x16 Abmessungen haben. Wie zum Beispiel: "},LOADING:{message:"Wird geladen..."},ENTER_YOUR_NAME:{message:"Name eingeben"},PLAYERS_NAME:{message:"Spielername"},COLUMNS:{message:"Spalte"},ROWS:{message:"Reihe"},SELECT_LANGUAGE:{message:"Wähle deine Sprache"},APPLY:{message:"Anwenden"}},a=n(0),s=n.n(a);function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";switch(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"string"!=typeof e&&(e=navigator.language),e=e.slice(0,2).toLowerCase(),this.tmpl=window.document.createElement("div"),this.tmpl.innerHTML=s.a,e){case"en":this.dict=r;break;case"tr":this.dict=o;break;case"de":this.dict=i;break;default:this.dict=r}}var e,n,a;return e=t,(n=[{key:"message",value:function(t){return this.dict[t].message}},{key:"sample",value:function(t){var e=this.tmpl.querySelector("#".concat(t));return window.document.importNode(e,!0).innerHTML}},{key:"update",value:function(t){var e=this,n=t.querySelectorAll("[data-i18n]");[].forEach.call(n,function(t){t.innerText=e.message(t.dataset.i18n)})}}])&&c(e.prototype,n),a&&c(e,a),t}();function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){var e="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return h(t,arguments,y(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),m(r,t)})(t)}function h(t,e,n){return(h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&m(o,n.prototype),o}).apply(null,arguments)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,y(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,d(Array)),n=e,(r=[{key:"random",value:function(){var t=this.length,e=Math.floor(Math.random()*t);return this.splice(e,1)[0]}}])&&f(n.prototype,r),o&&f(n,o),e}();function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){var e="function"==typeof Map?new Map:void 0;return(w=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return x(t,arguments,S(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),E(r,t)})(t)}function x(t,e,n){return(x=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&E(o,n.prototype),o}).apply(null,arguments)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,S(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,w(Array)),n=e,(r=[{key:"addCanvas",value:function(t){var e=this;t.forEach(function(t){t.width=parseInt(t.offsetWidth),t.height=parseInt(t.offsetHeight),e.push(t)})}},{key:"randomPair",value:function(t){var e=this.indexOf(t),n=[];n.push(this.splice(e,1)[0]);var r=this.length,o=Math.floor(Math.random()*r);return n.push(this.splice(o,1)[0]),n}}])&&v(n.prototype,r),o&&v(n,o),e}();function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){var e="function"==typeof Map?new Map:void 0;return(C=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return I(t,arguments,T(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),B(r,t)})(t)}function I(t,e,n){return(I=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&B(o,n.prototype),o}).apply(null,arguments)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Q=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,T(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,C(Array)),n=e,(r=[{key:"checkMark",value:function(t){var e=t.getContext("2d"),n=t.offsetWidth,r=t.offsetHeight;e.clearRect(0,0,n,r),e.globalAlpha=.25,e.drawImage(this.getImage(t),0,0,n,r),e.globalAlpha=1,e.save()}},{key:"hasPair",value:function(t){var e=!1;return this.forEach(function(n){n[0]===t&&(e=!0),n[1]===t&&(e=!0)}),e}},{key:"arePairs",value:function(t){var e=this,n=t[0],r=t[1],o=!1;return this.forEach(function(t){t[0]!==n&&t[1]!==n||t[0]!==r&&t[1]!==r||(o=!0,e.checkMark(n),e.checkMark(r))}),o}},{key:"getImage",value:function(t){var e;return this.forEach(function(n){n[0]!==t&&n[1]!==t||(e=n[2])}),e}}])&&k(n.prototype,r),o&&k(n,o),e}();function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cardBack=n,this.canvas=new R,this.images=new g,this.pairs=new Q,this.canvas.addCanvas(e),this.state=[],this.prepared=!1,this.readyFunctions=[],this.cards={open:0,length:0}}var e,n,r;return e=t,(n=[{key:"addImage",value:function(t){this.images.push(t),this.images.length===this.canvas.length/2&&this.prepare()}},{key:"prepare",value:function(){var t=this,e=this;e.cards.open=0,e.cards.length=e.images.length,this.canvas.forEach(function(n){n.addEventListener("click",function(n){if(0===t.counter.timer.diff&&t.counter.start(),!n.target.classList.contains("open")){if(!e.pairs.hasPair(n.target)){var r=e.canvas.randomPair(n.target);e.pairs.push(r.concat(e.images.random()))}switch(e.state.length){case 2:e.closeCard(e.state.pop()),e.closeCard(e.state.pop());case 0:e.state.push(n.target),e.openCard(n.target);break;case 1:e.state.push(n.target),e.openCard(n.target),e.pairs.arePairs(e.state)&&(e.state=[],e.cards.open++,e.cards.open===e.cards.length&&e.counter.stop())}}})}),this.prepared=!0,this.canvas.forEach(function(t){t.classList.remove("wait"),e.closeCard(t)}),this.readyFunctions.forEach(function(t){t.fn.call(t.context)})}},{key:"onReady",value:function(t,e){this.readyFunctions.push({fn:t,context:e})}},{key:"openCard",value:function(t){var e=this.pairs.getImage(t);e.constructor===HTMLImageElement?(t.classList.add("open"),this.drawImageOnCanvas(t,e)):console.warn("Translate-error: no image for the canvas found ")}},{key:"closeCard",value:function(t){this.drawImageOnCanvas(t,this.cardBack),t.classList.remove("open")}},{key:"drawImageOnCanvas",value:function(t,e){var n=t.getContext("2d");n.restore();var r={cw:t.width,ch:t.height,iw:e.width,ih:e.height};n.clearRect(0,0,r.cw,r.ch),n.drawImage(e,0,0,r.iw,r.ih,0,0,r.cw,r.ch)}}])&&j(e.prototype,n),r&&j(e,r),t}(),N=n(1),_=n.n(N);function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=Date.now();this.board=e,this.intervalHandle=0,this.timer={start:n,end:n,diff:0}}var e,n,r;return e=t,(n=[{key:"start",value:function(){var t=this,e=Date.now();this.timer.start=e,this.timer.end=e,this.timer.diff=0,this.intervalHandle=window.setInterval(function(){t.diff()},100)}},{key:"diff",value:function(){var t=Date.now();this.timer.end=t,this.timer.diff=this.timer.end-this.timer.start;var e=new Date(this.timer.diff).toISOString().slice(11,-1);this.board.innerHTML=e}},{key:"stop",value:function(){window.clearInterval(this.intervalHandle)}}])&&P(e.prototype,n),r&&P(e,r),t}(),z=n(2),U=n.n(z),F=n(3),G=n.n(F);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(t){var e="function"==typeof Map?new Map:void 0;return(V=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return X(t,arguments,K(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),J(r,t)})(t)}function X(t,e,n){return(X=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&J(o,n.prototype),o}).apply(null,arguments)}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z=n(10),$=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=W(this,K(e).call(this))).i18n=new u,t.rendered=!1,t.images=[],t.tiles=[],t.toolbar=document.createElement("div"),t.layers={loading:null},t.cardBack=document.createElement("img"),t}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(e,V(HTMLElement)),n=e,o=[{key:"observedAttributes",get:function(){return["matrix","lang"]}}],(r=[{key:"reset",value:function(){this.rendered=!1,this.images=[],this.tiles=[],this.layers={loading:{}}}},{key:"getOddMidIndex",value:function(t){var e=H(t,2),n=e[0],r=e[1];return n*r%2==1?(n*r-1)/2:-1}},{key:"createTile",value:function(t){var e=document.createElement("div"),n=document.createElement("canvas");return n.getContext("2d").save(),e.classList.add("tile"),n.setAttribute("index",t),e.appendChild(n),{tile:e,canvas:n}}},{key:"connectedCallback",value:function(){this.rendered||this.render()}},{key:"disconnectedCallback",value:function(){}},{key:"adoptedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(t,e,n){"lang"===t&&(this.i18n=new u(n)),this.reset(),this.rendered=!1,this.render()}},{key:"limitsExceeded",value:function(t){var e=!1;return t.forEach(function(t){(t<2||t>16)&&(e=!0)}),e}},{key:"prepareMatrix",value:function(){var t=this,e=this.getAttribute("matrix").split("x");if(e[0]=parseInt(e[0]),e[1]=parseInt(e[1]),this.limitsExceeded(e))this.shadowRoot.innerHTML+="\n      ".concat(this.i18n.message("MATRIX_DIMENSIONS_ERROR"),"\n      ").concat(this.i18n.sample("MATRIX_DIMENSIONS_ERROR"),"\n      ");else{var n=this.getOddMidIndex(e),r="width:".concat(100/e[0],"%;"),o="height:".concat(100/e[1],"%;"),i=e[0]*e[1];i=i%2==0?i/2:(i-1)/2;var a=this;this.shadowRoot.innerHTML+="<style>:host .tile {".concat(r+o,"}</style>");var s=0,c=0,u=0,l=document.createElement("div");for(l.id="tiles-container",a.shadowRoot.appendChild(l),s=0;s<e[0];s++)for(c=0;c<e[1];c++){u=c+e[1]*s;var f=a.createTile(u);l.appendChild(f.tile),u!==n&&(f.canvas.classList.add("wait"),a.tiles.push(f))}this.cardBack.addEventListener("load",function(){for(var n=0;n<i;n++)r={width:parseInt(t.parentNode.offsetWidth/e[0]),height:parseInt(t.parentNode.offsetHeight/e[1])},o=n,s=void 0,s=document.createElement("img"),a.images.push(s),s.src="//picsum.photos/".concat(r.width,"/").concat(r.height,"/?image=").concat(o),s.addEventListener("load",function(t){a.game.addImage(t.target)});var r,o,s;a.game=new L(t.tiles.map(function(t){return t.canvas}),t.cardBack),a.game.onReady(function(){t.shadowRoot.querySelector("#loading").classList.add("done"),a.game.counter=new D(a.shadowRoot.querySelector("#counter"))},a)}),this.cardBack.addEventListener("error",function(t){console.warn("Translate-error: Use cardback as base64"),t.target.setAttribute("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABmgAwAEAAAAAQAAABEAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIABEAGQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUEQ8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVz/2wBDAQIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUEQ8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVz/3QAEAAL/2gAMAwEAAhEDEQA/APzjWNNue/ao5IwCanVwV6cCoZXUEg+/1rZvUg5C7jA9PrWBhK2r6T5yOM1hZH+z+dbRegH/0PzXT/Vj6iqkn33+tW0/1Y+oqpJ99/rW73A5K+/1p+prn66C+/1p+prn60QH/9k=")}),this.cardBack.setAttribute("src",Z)}}},{key:"render",value:function(){var t=this;t.rendered||(t.i18n=new u(t.getAttribute("lang")),t.rendered=!0,t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.innerHTML="<style>".concat(_.a,"</style>\n    ").concat(U.a,"\n    ").concat(G.a,'\n    <div id="loading">').concat(t.i18n.message("LOADING"),"</div>"),t.prepareMatrix(),t.i18n.update(t.shadowRoot),t.layers.toolbar={counter:this.shadowRoot.querySelector("#counter"),player:this.shadowRoot.querySelector("#player"),menu:this.shadowRoot.querySelector("#menu")},t.layers.settings={panel:this.shadowRoot.querySelector("#settings"),closeX:this.shadowRoot.querySelector("#settings .close-x"),labels:{playername:t.shadowRoot.querySelector('label[for="playerName"]'),matrixMin:t.shadowRoot.querySelector('label[for="matrixmin"]'),matrixMax:t.shadowRoot.querySelector('label[for="matrixmax"]')},languageSelection:t.shadowRoot.querySelector("#languageSelection"),playerName:t.shadowRoot.querySelector("#playerName"),matrixMin:t.shadowRoot.querySelector("#matrixmin"),matrixMax:t.shadowRoot.querySelector("#matrixmax")},t.layers.settings.matrixMin.value=t.getAttribute("matrix").split("x")[0],t.layers.settings.matrixMax.value=t.getAttribute("matrix").split("x")[1],t.layers.toolbar.menu.addEventListener("click",function(e){t.layers.settings.panel.classList.add("show")}),t.layers.settings.closeX.addEventListener("click",function(e){t.layers.settings.panel.classList.remove("show")}),t.layers.settings.languageSelection.addEventListener("change",function(e){t.i18n=new u(e.target.value),t.i18n.update(t.shadowRoot)}),t.layers.settings.matrixMin.addEventListener("change",function(e){var n=e.target.value,r=t.getAttribute("matrix").split("x")[1];t.setAttribute("matrix","".concat(n,"x").concat(r))}),t.layers.settings.matrixMax.addEventListener("change",function(e){var n=e.target.value,r=t.getAttribute("matrix").split("x")[0];t.setAttribute("matrix","".concat(r,"x").concat(n))}))}}])&&Y(n.prototype,r),o&&Y(n,o),e}();customElements.define("mini-memory",$)}]);