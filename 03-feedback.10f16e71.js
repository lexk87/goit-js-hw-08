function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var i,o,r,f,u,a,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,u=setTimeout(w,t),l?y(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=r}function w(){var e=v();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-a);return s?m(n,r-(e-c)):n}(e))}function O(e){return u=void 0,p&&i?y(e):(i=o=void 0,f)}function T(){var e=v(),n=h(e);if(i=arguments,o=this,a=e,n){if(void 0===u)return j(a);if(s)return u=setTimeout(w,t),y(a)}return void 0===u&&(u=setTimeout(w,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},T.flush=function(){return void 0===u?f:O(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");let j={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)for(const t in e)y[t].value=e[t],j[t]=e[t]}(),y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),!j.email||!j.message)return alert("⚠️ All form fields must be filled out!");console.log(j),localStorage.removeItem("feedback-form-state"),y.reset(),j={}}));
//# sourceMappingURL=03-feedback.10f16e71.js.map