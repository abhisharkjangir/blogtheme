(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    172: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAABoCAQAAAD1esz4AAAACXZwQWcAAADLAAAAaADD2bLRAAAFKklEQVR42u3bz4vcZBzH8fljsrZiFSQHwYvk3kOUPXgKUlAKkoqHFsGg2INdRteTl1BRPJR4UFpRxsMKIhjEc0DRSouDeNBLUEQE4e0hv54kT2bj9hk7LR8+l5knM7M731eeX8nugoWye1EJxKKIRSyKWMSiiEURi1gUsYhFEYtYFLEoYhGLIhaxKGIRiyIWRSxiUcQiFkUsJ8kPXOUS53iGF0n5FrHsAMk5vEGe5GvEchfzGWdGKB4eexwglruULzhlRalyiFjuQn7G34Di8QDf8yuX2WefC3zEH4hli7nJh3wKi2c3onh4vMznxjOfDxDLVnLEWTw83uKrY1E8znJ70HIFsTjOPyRteT/m6Rksj/HbqO1txOI0V4ziZuzNYNnj1qjtFN8hFmfJexDPz0DxeJgbltbzYnGX/UHB57A8zlOW1tP8jlic5NYshvEgZm8/EoubZCdimcp7YnGTA6csh2Jxk1ecsrwjFjd50ynLl2Jxk08copzhL7G4SclpZywXtW9xlwuOUB7ktljc5aeZW8jj8q6uibmeX/buGOV1XUF2n+s8dAckj3BN91u2kx85by35E7zBNTIyrvIq4ehm8qNc5hfdndzuzeL3eYmY54i5xCE3uDkq+J8cccALXOQ1rvINf99j9/Xvi78Tu/+iEohFEYtYFLGIRRGLIhaxKGIRiyIWsZwwa1IjK9YMj2W9q7jV67pHKaVxfFW35ZifPH5/yppV/RPNO//jT1xTTF5FLupPKLEfzUjJet+oSd7+ljvKko/ugURtIfL6ufn66jXdI6/HFtRtKeYnd4VZt2056/qfirqjSzw8kgFjZC3eioCQlJQEn2RAUxARsKyPRj2aFJ+YlJQYf3DS7DBLV+p5LCFdqTwry3JQ+IqFRYqHR0xTyoqpnMGS4RvneklCaLwvq38DE6I51RLC3mkSDk6DnWKJ2tLExhk+j6XrDckES8CwN3l1UUPjcYSH1xvUplgKvNHQFre8a/zRpzSEKcGAvSRw2GO2xNIVN57J4re9oWyfmyy+UeyV0ZIb/TGgJLP8rCmW2HKGr9vTI9lw/vuDmbLqW8G9wFLSlH4OyxIPv14CNM9NloiwHahiPEIig6UZ1pb4g3lmE4tnnayj+qwf9xXzu9raPWeT/xZZmuGkYA5L0faGqvzpiKVqKSnrI32W0vh3cNtgMmYpJoqbEjN9dNPyIXI2jP0PLPksloaj4RmzNBwNT5+lWyiEzCtlPskS0T+aGUv/aolxT7MEdQHnsaT1q6rBbMxSDV4BQT2YDVmaib8belJjYTAu5RrPulNZktA/2rFU03o2QR9aZpydY8nb1dN6sI7qtzQsZW8hbGPpFs4rK8uwZTPL1OwRbphbqv5QWEFLy7pu51gKYy3V9Juui8fGhq/rN82iuphgYeHXazAbwrhlTV6ntLIklra8XYktLUej9vuklkXFzq7Egrqzx4NxPm13/tVQYO45OpaV8R47y9LYVh7Pctw0XTJc6JaEbcFLy969OZobG8vuNMx3laWf2OjqycQVAJOl6g3pBpai7U0uWKpidtfO8sFevcAnbhfbBZGxs896pBm+s3lliywByag8OUndT0KWxs7CZFm2o7adhUXY9sD/ytI/KfJ2L19d7YoIGE/ZJSk+IREBweDiZ05cv9Mndny5UhfR656QT1w/buao9eTWMt/C3zeLRLfBFLGIRRGLWBSxKGIRiyIWsShiEYsiFkUsYlHEIhZFLGJRxKKIRSyKWMSiiEVhweJf2dROPUsirO4AAAAASUVORK5CYII=";
    },
    178: function(e, t, n) {
      e.exports = n(405);
    },
    378: function(e, t, n) {},
    379: function(e, t, n) {},
    380: function(e, t, n) {},
    381: function(e, t, n) {},
    382: function(e, t, n) {},
    405: function(e, t, n) {
      "use strict";
      n.r(t);
      n(179);
      var r,
        a = n(2),
        c = n.n(a),
        o = n(71),
        i = n(61),
        u = n(78),
        s = n.n(u),
        l = n(409),
        d = n(72),
        f = n(169),
        h = n(18),
        b = n(176),
        p = n(32),
        g = n(62),
        j = n(171),
        O = "".concat("APP/", "SET_DATA"),
        v = "".concat("APP/", "FETCH_CATEGORY"),
        m = "".concat("APP/", "FETCHING_CATEGORY"),
        E = "".concat("APP/", "FETCH_CATEGORY_SUCCESS"),
        y = "".concat("APP/", "FETCH_CATEGORY_ERROR"),
        w = Object(p.fromJS)({}),
        A = Object(p.fromJS)({
          isFetching: !1,
          list: Object(p.fromJS)([]),
          error: null
        }),
        R = { home: "HomePage" },
        S = "".concat("LOADER/", "SHOW"),
        k = "".concat("LOADER/", "HIDE"),
        L = Object(p.fromJS)({ value: !1 }),
        x = Object(j.combineReducers)(
          ((r = {}),
          Object(g.a)(r, "app", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : w,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.data;
            switch (n) {
              case O:
                return e.merge(Object(p.fromJS)(r));
              default:
                return e;
            }
          }),
          Object(g.a)(r, "loader", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : L,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case S:
                return e.set("value", !0).set("message", t.data);
              case k:
                return e.set("value", !1).set("message", void 0);
              default:
                return e;
            }
          }),
          Object(g.a)(r, "home", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : R,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.payload;
            switch (n) {
              case "HOME_SAVE_USERS":
                return Object.assign({}, e, { users: r });
              default:
                return e;
            }
          }),
          Object(g.a)(r, "category", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.data;
            switch (n) {
              case m:
                return e.set("isFetching", !0);
              case E:
                return e.set("isFetching", !1).set("list", Object(p.fromJS)(r));
              case y:
                return e.set("isFetching", !1).set("error", r);
              default:
                return e;
            }
          }),
          r)
        ),
        P = n(46),
        F = n(96),
        T = n.n(F),
        U = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        I = function(e) {
          var t = localStorage.getItem(e);
          if (t) return JSON.parse(t);
        },
        G = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function C(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function() {
                  "installed" === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      n(376), n(377), n(378);
      var D = n(408),
        J = n(34),
        Y = n(27),
        N = n(28),
        W = n(30),
        K = n(29),
        z = n(31),
        q = n(177),
        H = (n(379),
        n(380),
        function(e) {
          var t = e.children;
          return c.a.createElement("div", { className: "container" }, t);
        }),
        Z = n(172),
        B = n.n(Z),
        V = (function(e) {
          function t() {
            return (
              Object(Y.a)(this, t),
              Object(W.a)(this, Object(K.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(z.a)(t, e),
            Object(N.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "header",
                    { className: "header" },
                    c.a.createElement(
                      H,
                      null,
                      c.a.createElement("img", {
                        src: B.a,
                        width: "105px",
                        alt: "logo"
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.a.PureComponent),
        Q = (n(381),
        (function(e) {
          function t() {
            return (
              Object(Y.a)(this, t),
              Object(W.a)(this, Object(K.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(z.a)(t, e),
            Object(N.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = new Date().getFullYear(),
                    t = this.props.sidebar;
                  return c.a.createElement(
                    "footer",
                    { className: t ? "footer" : "footer-no-sidebar" },
                    c.a.createElement(
                      H,
                      null,
                      "Copyright \xa9 ",
                      e,
                      " ",
                      c.a.createElement(
                        "span",
                        { className: "float-right" },
                        "Made with",
                        " ",
                        c.a.createElement(
                          "span",
                          { role: "img", "aria-label": "heart" },
                          "\ud83d\udc96"
                        ),
                        " ",
                        "by ",
                        c.a.createElement(
                          "a",
                          { href: "http://abhijangir.me" },
                          "Abhishar Jangir."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component)),
        M = n(406),
        X = n(407),
        _ = function() {
          return { type: v };
        },
        $ = function() {
          return { type: m };
        },
        ee = function(e) {
          return { type: E, data: e };
        },
        te = function(e) {
          return { type: y, data: e };
        },
        ne = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 426));
          },
          loading: function() {
            return null;
          }
        }),
        re = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 425));
          },
          loading: function() {
            return null;
          }
        }),
        ae = [
          { path: "/", component: ne, fetchRouteData: [_], exact: !0 },
          { component: re }
        ],
        ce = function() {
          return c.a.createElement(
            M.a,
            null,
            ae.map(function(e, t) {
              return c.a.createElement(X.a, Object.assign({ key: t }, e));
            })
          );
        },
        oe = n(94),
        ie = (function(e) {
          function t() {
            return (
              Object(Y.a)(this, t),
              Object(W.a)(this, Object(K.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(z.a)(t, e),
            Object(N.a)(t, [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.location.pathname !== e.location.pathname &&
                    window.scrollTo(0, 0);
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.children;
                }
              }
            ]),
            t
          );
        })(c.a.Component),
        ue = Object(oe.a)(ie),
        se = (n(382),
        function(e) {
          var t = e.value,
            n = e.message;
          return t
            ? c.a.createElement(
                "div",
                { className: "loader" },
                n || "Loading... Please wait!"
              )
            : null;
        }),
        le = function(e) {
          return e.get("loader");
        },
        de = Object(J.createStructuredSelector)({
          value: Object(J.createSelector)(le, function(e) {
            return e.get("value");
          }),
          message: Object(J.createSelector)(le, function(e) {
            return e.get("message");
          })
        }),
        fe = Object(i.connect)(de, null)(se),
        he = (function(e) {
          function t(e) {
            var n;
            return (
              Object(Y.a)(this, t),
              ((n = Object(W.a)(this, Object(K.a)(t).call(this, e))).state = {
                hasError: !1
              }),
              n
            );
          }
          return (
            Object(z.a)(t, e),
            Object(N.a)(
              t,
              [
                {
                  key: "componentDidCatch",
                  value: function(e, t) {
                    console.log(e, t);
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return this.state.hasError
                      ? c.a.createElement("h1", null, "Something went wrong.")
                      : this.props.children;
                  }
                }
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function(e) {
                    return { hasError: !0 };
                  }
                }
              ]
            ),
            t
          );
        })(a.Component),
        be = (function(e) {
          function t() {
            return (
              Object(Y.a)(this, t),
              Object(W.a)(this, Object(K.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(z.a)(t, e),
            Object(N.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props,
                    t = e.categoryIsFetching,
                    n = e.categoryList,
                    r = e.fetchCategory;
                  t || 0 !== n.length || r();
                }
              },
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    he,
                    null,
                    c.a.createElement(
                      ue,
                      null,
                      c.a.createElement(
                        "div",
                        { id: "app" },
                        c.a.createElement(q.a, null),
                        c.a.createElement(V, null),
                        c.a.createElement(
                          "div",
                          { id: "content", className: "content" },
                          c.a.createElement(ce, null)
                        ),
                        c.a.createElement(Q, null)
                      ),
                      c.a.createElement(fe, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        pe = function(e) {
          var t = {};
          if (void 0 !== typeof Storage && !U)
            for (var n = Object.keys(localStorage), r = 0; r < n.length; r++)
              t[n[r]] = I(n[r]);
          return (function(n) {
            function r() {
              return (
                Object(Y.a)(this, r),
                Object(W.a)(this, Object(K.a)(r).apply(this, arguments))
              );
            }
            return (
              Object(z.a)(r, n),
              Object(N.a)(r, [
                {
                  key: "render",
                  value: function() {
                    return c.a.createElement(e, { storage: t });
                  }
                }
              ]),
              r
            );
          })(c.a.Component);
        },
        ge = function(e) {
          return e.get("category");
        },
        je = Object(J.createSelector)(ge, function(e) {
          return e.get("isFetching");
        }),
        Oe = Object(J.createSelector)(ge, function(e) {
          return e && e.get("list").toJS();
        }),
        ve = Object(J.createSelector)(ge, function(e) {
          return e.get("error");
        }),
        me = Object(J.createStructuredSelector)({
          categoryIsFetching: je,
          categoryList: Oe,
          categoryError: ve
        }),
        Ee = pe(
          Object(D.a)(
            Object(i.connect)(me, function(e) {
              return {
                fetchCategory: function() {
                  return e(_());
                }
              };
            })(be)
          )
        ),
        ye = n(51),
        we = n.n(ye),
        Ae = n(35),
        Re = n(175),
        Se = n.n(Re),
        ke = { PROD: "prod", STAG: "stag", LOCAL: "local" },
        Le = { URL: "http://api.abhijangir.me/", env: "Staging" },
        xe = {},
        Pe = {};
      switch ("prod") {
        case ke.PROD:
          Pe = Object(P.a)(
            {},
            { URL: "http://api.abhijangir.me/", env: "Production" },
            xe
          );
          break;
        case ke.STAG:
          Pe = Object(P.a)({}, Le, xe);
          break;
        case ke.LOCAL:
          Pe = Object(P.a)(
            {},
            { URL: "http://192.168.30.83:5000/", env: "Local" },
            xe
          );
          break;
        default:
          Pe = Object(P.a)({}, Le, xe);
      }
      var Fe = Pe,
        Te = (function(e) {
          var t = {
              baseURL: e || Fe.BASE_URL,
              paramsSerializer: function(e) {
                return T.a.stringify(e);
              }
            },
            n = Se.a.create(t);
          return (
            n.interceptors.request.use(
              function(e) {
                return e;
              },
              function(e) {
                return Promise.reject(e);
              }
            ),
            n.interceptors.response.use(
              function(e) {
                return e.data.success, !e.data.success && e.data.message, e;
              },
              function(e) {
                return Promise.reject(e);
              }
            ),
            n
          );
        })(Fe.URL),
        Ue = {
          login: "signin",
          logout: "signout",
          blogs: "stories/filter",
          deleteBlog: "story/delete",
          addBlog: "story/add",
          categories: "categories",
          blogDetails: "story"
        },
        Ie = function(e) {
          return e && Ue[e] ? Ue[e] : "";
        },
        Ge = function(e) {
          var t = e.method,
            n = void 0 === t ? "GET" : t,
            r = e.url,
            a = e.data,
            c = e.appendUrl,
            o = void 0 === c ? "" : c;
          return (
            (r = Ie(r) + o),
            new Promise(function(e, t) {
              Te({ url: r, method: n, data: a })
                .then(function(t) {
                  e(Object(P.a)({}, t));
                })
                .catch(function(e) {
                  t(e);
                });
            })
          );
        },
        Ce = we.a.mark(Je),
        De = we.a.mark(Ye);
      function Je() {
        var e, t, n, r, a;
        return we.a.wrap(
          function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.prev = 0), (c.next = 3), Object(Ae.c)($());
                case 3:
                  return (
                    (c.next = 5),
                    Object(Ae.b)(Ge, { method: "GET", url: "categories" })
                  );
                case 5:
                  if (
                    ((e = c.sent),
                    (t = e.data),
                    (n = t.success),
                    (r = t.message),
                    (a = t.data),
                    !n)
                  ) {
                    c.next = 16;
                    break;
                  }
                  return (c.next = 13), Object(Ae.c)(ee(a));
                case 13:
                  return c.abrupt("return", c.sent);
                case 16:
                  return (c.next = 18), Object(Ae.c)(te(r));
                case 18:
                  return c.abrupt("return", c.sent);
                case 19:
                  c.next = 26;
                  break;
                case 21:
                  return (
                    (c.prev = 21),
                    (c.t0 = c.catch(0)),
                    (c.next = 25),
                    Object(Ae.c)(te(c.t0))
                  );
                case 25:
                  return c.abrupt("return", c.sent);
                case 26:
                case "end":
                  return c.stop();
              }
          },
          Ce,
          null,
          [[0, 21]]
        );
      }
      function Ye() {
        return we.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ae.d)(v, Je);
              case 2:
              case "end":
                return e.stop();
            }
        }, De);
      }
      var Ne = Ye,
        We = we.a.mark(Ke);
      function Ke() {
        return we.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ae.a)([Ne()]);
              case 2:
              case "end":
                return e.stop();
            }
        }, We);
      }
      !(function(e) {
        if ("serviceWorker" in navigator) {
          if (
            new URL("", window.location.href).origin !== window.location.origin
          )
            return;
          window.addEventListener("load", function() {
            var t = "".concat("", "/service-worker.js");
            G
              ? ((function(e, t) {
                  fetch(e)
                    .then(function(n) {
                      var r = n.headers.get("content-type");
                      404 === n.status ||
                      (null != r && -1 === r.indexOf("javascript"))
                        ? navigator.serviceWorker.ready.then(function(e) {
                            e.unregister().then(function() {
                              window.location.reload();
                            });
                          })
                        : C(e, t);
                    })
                    .catch(function() {
                      console.log(
                        "No internet connection found. App is running in offline mode."
                      );
                    });
                })(t, e),
                navigator.serviceWorker.ready.then(function() {
                  console.log(
                    "This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA"
                  );
                }))
              : C(t, e);
          });
        }
      })();
      var ze = (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = U ? Object(h.c)({ initialEntries: [e] }) : Object(h.a)(),
            n = Object(b.a)(),
            r = [Object(f.routerMiddleware)(t), n],
            a = d.c.apply(void 0, [d.a.apply(void 0, r)].concat([])),
            c = U ? {} : window.__PRELOADED_STATE__;
          U || delete window.__PRELOADED_STATE__;
          var o = Object(d.d)(x, Object(p.fromJS)(c), a);
          return (o.runSaga = n.run), { store: o, history: t };
        })(),
        qe = ze.store,
        He = ze.history;
      qe.runSaga(Ke);
      var Ze = c.a.createElement(
          i.Provider,
          { store: qe },
          c.a.createElement(l.a, { history: He }, c.a.createElement(Ee, null))
        ),
        Be = document.querySelector("#root");
      !0 === Be.hasChildNodes()
        ? s.a.preloadReady().then(function() {
            Object(o.hydrate)(Ze, Be);
          })
        : Object(o.render)(Ze, Be);
    }
  },
  [[178, 4, 5]]
]);
//# sourceMappingURL=main.58a3cc2a.chunk.js.map
