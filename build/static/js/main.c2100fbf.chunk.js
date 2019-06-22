(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    178: function(e, t, n) {
      e.exports = n(404);
    },
    378: function(e, t, n) {},
    379: function(e, t, n) {},
    380: function(e, t, n) {},
    381: function(e, t, n) {},
    404: function(e, t, n) {
      "use strict";
      n.r(t);
      n(179);
      var r,
        a = n(3),
        c = n.n(a),
        o = n(71),
        i = n(45),
        u = n(78),
        s = n.n(u),
        l = n(169),
        d = n(408),
        f = n(72),
        h = n(170),
        p = n(18),
        b = n(176),
        g = n(33),
        O = n(62),
        m = n(172),
        v = "".concat("APP/", "SET_DATA"),
        j = "".concat("APP/", "FETCH_CATEGORY"),
        y = "".concat("APP/", "FETCHING_CATEGORY"),
        E = "".concat("APP/", "FETCH_CATEGORY_SUCCESS"),
        w = "".concat("APP/", "FETCH_CATEGORY_ERROR"),
        S = Object(g.fromJS)({}),
        k = Object(g.fromJS)({
          isFetching: !1,
          list: Object(g.fromJS)([]),
          error: null
        }),
        A = { home: "HomePage" },
        C = "".concat("LOADER/", "SHOW"),
        R = "".concat("LOADER/", "HIDE"),
        P = Object(g.fromJS)({ value: !1 }),
        L = Object(m.combineReducers)(
          ((r = {}),
          Object(O.a)(r, "app", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : S,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.data;
            switch (n) {
              case v:
                return e.merge(Object(g.fromJS)(r));
              default:
                return e;
            }
          }),
          Object(O.a)(r, "loader", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : P,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case C:
                return e.set("value", !0).set("message", t.data);
              case R:
                return e.set("value", !1).set("message", void 0);
              default:
                return e;
            }
          }),
          Object(O.a)(r, "home", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A,
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
          Object(O.a)(r, "category", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : k,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.data;
            switch (n) {
              case y:
                return e.set("isFetching", !0);
              case E:
                return e.set("isFetching", !1).set("list", Object(g.fromJS)(r));
              case w:
                return e.set("isFetching", !1).set("error", r);
              default:
                return e;
            }
          }),
          r)
        ),
        T = n(47),
        _ = n(96),
        D = n.n(_),
        F = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        x = function(e) {
          var t = localStorage.getItem(e);
          if (t) return JSON.parse(t);
        },
        U = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function J(e, t) {
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
      var N = n(407),
        G = n(28),
        H = n(29),
        W = n(31),
        I = n(30),
        Y = n(32),
        B = n(177),
        M = (n(379),
        (function(e) {
          function t() {
            return (
              Object(G.a)(this, t),
              Object(W.a)(this, Object(I.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "header",
                    { className: "header" },
                    "Header"
                  );
                }
              }
            ]),
            t
          );
        })(c.a.PureComponent)),
        q = function() {
          return { type: j };
        },
        z = function() {
          return { type: y };
        },
        V = function(e) {
          return { type: E, data: e };
        },
        $ = function(e) {
          return { type: w, data: e };
        },
        K = n(23),
        Q = Object(K.createStructuredSelector)({}),
        X = Object(i.connect)(Q, function(e) {
          return {
            setAppData: function(t) {
              return e(
                (function(e) {
                  return { type: v, data: e };
                })(t)
              );
            }
          };
        })(M),
        Z = (n(380),
        (function(e) {
          function t() {
            return (
              Object(G.a)(this, t),
              Object(W.a)(this, Object(I.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = new Date().getFullYear(),
                    t = this.props.sidebar;
                  return c.a.createElement(
                    "footer",
                    { className: t ? "footer" : "footer-no-sidebar" },
                    "Copyright \xa9 ",
                    e,
                    " ",
                    c.a.createElement(
                      "span",
                      { className: "float-right" },
                      "Made with ",
                      c.a.createElement(
                        "span",
                        { role: "img", "aria-label": "heart" },
                        "\ud83d\udc96"
                      ),
                      " by ",
                      c.a.createElement(
                        "a",
                        { href: "http://abhijangir.me" },
                        "Abhishar Jangir."
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component)),
        ee = n(405),
        te = n(406),
        ne = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 425));
          },
          loading: function() {
            return null;
          }
        }),
        re = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 426));
          },
          loading: function() {
            return null;
          }
        }),
        ae = [
          { path: "/", component: ne, fetchRouteData: [q] },
          { path: "/not-found", component: re }
        ],
        ce = function() {
          return c.a.createElement(
            ee.a,
            null,
            ae.map(function(e, t) {
              return c.a.createElement(te.a, Object.assign({ key: t }, e));
            })
          );
        },
        oe = n(94),
        ie = (function(e) {
          function t() {
            return (
              Object(G.a)(this, t),
              Object(W.a)(this, Object(I.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(H.a)(t, [
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
        se = (n(381),
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
        de = Object(K.createStructuredSelector)({
          value: Object(K.createSelector)(le, function(e) {
            return e.get("value");
          }),
          message: Object(K.createSelector)(le, function(e) {
            return e.get("message");
          })
        }),
        fe = Object(i.connect)(de, null)(se),
        he = (function(e) {
          function t(e) {
            var n;
            return (
              Object(G.a)(this, t),
              ((n = Object(W.a)(this, Object(I.a)(t).call(this, e))).state = {
                hasError: !1
              }),
              n
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(H.a)(
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
        pe = (function(e) {
          function t() {
            return (
              Object(G.a)(this, t),
              Object(W.a)(this, Object(I.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(H.a)(t, [
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
                  var e = this.props,
                    t = (e.categoryIsFetching, e.categoryList);
                  e.fetchCategory;
                  return c.a.createElement(
                    he,
                    null,
                    c.a.createElement(
                      ue,
                      null,
                      c.a.createElement(
                        "div",
                        { id: "app" },
                        c.a.createElement(B.a, null),
                        c.a.createElement(X, null),
                        c.a.createElement(
                          "div",
                          { id: "content", className: "content" },
                          c.a.createElement(
                            "div",
                            { className: "main" },
                            c.a.createElement(ce, null)
                          ),
                          t.length,
                          c.a.createElement(fe, null),
                          c.a.createElement(Z, null)
                        )
                      )
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
          if (void 0 !== typeof Storage && !F)
            for (var n = Object.keys(localStorage), r = 0; r < n.length; r++)
              t[n[r]] = x(n[r]);
          return (function(n) {
            function r() {
              return (
                Object(G.a)(this, r),
                Object(W.a)(this, Object(I.a)(r).apply(this, arguments))
              );
            }
            return (
              Object(Y.a)(r, n),
              Object(H.a)(r, [
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
        Oe = Object(K.createSelector)(ge, function(e) {
          return e.get("isFetching");
        }),
        me = Object(K.createSelector)(ge, function(e) {
          return e && e.get("list").toJS();
        }),
        ve = Object(K.createSelector)(ge, function(e) {
          return e.get("error");
        }),
        je = Object(K.createStructuredSelector)({
          categoryIsFetching: Oe,
          categoryList: me,
          categoryError: ve
        }),
        ye = be(
          Object(N.a)(
            Object(i.connect)(je, function(e) {
              return {
                fetchCategory: function() {
                  return e(q());
                }
              };
            })(pe)
          )
        ),
        Ee = n(52),
        we = n.n(Ee),
        Se = n(35),
        ke = n(175),
        Ae = n.n(ke),
        Ce = { PROD: "prod", STAG: "stag", LOCAL: "local" },
        Re = { URL: "http://18.224.169.160:8080/", env: "Staging" },
        Pe = {},
        Le = {};
      switch ("prod") {
        case Ce.PROD:
          Le = Object(T.a)(
            {},
            { URL: "http://18.224.169.160:8080/", env: "Production" },
            Pe
          );
          break;
        case Ce.STAG:
          Le = Object(T.a)({}, Re, Pe);
          break;
        case Ce.LOCAL:
          Le = Object(T.a)(
            {},
            { URL: "http://192.168.30.83:5000/", env: "Local" },
            Pe
          );
          break;
        default:
          Le = Object(T.a)({}, Re, Pe);
      }
      var Te = Le,
        _e = (function(e) {
          var t = {
              baseURL: e || Te.BASE_URL,
              paramsSerializer: function(e) {
                return D.a.stringify(e);
              }
            },
            n = Ae.a.create(t);
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
        })(Te.URL),
        De = {
          login: "signin",
          logout: "signout",
          blogs: "stories/filter",
          deleteBlog: "story/delete",
          addBlog: "story/add",
          categories: "categories",
          blogDetails: "story"
        },
        Fe = function(e) {
          return e && De[e] ? De[e] : "";
        },
        xe = function(e) {
          var t = e.method,
            n = void 0 === t ? "GET" : t,
            r = e.url,
            a = e.data,
            c = e.appendUrl,
            o = void 0 === c ? "" : c;
          return (
            (r = Fe(r) + o),
            new Promise(function(e, t) {
              _e({ url: r, method: n, data: a })
                .then(function(t) {
                  e(Object(T.a)({}, t));
                })
                .catch(function(e) {
                  t(e);
                });
            })
          );
        },
        Ue = we.a.mark(Ne),
        Je = we.a.mark(Ge);
      function Ne() {
        var e, t, n, r, a;
        return we.a.wrap(
          function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.prev = 0), (c.next = 3), Object(Se.c)(z());
                case 3:
                  return (
                    (c.next = 5),
                    Object(Se.b)(xe, { method: "GET", url: "categories" })
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
                  return (c.next = 13), Object(Se.c)(V(a));
                case 13:
                  return c.abrupt("return", c.sent);
                case 16:
                  return (c.next = 18), Object(Se.c)($(r));
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
                    Object(Se.c)($(c.t0))
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
      function Ge() {
        return we.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Se.d)(j, Ne);
              case 2:
              case "end":
                return e.stop();
            }
        }, Je);
      }
      var He = Ge,
        We = we.a.mark(Ie);
      function Ie() {
        return we.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Se.a)([He()]);
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
            U
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
                        : J(e, t);
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
              : J(t, e);
          });
        }
      })();
      var Ye = (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = F ? Object(p.c)({ initialEntries: [e] }) : Object(p.a)(),
            n = Object(b.a)(),
            r = [Object(h.routerMiddleware)(t), n],
            a = f.c.apply(void 0, [f.a.apply(void 0, r)].concat([])),
            c = F ? {} : window.__PRELOADED_STATE__;
          F || delete window.__PRELOADED_STATE__;
          var o = Object(f.d)(L, Object(g.fromJS)(c), a);
          return (o.runSaga = n.run), { store: o, history: t };
        })(),
        Be = Ye.store,
        Me = Ye.history;
      Be.runSaga(Ie);
      var qe = c.a.createElement(
          i.Provider,
          { store: Be },
          c.a.createElement(
            d.a,
            { history: Me },
            c.a.createElement(
              l.Frontload,
              { noServerRender: !0 },
              c.a.createElement(ye, null)
            )
          )
        ),
        ze = document.querySelector("#root");
      !0 === ze.hasChildNodes()
        ? s.a.preloadReady().then(function() {
            Object(o.hydrate)(qe, ze);
          })
        : Object(o.render)(qe, ze);
    }
  },
  [[178, 4, 5]]
]);
//# sourceMappingURL=main.c2100fbf.chunk.js.map
