(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    410: function(t, e, n) {
      "use strict";
      var a = "https://s3.ap-south-1.amazonaws.com/imabhi.in/";
      "".concat(a, "abhishar.png"),
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
        "".concat(a, "UI_FRAMEWOKS.png"),
        (e.a = {
          default: {
            title: "Blog Theme",
            description: "Bloging Website",
            image:
              "https://s3.ap-south-1.amazonaws.com/meuzicassets/meuzic-horizontal-transparent.png",
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
        });
    },
    411: function(t, e, n) {
      "use strict";
      var a = n(414),
        o = n(27),
        c = n(28),
        i = n(30),
        r = n(29),
        s = n(31),
        p = n(2),
        g = n.n(p),
        u = n(94),
        l = n(412),
        m = n.n(l),
        d = n(410),
        h = d.a.default.siteURL,
        b = d.a.default.title,
        f = d.a.default.description,
        w = d.a.default.keywords,
        v = d.a.default.image,
        y = d.a.default.twitter,
        O = d.a.default.sep,
        X = d.a.default.updated,
        j = d.a.default.published,
        k = d.a.default.contentType,
        T = (function(t) {
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
                    g = t.category,
                    u = t.tags,
                    l = t.keywords,
                    m = n ? (n + O + b).substring(0, 60) : b,
                    d = a ? a.substring(0, 155) : f,
                    T = o ? "".concat(h).concat(o) : v,
                    E = [
                      { itemprop: "name", content: m },
                      { itemprop: "description", content: d },
                      { itemprop: "image", content: T },
                      { name: "description", content: d },
                      { name: "keywords", content: l || w },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: m },
                      { name: "twitter:description", content: d },
                      { name: "twitter:creator", content: i || y },
                      { name: "twitter:image:src", content: T },
                      { property: "og:title", content: m },
                      { property: "og:type", content: c || k },
                      { property: "og:url", content: h + e },
                      { property: "og:image", content: T },
                      { property: "og:description", content: d },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    r
                      ? E.push({ name: "robots", content: "noindex, nofollow" })
                      : E.push({ name: "robots", content: "index, follow" }),
                    s &&
                      E.push({
                        name: "article:published_time",
                        content: s || j
                      }),
                    p &&
                      E.push({
                        name: "article:modified_time",
                        content: p || X
                      }),
                    g && E.push({ name: "article:section", content: g }),
                    u && E.push({ name: "article:tag", content: u }),
                    E
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
                  return g.a.createElement(
                    "div",
                    { id: n, className: o },
                    g.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          c.schema || "WebPage"
                        )
                      },
                      title: c.title ? c.title + O + b : b,
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
        E = Object(u.a)(T);
      n.d(e, "a", function() {
        return E;
      });
    },
    415: function(t, e, n) {},
    426: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n(61),
        o = n(34),
        c = n(27),
        i = n(28),
        r = n(30),
        s = n(29),
        p = n(31),
        g = n(2),
        u = n.n(g),
        l = (n(415), n(411)),
        m = n(410),
        d = (function(t) {
          function e(t) {
            var n;
            return (
              Object(c.a)(this, e),
              ((n = Object(r.a)(
                this,
                Object(s.a)(e).call(this, t)
              )).state = {}),
              n
            );
          }
          return (
            Object(p.a)(e, t),
            Object(i.a)(e, [
              {
                key: "render",
                value: function() {
                  return u.a.createElement(l.a, m.a.home, "Home Page");
                }
              }
            ]),
            e
          );
        })(u.a.PureComponent),
        h = Object(o.createStructuredSelector)({}),
        b = Object(a.connect)(h, function(t) {
          return {};
        })(d);
      n.d(e, "default", function() {
        return b;
      });
    }
  }
]);
//# sourceMappingURL=home.dd6115c0.chunk.js.map
