const __vite__fileDeps=["./gallery.stories-BVu9Fc4A.js","./utils-HG1ISBXp.js","./utils-nCPxRUir.css","./fullscreen-twa-Um6v.js","./preview.stories-Bt6udTBg.js","./preview-wT5dg3Lq.js","./preview-6b2v9IsW.css","./sections.stories-B1Hon-Ex.js","./index-D7Lbb4xP.js","./index-BIc-HhdC.css","./target.stories-ADfq2GCr.js","./entry-preview-D5Ui7gv5.js","./index-DrFu-skq.js","./entry-preview-docs-u3T4YLTu.js","./index-CoojMvHD.js","./preview-DbKtf0Y1.js","./index-D2DNihGs.js","./preview-BEBQg86I.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(n,s){return new URL(n,s).href},d={},o=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),E=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in d)return;d[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===i&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":f,u||(_.as="script",_.crossOrigin=""),_.href=i,E&&_.setAttribute("nonce",E),document.head.appendChild(_),u)return new Promise((a,m)=>{_.addEventListener("load",a),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:w}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,O=w({page:"preview"});P.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const T={"./src/stories/gallery.stories.js":async()=>o(()=>import("./gallery.stories-BVu9Fc4A.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./src/stories/preview.stories.js":async()=>o(()=>import("./preview.stories-Bt6udTBg.js"),__vite__mapDeps([4,5,1,2,6]),import.meta.url),"./src/stories/sections.stories.js":async()=>o(()=>import("./sections.stories-B1Hon-Ex.js"),__vite__mapDeps([7,8,3,1,2,5,6,9]),import.meta.url),"./src/stories/target.stories.js":async()=>o(()=>import("./target.stories-ADfq2GCr.js"),__vite__mapDeps([10,1,2,8,3,5,6,9]),import.meta.url)};async function L(n){return T[n]()}const{composeConfigs:S,PreviewWeb:v,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const n=await Promise.all([o(()=>import("./entry-preview-D5Ui7gv5.js"),__vite__mapDeps([11,12]),import.meta.url),o(()=>import("./entry-preview-docs-u3T4YLTu.js"),__vite__mapDeps([13,14]),import.meta.url),o(()=>import("./preview-DbKtf0Y1.js"),__vite__mapDeps([15,16]),import.meta.url),o(()=>import("./preview-fWaSGfXT.js"),[],import.meta.url),o(()=>import("./preview-BEBQg86I.js"),__vite__mapDeps([17,12]),import.meta.url),o(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([18,12]),import.meta.url),o(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([19,12]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),o(()=>import("./preview-ChKX9_kj.js"),[],import.meta.url)]);return S(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:y});export{o as _};
