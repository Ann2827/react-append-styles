"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[110],{3158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(5893),i=t(1151),c=t(2991);const r={},a="Additional functions",o={id:"doc/usage/advanced/index",title:"Additional functions",description:"The following functions can be called from js or used for custom hooks. They can provide more features if there is not enough functionality.",source:"@site/docs/doc/usage/advanced/index.mdx",sourceDirName:"doc/usage/advanced",slug:"/doc/usage/advanced/",permalink:"/react-append-styles/docs/doc/usage/advanced/",draft:!1,unlisted:!1,editUrl:"https://github.com/Ann2827/react-append-styles/tree/main/docs/doc/usage/advanced/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebarDoc",previous:{title:"Creating themes",permalink:"/react-append-styles/docs/doc/usage/theming"},next:{title:"Redefinition cssVars",permalink:"/react-append-styles/docs/doc/usage/advanced/redefinition-css-vars"}},d={},l=[];function u(e){const n={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"additional-functions",children:"Additional functions"}),"\n","\n","\n",(0,s.jsx)(n.p,{children:"The following functions can be called from js or used for custom hooks. They can provide more features if there is not enough functionality."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../../api/advanced#appendstyles",children:"appendStyles"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../../api/advanced#appendclasses",children:"appendClasses"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../../api/advanced#generateclasses",children:"generateClasses"})}),"\n"]}),"\n",(0,s.jsx)(c.Z,{})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2991:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var s=t(6905),i=t(3438),c=t(9960),r=t(3919),a=t(5999),o=t(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=t(5893);function u(e){let{href:n,children:t}=e;return(0,l.jsx)(c.Z,{href:n,className:(0,s.Z)("card padding--lg",d.cardContainer),children:t})}function p(e){let{href:n,icon:t,title:i,description:c}=e;return(0,l.jsxs)(u,{href:n,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:i,children:[t," ",i]}),c&&(0,l.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function f(e){let{item:n}=e;const t=(0,i.LM)(n);return t?(0,l.jsx)(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function h(e){let{item:n}=e;const t=(0,r.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(n.docId??void 0);return(0,l.jsx)(p,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function m(e){let{item:n}=e;switch(n.type){case"link":return(0,l.jsx)(h,{item:n});case"category":return(0,l.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,i.jA)();return(0,l.jsx)(g,{items:t.items,className:n})}function g(e){const{items:n,className:t}=e;if(!n)return(0,l.jsx)(x,{...e});const c=(0,i.MN)(n);return(0,l.jsx)("section",{className:(0,s.Z)("row",t),children:c.map(((e,n)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(m,{item:e})},n)))})}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);