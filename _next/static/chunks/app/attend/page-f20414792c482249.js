(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{8321:function(e,a,t){Promise.resolve().then(t.bind(t,8313)),Promise.resolve().then(t.bind(t,4538))},5254:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var l=t(7437),s=t(7161),n=t(3585);function i(e){let{open:a,setOpen:t,children:i}=e;return(0,l.jsxs)(s.Vq,{open:a,onClose:t,className:"relative z-10",children:[(0,l.jsx)(s.ZR,{transition:!0,className:"fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"}),(0,l.jsxs)("div",{className:"fixed inset-0 z-10 max-h-dvh w-screen overflow-y-auto",children:[(0,l.jsx)("div",{className:"close absolute right-0 top-0 z-50 fill-white p-4 text-white",onClick:()=>{console.log("close clicked"),t(!1)},children:(0,l.jsx)(n.mP,{})}),(0,l.jsx)(s.EM,{transition:!0,className:"relative m-auto transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",children:i})]})]})}},4965:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var l=t(7437);let s={black:"bg-black bg-opacity-10",white:"bg-white bg-opacity-20"};function n(e){let{children:a,className:t,type:n="white",padding:i="p-6",onClick:r}=e;return(0,l.jsx)("div",{className:"".concat(s[n]," flex w-full rounded-3xl ").concat(i," ").concat(t),onClick:r,children:a})}},4538:function(e,a,t){"use strict";t.d(a,{default:function(){return m}});var l=t(7437),s=t(3585),n=t(5254),i=t(2265),r=t(9242);function c(e){let{register:a,onChange:t,list:s,name:n}=e,[c,d]=(0,i.useState)(""),o=e=>{d(e.target.value),t(e,n)};return(0,l.jsx)("div",{className:"flex flex-col space-y-2",children:s.map(e=>(0,l.jsxs)("label",{className:"border-1 items-left flex flex-col gap-1 rounded-md border border-white px-4 py-4 ".concat(c===e.value?"bg-red-300 text-black":""),children:[(0,l.jsx)("input",{type:"radio",value:e.value,checked:c===e.value,className:"form-radio hidden focus:ring-blue-500",...a(n,{required:!0}),onChange:o}),(0,l.jsx)(r.Z,{size:"xs-b",children:e.tag}),(0,l.jsx)(r.Z,{children:e.label})]},e.value))})}var d=t(4965),o=t(6463),x=t(9343);let u=[{value:"1",tag:"하행",label:"서울/수원 → 부산"},{value:"2",tag:"상행",label:"부산 → 서울/수원"},{value:"3",tag:"왕복",label:"서울/수원 ↔ 부산"}],h=[{value:"1",tag:"오전 6시 20분",label:"수원역 6번 출구 방면 매산지구대 앞"},{value:"2",tag:"오전 7시",label:"사당역 1번 출구 방면 공영 주차장"}];function m(){let[e,a]=(0,i.useState)(!1),{register:t,handleSubmit:m,watch:f,formState:{errors:p},setValue:b,reset:g}=(0,x.cI)(),j=(0,o.useRouter)(),v=async e=>{a(!0);try{await fetch("https://bymi-wedding-api.netlify.app/api/attend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a(!1),alert("제출 성공"),g(),j.push("main")}catch(e){alert("제출 실패 : 다시 등록해주세요.")}},N="rounded-md px-3 py-2 border border-1 border-white bg-transparent font-light",y=(e,a)=>{b(a,e.target.value)};return(0,l.jsxs)(l.Fragment,{children:[e&&(0,l.jsx)(n.Z,{open:!0,setOpen:a,children:(0,l.jsxs)("div",{className:"flex h-dvh flex-col items-center justify-center",children:[(0,l.jsx)(s.gb,{}),(0,l.jsx)(r.Z,{color:"text-white",align:"center",children:"서버가 느려서 시간이 걸립니다. 잠시만 기다려주세요."})]})}),(0,l.jsx)("form",{onSubmit:m(v),className:"relative mb-20 w-full",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)(d.Z,{type:"white",padding:"px-6 py-12",className:"flex-1 flex-col gap-12",children:(0,l.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)(r.Z,{size:"xs-b",color:"text-black",children:["이름 ",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)("input",{placeholder:"이름을 입력해주세요.",className:N,...t("name",{required:!0}),maxLength:50})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)(r.Z,{size:"xs-b",color:"text-black",children:["연락처 ",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)("input",{placeholder:"-를 제외하고 입력해주세요.",className:N,...t("tel",{required:!0}),maxLength:11,minLength:10})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)(r.Z,{size:"xs-b",color:"text-black",children:["탑승 유형 ",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)(c,{register:t,onChange:y,list:u,name:"direction"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)(r.Z,{size:"xs-b",color:"text-black",children:["하행선 탑승 위치 ",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsxs)(r.Z,{size:"xs",color:"text-black",children:["[차량번호] 경기77 아 9078 ",(0,l.jsx)("br",{})," [기사님] 장수용 010 7630 6689"]}),(0,l.jsx)(c,{register:t,onChange:y,list:h,name:"boarding"})]}),p.exampleRequired&&(0,l.jsx)("span",{children:"필수값을 입력해주세요."})]})}),(0,l.jsx)("button",{type:"submit",className:"fixed bottom-4 left-1/2 w-[calc(100%-6rem)] max-w-[400px] -translate-x-1/2 rounded-3xl bg-white px-4 py-3 font-light text-red-300",children:"신청"})]})})]})}}},function(e){e.O(0,[158,97,343,313,971,23,744],function(){return e(e.s=8321)}),_N_E=e.O()}]);