"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[8610],{2568:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(7325),a=s(3672),i=s(5893);function r(e){const{metadata:t}=e,{previousPage:s,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,i.jsx)(a.Z,{permalink:s,title:(0,i.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.Z,{permalink:r,title:(0,i.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},8389:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(9107),a=s(8146),i=s(5893);function r(e){let{items:t,component:s=a.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.n,{content:t,children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},4883:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(7294);var n=s(6010),a=s(7325),i=s(3777),r=s(5463),l=s(3702),o=s(3699),c=s(6489),d=s(2568),m=s(3647),g=s(8389),u=s(9501),h=s(3899),p=s(5893);function b(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function x(e){let{tag:t}=e;const s=b(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:s}),(0,p.jsx)(m.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:s,sidebar:n,listMetadata:i}=e;const r=b(t);return(0,p.jsxs)(c.Z,{sidebar:n,children:[t.unlisted&&(0,p.jsx)(u.Z,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.Z,{as:"h1",children:r}),(0,p.jsx)(o.Z,{href:t.allTagsPath,children:(0,p.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.Z,{items:s}),(0,p.jsx)(d.Z,{metadata:i})]})}function f(e){return(0,p.jsxs)(r.FG,{className:(0,n.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},9501:(e,t,s)=>{s.d(t,{Z:()=>u});s(7294);var n=s(6010),a=s(7325),i=s(1514),r=s(5893);function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(3702),m=s(9114);function g(e){let{className:t}=e;return(0,r.jsx)(m.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,n.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function u(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(g,{...e})]})}},7586:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(9861),a=s(9200),i=s(5893);function r(){const{colorMode:e}=(0,a.I)();return(0,i.jsx)(n.Z,{repo:"solidSpoon/solidSpoon.github.io",repoId:"R_kgDOKrU8nQ",category:"Comments",categoryId:"DIC_kwDOKrU8nc4Ca5uP",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy"})}},8146:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var n=s(9107),a=s(1116),i=s(7586),r=s(1048),l=s(5893);function o(e){const{metadata:t,isBlogPostPage:s}=(0,n.C)(),{frontMatter:o,slug:c,title:d}=((0,r.Z)(),t),{enableComments:m}=o,g=(!0===m||void 0===m)&&s;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{...e}),g&&(0,l.jsx)(i.Z,{})]})}},4503:(e,t,s)=>{s.d(t,{Z:()=>g});var n=s(7294),a=s(6010),i=s(3699),r=s(7325),l=s(129);const o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};var c=s(8388),d=s(6550),m=s(5893);function g(e){let{sidebar:t}=e;const s=(0,d.TH)(),g=n.useRef(),u=n.useRef();console.log("useRouteContext1",s),(0,n.useEffect)((()=>{g.current&&u.current&&g.current.scrollTo({top:u.current.offsetTop-100,behavior:"smooth"})}),[t]);const h=(0,l.c)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,a.Z)(o.sidebar),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,a.Z)(o.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,m.jsx)("div",{ref:g,className:(0,c.m6)("h-full w-full overflow-y-auto thin-scrollbar"),children:(0,m.jsx)("ul",{className:(0,a.Z)(o.sidebarItemList,"clean-list"),children:h.map((e=>{const t=s.pathname===e.permalink;return(0,m.jsx)("li",{className:o.sidebarItem,children:(0,m.jsx)(i.Z,{ref:t?u:void 0,isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive,children:e.title})},e.permalink)}))})})]})})}}}]);