"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[3089],{9928:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});s(7294);var a=s(6010),i=s(9962),n=s(5463),r=s(3702),o=s(6489),l=s(2568),d=s(3647),c=s(8389),m=s(5893);function g(e){const{metadata:t}=e,{siteConfig:{title:s}}=(0,i.Z)(),{blogDescription:a,blogTitle:r,permalink:o}=t,l="/"===o?s:r;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.d,{title:l,description:a}),(0,m.jsx)(d.Z,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:s,sidebar:a}=e;return(0,m.jsxs)(o.Z,{sidebar:a,children:[(0,m.jsx)(c.Z,{items:s}),(0,m.jsx)(l.Z,{metadata:t})]})}function b(e){return(0,m.jsxs)(n.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogListPage),children:[(0,m.jsx)(g,{...e}),(0,m.jsx)(p,{...e})]})}},2568:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var a=s(7325),i=s(3672),n=s(5893);function r(e){const{metadata:t}=e,{previousPage:s,nextPage:r}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,n.jsx)(i.Z,{permalink:s,title:(0,n.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,n.jsx)(i.Z,{permalink:r,title:(0,n.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},8389:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var a=s(9107),i=s(8146),n=s(5893);function r(e){let{items:t,component:s=i.Z}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(a.n,{content:t,children:(0,n.jsx)(s,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},7586:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var a=s(9861),i=s(9200),n=s(5893);function r(){const{colorMode:e}=(0,i.I)();return(0,n.jsx)(a.Z,{repo:"solidSpoon/solidSpoon.github.io",repoId:"R_kgDOKrU8nQ",category:"Comments",categoryId:"DIC_kwDOKrU8nc4Ca5uP",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy"})}},8146:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var a=s(9107),i=s(1116),n=s(7586),r=s(1048),o=s(5893);function l(e){const{metadata:t,isBlogPostPage:s}=(0,a.C)(),{frontMatter:l,slug:d,title:c}=((0,r.Z)(),t),{enableComments:m}=l,g=(!0===m||void 0===m)&&s;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{...e}),g&&(0,o.jsx)(n.Z,{})]})}},4503:(e,t,s)=>{s.d(t,{Z:()=>g});var a=s(7294),i=s(6010),n=s(3699),r=s(7325),o=s(129);const l={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};var d=s(8388),c=s(6550),m=s(5893);function g(e){let{sidebar:t}=e;const s=(0,c.TH)(),g=a.useRef(),p=a.useRef();console.log("useRouteContext1",s),(0,a.useEffect)((()=>{g.current&&p.current&&g.current.scrollTo({top:p.current.offsetTop-100,behavior:"smooth"})}),[t]);const b=(0,o.c)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,i.Z)(l.sidebar),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,i.Z)(l.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,m.jsx)("div",{ref:g,className:(0,d.m6)("h-full w-full overflow-y-auto thin-scrollbar"),children:(0,m.jsx)("ul",{className:(0,i.Z)(l.sidebarItemList,"clean-list"),children:b.map((e=>{const t=s.pathname===e.permalink;return(0,m.jsx)("li",{className:l.sidebarItem,children:(0,m.jsx)(n.Z,{ref:t?p:void 0,isNavLink:!0,to:e.permalink,className:l.sidebarItemLink,activeClassName:l.sidebarItemLinkActive,children:e.title})},e.permalink)}))})})]})})}}}]);