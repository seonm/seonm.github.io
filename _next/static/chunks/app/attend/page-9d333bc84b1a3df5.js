(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{8975:function(e,t,a){Promise.resolve().then(a.t.bind(a,6961,23)),Promise.resolve().then(a.t.bind(a,1694,23)),Promise.resolve().then(a.bind(a,4538))},9242:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var l=a(7437),s=a(6961),c=a.n(s),n=a(1694),r=a.n(n);let i={xs:"text-xs",md:"text-base font-medium",lg:"text-2xl",xl:"text-4xl"},x={left:"text-left",right:"text-right",center:"text-center"};function d(e){let{children:t,size:a="md",color:s="text-white",font:n,align:d="left",className:o}=e;return(0,l.jsx)("div",{className:"".concat(i[a]," ").concat(s," ").concat("abril"===n?r().className:""," ").concat("italiana"===n?c().className:""," ").concat(d?x[d]:""," ").concat(o),children:t})}},4538:function(e,t,a){"use strict";a.d(t,{default:function(){return i}});var l=a(7437),s=a(2265),c=a(9242);function n(e){let{register:t,onChange:a}=e,[n,r]=(0,s.useState)(""),i=e=>{r(e.target.value),a(e)};return(0,l.jsx)("div",{className:"flex flex-col space-y-2",children:[{value:"1",tag:"오전 9시",label:"사당역 1번 출구"},{value:"2",tag:"오전 9시 30분",label:"수원역 1번 출구"}].map(e=>(0,l.jsxs)("label",{className:"border-1 flex flex-col items-center gap-1 rounded-md px-2 py-4 ".concat(n===e.value?"bg-white text-black":"bg-black bg-opacity-10"),children:[(0,l.jsx)("input",{type:"radio",value:e.value,checked:n===e.value,className:"form-radio hidden focus:ring-blue-500",...t("location",{required:!0}),onChange:i}),(0,l.jsx)(c.Z,{size:"xs",className:"whitespace-pre-line rounded-md bg-black px-2 py-1 text-white",children:e.tag}),(0,l.jsx)("span",{className:"whitespace-pre-line",children:e.label})]},e.value))})}var r=a(9343);function i(){let{register:e,handleSubmit:t,watch:a,formState:{errors:s},setValue:i,reset:x}=(0,r.cI)(),d=async e=>{try{await fetch("/api/attend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),alert("제출 성공"),x()}catch(e){alert("제출 실패 : 다시 등록해주세요.")}},o="rounded-md px-3 py-2";return(0,l.jsx)("section",{className:"flex flex-col gap-12 rounded-3xl bg-white bg-opacity-40 px-6 py-12",children:(0,l.jsx)("form",{onSubmit:t(d),children:(0,l.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)(c.Z,{color:"text-black",children:["이름 ",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)("input",{placeholder:"이름을 입력해주세요.",className:o,...e("name",{required:!0}),maxLength:50})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)(c.Z,{color:"text-black",children:["연락처 ",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)("input",{placeholder:"-를 제외하고 입력해주세요.",className:o,...e("tel",{required:!0}),maxLength:11,minLength:10})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)(c.Z,{color:"text-black",children:["탑승위치 ",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)(n,{register:e,onChange:e=>{i("location",e.target.value)}})]}),s.exampleRequired&&(0,l.jsx)("span",{children:"필수값을 입력해주세요."}),(0,l.jsx)("button",{type:"submit",className:"rounded-md bg-black p-2 text-white",children:"전송"})]})})})}}},function(e){e.O(0,[158,792,971,23,744],function(){return e(e.s=8975)}),_N_E=e.O()}]);