!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).singlefileBootstrap={})}(this,(function(e){"use strict";const t="single-filez-load-image",s="single-filez-image-loaded",o=globalThis.browser,n=e=>globalThis.dispatchEvent(e),i=globalThis.CustomEvent,r=globalThis.document,a=globalThis.HTMLDocument,l=globalThis.FileReader,d=globalThis.Blob,c=[];if(r instanceof a&&o&&o.runtime&&o.runtime.getURL){m="single-filez-new-font-face",u=e=>{const t=e.detail;c.find((e=>JSON.stringify(e)==JSON.stringify(t)))||c.push(e.detail)},globalThis.addEventListener(m,u,f);let e=r.createElement("script");e.textContent="("+function(){const e=globalThis.console,t=e=>globalThis.dispatchEvent(e),s=globalThis.CustomEvent,o=e&&e.warn&&((...t)=>e.warn(...t))||(()=>{}),n="single-filez-new-font-face",i={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const e=globalThis.FontFace;let r;globalThis.FontFace=function(){r||(o("SingleFileZ is hooking the FontFace constructor to get font URLs."),r=!0);const a={};a["font-family"]=arguments[0],a.src=arguments[1];const c=arguments[2];if(c&&Object.keys(c).forEach((e=>{i[e]&&(a[i[e]]=c[e])})),a.src instanceof ArrayBuffer){const e=new l;e.readAsDataURL(new d([a.src])),e.addEventListener("load",(()=>{a.src="url("+e.result+")",t(new s(n,{detail:a}))}))}else t(new s(n,{detail:a}));return new e(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"}}}.toString()+")()",(r.documentElement||r).appendChild(e),e.remove(),e=r.createElement("script"),e.src=o.runtime.getURL("/dist/web/hooks/hooks-frames-web.js"),e.async=!1,(r.documentElement||r).appendChild(e),e.remove()}var m,u,f;const g=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const h="single-filez-on-before-capture",p="single-filez-on-after-capture",E="data-single-filez-removed-content",b="data-single-filez-hidden-content",w="data-single-filez-kept-content",T="data-single-filez-hidden-frame",y="data-single-filez-preserved-space-element",A="data-single-filez-shadow-root-element",I="data-single-filez-image",v="data-single-filez-poster",S="data-single-filez-canvas",R="data-single-filez-import",F="data-single-filez-input-value",N="data-single-filez-lazy-loaded-src",_="data-single-filez-stylesheet",C="data-single-filez-disabled-noscript",M="data-single-filez-async-script",z="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",q=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],P=/^'(.*?)'$/,k=/^"(.*?)"$/,x={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},L="single-file-ui-element",O=(e,t,s)=>globalThis.addEventListener(e,t,s);function D(e,t,s){let o;return e.querySelectorAll("noscript:not([data-single-filez-disabled-noscript])").forEach((e=>{e.setAttribute(C,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(z).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+z+", html > body > "+z);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))})),o=t&&e.documentElement?U(t,e,e.documentElement,s):{canvases:[],images:[],posters:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:o.canvases,fonts:c,stylesheets:j(e),images:o.images,posters:o.posters,usedFonts:Array.from(o.usedFonts.values()),shadowRoots:o.shadowRoots,imports:o.imports,referrer:e.referrer,markedElements:o.markedElements}}function U(e,t,s,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],shadowRoots:[],imports:[],markedElements:[]},i){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let r,a,l;if((o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&o.removeHiddenElements&&(a=(i||s.closest("html > head"))&&q.includes(s.tagName)||s.closest("details"),a||(r=i||function(e,t){let s=!1;if(t){const o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(s="none"==o,!s&&("0"==n||"hidden"==i)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}(s,l),r&&(s.setAttribute(b,""),n.markedElements.push(s)))),!r)){if(o.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(y,""),n.markedElements.push(s))}o.removeUnusedFonts&&(V(l,o,n.usedFonts),V(e.getComputedStyle(s,":first-letter"),o,n.usedFonts),V(e.getComputedStyle(s,":before"),o,n.usedFonts),V(e.getComputedStyle(s,":after"),o,n.usedFonts))}!function(e,t,s,o,n,i,r){if("CANVAS"==s.tagName)try{const t=function(e,t,s){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){let i,r,a,l,d,c,m,u,f=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),o=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),f=t.clientWidth!=o,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}i=J("padding-left",s),r=J("padding-right",s),a=J("padding-top",s),l=J("padding-bottom",s),f?(d=J("border-left-width",s),c=J("border-right-width",s),m=J("border-top-width",s),u=J("border-bottom-width",s)):d=c=m=u=0,o=Math.max(0,t.clientWidth-i-r-d-c),n=Math.max(0,t.clientHeight-a-l-m-u)}return{pxWidth:o,pxHeight:n}}(e,s,r);n.canvases.push({dataURI:s.toDataURL("image/png",""),width:t.width,height:t.height}),s.setAttribute(S,n.canvases.length-1),n.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const e={currentSrc:i?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":o.loadDeferredImages&&s.getAttribute(N)||s.currentSrc};n.images.push(e),s.setAttribute(I,n.images.length-1),n.markedElements.push(s),s.removeAttribute(N)}if("VIDEO"==s.tagName&&!s.poster){const e=t.createElement("canvas"),o=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{o.drawImage(s,0,0,e.width,e.height),n.posters.push(e.toDataURL("image/png","")),s.setAttribute(v,n.posters.length-1),n.markedElements.push(s)}catch(e){}}"IFRAME"==s.tagName&&i&&o.removeHiddenElements&&(s.setAttribute(T,""),n.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(n.imports.push({content:Z(s.import)}),s.setAttribute(R,n.imports.length-1),n.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(F,s.value),n.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(F,s.checked),n.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(F,s.value),n.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(F,""),n.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(M,""),n.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,o,n,r,l);const d=!(s instanceof e.SVGElement)&&B(s);if(d&&!s.classList.contains(L)){const i={};s.setAttribute(A,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(i),U(e,t,d,o,n,r),i.content=d.innerHTML,i.delegatesFocus=d.delegatesFocus,i.mode=d.mode,d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(i.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}U(e,t,s,o,n,r),!o.autoSaveExternalSave&&o.removeHiddenElements&&i&&(a||""==s.getAttribute(w)?s.parentElement&&(s.parentElement.setAttribute(w,""),n.markedElements.push(s.parentElement)):r&&(s.setAttribute(E,""),n.markedElements.push(s)))})),n}function V(e,t,s){if(e){const o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((n=>{if(n=H(n),!t.loadedFonts||t.loadedFonts.find((e=>H(e.family)==n&&e.style==o))){const t=(i=e.getPropertyValue("font-weight"),x[i.toLowerCase().trim()]||i),r=e.getPropertyValue("font-variant")||"normal",a=[n,t,o,r];s.set(JSON.stringify(a),[n,t,o,r])}var i}))}}function B(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function H(e=""){return function(e){e=e.match(P)?e.replace(P,"$1"):e.replace(k,"$1");return e.trim()}((t=e.trim(),t.replace(g,((e,t,s)=>{const o="0x"+t-65536;return o!=o||s?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)})))).toLowerCase();var t}function W(e,t){if(e.querySelectorAll("[data-single-filez-disabled-noscript]").forEach((t=>{t.textContent=t.getAttribute(C),t.removeAttribute(C),e.body.firstChild?e.body.insertBefore(t,e.body.firstChild):e.body.appendChild(t)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[E,T,b,y,I,v,S,F,A,R,_,M];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(E),e.removeAttribute(b),e.removeAttribute(w),e.removeAttribute(T),e.removeAttribute(y),e.removeAttribute(I),e.removeAttribute(v),e.removeAttribute(S),e.removeAttribute(F),e.removeAttribute(A),e.removeAttribute(R),e.removeAttribute(_),e.removeAttribute(M)}))}function j(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,o)=>{try{const n=e.createElement("style");n.textContent=s.textContent,e.body.appendChild(n);const i=n.sheet;n.remove(),i&&i.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(_,o),t[o]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function J(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function Z(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}const G=N,K=L,Y="attributes",$=globalThis.browser,Q=globalThis.document,X=globalThis.MutationObserver,ee=(e,t,s)=>globalThis.addEventListener(e,t,s),te=(e,t,s)=>globalThis.removeEventListener(e,t,s),se=new Map;async function oe(e){if(Q.documentElement){se.clear();const o=Math.max(Q.documentElement.scrollHeight-1.5*Q.documentElement.clientHeight,0),r=Math.max(Q.documentElement.scrollWidth-1.5*Q.documentElement.clientWidth,0);if(globalThis.scrollY<=o&&globalThis.scrollX<=r)return function(e){return new Promise((async o=>{let r;const a=new Set,l=new X((async t=>{if((t=t.filter((e=>e.type==Y))).length){t.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute(G,e.target.src),e.target.addEventListener("load",c)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains(K)})).length&&(r=!0,await ie(l,e,f),a.size||await ne(l,e,f))}}));async function d(t){await ae("idleTimeout",(async()=>{r?(le("idleTimeout"),await d(Math.max(500,t/2))):(le("loadTimeout"),le("maxTimeout"),re(l,e,f))}),t)}function c(e){const t=e.target;t.removeAttribute(G),t.removeEventListener("load",c)}async function m(t){r=!0,await ie(l,e,f),await ne(l,e,f),t.detail&&a.add(t.detail)}async function u(t){await ie(l,e,f),await ne(l,e,f),a.delete(t.detail),a.size||await ne(l,e,f)}function f(e){l.disconnect(),te(t,m),te(s,u),o(e)}await d(2*e.loadDeferredImagesMaxIdleTime),await ie(l,e,f),l.observe(Q,{subtree:!0,childList:!0,attributes:!0}),ee(t,m),ee(s,u),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-filez-block-cookies-start")),e.loadDeferredImagesBlockStorage&&n(new i("single-filez-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-filez-load-deferred-images-keep-zoom-level-start")):n(new i("single-filez-load-deferred-images-start"))}(e)}))}(e)}}async function ne(e,t,s){await ae("loadTimeout",(()=>re(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function ie(e,t,s){await ae("maxTimeout",(async()=>{await le("loadTimeout"),await re(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function re(e,t,s){await le("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&n(new i("single-filez-block-cookies-end")),e.loadDeferredImagesBlockStorage&&n(new i("single-filez-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?n(new i("single-filez-load-deferred-images-keep-zoom-level-end")):n(new i("single-filez-load-deferred-images-end"))}(t),await ae("endTimeout",(async()=>{await le("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function ae(e,t,s){if($&&$.runtime&&$.runtime.sendMessage){if(!se.get(e)||!se.get(e).pending){const o={callback:t,pending:!0};se.set(e,o),await $.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:s}),o.pending=!1}}else{const o=se.get(e);o&&globalThis.clearTimeout(o),se.set(e,t),globalThis.setTimeout(t,s)}}async function le(e){if($&&$.runtime&&$.runtime.sendMessage)await $.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e});else{const t=se.get(e);se.delete(e),t&&globalThis.clearTimeout(t)}}$&&$.runtime&&$.runtime.onMessage&&$.runtime.onMessage.addListener&&$.runtime.onMessage.addListener((e=>{if("singlefile.lazyTimeout.onTimeout"==e.method){const t=se.get(e.type);t&&(se.delete(e.type),t.callback())}}));const de={ON_BEFORE_CAPTURE_EVENT_NAME:h,ON_AFTER_CAPTURE_EVENT_NAME:p,WIN_ID_ATTRIBUTE_NAME:"data-single-filez-win-id",preProcessDoc:D,serialize:Z,postProcessDoc:W,getShadowRoot:B},ce="__sfz_frameTree__::",me='iframe, frame, object[type="text/html"][data]',ue="singlefile.frameTree.initRequest",fe="singlefile.frameTree.ackInitRequest",ge="singlefile.frameTree.cleanupRequest",he="singlefile.frameTree.initResponse",pe=".",Ee=globalThis.window==globalThis.top,be=globalThis.browser,we=globalThis.top,Te=globalThis.MessageChannel,ye=globalThis.document,Ae=new Map;let Ie;function ve(){return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("")}async function Se(e){const t=e.sessionId,s=globalThis._singleFileZ_waitForUserScript;Ee||(Ie=globalThis.frameId=e.windowId),Ne(ye,e.options,Ie,t),Ee||(e.options.userScriptEnabled&&s&&await s(de.ON_BEFORE_CAPTURE_EVENT_NAME),ze({frames:[Pe(ye,globalThis,Ie,e.options)],sessionId:t,requestedFrameId:ye.documentElement.dataset.requestedFrameId&&Ie}),e.options.userScriptEnabled&&s&&await s(de.ON_AFTER_CAPTURE_EVENT_NAME),delete ye.documentElement.dataset.requestedFrameId)}function Re(e){const t=e.sessionId;Me(ke(ye),e.windowId,t)}function Fe(e){e.frames.forEach((t=>_e("responseTimeouts",e.sessionId,t.windowId)));const t=Ae.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.url=e.url,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(pe).length-e.windowId.split(pe).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function Ne(e,t,s,o){const n=ke(e);!function(e,t,s,o,n){const i=[];let r;Ae.get(n)?r=Ae.get(n).requestTimeouts:(r={},Ae.set(n,{requestTimeouts:r}));t.forEach(((e,t)=>{const s=o+pe+t;e.setAttribute(de.WIN_ID_ATTRIBUTE_NAME,s),i.push({windowId:s})})),ze({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach(((e,t)=>{const i=o+pe+t;try{qe(e.contentWindow,{method:ue,windowId:i,sessionId:n,options:s})}catch(e){}r[i]=globalThis.setTimeout((()=>ze({frames:[{windowId:i,processed:!0}],sessionId:n})),750)})),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o),n.length&&function(e,t,s,o,n){const i=[];t.forEach(((e,t)=>{const r=o+pe+t;let a;try{a=e.contentDocument}catch(e){}if(a)try{const t=e.contentWindow;t.stop(),_e("requestTimeouts",n,r),Ne(a,s,r,n),i.push(Pe(a,t,r,s))}catch(e){i.push({windowId:r,processed:!0})}})),ze({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o)}function _e(e,t,s){const o=Ae.get(t);if(o&&o[e]){const t=o[e][s];t&&(globalThis.clearTimeout(t),delete o[e][s])}}function Ce(e,t){const s=Ae.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>ze({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Me(e,t,s){e.forEach(((e,o)=>{const n=t+pe+o;e.removeAttribute(de.WIN_ID_ATTRIBUTE_NAME);try{qe(e.contentWindow,{method:ge,windowId:n,sessionId:s})}catch(e){}})),e.forEach(((e,o)=>{const n=t+pe+o;let i;try{i=e.contentDocument}catch(e){}if(i)try{Me(ke(i),n,s)}catch(e){}}))}function ze(e){e.method=he;try{we.singlefile.processors.frameTree.initResponse(e)}catch(t){qe(we,e,!0)}}function qe(e,t,s){if(e==we&&be&&be.runtime&&be.runtime.sendMessage)be.runtime.sendMessage(t);else if(s){const s=new Te;e.postMessage(ce+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(ce+JSON.stringify(t),"*")}function Pe(e,t,s,o){const n=de.preProcessDoc(e,t,o),i=de.serialize(e);de.postProcessDoc(e,n.markedElements);return{windowId:s,content:i,baseURI:e.baseURI.split("#")[0],url:e.location.href,title:e.title,canvases:n.canvases,fonts:n.fonts,stylesheets:n.stylesheets,images:n.images,posters:n.posters,usedFonts:n.usedFonts,shadowRoots:n.shadowRoots,imports:n.imports,processed:!0}}function ke(e){let t=Array.from(e.querySelectorAll(me));return e.querySelectorAll("*").forEach((e=>{const s=de.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(me)))})),t}Ee&&(Ie="0",be&&be.runtime&&be.runtime.onMessage&&be.runtime.onMessage.addListener&&be.runtime.onMessage.addListener((e=>e.method==he?(Fe(e),Promise.resolve({})):e.method==fe?(_e("requestTimeouts",e.sessionId,e.windowId),Ce(e.sessionId,e.windowId),Promise.resolve({})):void 0))),((e,t,s)=>{globalThis.addEventListener(e,t,s)})("message",(async e=>{if("string"==typeof e.data&&e.data.startsWith(ce)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(ce.length));if(t.method==ue)e.source&&qe(e.source,{method:fe,windowId:t.windowId,sessionId:t.sessionId}),Ee||(globalThis.stop(),t.options.loadDeferredImages&&oe(t.options),await Se(t));else if(t.method==fe)_e("requestTimeouts",t.sessionId,t.windowId),Ce(t.sessionId,t.windowId);else if(t.method==ge)Re(t);else if(t.method==he&&Ae.get(t.sessionId)){e.ports[0].onmessage=e=>Fe(e.data)}}}),!0);const xe={frameTree:Object.freeze({__proto__:null,getAsync:function(e){const t=ve();return e=JSON.parse(JSON.stringify(e)),new Promise((s=>{Ae.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{},resolve:e=>{e.sessionId=t,s(e)}}),Se({windowId:Ie,sessionId:t,options:e})}))},getSync:function(e){const t=ve();e=JSON.parse(JSON.stringify(e)),Ae.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{}}),function(e){const t=e.sessionId,s=globalThis._singleFileZ_waitForUserScript;Ee||(Ie=globalThis.frameId=e.windowId);Ne(ye,e.options,Ie,t),Ee||(e.options.userScriptEnabled&&s&&s(de.ON_BEFORE_CAPTURE_EVENT_NAME),ze({frames:[Pe(ye,globalThis,Ie,e.options)],sessionId:t,requestedFrameId:ye.documentElement.dataset.requestedFrameId&&Ie}),e.options.userScriptEnabled&&s&&s(de.ON_AFTER_CAPTURE_EVENT_NAME),delete ye.documentElement.dataset.requestedFrameId)}({windowId:Ie,sessionId:t,options:e});const s=Ae.get(t).frames;return s.sessionId=t,s},cleanup:function(e){Ae.delete(e),Re({windowId:Ie,sessionId:e,options:{sessionId:e}})},initResponse:Fe,TIMEOUT_INIT_REQUEST_MESSAGE:750})},Le={ON_BEFORE_CAPTURE_EVENT_NAME:h,ON_AFTER_CAPTURE_EVENT_NAME:p,preProcessDoc:D,postProcessDoc:W,serialize:Z};O("single-filez-user-script-init",(()=>globalThis._singleFileZ_waitForUserScript=async e=>{const t=new CustomEvent(e+"-request",{cancelable:!0}),s=new Promise((t=>O(e+"-response",t)));(e=>{globalThis.dispatchEvent(e)})(t),t.defaultPrevented&&await s})),e.helper=Le,e.processors=xe,Object.defineProperty(e,"__esModule",{value:!0})}));
