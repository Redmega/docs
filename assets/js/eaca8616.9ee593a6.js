"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65759:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},o="Get an alignment by index.",l={type:"api",id:"get-an-alignment-by-index",unversionedId:"get-an-alignment-by-index",title:"Get an alignment by index.",description:"",slug:"/get-an-alignment-by-index",frontMatter:{},api:{description:"# Alignment\n\nA typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations.[[SRD p58](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=58)]\n",tags:["Character Data"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the alignment to get.\n",schema:{type:"string",enum:["chaotic-neutral","chaotic-evil","chaotic-good","lawful-neutral","lawful-evil","lawful-good","neutral","neutral-evil","neutral-good"],example:"chaotic-neutral"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`Alignment`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Brief description of the resource.",type:"string"},abbreviation:{description:"Abbreviation/initials/acronym for the alignment.",type:"string"}}},example:{index:"chaotic-neutral",name:"Chaotic Neutral",url:"/api/alignments/chaotic-neutral",desc:"Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.",abbreviation:"CN"}}}}},method:"get",path:"/api/alignments/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get an alignment by index.",description:{content:"# Alignment\n\nA typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations.[[SRD p58](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=58)]\n",type:"text/plain"},url:{path:["api","alignments",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the alignment to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-an-alignment-by-index",previous:{title:"Get an ability score by index.",permalink:"/api/get-an-ability-score-by-index"},next:{title:"Get a background by index.",permalink:"/api/get-a-background-by-index"}},s=[],p={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-an-alignment-by-index"},"Get an alignment by index."),(0,a.kt)("h1",{id:"alignment"},"Alignment"),(0,a.kt)("p",null,"A typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations.[",(0,a.kt)("a",{parentName:"p",href:"https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=58"},"SRD p58"),"]"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"index"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"chaotic-neutral"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"chaotic-evil"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"chaotic-good"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lawful-neutral"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lawful-evil"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lawful-good"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"neutral"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"neutral-evil"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"neutral-good"),"]")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," of the alignment to get.")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"OK"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"index"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Resource index for shorthand searching.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Name of the referenced resource.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"url"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"URL of the referenced resource.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"desc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Brief description of the resource.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"abbreviation"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Abbreviation/initials/acronym for the alignment."))))))))))))}c.isMDXComponent=!0}}]);