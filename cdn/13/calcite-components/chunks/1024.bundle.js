/*! For license information please see 1024.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1024],{6858:(e,t,i)=>{i.d(t,{F:()=>s});var n=i(861);const a={width:12,height:6,strokeWidth:1},s=({floatingLayout:e,key:t,ref:i})=>{const{width:s,height:r,strokeWidth:o}=a,l=s/2,c="vertical"===e,d=`M0,0 H${s} L${s-l},${r} Q${l},${r} ${l},${r} Z`;return(0,n.h)("svg",{"aria-hidden":"true",class:"calcite-floating-ui-arrow",height:s,key:t,ref:i,viewBox:`0 0 ${s} ${s+(c?0:o)}`,width:s+(c?o:0)},o>0&&(0,n.h)("path",{class:"calcite-floating-ui-arrow__stroke",d,fill:"none","stroke-width":o+1}),(0,n.h)("path",{d,stroke:"none"}))}},1033:(e,t,i)=>{i.d(t,{H:()=>s,c:()=>a});var n=i(861);function a(e){return Math.min(Math.max(Math.ceil(e),1),6)}const s=(e,t)=>{const i=e.level?`h${e.level}`:"div";return delete e.level,(0,n.h)(i,{...e},t)}},1024:(e,t,i)=>{i.r(t),i.d(t,{calcite_popover:()=>k});var n=i(861),a=i(9472),s=i(1527),r=i(6077),o=i(8280),l=i(7449),c=i(1033),d=i(3862),h=i(7572),f=i(5483),p=i(6591),m=i(1338),u=i(6858);i(3803),i(5603);const v="close-button-container",g="header",b="aria-controls",y="aria-expanded",E=new class{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.togglePopovers=e=>{const t=e.composedPath(),i=this.queryPopover(t);i&&!i.triggerDisabled&&(i.open=!i.open),Array.from(this.registeredElements.values()).filter((e=>e!==i&&e.autoClose&&e.open&&!t.includes(e))).forEach((e=>e.open=!1))},this.keyHandler=e=>{e.defaultPrevented||("Escape"===e.key?this.closeAllPopovers():(0,f.i)(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{(0,r.i)(e)&&this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach((e=>e.open=!1))}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("keydown",this.keyHandler,{capture:!0})}},k=class{constructor(e){(0,n.r)(this,e),this.calcitePopoverBeforeClose=(0,n.c)(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=(0,n.c)(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=(0,n.c)(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=(0,n.c)(this,"calcitePopoverOpen",6),this.mutationObserver=(0,m.c)("mutation",(()=>this.updateFocusTrapElements())),this.guid=`calcite-popover-${(0,o.g)()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e,(0,l.c)(this)},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,a.f)(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),(0,a.c)(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:n}=this;e&&i&&!n&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(y,(0,r.t)(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(b,t),E.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(b),e.removeAttribute(y)),E.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=a.b,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handlefocusTrapDisabled(e){this.open&&(e?(0,s.d)(this):(0,s.a)(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){e&&this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),(0,d.c)(this),(0,h.c)(this),(0,l.c)(this),this.setUpReferenceElement(this.hasLoaded),(0,s.c)(this)}async componentWillLoad(){await(0,h.s)(this),(0,p.s)(this)}componentDidLoad(){(0,p.a)(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,d.d)(this),(0,h.d)(this),(0,a.a)(this,this.effectiveReferenceElement,this.el),(0,l.d)(this),(0,s.d)(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:n,overlayPositioning:s,flipDisabled:r,filteredFlipPlacements:o,offsetDistance:l,offsetSkidding:c,arrowEl:d}=this;return(0,a.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:s,placement:n,flipDisabled:r,flipPlacements:o,offsetDistance:l,offsetSkidding:c,arrowEl:d,type:"popover"},e)}async setFocus(){await(0,p.c)(this),(0,n.f)(this.el),(0,r.p)(this.el)}async updateFocusTrapElements(){(0,s.u)(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return("string"==typeof e?(0,r.q)(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),(0,s.a)(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),(0,s.d)(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?(0,n.h)("div",{class:v,key:v},(0,n.h)("calcite-action",{appearance:"transparent",class:"close-button",onClick:this.hide,scale:this.scale,text:e.close,ref:e=>this.closeButtonEl=e},(0,n.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":this.scale}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,i=e?(0,n.h)(c.H,{class:"heading",level:t},e):null;return i?(0,n.h)("div",{class:g,key:g},i,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:i,open:s,pointerDisabled:o,floatingLayout:l}=this,c=e&&s,d=!c,h=o?null:(0,n.h)(u.F,{floatingLayout:l,key:"floating-arrow",ref:this.storeArrowEl});return(0,n.h)(n.H,{"aria-hidden":(0,r.t)(d),"aria-label":i,"aria-live":"polite","calcite-hydrated-hidden":d,id:this.getId(),role:"dialog"},(0,n.h)("div",{class:{[a.F.animation]:!0,[a.F.animationActive]:c},ref:this.setTransitionEl},h,(0,n.h)("div",{class:{"has-header":!!t,container:!0}},this.renderHeader(),(0,n.h)("div",{class:"content"},(0,n.h)("slot",null)),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return(0,n.a)(this)}static get watchers(){return{focusTrapDisabled:["handlefocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}};k.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}"}}]);