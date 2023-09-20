"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="Getting Started",s={unversionedId:"tutorials/beginner/getting-started",id:"tutorials/beginner/getting-started",title:"Getting Started",description:"Let's make our first API request to the D&D 5th Edition API!",source:"@site/docs/tutorials/beginner/getting-started.md",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/getting-started",permalink:"/docs/docs/tutorials/beginner/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialsSidebar",previous:{title:"Tutorials",permalink:"/docs/docs/tutorials/"},next:{title:"GraphQL Fundamentals",permalink:"/docs/docs/tutorials/beginner/graphql"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Let's make our first API request to the D&D 5th Edition API!"),(0,a.kt)("p",null,"Open up a terminal and use ",(0,a.kt)("a",{parentName:"p",href:"http://curl.haxx.se/"},"curl")," or ",(0,a.kt)("a",{parentName:"p",href:"http://httpie.org/"},"httpie"),"\nto make an API request for a resource. You can also scroll through the\ndefinitions below and send requests directly from the endpoint documentation!"),(0,a.kt)("p",null,"For example, if you paste and run this ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://www.dnd5eapi.co/api/ability-scores/cha" -H "Accept: application/json"\n\n# or with httpie\nhttp dnd5eapi.co/api/ability-scores/cha\n')),(0,a.kt)("p",null,"We should see a result containing details about the Charisma ability score:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "index": "cha",\n  "name": "CHA",\n  "full_name": "Charisma",\n  "desc": [\n    "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",\n    "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."\n  ],\n  "skills": [\n    {\n      "name": "Deception",\n      "index": "deception",\n      "url": "/api/skills/deception"\n    },\n    {\n      "name": "Intimidation",\n      "index": "intimidation",\n      "url": "/api/skills/intimidation"\n    },\n    {\n      "name": "Performance",\n      "index": "performance",\n      "url": "/api/skills/performance"\n    },\n    {\n      "name": "Persuasion",\n      "index": "persuasion",\n      "url": "/api/skills/persuasion"\n    }\n  ],\n  "url": "/api/ability-scores/cha"\n}\n')))}d.isMDXComponent=!0}}]);