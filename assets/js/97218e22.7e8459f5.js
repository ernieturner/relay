"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7189],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){return function(n){var t=p(n.components);return a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(h,l(l({ref:n},s),{},{components:t})):a.createElement(h,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],l={id:"alias-directive",title:"@alias Directive",slug:"/guides/alias-directive/",description:"Relay guide to @alias",keywords:["alias","directive","fragment"]},d=void 0,s={unversionedId:"guides/alias-directive",id:"version-v17.0.0/guides/alias-directive",title:"@alias Directive",description:"Relay guide to @alias",source:"@site/versioned_docs/version-v17.0.0/guides/alias-directive.md",sourceDirName:"guides",slug:"/guides/alias-directive/",permalink:"/docs/v17.0.0/guides/alias-directive/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v17.0.0/guides/alias-directive.md",tags:[],version:"v17.0.0",frontMatter:{id:"alias-directive",title:"@alias Directive",slug:"/guides/alias-directive/",description:"Relay guide to @alias",keywords:["alias","directive","fragment"]},sidebar:"docs",previous:{title:"@required Directive",permalink:"/docs/v17.0.0/guides/required-directive/"},next:{title:"Error States with ErrorBoundaries",permalink:"/docs/v17.0.0/guided-tour/rendering/error-states/"}},m={},p=[{value:"Abstract Types",id:"abstract-types",level:2},{value:"Aliased Fragments",id:"aliased-fragments",level:2},{value:"@skip and @include",id:"skip-and-include",level:2},{value:"Enforced Safety",id:"enforced-safety",level:2},{value:"Use with @required",id:"use-with-required",level:2},{value:"Under the Hood",id:"under-the-hood",level:2},{value:"Related",id:"related",level:3}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"warning"},(0,i.mdx)("p",{parentName:"admonition"},(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," is an experimental feature. To try it out, you will need at least v17.0.0, and to enable the ",(0,i.mdx)("inlineCode",{parentName:"p"},"enable_fragment_aliases")," compiler feature flag in your compiler config.")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," directive allows you to expose a spread fragment \u2014 either a named fragment spread or an inline fragment \u2014 as a named field within your selection. This allows Relay to provide additional type safety in the case where your fragment\u2019s type may not match the parent selection."),(0,i.mdx)("admonition",{type:"info"},(0,i.mdx)("p",{parentName:"admonition"},"This document describes why the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," directive was introduced, and how it can be used to improve type safety in your Relay applications. ",(0,i.mdx)("strong",{parentName:"p"},"To learn about it's API, see the ",(0,i.mdx)("a",{parentName:"strong",href:"/docs/v17.0.0/api-reference/graphql-and-directives/#alias"},"API Reference"),"."))),(0,i.mdx)("p",null,"Let\u2019s look at an examples where ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," can be useful:"),(0,i.mdx)("h2",{id:"abstract-types"},"Abstract Types"),(0,i.mdx)("p",null,"Imagine you have a component that renders information about a Viewer:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"function MyViewer({viewerKey}) {\n  const {name} = useFragment(graphql`\n    fragment MyViewer on Viewer {\n      name @required(action: THROW)\n    }`, viewerKey);\n\n  return `My name is ${name}. That's ${name.length} letters long!`;\n}\n")),(0,i.mdx)("p",null,"To use that component in a component that has a fragment on Node (which Viewer implements), you could write something like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"function MyNode({nodeKey}) {\n  const node = useFragment(graphql`\n    fragment MyFragment on Node {\n      ...MyViewer\n    }`, nodeKey);\n\n  return <MyViewer viewerKey={node} />\n}\n")),(0,i.mdx)("p",null,"Can you spot the problem? We don\u2019t actually know that the node we are passing to ",(0,i.mdx)("inlineCode",{parentName:"p"},"<MyViewer />")," is actually a Viewer ",(0,i.mdx)("inlineCode",{parentName:"p"},"<MyViewer />"),". If ",(0,i.mdx)("inlineCode",{parentName:"p"},"<MyNode />")," tries to render a Comment \u2014 which also implements Node \u2014 we will get a runtime error in ",(0,i.mdx)("inlineCode",{parentName:"p"},"<MyViewer />")," because the field name is not present on Comment."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"TypeError: Cannot read properties of undefined (reading 'length')\n")),(0,i.mdx)("p",null,"Not only do we not get a type letting us know that about this potential issue, but even at runtime, there is no way way to check if node implements Viewer because Viewer is an abstract type!"),(0,i.mdx)("h2",{id:"aliased-fragments"},"Aliased Fragments"),(0,i.mdx)("p",null,"Aliased fragments can solve this problem. Here\u2019s what ",(0,i.mdx)("inlineCode",{parentName:"p"},"<MyNode />")," would look like using them:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'function MyNode({nodeKey}) {\n  const node = useFragment(graphql`\n    fragment MyFragment on Node {\n      ...MyViewer @alias(as: "my_viewer")\n    }`, nodeKey);\n\n  // Relay returns the fragment key as its own nullable property\n  if(node.my_viewer == null) {\n    return null;\n  }\n\n  // Because `my_viewer` is typed as nullable, Flow/TypeScript will\n  // show an error if you try to use the `my_viewer` without first\n  // performing a null check.\n  //                          VVVVVVVVVVVVVV\n  return <MyViewer viewerKey={node.my_viewer} />\n}\n')),(0,i.mdx)("p",null,"With this approach, you can see that Relay exposes the fragment key as its own nullable property, which allows us to check that node actually implements Viewer and even allows Flow to enforce that the component handles the possibility!"),(0,i.mdx)("h2",{id:"skip-and-include"},"@skip and @include"),(0,i.mdx)("p",null,"A similar problem can occur when using ",(0,i.mdx)("inlineCode",{parentName:"p"},"@skip")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@include")," directives on fragments. In order to safely use the spread fragment, you need to check if it was fetched. Historically this has required gaining access to the query variable that was used to determine if the fragment was skipped or included."),(0,i.mdx)("p",null,"With ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias"),", you can now check if the fragment was fetched by simply assigning the fragment an alias, and checking if the alias is null:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'function MyUser({userKey}) {\n  const user = useFragment(graphql`\n    fragment MyFragment on User {\n      ...ConditionalData @skip(if: $someVar) @alias\n    }`, userKey);\n\n  if(user.ConditionalData == null) {\n    return "No data fetched";\n  }\n  return <ConditionalData userKey={user.ConditionalData} />\n}\n')),(0,i.mdx)("h2",{id:"enforced-safety"},"Enforced Safety"),(0,i.mdx)("p",null,"We've outlined two different ways that fragments can be unsafe in Relay today without ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias"),". To help prevent runtime issues resulting from these unsafe edge cases, Relay will soon require that all conditionally fetched fragments be aliased."),(0,i.mdx)("p",null,"To experiment with this validation in your project today, you can enable the experimental ",(0,i.mdx)("inlineCode",{parentName:"p"},"enforce_fragment_alias_where_ambiguous")," compiler feature flag for your project. To enable incremental adoption of this enforcement, Relay exposes a directive ",(0,i.mdx)("inlineCode",{parentName:"p"},"@dangerously_unaliased_fixme")," which will suppress these enforcement errors. This will allow you to enable the enforcement for all new spreads without first needing to migrate all existing issues."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v17.0.0/editor-support/"},"Relay VSCode extension")," offers quick fixes to add either ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"@dangerously_unaliased_fixme")," to unsafe fragments."),(0,i.mdx)("h2",{id:"use-with-required"},"Use with @required"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," can be used with ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v17.0.0/guides/required-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@required(action: NONE)"))," to group together required fields. In the following example, we group ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"email")," together as ",(0,i.mdx)("inlineCode",{parentName:"p"},"requiredFields"),". If either is null, that null will bubble up to, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"user.requiredFields")," field, making it null. This allows us to perform a single check, without impacting the ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," field."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'function MyUser({userKey}) {\n  const user = useFragment(graphql`\n    fragment MyFragment on User {\n      id\n      ... @alias(as: "requiredFields") {\n        name @required(action: NONE)\n        email @required(action: NONE)\n      }\n    }`, userKey);\n\n  if(user.requiredFields == null) {\n    return `Missing required fields for user ${user.id}`;\n  }\n  return `Hello ${user.requiredFields.name} (${user.requiredFields.email}).!`;\n}\n')),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Using ",(0,i.mdx)("inlineCode",{parentName:"p"},"@required")," on a fragment spread that has an ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," is not currently supported, but we may add support in the future.")),(0,i.mdx)("h2",{id:"under-the-hood"},"Under the Hood"),(0,i.mdx)("p",null,"For people familiar with Relay, or curious to learn, here is a brief description of how this feature is implemented:"),(0,i.mdx)("p",null,"Under the hood, ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," is implemented entirely within Relay (compiler and runtime). It does not require any server support. The Relay compiler interprets the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," directive, and generates types indicating that the fragment key, or inline fragment data, will be attached to the new field, rather than directly on the parent object. In the Relay runtime artifact, it wraps the fragment node with a new node indicating the name of the alias and additional information about the type of the fragment."),(0,i.mdx)("p",null,"The Relay compiler also inserts an additional field into the spread which allows it to determine if the fragment has matched:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment Foo on Node {\n  ... on Viewer {\n    isViewer: __typename # <-- Relay inserts this\n    name\n  }\n}\n")),(0,i.mdx)("p",null,"Relay can now check for the existence of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"isViewer")," field in the response to know if the fragment matched."),(0,i.mdx)("p",null,"When Relay reads the content of your fragment out of the store using its runtime artifact, it uses this information to attach the fragment key to this new field, rather than attaching it directly to the parent object."),(0,i.mdx)("h3",{id:"related"},"Related"),(0,i.mdx)("p",null,"While ",(0,i.mdx)("inlineCode",{parentName:"p"},"@alias")," is a Relay-specific feature, it draws inspiration from fragment modularity as outlined in the GraphQL ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/graphql/graphql-wg/blob/main/rfcs/FragmentModularity.md"},"RFC Fragment Modularity"),"."))}c.isMDXComponent=!0}}]);