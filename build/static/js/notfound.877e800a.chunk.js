(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    417: function(t, e, n) {
      "use strict";
      var a = n(418);
      e.a = {
        default: {
          title: "Blog Theme",
          description: "Bloging Website",
          image: a.a,
          twitter: "",
          sep: " : ",
          siteURL: "",
          keywords: "",
          facebookAppId: "XXXXXXXXX",
          updated: new Date().toDateString(),
          published: new Date().toDateString(),
          contentType: "website"
        },
        home: { id: "home", title: "Home", description: "Blog Theme" },
        notfound: {
          id: "notfound",
          title: "Oops! 404",
          description: "This is not the web page you are looking for."
        }
      };
    },
    418: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return o;
      });
      var a = "https://s3.ap-south-1.amazonaws.com/imabhi.in/",
        o = ("".concat(a, "abhishar.png"),
        "".concat(a, "angular.svg"),
        "".concat(a, "bgimg1.png"),
        "".concat(a, "bgimg2.png"),
        "".concat(a, "css-3.svg"),
        "".concat(a, "daublelogo.png"),
        "".concat(a, "DOCUMENTED_CODE.png"),
        "".concat(a, "facebook.svg"),
        "".concat(a, "github-icon.svg"),
        "".concat(a, "html-5.svg"),
        "".concat(a, "instagram-icon.svg"),
        "".concat(a, "javascript.svg"),
        "https://s3.ap-south-1.amazonaws.com/meuzicassets/meuzic-horizontal-transparent.png");
      "".concat(a, "map.png"),
        "".concat(a, "medzinlogo.png"),
        "".concat(a, "mmlogo.png"),
        "".concat(a, "pitlogo.png"),
        "".concat(a, "pro-dauble.png"),
        "".concat(a, "pro-medzin.png"),
        "".concat(a, "pro-mm.png"),
        "".concat(a, "pro-pit.png"),
        "".concat(a, "pro-tt.png"),
        "".concat(a, "react.svg"),
        "".concat(a, "redux.svg"),
        "".concat(a, "RESPONSIVE_DESIGN.png"),
        "".concat(a, "sass.svg"),
        "".concat(a, "THIRD_PARTY%20INTEGRATI_N.png"),
        "".concat(a, "ttlogo.png"),
        "".concat(a, "twitter.svg"),
        "".concat(a, "UI_FRAMEWOKS.png");
    },
    420: function(t, e, n) {
      "use strict";
      var a = n(424),
        o = n(22),
        c = n(23),
        i = n(25),
        r = n(24),
        s = n(26),
        p = n(2),
        l = n.n(p),
        u = n(98),
        g = n(421),
        m = n.n(g),
        d = n(417),
        h = d.a.default.siteURL,
        f = d.a.default.title,
        b = d.a.default.description,
        w = d.a.default.keywords,
        v = d.a.default.image,
        y = d.a.default.twitter,
        E = d.a.default.sep,
        O = d.a.default.updated,
        X = d.a.default.published,
        T = d.a.default.contentType,
        k = (function(t) {
          function e() {
            return (
              Object(o.a)(this, e),
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
                    a = t.description,
                    o = t.image,
                    c = t.contentType,
                    i = t.twitter,
                    r = t.noCrawl,
                    s = t.published,
                    p = t.updated,
                    l = t.category,
                    u = t.tags,
                    g = t.keywords,
                    m = n ? (n + E + f).substring(0, 60) : f,
                    d = a ? a.substring(0, 155) : b,
                    k = o ? "".concat(h).concat(o) : v,
                    N = [
                      { itemprop: "name", content: m },
                      { itemprop: "description", content: d },
                      { itemprop: "image", content: k },
                      { name: "description", content: d },
                      { name: "keywords", content: g || w },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: m },
                      { name: "twitter:description", content: d },
                      { name: "twitter:creator", content: i || y },
                      { name: "twitter:image:src", content: k },
                      { property: "og:title", content: m },
                      { property: "og:type", content: c || T },
                      { property: "og:url", content: h + e },
                      { property: "og:image", content: k },
                      { property: "og:description", content: d },
                      { property: "og:site_name", content: f },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    r
                      ? N.push({ name: "robots", content: "noindex, nofollow" })
                      : N.push({ name: "robots", content: "index, follow" }),
                    s &&
                      N.push({
                        name: "article:published_time",
                        content: s || X
                      }),
                    p &&
                      N.push({
                        name: "article:modified_time",
                        content: p || O
                      }),
                    l && N.push({ name: "article:section", content: l }),
                    u && N.push({ name: "article:tag", content: u }),
                    N
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.props,
                    e = t.children,
                    n = t.id,
                    o = t.className,
                    c = Object(a.a)(t, ["children", "id", "className"]);
                  return l.a.createElement(
                    "div",
                    { id: n, className: o },
                    l.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          c.schema || "WebPage"
                        )
                      },
                      title: c.title ? c.title + E + f : f,
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
        })(p.Component),
        N = Object(u.a)(k);
      n.d(e, "a", function() {
        return N;
      });
    },
    453: function(t, e, n) {},
    454: function(t, e, n) {},
    456: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n(55),
        o = n(2),
        c = n.n(o),
        i = n(420),
        r = (n(453), n(417)),
        s = n(412),
        p = (n(454),
        function(t) {
          var e = t.label,
            n = t.to,
            a = t.className;
          return c.a.createElement(s.a, { to: n, className: a }, e);
        }),
        l = n(27),
        u = Object(l.createStructuredSelector)({}),
        g = Object(a.connect)(u, null)(function() {
          return c.a.createElement(
            i.a,
            Object.assign({}, r.a.notfound, { noCrawl: !0 }),
            c.a.createElement(
              "div",
              { className: "notfound-page" },
              c.a.createElement(
                "div",
                { className: "box" },
                c.a.createElement("h2", null, "404"),
                c.a.createElement(
                  "p",
                  null,
                  "This is not the web page you are looking for."
                )
              ),
              c.a.createElement(p, { to: "/", label: "GO BACK TO HOME" })
            )
          );
        });
      n.d(e, "default", function() {
        return g;
      });
    }
  }
]);
//# sourceMappingURL=notfound.877e800a.chunk.js.map
