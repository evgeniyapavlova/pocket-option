import{n as b,s as p}from"./scheduler.B1KvmYb7.js";const e=[];function g(o,l=b){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const c=!e.length;for(const s of i)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(n=l(r,u)||b),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_t5mkdu)==null?void 0:f.base)??"/pocket-option";var a;const k=((a=globalThis.__sveltekit_t5mkdu)==null?void 0:a.assets)??d;export{k as a,d as b,g as w};
