"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2917],{42028:(e,i,r)=>{r.r(i),r.d(i,{contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(74848),n=r(28453);const s={},c="Get a trait by index.",o={type:"api",id:"get-a-trait-by-index",title:"Get a trait by index.",description:"",slug:"/get-a-trait-by-index",frontMatter:{},api:{tags:["Traits"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the `Trait` to get.",schema:{type:"string",enum:["artificers-lore","brave","breath-weapon","damage-resistance","darkvision","draconic-ancestry","draconic-ancestry-black","draconic-ancestry-blue","draconic-ancestry-brass","draconic-ancestry-bronze","draconic-ancestry-copper","draconic-ancestry-gold","draconic-ancestry-green","draconic-ancestry-red","draconic-ancestry-silver","draconic-ancestry-white","dwarven-combat-training","dwarven-resilience","dwarven-toughness","elf-weapon-training","extra-language","fey-ancestry","gnome-cunning","halfling-nimbleness","hellish-resistance","high-elf-cantrip","infernal-legacy","keen-senses","lucky","menacing","naturally-stealthy","relentless-endurance","savage-attacks","skill-versatility","stonecunning","tinker","tool-proficiency","trance"],example:"trance"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`Trait`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Description of the resource.",type:"array",items:{type:"string"}},races:{description:"List of `Races` that have access to the trait.",type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}},subraces:{description:"List of `Subraces` that have access to the trait.",type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}},proficiencies:{description:"List of `Proficiencies` this trait grants.",type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}},proficiency_choices:{description:"`Choice`\n",type:"object",properties:{desc:{description:"Description of the choice to be made.",type:"string"},choose:{description:"Number of items to pick from the list.",type:"number"},type:{description:"Type of the resources to choose from.",type:"string"},from:{$ref:"#/components/schemas/OptionSet"}}},language_options:{description:"`Choice`\n",type:"object",properties:{desc:{description:"Description of the choice to be made.",type:"string"},choose:{description:"Number of items to pick from the list.",type:"number"},type:{description:"Type of the resources to choose from.",type:"string"},from:{$ref:"#/components/schemas/OptionSet"}}},trait_specific:{description:"Information specific to this trait",oneOf:[{description:"`Choice`\n",type:"object",properties:{desc:{description:"Description of the choice to be made.",type:"string"},choose:{description:"Number of items to pick from the list.",type:"number"},type:{description:"Type of the resources to choose from.",type:"string"},from:{$ref:"#/components/schemas/OptionSet"}}},{description:"`Choice`\n",type:"object",properties:{desc:{description:"Description of the choice to be made.",type:"string"},choose:{description:"Number of items to pick from the list.",type:"number"},type:{description:"Type of the resources to choose from.",type:"string"},from:{$ref:"#/components/schemas/OptionSet"}}},{type:"object",properties:{"damage-type":{description:"A damage type associated with this trait.",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}},"breath-weapon":{description:"The breath weapon action associated with a draconic ancestry.",type:"object",properties:{name:{type:"string"},desc:{type:"string"},area_of_effect:{type:"object",properties:{size:{type:"number"},type:{type:"string",enum:["sphere","cone","cylinder","line","cube"]}}},damage:{type:"object",properties:{damage_at_character_level:{type:"object",additionalProperties:{type:"string"}},damage_type:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}},dc:{description:"`DC`\n",type:"object",properties:{dc_type:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}},dc_value:{description:"Value to beat",type:"number"},success_type:{description:'Result of a successful save. Can be \\"none\\", \\"half\\", or \\"other\\"',type:"string"}}},usage:{description:"Description of the usage constraints of this action.",type:"object",properties:{times:{type:"number"},type:{type:"string"}}}}}}}]}}},example:{index:"trance",name:"Trance",url:"/api/traits/trance",desc:['Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.'],proficiencies:[],races:[{index:"elf",name:"Elf",url:"/api/races/elf"}],subraces:[]}}}}},description:"Get a trait by index.",method:"get",path:"/api/traits/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get a trait by index.",description:{type:"text/plain"},url:{path:["api","traits",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the `Trait` to get.",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-a-trait-by-index",previous:{title:"Get traits available for a subrace.",permalink:"/docs/api/get-traits-available-for-a-subrace"},next:{title:"Get a weapon property by index.",permalink:"/docs/api/get-a-weapon-property-by-index"}},d=[];function l(e){const i={code:"code",h1:"h1",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"get-a-trait-by-index",children:"Get a trait by index."}),"\n",(0,t.jsx)(i.p,{children:"Get a trait by index."}),"\n",(0,t.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Possible values:"})," [",(0,t.jsx)(i.code,{children:"artificers-lore"}),", ",(0,t.jsx)(i.code,{children:"brave"}),", ",(0,t.jsx)(i.code,{children:"breath-weapon"}),", ",(0,t.jsx)(i.code,{children:"damage-resistance"}),", ",(0,t.jsx)(i.code,{children:"darkvision"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-black"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-blue"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-brass"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-bronze"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-copper"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-gold"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-green"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-red"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-silver"}),", ",(0,t.jsx)(i.code,{children:"draconic-ancestry-white"}),", ",(0,t.jsx)(i.code,{children:"dwarven-combat-training"}),", ",(0,t.jsx)(i.code,{children:"dwarven-resilience"}),", ",(0,t.jsx)(i.code,{children:"dwarven-toughness"}),", ",(0,t.jsx)(i.code,{children:"elf-weapon-training"}),", ",(0,t.jsx)(i.code,{children:"extra-language"}),", ",(0,t.jsx)(i.code,{children:"fey-ancestry"}),", ",(0,t.jsx)(i.code,{children:"gnome-cunning"}),", ",(0,t.jsx)(i.code,{children:"halfling-nimbleness"}),", ",(0,t.jsx)(i.code,{children:"hellish-resistance"}),", ",(0,t.jsx)(i.code,{children:"high-elf-cantrip"}),", ",(0,t.jsx)(i.code,{children:"infernal-legacy"}),", ",(0,t.jsx)(i.code,{children:"keen-senses"}),", ",(0,t.jsx)(i.code,{children:"lucky"}),", ",(0,t.jsx)(i.code,{children:"menacing"}),", ",(0,t.jsx)(i.code,{children:"naturally-stealthy"}),", ",(0,t.jsx)(i.code,{children:"relentless-endurance"}),", ",(0,t.jsx)(i.code,{children:"savage-attacks"}),", ",(0,t.jsx)(i.code,{children:"skill-versatility"}),", ",(0,t.jsx)(i.code,{children:"stonecunning"}),", ",(0,t.jsx)(i.code,{children:"tinker"}),", ",(0,t.jsx)(i.code,{children:"tool-proficiency"}),", ",(0,t.jsx)(i.code,{children:"trance"}),"]"]})}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"index"})," of the ",(0,t.jsx)(i.code,{children:"Trait"})," to get."]})})]})})})]}),"\n",(0,t.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)("code",{children:"200"})}),(0,t.jsx)("div",{children:(0,t.jsx)(i.p,{children:"OK"})})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("th",{style:{textAlign:"left"},children:[(0,t.jsx)("span",{children:"Schema "}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{})]})})}),(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"level"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" integer"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Level of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"name"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"url"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"desc"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Description of the resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"races"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(i.p,{children:["List of ",(0,t.jsx)(i.code,{children:"Races"})," that have access to the trait."]})}),(0,t.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"level"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" integer"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Level of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"name"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"url"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"URL of the referenced resource."})})]})})]})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"subraces"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(i.p,{children:["List of ",(0,t.jsx)(i.code,{children:"Subraces"})," that have access to the trait."]})}),(0,t.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"level"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" integer"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Level of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"name"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"url"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"URL of the referenced resource."})})]})})]})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"proficiencies"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(i.p,{children:["List of ",(0,t.jsx)(i.code,{children:"Proficiencies"})," this trait grants."]})}),(0,t.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"level"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" integer"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Level of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"name"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"url"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"URL of the referenced resource."})})]})})]})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"proficiency_choices"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Choice"})})}),(0,t.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"desc"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Description of the choice to be made."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"choose"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Number of items to pick from the list."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"type"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Type of the resources to choose from."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"from"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:"  (circular)"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"language_options"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Choice"})})}),(0,t.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"desc"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Description of the choice to be made."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"choose"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Number of items to pick from the list."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"type"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Type of the resources to choose from."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"from"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:"  (circular)"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"trait_specific"}),(0,t.jsx)("span",{style:{opacity:"0.6"}}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(i.p,{children:"Information specific to this trait"})})]})})]})]})})]})})})]})]})}function a(e){void 0===e&&(e={});const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>c,x:()=>o});var t=r(96540);const n={},s=t.createContext(n);function c(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);