"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[719],{2792:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(5893),s=o(1151);const r={sidebar_position:2},c="Custom hook",a={id:"doc/usage/advanced/custom-hook",title:"Custom hook",description:"See appendStyles API",source:"@site/docs/doc/usage/advanced/custom-hook.md",sourceDirName:"doc/usage/advanced",slug:"/doc/usage/advanced/custom-hook",permalink:"/docs/doc/usage/advanced/custom-hook",draft:!1,unlisted:!1,editUrl:"https://github.com/Ann2827/react-append-styles/tree/main/docs/doc/usage/advanced/custom-hook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebarDoc",previous:{title:"Redefinition cssVars",permalink:"/docs/doc/usage/advanced/redefinition-css-vars"}},i={},d=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"custom-hook",children:"Custom hook"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"import React from 'react';\nimport { appendStyles } from 'react-append-styles';\n\nconst useColors = (config: Record<string, string>): void => {\n  const refColors = React.useRef<typeof config>(config);\n  React.useEffect(() => {\n    if (Object.keys(refColors.current).length === 0) return;\n\n    const remove = appendStyles({ 'div[data-theme]': refColors.current });\n    return () => remove();\n  }, []);\n};\n\nconst MyComponent: React.FC = ({ color = 'blue' }) => {\n  useColors({ '--my-app-primaryColor': color });\n\n  return (<div data-theme>My Component</div>);\n};\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["See appendStyles ",(0,t.jsx)(n.a,{href:"../../../api/advanced#appendstyles",children:"API"})]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>c});var t=o(7294);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);