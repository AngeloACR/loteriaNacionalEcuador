export const environment = {
  production: true,

  inviteLink: 'https://launch.exvin.com/iv',
  source: 'https://api.exvin.com',
  returnUrl: 'https://exvin.com/ck/ty',
  stripeSrc: 'https://js.stripe.com/v3/',
  stripePK:
    'pk_live_51MlzOKD1yDP3IUA38uVemcue1TxyUu5zLJOETAFV4DVnpBzsOipYZVYRpITh3h7FbslrkVkyw71Epuqlmp1XWi6s00u129I2TU',

  dir: '../browser',
  googleAnalyticsSrc: `https://www.googletagmanager.com/gtag/js?id=G-GLE8KGFX5W`,
  trackingCodes: {
    fb: {
      script: `
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "811828510163242");
      fbq("track", "PageView");
    `,
      noscript: `<img loading="lazy"
      height="1"
      width="1"
      style="display: none"
      src="https://www.facebook.com/tr?id=811828510163242&ev=PageView&noscript=1"
  />`,
    },
    tiktok: `
    (function (e, t, n) {
      if (e.snaptr) return;
      var a = (e.snaptr = function () {
        a.handleRequest
          ? a.handleRequest.apply(a, arguments)
          : a.queue.push(arguments);
      });
      a.queue = [];
      var s = "script";
      r = t.createElement(s);
      r.async = !0;
      r.src = n;
      var u = t.getElementsByTagName(s)[0];
      u.parentNode.insertBefore(r, u);
    })(window, document, "https://sc-static.net/scevent.min.js");

    snaptr("init", "1095c23c-748d-4a1a-8810-2b862fbc2103", {
      user_email: "ceo@exvin.com",
    });

    snaptr("track", "PAGE_VIEW");
  `,
    snapchat: `
    !(function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = (w[t] = w[t] || []);
      (ttq.methods = [
        "page",
        "track",
        "identify",
        "instances",
        "debug",
        "on",
        "off",
        "once",
        "ready",
        "alias",
        "group",
        "enableCookie",
        "disableCookie",
      ]),
        (ttq.setAndDefer = function (t, e) {
          t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        });
      for (var i = 0; i < ttq.methods.length; i++)
        ttq.setAndDefer(ttq, ttq.methods[i]);
      (ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
          ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      }),
        (ttq.load = function (e, n) {
          var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
          (ttq._i = ttq._i || {}),
            (ttq._i[e] = []),
            (ttq._i[e]._u = i),
            (ttq._t = ttq._t || {}),
            (ttq._t[e] = +new Date()),
            (ttq._o = ttq._o || {}),
            (ttq._o[e] = n || {});
          var o = document.createElement("script");
          (o.type = "text/javascript"),
            (o.async = !0),
            (o.src = i + "?sdkid=" + e + "&lib=" + t);
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(o, a);
        });

      ttq.load("CIBM693C77U441D15NG0");
      ttq.page();
    })(window, document, "ttq");
  `,
    googleAnalytics: `  window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-GLE8KGFX5W');
  `,
  },
};
