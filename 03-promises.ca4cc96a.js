!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,m=Math.min,y=function(){return s.Date.now()};function g(t,e,n){var o,r,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(i);function g(e){var n=o,i=r;return o=r=void 0,l=e,a=t.apply(i,n)}function j(t){return l=t,f=setTimeout(T,e),d?g(t):a}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function T(){var t=y();if(w(t))return O(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?m(n,u-(t-l)):n}(t))}function O(t){return f=void 0,v&&o?g(t):(o=r=void 0,a)}function x(){var t=y(),n=w(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return j(c);if(s)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),a}return e=h(e)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(h(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=r=f=void 0},x.flush=function(){return void 0===f?a:O(y())},x}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=a.test(e);return i||f.test(e)?c(e.slice(2),i?2:8):u.test(e)?NaN:+e}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};var j={},w=document.querySelector(".form");function T(t,e){return new Promise((function(n,o){setTimeout((function(i){Math.random()>.3?n({position:t,delay:e}):o({position:t,delay:e})}),e)}))}w.addEventListener("input",t(e)((function(t){"delay"===t.target.name&&(j.delay=+t.target.value);"step"===t.target.name&&(j.step=+t.target.value);"amount"===t.target.name&&(j.amount=+t.target.value)}),500)),w.addEventListener("submit",(function(t){t.preventDefault();for(var e=0;e<j.amount;e+=1){var n=j.delay+j.step*e;T(e+1,n).then((function(t){var e=t.position,n=t.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(t){var e=t.position,n=t.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.ca4cc96a.js.map