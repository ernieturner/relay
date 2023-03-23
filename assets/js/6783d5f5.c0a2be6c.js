"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[383],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(39960),a=n(86341),i=n(67294);function s(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},p=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:s},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return i.createElement(o,null,i.createElement(p,null),i.createElement(l,null),i.createElement(u,null))},c=function(){return i.createElement(o,null,i.createElement(l,null),i.createElement(u,null))};const m=function(){return(0,a.fbContent)({internal:i.createElement(d,null),external:i.createElement(c,null)})}},5298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=n(68629),o=n(86341),l=["components"],p={id:"persisted-queries",title:"Persisted Queries",slug:"/guides/persisted-queries/"},u=void 0,d={unversionedId:"guides/persisted-queries",id:"version-v11.0.0/guides/persisted-queries",title:"Persisted Queries",description:"Persistence is handled by the relay command for you. You likely do not need to worry about the contents of this guide.",source:"@site/versioned_docs/version-v11.0.0/guides/persisted-queries.md",sourceDirName:"guides",slug:"/guides/persisted-queries/",permalink:"/docs/v11.0.0/guides/persisted-queries/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guides/persisted-queries.md",tags:[],version:"v11.0.0",lastUpdatedBy:"David Richey",lastUpdatedAt:1679534662,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"persisted-queries",title:"Persisted Queries",slug:"/guides/persisted-queries/"},sidebar:"version-v11.0.0/docs",previous:{title:"Type Emission",permalink:"/docs/v11.0.0/guides/type-emission/"},next:{title:"Network Layer",permalink:"/docs/v11.0.0/guides/network-layer/"}},c={},m=[{value:"Usage on the client",id:"usage-on-the-client",level:2},{value:"The <code>--persist-output</code> flag",id:"the---persist-output-flag",level:3},{value:"Network layer changes",id:"network-layer-changes",level:3},{value:"Executing Persisted Queries on the Server",id:"executing-persisted-queries-on-the-server",level:2},{value:"Compile time push",id:"compile-time-push",level:3},{value:"Run time push",id:"run-time-push",level:3},{value:"Simple server example",id:"simple-server-example",level:3},{value:"Using <code>--persist-output</code> and <code>--watch</code>",id:"using---persist-output-and---watch",level:2}],h={toc:m};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Persistence is handled by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay")," command for you. You likely do not need to worry about the contents of this guide."))),(0,i.mdx)("p",null,"The relay compiler supports persisted queries. This is useful because:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"the client operation text becomes just an md5 hash which is usually shorter than the real\nquery string. This saves upload bytes from the client to the server.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"the server can now whitelist queries which improves security by restricting the operations\nthat can be executed by a client."))),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("h2",{id:"usage-on-the-client"},"Usage on the client"),(0,i.mdx)("h3",{id:"the---persist-output-flag"},"The ",(0,i.mdx)("inlineCode",{parentName:"h3"},"--persist-output")," flag"),(0,i.mdx)("p",null,"In your ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm")," script in ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json"),", run the relay compiler using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output")," flag:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./path/to/persisted-queries.json"\n}\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-ouput")," flag does 2 things:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"It converts all query and mutation operation texts to md5 hashes."),(0,i.mdx)("p",{parentName:"li"},"For example without ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output"),", a generated ",(0,i.mdx)("inlineCode",{parentName:"p"},"ConcreteRequest")," might look like below:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": null, // NOTE: id is null\n  "text": "query TodoItemRefetchQuery(\\n  $itemID: ID!\\n) {\\n  node(id: $itemID) {\\n    ...TodoItem_item_2FOrhs\\n  }\\n}\\n\\nfragment TodoItem_item_2FOrhs on Todo {\\n    text\\n    isComplete\\n}\\n",\n  //... excluded for brevity\n};\n})();\n\n')),(0,i.mdx)("p",{parentName:"li"},"With ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output <path>")," this becomes:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": "3be4abb81fa595e25eb725b2c6a87508", // NOTE: id is now an md5 hash of the query text\n  "text": null, // NOTE: text is null now\n  //... excluded for brevity\n};\n})();\n\n'))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"It generates a JSON file at the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<path>")," you specify containing a mapping from query ids\nto the corresponding operation texts."))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./src/queryMaps/queryMap.json"\n}\n')),(0,i.mdx)("p",null,"The example above writes the complete query map file to ",(0,i.mdx)("inlineCode",{parentName:"p"},"./src/queryMaps/queryMap.json"),". You need to ensure all the directories\nleading to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryMap.json")," file exist.")),(0,i.mdx)("h3",{id:"network-layer-changes"},"Network layer changes"),(0,i.mdx)("p",null,"You'll need to modify your network layer fetch implementation to pass a doc_id parameter in the POST body instead of a query parameter:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"function fetchQuery(operation, variables,) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      doc_id: operation.id, // NOTE: pass md5 hash to the server\n      // query: operation.text, // this is now obsolete because text is null\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n")),(0,i.mdx)("h2",{id:"executing-persisted-queries-on-the-server"},"Executing Persisted Queries on the Server"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"Your server should then look up the query referenced by ",(0,i.mdx)("inlineCode",{parentName:"p"},"doc_id")," when responding to this request.")),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"To execute client requests that send persisted queries instead of query text, your server will need to be able\nto lookup the query text corresponding to each id. Typically this will involve saving the output of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output <path>")," JSON file to a database or some other storage mechanism, and retrieving the corresponding text for the ID specified by a client."),(0,i.mdx)("p",null,"For universal applications where the client and server code are in one project, this is not an issue since you can place\nthe query map file in a common location accessible to both the client and the server."),(0,i.mdx)("h3",{id:"compile-time-push"},"Compile time push"),(0,i.mdx)("p",null,"For applications where the client and server projects are separate, one option is to have an additional npm run script\nto push the query map at compile time to a location accessible by your server:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "push-queries": "node ./pushQueries.js",\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-ouput <path> && npm run push-queries"\n}\n')),(0,i.mdx)("p",null,"Some possibilities of what you can do in ",(0,i.mdx)("inlineCode",{parentName:"p"},"./pushQueries.js"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"git push")," to your server repo")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"save the query maps to a database"))),(0,i.mdx)("h3",{id:"run-time-push"},"Run time push"),(0,i.mdx)("p",null,"A second more complex option is to push your query maps to the server at runtime, without the server knowing the query ids at the start.\nThe client optimistically sends a query id to the server, which does not have the query map. The server then in turn requests\nfor the full query text from the client so it can cache the query map for subsequent requests. This is a more complex approach\nrequiring the client and server to interact to exchange the query maps."),(0,i.mdx)("h3",{id:"simple-server-example"},"Simple server example"),(0,i.mdx)("p",null,"Once your server has access to the query map, you can perform the mapping. The solution varies depending on the server and\ndatabase technologies you use, so we'll just cover the most common and basic example here."),(0,i.mdx)("p",null,"If you use ",(0,i.mdx)("inlineCode",{parentName:"p"},"express-graphql")," and have access to the query map file, you can import the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output")," JSON file directly and\nperform the matching using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"matchQueryMiddleware")," from ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/yusinto/relay-compiler-plus"},"relay-compiler-plus"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import Express from 'express';\nimport expressGraphql from 'express-graphql';\nimport {matchQueryMiddleware} from 'relay-compiler-plus';\nimport queryMapJson from './path/to/persisted-queries.json';\n\nconst app = Express();\n\napp.use('/graphql',\n  matchQueryMiddleware(queryMapJson),\n  expressGraphql({schema}));\n")),(0,i.mdx)("h2",{id:"using---persist-output-and---watch"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"--persist-output")," and ",(0,i.mdx)("inlineCode",{parentName:"h2"},"--watch")),(0,i.mdx)("p",null,"It is possible to continuously generate the query map files by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"--watch")," options simultaneously.\nThis only makes sense for universal applications i.e. if your client and server code are in a single project\nand you run them both together on localhost during development. Furthermore, in order for the server to pick up changes\nto the ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryMap.json"),", you'll need to have server side hot-reloading set up. The details on how to set this up\nis out of the scope of this document.")),(0,i.mdx)(s.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);