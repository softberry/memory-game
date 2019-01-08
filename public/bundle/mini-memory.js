!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=4)}([function(e,n,t){var r=t(5);e.exports="string"==typeof r?r:r.toString()},function(e,n,t){var r=t(6);e.exports="string"==typeof r?r:r.toString()},function(e,n,t){var r=t(8);e.exports="string"==typeof r?r:r.toString()},function(e,n,t){var r=t(9);e.exports="string"==typeof r?r:r.toString()},function(e,n,t){e.exports=t(11)},function(e,n){e.exports='<template id=\'MATRIX_DIMENSIONS_ERROR\'>\n<div class="code">\n\t<div class="pre">\n\t\t&lt;mini-memory matrix="2x2" lang="tr"></mini-memory>\n\t</div>\n\t<div class="pre">\n\t\t&lt;mini-memory matrix="16x16" lang="en"></mini-memory>\n\t</div>\n</div>\n</template>\n'},function(e,n,t){(e.exports=t(7)(!1)).push([e.i,":host * {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n:host {\n  --mini-memory-bg: #f9f9f9;\n  --mini-memory-border: #313131;\n  --mini-memory-disabled-button: rgba(240,240,240,.2);\n  --mini-memory-z-loading: 10;\n  --mini-memory-z-tile: 20;\n  --mini-memory-z-menu: 30;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 12px;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: var(--mini-memory-bg);\n  position: relative;\n  display: block;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 #333333;\n}\n:host([fullscreen]) {\n  position: fixed;\n  left: 0;\n  top: 0;\n  border: 0;\n  width: 100%;\n  width:100;\n}\n@media only screen and (orientation: landscape) {\n  :host([fullscreen]) {\n    border: 0;\n  }\n}\n\n:host #loading {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n  -webkit-animation: loading 1s infinite;\n          animation: loading 1s infinite;\n  z-index: var(--mini-memory-z-loading);\n}\n\n:host #loading.done {\n  display: none;\n}\n\n:host .code {\n  background-color: #333333;\n  color: yellowgreen;\n  display: block;\n  font-family: monospace, sans-serif;\n  padding: 6px;\n}\n\n:host .pre {\n  margin: 5px;\n}\n\n\n#tiles-container {\n  position: absolute;\n  top: 24px;\n  height: calc(100% - 24px);\n}\n\n:host .tile {\n  float: left;\n  z-index: var(--mini-memory-z-tile);\n  position: relative;\n}\n\n:host .tile canvas {\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  position: relative;\n  border-radius: 2px;\n  cursor: pointer;\n  visibility: visible;\n  margin: 1px;\n}\n\n:host .tile canvas.wait {\n  visibility: hidden;\n}\n\n:host .tile canvas.open {\n  cursor: none;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes loading {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n){e.exports='<style>\n  :host #toolbar {\n    position: absolute;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    left: 0;\n    top: 0;\n    height: 18px;\n    width: 100%;\n    padding: 0 2px;\n    font-size: 14px;\n    line-height: 1.2;\n  }\n  :host #counter {\n    width: 100px;\n  }\n  :host #player {\n    text-align: center;\n    max-width: 100px;\n    font-weight: bold;\n  }\n  :host #menu {\n    width: 20px;\n    height: 20px;\n    background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAt0lEQVQ4je2UwQqCQBCGf1fXgtjCWhC0LhJ28tT7P0gdOoh2Wg8lQam7dugauysJHeqDuX38zMDMAN9hT19lxjEJnO9YS5sTANDWT4Q41DrfMwWqiVw4sl8BQD+9zQFoA60IwiQLwiT7OOiHYVHKWZRyG9e4NixKOVFNCQCK+HF9PgqdT+x6HJkhI/95z5DTM67NMt6ulexyAHC9blMVRanzjd+GPNyLpLICAOc+u9p0aYH9gx2dJ6RgKz0wt+R/AAAAAElFTkSuQmCC\');\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 20px 16px;\n    cursor: pointer;\n    position: relative;\n  }\n</style>\n<div id="toolbar">\n  <div id="counter"></div>\n  <div id="player"></div>\n  <div id="menu"></div>\n</div>\n'},function(e,n){e.exports='<style>\n  :host label {\n    margin-bottom: 10px;\n    display: block;\n  }\n  :host input,\n  :host button,\n  :host select,\n  :host option {\n    outline: 0;\n    line-height: 1.5;\n    width: 100%;\n    -webkit-appearance: none;\n  }\n  :host input,\n  :host button,\n  :host select,\n  :host option {\n    border: 0;\n    display: block;\n    padding: 2px 4px;\n    border-radius: 5px;\n    box-shadow: 0 0 2px 0 #f1f1f1;\n    background-color: #313131;\n    color: white;\n    font-size: 18px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  :host button:active {\n    box-shadow: 0 0 4px 0 white;\n  }\n  :host button:hover:not(:disabled) {\n    box-shadow: 0 0 8px 0 white;\n    cursor: pointer;\n  }\n  :host button:disabled {\n    box-shadow: 0;\n    cursor: default;\n    background-color: var(--mini-memory-disabled-button);\n  }\n\n  :host #settings {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    left: 0;\n    top: 0;\n\n    width: 100%;\n    height: 100%;\n    background-color: rgba(51, 51, 51, 0.95);\n    transform: translateX(100%);\n    z-index: var(--mini-memory-z-menu);\n    transition: transform 300ms;\n    color: white;\n    font-size: 20px;\n  }\n\n  :host #settings.show {\n    transform: translateX(0);\n  }\n\n  :host #settings .close-x {\n    float: right;\n    color: white;\n    top: 0;\n    padding-right: 4px;\n    font-size: 24px;\n    line-height: 1;\n    cursor: pointer;\n    transition: transform 300ms;\n  }\n\n  :host #settings .close-x:active {\n    transform: rotate(45deg);\n  }\n  :host .flex {\n    display: flex;\n    justify-content: space-evenly;\n  }\n  :host #form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    padding: 0 10px;\n    max-width: 320px;\n    margin: 0 auto;\n  }\n  :host #form > div {\n    width: 100%;\n    margin: 10px 0;\n  }\n  :host label[for=\'playerName\'] {\n    display: block;\n  }\n  :host #playerName,\n  :host #matrixcol,\n  :host #matrixrow {\n    display: inline-block;\n    background: none;\n    border: 0;\n    color: white;\n  }\n  :host #isFullScreen {\n    display: none;\n  }\n\n  :host #isFullScreen + .vCheck {\n    display: inline-block;\n    width: 40px;\n    height: 20px;\n    border-radius: 20px;\n    background-color: rgba(200, 0, 0, 0.5);\n    box-shadow: 0 0 4px 2px red;\n    border: #313131 1px solid;\n    position: relative;\n    transition: background-color 300ms;\n    cursor: pointer;\n  }\n  :host #isFullScreen:checked + .vCheck {\n    background-color: rgba(0, 250, 0, 0.5);\n    box-shadow: 0 0 4px 2px green;\n  }\n  :host #isFullScreen + .vCheck:after {\n    content: \'\';\n    display: inline-block;\n    position: relative;\n    left: 0;\n    top: 0;\n    width: 18px;\n    height: 18px;\n    background-color: #f1f1f1;\n    border-radius: 50%;\n    transform: translateX(120%);\n    transition: transform 300ms;\n  }\n  :host #isFullScreen:checked + .vCheck:after {\n    transform: translateX(0%);\n  }\n</style>\n<div id="settings">\n  <div><span class="close-x">&times;</span></div>\n  <div id="form">\n    <div>\n      <label for="playerName" data-i18n="PLAYERS_NAME"></label>\n      <input type="text" id="playerName" />\n    </div>\n    <div class="flex">\n      <div>\n        <label for="matrixcol" data-i18n="COLUMNS"></label>\n        <input\n          type="number"\n          placeholder="2"\n          id="matrixcol"\n          size="2"\n          min="2"\n          max="16"\n        />\n      </div>\n      <div>\n        <label for="matrixrow" data-i18n="ROWS"></label>\n        <input\n          type="number"\n          placeholder="2"\n          id="matrixrow"\n          size="2"\n          min="2"\n          max="16"\n        />\n      </div>\n    </div>\n\n    <div class="flex">\n      <label for="isFullScreen" data-i18n="FULL_SCREEN"></label>\n      <input type="checkbox" id="isFullScreen" />\n      <div class="vCheck"></div>\n    </div>\n    <div>\n      <select name="languageSelection" id="languageSelection">\n        <option value="default" data-i18n="SELECT_LANGUAGE"></option>\n        <option value="en" data-i18n="LANGUAGE_LABEL"></option>\n        <option value="de" data-i18n="LANGUAGE_LABEL"></option>\n        <option value="tr" data-i18n="LANGUAGE_LABEL"></option>\n      </select>\n    </div>\n    <div>\n      <button id="applySettings" data-i18n="APPLY" disabled="disabled"></button>\n    </div>\n    <div><button id="restartGame" data-i18n="RESTART"></button></div>\n  </div>\n</div>\n'},function(e,n,t){e.exports=t.p+"cardback.jpg"},function(e,n,t){"use strict";t.r(n);var r={LANGUAGE_LABEL:{message:" English"},MATRIX_DIMENSIONS_ERROR:{message:"Memory puzzle matrix must be at least 2x2 and maximum 16x16\n    matrix dimension. For example:"},LOADING:{message:"Loading..."},ENTER_YOUR_NAME:{message:"Enter your name"},PLAYERS_NAME:{message:"Players name"},COLUMNS:{message:"Columns"},ROWS:{message:"Rows"},SELECT_LANGUAGE:{message:"Select your langauge"},FULL_SCREEN:{message:"Full screen"},APPLY:{message:"Apply"},RESTART:{message:"Restart"}},o={LANGUAGE_LABEL:{message:" Türkce"},MATRIX_DIMENSIONS_ERROR:{message:"Memory puzzle matrix en az 2x2,\n    en fazla 16x16 boyutlarinda olmalidir. Örnegin: "},LOADING:{message:"Yükleniyor..."},ENTER_YOUR_NAME:{message:"Isminizi girin"},PLAYERS_NAME:{message:"Oyuncu adi"},COLUMNS:{message:"Kolon"},ROWS:{message:"Sira"},SELECT_LANGUAGE:{message:"Dil secimi"},FULL_SCREEN:{message:"Tam ekran"},APPLY:{message:"Uygula"},RESTART:{message:"Yeni Oyun"}},i={LANGUAGE_LABEL:{message:" Deutsch"},MATRIX_DIMENSIONS_ERROR:{message:"Memory puzzle matrix mindestens 2x2,\n      oder maximal 16x16 Abmessungen haben. Wie zum Beispiel: "},LOADING:{message:"Wird geladen..."},ENTER_YOUR_NAME:{message:"Name eingeben"},PLAYERS_NAME:{message:"Spielername"},COLUMNS:{message:"Spalte"},ROWS:{message:"Reihe"},SELECT_LANGUAGE:{message:"Wähle deine Sprache"},FULL_SCREEN:{message:"Vollbildmodus"},APPLY:{message:"Anwenden"},RESTART:{message:"Neustart"}},a=t(0),s=t.n(a);function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";switch(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),"string"!=typeof n&&(n=navigator.language),this.all={en:r,de:i,tr:o},this.lang=n.slice(0,2).toLowerCase(),this.tmpl=window.document.createElement("div"),this.tmpl.innerHTML=s.a,this.lang){case"en":this.dict=r;break;case"tr":this.dict=o;break;case"de":this.dict=i;break;default:this.dict=r}}var n,t,a;return n=e,(t=[{key:"message",value:function(e){return this.dict[e].message}},{key:"sample",value:function(e){var n=this.tmpl.querySelector("#".concat(e));return window.document.importNode(n,!0).innerHTML}},{key:"update",value:function(e){var n=this,t=e.querySelectorAll("[data-i18n]"),r=this;[].forEach.call(t,function(e){switch(e.dataset.i18n){case"LANGUAGE_LABEL":e.innerText=n.all[e.value].LANGUAGE_LABEL.message,e.value===r.lang&&e.setAttribute("selected",!0);break;default:e.innerText=n.message(e.dataset.i18n)}})}}])&&c(n.prototype,t),a&&c(n,a),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n){return!n||"object"!==u(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){var n="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return h(e,arguments,m(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,e)})(e)}function h(e,n,t){return(h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&y(o,t.prototype),o}).apply(null,arguments)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,m(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,d(Array)),t=n,(r=[{key:"random",value:function(){var e=this.length,n=Math.floor(Math.random()*e);return this.splice(n,1)[0]}}])&&f(t.prototype,r),o&&f(t,o),n}();function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n){return!n||"object"!==A(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function w(e){var n="function"==typeof Map?new Map:void 0;return(w=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return x(e,arguments,S(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),E(r,e)})(e)}function x(e,n,t){return(x=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&E(o,t.prototype),o}).apply(null,arguments)}function E(e,n){return(E=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),v(this,S(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&E(e,n)}(n,w(Array)),t=n,(r=[{key:"addCanvas",value:function(e){var n=this;e.forEach(function(e){e.width=parseInt(e.offsetWidth),e.height=parseInt(e.offsetHeight),n.push(e)})}},{key:"randomPair",value:function(e){var n=this.indexOf(e),t=[];t.push(this.splice(n,1)[0]);var r=this.length,o=Math.floor(Math.random()*r);return t.push(this.splice(o,1)[0]),t}}])&&b(t.prototype,r),o&&b(t,o),n}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function C(e){var n="function"==typeof Map?new Map:void 0;return(C=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return T(e,arguments,N(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),M(r,e)})(e)}function T(e,n,t){return(T=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&M(o,t.prototype),o}).apply(null,arguments)}function M(e,n){return(M=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),L(this,N(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&M(e,n)}(n,C(Array)),t=n,(r=[{key:"checkMark",value:function(e){var n=e.getContext("2d"),t=e.offsetWidth,r=e.offsetHeight;n.clearRect(0,0,t,r),n.globalAlpha=.25,n.drawImage(this.getImage(e),0,0,t,r),n.globalAlpha=1,n.save()}},{key:"hasPair",value:function(e){var n=!1;return this.forEach(function(t){t[0]===e&&(n=!0),t[1]===e&&(n=!0)}),n}},{key:"arePairs",value:function(e){var n=this,t=e[0],r=e[1],o=!1;return this.forEach(function(e){e[0]!==t&&e[1]!==t||e[0]!==r&&e[1]!==r||(o=!0,n.checkMark(t),n.checkMark(r))}),o}},{key:"getImage",value:function(e){var n;return this.forEach(function(t){t[0]!==e&&t[1]!==e||(n=t[2])}),n}}])&&O(t.prototype,r),o&&O(t,o),n}();function I(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.cardBack=t,this.canvas=new R,this.images=new g,this.pairs=new B,this.canvas.addCanvas(n),this.state=[],this.prepared=!1,this.readyFunctions=[],this.cards={open:0,length:0}}var n,t,r;return n=e,(t=[{key:"addImage",value:function(e){this.images.push(e),this.images.length===this.canvas.length/2&&this.prepare()}},{key:"prepare",value:function(){var e=this,n=this;n.cards.open=0,n.cards.length=n.images.length,this.canvas.forEach(function(t){t.addEventListener("click",function(t){if(0===e.counter.timer.diff&&e.counter.start(),!t.target.classList.contains("open")){if(!n.pairs.hasPair(t.target)){var r=n.canvas.randomPair(t.target);n.pairs.push(r.concat(n.images.random()))}switch(n.state.length){case 2:n.closeCard(n.state.pop()),n.closeCard(n.state.pop());case 0:n.state.push(t.target),n.openCard(t.target);break;case 1:n.state.push(t.target),n.openCard(t.target),n.pairs.arePairs(n.state)&&(n.state=[],n.cards.open++,n.cards.open===n.cards.length&&(console.clear(),console.log("*** WIN!!! ****"),n.counter.stop()))}}})}),this.prepared=!0,this.canvas.forEach(function(e){e.classList.remove("wait"),n.closeCard(e)}),this.readyFunctions.forEach(function(e){e.fn.call(e.context)})}},{key:"onReady",value:function(e,n){this.readyFunctions.push({fn:e,context:n})}},{key:"openCard",value:function(e){var n=this.pairs.getImage(e);n.constructor===HTMLImageElement?(e.classList.add("open"),this.drawImageOnCanvas(e,n)):console.warn("Translate-error: no image for the canvas found ")}},{key:"closeCard",value:function(e){this.drawImageOnCanvas(e,this.cardBack),e.classList.remove("open")}},{key:"drawImageOnCanvas",value:function(e,n){var t=e.getContext("2d");t.restore();var r={cw:e.width,ch:e.height,iw:n.width,ih:n.height};t.clearRect(0,0,r.cw,r.ch),t.drawImage(n,0,0,r.iw,r.ih,0,0,r.cw,r.ch)}}])&&I(n.prototype,t),r&&I(n,r),e}(),j=t(1),Q=t.n(j);function P(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var t=Date.now();this.board=n,this.intervalHandle=0,this.timer={start:t,end:t,diff:0}}var n,t,r;return n=e,(t=[{key:"start",value:function(){var e=this,n=Date.now();this.timer.start=n,this.timer.end=n,this.timer.diff=0,this.intervalHandle=window.setInterval(function(){e.diff()},100)}},{key:"diff",value:function(){var e=Date.now();this.timer.end=e,this.timer.diff=this.timer.end-this.timer.start;var n=new Date(this.timer.diff).toISOString().slice(11,-1);this.board.innerHTML=n}},{key:"stop",value:function(){window.clearInterval(this.intervalHandle)}}])&&P(n.prototype,t),r&&P(n,r),e}(),G=t(2),U=t.n(G),D=t(3),z=t.n(D);function q(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.players={},this.scores=[],this.playerTemplate={name:"",best:[{size:"2x2",best:"99:99:99.999"}],all:[]},this.currentPlayer=this.playerTemplate}var n,t,r;return n=e,(t=[{key:"addPlayer",value:function(e){Object.entries(this.players).forEach(function(e){e[1].name});var n={name:e,best:[{size:"2x2",best:"99:99:99.999"}]};this.players.push(n),this.currentPlayer=n}}])&&q(n.prototype,t),r&&q(n,r),e}();function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function V(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,n){return!n||"object"!==Y(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function J(e){var n="function"==typeof Map?new Map:void 0;return(J=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return K(e,arguments,$(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Z(r,e)})(e)}function K(e,n,t){return(K=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&Z(o,t.prototype),o}).apply(null,arguments)}function Z(e,n){return(Z=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ee=t(10),ne=function(e){function n(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=X(this,$(n).call(this))).i18n=new l,e.scores=new H,e.rendered=!1,e.images=[],e.tiles=[],e.toolbar=document.createElement("div"),e.layers={loading:null},e.cardBack=document.createElement("img"),e}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&Z(e,n)}(n,J(HTMLElement)),t=n,o=[{key:"observedAttributes",get:function(){return["matrix","lang"]}}],(r=[{key:"reset",value:function(){this.rendered=!1,this.images=[],this.tiles=[],this.layers={loading:{}}}},{key:"getOddMidIndex",value:function(e){var n=W(e,2),t=n[0],r=n[1];return t*r%2==1?(t*r-1)/2:-1}},{key:"createTile",value:function(e){var n=document.createElement("div"),t=document.createElement("canvas");return t.getContext("2d").save(),n.classList.add("tile"),t.setAttribute("index",e),n.appendChild(t),{tile:n,canvas:t}}},{key:"connectedCallback",value:function(){this.rendered||this.render()}},{key:"disconnectedCallback",value:function(){}},{key:"adoptedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,n,t){"lang"===e&&(this.i18n=new l(t)),this.reset(),this.rendered=!1,this.render()}},{key:"limitsExceeded",value:function(e){var n=!1;return e.forEach(function(e){(e<2||e>16)&&(n=!0)}),n}},{key:"prepareMatrix",value:function(){var e=this,n=this.getAttribute("matrix").split("x");if(n[0]=parseInt(n[0]),n[1]=parseInt(n[1]),this.limitsExceeded(n))this.shadowRoot.innerHTML+="\n      ".concat(this.i18n.message("MATRIX_DIMENSIONS_ERROR"),"\n      ").concat(this.i18n.sample("MATRIX_DIMENSIONS_ERROR"),"\n      ");else{var t=this.getOddMidIndex(n),r="width:".concat(100/n[0],"%;"),o="height:".concat(100/n[1],"%;"),i=n[0]*n[1];i=i%2==0?i/2:(i-1)/2;var a=this;this.shadowRoot.innerHTML+="<style>:host .tile {".concat(r+o,"}</style>");var s=0,c=0,l=0,u=document.createElement("div");for(u.id="tiles-container",a.shadowRoot.appendChild(u),s=0;s<n[0];s++)for(c=0;c<n[1];c++){l=c+n[1]*s;var f=a.createTile(l);u.appendChild(f.tile),l!==t&&(f.canvas.classList.add("wait"),a.tiles.push(f))}this.cardBack.addEventListener("load",function(){for(var t=0;t<i;t++)r={width:parseInt(e.parentNode.offsetWidth/n[0]),height:parseInt(e.parentNode.offsetHeight/n[1])},o=t,s=void 0,s=document.createElement("img"),a.images.push(s),s.src="//picsum.photos/".concat(r.width,"/").concat(r.height,"/?image=").concat(o),s.addEventListener("load",function(e){a.game.addImage(e.target)});var r,o,s;a.game=new _(e.tiles.map(function(e){return e.canvas}),e.cardBack),a.game.onReady(function(){e.shadowRoot.querySelector("#loading").classList.add("done"),a.game.counter=new F(a.shadowRoot.querySelector("#counter"))},a)}),this.cardBack.addEventListener("error",function(e){console.warn("Translate-error: Use cardback as base64"),e.target.setAttribute("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABmgAwAEAAAAAQAAABEAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIABEAGQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUEQ8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVz/2wBDAQIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUEQ8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVz/3QAEAAL/2gAMAwEAAhEDEQA/APzjWNNue/ao5IwCanVwV6cCoZXUEg+/1rZvUg5C7jA9PrWBhK2r6T5yOM1hZH+z+dbRegH/0PzXT/Vj6iqkn33+tW0/1Y+oqpJ99/rW73A5K+/1p+prn66C+/1p+prn60QH/9k=")}),this.cardBack.setAttribute("src",ee)}}},{key:"render",value:function(){var e=this;if(!e.rendered){e.i18n=new l(e.getAttribute("lang")),e.rendered=!0,e.shadowRoot||e.attachShadow({mode:"open"}),e.shadowRoot.innerHTML="<style>".concat(Q.a,"</style>\n    ").concat(U.a,"\n    ").concat(z.a,'\n    <div id="loading">').concat(e.i18n.message("LOADING"),"</div>"),e.prepareMatrix(),e.i18n.update(e.shadowRoot),e.layers.toolbar={counter:this.shadowRoot.querySelector("#counter"),player:this.shadowRoot.querySelector("#player"),menu:this.shadowRoot.querySelector("#menu")},e.layers.settings={panel:this.shadowRoot.querySelector("#settings"),closeX:this.shadowRoot.querySelector("#settings .close-x"),labels:{playername:e.shadowRoot.querySelector('label[for="playerName"]'),matrixcol:e.shadowRoot.querySelector('label[for="matrixcol"]'),matrixrow:e.shadowRoot.querySelector('label[for="matrixrow"]')},params:{languageSelection:e.shadowRoot.querySelector("#languageSelection"),playerName:e.shadowRoot.querySelector("#playerName"),matrixcol:e.shadowRoot.querySelector("#matrixcol"),matrixrow:e.shadowRoot.querySelector("#matrixrow"),isFullScreen:e.shadowRoot.querySelector("#isFullScreen")},vCheckFullScreen:e.shadowRoot.querySelector("#isFullScreen + .vCheck"),applySettings:e.shadowRoot.querySelector("#applySettings"),restartGame:e.shadowRoot.querySelector("#restartGame")},t(),e.layers.toolbar.menu.addEventListener("click",function(n){t(),e.layers.settings.panel.classList.add("show")}),e.layers.settings.closeX.addEventListener("click",function(n){e.layers.settings.panel.classList.remove("show")}),e.layers.settings.params.languageSelection.addEventListener("change",function(n){e.i18n=new l(n.target.value),e.i18n.update(e.shadowRoot)}),e.layers.settings.vCheckFullScreen.addEventListener("click",function(t){var r=e.layers.settings.params.isFullScreen;r.checked=!r.checked,n()}),e.layers.settings.applySettings.addEventListener("click",function(n){var t=e.layers.settings.params.matrixcol.value,r=e.layers.settings.params.matrixrow.value,o=e.layers.settings.params.isFullScreen.checked;e.scores.currentPlayer.name=e.layers.settings.params.playerName.value,e.layers.toolbar.player.innerText=e.scores.currentPlayer.name,e.setAttribute("matrix","".concat(t,"x").concat(r)),o?e.setAttribute("fullscreen",""):e.removeAttribute("fullscreen"),e.layers.settings.panel.classList.remove("show")}),e.layers.settings.restartGame.addEventListener("click",function(n){e.layers.settings.panel.classList.remove("show"),e.reset(),e.render(),t()});var n=function(n){e.layers.settings.applySettings.removeAttribute("disabled")};Object.entries(e.layers.settings.params).forEach(function(e){var t=[];"text"===e[1].type?t.push("blur","keyup"):t.push("change"),t.forEach(function(t){e[1].addEventListener(t,n)})})}function t(){e.layers.settings.params.matrixcol.value=e.getAttribute("matrix").split("x")[0],e.layers.settings.params.matrixrow.value=e.getAttribute("matrix").split("x")[1],e.layers.toolbar.player.innerText=e.scores.currentPlayer.name,e.layers.settings.params.playerName.value=e.scores.currentPlayer.name,e.layers.settings.params.isFullScreen.checked=e.hasAttribute("fullscreen"),e.layers.settings.applySettings.setAttribute("disabled","disabled")}}}])&&V(t.prototype,r),o&&V(t,o),n}();customElements.define("mini-memory",ne)}]);