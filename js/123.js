(function (e) {
  function t(t) {
    for (
      var a, o, c = t[0], s = t[1], u = t[2], l = 0, d = [];
      l < c.length;
      l++
    )
      (o = c[l]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]),
        (r[o] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    p && p(t);
    while (d.length) d.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], a = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== r[c] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var a = {},
    o = { main: 0 },
    r = { main: 0 },
    i = [];
  function c(e) {
    return (
      s.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-09c40315": "bb1d90cd",
        "chunk-0b98df76": "b3de1fcf",
        "chunk-11b539b5": "c537a0f4",
        "chunk-12053635": "ae9cb959",
        "chunk-1dba7d00": "33f5f5c8",
        "chunk-1ed30692": "dfba5a39",
        "chunk-229180f2": "5ee6f873",
        "chunk-23ad2e2d": "3d3758f5",
        "chunk-27d30107": "42550286",
        "chunk-28c6c29d": "02cb3841",
        "chunk-293a46d5": "9753de1e",
        "chunk-1f920fda": "3696e7eb",
        "chunk-7c47de06": "cb2562b1",
        "chunk-0d289cb8": "4135db8e",
        "chunk-21576134": "514ae06a",
        "chunk-69ef7210": "ae38057d",
        "chunk-6d137be6": "c6d1c747",
        "chunk-7d59f87e": "a90de330",
        "chunk-d3ad7bf4": "9e4567bf",
        "chunk-41ec4a28": "97ba3ad8",
        "chunk-441a85e0": "36b32a6d",
        "chunk-448da016": "5be52124",
        "chunk-4e095c4c": "cf19976d",
        "chunk-58ad5b70": "51c624a4",
        "chunk-5bddb8f4": "ae45cd83",
        "chunk-644d4de9": "0c5837c1",
        "chunk-65e6d52c": "ef3261b0",
        "chunk-74c7b8d4": "da4a60b7",
        "chunk-7e6b3558": "7b6b0954",
        "chunk-7fa92a78": "27e2a53f",
        "chunk-bce95a1c": "48765542",
        "chunk-d59c7728": "363f6a8e",
        "chunk-2d0c89db": "554df1dd",
        "chunk-1c091bff": "2ee090d5",
        "chunk-2d0d2fac": "593ef43b",
        "chunk-2d216776": "95fa64ff",
        "chunk-2d45a677": "4ea3942e",
        "chunk-2eea81d8": "c3b03ba5",
        "chunk-313e52be": "e2ff3ed3",
        "chunk-3b74c162": "3549fdc5",
        "chunk-3ba663fd": "3ba165e9",
        "chunk-4586f797": "b59282c2",
        "chunk-50109f87": "dd4497ba",
        "chunk-54ac0a46": "fcb82274",
        "chunk-63a40451": "dfda37f9",
        "chunk-649f24e4": "115ef687",
        "chunk-6a42940e": "315351ea",
        "chunk-7aef8373": "946f682a",
        "chunk-7c3251ec": "b37ea578",
        "chunk-7ee44df8": "9f53a8fa",
        "chunk-7f7d5bb9": "3c77cfb4",
        "chunk-a063fe18": "114d35c0",
        "chunk-ac8746a8": "36c4fa5a",
        "chunk-c88d0c12": "0e172d16",
      }[e] +
      ".js"
    );
  }
  function s(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = {
        "chunk-09c40315": 1,
        "chunk-0b98df76": 1,
        "chunk-11b539b5": 1,
        "chunk-12053635": 1,
        "chunk-1dba7d00": 1,
        "chunk-1ed30692": 1,
        "chunk-229180f2": 1,
        "chunk-23ad2e2d": 1,
        "chunk-28c6c29d": 1,
        "chunk-1f920fda": 1,
        "chunk-7c47de06": 1,
        "chunk-0d289cb8": 1,
        "chunk-21576134": 1,
        "chunk-69ef7210": 1,
        "chunk-6d137be6": 1,
        "chunk-7d59f87e": 1,
        "chunk-d3ad7bf4": 1,
        "chunk-41ec4a28": 1,
        "chunk-441a85e0": 1,
        "chunk-448da016": 1,
        "chunk-4e095c4c": 1,
        "chunk-58ad5b70": 1,
        "chunk-5bddb8f4": 1,
        "chunk-644d4de9": 1,
        "chunk-65e6d52c": 1,
        "chunk-74c7b8d4": 1,
        "chunk-7e6b3558": 1,
        "chunk-7fa92a78": 1,
        "chunk-bce95a1c": 1,
        "chunk-d59c7728": 1,
        "chunk-1c091bff": 1,
        "chunk-2d45a677": 1,
        "chunk-2eea81d8": 1,
        "chunk-313e52be": 1,
        "chunk-3b74c162": 1,
        "chunk-3ba663fd": 1,
        "chunk-4586f797": 1,
        "chunk-50109f87": 1,
        "chunk-54ac0a46": 1,
        "chunk-63a40451": 1,
        "chunk-649f24e4": 1,
        "chunk-6a42940e": 1,
        "chunk-7aef8373": 1,
        "chunk-7c3251ec": 1,
        "chunk-7ee44df8": 1,
        "chunk-7f7d5bb9": 1,
        "chunk-a063fe18": 1,
        "chunk-ac8746a8": 1,
        "chunk-c88d0c12": 1,
      };
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        n[e] &&
        t.push(
          (o[e] = new Promise(function (t, n) {
            for (
              var a =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-09c40315": "aee2b868",
                    "chunk-0b98df76": "b8a2091e",
                    "chunk-11b539b5": "b549959a",
                    "chunk-12053635": "6b8fbd38",
                    "chunk-1dba7d00": "53e8c52b",
                    "chunk-1ed30692": "f946d3eb",
                    "chunk-229180f2": "c0ebe6fd",
                    "chunk-23ad2e2d": "918bad18",
                    "chunk-27d30107": "31d6cfe0",
                    "chunk-28c6c29d": "e807f153",
                    "chunk-293a46d5": "31d6cfe0",
                    "chunk-1f920fda": "031c08d7",
                    "chunk-7c47de06": "d111fdf0",
                    "chunk-0d289cb8": "6f634060",
                    "chunk-21576134": "543ba927",
                    "chunk-69ef7210": "3618877c",
                    "chunk-6d137be6": "4e399452",
                    "chunk-7d59f87e": "0e6a7436",
                    "chunk-d3ad7bf4": "60d65491",
                    "chunk-41ec4a28": "8842308c",
                    "chunk-441a85e0": "b129a1af",
                    "chunk-448da016": "e32bf8b0",
                    "chunk-4e095c4c": "11762715",
                    "chunk-58ad5b70": "7e2cc6bf",
                    "chunk-5bddb8f4": "07b6941d",
                    "chunk-644d4de9": "e9b8cee5",
                    "chunk-65e6d52c": "c7cce7f8",
                    "chunk-74c7b8d4": "1b902f78",
                    "chunk-7e6b3558": "ffabd424",
                    "chunk-7fa92a78": "2b9f0edc",
                    "chunk-bce95a1c": "0dba7777",
                    "chunk-d59c7728": "55ccd898",
                    "chunk-2d0c89db": "31d6cfe0",
                    "chunk-1c091bff": "f447a0d4",
                    "chunk-2d0d2fac": "31d6cfe0",
                    "chunk-2d216776": "31d6cfe0",
                    "chunk-2d45a677": "f9fe29fd",
                    "chunk-2eea81d8": "b6e99eba",
                    "chunk-313e52be": "10f47aa9",
                    "chunk-3b74c162": "0579c47c",
                    "chunk-3ba663fd": "8d795fab",
                    "chunk-4586f797": "3798765b",
                    "chunk-50109f87": "6fa913a8",
                    "chunk-54ac0a46": "c261041c",
                    "chunk-63a40451": "e73f8673",
                    "chunk-649f24e4": "2ba259fc",
                    "chunk-6a42940e": "adaa7762",
                    "chunk-7aef8373": "82eaf9a0",
                    "chunk-7c3251ec": "6b406d58",
                    "chunk-7ee44df8": "e535943f",
                    "chunk-7f7d5bb9": "d016978d",
                    "chunk-a063fe18": "a20a48f0",
                    "chunk-ac8746a8": "3dee9a69",
                    "chunk-c88d0c12": "fd36b0a1",
                  }[e] +
                  ".css",
                r = s.p + a,
                i = document.getElementsByTagName("link"),
                c = 0;
              c < i.length;
              c++
            ) {
              var u = i[c],
                l = u.getAttribute("data-href") || u.getAttribute("href");
              if ("stylesheet" === u.rel && (l === a || l === r)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
              (u = d[c]), (l = u.getAttribute("data-href"));
              if (l === a || l === r) return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var a = (t && t.target && t.target.src) || r,
                  i = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = a),
                  delete o[e],
                  p.parentNode.removeChild(p),
                  n(i);
              }),
              (p.href = r);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p);
          }).then(function () {
            o[e] = 0;
          }))
        );
    var a = r[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var i = new Promise(function (t, n) {
          a = r[e] = [t, n];
        });
        t.push((a[2] = i));
        var u,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          s.nc && l.setAttribute("nonce", s.nc),
          (l.src = c(e));
        var d = new Error();
        u = function (t) {
          (l.onerror = l.onload = null), clearTimeout(p);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = a),
                (d.request = o),
                n[1](d);
            }
            r[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          u({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = u), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = a),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          s.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/"),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var d = 0; d < u.length; d++) t(u[d]);
  var p = l;
  i.push(["a949", "chunk-vendors"]), n();
})({
  "0db6": function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.active
          ? n("div", { attrs: { cookie: "" } }, [
              n("div", { staticClass: "x-wrapper lng" }, [
                n(
                  "p",
                  [
                    e.ko
                      ? [
                          e._v(
                            "이 웹사이트는 보다 나은 서비스 제공을 위해 당사 "
                          ),
                          n(
                            "router-link",
                            { attrs: { to: "/" + e.lang + "/privacy-policy" } },
                            [e._v("개인정보 처리방침")]
                          ),
                          e._v(
                            "에 명시된 쿠키(또는 유사한 기술)를 사용합니다. "
                          ),
                          n("br", { staticClass: "hidden-md-down" }),
                          e._v(
                            '이 창을 닫거나 "동의"를 클릭하면 쿠키 사용에 동의하는 것입니다.'
                          ),
                        ]
                      : [
                          e._v(
                            "We use cookies or similar technologies as specified in our "
                          ),
                          n(
                            "router-link",
                            { attrs: { to: "/" + e.lang + "/privacy-policy" } },
                            [e._v("privacy policy")]
                          ),
                          e._v(
                            " to provide better services. You can consent to the use of cookies by closing this notice or by clicking “Accept”."
                          ),
                        ],
                  ],
                  2
                ),
                n("div", { staticClass: "btn-wrap" }, [
                  n(
                    "a",
                    { staticClass: "x-btn blue", on: { click: e.accept } },
                    [e.ko ? [e._v("동의")] : [e._v("Accept")]],
                    2
                  ),
                ]),
              ]),
            ])
          : e._e();
      },
      o = [],
      r = n("ed08"),
      i = {
        name: "Cookie",
        data: function () {
          return { active: !1 };
        },
        methods: {
          accept: function () {
            Object(r["h"])("cookie-allow", 1), (this.active = !1);
          },
        },
        mounted: function () {
          this.active = !Object(r["d"])("cookie-allow");
        },
      },
      c = i,
      s = (n("3dde"), n("0c7c")),
      u = Object(s["a"])(c, a, o, !1, null, null, null);
    t["default"] = u.exports;
  },
  "11d3": function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            class: e.color,
            attrs: { "nav-button": "" },
            on: {
              click: function (t) {
                return e.$emit("click");
              },
            },
          },
          [
            n("span", { staticClass: "top" }),
            n("span", { staticClass: "bottom" }),
          ]
        );
      },
      o = [],
      r = {
        name: "NavButton",
        props: { color: { type: String, default: "dark" } },
      },
      i = r,
      c = (n("bae6"), n("0c7c")),
      s = Object(c["a"])(i, a, o, !1, null, null, null);
    t["default"] = s.exports;
  },
  "15d0": function (e, t, n) {},
  "1f20": function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("footer", [
          n("div", { staticClass: "x-wrapper" }, [
            n("ul", [
              n("li", [
                n("p", [e._v("Newsletter")]),
                n(
                  "div",
                  {
                    staticClass: "email",
                    class: {
                      success: "Y" === e.emailResult.result,
                      fail: "N" === e.emailResult.result,
                    },
                  },
                  [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.email,
                          expression: "email",
                        },
                      ],
                      domProps: { value: e.email },
                      on: {
                        blur: e.onBlur,
                        focus: e.onFocus,
                        keydown: function (t) {
                          return !t.type.indexOf("key") &&
                            e._k(t.keyCode, "enter", 13, t.key, "Enter")
                            ? null
                            : e.subscribe.apply(null, arguments);
                        },
                        input: function (t) {
                          t.target.composing || (e.email = t.target.value);
                        },
                      },
                    }),
                    n(
                      "div",
                      { staticClass: "placeholder lng" },
                      [
                        e.ko
                          ? [e._v("이메일 주소를 입력하세요.")]
                          : [e._v("Your email address")],
                      ],
                      2
                    ),
                    n(
                      "a",
                      {
                        staticClass: "btn-subscribe lng",
                        on: { click: e.subscribe },
                      },
                      [e.ko ? [e._v("구독하기")] : [e._v("Subscribe")]],
                      2
                    ),
                    n("p", { staticClass: "result lng" }, [
                      e._v(e._s(e.emailResult.msg)),
                    ]),
                  ]
                ),
              ]),
              n("li", [
                n("p", [e._v("Contact us")]),
                n("p", { staticClass: "lng" }, [
                  n(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "mailto:contact@lunit.io",
                      },
                    },
                    [
                      e.ko
                        ? [e._v("일반 문의 - contact@lunit.io")]
                        : [e._v("General - contact@lunit.io")],
                    ],
                    2
                  ),
                  e._v(" "),
                  n("br"),
                  n(
                    "a",
                    { attrs: { target: "_blank", href: "mailto:ir@lunit.io" } },
                    [
                      e.ko
                        ? [e._v("투자 - ir@lunit.io")]
                        : [e._v("Investment - ir@lunit.io")],
                    ],
                    2
                  ),
                  e._v(" "),
                  n("br"),
                  n(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "mailto:media@lunit.io",
                      },
                    },
                    [
                      e.ko
                        ? [e._v("언론 보도 - media@lunit.io")]
                        : [e._v("Media - media@lunit.io")],
                    ],
                    2
                  ),
                  e._v(" "),
                  n("br"),
                  n(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "mailto:partner@lunit.io",
                      },
                    },
                    [
                      e.ko
                        ? [e._v("파트너십 - partner@lunit.io")]
                        : [e._v("Partnership - partner@lunit.io")],
                    ],
                    2
                  ),
                ]),
              ]),
              n("li", [
                n("p", [e._v("Office")]),
                n(
                  "p",
                  { staticClass: "lng" },
                  [
                    e.ko
                      ? [
                          e._v(" 대한민국 서울(본사) "),
                          n("br"),
                          e._v(" 미국 보스턴 "),
                          n("br"),
                          e._v(" 네덜란드 암스테르담 "),
                          n("br"),
                          e._v(" 중국 상하이 "),
                        ]
                      : [
                          e._v(" Seoul HQ "),
                          n("br"),
                          e._v(" Boston, USA "),
                          n("br"),
                          e._v(" Amsterdam, The Netherlands "),
                          n("br"),
                          e._v(" Shanghai, China "),
                        ],
                  ],
                  2
                ),
              ]),
              n(
                "li",
                [
                  n("p", [e._v("Social")]),
                  e.ko
                    ? n("div", { staticClass: "sns" }, [
                        n(
                          "a",
                          {
                            staticClass: "fb",
                            attrs: {
                              target: "_blank",
                              href: "https://www.facebook.com/lunit.io",
                            },
                          },
                          [e._v("facebook")]
                        ),
                        n(
                          "a",
                          {
                            staticClass: "in",
                            attrs: {
                              target: "_blank",
                              href: "https://www.linkedin.com/company/lunit-inc-/",
                            },
                          },
                          [e._v("linkedin")]
                        ),
                        n(
                          "a",
                          {
                            staticClass: "tw",
                            attrs: {
                              target: "_blank",
                              href: "https://twitter.com/Lunit_AI",
                            },
                          },
                          [e._v("twitter")]
                        ),
                        n(
                          "a",
                          {
                            staticClass: "yt",
                            attrs: {
                              target: "_blank",
                              href: "https://www.youtube.com/channel/UC8LYLYa3cXOVZioI169pzOw",
                            },
                          },
                          [e._v("youtube")]
                        ),
                        n(
                          "a",
                          {
                            staticClass: "ig",
                            attrs: {
                              target: "_blank",
                              href: "https://www.instagram.com/lunit.ai/",
                            },
                          },
                          [e._v("instagram")]
                        ),
                      ])
                    : n("div", { staticClass: "sns" }, [
                        n(
                          "a",
                          {
                            staticClass: "in",
                            attrs: {
                              target: "_blank",
                              href: "https://www.linkedin.com/company/lunit-inc-/",
                            },
                          },
                          [e._v("linkedin")]
                        ),
                        n(
                          "a",
                          {
                            staticClass: "fb",
                            attrs: {
                              target: "_blank",
                              href: "https://www.facebook.com/lunit.io",
                            },
                          },
                          [e._v("facebook")]
                        ),
                        n(
                          "a",
                          {
                            staticClass: "tw",
                            attrs: {
                              target: "_blank",
                              href: "https://twitter.com/Lunit_AI",
                            },
                          },
                          [e._v("twitter")]
                        ),
                        n(
                          "a",
                          {
                            staticClass: "yt",
                            attrs: {
                              target: "_blank",
                              href: "https://www.youtube.com/channel/UC8LYLYa3cXOVZioI169pzOw",
                            },
                          },
                          [e._v("youtube")]
                        ),
                      ]),
                  n(
                    "router-link",
                    {
                      staticClass: "btn-contact lng",
                      attrs: { to: "/" + e.lang + "/contact-sales" },
                    },
                    [e.ko ? [e._v("제품 문의하기")] : [e._v("Contact Sales")]],
                    2
                  ),
                ],
                1
              ),
            ]),
            n(
              "div",
              { staticClass: "copyright" },
              [
                n("s", [e._v("ⓒ")]),
                e._v(" 2021 Lunit Inc. All rights reserved. "),
                n(
                  "router-link",
                  {
                    staticClass: "lng",
                    attrs: { to: "/" + e.lang + "/privacy-policy" },
                  },
                  [
                    e.ko
                      ? [e._v("개인정보 처리방침")]
                      : [e._v("Privacy Policy")],
                  ],
                  2
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      o = [],
      r = (n("96cf"), n("1da1")),
      i = n("ac49"),
      c = {
        name: "AppFooter",
        data: function () {
          return {
            email: "",
            emailStored: "",
            emailResult: { result: "", msg: "" },
          };
        },
        methods: {
          onFocus: function () {
            (this.emailResult.result = ""),
              (this.emailResult.msg = ""),
              (this.email = this.emailStored);
          },
          onBlur: function () {
            (this.emailStored = this.email), (this.email = "");
          },
          subscribe: function () {
            var e = this;
            return Object(r["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((n = e.email || e.emailStored), n)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (
                            (t.prev = 3),
                            (t.next = 6),
                            i["a"].post("/api/subscribe", { email: n })
                          );
                        case 6:
                          (e.emailResult.result = "Y"),
                            (e.emailResult.msg = e.ko
                              ? "구독신청이 완료되었습니다! 감사합니다."
                              : "We’ve signed you up! Thank you."),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t["catch"](3)),
                            (a = t.t0.response),
                            a &&
                              ((e.emailResult.result = "N"),
                              (e.emailResult.msg = a.data.message));
                        case 14:
                          (e.emailStored = ""), (e.email = "");
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 10]]
                );
              })
            )();
          },
        },
      },
      s = c,
      u = (n("9f28"), n("0c7c")),
      l = Object(u["a"])(s, a, o, !1, null, null, null);
    t["default"] = l.exports;
  },
  2414: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "header",
          {
            class: [
              e.navColor,
              e.navBg,
              e.roll && "roll",
              e.navUp && "nav-up",
              e.scrolled && "scrolled",
              e.mobile && "mobile",
            ],
          },
          [
            n(
              "div",
              {
                staticClass: "bar",
                class: {
                  "nav-open": e.navOpen,
                  "nav-closing": e.navClosing,
                  roll: e.roll,
                  scrolled: e.scrolled,
                  initialized: e.initialized,
                },
              },
              [
                n(
                  "div",
                  { staticClass: "home" },
                  [
                    n("router-link", { attrs: { to: "/" + e.lang } }, [
                      e._v("Lunit"),
                    ]),
                  ],
                  1
                ),
                n(
                  "nav",
                  {
                    on: {
                      click: function (t) {
                        return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey
                          ? null
                          : e.closeNav.apply(null, arguments);
                      },
                    },
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "drawer",
                        style: { height: e.height },
                        on: {
                          click: function (e) {
                            e.stopPropagation();
                          },
                        },
                      },
                      [
                        n("div", { staticClass: "scroll-holder" }, [
                          n("div", { staticClass: "scroll-body" }, [
                            n("ul", { staticClass: "nav" }, [
                              n(
                                "li",
                                { staticClass: "hidden-lg-up" },
                                [
                                  n(
                                    "router-link",
                                    { attrs: { to: "/" + e.lang } },
                                    [e._v("Home")]
                                  ),
                                ],
                                1
                              ),
                              n(
                                "li",
                                [
                                  n(
                                    "router-link",
                                    {
                                      attrs: { to: "/" + e.lang + "/company" },
                                    },
                                    [e._v("Company")]
                                  ),
                                ],
                                1
                              ),
                              n(
                                "li",
                                {
                                  staticClass: "arrow",
                                  on: {
                                    mouseenter: e.onOver,
                                    mouseleave: e.onOut,
                                  },
                                },
                                [
                                  n(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/" + e.lang + "/products",
                                        event: "",
                                      },
                                      nativeOn: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            e.onClick.apply(null, arguments)
                                          );
                                        },
                                      },
                                    },
                                    [e._v("Products")]
                                  ),
                                  n("ul", [
                                    n(
                                      "li",
                                      { staticClass: "hidden-lg-up" },
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/" + e.lang + "/products",
                                            },
                                          },
                                          [e._v("Overview")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "/" +
                                                e.lang +
                                                "/products/insight-cxr",
                                            },
                                          },
                                          [e._v("Lunit INSIGHT CXR")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "/" +
                                                e.lang +
                                                "/products/insight-mmg",
                                            },
                                          },
                                          [e._v("Lunit INSIGHT MMG")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "/" +
                                                e.lang +
                                                "/products/scope-io",
                                            },
                                          },
                                          [e._v("Lunit SCOPE IO")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "/" +
                                                e.lang +
                                                "/products/scope-pdl1",
                                            },
                                          },
                                          [e._v("Lunit SCOPE PD-L1")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ],
                                1
                              ),
                              n(
                                "li",
                                {
                                  staticClass: "arrow",
                                  on: {
                                    mouseenter: e.onOver,
                                    mouseleave: e.onOut,
                                  },
                                },
                                [
                                  n(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/" + e.lang + "/evidence",
                                        event: "none",
                                      },
                                      nativeOn: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            e.onClick.apply(null, arguments)
                                          );
                                        },
                                      },
                                    },
                                    [e._v("Evidence")]
                                  ),
                                  n("ul", [
                                    n(
                                      "li",
                                      { staticClass: "hidden-lg-up" },
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/" + e.lang + "/evidence",
                                            },
                                          },
                                          [e._v("Overview")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "/" +
                                                e.lang +
                                                "/evidence/ai-research",
                                            },
                                          },
                                          [e._v("AI Research")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "/" +
                                                e.lang +
                                                "/evidence/medical-journals",
                                            },
                                          },
                                          [e._v("Medical Journals")]
                                        ),
                                      ],
                                      1
                                    ),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to:
                                                "/" +
                                                e.lang +
                                                "/evidence/lunit-blog",
                                            },
                                          },
                                          [e._v("Lunit Blog")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ],
                                1
                              ),
                              n(
                                "li",
                                [
                                  n(
                                    "router-link",
                                    { attrs: { to: "/" + e.lang + "/news" } },
                                    [e._v("News & Invest")]
                                  ),
                                ],
                                1
                              ),
                              n(
                                "li",
                                {
                                  staticClass: "arrow",
                                  on: {
                                    mouseenter: e.onOver,
                                    mouseleave: e.onOut,
                                  },
                                },
                                [
                                  n(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/" + e.lang + "/careers",
                                        event: "none",
                                      },
                                      nativeOn: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            e.onClick.apply(null, arguments)
                                          );
                                        },
                                      },
                                    },
                                    [e._v("Careers")]
                                  ),
                                  n("ul", [
                                    n(
                                      "li",
                                      { staticClass: "hidden-lg-up" },
                                      [
                                        n(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/" + e.lang + "/careers",
                                            },
                                          },
                                          [e._v("Overview")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._m(0),
                                  ]),
                                ],
                                1
                              ),
                            ]),
                            n(
                              "div",
                              { staticClass: "util" },
                              [
                                n("div", { staticClass: "language" }, [
                                  n("div", [
                                    n(
                                      "a",
                                      {
                                        class: { on: "ko" === e.lang },
                                        on: {
                                          click: function (t) {
                                            return e.changeLang("ko");
                                          },
                                        },
                                      },
                                      [e._v("KO")]
                                    ),
                                    n(
                                      "a",
                                      {
                                        class: { on: "en" === e.lang },
                                        on: {
                                          click: function (t) {
                                            return e.changeLang("en");
                                          },
                                        },
                                      },
                                      [e._v("EN")]
                                    ),
                                  ]),
                                ]),
                                n(
                                  "router-link",
                                  {
                                    staticClass: "btn-sales lng",
                                    attrs: {
                                      to: "/" + e.lang + "/contact-sales",
                                    },
                                  },
                                  [
                                    e.ko
                                      ? [e._v("제품 문의하기")]
                                      : [e._v("Contact Sales")],
                                  ],
                                  2
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        n("NavButton", {
                          attrs: { color: e.navColor },
                          on: { click: e.closeNav },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                n("NavButton", {
                  attrs: { color: e.navColor },
                  on: { click: e.openNav },
                }),
                e.onContactSales
                  ? e._e()
                  : n(
                      "router-link",
                      {
                        staticClass: "btn-sales-sm lng",
                        attrs: { to: "/" + e.lang + "/contact-sales" },
                      },
                      [
                        e.ko
                          ? [e._v("제품 문의하기")]
                          : [e._v("Contact Sales")],
                      ],
                      2
                    ),
              ],
              1
            ),
          ]
        );
      },
      o = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("li", [
            n(
              "a",
              {
                staticClass: "out-link",
                attrs: {
                  href: "https://apply.workable.com/lunit/",
                  target: "_blank",
                },
              },
              [e._v("Lunit Recruit")]
            ),
          ]);
        },
      ],
      r =
        (n("4de4"),
        n("4160"),
        n("ac1f"),
        n("5319"),
        n("159b"),
        n("96cf"),
        n("1da1")),
      i = n("15a4"),
      c = n("b354"),
      s = n("11d3"),
      u = n("ed08"),
      l = {
        name: "AppHeader",
        components: { NavButton: s["default"] },
        data: function () {
          return {
            navOpen: !1,
            navClosing: !1,
            height: "100vh",
            isLine: !1,
            activeStyle: {},
            initialized: !1,
            shrink: !1,
          };
        },
        watch: {
          $route: function () {
            setTimeout(this.closeNav, 500),
              "undefined" !== typeof window &&
                this.$nextTick(this.updateNavBar);
          },
        },
        computed: {
          roll: function () {
            return (
              (this.$store.state.scrollArtificial &&
                "up" === this.$store.state.scrollDirection) ||
              this.shrink ||
              this.navOpen ||
              this.$store.state.scrollTop <= 0
            );
          },
          scrolled: function () {
            return (
              this.$store.state.scrollTop > 5 ||
              (this.$store.state.freeze && this.$store.state.freezeTop > 5)
            );
          },
          overflow: function () {
            return this.$store.state.overflow > 0;
          },
          black: function () {
            var e = this.$store.state.indicatorColors;
            return e
              ? e[this.$store.state.page - 1]
              : this.$store.state.overflow > 0;
          },
          onContactSales: function () {
            return /contact-sales$/.test(this.$route.path);
          },
        },
        methods: {
          openNav: function () {
            (this.$el.querySelector(".scroll-holder").scrollTop = 0),
              (this.navOpen = !0),
              this.$store.commit("freeze");
          },
          closeNav: function () {
            this.navOpen &&
              ((this.navClosing = !0),
              setTimeout(this.drawerTransitionEnd, 500),
              i["a"].forEach(
                this.$el.querySelectorAll(".nav > li"),
                function (e) {
                  return e.classList.remove("on");
                }
              ),
              this.$store.dispatch("release"));
          },
          drawerTransitionEnd: function () {
            this.navClosing && ((this.navOpen = !1), (this.navClosing = !1));
          },
          updateNavBar: function () {
            var e = this.$el.querySelector(".nav .router-link-exact-active");
            this.activeStyle = e
              ? {
                  left: e.parentNode.offsetLeft + e.offsetLeft + "px",
                  width: e.offsetWidth + "px",
                }
              : {};
          },
          resized: function (e) {
            (this.height = e.vh + "px"),
              (this.shrink = e.shrink),
              this.updateNavBar();
          },
          onToggle: function (e) {
            if (Object(u["f"])())
              this.$router.push(e.currentTarget.getAttribute("href"));
            else {
              var t = e.currentTarget.parentNode,
                n = i["a"].filter(
                  document.querySelectorAll("header .nav > li"),
                  function (e) {
                    return e !== t;
                  }
                );
              i["a"].forEach(n, function (e) {
                return e.classList.remove("on");
              }),
                Object(u["i"])(t, "on");
            }
          },
          onOver: function (e) {
            Object(u["f"])() || e.currentTarget.classList.add("on");
          },
          onOut: function (e) {
            Object(u["f"])() || e.currentTarget.classList.remove("on");
          },
          onClick: function (e) {
            Object(u["f"])()
              ? Object(u["i"])(e.currentTarget.parentNode, "on")
              : this.$router.push(e.currentTarget.getAttribute("href"));
          },
          changeLang: function (e) {
            var t = this;
            return Object(r["a"])(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (!t.$route.meta.detail) {
                          n.next = 3;
                          break;
                        }
                        return (n.next = 3), t.$router.replace({ path: "." });
                      case 3:
                        return (
                          (n.next = 5), t.$router.push({ params: { lang: e } })
                        );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        },
        mounted: function () {
          c["a"].addListener(this.resized);
        },
      },
      d = l,
      p = (n("4f58"), n("0c7c")),
      f = Object(p["a"])(d, a, o, !1, null, null, null);
    t["default"] = f.exports;
  },
  2563: function (e, t, n) {
    "use strict";
    var a = n("b0bc"),
      o = n.n(a);
    o.a;
  },
  "3dde": function (e, t, n) {
    "use strict";
    var a = n("4c44"),
      o = n.n(a);
    o.a;
  },
  "4c44": function (e, t, n) {},
  "4d9d": function (e, t, n) {},
  "4f58": function (e, t, n) {
    "use strict";
    var a = n("4d9d"),
      o = n.n(a);
    o.a;
  },
  "56ec": function (e, t, n) {},
  "627e": function (e, t, n) {
    var a = {
      "./views/Main.vue": ["cd56", "chunk-293a46d5", "chunk-448da016"],
      "./views/common/AppFooter.vue": ["1f20"],
      "./views/common/AppHeader.vue": ["2414"],
      "./views/common/Cookie.vue": ["0db6"],
      "./views/components/ArticleList.vue": [
        "8f50",
        "chunk-293a46d5",
        "chunk-7e6b3558",
      ],
      "./views/components/CardItem.vue": ["d839", "chunk-11b539b5"],
      "./views/components/CardList.vue": ["bfd3", "chunk-229180f2"],
      "./views/components/CarouselList.vue": [
        "33a9",
        "chunk-293a46d5",
        "chunk-4e095c4c",
      ],
      "./views/components/DropSelect.vue": ["4ab4", "chunk-12053635"],
      "./views/components/EditorView.vue": ["663b", "chunk-649f24e4"],
      "./views/components/FlowImg.vue": ["4959", "chunk-ac8746a8"],
      "./views/components/Hero.vue": ["1bc5", "chunk-3b74c162"],
      "./views/components/LocationMenu.vue": ["c811", "chunk-28c6c29d"],
      "./views/components/Lottie.vue": ["a0d9", "chunk-27d30107"],
      "./views/components/NavButton.vue": ["11d3"],
      "./views/components/PCard.vue": ["f416", "chunk-313e52be"],
      "./views/components/PScreen.vue": ["bcc4", "chunk-63a40451"],
      "./views/components/PSection.vue": ["1350", "chunk-1dba7d00"],
      "./views/components/Pagination.vue": ["1f89", "chunk-09c40315"],
      "./views/components/Popup.vue": ["d43b"],
      "./views/components/PostItem.vue": ["6eff", "chunk-7aef8373"],
      "./views/components/PromotionBanner.vue": [
        "1210",
        "chunk-293a46d5",
        "chunk-d59c7728",
      ],
      "./views/components/RatioVideo.vue": ["abb5", "chunk-0b98df76"],
      "./views/components/RouteBanner.vue": ["9705", "chunk-54ac0a46"],
      "./views/components/ScrollMenu.vue": [
        "ceb2",
        "chunk-293a46d5",
        "chunk-58ad5b70",
      ],
      "./views/components/Slider.vue": ["8eb6", "chunk-293a46d5"],
      "./views/components/SplitItem.vue": ["2f7c", "chunk-a063fe18"],
      "./views/components/Sticky.vue": ["e216", "chunk-1ed30692"],
      "./views/components/TextBox.vue": ["4af2", "chunk-6a42940e"],
      "./views/components/TextInput.vue": ["3381", "chunk-23ad2e2d"],
      "./views/components/VideoList.vue": [
        "fea2",
        "chunk-293a46d5",
        "chunk-41ec4a28",
      ],
      "./views/error.vue": ["0636", "chunk-4586f797"],
      "./views/pages/RouterView.vue": ["c31a", "chunk-2d216776"],
      "./views/pages/careers.vue": ["92b6", "chunk-293a46d5", "chunk-644d4de9"],
      "./views/pages/company.vue": [
        "d35a",
        "chunk-293a46d5",
        "chunk-28c6c29d",
        "chunk-7d59f87e",
      ],
      "./views/pages/contact-sales.vue": ["f4d3", "chunk-7ee44df8"],
      "./views/pages/detail/article.vue": [
        "1cce",
        "chunk-293a46d5",
        "chunk-1f920fda",
      ],
      "./views/pages/detail/careers.vue": ["5b6b", "chunk-2eea81d8"],
      "./views/pages/detail/evidence.vue": [
        "d243",
        "chunk-293a46d5",
        "chunk-441a85e0",
      ],
      "./views/pages/detail/invest.vue": ["187a", "chunk-3ba663fd"],
      "./views/pages/evidence/ai-research.vue": [
        "4913",
        "chunk-293a46d5",
        "chunk-5bddb8f4",
      ],
      "./views/pages/evidence/index.vue": [
        "8bde",
        "chunk-293a46d5",
        "chunk-27d30107",
        "chunk-7c47de06",
      ],
      "./views/pages/evidence/lunit-blog.vue": [
        "94a5",
        "chunk-293a46d5",
        "chunk-65e6d52c",
      ],
      "./views/pages/evidence/medical-journals.vue": [
        "a38f",
        "chunk-293a46d5",
        "chunk-7fa92a78",
      ],
      "./views/pages/evidence/sub.vue": [
        "5f95",
        "chunk-293a46d5",
        "chunk-bce95a1c",
      ],
      "./views/pages/news.vue": [
        "8224",
        "chunk-293a46d5",
        "chunk-28c6c29d",
        "chunk-d3ad7bf4",
      ],
      "./views/pages/popup/ConsentPopup.vue": ["d201", "chunk-7f7d5bb9"],
      "./views/pages/popup/ContactPopup.vue": ["ddc8", "chunk-c88d0c12"],
      "./views/pages/popup/ContactUsPopup.vue": ["f01c"],
      "./views/pages/popup/LicensePopup.vue": ["3e6b", "chunk-50109f87"],
      "./views/pages/popup/NewsletterPopup.vue": ["e7c9"],
      "./views/pages/popup/TeamLunitPopup.vue": ["c64c", "chunk-2d45a677"],
      "./views/pages/privacy-policy-EN.vue": ["5648", "chunk-2d0c89db"],
      "./views/pages/privacy-policy-KR.vue": ["5b8a", "chunk-2d0d2fac"],
      "./views/pages/privacy-policy.vue": [
        "3468",
        "chunk-2d0c89db",
        "chunk-1c091bff",
      ],
      "./views/pages/products/index.vue": [
        "f344",
        "chunk-293a46d5",
        "chunk-74c7b8d4",
      ],
      "./views/pages/products/insight-cxr.vue": [
        "fd0f",
        "chunk-293a46d5",
        "chunk-28c6c29d",
        "chunk-27d30107",
        "chunk-6d137be6",
      ],
      "./views/pages/products/insight-mmg.vue": [
        "9442",
        "chunk-293a46d5",
        "chunk-28c6c29d",
        "chunk-27d30107",
        "chunk-21576134",
      ],
      "./views/pages/products/scope-io.vue": [
        "8d35",
        "chunk-293a46d5",
        "chunk-28c6c29d",
        "chunk-27d30107",
        "chunk-69ef7210",
      ],
      "./views/pages/products/scope-pdl1.vue": [
        "c488",
        "chunk-293a46d5",
        "chunk-28c6c29d",
        "chunk-27d30107",
        "chunk-0d289cb8",
      ],
      "./views/pages/support.vue": ["597b", "chunk-7c3251ec"],
    };
    function o(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n(o);
      });
    }
    (o.keys = function () {
      return Object.keys(a);
    }),
      (o.id = "627e"),
      (e.exports = o);
  },
  7911: function (e, t, n) {
    "use strict";
    var a = n("15d0"),
      o = n.n(a);
    o.a;
  },
  "7c55": function (e, t, n) {
    "use strict";
    var a = n("90ee"),
      o = n.n(a);
    o.a;
  },
  "8a67": function (e, t, n) {},
  "90ee": function (e, t, n) {},
  "9f28": function (e, t, n) {
    "use strict";
    var a = n("56ec"),
      o = n.n(a);
    o.a;
  },
  a949: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "stayRoute", function () {
        return ne;
      });
    n("4160"),
      n("c975"),
      n("45fc"),
      n("159b"),
      n("e260"),
      n("e6cf"),
      n("cca6"),
      n("a79d");
    var a,
      o,
      r,
      i = n("2b0e"),
      c = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            class: {
              touch: e.touch,
              "no-touch": !e.touch,
              inertia: e.inertia,
              ko: e.ko,
            },
            attrs: { id: "app" },
          },
          [
            n("AppHeader"),
            n("div", { staticClass: "pseudo-body" }),
            n("div", { staticClass: "app-scroll-container" }, [
              n(
                "div",
                { staticClass: "app-scroll-body" },
                [n("router-view"), n("AppFooter")],
                1
              ),
            ]),
            n("div", { staticClass: "fixed-holder" }),
            n("a", {
              staticClass: "go-top",
              class: { show: e.scrollTarget > 800 },
              attrs: { color: e.goTopColor },
              on: { click: e.goTop },
            }),
            e.newsletterPop
              ? n("NewsletterPopup", {
                  on: {
                    close: function (t) {
                      e.newsletterPop = !1;
                    },
                  },
                })
              : e._e(),
            e.contactusPop
              ? n("ContactUsPopup", {
                  on: {
                    close: function (t) {
                      e.contactusPop = !1;
                    },
                  },
                })
              : e._e(),
            n("Cookie"),
          ],
          1
        );
      },
      s = [],
      u = (n("ac1f"), n("5319"), n("2414")),
      l = n("1f20"),
      d = 0,
      p = !1,
      f = "up",
      h = !1,
      m = -1,
      v = function () {
        clearTimeout(m),
          (m = setTimeout(function () {
            m = -1;
          }, 3e3));
      },
      k = function () {
        (a = window.pageYOffset),
          (f = d <= a && a > 0 ? "down" : "up"),
          (d = a),
          (h = ~m),
          r.state.freeze ||
            r.commit("scroll", { top: a, direction: f, artificial: h }),
          o(a);
      },
      b = function (e) {
        p ||
          ("undefined" !== typeof window &&
            (window.addEventListener("scroll", k),
            window.addEventListener("wheel", v),
            window.addEventListener("mousedown", function () {
              return (m = -1);
            }),
            (o = e),
            (p = !0),
            k()));
      },
      g = function (e) {
        r = e;
      },
      w = { init: g, register: b, scroll: k },
      _ = n("d785"),
      y = n("ed08"),
      C = n("e7c9"),
      x = n("f01c"),
      T = n("0db6"),
      S = {
        name: "App",
        components: {
          Cookie: T["default"],
          ContactUsPopup: x["default"],
          NewsletterPopup: C["default"],
          AppFooter: l["default"],
          AppHeader: u["default"],
        },
        data: function () {
          return {
            scrollHeight: 0,
            scrollValue: 0,
            scrollTarget: 0,
            scrollBody: null,
            back: !1,
          };
        },
        computed: {
          page: function () {
            return this.$store.state.page;
          },
          overflow: function () {
            return this.$store.state.overflow < 0
              ? 0
              : this.$store.state.overflow;
          },
          pageLabels: function () {
            return this.$store.state.pageLabels;
          },
          topColors: function () {
            return this.$store.state.topColors;
          },
          indicatorColors: function () {
            return this.$store.state.indicatorColors;
          },
          bottomBg: function () {
            return this.$store.state.bottomBg;
          },
          touch: function () {
            return this.$store.state.touch;
          },
          orientation: function () {
            return this.$store.state.orientation;
          },
        },
        watch: {
          lang: function (e) {
            this.$store.commit("lang", e);
          },
          orientation: function () {
            this.scrollImmediate(0);
          },
          inertia: function (e) {
            e || (this.scrollBody.style.transform = null);
          },
        },
        methods: {
          tick: function () {
            if (this.inertia) {
              if (!this.$store.state.freeze) {
                this.scrollBody.offsetHeight !== this.scrollHeight &&
                  ((this.scrollHeight = this.scrollBody.offsetHeight),
                  (this.pseudoBody.style.height = this.scrollHeight + "px"));
                var e = this.scrollTarget - this.scrollValue;
                Math.abs(e) < 1
                  ? ((this.scrollValue = this.scrollTarget),
                    _["a"].wheelRelease())
                  : (this.scrollValue += 0.15 * e),
                  this.inertia &&
                    (this.scrollBody.style.transform = "translateY(-".concat(
                      this.scrollValue,
                      "px)"
                    )),
                  _["a"].tick(this.scrollValue);
              }
            } else _["a"].tick();
          },
          scrolled: function () {
            this.freeze ||
              this.$store.state.scrollLock ||
              (this.scrollTarget = window.pageYOffset);
          },
          resized: function (e) {
            this.scrollValue = this.scrollTarget = e;
          },
          loop: function () {
            this.tick(), requestAnimationFrame(this.loop);
          },
          goTop: function () {
            Object(y["a"])(window.pageYOffset, 0, 30, function (e) {
              window.scroll(0, e);
            });
          },
          scrollImmediate: function (e) {
            (this.scrollTarget = e),
              (this.scrollValue = e),
              window.scroll(0, e),
              this.$store.commit("freezeTop", e);
          },
        },
        metaInfo: function () {
          return {
            title: "Lunit",
            meta: [
              { vmid: "title", content: "Lunit Inc." },
              {
                vmid: "description",
                content:
                  "With AI, we aim to make data-driven medicine the new standard of care. We are especially focused on conquering cancer, one of the leading causes of death worldwide.",
              },
              { vmid: "image", content: "/img/og.png" },
              {
                vmid: "path",
                content: this.$route.path.replace(/^\/(ko|en)/, ""),
              },
            ],
          };
        },
        mounted: function () {
          "undefined" !== typeof window &&
            ((this.$root.scrollImmediate = this.scrollImmediate),
            (this.scrollBody = this.$el.querySelector(".app-scroll-body")),
            (this.pseudoBody = this.$el.querySelector(".pseudo-body")),
            w.register(this.scrolled),
            requestAnimationFrame(this.loop),
            this.tick());
        },
      },
      O = S,
      L = (n("7c55"), n("0c7c")),
      E = Object(L["a"])(O, c, s, !1, null, null, null),
      $ = E.exports,
      A = (n("d3b7"), n("8c4f")),
      I = n("58ca"),
      P = function (e) {
        return function () {
          return n("627e")("./views".concat(e, ".vue"));
        };
      };
    i["a"].use(A["a"]), i["a"].use(I["a"]);
    var N = function () {
        return new A["a"]({
          mode: "history",
          scrollBehavior: function () {
            return null;
          },
          routes: [
            { path: "/", redirect: "/en" },
            {
              path: "/:lang(en|ko)",
              component: P("/pages/RouterView"),
              children: [
                { path: "/", component: P("/Main") },
                { path: "company/team", redirect: "company" },
                { path: "company/:sq(\\d+)?", component: P("/pages/company") },
                { path: "products", component: P("/pages/products/index") },
                {
                  path: "products/insight-mmg",
                  component: P("/pages/products/insight-mmg"),
                },
                {
                  path: "products/insight-cxr",
                  component: P("/pages/products/insight-cxr"),
                },
                {
                  path: "products/scope-io",
                  component: P("/pages/products/scope-io"),
                },
                {
                  path: "products/scope-pdl1",
                  component: P("/pages/products/scope-pdl1"),
                },
                { path: "evidence", component: P("/pages/evidence/index") },
                {
                  path: "evidence/ai-research/:id",
                  meta: { type: "research" },
                  component: P("/pages/detail/evidence"),
                },
                {
                  path: "evidence/medical-journals/:id",
                  meta: { type: "journals" },
                  component: P("/pages/detail/evidence"),
                },
                {
                  path: "evidence/lunit-blog/:id",
                  meta: { detail: !0, type: "blog" },
                  component: P("/pages/detail/article"),
                },
                {
                  path: "evidence",
                  component: P("/pages/evidence/sub"),
                  children: [
                    {
                      path: "ai-research",
                      meta: { label: "AI Research" },
                      component: P("/pages/evidence/ai-research"),
                    },
                    {
                      path: "medical-journals",
                      meta: { label: "Medical Journals" },
                      component: P("/pages/evidence/medical-journals"),
                    },
                    {
                      path: "lunit-blog",
                      meta: { label: "Lunit blog" },
                      component: P("/pages/evidence/lunit-blog"),
                    },
                  ],
                },
                { path: ":news(news|ir)", component: P("/pages/news") },
                {
                  path: "news/:id",
                  meta: { detail: !0, type: "news" },
                  component: P("/pages/detail/article"),
                },
                {
                  path: "ir/:id",
                  meta: { detail: !0 },
                  component: P("/pages/detail/invest"),
                },
                { path: "careers", component: P("/pages/careers") },
                { path: "careers/:sq", component: P("/pages/detail/careers") },
                {
                  path: "contact-sales/:complete?",
                  component: P("/pages/contact-sales"),
                },
                { path: "support", component: P("/pages/support") },
                {
                  path: "privacy-policy",
                  component: P("/pages/privacy-policy"),
                },
              ],
            },
          ],
        });
      },
      R = n("5530"),
      M = n("2f62"),
      j = n("15a4"),
      H = {
        tempDetail: null,
        privacyPopup: !1,
        newsletterPopup: !1,
        videoShow: !1,
        navColor: null,
        subNavColor: null,
        goTopColor: null,
        navBg: null,
        navUp: !1,
        newsletterPop: !1,
        contactusPop: !1,
        mobile: !1,
      };
    i["a"].use(M["a"]);
    var q = function () {
        return new M["a"].Store({
          state: Object(R["a"])(
            {
              lang: "en",
              scrollTop: 0,
              scrollDirection: "up",
              scrollArtificial: !1,
              matchedMedia: null,
              orientation: null,
              freeze: 0,
              freezeTop: 0,
              page: 0,
              overflow: 0,
              pageLabels: null,
              topColors: null,
              indicatorColors: null,
              bottomBg: null,
              touch: !1,
              mobile: !1,
              inertia: !1,
              sliderKey: 0,
              scrollLock: !1,
              savedScroll: {},
              savedHeight: {},
              savedData: {},
              historyCount: 0,
            },
            H
          ),
          mutations: Object(R["a"])(
            {
              touch: function (e, t) {
                e.touch = t;
              },
              mobile: function (e, t) {
                e.mobile = t;
              },
              lang: function (e, t) {
                e.lang = t;
              },
              scroll: function (e, t) {
                var n = t.top,
                  a = t.direction,
                  o = t.artificial;
                (e.scrollTop = n),
                  (e.scrollDirection = a),
                  (e.scrollArtificial = o);
              },
              section: function (e, t) {
                e.sect = t;
              },
              matchedMedia: function (e, t) {
                (e.matchedMedia = t),
                  (e.inertia =
                    !e.touch ||
                    "lg" === e.matchedMedia ||
                    "xl" === e.matchedMedia ||
                    "xxl" === e.matchedMedia);
              },
              orientation: function (e, t) {
                e.orientation = t;
              },
              freeze: function (e) {
                (e.freeze = !0),
                  (e.freezeTop = window.pageYOffset),
                  document.querySelector("#app").classList.add("freeze"),
                  e.inertia ||
                    (document.querySelector(
                      ".app-scroll-container"
                    ).style.transform = "translateY(-".concat(
                      e.freezeTop,
                      "px)"
                    ));
              },
              freezeTop: function (e, t) {
                (e.freezeTop = t), (e.scrollTop = t);
              },
              release: function (e) {
                e.freeze = !1;
              },
              page: function (e, t) {
                e.page = t;
              },
              overflow: function (e, t) {
                e.overflow = t;
              },
              pageLabels: function (e, t) {
                e.pageLabels = t;
              },
              topColors: function (e, t) {
                e.topColors = t;
              },
              indicatorColors: function (e, t) {
                e.indicatorColors = t;
              },
              bottomBg: function (e, t) {
                e.bottomBg = t;
              },
              sliderKey: function (e) {
                e.sliderKey += 1;
              },
              saveState: function (e, t) {
                var n = t.route,
                  a = t.scroll,
                  o = t.height,
                  r = t.data;
                (e.savedScroll[n] = a),
                  (e.savedHeight[n] = o),
                  (e.savedData[n] = r);
              },
              scrollLock: function (e) {
                e.scrollLock = !0;
              },
              scrollRelease: function (e) {
                e.scrollLock = !1;
              },
              historyPush: function (e) {
                e.historyCount += 1;
              },
              historyPop: function (e) {
                e.historyCount -= 1;
              },
            },
            j["a"].mapValues(H, function (e, t) {
              return function (e, n) {
                e[t] = n;
              };
            })
          ),
          actions: {
            release: function (e) {
              var t = e.commit,
                n = e.state;
              document.querySelector("#app").classList.remove("freeze"),
                n.inertia
                  ? (document.querySelector(
                      ".app-scroll-body"
                    ).style.transform = "translateY(-".concat(
                      n.freezeTop,
                      "px)"
                    ))
                  : (document.querySelector(
                      ".app-scroll-container"
                    ).style.transform = null),
                window.scroll(0, n.freezeTop),
                setTimeout(function () {
                  t("release");
                }, 10);
            },
          },
        });
      },
      z = n("31bd"),
      B = (n("13d5"), n("1276"), n("498a"), n("ddb0"), n("96cf"), n("1da1")),
      D = n("b166"),
      F = n("2cf3"),
      U = function (e, t, n) {
        this.$options.fetch &&
          this.$store.commit("saveState", {
            route: Object(y["g"])(t),
            scroll: window.pageYOffset,
            height: document.documentElement.scrollHeight,
            data: JSON.stringify(this.$data),
          }),
          n();
      },
      Y = function (e) {
        return (
          !(
            !e.constructor.extendOptions ||
            !e.constructor.extendOptions.__INITIAL_STATE__
          ) &&
          (Object.assign(
            e.$data,
            e.constructor.extendOptions.__INITIAL_STATE__
          ),
          (e.constructor.extendOptions.__INITIAL_STATE__ = null),
          !0)
        );
      },
      V = function (e) {
        if (e.$store) {
          var t = e.$store.state.savedData[Object(y["g"])(e.$route)];
          t
            ? (Object.assign(e.$data, JSON.parse(t)),
              e.afterFetch && e.afterFetch())
            : Object(B["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.t0 = Object),
                            (t.t1 = e.$data),
                            (t.next = 4),
                            e.$options.fetch({
                              route: e.$route,
                              store: e.$store,
                            })
                          );
                        case 4:
                          (t.t2 = t.sent),
                            t.t0.assign.call(t.t0, t.t1, t.t2),
                            e.afterFetch && e.afterFetch();
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
        }
      },
      G = {
        data: function () {
          return {};
        },
        computed: Object(R["a"])(
          {
            matchedMedia: function () {
              return this.$store.state.matchedMedia;
            },
            meta: function () {
              return this.$route.matched.reduce(function (e, t) {
                return j["a"].assign(t.meta, e);
              }, {});
            },
            freeze: function () {
              return (
                this.matchedMedia in this.values("sm", "md") &&
                this.$store.state.freeze
              );
            },
            inertia: function () {
              return this.$store.state.inertia;
            },
            sliderKey: function () {
              return this.$store.state.sliderKey;
            },
            lang: function () {
              return this.$route.params.lang;
            },
            ko: function () {
              return "ko" === this.lang;
            },
          },
          j["a"].mapValues(H, function (e, t) {
            return {
              set: function (e) {
                this.$store.commit(t, e);
              },
              get: function () {
                return this.$store.state[t];
              },
            };
          })
        ),
        methods: {
          alert: function (e) {
            "undefined" === typeof window
              ? console.log("alert: " + e)
              : window.alert(e);
          },
          values: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return j["a"].keyBy(t);
          },
          trim: function (e) {
            return j["a"].trim(e);
          },
          enterToBr: function (e) {
            return e ? e.replace(/[\r\n]/g, "<br>") : "";
          },
          unescape: function (e) {
            return e ? e.replace(/&amp;/g, "&") : null;
          },
          shareFb: function () {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=".concat(
                encodeURIComponent(location.href)
              ),
              "share",
              "width=800,height=800"
            );
          },
          shareTw: function () {
            window.open(
              "https://twitter.com/share?url=".concat(
                encodeURIComponent(location.href)
              ),
              "share",
              "width=800,height=800"
            );
          },
          shareIn: function () {
            window.open(
              "https://www.linkedin.com/shareArticle?mini=true&url=".concat(
                encodeURIComponent(location.href)
              ),
              "share",
              "width=800,height=800"
            );
          },
          parseTags: function (e) {
            return e ? e.split(",") : [];
          },
          dateForm: function (e) {
            if (e) {
              var t = Object(F["a"])(e, "yyyy-MM-dd", new Date());
              return Object(D["a"])(t, "PP");
            }
            return "-";
          },
          timeForm: function (e) {
            if (e) {
              var t = Object(F["a"])(e, "yyyy-MM-dd HH:mm", new Date());
              return Object(D["a"])(t, "yyyy.MM.dd HH:mm");
            }
            return "-";
          },
        },
        created: function () {
          var e = this;
          if (this.$options.fetch) {
            var t = Y(this);
            this.$watch("$route", function () {
              return V(e);
            }),
              t ? this.afterFetch && this.afterFetch() : V(this);
          }
        },
        beforeRouteUpdate: U,
        beforeRouteLeave: U,
      },
      K = n("ac49");
    i["a"].config.productionTip = !1;
    var X = function () {
        i["a"].globalsRegistered ||
          ((i["a"].globalsRegistered = !0), i["a"].mixin(G));
        var e = q(),
          t = N();
        K["a"].init(e), Object(z["sync"])(e, t);
        var n = new i["a"]({
          render: function (e) {
            return e($);
          },
          router: t,
          store: e,
        });
        return { app: n, router: t, store: e };
      },
      W = n("b354"),
      J = (n("e25d"), X()),
      Q = J.app,
      Z = J.router,
      ee = J.store,
      te = ["/en/company", "/ko/company"],
      ne = function (e, t) {
        return te.some(function (n) {
          return 0 === e.path.indexOf(n) && 0 === t.path.indexOf(n);
        });
      };
    (window.popStateDetected = !1),
      window.addEventListener("popstate", function () {
        window.popStateDetected = !0;
      }),
      Z.onReady(function () {
        if (window.__INITIAL_STATE__) {
          var e = window.__INITIAL_STATE__.__COMPONENTS_STATE__;
          if (
            ((window.__INITIAL_STATE__.__COMPONENTS_STATE__ = void 0),
            ee.replaceState(window.__INITIAL_STATE__),
            e)
          ) {
            var t = Z.getMatchedComponents();
            if (!t.length) return;
            t.forEach(function (t, n) {
              t.__INITIAL_STATE__ = e[n];
            });
          }
        }
        ee.commit("lang", Z.currentRoute.params.lang),
          W["a"].init(ee),
          w.init(ee),
          _["a"].init(ee),
          Q.$mount("#app");
      }),
      Z.afterEach(function (e, t) {
        var n;
        window.popStateDetected
          ? ((window.popStateDetected = !1), (n = !0), ee.commit("historyPop"))
          : ee.commit("historyPush"),
          ne(e, t) ||
            (ee.commit("scrollLock"),
            i["a"].nextTick(function () {
              var t,
                a,
                o = Object(y["g"])(e);
              if (
                (n
                  ? ((t = ee.state.savedScroll[o] || 0),
                    (a = ee.state.savedHeight[o] || 0))
                  : (t = 0),
                0 === t)
              ) {
                if (!e.hash)
                  return (
                    Q.scrollImmediate && Q.scrollImmediate(t),
                    void ee.commit("scrollRelease")
                  );
                var r = document.querySelector(e.hash);
                (t = r.getBoundingClientRect().top), (a = t);
              }
              var i = setInterval(function () {
                document.documentElement.scrollHeight < a ||
                  (Q.scrollImmediate(t),
                  clearInterval(i),
                  ee.commit("scrollRelease"));
              }, 50);
            }));
      });
  },
  ac49: function (e, t, n) {
    "use strict";
    n("99af"), n("4160"), n("d81d"), n("45fc"), n("498a"), n("159b");
    var a,
      o = n("bc3a"),
      r = n.n(o),
      i = n("4328"),
      c = n.n(i),
      s = n("15a4");
    r.a.interceptors.request.use(function (e) {
      return (
        e.params || (e.params = {}),
        a && (e.params.lang = a.state.lang),
        "get" === e.method && (e.params._ = s["a"].now()),
        e
      );
    });
    var u = function (e) {
        return e && "string" === typeof e ? s["a"].trim(e) : e;
      },
      l = function (e) {
        return void 0 !== e && "" !== e && null !== e;
      },
      d = function (e) {
        return s["a"].pickBy(s["a"].mapValues(s["a"].omit(e, "files"), u), l);
      },
      p = function (e, t, n) {
        var a = d(t);
        return r.a.get(e, s["a"].assign(n, { params: a }));
      },
      f = function (e, t, n) {
        var a = d(t),
          o = "";
        return r.a.get("".concat(o).concat(e), s["a"].assign(n, { params: a }));
      },
      h = function (e, t, n) {
        var a = d(t);
        return r.a.delete(e, s["a"].assign(n, { params: a }));
      },
      m = function (e, t, n) {
        s["a"].assign(n, {
          headers: { "content-type": "multipart/form-data" },
        });
        var a = new FormData();
        return (
          s["a"].forEach(t, function (e, t) {
            "FILE_INPUT_MODEL" === "".concat(e)
              ? (s["a"].forEach(e.add, function (e) {
                  a.append(t, e);
                }),
                s["a"].forEach(e.remove, function (e) {
                  a.append("removeFiles", e);
                }),
                s["a"].forEach(e.exist, function (e) {
                  a.append("existFiles", e.sq);
                }))
              : a.append(t, e);
          }),
          r.a.post(e, a, n)
        );
      },
      v = function (e, t, n) {
        if ("string" === typeof t) return r.a.put(e, t, n);
        var a = d(t);
        return s["a"].some(a, function (e) {
          return "FILE_INPUT_MODEL" === "".concat(e);
        })
          ? m(e, a, n)
          : r.a.put(e, c.a.stringify(a), n);
      },
      k = function (e, t, n) {
        if ("string" === typeof t) return r.a.patch(e, t, n);
        var a = d(t);
        return s["a"].some(a, function (e) {
          return "FILE_INPUT_MODEL" === "".concat(e);
        })
          ? m(e, a, n)
          : r.a.patch(e, c.a.stringify(a), n);
      },
      b = function (e, t, n) {
        if ("string" === typeof t) return r.a.post(e, t, n);
        var a = d(t);
        return s["a"].some(a, function (e) {
          return "FILE_INPUT_MODEL" === "".concat(e);
        })
          ? m(e, a, n)
          : r.a.post(e, c.a.stringify(a), n);
      },
      g = function (e, t, n) {
        var a = d(t);
        return m(e, a, n);
      },
      w = function (e, t) {
        var n = e.querySelectorAll(".error");
        if (n.length) {
          var o = alert;
          "function" === typeof t ? (o = t) : e.classList.add("requested"),
            o(
              n[0].getAttribute("title") ||
                ("ko" === a.state.lang
                  ? "필수항목을 모두 기입해 주세요."
                  : "Please fill in all required fields.")
            );
          var r =
            "INPUT" === n[0].tagName || "TEXTAREA" === n[0].tagName
              ? n[0]
              : n[0].querySelector("input, textarea");
          r && r.focus();
        }
        return 0 === n.length;
      },
      _ = function (e) {
        r.a.defaults.headers.common[e.headerName] = e.token;
      },
      y = function (e) {
        s["a"].forEach(s["a"].groupBy(e.files, "name"), function (t, n) {
          e[n] = {
            toString: function () {
              return "FILE_INPUT_MODEL";
            },
            exist: t,
          };
        });
      },
      C = function (e) {
        if (e)
          return s["a"].isArray(e)
            ? x(e)
            : void s["a"].forEach(
                s["a"].groupBy(e.files, "name"),
                function (t, n) {
                  t && t[0] && (e[n] = t[0].location);
                }
              );
      },
      x = function (e) {
        return s["a"].map(e, C);
      },
      T = function (e) {
        a = e;
      };
    t["a"] = {
      get: p,
      post: b,
      multipart: g,
      put: v,
      patch: k,
      delete: h,
      validation: w,
      fetch: f,
      setCsrf: _,
      fillFile: y,
      flattenFile: C,
      init: T,
      stringify: c.a.stringify,
    };
  },
  b0bc: function (e, t, n) {},
  b354: function (e, t, n) {
    "use strict";
    n("4160"), n("a9e3"), n("ac1f"), n("466d"), n("159b");
    var a,
      o,
      r,
      i = n("15a4"),
      c = n("ed08"),
      s = !1,
      u = Number.MAX_VALUE,
      l = [],
      d = function () {
        var e = window.innerWidth,
          t = window.innerHeight;
        if (o) {
          var n = t - u;
          (u = t), n < 0 && (r = !0), n > 0 && (r = !1);
        }
        var a = window.matchMedia("(min-width: 1600px)").matches
            ? "xxl"
            : window.matchMedia("(min-width: 1440px)").matches
            ? "xl"
            : window.matchMedia("(min-width: 1024px)").matches
            ? "lg"
            : window.matchMedia("(min-width: 768px)").matches
            ? "md"
            : "sm",
          i = matchMedia("(orientation: landscape)").matches
            ? "portrait"
            : "landscape",
          c = document.querySelector(".app-scroll-body"),
          s = c ? c.offsetHeight : t;
        return { section: a, vw: e, vh: t, ch: s, orientation: i, shrink: r };
      },
      p = function () {
        var e = d();
        a.commit("matchedMedia", e.section),
          a.commit("orientation", e.orientation),
          i["a"].forEach(l, function (t) {
            return t(e);
          });
      },
      f = function (e) {
        s ||
          ("undefined" !== typeof window &&
            (Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector),
            (a = e),
            window.addEventListener("resize", p),
            (o =
              !!navigator.userAgent.match(/(phone|pad|android)/i) ||
              (!!navigator.userAgent.match(/mac/i) &&
                navigator.maxTouchPoints >= 5)),
            (r = o),
            a.commit("touch", Object(c["f"])()),
            a.commit("mobile", o),
            (s = !0),
            p()));
      },
      h = function (e) {
        s || f(), e && (l.push(e), e(d()));
      },
      m = function (e) {
        s &&
          i["a"].remove(l, function (t) {
            return t === e;
          });
      };
    t["a"] = { init: f, addListener: h, removeListener: m, resized: p };
  },
  bae6: function (e, t, n) {
    "use strict";
    var a = n("f807"),
      o = n.n(a);
    o.a;
  },
  d159: function (e, t, n) {
    "use strict";
    var a = n("8a67"),
      o = n.n(a);
    o.a;
  },
  d43b: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { class: { on: e.on }, attrs: { popup: "" } }, [
          n("div", { staticClass: "dim" }),
          n(
            "div",
            { staticClass: "holder", style: { height: e.height } },
            [e._t("default")],
            2
          ),
        ]);
      },
      o = [],
      r = {
        name: "Popup",
        data: function () {
          return { on: !1, height: "100vh" };
        },
        methods: {
          documentDown: function (e) {
            e.target.classList.contains("holder") && this.$emit("close");
          },
          keyDown: function (e) {
            "Escape" === e.key && this.$emit("close");
          },
          resized: function () {
            this.height = window.innerHeight + "px";
          },
        },
        mounted: function () {
          document.querySelector(".fixed-holder").appendChild(this.$el),
            (this.on = !0),
            this.$store.commit("freeze"),
            window.addEventListener("resize", this.resized),
            this.resized(),
            document.addEventListener("keydown", this.keyDown),
            document.addEventListener("click", this.documentDown);
        },
        beforeDestroy: function () {
          this.$store.dispatch("release"),
            window.removeEventListener("resize", this.resized),
            document.removeEventListener("keydown", this.keyDown),
            document.removeEventListener("click", this.documentDown);
        },
      },
      i = r,
      c = (n("2563"), n("0c7c")),
      s = Object(c["a"])(i, a, o, !1, null, null, null);
    t["default"] = s.exports;
  },
  d785: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var es_array_filter = __webpack_require__("4de4"),
      es_array_for_each = __webpack_require__("4160"),
      es_array_index_of = __webpack_require__("c975"),
      es_array_map = __webpack_require__("d81d"),
      es_regexp_exec = __webpack_require__("ac1f"),
      es_string_split = __webpack_require__("1276"),
      es_string_fixed = __webpack_require__("c7cd"),
      es_string_sub = __webpack_require__("4c53"),
      web_dom_collections_for_each = __webpack_require__("159b"),
      lodash_default = __webpack_require__("15a4"),
      utils = __webpack_require__("ed08"),
      pattr = {
        title: {
          sm: function () {
            return { r: [0, 1], ty: [0, -85], u: "vh" };
          },
        },
        visualOn: {
          sm: function () {
            return { r: [1, 1.5], op: [0, 1] };
          },
        },
        groupLast: {
          sm: function (e) {
            return { r: [e, e + 1], ty: [20, 0], u: "vh", op: [0, 1] };
          },
        },
        lastUp: {
          sm: function () {
            return { b: [0, 0.4], bty: [0, -30], bu: "vh", bop: [1, 0] };
          },
        },
        lastOff: {
          sm: function () {
            return { b: [0, 0.4], bop: [1, 0] };
          },
        },
        cxrVisual: {
          sm: function () {
            return {
              r: [0, 1, 1.5, 2],
              s: [0.95, 1, 1, 0.95],
              ty: [70, 0, 0, 0],
              u: "vw",
              op: [1, 1, 1, 0.4],
            };
          },
          md: function () {
            return {
              r: [0, 1, 1.5, 2],
              s: [0.95, 1, 1, 0.95],
              ty: [40, 0, 0, 0],
              u: "vh",
              op: [1, 1, 1, 0.4],
            };
          },
        },
        cxrGroup: {
          sm: function (e) {
            return {
              r: [e, e + 1, e + 1.5, e + 2.5],
              ty: [20, 0, 0, -20],
              u: "vh",
              op: [1, 1, 1, 0],
            };
          },
          md: function (e) {
            return {
              r: [e, e + 1, 6 + 0.25 * e, 7 + 0.25 * e],
              ty: [10, 0, 0, -30],
              u: "vh",
              op: [1, 1, 1, 0],
            };
          },
          xl: function (e) {
            return {
              r: [e, e + 1, 6.5, 8],
              ty: [10, 0, 0, -30],
              u: "vh",
              op: [1, 1, 1, 0],
            };
          },
        },
        cxrGroupTitle: {
          sm: function (e) {
            return { r: [e, e + 1], ty: [100, 0], u: "%" };
          },
          md: function (e) {
            return { r: [e, e + 2], ty: [100, 0], u: "%" };
          },
        },
        cxrGroupDesc: {
          sm: function (e) {
            return { r: [e + 0.8, e + 1.5], op: [0, 1] };
          },
          md: function (e) {
            return { r: [e + 1.6, e + 3], op: [0, 1] };
          },
        },
        mmgVisual: {
          sm: function () {
            return {
              r: [0, 1, 1.5, 2],
              s: [0.95, 1, 1, 0.95],
              ty: [80, 10, 0, 0],
              u: "vw",
              op: [1, 1, 1, 0.4],
            };
          },
          md: function () {
            return {
              r: [0, 1, 1.5, 2],
              s: [0.95, 1, 1, 0.95],
              ty: [60, 5, 0, 0],
              u: "vh",
              op: [1, 1, 1, 0.4],
            };
          },
        },
        mmgGroup: {
          sm: function (e) {
            return {
              r: [e, e + 1, e + 1.4, e + 2.2],
              ty: [20, 0, 0, -20],
              u: "vh",
              op: [1, 1, 1, 0],
            };
          },
          md: function (e) {
            return {
              r: [e, e + 1, 6.5 + 0.2 * e, 7 + 0.2 * e],
              ty: [10, 0, 0, -30],
              u: "vh",
              op: [1, 1, 1, 0],
            };
          },
          xl: function (e) {
            return {
              r: [e, e + 1, 7, 8],
              ty: [10, 0, 0, -30],
              u: "vh",
              op: [1, 1, 1, 0],
            };
          },
        },
        mmgGroupTitle: {
          sm: function (e) {
            return { r: [e, e + 0.8], ty: [100, 0], u: "%" };
          },
          md: function (e) {
            return { r: [e, e + 1.6], ty: [100, 0], u: "%" };
          },
        },
        mmgGroupDesc: {
          sm: function (e) {
            return { r: [e + 0.7, e + 1.3], op: [0, 1] };
          },
          md: function (e) {
            return { r: [e + 1.2, e + 2.4], op: [0, 1] };
          },
        },
        ioVisual: {
          sm: function () {
            return {
              r: [0, 1.5],
              ty: [75, 0],
              u: "vh",
              b: [0, 0.4],
              bop: [1, 0],
            };
          },
          lg: function () {
            return {
              r: [0, 1.5],
              ty: [80, 0],
              u: "vh",
              b: [0, 0.4],
              bop: [1, 0],
            };
          },
        },
        ioCover: {
          sm: function () {
            return { r: [1.5, 3], op: [0, 1] };
          },
        },
        ioGroup: {
          sm: function (e) {
            return {
              r: [e, e + 1, e + 1.5, e + 2.5],
              ty: [20, 0, 0, -20],
              u: "vh",
              op: [1, 1, 1, 0],
            };
          },
          md: function (e) {
            return { r: [e, e + 1], ty: [10, 0], u: "vh", op: [] };
          },
        },
        ioGroupTitle: {
          sm: function (e) {
            return { r: [e, e + 1], ty: [100, 0], u: "%" };
          },
          md: function (e) {
            return { r: [e, e + 2], ty: [100, 0], u: "%" };
          },
        },
        ioGroupDesc: {
          sm: function (e) {
            return { r: [e + 0.8, e + 1.5], op: [0, 1] };
          },
          md: function (e) {
            return { r: [e + 1.6, e + 3], op: [0, 1] };
          },
        },
        ioOut: {
          sm: function () {
            return { r: [], ty: [], op: [] };
          },
          md: function () {
            return { r: [9, 10], ty: [0, -30], u: "vh", op: [1, 0] };
          },
        },
      },
      initialized = !1,
      wheelLock = !1,
      parallax_innerHeight,
      store,
      animateId,
      nowY,
      $s = {},
      $e = {},
      sections = [],
      hooks = [],
      cards = [],
      interpolate = function (e, t, n) {
        return t === $s
          ? e[0]
          : t === $e
          ? e[e.length - 1]
          : e[t - 1] + (e[t] - e[t - 1]) * n;
      };
    function getStep(e, t) {
      var n = e.length;
      if (t >= e[n - 1]) return $e;
      if (t <= e[0]) return $s;
      while (n--) if (e[n] >= t && e[n - 1] < t) return n;
    }
    var setTransform = function (e, t, n) {
        var a = "";
        e.pan &&
          (a +=
            " translateX(-" +
            0.01 * (e.scrollWidth - e.offsetWidth) * interpolate(e.pan, t, n) +
            "px)"),
          e.tx && (a += " translateX(" + interpolate(e.tx, t, n) + e.u + ")"),
          e.ty && (a += " translateY(" + interpolate(e.ty, t, n) + e.u + ")"),
          e.sx && (a += " scaleX(" + interpolate(e.sx, t, n) + ")"),
          e.sy && (a += " scaleY(" + interpolate(e.sy, t, n) + ")"),
          e.s && (a += " scale(" + interpolate(e.s, t, n) + ")"),
          a && (e.style.transform = a),
          e.w && (e.style.width = interpolate(e.w, t, n) + e.u),
          e.h && (e.style.height = interpolate(e.h, t, n) + e.u),
          e.op && (e.style.opacity = interpolate(e.op, t, n));
      },
      setTransformB = function (e, t, n) {
        var a = "";
        e.btx && (a += " translateX(" + interpolate(e.btx, t, n) + e.bu + ")"),
          e.bty &&
            (a += " translateY(" + interpolate(e.bty, t, n) + e.bu + ")"),
          e.bsx && (a += " scaleX(" + interpolate(e.bsx, t, n) + ")"),
          e.bsy && (a += " scaleY(" + interpolate(e.bsy, t, n) + ")"),
          e.bs && (a += " scale(" + interpolate(e.bs, t, n) + ")"),
          a && (e.style.transform = a),
          e.bw && (e.style.width = interpolate(e.bw, t, n) + e.bu),
          e.bh && (e.style.height = interpolate(e.bh, t, n) + e.bu),
          e.bop && (e.style.opacity = interpolate(e.bop, t, n));
      },
      makeApplyTransform = function (e, t, n) {
        return function (a) {
          var o = a[e];
          if (o) {
            var r = getStep(o, t);
            if (void 0 !== r) {
              var i =
                r === $s
                  ? 0
                  : r === $e
                  ? 1
                  : (t - o[r - 1]) / (o[r] - o[r - 1]) || 1;
              n(a, r, i);
            }
          }
        };
      },
      applyProgress = function (e, t) {
        if (e.sub || e.pSub) {
          var n = makeApplyTransform("r", t, setTransform);
          e.sub && e.sub.forEach(n), e.pSub && e.pSub.forEach(n);
        }
      },
      applyBottom = function (e, t) {
        if (e.bSub || e.pSub) {
          var n = makeApplyTransform("b", t, setTransformB);
          e.bSub && e.bSub.forEach(n), e.pSub && e.pSub.forEach(n);
        }
      },
      applySection = function (e) {
        var t,
          n,
          a = e.getBoundingClientRect(),
          o = a.top,
          r = a.bottom,
          i = r - parallax_innerHeight,
          c = e.over,
          s = i === c ? 1 : i / c,
          u = r / parallax_innerHeight;
        (o > parallax_innerHeight
          ? (t = "-")
          : i < -parallax_innerHeight
          ? (t = "+")
          : o > 0.75 * parallax_innerHeight
          ? (t = "n1")
          : o > 0.5 * parallax_innerHeight
          ? (t = "n2")
          : o > 0.25 * parallax_innerHeight
          ? (t = "n3")
          : o > 0
          ? (t = "n4")
          : s > 0.9
          ? (t = "i0")
          : s > 0.8
          ? (t = "i1")
          : s > 0.7
          ? (t = "i2")
          : s > 0.6
          ? (t = "i3")
          : s > 0.5
          ? (t = "i4")
          : s > 0.4
          ? (t = "i5")
          : s > 0.3
          ? (t = "i6")
          : s > 0.2
          ? (t = "i7")
          : s > 0.1
          ? (t = "i8")
          : i > 0
          ? (t = "i9")
          : i > 0.25 * -parallax_innerHeight
          ? (t = "x1")
          : i > 0.5 * -parallax_innerHeight
          ? (t = "x2")
          : i > 0.75 * -parallax_innerHeight
          ? (t = "x3")
          : i >= -parallax_innerHeight && (t = "x4"),
        (e.dataset.p = t),
        applyProgress(e, 10 * (1 - s)),
        applyBottom(e, 1 - u),
        o <= 68 &&
          r > 70 &&
          (store.state.navColor !== e.dataset.type ||
            store.state.navBg !== e.dataset.nav) &&
          (store.commit("navColor", e.dataset.type),
          store.commit("navBg", e.dataset.nav),
          e.hasAttribute("hero") ||
            store.commit("subNavColor", e.dataset.type)),
        o < parallax_innerHeight &&
          r > parallax_innerHeight &&
          store.state.goTopColor !== e.dataset.type &&
          store.commit("goTopColor", e.dataset.type),
        "down" !== store.state.scrollDirection ||
          "n1" !== t ||
          !e.rollUp ||
          wheelLock ||
          store.state.scrollLock ||
          rollUp(e),
        e.screen) &&
          (store.state.inertia
            ? ((n =
                o >= 0
                  ? 0
                  : e.fixed
                  ? -o
                  : r < parallax_innerHeight
                  ? r - o - parallax_innerHeight
                  : -o),
              e.screenTop !== n &&
                ((e.screen.style.transform = "translateY(".concat(n, "px)")),
                (e.screenTop = n)))
            : null !== e.screenTop &&
              ((e.screen.style.transform = null), (e.screenTop = null)));
      },
      rollUp = function (e) {
        parallax_rollTo(Math.ceil(nowY + e.getBoundingClientRect().top), 30);
      },
      parallax_rollTo = function (e, t) {
        if (store.state.inertia && !wheelLock && !store.state.scrollLock) {
          var n = Math.abs(nowY - e);
          n < 100 ||
            ((wheelLock = !0),
            clearTimeout(animateId),
            (animateId = Object(utils["a"])(nowY, e, t, function (e) {
              window.scroll(0, e);
            })));
        }
      },
      applyCard = function (e) {
        var t = e.querySelector("li") || e,
          n = t.getBoundingClientRect();
        e.setAttribute(
          "data-card",
          n.top <
            parallax_innerHeight - 0.2 * t.offsetHeight - 0.2 * t.offsetLeft
            ? "in"
            : "out"
        );
      },
      parsePoint = function parsePoint(s, p) {
        s.dataset[p] && (s[p] = s.dataset[p].split(/\s*,\s*/).map(eval));
      },
      initSection = function (e) {
        (e.screen = e.querySelector("[p-screen]")),
          (e.fixed = e.screen && e.screen.classList.contains("fix")),
          (e.rollUp = e.classList.contains("rollUp"));
        var t = e.querySelectorAll("[data-r]");
        t.length &&
          (e.sub = Array.prototype.map.call(t, function (e) {
            return (
              ["r", "tx", "ty", "w", "h", "s", "sx", "sy", "op", "pan"].forEach(
                function (t) {
                  return parsePoint(e, t);
                }
              ),
              (e.u = e.dataset.u || "px"),
              e
            );
          }));
        var n = e.querySelectorAll("[data-b]");
        n.length &&
          (e.bSub = Array.prototype.map.call(n, function (e) {
            return (
              [
                "b",
                "btx",
                "bty",
                "bw",
                "bh",
                "bs",
                "bsx",
                "bop",
                "bsy",
              ].forEach(function (t) {
                return parsePoint(e, t);
              }),
              (e.bu = e.dataset.bu || "px"),
              e
            );
          })),
          initMediaSection(e);
      },
      mediaIndex = { sm: 0, md: 1, lg: 2, xl: 3, xxl: 4 },
      mediaArray = ["sm", "md", "lg", "xl", "xxl"],
      parallax_getMatchedAttr = function (e, t) {
        var n = pattr[t[0]],
          a = mediaIndex[e];
        while (!(mediaArray[a] in n) && a > 0) a -= 1;
        var o = mediaArray[a],
          r =
            mediaArray
              .filter(function (e) {
                return e in n;
              })
              .indexOf(o) + 1;
        return n[o](+t[r]);
      },
      initMediaSection = function (e) {
        var t = e.querySelectorAll("[data-pattr]"),
          n = store.state.matchedMedia;
        t.length &&
          (e.pSub = Array.prototype.map.call(t, function (e) {
            var t = e.dataset.pattr.split("|");
            return Object.assign(e, parallax_getMatchedAttr(n, t)), e;
          }));
      },
      checkMedia = function () {
        sections.forEach(initSection);
      },
      setOver = function (e) {
        e.over = e.offsetHeight - parallax_innerHeight;
      },
      tick = function (e) {
        (nowY = e),
          sections.forEach(applySection),
          cards.forEach(applyCard),
          hooks.forEach(function (e) {
            return e();
          });
      },
      addHook = function (e) {
        initialized && (hooks.push(e), e());
      },
      parallax_removeHook = function (e) {
        initialized &&
          lodash_default["a"].remove(hooks, function (t) {
            return t === e;
          });
      },
      add = function (e) {
        initialized &&
          (sections.push(e), initSection(e), setOver(e), applySection(e));
      },
      parallax_remove = function (e) {
        initialized &&
          lodash_default["a"].remove(sections, function (t) {
            return t === e;
          });
      },
      addCard = function (e) {
        initialized && (cards.push(e), applyCard(e));
      },
      parallax_removeCard = function (e) {
        initialized &&
          lodash_default["a"].remove(cards, function (t) {
            return t === e;
          });
      },
      resized = function () {
        (parallax_innerHeight = document.querySelector(".meter").offsetHeight),
          sections.forEach(setOver),
          tick();
      },
      wheel = function (e) {
        wheelLock && e.preventDefault();
      },
      wheelRelease = function () {
        wheelLock = !1;
      },
      init = function (e) {
        initialized ||
          ("undefined" !== typeof window &&
            ((store = e),
            window.addEventListener("resize", resized),
            window.addEventListener("wheel", wheel, { passive: !1 }),
            resized(),
            (initialized = !0)));
      },
      parallax = (__webpack_exports__["a"] = {
        init: init,
        tick: tick,
        add: add,
        remove: parallax_remove,
        checkMedia: checkMedia,
        addHook: addHook,
        removeHook: parallax_removeHook,
        addCard: addCard,
        removeCard: parallax_removeCard,
        wheelRelease: wheelRelease,
        rollTo: parallax_rollTo,
      });
  },
  e7c9: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("popup", { attrs: { "newsletter-popup": "" } }, [
          n("div", { staticClass: "panel" }, [
            n("a", {
              staticClass: "close",
              on: {
                click: function (t) {
                  return e.$emit("close");
                },
              },
            }),
            n("p", { staticClass: "ttl" }, [e._v("Newsletter")]),
            n(
              "div",
              {
                staticClass: "email",
                class: {
                  success: "Y" === e.emailResult.result,
                  fail: "N" === e.emailResult.result,
                },
              },
              [
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.email,
                      expression: "email",
                    },
                  ],
                  domProps: { value: e.email },
                  on: {
                    blur: e.onBlur,
                    focus: e.onFocus,
                    keydown: function (t) {
                      return !t.type.indexOf("key") &&
                        e._k(t.keyCode, "enter", 13, t.key, "Enter")
                        ? null
                        : e.subscribe.apply(null, arguments);
                    },
                    input: function (t) {
                      t.target.composing || (e.email = t.target.value);
                    },
                  },
                }),
                n("div", { staticClass: "placeholder" }, [
                  e._v("Your email address"),
                ]),
                n("p", { staticClass: "result" }, [
                  e._v(e._s(e.emailResult.msg)),
                ]),
              ]
            ),
            n("div", { staticClass: "tc" }, [
              n(
                "a",
                { staticClass: "x-btn blue lng", on: { click: e.subscribe } },
                [e.ko ? [e._v("구독하기")] : [e._v("Subscribe")]],
                2
              ),
            ]),
          ]),
        ]);
      },
      o = [],
      r = (n("96cf"), n("1da1")),
      i = n("d43b"),
      c = n("ac49"),
      s = {
        name: "NewsletterPopup",
        components: { Popup: i["default"] },
        data: function () {
          return {
            email: "",
            emailStored: "",
            emailResult: { result: "", msg: "" },
          };
        },
        methods: {
          onFocus: function () {
            (this.emailResult.result = ""),
              (this.emailResult.msg = ""),
              (this.email = this.emailStored);
          },
          onBlur: function () {
            (this.emailStored = this.email), (this.email = "");
          },
          subscribe: function () {
            var e = this;
            return Object(r["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((n = e.email || e.emailStored), n)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (
                            (t.prev = 3),
                            (t.next = 6),
                            c["a"].post("/api/subscribe", { email: n })
                          );
                        case 6:
                          (e.emailResult.result = "Y"),
                            (e.emailResult.msg = e.ko
                              ? "구독신청이 완료되었습니다! 감사합니다."
                              : "We’ve signed you up! Thank you."),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t["catch"](3)),
                            (a = t.t0.response),
                            a &&
                              ((e.emailResult.result = "N"),
                              (e.emailResult.msg = a.data.message));
                        case 14:
                          (e.emailStored = ""), (e.email = "");
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 10]]
                );
              })
            )();
          },
        },
      },
      u = s,
      l = (n("7911"), n("0c7c")),
      d = Object(l["a"])(u, a, o, !1, null, null, null);
    t["default"] = d.exports;
  },
  ed08: function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return o;
    }),
      n.d(t, "e", function () {
        return r;
      }),
      n.d(t, "h", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return p;
      }),
      n.d(t, "c", function () {
        return f;
      }),
      n.d(t, "g", function () {
        return h;
      });
    n("99af"),
      n("c975"),
      n("a9e3"),
      n("9129"),
      n("b680"),
      n("ac1f"),
      n("5319"),
      n("1276");
    var a = n("a5d9"),
      o = function () {
        return "undefined" !== typeof window && "ontouchstart" in window;
      },
      r = function (e) {
        return window.pageYOffset + Math.ceil(e.getBoundingClientRect().top);
      },
      i = function (e, t) {
        var n = new Date();
        n.setFullYear(n.getFullYear() + 1),
          (document.cookie =
            e +
            "=" +
            encodeURIComponent(t) +
            "; path=/; EXPIRES=" +
            n.toUTCString());
      },
      c = function (e) {
        var t = null;
        if (document.cookie) {
          var n = document.cookie.split(e + "=");
          if (n.length >= 2) {
            var a = n[1].split(";");
            t = decodeURIComponent(a[0]);
          }
        }
        return t;
      },
      s = {},
      u = 0,
      l = function (e, t, n, o) {
        var r = 0,
          i = u++;
        s[i] = !0;
        var c = function c() {
          try {
            (r += 1), o(Object(a["easeOutQuint"])(r, e, t - e, n), r >= n);
          } catch (u) {
            s[i] = !1;
          }
          r >= n && (s[i] = !1), s[i] && requestAnimationFrame(c);
        };
        return requestAnimationFrame(c), i;
      },
      d = function (e, t) {
        e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
      },
      p = function (e, t) {
        if (e.closest) return e.closest(t);
        var n = e;
        while (n) {
          if (n.matches(t)) return n;
          if (n === document.body) return null;
          n = n.parentNode;
        }
        return null;
      },
      f = function (e) {
        return e.parentNode
          ? Array.prototype.indexOf.call(e.parentNode.childNodes, e)
          : -1;
      },
      h = function (e) {
        return e.path + "?" + JSON.stringify(e.query);
      };
  },
  f01c: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("popup", { attrs: { "contact-us-popup": "" } }, [
          n("div", { staticClass: "panel" }, [
            n("a", {
              staticClass: "close",
              on: {
                click: function (t) {
                  return e.$emit("close");
                },
              },
            }),
            n("p", { staticClass: "ttl" }, [e._v("Contact us")]),
            n("ul", [
              n("li", [
                n("label", { staticClass: "radio" }, [
                  n("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.email,
                        expression: "email",
                      },
                    ],
                    attrs: { type: "radio", value: "contact@lunit.io" },
                    domProps: { checked: e._q(e.email, "contact@lunit.io") },
                    on: {
                      change: function (t) {
                        e.email = "contact@lunit.io";
                      },
                    },
                  }),
                  n("i"),
                  e._v("General - contact@lunit.io"),
                ]),
              ]),
              n("li", [
                n("label", { staticClass: "radio" }, [
                  n("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.email,
                        expression: "email",
                      },
                    ],
                    attrs: { type: "radio", value: "ir@lunit.io" },
                    domProps: { checked: e._q(e.email, "ir@lunit.io") },
                    on: {
                      change: function (t) {
                        e.email = "ir@lunit.io";
                      },
                    },
                  }),
                  n("i"),
                  e._v("Investment - ir@lunit.io"),
                ]),
              ]),
              n("li", [
                n("label", { staticClass: "radio" }, [
                  n("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.email,
                        expression: "email",
                      },
                    ],
                    attrs: { type: "radio", value: "media@lunit.io" },
                    domProps: { checked: e._q(e.email, "media@lunit.io") },
                    on: {
                      change: function (t) {
                        e.email = "media@lunit.io";
                      },
                    },
                  }),
                  n("i"),
                  e._v("Media - media@lunit.io"),
                ]),
              ]),
              n("li", [
                n("label", { staticClass: "radio" }, [
                  n("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.email,
                        expression: "email",
                      },
                    ],
                    attrs: { type: "radio", value: "partner@lunit.io" },
                    domProps: { checked: e._q(e.email, "partner@lunit.io") },
                    on: {
                      change: function (t) {
                        e.email = "partner@lunit.io";
                      },
                    },
                  }),
                  n("i"),
                  e._v("Partnership - partner@lunit.io"),
                ]),
              ]),
            ]),
            n("div", { staticClass: "tc" }, [
              n(
                "a",
                {
                  staticClass: "x-btn blue lng",
                  attrs: { href: "mailto:" + e.email },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                },
                [e.ko ? [e._v("보내기")] : [e._v("Send")]],
                2
              ),
            ]),
          ]),
        ]);
      },
      o = [],
      r = n("d43b"),
      i = {
        name: "ContactUsPopup",
        components: { Popup: r["default"] },
        data: function () {
          return { email: "contact@lunit.io" };
        },
      },
      c = i,
      s = (n("d159"), n("0c7c")),
      u = Object(s["a"])(c, a, o, !1, null, null, null);
    t["default"] = u.exports;
  },
  f807: function (e, t, n) {},
});
//# sourceMappingURL=main.6fed274a.js.map
