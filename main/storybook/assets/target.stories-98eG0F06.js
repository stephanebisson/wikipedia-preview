import{i as g,r as ee,v as J,a as K,b as W,g as te,c as ne,d as ie,e as oe}from"./fullscreen-3xW63zpM.js";import{g as re,r as Y,a as ae,c as se,b as le,d as ce}from"./preview-u7PuZ1R_.js";const de=e=>{let o=[],t=[];const a=(n,r)=>{const i=setTimeout(n,r);return t.push(i),i},m=()=>{t.forEach(n=>{clearTimeout(n)}),t=[]},l=(n,r,i,p=void 0)=>{n.addEventListener(r,i,p),o.push([n,r,i,p])},y=()=>{o.forEach(n=>{const[r,i,p,s]=n;r.removeEventListener(i,p,s)}),o=[]},u=n=>{const r=n.toElement||n.relatedTarget||n.target,i=e.element.currentTargetElement;if(r!==i&&!e.element.contains(r)){const p=a(e.hide,300),s=()=>{clearTimeout(p)};l(e.element,"mouseenter",s)}},d=n=>{const r=e.element.querySelector(".wikipediapreview-body"),i=e.element.querySelector(".wikipediapreview-header"),p=e.element.querySelector(".wikipediapreview-footer-cta")||e.element.querySelector(".wikipediapreview-footer-loading");if(r)if(e.element.style[2]==="bottom"||e.element.style.bottom){const s=e.element.getBoundingClientRect().top,w=parseInt(window.getComputedStyle(r).maxHeight.slice(0,-2));r.style.maxHeight=Math.min(n,w+s)+"px"}else{const s=e.element.getBoundingClientRect().top,w=window.getComputedStyle(i).height.slice(0,-2),c=p?window.getComputedStyle(p).height.slice(0,-2):0,E=window.innerHeight-s-w-c;r.style.maxHeight=Math.min(n,E)+"px"}},k=()=>{const{lang:r,title:i}=e;e.element.component.wikipediapreview.classList.add("expanded"),g||d(496),!e.loading&&r&&i&&ee(r,i,p=>{const s=e.element.component.wikipediapreviewGallery;p&&p.length>0?s.appendChild(re(p,e)):e.element.component.body.removeChild(s)})},b=n=>{let r,i,p,s;const w=n.querySelector(".wikipediapreview-header"),c=n.querySelector(".wikipediapreview-body"),E=f=>{r=f.touches[0].clientY,p=window.getComputedStyle(c),s=Number(p.height.slice(0,-2))},L=(f,v)=>{v&&f.preventDefault();const x=f.touches[0].clientY,$=r-x,A=s+$,Z=!n.querySelector(".wikipediapreview.expanded")&&!v||v;c.style.transition="auto",i=x,Z&&(c.style.maxHeight=A+"px")},S=f=>{const v=n.querySelector(".wikipediapreview.expanded"),x=r-i,$=Math.abs(x)>80,A=!v&&!f||f;c.style.transition="all 0.25s ease-in-out",x<0&&$&&A?e.hide():x>0&&$&&A&&!v?(c.style.maxHeight="70vh",k()):c.style.maxHeight=s+"px"};l(c,"touchstart",E),l(c,"touchmove",f=>{L(f,!1)}),l(c,"touchend",()=>S(!1)),l(w,"touchstart",E),l(w,"touchmove",f=>{L(f,!0)}),l(w,"touchend",()=>S(!0))};return{onHide:()=>{e.element.component.wikipediapreview.classList.remove("expanded"),e.lang=null,e.title=null,e.loading=!1;const n=e.element.querySelector(".wikipediapreview-body");n.style.transition="auto",y(),m()},onShow:n=>{if(n.component={body:n.querySelector(".wikipediapreview-body"),wikipediapreview:n.querySelector(".wikipediapreview"),wikipediapreviewGallery:n.querySelector(".wikipediapreview-gallery"),closeBtn:n.querySelector(".wikipediapreview-header-closebtn"),readMore:n.querySelector(".wikipediapreview-footer-cta-readmore"),content:n.querySelector(".wikipediapreview-body > p")},n.component.content&&n.component.content.getBoundingClientRect().height<248?k():g||d(248),l(n.component.closeBtn,"click",e.hide),n.component.readMore&&l(n.component.readMore,"click",k),g){const r=document.querySelector(".wp-dark-screen");l(r,"click",e.hide,!0),b(n)}else l(n,"mouseleave",u),l(n.currentTargetElement,"mouseleave",u)},onExpand:k}};let h;const pe=(e,o,t,a,m)=>{const l=e.left+e.width/2,y=e.top+e.height/2,u=l<=a/2,d=y<=m/2,k=u?e.left:e.left+e.width-o,b=d?e.top+e.height:"",T=d?"":m-e.top;return{left:k,top:b,bottom:T}},I=e=>e&&e+"px",ue=e=>({left:e.left-3,right:e.right+3,top:e.top-3,bottom:e.bottom+3}),he=(e,{x:o,y:t})=>{const a=e.getClientRects();for(let m=0;m<a.length;m++){const l=ue(a[m]);if(o>=l.left&&o<=l.right&&t>=l.top&&t<=l.bottom)return a[m]}return a[0]||e.getBoundingClientRect()},we=(e,o=window)=>{h||(h=o.document.createElement("div"),h.classList.add("wp-popup"),h.style.visibility="hidden",e.appendChild(h));const t={};return{show:(y,u,d)=>{h.innerHTML=y;const k=pe(he(u,d),h.offsetWidth,h.offsetHeight,o.innerWidth,o.innerHeight);h.style.left=I(k.left),h.style.top=I(k.top),h.style.bottom=I(k.bottom),h.currentTargetElement=u,h.style.visibility="visible",t.onShow&&t.onShow(h)},hide:()=>{t.onHide&&t.onHide(h),h.style.visibility="hidden",h.currentTargetElement=null},subscribe:(y={})=>{y.onShow&&(t.onShow=y.onShow),y.onHide&&(t.onHide=y.onHide)},element:h}};let H,V;const me=e=>{if(!e.querySelector(".wp-dark-screen")){const o=e.createElement("div");o.classList.add("wp-dark-screen"),e.body.appendChild(o),V=e.body.style.overflow,e.body.style.overflow="hidden"}},ge=e=>{const o=e.getElementsByClassName("wp-dark-screen");e.body.removeChild(o[0]),e.body.style.overflow=V},fe=(e,o=window)=>{H||(H=o.document.createElement("div"),H.classList.add("wp-touch-popup"),H.style.visibility="hidden",e.appendChild(H));const t={};return{show:u=>{H.innerHTML=u,H.style.visibility="visible",me(o.document),t.onShow&&t.onShow(H)},hide:()=>{t.onHide&&t.onHide(H),H.style.visibility="hidden",ge(o.document)},expand:()=>{t.onExpand&&t.onExpand()},subscribe:(u={})=>{u.onShow&&(t.onShow=u.onShow),u.onHide&&(t.onHide=u.onHide),u.onExpand&&(t.onExpand=u.onExpand)},element:H}},P=(e,o,t)=>{const a=e&&e[o];if(a instanceof Function)try{a.apply(null,t)}catch(m){console.log("Error invoking Wikipedia Preview custom callback",m)}},ye=(e,o,t)=>{K(o,e,a=>{t(Y(o,a,g))})},O=(e,o)=>{const t=[];(typeof e=="string"||e instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(e),a=>{t.push(a)}),(e instanceof Document||e instanceof Element)&&t.push(e),Array.isArray(e)&&e.forEach(a=>{a instanceof Element&&t.push(a)}),t.forEach(a=>o(a))};let U;function ve({root:e=document,selector:o="[data-wikipedia-preview]",lang:t="en",detectLinks:a=!1,popupContainer:m=document.body,events:l={},debug:y=!1}){const u=t,d=g?fe(m):we(m),k=de(d),b={},T=[],q=[],n=(r,i=!1)=>{r.preventDefault();const p=Date.now(),{currentTarget:s}=i?b:r,w=i?b.title:decodeURIComponent(s.getAttribute("data-wp-title")||s.textContent),c=i?b.lang:s.getAttribute("data-wp-lang")||u,E=i?b.pointerPosition:{x:r.clientX,y:r.clientY},L=oe(c);d.element.currentTargetElement===s&&!i||(U=p,d.element.style.visibility==="visible"&&d.hide(),d.loading=!0,d.dir=L,d.show(ae(g,c,L),s,E),K(c,w,S=>{if(p===U&&d.loading){if(d.loading=!1,S){if(d.lang=c,d.title=w,S.type==="standard")d.show(Y(c,S,g),s,E),P(l,"onShow",[w,c,"standard"]);else if(S.type==="disambiguation"){const v=S.extractHtml?Y(c,S,g):se(g,c,S.title,S.dir);d.show(v,s,E),P(l,"onShow",[w,c,"disambiguation"])}}else if(ne())d.show(le(g,c,w,L),s,E),P(l,"onShow",[w,c,"error"]);else{d.show(ce(g,c,L),s,E),P(l,"onShow",[w,c,"offline"]);const v=document.querySelector(".wikipediapreview-body-action");b.lang=c,b.title=w,b.pointerPosition=E,b.target=s,v.addEventListener("click",x=>{n(x,!0)})}const f=d.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(f&&f.addEventListener("click",()=>{P(l,"onWikiRead",[w,c])}),s.tagName==="A"){const v=ie().split("="),x=new URL(s.href);x.searchParams.set(v[0],v[1]),s.href=x.href}}}))};d.subscribe(k),O(e,r=>{Array.prototype.forEach.call(r.querySelectorAll(o),i=>{g?i.addEventListener("click",n):i.addEventListener("mouseenter",n),T.push({text:i.textContent,title:i.getAttribute("data-wp-title")||i.textContent,lang:i.getAttribute("data-wp-lang")||u})})}),a&&O(e,r=>{Array.prototype.forEach.call(r.querySelectorAll("a"),i=>{const p=te(i.getAttribute("href"));p&&(i.setAttribute("data-wp-title",p.title),i.setAttribute("data-wp-lang",p.lang),g?i.addEventListener("click",n):i.addEventListener("mouseenter",n),q.push({text:i.textContent,title:p.title,lang:p.lang}))})}),y&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${o}" inside ${e}, Total links found: ${T.length}`),T.forEach((r,i)=>{console.log(i+1,`${r.text} -> ${W(r.lang,r.title,g,!1)}`)}),console.groupEnd(),a&&(console.group(`Searching for links to Wikipedia, Total links found: ${q.length}`),q.forEach((r,i)=>{console.log(i+1,`${r.text} -> ${W(r.lang,r.title,g,!1)}`)}),console.groupEnd()),console.groupEnd())}J();const D={init:ve,version:J,getPreviewHtml:ye},Se={title:"Targets",argTypes:{lang:{name:"Language",control:"select",options:["en","fr","hi","ks","he","sv"]},title:{name:"Article Title",control:"text"}},args:{lang:"en",title:"Cat"}},C=({lang:e,title:o})=>{const t=document.createElement("div"),a=`<a href="${W(e,o,!0,!1)}">${o} (${e})</a>`;return t.innerHTML=a,D.init({root:t,detectLinks:!0}),t},M=({lang:e,title:o})=>{const t=document.createElement("div"),a=`<a href="${W(e,o,!0,!1)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`;return t.innerHTML=a,D.init({root:t,detectLinks:!0}),t},B=({lang:e,title:o})=>{const t=document.createElement("div"),a=`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${o}">${o} (${e})</span>`;return t.innerHTML=a,D.init({root:t,lang:e}),t};var N,G,R;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`({
  lang,
  title
}) => {
  const container = document.createElement('div');
  const template = \`<a href="\${buildWikipediaUrl(lang, title, true, false)}">\${title} (\${lang})</a>\`;
  container.innerHTML = template;
  wikipediaPreview.init({
    root: container,
    detectLinks: true
  });
  return container;
}`,...(R=(G=C.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var _,F,X;M.parameters={...M.parameters,docs:{...(_=M.parameters)==null?void 0:_.docs,source:{originalSource:`({
  lang,
  title
}) => {
  const container = document.createElement('div');
  const template = \`<a href="\${buildWikipediaUrl(lang, title, true, false)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>\`;
  container.innerHTML = template;
  wikipediaPreview.init({
    root: container,
    detectLinks: true
  });
  return container;
}`,...(X=(F=M.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var Q,j,z;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  lang,
  title
}) => {
  const container = document.createElement('div');
  const template = \`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="\${title}">\${title} (\${lang})</span>\`;
  container.innerHTML = template;
  wikipediaPreview.init({
    root: container,
    lang
  });
  return container;
}`,...(z=(j=B.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const xe=["Hyperlink","Image","Text"];export{C as Hyperlink,M as Image,B as Text,xe as __namedExportsOrder,Se as default};
