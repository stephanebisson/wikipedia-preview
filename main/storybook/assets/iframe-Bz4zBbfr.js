const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gallery.stories-DSNX08Yv.js","./utils-CUPsMfuL.js","./utils-DWmZWWJA.css","./fullscreen-lNMYOXDE.js","./preview.stories-B8YW1PyT.js","./preview-RrQvugDs.js","./preview-Dg-b-Ixu.css","./sections.stories-aNS7Gzkw.js","./index-DfCKx8Mo.js","./index-DHQRf-ep.css","./target.stories-DzwvcKfQ.js","./entry-preview-D5Ui7gv5.js","./index-DrFu-skq.js","./entry-preview-docs-xOVVOnLp.js","./doctrine-h9SWtg8o.js","./preview-DbKtf0Y1.js","./index-D2DNihGs.js","./preview-BEBQg86I.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const R="modulepreload",P=function(s,c){return new URL(s,c).href},p={},r=function(c,l,u){let e=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(l.map(_=>{if(_=P(_,u),_ in p)return;p[_]=!0;const a=_.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(!!u)for(let m=i.length-1;m>=0;m--){const O=i[m];if(O.href===_&&(!a||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${f}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":R,a||(n.as="script"),n.crossOrigin="",n.href=_,E&&n.setAttribute("nonce",E),document.head.appendChild(n),a)return new Promise((m,O)=>{n.addEventListener("load",m),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${_}`)))})}))}function t(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return e.then(i=>{for(const o of i||[])o.status==="rejected"&&t(o.reason);return c().catch(t)})},{createBrowserChannel:w}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,d=w({page:"preview"});T.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const L={"./src/stories/gallery.stories.js":async()=>r(()=>import("./gallery.stories-DSNX08Yv.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./src/stories/preview.stories.js":async()=>r(()=>import("./preview.stories-B8YW1PyT.js"),__vite__mapDeps([4,5,1,2,6]),import.meta.url),"./src/stories/sections.stories.js":async()=>r(()=>import("./sections.stories-aNS7Gzkw.js"),__vite__mapDeps([7,8,3,1,2,5,6,9]),import.meta.url),"./src/stories/target.stories.js":async()=>r(()=>import("./target.stories-DzwvcKfQ.js"),__vite__mapDeps([10,1,2,8,3,5,6,9]),import.meta.url)};async function S(s){return L[s]()}const{composeConfigs:v,PreviewWeb:I,ClientApi:y}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const s=await Promise.all([r(()=>import("./entry-preview-D5Ui7gv5.js"),__vite__mapDeps([11,12]),import.meta.url),r(()=>import("./entry-preview-docs-xOVVOnLp.js"),__vite__mapDeps([13,14]),import.meta.url),r(()=>import("./preview-DbKtf0Y1.js"),__vite__mapDeps([15,16]),import.meta.url),r(()=>import("./preview-DUm1GWP0.js"),[],import.meta.url),r(()=>import("./preview-BEBQg86I.js"),__vite__mapDeps([17,12]),import.meta.url),r(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([18,12]),import.meta.url),r(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),r(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([19,12]),import.meta.url),r(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),r(()=>import("./preview-ChKX9_kj.js"),[],import.meta.url)]);return v(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new y({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:S,getProjectAnnotations:h});export{r as _};
