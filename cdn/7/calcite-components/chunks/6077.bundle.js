"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6077],{6077:(t,n,e)=>{e.d(n,{a:()=>j,b:()=>D,c:()=>M,d:()=>J,e:()=>X,f:()=>B,g:()=>_,h:()=>k,i:()=>Q,j:()=>W,k:()=>w,l:()=>A,m:()=>E,n:()=>R,o:()=>C,p:()=>U,q:()=>O,r:()=>I,s:()=>K,t:()=>H,u:()=>$,v:()=>T,w:()=>Y,x:()=>x,y:()=>L,z:()=>V});var r=e(8280),o=e(5603),i=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],u=i.join(","),l="undefined"==typeof Element,a=l?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!l&&Element.prototype.getRootNode?function(t){var n;return null==t||null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null==t?void 0:t.ownerDocument},s=function t(n,e){var r;void 0===e&&(e=!0);var o=null==n||null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},f=function(t,n,e){if(s(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(u));return n&&a.call(t,u)&&r.unshift(t),r.filter(e)},d=function t(n,e,r){for(var o=[],i=Array.from(n);i.length;){var l=i.shift();if(!s(l,!1))if("SLOT"===l.tagName){var c=l.assignedElements(),f=t(c.length?c:l.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:l,candidates:f})}else{a.call(l,u)&&r.filter(l)&&(e||!n.includes(l))&&o.push(l);var d=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),h=!s(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(d&&h){var p=t(!0===d?l.children:d.children,!0,r);r.flatten?o.push.apply(o,p):o.push({scopeParent:l,candidates:p})}else i.unshift.apply(i,l.children)}}return o},h=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var n,e=null==t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e}(t))&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},p=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},m=function(t){return"INPUT"===t.tagName},g=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},y=function(t,n){return!(n.disabled||s(n)||function(t){return m(t)&&"hidden"===t.type}(n)||function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=a.call(t,"details>summary:first-of-type")?t.parentElement:t;if(a.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return g(t)}else{if("function"==typeof r){for(var i=t;t;){var u=t.parentElement,l=c(t);if(u&&!u.shadowRoot&&!0===r(u))return g(t);t=t.assignedSlot?t.assignedSlot:u||l===t.ownerDocument?u:l.host}t=i}if(function(t){var n,e,r,o,i=t&&c(t),u=null===(n=i)||void 0===n?void 0:n.host,l=!1;if(i&&i!==t)for(l=!!(null!==(e=u)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(u)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!l&&u;){var a,s,f;l=!(null===(s=u=null===(a=i=c(u))||void 0===a?void 0:a.host)||void 0===s||null===(f=s.ownerDocument)||void 0===f||!f.contains(u))}return l}(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1}(n,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!a.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1}(n))},v=function(t,n){return!(function(t){return function(t){return m(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n,e=t.form||c(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]}(n,t.form);return!o||o===t}(t)}(n)||h(n)<0||!y(t,n))},S=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},b=function t(n){var e=[],r=[];return n.forEach((function(n,o){var i=!!n.scopeParent,u=i?n.scopeParent:n,l=h(u,i),a=i?t(n.candidates):u;0===l?i?e.push.apply(e,a):e.push(u):r.push({documentOrder:o,tabIndex:l,item:n,isScope:i,content:a})})),r.sort(p).reduce((function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t}),[]).concat(e)},w=function(t,n){var e;return e=(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:v.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:S}):f(t,n.includeContainer,v.bind(null,n)),b(e)},A=function(t,n){return(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:y.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):f(t,n.includeContainer,y.bind(null,n))},E=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==a.call(t,u)&&v(n,t)},N=i.concat("iframe").join(","),R=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==a.call(t,N)&&y(n,t)};const C={getShadowRoot:!0};function I(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function x(t){return Array.isArray(t)?t:Array.from(t)}function k(t){const n=M(t,`.${o.C.darkMode}, .${o.C.lightMode}`);return n?.classList.contains("calcite-mode-dark")?"dark":"light"}function D(t){const n=M(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function T(t,n,e){const r=`[${n}]`,o=t.closest(r);return o?o.getAttribute(n):e}function L(t){return t.getRootNode()}function $(t){const n=L(t);return"host"in n?n:null}function q(t){return t.host||null}function O(t,{selector:n,id:e}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const o=L(r),i=e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null,u=q(o);return i||(u?t(u):null)}(t)}function M(t,n){return function t(e){return e?e.closest(n)||t(q(L(e))):null}(t)}function P(t,n){return F(t,n)}function F(t,n){if(!t)return;const e=n(t);if(void 0!==e)return e;const{parentNode:r}=t;return F(r instanceof ShadowRoot?r.host:r,n)}function j(t,n){return!!P(n,(n=>n===t||void 0))}async function B(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function U(t){t&&(w(t,C)[0]||t).focus()}const z=":not([slot])";function _(t,n,e){n&&!Array.isArray(n)&&"string"!=typeof n&&(e=n,n=null);const r=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:z;return e?.all?function(t,n,e){let r=n===z?G(t,z):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t)),r=e?.matches?r.filter((t=>t?.matches(e.matches))):r;const o=e?.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,r,e):function(t,n,e){let r=n===z?G(t,z)[0]||null:t.querySelector(n);r=e&&!1===e.direct||r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;const o=e?.selector;return o?r?.querySelector(o):r}(t,r,e)}function G(t,n){return t?Array.from(t.children||[]).filter((t=>t?.matches(n))):[]}function V(t,n){return Array.from(t.children).filter((t=>t.matches(n)))}function X(t,n,e){return"string"==typeof n&&""!==n?n:""===n?t[e]:void 0}function Y(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function H(t){return Boolean(t).toString()}function J(t){return!!K(t).length}function K(t){return t.target.assignedElements({flatten:!0})}function Q(t){return!(!t.isPrimary||0!==t.button)}const W=(t,n,e,r=!0)=>{const o=t.indexOf(n),i=0===o,u=o===t.length-1;let l;return r&&(e="previous"===e&&i?"last":"next"===e&&u?"first":e),l="previous"===e?t[o-1]||t[r?t.length-1:o]:"next"===e?t[o+1]||t[r?0:o]:"last"===e?t[t.length-1]:t[0],B(l),l}},8280:(t,n,e)=>{e.d(n,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}}]);