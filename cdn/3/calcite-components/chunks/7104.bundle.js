/*! For license information please see 7104.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7104],{7104:(t,a,e)=>{e.r(a),e.d(a,{calcite_fab:()=>c});var i=e(861),n=e(6077),o=e(1402),r=e(6591);e(5603);const c=class{constructor(t){(0,i.r)(this,t),this.appearance="solid",this.kind="brand",this.disabled=!1,this.icon="plus",this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1}componentWillLoad(){(0,r.s)(this)}componentDidLoad(){(0,r.a)(this)}componentDidRender(){(0,o.u)(this)}async setFocus(){await(0,r.c)(this),(0,n.f)(this.buttonEl)}render(){const{appearance:t,kind:a,disabled:e,loading:n,scale:o,textEnabled:r,icon:c,label:l,text:s,iconFlipRtl:d}=this,p=r?null:l||s||null;return(0,i.h)("calcite-button",{appearance:"solid"===t?"solid":"outline-fill",class:"button",disabled:e,iconFlipRtl:d?"start":null,iconStart:c,kind:a,label:l,loading:n,round:!0,scale:o,title:p,type:"button",width:"auto",ref:t=>{this.buttonEl=t}},this.textEnabled?this.text:null)}get el(){return(0,i.a)(this)}};c.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:0 12px 32px -2px rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 12px 32px -2px var(--tw-shadow-color), 0 4px 20px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}"},1402:(t,a,e)=>{function i(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function n(t){t.preventDefault()}e.d(a,{u:()=>l});const o=["mousedown","mouseup","click"];function r(t){const{disabled:a}=t.target;a&&(t.stopImmediatePropagation(),t.preventDefault())}const c={capture:!0};function l(t,a=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),t.el.click=i,t.el.addEventListener("pointerdown",n,c),void o.forEach((a=>t.el.addEventListener(a,r,c)));t.el.click=HTMLElement.prototype.click,t.el.removeEventListener("pointerdown",n,c),o.forEach((a=>t.el.removeEventListener(a,r,c))),"function"==typeof a?t.el.setAttribute("tabindex",a.call(t)?"0":"-1"):!0===a?t.el.setAttribute("tabindex","0"):!1===a&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}},6591:(t,a,e)=>{e.d(a,{a:()=>r,c:()=>c,s:()=>o});const i=new WeakMap,n=new WeakMap;function o(t){n.set(t,new Promise((a=>i.set(t,a))))}function r(t){i.get(t)()}function c(t){return n.get(t)}}}]);