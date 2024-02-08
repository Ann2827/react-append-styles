"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[531],{5989:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var n=s(5893),i=s(1151),r=s(869);const c={sidebar_position:2},d="Creating themes",a={id:"api/theming",title:"Creating themes",description:"ThemeContext",source:"@site/docs/api/theming.mdx",sourceDirName:"api",slug:"/api/theming",permalink:"/react-append-styles/docs/api/theming",draft:!1,unlisted:!1,editUrl:"https://github.com/Ann2827/react-append-styles/tree/main/docs/api/theming.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebarApi",previous:{title:"Classes",permalink:"/react-append-styles/docs/api/classes"},next:{title:"Additional functions",permalink:"/react-append-styles/docs/api/advanced"}},l={},o=[{value:"<code>ThemeContext</code>",id:"themecontext",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"creating-themes",children:"Creating themes"}),"\n","\n","\n",(0,n.jsx)(t.h2,{id:"themecontext",children:(0,n.jsx)(t.code,{children:"ThemeContext"})}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Arguments"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"makeClasses"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TMakeClasses<T extends TTheme>"})}),(0,n.jsxs)(t.td,{children:["\u0441\u043c. ",(0,n.jsx)(t.a,{href:"./classes#example-with-dynamic-props",children:"makeClasses"})]}),(0,n.jsxs)(t.td,{children:["Everything is the same as with the usual ",(0,n.jsx)(t.code,{children:"makeClasses"}),", but in ",(0,n.jsx)(t.code,{children:"props"})," you can access the `theme'."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"useTheme"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IStore<T>['useSubscribe']"})}),(0,n.jsx)(t.td,{children:"1 - listener ((state: TTheme) => state)"}),(0,n.jsx)(t.td,{children:"Allows you to subscribe to the entire active topic or only to a certain part."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"switchTheme"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"(themeName: K extends string) => void"})}),(0,n.jsx)(t.td,{children:"1 - themeName"}),(0,n.jsx)(t.td,{children:"Allows you to switch the active theme."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"reset"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"() => void"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Resets the state by the time of initialization. Namely, the object with the themes will remain in memory. But the selected topic will be reset to default and the listeners will be cleared."})]})]})]})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},869:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(7294),i=s(6550);const r={apiTable:"apiTable_e8hp"};var c=s(5893);function d(e,t){let{name:s,children:r}=e;const d=function(e){let t=e;for(;(0,n.isValidElement)(t);)[t]=n.Children.toArray(t.props.children);return t}(r),a=s?`${s}-${d}`:d,l=`#${a}`,o=(0,i.k6)();return(0,c.jsx)("tr",{id:a,tabIndex:0,ref:o.location.hash===l?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||o.push(l)},onKeyDown:e=>{"Enter"===e.key&&o.push(l)},children:r.props.children})}const a=n.forwardRef(d);function l(e){let{children:t,name:s}=e;const[i,d]=n.Children.toArray(t.props.children),l=(0,n.useRef)(null);(0,n.useEffect)((()=>{l.current?.focus()}),[l]);const o=n.Children.map(d.props.children,(e=>(0,c.jsx)(a,{name:s,ref:l,children:e})));return(0,c.jsxs)("table",{className:r.apiTable,children:[i,(0,c.jsx)("tbody",{children:o})]})}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>c});var n=s(7294);const i={},r=n.createContext(i);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);