(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [29, 883],
  {
    8090: function (e, s, l) {
      Promise.resolve().then(l.bind(l, 5229));
    },
    5229: function (e, s, l) {
      'use strict';
      l.d(s, {
        default: function () {
          return b;
        },
      });
      var c = l(7437),
        i = l(1877),
        t = l(1259),
        x = l(1643),
        r = l(1304),
        a = l(3293),
        n = (e) => {
          let { width: s, height: l } = e;
          return (0, c.jsxs)('div', {
            children: [
              (0, c.jsx)(i.default, {
                src: '//dapi.kakao.com/v2/maps/sdk.js?appkey=c5b2cd66b423457481bde66dfb56e08c&autoload=false',
                strategy: 'beforeInteractive',
              }),
              (0, c.jsxs)(t.D, {
                center: { lat: 35.1642847462087, lng: 129.05060934054563 },
                style: { width: s, height: l },
                children: [
                  (0, c.jsx)(x.O, { position: { lat: 35.1642847462087, lng: 129.05060934054563 } }),
                  (0, c.jsx)(r.R, {}),
                  (0, c.jsx)(a.L, {}),
                ],
              }),
            ],
          });
        };
      l(2265);
      var o = () =>
        (0, c.jsx)('button', {
          onClick: () => {
            let e = 'kakaomap://maps?target=marker&lat='.concat(37.5665, '&lng=').concat(126.978);
            window.location.href = e;
          },
          children: '카카오맵 열기',
        });
      let d = { black: ' bg-black bg-opacity-10', white: 'bg-white bg-opacity-100' };
      function h(e) {
        let { children: s, className: l, type: i = 'black', onClick: t } = e;
        return (0, c.jsx)('div', {
          className: ''.concat(d[i], ' flex rounded-3xl p-6 ').concat(l),
          onClick: t,
          children: s,
        });
      }
      let j = { xs: 'text-xs', md: 'text-base font-medium', lg: 'text-2xl', xl: 'text-4xl' };
      function f(e) {
        let { children: s, size: l, color: i = 'text-white' } = e;
        return (0, c.jsx)('div', { className: ''.concat(j[l], ' ').concat(i, ' font-abril'), children: s });
      }
      function b() {
        return (0, c.jsxs)('div', {
          className: 'flex items-center justify-center bg-pink p-6',
          children: [
            (0, c.jsxs)(h, {
              type: 'white',
              className: 'justify-center flex flex-col gap-12 max-w-96',
              children: [
                (0, c.jsxs)('div', {
                  className: 'items-center flex flex-col gap-2',
                  children: [
                    (0, c.jsx)(f, { size: 'lg', color: 'black', children: 'Location' }),
                    (0, c.jsx)(f, { size: 'xs', color: 'black', children: '오시는 길' }),
                  ],
                }),
                (0, c.jsxs)('div', {
                  className: 'items-center flex flex-col gap-6',
                  children: [
                    (0, c.jsxs)('div', {
                      className: 'flex flex-col items-center gap-2',
                      children: [
                        (0, c.jsx)(f, { size: 'lg', color: 'black', children: 'W스퀘어 웨딩홀 가든홀' }),
                        (0, c.jsx)(f, {
                          size: 'xs',
                          color: 'black',
                          children: '부산광역시 부산진구 신천대로 252(부암동) 3층',
                        }),
                        (0, c.jsx)(f, { size: 'xs', color: 'black', children: '051-711-0177' }),
                      ],
                    }),
                    (0, c.jsxs)('div', {
                      className: 'flex flex-col justify-center gap-4',
                      children: [
                        (0, c.jsx)(n, { width: '300px', height: '210px' }),
                        (0, c.jsxs)('div', {
                          className: 'flex flex-row justify-between gap-4',
                          children: [
                            (0, c.jsx)('rect', {
                              className: 'bg-black text-white w-[81px] h-[35px] flex justify-center items-center',
                              children: '네이버지도',
                            }),
                            (0, c.jsx)('rect', {
                              className: 'bg-black text-white w-[42px] h-[35px] flex justify-center items-center',
                              children: '티맵',
                            }),
                            (0, c.jsx)('rect', {
                              className: 'bg-black text-white w-[81px] h-[35px] flex justify-center items-center',
                              children: '카카오내비',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, c.jsx)(f, { size: 'md', color: 'black', children: '지하철' }),
                    (0, c.jsxs)('div', {
                      className: 'items-center flex flex-row gap-2',
                      children: [
                        (0, c.jsx)('div', {
                          className:
                            'bg-green-400 w-6 h-6 rounded-full justify-center items-center flex flex-row gap-2',
                          children: (0, c.jsx)(f, { size: 'xs', color: 'white', children: '2' }),
                        }),
                        (0, c.jsx)(f, { size: 'xs', color: 'black', children: '2호선 부암역 4번 출구(도보 10분거리)' }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, c.jsx)(f, { size: 'md', color: 'black', children: '버스' }),
                    (0, c.jsxs)(f, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '진구청앞 하차: 54, 63, 66, 81, 83-1, 88, 103,',
                        (0, c.jsx)('br', {}),
                        '124, 133(이마트 주차장 입구쪽으로 도보 5분)',
                      ],
                    }),
                    (0, c.jsxs)(f, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '진양교차로 하차: 17, 23, 44, 129-1, 138-1, 141,',
                        (0, c.jsx)('br', {}),
                        '160, 167, 169-1 (부암로타리 방면 도보 5분)',
                      ],
                    }),
                    (0, c.jsxs)(f, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '셔틀버스 운행시간: 1시간 3회 운영(20분 간격)',
                        (0, c.jsx)('br', {}),
                        '서면역 9번출고(10분, 30분, 50분)→부암역 4번출구',
                        (0, c.jsx)('br', {}),
                        '(15분, 35분, 55분)→W스퀘어웨딩홀',
                        (0, c.jsx)('br', {}),
                        '(20분, 40분, 정시)',
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, c.jsx)(f, { size: 'md', color: 'black', children: '주차정보' }),
                    (0, c.jsxs)(f, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '지하 2층 ~ 4층 동시주차 00대 가능',
                        (0, c.jsx)('br', {}),
                        '무료주차(뷔페+웨딩) 3시간',
                        (0, c.jsx)('br', {}),
                        '이마트 트레이더스, 롯데마트 주차가능',
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)('div', {
                  className: 'flex-1 flex flex-col gap-4',
                  children: [
                    (0, c.jsx)(f, { size: 'md', color: 'black', children: '대절 버스(서울-부산)' }),
                    (0, c.jsxs)(f, {
                      size: 'xs',
                      color: 'black',
                      children: ['사당역-수원역', (0, c.jsx)('br', {}), '기사님 연락처'],
                    }),
                  ],
                }),
              ],
            }),
            (0, c.jsx)(o, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [832, 971, 23, 744], function () {
      return e((e.s = 8090));
    }),
      (_N_E = e.O());
  },
]);
