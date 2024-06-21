import{s as Xt,r as Yt,g as jt,a as Tt}from"./fullscreen-Dag8eopT.js";import{j as L,k as yt,v as Pt,n as Gt,b as xt,o as Ut,i as zt,a as Kt,d as Qt}from"./utils-nf0hlCs4.js";import{r as at,a as Jt,c as Zt,b as te,d as ee}from"./preview-DDLLiIZR.js";const ne=(t,e)=>{const n=document.createElement("div");return n.classList.add("wikipediapreview-gallery-row"),t.forEach(o=>{const i=document.createElement("div");i.classList.add("wikipediapreview-gallery-image"),i.style.backgroundImage=`url(${o.thumb})`,i.addEventListener("click",r=>{const s=r.target.style.backgroundImage.slice(4,-1).replace(/"/g,"");Xt(t,s,e.lang,e.dir)}),n.appendChild(i)}),n},oe=t=>{let e=[],n=[];const o=(c,g)=>{const a=setTimeout(c,g);return n.push(a),a},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,g,a,p=void 0)=>{c.addEventListener(g,a,p),e.push([c,g,a,p])},s=()=>{e.forEach(c=>{const[g,a,p,m]=c;g.removeEventListener(a,p,m)}),e=[]},f=()=>{const{lang:c,title:g}=t;!t.loading&&c&&g&&Yt(c,g,a=>{const p=t.element.component.wikipediapreviewGallery;a&&a.length>0?p.appendChild(ne(a,t)):(t.element.component.body.removeChild(p),yt(t.element.component.body)||t.element.component.scrollCue.remove())})},u=c=>{const g=c.toElement||c.relatedTarget||c.target,a=t.element.currentTargetElement;if(g!==a&&!t.element.contains(g)){const p=o(t.hide,300),m=()=>{clearTimeout(p)};r(t.element,"mouseenter",m)}};return{onHide:()=>{t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewGallery:c.querySelector(".wikipediapreview-gallery"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),content:c.querySelector(".wikipediapreview-body > p"),scrollCue:c.querySelector(".wikipediapreview-scroll-cue")},c.component.wikipediapreviewGallery&&c.component.wikipediapreviewGallery.children.length===0&&f(),L&&r(c.component.closeBtn,"click",t.hide),L){const g=document.querySelector(".wp-dark-screen");r(g,"click",t.hide,!0)}else r(c,"mouseleave",u),r(c.currentTargetElement,"mouseleave",u);c.component.scrollCue&&(yt(c.component.body)?r(c.component.body,"scroll",g=>{g.target.scrollTop>0&&c.component.scrollCue.remove()}):c.component.scrollCue.remove())}}},ie=["top","right","bottom","left"],vt=["start","end"],bt=ie.reduce((t,e)=>t.concat(e,e+"-"+vt[0],e+"-"+vt[1]),[]),M=Math.min,W=Math.max,rt=Math.round,V=t=>({x:t,y:t}),re={left:"right",right:"left",bottom:"top",top:"bottom"},se={start:"end",end:"start"};function ft(t,e,n){return W(t,M(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function N(t){return t.split("-")[1]}function Ot(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(q(t))?"y":"x"}function mt(t){return Ot(nt(t))}function ce(t,e,n){n===void 0&&(n=!1);const o=N(t),i=mt(t),r=dt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Et(s)),[s,Et(s)]}function le(t){return t.replace(/start|end/g,e=>se[e])}function Et(t){return t.replace(/left|right|bottom|top/g,e=>re[e])}function ae(t){return{top:0,right:0,bottom:0,left:0,...t}}function gt(t){return typeof t!="number"?ae(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function St(t,e,n){let{reference:o,floating:i}=t;const r=nt(e),s=mt(e),f=dt(s),u=q(e),l=r==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,g=o[f]/2-i[f]/2;let a;switch(u){case"top":a={x:h,y:o.y-i.height};break;case"bottom":a={x:h,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:c};break;case"left":a={x:o.x-i.width,y:c};break;default:a={x:o.x,y:o.y}}switch(N(e)){case"start":a[s]-=g*(n&&l?-1:1);break;case"end":a[s]+=g*(n&&l?-1:1);break}return a}const fe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,f=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=St(l,o,u),g=o,a={},p=0;for(let m=0;m<f.length;m++){const{name:d,fn:y}=f[m],{x:w,y:x,data:v,reset:E}=await y({x:h,y:c,initialPlacement:o,placement:g,strategy:i,middlewareData:a,rects:l,platform:s,elements:{reference:t,floating:e}});h=w??h,c=x??c,a={...a,[d]:{...a[d],...v}},E&&p<=50&&(p++,typeof E=="object"&&(E.placement&&(g=E.placement),E.rects&&(l=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):E.rects),{x:h,y:c}=St(l,g,u)),m=-1)}return{x:h,y:c,placement:g,strategy:i,middlewareData:a}};async function Dt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:f,strategy:u}=t,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:g=!1,padding:a=0}=Q(e,t),p=gt(a),d=f[g?c==="floating"?"reference":"floating":c],y=z(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(d)))==null||n?d:d.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(f.floating)),boundary:l,rootBoundary:h,strategy:u})),w=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f.floating)),v=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},E=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:x,strategy:u}):w);return{top:(y.top-E.top+p.top)/v.y,bottom:(E.bottom-y.bottom+p.bottom)/v.y,left:(y.left-E.left+p.left)/v.x,right:(E.right-y.right+p.right)/v.x}}const ue=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:f,middlewareData:u}=e,{element:l,padding:h=0}=Q(t,e)||{};if(l==null)return{};const c=gt(h),g={x:n,y:o},a=mt(i),p=dt(a),m=await s.getDimensions(l),d=a==="y",y=d?"top":"left",w=d?"bottom":"right",x=d?"clientHeight":"clientWidth",v=r.reference[p]+r.reference[a]-g[a]-r.floating[p],E=g[a]-r.reference[a],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let S=A?A[x]:0;(!S||!await(s.isElement==null?void 0:s.isElement(A)))&&(S=f.floating[x]||r.floating[p]);const X=v/2-E/2,R=S/2-m[p]/2-1,b=M(c[y],R),T=M(c[w],R),B=b,F=S-m[p]-T,D=S/2-m[p]/2+X,Y=ft(B,D,F),G=!u.arrow&&N(i)!=null&&D!==Y&&r.reference[p]/2-(D<B?b:T)-m[p]/2<0,Z=G?D<B?D-B:D-F:0;return{[a]:g[a]+Z,data:{[a]:Y,centerOffset:D-Y-Z,...G&&{alignmentOffset:Z}},reset:G}}});function de(t,e,n){return(t?[...n.filter(i=>N(i)===t),...n.filter(i=>N(i)!==t)]:n.filter(i=>q(i)===i)).filter(i=>t?N(i)===t||(e?le(i)!==i:!1):!0)}const me=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:f,platform:u,elements:l}=e,{crossAxis:h=!1,alignment:c,allowedPlacements:g=bt,autoAlignment:a=!0,...p}=Q(t,e),m=c!==void 0||g===bt?de(c||null,a,g):g,d=await Dt(e,p),y=((n=s.autoPlacement)==null?void 0:n.index)||0,w=m[y];if(w==null)return{};const x=ce(w,r,await(u.isRTL==null?void 0:u.isRTL(l.floating)));if(f!==w)return{reset:{placement:m[0]}};const v=[d[q(w)],d[x[0]],d[x[1]]],E=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],A=m[y+1];if(A)return{data:{index:y+1,overflows:E},reset:{placement:A}};const S=E.map(b=>{const T=N(b.placement);return[b.placement,T&&h?b.overflows.slice(0,2).reduce((B,F)=>B+F,0):b.overflows[0],b.overflows]}).sort((b,T)=>b[1]-T[1]),R=((i=S.filter(b=>b[2].slice(0,N(b[0])?2:3).every(T=>T<=0))[0])==null?void 0:i[0])||S[0][0];return R!==f?{data:{index:y+1,overflows:E},reset:{placement:R}}:{}}}};function Ht(t){const e=M(...t.map(r=>r.left)),n=M(...t.map(r=>r.top)),o=W(...t.map(r=>r.right)),i=W(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function ge(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>z(Ht(i)))}const pe=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:f=2,x:u,y:l}=Q(t,e),h=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),c=ge(h),g=z(Ht(h)),a=gt(f);function p(){if(c.length===2&&c[0].left>c[1].right&&u!=null&&l!=null)return c.find(d=>u>d.left-a.left&&u<d.right+a.right&&l>d.top-a.top&&l<d.bottom+a.bottom)||g;if(c.length>=2){if(nt(n)==="y"){const b=c[0],T=c[c.length-1],B=q(n)==="top",F=b.top,D=T.bottom,Y=B?b.left:T.left,G=B?b.right:T.right,Z=G-Y,It=D-F;return{top:F,bottom:D,left:Y,right:G,width:Z,height:It,x:Y,y:F}}const d=q(n)==="left",y=W(...c.map(b=>b.right)),w=M(...c.map(b=>b.left)),x=c.filter(b=>d?b.left===w:b.right===y),v=x[0].top,E=x[x.length-1].bottom,A=w,S=y,X=S-A,R=E-v;return{top:v,bottom:E,left:A,right:S,width:X,height:R,x:A,y:v}}return g}const m=await r.getElementRects({reference:{getBoundingClientRect:p},floating:o.floating,strategy:s});return i.reference.x!==m.reference.x||i.reference.y!==m.reference.y||i.reference.width!==m.reference.width||i.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}};async function he(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=q(n),f=N(n),u=nt(n)==="y",l=["left","top"].includes(s)?-1:1,h=r&&u?-1:1,c=Q(e,t);let{mainAxis:g,crossAxis:a,alignmentAxis:p}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return f&&typeof p=="number"&&(a=f==="end"?p*-1:p),u?{x:a*h,y:g*l}:{x:g*l,y:a*h}}const we=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:f}=e,u=await he(e,t);return s===((n=f.offset)==null?void 0:n.placement)&&(o=f.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:s}}}}},ye=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:d=>{let{x:y,y:w}=d;return{x:y,y:w}}},...u}=Q(t,e),l={x:n,y:o},h=await Dt(e,u),c=nt(q(i)),g=Ot(c);let a=l[g],p=l[c];if(r){const d=g==="y"?"top":"left",y=g==="y"?"bottom":"right",w=a+h[d],x=a-h[y];a=ft(w,a,x)}if(s){const d=c==="y"?"top":"left",y=c==="y"?"bottom":"right",w=p+h[d],x=p-h[y];p=ft(w,p,x)}const m=f.fn({...e,[g]:a,[c]:p});return{...m,data:{x:m.x-n,y:m.y-o}}}}};function J(t){return $t(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=($t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $t(t){return t instanceof Node||t instanceof C(t).Node}function H(t){return t instanceof Element||t instanceof C(t).Element}function $(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function kt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function xe(t){return["table","td","th"].includes(J(t))}function pt(t){const e=ht(),n=O(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ve(t){let e=_(t);for(;$(e)&&!K(e);){if(pt(e))return e;e=_(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function O(t){return C(t).getComputedStyle(t)}function st(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kt(t)&&t.host||I(t);return kt(e)?e.host:e}function Bt(t){const e=_(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:$(e)&&ot(e)?e:Bt(e)}function ut(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Bt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=C(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?ut(s.frameElement):[]):e.concat(i,ut(i,[],n))}function Wt(t){const e=O(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=$(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,f=rt(n)!==r||rt(o)!==s;return f&&(n=r,o=s),{width:n,height:o,$:f}}function Nt(t){return H(t)?t:t.contextElement}function U(t){const e=Nt(t);if(!$(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Wt(e);let s=(r?rt(n.width):n.width)/o,f=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const be=V(0);function Ft(t){const e=C(t);return!ht()||!e.visualViewport?be:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ee(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function et(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Nt(t);let s=V(1);e&&(o?H(o)&&(s=U(o)):s=U(t));const f=Ee(r,n,o)?Ft(r):V(0);let u=(i.left+f.x)/s.x,l=(i.top+f.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(r){const g=C(r),a=o&&H(o)?C(o):o;let p=g,m=p.frameElement;for(;m&&o&&a!==p;){const d=U(m),y=m.getBoundingClientRect(),w=O(m),x=y.left+(m.clientLeft+parseFloat(w.paddingLeft))*d.x,v=y.top+(m.clientTop+parseFloat(w.paddingTop))*d.y;u*=d.x,l*=d.y,h*=d.x,c*=d.y,u+=x,l+=v,p=C(m),m=p.frameElement}}return z({width:h,height:c,x:u,y:l})}const Se=[":popover-open",":modal"];function wt(t){return Se.some(e=>{try{return t.matches(e)}catch{return!1}})}function ke(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),f=e?wt(e.floating):!1;if(o===s||f&&r)return n;let u={scrollLeft:0,scrollTop:0},l=V(1);const h=V(0),c=$(o);if((c||!c&&!r)&&((J(o)!=="body"||ot(s))&&(u=st(o)),$(o))){const g=et(o);l=U(o),h.x=g.x+o.clientLeft,h.y=g.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-u.scrollLeft*l.x+h.x,y:n.y*l.y-u.scrollTop*l.y+h.y}}function Ae(t){return Array.from(t.getClientRects())}function Mt(t){return et(I(t)).left+st(t).scrollLeft}function Re(t){const e=I(t),n=st(t),o=t.ownerDocument.body,i=W(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=W(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Mt(t);const f=-n.scrollTop;return O(o).direction==="rtl"&&(s+=W(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:f}}function Le(t,e){const n=C(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,f=0,u=0;if(i){r=i.width,s=i.height;const l=ht();(!l||l&&e==="fixed")&&(f=i.offsetLeft,u=i.offsetTop)}return{width:r,height:s,x:f,y:u}}function Ce(t,e){const n=et(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=$(t)?U(t):V(1),s=t.clientWidth*r.x,f=t.clientHeight*r.y,u=i*r.x,l=o*r.y;return{width:s,height:f,x:u,y:l}}function At(t,e,n){let o;if(e==="viewport")o=Le(t,n);else if(e==="document")o=Re(I(t));else if(H(e))o=Ce(e,n);else{const i=Ft(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return z(o)}function Vt(t,e){const n=_(t);return n===e||!H(n)||K(n)?!1:O(n).position==="fixed"||Vt(n,e)}function Te(t,e){const n=e.get(t);if(n)return n;let o=ut(t,[],!1).filter(f=>H(f)&&J(f)!=="body"),i=null;const r=O(t).position==="fixed";let s=r?_(t):t;for(;H(s)&&!K(s);){const f=O(s),u=pt(s);!u&&f.position==="fixed"&&(i=null),(r?!u&&!i:!u&&f.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!u&&Vt(t,s))?o=o.filter(h=>h!==s):i=f,s=_(s)}return e.set(t,o),o}function Pe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?wt(e)?[]:Te(e,this._c):[].concat(n),o],f=s[0],u=s.reduce((l,h)=>{const c=At(e,h,i);return l.top=W(c.top,l.top),l.right=M(c.right,l.right),l.bottom=M(c.bottom,l.bottom),l.left=W(c.left,l.left),l},At(e,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Oe(t){const{width:e,height:n}=Wt(t);return{width:e,height:n}}function De(t,e,n){const o=$(e),i=I(e),r=n==="fixed",s=et(t,!0,r,e);let f={scrollLeft:0,scrollTop:0};const u=V(0);if(o||!o&&!r)if((J(e)!=="body"||ot(i))&&(f=st(e)),o){const c=et(e,!0,r,e);u.x=c.x+e.clientLeft,u.y=c.y+e.clientTop}else i&&(u.x=Mt(i));const l=s.left+f.scrollLeft-u.x,h=s.top+f.scrollTop-u.y;return{x:l,y:h,width:s.width,height:s.height}}function ct(t){return O(t).position==="static"}function Rt(t,e){return!$(t)||O(t).position==="fixed"?null:e?e(t):t.offsetParent}function qt(t,e){const n=C(t);if(wt(t))return n;if(!$(t)){let i=_(t);for(;i&&!K(i);){if(H(i)&&!ct(i))return i;i=_(i)}return n}let o=Rt(t,e);for(;o&&xe(o)&&ct(o);)o=Rt(o,e);return o&&K(o)&&ct(o)&&!pt(o)?n:o||ve(t)||n}const He=async function(t){const e=this.getOffsetParent||qt,n=this.getDimensions,o=await n(t.floating);return{reference:De(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function $e(t){return O(t).direction==="rtl"}const Be={convertOffsetParentRelativeRectToViewportRelativeRect:ke,getDocumentElement:I,getClippingRect:Pe,getOffsetParent:qt,getElementRects:He,getClientRects:Ae,getDimensions:Oe,getScale:U,isElement:H,isRTL:$e},We=we,Ne=me,Fe=ye,Me=ue,Ve=pe,qe=(t,e,n)=>{const o=new Map,i={platform:Be,...n},r={...i.platform,_c:o};return fe(t,e,{...i,platform:r})};let k,lt;const it=t=>t&&t+"px",_e=(t,e=window)=>{k||(k=e.document.createElement("div"),k.classList.add("wp-popup"),k.style.visibility="hidden",t.appendChild(k),lt=e.document.createElement("div"),lt.classList.add("wp-popup-arrow"));const n={};return{show:(s,f,{x:u,y:l})=>{k.innerHTML=s+lt.outerHTML;const h=k.querySelector(".wp-popup-arrow");qe(f,k,{middleware:[Ve({x:u,y:l}),Fe(),Ne({allowedPlacements:["top","bottom"]}),We(10),Me({element:h})]}).then(({x:c,y:g,middlewareData:a,placement:p})=>{if(k.style.top=it(g),k.style.left=it(c),a.arrow&&h){const{x:m,y:d}=a.arrow;h.style.left=m!==null?it(m):"",h.style.top=d!==null?it(d):"",p==="left"?(h.style.right="-8px",h.style.transform="rotate(90deg)"):p==="right"?(h.style.left="-8px",h.style.transform="rotate(-90deg)"):p==="top"?(h.style.bottom="-8px",h.style.transform="rotate(180deg)"):p==="bottom"&&(h.style.top="-8px")}k.currentTargetElement=f,k.style.visibility="visible",n.onShow&&n.onShow(k)})},hide:()=>{n.onHide&&n.onHide(k),k.style.visibility="hidden",k.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:k}};let P,_t;const Ie=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),_t=t.body.style.overflow,t.body.style.overflow="hidden"}},Xe=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=_t},Ye=(t,e=window)=>{P||(P=e.document.createElement("div"),P.classList.add("wp-touch-popup"),P.style.visibility="hidden",t.appendChild(P));const n={};return{show:s=>{P.innerHTML=s,P.style.visibility="visible",Ie(e.document),n.onShow&&n.onShow(P)},hide:()=>{n.onHide&&n.onHide(P),P.style.visibility="hidden",Xe(e.document)},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:P}},tt=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},je=(t,e,n)=>{Tt(e,t,o=>{n(at(e,o,L))})},Lt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Ct,j;function Ge({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:f="detect"}){i=Gt(i)||document.body;const u=n,l=L?Ye(i):_e(i),h=oe(l),c={},g=[],a=[];j=f;const p=(m,d=!1)=>{m.preventDefault();const y=Date.now(),{currentTarget:w}=d?c:m,x=d?c.title:decodeURIComponent(w.getAttribute("data-wp-title")||w.textContent),v=d?c.lang:w.getAttribute("data-wp-lang")||u,E=d?c.pointerPosition:{x:m.clientX,y:m.clientY},A=Qt(v);l.element.currentTargetElement===w&&!d||(Ct=y,l.element.style.visibility==="visible"&&l.hide(),l.loading=!0,l.dir=A,l.show(Jt(L,v,A,j),w,E),Tt(v,x,S=>{if(y===Ct&&l.loading){if(l.loading=!1,S){if(l.lang=v,l.title=x,S.type==="standard")l.show(at(v,S,L,j),w,E),tt(r,"onShow",[x,v,"standard"]);else if(S.type==="disambiguation"){const R=S.extractHtml?at(v,S,L,j):Zt(L,v,S.title,S.dir,j);l.show(R,w,E),tt(r,"onShow",[x,v,"disambiguation"])}}else if(zt())l.show(te(L,v,x,A,j),w,E),tt(r,"onShow",[x,v,"error"]);else{l.show(ee(L,v,A,j),w,E),tt(r,"onShow",[x,v,"offline"]);const R=document.querySelector(".wikipediapreview-body-action");c.lang=v,c.title=x,c.pointerPosition=E,c.target=w,R.addEventListener("click",b=>{p(b,!0)})}const X=l.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(X&&X.addEventListener("click",()=>{tt(r,"onWikiRead",[x,v])}),w.tagName==="A"){const R=Kt().split("="),b=new URL(w.href);b.searchParams.set(R[0],R[1]),w.href=b.href}}}))};l.subscribe(h),Lt(t,m=>{Array.prototype.forEach.call(m.querySelectorAll(e),d=>{L?d.addEventListener("click",p):d.addEventListener("mouseenter",p),g.push({text:d.textContent,title:d.getAttribute("data-wp-title")||d.textContent,lang:d.getAttribute("data-wp-lang")||u})})}),o&&Lt(t,m=>{Array.prototype.forEach.call(m.querySelectorAll("a"),d=>{const y=Ut(d.getAttribute("href"));y&&(d.setAttribute("data-wp-title",y.title),d.setAttribute("data-wp-lang",y.lang),L?d.addEventListener("click",p):d.addEventListener("mouseenter",p),a.push({text:d.textContent,title:y.title,lang:y.lang}))})}),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${g.length}`),g.forEach((m,d)=>{console.log(d+1,`${m.text} -> ${decodeURI(xt(m.lang,m.title,L,!1))}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${a.length}`),a.forEach((m,d)=>{console.log(d+1,`${m.text} -> ${decodeURI(xt(m.lang,m.title,L,!1))}`)}),console.groupEnd()),console.groupEnd())}Pt();const Qe={init:Ge,version:Pt,getPreviewHtml:je,getSections:jt};export{Qe as w};
