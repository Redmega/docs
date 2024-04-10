"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9840],{75246:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=i(74848),s=i(28453);const r={},a="Get a condition by index.",d={type:"api",id:"get-a-condition-by-index",title:"Get a condition by index.",description:"",slug:"/get-a-condition-by-index",frontMatter:{},api:{description:"# Condition\n\nA condition alters a creature\u2019s capabilities in a variety of ways and can \narise as a result of a spell, a class feature, a monster\u2019s attack, or other \neffect. Most conditions, such as blinded, are impairments, but a few, such \nas invisible, can be advantageous.\n",tags:["Game Mechanics"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the condition to get.\n",schema:{type:"string",enum:["blinded","charmed","deafened","exhaustion","frightened","grappled","incapacitated","invisible","paralyzed","petrified","poisoned","prone","restrained","stunned","unconscious"],example:"blinded"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`Condition`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Description of the resource.",type:"array",items:{type:"string"}}}},example:{index:"blinded",name:"Blinded",url:"/api/conditions/blinded",desc:["- A blinded creature can't see and automatically fails any ability check that requires sight.","- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."]}}}}},method:"get",path:"/api/conditions/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get a condition by index.",description:{content:"# Condition\n\nA condition alters a creature\u2019s capabilities in a variety of ways and can \narise as a result of a spell, a class feature, a monster\u2019s attack, or other \neffect. Most conditions, such as blinded, are impairments, but a few, such \nas invisible, can be advantageous.\n",type:"text/plain"},url:{path:["api","conditions",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the condition to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-a-condition-by-index",previous:{title:"Get spells of the requested level available to the class.",permalink:"/docs/api/get-spells-of-the-requested-level-available-to-the-class"},next:{title:"Get a damage type by index.",permalink:"/docs/api/get-a-damage-type-by-index"}},o=[];function c(e){const n={code:"code",h1:"h1",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-a-condition-by-index",children:"Get a condition by index."}),"\n",(0,t.jsx)(n.h1,{id:"condition",children:"Condition"}),"\n",(0,t.jsx)(n.p,{children:"A condition alters a creature\u2019s capabilities in a variety of ways and can\narise as a result of a spell, a class feature, a monster\u2019s attack, or other\neffect. Most conditions, such as blinded, are impairments, but a few, such\nas invisible, can be advantageous."}),"\n",(0,t.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Possible values:"})," [",(0,t.jsx)(n.code,{children:"blinded"}),", ",(0,t.jsx)(n.code,{children:"charmed"}),", ",(0,t.jsx)(n.code,{children:"deafened"}),", ",(0,t.jsx)(n.code,{children:"exhaustion"}),", ",(0,t.jsx)(n.code,{children:"frightened"}),", ",(0,t.jsx)(n.code,{children:"grappled"}),", ",(0,t.jsx)(n.code,{children:"incapacitated"}),", ",(0,t.jsx)(n.code,{children:"invisible"}),", ",(0,t.jsx)(n.code,{children:"paralyzed"}),", ",(0,t.jsx)(n.code,{children:"petrified"}),", ",(0,t.jsx)(n.code,{children:"poisoned"}),", ",(0,t.jsx)(n.code,{children:"prone"}),", ",(0,t.jsx)(n.code,{children:"restrained"}),", ",(0,t.jsx)(n.code,{children:"stunned"}),", ",(0,t.jsx)(n.code,{children:"unconscious"}),"]"]})}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"index"})," of the condition to get."]})})]})})})]}),"\n",(0,t.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)("code",{children:"200"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:"OK"})})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("th",{style:{textAlign:"left"},children:[(0,t.jsx)("span",{children:"Schema "}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{})]})})}),(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Resource index for shorthand searching."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"level"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" integer"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Level of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"name"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Name of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"url"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"URL of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"desc"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Description of the resource."})})]})})]})]})})]})})})]})]})}function l(e){void 0===e&&(e={});const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);