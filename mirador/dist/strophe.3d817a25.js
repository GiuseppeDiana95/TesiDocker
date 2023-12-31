// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"strophe.js":[function(require,module,exports) {
var define;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */

/*
    This program is distributed under the terms of the MIT license.
    Please see the LICENSE file for details.

    Copyright 2006-2008, OGG, LLC
*/

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

!function (t, e) {
  if ("function" == typeof define && define.amd) define([], e);else {
    var n = e();
    t.Strophe2 = n.Strophe2, t.$build = n.$build, t.$iq = n.$iq, t.$msg = n.$msg, t.$pres = n.$pres, t.SHA1 = n.SHA1, t.MD5 = n.MD5, t.b64_hmac_sha1 = n.b64_hmac_sha1, t.b64_sha1 = n.b64_sha1, t.str_hmac_sha1 = n.str_hmac_sha1, t.str_sha1 = n.str_sha1;
  }
}(this, function () {
  var t, e, n;
  return function (i) {
    function s(t, e) {
      return v.call(t, e);
    }
    function r(t, e) {
      var n,
        i,
        s,
        r,
        o,
        a,
        h,
        c,
        u,
        l,
        d,
        _,
        f = e && e.split("/"),
        p = b.map,
        m = p && p["*"] || {};
      if (t) {
        for (t = t.split("/"), o = t.length - 1, b.nodeIdCompat && x.test(t[o]) && (t[o] = t[o].replace(x, "")), "." === t[0].charAt(0) && f && (_ = f.slice(0, f.length - 1), t = _.concat(t)), u = 0; u < t.length; u++) if (d = t[u], "." === d) t.splice(u, 1), u -= 1;else if (".." === d) {
          if (0 === u || 1 === u && ".." === t[2] || ".." === t[u - 1]) continue;
          u > 0 && (t.splice(u - 1, 2), u -= 2);
        }
        t = t.join("/");
      }
      if ((f || m) && p) {
        for (n = t.split("/"), u = n.length; u > 0; u -= 1) {
          if (i = n.slice(0, u).join("/"), f) for (l = f.length; l > 0; l -= 1) if (s = p[f.slice(0, l).join("/")], s && (s = s[i])) {
            r = s, a = u;
            break;
          }
          if (r) break;
          !h && m && m[i] && (h = m[i], c = u);
        }
        !r && h && (r = h, a = c), r && (n.splice(0, a, r), t = n.join("/"));
      }
      return t;
    }
    function o(t, e) {
      return function () {
        var n = T.call(arguments, 0);
        return "string" != typeof n[0] && 1 === n.length && n.push(null), _f.apply(i, n.concat([t, e]));
      };
    }
    function a(t) {
      return function (e) {
        return r(e, t);
      };
    }
    function h(t) {
      return function (e) {
        g[t] = e;
      };
    }
    function c(t) {
      if (s(S, t)) {
        var e = S[t];
        delete S[t], y[t] = !0, _.apply(i, e);
      }
      if (!s(g, t) && !s(y, t)) throw new Error("No " + t);
      return g[t];
    }
    function u(t) {
      var e,
        n = t ? t.indexOf("!") : -1;
      return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t];
    }
    function l(t) {
      return t ? u(t) : [];
    }
    function d(t) {
      return function () {
        return b && b.config && b.config[t] || {};
      };
    }
    var _,
      _f,
      p,
      m,
      g = {},
      S = {},
      b = {},
      y = {},
      v = Object.prototype.hasOwnProperty,
      T = [].slice,
      x = /\.js$/;
    p = function p(t, e) {
      var n,
        i = u(t),
        s = i[0],
        o = e[1];
      return t = i[1], s && (s = r(s, o), n = c(s)), s ? t = n && n.normalize ? n.normalize(t, a(o)) : r(t, o) : (t = r(t, o), i = u(t), s = i[0], t = i[1], s && (n = c(s))), {
        f: s ? s + "!" + t : t,
        n: t,
        pr: s,
        p: n
      };
    }, m = {
      require: function require(t) {
        return o(t);
      },
      exports: function exports(t) {
        var e = g[t];
        return "undefined" != typeof e ? e : g[t] = {};
      },
      module: function module(t) {
        return {
          id: t,
          uri: "",
          exports: g[t],
          config: d(t)
        };
      }
    }, _ = function _(t, e, n, r) {
      var a,
        u,
        d,
        _,
        f,
        b,
        v,
        T = [],
        x = _typeof(n);
      if (r = r || t, b = l(r), "undefined" === x || "function" === x) {
        for (e = !e.length && n.length ? ["require", "exports", "module"] : e, f = 0; f < e.length; f += 1) if (_ = p(e[f], b), u = _.f, "require" === u) T[f] = m.require(t);else if ("exports" === u) T[f] = m.exports(t), v = !0;else if ("module" === u) a = T[f] = m.module(t);else if (s(g, u) || s(S, u) || s(y, u)) T[f] = c(u);else {
          if (!_.p) throw new Error(t + " missing " + u);
          _.p.load(_.n, o(r, !0), h(u), {}), T[f] = g[u];
        }
        d = n ? n.apply(g[t], T) : void 0, t && (a && a.exports !== i && a.exports !== g[t] ? g[t] = a.exports : d === i && v || (g[t] = d));
      } else t && (g[t] = n);
    }, t = e = _f = function f(t, e, n, s, r) {
      if ("string" == typeof t) return m[t] ? m[t](e) : c(p(t, l(e)).f);
      if (!t.splice) {
        if (b = t, b.deps && _f(b.deps, b.callback), !e) return;
        e.splice ? (t = e, e = n, n = null) : t = i;
      }
      return e = e || function () {}, "function" == typeof n && (n = s, s = r), s ? _(i, t, e, n) : setTimeout(function () {
        _(i, t, e, n);
      }, 4), _f;
    }, _f.config = function (t) {
      return _f(t);
    }, t._defined = g, n = function n(t, e, _n) {
      if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
      e.splice || (_n = e, e = []), s(g, t) || s(S, t) || (S[t] = [t, e, _n]);
    }, n.amd = {
      jQuery: !0
    };
  }(), n("node_modules/almond/almond.js", function () {}), function (t, e) {
    return "function" == typeof n && n.amd ? void n("Strophe2-polyfill", [], function () {
      return e(t);
    }) : e(t);
  }(this, function (t) {
    Function.prototype.bind || (Function.prototype.bind = function (t) {
      var e = this,
        n = Array.prototype.slice,
        i = Array.prototype.concat,
        s = n.call(arguments, 1);
      return function () {
        return e.apply(t ? t : this, i.call(s, n.call(arguments, 0)));
      };
    }), Array.isArray || (Array.isArray = function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
      var e = this.length,
        n = Number(arguments[1]) || 0;
      for (n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += e); n < e; n++) if (n in this && this[n] === t) return n;
      return -1;
    }), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
      var n, i;
      if (null === this) throw new TypeError(" this is null or not defined");
      var s = Object(this),
        r = s.length >>> 0;
      if ("function" != typeof t) throw new TypeError(t + " is not a function");
      for (arguments.length > 1 && (n = e), i = 0; i < r;) {
        var o;
        i in s && (o = s[i], t.call(n, o, i, s)), i++;
      }
    });
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    t.btoa || (t.btoa = function (t) {
      var n,
        i,
        s,
        r,
        o,
        a,
        h,
        c = "",
        u = 0;
      do n = t.charCodeAt(u++), i = t.charCodeAt(u++), s = t.charCodeAt(u++), r = n >> 2, o = (3 & n) << 4 | i >> 4, a = (15 & i) << 2 | s >> 6, h = 63 & s, isNaN(i) ? (o = (3 & n) << 4, a = h = 64) : isNaN(s) && (h = 64), c = c + e.charAt(r) + e.charAt(o) + e.charAt(a) + e.charAt(h); while (u < t.length);
      return c;
    }), t.atob || (t.atob = function (t) {
      var n,
        i,
        s,
        r,
        o,
        a,
        h,
        c = "",
        u = 0;
      t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do r = e.indexOf(t.charAt(u++)), o = e.indexOf(t.charAt(u++)), a = e.indexOf(t.charAt(u++)), h = e.indexOf(t.charAt(u++)), n = r << 2 | o >> 4, i = (15 & o) << 4 | a >> 2, s = (3 & a) << 6 | h, c += String.fromCharCode(n), 64 !== a && (c += String.fromCharCode(i)), 64 !== h && (c += String.fromCharCode(s)); while (u < t.length);
      return c;
    });
  }), function (t, e) {
    "function" == typeof n && n.amd ? n("Strophe2-sha1", [], function () {
      return e();
    }) : t.SHA1 = e();
  }(this, function () {
    function t(t, i) {
      t[i >> 5] |= 128 << 24 - i % 32, t[(i + 64 >> 9 << 4) + 15] = i;
      var o,
        a,
        h,
        c,
        u,
        l,
        d,
        _,
        f = new Array(80),
        p = 1732584193,
        m = -271733879,
        g = -1732584194,
        S = 271733878,
        b = -1009589776;
      for (o = 0; o < t.length; o += 16) {
        for (c = p, u = m, l = g, d = S, _ = b, a = 0; a < 80; a++) a < 16 ? f[a] = t[o + a] : f[a] = r(f[a - 3] ^ f[a - 8] ^ f[a - 14] ^ f[a - 16], 1), h = s(s(r(p, 5), e(a, m, g, S)), s(s(b, f[a]), n(a))), b = S, S = g, g = r(m, 30), m = p, p = h;
        p = s(p, c), m = s(m, u), g = s(g, l), S = s(S, d), b = s(b, _);
      }
      return [p, m, g, S, b];
    }
    function e(t, e, n, i) {
      return t < 20 ? e & n | ~e & i : t < 40 ? e ^ n ^ i : t < 60 ? e & n | e & i | n & i : e ^ n ^ i;
    }
    function n(t) {
      return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
    }
    function i(e, n) {
      var i = o(e);
      i.length > 16 && (i = t(i, 8 * e.length));
      for (var s = new Array(16), r = new Array(16), a = 0; a < 16; a++) s[a] = 909522486 ^ i[a], r[a] = 1549556828 ^ i[a];
      var h = t(s.concat(o(n)), 512 + 8 * n.length);
      return t(r.concat(h), 672);
    }
    function s(t, e) {
      var n = (65535 & t) + (65535 & e),
        i = (t >> 16) + (e >> 16) + (n >> 16);
      return i << 16 | 65535 & n;
    }
    function r(t, e) {
      return t << e | t >>> 32 - e;
    }
    function o(t) {
      for (var e = [], n = 255, i = 0; i < 8 * t.length; i += 8) e[i >> 5] |= (t.charCodeAt(i / 8) & n) << 24 - i % 32;
      return e;
    }
    function a(t) {
      for (var e = "", n = 255, i = 0; i < 32 * t.length; i += 8) e += String.fromCharCode(t[i >> 5] >>> 24 - i % 32 & n);
      return e;
    }
    function h(t) {
      for (var e, n, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = "", r = 0; r < 4 * t.length; r += 3) for (e = (t[r >> 2] >> 8 * (3 - r % 4) & 255) << 16 | (t[r + 1 >> 2] >> 8 * (3 - (r + 1) % 4) & 255) << 8 | t[r + 2 >> 2] >> 8 * (3 - (r + 2) % 4) & 255, n = 0; n < 4; n++) s += 8 * r + 6 * n > 32 * t.length ? "=" : i.charAt(e >> 6 * (3 - n) & 63);
      return s;
    }
    return {
      b64_hmac_sha1: function b64_hmac_sha1(t, e) {
        return h(i(t, e));
      },
      b64_sha1: function b64_sha1(e) {
        return h(t(o(e), 8 * e.length));
      },
      binb2str: a,
      core_hmac_sha1: i,
      str_hmac_sha1: function str_hmac_sha1(t, e) {
        return a(i(t, e));
      },
      str_sha1: function str_sha1(e) {
        return a(t(o(e), 8 * e.length));
      }
    };
  }), function (t, e) {
    "function" == typeof n && n.amd ? n("Strophe2-md5", [], function () {
      return e();
    }) : t.MD5 = e();
  }(this, function () {
    var t = function t(_t, e) {
        var n = (65535 & _t) + (65535 & e),
          i = (_t >> 16) + (e >> 16) + (n >> 16);
        return i << 16 | 65535 & n;
      },
      e = function e(t, _e) {
        return t << _e | t >>> 32 - _e;
      },
      n = function n(t) {
        for (var e = [], n = 0; n < 8 * t.length; n += 8) e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
        return e;
      },
      i = function i(t) {
        for (var e = "", n = 0; n < 32 * t.length; n += 8) e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
        return e;
      },
      s = function s(t) {
        for (var e = "0123456789abcdef", n = "", i = 0; i < 4 * t.length; i++) n += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
        return n;
      },
      r = function r(n, i, s, _r, o, a) {
        return t(e(t(t(i, n), t(_r, a)), o), s);
      },
      o = function o(t, e, n, i, s, _o, a) {
        return r(e & n | ~e & i, t, e, s, _o, a);
      },
      a = function a(t, e, n, i, s, o, _a) {
        return r(e & i | n & ~i, t, e, s, o, _a);
      },
      h = function h(t, e, n, i, s, o, a) {
        return r(e ^ n ^ i, t, e, s, o, a);
      },
      c = function c(t, e, n, i, s, o, a) {
        return r(n ^ (e | ~i), t, e, s, o, a);
      },
      u = function u(e, n) {
        e[n >> 5] |= 128 << n % 32, e[(n + 64 >>> 9 << 4) + 14] = n;
        for (var i, s, r, u, l = 1732584193, d = -271733879, _ = -1732584194, f = 271733878, p = 0; p < e.length; p += 16) i = l, s = d, r = _, u = f, l = o(l, d, _, f, e[p + 0], 7, -680876936), f = o(f, l, d, _, e[p + 1], 12, -389564586), _ = o(_, f, l, d, e[p + 2], 17, 606105819), d = o(d, _, f, l, e[p + 3], 22, -1044525330), l = o(l, d, _, f, e[p + 4], 7, -176418897), f = o(f, l, d, _, e[p + 5], 12, 1200080426), _ = o(_, f, l, d, e[p + 6], 17, -1473231341), d = o(d, _, f, l, e[p + 7], 22, -45705983), l = o(l, d, _, f, e[p + 8], 7, 1770035416), f = o(f, l, d, _, e[p + 9], 12, -1958414417), _ = o(_, f, l, d, e[p + 10], 17, -42063), d = o(d, _, f, l, e[p + 11], 22, -1990404162), l = o(l, d, _, f, e[p + 12], 7, 1804603682), f = o(f, l, d, _, e[p + 13], 12, -40341101), _ = o(_, f, l, d, e[p + 14], 17, -1502002290), d = o(d, _, f, l, e[p + 15], 22, 1236535329), l = a(l, d, _, f, e[p + 1], 5, -165796510), f = a(f, l, d, _, e[p + 6], 9, -1069501632), _ = a(_, f, l, d, e[p + 11], 14, 643717713), d = a(d, _, f, l, e[p + 0], 20, -373897302), l = a(l, d, _, f, e[p + 5], 5, -701558691), f = a(f, l, d, _, e[p + 10], 9, 38016083), _ = a(_, f, l, d, e[p + 15], 14, -660478335), d = a(d, _, f, l, e[p + 4], 20, -405537848), l = a(l, d, _, f, e[p + 9], 5, 568446438), f = a(f, l, d, _, e[p + 14], 9, -1019803690), _ = a(_, f, l, d, e[p + 3], 14, -187363961), d = a(d, _, f, l, e[p + 8], 20, 1163531501), l = a(l, d, _, f, e[p + 13], 5, -1444681467), f = a(f, l, d, _, e[p + 2], 9, -51403784), _ = a(_, f, l, d, e[p + 7], 14, 1735328473), d = a(d, _, f, l, e[p + 12], 20, -1926607734), l = h(l, d, _, f, e[p + 5], 4, -378558), f = h(f, l, d, _, e[p + 8], 11, -2022574463), _ = h(_, f, l, d, e[p + 11], 16, 1839030562), d = h(d, _, f, l, e[p + 14], 23, -35309556), l = h(l, d, _, f, e[p + 1], 4, -1530992060), f = h(f, l, d, _, e[p + 4], 11, 1272893353), _ = h(_, f, l, d, e[p + 7], 16, -155497632), d = h(d, _, f, l, e[p + 10], 23, -1094730640), l = h(l, d, _, f, e[p + 13], 4, 681279174), f = h(f, l, d, _, e[p + 0], 11, -358537222), _ = h(_, f, l, d, e[p + 3], 16, -722521979), d = h(d, _, f, l, e[p + 6], 23, 76029189), l = h(l, d, _, f, e[p + 9], 4, -640364487), f = h(f, l, d, _, e[p + 12], 11, -421815835), _ = h(_, f, l, d, e[p + 15], 16, 530742520), d = h(d, _, f, l, e[p + 2], 23, -995338651), l = c(l, d, _, f, e[p + 0], 6, -198630844), f = c(f, l, d, _, e[p + 7], 10, 1126891415), _ = c(_, f, l, d, e[p + 14], 15, -1416354905), d = c(d, _, f, l, e[p + 5], 21, -57434055), l = c(l, d, _, f, e[p + 12], 6, 1700485571), f = c(f, l, d, _, e[p + 3], 10, -1894986606), _ = c(_, f, l, d, e[p + 10], 15, -1051523), d = c(d, _, f, l, e[p + 1], 21, -2054922799), l = c(l, d, _, f, e[p + 8], 6, 1873313359), f = c(f, l, d, _, e[p + 15], 10, -30611744), _ = c(_, f, l, d, e[p + 6], 15, -1560198380), d = c(d, _, f, l, e[p + 13], 21, 1309151649), l = c(l, d, _, f, e[p + 4], 6, -145523070), f = c(f, l, d, _, e[p + 11], 10, -1120210379), _ = c(_, f, l, d, e[p + 2], 15, 718787259), d = c(d, _, f, l, e[p + 9], 21, -343485551), l = t(l, i), d = t(d, s), _ = t(_, r), f = t(f, u);
        return [l, d, _, f];
      },
      l = {
        hexdigest: function hexdigest(t) {
          return s(u(n(t), 8 * t.length));
        },
        hash: function hash(t) {
          return i(u(n(t), 8 * t.length));
        }
      };
    return l;
  }), function (t, e) {
    "function" == typeof n && n.amd ? n("Strophe2-utils", [], function () {
      return e();
    }) : t.Strophe2Utils = e();
  }(this, function () {
    var t = {
      utf16to8: function utf16to8(t) {
        var e,
          n,
          i = "",
          s = t.length;
        for (e = 0; e < s; e++) n = t.charCodeAt(e), n >= 0 && n <= 127 ? i += t.charAt(e) : n > 2047 ? (i += String.fromCharCode(224 | n >> 12 & 15), i += String.fromCharCode(128 | n >> 6 & 63), i += String.fromCharCode(128 | n >> 0 & 63)) : (i += String.fromCharCode(192 | n >> 6 & 31), i += String.fromCharCode(128 | n >> 0 & 63));
        return i;
      },
      addCookies: function addCookies(t) {
        var e, n, i, s, r, o, a;
        for (e in t || {}) r = "", o = "", a = "", n = t[e], i = "object" == _typeof(n), s = escape(unescape(i ? n.value : n)), i && (r = n.expires ? ";expires=" + n.expires : "", o = n.domain ? ";domain=" + n.domain : "", a = n.path ? ";path=" + n.path : ""), document.cookie = e + "=" + s + r + o + a;
      }
    };
    return t;
  }), function (t, e) {
    if ("function" == typeof n && n.amd) n("Strophe2-core", ["Strophe2-sha1", "Strophe2-md5", "Strophe2-utils"], function () {
      return e.apply(this, arguments);
    });else {
      var i = e(t.SHA1, t.MD5, t.Strophe2Utils);
      t.Strophe2 = i.Strophe2, t.$build = i.$build, t.$iq = i.$iq, t.$msg = i.$msg, t.$pres = i.$pres, t.SHA1 = i.SHA1, t.MD5 = i.MD5, t.b64_hmac_sha1 = i.SHA1.b64_hmac_sha1, t.b64_sha1 = i.SHA1.b64_sha1, t.str_hmac_sha1 = i.SHA1.str_hmac_sha1, t.str_sha1 = i.SHA1.str_sha1;
    }
  }(this, function (t, e, n) {
    function i(t, e) {
      return new a.Builder(t, e);
    }
    function s(t) {
      return new a.Builder("message", t);
    }
    function r(t) {
      return new a.Builder("iq", t);
    }
    function o(t) {
      return new a.Builder("presence", t);
    }
    var a;
    return a = {
      VERSION: "1.2.14",
      NS: {
        HTTPBIND: "http://jabber.org/protocol/httpbind",
        BOSH: "urn:xmpp:xbosh",
        CLIENT: "jabber:client",
        AUTH: "jabber:iq:auth",
        ROSTER: "jabber:iq:roster",
        PROFILE: "jabber:iq:profile",
        DISCO_INFO: "http://jabber.org/protocol/disco#info",
        DISCO_ITEMS: "http://jabber.org/protocol/disco#items",
        MUC: "http://jabber.org/protocol/muc",
        SASL: "urn:ietf:params:xml:ns:xmpp-sasl",
        STREAM: "http://etherx.jabber.org/streams",
        FRAMING: "urn:ietf:params:xml:ns:xmpp-framing",
        BIND: "urn:ietf:params:xml:ns:xmpp-bind",
        SESSION: "urn:ietf:params:xml:ns:xmpp-session",
        VERSION: "jabber:iq:version",
        STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas",
        XHTML_IM: "http://jabber.org/protocol/xhtml-im",
        XHTML: "http://www.w3.org/1999/xhtml"
      },
      XHTML: {
        tags: ["a", "blockquote", "br", "cite", "em", "img", "li", "ol", "p", "span", "strong", "ul", "body"],
        attributes: {
          a: ["href"],
          blockquote: ["style"],
          br: [],
          cite: ["style"],
          em: [],
          img: ["src", "alt", "style", "height", "width"],
          li: ["style"],
          ol: ["style"],
          p: ["style"],
          span: ["style"],
          strong: [],
          ul: ["style"],
          body: []
        },
        css: ["background-color", "color", "font-family", "font-size", "font-style", "font-weight", "margin-left", "margin-right", "text-align", "text-decoration"],
        validTag: function validTag(t) {
          for (var e = 0; e < a.XHTML.tags.length; e++) if (t === a.XHTML.tags[e]) return !0;
          return !1;
        },
        validAttribute: function validAttribute(t, e) {
          if ("undefined" != typeof a.XHTML.attributes[t] && a.XHTML.attributes[t].length > 0) for (var n = 0; n < a.XHTML.attributes[t].length; n++) if (e === a.XHTML.attributes[t][n]) return !0;
          return !1;
        },
        validCSS: function validCSS(t) {
          for (var e = 0; e < a.XHTML.css.length; e++) if (t === a.XHTML.css[e]) return !0;
          return !1;
        }
      },
      Status: {
        ERROR: 0,
        CONNECTING: 1,
        CONNFAIL: 2,
        AUTHENTICATING: 3,
        AUTHFAIL: 4,
        CONNECTED: 5,
        DISCONNECTED: 6,
        DISCONNECTING: 7,
        ATTACHED: 8,
        REDIRECT: 9,
        CONNTIMEOUT: 10
      },
      LogLevel: {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        FATAL: 4
      },
      ElementType: {
        NORMAL: 1,
        TEXT: 3,
        CDATA: 4,
        FRAGMENT: 11
      },
      TIMEOUT: 1.1,
      SECONDARY_TIMEOUT: .1,
      addNamespace: function addNamespace(t, e) {
        a.NS[t] = e;
      },
      forEachChild: function forEachChild(t, e, n) {
        var i, s;
        for (i = 0; i < t.childNodes.length; i++) s = t.childNodes[i], s.nodeType !== a.ElementType.NORMAL || e && !this.isTagEqual(s, e) || n(s);
      },
      isTagEqual: function isTagEqual(t, e) {
        return t.tagName === e;
      },
      _xmlGenerator: null,
      _makeGenerator: function _makeGenerator() {
        var t;
        return void 0 === document.implementation.createDocument || document.implementation.createDocument && document.documentMode && document.documentMode < 10 ? (t = this._getIEXmlDom(), t.appendChild(t.createElement("Strophe2"))) : t = document.implementation.createDocument("jabber:client", "Strophe2", null), t;
      },
      xmlGenerator: function xmlGenerator() {
        return a._xmlGenerator || (a._xmlGenerator = a._makeGenerator()), a._xmlGenerator;
      },
      _getIEXmlDom: function _getIEXmlDom() {
        for (var t = null, e = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"], n = 0; n < e.length && null === t; n++) try {
          t = new ActiveXObject(e[n]);
        } catch (e) {
          t = null;
        }
        return t;
      },
      xmlElement: function xmlElement(t) {
        if (!t) return null;
        var e,
          n,
          i,
          s = a.xmlGenerator().createElement(t);
        for (e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          if (r) if ("string" == typeof r || "number" == typeof r) s.appendChild(a.xmlTextNode(r));else if ("object" == _typeof(r) && "function" == typeof r.sort) for (n = 0; n < r.length; n++) {
            var o = r[n];
            "object" == _typeof(o) && "function" == typeof o.sort && void 0 !== o[1] && null !== o[1] && s.setAttribute(o[0], o[1]);
          } else if ("object" == _typeof(r)) for (i in r) r.hasOwnProperty(i) && void 0 !== r[i] && null !== r[i] && s.setAttribute(i, r[i]);
        }
        return s;
      },
      xmlescape: function xmlescape(t) {
        return t = t.replace(/\&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"), t = t.replace(/'/g, "&apos;"), t = t.replace(/"/g, "&quot;");
      },
      xmlunescape: function xmlunescape(t) {
        return t = t.replace(/\&amp;/g, "&"), t = t.replace(/&lt;/g, "<"), t = t.replace(/&gt;/g, ">"), t = t.replace(/&apos;/g, "'"), t = t.replace(/&quot;/g, '"');
      },
      xmlTextNode: function xmlTextNode(t) {
        return a.xmlGenerator().createTextNode(t);
      },
      xmlHtmlNode: function xmlHtmlNode(t) {
        var e;
        if (DOMParser) {
          var n = new DOMParser();
          e = n.parseFromString(t, "text/xml");
        } else e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t);
        return e;
      },
      getText: function getText(t) {
        if (!t) return null;
        var e = "";
        0 === t.childNodes.length && t.nodeType === a.ElementType.TEXT && (e += t.nodeValue);
        for (var n = 0; n < t.childNodes.length; n++) t.childNodes[n].nodeType === a.ElementType.TEXT && (e += t.childNodes[n].nodeValue);
        return a.xmlescape(e);
      },
      copyElement: function copyElement(t) {
        var e, n;
        if (t.nodeType === a.ElementType.NORMAL) {
          for (n = a.xmlElement(t.tagName), e = 0; e < t.attributes.length; e++) n.setAttribute(t.attributes[e].nodeName, t.attributes[e].value);
          for (e = 0; e < t.childNodes.length; e++) n.appendChild(a.copyElement(t.childNodes[e]));
        } else t.nodeType === a.ElementType.TEXT && (n = a.xmlGenerator().createTextNode(t.nodeValue));
        return n;
      },
      createHtml: function createHtml(t) {
        var e, n, i, s, r, o, h, c, u, l, d;
        if (t.nodeType === a.ElementType.NORMAL) {
          if (s = t.nodeName.toLowerCase(), a.XHTML.validTag(s)) try {
            for (n = a.xmlElement(s), e = 0; e < a.XHTML.attributes[s].length; e++) if (r = a.XHTML.attributes[s][e], o = t.getAttribute(r), "undefined" != typeof o && null !== o && "" !== o && o !== !1 && 0 !== o) if ("style" === r && "object" == _typeof(o) && "undefined" != typeof o.cssText && (o = o.cssText), "style" === r) {
              for (h = [], c = o.split(";"), i = 0; i < c.length; i++) u = c[i].split(":"), l = u[0].replace(/^\s*/, "").replace(/\s*$/, "").toLowerCase(), a.XHTML.validCSS(l) && (d = u[1].replace(/^\s*/, "").replace(/\s*$/, ""), h.push(l + ": " + d));
              h.length > 0 && (o = h.join("; "), n.setAttribute(r, o));
            } else n.setAttribute(r, o);
            for (e = 0; e < t.childNodes.length; e++) n.appendChild(a.createHtml(t.childNodes[e]));
          } catch (t) {
            n = a.xmlTextNode("");
          } else for (n = a.xmlGenerator().createDocumentFragment(), e = 0; e < t.childNodes.length; e++) n.appendChild(a.createHtml(t.childNodes[e]));
        } else if (t.nodeType === a.ElementType.FRAGMENT) for (n = a.xmlGenerator().createDocumentFragment(), e = 0; e < t.childNodes.length; e++) n.appendChild(a.createHtml(t.childNodes[e]));else t.nodeType === a.ElementType.TEXT && (n = a.xmlTextNode(t.nodeValue));
        return n;
      },
      escapeNode: function escapeNode(t) {
        return "string" != typeof t ? t : t.replace(/^\s+|\s+$/g, "").replace(/\\/g, "\\5c").replace(/ /g, "\\20").replace(/\"/g, "\\22").replace(/\&/g, "\\26").replace(/\'/g, "\\27").replace(/\//g, "\\2f").replace(/:/g, "\\3a").replace(/</g, "\\3c").replace(/>/g, "\\3e").replace(/@/g, "\\40");
      },
      unescapeNode: function unescapeNode(t) {
        return "string" != typeof t ? t : t.replace(/\\20/g, " ").replace(/\\22/g, '"').replace(/\\26/g, "&").replace(/\\27/g, "'").replace(/\\2f/g, "/").replace(/\\3a/g, ":").replace(/\\3c/g, "<").replace(/\\3e/g, ">").replace(/\\40/g, "@").replace(/\\5c/g, "\\");
      },
      getNodeFromJid: function getNodeFromJid(t) {
        return t.indexOf("@") < 0 ? null : t.split("@")[0];
      },
      getDomainFromJid: function getDomainFromJid(t) {
        var e = a.getBareJidFromJid(t);
        if (e.indexOf("@") < 0) return e;
        var n = e.split("@");
        return n.splice(0, 1), n.join("@");
      },
      getResourceFromJid: function getResourceFromJid(t) {
        var e = t.split("/");
        return e.length < 2 ? null : (e.splice(0, 1), e.join("/"));
      },
      getBareJidFromJid: function getBareJidFromJid(t) {
        return t ? t.split("/")[0] : null;
      },
      _handleError: function _handleError(t) {
        "undefined" != typeof t.stack && a.fatal(t.stack), t.sourceURL ? a.fatal("error: " + this.handler + " " + t.sourceURL + ":" + t.line + " - " + t.name + ": " + t.message) : t.fileName ? a.fatal("error: " + this.handler + " " + t.fileName + ":" + t.lineNumber + " - " + t.name + ": " + t.message) : a.fatal("error: " + t.message);
      },
      log: function log(t, e) {},
      debug: function debug(t) {
        this.log(this.LogLevel.DEBUG, t);
      },
      info: function info(t) {
        this.log(this.LogLevel.INFO, t);
      },
      warn: function warn(t) {
        this.log(this.LogLevel.WARN, t);
      },
      error: function error(t) {
        this.log(this.LogLevel.ERROR, t);
      },
      fatal: function fatal(t) {
        this.log(this.LogLevel.FATAL, t);
      },
      serialize: function serialize(t) {
        var e;
        if (!t) return null;
        "function" == typeof t.tree && (t = t.tree());
        var n,
          i,
          s = t.nodeName;
        for (t.getAttribute("_realname") && (s = t.getAttribute("_realname")), e = "<" + s, n = 0; n < t.attributes.length; n++) "_realname" !== t.attributes[n].nodeName && (e += " " + t.attributes[n].nodeName + "='" + a.xmlescape(t.attributes[n].value) + "'");
        if (t.childNodes.length > 0) {
          for (e += ">", n = 0; n < t.childNodes.length; n++) switch (i = t.childNodes[n], i.nodeType) {
            case a.ElementType.NORMAL:
              e += a.serialize(i);
              break;
            case a.ElementType.TEXT:
              e += a.xmlescape(i.nodeValue);
              break;
            case a.ElementType.CDATA:
              e += "<![CDATA[" + i.nodeValue + "]]>";
          }
          e += "</" + s + ">";
        } else e += "/>";
        return e;
      },
      _requestId: 0,
      _connectionPlugins: {},
      addConnectionPlugin: function addConnectionPlugin(t, e) {
        a._connectionPlugins[t] = e;
      }
    }, a.Builder = function (t, e) {
      "presence" !== t && "message" !== t && "iq" !== t || (e && !e.xmlns ? e.xmlns = a.NS.CLIENT : e || (e = {
        xmlns: a.NS.CLIENT
      })), this.nodeTree = a.xmlElement(t, e), this.node = this.nodeTree;
    }, a.Builder.prototype = {
      tree: function tree() {
        return this.nodeTree;
      },
      toString: function toString() {
        return a.serialize(this.nodeTree);
      },
      up: function up() {
        return this.node = this.node.parentNode, this;
      },
      root: function root() {
        return this.node = this.nodeTree, this;
      },
      attrs: function attrs(t) {
        for (var e in t) t.hasOwnProperty(e) && (void 0 === t[e] ? this.node.removeAttribute(e) : this.node.setAttribute(e, t[e]));
        return this;
      },
      c: function c(t, e, n) {
        var i = a.xmlElement(t, e, n);
        return this.node.appendChild(i), "string" != typeof n && "number" != typeof n && (this.node = i), this;
      },
      cnode: function cnode(t) {
        var e,
          n = a.xmlGenerator();
        try {
          e = void 0 !== n.importNode;
        } catch (t) {
          e = !1;
        }
        var i = e ? n.importNode(t, !0) : a.copyElement(t);
        return this.node.appendChild(i), this.node = i, this;
      },
      t: function t(_t2) {
        var e = a.xmlTextNode(_t2);
        return this.node.appendChild(e), this;
      },
      h: function h(t) {
        var e = document.createElement("body");
        e.innerHTML = t;
        for (var n = a.createHtml(e); n.childNodes.length > 0;) this.node.appendChild(n.childNodes[0]);
        return this;
      }
    }, a.Handler = function (t, e, n, i, s, r, o) {
      this.handler = t, this.ns = e, this.name = n, this.type = i, this.id = s, this.options = o || {
        matchBareFromJid: !1,
        ignoreNamespaceFragment: !1
      }, this.options.matchBare && (a.warn('The "matchBare" option is deprecated, use "matchBareFromJid" instead.'), this.options.matchBareFromJid = this.options.matchBare, delete this.options.matchBare), this.options.matchBareFromJid ? this.from = r ? a.getBareJidFromJid(r) : null : this.from = r, this.user = !0;
    }, a.Handler.prototype = {
      getNamespace: function getNamespace(t) {
        var e = t.getAttribute("xmlns");
        return e && this.options.ignoreNamespaceFragment && (e = e.split("#")[0]), e;
      },
      namespaceMatch: function namespaceMatch(t) {
        var e = !1;
        if (!this.ns) return !0;
        var n = this;
        return a.forEachChild(t, null, function (t) {
          n.getNamespace(t) === n.ns && (e = !0);
        }), e = e || this.getNamespace(t) === this.ns;
      },
      isMatch: function isMatch(t) {
        var e = t.getAttribute("from");
        this.options.matchBareFromJid && (e = a.getBareJidFromJid(e));
        var n = t.getAttribute("type");
        return !(!this.namespaceMatch(t) || this.name && !a.isTagEqual(t, this.name) || this.type && (Array.isArray(this.type) ? this.type.indexOf(n) === -1 : n !== this.type) || this.id && t.getAttribute("id") !== this.id || this.from && e !== this.from);
      },
      run: function run(t) {
        var e = null;
        try {
          e = this.handler(t);
        } catch (t) {
          throw a._handleError(t), t;
        }
        return e;
      },
      toString: function toString() {
        return "{Handler: " + this.handler + "(" + this.name + "," + this.id + "," + this.ns + ")}";
      }
    }, a.TimedHandler = function (t, e) {
      this.period = t, this.handler = e, this.lastCalled = new Date().getTime(), this.user = !0;
    }, a.TimedHandler.prototype = {
      run: function run() {
        return this.lastCalled = new Date().getTime(), this.handler();
      },
      reset: function reset() {
        this.lastCalled = new Date().getTime();
      },
      toString: function toString() {
        return "{TimedHandler: " + this.handler + "(" + this.period + ")}";
      }
    }, a.Connection = function (t, e) {
      this.service = t, this.options = e || {};
      var i = this.options.protocol || "";
      0 === t.indexOf("ws:") || 0 === t.indexOf("wss:") || 0 === i.indexOf("ws") ? this._proto = new a.Websocket(this) : this._proto = new a.Bosh(this), this.jid = "", this.domain = null, this.features = null, this._sasl_data = {}, this.do_session = !1, this.do_bind = !1, this.timedHandlers = [], this.handlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this.protocolErrorHandlers = {
        HTTP: {},
        websocket: {}
      }, this._idleTimeout = null, this._disconnectTimeout = null, this.authenticated = !1, this.connected = !1, this.disconnecting = !1, this.do_authentication = !0, this.paused = !1, this.restored = !1, this._data = [], this._uniqueId = 0, this._sasl_success_handler = null, this._sasl_failure_handler = null, this._sasl_challenge_handler = null, this.maxRetries = 5, this._idleTimeout = setTimeout(function () {
        this._onIdle();
      }.bind(this), 100), n.addCookies(this.options.cookies), this.registerSASLMechanisms(this.options.mechanisms);
      for (var s in a._connectionPlugins) if (a._connectionPlugins.hasOwnProperty(s)) {
        var r = a._connectionPlugins[s],
          o = function o() {};
        o.prototype = r, this[s] = new o(), this[s].init(this);
      }
    }, a.Connection.prototype = {
      reset: function reset() {
        this._proto._reset(), this.do_session = !1, this.do_bind = !1, this.timedHandlers = [], this.handlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this.authenticated = !1, this.connected = !1, this.disconnecting = !1, this.restored = !1, this._data = [], this._requests = [], this._uniqueId = 0;
      },
      pause: function pause() {
        this.paused = !0;
      },
      resume: function resume() {
        this.paused = !1;
      },
      getUniqueId: function getUniqueId(t) {
        var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
          var e = 16 * Math.random() | 0,
            n = "x" === t ? e : 3 & e | 8;
          return n.toString(16);
        });
        return "string" == typeof t || "number" == typeof t ? e + ":" + t : e + "";
      },
      addProtocolErrorHandler: function addProtocolErrorHandler(t, e, n) {
        this.protocolErrorHandlers[t][e] = n;
      },
      connect: function connect(t, e, n, i, s, r, o) {
        this.jid = t, this.authzid = a.getBareJidFromJid(this.jid), this.authcid = o || a.getNodeFromJid(this.jid), this.pass = e, this.servtype = "xmpp", this.connect_callback = n, this.disconnecting = !1, this.connected = !1, this.authenticated = !1, this.restored = !1, this.domain = a.getDomainFromJid(this.jid), this._changeConnectStatus(a.Status.CONNECTING, null), this._proto._connect(i, s, r);
      },
      attach: function attach(t, e, n, i, s, r, o) {
        if (!(this._proto instanceof a.Bosh)) throw {
          name: "Strophe2SessionError",
          message: 'The "attach" method can only be used with a BOSH connection.'
        };
        this._proto._attach(t, e, n, i, s, r, o);
      },
      restore: function restore(t, e, n, i, s) {
        if (!this._sessionCachingSupported()) throw {
          name: "Strophe2SessionError",
          message: 'The "restore" method can only be used with a BOSH connection.'
        };
        this._proto._restore(t, e, n, i, s);
      },
      _sessionCachingSupported: function _sessionCachingSupported() {
        if (this._proto instanceof a.Bosh) {
          if (!JSON) return !1;
          try {
            sessionStorage.setItem("_Strophe2_", "_Strophe2_"), sessionStorage.removeItem("_Strophe2_");
          } catch (t) {
            return !1;
          }
          return !0;
        }
        return !1;
      },
      xmlInput: function xmlInput(t) {},
      xmlOutput: function xmlOutput(t) {},
      rawInput: function rawInput(t) {},
      rawOutput: function rawOutput(t) {},
      nextValidRid: function nextValidRid(t) {},
      send: function send(t) {
        if (null !== t) {
          if ("function" == typeof t.sort) for (var e = 0; e < t.length; e++) this._queueData(t[e]);else "function" == typeof t.tree ? this._queueData(t.tree()) : this._queueData(t);
          this._proto._send();
        }
      },
      flush: function flush() {
        clearTimeout(this._idleTimeout), this._onIdle();
      },
      sendPresence: function sendPresence(t, e, n, i) {
        var s = null,
          r = this;
        "function" == typeof t.tree && (t = t.tree());
        var o = t.getAttribute("id");
        if (o || (o = this.getUniqueId("sendPresence"), t.setAttribute("id", o)), "function" == typeof e || "function" == typeof n) {
          var a = this.addHandler(function (t) {
            s && r.deleteTimedHandler(s);
            var i = t.getAttribute("type");
            "error" === i ? n && n(t) : e && e(t);
          }, null, "presence", null, o);
          i && (s = this.addTimedHandler(i, function () {
            return r.deleteHandler(a), n && n(null), !1;
          }));
        }
        return this.send(t), o;
      },
      sendIQ: function sendIQ(t, e, n, i) {
        var s = null,
          r = this;
        "function" == typeof t.tree && (t = t.tree());
        var o = t.getAttribute("id");
        if (o || (o = this.getUniqueId("sendIQ"), t.setAttribute("id", o)), "function" == typeof e || "function" == typeof n) {
          var a = this.addHandler(function (t) {
            s && r.deleteTimedHandler(s);
            var i = t.getAttribute("type");
            if ("result" === i) e && e(t);else {
              if ("error" !== i) throw {
                name: "Strophe2Error",
                message: "Got bad IQ type of " + i
              };
              n && n(t);
            }
          }, null, "iq", ["error", "result"], o);
          i && (s = this.addTimedHandler(i, function () {
            return r.deleteHandler(a), n && n(null), !1;
          }));
        }
        return this.send(t), o;
      },
      _queueData: function _queueData(t) {
        if (null === t || !t.tagName || !t.childNodes) throw {
          name: "Strophe2Error",
          message: "Cannot queue non-DOMElement."
        };
        this._data.push(t);
      },
      _sendRestart: function _sendRestart() {
        this._data.push("restart"), this._proto._sendRestart(), this._idleTimeout = setTimeout(function () {
          this._onIdle();
        }.bind(this), 100);
      },
      addTimedHandler: function addTimedHandler(t, e) {
        var n = new a.TimedHandler(t, e);
        return this.addTimeds.push(n), n;
      },
      deleteTimedHandler: function deleteTimedHandler(t) {
        this.removeTimeds.push(t);
      },
      addHandler: function addHandler(t, e, n, i, s, r, o) {
        var h = new a.Handler(t, e, n, i, s, r, o);
        return this.addHandlers.push(h), h;
      },
      deleteHandler: function deleteHandler(t) {
        this.removeHandlers.push(t);
        var e = this.addHandlers.indexOf(t);
        e >= 0 && this.addHandlers.splice(e, 1);
      },
      registerSASLMechanisms: function registerSASLMechanisms(t) {
        this.mechanisms = {}, t = t || [a.SASLAnonymous, a.SASLExternal, a.SASLMD5, a.SASLOAuthBearer, a.SASLPlain, a.SASLSHA1], t.forEach(this.registerSASLMechanism.bind(this));
      },
      registerSASLMechanism: function registerSASLMechanism(t) {
        this.mechanisms[t.prototype.name] = t;
      },
      disconnect: function disconnect(t) {
        if (this._changeConnectStatus(a.Status.DISCONNECTING, t), a.info("Disconnect was called because: " + t), this.connected) {
          var e = !1;
          this.disconnecting = !0, this.authenticated && (e = o({
            xmlns: a.NS.CLIENT,
            type: "unavailable"
          })), this._disconnectTimeout = this._addSysTimedHandler(3e3, this._onDisconnectTimeout.bind(this)), this._proto._disconnect(e);
        } else a.info("Disconnect was called before Strophe2 connected to the server"), this._proto._abortAllRequests(), this._doDisconnect();
      },
      _changeConnectStatus: function _changeConnectStatus(t, e) {
        for (var n in a._connectionPlugins) if (a._connectionPlugins.hasOwnProperty(n)) {
          var i = this[n];
          if (i.statusChanged) try {
            i.statusChanged(t, e);
          } catch (t) {
            a.error("" + n + " plugin caused an exception changing status: " + t);
          }
        }
        if (this.connect_callback) try {
          this.connect_callback(t, e);
        } catch (t) {
          a._handleError(t), a.error("User connection callback caused an exception: " + t);
        }
      },
      _doDisconnect: function _doDisconnect(t) {
        "number" == typeof this._idleTimeout && clearTimeout(this._idleTimeout), null !== this._disconnectTimeout && (this.deleteTimedHandler(this._disconnectTimeout), this._disconnectTimeout = null), a.info("_doDisconnect was called"), this._proto._doDisconnect(), this.authenticated = !1, this.disconnecting = !1, this.restored = !1, this.handlers = [], this.timedHandlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this._changeConnectStatus(a.Status.DISCONNECTED, t), this.connected = !1;
      },
      _dataRecv: function _dataRecv(t, e) {
        a.info("_dataRecv called");
        var n = this._proto._reqToData(t);
        if (null !== n) {
          this.xmlInput !== a.Connection.prototype.xmlInput && (n.nodeName === this._proto.strip && n.childNodes.length ? this.xmlInput(n.childNodes[0]) : this.xmlInput(n)), this.rawInput !== a.Connection.prototype.rawInput && (e ? this.rawInput(e) : this.rawInput(a.serialize(n)));
          for (var i, s; this.removeHandlers.length > 0;) s = this.removeHandlers.pop(), i = this.handlers.indexOf(s), i >= 0 && this.handlers.splice(i, 1);
          for (; this.addHandlers.length > 0;) this.handlers.push(this.addHandlers.pop());
          if (this.disconnecting && this._proto._emptyQueue()) return void this._doDisconnect();
          var r,
            o,
            h = n.getAttribute("type");
          if (null !== h && "terminate" === h) {
            if (this.disconnecting) return;
            return r = n.getAttribute("condition"), o = n.getElementsByTagName("conflict"), null !== r ? ("remote-stream-error" === r && o.length > 0 && (r = "conflict"), this._changeConnectStatus(a.Status.CONNFAIL, r)) : this._changeConnectStatus(a.Status.CONNFAIL, "unknown"), void this._doDisconnect(r);
          }
          var c = this;
          a.forEachChild(n, null, function (t) {
            var e, n;
            for (n = c.handlers, c.handlers = [], e = 0; e < n.length; e++) {
              var i = n[e];
              try {
                !i.isMatch(t) || !c.authenticated && i.user ? c.handlers.push(i) : i.run(t) && c.handlers.push(i);
              } catch (t) {
                a.warn("Removing Strophe2 handlers due to uncaught exception: " + t.message);
              }
            }
          });
        }
      },
      mechanisms: {},
      _connect_cb: function _connect_cb(t, e, n) {
        a.info("_connect_cb was called"), this.connected = !0;
        var i;
        try {
          i = this._proto._reqToData(t);
        } catch (t) {
          if ("badformat" !== t) throw t;
          this._changeConnectStatus(a.Status.CONNFAIL, "bad-format"), this._doDisconnect("bad-format");
        }
        if (i) {
          this.xmlInput !== a.Connection.prototype.xmlInput && (i.nodeName === this._proto.strip && i.childNodes.length ? this.xmlInput(i.childNodes[0]) : this.xmlInput(i)), this.rawInput !== a.Connection.prototype.rawInput && (n ? this.rawInput(n) : this.rawInput(a.serialize(i)));
          var s = this._proto._connect_cb(i);
          if (s !== a.Status.CONNFAIL) {
            var r;
            if (r = i.getElementsByTagNameNS ? i.getElementsByTagNameNS(a.NS.STREAM, "features").length > 0 : i.getElementsByTagName("stream:features").length > 0 || i.getElementsByTagName("features").length > 0, !r) return void this._proto._no_auth_received(e);
            var o,
              h,
              c = [],
              u = i.getElementsByTagName("mechanism");
            if (u.length > 0) for (o = 0; o < u.length; o++) h = a.getText(u[o]), this.mechanisms[h] && c.push(this.mechanisms[h]);
            return 0 === c.length && 0 === i.getElementsByTagName("auth").length ? void this._proto._no_auth_received(e) : void (this.do_authentication !== !1 && this.authenticate(c));
          }
        }
      },
      sortMechanismsByPriority: function sortMechanismsByPriority(t) {
        var e, n, i, s;
        for (e = 0; e < t.length - 1; ++e) {
          for (i = e, n = e + 1; n < t.length; ++n) t[n].prototype.priority > t[i].prototype.priority && (i = n);
          i !== e && (s = t[e], t[e] = t[i], t[i] = s);
        }
        return t;
      },
      _attemptSASLAuth: function _attemptSASLAuth(t) {
        t = this.sortMechanismsByPriority(t || []);
        var e = 0,
          n = !1;
        for (e = 0; e < t.length; ++e) if (t[e].prototype.test(this)) {
          this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this._sasl_challenge_handler = this._addSysHandler(this._sasl_challenge_cb.bind(this), null, "challenge", null, null), this._sasl_mechanism = new t[e](), this._sasl_mechanism.onStart(this);
          var s = i("auth", {
            xmlns: a.NS.SASL,
            mechanism: this._sasl_mechanism.name
          });
          if (this._sasl_mechanism.isClientFirst) {
            var r = this._sasl_mechanism.onChallenge(this, null);
            s.t(btoa(r));
          }
          this.send(s.tree()), n = !0;
          break;
        }
        return n;
      },
      _attemptLegacyAuth: function _attemptLegacyAuth() {
        null === a.getNodeFromJid(this.jid) ? (this._changeConnectStatus(a.Status.CONNFAIL, "x-Strophe2-bad-non-anon-jid"), this.disconnect("x-Strophe2-bad-non-anon-jid")) : (this._changeConnectStatus(a.Status.AUTHENTICATING, null), this._addSysHandler(this._auth1_cb.bind(this), null, null, null, "_auth_1"), this.send(r({
          type: "get",
          to: this.domain,
          id: "_auth_1"
        }).c("query", {
          xmlns: a.NS.AUTH
        }).c("username", {}).t(a.getNodeFromJid(this.jid)).tree()));
      },
      authenticate: function authenticate(t) {
        this._attemptSASLAuth(t) || this._attemptLegacyAuth();
      },
      _sasl_challenge_cb: function _sasl_challenge_cb(t) {
        var e = atob(a.getText(t)),
          n = this._sasl_mechanism.onChallenge(this, e),
          s = i("response", {
            xmlns: a.NS.SASL
          });
        return "" !== n && s.t(btoa(n)), this.send(s.tree()), !0;
      },
      _auth1_cb: function _auth1_cb(t) {
        var e = r({
          type: "set",
          id: "_auth_2"
        }).c("query", {
          xmlns: a.NS.AUTH
        }).c("username", {}).t(a.getNodeFromJid(this.jid)).up().c("password").t(this.pass);
        return a.getResourceFromJid(this.jid) || (this.jid = a.getBareJidFromJid(this.jid) + "/Strophe2"), e.up().c("resource", {}).t(a.getResourceFromJid(this.jid)), this._addSysHandler(this._auth2_cb.bind(this), null, null, null, "_auth_2"), this.send(e.tree()), !1;
      },
      _sasl_success_cb: function _sasl_success_cb(t) {
        if (this._sasl_data["server-signature"]) {
          var e,
            n = atob(a.getText(t)),
            i = /([a-z]+)=([^,]+)(,|$)/,
            s = n.match(i);
          if ("v" === s[1] && (e = s[2]), e !== this._sasl_data["server-signature"]) return this.deleteHandler(this._sasl_failure_handler), this._sasl_failure_handler = null, this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null), this._sasl_data = {}, this._sasl_failure_cb(null);
        }
        a.info("SASL authentication succeeded."), this._sasl_mechanism && this._sasl_mechanism.onSuccess(), this.deleteHandler(this._sasl_failure_handler), this._sasl_failure_handler = null, this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null);
        var r = [],
          o = function o(t, e) {
            for (; t.length;) this.deleteHandler(t.pop());
            return this._sasl_auth1_cb.bind(this)(e), !1;
          };
        return r.push(this._addSysHandler(function (t) {
          o.bind(this)(r, t);
        }.bind(this), null, "stream:features", null, null)), r.push(this._addSysHandler(function (t) {
          o.bind(this)(r, t);
        }.bind(this), a.NS.STREAM, "features", null, null)), this._sendRestart(), !1;
      },
      _sasl_auth1_cb: function _sasl_auth1_cb(t) {
        this.features = t;
        var e, n;
        for (e = 0; e < t.childNodes.length; e++) n = t.childNodes[e], "bind" === n.nodeName && (this.do_bind = !0), "session" === n.nodeName && (this.do_session = !0);
        if (!this.do_bind) return this._changeConnectStatus(a.Status.AUTHFAIL, null), !1;
        this._addSysHandler(this._sasl_bind_cb.bind(this), null, null, null, "_bind_auth_2");
        var i = a.getResourceFromJid(this.jid);
        return i ? this.send(r({
          type: "set",
          id: "_bind_auth_2"
        }).c("bind", {
          xmlns: a.NS.BIND
        }).c("resource", {}).t(i).tree()) : this.send(r({
          type: "set",
          id: "_bind_auth_2"
        }).c("bind", {
          xmlns: a.NS.BIND
        }).tree()), !1;
      },
      _sasl_bind_cb: function _sasl_bind_cb(t) {
        if ("error" === t.getAttribute("type")) {
          a.info("SASL binding failed.");
          var e,
            n = t.getElementsByTagName("conflict");
          return n.length > 0 && (e = "conflict"), this._changeConnectStatus(a.Status.AUTHFAIL, e), !1;
        }
        var i,
          s = t.getElementsByTagName("bind");
        return s.length > 0 ? (i = s[0].getElementsByTagName("jid"), void (i.length > 0 && (this.jid = a.getText(i[0]), this.do_session ? (this._addSysHandler(this._sasl_session_cb.bind(this), null, null, null, "_session_auth_2"), this.send(r({
          type: "set",
          id: "_session_auth_2"
        }).c("session", {
          xmlns: a.NS.SESSION
        }).tree())) : (this.authenticated = !0, this._changeConnectStatus(a.Status.CONNECTED, null))))) : (a.info("SASL binding failed."), this._changeConnectStatus(a.Status.AUTHFAIL, null), !1);
      },
      _sasl_session_cb: function _sasl_session_cb(t) {
        if ("result" === t.getAttribute("type")) this.authenticated = !0, this._changeConnectStatus(a.Status.CONNECTED, null);else if ("error" === t.getAttribute("type")) return a.info("Session creation failed."), this._changeConnectStatus(a.Status.AUTHFAIL, null), !1;
        return !1;
      },
      _sasl_failure_cb: function _sasl_failure_cb(t) {
        return this._sasl_success_handler && (this.deleteHandler(this._sasl_success_handler), this._sasl_success_handler = null), this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null), this._sasl_mechanism && this._sasl_mechanism.onFailure(), this._changeConnectStatus(a.Status.AUTHFAIL, null), !1;
      },
      _auth2_cb: function _auth2_cb(t) {
        return "result" === t.getAttribute("type") ? (this.authenticated = !0, this._changeConnectStatus(a.Status.CONNECTED, null)) : "error" === t.getAttribute("type") && (this._changeConnectStatus(a.Status.AUTHFAIL, null), this.disconnect("authentication failed")), !1;
      },
      _addSysTimedHandler: function _addSysTimedHandler(t, e) {
        var n = new a.TimedHandler(t, e);
        return n.user = !1, this.addTimeds.push(n), n;
      },
      _addSysHandler: function _addSysHandler(t, e, n, i, s) {
        var r = new a.Handler(t, e, n, i, s);
        return r.user = !1, this.addHandlers.push(r), r;
      },
      _onDisconnectTimeout: function _onDisconnectTimeout() {
        return a.info("_onDisconnectTimeout was called"), this._changeConnectStatus(a.Status.CONNTIMEOUT, null), this._proto._onDisconnectTimeout(), this._doDisconnect(), !1;
      },
      _onIdle: function _onIdle() {
        for (var t, e, n, i; this.addTimeds.length > 0;) this.timedHandlers.push(this.addTimeds.pop());
        for (; this.removeTimeds.length > 0;) e = this.removeTimeds.pop(), t = this.timedHandlers.indexOf(e), t >= 0 && this.timedHandlers.splice(t, 1);
        var s = new Date().getTime();
        for (i = [], t = 0; t < this.timedHandlers.length; t++) e = this.timedHandlers[t], !this.authenticated && e.user || (n = e.lastCalled + e.period, n - s <= 0 ? e.run() && i.push(e) : i.push(e));
        this.timedHandlers = i, clearTimeout(this._idleTimeout), this._proto._onIdle(), this.connected && (this._idleTimeout = setTimeout(function () {
          this._onIdle();
        }.bind(this), 100));
      }
    }, a.SASLMechanism = function (t, e, n) {
      this.name = t, this.isClientFirst = e, this.priority = n;
    }, a.SASLMechanism.prototype = {
      test: function test(t) {
        return !0;
      },
      onStart: function onStart(t) {
        this._connection = t;
      },
      onChallenge: function onChallenge(t, e) {
        throw new Error("You should implement challenge handling!");
      },
      onFailure: function onFailure() {
        this._connection = null;
      },
      onSuccess: function onSuccess() {
        this._connection = null;
      }
    }, a.SASLAnonymous = function () {}, a.SASLAnonymous.prototype = new a.SASLMechanism("ANONYMOUS", !1, 20), a.SASLAnonymous.prototype.test = function (t) {
      return null === t.authcid;
    }, a.SASLPlain = function () {}, a.SASLPlain.prototype = new a.SASLMechanism("PLAIN", !0, 30), a.SASLPlain.prototype.test = function (t) {
      return null !== t.authcid;
    }, a.SASLPlain.prototype.onChallenge = function (t) {
      var e = t.authzid;
      return e += "\0", e += t.authcid, e += "\0", e += t.pass, n.utf16to8(e);
    }, a.SASLSHA1 = function () {}, a.SASLSHA1.prototype = new a.SASLMechanism("SCRAM-SHA-1", !0, 50), a.SASLSHA1.prototype.test = function (t) {
      return null !== t.authcid;
    }, a.SASLSHA1.prototype.onChallenge = function (i, s, r) {
      var o = r || e.hexdigest(1234567890 * Math.random()),
        a = "n=" + n.utf16to8(i.authcid);
      return a += ",r=", a += o, i._sasl_data.cnonce = o, i._sasl_data["client-first-message-bare"] = a, a = "n,," + a, this.onChallenge = function (e, i) {
        for (var s, r, o, a, h, c, u, l, d, _, f, p, m = "c=biws,", g = e._sasl_data["client-first-message-bare"] + "," + i + ",", S = e._sasl_data.cnonce, b = /([a-z]+)=([^,]+)(,|$)/; i.match(b);) {
          var y = i.match(b);
          switch (i = i.replace(y[0], ""), y[1]) {
            case "r":
              s = y[2];
              break;
            case "s":
              r = y[2];
              break;
            case "i":
              o = y[2];
          }
        }
        if (s.substr(0, S.length) !== S) return e._sasl_data = {}, e._sasl_failure_cb();
        for (m += "r=" + s, g += m, r = atob(r), r += "\0\0\0", d = n.utf16to8(e.pass), a = c = t.core_hmac_sha1(d, r), u = 1; u < o; u++) {
          for (h = t.core_hmac_sha1(d, t.binb2str(c)), l = 0; l < 5; l++) a[l] ^= h[l];
          c = h;
        }
        for (a = t.binb2str(a), _ = t.core_hmac_sha1(a, "Client Key"), f = t.str_hmac_sha1(a, "Server Key"), p = t.core_hmac_sha1(t.str_sha1(t.binb2str(_)), g), e._sasl_data["server-signature"] = t.b64_hmac_sha1(f, g), l = 0; l < 5; l++) _[l] ^= p[l];
        return m += ",p=" + btoa(t.binb2str(_));
      }.bind(this), a;
    }, a.SASLMD5 = function () {}, a.SASLMD5.prototype = new a.SASLMechanism("DIGEST-MD5", !1, 40), a.SASLMD5.prototype.test = function (t) {
      return null !== t.authcid;
    }, a.SASLMD5.prototype._quote = function (t) {
      return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
    }, a.SASLMD5.prototype.onChallenge = function (t, i, s) {
      for (var r, o = /([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/, a = s || e.hexdigest("" + 1234567890 * Math.random()), h = "", c = null, u = "", l = ""; i.match(o);) switch (r = i.match(o), i = i.replace(r[0], ""), r[2] = r[2].replace(/^"(.+)"$/, "$1"), r[1]) {
        case "realm":
          h = r[2];
          break;
        case "nonce":
          u = r[2];
          break;
        case "qop":
          l = r[2];
          break;
        case "host":
          c = r[2];
      }
      var d = t.servtype + "/" + t.domain;
      null !== c && (d = d + "/" + c);
      var _ = n.utf16to8(t.authcid + ":" + h + ":" + this._connection.pass),
        f = e.hash(_) + ":" + u + ":" + a,
        p = "AUTHENTICATE:" + d,
        m = "";
      return m += "charset=utf-8,", m += "username=" + this._quote(n.utf16to8(t.authcid)) + ",", m += "realm=" + this._quote(h) + ",", m += "nonce=" + this._quote(u) + ",", m += "nc=00000001,", m += "cnonce=" + this._quote(a) + ",", m += "digest-uri=" + this._quote(d) + ",", m += "response=" + e.hexdigest(e.hexdigest(f) + ":" + u + ":00000001:" + a + ":auth:" + e.hexdigest(p)) + ",", m += "qop=auth", this.onChallenge = function () {
        return "";
      }, m;
    }, a.SASLOAuthBearer = function () {}, a.SASLOAuthBearer.prototype = new a.SASLMechanism("OAUTHBEARER", !0, 60), a.SASLOAuthBearer.prototype.test = function (t) {
      return null !== t.pass;
    }, a.SASLOAuthBearer.prototype.onChallenge = function (t) {
      var e = "n,";
      return null !== t.authcid && (e = e + "a=" + t.authzid), e += ",", e += "", e += "auth=Bearer ", e += t.pass, e += "", e += "", n.utf16to8(e);
    }, a.SASLExternal = function () {}, a.SASLExternal.prototype = new a.SASLMechanism("EXTERNAL", !0, 10), a.SASLExternal.prototype.onChallenge = function (t) {
      return t.authcid === t.authzid ? "" : t.authzid;
    }, {
      Strophe2: a,
      $build: i,
      $iq: r,
      $msg: s,
      $pres: o,
      SHA1: t,
      MD5: e,
      b64_hmac_sha1: t.b64_hmac_sha1,
      b64_sha1: t.b64_sha1,
      str_hmac_sha1: t.str_hmac_sha1,
      str_sha1: t.str_sha1
    };
  }), function (t, e) {
    return "function" == typeof n && n.amd ? void n("Strophe2-bosh", ["Strophe2-core"], function (t) {
      return e(t.Strophe2, t.$build);
    }) : e(Strophe2, $build);
  }(this, function (t, e) {
    return t.Request = function (e, n, i, s) {
      this.id = ++t._requestId, this.xmlData = e, this.data = t.serialize(e), this.origFunc = n, this.func = n, this.rid = i, this.date = NaN, this.sends = s || 0, this.abort = !1, this.dead = null, this.age = function () {
        if (!this.date) return 0;
        var t = new Date();
        return (t - this.date) / 1e3;
      }, this.timeDead = function () {
        if (!this.dead) return 0;
        var t = new Date();
        return (t - this.dead) / 1e3;
      }, this.xhr = this._newXHR();
    }, t.Request.prototype = {
      getResponse: function getResponse() {
        var e = null;
        if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
          if (e = this.xhr.responseXML.documentElement, "parsererror" === e.tagName) throw t.error("invalid response received"), t.error("responseText: " + this.xhr.responseText), t.error("responseXML: " + t.serialize(this.xhr.responseXML)), "parsererror";
        } else if (this.xhr.responseText) throw t.error("invalid response received"), t.error("responseText: " + this.xhr.responseText), "badformat";
        return e;
      },
      _newXHR: function _newXHR() {
        var t = null;
        return window.XMLHttpRequest ? (t = new XMLHttpRequest(), t.overrideMimeType && t.overrideMimeType("text/xml; charset=utf-8")) : window.ActiveXObject && (t = new ActiveXObject("Microsoft.XMLHTTP")), t.onreadystatechange = this.func.bind(null, this), t;
      }
    }, t.Bosh = function (t) {
      this._conn = t, this.rid = Math.floor(4294967295 * Math.random()), this.sid = null, this.hold = 1, this.wait = 60, this.window = 5, this.errors = 0, this.inactivity = null, this._requests = [];
    }, t.Bosh.prototype = {
      strip: null,
      _buildBody: function _buildBody() {
        var n = e("body", {
          rid: this.rid++,
          xmlns: t.NS.HTTPBIND
        });
        return null !== this.sid && n.attrs({
          sid: this.sid
        }), this._conn.options.keepalive && this._conn._sessionCachingSupported() && this._cacheSession(), n;
      },
      _reset: function _reset() {
        this.rid = Math.floor(4294967295 * Math.random()), this.sid = null, this.errors = 0, this._conn._sessionCachingSupported() && window.sessionStorage.removeItem("Strophe2-bosh-session"), this._conn.nextValidRid(this.rid);
      },
      _connect: function _connect(e, n, i) {
        this.wait = e || this.wait, this.hold = n || this.hold, this.errors = 0;
        var s = this._buildBody().attrs({
          to: this._conn.domain,
          "xml:lang": "en",
          wait: this.wait,
          hold: this.hold,
          content: "text/xml; charset=utf-8",
          ver: "1.6",
          "xmpp:version": "1.0",
          "xmlns:xmpp": t.NS.BOSH
        });
        i && s.attrs({
          route: i
        });
        var r = this._conn._connect_cb;
        this._requests.push(new t.Request(s.tree(), this._onRequestStateChange.bind(this, r.bind(this._conn)), s.tree().getAttribute("rid"))), this._throttledRequestHandler();
      },
      _attach: function _attach(e, n, i, s, r, o, a) {
        this._conn.jid = e, this.sid = n, this.rid = i, this._conn.connect_callback = s, this._conn.domain = t.getDomainFromJid(this._conn.jid), this._conn.authenticated = !0, this._conn.connected = !0, this.wait = r || this.wait, this.hold = o || this.hold, this.window = a || this.window, this._conn._changeConnectStatus(t.Status.ATTACHED, null);
      },
      _restore: function _restore(e, n, i, s, r) {
        var o = JSON.parse(window.sessionStorage.getItem("Strophe2-bosh-session"));
        if (!("undefined" != typeof o && null !== o && o.rid && o.sid && o.jid && ("undefined" == typeof e || null === e || t.getBareJidFromJid(o.jid) === t.getBareJidFromJid(e) || null === t.getNodeFromJid(e) && t.getDomainFromJid(o.jid) === e))) throw {
          name: "Strophe2SessionError",
          message: "_restore: no restoreable session."
        };
        this._conn.restored = !0, this._attach(o.jid, o.sid, o.rid, n, i, s, r);
      },
      _cacheSession: function _cacheSession() {
        this._conn.authenticated ? this._conn.jid && this.rid && this.sid && window.sessionStorage.setItem("Strophe2-bosh-session", JSON.stringify({
          jid: this._conn.jid,
          rid: this.rid,
          sid: this.sid
        })) : window.sessionStorage.removeItem("Strophe2-bosh-session");
      },
      _connect_cb: function _connect_cb(e) {
        var n,
          i,
          s = e.getAttribute("type");
        if (null !== s && "terminate" === s) return n = e.getAttribute("condition"), t.error("BOSH-Connection failed: " + n), i = e.getElementsByTagName("conflict"), null !== n ? ("remote-stream-error" === n && i.length > 0 && (n = "conflict"), this._conn._changeConnectStatus(t.Status.CONNFAIL, n)) : this._conn._changeConnectStatus(t.Status.CONNFAIL, "unknown"), this._conn._doDisconnect(n), t.Status.CONNFAIL;
        this.sid || (this.sid = e.getAttribute("sid"));
        var r = e.getAttribute("requests");
        r && (this.window = parseInt(r, 10));
        var o = e.getAttribute("hold");
        o && (this.hold = parseInt(o, 10));
        var a = e.getAttribute("wait");
        a && (this.wait = parseInt(a, 10));
        var h = e.getAttribute("inactivity");
        h && (this.inactivity = parseInt(h, 10));
      },
      _disconnect: function _disconnect(t) {
        this._sendTerminate(t);
      },
      _doDisconnect: function _doDisconnect() {
        this.sid = null, this.rid = Math.floor(4294967295 * Math.random()), this._conn._sessionCachingSupported() && window.sessionStorage.removeItem("Strophe2-bosh-session"), this._conn.nextValidRid(this.rid);
      },
      _emptyQueue: function _emptyQueue() {
        return 0 === this._requests.length;
      },
      _callProtocolErrorHandlers: function _callProtocolErrorHandlers(t) {
        var e,
          n = this._getRequestStatus(t);
        e = this._conn.protocolErrorHandlers.HTTP[n], e && e.call(this, n);
      },
      _hitError: function _hitError(e) {
        this.errors++, t.warn("request errored, status: " + e + ", number of errors: " + this.errors), this.errors > 4 && this._conn._onDisconnectTimeout();
      },
      _no_auth_received: function _no_auth_received(e) {
        e = e ? e.bind(this._conn) : this._conn._connect_cb.bind(this._conn);
        var n = this._buildBody();
        this._requests.push(new t.Request(n.tree(), this._onRequestStateChange.bind(this, e.bind(this._conn)), n.tree().getAttribute("rid"))), this._throttledRequestHandler();
      },
      _onDisconnectTimeout: function _onDisconnectTimeout() {
        this._abortAllRequests();
      },
      _abortAllRequests: function _abortAllRequests() {
        for (var t; this._requests.length > 0;) t = this._requests.pop(), t.abort = !0, t.xhr.abort(), t.xhr.onreadystatechange = function () {};
      },
      _onIdle: function _onIdle() {
        var e = this._conn._data;
        if (this._conn.authenticated && 0 === this._requests.length && 0 === e.length && !this._conn.disconnecting && (t.info("no requests during idle cycle, sending blank request"), e.push(null)), !this._conn.paused) {
          if (this._requests.length < 2 && e.length > 0) {
            for (var n = this._buildBody(), i = 0; i < e.length; i++) null !== e[i] && ("restart" === e[i] ? n.attrs({
              to: this._conn.domain,
              "xml:lang": "en",
              "xmpp:restart": "true",
              "xmlns:xmpp": t.NS.BOSH
            }) : n.cnode(e[i]).up());
            delete this._conn._data, this._conn._data = [], this._requests.push(new t.Request(n.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), n.tree().getAttribute("rid"))), this._throttledRequestHandler();
          }
          if (this._requests.length > 0) {
            var s = this._requests[0].age();
            null !== this._requests[0].dead && this._requests[0].timeDead() > Math.floor(t.SECONDARY_TIMEOUT * this.wait) && this._throttledRequestHandler(), s > Math.floor(t.TIMEOUT * this.wait) && (t.warn("Request " + this._requests[0].id + " timed out, over " + Math.floor(t.TIMEOUT * this.wait) + " seconds since last activity"), this._throttledRequestHandler());
          }
        }
      },
      _getRequestStatus: function _getRequestStatus(e, n) {
        var i;
        if (4 === e.xhr.readyState) try {
          i = e.xhr.status;
        } catch (e) {
          t.error("Caught an error while retrieving a request's status, reqStatus: " + i);
        }
        return "undefined" == typeof i && (i = "number" == typeof n ? n : 0), i;
      },
      _onRequestStateChange: function _onRequestStateChange(e, n) {
        if (t.debug("request id " + n.id + "." + n.sends + " state changed to " + n.xhr.readyState), n.abort) return void (n.abort = !1);
        if (4 === n.xhr.readyState) {
          var i = this._getRequestStatus(n);
          if (this.disconnecting && i >= 400) return this._hitError(i), void this._callProtocolErrorHandlers(n);
          var s = i > 0 && i < 500,
            r = n.sends > this._conn.maxRetries;
          if ((s || r) && (this._removeRequest(n), t.debug("request id " + n.id + " should now be removed")), 200 === i) {
            var o = this._requests[0] === n,
              a = this._requests[1] === n;
            (a || o && this._requests.length > 0 && this._requests[0].age() > Math.floor(t.SECONDARY_TIMEOUT * this.wait)) && this._restartRequest(0), this._conn.nextValidRid(Number(n.rid) + 1), t.debug("request id " + n.id + "." + n.sends + " got 200"), e(n), this.errors = 0;
          } else 0 === i || i >= 400 && i < 600 || i >= 12e3 ? (t.error("request id " + n.id + "." + n.sends + " error " + i + " happened"), this._hitError(i), this._callProtocolErrorHandlers(n), i >= 400 && i < 500 && (this._conn._changeConnectStatus(t.Status.DISCONNECTING, null), this._conn._doDisconnect())) : t.error("request id " + n.id + "." + n.sends + " error " + i + " happened");
          s || r ? r && !this._conn.connected && this._conn._changeConnectStatus(t.Status.CONNFAIL, "giving-up") : this._throttledRequestHandler();
        }
      },
      _processRequest: function _processRequest(e) {
        var n = this,
          i = this._requests[e],
          s = this._getRequestStatus(i, -1);
        if (i.sends > this._conn.maxRetries) return void this._conn._onDisconnectTimeout();
        var r = i.age(),
          o = !isNaN(r) && r > Math.floor(t.TIMEOUT * this.wait),
          a = null !== i.dead && i.timeDead() > Math.floor(t.SECONDARY_TIMEOUT * this.wait),
          h = 4 === i.xhr.readyState && (s < 1 || s >= 500);
        if ((o || a || h) && (a && t.error("Request " + this._requests[e].id + " timed out (secondary), restarting"), i.abort = !0, i.xhr.abort(), i.xhr.onreadystatechange = function () {}, this._requests[e] = new t.Request(i.xmlData, i.origFunc, i.rid, i.sends), i = this._requests[e]), 0 === i.xhr.readyState) {
          t.debug("request id " + i.id + "." + i.sends + " posting");
          try {
            var c = this._conn.options.contentType || "text/xml; charset=utf-8";
            i.xhr.open("POST", this._conn.service, !this._conn.options.sync), "undefined" != typeof i.xhr.setRequestHeader && i.xhr.setRequestHeader("Content-Type", c), this._conn.options.withCredentials && (i.xhr.withCredentials = !0);
          } catch (e) {
            return t.error("XHR open failed: " + e.toString()), this._conn.connected || this._conn._changeConnectStatus(t.Status.CONNFAIL, "bad-service"), void this._conn.disconnect();
          }
          var u = function u() {
            if (i.date = new Date(), n._conn.options.customHeaders) {
              var t = n._conn.options.customHeaders;
              for (var e in t) t.hasOwnProperty(e) && i.xhr.setRequestHeader(e, t[e]);
            }
            i.xhr.send(i.data);
          };
          if (i.sends > 1) {
            var l = 1e3 * Math.min(Math.floor(t.TIMEOUT * this.wait), Math.pow(i.sends, 3));
            setTimeout(function () {
              u();
            }, l);
          } else u();
          i.sends++, this._conn.xmlOutput !== t.Connection.prototype.xmlOutput && (i.xmlData.nodeName === this.strip && i.xmlData.childNodes.length ? this._conn.xmlOutput(i.xmlData.childNodes[0]) : this._conn.xmlOutput(i.xmlData)), this._conn.rawOutput !== t.Connection.prototype.rawOutput && this._conn.rawOutput(i.data);
        } else t.debug("_processRequest: " + (0 === e ? "first" : "second") + " request has readyState of " + i.xhr.readyState);
      },
      _removeRequest: function _removeRequest(e) {
        t.debug("removing request");
        var n;
        for (n = this._requests.length - 1; n >= 0; n--) e === this._requests[n] && this._requests.splice(n, 1);
        e.xhr.onreadystatechange = function () {}, this._throttledRequestHandler();
      },
      _restartRequest: function _restartRequest(t) {
        var e = this._requests[t];
        null === e.dead && (e.dead = new Date()), this._processRequest(t);
      },
      _reqToData: function _reqToData(t) {
        try {
          return t.getResponse();
        } catch (t) {
          if ("parsererror" !== t) throw t;
          this._conn.disconnect("Strophe2-parsererror");
        }
      },
      _sendTerminate: function _sendTerminate(e) {
        t.info("_sendTerminate was called");
        var n = this._buildBody().attrs({
          type: "terminate"
        });
        e && n.cnode(e.tree());
        var i = new t.Request(n.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), n.tree().getAttribute("rid"));
        this._requests.push(i), this._throttledRequestHandler();
      },
      _send: function _send() {
        clearTimeout(this._conn._idleTimeout), this._throttledRequestHandler(), this._conn._idleTimeout = setTimeout(function () {
          this._onIdle();
        }.bind(this._conn), 100);
      },
      _sendRestart: function _sendRestart() {
        this._throttledRequestHandler(), clearTimeout(this._conn._idleTimeout);
      },
      _throttledRequestHandler: function _throttledRequestHandler() {
        this._requests ? t.debug("_throttledRequestHandler called with " + this._requests.length + " requests") : t.debug("_throttledRequestHandler called with undefined requests"), this._requests && 0 !== this._requests.length && (this._requests.length > 0 && this._processRequest(0), this._requests.length > 1 && Math.abs(this._requests[0].rid - this._requests[1].rid) < this.window && this._processRequest(1));
      }
    }, t;
  }), function (t, e) {
    return "function" == typeof n && n.amd ? void n("Strophe2-websocket", ["Strophe2-core"], function (t) {
      return e(t.Strophe2, t.$build);
    }) : e(Strophe2, $build);
  }(this, function (t, e) {
    return t.Websocket = function (t) {
      this._conn = t, this.strip = "wrapper";
      var e = t.service;
      if (0 !== e.indexOf("ws:") && 0 !== e.indexOf("wss:")) {
        var n = "";
        n += "ws" === t.options.protocol && "https:" !== window.location.protocol ? "ws" : "wss", n += "://" + window.location.host, n += 0 !== e.indexOf("/") ? window.location.pathname + e : e, t.service = n;
      }
    }, t.Websocket.prototype = {
      _buildStream: function _buildStream() {
        return e("open", {
          xmlns: t.NS.FRAMING,
          to: this._conn.domain,
          version: "1.0"
        });
      },
      _check_streamerror: function _check_streamerror(e, n) {
        var i;
        if (i = e.getElementsByTagNameNS ? e.getElementsByTagNameNS(t.NS.STREAM, "error") : e.getElementsByTagName("stream:error"), 0 === i.length) return !1;
        for (var s = i[0], r = "", o = "", a = "urn:ietf:params:xml:ns:xmpp-streams", h = 0; h < s.childNodes.length; h++) {
          var c = s.childNodes[h];
          if (c.getAttribute("xmlns") !== a) break;
          "text" === c.nodeName ? o = c.textContent : r = c.nodeName;
        }
        var u = "WebSocket stream error: ";
        return u += r ? r : "unknown", o && (u += " - " + o), t.error(u), this._conn._changeConnectStatus(n, r), this._conn._doDisconnect(), !0;
      },
      _reset: function _reset() {},
      _connect: function _connect() {
        this._closeSocket(), this.socket = new WebSocket(this._conn.service, "xmpp"), this.socket.onopen = this._onOpen.bind(this), this.socket.onerror = this._onError.bind(this), this.socket.onclose = this._onClose.bind(this), this.socket.onmessage = this._connect_cb_wrapper.bind(this);
      },
      _connect_cb: function _connect_cb(e) {
        var n = this._check_streamerror(e, t.Status.CONNFAIL);
        if (n) return t.Status.CONNFAIL;
      },
      _handleStreamStart: function _handleStreamStart(e) {
        var n = !1,
          i = e.getAttribute("xmlns");
        "string" != typeof i ? n = "Missing xmlns in <open />" : i !== t.NS.FRAMING && (n = "Wrong xmlns in <open />: " + i);
        var s = e.getAttribute("version");
        return "string" != typeof s ? n = "Missing version in <open />" : "1.0" !== s && (n = "Wrong version in <open />: " + s), !n || (this._conn._changeConnectStatus(t.Status.CONNFAIL, n), this._conn._doDisconnect(), !1);
      },
      _connect_cb_wrapper: function _connect_cb_wrapper(e) {
        if (0 === e.data.indexOf("<open ") || 0 === e.data.indexOf("<?xml")) {
          var n = e.data.replace(/^(<\?.*?\?>\s*)*/, "");
          if ("" === n) return;
          var i = new DOMParser().parseFromString(n, "text/xml").documentElement;
          this._conn.xmlInput(i), this._conn.rawInput(e.data), this._handleStreamStart(i) && this._connect_cb(i);
        } else if (0 === e.data.indexOf("<close ")) {
          this._conn.rawInput(e.data), this._conn.xmlInput(e);
          var s = e.getAttribute("see-other-uri");
          s ? (this._conn._changeConnectStatus(t.Status.REDIRECT, "Received see-other-uri, resetting connection"), this._conn.reset(), this._conn.service = s, this._connect()) : (this._conn._changeConnectStatus(t.Status.CONNFAIL, "Received closing stream"), this._conn._doDisconnect());
        } else {
          var r = this._streamWrap(e.data),
            o = new DOMParser().parseFromString(r, "text/xml").documentElement;
          this.socket.onmessage = this._onMessage.bind(this), this._conn._connect_cb(o, null, e.data);
        }
      },
      _disconnect: function _disconnect(n) {
        if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
          n && this._conn.send(n);
          var i = e("close", {
            xmlns: t.NS.FRAMING
          });
          this._conn.xmlOutput(i);
          var s = t.serialize(i);
          this._conn.rawOutput(s);
          try {
            this.socket.send(s);
          } catch (e) {
            t.info("Couldn't send <close /> tag.");
          }
        }
        this._conn._doDisconnect();
      },
      _doDisconnect: function _doDisconnect() {
        t.info("WebSockets _doDisconnect was called"), this._closeSocket();
      },
      _streamWrap: function _streamWrap(t) {
        return "<wrapper>" + t + "</wrapper>";
      },
      _closeSocket: function _closeSocket() {
        if (this.socket) try {
          this.socket.close();
        } catch (t) {}
        this.socket = null;
      },
      _emptyQueue: function _emptyQueue() {
        return !0;
      },
      _onClose: function _onClose(e) {
        this._conn.connected && !this._conn.disconnecting ? (t.error("Websocket closed unexpectedly"), this._conn._doDisconnect()) : e && 1006 === e.code && !this._conn.connected && this.socket ? (t.error("Websocket closed unexcectedly"), this._conn._changeConnectStatus(t.Status.CONNFAIL, "The WebSocket connection could not be established or was disconnected."), this._conn._doDisconnect()) : t.info("Websocket closed");
      },
      _no_auth_received: function _no_auth_received(e) {
        t.error("Server did not send any auth methods"), this._conn._changeConnectStatus(t.Status.CONNFAIL, "Server did not send any auth methods"), e && (e = e.bind(this._conn))(), this._conn._doDisconnect();
      },
      _onDisconnectTimeout: function _onDisconnectTimeout() {},
      _abortAllRequests: function _abortAllRequests() {},
      _onError: function _onError(e) {
        t.error("Websocket error " + e), this._conn._changeConnectStatus(t.Status.CONNFAIL, "The WebSocket connection could not be established or was disconnected."), this._disconnect();
      },
      _onIdle: function _onIdle() {
        var e = this._conn._data;
        if (e.length > 0 && !this._conn.paused) {
          for (var n = 0; n < e.length; n++) if (null !== e[n]) {
            var i, s;
            i = "restart" === e[n] ? this._buildStream().tree() : e[n], s = t.serialize(i), this._conn.xmlOutput(i), this._conn.rawOutput(s), this.socket.send(s);
          }
          this._conn._data = [];
        }
      },
      _onMessage: function _onMessage(e) {
        var n,
          i,
          s = '<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';
        if (e.data === s) return this._conn.rawInput(s), this._conn.xmlInput(e), void (this._conn.disconnecting || this._conn._doDisconnect());
        if (0 === e.data.search("<open ")) {
          if (n = new DOMParser().parseFromString(e.data, "text/xml").documentElement, !this._handleStreamStart(n)) return;
        } else i = this._streamWrap(e.data), n = new DOMParser().parseFromString(i, "text/xml").documentElement;
        return this._check_streamerror(n, t.Status.ERROR) ? void 0 : this._conn.disconnecting && "presence" === n.firstChild.nodeName && "unavailable" === n.firstChild.getAttribute("type") ? (this._conn.xmlInput(n), void this._conn.rawInput(t.serialize(n))) : void this._conn._dataRecv(n, e.data);
      },
      _onOpen: function _onOpen() {
        t.info("Websocket open");
        var e = this._buildStream();
        this._conn.xmlOutput(e.tree());
        var n = t.serialize(e);
        this._conn.rawOutput(n), this.socket.send(n);
      },
      _reqToData: function _reqToData(t) {
        return t;
      },
      _send: function _send() {
        this._conn.flush();
      },
      _sendRestart: function _sendRestart() {
        clearTimeout(this._conn._idleTimeout), this._conn._onIdle.bind(this._conn)();
      }
    }, t;
  }), function (t) {
    "function" == typeof n && n.amd && n("Strophe2", ["Strophe2-core", "Strophe2-bosh", "Strophe2-websocket"], function (t) {
      return t;
    });
  }(this), e(["Strophe2-polyfill"]), e("Strophe2");
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34053" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","strophe.js"], null)
//# sourceMappingURL=/strophe.3d817a25.js.map