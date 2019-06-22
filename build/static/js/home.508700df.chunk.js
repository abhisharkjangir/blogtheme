(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
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
        c = n(29),
        i = n(31),
        r = n(30),
        s = n(32),
        p = n(3),
        g = n.n(p),
        u = n(94),
        d = n(412),
        l = n.n(d),
        m = n(409),
        h = m.a.default.siteURL,
        b = m.a.default.title,
        f = m.a.default.description,
        w = m.a.default.keywords,
        v = m.a.default.image,
        y = m.a.default.twitter,
        X = m.a.default.sep,
        O = m.a.default.updated,
        j = m.a.default.published,
        k = m.a.default.contentType,
        z = (function(t) {
          function e() {
            return (
              Object(a.a)(this, e),
              Object(i.a)(this, Object(r.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(e, t),
            Object(c.a)(e, [
              {
                key: "getMetaTags",
                value: function(t, e) {
                  var n = t.title,
                    o = t.description,
                    a = t.image,
                    c = t.contentType,
                    i = t.twitter,
                    r = t.noCrawl,
                    s = t.published,
                    p = t.updated,
                    g = t.category,
                    u = t.tags,
                    d = t.keywords,
                    l = n ? (n + X + b).substring(0, 60) : b,
                    m = o ? o.substring(0, 155) : f,
                    z = a ? "".concat(h).concat(a) : v,
                    D = [
                      { itemprop: "name", content: l },
                      { itemprop: "description", content: m },
                      { itemprop: "image", content: z },
                      { name: "description", content: m },
                      { name: "keywords", content: d || w },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: l },
                      { name: "twitter:description", content: m },
                      { name: "twitter:creator", content: i || y },
                      { name: "twitter:image:src", content: z },
                      { property: "og:title", content: l },
                      { property: "og:type", content: c || k },
                      { property: "og:url", content: h + e },
                      { property: "og:image", content: z },
                      { property: "og:description", content: m },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    r
                      ? D.push({ name: "robots", content: "noindex, nofollow" })
                      : D.push({ name: "robots", content: "index, follow" }),
                    s &&
                      D.push({
                        name: "article:published_time",
                        content: s || j
                      }),
                    p &&
                      D.push({
                        name: "article:modified_time",
                        content: p || O
                      }),
                    g && D.push({ name: "article:section", content: g }),
                    u && D.push({ name: "article:tag", content: u }),
                    D
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
                    c = Object(o.a)(t, ["children", "id", "className"]);
                  return g.a.createElement(
                    "div",
                    { id: n, className: a },
                    g.a.createElement(l.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          c.schema || "WebPage"
                        )
                      },
                      title: c.title ? c.title + X + b : b,
                      link: [
                        {
                          rel: "canonical",
                          href: h + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(c, this.props.location.pathname)
                    }),
                    e
                  );
                }
              }
            ]),
            e
          );
        })(p.Component);
      e.a = Object(u.a)(z);
    },
    415: function(t, e, n) {},
    425: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n(28),
        a = n(29),
        c = n(31),
        i = n(30),
        r = n(32),
        s = n(3),
        p = n.n(s),
        g = (n(415), n(411)),
        u = n(409),
        d = (function(t) {
          function e(t) {
            var n;
            return (
              Object(o.a)(this, e),
              ((n = Object(c.a)(
                this,
                Object(i.a)(e).call(this, t)
              )).state = {}),
              n
            );
          }
          return (
            Object(r.a)(e, t),
            Object(a.a)(e, [
              {
                key: "render",
                value: function() {
                  return p.a.createElement(g.a, u.a.home, "hi");
                }
              }
            ]),
            e
          );
        })(p.a.PureComponent);
      e.default = d;
    }
  }
]);
//# sourceMappingURL=home.508700df.chunk.js.map
