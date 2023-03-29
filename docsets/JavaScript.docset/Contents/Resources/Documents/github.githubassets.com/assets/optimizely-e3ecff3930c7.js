"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["optimizely","optimizely-utils","uuid"],{82664:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function a(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function i(){return`${window.location.protocol}//${window.location.host}${o()+a()}`}n.d(t,{S:()=>i})},86975:(e,t,n)=>{n.d(t,{AU:()=>u,Ap:()=>w,DT:()=>p,HN:()=>c,Lq:()=>i,T2:()=>S,Yg:()=>E,ag:()=>g,ck:()=>s,po:()=>y,q3:()=>d,uL:()=>b,wz:()=>f,xc:()=>l,xk:()=>h,zH:()=>a});var r=n(64707);let o="data-turbo-loaded";function a(){document.documentElement.setAttribute(o,"")}function i(){return document.documentElement.hasAttribute(o)}let l=()=>!(0,r.c)("PJAX_ENABLED"),c=e=>e?.tagName==="TURBO-FRAME";function u(e,t){let n=e.split("/",3).join("/"),r=t.split("/",3).join("/");return n===r}function s(e,t){let n=e.split("/",2).join("/"),r=t.split("/",2).join("/");return n===r}async function d(){let e=document.head.querySelectorAll("link[rel=stylesheet]"),t=new Set([...document.styleSheets].map(e=>e.href)),n=[];for(let r of e)""===r.href||t.has(r.href)||n.push(m(r));await Promise.all(n)}let m=(e,t=2e3)=>new Promise(n=>{let r=()=>{e.removeEventListener("error",r),e.removeEventListener("load",r),n()};e.addEventListener("load",r,{once:!0}),e.addEventListener("error",r,{once:!0}),setTimeout(r,t)}),f=(e,t)=>{let n=t||e.querySelectorAll("[data-turbo-replace]"),r=[...document.querySelectorAll("[data-turbo-replace]")];for(let e of n){let t=r.find(t=>t.id===e.id);t&&t.replaceWith(e)}},p=e=>{for(let t of e.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${t.getAttribute("href")}"],
           link[data-href="${t.getAttribute("data-href")}"]`)||document.head.append(t)},h=e=>{for(let t of e.querySelectorAll("script"))document.head.querySelector(`script[src="${t.getAttribute("src")}"]`)||v(t)},v=e=>{let{src:t}=e;if(!t)return;let n=document.createElement("script"),r=e.getAttribute("type");r&&(n.type=r),n.src=t,document.head&&document.head.appendChild(n)},y=e=>{let t=[];for(let n of e.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${n.getAttribute("http-equiv")}"]`)?.content!==n.content&&t.push(S(n.getAttribute("http-equiv")));return t},g=e=>{let t=e.querySelector("[data-turbo-head]")||e.head;return{title:t.querySelector("title")?.textContent,transients:[...t.querySelectorAll("[data-turbo-transient]")].map(e=>e.cloneNode(!0)),bodyClasses:e.querySelector("meta[name=turbo-body-classes]")?.content,replacedElements:[...e.querySelectorAll("[data-turbo-replace]")].map(e=>e.cloneNode(!0))}},E=()=>[...document.documentElement.attributes],S=e=>e.replace(/^x-/,"").replaceAll("-","_"),b=e=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:e}})),w=(e,t)=>{for(let n of e.attributes)t.hasAttribute(n.nodeName)||"aria-busy"===n.nodeName||e.removeAttribute(n.nodeName);for(let n of t.attributes)e.getAttribute(n.nodeName)!==n.nodeValue&&e.setAttribute(n.nodeName,n.nodeValue)}},67404:(e,t,n)=>{function r(e){return o(e)[0]}function o(e){let t=[];for(let n of a()){let[r,o]=n.trim().split("=");e===r&&void 0!==o&&t.push({key:r,value:o})}return t}function a(){try{return document.cookie.split(";")}catch{return[]}}function i(e,t,n=null,r=!1,o="lax"){let a=document.domain;if(null==a)throw Error("Unable to get document domain");a.endsWith(".github.com")&&(a="github.com");let i="https:"===location.protocol?"; secure":"",l=n?`; expires=${n}`:"";!1===r&&(a=`.${a}`);try{document.cookie=`${e}=${t}; path=/; domain=${a}${l}${i}; samesite=${o}`}catch{}}function l(e,t=!1){let n=document.domain;if(null==n)throw Error("Unable to get document domain");n.endsWith(".github.com")&&(n="github.com");let r=new Date().getTime(),o=new Date(r-1).toUTCString(),a="https:"===location.protocol?"; secure":"",i=`; expires=${o}`;!1===t&&(n=`.${n}`);try{document.cookie=`${e}=''; path=/; domain=${n}${i}${a}`}catch{}}n.d(t,{$1:()=>o,d8:()=>i,ej:()=>r,kT:()=>l})},25019:(e,t,n)=>{n.d(t,{aJ:()=>b,cI:()=>g,eK:()=>p});var r=n(82918),o=n(45341),a=n(28382),i=n(82664),l=n(86975),c=n(58843),u=n(8704);let s=!1,d=0,m=Date.now();function f(e){return"AbortError"===e.name||"TypeError"===e.name&&"Failed to fetch"===e.message}function p(e,t={}){f(e)||h(y(v(e),t))}async function h(e){if(!A())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(S(e.error.stacktrace)){s=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function v(e){return{type:e.name,value:e.message,stacktrace:g(e)}}function y(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,i.S)()||window.location.href,readyState:document.readyState,referrer:(0,c.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:b()||void 0,turbo:(0,l.xc)(),bundler:u.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function g(e){return(0,a.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let E=/(chrome|moz|safari)-extension:\/\//;function S(e){return e.some(e=>E.test(e.filename)||E.test(e.function))}function b(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let w=!1;function A(){return!w&&!s&&d<10&&(0,o.Gb)()}if(window.addEventListener("pageshow",()=>w=!1),window.addEventListener("pagehide",()=>w=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{p(e.data.error)})}},64707:(e,t,n)=>{n.d(t,{$:()=>c,c:()=>i});var r=n(15205);let o=(0,r.Z)(a);function a(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}let i=(0,r.Z)(l);function l(e){return -1!==o().indexOf(e)}let c={isFeatureEnabled:i}},8704:(e,t,n)=>{n.d(t,{A7:()=>r.A7,ko:()=>r.ko,q1:()=>r.q1});var r=n(53729)},51536:(e,t,n)=>{n.d(t,{rV:()=>o,cl:()=>i,LS:()=>a});var r=n(44544);let{getItem:o,setItem:a,removeItem:i}=(0,r.Z)("sessionStorage")},55065:(e,t,n)=>{n.d(t,{$g:()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var r=n(31167);let o=class SoftNavEvent extends Event{constructor(e,t){super(t),this.mechanism=e}};let SoftNavStartEvent=class SoftNavStartEvent extends o{constructor(e){super(e,r.QE.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends o{constructor(e,t){super(e,r.QE.SUCCESS),this.visitCount=t}};let SoftNavErrorEvent=class SoftNavErrorEvent extends o{constructor(e,t){super(e,r.QE.ERROR),this.error=t}};let SoftNavEndEvent=class SoftNavEndEvent extends o{constructor(e){super(e,r.QE.END)}}},31167:(e,t,n)=>{n.d(t,{BT:()=>d,FP:()=>f,LD:()=>s,QE:()=>i,TL:()=>p,Yl:()=>u,jN:()=>l,r_:()=>m,u5:()=>h});var r=n(55065),o=n(29573),a=n(58843);let i=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),l="reload",c=0;function u(){c=0,document.dispatchEvent(new Event(i.INITIAL)),(0,a.XL)()}function s(e){(0,a.sj)()||(v(),document.dispatchEvent(new r.OV(e)),(0,a.U6)(e),(0,a.J$)(),(0,a.Nt)(),(0,o.hY)())}function d(e={}){g(e)&&(c+=1,document.dispatchEvent(new r.$g((0,a.Gj)(),c)),f(e))}function m(e={}){if(!g(e))return;c=0;let t=(0,a.Wl)()||l;document.dispatchEvent(new r.QW((0,a.Gj)(),t)),y(),(0,o.t3)(t),(0,a.XL)()}function f(e={}){g(e)&&(y(),document.dispatchEvent(new r.Xr((0,a.Gj)())),(0,a.pS)())}function p(e={}){g(e)&&((0,o.mr)(),document.dispatchEvent(new Event(i.RENDER)))}function h(){document.dispatchEvent(new Event(i.FRAME_UPDATE))}function v(){document.dispatchEvent(new Event(i.PROGRESS_BAR.START))}function y(){document.dispatchEvent(new Event(i.PROGRESS_BAR.END))}function g({skipIfGoingToReactApp:e,allowedMechanisms:t=[]}={}){return(0,a.sj)()&&(0===t.length||t.includes((0,a.Gj)()))&&(!e||!(0,a.Nb)())}},29573:(e,t,n)=>{n.d(t,{CF:()=>i,hY:()=>l,mr:()=>s,t3:()=>u});var r=n(34855),o=n(58843);let a="stats:soft-nav-duration",i={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function l(){performance.mark(a)}function c(){if(0===performance.getEntriesByName(a).length)return null;performance.measure(a,a);let e=performance.getEntriesByName(a),t=e.pop();return t?t.duration:null}function u(e){(0,r.b)({turboFailureReason:e,turboStartUrl:(0,o.wP)(),turboEndUrl:window.location.href})}function s(){let e=c();if(!e)return;let t=i[(0,o.Gj)()],n=Math.round(e);t===i.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:n}})),(0,r.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:t,destination:(0,o.Nb)()||"rails",duration:n,initiator:(0,o.CI)()||"rails"}})}},58843:(e,t,n)=>{n.d(t,{Ak:()=>y,CI:()=>b,Gj:()=>p,J$:()=>S,Nb:()=>w,Nt:()=>g,OE:()=>h,U6:()=>d,Wl:()=>v,XL:()=>s,pS:()=>m,sj:()=>f,wP:()=>E});var r=n(51536),o=n(31167);let a="soft-nav:fail",i="soft-nav:fail-referrer",l="soft-nav:referrer",c="soft-nav:marker",u="soft-nav:react-app-name";function s(){(0,r.LS)(c,"0"),(0,r.cl)(l),(0,r.cl)(a),(0,r.cl)(i),(0,r.cl)(u)}function d(e){(0,r.LS)(c,e)}function m(){(0,r.LS)(c,"0")}function f(){let e=(0,r.rV)(c);return e&&"0"!==e}function p(){return(0,r.rV)(c)}function h(){return Boolean(v())}function v(){return(0,r.rV)(a)}function y(e){(0,r.LS)(a,e||o.jN),(0,r.LS)(i,window.location.href)}function g(){(0,r.LS)(l,window.location.href)}function E(){return(0,r.rV)(l)||document.referrer}function S(){let e=w();e?(0,r.LS)(u,e):(0,r.cl)(u)}function b(){return(0,r.rV)(u)}function w(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}},34855:(e,t,n)=>{n.d(t,{B:()=>r.B,b:()=>r.b});var r=n(71643)},31063:(e,t,n)=>{function r(e){return e.toLowerCase().replace(/-(.)/g,function(e,t){return t.toUpperCase()})}function o(e){let t={};for(let{name:n,value:o}of e.attributes)if(n.startsWith("data-optimizely-meta-")){let e=n.replace("data-optimizely-meta-","");o&&o.trim().length&&(t[r(e)]=o)}return t}n.d(t,{t:()=>o})},68379:(e,t,n)=>{let r;var o=n(25019),a=n(82664),i=n(48266),l=n(45341);let c={handleError(e){m(e)}};function u(){s();let e=document.head.querySelector("meta[name=optimizely-datafile]")?.content;return(0,i.Fs)({datafile:e,errorHandler:c})}function s(){let e=d("optimizely.logLevel");e?(0,i.Ub)(e):(0,i.EK)(null)}function d(e){try{return window.localStorage?.getItem(e)}catch(e){return null}}async function m(e){if(!l.Gb||e.message.startsWith("Optimizely::InvalidExperimentError:"))return;let t=document.head?.querySelector('meta[name="browser-optimizely-client-errors-url"]')?.content;if(!t)return;let n={message:e.message,stack:e.stack,stacktrace:(0,o.cI)(e),sanitizedUrl:(0,a.S)()||window.location.href,user:(0,o.aJ)()||void 0};try{await fetch(t,{method:"post",body:JSON.stringify(n)})}catch{}}var f=n(67404),p=n(82918),h=n(36071),v=n(59753),y=n(31063);!async function(){r=u(),await r.onReady()}(),(0,v.on)("click","[data-optimizely-event]",function(e){if(!r)return;let t=e.currentTarget,n=t.getAttribute("data-optimizely-event")||"",[o,a]=n.trim().split(/\s*,\s*/),i=(0,y.t)(t);o&&a?r.track(o,a,i):o&&r.track(o,(0,p.b)(),i)}),(0,h.N7)("[data-optimizely-experiment]",e=>{if(!r)return;let t=e.getAttribute("data-optimizely-experiment");if(!t||e.hidden)return;let n=(0,y.t)(e),o=r.activate(t,(0,p.b)(),n);if(!o)return;let a=e.querySelectorAll("[data-optimizely-variation]");for(let e of a){let t=e.getAttribute("data-optimizely-variation");e.hidden=t!==o}});let g=document.querySelector('meta[name="enabled-homepage-translation-languages"]')?.getAttribute("content")?.split(",")||[],E=(0,f.$1)("_locale_experiment").length>0&&"ko"===(0,f.$1)("_locale_experiment")[0].value&&g.includes("ko");async function S(){let e="ko_homepage_translation",t=(0,p.b)(),n=f.$1("_locale")[0]?.value?.slice(0,2);r.setForcedVariation(e,t,n),r.activate(e,t);let o=document.querySelectorAll("[data-optimizely-variation]");for(let e of o)e.hidden=n!==e.getAttribute("data-optimizely-variation");for(let e of document.querySelectorAll('form[action^="/join"]'))e.addEventListener("submit",()=>{r.track("submit.homepage_signup",t)});for(let e of document.querySelectorAll('a[href^="/join"]'))e.addEventListener("click",()=>{r.track("click.homepage_signup",t)})}async function b(){document.getElementById("signup-form")?.addEventListener("submit",()=>{let e=(0,p.b)();r.activate("ko_homepage_translation",e),r.track("submit.create_account",e)})}async function w(){if(!r)return;let e=(0,p.b)();r.activate("test_experiment",e),r.track("test_event",e)}E&&"/"===window.location.pathname&&S(),E&&"/join"===window.location.pathname&&b(),"/settings/profile"===window.location.pathname&&w()},328:(e,t,n)=>{function r(){return crypto.randomUUID()}n.r(t),n.d(t,{v4:()=>r})},4412:(e,t,n)=>{n.d(t,{C:()=>a,x:()=>o});var r=n(86283);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),a=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},53729:(e,t,n)=>{n.d(t,{A7:()=>d,ko:()=>u,q1:()=>l});var r=n(15205),o=n(86283);let a=(0,r.Z)(i);function i(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let l=(0,r.Z)(c);function c(){return o.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let u=(0,r.Z)(s);function s(){return"enterprise"===a()}let d="webpack"},44544:(e,t,n)=>{n.d(t,{Z:()=>i,_:()=>l});var r=n(86283),o=n(71643);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,i=e=>e,l=e=>e){let c;try{if(!n)throw Error();c=n[e]||new a}catch{c=new a}let{throwQuotaErrorsOnSet:u}=t;function s(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function d(e){try{if(c.removeItem(e),t.ttl){let t=`${e}:expiry`;c.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=c.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(c.getItem(r));if(o&&t>o)return d(e),d(r),s("SAFE_STORAGE_VALUE_EXPIRED"),null;return s("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(c.setItem(e,l(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;c.setItem(n,o.toString())}}catch(e){if(u&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:c.clear,key:c.key,get length(){return c.length}}}function l(e){return i(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,jX:()=>o.jX,n4:()=>o.n4});var r=n(35647),o=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>a,n4:()=>r});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,a="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>a,W6:()=>o,cF:()=>i});var r=n(73614);let o=void 0===r.n4,a=!o;function i(){return!!o||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(e,t,n)=>{n.d(t,{B:()=>h,b:()=>l});var r=n(86283),o=n(4412),a=n(53729);let i=[];function l(e,t=!1){void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=p(),e.staff=h(),e.bundler=a.A7,i.push(e),t?s():u()}let c=null;async function u(){await o.C,null==c&&(c=window.requestIdleCallback(s))}function s(){if(c=null,!i.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=d(i);for(let n of t)f(e,`{"stats": [${n.join(",")}] }`);i=[]}function d(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(m(n));return t}function m(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}function f(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function p(){return!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content}function h(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",s),r.n4?.addEventListener("visibilitychange",s)}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_optimizely_optimizely-sdk_dist_optimizely_browser_es_min_js-node_modules-77839b"],()=>t(68379));var n=e.O()}]);
//# sourceMappingURL=optimizely-b15110281e30.js.map