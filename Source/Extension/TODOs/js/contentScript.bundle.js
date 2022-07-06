(()=>{"use strict";const t={saccadesInterval:0,lineHeight:1,fixationStrength:2,scope:"global",onPageLoad:!1},n=[],e=[];let a;async function i(t){return new Promise(((n,e)=>{chrome.runtime.sendMessage({message:"retrievePrefs",action:t},(async t=>{n(t.data)}))}))}function o(t,n){return new Promise(((e,a)=>{chrome.runtime.sendMessage({message:"storePrefs",data:t,action:n},(async t=>{e(!0)}))}))}async function s(){return i("local")}async function r(){return i("global")}async function c(t){return o(t,"local")}async function l(t){return o(t,"global")}async function d(t){const n=await s();let e=await r();const i=await a();let o=n[i].scope;const d="function"==typeof t?t("local"===o?n[i]:e):t;d.scope&&(o=d.scope),"local"===o?n[i]={...n[i],...d}:e={...e,...d},n[i].scope=o,e.scope="global",h("local"===o?n[i]:e),c(n),l(e)}async function b(){let n=await s(),i=await r();const o=await a();null==n&&(n={}),n[o]={...t,...n[o]},i={...t,...i},c(n),l(i),"global"===n[o].scope?(h(i),h(i,e)):(h(n[o]),h(n[o],e))}function h(t,e){Array.isArray(e)?e.forEach((n=>{n(t)})):n.forEach((n=>{n(t)}))}const f={init:function(i){return n.push(i.subscribe),i.onStartup&&e.push(i.onStartup),a=i.getOrigin,{start:b,setPrefs:d,defaultPrefs:()=>t}}};class g{static#t=()=>!0;static logError=t=>{this.#t()||console.error(t)};static logInfo=(...t)=>{this.#t()||console.log(...t)};static logTime=t=>this.#t()?()=>{}:(console.time(t),()=>console.timeEnd(t))}class u{#n={childList:!0,subtree:!0};#e;#a;#i;#o;constructor(t,n,e){this.#e=new MutationObserver(e),this.#i=n??this.#n,this.#o=t}observe(){this.#e.observe(this.#o,this.#i)}destroy(){this.#e.disconnect()}}const y="undefined"==typeof browser?chrome:browser,p=["STYLE","SCRIPT","BR-SPAN","BR-FIXATION","BR-BOLD"];let v;function x(t){return t.replace(/\p{L}+/gu,(t=>{const{length:n}=t;let e=1;n>3&&(e=Math.round(n/2));const a=t.slice(0,e),i=t.slice(e),o=`<br-bold class="br-bold">${function(t){const n=Math.round(.33*t.length);if(0===n)return`<br-fixation fixation-strength="1">${t}</br-fixation>`;const e=t.substring(0,n),a=t.substring(t.length-n,t.length),i=`<br-fixation fixation-strength="1">${e}</br-fixation>`,o=`<br-fixation fixation-strength="3">${a}</br-fixation>`,s=t.length-2*n>0?`<br-fixation fixation-strength="2">${t.substring(n,t.length-n)}</br-fixation>`:"";return i+s+o}(a)}</br-bold>${i}`;return o}))}function m(t){if(t?.parentElement?.tagName&&!p.includes(t.parentElement.tagName))if(t.nodeType===Node.TEXT_NODE&&t.nodeValue.length)try{const n=document.createElement("br-span");if(n.innerHTML=x(t.nodeValue),0===n.childElementCount)return;t.parentElement.replaceChild(n,t)}catch(t){}else t.hasChildNodes()&&[...t.childNodes].forEach(m)}const E=t=>{const n=g.logTime("ToggleReading-Time");try{if(t){document.getElementsByTagName("br-bold").length<1&&function(){const t=document.createElement("style");t.textContent='\n    .br-bold[fixation-strength="1"] :is(\n      [saccades-interval="0"] br-bold [fixation-strength="1"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="1"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="1"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="1"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="1"]\n      ) { \n      font-weight: bold !important; display: inline; line-height: var(--br-line-height,initial); \n    }\n\n    .br-bold[fixation-strength="2"] :is(\n      [saccades-interval="0"] br-bold [fixation-strength="1"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="1"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="1"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="1"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="1"],\n\n      [saccades-interval="0"] br-bold [fixation-strength="2"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="2"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="2"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="2"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="2"]\n      ) { \n      font-weight: bold !important; display: inline; line-height: var(--br-line-height,initial); \n    }\n\n    .br-bold[fixation-strength="3"] :is(\n\n      [saccades-interval="0"] br-bold [fixation-strength="1"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="1"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="1"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="1"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="1"],\n      \n      [saccades-interval="0"] br-bold [fixation-strength="2"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="2"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="2"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="2"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="2"]\n      ,\n      [saccades-interval="0"] br-bold [fixation-strength="3"], \n      [saccades-interval="1"] br-bold:nth-of-type(2n+1) [fixation-strength="3"],\n      [saccades-interval="2"] br-bold:nth-of-type(3n+1) [fixation-strength="3"],\n      [saccades-interval="3"] br-bold:nth-of-type(4n+1) [fixation-strength="3"],\n      [saccades-interval="4"] br-bold:nth-of-type(5n+1) [fixation-strength="3"]\n      ) { \n      font-weight: bold !important; display: inline; line-height: var(--br-line-height,initial); \n    }\n    ',document.head.appendChild(t)}(),document.body.classList.add("br-bold"),[...document.body.children].forEach(m),v||(v=new u(document.body,null,L),v.observe())}else document.body.classList.remove("br-bold"),v&&(v.destroy(),v=null)}catch(t){g.logError(t)}finally{n()}},w=t=>{const n=null==t?0:t;document.body.setAttribute("saccades-interval",n)},T=t=>{document.body.setAttribute("fixation-strength",t)},P=t=>{document.body.style.setProperty("--br-line-height",t)};function L(t){g.logInfo("mutationCallback fired ",t.length),t.forEach((({type:t,addedNodes:n})=>{"childList"===t&&n?.forEach(m)}))}const O=(t,n,e)=>{switch(t.type){case"setFixationStrength":T(t.data),e({success:!0});break;case"setReadingMode":E(t.data);break;case"setSaccadesIntervalInDOM":w(t.data);break;case"setlineHeight":P(t.data);break;case"getOrigin":e({data:window.location.origin});break;case"getReadingMode":e({data:document.body.classList.contains("br-bold")})}};var N;N=async()=>{y.runtime.onMessage.addListener(O);const{start:t}=f.init({getOrigin:async()=>new Promise(((t,n)=>{t(window.location.origin)})),subscribe:t=>{t.onPageLoad&&(E(t.onPageLoad),w(t.saccadesInterval),T(t.fixationStrength),P(t.lineHeight))}});t()},"complete"===document.readyState||"interactive"===document.readyState?setTimeout(N,1):document.addEventListener("DOMContentLoaded",N)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udGVudFNjcmlwdC9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udGVudFNjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZhdWx0IHByZWZlcmVuY2VzXG4vLyBhbmQgc291cmNlIG9mIHRydXRoXG4vLyBmb3IgYm90aCBnbG9iYWwgYW5kIGxvY2FsIHByZWZzXG4vLyBzbyBuZXcgcHJlZmVyZW5jZXMgc2hvdWxkIGJlXG4vLyBhZGRlZCBoZXJlXG5jb25zdCBkZWZhdWx0UHJlZnMgPSB7XG4gIHNhY2NhZGVzSW50ZXJ2YWw6IDAsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIGZpeGF0aW9uU3RyZW5ndGg6IDIsXG4gIHNjb3BlOiAnZ2xvYmFsJyxcbiAgLy8gb25QYWdlTG9hZCBhcHBseSBwcmVmcyBvbiBwYWdlIGxvYWRcbiAgb25QYWdlTG9hZDogZmFsc2UsXG59O1xuXG4vLyBzdWJzY3JpYmVycyBob2xkcyBsaXN0IG9mIGNhbGxiYWNrcyB0aGF0IHdpbGwgYmVcbi8vIGNhbGxlZCB3aGVuIHByZWZlcmVuY2VzIGNoYW5nZXNcbi8vIG9yIG9uIHN0YXJ0dXBcbi8vIFBvcHVsYXRlZCB2aWEgaW5pdCBjb25maWcuXG5jb25zdCBzdWJzY3JpYmVycyA9IFtdO1xuY29uc3Qgc3RhcnR1cFN1YnNjcmliZXJzID0gW107XG4vLyBnZXRPcmlnaW4gaXMgYSBjYWxsIGJhY2tcbi8vIHRoYXQgc2hvdWxkIHJldHVybiB0aGUgb3JpZ2luIG9mIHRoZSBwYWdlLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBjb250ZXh0LCB3aGV0aGVyIGl0IGJlXG4vLyBwb3B1cCBvciBjb250ZW50IHNjcmlwdCwgdGhleSBtaWdodCBub3Rcbi8vIGhhdmUgZGlyZWN0IGFjY2VzcyB0byBvcmlnaW4sIHNvIGxldCB0aGVtIGRlZmluZVxuLy8gaG93IG9yaWdpbiBzaG91bGQgYmUgXCJnZXRcIlxuLy8gUG9wdWxhdGVkIHZpYSBpbml0IGNvbmZpZy5cbmxldCBnZXRPcmlnaW47XG5cbi8vIGluaXQgaXMgdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBwcmVmZXJlbmNlXG4vLyB3aGljaCByZXR1cm5zIHRoZSBmb2xsb3dpbmc6XG4vLyAtIHN0YXJ0KCkgdG8ga2lja3N0YXJ0IHByZWZlcmVuY2Vcbi8vICAgIHJldHJpZXZhbCBhbmQgZGlzcGF0Y2ggdGhhdCBwcmVmZXJlbmNlXG4vLyAgICBmb3Igc3Vic2NyaWJlcnMgdG8ga25vd1xuLy8gL1xuLy8gLSBzZXRQcmVmcygpIHRvIHVwZGF0ZSBwcmVmZXJlbmNlc1xuLy8gICAgYW5kIGRpc3BhdGNoIHRoZSB1cGRhdGVzIGZvciBhbGxcbi8vICAgIHN1YnNjcmliZXJzXG4vLyAvXG4vLyAtIGRlZmF1bHRQcmVmcygpIC0gaXMgYSBnZXR0ZXIgdGhhdFxuLy8gICAgcmV0dXJucyB0aGUgZGVmYXVsdFByZWZlcmVuY2VzXG5mdW5jdGlvbiBpbml0KGNvbmZpZykge1xuICAvLyBjdXJyZW50bHkgb25seSBpbml0IGNhbiBhZGQgdG9cbiAgLy8gc3Vic2NyaWJlcnMgYnV0IGl0IGJlIGVhc3lcbiAgLy8gdG8gZXhwb3NlIGFub3RoZXIgYXBpIHRvIGFkZFxuICAvLyB0byBzdWJzY3JpYmVyIGlmIG5lZWRlZFxuICBzdWJzY3JpYmVycy5wdXNoKGNvbmZpZy5zdWJzY3JpYmUpO1xuICBpZiAoY29uZmlnLm9uU3RhcnR1cCkge1xuICAgIHN0YXJ0dXBTdWJzY3JpYmVycy5wdXNoKGNvbmZpZy5vblN0YXJ0dXApO1xuICB9XG4gIC8vIG5lY2Vzc2FyeSB0byBnZXQgdGhlIG9yaWdpblxuICAvLyB3aGljaCBpcyB1c2VkIHRvICdsb2NhbCcgQUtBIHBlci1zaXRlIHByZWZzXG4gIGdldE9yaWdpbiA9IGNvbmZpZy5nZXRPcmlnaW47XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydCxcbiAgICBzZXRQcmVmcyxcbiAgICBkZWZhdWx0UHJlZnM6ICgpID0+IGRlZmF1bHRQcmVmcyxcbiAgfTtcbn1cblxuLy8gUmV0cmlldmVzIHByZWZlcmVuY2VzIGZyb20gc3RvcmFnZSwgc3BlY2lmeSBpZlxuLy8gaXRzICdnbG9iYWwnIG9yICdsb2NhbCcgd2l0aCB0aGUgYWN0aW9uIHBhcmFtZXRlclxuYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVQcmVmcyhhY3Rpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcbiAgICAgIHsgbWVzc2FnZTogJ3JldHJpZXZlUHJlZnMnLCBhY3Rpb24gfSxcbiAgICAgIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSxcbiAgICApO1xuICB9KTtcbn1cblxuLy8gU3RvcmVzIHByZWZlcmVuY2VzIGludG8gc3RvcmFnZSwgc3BlY2lmeVxuLy8gaWYgaXRzICdnbG9iYWwnIG9yICdsb2NhbCcgd2l0aCB0aGUgYWN0aW9uIHBhcmFtZXRlclxuZnVuY3Rpb24gc3RvcmVQcmVmcyhwcmVmcywgYWN0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICB7IG1lc3NhZ2U6ICdzdG9yZVByZWZzJywgZGF0YTogcHJlZnMsIGFjdGlvbiB9LFxuICAgICAgYXN5bmMgKF8pID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfSk7XG59XG5cbi8vIFJldHJpZXZlcyBsb2NhbCBwcmVmZXJlbmNlcyBmcm9tIHN0b3JhZ2VcbmFzeW5jIGZ1bmN0aW9uIHJldHJpZXZlTG9jYWxQcmVmcygpIHtcbiAgcmV0dXJuIHJldHJpZXZlUHJlZnMoJ2xvY2FsJyk7XG59XG5cbi8vIFJldHJpZXZlcyBnbG9iYWwgcHJlZmVyZW5jZXMgZnJvbSBzdG9yYWdlXG5hc3luYyBmdW5jdGlvbiByZXRyaXZlR2xvYmFsUHJlZnMoKSB7XG4gIHJldHVybiByZXRyaWV2ZVByZWZzKCdnbG9iYWwnKTtcbn1cblxuLy8gU3RvcmVzIGxvY2FsIHByZWZlcmVuY2VzIGludG8gc3RvcmFnZVxuYXN5bmMgZnVuY3Rpb24gc3RvcmVMb2NhbFByZWZzKHByZWZzKSB7XG4gIHJldHVybiBzdG9yZVByZWZzKHByZWZzLCAnbG9jYWwnKTtcbn1cblxuLy8gU3RvcmUgZ2xvYmFsIHByZWZlcmVuY2VzIGludG8gc3RvcmFnZVxuYXN5bmMgZnVuY3Rpb24gc3RvcmVHbG9iYWxQcmVmcyhwcmVmcykge1xuICByZXR1cm4gc3RvcmVQcmVmcyhwcmVmcywgJ2dsb2JhbCcpO1xufVxuXG4vLyBzZXRQcmVmcyB1cGRhdGVzIHRoZSBwcmVmZXJlbmNlcyBpbiBzdG9yYWdlXG4vLyBhbmQgZGlzcGF0Y2ggdGhpcyB1cGRhdGUgdG8gYWxsIHN1YnNjcmliZXJzXG4vLyBwcmVmcyAtIGhhcyB0aGUgc2hhcGUgb2YgZGVmYXVsdFByZWZzXG4vLyBvciBhIGNhbGwgYmFjayB0aGF0IHJldHVybnMgdGhhdCBzaGFwZVxuLy8gYnV0IHlvdSBvbmx5IG5lZWQgdG8gcGFzcyB0aGUgYWN0dWFsIGZpZWxkc1xuLy8geW91IHdhbnQgdG8gdXBkYXRlLlxuYXN5bmMgZnVuY3Rpb24gc2V0UHJlZnMocHJlZnMpIHtcbiAgLy8gZ3JhYiB0aGUgY3VycmVudCBwcmVmc1xuICBjb25zdCBsb2NhbFByZWZzID0gYXdhaXQgcmV0cmlldmVMb2NhbFByZWZzKCk7XG4gIGxldCBnbG9iYWxQcmVmcyA9IGF3YWl0IHJldHJpdmVHbG9iYWxQcmVmcygpO1xuICBjb25zdCBvcmlnaW4gPSBhd2FpdCBnZXRPcmlnaW4oKTtcblxuICBsZXQgY3VycmVudFNjb3BlID0gbG9jYWxQcmVmc1tvcmlnaW5dLnNjb3BlO1xuICAvLyBpZiBwcmVmcyBpcyBhIGZ1bmN0aW9uLCBwYXNzIGluIHRoZSBjdXJyZW50XG4gIC8vIHByZWZzIGJhc2VkIG9uIHRoZSBzY29wZVxuICAvLyBhbmQgbmV3UHJlZnMgd2lsbCBiZSB0aGUgcmV0dXJuIHZhbCBvZiB0aGUgZnVuY3Rpb25cbiAgLy8gb3RoZXJ3aXNlIHRoZSBuZXdQcmVmcyB3aWxsIGp1c3QgYmUgdGhlIHByZWZzXG4gIGNvbnN0IG5ld1ByZWZzID0gdHlwZW9mIHByZWZzID09PSAnZnVuY3Rpb24nXG4gICAgPyBwcmVmcyhjdXJyZW50U2NvcGUgPT09ICdsb2NhbCdcbiAgICAgID8gbG9jYWxQcmVmc1tvcmlnaW5dXG4gICAgICA6IGdsb2JhbFByZWZzKVxuICAgIDogcHJlZnM7XG5cbiAgaWYgKG5ld1ByZWZzLnNjb3BlKSB7XG4gICAgY3VycmVudFNjb3BlID0gbmV3UHJlZnMuc2NvcGU7XG4gIH1cblxuICBpZiAoY3VycmVudFNjb3BlID09PSAnbG9jYWwnKSB7XG4gICAgbG9jYWxQcmVmc1tvcmlnaW5dID0ge1xuICAgICAgLi4ubG9jYWxQcmVmc1tvcmlnaW5dLFxuICAgICAgLi4ubmV3UHJlZnMsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxQcmVmcyA9IHtcbiAgICAgIC4uLmdsb2JhbFByZWZzLFxuICAgICAgLi4ubmV3UHJlZnMsXG4gICAgfTtcbiAgfVxuXG4gIC8vIHdlIG9ubHkgcmVhbGx5IGNhcmVcbiAgLy8gYWJvdXQgdGhlIHNjb3BlIG9mIGxvY2FsXG4gIC8vIGNhdXNlIHRoYXRzIGhvdyB3ZSBkZWNpZGVcbiAgLy8gaWYgdGhlIHNpdGUgd2FudHMgbG9jYWwgb3JcbiAgLy8gZ2xvYmFsIHNjb3BlXG4gIGxvY2FsUHJlZnNbb3JpZ2luXS5zY29wZSA9IGN1cnJlbnRTY29wZTtcbiAgZ2xvYmFsUHJlZnMuc2NvcGUgPSAnZ2xvYmFsJztcblxuICBkaXNwYXRjaFByZWZzVXBkYXRlKGN1cnJlbnRTY29wZSA9PT0gJ2xvY2FsJ1xuICAgID8gbG9jYWxQcmVmc1tvcmlnaW5dXG4gICAgOiBnbG9iYWxQcmVmcyk7XG5cbiAgc3RvcmVMb2NhbFByZWZzKGxvY2FsUHJlZnMpO1xuICBzdG9yZUdsb2JhbFByZWZzKGdsb2JhbFByZWZzKTtcbn1cblxuLy8gc3RhcnQgLSBraWNrc3RhcnRzIHRoZSByZXRyaWV2YWwgb2YgdGhlIGN1cnJlbnQgcHJlZmVyZW5jZVxuLy8gYW5kIGRpc3BhdGNoIHRoYXQgcHJlZnMgdG8gc3Vic2NyaWJlcnNcbi8vIGZvciBleGFtcGxlIHVzYWdlLCBzZWUgUHJlZmVyZW5jZS5pbml0IG9uXG4vLyBQb3B1cC9pbmRleC5qcyBhbmQgQ29udGVudFNjcmlwdC9pbmRleC5qc1xuYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGxldCBsb2NhbFByZWZzID0gYXdhaXQgcmV0cmlldmVMb2NhbFByZWZzKCk7XG4gIGxldCBnbG9iYWxQcmVmcyA9IGF3YWl0IHJldHJpdmVHbG9iYWxQcmVmcygpO1xuICBjb25zdCBvcmlnaW4gPSBhd2FpdCBnZXRPcmlnaW4oKTtcblxuICBpZiAobG9jYWxQcmVmcyA9PSBudWxsKSB7XG4gICAgbG9jYWxQcmVmcyA9IHt9O1xuICB9XG5cbiAgLy8ganVzdCBpbiBjYXNlIHRoZWlyIG1pc3NpbmcgYSBkZWZhdWx0IHByZWZzXG4gIC8vIGJlIHN1cmUgdG8gcGVwcGVyIHRoZSBkZWZhdWx0IHByZWZzXG4gIGxvY2FsUHJlZnNbb3JpZ2luXSA9IHsgLi4uZGVmYXVsdFByZWZzLCAuLi5sb2NhbFByZWZzW29yaWdpbl0gfTtcbiAgZ2xvYmFsUHJlZnMgPSB7IC4uLmRlZmF1bHRQcmVmcywgLi4uZ2xvYmFsUHJlZnMgfTtcblxuICBzdG9yZUxvY2FsUHJlZnMobG9jYWxQcmVmcyk7XG4gIHN0b3JlR2xvYmFsUHJlZnMoZ2xvYmFsUHJlZnMpO1xuXG4gIGlmIChsb2NhbFByZWZzW29yaWdpbl0uc2NvcGUgPT09ICdnbG9iYWwnKSB7XG4gICAgZGlzcGF0Y2hQcmVmc1VwZGF0ZShnbG9iYWxQcmVmcyk7XG4gICAgZGlzcGF0Y2hQcmVmc1VwZGF0ZShnbG9iYWxQcmVmcywgc3RhcnR1cFN1YnNjcmliZXJzKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwYXRjaFByZWZzVXBkYXRlKGxvY2FsUHJlZnNbb3JpZ2luXSk7XG4gICAgZGlzcGF0Y2hQcmVmc1VwZGF0ZShsb2NhbFByZWZzW29yaWdpbl0sIHN0YXJ0dXBTdWJzY3JpYmVycyk7XG4gIH1cbn1cblxuLy8gY2FsbHMgYWxsIHN1YnNjcmliZXIgY2FsbCBiYWNrXG4vLyBhbmQgcGFzcyB0aGVtIHRoZSBwcmVmZXJlbmNlIHZpYSBwcmVmc1xuLy8gcGFyYW1zXG5mdW5jdGlvbiBkaXNwYXRjaFByZWZzVXBkYXRlKHByZWZzLCBjYnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2JzKSkge1xuICAgIGNicy5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IocHJlZnMpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZXJzLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBjYihwcmVmcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0LFxufTtcbiIsIi8qKlxuICpcbiAqIHByb3ZpZGUgZGV2ZWxvcG1lbnQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIHJlcG9ydGluZyBlcnJvcnMsIGxvZ2dpbmcgZGF0YSBhbmQgbG9nZ2luZyB0aW1lXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgc3RhdGljICNpc1Byb2R1Y3Rpb25FbnYgPSAoKSA9PiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG4gIHN0YXRpYyBsb2dFcnJvciA9IChlcnJvcikgPT4ge1xuICAgIGlmICh0aGlzLiNpc1Byb2R1Y3Rpb25FbnYoKSkgcmV0dXJuO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9O1xuXG4gIC8qKlxuICpcbiAqIEBwYXJhbSAgey4uLmFueX0gZGF0YVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbiAgc3RhdGljIGxvZ0luZm8gPSAoLi4uZGF0YSkgPT4ge1xuICAgIGlmICh0aGlzLiNpc1Byb2R1Y3Rpb25FbnYoKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coLi4uZGF0YSk7XG4gIH07XG5cbiAgLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGVuZCBhbmQgZGlzcGxheSB0aW1lIHdoZW4gY2FsbGVkIGluIG5vbiBwcm9kdWN0aW9uIGVudmlyb25tZW50XG4gKi9cbiAgc3RhdGljIGxvZ1RpbWUgPSAobGFiZWwpID0+IHtcbiAgICBpZiAodGhpcy4jaXNQcm9kdWN0aW9uRW52KCkpIHtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBuby1vcH1cbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnNvbGUudGltZShsYWJlbCk7XG4gICAgcmV0dXJuICgpID0+IGNvbnNvbGUudGltZUVuZChsYWJlbCk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlT2JzZXJ2ZXIge1xuICAjREVGQVVMVF9NVVRBVElPTl9PUFRJT05TID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcblxuICAvKiogQHR5cGUgTXV0YXRpb25PYnNlcnZlciAqL1xuICAjb2JzZXJ2ZXI7XG5cbiAgLyoqIEB0eXBlIE11dGF0aW9uQ2FsbGJhY2sgKi9cbiAgI2NhbGxiYWNrO1xuXG4gIC8qKiBAdHlwZSBPYmVydmVyT3B0aW9ucyAqL1xuICAjb3B0aW9ucztcblxuICAvKiogQHR5cGUgTm9kZSAqL1xuICAjdGFyZ2V0O1xuXG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgb3B0aW9ucywgLyoqIEB0eXBlIE11dGF0aW9uQ2FsbGJhY2sgKi8gY2FsbGJhY2spIHtcbiAgICB0aGlzLiNvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB0aGlzLiNvcHRpb25zID0gb3B0aW9ucyA/PyB0aGlzLiNERUZBVUxUX01VVEFUSU9OX09QVElPTlM7XG4gICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG5cbiAgb2JzZXJ2ZSgpIHtcbiAgICB0aGlzLiNvYnNlcnZlci5vYnNlcnZlKHRoaXMuI3RhcmdldCwgdGhpcy4jb3B0aW9ucyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuI29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFByZWZlcmVuY2VzIGZyb20gJy4uL1ByZWZlcmVuY2VzJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBOb2RlT2JzZXJ2ZXIgZnJvbSAnLi9vYnNlcnZlcic7XG5cbmNvbnN0IHJ1blRpbWVIYW5kbGVyID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gY2hyb21lIDogYnJvd3NlcjtcblxuY29uc3QgRklYQVRJT05fQlJFQUtfUkFUSU8gPSAwLjMzO1xuY29uc3QgRklYQVRJT05fTE9XRVJfQk9VTkQgPSAwO1xuY29uc3QgREVGQVVMVF9TQUNDQURFU19JTlRFUlZBTCA9IDA7XG5jb25zdCBERUZBVUxUX0ZJWEFUSU9OX1NUUkVOR1RIID0gMztcblxuLy8gd2hpY2ggdGFnJ3MgY29udGVudCBzaG91bGQgYmUgaWdub3JlZCBmcm9tIGJvbGRlZFxuY29uc3QgSUdOT1JFX05PREVfVEFHUyA9IFsnU1RZTEUnLCAnU0NSSVBUJywgJ0JSLVNQQU4nLCAnQlItRklYQVRJT04nLCAnQlItQk9MRCddO1xuXG4vKiogQHR5cGUge05vZGVPYnNlcnZlcn0gKi9cbmxldCBvYnNlcnZlcjtcblxuLy8gbWFraW5nIGhhbGYgb2YgdGhlIGxldHRlcnMgaW4gYSB3b3JkIGJvbGRcbmZ1bmN0aW9uIGhpZ2hsaWdodFRleHQoc2VudGVuY2VUZXh0KSB7XG4gIHJldHVybiBzZW50ZW5jZVRleHRcbiAgICAucmVwbGFjZSgvXFxwe0x9Ky9ndSwgKHdvcmQpID0+IHtcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB3b3JkO1xuICAgICAgbGV0IG1pZFBvaW50ID0gMTtcbiAgICAgIGlmIChsZW5ndGggPiAzKSBtaWRQb2ludCA9IE1hdGgucm91bmQobGVuZ3RoIC8gMik7XG4gICAgICBjb25zdCBmaXJzdEhhbGYgPSB3b3JkLnNsaWNlKDAsIG1pZFBvaW50KTtcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSB3b3JkLnNsaWNlKG1pZFBvaW50KTtcbiAgICAgIGNvbnN0IGh0bWxXb3JkID0gYDxici1ib2xkIGNsYXNzPVwiYnItYm9sZFwiPiR7bWFrZUZpeGF0aW9ucyhmaXJzdEhhbGYpfTwvYnItYm9sZD4ke3NlY29uZEhhbGZ9YDtcbiAgICAgIHJldHVybiBodG1sV29yZDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUZpeGF0aW9ucygvKiogQHR5cGUgc3RyaW5nICovIHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGZpeGF0aW9uV2lkdGggPSBNYXRoLnJvdW5kKHRleHRDb250ZW50Lmxlbmd0aCAqIEZJWEFUSU9OX0JSRUFLX1JBVElPKTtcblxuICBpZiAoZml4YXRpb25XaWR0aCA9PT0gRklYQVRJT05fTE9XRVJfQk9VTkQpIHJldHVybiBgPGJyLWZpeGF0aW9uIGZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiPiR7dGV4dENvbnRlbnR9PC9ici1maXhhdGlvbj5gO1xuXG4gIGNvbnN0IHN0YXJ0ID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIGZpeGF0aW9uV2lkdGgpO1xuICBjb25zdCBlbmQgPSB0ZXh0Q29udGVudC5zdWJzdHJpbmcoKHRleHRDb250ZW50Lmxlbmd0aCkgLSBmaXhhdGlvbldpZHRoLCB0ZXh0Q29udGVudC5sZW5ndGgpO1xuXG4gIGNvbnN0IHdlYWtGaXhhdGlvbiA9IGA8YnItZml4YXRpb24gZml4YXRpb24tc3RyZW5ndGg9XCIxXCI+JHtzdGFydH08L2JyLWZpeGF0aW9uPmA7XG4gIGNvbnN0IHN0cm9uZ0ZpeGF0aW9uID0gYDxici1maXhhdGlvbiBmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIj4ke2VuZH08L2JyLWZpeGF0aW9uPmA7XG4gIGNvbnN0IG1pbGRGaXhhdGlvbiA9ICgodGV4dENvbnRlbnQubGVuZ3RoIC0gKGZpeGF0aW9uV2lkdGggKiAyKSkgPiAwKVxuICAgID8gYDxici1maXhhdGlvbiBmaXhhdGlvbi1zdHJlbmd0aD1cIjJcIj4ke3RleHRDb250ZW50LnN1YnN0cmluZyhmaXhhdGlvbldpZHRoLCAodGV4dENvbnRlbnQubGVuZ3RoKSAtIGZpeGF0aW9uV2lkdGgpfTwvYnItZml4YXRpb24+YCA6ICcnO1xuXG4gIHJldHVybiB3ZWFrRml4YXRpb24gKyBtaWxkRml4YXRpb24gKyBzdHJvbmdGaXhhdGlvbjtcbn1cblxuZnVuY3Rpb24gcGFyc2VOb2RlKC8qKiBAdHlwZSBFbGVtZW50ICovIG5vZGUpIHtcbiAgLy8gc29tZSB3ZWJzaXRlcyBhZGQgPHN0eWxlPiwgPHNjcmlwdD4gdGFncyBpbiB0aGUgPGJvZHk+LCBpZ25vcmUgdGhlc2UgdGFnc1xuICBpZiAoIW5vZGU/LnBhcmVudEVsZW1lbnQ/LnRhZ05hbWUgfHwgSUdOT1JFX05PREVfVEFHUy5pbmNsdWRlcyhub2RlLnBhcmVudEVsZW1lbnQudGFnTmFtZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgbm9kZS5ub2RlVmFsdWUubGVuZ3RoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyLXNwYW4nKTtcblxuICAgICAgYnJTcGFuLmlubmVySFRNTCA9IGhpZ2hsaWdodFRleHQobm9kZS5ub2RlVmFsdWUpO1xuXG4gICAgICBpZiAoYnJTcGFuLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSByZXR1cm47XG5cbiAgICAgIG5vZGUucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoYnJTcGFuLCBub2RlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gbm8tb3BcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG5vZGUuaGFzQ2hpbGROb2RlcygpKSBbLi4ubm9kZS5jaGlsZE5vZGVzXS5mb3JFYWNoKHBhcnNlTm9kZSk7XG59XG5cbmNvbnN0IHNldFJlYWRpbmdNb2RlID0gKGVuYWJsZVJlYWRpbmcpID0+IHtcbiAgY29uc3QgZW5kVGltZXIgPSBMb2dnZXIubG9nVGltZSgnVG9nZ2xlUmVhZGluZy1UaW1lJyk7XG4gIHRyeSB7XG4gICAgaWYgKGVuYWJsZVJlYWRpbmcpIHtcbiAgICAgIGNvbnN0IGJvbGRlZEVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JyLWJvbGQnKTtcblxuICAgICAgLy8gbWFrZXMgc3VyZSB0byBvbmx5IHJ1biBvbmNlIHJlZ2FkbGVzcyBvZiBob3cgbWFueSB0aW1lc1xuICAgICAgLy8gc2V0UmVhZGluZ01vZGUodHJ1ZSkgaXMgY2FsbGVkLCBjb25zZWN1dGl2ZWx5XG4gICAgICBpZiAoYm9sZGVkRWxlbWVudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICBhZGRTdHlsZXMoKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogYWRkIC5ici1ib2xkIGlmIGl0IHdhcyBub3QgcHJlc2VudCBvciBpZiBlbmFibGVSZWFkaW5nIGlzIHRydWVcbiAgICAgICAqIGVuYWJsZVJlYWRpbmcgPSB0cnVlIG1lYW5zIGFkZCAuYnItYm9sZCB0byBkb2N1bWVudC5ib2R5IHdoZW4gYSBwYWdlIGxvYWRzXG4gICAgICAgKi9cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYnItYm9sZCcpO1xuICAgICAgWy4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW5dLmZvckVhY2gocGFyc2VOb2RlKTtcblxuICAgICAgLyoqIG1ha2UgYW4gb2JzZXJ2ZXIgaWYgb25lIGRvZXMgbm90IGV4aXN0IGFuZCAuYnItYm9sZCBpcyBwcmVzZW50IG9uIGJvZHkvYWN0aXZlICovXG4gICAgICBpZiAoIW9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyID0gbmV3IE5vZGVPYnNlcnZlcihkb2N1bWVudC5ib2R5LCBudWxsLCBtdXRhdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JyLWJvbGQnKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kZXN0cm95KCk7XG4gICAgICAgIG9ic2VydmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgTG9nZ2VyLmxvZ0Vycm9yKGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBlbmRUaW1lcigpO1xuICB9XG59O1xuXG5jb25zdCBzZXRTYWNjYWRlc0ludGVydmFsSW5ET00gPSAoZGF0YSkgPT4ge1xuICBjb25zdCBzYWNjYWRlc0ludGVydmFsID0gZGF0YSA9PSBudWxsID8gMCA6IGRhdGE7XG4gIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdzYWNjYWRlcy1pbnRlcnZhbCcsIHNhY2NhZGVzSW50ZXJ2YWwpO1xufTtcblxuY29uc3Qgc2V0Rml4YXRpb25TdHJlbmd0aCA9IChkYXRhKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdmaXhhdGlvbi1zdHJlbmd0aCcsIGRhdGEpO1xufTtcblxuY29uc3Qgc2V0TGluZUhlaWdodCA9IChsaW5lSGVpZ2h0KSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tYnItbGluZS1oZWlnaHQnLCBsaW5lSGVpZ2h0KTtcbn07XG5cbmZ1bmN0aW9uIG11dGF0aW9uQ2FsbGJhY2soLyoqIEB0eXBlIE11dGF0aW9uUmVjb3JkW10gKi8gbXV0YXRpb25SZWNvcmRzKSB7XG4gIExvZ2dlci5sb2dJbmZvKCdtdXRhdGlvbkNhbGxiYWNrIGZpcmVkICcsIG11dGF0aW9uUmVjb3Jkcy5sZW5ndGgpO1xuICBtdXRhdGlvblJlY29yZHMuZm9yRWFjaCgoeyB0eXBlLCBhZGRlZE5vZGVzIH0pID0+IHtcbiAgICBpZiAodHlwZSAhPT0gJ2NoaWxkTGlzdCcpIHJldHVybjtcblxuICAgIGFkZGVkTm9kZXM/LmZvckVhY2gocGFyc2VOb2RlKTtcbiAgfSk7XG59XG5cbmNvbnN0IG9uQ2hyb21lUnVudGltZU1lc3NhZ2UgPSAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICBjYXNlICdzZXRGaXhhdGlvblN0cmVuZ3RoJzoge1xuICAgICAgc2V0Rml4YXRpb25TdHJlbmd0aChtZXNzYWdlLmRhdGEpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdzZXRSZWFkaW5nTW9kZSc6IHtcbiAgICAgIHNldFJlYWRpbmdNb2RlKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnc2V0U2FjY2FkZXNJbnRlcnZhbEluRE9NJzoge1xuICAgICAgc2V0U2FjY2FkZXNJbnRlcnZhbEluRE9NKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnc2V0bGluZUhlaWdodCc6IHtcbiAgICAgIHNldExpbmVIZWlnaHQobWVzc2FnZS5kYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdnZXRPcmlnaW4nOiB7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luIH0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2dldFJlYWRpbmdNb2RlJzoge1xuICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyLWJvbGQnKSB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZnVuY3Rpb24gZG9jUmVhZHkoZm4pIHtcbiAgLy8gc2VlIGlmIERPTSBpcyBhbHJlYWR5IGF2YWlsYWJsZVxuICBpZiAoXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJ1xuICAgIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZSdcbiAgKSB7XG4gICAgLy8gY2FsbCBvbiBuZXh0IGF2YWlsYWJsZSB0aWNrXG4gICAgc2V0VGltZW91dChmbiwgMSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXMoKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgLmJyLWJvbGRbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdIDppcyhcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjBcIl0gYnItYm9sZCBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLCBcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjFcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgybisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMlwiXSBici1ib2xkOm50aC1vZi10eXBlKDNuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjFcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIzXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNG4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjRcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg1bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdXG4gICAgICApIHsgXG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyBkaXNwbGF5OiBpbmxpbmU7IGxpbmUtaGVpZ2h0OiB2YXIoLS1ici1saW5lLWhlaWdodCxpbml0aWFsKTsgXG4gICAgfVxuXG4gICAgLmJyLWJvbGRbZml4YXRpb24tc3RyZW5ndGg9XCIyXCJdIDppcyhcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjBcIl0gYnItYm9sZCBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLCBcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjFcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgybisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMlwiXSBici1ib2xkOm50aC1vZi10eXBlKDNuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjFcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIzXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNG4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjRcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg1bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIwXCJdIGJyLWJvbGQgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSwgXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIxXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoMm4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjJcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgzbisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIyXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiM1wiXSBici1ib2xkOm50aC1vZi10eXBlKDRuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjJcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCI0XCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNW4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXVxuICAgICAgKSB7IFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgZGlzcGxheTogaW5saW5lOyBsaW5lLWhlaWdodDogdmFyKC0tYnItbGluZS1oZWlnaHQsaW5pdGlhbCk7IFxuICAgIH1cblxuICAgIC5ici1ib2xkW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiM1wiXSA6aXMoXG5cbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjBcIl0gYnItYm9sZCBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLCBcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjFcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgybisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMlwiXSBici1ib2xkOm50aC1vZi10eXBlKDNuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjFcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIzXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNG4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMVwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjRcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg1bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIxXCJdLFxuICAgICAgXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIwXCJdIGJyLWJvbGQgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSwgXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIxXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoMm4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjJcIl0gYnItYm9sZDpudGgtb2YtdHlwZSgzbisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIyXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiM1wiXSBici1ib2xkOm50aC1vZi10eXBlKDRuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjJcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCI0XCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoNW4rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiMlwiXVxuICAgICAgLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMFwiXSBici1ib2xkIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIl0sIFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiMVwiXSBici1ib2xkOm50aC1vZi10eXBlKDJuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIl0sXG4gICAgICBbc2FjY2FkZXMtaW50ZXJ2YWw9XCIyXCJdIGJyLWJvbGQ6bnRoLW9mLXR5cGUoM24rMSkgW2ZpeGF0aW9uLXN0cmVuZ3RoPVwiM1wiXSxcbiAgICAgIFtzYWNjYWRlcy1pbnRlcnZhbD1cIjNcIl0gYnItYm9sZDpudGgtb2YtdHlwZSg0bisxKSBbZml4YXRpb24tc3RyZW5ndGg9XCIzXCJdLFxuICAgICAgW3NhY2NhZGVzLWludGVydmFsPVwiNFwiXSBici1ib2xkOm50aC1vZi10eXBlKDVuKzEpIFtmaXhhdGlvbi1zdHJlbmd0aD1cIjNcIl1cbiAgICAgICkgeyBcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7IGRpc3BsYXk6IGlubGluZTsgbGluZS1oZWlnaHQ6IHZhcigtLWJyLWxpbmUtaGVpZ2h0LGluaXRpYWwpOyBcbiAgICB9XG4gICAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmRvY1JlYWR5KGFzeW5jICgpID0+IHtcbiAgcnVuVGltZUhhbmRsZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25DaHJvbWVSdW50aW1lTWVzc2FnZSk7XG5cbiAgY29uc3QgeyBzdGFydCB9ID0gUHJlZmVyZW5jZXMuaW5pdCh7XG4gICAgZ2V0T3JpZ2luOiBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgcmVzb2x2ZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcbiAgICB9KSxcbiAgICBzdWJzY3JpYmU6IChwcmVmcykgPT4ge1xuICAgICAgaWYgKCFwcmVmcy5vblBhZ2VMb2FkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFJlYWRpbmdNb2RlKHByZWZzLm9uUGFnZUxvYWQpO1xuICAgICAgc2V0U2FjY2FkZXNJbnRlcnZhbEluRE9NKHByZWZzLnNhY2NhZGVzSW50ZXJ2YWwpO1xuICAgICAgc2V0Rml4YXRpb25TdHJlbmd0aChwcmVmcy5maXhhdGlvblN0cmVuZ3RoKTtcbiAgICAgIHNldExpbmVIZWlnaHQocHJlZnMubGluZUhlaWdodCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgc3RhcnQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRQcmVmcyIsInNhY2NhZGVzSW50ZXJ2YWwiLCJsaW5lSGVpZ2h0IiwiZml4YXRpb25TdHJlbmd0aCIsInNjb3BlIiwib25QYWdlTG9hZCIsInN1YnNjcmliZXJzIiwic3RhcnR1cFN1YnNjcmliZXJzIiwiZ2V0T3JpZ2luIiwiYXN5bmMiLCJyZXRyaWV2ZVByZWZzIiwiYWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJkYXRhIiwic3RvcmVQcmVmcyIsInByZWZzIiwicmV0cmlldmVMb2NhbFByZWZzIiwicmV0cml2ZUdsb2JhbFByZWZzIiwic3RvcmVMb2NhbFByZWZzIiwic3RvcmVHbG9iYWxQcmVmcyIsInNldFByZWZzIiwibG9jYWxQcmVmcyIsImdsb2JhbFByZWZzIiwib3JpZ2luIiwiY3VycmVudFNjb3BlIiwibmV3UHJlZnMiLCJkaXNwYXRjaFByZWZzVXBkYXRlIiwic3RhcnQiLCJjYnMiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2IiLCJpbml0IiwiY29uZmlnIiwicHVzaCIsInN1YnNjcmliZSIsIm9uU3RhcnR1cCIsIkxvZ2dlciIsInN0YXRpYyIsInByb2Nlc3MiLCJlcnJvciIsInRoaXMiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ0aW1lIiwidGltZUVuZCIsIk5vZGVPYnNlcnZlciIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJjb25zdHJ1Y3RvciIsInRhcmdldCIsIm9wdGlvbnMiLCJjYWxsYmFjayIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGVzdHJveSIsImRpc2Nvbm5lY3QiLCJydW5UaW1lSGFuZGxlciIsImJyb3dzZXIiLCJJR05PUkVfTk9ERV9UQUdTIiwib2JzZXJ2ZXIiLCJoaWdobGlnaHRUZXh0Iiwic2VudGVuY2VUZXh0IiwicmVwbGFjZSIsIndvcmQiLCJsZW5ndGgiLCJtaWRQb2ludCIsIk1hdGgiLCJyb3VuZCIsImZpcnN0SGFsZiIsInNsaWNlIiwic2Vjb25kSGFsZiIsImh0bWxXb3JkIiwidGV4dENvbnRlbnQiLCJmaXhhdGlvbldpZHRoIiwic3Vic3RyaW5nIiwiZW5kIiwid2Vha0ZpeGF0aW9uIiwic3Ryb25nRml4YXRpb24iLCJtaWxkRml4YXRpb24iLCJtYWtlRml4YXRpb25zIiwicGFyc2VOb2RlIiwibm9kZSIsInBhcmVudEVsZW1lbnQiLCJ0YWdOYW1lIiwiaW5jbHVkZXMiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJub2RlVmFsdWUiLCJiclNwYW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZEVsZW1lbnRDb3VudCIsInJlcGxhY2VDaGlsZCIsImhhc0NoaWxkTm9kZXMiLCJjaGlsZE5vZGVzIiwic2V0UmVhZGluZ01vZGUiLCJlbmFibGVSZWFkaW5nIiwiZW5kVGltZXIiLCJsb2dUaW1lIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImFkZFN0eWxlcyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGlsZHJlbiIsIm11dGF0aW9uQ2FsbGJhY2siLCJyZW1vdmUiLCJsb2dFcnJvciIsInNldFNhY2NhZGVzSW50ZXJ2YWxJbkRPTSIsInNldEF0dHJpYnV0ZSIsInNldEZpeGF0aW9uU3RyZW5ndGgiLCJzZXRMaW5lSGVpZ2h0Iiwic2V0UHJvcGVydHkiLCJtdXRhdGlvblJlY29yZHMiLCJsb2dJbmZvIiwidHlwZSIsImFkZGVkTm9kZXMiLCJvbkNocm9tZVJ1bnRpbWVNZXNzYWdlIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwic3VjY2VzcyIsIndpbmRvdyIsImxvY2F0aW9uIiwiY29udGFpbnMiLCJmbiIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiUHJlZmVyZW5jZXMiLCJfIiwicmVhZHlTdGF0ZSIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==