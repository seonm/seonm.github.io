(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [757],
  {
    1629: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/location/location-view',
        function () {
          return s(3218);
        },
      ]);
    },
    8785: function (e, t, s) {
      'use strict';
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(5893);
      let n = { black: ' bg-black bg-opacity-10', white: 'bg-white bg-opacity-100' };
      function i(e) {
        let { children: t, className: s, type: i = 'black', onClick: o } = e;
        return (0, a.jsx)('div', {
          className: ''.concat(n[i], ' flex rounded-3xl p-6 ').concat(s),
          onClick: o,
          children: t,
        });
      }
    },
    2573: function (e, t, s) {
      'use strict';
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(5893);
      let n = { xs: 'text-xs', md: 'text-base font-medium', lg: 'text-2xl', xl: 'text-4xl' };
      function i(e) {
        let { children: t, size: s, color: i = 'text-white' } = e;
        return (0, a.jsx)('div', { className: ''.concat(n[s], ' ').concat(i, ' font-abril'), children: t });
      }
    },
    3218: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          default: function () {
            return z;
          },
        });
      var a,
        n = s(5893),
        i = s(4298),
        o = s.n(i),
        r = s(7294);
      let l = 'undefined' != typeof window && 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect,
        c = (e, t, s) => {
          l(() => {
            if (!e || !s) return;
            let a = function () {
              for (var t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
              return void 0 === a ? s(e) : s(e, ...a);
            };
            return (
              kakao.maps.event.addListener(e, t, a),
              () => {
                kakao.maps.event.removeListener(e, t, a);
              }
            );
          }, [e, t, s]);
        },
        d = '__react-kakao-maps-sdk__',
        p =
          (((a = {})[(a.INITIALIZED = 0)] = 'INITIALIZED'),
          (a[(a.LOADING = 1)] = 'LOADING'),
          (a[(a.SUCCESS = 2)] = 'SUCCESS'),
          (a[(a.FAILURE = 3)] = 'FAILURE'),
          a),
        h = `${d}_Loader`;
      class u {
        static loadEventCallback = new Set();
        callbacks = [];
        done = !1;
        loading = !1;
        errors = [];
        constructor(e) {
          let {
            appkey: t,
            id: s = h,
            libraries: a = [],
            nonce: n,
            retries: i = 3,
            url: o = '//dapi.kakao.com/v2/maps/sdk.js',
          } = e;
          if (
            ((this.id = s),
            (this.appkey = t),
            (this.libraries = a),
            (this.nonce = n),
            (this.retries = i),
            (this.url = o),
            u.instance &&
              !u.equalOptions(this.options, u.instance.options) &&
              !u.equalOptions(this.options, u.instance.options))
          ) {
            if (u.instance.status === p.FAILURE)
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
            this.loadCallback((s) => {
              s ? t(s) : e(window.kakao);
            });
          });
        }
        get status() {
          return this.onEvent ? p.FAILURE : this.done ? p.SUCCESS : this.loading ? p.LOADING : p.INITIALIZED;
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
          for (let s = 0; s < e.libraries.length; ++s) if (e.libraries[s] !== t.libraries[s]) return !1;
          return e.nonce === t.nonce && e.retries === t.retries && e.url === t.url;
        }
      }
      let f = function (e, t) {
          for (var s = arguments.length, a = Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++) a[n - 2] = arguments[n];
          l(() => {
            !e || a.every((e) => void 0 === e) || e[t].call(e, ...a);
          }, [e, t, ...a]);
        },
        k = r.createContext(void 0),
        x = r.forwardRef(function (e, t) {
          let {
              id: s,
              as: a,
              children: i,
              center: o,
              isPanto: p = !1,
              padding: h = 32,
              disableDoubleClick: x,
              disableDoubleClickZoom: m,
              draggable: g,
              zoomable: b,
              keyboardShortcuts: v,
              level: w,
              maxLevel: j,
              minLevel: y,
              mapTypeId: E,
              projectionId: L,
              scrollwheel: C,
              tileAnimation: I,
              onBoundsChanged: N,
              onCenterChanged: z,
              onClick: M,
              onDoubleClick: S,
              onDrag: Z,
              onDragEnd: _,
              onDragStart: T,
              onIdle: P,
              onMaptypeidChanged: R,
              onMouseMove: A,
              onRightClick: O,
              onTileLoaded: U,
              onZoomChanged: D,
              onZoomStart: F,
              onCreate: H,
              ...$
            } = e,
            [q, G] = (0, r.useState)(!1),
            [J, K] = (0, r.useState)(),
            W = (0, r.useRef)(null);
          return (
            l(() => {
              let e = u.addLoadEventLisnter((e) => G(!e));
              return () => {
                u.removeLoadEventLisnter(e);
              };
            }, []),
            l(() => {
              if (!q) return;
              let e = W.current;
              if (!e) return;
              let t = 'lat' in o ? new kakao.maps.LatLng(o.lat, o.lng) : new kakao.maps.Coords(o.x, o.y);
              return (
                K(
                  new kakao.maps.Map(e, {
                    center: t,
                    disableDoubleClick: x,
                    disableDoubleClickZoom: m,
                    draggable: g,
                    keyboardShortcuts: v,
                    level: w,
                    mapTypeId: 'string' == typeof E ? kakao.maps.MapTypeId[E] : E,
                    projectionId: L,
                    scrollwheel: C,
                    tileAnimation: I,
                  })
                ),
                () => {
                  e.innerHTML = '';
                }
              );
            }, [q, x, m, I]),
            (0, r.useImperativeHandle)(t, () => J, [J]),
            l(() => {
              J && H && H(J);
            }, [J, H]),
            l(() => {
              if (!J) return;
              let e = J.getCenter();
              e instanceof kakao.maps.Coords && (e = e.toLatLng());
              let t = 'lat' in o ? new kakao.maps.LatLng(o.lat, o.lng) : new kakao.maps.Coords(o.x, o.y);
              (t instanceof kakao.maps.LatLng && t.equals(e)) ||
                (t instanceof kakao.maps.Coords && t.toLatLng().equals(e)) ||
                (p ? J.panTo(t, h) : J.setCenter(t));
            }, [J, o.lat, o.lng, o.x, o.y]),
            f(J, 'setDraggable', g),
            f(J, 'setZoomable', b),
            f(J, 'setKeyboardShortcuts', v),
            f(J, 'setLevel', w),
            f(J, 'setMapTypeId', q ? ('string' == typeof E ? kakao.maps.MapTypeId[E] : E) : void 0),
            f(J, 'setProjectionId', L),
            f(J, 'setMinLevel', j),
            f(J, 'setMaxLevel', y),
            c(J, 'bounds_changed', N),
            c(J, 'center_changed', z),
            c(J, 'click', M),
            c(J, 'dblclick', S),
            c(J, 'drag', Z),
            c(J, 'dragstart', T),
            c(J, 'dragend', _),
            c(J, 'idle', P),
            c(J, 'maptypeid_changed', R),
            c(J, 'mousemove', A),
            c(J, 'rightclick', O),
            c(J, 'tilesloaded', U),
            c(J, 'zoom_changed', D),
            c(J, 'zoom_start', F),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(a || 'div', { id: s || `${d}_Map`, ...$, ref: W }),
                J && (0, n.jsx)(k.Provider, { value: J, children: i }),
              ],
            })
          );
        }),
        m = (e) => {
          let t = (0, r.useContext)(k);
          if (!t) throw Error(`${e ? e + ' Component' : 'useMap'} must exist inside Map Component!`);
          return t;
        };
      var g = s(3935);
      let b = r.forwardRef(function (e, t) {
          let {
              map: s,
              position: a,
              marker: n,
              children: i,
              altitude: o,
              disableAutoPan: l,
              range: c,
              removable: d,
              zIndex: p,
              onCreate: h,
            } = e,
            u = (0, r.useMemo)(() => {
              let e = document.createElement('div');
              return (
                (e.style.display = 'none'),
                new kakao.maps.InfoWindow({
                  altitude: o,
                  disableAutoPan: l,
                  range: c,
                  removable: d,
                  zIndex: p,
                  content: e,
                  position: a,
                })
              );
            }, [l, d]),
            k = (0, r.useMemo)(() => u.getContent(), [u]);
          return (
            (0, r.useImperativeHandle)(t, () => u, [u]),
            (0, r.useLayoutEffect)(
              () => (
                u.open(s, n),
                () => {
                  u.close();
                }
              ),
              [s, n]
            ),
            (0, r.useLayoutEffect)(() => {
              h && h(u);
            }, [u, h]),
            f(u, 'setPosition', a),
            f(u, 'setAltitude', o),
            f(u, 'setRange', c),
            f(u, 'setZIndex', p),
            g.createPortal(i, k.parentElement ?? k)
          );
        }),
        v = r.createContext(void 0),
        w = r.forwardRef(function (e, t) {
          let {
              map: s,
              position: a,
              children: i,
              altitude: o,
              clickable: l,
              draggable: d,
              image: p,
              infoWindowOptions: h,
              onCreate: u,
              onClick: k,
              onDragEnd: x,
              onDragStart: m,
              onMouseOut: g,
              onMouseOver: w,
              opacity: j,
              range: y,
              title: E,
              zIndex: L,
            } = e,
            C = (0, r.useContext)(v),
            I = (0, r.useMemo)(
              () =>
                p &&
                new kakao.maps.MarkerImage(p.src, new kakao.maps.Size(p.size.width, p.size.height), {
                  alt: p.options?.alt,
                  coords: p.options?.coords,
                  offset: p.options?.offset && new kakao.maps.Point(p.options?.offset.x, p.options?.offset.y),
                  shape: p.options?.shape,
                  spriteOrigin:
                    p.options?.spriteOrigin &&
                    new kakao.maps.Point(p.options?.spriteOrigin.x, p.options?.spriteOrigin.y),
                  spriteSize:
                    p.options?.spriteSize &&
                    new kakao.maps.Size(p.options?.spriteSize.width, p.options?.spriteSize.height),
                }),
              [JSON.stringify(p)]
            ),
            N = (0, r.useMemo)(
              () =>
                new kakao.maps.Marker({
                  altitude: o,
                  clickable: l,
                  draggable: d,
                  image: I,
                  opacity: j,
                  range: y,
                  title: E,
                  zIndex: L,
                  position: a,
                }),
              []
            );
          return ((0, r.useImperativeHandle)(t, () => N, [N]),
          (0, r.useLayoutEffect)(
            () => (C ? (C.addMarker(N, !0), () => C.removeMarker(N, !0)) : (N.setMap(s), () => N.setMap(null))),
            [s, C, N]
          ),
          (0, r.useLayoutEffect)(() => {
            u && u(N);
          }, [N, u]),
          f(N, 'setPosition', a),
          f(N, 'setImage', I),
          f(N, 'setAltitude', o),
          f(N, 'setClickable', l),
          f(N, 'setDraggable', d),
          f(N, 'setOpacity', j),
          f(N, 'setRange', y),
          f(N, 'setRange', y),
          f(N, 'setTitle', E),
          f(N, 'setTitle', E),
          f(N, 'setZIndex', L),
          c(N, 'click', k),
          c(N, 'dragstart', m),
          c(N, 'dragend', x),
          c(N, 'mouseout', g),
          c(N, 'mouseover', w),
          i)
            ? (0, n.jsx)(b, {
                position: a,
                map: s,
                marker: N,
                altitude: h?.altitude,
                disableAutoPan: h?.disableAutoPan,
                range: h?.range,
                removable: h?.removable,
                zIndex: h?.zIndex,
                children: i,
              })
            : null;
        }),
        j = r.forwardRef(function (e, t) {
          let { position: s, ...a } = e,
            i = m('MapMarker'),
            o = (0, r.useMemo)(
              () => ('lat' in s ? new kakao.maps.LatLng(s.lat, s.lng) : new kakao.maps.Coords(s.x, s.y).toLatLng()),
              [s.lat, s.lng, s.x, s.y]
            );
          return (0, n.jsx)(w, { map: i, position: o, ...a, ref: t });
        }),
        y = r.forwardRef(function (e, t) {
          let { position: s = kakao.maps.ControlPosition.TOPRIGHT } = e,
            a = m('MapTypeControl'),
            n = 'string' == typeof s ? kakao.maps.ControlPosition[s] : s,
            i = (0, r.useMemo)(() => new kakao.maps.MapTypeControl(), []);
          return (
            (0, r.useImperativeHandle)(t, () => i, [i]),
            (0, r.useLayoutEffect)(
              () => (
                a.addControl(i, n),
                () => {
                  a.removeControl(n);
                }
              ),
              [a, i, n]
            ),
            null
          );
        }),
        E = r.forwardRef(function (e, t) {
          let { position: s = kakao.maps.ControlPosition.RIGHT } = e,
            a = m('ZoomControl'),
            n = 'string' == typeof s ? kakao.maps.ControlPosition[s] : s,
            i = (0, r.useMemo)(() => new kakao.maps.ZoomControl(), []);
          return (
            (0, r.useImperativeHandle)(t, () => i, [i]),
            (0, r.useLayoutEffect)(
              () => (
                a.addControl(i, n),
                () => {
                  a.removeControl(i);
                }
              ),
              [a, n, i]
            ),
            null
          );
        });
      var L = (e) => {
          let { width: t, height: s } = e;
          return (0, n.jsxs)('div', {
            children: [
              (0, n.jsx)(o(), {
                src: '//dapi.kakao.com/v2/maps/sdk.js?appkey=c5b2cd66b423457481bde66dfb56e08c&autoload=false',
                strategy: 'beforeInteractive',
              }),
              (0, n.jsxs)(x, {
                center: { lat: 35.1642847462087, lng: 129.05060934054563 },
                style: { width: t, height: s },
                children: [
                  (0, n.jsx)(j, { position: { lat: 35.1642847462087, lng: 129.05060934054563 } }),
                  (0, n.jsx)(y, {}),
                  (0, n.jsx)(E, {}),
                ],
              }),
            ],
          });
        },
        C = () =>
          (0, n.jsx)('button', {
            onClick: () => {
              let e = 'kakaomap://maps?target=marker&lat='.concat(37.5665, '&lng=').concat(126.978);
              window.location.href = e;
            },
            children: '카카오맵 열기',
          }),
        I = s(8785),
        N = s(2573);
      function z() {
        return (0, n.jsxs)('div', {
          className: 'flex items-center justify-center bg-pink p-6',
          children: [
            (0, n.jsxs)(I.Z, {
              type: 'white',
              className: 'justify-center flex flex-col gap-12 max-w-96',
              children: [
                (0, n.jsxs)('div', {
                  className: 'items-center flex flex-col gap-2',
                  children: [
                    (0, n.jsx)(N.Z, { size: 'lg', color: 'black', children: 'Location' }),
                    (0, n.jsx)(N.Z, { size: 'xs', color: 'black', children: '오시는 길' }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'items-center flex flex-col gap-6',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'flex flex-col items-center gap-2',
                      children: [
                        (0, n.jsx)(N.Z, { size: 'lg', color: 'black', children: 'W스퀘어 웨딩홀 가든홀' }),
                        (0, n.jsx)(N.Z, {
                          size: 'xs',
                          color: 'black',
                          children: '부산광역시 부산진구 신천대로 252(부암동) 3층',
                        }),
                        (0, n.jsx)(N.Z, { size: 'xs', color: 'black', children: '051-711-0177' }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex flex-col justify-center gap-4',
                      children: [
                        (0, n.jsx)(L, { width: '300px', height: '210px' }),
                        (0, n.jsxs)('div', {
                          className: 'flex flex-row justify-between gap-4',
                          children: [
                            (0, n.jsx)('rect', {
                              className: 'bg-black text-white w-[81px] h-[35px] flex justify-center items-center',
                              children: '네이버지도',
                            }),
                            (0, n.jsx)('rect', {
                              className: 'bg-black text-white w-[42px] h-[35px] flex justify-center items-center',
                              children: '티맵',
                            }),
                            (0, n.jsx)('rect', {
                              className: 'bg-black text-white w-[81px] h-[35px] flex justify-center items-center',
                              children: '카카오내비',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, n.jsx)(N.Z, { size: 'md', color: 'black', children: '지하철' }),
                    (0, n.jsxs)('div', {
                      className: 'items-center flex flex-row gap-2',
                      children: [
                        (0, n.jsx)('div', {
                          className:
                            'bg-green-400 w-6 h-6 rounded-full justify-center items-center flex flex-row gap-2',
                          children: (0, n.jsx)(N.Z, { size: 'xs', color: 'white', children: '2' }),
                        }),
                        (0, n.jsx)(N.Z, {
                          size: 'xs',
                          color: 'black',
                          children: '2호선 부암역 4번 출구(도보 10분거리)',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, n.jsx)(N.Z, { size: 'md', color: 'black', children: '버스' }),
                    (0, n.jsxs)(N.Z, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '진구청앞 하차: 54, 63, 66, 81, 83-1, 88, 103,',
                        (0, n.jsx)('br', {}),
                        '124, 133(이마트 주차장 입구쪽으로 도보 5분)',
                      ],
                    }),
                    (0, n.jsxs)(N.Z, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '진양교차로 하차: 17, 23, 44, 129-1, 138-1, 141,',
                        (0, n.jsx)('br', {}),
                        '160, 167, 169-1 (부암로타리 방면 도보 5분)',
                      ],
                    }),
                    (0, n.jsxs)(N.Z, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '셔틀버스 운행시간: 1시간 3회 운영(20분 간격)',
                        (0, n.jsx)('br', {}),
                        '서면역 9번출고(10분, 30분, 50분)→부암역 4번출구',
                        (0, n.jsx)('br', {}),
                        '(15분, 35분, 55분)→W스퀘어웨딩홀',
                        (0, n.jsx)('br', {}),
                        '(20분, 40분, 정시)',
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, n.jsx)(N.Z, { size: 'md', color: 'black', children: '주차정보' }),
                    (0, n.jsxs)(N.Z, {
                      size: 'xs',
                      color: 'black',
                      children: [
                        '지하 2층 ~ 4층 동시주차 00대 가능',
                        (0, n.jsx)('br', {}),
                        '무료주차(뷔페+웨딩) 3시간',
                        (0, n.jsx)('br', {}),
                        '이마트 트레이더스, 롯데마트 주차가능',
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'flex-1 flex flex-col gap-4',
                  children: [
                    (0, n.jsx)(N.Z, { size: 'md', color: 'black', children: '대절 버스(서울-부산)' }),
                    (0, n.jsxs)(N.Z, {
                      size: 'xs',
                      color: 'black',
                      children: ['사당역-수원역', (0, n.jsx)('br', {}), '기사님 연락처'],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(C, {}),
          ],
        });
      }
    },
    4298: function (e, t, s) {
      e.exports = s(69);
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 1629));
    }),
      (_N_E = e.O());
  },
]);
