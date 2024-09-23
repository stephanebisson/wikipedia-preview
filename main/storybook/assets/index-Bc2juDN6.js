import{s as yt,g as Xt,r as Pt}from"./fullscreen-Cf5aetNz.js";import{j as H,k as Yt,v as Ct,n as jt,b as xt,o as Ut,i as Gt,a as zt,d as Kt}from"./utils-CSfdewex.js";import{r as at,a as Qt,c as Jt,b as Zt,d as te}from"./preview-BGCKVhYT.js";const ee=t=>{let e=[],n=[];const o=(c,l)=>{const m=setTimeout(c,l);return n.push(m),m},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,l,m,d=void 0)=>{c.addEventListener(l,m,d),e.push([c,l,m,d])},s=()=>{e.forEach(c=>{const[l,m,d,h]=c;l.removeEventListener(m,d,h)}),e=[]},f=c=>{const l=c.toElement||c.relatedTarget||c.target,m=t.element.currentTargetElement;if(l!==m&&!t.element.contains(l)){const d=o(t.hide,300),h=()=>{clearTimeout(d)};r(t.element,"mouseenter",h)}};return{onHide:()=>{t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewHeaderImage:c.querySelector(".wikipediapreview-header-image"),wikipediapreviewGalleryImages:c.querySelectorAll(".wikipediapreview-gallery-image"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),content:c.querySelector(".wikipediapreview-body > p"),scrollCue:c.querySelector(".wikipediapreview-scroll-cue")},c.component.wikipediapreviewGalleryImages&&c.component.wikipediapreviewGalleryImages.forEach(l=>{r(l,"click",m=>{const d=m.target.style.backgroundImage.slice(4,-1).replace(/"/g,"");yt(t.media,d,t.lang,t.dir)})}),c.component.wikipediapreviewHeaderImage&&r(c.component.wikipediapreviewHeaderImage,"click",()=>{yt(t.media,t.media[0].thumb,t.lang,t.dir)}),c.component.closeBtn&&r(c.component.closeBtn,"click",t.hide),H){const l=document.querySelector(".wp-dark-screen");r(l,"pointerup",t.hide,!0)}else r(c,"mouseleave",f),r(c.currentTargetElement,"mouseleave",f);c.component.scrollCue&&(Yt(c.component.body)?r(c.component.body,"scroll",l=>{l.target.scrollTop>0&&c.component.scrollCue.remove()}):c.component.scrollCue.remove())}}},ne=["top","right","bottom","left"],vt=["start","end"],bt=ne.reduce((t,e)=>t.concat(e,e+"-"+vt[0],e+"-"+vt[1]),[]),V=Math.min,F=Math.max,rt=Math.round,q=t=>({x:t,y:t}),oe={left:"right",right:"left",bottom:"top",top:"bottom"},ie={start:"end",end:"start"};function ft(t,e,n){return F(t,V(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function M(t){return t.split("-")[1]}function Ot(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(I(t))?"y":"x"}function mt(t){return Ot(nt(t))}function re(t,e,n){n===void 0&&(n=!1);const o=M(t),i=mt(t),r=dt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Et(s)),[s,Et(s)]}function se(t){return t.replace(/start|end/g,e=>ie[e])}function Et(t){return t.replace(/left|right|bottom|top/g,e=>oe[e])}function ce(t){return{top:0,right:0,bottom:0,left:0,...t}}function gt(t){return typeof t!="number"?ce(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function St(t,e,n){let{reference:o,floating:i}=t;const r=nt(e),s=mt(e),f=dt(s),u=I(e),a=r==="y",c=o.x+o.width/2-i.width/2,l=o.y+o.height/2-i.height/2,m=o[f]/2-i[f]/2;let d;switch(u){case"top":d={x:c,y:o.y-i.height};break;case"bottom":d={x:c,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:l};break;case"left":d={x:o.x-i.width,y:l};break;default:d={x:o.x,y:o.y}}switch(M(e)){case"start":d[s]-=m*(n&&a?-1:1);break;case"end":d[s]+=m*(n&&a?-1:1);break}return d}const le=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,f=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:l}=St(a,o,u),m=o,d={},h=0;for(let y=0;y<f.length;y++){const{name:w,fn:E}=f[y],{x:g,y:p,data:b,reset:x}=await E({x:c,y:l,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:a,platform:s,elements:{reference:t,floating:e}});c=g??c,l=p??l,d={...d,[w]:{...d[w],...b}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(m=x.placement),x.rects&&(a=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:c,y:l}=St(a,m,u)),y=-1)}return{x:c,y:l,placement:m,strategy:i,middlewareData:d}};async function Dt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:f,strategy:u}=t,{boundary:a="clippingAncestors",rootBoundary:c="viewport",elementContext:l="floating",altBoundary:m=!1,padding:d=0}=Q(e,t),h=gt(d),w=f[m?l==="floating"?"reference":"floating":l],E=z(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(f.floating)),boundary:a,rootBoundary:c,strategy:u})),g=l==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,p=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f.floating)),b=await(r.isElement==null?void 0:r.isElement(p))?await(r.getScale==null?void 0:r.getScale(p))||{x:1,y:1}:{x:1,y:1},x=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:g,offsetParent:p,strategy:u}):g);return{top:(E.top-x.top+h.top)/b.y,bottom:(x.bottom-E.bottom+h.bottom)/b.y,left:(E.left-x.left+h.left)/b.x,right:(x.right-E.right+h.right)/b.x}}const ae=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:f,middlewareData:u}=e,{element:a,padding:c=0}=Q(t,e)||{};if(a==null)return{};const l=gt(c),m={x:n,y:o},d=mt(i),h=dt(d),y=await s.getDimensions(a),w=d==="y",E=w?"top":"left",g=w?"bottom":"right",p=w?"clientHeight":"clientWidth",b=r.reference[h]+r.reference[d]-m[d]-r.floating[h],x=m[d]-r.reference[d],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let S=A?A[p]:0;(!S||!await(s.isElement==null?void 0:s.isElement(A)))&&(S=f.floating[p]||r.floating[h]);const O=b/2-x/2,C=S/2-y[h]/2-1,v=V(l[E],C),T=V(l[g],C),R=v,L=S-y[h]-T,$=S/2-y[h]/2+O,Y=ft(R,$,L),U=!u.arrow&&M(i)!=null&&$!==Y&&r.reference[h]/2-($<R?v:T)-y[h]/2<0,Z=U?$<R?$-R:$-L:0;return{[d]:m[d]+Z,data:{[d]:Y,centerOffset:$-Y-Z,...U&&{alignmentOffset:Z}},reset:U}}});function fe(t,e,n){return(t?[...n.filter(i=>M(i)===t),...n.filter(i=>M(i)!==t)]:n.filter(i=>I(i)===i)).filter(i=>t?M(i)===t||(e?se(i)!==i:!1):!0)}const ue=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:f,platform:u,elements:a}=e,{crossAxis:c=!1,alignment:l,allowedPlacements:m=bt,autoAlignment:d=!0,...h}=Q(t,e),y=l!==void 0||m===bt?fe(l||null,d,m):m,w=await Dt(e,h),E=((n=s.autoPlacement)==null?void 0:n.index)||0,g=y[E];if(g==null)return{};const p=re(g,r,await(u.isRTL==null?void 0:u.isRTL(a.floating)));if(f!==g)return{reset:{placement:y[0]}};const b=[w[I(g)],w[p[0]],w[p[1]]],x=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:g,overflows:b}],A=y[E+1];if(A)return{data:{index:E+1,overflows:x},reset:{placement:A}};const S=x.map(v=>{const T=M(v.placement);return[v.placement,T&&c?v.overflows.slice(0,2).reduce((R,L)=>R+L,0):v.overflows[0],v.overflows]}).sort((v,T)=>v[1]-T[1]),C=((i=S.filter(v=>v[2].slice(0,M(v[0])?2:3).every(T=>T<=0))[0])==null?void 0:i[0])||S[0][0];return C!==f?{data:{index:E+1,overflows:x},reset:{placement:C}}:{}}}};function Ht(t){const e=V(...t.map(r=>r.left)),n=V(...t.map(r=>r.top)),o=F(...t.map(r=>r.right)),i=F(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function de(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>z(Ht(i)))}const me=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:f=2,x:u,y:a}=Q(t,e),c=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),l=de(c),m=z(Ht(c)),d=gt(f);function h(){if(l.length===2&&l[0].left>l[1].right&&u!=null&&a!=null)return l.find(w=>u>w.left-d.left&&u<w.right+d.right&&a>w.top-d.top&&a<w.bottom+d.bottom)||m;if(l.length>=2){if(nt(n)==="y"){const v=l[0],T=l[l.length-1],R=I(n)==="top",L=v.top,$=T.bottom,Y=R?v.left:T.left,U=R?v.right:T.right,Z=U-Y,_t=$-L;return{top:L,bottom:$,left:Y,right:U,width:Z,height:_t,x:Y,y:L}}const w=I(n)==="left",E=F(...l.map(v=>v.right)),g=V(...l.map(v=>v.left)),p=l.filter(v=>w?v.left===g:v.right===E),b=p[0].top,x=p[p.length-1].bottom,A=g,S=E,O=S-A,C=x-b;return{top:b,bottom:x,left:A,right:S,width:O,height:C,x:A,y:b}}return m}const y=await r.getElementRects({reference:{getBoundingClientRect:h},floating:o.floating,strategy:s});return i.reference.x!==y.reference.x||i.reference.y!==y.reference.y||i.reference.width!==y.reference.width||i.reference.height!==y.reference.height?{reset:{rects:y}}:{}}}};async function ge(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=I(n),f=M(n),u=nt(n)==="y",a=["left","top"].includes(s)?-1:1,c=r&&u?-1:1,l=Q(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:h}=typeof l=="number"?{mainAxis:l,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...l};return f&&typeof h=="number"&&(d=f==="end"?h*-1:h),u?{x:d*c,y:m*a}:{x:m*a,y:d*c}}const pe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:f}=e,u=await ge(e,t);return s===((n=f.offset)==null?void 0:n.placement)&&(o=f.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:s}}}}},he=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:w=>{let{x:E,y:g}=w;return{x:E,y:g}}},...u}=Q(t,e),a={x:n,y:o},c=await Dt(e,u),l=nt(I(i)),m=Ot(l);let d=a[m],h=a[l];if(r){const w=m==="y"?"top":"left",E=m==="y"?"bottom":"right",g=d+c[w],p=d-c[E];d=ft(g,d,p)}if(s){const w=l==="y"?"top":"left",E=l==="y"?"bottom":"right",g=h+c[w],p=h-c[E];h=ft(g,h,p)}const y=f.fn({...e,[m]:d,[l]:h});return{...y,data:{x:y.x-n,y:y.y-o}}}}};function J(t){return Bt(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function X(t){var e;return(e=(Bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bt(t){return t instanceof Node||t instanceof P(t).Node}function W(t){return t instanceof Element||t instanceof P(t).Element}function N(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function At(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function we(t){return["table","td","th"].includes(J(t))}function pt(t){const e=ht(),n=B(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ye(t){let e=_(t);for(;N(e)&&!K(e);){if(pt(e))return e;e=_(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function B(t){return P(t).getComputedStyle(t)}function st(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||X(t);return At(e)?e.host:e}function $t(t){const e=_(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&ot(e)?e:$t(e)}function ut(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$t(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=P(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?ut(s.frameElement):[]):e.concat(i,ut(i,[],n))}function Wt(t){const e=B(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,f=rt(n)!==r||rt(o)!==s;return f&&(n=r,o=s),{width:n,height:o,$:f}}function Nt(t){return W(t)?t:t.contextElement}function G(t){const e=Nt(t);if(!N(e))return q(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Wt(e);let s=(r?rt(n.width):n.width)/o,f=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const xe=q(0);function Ft(t){const e=P(t);return!ht()||!e.visualViewport?xe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ve(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==P(t)?!1:e}function et(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Nt(t);let s=q(1);e&&(o?W(o)&&(s=G(o)):s=G(t));const f=ve(r,n,o)?Ft(r):q(0);let u=(i.left+f.x)/s.x,a=(i.top+f.y)/s.y,c=i.width/s.x,l=i.height/s.y;if(r){const m=P(r),d=o&&W(o)?P(o):o;let h=m,y=h.frameElement;for(;y&&o&&d!==h;){const w=G(y),E=y.getBoundingClientRect(),g=B(y),p=E.left+(y.clientLeft+parseFloat(g.paddingLeft))*w.x,b=E.top+(y.clientTop+parseFloat(g.paddingTop))*w.y;u*=w.x,a*=w.y,c*=w.x,l*=w.y,u+=p,a+=b,h=P(y),y=h.frameElement}}return z({width:c,height:l,x:u,y:a})}const be=[":popover-open",":modal"];function wt(t){return be.some(e=>{try{return t.matches(e)}catch{return!1}})}function Ee(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=X(o),f=e?wt(e.floating):!1;if(o===s||f&&r)return n;let u={scrollLeft:0,scrollTop:0},a=q(1);const c=q(0),l=N(o);if((l||!l&&!r)&&((J(o)!=="body"||ot(s))&&(u=st(o)),N(o))){const m=et(o);a=G(o),c.x=m.x+o.clientLeft,c.y=m.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-u.scrollLeft*a.x+c.x,y:n.y*a.y-u.scrollTop*a.y+c.y}}function Se(t){return Array.from(t.getClientRects())}function Mt(t){return et(X(t)).left+st(t).scrollLeft}function Ae(t){const e=X(t),n=st(t),o=t.ownerDocument.body,i=F(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=F(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Mt(t);const f=-n.scrollTop;return B(o).direction==="rtl"&&(s+=F(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:f}}function ke(t,e){const n=P(t),o=X(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,f=0,u=0;if(i){r=i.width,s=i.height;const a=ht();(!a||a&&e==="fixed")&&(f=i.offsetLeft,u=i.offsetTop)}return{width:r,height:s,x:f,y:u}}function Re(t,e){const n=et(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=N(t)?G(t):q(1),s=t.clientWidth*r.x,f=t.clientHeight*r.y,u=i*r.x,a=o*r.y;return{width:s,height:f,x:u,y:a}}function kt(t,e,n){let o;if(e==="viewport")o=ke(t,n);else if(e==="document")o=Ae(X(t));else if(W(e))o=Re(e,n);else{const i=Ft(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return z(o)}function Vt(t,e){const n=_(t);return n===e||!W(n)||K(n)?!1:B(n).position==="fixed"||Vt(n,e)}function Te(t,e){const n=e.get(t);if(n)return n;let o=ut(t,[],!1).filter(f=>W(f)&&J(f)!=="body"),i=null;const r=B(t).position==="fixed";let s=r?_(t):t;for(;W(s)&&!K(s);){const f=B(s),u=pt(s);!u&&f.position==="fixed"&&(i=null),(r?!u&&!i:!u&&f.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!u&&Vt(t,s))?o=o.filter(c=>c!==s):i=f,s=_(s)}return e.set(t,o),o}function Le(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?wt(e)?[]:Te(e,this._c):[].concat(n),o],f=s[0],u=s.reduce((a,c)=>{const l=kt(e,c,i);return a.top=F(l.top,a.top),a.right=V(l.right,a.right),a.bottom=V(l.bottom,a.bottom),a.left=F(l.left,a.left),a},kt(e,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Pe(t){const{width:e,height:n}=Wt(t);return{width:e,height:n}}function Ce(t,e,n){const o=N(e),i=X(e),r=n==="fixed",s=et(t,!0,r,e);let f={scrollLeft:0,scrollTop:0};const u=q(0);if(o||!o&&!r)if((J(e)!=="body"||ot(i))&&(f=st(e)),o){const l=et(e,!0,r,e);u.x=l.x+e.clientLeft,u.y=l.y+e.clientTop}else i&&(u.x=Mt(i));const a=s.left+f.scrollLeft-u.x,c=s.top+f.scrollTop-u.y;return{x:a,y:c,width:s.width,height:s.height}}function ct(t){return B(t).position==="static"}function Rt(t,e){return!N(t)||B(t).position==="fixed"?null:e?e(t):t.offsetParent}function qt(t,e){const n=P(t);if(wt(t))return n;if(!N(t)){let i=_(t);for(;i&&!K(i);){if(W(i)&&!ct(i))return i;i=_(i)}return n}let o=Rt(t,e);for(;o&&we(o)&&ct(o);)o=Rt(o,e);return o&&K(o)&&ct(o)&&!pt(o)?n:o||ye(t)||n}const Oe=async function(t){const e=this.getOffsetParent||qt,n=this.getDimensions,o=await n(t.floating);return{reference:Ce(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function De(t){return B(t).direction==="rtl"}const He={convertOffsetParentRelativeRectToViewportRelativeRect:Ee,getDocumentElement:X,getClippingRect:Le,getOffsetParent:qt,getElementRects:Oe,getClientRects:Se,getDimensions:Pe,getScale:G,isElement:W,isRTL:De},Be=pe,$e=ue,We=he,Ne=ae,Fe=me,Me=(t,e,n)=>{const o=new Map,i={platform:He,...n},r={...i.platform,_c:o};return le(t,e,{...i,platform:r})};let k,lt;const it=t=>t&&t+"px",Ve=(t,e=window)=>{k||(k=e.document.createElement("div"),k.classList.add("wp-popup"),k.style.visibility="hidden",t.appendChild(k),lt=e.document.createElement("div"),lt.classList.add("wp-popup-arrow"));const n={};return{show:(s,f,{x:u,y:a})=>{k.innerHTML=s+lt.outerHTML;const c=k.querySelector(".wp-popup-arrow");Me(f,k,{middleware:[Fe({x:u,y:a}),We(),$e({allowedPlacements:["top","bottom"]}),Be(10),Ne({element:c})]}).then(({x:l,y:m,middlewareData:d,placement:h})=>{if(k.style.top=it(m),k.style.left=it(l),d.arrow&&c){const{x:y,y:w}=d.arrow;c.style.left=y!==null?it(y):"",c.style.top=w!==null?it(w):"",h==="left"?(c.style.right="-8px",c.style.transform="rotate(90deg)"):h==="right"?(c.style.left="-8px",c.style.transform="rotate(-90deg)"):h==="top"?(c.style.bottom="-8px",c.style.transform="rotate(180deg)"):h==="bottom"&&(c.style.top="-8px")}k.currentTargetElement=f,k.style.visibility="visible",n.onShow&&n.onShow(k)})},hide:()=>{n.onHide&&n.onHide(k),k.style.visibility="hidden",k.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:k}};let D,It;const qe=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),It=t.body.style.overflow,t.body.style.overflow="hidden"}},Ie=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=It},_e=(t,e=window)=>{D||(D=e.document.createElement("div"),D.classList.add("wp-touch-popup"),D.style.visibility="hidden",t.appendChild(D));const n={};return{show:s=>{D.innerHTML=s,D.style.visibility="visible",qe(e.document),n.onShow&&n.onShow(D)},hide:()=>{n.onHide&&n.onHide(D),D.style.visibility="hidden",Ie(e.document)},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:D}},tt=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},Xe=(t,e,n)=>{Pt(e,t,o=>{n(at(e,o,H))})},Tt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Lt,j;function Ye({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:f="detect"}){i=jt(i)||document.body;const u=n,a=H?_e(i):Ve(i),c=ee(a),l={},m=[],d=[];j=f;const h=(g,p=!1)=>{g.preventDefault(),g.stopPropagation();const b=Date.now(),{currentTarget:x}=p?l:g,A=p?l.title:decodeURIComponent(x.getAttribute("data-wp-title")||x.textContent),S=p?l.lang:x.getAttribute("data-wp-lang")||u,O=p?l.pointerPosition:{x:g.clientX,y:g.clientY},C=Kt(S);a.element.currentTargetElement===x&&!p||(Lt=b,a.element.style.visibility==="visible"&&a.hide(),a.loading=!0,a.dir=C,a.show(Qt(H,S,C,j),x,O),Pt(S,A,v=>{if(b===Lt&&a.loading){if(a.loading=!1,v.extractHtml){if(a.lang=S,a.title=A,v.type==="standard")a.show(at(S,v,H,j),x,O),a.media=v.media,tt(r,"onShow",[A,S,"standard"]);else if(v.type==="disambiguation"){const R=v.extractHtml?at(S,v,H,j):Jt(H,S,v.title,v.dir,j);a.show(R,x,O),tt(r,"onShow",[A,S,"disambiguation"])}}else if(Gt())a.show(Zt(H,S,A,C,j),x,O),tt(r,"onShow",[A,S,"error"]);else{a.show(te(H,S,C,j),x,O),tt(r,"onShow",[A,S,"offline"]);const R=document.querySelector(".wikipediapreview-body-action");l.lang=S,l.title=A,l.pointerPosition=O,l.target=x,R.addEventListener("click",L=>{h(L,!0)})}const T=a.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(T&&T.addEventListener("click",()=>{tt(r,"onWikiRead",[A,S])}),x.tagName==="A"){const R=zt().split("="),L=new URL(x.href);L.searchParams.set(R[0],R[1]),x.href=L.href}}}))},y=g=>{h(g)},w=g=>{g.addEventListener("pointerenter",y)},E=g=>{let p=null;g.addEventListener("pointerdown",b=>{p=b.pointerType}),g.addEventListener("click",b=>{p==="touch"&&(b.preventDefault(),b.stopPropagation())})};Tt(t,g=>{Array.prototype.forEach.call(g.querySelectorAll(e),p=>{w(p),m.push({text:p.textContent,title:p.getAttribute("data-wp-title")||p.textContent,lang:p.getAttribute("data-wp-lang")||u})})}),o&&Tt(t,g=>{Array.prototype.forEach.call(g.querySelectorAll("a"),p=>{const b=Ut(p.getAttribute("href"));b&&(p.setAttribute("data-wp-title",b.title),p.setAttribute("data-wp-lang",b.lang),w(p),E(p),d.push({text:p.textContent,title:b.title,lang:b.lang}))})}),a.subscribe(c),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${m.length}`),m.forEach((g,p)=>{console.log(p+1,`${g.text} -> ${decodeURI(xt(g.lang,g.title,H,!1))}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${d.length}`),d.forEach((g,p)=>{console.log(p+1,`${g.text} -> ${decodeURI(xt(g.lang,g.title,H,!1))}`)}),console.groupEnd()),console.groupEnd())}Ct();const ze={init:Ye,version:Ct,getPreviewHtml:Xe,getSections:Xt};export{ze as w};
