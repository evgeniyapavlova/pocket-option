import{n as b,s as p}from"./scheduler.B1KvmYb7.js";const e=[];function d(o,l=b){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const c=!e.length;for(const s of i)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(n=l(r,f)||b),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_14svm58)==null?void 0:u.base)??"/pocket-option";var a;const m=((a=globalThis.__sveltekit_14svm58)==null?void 0:a.assets)??h;export{m as a,h as b,d as w};
