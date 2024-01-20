"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[1367],{2540:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=o(5893),t=o(1151);const s={slug:"docker-network-configuration",title:"Docker \u7f51\u7edc\u8bbe\u7f6e",authors:["solidSpoon"],tags:["Docker"]},c=void 0,i={permalink:"/blog/docker-network-configuration",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021/02-18-docker-network-configuration/index.md",source:"@site/blog/2021/02-18-docker-network-configuration/index.md",title:"Docker \u7f51\u7edc\u8bbe\u7f6e",description:"\u8fd9\u91cc\u5217\u51fa Docker \u914d\u7f6e\u7f51\u7edc\u7684\u5e38\u7528\u547d\u4ee4",date:"2021-02-18T00:00:00.000Z",formattedDate:"2021\u5e742\u670818\u65e5",tags:[{label:"Docker",permalink:"/blog/tags/docker"}],readingTime:1.235,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"docker-network-configuration",title:"Docker \u7f51\u7edc\u8bbe\u7f6e",authors:["solidSpoon"],tags:["Docker"]},unlisted:!1,prevItem:{title:"Docker \u8bca\u65ad\u795e\u5668 BusyBox",permalink:"/blog/docker-diagnostic-tool-busybox"},nextItem:{title:"\u914d\u7f6e WSL2 \u4f7f\u7528 Windows \u4ee3\u7406\u4e0a\u7f51",permalink:"/blog/configuring-wsl2-to-use-windows-proxy-for-internet-access"}},l={authorsImageUrls:[void 0]},d=[];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u5217\u51fa Docker \u914d\u7f6e\u7f51\u7edc\u7684\u5e38\u7528\u547d\u4ee4"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"docker network create"}),"\n",(0,r.jsx)(n.li,{children:"docker network connect"}),"\n",(0,r.jsx)(n.li,{children:"docker network ls"}),"\n",(0,r.jsx)(n.li,{children:"docker network rm"}),"\n",(0,r.jsx)(n.li,{children:"docker network disconnect"}),"\n",(0,r.jsx)(n.li,{children:"docker network inspect"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5217\u51fa\u6240\u6709\u7f51\u7edc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network ls\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u7f51\u7edc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network create <my-net>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u7f51\u7edc\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network inspect <my-net>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5bb9\u5668\u7684\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network inspect <my-docker-name>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4e00\u4e2a\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network connect <my-net> <my-docker-name>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u5bb9\u5668\u65f6\u5c31\u6307\u5b9a\u7f51\u7edc\uff0c\u4ee5 busybox \u4e3a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -it --rm --name busybox1 --network <my-net> busybox sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7ed9\u5bb9\u5668\u5728\u6307\u5b9a\u7f51\u7edc\u4e2d\u8d77\u4e00\u4e2a\u522b\u540d\uff0c\u7f51\u7edc\u4e2d\u7684\u5bb9\u5668\u53ef\u4ee5\u901a\u8fc7\u522b\u540d\u8bbf\u95ee"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run --net <my-net> -itd --name <my-docker-name> --net-alias <alias-name> busybox\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u591a\u4e2a\u5bb9\u5668\u8d77\u4e00\u4e2a\u522b\u540d\u65f6\u7b2c\u4e00\u4e2a\u8d77\u7684\u6709\u6548\uff0c\u7b2c\u4e00\u4e2a\u4e0b\u7ebf\u540e\u7b2c\u4e8c\u4e2a\u6709\u6548"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u5bb9\u5668\u4ece\u7f51\u7edc\u65ad\u5f00"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network disconnect <my-net> <my-docker-name>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5220\u9664\u521b\u5efa\u7684\u7f51\u7edc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network rm <my-net>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u4fdd\u8bc1\u8be5\u7f51\u7edc\u6ca1\u6709\u5bb9\u5668\u94fe\u63a5"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://blog.csdn.net/gezhonglei2007/article/details/51627821",children:"https://blog.csdn.net/gezhonglei2007/article/details/51627821"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.cnkirito.moe/docker-network-bridge/",children:"https://www.cnkirito.moe/docker-network-bridge/"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>c});var r=o(7294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);