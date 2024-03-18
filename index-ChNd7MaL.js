import{S as B,i as $,s as j,e as g,a as k,b as z,c as d,d as b,n as v,f as _,t as H,g as I,h as x,j as V,k as A,m as C,l as h,o as P,p as w,q as G,r as O,u as q}from"./index-DBMHiqZy.js";function y(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function D(o){let e;return{c(){e=g("style"),e.textContent=`#bg-blob {\r
			opacity: 0;\r
			transition: opacity 0.5s;\r
			transition-delay: 0.2s;\r
		}`},m(s,t){b(s,e,t)},d(s){s&&_(e)}}}function N(o){let e,s,t,l=!o[0]&&D();return{c(){e=g("div"),e.innerHTML='<div id="bg-blob" class="inline-block absolute size-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2 svelte-xrxc2i"></div> <div id="bg-mask" class="size-full bg-slate-950 svelte-xrxc2i"></div>',s=k(),l&&l.c(),t=z(),d(e,"id","bg"),d(e,"class","absolute size-full bg-[#141f38] overflow-hidden")},m(r,n){b(r,e,n),b(r,s,n),l&&l.m(r,n),b(r,t,n)},p:v,i:v,o:v,d(r){r&&(_(e),_(s),_(t)),l&&l.d(r)}}}function W(o){let e=null,s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return s||(document.addEventListener("mouseenter",()=>{e===null&&(e=document.getElementById("bg-blob")),e!==null&&(e.style.opacity="1")}),document.addEventListener("mouseleave",()=>{e!==null&&(e.style.opacity="0")}),document.addEventListener("mousemove",t=>{e==null||e.animate({left:`${t.pageX}px`,top:`${t.pageY}px`},{duration:2e3,fill:"forwards"})})),[s]}class X extends B{constructor(e){super(),$(this,e,W,N,j,{})}}function Y(o){let e,s,t,l,r,n,a;return{c(){e=g("div"),s=g("div"),t=g("h2"),l=H(o[0]),r=k(),n=g("img"),d(t,"class","absolute text-3xl font-serif tracking-wider leading-7 pr-5 bottom-[10%] pl-6"),d(s,"class","absolute size-full opacity-0 z-[1] duration-150 svelte-8ext5t"),d(n,"class","size-full object-cover rounded-[inherit] hover:scale-110 duration-100"),I(n.src,a=o[1])||d(n,"src",a),d(n,"alt",o[0]),d(e,"class","image relative h-full mx-[1%] aspect-[6/7] rounded-3xl overflow-hidden svelte-8ext5t")},m(i,p){b(i,e,p),x(e,s),x(s,t),x(t,l),x(e,r),x(e,n)},p(i,[p]){p&1&&V(l,i[0]),p&2&&!I(n.src,a=i[1])&&d(n,"src",a),p&1&&d(n,"alt",i[0])},i:v,o:v,d(i){i&&_(e)}}}function F(o,e,s){let{name:t=""}=e,{src:l=""}=e;return o.$$set=r=>{"name"in r&&s(0,t=r.name),"src"in r&&s(1,l=r.src)},[t,l]}class J extends B{constructor(e){super(),$(this,e,F,Y,j,{name:0,src:1})}}function L(o,e,s){const t=o.slice();return t[1]=e[s],t}function M(o,e,s){const t=o.slice();return t[4]=e[s],t}function S(o){let e,s;return e=new J({props:{name:o[4][0],src:o[4][1]}}),{c(){A(e.$$.fragment)},m(t,l){C(e,t,l),s=!0},p:v,i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function T(o){let e,s,t=y(o[0]),l=[];for(let n=0;n<t.length;n+=1)l[n]=S(M(o,t,n));const r=n=>w(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=z()},m(n,a){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(n,a);b(n,e,a),s=!0},p(n,a){if(a&1){t=y(n[0]);let i;for(i=0;i<t.length;i+=1){const p=M(n,t,i);l[i]?(l[i].p(p,a),h(l[i],1)):(l[i]=S(p),l[i].c(),h(l[i],1),l[i].m(e.parentNode,e))}for(q(),i=t.length;i<l.length;i+=1)r(i);P()}},i(n){if(!s){for(let a=0;a<t.length;a+=1)h(l[a]);s=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);s=!1},d(n){n&&_(e),O(l,n)}}}function Q(o){let e,s,t,l,r,n,a,i;e=new X({});let p=y([0,1]),f=[];for(let c=0;c<2;c+=1)f[c]=T(L(o,p,c));const R=c=>w(f[c],1,1,()=>{f[c]=null});return{c(){A(e.$$.fragment),s=k(),t=g("main"),l=g("article"),l.innerHTML='<div class="flex justify-between font-mono"><h1 class="text-3xl md:text-5xl lg:text-6xl">Patrik Prandorfy</h1> <p class="text-2xl md:text-4xl lg:text-5xl text-white opacity-40">I.D</p></div> <p class="mt-4 mr-[20%] text-sm md:text-lg lg:text-xl font-sans font-light"><span class="text-base md:text-xl lg:text-2xl font-semibold">Dobrý deň!</span><br/> Viem, že je to celkom jednoduchá stránka, ale som si istý, že sa vám bude páčiť :)</p>',r=k(),n=g("article"),a=g("div");for(let c=0;c<2;c+=1)f[c].c();d(l,"id","title"),d(l,"class","w-4/5 max-w-[1300px] mx-auto mt-[5%] p-8 rounded-md backdrop-blur-sm border border-opacity-10 border-white svelte-8lyxe4"),d(a,"id","images"),d(a,"class","flex w-[240%] h-full svelte-8lyxe4"),d(n,"class","w-full h-2/5 mb-10 overflow-hidden"),d(t,"class","absolute flex flex-col justify-between size-full text-white gap-4 select-none svelte-8lyxe4")},m(c,m){C(e,c,m),b(c,s,m),b(c,t,m),x(t,l),x(t,r),x(t,n),x(n,a);for(let u=0;u<2;u+=1)f[u]&&f[u].m(a,null);i=!0},p(c,[m]){if(m&1){p=y([0,1]);let u;for(u=0;u<2;u+=1){const E=L(c,p,u);f[u]?(f[u].p(E,m),h(f[u],1)):(f[u]=T(E),f[u].c(),h(f[u],1),f[u].m(a,null))}for(q(),u=2;u<2;u+=1)R(u);P()}},i(c){if(!i){h(e.$$.fragment,c);for(let m=0;m<2;m+=1)h(f[m]);i=!0}},o(c){w(e.$$.fragment,c),f=f.filter(Boolean);for(let m=0;m<2;m+=1)w(f[m]);i=!1},d(c){c&&(_(s),_(t)),G(e,c),O(f,c)}}}function U(o){return[[["Eiffel Tower","https://i.etsystatic.com/8026687/r/il/e16641/1436085510/il_fullxfull.1436085510_8o7t.jpg"],["Big Ben","https://cdn1.matadornetwork.com/blogs/1/2023/02/Big-Ben-clock.jpg"],["Bratislava Castle","https://worldviewstream.com/wp-content/uploads/2021/02/IMG_20200717_154350-scaled.jpg"],["White House","https://www.whitehouse.gov/wp-content/uploads/2021/01/us-capitol.jpg?w=700&h=530&crop=1"],["Leaning Tower of Pisa","https://www.homedit.com/wp-content/uploads/tallest-building-world/famous-buildings/The-Leaning-Tower-%E2%80%93-Pisa-Italy.jpg"],["Cloud Gate","https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Cloud_Gate_%28The_Bean%29_from_east%27.jpg/340px-Cloud_Gate_%28The_Bean%29_from_east%27.jpg"]]]}class K extends B{constructor(e){super(),$(this,e,U,Q,j,{})}}new K({target:document.body});
