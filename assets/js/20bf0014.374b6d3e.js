"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3162],{37344:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={},a="Get a rule section by index.",o={type:"api",id:"get-a-rule-section-by-index",title:"Get a rule section by index.",description:"",slug:"/get-a-rule-section-by-index",frontMatter:{},api:{description:"Rule sections represent a sub-heading and text that can be found underneath a rule heading in the SRD.",tags:["Rules"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the rule section to get.\n",schema:{type:"string",enum:["ability-checks","ability-scores-and-modifiers","actions-in-combat","activating-an-item","advantage-and-disadvantage","attunement","between-adventures","casting-a-spell","cover","damage-and-healing","diseases","fantasy-historical-pantheons","madness","making-an-attack","mounted-combat","movement","movement-and-position","objects","poisons","proficiency-bonus","resting","saving-throws","sentient-magic-items","standard-exchange-rates","the-environment","the-order-of-combat","the-planes-of-existence","time","traps","underwater-combat","using-each-ability","wearing-and-wielding-items","what-is-a-spell"],example:"traps"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`RuleSection`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Description of the rule.",type:"string"}}},example:{index:"time",name:"Time",url:"/api/rule-sections/time",desc:"## Time\n\nIn situations where keeping track of the passage of time is important, the GM determines the time a task requires. The GM might use a different time scale depending on the context of the situation at hand. In a dungeon environment, the adventurers' movement happens on a scale of **minutes**. It takes them about a minute to creep down a long hallway, another minute to check for traps on the door at the end of the hall, and a good ten minutes to search the chamber beyond for anything interesting or valuable.\n\nIn a city or wilderness, a scale of **hours** is often more appropriate. Adventurers eager to reach the lonely tower at the heart of the forest hurry across those fifteen miles in just under four hours' time.\n\nFor long journeys, a scale of **days** works best.\n\nFollowing the road from Baldur's Gate to Waterdeep, the adventurers spend four uneventful days before a goblin ambush interrupts their journey.\n\nIn combat and other fast-paced situations, the game relies on **rounds**, a 6-second span of time.\n"}}}}},method:"get",path:"/api/rule-sections/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get a rule section by index.",description:{content:"Rule sections represent a sub-heading and text that can be found underneath a rule heading in the SRD.",type:"text/plain"},url:{path:["api","rule-sections",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the rule section to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-a-rule-section-by-index",previous:{title:"Get traits available for a race.",permalink:"/docs/api/get-traits-available-for-a-race"},next:{title:"Get a rule by index.",permalink:"/docs/api/get-a-rule-by-index"}},d=[];function c(e){const n={code:"code",h1:"h1",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"get-a-rule-section-by-index",children:"Get a rule section by index."}),"\n",(0,i.jsx)(n.p,{children:"Rule sections represent a sub-heading and text that can be found underneath a rule heading in the SRD."}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"index"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Possible values:"})," [",(0,i.jsx)(n.code,{children:"ability-checks"}),", ",(0,i.jsx)(n.code,{children:"ability-scores-and-modifiers"}),", ",(0,i.jsx)(n.code,{children:"actions-in-combat"}),", ",(0,i.jsx)(n.code,{children:"activating-an-item"}),", ",(0,i.jsx)(n.code,{children:"advantage-and-disadvantage"}),", ",(0,i.jsx)(n.code,{children:"attunement"}),", ",(0,i.jsx)(n.code,{children:"between-adventures"}),", ",(0,i.jsx)(n.code,{children:"casting-a-spell"}),", ",(0,i.jsx)(n.code,{children:"cover"}),", ",(0,i.jsx)(n.code,{children:"damage-and-healing"}),", ",(0,i.jsx)(n.code,{children:"diseases"}),", ",(0,i.jsx)(n.code,{children:"fantasy-historical-pantheons"}),", ",(0,i.jsx)(n.code,{children:"madness"}),", ",(0,i.jsx)(n.code,{children:"making-an-attack"}),", ",(0,i.jsx)(n.code,{children:"mounted-combat"}),", ",(0,i.jsx)(n.code,{children:"movement"}),", ",(0,i.jsx)(n.code,{children:"movement-and-position"}),", ",(0,i.jsx)(n.code,{children:"objects"}),", ",(0,i.jsx)(n.code,{children:"poisons"}),", ",(0,i.jsx)(n.code,{children:"proficiency-bonus"}),", ",(0,i.jsx)(n.code,{children:"resting"}),", ",(0,i.jsx)(n.code,{children:"saving-throws"}),", ",(0,i.jsx)(n.code,{children:"sentient-magic-items"}),", ",(0,i.jsx)(n.code,{children:"standard-exchange-rates"}),", ",(0,i.jsx)(n.code,{children:"the-environment"}),", ",(0,i.jsx)(n.code,{children:"the-order-of-combat"}),", ",(0,i.jsx)(n.code,{children:"the-planes-of-existence"}),", ",(0,i.jsx)(n.code,{children:"time"}),", ",(0,i.jsx)(n.code,{children:"traps"}),", ",(0,i.jsx)(n.code,{children:"underwater-combat"}),", ",(0,i.jsx)(n.code,{children:"using-each-ability"}),", ",(0,i.jsx)(n.code,{children:"wearing-and-wielding-items"}),", ",(0,i.jsx)(n.code,{children:"what-is-a-spell"}),"]"]})}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"index"})," of the rule section to get."]})})]})})})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:"OK"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"index"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(n.p,{children:"Resource index for shorthand searching."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"level"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" integer"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(n.p,{children:"Level of the referenced resource."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(n.p,{children:"Name of the referenced resource."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"url"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(n.p,{children:"URL of the referenced resource."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"desc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(n.p,{children:"Description of the rule."})})]})})]})]})})]})})})]})]})}function l(e){void 0===e&&(e={});const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);