import{s as L,n as b}from"../chunks/scheduler.B1KvmYb7.js";import{S as H,i as O,e as f,s as C,c as _,D as B,f as D,a as y,d as h,w as r,g as E,h as c,v as X,t as S,b as j,k as w,l as I,m as P,n as q,o as x,p as R,F as z}from"../chunks/index.DWHLK2oq.js";import{I as G}from"../chunks/IntroH1.DdmOVY5J.js";import{e as W}from"../chunks/each.D6YF6ztN.js";import{C as Z}from"../chunks/ContentWrap.D_NsQUu0.js";const F=!0,ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"})),N=""+new URL("../assets/meta_img_minimum_deposit.CairMGHu.jpg",import.meta.url).href,J=[{method:"Visa, Mastercard (3DS2)",dep:"$5",time:"~1 min."},{method:"Perfect Money",dep:"$5",time:"~1 min."},{method:"Advcash",dep:"$5",time:"Instant"},{method:"WebMoney",dep:"$5",time:"Instant"},{method:"Payeer",dep:"$5",time:"1 min."},{method:"Jeton",dep:"$5",time:"Instant"},{method:"Bitcoin (BTC)",dep:"$50",time:"~28 min."},{method:"Tether (USDT)",dep:"$10",time:"~10 min."},{method:"Binance Pay",dep:"$5",time:"~1 min."},{method:"Tether TRC-20",dep:"$10",time:"~11 min."},{method:"Litecoin (LTC)",dep:"$50",time:"~12 min."},{method:"Ethereum (ETH) ERC-20",dep:"$20",time:"~42 min."},{method:"Bitcoin Cash (BCH)",dep:"$10",time:"3-5 min."},{method:"USD Coin (USDC) ERC-20",dep:"$20",time:"~31 min."},{method:"Stellar (XLM)",dep:"$10",time:"~1 hour"},{method:"Tether ERC-20",dep:"$20",time:"~21 min."},{method:"USD Coin (USDC)",dep:"$5",time:"~12 min."},{method:"Tron (TRX)",dep:"$25",time:"~47 min."},{method:"Ripple (XRP)",dep:"$30",time:"~56 min."},{method:"Ethereum Classic (ETC)",dep:"$10",time:"~1 hour"},{method:"USD Coin (USDC) TRC-20",dep:"$10",time:"~21 min."},{method:"Tether Polygon (USDT)",dep:"$10",time:"~22 min."},{method:"Shiba Inu (SHIB)",dep:"$40",time:"~23 min."},{method:"Dogecoin (DOGE)",dep:"$50",time:"~19 min."},{method:"Polygon (MATIC)",dep:"$50",time:"3-5 min."},{method:"Chainlink (LINK)",dep:"$50",time:"3-5 min."},{method:"Cardano (ADA)",dep:"$50",time:"~29 min."},{method:"Binance Coin (BNBBSC)",dep:"$100",time:"~1 hour"},{method:"Cosmos (ATOM)",dep:"$50",time:"3-5 min."},{method:"Toncoin (TON)",dep:"$50",time:"3-5 min."},{method:"Uniswap (UNI)",dep:"$50",time:"3-5 min."},{method:"Algorand (ALGO)",dep:"$50",time:"~22 min."},{method:"Polkadot (DOT)",dep:"$50",time:"~16 min."},{method:"Cronos (CRO)",dep:"$50",time:"~17 min."},{method:"Dai (DAI)",dep:"$50",time:"~2 hours"},{method:"Zcash (ZEC)",dep:"$110",time:"~7 min."},{method:"ApeCoin (APE)",dep:"$50",time:"3-5 min."},{method:"Avalanche (AVAX)",dep:"$50",time:"~22 min."}];function K(u,e,m){const n=u.slice();return n[0]=e[m].method,n[1]=e[m].dep,n[2]=e[m].time,n}function Q(u){let e,m,n,s,t,a="USD",p,$,g,T,d,o,l;return{c(){e=f("tr"),m=f("td"),n=S(u[0]),s=C(),t=f("td"),t.textContent=a,p=C(),$=f("td"),g=S(u[1]),T=C(),d=f("td"),o=S(u[2]),l=C(),this.h()},l(i){e=_(i,"TR",{class:!0});var v=y(e);m=_(v,"TD",{class:!0});var M=y(m);n=j(M,u[0]),M.forEach(h),s=D(v),t=_(v,"TD",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-dczofm"&&(t.textContent=a),p=D(v),$=_(v,"TD",{class:!0});var k=y($);g=j(k,u[1]),k.forEach(h),T=D(v),d=_(v,"TD",{class:!0});var V=y(d);o=j(V,u[2]),V.forEach(h),l=D(v),v.forEach(h),this.h()},h(){r(m,"class","svelte-j4si8q"),r(t,"class","svelte-j4si8q"),r($,"class","svelte-j4si8q"),r(d,"class","svelte-j4si8q"),r(e,"class","svelte-j4si8q")},m(i,v){E(i,e,v),c(e,m),c(m,n),c(e,s),c(e,t),c(e,p),c(e,$),c($,g),c(e,T),c(e,d),c(d,o),c(e,l)},p:b,d(i){i&&h(e)}}}function Y(u){let e,m=`To fund your deposit, there are multiple payment methods available, and the minimum deposit and
	processing time may vary depending on the chosen payment method.<br/>All possible payment methods
	are listed in the table below:`,n,s,t,a,p,$='<th class="svelte-j4si8q">Payment Method</th> <th class="svelte-j4si8q">Currency</th> <th class="svelte-j4si8q">Minimum Deposit</th> <th class="svelte-j4si8q">Processing Time</th>',g,T=W(J),d=[];for(let o=0;o<T.length;o+=1)d[o]=Q(K(u,T,o));return{c(){e=f("div"),e.innerHTML=m,n=C(),s=f("div"),t=f("div"),a=f("table"),p=f("tr"),p.innerHTML=$,g=C();for(let o=0;o<d.length;o+=1)d[o].c();this.h()},l(o){e=_(o,"DIV",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-ka6263"&&(e.innerHTML=m),n=D(o),s=_(o,"DIV",{class:!0});var l=y(s);t=_(l,"DIV",{class:!0});var i=y(t);a=_(i,"TABLE",{class:!0});var v=y(a);p=_(v,"TR",{"data-svelte-h":!0}),B(p)!=="svelte-1ipahz5"&&(p.innerHTML=$),g=D(v);for(let M=0;M<d.length;M+=1)d[M].l(v);v.forEach(h),i.forEach(h),l.forEach(h),this.h()},h(){r(e,"class","text"),r(a,"class","svelte-j4si8q"),r(t,"class","table-wrap svelte-j4si8q"),r(s,"class","container svelte-j4si8q")},m(o,l){E(o,e,l),E(o,n,l),E(o,s,l),c(s,t),c(t,a),c(a,p),c(a,g);for(let i=0;i<d.length;i+=1)d[i]&&d[i].m(a,null)},p:b,i:b,o:b,d(o){o&&(h(e),h(n),h(s)),X(d,o)}}}class ee extends H{constructor(e){super(),O(this,e,null,Y,L,{})}}function te(u){let e;return{c(){e=S("Minimum Deposit")},l(m){e=j(m,"Minimum Deposit")},m(m,n){E(m,e,n)},d(m){m&&h(e)}}}function ne(u){let e,m;return e=new ee({}),{c(){w(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,s){P(e,n,s),m=!0},i(n){m||(q(e.$$.fragment,n),m=!0)},o(n){x(e.$$.fragment,n),m=!1},d(n){R(e,n)}}}function me(u){let e,m,n,s;return e=new G({props:{btnText:"Register",$$slots:{default:[te]},$$scope:{ctx:u}}}),n=new Z({props:{$$slots:{default:[ne]},$$scope:{ctx:u}}}),{c(){w(e.$$.fragment),m=C(),w(n.$$.fragment)},l(t){I(e.$$.fragment,t),m=D(t),I(n.$$.fragment,t)},m(t,a){P(e,t,a),E(t,m,a),P(n,t,a),s=!0},p(t,[a]){const p={};a&1&&(p.$$scope={dirty:a,ctx:t}),e.$set(p);const $={};a&1&&($.$$scope={dirty:a,ctx:t}),n.$set($)},i(t){s||(q(e.$$.fragment,t),q(n.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),x(n.$$.fragment,t),s=!1},d(t){t&&h(m),R(e,t),R(n,t)}}}class oe extends H{constructor(e){super(),O(this,e,null,me,L,{})}}function ie(u){let e,m,n,s,t,a,p,$,g,T,d,o;return document.title=e=A,d=new oe({}),{c(){m=f("meta"),n=f("meta"),s=f("meta"),t=f("meta"),a=f("meta"),p=f("meta"),$=f("meta"),g=f("meta"),T=C(),w(d.$$.fragment),this.h()},l(l){const i=z("svelte-10xnsut",document.head);m=_(i,"META",{name:!0,content:!0}),n=_(i,"META",{property:!0,content:!0}),s=_(i,"META",{property:!0,content:!0}),t=_(i,"META",{property:!0,content:!0}),a=_(i,"META",{name:!0,content:!0}),p=_(i,"META",{name:!0,content:!0}),$=_(i,"META",{name:!0,content:!0}),g=_(i,"META",{name:!0,content:!0}),i.forEach(h),T=D(l),I(d.$$.fragment,l),this.h()},h(){r(m,"name","description"),r(m,"content",U),r(n,"property","og:title"),r(n,"content",A),r(s,"property","og:description"),r(s,"content",U),r(t,"property","og:image"),r(t,"content",N),r(a,"name","twitter:card"),r(a,"content","summary_large_image"),r(p,"name","twitter:title"),r(p,"content",A),r($,"name","twitter:description"),r($,"content",U),r(g,"name","twitter:image"),r(g,"content",N)},m(l,i){c(document.head,m),c(document.head,n),c(document.head,s),c(document.head,t),c(document.head,a),c(document.head,p),c(document.head,$),c(document.head,g),E(l,T,i),P(d,l,i),o=!0},p(l,[i]){(!o||i&0)&&e!==(e=A)&&(document.title=e)},i(l){o||(q(d.$$.fragment,l),o=!0)},o(l){x(d.$$.fragment,l),o=!1},d(l){l&&h(T),h(m),h(n),h(s),h(t),h(a),h(p),h($),h(g),R(d,l)}}}const A="Minimum Deposit - Pocket Option",U="There are multiple payment methods available, and the minimum deposit and processing time may vary depending on the chosen payment method";class he extends H{constructor(e){super(),O(this,e,null,ie,L,{})}}export{he as component,ce as universal};
