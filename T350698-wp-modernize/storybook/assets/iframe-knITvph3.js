import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},O={},o=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":E,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const R={"./src/stories/target.stories.js":async()=>o(()=>import("./target.stories-wIskrOpb.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/preview.stories.js":async()=>o(()=>import("./preview.stories-pVYd8DcL.js"),__vite__mapDeps([6,3,1,2,4]),import.meta.url),"./src/stories/gallery.stories.js":async()=>o(()=>import("./gallery.stories-rlD9_GeP.js"),__vite__mapDeps([7,1,2]),import.meta.url)};async function w(_){return R[_]()}const{composeConfigs:P,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([o(()=>import("./config-tasWwHIx.js"),__vite__mapDeps([8,9,10]),import.meta.url),o(()=>import("./preview-J7ZNVipj.js"),__vite__mapDeps([11,12]),import.meta.url),o(()=>import("./preview-RrGjs6w8.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-Fi7DQdoQ.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-Y7vvrhHd.js"),__vite__mapDeps([13,9]),import.meta.url),o(()=>import("./preview-gnTYGUb5.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-bJSO6fK3.js"),__vite__mapDeps([14,9]),import.meta.url),o(()=>import("./preview-z_l9a9HW.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-LiGdbIGM.js"),__vite__mapDeps([]),import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:S});export{o as _};
//# sourceMappingURL=iframe-knITvph3.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./target.stories-wIskrOpb.js","./fullscreen-4Drn9T2p.js","./fullscreen-utsvGIhX.css","./preview-Ql-E3q_5.js","./preview-gr-Wdm5Y.css","./target-SscJqqbi.css","./preview.stories-pVYd8DcL.js","./gallery.stories-rlD9_GeP.js","./config-tasWwHIx.js","./index-PPLHz8o0.js","./index-HZNADR7h.js","./preview-J7ZNVipj.js","./index-aKxH7ZY0.js","./preview-Y7vvrhHd.js","./preview-bJSO6fK3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}