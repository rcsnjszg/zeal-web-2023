"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_user-content_ts-app_assets_modules_github_blob-anchor_ts--b39cba"],{82664:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function l(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function u(){return`${window.location.protocol}//${window.location.host}${o()+l()}`}n.d(t,{S:()=>u})},86975:(e,t,n)=>{n.d(t,{AU:()=>c,Ap:()=>v,DT:()=>h,HN:()=>a,Lq:()=>u,T2:()=>$,Yg:()=>w,ag:()=>y,ck:()=>s,po:()=>g,q3:()=>d,uL:()=>E,wz:()=>m,xc:()=>i,xk:()=>p,zH:()=>l});var r=n(64707);let o="data-turbo-loaded";function l(){document.documentElement.setAttribute(o,"")}function u(){return document.documentElement.hasAttribute(o)}let i=()=>!(0,r.c)("PJAX_ENABLED"),a=e=>e?.tagName==="TURBO-FRAME";function c(e,t){let n=e.split("/",3).join("/"),r=t.split("/",3).join("/");return n===r}function s(e,t){let n=e.split("/",2).join("/"),r=t.split("/",2).join("/");return n===r}async function d(){let e=document.head.querySelectorAll("link[rel=stylesheet]"),t=new Set([...document.styleSheets].map(e=>e.href)),n=[];for(let r of e)""===r.href||t.has(r.href)||n.push(f(r));await Promise.all(n)}let f=(e,t=2e3)=>new Promise(n=>{let r=()=>{e.removeEventListener("error",r),e.removeEventListener("load",r),n()};e.addEventListener("load",r,{once:!0}),e.addEventListener("error",r,{once:!0}),setTimeout(r,t)}),m=(e,t)=>{let n=t||e.querySelectorAll("[data-turbo-replace]"),r=[...document.querySelectorAll("[data-turbo-replace]")];for(let e of n){let t=r.find(t=>t.id===e.id);t&&t.replaceWith(e)}},h=e=>{for(let t of e.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${t.getAttribute("href")}"],
           link[data-href="${t.getAttribute("data-href")}"]`)||document.head.append(t)},p=e=>{for(let t of e.querySelectorAll("script"))document.head.querySelector(`script[src="${t.getAttribute("src")}"]`)||b(t)},b=e=>{let{src:t}=e;if(!t)return;let n=document.createElement("script"),r=e.getAttribute("type");r&&(n.type=r),n.src=t,document.head&&document.head.appendChild(n)},g=e=>{let t=[];for(let n of e.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${n.getAttribute("http-equiv")}"]`)?.content!==n.content&&t.push($(n.getAttribute("http-equiv")));return t},y=e=>{let t=e.querySelector("[data-turbo-head]")||e.head;return{title:t.querySelector("title")?.textContent,transients:[...t.querySelectorAll("[data-turbo-transient]")].map(e=>e.cloneNode(!0)),bodyClasses:e.querySelector("meta[name=turbo-body-classes]")?.content,replacedElements:[...e.querySelectorAll("[data-turbo-replace]")].map(e=>e.cloneNode(!0))}},w=()=>[...document.documentElement.attributes],$=e=>e.replace(/^x-/,"").replaceAll("-","_"),E=e=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:e}})),v=(e,t)=>{for(let n of e.attributes)t.hasAttribute(n.nodeName)||"aria-busy"===n.nodeName||e.removeAttribute(n.nodeName);for(let n of t.attributes)e.getAttribute(n.nodeName)!==n.nodeValue&&e.setAttribute(n.nodeName,n.nodeValue)}},86412:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(87098),o=n(59753),l=n(80721),u=n(3126);let i=!0;function a(e){i=e}function c(){if(!i||document.querySelector(":target"))return;let e=(0,r.$z)(location.hash).toLowerCase(),t=(0,r.Q)(document,`user-content-${e}`);t&&(0,u.zT)(t)}window.addEventListener("hashchange",c),document.addEventListener("turbo:load",c),async function(){await l.x,c()}(),(0,o.on)("click","a[href]",function(e){let{currentTarget:t}=e;t instanceof HTMLAnchorElement&&t.href===location.href&&location.hash.length>1&&setTimeout(function(){e.defaultPrevented||c()})})},56334:(e,t,n)=>{function r(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=a(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=a(t[0]),n=a(t[1]);if(!e||!n)return;return f(Object.freeze({start:e,end:n}))}}}function o(e){let{start:t,end:n}=f(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function l(e){let t=e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}function u(e){let t=r(e),n=l(e);return{blobRange:t,anchorPrefix:n}}function i({anchorPrefix:e,blobRange:t}){return t?`#${e}${o(t)}`:"#"}function a(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function c(e,t){let[n,r]=s(e.start,!0,t),[o,l]=s(e.end,!1,t);if(!n||!o)return;let u=r,i=l;if(-1===u&&(u=0),-1===i&&(i=o.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let a=n.ownerDocument.createRange();return a.setStart(n,u),a.setEnd(o,i),a}function s(e,t,n){let r=[null,0],o=n(e.line);if(!o)return r;if(null==e.column)return[o,-1];let l=e.column-1,u=d(o);for(let e=0;e<u.length;e++){let n=u[e],r=l-(n.textContent||"").length;if(0===r){let r=u[e+1];if(t&&r)return[r,0];return[n,l]}if(r<0)return[n,l];l=r}return r}function d(e){if(e.nodeType===Node.TEXT_NODE)return[e];if(!e.childNodes||!e.childNodes.length)return[];let t=[];for(let n of e.childNodes)t=t.concat(d(n));return t}function f(e){let t=[e.start,e.end];return(t.sort(m),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function m(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{Dw:()=>i,G5:()=>r,M9:()=>c,n6:()=>u})},54697:(e,t,n)=>{n.d(t,{Pi:()=>u,gD:()=>i,hX:()=>c,l8:()=>a});var r=n(59753);let o=new WeakMap,l=new WeakMap;function u(e){return o.get(e)}async function i(e){return o.get(e)||s(await d(e,"codeEditor:ready"))}function a(e,t){l.set(e,t)}function c(e){return l.get(e)}function s(e){if(!(e instanceof CustomEvent))throw Error("assert: event is not a CustomEvent");let t=e.detail.editor;if(!e.target)throw Error("assert: event.target is null");return o.set(e.target,t),t}function d(e,t){return new Promise(n=>{e.addEventListener(t,n,{once:!0})})}(0,r.on)("codeEditor:ready",".js-code-editor",s)},67404:(e,t,n)=>{function r(e){return o(e)[0]}function o(e){let t=[];for(let n of l()){let[r,o]=n.trim().split("=");e===r&&void 0!==o&&t.push({key:r,value:o})}return t}function l(){try{return document.cookie.split(";")}catch{return[]}}function u(e,t,n=null,r=!1,o="lax"){let l=document.domain;if(null==l)throw Error("Unable to get document domain");l.endsWith(".github.com")&&(l="github.com");let u="https:"===location.protocol?"; secure":"",i=n?`; expires=${n}`:"";!1===r&&(l=`.${l}`);try{document.cookie=`${e}=${t}; path=/; domain=${l}${i}${u}; samesite=${o}`}catch{}}function i(e,t=!1){let n=document.domain;if(null==n)throw Error("Unable to get document domain");n.endsWith(".github.com")&&(n="github.com");let r=new Date().getTime(),o=new Date(r-1).toUTCString(),l="https:"===location.protocol?"; secure":"",u=`; expires=${o}`;!1===t&&(n=`.${n}`);try{document.cookie=`${e}=''; path=/; domain=${n}${u}${l}`}catch{}}n.d(t,{$1:()=>o,d8:()=>u,ej:()=>r,kT:()=>i})},25019:(e,t,n)=>{n.d(t,{aJ:()=>E,cI:()=>y,eK:()=>h});var r=n(82918),o=n(45341),l=n(28382),u=n(82664),i=n(86975),a=n(58843),c=n(8704);let s=!1,d=0,f=Date.now();function m(e){return"AbortError"===e.name||"TypeError"===e.name&&"Failed to fetch"===e.message}function h(e,t={}){m(e)||p(g(b(e),t))}async function p(e){if(!S())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if($(e.error.stacktrace)){s=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function b(e){return{type:e.name,value:e.message,stacktrace:y(e)}}function g(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,u.S)()||window.location.href,readyState:document.readyState,referrer:(0,a.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:E()||void 0,turbo:(0,i.xc)(),bundler:c.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function y(e){return(0,l.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let w=/(chrome|moz|safari)-extension:\/\//;function $(e){return e.some(e=>w.test(e.filename)||w.test(e.function))}function E(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let v=!1;function S(){return!v&&!s&&d<10&&(0,o.Gb)()}if(window.addEventListener("pageshow",()=>v=!1),window.addEventListener("pagehide",()=>v=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{h(e.data.error)})}},64707:(e,t,n)=>{n.d(t,{$:()=>a,c:()=>u});var r=n(15205);let o=(0,r.Z)(l);function l(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}let u=(0,r.Z)(i);function i(e){return -1!==o().indexOf(e)}let a={isFeatureEnabled:u}},41982:(e,t,n)=>{function*r(e,t){for(let n of e){let e=t(n);null!=e&&(yield e)}}function o(e,t,n){let o=e=>{let n=t(e);return null!=n?[e,n]:null};return[...r(e,o)].sort((e,t)=>n(e[1],t[1])).map(([e])=>e)}n.d(t,{W:()=>o})},87738:(e,t,n)=>{function r(e,t,n=.1){let r=i(e,t,n);if(r&&-1===t.indexOf("/")){let o=e.substring(e.lastIndexOf("/")+1);r+=i(o,t,n)}return r}function o(e){let t=e.toLowerCase().split(""),n="";for(let e=0;e<t.length;e++){let r=t[e],o=r.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");0===e?n+=`(.*)(${o})`:n+=`([^${o}]*?)(${o})`}return RegExp(`${n}(.*?)$`,"i")}function l(e,t,n){if(t){let r=e.innerHTML.trim().match(n||o(t));if(!r)return;let l=!1,u=[];for(let e=1;e<r.length;++e){let t=r[e];t&&(e%2==0?l||(u.push("<mark>"),l=!0):l&&(u.push("</mark>"),l=!1),u.push(t))}e.innerHTML=u.join("")}else{let t=e.innerHTML.trim(),n=t.replace(/<\/?mark>/g,"");t!==n&&(e.innerHTML=n)}}n.d(t,{EW:()=>r,Qw:()=>l,qu:()=>a});let u=new Set([" ","-","_"]);function i(e,t,n=.1){let r=e;if(r===t)return 1;let o=r.length,l=0,i=0;for(let e=0;e<t.length;e++){let a=t[e],c=r.indexOf(a.toLowerCase()),s=r.indexOf(a.toUpperCase()),d=Math.min(c,s),f=d>-1?d:Math.max(c,s);if(-1===f)return 0;l+=.1,r[f]===a&&(l+=.1),0===f&&(l+=.9-n,0===e&&(i=1)),u.has(r.charAt(f-1))&&(l+=.9-n),r=r.substring(f+1,o)}let a=t.length,c=l/a,s=(c*(a/o)+c)/2;return i&&s+n<1&&(s+=n),s}function a(e,t){return e.score>t.score?-1:e.score<t.score?1:e.text<t.text?-1:e.text>t.text?1:0}},93928:(e,t,n)=>{function r(e){let t=e.split("\u200D"),n=0;for(let e of t){let t=Array.from(e.split(/[\ufe00-\ufe0f]/).join("")).length;n+=t}return n/t.length}function o(e,t,n,r=!0){let o=e.value.substring(0,e.selectionEnd||0),l=e.value.substring(e.selectionEnd||0);return i(e,(o=o.replace(t,n))+(l=l.replace(t,n)),o.length,r),n}function l(e,t,n){if(null===e.selectionStart||null===e.selectionEnd)return o(e,t,n);let r=e.value.substring(0,e.selectionStart),l=e.value.substring(e.selectionEnd);return i(e,r+n+l,r.length),n}function u(e,t,n={}){let r=e.selectionEnd||0,o=e.value.substring(0,r),l=e.value.substring(r),u=""===e.value||o.match(/\n$/)?"":"\n",i=n.appendNewline?"\n":"",a=u+t+i;e.value=o+a+l;let c=r+a.length;return e.selectionStart=c,e.selectionEnd=c,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1})),e.focus(),a}function i(e,t,n,r=!0){e.value=t,r&&(e.selectionStart=n,e.selectionEnd=n),e.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1}))}function a(e,t){let n=[...e],r=new TextEncoder,o=new Uint8Array(4);for(let e=0;e<n.length;e++){let l=n[e],{written:u,read:i}=r.encodeInto(l,o);if(!u||!i)return -1;let a=u-i;if(0!==a&&(e<t&&(t-=a),e>=t))break}return t}n.d(t,{Om:()=>u,lp:()=>o,rq:()=>r,t4:()=>l,yb:()=>a})}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_user-content_ts-app_assets_modules_github_blob-anchor_ts--b39cba-bad3069b5286.js.map