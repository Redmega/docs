"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,f=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?l.createElement(f,a(a({ref:t},c),{},{components:n})):l.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30718:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const o={},a="Get all level resources for a subclass.",i={type:"api",id:"get-all-level-resources-for-a-subclass",unversionedId:"get-all-level-resources-for-a-subclass",title:"Get all level resources for a subclass.",description:"",slug:"/get-all-level-resources-for-a-subclass",frontMatter:{},api:{tags:["Subclasses"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the subclass to get.\n",schema:{type:"string",enum:["berserker","champion","devotion","draconic","evocation","fiend","hunter","land","life","lore","open-hand","thief"],example:"fiend"}}],responses:{200:{description:"List of level resource for the subclass.",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{index:{type:"string"},url:{type:"string"},level:{type:"number"},features:{type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}},class:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}},subclass:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}}}}}}},description:"Get all level resources for a subclass.",method:"get",path:"/api/subclasses/{index}/levels",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get all level resources for a subclass.",description:{type:"text/plain"},url:{path:["api","subclasses",":index","levels"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the subclass to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-all-level-resources-for-a-subclass",previous:{title:"Get features available for a subclass.",permalink:"/api/get-features-available-for-a-subclass"},next:{title:"Get level resources for a subclass and level.",permalink:"/api/get-level-resources-for-a-subclass-and-level"}},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-all-level-resources-for-a-subclass"},"Get all level resources for a subclass."),(0,r.kt)("p",null,"Get all level resources for a subclass."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"berserker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"champion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"devotion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"draconic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"evocation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fiend"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hunter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"land"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"life"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"open-hand"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"thief"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," of the subclass to get.")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"List of level resource for the subclass."))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"level"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"features"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Resource index for shorthand searching.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Name of the referenced resource.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"URL of the referenced resource.")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"class"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APIReference"))),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Resource index for shorthand searching.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Name of the referenced resource.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"URL of the referenced resource.")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"subclass"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APIReference"))),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Resource index for shorthand searching.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Name of the referenced resource.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"URL of the referenced resource."))))))))))))))))))))}d.isMDXComponent=!0}}]);