'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [832],
  {
    1877: function (e, t, n) {
      n.d(t, {
        default: function () {
          return a.a;
        },
      });
      var r = n(4080),
        a = n.n(r);
    },
    905: function (e, t) {
      let n;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          default: function () {
            return i;
          },
          isEqualNode: function () {
            return o;
          },
        });
      let r = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
        noModule: 'noModule',
      };
      function a(e) {
        let { type: t, props: n } = e,
          a = document.createElement(t);
        for (let e in n) {
          if (!n.hasOwnProperty(e) || 'children' === e || 'dangerouslySetInnerHTML' === e || void 0 === n[e]) continue;
          let o = r[e] || e.toLowerCase();
          'script' === t && ('async' === o || 'defer' === o || 'noModule' === o)
            ? (a[o] = !!n[e])
            : a.setAttribute(o, n[e]);
        }
        let { children: o, dangerouslySetInnerHTML: i } = n;
        return (
          i
            ? (a.innerHTML = i.__html || '')
            : o && (a.textContent = 'string' == typeof o ? o : Array.isArray(o) ? o.join('') : ''),
          a
        );
      }
      function o(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute('nonce');
          if (n && !e.getAttribute('nonce')) {
            let r = t.cloneNode(!0);
            return r.setAttribute('nonce', ''), (r.nonce = n), n === e.nonce && e.isEqualNode(r);
          }
        }
        return e.isEqualNode(t);
      }
      function i() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ('link' === e.type && e.props['data-optimized-fonts']) {
                if (document.querySelector('style[data-href="' + e.props['data-href'] + '"]')) return;
                (e.props.href = e.props['data-href']), (e.props['data-href'] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let r = t.title ? t.title[0] : null,
              a = '';
            if (r) {
              let { children: e } = r.props;
              a = 'string' == typeof e ? e : Array.isArray(e) ? e.join('') : '';
            }
            a !== document.title && (document.title = a),
              ['meta', 'base', 'link', 'style', 'script'].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName('head')[0],
          r = n.querySelector('meta[name=next-head-count]'),
          i = Number(r.content),
          s = [];
        for (
          let t = 0, n = r.previousElementSibling;
          t < i;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var l;
          (null == n ? void 0 : null == (l = n.tagName) ? void 0 : l.toLowerCase()) === e && s.push(n);
        }
        let d = t.map(a).filter((e) => {
          for (let t = 0, n = s.length; t < n; t++) if (o(s[t], e)) return s.splice(t, 1), !1;
          return !0;
        });
        s.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          d.forEach((e) => n.insertBefore(e, r)),
          (r.content = (i - s.length + d.length).toString());
      }),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9189: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ('undefined' != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ('undefined' != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4080: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return v;
          },
          handleClientScriptLoad: function () {
            return k;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let r = n(9920),
        a = n(1452),
        o = n(7437),
        i = r._(n(4887)),
        s = a._(n(2265)),
        l = n(6590),
        d = n(905),
        u = n(9189),
        c = new Map(),
        f = new Set(),
        p = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'stylesheets'],
        h = (e) => {
          if (i.default.preinit) {
            e.forEach((e) => {
              i.default.preinit(e, { as: 'style' });
            });
            return;
          }
          if ('undefined' != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement('link');
              (n.type = 'text/css'), (n.rel = 'stylesheet'), (n.href = e), t.appendChild(n);
            });
          }
        },
        m = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: o,
              children: i = '',
              strategy: s = 'afterInteractive',
              onError: l,
              stylesheets: u,
            } = e,
            m = n || t;
          if (m && f.has(m)) return;
          if (c.has(t)) {
            f.add(m), c.get(t).then(r, l);
            return;
          }
          let k = () => {
              a && a(), f.add(m);
            },
            g = document.createElement('script'),
            y = new Promise((e, t) => {
              g.addEventListener('load', function (t) {
                e(), r && r.call(this, t), k();
              }),
                g.addEventListener('error', function (e) {
                  t(e);
                });
            }).catch(function (e) {
              l && l(e);
            });
          for (let [n, r] of (o
            ? ((g.innerHTML = o.__html || ''), k())
            : i
              ? ((g.textContent = 'string' == typeof i ? i : Array.isArray(i) ? i.join('') : ''), k())
              : t && ((g.src = t), c.set(t, y)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = d.DOMAttributeNames[n] || n.toLowerCase();
            g.setAttribute(e, r);
          }
          'worker' === s && g.setAttribute('type', 'text/partytown'),
            g.setAttribute('data-nscript', s),
            u && h(u),
            document.body.appendChild(g);
        };
      function k(e) {
        let { strategy: t = 'afterInteractive' } = e;
        'lazyOnload' === t
          ? window.addEventListener('load', () => {
              (0, u.requestIdleCallback)(() => m(e));
            })
          : m(e);
      }
      function g(e) {
        e.forEach(k),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute('src');
            f.add(t);
          });
      }
      function y(e) {
        let {
            id: t,
            src: n = '',
            onLoad: r = () => {},
            onReady: a = null,
            strategy: d = 'afterInteractive',
            onError: c,
            stylesheets: p,
            ...h
          } = e,
          { updateScripts: k, scripts: g, getIsSsr: y, appDir: v, nonce: b } = (0, s.useContext)(l.HeadManagerContext),
          E = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
          let e = t || n;
          E.current || (a && e && f.has(e) && a(), (E.current = !0));
        }, [a, t, n]);
        let L = (0, s.useRef)(!1);
        if (
          ((0, s.useEffect)(() => {
            !L.current &&
              ('afterInteractive' === d
                ? m(e)
                : 'lazyOnload' === d &&
                  ('complete' === document.readyState
                    ? (0, u.requestIdleCallback)(() => m(e))
                    : window.addEventListener('load', () => {
                        (0, u.requestIdleCallback)(() => m(e));
                      })),
              (L.current = !0));
          }, [e, d]),
          ('beforeInteractive' === d || 'worker' === d) &&
            (k
              ? ((g[d] = (g[d] || []).concat([{ id: t, src: n, onLoad: r, onReady: a, onError: c, ...h }])), k(g))
              : y && y()
                ? f.add(t || n)
                : y && !y() && m(e)),
          v)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                i.default.preinit(e, { as: 'style' });
              }),
            'beforeInteractive' === d)
          )
            return n
              ? (i.default.preload(
                  n,
                  h.integrity
                    ? { as: 'script', integrity: h.integrity, nonce: b, crossOrigin: h.crossOrigin }
                    : { as: 'script', nonce: b, crossOrigin: h.crossOrigin }
                ),
                (0, o.jsx)('script', {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([n, { ...h, id: t }]) + ')',
                  },
                }))
              : (h.dangerouslySetInnerHTML &&
                  ((h.children = h.dangerouslySetInnerHTML.__html), delete h.dangerouslySetInnerHTML),
                (0, o.jsx)('script', {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([0, { ...h, id: t }]) + ')',
                  },
                }));
          'afterInteractive' === d &&
            n &&
            i.default.preload(
              n,
              h.integrity
                ? { as: 'script', integrity: h.integrity, nonce: b, crossOrigin: h.crossOrigin }
                : { as: 'script', nonce: b, crossOrigin: h.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(y, '__nextScript', { value: !0 });
      let v = y;
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1259: function (e, t, n) {
      n.d(t, {
        W: function () {
          return p;
        },
        D: function () {
          return h;
        },
      });
      var r,
        a = n(2265),
        o = n(551),
        i = n(3077);
      let s = '__react-kakao-maps-sdk__',
        l =
          (((r = {})[(r.INITIALIZED = 0)] = 'INITIALIZED'),
          (r[(r.LOADING = 1)] = 'LOADING'),
          (r[(r.SUCCESS = 2)] = 'SUCCESS'),
          (r[(r.FAILURE = 3)] = 'FAILURE'),
          r),
        d = `${s}_Loader`;
      class u {
        static loadEventCallback = new Set();
        callbacks = [];
        done = !1;
        loading = !1;
        errors = [];
        constructor(e) {
          let {
            appkey: t,
            id: n = d,
            libraries: r = [],
            nonce: a,
            retries: o = 3,
            url: i = '//dapi.kakao.com/v2/maps/sdk.js',
          } = e;
          if (
            ((this.id = n),
            (this.appkey = t),
            (this.libraries = r),
            (this.nonce = a),
            (this.retries = o),
            (this.url = i),
            u.instance &&
              !u.equalOptions(this.options, u.instance.options) &&
              !u.equalOptions(this.options, u.instance.options))
          ) {
            if (u.instance.status === l.FAILURE)
              throw Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options, null, 2)}
!==
${JSON.stringify(u.instance.options, null, 2)}`);
            u.instance.reset(), (u.instance = this);
          }
          return u.instance || (u.instance = this), u.instance;
        }
        get options() {
          return {
            appkey: this.appkey,
            id: this.id,
            libraries: this.libraries,
            nonce: this.nonce,
            retries: this.retries,
            url: this.url,
          };
        }
        static addLoadEventLisnter(e) {
          return window.kakao && window.kakao.maps && window.kakao.maps.load(e), u.loadEventCallback.add(e), e;
        }
        static removeLoadEventLisnter(e) {
          return u.loadEventCallback.delete(e);
        }
        load() {
          return new Promise((e, t) => {
            this.loadCallback((n) => {
              n ? t(n) : e(window.kakao);
            });
          });
        }
        get status() {
          return this.onEvent ? l.FAILURE : this.done ? l.SUCCESS : this.loading ? l.LOADING : l.INITIALIZED;
        }
        get failed() {
          return this.done && !this.loading && this.errors.length >= this.retries + 1;
        }
        loadCallback(e) {
          this.callbacks.push(e), this.execute();
        }
        resetIfRetryingFailed() {
          this.failed && this.reset();
        }
        reset() {
          this.deleteScript(), (this.done = !0), (this.loading = !1), (this.errors = []), (this.onEvent = void 0);
        }
        execute() {
          if ((this.resetIfRetryingFailed(), this.done)) this.callback();
          else {
            if (window.kakao && window.kakao.maps) {
              console.warn(
                'Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다.'
              ),
                window.kakao.maps.load(this.callback);
              return;
            }
            this.loading || ((this.loading = !0), this.setScript());
          }
        }
        setScript() {
          document.getElementById(this.id) && this.callback();
          let e = this.createUrl(),
            t = document.createElement('script');
          (t.id = this.id),
            (t.type = 'text/javascript'),
            (t.src = e),
            (t.onerror = this.loadErrorCallback.bind(this)),
            (t.onload = this.callback.bind(this)),
            (t.defer = !0),
            (t.async = !0),
            this.nonce && (t.nonce = this.nonce),
            document.head.appendChild(t);
        }
        loadErrorCallback(e) {
          if ((this.errors.push(e), this.errors.length <= this.retries)) {
            let e = this.errors.length * 2 ** this.errors.length;
            console.log(`Failed to load Kakao Maps script, retrying in ${e} ms.`),
              setTimeout(() => {
                this.deleteScript(), this.setScript();
              }, e);
          } else
            (this.done = !0),
              (this.loading = !1),
              (this.onEvent = this.errors[this.errors.length - 1]),
              this.callbacks.forEach((e) => {
                e(this.onEvent);
              }),
              (this.callbacks = []),
              u.loadEventCallback.forEach((e) => {
                e(this.onEvent);
              });
        }
        createUrl() {
          let e = this.url;
          return (
            (e += `?appkey=${this.appkey}`),
            this.libraries.length && (e += `&libraries=${this.libraries.join(',')}`),
            (e += '&autoload=false')
          );
        }
        deleteScript() {
          let e = document.getElementById(this.id);
          e && e.remove();
        }
        callback() {
          kakao.maps.load(() => {
            (u.instance.done = !0),
              (u.instance.loading = !1),
              u.instance.callbacks.forEach((e) => {
                e(u.instance.onEvent);
              }),
              (u.instance.callbacks = []),
              u.loadEventCallback.forEach((e) => {
                e(u.instance.onEvent);
              });
          });
        }
        static equalOptions(e, t) {
          if (e.appkey !== t.appkey || e.id !== t.id || e.libraries.length !== t.libraries.length) return !1;
          for (let n = 0; n < e.libraries.length; ++n) if (e.libraries[n] !== t.libraries[n]) return !1;
          return e.nonce === t.nonce && e.retries === t.retries && e.url === t.url;
        }
      }
      var c = n(733),
        f = n(7437);
      let p = a.createContext(void 0),
        h = a.forwardRef(function (e, t) {
          let {
              id: n,
              as: r,
              children: l,
              center: d,
              isPanto: h = !1,
              padding: m = 32,
              disableDoubleClick: k,
              disableDoubleClickZoom: g,
              draggable: y,
              zoomable: v,
              keyboardShortcuts: b,
              level: E,
              maxLevel: L,
              minLevel: w,
              mapTypeId: I,
              projectionId: C,
              scrollwheel: _,
              tileAnimation: M,
              onBoundsChanged: S,
              onCenterChanged: T,
              onClick: O,
              onDoubleClick: x,
              onDrag: D,
              onDragEnd: A,
              onDragStart: j,
              onIdle: P,
              onMaptypeidChanged: N,
              onMouseMove: R,
              onRightClick: H,
              onTileLoaded: q,
              onZoomChanged: z,
              onZoomStart: F,
              onCreate: U,
              ...Z
            } = e,
            [$, G] = (0, a.useState)(!1),
            [J, B] = (0, a.useState)(),
            K = (0, a.useRef)(null);
          return (
            (0, o.L)(() => {
              let e = u.addLoadEventLisnter((e) => G(!e));
              return () => {
                u.removeLoadEventLisnter(e);
              };
            }, []),
            (0, o.L)(() => {
              if (!$) return;
              let e = K.current;
              if (!e) return;
              let t = 'lat' in d ? new kakao.maps.LatLng(d.lat, d.lng) : new kakao.maps.Coords(d.x, d.y);
              return (
                B(
                  new kakao.maps.Map(e, {
                    center: t,
                    disableDoubleClick: k,
                    disableDoubleClickZoom: g,
                    draggable: y,
                    keyboardShortcuts: b,
                    level: E,
                    mapTypeId: 'string' == typeof I ? kakao.maps.MapTypeId[I] : I,
                    projectionId: C,
                    scrollwheel: _,
                    tileAnimation: M,
                  })
                ),
                () => {
                  e.innerHTML = '';
                }
              );
            }, [$, k, g, M]),
            (0, a.useImperativeHandle)(t, () => J, [J]),
            (0, o.L)(() => {
              J && U && U(J);
            }, [J, U]),
            (0, o.L)(() => {
              if (!J) return;
              let e = J.getCenter();
              e instanceof kakao.maps.Coords && (e = e.toLatLng());
              let t = 'lat' in d ? new kakao.maps.LatLng(d.lat, d.lng) : new kakao.maps.Coords(d.x, d.y);
              (t instanceof kakao.maps.LatLng && t.equals(e)) ||
                (t instanceof kakao.maps.Coords && t.toLatLng().equals(e)) ||
                (h ? J.panTo(t, m) : J.setCenter(t));
            }, [J, d.lat, d.lng, d.x, d.y]),
            (0, c.D)(J, 'setDraggable', y),
            (0, c.D)(J, 'setZoomable', v),
            (0, c.D)(J, 'setKeyboardShortcuts', b),
            (0, c.D)(J, 'setLevel', E),
            (0, c.D)(J, 'setMapTypeId', $ ? ('string' == typeof I ? kakao.maps.MapTypeId[I] : I) : void 0),
            (0, c.D)(J, 'setProjectionId', C),
            (0, c.D)(J, 'setMinLevel', L),
            (0, c.D)(J, 'setMaxLevel', w),
            (0, i.T)(J, 'bounds_changed', S),
            (0, i.T)(J, 'center_changed', T),
            (0, i.T)(J, 'click', O),
            (0, i.T)(J, 'dblclick', x),
            (0, i.T)(J, 'drag', D),
            (0, i.T)(J, 'dragstart', j),
            (0, i.T)(J, 'dragend', A),
            (0, i.T)(J, 'idle', P),
            (0, i.T)(J, 'maptypeid_changed', N),
            (0, i.T)(J, 'mousemove', R),
            (0, i.T)(J, 'rightclick', H),
            (0, i.T)(J, 'tilesloaded', q),
            (0, i.T)(J, 'zoom_changed', z),
            (0, i.T)(J, 'zoom_start', F),
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(r || 'div', { id: n || `${s}_Map`, ...Z, ref: K }),
                J && (0, f.jsx)(p.Provider, { value: J, children: l }),
              ],
            })
          );
        });
    },
    1643: function (e, t, n) {
      n.d(t, {
        O: function () {
          return f;
        },
      });
      var r = n(2265),
        a = n(1519),
        o = n(3077),
        i = n(4887),
        s = n(733);
      let l = r.forwardRef(function (e, t) {
        let {
            map: n,
            position: a,
            marker: o,
            children: l,
            altitude: d,
            disableAutoPan: u,
            range: c,
            removable: f,
            zIndex: p,
            onCreate: h,
          } = e,
          m = (0, r.useMemo)(() => {
            let e = document.createElement('div');
            return (
              (e.style.display = 'none'),
              new kakao.maps.InfoWindow({
                altitude: d,
                disableAutoPan: u,
                range: c,
                removable: f,
                zIndex: p,
                content: e,
                position: a,
              })
            );
          }, [u, f]),
          k = (0, r.useMemo)(() => m.getContent(), [m]);
        return (
          (0, r.useImperativeHandle)(t, () => m, [m]),
          (0, r.useLayoutEffect)(
            () => (
              m.open(n, o),
              () => {
                m.close();
              }
            ),
            [n, o]
          ),
          (0, r.useLayoutEffect)(() => {
            h && h(m);
          }, [m, h]),
          (0, s.D)(m, 'setPosition', a),
          (0, s.D)(m, 'setAltitude', d),
          (0, s.D)(m, 'setRange', c),
          (0, s.D)(m, 'setZIndex', p),
          i.createPortal(l, k.parentElement ?? k)
        );
      });
      var d = n(7437);
      let u = r.createContext(void 0),
        c = r.forwardRef(function (e, t) {
          let {
              map: n,
              position: a,
              children: i,
              altitude: c,
              clickable: f,
              draggable: p,
              image: h,
              infoWindowOptions: m,
              onCreate: k,
              onClick: g,
              onDragEnd: y,
              onDragStart: v,
              onMouseOut: b,
              onMouseOver: E,
              opacity: L,
              range: w,
              title: I,
              zIndex: C,
            } = e,
            _ = (0, r.useContext)(u),
            M = (0, r.useMemo)(
              () =>
                h &&
                new kakao.maps.MarkerImage(h.src, new kakao.maps.Size(h.size.width, h.size.height), {
                  alt: h.options?.alt,
                  coords: h.options?.coords,
                  offset: h.options?.offset && new kakao.maps.Point(h.options?.offset.x, h.options?.offset.y),
                  shape: h.options?.shape,
                  spriteOrigin:
                    h.options?.spriteOrigin &&
                    new kakao.maps.Point(h.options?.spriteOrigin.x, h.options?.spriteOrigin.y),
                  spriteSize:
                    h.options?.spriteSize &&
                    new kakao.maps.Size(h.options?.spriteSize.width, h.options?.spriteSize.height),
                }),
              [JSON.stringify(h)]
            ),
            S = (0, r.useMemo)(
              () =>
                new kakao.maps.Marker({
                  altitude: c,
                  clickable: f,
                  draggable: p,
                  image: M,
                  opacity: L,
                  range: w,
                  title: I,
                  zIndex: C,
                  position: a,
                }),
              []
            );
          return ((0, r.useImperativeHandle)(t, () => S, [S]),
          (0, r.useLayoutEffect)(
            () => (_ ? (_.addMarker(S, !0), () => _.removeMarker(S, !0)) : (S.setMap(n), () => S.setMap(null))),
            [n, _, S]
          ),
          (0, r.useLayoutEffect)(() => {
            k && k(S);
          }, [S, k]),
          (0, s.D)(S, 'setPosition', a),
          (0, s.D)(S, 'setImage', M),
          (0, s.D)(S, 'setAltitude', c),
          (0, s.D)(S, 'setClickable', f),
          (0, s.D)(S, 'setDraggable', p),
          (0, s.D)(S, 'setOpacity', L),
          (0, s.D)(S, 'setRange', w),
          (0, s.D)(S, 'setRange', w),
          (0, s.D)(S, 'setTitle', I),
          (0, s.D)(S, 'setTitle', I),
          (0, s.D)(S, 'setZIndex', C),
          (0, o.T)(S, 'click', g),
          (0, o.T)(S, 'dragstart', v),
          (0, o.T)(S, 'dragend', y),
          (0, o.T)(S, 'mouseout', b),
          (0, o.T)(S, 'mouseover', E),
          i)
            ? (0, d.jsx)(l, {
                position: a,
                map: n,
                marker: S,
                altitude: m?.altitude,
                disableAutoPan: m?.disableAutoPan,
                range: m?.range,
                removable: m?.removable,
                zIndex: m?.zIndex,
                children: i,
              })
            : null;
        }),
        f = r.forwardRef(function (e, t) {
          let { position: n, ...o } = e,
            i = (0, a.S)('MapMarker'),
            s = (0, r.useMemo)(
              () => ('lat' in n ? new kakao.maps.LatLng(n.lat, n.lng) : new kakao.maps.Coords(n.x, n.y).toLatLng()),
              [n.lat, n.lng, n.x, n.y]
            );
          return (0, d.jsx)(c, { map: i, position: s, ...o, ref: t });
        });
    },
    1304: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r = n(2265),
        a = n(1519);
      let o = r.forwardRef(function (e, t) {
        let { position: n = kakao.maps.ControlPosition.TOPRIGHT } = e,
          o = (0, a.S)('MapTypeControl'),
          i = 'string' == typeof n ? kakao.maps.ControlPosition[n] : n,
          s = (0, r.useMemo)(() => new kakao.maps.MapTypeControl(), []);
        return (
          (0, r.useImperativeHandle)(t, () => s, [s]),
          (0, r.useLayoutEffect)(
            () => (
              o.addControl(s, i),
              () => {
                o.removeControl(i);
              }
            ),
            [o, s, i]
          ),
          null
        );
      });
    },
    3293: function (e, t, n) {
      n.d(t, {
        L: function () {
          return o;
        },
      });
      var r = n(2265),
        a = n(1519);
      let o = r.forwardRef(function (e, t) {
        let { position: n = kakao.maps.ControlPosition.RIGHT } = e,
          o = (0, a.S)('ZoomControl'),
          i = 'string' == typeof n ? kakao.maps.ControlPosition[n] : n,
          s = (0, r.useMemo)(() => new kakao.maps.ZoomControl(), []);
        return (
          (0, r.useImperativeHandle)(t, () => s, [s]),
          (0, r.useLayoutEffect)(
            () => (
              o.addControl(s, i),
              () => {
                o.removeControl(s);
              }
            ),
            [o, i, s]
          ),
          null
        );
      });
    },
    551: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(2265);
      let a = 'undefined' != typeof window && 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
    },
    3077: function (e, t, n) {
      n.d(t, {
        T: function () {
          return a;
        },
      });
      var r = n(551);
      let a = (e, t, n) => {
        (0, r.L)(() => {
          if (!e || !n) return;
          let r = function () {
            for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
            return void 0 === r ? n(e) : n(e, ...r);
          };
          return (
            kakao.maps.event.addListener(e, t, r),
            () => {
              kakao.maps.event.removeListener(e, t, r);
            }
          );
        }, [e, t, n]);
      };
    },
    733: function (e, t, n) {
      n.d(t, {
        D: function () {
          return a;
        },
      });
      var r = n(551);
      let a = function (e, t) {
        for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
        (0, r.L)(() => {
          !e || a.every((e) => void 0 === e) || e[t].call(e, ...a);
        }, [e, t, ...a]);
      };
    },
    1519: function (e, t, n) {
      n.d(t, {
        S: function () {
          return o;
        },
      });
      var r = n(2265),
        a = n(1259);
      let o = (e) => {
        let t = (0, r.useContext)(a.W);
        if (!t) throw Error(`${e ? e + ' Component' : 'useMap'} must exist inside Map Component!`);
        return t;
      };
    },
  },
]);
