(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [512],
  {
    6306: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/contact/contact-item',
        function () {
          return n(5905);
        },
      ]);
    },
    2573: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var c = n(5893);
      let i = { xs: 'text-xs', md: 'text-base font-medium', lg: 'text-2xl', xl: 'text-4xl' };
      function l(e) {
        let { children: t, size: n, color: l = 'text-white' } = e;
        return (0, c.jsx)('div', { className: ''.concat(i[n], ' ').concat(l, ' font-abril'), children: t });
      }
    },
    5905: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var c = n(5893);
      let i = { pink: 'bg-pink', black: 'bg-black' };
      function l(e) {
        let { children: t, color: n } = e;
        return (0, c.jsx)('div', {
          className: 'flex w-20 items-center justify-center rounded-lg py-2 '.concat(i[n]),
          children: t,
        });
      }
      function s() {
        return (0, c.jsx)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: (0, c.jsx)('path', {
            d: 'M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z',
            fill: 'white',
          }),
        });
      }
      function r() {
        return (0, c.jsx)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: (0, c.jsx)('path', {
            d: 'M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z',
            fill: 'white',
          }),
        });
      }
      var o = n(2573),
        x = n(1664),
        a = n.n(x);
      function u(e) {
        let { role: t, name: n, tel: i } = e;
        return (0, c.jsxs)('div', {
          className: 'flex justify-between items-center',
          children: [
            (0, c.jsxs)('div', {
              className: 'flex gap-2 items-center',
              children: [
                (0, c.jsx)(o.Z, { size: 'xs', color: 'text-black', children: t }),
                (0, c.jsx)(o.Z, { size: 'md', color: 'text-black', children: n }),
              ],
            }),
            (0, c.jsxs)('div', {
              className: 'flex gap-1',
              children: [
                (0, c.jsx)(a(), {
                  href: 'tel:'.concat(i),
                  children: (0, c.jsx)(l, { color: 'pink', children: (0, c.jsx)(s, {}) }),
                }),
                (0, c.jsx)(a(), {
                  href: 'sms:'.concat(i),
                  children: (0, c.jsx)(l, { color: 'black', children: (0, c.jsx)(r, {}) }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [664, 888, 774, 179], function () {
      return e((e.s = 6306));
    }),
      (_N_E = e.O());
  },
]);
