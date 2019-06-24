(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    417: function(e, t, a) {
      "use strict";
      var n = a(418);
      t.a = {
        default: {
          title: "Blog Theme",
          description: "Bloging Website",
          image: n.a,
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
    418: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return c;
      });
      var n = "https://s3.ap-south-1.amazonaws.com/imabhi.in/",
        c = ("".concat(n, "abhishar.png"),
        "".concat(n, "angular.svg"),
        "".concat(n, "bgimg1.png"),
        "".concat(n, "bgimg2.png"),
        "".concat(n, "css-3.svg"),
        "".concat(n, "daublelogo.png"),
        "".concat(n, "DOCUMENTED_CODE.png"),
        "".concat(n, "facebook.svg"),
        "".concat(n, "github-icon.svg"),
        "".concat(n, "html-5.svg"),
        "".concat(n, "instagram-icon.svg"),
        "".concat(n, "javascript.svg"),
        "https://s3.ap-south-1.amazonaws.com/meuzicassets/meuzic-horizontal-transparent.png");
      "".concat(n, "map.png"),
        "".concat(n, "medzinlogo.png"),
        "".concat(n, "mmlogo.png"),
        "".concat(n, "pitlogo.png"),
        "".concat(n, "pro-dauble.png"),
        "".concat(n, "pro-medzin.png"),
        "".concat(n, "pro-mm.png"),
        "".concat(n, "pro-pit.png"),
        "".concat(n, "pro-tt.png"),
        "".concat(n, "react.svg"),
        "".concat(n, "redux.svg"),
        "".concat(n, "RESPONSIVE_DESIGN.png"),
        "".concat(n, "sass.svg"),
        "".concat(n, "THIRD_PARTY%20INTEGRATI_N.png"),
        "".concat(n, "ttlogo.png"),
        "".concat(n, "twitter.svg"),
        "".concat(n, "UI_FRAMEWOKS.png");
    },
    420: function(e, t, a) {
      "use strict";
      var n = a(424),
        c = a(22),
        r = a(23),
        o = a(25),
        l = a(24),
        i = a(26),
        s = a(2),
        m = a.n(s),
        g = a(98),
        u = a(421),
        d = a.n(u),
        p = a(417),
        b = p.a.default.siteURL,
        h = p.a.default.title,
        E = p.a.default.description,
        f = p.a.default.keywords,
        v = p.a.default.image,
        N = p.a.default.twitter,
        y = p.a.default.sep,
        O = p.a.default.updated,
        j = p.a.default.published,
        w = p.a.default.contentType,
        S = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(o.a)(this, Object(l.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(r.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var a = e.title,
                    n = e.description,
                    c = e.image,
                    r = e.contentType,
                    o = e.twitter,
                    l = e.noCrawl,
                    i = e.published,
                    s = e.updated,
                    m = e.category,
                    g = e.tags,
                    u = e.keywords,
                    d = a ? (a + y + h).substring(0, 60) : h,
                    p = n ? n.substring(0, 155) : E,
                    S = c ? "".concat(b).concat(c) : v,
                    k = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: p },
                      { itemprop: "image", content: S },
                      { name: "description", content: p },
                      { name: "keywords", content: u || f },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: N },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: p },
                      { name: "twitter:creator", content: o || N },
                      { name: "twitter:image:src", content: S },
                      { property: "og:title", content: d },
                      { property: "og:type", content: r || w },
                      { property: "og:url", content: b + t },
                      { property: "og:image", content: S },
                      { property: "og:description", content: p },
                      { property: "og:site_name", content: h },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    l
                      ? k.push({ name: "robots", content: "noindex, nofollow" })
                      : k.push({ name: "robots", content: "index, follow" }),
                    i &&
                      k.push({
                        name: "article:published_time",
                        content: i || j
                      }),
                    s &&
                      k.push({
                        name: "article:modified_time",
                        content: s || O
                      }),
                    m && k.push({ name: "article:section", content: m }),
                    g && k.push({ name: "article:tag", content: g }),
                    k
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    a = e.id,
                    c = e.className,
                    r = Object(n.a)(e, ["children", "id", "className"]);
                  return m.a.createElement(
                    "div",
                    { id: a, className: c },
                    m.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          r.schema || "WebPage"
                        )
                      },
                      title: r.title ? r.title + y + h : h,
                      link: [
                        {
                          rel: "canonical",
                          href: b + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(r, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component),
        k = Object(g.a)(S);
      a.d(t, "a", function() {
        return k;
      });
    },
    425: function(e, t, a) {},
    433: function(e, t, a) {},
    450: function(e, t, a) {},
    451: function(e, t, a) {},
    452: function(e, t, a) {},
    455: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(55),
        c = a(27),
        r = a(22),
        o = a(23),
        l = a(25),
        i = a(24),
        s = a(26),
        m = a(2),
        g = a.n(m),
        u = (a(425), a(420)),
        d = a(53),
        p = a(417),
        b = a(412),
        h = a(165),
        E = (a(433),
        function(e) {
          var t = e.name,
            a = e.className;
          return g.a.createElement("i", {
            className: "icon-".concat(t, " ").concat(a || "")
          });
        }),
        f = a(434),
        v = a.n(f),
        N = {
          dots: !0,
          infinite: !1,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          lazyLoad: !0,
          autoplay: !0,
          arrows: !0
        },
        y = function(e) {
          var t = e.settings,
            a = e.children,
            n = e.merge,
            c = t || N;
          return g.a.createElement(v.a, Object.assign({}, c, n), " ", a, " ");
        },
        O = (a(450), a(65)),
        j = function(e) {
          var t = e.blog,
            a = e.categories,
            n = Object(O.b)(a, t);
          return g.a.createElement(
            "div",
            { className: "small-blog-card" },
            g.a.createElement("img", { src: t.imageSrc, alt: t.title }),
            g.a.createElement(
              "div",
              { className: "blog-detail" },
              g.a.createElement(
                b.a,
                { to: Object(O.c)(n), className: "text-muted fs-12" },
                n.name
              ),
              g.a.createElement("br", null),
              g.a.createElement(b.a, { to: Object(O.a)(t) }, t.title)
            )
          );
        },
        w = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++)
              c[o] = arguments[o];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(c))
              )).renderSmallTile = function(e) {
                var t = Object(O.b)(a.props.categoryList, e);
                return g.a.createElement(
                  "div",
                  { key: e._id, className: "blog-card" },
                  g.a.createElement("img", { src: e.imageSrc, alt: e.title }),
                  g.a.createElement(
                    "div",
                    { className: "blog-content" },
                    g.a.createElement(
                      b.a,
                      { to: Object(O.c)(t), className: "tag" },
                      t.name
                    ),
                    g.a.createElement(b.a, { to: Object(O.a)(e) }, e.title)
                  )
                );
              }),
              (a.renderBigTile = function(e) {
                var t = Object(O.b)(a.props.categoryList, e);
                return g.a.createElement(
                  "div",
                  { key: e._id, className: "blog-card full" },
                  g.a.createElement("img", { src: e.imageSrc, alt: e.title }),
                  g.a.createElement(
                    "div",
                    { className: "blog-content" },
                    g.a.createElement(
                      b.a,
                      { to: Object(O.c)(t), className: "tag" },
                      t.name
                    ),
                    g.a.createElement(b.a, { to: Object(O.a)(e) }, e.title),
                    g.a.createElement(
                      "div",
                      { className: "blog-detail" },
                      g.a.createElement("img", {
                        src:
                          "https://secure.gravatar.com/avatar/f88c13d62ba761a92211e266c22dbb1f?s=56&d=mm&r=g",
                        className: "mr-3",
                        alt: e.author
                      }),
                      e.author,
                      ", 5 Months ago",
                      g.a.createElement("span", {
                        className: "mr-1 ml-2 border-right"
                      }),
                      g.a.createElement(E, {
                        name: "bubble",
                        className: "mr-1 ml-2"
                      }),
                      " 96",
                      g.a.createElement("span", {
                        className: "mr-1 ml-2 border-right"
                      }),
                      g.a.createElement(E, {
                        name: "clock",
                        className: "mr-1 ml-1"
                      }),
                      " 3 min read"
                    )
                  )
                );
              }),
              (a.rednerSkeleton = function() {
                var e = [1, 2, 3, 4, 5];
                return g.a.createElement(
                  "div",
                  { className: "slider-grid-container" },
                  g.a.createElement(
                    d.c,
                    { className: "m-0" },
                    g.a.createElement(
                      d.a,
                      { className: "p-0", lg: 3 },
                      e &&
                        e.slice(0, 2).map(function(e) {
                          return g.a.createElement("div", {
                            key: e,
                            className: "blog-card"
                          });
                        })
                    ),
                    g.a.createElement(
                      d.a,
                      { className: "p-0", lg: 6 },
                      e &&
                        e.slice(2, 3).map(function(e) {
                          return g.a.createElement("div", {
                            key: e,
                            className: "blog-card full"
                          });
                        })
                    ),
                    g.a.createElement(
                      d.a,
                      { className: "p-0", lg: 3 },
                      e &&
                        e.slice(3, 5).map(function(e) {
                          return g.a.createElement("div", {
                            key: e,
                            className: "blog-card"
                          });
                        })
                    )
                  )
                );
              }),
              (a.renderBlogSlider = function() {
                var e = a.props,
                  t = e.trendingBlogList,
                  n = e.categoryList,
                  c = t.length;
                return g.a.createElement(
                  "div",
                  { className: "mt-4 mb-4 pl-1 pr-1" },
                  g.a.createElement(
                    y,
                    { merge: { dots: !1, slidesToShow: 3, autoplay: !0 } },
                    t &&
                      t.slice(5, c).map(function(e) {
                        return g.a.createElement(j, { blog: e, categories: n });
                      })
                  )
                );
              }),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.trendingBlogsIsFetching,
                    n = t.trendingBlogList;
                  return a && 0 === n.length
                    ? this.rednerSkeleton()
                    : g.a.createElement(
                        h.a,
                        null,
                        g.a.createElement(
                          "div",
                          { className: "slider-grid-container" },
                          g.a.createElement(
                            d.c,
                            { className: "m-0" },
                            g.a.createElement(
                              d.a,
                              { className: "p-0", lg: 3 },
                              n &&
                                n.slice(0, 2).map(function(t) {
                                  return e.renderSmallTile(t);
                                })
                            ),
                            g.a.createElement(
                              d.a,
                              { className: "p-0", lg: 6 },
                              n &&
                                n.slice(2, 3).map(function(t) {
                                  return e.renderBigTile(t);
                                })
                            ),
                            g.a.createElement(
                              d.a,
                              { className: "p-0", lg: 3 },
                              n &&
                                n.slice(3, 5).map(function(t) {
                                  return e.renderSmallTile(t);
                                })
                            )
                          ),
                          g.a.createElement(
                            d.c,
                            { className: "m-0" },
                            g.a.createElement(
                              d.a,
                              { lg: "12", className: "p-0" },
                              this.renderBlogSlider()
                            )
                          )
                        )
                      );
                }
              }
            ]),
            t
          );
        })(g.a.PureComponent),
        S = a(66),
        k = Object(c.createStructuredSelector)({
          categoryIsFetching: S.b,
          categoryList: S.c,
          categoryError: S.a,
          trendingBlogsIsFetching: S.e,
          trendingBlogList: S.f,
          trendingBlogsError: S.d
        }),
        T = Object(n.connect)(k, null)(w),
        B = (a(451),
        a(452),
        function(e) {
          var t = e.text;
          return g.a.createElement(
            "div",
            { className: "heading-wrapper" },
            g.a.createElement("h2", { className: "heading" }, t)
          );
        }),
        X = function(e) {
          var t = e.src,
            a = e.alt,
            n = e.className;
          return g.a.createElement("img", {
            src: t,
            alt: a,
            className: n || ""
          });
        },
        _ = (a(418),
        (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++)
              c[o] = arguments[o];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(c))
              )).renderSkeleton = function() {
                var e = [1, 2, 3, 4];
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(B, { text: "Today's Spotlight" }),
                  g.a.createElement(
                    y,
                    { merge: { dots: !1, slidesToShow: 3, slidesToScroll: 3 } },
                    e &&
                      e.map(function(e) {
                        return g.a.createElement("div", {
                          key: e,
                          className: "medium-skeleton-card"
                        });
                      })
                  )
                );
              }),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.trendingBlogsIsFetching,
                    a = e.trendingBlogList;
                  return t && 0 === a.length
                    ? this.renderSkeleton()
                    : g.a.createElement(
                        "div",
                        { className: "todays-spotlight" },
                        g.a.createElement(B, { text: "Today's Spotlight" }),
                        g.a.createElement(
                          y,
                          {
                            merge: {
                              dots: !1,
                              slidesToShow: 3,
                              slidesToScroll: 3
                            }
                          },
                          a &&
                            a.map(function(e) {
                              return g.a.createElement(
                                "div",
                                { key: e._id, className: "medium-blog-card" },
                                g.a.createElement(X, {
                                  src: e.imageSrc,
                                  alt: e.title
                                }),
                                g.a.createElement(
                                  b.a,
                                  { to: Object(O.a)(e), className: "title" },
                                  e.title
                                ),
                                g.a.createElement(
                                  "p",
                                  { className: "detail text-muted" },
                                  e.author,
                                  ", ",
                                  Object(O.e)(e.createdDate),
                                  g.a.createElement("span", {
                                    className: "mr-1 ml-2 border-right"
                                  }),
                                  g.a.createElement(E, {
                                    name: "clock",
                                    className: "mr-1 ml-1"
                                  }),
                                  " 3 min read"
                                )
                              );
                            })
                        )
                      );
                }
              }
            ]),
            t
          );
        })(g.a.PureComponent)),
        I = Object(c.createStructuredSelector)({
          categoryIsFetching: S.b,
          categoryList: S.c,
          categoryError: S.a,
          trendingBlogsIsFetching: S.e,
          trendingBlogList: S.f,
          trendingBlogsError: S.d
        }),
        L = Object(n.connect)(I, function(e) {
          return {};
        })(_),
        D = (function(e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
              ((a = Object(l.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).state = {}),
              a
            );
          }
          return (
            Object(s.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return g.a.createElement(
                    u.a,
                    p.a.home,
                    g.a.createElement(
                      "div",
                      { className: "home-page" },
                      g.a.createElement(
                        d.b,
                        null,
                        g.a.createElement(T, null),
                        g.a.createElement(
                          d.c,
                          null,
                          g.a.createElement(
                            d.a,
                            { lg: 9 },
                            g.a.createElement(L, null)
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(g.a.PureComponent),
        x = Object(c.createStructuredSelector)({}),
        z = Object(n.connect)(x, function(e) {
          return {};
        })(D);
      a.d(t, "default", function() {
        return z;
      });
    }
  }
]);
//# sourceMappingURL=home.419eb3d9.chunk.js.map
