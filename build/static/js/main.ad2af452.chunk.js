(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    165: function(e, t, n) {
      "use strict";
      var r = n(22),
        a = n(23),
        c = n(25),
        o = n(24),
        i = n(26),
        u = n(2),
        s = n.n(u),
        l = (function(e) {
          function t(e) {
            var n;
            return (
              Object(r.a)(this, t),
              ((n = Object(c.a)(this, Object(o.a)(t).call(this, e))).state = {
                hasError: !1
              }),
              n
            );
          }
          return (
            Object(i.a)(t, e),
            Object(a.a)(
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
                      ? s.a.createElement("h1", null, "Something went wrong.")
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
        })(u.Component);
      t.a = l;
    },
    177: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAABoCAQAAAD1esz4AAAACXZwQWcAAADLAAAAaADD2bLRAAAFKklEQVR42u3bz4vcZBzH8fljsrZiFSQHwYvk3kOUPXgKUlAKkoqHFsGg2INdRteTl1BRPJR4UFpRxsMKIhjEc0DRSouDeNBLUEQE4e0hv54kT2bj9hk7LR8+l5knM7M731eeX8nugoWye1EJxKKIRSyKWMSiiEURi1gUsYhFEYtYFLEoYhGLIhaxKGIRiyIWRSxiUcQiFkUsJ8kPXOUS53iGF0n5FrHsAMk5vEGe5GvEchfzGWdGKB4eexwglruULzhlRalyiFjuQn7G34Di8QDf8yuX2WefC3zEH4hli7nJh3wKi2c3onh4vMznxjOfDxDLVnLEWTw83uKrY1E8znJ70HIFsTjOPyRteT/m6Rksj/HbqO1txOI0V4ziZuzNYNnj1qjtFN8hFmfJexDPz0DxeJgbltbzYnGX/UHB57A8zlOW1tP8jlic5NYshvEgZm8/EoubZCdimcp7YnGTA6csh2Jxk1ecsrwjFjd50ynLl2Jxk08copzhL7G4SclpZywXtW9xlwuOUB7ktljc5aeZW8jj8q6uibmeX/buGOV1XUF2n+s8dAckj3BN91u2kx85by35E7zBNTIyrvIq4ehm8qNc5hfdndzuzeL3eYmY54i5xCE3uDkq+J8cccALXOQ1rvINf99j9/Xvi78Tu/+iEohFEYtYFLGIRRGLIhaxKGIRiyIWsZwwa1IjK9YMj2W9q7jV67pHKaVxfFW35ZifPH5/yppV/RPNO//jT1xTTF5FLupPKLEfzUjJet+oSd7+ljvKko/ugURtIfL6ufn66jXdI6/HFtRtKeYnd4VZt2056/qfirqjSzw8kgFjZC3eioCQlJQEn2RAUxARsKyPRj2aFJ+YlJQYf3DS7DBLV+p5LCFdqTwry3JQ+IqFRYqHR0xTyoqpnMGS4RvneklCaLwvq38DE6I51RLC3mkSDk6DnWKJ2tLExhk+j6XrDckES8CwN3l1UUPjcYSH1xvUplgKvNHQFre8a/zRpzSEKcGAvSRw2GO2xNIVN57J4re9oWyfmyy+UeyV0ZIb/TGgJLP8rCmW2HKGr9vTI9lw/vuDmbLqW8G9wFLSlH4OyxIPv14CNM9NloiwHahiPEIig6UZ1pb4g3lmE4tnnayj+qwf9xXzu9raPWeT/xZZmuGkYA5L0faGqvzpiKVqKSnrI32W0vh3cNtgMmYpJoqbEjN9dNPyIXI2jP0PLPksloaj4RmzNBwNT5+lWyiEzCtlPskS0T+aGUv/aolxT7MEdQHnsaT1q6rBbMxSDV4BQT2YDVmaib8belJjYTAu5RrPulNZktA/2rFU03o2QR9aZpydY8nb1dN6sI7qtzQsZW8hbGPpFs4rK8uwZTPL1OwRbphbqv5QWEFLy7pu51gKYy3V9Juui8fGhq/rN82iuphgYeHXazAbwrhlTV6ntLIklra8XYktLUej9vuklkXFzq7Egrqzx4NxPm13/tVQYO45OpaV8R47y9LYVh7Pctw0XTJc6JaEbcFLy969OZobG8vuNMx3laWf2OjqycQVAJOl6g3pBpai7U0uWKpidtfO8sFevcAnbhfbBZGxs896pBm+s3lliywByag8OUndT0KWxs7CZFm2o7adhUXY9sD/ytI/KfJ2L19d7YoIGE/ZJSk+IREBweDiZ05cv9Mndny5UhfR656QT1w/buao9eTWMt/C3zeLRLfBFLGIRRGLWBSxKGIRiyIWsShiEYsiFkUsYlHEIhZFLGJRxKKIRSyKWMSiiEVhweJf2dROPUsirO4AAAAASUVORK5CYII=";
    },
    183: function(e, t, n) {
      e.exports = n(411);
    },
    383: function(e, t, n) {},
    384: function(e, t, n) {},
    385: function(e, t, n) {},
    386: function(e, t, n) {},
    387: function(e, t, n) {},
    388: function(e, t, n) {},
    411: function(e, t, n) {
      "use strict";
      n.r(t);
      n(184);
      var r,
        a = n(2),
        c = n.n(a),
        o = n(73),
        i = n(55),
        u = n(83),
        s = n.n(u),
        l = n(416),
        d = n(76),
        f = n(174),
        h = n(20),
        g = n(181),
        b = n(21),
        m = n(54),
        p = n(176),
        j = n(9),
        v = Object(b.fromJS)({}),
        O = Object(b.fromJS)({
          isFetching: !1,
          list: Object(b.fromJS)([]),
          error: null
        }),
        E = Object(b.fromJS)({
          isFetching: !1,
          list: Object(b.fromJS)([]),
          error: null
        }),
        y = { home: "HomePage" },
        w = "".concat("LOADER/", "SHOW"),
        S = "".concat("LOADER/", "HIDE"),
        A = Object(b.fromJS)({ value: !1 }),
        R = Object(p.combineReducers)(
          ((r = {}),
          Object(m.a)(r, j.a, function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : v,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.data;
            switch (n) {
              case j.k:
                return e.merge(Object(b.fromJS)(r));
              default:
                return e;
            }
          }),
          Object(m.a)(r, "loader", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case w:
                return e.set("value", !0).set("message", t.data);
              case S:
                return e.set("value", !1).set("message", void 0);
              default:
                return e;
            }
          }),
          Object(m.a)(r, "home", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : y,
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
          Object(m.a)(r, j.b, function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : O,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.data;
            switch (n) {
              case j.c:
                return e.set("isFetching", !0);
              case j.g:
                return e.set("isFetching", !1).set("list", Object(b.fromJS)(r));
              case j.f:
                return e.set("isFetching", !1).set("error", r);
              default:
                return e;
            }
          }),
          Object(m.a)(r, j.l, function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : E,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.data;
            switch (n) {
              case j.d:
                return e.set("isFetching", !0);
              case j.j:
                return e.set("isFetching", !1).set("list", Object(b.fromJS)(r));
              case j.i:
                return e.set("isFetching", !1).set("error", r);
              default:
                return e;
            }
          }),
          r)
        ),
        k = n(65),
        L = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function T(e, t) {
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
      n(381), n(382), n(383);
      var x = n(415),
        F = n(27),
        P = n(22),
        N = n(23),
        C = n(25),
        G = n(24),
        I = n(26),
        U = n(182),
        D = n(412),
        J = (n(384), n(53)),
        Y = n(177),
        B = n.n(Y),
        W = (n(386),
        (function(e) {
          function t() {
            return (
              Object(P.a)(this, t),
              Object(C.a)(this, Object(G.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(I.a)(t, e),
            Object(N.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { className: "typehead-container" },
                    c.a.createElement("input", {
                      className: "typehead",
                      placeholder: "Search Blog"
                    })
                  );
                }
              }
            ]),
            t
          );
        })(c.a.PureComponent)),
        K = [
          { name: "Home", to: "/" },
          { name: "Categories", to: "#" },
          { name: "Trending", to: "/trending" },
          { name: "Featured", to: "/featured" },
          { name: "Bookmarks", to: "/bookmarks" }
        ],
        H = (function(e) {
          function t() {
            var e, n;
            Object(P.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(C.a)(
                this,
                (e = Object(G.a)(t)).call.apply(e, [this].concat(a))
              )).renderLogo = function() {
                return c.a.createElement(
                  J.a,
                  { lg: 2 },
                  c.a.createElement("img", {
                    src: B.a,
                    width: "105px",
                    alt: "logo"
                  })
                );
              }),
              (n.renderTypehead = function() {
                return c.a.createElement(
                  J.a,
                  { lg: 5 },
                  c.a.createElement(W, null)
                );
              }),
              (n.renderNavigation = function() {
                return c.a.createElement(
                  J.a,
                  { lg: 5 },
                  c.a.createElement(
                    "div",
                    { className: "navigation" },
                    c.a.createElement(
                      "ul",
                      null,
                      K.map(function(e) {
                        return c.a.createElement(
                          "li",
                          { key: e.name },
                          c.a.createElement(D.a, { to: e.to }, e.name)
                        );
                      })
                    )
                  )
                );
              }),
              n
            );
          }
          return (
            Object(I.a)(t, e),
            Object(N.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "header",
                    { className: "header" },
                    c.a.createElement(
                      J.b,
                      null,
                      c.a.createElement(
                        J.c,
                        null,
                        this.renderLogo(),
                        this.renderNavigation(),
                        this.renderTypehead()
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(c.a.PureComponent),
        _ = (n(387),
        (function(e) {
          function t() {
            return (
              Object(P.a)(this, t),
              Object(C.a)(this, Object(G.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(I.a)(t, e),
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
                      J.b,
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
        z = n(413),
        q = n(414),
        Z = function() {
          return { type: j.e };
        },
        V = function() {
          return { type: j.c };
        },
        Q = function(e) {
          return { type: j.g, data: e };
        },
        M = function(e) {
          return { type: j.f, data: e };
        },
        X = function() {
          return { type: j.h };
        },
        $ = function() {
          return { type: j.d };
        },
        ee = function(e) {
          return { type: j.j, data: e };
        },
        te = function(e) {
          return { type: j.i, data: e };
        },
        ne = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(6), n.e(1)]).then(
              n.bind(null, 455)
            );
          },
          loading: function() {
            return null;
          }
        }),
        re = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 456));
          },
          loading: function() {
            return null;
          }
        }),
        ae = [
          { path: "/", component: ne, fetchRouteData: [Z, X], exact: !0 },
          { component: re }
        ],
        ce = function() {
          return c.a.createElement(
            z.a,
            null,
            ae.map(function(e, t) {
              return c.a.createElement(q.a, Object.assign({ key: t }, e));
            })
          );
        },
        oe = n(98),
        ie = (function(e) {
          function t() {
            return (
              Object(P.a)(this, t),
              Object(C.a)(this, Object(G.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(I.a)(t, e),
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
        se = (n(388),
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
        de = Object(F.createStructuredSelector)({
          value: Object(F.createSelector)(le, function(e) {
            return e.get("value");
          }),
          message: Object(F.createSelector)(le, function(e) {
            return e.get("message");
          })
        }),
        fe = Object(i.connect)(de, null)(se),
        he = n(165),
        ge = (function(e) {
          function t() {
            return (
              Object(P.a)(this, t),
              Object(C.a)(this, Object(G.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(I.a)(t, e),
            Object(N.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props,
                    t = e.categoryIsFetching,
                    n = e.categoryList,
                    r = e.fetchCategory,
                    a = e.fetchTrendingBlogs,
                    c = e.trendingBlogList,
                    o = e.trendingBlogsIsFetching;
                  t || 0 !== n.length || r(), o || 0 !== c.length || a();
                }
              },
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    he.a,
                    null,
                    c.a.createElement(
                      ue,
                      null,
                      c.a.createElement(
                        "div",
                        { id: "app" },
                        c.a.createElement(U.a, null),
                        c.a.createElement(H, null),
                        c.a.createElement(
                          "div",
                          { id: "content", className: "content" },
                          c.a.createElement(ce, null)
                        ),
                        c.a.createElement(_, null)
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
        be = function(e) {
          var t = {};
          if (void 0 !== typeof Storage && !k.f)
            for (var n = Object.keys(localStorage), r = 0; r < n.length; r++)
              t[n[r]] = Object(k.d)(n[r]);
          return (function(n) {
            function r() {
              return (
                Object(P.a)(this, r),
                Object(C.a)(this, Object(G.a)(r).apply(this, arguments))
              );
            }
            return (
              Object(I.a)(r, n),
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
        me = n(66),
        pe = Object(F.createStructuredSelector)({
          categoryIsFetching: me.b,
          categoryList: me.c,
          categoryError: me.a,
          trendingBlogsIsFetching: me.e,
          trendingBlogList: me.f,
          trendingBlogsError: me.d
        }),
        je = be(
          Object(x.a)(
            Object(i.connect)(pe, function(e) {
              return {
                fetchCategory: function() {
                  return e(Z());
                },
                fetchTrendingBlogs: function() {
                  return e(X());
                }
              };
            })(ge)
          )
        ),
        ve = n(41),
        Oe = n.n(ve),
        Ee = n(19),
        ye = n(48),
        we = n(180),
        Se = n.n(we),
        Ae = n(100),
        Re = n.n(Ae),
        ke = { PROD: "prod", STAG: "stag", LOCAL: "local" },
        Le = { URL: "http://api.abhijangir.me/", env: "Staging" },
        Te = {},
        xe = {};
      switch ("prod") {
        case ke.PROD:
          xe = Object(ye.a)(
            {},
            { URL: "http://api.abhijangir.me/", env: "Production" },
            Te
          );
          break;
        case ke.STAG:
          xe = Object(ye.a)({}, Le, Te);
          break;
        case ke.LOCAL:
          xe = Object(ye.a)(
            {},
            { URL: "http://192.168.30.83:5000/", env: "Local" },
            Te
          );
          break;
        default:
          xe = Object(ye.a)({}, Le, Te);
      }
      var Fe = xe,
        Pe = (function(e) {
          var t = {
              baseURL: e || Fe.BASE_URL,
              paramsSerializer: function(e) {
                return Re.a.stringify(e);
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
        Ne = {
          login: "signin",
          logout: "signout",
          blogs: "stories/filter",
          deleteBlog: "story/delete",
          addBlog: "story/add",
          categories: "categories",
          blogDetails: "story"
        },
        Ce = function(e) {
          return e && Ne[e] ? Ne[e] : "";
        },
        Ge = function(e) {
          var t = e.method,
            n = void 0 === t ? "GET" : t,
            r = e.url,
            a = e.data,
            c = e.appendUrl,
            o = void 0 === c ? "" : c;
          return (
            (r = Ce(r) + o),
            new Promise(function(e, t) {
              Pe({ url: r, method: n, data: a })
                .then(function(t) {
                  e(Object(ye.a)({}, t));
                })
                .catch(function(e) {
                  t(e);
                });
            })
          );
        },
        Ie = Oe.a.mark(Je),
        Ue = Oe.a.mark(Ye),
        De = Oe.a.mark(Be);
      function Je() {
        var e, t, n, r, a;
        return Oe.a.wrap(
          function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.prev = 0), (c.next = 3), Object(Ee.c)(V());
                case 3:
                  return (
                    (c.next = 5),
                    Object(Ee.b)(Ge, { method: "GET", url: "categories" })
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
                  return (c.next = 13), Object(Ee.c)(Q(a));
                case 13:
                  return c.abrupt("return", c.sent);
                case 16:
                  return (c.next = 18), Object(Ee.c)(M(r));
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
                    Object(Ee.c)(M(c.t0))
                  );
                case 25:
                  return c.abrupt("return", c.sent);
                case 26:
                case "end":
                  return c.stop();
              }
          },
          Ie,
          null,
          [[0, 21]]
        );
      }
      function Ye() {
        var e, t, n, r, a;
        return Oe.a.wrap(
          function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.prev = 0), (c.next = 3), Object(Ee.c)($());
                case 3:
                  return (
                    (c.next = 5),
                    Object(Ee.b)(Ge, {
                      method: "POST",
                      url: "blogs",
                      data: { isTrending: "1", offset: 0, limit: 10 }
                    })
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
                  return (c.next = 13), Object(Ee.c)(ee(a));
                case 13:
                  return c.abrupt("return", c.sent);
                case 16:
                  return (c.next = 18), Object(Ee.c)(te(r));
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
                    Object(Ee.c)(te(c.t0))
                  );
                case 25:
                  return c.abrupt("return", c.sent);
                case 26:
                case "end":
                  return c.stop();
              }
          },
          Ue,
          null,
          [[0, 21]]
        );
      }
      function Be() {
        return Oe.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ee.d)(j.e, Je);
              case 2:
                return (e.next = 4), Object(Ee.d)(j.h, Ye);
              case 4:
              case "end":
                return e.stop();
            }
        }, De);
      }
      var We = Be,
        Ke = Oe.a.mark(He);
      function He() {
        return Oe.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ee.a)([We()]);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ke);
      }
      !(function(e) {
        if ("serviceWorker" in navigator) {
          if (
            new URL("", window.location.href).origin !== window.location.origin
          )
            return;
          window.addEventListener("load", function() {
            var t = "".concat("", "/service-worker.js");
            L
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
                        : T(e, t);
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
              : T(t, e);
          });
        }
      })();
      var _e = (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = k.f ? Object(h.c)({ initialEntries: [e] }) : Object(h.a)(),
            n = Object(g.a)(),
            r = [Object(f.routerMiddleware)(t), n],
            a = d.c.apply(void 0, [d.a.apply(void 0, r)].concat([])),
            c = k.f ? {} : window.__PRELOADED_STATE__;
          k.f || delete window.__PRELOADED_STATE__;
          var o = Object(d.d)(R, Object(b.fromJS)(c), a);
          return (o.runSaga = n.run), { store: o, history: t };
        })(),
        ze = _e.store,
        qe = _e.history;
      ze.runSaga(He);
      var Ze = c.a.createElement(
          i.Provider,
          { store: ze },
          c.a.createElement(l.a, { history: qe }, c.a.createElement(je, null))
        ),
        Ve = document.querySelector("#root");
      !0 === Ve.hasChildNodes()
        ? s.a.preloadReady().then(function() {
            Object(o.hydrate)(Ze, Ve);
          })
        : Object(o.render)(Ze, Ve);
    },
    53: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return o;
        }),
        n.d(t, "a", function() {
          return i;
        });
      var r = n(2),
        a = n.n(r),
        c = (n(385),
        function(e) {
          var t = e.children,
            n = e.className;
          return a.a.createElement(
            "div",
            { className: "row ".concat(n || "") },
            t
          );
        }),
        o = function(e) {
          var t = e.children;
          return a.a.createElement("div", { className: "container" }, t);
        },
        i = function(e) {
          var t = e.children,
            n = e.xs,
            r = e.sm,
            c = e.md,
            o = e.lg,
            i = e.className,
            u = "";
          return (
            n && (u = "col-xs-".concat(n)),
            r && (u = "".concat(u, " col-sm-").concat(r)),
            c && (u = "".concat(u, " col-md-").concat(c)),
            o && (u = "".concat(u, " col-lg-").concat(o)),
            i && (u = "".concat(u, " ").concat(i)),
            a.a.createElement("div", { className: u }, t)
          );
        };
    },
    65: function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return r;
      }),
        n.d(t, "d", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "e", function() {
          return u;
        });
      n(48), n(100);
      var r = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        a = function(e) {
          var t = localStorage.getItem(e);
          if (t) return JSON.parse(t);
        },
        c = function(e, t) {
          if (t && e) {
            var n = t.category[0],
              r = e.filter(function(e) {
                return e._id.toString() === n;
              });
            return r.length > 0 ? r[0] : {};
          }
          return {};
        },
        o = function(e) {
          return e
            ? "blog/"
                .concat(
                  e.title
                    .toLowerCase()
                    .split(" ")
                    .join("-"),
                  "/"
                )
                .concat(e._id)
            : "";
        },
        i = function(e) {
          return e && e.name
            ? "category/"
                .concat(
                  e.name
                    .toLowerCase()
                    .split(" ")
                    .join("-"),
                  "/"
                )
                .concat(e._id)
            : "";
        },
        u = function(e) {
          return e ? "Calculate Date" : "Time is not Available";
        };
    },
    66: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "a", function() {
          return u;
        }),
        n.d(t, "e", function() {
          return l;
        }),
        n.d(t, "f", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return f;
        });
      var r = n(27),
        a = n(9),
        c = function(e) {
          return e.get(a.b);
        },
        o = Object(r.createSelector)(c, function(e) {
          return e.get("isFetching");
        }),
        i = Object(r.createSelector)(c, function(e) {
          return e && e.get("list").toJS();
        }),
        u = Object(r.createSelector)(c, function(e) {
          return e.get("error");
        }),
        s = function(e) {
          return e.get(a.l);
        },
        l = Object(r.createSelector)(s, function(e) {
          return e.get("isFetching");
        }),
        d = Object(r.createSelector)(s, function(e) {
          return e && e.get("list").toJS();
        }),
        f = Object(r.createSelector)(s, function(e) {
          return e.get("error");
        });
    },
    9: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "l", function() {
          return c;
        }),
        n.d(t, "k", function() {
          return o;
        }),
        n.d(t, "e", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return u;
        }),
        n.d(t, "g", function() {
          return s;
        }),
        n.d(t, "f", function() {
          return l;
        }),
        n.d(t, "h", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return f;
        }),
        n.d(t, "j", function() {
          return h;
        }),
        n.d(t, "i", function() {
          return g;
        });
      var r = "app",
        a = "category",
        c = "trending",
        o = "".concat("APP/", "SET_DATA"),
        i = "".concat("APP/", "FETCH_CATEGORY"),
        u = "".concat("APP/", "FETCHING_CATEGORY"),
        s = "".concat("APP/", "FETCH_CATEGORY_SUCCESS"),
        l = "".concat("APP/", "FETCH_CATEGORY_ERROR"),
        d = "".concat("APP/", "FETCH_TRENDING_BLOGS"),
        f = "".concat("APP/", "FETCHING_TRENDING_BLOGS"),
        h = "".concat("APP/", "FETCH_TRENDING_BLOGS_SUCCESS"),
        g = "".concat("APP/", "FETCH_TRENDING_BLOGS_ERROR");
    }
  },
  [[183, 4, 5]]
]);
//# sourceMappingURL=main.ad2af452.chunk.js.map
