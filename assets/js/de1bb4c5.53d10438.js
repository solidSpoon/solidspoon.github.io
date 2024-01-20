"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[8455],{3004:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var s=l(5893),a=l(1151);const r={slug:"getting-started-with-jshell",title:"\u521d\u8bc6 JShell",authors:["solidSpoon"],tags:["Java"]},d=void 0,i={permalink:"/blog/getting-started-with-jshell",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021/02-23-getting-started-with-jshell/index.md",source:"@site/blog/2021/02-23-getting-started-with-jshell/index.md",title:"\u521d\u8bc6 JShell",description:"\u521d\u8bc6 JShell",date:"2021-02-23T00:00:00.000Z",formattedDate:"2021\u5e742\u670823\u65e5",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:3.935,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"getting-started-with-jshell",title:"\u521d\u8bc6 JShell",authors:["solidSpoon"],tags:["Java"]},unlisted:!1,prevItem:{title:"\u624b\u628a\u624b\u6559\u4f60\u8bfb\u4e00\u4e2a Java \u6587\u4ef6\u7684\u5b57\u8282\u7801",permalink:"/blog/step-by-step-guide-to-reading-bytecode-of-a-java-file"},nextItem:{title:"PhotoShop \u56fe\u5c42\u7684\u6df7\u5408\u6a21\u5f0f\u662f\u600e\u4e48\u56de\u4e8b",permalink:"/blog/understanding-blending-modes-in-photoshop-layers\u201d"}},c={authorsImageUrls:[void 0]},t=[{value:"\u521d\u8bc6 JShell",id:"\u521d\u8bc6-jshell",level:2},{value:"\u542f\u52a8\u4e0e\u9000\u51fa",id:"\u542f\u52a8\u4e0e\u9000\u51fa",level:2},{value:"\u7b80\u5355\u4f7f\u7528",id:"\u7b80\u5355\u4f7f\u7528",level:2},{value:"\u53d8\u91cf\u8d4b\u503c",id:"\u53d8\u91cf\u8d4b\u503c",level:3},{value:"\u65b9\u6cd5\u4e0e\u7c7b",id:"\u65b9\u6cd5\u4e0e\u7c7b",level:3},{value:"\u5185\u7f6e\u547d\u4ee4",id:"\u5185\u7f6e\u547d\u4ee4",level:3},{value:"\u5916\u90e8\u7f16\u8f91\u5668",id:"\u5916\u90e8\u7f16\u8f91\u5668",level:2},{value:"\u4f7f\u7528\u9ed8\u8ba4\u7f16\u8f91\u5668",id:"\u4f7f\u7528\u9ed8\u8ba4\u7f16\u8f91\u5668",level:3},{value:"\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668",id:"\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u521d\u8bc6-jshell",children:"\u521d\u8bc6 JShell"}),"\n",(0,s.jsx)(n.p,{children:"\u5347\u7ea7\u5230 Java 11 \u540e\uff0c\u6709\u4e86 JShell \u8fd9\u4e2a\u5de5\u5177\uff08\u5176\u5b9e Java 9 \u5c31\u6709\u4e86\uff09\uff0c\u5b83\u8ba9 Java \u53ef\u4ee5\u50cf\u811a\u672c\u8bed\u8a00\u4e00\u6837\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4ea4\u4e92\uff0c\u542c\u8d77\u6765\u597d\u795e\u5947\uff0c\u5feb\u6765\u4f53\u9a8c\u4e00\u4e0b\uff01\uff01"}),"\n",(0,s.jsx)(n.h2,{id:"\u542f\u52a8\u4e0e\u9000\u51fa",children:"\u542f\u52a8\u4e0e\u9000\u51fa"}),"\n",(0,s.jsx)(n.p,{children:"\u4fdd\u9669\u8d77\u89c1\uff0c\u5f97\u5148\u5f04\u660e\u767d\u542f\u52a8\u4e0e\u9000\u51fa"}),"\n",(0,s.jsxs)(n.p,{children:["\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"jshell"})," \u5c31\u542f\u52a8\u4e86"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u279c  ~cedar jshell\n|  Welcome to JShell -- Version 11.0.9.1\n|  For an introduction type: /help intro\n\njshell>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9000\u51fa\u65b9\u5f0f\u7a0d\u5fae\u6709\u4e00\u4e9b\u7279\u522b\uff0c\u547d\u4ee4\u662f ",(0,s.jsx)(n.code,{children:"/exit"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jshell> /exit\n|  Goodbye\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"jshell -h"})," \u53ef\u4ee5\u53d1\u73b0\u63d0\u4f9b\u4e86\u51e0\u4e2a\u9009\u9879\uff0c\u8fd9\u4ee8\u6bd4\u8f83\u6709\u610f\u601d"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"    -q                    Quiet feedback.  Same as: --feedback concise\n    -s                    Really quiet feedback.  Same as: --feedback silent\n    -v                    Verbose feedback.  Same as: --feedback verbose\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bd5\u4e86\u4e00\u4e0b ",(0,s.jsx)(n.code,{children:"-s"})," \u975e\u5e38\u5b89\u9759\u7684\u53cd\u9988\uff0c\u770b\u8d77\u6765\u771f\u7684\u6e05\u723d"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u279c  ~cedar jshell -s\n-> int a = 1;\n-> int b = 2;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u521d\u5b66\u8005\u8fd8\u662f\u522b\u6574\u8fd9\u4e48\u5b89\u9759\u4e86\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-v"})," \u5f00\u542f\u8be6\u7ec6\u53cd\u9988\u5427"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u279c  ~cedar jshell -v\n|  Welcome to JShell -- Version 11.0.9.1\n|  For an introduction type: /help intro\n\njshell>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7b80\u5355\u4f7f\u7528",children:"\u7b80\u5355\u4f7f\u7528"}),"\n",(0,s.jsx)(n.h3,{id:"\u53d8\u91cf\u8d4b\u503c",children:"\u53d8\u91cf\u8d4b\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u8d4b\u51e0\u4e2a\u503c\u770b\u770b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jshell> int a = 1\na ==> 1\n|  created variable a : int\n\njshell> a + 1\n$2 ==> 2\n|  created scratch variable $2 : int\n\njshell> $2 + a\n$3 ==> 3\n|  created scratch variable $3 : int\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u89c1\uff1a\u6ca1\u6709\u6307\u5b9a\u53d8\u91cf\u7684\u6570\u5b57\u4f1a\u81ea\u52a8\u8d4b\u503c\u7ed9\u4e34\u65f6\u53d8\u91cf\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u4e34\u65f6\u53d8\u91cf"}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e0e\u7c7b",children:"\u65b9\u6cd5\u4e0e\u7c7b"}),"\n",(0,s.jsx)(n.p,{children:"\u90a3\u521b\u5efa\u65b9\u6cd5\u5462\uff1f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'jshell> String addMark(Word word) {\n   ...> return word.val + "!";\n   ...> }\n|  created method addMark(Word), however, it cannot be referenced until class Word is declared\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u65b9\u6cd5\u4f20\u5165\u4e86\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u7c7b\uff0c\u4ed6\u544a\u8bc9\u6211\u4eec\u8981\u5b9a\u4e49\u8fd9\u4e2a\u7c7b\u624d\u80fd\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u90a3\u5b9a\u4e49\u4e00\u4e0b\u5427"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\njshell> class Word {\n   ...> String val;\n   ...> public Word() {\n   ...> val = "hello word";\n   ...> }\n   ...> }\n|  created class Word\n|    update replaced method addMark(Word)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u4e2a\u5bf9\u8c61\u8c03\u7528\u4e00\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\njshell> Word words = new Word()\nwords ==> Word@2ef1e4fa\n|  created variable words : Word\n\njshell> addMark(words)\n$4 ==> "hello word!"\n|  created scratch variable $4 : String\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u5185\u7f6e\u547d\u4ee4",children:"\u5185\u7f6e\u547d\u4ee4"}),"\n",(0,s.jsxs)(n.p,{children:["\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"/help"})," \u5c31\u80fd\u770b\u5230\u6240\u6709\u53ef\u4ee5\u4f7f\u7528\u7684\u547d\u4ee4\uff0c\u4f8b\u5982\u5217\u51fa\u6240\u6709\u53d8\u91cf"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\njshell> /vars\n|    Word words = Word@2ef1e4fa\n|    String $4 = "hello word!"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5916\u90e8\u7f16\u8f91\u5668",children:"\u5916\u90e8\u7f16\u8f91\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u6ca1\u6709\u89c9\u5f97\u5728\u547d\u4ee4\u884c\u5b9a\u4e49\u7c7b\u6216\u8005\u65b9\u6cd5\u5565\u7684\u592a\u8d39\u4e8b\u4e86\uff0c\u5176\u5b9e JShell \u652f\u6301\u4f7f\u7528\u7f16\u8f91\u5668"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u9ed8\u8ba4\u7f16\u8f91\u5668",children:"\u4f7f\u7528\u9ed8\u8ba4\u7f16\u8f91\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u5148\u5b9a\u4e49\u4e00\u4e2a\u7c7b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jshell> class Friend{}\n|  \u5df2\u521b\u5efa \u7c7b Friend\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8c03\u7528\u81ea\u5e26\u7684\u7f16\u8f91\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jshell> /edit Friend\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u4e0b\u56fe\uff0c\u70b9\u51fb Accept \u5c31\u884c"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://ced-md-picture.oss-cn-beijing.aliyuncs.com/img/20210223013703.png",alt:"img"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\u4e00\u5b9a\u662f\u4e4b\u524d\u5b9a\u4e49\u597d\u7684\u7247\u6bb5\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'jshell> /list\n\n   1 : int a = 1;\n   2 : int b = 2;\n   3 : int c = 1;\n   6 : class Friend{\n       String val = "No Friend !!!";\n       }\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5426\u5219\u4f1a\u62a5\u9519"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jshell> /edit Dog\n|  \u6ca1\u6709\u6b64\u7c7b\u7247\u6bb5: Dog\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668",children:"\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60f3\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u5462\uff0c\u81ea\u5e26\u7684\u592a\u4e0d\u597d\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jshell> /set editor vim\n|  \u7f16\u8f91\u5668\u8bbe\u7f6e\u4e3a: vim\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'jshell> /set editor "C:\\\\Users\\\\cedar\\\\AppData\\\\Local\\\\Programs\\\\Microsoft VS Code\\\\code" -w\n|  \u7f16\u8f91\u5668\u8bbe\u7f6e\u4e3a: C:\\Users\\cedar\\AppData\\Local\\Programs\\Microsoft VS Code\\code -w\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5 ",(0,s.jsx)(n.code,{children:"-w"})," \u9009\u9879\u8bbe\u7f6e\u7b49\u5f85\u6587\u4ef6\u5173\u95ed\u540e\u518d\u8fd4\u56de"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u8bbe\u7f6e\u662f\u4e00\u6b21\u6027\u7684\uff0c\u60f3\u6c38\u4e45\u8bbe\u7f6e\u7684\u8bdd\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-retain"})," \u9009\u9879"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jshell> /set editor -retain vim\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>i,a:()=>d});var s=l(7294);const a={},r=s.createContext(a);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);