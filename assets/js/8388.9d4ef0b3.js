"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[8388],{8388:(e,o,r)=>{r.d(o,{m6:()=>J});const t="-";function n(e){const o=function(e){const{theme:o,prefix:r}=e,t={nextPart:new Map,validators:[]},n=function(e,o){if(!o)return e;return e.map((([e,r])=>[e,r.map((e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,r])=>[o+e,r]))):e))]))}(Object.entries(e.classGroups),r);return n.forEach((([e,r])=>{i(r,t,e,o)})),t}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:function(e){const r=e.split(t);return""===r[0]&&1!==r.length&&r.shift(),s(r,o)||function(e){if(l.test(e)){const o=l.exec(e)[1],r=o?.substring(0,o.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,o){const t=r[e]||[];return o&&n[e]?[...t,...n[e]]:t}}}function s(e,o){if(0===e.length)return o.classGroupId;const r=e[0],n=o.nextPart.get(r),l=n?s(e.slice(1),n):void 0;if(l)return l;if(0===o.validators.length)return;const i=e.join(t);return o.validators.find((({validator:e})=>e(i)))?.classGroupId}const l=/^\[(.+)\]$/;function i(e,o,r,t){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void i(e(t),o,r,t):void o.validators.push({validator:e,classGroupId:r});Object.entries(e).forEach((([e,n])=>{i(n,a(o,e),r,t)}))}else{(""===e?o:a(o,e)).classGroupId=r}}))}function a(e,o){let r=e;return o.split(t).forEach((e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)})),r}function c(e){if(e<1)return{get:()=>{},set:()=>{}};let o=0,r=new Map,t=new Map;function n(n,s){r.set(n,s),o++,o>e&&(o=0,t=r,r=new Map)}return{get(e){let o=r.get(e);return void 0!==o?o:void 0!==(o=t.get(e))?(n(e,o),o):void 0},set(e,o){r.has(e)?r.set(e,o):n(e,o)}}}const d="!";function u(e){const o=e.separator,r=1===o.length,t=o[0],n=o.length;return function(e){const s=[];let l,i=0,a=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===i){if(c===t&&(r||e.slice(d,d+n)===o)){s.push(e.slice(a,d)),a=d+n;continue}if("/"===c){l=d;continue}}"["===c?i++:"]"===c&&i--}const c=0===s.length?e:e.substring(a),u=c.startsWith(d);return{modifiers:s,hasImportantModifier:u,baseClassName:u?c.substring(1):c,maybePostfixModifierPosition:l&&l>a?l-a:void 0}}}const p=/\s+/;function b(){let e,o,r=0,t="";for(;r<arguments.length;)(e=arguments[r++])&&(o=f(e))&&(t&&(t+=" "),t+=o);return t}function f(e){if("string"==typeof e)return e;let o,r="";for(let t=0;t<e.length;t++)e[t]&&(o=f(e[t]))&&(r&&(r+=" "),r+=o);return r}function m(e,...o){let r,t,s,l=function(a){const d=o.reduce(((e,o)=>o(e)),e());return r=function(e){return{cache:c(e.cacheSize),splitModifiers:u(e),...n(e)}}(d),t=r.cache.get,s=r.cache.set,l=i,i(a)};function i(e){const o=t(e);if(o)return o;const n=function(e,o){const{splitModifiers:r,getClassGroupId:t,getConflictingClassGroupIds:n}=o,s=new Set;return e.trim().split(p).map((e=>{const{modifiers:o,hasImportantModifier:n,baseClassName:s,maybePostfixModifierPosition:l}=r(e);let i=t(l?s.substring(0,l):s),a=Boolean(l);if(!i){if(!l)return{isTailwindClass:!1,originalClassName:e};if(i=t(s),!i)return{isTailwindClass:!1,originalClassName:e};a=!1}const c=function(e){if(e.length<=1)return e;const o=[];let r=[];return e.forEach((e=>{"["===e[0]?(o.push(...r.sort(),e),r=[]):r.push(e)})),o.push(...r.sort()),o}(o).join(":");return{isTailwindClass:!0,modifierId:n?c+d:c,classGroupId:i,originalClassName:e,hasPostfixModifier:a}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:o,classGroupId:r,hasPostfixModifier:t}=e,l=o+r;return!s.has(l)&&(s.add(l),n(r,t).forEach((e=>s.add(o+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,r);return s(e,n),n}return function(){return l(b.apply(null,arguments))}}function g(e){const o=o=>o[e]||[];return o.isThemeGetter=!0,o}const h=/^\[(?:([a-z-]+):)?(.+)\]$/i,x=/^\d+\/\d+$/,y=new Set(["px","full","screen"]),v=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,w=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,k=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,z=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function C(e){return G(e)||y.has(e)||x.test(e)}function j(e){return _(e,"length",q)}function G(e){return Boolean(e)&&!Number.isNaN(Number(e))}function I(e){return _(e,"number",G)}function M(e){return Boolean(e)&&Number.isInteger(Number(e))}function P(e){return e.endsWith("%")&&G(e.slice(0,-1))}function S(e){return h.test(e)}function N(e){return v.test(e)}const E=new Set(["length","size","percentage"]);function T(e){return _(e,E,A)}function $(e){return _(e,"position",A)}const O=new Set(["image","url"]);function R(e){return _(e,O,F)}function W(e){return _(e,"",D)}function B(){return!0}function _(e,o,r){const t=h.exec(e);return!!t&&(t[1]?"string"==typeof o?t[1]===o:o.has(t[1]):r(t[2]))}function q(e){return w.test(e)}function A(){return!1}function D(e){return k.test(e)}function F(e){return z.test(e)}Symbol.toStringTag;function H(){const e=g("colors"),o=g("spacing"),r=g("blur"),t=g("brightness"),n=g("borderColor"),s=g("borderRadius"),l=g("borderSpacing"),i=g("borderWidth"),a=g("contrast"),c=g("grayscale"),d=g("hueRotate"),u=g("invert"),p=g("gap"),b=g("gradientColorStops"),f=g("gradientColorStopPositions"),m=g("inset"),h=g("margin"),x=g("opacity"),y=g("padding"),v=g("saturate"),w=g("scale"),k=g("sepia"),z=g("skew"),E=g("space"),O=g("translate"),_=()=>["auto",S,o],q=()=>[S,o],A=()=>["",C,j],D=()=>["auto",G,S],F=()=>["","0",S],H=()=>[G,I],J=()=>[G,S];return{cacheSize:500,separator:":",theme:{colors:[B],spacing:[C,j],blur:["none","",N,S],brightness:H(),borderColor:[e],borderRadius:["none","","full",N,S],borderSpacing:q(),borderWidth:A(),contrast:H(),grayscale:F(),hueRotate:J(),invert:F(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[P,j],inset:_(),margin:_(),opacity:H(),padding:q(),saturate:H(),scale:H(),sepia:F(),skew:J(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",S]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",S]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",M,S]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",S]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",M,S]}],"grid-cols":[{"grid-cols":[B]}],"col-start-end":[{col:["auto",{span:["full",M,S]},S]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[B]}],"row-start-end":[{row:["auto",{span:[M,S]},S]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",S]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",S]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",S,o]}],"min-w":[{"min-w":[S,o,"min","max","fit"]}],"max-w":[{"max-w":[S,o,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[S,o,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[S,o,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[S,o,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[S,o,"auto","min","max","fit"]}],"font-size":[{text:["base",N,j]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[B]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",S]}],"line-clamp":[{"line-clamp":["none",G,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,S]}],"list-image":[{"list-image":["none",S]}],"list-style-type":[{list:["none","disc","decimal",S]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,j]}],"underline-offset":[{"underline-offset":["auto",C,S]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",$]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",T]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},R]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[C,S]}],"outline-w":[{outline:[C,j]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[C,j]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,W]}],"shadow-color":[{shadow:[B]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",N,S]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",S]}],duration:[{duration:J()}],ease:[{ease:["linear","in","out","in-out",S]}],delay:[{delay:J()}],animate:[{animate:["none","spin","ping","pulse","bounce",S]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[M,S]}],"translate-x":[{"translate-x":[O]}],"translate-y":[{"translate-y":[O]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",S]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,j,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const J=m(H)}}]);