import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(i,_){return new URL(i,_).href},m={},o=function(_,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in m)return;m[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":d,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>_()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,O=f({page:"preview"});R.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const w={"./src/stories/gallery.stories.js":async()=>o(()=>import("./gallery.stories-23rRi3zi.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./src/stories/preview.stories.js":async()=>o(()=>import("./preview.stories-eBJZBiG-.js"),__vite__mapDeps([3,4,1,2,5]),import.meta.url),"./src/stories/target.stories.js":async()=>o(()=>import("./target.stories-pFDu1xY8.js"),__vite__mapDeps([6,1,2,4,5,7]),import.meta.url)};async function P(i){return w[i]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-8lgUVhYG.js"),__vite__mapDeps([8,9]),import.meta.url),o(()=>import("./entry-preview-docs-rvoYMqmR.js"),__vite__mapDeps([10,11]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([12,13]),import.meta.url),o(()=>import("./preview-mA-3qRFL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([14,9]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([15,9]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([16,9]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-LiGdbIGM.js"),__vite__mapDeps([]),import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:v});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./gallery.stories-23rRi3zi.js","./fullscreen-JBV92Xpp.js","./fullscreen-zZPvMT5z.css","./preview.stories-eBJZBiG-.js","./preview-_VvY5x6x.js","./preview-p76vlR-k.css","./target.stories-pFDu1xY8.js","./target-SscJqqbi.css","./entry-preview-8lgUVhYG.js","./index-PPLHz8o0.js","./entry-preview-docs-rvoYMqmR.js","./index-HZNADR7h.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}