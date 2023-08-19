"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Skip to the tutorials",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorials",permalink:"/docs/tutorials/"}},s={},u=[{value:"\u27a1\ufe0f Skip to the tutorials",id:"\ufe0f-skip-to-the-tutorials",level:3},{value:"\ud83d\udc4b Welcome",id:"-welcome",level:3},{value:"\ud83d\udd12 Authentication",id:"-authentication",level:3},{value:"\ud83d\ude04 Chat",id:"-chat",level:3},{value:"\ud83e\udd1d Contribute",id:"-contribute",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h3",{id:"\ufe0f-skip-to-the-tutorials"},"\u27a1\ufe0f ",(0,o.kt)("a",{parentName:"h3",href:"/docs/tutorials/"},"Skip to the tutorials")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you wanna skip right into the tutorial, go ahead. We don't mind!")),(0,o.kt)("h3",{id:"-welcome"},"\ud83d\udc4b Welcome"),(0,o.kt)("p",null,"Welcome to the D&D 5e SRD API, the Dungeons & Dragons 5th Edition API! "),(0,o.kt)("p",null,"This documentation should help you familiarize yourself with the resources available and how to consume them with HTTP requests. Read through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/"},"Tutorial")," getting started section before you dive in. "),(0,o.kt)("p",null,"Most of your problems should be solved just by reading through it."),(0,o.kt)("h3",{id:"-authentication"},"\ud83d\udd12 Authentication"),(0,o.kt)("p",null,"This is a completely open API. ",(0,o.kt)("strong",{parentName:"p"},"No authentication is required to query and get data"),". This also means that we've limited what you can do to just ",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"-ing the data. "),(0,o.kt)("p",null,"If you find a mistake in the data, feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/TQuYTv7"},"message us"),"!"),(0,o.kt)("h3",{id:"-chat"},"\ud83d\ude04 Chat"),(0,o.kt)("p",null,"Come hang out with us ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/TQuYTv7"},"on Discord"),"! We're friendly and would love to hear what you make with the API!"),(0,o.kt)("h3",{id:"-contribute"},"\ud83e\udd1d Contribute"),(0,o.kt)("p",null,"This API is built from two repositories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The repo containing the data lives here: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/5e-bits/5e-database"},"https://github.com/5e-bits/5e-database")),(0,o.kt)("li",{parentName:"ul"},"The repo with the API implementation lives here: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/5e-bits/5e-srd-api"},"https://github.com/5e-bits/5e-srd-api"))),(0,o.kt)("p",null,"This is a evolving API and having fresh ideas are always welcome! You can\nopen an issue in either repo, open a PR for changes, or just discuss with\nother users in this Discord."))}d.isMDXComponent=!0}}]);