(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{8365:function(e,t,l){Promise.resolve().then(l.t.bind(l,6961,23)),Promise.resolve().then(l.t.bind(l,1694,23)),Promise.resolve().then(l.bind(l,4538))},4965:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var a=l(7437);let s={black:"bg-black bg-opacity-10",white:"bg-white bg-opacity-20"};function n(e){let{children:t,className:l,type:n="white",padding:c="p-6",onClick:r}=e;return(0,a.jsx)("div",{className:"".concat(s[n]," flex w-full rounded-3xl ").concat(c," ").concat(l),onClick:r,children:t})}},9242:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var a=l(7437),s=l(6961),n=l.n(s),c=l(1694),r=l.n(c);let i={xs:"text-xs font-light","xs-b":"text-xs",md:"text-base font-light","md-b":"text-base",lg:"text-2xl",xl:"text-4xl"},x={left:"text-left",right:"text-right",center:"text-center"};function o(e){let{children:t,size:l="md",color:s="text-black",font:c,align:o="left",className:d}=e;return(0,a.jsx)("div",{className:"".concat(i[l]," ").concat(s," ").concat("abril"===c?r().className:""," ").concat("italiana"===c?n().className:""," ").concat(o?x[o]:""," break-keep ").concat(d),children:t})}},4538:function(e,t,l){"use strict";l.d(t,{default:function(){return u}});var a=l(7437),s=l(2265),n=l(9242);function c(e){let{register:t,onChange:l,list:c,name:r}=e,[i,x]=(0,s.useState)(""),o=e=>{x(e.target.value),l(e,r)};return(0,a.jsx)("div",{className:"flex flex-col space-y-2",children:c.map(e=>(0,a.jsxs)("label",{className:"border-1 items-left flex flex-col gap-1 rounded-md border border-white px-4 py-4 ".concat(i===e.value?"bg-red-300 text-black":""),children:[(0,a.jsx)("input",{type:"radio",value:e.value,checked:i===e.value,className:"form-radio hidden focus:ring-blue-500",...t(r,{required:!0}),onChange:o}),(0,a.jsx)(n.Z,{size:"xs-b",children:e.tag}),(0,a.jsx)(n.Z,{children:e.label})]},e.value))})}var r=l(4965),i=l(6463),x=l(9343);let o=[{value:"1",tag:"하행",label:"서울/수원 → 부산"},{value:"2",tag:"상행",label:"부산 → 서울/수원"},{value:"3",tag:"왕복",label:"서울/수원 ↔ 부산"}],d=[{value:"1",tag:"오전 6시 20분",label:"수원역 6번 출구 방면 매산지구대 앞"},{value:"2",tag:"오전 7시",label:"사당역 1번 출구 방면 공영 주차장"}];function u(){let{register:e,handleSubmit:t,watch:l,formState:{errors:s},setValue:u,reset:h}=(0,x.cI)(),b=(0,i.useRouter)(),f=async e=>{try{await fetch("/api/attend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),alert("제출 성공"),h(),b.push("main")}catch(e){alert("제출 실패 : 다시 등록해주세요.")}},m="rounded-md px-3 py-2 border border-1 border-white bg-transparent font-light",p=(e,t)=>{u(t,e.target.value)};return(0,a.jsx)("form",{onSubmit:t(f),className:"relative mb-20 w-full",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)(r.Z,{type:"white",padding:"px-6 py-12",className:"flex-1 flex-col gap-12",children:(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(n.Z,{size:"xs-b",color:"text-black",children:["이름 ",(0,a.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,a.jsx)("input",{placeholder:"이름을 입력해주세요.",className:m,...e("name",{required:!0}),maxLength:50})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(n.Z,{size:"xs-b",color:"text-black",children:["연락처 ",(0,a.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,a.jsx)("input",{placeholder:"-를 제외하고 입력해주세요.",className:m,...e("tel",{required:!0}),maxLength:11,minLength:10})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(n.Z,{size:"xs-b",color:"text-black",children:["탑승 유형 ",(0,a.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,a.jsx)(c,{register:e,onChange:p,list:o,name:"direction"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(n.Z,{size:"xs-b",color:"text-black",children:["하행선 탑승 위치 ",(0,a.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,a.jsxs)(n.Z,{size:"xs",color:"text-black",children:["[차량번호] 경기77 아 9078 ",(0,a.jsx)("br",{})," [기사님] 장수용 010 7630 6689"]}),(0,a.jsx)(c,{register:e,onChange:p,list:d,name:"boarding"})]}),s.exampleRequired&&(0,a.jsx)("span",{children:"필수값을 입력해주세요."})]})}),(0,a.jsx)("button",{type:"submit",className:"fixed bottom-4 left-1/2 w-[calc(100%-3rem)] max-w-md -translate-x-1/2 rounded-3xl bg-white p-4 py-3 font-light text-red-300",children:"신청"})]})})}}},function(e){e.O(0,[158,22,971,23,744],function(){return e(e.s=8365)}),_N_E=e.O()}]);