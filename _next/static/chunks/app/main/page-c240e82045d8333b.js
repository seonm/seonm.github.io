(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{587:function(e,t,n){Promise.resolve().then(n.bind(n,9630))},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},7830:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.element"),r=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,l={};function i(e,t,n){this.props=e,this.context=t,this.refs=l,this.updater=n||r}function s(){}function c(e,t,n){this.props=e,this.context=t,this.refs=l,this.updater=n||r}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=i.prototype;var o=c.prototype=new s;o.constructor=c,a(o,i.prototype),o.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,r){var a,l={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)u.call(t,a)&&!f.hasOwnProperty(a)&&(l[a]=t[a]);var c=arguments.length-2;if(1===c)l.children=r;else if(1<c){for(var o=Array(c),h=0;h<c;h++)o[h]=arguments[h+2];l.children=o}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===l[a]&&(l[a]=c[a]);return{$$typeof:n,type:e,key:i,ref:s,props:l,_owner:null}}},4410:function(e,t,n){"use strict";e.exports=n(7830)},3585:function(e,t,n){"use strict";n.d(t,{Eh:function(){return R},Gc:function(){return M},Ig:function(){return w},lG:function(){return F},en:function(){return y},mP:function(){return P},CK:function(){return E},YF:function(){return _},gb:function(){return H},Ye:function(){return z},EL:function(){return I},xI:function(){return O},vg:function(){return C}});var r,a,l,i,s,c,o,u,f,h,m,d,v,p,x,g=n(4410);function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var w=function(e){return g.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"undefined",viewBox:"0 -960 960 960"},e),r||(r=g.createElement("path",{d:"M798-120q-125 0-247-54.5T329-329 174.5-551 120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12M241-600l66-66-17-94h-89q5 41 14 81t26 79m358 358q39 17 79.5 27t81.5 13v-88l-94-19zm0 0"})))};function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var y=function(e){return g.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"undefined",viewBox:"0 -960 960 960"},e),a||(a=g.createElement("path",{d:"M320-520q17 0 28.5-11.5T360-560t-11.5-28.5T320-600t-28.5 11.5T280-560t11.5 28.5T320-520m160 0q17 0 28.5-11.5T520-560t-11.5-28.5T480-600t-28.5 11.5T440-560t11.5 28.5T480-520m160 0q17 0 28.5-11.5T680-560t-11.5-28.5T640-600t-28.5 11.5T600-560t11.5 28.5T640-520M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240zm126-240h594v-480H160v525zm-46 0v-480z"})))};function T(){return(T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var E=function(e){return g.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"undefined",viewBox:"0 -960 960 960"},e),l||(l=g.createElement("path",{d:"M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240zm0-80h360v-480H360zM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80zm160-240v-480z"})))};function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var _=function(e){return g.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),i||(i=g.createElement("path",{fill:"#FAE100",d:"M0 0h24v24H0z"})),s||(s=g.createElement("path",{fill:"#007DFF",d:"M11.288 3.571c-.512.056-1.316.28-1.828.516-1.692.768-2.98 2.364-3.372 4.172-.292 1.352-.16 2.424.464 3.68.4.816.856 1.472 1.684 2.432.868 1.004 1.328 1.636 1.828 2.508a18 18 0 0 1 1.28 2.8c.104.284.204.548.228.588.088.172.436.248.652.148.144-.064.204-.172.392-.7.532-1.524 1.372-3.132 2.224-4.26.156-.204.528-.656.828-1.008.624-.724 1.036-1.264 1.352-1.776 1.072-1.732 1.28-3.256.684-5.048-.444-1.336-1.404-2.508-2.66-3.26a6.2 6.2 0 0 0-2.168-.756 8.5 8.5 0 0 0-1.588-.036m1.132 4.032c.712.148 1.34.756 1.532 1.476.072.26.072.748 0 1.008a2.14 2.14 0 0 1-1.076 1.316c-1.104.536-2.4-.004-2.812-1.176a2.14 2.14 0 0 1 0-1.288c.18-.512.516-.904.988-1.156a1.96 1.96 0 0 1 1.368-.18"})))};function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var O=function(e){return g.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),g.createElement("g",{clipPath:"url(#tmap_svg__a)"},g.createElement("mask",{id:"tmap_svg__b",width:24,height:24,x:0,y:0,maskUnits:"userSpaceOnUse",style:{maskType:"luminance"}},c||(c=g.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}))),o||(o=g.createElement("g",{mask:"url(#tmap_svg__b)"},g.createElement("path",{fill:"#fff",d:"M.033.033h23.934v23.934H.033z"}),g.createElement("path",{fill:"url(#tmap_svg__c)",d:"M4.557 4.689h14.656v3.41H4.557z"}),g.createElement("path",{fill:"url(#tmap_svg__d)",fillRule:"evenodd",d:"M15.664 4.689h3.549v3.4h-2.186c-1.787 0-3.257 1.244-3.434 2.839l-.005.085-.013 8.463h-3.28v-8.463l.037-.58c.295-2.682 2.316-4.893 5.02-5.67z",clipRule:"evenodd"})))),u||(u=g.createElement("defs",null,g.createElement("linearGradient",{id:"tmap_svg__c",x1:4.557,x2:19.213,y1:6.394,y2:6.394,gradientUnits:"userSpaceOnUse"},g.createElement("stop",{stopColor:"#F645B9"}),g.createElement("stop",{offset:.61,stopColor:"#783BFF"}),g.createElement("stop",{offset:1,stopColor:"#783BFF"})),g.createElement("linearGradient",{id:"tmap_svg__d",x1:20.237,x2:9.271,y1:5.548,y2:18.616,gradientUnits:"userSpaceOnUse"},g.createElement("stop",{stopColor:"#33E6AF"}),g.createElement("stop",{offset:.85,stopColor:"#0264FF"}),g.createElement("stop",{offset:1,stopColor:"#0264FF"})),g.createElement("clipPath",{id:"tmap_svg__a"},g.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))};function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var z=function(e){return g.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"undefined",viewBox:"0 -960 960 960"},e),f||(f=g.createElement("path",{d:"M480-480q33 0 56.5-23.5T560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480m0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"})))};function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var C=function(e){return g.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"undefined",viewBox:"0 -960 960 960"},e),h||(h=g.createElement("path",{d:"M160-260v-380q0-97 85-127t195-33l30-60H280v-60h400v60H550l-30 60q119 3 199.5 32.5T800-640v380q0 59-40.5 99.5T660-120l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-260m500-140H240h480zM480-240q25 0 42.5-17.5T540-300t-17.5-42.5T480-360t-42.5 17.5T420-300t17.5 42.5T480-240m-2-440h228-450zM240-480h480v-120H240zm60 280h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17m178-520q-134 0-172 14.5T256-680h450q-12-14-52-27t-176-13"})))};function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var F=function(e){return g.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"undefined",viewBox:"0 -960 960 960"},e),m||(m=g.createElement("path",{d:"M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40zm-8-360h496l-42-120H274zm-32 80v200zm100 160q25 0 42.5-17.5T360-380t-17.5-42.5T300-440t-42.5 17.5T240-380t17.5 42.5T300-320m360 0q25 0 42.5-17.5T720-380t-17.5-42.5T660-440t-42.5 17.5T600-380t17.5 42.5T660-320m-460 40h560v-200H200z"})))};function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var M=function(e){return g.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"undefined",viewBox:"0 -960 960 960"},e),d||(d=g.createElement("path",{d:"M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120zm242-640h224-448zm158 280H240h480zm-400-80h480v-120H240zm100 240q25 0 42.5-17.5T400-380t-17.5-42.5T340-440t-42.5 17.5T280-380t17.5 42.5T340-320m280 0q25 0 42.5-17.5T680-380t-17.5-42.5T620-440t-42.5 17.5T560-380t17.5 42.5T620-320M258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760m62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280"})))};function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var P=function(e){return g.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 -960 960 960"},e),v||(v=g.createElement("path",{d:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z"})))};function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var H=function(e){return g.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:128,height:128,preserveAspectRatio:"xMidYMid",style:{shapeRendering:"auto",display:"block",background:"0 0"},viewBox:"0 0 100 100"},e),p||(p=g.createElement("circle",{cx:50,cy:50,r:32,fill:"none",stroke:"#ffbdbe",strokeDasharray:"50.26548245743669 50.26548245743669",strokeLinecap:"round",strokeWidth:8},g.createElement("animateTransform",{attributeName:"transform",dur:"1s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"}))))};function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var R=function(e){return g.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 -960 960 960"},e),x||(x=g.createElement("path",{d:"M400-80 0-480l400-400 71 71-329 329 329 329z"})))},I={src:"https://seonm.github.io//_next/static/media/naver_map.4914e224.png",height:1025,width:1025,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEX////0/f1vivb////f/+9uffjg+un5/v7s/vv9//////855WsJqY7L+uNybf9+nPzl/vGN97UJ4UQB7lNe4n3r/PQS2Dl/8aJr7ZR/55IAzRUV21V8mP5nmuCq+rbeAAAAEXRSTlP+bf1v/P79+/Xwcv7+/v7s/nS5heMAAAAJcEhZcwAACxIAAAsSAdLdfvwAAABCSURBVHicFcZJEoAgDADBAYEE1wrgrv//pmWfmp4QgI5stRpkUtmPsiKkrbX7D+dVDASRYZxj9GSmN/pnwaloUHUfXIUCjt0F+50AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},4965:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7437);let a={black:"bg-black bg-opacity-10",white:"bg-white bg-opacity-20"};function l(e){let{children:t,className:n,type:l="white",padding:i="p-6",onClick:s}=e;return(0,r.jsx)("div",{className:"".concat(a[l]," flex w-full rounded-3xl ").concat(i," ").concat(n),onClick:s,children:t})}},9242:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7437),a=n(6961),l=n.n(a),i=n(1694),s=n.n(i);let c={xs:"text-xs font-light","xs-b":"text-xs",md:"text-base font-light","md-b":"text-base",lg:"text-2xl",xl:"text-4xl"},o={left:"text-left",right:"text-right",center:"text-center"};function u(e){let{children:t,size:n="md",color:a="text-black",font:i,align:u="left",className:f}=e;return(0,r.jsx)("div",{className:"".concat(c[n]," ").concat(a," ").concat("abril"===i?s().className:""," ").concat("italiana"===i?l().className:""," ").concat(u?o[u]:""," break-keep ").concat(f),children:t})}},9630:function(e,t,n){"use strict";n.d(t,{default:function(){return v}});var r=n(7437),a=n(2265),l=n(4965),i=n(9242),s=n(3585);function c(e){let{name:t,account:n,bank:l}=e,[c,o]=(0,a.useState)(!1),u=async()=>{try{await navigator.clipboard.writeText("".concat(l," ").concat(n)),alert("복사되었습니다.")}catch(e){console.error("복사 실패: ",e)}};return(0,r.jsxs)("div",{onClick:u,className:"flex w-full cursor-pointer items-end justify-between",children:[(0,r.jsxs)("div",{className:"flex items-end gap-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{size:"xs",children:l}),(0,r.jsx)(i.Z,{size:"md",className:"break-all",children:n})]}),(0,r.jsx)(i.Z,{className:"min-w-10 break-keep",size:"md",children:t})]}),(0,r.jsx)(s.CK,{})]})}let o={20:"max-w-20"},u={pink:"bg-pink",black:"bg-black bg-opacity-10",transparent:"bg-transparent"};function f(e){let{children:t,color:n,content:a,subText:l,width:s}=e;return(0,r.jsxs)("div",{className:"flex flex-1 ".concat(s?o[s]:""," flex-col items-center justify-center rounded-lg ").concat(u[n]," gap-2"),children:[t&&t,l&&(0,r.jsx)(i.Z,{size:"md-b",children:l})]})}var h=n(6463);function m(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=setInterval(()=>{let t=e.current;if(t&&t.childElementCount<10){let e=document.createElement("div");e.className="flower",e.style.left="".concat(100*Math.random(),"vw"),e.style.animationDuration="".concat(3+5*Math.random(),"s"),e.style.opacity="".concat(.5+.5*Math.random()),t.appendChild(e),e.addEventListener("animationend",()=>{e.remove()})}},300);return()=>clearInterval(t)},[]),(0,r.jsx)("div",{ref:e,className:"flowerContainer"})}function d(){let[e,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=new Date;t(Math.ceil((new Date(2025,0,18).getTime()-e.getTime())/864e5))},[]),(0,r.jsx)(i.Z,{font:"abril",size:"xl",children:"D-".concat(e)})}function v(){let e=(0,h.useRouter)();return(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)(m,{}),(0,r.jsxs)(l.Z,{className:"items-center justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{font:"abril",size:"xs",children:"W square Garden Hall"}),(0,r.jsx)(i.Z,{font:"abril",size:"lg",children:"01.18 15:00"})]}),(0,r.jsx)(d,{})]}),(0,r.jsx)(l.Z,{type:"white",className:"max-h-72 w-full flex-1 overflow-hidden",padding:"p-0",onClick:()=>e.push("/gallery"),children:(0,r.jsx)("img",{src:"img/main.jpg",alt:"gallery button",className:"h-auto w-full object-cover object-bottom"})}),(0,r.jsxs)("div",{className:"flex flex-1 flex-row flex-wrap justify-between gap-4",children:[(0,r.jsx)(l.Z,{className:"flex min-h-24 flex-1 cursor-pointer flex-row justify-center",onClick:()=>e.push("/map"),children:(0,r.jsx)(f,{color:"transparent",content:"Location",subText:"오시는길",children:(0,r.jsx)(s.Ye,{width:"2rem",height:"2rem"})})}),(0,r.jsx)(l.Z,{className:"flex min-h-24 flex-1 cursor-pointer flex-row justify-center",onClick:()=>e.push("/contact"),children:(0,r.jsx)(f,{color:"transparent",content:"Contact",subText:"연락하기",children:(0,r.jsx)(s.en,{width:"2rem",height:"2rem"})})})]}),(0,r.jsx)(l.Z,{className:"flex min-h-24 flex-1 cursor-pointer flex-row justify-center",onClick:()=>e.push("/attend"),children:(0,r.jsx)(f,{color:"transparent",content:"Attendance",subText:"대절 버스 탑승 신청",children:(0,r.jsx)(s.Gc,{width:"2rem",height:"2rem"})})}),(0,r.jsx)(l.Z,{className:"justify-center",children:(0,r.jsxs)("div",{className:"flex flex-1 flex-col items-center gap-6",children:[(0,r.jsx)(i.Z,{size:"lg",font:"abril",align:"center",children:"BUY ME A COFFEE ☕"}),(0,r.jsxs)("div",{className:"flex w-full flex-col gap-4 border-b border-dashed border-red-300 pb-6",children:[(0,r.jsx)(i.Z,{size:"md-b",children:"\uD83E\uDD35\uD83C\uDFFB 신랑측"}),(0,r.jsx)(c,{name:"김나원",account:"297-64-09857-4",bank:"하나은행"}),(0,r.jsx)(c,{name:"이보영",account:"3333-02-667-0893",bank:"카카오뱅크"})]}),(0,r.jsxs)("div",{className:"flex w-full flex-col gap-4",children:[(0,r.jsx)(i.Z,{size:"md-b",children:"\uD83D\uDC70\uD83C\uDFFB 신부측"}),(0,r.jsx)(c,{name:"정수철",account:"178178-56-053906",bank:"농협은행"}),(0,r.jsx)(c,{name:"권현자",account:"054-12-0938110",bank:"부산은행"}),(0,r.jsx)(c,{name:"정선미",account:"488802-04-020215",bank:"국민은행"})]})]})}),(0,r.jsx)(l.Z,{className:"items-center justify-center",children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,r.jsxs)(i.Z,{size:"lg",font:"abril",align:"center",children:["We are",(0,r.jsx)("br",{}),"becoming a family"]}),(0,r.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)(i.Z,{size:"xs",children:"\uD83C\uDF97️이수용 & 김나원"}),(0,r.jsx)(i.Z,{size:"md-b",children:"\uD83E\uDD35\uD83C\uDFFB이보영"})]}),(0,r.jsx)(i.Z,{size:"xs",children:"❤️"}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)(i.Z,{size:"xs",children:"정수철 & 권현자"}),(0,r.jsx)(i.Z,{size:"md-b",children:"\uD83D\uDC70\uD83C\uDFFB‍정선미"})]})]})]})})]})}n(689)},689:function(){},1694:function(e){e.exports={style:{fontFamily:"'__Abril_Fatface_e78f02', '__Abril_Fatface_Fallback_e78f02'",fontWeight:400,fontStyle:"normal"},className:"__className_e78f02",variable:"__variable_e78f02"}},6961:function(e){e.exports={style:{fontFamily:"'__Italiana_900c85', '__Italiana_Fallback_900c85'",fontWeight:400,fontStyle:"normal"},className:"__className_900c85",variable:"__variable_900c85"}}},function(e){e.O(0,[158,916,971,23,744],function(){return e(e.s=587)}),_N_E=e.O()}]);