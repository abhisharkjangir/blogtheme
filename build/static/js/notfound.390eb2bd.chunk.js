(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    409: function(t, e, n) {
      "use strict";
      var o = n(410);
      e.a = {
        default: {
          title: "Meuzic",
          description: "www.meuzic.com",
          image: o.a,
          twitter: "",
          sep: " | ",
          siteURL: "",
          keywords: "",
          facebookAppId: "XXXXXXXXX",
          updated: new Date().toDateString(),
          published: new Date().toDateString(),
          contentType: "website"
        },
        home: { id: "home", title: "Dashboard", description: "Dashboard" },
        login: { id: "login", title: "Login", description: "Login to Meuzic" },
        signup: {
          id: "signup",
          title: "Signup",
          description: "Signup on Meuzic"
        },
        forgetpassword: {
          id: "forgotpassword",
          title: "Forget Password",
          description: "Forget Password"
        },
        notfound: {
          id: "notfound",
          title: "Oops! 404",
          description: "This is not the web page you are looking for."
        }
      };
    },
    410: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      var o = "https://s3.ap-south-1.amazonaws.com/imabhi.in/",
        a = ("".concat(o, "abhishar.png"),
        "".concat(o, "angular.svg"),
        "".concat(o, "bgimg1.png"),
        "".concat(o, "bgimg2.png"),
        "".concat(o, "css-3.svg"),
        "".concat(o, "daublelogo.png"),
        "".concat(o, "DOCUMENTED_CODE.png"),
        "".concat(o, "facebook.svg"),
        "".concat(o, "github-icon.svg"),
        "".concat(o, "html-5.svg"),
        "".concat(o, "instagram-icon.svg"),
        "".concat(o, "javascript.svg"),
        "https://s3.ap-south-1.amazonaws.com/meuzicassets/meuzic-horizontal-transparent.png");
      "".concat(o, "map.png"),
        "".concat(o, "medzinlogo.png"),
        "".concat(o, "mmlogo.png"),
        "".concat(o, "pitlogo.png"),
        "".concat(o, "pro-dauble.png"),
        "".concat(o, "pro-medzin.png"),
        "".concat(o, "pro-mm.png"),
        "".concat(o, "pro-pit.png"),
        "".concat(o, "pro-tt.png"),
        "".concat(o, "react.svg"),
        "".concat(o, "redux.svg"),
        "".concat(o, "RESPONSIVE_DESIGN.png"),
        "".concat(o, "sass.svg"),
        "".concat(o, "THIRD_PARTY%20INTEGRATI_N.png"),
        "".concat(o, "ttlogo.png"),
        "".concat(o, "twitter.svg"),
        "".concat(o, "UI_FRAMEWOKS.png");
    },
    411: function(t, e, n) {
      "use strict";
      var o = n(414),
        a = n(28),
        r = n(29),
        c = n(31),
        i = n(30),
        s = n(32),
        p = n(3),
        l = n.n(p),
        u = n(94),
        g = n(412),
        d = n.n(g),
        f = n(409),
        m = f.a.default.siteURL,
        h = f.a.default.title,
        b = f.a.default.description,
        y = f.a.default.keywords,
        w = f.a.default.image,
        v = f.a.default.twitter,
        O = f.a.default.sep,
        E = f.a.default.updated,
        j = f.a.default.published,
        k = f.a.default.contentType,
        T = (function(t) {
          function e() {
            return (
              Object(a.a)(this, e),
              Object(c.a)(this, Object(i.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(e, t),
            Object(r.a)(e, [
              {
                key: "getMetaTags",
                value: function(t, e) {
                  var n = t.title,
                    o = t.description,
                    a = t.image,
                    r = t.contentType,
                    c = t.twitter,
                    i = t.noCrawl,
                    s = t.published,
                    p = t.updated,
                    l = t.category,
                    u = t.tags,
                    g = t.keywords,
                    d = n ? (n + O + h).substring(0, 60) : h,
                    f = o ? o.substring(0, 155) : b,
                    T = a ? "".concat(m).concat(a) : w,
                    R = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: f },
                      { itemprop: "image", content: T },
                      { name: "description", content: f },
                      { name: "keywords", content: g || y },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: v },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: f },
                      { name: "twitter:creator", content: c || v },
                      { name: "twitter:image:src", content: T },
                      { property: "og:title", content: d },
                      { property: "og:type", content: r || k },
                      { property: "og:url", content: m + e },
                      { property: "og:image", content: T },
                      { property: "og:description", content: f },
                      { property: "og:site_name", content: h },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    i
                      ? R.push({ name: "robots", content: "noindex, nofollow" })
                      : R.push({ name: "robots", content: "index, follow" }),
                    s &&
                      R.push({
                        name: "article:published_time",
                        content: s || j
                      }),
                    p &&
                      R.push({
                        name: "article:modified_time",
                        content: p || E
                      }),
                    l && R.push({ name: "article:section", content: l }),
                    u && R.push({ name: "article:tag", content: u }),
                    R
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.props,
                    e = t.children,
                    n = t.id,
                    a = t.className,
                    r = Object(o.a)(t, ["children", "id", "className"]);
                  return l.a.createElement(
                    "div",
                    { id: n, className: a },
                    l.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          r.schema || "WebPage"
                        )
                      },
                      title: r.title ? r.title + O + h : h,
                      link: [
                        {
                          rel: "canonical",
                          href: m + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(r, this.props.location.pathname)
                    }),
                    e
                  );
                }
              }
            ]),
            e
          );
        })(p.Component);
      e.a = Object(u.a)(T);
    },
    423: function(t, e, n) {},
    424: function(t, e, n) {},
    426: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n(45),
        a = n(3),
        r = n.n(a),
        c = n(411),
        i = (n(423), n(409)),
        s = n(1),
        p = n.n(s),
        l = n(11),
        u = n.n(l),
        g = n(18),
        d =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
          };
      function f(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" !== typeof e && "function" !== typeof e) ? t : e;
      }
      var m = function(t) {
          return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
        },
        h = (function(t) {
          function e() {
            var n, o;
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            for (var a = arguments.length, r = Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              (n = o = f(this, t.call.apply(t, [this].concat(r)))),
              (o.handleClick = function(t) {
                if (
                  (o.props.onClick && o.props.onClick(t),
                  !t.defaultPrevented &&
                    0 === t.button &&
                    !o.props.target &&
                    !m(t))
                ) {
                  t.preventDefault();
                  var e = o.context.router.history,
                    n = o.props,
                    a = n.replace,
                    r = n.to;
                  a ? e.replace(r) : e.push(r);
                }
              }),
              f(o, n)
            );
          }
          return (
            (function(t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, t),
            (e.prototype.render = function() {
              var t = this.props,
                e = (t.replace, t.to),
                n = t.innerRef,
                o = (function(t, e) {
                  var n = {};
                  for (var o in t)
                    e.indexOf(o) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(t, o) &&
                        (n[o] = t[o]));
                  return n;
                })(t, ["replace", "to", "innerRef"]);
              u()(
                this.context.router,
                "You should not use <Link> outside a <Router>"
              ),
                u()(void 0 !== e, 'You must specify the "to" property');
              var a = this.context.router.history,
                c =
                  "string" === typeof e
                    ? Object(g.b)(e, null, null, a.location)
                    : e,
                i = a.createHref(c);
              return r.a.createElement(
                "a",
                d({}, o, { onClick: this.handleClick, href: i, ref: n })
              );
            }),
            e
          );
        })(r.a.Component);
      (h.propTypes = {
        onClick: p.a.func,
        target: p.a.string,
        replace: p.a.bool,
        to: p.a.oneOfType([p.a.string, p.a.object]).isRequired,
        innerRef: p.a.oneOfType([p.a.string, p.a.func])
      }),
        (h.defaultProps = { replace: !1 }),
        (h.contextTypes = {
          router: p.a.shape({
            history: p.a.shape({
              push: p.a.func.isRequired,
              replace: p.a.func.isRequired,
              createHref: p.a.func.isRequired
            }).isRequired
          }).isRequired
        });
      var b = h,
        y = (n(424),
        function(t) {
          var e = t.label,
            n = t.to,
            o = t.className;
          return r.a.createElement(b, { to: n, className: o }, e);
        }),
        w = n(410),
        v = n(23),
        O = Object(v.createStructuredSelector)({});
      e.default = Object(o.connect)(O, null)(function(t) {
        var e = t.isLoggedIn;
        return r.a.createElement(
          c.a,
          Object.assign({}, i.a.notfound, { noCrawl: !0 }),
          r.a.createElement(
            "div",
            { className: e ? "notfound-page logged-in" : "notfound-page" },
            r.a.createElement(
              "div",
              { className: "logo" },
              r.a.createElement("img", { src: w.a, alt: "logo" })
            ),
            r.a.createElement(
              "div",
              { className: "box" },
              r.a.createElement("h2", null, "404"),
              r.a.createElement(
                "p",
                null,
                "This is not the web page you are looking for."
              )
            ),
            r.a.createElement(y, {
              to: e ? "/" : "/login",
              label: e ? "GO BACK TO HOME" : "GO BACK TO LOGIN"
            })
          )
        );
      });
    }
  }
]);
//# sourceMappingURL=notfound.390eb2bd.chunk.js.map
