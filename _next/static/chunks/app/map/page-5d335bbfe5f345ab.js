(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{4200:function(e,s,i){Promise.resolve().then(i.bind(i,8313)),Promise.resolve().then(i.bind(i,3271))},4965:function(e,s,i){"use strict";i.d(s,{Z:function(){return n}});var l=i(7437);let c={black:"bg-black bg-opacity-10",white:"bg-white bg-opacity-20"};function n(e){let{children:s,className:i,type:n="white",padding:a="p-6",onClick:d}=e;return(0,l.jsx)("div",{className:"".concat(c[n]," flex w-full rounded-3xl ").concat(a," ").concat(i),onClick:d,children:s})}},3271:function(e,s,i){"use strict";i.d(s,{default:function(){return k}});var l=i(7437),c=i(3585),n=i(1877),a=i(1259),d=i(1643),t=i(1304),r=i(3293),x=i(2265),h=i(357);let o="//dapi.kakao.com/v2/maps/sdk.js?appkey=".concat(h.env.KAKAO_APP_KEY,"&autoload=false");var j=e=>{let{height:s}=e,[i,c]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{void 0!==window.kakao&&window.kakao.maps&&window.kakao.maps.load(()=>{c(!0)})},[]),(0,l.jsxs)("div",{className:"w-full flex-1",children:[(0,l.jsx)(n.default,{src:o,strategy:"lazyOnload",onLoad:()=>{void 0!==window.kakao&&window.kakao.maps.load(()=>c(!0))}}),i&&(0,l.jsxs)(a.D,{center:{lat:35.1642847462087,lng:129.05060934054563},style:{width:"100%",height:s},children:[(0,l.jsx)(d.O,{position:{lat:35.1642847462087,lng:129.05060934054563}}),(0,l.jsx)(t.R,{}),(0,l.jsx)(r.L,{})]})]})},m=i(4398),f=e=>{let{children:s,onClick:i,className:c}=e;return(0,l.jsx)("button",{onClick:i,className:"flex items-center justify-center gap-1 rounded-md px-3 py-1 text-center text-black ".concat(c),children:s})},p=i(9242);function w(){return(0,l.jsxs)(f,{className:"flex-1 bg-[#f7e000]",onClick:()=>{m.tq?window.location.href="kakaomap://search?q=부산 W스퀘어웨딩홀":window.open("https://map.kakao.com/?q=부산 W스퀘어웨딩홀","_blank")},children:[(0,l.jsx)(c.YF,{width:"1.5rem",height:"1.5rem"}),(0,l.jsx)(p.Z,{size:"xs-b",children:"카카오"})]})}var g=()=>(0,l.jsxs)(f,{className:"flex-1 bg-white",onClick:()=>{m.tq?window.location.href="nmap://search?query=W웨딩 W스퀘어웨딩홀":window.open("https://map.naver.com/v5/search/부산 W스퀘어웨딩홀","_blank")},children:[(0,l.jsx)("img",{src:c.EL.src,className:"h-8 w-8"}),(0,l.jsx)(p.Z,{size:"xs-b",children:"네이버"})]}),u=()=>(0,l.jsxs)(f,{className:"flex-1 bg-white",onClick:()=>{if(m.tq)window.location.href="tmap://search?name=W웨딩 W스퀘어웨딩홀";else{let e="https://www.tmap.co.kr/my_tmap/my_map_tip/map_tip.do?searchKeyword=".concat(encodeURIComponent("부산 W스퀘어웨딩홀"));window.open(e,"_blank")}},children:[(0,l.jsx)(c.xI,{width:"2rem",height:"2rem"}),(0,l.jsx)(p.Z,{size:"xs-b",children:"Tmap"})]}),b=i(4965),v=i(7138);function k(){return(0,l.jsxs)(b.Z,{type:"white",padding:"px-6 py-12",className:"flex-1 flex-col gap-12",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,l.jsx)(p.Z,{size:"md-b",align:"center",children:"W스퀘어 웨딩홀 / 가든홀"}),(0,l.jsx)(p.Z,{size:"md",align:"center",children:"부산광역시 부산진구 신천대로 252(부암동) 3층"}),(0,l.jsx)(v.default,{href:"tel:051-711-0177",className:"flex items-center gap-2",children:(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(c.Ig,{width:"1rem",height:"1rem"}),(0,l.jsx)(p.Z,{size:"md",children:"051-711-0177"})]})})]}),(0,l.jsxs)("div",{className:"flex w-full flex-col justify-center gap-4",children:[(0,l.jsx)(j,{height:"230px"}),(0,l.jsxs)("div",{className:"flex flex-row justify-between gap-2",children:[(0,l.jsx)(g,{}),(0,l.jsx)(u,{}),(0,l.jsx)(w,{})]})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(c.vg,{width:24,height:24}),(0,l.jsx)(p.Z,{size:"md-b",children:"지하철"})]}),(0,l.jsx)("div",{className:"flex flex-row items-center gap-2",children:(0,l.jsx)(p.Z,{children:"2호선 부암역 4번 출구 (도보 10분)"})})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(c.Gc,{width:24,height:24}),(0,l.jsx)(p.Z,{size:"md-b",children:"버스"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"md-b",children:"진구청앞 하차"}),(0,l.jsx)(p.Z,{children:"54, 63, 66, 81, 83-1, 88, 103, 124, 133 (이마트 주차장 입구쪽으로 도보 5분)"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"md-b",children:"진양교차로 하차"}),(0,l.jsx)(p.Z,{children:"17, 23, 44, 129-1, 138-1, 141, 160, 167, 169-1 (부암로타리 방면 도보 5분)"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"md-b",children:"셔틀버스"}),(0,l.jsxs)(p.Z,{children:["1시간 3회 운영 (20분 간격)",(0,l.jsx)("br",{}),"서면역 9번 출구 (10분, 30분, 50분)",(0,l.jsx)("br",{}),"→ 부암역 4번출구 (15분, 35분, 55분)",(0,l.jsx)("br",{}),"→ W스퀘어웨딩홀 (20분, 40분, 정시)"]})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(c.lG,{width:24,height:24}),(0,l.jsx)(p.Z,{size:"md-b",children:"주차정보"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"md-b",children:"지하 2층 ~ 4층 / 무료 주차 3시간"}),(0,l.jsx)(p.Z,{children:"이마트 트레이더스, 롯데마트 주차가능"})]})]}),(0,l.jsxs)("div",{className:"flex flex-1 flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(c.Gc,{width:24,height:24}),(0,l.jsx)(p.Z,{size:"md-b",children:"대절 버스 (서울-부산)"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"xs-b",children:"오전 6시 20분"}),(0,l.jsx)(p.Z,{size:"md",children:"수원역 6번 출구 방면 매산지구대 앞"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"xs-b",children:"오전 7시"}),(0,l.jsx)(p.Z,{size:"md",children:"사당역 1번 출구 방면 공영 주차장"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"xs-b",children:"차량번호"}),(0,l.jsx)(p.Z,{size:"md",children:"경기77 아 9078"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{size:"xs-b",children:"기사님 연락처"}),(0,l.jsx)(v.default,{href:"tel:010-7630-6689",className:"flex items-center gap-2",children:(0,l.jsx)(p.Z,{size:"md",children:"장수용 010-7630-6689 "})})]})]})]})}}},function(e){e.O(0,[158,684,463,313,971,23,744],function(){return e(e.s=4200)}),_N_E=e.O()}]);