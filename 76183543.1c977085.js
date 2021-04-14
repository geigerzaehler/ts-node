(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(92)),i={title:"How It Works"},c={unversionedId:"how-it-works",id:"how-it-works",isDocsHomePage:!1,title:"How It Works",description:"ts-node works by registering hooks for .ts, .tsx, .js, and/or .jsx extensions.",source:"@site/docs/how-it-works.md",slug:"/how-it-works",permalink:"/ts-node/docs/how-it-works",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/how-it-works.md",version:"current",sidebar:"primarySidebar",previous:{title:"Getting Started",permalink:"/ts-node/docs/"},next:{title:"Usage",permalink:"/ts-node/docs/usage"}},l=[{value:"Skipping <code>node_modules</code>",id:"skipping-node_modules",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," works by registering hooks for ",Object(o.b)("inlineCode",{parentName:"p"},".ts"),", ",Object(o.b)("inlineCode",{parentName:"p"},".tsx"),", ",Object(o.b)("inlineCode",{parentName:"p"},".js"),", and/or ",Object(o.b)("inlineCode",{parentName:"p"},".jsx")," extensions."),Object(o.b)("p",null,"Vanilla ",Object(o.b)("inlineCode",{parentName:"p"},"node")," loads ",Object(o.b)("inlineCode",{parentName:"p"},".js")," by reading code from disk and executing it.  Our hooks transform code via the TypeScript compiler and pass the result to ",Object(o.b)("inlineCode",{parentName:"p"},"node")," for execution.  This transformation will respect your ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," as if you had compiled via ",Object(o.b)("inlineCode",{parentName:"p"},"tsc"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".js")," and ",Object(o.b)("inlineCode",{parentName:"p"},".jsx")," are only registered when ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"}),Object(o.b)("inlineCode",{parentName:"a"},"allowJs"))," is enabled."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".tsx")," and ",Object(o.b)("inlineCode",{parentName:"p"},".jsx")," are only registered when ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/jsx.html"}),Object(o.b)("inlineCode",{parentName:"a"},"jsx"))," is enabled."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Extension"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Requirements for transformation"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},".ts")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"path not ignored (by default, ",Object(o.b)("inlineCode",{parentName:"td"},"node_modules")," are ignored)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},".tsx")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"path not ignored, ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.typescriptlang.org/docs/handbook/jsx.html"}),Object(o.b)("inlineCode",{parentName:"a"},'"jsx"'))," enabled")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},".js")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"path not ignored, ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"}),Object(o.b)("inlineCode",{parentName:"a"},'"allowJs"'))," enabled")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},".jsx")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"path not ignored, ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"}),Object(o.b)("inlineCode",{parentName:"a"},'"allowJs"'))," and ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.typescriptlang.org/docs/handbook/jsx.html"}),Object(o.b)("inlineCode",{parentName:"a"},'"jsx"'))," enabled")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Warning:")," if a file is ignored or its file extension is not registered, node will either fail to resolve the file or will attempt to execute it as JavaScript without any transformation.  This may cause syntax errors or other failures, because node does not understand TypeScript type syntax nor bleeding-edge ECMAScript features.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Warning:")," When ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," is used with ",Object(o.b)("inlineCode",{parentName:"p"},"allowJs"),", all non-ignored JavaScript files are transformed using the TypeScript compiler.")),Object(o.b)("h2",{id:"skipping-node_modules"},"Skipping ",Object(o.b)("inlineCode",{parentName:"h2"},"node_modules")),Object(o.b)("p",null,"By default, ",Object(o.b)("strong",{parentName:"p"},"TypeScript Node")," avoids compiling files in ",Object(o.b)("inlineCode",{parentName:"p"},"/node_modules/")," for three reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Modules should always be published in a format node.js can consume"),Object(o.b)("li",{parentName:"ol"},"Transpiling the entire dependency tree will make your project slower"),Object(o.b)("li",{parentName:"ol"},"Differing behaviours between TypeScript and node.js (e.g. ES2015 modules) can result in a project that works until you decide to support a feature natively from node.js")))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?a.a.createElement(u,c(c({ref:t},b),{},{components:n})):a.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);