function x(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function B(){return Object.create(null)}function j(t){t.forEach(E)}function C(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function F(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function P(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const c of n)c(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(q(n,e))}function U(t,n,e,c){if(t){const o=m(t,n,e,c);return t[0](o)}}function m(t,n,e,c){return t[1]&&c?w(e.ctx.slice(),t[1](c(n))):e.ctx}function G(t,n,e,c){if(t[2]&&c){const o=t[2](c(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function H(t,n,e,c,o,a){if(o){const _=m(n,e,c,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}function J(t){return t??""}let f;function h(t){f=t}function g(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){g().$$.on_mount.push(t)}function L(t){g().$$.after_update.push(t)}function N(t){g().$$.on_destroy.push(t)}function Q(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const l=[],y=[];let u=[];const p=[],k=Promise.resolve();let b=!1;function O(){b||(b=!0,k.then(z))}function R(){return O(),k}function v(t){u.push(t)}function T(t){p.push(t)}const d=new Set;let r=0;function z(){if(r!==0)return;const t=f;do{try{for(;r<l.length;){const n=l[r];r++,h(n),M(n.$$)}}catch(n){throw l.length=0,r=0,n}for(h(null),l.length=0,r=0;y.length;)y.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function V(t){const n=[],e=[];u.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),u=n}export{O as A,J as B,N as C,U as a,G as b,S as c,L as d,y as e,Q as f,I as g,T as h,F as i,C as j,v as k,A as l,B as m,x as n,K as o,z as p,P as q,j as r,D as s,R as t,H as u,V as v,f as w,h as x,E as y,l as z};
