import{a as Z,g as J,c as ae,l as j,m as b,s as ce,d as W,e as de,f as _,i as ue}from"./utils--lAEzUWD.js";const me=(e,t)=>{const i=new XMLHttpRequest;i.open("GET",e),i.send(),i.addEventListener("load",()=>{t(JSON.parse(i.responseText))}),i.addEventListener("error",()=>{t(!1,i.status)})},H={},M=(e,t,i,n=me)=>{if(H[e]!==void 0){i(H[e]);return}n(e,(l,r)=>{l?i(H[e]=t(l)):i(!1,r)})},ge=(e,t,i,n=M)=>{const r=Z(e,{action:"query",prop:"extracts|pageimages",exsentences:4,explaintext:1,exsectionformat:"plain",piprop:"thumbnail",pilimit:1,titles:t})+"&"+J();n(r,c=>{const a=c.query.pages[Object.keys(c.query.pages)[0]];return a.extract?{title:t,extractHtml:"<p>"+a.extract+"</p>",imgUrl:a.thumbnail?a.thumbnail.source:null,dir:ae(e),type:"standard"}:!1},i)},pe=(e,t,i,n=M)=>{const l=`https://${e}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t)}?${J()}`;n(l,(r,c)=>r?r.type==="standard"||r.type==="disambiguation"?{title:r.titles.canonical,extractHtml:ce(r.extract_html),imgUrl:r.thumbnail?r.thumbnail.source:null,dir:r.dir,type:r.type}:r.type==="no-extract"&&r.description?{title:r.titles.canonical,extractHtml:"<p>"+r.description+"</p>",imgUrl:r.thumbnail?r.thumbnail.source:null,dir:r.dir,type:"standard"}:(j(b(e,"preview-console-error-message",t,e),r),!1):(j(b(e,"preview-console-error-message",t,e),c),!1),i)},Oe=(e,t,i,n=M)=>t.indexOf(":")===-1?pe(e,t,i,n):ge(e,t,i,n),ke=(e,t,i,n=M)=>{const l=`https://${e}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(t)}`;n(l,r=>(r.items||[]).reduce((d,u)=>{if(u.showInGallery&&u.type==="image"){const g=u&&u.srcset&&`https:${u.srcset[0].src}`,y={caption:u.caption&&u.caption.text.trim(),thumb:g,title:u.title};return d.concat(y)}return d},[]),i)},fe=(e,t,i,n=M)=>{const l={action:"query",prop:"imageinfo",iiextmetadatafilter:"License|LicenseShortName|ImageDescription|Artist",iiextmetadatalanguage:e,iiextmetadatamultilang:1,iiurlwidth:_().width,iiurlheight:_().height,iiprop:"url|extmetadata",titles:t},r=Z(e,l);n(r,c=>{const d=c.query.pages[0].imageinfo;if(!d)return{};const{Artist:u,ImageDescription:g,LicenseShortName:y}=d[0].extmetadata,C=u&&W(u.value),f=g&&W(typeof g.value=="string"&&g.value||g.value[e]||g.value[Object.keys(g.value)[0]]),$=d[0].thumburl;return{author:C,description:f,license:y&&y.value,filePage:de(d[0].descriptionshorturl),bestFitImageUrl:$}},i)},Y=1,Q=2,L=()=>window.innerWidth,A=()=>window.innerHeight,s={screenX:null,originalMarginLeft:null,currentMarginLeft:null,originalTransition:null,imgOriginalTransition:null,durationStart:null,translateX:0,translateY:0,clientX:null,clientY:null,imageRect:{}},m=[];let w=-1,q=!1;const T=e=>e.target.nodeName==="IMG"?e.target:e.target.querySelector("img"),K=e=>e?Number(e.slice(e.indexOf("scale")+6,-1)):Y,ye=e=>{const i=/translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/.exec(e);return i?`translate3d(${i.groups.x}px, ${i.groups.y}px, 0px)`:`translate3d(${s.translateX}px, ${s.translateY}px, 0px)`},O=(e,t)=>{const n=[`${t}-item-caption`,`${t}-item-caption-expand-cue`,`${t}-item-caption-text`,`${t}-item-attribution`,`${t}-button`].find(l=>e.target.className.indexOf(l)>-1);return e.pointerType!=="touch"||n},R=()=>q,D=e=>e.naturalHeight<=e.naturalWidth,ve=e=>e.naturalWidth+50<L(),k=()=>m.length,he=(e,t=null)=>{const i={},n=()=>t.clientY>e.naturalHeight&&!D(e)?e.naturalHeight:t.clientY;return m.length===2?(i.x=(m[0].clientX+m[1].clientX)/2,i.y=(m[0].clientY+m[1].clientY)/2):(i.x=t.clientX,i.y=n()),i},ee=(e,t)=>{const i=he(e,t);return D(e)?i.y=i.y-e.naturalHeight:ve(e)&&(i.x=e.naturalWidth/2,i.y=e.naturalHeight/2),`${i.x}px ${i.y}px`},$e=e=>{for(let t=0;t<m.length;t++)if(m[t].pointerId===e.pointerId){m.splice(t,1);break}},te=e=>{e&&(e.style.transition=s.imgOriginalTransition,e.style.transform=`scale(${Y})`,q=!1,s.translateX=0,s.translateY=0)},be=e=>{const t=T(e);s.clientX=null,s.clientY=null,s.translateX=0,s.translateY=0,t.style.transformOrigin=ee(t,e),R()?(t.style.transform=`scale(${Y})`,q=!1):(t.style.transform=`scale(${Q})`,q=!0)},xe=e=>{const t=T(e);if(!t)return;const i=t.getBoundingClientRect();if(s.imageRect.top=i.top,s.imageRect.bottom=i.bottom,s.imageRect.left=i.left,s.imageRect.right=i.right,m.length<1){const n=window.getComputedStyle(t);s.imgOriginalTransition=n.transition}m.push(e)},Se=e=>{const t=T(e),i=t.style.transform,n=.01,l=.4;let r=K(i);const c=ye(i);for(let a=0;a<m.length;a++)if(e.pointerId===m[a].pointerId){m[a]=e;break}if(m.length===2){const a=Math.abs(m[0].clientX-m[1].clientX),d=Math.abs(m[0].clientY-m[1].clientY),u=Math.sqrt(Math.pow(a,2)+Math.pow(d,2));w>0&&(t.style.transformOrigin=ee(t),t.style.transition="unset",u>w&&(q=!0,r+n<Q&&(r+=n,t.style.transform=`${c} scale(${r})`)),u<w&&(r-n>Y+l?(r-=n,t.style.transform=`${c} scale(${r})`):te(t))),w=u}},we=(e,t,i,n,l)=>{const r=T(e);if(!r)return;const c=r.style.transform,a=K(c),d=L()/8,u=L()-d,g=D(r)?A()/4:A()/8,y=A()-g,C=80;r.style.transition="unset",(!s.clientX||!s.clientY)&&(s.clientX=e.clientX,s.clientY=e.clientY);const f=s.translateX+(e.clientX-s.clientX),$=s.translateY+(e.clientY-s.clientY),G=$-s.translateY>=0,N=f-s.translateX>=0,re=()=>{const X=s.imageRect.left<d&&N||s.imageRect.right>u&&!N,oe=s.imageRect.top<g&&G||s.imageRect.bottom>y&&!G;return X&&oe},se=()=>{s.imageRect.top=s.imageRect.top+($-s.translateY),s.imageRect.bottom=s.imageRect.bottom+($-s.translateY),s.imageRect.left=s.imageRect.left+(f-s.translateX),s.imageRect.right=s.imageRect.right+(f-s.translateX),s.translateX=f,s.translateY=$,s.clientX=e.clientX,s.clientY=e.clientY},le=Math.abs(f)-Math.abs(s.translateX)>C;if(re())se(),r.style.transform=`translate3d(${f}px, ${$}px, 0px) scale(${a})`;else if(le){const X=l==="ltr"&&f<0||l==="rtl"&&f>0;!X&&i[n-1]?t(-1):X&&i[n+1]&&t(1)}},Le=e=>{const t=T(e);t&&(t.style.transition=s.imgOriginalTransition),$e(e),s.clientX=null,s.clientY=null,m.length<2&&(w=-1)},qe=(e,t,i)=>{const n=window.getComputedStyle(t);s.durationStart=Date.now(),s.screenX=e.clientX,s.originalMarginLeft=+n[i].slice(0,-2),s.currentMarginLeft=+n[i].slice(0,-2),s.originalTransition=n.transition,t.style.transition="unset"},Ee=(e,t,i,n)=>{const r=e.clientX-s.screenX;s.currentMarginLeft=s.originalMarginLeft+r*(n==="ltr"?1:-1),t.style[i]=s.currentMarginLeft+"px",e.preventDefault()},Me=(e,t,i,n,l)=>{const r=s.originalMarginLeft-s.currentMarginLeft,c=Date.now()-s.durationStart;Math.abs(r/L())>.4||c<=300&&Math.abs(r)>5?i(r>0?1:-1):t.style[n]=-L()*l+"px"};let B=[];const P=(e,t,i,n=void 0)=>{e.addEventListener(t,i,n),B.push([e,t,i,n])},Te=()=>{B.forEach(e=>{const[t,i,n,l]=e;t.removeEventListener(i,n,l)}),B=[]};let p=0,h="",I,U,x;const E=()=>window.innerWidth,o="wp-gallery-fullscreen-slider",Xe=(e,t,i,n=[],l="")=>{const r=n.map(()=>`
		<div class="${o}-item">
				<div class="${o}-item-loading">
						<div class="${o}-item-loading-spinner">
								<div class="${o}-item-loading-spinner-animation">
										<div class="${o}-item-loading-spinner-animation-bounce"></div>
								</div>
						</div>
						<div class="${o}-item-loading-text">${b(e,"gallery-loading-still")}</div>
				</div>
				<div class="${o}-item-loading-error">
					<div class="${o}-item-loading-error-text">${b(e,"gallery-loading-error")}</div>
					<div class="${o}-item-loading-error-refresh">${b(e,"gallery-loading-error-refresh")}</div>
				</div>
		</div>
		`.trim()).join("");return n.some((c,a)=>c.thumb===l?(p=a,!0):!1),h=t,I=e,U=n,x=i,`
		<div class="${o}" style="${h==="ltr"?"margin-left":"margin-right"}:-${p*E()}px">
				<div class="${o}-button previous"></div>
				<div class="${o}-button next"></div>
				${r}
		</div>
		`.trim()},Re=(e,t)=>{const i=()=>e.description?e.description:t.caption?t.caption:"",n=d=>{const u=["CC","BY","SA","Fair","Public"];let g="";return u.forEach(y=>{d&&d.indexOf(y)!==-1&&(g+=`<div class="${o}-item-attribution-info-${y.toLowerCase()}"></div>`)}),g},l=e.author?e.author:b(I,"gallery-unknown-author"),r=e.filePage,c=i();return`
		<div class="${o}-item-caption">
			${(E()<400&&c.length>128?!0:E()>400&&c.length>142)?`<div class="${o}-item-caption-expand-cue"></div>`:""}
			${c?`<div class="${o}-item-caption-text"><bdi>${c}</bdi></div>`:""}
		</div>
		<div class="${o}-item-attribution">
			<div class="${o}-item-attribution-info">
				${n(e.license)}
				${l?`<bdi class="${o}-item-attribution-info-author">${l}</bdi>`:""}
			</div>
			${r?`<div class="${o}-item-attribution-more-info">
				<a href="${r}" class="${o}-item-attribution-more-info-link" target="_blank"></a>
			</div>`:""}
		</div>
	`.trim()},ie=(e,t=!1)=>{const i=e.querySelector("img"),n=e.querySelector(`.${o}-item-loading`),l=e.querySelector(`.${o}-item-loading-error`);if(t&&(x.querySelector(`.${o}`).querySelectorAll(`.${o}-item`).forEach(a=>{const d=a.querySelector("img"),u=a.querySelector(`.${o}-item-caption`),g=a.querySelector(`.${o}-item-attribution`);d&&a.removeChild(d),u&&a.removeChild(u),g&&a.removeChild(g)}),v(0,!0),n.style.visibility="visible",l.style.visibility="hidden"),i.complete)n.style.visibility="hidden",l.style.visibility="hidden",i.style.visibility="visible";else{const r=e.querySelector(`.${o}-item-loading-text`),c=setTimeout(()=>{r.style.visibility="visible"},5e3);i.addEventListener("load",()=>{n.style.visibility="hidden",l.style.visibility="hidden",r.style.visibility="hidden",clearTimeout(c)}),i.addEventListener("error",()=>{const a=e.querySelector(`.${o}-item-loading-error-refresh`);if(n.style.visibility="hidden",i.style.visibility="hidden",!ue()){const d=e.querySelector(`.${o}-item-loading-error-text`);d.innerText=b(I,"gallery-loading-error-offline"),l.classList.add("offline")}l.style.visibility="visible",clearTimeout(c),a.addEventListener("click",()=>{ie(e,!0)})})}},ne=(e,t=!1)=>{const i=e.querySelector(`.${o}-item-caption-text`),n=e.querySelector(`.${o}-item-caption-expand-cue`),l=e.querySelector(".expanded");n&&l||t&&n?(n.classList.remove("expanded"),i.style.maxHeight="80px"):n&&(n.classList.add("expanded"),i.style.maxHeight="241px")},F=(e,t=!1)=>{const l=x.querySelector(`.${o}`).querySelectorAll(`.${o}-item`)[e];l&&fe(I,U[e].title,r=>{const c=l.querySelector("img"),a=l.querySelector(`.${o}-item-caption`);c||(t?l.insertAdjacentHTML("beforeend",`<img src="${r.bestFitImageUrl}?timestamp=${Date.now()}"/>`):l.insertAdjacentHTML("beforeend",`<img src="${r.bestFitImageUrl}"/>`),ie(l)),a||(l.insertAdjacentHTML("beforeend",Re(r,U[e])),l.querySelector(`.${o}-item-caption`).addEventListener("click",()=>{ne(l)}))})},v=(e=1,t=!1)=>{const i=x.querySelector(`.${o}`),n=i.querySelectorAll(`.${o}-item`),l=i.querySelector(".next"),r=i.querySelector(".previous"),c=p+e,a=n[c],d=n[p].querySelector("img");a&&(ne(n[p],!0),p+=e,l.style.opacity=p===n.length-1?"0.5":"1",r.style.opacity=p===0?"0.5":"1",te(d),F(p,t),F(p+1,t),F(p-1,t)),i.style[h==="ltr"?"marginLeft":"marginRight"]=-E()*p+"px"},z=()=>{v(-1)},Ye=()=>{const e=x.querySelector(`.${o}`),t=h==="ltr"?"marginLeft":"marginRight",i=e.querySelectorAll(`.${o}-item`);e.addEventListener("pointerdown",n=>{O(n,o)||(xe(n),k()===1&&!R()&&qe(n,e,t))}),e.addEventListener("pointermove",n=>{O(n,o)||(k()>1?Se(n):R()?we(n,v,i,p,h):Ee(n,e,t,h))}),e.addEventListener("pointerout",n=>{O(n,o)||(e.style.transition=s.originalTransition,k()===1&&!R()&&Me(n,e,v,t,p),Le(n))})},Ie=()=>{x.querySelector(".wp-gallery-fullscreen").classList.toggle("wp-gallery-fullscreen-focus-mode")},Ce=()=>{const e=x.querySelector(`.${o}`),t=e.querySelectorAll(`.${o}-item`),i=e.querySelector(".next"),n=e.querySelector(".previous");let l=!1;v(0),Ye(),e.addEventListener("click",a=>{(a.target.className===`${o}-item`||a.target.tagName==="IMG")&&(l?(clearTimeout(l),l=null,be(a)):l=setTimeout(()=>{l=null,Ie()},300))});const r=function(a){a.style.transition="unset",a.style.marginLeft=-p*E()+"px"};let c;P(window,"resize",()=>{const a=document.querySelector("."+o);r(a),clearTimeout(c),c=setTimeout(()=>{a.style.removeProperty("transition")},100)}),t.length===1?(n.style.visibility="hidden",i.style.visibility="hidden"):(i.addEventListener("click",()=>{v()}),n.addEventListener("click",()=>{z()}),P(window,"keydown",({key:a})=>{switch(a){case"ArrowRight":case"Right":h==="ltr"?v():z();break;case"ArrowLeft":case"Left":h==="ltr"?z():v();break}}))},S="wp-gallery-fullscreen",He=(e,t)=>`
		<div class="${S}" lang="${e}" dir="${t}">
			<div class="${S}-close"></div>
			<div class="${S}-main"></div>
		</div>
	`.trim(),V=e=>{const t=e.querySelector(`.${S}`);e.removeChild(t),Te()},Fe=(e,t,i,n,l=document.body)=>{l.insertAdjacentHTML("beforeend",He(i,n)),l.querySelector(`.${S}-main`).insertAdjacentHTML("beforeend",Xe(i,n,l,e,t)),l.querySelector(`.${S}-close`).addEventListener("click",()=>{V(l)}),P(window,"keydown",({key:c})=>{(c==="Escape"||c==="Esc")&&V(l)}),Ce()};export{Oe as a,ke as r,Fe as s};
