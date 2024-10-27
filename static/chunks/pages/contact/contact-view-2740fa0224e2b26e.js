(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [895],
  {
    9051: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/contact/contact-view',
        function () {
          return l(4331);
        },
      ]);
    },
    2573: function (e, t, l) {
      'use strict';
      l.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = l(5893);
      let c = { xs: 'text-xs', md: 'text-base font-medium', lg: 'text-2xl', xl: 'text-4xl' };
      function s(e) {
        let { children: t, size: l, color: s = 'text-white' } = e;
        return (0, n.jsx)('div', { className: ''.concat(c[l], ' ').concat(s, ' font-abril'), children: t });
      }
    },
    5905: function (e, t, l) {
      'use strict';
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        });
      var n = l(5893);
      let c = { pink: 'bg-pink', black: 'bg-black' };
      function s(e) {
        let { children: t, color: l } = e;
        return (0, n.jsx)('div', {
          className: 'flex w-20 items-center justify-center rounded-lg py-2 '.concat(c[l]),
          children: t,
        });
      }
      function i() {
        return (0, n.jsx)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: (0, n.jsx)('path', {
            d: 'M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z',
            fill: 'white',
          }),
        });
      }
      function r() {
        return (0, n.jsx)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: (0, n.jsx)('path', {
            d: 'M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z',
            fill: 'white',
          }),
        });
      }
      var o = l(2573),
        a = l(1664),
        x = l.n(a);
      function d(e) {
        let { role: t, name: l, tel: c } = e;
        return (0, n.jsxs)('div', {
          className: 'flex justify-between items-center',
          children: [
            (0, n.jsxs)('div', {
              className: 'flex gap-2 items-center',
              children: [
                (0, n.jsx)(o.Z, { size: 'xs', color: 'text-black', children: t }),
                (0, n.jsx)(o.Z, { size: 'md', color: 'text-black', children: l }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'flex gap-1',
              children: [
                (0, n.jsx)(x(), {
                  href: 'tel:'.concat(c),
                  children: (0, n.jsx)(s, { color: 'pink', children: (0, n.jsx)(i, {}) }),
                }),
                (0, n.jsx)(x(), {
                  href: 'sms:'.concat(c),
                  children: (0, n.jsx)(s, { color: 'black', children: (0, n.jsx)(r, {}) }),
                }),
              ],
            }),
          ],
        });
      }
    },
    4331: function (e, t, l) {
      'use strict';
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l(5893),
        c = l(2573),
        s = l(5905);
      let i = [
          { role: '어머니', name: '김나원', tel: '010-7390-8733' },
          { role: '신랑', name: '이보영', tel: '010-8903-8733' },
        ],
        r = [
          { role: '아버지', name: '정수철', tel: '010-3650-1664' },
          { role: '어머니', name: '권현자', tel: '010-2585-1664' },
          { role: '신부', name: '정선미', tel: '010-7685-8901' },
        ];
      function o() {
        return (0, n.jsxs)('section', {
          className: 'px-6 py-12 bg-white bg-opacity-40 rounded-3xl flex flex-col gap-12 ',
          children: [
            (0, n.jsxs)('section', {
              className: 'flex gap-2 flex-col items-center ',
              children: [
                (0, n.jsx)(c.Z, { size: 'lg', color: 'text-black', children: 'Contact' }),
                (0, n.jsx)(c.Z, { size: 'md', color: 'text-black', children: '연락처' }),
              ],
            }),
            (0, n.jsx)('section', {
              className: 'text-center',
              children: (0, n.jsxs)(c.Z, {
                size: 'xs',
                color: 'text-black',
                children: [
                  '소중한날 함께해주셔서 감사합니다.',
                  (0, n.jsx)('br', {}),
                  ' 궁금한 점이 있으시면 연락해주세요 :)',
                ],
              }),
            }),
            (0, n.jsxs)('section', {
              className: 'flex gap-2 flex-col',
              children: [
                (0, n.jsx)(c.Z, { size: 'md', color: 'text-black', children: '\uD83E\uDD35\uD83C\uDFFB 신랑측' }),
                i.map((e) => (0, n.jsx)(s.default, { role: e.role, name: e.name, tel: e.tel })),
              ],
            }),
            (0, n.jsxs)('section', {
              className: 'flex gap-2 flex-col',
              children: [
                (0, n.jsx)(c.Z, { size: 'md', color: 'text-black', children: '\uD83D\uDC70\uD83C\uDFFB‍♀️ 신부측' }),
                r.map((e) => (0, n.jsx)(s.default, { role: e.role, name: e.name, tel: e.tel })),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [664, 888, 774, 179], function () {
      return e((e.s = 9051));
    }),
      (_N_E = e.O());
  },
]);
