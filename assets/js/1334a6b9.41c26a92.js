"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{25596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(74848),r=n(28453),a=n(19303);const o={},i="GraphQL Fundamentals",l={id:"tutorials/beginner/graphql",title:"GraphQL Fundamentals",description:"GraphQL is a powerful and flexible way to fetch data from the D&D 5e SRD API. In this tutorial, we will learn how to build and try out a range of GraphQL queries using the Apollo Sandbox Explorer.",source:"@site/docs/tutorials/beginner/graphql.mdx",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/graphql",permalink:"/docs/tutorials/beginner/graphql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Getting Started",permalink:"/docs/tutorials/beginner/getting-started"},next:{title:"Discover D&D Races with Shell Scripting",permalink:"/docs/tutorials/basic/discover-dnd-races-with-shell-scripting"}},h={},d=[{value:"From REST to GraphQL",id:"from-rest-to-graphql",level:2},{value:"Sandbox Explorer",id:"sandbox-explorer",level:2},{value:"Our First Query",id:"our-first-query",level:2},{value:"Nested Attributes",id:"nested-attributes",level:2},{value:"Fetching a Single Resource",id:"fetching-a-single-resource",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"graphql-fundamentals",children:"GraphQL Fundamentals"}),"\n",(0,s.jsxs)(t.p,{children:["GraphQL is a powerful and flexible way to fetch data from the D&D 5e SRD API. In this tutorial, we will learn how to build and try out a range of GraphQL queries using the ",(0,s.jsx)(t.a,{href:"https://studio.apollographql.com/sandbox?endpoint=https%3A%2F%2Fwww.dnd5eapi.co%2Fgraphql",children:"Apollo Sandbox Explorer"}),"."]}),"\n",(0,s.jsx)(a.A,{objectives:["Understand the limitations of the RESTful API","Understand how the GraphQL API solves these limitations","Build and test GraphQL queries with Apollo Sandbox Explorer"]}),"\n",(0,s.jsx)(t.h2,{id:"from-rest-to-graphql",children:"From REST to GraphQL"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"/docs/tutorials/beginner/getting-started",children:"Getting Started"})," tutorial, we used ",(0,s.jsx)(t.code,{children:"curl"})," to make an HTTP ",(0,s.jsx)(t.code,{children:"GET"})," request to a specific URL that returned the data we wanted. Using that approach, the URL we made a request to corresponded directly to the resource we wanted to fetch; ",(0,s.jsx)(t.code,{children:"/api/ability-scores/cha"})," refers to the resource within the ",(0,s.jsx)(t.code,{children:"ability-scores"})," collection which has the index ",(0,s.jsx)(t.code,{children:"cha"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This is one of the defining features of a RESTful API: a URL corresponds to a resource. The RESTful endpoints of the D&D 5e SRD API follow this uniform interface to make it easy for us to fetch the resources we need, but they don't allow us much control over what data is returned by the API."}),"\n",(0,s.jsxs)(t.p,{children:["For example, if we make a ",(0,s.jsx)(t.code,{children:"GET"})," request to ",(0,s.jsx)(t.code,{children:"https://www.dnd5eapi.co/api/monsters"}),", we will receive only the ",(0,s.jsx)(t.code,{children:"index"}),", ",(0,s.jsx)(t.code,{children:"name"})," and ",(0,s.jsx)(t.code,{children:"url"})," of all the monsters in the SRD database. This is a sensible default, as it gives us the information we need to discover all the monsters, while keeping the response relatively lightweight by excluding unnecessary details. But what if I want to know more about a specific monster?"]}),"\n",(0,s.jsxs)(t.p,{children:["Making a request to one of the ",(0,s.jsx)(t.code,{children:"url"}),"s provided, such as ",(0,s.jsx)(t.code,{children:"/api/monsters/aboleth"}),", we will receive ",(0,s.jsx)(t.em,{children:"all"})," of the data about the Aboleth, including its stats, actions, proficiencies, etc. But what if we just wanted to know the Aboleth's armor class? We've just wasted time and bandwidth transporting all that extra information."]}),"\n",(0,s.jsxs)(t.p,{children:["And what if we want to fetch the armor classes of ",(0,s.jsx)(t.em,{children:"all"})," of the monsters? Using the REST API, we would have to make a separate request for every single monster in the API - that's 334 HTTP requests! Not only would this be slow, it would be a pain to implement."]}),"\n",(0,s.jsx)(t.p,{children:'This is where GraphQL saves the day. GraphQL stands for "Graph Query Language". It is a computer language that allows us to query an API much more flexibly than is allowed by the REST API. GraphQL allows us to specify exactly which parts of a resource we want to receive, and to request that data for many resources all in one request. In this tutorial, we will look at how we can build and execute powerful queries against the D&D 5e SRD API using GraphQL.'}),"\n",(0,s.jsx)(t.h2,{id:"sandbox-explorer",children:"Sandbox Explorer"}),"\n",(0,s.jsxs)(t.p,{children:["As well as data, GraphQL servers are able to serve their own schemas and documentation. This allows us to use tools such as the ",(0,s.jsx)(t.a,{href:"https://studio.apollographql.com/sandbox?endpoint=https%3A%2F%2Fwww.dnd5eapi.co%2Fgraphql",children:"Apollo Sandbox Explorer"})," to discover the API's capabilities and to build and test our queries."]}),"\n",(0,s.jsx)(t.p,{children:"Open the explorer in a new tab now so that you can follow along with the tutorial. You should see a page like this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A screenshot of the Apollo Sandbox Explorer",src:n(87643).A+"",width:"2474",height:"1590"})}),"\n",(0,s.jsx)(t.p,{children:'On the left we can see the documentation - a list of all the resources we can query. In the middle are the text boxes where we can write our GraphQL query, as well as any variables that we might want to pass with the request. Finally on the right is the "Response" panel, where any results of queries we execute will be displayed.'}),"\n",(0,s.jsx)(t.h2,{id:"our-first-query",children:"Our First Query"}),"\n",(0,s.jsxs)(t.p,{children:['Let\'s start by getting a list of all the monsters in the database. To do this, we can build a query using the panel on the left-hand side of the explorer. Scroll down to "monsters" and click the ',(0,s.jsx)("svg",{viewBox:"0 0 24 24",role:"checkbox","aria-checked":"false",style:{width:"2ch",color:"var(--ifm-color-primary-darker)",verticalAlign:"text-top",marginInline:"0.25ch"},children:(0,s.jsx)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:(0,s.jsx)("path",{d:"M12 7.5v9M7.5 12h9M12 .75C18.213.75 23.25 5.787 23.25 12S18.213 23.25 12 23.25.75 18.213.75 12 5.787.75 12 .75z"})})}),' ("plus") icon to the left. You should then be presented with a list of attributes that we can request. You should also see the following code appear in the editor:']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"query Monsters {\n  monsters {\n\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:['From the list on the left-hand side, scroll down to the "Fields" section and select ',(0,s.jsx)(t.code,{children:"name"})," and ",(0,s.jsx)(t.code,{children:"index"}),', and then click the blue "Monsters" button in the top-right corner of the "Operation" box to execute the query. The result should look like this:']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A screenshot of the Sandbox Explorer with the query and its results",src:n(33382).A+"",width:"2456",height:"1590"})}),"\n",(0,s.jsx)(t.p,{children:"In the results pane, we can see the list of all the monsters in the database, and each entry only has the attributes we requested."}),"\n",(0,s.jsx)(t.h2,{id:"nested-attributes",children:"Nested Attributes"}),"\n",(0,s.jsxs)(t.p,{children:["Now let's try getting the armor class of each monster. If we select the ",(0,s.jsx)(t.code,{children:"armor_class"})," attribute from the list of fields, it appears in our query with a set of curly braces, like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"query Monsters {\n  monsters {\n    name\n    index\n    armor_class {\n\n    }\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We are also presented with a list of fields that exist inside the ",(0,s.jsx)(t.code,{children:"armor_class"})," object. Let's select ",(0,s.jsx)(t.code,{children:"value"})," and ",(0,s.jsx)(t.code,{children:"type"}),", and execute the query again. Here's what we should see now:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A screenshot of the Sandbox Explorer with the nested query and its results",src:n(41231).A+"",width:"2456",height:"1590"})}),"\n",(0,s.jsx)(t.p,{children:"Here we can see that each monster now has an array of possible armor classes, and we can see the value and type of each one, but we haven't fetched any unwanted data, like the conditions or descriptions of the armor classes."}),"\n",(0,s.jsx)(t.p,{children:"Take a moment now to try building some queries of your own. Use the documentation on the left of the screen to build your queries, or for an extra challenge, try writing a query by hand."}),"\n",(0,s.jsx)(t.h2,{id:"fetching-a-single-resource",children:"Fetching a Single Resource"}),"\n",(0,s.jsxs)(t.p,{children:["You may have noticed that each top-level field in the documentation comes in a singular and a plural form. For example, ",(0,s.jsx)(t.code,{children:"abilityScore"})," and ",(0,s.jsx)(t.code,{children:"abilityScores"}),", ",(0,s.jsx)(t.code,{children:"monster"})," and ",(0,s.jsx)(t.code,{children:"monsters"}),". The plural forms denote fields that allow us to query a collection of resources, as we have seen with the ",(0,s.jsx)(t.code,{children:"monsters"})," field, but the singular forms (e.g. ",(0,s.jsx)(t.code,{children:"monster"}),") allow us to query a single resource. All we need is the resource's ",(0,s.jsx)(t.code,{children:"index"}),", which is its unique identifier."]}),"\n",(0,s.jsx)(t.p,{children:"Let's try this out now."}),"\n",(0,s.jsx)(t.p,{children:"Enter the following query into the Explorer:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:'query Monster {\n  monster(index: "aboleth") {\n    name\n    challenge_rating\n    hit_points\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You will notice that we are making use of the ",(0,s.jsx)(t.code,{children:"index"})," argument to specify that we want information about the Aboleth. When we execute the query, this is exactly what we get."]}),"\n",(0,s.jsxs)(t.p,{children:["But what if we don't always want to fetch information about the same monster? To facilitate this, we can use variables. The query below declares a variable called ",(0,s.jsx)(t.code,{children:"$index"}),", which must be passed a ",(0,s.jsx)(t.code,{children:"String"})," value when we make our request."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"query Monster($index: String) {\n  monster(index: $index) {\n    name\n    challenge_rating\n    hit_points\n  }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:'To pass variables, we can provide a JSON object along with our request, where each field corresponds to a variable. Add the following JSON code to the "Variables" box in the explorer:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "index": "aboleth"\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Execute the query and we should see the same results as before, except this time we can request a different monster just by changing the value of our ",(0,s.jsx)(t.code,{children:"index"})," variable. Take this opportunity to pass in different indices and observe how this affects the response."]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"Now that we can build and test a range of GraphQL queries, we are ready to apply these skills to a real project. In future tutorials, we will bring together GraphQL and other languages and technologies to build fun and interesting tools."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19303:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(74848);function r(e){let{children:t,objectives:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"\u2705 Learning Objectives"}),(0,s.jsx)("ol",{children:n.map(((e,t)=>(0,s.jsx)("li",{children:e},t)))}),(0,s.jsx)("div",{children:t})]})}},87643:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/01-explorer-12db0a3bd7fcf01d2c45b2bf6e1ed7ae.png"},33382:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/02-query-results-3f52968512f45e60907c4cc899d5c1ed.png"},41231:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/03-nested-query-results-09d1fb5634e2598e5c80505579f5732a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);